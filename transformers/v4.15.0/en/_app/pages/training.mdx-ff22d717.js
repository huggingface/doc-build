import{S as Xf,i as Zf,s as Qf,e as l,k as p,w as h,t as r,L as Vf,c as i,d as t,m,a as f,x as u,h as o,b as d,J as a,g as n,y as c,K as ep,q as _,o as w,B as v}from"../chunks/vendor-b1433968.js";import{Y as Zr}from"../chunks/Youtube-17e7948a.js";import{I as aa}from"../chunks/IconCopyLink-7029626d.js";import{C as y}from"../chunks/CodeBlock-a320dbd7.js";import{C as tp}from"../chunks/ColabDropdown-727dc22f.js";import"../chunks/CopyButton-f65cb278.js";function ap(Qr){let x,ot,g,P,sa,_e,Vr,ra,eo,Ra,we,Xa,z,to,oa,ao,so,nt,ro,oo,Za,F,no,ve,lo,io,lt,fo,po,Qa,it,Va,N,H,na,ye,mo,la,ho,es,be,ts,k,uo,$e,co,_o,ge,wo,vo,ft,yo,bo,as,K,$o,ia,go,ko,ss,ke,rs,C,Eo,fa,To,jo,pa,Ao,Po,os,b,qo,ma,xo,zo,da,Fo,Co,ha,Do,So,ua,Io,Mo,ca,No,Oo,_a,Lo,Wo,ns,pt,Bo,ls,Ee,is,G,Ho,mt,Ko,Go,fs,Te,ps,dt,Uo,ms,U,Yo,wa,Jo,Ro,ds,je,hs,Y,Xo,Ae,Zo,Qo,us,ht,Vo,cs,Pe,_s,E,en,va,tn,an,ya,sn,rn,ba,on,nn,ws,ut,vs,O,J,$a,qe,ln,ga,fn,ys,xe,bs,R,pn,ct,mn,dn,$s,_t,hn,gs,ze,ks,wt,un,Es,T,cn,vt,_n,wn,yt,vn,yn,bt,bn,$n,Ts,Fe,js,X,gn,$t,kn,En,As,Ce,Ps,gt,Tn,qs,De,xs,Z,jn,kt,An,Pn,zs,j,qn,Et,xn,zn,ka,Fn,Cn,Tt,Dn,Sn,Fs,A,In,Ea,Mn,Nn,Ta,On,Ln,ja,Wn,Bn,Cs,Se,Ds,jt,Hn,Ss,Q,Kn,At,Gn,Un,Is,Ie,Ms,Pt,Yn,Ns,qt,Jn,Os,Me,Ls,V,Rn,xt,Xn,Zn,Ws,zt,Bs,L,ee,Aa,Ne,Qn,Pa,Vn,Hs,Oe,Ks,Ft,el,Gs,Le,Us,D,tl,qa,al,sl,xa,rl,ol,Ys,We,Js,te,nl,za,ll,il,Rs,Be,Xs,Ct,fl,Zs,He,Qs,Dt,pl,Vs,Ke,er,St,tr,W,ae,Fa,Ge,ml,Ca,dl,ar,Ue,sr,It,hl,rr,Ye,or,S,ul,Mt,cl,_l,Da,wl,vl,nr,I,Je,yl,Sa,bl,$l,gl,q,kl,Ia,El,Tl,Ma,jl,Al,Na,Pl,ql,xl,Oa,zl,lr,se,Fl,La,Cl,Dl,ir,Re,fr,Nt,Sl,pr,Xe,mr,Ot,Il,dr,Ze,hr,M,Ml,Lt,Nl,Ol,Wt,Ll,Wl,ur,Qe,cr,Bt,Bl,_r,Ve,wr,re,Hl,Wa,Kl,Gl,vr,et,yr,oe,Ul,Ba,Yl,Jl,br,tt,$r,Ht,Rl,gr,ne,Xl,Kt,Zl,Ql,kr,at,Er,Gt,Tr,B,le,Ha,st,Vl,Ka,ei,jr,Ut,ti,Ar,ie,Ga,Yt,rt,ai,si,ri,Ua,fe,Jt,oi,ni,Ya,li,ii,Pr;return _e=new aa({}),we=new tp({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/training.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/training.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/training.ipynb"}]}}),ye=new aa({}),be=new Zr({props:{id:"_BZearw7f0w"}}),ke=new y({props:{code:`from datasets import load_dataset

raw_datasets = load_dataset("imdb"),`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

raw_datasets = load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)`}}),Ee=new y({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)`}}),Te=new y({props:{code:'inputs = tokenizer(sentences, padding="max_length", truncation=True),',highlighted:'inputs = tokenizer(sentences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>)'}}),je=new y({props:{code:`def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)

tokenized_datasets = raw_datasets.map(tokenize_function, batched=True),`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>], padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>)

tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)`}}),Pe=new y({props:{code:`small_train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(1000)) 
small_eval_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(1000)) 
full_train_dataset = tokenized_datasets["train"]
full_eval_dataset = tokenized_datasets["test"],`,highlighted:`small_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)) 
small_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)) 
full_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>]
full_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>]`}}),qe=new aa({}),xe=new Zr({props:{id:"nvBXf7s7vTI"}}),ze=new y({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),Fe=new y({props:{code:`from transformers import TrainingArguments

training_args = TrainingArguments("test_trainer"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test_trainer&quot;</span>)`}}),Ce=new y({props:{code:`from transformers import Trainer

trainer = Trainer(
    model=model, args=training_args, train_dataset=small_train_dataset, eval_dataset=small_eval_dataset
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model=model, args=training_args, train_dataset=small_train_dataset, eval_dataset=small_eval_dataset
)`}}),De=new y({props:{code:"trainer.train(),",highlighted:"trainer.train()"}}),Se=new y({props:{code:`import numpy as np
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
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)`}}),Ie=new y({props:{code:`trainer = Trainer(
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
trainer.evaluate()`}}),Me=new y({props:{code:`from transformers import TrainingArguments

training_args = TrainingArguments("test_trainer", evaluation_strategy="epoch"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test_trainer&quot;</span>, evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>)`}}),Ne=new aa({}),Oe=new Zr({props:{id:"rnTGBy2ax1c"}}),Le=new y({props:{code:`import tensorflow as tf
from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2),`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),We=new y({props:{code:`tf_train_dataset = small_train_dataset.remove_columns(["text"]).with_format("tensorflow")
tf_eval_dataset = small_eval_dataset.remove_columns(["text"]).with_format("tensorflow"),`,highlighted:`tf_train_dataset = small_train_dataset.remove_columns([<span class="hljs-string">&quot;text&quot;</span>]).with_format(<span class="hljs-string">&quot;tensorflow&quot;</span>)
tf_eval_dataset = small_eval_dataset.remove_columns([<span class="hljs-string">&quot;text&quot;</span>]).with_format(<span class="hljs-string">&quot;tensorflow&quot;</span>)`}}),Be=new y({props:{code:`train_features = {x: tf_train_dataset[x] for x in tokenizer.model_input_names}
train_tf_dataset = tf.data.Dataset.from_tensor_slices((train_features, tf_train_dataset["label"]))
train_tf_dataset = train_tf_dataset.shuffle(len(tf_train_dataset)).batch(8)

eval_features = {x: tf_eval_dataset[x] for x in tokenizer.model_input_names}
eval_tf_dataset = tf.data.Dataset.from_tensor_slices((eval_features, tf_eval_dataset["label"]))
eval_tf_dataset = eval_tf_dataset.batch(8),`,highlighted:`train_features = {x: tf_train_dataset[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> tokenizer.model_input_names}
train_tf_dataset = tf.data.Dataset.from_tensor_slices((train_features, tf_train_dataset[<span class="hljs-string">&quot;label&quot;</span>]))
train_tf_dataset = train_tf_dataset.shuffle(<span class="hljs-built_in">len</span>(tf_train_dataset)).batch(<span class="hljs-number">8</span>)

eval_features = {x: tf_eval_dataset[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> tokenizer.model_input_names}
eval_tf_dataset = tf.data.Dataset.from_tensor_slices((eval_features, tf_eval_dataset[<span class="hljs-string">&quot;label&quot;</span>]))
eval_tf_dataset = eval_tf_dataset.batch(<span class="hljs-number">8</span>)`}}),He=new y({props:{code:`model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=5e-5),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=tf.metrics.SparseCategoricalAccuracy(),
)

model.fit(train_tf_dataset, validation_data=eval_tf_dataset, epochs=3),`,highlighted:`model.<span class="hljs-built_in">compile</span>(
    optimizer=tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>),
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
    metrics=tf.metrics.SparseCategoricalAccuracy(),
)

model.fit(train_tf_dataset, validation_data=eval_tf_dataset, epochs=<span class="hljs-number">3</span>)`}}),Ke=new y({props:{code:`from transformers import AutoModelForSequenceClassification

model.save_pretrained("my_imdb_model")
pytorch_model = AutoModelForSequenceClassification.from_pretrained("my_imdb_model", from_tf=True),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model.save_pretrained(<span class="hljs-string">&quot;my_imdb_model&quot;</span>)
pytorch_model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;my_imdb_model&quot;</span>, from_tf=<span class="hljs-literal">True</span>)`}}),Ge=new aa({}),Ue=new Zr({props:{id:"Dh9CL8fyG80"}}),Ye=new y({props:{code:`del model
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
small_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>))`}}),Xe=new y({props:{code:`from torch.utils.data import DataLoader

train_dataloader = DataLoader(small_train_dataset, shuffle=True, batch_size=8)
eval_dataloader = DataLoader(small_eval_dataset, batch_size=8),`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader

train_dataloader = DataLoader(small_train_dataset, shuffle=<span class="hljs-literal">True</span>, batch_size=<span class="hljs-number">8</span>)
eval_dataloader = DataLoader(small_eval_dataset, batch_size=<span class="hljs-number">8</span>)`}}),Ze=new y({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=2),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),Qe=new y({props:{code:`from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),Ve=new y({props:{code:`from transformers import get_scheduler

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
)`}}),et=new y({props:{code:`import torch

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
model.to(device),`,highlighted:`<span class="hljs-keyword">import</span> torch

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
model.to(device)`}}),tt=new y({props:{code:`from tqdm.auto import tqdm

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
        progress_bar.update(<span class="hljs-number">1</span>)`}}),at=new y({props:{code:`metric= load_metric("accuracy")
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

metric.compute()`}}),st=new aa({}),{c(){x=l("meta"),ot=p(),g=l("h1"),P=l("a"),sa=l("span"),h(_e.$$.fragment),Vr=p(),ra=l("span"),eo=r("Fine-tuning a pretrained model"),Ra=p(),h(we.$$.fragment),Xa=p(),z=l("p"),to=r(`In this tutorial, we will show you how to fine-tune a pretrained model from the Transformers library. In TensorFlow,
models can be directly trained using Keras and the `),oa=l("code"),ao=r("fit"),so=r(` method. In PyTorch, there is no generic training loop so
the \u{1F917} Transformers library provides an API with the class `),nt=l("a"),ro=r("Trainer"),oo=r(` to let you fine-tune or train
a model from scratch easily. Then we will show you how to alternatively write the whole training loop in PyTorch.`),Za=p(),F=l("p"),no=r(`Before we can fine-tune a model, we need a dataset. In this tutorial, we will show you how to fine-tune BERT on the
`),ve=l("a"),lo=r("IMDB dataset"),io=r(`: the task is to classify whether movie reviews are positive or
negative. For examples of other tasks, refer to the `),lt=l("a"),fo=r("additional-resources"),po=r(" section!"),Qa=p(),it=l("a"),Va=p(),N=l("h2"),H=l("a"),na=l("span"),h(ye.$$.fragment),mo=p(),la=l("span"),ho=r("Preparing the datasets"),es=p(),h(be.$$.fragment),ts=p(),k=l("p"),uo=r("We will use the "),$e=l("a"),co=r("\u{1F917} Datasets"),_o=r(` library to download and preprocess the IMDB
datasets. We will go over this part pretty quickly. Since the focus of this tutorial is on training, you should refer
to the \u{1F917} Datasets `),ge=l("a"),wo=r("documentation"),vo=r(" or the "),ft=l("a"),yo=r("preprocessing"),bo=r(` tutorial for
more information.`),as=p(),K=l("p"),$o=r("First, we can use the "),ia=l("code"),go=r("load_dataset"),ko=r(" function to download and cache the dataset:"),ss=p(),h(ke.$$.fragment),rs=p(),C=l("p"),Eo=r("This works like the "),fa=l("code"),To=r("from_pretrained"),jo=r(` method we saw for the models and tokenizers (except the cache directory is
`),pa=l("em"),Ao=r("~/.cache/huggingface/dataset"),Po=r(" by default)."),os=p(),b=l("p"),qo=r("The "),ma=l("code"),xo=r("raw_datasets"),zo=r(" object is a dictionary with three keys: "),da=l("code"),Fo=r('"train"'),Co=r(", "),ha=l("code"),Do=r('"test"'),So=r(" and "),ua=l("code"),Io=r('"unsupervised"'),Mo=r(`
(which correspond to the three splits of that dataset). We will use the `),ca=l("code"),No=r('"train"'),Oo=r(` split for training and the
`),_a=l("code"),Lo=r('"test"'),Wo=r(" split for validation."),ns=p(),pt=l("p"),Bo=r("To preprocess our data, we will need a tokenizer:"),ls=p(),h(Ee.$$.fragment),is=p(),G=l("p"),Ho=r("As we saw in "),mt=l("a"),Ko=r("preprocessing"),Go=r(`, we can prepare the text inputs for the model with the following command (this is an
example, not a command you can execute):`),fs=p(),h(Te.$$.fragment),ps=p(),dt=l("p"),Uo=r(`This will make all the samples have the maximum length the model can accept (here 512), either by padding or truncating
them.`),ms=p(),U=l("p"),Yo=r(`However, we can instead apply these preprocessing steps to all the splits of our dataset at once by using the
`),wa=l("code"),Jo=r("map"),Ro=r(" method:"),ds=p(),h(je.$$.fragment),hs=p(),Y=l("p"),Xo=r("You can learn more about the map method or the other ways to preprocess the data in the \u{1F917} Datasets "),Ae=l("a"),Zo=r("documentation"),Qo=r("."),us=p(),ht=l("p"),Vo=r("Next we will generate a small subset of the training and validation set, to enable faster training:"),cs=p(),h(Pe.$$.fragment),_s=p(),E=l("p"),en=r("In all the examples below, we will always use "),va=l("code"),tn=r("small_train_dataset"),an=r(" and "),ya=l("code"),sn=r("small_eval_dataset"),rn=r(`. Just replace
them by their `),ba=l("em"),on=r("full"),nn=r(" equivalent to train or evaluate on the full dataset."),ws=p(),ut=l("a"),vs=p(),O=l("h2"),J=l("a"),$a=l("span"),h(qe.$$.fragment),ln=p(),ga=l("span"),fn=r("Fine-tuning in PyTorch with the Trainer API"),ys=p(),h(xe.$$.fragment),bs=p(),R=l("p"),pn=r("Since PyTorch does not provide a training loop, the \u{1F917} Transformers library provides a "),ct=l("a"),mn=r("Trainer"),dn=r(`
API that is optimized for \u{1F917} Transformers models, with a wide range of training options and with built-in features like
logging, gradient accumulation, and mixed precision.`),$s=p(),_t=l("p"),hn=r("First, let\u2019s define our model:"),gs=p(),h(ze.$$.fragment),ks=p(),wt=l("p"),un=r(`This will issue a warning about some of the pretrained weights not being used and some weights being randomly
initialized. That\u2019s because we are throwing away the pretraining head of the BERT model to replace it with a
classification head which is randomly initialized. We will fine-tune this model on our task, transferring the knowledge
of the pretrained model to it (which is why doing this is called transfer learning).`),Es=p(),T=l("p"),cn=r("Then, to define our "),vt=l("a"),_n=r("Trainer"),wn=r(`, we will need to instantiate a
`),yt=l("a"),vn=r("TrainingArguments"),yn=r(`. This class contains all the hyperparameters we can tune for the
`),bt=l("a"),bn=r("Trainer"),$n=r(` or the flags to activate the different training options it supports. Let\u2019s begin by
using all the defaults, the only thing we then have to provide is a directory in which the checkpoints will be saved:`),Ts=p(),h(Fe.$$.fragment),js=p(),X=l("p"),gn=r("Then we can instantiate a "),$t=l("a"),kn=r("Trainer"),En=r(" like this:"),As=p(),h(Ce.$$.fragment),Ps=p(),gt=l("p"),Tn=r("To fine-tune our model, we just need to call"),qs=p(),h(De.$$.fragment),xs=p(),Z=l("p"),jn=r(`which will start a training that you can follow with a progress bar, which should take a couple of minutes to complete
(as long as you have access to a GPU). It won\u2019t actually tell you anything useful about how well (or badly) your model
is performing however as by default, there is no evaluation during training, and we didn\u2019t tell the
`),kt=l("a"),An=r("Trainer"),Pn=r(" to compute any metrics. Let\u2019s have a look on how to do that now!"),zs=p(),j=l("p"),qn=r("To have the "),Et=l("a"),xn=r("Trainer"),zn=r(" compute and report metrics, we need to give it a "),ka=l("code"),Fn=r("compute_metrics"),Cn=r(`
function that takes predictions and labels (grouped in a namedtuple called `),Tt=l("a"),Dn=r("EvalPrediction"),Sn=r(`) and
return a dictionary with string items (the metric names) and float values (the metric values).`),Fs=p(),A=l("p"),In=r("The \u{1F917} Datasets library provides an easy way to get the common metrics used in NLP with the "),Ea=l("code"),Mn=r("load_metric"),Nn=r(` function.
here we simply use accuracy. Then we define the `),Ta=l("code"),On=r("compute_metrics"),Ln=r(` function that just convert logits to predictions
(remember that all \u{1F917} Transformers models return the logits) and feed them to `),ja=l("code"),Wn=r("compute"),Bn=r(" method of this metric."),Cs=p(),h(Se.$$.fragment),Ds=p(),jt=l("p"),Hn=r(`The compute function needs to receive a tuple (with logits and labels) and has to return a dictionary with string keys
(the name of the metric) and float values. It will be called at the end of each evaluation phase on the whole arrays of
predictions/labels.`),Ss=p(),Q=l("p"),Kn=r("To check if this works on practice, let\u2019s create a new "),At=l("a"),Gn=r("Trainer"),Un=r(" with our fine-tuned model:"),Is=p(),h(Ie.$$.fragment),Ms=p(),Pt=l("p"),Yn=r("which showed an accuracy of 87.5% in our case."),Ns=p(),qt=l("p"),Jn=r(`If you want to fine-tune your model and regularly report the evaluation metrics (for instance at the end of each
epoch), here is how you should define your training arguments:`),Os=p(),h(Me.$$.fragment),Ls=p(),V=l("p"),Rn=r("See the documentation of "),xt=l("a"),Xn=r("TrainingArguments"),Zn=r(" for more options."),Ws=p(),zt=l("a"),Bs=p(),L=l("h2"),ee=l("a"),Aa=l("span"),h(Ne.$$.fragment),Qn=p(),Pa=l("span"),Vn=r("Fine-tuning with Keras"),Hs=p(),h(Oe.$$.fragment),Ks=p(),Ft=l("p"),el=r("Models can also be trained natively in TensorFlow using the Keras API. First, let\u2019s define our model:"),Gs=p(),h(Le.$$.fragment),Us=p(),D=l("p"),tl=r("Then we will need to convert our datasets from before in standard "),qa=l("code"),al=r("tf.data.Dataset"),sl=r(`. Since we have fixed shapes,
it can easily be done like this. First we remove the `),xa=l("em"),rl=r("\u201Ctext\u201D"),ol=r(` column from our datasets and set them in TensorFlow
format:`),Ys=p(),h(We.$$.fragment),Js=p(),te=l("p"),nl=r("Then we convert everything in big tensors and use the "),za=l("code"),ll=r("tf.data.Dataset.from_tensor_slices"),il=r(" method:"),Rs=p(),h(Be.$$.fragment),Xs=p(),Ct=l("p"),fl=r("With this done, the model can then be compiled and trained as any Keras model:"),Zs=p(),h(He.$$.fragment),Qs=p(),Dt=l("p"),pl=r(`With the tight interoperability between TensorFlow and PyTorch models, you can even save the model and then reload it
as a PyTorch model (or vice-versa):`),Vs=p(),h(Ke.$$.fragment),er=p(),St=l("a"),tr=p(),W=l("h2"),ae=l("a"),Fa=l("span"),h(Ge.$$.fragment),ml=p(),Ca=l("span"),dl=r("Fine-tuning in native PyTorch"),ar=p(),h(Ue.$$.fragment),sr=p(),It=l("p"),hl=r("You might need to restart your notebook at this stage to free some memory, or execute the following code:"),rr=p(),h(Ye.$$.fragment),or=p(),S=l("p"),ul=r("Let\u2019s now see how to achieve the same results as in "),Mt=l("a"),cl=r("trainer section"),_l=r(` in PyTorch. First we need to
define the dataloaders, which we will use to iterate over batches. We just need to apply a bit of post-processing to
our `),Da=l("code"),wl=r("tokenized_datasets"),vl=r(" before doing that to:"),nr=p(),I=l("ul"),Je=l("li"),yl=r("remove the columns corresponding to values the model does not expect (here the "),Sa=l("code"),bl=r('"text"'),$l=r(" column)"),gl=p(),q=l("li"),kl=r("rename the column "),Ia=l("code"),El=r('"label"'),Tl=r(" to "),Ma=l("code"),jl=r('"labels"'),Al=r(" (because the model expect the argument to be named "),Na=l("code"),Pl=r("labels"),ql=r(")"),xl=p(),Oa=l("li"),zl=r("set the format of the datasets so they return PyTorch Tensors instead of lists."),lr=p(),se=l("p"),Fl=r("Our "),La=l("em"),Cl=r("tokenized_datasets"),Dl=r(" has one method for each of those steps:"),ir=p(),h(Re.$$.fragment),fr=p(),Nt=l("p"),Sl=r("Now that this is done, we can easily define our dataloaders:"),pr=p(),h(Xe.$$.fragment),mr=p(),Ot=l("p"),Il=r("Next, we define our model:"),dr=p(),h(Ze.$$.fragment),hr=p(),M=l("p"),Ml=r(`We are almost ready to write our training loop, the only two things are missing are an optimizer and a learning rate
scheduler. The default optimizer used by the `),Lt=l("a"),Nl=r("Trainer"),Ol=r(" is "),Wt=l("a"),Ll=r("AdamW"),Wl=r(":"),ur=p(),h(Qe.$$.fragment),cr=p(),Bt=l("p"),Bl=r("Finally, the learning rate scheduler used by default is just a linear decay from the maximum value (5e-5 here) to 0:"),_r=p(),h(Ve.$$.fragment),wr=p(),re=l("p"),Hl=r(`One last thing, we will want to use the GPU if we have access to one (otherwise training might take several hours
instead of a couple of minutes). To do this, we define a `),Wa=l("code"),Kl=r("device"),Gl=r(" we will put our model and our batches on."),vr=p(),h(et.$$.fragment),yr=p(),oe=l("p"),Ul=r(`We now are ready to train! To get some sense of when it will be finished, we add a progress bar over our number of
training steps, using the `),Ba=l("em"),Yl=r("tqdm"),Jl=r(" library."),br=p(),h(tt.$$.fragment),$r=p(),Ht=l("p"),Rl=r(`Note that if you are used to freezing the body of your pretrained model (like in computer vision) the above may seem a
bit strange, as we are directly fine-tuning the whole model without taking any precaution. It actually works better
this way for Transformers model (so this is not an oversight on our side). If you\u2019re not familiar with what \u201Cfreezing
the body\u201D of the model means, forget you read this paragraph.`),gr=p(),ne=l("p"),Xl=r("Now to check the results, we need to write the evaluation loop. Like in the "),Kt=l("a"),Zl=r("trainer section"),Ql=r(` we will
use a metric from the datasets library. Here we accumulate the predictions at each batch before computing the final
result when the loop is finished.`),kr=p(),h(at.$$.fragment),Er=p(),Gt=l("a"),Tr=p(),B=l("h2"),le=l("a"),Ha=l("span"),h(st.$$.fragment),Vl=p(),Ka=l("span"),ei=r("Additional resources"),jr=p(),Ut=l("p"),ti=r("To look at more fine-tuning examples you can refer to:"),Ar=p(),ie=l("ul"),Ga=l("li"),Yt=l("p"),rt=l("a"),ai=r("\u{1F917} Transformers Examples"),si=r(` which includes scripts
to train on all common NLP tasks in PyTorch and TensorFlow.`),ri=p(),Ua=l("li"),fe=l("p"),Jt=l("a"),oi=r("\u{1F917} Transformers Notebooks"),ni=r(` which contains various notebooks and in particular one per task (look for
the `),Ya=l("em"),li=r("how to finetune a model on xxx"),ii=r(")."),this.h()},l(e){const s=Vf('[data-svelte="svelte-1phssyn"]',document.head);x=i(s,"META",{name:!0,content:!0}),s.forEach(t),ot=m(e),g=i(e,"H1",{class:!0});var qr=f(g);P=i(qr,"A",{id:!0,class:!0,href:!0});var pi=f(P);sa=i(pi,"SPAN",{});var mi=f(sa);u(_e.$$.fragment,mi),mi.forEach(t),pi.forEach(t),Vr=m(qr),ra=i(qr,"SPAN",{});var di=f(ra);eo=o(di,"Fine-tuning a pretrained model"),di.forEach(t),qr.forEach(t),Ra=m(e),u(we.$$.fragment,e),Xa=m(e),z=i(e,"P",{});var Rt=f(z);to=o(Rt,`In this tutorial, we will show you how to fine-tune a pretrained model from the Transformers library. In TensorFlow,
models can be directly trained using Keras and the `),oa=i(Rt,"CODE",{});var hi=f(oa);ao=o(hi,"fit"),hi.forEach(t),so=o(Rt,` method. In PyTorch, there is no generic training loop so
the \u{1F917} Transformers library provides an API with the class `),nt=i(Rt,"A",{href:!0});var ui=f(nt);ro=o(ui,"Trainer"),ui.forEach(t),oo=o(Rt,` to let you fine-tune or train
a model from scratch easily. Then we will show you how to alternatively write the whole training loop in PyTorch.`),Rt.forEach(t),Za=m(e),F=i(e,"P",{});var Xt=f(F);no=o(Xt,`Before we can fine-tune a model, we need a dataset. In this tutorial, we will show you how to fine-tune BERT on the
`),ve=i(Xt,"A",{href:!0,rel:!0});var ci=f(ve);lo=o(ci,"IMDB dataset"),ci.forEach(t),io=o(Xt,`: the task is to classify whether movie reviews are positive or
negative. For examples of other tasks, refer to the `),lt=i(Xt,"A",{href:!0});var _i=f(lt);fo=o(_i,"additional-resources"),_i.forEach(t),po=o(Xt," section!"),Xt.forEach(t),Qa=m(e),it=i(e,"A",{id:!0}),f(it).forEach(t),Va=m(e),N=i(e,"H2",{class:!0});var xr=f(N);H=i(xr,"A",{id:!0,class:!0,href:!0});var wi=f(H);na=i(wi,"SPAN",{});var vi=f(na);u(ye.$$.fragment,vi),vi.forEach(t),wi.forEach(t),mo=m(xr),la=i(xr,"SPAN",{});var yi=f(la);ho=o(yi,"Preparing the datasets"),yi.forEach(t),xr.forEach(t),es=m(e),u(be.$$.fragment,e),ts=m(e),k=i(e,"P",{});var pe=f(k);uo=o(pe,"We will use the "),$e=i(pe,"A",{href:!0,rel:!0});var bi=f($e);co=o(bi,"\u{1F917} Datasets"),bi.forEach(t),_o=o(pe,` library to download and preprocess the IMDB
datasets. We will go over this part pretty quickly. Since the focus of this tutorial is on training, you should refer
to the \u{1F917} Datasets `),ge=i(pe,"A",{href:!0,rel:!0});var $i=f(ge);wo=o($i,"documentation"),$i.forEach(t),vo=o(pe," or the "),ft=i(pe,"A",{href:!0});var gi=f(ft);yo=o(gi,"preprocessing"),gi.forEach(t),bo=o(pe,` tutorial for
more information.`),pe.forEach(t),as=m(e),K=i(e,"P",{});var zr=f(K);$o=o(zr,"First, we can use the "),ia=i(zr,"CODE",{});var ki=f(ia);go=o(ki,"load_dataset"),ki.forEach(t),ko=o(zr," function to download and cache the dataset:"),zr.forEach(t),ss=m(e),u(ke.$$.fragment,e),rs=m(e),C=i(e,"P",{});var Zt=f(C);Eo=o(Zt,"This works like the "),fa=i(Zt,"CODE",{});var Ei=f(fa);To=o(Ei,"from_pretrained"),Ei.forEach(t),jo=o(Zt,` method we saw for the models and tokenizers (except the cache directory is
`),pa=i(Zt,"EM",{});var Ti=f(pa);Ao=o(Ti,"~/.cache/huggingface/dataset"),Ti.forEach(t),Po=o(Zt," by default)."),Zt.forEach(t),os=m(e),b=i(e,"P",{});var $=f(b);qo=o($,"The "),ma=i($,"CODE",{});var ji=f(ma);xo=o(ji,"raw_datasets"),ji.forEach(t),zo=o($," object is a dictionary with three keys: "),da=i($,"CODE",{});var Ai=f(da);Fo=o(Ai,'"train"'),Ai.forEach(t),Co=o($,", "),ha=i($,"CODE",{});var Pi=f(ha);Do=o(Pi,'"test"'),Pi.forEach(t),So=o($," and "),ua=i($,"CODE",{});var qi=f(ua);Io=o(qi,'"unsupervised"'),qi.forEach(t),Mo=o($,`
(which correspond to the three splits of that dataset). We will use the `),ca=i($,"CODE",{});var xi=f(ca);No=o(xi,'"train"'),xi.forEach(t),Oo=o($,` split for training and the
`),_a=i($,"CODE",{});var zi=f(_a);Lo=o(zi,'"test"'),zi.forEach(t),Wo=o($," split for validation."),$.forEach(t),ns=m(e),pt=i(e,"P",{});var Fi=f(pt);Bo=o(Fi,"To preprocess our data, we will need a tokenizer:"),Fi.forEach(t),ls=m(e),u(Ee.$$.fragment,e),is=m(e),G=i(e,"P",{});var Fr=f(G);Ho=o(Fr,"As we saw in "),mt=i(Fr,"A",{href:!0});var Ci=f(mt);Ko=o(Ci,"preprocessing"),Ci.forEach(t),Go=o(Fr,`, we can prepare the text inputs for the model with the following command (this is an
example, not a command you can execute):`),Fr.forEach(t),fs=m(e),u(Te.$$.fragment,e),ps=m(e),dt=i(e,"P",{});var Di=f(dt);Uo=o(Di,`This will make all the samples have the maximum length the model can accept (here 512), either by padding or truncating
them.`),Di.forEach(t),ms=m(e),U=i(e,"P",{});var Cr=f(U);Yo=o(Cr,`However, we can instead apply these preprocessing steps to all the splits of our dataset at once by using the
`),wa=i(Cr,"CODE",{});var Si=f(wa);Jo=o(Si,"map"),Si.forEach(t),Ro=o(Cr," method:"),Cr.forEach(t),ds=m(e),u(je.$$.fragment,e),hs=m(e),Y=i(e,"P",{});var Dr=f(Y);Xo=o(Dr,"You can learn more about the map method or the other ways to preprocess the data in the \u{1F917} Datasets "),Ae=i(Dr,"A",{href:!0,rel:!0});var Ii=f(Ae);Zo=o(Ii,"documentation"),Ii.forEach(t),Qo=o(Dr,"."),Dr.forEach(t),us=m(e),ht=i(e,"P",{});var Mi=f(ht);Vo=o(Mi,"Next we will generate a small subset of the training and validation set, to enable faster training:"),Mi.forEach(t),cs=m(e),u(Pe.$$.fragment,e),_s=m(e),E=i(e,"P",{});var me=f(E);en=o(me,"In all the examples below, we will always use "),va=i(me,"CODE",{});var Ni=f(va);tn=o(Ni,"small_train_dataset"),Ni.forEach(t),an=o(me," and "),ya=i(me,"CODE",{});var Oi=f(ya);sn=o(Oi,"small_eval_dataset"),Oi.forEach(t),rn=o(me,`. Just replace
them by their `),ba=i(me,"EM",{});var Li=f(ba);on=o(Li,"full"),Li.forEach(t),nn=o(me," equivalent to train or evaluate on the full dataset."),me.forEach(t),ws=m(e),ut=i(e,"A",{id:!0}),f(ut).forEach(t),vs=m(e),O=i(e,"H2",{class:!0});var Sr=f(O);J=i(Sr,"A",{id:!0,class:!0,href:!0});var Wi=f(J);$a=i(Wi,"SPAN",{});var Bi=f($a);u(qe.$$.fragment,Bi),Bi.forEach(t),Wi.forEach(t),ln=m(Sr),ga=i(Sr,"SPAN",{});var Hi=f(ga);fn=o(Hi,"Fine-tuning in PyTorch with the Trainer API"),Hi.forEach(t),Sr.forEach(t),ys=m(e),u(xe.$$.fragment,e),bs=m(e),R=i(e,"P",{});var Ir=f(R);pn=o(Ir,"Since PyTorch does not provide a training loop, the \u{1F917} Transformers library provides a "),ct=i(Ir,"A",{href:!0});var Ki=f(ct);mn=o(Ki,"Trainer"),Ki.forEach(t),dn=o(Ir,`
API that is optimized for \u{1F917} Transformers models, with a wide range of training options and with built-in features like
logging, gradient accumulation, and mixed precision.`),Ir.forEach(t),$s=m(e),_t=i(e,"P",{});var Gi=f(_t);hn=o(Gi,"First, let\u2019s define our model:"),Gi.forEach(t),gs=m(e),u(ze.$$.fragment,e),ks=m(e),wt=i(e,"P",{});var Ui=f(wt);un=o(Ui,`This will issue a warning about some of the pretrained weights not being used and some weights being randomly
initialized. That\u2019s because we are throwing away the pretraining head of the BERT model to replace it with a
classification head which is randomly initialized. We will fine-tune this model on our task, transferring the knowledge
of the pretrained model to it (which is why doing this is called transfer learning).`),Ui.forEach(t),Es=m(e),T=i(e,"P",{});var de=f(T);cn=o(de,"Then, to define our "),vt=i(de,"A",{href:!0});var Yi=f(vt);_n=o(Yi,"Trainer"),Yi.forEach(t),wn=o(de,`, we will need to instantiate a
`),yt=i(de,"A",{href:!0});var Ji=f(yt);vn=o(Ji,"TrainingArguments"),Ji.forEach(t),yn=o(de,`. This class contains all the hyperparameters we can tune for the
`),bt=i(de,"A",{href:!0});var Ri=f(bt);bn=o(Ri,"Trainer"),Ri.forEach(t),$n=o(de,` or the flags to activate the different training options it supports. Let\u2019s begin by
using all the defaults, the only thing we then have to provide is a directory in which the checkpoints will be saved:`),de.forEach(t),Ts=m(e),u(Fe.$$.fragment,e),js=m(e),X=i(e,"P",{});var Mr=f(X);gn=o(Mr,"Then we can instantiate a "),$t=i(Mr,"A",{href:!0});var Xi=f($t);kn=o(Xi,"Trainer"),Xi.forEach(t),En=o(Mr," like this:"),Mr.forEach(t),As=m(e),u(Ce.$$.fragment,e),Ps=m(e),gt=i(e,"P",{});var Zi=f(gt);Tn=o(Zi,"To fine-tune our model, we just need to call"),Zi.forEach(t),qs=m(e),u(De.$$.fragment,e),xs=m(e),Z=i(e,"P",{});var Nr=f(Z);jn=o(Nr,`which will start a training that you can follow with a progress bar, which should take a couple of minutes to complete
(as long as you have access to a GPU). It won\u2019t actually tell you anything useful about how well (or badly) your model
is performing however as by default, there is no evaluation during training, and we didn\u2019t tell the
`),kt=i(Nr,"A",{href:!0});var Qi=f(kt);An=o(Qi,"Trainer"),Qi.forEach(t),Pn=o(Nr," to compute any metrics. Let\u2019s have a look on how to do that now!"),Nr.forEach(t),zs=m(e),j=i(e,"P",{});var he=f(j);qn=o(he,"To have the "),Et=i(he,"A",{href:!0});var Vi=f(Et);xn=o(Vi,"Trainer"),Vi.forEach(t),zn=o(he," compute and report metrics, we need to give it a "),ka=i(he,"CODE",{});var ef=f(ka);Fn=o(ef,"compute_metrics"),ef.forEach(t),Cn=o(he,`
function that takes predictions and labels (grouped in a namedtuple called `),Tt=i(he,"A",{href:!0});var tf=f(Tt);Dn=o(tf,"EvalPrediction"),tf.forEach(t),Sn=o(he,`) and
return a dictionary with string items (the metric names) and float values (the metric values).`),he.forEach(t),Fs=m(e),A=i(e,"P",{});var ue=f(A);In=o(ue,"The \u{1F917} Datasets library provides an easy way to get the common metrics used in NLP with the "),Ea=i(ue,"CODE",{});var af=f(Ea);Mn=o(af,"load_metric"),af.forEach(t),Nn=o(ue,` function.
here we simply use accuracy. Then we define the `),Ta=i(ue,"CODE",{});var sf=f(Ta);On=o(sf,"compute_metrics"),sf.forEach(t),Ln=o(ue,` function that just convert logits to predictions
(remember that all \u{1F917} Transformers models return the logits) and feed them to `),ja=i(ue,"CODE",{});var rf=f(ja);Wn=o(rf,"compute"),rf.forEach(t),Bn=o(ue," method of this metric."),ue.forEach(t),Cs=m(e),u(Se.$$.fragment,e),Ds=m(e),jt=i(e,"P",{});var of=f(jt);Hn=o(of,`The compute function needs to receive a tuple (with logits and labels) and has to return a dictionary with string keys
(the name of the metric) and float values. It will be called at the end of each evaluation phase on the whole arrays of
predictions/labels.`),of.forEach(t),Ss=m(e),Q=i(e,"P",{});var Or=f(Q);Kn=o(Or,"To check if this works on practice, let\u2019s create a new "),At=i(Or,"A",{href:!0});var nf=f(At);Gn=o(nf,"Trainer"),nf.forEach(t),Un=o(Or," with our fine-tuned model:"),Or.forEach(t),Is=m(e),u(Ie.$$.fragment,e),Ms=m(e),Pt=i(e,"P",{});var lf=f(Pt);Yn=o(lf,"which showed an accuracy of 87.5% in our case."),lf.forEach(t),Ns=m(e),qt=i(e,"P",{});var ff=f(qt);Jn=o(ff,`If you want to fine-tune your model and regularly report the evaluation metrics (for instance at the end of each
epoch), here is how you should define your training arguments:`),ff.forEach(t),Os=m(e),u(Me.$$.fragment,e),Ls=m(e),V=i(e,"P",{});var Lr=f(V);Rn=o(Lr,"See the documentation of "),xt=i(Lr,"A",{href:!0});var pf=f(xt);Xn=o(pf,"TrainingArguments"),pf.forEach(t),Zn=o(Lr," for more options."),Lr.forEach(t),Ws=m(e),zt=i(e,"A",{id:!0}),f(zt).forEach(t),Bs=m(e),L=i(e,"H2",{class:!0});var Wr=f(L);ee=i(Wr,"A",{id:!0,class:!0,href:!0});var mf=f(ee);Aa=i(mf,"SPAN",{});var df=f(Aa);u(Ne.$$.fragment,df),df.forEach(t),mf.forEach(t),Qn=m(Wr),Pa=i(Wr,"SPAN",{});var hf=f(Pa);Vn=o(hf,"Fine-tuning with Keras"),hf.forEach(t),Wr.forEach(t),Hs=m(e),u(Oe.$$.fragment,e),Ks=m(e),Ft=i(e,"P",{});var uf=f(Ft);el=o(uf,"Models can also be trained natively in TensorFlow using the Keras API. First, let\u2019s define our model:"),uf.forEach(t),Gs=m(e),u(Le.$$.fragment,e),Us=m(e),D=i(e,"P",{});var Qt=f(D);tl=o(Qt,"Then we will need to convert our datasets from before in standard "),qa=i(Qt,"CODE",{});var cf=f(qa);al=o(cf,"tf.data.Dataset"),cf.forEach(t),sl=o(Qt,`. Since we have fixed shapes,
it can easily be done like this. First we remove the `),xa=i(Qt,"EM",{});var _f=f(xa);rl=o(_f,"\u201Ctext\u201D"),_f.forEach(t),ol=o(Qt,` column from our datasets and set them in TensorFlow
format:`),Qt.forEach(t),Ys=m(e),u(We.$$.fragment,e),Js=m(e),te=i(e,"P",{});var Br=f(te);nl=o(Br,"Then we convert everything in big tensors and use the "),za=i(Br,"CODE",{});var wf=f(za);ll=o(wf,"tf.data.Dataset.from_tensor_slices"),wf.forEach(t),il=o(Br," method:"),Br.forEach(t),Rs=m(e),u(Be.$$.fragment,e),Xs=m(e),Ct=i(e,"P",{});var vf=f(Ct);fl=o(vf,"With this done, the model can then be compiled and trained as any Keras model:"),vf.forEach(t),Zs=m(e),u(He.$$.fragment,e),Qs=m(e),Dt=i(e,"P",{});var yf=f(Dt);pl=o(yf,`With the tight interoperability between TensorFlow and PyTorch models, you can even save the model and then reload it
as a PyTorch model (or vice-versa):`),yf.forEach(t),Vs=m(e),u(Ke.$$.fragment,e),er=m(e),St=i(e,"A",{id:!0}),f(St).forEach(t),tr=m(e),W=i(e,"H2",{class:!0});var Hr=f(W);ae=i(Hr,"A",{id:!0,class:!0,href:!0});var bf=f(ae);Fa=i(bf,"SPAN",{});var $f=f(Fa);u(Ge.$$.fragment,$f),$f.forEach(t),bf.forEach(t),ml=m(Hr),Ca=i(Hr,"SPAN",{});var gf=f(Ca);dl=o(gf,"Fine-tuning in native PyTorch"),gf.forEach(t),Hr.forEach(t),ar=m(e),u(Ue.$$.fragment,e),sr=m(e),It=i(e,"P",{});var kf=f(It);hl=o(kf,"You might need to restart your notebook at this stage to free some memory, or execute the following code:"),kf.forEach(t),rr=m(e),u(Ye.$$.fragment,e),or=m(e),S=i(e,"P",{});var Vt=f(S);ul=o(Vt,"Let\u2019s now see how to achieve the same results as in "),Mt=i(Vt,"A",{href:!0});var Ef=f(Mt);cl=o(Ef,"trainer section"),Ef.forEach(t),_l=o(Vt,` in PyTorch. First we need to
define the dataloaders, which we will use to iterate over batches. We just need to apply a bit of post-processing to
our `),Da=i(Vt,"CODE",{});var Tf=f(Da);wl=o(Tf,"tokenized_datasets"),Tf.forEach(t),vl=o(Vt," before doing that to:"),Vt.forEach(t),nr=m(e),I=i(e,"UL",{});var ea=f(I);Je=i(ea,"LI",{});var Kr=f(Je);yl=o(Kr,"remove the columns corresponding to values the model does not expect (here the "),Sa=i(Kr,"CODE",{});var jf=f(Sa);bl=o(jf,'"text"'),jf.forEach(t),$l=o(Kr," column)"),Kr.forEach(t),gl=m(ea),q=i(ea,"LI",{});var ce=f(q);kl=o(ce,"rename the column "),Ia=i(ce,"CODE",{});var Af=f(Ia);El=o(Af,'"label"'),Af.forEach(t),Tl=o(ce," to "),Ma=i(ce,"CODE",{});var Pf=f(Ma);jl=o(Pf,'"labels"'),Pf.forEach(t),Al=o(ce," (because the model expect the argument to be named "),Na=i(ce,"CODE",{});var qf=f(Na);Pl=o(qf,"labels"),qf.forEach(t),ql=o(ce,")"),ce.forEach(t),xl=m(ea),Oa=i(ea,"LI",{});var xf=f(Oa);zl=o(xf,"set the format of the datasets so they return PyTorch Tensors instead of lists."),xf.forEach(t),ea.forEach(t),lr=m(e),se=i(e,"P",{});var Gr=f(se);Fl=o(Gr,"Our "),La=i(Gr,"EM",{});var zf=f(La);Cl=o(zf,"tokenized_datasets"),zf.forEach(t),Dl=o(Gr," has one method for each of those steps:"),Gr.forEach(t),ir=m(e),u(Re.$$.fragment,e),fr=m(e),Nt=i(e,"P",{});var Ff=f(Nt);Sl=o(Ff,"Now that this is done, we can easily define our dataloaders:"),Ff.forEach(t),pr=m(e),u(Xe.$$.fragment,e),mr=m(e),Ot=i(e,"P",{});var Cf=f(Ot);Il=o(Cf,"Next, we define our model:"),Cf.forEach(t),dr=m(e),u(Ze.$$.fragment,e),hr=m(e),M=i(e,"P",{});var ta=f(M);Ml=o(ta,`We are almost ready to write our training loop, the only two things are missing are an optimizer and a learning rate
scheduler. The default optimizer used by the `),Lt=i(ta,"A",{href:!0});var Df=f(Lt);Nl=o(Df,"Trainer"),Df.forEach(t),Ol=o(ta," is "),Wt=i(ta,"A",{href:!0});var Sf=f(Wt);Ll=o(Sf,"AdamW"),Sf.forEach(t),Wl=o(ta,":"),ta.forEach(t),ur=m(e),u(Qe.$$.fragment,e),cr=m(e),Bt=i(e,"P",{});var If=f(Bt);Bl=o(If,"Finally, the learning rate scheduler used by default is just a linear decay from the maximum value (5e-5 here) to 0:"),If.forEach(t),_r=m(e),u(Ve.$$.fragment,e),wr=m(e),re=i(e,"P",{});var Ur=f(re);Hl=o(Ur,`One last thing, we will want to use the GPU if we have access to one (otherwise training might take several hours
instead of a couple of minutes). To do this, we define a `),Wa=i(Ur,"CODE",{});var Mf=f(Wa);Kl=o(Mf,"device"),Mf.forEach(t),Gl=o(Ur," we will put our model and our batches on."),Ur.forEach(t),vr=m(e),u(et.$$.fragment,e),yr=m(e),oe=i(e,"P",{});var Yr=f(oe);Ul=o(Yr,`We now are ready to train! To get some sense of when it will be finished, we add a progress bar over our number of
training steps, using the `),Ba=i(Yr,"EM",{});var Nf=f(Ba);Yl=o(Nf,"tqdm"),Nf.forEach(t),Jl=o(Yr," library."),Yr.forEach(t),br=m(e),u(tt.$$.fragment,e),$r=m(e),Ht=i(e,"P",{});var Of=f(Ht);Rl=o(Of,`Note that if you are used to freezing the body of your pretrained model (like in computer vision) the above may seem a
bit strange, as we are directly fine-tuning the whole model without taking any precaution. It actually works better
this way for Transformers model (so this is not an oversight on our side). If you\u2019re not familiar with what \u201Cfreezing
the body\u201D of the model means, forget you read this paragraph.`),Of.forEach(t),gr=m(e),ne=i(e,"P",{});var Jr=f(ne);Xl=o(Jr,"Now to check the results, we need to write the evaluation loop. Like in the "),Kt=i(Jr,"A",{href:!0});var Lf=f(Kt);Zl=o(Lf,"trainer section"),Lf.forEach(t),Ql=o(Jr,` we will
use a metric from the datasets library. Here we accumulate the predictions at each batch before computing the final
result when the loop is finished.`),Jr.forEach(t),kr=m(e),u(at.$$.fragment,e),Er=m(e),Gt=i(e,"A",{id:!0}),f(Gt).forEach(t),Tr=m(e),B=i(e,"H2",{class:!0});var Rr=f(B);le=i(Rr,"A",{id:!0,class:!0,href:!0});var Wf=f(le);Ha=i(Wf,"SPAN",{});var Bf=f(Ha);u(st.$$.fragment,Bf),Bf.forEach(t),Wf.forEach(t),Vl=m(Rr),Ka=i(Rr,"SPAN",{});var Hf=f(Ka);ei=o(Hf,"Additional resources"),Hf.forEach(t),Rr.forEach(t),jr=m(e),Ut=i(e,"P",{});var Kf=f(Ut);ti=o(Kf,"To look at more fine-tuning examples you can refer to:"),Kf.forEach(t),Ar=m(e),ie=i(e,"UL",{});var Xr=f(ie);Ga=i(Xr,"LI",{});var Gf=f(Ga);Yt=i(Gf,"P",{});var fi=f(Yt);rt=i(fi,"A",{href:!0,rel:!0});var Uf=f(rt);ai=o(Uf,"\u{1F917} Transformers Examples"),Uf.forEach(t),si=o(fi,` which includes scripts
to train on all common NLP tasks in PyTorch and TensorFlow.`),fi.forEach(t),Gf.forEach(t),ri=m(Xr),Ua=i(Xr,"LI",{});var Yf=f(Ua);fe=i(Yf,"P",{});var Ja=f(fe);Jt=i(Ja,"A",{href:!0});var Jf=f(Jt);oi=o(Jf,"\u{1F917} Transformers Notebooks"),Jf.forEach(t),ni=o(Ja,` which contains various notebooks and in particular one per task (look for
the `),Ya=i(Ja,"EM",{});var Rf=f(Ya);li=o(Rf,"how to finetune a model on xxx"),Rf.forEach(t),ii=o(Ja,")."),Ja.forEach(t),Yf.forEach(t),Xr.forEach(t),this.h()},h(){d(x,"name","hf:doc:metadata"),d(x,"content",JSON.stringify(sp)),d(P,"id","finetuning-a-pretrained-model"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#finetuning-a-pretrained-model"),d(g,"class","relative group"),d(nt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(ve,"href","https://www.imdb.com/interfaces/"),d(ve,"rel","nofollow"),d(lt,"href","#additional-resources"),d(it,"id","data-processing"),d(H,"id","preparing-the-datasets"),d(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(H,"href","#preparing-the-datasets"),d(N,"class","relative group"),d($e,"href","https://github.com/huggingface/datasets/"),d($e,"rel","nofollow"),d(ge,"href","https://huggingface.co/docs/datasets/"),d(ge,"rel","nofollow"),d(ft,"href","preprocessing"),d(mt,"href","preprocessing"),d(Ae,"href","https://huggingface.co/docs/datasets/"),d(Ae,"rel","nofollow"),d(ut,"id","trainer"),d(J,"id","finetuning-in-pytorch-with-the-trainer-api"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#finetuning-in-pytorch-with-the-trainer-api"),d(O,"class","relative group"),d(ct,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(vt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(yt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),d(bt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d($t,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(kt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(Et,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(Tt,"href","/docs/transformers/v4.15.0/en/internal/trainer_utils#transformers.EvalPrediction"),d(At,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(xt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),d(zt,"id","keras"),d(ee,"id","finetuning-with-keras"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#finetuning-with-keras"),d(L,"class","relative group"),d(St,"id","pytorch_native"),d(ae,"id","finetuning-in-native-pytorch"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#finetuning-in-native-pytorch"),d(W,"class","relative group"),d(Mt,"href","#trainer"),d(Lt,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),d(Wt,"href","/docs/transformers/v4.15.0/en/main_classes/optimizer_schedules#transformers.AdamW"),d(Kt,"href","#trainer"),d(Gt,"id","additional-resources"),d(le,"id","additional-resources"),d(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(le,"href","#additional-resources"),d(B,"class","relative group"),d(rt,"href","https://github.com/huggingface/transformers/tree/master/examples"),d(rt,"rel","nofollow"),d(Jt,"href","notebooks")},m(e,s){a(document.head,x),n(e,ot,s),n(e,g,s),a(g,P),a(P,sa),c(_e,sa,null),a(g,Vr),a(g,ra),a(ra,eo),n(e,Ra,s),c(we,e,s),n(e,Xa,s),n(e,z,s),a(z,to),a(z,oa),a(oa,ao),a(z,so),a(z,nt),a(nt,ro),a(z,oo),n(e,Za,s),n(e,F,s),a(F,no),a(F,ve),a(ve,lo),a(F,io),a(F,lt),a(lt,fo),a(F,po),n(e,Qa,s),n(e,it,s),n(e,Va,s),n(e,N,s),a(N,H),a(H,na),c(ye,na,null),a(N,mo),a(N,la),a(la,ho),n(e,es,s),c(be,e,s),n(e,ts,s),n(e,k,s),a(k,uo),a(k,$e),a($e,co),a(k,_o),a(k,ge),a(ge,wo),a(k,vo),a(k,ft),a(ft,yo),a(k,bo),n(e,as,s),n(e,K,s),a(K,$o),a(K,ia),a(ia,go),a(K,ko),n(e,ss,s),c(ke,e,s),n(e,rs,s),n(e,C,s),a(C,Eo),a(C,fa),a(fa,To),a(C,jo),a(C,pa),a(pa,Ao),a(C,Po),n(e,os,s),n(e,b,s),a(b,qo),a(b,ma),a(ma,xo),a(b,zo),a(b,da),a(da,Fo),a(b,Co),a(b,ha),a(ha,Do),a(b,So),a(b,ua),a(ua,Io),a(b,Mo),a(b,ca),a(ca,No),a(b,Oo),a(b,_a),a(_a,Lo),a(b,Wo),n(e,ns,s),n(e,pt,s),a(pt,Bo),n(e,ls,s),c(Ee,e,s),n(e,is,s),n(e,G,s),a(G,Ho),a(G,mt),a(mt,Ko),a(G,Go),n(e,fs,s),c(Te,e,s),n(e,ps,s),n(e,dt,s),a(dt,Uo),n(e,ms,s),n(e,U,s),a(U,Yo),a(U,wa),a(wa,Jo),a(U,Ro),n(e,ds,s),c(je,e,s),n(e,hs,s),n(e,Y,s),a(Y,Xo),a(Y,Ae),a(Ae,Zo),a(Y,Qo),n(e,us,s),n(e,ht,s),a(ht,Vo),n(e,cs,s),c(Pe,e,s),n(e,_s,s),n(e,E,s),a(E,en),a(E,va),a(va,tn),a(E,an),a(E,ya),a(ya,sn),a(E,rn),a(E,ba),a(ba,on),a(E,nn),n(e,ws,s),n(e,ut,s),n(e,vs,s),n(e,O,s),a(O,J),a(J,$a),c(qe,$a,null),a(O,ln),a(O,ga),a(ga,fn),n(e,ys,s),c(xe,e,s),n(e,bs,s),n(e,R,s),a(R,pn),a(R,ct),a(ct,mn),a(R,dn),n(e,$s,s),n(e,_t,s),a(_t,hn),n(e,gs,s),c(ze,e,s),n(e,ks,s),n(e,wt,s),a(wt,un),n(e,Es,s),n(e,T,s),a(T,cn),a(T,vt),a(vt,_n),a(T,wn),a(T,yt),a(yt,vn),a(T,yn),a(T,bt),a(bt,bn),a(T,$n),n(e,Ts,s),c(Fe,e,s),n(e,js,s),n(e,X,s),a(X,gn),a(X,$t),a($t,kn),a(X,En),n(e,As,s),c(Ce,e,s),n(e,Ps,s),n(e,gt,s),a(gt,Tn),n(e,qs,s),c(De,e,s),n(e,xs,s),n(e,Z,s),a(Z,jn),a(Z,kt),a(kt,An),a(Z,Pn),n(e,zs,s),n(e,j,s),a(j,qn),a(j,Et),a(Et,xn),a(j,zn),a(j,ka),a(ka,Fn),a(j,Cn),a(j,Tt),a(Tt,Dn),a(j,Sn),n(e,Fs,s),n(e,A,s),a(A,In),a(A,Ea),a(Ea,Mn),a(A,Nn),a(A,Ta),a(Ta,On),a(A,Ln),a(A,ja),a(ja,Wn),a(A,Bn),n(e,Cs,s),c(Se,e,s),n(e,Ds,s),n(e,jt,s),a(jt,Hn),n(e,Ss,s),n(e,Q,s),a(Q,Kn),a(Q,At),a(At,Gn),a(Q,Un),n(e,Is,s),c(Ie,e,s),n(e,Ms,s),n(e,Pt,s),a(Pt,Yn),n(e,Ns,s),n(e,qt,s),a(qt,Jn),n(e,Os,s),c(Me,e,s),n(e,Ls,s),n(e,V,s),a(V,Rn),a(V,xt),a(xt,Xn),a(V,Zn),n(e,Ws,s),n(e,zt,s),n(e,Bs,s),n(e,L,s),a(L,ee),a(ee,Aa),c(Ne,Aa,null),a(L,Qn),a(L,Pa),a(Pa,Vn),n(e,Hs,s),c(Oe,e,s),n(e,Ks,s),n(e,Ft,s),a(Ft,el),n(e,Gs,s),c(Le,e,s),n(e,Us,s),n(e,D,s),a(D,tl),a(D,qa),a(qa,al),a(D,sl),a(D,xa),a(xa,rl),a(D,ol),n(e,Ys,s),c(We,e,s),n(e,Js,s),n(e,te,s),a(te,nl),a(te,za),a(za,ll),a(te,il),n(e,Rs,s),c(Be,e,s),n(e,Xs,s),n(e,Ct,s),a(Ct,fl),n(e,Zs,s),c(He,e,s),n(e,Qs,s),n(e,Dt,s),a(Dt,pl),n(e,Vs,s),c(Ke,e,s),n(e,er,s),n(e,St,s),n(e,tr,s),n(e,W,s),a(W,ae),a(ae,Fa),c(Ge,Fa,null),a(W,ml),a(W,Ca),a(Ca,dl),n(e,ar,s),c(Ue,e,s),n(e,sr,s),n(e,It,s),a(It,hl),n(e,rr,s),c(Ye,e,s),n(e,or,s),n(e,S,s),a(S,ul),a(S,Mt),a(Mt,cl),a(S,_l),a(S,Da),a(Da,wl),a(S,vl),n(e,nr,s),n(e,I,s),a(I,Je),a(Je,yl),a(Je,Sa),a(Sa,bl),a(Je,$l),a(I,gl),a(I,q),a(q,kl),a(q,Ia),a(Ia,El),a(q,Tl),a(q,Ma),a(Ma,jl),a(q,Al),a(q,Na),a(Na,Pl),a(q,ql),a(I,xl),a(I,Oa),a(Oa,zl),n(e,lr,s),n(e,se,s),a(se,Fl),a(se,La),a(La,Cl),a(se,Dl),n(e,ir,s),c(Re,e,s),n(e,fr,s),n(e,Nt,s),a(Nt,Sl),n(e,pr,s),c(Xe,e,s),n(e,mr,s),n(e,Ot,s),a(Ot,Il),n(e,dr,s),c(Ze,e,s),n(e,hr,s),n(e,M,s),a(M,Ml),a(M,Lt),a(Lt,Nl),a(M,Ol),a(M,Wt),a(Wt,Ll),a(M,Wl),n(e,ur,s),c(Qe,e,s),n(e,cr,s),n(e,Bt,s),a(Bt,Bl),n(e,_r,s),c(Ve,e,s),n(e,wr,s),n(e,re,s),a(re,Hl),a(re,Wa),a(Wa,Kl),a(re,Gl),n(e,vr,s),c(et,e,s),n(e,yr,s),n(e,oe,s),a(oe,Ul),a(oe,Ba),a(Ba,Yl),a(oe,Jl),n(e,br,s),c(tt,e,s),n(e,$r,s),n(e,Ht,s),a(Ht,Rl),n(e,gr,s),n(e,ne,s),a(ne,Xl),a(ne,Kt),a(Kt,Zl),a(ne,Ql),n(e,kr,s),c(at,e,s),n(e,Er,s),n(e,Gt,s),n(e,Tr,s),n(e,B,s),a(B,le),a(le,Ha),c(st,Ha,null),a(B,Vl),a(B,Ka),a(Ka,ei),n(e,jr,s),n(e,Ut,s),a(Ut,ti),n(e,Ar,s),n(e,ie,s),a(ie,Ga),a(Ga,Yt),a(Yt,rt),a(rt,ai),a(Yt,si),a(ie,ri),a(ie,Ua),a(Ua,fe),a(fe,Jt),a(Jt,oi),a(fe,ni),a(fe,Ya),a(Ya,li),a(fe,ii),Pr=!0},p:ep,i(e){Pr||(_(_e.$$.fragment,e),_(we.$$.fragment,e),_(ye.$$.fragment,e),_(be.$$.fragment,e),_(ke.$$.fragment,e),_(Ee.$$.fragment,e),_(Te.$$.fragment,e),_(je.$$.fragment,e),_(Pe.$$.fragment,e),_(qe.$$.fragment,e),_(xe.$$.fragment,e),_(ze.$$.fragment,e),_(Fe.$$.fragment,e),_(Ce.$$.fragment,e),_(De.$$.fragment,e),_(Se.$$.fragment,e),_(Ie.$$.fragment,e),_(Me.$$.fragment,e),_(Ne.$$.fragment,e),_(Oe.$$.fragment,e),_(Le.$$.fragment,e),_(We.$$.fragment,e),_(Be.$$.fragment,e),_(He.$$.fragment,e),_(Ke.$$.fragment,e),_(Ge.$$.fragment,e),_(Ue.$$.fragment,e),_(Ye.$$.fragment,e),_(Re.$$.fragment,e),_(Xe.$$.fragment,e),_(Ze.$$.fragment,e),_(Qe.$$.fragment,e),_(Ve.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(at.$$.fragment,e),_(st.$$.fragment,e),Pr=!0)},o(e){w(_e.$$.fragment,e),w(we.$$.fragment,e),w(ye.$$.fragment,e),w(be.$$.fragment,e),w(ke.$$.fragment,e),w(Ee.$$.fragment,e),w(Te.$$.fragment,e),w(je.$$.fragment,e),w(Pe.$$.fragment,e),w(qe.$$.fragment,e),w(xe.$$.fragment,e),w(ze.$$.fragment,e),w(Fe.$$.fragment,e),w(Ce.$$.fragment,e),w(De.$$.fragment,e),w(Se.$$.fragment,e),w(Ie.$$.fragment,e),w(Me.$$.fragment,e),w(Ne.$$.fragment,e),w(Oe.$$.fragment,e),w(Le.$$.fragment,e),w(We.$$.fragment,e),w(Be.$$.fragment,e),w(He.$$.fragment,e),w(Ke.$$.fragment,e),w(Ge.$$.fragment,e),w(Ue.$$.fragment,e),w(Ye.$$.fragment,e),w(Re.$$.fragment,e),w(Xe.$$.fragment,e),w(Ze.$$.fragment,e),w(Qe.$$.fragment,e),w(Ve.$$.fragment,e),w(et.$$.fragment,e),w(tt.$$.fragment,e),w(at.$$.fragment,e),w(st.$$.fragment,e),Pr=!1},d(e){t(x),e&&t(ot),e&&t(g),v(_e),e&&t(Ra),v(we,e),e&&t(Xa),e&&t(z),e&&t(Za),e&&t(F),e&&t(Qa),e&&t(it),e&&t(Va),e&&t(N),v(ye),e&&t(es),v(be,e),e&&t(ts),e&&t(k),e&&t(as),e&&t(K),e&&t(ss),v(ke,e),e&&t(rs),e&&t(C),e&&t(os),e&&t(b),e&&t(ns),e&&t(pt),e&&t(ls),v(Ee,e),e&&t(is),e&&t(G),e&&t(fs),v(Te,e),e&&t(ps),e&&t(dt),e&&t(ms),e&&t(U),e&&t(ds),v(je,e),e&&t(hs),e&&t(Y),e&&t(us),e&&t(ht),e&&t(cs),v(Pe,e),e&&t(_s),e&&t(E),e&&t(ws),e&&t(ut),e&&t(vs),e&&t(O),v(qe),e&&t(ys),v(xe,e),e&&t(bs),e&&t(R),e&&t($s),e&&t(_t),e&&t(gs),v(ze,e),e&&t(ks),e&&t(wt),e&&t(Es),e&&t(T),e&&t(Ts),v(Fe,e),e&&t(js),e&&t(X),e&&t(As),v(Ce,e),e&&t(Ps),e&&t(gt),e&&t(qs),v(De,e),e&&t(xs),e&&t(Z),e&&t(zs),e&&t(j),e&&t(Fs),e&&t(A),e&&t(Cs),v(Se,e),e&&t(Ds),e&&t(jt),e&&t(Ss),e&&t(Q),e&&t(Is),v(Ie,e),e&&t(Ms),e&&t(Pt),e&&t(Ns),e&&t(qt),e&&t(Os),v(Me,e),e&&t(Ls),e&&t(V),e&&t(Ws),e&&t(zt),e&&t(Bs),e&&t(L),v(Ne),e&&t(Hs),v(Oe,e),e&&t(Ks),e&&t(Ft),e&&t(Gs),v(Le,e),e&&t(Us),e&&t(D),e&&t(Ys),v(We,e),e&&t(Js),e&&t(te),e&&t(Rs),v(Be,e),e&&t(Xs),e&&t(Ct),e&&t(Zs),v(He,e),e&&t(Qs),e&&t(Dt),e&&t(Vs),v(Ke,e),e&&t(er),e&&t(St),e&&t(tr),e&&t(W),v(Ge),e&&t(ar),v(Ue,e),e&&t(sr),e&&t(It),e&&t(rr),v(Ye,e),e&&t(or),e&&t(S),e&&t(nr),e&&t(I),e&&t(lr),e&&t(se),e&&t(ir),v(Re,e),e&&t(fr),e&&t(Nt),e&&t(pr),v(Xe,e),e&&t(mr),e&&t(Ot),e&&t(dr),v(Ze,e),e&&t(hr),e&&t(M),e&&t(ur),v(Qe,e),e&&t(cr),e&&t(Bt),e&&t(_r),v(Ve,e),e&&t(wr),e&&t(re),e&&t(vr),v(et,e),e&&t(yr),e&&t(oe),e&&t(br),v(tt,e),e&&t($r),e&&t(Ht),e&&t(gr),e&&t(ne),e&&t(kr),v(at,e),e&&t(Er),e&&t(Gt),e&&t(Tr),e&&t(B),v(st),e&&t(jr),e&&t(Ut),e&&t(Ar),e&&t(ie)}}}const sp={local:"finetuning-a-pretrained-model",sections:[{local:"preparing-the-datasets",title:"Preparing the datasets"},{local:"finetuning-in-pytorch-with-the-trainer-api",title:"Fine-tuning in PyTorch with the Trainer API"},{local:"finetuning-with-keras",title:"Fine-tuning with Keras"},{local:"finetuning-in-native-pytorch",title:"Fine-tuning in native PyTorch"},{local:"additional-resources",title:"Additional resources"}],title:"Fine-tuning a pretrained model"};function rp(Qr,x,ot){let{fw:g}=x;return Qr.$$set=P=>{"fw"in P&&ot(0,g=P.fw)},[g]}class mp extends Xf{constructor(x){super();Zf(this,x,rp,ap,Qf,{fw:0})}}export{mp as default,sp as metadata};
