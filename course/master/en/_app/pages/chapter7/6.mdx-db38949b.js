import{S as Qr,i as ei,s as ti,e as c,t as o,k as d,w as j,c as h,a as u,h as l,d as t,m,x,g as r,F as s,y as q,q as w,o as b,B as E,b as I,l as Yo,M as si,N as ai,p as ga,v as ni,O as oi,n as wa}from"../../chunks/vendor-e7c81d8a.js";import{T as ba}from"../../chunks/Tip-989931f5.js";import{Y as Pl}from"../../chunks/Youtube-365ea064.js";import{I as Sn}from"../../chunks/WidgetTextarea.svelte_svelte_type_style_lang-08e92eaf.js";import{C as D}from"../../chunks/CodeBlock-105940ae.js";import{D as Jr}from"../../chunks/DocNotebookDropdown-928568b4.js";import{I as li}from"../../chunks/InferenceWidget-88fba1ff.js";import{F as ri}from"../../chunks/FrameworkSwitch-287292d8.js";const{document:Vr}=oi;function ii(C){let n,f;return n=new Jr({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section6_tf.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function pi(C){let n,f;return n=new Jr({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section6_pt.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ci(C){let n,f;return{c(){n=c("p"),f=o("Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!"),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function hi(C){let n,f,i,_,$,k,v,T,z,A,L,N,g,P;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=c("code"),v=o("eos_token_id"),T=o(" token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=c("code"),A=o("tokenize()"),L=o(" function to make use of that approach. Note that you\u2019ll want to set "),N=c("code"),g=o("truncation=False"),P=o(" and remove the other arguments from the tokenizer to get the full sequence of token IDs.")},l(W){n=h(W,"P",{});var M=u(n);f=l(M,"\u270F\uFE0F "),i=h(M,"STRONG",{});var G=u(i);_=l(G,"Try it out!"),G.forEach(t),$=l(M," Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=h(M,"CODE",{});var R=u(k);v=l(R,"eos_token_id"),R.forEach(t),T=l(M," token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=h(M,"CODE",{});var Y=u(z);A=l(Y,"tokenize()"),Y.forEach(t),L=l(M," function to make use of that approach. Note that you\u2019ll want to set "),N=h(M,"CODE",{});var F=u(N);g=l(F,"truncation=False"),F.forEach(t),P=l(M," and remove the other arguments from the tokenizer to get the full sequence of token IDs."),M.forEach(t)},m(W,M){r(W,n,M),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,A),s(n,L),s(n,N),s(N,g),s(n,P)},d(W){W&&t(n)}}}function ui(C){let n,f,i,_,$,k,v,T,z,A,L,N;return n=new D({props:{codee:`from transformers import AutoTokenizer, TFGPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    "gpt2",
    vocab_size=len(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    <span class="hljs-string">&quot;gpt2&quot;</span>,
    vocab_size=<span class="hljs-built_in">len</span>(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
)`}}),z=new D({props:{codee:`model = TFGPT2LMHeadModel(config)
model(model.dummy_inputs)  # Builds the model
model.summary(),`,highlighted:`model = TFGPT2LMHeadModel(config)
model(model.dummy_inputs)  <span class="hljs-comment"># Builds the model</span>
model.summary()`}}),L=new D({props:{codee:`_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
transformer (TFGPT2MainLayer multiple                  124242432 
=================================================================
Total params: 124,242,432
Trainable params: 124,242,432
Non-trainable params: 0
_________________________________________________________________,`,highlighted:`_________________________________________________________________
Layer (<span class="hljs-built_in">type</span>)                 Output Shape              Param <span class="hljs-comment">#   </span>
=================================================================
transformer (TFGPT2MainLayer multiple                  <span class="hljs-number">124242432</span> 
=================================================================
Total params: <span class="hljs-number">124</span>,<span class="hljs-number">242</span>,<span class="hljs-number">432</span>
Trainable params: <span class="hljs-number">124</span>,<span class="hljs-number">242</span>,<span class="hljs-number">432</span>
Non-trainable params: <span class="hljs-number">0</span>
_________________________________________________________________`}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),A=d(),j(L.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var W=u($);k=l(W,"from_pretrained()"),W.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),A=m(g),x(L.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,A,P),q(L,g,P),N=!0},i(g){N||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(L.$$.fragment,g),N=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(L.$$.fragment,g),N=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(A),E(L,g)}}}function di(C){let n,f,i,_,$,k,v,T,z,A,L,N;return n=new D({props:{codee:`from transformers import AutoTokenizer, GPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    "gpt2",
    vocab_size=len(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    <span class="hljs-string">&quot;gpt2&quot;</span>,
    vocab_size=<span class="hljs-built_in">len</span>(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
)`}}),z=new D({props:{codee:`model = GPT2LMHeadModel(config)
model_size = sum(t.numel() for t in model.parameters())
print(f"GPT-2 size: {model_size/1000**2:.1f}M parameters"),`,highlighted:`model = GPT2LMHeadModel(config)
model_size = <span class="hljs-built_in">sum</span>(t.numel() <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> model.parameters())
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;GPT-2 size: <span class="hljs-subst">{model_size/<span class="hljs-number">1000</span>**<span class="hljs-number">2</span>:<span class="hljs-number">.1</span>f}</span>M parameters&quot;</span>)`}}),L=new D({props:{codee:"GPT-2 size: 124.2M parameters,",highlighted:'GPT-<span class="hljs-number">2</span> size: <span class="hljs-number">124.2</span>M parameters'}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),A=d(),j(L.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var W=u($);k=l(W,"from_pretrained()"),W.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),A=m(g),x(L.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,A,P),q(L,g,P),N=!0},i(g){N||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(L.$$.fragment,g),N=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(L.$$.fragment,g),N=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(A),E(L,g)}}}function mi(C){let n,f;return n=new D({props:{codee:`from transformers import DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False, return_tensors="tf"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function fi(C){let n,f;return n=new D({props:{codee:`from transformers import DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=<span class="hljs-literal">False</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function _i(C){let n,f;return n=new D({props:{codee:`input_ids shape: (5, 128)
attention_mask shape: (5, 128)
labels shape: (5, 128),`,highlighted:`input_ids shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)
attention_mask shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)
labels shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function gi(C){let n,f;return n=new D({props:{codee:`input_ids shape: torch.Size([5, 128])
attention_mask shape: torch.Size([5, 128])
labels shape: torch.Size([5, 128]),`,highlighted:`input_ids shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])
attention_mask shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])
labels shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function Kr(C){let n,f,i,_,$,k,v,T;return v=new D({props:{codee:`tf_train_dataset = tokenized_dataset["train"].to_tf_dataset(
    columns=["input_ids", "attention_mask", "labels"],
    collate_fn=data_collator,
    shuffle=True,
    batch_size=32,
)
tf_eval_dataset = tokenized_dataset["valid"].to_tf_dataset(
    columns=["input_ids", "attention_mask", "labels"],
    collate_fn=data_collator,
    shuffle=False,
    batch_size=32,
),`,highlighted:`tf_train_dataset = tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">32</span>,
)
tf_eval_dataset = tokenized_dataset[<span class="hljs-string">&quot;valid&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">32</span>,
)`}}),{c(){n=c("p"),f=o("Now we can use the "),i=c("code"),_=o("to_tf_dataset()"),$=o(" method to convert our datasets to TensorFlow datasets with the data collator we created above:"),k=d(),j(v.$$.fragment)},l(z){n=h(z,"P",{});var A=u(n);f=l(A,"Now we can use the "),i=h(A,"CODE",{});var L=u(i);_=l(L,"to_tf_dataset()"),L.forEach(t),$=l(A," method to convert our datasets to TensorFlow datasets with the data collator we created above:"),A.forEach(t),k=m(z),x(v.$$.fragment,z)},m(z,A){r(z,n,A),s(n,f),s(n,i),s(i,_),s(n,$),r(z,k,A),q(v,z,A),T=!0},i(z){T||(w(v.$$.fragment,z),T=!0)},o(z){b(v.$$.fragment,z),T=!1},d(z){z&&t(n),z&&t(k),E(v,z)}}}function wi(C){let n,f;return{c(){n=c("p"),f=o("\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function bi(C){let n,f,i,_,$,k,v,T,z,A,L,N,g,P,W,M,G,R,Y;return A=new D({props:{codee:`from transformers import create_optimizer
import tensorflow as tf

num_train_steps = len(tf_train_dataset)
optimizer, schedule = create_optimizer(
    init_lr=5e-5,
    num_warmup_steps=1_000,
    num_train_steps=num_train_steps,
    weight_decay_rate=0.01,
)
model.compile(optimizer=optimizer)

# Train in mixed-precision float16
tf.keras.mixed_precision.set_global_policy("mixed_float16"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

num_train_steps = <span class="hljs-built_in">len</span>(tf_train_dataset)
optimizer, schedule = create_optimizer(
    init_lr=<span class="hljs-number">5e-5</span>,
    num_warmup_steps=<span class="hljs-number">1_000</span>,
    num_train_steps=num_train_steps,
    weight_decay_rate=<span class="hljs-number">0.01</span>,
)
model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)

<span class="hljs-comment"># Train in mixed-precision float16</span>
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),R=new D({props:{codee:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="codeparrot-ds", tokenizer=tokenizer)

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback]),`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;codeparrot-ds&quot;</span>, tokenizer=tokenizer)

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])`}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training hyperparameters and call "),i=c("code"),_=o("compile()"),$=o(" and "),k=c("code"),v=o("fit()"),T=o(". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),z=d(),j(A.$$.fragment),L=d(),N=c("p"),g=o("Now we can just call "),P=c("code"),W=o("model.fit()"),M=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),G=d(),j(R.$$.fragment)},l(F){n=h(F,"P",{});var H=u(n);f=l(H,"All that\u2019s left to do is configure the training hyperparameters and call "),i=h(H,"CODE",{});var S=u(i);_=l(S,"compile()"),S.forEach(t),$=l(H," and "),k=h(H,"CODE",{});var V=u(k);v=l(V,"fit()"),V.forEach(t),T=l(H,". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),H.forEach(t),z=m(F),x(A.$$.fragment,F),L=m(F),N=h(F,"P",{});var K=u(N);g=l(K,"Now we can just call "),P=h(K,"CODE",{});var B=u(P);W=l(B,"model.fit()"),B.forEach(t),M=l(K," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),K.forEach(t),G=m(F),x(R.$$.fragment,F)},m(F,H){r(F,n,H),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),r(F,z,H),q(A,F,H),r(F,L,H),r(F,N,H),s(N,g),s(N,P),s(P,W),s(N,M),r(F,G,H),q(R,F,H),Y=!0},i(F){Y||(w(A.$$.fragment,F),w(R.$$.fragment,F),Y=!0)},o(F){b(A.$$.fragment,F),b(R.$$.fragment,F),Y=!1},d(F){F&&t(n),F&&t(z),E(A,F),F&&t(L),F&&t(N),F&&t(G),E(R,F)}}}function ki(C){let n,f,i,_,$,k,v,T,z,A,L,N,g,P,W,M,G,R,Y,F,H,S,V,K,B,Q,te;return g=new D({props:{codee:`from transformers import Trainer, TrainingArguments

args = TrainingArguments(
    output_dir="codeparrot-ds",
    per_device_train_batch_size=32,
    per_device_eval_batch_size=32,
    evaluation_strategy="steps",
    eval_steps=5_000,
    logging_steps=5_000,
    gradient_accumulation_steps=8,
    num_train_epochs=1,
    weight_decay=0.1,
    warmup_steps=1_000,
    lr_scheduler_type="cosine",
    learning_rate=5e-4,
    save_steps=5_000,
    fp16=True,
    push_to_hub=True,
)

trainer = Trainer(
    model=model,
    tokenizer=tokenizer,
    args=args,
    data_collator=data_collator,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["valid"],
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer, TrainingArguments

args = TrainingArguments(
    output_dir=<span class="hljs-string">&quot;codeparrot-ds&quot;</span>,
    per_device_train_batch_size=<span class="hljs-number">32</span>,
    per_device_eval_batch_size=<span class="hljs-number">32</span>,
    evaluation_strategy=<span class="hljs-string">&quot;steps&quot;</span>,
    eval_steps=<span class="hljs-number">5_000</span>,
    logging_steps=<span class="hljs-number">5_000</span>,
    gradient_accumulation_steps=<span class="hljs-number">8</span>,
    num_train_epochs=<span class="hljs-number">1</span>,
    weight_decay=<span class="hljs-number">0.1</span>,
    warmup_steps=<span class="hljs-number">1_000</span>,
    lr_scheduler_type=<span class="hljs-string">&quot;cosine&quot;</span>,
    learning_rate=<span class="hljs-number">5e-4</span>,
    save_steps=<span class="hljs-number">5_000</span>,
    fp16=<span class="hljs-literal">True</span>,
    push_to_hub=<span class="hljs-literal">True</span>,
)

trainer = Trainer(
    model=model,
    tokenizer=tokenizer,
    args=args,
    data_collator=data_collator,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;valid&quot;</span>],
)`}}),H=new D({props:{codee:"trainer.train(),",highlighted:"trainer.train()"}}),Q=new D({props:{codee:"trainer.push_to_hub(),",highlighted:"trainer.push_to_hub()"}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training arguments and fire up the "),i=c("code"),_=o("Trainer"),$=o(". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=c("code"),v=o("per_device_train_batch_size"),T=o(" * "),z=c("code"),A=o("gradient_accumulation_steps"),L=o("). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),N=d(),j(g.$$.fragment),P=d(),W=c("p"),M=o("Now we can just start the "),G=c("code"),R=o("Trainer"),Y=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),F=d(),j(H.$$.fragment),S=d(),V=c("p"),K=o("After training completes, we can push the model and tokenizer to the Hub:"),B=d(),j(Q.$$.fragment)},l(O){n=h(O,"P",{});var U=u(n);f=l(U,"All that\u2019s left to do is configure the training arguments and fire up the "),i=h(U,"CODE",{});var Re=u(i);_=l(Re,"Trainer"),Re.forEach(t),$=l(U,". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=h(U,"CODE",{});var Be=u(k);v=l(Be,"per_device_train_batch_size"),Be.forEach(t),T=l(U," * "),z=h(U,"CODE",{});var Ot=u(z);A=l(Ot,"gradient_accumulation_steps"),Ot.forEach(t),L=l(U,"). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),U.forEach(t),N=m(O),x(g.$$.fragment,O),P=m(O),W=h(O,"P",{});var _e=u(W);M=l(_e,"Now we can just start the "),G=h(_e,"CODE",{});var Ue=u(G);R=l(Ue,"Trainer"),Ue.forEach(t),Y=l(_e," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),_e.forEach(t),F=m(O),x(H.$$.fragment,O),S=m(O),V=h(O,"P",{});var Ft=u(V);K=l(Ft,"After training completes, we can push the model and tokenizer to the Hub:"),Ft.forEach(t),B=m(O),x(Q.$$.fragment,O)},m(O,U){r(O,n,U),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,A),s(n,L),r(O,N,U),q(g,O,U),r(O,P,U),r(O,W,U),s(W,M),s(W,G),s(G,R),s(W,Y),r(O,F,U),q(H,O,U),r(O,S,U),r(O,V,U),s(V,K),r(O,B,U),q(Q,O,U),te=!0},i(O){te||(w(g.$$.fragment,O),w(H.$$.fragment,O),w(Q.$$.fragment,O),te=!0)},o(O){b(g.$$.fragment,O),b(H.$$.fragment,O),b(Q.$$.fragment,O),te=!1},d(O){O&&t(n),O&&t(N),E(g,O),O&&t(P),O&&t(W),O&&t(F),E(H,O),O&&t(S),O&&t(V),O&&t(B),E(Q,O)}}}function yi(C){let n,f,i,_,$,k,v,T;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" It only took us about 30 lines of code in addition to the "),k=c("code"),v=o("TrainingArguments"),T=o(" to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!")},l(z){n=h(z,"P",{});var A=u(n);f=l(A,"\u270F\uFE0F "),i=h(A,"STRONG",{});var L=u(i);_=l(L,"Try it out!"),L.forEach(t),$=l(A," It only took us about 30 lines of code in addition to the "),k=h(A,"CODE",{});var N=u(k);v=l(N,"TrainingArguments"),N.forEach(t),T=l(A," to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!"),A.forEach(t)},m(z,A){r(z,n,A),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T)},d(z){z&&t(n)}}}function $i(C){let n,f,i,_,$,k,v,T,z,A,L,N,g,P,W,M,G,R,Y,F;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=c("code"),_=o("MirroredStrategy"),$=o(" context to substantially speed up training. You\u2019ll need to create a "),k=c("code"),v=o("tf.distribute.MirroredStrategy"),T=o(" object, and make sure that the "),z=c("code"),A=o("to_tf_dataset"),L=o(" commands as well as model creation and the call to "),N=c("code"),g=o("fit()"),P=o(" are all run in its "),W=c("code"),M=o("scope()"),G=o(" context. You can see documentation on this "),R=c("a"),Y=o("here"),F=o("."),this.h()},l(H){n=h(H,"P",{});var S=u(n);f=l(S,"\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=h(S,"CODE",{});var V=u(i);_=l(V,"MirroredStrategy"),V.forEach(t),$=l(S," context to substantially speed up training. You\u2019ll need to create a "),k=h(S,"CODE",{});var K=u(k);v=l(K,"tf.distribute.MirroredStrategy"),K.forEach(t),T=l(S," object, and make sure that the "),z=h(S,"CODE",{});var B=u(z);A=l(B,"to_tf_dataset"),B.forEach(t),L=l(S," commands as well as model creation and the call to "),N=h(S,"CODE",{});var Q=u(N);g=l(Q,"fit()"),Q.forEach(t),P=l(S," are all run in its "),W=h(S,"CODE",{});var te=u(W);M=l(te,"scope()"),te.forEach(t),G=l(S," context. You can see documentation on this "),R=h(S,"A",{href:!0,rel:!0});var O=u(R);Y=l(O,"here"),O.forEach(t),F=l(S,"."),S.forEach(t),this.h()},h(){I(R,"href","https://www.tensorflow.org/guide/distributed_training#use_tfdistributestrategy_with_keras_modelfit"),I(R,"rel","nofollow")},m(H,S){r(H,n,S),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,A),s(n,L),s(n,N),s(N,g),s(n,P),s(n,W),s(W,M),s(n,G),s(n,R),s(R,Y),s(n,F)},d(H){H&&t(n)}}}function vi(C){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=c("code"),_=o("Trainer"),$=o(" automatically manages multiple machines, and this can speed up training tremendously.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," automatically manages multiple machines, and this can speed up training tremendously."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function ji(C){let n;function f($,k){return $[0]==="pt"?vi:$i}let i=f(C),_=i(C);return{c(){_.c(),n=Yo()},l($){_.l($),n=Yo()},m($,k){_.m($,k),r($,n,k)},p($,k){i!==(i=f($))&&(_.d(1),_=i($),_&&(_.c(),_.m(n.parentNode,n)))},d($){_.d($),$&&t(n)}}}function xi(C){let n,f;return n=new D({props:{codee:`from transformers import pipeline

course_model = TFGPT2LMHeadModel.from_pretrained("huggingface-course/codeparrot-ds")
course_tokenizer = AutoTokenizer.from_pretrained("huggingface-course/codeparrot-ds")
pipe = pipeline(
    "text-generation", model=course_model, tokenizer=course_tokenizer, device=0
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

course_model = TFGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>)
course_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>)
pipe = pipeline(
    <span class="hljs-string">&quot;text-generation&quot;</span>, model=course_model, tokenizer=course_tokenizer, device=<span class="hljs-number">0</span>
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function qi(C){let n,f;return n=new D({props:{codee:`import torch
from transformers import pipeline

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
pipe = pipeline(
    "text-generation", model="huggingface-course/codeparrot-ds", device=device
),`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
pipe = pipeline(
    <span class="hljs-string">&quot;text-generation&quot;</span>, model=<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>, device=device
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function Ei(C){let n,f,i,_,$;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=c("code"),_=o("Trainer"),$=o(" and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function zi(C){let n,f;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function Zr(C){let n,f,i,_,$,k,v,T,z,A,L,N,g,P,W,M,G,R,Y,F,H,S,V,K,B,Q,te,O,U,Re,Be,Ot,_e,Ue,Ft,ns,os,ka,xs,Ee,qs,ge,Es,we,zs,lt,Lt,Nt,ya,ls,ce,rt,be,Ts,ze,ke,Te,$a,va,Wt,Pe,Ye,it,pt,Ps,ae,ja,It,ne,xa,De,qa,Ea,Gt,ct,Ds,ye,za,Cs,Xe,Ce,Mt,rs,As,ht,is,ee,Os,Ve,Ta,Fs,$e,Ls,ut,ps,ve,Ns,dt,mt,cs,je,Ws,ft,_t,hs,he,us,xe,Is,ue,Ht,ds,Gs,gt,St,wt,Ms,Ae,Ke,bt,oe,Hs,Oe,Ss,kt,Rt,Ze,Pa,yt,Da,Ca,ms,se,Fe,Le,Je,Bt,fs,Rs,Qe,et,de,Ut,_s,Bs,le,gs,ws,Aa,Us,Ne,Oa,Ys,We,Xs,$t,bs,re,Yt,Vs,Ks,Xt,Zs,tt,st,vt,jt,ks,ie,Js,Ie,Qs;return _=new Sn({}),W=new Pl({props:{id:"Hm8_PgVTFuc"}}),we=new D({props:{codee:`keytoken_ids = []
for keyword in [
    "plt",
    "pd",
    "sk",
    "fit",
    "predict",
    " plt",
    " pd",
    " sk",
    " fit",
    " predict",
    "testtest",
]:
    ids = tokenizer([keyword]).input_ids[0]
    if len(ids) == 1:
        keytoken_ids.append(ids[0])
    else:
        print(f"Keyword has not single token: {keyword}"),`,highlighted:`keytoken_ids = []
<span class="hljs-keyword">for</span> keyword <span class="hljs-keyword">in</span> [
    <span class="hljs-string">&quot;plt&quot;</span>,
    <span class="hljs-string">&quot;pd&quot;</span>,
    <span class="hljs-string">&quot;sk&quot;</span>,
    <span class="hljs-string">&quot;fit&quot;</span>,
    <span class="hljs-string">&quot;predict&quot;</span>,
    <span class="hljs-string">&quot; plt&quot;</span>,
    <span class="hljs-string">&quot; pd&quot;</span>,
    <span class="hljs-string">&quot; sk&quot;</span>,
    <span class="hljs-string">&quot; fit&quot;</span>,
    <span class="hljs-string">&quot; predict&quot;</span>,
    <span class="hljs-string">&quot;testtest&quot;</span>,
]:
    ids = tokenizer([keyword]).input_ids[<span class="hljs-number">0</span>]
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(ids) == <span class="hljs-number">1</span>:
        keytoken_ids.append(ids[<span class="hljs-number">0</span>])
    <span class="hljs-keyword">else</span>:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Keyword has not single token: <span class="hljs-subst">{keyword}</span>&quot;</span>)`}}),lt=new D({props:{codee:"'Keyword has not single token: testtest',",highlighted:'<span class="hljs-string">&#x27;Keyword has not single token: testtest&#x27;</span>'}}),ce=new D({props:{codee:`from torch.nn import CrossEntropyLoss
import torch


def keytoken_weighted_loss(inputs, logits, keytoken_ids, alpha=1.0):
    # Shift so that tokens < n predict n
    shift_labels = inputs[..., 1:].contiguous()
    shift_logits = logits[..., :-1, :].contiguous()
    # Calculate per-token loss
    loss_fct = CrossEntropyLoss(reduce=False)
    loss = loss_fct(shift_logits.view(-1, shift_logits.size(-1)), shift_labels.view(-1))
    # Resize and average loss per sample
    loss_per_sample = loss.view(shift_logits.size(0), shift_logits.size(1)).mean(axis=1)
    # Calculate and scale weighting
    weights = torch.stack([(inputs == kt).float() for kt in keytoken_ids]).sum(
        axis=[0, 2]
    )
    weights = alpha * (1.0 + weights)
    # Calculate weighted average
    weighted_loss = (loss_per_sample * weights).mean()
    return weighted_loss,`,highlighted:`<span class="hljs-keyword">from</span> torch.nn <span class="hljs-keyword">import</span> CrossEntropyLoss
<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">def</span> <span class="hljs-title function_">keytoken_weighted_loss</span>(<span class="hljs-params">inputs, logits, keytoken_ids, alpha=<span class="hljs-number">1.0</span></span>):
    <span class="hljs-comment"># Shift so that tokens &lt; n predict n</span>
    shift_labels = inputs[..., <span class="hljs-number">1</span>:].contiguous()
    shift_logits = logits[..., :-<span class="hljs-number">1</span>, :].contiguous()
    <span class="hljs-comment"># Calculate per-token loss</span>
    loss_fct = CrossEntropyLoss(reduce=<span class="hljs-literal">False</span>)
    loss = loss_fct(shift_logits.view(-<span class="hljs-number">1</span>, shift_logits.size(-<span class="hljs-number">1</span>)), shift_labels.view(-<span class="hljs-number">1</span>))
    <span class="hljs-comment"># Resize and average loss per sample</span>
    loss_per_sample = loss.view(shift_logits.size(<span class="hljs-number">0</span>), shift_logits.size(<span class="hljs-number">1</span>)).mean(axis=<span class="hljs-number">1</span>)
    <span class="hljs-comment"># Calculate and scale weighting</span>
    weights = torch.stack([(inputs == kt).<span class="hljs-built_in">float</span>() <span class="hljs-keyword">for</span> kt <span class="hljs-keyword">in</span> keytoken_ids]).<span class="hljs-built_in">sum</span>(
        axis=[<span class="hljs-number">0</span>, <span class="hljs-number">2</span>]
    )
    weights = alpha * (<span class="hljs-number">1.0</span> + weights)
    <span class="hljs-comment"># Calculate weighted average</span>
    weighted_loss = (loss_per_sample * weights).mean()
    <span class="hljs-keyword">return</span> weighted_loss`}}),ct=new D({props:{codee:`from torch.utils.data.dataloader import DataLoader

tokenized_dataset.set_format("torch")
train_dataloader = DataLoader(tokenized_dataset["train"], batch_size=32, shuffle=True)
eval_dataloader = DataLoader(tokenized_dataset["valid"], batch_size=32),`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data.dataloader <span class="hljs-keyword">import</span> DataLoader

tokenized_dataset.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
train_dataloader = DataLoader(tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>], batch_size=<span class="hljs-number">32</span>, shuffle=<span class="hljs-literal">True</span>)
eval_dataloader = DataLoader(tokenized_dataset[<span class="hljs-string">&quot;valid&quot;</span>], batch_size=<span class="hljs-number">32</span>)`}}),Xe=new D({props:{codee:`weight_decay = 0.1


def get_grouped_params(model, no_decay=["bias", "LayerNorm.weight"]):
    params_with_wd, params_without_wd = [], []
    for n, p in model.named_parameters():
        if any(nd in n for nd in no_decay):
            params_without_wd.append(p)
        else:
            params_with_wd.append(p)
    return [
        {"params": params_with_wd, "weight_decay": weight_decay},
        {"params": params_without_wd, "weight_decay": 0.0},
    ],`,highlighted:`weight_decay = <span class="hljs-number">0.1</span>


<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_grouped_params</span>(<span class="hljs-params">model, no_decay=[<span class="hljs-string">&quot;bias&quot;</span>, <span class="hljs-string">&quot;LayerNorm.weight&quot;</span>]</span>):
    params_with_wd, params_without_wd = [], []
    <span class="hljs-keyword">for</span> n, p <span class="hljs-keyword">in</span> model.named_parameters():
        <span class="hljs-keyword">if</span> <span class="hljs-built_in">any</span>(nd <span class="hljs-keyword">in</span> n <span class="hljs-keyword">for</span> nd <span class="hljs-keyword">in</span> no_decay):
            params_without_wd.append(p)
        <span class="hljs-keyword">else</span>:
            params_with_wd.append(p)
    <span class="hljs-keyword">return</span> [
        {<span class="hljs-string">&quot;params&quot;</span>: params_with_wd, <span class="hljs-string">&quot;weight_decay&quot;</span>: weight_decay},
        {<span class="hljs-string">&quot;params&quot;</span>: params_without_wd, <span class="hljs-string">&quot;weight_decay&quot;</span>: <span class="hljs-number">0.0</span>},
    ]`}}),ht=new D({props:{codee:`def evaluate():
    model.eval()
    losses = []
    for step, batch in enumerate(eval_dataloader):
        with torch.no_grad():
            outputs = model(batch["input_ids"], labels=batch["input_ids"])

        losses.append(accelerator.gather(outputs.loss))
    loss = torch.mean(torch.cat(losses))
    try:
        perplexity = torch.exp(loss)
    except OverflowError:
        perplexity = float("inf")
    return loss.item(), perplexity.item(),`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">evaluate</span>():
    model.<span class="hljs-built_in">eval</span>()
    losses = []
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(eval_dataloader):
        <span class="hljs-keyword">with</span> torch.no_grad():
            outputs = model(batch[<span class="hljs-string">&quot;input_ids&quot;</span>], labels=batch[<span class="hljs-string">&quot;input_ids&quot;</span>])

        losses.append(accelerator.gather(outputs.loss))
    loss = torch.mean(torch.cat(losses))
    <span class="hljs-keyword">try</span>:
        perplexity = torch.exp(loss)
    <span class="hljs-keyword">except</span> OverflowError:
        perplexity = <span class="hljs-built_in">float</span>(<span class="hljs-string">&quot;inf&quot;</span>)
    <span class="hljs-keyword">return</span> loss.item(), perplexity.item()`}}),ve=new D({props:{codee:"model = GPT2LMHeadModel(config),",highlighted:"model = GPT2LMHeadModel(config)"}}),je=new D({props:{codee:`from torch.optim import AdamW

optimizer = AdamW(get_grouped_params(model), lr=5e-4),`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(get_grouped_params(model), lr=<span class="hljs-number">5e-4</span>)`}}),he=new D({props:{codee:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
),`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),xe=new ba({props:{$$slots:{default:[Ti]},$$scope:{ctx:C}}}),Ke=new D({props:{codee:`num_train_epochs = 1
num_update_steps_per_epoch = len(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    name="linear",
    optimizer=optimizer,
    num_warmup_steps=1_000,
    num_training_steps=num_training_steps,
),`,highlighted:`num_train_epochs = <span class="hljs-number">1</span>
num_update_steps_per_epoch = <span class="hljs-built_in">len</span>(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    name=<span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">1_000</span>,
    num_training_steps=num_training_steps,
)`}}),se=new D({props:{codee:`from huggingface_hub import Repository, get_full_repo_name

model_name = "codeparrot-ds-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name,`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),Le=new D({props:{codee:"'sgugger/codeparrot-ds-accelerate',",highlighted:'<span class="hljs-string">&#x27;sgugger/codeparrot-ds-accelerate&#x27;</span>'}}),Qe=new D({props:{codee:`output_dir = "codeparrot-ds-accelerate"
repo = Repository(output_dir, clone_from=repo_name),`,highlighted:`output_dir = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),We=new D({props:{codee:"evaluate(),",highlighted:"evaluate()"}}),$t=new D({props:{codee:"(10.934126853942871, 56057.14453125),",highlighted:'(<span class="hljs-number">10.934126853942871</span>, <span class="hljs-number">56057.14453125</span>)'}}),tt=new D({props:{codee:`from tqdm.notebook import tqdm

gradient_accumulation_steps = 8
eval_steps = 5_000

model.train()
completed_steps = 0
for epoch in range(num_train_epochs):
    for step, batch in tqdm(
        enumerate(train_dataloader, start=1), total=len(train_dataloader)
    ):
        logits = model(batch["input_ids"]).logits
        loss = keytoken_weighted_loss(batch["input_ids"], logits, keytoken_ids)
        if step % 100 == 0:
            accelerator.print(
                {
                    "lr": get_lr(),
                    "samples": step * samples_per_step,
                    "steps": completed_steps,
                    "loss/train": loss.item() * gradient_accumulation_steps,
                }
            )
        loss = loss / gradient_accumulation_steps
        accelerator.backward(loss)
        if step % gradient_accumulation_steps == 0:
            accelerator.clip_grad_norm_(model.parameters(), 1.0)
            optimizer.step()
            lr_scheduler.step()
            optimizer.zero_grad()
            completed_steps += 1
        if (step % (eval_steps * gradient_accumulation_steps)) == 0:
            eval_loss, perplexity = evaluate()
            accelerator.print({"loss/eval": eval_loss, "perplexity": perplexity})
            model.train()
            accelerator.wait_for_everyone()
            unwrapped_model = accelerator.unwrap_model(model)
            unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)
            if accelerator.is_main_process:
                tokenizer.save_pretrained(output_dir)
                repo.push_to_hub(
                    commit_message=f"Training in progress step {step}", blocking=False
                ),`,highlighted:`<span class="hljs-keyword">from</span> tqdm.notebook <span class="hljs-keyword">import</span> tqdm

gradient_accumulation_steps = <span class="hljs-number">8</span>
eval_steps = <span class="hljs-number">5_000</span>

model.train()
completed_steps = <span class="hljs-number">0</span>
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_train_epochs):
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> tqdm(
        <span class="hljs-built_in">enumerate</span>(train_dataloader, start=<span class="hljs-number">1</span>), total=<span class="hljs-built_in">len</span>(train_dataloader)
    ):
        logits = model(batch[<span class="hljs-string">&quot;input_ids&quot;</span>]).logits
        loss = keytoken_weighted_loss(batch[<span class="hljs-string">&quot;input_ids&quot;</span>], logits, keytoken_ids)
        <span class="hljs-keyword">if</span> step % <span class="hljs-number">100</span> == <span class="hljs-number">0</span>:
            accelerator.<span class="hljs-built_in">print</span>(
                {
                    <span class="hljs-string">&quot;lr&quot;</span>: get_lr(),
                    <span class="hljs-string">&quot;samples&quot;</span>: step * samples_per_step,
                    <span class="hljs-string">&quot;steps&quot;</span>: completed_steps,
                    <span class="hljs-string">&quot;loss/train&quot;</span>: loss.item() * gradient_accumulation_steps,
                }
            )
        loss = loss / gradient_accumulation_steps
        accelerator.backward(loss)
        <span class="hljs-keyword">if</span> step % gradient_accumulation_steps == <span class="hljs-number">0</span>:
            accelerator.clip_grad_norm_(model.parameters(), <span class="hljs-number">1.0</span>)
            optimizer.step()
            lr_scheduler.step()
            optimizer.zero_grad()
            completed_steps += <span class="hljs-number">1</span>
        <span class="hljs-keyword">if</span> (step % (eval_steps * gradient_accumulation_steps)) == <span class="hljs-number">0</span>:
            eval_loss, perplexity = evaluate()
            accelerator.<span class="hljs-built_in">print</span>({<span class="hljs-string">&quot;loss/eval&quot;</span>: eval_loss, <span class="hljs-string">&quot;perplexity&quot;</span>: perplexity})
            model.train()
            accelerator.wait_for_everyone()
            unwrapped_model = accelerator.unwrap_model(model)
            unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)
            <span class="hljs-keyword">if</span> accelerator.is_main_process:
                tokenizer.save_pretrained(output_dir)
                repo.push_to_hub(
                    commit_message=<span class="hljs-string">f&quot;Training in progress step <span class="hljs-subst">{step}</span>&quot;</span>, blocking=<span class="hljs-literal">False</span>
                )`}}),ie=new ba({props:{$$slots:{default:[Pi]},$$scope:{ctx:C}}}),Ie=new ba({props:{$$slots:{default:[Di]},$$scope:{ctx:C}}}),{c(){n=c("h2"),f=c("a"),i=c("span"),j(_.$$.fragment),$=d(),k=c("span"),v=o("Training with \u{1F917} Accelerate"),T=d(),z=c("p"),A=o("We\u2019ve seen how to train a model with the "),L=c("code"),N=o("Trainer"),g=o(", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),P=d(),j(W.$$.fragment),M=d(),G=c("p"),R=o("Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),Y=c("code"),F=o("plt"),H=o(", "),S=c("code"),V=o("pd"),K=o(", "),B=c("code"),Q=o("sk"),te=o(", "),O=c("code"),U=o("fit"),Re=o(", and "),Be=c("code"),Ot=o("predict"),_e=o(", which are the most frequent import names for "),Ue=c("code"),Ft=o("matplotlib.pyplot"),ns=o(", "),os=c("code"),ka=o("pandas"),xs=o(", and "),Ee=c("code"),qs=o("sklearn"),ge=o(" as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),Es=d(),j(we.$$.fragment),zs=d(),j(lt.$$.fragment),Lt=d(),Nt=c("p"),ya=o("Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),ls=d(),j(ce.$$.fragment),rt=d(),be=c("p"),Ts=o("Before we can start training with this awesome new loss function, we need to prepare a few things:"),ze=d(),ke=c("ul"),Te=c("li"),$a=o("We need dataloaders to load the data in batches."),va=d(),Wt=c("li"),Pe=o("We need to set up weight decay parameters."),Ye=d(),it=c("li"),pt=o("From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),Ps=d(),ae=c("p"),ja=o("Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),It=c("code"),ne=o('"torch"'),xa=o(", and then we can pass it to a PyTorch "),De=c("code"),qa=o("DataLoader"),Ea=o(" with the appropriate batch size:"),Gt=d(),j(ct.$$.fragment),Ds=d(),ye=c("p"),za=o("Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),Cs=d(),j(Xe.$$.fragment),Ce=d(),Mt=c("p"),rs=o("Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),As=d(),j(ht.$$.fragment),is=d(),ee=c("p"),Os=o("With the "),Ve=c("code"),Ta=o("evaluate()"),Fs=o(" function we can report loss and "),$e=c("a"),Ls=o("perplexity"),ut=o(" at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),ps=d(),j(ve.$$.fragment),Ns=d(),dt=c("p"),mt=o("We can then define our optimizer, using the function from before to split the parameters for weight decay:"),cs=d(),j(je.$$.fragment),Ws=d(),ft=c("p"),_t=o("Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),hs=d(),j(he.$$.fragment),us=d(),j(xe.$$.fragment),Is=d(),ue=c("p"),Ht=o("Now that we have sent our "),ds=c("code"),Gs=o("train_dataloader"),gt=o(" to "),St=c("code"),wt=o("accelerator.prepare()"),Ms=o(", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),Ae=d(),j(Ke.$$.fragment),bt=d(),oe=c("p"),Hs=o("Lastly, to push our model to the Hub, we will need to create a "),Oe=c("code"),Ss=o("Repository"),kt=o(" object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Rt=c("code"),Ze=o("repo_name"),Pa=o(" with your own choice; it just needs to contain your username, which is what the function "),yt=c("code"),Da=o("get_full_repo_name()"),Ca=o(" does):"),ms=d(),j(se.$$.fragment),Fe=d(),j(Le.$$.fragment),Je=d(),Bt=c("p"),fs=o("Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),Rs=d(),j(Qe.$$.fragment),et=d(),de=c("p"),Ut=o("We can now upload anything we save in "),_s=c("code"),Bs=o("output_dir"),le=o(" by calling the "),gs=c("code"),ws=o("repo.push_to_hub()"),Aa=o(" method. This will help us upload the intermediate models at the end of each epoch."),Us=d(),Ne=c("p"),Oa=o("Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),Ys=d(),j(We.$$.fragment),Xs=d(),j($t.$$.fragment),bs=d(),re=c("p"),Yt=o("Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),Vs=c("code"),Ks=o("evaluate()"),Xt=o(" function:"),Zs=d(),j(tt.$$.fragment),st=d(),vt=c("p"),jt=o("And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),ks=d(),j(ie.$$.fragment),Js=d(),j(Ie.$$.fragment),this.h()},l(a){n=h(a,"H2",{class:!0});var y=u(n);f=h(y,"A",{id:!0,class:!0,href:!0});var me=u(f);i=h(me,"SPAN",{});var pn=u(i);x(_.$$.fragment,pn),pn.forEach(t),me.forEach(t),$=m(y),k=h(y,"SPAN",{});var ea=u(k);v=l(ea,"Training with \u{1F917} Accelerate"),ea.forEach(t),y.forEach(t),T=m(a),z=h(a,"P",{});var ta=u(z);A=l(ta,"We\u2019ve seen how to train a model with the "),L=h(ta,"CODE",{});var cn=u(L);N=l(cn,"Trainer"),cn.forEach(t),g=l(ta,", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),ta.forEach(t),P=m(a),x(W.$$.fragment,a),M=m(a),G=h(a,"P",{});var X=u(G);R=l(X,"Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),Y=h(X,"CODE",{});var hn=u(Y);F=l(hn,"plt"),hn.forEach(t),H=l(X,", "),S=h(X,"CODE",{});var un=u(S);V=l(un,"pd"),un.forEach(t),K=l(X,", "),B=h(X,"CODE",{});var sa=u(B);Q=l(sa,"sk"),sa.forEach(t),te=l(X,", "),O=h(X,"CODE",{});var dn=u(O);U=l(dn,"fit"),dn.forEach(t),Re=l(X,", and "),Be=h(X,"CODE",{});var mn=u(Be);Ot=l(mn,"predict"),mn.forEach(t),_e=l(X,", which are the most frequent import names for "),Ue=h(X,"CODE",{});var Fa=u(Ue);Ft=l(Fa,"matplotlib.pyplot"),Fa.forEach(t),ns=l(X,", "),os=h(X,"CODE",{});var Vt=u(os);ka=l(Vt,"pandas"),Vt.forEach(t),xs=l(X,", and "),Ee=h(X,"CODE",{});var La=u(Ee);qs=l(La,"sklearn"),La.forEach(t),ge=l(X," as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),X.forEach(t),Es=m(a),x(we.$$.fragment,a),zs=m(a),x(lt.$$.fragment,a),Lt=m(a),Nt=h(a,"P",{});var Kt=u(Nt);ya=l(Kt,"Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),Kt.forEach(t),ls=m(a),x(ce.$$.fragment,a),rt=m(a),be=h(a,"P",{});var Na=u(be);Ts=l(Na,"Before we can start training with this awesome new loss function, we need to prepare a few things:"),Na.forEach(t),ze=m(a),ke=h(a,"UL",{});var Ge=u(ke);Te=h(Ge,"LI",{});var fn=u(Te);$a=l(fn,"We need dataloaders to load the data in batches."),fn.forEach(t),va=m(Ge),Wt=h(Ge,"LI",{});var Wa=u(Wt);Pe=l(Wa,"We need to set up weight decay parameters."),Wa.forEach(t),Ye=m(Ge),it=h(Ge,"LI",{});var ys=u(it);pt=l(ys,"From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),ys.forEach(t),Ge.forEach(t),Ps=m(a),ae=h(a,"P",{});var Zt=u(ae);ja=l(Zt,"Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),It=h(Zt,"CODE",{});var Ia=u(It);ne=l(Ia,'"torch"'),Ia.forEach(t),xa=l(Zt,", and then we can pass it to a PyTorch "),De=h(Zt,"CODE",{});var xt=u(De);qa=l(xt,"DataLoader"),xt.forEach(t),Ea=l(Zt," with the appropriate batch size:"),Zt.forEach(t),Gt=m(a),x(ct.$$.fragment,a),Ds=m(a),ye=h(a,"P",{});var Ga=u(ye);za=l(Ga,"Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),Ga.forEach(t),Cs=m(a),x(Xe.$$.fragment,a),Ce=m(a),Mt=h(a,"P",{});var at=u(Mt);rs=l(at,"Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),at.forEach(t),As=m(a),x(ht.$$.fragment,a),is=m(a),ee=h(a,"P",{});var fe=u(ee);Os=l(fe,"With the "),Ve=h(fe,"CODE",{});var aa=u(Ve);Ta=l(aa,"evaluate()"),aa.forEach(t),Fs=l(fe," function we can report loss and "),$e=h(fe,"A",{href:!0});var Jt=u($e);Ls=l(Jt,"perplexity"),Jt.forEach(t),ut=l(fe," at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),fe.forEach(t),ps=m(a),x(ve.$$.fragment,a),Ns=m(a),dt=h(a,"P",{});var _n=u(dt);mt=l(_n,"We can then define our optimizer, using the function from before to split the parameters for weight decay:"),_n.forEach(t),cs=m(a),x(je.$$.fragment,a),Ws=m(a),ft=h(a,"P",{});var na=u(ft);_t=l(na,"Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),na.forEach(t),hs=m(a),x(he.$$.fragment,a),us=m(a),x(xe.$$.fragment,a),Is=m(a),ue=h(a,"P",{});var Qt=u(ue);Ht=l(Qt,"Now that we have sent our "),ds=h(Qt,"CODE",{});var Ma=u(ds);Gs=l(Ma,"train_dataloader"),Ma.forEach(t),gt=l(Qt," to "),St=h(Qt,"CODE",{});var Me=u(St);wt=l(Me,"accelerator.prepare()"),Me.forEach(t),Ms=l(Qt,", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),Qt.forEach(t),Ae=m(a),x(Ke.$$.fragment,a),bt=m(a),oe=h(a,"P",{});var nt=u(oe);Hs=l(nt,"Lastly, to push our model to the Hub, we will need to create a "),Oe=h(nt,"CODE",{});var oa=u(Oe);Ss=l(oa,"Repository"),oa.forEach(t),kt=l(nt," object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Rt=h(nt,"CODE",{});var gn=u(Rt);Ze=l(gn,"repo_name"),gn.forEach(t),Pa=l(nt," with your own choice; it just needs to contain your username, which is what the function "),yt=h(nt,"CODE",{});var wn=u(yt);Da=l(wn,"get_full_repo_name()"),wn.forEach(t),Ca=l(nt," does):"),nt.forEach(t),ms=m(a),x(se.$$.fragment,a),Fe=m(a),x(Le.$$.fragment,a),Je=m(a),Bt=h(a,"P",{});var la=u(Bt);fs=l(la,"Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),la.forEach(t),Rs=m(a),x(Qe.$$.fragment,a),et=m(a),de=h(a,"P",{});var es=u(de);Ut=l(es,"We can now upload anything we save in "),_s=h(es,"CODE",{});var bn=u(_s);Bs=l(bn,"output_dir"),bn.forEach(t),le=l(es," by calling the "),gs=h(es,"CODE",{});var Ha=u(gs);ws=l(Ha,"repo.push_to_hub()"),Ha.forEach(t),Aa=l(es," method. This will help us upload the intermediate models at the end of each epoch."),es.forEach(t),Us=m(a),Ne=h(a,"P",{});var qe=u(Ne);Oa=l(qe,"Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),qe.forEach(t),Ys=m(a),x(We.$$.fragment,a),Xs=m(a),x($t.$$.fragment,a),bs=m(a),re=h(a,"P",{});var pe=u(re);Yt=l(pe,"Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),Vs=h(pe,"CODE",{});var $s=u(Vs);Ks=l($s,"evaluate()"),$s.forEach(t),Xt=l(pe," function:"),pe.forEach(t),Zs=m(a),x(tt.$$.fragment,a),st=m(a),vt=h(a,"P",{});var He=u(vt);jt=l(He,"And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),He.forEach(t),ks=m(a),x(ie.$$.fragment,a),Js=m(a),x(Ie.$$.fragment,a),this.h()},h(){I(f,"id","training-with-accelerate"),I(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),I(f,"href","#training-with-accelerate"),I(n,"class","relative group"),I($e,"href","/course/chapter7/3")},m(a,y){r(a,n,y),s(n,f),s(f,i),q(_,i,null),s(n,$),s(n,k),s(k,v),r(a,T,y),r(a,z,y),s(z,A),s(z,L),s(L,N),s(z,g),r(a,P,y),q(W,a,y),r(a,M,y),r(a,G,y),s(G,R),s(G,Y),s(Y,F),s(G,H),s(G,S),s(S,V),s(G,K),s(G,B),s(B,Q),s(G,te),s(G,O),s(O,U),s(G,Re),s(G,Be),s(Be,Ot),s(G,_e),s(G,Ue),s(Ue,Ft),s(G,ns),s(G,os),s(os,ka),s(G,xs),s(G,Ee),s(Ee,qs),s(G,ge),r(a,Es,y),q(we,a,y),r(a,zs,y),q(lt,a,y),r(a,Lt,y),r(a,Nt,y),s(Nt,ya),r(a,ls,y),q(ce,a,y),r(a,rt,y),r(a,be,y),s(be,Ts),r(a,ze,y),r(a,ke,y),s(ke,Te),s(Te,$a),s(ke,va),s(ke,Wt),s(Wt,Pe),s(ke,Ye),s(ke,it),s(it,pt),r(a,Ps,y),r(a,ae,y),s(ae,ja),s(ae,It),s(It,ne),s(ae,xa),s(ae,De),s(De,qa),s(ae,Ea),r(a,Gt,y),q(ct,a,y),r(a,Ds,y),r(a,ye,y),s(ye,za),r(a,Cs,y),q(Xe,a,y),r(a,Ce,y),r(a,Mt,y),s(Mt,rs),r(a,As,y),q(ht,a,y),r(a,is,y),r(a,ee,y),s(ee,Os),s(ee,Ve),s(Ve,Ta),s(ee,Fs),s(ee,$e),s($e,Ls),s(ee,ut),r(a,ps,y),q(ve,a,y),r(a,Ns,y),r(a,dt,y),s(dt,mt),r(a,cs,y),q(je,a,y),r(a,Ws,y),r(a,ft,y),s(ft,_t),r(a,hs,y),q(he,a,y),r(a,us,y),q(xe,a,y),r(a,Is,y),r(a,ue,y),s(ue,Ht),s(ue,ds),s(ds,Gs),s(ue,gt),s(ue,St),s(St,wt),s(ue,Ms),r(a,Ae,y),q(Ke,a,y),r(a,bt,y),r(a,oe,y),s(oe,Hs),s(oe,Oe),s(Oe,Ss),s(oe,kt),s(oe,Rt),s(Rt,Ze),s(oe,Pa),s(oe,yt),s(yt,Da),s(oe,Ca),r(a,ms,y),q(se,a,y),r(a,Fe,y),q(Le,a,y),r(a,Je,y),r(a,Bt,y),s(Bt,fs),r(a,Rs,y),q(Qe,a,y),r(a,et,y),r(a,de,y),s(de,Ut),s(de,_s),s(_s,Bs),s(de,le),s(de,gs),s(gs,ws),s(de,Aa),r(a,Us,y),r(a,Ne,y),s(Ne,Oa),r(a,Ys,y),q(We,a,y),r(a,Xs,y),q($t,a,y),r(a,bs,y),r(a,re,y),s(re,Yt),s(re,Vs),s(Vs,Ks),s(re,Xt),r(a,Zs,y),q(tt,a,y),r(a,st,y),r(a,vt,y),s(vt,jt),r(a,ks,y),q(ie,a,y),r(a,Js,y),q(Ie,a,y),Qs=!0},i(a){Qs||(w(_.$$.fragment,a),w(W.$$.fragment,a),w(we.$$.fragment,a),w(lt.$$.fragment,a),w(ce.$$.fragment,a),w(ct.$$.fragment,a),w(Xe.$$.fragment,a),w(ht.$$.fragment,a),w(ve.$$.fragment,a),w(je.$$.fragment,a),w(he.$$.fragment,a),w(xe.$$.fragment,a),w(Ke.$$.fragment,a),w(se.$$.fragment,a),w(Le.$$.fragment,a),w(Qe.$$.fragment,a),w(We.$$.fragment,a),w($t.$$.fragment,a),w(tt.$$.fragment,a),w(ie.$$.fragment,a),w(Ie.$$.fragment,a),Qs=!0)},o(a){b(_.$$.fragment,a),b(W.$$.fragment,a),b(we.$$.fragment,a),b(lt.$$.fragment,a),b(ce.$$.fragment,a),b(ct.$$.fragment,a),b(Xe.$$.fragment,a),b(ht.$$.fragment,a),b(ve.$$.fragment,a),b(je.$$.fragment,a),b(he.$$.fragment,a),b(xe.$$.fragment,a),b(Ke.$$.fragment,a),b(se.$$.fragment,a),b(Le.$$.fragment,a),b(Qe.$$.fragment,a),b(We.$$.fragment,a),b($t.$$.fragment,a),b(tt.$$.fragment,a),b(ie.$$.fragment,a),b(Ie.$$.fragment,a),Qs=!1},d(a){a&&t(n),E(_),a&&t(T),a&&t(z),a&&t(P),E(W,a),a&&t(M),a&&t(G),a&&t(Es),E(we,a),a&&t(zs),E(lt,a),a&&t(Lt),a&&t(Nt),a&&t(ls),E(ce,a),a&&t(rt),a&&t(be),a&&t(ze),a&&t(ke),a&&t(Ps),a&&t(ae),a&&t(Gt),E(ct,a),a&&t(Ds),a&&t(ye),a&&t(Cs),E(Xe,a),a&&t(Ce),a&&t(Mt),a&&t(As),E(ht,a),a&&t(is),a&&t(ee),a&&t(ps),E(ve,a),a&&t(Ns),a&&t(dt),a&&t(cs),E(je,a),a&&t(Ws),a&&t(ft),a&&t(hs),E(he,a),a&&t(us),E(xe,a),a&&t(Is),a&&t(ue),a&&t(Ae),E(Ke,a),a&&t(bt),a&&t(oe),a&&t(ms),E(se,a),a&&t(Fe),E(Le,a),a&&t(Je),a&&t(Bt),a&&t(Rs),E(Qe,a),a&&t(et),a&&t(de),a&&t(Us),a&&t(Ne),a&&t(Ys),E(We,a),a&&t(Xs),E($t,a),a&&t(bs),a&&t(re),a&&t(Zs),E(tt,a),a&&t(st),a&&t(vt),a&&t(ks),E(ie,a),a&&t(Js),E(Ie,a)}}}function Ti(C){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=c("a"),_=o("Chapter 3"),$=o(" for more details."),this.h()},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=h(v,"A",{href:!0});var T=u(i);_=l(T,"Chapter 3"),T.forEach(t),$=l(v," for more details."),v.forEach(t),this.h()},h(){I(i,"href","/course/chapter3")},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Pi(C){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Either create your own custom loss function tailored to your use case, or add another custom step into the training loop.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," Either create your own custom loss function tailored to your use case, or add another custom step into the training loop."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Di(C){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Ci(C){let n,f,i,_,$,k,v,T,z,A,L,N,g,P,W,M,G,R,Y,F,H,S,V,K,B,Q,te,O,U,Re,Be,Ot,_e,Ue,Ft,ns,os,ka,xs,Ee,qs,ge,Es,we,zs,lt,Lt,Nt,ya,ls,ce,rt,be,Ts,ze,ke,Te,$a,va,Wt,Pe,Ye,it,pt,Ps,ae,ja,It,ne,xa,De,qa,Ea,Gt,ct,Ds,ye,za,Cs,Xe,Ce,Mt,rs,As,ht,is,ee,Os,Ve,Ta,Fs,$e,Ls,ut,ps,ve,Ns,dt,mt,cs,je,Ws,ft,_t,hs,he,us,xe,Is,ue,Ht,ds,Gs,gt,St,wt,Ms,Ae,Ke,bt,oe,Hs,Oe,Ss,kt,Rt,Ze,Pa,yt,Da,Ca,ms,se,Fe,Le,Je,Bt,fs,Rs,Qe,et,de,Ut,_s,Bs,le,gs,ws,Aa,Us,Ne,Oa,Ys,We,Xs,$t,bs,re,Yt,Vs,Ks,Xt,Zs,tt,st,vt,jt,ks,ie,Js,Ie,Qs,a,y,me,pn,ea,ta,cn,X,hn,un,sa,dn,mn,Fa,Vt,La,Kt,Na,Ge,fn,Wa,ys,Zt,Ia,xt,Ga,at,fe,aa,Jt,_n,na,Qt,Ma,Me,nt,oa,gn,wn,la,es,bn,Ha,qe,pe,$s,He,Xo,Rn,Vo,Ko,Bn,Zo,Jo,ro,ts,Qo,Un,el,tl,Yn,sl,al,io,qt,Et,kn,yn,nl,po,Sa,co,zt,Tt,$n,vn,ol,ho,jn,ra,uo,xn,ll,mo,Ra,fo,qn,rl,_o,En,il,go,Ba,wo,Pt,Dt,zn,ia,bo,pa,ko,vs,ca,Xn,Ua,pl,Vn,cl,yo,ha,hl,Kn,ul,dl,$o,Ct,At,Tn,Pn,ml,vo,Ya,jo,Xa,xo,ss,fl,Zn,_l,gl,Jn,wl,bl,qo,Va,Eo,Ka,zo,ot,kl,Qn,yl,$l,eo,vl,jl,to,xl,ql,To,Za,Po,Ja,Do,ua,El,so,zl,Tl,Co,Qa,Ao,en,Oo,Dn,Cn,Fo;i=new ri({props:{fw:C[0]}}),T=new Sn({});const Dl=[pi,ii],tn=[];function Cl(e,p){return e[0]==="pt"?0:1}g=Cl(C),P=tn[g]=Dl[g](C),Ee=new Pl({props:{id:"Vpjb1lu0MDk"}}),be=new li({props:{model:C[1]}}),pt=new Sn({}),ee=new D({props:{codee:`def any_keyword_in_string(string, keywords):
    for keyword in keywords:
        if keyword in string:
            return True
    return False,`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">any_keyword_in_string</span>(<span class="hljs-params">string, keywords</span>):
    <span class="hljs-keyword">for</span> keyword <span class="hljs-keyword">in</span> keywords:
        <span class="hljs-keyword">if</span> keyword <span class="hljs-keyword">in</span> string:
            <span class="hljs-keyword">return</span> <span class="hljs-literal">True</span>
    <span class="hljs-keyword">return</span> <span class="hljs-literal">False</span>`}}),$e=new D({props:{codee:`filters = ["pandas", "sklearn", "matplotlib", "seaborn"]
example_1 = "import numpy as np"
example_2 = "import pandas as pd"

print(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
),`,highlighted:`filters = [<span class="hljs-string">&quot;pandas&quot;</span>, <span class="hljs-string">&quot;sklearn&quot;</span>, <span class="hljs-string">&quot;matplotlib&quot;</span>, <span class="hljs-string">&quot;seaborn&quot;</span>]
example_1 = <span class="hljs-string">&quot;import numpy as np&quot;</span>
example_2 = <span class="hljs-string">&quot;import pandas as pd&quot;</span>

<span class="hljs-built_in">print</span>(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`}}),ut=new D({props:{codee:"False True,",highlighted:'<span class="hljs-literal">False</span> <span class="hljs-literal">True</span>'}}),mt=new D({props:{codee:`def filter_streaming_dataset(dataset, filters):
    filtered_dict = defaultdict(list)
    total = 0
    for sample in tqdm(iter(dataset)):
        total += 1
        if any_keyword_in_string(sample["content"], filters):
            for k, v in sample.items():
                filtered_dict[k].append(v)
    print(f"{len(filtered_dict['content'])/total:.2%} of data after filtering.")
    return Dataset.from_dict(filtered_dict),`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">filter_streaming_dataset</span>(<span class="hljs-params">dataset, filters</span>):
    filtered_dict = defaultdict(<span class="hljs-built_in">list</span>)
    total = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> sample <span class="hljs-keyword">in</span> tqdm(<span class="hljs-built_in">iter</span>(dataset)):
        total += <span class="hljs-number">1</span>
        <span class="hljs-keyword">if</span> any_keyword_in_string(sample[<span class="hljs-string">&quot;content&quot;</span>], filters):
            <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> sample.items():
                filtered_dict[k].append(v)
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{<span class="hljs-built_in">len</span>(filtered_dict[<span class="hljs-string">&#x27;content&#x27;</span>])/total:<span class="hljs-number">.2</span>%}</span> of data after filtering.&quot;</span>)
    <span class="hljs-keyword">return</span> Dataset.from_dict(filtered_dict)`}}),_t=new D({props:{codee:`# This cell will take a very long time to execute, so you should skip it and go to
# the next one!
from datasets import load_dataset

split = "train"  # "valid"
filters = ["pandas", "sklearn", "matplotlib", "seaborn"]

data = load_dataset(f"transformersbook/codeparrot-{split}", split=split, streaming=True)
filtered_data = filter_streaming_dataset(data, filters),`,highlighted:`<span class="hljs-comment"># This cell will take a very long time to execute, so you should skip it and go to</span>
<span class="hljs-comment"># the next one!</span>
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

split = <span class="hljs-string">&quot;train&quot;</span>  <span class="hljs-comment"># &quot;valid&quot;</span>
filters = [<span class="hljs-string">&quot;pandas&quot;</span>, <span class="hljs-string">&quot;sklearn&quot;</span>, <span class="hljs-string">&quot;matplotlib&quot;</span>, <span class="hljs-string">&quot;seaborn&quot;</span>]

data = load_dataset(<span class="hljs-string">f&quot;transformersbook/codeparrot-<span class="hljs-subst">{split}</span>&quot;</span>, split=split, streaming=<span class="hljs-literal">True</span>)
filtered_data = filter_streaming_dataset(data, filters)`}}),he=new D({props:{codee:"3.26% of data after filtering.,",highlighted:'<span class="hljs-number">3.26</span>% of data after filtering.'}}),gt=new D({props:{codee:`from datasets import load_dataset, DatasetDict

ds_train = load_dataset("huggingface-course/codeparrot-ds-train", split="train")
ds_valid = load_dataset("huggingface-course/codeparrot-ds-valid", split="train")

raw_datasets = DatasetDict(
    {
        "train": ds_train,  # .shuffle().select(range(50000)),
        "valid": ds_valid,  # .shuffle().select(range(500))
    }
)

raw_datasets,`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, DatasetDict

ds_train = load_dataset(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds-train&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
ds_valid = load_dataset(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds-valid&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)

raw_datasets = DatasetDict(
    {
        <span class="hljs-string">&quot;train&quot;</span>: ds_train,  <span class="hljs-comment"># .shuffle().select(range(50000)),</span>
        <span class="hljs-string">&quot;valid&quot;</span>: ds_valid,  <span class="hljs-comment"># .shuffle().select(range(500))</span>
    }
)

raw_datasets`}}),wt=new D({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['repo_name', 'path', 'copies', 'size', 'content', 'license'],
        num_rows: 606720
    })
    valid: Dataset({
        features: ['repo_name', 'path', 'copies', 'size', 'content', 'license'],
        num_rows: 3322
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;repo_name&#x27;</span>, <span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;copies&#x27;</span>, <span class="hljs-string">&#x27;size&#x27;</span>, <span class="hljs-string">&#x27;content&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>],
        num_rows: <span class="hljs-number">606720</span>
    })
    valid: Dataset({
        features: [<span class="hljs-string">&#x27;repo_name&#x27;</span>, <span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;copies&#x27;</span>, <span class="hljs-string">&#x27;size&#x27;</span>, <span class="hljs-string">&#x27;content&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>],
        num_rows: <span class="hljs-number">3322</span>
    })
})`}}),Ae=new ba({props:{$$slots:{default:[ci]},$$scope:{ctx:C}}}),Oe=new D({props:{codee:`for key in raw_datasets["train"][0]:
    print(f"{key.upper()}: {raw_datasets['train'][0][key][:200]}"),`,highlighted:`<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key.upper()}</span>: <span class="hljs-subst">{raw_datasets[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">0</span>][key][:<span class="hljs-number">200</span>]}</span>&quot;</span>)`}}),kt=new D({props:{codee:`'REPO_NAME: kmike/scikit-learn'
'PATH: sklearn/utils/__init__.py'
'COPIES: 3'
'SIZE: 10094'
'''CONTENT: """
The :mod:\`sklearn.utils\` module includes various utilites.
"""

from collections import Sequence

import numpy as np
from scipy.sparse import issparse
import warnings

from .murmurhash import murm
LICENSE: bsd-3-clause''',`,highlighted:`<span class="hljs-string">&#x27;REPO_NAME: kmike/scikit-learn&#x27;</span>
<span class="hljs-string">&#x27;PATH: sklearn/utils/__init__.py&#x27;</span>
<span class="hljs-string">&#x27;COPIES: 3&#x27;</span>
<span class="hljs-string">&#x27;SIZE: 10094&#x27;</span>
<span class="hljs-string">&#x27;&#x27;&#x27;CONTENT: &quot;&quot;&quot;
The :mod:\`sklearn.utils\` module includes various utilites.
&quot;&quot;&quot;

from collections import Sequence

import numpy as np
from scipy.sparse import issparse
import warnings

from .murmurhash import murm
LICENSE: bsd-3-clause&#x27;&#x27;&#x27;</span>`}}),Je=new Sn({}),et=new Pl({props:{id:"ma1TrR7gE7I"}}),st=new D({props:{codee:`from transformers import AutoTokenizer

context_length = 128
tokenizer = AutoTokenizer.from_pretrained("huggingface-course/code-search-net-tokenizer")

outputs = tokenizer(
    raw_datasets["train"][:2]["content"],
    truncation=True,
    max_length=context_length,
    return_overflowing_tokens=True,
    return_length=True,
)

print(f"Input IDs length: {len(outputs['input_ids'])}")
print(f"Input chunk lengths: {(outputs['length'])}")
print(f"Chunk mapping: {outputs['overflow_to_sample_mapping']}"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

context_length = <span class="hljs-number">128</span>
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;huggingface-course/code-search-net-tokenizer&quot;</span>)

outputs = tokenizer(
    raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][:<span class="hljs-number">2</span>][<span class="hljs-string">&quot;content&quot;</span>],
    truncation=<span class="hljs-literal">True</span>,
    max_length=context_length,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
    return_length=<span class="hljs-literal">True</span>,
)

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Input IDs length: <span class="hljs-subst">{<span class="hljs-built_in">len</span>(outputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>])}</span>&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Input chunk lengths: <span class="hljs-subst">{(outputs[<span class="hljs-string">&#x27;length&#x27;</span>])}</span>&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Chunk mapping: <span class="hljs-subst">{outputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>&quot;</span>)`}}),jt=new D({props:{codee:`Input IDs length: 34
Input chunk lengths: [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 117, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 41]
Chunk mapping: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],`,highlighted:`Input IDs length: <span class="hljs-number">34</span>
Input chunk lengths: [<span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">117</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">41</span>]
Chunk mapping: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]`}}),Vt=new D({props:{codee:`def tokenize(element):
    outputs = tokenizer(
        element["content"],
        truncation=True,
        max_length=context_length,
        return_overflowing_tokens=True,
        return_length=True,
    )
    input_batch = []
    for length, input_ids in zip(outputs["length"], outputs["input_ids"]):
        if length == context_length:
            input_batch.append(input_ids)
    return {"input_ids": input_batch}


tokenized_datasets = raw_datasets.map(
    tokenize, batched=True, remove_columns=raw_datasets["train"].column_names
)
tokenized_datasets,`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize</span>(<span class="hljs-params">element</span>):
    outputs = tokenizer(
        element[<span class="hljs-string">&quot;content&quot;</span>],
        truncation=<span class="hljs-literal">True</span>,
        max_length=context_length,
        return_overflowing_tokens=<span class="hljs-literal">True</span>,
        return_length=<span class="hljs-literal">True</span>,
    )
    input_batch = []
    <span class="hljs-keyword">for</span> length, input_ids <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(outputs[<span class="hljs-string">&quot;length&quot;</span>], outputs[<span class="hljs-string">&quot;input_ids&quot;</span>]):
        <span class="hljs-keyword">if</span> length == context_length:
            input_batch.append(input_ids)
    <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;input_ids&quot;</span>: input_batch}


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(
    tokenize, batched=<span class="hljs-literal">True</span>, remove_columns=raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names
)
tokenized_datasets`}}),Kt=new D({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['input_ids'],
        num_rows: 16702061
    })
    valid: Dataset({
        features: ['input_ids'],
        num_rows: 93164
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;input_ids&#x27;</span>],
        num_rows: <span class="hljs-number">16702061</span>
    })
    valid: Dataset({
        features: [<span class="hljs-string">&#x27;input_ids&#x27;</span>],
        num_rows: <span class="hljs-number">93164</span>
    })
})`}}),xt=new ba({props:{$$slots:{default:[hi]},$$scope:{ctx:C}}}),Jt=new Sn({});const Al=[di,ui],sn=[];function Ol(e,p){return e[0]==="pt"?0:1}qe=Ol(C),pe=sn[qe]=Al[qe](C);const Fl=[fi,mi],an=[];function Ll(e,p){return e[0]==="pt"?0:1}qt=Ll(C),Et=an[qt]=Fl[qt](C),Sa=new D({props:{codee:`out = data_collator([tokenized_dataset["train"][i] for i in range(5)])
for key in out:
    print(f"{key} shape: {out[key].shape}"),`,highlighted:`out = data_collator([tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>)])
<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> out:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key}</span> shape: <span class="hljs-subst">{out[key].shape}</span>&quot;</span>)`}});const Nl=[gi,_i],nn=[];function Wl(e,p){return e[0]==="pt"?0:1}zt=Wl(C),Tt=nn[zt]=Nl[zt](C);let Z=C[0]==="tf"&&Kr();ra=new ba({props:{warning:!0,$$slots:{default:[wi]},$$scope:{ctx:C}}}),Ra=new D({props:{codee:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Ba=new D({props:{codee:"huggingface-cli login,",highlighted:"huggingface-cli login"}});const Il=[ki,bi],on=[];function Gl(e,p){return e[0]==="pt"?0:1}Pt=Gl(C),Dt=on[Pt]=Il[Pt](C),ia=new ba({props:{$$slots:{default:[yi]},$$scope:{ctx:C}}}),pa=new ba({props:{$$slots:{default:[ji]},$$scope:{ctx:C}}}),Ua=new Sn({});const Ml=[qi,xi],ln=[];function Hl(e,p){return e[0]==="pt"?0:1}Ct=Hl(C),At=ln[Ct]=Ml[Ct](C),Ya=new D({props:{codee:`txt = """\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"]),`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Xa=new D({props:{codee:`# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
plt.scatter(x, y)

# create scatter,`,highlighted:`<span class="hljs-comment"># create some data</span>
x = np.random.randn(<span class="hljs-number">100</span>)
y = np.random.randn(<span class="hljs-number">100</span>)

<span class="hljs-comment"># create scatter plot with x, y</span>
plt.scatter(x, y)

<span class="hljs-comment"># create scatter</span>`}}),Va=new D({props:{codee:`txt = """\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create dataframe from x and y
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"]),`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create dataframe from x and y
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ka=new D({props:{codee:`# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create dataframe from x and y
df = pd.DataFrame({'x': x, 'y': y})
df.insert(0,'x', x)
for,`,highlighted:`<span class="hljs-comment"># create some data</span>
x = np.random.randn(<span class="hljs-number">100</span>)
y = np.random.randn(<span class="hljs-number">100</span>)

<span class="hljs-comment"># create dataframe from x and y</span>
df = pd.DataFrame({<span class="hljs-string">&#x27;x&#x27;</span>: x, <span class="hljs-string">&#x27;y&#x27;</span>: y})
df.insert(<span class="hljs-number">0</span>,<span class="hljs-string">&#x27;x&#x27;</span>, x)
<span class="hljs-keyword">for</span>`}}),Za=new D({props:{codee:`txt = """\\
# dataframe with profession, income and name
df = pd.DataFrame({'profession': x, 'income':y, 'name': z})

# calculate the mean income per profession
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"]),`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# dataframe with profession, income and name
df = pd.DataFrame({&#x27;profession&#x27;: x, &#x27;income&#x27;:y, &#x27;name&#x27;: z})

# calculate the mean income per profession
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ja=new D({props:{codee:`# dataframe with profession, income and name
df = pd.DataFrame({'profession': x, 'income':y, 'name': z})

# calculate the mean income per profession
profession = df.groupby(['profession']).mean()

# compute the,`,highlighted:`<span class="hljs-comment"># dataframe with profession, income and name</span>
df = pd.DataFrame({<span class="hljs-string">&#x27;profession&#x27;</span>: x, <span class="hljs-string">&#x27;income&#x27;</span>:y, <span class="hljs-string">&#x27;name&#x27;</span>: z})

<span class="hljs-comment"># calculate the mean income per profession</span>
profession = df.groupby([<span class="hljs-string">&#x27;profession&#x27;</span>]).mean()

<span class="hljs-comment"># compute the</span>`}}),Qa=new D({props:{codee:`txt = """
# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"]),`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;
# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),en=new D({props:{codee:`# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
rf = RandomForestRegressor(n_estimators=300, random_state=random_state, max_depth=3)
rf.fit(X, y)
rf,`,highlighted:`<span class="hljs-comment"># import random forest regressor from scikit-learn</span>
<span class="hljs-keyword">from</span> sklearn.ensemble <span class="hljs-keyword">import</span> RandomForestRegressor

<span class="hljs-comment"># fit random forest model with 300 estimators on X, y:</span>
rf = RandomForestRegressor(n_estimators=<span class="hljs-number">300</span>, random_state=random_state, max_depth=<span class="hljs-number">3</span>)
rf.fit(X, y)
rf`}});function Sl(e,p){return e[0]==="tf"?zi:Ei}let Lo=Sl(C),js=Lo(C),J=C[0]==="pt"&&Zr(C);return{c(){n=c("meta"),f=d(),j(i.$$.fragment),_=d(),$=c("h1"),k=c("a"),v=c("span"),j(T.$$.fragment),z=d(),A=c("span"),L=o("Training a causal language model from scratch"),N=d(),P.c(),W=d(),M=c("p"),G=o("Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=c("a"),Y=o("Chapter 1"),F=o(", this is commonly referred to as "),H=c("em"),S=o("transfer learning"),V=o(", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),K=d(),B=c("p"),Q=o("In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),te=c("code"),O=o("matplotlib"),U=o(", "),Re=c("code"),Be=o("seaborn"),Ot=o(", "),_e=c("code"),Ue=o("pandas"),Ft=o(", and "),ns=c("code"),os=o("scikit-learn"),ka=o(" libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),xs=d(),j(Ee.$$.fragment),qs=d(),ge=c("p"),Es=o("In "),we=c("a"),zs=o("Chapter 6"),lt=o(" we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),Lt=c("code"),Nt=o("Trainer"),ya=o(" API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),ls=d(),ce=c("div"),rt=c("div"),j(be.$$.fragment),Ts=d(),ze=c("p"),ke=o("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),Te=c("a"),$a=o("here"),va=o(". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),Wt=d(),Pe=c("h2"),Ye=c("a"),it=c("span"),j(pt.$$.fragment),Ps=d(),ae=c("span"),ja=o("Gathering the data"),It=d(),ne=c("p"),xa=o("Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),De=c("a"),qa=o("Transformers textbook"),Ea=o(" to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),Gt=c("code"),ct=o("codeparrot"),Ds=o(", the authors built a dataset that they then shared on the "),ye=c("a"),za=o("Hugging Face Hub"),Cs=o("."),Xe=d(),Ce=c("p"),Mt=o("However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),rs=c("code"),As=o("codeparrot"),ht=o(" dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),is=d(),j(ee.$$.fragment),Os=d(),Ve=c("p"),Ta=o("Let\u2019s test it on two examples:"),Fs=d(),j($e.$$.fragment),Ls=d(),j(ut.$$.fragment),ps=d(),ve=c("p"),Ns=o("We can use this to create a function that will stream the dataset and filter the elements we want:"),dt=d(),j(mt.$$.fragment),cs=d(),je=c("p"),Ws=o("Then we can simply apply this function to the streaming dataset:"),ft=d(),j(_t.$$.fragment),hs=d(),j(he.$$.fragment),us=d(),xe=c("p"),Is=o("This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),ue=d(),Ht=c("p"),ds=o("Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),Gs=d(),j(gt.$$.fragment),St=d(),j(wt.$$.fragment),Ms=d(),j(Ae.$$.fragment),Ke=d(),bt=c("p"),oe=o("Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),Hs=d(),j(Oe.$$.fragment),Ss=d(),j(kt.$$.fragment),Rt=d(),Ze=c("p"),Pa=o("We can see that the "),yt=c("code"),Da=o("content"),Ca=o(" field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),ms=d(),se=c("h2"),Fe=c("a"),Le=c("span"),j(Je.$$.fragment),Bt=d(),fs=c("span"),Rs=o("Preparing the dataset"),Qe=d(),j(et.$$.fragment),de=d(),Ut=c("p"),_s=o("The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),Bs=d(),le=c("p"),gs=o("Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),ws=c("code"),Aa=o("return_overflowing_tokens"),Us=o(" option to tokenize the whole input and split it into several chunks, as we did in "),Ne=c("a"),Oa=o("Chapter 6"),Ys=o(". We\u2019ll also use the "),We=c("code"),Xs=o("return_length"),$t=o(" option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),bs=d(),re=c("div"),Yt=c("img"),Ks=d(),Xt=c("p"),Zs=o("Let\u2019s see exactly how this works by looking at the first two examples:"),tt=d(),j(st.$$.fragment),vt=d(),j(jt.$$.fragment),ks=d(),ie=c("p"),Js=o("We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),Ie=c("code"),Qs=o("overflow_to_sample_mapping"),a=o(" field, we can also reconstruct which chunks belonged to which input samples."),y=d(),me=c("p"),pn=o("With this operation we\u2019re using a handy feature of the "),ea=c("code"),ta=o("Dataset.map()"),cn=o(" function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),X=c("a"),hn=o("section 3"),un=o(", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),sa=c("code"),dn=o("Dataset.map()"),mn=o(" call:"),Fa=d(),j(Vt.$$.fragment),La=d(),j(Kt.$$.fragment),Na=d(),Ge=c("p"),fn=o("We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),Wa=d(),ys=c("p"),Zt=o("Now that we have the dataset ready, let\u2019s set up the model!"),Ia=d(),j(xt.$$.fragment),Ga=d(),at=c("h2"),fe=c("a"),aa=c("span"),j(Jt.$$.fragment),_n=d(),na=c("span"),Qt=o("Initializing a new model"),Ma=d(),Me=c("p"),nt=o("Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),oa=c("code"),gn=o("bos"),wn=o(" and "),la=c("code"),es=o("eos"),bn=o(" (beginning and end of sequence) token IDs:"),Ha=d(),pe.c(),$s=d(),He=c("p"),Xo=o("Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Rn=c("code"),Vo=o("DataCollatorForLanguageModeling"),Ko=o(" collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Bn=c("code"),Zo=o("input_ids"),Jo=o("."),ro=d(),ts=c("p"),Qo=o("Note that "),Un=c("code"),el=o("DataCollatorForLanguageModeling"),tl=o(" supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Yn=c("code"),sl=o("mlm=False"),al=o(":"),io=d(),Et.c(),kn=d(),yn=c("p"),nl=o("Let\u2019s have a look at an example:"),po=d(),j(Sa.$$.fragment),co=d(),Tt.c(),$n=d(),vn=c("p"),ol=o("We can see that the examples have been stacked and all the tensors have the same shape."),ho=d(),Z&&Z.c(),jn=d(),j(ra.$$.fragment),uo=d(),xn=c("p"),ll=o("Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),mo=d(),j(Ra.$$.fragment),fo=d(),qn=c("p"),rl=o("This will display a widget where you can enter your Hugging Face login credentials."),_o=d(),En=c("p"),il=o("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),go=d(),j(Ba.$$.fragment),wo=d(),Dt.c(),zn=d(),j(ia.$$.fragment),bo=d(),j(pa.$$.fragment),ko=d(),vs=c("h2"),ca=c("a"),Xn=c("span"),j(Ua.$$.fragment),pl=d(),Vn=c("span"),cl=o("Code generation with a pipeline"),yo=d(),ha=c("p"),hl=o("Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),Kn=c("code"),ul=o("pipeline"),dl=o(", and we\u2019ll put it on the GPU for fast generations if there is one available:"),$o=d(),At.c(),Tn=d(),Pn=c("p"),ml=o("Let\u2019s start with the simple task of creating a scatter plot:"),vo=d(),j(Ya.$$.fragment),jo=d(),j(Xa.$$.fragment),xo=d(),ss=c("p"),fl=o("The result looks correct. Does it also work for a "),Zn=c("code"),_l=o("pandas"),gl=o(" operation? Let\u2019s see if we can create a "),Jn=c("code"),wl=o("DataFrame"),bl=o(" from two arrays:"),qo=d(),j(Va.$$.fragment),Eo=d(),j(Ka.$$.fragment),zo=d(),ot=c("p"),kl=o("Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),Qn=c("code"),yl=o("x"),$l=o(" again. Since the number of generated tokens is limited, the following "),eo=c("code"),vl=o("for"),jl=o(" loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),to=c("code"),xl=o("groupby"),ql=o(" operation:"),To=d(),j(Za.$$.fragment),Po=d(),j(Ja.$$.fragment),Do=d(),ua=c("p"),El=o("Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),so=c("code"),zl=o("scikit-learn"),Tl=o(" and set up a Random Forest model:"),Co=d(),j(Qa.$$.fragment),Ao=d(),j(en.$$.fragment),Oo=d(),js.c(),Dn=d(),J&&J.c(),Cn=Yo(),this.h()},l(e){const p=si('[data-svelte="svelte-1phssyn"]',Vr.head);n=h(p,"META",{name:!0,content:!0}),p.forEach(t),f=m(e),x(i.$$.fragment,e),_=m(e),$=h(e,"H1",{class:!0});var rn=u($);k=h(rn,"A",{id:!0,class:!0,href:!0});var An=u(k);v=h(An,"SPAN",{});var ao=u(v);x(T.$$.fragment,ao),ao.forEach(t),An.forEach(t),z=m(rn),A=h(rn,"SPAN",{});var no=u(A);L=l(no,"Training a causal language model from scratch"),no.forEach(t),rn.forEach(t),N=m(e),P.l(e),W=m(e),M=h(e,"P",{});var as=u(M);G=l(as,"Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=h(as,"A",{href:!0});var On=u(R);Y=l(On,"Chapter 1"),On.forEach(t),F=l(as,", this is commonly referred to as "),H=h(as,"EM",{});var Fn=u(H);S=l(Fn,"transfer learning"),Fn.forEach(t),V=l(as,", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),as.forEach(t),K=m(e),B=h(e,"P",{});var Se=u(B);Q=l(Se,"In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),te=h(Se,"CODE",{});var Ln=u(te);O=l(Ln,"matplotlib"),Ln.forEach(t),U=l(Se,", "),Re=h(Se,"CODE",{});var oo=u(Re);Be=l(oo,"seaborn"),oo.forEach(t),Ot=l(Se,", "),_e=h(Se,"CODE",{});var lo=u(_e);Ue=l(lo,"pandas"),lo.forEach(t),Ft=l(Se,", and "),ns=h(Se,"CODE",{});var Nn=u(ns);os=l(Nn,"scikit-learn"),Nn.forEach(t),ka=l(Se," libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),Se.forEach(t),xs=m(e),x(Ee.$$.fragment,e),qs=m(e),ge=h(e,"P",{});var Wn=u(ge);Es=l(Wn,"In "),we=h(Wn,"A",{href:!0});var Rl=u(we);zs=l(Rl,"Chapter 6"),Rl.forEach(t),lt=l(Wn," we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),Lt=h(Wn,"CODE",{});var Bl=u(Lt);Nt=l(Bl,"Trainer"),Bl.forEach(t),ya=l(Wn," API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),Wn.forEach(t),ls=m(e),ce=h(e,"DIV",{class:!0});var Ul=u(ce);rt=h(Ul,"DIV",{class:!0});var Yl=u(rt);x(be.$$.fragment,Yl),Yl.forEach(t),Ul.forEach(t),Ts=m(e),ze=h(e,"P",{});var No=u(ze);ke=l(No,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),Te=h(No,"A",{href:!0,rel:!0});var Xl=u(Te);$a=l(Xl,"here"),Xl.forEach(t),va=l(No,". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),No.forEach(t),Wt=m(e),Pe=h(e,"H2",{class:!0});var Wo=u(Pe);Ye=h(Wo,"A",{id:!0,class:!0,href:!0});var Vl=u(Ye);it=h(Vl,"SPAN",{});var Kl=u(it);x(pt.$$.fragment,Kl),Kl.forEach(t),Vl.forEach(t),Ps=m(Wo),ae=h(Wo,"SPAN",{});var Zl=u(ae);ja=l(Zl,"Gathering the data"),Zl.forEach(t),Wo.forEach(t),It=m(e),ne=h(e,"P",{});var da=u(ne);xa=l(da,"Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),De=h(da,"A",{href:!0,rel:!0});var Jl=u(De);qa=l(Jl,"Transformers textbook"),Jl.forEach(t),Ea=l(da," to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),Gt=h(da,"CODE",{});var Ql=u(Gt);ct=l(Ql,"codeparrot"),Ql.forEach(t),Ds=l(da,", the authors built a dataset that they then shared on the "),ye=h(da,"A",{href:!0,rel:!0});var er=u(ye);za=l(er,"Hugging Face Hub"),er.forEach(t),Cs=l(da,"."),da.forEach(t),Xe=m(e),Ce=h(e,"P",{});var Io=u(Ce);Mt=l(Io,"However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),rs=h(Io,"CODE",{});var tr=u(rs);As=l(tr,"codeparrot"),tr.forEach(t),ht=l(Io," dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Io.forEach(t),is=m(e),x(ee.$$.fragment,e),Os=m(e),Ve=h(e,"P",{});var sr=u(Ve);Ta=l(sr,"Let\u2019s test it on two examples:"),sr.forEach(t),Fs=m(e),x($e.$$.fragment,e),Ls=m(e),x(ut.$$.fragment,e),ps=m(e),ve=h(e,"P",{});var ar=u(ve);Ns=l(ar,"We can use this to create a function that will stream the dataset and filter the elements we want:"),ar.forEach(t),dt=m(e),x(mt.$$.fragment,e),cs=m(e),je=h(e,"P",{});var nr=u(je);Ws=l(nr,"Then we can simply apply this function to the streaming dataset:"),nr.forEach(t),ft=m(e),x(_t.$$.fragment,e),hs=m(e),x(he.$$.fragment,e),us=m(e),xe=h(e,"P",{});var or=u(xe);Is=l(or,"This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),or.forEach(t),ue=m(e),Ht=h(e,"P",{});var lr=u(Ht);ds=l(lr,"Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),lr.forEach(t),Gs=m(e),x(gt.$$.fragment,e),St=m(e),x(wt.$$.fragment,e),Ms=m(e),x(Ae.$$.fragment,e),Ke=m(e),bt=h(e,"P",{});var rr=u(bt);oe=l(rr,"Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),rr.forEach(t),Hs=m(e),x(Oe.$$.fragment,e),Ss=m(e),x(kt.$$.fragment,e),Rt=m(e),Ze=h(e,"P",{});var Go=u(Ze);Pa=l(Go,"We can see that the "),yt=h(Go,"CODE",{});var ir=u(yt);Da=l(ir,"content"),ir.forEach(t),Ca=l(Go," field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),Go.forEach(t),ms=m(e),se=h(e,"H2",{class:!0});var Mo=u(se);Fe=h(Mo,"A",{id:!0,class:!0,href:!0});var pr=u(Fe);Le=h(pr,"SPAN",{});var cr=u(Le);x(Je.$$.fragment,cr),cr.forEach(t),pr.forEach(t),Bt=m(Mo),fs=h(Mo,"SPAN",{});var hr=u(fs);Rs=l(hr,"Preparing the dataset"),hr.forEach(t),Mo.forEach(t),Qe=m(e),x(et.$$.fragment,e),de=m(e),Ut=h(e,"P",{});var ur=u(Ut);_s=l(ur,"The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),ur.forEach(t),Bs=m(e),le=h(e,"P",{});var ma=u(le);gs=l(ma,"Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),ws=h(ma,"CODE",{});var dr=u(ws);Aa=l(dr,"return_overflowing_tokens"),dr.forEach(t),Us=l(ma," option to tokenize the whole input and split it into several chunks, as we did in "),Ne=h(ma,"A",{href:!0});var mr=u(Ne);Oa=l(mr,"Chapter 6"),mr.forEach(t),Ys=l(ma,". We\u2019ll also use the "),We=h(ma,"CODE",{});var fr=u(We);Xs=l(fr,"return_length"),fr.forEach(t),$t=l(ma," option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),ma.forEach(t),bs=m(e),re=h(e,"DIV",{class:!0});var _r=u(re);Yt=h(_r,"IMG",{src:!0,alt:!0}),_r.forEach(t),Ks=m(e),Xt=h(e,"P",{});var gr=u(Xt);Zs=l(gr,"Let\u2019s see exactly how this works by looking at the first two examples:"),gr.forEach(t),tt=m(e),x(st.$$.fragment,e),vt=m(e),x(jt.$$.fragment,e),ks=m(e),ie=h(e,"P",{});var Ho=u(ie);Js=l(Ho,"We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),Ie=h(Ho,"CODE",{});var wr=u(Ie);Qs=l(wr,"overflow_to_sample_mapping"),wr.forEach(t),a=l(Ho," field, we can also reconstruct which chunks belonged to which input samples."),Ho.forEach(t),y=m(e),me=h(e,"P",{});var fa=u(me);pn=l(fa,"With this operation we\u2019re using a handy feature of the "),ea=h(fa,"CODE",{});var br=u(ea);ta=l(br,"Dataset.map()"),br.forEach(t),cn=l(fa," function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),X=h(fa,"A",{href:!0});var kr=u(X);hn=l(kr,"section 3"),kr.forEach(t),un=l(fa,", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),sa=h(fa,"CODE",{});var yr=u(sa);dn=l(yr,"Dataset.map()"),yr.forEach(t),mn=l(fa," call:"),fa.forEach(t),Fa=m(e),x(Vt.$$.fragment,e),La=m(e),x(Kt.$$.fragment,e),Na=m(e),Ge=h(e,"P",{});var $r=u(Ge);fn=l($r,"We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),$r.forEach(t),Wa=m(e),ys=h(e,"P",{});var vr=u(ys);Zt=l(vr,"Now that we have the dataset ready, let\u2019s set up the model!"),vr.forEach(t),Ia=m(e),x(xt.$$.fragment,e),Ga=m(e),at=h(e,"H2",{class:!0});var So=u(at);fe=h(So,"A",{id:!0,class:!0,href:!0});var jr=u(fe);aa=h(jr,"SPAN",{});var xr=u(aa);x(Jt.$$.fragment,xr),xr.forEach(t),jr.forEach(t),_n=m(So),na=h(So,"SPAN",{});var qr=u(na);Qt=l(qr,"Initializing a new model"),qr.forEach(t),So.forEach(t),Ma=m(e),Me=h(e,"P",{});var In=u(Me);nt=l(In,"Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),oa=h(In,"CODE",{});var Er=u(oa);gn=l(Er,"bos"),Er.forEach(t),wn=l(In," and "),la=h(In,"CODE",{});var zr=u(la);es=l(zr,"eos"),zr.forEach(t),bn=l(In," (beginning and end of sequence) token IDs:"),In.forEach(t),Ha=m(e),pe.l(e),$s=m(e),He=h(e,"P",{});var Gn=u(He);Xo=l(Gn,"Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Rn=h(Gn,"CODE",{});var Tr=u(Rn);Vo=l(Tr,"DataCollatorForLanguageModeling"),Tr.forEach(t),Ko=l(Gn," collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Bn=h(Gn,"CODE",{});var Pr=u(Bn);Zo=l(Pr,"input_ids"),Pr.forEach(t),Jo=l(Gn,"."),Gn.forEach(t),ro=m(e),ts=h(e,"P",{});var Mn=u(ts);Qo=l(Mn,"Note that "),Un=h(Mn,"CODE",{});var Dr=u(Un);el=l(Dr,"DataCollatorForLanguageModeling"),Dr.forEach(t),tl=l(Mn," supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Yn=h(Mn,"CODE",{});var Cr=u(Yn);sl=l(Cr,"mlm=False"),Cr.forEach(t),al=l(Mn,":"),Mn.forEach(t),io=m(e),Et.l(e),kn=m(e),yn=h(e,"P",{});var Ar=u(yn);nl=l(Ar,"Let\u2019s have a look at an example:"),Ar.forEach(t),po=m(e),x(Sa.$$.fragment,e),co=m(e),Tt.l(e),$n=m(e),vn=h(e,"P",{});var Or=u(vn);ol=l(Or,"We can see that the examples have been stacked and all the tensors have the same shape."),Or.forEach(t),ho=m(e),Z&&Z.l(e),jn=m(e),x(ra.$$.fragment,e),uo=m(e),xn=h(e,"P",{});var Fr=u(xn);ll=l(Fr,"Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),Fr.forEach(t),mo=m(e),x(Ra.$$.fragment,e),fo=m(e),qn=h(e,"P",{});var Lr=u(qn);rl=l(Lr,"This will display a widget where you can enter your Hugging Face login credentials."),Lr.forEach(t),_o=m(e),En=h(e,"P",{});var Nr=u(En);il=l(Nr,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Nr.forEach(t),go=m(e),x(Ba.$$.fragment,e),wo=m(e),Dt.l(e),zn=m(e),x(ia.$$.fragment,e),bo=m(e),x(pa.$$.fragment,e),ko=m(e),vs=h(e,"H2",{class:!0});var Ro=u(vs);ca=h(Ro,"A",{id:!0,class:!0,href:!0});var Wr=u(ca);Xn=h(Wr,"SPAN",{});var Ir=u(Xn);x(Ua.$$.fragment,Ir),Ir.forEach(t),Wr.forEach(t),pl=m(Ro),Vn=h(Ro,"SPAN",{});var Gr=u(Vn);cl=l(Gr,"Code generation with a pipeline"),Gr.forEach(t),Ro.forEach(t),yo=m(e),ha=h(e,"P",{});var Bo=u(ha);hl=l(Bo,"Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),Kn=h(Bo,"CODE",{});var Mr=u(Kn);ul=l(Mr,"pipeline"),Mr.forEach(t),dl=l(Bo,", and we\u2019ll put it on the GPU for fast generations if there is one available:"),Bo.forEach(t),$o=m(e),At.l(e),Tn=m(e),Pn=h(e,"P",{});var Hr=u(Pn);ml=l(Hr,"Let\u2019s start with the simple task of creating a scatter plot:"),Hr.forEach(t),vo=m(e),x(Ya.$$.fragment,e),jo=m(e),x(Xa.$$.fragment,e),xo=m(e),ss=h(e,"P",{});var Hn=u(ss);fl=l(Hn,"The result looks correct. Does it also work for a "),Zn=h(Hn,"CODE",{});var Sr=u(Zn);_l=l(Sr,"pandas"),Sr.forEach(t),gl=l(Hn," operation? Let\u2019s see if we can create a "),Jn=h(Hn,"CODE",{});var Rr=u(Jn);wl=l(Rr,"DataFrame"),Rr.forEach(t),bl=l(Hn," from two arrays:"),Hn.forEach(t),qo=m(e),x(Va.$$.fragment,e),Eo=m(e),x(Ka.$$.fragment,e),zo=m(e),ot=h(e,"P",{});var _a=u(ot);kl=l(_a,"Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),Qn=h(_a,"CODE",{});var Br=u(Qn);yl=l(Br,"x"),Br.forEach(t),$l=l(_a," again. Since the number of generated tokens is limited, the following "),eo=h(_a,"CODE",{});var Ur=u(eo);vl=l(Ur,"for"),Ur.forEach(t),jl=l(_a," loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),to=h(_a,"CODE",{});var Yr=u(to);xl=l(Yr,"groupby"),Yr.forEach(t),ql=l(_a," operation:"),_a.forEach(t),To=m(e),x(Za.$$.fragment,e),Po=m(e),x(Ja.$$.fragment,e),Do=m(e),ua=h(e,"P",{});var Uo=u(ua);El=l(Uo,"Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),so=h(Uo,"CODE",{});var Xr=u(so);zl=l(Xr,"scikit-learn"),Xr.forEach(t),Tl=l(Uo," and set up a Random Forest model:"),Uo.forEach(t),Co=m(e),x(Qa.$$.fragment,e),Ao=m(e),x(en.$$.fragment,e),Oo=m(e),js.l(e),Dn=m(e),J&&J.l(e),Cn=Yo(),this.h()},h(){I(n,"name","hf:doc:metadata"),I(n,"content",JSON.stringify(Ai)),I(k,"id","training-a-causal-language-model-from-scratch"),I(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),I(k,"href","#training-a-causal-language-model-from-scratch"),I($,"class","relative group"),I(R,"href","/course/chapter1"),I(we,"href","/course/chapter6"),I(rt,"class","max-w-md"),I(ce,"class","w-full flex justify-center"),I(Te,"href","https://huggingface.co/huggingface-course/codeparrot-ds?text=plt.imshow%28"),I(Te,"rel","nofollow"),I(Ye,"id","gathering-the-data"),I(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),I(Ye,"href","#gathering-the-data"),I(Pe,"class","relative group"),I(De,"href","https://learning.oreilly.com/library/view/natural-language-processing/9781098103231/"),I(De,"rel","nofollow"),I(ye,"href","https://huggingface.co/datasets/transformersbook/codeparrot"),I(ye,"rel","nofollow"),I(Fe,"id","preparing-the-dataset"),I(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),I(Fe,"href","#preparing-the-dataset"),I(se,"class","relative group"),I(Ne,"href","/course/chapter6/4"),ai(Yt.src,Vs="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts.png")||I(Yt,"src",Vs),I(Yt,"alt","Chunking a large texts in several pieces."),I(re,"class","flex justify-center"),I(X,"href","/course/chapter7/3"),I(fe,"id","initializing-a-new-model"),I(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),I(fe,"href","#initializing-a-new-model"),I(at,"class","relative group"),I(ca,"id","code-generation-with-a-pipeline"),I(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),I(ca,"href","#code-generation-with-a-pipeline"),I(vs,"class","relative group")},m(e,p){s(Vr.head,n),r(e,f,p),q(i,e,p),r(e,_,p),r(e,$,p),s($,k),s(k,v),q(T,v,null),s($,z),s($,A),s(A,L),r(e,N,p),tn[g].m(e,p),r(e,W,p),r(e,M,p),s(M,G),s(M,R),s(R,Y),s(M,F),s(M,H),s(H,S),s(M,V),r(e,K,p),r(e,B,p),s(B,Q),s(B,te),s(te,O),s(B,U),s(B,Re),s(Re,Be),s(B,Ot),s(B,_e),s(_e,Ue),s(B,Ft),s(B,ns),s(ns,os),s(B,ka),r(e,xs,p),q(Ee,e,p),r(e,qs,p),r(e,ge,p),s(ge,Es),s(ge,we),s(we,zs),s(ge,lt),s(ge,Lt),s(Lt,Nt),s(ge,ya),r(e,ls,p),r(e,ce,p),s(ce,rt),q(be,rt,null),r(e,Ts,p),r(e,ze,p),s(ze,ke),s(ze,Te),s(Te,$a),s(ze,va),r(e,Wt,p),r(e,Pe,p),s(Pe,Ye),s(Ye,it),q(pt,it,null),s(Pe,Ps),s(Pe,ae),s(ae,ja),r(e,It,p),r(e,ne,p),s(ne,xa),s(ne,De),s(De,qa),s(ne,Ea),s(ne,Gt),s(Gt,ct),s(ne,Ds),s(ne,ye),s(ye,za),s(ne,Cs),r(e,Xe,p),r(e,Ce,p),s(Ce,Mt),s(Ce,rs),s(rs,As),s(Ce,ht),r(e,is,p),q(ee,e,p),r(e,Os,p),r(e,Ve,p),s(Ve,Ta),r(e,Fs,p),q($e,e,p),r(e,Ls,p),q(ut,e,p),r(e,ps,p),r(e,ve,p),s(ve,Ns),r(e,dt,p),q(mt,e,p),r(e,cs,p),r(e,je,p),s(je,Ws),r(e,ft,p),q(_t,e,p),r(e,hs,p),q(he,e,p),r(e,us,p),r(e,xe,p),s(xe,Is),r(e,ue,p),r(e,Ht,p),s(Ht,ds),r(e,Gs,p),q(gt,e,p),r(e,St,p),q(wt,e,p),r(e,Ms,p),q(Ae,e,p),r(e,Ke,p),r(e,bt,p),s(bt,oe),r(e,Hs,p),q(Oe,e,p),r(e,Ss,p),q(kt,e,p),r(e,Rt,p),r(e,Ze,p),s(Ze,Pa),s(Ze,yt),s(yt,Da),s(Ze,Ca),r(e,ms,p),r(e,se,p),s(se,Fe),s(Fe,Le),q(Je,Le,null),s(se,Bt),s(se,fs),s(fs,Rs),r(e,Qe,p),q(et,e,p),r(e,de,p),r(e,Ut,p),s(Ut,_s),r(e,Bs,p),r(e,le,p),s(le,gs),s(le,ws),s(ws,Aa),s(le,Us),s(le,Ne),s(Ne,Oa),s(le,Ys),s(le,We),s(We,Xs),s(le,$t),r(e,bs,p),r(e,re,p),s(re,Yt),r(e,Ks,p),r(e,Xt,p),s(Xt,Zs),r(e,tt,p),q(st,e,p),r(e,vt,p),q(jt,e,p),r(e,ks,p),r(e,ie,p),s(ie,Js),s(ie,Ie),s(Ie,Qs),s(ie,a),r(e,y,p),r(e,me,p),s(me,pn),s(me,ea),s(ea,ta),s(me,cn),s(me,X),s(X,hn),s(me,un),s(me,sa),s(sa,dn),s(me,mn),r(e,Fa,p),q(Vt,e,p),r(e,La,p),q(Kt,e,p),r(e,Na,p),r(e,Ge,p),s(Ge,fn),r(e,Wa,p),r(e,ys,p),s(ys,Zt),r(e,Ia,p),q(xt,e,p),r(e,Ga,p),r(e,at,p),s(at,fe),s(fe,aa),q(Jt,aa,null),s(at,_n),s(at,na),s(na,Qt),r(e,Ma,p),r(e,Me,p),s(Me,nt),s(Me,oa),s(oa,gn),s(Me,wn),s(Me,la),s(la,es),s(Me,bn),r(e,Ha,p),sn[qe].m(e,p),r(e,$s,p),r(e,He,p),s(He,Xo),s(He,Rn),s(Rn,Vo),s(He,Ko),s(He,Bn),s(Bn,Zo),s(He,Jo),r(e,ro,p),r(e,ts,p),s(ts,Qo),s(ts,Un),s(Un,el),s(ts,tl),s(ts,Yn),s(Yn,sl),s(ts,al),r(e,io,p),an[qt].m(e,p),r(e,kn,p),r(e,yn,p),s(yn,nl),r(e,po,p),q(Sa,e,p),r(e,co,p),nn[zt].m(e,p),r(e,$n,p),r(e,vn,p),s(vn,ol),r(e,ho,p),Z&&Z.m(e,p),r(e,jn,p),q(ra,e,p),r(e,uo,p),r(e,xn,p),s(xn,ll),r(e,mo,p),q(Ra,e,p),r(e,fo,p),r(e,qn,p),s(qn,rl),r(e,_o,p),r(e,En,p),s(En,il),r(e,go,p),q(Ba,e,p),r(e,wo,p),on[Pt].m(e,p),r(e,zn,p),q(ia,e,p),r(e,bo,p),q(pa,e,p),r(e,ko,p),r(e,vs,p),s(vs,ca),s(ca,Xn),q(Ua,Xn,null),s(vs,pl),s(vs,Vn),s(Vn,cl),r(e,yo,p),r(e,ha,p),s(ha,hl),s(ha,Kn),s(Kn,ul),s(ha,dl),r(e,$o,p),ln[Ct].m(e,p),r(e,Tn,p),r(e,Pn,p),s(Pn,ml),r(e,vo,p),q(Ya,e,p),r(e,jo,p),q(Xa,e,p),r(e,xo,p),r(e,ss,p),s(ss,fl),s(ss,Zn),s(Zn,_l),s(ss,gl),s(ss,Jn),s(Jn,wl),s(ss,bl),r(e,qo,p),q(Va,e,p),r(e,Eo,p),q(Ka,e,p),r(e,zo,p),r(e,ot,p),s(ot,kl),s(ot,Qn),s(Qn,yl),s(ot,$l),s(ot,eo),s(eo,vl),s(ot,jl),s(ot,to),s(to,xl),s(ot,ql),r(e,To,p),q(Za,e,p),r(e,Po,p),q(Ja,e,p),r(e,Do,p),r(e,ua,p),s(ua,El),s(ua,so),s(so,zl),s(ua,Tl),r(e,Co,p),q(Qa,e,p),r(e,Ao,p),q(en,e,p),r(e,Oo,p),js.m(e,p),r(e,Dn,p),J&&J.m(e,p),r(e,Cn,p),Fo=!0},p(e,[p]){const rn={};p&1&&(rn.fw=e[0]),i.$set(rn);let An=g;g=Cl(e),g!==An&&(wa(),b(tn[An],1,1,()=>{tn[An]=null}),ga(),P=tn[g],P||(P=tn[g]=Dl[g](e),P.c()),w(P,1),P.m(W.parentNode,W));const ao={};p&4&&(ao.$$scope={dirty:p,ctx:e}),Ae.$set(ao);const no={};p&4&&(no.$$scope={dirty:p,ctx:e}),xt.$set(no);let as=qe;qe=Ol(e),qe!==as&&(wa(),b(sn[as],1,1,()=>{sn[as]=null}),ga(),pe=sn[qe],pe||(pe=sn[qe]=Al[qe](e),pe.c()),w(pe,1),pe.m($s.parentNode,$s));let On=qt;qt=Ll(e),qt!==On&&(wa(),b(an[On],1,1,()=>{an[On]=null}),ga(),Et=an[qt],Et||(Et=an[qt]=Fl[qt](e),Et.c()),w(Et,1),Et.m(kn.parentNode,kn));let Fn=zt;zt=Wl(e),zt!==Fn&&(wa(),b(nn[Fn],1,1,()=>{nn[Fn]=null}),ga(),Tt=nn[zt],Tt||(Tt=nn[zt]=Nl[zt](e),Tt.c()),w(Tt,1),Tt.m($n.parentNode,$n)),e[0]==="tf"?Z?p&1&&w(Z,1):(Z=Kr(),Z.c(),w(Z,1),Z.m(jn.parentNode,jn)):Z&&(wa(),b(Z,1,1,()=>{Z=null}),ga());const Se={};p&4&&(Se.$$scope={dirty:p,ctx:e}),ra.$set(Se);let Ln=Pt;Pt=Gl(e),Pt!==Ln&&(wa(),b(on[Ln],1,1,()=>{on[Ln]=null}),ga(),Dt=on[Pt],Dt||(Dt=on[Pt]=Il[Pt](e),Dt.c()),w(Dt,1),Dt.m(zn.parentNode,zn));const oo={};p&4&&(oo.$$scope={dirty:p,ctx:e}),ia.$set(oo);const lo={};p&5&&(lo.$$scope={dirty:p,ctx:e}),pa.$set(lo);let Nn=Ct;Ct=Hl(e),Ct!==Nn&&(wa(),b(ln[Nn],1,1,()=>{ln[Nn]=null}),ga(),At=ln[Ct],At||(At=ln[Ct]=Ml[Ct](e),At.c()),w(At,1),At.m(Tn.parentNode,Tn)),Lo!==(Lo=Sl(e))&&(js.d(1),js=Lo(e),js&&(js.c(),js.m(Dn.parentNode,Dn))),e[0]==="pt"?J?p&1&&w(J,1):(J=Zr(e),J.c(),w(J,1),J.m(Cn.parentNode,Cn)):J&&(wa(),b(J,1,1,()=>{J=null}),ga())},i(e){Fo||(w(i.$$.fragment,e),w(T.$$.fragment,e),w(P),w(Ee.$$.fragment,e),w(be.$$.fragment,e),w(pt.$$.fragment,e),w(ee.$$.fragment,e),w($e.$$.fragment,e),w(ut.$$.fragment,e),w(mt.$$.fragment,e),w(_t.$$.fragment,e),w(he.$$.fragment,e),w(gt.$$.fragment,e),w(wt.$$.fragment,e),w(Ae.$$.fragment,e),w(Oe.$$.fragment,e),w(kt.$$.fragment,e),w(Je.$$.fragment,e),w(et.$$.fragment,e),w(st.$$.fragment,e),w(jt.$$.fragment,e),w(Vt.$$.fragment,e),w(Kt.$$.fragment,e),w(xt.$$.fragment,e),w(Jt.$$.fragment,e),w(pe),w(Et),w(Sa.$$.fragment,e),w(Tt),w(Z),w(ra.$$.fragment,e),w(Ra.$$.fragment,e),w(Ba.$$.fragment,e),w(Dt),w(ia.$$.fragment,e),w(pa.$$.fragment,e),w(Ua.$$.fragment,e),w(At),w(Ya.$$.fragment,e),w(Xa.$$.fragment,e),w(Va.$$.fragment,e),w(Ka.$$.fragment,e),w(Za.$$.fragment,e),w(Ja.$$.fragment,e),w(Qa.$$.fragment,e),w(en.$$.fragment,e),w(J),Fo=!0)},o(e){b(i.$$.fragment,e),b(T.$$.fragment,e),b(P),b(Ee.$$.fragment,e),b(be.$$.fragment,e),b(pt.$$.fragment,e),b(ee.$$.fragment,e),b($e.$$.fragment,e),b(ut.$$.fragment,e),b(mt.$$.fragment,e),b(_t.$$.fragment,e),b(he.$$.fragment,e),b(gt.$$.fragment,e),b(wt.$$.fragment,e),b(Ae.$$.fragment,e),b(Oe.$$.fragment,e),b(kt.$$.fragment,e),b(Je.$$.fragment,e),b(et.$$.fragment,e),b(st.$$.fragment,e),b(jt.$$.fragment,e),b(Vt.$$.fragment,e),b(Kt.$$.fragment,e),b(xt.$$.fragment,e),b(Jt.$$.fragment,e),b(pe),b(Et),b(Sa.$$.fragment,e),b(Tt),b(Z),b(ra.$$.fragment,e),b(Ra.$$.fragment,e),b(Ba.$$.fragment,e),b(Dt),b(ia.$$.fragment,e),b(pa.$$.fragment,e),b(Ua.$$.fragment,e),b(At),b(Ya.$$.fragment,e),b(Xa.$$.fragment,e),b(Va.$$.fragment,e),b(Ka.$$.fragment,e),b(Za.$$.fragment,e),b(Ja.$$.fragment,e),b(Qa.$$.fragment,e),b(en.$$.fragment,e),b(J),Fo=!1},d(e){t(n),e&&t(f),E(i,e),e&&t(_),e&&t($),E(T),e&&t(N),tn[g].d(e),e&&t(W),e&&t(M),e&&t(K),e&&t(B),e&&t(xs),E(Ee,e),e&&t(qs),e&&t(ge),e&&t(ls),e&&t(ce),E(be),e&&t(Ts),e&&t(ze),e&&t(Wt),e&&t(Pe),E(pt),e&&t(It),e&&t(ne),e&&t(Xe),e&&t(Ce),e&&t(is),E(ee,e),e&&t(Os),e&&t(Ve),e&&t(Fs),E($e,e),e&&t(Ls),E(ut,e),e&&t(ps),e&&t(ve),e&&t(dt),E(mt,e),e&&t(cs),e&&t(je),e&&t(ft),E(_t,e),e&&t(hs),E(he,e),e&&t(us),e&&t(xe),e&&t(ue),e&&t(Ht),e&&t(Gs),E(gt,e),e&&t(St),E(wt,e),e&&t(Ms),E(Ae,e),e&&t(Ke),e&&t(bt),e&&t(Hs),E(Oe,e),e&&t(Ss),E(kt,e),e&&t(Rt),e&&t(Ze),e&&t(ms),e&&t(se),E(Je),e&&t(Qe),E(et,e),e&&t(de),e&&t(Ut),e&&t(Bs),e&&t(le),e&&t(bs),e&&t(re),e&&t(Ks),e&&t(Xt),e&&t(tt),E(st,e),e&&t(vt),E(jt,e),e&&t(ks),e&&t(ie),e&&t(y),e&&t(me),e&&t(Fa),E(Vt,e),e&&t(La),E(Kt,e),e&&t(Na),e&&t(Ge),e&&t(Wa),e&&t(ys),e&&t(Ia),E(xt,e),e&&t(Ga),e&&t(at),E(Jt),e&&t(Ma),e&&t(Me),e&&t(Ha),sn[qe].d(e),e&&t($s),e&&t(He),e&&t(ro),e&&t(ts),e&&t(io),an[qt].d(e),e&&t(kn),e&&t(yn),e&&t(po),E(Sa,e),e&&t(co),nn[zt].d(e),e&&t($n),e&&t(vn),e&&t(ho),Z&&Z.d(e),e&&t(jn),E(ra,e),e&&t(uo),e&&t(xn),e&&t(mo),E(Ra,e),e&&t(fo),e&&t(qn),e&&t(_o),e&&t(En),e&&t(go),E(Ba,e),e&&t(wo),on[Pt].d(e),e&&t(zn),E(ia,e),e&&t(bo),E(pa,e),e&&t(ko),e&&t(vs),E(Ua),e&&t(yo),e&&t(ha),e&&t($o),ln[Ct].d(e),e&&t(Tn),e&&t(Pn),e&&t(vo),E(Ya,e),e&&t(jo),E(Xa,e),e&&t(xo),e&&t(ss),e&&t(qo),E(Va,e),e&&t(Eo),E(Ka,e),e&&t(zo),e&&t(ot),e&&t(To),E(Za,e),e&&t(Po),E(Ja,e),e&&t(Do),e&&t(ua),e&&t(Co),E(Qa,e),e&&t(Ao),E(en,e),e&&t(Oo),js.d(e),e&&t(Dn),J&&J.d(e),e&&t(Cn)}}}const Ai={local:"training-a-causal-language-model-from-scratch",sections:[{local:"gathering-the-data",title:"Gathering the data"},{local:"preparing-the-dataset",title:"Preparing the dataset"},{local:"initializing-a-new-model",title:"Initializing a new model"},{local:"code-generation-with-a-pipeline",title:"Code generation with a pipeline"},{local:"training-with-accelerate",title:"Training with \u{1F917} Accelerate"}],title:"Training a causal language model from scratch"};function Oi(C,n,f){let i="pt";return ni(()=>{const $=new URL(document.location).searchParams;f(0,i=$.get("fw")||"pt")}),[i,{id:"huggingface-course/codeparrot-ds",pipeline_tag:"text-generation",branch:"main",widgetData:[{text:"plt.imshow("}],"model-index":null,pwcLink:{error:"Unknown error, can't generate link to Papers With Code."}}]}class Si extends Qr{constructor(n){super();ei(this,n,Oi,Ci,ti,{})}}export{Si as default,Ai as metadata};
