import{S as P$,i as L$,s as A$,e as n,k as p,w as B,t as a,M as O$,c as s,d as t,m as h,a as r,x as v,h as i,b as c,F as e,g as k,y,q as w,o as T,B as $,v as I$,L as j}from"../../chunks/vendor-6b77c823.js";import{T as H}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-1088f2fb.js";import{C}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as M}from"../../chunks/ExampleCodeBlock-5212b321.js";function N$(x){let d,_,g,f,b;return f=new C({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function S$(x){let d,_,g,f,b;return f=new C({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"sequence pair mask has the following format:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function D$(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function W$(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function U$(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Q$(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function R$(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function V$(x){let d,_,g,f,b;return f=new C({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForCausalLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function G$(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function H$(x){let d,_,g,f,b;return f=new C({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForMaskedLM
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")
squad_ds = load_dataset("squad_v2", split="train")
# select random long article
LONG_ARTICLE_TARGET = squad_ds[81514]["context"]
# select random sentence
LONG_ARTICLE_TARGET[332:398]

# add mask_token
LONG_ARTICLE_TO_MASK = LONG_ARTICLE_TARGET.replace("maximum", "[MASK]")
inputs = tokenizer(LONG_ARTICLE_TO_MASK, return_tensors="pt")
# long article input
list(inputs["input_ids"].shape)

with torch.no_grad():
    logits = model(**inputs).logits
# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random long article</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TARGET = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random sentence</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TARGET[<span class="hljs-number">332</span>:<span class="hljs-number">398</span>]
<span class="hljs-string">&#x27;the highest values are very close to the theoretical maximum value&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TO_MASK = LONG_ARTICLE_TARGET.replace(<span class="hljs-string">&quot;maximum&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(LONG_ARTICLE_TO_MASK, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long article input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">919</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;maximum&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function J$(x){let d,_;return d=new C({props:{code:`labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.08</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:j,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){$(d,g)}}}function K$(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function X$(x){let d,_,g,f,b;return f=new C({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("l-yohai/bigbird-roberta-base-mnli")
model = BigBirdForSequenceClassification.from_pretrained("l-yohai/bigbird-roberta-base-mnli")
squad_ds = load_dataset("squad_v2", split="train")
LONG_ARTICLE = squad_ds[81514]["context"]
inputs = tokenizer(LONG_ARTICLE, return_tensors="pt")
# long input article
list(inputs["input_ids"].shape)

with torch.no_grad():
    logits = model(**inputs).logits
predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(LONG_ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long input article</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">919</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function Y$(x){let d,_;return d=new C({props:{code:`num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained(
    "l-yohai/bigbird-roberta-base-mnli", num_labels=num_labels
)
labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>, num_labels=num_labels
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.13</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:j,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){$(d,g)}}}function Z$(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function e2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function t2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function o2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
import torch

tokenizer = BigBirdTokenizer.from_pretrained("vumichien/token-classification-bigbird-roberta-base-random")
model = BigBirdForTokenClassification.from_pretrained("vumichien/token-classification-bigbird-roberta-base-random")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/token-classification-bigbird-roberta-base-random&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/token-classification-bigbird-roberta-base-random&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function n2(x){let d,_;return d=new C({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:j,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){$(d,g)}}}function s2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function r2(x){let d,_,g,f,b;return f=new C({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForQuestionAnswering
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("abhinavkulkarni/bigbird-roberta-base-finetuned-squad")
model = BigBirdForQuestionAnswering.from_pretrained("abhinavkulkarni/bigbird-roberta-base-finetuned-squad")
squad_ds = load_dataset("squad_v2", split="train")
# select random article and question
LONG_ARTICLE = squad_ds[81514]["context"]
QUESTION = squad_ds[81514]["question"]
QUESTION

inputs = tokenizer(QUESTION, LONG_ARTICLE, return_tensors="pt")
# long article and question input
list(inputs["input_ids"].shape)

with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()
predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;abhinavkulkarni/bigbird-roberta-base-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;abhinavkulkarni/bigbird-roberta-base-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random article and question</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>QUESTION = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;question&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>QUESTION
<span class="hljs-string">&#x27;During daytime how high can the temperatures reach?&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(QUESTION, LONG_ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long article and question input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">929</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;80 \xB0C (176 \xB0F) or more&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function a2(x){let d,_;return d=new C({props:{code:`target_start_index, target_end_index = torch.tensor([130]), torch.tensor([132])
outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">130</span>]), torch.tensor([<span class="hljs-number">132</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.63</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:j,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){$(d,g)}}}function i2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function l2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function d2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function c2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function p2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function h2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function m2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function g2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function f2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function u2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function _2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function b2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function k2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function B2(x){let d,_,g,f,b;return f=new C({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForQuestionAnswering.from_pretrained("google/bigbird-roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:j,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),$(f,l)}}}function v2(x){let d,_,g,f,b,l,m,F,jh,Ic,Re,Ot,ui,vn,Ch,_i,Ph,Nc,It,Lh,yn,Ah,Oh,Sc,pa,Ih,Dc,ha,bi,Nh,Wc,ma,Sh,Uc,Q,wn,Dh,Tn,Wh,Uh,Qh,le,Rh,ki,Vh,Gh,Bi,Hh,Jh,vi,Kh,Xh,yi,Yh,Zh,em,wi,tm,om,Ti,nm,sm,$n,rm,$i,am,im,lm,ga,dm,xi,cm,Qc,Ae,pm,xn,hm,mm,Fn,gm,fm,Rc,Ve,Nt,Fi,qn,um,qi,_m,Vc,E,zn,bm,Ge,km,fa,Bm,vm,En,ym,wm,Tm,He,$m,ua,xm,Fm,_a,qm,zm,Em,St,Mm,zi,Ei,Mi,ji,jm,Cm,Ci,Pi,Mn,Dt,Wt,Li,jn,Pm,Ai,Lm,Am,Oi,Om,Im,Ii,Ni,Cn,Ut,Qt,Si,Pn,Nm,Di,Sm,Dm,Wi,Wm,Um,Ui,Qi,Ri,Rt,Vt,Vi,Ln,Qm,Gi,Rm,Gc,Je,Gt,Hi,An,Vm,Ji,Gm,Hc,P,On,Hm,In,Jm,Nn,Km,Xm,Ym,Sn,Zm,ba,eg,tg,og,Oe,Dn,ng,Ki,sg,rg,Wn,ka,ag,Xi,ig,lg,Ba,dg,Yi,cg,pg,Ht,Un,hg,Qn,mg,Zi,gg,fg,ug,Jt,Rn,_g,Ke,bg,el,kg,Bg,tl,vg,yg,wg,va,Vn,Jc,Xe,Kt,ol,Gn,Tg,nl,$g,Kc,R,Hn,xg,xe,Fg,sl,qg,zg,Jn,Eg,Mg,ya,jg,Cg,Pg,Ie,Kn,Lg,rl,Ag,Og,Xn,wa,Ig,al,Ng,Sg,Ta,Dg,il,Wg,Ug,ge,Yn,Qg,ll,Rg,Vg,Xt,Gg,dl,Hg,Jg,Yt,Zn,Kg,es,Xg,cl,Yg,Zg,Xc,Ye,Zt,pl,ts,ef,hl,tf,Yc,Ze,os,of,ns,nf,$a,sf,rf,Zc,et,eo,ml,ss,af,gl,lf,ep,V,rs,df,as,cf,is,pf,hf,mf,ls,gf,ds,ff,uf,_f,U,bf,fl,kf,Bf,ul,vf,yf,_l,wf,Tf,bl,$f,xf,kl,Ff,qf,Bl,zf,Ef,Mf,fe,cs,jf,tt,Cf,xa,Pf,Lf,vl,Af,Of,If,to,Nf,oo,tp,ot,no,yl,ps,Sf,wl,Df,op,nt,hs,Wf,ue,ms,Uf,st,Qf,Fa,Rf,Vf,Tl,Gf,Hf,Jf,so,Kf,ro,np,rt,ao,$l,gs,Xf,xl,Yf,sp,Fe,fs,Zf,at,eu,Fl,tu,ou,us,nu,su,ru,_e,_s,au,it,iu,qa,lu,du,ql,cu,pu,hu,io,mu,lo,rp,lt,co,zl,bs,gu,El,fu,ap,qe,ks,uu,dt,_u,Ml,bu,ku,Bs,Bu,vu,yu,J,vs,wu,ct,Tu,za,$u,xu,jl,Fu,qu,zu,po,Eu,ho,Mu,mo,ip,pt,go,Cl,ys,ju,Pl,Cu,lp,de,ws,Pu,Ll,Lu,Au,Ts,Ou,$s,Iu,Nu,Su,K,xs,Du,ht,Wu,Ea,Uu,Qu,Al,Ru,Vu,Gu,fo,Hu,uo,Ju,_o,dp,mt,bo,Ol,Fs,Ku,Il,Xu,cp,ce,qs,Yu,Nl,Zu,e_,zs,t_,Es,o_,n_,s_,be,Ms,r_,gt,a_,Ma,i_,l_,Sl,d_,c_,p_,ko,h_,Bo,pp,ft,vo,Dl,js,m_,Wl,g_,hp,pe,Cs,f_,Ul,u_,__,Ps,b_,Ls,k_,B_,v_,X,As,y_,ut,w_,ja,T_,$_,Ql,x_,F_,q_,yo,z_,wo,E_,To,mp,_t,$o,Rl,Os,M_,Vl,j_,gp,he,Is,C_,bt,P_,Gl,L_,A_,Hl,O_,I_,N_,Ns,S_,Ss,D_,W_,U_,Y,Ds,Q_,kt,R_,Ca,V_,G_,Jl,H_,J_,K_,xo,X_,Fo,Y_,qo,fp,Bt,zo,Kl,Ws,Z_,Xl,eb,up,L,Us,tb,Yl,ob,nb,Qs,sb,Pa,rb,ab,ib,Rs,lb,Vs,db,cb,pb,Zl,hb,mb,ze,ed,Gs,gb,fb,td,Hs,ub,_b,od,Js,bb,kb,nd,Ks,Bb,vb,ke,Xs,yb,vt,wb,sd,Tb,$b,rd,xb,Fb,qb,Eo,zb,Mo,_p,yt,jo,ad,Ys,Eb,id,Mb,bp,A,Zs,jb,wt,Cb,ld,Pb,Lb,dd,Ab,Ob,Ib,er,Nb,La,Sb,Db,Wb,tr,Ub,or,Qb,Rb,Vb,cd,Gb,Hb,Ee,pd,nr,Jb,Kb,hd,sr,Xb,Yb,md,rr,Zb,ek,gd,ar,tk,ok,Be,ir,nk,Tt,sk,fd,rk,ak,ud,ik,lk,dk,Co,ck,Po,kp,$t,Lo,_d,lr,pk,bd,hk,Bp,O,dr,mk,cr,gk,kd,fk,uk,_k,pr,bk,Aa,kk,Bk,vk,hr,yk,mr,wk,Tk,$k,Bd,xk,Fk,Me,vd,gr,qk,zk,yd,fr,Ek,Mk,wd,ur,jk,Ck,Td,_r,Pk,Lk,ve,br,Ak,xt,Ok,$d,Ik,Nk,xd,Sk,Dk,Wk,Ao,Uk,Oo,vp,Ft,Io,Fd,kr,Qk,qd,Rk,yp,I,Br,Vk,zd,Gk,Hk,vr,Jk,Oa,Kk,Xk,Yk,yr,Zk,wr,eB,tB,oB,Ed,nB,sB,je,Md,Tr,rB,aB,jd,$r,iB,lB,Cd,xr,dB,cB,Pd,Fr,pB,hB,ye,qr,mB,qt,gB,Ld,fB,uB,Ad,_B,bB,kB,No,BB,So,wp,zt,Do,Od,zr,vB,Id,yB,Tp,N,Er,wB,Nd,TB,$B,Mr,xB,Ia,FB,qB,zB,jr,EB,Cr,MB,jB,CB,Sd,PB,LB,Ce,Dd,Pr,AB,OB,Wd,Lr,IB,NB,Ud,Ar,SB,DB,Qd,Or,WB,UB,we,Ir,QB,Et,RB,Rd,VB,GB,Vd,HB,JB,KB,Wo,XB,Uo,$p,Mt,Qo,Gd,Nr,YB,Hd,ZB,xp,S,Sr,ev,Jd,tv,ov,Dr,nv,Na,sv,rv,av,Wr,iv,Ur,lv,dv,cv,Kd,pv,hv,Pe,Xd,Qr,mv,gv,Yd,Rr,fv,uv,Zd,Vr,_v,bv,ec,Gr,kv,Bv,Te,Hr,vv,jt,yv,tc,wv,Tv,oc,$v,xv,Fv,Ro,qv,Vo,Fp,Ct,Go,nc,Jr,zv,sc,Ev,qp,D,Kr,Mv,Pt,jv,rc,Cv,Pv,ac,Lv,Av,Ov,Xr,Iv,Sa,Nv,Sv,Dv,Yr,Wv,Zr,Uv,Qv,Rv,ic,Vv,Gv,Le,lc,ea,Hv,Jv,dc,ta,Kv,Xv,cc,oa,Yv,Zv,pc,na,ey,ty,$e,sa,oy,Lt,ny,Da,sy,ry,hc,ay,iy,ly,Ho,dy,Jo,zp;return l=new z({}),vn=new z({}),qn=new z({}),zn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BigBird model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BigBirdConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BigBirdConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BigBirdConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BigBirdConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BigBirdConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BigBirdConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BigBirdConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 1024 or 2048 or 4096).`,name:"max_position_embeddings"},{anchor:"transformers.BigBirdConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BigBirdConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BigBirdConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BigBirdConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BigBirdConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity). Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdConfig.rescale_embeddings",description:`<strong>rescale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"rescale_embeddings"},{anchor:"transformers.BigBirdConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/configuration_big_bird.py#L34"}}),St=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[N$]},$$scope:{ctx:x}}}),jn=new z({}),Pn=new z({}),Ln=new z({}),An=new z({}),On=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BigBirdTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird.py#L47"}}),Dn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird.py#L201",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird.py#L226",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird.py#L253",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird.py#L184"}}),Gn=new z({}),Hn=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L58"}}),Kn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L145",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L201",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xt=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[S$]},$$scope:{ctx:x}}}),Zn=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L170",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new z({}),os=new q({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L1856"}}),ss=new z({}),rs=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L1928"}}),cs=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L1984",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new H({props:{$$slots:{default:[D$]},$$scope:{ctx:x}}}),oo=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[W$]},$$scope:{ctx:x}}}),ps=new z({}),hs=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2268"}}),ms=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BigBirdForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. If specified, nsp loss will be
added to masked_lm loss. Input should be a sequence pair (see <code>input_ids</code> docstring) Indices should be in
<code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.BigBirdForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2284",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new H({props:{$$slots:{default:[U$]},$$scope:{ctx:x}}}),ro=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[Q$]},$$scope:{ctx:x}}}),gs=new z({}),fs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2514"}}),_s=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BigBirdForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2536",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new H({props:{$$slots:{default:[R$]},$$scope:{ctx:x}}}),lo=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[V$]},$$scope:{ctx:x}}}),bs=new z({}),ks=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2372"}}),vs=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2394",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new H({props:{$$slots:{default:[G$]},$$scope:{ctx:x}}}),ho=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[H$]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[J$]},$$scope:{ctx:x}}}),ys=new z({}),ws=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2678"}}),xs=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2689",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new H({props:{$$slots:{default:[K$]},$$scope:{ctx:x}}}),uo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[X$]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[Y$]},$$scope:{ctx:x}}}),Fs=new z({}),qs=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2806"}}),Ms=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2817",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new H({props:{$$slots:{default:[Z$]},$$scope:{ctx:x}}}),Bo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[e2]},$$scope:{ctx:x}}}),js=new z({}),Cs=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2900"}}),As=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L2915",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new H({props:{$$slots:{default:[t2]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[o2]},$$scope:{ctx:x}}}),To=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[n2]},$$scope:{ctx:x}}}),Os=new z({}),Is=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L3003"}}),Ds=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_big_bird.py#L3017",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 1)</code>) \u2014 pooler output from BigBigModel</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new H({props:{$$slots:{default:[s2]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[r2]},$$scope:{ctx:x}}}),qo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[a2]},$$scope:{ctx:x}}}),Ws=new z({}),Us=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1575"}}),Xs=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1460",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new H({props:{$$slots:{default:[i2]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[l2]},$$scope:{ctx:x}}}),Ys=new z({}),Zs=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1650"}}),ir=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1460",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new H({props:{$$slots:{default:[d2]},$$scope:{ctx:x}}}),Po=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[c2]},$$scope:{ctx:x}}}),lr=new z({}),dr=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1737"}}),br=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1460",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new H({props:{$$slots:{default:[p2]},$$scope:{ctx:x}}}),Oo=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[h2]},$$scope:{ctx:x}}}),kr=new z({}),Br=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1826"}}),qr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1460",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new H({props:{$$slots:{default:[m2]},$$scope:{ctx:x}}}),So=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[g2]},$$scope:{ctx:x}}}),zr=new z({}),Er=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1903"}}),Ir=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1460",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new H({props:{$$slots:{default:[f2]},$$scope:{ctx:x}}}),Uo=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[u2]},$$scope:{ctx:x}}}),Nr=new z({}),Sr=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1996"}}),Hr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1460",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new H({props:{$$slots:{default:[_2]},$$scope:{ctx:x}}}),Vo=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[b2]},$$scope:{ctx:x}}}),Jr=new z({}),Kr=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2095"}}),sa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2098",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>pooled_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 pooled_output returned by FlaxBigBirdModel.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new H({props:{$$slots:{default:[k2]},$$scope:{ctx:x}}}),Jo=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[B2]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),f=n("a"),b=n("span"),B(l.$$.fragment),m=p(),F=n("span"),jh=a("BigBird"),Ic=p(),Re=n("h2"),Ot=n("a"),ui=n("span"),B(vn.$$.fragment),Ch=p(),_i=n("span"),Ph=a("Overview"),Nc=p(),It=n("p"),Lh=a("The BigBird model was proposed in "),yn=n("a"),Ah=a("Big Bird: Transformers for Longer Sequences"),Oh=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Sc=p(),pa=n("p"),Ih=a("The abstract from the paper is the following:"),Dc=p(),ha=n("p"),bi=n("em"),Nh=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Wc=p(),ma=n("p"),Sh=a("Tips:"),Uc=p(),Q=n("ul"),wn=n("li"),Dh=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),Tn=n("a"),Wh=a("this blog post"),Uh=a("."),Qh=p(),le=n("li"),Rh=a("BigBird comes with 2 implementations: "),ki=n("strong"),Vh=a("original_full"),Gh=a(" & "),Bi=n("strong"),Hh=a("block_sparse"),Jh=a(`. For the sequence length < 1024, using
`),vi=n("strong"),Kh=a("original_full"),Xh=a(" is advised as there is no benefit in using "),yi=n("strong"),Yh=a("block_sparse"),Zh=a(" attention."),em=p(),wi=n("li"),tm=a("The code currently uses window size of 3 blocks and 2 global blocks."),om=p(),Ti=n("li"),nm=a("Sequence length must be divisible by block size."),sm=p(),$n=n("li"),rm=a("Current implementation supports only "),$i=n("strong"),am=a("ITC"),im=a("."),lm=p(),ga=n("li"),dm=a("Current implementation doesn\u2019t support "),xi=n("strong"),cm=a("num_random_blocks = 0"),Qc=p(),Ae=n("p"),pm=a("This model was contributed by "),xn=n("a"),hm=a("vasudevgupta"),mm=a(`. The original code can be found
`),Fn=n("a"),gm=a("here"),fm=a("."),Rc=p(),Ve=n("h2"),Nt=n("a"),Fi=n("span"),B(qn.$$.fragment),um=p(),qi=n("span"),_m=a("BigBirdConfig"),Vc=p(),E=n("div"),B(zn.$$.fragment),bm=p(),Ge=n("p"),km=a("This is the configuration class to store the configuration of a "),fa=n("a"),Bm=a("BigBirdModel"),vm=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),En=n("a"),ym=a("google/bigbird-roberta-base"),wm=a(" architecture."),Tm=p(),He=n("p"),$m=a("Configuration objects inherit from "),ua=n("a"),xm=a("PretrainedConfig"),Fm=a(` and can be used to control the model outputs. Read the
documentation from `),_a=n("a"),qm=a("PretrainedConfig"),zm=a(" for more information."),Em=p(),B(St.$$.fragment),Mm=p(),zi=n("blockquote"),Ei=n("blockquote"),Mi=n("blockquote"),ji=n("p"),jm=a("from transformers import BigBirdModel, BigBirdConfig"),Cm=p(),Ci=n("blockquote"),Pi=n("blockquote"),Mn=n("blockquote"),Dt=n("h1"),Wt=n("a"),Li=n("span"),B(jn.$$.fragment),Pm=p(),Ai=n("span"),Lm=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Am=p(),Oi=n("p"),Om=a("BigBirdConfig()"),Im=p(),Ii=n("blockquote"),Ni=n("blockquote"),Cn=n("blockquote"),Ut=n("h1"),Qt=n("a"),Si=n("span"),B(Pn.$$.fragment),Nm=p(),Di=n("span"),Sm=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),Dm=p(),Wi=n("p"),Wm=a("BigBirdModel(configuration)"),Um=p(),Ui=n("blockquote"),Qi=n("blockquote"),Ri=n("blockquote"),Rt=n("h1"),Vt=n("a"),Vi=n("span"),B(Ln.$$.fragment),Qm=p(),Gi=n("span"),Rm=a("Accessing the model configuration >>> configuration = model.config"),Gc=p(),Je=n("h2"),Gt=n("a"),Hi=n("span"),B(An.$$.fragment),Vm=p(),Ji=n("span"),Gm=a("BigBirdTokenizer"),Hc=p(),P=n("div"),B(On.$$.fragment),Hm=p(),In=n("p"),Jm=a("Construct a BigBird tokenizer. Based on "),Nn=n("a"),Km=a("SentencePiece"),Xm=a("."),Ym=p(),Sn=n("p"),Zm=a("This tokenizer inherits from "),ba=n("a"),eg=a("PreTrainedTokenizer"),tg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),og=p(),Oe=n("div"),B(Dn.$$.fragment),ng=p(),Ki=n("p"),sg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),rg=p(),Wn=n("ul"),ka=n("li"),ag=a("single sequence: "),Xi=n("code"),ig=a("[CLS] X [SEP]"),lg=p(),Ba=n("li"),dg=a("pair of sequences: "),Yi=n("code"),cg=a("[CLS] A [SEP] B [SEP]"),pg=p(),Ht=n("div"),B(Un.$$.fragment),hg=p(),Qn=n("p"),mg=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zi=n("code"),gg=a("prepare_for_model"),fg=a(" method."),ug=p(),Jt=n("div"),B(Rn.$$.fragment),_g=p(),Ke=n("p"),bg=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),el=n("code"),kg=a("token_ids_1"),Bg=a(" is "),tl=n("code"),vg=a("None"),yg=a(", this method only returns the first portion of the mask (0s)."),wg=p(),va=n("div"),B(Vn.$$.fragment),Jc=p(),Xe=n("h2"),Kt=n("a"),ol=n("span"),B(Gn.$$.fragment),Tg=p(),nl=n("span"),$g=a("BigBirdTokenizerFast"),Kc=p(),R=n("div"),B(Hn.$$.fragment),xg=p(),xe=n("p"),Fg=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),sl=n("em"),qg=a("tokenizers"),zg=a(` library). Based on
`),Jn=n("a"),Eg=a("Unigram"),Mg=a(`. This
tokenizer inherits from `),ya=n("a"),jg=a("PreTrainedTokenizerFast"),Cg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Pg=p(),Ie=n("div"),B(Kn.$$.fragment),Lg=p(),rl=n("p"),Ag=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),Og=p(),Xn=n("ul"),wa=n("li"),Ig=a("single sequence: "),al=n("code"),Ng=a("[CLS] X [SEP]"),Sg=p(),Ta=n("li"),Dg=a("pair of sequences: "),il=n("code"),Wg=a("[CLS] A [SEP] B [SEP]"),Ug=p(),ge=n("div"),B(Yn.$$.fragment),Qg=p(),ll=n("p"),Rg=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),Vg=p(),B(Xt.$$.fragment),Gg=p(),dl=n("p"),Hg=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Jg=p(),Yt=n("div"),B(Zn.$$.fragment),Kg=p(),es=n("p"),Xg=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),cl=n("code"),Yg=a("prepare_for_model"),Zg=a(" method."),Xc=p(),Ye=n("h2"),Zt=n("a"),pl=n("span"),B(ts.$$.fragment),ef=p(),hl=n("span"),tf=a("BigBird specific outputs"),Yc=p(),Ze=n("div"),B(os.$$.fragment),of=p(),ns=n("p"),nf=a("Output type of "),$a=n("a"),sf=a("BigBirdForPreTraining"),rf=a("."),Zc=p(),et=n("h2"),eo=n("a"),ml=n("span"),B(ss.$$.fragment),af=p(),gl=n("span"),lf=a("BigBirdModel"),ep=p(),V=n("div"),B(rs.$$.fragment),df=p(),as=n("p"),cf=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),is=n("a"),pf=a("torch.nn.Module"),hf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mf=p(),ls=n("p"),gf=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ds=n("a"),ff=a(`Attention is
all you need`),uf=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),_f=p(),U=n("p"),bf=a("To behave as an decoder the model needs to be initialized with the "),fl=n("code"),kf=a("is_decoder"),Bf=a(` argument of the configuration set
to `),ul=n("code"),vf=a("True"),yf=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),_l=n("code"),wf=a("is_decoder"),Tf=a(` argument and
`),bl=n("code"),$f=a("add_cross_attention"),xf=a(" set to "),kl=n("code"),Ff=a("True"),qf=a("; an "),Bl=n("code"),zf=a("encoder_hidden_states"),Ef=a(" is then expected as an input to the forward pass."),Mf=p(),fe=n("div"),B(cs.$$.fragment),jf=p(),tt=n("p"),Cf=a("The "),xa=n("a"),Pf=a("BigBirdModel"),Lf=a(" forward method, overrides the "),vl=n("code"),Af=a("__call__"),Of=a(" special method."),If=p(),B(to.$$.fragment),Nf=p(),B(oo.$$.fragment),tp=p(),ot=n("h2"),no=n("a"),yl=n("span"),B(ps.$$.fragment),Sf=p(),wl=n("span"),Df=a("BigBirdForPreTraining"),op=p(),nt=n("div"),B(hs.$$.fragment),Wf=p(),ue=n("div"),B(ms.$$.fragment),Uf=p(),st=n("p"),Qf=a("The "),Fa=n("a"),Rf=a("BigBirdForPreTraining"),Vf=a(" forward method, overrides the "),Tl=n("code"),Gf=a("__call__"),Hf=a(" special method."),Jf=p(),B(so.$$.fragment),Kf=p(),B(ro.$$.fragment),np=p(),rt=n("h2"),ao=n("a"),$l=n("span"),B(gs.$$.fragment),Xf=p(),xl=n("span"),Yf=a("BigBirdForCausalLM"),sp=p(),Fe=n("div"),B(fs.$$.fragment),Zf=p(),at=n("p"),eu=a("BigBird Model with a "),Fl=n("code"),tu=a("language modeling"),ou=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),us=n("a"),nu=a("torch.nn.Module"),su=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ru=p(),_e=n("div"),B(_s.$$.fragment),au=p(),it=n("p"),iu=a("The "),qa=n("a"),lu=a("BigBirdForCausalLM"),du=a(" forward method, overrides the "),ql=n("code"),cu=a("__call__"),pu=a(" special method."),hu=p(),B(io.$$.fragment),mu=p(),B(lo.$$.fragment),rp=p(),lt=n("h2"),co=n("a"),zl=n("span"),B(bs.$$.fragment),gu=p(),El=n("span"),fu=a("BigBirdForMaskedLM"),ap=p(),qe=n("div"),B(ks.$$.fragment),uu=p(),dt=n("p"),_u=a("BigBird Model with a "),Ml=n("code"),bu=a("language modeling"),ku=a(` head on top.
This model is a PyTorch `),Bs=n("a"),Bu=a("torch.nn.Module"),vu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yu=p(),J=n("div"),B(vs.$$.fragment),wu=p(),ct=n("p"),Tu=a("The "),za=n("a"),$u=a("BigBirdForMaskedLM"),xu=a(" forward method, overrides the "),jl=n("code"),Fu=a("__call__"),qu=a(" special method."),zu=p(),B(po.$$.fragment),Eu=p(),B(ho.$$.fragment),Mu=p(),B(mo.$$.fragment),ip=p(),pt=n("h2"),go=n("a"),Cl=n("span"),B(ys.$$.fragment),ju=p(),Pl=n("span"),Cu=a("BigBirdForSequenceClassification"),lp=p(),de=n("div"),B(ws.$$.fragment),Pu=p(),Ll=n("p"),Lu=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Au=p(),Ts=n("p"),Ou=a("This model is a PyTorch "),$s=n("a"),Iu=a("torch.nn.Module"),Nu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Su=p(),K=n("div"),B(xs.$$.fragment),Du=p(),ht=n("p"),Wu=a("The "),Ea=n("a"),Uu=a("BigBirdForSequenceClassification"),Qu=a(" forward method, overrides the "),Al=n("code"),Ru=a("__call__"),Vu=a(" special method."),Gu=p(),B(fo.$$.fragment),Hu=p(),B(uo.$$.fragment),Ju=p(),B(_o.$$.fragment),dp=p(),mt=n("h2"),bo=n("a"),Ol=n("span"),B(Fs.$$.fragment),Ku=p(),Il=n("span"),Xu=a("BigBirdForMultipleChoice"),cp=p(),ce=n("div"),B(qs.$$.fragment),Yu=p(),Nl=n("p"),Zu=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),e_=p(),zs=n("p"),t_=a("This model is a PyTorch "),Es=n("a"),o_=a("torch.nn.Module"),n_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),s_=p(),be=n("div"),B(Ms.$$.fragment),r_=p(),gt=n("p"),a_=a("The "),Ma=n("a"),i_=a("BigBirdForMultipleChoice"),l_=a(" forward method, overrides the "),Sl=n("code"),d_=a("__call__"),c_=a(" special method."),p_=p(),B(ko.$$.fragment),h_=p(),B(Bo.$$.fragment),pp=p(),ft=n("h2"),vo=n("a"),Dl=n("span"),B(js.$$.fragment),m_=p(),Wl=n("span"),g_=a("BigBirdForTokenClassification"),hp=p(),pe=n("div"),B(Cs.$$.fragment),f_=p(),Ul=n("p"),u_=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),__=p(),Ps=n("p"),b_=a("This model is a PyTorch "),Ls=n("a"),k_=a("torch.nn.Module"),B_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),v_=p(),X=n("div"),B(As.$$.fragment),y_=p(),ut=n("p"),w_=a("The "),ja=n("a"),T_=a("BigBirdForTokenClassification"),$_=a(" forward method, overrides the "),Ql=n("code"),x_=a("__call__"),F_=a(" special method."),q_=p(),B(yo.$$.fragment),z_=p(),B(wo.$$.fragment),E_=p(),B(To.$$.fragment),mp=p(),_t=n("h2"),$o=n("a"),Rl=n("span"),B(Os.$$.fragment),M_=p(),Vl=n("span"),j_=a("BigBirdForQuestionAnswering"),gp=p(),he=n("div"),B(Is.$$.fragment),C_=p(),bt=n("p"),P_=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=n("code"),L_=a("span start logits"),A_=a(" and "),Hl=n("code"),O_=a("span end logits"),I_=a(")."),N_=p(),Ns=n("p"),S_=a("This model is a PyTorch "),Ss=n("a"),D_=a("torch.nn.Module"),W_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),U_=p(),Y=n("div"),B(Ds.$$.fragment),Q_=p(),kt=n("p"),R_=a("The "),Ca=n("a"),V_=a("BigBirdForQuestionAnswering"),G_=a(" forward method, overrides the "),Jl=n("code"),H_=a("__call__"),J_=a(" special method."),K_=p(),B(xo.$$.fragment),X_=p(),B(Fo.$$.fragment),Y_=p(),B(qo.$$.fragment),fp=p(),Bt=n("h2"),zo=n("a"),Kl=n("span"),B(Ws.$$.fragment),Z_=p(),Xl=n("span"),eb=a("FlaxBigBirdModel"),up=p(),L=n("div"),B(Us.$$.fragment),tb=p(),Yl=n("p"),ob=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),nb=p(),Qs=n("p"),sb=a("This model inherits from "),Pa=n("a"),rb=a("FlaxPreTrainedModel"),ab=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ib=p(),Rs=n("p"),lb=a("This model is also a Flax Linen "),Vs=n("a"),db=a("flax.linen.Module"),cb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pb=p(),Zl=n("p"),hb=a("Finally, this model supports inherent JAX features such as:"),mb=p(),ze=n("ul"),ed=n("li"),Gs=n("a"),gb=a("Just-In-Time (JIT) compilation"),fb=p(),td=n("li"),Hs=n("a"),ub=a("Automatic Differentiation"),_b=p(),od=n("li"),Js=n("a"),bb=a("Vectorization"),kb=p(),nd=n("li"),Ks=n("a"),Bb=a("Parallelization"),vb=p(),ke=n("div"),B(Xs.$$.fragment),yb=p(),vt=n("p"),wb=a("The "),sd=n("code"),Tb=a("FlaxBigBirdPreTrainedModel"),$b=a(" forward method, overrides the "),rd=n("code"),xb=a("__call__"),Fb=a(" special method."),qb=p(),B(Eo.$$.fragment),zb=p(),B(Mo.$$.fragment),_p=p(),yt=n("h2"),jo=n("a"),ad=n("span"),B(Ys.$$.fragment),Eb=p(),id=n("span"),Mb=a("FlaxBigBirdForPreTraining"),bp=p(),A=n("div"),B(Zs.$$.fragment),jb=p(),wt=n("p"),Cb=a("BigBird Model with two heads on top as done during the pretraining: a "),ld=n("code"),Pb=a("masked language modeling"),Lb=a(" head and a "),dd=n("code"),Ab=a("next sentence prediction (classification)"),Ob=a(" head."),Ib=p(),er=n("p"),Nb=a("This model inherits from "),La=n("a"),Sb=a("FlaxPreTrainedModel"),Db=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wb=p(),tr=n("p"),Ub=a("This model is also a Flax Linen "),or=n("a"),Qb=a("flax.linen.Module"),Rb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vb=p(),cd=n("p"),Gb=a("Finally, this model supports inherent JAX features such as:"),Hb=p(),Ee=n("ul"),pd=n("li"),nr=n("a"),Jb=a("Just-In-Time (JIT) compilation"),Kb=p(),hd=n("li"),sr=n("a"),Xb=a("Automatic Differentiation"),Yb=p(),md=n("li"),rr=n("a"),Zb=a("Vectorization"),ek=p(),gd=n("li"),ar=n("a"),tk=a("Parallelization"),ok=p(),Be=n("div"),B(ir.$$.fragment),nk=p(),Tt=n("p"),sk=a("The "),fd=n("code"),rk=a("FlaxBigBirdPreTrainedModel"),ak=a(" forward method, overrides the "),ud=n("code"),ik=a("__call__"),lk=a(" special method."),dk=p(),B(Co.$$.fragment),ck=p(),B(Po.$$.fragment),kp=p(),$t=n("h2"),Lo=n("a"),_d=n("span"),B(lr.$$.fragment),pk=p(),bd=n("span"),hk=a("FlaxBigBirdForMaskedLM"),Bp=p(),O=n("div"),B(dr.$$.fragment),mk=p(),cr=n("p"),gk=a("BigBird Model with a "),kd=n("code"),fk=a("language modeling"),uk=a(" head on top."),_k=p(),pr=n("p"),bk=a("This model inherits from "),Aa=n("a"),kk=a("FlaxPreTrainedModel"),Bk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vk=p(),hr=n("p"),yk=a("This model is also a Flax Linen "),mr=n("a"),wk=a("flax.linen.Module"),Tk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$k=p(),Bd=n("p"),xk=a("Finally, this model supports inherent JAX features such as:"),Fk=p(),Me=n("ul"),vd=n("li"),gr=n("a"),qk=a("Just-In-Time (JIT) compilation"),zk=p(),yd=n("li"),fr=n("a"),Ek=a("Automatic Differentiation"),Mk=p(),wd=n("li"),ur=n("a"),jk=a("Vectorization"),Ck=p(),Td=n("li"),_r=n("a"),Pk=a("Parallelization"),Lk=p(),ve=n("div"),B(br.$$.fragment),Ak=p(),xt=n("p"),Ok=a("The "),$d=n("code"),Ik=a("FlaxBigBirdPreTrainedModel"),Nk=a(" forward method, overrides the "),xd=n("code"),Sk=a("__call__"),Dk=a(" special method."),Wk=p(),B(Ao.$$.fragment),Uk=p(),B(Oo.$$.fragment),vp=p(),Ft=n("h2"),Io=n("a"),Fd=n("span"),B(kr.$$.fragment),Qk=p(),qd=n("span"),Rk=a("FlaxBigBirdForSequenceClassification"),yp=p(),I=n("div"),B(Br.$$.fragment),Vk=p(),zd=n("p"),Gk=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Hk=p(),vr=n("p"),Jk=a("This model inherits from "),Oa=n("a"),Kk=a("FlaxPreTrainedModel"),Xk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yk=p(),yr=n("p"),Zk=a("This model is also a Flax Linen "),wr=n("a"),eB=a("flax.linen.Module"),tB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),oB=p(),Ed=n("p"),nB=a("Finally, this model supports inherent JAX features such as:"),sB=p(),je=n("ul"),Md=n("li"),Tr=n("a"),rB=a("Just-In-Time (JIT) compilation"),aB=p(),jd=n("li"),$r=n("a"),iB=a("Automatic Differentiation"),lB=p(),Cd=n("li"),xr=n("a"),dB=a("Vectorization"),cB=p(),Pd=n("li"),Fr=n("a"),pB=a("Parallelization"),hB=p(),ye=n("div"),B(qr.$$.fragment),mB=p(),qt=n("p"),gB=a("The "),Ld=n("code"),fB=a("FlaxBigBirdPreTrainedModel"),uB=a(" forward method, overrides the "),Ad=n("code"),_B=a("__call__"),bB=a(" special method."),kB=p(),B(No.$$.fragment),BB=p(),B(So.$$.fragment),wp=p(),zt=n("h2"),Do=n("a"),Od=n("span"),B(zr.$$.fragment),vB=p(),Id=n("span"),yB=a("FlaxBigBirdForMultipleChoice"),Tp=p(),N=n("div"),B(Er.$$.fragment),wB=p(),Nd=n("p"),TB=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$B=p(),Mr=n("p"),xB=a("This model inherits from "),Ia=n("a"),FB=a("FlaxPreTrainedModel"),qB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zB=p(),jr=n("p"),EB=a("This model is also a Flax Linen "),Cr=n("a"),MB=a("flax.linen.Module"),jB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),CB=p(),Sd=n("p"),PB=a("Finally, this model supports inherent JAX features such as:"),LB=p(),Ce=n("ul"),Dd=n("li"),Pr=n("a"),AB=a("Just-In-Time (JIT) compilation"),OB=p(),Wd=n("li"),Lr=n("a"),IB=a("Automatic Differentiation"),NB=p(),Ud=n("li"),Ar=n("a"),SB=a("Vectorization"),DB=p(),Qd=n("li"),Or=n("a"),WB=a("Parallelization"),UB=p(),we=n("div"),B(Ir.$$.fragment),QB=p(),Et=n("p"),RB=a("The "),Rd=n("code"),VB=a("FlaxBigBirdPreTrainedModel"),GB=a(" forward method, overrides the "),Vd=n("code"),HB=a("__call__"),JB=a(" special method."),KB=p(),B(Wo.$$.fragment),XB=p(),B(Uo.$$.fragment),$p=p(),Mt=n("h2"),Qo=n("a"),Gd=n("span"),B(Nr.$$.fragment),YB=p(),Hd=n("span"),ZB=a("FlaxBigBirdForTokenClassification"),xp=p(),S=n("div"),B(Sr.$$.fragment),ev=p(),Jd=n("p"),tv=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ov=p(),Dr=n("p"),nv=a("This model inherits from "),Na=n("a"),sv=a("FlaxPreTrainedModel"),rv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),av=p(),Wr=n("p"),iv=a("This model is also a Flax Linen "),Ur=n("a"),lv=a("flax.linen.Module"),dv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cv=p(),Kd=n("p"),pv=a("Finally, this model supports inherent JAX features such as:"),hv=p(),Pe=n("ul"),Xd=n("li"),Qr=n("a"),mv=a("Just-In-Time (JIT) compilation"),gv=p(),Yd=n("li"),Rr=n("a"),fv=a("Automatic Differentiation"),uv=p(),Zd=n("li"),Vr=n("a"),_v=a("Vectorization"),bv=p(),ec=n("li"),Gr=n("a"),kv=a("Parallelization"),Bv=p(),Te=n("div"),B(Hr.$$.fragment),vv=p(),jt=n("p"),yv=a("The "),tc=n("code"),wv=a("FlaxBigBirdPreTrainedModel"),Tv=a(" forward method, overrides the "),oc=n("code"),$v=a("__call__"),xv=a(" special method."),Fv=p(),B(Ro.$$.fragment),qv=p(),B(Vo.$$.fragment),Fp=p(),Ct=n("h2"),Go=n("a"),nc=n("span"),B(Jr.$$.fragment),zv=p(),sc=n("span"),Ev=a("FlaxBigBirdForQuestionAnswering"),qp=p(),D=n("div"),B(Kr.$$.fragment),Mv=p(),Pt=n("p"),jv=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rc=n("code"),Cv=a("span start logits"),Pv=a(" and "),ac=n("code"),Lv=a("span end logits"),Av=a(")."),Ov=p(),Xr=n("p"),Iv=a("This model inherits from "),Sa=n("a"),Nv=a("FlaxPreTrainedModel"),Sv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dv=p(),Yr=n("p"),Wv=a("This model is also a Flax Linen "),Zr=n("a"),Uv=a("flax.linen.Module"),Qv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rv=p(),ic=n("p"),Vv=a("Finally, this model supports inherent JAX features such as:"),Gv=p(),Le=n("ul"),lc=n("li"),ea=n("a"),Hv=a("Just-In-Time (JIT) compilation"),Jv=p(),dc=n("li"),ta=n("a"),Kv=a("Automatic Differentiation"),Xv=p(),cc=n("li"),oa=n("a"),Yv=a("Vectorization"),Zv=p(),pc=n("li"),na=n("a"),ey=a("Parallelization"),ty=p(),$e=n("div"),B(sa.$$.fragment),oy=p(),Lt=n("p"),ny=a("The "),Da=n("a"),sy=a("FlaxBigBirdForQuestionAnswering"),ry=a(" forward method, overrides the "),hc=n("code"),ay=a("__call__"),iy=a(" special method."),ly=p(),B(Ho.$$.fragment),dy=p(),B(Jo.$$.fragment),this.h()},l(o){const u=O$('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var ra=r(g);f=s(ra,"A",{id:!0,class:!0,href:!0});var mc=r(f);b=s(mc,"SPAN",{});var gc=r(b);v(l.$$.fragment,gc),gc.forEach(t),mc.forEach(t),m=h(ra),F=s(ra,"SPAN",{});var fc=r(F);jh=i(fc,"BigBird"),fc.forEach(t),ra.forEach(t),Ic=h(o),Re=s(o,"H2",{class:!0});var aa=r(Re);Ot=s(aa,"A",{id:!0,class:!0,href:!0});var uc=r(Ot);ui=s(uc,"SPAN",{});var _c=r(ui);v(vn.$$.fragment,_c),_c.forEach(t),uc.forEach(t),Ch=h(aa),_i=s(aa,"SPAN",{});var bc=r(_i);Ph=i(bc,"Overview"),bc.forEach(t),aa.forEach(t),Nc=h(o),It=s(o,"P",{});var ia=r(It);Lh=i(ia,"The BigBird model was proposed in "),yn=s(ia,"A",{href:!0,rel:!0});var kc=r(yn);Ah=i(kc,"Big Bird: Transformers for Longer Sequences"),kc.forEach(t),Oh=i(ia,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ia.forEach(t),Sc=h(o),pa=s(o,"P",{});var Bc=r(pa);Ih=i(Bc,"The abstract from the paper is the following:"),Bc.forEach(t),Dc=h(o),ha=s(o,"P",{});var vc=r(ha);bi=s(vc,"EM",{});var yc=r(bi);Nh=i(yc,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),yc.forEach(t),vc.forEach(t),Wc=h(o),ma=s(o,"P",{});var wc=r(ma);Sh=i(wc,"Tips:"),wc.forEach(t),Uc=h(o),Q=s(o,"UL",{});var G=r(Q);wn=s(G,"LI",{});var la=r(wn);Dh=i(la,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Tn=s(la,"A",{href:!0,rel:!0});var Tc=r(Tn);Wh=i(Tc,"this blog post"),Tc.forEach(t),Uh=i(la,"."),la.forEach(t),Qh=h(G),le=s(G,"LI",{});var me=r(le);Rh=i(me,"BigBird comes with 2 implementations: "),ki=s(me,"STRONG",{});var $c=r(ki);Vh=i($c,"original_full"),$c.forEach(t),Gh=i(me," & "),Bi=s(me,"STRONG",{});var xc=r(Bi);Hh=i(xc,"block_sparse"),xc.forEach(t),Jh=i(me,`. For the sequence length < 1024, using
`),vi=s(me,"STRONG",{});var Fc=r(vi);Kh=i(Fc,"original_full"),Fc.forEach(t),Xh=i(me," is advised as there is no benefit in using "),yi=s(me,"STRONG",{});var qc=r(yi);Yh=i(qc,"block_sparse"),qc.forEach(t),Zh=i(me," attention."),me.forEach(t),em=h(G),wi=s(G,"LI",{});var zc=r(wi);tm=i(zc,"The code currently uses window size of 3 blocks and 2 global blocks."),zc.forEach(t),om=h(G),Ti=s(G,"LI",{});var Ec=r(Ti);nm=i(Ec,"Sequence length must be divisible by block size."),Ec.forEach(t),sm=h(G),$n=s(G,"LI",{});var da=r($n);rm=i(da,"Current implementation supports only "),$i=s(da,"STRONG",{});var Mc=r($i);am=i(Mc,"ITC"),Mc.forEach(t),im=i(da,"."),da.forEach(t),lm=h(G),ga=s(G,"LI",{});var Wa=r(ga);dm=i(Wa,"Current implementation doesn\u2019t support "),xi=s(Wa,"STRONG",{});var jc=r(xi);cm=i(jc,"num_random_blocks = 0"),jc.forEach(t),Wa.forEach(t),G.forEach(t),Qc=h(o),Ae=s(o,"P",{});var At=r(Ae);pm=i(At,"This model was contributed by "),xn=s(At,"A",{href:!0,rel:!0});var Cc=r(xn);hm=i(Cc,"vasudevgupta"),Cc.forEach(t),mm=i(At,`. The original code can be found
`),Fn=s(At,"A",{href:!0,rel:!0});var Pc=r(Fn);gm=i(Pc,"here"),Pc.forEach(t),fm=i(At,"."),At.forEach(t),Rc=h(o),Ve=s(o,"H2",{class:!0});var ca=r(Ve);Nt=s(ca,"A",{id:!0,class:!0,href:!0});var Lc=r(Nt);Fi=s(Lc,"SPAN",{});var Ac=r(Fi);v(qn.$$.fragment,Ac),Ac.forEach(t),Lc.forEach(t),um=h(ca),qi=s(ca,"SPAN",{});var Oc=r(qi);_m=i(Oc,"BigBirdConfig"),Oc.forEach(t),ca.forEach(t),Vc=h(o),E=s(o,"DIV",{class:!0});var W=r(E);v(zn.$$.fragment,W),bm=h(W),Ge=s(W,"P",{});var Ua=r(Ge);km=i(Ua,"This is the configuration class to store the configuration of a "),fa=s(Ua,"A",{href:!0});var gy=r(fa);Bm=i(gy,"BigBirdModel"),gy.forEach(t),vm=i(Ua,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),En=s(Ua,"A",{href:!0,rel:!0});var fy=r(En);ym=i(fy,"google/bigbird-roberta-base"),fy.forEach(t),wm=i(Ua," architecture."),Ua.forEach(t),Tm=h(W),He=s(W,"P",{});var Qa=r(He);$m=i(Qa,"Configuration objects inherit from "),ua=s(Qa,"A",{href:!0});var uy=r(ua);xm=i(uy,"PretrainedConfig"),uy.forEach(t),Fm=i(Qa,` and can be used to control the model outputs. Read the
documentation from `),_a=s(Qa,"A",{href:!0});var _y=r(_a);qm=i(_y,"PretrainedConfig"),_y.forEach(t),zm=i(Qa," for more information."),Qa.forEach(t),Em=h(W),v(St.$$.fragment,W),Mm=h(W),zi=s(W,"BLOCKQUOTE",{});var by=r(zi);Ei=s(by,"BLOCKQUOTE",{});var ky=r(Ei);Mi=s(ky,"BLOCKQUOTE",{});var By=r(Mi);ji=s(By,"P",{});var vy=r(ji);jm=i(vy,"from transformers import BigBirdModel, BigBirdConfig"),vy.forEach(t),By.forEach(t),ky.forEach(t),by.forEach(t),Cm=h(W),Ci=s(W,"BLOCKQUOTE",{});var yy=r(Ci);Pi=s(yy,"BLOCKQUOTE",{});var wy=r(Pi);Mn=s(wy,"BLOCKQUOTE",{});var Ep=r(Mn);Dt=s(Ep,"H1",{class:!0});var Mp=r(Dt);Wt=s(Mp,"A",{id:!0,class:!0,href:!0});var Ty=r(Wt);Li=s(Ty,"SPAN",{});var $y=r(Li);v(jn.$$.fragment,$y),$y.forEach(t),Ty.forEach(t),Pm=h(Mp),Ai=s(Mp,"SPAN",{});var xy=r(Ai);Lm=i(xy,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),xy.forEach(t),Mp.forEach(t),Am=h(Ep),Oi=s(Ep,"P",{});var Fy=r(Oi);Om=i(Fy,"BigBirdConfig()"),Fy.forEach(t),Ep.forEach(t),wy.forEach(t),yy.forEach(t),Im=h(W),Ii=s(W,"BLOCKQUOTE",{});var qy=r(Ii);Ni=s(qy,"BLOCKQUOTE",{});var zy=r(Ni);Cn=s(zy,"BLOCKQUOTE",{});var jp=r(Cn);Ut=s(jp,"H1",{class:!0});var Cp=r(Ut);Qt=s(Cp,"A",{id:!0,class:!0,href:!0});var Ey=r(Qt);Si=s(Ey,"SPAN",{});var My=r(Si);v(Pn.$$.fragment,My),My.forEach(t),Ey.forEach(t),Nm=h(Cp),Di=s(Cp,"SPAN",{});var jy=r(Di);Sm=i(jy,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),jy.forEach(t),Cp.forEach(t),Dm=h(jp),Wi=s(jp,"P",{});var Cy=r(Wi);Wm=i(Cy,"BigBirdModel(configuration)"),Cy.forEach(t),jp.forEach(t),zy.forEach(t),qy.forEach(t),Um=h(W),Ui=s(W,"BLOCKQUOTE",{});var Py=r(Ui);Qi=s(Py,"BLOCKQUOTE",{});var Ly=r(Qi);Ri=s(Ly,"BLOCKQUOTE",{});var Ay=r(Ri);Rt=s(Ay,"H1",{class:!0});var Pp=r(Rt);Vt=s(Pp,"A",{id:!0,class:!0,href:!0});var Oy=r(Vt);Vi=s(Oy,"SPAN",{});var Iy=r(Vi);v(Ln.$$.fragment,Iy),Iy.forEach(t),Oy.forEach(t),Qm=h(Pp),Gi=s(Pp,"SPAN",{});var Ny=r(Gi);Rm=i(Ny,"Accessing the model configuration >>> configuration = model.config"),Ny.forEach(t),Pp.forEach(t),Ay.forEach(t),Ly.forEach(t),Py.forEach(t),W.forEach(t),Gc=h(o),Je=s(o,"H2",{class:!0});var Lp=r(Je);Gt=s(Lp,"A",{id:!0,class:!0,href:!0});var Sy=r(Gt);Hi=s(Sy,"SPAN",{});var Dy=r(Hi);v(An.$$.fragment,Dy),Dy.forEach(t),Sy.forEach(t),Vm=h(Lp),Ji=s(Lp,"SPAN",{});var Wy=r(Ji);Gm=i(Wy,"BigBirdTokenizer"),Wy.forEach(t),Lp.forEach(t),Hc=h(o),P=s(o,"DIV",{class:!0});var Z=r(P);v(On.$$.fragment,Z),Hm=h(Z),In=s(Z,"P",{});var Ap=r(In);Jm=i(Ap,"Construct a BigBird tokenizer. Based on "),Nn=s(Ap,"A",{href:!0,rel:!0});var Uy=r(Nn);Km=i(Uy,"SentencePiece"),Uy.forEach(t),Xm=i(Ap,"."),Ap.forEach(t),Ym=h(Z),Sn=s(Z,"P",{});var Op=r(Sn);Zm=i(Op,"This tokenizer inherits from "),ba=s(Op,"A",{href:!0});var Qy=r(ba);eg=i(Qy,"PreTrainedTokenizer"),Qy.forEach(t),tg=i(Op,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Op.forEach(t),og=h(Z),Oe=s(Z,"DIV",{class:!0});var Ra=r(Oe);v(Dn.$$.fragment,Ra),ng=h(Ra),Ki=s(Ra,"P",{});var Ry=r(Ki);sg=i(Ry,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Ry.forEach(t),rg=h(Ra),Wn=s(Ra,"UL",{});var Ip=r(Wn);ka=s(Ip,"LI",{});var cy=r(ka);ag=i(cy,"single sequence: "),Xi=s(cy,"CODE",{});var Vy=r(Xi);ig=i(Vy,"[CLS] X [SEP]"),Vy.forEach(t),cy.forEach(t),lg=h(Ip),Ba=s(Ip,"LI",{});var py=r(Ba);dg=i(py,"pair of sequences: "),Yi=s(py,"CODE",{});var Gy=r(Yi);cg=i(Gy,"[CLS] A [SEP] B [SEP]"),Gy.forEach(t),py.forEach(t),Ip.forEach(t),Ra.forEach(t),pg=h(Z),Ht=s(Z,"DIV",{class:!0});var Np=r(Ht);v(Un.$$.fragment,Np),hg=h(Np),Qn=s(Np,"P",{});var Sp=r(Qn);mg=i(Sp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zi=s(Sp,"CODE",{});var Hy=r(Zi);gg=i(Hy,"prepare_for_model"),Hy.forEach(t),fg=i(Sp," method."),Sp.forEach(t),Np.forEach(t),ug=h(Z),Jt=s(Z,"DIV",{class:!0});var Dp=r(Jt);v(Rn.$$.fragment,Dp),_g=h(Dp),Ke=s(Dp,"P",{});var Va=r(Ke);bg=i(Va,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),el=s(Va,"CODE",{});var Jy=r(el);kg=i(Jy,"token_ids_1"),Jy.forEach(t),Bg=i(Va," is "),tl=s(Va,"CODE",{});var Ky=r(tl);vg=i(Ky,"None"),Ky.forEach(t),yg=i(Va,", this method only returns the first portion of the mask (0s)."),Va.forEach(t),Dp.forEach(t),wg=h(Z),va=s(Z,"DIV",{class:!0});var Xy=r(va);v(Vn.$$.fragment,Xy),Xy.forEach(t),Z.forEach(t),Jc=h(o),Xe=s(o,"H2",{class:!0});var Wp=r(Xe);Kt=s(Wp,"A",{id:!0,class:!0,href:!0});var Yy=r(Kt);ol=s(Yy,"SPAN",{});var Zy=r(ol);v(Gn.$$.fragment,Zy),Zy.forEach(t),Yy.forEach(t),Tg=h(Wp),nl=s(Wp,"SPAN",{});var e1=r(nl);$g=i(e1,"BigBirdTokenizerFast"),e1.forEach(t),Wp.forEach(t),Kc=h(o),R=s(o,"DIV",{class:!0});var Ne=r(R);v(Hn.$$.fragment,Ne),xg=h(Ne),xe=s(Ne,"P",{});var Ko=r(xe);Fg=i(Ko,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),sl=s(Ko,"EM",{});var t1=r(sl);qg=i(t1,"tokenizers"),t1.forEach(t),zg=i(Ko,` library). Based on
`),Jn=s(Ko,"A",{href:!0,rel:!0});var o1=r(Jn);Eg=i(o1,"Unigram"),o1.forEach(t),Mg=i(Ko,`. This
tokenizer inherits from `),ya=s(Ko,"A",{href:!0});var n1=r(ya);jg=i(n1,"PreTrainedTokenizerFast"),n1.forEach(t),Cg=i(Ko,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Ko.forEach(t),Pg=h(Ne),Ie=s(Ne,"DIV",{class:!0});var Ga=r(Ie);v(Kn.$$.fragment,Ga),Lg=h(Ga),rl=s(Ga,"P",{});var s1=r(rl);Ag=i(s1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),s1.forEach(t),Og=h(Ga),Xn=s(Ga,"UL",{});var Up=r(Xn);wa=s(Up,"LI",{});var hy=r(wa);Ig=i(hy,"single sequence: "),al=s(hy,"CODE",{});var r1=r(al);Ng=i(r1,"[CLS] X [SEP]"),r1.forEach(t),hy.forEach(t),Sg=h(Up),Ta=s(Up,"LI",{});var my=r(Ta);Dg=i(my,"pair of sequences: "),il=s(my,"CODE",{});var a1=r(il);Wg=i(a1,"[CLS] A [SEP] B [SEP]"),a1.forEach(t),my.forEach(t),Up.forEach(t),Ga.forEach(t),Ug=h(Ne),ge=s(Ne,"DIV",{class:!0});var Xo=r(ge);v(Yn.$$.fragment,Xo),Qg=h(Xo),ll=s(Xo,"P",{});var i1=r(ll);Rg=i(i1,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),i1.forEach(t),Vg=h(Xo),v(Xt.$$.fragment,Xo),Gg=h(Xo),dl=s(Xo,"P",{});var l1=r(dl);Hg=i(l1,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),l1.forEach(t),Xo.forEach(t),Jg=h(Ne),Yt=s(Ne,"DIV",{class:!0});var Qp=r(Yt);v(Zn.$$.fragment,Qp),Kg=h(Qp),es=s(Qp,"P",{});var Rp=r(es);Xg=i(Rp,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),cl=s(Rp,"CODE",{});var d1=r(cl);Yg=i(d1,"prepare_for_model"),d1.forEach(t),Zg=i(Rp," method."),Rp.forEach(t),Qp.forEach(t),Ne.forEach(t),Xc=h(o),Ye=s(o,"H2",{class:!0});var Vp=r(Ye);Zt=s(Vp,"A",{id:!0,class:!0,href:!0});var c1=r(Zt);pl=s(c1,"SPAN",{});var p1=r(pl);v(ts.$$.fragment,p1),p1.forEach(t),c1.forEach(t),ef=h(Vp),hl=s(Vp,"SPAN",{});var h1=r(hl);tf=i(h1,"BigBird specific outputs"),h1.forEach(t),Vp.forEach(t),Yc=h(o),Ze=s(o,"DIV",{class:!0});var Gp=r(Ze);v(os.$$.fragment,Gp),of=h(Gp),ns=s(Gp,"P",{});var Hp=r(ns);nf=i(Hp,"Output type of "),$a=s(Hp,"A",{href:!0});var m1=r($a);sf=i(m1,"BigBirdForPreTraining"),m1.forEach(t),rf=i(Hp,"."),Hp.forEach(t),Gp.forEach(t),Zc=h(o),et=s(o,"H2",{class:!0});var Jp=r(et);eo=s(Jp,"A",{id:!0,class:!0,href:!0});var g1=r(eo);ml=s(g1,"SPAN",{});var f1=r(ml);v(ss.$$.fragment,f1),f1.forEach(t),g1.forEach(t),af=h(Jp),gl=s(Jp,"SPAN",{});var u1=r(gl);lf=i(u1,"BigBirdModel"),u1.forEach(t),Jp.forEach(t),ep=h(o),V=s(o,"DIV",{class:!0});var Se=r(V);v(rs.$$.fragment,Se),df=h(Se),as=s(Se,"P",{});var Kp=r(as);cf=i(Kp,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),is=s(Kp,"A",{href:!0,rel:!0});var _1=r(is);pf=i(_1,"torch.nn.Module"),_1.forEach(t),hf=i(Kp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kp.forEach(t),mf=h(Se),ls=s(Se,"P",{});var Xp=r(ls);gf=i(Xp,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ds=s(Xp,"A",{href:!0,rel:!0});var b1=r(ds);ff=i(b1,`Attention is
all you need`),b1.forEach(t),uf=i(Xp,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xp.forEach(t),_f=h(Se),U=s(Se,"P",{});var ee=r(U);bf=i(ee,"To behave as an decoder the model needs to be initialized with the "),fl=s(ee,"CODE",{});var k1=r(fl);kf=i(k1,"is_decoder"),k1.forEach(t),Bf=i(ee,` argument of the configuration set
to `),ul=s(ee,"CODE",{});var B1=r(ul);vf=i(B1,"True"),B1.forEach(t),yf=i(ee,". To be used in a Seq2Seq model, the model needs to initialized with both "),_l=s(ee,"CODE",{});var v1=r(_l);wf=i(v1,"is_decoder"),v1.forEach(t),Tf=i(ee,` argument and
`),bl=s(ee,"CODE",{});var y1=r(bl);$f=i(y1,"add_cross_attention"),y1.forEach(t),xf=i(ee," set to "),kl=s(ee,"CODE",{});var w1=r(kl);Ff=i(w1,"True"),w1.forEach(t),qf=i(ee,"; an "),Bl=s(ee,"CODE",{});var T1=r(Bl);zf=i(T1,"encoder_hidden_states"),T1.forEach(t),Ef=i(ee," is then expected as an input to the forward pass."),ee.forEach(t),Mf=h(Se),fe=s(Se,"DIV",{class:!0});var Yo=r(fe);v(cs.$$.fragment,Yo),jf=h(Yo),tt=s(Yo,"P",{});var Ha=r(tt);Cf=i(Ha,"The "),xa=s(Ha,"A",{href:!0});var $1=r(xa);Pf=i($1,"BigBirdModel"),$1.forEach(t),Lf=i(Ha," forward method, overrides the "),vl=s(Ha,"CODE",{});var x1=r(vl);Af=i(x1,"__call__"),x1.forEach(t),Of=i(Ha," special method."),Ha.forEach(t),If=h(Yo),v(to.$$.fragment,Yo),Nf=h(Yo),v(oo.$$.fragment,Yo),Yo.forEach(t),Se.forEach(t),tp=h(o),ot=s(o,"H2",{class:!0});var Yp=r(ot);no=s(Yp,"A",{id:!0,class:!0,href:!0});var F1=r(no);yl=s(F1,"SPAN",{});var q1=r(yl);v(ps.$$.fragment,q1),q1.forEach(t),F1.forEach(t),Sf=h(Yp),wl=s(Yp,"SPAN",{});var z1=r(wl);Df=i(z1,"BigBirdForPreTraining"),z1.forEach(t),Yp.forEach(t),op=h(o),nt=s(o,"DIV",{class:!0});var Zp=r(nt);v(hs.$$.fragment,Zp),Wf=h(Zp),ue=s(Zp,"DIV",{class:!0});var Zo=r(ue);v(ms.$$.fragment,Zo),Uf=h(Zo),st=s(Zo,"P",{});var Ja=r(st);Qf=i(Ja,"The "),Fa=s(Ja,"A",{href:!0});var E1=r(Fa);Rf=i(E1,"BigBirdForPreTraining"),E1.forEach(t),Vf=i(Ja," forward method, overrides the "),Tl=s(Ja,"CODE",{});var M1=r(Tl);Gf=i(M1,"__call__"),M1.forEach(t),Hf=i(Ja," special method."),Ja.forEach(t),Jf=h(Zo),v(so.$$.fragment,Zo),Kf=h(Zo),v(ro.$$.fragment,Zo),Zo.forEach(t),Zp.forEach(t),np=h(o),rt=s(o,"H2",{class:!0});var eh=r(rt);ao=s(eh,"A",{id:!0,class:!0,href:!0});var j1=r(ao);$l=s(j1,"SPAN",{});var C1=r($l);v(gs.$$.fragment,C1),C1.forEach(t),j1.forEach(t),Xf=h(eh),xl=s(eh,"SPAN",{});var P1=r(xl);Yf=i(P1,"BigBirdForCausalLM"),P1.forEach(t),eh.forEach(t),sp=h(o),Fe=s(o,"DIV",{class:!0});var Ka=r(Fe);v(fs.$$.fragment,Ka),Zf=h(Ka),at=s(Ka,"P",{});var Xa=r(at);eu=i(Xa,"BigBird Model with a "),Fl=s(Xa,"CODE",{});var L1=r(Fl);tu=i(L1,"language modeling"),L1.forEach(t),ou=i(Xa,` head on top for CLM fine-tuning.
This model is a PyTorch `),us=s(Xa,"A",{href:!0,rel:!0});var A1=r(us);nu=i(A1,"torch.nn.Module"),A1.forEach(t),su=i(Xa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xa.forEach(t),ru=h(Ka),_e=s(Ka,"DIV",{class:!0});var en=r(_e);v(_s.$$.fragment,en),au=h(en),it=s(en,"P",{});var Ya=r(it);iu=i(Ya,"The "),qa=s(Ya,"A",{href:!0});var O1=r(qa);lu=i(O1,"BigBirdForCausalLM"),O1.forEach(t),du=i(Ya," forward method, overrides the "),ql=s(Ya,"CODE",{});var I1=r(ql);cu=i(I1,"__call__"),I1.forEach(t),pu=i(Ya," special method."),Ya.forEach(t),hu=h(en),v(io.$$.fragment,en),mu=h(en),v(lo.$$.fragment,en),en.forEach(t),Ka.forEach(t),rp=h(o),lt=s(o,"H2",{class:!0});var th=r(lt);co=s(th,"A",{id:!0,class:!0,href:!0});var N1=r(co);zl=s(N1,"SPAN",{});var S1=r(zl);v(bs.$$.fragment,S1),S1.forEach(t),N1.forEach(t),gu=h(th),El=s(th,"SPAN",{});var D1=r(El);fu=i(D1,"BigBirdForMaskedLM"),D1.forEach(t),th.forEach(t),ap=h(o),qe=s(o,"DIV",{class:!0});var Za=r(qe);v(ks.$$.fragment,Za),uu=h(Za),dt=s(Za,"P",{});var ei=r(dt);_u=i(ei,"BigBird Model with a "),Ml=s(ei,"CODE",{});var W1=r(Ml);bu=i(W1,"language modeling"),W1.forEach(t),ku=i(ei,` head on top.
This model is a PyTorch `),Bs=s(ei,"A",{href:!0,rel:!0});var U1=r(Bs);Bu=i(U1,"torch.nn.Module"),U1.forEach(t),vu=i(ei,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ei.forEach(t),yu=h(Za),J=s(Za,"DIV",{class:!0});var De=r(J);v(vs.$$.fragment,De),wu=h(De),ct=s(De,"P",{});var ti=r(ct);Tu=i(ti,"The "),za=s(ti,"A",{href:!0});var Q1=r(za);$u=i(Q1,"BigBirdForMaskedLM"),Q1.forEach(t),xu=i(ti," forward method, overrides the "),jl=s(ti,"CODE",{});var R1=r(jl);Fu=i(R1,"__call__"),R1.forEach(t),qu=i(ti," special method."),ti.forEach(t),zu=h(De),v(po.$$.fragment,De),Eu=h(De),v(ho.$$.fragment,De),Mu=h(De),v(mo.$$.fragment,De),De.forEach(t),Za.forEach(t),ip=h(o),pt=s(o,"H2",{class:!0});var oh=r(pt);go=s(oh,"A",{id:!0,class:!0,href:!0});var V1=r(go);Cl=s(V1,"SPAN",{});var G1=r(Cl);v(ys.$$.fragment,G1),G1.forEach(t),V1.forEach(t),ju=h(oh),Pl=s(oh,"SPAN",{});var H1=r(Pl);Cu=i(H1,"BigBirdForSequenceClassification"),H1.forEach(t),oh.forEach(t),lp=h(o),de=s(o,"DIV",{class:!0});var tn=r(de);v(ws.$$.fragment,tn),Pu=h(tn),Ll=s(tn,"P",{});var J1=r(Ll);Lu=i(J1,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),J1.forEach(t),Au=h(tn),Ts=s(tn,"P",{});var nh=r(Ts);Ou=i(nh,"This model is a PyTorch "),$s=s(nh,"A",{href:!0,rel:!0});var K1=r($s);Iu=i(K1,"torch.nn.Module"),K1.forEach(t),Nu=i(nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nh.forEach(t),Su=h(tn),K=s(tn,"DIV",{class:!0});var We=r(K);v(xs.$$.fragment,We),Du=h(We),ht=s(We,"P",{});var oi=r(ht);Wu=i(oi,"The "),Ea=s(oi,"A",{href:!0});var X1=r(Ea);Uu=i(X1,"BigBirdForSequenceClassification"),X1.forEach(t),Qu=i(oi," forward method, overrides the "),Al=s(oi,"CODE",{});var Y1=r(Al);Ru=i(Y1,"__call__"),Y1.forEach(t),Vu=i(oi," special method."),oi.forEach(t),Gu=h(We),v(fo.$$.fragment,We),Hu=h(We),v(uo.$$.fragment,We),Ju=h(We),v(_o.$$.fragment,We),We.forEach(t),tn.forEach(t),dp=h(o),mt=s(o,"H2",{class:!0});var sh=r(mt);bo=s(sh,"A",{id:!0,class:!0,href:!0});var Z1=r(bo);Ol=s(Z1,"SPAN",{});var ew=r(Ol);v(Fs.$$.fragment,ew),ew.forEach(t),Z1.forEach(t),Ku=h(sh),Il=s(sh,"SPAN",{});var tw=r(Il);Xu=i(tw,"BigBirdForMultipleChoice"),tw.forEach(t),sh.forEach(t),cp=h(o),ce=s(o,"DIV",{class:!0});var on=r(ce);v(qs.$$.fragment,on),Yu=h(on),Nl=s(on,"P",{});var ow=r(Nl);Zu=i(ow,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ow.forEach(t),e_=h(on),zs=s(on,"P",{});var rh=r(zs);t_=i(rh,"This model is a PyTorch "),Es=s(rh,"A",{href:!0,rel:!0});var nw=r(Es);o_=i(nw,"torch.nn.Module"),nw.forEach(t),n_=i(rh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rh.forEach(t),s_=h(on),be=s(on,"DIV",{class:!0});var nn=r(be);v(Ms.$$.fragment,nn),r_=h(nn),gt=s(nn,"P",{});var ni=r(gt);a_=i(ni,"The "),Ma=s(ni,"A",{href:!0});var sw=r(Ma);i_=i(sw,"BigBirdForMultipleChoice"),sw.forEach(t),l_=i(ni," forward method, overrides the "),Sl=s(ni,"CODE",{});var rw=r(Sl);d_=i(rw,"__call__"),rw.forEach(t),c_=i(ni," special method."),ni.forEach(t),p_=h(nn),v(ko.$$.fragment,nn),h_=h(nn),v(Bo.$$.fragment,nn),nn.forEach(t),on.forEach(t),pp=h(o),ft=s(o,"H2",{class:!0});var ah=r(ft);vo=s(ah,"A",{id:!0,class:!0,href:!0});var aw=r(vo);Dl=s(aw,"SPAN",{});var iw=r(Dl);v(js.$$.fragment,iw),iw.forEach(t),aw.forEach(t),m_=h(ah),Wl=s(ah,"SPAN",{});var lw=r(Wl);g_=i(lw,"BigBirdForTokenClassification"),lw.forEach(t),ah.forEach(t),hp=h(o),pe=s(o,"DIV",{class:!0});var sn=r(pe);v(Cs.$$.fragment,sn),f_=h(sn),Ul=s(sn,"P",{});var dw=r(Ul);u_=i(dw,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dw.forEach(t),__=h(sn),Ps=s(sn,"P",{});var ih=r(Ps);b_=i(ih,"This model is a PyTorch "),Ls=s(ih,"A",{href:!0,rel:!0});var cw=r(Ls);k_=i(cw,"torch.nn.Module"),cw.forEach(t),B_=i(ih,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ih.forEach(t),v_=h(sn),X=s(sn,"DIV",{class:!0});var Ue=r(X);v(As.$$.fragment,Ue),y_=h(Ue),ut=s(Ue,"P",{});var si=r(ut);w_=i(si,"The "),ja=s(si,"A",{href:!0});var pw=r(ja);T_=i(pw,"BigBirdForTokenClassification"),pw.forEach(t),$_=i(si," forward method, overrides the "),Ql=s(si,"CODE",{});var hw=r(Ql);x_=i(hw,"__call__"),hw.forEach(t),F_=i(si," special method."),si.forEach(t),q_=h(Ue),v(yo.$$.fragment,Ue),z_=h(Ue),v(wo.$$.fragment,Ue),E_=h(Ue),v(To.$$.fragment,Ue),Ue.forEach(t),sn.forEach(t),mp=h(o),_t=s(o,"H2",{class:!0});var lh=r(_t);$o=s(lh,"A",{id:!0,class:!0,href:!0});var mw=r($o);Rl=s(mw,"SPAN",{});var gw=r(Rl);v(Os.$$.fragment,gw),gw.forEach(t),mw.forEach(t),M_=h(lh),Vl=s(lh,"SPAN",{});var fw=r(Vl);j_=i(fw,"BigBirdForQuestionAnswering"),fw.forEach(t),lh.forEach(t),gp=h(o),he=s(o,"DIV",{class:!0});var rn=r(he);v(Is.$$.fragment,rn),C_=h(rn),bt=s(rn,"P",{});var ri=r(bt);P_=i(ri,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=s(ri,"CODE",{});var uw=r(Gl);L_=i(uw,"span start logits"),uw.forEach(t),A_=i(ri," and "),Hl=s(ri,"CODE",{});var _w=r(Hl);O_=i(_w,"span end logits"),_w.forEach(t),I_=i(ri,")."),ri.forEach(t),N_=h(rn),Ns=s(rn,"P",{});var dh=r(Ns);S_=i(dh,"This model is a PyTorch "),Ss=s(dh,"A",{href:!0,rel:!0});var bw=r(Ss);D_=i(bw,"torch.nn.Module"),bw.forEach(t),W_=i(dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dh.forEach(t),U_=h(rn),Y=s(rn,"DIV",{class:!0});var Qe=r(Y);v(Ds.$$.fragment,Qe),Q_=h(Qe),kt=s(Qe,"P",{});var ai=r(kt);R_=i(ai,"The "),Ca=s(ai,"A",{href:!0});var kw=r(Ca);V_=i(kw,"BigBirdForQuestionAnswering"),kw.forEach(t),G_=i(ai," forward method, overrides the "),Jl=s(ai,"CODE",{});var Bw=r(Jl);H_=i(Bw,"__call__"),Bw.forEach(t),J_=i(ai," special method."),ai.forEach(t),K_=h(Qe),v(xo.$$.fragment,Qe),X_=h(Qe),v(Fo.$$.fragment,Qe),Y_=h(Qe),v(qo.$$.fragment,Qe),Qe.forEach(t),rn.forEach(t),fp=h(o),Bt=s(o,"H2",{class:!0});var ch=r(Bt);zo=s(ch,"A",{id:!0,class:!0,href:!0});var vw=r(zo);Kl=s(vw,"SPAN",{});var yw=r(Kl);v(Ws.$$.fragment,yw),yw.forEach(t),vw.forEach(t),Z_=h(ch),Xl=s(ch,"SPAN",{});var ww=r(Xl);eb=i(ww,"FlaxBigBirdModel"),ww.forEach(t),ch.forEach(t),up=h(o),L=s(o,"DIV",{class:!0});var te=r(L);v(Us.$$.fragment,te),tb=h(te),Yl=s(te,"P",{});var Tw=r(Yl);ob=i(Tw,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),Tw.forEach(t),nb=h(te),Qs=s(te,"P",{});var ph=r(Qs);sb=i(ph,"This model inherits from "),Pa=s(ph,"A",{href:!0});var $w=r(Pa);rb=i($w,"FlaxPreTrainedModel"),$w.forEach(t),ab=i(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ph.forEach(t),ib=h(te),Rs=s(te,"P",{});var hh=r(Rs);lb=i(hh,"This model is also a Flax Linen "),Vs=s(hh,"A",{href:!0,rel:!0});var xw=r(Vs);db=i(xw,"flax.linen.Module"),xw.forEach(t),cb=i(hh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hh.forEach(t),pb=h(te),Zl=s(te,"P",{});var Fw=r(Zl);hb=i(Fw,"Finally, this model supports inherent JAX features such as:"),Fw.forEach(t),mb=h(te),ze=s(te,"UL",{});var an=r(ze);ed=s(an,"LI",{});var qw=r(ed);Gs=s(qw,"A",{href:!0,rel:!0});var zw=r(Gs);gb=i(zw,"Just-In-Time (JIT) compilation"),zw.forEach(t),qw.forEach(t),fb=h(an),td=s(an,"LI",{});var Ew=r(td);Hs=s(Ew,"A",{href:!0,rel:!0});var Mw=r(Hs);ub=i(Mw,"Automatic Differentiation"),Mw.forEach(t),Ew.forEach(t),_b=h(an),od=s(an,"LI",{});var jw=r(od);Js=s(jw,"A",{href:!0,rel:!0});var Cw=r(Js);bb=i(Cw,"Vectorization"),Cw.forEach(t),jw.forEach(t),kb=h(an),nd=s(an,"LI",{});var Pw=r(nd);Ks=s(Pw,"A",{href:!0,rel:!0});var Lw=r(Ks);Bb=i(Lw,"Parallelization"),Lw.forEach(t),Pw.forEach(t),an.forEach(t),vb=h(te),ke=s(te,"DIV",{class:!0});var ln=r(ke);v(Xs.$$.fragment,ln),yb=h(ln),vt=s(ln,"P",{});var ii=r(vt);wb=i(ii,"The "),sd=s(ii,"CODE",{});var Aw=r(sd);Tb=i(Aw,"FlaxBigBirdPreTrainedModel"),Aw.forEach(t),$b=i(ii," forward method, overrides the "),rd=s(ii,"CODE",{});var Ow=r(rd);xb=i(Ow,"__call__"),Ow.forEach(t),Fb=i(ii," special method."),ii.forEach(t),qb=h(ln),v(Eo.$$.fragment,ln),zb=h(ln),v(Mo.$$.fragment,ln),ln.forEach(t),te.forEach(t),_p=h(o),yt=s(o,"H2",{class:!0});var mh=r(yt);jo=s(mh,"A",{id:!0,class:!0,href:!0});var Iw=r(jo);ad=s(Iw,"SPAN",{});var Nw=r(ad);v(Ys.$$.fragment,Nw),Nw.forEach(t),Iw.forEach(t),Eb=h(mh),id=s(mh,"SPAN",{});var Sw=r(id);Mb=i(Sw,"FlaxBigBirdForPreTraining"),Sw.forEach(t),mh.forEach(t),bp=h(o),A=s(o,"DIV",{class:!0});var oe=r(A);v(Zs.$$.fragment,oe),jb=h(oe),wt=s(oe,"P",{});var li=r(wt);Cb=i(li,"BigBird Model with two heads on top as done during the pretraining: a "),ld=s(li,"CODE",{});var Dw=r(ld);Pb=i(Dw,"masked language modeling"),Dw.forEach(t),Lb=i(li," head and a "),dd=s(li,"CODE",{});var Ww=r(dd);Ab=i(Ww,"next sentence prediction (classification)"),Ww.forEach(t),Ob=i(li," head."),li.forEach(t),Ib=h(oe),er=s(oe,"P",{});var gh=r(er);Nb=i(gh,"This model inherits from "),La=s(gh,"A",{href:!0});var Uw=r(La);Sb=i(Uw,"FlaxPreTrainedModel"),Uw.forEach(t),Db=i(gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gh.forEach(t),Wb=h(oe),tr=s(oe,"P",{});var fh=r(tr);Ub=i(fh,"This model is also a Flax Linen "),or=s(fh,"A",{href:!0,rel:!0});var Qw=r(or);Qb=i(Qw,"flax.linen.Module"),Qw.forEach(t),Rb=i(fh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fh.forEach(t),Vb=h(oe),cd=s(oe,"P",{});var Rw=r(cd);Gb=i(Rw,"Finally, this model supports inherent JAX features such as:"),Rw.forEach(t),Hb=h(oe),Ee=s(oe,"UL",{});var dn=r(Ee);pd=s(dn,"LI",{});var Vw=r(pd);nr=s(Vw,"A",{href:!0,rel:!0});var Gw=r(nr);Jb=i(Gw,"Just-In-Time (JIT) compilation"),Gw.forEach(t),Vw.forEach(t),Kb=h(dn),hd=s(dn,"LI",{});var Hw=r(hd);sr=s(Hw,"A",{href:!0,rel:!0});var Jw=r(sr);Xb=i(Jw,"Automatic Differentiation"),Jw.forEach(t),Hw.forEach(t),Yb=h(dn),md=s(dn,"LI",{});var Kw=r(md);rr=s(Kw,"A",{href:!0,rel:!0});var Xw=r(rr);Zb=i(Xw,"Vectorization"),Xw.forEach(t),Kw.forEach(t),ek=h(dn),gd=s(dn,"LI",{});var Yw=r(gd);ar=s(Yw,"A",{href:!0,rel:!0});var Zw=r(ar);tk=i(Zw,"Parallelization"),Zw.forEach(t),Yw.forEach(t),dn.forEach(t),ok=h(oe),Be=s(oe,"DIV",{class:!0});var cn=r(Be);v(ir.$$.fragment,cn),nk=h(cn),Tt=s(cn,"P",{});var di=r(Tt);sk=i(di,"The "),fd=s(di,"CODE",{});var eT=r(fd);rk=i(eT,"FlaxBigBirdPreTrainedModel"),eT.forEach(t),ak=i(di," forward method, overrides the "),ud=s(di,"CODE",{});var tT=r(ud);ik=i(tT,"__call__"),tT.forEach(t),lk=i(di," special method."),di.forEach(t),dk=h(cn),v(Co.$$.fragment,cn),ck=h(cn),v(Po.$$.fragment,cn),cn.forEach(t),oe.forEach(t),kp=h(o),$t=s(o,"H2",{class:!0});var uh=r($t);Lo=s(uh,"A",{id:!0,class:!0,href:!0});var oT=r(Lo);_d=s(oT,"SPAN",{});var nT=r(_d);v(lr.$$.fragment,nT),nT.forEach(t),oT.forEach(t),pk=h(uh),bd=s(uh,"SPAN",{});var sT=r(bd);hk=i(sT,"FlaxBigBirdForMaskedLM"),sT.forEach(t),uh.forEach(t),Bp=h(o),O=s(o,"DIV",{class:!0});var ne=r(O);v(dr.$$.fragment,ne),mk=h(ne),cr=s(ne,"P",{});var _h=r(cr);gk=i(_h,"BigBird Model with a "),kd=s(_h,"CODE",{});var rT=r(kd);fk=i(rT,"language modeling"),rT.forEach(t),uk=i(_h," head on top."),_h.forEach(t),_k=h(ne),pr=s(ne,"P",{});var bh=r(pr);bk=i(bh,"This model inherits from "),Aa=s(bh,"A",{href:!0});var aT=r(Aa);kk=i(aT,"FlaxPreTrainedModel"),aT.forEach(t),Bk=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bh.forEach(t),vk=h(ne),hr=s(ne,"P",{});var kh=r(hr);yk=i(kh,"This model is also a Flax Linen "),mr=s(kh,"A",{href:!0,rel:!0});var iT=r(mr);wk=i(iT,"flax.linen.Module"),iT.forEach(t),Tk=i(kh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kh.forEach(t),$k=h(ne),Bd=s(ne,"P",{});var lT=r(Bd);xk=i(lT,"Finally, this model supports inherent JAX features such as:"),lT.forEach(t),Fk=h(ne),Me=s(ne,"UL",{});var pn=r(Me);vd=s(pn,"LI",{});var dT=r(vd);gr=s(dT,"A",{href:!0,rel:!0});var cT=r(gr);qk=i(cT,"Just-In-Time (JIT) compilation"),cT.forEach(t),dT.forEach(t),zk=h(pn),yd=s(pn,"LI",{});var pT=r(yd);fr=s(pT,"A",{href:!0,rel:!0});var hT=r(fr);Ek=i(hT,"Automatic Differentiation"),hT.forEach(t),pT.forEach(t),Mk=h(pn),wd=s(pn,"LI",{});var mT=r(wd);ur=s(mT,"A",{href:!0,rel:!0});var gT=r(ur);jk=i(gT,"Vectorization"),gT.forEach(t),mT.forEach(t),Ck=h(pn),Td=s(pn,"LI",{});var fT=r(Td);_r=s(fT,"A",{href:!0,rel:!0});var uT=r(_r);Pk=i(uT,"Parallelization"),uT.forEach(t),fT.forEach(t),pn.forEach(t),Lk=h(ne),ve=s(ne,"DIV",{class:!0});var hn=r(ve);v(br.$$.fragment,hn),Ak=h(hn),xt=s(hn,"P",{});var ci=r(xt);Ok=i(ci,"The "),$d=s(ci,"CODE",{});var _T=r($d);Ik=i(_T,"FlaxBigBirdPreTrainedModel"),_T.forEach(t),Nk=i(ci," forward method, overrides the "),xd=s(ci,"CODE",{});var bT=r(xd);Sk=i(bT,"__call__"),bT.forEach(t),Dk=i(ci," special method."),ci.forEach(t),Wk=h(hn),v(Ao.$$.fragment,hn),Uk=h(hn),v(Oo.$$.fragment,hn),hn.forEach(t),ne.forEach(t),vp=h(o),Ft=s(o,"H2",{class:!0});var Bh=r(Ft);Io=s(Bh,"A",{id:!0,class:!0,href:!0});var kT=r(Io);Fd=s(kT,"SPAN",{});var BT=r(Fd);v(kr.$$.fragment,BT),BT.forEach(t),kT.forEach(t),Qk=h(Bh),qd=s(Bh,"SPAN",{});var vT=r(qd);Rk=i(vT,"FlaxBigBirdForSequenceClassification"),vT.forEach(t),Bh.forEach(t),yp=h(o),I=s(o,"DIV",{class:!0});var se=r(I);v(Br.$$.fragment,se),Vk=h(se),zd=s(se,"P",{});var yT=r(zd);Gk=i(yT,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yT.forEach(t),Hk=h(se),vr=s(se,"P",{});var vh=r(vr);Jk=i(vh,"This model inherits from "),Oa=s(vh,"A",{href:!0});var wT=r(Oa);Kk=i(wT,"FlaxPreTrainedModel"),wT.forEach(t),Xk=i(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vh.forEach(t),Yk=h(se),yr=s(se,"P",{});var yh=r(yr);Zk=i(yh,"This model is also a Flax Linen "),wr=s(yh,"A",{href:!0,rel:!0});var TT=r(wr);eB=i(TT,"flax.linen.Module"),TT.forEach(t),tB=i(yh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yh.forEach(t),oB=h(se),Ed=s(se,"P",{});var $T=r(Ed);nB=i($T,"Finally, this model supports inherent JAX features such as:"),$T.forEach(t),sB=h(se),je=s(se,"UL",{});var mn=r(je);Md=s(mn,"LI",{});var xT=r(Md);Tr=s(xT,"A",{href:!0,rel:!0});var FT=r(Tr);rB=i(FT,"Just-In-Time (JIT) compilation"),FT.forEach(t),xT.forEach(t),aB=h(mn),jd=s(mn,"LI",{});var qT=r(jd);$r=s(qT,"A",{href:!0,rel:!0});var zT=r($r);iB=i(zT,"Automatic Differentiation"),zT.forEach(t),qT.forEach(t),lB=h(mn),Cd=s(mn,"LI",{});var ET=r(Cd);xr=s(ET,"A",{href:!0,rel:!0});var MT=r(xr);dB=i(MT,"Vectorization"),MT.forEach(t),ET.forEach(t),cB=h(mn),Pd=s(mn,"LI",{});var jT=r(Pd);Fr=s(jT,"A",{href:!0,rel:!0});var CT=r(Fr);pB=i(CT,"Parallelization"),CT.forEach(t),jT.forEach(t),mn.forEach(t),hB=h(se),ye=s(se,"DIV",{class:!0});var gn=r(ye);v(qr.$$.fragment,gn),mB=h(gn),qt=s(gn,"P",{});var pi=r(qt);gB=i(pi,"The "),Ld=s(pi,"CODE",{});var PT=r(Ld);fB=i(PT,"FlaxBigBirdPreTrainedModel"),PT.forEach(t),uB=i(pi," forward method, overrides the "),Ad=s(pi,"CODE",{});var LT=r(Ad);_B=i(LT,"__call__"),LT.forEach(t),bB=i(pi," special method."),pi.forEach(t),kB=h(gn),v(No.$$.fragment,gn),BB=h(gn),v(So.$$.fragment,gn),gn.forEach(t),se.forEach(t),wp=h(o),zt=s(o,"H2",{class:!0});var wh=r(zt);Do=s(wh,"A",{id:!0,class:!0,href:!0});var AT=r(Do);Od=s(AT,"SPAN",{});var OT=r(Od);v(zr.$$.fragment,OT),OT.forEach(t),AT.forEach(t),vB=h(wh),Id=s(wh,"SPAN",{});var IT=r(Id);yB=i(IT,"FlaxBigBirdForMultipleChoice"),IT.forEach(t),wh.forEach(t),Tp=h(o),N=s(o,"DIV",{class:!0});var re=r(N);v(Er.$$.fragment,re),wB=h(re),Nd=s(re,"P",{});var NT=r(Nd);TB=i(NT,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),NT.forEach(t),$B=h(re),Mr=s(re,"P",{});var Th=r(Mr);xB=i(Th,"This model inherits from "),Ia=s(Th,"A",{href:!0});var ST=r(Ia);FB=i(ST,"FlaxPreTrainedModel"),ST.forEach(t),qB=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Th.forEach(t),zB=h(re),jr=s(re,"P",{});var $h=r(jr);EB=i($h,"This model is also a Flax Linen "),Cr=s($h,"A",{href:!0,rel:!0});var DT=r(Cr);MB=i(DT,"flax.linen.Module"),DT.forEach(t),jB=i($h,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$h.forEach(t),CB=h(re),Sd=s(re,"P",{});var WT=r(Sd);PB=i(WT,"Finally, this model supports inherent JAX features such as:"),WT.forEach(t),LB=h(re),Ce=s(re,"UL",{});var fn=r(Ce);Dd=s(fn,"LI",{});var UT=r(Dd);Pr=s(UT,"A",{href:!0,rel:!0});var QT=r(Pr);AB=i(QT,"Just-In-Time (JIT) compilation"),QT.forEach(t),UT.forEach(t),OB=h(fn),Wd=s(fn,"LI",{});var RT=r(Wd);Lr=s(RT,"A",{href:!0,rel:!0});var VT=r(Lr);IB=i(VT,"Automatic Differentiation"),VT.forEach(t),RT.forEach(t),NB=h(fn),Ud=s(fn,"LI",{});var GT=r(Ud);Ar=s(GT,"A",{href:!0,rel:!0});var HT=r(Ar);SB=i(HT,"Vectorization"),HT.forEach(t),GT.forEach(t),DB=h(fn),Qd=s(fn,"LI",{});var JT=r(Qd);Or=s(JT,"A",{href:!0,rel:!0});var KT=r(Or);WB=i(KT,"Parallelization"),KT.forEach(t),JT.forEach(t),fn.forEach(t),UB=h(re),we=s(re,"DIV",{class:!0});var un=r(we);v(Ir.$$.fragment,un),QB=h(un),Et=s(un,"P",{});var hi=r(Et);RB=i(hi,"The "),Rd=s(hi,"CODE",{});var XT=r(Rd);VB=i(XT,"FlaxBigBirdPreTrainedModel"),XT.forEach(t),GB=i(hi," forward method, overrides the "),Vd=s(hi,"CODE",{});var YT=r(Vd);HB=i(YT,"__call__"),YT.forEach(t),JB=i(hi," special method."),hi.forEach(t),KB=h(un),v(Wo.$$.fragment,un),XB=h(un),v(Uo.$$.fragment,un),un.forEach(t),re.forEach(t),$p=h(o),Mt=s(o,"H2",{class:!0});var xh=r(Mt);Qo=s(xh,"A",{id:!0,class:!0,href:!0});var ZT=r(Qo);Gd=s(ZT,"SPAN",{});var e$=r(Gd);v(Nr.$$.fragment,e$),e$.forEach(t),ZT.forEach(t),YB=h(xh),Hd=s(xh,"SPAN",{});var t$=r(Hd);ZB=i(t$,"FlaxBigBirdForTokenClassification"),t$.forEach(t),xh.forEach(t),xp=h(o),S=s(o,"DIV",{class:!0});var ae=r(S);v(Sr.$$.fragment,ae),ev=h(ae),Jd=s(ae,"P",{});var o$=r(Jd);tv=i(o$,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),o$.forEach(t),ov=h(ae),Dr=s(ae,"P",{});var Fh=r(Dr);nv=i(Fh,"This model inherits from "),Na=s(Fh,"A",{href:!0});var n$=r(Na);sv=i(n$,"FlaxPreTrainedModel"),n$.forEach(t),rv=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fh.forEach(t),av=h(ae),Wr=s(ae,"P",{});var qh=r(Wr);iv=i(qh,"This model is also a Flax Linen "),Ur=s(qh,"A",{href:!0,rel:!0});var s$=r(Ur);lv=i(s$,"flax.linen.Module"),s$.forEach(t),dv=i(qh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qh.forEach(t),cv=h(ae),Kd=s(ae,"P",{});var r$=r(Kd);pv=i(r$,"Finally, this model supports inherent JAX features such as:"),r$.forEach(t),hv=h(ae),Pe=s(ae,"UL",{});var _n=r(Pe);Xd=s(_n,"LI",{});var a$=r(Xd);Qr=s(a$,"A",{href:!0,rel:!0});var i$=r(Qr);mv=i(i$,"Just-In-Time (JIT) compilation"),i$.forEach(t),a$.forEach(t),gv=h(_n),Yd=s(_n,"LI",{});var l$=r(Yd);Rr=s(l$,"A",{href:!0,rel:!0});var d$=r(Rr);fv=i(d$,"Automatic Differentiation"),d$.forEach(t),l$.forEach(t),uv=h(_n),Zd=s(_n,"LI",{});var c$=r(Zd);Vr=s(c$,"A",{href:!0,rel:!0});var p$=r(Vr);_v=i(p$,"Vectorization"),p$.forEach(t),c$.forEach(t),bv=h(_n),ec=s(_n,"LI",{});var h$=r(ec);Gr=s(h$,"A",{href:!0,rel:!0});var m$=r(Gr);kv=i(m$,"Parallelization"),m$.forEach(t),h$.forEach(t),_n.forEach(t),Bv=h(ae),Te=s(ae,"DIV",{class:!0});var bn=r(Te);v(Hr.$$.fragment,bn),vv=h(bn),jt=s(bn,"P",{});var mi=r(jt);yv=i(mi,"The "),tc=s(mi,"CODE",{});var g$=r(tc);wv=i(g$,"FlaxBigBirdPreTrainedModel"),g$.forEach(t),Tv=i(mi," forward method, overrides the "),oc=s(mi,"CODE",{});var f$=r(oc);$v=i(f$,"__call__"),f$.forEach(t),xv=i(mi," special method."),mi.forEach(t),Fv=h(bn),v(Ro.$$.fragment,bn),qv=h(bn),v(Vo.$$.fragment,bn),bn.forEach(t),ae.forEach(t),Fp=h(o),Ct=s(o,"H2",{class:!0});var zh=r(Ct);Go=s(zh,"A",{id:!0,class:!0,href:!0});var u$=r(Go);nc=s(u$,"SPAN",{});var _$=r(nc);v(Jr.$$.fragment,_$),_$.forEach(t),u$.forEach(t),zv=h(zh),sc=s(zh,"SPAN",{});var b$=r(sc);Ev=i(b$,"FlaxBigBirdForQuestionAnswering"),b$.forEach(t),zh.forEach(t),qp=h(o),D=s(o,"DIV",{class:!0});var ie=r(D);v(Kr.$$.fragment,ie),Mv=h(ie),Pt=s(ie,"P",{});var gi=r(Pt);jv=i(gi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rc=s(gi,"CODE",{});var k$=r(rc);Cv=i(k$,"span start logits"),k$.forEach(t),Pv=i(gi," and "),ac=s(gi,"CODE",{});var B$=r(ac);Lv=i(B$,"span end logits"),B$.forEach(t),Av=i(gi,")."),gi.forEach(t),Ov=h(ie),Xr=s(ie,"P",{});var Eh=r(Xr);Iv=i(Eh,"This model inherits from "),Sa=s(Eh,"A",{href:!0});var v$=r(Sa);Nv=i(v$,"FlaxPreTrainedModel"),v$.forEach(t),Sv=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eh.forEach(t),Dv=h(ie),Yr=s(ie,"P",{});var Mh=r(Yr);Wv=i(Mh,"This model is also a Flax Linen "),Zr=s(Mh,"A",{href:!0,rel:!0});var y$=r(Zr);Uv=i(y$,"flax.linen.Module"),y$.forEach(t),Qv=i(Mh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mh.forEach(t),Rv=h(ie),ic=s(ie,"P",{});var w$=r(ic);Vv=i(w$,"Finally, this model supports inherent JAX features such as:"),w$.forEach(t),Gv=h(ie),Le=s(ie,"UL",{});var kn=r(Le);lc=s(kn,"LI",{});var T$=r(lc);ea=s(T$,"A",{href:!0,rel:!0});var $$=r(ea);Hv=i($$,"Just-In-Time (JIT) compilation"),$$.forEach(t),T$.forEach(t),Jv=h(kn),dc=s(kn,"LI",{});var x$=r(dc);ta=s(x$,"A",{href:!0,rel:!0});var F$=r(ta);Kv=i(F$,"Automatic Differentiation"),F$.forEach(t),x$.forEach(t),Xv=h(kn),cc=s(kn,"LI",{});var q$=r(cc);oa=s(q$,"A",{href:!0,rel:!0});var z$=r(oa);Yv=i(z$,"Vectorization"),z$.forEach(t),q$.forEach(t),Zv=h(kn),pc=s(kn,"LI",{});var E$=r(pc);na=s(E$,"A",{href:!0,rel:!0});var M$=r(na);ey=i(M$,"Parallelization"),M$.forEach(t),E$.forEach(t),kn.forEach(t),ty=h(ie),$e=s(ie,"DIV",{class:!0});var Bn=r($e);v(sa.$$.fragment,Bn),oy=h(Bn),Lt=s(Bn,"P",{});var fi=r(Lt);ny=i(fi,"The "),Da=s(fi,"A",{href:!0});var j$=r(Da);sy=i(j$,"FlaxBigBirdForQuestionAnswering"),j$.forEach(t),ry=i(fi," forward method, overrides the "),hc=s(fi,"CODE",{});var C$=r(hc);ay=i(C$,"__call__"),C$.forEach(t),iy=i(fi," special method."),fi.forEach(t),ly=h(Bn),v(Ho.$$.fragment,Bn),dy=h(Bn),v(Jo.$$.fragment,Bn),Bn.forEach(t),ie.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(y2)),c(f,"id","bigbird"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#bigbird"),c(g,"class","relative group"),c(Ot,"id","overview"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#overview"),c(Re,"class","relative group"),c(yn,"href","https://arxiv.org/abs/2007.14062"),c(yn,"rel","nofollow"),c(Tn,"href","https://huggingface.co/blog/big-bird"),c(Tn,"rel","nofollow"),c(xn,"href","https://huggingface.co/vasudevgupta"),c(xn,"rel","nofollow"),c(Fn,"href","https://github.com/google-research/bigbird"),c(Fn,"rel","nofollow"),c(Nt,"id","transformers.BigBirdConfig"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.BigBirdConfig"),c(Ve,"class","relative group"),c(fa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(En,"href","https://huggingface.co/google/bigbird-roberta-base"),c(En,"rel","nofollow"),c(ua,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(_a,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Wt,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Dt,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Ut,"class","relative group"),c(Vt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Rt,"class","relative group"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gt,"id","transformers.BigBirdTokenizer"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BigBirdTokenizer"),c(Je,"class","relative group"),c(Nn,"href","https://github.com/google/sentencepiece"),c(Nn,"rel","nofollow"),c(ba,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(va,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"id","transformers.BigBirdTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.BigBirdTokenizerFast"),c(Xe,"class","relative group"),c(Jn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(Jn,"rel","nofollow"),c(ya,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(Ye,"class","relative group"),c($a,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.BigBirdModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.BigBirdModel"),c(et,"class","relative group"),c(is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(is,"rel","nofollow"),c(ds,"href","https://arxiv.org/abs/1706.03762"),c(ds,"rel","nofollow"),c(xa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.BigBirdForPreTraining"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.BigBirdForPreTraining"),c(ot,"class","relative group"),c(Fa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.BigBirdForCausalLM"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.BigBirdForCausalLM"),c(rt,"class","relative group"),c(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(us,"rel","nofollow"),c(qa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(co,"id","transformers.BigBirdForMaskedLM"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.BigBirdForMaskedLM"),c(lt,"class","relative group"),c(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bs,"rel","nofollow"),c(za,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.BigBirdForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.BigBirdForSequenceClassification"),c(pt,"class","relative group"),c($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($s,"rel","nofollow"),c(Ea,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bo,"id","transformers.BigBirdForMultipleChoice"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.BigBirdForMultipleChoice"),c(mt,"class","relative group"),c(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Es,"rel","nofollow"),c(Ma,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.BigBirdForTokenClassification"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.BigBirdForTokenClassification"),c(ft,"class","relative group"),c(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ls,"rel","nofollow"),c(ja,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($o,"id","transformers.BigBirdForQuestionAnswering"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.BigBirdForQuestionAnswering"),c(_t,"class","relative group"),c(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ss,"rel","nofollow"),c(Ca,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"id","transformers.FlaxBigBirdModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxBigBirdModel"),c(Bt,"class","relative group"),c(Pa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Vs,"rel","nofollow"),c(Gs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Gs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Hs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ks,"rel","nofollow"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jo,"id","transformers.FlaxBigBirdForPreTraining"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.FlaxBigBirdForPreTraining"),c(yt,"class","relative group"),c(La,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(or,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(or,"rel","nofollow"),c(nr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(nr,"rel","nofollow"),c(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ar,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lo,"id","transformers.FlaxBigBirdForMaskedLM"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.FlaxBigBirdForMaskedLM"),c($t,"class","relative group"),c(Aa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(mr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(mr,"rel","nofollow"),c(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(gr,"rel","nofollow"),c(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_r,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Ft,"class","relative group"),c(Oa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(wr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(wr,"rel","nofollow"),c(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Tr,"rel","nofollow"),c($r,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c($r,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Fr,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(zt,"class","relative group"),c(Ia,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Cr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Cr,"rel","nofollow"),c(Pr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Pr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Lr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ar,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Or,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qo,"id","transformers.FlaxBigBirdForTokenClassification"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Mt,"class","relative group"),c(Na,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ur,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ur,"rel","nofollow"),c(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Qr,"rel","nofollow"),c(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Rr,"rel","nofollow"),c(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Gr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Go,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Ct,"class","relative group"),c(Sa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Zr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Zr,"rel","nofollow"),c(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ea,"rel","nofollow"),c(ta,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(na,"rel","nofollow"),c(Da,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,g,u),e(g,f),e(f,b),y(l,b,null),e(g,m),e(g,F),e(F,jh),k(o,Ic,u),k(o,Re,u),e(Re,Ot),e(Ot,ui),y(vn,ui,null),e(Re,Ch),e(Re,_i),e(_i,Ph),k(o,Nc,u),k(o,It,u),e(It,Lh),e(It,yn),e(yn,Ah),e(It,Oh),k(o,Sc,u),k(o,pa,u),e(pa,Ih),k(o,Dc,u),k(o,ha,u),e(ha,bi),e(bi,Nh),k(o,Wc,u),k(o,ma,u),e(ma,Sh),k(o,Uc,u),k(o,Q,u),e(Q,wn),e(wn,Dh),e(wn,Tn),e(Tn,Wh),e(wn,Uh),e(Q,Qh),e(Q,le),e(le,Rh),e(le,ki),e(ki,Vh),e(le,Gh),e(le,Bi),e(Bi,Hh),e(le,Jh),e(le,vi),e(vi,Kh),e(le,Xh),e(le,yi),e(yi,Yh),e(le,Zh),e(Q,em),e(Q,wi),e(wi,tm),e(Q,om),e(Q,Ti),e(Ti,nm),e(Q,sm),e(Q,$n),e($n,rm),e($n,$i),e($i,am),e($n,im),e(Q,lm),e(Q,ga),e(ga,dm),e(ga,xi),e(xi,cm),k(o,Qc,u),k(o,Ae,u),e(Ae,pm),e(Ae,xn),e(xn,hm),e(Ae,mm),e(Ae,Fn),e(Fn,gm),e(Ae,fm),k(o,Rc,u),k(o,Ve,u),e(Ve,Nt),e(Nt,Fi),y(qn,Fi,null),e(Ve,um),e(Ve,qi),e(qi,_m),k(o,Vc,u),k(o,E,u),y(zn,E,null),e(E,bm),e(E,Ge),e(Ge,km),e(Ge,fa),e(fa,Bm),e(Ge,vm),e(Ge,En),e(En,ym),e(Ge,wm),e(E,Tm),e(E,He),e(He,$m),e(He,ua),e(ua,xm),e(He,Fm),e(He,_a),e(_a,qm),e(He,zm),e(E,Em),y(St,E,null),e(E,Mm),e(E,zi),e(zi,Ei),e(Ei,Mi),e(Mi,ji),e(ji,jm),e(E,Cm),e(E,Ci),e(Ci,Pi),e(Pi,Mn),e(Mn,Dt),e(Dt,Wt),e(Wt,Li),y(jn,Li,null),e(Dt,Pm),e(Dt,Ai),e(Ai,Lm),e(Mn,Am),e(Mn,Oi),e(Oi,Om),e(E,Im),e(E,Ii),e(Ii,Ni),e(Ni,Cn),e(Cn,Ut),e(Ut,Qt),e(Qt,Si),y(Pn,Si,null),e(Ut,Nm),e(Ut,Di),e(Di,Sm),e(Cn,Dm),e(Cn,Wi),e(Wi,Wm),e(E,Um),e(E,Ui),e(Ui,Qi),e(Qi,Ri),e(Ri,Rt),e(Rt,Vt),e(Vt,Vi),y(Ln,Vi,null),e(Rt,Qm),e(Rt,Gi),e(Gi,Rm),k(o,Gc,u),k(o,Je,u),e(Je,Gt),e(Gt,Hi),y(An,Hi,null),e(Je,Vm),e(Je,Ji),e(Ji,Gm),k(o,Hc,u),k(o,P,u),y(On,P,null),e(P,Hm),e(P,In),e(In,Jm),e(In,Nn),e(Nn,Km),e(In,Xm),e(P,Ym),e(P,Sn),e(Sn,Zm),e(Sn,ba),e(ba,eg),e(Sn,tg),e(P,og),e(P,Oe),y(Dn,Oe,null),e(Oe,ng),e(Oe,Ki),e(Ki,sg),e(Oe,rg),e(Oe,Wn),e(Wn,ka),e(ka,ag),e(ka,Xi),e(Xi,ig),e(Wn,lg),e(Wn,Ba),e(Ba,dg),e(Ba,Yi),e(Yi,cg),e(P,pg),e(P,Ht),y(Un,Ht,null),e(Ht,hg),e(Ht,Qn),e(Qn,mg),e(Qn,Zi),e(Zi,gg),e(Qn,fg),e(P,ug),e(P,Jt),y(Rn,Jt,null),e(Jt,_g),e(Jt,Ke),e(Ke,bg),e(Ke,el),e(el,kg),e(Ke,Bg),e(Ke,tl),e(tl,vg),e(Ke,yg),e(P,wg),e(P,va),y(Vn,va,null),k(o,Jc,u),k(o,Xe,u),e(Xe,Kt),e(Kt,ol),y(Gn,ol,null),e(Xe,Tg),e(Xe,nl),e(nl,$g),k(o,Kc,u),k(o,R,u),y(Hn,R,null),e(R,xg),e(R,xe),e(xe,Fg),e(xe,sl),e(sl,qg),e(xe,zg),e(xe,Jn),e(Jn,Eg),e(xe,Mg),e(xe,ya),e(ya,jg),e(xe,Cg),e(R,Pg),e(R,Ie),y(Kn,Ie,null),e(Ie,Lg),e(Ie,rl),e(rl,Ag),e(Ie,Og),e(Ie,Xn),e(Xn,wa),e(wa,Ig),e(wa,al),e(al,Ng),e(Xn,Sg),e(Xn,Ta),e(Ta,Dg),e(Ta,il),e(il,Wg),e(R,Ug),e(R,ge),y(Yn,ge,null),e(ge,Qg),e(ge,ll),e(ll,Rg),e(ge,Vg),y(Xt,ge,null),e(ge,Gg),e(ge,dl),e(dl,Hg),e(R,Jg),e(R,Yt),y(Zn,Yt,null),e(Yt,Kg),e(Yt,es),e(es,Xg),e(es,cl),e(cl,Yg),e(es,Zg),k(o,Xc,u),k(o,Ye,u),e(Ye,Zt),e(Zt,pl),y(ts,pl,null),e(Ye,ef),e(Ye,hl),e(hl,tf),k(o,Yc,u),k(o,Ze,u),y(os,Ze,null),e(Ze,of),e(Ze,ns),e(ns,nf),e(ns,$a),e($a,sf),e(ns,rf),k(o,Zc,u),k(o,et,u),e(et,eo),e(eo,ml),y(ss,ml,null),e(et,af),e(et,gl),e(gl,lf),k(o,ep,u),k(o,V,u),y(rs,V,null),e(V,df),e(V,as),e(as,cf),e(as,is),e(is,pf),e(as,hf),e(V,mf),e(V,ls),e(ls,gf),e(ls,ds),e(ds,ff),e(ls,uf),e(V,_f),e(V,U),e(U,bf),e(U,fl),e(fl,kf),e(U,Bf),e(U,ul),e(ul,vf),e(U,yf),e(U,_l),e(_l,wf),e(U,Tf),e(U,bl),e(bl,$f),e(U,xf),e(U,kl),e(kl,Ff),e(U,qf),e(U,Bl),e(Bl,zf),e(U,Ef),e(V,Mf),e(V,fe),y(cs,fe,null),e(fe,jf),e(fe,tt),e(tt,Cf),e(tt,xa),e(xa,Pf),e(tt,Lf),e(tt,vl),e(vl,Af),e(tt,Of),e(fe,If),y(to,fe,null),e(fe,Nf),y(oo,fe,null),k(o,tp,u),k(o,ot,u),e(ot,no),e(no,yl),y(ps,yl,null),e(ot,Sf),e(ot,wl),e(wl,Df),k(o,op,u),k(o,nt,u),y(hs,nt,null),e(nt,Wf),e(nt,ue),y(ms,ue,null),e(ue,Uf),e(ue,st),e(st,Qf),e(st,Fa),e(Fa,Rf),e(st,Vf),e(st,Tl),e(Tl,Gf),e(st,Hf),e(ue,Jf),y(so,ue,null),e(ue,Kf),y(ro,ue,null),k(o,np,u),k(o,rt,u),e(rt,ao),e(ao,$l),y(gs,$l,null),e(rt,Xf),e(rt,xl),e(xl,Yf),k(o,sp,u),k(o,Fe,u),y(fs,Fe,null),e(Fe,Zf),e(Fe,at),e(at,eu),e(at,Fl),e(Fl,tu),e(at,ou),e(at,us),e(us,nu),e(at,su),e(Fe,ru),e(Fe,_e),y(_s,_e,null),e(_e,au),e(_e,it),e(it,iu),e(it,qa),e(qa,lu),e(it,du),e(it,ql),e(ql,cu),e(it,pu),e(_e,hu),y(io,_e,null),e(_e,mu),y(lo,_e,null),k(o,rp,u),k(o,lt,u),e(lt,co),e(co,zl),y(bs,zl,null),e(lt,gu),e(lt,El),e(El,fu),k(o,ap,u),k(o,qe,u),y(ks,qe,null),e(qe,uu),e(qe,dt),e(dt,_u),e(dt,Ml),e(Ml,bu),e(dt,ku),e(dt,Bs),e(Bs,Bu),e(dt,vu),e(qe,yu),e(qe,J),y(vs,J,null),e(J,wu),e(J,ct),e(ct,Tu),e(ct,za),e(za,$u),e(ct,xu),e(ct,jl),e(jl,Fu),e(ct,qu),e(J,zu),y(po,J,null),e(J,Eu),y(ho,J,null),e(J,Mu),y(mo,J,null),k(o,ip,u),k(o,pt,u),e(pt,go),e(go,Cl),y(ys,Cl,null),e(pt,ju),e(pt,Pl),e(Pl,Cu),k(o,lp,u),k(o,de,u),y(ws,de,null),e(de,Pu),e(de,Ll),e(Ll,Lu),e(de,Au),e(de,Ts),e(Ts,Ou),e(Ts,$s),e($s,Iu),e(Ts,Nu),e(de,Su),e(de,K),y(xs,K,null),e(K,Du),e(K,ht),e(ht,Wu),e(ht,Ea),e(Ea,Uu),e(ht,Qu),e(ht,Al),e(Al,Ru),e(ht,Vu),e(K,Gu),y(fo,K,null),e(K,Hu),y(uo,K,null),e(K,Ju),y(_o,K,null),k(o,dp,u),k(o,mt,u),e(mt,bo),e(bo,Ol),y(Fs,Ol,null),e(mt,Ku),e(mt,Il),e(Il,Xu),k(o,cp,u),k(o,ce,u),y(qs,ce,null),e(ce,Yu),e(ce,Nl),e(Nl,Zu),e(ce,e_),e(ce,zs),e(zs,t_),e(zs,Es),e(Es,o_),e(zs,n_),e(ce,s_),e(ce,be),y(Ms,be,null),e(be,r_),e(be,gt),e(gt,a_),e(gt,Ma),e(Ma,i_),e(gt,l_),e(gt,Sl),e(Sl,d_),e(gt,c_),e(be,p_),y(ko,be,null),e(be,h_),y(Bo,be,null),k(o,pp,u),k(o,ft,u),e(ft,vo),e(vo,Dl),y(js,Dl,null),e(ft,m_),e(ft,Wl),e(Wl,g_),k(o,hp,u),k(o,pe,u),y(Cs,pe,null),e(pe,f_),e(pe,Ul),e(Ul,u_),e(pe,__),e(pe,Ps),e(Ps,b_),e(Ps,Ls),e(Ls,k_),e(Ps,B_),e(pe,v_),e(pe,X),y(As,X,null),e(X,y_),e(X,ut),e(ut,w_),e(ut,ja),e(ja,T_),e(ut,$_),e(ut,Ql),e(Ql,x_),e(ut,F_),e(X,q_),y(yo,X,null),e(X,z_),y(wo,X,null),e(X,E_),y(To,X,null),k(o,mp,u),k(o,_t,u),e(_t,$o),e($o,Rl),y(Os,Rl,null),e(_t,M_),e(_t,Vl),e(Vl,j_),k(o,gp,u),k(o,he,u),y(Is,he,null),e(he,C_),e(he,bt),e(bt,P_),e(bt,Gl),e(Gl,L_),e(bt,A_),e(bt,Hl),e(Hl,O_),e(bt,I_),e(he,N_),e(he,Ns),e(Ns,S_),e(Ns,Ss),e(Ss,D_),e(Ns,W_),e(he,U_),e(he,Y),y(Ds,Y,null),e(Y,Q_),e(Y,kt),e(kt,R_),e(kt,Ca),e(Ca,V_),e(kt,G_),e(kt,Jl),e(Jl,H_),e(kt,J_),e(Y,K_),y(xo,Y,null),e(Y,X_),y(Fo,Y,null),e(Y,Y_),y(qo,Y,null),k(o,fp,u),k(o,Bt,u),e(Bt,zo),e(zo,Kl),y(Ws,Kl,null),e(Bt,Z_),e(Bt,Xl),e(Xl,eb),k(o,up,u),k(o,L,u),y(Us,L,null),e(L,tb),e(L,Yl),e(Yl,ob),e(L,nb),e(L,Qs),e(Qs,sb),e(Qs,Pa),e(Pa,rb),e(Qs,ab),e(L,ib),e(L,Rs),e(Rs,lb),e(Rs,Vs),e(Vs,db),e(Rs,cb),e(L,pb),e(L,Zl),e(Zl,hb),e(L,mb),e(L,ze),e(ze,ed),e(ed,Gs),e(Gs,gb),e(ze,fb),e(ze,td),e(td,Hs),e(Hs,ub),e(ze,_b),e(ze,od),e(od,Js),e(Js,bb),e(ze,kb),e(ze,nd),e(nd,Ks),e(Ks,Bb),e(L,vb),e(L,ke),y(Xs,ke,null),e(ke,yb),e(ke,vt),e(vt,wb),e(vt,sd),e(sd,Tb),e(vt,$b),e(vt,rd),e(rd,xb),e(vt,Fb),e(ke,qb),y(Eo,ke,null),e(ke,zb),y(Mo,ke,null),k(o,_p,u),k(o,yt,u),e(yt,jo),e(jo,ad),y(Ys,ad,null),e(yt,Eb),e(yt,id),e(id,Mb),k(o,bp,u),k(o,A,u),y(Zs,A,null),e(A,jb),e(A,wt),e(wt,Cb),e(wt,ld),e(ld,Pb),e(wt,Lb),e(wt,dd),e(dd,Ab),e(wt,Ob),e(A,Ib),e(A,er),e(er,Nb),e(er,La),e(La,Sb),e(er,Db),e(A,Wb),e(A,tr),e(tr,Ub),e(tr,or),e(or,Qb),e(tr,Rb),e(A,Vb),e(A,cd),e(cd,Gb),e(A,Hb),e(A,Ee),e(Ee,pd),e(pd,nr),e(nr,Jb),e(Ee,Kb),e(Ee,hd),e(hd,sr),e(sr,Xb),e(Ee,Yb),e(Ee,md),e(md,rr),e(rr,Zb),e(Ee,ek),e(Ee,gd),e(gd,ar),e(ar,tk),e(A,ok),e(A,Be),y(ir,Be,null),e(Be,nk),e(Be,Tt),e(Tt,sk),e(Tt,fd),e(fd,rk),e(Tt,ak),e(Tt,ud),e(ud,ik),e(Tt,lk),e(Be,dk),y(Co,Be,null),e(Be,ck),y(Po,Be,null),k(o,kp,u),k(o,$t,u),e($t,Lo),e(Lo,_d),y(lr,_d,null),e($t,pk),e($t,bd),e(bd,hk),k(o,Bp,u),k(o,O,u),y(dr,O,null),e(O,mk),e(O,cr),e(cr,gk),e(cr,kd),e(kd,fk),e(cr,uk),e(O,_k),e(O,pr),e(pr,bk),e(pr,Aa),e(Aa,kk),e(pr,Bk),e(O,vk),e(O,hr),e(hr,yk),e(hr,mr),e(mr,wk),e(hr,Tk),e(O,$k),e(O,Bd),e(Bd,xk),e(O,Fk),e(O,Me),e(Me,vd),e(vd,gr),e(gr,qk),e(Me,zk),e(Me,yd),e(yd,fr),e(fr,Ek),e(Me,Mk),e(Me,wd),e(wd,ur),e(ur,jk),e(Me,Ck),e(Me,Td),e(Td,_r),e(_r,Pk),e(O,Lk),e(O,ve),y(br,ve,null),e(ve,Ak),e(ve,xt),e(xt,Ok),e(xt,$d),e($d,Ik),e(xt,Nk),e(xt,xd),e(xd,Sk),e(xt,Dk),e(ve,Wk),y(Ao,ve,null),e(ve,Uk),y(Oo,ve,null),k(o,vp,u),k(o,Ft,u),e(Ft,Io),e(Io,Fd),y(kr,Fd,null),e(Ft,Qk),e(Ft,qd),e(qd,Rk),k(o,yp,u),k(o,I,u),y(Br,I,null),e(I,Vk),e(I,zd),e(zd,Gk),e(I,Hk),e(I,vr),e(vr,Jk),e(vr,Oa),e(Oa,Kk),e(vr,Xk),e(I,Yk),e(I,yr),e(yr,Zk),e(yr,wr),e(wr,eB),e(yr,tB),e(I,oB),e(I,Ed),e(Ed,nB),e(I,sB),e(I,je),e(je,Md),e(Md,Tr),e(Tr,rB),e(je,aB),e(je,jd),e(jd,$r),e($r,iB),e(je,lB),e(je,Cd),e(Cd,xr),e(xr,dB),e(je,cB),e(je,Pd),e(Pd,Fr),e(Fr,pB),e(I,hB),e(I,ye),y(qr,ye,null),e(ye,mB),e(ye,qt),e(qt,gB),e(qt,Ld),e(Ld,fB),e(qt,uB),e(qt,Ad),e(Ad,_B),e(qt,bB),e(ye,kB),y(No,ye,null),e(ye,BB),y(So,ye,null),k(o,wp,u),k(o,zt,u),e(zt,Do),e(Do,Od),y(zr,Od,null),e(zt,vB),e(zt,Id),e(Id,yB),k(o,Tp,u),k(o,N,u),y(Er,N,null),e(N,wB),e(N,Nd),e(Nd,TB),e(N,$B),e(N,Mr),e(Mr,xB),e(Mr,Ia),e(Ia,FB),e(Mr,qB),e(N,zB),e(N,jr),e(jr,EB),e(jr,Cr),e(Cr,MB),e(jr,jB),e(N,CB),e(N,Sd),e(Sd,PB),e(N,LB),e(N,Ce),e(Ce,Dd),e(Dd,Pr),e(Pr,AB),e(Ce,OB),e(Ce,Wd),e(Wd,Lr),e(Lr,IB),e(Ce,NB),e(Ce,Ud),e(Ud,Ar),e(Ar,SB),e(Ce,DB),e(Ce,Qd),e(Qd,Or),e(Or,WB),e(N,UB),e(N,we),y(Ir,we,null),e(we,QB),e(we,Et),e(Et,RB),e(Et,Rd),e(Rd,VB),e(Et,GB),e(Et,Vd),e(Vd,HB),e(Et,JB),e(we,KB),y(Wo,we,null),e(we,XB),y(Uo,we,null),k(o,$p,u),k(o,Mt,u),e(Mt,Qo),e(Qo,Gd),y(Nr,Gd,null),e(Mt,YB),e(Mt,Hd),e(Hd,ZB),k(o,xp,u),k(o,S,u),y(Sr,S,null),e(S,ev),e(S,Jd),e(Jd,tv),e(S,ov),e(S,Dr),e(Dr,nv),e(Dr,Na),e(Na,sv),e(Dr,rv),e(S,av),e(S,Wr),e(Wr,iv),e(Wr,Ur),e(Ur,lv),e(Wr,dv),e(S,cv),e(S,Kd),e(Kd,pv),e(S,hv),e(S,Pe),e(Pe,Xd),e(Xd,Qr),e(Qr,mv),e(Pe,gv),e(Pe,Yd),e(Yd,Rr),e(Rr,fv),e(Pe,uv),e(Pe,Zd),e(Zd,Vr),e(Vr,_v),e(Pe,bv),e(Pe,ec),e(ec,Gr),e(Gr,kv),e(S,Bv),e(S,Te),y(Hr,Te,null),e(Te,vv),e(Te,jt),e(jt,yv),e(jt,tc),e(tc,wv),e(jt,Tv),e(jt,oc),e(oc,$v),e(jt,xv),e(Te,Fv),y(Ro,Te,null),e(Te,qv),y(Vo,Te,null),k(o,Fp,u),k(o,Ct,u),e(Ct,Go),e(Go,nc),y(Jr,nc,null),e(Ct,zv),e(Ct,sc),e(sc,Ev),k(o,qp,u),k(o,D,u),y(Kr,D,null),e(D,Mv),e(D,Pt),e(Pt,jv),e(Pt,rc),e(rc,Cv),e(Pt,Pv),e(Pt,ac),e(ac,Lv),e(Pt,Av),e(D,Ov),e(D,Xr),e(Xr,Iv),e(Xr,Sa),e(Sa,Nv),e(Xr,Sv),e(D,Dv),e(D,Yr),e(Yr,Wv),e(Yr,Zr),e(Zr,Uv),e(Yr,Qv),e(D,Rv),e(D,ic),e(ic,Vv),e(D,Gv),e(D,Le),e(Le,lc),e(lc,ea),e(ea,Hv),e(Le,Jv),e(Le,dc),e(dc,ta),e(ta,Kv),e(Le,Xv),e(Le,cc),e(cc,oa),e(oa,Yv),e(Le,Zv),e(Le,pc),e(pc,na),e(na,ey),e(D,ty),e(D,$e),y(sa,$e,null),e($e,oy),e($e,Lt),e(Lt,ny),e(Lt,Da),e(Da,sy),e(Lt,ry),e(Lt,hc),e(hc,ay),e(Lt,iy),e($e,ly),y(Ho,$e,null),e($e,dy),y(Jo,$e,null),zp=!0},p(o,[u]){const ra={};u&2&&(ra.$$scope={dirty:u,ctx:o}),St.$set(ra);const mc={};u&2&&(mc.$$scope={dirty:u,ctx:o}),Xt.$set(mc);const gc={};u&2&&(gc.$$scope={dirty:u,ctx:o}),to.$set(gc);const fc={};u&2&&(fc.$$scope={dirty:u,ctx:o}),oo.$set(fc);const aa={};u&2&&(aa.$$scope={dirty:u,ctx:o}),so.$set(aa);const uc={};u&2&&(uc.$$scope={dirty:u,ctx:o}),ro.$set(uc);const _c={};u&2&&(_c.$$scope={dirty:u,ctx:o}),io.$set(_c);const bc={};u&2&&(bc.$$scope={dirty:u,ctx:o}),lo.$set(bc);const ia={};u&2&&(ia.$$scope={dirty:u,ctx:o}),po.$set(ia);const kc={};u&2&&(kc.$$scope={dirty:u,ctx:o}),ho.$set(kc);const Bc={};u&2&&(Bc.$$scope={dirty:u,ctx:o}),mo.$set(Bc);const vc={};u&2&&(vc.$$scope={dirty:u,ctx:o}),fo.$set(vc);const yc={};u&2&&(yc.$$scope={dirty:u,ctx:o}),uo.$set(yc);const wc={};u&2&&(wc.$$scope={dirty:u,ctx:o}),_o.$set(wc);const G={};u&2&&(G.$$scope={dirty:u,ctx:o}),ko.$set(G);const la={};u&2&&(la.$$scope={dirty:u,ctx:o}),Bo.$set(la);const Tc={};u&2&&(Tc.$$scope={dirty:u,ctx:o}),yo.$set(Tc);const me={};u&2&&(me.$$scope={dirty:u,ctx:o}),wo.$set(me);const $c={};u&2&&($c.$$scope={dirty:u,ctx:o}),To.$set($c);const xc={};u&2&&(xc.$$scope={dirty:u,ctx:o}),xo.$set(xc);const Fc={};u&2&&(Fc.$$scope={dirty:u,ctx:o}),Fo.$set(Fc);const qc={};u&2&&(qc.$$scope={dirty:u,ctx:o}),qo.$set(qc);const zc={};u&2&&(zc.$$scope={dirty:u,ctx:o}),Eo.$set(zc);const Ec={};u&2&&(Ec.$$scope={dirty:u,ctx:o}),Mo.$set(Ec);const da={};u&2&&(da.$$scope={dirty:u,ctx:o}),Co.$set(da);const Mc={};u&2&&(Mc.$$scope={dirty:u,ctx:o}),Po.$set(Mc);const Wa={};u&2&&(Wa.$$scope={dirty:u,ctx:o}),Ao.$set(Wa);const jc={};u&2&&(jc.$$scope={dirty:u,ctx:o}),Oo.$set(jc);const At={};u&2&&(At.$$scope={dirty:u,ctx:o}),No.$set(At);const Cc={};u&2&&(Cc.$$scope={dirty:u,ctx:o}),So.$set(Cc);const Pc={};u&2&&(Pc.$$scope={dirty:u,ctx:o}),Wo.$set(Pc);const ca={};u&2&&(ca.$$scope={dirty:u,ctx:o}),Uo.$set(ca);const Lc={};u&2&&(Lc.$$scope={dirty:u,ctx:o}),Ro.$set(Lc);const Ac={};u&2&&(Ac.$$scope={dirty:u,ctx:o}),Vo.$set(Ac);const Oc={};u&2&&(Oc.$$scope={dirty:u,ctx:o}),Ho.$set(Oc);const W={};u&2&&(W.$$scope={dirty:u,ctx:o}),Jo.$set(W)},i(o){zp||(w(l.$$.fragment,o),w(vn.$$.fragment,o),w(qn.$$.fragment,o),w(zn.$$.fragment,o),w(St.$$.fragment,o),w(jn.$$.fragment,o),w(Pn.$$.fragment,o),w(Ln.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(Dn.$$.fragment,o),w(Un.$$.fragment,o),w(Rn.$$.fragment,o),w(Vn.$$.fragment,o),w(Gn.$$.fragment,o),w(Hn.$$.fragment,o),w(Kn.$$.fragment,o),w(Yn.$$.fragment,o),w(Xt.$$.fragment,o),w(Zn.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(cs.$$.fragment,o),w(to.$$.fragment,o),w(oo.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(so.$$.fragment,o),w(ro.$$.fragment,o),w(gs.$$.fragment,o),w(fs.$$.fragment,o),w(_s.$$.fragment,o),w(io.$$.fragment,o),w(lo.$$.fragment,o),w(bs.$$.fragment,o),w(ks.$$.fragment,o),w(vs.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(mo.$$.fragment,o),w(ys.$$.fragment,o),w(ws.$$.fragment,o),w(xs.$$.fragment,o),w(fo.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(Fs.$$.fragment,o),w(qs.$$.fragment,o),w(Ms.$$.fragment,o),w(ko.$$.fragment,o),w(Bo.$$.fragment,o),w(js.$$.fragment,o),w(Cs.$$.fragment,o),w(As.$$.fragment,o),w(yo.$$.fragment,o),w(wo.$$.fragment,o),w(To.$$.fragment,o),w(Os.$$.fragment,o),w(Is.$$.fragment,o),w(Ds.$$.fragment,o),w(xo.$$.fragment,o),w(Fo.$$.fragment,o),w(qo.$$.fragment,o),w(Ws.$$.fragment,o),w(Us.$$.fragment,o),w(Xs.$$.fragment,o),w(Eo.$$.fragment,o),w(Mo.$$.fragment,o),w(Ys.$$.fragment,o),w(Zs.$$.fragment,o),w(ir.$$.fragment,o),w(Co.$$.fragment,o),w(Po.$$.fragment,o),w(lr.$$.fragment,o),w(dr.$$.fragment,o),w(br.$$.fragment,o),w(Ao.$$.fragment,o),w(Oo.$$.fragment,o),w(kr.$$.fragment,o),w(Br.$$.fragment,o),w(qr.$$.fragment,o),w(No.$$.fragment,o),w(So.$$.fragment,o),w(zr.$$.fragment,o),w(Er.$$.fragment,o),w(Ir.$$.fragment,o),w(Wo.$$.fragment,o),w(Uo.$$.fragment,o),w(Nr.$$.fragment,o),w(Sr.$$.fragment,o),w(Hr.$$.fragment,o),w(Ro.$$.fragment,o),w(Vo.$$.fragment,o),w(Jr.$$.fragment,o),w(Kr.$$.fragment,o),w(sa.$$.fragment,o),w(Ho.$$.fragment,o),w(Jo.$$.fragment,o),zp=!0)},o(o){T(l.$$.fragment,o),T(vn.$$.fragment,o),T(qn.$$.fragment,o),T(zn.$$.fragment,o),T(St.$$.fragment,o),T(jn.$$.fragment,o),T(Pn.$$.fragment,o),T(Ln.$$.fragment,o),T(An.$$.fragment,o),T(On.$$.fragment,o),T(Dn.$$.fragment,o),T(Un.$$.fragment,o),T(Rn.$$.fragment,o),T(Vn.$$.fragment,o),T(Gn.$$.fragment,o),T(Hn.$$.fragment,o),T(Kn.$$.fragment,o),T(Yn.$$.fragment,o),T(Xt.$$.fragment,o),T(Zn.$$.fragment,o),T(ts.$$.fragment,o),T(os.$$.fragment,o),T(ss.$$.fragment,o),T(rs.$$.fragment,o),T(cs.$$.fragment,o),T(to.$$.fragment,o),T(oo.$$.fragment,o),T(ps.$$.fragment,o),T(hs.$$.fragment,o),T(ms.$$.fragment,o),T(so.$$.fragment,o),T(ro.$$.fragment,o),T(gs.$$.fragment,o),T(fs.$$.fragment,o),T(_s.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(bs.$$.fragment,o),T(ks.$$.fragment,o),T(vs.$$.fragment,o),T(po.$$.fragment,o),T(ho.$$.fragment,o),T(mo.$$.fragment,o),T(ys.$$.fragment,o),T(ws.$$.fragment,o),T(xs.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(_o.$$.fragment,o),T(Fs.$$.fragment,o),T(qs.$$.fragment,o),T(Ms.$$.fragment,o),T(ko.$$.fragment,o),T(Bo.$$.fragment,o),T(js.$$.fragment,o),T(Cs.$$.fragment,o),T(As.$$.fragment,o),T(yo.$$.fragment,o),T(wo.$$.fragment,o),T(To.$$.fragment,o),T(Os.$$.fragment,o),T(Is.$$.fragment,o),T(Ds.$$.fragment,o),T(xo.$$.fragment,o),T(Fo.$$.fragment,o),T(qo.$$.fragment,o),T(Ws.$$.fragment,o),T(Us.$$.fragment,o),T(Xs.$$.fragment,o),T(Eo.$$.fragment,o),T(Mo.$$.fragment,o),T(Ys.$$.fragment,o),T(Zs.$$.fragment,o),T(ir.$$.fragment,o),T(Co.$$.fragment,o),T(Po.$$.fragment,o),T(lr.$$.fragment,o),T(dr.$$.fragment,o),T(br.$$.fragment,o),T(Ao.$$.fragment,o),T(Oo.$$.fragment,o),T(kr.$$.fragment,o),T(Br.$$.fragment,o),T(qr.$$.fragment,o),T(No.$$.fragment,o),T(So.$$.fragment,o),T(zr.$$.fragment,o),T(Er.$$.fragment,o),T(Ir.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Nr.$$.fragment,o),T(Sr.$$.fragment,o),T(Hr.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Jr.$$.fragment,o),T(Kr.$$.fragment,o),T(sa.$$.fragment,o),T(Ho.$$.fragment,o),T(Jo.$$.fragment,o),zp=!1},d(o){t(d),o&&t(_),o&&t(g),$(l),o&&t(Ic),o&&t(Re),$(vn),o&&t(Nc),o&&t(It),o&&t(Sc),o&&t(pa),o&&t(Dc),o&&t(ha),o&&t(Wc),o&&t(ma),o&&t(Uc),o&&t(Q),o&&t(Qc),o&&t(Ae),o&&t(Rc),o&&t(Ve),$(qn),o&&t(Vc),o&&t(E),$(zn),$(St),$(jn),$(Pn),$(Ln),o&&t(Gc),o&&t(Je),$(An),o&&t(Hc),o&&t(P),$(On),$(Dn),$(Un),$(Rn),$(Vn),o&&t(Jc),o&&t(Xe),$(Gn),o&&t(Kc),o&&t(R),$(Hn),$(Kn),$(Yn),$(Xt),$(Zn),o&&t(Xc),o&&t(Ye),$(ts),o&&t(Yc),o&&t(Ze),$(os),o&&t(Zc),o&&t(et),$(ss),o&&t(ep),o&&t(V),$(rs),$(cs),$(to),$(oo),o&&t(tp),o&&t(ot),$(ps),o&&t(op),o&&t(nt),$(hs),$(ms),$(so),$(ro),o&&t(np),o&&t(rt),$(gs),o&&t(sp),o&&t(Fe),$(fs),$(_s),$(io),$(lo),o&&t(rp),o&&t(lt),$(bs),o&&t(ap),o&&t(qe),$(ks),$(vs),$(po),$(ho),$(mo),o&&t(ip),o&&t(pt),$(ys),o&&t(lp),o&&t(de),$(ws),$(xs),$(fo),$(uo),$(_o),o&&t(dp),o&&t(mt),$(Fs),o&&t(cp),o&&t(ce),$(qs),$(Ms),$(ko),$(Bo),o&&t(pp),o&&t(ft),$(js),o&&t(hp),o&&t(pe),$(Cs),$(As),$(yo),$(wo),$(To),o&&t(mp),o&&t(_t),$(Os),o&&t(gp),o&&t(he),$(Is),$(Ds),$(xo),$(Fo),$(qo),o&&t(fp),o&&t(Bt),$(Ws),o&&t(up),o&&t(L),$(Us),$(Xs),$(Eo),$(Mo),o&&t(_p),o&&t(yt),$(Ys),o&&t(bp),o&&t(A),$(Zs),$(ir),$(Co),$(Po),o&&t(kp),o&&t($t),$(lr),o&&t(Bp),o&&t(O),$(dr),$(br),$(Ao),$(Oo),o&&t(vp),o&&t(Ft),$(kr),o&&t(yp),o&&t(I),$(Br),$(qr),$(No),$(So),o&&t(wp),o&&t(zt),$(zr),o&&t(Tp),o&&t(N),$(Er),$(Ir),$(Wo),$(Uo),o&&t($p),o&&t(Mt),$(Nr),o&&t(xp),o&&t(S),$(Sr),$(Hr),$(Ro),$(Vo),o&&t(Fp),o&&t(Ct),$(Jr),o&&t(qp),o&&t(D),$(Kr),$(sa),$(Ho),$(Jo)}}}const y2={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function w2(x){return I$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class E2 extends P${constructor(d){super();L$(this,d,w2,v2,A$,{})}}export{E2 as default,y2 as metadata};
