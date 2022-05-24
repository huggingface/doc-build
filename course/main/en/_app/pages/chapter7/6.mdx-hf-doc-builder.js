import{S as Qr,i as ei,s as ti,e as c,t as o,k as d,w as j,c as h,a as u,h as l,d as t,m,x,g as r,G as s,y as q,q as w,o as b,B as E,b as F,l as Vo,M as si,N as Al,p as ma,v as ai,n as fa}from"../../chunks/vendor-hf-doc-builder.js";import{T as _a}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Ol}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Bn}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as D}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Jr}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as ni}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function oi(A){let n,f;return n=new Jr({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section6_tf.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function li(A){let n,f;return n=new Jr({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section6_pt.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ri(A){let n,f;return{c(){n=c("p"),f=o("Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!"),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function ii(A){let n,f,i,_,$,k,v,T,z,C,L,W,g,P;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=c("code"),v=o("eos_token_id"),T=o(" token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=c("code"),C=o("tokenize()"),L=o(" function to make use of that approach. Note that you\u2019ll want to set "),W=c("code"),g=o("truncation=False"),P=o(" and remove the other arguments from the tokenizer to get the full sequence of token IDs.")},l(I){n=h(I,"P",{});var M=u(n);f=l(M,"\u270F\uFE0F "),i=h(M,"STRONG",{});var G=u(i);_=l(G,"Try it out!"),G.forEach(t),$=l(M," Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=h(M,"CODE",{});var R=u(k);v=l(R,"eos_token_id"),R.forEach(t),T=l(M," token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=h(M,"CODE",{});var Y=u(z);C=l(Y,"tokenize()"),Y.forEach(t),L=l(M," function to make use of that approach. Note that you\u2019ll want to set "),W=h(M,"CODE",{});var N=u(W);g=l(N,"truncation=False"),N.forEach(t),P=l(M," and remove the other arguments from the tokenizer to get the full sequence of token IDs."),M.forEach(t)},m(I,M){r(I,n,M),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,C),s(n,L),s(n,W),s(W,g),s(n,P)},d(I){I&&t(n)}}}function pi(A){let n,f,i,_,$,k,v,T,z,C,L,W;return n=new D({props:{code:`from transformers import AutoTokenizer, TFGPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    "gpt2",
    vocab_size=len(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    <span class="hljs-string">&quot;gpt2&quot;</span>,
    vocab_size=<span class="hljs-built_in">len</span>(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
)`}}),z=new D({props:{code:`model = TFGPT2LMHeadModel(config)
model(model.dummy_inputs)  # Builds the model
model.summary()`,highlighted:`model = TFGPT2LMHeadModel(config)
model(model.dummy_inputs)  <span class="hljs-comment"># Builds the model</span>
model.summary()`}}),L=new D({props:{code:`_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
transformer (TFGPT2MainLayer multiple                  124242432 
=================================================================
Total params: 124,242,432
Trainable params: 124,242,432
Non-trainable params: 0
_________________________________________________________________`,highlighted:`_________________________________________________________________
Layer (<span class="hljs-built_in">type</span>)                 Output Shape              Param <span class="hljs-comment">#   </span>
=================================================================
transformer (TFGPT2MainLayer multiple                  <span class="hljs-number">124242432</span> 
=================================================================
Total params: <span class="hljs-number">124</span>,<span class="hljs-number">242</span>,<span class="hljs-number">432</span>
Trainable params: <span class="hljs-number">124</span>,<span class="hljs-number">242</span>,<span class="hljs-number">432</span>
Non-trainable params: <span class="hljs-number">0</span>
_________________________________________________________________`}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),C=d(),j(L.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var I=u($);k=l(I,"from_pretrained()"),I.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),C=m(g),x(L.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,C,P),q(L,g,P),W=!0},i(g){W||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(L.$$.fragment,g),W=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(L.$$.fragment,g),W=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(C),E(L,g)}}}function ci(A){let n,f,i,_,$,k,v,T,z,C,L,W;return n=new D({props:{code:`from transformers import AutoTokenizer, GPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    "gpt2",
    vocab_size=len(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2LMHeadModel, AutoConfig

config = AutoConfig.from_pretrained(
    <span class="hljs-string">&quot;gpt2&quot;</span>,
    vocab_size=<span class="hljs-built_in">len</span>(tokenizer),
    n_ctx=context_length,
    bos_token_id=tokenizer.bos_token_id,
    eos_token_id=tokenizer.eos_token_id,
)`}}),z=new D({props:{code:`model = GPT2LMHeadModel(config)
model_size = sum(t.numel() for t in model.parameters())
print(f"GPT-2 size: {model_size/1000**2:.1f}M parameters")`,highlighted:`model = GPT2LMHeadModel(config)
model_size = <span class="hljs-built_in">sum</span>(t.numel() <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> model.parameters())
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;GPT-2 size: <span class="hljs-subst">{model_size/<span class="hljs-number">1000</span>**<span class="hljs-number">2</span>:<span class="hljs-number">.1</span>f}</span>M parameters&quot;</span>)`}}),L=new D({props:{code:"GPT-2 size: 124.2M parameters",highlighted:'GPT-<span class="hljs-number">2</span> size: <span class="hljs-number">124.2</span>M parameters'}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),C=d(),j(L.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var I=u($);k=l(I,"from_pretrained()"),I.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),C=m(g),x(L.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,C,P),q(L,g,P),W=!0},i(g){W||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(L.$$.fragment,g),W=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(L.$$.fragment,g),W=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(C),E(L,g)}}}function hi(A){let n,f;return n=new D({props:{code:`from transformers import DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ui(A){let n,f;return n=new D({props:{code:`from transformers import DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=<span class="hljs-literal">False</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function di(A){let n,f;return n=new D({props:{code:`input_ids shape: (5, 128)
attention_mask shape: (5, 128)
labels shape: (5, 128)`,highlighted:`input_ids shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)
attention_mask shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)
labels shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function mi(A){let n,f;return n=new D({props:{code:`input_ids shape: torch.Size([5, 128])
attention_mask shape: torch.Size([5, 128])
labels shape: torch.Size([5, 128])`,highlighted:`input_ids shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])
attention_mask shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])
labels shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function Vr(A){let n,f,i,_,$,k,v,T;return v=new D({props:{code:`tf_train_dataset = tokenized_dataset["train"].to_tf_dataset(
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
)`,highlighted:`tf_train_dataset = tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
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
)`}}),{c(){n=c("p"),f=o("Now we can use the "),i=c("code"),_=o("to_tf_dataset()"),$=o(" method to convert our datasets to TensorFlow datasets with the data collator we created above:"),k=d(),j(v.$$.fragment)},l(z){n=h(z,"P",{});var C=u(n);f=l(C,"Now we can use the "),i=h(C,"CODE",{});var L=u(i);_=l(L,"to_tf_dataset()"),L.forEach(t),$=l(C," method to convert our datasets to TensorFlow datasets with the data collator we created above:"),C.forEach(t),k=m(z),x(v.$$.fragment,z)},m(z,C){r(z,n,C),s(n,f),s(n,i),s(i,_),s(n,$),r(z,k,C),q(v,z,C),T=!0},i(z){T||(w(v.$$.fragment,z),T=!0)},o(z){b(v.$$.fragment,z),T=!1},d(z){z&&t(n),z&&t(k),E(v,z)}}}function fi(A){let n,f;return{c(){n=c("p"),f=o("\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function _i(A){let n,f,i,_,$,k,v,T,z,C,L,W,g,P,I,M,G,R,Y;return C=new D({props:{code:`from transformers import create_optimizer
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
tf.keras.mixed_precision.set_global_policy("mixed_float16")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
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
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),R=new D({props:{code:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="codeparrot-ds", tokenizer=tokenizer)

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;codeparrot-ds&quot;</span>, tokenizer=tokenizer)

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])`}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training hyperparameters and call "),i=c("code"),_=o("compile()"),$=o(" and "),k=c("code"),v=o("fit()"),T=o(". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),z=d(),j(C.$$.fragment),L=d(),W=c("p"),g=o("Now we can just call "),P=c("code"),I=o("model.fit()"),M=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),G=d(),j(R.$$.fragment)},l(N){n=h(N,"P",{});var H=u(n);f=l(H,"All that\u2019s left to do is configure the training hyperparameters and call "),i=h(H,"CODE",{});var S=u(i);_=l(S,"compile()"),S.forEach(t),$=l(H," and "),k=h(H,"CODE",{});var V=u(k);v=l(V,"fit()"),V.forEach(t),T=l(H,". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),H.forEach(t),z=m(N),x(C.$$.fragment,N),L=m(N),W=h(N,"P",{});var Z=u(W);g=l(Z,"Now we can just call "),P=h(Z,"CODE",{});var B=u(P);I=l(B,"model.fit()"),B.forEach(t),M=l(Z," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),Z.forEach(t),G=m(N),x(R.$$.fragment,N)},m(N,H){r(N,n,H),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),r(N,z,H),q(C,N,H),r(N,L,H),r(N,W,H),s(W,g),s(W,P),s(P,I),s(W,M),r(N,G,H),q(R,N,H),Y=!0},i(N){Y||(w(C.$$.fragment,N),w(R.$$.fragment,N),Y=!0)},o(N){b(C.$$.fragment,N),b(R.$$.fragment,N),Y=!1},d(N){N&&t(n),N&&t(z),E(C,N),N&&t(L),N&&t(W),N&&t(G),E(R,N)}}}function gi(A){let n,f,i,_,$,k,v,T,z,C,L,W,g,P,I,M,G,R,Y,N,H,S,V,Z,B,ee,ae;return g=new D({props:{code:`from transformers import Trainer, TrainingArguments

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
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer, TrainingArguments

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
)`}}),H=new D({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),ee=new D({props:{code:"trainer.push_to_hub()",highlighted:"trainer.push_to_hub()"}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training arguments and fire up the "),i=c("code"),_=o("Trainer"),$=o(". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=c("code"),v=o("per_device_train_batch_size"),T=o(" * "),z=c("code"),C=o("gradient_accumulation_steps"),L=o("). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),W=d(),j(g.$$.fragment),P=d(),I=c("p"),M=o("Now we can just start the "),G=c("code"),R=o("Trainer"),Y=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),N=d(),j(H.$$.fragment),S=d(),V=c("p"),Z=o("After training completes, we can push the model and tokenizer to the Hub:"),B=d(),j(ee.$$.fragment)},l(O){n=h(O,"P",{});var U=u(n);f=l(U,"All that\u2019s left to do is configure the training arguments and fire up the "),i=h(U,"CODE",{});var We=u(i);_=l(We,"Trainer"),We.forEach(t),$=l(U,". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=h(U,"CODE",{});var Ie=u(k);v=l(Ie,"per_device_train_batch_size"),Ie.forEach(t),T=l(U," * "),z=h(U,"CODE",{});var Ot=u(z);C=l(Ot,"gradient_accumulation_steps"),Ot.forEach(t),L=l(U,"). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),U.forEach(t),W=m(O),x(g.$$.fragment,O),P=m(O),I=h(O,"P",{});var we=u(I);M=l(we,"Now we can just start the "),G=h(we,"CODE",{});var Ge=u(G);R=l(Ge,"Trainer"),Ge.forEach(t),Y=l(we," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),we.forEach(t),N=m(O),x(H.$$.fragment,O),S=m(O),V=h(O,"P",{});var Ft=u(V);Z=l(Ft,"After training completes, we can push the model and tokenizer to the Hub:"),Ft.forEach(t),B=m(O),x(ee.$$.fragment,O)},m(O,U){r(O,n,U),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,C),s(n,L),r(O,W,U),q(g,O,U),r(O,P,U),r(O,I,U),s(I,M),s(I,G),s(G,R),s(I,Y),r(O,N,U),q(H,O,U),r(O,S,U),r(O,V,U),s(V,Z),r(O,B,U),q(ee,O,U),ae=!0},i(O){ae||(w(g.$$.fragment,O),w(H.$$.fragment,O),w(ee.$$.fragment,O),ae=!0)},o(O){b(g.$$.fragment,O),b(H.$$.fragment,O),b(ee.$$.fragment,O),ae=!1},d(O){O&&t(n),O&&t(W),E(g,O),O&&t(P),O&&t(I),O&&t(N),E(H,O),O&&t(S),O&&t(V),O&&t(B),E(ee,O)}}}function wi(A){let n,f,i,_,$,k,v,T;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" It only took us about 30 lines of code in addition to the "),k=c("code"),v=o("TrainingArguments"),T=o(" to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!")},l(z){n=h(z,"P",{});var C=u(n);f=l(C,"\u270F\uFE0F "),i=h(C,"STRONG",{});var L=u(i);_=l(L,"Try it out!"),L.forEach(t),$=l(C," It only took us about 30 lines of code in addition to the "),k=h(C,"CODE",{});var W=u(k);v=l(W,"TrainingArguments"),W.forEach(t),T=l(C," to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!"),C.forEach(t)},m(z,C){r(z,n,C),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T)},d(z){z&&t(n)}}}function bi(A){let n,f,i,_,$,k,v,T,z,C,L,W,g,P,I,M,G,R,Y,N;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=c("code"),_=o("MirroredStrategy"),$=o(" context to substantially speed up training. You\u2019ll need to create a "),k=c("code"),v=o("tf.distribute.MirroredStrategy"),T=o(" object, and make sure that the "),z=c("code"),C=o("to_tf_dataset"),L=o(" commands as well as model creation and the call to "),W=c("code"),g=o("fit()"),P=o(" are all run in its "),I=c("code"),M=o("scope()"),G=o(" context. You can see documentation on this "),R=c("a"),Y=o("here"),N=o("."),this.h()},l(H){n=h(H,"P",{});var S=u(n);f=l(S,"\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=h(S,"CODE",{});var V=u(i);_=l(V,"MirroredStrategy"),V.forEach(t),$=l(S," context to substantially speed up training. You\u2019ll need to create a "),k=h(S,"CODE",{});var Z=u(k);v=l(Z,"tf.distribute.MirroredStrategy"),Z.forEach(t),T=l(S," object, and make sure that the "),z=h(S,"CODE",{});var B=u(z);C=l(B,"to_tf_dataset"),B.forEach(t),L=l(S," commands as well as model creation and the call to "),W=h(S,"CODE",{});var ee=u(W);g=l(ee,"fit()"),ee.forEach(t),P=l(S," are all run in its "),I=h(S,"CODE",{});var ae=u(I);M=l(ae,"scope()"),ae.forEach(t),G=l(S," context. You can see documentation on this "),R=h(S,"A",{href:!0,rel:!0});var O=u(R);Y=l(O,"here"),O.forEach(t),N=l(S,"."),S.forEach(t),this.h()},h(){F(R,"href","https://www.tensorflow.org/guide/distributed_training#use_tfdistributestrategy_with_keras_modelfit"),F(R,"rel","nofollow")},m(H,S){r(H,n,S),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,C),s(n,L),s(n,W),s(W,g),s(n,P),s(n,I),s(I,M),s(n,G),s(n,R),s(R,Y),s(n,N)},d(H){H&&t(n)}}}function ki(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=c("code"),_=o("Trainer"),$=o(" automatically manages multiple machines, and this can speed up training tremendously.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," automatically manages multiple machines, and this can speed up training tremendously."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function yi(A){let n;function f($,k){return $[0]==="pt"?ki:bi}let i=f(A),_=i(A);return{c(){_.c(),n=Vo()},l($){_.l($),n=Vo()},m($,k){_.m($,k),r($,n,k)},p($,k){i!==(i=f($))&&(_.d(1),_=i($),_&&(_.c(),_.m(n.parentNode,n)))},d($){_.d($),$&&t(n)}}}function $i(A){let n,f;return n=new D({props:{code:`from transformers import pipeline

course_model = TFGPT2LMHeadModel.from_pretrained("huggingface-course/codeparrot-ds")
course_tokenizer = AutoTokenizer.from_pretrained("huggingface-course/codeparrot-ds")
pipe = pipeline(
    "text-generation", model=course_model, tokenizer=course_tokenizer, device=0
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

course_model = TFGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>)
course_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>)
pipe = pipeline(
    <span class="hljs-string">&quot;text-generation&quot;</span>, model=course_model, tokenizer=course_tokenizer, device=<span class="hljs-number">0</span>
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function vi(A){let n,f;return n=new D({props:{code:`import torch
from transformers import pipeline

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
pipe = pipeline(
    "text-generation", model="huggingface-course/codeparrot-ds", device=device
)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
pipe = pipeline(
    <span class="hljs-string">&quot;text-generation&quot;</span>, model=<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>, device=device
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ji(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=c("code"),_=o("Trainer"),$=o(" and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function xi(A){let n,f;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function Zr(A){let n,f,i,_,$,k,v,T,z,C,L,W,g,P,I,M,G,R,Y,N,H,S,V,Z,B,ee,ae,O,U,We,Ie,Ot,we,Ge,Ft,ts,ss,ga,zs,Ce,Ts,be,Ps,ke,Ds,et,Nt,Lt,wa,as,K,ba,tt,Me,Cs,te,ns,ka,As,ue,He,os,Ae,ya,Wt,ye,Os,se,$a,st,ls,va,rs,Fs,at,Se,It,ja,is,re,Ns,Re,xa,Ls,Be,Ue,de,Gt,ps,Ws,nt,ot,lt,Is,rt,it,cs,$e,Gs,pt,ct,hs,ve,Ms,Ye,Xe,ht,ut,us,ne,qa,Mt,dt,Hs,Oe,Ss,Ke,ds,je,Rs,oe,mt,Ht,ft,Bs,xe,Ea,ms,fs,za,Us,qe,ie,St,me,Ys,Ve,Ta,_s,fe,gs,le,Pa,Rt,pe,Da,_t,Ca,Aa,gt,Bt,Oa,Ut,wt,Xs,Ze,Ee,ce,on,ws,bt,ln,bs,ze,Ks,kt,yt,ks,_e,ys,he,Vs;return _=new Bn({}),I=new Ol({props:{id:"Hm8_PgVTFuc"}}),ke=new D({props:{code:`keytoken_ids = []
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
        print(f"Keyword has not single token: {keyword}")`,highlighted:`keytoken_ids = []
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Keyword has not single token: <span class="hljs-subst">{keyword}</span>&quot;</span>)`}}),et=new D({props:{code:"'Keyword has not single token: testtest'",highlighted:'<span class="hljs-string">&#x27;Keyword has not single token: testtest&#x27;</span>'}}),K=new D({props:{code:`from torch.nn import CrossEntropyLoss
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
    return weighted_loss`,highlighted:`<span class="hljs-keyword">from</span> torch.nn <span class="hljs-keyword">import</span> CrossEntropyLoss
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
    <span class="hljs-keyword">return</span> weighted_loss`}}),at=new D({props:{code:`from torch.utils.data.dataloader import DataLoader

tokenized_dataset.set_format("torch")
train_dataloader = DataLoader(tokenized_dataset["train"], batch_size=32, shuffle=True)
eval_dataloader = DataLoader(tokenized_dataset["valid"], batch_size=32)`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data.dataloader <span class="hljs-keyword">import</span> DataLoader

tokenized_dataset.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
train_dataloader = DataLoader(tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>], batch_size=<span class="hljs-number">32</span>, shuffle=<span class="hljs-literal">True</span>)
eval_dataloader = DataLoader(tokenized_dataset[<span class="hljs-string">&quot;valid&quot;</span>], batch_size=<span class="hljs-number">32</span>)`}}),re=new D({props:{code:`weight_decay = 0.1


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
    ]`,highlighted:`weight_decay = <span class="hljs-number">0.1</span>


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
    ]`}}),Be=new D({props:{code:`def evaluate():
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
    return loss.item(), perplexity.item()`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">evaluate</span>():
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
    <span class="hljs-keyword">return</span> loss.item(), perplexity.item()`}}),it=new D({props:{code:"model = GPT2LMHeadModel(config)",highlighted:"model = GPT2LMHeadModel(config)"}}),ct=new D({props:{code:`from torch.optim import AdamW

optimizer = AdamW(get_grouped_params(model), lr=5e-4)`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(get_grouped_params(model), lr=<span class="hljs-number">5e-4</span>)`}}),Xe=new D({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),ut=new _a({props:{$$slots:{default:[qi]},$$scope:{ctx:A}}}),je=new D({props:{code:`from transformers import get_scheduler

num_train_epochs = 1
num_update_steps_per_epoch = len(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    name="linear",
    optimizer=optimizer,
    num_warmup_steps=1_000,
    num_training_steps=num_training_steps,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> get_scheduler

num_train_epochs = <span class="hljs-number">1</span>
num_update_steps_per_epoch = <span class="hljs-built_in">len</span>(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    name=<span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">1_000</span>,
    num_training_steps=num_training_steps,
)`}}),ie=new D({props:{code:`from huggingface_hub import Repository, get_full_repo_name

model_name = "codeparrot-ds-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),me=new D({props:{code:"'sgugger/codeparrot-ds-accelerate'",highlighted:'<span class="hljs-string">&#x27;sgugger/codeparrot-ds-accelerate&#x27;</span>'}}),fe=new D({props:{code:`output_dir = "codeparrot-ds-accelerate"
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`output_dir = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),wt=new D({props:{code:"evaluate()",highlighted:"evaluate()"}}),Ze=new D({props:{code:"(10.934126853942871, 56057.14453125)",highlighted:'(<span class="hljs-number">10.934126853942871</span>, <span class="hljs-number">56057.14453125</span>)'}}),ze=new D({props:{code:`from tqdm.notebook import tqdm

gradient_accumulation_steps = 8
eval_steps = 5_000

model.train()
completed_steps = 0
for epoch in range(num_train_epochs):
    for step, batch in tqdm(
        enumerate(train_dataloader, start=1), total=num_training_steps
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
                )`,highlighted:`<span class="hljs-keyword">from</span> tqdm.notebook <span class="hljs-keyword">import</span> tqdm

gradient_accumulation_steps = <span class="hljs-number">8</span>
eval_steps = <span class="hljs-number">5_000</span>

model.train()
completed_steps = <span class="hljs-number">0</span>
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_train_epochs):
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> tqdm(
        <span class="hljs-built_in">enumerate</span>(train_dataloader, start=<span class="hljs-number">1</span>), total=num_training_steps
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
                )`}}),_e=new _a({props:{$$slots:{default:[Ei]},$$scope:{ctx:A}}}),he=new _a({props:{$$slots:{default:[zi]},$$scope:{ctx:A}}}),{c(){n=c("h2"),f=c("a"),i=c("span"),j(_.$$.fragment),$=d(),k=c("span"),v=o("Training with \u{1F917} Accelerate"),T=d(),z=c("p"),C=o("We\u2019ve seen how to train a model with the "),L=c("code"),W=o("Trainer"),g=o(", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),P=d(),j(I.$$.fragment),M=d(),G=c("p"),R=o("Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),Y=c("code"),N=o("plt"),H=o(", "),S=c("code"),V=o("pd"),Z=o(", "),B=c("code"),ee=o("sk"),ae=o(", "),O=c("code"),U=o("fit"),We=o(", and "),Ie=c("code"),Ot=o("predict"),we=o(", which are the most frequent import names for "),Ge=c("code"),Ft=o("matplotlib.pyplot"),ts=o(", "),ss=c("code"),ga=o("pandas"),zs=o(", and "),Ce=c("code"),Ts=o("sklearn"),be=o(" as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),Ps=d(),j(ke.$$.fragment),Ds=d(),j(et.$$.fragment),Nt=d(),Lt=c("p"),wa=o("Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),as=d(),j(K.$$.fragment),ba=d(),tt=c("p"),Me=o("Before we can start training with this awesome new loss function, we need to prepare a few things:"),Cs=d(),te=c("ul"),ns=c("li"),ka=o("We need dataloaders to load the data in batches."),As=d(),ue=c("li"),He=o("We need to set up weight decay parameters."),os=d(),Ae=c("li"),ya=o("From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),Wt=d(),ye=c("p"),Os=o("Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),se=c("code"),$a=o('"torch"'),st=o(", and then we can pass it to a PyTorch "),ls=c("code"),va=o("DataLoader"),rs=o(" with the appropriate batch size:"),Fs=d(),j(at.$$.fragment),Se=d(),It=c("p"),ja=o("Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),is=d(),j(re.$$.fragment),Ns=d(),Re=c("p"),xa=o("Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),Ls=d(),j(Be.$$.fragment),Ue=d(),de=c("p"),Gt=o("With the "),ps=c("code"),Ws=o("evaluate()"),nt=o(" function we can report loss and "),ot=c("a"),lt=o("perplexity"),Is=o(" at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),rt=d(),j(it.$$.fragment),cs=d(),$e=c("p"),Gs=o("We can then define our optimizer, using the function from before to split the parameters for weight decay:"),pt=d(),j(ct.$$.fragment),hs=d(),ve=c("p"),Ms=o("Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),Ye=d(),j(Xe.$$.fragment),ht=d(),j(ut.$$.fragment),us=d(),ne=c("p"),qa=o("Now that we have sent our "),Mt=c("code"),dt=o("train_dataloader"),Hs=o(" to "),Oe=c("code"),Ss=o("accelerator.prepare()"),Ke=o(", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),ds=d(),j(je.$$.fragment),Rs=d(),oe=c("p"),mt=o("Lastly, to push our model to the Hub, we will need to create a "),Ht=c("code"),ft=o("Repository"),Bs=o(" object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),xe=c("code"),Ea=o("repo_name"),ms=o(" with your own choice; it just needs to contain your username, which is what the function "),fs=c("code"),za=o("get_full_repo_name()"),Us=o(" does):"),qe=d(),j(ie.$$.fragment),St=d(),j(me.$$.fragment),Ys=d(),Ve=c("p"),Ta=o("Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),_s=d(),j(fe.$$.fragment),gs=d(),le=c("p"),Pa=o("We can now upload anything we save in "),Rt=c("code"),pe=o("output_dir"),Da=o(" by calling the "),_t=c("code"),Ca=o("repo.push_to_hub()"),Aa=o(" method. This will help us upload the intermediate models at the end of each epoch."),gt=d(),Bt=c("p"),Oa=o("Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),Ut=d(),j(wt.$$.fragment),Xs=d(),j(Ze.$$.fragment),Ee=d(),ce=c("p"),on=o("Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),ws=c("code"),bt=o("evaluate()"),ln=o(" function:"),bs=d(),j(ze.$$.fragment),Ks=d(),kt=c("p"),yt=o("And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),ks=d(),j(_e.$$.fragment),ys=d(),j(he.$$.fragment),this.h()},l(a){n=h(a,"H2",{class:!0});var y=u(n);f=h(y,"A",{id:!0,class:!0,href:!0});var rn=u(f);i=h(rn,"SPAN",{});var Fa=u(i);x(_.$$.fragment,Fa),Fa.forEach(t),rn.forEach(t),$=m(y),k=h(y,"SPAN",{});var ge=u(k);v=l(ge,"Training with \u{1F917} Accelerate"),ge.forEach(t),y.forEach(t),T=m(a),z=h(a,"P",{});var Zs=u(z);C=l(Zs,"We\u2019ve seen how to train a model with the "),L=h(Zs,"CODE",{});var Js=u(L);W=l(Js,"Trainer"),Js.forEach(t),g=l(Zs,", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),Zs.forEach(t),P=m(a),x(I.$$.fragment,a),M=m(a),G=h(a,"P",{});var X=u(G);R=l(X,"Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),Y=h(X,"CODE",{});var pn=u(Y);N=l(pn,"plt"),pn.forEach(t),H=l(X,", "),S=h(X,"CODE",{});var $s=u(S);V=l($s,"pd"),$s.forEach(t),Z=l(X,", "),B=h(X,"CODE",{});var cn=u(B);ee=l(cn,"sk"),cn.forEach(t),ae=l(X,", "),O=h(X,"CODE",{});var hn=u(O);U=l(hn,"fit"),hn.forEach(t),We=l(X,", and "),Ie=h(X,"CODE",{});var Qs=u(Ie);Ot=l(Qs,"predict"),Qs.forEach(t),we=l(X,", which are the most frequent import names for "),Ge=h(X,"CODE",{});var un=u(Ge);Ft=l(un,"matplotlib.pyplot"),un.forEach(t),ts=l(X,", "),ss=h(X,"CODE",{});var dn=u(ss);ga=l(dn,"pandas"),dn.forEach(t),zs=l(X,", and "),Ce=h(X,"CODE",{});var Na=u(Ce);Ts=l(Na,"sklearn"),Na.forEach(t),be=l(X," as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),X.forEach(t),Ps=m(a),x(ke.$$.fragment,a),Ds=m(a),x(et.$$.fragment,a),Nt=m(a),Lt=h(a,"P",{});var Yt=u(Lt);wa=l(Yt,"Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),Yt.forEach(t),as=m(a),x(K.$$.fragment,a),ba=m(a),tt=h(a,"P",{});var La=u(tt);Me=l(La,"Before we can start training with this awesome new loss function, we need to prepare a few things:"),La.forEach(t),Cs=m(a),te=h(a,"UL",{});var Te=u(te);ns=h(Te,"LI",{});var Wa=u(ns);ka=l(Wa,"We need dataloaders to load the data in batches."),Wa.forEach(t),As=m(Te),ue=h(Te,"LI",{});var vs=u(ue);He=l(vs,"We need to set up weight decay parameters."),vs.forEach(t),os=m(Te),Ae=h(Te,"LI",{});var mn=u(Ae);ya=l(mn,"From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),mn.forEach(t),Te.forEach(t),Wt=m(a),ye=h(a,"P",{});var $t=u(ye);Os=l($t,"Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),se=h($t,"CODE",{});var js=u(se);$a=l(js,'"torch"'),js.forEach(t),st=l($t,", and then we can pass it to a PyTorch "),ls=h($t,"CODE",{});var fn=u(ls);va=l(fn,"DataLoader"),fn.forEach(t),rs=l($t," with the appropriate batch size:"),$t.forEach(t),Fs=m(a),x(at.$$.fragment,a),Se=m(a),It=h(a,"P",{});var Ia=u(It);ja=l(Ia,"Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),Ia.forEach(t),is=m(a),x(re.$$.fragment,a),Ns=m(a),Re=h(a,"P",{});var vt=u(Re);xa=l(vt,"Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),vt.forEach(t),Ls=m(a),x(Be.$$.fragment,a),Ue=m(a),de=h(a,"P",{});var jt=u(de);Gt=l(jt,"With the "),ps=h(jt,"CODE",{});var Je=u(ps);Ws=l(Je,"evaluate()"),Je.forEach(t),nt=l(jt," function we can report loss and "),ot=h(jt,"A",{href:!0});var xt=u(ot);lt=l(xt,"perplexity"),xt.forEach(t),Is=l(jt," at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),jt.forEach(t),rt=m(a),x(it.$$.fragment,a),cs=m(a),$e=h(a,"P",{});var ea=u($e);Gs=l(ea,"We can then define our optimizer, using the function from before to split the parameters for weight decay:"),ea.forEach(t),pt=m(a),x(ct.$$.fragment,a),hs=m(a),ve=h(a,"P",{});var Xt=u(ve);Ms=l(Xt,"Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),Xt.forEach(t),Ye=m(a),x(Xe.$$.fragment,a),ht=m(a),x(ut.$$.fragment,a),us=m(a),ne=h(a,"P",{});var Kt=u(ne);qa=l(Kt,"Now that we have sent our "),Mt=h(Kt,"CODE",{});var ta=u(Mt);dt=l(ta,"train_dataloader"),ta.forEach(t),Hs=l(Kt," to "),Oe=h(Kt,"CODE",{});var _n=u(Oe);Ss=l(_n,"accelerator.prepare()"),_n.forEach(t),Ke=l(Kt,", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),Kt.forEach(t),ds=m(a),x(je.$$.fragment,a),Rs=m(a),oe=h(a,"P",{});var Fe=u(oe);mt=l(Fe,"Lastly, to push our model to the Hub, we will need to create a "),Ht=h(Fe,"CODE",{});var Ne=u(Ht);ft=l(Ne,"Repository"),Ne.forEach(t),Bs=l(Fe," object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),xe=h(Fe,"CODE",{});var gn=u(xe);Ea=l(gn,"repo_name"),gn.forEach(t),ms=l(Fe," with your own choice; it just needs to contain your username, which is what the function "),fs=h(Fe,"CODE",{});var sa=u(fs);za=l(sa,"get_full_repo_name()"),sa.forEach(t),Us=l(Fe," does):"),Fe.forEach(t),qe=m(a),x(ie.$$.fragment,a),St=m(a),x(me.$$.fragment,a),Ys=m(a),Ve=h(a,"P",{});var wn=u(Ve);Ta=l(wn,"Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),wn.forEach(t),_s=m(a),x(fe.$$.fragment,a),gs=m(a),le=h(a,"P",{});var Vt=u(le);Pa=l(Vt,"We can now upload anything we save in "),Rt=h(Vt,"CODE",{});var aa=u(Rt);pe=l(aa,"output_dir"),aa.forEach(t),Da=l(Vt," by calling the "),_t=h(Vt,"CODE",{});var bn=u(_t);Ca=l(bn,"repo.push_to_hub()"),bn.forEach(t),Aa=l(Vt," method. This will help us upload the intermediate models at the end of each epoch."),Vt.forEach(t),gt=m(a),Bt=h(a,"P",{});var kn=u(Bt);Oa=l(kn,"Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),kn.forEach(t),Ut=m(a),x(wt.$$.fragment,a),Xs=m(a),x(Ze.$$.fragment,a),Ee=m(a),ce=h(a,"P",{});var xs=u(ce);on=l(xs,"Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),ws=h(xs,"CODE",{});var Pe=u(ws);bt=l(Pe,"evaluate()"),Pe.forEach(t),ln=l(xs," function:"),xs.forEach(t),bs=m(a),x(ze.$$.fragment,a),Ks=m(a),kt=h(a,"P",{});var De=u(kt);yt=l(De,"And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),De.forEach(t),ks=m(a),x(_e.$$.fragment,a),ys=m(a),x(he.$$.fragment,a),this.h()},h(){F(f,"id","training-with-accelerate"),F(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(f,"href","#training-with-accelerate"),F(n,"class","relative group"),F(ot,"href","/course/chapter7/3")},m(a,y){r(a,n,y),s(n,f),s(f,i),q(_,i,null),s(n,$),s(n,k),s(k,v),r(a,T,y),r(a,z,y),s(z,C),s(z,L),s(L,W),s(z,g),r(a,P,y),q(I,a,y),r(a,M,y),r(a,G,y),s(G,R),s(G,Y),s(Y,N),s(G,H),s(G,S),s(S,V),s(G,Z),s(G,B),s(B,ee),s(G,ae),s(G,O),s(O,U),s(G,We),s(G,Ie),s(Ie,Ot),s(G,we),s(G,Ge),s(Ge,Ft),s(G,ts),s(G,ss),s(ss,ga),s(G,zs),s(G,Ce),s(Ce,Ts),s(G,be),r(a,Ps,y),q(ke,a,y),r(a,Ds,y),q(et,a,y),r(a,Nt,y),r(a,Lt,y),s(Lt,wa),r(a,as,y),q(K,a,y),r(a,ba,y),r(a,tt,y),s(tt,Me),r(a,Cs,y),r(a,te,y),s(te,ns),s(ns,ka),s(te,As),s(te,ue),s(ue,He),s(te,os),s(te,Ae),s(Ae,ya),r(a,Wt,y),r(a,ye,y),s(ye,Os),s(ye,se),s(se,$a),s(ye,st),s(ye,ls),s(ls,va),s(ye,rs),r(a,Fs,y),q(at,a,y),r(a,Se,y),r(a,It,y),s(It,ja),r(a,is,y),q(re,a,y),r(a,Ns,y),r(a,Re,y),s(Re,xa),r(a,Ls,y),q(Be,a,y),r(a,Ue,y),r(a,de,y),s(de,Gt),s(de,ps),s(ps,Ws),s(de,nt),s(de,ot),s(ot,lt),s(de,Is),r(a,rt,y),q(it,a,y),r(a,cs,y),r(a,$e,y),s($e,Gs),r(a,pt,y),q(ct,a,y),r(a,hs,y),r(a,ve,y),s(ve,Ms),r(a,Ye,y),q(Xe,a,y),r(a,ht,y),q(ut,a,y),r(a,us,y),r(a,ne,y),s(ne,qa),s(ne,Mt),s(Mt,dt),s(ne,Hs),s(ne,Oe),s(Oe,Ss),s(ne,Ke),r(a,ds,y),q(je,a,y),r(a,Rs,y),r(a,oe,y),s(oe,mt),s(oe,Ht),s(Ht,ft),s(oe,Bs),s(oe,xe),s(xe,Ea),s(oe,ms),s(oe,fs),s(fs,za),s(oe,Us),r(a,qe,y),q(ie,a,y),r(a,St,y),q(me,a,y),r(a,Ys,y),r(a,Ve,y),s(Ve,Ta),r(a,_s,y),q(fe,a,y),r(a,gs,y),r(a,le,y),s(le,Pa),s(le,Rt),s(Rt,pe),s(le,Da),s(le,_t),s(_t,Ca),s(le,Aa),r(a,gt,y),r(a,Bt,y),s(Bt,Oa),r(a,Ut,y),q(wt,a,y),r(a,Xs,y),q(Ze,a,y),r(a,Ee,y),r(a,ce,y),s(ce,on),s(ce,ws),s(ws,bt),s(ce,ln),r(a,bs,y),q(ze,a,y),r(a,Ks,y),r(a,kt,y),s(kt,yt),r(a,ks,y),q(_e,a,y),r(a,ys,y),q(he,a,y),Vs=!0},i(a){Vs||(w(_.$$.fragment,a),w(I.$$.fragment,a),w(ke.$$.fragment,a),w(et.$$.fragment,a),w(K.$$.fragment,a),w(at.$$.fragment,a),w(re.$$.fragment,a),w(Be.$$.fragment,a),w(it.$$.fragment,a),w(ct.$$.fragment,a),w(Xe.$$.fragment,a),w(ut.$$.fragment,a),w(je.$$.fragment,a),w(ie.$$.fragment,a),w(me.$$.fragment,a),w(fe.$$.fragment,a),w(wt.$$.fragment,a),w(Ze.$$.fragment,a),w(ze.$$.fragment,a),w(_e.$$.fragment,a),w(he.$$.fragment,a),Vs=!0)},o(a){b(_.$$.fragment,a),b(I.$$.fragment,a),b(ke.$$.fragment,a),b(et.$$.fragment,a),b(K.$$.fragment,a),b(at.$$.fragment,a),b(re.$$.fragment,a),b(Be.$$.fragment,a),b(it.$$.fragment,a),b(ct.$$.fragment,a),b(Xe.$$.fragment,a),b(ut.$$.fragment,a),b(je.$$.fragment,a),b(ie.$$.fragment,a),b(me.$$.fragment,a),b(fe.$$.fragment,a),b(wt.$$.fragment,a),b(Ze.$$.fragment,a),b(ze.$$.fragment,a),b(_e.$$.fragment,a),b(he.$$.fragment,a),Vs=!1},d(a){a&&t(n),E(_),a&&t(T),a&&t(z),a&&t(P),E(I,a),a&&t(M),a&&t(G),a&&t(Ps),E(ke,a),a&&t(Ds),E(et,a),a&&t(Nt),a&&t(Lt),a&&t(as),E(K,a),a&&t(ba),a&&t(tt),a&&t(Cs),a&&t(te),a&&t(Wt),a&&t(ye),a&&t(Fs),E(at,a),a&&t(Se),a&&t(It),a&&t(is),E(re,a),a&&t(Ns),a&&t(Re),a&&t(Ls),E(Be,a),a&&t(Ue),a&&t(de),a&&t(rt),E(it,a),a&&t(cs),a&&t($e),a&&t(pt),E(ct,a),a&&t(hs),a&&t(ve),a&&t(Ye),E(Xe,a),a&&t(ht),E(ut,a),a&&t(us),a&&t(ne),a&&t(ds),E(je,a),a&&t(Rs),a&&t(oe),a&&t(qe),E(ie,a),a&&t(St),E(me,a),a&&t(Ys),a&&t(Ve),a&&t(_s),E(fe,a),a&&t(gs),a&&t(le),a&&t(gt),a&&t(Bt),a&&t(Ut),E(wt,a),a&&t(Xs),E(Ze,a),a&&t(Ee),a&&t(ce),a&&t(bs),E(ze,a),a&&t(Ks),a&&t(kt),a&&t(ks),E(_e,a),a&&t(ys),E(he,a)}}}function qi(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=c("a"),_=o("Chapter 3"),$=o(" for more details."),this.h()},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=h(v,"A",{href:!0});var T=u(i);_=l(T,"Chapter 3"),T.forEach(t),$=l(v," for more details."),v.forEach(t),this.h()},h(){F(i,"href","/course/chapter3")},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Ei(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Either create your own custom loss function tailored to your use case, or add another custom step into the training loop.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," Either create your own custom loss function tailored to your use case, or add another custom step into the training loop."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function zi(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Ti(A){let n,f,i,_,$,k,v,T,z,C,L,W,g,P,I,M,G,R,Y,N,H,S,V,Z,B,ee,ae,O,U,We,Ie,Ot,we,Ge,Ft,ts,ss,ga,zs,Ce,Ts,be,Ps,ke,Ds,et,Nt,Lt,wa,as,K,ba,tt,Me,Cs,te,ns,ka,As,ue,He,os,Ae,ya,Wt,ye,Os,se,$a,st,ls,va,rs,Fs,at,Se,It,ja,is,re,Ns,Re,xa,Ls,Be,Ue,de,Gt,ps,Ws,nt,ot,lt,Is,rt,it,cs,$e,Gs,pt,ct,hs,ve,Ms,Ye,Xe,ht,ut,us,ne,qa,Mt,dt,Hs,Oe,Ss,Ke,ds,je,Rs,oe,mt,Ht,ft,Bs,xe,Ea,ms,fs,za,Us,qe,ie,St,me,Ys,Ve,Ta,_s,fe,gs,le,Pa,Rt,pe,Da,_t,Ca,Aa,gt,Bt,Oa,Ut,wt,Xs,Ze,Ee,ce,on,ws,bt,ln,bs,ze,Ks,kt,yt,ks,_e,ys,he,Vs,a,y,rn,Fa,ge,Zs,Js,X,pn,$s,cn,hn,Qs,un,dn,Na,Yt,La,Te,Wa,vs,mn,$t,js,fn,Ia,vt,jt,Je,xt,ea,Xt,Kt,ta,_n,Fe,Ne,gn,sa,wn,Vt,aa,bn,kn,xs,Pe,De,yn,Zt,Zo,Un,Jo,Qo,Yn,el,tl,po,Jt,sl,Xn,al,nl,Kn,ol,ll,co,qt,Et,$n,vn,rl,ho,Ga,uo,zt,Tt,jn,xn,il,mo,qn,na,fo,En,pl,_o,Ma,go,zn,cl,wo,Tn,hl,bo,Ha,ko,Pt,Dt,Pn,oa,yo,la,$o,qs,ra,Vn,Sa,ul,Zn,dl,vo,ia,ml,Jn,fl,_l,jo,Ct,At,Dn,Cn,gl,xo,Ra,qo,Ba,Eo,Qt,wl,Qn,bl,kl,eo,yl,$l,zo,Ua,To,Ya,Po,Qe,vl,to,jl,xl,so,ql,El,ao,zl,Tl,Do,Xa,Co,Ka,Ao,pa,Pl,no,Dl,Cl,Oo,Va,Fo,Za,No,An,On,Lo;i=new ni({props:{fw:A[0]}}),T=new Bn({});const Fl=[li,oi],Ja=[];function Nl(e,p){return e[0]==="pt"?0:1}g=Nl(A),P=Ja[g]=Fl[g](A),Ce=new Ol({props:{id:"Vpjb1lu0MDk"}}),Ae=new Bn({}),Ue=new D({props:{code:`def any_keyword_in_string(string, keywords):
    for keyword in keywords:
        if keyword in string:
            return True
    return False`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">any_keyword_in_string</span>(<span class="hljs-params">string, keywords</span>):
    <span class="hljs-keyword">for</span> keyword <span class="hljs-keyword">in</span> keywords:
        <span class="hljs-keyword">if</span> keyword <span class="hljs-keyword">in</span> string:
            <span class="hljs-keyword">return</span> <span class="hljs-literal">True</span>
    <span class="hljs-keyword">return</span> <span class="hljs-literal">False</span>`}}),nt=new D({props:{code:`filters = ["pandas", "sklearn", "matplotlib", "seaborn"]
example_1 = "import numpy as np"
example_2 = "import pandas as pd"

print(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`,highlighted:`filters = [<span class="hljs-string">&quot;pandas&quot;</span>, <span class="hljs-string">&quot;sklearn&quot;</span>, <span class="hljs-string">&quot;matplotlib&quot;</span>, <span class="hljs-string">&quot;seaborn&quot;</span>]
example_1 = <span class="hljs-string">&quot;import numpy as np&quot;</span>
example_2 = <span class="hljs-string">&quot;import pandas as pd&quot;</span>

<span class="hljs-built_in">print</span>(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`}}),lt=new D({props:{code:"False True",highlighted:'<span class="hljs-literal">False</span> <span class="hljs-literal">True</span>'}}),$e=new D({props:{code:`from collections import defaultdict
from tqdm import tqdm
from datasets import Dataset


def filter_streaming_dataset(dataset, filters):
    filtered_dict = defaultdict(list)
    total = 0
    for sample in tqdm(iter(dataset)):
        total += 1
        if any_keyword_in_string(sample["content"], filters):
            for k, v in sample.items():
                filtered_dict[k].append(v)
    print(f"{len(filtered_dict['content'])/total:.2%} of data after filtering.")
    return Dataset.from_dict(filtered_dict)`,highlighted:`<span class="hljs-keyword">from</span> collections <span class="hljs-keyword">import</span> defaultdict
<span class="hljs-keyword">from</span> tqdm <span class="hljs-keyword">import</span> tqdm
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset


<span class="hljs-keyword">def</span> <span class="hljs-title function_">filter_streaming_dataset</span>(<span class="hljs-params">dataset, filters</span>):
    filtered_dict = defaultdict(<span class="hljs-built_in">list</span>)
    total = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> sample <span class="hljs-keyword">in</span> tqdm(<span class="hljs-built_in">iter</span>(dataset)):
        total += <span class="hljs-number">1</span>
        <span class="hljs-keyword">if</span> any_keyword_in_string(sample[<span class="hljs-string">&quot;content&quot;</span>], filters):
            <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> sample.items():
                filtered_dict[k].append(v)
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{<span class="hljs-built_in">len</span>(filtered_dict[<span class="hljs-string">&#x27;content&#x27;</span>])/total:<span class="hljs-number">.2</span>%}</span> of data after filtering.&quot;</span>)
    <span class="hljs-keyword">return</span> Dataset.from_dict(filtered_dict)`}}),ve=new D({props:{code:`# This cell will take a very long time to execute, so you should skip it and go to
# the next one!
from datasets import load_dataset

split = "train"  # "valid"
filters = ["pandas", "sklearn", "matplotlib", "seaborn"]

data = load_dataset(f"transformersbook/codeparrot-{split}", split=split, streaming=True)
filtered_data = filter_streaming_dataset(data, filters)`,highlighted:`<span class="hljs-comment"># This cell will take a very long time to execute, so you should skip it and go to</span>
<span class="hljs-comment"># the next one!</span>
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

split = <span class="hljs-string">&quot;train&quot;</span>  <span class="hljs-comment"># &quot;valid&quot;</span>
filters = [<span class="hljs-string">&quot;pandas&quot;</span>, <span class="hljs-string">&quot;sklearn&quot;</span>, <span class="hljs-string">&quot;matplotlib&quot;</span>, <span class="hljs-string">&quot;seaborn&quot;</span>]

data = load_dataset(<span class="hljs-string">f&quot;transformersbook/codeparrot-<span class="hljs-subst">{split}</span>&quot;</span>, split=split, streaming=<span class="hljs-literal">True</span>)
filtered_data = filter_streaming_dataset(data, filters)`}}),Ye=new D({props:{code:"3.26% of data after filtering.",highlighted:'<span class="hljs-number">3.26</span>% of data after filtering.'}}),dt=new D({props:{code:`from datasets import load_dataset, DatasetDict

ds_train = load_dataset("huggingface-course/codeparrot-ds-train", split="train")
ds_valid = load_dataset("huggingface-course/codeparrot-ds-valid", split="validation")

raw_datasets = DatasetDict(
    {
        "train": ds_train,  # .shuffle().select(range(50000)),
        "valid": ds_valid,  # .shuffle().select(range(500))
    }
)

raw_datasets`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, DatasetDict

ds_train = load_dataset(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds-train&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
ds_valid = load_dataset(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds-valid&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

raw_datasets = DatasetDict(
    {
        <span class="hljs-string">&quot;train&quot;</span>: ds_train,  <span class="hljs-comment"># .shuffle().select(range(50000)),</span>
        <span class="hljs-string">&quot;valid&quot;</span>: ds_valid,  <span class="hljs-comment"># .shuffle().select(range(500))</span>
    }
)

raw_datasets`}}),Oe=new D({props:{code:`DatasetDict({
    train: Dataset({
        features: ['repo_name', 'path', 'copies', 'size', 'content', 'license'],
        num_rows: 606720
    })
    valid: Dataset({
        features: ['repo_name', 'path', 'copies', 'size', 'content', 'license'],
        num_rows: 3322
    })
})`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;repo_name&#x27;</span>, <span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;copies&#x27;</span>, <span class="hljs-string">&#x27;size&#x27;</span>, <span class="hljs-string">&#x27;content&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>],
        num_rows: <span class="hljs-number">606720</span>
    })
    valid: Dataset({
        features: [<span class="hljs-string">&#x27;repo_name&#x27;</span>, <span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;copies&#x27;</span>, <span class="hljs-string">&#x27;size&#x27;</span>, <span class="hljs-string">&#x27;content&#x27;</span>, <span class="hljs-string">&#x27;license&#x27;</span>],
        num_rows: <span class="hljs-number">3322</span>
    })
})`}}),Ke=new _a({props:{$$slots:{default:[ri]},$$scope:{ctx:A}}}),mt=new D({props:{code:`for key in raw_datasets["train"][0]:
    print(f"{key.upper()}: {raw_datasets['train'][0][key][:200]}")`,highlighted:`<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key.upper()}</span>: <span class="hljs-subst">{raw_datasets[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">0</span>][key][:<span class="hljs-number">200</span>]}</span>&quot;</span>)`}}),ft=new D({props:{code:`'REPO_NAME: kmike/scikit-learn'
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
LICENSE: bsd-3-clause'''`,highlighted:`<span class="hljs-string">&#x27;REPO_NAME: kmike/scikit-learn&#x27;</span>
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
LICENSE: bsd-3-clause&#x27;&#x27;&#x27;</span>`}}),me=new Bn({}),fe=new Ol({props:{id:"ma1TrR7gE7I"}}),yt=new D({props:{code:`from transformers import AutoTokenizer

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
print(f"Chunk mapping: {outputs['overflow_to_sample_mapping']}")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Chunk mapping: <span class="hljs-subst">{outputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>&quot;</span>)`}}),_e=new D({props:{code:`Input IDs length: 34
Input chunk lengths: [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 117, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 41]
Chunk mapping: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]`,highlighted:`Input IDs length: <span class="hljs-number">34</span>
Input chunk lengths: [<span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">117</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">41</span>]
Chunk mapping: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]`}}),Yt=new D({props:{code:`def tokenize(element):
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
tokenized_datasets`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize</span>(<span class="hljs-params">element</span>):
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
tokenized_datasets`}}),Te=new D({props:{code:`DatasetDict({
    train: Dataset({
        features: ['input_ids'],
        num_rows: 16702061
    })
    valid: Dataset({
        features: ['input_ids'],
        num_rows: 93164
    })
})`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;input_ids&#x27;</span>],
        num_rows: <span class="hljs-number">16702061</span>
    })
    valid: Dataset({
        features: [<span class="hljs-string">&#x27;input_ids&#x27;</span>],
        num_rows: <span class="hljs-number">93164</span>
    })
})`}}),vt=new _a({props:{$$slots:{default:[ii]},$$scope:{ctx:A}}}),Xt=new Bn({});const Ll=[ci,pi],Qa=[];function Wl(e,p){return e[0]==="pt"?0:1}Pe=Wl(A),De=Qa[Pe]=Ll[Pe](A);const Il=[ui,hi],en=[];function Gl(e,p){return e[0]==="pt"?0:1}qt=Gl(A),Et=en[qt]=Il[qt](A),Ga=new D({props:{code:`out = data_collator([tokenized_datasets["train"][i] for i in range(5)])
for key in out:
    print(f"{key} shape: {out[key].shape}")`,highlighted:`out = data_collator([tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>)])
<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> out:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key}</span> shape: <span class="hljs-subst">{out[key].shape}</span>&quot;</span>)`}});const Ml=[mi,di],tn=[];function Hl(e,p){return e[0]==="pt"?0:1}zt=Hl(A),Tt=tn[zt]=Ml[zt](A);let J=A[0]==="tf"&&Vr();na=new _a({props:{warning:!0,$$slots:{default:[fi]},$$scope:{ctx:A}}}),Ma=new D({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Ha=new D({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}});const Sl=[gi,_i],sn=[];function Rl(e,p){return e[0]==="pt"?0:1}Pt=Rl(A),Dt=sn[Pt]=Sl[Pt](A),oa=new _a({props:{$$slots:{default:[wi]},$$scope:{ctx:A}}}),la=new _a({props:{$$slots:{default:[yi]},$$scope:{ctx:A}}}),Sa=new Bn({});const Bl=[vi,$i],an=[];function Ul(e,p){return e[0]==="pt"?0:1}Ct=Ul(A),At=an[Ct]=Bl[Ct](A),Ra=new D({props:{code:`txt = """\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"])`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ba=new D({props:{code:`# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
plt.scatter(x, y)

# create scatter`,highlighted:`<span class="hljs-comment"># create some data</span>
x = np.random.randn(<span class="hljs-number">100</span>)
y = np.random.randn(<span class="hljs-number">100</span>)

<span class="hljs-comment"># create scatter plot with x, y</span>
plt.scatter(x, y)

<span class="hljs-comment"># create scatter</span>`}}),Ua=new D({props:{code:`txt = """\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create dataframe from x and y
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"])`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create dataframe from x and y
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ya=new D({props:{code:`# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create dataframe from x and y
df = pd.DataFrame({'x': x, 'y': y})
df.insert(0,'x', x)
for`,highlighted:`<span class="hljs-comment"># create some data</span>
x = np.random.randn(<span class="hljs-number">100</span>)
y = np.random.randn(<span class="hljs-number">100</span>)

<span class="hljs-comment"># create dataframe from x and y</span>
df = pd.DataFrame({<span class="hljs-string">&#x27;x&#x27;</span>: x, <span class="hljs-string">&#x27;y&#x27;</span>: y})
df.insert(<span class="hljs-number">0</span>,<span class="hljs-string">&#x27;x&#x27;</span>, x)
<span class="hljs-keyword">for</span>`}}),Xa=new D({props:{code:`txt = """\\
# dataframe with profession, income and name
df = pd.DataFrame({'profession': x, 'income':y, 'name': z})

# calculate the mean income per profession
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"])`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# dataframe with profession, income and name
df = pd.DataFrame({&#x27;profession&#x27;: x, &#x27;income&#x27;:y, &#x27;name&#x27;: z})

# calculate the mean income per profession
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ka=new D({props:{code:`# dataframe with profession, income and name
df = pd.DataFrame({'profession': x, 'income':y, 'name': z})

# calculate the mean income per profession
profession = df.groupby(['profession']).mean()

# compute the`,highlighted:`<span class="hljs-comment"># dataframe with profession, income and name</span>
df = pd.DataFrame({<span class="hljs-string">&#x27;profession&#x27;</span>: x, <span class="hljs-string">&#x27;income&#x27;</span>:y, <span class="hljs-string">&#x27;name&#x27;</span>: z})

<span class="hljs-comment"># calculate the mean income per profession</span>
profession = df.groupby([<span class="hljs-string">&#x27;profession&#x27;</span>]).mean()

<span class="hljs-comment"># compute the</span>`}}),Va=new D({props:{code:`txt = """
# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"])`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;
# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Za=new D({props:{code:`# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
rf = RandomForestRegressor(n_estimators=300, random_state=random_state, max_depth=3)
rf.fit(X, y)
rf`,highlighted:`<span class="hljs-comment"># import random forest regressor from scikit-learn</span>
<span class="hljs-keyword">from</span> sklearn.ensemble <span class="hljs-keyword">import</span> RandomForestRegressor

<span class="hljs-comment"># fit random forest model with 300 estimators on X, y:</span>
rf = RandomForestRegressor(n_estimators=<span class="hljs-number">300</span>, random_state=random_state, max_depth=<span class="hljs-number">3</span>)
rf.fit(X, y)
rf`}});function Yl(e,p){return e[0]==="tf"?xi:ji}let Wo=Yl(A),Es=Wo(A),Q=A[0]==="pt"&&Zr(A);return{c(){n=c("meta"),f=d(),j(i.$$.fragment),_=d(),$=c("h1"),k=c("a"),v=c("span"),j(T.$$.fragment),z=d(),C=c("span"),L=o("Training a causal language model from scratch"),W=d(),P.c(),I=d(),M=c("p"),G=o("Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=c("a"),Y=o("Chapter 1"),N=o(", this is commonly referred to as "),H=c("em"),S=o("transfer learning"),V=o(", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),Z=d(),B=c("p"),ee=o("In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),ae=c("code"),O=o("matplotlib"),U=o(", "),We=c("code"),Ie=o("seaborn"),Ot=o(", "),we=c("code"),Ge=o("pandas"),Ft=o(", and "),ts=c("code"),ss=o("scikit-learn"),ga=o(" libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),zs=d(),j(Ce.$$.fragment),Ts=d(),be=c("p"),Ps=o("In "),ke=c("a"),Ds=o("Chapter 6"),et=o(" we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),Nt=c("code"),Lt=o("Trainer"),wa=o(" API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),as=d(),K=c("iframe"),tt=d(),Me=c("p"),Cs=o("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),te=c("a"),ns=o("here"),ka=o(". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),As=d(),ue=c("h2"),He=c("a"),os=c("span"),j(Ae.$$.fragment),ya=d(),Wt=c("span"),ye=o("Gathering the data"),Os=d(),se=c("p"),$a=o("Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),st=c("a"),ls=o("Transformers textbook"),va=o(" to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),rs=c("code"),Fs=o("codeparrot"),at=o(", the authors built a dataset that they then shared on the "),Se=c("a"),It=o("Hugging Face Hub"),ja=o("."),is=d(),re=c("p"),Ns=o("However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),Re=c("code"),xa=o("codeparrot"),Ls=o(" dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Be=d(),j(Ue.$$.fragment),de=d(),Gt=c("p"),ps=o("Let\u2019s test it on two examples:"),Ws=d(),j(nt.$$.fragment),ot=d(),j(lt.$$.fragment),Is=d(),rt=c("p"),it=o("We can use this to create a function that will stream the dataset and filter the elements we want:"),cs=d(),j($e.$$.fragment),Gs=d(),pt=c("p"),ct=o("Then we can simply apply this function to the streaming dataset:"),hs=d(),j(ve.$$.fragment),Ms=d(),j(Ye.$$.fragment),Xe=d(),ht=c("p"),ut=o("This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),us=d(),ne=c("p"),qa=o("Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),Mt=d(),j(dt.$$.fragment),Hs=d(),j(Oe.$$.fragment),Ss=d(),j(Ke.$$.fragment),ds=d(),je=c("p"),Rs=o("Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),oe=d(),j(mt.$$.fragment),Ht=d(),j(ft.$$.fragment),Bs=d(),xe=c("p"),Ea=o("We can see that the "),ms=c("code"),fs=o("content"),za=o(" field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),Us=d(),qe=c("h2"),ie=c("a"),St=c("span"),j(me.$$.fragment),Ys=d(),Ve=c("span"),Ta=o("Preparing the dataset"),_s=d(),j(fe.$$.fragment),gs=d(),le=c("p"),Pa=o("The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),Rt=d(),pe=c("p"),Da=o("Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),_t=c("code"),Ca=o("return_overflowing_tokens"),Aa=o(" option to tokenize the whole input and split it into several chunks, as we did in "),gt=c("a"),Bt=o("Chapter 6"),Oa=o(". We\u2019ll also use the "),Ut=c("code"),wt=o("return_length"),Xs=o(" option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),Ze=d(),Ee=c("div"),ce=c("img"),ws=d(),bt=c("img"),bs=d(),ze=c("p"),Ks=o("Let\u2019s see exactly how this works by looking at the first two examples:"),kt=d(),j(yt.$$.fragment),ks=d(),j(_e.$$.fragment),ys=d(),he=c("p"),Vs=o("We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),a=c("code"),y=o("overflow_to_sample_mapping"),rn=o(" field, we can also reconstruct which chunks belonged to which input samples."),Fa=d(),ge=c("p"),Zs=o("With this operation we\u2019re using a handy feature of the "),Js=c("code"),X=o("Dataset.map()"),pn=o(" function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),$s=c("a"),cn=o("section 3"),hn=o(", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),Qs=c("code"),un=o("Dataset.map()"),dn=o(" call:"),Na=d(),j(Yt.$$.fragment),La=d(),j(Te.$$.fragment),Wa=d(),vs=c("p"),mn=o("We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),$t=d(),js=c("p"),fn=o("Now that we have the dataset ready, let\u2019s set up the model!"),Ia=d(),j(vt.$$.fragment),jt=d(),Je=c("h2"),xt=c("a"),ea=c("span"),j(Xt.$$.fragment),Kt=d(),ta=c("span"),_n=o("Initializing a new model"),Fe=d(),Ne=c("p"),gn=o("Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),sa=c("code"),wn=o("bos"),Vt=o(" and "),aa=c("code"),bn=o("eos"),kn=o(" (beginning and end of sequence) token IDs:"),xs=d(),De.c(),yn=d(),Zt=c("p"),Zo=o("Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Un=c("code"),Jo=o("DataCollatorForLanguageModeling"),Qo=o(" collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Yn=c("code"),el=o("input_ids"),tl=o("."),po=d(),Jt=c("p"),sl=o("Note that "),Xn=c("code"),al=o("DataCollatorForLanguageModeling"),nl=o(" supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Kn=c("code"),ol=o("mlm=False"),ll=o(":"),co=d(),Et.c(),$n=d(),vn=c("p"),rl=o("Let\u2019s have a look at an example:"),ho=d(),j(Ga.$$.fragment),uo=d(),Tt.c(),jn=d(),xn=c("p"),il=o("We can see that the examples have been stacked and all the tensors have the same shape."),mo=d(),J&&J.c(),qn=d(),j(na.$$.fragment),fo=d(),En=c("p"),pl=o("Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),_o=d(),j(Ma.$$.fragment),go=d(),zn=c("p"),cl=o("This will display a widget where you can enter your Hugging Face login credentials."),wo=d(),Tn=c("p"),hl=o("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),bo=d(),j(Ha.$$.fragment),ko=d(),Dt.c(),Pn=d(),j(oa.$$.fragment),yo=d(),j(la.$$.fragment),$o=d(),qs=c("h2"),ra=c("a"),Vn=c("span"),j(Sa.$$.fragment),ul=d(),Zn=c("span"),dl=o("Code generation with a pipeline"),vo=d(),ia=c("p"),ml=o("Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),Jn=c("code"),fl=o("pipeline"),_l=o(", and we\u2019ll put it on the GPU for fast generations if there is one available:"),jo=d(),At.c(),Dn=d(),Cn=c("p"),gl=o("Let\u2019s start with the simple task of creating a scatter plot:"),xo=d(),j(Ra.$$.fragment),qo=d(),j(Ba.$$.fragment),Eo=d(),Qt=c("p"),wl=o("The result looks correct. Does it also work for a "),Qn=c("code"),bl=o("pandas"),kl=o(" operation? Let\u2019s see if we can create a "),eo=c("code"),yl=o("DataFrame"),$l=o(" from two arrays:"),zo=d(),j(Ua.$$.fragment),To=d(),j(Ya.$$.fragment),Po=d(),Qe=c("p"),vl=o("Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),to=c("code"),jl=o("x"),xl=o(" again. Since the number of generated tokens is limited, the following "),so=c("code"),ql=o("for"),El=o(" loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),ao=c("code"),zl=o("groupby"),Tl=o(" operation:"),Do=d(),j(Xa.$$.fragment),Co=d(),j(Ka.$$.fragment),Ao=d(),pa=c("p"),Pl=o("Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),no=c("code"),Dl=o("scikit-learn"),Cl=o(" and set up a Random Forest model:"),Oo=d(),j(Va.$$.fragment),Fo=d(),j(Za.$$.fragment),No=d(),Es.c(),An=d(),Q&&Q.c(),On=Vo(),this.h()},l(e){const p=si('[data-svelte="svelte-1phssyn"]',document.head);n=h(p,"META",{name:!0,content:!0}),p.forEach(t),f=m(e),x(i.$$.fragment,e),_=m(e),$=h(e,"H1",{class:!0});var nn=u($);k=h(nn,"A",{id:!0,class:!0,href:!0});var Fn=u(k);v=h(Fn,"SPAN",{});var oo=u(v);x(T.$$.fragment,oo),oo.forEach(t),Fn.forEach(t),z=m(nn),C=h(nn,"SPAN",{});var lo=u(C);L=l(lo,"Training a causal language model from scratch"),lo.forEach(t),nn.forEach(t),W=m(e),P.l(e),I=m(e),M=h(e,"P",{});var es=u(M);G=l(es,"Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=h(es,"A",{href:!0});var Nn=u(R);Y=l(Nn,"Chapter 1"),Nn.forEach(t),N=l(es,", this is commonly referred to as "),H=h(es,"EM",{});var Ln=u(H);S=l(Ln,"transfer learning"),Ln.forEach(t),V=l(es,", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),es.forEach(t),Z=m(e),B=h(e,"P",{});var Le=u(B);ee=l(Le,"In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),ae=h(Le,"CODE",{});var Wn=u(ae);O=l(Wn,"matplotlib"),Wn.forEach(t),U=l(Le,", "),We=h(Le,"CODE",{});var ro=u(We);Ie=l(ro,"seaborn"),ro.forEach(t),Ot=l(Le,", "),we=h(Le,"CODE",{});var io=u(we);Ge=l(io,"pandas"),io.forEach(t),Ft=l(Le,", and "),ts=h(Le,"CODE",{});var In=u(ts);ss=l(In,"scikit-learn"),In.forEach(t),ga=l(Le," libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),Le.forEach(t),zs=m(e),x(Ce.$$.fragment,e),Ts=m(e),be=h(e,"P",{});var Gn=u(be);Ps=l(Gn,"In "),ke=h(Gn,"A",{href:!0});var Xl=u(ke);Ds=l(Xl,"Chapter 6"),Xl.forEach(t),et=l(Gn," we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),Nt=h(Gn,"CODE",{});var Kl=u(Nt);Lt=l(Kl,"Trainer"),Kl.forEach(t),wa=l(Gn," API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),Gn.forEach(t),as=m(e),K=h(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),u(K).forEach(t),tt=m(e),Me=h(e,"P",{});var Io=u(Me);Cs=l(Io,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),te=h(Io,"A",{href:!0,rel:!0});var Vl=u(te);ns=l(Vl,"here"),Vl.forEach(t),ka=l(Io,". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),Io.forEach(t),As=m(e),ue=h(e,"H2",{class:!0});var Go=u(ue);He=h(Go,"A",{id:!0,class:!0,href:!0});var Zl=u(He);os=h(Zl,"SPAN",{});var Jl=u(os);x(Ae.$$.fragment,Jl),Jl.forEach(t),Zl.forEach(t),ya=m(Go),Wt=h(Go,"SPAN",{});var Ql=u(Wt);ye=l(Ql,"Gathering the data"),Ql.forEach(t),Go.forEach(t),Os=m(e),se=h(e,"P",{});var ca=u(se);$a=l(ca,"Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),st=h(ca,"A",{href:!0,rel:!0});var er=u(st);ls=l(er,"Transformers textbook"),er.forEach(t),va=l(ca," to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),rs=h(ca,"CODE",{});var tr=u(rs);Fs=l(tr,"codeparrot"),tr.forEach(t),at=l(ca,", the authors built a dataset that they then shared on the "),Se=h(ca,"A",{href:!0,rel:!0});var sr=u(Se);It=l(sr,"Hugging Face Hub"),sr.forEach(t),ja=l(ca,"."),ca.forEach(t),is=m(e),re=h(e,"P",{});var Mo=u(re);Ns=l(Mo,"However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),Re=h(Mo,"CODE",{});var ar=u(Re);xa=l(ar,"codeparrot"),ar.forEach(t),Ls=l(Mo," dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Mo.forEach(t),Be=m(e),x(Ue.$$.fragment,e),de=m(e),Gt=h(e,"P",{});var nr=u(Gt);ps=l(nr,"Let\u2019s test it on two examples:"),nr.forEach(t),Ws=m(e),x(nt.$$.fragment,e),ot=m(e),x(lt.$$.fragment,e),Is=m(e),rt=h(e,"P",{});var or=u(rt);it=l(or,"We can use this to create a function that will stream the dataset and filter the elements we want:"),or.forEach(t),cs=m(e),x($e.$$.fragment,e),Gs=m(e),pt=h(e,"P",{});var lr=u(pt);ct=l(lr,"Then we can simply apply this function to the streaming dataset:"),lr.forEach(t),hs=m(e),x(ve.$$.fragment,e),Ms=m(e),x(Ye.$$.fragment,e),Xe=m(e),ht=h(e,"P",{});var rr=u(ht);ut=l(rr,"This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),rr.forEach(t),us=m(e),ne=h(e,"P",{});var ir=u(ne);qa=l(ir,"Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),ir.forEach(t),Mt=m(e),x(dt.$$.fragment,e),Hs=m(e),x(Oe.$$.fragment,e),Ss=m(e),x(Ke.$$.fragment,e),ds=m(e),je=h(e,"P",{});var pr=u(je);Rs=l(pr,"Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),pr.forEach(t),oe=m(e),x(mt.$$.fragment,e),Ht=m(e),x(ft.$$.fragment,e),Bs=m(e),xe=h(e,"P",{});var Ho=u(xe);Ea=l(Ho,"We can see that the "),ms=h(Ho,"CODE",{});var cr=u(ms);fs=l(cr,"content"),cr.forEach(t),za=l(Ho," field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),Ho.forEach(t),Us=m(e),qe=h(e,"H2",{class:!0});var So=u(qe);ie=h(So,"A",{id:!0,class:!0,href:!0});var hr=u(ie);St=h(hr,"SPAN",{});var ur=u(St);x(me.$$.fragment,ur),ur.forEach(t),hr.forEach(t),Ys=m(So),Ve=h(So,"SPAN",{});var dr=u(Ve);Ta=l(dr,"Preparing the dataset"),dr.forEach(t),So.forEach(t),_s=m(e),x(fe.$$.fragment,e),gs=m(e),le=h(e,"P",{});var mr=u(le);Pa=l(mr,"The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),mr.forEach(t),Rt=m(e),pe=h(e,"P",{});var ha=u(pe);Da=l(ha,"Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),_t=h(ha,"CODE",{});var fr=u(_t);Ca=l(fr,"return_overflowing_tokens"),fr.forEach(t),Aa=l(ha," option to tokenize the whole input and split it into several chunks, as we did in "),gt=h(ha,"A",{href:!0});var _r=u(gt);Bt=l(_r,"Chapter 6"),_r.forEach(t),Oa=l(ha,". We\u2019ll also use the "),Ut=h(ha,"CODE",{});var gr=u(Ut);wt=l(gr,"return_length"),gr.forEach(t),Xs=l(ha," option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),ha.forEach(t),Ze=m(e),Ee=h(e,"DIV",{class:!0});var Ro=u(Ee);ce=h(Ro,"IMG",{class:!0,src:!0,alt:!0}),ws=m(Ro),bt=h(Ro,"IMG",{class:!0,src:!0,alt:!0}),Ro.forEach(t),bs=m(e),ze=h(e,"P",{});var wr=u(ze);Ks=l(wr,"Let\u2019s see exactly how this works by looking at the first two examples:"),wr.forEach(t),kt=m(e),x(yt.$$.fragment,e),ks=m(e),x(_e.$$.fragment,e),ys=m(e),he=h(e,"P",{});var Bo=u(he);Vs=l(Bo,"We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),a=h(Bo,"CODE",{});var br=u(a);y=l(br,"overflow_to_sample_mapping"),br.forEach(t),rn=l(Bo," field, we can also reconstruct which chunks belonged to which input samples."),Bo.forEach(t),Fa=m(e),ge=h(e,"P",{});var ua=u(ge);Zs=l(ua,"With this operation we\u2019re using a handy feature of the "),Js=h(ua,"CODE",{});var kr=u(Js);X=l(kr,"Dataset.map()"),kr.forEach(t),pn=l(ua," function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),$s=h(ua,"A",{href:!0});var yr=u($s);cn=l(yr,"section 3"),yr.forEach(t),hn=l(ua,", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),Qs=h(ua,"CODE",{});var $r=u(Qs);un=l($r,"Dataset.map()"),$r.forEach(t),dn=l(ua," call:"),ua.forEach(t),Na=m(e),x(Yt.$$.fragment,e),La=m(e),x(Te.$$.fragment,e),Wa=m(e),vs=h(e,"P",{});var vr=u(vs);mn=l(vr,"We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),vr.forEach(t),$t=m(e),js=h(e,"P",{});var jr=u(js);fn=l(jr,"Now that we have the dataset ready, let\u2019s set up the model!"),jr.forEach(t),Ia=m(e),x(vt.$$.fragment,e),jt=m(e),Je=h(e,"H2",{class:!0});var Uo=u(Je);xt=h(Uo,"A",{id:!0,class:!0,href:!0});var xr=u(xt);ea=h(xr,"SPAN",{});var qr=u(ea);x(Xt.$$.fragment,qr),qr.forEach(t),xr.forEach(t),Kt=m(Uo),ta=h(Uo,"SPAN",{});var Er=u(ta);_n=l(Er,"Initializing a new model"),Er.forEach(t),Uo.forEach(t),Fe=m(e),Ne=h(e,"P",{});var Mn=u(Ne);gn=l(Mn,"Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),sa=h(Mn,"CODE",{});var zr=u(sa);wn=l(zr,"bos"),zr.forEach(t),Vt=l(Mn," and "),aa=h(Mn,"CODE",{});var Tr=u(aa);bn=l(Tr,"eos"),Tr.forEach(t),kn=l(Mn," (beginning and end of sequence) token IDs:"),Mn.forEach(t),xs=m(e),De.l(e),yn=m(e),Zt=h(e,"P",{});var Hn=u(Zt);Zo=l(Hn,"Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Un=h(Hn,"CODE",{});var Pr=u(Un);Jo=l(Pr,"DataCollatorForLanguageModeling"),Pr.forEach(t),Qo=l(Hn," collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Yn=h(Hn,"CODE",{});var Dr=u(Yn);el=l(Dr,"input_ids"),Dr.forEach(t),tl=l(Hn,"."),Hn.forEach(t),po=m(e),Jt=h(e,"P",{});var Sn=u(Jt);sl=l(Sn,"Note that "),Xn=h(Sn,"CODE",{});var Cr=u(Xn);al=l(Cr,"DataCollatorForLanguageModeling"),Cr.forEach(t),nl=l(Sn," supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Kn=h(Sn,"CODE",{});var Ar=u(Kn);ol=l(Ar,"mlm=False"),Ar.forEach(t),ll=l(Sn,":"),Sn.forEach(t),co=m(e),Et.l(e),$n=m(e),vn=h(e,"P",{});var Or=u(vn);rl=l(Or,"Let\u2019s have a look at an example:"),Or.forEach(t),ho=m(e),x(Ga.$$.fragment,e),uo=m(e),Tt.l(e),jn=m(e),xn=h(e,"P",{});var Fr=u(xn);il=l(Fr,"We can see that the examples have been stacked and all the tensors have the same shape."),Fr.forEach(t),mo=m(e),J&&J.l(e),qn=m(e),x(na.$$.fragment,e),fo=m(e),En=h(e,"P",{});var Nr=u(En);pl=l(Nr,"Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),Nr.forEach(t),_o=m(e),x(Ma.$$.fragment,e),go=m(e),zn=h(e,"P",{});var Lr=u(zn);cl=l(Lr,"This will display a widget where you can enter your Hugging Face login credentials."),Lr.forEach(t),wo=m(e),Tn=h(e,"P",{});var Wr=u(Tn);hl=l(Wr,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Wr.forEach(t),bo=m(e),x(Ha.$$.fragment,e),ko=m(e),Dt.l(e),Pn=m(e),x(oa.$$.fragment,e),yo=m(e),x(la.$$.fragment,e),$o=m(e),qs=h(e,"H2",{class:!0});var Yo=u(qs);ra=h(Yo,"A",{id:!0,class:!0,href:!0});var Ir=u(ra);Vn=h(Ir,"SPAN",{});var Gr=u(Vn);x(Sa.$$.fragment,Gr),Gr.forEach(t),Ir.forEach(t),ul=m(Yo),Zn=h(Yo,"SPAN",{});var Mr=u(Zn);dl=l(Mr,"Code generation with a pipeline"),Mr.forEach(t),Yo.forEach(t),vo=m(e),ia=h(e,"P",{});var Xo=u(ia);ml=l(Xo,"Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),Jn=h(Xo,"CODE",{});var Hr=u(Jn);fl=l(Hr,"pipeline"),Hr.forEach(t),_l=l(Xo,", and we\u2019ll put it on the GPU for fast generations if there is one available:"),Xo.forEach(t),jo=m(e),At.l(e),Dn=m(e),Cn=h(e,"P",{});var Sr=u(Cn);gl=l(Sr,"Let\u2019s start with the simple task of creating a scatter plot:"),Sr.forEach(t),xo=m(e),x(Ra.$$.fragment,e),qo=m(e),x(Ba.$$.fragment,e),Eo=m(e),Qt=h(e,"P",{});var Rn=u(Qt);wl=l(Rn,"The result looks correct. Does it also work for a "),Qn=h(Rn,"CODE",{});var Rr=u(Qn);bl=l(Rr,"pandas"),Rr.forEach(t),kl=l(Rn," operation? Let\u2019s see if we can create a "),eo=h(Rn,"CODE",{});var Br=u(eo);yl=l(Br,"DataFrame"),Br.forEach(t),$l=l(Rn," from two arrays:"),Rn.forEach(t),zo=m(e),x(Ua.$$.fragment,e),To=m(e),x(Ya.$$.fragment,e),Po=m(e),Qe=h(e,"P",{});var da=u(Qe);vl=l(da,"Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),to=h(da,"CODE",{});var Ur=u(to);jl=l(Ur,"x"),Ur.forEach(t),xl=l(da," again. Since the number of generated tokens is limited, the following "),so=h(da,"CODE",{});var Yr=u(so);ql=l(Yr,"for"),Yr.forEach(t),El=l(da," loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),ao=h(da,"CODE",{});var Xr=u(ao);zl=l(Xr,"groupby"),Xr.forEach(t),Tl=l(da," operation:"),da.forEach(t),Do=m(e),x(Xa.$$.fragment,e),Co=m(e),x(Ka.$$.fragment,e),Ao=m(e),pa=h(e,"P",{});var Ko=u(pa);Pl=l(Ko,"Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),no=h(Ko,"CODE",{});var Kr=u(no);Dl=l(Kr,"scikit-learn"),Kr.forEach(t),Cl=l(Ko," and set up a Random Forest model:"),Ko.forEach(t),Oo=m(e),x(Va.$$.fragment,e),Fo=m(e),x(Za.$$.fragment,e),No=m(e),Es.l(e),An=m(e),Q&&Q.l(e),On=Vo(),this.h()},h(){F(n,"name","hf:doc:metadata"),F(n,"content",JSON.stringify(Pi)),F(k,"id","training-a-causal-language-model-from-scratch"),F(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(k,"href","#training-a-causal-language-model-from-scratch"),F($,"class","relative group"),F(R,"href","/course/chapter1"),F(ke,"href","/course/chapter6"),Al(K.src,ba="https://hf.space/gradioiframe/course-demos/codeparrot-ds/+")||F(K,"src",ba),F(K,"frameborder","0"),F(K,"height","300"),F(K,"title","Gradio app"),F(K,"class","block dark:hidden container p-0 flex-grow space-iframe"),F(K,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),F(K,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),F(te,"href","https://huggingface.co/huggingface-course/codeparrot-ds?text=plt.imshow%28"),F(te,"rel","nofollow"),F(He,"id","gathering-the-data"),F(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(He,"href","#gathering-the-data"),F(ue,"class","relative group"),F(st,"href","https://learning.oreilly.com/library/view/natural-language-processing/9781098103231/"),F(st,"rel","nofollow"),F(Se,"href","https://huggingface.co/datasets/transformersbook/codeparrot"),F(Se,"rel","nofollow"),F(ie,"id","preparing-the-dataset"),F(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(ie,"href","#preparing-the-dataset"),F(qe,"class","relative group"),F(gt,"href","/course/chapter6/4"),F(ce,"class","block dark:hidden"),Al(ce.src,on="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts.svg")||F(ce,"src",on),F(ce,"alt","Chunking a large texts in several pieces."),F(bt,"class","hidden dark:block"),Al(bt.src,ln="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts-dark.svg")||F(bt,"src",ln),F(bt,"alt","Chunking a large texts in several pieces."),F(Ee,"class","flex justify-center"),F($s,"href","/course/chapter7/3"),F(xt,"id","initializing-a-new-model"),F(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(xt,"href","#initializing-a-new-model"),F(Je,"class","relative group"),F(ra,"id","code-generation-with-a-pipeline"),F(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(ra,"href","#code-generation-with-a-pipeline"),F(qs,"class","relative group")},m(e,p){s(document.head,n),r(e,f,p),q(i,e,p),r(e,_,p),r(e,$,p),s($,k),s(k,v),q(T,v,null),s($,z),s($,C),s(C,L),r(e,W,p),Ja[g].m(e,p),r(e,I,p),r(e,M,p),s(M,G),s(M,R),s(R,Y),s(M,N),s(M,H),s(H,S),s(M,V),r(e,Z,p),r(e,B,p),s(B,ee),s(B,ae),s(ae,O),s(B,U),s(B,We),s(We,Ie),s(B,Ot),s(B,we),s(we,Ge),s(B,Ft),s(B,ts),s(ts,ss),s(B,ga),r(e,zs,p),q(Ce,e,p),r(e,Ts,p),r(e,be,p),s(be,Ps),s(be,ke),s(ke,Ds),s(be,et),s(be,Nt),s(Nt,Lt),s(be,wa),r(e,as,p),r(e,K,p),r(e,tt,p),r(e,Me,p),s(Me,Cs),s(Me,te),s(te,ns),s(Me,ka),r(e,As,p),r(e,ue,p),s(ue,He),s(He,os),q(Ae,os,null),s(ue,ya),s(ue,Wt),s(Wt,ye),r(e,Os,p),r(e,se,p),s(se,$a),s(se,st),s(st,ls),s(se,va),s(se,rs),s(rs,Fs),s(se,at),s(se,Se),s(Se,It),s(se,ja),r(e,is,p),r(e,re,p),s(re,Ns),s(re,Re),s(Re,xa),s(re,Ls),r(e,Be,p),q(Ue,e,p),r(e,de,p),r(e,Gt,p),s(Gt,ps),r(e,Ws,p),q(nt,e,p),r(e,ot,p),q(lt,e,p),r(e,Is,p),r(e,rt,p),s(rt,it),r(e,cs,p),q($e,e,p),r(e,Gs,p),r(e,pt,p),s(pt,ct),r(e,hs,p),q(ve,e,p),r(e,Ms,p),q(Ye,e,p),r(e,Xe,p),r(e,ht,p),s(ht,ut),r(e,us,p),r(e,ne,p),s(ne,qa),r(e,Mt,p),q(dt,e,p),r(e,Hs,p),q(Oe,e,p),r(e,Ss,p),q(Ke,e,p),r(e,ds,p),r(e,je,p),s(je,Rs),r(e,oe,p),q(mt,e,p),r(e,Ht,p),q(ft,e,p),r(e,Bs,p),r(e,xe,p),s(xe,Ea),s(xe,ms),s(ms,fs),s(xe,za),r(e,Us,p),r(e,qe,p),s(qe,ie),s(ie,St),q(me,St,null),s(qe,Ys),s(qe,Ve),s(Ve,Ta),r(e,_s,p),q(fe,e,p),r(e,gs,p),r(e,le,p),s(le,Pa),r(e,Rt,p),r(e,pe,p),s(pe,Da),s(pe,_t),s(_t,Ca),s(pe,Aa),s(pe,gt),s(gt,Bt),s(pe,Oa),s(pe,Ut),s(Ut,wt),s(pe,Xs),r(e,Ze,p),r(e,Ee,p),s(Ee,ce),s(Ee,ws),s(Ee,bt),r(e,bs,p),r(e,ze,p),s(ze,Ks),r(e,kt,p),q(yt,e,p),r(e,ks,p),q(_e,e,p),r(e,ys,p),r(e,he,p),s(he,Vs),s(he,a),s(a,y),s(he,rn),r(e,Fa,p),r(e,ge,p),s(ge,Zs),s(ge,Js),s(Js,X),s(ge,pn),s(ge,$s),s($s,cn),s(ge,hn),s(ge,Qs),s(Qs,un),s(ge,dn),r(e,Na,p),q(Yt,e,p),r(e,La,p),q(Te,e,p),r(e,Wa,p),r(e,vs,p),s(vs,mn),r(e,$t,p),r(e,js,p),s(js,fn),r(e,Ia,p),q(vt,e,p),r(e,jt,p),r(e,Je,p),s(Je,xt),s(xt,ea),q(Xt,ea,null),s(Je,Kt),s(Je,ta),s(ta,_n),r(e,Fe,p),r(e,Ne,p),s(Ne,gn),s(Ne,sa),s(sa,wn),s(Ne,Vt),s(Ne,aa),s(aa,bn),s(Ne,kn),r(e,xs,p),Qa[Pe].m(e,p),r(e,yn,p),r(e,Zt,p),s(Zt,Zo),s(Zt,Un),s(Un,Jo),s(Zt,Qo),s(Zt,Yn),s(Yn,el),s(Zt,tl),r(e,po,p),r(e,Jt,p),s(Jt,sl),s(Jt,Xn),s(Xn,al),s(Jt,nl),s(Jt,Kn),s(Kn,ol),s(Jt,ll),r(e,co,p),en[qt].m(e,p),r(e,$n,p),r(e,vn,p),s(vn,rl),r(e,ho,p),q(Ga,e,p),r(e,uo,p),tn[zt].m(e,p),r(e,jn,p),r(e,xn,p),s(xn,il),r(e,mo,p),J&&J.m(e,p),r(e,qn,p),q(na,e,p),r(e,fo,p),r(e,En,p),s(En,pl),r(e,_o,p),q(Ma,e,p),r(e,go,p),r(e,zn,p),s(zn,cl),r(e,wo,p),r(e,Tn,p),s(Tn,hl),r(e,bo,p),q(Ha,e,p),r(e,ko,p),sn[Pt].m(e,p),r(e,Pn,p),q(oa,e,p),r(e,yo,p),q(la,e,p),r(e,$o,p),r(e,qs,p),s(qs,ra),s(ra,Vn),q(Sa,Vn,null),s(qs,ul),s(qs,Zn),s(Zn,dl),r(e,vo,p),r(e,ia,p),s(ia,ml),s(ia,Jn),s(Jn,fl),s(ia,_l),r(e,jo,p),an[Ct].m(e,p),r(e,Dn,p),r(e,Cn,p),s(Cn,gl),r(e,xo,p),q(Ra,e,p),r(e,qo,p),q(Ba,e,p),r(e,Eo,p),r(e,Qt,p),s(Qt,wl),s(Qt,Qn),s(Qn,bl),s(Qt,kl),s(Qt,eo),s(eo,yl),s(Qt,$l),r(e,zo,p),q(Ua,e,p),r(e,To,p),q(Ya,e,p),r(e,Po,p),r(e,Qe,p),s(Qe,vl),s(Qe,to),s(to,jl),s(Qe,xl),s(Qe,so),s(so,ql),s(Qe,El),s(Qe,ao),s(ao,zl),s(Qe,Tl),r(e,Do,p),q(Xa,e,p),r(e,Co,p),q(Ka,e,p),r(e,Ao,p),r(e,pa,p),s(pa,Pl),s(pa,no),s(no,Dl),s(pa,Cl),r(e,Oo,p),q(Va,e,p),r(e,Fo,p),q(Za,e,p),r(e,No,p),Es.m(e,p),r(e,An,p),Q&&Q.m(e,p),r(e,On,p),Lo=!0},p(e,[p]){const nn={};p&1&&(nn.fw=e[0]),i.$set(nn);let Fn=g;g=Nl(e),g!==Fn&&(fa(),b(Ja[Fn],1,1,()=>{Ja[Fn]=null}),ma(),P=Ja[g],P||(P=Ja[g]=Fl[g](e),P.c()),w(P,1),P.m(I.parentNode,I));const oo={};p&2&&(oo.$$scope={dirty:p,ctx:e}),Ke.$set(oo);const lo={};p&2&&(lo.$$scope={dirty:p,ctx:e}),vt.$set(lo);let es=Pe;Pe=Wl(e),Pe!==es&&(fa(),b(Qa[es],1,1,()=>{Qa[es]=null}),ma(),De=Qa[Pe],De||(De=Qa[Pe]=Ll[Pe](e),De.c()),w(De,1),De.m(yn.parentNode,yn));let Nn=qt;qt=Gl(e),qt!==Nn&&(fa(),b(en[Nn],1,1,()=>{en[Nn]=null}),ma(),Et=en[qt],Et||(Et=en[qt]=Il[qt](e),Et.c()),w(Et,1),Et.m($n.parentNode,$n));let Ln=zt;zt=Hl(e),zt!==Ln&&(fa(),b(tn[Ln],1,1,()=>{tn[Ln]=null}),ma(),Tt=tn[zt],Tt||(Tt=tn[zt]=Ml[zt](e),Tt.c()),w(Tt,1),Tt.m(jn.parentNode,jn)),e[0]==="tf"?J?p&1&&w(J,1):(J=Vr(),J.c(),w(J,1),J.m(qn.parentNode,qn)):J&&(fa(),b(J,1,1,()=>{J=null}),ma());const Le={};p&2&&(Le.$$scope={dirty:p,ctx:e}),na.$set(Le);let Wn=Pt;Pt=Rl(e),Pt!==Wn&&(fa(),b(sn[Wn],1,1,()=>{sn[Wn]=null}),ma(),Dt=sn[Pt],Dt||(Dt=sn[Pt]=Sl[Pt](e),Dt.c()),w(Dt,1),Dt.m(Pn.parentNode,Pn));const ro={};p&2&&(ro.$$scope={dirty:p,ctx:e}),oa.$set(ro);const io={};p&3&&(io.$$scope={dirty:p,ctx:e}),la.$set(io);let In=Ct;Ct=Ul(e),Ct!==In&&(fa(),b(an[In],1,1,()=>{an[In]=null}),ma(),At=an[Ct],At||(At=an[Ct]=Bl[Ct](e),At.c()),w(At,1),At.m(Dn.parentNode,Dn)),Wo!==(Wo=Yl(e))&&(Es.d(1),Es=Wo(e),Es&&(Es.c(),Es.m(An.parentNode,An))),e[0]==="pt"?Q?p&1&&w(Q,1):(Q=Zr(e),Q.c(),w(Q,1),Q.m(On.parentNode,On)):Q&&(fa(),b(Q,1,1,()=>{Q=null}),ma())},i(e){Lo||(w(i.$$.fragment,e),w(T.$$.fragment,e),w(P),w(Ce.$$.fragment,e),w(Ae.$$.fragment,e),w(Ue.$$.fragment,e),w(nt.$$.fragment,e),w(lt.$$.fragment,e),w($e.$$.fragment,e),w(ve.$$.fragment,e),w(Ye.$$.fragment,e),w(dt.$$.fragment,e),w(Oe.$$.fragment,e),w(Ke.$$.fragment,e),w(mt.$$.fragment,e),w(ft.$$.fragment,e),w(me.$$.fragment,e),w(fe.$$.fragment,e),w(yt.$$.fragment,e),w(_e.$$.fragment,e),w(Yt.$$.fragment,e),w(Te.$$.fragment,e),w(vt.$$.fragment,e),w(Xt.$$.fragment,e),w(De),w(Et),w(Ga.$$.fragment,e),w(Tt),w(J),w(na.$$.fragment,e),w(Ma.$$.fragment,e),w(Ha.$$.fragment,e),w(Dt),w(oa.$$.fragment,e),w(la.$$.fragment,e),w(Sa.$$.fragment,e),w(At),w(Ra.$$.fragment,e),w(Ba.$$.fragment,e),w(Ua.$$.fragment,e),w(Ya.$$.fragment,e),w(Xa.$$.fragment,e),w(Ka.$$.fragment,e),w(Va.$$.fragment,e),w(Za.$$.fragment,e),w(Q),Lo=!0)},o(e){b(i.$$.fragment,e),b(T.$$.fragment,e),b(P),b(Ce.$$.fragment,e),b(Ae.$$.fragment,e),b(Ue.$$.fragment,e),b(nt.$$.fragment,e),b(lt.$$.fragment,e),b($e.$$.fragment,e),b(ve.$$.fragment,e),b(Ye.$$.fragment,e),b(dt.$$.fragment,e),b(Oe.$$.fragment,e),b(Ke.$$.fragment,e),b(mt.$$.fragment,e),b(ft.$$.fragment,e),b(me.$$.fragment,e),b(fe.$$.fragment,e),b(yt.$$.fragment,e),b(_e.$$.fragment,e),b(Yt.$$.fragment,e),b(Te.$$.fragment,e),b(vt.$$.fragment,e),b(Xt.$$.fragment,e),b(De),b(Et),b(Ga.$$.fragment,e),b(Tt),b(J),b(na.$$.fragment,e),b(Ma.$$.fragment,e),b(Ha.$$.fragment,e),b(Dt),b(oa.$$.fragment,e),b(la.$$.fragment,e),b(Sa.$$.fragment,e),b(At),b(Ra.$$.fragment,e),b(Ba.$$.fragment,e),b(Ua.$$.fragment,e),b(Ya.$$.fragment,e),b(Xa.$$.fragment,e),b(Ka.$$.fragment,e),b(Va.$$.fragment,e),b(Za.$$.fragment,e),b(Q),Lo=!1},d(e){t(n),e&&t(f),E(i,e),e&&t(_),e&&t($),E(T),e&&t(W),Ja[g].d(e),e&&t(I),e&&t(M),e&&t(Z),e&&t(B),e&&t(zs),E(Ce,e),e&&t(Ts),e&&t(be),e&&t(as),e&&t(K),e&&t(tt),e&&t(Me),e&&t(As),e&&t(ue),E(Ae),e&&t(Os),e&&t(se),e&&t(is),e&&t(re),e&&t(Be),E(Ue,e),e&&t(de),e&&t(Gt),e&&t(Ws),E(nt,e),e&&t(ot),E(lt,e),e&&t(Is),e&&t(rt),e&&t(cs),E($e,e),e&&t(Gs),e&&t(pt),e&&t(hs),E(ve,e),e&&t(Ms),E(Ye,e),e&&t(Xe),e&&t(ht),e&&t(us),e&&t(ne),e&&t(Mt),E(dt,e),e&&t(Hs),E(Oe,e),e&&t(Ss),E(Ke,e),e&&t(ds),e&&t(je),e&&t(oe),E(mt,e),e&&t(Ht),E(ft,e),e&&t(Bs),e&&t(xe),e&&t(Us),e&&t(qe),E(me),e&&t(_s),E(fe,e),e&&t(gs),e&&t(le),e&&t(Rt),e&&t(pe),e&&t(Ze),e&&t(Ee),e&&t(bs),e&&t(ze),e&&t(kt),E(yt,e),e&&t(ks),E(_e,e),e&&t(ys),e&&t(he),e&&t(Fa),e&&t(ge),e&&t(Na),E(Yt,e),e&&t(La),E(Te,e),e&&t(Wa),e&&t(vs),e&&t($t),e&&t(js),e&&t(Ia),E(vt,e),e&&t(jt),e&&t(Je),E(Xt),e&&t(Fe),e&&t(Ne),e&&t(xs),Qa[Pe].d(e),e&&t(yn),e&&t(Zt),e&&t(po),e&&t(Jt),e&&t(co),en[qt].d(e),e&&t($n),e&&t(vn),e&&t(ho),E(Ga,e),e&&t(uo),tn[zt].d(e),e&&t(jn),e&&t(xn),e&&t(mo),J&&J.d(e),e&&t(qn),E(na,e),e&&t(fo),e&&t(En),e&&t(_o),E(Ma,e),e&&t(go),e&&t(zn),e&&t(wo),e&&t(Tn),e&&t(bo),E(Ha,e),e&&t(ko),sn[Pt].d(e),e&&t(Pn),E(oa,e),e&&t(yo),E(la,e),e&&t($o),e&&t(qs),E(Sa),e&&t(vo),e&&t(ia),e&&t(jo),an[Ct].d(e),e&&t(Dn),e&&t(Cn),e&&t(xo),E(Ra,e),e&&t(qo),E(Ba,e),e&&t(Eo),e&&t(Qt),e&&t(zo),E(Ua,e),e&&t(To),E(Ya,e),e&&t(Po),e&&t(Qe),e&&t(Do),E(Xa,e),e&&t(Co),E(Ka,e),e&&t(Ao),e&&t(pa),e&&t(Oo),E(Va,e),e&&t(Fo),E(Za,e),e&&t(No),Es.d(e),e&&t(An),Q&&Q.d(e),e&&t(On)}}}const Pi={local:"training-a-causal-language-model-from-scratch",sections:[{local:"gathering-the-data",title:"Gathering the data"},{local:"preparing-the-dataset",title:"Preparing the dataset"},{local:"initializing-a-new-model",title:"Initializing a new model"},{local:"code-generation-with-a-pipeline",title:"Code generation with a pipeline"},{local:"training-with-accelerate",title:"Training with \u{1F917} Accelerate"}],title:"Training a causal language model from scratch"};function Di(A,n,f){let i="pt";return ai(()=>{const _=new URLSearchParams(window.location.search);f(0,i=_.get("fw")||"pt")}),[i]}class Ii extends Qr{constructor(n){super();ei(this,n,Di,Ti,ti,{})}}export{Ii as default,Pi as metadata};
