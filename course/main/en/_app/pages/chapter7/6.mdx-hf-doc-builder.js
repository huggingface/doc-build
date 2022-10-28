import{S as Qr,i as ei,s as ti,e as c,t as o,k as d,w as j,c as h,a as u,h as l,d as t,m,x,g as r,G as s,y as q,q as w,o as b,B as E,b as F,l as Vo,M as si,N as Al,p as ma,v as ai,n as fa}from"../../chunks/vendor-hf-doc-builder.js";import{T as _a}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Ol}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Bn}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as D}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as Jr}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as ni}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function oi(A){let n,f;return n=new Jr({props:{chapter:7,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/en/chapter7/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/en/chapter7/section6_tf.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function li(A){let n,f;return n=new Jr({props:{chapter:7,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/en/chapter7/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/en/chapter7/section6_pt.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ri(A){let n,f;return{c(){n=c("p"),f=o("Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!"),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function ii(A){let n,f,i,_,$,k,v,T,z,C,N,W,g,P;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=c("code"),v=o("eos_token_id"),T=o(" token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=c("code"),C=o("tokenize()"),N=o(" function to make use of that approach. Note that you\u2019ll want to set "),W=c("code"),g=o("truncation=False"),P=o(" and remove the other arguments from the tokenizer to get the full sequence of token IDs.")},l(G){n=h(G,"P",{});var H=u(n);f=l(H,"\u270F\uFE0F "),i=h(H,"STRONG",{});var M=u(i);_=l(M,"Try it out!"),M.forEach(t),$=l(H," Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=h(H,"CODE",{});var R=u(k);v=l(R,"eos_token_id"),R.forEach(t),T=l(H," token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=h(H,"CODE",{});var U=u(z);C=l(U,"tokenize()"),U.forEach(t),N=l(H," function to make use of that approach. Note that you\u2019ll want to set "),W=h(H,"CODE",{});var L=u(W);g=l(L,"truncation=False"),L.forEach(t),P=l(H," and remove the other arguments from the tokenizer to get the full sequence of token IDs."),H.forEach(t)},m(G,H){r(G,n,H),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,C),s(n,N),s(n,W),s(W,g),s(n,P)},d(G){G&&t(n)}}}function pi(A){let n,f,i,_,$,k,v,T,z,C,N,W;return n=new D({props:{code:`from transformers import AutoTokenizer, TFGPT2LMHeadModel, AutoConfig

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
model.summary()`}}),N=new D({props:{code:`_________________________________________________________________
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
_________________________________________________________________`}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),C=d(),j(N.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var G=u($);k=l(G,"from_pretrained()"),G.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),C=m(g),x(N.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,C,P),q(N,g,P),W=!0},i(g){W||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(N.$$.fragment,g),W=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(N.$$.fragment,g),W=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(C),E(N,g)}}}function ci(A){let n,f,i,_,$,k,v,T,z,C,N,W;return n=new D({props:{code:`from transformers import AutoTokenizer, GPT2LMHeadModel, AutoConfig

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;GPT-2 size: <span class="hljs-subst">{model_size/<span class="hljs-number">1000</span>**<span class="hljs-number">2</span>:<span class="hljs-number">.1</span>f}</span>M parameters&quot;</span>)`}}),N=new D({props:{code:"GPT-2 size: 124.2M parameters",highlighted:'GPT-<span class="hljs-number">2</span> size: <span class="hljs-number">124.2</span>M parameters'}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),C=d(),j(N.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var G=u($);k=l(G,"from_pretrained()"),G.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),C=m(g),x(N.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,C,P),q(N,g,P),W=!0},i(g){W||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(N.$$.fragment,g),W=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(N.$$.fragment,g),W=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(C),E(N,g)}}}function hi(A){let n,f;return n=new D({props:{code:`from transformers import DataCollatorForLanguageModeling

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
labels shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function Vr(A){let n,f,i,_,$,k,v,T;return v=new D({props:{code:`tf_train_dataset = model.prepare_tf_dataset(
    tokenized_dataset["train"],
    collate_fn=data_collator,
    shuffle=True,
    batch_size=32,
)
tf_eval_dataset = model.prepare_tf_dataset(
    tokenized_dataset["valid"],
    collate_fn=data_collator,
    shuffle=False,
    batch_size=32,
)`,highlighted:`tf_train_dataset = model.prepare_tf_dataset(
    tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">32</span>,
)
tf_eval_dataset = model.prepare_tf_dataset(
    tokenized_dataset[<span class="hljs-string">&quot;valid&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">32</span>,
)`}}),{c(){n=c("p"),f=o("Now we can use the "),i=c("code"),_=o("prepare_tf_dataset()"),$=o(" method to convert our datasets to TensorFlow datasets with the data collator we created above:"),k=d(),j(v.$$.fragment)},l(z){n=h(z,"P",{});var C=u(n);f=l(C,"Now we can use the "),i=h(C,"CODE",{});var N=u(i);_=l(N,"prepare_tf_dataset()"),N.forEach(t),$=l(C," method to convert our datasets to TensorFlow datasets with the data collator we created above:"),C.forEach(t),k=m(z),x(v.$$.fragment,z)},m(z,C){r(z,n,C),s(n,f),s(n,i),s(i,_),s(n,$),r(z,k,C),q(v,z,C),T=!0},i(z){T||(w(v.$$.fragment,z),T=!0)},o(z){b(v.$$.fragment,z),T=!1},d(z){z&&t(n),z&&t(k),E(v,z)}}}function fi(A){let n,f;return{c(){n=c("p"),f=o("\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function _i(A){let n,f,i,_,$,k,v,T,z,C,N,W,g,P,G,H,M,R,U;return C=new D({props:{code:`from transformers import create_optimizer
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

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])`}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training hyperparameters and call "),i=c("code"),_=o("compile()"),$=o(" and "),k=c("code"),v=o("fit()"),T=o(". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),z=d(),j(C.$$.fragment),N=d(),W=c("p"),g=o("Now we can just call "),P=c("code"),G=o("model.fit()"),H=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),M=d(),j(R.$$.fragment)},l(L){n=h(L,"P",{});var S=u(n);f=l(S,"All that\u2019s left to do is configure the training hyperparameters and call "),i=h(S,"CODE",{});var K=u(i);_=l(K,"compile()"),K.forEach(t),$=l(S," and "),k=h(S,"CODE",{});var V=u(k);v=l(V,"fit()"),V.forEach(t),T=l(S,". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),S.forEach(t),z=m(L),x(C.$$.fragment,L),N=m(L),W=h(L,"P",{});var Y=u(W);g=l(Y,"Now we can just call "),P=h(Y,"CODE",{});var I=u(P);G=l(I,"model.fit()"),I.forEach(t),H=l(Y," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),Y.forEach(t),M=m(L),x(R.$$.fragment,L)},m(L,S){r(L,n,S),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),r(L,z,S),q(C,L,S),r(L,N,S),r(L,W,S),s(W,g),s(W,P),s(P,G),s(W,H),r(L,M,S),q(R,L,S),U=!0},i(L){U||(w(C.$$.fragment,L),w(R.$$.fragment,L),U=!0)},o(L){b(C.$$.fragment,L),b(R.$$.fragment,L),U=!1},d(L){L&&t(n),L&&t(z),E(C,L),L&&t(N),L&&t(W),L&&t(M),E(R,L)}}}function gi(A){let n,f,i,_,$,k,v,T,z,C,N,W,g,P,G,H,M,R,U,L,S,K,V,Y,I,ee,ae;return g=new D({props:{code:`from transformers import Trainer, TrainingArguments

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
)`}}),S=new D({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),ee=new D({props:{code:"trainer.push_to_hub()",highlighted:"trainer.push_to_hub()"}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training arguments and fire up the "),i=c("code"),_=o("Trainer"),$=o(". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=c("code"),v=o("per_device_train_batch_size"),T=o(" * "),z=c("code"),C=o("gradient_accumulation_steps"),N=o("). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),W=d(),j(g.$$.fragment),P=d(),G=c("p"),H=o("Now we can just start the "),M=c("code"),R=o("Trainer"),U=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),L=d(),j(S.$$.fragment),K=d(),V=c("p"),Y=o("After training completes, we can push the model and tokenizer to the Hub:"),I=d(),j(ee.$$.fragment)},l(O){n=h(O,"P",{});var B=u(n);f=l(B,"All that\u2019s left to do is configure the training arguments and fire up the "),i=h(B,"CODE",{});var ue=u(i);_=l(ue,"Trainer"),ue.forEach(t),$=l(B,". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=h(B,"CODE",{});var de=u(k);v=l(de,"per_device_train_batch_size"),de.forEach(t),T=l(B," * "),z=h(B,"CODE",{});var Oe=u(z);C=l(Oe,"gradient_accumulation_steps"),Oe.forEach(t),N=l(B,"). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),B.forEach(t),W=m(O),x(g.$$.fragment,O),P=m(O),G=h(O,"P",{});var ke=u(G);H=l(ke,"Now we can just start the "),M=h(ke,"CODE",{});var Me=u(M);R=l(Me,"Trainer"),Me.forEach(t),U=l(ke," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),ke.forEach(t),L=m(O),x(S.$$.fragment,O),K=m(O),V=h(O,"P",{});var Ft=u(V);Y=l(Ft,"After training completes, we can push the model and tokenizer to the Hub:"),Ft.forEach(t),I=m(O),x(ee.$$.fragment,O)},m(O,B){r(O,n,B),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,C),s(n,N),r(O,W,B),q(g,O,B),r(O,P,B),r(O,G,B),s(G,H),s(G,M),s(M,R),s(G,U),r(O,L,B),q(S,O,B),r(O,K,B),r(O,V,B),s(V,Y),r(O,I,B),q(ee,O,B),ae=!0},i(O){ae||(w(g.$$.fragment,O),w(S.$$.fragment,O),w(ee.$$.fragment,O),ae=!0)},o(O){b(g.$$.fragment,O),b(S.$$.fragment,O),b(ee.$$.fragment,O),ae=!1},d(O){O&&t(n),O&&t(W),E(g,O),O&&t(P),O&&t(G),O&&t(L),E(S,O),O&&t(K),O&&t(V),O&&t(I),E(ee,O)}}}function wi(A){let n,f,i,_,$,k,v,T;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" It only took us about 30 lines of code in addition to the "),k=c("code"),v=o("TrainingArguments"),T=o(" to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!")},l(z){n=h(z,"P",{});var C=u(n);f=l(C,"\u270F\uFE0F "),i=h(C,"STRONG",{});var N=u(i);_=l(N,"Try it out!"),N.forEach(t),$=l(C," It only took us about 30 lines of code in addition to the "),k=h(C,"CODE",{});var W=u(k);v=l(W,"TrainingArguments"),W.forEach(t),T=l(C," to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!"),C.forEach(t)},m(z,C){r(z,n,C),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T)},d(z){z&&t(n)}}}function bi(A){let n,f,i,_,$,k,v,T,z,C,N,W,g,P,G,H,M,R,U,L,S,K,V;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=c("code"),_=o("MirroredStrategy"),$=o(" context to substantially speed up training. You\u2019ll need to create a "),k=c("code"),v=o("tf.distribute.MirroredStrategy"),T=o(" object, and make sure that any "),z=c("code"),C=o("to_tf_dataset()"),N=o(" or "),W=c("code"),g=o("prepare_tf_dataset()"),P=o(" methods as well as model creation and the call to "),G=c("code"),H=o("fit()"),M=o(" are all run in its "),R=c("code"),U=o("scope()"),L=o(" context. You can see documentation on this "),S=c("a"),K=o("here"),V=o("."),this.h()},l(Y){n=h(Y,"P",{});var I=u(n);f=l(I,"\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=h(I,"CODE",{});var ee=u(i);_=l(ee,"MirroredStrategy"),ee.forEach(t),$=l(I," context to substantially speed up training. You\u2019ll need to create a "),k=h(I,"CODE",{});var ae=u(k);v=l(ae,"tf.distribute.MirroredStrategy"),ae.forEach(t),T=l(I," object, and make sure that any "),z=h(I,"CODE",{});var O=u(z);C=l(O,"to_tf_dataset()"),O.forEach(t),N=l(I," or "),W=h(I,"CODE",{});var B=u(W);g=l(B,"prepare_tf_dataset()"),B.forEach(t),P=l(I," methods as well as model creation and the call to "),G=h(I,"CODE",{});var ue=u(G);H=l(ue,"fit()"),ue.forEach(t),M=l(I," are all run in its "),R=h(I,"CODE",{});var de=u(R);U=l(de,"scope()"),de.forEach(t),L=l(I," context. You can see documentation on this "),S=h(I,"A",{href:!0,rel:!0});var Oe=u(S);K=l(Oe,"here"),Oe.forEach(t),V=l(I,"."),I.forEach(t),this.h()},h(){F(S,"href","https://www.tensorflow.org/guide/distributed_training#use_tfdistributestrategy_with_keras_modelfit"),F(S,"rel","nofollow")},m(Y,I){r(Y,n,I),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,C),s(n,N),s(n,W),s(W,g),s(n,P),s(n,G),s(G,H),s(n,M),s(n,R),s(R,U),s(n,L),s(n,S),s(S,K),s(n,V)},d(Y){Y&&t(n)}}}function ki(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=c("code"),_=o("Trainer"),$=o(" automatically manages multiple machines, and this can speed up training tremendously.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," automatically manages multiple machines, and this can speed up training tremendously."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function yi(A){let n;function f($,k){return $[0]==="pt"?ki:bi}let i=f(A),_=i(A);return{c(){_.c(),n=Vo()},l($){_.l($),n=Vo()},m($,k){_.m($,k),r($,n,k)},p($,k){i!==(i=f($))&&(_.d(1),_=i($),_&&(_.c(),_.m(n.parentNode,n)))},d($){_.d($),$&&t(n)}}}function $i(A){let n,f;return n=new D({props:{code:`from transformers import pipeline

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
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ji(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=c("code"),_=o("Trainer"),$=o(" and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function xi(A){let n,f;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function Zr(A){let n,f,i,_,$,k,v,T,z,C,N,W,g,P,G,H,M,R,U,L,S,K,V,Y,I,ee,ae,O,B,ue,de,Oe,ke,Me,Ft,ts,ss,ga,zs,Fe,Ts,ye,Ps,$e,Ds,tt,Lt,Nt,wa,as,Z,ba,st,He,Cs,te,ns,ka,As,me,Se,os,Le,ya,Wt,ve,Os,se,$a,at,ls,va,rs,Fs,nt,Re,It,ja,is,re,Ls,Be,xa,Ns,Ue,Ye,fe,Gt,ps,Ws,ot,lt,rt,Is,it,pt,cs,je,Gs,ct,ht,hs,xe,Ms,Xe,Ke,ut,dt,us,ne,qa,Mt,mt,Hs,Ne,Ss,Ve,ds,qe,Rs,oe,ft,Ht,_t,Bs,Ee,Ea,ms,fs,za,Us,ze,ie,St,_e,Ys,Ze,Ta,_s,ge,gs,le,Pa,Rt,pe,Da,gt,Ca,Aa,wt,Bt,Oa,Ut,bt,Xs,Je,Te,ce,on,ws,kt,ln,bs,Pe,Ks,yt,$t,ks,we,ys,he,Vs;return _=new Bn({}),G=new Ol({props:{id:"Hm8_PgVTFuc"}}),$e=new D({props:{code:`keytoken_ids = []
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Keyword has not single token: <span class="hljs-subst">{keyword}</span>&quot;</span>)`}}),tt=new D({props:{code:"'Keyword has not single token: testtest'",highlighted:'<span class="hljs-string">&#x27;Keyword has not single token: testtest&#x27;</span>'}}),Z=new D({props:{code:`from torch.nn import CrossEntropyLoss
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
    <span class="hljs-keyword">return</span> weighted_loss`}}),nt=new D({props:{code:`from torch.utils.data.dataloader import DataLoader

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
    ]`}}),Ue=new D({props:{code:`def evaluate():
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
    <span class="hljs-keyword">return</span> loss.item(), perplexity.item()`}}),pt=new D({props:{code:"model = GPT2LMHeadModel(config)",highlighted:"model = GPT2LMHeadModel(config)"}}),ht=new D({props:{code:`from torch.optim import AdamW

optimizer = AdamW(get_grouped_params(model), lr=5e-4)`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(get_grouped_params(model), lr=<span class="hljs-number">5e-4</span>)`}}),Ke=new D({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),dt=new _a({props:{$$slots:{default:[qi]},$$scope:{ctx:A}}}),qe=new D({props:{code:`from transformers import get_scheduler

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
repo_name`}}),_e=new D({props:{code:"'sgugger/codeparrot-ds-accelerate'",highlighted:'<span class="hljs-string">&#x27;sgugger/codeparrot-ds-accelerate&#x27;</span>'}}),ge=new D({props:{code:`output_dir = "codeparrot-ds-accelerate"
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`output_dir = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),bt=new D({props:{code:"evaluate()",highlighted:"evaluate()"}}),Je=new D({props:{code:"(10.934126853942871, 56057.14453125)",highlighted:'(<span class="hljs-number">10.934126853942871</span>, <span class="hljs-number">56057.14453125</span>)'}}),Pe=new D({props:{code:`from tqdm.notebook import tqdm

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
                )`}}),we=new _a({props:{$$slots:{default:[Ei]},$$scope:{ctx:A}}}),he=new _a({props:{$$slots:{default:[zi]},$$scope:{ctx:A}}}),{c(){n=c("h2"),f=c("a"),i=c("span"),j(_.$$.fragment),$=d(),k=c("span"),v=o("Training with \u{1F917} Accelerate"),T=d(),z=c("p"),C=o("We\u2019ve seen how to train a model with the "),N=c("code"),W=o("Trainer"),g=o(", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),P=d(),j(G.$$.fragment),H=d(),M=c("p"),R=o("Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),U=c("code"),L=o("plt"),S=o(", "),K=c("code"),V=o("pd"),Y=o(", "),I=c("code"),ee=o("sk"),ae=o(", "),O=c("code"),B=o("fit"),ue=o(", and "),de=c("code"),Oe=o("predict"),ke=o(", which are the most frequent import names for "),Me=c("code"),Ft=o("matplotlib.pyplot"),ts=o(", "),ss=c("code"),ga=o("pandas"),zs=o(", and "),Fe=c("code"),Ts=o("sklearn"),ye=o(" as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),Ps=d(),j($e.$$.fragment),Ds=d(),j(tt.$$.fragment),Lt=d(),Nt=c("p"),wa=o("Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),as=d(),j(Z.$$.fragment),ba=d(),st=c("p"),He=o("Before we can start training with this awesome new loss function, we need to prepare a few things:"),Cs=d(),te=c("ul"),ns=c("li"),ka=o("We need dataloaders to load the data in batches."),As=d(),me=c("li"),Se=o("We need to set up weight decay parameters."),os=d(),Le=c("li"),ya=o("From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),Wt=d(),ve=c("p"),Os=o("Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),se=c("code"),$a=o('"torch"'),at=o(", and then we can pass it to a PyTorch "),ls=c("code"),va=o("DataLoader"),rs=o(" with the appropriate batch size:"),Fs=d(),j(nt.$$.fragment),Re=d(),It=c("p"),ja=o("Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),is=d(),j(re.$$.fragment),Ls=d(),Be=c("p"),xa=o("Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),Ns=d(),j(Ue.$$.fragment),Ye=d(),fe=c("p"),Gt=o("With the "),ps=c("code"),Ws=o("evaluate()"),ot=o(" function we can report loss and "),lt=c("a"),rt=o("perplexity"),Is=o(" at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),it=d(),j(pt.$$.fragment),cs=d(),je=c("p"),Gs=o("We can then define our optimizer, using the function from before to split the parameters for weight decay:"),ct=d(),j(ht.$$.fragment),hs=d(),xe=c("p"),Ms=o("Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),Xe=d(),j(Ke.$$.fragment),ut=d(),j(dt.$$.fragment),us=d(),ne=c("p"),qa=o("Now that we have sent our "),Mt=c("code"),mt=o("train_dataloader"),Hs=o(" to "),Ne=c("code"),Ss=o("accelerator.prepare()"),Ve=o(", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),ds=d(),j(qe.$$.fragment),Rs=d(),oe=c("p"),ft=o("Lastly, to push our model to the Hub, we will need to create a "),Ht=c("code"),_t=o("Repository"),Bs=o(" object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Ee=c("code"),Ea=o("repo_name"),ms=o(" with your own choice; it just needs to contain your username, which is what the function "),fs=c("code"),za=o("get_full_repo_name()"),Us=o(" does):"),ze=d(),j(ie.$$.fragment),St=d(),j(_e.$$.fragment),Ys=d(),Ze=c("p"),Ta=o("Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),_s=d(),j(ge.$$.fragment),gs=d(),le=c("p"),Pa=o("We can now upload anything we save in "),Rt=c("code"),pe=o("output_dir"),Da=o(" by calling the "),gt=c("code"),Ca=o("repo.push_to_hub()"),Aa=o(" method. This will help us upload the intermediate models at the end of each epoch."),wt=d(),Bt=c("p"),Oa=o("Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),Ut=d(),j(bt.$$.fragment),Xs=d(),j(Je.$$.fragment),Te=d(),ce=c("p"),on=o("Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),ws=c("code"),kt=o("evaluate()"),ln=o(" function:"),bs=d(),j(Pe.$$.fragment),Ks=d(),yt=c("p"),$t=o("And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),ks=d(),j(we.$$.fragment),ys=d(),j(he.$$.fragment),this.h()},l(a){n=h(a,"H2",{class:!0});var y=u(n);f=h(y,"A",{id:!0,class:!0,href:!0});var rn=u(f);i=h(rn,"SPAN",{});var Fa=u(i);x(_.$$.fragment,Fa),Fa.forEach(t),rn.forEach(t),$=m(y),k=h(y,"SPAN",{});var be=u(k);v=l(be,"Training with \u{1F917} Accelerate"),be.forEach(t),y.forEach(t),T=m(a),z=h(a,"P",{});var Zs=u(z);C=l(Zs,"We\u2019ve seen how to train a model with the "),N=h(Zs,"CODE",{});var Js=u(N);W=l(Js,"Trainer"),Js.forEach(t),g=l(Zs,", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),Zs.forEach(t),P=m(a),x(G.$$.fragment,a),H=m(a),M=h(a,"P",{});var X=u(M);R=l(X,"Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),U=h(X,"CODE",{});var pn=u(U);L=l(pn,"plt"),pn.forEach(t),S=l(X,", "),K=h(X,"CODE",{});var $s=u(K);V=l($s,"pd"),$s.forEach(t),Y=l(X,", "),I=h(X,"CODE",{});var cn=u(I);ee=l(cn,"sk"),cn.forEach(t),ae=l(X,", "),O=h(X,"CODE",{});var hn=u(O);B=l(hn,"fit"),hn.forEach(t),ue=l(X,", and "),de=h(X,"CODE",{});var Qs=u(de);Oe=l(Qs,"predict"),Qs.forEach(t),ke=l(X,", which are the most frequent import names for "),Me=h(X,"CODE",{});var un=u(Me);Ft=l(un,"matplotlib.pyplot"),un.forEach(t),ts=l(X,", "),ss=h(X,"CODE",{});var dn=u(ss);ga=l(dn,"pandas"),dn.forEach(t),zs=l(X,", and "),Fe=h(X,"CODE",{});var La=u(Fe);Ts=l(La,"sklearn"),La.forEach(t),ye=l(X," as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),X.forEach(t),Ps=m(a),x($e.$$.fragment,a),Ds=m(a),x(tt.$$.fragment,a),Lt=m(a),Nt=h(a,"P",{});var Yt=u(Nt);wa=l(Yt,"Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),Yt.forEach(t),as=m(a),x(Z.$$.fragment,a),ba=m(a),st=h(a,"P",{});var Na=u(st);He=l(Na,"Before we can start training with this awesome new loss function, we need to prepare a few things:"),Na.forEach(t),Cs=m(a),te=h(a,"UL",{});var De=u(te);ns=h(De,"LI",{});var Wa=u(ns);ka=l(Wa,"We need dataloaders to load the data in batches."),Wa.forEach(t),As=m(De),me=h(De,"LI",{});var vs=u(me);Se=l(vs,"We need to set up weight decay parameters."),vs.forEach(t),os=m(De),Le=h(De,"LI",{});var mn=u(Le);ya=l(mn,"From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),mn.forEach(t),De.forEach(t),Wt=m(a),ve=h(a,"P",{});var vt=u(ve);Os=l(vt,"Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),se=h(vt,"CODE",{});var js=u(se);$a=l(js,'"torch"'),js.forEach(t),at=l(vt,", and then we can pass it to a PyTorch "),ls=h(vt,"CODE",{});var fn=u(ls);va=l(fn,"DataLoader"),fn.forEach(t),rs=l(vt," with the appropriate batch size:"),vt.forEach(t),Fs=m(a),x(nt.$$.fragment,a),Re=m(a),It=h(a,"P",{});var Ia=u(It);ja=l(Ia,"Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),Ia.forEach(t),is=m(a),x(re.$$.fragment,a),Ls=m(a),Be=h(a,"P",{});var jt=u(Be);xa=l(jt,"Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),jt.forEach(t),Ns=m(a),x(Ue.$$.fragment,a),Ye=m(a),fe=h(a,"P",{});var xt=u(fe);Gt=l(xt,"With the "),ps=h(xt,"CODE",{});var Qe=u(ps);Ws=l(Qe,"evaluate()"),Qe.forEach(t),ot=l(xt," function we can report loss and "),lt=h(xt,"A",{href:!0});var qt=u(lt);rt=l(qt,"perplexity"),qt.forEach(t),Is=l(xt," at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),xt.forEach(t),it=m(a),x(pt.$$.fragment,a),cs=m(a),je=h(a,"P",{});var ea=u(je);Gs=l(ea,"We can then define our optimizer, using the function from before to split the parameters for weight decay:"),ea.forEach(t),ct=m(a),x(ht.$$.fragment,a),hs=m(a),xe=h(a,"P",{});var Xt=u(xe);Ms=l(Xt,"Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),Xt.forEach(t),Xe=m(a),x(Ke.$$.fragment,a),ut=m(a),x(dt.$$.fragment,a),us=m(a),ne=h(a,"P",{});var Kt=u(ne);qa=l(Kt,"Now that we have sent our "),Mt=h(Kt,"CODE",{});var ta=u(Mt);mt=l(ta,"train_dataloader"),ta.forEach(t),Hs=l(Kt," to "),Ne=h(Kt,"CODE",{});var _n=u(Ne);Ss=l(_n,"accelerator.prepare()"),_n.forEach(t),Ve=l(Kt,", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),Kt.forEach(t),ds=m(a),x(qe.$$.fragment,a),Rs=m(a),oe=h(a,"P",{});var We=u(oe);ft=l(We,"Lastly, to push our model to the Hub, we will need to create a "),Ht=h(We,"CODE",{});var Ie=u(Ht);_t=l(Ie,"Repository"),Ie.forEach(t),Bs=l(We," object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Ee=h(We,"CODE",{});var gn=u(Ee);Ea=l(gn,"repo_name"),gn.forEach(t),ms=l(We," with your own choice; it just needs to contain your username, which is what the function "),fs=h(We,"CODE",{});var sa=u(fs);za=l(sa,"get_full_repo_name()"),sa.forEach(t),Us=l(We," does):"),We.forEach(t),ze=m(a),x(ie.$$.fragment,a),St=m(a),x(_e.$$.fragment,a),Ys=m(a),Ze=h(a,"P",{});var wn=u(Ze);Ta=l(wn,"Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),wn.forEach(t),_s=m(a),x(ge.$$.fragment,a),gs=m(a),le=h(a,"P",{});var Vt=u(le);Pa=l(Vt,"We can now upload anything we save in "),Rt=h(Vt,"CODE",{});var aa=u(Rt);pe=l(aa,"output_dir"),aa.forEach(t),Da=l(Vt," by calling the "),gt=h(Vt,"CODE",{});var bn=u(gt);Ca=l(bn,"repo.push_to_hub()"),bn.forEach(t),Aa=l(Vt," method. This will help us upload the intermediate models at the end of each epoch."),Vt.forEach(t),wt=m(a),Bt=h(a,"P",{});var kn=u(Bt);Oa=l(kn,"Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),kn.forEach(t),Ut=m(a),x(bt.$$.fragment,a),Xs=m(a),x(Je.$$.fragment,a),Te=m(a),ce=h(a,"P",{});var xs=u(ce);on=l(xs,"Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),ws=h(xs,"CODE",{});var Ce=u(ws);kt=l(Ce,"evaluate()"),Ce.forEach(t),ln=l(xs," function:"),xs.forEach(t),bs=m(a),x(Pe.$$.fragment,a),Ks=m(a),yt=h(a,"P",{});var Ae=u(yt);$t=l(Ae,"And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),Ae.forEach(t),ks=m(a),x(we.$$.fragment,a),ys=m(a),x(he.$$.fragment,a),this.h()},h(){F(f,"id","training-with-accelerate"),F(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(f,"href","#training-with-accelerate"),F(n,"class","relative group"),F(lt,"href","/course/chapter7/3")},m(a,y){r(a,n,y),s(n,f),s(f,i),q(_,i,null),s(n,$),s(n,k),s(k,v),r(a,T,y),r(a,z,y),s(z,C),s(z,N),s(N,W),s(z,g),r(a,P,y),q(G,a,y),r(a,H,y),r(a,M,y),s(M,R),s(M,U),s(U,L),s(M,S),s(M,K),s(K,V),s(M,Y),s(M,I),s(I,ee),s(M,ae),s(M,O),s(O,B),s(M,ue),s(M,de),s(de,Oe),s(M,ke),s(M,Me),s(Me,Ft),s(M,ts),s(M,ss),s(ss,ga),s(M,zs),s(M,Fe),s(Fe,Ts),s(M,ye),r(a,Ps,y),q($e,a,y),r(a,Ds,y),q(tt,a,y),r(a,Lt,y),r(a,Nt,y),s(Nt,wa),r(a,as,y),q(Z,a,y),r(a,ba,y),r(a,st,y),s(st,He),r(a,Cs,y),r(a,te,y),s(te,ns),s(ns,ka),s(te,As),s(te,me),s(me,Se),s(te,os),s(te,Le),s(Le,ya),r(a,Wt,y),r(a,ve,y),s(ve,Os),s(ve,se),s(se,$a),s(ve,at),s(ve,ls),s(ls,va),s(ve,rs),r(a,Fs,y),q(nt,a,y),r(a,Re,y),r(a,It,y),s(It,ja),r(a,is,y),q(re,a,y),r(a,Ls,y),r(a,Be,y),s(Be,xa),r(a,Ns,y),q(Ue,a,y),r(a,Ye,y),r(a,fe,y),s(fe,Gt),s(fe,ps),s(ps,Ws),s(fe,ot),s(fe,lt),s(lt,rt),s(fe,Is),r(a,it,y),q(pt,a,y),r(a,cs,y),r(a,je,y),s(je,Gs),r(a,ct,y),q(ht,a,y),r(a,hs,y),r(a,xe,y),s(xe,Ms),r(a,Xe,y),q(Ke,a,y),r(a,ut,y),q(dt,a,y),r(a,us,y),r(a,ne,y),s(ne,qa),s(ne,Mt),s(Mt,mt),s(ne,Hs),s(ne,Ne),s(Ne,Ss),s(ne,Ve),r(a,ds,y),q(qe,a,y),r(a,Rs,y),r(a,oe,y),s(oe,ft),s(oe,Ht),s(Ht,_t),s(oe,Bs),s(oe,Ee),s(Ee,Ea),s(oe,ms),s(oe,fs),s(fs,za),s(oe,Us),r(a,ze,y),q(ie,a,y),r(a,St,y),q(_e,a,y),r(a,Ys,y),r(a,Ze,y),s(Ze,Ta),r(a,_s,y),q(ge,a,y),r(a,gs,y),r(a,le,y),s(le,Pa),s(le,Rt),s(Rt,pe),s(le,Da),s(le,gt),s(gt,Ca),s(le,Aa),r(a,wt,y),r(a,Bt,y),s(Bt,Oa),r(a,Ut,y),q(bt,a,y),r(a,Xs,y),q(Je,a,y),r(a,Te,y),r(a,ce,y),s(ce,on),s(ce,ws),s(ws,kt),s(ce,ln),r(a,bs,y),q(Pe,a,y),r(a,Ks,y),r(a,yt,y),s(yt,$t),r(a,ks,y),q(we,a,y),r(a,ys,y),q(he,a,y),Vs=!0},i(a){Vs||(w(_.$$.fragment,a),w(G.$$.fragment,a),w($e.$$.fragment,a),w(tt.$$.fragment,a),w(Z.$$.fragment,a),w(nt.$$.fragment,a),w(re.$$.fragment,a),w(Ue.$$.fragment,a),w(pt.$$.fragment,a),w(ht.$$.fragment,a),w(Ke.$$.fragment,a),w(dt.$$.fragment,a),w(qe.$$.fragment,a),w(ie.$$.fragment,a),w(_e.$$.fragment,a),w(ge.$$.fragment,a),w(bt.$$.fragment,a),w(Je.$$.fragment,a),w(Pe.$$.fragment,a),w(we.$$.fragment,a),w(he.$$.fragment,a),Vs=!0)},o(a){b(_.$$.fragment,a),b(G.$$.fragment,a),b($e.$$.fragment,a),b(tt.$$.fragment,a),b(Z.$$.fragment,a),b(nt.$$.fragment,a),b(re.$$.fragment,a),b(Ue.$$.fragment,a),b(pt.$$.fragment,a),b(ht.$$.fragment,a),b(Ke.$$.fragment,a),b(dt.$$.fragment,a),b(qe.$$.fragment,a),b(ie.$$.fragment,a),b(_e.$$.fragment,a),b(ge.$$.fragment,a),b(bt.$$.fragment,a),b(Je.$$.fragment,a),b(Pe.$$.fragment,a),b(we.$$.fragment,a),b(he.$$.fragment,a),Vs=!1},d(a){a&&t(n),E(_),a&&t(T),a&&t(z),a&&t(P),E(G,a),a&&t(H),a&&t(M),a&&t(Ps),E($e,a),a&&t(Ds),E(tt,a),a&&t(Lt),a&&t(Nt),a&&t(as),E(Z,a),a&&t(ba),a&&t(st),a&&t(Cs),a&&t(te),a&&t(Wt),a&&t(ve),a&&t(Fs),E(nt,a),a&&t(Re),a&&t(It),a&&t(is),E(re,a),a&&t(Ls),a&&t(Be),a&&t(Ns),E(Ue,a),a&&t(Ye),a&&t(fe),a&&t(it),E(pt,a),a&&t(cs),a&&t(je),a&&t(ct),E(ht,a),a&&t(hs),a&&t(xe),a&&t(Xe),E(Ke,a),a&&t(ut),E(dt,a),a&&t(us),a&&t(ne),a&&t(ds),E(qe,a),a&&t(Rs),a&&t(oe),a&&t(ze),E(ie,a),a&&t(St),E(_e,a),a&&t(Ys),a&&t(Ze),a&&t(_s),E(ge,a),a&&t(gs),a&&t(le),a&&t(wt),a&&t(Bt),a&&t(Ut),E(bt,a),a&&t(Xs),E(Je,a),a&&t(Te),a&&t(ce),a&&t(bs),E(Pe,a),a&&t(Ks),a&&t(yt),a&&t(ks),E(we,a),a&&t(ys),E(he,a)}}}function qi(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=c("a"),_=o("Chapter 3"),$=o(" for more details."),this.h()},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=h(v,"A",{href:!0});var T=u(i);_=l(T,"Chapter 3"),T.forEach(t),$=l(v," for more details."),v.forEach(t),this.h()},h(){F(i,"href","/course/chapter3")},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Ei(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Either create your own custom loss function tailored to your use case, or add another custom step into the training loop.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," Either create your own custom loss function tailored to your use case, or add another custom step into the training loop."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function zi(A){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Ti(A){let n,f,i,_,$,k,v,T,z,C,N,W,g,P,G,H,M,R,U,L,S,K,V,Y,I,ee,ae,O,B,ue,de,Oe,ke,Me,Ft,ts,ss,ga,zs,Fe,Ts,ye,Ps,$e,Ds,tt,Lt,Nt,wa,as,Z,ba,st,He,Cs,te,ns,ka,As,me,Se,os,Le,ya,Wt,ve,Os,se,$a,at,ls,va,rs,Fs,nt,Re,It,ja,is,re,Ls,Be,xa,Ns,Ue,Ye,fe,Gt,ps,Ws,ot,lt,rt,Is,it,pt,cs,je,Gs,ct,ht,hs,xe,Ms,Xe,Ke,ut,dt,us,ne,qa,Mt,mt,Hs,Ne,Ss,Ve,ds,qe,Rs,oe,ft,Ht,_t,Bs,Ee,Ea,ms,fs,za,Us,ze,ie,St,_e,Ys,Ze,Ta,_s,ge,gs,le,Pa,Rt,pe,Da,gt,Ca,Aa,wt,Bt,Oa,Ut,bt,Xs,Je,Te,ce,on,ws,kt,ln,bs,Pe,Ks,yt,$t,ks,we,ys,he,Vs,a,y,rn,Fa,be,Zs,Js,X,pn,$s,cn,hn,Qs,un,dn,La,Yt,Na,De,Wa,vs,mn,vt,js,fn,Ia,jt,xt,Qe,qt,ea,Xt,Kt,ta,_n,We,Ie,gn,sa,wn,Vt,aa,bn,kn,xs,Ce,Ae,yn,Zt,Zo,Un,Jo,Qo,Yn,el,tl,po,Jt,sl,Xn,al,nl,Kn,ol,ll,co,Et,zt,$n,vn,rl,ho,Ga,uo,Tt,Pt,jn,xn,il,mo,qn,na,fo,En,pl,_o,Ma,go,zn,cl,wo,Tn,hl,bo,Ha,ko,Dt,Ct,Pn,oa,yo,la,$o,qs,ra,Vn,Sa,ul,Zn,dl,vo,ia,ml,Jn,fl,_l,jo,At,Ot,Dn,Cn,gl,xo,Ra,qo,Ba,Eo,Qt,wl,Qn,bl,kl,eo,yl,$l,zo,Ua,To,Ya,Po,et,vl,to,jl,xl,so,ql,El,ao,zl,Tl,Do,Xa,Co,Ka,Ao,pa,Pl,no,Dl,Cl,Oo,Va,Fo,Za,Lo,An,On,No;i=new ni({props:{fw:A[0]}}),T=new Bn({});const Fl=[li,oi],Ja=[];function Ll(e,p){return e[0]==="pt"?0:1}g=Ll(A),P=Ja[g]=Fl[g](A),Fe=new Ol({props:{id:"Vpjb1lu0MDk"}}),Le=new Bn({}),Ye=new D({props:{code:`def any_keyword_in_string(string, keywords):
    for keyword in keywords:
        if keyword in string:
            return True
    return False`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">any_keyword_in_string</span>(<span class="hljs-params">string, keywords</span>):
    <span class="hljs-keyword">for</span> keyword <span class="hljs-keyword">in</span> keywords:
        <span class="hljs-keyword">if</span> keyword <span class="hljs-keyword">in</span> string:
            <span class="hljs-keyword">return</span> <span class="hljs-literal">True</span>
    <span class="hljs-keyword">return</span> <span class="hljs-literal">False</span>`}}),ot=new D({props:{code:`filters = ["pandas", "sklearn", "matplotlib", "seaborn"]
example_1 = "import numpy as np"
example_2 = "import pandas as pd"

print(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`,highlighted:`filters = [<span class="hljs-string">&quot;pandas&quot;</span>, <span class="hljs-string">&quot;sklearn&quot;</span>, <span class="hljs-string">&quot;matplotlib&quot;</span>, <span class="hljs-string">&quot;seaborn&quot;</span>]
example_1 = <span class="hljs-string">&quot;import numpy as np&quot;</span>
example_2 = <span class="hljs-string">&quot;import pandas as pd&quot;</span>

<span class="hljs-built_in">print</span>(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`}}),rt=new D({props:{code:"False True",highlighted:'<span class="hljs-literal">False</span> <span class="hljs-literal">True</span>'}}),je=new D({props:{code:`from collections import defaultdict
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
    <span class="hljs-keyword">return</span> Dataset.from_dict(filtered_dict)`}}),xe=new D({props:{code:`# This cell will take a very long time to execute, so you should skip it and go to
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
filtered_data = filter_streaming_dataset(data, filters)`}}),Xe=new D({props:{code:"3.26% of data after filtering.",highlighted:'<span class="hljs-number">3.26</span>% of data after filtering.'}}),mt=new D({props:{code:`from datasets import load_dataset, DatasetDict

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

raw_datasets`}}),Ne=new D({props:{code:`DatasetDict({
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
})`}}),Ve=new _a({props:{$$slots:{default:[ri]},$$scope:{ctx:A}}}),ft=new D({props:{code:`for key in raw_datasets["train"][0]:
    print(f"{key.upper()}: {raw_datasets['train'][0][key][:200]}")`,highlighted:`<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key.upper()}</span>: <span class="hljs-subst">{raw_datasets[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">0</span>][key][:<span class="hljs-number">200</span>]}</span>&quot;</span>)`}}),_t=new D({props:{code:`'REPO_NAME: kmike/scikit-learn'
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
LICENSE: bsd-3-clause&#x27;&#x27;&#x27;</span>`}}),_e=new Bn({}),ge=new Ol({props:{id:"ma1TrR7gE7I"}}),$t=new D({props:{code:`from transformers import AutoTokenizer

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Chunk mapping: <span class="hljs-subst">{outputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>&quot;</span>)`}}),we=new D({props:{code:`Input IDs length: 34
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
tokenized_datasets`}}),De=new D({props:{code:`DatasetDict({
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
})`}}),jt=new _a({props:{$$slots:{default:[ii]},$$scope:{ctx:A}}}),Xt=new Bn({});const Nl=[ci,pi],Qa=[];function Wl(e,p){return e[0]==="pt"?0:1}Ce=Wl(A),Ae=Qa[Ce]=Nl[Ce](A);const Il=[ui,hi],en=[];function Gl(e,p){return e[0]==="pt"?0:1}Et=Gl(A),zt=en[Et]=Il[Et](A),Ga=new D({props:{code:`out = data_collator([tokenized_datasets["train"][i] for i in range(5)])
for key in out:
    print(f"{key} shape: {out[key].shape}")`,highlighted:`out = data_collator([tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>)])
<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> out:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key}</span> shape: <span class="hljs-subst">{out[key].shape}</span>&quot;</span>)`}});const Ml=[mi,di],tn=[];function Hl(e,p){return e[0]==="pt"?0:1}Tt=Hl(A),Pt=tn[Tt]=Ml[Tt](A);let J=A[0]==="tf"&&Vr();na=new _a({props:{warning:!0,$$slots:{default:[fi]},$$scope:{ctx:A}}}),Ma=new D({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Ha=new D({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}});const Sl=[gi,_i],sn=[];function Rl(e,p){return e[0]==="pt"?0:1}Dt=Rl(A),Ct=sn[Dt]=Sl[Dt](A),oa=new _a({props:{$$slots:{default:[wi]},$$scope:{ctx:A}}}),la=new _a({props:{$$slots:{default:[yi]},$$scope:{ctx:A}}}),Sa=new Bn({});const Bl=[vi,$i],an=[];function Ul(e,p){return e[0]==="pt"?0:1}At=Ul(A),Ot=an[At]=Bl[At](A),Ra=new D({props:{code:`txt = """\\
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
rf`}});function Yl(e,p){return e[0]==="tf"?xi:ji}let Wo=Yl(A),Es=Wo(A),Q=A[0]==="pt"&&Zr(A);return{c(){n=c("meta"),f=d(),j(i.$$.fragment),_=d(),$=c("h1"),k=c("a"),v=c("span"),j(T.$$.fragment),z=d(),C=c("span"),N=o("Training a causal language model from scratch"),W=d(),P.c(),G=d(),H=c("p"),M=o("Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=c("a"),U=o("Chapter 1"),L=o(", this is commonly referred to as "),S=c("em"),K=o("transfer learning"),V=o(", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),Y=d(),I=c("p"),ee=o("In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),ae=c("code"),O=o("matplotlib"),B=o(", "),ue=c("code"),de=o("seaborn"),Oe=o(", "),ke=c("code"),Me=o("pandas"),Ft=o(", and "),ts=c("code"),ss=o("scikit-learn"),ga=o(" libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),zs=d(),j(Fe.$$.fragment),Ts=d(),ye=c("p"),Ps=o("In "),$e=c("a"),Ds=o("Chapter 6"),tt=o(" we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),Lt=c("code"),Nt=o("Trainer"),wa=o(" API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),as=d(),Z=c("iframe"),st=d(),He=c("p"),Cs=o("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),te=c("a"),ns=o("here"),ka=o(". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),As=d(),me=c("h2"),Se=c("a"),os=c("span"),j(Le.$$.fragment),ya=d(),Wt=c("span"),ve=o("Gathering the data"),Os=d(),se=c("p"),$a=o("Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),at=c("a"),ls=o("Transformers textbook"),va=o(" to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),rs=c("code"),Fs=o("codeparrot"),nt=o(", the authors built a dataset that they then shared on the "),Re=c("a"),It=o("Hugging Face Hub"),ja=o("."),is=d(),re=c("p"),Ls=o("However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),Be=c("code"),xa=o("codeparrot"),Ns=o(" dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Ue=d(),j(Ye.$$.fragment),fe=d(),Gt=c("p"),ps=o("Let\u2019s test it on two examples:"),Ws=d(),j(ot.$$.fragment),lt=d(),j(rt.$$.fragment),Is=d(),it=c("p"),pt=o("We can use this to create a function that will stream the dataset and filter the elements we want:"),cs=d(),j(je.$$.fragment),Gs=d(),ct=c("p"),ht=o("Then we can simply apply this function to the streaming dataset:"),hs=d(),j(xe.$$.fragment),Ms=d(),j(Xe.$$.fragment),Ke=d(),ut=c("p"),dt=o("This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),us=d(),ne=c("p"),qa=o("Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),Mt=d(),j(mt.$$.fragment),Hs=d(),j(Ne.$$.fragment),Ss=d(),j(Ve.$$.fragment),ds=d(),qe=c("p"),Rs=o("Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),oe=d(),j(ft.$$.fragment),Ht=d(),j(_t.$$.fragment),Bs=d(),Ee=c("p"),Ea=o("We can see that the "),ms=c("code"),fs=o("content"),za=o(" field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),Us=d(),ze=c("h2"),ie=c("a"),St=c("span"),j(_e.$$.fragment),Ys=d(),Ze=c("span"),Ta=o("Preparing the dataset"),_s=d(),j(ge.$$.fragment),gs=d(),le=c("p"),Pa=o("The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),Rt=d(),pe=c("p"),Da=o("Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),gt=c("code"),Ca=o("return_overflowing_tokens"),Aa=o(" option to tokenize the whole input and split it into several chunks, as we did in "),wt=c("a"),Bt=o("Chapter 6"),Oa=o(". We\u2019ll also use the "),Ut=c("code"),bt=o("return_length"),Xs=o(" option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),Je=d(),Te=c("div"),ce=c("img"),ws=d(),kt=c("img"),bs=d(),Pe=c("p"),Ks=o("Let\u2019s see exactly how this works by looking at the first two examples:"),yt=d(),j($t.$$.fragment),ks=d(),j(we.$$.fragment),ys=d(),he=c("p"),Vs=o("We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),a=c("code"),y=o("overflow_to_sample_mapping"),rn=o(" field, we can also reconstruct which chunks belonged to which input samples."),Fa=d(),be=c("p"),Zs=o("With this operation we\u2019re using a handy feature of the "),Js=c("code"),X=o("Dataset.map()"),pn=o(" function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),$s=c("a"),cn=o("section 3"),hn=o(", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),Qs=c("code"),un=o("Dataset.map()"),dn=o(" call:"),La=d(),j(Yt.$$.fragment),Na=d(),j(De.$$.fragment),Wa=d(),vs=c("p"),mn=o("We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),vt=d(),js=c("p"),fn=o("Now that we have the dataset ready, let\u2019s set up the model!"),Ia=d(),j(jt.$$.fragment),xt=d(),Qe=c("h2"),qt=c("a"),ea=c("span"),j(Xt.$$.fragment),Kt=d(),ta=c("span"),_n=o("Initializing a new model"),We=d(),Ie=c("p"),gn=o("Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),sa=c("code"),wn=o("bos"),Vt=o(" and "),aa=c("code"),bn=o("eos"),kn=o(" (beginning and end of sequence) token IDs:"),xs=d(),Ae.c(),yn=d(),Zt=c("p"),Zo=o("Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Un=c("code"),Jo=o("DataCollatorForLanguageModeling"),Qo=o(" collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Yn=c("code"),el=o("input_ids"),tl=o("."),po=d(),Jt=c("p"),sl=o("Note that "),Xn=c("code"),al=o("DataCollatorForLanguageModeling"),nl=o(" supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Kn=c("code"),ol=o("mlm=False"),ll=o(":"),co=d(),zt.c(),$n=d(),vn=c("p"),rl=o("Let\u2019s have a look at an example:"),ho=d(),j(Ga.$$.fragment),uo=d(),Pt.c(),jn=d(),xn=c("p"),il=o("We can see that the examples have been stacked and all the tensors have the same shape."),mo=d(),J&&J.c(),qn=d(),j(na.$$.fragment),fo=d(),En=c("p"),pl=o("Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),_o=d(),j(Ma.$$.fragment),go=d(),zn=c("p"),cl=o("This will display a widget where you can enter your Hugging Face login credentials."),wo=d(),Tn=c("p"),hl=o("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),bo=d(),j(Ha.$$.fragment),ko=d(),Ct.c(),Pn=d(),j(oa.$$.fragment),yo=d(),j(la.$$.fragment),$o=d(),qs=c("h2"),ra=c("a"),Vn=c("span"),j(Sa.$$.fragment),ul=d(),Zn=c("span"),dl=o("Code generation with a pipeline"),vo=d(),ia=c("p"),ml=o("Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),Jn=c("code"),fl=o("pipeline"),_l=o(", and we\u2019ll put it on the GPU for fast generations if there is one available:"),jo=d(),Ot.c(),Dn=d(),Cn=c("p"),gl=o("Let\u2019s start with the simple task of creating a scatter plot:"),xo=d(),j(Ra.$$.fragment),qo=d(),j(Ba.$$.fragment),Eo=d(),Qt=c("p"),wl=o("The result looks correct. Does it also work for a "),Qn=c("code"),bl=o("pandas"),kl=o(" operation? Let\u2019s see if we can create a "),eo=c("code"),yl=o("DataFrame"),$l=o(" from two arrays:"),zo=d(),j(Ua.$$.fragment),To=d(),j(Ya.$$.fragment),Po=d(),et=c("p"),vl=o("Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),to=c("code"),jl=o("x"),xl=o(" again. Since the number of generated tokens is limited, the following "),so=c("code"),ql=o("for"),El=o(" loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),ao=c("code"),zl=o("groupby"),Tl=o(" operation:"),Do=d(),j(Xa.$$.fragment),Co=d(),j(Ka.$$.fragment),Ao=d(),pa=c("p"),Pl=o("Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),no=c("code"),Dl=o("scikit-learn"),Cl=o(" and set up a Random Forest model:"),Oo=d(),j(Va.$$.fragment),Fo=d(),j(Za.$$.fragment),Lo=d(),Es.c(),An=d(),Q&&Q.c(),On=Vo(),this.h()},l(e){const p=si('[data-svelte="svelte-1phssyn"]',document.head);n=h(p,"META",{name:!0,content:!0}),p.forEach(t),f=m(e),x(i.$$.fragment,e),_=m(e),$=h(e,"H1",{class:!0});var nn=u($);k=h(nn,"A",{id:!0,class:!0,href:!0});var Fn=u(k);v=h(Fn,"SPAN",{});var oo=u(v);x(T.$$.fragment,oo),oo.forEach(t),Fn.forEach(t),z=m(nn),C=h(nn,"SPAN",{});var lo=u(C);N=l(lo,"Training a causal language model from scratch"),lo.forEach(t),nn.forEach(t),W=m(e),P.l(e),G=m(e),H=h(e,"P",{});var es=u(H);M=l(es,"Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=h(es,"A",{href:!0});var Ln=u(R);U=l(Ln,"Chapter 1"),Ln.forEach(t),L=l(es,", this is commonly referred to as "),S=h(es,"EM",{});var Nn=u(S);K=l(Nn,"transfer learning"),Nn.forEach(t),V=l(es,", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),es.forEach(t),Y=m(e),I=h(e,"P",{});var Ge=u(I);ee=l(Ge,"In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),ae=h(Ge,"CODE",{});var Wn=u(ae);O=l(Wn,"matplotlib"),Wn.forEach(t),B=l(Ge,", "),ue=h(Ge,"CODE",{});var ro=u(ue);de=l(ro,"seaborn"),ro.forEach(t),Oe=l(Ge,", "),ke=h(Ge,"CODE",{});var io=u(ke);Me=l(io,"pandas"),io.forEach(t),Ft=l(Ge,", and "),ts=h(Ge,"CODE",{});var In=u(ts);ss=l(In,"scikit-learn"),In.forEach(t),ga=l(Ge," libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),Ge.forEach(t),zs=m(e),x(Fe.$$.fragment,e),Ts=m(e),ye=h(e,"P",{});var Gn=u(ye);Ps=l(Gn,"In "),$e=h(Gn,"A",{href:!0});var Xl=u($e);Ds=l(Xl,"Chapter 6"),Xl.forEach(t),tt=l(Gn," we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),Lt=h(Gn,"CODE",{});var Kl=u(Lt);Nt=l(Kl,"Trainer"),Kl.forEach(t),wa=l(Gn," API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),Gn.forEach(t),as=m(e),Z=h(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),u(Z).forEach(t),st=m(e),He=h(e,"P",{});var Io=u(He);Cs=l(Io,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),te=h(Io,"A",{href:!0,rel:!0});var Vl=u(te);ns=l(Vl,"here"),Vl.forEach(t),ka=l(Io,". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),Io.forEach(t),As=m(e),me=h(e,"H2",{class:!0});var Go=u(me);Se=h(Go,"A",{id:!0,class:!0,href:!0});var Zl=u(Se);os=h(Zl,"SPAN",{});var Jl=u(os);x(Le.$$.fragment,Jl),Jl.forEach(t),Zl.forEach(t),ya=m(Go),Wt=h(Go,"SPAN",{});var Ql=u(Wt);ve=l(Ql,"Gathering the data"),Ql.forEach(t),Go.forEach(t),Os=m(e),se=h(e,"P",{});var ca=u(se);$a=l(ca,"Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),at=h(ca,"A",{href:!0,rel:!0});var er=u(at);ls=l(er,"Transformers textbook"),er.forEach(t),va=l(ca," to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),rs=h(ca,"CODE",{});var tr=u(rs);Fs=l(tr,"codeparrot"),tr.forEach(t),nt=l(ca,", the authors built a dataset that they then shared on the "),Re=h(ca,"A",{href:!0,rel:!0});var sr=u(Re);It=l(sr,"Hugging Face Hub"),sr.forEach(t),ja=l(ca,"."),ca.forEach(t),is=m(e),re=h(e,"P",{});var Mo=u(re);Ls=l(Mo,"However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),Be=h(Mo,"CODE",{});var ar=u(Be);xa=l(ar,"codeparrot"),ar.forEach(t),Ns=l(Mo," dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Mo.forEach(t),Ue=m(e),x(Ye.$$.fragment,e),fe=m(e),Gt=h(e,"P",{});var nr=u(Gt);ps=l(nr,"Let\u2019s test it on two examples:"),nr.forEach(t),Ws=m(e),x(ot.$$.fragment,e),lt=m(e),x(rt.$$.fragment,e),Is=m(e),it=h(e,"P",{});var or=u(it);pt=l(or,"We can use this to create a function that will stream the dataset and filter the elements we want:"),or.forEach(t),cs=m(e),x(je.$$.fragment,e),Gs=m(e),ct=h(e,"P",{});var lr=u(ct);ht=l(lr,"Then we can simply apply this function to the streaming dataset:"),lr.forEach(t),hs=m(e),x(xe.$$.fragment,e),Ms=m(e),x(Xe.$$.fragment,e),Ke=m(e),ut=h(e,"P",{});var rr=u(ut);dt=l(rr,"This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),rr.forEach(t),us=m(e),ne=h(e,"P",{});var ir=u(ne);qa=l(ir,"Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),ir.forEach(t),Mt=m(e),x(mt.$$.fragment,e),Hs=m(e),x(Ne.$$.fragment,e),Ss=m(e),x(Ve.$$.fragment,e),ds=m(e),qe=h(e,"P",{});var pr=u(qe);Rs=l(pr,"Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),pr.forEach(t),oe=m(e),x(ft.$$.fragment,e),Ht=m(e),x(_t.$$.fragment,e),Bs=m(e),Ee=h(e,"P",{});var Ho=u(Ee);Ea=l(Ho,"We can see that the "),ms=h(Ho,"CODE",{});var cr=u(ms);fs=l(cr,"content"),cr.forEach(t),za=l(Ho," field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),Ho.forEach(t),Us=m(e),ze=h(e,"H2",{class:!0});var So=u(ze);ie=h(So,"A",{id:!0,class:!0,href:!0});var hr=u(ie);St=h(hr,"SPAN",{});var ur=u(St);x(_e.$$.fragment,ur),ur.forEach(t),hr.forEach(t),Ys=m(So),Ze=h(So,"SPAN",{});var dr=u(Ze);Ta=l(dr,"Preparing the dataset"),dr.forEach(t),So.forEach(t),_s=m(e),x(ge.$$.fragment,e),gs=m(e),le=h(e,"P",{});var mr=u(le);Pa=l(mr,"The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),mr.forEach(t),Rt=m(e),pe=h(e,"P",{});var ha=u(pe);Da=l(ha,"Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),gt=h(ha,"CODE",{});var fr=u(gt);Ca=l(fr,"return_overflowing_tokens"),fr.forEach(t),Aa=l(ha," option to tokenize the whole input and split it into several chunks, as we did in "),wt=h(ha,"A",{href:!0});var _r=u(wt);Bt=l(_r,"Chapter 6"),_r.forEach(t),Oa=l(ha,". We\u2019ll also use the "),Ut=h(ha,"CODE",{});var gr=u(Ut);bt=l(gr,"return_length"),gr.forEach(t),Xs=l(ha," option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),ha.forEach(t),Je=m(e),Te=h(e,"DIV",{class:!0});var Ro=u(Te);ce=h(Ro,"IMG",{class:!0,src:!0,alt:!0}),ws=m(Ro),kt=h(Ro,"IMG",{class:!0,src:!0,alt:!0}),Ro.forEach(t),bs=m(e),Pe=h(e,"P",{});var wr=u(Pe);Ks=l(wr,"Let\u2019s see exactly how this works by looking at the first two examples:"),wr.forEach(t),yt=m(e),x($t.$$.fragment,e),ks=m(e),x(we.$$.fragment,e),ys=m(e),he=h(e,"P",{});var Bo=u(he);Vs=l(Bo,"We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),a=h(Bo,"CODE",{});var br=u(a);y=l(br,"overflow_to_sample_mapping"),br.forEach(t),rn=l(Bo," field, we can also reconstruct which chunks belonged to which input samples."),Bo.forEach(t),Fa=m(e),be=h(e,"P",{});var ua=u(be);Zs=l(ua,"With this operation we\u2019re using a handy feature of the "),Js=h(ua,"CODE",{});var kr=u(Js);X=l(kr,"Dataset.map()"),kr.forEach(t),pn=l(ua," function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),$s=h(ua,"A",{href:!0});var yr=u($s);cn=l(yr,"section 3"),yr.forEach(t),hn=l(ua,", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),Qs=h(ua,"CODE",{});var $r=u(Qs);un=l($r,"Dataset.map()"),$r.forEach(t),dn=l(ua," call:"),ua.forEach(t),La=m(e),x(Yt.$$.fragment,e),Na=m(e),x(De.$$.fragment,e),Wa=m(e),vs=h(e,"P",{});var vr=u(vs);mn=l(vr,"We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),vr.forEach(t),vt=m(e),js=h(e,"P",{});var jr=u(js);fn=l(jr,"Now that we have the dataset ready, let\u2019s set up the model!"),jr.forEach(t),Ia=m(e),x(jt.$$.fragment,e),xt=m(e),Qe=h(e,"H2",{class:!0});var Uo=u(Qe);qt=h(Uo,"A",{id:!0,class:!0,href:!0});var xr=u(qt);ea=h(xr,"SPAN",{});var qr=u(ea);x(Xt.$$.fragment,qr),qr.forEach(t),xr.forEach(t),Kt=m(Uo),ta=h(Uo,"SPAN",{});var Er=u(ta);_n=l(Er,"Initializing a new model"),Er.forEach(t),Uo.forEach(t),We=m(e),Ie=h(e,"P",{});var Mn=u(Ie);gn=l(Mn,"Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),sa=h(Mn,"CODE",{});var zr=u(sa);wn=l(zr,"bos"),zr.forEach(t),Vt=l(Mn," and "),aa=h(Mn,"CODE",{});var Tr=u(aa);bn=l(Tr,"eos"),Tr.forEach(t),kn=l(Mn," (beginning and end of sequence) token IDs:"),Mn.forEach(t),xs=m(e),Ae.l(e),yn=m(e),Zt=h(e,"P",{});var Hn=u(Zt);Zo=l(Hn,"Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Un=h(Hn,"CODE",{});var Pr=u(Un);Jo=l(Pr,"DataCollatorForLanguageModeling"),Pr.forEach(t),Qo=l(Hn," collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Yn=h(Hn,"CODE",{});var Dr=u(Yn);el=l(Dr,"input_ids"),Dr.forEach(t),tl=l(Hn,"."),Hn.forEach(t),po=m(e),Jt=h(e,"P",{});var Sn=u(Jt);sl=l(Sn,"Note that "),Xn=h(Sn,"CODE",{});var Cr=u(Xn);al=l(Cr,"DataCollatorForLanguageModeling"),Cr.forEach(t),nl=l(Sn," supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Kn=h(Sn,"CODE",{});var Ar=u(Kn);ol=l(Ar,"mlm=False"),Ar.forEach(t),ll=l(Sn,":"),Sn.forEach(t),co=m(e),zt.l(e),$n=m(e),vn=h(e,"P",{});var Or=u(vn);rl=l(Or,"Let\u2019s have a look at an example:"),Or.forEach(t),ho=m(e),x(Ga.$$.fragment,e),uo=m(e),Pt.l(e),jn=m(e),xn=h(e,"P",{});var Fr=u(xn);il=l(Fr,"We can see that the examples have been stacked and all the tensors have the same shape."),Fr.forEach(t),mo=m(e),J&&J.l(e),qn=m(e),x(na.$$.fragment,e),fo=m(e),En=h(e,"P",{});var Lr=u(En);pl=l(Lr,"Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),Lr.forEach(t),_o=m(e),x(Ma.$$.fragment,e),go=m(e),zn=h(e,"P",{});var Nr=u(zn);cl=l(Nr,"This will display a widget where you can enter your Hugging Face login credentials."),Nr.forEach(t),wo=m(e),Tn=h(e,"P",{});var Wr=u(Tn);hl=l(Wr,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Wr.forEach(t),bo=m(e),x(Ha.$$.fragment,e),ko=m(e),Ct.l(e),Pn=m(e),x(oa.$$.fragment,e),yo=m(e),x(la.$$.fragment,e),$o=m(e),qs=h(e,"H2",{class:!0});var Yo=u(qs);ra=h(Yo,"A",{id:!0,class:!0,href:!0});var Ir=u(ra);Vn=h(Ir,"SPAN",{});var Gr=u(Vn);x(Sa.$$.fragment,Gr),Gr.forEach(t),Ir.forEach(t),ul=m(Yo),Zn=h(Yo,"SPAN",{});var Mr=u(Zn);dl=l(Mr,"Code generation with a pipeline"),Mr.forEach(t),Yo.forEach(t),vo=m(e),ia=h(e,"P",{});var Xo=u(ia);ml=l(Xo,"Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),Jn=h(Xo,"CODE",{});var Hr=u(Jn);fl=l(Hr,"pipeline"),Hr.forEach(t),_l=l(Xo,", and we\u2019ll put it on the GPU for fast generations if there is one available:"),Xo.forEach(t),jo=m(e),Ot.l(e),Dn=m(e),Cn=h(e,"P",{});var Sr=u(Cn);gl=l(Sr,"Let\u2019s start with the simple task of creating a scatter plot:"),Sr.forEach(t),xo=m(e),x(Ra.$$.fragment,e),qo=m(e),x(Ba.$$.fragment,e),Eo=m(e),Qt=h(e,"P",{});var Rn=u(Qt);wl=l(Rn,"The result looks correct. Does it also work for a "),Qn=h(Rn,"CODE",{});var Rr=u(Qn);bl=l(Rr,"pandas"),Rr.forEach(t),kl=l(Rn," operation? Let\u2019s see if we can create a "),eo=h(Rn,"CODE",{});var Br=u(eo);yl=l(Br,"DataFrame"),Br.forEach(t),$l=l(Rn," from two arrays:"),Rn.forEach(t),zo=m(e),x(Ua.$$.fragment,e),To=m(e),x(Ya.$$.fragment,e),Po=m(e),et=h(e,"P",{});var da=u(et);vl=l(da,"Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),to=h(da,"CODE",{});var Ur=u(to);jl=l(Ur,"x"),Ur.forEach(t),xl=l(da," again. Since the number of generated tokens is limited, the following "),so=h(da,"CODE",{});var Yr=u(so);ql=l(Yr,"for"),Yr.forEach(t),El=l(da," loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),ao=h(da,"CODE",{});var Xr=u(ao);zl=l(Xr,"groupby"),Xr.forEach(t),Tl=l(da," operation:"),da.forEach(t),Do=m(e),x(Xa.$$.fragment,e),Co=m(e),x(Ka.$$.fragment,e),Ao=m(e),pa=h(e,"P",{});var Ko=u(pa);Pl=l(Ko,"Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),no=h(Ko,"CODE",{});var Kr=u(no);Dl=l(Kr,"scikit-learn"),Kr.forEach(t),Cl=l(Ko," and set up a Random Forest model:"),Ko.forEach(t),Oo=m(e),x(Va.$$.fragment,e),Fo=m(e),x(Za.$$.fragment,e),Lo=m(e),Es.l(e),An=m(e),Q&&Q.l(e),On=Vo(),this.h()},h(){F(n,"name","hf:doc:metadata"),F(n,"content",JSON.stringify(Pi)),F(k,"id","training-a-causal-language-model-from-scratch"),F(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(k,"href","#training-a-causal-language-model-from-scratch"),F($,"class","relative group"),F(R,"href","/course/chapter1"),F($e,"href","/course/chapter6"),Al(Z.src,ba="https://hf.space/gradioiframe/course-demos/codeparrot-ds/+")||F(Z,"src",ba),F(Z,"frameborder","0"),F(Z,"height","300"),F(Z,"title","Gradio app"),F(Z,"class","block dark:hidden container p-0 flex-grow space-iframe"),F(Z,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),F(Z,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),F(te,"href","https://huggingface.co/huggingface-course/codeparrot-ds?text=plt.imshow%28"),F(te,"rel","nofollow"),F(Se,"id","gathering-the-data"),F(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(Se,"href","#gathering-the-data"),F(me,"class","relative group"),F(at,"href","https://learning.oreilly.com/library/view/natural-language-processing/9781098103231/"),F(at,"rel","nofollow"),F(Re,"href","https://huggingface.co/datasets/transformersbook/codeparrot"),F(Re,"rel","nofollow"),F(ie,"id","preparing-the-dataset"),F(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(ie,"href","#preparing-the-dataset"),F(ze,"class","relative group"),F(wt,"href","/course/chapter6/4"),F(ce,"class","block dark:hidden"),Al(ce.src,on="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts.svg")||F(ce,"src",on),F(ce,"alt","Chunking a large texts in several pieces."),F(kt,"class","hidden dark:block"),Al(kt.src,ln="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts-dark.svg")||F(kt,"src",ln),F(kt,"alt","Chunking a large texts in several pieces."),F(Te,"class","flex justify-center"),F($s,"href","/course/chapter7/3"),F(qt,"id","initializing-a-new-model"),F(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(qt,"href","#initializing-a-new-model"),F(Qe,"class","relative group"),F(ra,"id","code-generation-with-a-pipeline"),F(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),F(ra,"href","#code-generation-with-a-pipeline"),F(qs,"class","relative group")},m(e,p){s(document.head,n),r(e,f,p),q(i,e,p),r(e,_,p),r(e,$,p),s($,k),s(k,v),q(T,v,null),s($,z),s($,C),s(C,N),r(e,W,p),Ja[g].m(e,p),r(e,G,p),r(e,H,p),s(H,M),s(H,R),s(R,U),s(H,L),s(H,S),s(S,K),s(H,V),r(e,Y,p),r(e,I,p),s(I,ee),s(I,ae),s(ae,O),s(I,B),s(I,ue),s(ue,de),s(I,Oe),s(I,ke),s(ke,Me),s(I,Ft),s(I,ts),s(ts,ss),s(I,ga),r(e,zs,p),q(Fe,e,p),r(e,Ts,p),r(e,ye,p),s(ye,Ps),s(ye,$e),s($e,Ds),s(ye,tt),s(ye,Lt),s(Lt,Nt),s(ye,wa),r(e,as,p),r(e,Z,p),r(e,st,p),r(e,He,p),s(He,Cs),s(He,te),s(te,ns),s(He,ka),r(e,As,p),r(e,me,p),s(me,Se),s(Se,os),q(Le,os,null),s(me,ya),s(me,Wt),s(Wt,ve),r(e,Os,p),r(e,se,p),s(se,$a),s(se,at),s(at,ls),s(se,va),s(se,rs),s(rs,Fs),s(se,nt),s(se,Re),s(Re,It),s(se,ja),r(e,is,p),r(e,re,p),s(re,Ls),s(re,Be),s(Be,xa),s(re,Ns),r(e,Ue,p),q(Ye,e,p),r(e,fe,p),r(e,Gt,p),s(Gt,ps),r(e,Ws,p),q(ot,e,p),r(e,lt,p),q(rt,e,p),r(e,Is,p),r(e,it,p),s(it,pt),r(e,cs,p),q(je,e,p),r(e,Gs,p),r(e,ct,p),s(ct,ht),r(e,hs,p),q(xe,e,p),r(e,Ms,p),q(Xe,e,p),r(e,Ke,p),r(e,ut,p),s(ut,dt),r(e,us,p),r(e,ne,p),s(ne,qa),r(e,Mt,p),q(mt,e,p),r(e,Hs,p),q(Ne,e,p),r(e,Ss,p),q(Ve,e,p),r(e,ds,p),r(e,qe,p),s(qe,Rs),r(e,oe,p),q(ft,e,p),r(e,Ht,p),q(_t,e,p),r(e,Bs,p),r(e,Ee,p),s(Ee,Ea),s(Ee,ms),s(ms,fs),s(Ee,za),r(e,Us,p),r(e,ze,p),s(ze,ie),s(ie,St),q(_e,St,null),s(ze,Ys),s(ze,Ze),s(Ze,Ta),r(e,_s,p),q(ge,e,p),r(e,gs,p),r(e,le,p),s(le,Pa),r(e,Rt,p),r(e,pe,p),s(pe,Da),s(pe,gt),s(gt,Ca),s(pe,Aa),s(pe,wt),s(wt,Bt),s(pe,Oa),s(pe,Ut),s(Ut,bt),s(pe,Xs),r(e,Je,p),r(e,Te,p),s(Te,ce),s(Te,ws),s(Te,kt),r(e,bs,p),r(e,Pe,p),s(Pe,Ks),r(e,yt,p),q($t,e,p),r(e,ks,p),q(we,e,p),r(e,ys,p),r(e,he,p),s(he,Vs),s(he,a),s(a,y),s(he,rn),r(e,Fa,p),r(e,be,p),s(be,Zs),s(be,Js),s(Js,X),s(be,pn),s(be,$s),s($s,cn),s(be,hn),s(be,Qs),s(Qs,un),s(be,dn),r(e,La,p),q(Yt,e,p),r(e,Na,p),q(De,e,p),r(e,Wa,p),r(e,vs,p),s(vs,mn),r(e,vt,p),r(e,js,p),s(js,fn),r(e,Ia,p),q(jt,e,p),r(e,xt,p),r(e,Qe,p),s(Qe,qt),s(qt,ea),q(Xt,ea,null),s(Qe,Kt),s(Qe,ta),s(ta,_n),r(e,We,p),r(e,Ie,p),s(Ie,gn),s(Ie,sa),s(sa,wn),s(Ie,Vt),s(Ie,aa),s(aa,bn),s(Ie,kn),r(e,xs,p),Qa[Ce].m(e,p),r(e,yn,p),r(e,Zt,p),s(Zt,Zo),s(Zt,Un),s(Un,Jo),s(Zt,Qo),s(Zt,Yn),s(Yn,el),s(Zt,tl),r(e,po,p),r(e,Jt,p),s(Jt,sl),s(Jt,Xn),s(Xn,al),s(Jt,nl),s(Jt,Kn),s(Kn,ol),s(Jt,ll),r(e,co,p),en[Et].m(e,p),r(e,$n,p),r(e,vn,p),s(vn,rl),r(e,ho,p),q(Ga,e,p),r(e,uo,p),tn[Tt].m(e,p),r(e,jn,p),r(e,xn,p),s(xn,il),r(e,mo,p),J&&J.m(e,p),r(e,qn,p),q(na,e,p),r(e,fo,p),r(e,En,p),s(En,pl),r(e,_o,p),q(Ma,e,p),r(e,go,p),r(e,zn,p),s(zn,cl),r(e,wo,p),r(e,Tn,p),s(Tn,hl),r(e,bo,p),q(Ha,e,p),r(e,ko,p),sn[Dt].m(e,p),r(e,Pn,p),q(oa,e,p),r(e,yo,p),q(la,e,p),r(e,$o,p),r(e,qs,p),s(qs,ra),s(ra,Vn),q(Sa,Vn,null),s(qs,ul),s(qs,Zn),s(Zn,dl),r(e,vo,p),r(e,ia,p),s(ia,ml),s(ia,Jn),s(Jn,fl),s(ia,_l),r(e,jo,p),an[At].m(e,p),r(e,Dn,p),r(e,Cn,p),s(Cn,gl),r(e,xo,p),q(Ra,e,p),r(e,qo,p),q(Ba,e,p),r(e,Eo,p),r(e,Qt,p),s(Qt,wl),s(Qt,Qn),s(Qn,bl),s(Qt,kl),s(Qt,eo),s(eo,yl),s(Qt,$l),r(e,zo,p),q(Ua,e,p),r(e,To,p),q(Ya,e,p),r(e,Po,p),r(e,et,p),s(et,vl),s(et,to),s(to,jl),s(et,xl),s(et,so),s(so,ql),s(et,El),s(et,ao),s(ao,zl),s(et,Tl),r(e,Do,p),q(Xa,e,p),r(e,Co,p),q(Ka,e,p),r(e,Ao,p),r(e,pa,p),s(pa,Pl),s(pa,no),s(no,Dl),s(pa,Cl),r(e,Oo,p),q(Va,e,p),r(e,Fo,p),q(Za,e,p),r(e,Lo,p),Es.m(e,p),r(e,An,p),Q&&Q.m(e,p),r(e,On,p),No=!0},p(e,[p]){const nn={};p&1&&(nn.fw=e[0]),i.$set(nn);let Fn=g;g=Ll(e),g!==Fn&&(fa(),b(Ja[Fn],1,1,()=>{Ja[Fn]=null}),ma(),P=Ja[g],P||(P=Ja[g]=Fl[g](e),P.c()),w(P,1),P.m(G.parentNode,G));const oo={};p&2&&(oo.$$scope={dirty:p,ctx:e}),Ve.$set(oo);const lo={};p&2&&(lo.$$scope={dirty:p,ctx:e}),jt.$set(lo);let es=Ce;Ce=Wl(e),Ce!==es&&(fa(),b(Qa[es],1,1,()=>{Qa[es]=null}),ma(),Ae=Qa[Ce],Ae||(Ae=Qa[Ce]=Nl[Ce](e),Ae.c()),w(Ae,1),Ae.m(yn.parentNode,yn));let Ln=Et;Et=Gl(e),Et!==Ln&&(fa(),b(en[Ln],1,1,()=>{en[Ln]=null}),ma(),zt=en[Et],zt||(zt=en[Et]=Il[Et](e),zt.c()),w(zt,1),zt.m($n.parentNode,$n));let Nn=Tt;Tt=Hl(e),Tt!==Nn&&(fa(),b(tn[Nn],1,1,()=>{tn[Nn]=null}),ma(),Pt=tn[Tt],Pt||(Pt=tn[Tt]=Ml[Tt](e),Pt.c()),w(Pt,1),Pt.m(jn.parentNode,jn)),e[0]==="tf"?J?p&1&&w(J,1):(J=Vr(),J.c(),w(J,1),J.m(qn.parentNode,qn)):J&&(fa(),b(J,1,1,()=>{J=null}),ma());const Ge={};p&2&&(Ge.$$scope={dirty:p,ctx:e}),na.$set(Ge);let Wn=Dt;Dt=Rl(e),Dt!==Wn&&(fa(),b(sn[Wn],1,1,()=>{sn[Wn]=null}),ma(),Ct=sn[Dt],Ct||(Ct=sn[Dt]=Sl[Dt](e),Ct.c()),w(Ct,1),Ct.m(Pn.parentNode,Pn));const ro={};p&2&&(ro.$$scope={dirty:p,ctx:e}),oa.$set(ro);const io={};p&3&&(io.$$scope={dirty:p,ctx:e}),la.$set(io);let In=At;At=Ul(e),At!==In&&(fa(),b(an[In],1,1,()=>{an[In]=null}),ma(),Ot=an[At],Ot||(Ot=an[At]=Bl[At](e),Ot.c()),w(Ot,1),Ot.m(Dn.parentNode,Dn)),Wo!==(Wo=Yl(e))&&(Es.d(1),Es=Wo(e),Es&&(Es.c(),Es.m(An.parentNode,An))),e[0]==="pt"?Q?p&1&&w(Q,1):(Q=Zr(e),Q.c(),w(Q,1),Q.m(On.parentNode,On)):Q&&(fa(),b(Q,1,1,()=>{Q=null}),ma())},i(e){No||(w(i.$$.fragment,e),w(T.$$.fragment,e),w(P),w(Fe.$$.fragment,e),w(Le.$$.fragment,e),w(Ye.$$.fragment,e),w(ot.$$.fragment,e),w(rt.$$.fragment,e),w(je.$$.fragment,e),w(xe.$$.fragment,e),w(Xe.$$.fragment,e),w(mt.$$.fragment,e),w(Ne.$$.fragment,e),w(Ve.$$.fragment,e),w(ft.$$.fragment,e),w(_t.$$.fragment,e),w(_e.$$.fragment,e),w(ge.$$.fragment,e),w($t.$$.fragment,e),w(we.$$.fragment,e),w(Yt.$$.fragment,e),w(De.$$.fragment,e),w(jt.$$.fragment,e),w(Xt.$$.fragment,e),w(Ae),w(zt),w(Ga.$$.fragment,e),w(Pt),w(J),w(na.$$.fragment,e),w(Ma.$$.fragment,e),w(Ha.$$.fragment,e),w(Ct),w(oa.$$.fragment,e),w(la.$$.fragment,e),w(Sa.$$.fragment,e),w(Ot),w(Ra.$$.fragment,e),w(Ba.$$.fragment,e),w(Ua.$$.fragment,e),w(Ya.$$.fragment,e),w(Xa.$$.fragment,e),w(Ka.$$.fragment,e),w(Va.$$.fragment,e),w(Za.$$.fragment,e),w(Q),No=!0)},o(e){b(i.$$.fragment,e),b(T.$$.fragment,e),b(P),b(Fe.$$.fragment,e),b(Le.$$.fragment,e),b(Ye.$$.fragment,e),b(ot.$$.fragment,e),b(rt.$$.fragment,e),b(je.$$.fragment,e),b(xe.$$.fragment,e),b(Xe.$$.fragment,e),b(mt.$$.fragment,e),b(Ne.$$.fragment,e),b(Ve.$$.fragment,e),b(ft.$$.fragment,e),b(_t.$$.fragment,e),b(_e.$$.fragment,e),b(ge.$$.fragment,e),b($t.$$.fragment,e),b(we.$$.fragment,e),b(Yt.$$.fragment,e),b(De.$$.fragment,e),b(jt.$$.fragment,e),b(Xt.$$.fragment,e),b(Ae),b(zt),b(Ga.$$.fragment,e),b(Pt),b(J),b(na.$$.fragment,e),b(Ma.$$.fragment,e),b(Ha.$$.fragment,e),b(Ct),b(oa.$$.fragment,e),b(la.$$.fragment,e),b(Sa.$$.fragment,e),b(Ot),b(Ra.$$.fragment,e),b(Ba.$$.fragment,e),b(Ua.$$.fragment,e),b(Ya.$$.fragment,e),b(Xa.$$.fragment,e),b(Ka.$$.fragment,e),b(Va.$$.fragment,e),b(Za.$$.fragment,e),b(Q),No=!1},d(e){t(n),e&&t(f),E(i,e),e&&t(_),e&&t($),E(T),e&&t(W),Ja[g].d(e),e&&t(G),e&&t(H),e&&t(Y),e&&t(I),e&&t(zs),E(Fe,e),e&&t(Ts),e&&t(ye),e&&t(as),e&&t(Z),e&&t(st),e&&t(He),e&&t(As),e&&t(me),E(Le),e&&t(Os),e&&t(se),e&&t(is),e&&t(re),e&&t(Ue),E(Ye,e),e&&t(fe),e&&t(Gt),e&&t(Ws),E(ot,e),e&&t(lt),E(rt,e),e&&t(Is),e&&t(it),e&&t(cs),E(je,e),e&&t(Gs),e&&t(ct),e&&t(hs),E(xe,e),e&&t(Ms),E(Xe,e),e&&t(Ke),e&&t(ut),e&&t(us),e&&t(ne),e&&t(Mt),E(mt,e),e&&t(Hs),E(Ne,e),e&&t(Ss),E(Ve,e),e&&t(ds),e&&t(qe),e&&t(oe),E(ft,e),e&&t(Ht),E(_t,e),e&&t(Bs),e&&t(Ee),e&&t(Us),e&&t(ze),E(_e),e&&t(_s),E(ge,e),e&&t(gs),e&&t(le),e&&t(Rt),e&&t(pe),e&&t(Je),e&&t(Te),e&&t(bs),e&&t(Pe),e&&t(yt),E($t,e),e&&t(ks),E(we,e),e&&t(ys),e&&t(he),e&&t(Fa),e&&t(be),e&&t(La),E(Yt,e),e&&t(Na),E(De,e),e&&t(Wa),e&&t(vs),e&&t(vt),e&&t(js),e&&t(Ia),E(jt,e),e&&t(xt),e&&t(Qe),E(Xt),e&&t(We),e&&t(Ie),e&&t(xs),Qa[Ce].d(e),e&&t(yn),e&&t(Zt),e&&t(po),e&&t(Jt),e&&t(co),en[Et].d(e),e&&t($n),e&&t(vn),e&&t(ho),E(Ga,e),e&&t(uo),tn[Tt].d(e),e&&t(jn),e&&t(xn),e&&t(mo),J&&J.d(e),e&&t(qn),E(na,e),e&&t(fo),e&&t(En),e&&t(_o),E(Ma,e),e&&t(go),e&&t(zn),e&&t(wo),e&&t(Tn),e&&t(bo),E(Ha,e),e&&t(ko),sn[Dt].d(e),e&&t(Pn),E(oa,e),e&&t(yo),E(la,e),e&&t($o),e&&t(qs),E(Sa),e&&t(vo),e&&t(ia),e&&t(jo),an[At].d(e),e&&t(Dn),e&&t(Cn),e&&t(xo),E(Ra,e),e&&t(qo),E(Ba,e),e&&t(Eo),e&&t(Qt),e&&t(zo),E(Ua,e),e&&t(To),E(Ya,e),e&&t(Po),e&&t(et),e&&t(Do),E(Xa,e),e&&t(Co),E(Ka,e),e&&t(Ao),e&&t(pa),e&&t(Oo),E(Va,e),e&&t(Fo),E(Za,e),e&&t(Lo),Es.d(e),e&&t(An),Q&&Q.d(e),e&&t(On)}}}const Pi={local:"training-a-causal-language-model-from-scratch",sections:[{local:"gathering-the-data",title:"Gathering the data"},{local:"preparing-the-dataset",title:"Preparing the dataset"},{local:"initializing-a-new-model",title:"Initializing a new model"},{local:"code-generation-with-a-pipeline",title:"Code generation with a pipeline"},{local:"training-with-accelerate",title:"Training with \u{1F917} Accelerate"}],title:"Training a causal language model from scratch"};function Di(A,n,f){let i="pt";return ai(()=>{const _=new URLSearchParams(window.location.search);f(0,i=_.get("fw")||"pt")}),[i]}class Ii extends Qr{constructor(n){super();ei(this,n,Di,Ti,ti,{})}}export{Ii as default,Pi as metadata};
