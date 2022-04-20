import{S as si,i as ai,s as ni,e as c,t as o,k as d,w as j,c as h,a as u,h as l,d as t,m,x,g as r,F as s,y as q,q as w,o as b,B as E,b as D,l as el,M as oi,N as Qo,p as da,v as li,n as ma}from"../../chunks/vendor-1e8b365d.js";import{T as fa}from"../../chunks/Tip-62b14c6e.js";import{Y as Ll}from"../../chunks/Youtube-c2a8cc39.js";import{I as Yn}from"../../chunks/IconCopyLink-483c28ba.js";import{C}from"../../chunks/CodeBlock-e5764662.js";import{D as ti}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as ri}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function ii(O){let n,f;return n=new ti({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section6_tf.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function pi(O){let n,f;return n=new ti({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section6_pt.ipynb"}]}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function ci(O){let n,f;return{c(){n=c("p"),f=o("Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Pretraining the language model will take a while. We suggest that you first run the training loop on a sample of the data by uncommenting the two partial lines above, and make sure that the training successfully completes and the models are stored. Nothing is more frustrating than a training run failing at the last step because you forgot to create a folder or because there\u2019s a typo at the end of the training loop!"),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function hi(O){let n,f,i,_,$,k,v,T,z,A,L,W,g,P;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=c("code"),v=o("eos_token_id"),T=o(" token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=c("code"),A=o("tokenize()"),L=o(" function to make use of that approach. Note that you\u2019ll want to set "),W=c("code"),g=o("truncation=False"),P=o(" and remove the other arguments from the tokenizer to get the full sequence of token IDs.")},l(I){n=h(I,"P",{});var M=u(n);f=l(M,"\u270F\uFE0F "),i=h(M,"STRONG",{});var G=u(i);_=l(G,"Try it out!"),G.forEach(t),$=l(M," Getting rid of all the chunks that are smaller than the context size wasn\u2019t a big issue here because we\u2019re using small context windows. As you increase the context size (or if you have a corpus of short documents), the fraction of chunks that are thrown away will also grow. A more efficient way to prepare the data is to join all the tokenized samples in a batch with an "),k=h(M,"CODE",{});var R=u(k);v=l(R,"eos_token_id"),R.forEach(t),T=l(M," token in between, and then perform the chunking on the concatenated sequences. As an exercise, modify the "),z=h(M,"CODE",{});var X=u(z);A=l(X,"tokenize()"),X.forEach(t),L=l(M," function to make use of that approach. Note that you\u2019ll want to set "),W=h(M,"CODE",{});var N=u(W);g=l(N,"truncation=False"),N.forEach(t),P=l(M," and remove the other arguments from the tokenizer to get the full sequence of token IDs."),M.forEach(t)},m(I,M){r(I,n,M),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,A),s(n,L),s(n,W),s(W,g),s(n,P)},d(I){I&&t(n)}}}function ui(O){let n,f,i,_,$,k,v,T,z,A,L,W;return n=new C({props:{code:`from transformers import AutoTokenizer, TFGPT2LMHeadModel, AutoConfig

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
)`}}),z=new C({props:{code:`model = TFGPT2LMHeadModel(config)
model(model.dummy_inputs)  # Builds the model
model.summary()`,highlighted:`model = TFGPT2LMHeadModel(config)
model(model.dummy_inputs)  <span class="hljs-comment"># Builds the model</span>
model.summary()`}}),L=new C({props:{code:`_________________________________________________________________
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
_________________________________________________________________`}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),A=d(),j(L.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var I=u($);k=l(I,"from_pretrained()"),I.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),A=m(g),x(L.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,A,P),q(L,g,P),W=!0},i(g){W||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(L.$$.fragment,g),W=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(L.$$.fragment,g),W=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(A),E(L,g)}}}function di(O){let n,f,i,_,$,k,v,T,z,A,L,W;return n=new C({props:{code:`from transformers import AutoTokenizer, GPT2LMHeadModel, AutoConfig

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
)`}}),z=new C({props:{code:`model = GPT2LMHeadModel(config)
model_size = sum(t.numel() for t in model.parameters())
print(f"GPT-2 size: {model_size/1000**2:.1f}M parameters")`,highlighted:`model = GPT2LMHeadModel(config)
model_size = <span class="hljs-built_in">sum</span>(t.numel() <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> model.parameters())
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;GPT-2 size: <span class="hljs-subst">{model_size/<span class="hljs-number">1000</span>**<span class="hljs-number">2</span>:<span class="hljs-number">.1</span>f}</span>M parameters&quot;</span>)`}}),L=new C({props:{code:"GPT-2 size: 124.2M parameters",highlighted:'GPT-<span class="hljs-number">2</span> size: <span class="hljs-number">124.2</span>M parameters'}}),{c(){j(n.$$.fragment),f=d(),i=c("p"),_=o("With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=c("code"),k=o("from_pretrained()"),v=o(" function, since we\u2019re actually initializing a model ourself:"),T=d(),j(z.$$.fragment),A=d(),j(L.$$.fragment)},l(g){x(n.$$.fragment,g),f=m(g),i=h(g,"P",{});var P=u(i);_=l(P,"With that configuration, we can load a new model. Note that this is the first time we don\u2019t use the "),$=h(P,"CODE",{});var I=u($);k=l(I,"from_pretrained()"),I.forEach(t),v=l(P," function, since we\u2019re actually initializing a model ourself:"),P.forEach(t),T=m(g),x(z.$$.fragment,g),A=m(g),x(L.$$.fragment,g)},m(g,P){q(n,g,P),r(g,f,P),r(g,i,P),s(i,_),s(i,$),s($,k),s(i,v),r(g,T,P),q(z,g,P),r(g,A,P),q(L,g,P),W=!0},i(g){W||(w(n.$$.fragment,g),w(z.$$.fragment,g),w(L.$$.fragment,g),W=!0)},o(g){b(n.$$.fragment,g),b(z.$$.fragment,g),b(L.$$.fragment,g),W=!1},d(g){E(n,g),g&&t(f),g&&t(i),g&&t(T),E(z,g),g&&t(A),E(L,g)}}}function mi(O){let n,f;return n=new C({props:{code:`from transformers import DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function fi(O){let n,f;return n=new C({props:{code:`from transformers import DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=False)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

tokenizer.pad_token = tokenizer.eos_token
data_collator = DataCollatorForLanguageModeling(tokenizer, mlm=<span class="hljs-literal">False</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function _i(O){let n,f;return n=new C({props:{code:`input_ids shape: (5, 128)
attention_mask shape: (5, 128)
labels shape: (5, 128)`,highlighted:`input_ids shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)
attention_mask shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)
labels shape: (<span class="hljs-number">5</span>, <span class="hljs-number">128</span>)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function gi(O){let n,f;return n=new C({props:{code:`input_ids shape: torch.Size([5, 128])
attention_mask shape: torch.Size([5, 128])
labels shape: torch.Size([5, 128])`,highlighted:`input_ids shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])
attention_mask shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])
labels shape: torch.Size([<span class="hljs-number">5</span>, <span class="hljs-number">128</span>])`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function Qr(O){let n,f,i,_,$,k,v,T;return v=new C({props:{code:`tf_train_dataset = tokenized_dataset["train"].to_tf_dataset(
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
)`}}),{c(){n=c("p"),f=o("Now we can use the "),i=c("code"),_=o("to_tf_dataset()"),$=o(" method to convert our datasets to TensorFlow datasets with the data collator we created above:"),k=d(),j(v.$$.fragment)},l(z){n=h(z,"P",{});var A=u(n);f=l(A,"Now we can use the "),i=h(A,"CODE",{});var L=u(i);_=l(L,"to_tf_dataset()"),L.forEach(t),$=l(A," method to convert our datasets to TensorFlow datasets with the data collator we created above:"),A.forEach(t),k=m(z),x(v.$$.fragment,z)},m(z,A){r(z,n,A),s(n,f),s(n,i),s(i,_),s(n,$),r(z,k,A),q(v,z,A),T=!0},i(z){T||(w(v.$$.fragment,z),T=!0)},o(z){b(v.$$.fragment,z),T=!1},d(z){z&&t(n),z&&t(k),E(v,z)}}}function wi(O){let n,f;return{c(){n=c("p"),f=o("\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"\u26A0\uFE0F Shifting the inputs and labels to align them happens inside the model, so the data collator just copies the inputs to create the labels."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function bi(O){let n,f,i,_,$,k,v,T,z,A,L,W,g,P,I,M,G,R,X;return A=new C({props:{code:`from transformers import create_optimizer
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
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),R=new C({props:{code:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="codeparrot-ds", tokenizer=tokenizer)

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;codeparrot-ds&quot;</span>, tokenizer=tokenizer)

model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])`}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training hyperparameters and call "),i=c("code"),_=o("compile()"),$=o(" and "),k=c("code"),v=o("fit()"),T=o(". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),z=d(),j(A.$$.fragment),L=d(),W=c("p"),g=o("Now we can just call "),P=c("code"),I=o("model.fit()"),M=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),G=d(),j(R.$$.fragment)},l(N){n=h(N,"P",{});var H=u(n);f=l(H,"All that\u2019s left to do is configure the training hyperparameters and call "),i=h(H,"CODE",{});var S=u(i);_=l(S,"compile()"),S.forEach(t),$=l(H," and "),k=h(H,"CODE",{});var V=u(k);v=l(V,"fit()"),V.forEach(t),T=l(H,". We\u2019ll use a learning rate schedule with some warmup to improve the stability of training:"),H.forEach(t),z=m(N),x(A.$$.fragment,N),L=m(N),W=h(N,"P",{});var Z=u(W);g=l(Z,"Now we can just call "),P=h(Z,"CODE",{});var B=u(P);I=l(B,"model.fit()"),B.forEach(t),M=l(Z," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read! After training completes we can push the model and tokenizer to the Hub:"),Z.forEach(t),G=m(N),x(R.$$.fragment,N)},m(N,H){r(N,n,H),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),r(N,z,H),q(A,N,H),r(N,L,H),r(N,W,H),s(W,g),s(W,P),s(P,I),s(W,M),r(N,G,H),q(R,N,H),X=!0},i(N){X||(w(A.$$.fragment,N),w(R.$$.fragment,N),X=!0)},o(N){b(A.$$.fragment,N),b(R.$$.fragment,N),X=!1},d(N){N&&t(n),N&&t(z),E(A,N),N&&t(L),N&&t(W),N&&t(G),E(R,N)}}}function ki(O){let n,f,i,_,$,k,v,T,z,A,L,W,g,P,I,M,G,R,X,N,H,S,V,Z,B,ee,ae;return g=new C({props:{code:`from transformers import Trainer, TrainingArguments

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
)`}}),H=new C({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),ee=new C({props:{code:"trainer.push_to_hub()",highlighted:"trainer.push_to_hub()"}}),{c(){n=c("p"),f=o("All that\u2019s left to do is configure the training arguments and fire up the "),i=c("code"),_=o("Trainer"),$=o(". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=c("code"),v=o("per_device_train_batch_size"),T=o(" * "),z=c("code"),A=o("gradient_accumulation_steps"),L=o("). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),W=d(),j(g.$$.fragment),P=d(),I=c("p"),M=o("Now we can just start the "),G=c("code"),R=o("Trainer"),X=o(" and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),N=d(),j(H.$$.fragment),S=d(),V=c("p"),Z=o("After training completes, we can push the model and tokenizer to the Hub:"),B=d(),j(ee.$$.fragment)},l(F){n=h(F,"P",{});var Y=u(n);f=l(Y,"All that\u2019s left to do is configure the training arguments and fire up the "),i=h(Y,"CODE",{});var Ne=u(i);_=l(Ne,"Trainer"),Ne.forEach(t),$=l(Y,". We\u2019ll use a cosine learning rate schedule with some warmup and an effective batch size of 256 ("),k=h(Y,"CODE",{});var Le=u(k);v=l(Le,"per_device_train_batch_size"),Le.forEach(t),T=l(Y," * "),z=h(Y,"CODE",{});var Dt=u(z);A=l(Dt,"gradient_accumulation_steps"),Dt.forEach(t),L=l(Y,"). Gradient accumulation is used when a single batch does not fit into memory, and incrementally builds up the gradient through several forward/backward passes. We\u2019ll see this in action when we create the training loop with \u{1F917} Accelerate."),Y.forEach(t),W=m(F),x(g.$$.fragment,F),P=m(F),I=h(F,"P",{});var be=u(I);M=l(be,"Now we can just start the "),G=h(be,"CODE",{});var We=u(G);R=l(We,"Trainer"),We.forEach(t),X=l(be," and wait for training to finish. Depending on whether you run it on the full or a subset of the training set this will take 20 or 2 hours, respectively, so grab a few coffees and a good book to read!"),be.forEach(t),N=m(F),x(H.$$.fragment,F),S=m(F),V=h(F,"P",{});var Ct=u(V);Z=l(Ct,"After training completes, we can push the model and tokenizer to the Hub:"),Ct.forEach(t),B=m(F),x(ee.$$.fragment,F)},m(F,Y){r(F,n,Y),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,A),s(n,L),r(F,W,Y),q(g,F,Y),r(F,P,Y),r(F,I,Y),s(I,M),s(I,G),s(G,R),s(I,X),r(F,N,Y),q(H,F,Y),r(F,S,Y),r(F,V,Y),s(V,Z),r(F,B,Y),q(ee,F,Y),ae=!0},i(F){ae||(w(g.$$.fragment,F),w(H.$$.fragment,F),w(ee.$$.fragment,F),ae=!0)},o(F){b(g.$$.fragment,F),b(H.$$.fragment,F),b(ee.$$.fragment,F),ae=!1},d(F){F&&t(n),F&&t(W),E(g,F),F&&t(P),F&&t(I),F&&t(N),E(H,F),F&&t(S),F&&t(V),F&&t(B),E(ee,F)}}}function yi(O){let n,f,i,_,$,k,v,T;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" It only took us about 30 lines of code in addition to the "),k=c("code"),v=o("TrainingArguments"),T=o(" to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!")},l(z){n=h(z,"P",{});var A=u(n);f=l(A,"\u270F\uFE0F "),i=h(A,"STRONG",{});var L=u(i);_=l(L,"Try it out!"),L.forEach(t),$=l(A," It only took us about 30 lines of code in addition to the "),k=h(A,"CODE",{});var W=u(k);v=l(W,"TrainingArguments"),W.forEach(t),T=l(A," to get from raw texts to training GPT-2. Try it out with your own dataset and see if you can get good results!"),A.forEach(t)},m(z,A){r(z,n,A),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T)},d(z){z&&t(n)}}}function $i(O){let n,f,i,_,$,k,v,T,z,A,L,W,g,P,I,M,G,R,X,N;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=c("code"),_=o("MirroredStrategy"),$=o(" context to substantially speed up training. You\u2019ll need to create a "),k=c("code"),v=o("tf.distribute.MirroredStrategy"),T=o(" object, and make sure that the "),z=c("code"),A=o("to_tf_dataset"),L=o(" commands as well as model creation and the call to "),W=c("code"),g=o("fit()"),P=o(" are all run in its "),I=c("code"),M=o("scope()"),G=o(" context. You can see documentation on this "),R=c("a"),X=o("here"),N=o("."),this.h()},l(H){n=h(H,"P",{});var S=u(n);f=l(S,"\u{1F4A1} If you have access to a machine with multiple GPUs, you can try using a "),i=h(S,"CODE",{});var V=u(i);_=l(V,"MirroredStrategy"),V.forEach(t),$=l(S," context to substantially speed up training. You\u2019ll need to create a "),k=h(S,"CODE",{});var Z=u(k);v=l(Z,"tf.distribute.MirroredStrategy"),Z.forEach(t),T=l(S," object, and make sure that the "),z=h(S,"CODE",{});var B=u(z);A=l(B,"to_tf_dataset"),B.forEach(t),L=l(S," commands as well as model creation and the call to "),W=h(S,"CODE",{});var ee=u(W);g=l(ee,"fit()"),ee.forEach(t),P=l(S," are all run in its "),I=h(S,"CODE",{});var ae=u(I);M=l(ae,"scope()"),ae.forEach(t),G=l(S," context. You can see documentation on this "),R=h(S,"A",{href:!0,rel:!0});var F=u(R);X=l(F,"here"),F.forEach(t),N=l(S,"."),S.forEach(t),this.h()},h(){D(R,"href","https://www.tensorflow.org/guide/distributed_training#use_tfdistributestrategy_with_keras_modelfit"),D(R,"rel","nofollow")},m(H,S){r(H,n,S),s(n,f),s(n,i),s(i,_),s(n,$),s(n,k),s(k,v),s(n,T),s(n,z),s(z,A),s(n,L),s(n,W),s(W,g),s(n,P),s(n,I),s(I,M),s(n,G),s(n,R),s(R,X),s(n,N)},d(H){H&&t(n)}}}function vi(O){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=c("code"),_=o("Trainer"),$=o(" automatically manages multiple machines, and this can speed up training tremendously.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F4A1} If you have access to a machine with multiple GPUs, try to run the code there. The "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," automatically manages multiple machines, and this can speed up training tremendously."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function ji(O){let n;function f($,k){return $[0]==="pt"?vi:$i}let i=f(O),_=i(O);return{c(){_.c(),n=el()},l($){_.l($),n=el()},m($,k){_.m($,k),r($,n,k)},p($,k){i!==(i=f($))&&(_.d(1),_=i($),_&&(_.c(),_.m(n.parentNode,n)))},d($){_.d($),$&&t(n)}}}function xi(O){let n,f;return n=new C({props:{code:`from transformers import pipeline

course_model = TFGPT2LMHeadModel.from_pretrained("huggingface-course/codeparrot-ds")
course_tokenizer = AutoTokenizer.from_pretrained("huggingface-course/codeparrot-ds")
pipe = pipeline(
    "text-generation", model=course_model, tokenizer=course_tokenizer, device=0
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

course_model = TFGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>)
course_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>)
pipe = pipeline(
    <span class="hljs-string">&quot;text-generation&quot;</span>, model=course_model, tokenizer=course_tokenizer, device=<span class="hljs-number">0</span>
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function qi(O){let n,f;return n=new C({props:{code:`import torch
from transformers import pipeline

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
pipe = pipeline(
    "text-generation", model="huggingface-course/codeparrot-ds", device=device
)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
pipe = pipeline(
    <span class="hljs-string">&quot;text-generation&quot;</span>, model=<span class="hljs-string">&quot;huggingface-course/codeparrot-ds&quot;</span>, device=device
)`}}),{c(){j(n.$$.fragment)},l(i){x(n.$$.fragment,i)},m(i,_){q(n,i,_),f=!0},i(i){f||(w(n.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),f=!1},d(i){E(n,i)}}}function Ei(O){let n,f,i,_,$;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=c("code"),_=o("Trainer"),$=o(" and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack (of course, we would need to evaluate it more thoroughly before deploying the model in the real world). Sometimes it requires more customization of the model training to achieve the necessary performance for a given use case, however. For example, what if we would like to dynamically update the batch size or have a conditional training loop that skips bad examples on the fly? One option would be to subclass the "),i=h(v,"CODE",{});var T=u(i);_=l(T,"Trainer"),T.forEach(t),$=l(v," and add the necessary changes, but sometimes it\u2019s simpler to write the training loop from scratch. That\u2019s where \u{1F917} Accelerate comes in."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function zi(O){let n,f;return{c(){n=c("p"),f=o("Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype.")},l(i){n=h(i,"P",{});var _=u(n);f=l(_,"Looking at these few examples, it seems that the model has learned some of the syntax of the Python data science stack. Of course, we would need to evaluate the model more thoroughly before deploying it in the real world, but this is still an impressive prototype."),_.forEach(t)},m(i,_){r(i,n,_),s(n,f)},d(i){i&&t(n)}}}function ei(O){let n,f,i,_,$,k,v,T,z,A,L,W,g,P,I,M,G,R,X,N,H,S,V,Z,B,ee,ae,F,Y,Ne,Le,Dt,be,We,Ct,rs,is,_a,qs,xe,Es,ke,zs,ye,Ts,Qe,At,Ot,ga,ps,K,wa,et,ne,ba,pe,$e,ka,tt,cs,ya,Ps,ce,Ie,Ft,te,$a,st,va,Ds,se,ja,at,Cs,nt,Nt,Lt,xa,Ge,ot,As,lt,Me,Os,qe,Fs,ve,Ns,Ee,Ls,Wt,It,Ws,rt,hs,he,us,ze,qa,ds,ue,ms,Te,Ea,fs,de,_s,me,gs,oe,za,Gt,Mt,Ta,Ht,it,Is,He,Se,Pe,le,St,ws,Gs,pt,Rt,ct,Ms,je,Pa,bs,Hs,ht,ks,re,De,Re,ut,Ss,Ce,Rs,fe,dt,Bt,Ut,Da,Yt,ie,Ca,Xt,Kt,Aa,mt,ft,Bs,Ae,Us,Be,Ys,_e,_t,ln,Xs,ge,Oa,gt,Vt,Ks,Ue,Ye,Xe,Ke;return _=new Yn({}),I=new Ll({props:{id:"Hm8_PgVTFuc"}}),ye=new C({props:{code:`keytoken_ids = []
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Keyword has not single token: <span class="hljs-subst">{keyword}</span>&quot;</span>)`}}),Qe=new C({props:{code:"'Keyword has not single token: testtest'",highlighted:'<span class="hljs-string">&#x27;Keyword has not single token: testtest&#x27;</span>'}}),K=new C({props:{code:`from torch.nn import CrossEntropyLoss
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
    <span class="hljs-keyword">return</span> weighted_loss`}}),nt=new C({props:{code:`from torch.utils.data.dataloader import DataLoader

tokenized_dataset.set_format("torch")
train_dataloader = DataLoader(tokenized_dataset["train"], batch_size=32, shuffle=True)
eval_dataloader = DataLoader(tokenized_dataset["valid"], batch_size=32)`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data.dataloader <span class="hljs-keyword">import</span> DataLoader

tokenized_dataset.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
train_dataloader = DataLoader(tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>], batch_size=<span class="hljs-number">32</span>, shuffle=<span class="hljs-literal">True</span>)
eval_dataloader = DataLoader(tokenized_dataset[<span class="hljs-string">&quot;valid&quot;</span>], batch_size=<span class="hljs-number">32</span>)`}}),ot=new C({props:{code:`weight_decay = 0.1


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
    ]`}}),qe=new C({props:{code:`def evaluate():
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
    <span class="hljs-keyword">return</span> loss.item(), perplexity.item()`}}),he=new C({props:{code:"model = GPT2LMHeadModel(config)",highlighted:"model = GPT2LMHeadModel(config)"}}),ue=new C({props:{code:`from torch.optim import AdamW

optimizer = AdamW(get_grouped_params(model), lr=5e-4)`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(get_grouped_params(model), lr=<span class="hljs-number">5e-4</span>)`}}),de=new C({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)

model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),me=new fa({props:{$$slots:{default:[Ti]},$$scope:{ctx:O}}}),Se=new C({props:{code:`num_train_epochs = 1
num_update_steps_per_epoch = len(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    name="linear",
    optimizer=optimizer,
    num_warmup_steps=1_000,
    num_training_steps=num_training_steps,
)`,highlighted:`num_train_epochs = <span class="hljs-number">1</span>
num_update_steps_per_epoch = <span class="hljs-built_in">len</span>(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    name=<span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">1_000</span>,
    num_training_steps=num_training_steps,
)`}}),ht=new C({props:{code:`from huggingface_hub import Repository, get_full_repo_name

model_name = "codeparrot-ds-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),re=new C({props:{code:"'sgugger/codeparrot-ds-accelerate'",highlighted:'<span class="hljs-string">&#x27;sgugger/codeparrot-ds-accelerate&#x27;</span>'}}),Ce=new C({props:{code:`output_dir = "codeparrot-ds-accelerate"
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`output_dir = <span class="hljs-string">&quot;codeparrot-ds-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),ft=new C({props:{code:"evaluate()",highlighted:"evaluate()"}}),Ae=new C({props:{code:"(10.934126853942871, 56057.14453125)",highlighted:'(<span class="hljs-number">10.934126853942871</span>, <span class="hljs-number">56057.14453125</span>)'}}),ge=new C({props:{code:`from tqdm.notebook import tqdm

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
                )`,highlighted:`<span class="hljs-keyword">from</span> tqdm.notebook <span class="hljs-keyword">import</span> tqdm

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
                )`}}),Ue=new fa({props:{$$slots:{default:[Pi]},$$scope:{ctx:O}}}),Xe=new fa({props:{$$slots:{default:[Di]},$$scope:{ctx:O}}}),{c(){n=c("h2"),f=c("a"),i=c("span"),j(_.$$.fragment),$=d(),k=c("span"),v=o("Training with \u{1F917} Accelerate"),T=d(),z=c("p"),A=o("We\u2019ve seen how to train a model with the "),L=c("code"),W=o("Trainer"),g=o(", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),P=d(),j(I.$$.fragment),M=d(),G=c("p"),R=o("Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),X=c("code"),N=o("plt"),H=o(", "),S=c("code"),V=o("pd"),Z=o(", "),B=c("code"),ee=o("sk"),ae=o(", "),F=c("code"),Y=o("fit"),Ne=o(", and "),Le=c("code"),Dt=o("predict"),be=o(", which are the most frequent import names for "),We=c("code"),Ct=o("matplotlib.pyplot"),rs=o(", "),is=c("code"),_a=o("pandas"),qs=o(", and "),xe=c("code"),Es=o("sklearn"),ke=o(" as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),zs=d(),j(ye.$$.fragment),Ts=d(),j(Qe.$$.fragment),At=d(),Ot=c("p"),ga=o("Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),ps=d(),j(K.$$.fragment),wa=d(),et=c("p"),ne=o("Before we can start training with this awesome new loss function, we need to prepare a few things:"),ba=d(),pe=c("ul"),$e=c("li"),ka=o("We need dataloaders to load the data in batches."),tt=d(),cs=c("li"),ya=o("We need to set up weight decay parameters."),Ps=d(),ce=c("li"),Ie=o("From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),Ft=d(),te=c("p"),$a=o("Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),st=c("code"),va=o('"torch"'),Ds=o(", and then we can pass it to a PyTorch "),se=c("code"),ja=o("DataLoader"),at=o(" with the appropriate batch size:"),Cs=d(),j(nt.$$.fragment),Nt=d(),Lt=c("p"),xa=o("Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),Ge=d(),j(ot.$$.fragment),As=d(),lt=c("p"),Me=o("Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),Os=d(),j(qe.$$.fragment),Fs=d(),ve=c("p"),Ns=o("With the "),Ee=c("code"),Ls=o("evaluate()"),Wt=o(" function we can report loss and "),It=c("a"),Ws=o("perplexity"),rt=o(" at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),hs=d(),j(he.$$.fragment),us=d(),ze=c("p"),qa=o("We can then define our optimizer, using the function from before to split the parameters for weight decay:"),ds=d(),j(ue.$$.fragment),ms=d(),Te=c("p"),Ea=o("Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),fs=d(),j(de.$$.fragment),_s=d(),j(me.$$.fragment),gs=d(),oe=c("p"),za=o("Now that we have sent our "),Gt=c("code"),Mt=o("train_dataloader"),Ta=o(" to "),Ht=c("code"),it=o("accelerator.prepare()"),Is=o(", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),He=d(),j(Se.$$.fragment),Pe=d(),le=c("p"),St=o("Lastly, to push our model to the Hub, we will need to create a "),ws=c("code"),Gs=o("Repository"),pt=o(" object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Rt=c("code"),ct=o("repo_name"),Ms=o(" with your own choice; it just needs to contain your username, which is what the function "),je=c("code"),Pa=o("get_full_repo_name()"),bs=o(" does):"),Hs=d(),j(ht.$$.fragment),ks=d(),j(re.$$.fragment),De=d(),Re=c("p"),ut=o("Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),Ss=d(),j(Ce.$$.fragment),Rs=d(),fe=c("p"),dt=o("We can now upload anything we save in "),Bt=c("code"),Ut=o("output_dir"),Da=o(" by calling the "),Yt=c("code"),ie=o("repo.push_to_hub()"),Ca=o(" method. This will help us upload the intermediate models at the end of each epoch."),Xt=d(),Kt=c("p"),Aa=o("Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),mt=d(),j(ft.$$.fragment),Bs=d(),j(Ae.$$.fragment),Us=d(),Be=c("p"),Ys=o("Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),_e=c("code"),_t=o("evaluate()"),ln=o(" function:"),Xs=d(),j(ge.$$.fragment),Oa=d(),gt=c("p"),Vt=o("And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),Ks=d(),j(Ue.$$.fragment),Ye=d(),j(Xe.$$.fragment),this.h()},l(a){n=h(a,"H2",{class:!0});var y=u(n);f=h(y,"A",{id:!0,class:!0,href:!0});var rn=u(f);i=h(rn,"SPAN",{});var Vs=u(i);x(_.$$.fragment,Vs),Vs.forEach(t),rn.forEach(t),$=m(y),k=h(y,"SPAN",{});var pn=u(k);v=l(pn,"Training with \u{1F917} Accelerate"),pn.forEach(t),y.forEach(t),T=m(a),z=h(a,"P",{});var Zs=u(z);A=l(Zs,"We\u2019ve seen how to train a model with the "),L=h(Zs,"CODE",{});var Fa=u(L);W=l(Fa,"Trainer"),Fa.forEach(t),g=l(Zs,", which can allow for some customization. However, sometimes we want full control over the training loop, or we want to make some exotic changes. In this case \u{1F917} Accelerate is a great choice, and in this section we\u2019ll go through the steps to use it to train our model. To make things more interesting, we\u2019ll also add a twist to the training loop."),Zs.forEach(t),P=m(a),x(I.$$.fragment,a),M=m(a),G=h(a,"P",{});var U=u(G);R=l(U,"Since we are mainly interested in sensible autocompletion for the the data science libraries, it makes sense to give more weight to training samples that make more use of these libraries. We can easily identify these examples through the use of keywords such as "),X=h(U,"CODE",{});var cn=u(X);N=l(cn,"plt"),cn.forEach(t),H=l(U,", "),S=h(U,"CODE",{});var Js=u(S);V=l(Js,"pd"),Js.forEach(t),Z=l(U,", "),B=h(U,"CODE",{});var hn=u(B);ee=l(hn,"sk"),hn.forEach(t),ae=l(U,", "),F=h(U,"CODE",{});var un=u(F);Y=l(un,"fit"),un.forEach(t),Ne=l(U,", and "),Le=h(U,"CODE",{});var ys=u(Le);Dt=l(ys,"predict"),ys.forEach(t),be=l(U,", which are the most frequent import names for "),We=h(U,"CODE",{});var dn=u(We);Ct=l(dn,"matplotlib.pyplot"),dn.forEach(t),rs=l(U,", "),is=h(U,"CODE",{});var mn=u(is);_a=l(mn,"pandas"),mn.forEach(t),qs=l(U,", and "),xe=h(U,"CODE",{});var Qs=u(xe);Es=l(Qs,"sklearn"),Qs.forEach(t),ke=l(U," as well as the fit/predict pattern of the latter. If these are each represented as a single token, we can easily check if they occur in the input sequence. Tokens can have a whitespace prefix, so we\u2019ll also check for those versions in the tokenizer vocabulary. To verify that it works, we\u2019ll add one test token which should be split into multiple tokens:"),U.forEach(t),zs=m(a),x(ye.$$.fragment,a),Ts=m(a),x(Qe.$$.fragment,a),At=m(a),Ot=h(a,"P",{});var fn=u(Ot);ga=l(fn,"Great, that seems to work nicely! We can now write a custom loss function that takes the input sequence, the logits, and the key tokens we just selected as inputs. First we need to align the logits and inputs: the input sequence shifted by one to the right forms the labels, since the next token is the label for the current token. We can achieve this by starting the labels from the second token of the input sequence, since the model does not make a prediction for the first token anyway. Then we cut off the last logit, as we don\u2019t have a label for the token that follows the full input sequence. With that we can compute the loss per sample and count the occurrences of all keywords in each sample. Finally, we calculate the weighted average over all samples using the occurrences as weights. Since we don\u2019t want to throw away all the samples that have no keywords, we add 1 to the weights:"),fn.forEach(t),ps=m(a),x(K.$$.fragment,a),wa=m(a),et=h(a,"P",{});var _n=u(et);ne=l(_n,"Before we can start training with this awesome new loss function, we need to prepare a few things:"),_n.forEach(t),ba=m(a),pe=h(a,"UL",{});var wt=u(pe);$e=h(wt,"LI",{});var Zt=u($e);ka=l(Zt,"We need dataloaders to load the data in batches."),Zt.forEach(t),tt=m(wt),cs=h(wt,"LI",{});var Na=u(cs);ya=l(Na,"We need to set up weight decay parameters."),Na.forEach(t),Ps=m(wt),ce=h(wt,"LI",{});var Jt=u(ce);Ie=l(Jt,"From time to time we want to evaluate, so it makes sense to wrap the evaluation code in a function."),Jt.forEach(t),wt.forEach(t),Ft=m(a),te=h(a,"P",{});var bt=u(te);$a=l(bt,"Let\u2019s start with the dataloaders. We only need to set the dataset\u2019s format to "),st=h(bt,"CODE",{});var $s=u(st);va=l($s,'"torch"'),$s.forEach(t),Ds=l(bt,", and then we can pass it to a PyTorch "),se=h(bt,"CODE",{});var gn=u(se);ja=l(gn,"DataLoader"),gn.forEach(t),at=l(bt," with the appropriate batch size:"),bt.forEach(t),Cs=m(a),x(nt.$$.fragment,a),Nt=m(a),Lt=h(a,"P",{});var La=u(Lt);xa=l(La,"Next, we group the parameters so that the optimizer knows which ones will get an additional weight decay. Usually, all bias and LayerNorm weights terms are exempt from this; here\u2019s how we can do this:"),La.forEach(t),Ge=m(a),x(ot.$$.fragment,a),As=m(a),lt=h(a,"P",{});var vs=u(lt);Me=l(vs,"Since we want to evaluate the model regularly on the validation set during training, let\u2019s write a function for that as well. It just runs through the evaluation dataloader and gathers all the losses across processes:"),vs.forEach(t),Os=m(a),x(qe.$$.fragment,a),Fs=m(a),ve=h(a,"P",{});var Qt=u(ve);Ns=l(Qt,"With the "),Ee=h(Qt,"CODE",{});var Wa=u(Ee);Ls=l(Wa,"evaluate()"),Wa.forEach(t),Wt=l(Qt," function we can report loss and "),It=h(Qt,"A",{href:!0});var kt=u(It);Ws=l(kt,"perplexity"),kt.forEach(t),rt=l(Qt," at regular intervals. Next, we redefine our model to make sure we train from scratch again:"),Qt.forEach(t),hs=m(a),x(he.$$.fragment,a),us=m(a),ze=h(a,"P",{});var Ia=u(ze);qa=l(Ia,"We can then define our optimizer, using the function from before to split the parameters for weight decay:"),Ia.forEach(t),ds=m(a),x(ue.$$.fragment,a),ms=m(a),Te=h(a,"P",{});var Ve=u(Te);Ea=l(Ve,"Now let\u2019s prepare the model, optimizer, and dataloaders so we can start training:"),Ve.forEach(t),fs=m(a),x(de.$$.fragment,a),_s=m(a),x(me.$$.fragment,a),gs=m(a),oe=h(a,"P",{});var we=u(oe);za=l(we,"Now that we have sent our "),Gt=h(we,"CODE",{});var ea=u(Gt);Mt=l(ea,"train_dataloader"),ea.forEach(t),Ta=l(we," to "),Ht=h(we,"CODE",{});var es=u(Ht);it=l(es,"accelerator.prepare()"),es.forEach(t),Is=l(we,", we can use its length to compute the number of training steps. Remember that we should always do this after preparing the dataloader, as that method will change its length. We use a classic linear schedule from the learning rate to 0:"),we.forEach(t),He=m(a),x(Se.$$.fragment,a),Pe=m(a),le=h(a,"P",{});var Ze=u(le);St=l(Ze,"Lastly, to push our model to the Hub, we will need to create a "),ws=h(Ze,"CODE",{});var ta=u(ws);Gs=l(ta,"Repository"),ta.forEach(t),pt=l(Ze," object in a working folder. First log in to the Hugging Face Hub, if you aren\u2019t logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Rt=h(Ze,"CODE",{});var wn=u(Rt);ct=l(wn,"repo_name"),wn.forEach(t),Ms=l(Ze," with your own choice; it just needs to contain your username, which is what the function "),je=h(Ze,"CODE",{});var Ga=u(je);Pa=l(Ga,"get_full_repo_name()"),Ga.forEach(t),bs=l(Ze," does):"),Ze.forEach(t),Hs=m(a),x(ht.$$.fragment,a),ks=m(a),x(re.$$.fragment,a),De=m(a),Re=h(a,"P",{});var Oe=u(Re);ut=l(Oe,"Then we can clone that repository in a local folder. If it already exists, this local folder should be an existing clone of the repository we are working with:"),Oe.forEach(t),Ss=m(a),x(Ce.$$.fragment,a),Rs=m(a),fe=h(a,"P",{});var ts=u(fe);dt=l(ts,"We can now upload anything we save in "),Bt=h(ts,"CODE",{});var sa=u(Bt);Ut=l(sa,"output_dir"),sa.forEach(t),Da=l(ts," by calling the "),Yt=h(ts,"CODE",{});var bn=u(Yt);ie=l(bn,"repo.push_to_hub()"),bn.forEach(t),Ca=l(ts," method. This will help us upload the intermediate models at the end of each epoch."),ts.forEach(t),Xt=m(a),Kt=h(a,"P",{});var kn=u(Kt);Aa=l(kn,"Before we train, let\u2019s run a quick test to see if the evaluation function works properly:"),kn.forEach(t),mt=m(a),x(ft.$$.fragment,a),Bs=m(a),x(Ae.$$.fragment,a),Us=m(a),Be=h(a,"P",{});var ss=u(Be);Ys=l(ss,"Those are very high values for loss and perplexity, but that\u2019s not surprising as we haven\u2019t trained the model yet. With that, we have everything prepared to write the core part of the training script: the training loop. In the training loop we iterate over the dataloader and pass the batches to the model. With the logits, we can then evaluate our custom loss function. We scale the loss by the number of gradient accumulation steps so as not to create larger losses when aggregating more steps. Before we optimize, we also clip the gradients for better convergence. Finally, every few steps we evaluate the model on the evaluation set with our new "),_e=h(ss,"CODE",{});var yn=u(_e);_t=l(yn,"evaluate()"),yn.forEach(t),ln=l(ss," function:"),ss.forEach(t),Xs=m(a),x(ge.$$.fragment,a),Oa=m(a),gt=h(a,"P",{});var $n=u(gt);Vt=l($n,"And that\u2019s it \u2014 you now have your own custom training loop for causal language models such as GPT-2 that you can further customize to your needs."),$n.forEach(t),Ks=m(a),x(Ue.$$.fragment,a),Ye=m(a),x(Xe.$$.fragment,a),this.h()},h(){D(f,"id","training-with-accelerate"),D(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(f,"href","#training-with-accelerate"),D(n,"class","relative group"),D(It,"href","/course/chapter7/3")},m(a,y){r(a,n,y),s(n,f),s(f,i),q(_,i,null),s(n,$),s(n,k),s(k,v),r(a,T,y),r(a,z,y),s(z,A),s(z,L),s(L,W),s(z,g),r(a,P,y),q(I,a,y),r(a,M,y),r(a,G,y),s(G,R),s(G,X),s(X,N),s(G,H),s(G,S),s(S,V),s(G,Z),s(G,B),s(B,ee),s(G,ae),s(G,F),s(F,Y),s(G,Ne),s(G,Le),s(Le,Dt),s(G,be),s(G,We),s(We,Ct),s(G,rs),s(G,is),s(is,_a),s(G,qs),s(G,xe),s(xe,Es),s(G,ke),r(a,zs,y),q(ye,a,y),r(a,Ts,y),q(Qe,a,y),r(a,At,y),r(a,Ot,y),s(Ot,ga),r(a,ps,y),q(K,a,y),r(a,wa,y),r(a,et,y),s(et,ne),r(a,ba,y),r(a,pe,y),s(pe,$e),s($e,ka),s(pe,tt),s(pe,cs),s(cs,ya),s(pe,Ps),s(pe,ce),s(ce,Ie),r(a,Ft,y),r(a,te,y),s(te,$a),s(te,st),s(st,va),s(te,Ds),s(te,se),s(se,ja),s(te,at),r(a,Cs,y),q(nt,a,y),r(a,Nt,y),r(a,Lt,y),s(Lt,xa),r(a,Ge,y),q(ot,a,y),r(a,As,y),r(a,lt,y),s(lt,Me),r(a,Os,y),q(qe,a,y),r(a,Fs,y),r(a,ve,y),s(ve,Ns),s(ve,Ee),s(Ee,Ls),s(ve,Wt),s(ve,It),s(It,Ws),s(ve,rt),r(a,hs,y),q(he,a,y),r(a,us,y),r(a,ze,y),s(ze,qa),r(a,ds,y),q(ue,a,y),r(a,ms,y),r(a,Te,y),s(Te,Ea),r(a,fs,y),q(de,a,y),r(a,_s,y),q(me,a,y),r(a,gs,y),r(a,oe,y),s(oe,za),s(oe,Gt),s(Gt,Mt),s(oe,Ta),s(oe,Ht),s(Ht,it),s(oe,Is),r(a,He,y),q(Se,a,y),r(a,Pe,y),r(a,le,y),s(le,St),s(le,ws),s(ws,Gs),s(le,pt),s(le,Rt),s(Rt,ct),s(le,Ms),s(le,je),s(je,Pa),s(le,bs),r(a,Hs,y),q(ht,a,y),r(a,ks,y),q(re,a,y),r(a,De,y),r(a,Re,y),s(Re,ut),r(a,Ss,y),q(Ce,a,y),r(a,Rs,y),r(a,fe,y),s(fe,dt),s(fe,Bt),s(Bt,Ut),s(fe,Da),s(fe,Yt),s(Yt,ie),s(fe,Ca),r(a,Xt,y),r(a,Kt,y),s(Kt,Aa),r(a,mt,y),q(ft,a,y),r(a,Bs,y),q(Ae,a,y),r(a,Us,y),r(a,Be,y),s(Be,Ys),s(Be,_e),s(_e,_t),s(Be,ln),r(a,Xs,y),q(ge,a,y),r(a,Oa,y),r(a,gt,y),s(gt,Vt),r(a,Ks,y),q(Ue,a,y),r(a,Ye,y),q(Xe,a,y),Ke=!0},i(a){Ke||(w(_.$$.fragment,a),w(I.$$.fragment,a),w(ye.$$.fragment,a),w(Qe.$$.fragment,a),w(K.$$.fragment,a),w(nt.$$.fragment,a),w(ot.$$.fragment,a),w(qe.$$.fragment,a),w(he.$$.fragment,a),w(ue.$$.fragment,a),w(de.$$.fragment,a),w(me.$$.fragment,a),w(Se.$$.fragment,a),w(ht.$$.fragment,a),w(re.$$.fragment,a),w(Ce.$$.fragment,a),w(ft.$$.fragment,a),w(Ae.$$.fragment,a),w(ge.$$.fragment,a),w(Ue.$$.fragment,a),w(Xe.$$.fragment,a),Ke=!0)},o(a){b(_.$$.fragment,a),b(I.$$.fragment,a),b(ye.$$.fragment,a),b(Qe.$$.fragment,a),b(K.$$.fragment,a),b(nt.$$.fragment,a),b(ot.$$.fragment,a),b(qe.$$.fragment,a),b(he.$$.fragment,a),b(ue.$$.fragment,a),b(de.$$.fragment,a),b(me.$$.fragment,a),b(Se.$$.fragment,a),b(ht.$$.fragment,a),b(re.$$.fragment,a),b(Ce.$$.fragment,a),b(ft.$$.fragment,a),b(Ae.$$.fragment,a),b(ge.$$.fragment,a),b(Ue.$$.fragment,a),b(Xe.$$.fragment,a),Ke=!1},d(a){a&&t(n),E(_),a&&t(T),a&&t(z),a&&t(P),E(I,a),a&&t(M),a&&t(G),a&&t(zs),E(ye,a),a&&t(Ts),E(Qe,a),a&&t(At),a&&t(Ot),a&&t(ps),E(K,a),a&&t(wa),a&&t(et),a&&t(ba),a&&t(pe),a&&t(Ft),a&&t(te),a&&t(Cs),E(nt,a),a&&t(Nt),a&&t(Lt),a&&t(Ge),E(ot,a),a&&t(As),a&&t(lt),a&&t(Os),E(qe,a),a&&t(Fs),a&&t(ve),a&&t(hs),E(he,a),a&&t(us),a&&t(ze),a&&t(ds),E(ue,a),a&&t(ms),a&&t(Te),a&&t(fs),E(de,a),a&&t(_s),E(me,a),a&&t(gs),a&&t(oe),a&&t(He),E(Se,a),a&&t(Pe),a&&t(le),a&&t(Hs),E(ht,a),a&&t(ks),E(re,a),a&&t(De),a&&t(Re),a&&t(Ss),E(Ce,a),a&&t(Rs),a&&t(fe),a&&t(Xt),a&&t(Kt),a&&t(mt),E(ft,a),a&&t(Bs),E(Ae,a),a&&t(Us),a&&t(Be),a&&t(Xs),E(ge,a),a&&t(Oa),a&&t(gt),a&&t(Ks),E(Ue,a),a&&t(Ye),E(Xe,a)}}}function Ti(O){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=c("a"),_=o("Chapter 3"),$=o(" for more details."),this.h()},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u{1F6A8} If you\u2019re training on a TPU, you\u2019ll need to move all the code starting at the cell above into a dedicated training function. See "),i=h(v,"A",{href:!0});var T=u(i);_=l(T,"Chapter 3"),T.forEach(t),$=l(v," for more details."),v.forEach(t),this.h()},h(){D(i,"href","/course/chapter3")},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Pi(O){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" Either create your own custom loss function tailored to your use case, or add another custom step into the training loop.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," Either create your own custom loss function tailored to your use case, or add another custom step into the training loop."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Di(O){let n,f,i,_,$;return{c(){n=c("p"),f=o("\u270F\uFE0F "),i=c("strong"),_=o("Try it out!"),$=o(" When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going.")},l(k){n=h(k,"P",{});var v=u(n);f=l(v,"\u270F\uFE0F "),i=h(v,"STRONG",{});var T=u(i);_=l(T,"Try it out!"),T.forEach(t),$=l(v," When running long training experiments it\u2019s a good idea to log important metrics using tools such as TensorBoard or Weights & Biases. Add proper logging to the training loop so you can always check how the training is going."),v.forEach(t)},m(k,v){r(k,n,v),s(n,f),s(n,i),s(i,_),s(n,$)},d(k){k&&t(n)}}}function Ci(O){let n,f,i,_,$,k,v,T,z,A,L,W,g,P,I,M,G,R,X,N,H,S,V,Z,B,ee,ae,F,Y,Ne,Le,Dt,be,We,Ct,rs,is,_a,qs,xe,Es,ke,zs,ye,Ts,Qe,At,Ot,ga,ps,K,wa,et,ne,ba,pe,$e,ka,tt,cs,ya,Ps,ce,Ie,Ft,te,$a,st,va,Ds,se,ja,at,Cs,nt,Nt,Lt,xa,Ge,ot,As,lt,Me,Os,qe,Fs,ve,Ns,Ee,Ls,Wt,It,Ws,rt,hs,he,us,ze,qa,ds,ue,ms,Te,Ea,fs,de,_s,me,gs,oe,za,Gt,Mt,Ta,Ht,it,Is,He,Se,Pe,le,St,ws,Gs,pt,Rt,ct,Ms,je,Pa,bs,Hs,ht,ks,re,De,Re,ut,Ss,Ce,Rs,fe,dt,Bt,Ut,Da,Yt,ie,Ca,Xt,Kt,Aa,mt,ft,Bs,Ae,Us,Be,Ys,_e,_t,ln,Xs,ge,Oa,gt,Vt,Ks,Ue,Ye,Xe,Ke,a,y,rn,Vs,pn,Zs,Fa,U,cn,Js,hn,un,ys,dn,mn,Qs,fn,_n,wt,Zt,Na,Jt,bt,$s,gn,La,vs,Qt,Wa,kt,Ia,Ve,we,ea,es,Ze,ta,wn,Ga,Oe,ts,sa,bn,kn,ss,yn,$n,ho,yt,$t,vn,as,tl,Xn,sl,al,Kn,nl,ol,uo,ns,ll,Vn,rl,il,Zn,pl,cl,mo,vt,jt,jn,xn,hl,fo,Ma,_o,xt,qt,qn,En,ul,go,zn,aa,wo,Tn,dl,bo,Ha,ko,Pn,ml,yo,Dn,fl,$o,Sa,vo,Et,zt,Cn,na,jo,oa,xo,js,la,Jn,Ra,_l,Qn,gl,qo,ra,wl,eo,bl,kl,Eo,Tt,Pt,An,On,yl,zo,Ba,To,Ua,Po,os,$l,to,vl,jl,so,xl,ql,Do,Ya,Co,Xa,Ao,Je,El,ao,zl,Tl,no,Pl,Dl,oo,Cl,Al,Oo,Ka,Fo,Va,No,ia,Ol,lo,Fl,Nl,Lo,Za,Wo,Ja,Io,Fn,Nn,Go;i=new ri({props:{fw:O[0]}}),T=new Yn({});const Wl=[pi,ii],Qa=[];function Il(e,p){return e[0]==="pt"?0:1}g=Il(O),P=Qa[g]=Wl[g](O),xe=new Ll({props:{id:"Vpjb1lu0MDk"}}),te=new Yn({}),Ee=new C({props:{code:`def any_keyword_in_string(string, keywords):
    for keyword in keywords:
        if keyword in string:
            return True
    return False`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">any_keyword_in_string</span>(<span class="hljs-params">string, keywords</span>):
    <span class="hljs-keyword">for</span> keyword <span class="hljs-keyword">in</span> keywords:
        <span class="hljs-keyword">if</span> keyword <span class="hljs-keyword">in</span> string:
            <span class="hljs-keyword">return</span> <span class="hljs-literal">True</span>
    <span class="hljs-keyword">return</span> <span class="hljs-literal">False</span>`}}),rt=new C({props:{code:`filters = ["pandas", "sklearn", "matplotlib", "seaborn"]
example_1 = "import numpy as np"
example_2 = "import pandas as pd"

print(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`,highlighted:`filters = [<span class="hljs-string">&quot;pandas&quot;</span>, <span class="hljs-string">&quot;sklearn&quot;</span>, <span class="hljs-string">&quot;matplotlib&quot;</span>, <span class="hljs-string">&quot;seaborn&quot;</span>]
example_1 = <span class="hljs-string">&quot;import numpy as np&quot;</span>
example_2 = <span class="hljs-string">&quot;import pandas as pd&quot;</span>

<span class="hljs-built_in">print</span>(
    any_keyword_in_string(example_1, filters), any_keyword_in_string(example_2, filters)
)`}}),he=new C({props:{code:"False True",highlighted:'<span class="hljs-literal">False</span> <span class="hljs-literal">True</span>'}}),ue=new C({props:{code:`def filter_streaming_dataset(dataset, filters):
    filtered_dict = defaultdict(list)
    total = 0
    for sample in tqdm(iter(dataset)):
        total += 1
        if any_keyword_in_string(sample["content"], filters):
            for k, v in sample.items():
                filtered_dict[k].append(v)
    print(f"{len(filtered_dict['content'])/total:.2%} of data after filtering.")
    return Dataset.from_dict(filtered_dict)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">filter_streaming_dataset</span>(<span class="hljs-params">dataset, filters</span>):
    filtered_dict = defaultdict(<span class="hljs-built_in">list</span>)
    total = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> sample <span class="hljs-keyword">in</span> tqdm(<span class="hljs-built_in">iter</span>(dataset)):
        total += <span class="hljs-number">1</span>
        <span class="hljs-keyword">if</span> any_keyword_in_string(sample[<span class="hljs-string">&quot;content&quot;</span>], filters):
            <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> sample.items():
                filtered_dict[k].append(v)
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{<span class="hljs-built_in">len</span>(filtered_dict[<span class="hljs-string">&#x27;content&#x27;</span>])/total:<span class="hljs-number">.2</span>%}</span> of data after filtering.&quot;</span>)
    <span class="hljs-keyword">return</span> Dataset.from_dict(filtered_dict)`}}),de=new C({props:{code:`# This cell will take a very long time to execute, so you should skip it and go to
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
filtered_data = filter_streaming_dataset(data, filters)`}}),me=new C({props:{code:"3.26% of data after filtering.",highlighted:'<span class="hljs-number">3.26</span>% of data after filtering.'}}),it=new C({props:{code:`from datasets import load_dataset, DatasetDict

ds_train = load_dataset("huggingface-course/codeparrot-ds-train", split="train")
ds_valid = load_dataset("huggingface-course/codeparrot-ds-valid", split="train")

raw_datasets = DatasetDict(
    {
        "train": ds_train,  # .shuffle().select(range(50000)),
        "valid": ds_valid,  # .shuffle().select(range(500))
    }
)

raw_datasets`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, DatasetDict

ds_train = load_dataset(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds-train&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
ds_valid = load_dataset(<span class="hljs-string">&quot;huggingface-course/codeparrot-ds-valid&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)

raw_datasets = DatasetDict(
    {
        <span class="hljs-string">&quot;train&quot;</span>: ds_train,  <span class="hljs-comment"># .shuffle().select(range(50000)),</span>
        <span class="hljs-string">&quot;valid&quot;</span>: ds_valid,  <span class="hljs-comment"># .shuffle().select(range(500))</span>
    }
)

raw_datasets`}}),He=new C({props:{code:`DatasetDict({
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
})`}}),Pe=new fa({props:{$$slots:{default:[ci]},$$scope:{ctx:O}}}),pt=new C({props:{code:`for key in raw_datasets["train"][0]:
    print(f"{key.upper()}: {raw_datasets['train'][0][key][:200]}")`,highlighted:`<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key.upper()}</span>: <span class="hljs-subst">{raw_datasets[<span class="hljs-string">&#x27;train&#x27;</span>][<span class="hljs-number">0</span>][key][:<span class="hljs-number">200</span>]}</span>&quot;</span>)`}}),ct=new C({props:{code:`'REPO_NAME: kmike/scikit-learn'
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
LICENSE: bsd-3-clause&#x27;&#x27;&#x27;</span>`}}),ut=new Yn({}),dt=new Ll({props:{id:"ma1TrR7gE7I"}}),Ye=new C({props:{code:`from transformers import AutoTokenizer

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Chunk mapping: <span class="hljs-subst">{outputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>&quot;</span>)`}}),Ke=new C({props:{code:`Input IDs length: 34
Input chunk lengths: [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 117, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 41]
Chunk mapping: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]`,highlighted:`Input IDs length: <span class="hljs-number">34</span>
Input chunk lengths: [<span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">117</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">128</span>, <span class="hljs-number">41</span>]
Chunk mapping: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]`}}),Zt=new C({props:{code:`def tokenize(element):
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
tokenized_datasets`}}),Jt=new C({props:{code:`DatasetDict({
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
})`}}),kt=new fa({props:{$$slots:{default:[hi]},$$scope:{ctx:O}}}),es=new Yn({});const Gl=[di,ui],en=[];function Ml(e,p){return e[0]==="pt"?0:1}yt=Ml(O),$t=en[yt]=Gl[yt](O);const Hl=[fi,mi],tn=[];function Sl(e,p){return e[0]==="pt"?0:1}vt=Sl(O),jt=tn[vt]=Hl[vt](O),Ma=new C({props:{code:`out = data_collator([tokenized_dataset["train"][i] for i in range(5)])
for key in out:
    print(f"{key} shape: {out[key].shape}")`,highlighted:`out = data_collator([tokenized_dataset[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>)])
<span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> out:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{key}</span> shape: <span class="hljs-subst">{out[key].shape}</span>&quot;</span>)`}});const Rl=[gi,_i],sn=[];function Bl(e,p){return e[0]==="pt"?0:1}xt=Bl(O),qt=sn[xt]=Rl[xt](O);let J=O[0]==="tf"&&Qr();aa=new fa({props:{warning:!0,$$slots:{default:[wi]},$$scope:{ctx:O}}}),Ha=new C({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Sa=new C({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}});const Ul=[ki,bi],an=[];function Yl(e,p){return e[0]==="pt"?0:1}Et=Yl(O),zt=an[Et]=Ul[Et](O),na=new fa({props:{$$slots:{default:[yi]},$$scope:{ctx:O}}}),oa=new fa({props:{$$slots:{default:[ji]},$$scope:{ctx:O}}}),Ra=new Yn({});const Xl=[qi,xi],nn=[];function Kl(e,p){return e[0]==="pt"?0:1}Tt=Kl(O),Pt=nn[Tt]=Xl[Tt](O),Ba=new C({props:{code:`txt = """\\
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
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ua=new C({props:{code:`# create some data
x = np.random.randn(100)
y = np.random.randn(100)

# create scatter plot with x, y
plt.scatter(x, y)

# create scatter`,highlighted:`<span class="hljs-comment"># create some data</span>
x = np.random.randn(<span class="hljs-number">100</span>)
y = np.random.randn(<span class="hljs-number">100</span>)

<span class="hljs-comment"># create scatter plot with x, y</span>
plt.scatter(x, y)

<span class="hljs-comment"># create scatter</span>`}}),Ya=new C({props:{code:`txt = """\\
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
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Xa=new C({props:{code:`# create some data
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
<span class="hljs-keyword">for</span>`}}),Ka=new C({props:{code:`txt = """\\
# dataframe with profession, income and name
df = pd.DataFrame({'profession': x, 'income':y, 'name': z})

# calculate the mean income per profession
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"])`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;\\
# dataframe with profession, income and name
df = pd.DataFrame({&#x27;profession&#x27;: x, &#x27;income&#x27;:y, &#x27;name&#x27;: z})

# calculate the mean income per profession
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Va=new C({props:{code:`# dataframe with profession, income and name
df = pd.DataFrame({'profession': x, 'income':y, 'name': z})

# calculate the mean income per profession
profession = df.groupby(['profession']).mean()

# compute the`,highlighted:`<span class="hljs-comment"># dataframe with profession, income and name</span>
df = pd.DataFrame({<span class="hljs-string">&#x27;profession&#x27;</span>: x, <span class="hljs-string">&#x27;income&#x27;</span>:y, <span class="hljs-string">&#x27;name&#x27;</span>: z})

<span class="hljs-comment"># calculate the mean income per profession</span>
profession = df.groupby([<span class="hljs-string">&#x27;profession&#x27;</span>]).mean()

<span class="hljs-comment"># compute the</span>`}}),Za=new C({props:{code:`txt = """
# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
"""
print(pipe(txt, num_return_sequences=1)[0]["generated_text"])`,highlighted:`txt = <span class="hljs-string">&quot;&quot;&quot;
# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
&quot;&quot;&quot;</span>
<span class="hljs-built_in">print</span>(pipe(txt, num_return_sequences=<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>])`}}),Ja=new C({props:{code:`# import random forest regressor from scikit-learn
from sklearn.ensemble import RandomForestRegressor

# fit random forest model with 300 estimators on X, y:
rf = RandomForestRegressor(n_estimators=300, random_state=random_state, max_depth=3)
rf.fit(X, y)
rf`,highlighted:`<span class="hljs-comment"># import random forest regressor from scikit-learn</span>
<span class="hljs-keyword">from</span> sklearn.ensemble <span class="hljs-keyword">import</span> RandomForestRegressor

<span class="hljs-comment"># fit random forest model with 300 estimators on X, y:</span>
rf = RandomForestRegressor(n_estimators=<span class="hljs-number">300</span>, random_state=random_state, max_depth=<span class="hljs-number">3</span>)
rf.fit(X, y)
rf`}});function Vl(e,p){return e[0]==="tf"?zi:Ei}let Mo=Vl(O),xs=Mo(O),Q=O[0]==="pt"&&ei(O);return{c(){n=c("meta"),f=d(),j(i.$$.fragment),_=d(),$=c("h1"),k=c("a"),v=c("span"),j(T.$$.fragment),z=d(),A=c("span"),L=o("Training a causal language model from scratch"),W=d(),P.c(),I=d(),M=c("p"),G=o("Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=c("a"),X=o("Chapter 1"),N=o(", this is commonly referred to as "),H=c("em"),S=o("transfer learning"),V=o(", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),Z=d(),B=c("p"),ee=o("In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),ae=c("code"),F=o("matplotlib"),Y=o(", "),Ne=c("code"),Le=o("seaborn"),Dt=o(", "),be=c("code"),We=o("pandas"),Ct=o(", and "),rs=c("code"),is=o("scikit-learn"),_a=o(" libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),qs=d(),j(xe.$$.fragment),Es=d(),ke=c("p"),zs=o("In "),ye=c("a"),Ts=o("Chapter 6"),Qe=o(" we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),At=c("code"),Ot=o("Trainer"),ga=o(" API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),ps=d(),K=c("iframe"),et=d(),ne=c("iframe"),pe=d(),$e=c("p"),ka=o("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),tt=c("a"),cs=o("here"),ya=o(". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),Ps=d(),ce=c("h2"),Ie=c("a"),Ft=c("span"),j(te.$$.fragment),$a=d(),st=c("span"),va=o("Gathering the data"),Ds=d(),se=c("p"),ja=o("Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),at=c("a"),Cs=o("Transformers textbook"),nt=o(" to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),Nt=c("code"),Lt=o("codeparrot"),xa=o(", the authors built a dataset that they then shared on the "),Ge=c("a"),ot=o("Hugging Face Hub"),As=o("."),lt=d(),Me=c("p"),Os=o("However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),qe=c("code"),Fs=o("codeparrot"),ve=o(" dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Ns=d(),j(Ee.$$.fragment),Ls=d(),Wt=c("p"),It=o("Let\u2019s test it on two examples:"),Ws=d(),j(rt.$$.fragment),hs=d(),j(he.$$.fragment),us=d(),ze=c("p"),qa=o("We can use this to create a function that will stream the dataset and filter the elements we want:"),ds=d(),j(ue.$$.fragment),ms=d(),Te=c("p"),Ea=o("Then we can simply apply this function to the streaming dataset:"),fs=d(),j(de.$$.fragment),_s=d(),j(me.$$.fragment),gs=d(),oe=c("p"),za=o("This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),Gt=d(),Mt=c("p"),Ta=o("Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),Ht=d(),j(it.$$.fragment),Is=d(),j(He.$$.fragment),Se=d(),j(Pe.$$.fragment),le=d(),St=c("p"),ws=o("Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),Gs=d(),j(pt.$$.fragment),Rt=d(),j(ct.$$.fragment),Ms=d(),je=c("p"),Pa=o("We can see that the "),bs=c("code"),Hs=o("content"),ht=o(" field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),ks=d(),re=c("h2"),De=c("a"),Re=c("span"),j(ut.$$.fragment),Ss=d(),Ce=c("span"),Rs=o("Preparing the dataset"),fe=d(),j(dt.$$.fragment),Bt=d(),Ut=c("p"),Da=o("The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),Yt=d(),ie=c("p"),Ca=o("Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),Xt=c("code"),Kt=o("return_overflowing_tokens"),Aa=o(" option to tokenize the whole input and split it into several chunks, as we did in "),mt=c("a"),ft=o("Chapter 6"),Bs=o(". We\u2019ll also use the "),Ae=c("code"),Us=o("return_length"),Be=o(" option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),Ys=d(),_e=c("div"),_t=c("img"),Xs=d(),ge=c("img"),gt=d(),Vt=c("p"),Ks=o("Let\u2019s see exactly how this works by looking at the first two examples:"),Ue=d(),j(Ye.$$.fragment),Xe=d(),j(Ke.$$.fragment),a=d(),y=c("p"),rn=o("We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),Vs=c("code"),pn=o("overflow_to_sample_mapping"),Zs=o(" field, we can also reconstruct which chunks belonged to which input samples."),Fa=d(),U=c("p"),cn=o("With this operation we\u2019re using a handy feature of the "),Js=c("code"),hn=o("Dataset.map()"),un=o(" function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),ys=c("a"),dn=o("section 3"),mn=o(", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),Qs=c("code"),fn=o("Dataset.map()"),_n=o(" call:"),wt=d(),j(Zt.$$.fragment),Na=d(),j(Jt.$$.fragment),bt=d(),$s=c("p"),gn=o("We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),La=d(),vs=c("p"),Qt=o("Now that we have the dataset ready, let\u2019s set up the model!"),Wa=d(),j(kt.$$.fragment),Ia=d(),Ve=c("h2"),we=c("a"),ea=c("span"),j(es.$$.fragment),Ze=d(),ta=c("span"),wn=o("Initializing a new model"),Ga=d(),Oe=c("p"),ts=o("Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),sa=c("code"),bn=o("bos"),kn=o(" and "),ss=c("code"),yn=o("eos"),$n=o(" (beginning and end of sequence) token IDs:"),ho=d(),$t.c(),vn=d(),as=c("p"),tl=o("Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Xn=c("code"),sl=o("DataCollatorForLanguageModeling"),al=o(" collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Kn=c("code"),nl=o("input_ids"),ol=o("."),uo=d(),ns=c("p"),ll=o("Note that "),Vn=c("code"),rl=o("DataCollatorForLanguageModeling"),il=o(" supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Zn=c("code"),pl=o("mlm=False"),cl=o(":"),mo=d(),jt.c(),jn=d(),xn=c("p"),hl=o("Let\u2019s have a look at an example:"),fo=d(),j(Ma.$$.fragment),_o=d(),qt.c(),qn=d(),En=c("p"),ul=o("We can see that the examples have been stacked and all the tensors have the same shape."),go=d(),J&&J.c(),zn=d(),j(aa.$$.fragment),wo=d(),Tn=c("p"),dl=o("Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),bo=d(),j(Ha.$$.fragment),ko=d(),Pn=c("p"),ml=o("This will display a widget where you can enter your Hugging Face login credentials."),yo=d(),Dn=c("p"),fl=o("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),$o=d(),j(Sa.$$.fragment),vo=d(),zt.c(),Cn=d(),j(na.$$.fragment),jo=d(),j(oa.$$.fragment),xo=d(),js=c("h2"),la=c("a"),Jn=c("span"),j(Ra.$$.fragment),_l=d(),Qn=c("span"),gl=o("Code generation with a pipeline"),qo=d(),ra=c("p"),wl=o("Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),eo=c("code"),bl=o("pipeline"),kl=o(", and we\u2019ll put it on the GPU for fast generations if there is one available:"),Eo=d(),Pt.c(),An=d(),On=c("p"),yl=o("Let\u2019s start with the simple task of creating a scatter plot:"),zo=d(),j(Ba.$$.fragment),To=d(),j(Ua.$$.fragment),Po=d(),os=c("p"),$l=o("The result looks correct. Does it also work for a "),to=c("code"),vl=o("pandas"),jl=o(" operation? Let\u2019s see if we can create a "),so=c("code"),xl=o("DataFrame"),ql=o(" from two arrays:"),Do=d(),j(Ya.$$.fragment),Co=d(),j(Xa.$$.fragment),Ao=d(),Je=c("p"),El=o("Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),ao=c("code"),zl=o("x"),Tl=o(" again. Since the number of generated tokens is limited, the following "),no=c("code"),Pl=o("for"),Dl=o(" loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),oo=c("code"),Cl=o("groupby"),Al=o(" operation:"),Oo=d(),j(Ka.$$.fragment),Fo=d(),j(Va.$$.fragment),No=d(),ia=c("p"),Ol=o("Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),lo=c("code"),Fl=o("scikit-learn"),Nl=o(" and set up a Random Forest model:"),Lo=d(),j(Za.$$.fragment),Wo=d(),j(Ja.$$.fragment),Io=d(),xs.c(),Fn=d(),Q&&Q.c(),Nn=el(),this.h()},l(e){const p=oi('[data-svelte="svelte-1phssyn"]',document.head);n=h(p,"META",{name:!0,content:!0}),p.forEach(t),f=m(e),x(i.$$.fragment,e),_=m(e),$=h(e,"H1",{class:!0});var on=u($);k=h(on,"A",{id:!0,class:!0,href:!0});var Ln=u(k);v=h(Ln,"SPAN",{});var ro=u(v);x(T.$$.fragment,ro),ro.forEach(t),Ln.forEach(t),z=m(on),A=h(on,"SPAN",{});var io=u(A);L=l(io,"Training a causal language model from scratch"),io.forEach(t),on.forEach(t),W=m(e),P.l(e),I=m(e),M=h(e,"P",{});var ls=u(M);G=l(ls,"Up until now, we\u2019ve mostly been using pretrained models and fine-tuning them for new use cases by reusing the weights from pretraining. As we saw in "),R=h(ls,"A",{href:!0});var Wn=u(R);X=l(Wn,"Chapter 1"),Wn.forEach(t),N=l(ls,", this is commonly referred to as "),H=h(ls,"EM",{});var In=u(H);S=l(In,"transfer learning"),In.forEach(t),V=l(ls,", and it\u2019s a very successful strategy for applying Transformer models to most real-world use cases where labeled data is sparse. In this chapter, we\u2019ll take a different approach and train a completely new model from scratch. This is a good approach to take if you have a lot of data and it is very different from the pretraining data used for the available models. However, it also requires considerably more compute resources to pretrain a language model than just to fine-tune an existing one. Examples where it can make sense to train a new model include for datasets consisting of musical notes, molecular sequences such as DNA, or programming languages. The latter have recently gained traction thanks to tools such as TabNine and GitHub\u2019s Copilot, powered by OpenAI\u2019s Codex model, that can generate long sequences of code. This task of text generation is best addressed with auto-regressive or causal language models such as GPT-2."),ls.forEach(t),Z=m(e),B=h(e,"P",{});var Fe=u(B);ee=l(Fe,"In this section we will build a scaled-down version of a code generation model: we\u2019ll focus on one-line completions instead of full functions or classes, using a subset of Python code. When working with data in Python you are in frequent contact with the Python data science stack, consisting of the "),ae=h(Fe,"CODE",{});var Gn=u(ae);F=l(Gn,"matplotlib"),Gn.forEach(t),Y=l(Fe,", "),Ne=h(Fe,"CODE",{});var po=u(Ne);Le=l(po,"seaborn"),po.forEach(t),Dt=l(Fe,", "),be=h(Fe,"CODE",{});var co=u(be);We=l(co,"pandas"),co.forEach(t),Ct=l(Fe,", and "),rs=h(Fe,"CODE",{});var Mn=u(rs);is=l(Mn,"scikit-learn"),Mn.forEach(t),_a=l(Fe," libraries. When using those frameworks it\u2019s common to need to look up specific commands, so it would be nice if we could use a model to complete these calls for us."),Fe.forEach(t),qs=m(e),x(xe.$$.fragment,e),Es=m(e),ke=h(e,"P",{});var Hn=u(ke);zs=l(Hn,"In "),ye=h(Hn,"A",{href:!0});var Zl=u(ye);Ts=l(Zl,"Chapter 6"),Zl.forEach(t),Qe=l(Hn," we created an efficient tokenizer to process Python source code, but what we still need is a large-scale dataset to pretrain a model on. Here, we\u2019ll apply our tokenizer to a corpus of Python code derived from GitHub repositories. We will then use the "),At=h(Hn,"CODE",{});var Jl=u(At);Ot=l(Jl,"Trainer"),Jl.forEach(t),ga=l(Hn," API and \u{1F917} Accelerate to train the model. Let\u2019s get to it!"),Hn.forEach(t),ps=m(e),K=h(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),u(K).forEach(t),et=m(e),ne=h(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),u(ne).forEach(t),pe=m(e),$e=h(e,"P",{});var Ho=u($e);ka=l(Ho,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it "),tt=h(Ho,"A",{href:!0,rel:!0});var Ql=u(tt);cs=l(Ql,"here"),Ql.forEach(t),ya=l(Ho,". Note that since there is some randomization happening in the text generation, you will probably get a slightly different result."),Ho.forEach(t),Ps=m(e),ce=h(e,"H2",{class:!0});var So=u(ce);Ie=h(So,"A",{id:!0,class:!0,href:!0});var er=u(Ie);Ft=h(er,"SPAN",{});var tr=u(Ft);x(te.$$.fragment,tr),tr.forEach(t),er.forEach(t),$a=m(So),st=h(So,"SPAN",{});var sr=u(st);va=l(sr,"Gathering the data"),sr.forEach(t),So.forEach(t),Ds=m(e),se=h(e,"P",{});var pa=u(se);ja=l(pa,"Python code is abundantly available from code repositories such as GitHub, which we can use to create a dataset by scraping for every Python repository. This was the approach taken in the "),at=h(pa,"A",{href:!0,rel:!0});var ar=u(at);Cs=l(ar,"Transformers textbook"),ar.forEach(t),nt=l(pa," to pretrain a large GPT-2 model. Using a GitHub dump of about 180 GB containing roughly 20 million Python files called "),Nt=h(pa,"CODE",{});var nr=u(Nt);Lt=l(nr,"codeparrot"),nr.forEach(t),xa=l(pa,", the authors built a dataset that they then shared on the "),Ge=h(pa,"A",{href:!0,rel:!0});var or=u(Ge);ot=l(or,"Hugging Face Hub"),or.forEach(t),As=l(pa,"."),pa.forEach(t),lt=m(e),Me=h(e,"P",{});var Ro=u(Me);Os=l(Ro,"However, training on the full corpus is time- and compute-consuming, and we only need the subset of the dataset concerned with the Python data science stack. So, let\u2019s start by filtering the "),qe=h(Ro,"CODE",{});var lr=u(qe);Fs=l(lr,"codeparrot"),lr.forEach(t),ve=l(Ro," dataset for all files that include any of the libraries in this stack. Because of the dataset\u2019s size, we want to avoid downloading it; instead, we\u2019ll use the streaming feature to filter it on the fly. To help us filter the code samples using the libraries we mentioned earlier, we\u2019ll use the following function:"),Ro.forEach(t),Ns=m(e),x(Ee.$$.fragment,e),Ls=m(e),Wt=h(e,"P",{});var rr=u(Wt);It=l(rr,"Let\u2019s test it on two examples:"),rr.forEach(t),Ws=m(e),x(rt.$$.fragment,e),hs=m(e),x(he.$$.fragment,e),us=m(e),ze=h(e,"P",{});var ir=u(ze);qa=l(ir,"We can use this to create a function that will stream the dataset and filter the elements we want:"),ir.forEach(t),ds=m(e),x(ue.$$.fragment,e),ms=m(e),Te=h(e,"P",{});var pr=u(Te);Ea=l(pr,"Then we can simply apply this function to the streaming dataset:"),pr.forEach(t),fs=m(e),x(de.$$.fragment,e),_s=m(e),x(me.$$.fragment,e),gs=m(e),oe=h(e,"P",{});var cr=u(oe);za=l(cr,"This leaves us with about 3% of the original dataset, which is still quite sizable \u2014 the resulting dataset is 6 GB and consists of 600,000 Python scripts!"),cr.forEach(t),Gt=m(e),Mt=h(e,"P",{});var hr=u(Mt);Ta=l(hr,"Filtering the full dataset can take 2-3h depending on your machine and bandwidth. If you don\u2019t want to go through this lengthy process yourself, we provide the filtered dataset on the Hub for you to download:"),hr.forEach(t),Ht=m(e),x(it.$$.fragment,e),Is=m(e),x(He.$$.fragment,e),Se=m(e),x(Pe.$$.fragment,e),le=m(e),St=h(e,"P",{});var ur=u(St);ws=l(ur,"Let\u2019s look at an example from the dataset. We\u2019ll just show the first 200 characters of each field:"),ur.forEach(t),Gs=m(e),x(pt.$$.fragment,e),Rt=m(e),x(ct.$$.fragment,e),Ms=m(e),je=h(e,"P",{});var Bo=u(je);Pa=l(Bo,"We can see that the "),bs=h(Bo,"CODE",{});var dr=u(bs);Hs=l(dr,"content"),dr.forEach(t),ht=l(Bo," field contains the code that we want our model to train on. Now that we have a dataset, we need to prepare the texts so they\u2019re in a format suitable for pretraining."),Bo.forEach(t),ks=m(e),re=h(e,"H2",{class:!0});var Uo=u(re);De=h(Uo,"A",{id:!0,class:!0,href:!0});var mr=u(De);Re=h(mr,"SPAN",{});var fr=u(Re);x(ut.$$.fragment,fr),fr.forEach(t),mr.forEach(t),Ss=m(Uo),Ce=h(Uo,"SPAN",{});var _r=u(Ce);Rs=l(_r,"Preparing the dataset"),_r.forEach(t),Uo.forEach(t),fe=m(e),x(dt.$$.fragment,e),Bt=m(e),Ut=h(e,"P",{});var gr=u(Ut);Da=l(gr,"The first step will be to tokenize the data, so we can use it for training. Since our goal is to mainly autocomplete short function calls, we can keep the context size relatively small. This has the benefit that we can train the model much faster and it requires significantly less memory. If it is important for your application to have more context (for example, if you want the model to write unit tests based on a file with the function definition), make sure you increase that number, but also keep in mind that this comes with a greater GPU memory footprint. For now, let\u2019s fix the context size at 128 tokens, as opposed to the 1,024 or 2,048 used in GPT-2 or GPT-3, respectively."),gr.forEach(t),Yt=m(e),ie=h(e,"P",{});var ca=u(ie);Ca=l(ca,"Most documents contain many more than 128 tokens, so simply truncating the inputs to the maximum length would eliminate a large fraction of our dataset. Instead, we\u2019ll use the "),Xt=h(ca,"CODE",{});var wr=u(Xt);Kt=l(wr,"return_overflowing_tokens"),wr.forEach(t),Aa=l(ca," option to tokenize the whole input and split it into several chunks, as we did in "),mt=h(ca,"A",{href:!0});var br=u(mt);ft=l(br,"Chapter 6"),br.forEach(t),Bs=l(ca,". We\u2019ll also use the "),Ae=h(ca,"CODE",{});var kr=u(Ae);Us=l(kr,"return_length"),kr.forEach(t),Be=l(ca," option to return the length of each created chunk automatically. Often the last chunk will be smaller than the context size, and we\u2019ll get rid of these pieces to avoid padding issues; we don\u2019t really need them as we have plenty of data anyway."),ca.forEach(t),Ys=m(e),_e=h(e,"DIV",{class:!0});var Yo=u(_e);_t=h(Yo,"IMG",{class:!0,src:!0,alt:!0}),Xs=m(Yo),ge=h(Yo,"IMG",{class:!0,src:!0,alt:!0}),Yo.forEach(t),gt=m(e),Vt=h(e,"P",{});var yr=u(Vt);Ks=l(yr,"Let\u2019s see exactly how this works by looking at the first two examples:"),yr.forEach(t),Ue=m(e),x(Ye.$$.fragment,e),Xe=m(e),x(Ke.$$.fragment,e),a=m(e),y=h(e,"P",{});var Xo=u(y);rn=l(Xo,"We can see that we get 34 segments in total from those two examples. Looking at the chunk lengths, we can see that the chunks at the ends of both documents have less than 128 tokens (117 and 41, respectively). These represent just a small fraction of the total chunks that we have, so we can safely throw them away. With the "),Vs=h(Xo,"CODE",{});var $r=u(Vs);pn=l($r,"overflow_to_sample_mapping"),$r.forEach(t),Zs=l(Xo," field, we can also reconstruct which chunks belonged to which input samples."),Xo.forEach(t),Fa=m(e),U=h(e,"P",{});var ha=u(U);cn=l(ha,"With this operation we\u2019re using a handy feature of the "),Js=h(ha,"CODE",{});var vr=u(Js);hn=l(vr,"Dataset.map()"),vr.forEach(t),un=l(ha," function in \u{1F917} Datasets, which is that it does not require one-to-one maps; as we saw in "),ys=h(ha,"A",{href:!0});var jr=u(ys);dn=l(jr,"section 3"),jr.forEach(t),mn=l(ha,", we can create batches with more or fewer elements than the input batch. This is useful when doing operations like data augmentation or data filtering that change the number of elements. In our case, when tokenizing each element into chunks of the specified context size, we create many samples from each document. We just need to make sure to delete the existing columns, since they have a conflicting size. If we wanted to keep them, we could repeat them appropriately and return them within the "),Qs=h(ha,"CODE",{});var xr=u(Qs);fn=l(xr,"Dataset.map()"),xr.forEach(t),_n=l(ha," call:"),ha.forEach(t),wt=m(e),x(Zt.$$.fragment,e),Na=m(e),x(Jt.$$.fragment,e),bt=m(e),$s=h(e,"P",{});var qr=u($s);gn=l(qr,"We now have 16.7 million examples with 128 tokens each, which corresponds to about 2.1 billion tokens in total. For reference, OpenAI\u2019s GPT-3 and Codex models are trained on 300 and 100 billion tokens, respectively, where the Codex models are initialized from the GPT-3 checkpoints. Our goal in this section is not to compete with these models, which can generate long, coherent texts, but to create a scaled-down version providing a quick autocomplete function for data scientists."),qr.forEach(t),La=m(e),vs=h(e,"P",{});var Er=u(vs);Qt=l(Er,"Now that we have the dataset ready, let\u2019s set up the model!"),Er.forEach(t),Wa=m(e),x(kt.$$.fragment,e),Ia=m(e),Ve=h(e,"H2",{class:!0});var Ko=u(Ve);we=h(Ko,"A",{id:!0,class:!0,href:!0});var zr=u(we);ea=h(zr,"SPAN",{});var Tr=u(ea);x(es.$$.fragment,Tr),Tr.forEach(t),zr.forEach(t),Ze=m(Ko),ta=h(Ko,"SPAN",{});var Pr=u(ta);wn=l(Pr,"Initializing a new model"),Pr.forEach(t),Ko.forEach(t),Ga=m(e),Oe=h(e,"P",{});var Sn=u(Oe);ts=l(Sn,"Our first step is to freshly initialize a GPT-2 model. We\u2019ll use the same configuration for our model as for the small GPT-2 model, so we load the pretrained configuration, make sure that the tokenizer size matches the model vocabulary size and pass the "),sa=h(Sn,"CODE",{});var Dr=u(sa);bn=l(Dr,"bos"),Dr.forEach(t),kn=l(Sn," and "),ss=h(Sn,"CODE",{});var Cr=u(ss);yn=l(Cr,"eos"),Cr.forEach(t),$n=l(Sn," (beginning and end of sequence) token IDs:"),Sn.forEach(t),ho=m(e),$t.l(e),vn=m(e),as=h(e,"P",{});var Rn=u(as);tl=l(Rn,"Our model has 124M parameters that we\u2019ll have to tune. Before we can start training, we need to set up a data collator that will take care of creating the batches. We can use the "),Xn=h(Rn,"CODE",{});var Ar=u(Xn);sl=l(Ar,"DataCollatorForLanguageModeling"),Ar.forEach(t),al=l(Rn," collator, which is designed specifically for language modeling (as the name subtly suggests). Besides stacking and padding batches, it also takes care of creating the language model labels \u2014 in causal language modeling the inputs serve as labels too (just shifted by one element), and this data collator creates them on the fly during training so we don\u2019t need to duplicate the "),Kn=h(Rn,"CODE",{});var Or=u(Kn);nl=l(Or,"input_ids"),Or.forEach(t),ol=l(Rn,"."),Rn.forEach(t),uo=m(e),ns=h(e,"P",{});var Bn=u(ns);ll=l(Bn,"Note that "),Vn=h(Bn,"CODE",{});var Fr=u(Vn);rl=l(Fr,"DataCollatorForLanguageModeling"),Fr.forEach(t),il=l(Bn," supports both masked language modeling (MLM) and causal language modeling (CLM). By default it prepares data for MLM, but we can switch to CLM by setting the argument "),Zn=h(Bn,"CODE",{});var Nr=u(Zn);pl=l(Nr,"mlm=False"),Nr.forEach(t),cl=l(Bn,":"),Bn.forEach(t),mo=m(e),jt.l(e),jn=m(e),xn=h(e,"P",{});var Lr=u(xn);hl=l(Lr,"Let\u2019s have a look at an example:"),Lr.forEach(t),fo=m(e),x(Ma.$$.fragment,e),_o=m(e),qt.l(e),qn=m(e),En=h(e,"P",{});var Wr=u(En);ul=l(Wr,"We can see that the examples have been stacked and all the tensors have the same shape."),Wr.forEach(t),go=m(e),J&&J.l(e),zn=m(e),x(aa.$$.fragment,e),wo=m(e),Tn=h(e,"P",{});var Ir=u(Tn);dl=l(Ir,"Now we have everything in place to actually train our model \u2014 that wasn\u2019t so much work after all! Before we start training we should log in to Hugging Face. If you\u2019re working in a notebook, you can do so with the following utility function:"),Ir.forEach(t),bo=m(e),x(Ha.$$.fragment,e),ko=m(e),Pn=h(e,"P",{});var Gr=u(Pn);ml=l(Gr,"This will display a widget where you can enter your Hugging Face login credentials."),Gr.forEach(t),yo=m(e),Dn=h(e,"P",{});var Mr=u(Dn);fl=l(Mr,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Mr.forEach(t),$o=m(e),x(Sa.$$.fragment,e),vo=m(e),zt.l(e),Cn=m(e),x(na.$$.fragment,e),jo=m(e),x(oa.$$.fragment,e),xo=m(e),js=h(e,"H2",{class:!0});var Vo=u(js);la=h(Vo,"A",{id:!0,class:!0,href:!0});var Hr=u(la);Jn=h(Hr,"SPAN",{});var Sr=u(Jn);x(Ra.$$.fragment,Sr),Sr.forEach(t),Hr.forEach(t),_l=m(Vo),Qn=h(Vo,"SPAN",{});var Rr=u(Qn);gl=l(Rr,"Code generation with a pipeline"),Rr.forEach(t),Vo.forEach(t),qo=m(e),ra=h(e,"P",{});var Zo=u(ra);wl=l(Zo,"Now is the moment of truth: let\u2019s see how well the trained model actually works! We can see in the logs that the loss went down steadily, but to put the model to the test let\u2019s take a look at how well it works on some prompts. To do that we\u2019ll wrap the model in a text generation "),eo=h(Zo,"CODE",{});var Br=u(eo);bl=l(Br,"pipeline"),Br.forEach(t),kl=l(Zo,", and we\u2019ll put it on the GPU for fast generations if there is one available:"),Zo.forEach(t),Eo=m(e),Pt.l(e),An=m(e),On=h(e,"P",{});var Ur=u(On);yl=l(Ur,"Let\u2019s start with the simple task of creating a scatter plot:"),Ur.forEach(t),zo=m(e),x(Ba.$$.fragment,e),To=m(e),x(Ua.$$.fragment,e),Po=m(e),os=h(e,"P",{});var Un=u(os);$l=l(Un,"The result looks correct. Does it also work for a "),to=h(Un,"CODE",{});var Yr=u(to);vl=l(Yr,"pandas"),Yr.forEach(t),jl=l(Un," operation? Let\u2019s see if we can create a "),so=h(Un,"CODE",{});var Xr=u(so);xl=l(Xr,"DataFrame"),Xr.forEach(t),ql=l(Un," from two arrays:"),Un.forEach(t),Do=m(e),x(Ya.$$.fragment,e),Co=m(e),x(Xa.$$.fragment,e),Ao=m(e),Je=h(e,"P",{});var ua=u(Je);El=l(ua,"Nice, that\u2019s the correct answer \u2014 although it then inserts the column "),ao=h(ua,"CODE",{});var Kr=u(ao);zl=l(Kr,"x"),Kr.forEach(t),Tl=l(ua," again. Since the number of generated tokens is limited, the following "),no=h(ua,"CODE",{});var Vr=u(no);Pl=l(Vr,"for"),Vr.forEach(t),Dl=l(ua," loop is cut off. Let\u2019s see if we can do something a bit more complex and have the model help us use the "),oo=h(ua,"CODE",{});var Zr=u(oo);Cl=l(Zr,"groupby"),Zr.forEach(t),Al=l(ua," operation:"),ua.forEach(t),Oo=m(e),x(Ka.$$.fragment,e),Fo=m(e),x(Va.$$.fragment,e),No=m(e),ia=h(e,"P",{});var Jo=u(ia);Ol=l(Jo,"Not bad; that\u2019s the right way to do it. Finally, let\u2019s see if we can also use it for "),lo=h(Jo,"CODE",{});var Jr=u(lo);Fl=l(Jr,"scikit-learn"),Jr.forEach(t),Nl=l(Jo," and set up a Random Forest model:"),Jo.forEach(t),Lo=m(e),x(Za.$$.fragment,e),Wo=m(e),x(Ja.$$.fragment,e),Io=m(e),xs.l(e),Fn=m(e),Q&&Q.l(e),Nn=el(),this.h()},h(){D(n,"name","hf:doc:metadata"),D(n,"content",JSON.stringify(Ai)),D(k,"id","training-a-causal-language-model-from-scratch"),D(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(k,"href","#training-a-causal-language-model-from-scratch"),D($,"class","relative group"),D(R,"href","/course/chapter1"),D(ye,"href","/course/chapter6"),Qo(K.src,wa="https://hf.space/gradioiframe/course-demos/codeparrot-ds/+")||D(K,"src",wa),D(K,"frameborder","0"),D(K,"height","300"),D(K,"title","Gradio app"),D(K,"class","block dark:hidden container p-0 flex-grow space-iframe"),D(K,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),D(K,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),Qo(ne.src,ba="https://hf.space/gradioiframe/course-demos/codeparrot-ds-darkmode/+")||D(ne,"src",ba),D(ne,"frameborder","0"),D(ne,"height","300"),D(ne,"title","Gradio app"),D(ne,"class","hidden dark:block container p-0 flex-grow space-iframe"),D(ne,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),D(ne,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),D(tt,"href","https://huggingface.co/huggingface-course/codeparrot-ds?text=plt.imshow%28"),D(tt,"rel","nofollow"),D(Ie,"id","gathering-the-data"),D(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(Ie,"href","#gathering-the-data"),D(ce,"class","relative group"),D(at,"href","https://learning.oreilly.com/library/view/natural-language-processing/9781098103231/"),D(at,"rel","nofollow"),D(Ge,"href","https://huggingface.co/datasets/transformersbook/codeparrot"),D(Ge,"rel","nofollow"),D(De,"id","preparing-the-dataset"),D(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(De,"href","#preparing-the-dataset"),D(re,"class","relative group"),D(mt,"href","/course/chapter6/4"),D(_t,"class","block dark:hidden"),Qo(_t.src,ln="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts.svg")||D(_t,"src",ln),D(_t,"alt","Chunking a large texts in several pieces."),D(ge,"class","hidden dark:block"),Qo(ge.src,Oa="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/chunking_texts-dark.svg")||D(ge,"src",Oa),D(ge,"alt","Chunking a large texts in several pieces."),D(_e,"class","flex justify-center"),D(ys,"href","/course/chapter7/3"),D(we,"id","initializing-a-new-model"),D(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(we,"href","#initializing-a-new-model"),D(Ve,"class","relative group"),D(la,"id","code-generation-with-a-pipeline"),D(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(la,"href","#code-generation-with-a-pipeline"),D(js,"class","relative group")},m(e,p){s(document.head,n),r(e,f,p),q(i,e,p),r(e,_,p),r(e,$,p),s($,k),s(k,v),q(T,v,null),s($,z),s($,A),s(A,L),r(e,W,p),Qa[g].m(e,p),r(e,I,p),r(e,M,p),s(M,G),s(M,R),s(R,X),s(M,N),s(M,H),s(H,S),s(M,V),r(e,Z,p),r(e,B,p),s(B,ee),s(B,ae),s(ae,F),s(B,Y),s(B,Ne),s(Ne,Le),s(B,Dt),s(B,be),s(be,We),s(B,Ct),s(B,rs),s(rs,is),s(B,_a),r(e,qs,p),q(xe,e,p),r(e,Es,p),r(e,ke,p),s(ke,zs),s(ke,ye),s(ye,Ts),s(ke,Qe),s(ke,At),s(At,Ot),s(ke,ga),r(e,ps,p),r(e,K,p),r(e,et,p),r(e,ne,p),r(e,pe,p),r(e,$e,p),s($e,ka),s($e,tt),s(tt,cs),s($e,ya),r(e,Ps,p),r(e,ce,p),s(ce,Ie),s(Ie,Ft),q(te,Ft,null),s(ce,$a),s(ce,st),s(st,va),r(e,Ds,p),r(e,se,p),s(se,ja),s(se,at),s(at,Cs),s(se,nt),s(se,Nt),s(Nt,Lt),s(se,xa),s(se,Ge),s(Ge,ot),s(se,As),r(e,lt,p),r(e,Me,p),s(Me,Os),s(Me,qe),s(qe,Fs),s(Me,ve),r(e,Ns,p),q(Ee,e,p),r(e,Ls,p),r(e,Wt,p),s(Wt,It),r(e,Ws,p),q(rt,e,p),r(e,hs,p),q(he,e,p),r(e,us,p),r(e,ze,p),s(ze,qa),r(e,ds,p),q(ue,e,p),r(e,ms,p),r(e,Te,p),s(Te,Ea),r(e,fs,p),q(de,e,p),r(e,_s,p),q(me,e,p),r(e,gs,p),r(e,oe,p),s(oe,za),r(e,Gt,p),r(e,Mt,p),s(Mt,Ta),r(e,Ht,p),q(it,e,p),r(e,Is,p),q(He,e,p),r(e,Se,p),q(Pe,e,p),r(e,le,p),r(e,St,p),s(St,ws),r(e,Gs,p),q(pt,e,p),r(e,Rt,p),q(ct,e,p),r(e,Ms,p),r(e,je,p),s(je,Pa),s(je,bs),s(bs,Hs),s(je,ht),r(e,ks,p),r(e,re,p),s(re,De),s(De,Re),q(ut,Re,null),s(re,Ss),s(re,Ce),s(Ce,Rs),r(e,fe,p),q(dt,e,p),r(e,Bt,p),r(e,Ut,p),s(Ut,Da),r(e,Yt,p),r(e,ie,p),s(ie,Ca),s(ie,Xt),s(Xt,Kt),s(ie,Aa),s(ie,mt),s(mt,ft),s(ie,Bs),s(ie,Ae),s(Ae,Us),s(ie,Be),r(e,Ys,p),r(e,_e,p),s(_e,_t),s(_e,Xs),s(_e,ge),r(e,gt,p),r(e,Vt,p),s(Vt,Ks),r(e,Ue,p),q(Ye,e,p),r(e,Xe,p),q(Ke,e,p),r(e,a,p),r(e,y,p),s(y,rn),s(y,Vs),s(Vs,pn),s(y,Zs),r(e,Fa,p),r(e,U,p),s(U,cn),s(U,Js),s(Js,hn),s(U,un),s(U,ys),s(ys,dn),s(U,mn),s(U,Qs),s(Qs,fn),s(U,_n),r(e,wt,p),q(Zt,e,p),r(e,Na,p),q(Jt,e,p),r(e,bt,p),r(e,$s,p),s($s,gn),r(e,La,p),r(e,vs,p),s(vs,Qt),r(e,Wa,p),q(kt,e,p),r(e,Ia,p),r(e,Ve,p),s(Ve,we),s(we,ea),q(es,ea,null),s(Ve,Ze),s(Ve,ta),s(ta,wn),r(e,Ga,p),r(e,Oe,p),s(Oe,ts),s(Oe,sa),s(sa,bn),s(Oe,kn),s(Oe,ss),s(ss,yn),s(Oe,$n),r(e,ho,p),en[yt].m(e,p),r(e,vn,p),r(e,as,p),s(as,tl),s(as,Xn),s(Xn,sl),s(as,al),s(as,Kn),s(Kn,nl),s(as,ol),r(e,uo,p),r(e,ns,p),s(ns,ll),s(ns,Vn),s(Vn,rl),s(ns,il),s(ns,Zn),s(Zn,pl),s(ns,cl),r(e,mo,p),tn[vt].m(e,p),r(e,jn,p),r(e,xn,p),s(xn,hl),r(e,fo,p),q(Ma,e,p),r(e,_o,p),sn[xt].m(e,p),r(e,qn,p),r(e,En,p),s(En,ul),r(e,go,p),J&&J.m(e,p),r(e,zn,p),q(aa,e,p),r(e,wo,p),r(e,Tn,p),s(Tn,dl),r(e,bo,p),q(Ha,e,p),r(e,ko,p),r(e,Pn,p),s(Pn,ml),r(e,yo,p),r(e,Dn,p),s(Dn,fl),r(e,$o,p),q(Sa,e,p),r(e,vo,p),an[Et].m(e,p),r(e,Cn,p),q(na,e,p),r(e,jo,p),q(oa,e,p),r(e,xo,p),r(e,js,p),s(js,la),s(la,Jn),q(Ra,Jn,null),s(js,_l),s(js,Qn),s(Qn,gl),r(e,qo,p),r(e,ra,p),s(ra,wl),s(ra,eo),s(eo,bl),s(ra,kl),r(e,Eo,p),nn[Tt].m(e,p),r(e,An,p),r(e,On,p),s(On,yl),r(e,zo,p),q(Ba,e,p),r(e,To,p),q(Ua,e,p),r(e,Po,p),r(e,os,p),s(os,$l),s(os,to),s(to,vl),s(os,jl),s(os,so),s(so,xl),s(os,ql),r(e,Do,p),q(Ya,e,p),r(e,Co,p),q(Xa,e,p),r(e,Ao,p),r(e,Je,p),s(Je,El),s(Je,ao),s(ao,zl),s(Je,Tl),s(Je,no),s(no,Pl),s(Je,Dl),s(Je,oo),s(oo,Cl),s(Je,Al),r(e,Oo,p),q(Ka,e,p),r(e,Fo,p),q(Va,e,p),r(e,No,p),r(e,ia,p),s(ia,Ol),s(ia,lo),s(lo,Fl),s(ia,Nl),r(e,Lo,p),q(Za,e,p),r(e,Wo,p),q(Ja,e,p),r(e,Io,p),xs.m(e,p),r(e,Fn,p),Q&&Q.m(e,p),r(e,Nn,p),Go=!0},p(e,[p]){const on={};p&1&&(on.fw=e[0]),i.$set(on);let Ln=g;g=Il(e),g!==Ln&&(ma(),b(Qa[Ln],1,1,()=>{Qa[Ln]=null}),da(),P=Qa[g],P||(P=Qa[g]=Wl[g](e),P.c()),w(P,1),P.m(I.parentNode,I));const ro={};p&2&&(ro.$$scope={dirty:p,ctx:e}),Pe.$set(ro);const io={};p&2&&(io.$$scope={dirty:p,ctx:e}),kt.$set(io);let ls=yt;yt=Ml(e),yt!==ls&&(ma(),b(en[ls],1,1,()=>{en[ls]=null}),da(),$t=en[yt],$t||($t=en[yt]=Gl[yt](e),$t.c()),w($t,1),$t.m(vn.parentNode,vn));let Wn=vt;vt=Sl(e),vt!==Wn&&(ma(),b(tn[Wn],1,1,()=>{tn[Wn]=null}),da(),jt=tn[vt],jt||(jt=tn[vt]=Hl[vt](e),jt.c()),w(jt,1),jt.m(jn.parentNode,jn));let In=xt;xt=Bl(e),xt!==In&&(ma(),b(sn[In],1,1,()=>{sn[In]=null}),da(),qt=sn[xt],qt||(qt=sn[xt]=Rl[xt](e),qt.c()),w(qt,1),qt.m(qn.parentNode,qn)),e[0]==="tf"?J?p&1&&w(J,1):(J=Qr(),J.c(),w(J,1),J.m(zn.parentNode,zn)):J&&(ma(),b(J,1,1,()=>{J=null}),da());const Fe={};p&2&&(Fe.$$scope={dirty:p,ctx:e}),aa.$set(Fe);let Gn=Et;Et=Yl(e),Et!==Gn&&(ma(),b(an[Gn],1,1,()=>{an[Gn]=null}),da(),zt=an[Et],zt||(zt=an[Et]=Ul[Et](e),zt.c()),w(zt,1),zt.m(Cn.parentNode,Cn));const po={};p&2&&(po.$$scope={dirty:p,ctx:e}),na.$set(po);const co={};p&3&&(co.$$scope={dirty:p,ctx:e}),oa.$set(co);let Mn=Tt;Tt=Kl(e),Tt!==Mn&&(ma(),b(nn[Mn],1,1,()=>{nn[Mn]=null}),da(),Pt=nn[Tt],Pt||(Pt=nn[Tt]=Xl[Tt](e),Pt.c()),w(Pt,1),Pt.m(An.parentNode,An)),Mo!==(Mo=Vl(e))&&(xs.d(1),xs=Mo(e),xs&&(xs.c(),xs.m(Fn.parentNode,Fn))),e[0]==="pt"?Q?p&1&&w(Q,1):(Q=ei(e),Q.c(),w(Q,1),Q.m(Nn.parentNode,Nn)):Q&&(ma(),b(Q,1,1,()=>{Q=null}),da())},i(e){Go||(w(i.$$.fragment,e),w(T.$$.fragment,e),w(P),w(xe.$$.fragment,e),w(te.$$.fragment,e),w(Ee.$$.fragment,e),w(rt.$$.fragment,e),w(he.$$.fragment,e),w(ue.$$.fragment,e),w(de.$$.fragment,e),w(me.$$.fragment,e),w(it.$$.fragment,e),w(He.$$.fragment,e),w(Pe.$$.fragment,e),w(pt.$$.fragment,e),w(ct.$$.fragment,e),w(ut.$$.fragment,e),w(dt.$$.fragment,e),w(Ye.$$.fragment,e),w(Ke.$$.fragment,e),w(Zt.$$.fragment,e),w(Jt.$$.fragment,e),w(kt.$$.fragment,e),w(es.$$.fragment,e),w($t),w(jt),w(Ma.$$.fragment,e),w(qt),w(J),w(aa.$$.fragment,e),w(Ha.$$.fragment,e),w(Sa.$$.fragment,e),w(zt),w(na.$$.fragment,e),w(oa.$$.fragment,e),w(Ra.$$.fragment,e),w(Pt),w(Ba.$$.fragment,e),w(Ua.$$.fragment,e),w(Ya.$$.fragment,e),w(Xa.$$.fragment,e),w(Ka.$$.fragment,e),w(Va.$$.fragment,e),w(Za.$$.fragment,e),w(Ja.$$.fragment,e),w(Q),Go=!0)},o(e){b(i.$$.fragment,e),b(T.$$.fragment,e),b(P),b(xe.$$.fragment,e),b(te.$$.fragment,e),b(Ee.$$.fragment,e),b(rt.$$.fragment,e),b(he.$$.fragment,e),b(ue.$$.fragment,e),b(de.$$.fragment,e),b(me.$$.fragment,e),b(it.$$.fragment,e),b(He.$$.fragment,e),b(Pe.$$.fragment,e),b(pt.$$.fragment,e),b(ct.$$.fragment,e),b(ut.$$.fragment,e),b(dt.$$.fragment,e),b(Ye.$$.fragment,e),b(Ke.$$.fragment,e),b(Zt.$$.fragment,e),b(Jt.$$.fragment,e),b(kt.$$.fragment,e),b(es.$$.fragment,e),b($t),b(jt),b(Ma.$$.fragment,e),b(qt),b(J),b(aa.$$.fragment,e),b(Ha.$$.fragment,e),b(Sa.$$.fragment,e),b(zt),b(na.$$.fragment,e),b(oa.$$.fragment,e),b(Ra.$$.fragment,e),b(Pt),b(Ba.$$.fragment,e),b(Ua.$$.fragment,e),b(Ya.$$.fragment,e),b(Xa.$$.fragment,e),b(Ka.$$.fragment,e),b(Va.$$.fragment,e),b(Za.$$.fragment,e),b(Ja.$$.fragment,e),b(Q),Go=!1},d(e){t(n),e&&t(f),E(i,e),e&&t(_),e&&t($),E(T),e&&t(W),Qa[g].d(e),e&&t(I),e&&t(M),e&&t(Z),e&&t(B),e&&t(qs),E(xe,e),e&&t(Es),e&&t(ke),e&&t(ps),e&&t(K),e&&t(et),e&&t(ne),e&&t(pe),e&&t($e),e&&t(Ps),e&&t(ce),E(te),e&&t(Ds),e&&t(se),e&&t(lt),e&&t(Me),e&&t(Ns),E(Ee,e),e&&t(Ls),e&&t(Wt),e&&t(Ws),E(rt,e),e&&t(hs),E(he,e),e&&t(us),e&&t(ze),e&&t(ds),E(ue,e),e&&t(ms),e&&t(Te),e&&t(fs),E(de,e),e&&t(_s),E(me,e),e&&t(gs),e&&t(oe),e&&t(Gt),e&&t(Mt),e&&t(Ht),E(it,e),e&&t(Is),E(He,e),e&&t(Se),E(Pe,e),e&&t(le),e&&t(St),e&&t(Gs),E(pt,e),e&&t(Rt),E(ct,e),e&&t(Ms),e&&t(je),e&&t(ks),e&&t(re),E(ut),e&&t(fe),E(dt,e),e&&t(Bt),e&&t(Ut),e&&t(Yt),e&&t(ie),e&&t(Ys),e&&t(_e),e&&t(gt),e&&t(Vt),e&&t(Ue),E(Ye,e),e&&t(Xe),E(Ke,e),e&&t(a),e&&t(y),e&&t(Fa),e&&t(U),e&&t(wt),E(Zt,e),e&&t(Na),E(Jt,e),e&&t(bt),e&&t($s),e&&t(La),e&&t(vs),e&&t(Wa),E(kt,e),e&&t(Ia),e&&t(Ve),E(es),e&&t(Ga),e&&t(Oe),e&&t(ho),en[yt].d(e),e&&t(vn),e&&t(as),e&&t(uo),e&&t(ns),e&&t(mo),tn[vt].d(e),e&&t(jn),e&&t(xn),e&&t(fo),E(Ma,e),e&&t(_o),sn[xt].d(e),e&&t(qn),e&&t(En),e&&t(go),J&&J.d(e),e&&t(zn),E(aa,e),e&&t(wo),e&&t(Tn),e&&t(bo),E(Ha,e),e&&t(ko),e&&t(Pn),e&&t(yo),e&&t(Dn),e&&t($o),E(Sa,e),e&&t(vo),an[Et].d(e),e&&t(Cn),E(na,e),e&&t(jo),E(oa,e),e&&t(xo),e&&t(js),E(Ra),e&&t(qo),e&&t(ra),e&&t(Eo),nn[Tt].d(e),e&&t(An),e&&t(On),e&&t(zo),E(Ba,e),e&&t(To),E(Ua,e),e&&t(Po),e&&t(os),e&&t(Do),E(Ya,e),e&&t(Co),E(Xa,e),e&&t(Ao),e&&t(Je),e&&t(Oo),E(Ka,e),e&&t(Fo),E(Va,e),e&&t(No),e&&t(ia),e&&t(Lo),E(Za,e),e&&t(Wo),E(Ja,e),e&&t(Io),xs.d(e),e&&t(Fn),Q&&Q.d(e),e&&t(Nn)}}}const Ai={local:"training-a-causal-language-model-from-scratch",sections:[{local:"gathering-the-data",title:"Gathering the data"},{local:"preparing-the-dataset",title:"Preparing the dataset"},{local:"initializing-a-new-model",title:"Initializing a new model"},{local:"code-generation-with-a-pipeline",title:"Code generation with a pipeline"},{local:"training-with-accelerate",title:"Training with \u{1F917} Accelerate"}],title:"Training a causal language model from scratch"};function Oi(O,n,f){let i="pt";return li(()=>{const _=new URLSearchParams(window.location.search);f(0,i=_.get("fw")||"pt")}),[i]}class Hi extends si{constructor(n){super();ai(this,n,Oi,Ci,ni,{})}}export{Hi as default,Ai as metadata};
