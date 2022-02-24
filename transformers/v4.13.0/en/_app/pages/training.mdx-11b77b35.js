import{S as Rf,i as Jf,s as Xf,e as l,k as p,w as h,t as r,M as Zf,c as i,d as t,m,a as f,x as u,h as o,b as d,F as a,g as n,y as c,L as Qf,q as _,o as w,B as v}from"../chunks/vendor-68651a14.js";import{Y as Jr}from"../chunks/Youtube-36958e9e.js";import{I as ta}from"../chunks/IconCopyLink-8ff17449.js";import{C as y}from"../chunks/CodeBlock-b98730f5.js";import"../chunks/CopyButton-e88c769b.js";function Vf(Xr){let x,rt,g,P,aa,_e,Zr,sa,Qr,Ra,z,Vr,ra,eo,to,ot,ao,so,Ja,F,ro,we,oo,no,nt,lo,io,Xa,lt,Za,N,H,oa,ve,fo,na,po,Qa,ye,Va,k,mo,be,ho,uo,$e,co,_o,it,wo,vo,es,K,yo,la,bo,$o,ts,ge,as,C,go,ia,ko,Eo,fa,To,jo,ss,b,Ao,pa,Po,qo,ma,xo,zo,da,Fo,Co,ha,Do,So,ua,Io,Mo,ca,No,Oo,rs,ft,Lo,os,ke,ns,G,Wo,pt,Bo,Ho,ls,Ee,is,mt,Ko,fs,U,Go,_a,Uo,Yo,ps,Te,ms,Y,Ro,je,Jo,Xo,ds,dt,Zo,hs,Ae,us,E,Qo,wa,Vo,en,va,tn,an,ya,sn,rn,cs,ht,_s,O,R,ba,Pe,on,$a,nn,ws,qe,vs,J,ln,ut,fn,pn,ys,ct,mn,bs,xe,$s,_t,dn,gs,T,hn,wt,un,cn,vt,_n,wn,yt,vn,yn,ks,ze,Es,X,bn,bt,$n,gn,Ts,Fe,js,$t,kn,As,Ce,Ps,Z,En,gt,Tn,jn,qs,j,An,kt,Pn,qn,ga,xn,zn,Et,Fn,Cn,xs,A,Dn,ka,Sn,In,Ea,Mn,Nn,Ta,On,Ln,zs,De,Fs,Tt,Wn,Cs,Q,Bn,jt,Hn,Kn,Ds,Se,Ss,At,Gn,Is,Pt,Un,Ms,Ie,Ns,V,Yn,qt,Rn,Jn,Os,xt,Ls,L,ee,ja,Me,Xn,Aa,Zn,Ws,Ne,Bs,zt,Qn,Hs,Oe,Ks,D,Vn,Pa,el,tl,qa,al,sl,Gs,Le,Us,te,rl,xa,ol,nl,Ys,We,Rs,Ft,ll,Js,Be,Xs,Ct,il,Zs,He,Qs,Dt,Vs,W,ae,za,Ke,fl,Fa,pl,er,Ge,tr,St,ml,ar,Ue,sr,S,dl,It,hl,ul,Ca,cl,_l,rr,I,Ye,wl,Da,vl,yl,bl,q,$l,Sa,gl,kl,Ia,El,Tl,Ma,jl,Al,Pl,Na,ql,or,se,xl,Oa,zl,Fl,nr,Re,lr,Mt,Cl,ir,Je,fr,Nt,Dl,pr,Xe,mr,M,Sl,Ot,Il,Ml,Lt,Nl,Ol,dr,Ze,hr,Wt,Ll,ur,Qe,cr,re,Wl,La,Bl,Hl,_r,Ve,wr,oe,Kl,Wa,Gl,Ul,vr,et,yr,Bt,Yl,br,ne,Rl,Ht,Jl,Xl,$r,tt,gr,Kt,kr,B,le,Ba,at,Zl,Ha,Ql,Er,Gt,Vl,Tr,ie,Ka,Ut,st,ei,ti,ai,Ga,fe,Yt,si,ri,Ua,oi,ni,jr;return _e=new ta({}),ve=new ta({}),ye=new Jr({props:{id:"_BZearw7f0w"}}),ge=new y({props:{code:`from datasets import load_dataset

raw_datasets = load_dataset("imdb"),`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

raw_datasets = load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)`}}),ke=new y({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)`}}),Ee=new y({props:{code:'inputs = tokenizer(sentences, padding="max_length", truncation=True),',highlighted:'inputs = tokenizer(sentences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>)'}}),Te=new y({props:{code:`def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)

tokenized_datasets = raw_datasets.map(tokenize_function, batched=True),`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>], padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>)

tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)`}}),Ae=new y({props:{code:`small_train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(1000)) 
small_eval_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(1000)) 
full_train_dataset = tokenized_datasets["train"]
full_eval_dataset = tokenized_datasets["test"],`,highlighted:`small_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)) 
small_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)) 
full_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>]
full_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>]`}}),Pe=new ta({}),qe=new Jr({props:{id:"nvBXf7s7vTI"}}),xe=new y({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),ze=new y({props:{code:`from transformers import TrainingArguments

training_args = TrainingArguments("test_trainer"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test_trainer&quot;</span>)`}}),Fe=new y({props:{code:`from transformers import Trainer

trainer = Trainer(
    model=model, args=training_args, train_dataset=small_train_dataset, eval_dataset=small_eval_dataset
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model=model, args=training_args, train_dataset=small_train_dataset, eval_dataset=small_eval_dataset
)`}}),Ce=new y({props:{code:"trainer.train(),",highlighted:"trainer.train()"}}),De=new y({props:{code:`import numpy as np
from datasets import load_metric

metric = load_metric("accuracy")

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels),`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;accuracy&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)`}}),Se=new y({props:{code:`trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
)
trainer.evaluate(),`,highlighted:`trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
)
trainer.evaluate()`}}),Ie=new y({props:{code:`from transformers import TrainingArguments

training_args = TrainingArguments("test_trainer", evaluation_strategy="epoch"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test_trainer&quot;</span>, evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>)`}}),Me=new ta({}),Ne=new Jr({props:{id:"rnTGBy2ax1c"}}),Oe=new y({props:{code:`import tensorflow as tf
from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2),`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),Le=new y({props:{code:`tf_train_dataset = small_train_dataset.remove_columns(["text"]).with_format("tensorflow")
tf_eval_dataset = small_eval_dataset.remove_columns(["text"]).with_format("tensorflow"),`,highlighted:`tf_train_dataset = small_train_dataset.remove_columns([<span class="hljs-string">&quot;text&quot;</span>]).with_format(<span class="hljs-string">&quot;tensorflow&quot;</span>)
tf_eval_dataset = small_eval_dataset.remove_columns([<span class="hljs-string">&quot;text&quot;</span>]).with_format(<span class="hljs-string">&quot;tensorflow&quot;</span>)`}}),We=new y({props:{code:`train_features = {x: tf_train_dataset[x] for x in tokenizer.model_input_names}
train_tf_dataset = tf.data.Dataset.from_tensor_slices((train_features, tf_train_dataset["label"]))
train_tf_dataset = train_tf_dataset.shuffle(len(tf_train_dataset)).batch(8)

eval_features = {x: tf_eval_dataset[x] for x in tokenizer.model_input_names}
eval_tf_dataset = tf.data.Dataset.from_tensor_slices((eval_features, tf_eval_dataset["label"]))
eval_tf_dataset = eval_tf_dataset.batch(8),`,highlighted:`train_features = {x: tf_train_dataset[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> tokenizer.model_input_names}
train_tf_dataset = tf.data.Dataset.from_tensor_slices((train_features, tf_train_dataset[<span class="hljs-string">&quot;label&quot;</span>]))
train_tf_dataset = train_tf_dataset.shuffle(<span class="hljs-built_in">len</span>(tf_train_dataset)).batch(<span class="hljs-number">8</span>)

eval_features = {x: tf_eval_dataset[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> tokenizer.model_input_names}
eval_tf_dataset = tf.data.Dataset.from_tensor_slices((eval_features, tf_eval_dataset[<span class="hljs-string">&quot;label&quot;</span>]))
eval_tf_dataset = eval_tf_dataset.batch(<span class="hljs-number">8</span>)`}}),Be=new y({props:{code:`model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=5e-5),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=tf.metrics.SparseCategoricalAccuracy(),
)

model.fit(train_tf_dataset, validation_data=eval_tf_dataset, epochs=3),`,highlighted:`model.<span class="hljs-built_in">compile</span>(
    optimizer=tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
    metrics=tf.metrics.SparseCategoricalAccuracy(),
)

model.fit(train_tf_dataset, validation_data=eval_tf_dataset, epochs=<span class="hljs-number">3</span>)`}}),He=new y({props:{code:`from transformers import AutoModelForSequenceClassification

model.save_pretrained("my_imdb_model")
pytorch_model = AutoModelForSequenceClassification.from_pretrained("my_imdb_model", from_tf=True),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model.save_pretrained(<span class="hljs-string">&quot;my_imdb_model&quot;</span>)
pytorch_model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;my_imdb_model&quot;</span>, from_tf=<span class="hljs-literal">True</span>)`}}),Ke=new ta({}),Ge=new Jr({props:{id:"Dh9CL8fyG80"}}),Ue=new y({props:{code:`del model
del pytorch_model
del trainer
torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-keyword">del</span> model
<span class="hljs-keyword">del</span> pytorch_model
<span class="hljs-keyword">del</span> trainer
torch.cuda.empty_cache()`}}),Re=new y({props:{code:`tokenized_datasets = tokenized_datasets.remove_columns(["text"])
tokenized_datasets = tokenized_datasets.rename_column("label", "labels")
tokenized_datasets.set_format("torch")

small_train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(1000))
small_eval_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(1000)),`,highlighted:`tokenized_datasets = tokenized_datasets.remove_columns([<span class="hljs-string">&quot;text&quot;</span>])
tokenized_datasets = tokenized_datasets.rename_column(<span class="hljs-string">&quot;label&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>)
tokenized_datasets.set_format(<span class="hljs-string">&quot;torch&quot;</span>)

small_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>))
small_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>))`}}),Je=new y({props:{code:`from torch.utils.data import DataLoader

train_dataloader = DataLoader(small_train_dataset, shuffle=True, batch_size=8)
eval_dataloader = DataLoader(small_eval_dataset, batch_size=8),`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader

train_dataloader = DataLoader(small_train_dataset, shuffle=<span class="hljs-literal">True</span>, batch_size=<span class="hljs-number">8</span>)
eval_dataloader = DataLoader(small_eval_dataset, batch_size=<span class="hljs-number">8</span>)`}}),Xe=new y({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),Ze=new y({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),Qe=new y({props:{code:`from transformers import get_scheduler

num_epochs = 3
num_training_steps = num_epochs * len(train_dataloader)
lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> get_scheduler

num_epochs = <span class="hljs-number">3</span>
num_training_steps = num_epochs * <span class="hljs-built_in">len</span>(train_dataloader)
lr_scheduler = get_scheduler(
    <span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_training_steps=num_training_steps
)`}}),Ve=new y({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device),`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)`}}),et=new y({props:{code:`from tqdm.auto import tqdm

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
        progress_bar.update(1),`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),tt=new y({props:{code:`metric= load_metric("accuracy")
model.eval()
for batch in eval_dataloader:
    batch = {k: v.to(device) for k, v in batch.items()}
    with torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1)
    metric.add_batch(predictions=predictions, references=batch["labels"])

metric.compute(),`,highlighted:`metric= load_metric(<span class="hljs-string">&quot;accuracy&quot;</span>)
model.<span class="hljs-built_in">eval</span>()
<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> eval_dataloader:
    batch = {k: v.to(device) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
    <span class="hljs-keyword">with</span> torch.no_grad():
        outputs = model(**batch)

    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
    metric.add_batch(predictions=predictions, references=batch[<span class="hljs-string">&quot;labels&quot;</span>])

metric.compute()`}}),at=new ta({}),{c(){x=l("meta"),rt=p(),g=l("h1"),P=l("a"),aa=l("span"),h(_e.$$.fragment),Zr=p(),sa=l("span"),Qr=r("Fine-tuning a pretrained model"),Ra=p(),z=l("p"),Vr=r(`In this tutorial, we will show you how to fine-tune a pretrained model from the Transformers library. In TensorFlow,
models can be directly trained using Keras and the `),ra=l("code"),eo=r("fit"),to=r(` method. In PyTorch, there is no generic training loop so
the \u{1F917} Transformers library provides an API with the class `),ot=l("a"),ao=r("Trainer"),so=r(` to let you fine-tune or train
a model from scratch easily. Then we will show you how to alternatively write the whole training loop in PyTorch.`),Ja=p(),F=l("p"),ro=r(`Before we can fine-tune a model, we need a dataset. In this tutorial, we will show you how to fine-tune BERT on the
`),we=l("a"),oo=r("IMDB dataset"),no=r(`: the task is to classify whether movie reviews are positive or
negative. For examples of other tasks, refer to the `),nt=l("a"),lo=r("additional-resources"),io=r(" section!"),Xa=p(),lt=l("a"),Za=p(),N=l("h2"),H=l("a"),oa=l("span"),h(ve.$$.fragment),fo=p(),na=l("span"),po=r("Preparing the datasets"),Qa=p(),h(ye.$$.fragment),Va=p(),k=l("p"),mo=r("We will use the "),be=l("a"),ho=r("\u{1F917} Datasets"),uo=r(` library to download and preprocess the IMDB
datasets. We will go over this part pretty quickly. Since the focus of this tutorial is on training, you should refer
to the \u{1F917} Datasets `),$e=l("a"),co=r("documentation"),_o=r(" or the "),it=l("a"),wo=r("preprocessing"),vo=r(` tutorial for
more information.`),es=p(),K=l("p"),yo=r("First, we can use the "),la=l("code"),bo=r("load_dataset"),$o=r(" function to download and cache the dataset:"),ts=p(),h(ge.$$.fragment),as=p(),C=l("p"),go=r("This works like the "),ia=l("code"),ko=r("from_pretrained"),Eo=r(` method we saw for the models and tokenizers (except the cache directory is
`),fa=l("em"),To=r("~/.cache/huggingface/dataset"),jo=r(" by default)."),ss=p(),b=l("p"),Ao=r("The "),pa=l("code"),Po=r("raw_datasets"),qo=r(" object is a dictionary with three keys: "),ma=l("code"),xo=r('"train"'),zo=r(", "),da=l("code"),Fo=r('"test"'),Co=r(" and "),ha=l("code"),Do=r('"unsupervised"'),So=r(`
(which correspond to the three splits of that dataset). We will use the `),ua=l("code"),Io=r('"train"'),Mo=r(` split for training and the
`),ca=l("code"),No=r('"test"'),Oo=r(" split for validation."),rs=p(),ft=l("p"),Lo=r("To preprocess our data, we will need a tokenizer:"),os=p(),h(ke.$$.fragment),ns=p(),G=l("p"),Wo=r("As we saw in "),pt=l("a"),Bo=r("preprocessing"),Ho=r(`, we can prepare the text inputs for the model with the following command (this is an
example, not a command you can execute):`),ls=p(),h(Ee.$$.fragment),is=p(),mt=l("p"),Ko=r(`This will make all the samples have the maximum length the model can accept (here 512), either by padding or truncating
them.`),fs=p(),U=l("p"),Go=r(`However, we can instead apply these preprocessing steps to all the splits of our dataset at once by using the
`),_a=l("code"),Uo=r("map"),Yo=r(" method:"),ps=p(),h(Te.$$.fragment),ms=p(),Y=l("p"),Ro=r("You can learn more about the map method or the other ways to preprocess the data in the \u{1F917} Datasets "),je=l("a"),Jo=r("documentation"),Xo=r("."),ds=p(),dt=l("p"),Zo=r("Next we will generate a small subset of the training and validation set, to enable faster training:"),hs=p(),h(Ae.$$.fragment),us=p(),E=l("p"),Qo=r("In all the examples below, we will always use "),wa=l("code"),Vo=r("small_train_dataset"),en=r(" and "),va=l("code"),tn=r("small_eval_dataset"),an=r(`. Just replace
them by their `),ya=l("em"),sn=r("full"),rn=r(" equivalent to train or evaluate on the full dataset."),cs=p(),ht=l("a"),_s=p(),O=l("h2"),R=l("a"),ba=l("span"),h(Pe.$$.fragment),on=p(),$a=l("span"),nn=r("Fine-tuning in PyTorch with the Trainer API"),ws=p(),h(qe.$$.fragment),vs=p(),J=l("p"),ln=r("Since PyTorch does not provide a training loop, the \u{1F917} Transformers library provides a "),ut=l("a"),fn=r("Trainer"),pn=r(`
API that is optimized for \u{1F917} Transformers models, with a wide range of training options and with built-in features like
logging, gradient accumulation, and mixed precision.`),ys=p(),ct=l("p"),mn=r("First, let\u2019s define our model:"),bs=p(),h(xe.$$.fragment),$s=p(),_t=l("p"),dn=r(`This will issue a warning about some of the pretrained weights not being used and some weights being randomly
initialized. That\u2019s because we are throwing away the pretraining head of the BERT model to replace it with a
classification head which is randomly initialized. We will fine-tune this model on our task, transferring the knowledge
of the pretrained model to it (which is why doing this is called transfer learning).`),gs=p(),T=l("p"),hn=r("Then, to define our "),wt=l("a"),un=r("Trainer"),cn=r(`, we will need to instantiate a
`),vt=l("a"),_n=r("TrainingArguments"),wn=r(`. This class contains all the hyperparameters we can tune for the
`),yt=l("a"),vn=r("Trainer"),yn=r(` or the flags to activate the different training options it supports. Let\u2019s begin by
using all the defaults, the only thing we then have to provide is a directory in which the checkpoints will be saved:`),ks=p(),h(ze.$$.fragment),Es=p(),X=l("p"),bn=r("Then we can instantiate a "),bt=l("a"),$n=r("Trainer"),gn=r(" like this:"),Ts=p(),h(Fe.$$.fragment),js=p(),$t=l("p"),kn=r("To fine-tune our model, we just need to call"),As=p(),h(Ce.$$.fragment),Ps=p(),Z=l("p"),En=r(`which will start a training that you can follow with a progress bar, which should take a couple of minutes to complete
(as long as you have access to a GPU). It won\u2019t actually tell you anything useful about how well (or badly) your model
is performing however as by default, there is no evaluation during training, and we didn\u2019t tell the
`),gt=l("a"),Tn=r("Trainer"),jn=r(" to compute any metrics. Let\u2019s have a look on how to do that now!"),qs=p(),j=l("p"),An=r("To have the "),kt=l("a"),Pn=r("Trainer"),qn=r(" compute and report metrics, we need to give it a "),ga=l("code"),xn=r("compute_metrics"),zn=r(`
function that takes predictions and labels (grouped in a namedtuple called `),Et=l("a"),Fn=r("EvalPrediction"),Cn=r(`) and
return a dictionary with string items (the metric names) and float values (the metric values).`),xs=p(),A=l("p"),Dn=r("The \u{1F917} Datasets library provides an easy way to get the common metrics used in NLP with the "),ka=l("code"),Sn=r("load_metric"),In=r(` function.
here we simply use accuracy. Then we define the `),Ea=l("code"),Mn=r("compute_metrics"),Nn=r(` function that just convert logits to predictions
(remember that all \u{1F917} Transformers models return the logits) and feed them to `),Ta=l("code"),On=r("compute"),Ln=r(" method of this metric."),zs=p(),h(De.$$.fragment),Fs=p(),Tt=l("p"),Wn=r(`The compute function needs to receive a tuple (with logits and labels) and has to return a dictionary with string keys
(the name of the metric) and float values. It will be called at the end of each evaluation phase on the whole arrays of
predictions/labels.`),Cs=p(),Q=l("p"),Bn=r("To check if this works on practice, let\u2019s create a new "),jt=l("a"),Hn=r("Trainer"),Kn=r(" with our fine-tuned model:"),Ds=p(),h(Se.$$.fragment),Ss=p(),At=l("p"),Gn=r("which showed an accuracy of 87.5% in our case."),Is=p(),Pt=l("p"),Un=r(`If you want to fine-tune your model and regularly report the evaluation metrics (for instance at the end of each
epoch), here is how you should define your training arguments:`),Ms=p(),h(Ie.$$.fragment),Ns=p(),V=l("p"),Yn=r("See the documentation of "),qt=l("a"),Rn=r("TrainingArguments"),Jn=r(" for more options."),Os=p(),xt=l("a"),Ls=p(),L=l("h2"),ee=l("a"),ja=l("span"),h(Me.$$.fragment),Xn=p(),Aa=l("span"),Zn=r("Fine-tuning with Keras"),Ws=p(),h(Ne.$$.fragment),Bs=p(),zt=l("p"),Qn=r("Models can also be trained natively in TensorFlow using the Keras API. First, let\u2019s define our model:"),Hs=p(),h(Oe.$$.fragment),Ks=p(),D=l("p"),Vn=r("Then we will need to convert our datasets from before in standard "),Pa=l("code"),el=r("tf.data.Dataset"),tl=r(`. Since we have fixed shapes,
it can easily be done like this. First we remove the `),qa=l("em"),al=r("\u201Ctext\u201D"),sl=r(` column from our datasets and set them in TensorFlow
format:`),Gs=p(),h(Le.$$.fragment),Us=p(),te=l("p"),rl=r("Then we convert everything in big tensors and use the "),xa=l("code"),ol=r("tf.data.Dataset.from_tensor_slices"),nl=r(" method:"),Ys=p(),h(We.$$.fragment),Rs=p(),Ft=l("p"),ll=r("With this done, the model can then be compiled and trained as any Keras model:"),Js=p(),h(Be.$$.fragment),Xs=p(),Ct=l("p"),il=r(`With the tight interoperability between TensorFlow and PyTorch models, you can even save the model and then reload it
as a PyTorch model (or vice-versa):`),Zs=p(),h(He.$$.fragment),Qs=p(),Dt=l("a"),Vs=p(),W=l("h2"),ae=l("a"),za=l("span"),h(Ke.$$.fragment),fl=p(),Fa=l("span"),pl=r("Fine-tuning in native PyTorch"),er=p(),h(Ge.$$.fragment),tr=p(),St=l("p"),ml=r("You might need to restart your notebook at this stage to free some memory, or execute the following code:"),ar=p(),h(Ue.$$.fragment),sr=p(),S=l("p"),dl=r("Let\u2019s now see how to achieve the same results as in "),It=l("a"),hl=r("trainer section"),ul=r(` in PyTorch. First we need to
define the dataloaders, which we will use to iterate over batches. We just need to apply a bit of post-processing to
our `),Ca=l("code"),cl=r("tokenized_datasets"),_l=r(" before doing that to:"),rr=p(),I=l("ul"),Ye=l("li"),wl=r("remove the columns corresponding to values the model does not expect (here the "),Da=l("code"),vl=r('"text"'),yl=r(" column)"),bl=p(),q=l("li"),$l=r("rename the column "),Sa=l("code"),gl=r('"label"'),kl=r(" to "),Ia=l("code"),El=r('"labels"'),Tl=r(" (because the model expect the argument to be named "),Ma=l("code"),jl=r("labels"),Al=r(")"),Pl=p(),Na=l("li"),ql=r("set the format of the datasets so they return PyTorch Tensors instead of lists."),or=p(),se=l("p"),xl=r("Our "),Oa=l("em"),zl=r("tokenized_datasets"),Fl=r(" has one method for each of those steps:"),nr=p(),h(Re.$$.fragment),lr=p(),Mt=l("p"),Cl=r("Now that this is done, we can easily define our dataloaders:"),ir=p(),h(Je.$$.fragment),fr=p(),Nt=l("p"),Dl=r("Next, we define our model:"),pr=p(),h(Xe.$$.fragment),mr=p(),M=l("p"),Sl=r(`We are almost ready to write our training loop, the only two things are missing are an optimizer and a learning rate
scheduler. The default optimizer used by the `),Ot=l("a"),Il=r("Trainer"),Ml=r(" is "),Lt=l("a"),Nl=r("AdamW"),Ol=r(":"),dr=p(),h(Ze.$$.fragment),hr=p(),Wt=l("p"),Ll=r("Finally, the learning rate scheduler used by default is just a linear decay from the maximum value (5e-5 here) to 0:"),ur=p(),h(Qe.$$.fragment),cr=p(),re=l("p"),Wl=r(`One last thing, we will want to use the GPU if we have access to one (otherwise training might take several hours
instead of a couple of minutes). To do this, we define a `),La=l("code"),Bl=r("device"),Hl=r(" we will put our model and our batches on."),_r=p(),h(Ve.$$.fragment),wr=p(),oe=l("p"),Kl=r(`We now are ready to train! To get some sense of when it will be finished, we add a progress bar over our number of
training steps, using the `),Wa=l("em"),Gl=r("tqdm"),Ul=r(" library."),vr=p(),h(et.$$.fragment),yr=p(),Bt=l("p"),Yl=r(`Note that if you are used to freezing the body of your pretrained model (like in computer vision) the above may seem a
bit strange, as we are directly fine-tuning the whole model without taking any precaution. It actually works better
this way for Transformers model (so this is not an oversight on our side). If you\u2019re not familiar with what \u201Cfreezing
the body\u201D of the model means, forget you read this paragraph.`),br=p(),ne=l("p"),Rl=r("Now to check the results, we need to write the evaluation loop. Like in the "),Ht=l("a"),Jl=r("trainer section"),Xl=r(` we will
use a metric from the datasets library. Here we accumulate the predictions at each batch before computing the final
result when the loop is finished.`),$r=p(),h(tt.$$.fragment),gr=p(),Kt=l("a"),kr=p(),B=l("h2"),le=l("a"),Ba=l("span"),h(at.$$.fragment),Zl=p(),Ha=l("span"),Ql=r("Additional resources"),Er=p(),Gt=l("p"),Vl=r("To look at more fine-tuning examples you can refer to:"),Tr=p(),ie=l("ul"),Ka=l("li"),Ut=l("p"),st=l("a"),ei=r("\u{1F917} Transformers Examples"),ti=r(` which includes scripts
to train on all common NLP tasks in PyTorch and TensorFlow.`),ai=p(),Ga=l("li"),fe=l("p"),Yt=l("a"),si=r("\u{1F917} Transformers Notebooks"),ri=r(` which contains various notebooks and in particular one per task (look for
the `),Ua=l("em"),oi=r("how to finetune a model on xxx"),ni=r(")."),this.h()},l(e){const s=Zf('[data-svelte="svelte-1phssyn"]',document.head);x=i(s,"META",{name:!0,content:!0}),s.forEach(t),rt=m(e),g=i(e,"H1",{class:!0});var Ar=f(g);P=i(Ar,"A",{id:!0,class:!0,href:!0});var ii=f(P);aa=i(ii,"SPAN",{});var fi=f(aa);u(_e.$$.fragment,fi),fi.forEach(t),ii.forEach(t),Zr=m(Ar),sa=i(Ar,"SPAN",{});var pi=f(sa);Qr=o(pi,"Fine-tuning a pretrained model"),pi.forEach(t),Ar.forEach(t),Ra=m(e),z=i(e,"P",{});var Rt=f(z);Vr=o(Rt,`In this tutorial, we will show you how to fine-tune a pretrained model from the Transformers library. In TensorFlow,
models can be directly trained using Keras and the `),ra=i(Rt,"CODE",{});var mi=f(ra);eo=o(mi,"fit"),mi.forEach(t),to=o(Rt,` method. In PyTorch, there is no generic training loop so
the \u{1F917} Transformers library provides an API with the class `),ot=i(Rt,"A",{href:!0});var di=f(ot);ao=o(di,"Trainer"),di.forEach(t),so=o(Rt,` to let you fine-tune or train
a model from scratch easily. Then we will show you how to alternatively write the whole training loop in PyTorch.`),Rt.forEach(t),Ja=m(e),F=i(e,"P",{});var Jt=f(F);ro=o(Jt,`Before we can fine-tune a model, we need a dataset. In this tutorial, we will show you how to fine-tune BERT on the
`),we=i(Jt,"A",{href:!0,rel:!0});var hi=f(we);oo=o(hi,"IMDB dataset"),hi.forEach(t),no=o(Jt,`: the task is to classify whether movie reviews are positive or
negative. For examples of other tasks, refer to the `),nt=i(Jt,"A",{href:!0});var ui=f(nt);lo=o(ui,"additional-resources"),ui.forEach(t),io=o(Jt," section!"),Jt.forEach(t),Xa=m(e),lt=i(e,"A",{id:!0}),f(lt).forEach(t),Za=m(e),N=i(e,"H2",{class:!0});var Pr=f(N);H=i(Pr,"A",{id:!0,class:!0,href:!0});var ci=f(H);oa=i(ci,"SPAN",{});var _i=f(oa);u(ve.$$.fragment,_i),_i.forEach(t),ci.forEach(t),fo=m(Pr),na=i(Pr,"SPAN",{});var wi=f(na);po=o(wi,"Preparing the datasets"),wi.forEach(t),Pr.forEach(t),Qa=m(e),u(ye.$$.fragment,e),Va=m(e),k=i(e,"P",{});var pe=f(k);mo=o(pe,"We will use the "),be=i(pe,"A",{href:!0,rel:!0});var vi=f(be);ho=o(vi,"\u{1F917} Datasets"),vi.forEach(t),uo=o(pe,` library to download and preprocess the IMDB
datasets. We will go over this part pretty quickly. Since the focus of this tutorial is on training, you should refer
to the \u{1F917} Datasets `),$e=i(pe,"A",{href:!0,rel:!0});var yi=f($e);co=o(yi,"documentation"),yi.forEach(t),_o=o(pe," or the "),it=i(pe,"A",{href:!0});var bi=f(it);wo=o(bi,"preprocessing"),bi.forEach(t),vo=o(pe,` tutorial for
more information.`),pe.forEach(t),es=m(e),K=i(e,"P",{});var qr=f(K);yo=o(qr,"First, we can use the "),la=i(qr,"CODE",{});var $i=f(la);bo=o($i,"load_dataset"),$i.forEach(t),$o=o(qr," function to download and cache the dataset:"),qr.forEach(t),ts=m(e),u(ge.$$.fragment,e),as=m(e),C=i(e,"P",{});var Xt=f(C);go=o(Xt,"This works like the "),ia=i(Xt,"CODE",{});var gi=f(ia);ko=o(gi,"from_pretrained"),gi.forEach(t),Eo=o(Xt,` method we saw for the models and tokenizers (except the cache directory is
`),fa=i(Xt,"EM",{});var ki=f(fa);To=o(ki,"~/.cache/huggingface/dataset"),ki.forEach(t),jo=o(Xt," by default)."),Xt.forEach(t),ss=m(e),b=i(e,"P",{});var $=f(b);Ao=o($,"The "),pa=i($,"CODE",{});var Ei=f(pa);Po=o(Ei,"raw_datasets"),Ei.forEach(t),qo=o($," object is a dictionary with three keys: "),ma=i($,"CODE",{});var Ti=f(ma);xo=o(Ti,'"train"'),Ti.forEach(t),zo=o($,", "),da=i($,"CODE",{});var ji=f(da);Fo=o(ji,'"test"'),ji.forEach(t),Co=o($," and "),ha=i($,"CODE",{});var Ai=f(ha);Do=o(Ai,'"unsupervised"'),Ai.forEach(t),So=o($,`
(which correspond to the three splits of that dataset). We will use the `),ua=i($,"CODE",{});var Pi=f(ua);Io=o(Pi,'"train"'),Pi.forEach(t),Mo=o($,` split for training and the
`),ca=i($,"CODE",{});var qi=f(ca);No=o(qi,'"test"'),qi.forEach(t),Oo=o($," split for validation."),$.forEach(t),rs=m(e),ft=i(e,"P",{});var xi=f(ft);Lo=o(xi,"To preprocess our data, we will need a tokenizer:"),xi.forEach(t),os=m(e),u(ke.$$.fragment,e),ns=m(e),G=i(e,"P",{});var xr=f(G);Wo=o(xr,"As we saw in "),pt=i(xr,"A",{href:!0});var zi=f(pt);Bo=o(zi,"preprocessing"),zi.forEach(t),Ho=o(xr,`, we can prepare the text inputs for the model with the following command (this is an
example, not a command you can execute):`),xr.forEach(t),ls=m(e),u(Ee.$$.fragment,e),is=m(e),mt=i(e,"P",{});var Fi=f(mt);Ko=o(Fi,`This will make all the samples have the maximum length the model can accept (here 512), either by padding or truncating
them.`),Fi.forEach(t),fs=m(e),U=i(e,"P",{});var zr=f(U);Go=o(zr,`However, we can instead apply these preprocessing steps to all the splits of our dataset at once by using the
`),_a=i(zr,"CODE",{});var Ci=f(_a);Uo=o(Ci,"map"),Ci.forEach(t),Yo=o(zr," method:"),zr.forEach(t),ps=m(e),u(Te.$$.fragment,e),ms=m(e),Y=i(e,"P",{});var Fr=f(Y);Ro=o(Fr,"You can learn more about the map method or the other ways to preprocess the data in the \u{1F917} Datasets "),je=i(Fr,"A",{href:!0,rel:!0});var Di=f(je);Jo=o(Di,"documentation"),Di.forEach(t),Xo=o(Fr,"."),Fr.forEach(t),ds=m(e),dt=i(e,"P",{});var Si=f(dt);Zo=o(Si,"Next we will generate a small subset of the training and validation set, to enable faster training:"),Si.forEach(t),hs=m(e),u(Ae.$$.fragment,e),us=m(e),E=i(e,"P",{});var me=f(E);Qo=o(me,"In all the examples below, we will always use "),wa=i(me,"CODE",{});var Ii=f(wa);Vo=o(Ii,"small_train_dataset"),Ii.forEach(t),en=o(me," and "),va=i(me,"CODE",{});var Mi=f(va);tn=o(Mi,"small_eval_dataset"),Mi.forEach(t),an=o(me,`. Just replace
them by their `),ya=i(me,"EM",{});var Ni=f(ya);sn=o(Ni,"full"),Ni.forEach(t),rn=o(me," equivalent to train or evaluate on the full dataset."),me.forEach(t),cs=m(e),ht=i(e,"A",{id:!0}),f(ht).forEach(t),_s=m(e),O=i(e,"H2",{class:!0});var Cr=f(O);R=i(Cr,"A",{id:!0,class:!0,href:!0});var Oi=f(R);ba=i(Oi,"SPAN",{});var Li=f(ba);u(Pe.$$.fragment,Li),Li.forEach(t),Oi.forEach(t),on=m(Cr),$a=i(Cr,"SPAN",{});var Wi=f($a);nn=o(Wi,"Fine-tuning in PyTorch with the Trainer API"),Wi.forEach(t),Cr.forEach(t),ws=m(e),u(qe.$$.fragment,e),vs=m(e),J=i(e,"P",{});var Dr=f(J);ln=o(Dr,"Since PyTorch does not provide a training loop, the \u{1F917} Transformers library provides a "),ut=i(Dr,"A",{href:!0});var Bi=f(ut);fn=o(Bi,"Trainer"),Bi.forEach(t),pn=o(Dr,`
API that is optimized for \u{1F917} Transformers models, with a wide range of training options and with built-in features like
logging, gradient accumulation, and mixed precision.`),Dr.forEach(t),ys=m(e),ct=i(e,"P",{});var Hi=f(ct);mn=o(Hi,"First, let\u2019s define our model:"),Hi.forEach(t),bs=m(e),u(xe.$$.fragment,e),$s=m(e),_t=i(e,"P",{});var Ki=f(_t);dn=o(Ki,`This will issue a warning about some of the pretrained weights not being used and some weights being randomly
initialized. That\u2019s because we are throwing away the pretraining head of the BERT model to replace it with a
classification head which is randomly initialized. We will fine-tune this model on our task, transferring the knowledge
of the pretrained model to it (which is why doing this is called transfer learning).`),Ki.forEach(t),gs=m(e),T=i(e,"P",{});var de=f(T);hn=o(de,"Then, to define our "),wt=i(de,"A",{href:!0});var Gi=f(wt);un=o(Gi,"Trainer"),Gi.forEach(t),cn=o(de,`, we will need to instantiate a
`),vt=i(de,"A",{href:!0});var Ui=f(vt);_n=o(Ui,"TrainingArguments"),Ui.forEach(t),wn=o(de,`. This class contains all the hyperparameters we can tune for the
`),yt=i(de,"A",{href:!0});var Yi=f(yt);vn=o(Yi,"Trainer"),Yi.forEach(t),yn=o(de,` or the flags to activate the different training options it supports. Let\u2019s begin by
using all the defaults, the only thing we then have to provide is a directory in which the checkpoints will be saved:`),de.forEach(t),ks=m(e),u(ze.$$.fragment,e),Es=m(e),X=i(e,"P",{});var Sr=f(X);bn=o(Sr,"Then we can instantiate a "),bt=i(Sr,"A",{href:!0});var Ri=f(bt);$n=o(Ri,"Trainer"),Ri.forEach(t),gn=o(Sr," like this:"),Sr.forEach(t),Ts=m(e),u(Fe.$$.fragment,e),js=m(e),$t=i(e,"P",{});var Ji=f($t);kn=o(Ji,"To fine-tune our model, we just need to call"),Ji.forEach(t),As=m(e),u(Ce.$$.fragment,e),Ps=m(e),Z=i(e,"P",{});var Ir=f(Z);En=o(Ir,`which will start a training that you can follow with a progress bar, which should take a couple of minutes to complete
(as long as you have access to a GPU). It won\u2019t actually tell you anything useful about how well (or badly) your model
is performing however as by default, there is no evaluation during training, and we didn\u2019t tell the
`),gt=i(Ir,"A",{href:!0});var Xi=f(gt);Tn=o(Xi,"Trainer"),Xi.forEach(t),jn=o(Ir," to compute any metrics. Let\u2019s have a look on how to do that now!"),Ir.forEach(t),qs=m(e),j=i(e,"P",{});var he=f(j);An=o(he,"To have the "),kt=i(he,"A",{href:!0});var Zi=f(kt);Pn=o(Zi,"Trainer"),Zi.forEach(t),qn=o(he," compute and report metrics, we need to give it a "),ga=i(he,"CODE",{});var Qi=f(ga);xn=o(Qi,"compute_metrics"),Qi.forEach(t),zn=o(he,`
function that takes predictions and labels (grouped in a namedtuple called `),Et=i(he,"A",{href:!0});var Vi=f(Et);Fn=o(Vi,"EvalPrediction"),Vi.forEach(t),Cn=o(he,`) and
return a dictionary with string items (the metric names) and float values (the metric values).`),he.forEach(t),xs=m(e),A=i(e,"P",{});var ue=f(A);Dn=o(ue,"The \u{1F917} Datasets library provides an easy way to get the common metrics used in NLP with the "),ka=i(ue,"CODE",{});var ef=f(ka);Sn=o(ef,"load_metric"),ef.forEach(t),In=o(ue,` function.
here we simply use accuracy. Then we define the `),Ea=i(ue,"CODE",{});var tf=f(Ea);Mn=o(tf,"compute_metrics"),tf.forEach(t),Nn=o(ue,` function that just convert logits to predictions
(remember that all \u{1F917} Transformers models return the logits) and feed them to `),Ta=i(ue,"CODE",{});var af=f(Ta);On=o(af,"compute"),af.forEach(t),Ln=o(ue," method of this metric."),ue.forEach(t),zs=m(e),u(De.$$.fragment,e),Fs=m(e),Tt=i(e,"P",{});var sf=f(Tt);Wn=o(sf,`The compute function needs to receive a tuple (with logits and labels) and has to return a dictionary with string keys
(the name of the metric) and float values. It will be called at the end of each evaluation phase on the whole arrays of
predictions/labels.`),sf.forEach(t),Cs=m(e),Q=i(e,"P",{});var Mr=f(Q);Bn=o(Mr,"To check if this works on practice, let\u2019s create a new "),jt=i(Mr,"A",{href:!0});var rf=f(jt);Hn=o(rf,"Trainer"),rf.forEach(t),Kn=o(Mr," with our fine-tuned model:"),Mr.forEach(t),Ds=m(e),u(Se.$$.fragment,e),Ss=m(e),At=i(e,"P",{});var of=f(At);Gn=o(of,"which showed an accuracy of 87.5% in our case."),of.forEach(t),Is=m(e),Pt=i(e,"P",{});var nf=f(Pt);Un=o(nf,`If you want to fine-tune your model and regularly report the evaluation metrics (for instance at the end of each
epoch), here is how you should define your training arguments:`),nf.forEach(t),Ms=m(e),u(Ie.$$.fragment,e),Ns=m(e),V=i(e,"P",{});var Nr=f(V);Yn=o(Nr,"See the documentation of "),qt=i(Nr,"A",{href:!0});var lf=f(qt);Rn=o(lf,"TrainingArguments"),lf.forEach(t),Jn=o(Nr," for more options."),Nr.forEach(t),Os=m(e),xt=i(e,"A",{id:!0}),f(xt).forEach(t),Ls=m(e),L=i(e,"H2",{class:!0});var Or=f(L);ee=i(Or,"A",{id:!0,class:!0,href:!0});var ff=f(ee);ja=i(ff,"SPAN",{});var pf=f(ja);u(Me.$$.fragment,pf),pf.forEach(t),ff.forEach(t),Xn=m(Or),Aa=i(Or,"SPAN",{});var mf=f(Aa);Zn=o(mf,"Fine-tuning with Keras"),mf.forEach(t),Or.forEach(t),Ws=m(e),u(Ne.$$.fragment,e),Bs=m(e),zt=i(e,"P",{});var df=f(zt);Qn=o(df,"Models can also be trained natively in TensorFlow using the Keras API. First, let\u2019s define our model:"),df.forEach(t),Hs=m(e),u(Oe.$$.fragment,e),Ks=m(e),D=i(e,"P",{});var Zt=f(D);Vn=o(Zt,"Then we will need to convert our datasets from before in standard "),Pa=i(Zt,"CODE",{});var hf=f(Pa);el=o(hf,"tf.data.Dataset"),hf.forEach(t),tl=o(Zt,`. Since we have fixed shapes,
it can easily be done like this. First we remove the `),qa=i(Zt,"EM",{});var uf=f(qa);al=o(uf,"\u201Ctext\u201D"),uf.forEach(t),sl=o(Zt,` column from our datasets and set them in TensorFlow
format:`),Zt.forEach(t),Gs=m(e),u(Le.$$.fragment,e),Us=m(e),te=i(e,"P",{});var Lr=f(te);rl=o(Lr,"Then we convert everything in big tensors and use the "),xa=i(Lr,"CODE",{});var cf=f(xa);ol=o(cf,"tf.data.Dataset.from_tensor_slices"),cf.forEach(t),nl=o(Lr," method:"),Lr.forEach(t),Ys=m(e),u(We.$$.fragment,e),Rs=m(e),Ft=i(e,"P",{});var _f=f(Ft);ll=o(_f,"With this done, the model can then be compiled and trained as any Keras model:"),_f.forEach(t),Js=m(e),u(Be.$$.fragment,e),Xs=m(e),Ct=i(e,"P",{});var wf=f(Ct);il=o(wf,`With the tight interoperability between TensorFlow and PyTorch models, you can even save the model and then reload it
as a PyTorch model (or vice-versa):`),wf.forEach(t),Zs=m(e),u(He.$$.fragment,e),Qs=m(e),Dt=i(e,"A",{id:!0}),f(Dt).forEach(t),Vs=m(e),W=i(e,"H2",{class:!0});var Wr=f(W);ae=i(Wr,"A",{id:!0,class:!0,href:!0});var vf=f(ae);za=i(vf,"SPAN",{});var yf=f(za);u(Ke.$$.fragment,yf),yf.forEach(t),vf.forEach(t),fl=m(Wr),Fa=i(Wr,"SPAN",{});var bf=f(Fa);pl=o(bf,"Fine-tuning in native PyTorch"),bf.forEach(t),Wr.forEach(t),er=m(e),u(Ge.$$.fragment,e),tr=m(e),St=i(e,"P",{});var $f=f(St);ml=o($f,"You might need to restart your notebook at this stage to free some memory, or execute the following code:"),$f.forEach(t),ar=m(e),u(Ue.$$.fragment,e),sr=m(e),S=i(e,"P",{});var Qt=f(S);dl=o(Qt,"Let\u2019s now see how to achieve the same results as in "),It=i(Qt,"A",{href:!0});var gf=f(It);hl=o(gf,"trainer section"),gf.forEach(t),ul=o(Qt,` in PyTorch. First we need to
define the dataloaders, which we will use to iterate over batches. We just need to apply a bit of post-processing to
our `),Ca=i(Qt,"CODE",{});var kf=f(Ca);cl=o(kf,"tokenized_datasets"),kf.forEach(t),_l=o(Qt," before doing that to:"),Qt.forEach(t),rr=m(e),I=i(e,"UL",{});var Vt=f(I);Ye=i(Vt,"LI",{});var Br=f(Ye);wl=o(Br,"remove the columns corresponding to values the model does not expect (here the "),Da=i(Br,"CODE",{});var Ef=f(Da);vl=o(Ef,'"text"'),Ef.forEach(t),yl=o(Br," column)"),Br.forEach(t),bl=m(Vt),q=i(Vt,"LI",{});var ce=f(q);$l=o(ce,"rename the column "),Sa=i(ce,"CODE",{});var Tf=f(Sa);gl=o(Tf,'"label"'),Tf.forEach(t),kl=o(ce," to "),Ia=i(ce,"CODE",{});var jf=f(Ia);El=o(jf,'"labels"'),jf.forEach(t),Tl=o(ce," (because the model expect the argument to be named "),Ma=i(ce,"CODE",{});var Af=f(Ma);jl=o(Af,"labels"),Af.forEach(t),Al=o(ce,")"),ce.forEach(t),Pl=m(Vt),Na=i(Vt,"LI",{});var Pf=f(Na);ql=o(Pf,"set the format of the datasets so they return PyTorch Tensors instead of lists."),Pf.forEach(t),Vt.forEach(t),or=m(e),se=i(e,"P",{});var Hr=f(se);xl=o(Hr,"Our "),Oa=i(Hr,"EM",{});var qf=f(Oa);zl=o(qf,"tokenized_datasets"),qf.forEach(t),Fl=o(Hr," has one method for each of those steps:"),Hr.forEach(t),nr=m(e),u(Re.$$.fragment,e),lr=m(e),Mt=i(e,"P",{});var xf=f(Mt);Cl=o(xf,"Now that this is done, we can easily define our dataloaders:"),xf.forEach(t),ir=m(e),u(Je.$$.fragment,e),fr=m(e),Nt=i(e,"P",{});var zf=f(Nt);Dl=o(zf,"Next, we define our model:"),zf.forEach(t),pr=m(e),u(Xe.$$.fragment,e),mr=m(e),M=i(e,"P",{});var ea=f(M);Sl=o(ea,`We are almost ready to write our training loop, the only two things are missing are an optimizer and a learning rate
scheduler. The default optimizer used by the `),Ot=i(ea,"A",{href:!0});var Ff=f(Ot);Il=o(Ff,"Trainer"),Ff.forEach(t),Ml=o(ea," is "),Lt=i(ea,"A",{href:!0});var Cf=f(Lt);Nl=o(Cf,"AdamW"),Cf.forEach(t),Ol=o(ea,":"),ea.forEach(t),dr=m(e),u(Ze.$$.fragment,e),hr=m(e),Wt=i(e,"P",{});var Df=f(Wt);Ll=o(Df,"Finally, the learning rate scheduler used by default is just a linear decay from the maximum value (5e-5 here) to 0:"),Df.forEach(t),ur=m(e),u(Qe.$$.fragment,e),cr=m(e),re=i(e,"P",{});var Kr=f(re);Wl=o(Kr,`One last thing, we will want to use the GPU if we have access to one (otherwise training might take several hours
instead of a couple of minutes). To do this, we define a `),La=i(Kr,"CODE",{});var Sf=f(La);Bl=o(Sf,"device"),Sf.forEach(t),Hl=o(Kr," we will put our model and our batches on."),Kr.forEach(t),_r=m(e),u(Ve.$$.fragment,e),wr=m(e),oe=i(e,"P",{});var Gr=f(oe);Kl=o(Gr,`We now are ready to train! To get some sense of when it will be finished, we add a progress bar over our number of
training steps, using the `),Wa=i(Gr,"EM",{});var If=f(Wa);Gl=o(If,"tqdm"),If.forEach(t),Ul=o(Gr," library."),Gr.forEach(t),vr=m(e),u(et.$$.fragment,e),yr=m(e),Bt=i(e,"P",{});var Mf=f(Bt);Yl=o(Mf,`Note that if you are used to freezing the body of your pretrained model (like in computer vision) the above may seem a
bit strange, as we are directly fine-tuning the whole model without taking any precaution. It actually works better
this way for Transformers model (so this is not an oversight on our side). If you\u2019re not familiar with what \u201Cfreezing
the body\u201D of the model means, forget you read this paragraph.`),Mf.forEach(t),br=m(e),ne=i(e,"P",{});var Ur=f(ne);Rl=o(Ur,"Now to check the results, we need to write the evaluation loop. Like in the "),Ht=i(Ur,"A",{href:!0});var Nf=f(Ht);Jl=o(Nf,"trainer section"),Nf.forEach(t),Xl=o(Ur,` we will
use a metric from the datasets library. Here we accumulate the predictions at each batch before computing the final
result when the loop is finished.`),Ur.forEach(t),$r=m(e),u(tt.$$.fragment,e),gr=m(e),Kt=i(e,"A",{id:!0}),f(Kt).forEach(t),kr=m(e),B=i(e,"H2",{class:!0});var Yr=f(B);le=i(Yr,"A",{id:!0,class:!0,href:!0});var Of=f(le);Ba=i(Of,"SPAN",{});var Lf=f(Ba);u(at.$$.fragment,Lf),Lf.forEach(t),Of.forEach(t),Zl=m(Yr),Ha=i(Yr,"SPAN",{});var Wf=f(Ha);Ql=o(Wf,"Additional resources"),Wf.forEach(t),Yr.forEach(t),Er=m(e),Gt=i(e,"P",{});var Bf=f(Gt);Vl=o(Bf,"To look at more fine-tuning examples you can refer to:"),Bf.forEach(t),Tr=m(e),ie=i(e,"UL",{});var Rr=f(ie);Ka=i(Rr,"LI",{});var Hf=f(Ka);Ut=i(Hf,"P",{});var li=f(Ut);st=i(li,"A",{href:!0,rel:!0});var Kf=f(st);ei=o(Kf,"\u{1F917} Transformers Examples"),Kf.forEach(t),ti=o(li,` which includes scripts
to train on all common NLP tasks in PyTorch and TensorFlow.`),li.forEach(t),Hf.forEach(t),ai=m(Rr),Ga=i(Rr,"LI",{});var Gf=f(Ga);fe=i(Gf,"P",{});var Ya=f(fe);Yt=i(Ya,"A",{href:!0});var Uf=f(Yt);si=o(Uf,"\u{1F917} Transformers Notebooks"),Uf.forEach(t),ri=o(Ya,` which contains various notebooks and in particular one per task (look for
the `),Ua=i(Ya,"EM",{});var Yf=f(Ua);oi=o(Yf,"how to finetune a model on xxx"),Yf.forEach(t),ni=o(Ya,")."),Ya.forEach(t),Gf.forEach(t),Rr.forEach(t),this.h()},h(){d(x,"name","hf:doc:metadata"),d(x,"content",JSON.stringify(ep)),d(P,"id","finetuning-a-pretrained-model"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#finetuning-a-pretrained-model"),d(g,"class","relative group"),d(ot,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(we,"href","https://www.imdb.com/interfaces/"),d(we,"rel","nofollow"),d(nt,"href","#additional-resources"),d(lt,"id","data-processing"),d(H,"id","preparing-the-datasets"),d(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(H,"href","#preparing-the-datasets"),d(N,"class","relative group"),d(be,"href","https://github.com/huggingface/datasets/"),d(be,"rel","nofollow"),d($e,"href","https://huggingface.co/docs/datasets/"),d($e,"rel","nofollow"),d(it,"href","preprocessing"),d(pt,"href","preprocessing"),d(je,"href","https://huggingface.co/docs/datasets/"),d(je,"rel","nofollow"),d(ht,"id","trainer"),d(R,"id","finetuning-in-pytorch-with-the-trainer-api"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#finetuning-in-pytorch-with-the-trainer-api"),d(O,"class","relative group"),d(ut,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(wt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(vt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),d(yt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(bt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(gt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(kt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(Et,"href","/docs/transformers/master/en/internal/trainer_utils#transformers.EvalPrediction"),d(jt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(qt,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),d(xt,"id","keras"),d(ee,"id","finetuning-with-keras"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#finetuning-with-keras"),d(L,"class","relative group"),d(Dt,"id","pytorch_native"),d(ae,"id","finetuning-in-native-pytorch"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#finetuning-in-native-pytorch"),d(W,"class","relative group"),d(It,"href","#trainer"),d(Ot,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(Lt,"href","/docs/transformers/master/en/main_classes/optimizer_schedules#transformers.AdamW"),d(Ht,"href","#trainer"),d(Kt,"id","additional-resources"),d(le,"id","additional-resources"),d(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(le,"href","#additional-resources"),d(B,"class","relative group"),d(st,"href","https://github.com/huggingface/transformers/tree/master/examples"),d(st,"rel","nofollow"),d(Yt,"href","notebooks")},m(e,s){a(document.head,x),n(e,rt,s),n(e,g,s),a(g,P),a(P,aa),c(_e,aa,null),a(g,Zr),a(g,sa),a(sa,Qr),n(e,Ra,s),n(e,z,s),a(z,Vr),a(z,ra),a(ra,eo),a(z,to),a(z,ot),a(ot,ao),a(z,so),n(e,Ja,s),n(e,F,s),a(F,ro),a(F,we),a(we,oo),a(F,no),a(F,nt),a(nt,lo),a(F,io),n(e,Xa,s),n(e,lt,s),n(e,Za,s),n(e,N,s),a(N,H),a(H,oa),c(ve,oa,null),a(N,fo),a(N,na),a(na,po),n(e,Qa,s),c(ye,e,s),n(e,Va,s),n(e,k,s),a(k,mo),a(k,be),a(be,ho),a(k,uo),a(k,$e),a($e,co),a(k,_o),a(k,it),a(it,wo),a(k,vo),n(e,es,s),n(e,K,s),a(K,yo),a(K,la),a(la,bo),a(K,$o),n(e,ts,s),c(ge,e,s),n(e,as,s),n(e,C,s),a(C,go),a(C,ia),a(ia,ko),a(C,Eo),a(C,fa),a(fa,To),a(C,jo),n(e,ss,s),n(e,b,s),a(b,Ao),a(b,pa),a(pa,Po),a(b,qo),a(b,ma),a(ma,xo),a(b,zo),a(b,da),a(da,Fo),a(b,Co),a(b,ha),a(ha,Do),a(b,So),a(b,ua),a(ua,Io),a(b,Mo),a(b,ca),a(ca,No),a(b,Oo),n(e,rs,s),n(e,ft,s),a(ft,Lo),n(e,os,s),c(ke,e,s),n(e,ns,s),n(e,G,s),a(G,Wo),a(G,pt),a(pt,Bo),a(G,Ho),n(e,ls,s),c(Ee,e,s),n(e,is,s),n(e,mt,s),a(mt,Ko),n(e,fs,s),n(e,U,s),a(U,Go),a(U,_a),a(_a,Uo),a(U,Yo),n(e,ps,s),c(Te,e,s),n(e,ms,s),n(e,Y,s),a(Y,Ro),a(Y,je),a(je,Jo),a(Y,Xo),n(e,ds,s),n(e,dt,s),a(dt,Zo),n(e,hs,s),c(Ae,e,s),n(e,us,s),n(e,E,s),a(E,Qo),a(E,wa),a(wa,Vo),a(E,en),a(E,va),a(va,tn),a(E,an),a(E,ya),a(ya,sn),a(E,rn),n(e,cs,s),n(e,ht,s),n(e,_s,s),n(e,O,s),a(O,R),a(R,ba),c(Pe,ba,null),a(O,on),a(O,$a),a($a,nn),n(e,ws,s),c(qe,e,s),n(e,vs,s),n(e,J,s),a(J,ln),a(J,ut),a(ut,fn),a(J,pn),n(e,ys,s),n(e,ct,s),a(ct,mn),n(e,bs,s),c(xe,e,s),n(e,$s,s),n(e,_t,s),a(_t,dn),n(e,gs,s),n(e,T,s),a(T,hn),a(T,wt),a(wt,un),a(T,cn),a(T,vt),a(vt,_n),a(T,wn),a(T,yt),a(yt,vn),a(T,yn),n(e,ks,s),c(ze,e,s),n(e,Es,s),n(e,X,s),a(X,bn),a(X,bt),a(bt,$n),a(X,gn),n(e,Ts,s),c(Fe,e,s),n(e,js,s),n(e,$t,s),a($t,kn),n(e,As,s),c(Ce,e,s),n(e,Ps,s),n(e,Z,s),a(Z,En),a(Z,gt),a(gt,Tn),a(Z,jn),n(e,qs,s),n(e,j,s),a(j,An),a(j,kt),a(kt,Pn),a(j,qn),a(j,ga),a(ga,xn),a(j,zn),a(j,Et),a(Et,Fn),a(j,Cn),n(e,xs,s),n(e,A,s),a(A,Dn),a(A,ka),a(ka,Sn),a(A,In),a(A,Ea),a(Ea,Mn),a(A,Nn),a(A,Ta),a(Ta,On),a(A,Ln),n(e,zs,s),c(De,e,s),n(e,Fs,s),n(e,Tt,s),a(Tt,Wn),n(e,Cs,s),n(e,Q,s),a(Q,Bn),a(Q,jt),a(jt,Hn),a(Q,Kn),n(e,Ds,s),c(Se,e,s),n(e,Ss,s),n(e,At,s),a(At,Gn),n(e,Is,s),n(e,Pt,s),a(Pt,Un),n(e,Ms,s),c(Ie,e,s),n(e,Ns,s),n(e,V,s),a(V,Yn),a(V,qt),a(qt,Rn),a(V,Jn),n(e,Os,s),n(e,xt,s),n(e,Ls,s),n(e,L,s),a(L,ee),a(ee,ja),c(Me,ja,null),a(L,Xn),a(L,Aa),a(Aa,Zn),n(e,Ws,s),c(Ne,e,s),n(e,Bs,s),n(e,zt,s),a(zt,Qn),n(e,Hs,s),c(Oe,e,s),n(e,Ks,s),n(e,D,s),a(D,Vn),a(D,Pa),a(Pa,el),a(D,tl),a(D,qa),a(qa,al),a(D,sl),n(e,Gs,s),c(Le,e,s),n(e,Us,s),n(e,te,s),a(te,rl),a(te,xa),a(xa,ol),a(te,nl),n(e,Ys,s),c(We,e,s),n(e,Rs,s),n(e,Ft,s),a(Ft,ll),n(e,Js,s),c(Be,e,s),n(e,Xs,s),n(e,Ct,s),a(Ct,il),n(e,Zs,s),c(He,e,s),n(e,Qs,s),n(e,Dt,s),n(e,Vs,s),n(e,W,s),a(W,ae),a(ae,za),c(Ke,za,null),a(W,fl),a(W,Fa),a(Fa,pl),n(e,er,s),c(Ge,e,s),n(e,tr,s),n(e,St,s),a(St,ml),n(e,ar,s),c(Ue,e,s),n(e,sr,s),n(e,S,s),a(S,dl),a(S,It),a(It,hl),a(S,ul),a(S,Ca),a(Ca,cl),a(S,_l),n(e,rr,s),n(e,I,s),a(I,Ye),a(Ye,wl),a(Ye,Da),a(Da,vl),a(Ye,yl),a(I,bl),a(I,q),a(q,$l),a(q,Sa),a(Sa,gl),a(q,kl),a(q,Ia),a(Ia,El),a(q,Tl),a(q,Ma),a(Ma,jl),a(q,Al),a(I,Pl),a(I,Na),a(Na,ql),n(e,or,s),n(e,se,s),a(se,xl),a(se,Oa),a(Oa,zl),a(se,Fl),n(e,nr,s),c(Re,e,s),n(e,lr,s),n(e,Mt,s),a(Mt,Cl),n(e,ir,s),c(Je,e,s),n(e,fr,s),n(e,Nt,s),a(Nt,Dl),n(e,pr,s),c(Xe,e,s),n(e,mr,s),n(e,M,s),a(M,Sl),a(M,Ot),a(Ot,Il),a(M,Ml),a(M,Lt),a(Lt,Nl),a(M,Ol),n(e,dr,s),c(Ze,e,s),n(e,hr,s),n(e,Wt,s),a(Wt,Ll),n(e,ur,s),c(Qe,e,s),n(e,cr,s),n(e,re,s),a(re,Wl),a(re,La),a(La,Bl),a(re,Hl),n(e,_r,s),c(Ve,e,s),n(e,wr,s),n(e,oe,s),a(oe,Kl),a(oe,Wa),a(Wa,Gl),a(oe,Ul),n(e,vr,s),c(et,e,s),n(e,yr,s),n(e,Bt,s),a(Bt,Yl),n(e,br,s),n(e,ne,s),a(ne,Rl),a(ne,Ht),a(Ht,Jl),a(ne,Xl),n(e,$r,s),c(tt,e,s),n(e,gr,s),n(e,Kt,s),n(e,kr,s),n(e,B,s),a(B,le),a(le,Ba),c(at,Ba,null),a(B,Zl),a(B,Ha),a(Ha,Ql),n(e,Er,s),n(e,Gt,s),a(Gt,Vl),n(e,Tr,s),n(e,ie,s),a(ie,Ka),a(Ka,Ut),a(Ut,st),a(st,ei),a(Ut,ti),a(ie,ai),a(ie,Ga),a(Ga,fe),a(fe,Yt),a(Yt,si),a(fe,ri),a(fe,Ua),a(Ua,oi),a(fe,ni),jr=!0},p:Qf,i(e){jr||(_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(ye.$$.fragment,e),_(ge.$$.fragment,e),_(ke.$$.fragment,e),_(Ee.$$.fragment,e),_(Te.$$.fragment,e),_(Ae.$$.fragment,e),_(Pe.$$.fragment,e),_(qe.$$.fragment,e),_(xe.$$.fragment,e),_(ze.$$.fragment,e),_(Fe.$$.fragment,e),_(Ce.$$.fragment,e),_(De.$$.fragment,e),_(Se.$$.fragment,e),_(Ie.$$.fragment,e),_(Me.$$.fragment,e),_(Ne.$$.fragment,e),_(Oe.$$.fragment,e),_(Le.$$.fragment,e),_(We.$$.fragment,e),_(Be.$$.fragment,e),_(He.$$.fragment,e),_(Ke.$$.fragment,e),_(Ge.$$.fragment,e),_(Ue.$$.fragment,e),_(Re.$$.fragment,e),_(Je.$$.fragment,e),_(Xe.$$.fragment,e),_(Ze.$$.fragment,e),_(Qe.$$.fragment,e),_(Ve.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(at.$$.fragment,e),jr=!0)},o(e){w(_e.$$.fragment,e),w(ve.$$.fragment,e),w(ye.$$.fragment,e),w(ge.$$.fragment,e),w(ke.$$.fragment,e),w(Ee.$$.fragment,e),w(Te.$$.fragment,e),w(Ae.$$.fragment,e),w(Pe.$$.fragment,e),w(qe.$$.fragment,e),w(xe.$$.fragment,e),w(ze.$$.fragment,e),w(Fe.$$.fragment,e),w(Ce.$$.fragment,e),w(De.$$.fragment,e),w(Se.$$.fragment,e),w(Ie.$$.fragment,e),w(Me.$$.fragment,e),w(Ne.$$.fragment,e),w(Oe.$$.fragment,e),w(Le.$$.fragment,e),w(We.$$.fragment,e),w(Be.$$.fragment,e),w(He.$$.fragment,e),w(Ke.$$.fragment,e),w(Ge.$$.fragment,e),w(Ue.$$.fragment,e),w(Re.$$.fragment,e),w(Je.$$.fragment,e),w(Xe.$$.fragment,e),w(Ze.$$.fragment,e),w(Qe.$$.fragment,e),w(Ve.$$.fragment,e),w(et.$$.fragment,e),w(tt.$$.fragment,e),w(at.$$.fragment,e),jr=!1},d(e){t(x),e&&t(rt),e&&t(g),v(_e),e&&t(Ra),e&&t(z),e&&t(Ja),e&&t(F),e&&t(Xa),e&&t(lt),e&&t(Za),e&&t(N),v(ve),e&&t(Qa),v(ye,e),e&&t(Va),e&&t(k),e&&t(es),e&&t(K),e&&t(ts),v(ge,e),e&&t(as),e&&t(C),e&&t(ss),e&&t(b),e&&t(rs),e&&t(ft),e&&t(os),v(ke,e),e&&t(ns),e&&t(G),e&&t(ls),v(Ee,e),e&&t(is),e&&t(mt),e&&t(fs),e&&t(U),e&&t(ps),v(Te,e),e&&t(ms),e&&t(Y),e&&t(ds),e&&t(dt),e&&t(hs),v(Ae,e),e&&t(us),e&&t(E),e&&t(cs),e&&t(ht),e&&t(_s),e&&t(O),v(Pe),e&&t(ws),v(qe,e),e&&t(vs),e&&t(J),e&&t(ys),e&&t(ct),e&&t(bs),v(xe,e),e&&t($s),e&&t(_t),e&&t(gs),e&&t(T),e&&t(ks),v(ze,e),e&&t(Es),e&&t(X),e&&t(Ts),v(Fe,e),e&&t(js),e&&t($t),e&&t(As),v(Ce,e),e&&t(Ps),e&&t(Z),e&&t(qs),e&&t(j),e&&t(xs),e&&t(A),e&&t(zs),v(De,e),e&&t(Fs),e&&t(Tt),e&&t(Cs),e&&t(Q),e&&t(Ds),v(Se,e),e&&t(Ss),e&&t(At),e&&t(Is),e&&t(Pt),e&&t(Ms),v(Ie,e),e&&t(Ns),e&&t(V),e&&t(Os),e&&t(xt),e&&t(Ls),e&&t(L),v(Me),e&&t(Ws),v(Ne,e),e&&t(Bs),e&&t(zt),e&&t(Hs),v(Oe,e),e&&t(Ks),e&&t(D),e&&t(Gs),v(Le,e),e&&t(Us),e&&t(te),e&&t(Ys),v(We,e),e&&t(Rs),e&&t(Ft),e&&t(Js),v(Be,e),e&&t(Xs),e&&t(Ct),e&&t(Zs),v(He,e),e&&t(Qs),e&&t(Dt),e&&t(Vs),e&&t(W),v(Ke),e&&t(er),v(Ge,e),e&&t(tr),e&&t(St),e&&t(ar),v(Ue,e),e&&t(sr),e&&t(S),e&&t(rr),e&&t(I),e&&t(or),e&&t(se),e&&t(nr),v(Re,e),e&&t(lr),e&&t(Mt),e&&t(ir),v(Je,e),e&&t(fr),e&&t(Nt),e&&t(pr),v(Xe,e),e&&t(mr),e&&t(M),e&&t(dr),v(Ze,e),e&&t(hr),e&&t(Wt),e&&t(ur),v(Qe,e),e&&t(cr),e&&t(re),e&&t(_r),v(Ve,e),e&&t(wr),e&&t(oe),e&&t(vr),v(et,e),e&&t(yr),e&&t(Bt),e&&t(br),e&&t(ne),e&&t($r),v(tt,e),e&&t(gr),e&&t(Kt),e&&t(kr),e&&t(B),v(at),e&&t(Er),e&&t(Gt),e&&t(Tr),e&&t(ie)}}}const ep={local:"finetuning-a-pretrained-model",sections:[{local:"preparing-the-datasets",title:"Preparing the datasets"},{local:"finetuning-in-pytorch-with-the-trainer-api",title:"Fine-tuning in PyTorch with the Trainer API"},{local:"finetuning-with-keras",title:"Fine-tuning with Keras"},{local:"finetuning-in-native-pytorch",title:"Fine-tuning in native PyTorch"},{local:"additional-resources",title:"Additional resources"}],title:"Fine-tuning a pretrained model"};function tp(Xr,x,rt){let{fw:g}=x;return Xr.$$set=P=>{"fw"in P&&rt(0,g=P.fw)},[g]}class lp extends Rf{constructor(x){super();Jf(this,x,tp,Vf,Xf,{fw:0})}}export{lp as default,ep as metadata};
