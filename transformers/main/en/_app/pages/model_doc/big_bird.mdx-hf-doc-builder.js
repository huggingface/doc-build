import{S as hx,i as mx,s as gx,e as n,k as p,w as B,t as a,M as fx,c as s,d as t,m as h,a as r,x as v,h as i,b as c,G as e,g as k,y,q as w,o as $,B as T,v as ux,L as E}from"../../chunks/vendor-hf-doc-builder.js";import{T as V}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as M}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function _x(x){let d,_,g,f,b;return f=new j({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function bx(x){let d,_,g,f,b;return f=new j({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"sequence pair mask has the following format:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function kx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Bx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function vx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function yx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function wx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function $x(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Tx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function xx(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;maximum&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Fx(x){let d,_;return d=new j({props:{code:`labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.08</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function qx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function zx(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Mx(x){let d,_;return d=new j({props:{code:`num_labels = len(model.config.id2label)
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
<span class="hljs-number">1.13</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function Ex(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function jx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Cx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Px(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Lx(x){let d,_;return d=new j({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function Ax(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Ox(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;80 \xB0C (176 \xB0F) or more&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Ix(x){let d,_;return d=new j({props:{code:`target_start_index, target_end_index = torch.tensor([130]), torch.tensor([132])
outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">130</span>]), torch.tensor([<span class="hljs-number">132</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.63</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function Nx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Sx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Dx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Wx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Ux(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Qx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForCausalLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Rx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Vx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Gx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Hx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Jx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Kx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Xx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Yx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function Zx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function eF(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function tF(x){let d,_,g,f,b,l,m,F,_m,bp,Je,Qt,Ni,Cn,bm,Si,km,kp,Rt,Bm,Pn,vm,ym,Bp,Ca,wm,vp,Pa,Di,$m,yp,La,Tm,wp,R,Ln,xm,An,Fm,qm,zm,ce,Mm,Wi,Em,jm,Ui,Cm,Pm,Qi,Lm,Am,Ri,Om,Im,Nm,Vi,Sm,Dm,Gi,Wm,Um,On,Qm,Hi,Rm,Vm,Gm,Aa,Hm,Ji,Jm,$p,Se,Km,In,Xm,Ym,Nn,Zm,eg,Tp,Ke,Vt,Ki,Sn,tg,Xi,og,xp,C,Dn,ng,Xe,sg,Oa,rg,ag,Wn,ig,lg,dg,Ye,cg,Ia,pg,hg,Na,mg,gg,fg,Gt,ug,Yi,Zi,el,tl,_g,bg,ol,nl,Un,Ht,Jt,sl,Qn,kg,rl,Bg,vg,al,yg,wg,il,ll,Rn,Kt,Xt,dl,Vn,$g,cl,Tg,xg,pl,Fg,qg,hl,ml,gl,Yt,Zt,fl,Gn,zg,ul,Mg,Fp,Ze,eo,_l,Hn,Eg,bl,jg,qp,P,Jn,Cg,Kn,Pg,Xn,Lg,Ag,Og,Yn,Ig,Sa,Ng,Sg,Dg,De,Zn,Wg,kl,Ug,Qg,es,Da,Rg,Bl,Vg,Gg,Wa,Hg,vl,Jg,Kg,to,ts,Xg,os,Yg,yl,Zg,ef,tf,oo,ns,of,et,nf,wl,sf,rf,$l,af,lf,df,Ua,ss,zp,tt,no,Tl,rs,cf,xl,pf,Mp,G,as,hf,ze,mf,Fl,gf,ff,is,uf,_f,Qa,bf,kf,Bf,We,ls,vf,ql,yf,wf,ds,Ra,$f,zl,Tf,xf,Va,Ff,Ml,qf,zf,ue,cs,Mf,El,Ef,jf,so,Cf,jl,Pf,Lf,ro,ps,Af,hs,Of,Cl,If,Nf,Ep,ot,ao,Pl,ms,Sf,Ll,Df,jp,nt,gs,Wf,fs,Uf,Ga,Qf,Rf,Cp,st,io,Al,us,Vf,Ol,Gf,Pp,H,_s,Hf,bs,Jf,ks,Kf,Xf,Yf,Bs,Zf,vs,eu,tu,ou,Q,nu,Il,su,ru,Nl,au,iu,Sl,lu,du,Dl,cu,pu,Wl,hu,mu,Ul,gu,fu,uu,_e,ys,_u,rt,bu,Ha,ku,Bu,Ql,vu,yu,wu,lo,$u,co,Lp,at,po,Rl,ws,Tu,Vl,xu,Ap,it,$s,Fu,be,Ts,qu,lt,zu,Ja,Mu,Eu,Gl,ju,Cu,Pu,ho,Lu,mo,Op,dt,go,Hl,xs,Au,Jl,Ou,Ip,Me,Fs,Iu,ct,Nu,Kl,Su,Du,qs,Wu,Uu,Qu,ke,zs,Ru,pt,Vu,Ka,Gu,Hu,Xl,Ju,Ku,Xu,fo,Yu,uo,Np,ht,_o,Yl,Ms,Zu,Zl,e_,Sp,Ee,Es,t_,mt,o_,ed,n_,s_,js,r_,a_,i_,K,Cs,l_,gt,d_,Xa,c_,p_,td,h_,m_,g_,bo,f_,ko,u_,Bo,Dp,ft,vo,od,Ps,__,nd,b_,Wp,pe,Ls,k_,sd,B_,v_,As,y_,Os,w_,$_,T_,X,Is,x_,ut,F_,Ya,q_,z_,rd,M_,E_,j_,yo,C_,wo,P_,$o,Up,_t,To,ad,Ns,L_,id,A_,Qp,he,Ss,O_,ld,I_,N_,Ds,S_,Ws,D_,W_,U_,Be,Us,Q_,bt,R_,Za,V_,G_,dd,H_,J_,K_,xo,X_,Fo,Rp,kt,qo,cd,Qs,Y_,pd,Z_,Vp,me,Rs,eb,hd,tb,ob,Vs,nb,Gs,sb,rb,ab,Y,Hs,ib,Bt,lb,ei,db,cb,md,pb,hb,mb,zo,gb,Mo,fb,Eo,Gp,vt,jo,gd,Js,ub,fd,_b,Hp,ge,Ks,bb,yt,kb,ud,Bb,vb,_d,yb,wb,$b,Xs,Tb,Ys,xb,Fb,qb,Z,Zs,zb,wt,Mb,ti,Eb,jb,bd,Cb,Pb,Lb,Co,Ab,Po,Ob,Lo,Jp,$t,Ao,kd,er,Ib,Bd,Nb,Kp,L,tr,Sb,vd,Db,Wb,or,Ub,oi,Qb,Rb,Vb,nr,Gb,sr,Hb,Jb,Kb,yd,Xb,Yb,je,wd,rr,Zb,ek,$d,ar,tk,ok,Td,ir,nk,sk,xd,lr,rk,ak,ve,dr,ik,Tt,lk,Fd,dk,ck,qd,pk,hk,mk,Oo,gk,Io,Xp,xt,No,zd,cr,fk,Md,uk,Yp,A,pr,_k,Ft,bk,Ed,kk,Bk,jd,vk,yk,wk,hr,$k,ni,Tk,xk,Fk,mr,qk,gr,zk,Mk,Ek,Cd,jk,Ck,Ce,Pd,fr,Pk,Lk,Ld,ur,Ak,Ok,Ad,_r,Ik,Nk,Od,br,Sk,Dk,ye,kr,Wk,qt,Uk,Id,Qk,Rk,Nd,Vk,Gk,Hk,So,Jk,Do,Zp,zt,Wo,Sd,Br,Kk,Dd,Xk,eh,O,vr,Yk,Wd,Zk,eB,yr,tB,si,oB,nB,sB,wr,rB,$r,aB,iB,lB,Ud,dB,cB,Pe,Qd,Tr,pB,hB,Rd,xr,mB,gB,Vd,Fr,fB,uB,Gd,qr,_B,bB,we,zr,kB,Mt,BB,Hd,vB,yB,Jd,wB,$B,TB,Uo,xB,Qo,th,Et,Ro,Kd,Mr,FB,Xd,qB,oh,I,Er,zB,jr,MB,Yd,EB,jB,CB,Cr,PB,ri,LB,AB,OB,Pr,IB,Lr,NB,SB,DB,Zd,WB,UB,Le,ec,Ar,QB,RB,tc,Or,VB,GB,oc,Ir,HB,JB,nc,Nr,KB,XB,$e,Sr,YB,jt,ZB,sc,ev,tv,rc,ov,nv,sv,Vo,rv,Go,nh,Ct,Ho,ac,Dr,av,ic,iv,sh,N,Wr,lv,lc,dv,cv,Ur,pv,ai,hv,mv,gv,Qr,fv,Rr,uv,_v,bv,dc,kv,Bv,Ae,cc,Vr,vv,yv,pc,Gr,wv,$v,hc,Hr,Tv,xv,mc,Jr,Fv,qv,Te,Kr,zv,Pt,Mv,gc,Ev,jv,fc,Cv,Pv,Lv,Jo,Av,Ko,rh,Lt,Xo,uc,Xr,Ov,_c,Iv,ah,S,Yr,Nv,bc,Sv,Dv,Zr,Wv,ii,Uv,Qv,Rv,ea,Vv,ta,Gv,Hv,Jv,kc,Kv,Xv,Oe,Bc,oa,Yv,Zv,vc,na,ey,ty,yc,sa,oy,ny,wc,ra,sy,ry,xe,aa,ay,At,iy,$c,ly,dy,Tc,cy,py,hy,Yo,my,Zo,ih,Ot,en,xc,ia,gy,Fc,fy,lh,D,la,uy,qc,_y,by,da,ky,li,By,vy,yy,ca,wy,pa,$y,Ty,xy,zc,Fy,qy,Ie,Mc,ha,zy,My,Ec,ma,Ey,jy,jc,ga,Cy,Py,Cc,fa,Ly,Ay,Fe,ua,Oy,It,Iy,Pc,Ny,Sy,Lc,Dy,Wy,Uy,tn,Qy,on,dh,Nt,nn,Ac,_a,Ry,Oc,Vy,ch,W,ba,Gy,St,Hy,Ic,Jy,Ky,Nc,Xy,Yy,Zy,ka,e1,di,t1,o1,n1,Ba,s1,va,r1,a1,i1,Sc,l1,d1,Ne,Dc,ya,c1,p1,Wc,wa,h1,m1,Uc,$a,g1,f1,Qc,Ta,u1,_1,qe,xa,b1,Dt,k1,ci,B1,v1,Rc,y1,w1,$1,sn,T1,rn,ph;return l=new z({}),Cn=new z({}),Sn=new z({}),Dn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/configuration_big_bird.py#L34"}}),Gt=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[_x]},$$scope:{ctx:x}}}),Qn=new z({}),Vn=new z({}),Gn=new z({}),Hn=new z({}),Jn=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L51"}}),Zn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L230",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L257",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L188"}}),rs=new z({}),as=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L68"}}),ls=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L155",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L211",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),so=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[bx]},$$scope:{ctx:x}}}),ps=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L180",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new z({}),gs=new q({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L1855"}}),us=new z({}),_s=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L1927"}}),ys=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L1984",returnDescription:`
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
`}}),lo=new V({props:{$$slots:{default:[kx]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[Bx]},$$scope:{ctx:x}}}),ws=new z({}),$s=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2267"}}),Ts=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2283",returnDescription:`
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
`}}),ho=new V({props:{$$slots:{default:[vx]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[yx]},$$scope:{ctx:x}}}),xs=new z({}),Fs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2513"}}),zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2535",returnDescription:`
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
`}}),fo=new V({props:{$$slots:{default:[wx]},$$scope:{ctx:x}}}),uo=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[$x]},$$scope:{ctx:x}}}),Ms=new z({}),Es=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2371"}}),Cs=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2393",returnDescription:`
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
`}}),bo=new V({props:{$$slots:{default:[Tx]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),Bo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[Fx]},$$scope:{ctx:x}}}),Ps=new z({}),Ls=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2677"}}),Is=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2688",returnDescription:`
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
`}}),yo=new V({props:{$$slots:{default:[qx]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[zx]},$$scope:{ctx:x}}}),$o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[Mx]},$$scope:{ctx:x}}}),Ns=new z({}),Ss=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2805"}}),Us=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2816",returnDescription:`
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
`}}),xo=new V({props:{$$slots:{default:[Ex]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[jx]},$$scope:{ctx:x}}}),Qs=new z({}),Rs=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2899"}}),Hs=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2914",returnDescription:`
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
`}}),zo=new V({props:{$$slots:{default:[Cx]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[Px]},$$scope:{ctx:x}}}),Eo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[Lx]},$$scope:{ctx:x}}}),Js=new z({}),Ks=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L3004"}}),Zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L3018",returnDescription:`
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
`}}),Co=new V({props:{$$slots:{default:[Ax]},$$scope:{ctx:x}}}),Po=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[Ox]},$$scope:{ctx:x}}}),Lo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[Ix]},$$scope:{ctx:x}}}),er=new z({}),tr=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1830"}}),dr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
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
`}}),Oo=new V({props:{$$slots:{default:[Nx]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[Sx]},$$scope:{ctx:x}}}),cr=new z({}),pr=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1910"}}),kr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
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
`}}),So=new V({props:{$$slots:{default:[Dx]},$$scope:{ctx:x}}}),Do=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[Wx]},$$scope:{ctx:x}}}),Br=new z({}),vr=new q({props:{name:"class transformers.FlaxBigBirdForCausalLM",anchor:"transformers.FlaxBigBirdForCausalLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2546"}}),zr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new V({props:{$$slots:{default:[Ux]},$$scope:{ctx:x}}}),Qo=new M({props:{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.example",$$slots:{default:[Qx]},$$scope:{ctx:x}}}),Mr=new z({}),Er=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2003"}}),Sr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
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
`}}),Vo=new V({props:{$$slots:{default:[Rx]},$$scope:{ctx:x}}}),Go=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[Vx]},$$scope:{ctx:x}}}),Dr=new z({}),Wr=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2095"}}),Kr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
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
`}}),Jo=new V({props:{$$slots:{default:[Gx]},$$scope:{ctx:x}}}),Ko=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[Hx]},$$scope:{ctx:x}}}),Xr=new z({}),Yr=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2177"}}),aa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
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
`}}),Yo=new V({props:{$$slots:{default:[Jx]},$$scope:{ctx:x}}}),Zo=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[Kx]},$$scope:{ctx:x}}}),ia=new z({}),la=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2276"}}),ua=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1660",returnDescription:`
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
`}}),tn=new V({props:{$$slots:{default:[Xx]},$$scope:{ctx:x}}}),on=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[Yx]},$$scope:{ctx:x}}}),_a=new z({}),ba=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2381"}}),xa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2384",returnDescription:`
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
`}}),sn=new V({props:{$$slots:{default:[Zx]},$$scope:{ctx:x}}}),rn=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),f=n("a"),b=n("span"),B(l.$$.fragment),m=p(),F=n("span"),_m=a("BigBird"),bp=p(),Je=n("h2"),Qt=n("a"),Ni=n("span"),B(Cn.$$.fragment),bm=p(),Si=n("span"),km=a("Overview"),kp=p(),Rt=n("p"),Bm=a("The BigBird model was proposed in "),Pn=n("a"),vm=a("Big Bird: Transformers for Longer Sequences"),ym=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Bp=p(),Ca=n("p"),wm=a("The abstract from the paper is the following:"),vp=p(),Pa=n("p"),Di=n("em"),$m=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),yp=p(),La=n("p"),Tm=a("Tips:"),wp=p(),R=n("ul"),Ln=n("li"),xm=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),An=n("a"),Fm=a("this blog post"),qm=a("."),zm=p(),ce=n("li"),Mm=a("BigBird comes with 2 implementations: "),Wi=n("strong"),Em=a("original_full"),jm=a(" & "),Ui=n("strong"),Cm=a("block_sparse"),Pm=a(`. For the sequence length < 1024, using
`),Qi=n("strong"),Lm=a("original_full"),Am=a(" is advised as there is no benefit in using "),Ri=n("strong"),Om=a("block_sparse"),Im=a(" attention."),Nm=p(),Vi=n("li"),Sm=a("The code currently uses window size of 3 blocks and 2 global blocks."),Dm=p(),Gi=n("li"),Wm=a("Sequence length must be divisible by block size."),Um=p(),On=n("li"),Qm=a("Current implementation supports only "),Hi=n("strong"),Rm=a("ITC"),Vm=a("."),Gm=p(),Aa=n("li"),Hm=a("Current implementation doesn\u2019t support "),Ji=n("strong"),Jm=a("num_random_blocks = 0"),$p=p(),Se=n("p"),Km=a("This model was contributed by "),In=n("a"),Xm=a("vasudevgupta"),Ym=a(`. The original code can be found
`),Nn=n("a"),Zm=a("here"),eg=a("."),Tp=p(),Ke=n("h2"),Vt=n("a"),Ki=n("span"),B(Sn.$$.fragment),tg=p(),Xi=n("span"),og=a("BigBirdConfig"),xp=p(),C=n("div"),B(Dn.$$.fragment),ng=p(),Xe=n("p"),sg=a("This is the configuration class to store the configuration of a "),Oa=n("a"),rg=a("BigBirdModel"),ag=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Wn=n("a"),ig=a("google/bigbird-roberta-base"),lg=a(" architecture."),dg=p(),Ye=n("p"),cg=a("Configuration objects inherit from "),Ia=n("a"),pg=a("PretrainedConfig"),hg=a(` and can be used to control the model outputs. Read the
documentation from `),Na=n("a"),mg=a("PretrainedConfig"),gg=a(" for more information."),fg=p(),B(Gt.$$.fragment),ug=p(),Yi=n("blockquote"),Zi=n("blockquote"),el=n("blockquote"),tl=n("p"),_g=a("from transformers import BigBirdModel, BigBirdConfig"),bg=p(),ol=n("blockquote"),nl=n("blockquote"),Un=n("blockquote"),Ht=n("h1"),Jt=n("a"),sl=n("span"),B(Qn.$$.fragment),kg=p(),rl=n("span"),Bg=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),vg=p(),al=n("p"),yg=a("BigBirdConfig()"),wg=p(),il=n("blockquote"),ll=n("blockquote"),Rn=n("blockquote"),Kt=n("h1"),Xt=n("a"),dl=n("span"),B(Vn.$$.fragment),$g=p(),cl=n("span"),Tg=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),xg=p(),pl=n("p"),Fg=a("BigBirdModel(configuration)"),qg=p(),hl=n("blockquote"),ml=n("blockquote"),gl=n("blockquote"),Yt=n("h1"),Zt=n("a"),fl=n("span"),B(Gn.$$.fragment),zg=p(),ul=n("span"),Mg=a("Accessing the model configuration >>> configuration = model.config"),Fp=p(),Ze=n("h2"),eo=n("a"),_l=n("span"),B(Hn.$$.fragment),Eg=p(),bl=n("span"),jg=a("BigBirdTokenizer"),qp=p(),P=n("div"),B(Jn.$$.fragment),Cg=p(),Kn=n("p"),Pg=a("Construct a BigBird tokenizer. Based on "),Xn=n("a"),Lg=a("SentencePiece"),Ag=a("."),Og=p(),Yn=n("p"),Ig=a("This tokenizer inherits from "),Sa=n("a"),Ng=a("PreTrainedTokenizer"),Sg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dg=p(),De=n("div"),B(Zn.$$.fragment),Wg=p(),kl=n("p"),Ug=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Qg=p(),es=n("ul"),Da=n("li"),Rg=a("single sequence: "),Bl=n("code"),Vg=a("[CLS] X [SEP]"),Gg=p(),Wa=n("li"),Hg=a("pair of sequences: "),vl=n("code"),Jg=a("[CLS] A [SEP] B [SEP]"),Kg=p(),to=n("div"),B(ts.$$.fragment),Xg=p(),os=n("p"),Yg=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yl=n("code"),Zg=a("prepare_for_model"),ef=a(" method."),tf=p(),oo=n("div"),B(ns.$$.fragment),of=p(),et=n("p"),nf=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),wl=n("code"),sf=a("token_ids_1"),rf=a(" is "),$l=n("code"),af=a("None"),lf=a(", this method only returns the first portion of the mask (0s)."),df=p(),Ua=n("div"),B(ss.$$.fragment),zp=p(),tt=n("h2"),no=n("a"),Tl=n("span"),B(rs.$$.fragment),cf=p(),xl=n("span"),pf=a("BigBirdTokenizerFast"),Mp=p(),G=n("div"),B(as.$$.fragment),hf=p(),ze=n("p"),mf=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Fl=n("em"),gf=a("tokenizers"),ff=a(` library). Based on
`),is=n("a"),uf=a("Unigram"),_f=a(`. This
tokenizer inherits from `),Qa=n("a"),bf=a("PreTrainedTokenizerFast"),kf=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Bf=p(),We=n("div"),B(ls.$$.fragment),vf=p(),ql=n("p"),yf=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),wf=p(),ds=n("ul"),Ra=n("li"),$f=a("single sequence: "),zl=n("code"),Tf=a("[CLS] X [SEP]"),xf=p(),Va=n("li"),Ff=a("pair of sequences: "),Ml=n("code"),qf=a("[CLS] A [SEP] B [SEP]"),zf=p(),ue=n("div"),B(cs.$$.fragment),Mf=p(),El=n("p"),Ef=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),jf=p(),B(so.$$.fragment),Cf=p(),jl=n("p"),Pf=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Lf=p(),ro=n("div"),B(ps.$$.fragment),Af=p(),hs=n("p"),Of=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Cl=n("code"),If=a("prepare_for_model"),Nf=a(" method."),Ep=p(),ot=n("h2"),ao=n("a"),Pl=n("span"),B(ms.$$.fragment),Sf=p(),Ll=n("span"),Df=a("BigBird specific outputs"),jp=p(),nt=n("div"),B(gs.$$.fragment),Wf=p(),fs=n("p"),Uf=a("Output type of "),Ga=n("a"),Qf=a("BigBirdForPreTraining"),Rf=a("."),Cp=p(),st=n("h2"),io=n("a"),Al=n("span"),B(us.$$.fragment),Vf=p(),Ol=n("span"),Gf=a("BigBirdModel"),Pp=p(),H=n("div"),B(_s.$$.fragment),Hf=p(),bs=n("p"),Jf=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ks=n("a"),Kf=a("torch.nn.Module"),Xf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yf=p(),Bs=n("p"),Zf=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),vs=n("a"),eu=a(`Attention is
all you need`),tu=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ou=p(),Q=n("p"),nu=a("To behave as an decoder the model needs to be initialized with the "),Il=n("code"),su=a("is_decoder"),ru=a(` argument of the configuration set
to `),Nl=n("code"),au=a("True"),iu=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Sl=n("code"),lu=a("is_decoder"),du=a(` argument and
`),Dl=n("code"),cu=a("add_cross_attention"),pu=a(" set to "),Wl=n("code"),hu=a("True"),mu=a("; an "),Ul=n("code"),gu=a("encoder_hidden_states"),fu=a(" is then expected as an input to the forward pass."),uu=p(),_e=n("div"),B(ys.$$.fragment),_u=p(),rt=n("p"),bu=a("The "),Ha=n("a"),ku=a("BigBirdModel"),Bu=a(" forward method, overrides the "),Ql=n("code"),vu=a("__call__"),yu=a(" special method."),wu=p(),B(lo.$$.fragment),$u=p(),B(co.$$.fragment),Lp=p(),at=n("h2"),po=n("a"),Rl=n("span"),B(ws.$$.fragment),Tu=p(),Vl=n("span"),xu=a("BigBirdForPreTraining"),Ap=p(),it=n("div"),B($s.$$.fragment),Fu=p(),be=n("div"),B(Ts.$$.fragment),qu=p(),lt=n("p"),zu=a("The "),Ja=n("a"),Mu=a("BigBirdForPreTraining"),Eu=a(" forward method, overrides the "),Gl=n("code"),ju=a("__call__"),Cu=a(" special method."),Pu=p(),B(ho.$$.fragment),Lu=p(),B(mo.$$.fragment),Op=p(),dt=n("h2"),go=n("a"),Hl=n("span"),B(xs.$$.fragment),Au=p(),Jl=n("span"),Ou=a("BigBirdForCausalLM"),Ip=p(),Me=n("div"),B(Fs.$$.fragment),Iu=p(),ct=n("p"),Nu=a("BigBird Model with a "),Kl=n("code"),Su=a("language modeling"),Du=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),qs=n("a"),Wu=a("torch.nn.Module"),Uu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qu=p(),ke=n("div"),B(zs.$$.fragment),Ru=p(),pt=n("p"),Vu=a("The "),Ka=n("a"),Gu=a("BigBirdForCausalLM"),Hu=a(" forward method, overrides the "),Xl=n("code"),Ju=a("__call__"),Ku=a(" special method."),Xu=p(),B(fo.$$.fragment),Yu=p(),B(uo.$$.fragment),Np=p(),ht=n("h2"),_o=n("a"),Yl=n("span"),B(Ms.$$.fragment),Zu=p(),Zl=n("span"),e_=a("BigBirdForMaskedLM"),Sp=p(),Ee=n("div"),B(Es.$$.fragment),t_=p(),mt=n("p"),o_=a("BigBird Model with a "),ed=n("code"),n_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),js=n("a"),r_=a("torch.nn.Module"),a_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),i_=p(),K=n("div"),B(Cs.$$.fragment),l_=p(),gt=n("p"),d_=a("The "),Xa=n("a"),c_=a("BigBirdForMaskedLM"),p_=a(" forward method, overrides the "),td=n("code"),h_=a("__call__"),m_=a(" special method."),g_=p(),B(bo.$$.fragment),f_=p(),B(ko.$$.fragment),u_=p(),B(Bo.$$.fragment),Dp=p(),ft=n("h2"),vo=n("a"),od=n("span"),B(Ps.$$.fragment),__=p(),nd=n("span"),b_=a("BigBirdForSequenceClassification"),Wp=p(),pe=n("div"),B(Ls.$$.fragment),k_=p(),sd=n("p"),B_=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),v_=p(),As=n("p"),y_=a("This model is a PyTorch "),Os=n("a"),w_=a("torch.nn.Module"),$_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),T_=p(),X=n("div"),B(Is.$$.fragment),x_=p(),ut=n("p"),F_=a("The "),Ya=n("a"),q_=a("BigBirdForSequenceClassification"),z_=a(" forward method, overrides the "),rd=n("code"),M_=a("__call__"),E_=a(" special method."),j_=p(),B(yo.$$.fragment),C_=p(),B(wo.$$.fragment),P_=p(),B($o.$$.fragment),Up=p(),_t=n("h2"),To=n("a"),ad=n("span"),B(Ns.$$.fragment),L_=p(),id=n("span"),A_=a("BigBirdForMultipleChoice"),Qp=p(),he=n("div"),B(Ss.$$.fragment),O_=p(),ld=n("p"),I_=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),N_=p(),Ds=n("p"),S_=a("This model is a PyTorch "),Ws=n("a"),D_=a("torch.nn.Module"),W_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),U_=p(),Be=n("div"),B(Us.$$.fragment),Q_=p(),bt=n("p"),R_=a("The "),Za=n("a"),V_=a("BigBirdForMultipleChoice"),G_=a(" forward method, overrides the "),dd=n("code"),H_=a("__call__"),J_=a(" special method."),K_=p(),B(xo.$$.fragment),X_=p(),B(Fo.$$.fragment),Rp=p(),kt=n("h2"),qo=n("a"),cd=n("span"),B(Qs.$$.fragment),Y_=p(),pd=n("span"),Z_=a("BigBirdForTokenClassification"),Vp=p(),me=n("div"),B(Rs.$$.fragment),eb=p(),hd=n("p"),tb=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ob=p(),Vs=n("p"),nb=a("This model is a PyTorch "),Gs=n("a"),sb=a("torch.nn.Module"),rb=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ab=p(),Y=n("div"),B(Hs.$$.fragment),ib=p(),Bt=n("p"),lb=a("The "),ei=n("a"),db=a("BigBirdForTokenClassification"),cb=a(" forward method, overrides the "),md=n("code"),pb=a("__call__"),hb=a(" special method."),mb=p(),B(zo.$$.fragment),gb=p(),B(Mo.$$.fragment),fb=p(),B(Eo.$$.fragment),Gp=p(),vt=n("h2"),jo=n("a"),gd=n("span"),B(Js.$$.fragment),ub=p(),fd=n("span"),_b=a("BigBirdForQuestionAnswering"),Hp=p(),ge=n("div"),B(Ks.$$.fragment),bb=p(),yt=n("p"),kb=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ud=n("code"),Bb=a("span start logits"),vb=a(" and "),_d=n("code"),yb=a("span end logits"),wb=a(")."),$b=p(),Xs=n("p"),Tb=a("This model is a PyTorch "),Ys=n("a"),xb=a("torch.nn.Module"),Fb=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qb=p(),Z=n("div"),B(Zs.$$.fragment),zb=p(),wt=n("p"),Mb=a("The "),ti=n("a"),Eb=a("BigBirdForQuestionAnswering"),jb=a(" forward method, overrides the "),bd=n("code"),Cb=a("__call__"),Pb=a(" special method."),Lb=p(),B(Co.$$.fragment),Ab=p(),B(Po.$$.fragment),Ob=p(),B(Lo.$$.fragment),Jp=p(),$t=n("h2"),Ao=n("a"),kd=n("span"),B(er.$$.fragment),Ib=p(),Bd=n("span"),Nb=a("FlaxBigBirdModel"),Kp=p(),L=n("div"),B(tr.$$.fragment),Sb=p(),vd=n("p"),Db=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),Wb=p(),or=n("p"),Ub=a("This model inherits from "),oi=n("a"),Qb=a("FlaxPreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vb=p(),nr=n("p"),Gb=a("This model is also a Flax Linen "),sr=n("a"),Hb=a("flax.linen.Module"),Jb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kb=p(),yd=n("p"),Xb=a("Finally, this model supports inherent JAX features such as:"),Yb=p(),je=n("ul"),wd=n("li"),rr=n("a"),Zb=a("Just-In-Time (JIT) compilation"),ek=p(),$d=n("li"),ar=n("a"),tk=a("Automatic Differentiation"),ok=p(),Td=n("li"),ir=n("a"),nk=a("Vectorization"),sk=p(),xd=n("li"),lr=n("a"),rk=a("Parallelization"),ak=p(),ve=n("div"),B(dr.$$.fragment),ik=p(),Tt=n("p"),lk=a("The "),Fd=n("code"),dk=a("FlaxBigBirdPreTrainedModel"),ck=a(" forward method, overrides the "),qd=n("code"),pk=a("__call__"),hk=a(" special method."),mk=p(),B(Oo.$$.fragment),gk=p(),B(Io.$$.fragment),Xp=p(),xt=n("h2"),No=n("a"),zd=n("span"),B(cr.$$.fragment),fk=p(),Md=n("span"),uk=a("FlaxBigBirdForPreTraining"),Yp=p(),A=n("div"),B(pr.$$.fragment),_k=p(),Ft=n("p"),bk=a("BigBird Model with two heads on top as done during the pretraining: a "),Ed=n("code"),kk=a("masked language modeling"),Bk=a(" head and a "),jd=n("code"),vk=a("next sentence prediction (classification)"),yk=a(" head."),wk=p(),hr=n("p"),$k=a("This model inherits from "),ni=n("a"),Tk=a("FlaxPreTrainedModel"),xk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fk=p(),mr=n("p"),qk=a("This model is also a Flax Linen "),gr=n("a"),zk=a("flax.linen.Module"),Mk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ek=p(),Cd=n("p"),jk=a("Finally, this model supports inherent JAX features such as:"),Ck=p(),Ce=n("ul"),Pd=n("li"),fr=n("a"),Pk=a("Just-In-Time (JIT) compilation"),Lk=p(),Ld=n("li"),ur=n("a"),Ak=a("Automatic Differentiation"),Ok=p(),Ad=n("li"),_r=n("a"),Ik=a("Vectorization"),Nk=p(),Od=n("li"),br=n("a"),Sk=a("Parallelization"),Dk=p(),ye=n("div"),B(kr.$$.fragment),Wk=p(),qt=n("p"),Uk=a("The "),Id=n("code"),Qk=a("FlaxBigBirdPreTrainedModel"),Rk=a(" forward method, overrides the "),Nd=n("code"),Vk=a("__call__"),Gk=a(" special method."),Hk=p(),B(So.$$.fragment),Jk=p(),B(Do.$$.fragment),Zp=p(),zt=n("h2"),Wo=n("a"),Sd=n("span"),B(Br.$$.fragment),Kk=p(),Dd=n("span"),Xk=a("FlaxBigBirdForCausalLM"),eh=p(),O=n("div"),B(vr.$$.fragment),Yk=p(),Wd=n("p"),Zk=a(`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),eB=p(),yr=n("p"),tB=a("This model inherits from "),si=n("a"),oB=a("FlaxPreTrainedModel"),nB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sB=p(),wr=n("p"),rB=a("This model is also a Flax Linen "),$r=n("a"),aB=a("flax.linen.Module"),iB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lB=p(),Ud=n("p"),dB=a("Finally, this model supports inherent JAX features such as:"),cB=p(),Pe=n("ul"),Qd=n("li"),Tr=n("a"),pB=a("Just-In-Time (JIT) compilation"),hB=p(),Rd=n("li"),xr=n("a"),mB=a("Automatic Differentiation"),gB=p(),Vd=n("li"),Fr=n("a"),fB=a("Vectorization"),uB=p(),Gd=n("li"),qr=n("a"),_B=a("Parallelization"),bB=p(),we=n("div"),B(zr.$$.fragment),kB=p(),Mt=n("p"),BB=a("The "),Hd=n("code"),vB=a("FlaxBigBirdPreTrainedModel"),yB=a(" forward method, overrides the "),Jd=n("code"),wB=a("__call__"),$B=a(" special method."),TB=p(),B(Uo.$$.fragment),xB=p(),B(Qo.$$.fragment),th=p(),Et=n("h2"),Ro=n("a"),Kd=n("span"),B(Mr.$$.fragment),FB=p(),Xd=n("span"),qB=a("FlaxBigBirdForMaskedLM"),oh=p(),I=n("div"),B(Er.$$.fragment),zB=p(),jr=n("p"),MB=a("BigBird Model with a "),Yd=n("code"),EB=a("language modeling"),jB=a(" head on top."),CB=p(),Cr=n("p"),PB=a("This model inherits from "),ri=n("a"),LB=a("FlaxPreTrainedModel"),AB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),OB=p(),Pr=n("p"),IB=a("This model is also a Flax Linen "),Lr=n("a"),NB=a("flax.linen.Module"),SB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),DB=p(),Zd=n("p"),WB=a("Finally, this model supports inherent JAX features such as:"),UB=p(),Le=n("ul"),ec=n("li"),Ar=n("a"),QB=a("Just-In-Time (JIT) compilation"),RB=p(),tc=n("li"),Or=n("a"),VB=a("Automatic Differentiation"),GB=p(),oc=n("li"),Ir=n("a"),HB=a("Vectorization"),JB=p(),nc=n("li"),Nr=n("a"),KB=a("Parallelization"),XB=p(),$e=n("div"),B(Sr.$$.fragment),YB=p(),jt=n("p"),ZB=a("The "),sc=n("code"),ev=a("FlaxBigBirdPreTrainedModel"),tv=a(" forward method, overrides the "),rc=n("code"),ov=a("__call__"),nv=a(" special method."),sv=p(),B(Vo.$$.fragment),rv=p(),B(Go.$$.fragment),nh=p(),Ct=n("h2"),Ho=n("a"),ac=n("span"),B(Dr.$$.fragment),av=p(),ic=n("span"),iv=a("FlaxBigBirdForSequenceClassification"),sh=p(),N=n("div"),B(Wr.$$.fragment),lv=p(),lc=n("p"),dv=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cv=p(),Ur=n("p"),pv=a("This model inherits from "),ai=n("a"),hv=a("FlaxPreTrainedModel"),mv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gv=p(),Qr=n("p"),fv=a("This model is also a Flax Linen "),Rr=n("a"),uv=a("flax.linen.Module"),_v=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bv=p(),dc=n("p"),kv=a("Finally, this model supports inherent JAX features such as:"),Bv=p(),Ae=n("ul"),cc=n("li"),Vr=n("a"),vv=a("Just-In-Time (JIT) compilation"),yv=p(),pc=n("li"),Gr=n("a"),wv=a("Automatic Differentiation"),$v=p(),hc=n("li"),Hr=n("a"),Tv=a("Vectorization"),xv=p(),mc=n("li"),Jr=n("a"),Fv=a("Parallelization"),qv=p(),Te=n("div"),B(Kr.$$.fragment),zv=p(),Pt=n("p"),Mv=a("The "),gc=n("code"),Ev=a("FlaxBigBirdPreTrainedModel"),jv=a(" forward method, overrides the "),fc=n("code"),Cv=a("__call__"),Pv=a(" special method."),Lv=p(),B(Jo.$$.fragment),Av=p(),B(Ko.$$.fragment),rh=p(),Lt=n("h2"),Xo=n("a"),uc=n("span"),B(Xr.$$.fragment),Ov=p(),_c=n("span"),Iv=a("FlaxBigBirdForMultipleChoice"),ah=p(),S=n("div"),B(Yr.$$.fragment),Nv=p(),bc=n("p"),Sv=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Dv=p(),Zr=n("p"),Wv=a("This model inherits from "),ii=n("a"),Uv=a("FlaxPreTrainedModel"),Qv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rv=p(),ea=n("p"),Vv=a("This model is also a Flax Linen "),ta=n("a"),Gv=a("flax.linen.Module"),Hv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jv=p(),kc=n("p"),Kv=a("Finally, this model supports inherent JAX features such as:"),Xv=p(),Oe=n("ul"),Bc=n("li"),oa=n("a"),Yv=a("Just-In-Time (JIT) compilation"),Zv=p(),vc=n("li"),na=n("a"),ey=a("Automatic Differentiation"),ty=p(),yc=n("li"),sa=n("a"),oy=a("Vectorization"),ny=p(),wc=n("li"),ra=n("a"),sy=a("Parallelization"),ry=p(),xe=n("div"),B(aa.$$.fragment),ay=p(),At=n("p"),iy=a("The "),$c=n("code"),ly=a("FlaxBigBirdPreTrainedModel"),dy=a(" forward method, overrides the "),Tc=n("code"),cy=a("__call__"),py=a(" special method."),hy=p(),B(Yo.$$.fragment),my=p(),B(Zo.$$.fragment),ih=p(),Ot=n("h2"),en=n("a"),xc=n("span"),B(ia.$$.fragment),gy=p(),Fc=n("span"),fy=a("FlaxBigBirdForTokenClassification"),lh=p(),D=n("div"),B(la.$$.fragment),uy=p(),qc=n("p"),_y=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),by=p(),da=n("p"),ky=a("This model inherits from "),li=n("a"),By=a("FlaxPreTrainedModel"),vy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yy=p(),ca=n("p"),wy=a("This model is also a Flax Linen "),pa=n("a"),$y=a("flax.linen.Module"),Ty=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xy=p(),zc=n("p"),Fy=a("Finally, this model supports inherent JAX features such as:"),qy=p(),Ie=n("ul"),Mc=n("li"),ha=n("a"),zy=a("Just-In-Time (JIT) compilation"),My=p(),Ec=n("li"),ma=n("a"),Ey=a("Automatic Differentiation"),jy=p(),jc=n("li"),ga=n("a"),Cy=a("Vectorization"),Py=p(),Cc=n("li"),fa=n("a"),Ly=a("Parallelization"),Ay=p(),Fe=n("div"),B(ua.$$.fragment),Oy=p(),It=n("p"),Iy=a("The "),Pc=n("code"),Ny=a("FlaxBigBirdPreTrainedModel"),Sy=a(" forward method, overrides the "),Lc=n("code"),Dy=a("__call__"),Wy=a(" special method."),Uy=p(),B(tn.$$.fragment),Qy=p(),B(on.$$.fragment),dh=p(),Nt=n("h2"),nn=n("a"),Ac=n("span"),B(_a.$$.fragment),Ry=p(),Oc=n("span"),Vy=a("FlaxBigBirdForQuestionAnswering"),ch=p(),W=n("div"),B(ba.$$.fragment),Gy=p(),St=n("p"),Hy=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ic=n("code"),Jy=a("span start logits"),Ky=a(" and "),Nc=n("code"),Xy=a("span end logits"),Yy=a(")."),Zy=p(),ka=n("p"),e1=a("This model inherits from "),di=n("a"),t1=a("FlaxPreTrainedModel"),o1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n1=p(),Ba=n("p"),s1=a("This model is also a Flax Linen "),va=n("a"),r1=a("flax.linen.Module"),a1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i1=p(),Sc=n("p"),l1=a("Finally, this model supports inherent JAX features such as:"),d1=p(),Ne=n("ul"),Dc=n("li"),ya=n("a"),c1=a("Just-In-Time (JIT) compilation"),p1=p(),Wc=n("li"),wa=n("a"),h1=a("Automatic Differentiation"),m1=p(),Uc=n("li"),$a=n("a"),g1=a("Vectorization"),f1=p(),Qc=n("li"),Ta=n("a"),u1=a("Parallelization"),_1=p(),qe=n("div"),B(xa.$$.fragment),b1=p(),Dt=n("p"),k1=a("The "),ci=n("a"),B1=a("FlaxBigBirdForQuestionAnswering"),v1=a(" forward method, overrides the "),Rc=n("code"),y1=a("__call__"),w1=a(" special method."),$1=p(),B(sn.$$.fragment),T1=p(),B(rn.$$.fragment),this.h()},l(o){const u=fx('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var Fa=r(g);f=s(Fa,"A",{id:!0,class:!0,href:!0});var Vc=r(f);b=s(Vc,"SPAN",{});var Gc=r(b);v(l.$$.fragment,Gc),Gc.forEach(t),Vc.forEach(t),m=h(Fa),F=s(Fa,"SPAN",{});var Hc=r(F);_m=i(Hc,"BigBird"),Hc.forEach(t),Fa.forEach(t),bp=h(o),Je=s(o,"H2",{class:!0});var qa=r(Je);Qt=s(qa,"A",{id:!0,class:!0,href:!0});var Jc=r(Qt);Ni=s(Jc,"SPAN",{});var Kc=r(Ni);v(Cn.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),bm=h(qa),Si=s(qa,"SPAN",{});var Xc=r(Si);km=i(Xc,"Overview"),Xc.forEach(t),qa.forEach(t),kp=h(o),Rt=s(o,"P",{});var za=r(Rt);Bm=i(za,"The BigBird model was proposed in "),Pn=s(za,"A",{href:!0,rel:!0});var Yc=r(Pn);vm=i(Yc,"Big Bird: Transformers for Longer Sequences"),Yc.forEach(t),ym=i(za,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),za.forEach(t),Bp=h(o),Ca=s(o,"P",{});var Zc=r(Ca);wm=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),vp=h(o),Pa=s(o,"P",{});var ep=r(Pa);Di=s(ep,"EM",{});var tp=r(Di);$m=i(tp,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),tp.forEach(t),ep.forEach(t),yp=h(o),La=s(o,"P",{});var op=r(La);Tm=i(op,"Tips:"),op.forEach(t),wp=h(o),R=s(o,"UL",{});var J=r(R);Ln=s(J,"LI",{});var Ma=r(Ln);xm=i(Ma,"For an in-detail explanation on how BigBird\u2019s attention works, see "),An=s(Ma,"A",{href:!0,rel:!0});var np=r(An);Fm=i(np,"this blog post"),np.forEach(t),qm=i(Ma,"."),Ma.forEach(t),zm=h(J),ce=s(J,"LI",{});var fe=r(ce);Mm=i(fe,"BigBird comes with 2 implementations: "),Wi=s(fe,"STRONG",{});var sp=r(Wi);Em=i(sp,"original_full"),sp.forEach(t),jm=i(fe," & "),Ui=s(fe,"STRONG",{});var rp=r(Ui);Cm=i(rp,"block_sparse"),rp.forEach(t),Pm=i(fe,`. For the sequence length < 1024, using
`),Qi=s(fe,"STRONG",{});var ap=r(Qi);Lm=i(ap,"original_full"),ap.forEach(t),Am=i(fe," is advised as there is no benefit in using "),Ri=s(fe,"STRONG",{});var ip=r(Ri);Om=i(ip,"block_sparse"),ip.forEach(t),Im=i(fe," attention."),fe.forEach(t),Nm=h(J),Vi=s(J,"LI",{});var lp=r(Vi);Sm=i(lp,"The code currently uses window size of 3 blocks and 2 global blocks."),lp.forEach(t),Dm=h(J),Gi=s(J,"LI",{});var dp=r(Gi);Wm=i(dp,"Sequence length must be divisible by block size."),dp.forEach(t),Um=h(J),On=s(J,"LI",{});var Ea=r(On);Qm=i(Ea,"Current implementation supports only "),Hi=s(Ea,"STRONG",{});var cp=r(Hi);Rm=i(cp,"ITC"),cp.forEach(t),Vm=i(Ea,"."),Ea.forEach(t),Gm=h(J),Aa=s(J,"LI",{});var pi=r(Aa);Hm=i(pi,"Current implementation doesn\u2019t support "),Ji=s(pi,"STRONG",{});var pp=r(Ji);Jm=i(pp,"num_random_blocks = 0"),pp.forEach(t),pi.forEach(t),J.forEach(t),$p=h(o),Se=s(o,"P",{});var Wt=r(Se);Km=i(Wt,"This model was contributed by "),In=s(Wt,"A",{href:!0,rel:!0});var hp=r(In);Xm=i(hp,"vasudevgupta"),hp.forEach(t),Ym=i(Wt,`. The original code can be found
`),Nn=s(Wt,"A",{href:!0,rel:!0});var mp=r(Nn);Zm=i(mp,"here"),mp.forEach(t),eg=i(Wt,"."),Wt.forEach(t),Tp=h(o),Ke=s(o,"H2",{class:!0});var ja=r(Ke);Vt=s(ja,"A",{id:!0,class:!0,href:!0});var gp=r(Vt);Ki=s(gp,"SPAN",{});var fp=r(Ki);v(Sn.$$.fragment,fp),fp.forEach(t),gp.forEach(t),tg=h(ja),Xi=s(ja,"SPAN",{});var up=r(Xi);og=i(up,"BigBirdConfig"),up.forEach(t),ja.forEach(t),xp=h(o),C=s(o,"DIV",{class:!0});var U=r(C);v(Dn.$$.fragment,U),ng=h(U),Xe=s(U,"P",{});var Ut=r(Xe);sg=i(Ut,"This is the configuration class to store the configuration of a "),Oa=s(Ut,"A",{href:!0});var _p=r(Oa);rg=i(_p,"BigBirdModel"),_p.forEach(t),ag=i(Ut,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Wn=s(Ut,"A",{href:!0,rel:!0});var M1=r(Wn);ig=i(M1,"google/bigbird-roberta-base"),M1.forEach(t),lg=i(Ut," architecture."),Ut.forEach(t),dg=h(U),Ye=s(U,"P",{});var hi=r(Ye);cg=i(hi,"Configuration objects inherit from "),Ia=s(hi,"A",{href:!0});var E1=r(Ia);pg=i(E1,"PretrainedConfig"),E1.forEach(t),hg=i(hi,` and can be used to control the model outputs. Read the
documentation from `),Na=s(hi,"A",{href:!0});var j1=r(Na);mg=i(j1,"PretrainedConfig"),j1.forEach(t),gg=i(hi," for more information."),hi.forEach(t),fg=h(U),v(Gt.$$.fragment,U),ug=h(U),Yi=s(U,"BLOCKQUOTE",{});var C1=r(Yi);Zi=s(C1,"BLOCKQUOTE",{});var P1=r(Zi);el=s(P1,"BLOCKQUOTE",{});var L1=r(el);tl=s(L1,"P",{});var A1=r(tl);_g=i(A1,"from transformers import BigBirdModel, BigBirdConfig"),A1.forEach(t),L1.forEach(t),P1.forEach(t),C1.forEach(t),bg=h(U),ol=s(U,"BLOCKQUOTE",{});var O1=r(ol);nl=s(O1,"BLOCKQUOTE",{});var I1=r(nl);Un=s(I1,"BLOCKQUOTE",{});var hh=r(Un);Ht=s(hh,"H1",{class:!0});var mh=r(Ht);Jt=s(mh,"A",{id:!0,class:!0,href:!0});var N1=r(Jt);sl=s(N1,"SPAN",{});var S1=r(sl);v(Qn.$$.fragment,S1),S1.forEach(t),N1.forEach(t),kg=h(mh),rl=s(mh,"SPAN",{});var D1=r(rl);Bg=i(D1,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),D1.forEach(t),mh.forEach(t),vg=h(hh),al=s(hh,"P",{});var W1=r(al);yg=i(W1,"BigBirdConfig()"),W1.forEach(t),hh.forEach(t),I1.forEach(t),O1.forEach(t),wg=h(U),il=s(U,"BLOCKQUOTE",{});var U1=r(il);ll=s(U1,"BLOCKQUOTE",{});var Q1=r(ll);Rn=s(Q1,"BLOCKQUOTE",{});var gh=r(Rn);Kt=s(gh,"H1",{class:!0});var fh=r(Kt);Xt=s(fh,"A",{id:!0,class:!0,href:!0});var R1=r(Xt);dl=s(R1,"SPAN",{});var V1=r(dl);v(Vn.$$.fragment,V1),V1.forEach(t),R1.forEach(t),$g=h(fh),cl=s(fh,"SPAN",{});var G1=r(cl);Tg=i(G1,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),G1.forEach(t),fh.forEach(t),xg=h(gh),pl=s(gh,"P",{});var H1=r(pl);Fg=i(H1,"BigBirdModel(configuration)"),H1.forEach(t),gh.forEach(t),Q1.forEach(t),U1.forEach(t),qg=h(U),hl=s(U,"BLOCKQUOTE",{});var J1=r(hl);ml=s(J1,"BLOCKQUOTE",{});var K1=r(ml);gl=s(K1,"BLOCKQUOTE",{});var X1=r(gl);Yt=s(X1,"H1",{class:!0});var uh=r(Yt);Zt=s(uh,"A",{id:!0,class:!0,href:!0});var Y1=r(Zt);fl=s(Y1,"SPAN",{});var Z1=r(fl);v(Gn.$$.fragment,Z1),Z1.forEach(t),Y1.forEach(t),zg=h(uh),ul=s(uh,"SPAN",{});var ew=r(ul);Mg=i(ew,"Accessing the model configuration >>> configuration = model.config"),ew.forEach(t),uh.forEach(t),X1.forEach(t),K1.forEach(t),J1.forEach(t),U.forEach(t),Fp=h(o),Ze=s(o,"H2",{class:!0});var _h=r(Ze);eo=s(_h,"A",{id:!0,class:!0,href:!0});var tw=r(eo);_l=s(tw,"SPAN",{});var ow=r(_l);v(Hn.$$.fragment,ow),ow.forEach(t),tw.forEach(t),Eg=h(_h),bl=s(_h,"SPAN",{});var nw=r(bl);jg=i(nw,"BigBirdTokenizer"),nw.forEach(t),_h.forEach(t),qp=h(o),P=s(o,"DIV",{class:!0});var ee=r(P);v(Jn.$$.fragment,ee),Cg=h(ee),Kn=s(ee,"P",{});var bh=r(Kn);Pg=i(bh,"Construct a BigBird tokenizer. Based on "),Xn=s(bh,"A",{href:!0,rel:!0});var sw=r(Xn);Lg=i(sw,"SentencePiece"),sw.forEach(t),Ag=i(bh,"."),bh.forEach(t),Og=h(ee),Yn=s(ee,"P",{});var kh=r(Yn);Ig=i(kh,"This tokenizer inherits from "),Sa=s(kh,"A",{href:!0});var rw=r(Sa);Ng=i(rw,"PreTrainedTokenizer"),rw.forEach(t),Sg=i(kh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kh.forEach(t),Dg=h(ee),De=s(ee,"DIV",{class:!0});var mi=r(De);v(Zn.$$.fragment,mi),Wg=h(mi),kl=s(mi,"P",{});var aw=r(kl);Ug=i(aw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),aw.forEach(t),Qg=h(mi),es=s(mi,"UL",{});var Bh=r(es);Da=s(Bh,"LI",{});var x1=r(Da);Rg=i(x1,"single sequence: "),Bl=s(x1,"CODE",{});var iw=r(Bl);Vg=i(iw,"[CLS] X [SEP]"),iw.forEach(t),x1.forEach(t),Gg=h(Bh),Wa=s(Bh,"LI",{});var F1=r(Wa);Hg=i(F1,"pair of sequences: "),vl=s(F1,"CODE",{});var lw=r(vl);Jg=i(lw,"[CLS] A [SEP] B [SEP]"),lw.forEach(t),F1.forEach(t),Bh.forEach(t),mi.forEach(t),Kg=h(ee),to=s(ee,"DIV",{class:!0});var vh=r(to);v(ts.$$.fragment,vh),Xg=h(vh),os=s(vh,"P",{});var yh=r(os);Yg=i(yh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yl=s(yh,"CODE",{});var dw=r(yl);Zg=i(dw,"prepare_for_model"),dw.forEach(t),ef=i(yh," method."),yh.forEach(t),vh.forEach(t),tf=h(ee),oo=s(ee,"DIV",{class:!0});var wh=r(oo);v(ns.$$.fragment,wh),of=h(wh),et=s(wh,"P",{});var gi=r(et);nf=i(gi,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),wl=s(gi,"CODE",{});var cw=r(wl);sf=i(cw,"token_ids_1"),cw.forEach(t),rf=i(gi," is "),$l=s(gi,"CODE",{});var pw=r($l);af=i(pw,"None"),pw.forEach(t),lf=i(gi,", this method only returns the first portion of the mask (0s)."),gi.forEach(t),wh.forEach(t),df=h(ee),Ua=s(ee,"DIV",{class:!0});var hw=r(Ua);v(ss.$$.fragment,hw),hw.forEach(t),ee.forEach(t),zp=h(o),tt=s(o,"H2",{class:!0});var $h=r(tt);no=s($h,"A",{id:!0,class:!0,href:!0});var mw=r(no);Tl=s(mw,"SPAN",{});var gw=r(Tl);v(rs.$$.fragment,gw),gw.forEach(t),mw.forEach(t),cf=h($h),xl=s($h,"SPAN",{});var fw=r(xl);pf=i(fw,"BigBirdTokenizerFast"),fw.forEach(t),$h.forEach(t),Mp=h(o),G=s(o,"DIV",{class:!0});var Ue=r(G);v(as.$$.fragment,Ue),hf=h(Ue),ze=s(Ue,"P",{});var an=r(ze);mf=i(an,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Fl=s(an,"EM",{});var uw=r(Fl);gf=i(uw,"tokenizers"),uw.forEach(t),ff=i(an,` library). Based on
`),is=s(an,"A",{href:!0,rel:!0});var _w=r(is);uf=i(_w,"Unigram"),_w.forEach(t),_f=i(an,`. This
tokenizer inherits from `),Qa=s(an,"A",{href:!0});var bw=r(Qa);bf=i(bw,"PreTrainedTokenizerFast"),bw.forEach(t),kf=i(an,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),an.forEach(t),Bf=h(Ue),We=s(Ue,"DIV",{class:!0});var fi=r(We);v(ls.$$.fragment,fi),vf=h(fi),ql=s(fi,"P",{});var kw=r(ql);yf=i(kw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),kw.forEach(t),wf=h(fi),ds=s(fi,"UL",{});var Th=r(ds);Ra=s(Th,"LI",{});var q1=r(Ra);$f=i(q1,"single sequence: "),zl=s(q1,"CODE",{});var Bw=r(zl);Tf=i(Bw,"[CLS] X [SEP]"),Bw.forEach(t),q1.forEach(t),xf=h(Th),Va=s(Th,"LI",{});var z1=r(Va);Ff=i(z1,"pair of sequences: "),Ml=s(z1,"CODE",{});var vw=r(Ml);qf=i(vw,"[CLS] A [SEP] B [SEP]"),vw.forEach(t),z1.forEach(t),Th.forEach(t),fi.forEach(t),zf=h(Ue),ue=s(Ue,"DIV",{class:!0});var ln=r(ue);v(cs.$$.fragment,ln),Mf=h(ln),El=s(ln,"P",{});var yw=r(El);Ef=i(yw,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),yw.forEach(t),jf=h(ln),v(so.$$.fragment,ln),Cf=h(ln),jl=s(ln,"P",{});var ww=r(jl);Pf=i(ww,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),ww.forEach(t),ln.forEach(t),Lf=h(Ue),ro=s(Ue,"DIV",{class:!0});var xh=r(ro);v(ps.$$.fragment,xh),Af=h(xh),hs=s(xh,"P",{});var Fh=r(hs);Of=i(Fh,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Cl=s(Fh,"CODE",{});var $w=r(Cl);If=i($w,"prepare_for_model"),$w.forEach(t),Nf=i(Fh," method."),Fh.forEach(t),xh.forEach(t),Ue.forEach(t),Ep=h(o),ot=s(o,"H2",{class:!0});var qh=r(ot);ao=s(qh,"A",{id:!0,class:!0,href:!0});var Tw=r(ao);Pl=s(Tw,"SPAN",{});var xw=r(Pl);v(ms.$$.fragment,xw),xw.forEach(t),Tw.forEach(t),Sf=h(qh),Ll=s(qh,"SPAN",{});var Fw=r(Ll);Df=i(Fw,"BigBird specific outputs"),Fw.forEach(t),qh.forEach(t),jp=h(o),nt=s(o,"DIV",{class:!0});var zh=r(nt);v(gs.$$.fragment,zh),Wf=h(zh),fs=s(zh,"P",{});var Mh=r(fs);Uf=i(Mh,"Output type of "),Ga=s(Mh,"A",{href:!0});var qw=r(Ga);Qf=i(qw,"BigBirdForPreTraining"),qw.forEach(t),Rf=i(Mh,"."),Mh.forEach(t),zh.forEach(t),Cp=h(o),st=s(o,"H2",{class:!0});var Eh=r(st);io=s(Eh,"A",{id:!0,class:!0,href:!0});var zw=r(io);Al=s(zw,"SPAN",{});var Mw=r(Al);v(us.$$.fragment,Mw),Mw.forEach(t),zw.forEach(t),Vf=h(Eh),Ol=s(Eh,"SPAN",{});var Ew=r(Ol);Gf=i(Ew,"BigBirdModel"),Ew.forEach(t),Eh.forEach(t),Pp=h(o),H=s(o,"DIV",{class:!0});var Qe=r(H);v(_s.$$.fragment,Qe),Hf=h(Qe),bs=s(Qe,"P",{});var jh=r(bs);Jf=i(jh,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ks=s(jh,"A",{href:!0,rel:!0});var jw=r(ks);Kf=i(jw,"torch.nn.Module"),jw.forEach(t),Xf=i(jh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jh.forEach(t),Yf=h(Qe),Bs=s(Qe,"P",{});var Ch=r(Bs);Zf=i(Ch,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),vs=s(Ch,"A",{href:!0,rel:!0});var Cw=r(vs);eu=i(Cw,`Attention is
all you need`),Cw.forEach(t),tu=i(Ch,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ch.forEach(t),ou=h(Qe),Q=s(Qe,"P",{});var te=r(Q);nu=i(te,"To behave as an decoder the model needs to be initialized with the "),Il=s(te,"CODE",{});var Pw=r(Il);su=i(Pw,"is_decoder"),Pw.forEach(t),ru=i(te,` argument of the configuration set
to `),Nl=s(te,"CODE",{});var Lw=r(Nl);au=i(Lw,"True"),Lw.forEach(t),iu=i(te,". To be used in a Seq2Seq model, the model needs to initialized with both "),Sl=s(te,"CODE",{});var Aw=r(Sl);lu=i(Aw,"is_decoder"),Aw.forEach(t),du=i(te,` argument and
`),Dl=s(te,"CODE",{});var Ow=r(Dl);cu=i(Ow,"add_cross_attention"),Ow.forEach(t),pu=i(te," set to "),Wl=s(te,"CODE",{});var Iw=r(Wl);hu=i(Iw,"True"),Iw.forEach(t),mu=i(te,"; an "),Ul=s(te,"CODE",{});var Nw=r(Ul);gu=i(Nw,"encoder_hidden_states"),Nw.forEach(t),fu=i(te," is then expected as an input to the forward pass."),te.forEach(t),uu=h(Qe),_e=s(Qe,"DIV",{class:!0});var dn=r(_e);v(ys.$$.fragment,dn),_u=h(dn),rt=s(dn,"P",{});var ui=r(rt);bu=i(ui,"The "),Ha=s(ui,"A",{href:!0});var Sw=r(Ha);ku=i(Sw,"BigBirdModel"),Sw.forEach(t),Bu=i(ui," forward method, overrides the "),Ql=s(ui,"CODE",{});var Dw=r(Ql);vu=i(Dw,"__call__"),Dw.forEach(t),yu=i(ui," special method."),ui.forEach(t),wu=h(dn),v(lo.$$.fragment,dn),$u=h(dn),v(co.$$.fragment,dn),dn.forEach(t),Qe.forEach(t),Lp=h(o),at=s(o,"H2",{class:!0});var Ph=r(at);po=s(Ph,"A",{id:!0,class:!0,href:!0});var Ww=r(po);Rl=s(Ww,"SPAN",{});var Uw=r(Rl);v(ws.$$.fragment,Uw),Uw.forEach(t),Ww.forEach(t),Tu=h(Ph),Vl=s(Ph,"SPAN",{});var Qw=r(Vl);xu=i(Qw,"BigBirdForPreTraining"),Qw.forEach(t),Ph.forEach(t),Ap=h(o),it=s(o,"DIV",{class:!0});var Lh=r(it);v($s.$$.fragment,Lh),Fu=h(Lh),be=s(Lh,"DIV",{class:!0});var cn=r(be);v(Ts.$$.fragment,cn),qu=h(cn),lt=s(cn,"P",{});var _i=r(lt);zu=i(_i,"The "),Ja=s(_i,"A",{href:!0});var Rw=r(Ja);Mu=i(Rw,"BigBirdForPreTraining"),Rw.forEach(t),Eu=i(_i," forward method, overrides the "),Gl=s(_i,"CODE",{});var Vw=r(Gl);ju=i(Vw,"__call__"),Vw.forEach(t),Cu=i(_i," special method."),_i.forEach(t),Pu=h(cn),v(ho.$$.fragment,cn),Lu=h(cn),v(mo.$$.fragment,cn),cn.forEach(t),Lh.forEach(t),Op=h(o),dt=s(o,"H2",{class:!0});var Ah=r(dt);go=s(Ah,"A",{id:!0,class:!0,href:!0});var Gw=r(go);Hl=s(Gw,"SPAN",{});var Hw=r(Hl);v(xs.$$.fragment,Hw),Hw.forEach(t),Gw.forEach(t),Au=h(Ah),Jl=s(Ah,"SPAN",{});var Jw=r(Jl);Ou=i(Jw,"BigBirdForCausalLM"),Jw.forEach(t),Ah.forEach(t),Ip=h(o),Me=s(o,"DIV",{class:!0});var bi=r(Me);v(Fs.$$.fragment,bi),Iu=h(bi),ct=s(bi,"P",{});var ki=r(ct);Nu=i(ki,"BigBird Model with a "),Kl=s(ki,"CODE",{});var Kw=r(Kl);Su=i(Kw,"language modeling"),Kw.forEach(t),Du=i(ki,` head on top for CLM fine-tuning.
This model is a PyTorch `),qs=s(ki,"A",{href:!0,rel:!0});var Xw=r(qs);Wu=i(Xw,"torch.nn.Module"),Xw.forEach(t),Uu=i(ki,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ki.forEach(t),Qu=h(bi),ke=s(bi,"DIV",{class:!0});var pn=r(ke);v(zs.$$.fragment,pn),Ru=h(pn),pt=s(pn,"P",{});var Bi=r(pt);Vu=i(Bi,"The "),Ka=s(Bi,"A",{href:!0});var Yw=r(Ka);Gu=i(Yw,"BigBirdForCausalLM"),Yw.forEach(t),Hu=i(Bi," forward method, overrides the "),Xl=s(Bi,"CODE",{});var Zw=r(Xl);Ju=i(Zw,"__call__"),Zw.forEach(t),Ku=i(Bi," special method."),Bi.forEach(t),Xu=h(pn),v(fo.$$.fragment,pn),Yu=h(pn),v(uo.$$.fragment,pn),pn.forEach(t),bi.forEach(t),Np=h(o),ht=s(o,"H2",{class:!0});var Oh=r(ht);_o=s(Oh,"A",{id:!0,class:!0,href:!0});var e$=r(_o);Yl=s(e$,"SPAN",{});var t$=r(Yl);v(Ms.$$.fragment,t$),t$.forEach(t),e$.forEach(t),Zu=h(Oh),Zl=s(Oh,"SPAN",{});var o$=r(Zl);e_=i(o$,"BigBirdForMaskedLM"),o$.forEach(t),Oh.forEach(t),Sp=h(o),Ee=s(o,"DIV",{class:!0});var vi=r(Ee);v(Es.$$.fragment,vi),t_=h(vi),mt=s(vi,"P",{});var yi=r(mt);o_=i(yi,"BigBird Model with a "),ed=s(yi,"CODE",{});var n$=r(ed);n_=i(n$,"language modeling"),n$.forEach(t),s_=i(yi,` head on top.
This model is a PyTorch `),js=s(yi,"A",{href:!0,rel:!0});var s$=r(js);r_=i(s$,"torch.nn.Module"),s$.forEach(t),a_=i(yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yi.forEach(t),i_=h(vi),K=s(vi,"DIV",{class:!0});var Re=r(K);v(Cs.$$.fragment,Re),l_=h(Re),gt=s(Re,"P",{});var wi=r(gt);d_=i(wi,"The "),Xa=s(wi,"A",{href:!0});var r$=r(Xa);c_=i(r$,"BigBirdForMaskedLM"),r$.forEach(t),p_=i(wi," forward method, overrides the "),td=s(wi,"CODE",{});var a$=r(td);h_=i(a$,"__call__"),a$.forEach(t),m_=i(wi," special method."),wi.forEach(t),g_=h(Re),v(bo.$$.fragment,Re),f_=h(Re),v(ko.$$.fragment,Re),u_=h(Re),v(Bo.$$.fragment,Re),Re.forEach(t),vi.forEach(t),Dp=h(o),ft=s(o,"H2",{class:!0});var Ih=r(ft);vo=s(Ih,"A",{id:!0,class:!0,href:!0});var i$=r(vo);od=s(i$,"SPAN",{});var l$=r(od);v(Ps.$$.fragment,l$),l$.forEach(t),i$.forEach(t),__=h(Ih),nd=s(Ih,"SPAN",{});var d$=r(nd);b_=i(d$,"BigBirdForSequenceClassification"),d$.forEach(t),Ih.forEach(t),Wp=h(o),pe=s(o,"DIV",{class:!0});var hn=r(pe);v(Ls.$$.fragment,hn),k_=h(hn),sd=s(hn,"P",{});var c$=r(sd);B_=i(c$,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),c$.forEach(t),v_=h(hn),As=s(hn,"P",{});var Nh=r(As);y_=i(Nh,"This model is a PyTorch "),Os=s(Nh,"A",{href:!0,rel:!0});var p$=r(Os);w_=i(p$,"torch.nn.Module"),p$.forEach(t),$_=i(Nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),T_=h(hn),X=s(hn,"DIV",{class:!0});var Ve=r(X);v(Is.$$.fragment,Ve),x_=h(Ve),ut=s(Ve,"P",{});var $i=r(ut);F_=i($i,"The "),Ya=s($i,"A",{href:!0});var h$=r(Ya);q_=i(h$,"BigBirdForSequenceClassification"),h$.forEach(t),z_=i($i," forward method, overrides the "),rd=s($i,"CODE",{});var m$=r(rd);M_=i(m$,"__call__"),m$.forEach(t),E_=i($i," special method."),$i.forEach(t),j_=h(Ve),v(yo.$$.fragment,Ve),C_=h(Ve),v(wo.$$.fragment,Ve),P_=h(Ve),v($o.$$.fragment,Ve),Ve.forEach(t),hn.forEach(t),Up=h(o),_t=s(o,"H2",{class:!0});var Sh=r(_t);To=s(Sh,"A",{id:!0,class:!0,href:!0});var g$=r(To);ad=s(g$,"SPAN",{});var f$=r(ad);v(Ns.$$.fragment,f$),f$.forEach(t),g$.forEach(t),L_=h(Sh),id=s(Sh,"SPAN",{});var u$=r(id);A_=i(u$,"BigBirdForMultipleChoice"),u$.forEach(t),Sh.forEach(t),Qp=h(o),he=s(o,"DIV",{class:!0});var mn=r(he);v(Ss.$$.fragment,mn),O_=h(mn),ld=s(mn,"P",{});var _$=r(ld);I_=i(_$,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_$.forEach(t),N_=h(mn),Ds=s(mn,"P",{});var Dh=r(Ds);S_=i(Dh,"This model is a PyTorch "),Ws=s(Dh,"A",{href:!0,rel:!0});var b$=r(Ws);D_=i(b$,"torch.nn.Module"),b$.forEach(t),W_=i(Dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dh.forEach(t),U_=h(mn),Be=s(mn,"DIV",{class:!0});var gn=r(Be);v(Us.$$.fragment,gn),Q_=h(gn),bt=s(gn,"P",{});var Ti=r(bt);R_=i(Ti,"The "),Za=s(Ti,"A",{href:!0});var k$=r(Za);V_=i(k$,"BigBirdForMultipleChoice"),k$.forEach(t),G_=i(Ti," forward method, overrides the "),dd=s(Ti,"CODE",{});var B$=r(dd);H_=i(B$,"__call__"),B$.forEach(t),J_=i(Ti," special method."),Ti.forEach(t),K_=h(gn),v(xo.$$.fragment,gn),X_=h(gn),v(Fo.$$.fragment,gn),gn.forEach(t),mn.forEach(t),Rp=h(o),kt=s(o,"H2",{class:!0});var Wh=r(kt);qo=s(Wh,"A",{id:!0,class:!0,href:!0});var v$=r(qo);cd=s(v$,"SPAN",{});var y$=r(cd);v(Qs.$$.fragment,y$),y$.forEach(t),v$.forEach(t),Y_=h(Wh),pd=s(Wh,"SPAN",{});var w$=r(pd);Z_=i(w$,"BigBirdForTokenClassification"),w$.forEach(t),Wh.forEach(t),Vp=h(o),me=s(o,"DIV",{class:!0});var fn=r(me);v(Rs.$$.fragment,fn),eb=h(fn),hd=s(fn,"P",{});var $$=r(hd);tb=i($$,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$$.forEach(t),ob=h(fn),Vs=s(fn,"P",{});var Uh=r(Vs);nb=i(Uh,"This model is a PyTorch "),Gs=s(Uh,"A",{href:!0,rel:!0});var T$=r(Gs);sb=i(T$,"torch.nn.Module"),T$.forEach(t),rb=i(Uh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),ab=h(fn),Y=s(fn,"DIV",{class:!0});var Ge=r(Y);v(Hs.$$.fragment,Ge),ib=h(Ge),Bt=s(Ge,"P",{});var xi=r(Bt);lb=i(xi,"The "),ei=s(xi,"A",{href:!0});var x$=r(ei);db=i(x$,"BigBirdForTokenClassification"),x$.forEach(t),cb=i(xi," forward method, overrides the "),md=s(xi,"CODE",{});var F$=r(md);pb=i(F$,"__call__"),F$.forEach(t),hb=i(xi," special method."),xi.forEach(t),mb=h(Ge),v(zo.$$.fragment,Ge),gb=h(Ge),v(Mo.$$.fragment,Ge),fb=h(Ge),v(Eo.$$.fragment,Ge),Ge.forEach(t),fn.forEach(t),Gp=h(o),vt=s(o,"H2",{class:!0});var Qh=r(vt);jo=s(Qh,"A",{id:!0,class:!0,href:!0});var q$=r(jo);gd=s(q$,"SPAN",{});var z$=r(gd);v(Js.$$.fragment,z$),z$.forEach(t),q$.forEach(t),ub=h(Qh),fd=s(Qh,"SPAN",{});var M$=r(fd);_b=i(M$,"BigBirdForQuestionAnswering"),M$.forEach(t),Qh.forEach(t),Hp=h(o),ge=s(o,"DIV",{class:!0});var un=r(ge);v(Ks.$$.fragment,un),bb=h(un),yt=s(un,"P",{});var Fi=r(yt);kb=i(Fi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ud=s(Fi,"CODE",{});var E$=r(ud);Bb=i(E$,"span start logits"),E$.forEach(t),vb=i(Fi," and "),_d=s(Fi,"CODE",{});var j$=r(_d);yb=i(j$,"span end logits"),j$.forEach(t),wb=i(Fi,")."),Fi.forEach(t),$b=h(un),Xs=s(un,"P",{});var Rh=r(Xs);Tb=i(Rh,"This model is a PyTorch "),Ys=s(Rh,"A",{href:!0,rel:!0});var C$=r(Ys);xb=i(C$,"torch.nn.Module"),C$.forEach(t),Fb=i(Rh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),qb=h(un),Z=s(un,"DIV",{class:!0});var He=r(Z);v(Zs.$$.fragment,He),zb=h(He),wt=s(He,"P",{});var qi=r(wt);Mb=i(qi,"The "),ti=s(qi,"A",{href:!0});var P$=r(ti);Eb=i(P$,"BigBirdForQuestionAnswering"),P$.forEach(t),jb=i(qi," forward method, overrides the "),bd=s(qi,"CODE",{});var L$=r(bd);Cb=i(L$,"__call__"),L$.forEach(t),Pb=i(qi," special method."),qi.forEach(t),Lb=h(He),v(Co.$$.fragment,He),Ab=h(He),v(Po.$$.fragment,He),Ob=h(He),v(Lo.$$.fragment,He),He.forEach(t),un.forEach(t),Jp=h(o),$t=s(o,"H2",{class:!0});var Vh=r($t);Ao=s(Vh,"A",{id:!0,class:!0,href:!0});var A$=r(Ao);kd=s(A$,"SPAN",{});var O$=r(kd);v(er.$$.fragment,O$),O$.forEach(t),A$.forEach(t),Ib=h(Vh),Bd=s(Vh,"SPAN",{});var I$=r(Bd);Nb=i(I$,"FlaxBigBirdModel"),I$.forEach(t),Vh.forEach(t),Kp=h(o),L=s(o,"DIV",{class:!0});var oe=r(L);v(tr.$$.fragment,oe),Sb=h(oe),vd=s(oe,"P",{});var N$=r(vd);Db=i(N$,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),N$.forEach(t),Wb=h(oe),or=s(oe,"P",{});var Gh=r(or);Ub=i(Gh,"This model inherits from "),oi=s(Gh,"A",{href:!0});var S$=r(oi);Qb=i(S$,"FlaxPreTrainedModel"),S$.forEach(t),Rb=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gh.forEach(t),Vb=h(oe),nr=s(oe,"P",{});var Hh=r(nr);Gb=i(Hh,"This model is also a Flax Linen "),sr=s(Hh,"A",{href:!0,rel:!0});var D$=r(sr);Hb=i(D$,"flax.linen.Module"),D$.forEach(t),Jb=i(Hh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hh.forEach(t),Kb=h(oe),yd=s(oe,"P",{});var W$=r(yd);Xb=i(W$,"Finally, this model supports inherent JAX features such as:"),W$.forEach(t),Yb=h(oe),je=s(oe,"UL",{});var _n=r(je);wd=s(_n,"LI",{});var U$=r(wd);rr=s(U$,"A",{href:!0,rel:!0});var Q$=r(rr);Zb=i(Q$,"Just-In-Time (JIT) compilation"),Q$.forEach(t),U$.forEach(t),ek=h(_n),$d=s(_n,"LI",{});var R$=r($d);ar=s(R$,"A",{href:!0,rel:!0});var V$=r(ar);tk=i(V$,"Automatic Differentiation"),V$.forEach(t),R$.forEach(t),ok=h(_n),Td=s(_n,"LI",{});var G$=r(Td);ir=s(G$,"A",{href:!0,rel:!0});var H$=r(ir);nk=i(H$,"Vectorization"),H$.forEach(t),G$.forEach(t),sk=h(_n),xd=s(_n,"LI",{});var J$=r(xd);lr=s(J$,"A",{href:!0,rel:!0});var K$=r(lr);rk=i(K$,"Parallelization"),K$.forEach(t),J$.forEach(t),_n.forEach(t),ak=h(oe),ve=s(oe,"DIV",{class:!0});var bn=r(ve);v(dr.$$.fragment,bn),ik=h(bn),Tt=s(bn,"P",{});var zi=r(Tt);lk=i(zi,"The "),Fd=s(zi,"CODE",{});var X$=r(Fd);dk=i(X$,"FlaxBigBirdPreTrainedModel"),X$.forEach(t),ck=i(zi," forward method, overrides the "),qd=s(zi,"CODE",{});var Y$=r(qd);pk=i(Y$,"__call__"),Y$.forEach(t),hk=i(zi," special method."),zi.forEach(t),mk=h(bn),v(Oo.$$.fragment,bn),gk=h(bn),v(Io.$$.fragment,bn),bn.forEach(t),oe.forEach(t),Xp=h(o),xt=s(o,"H2",{class:!0});var Jh=r(xt);No=s(Jh,"A",{id:!0,class:!0,href:!0});var Z$=r(No);zd=s(Z$,"SPAN",{});var eT=r(zd);v(cr.$$.fragment,eT),eT.forEach(t),Z$.forEach(t),fk=h(Jh),Md=s(Jh,"SPAN",{});var tT=r(Md);uk=i(tT,"FlaxBigBirdForPreTraining"),tT.forEach(t),Jh.forEach(t),Yp=h(o),A=s(o,"DIV",{class:!0});var ne=r(A);v(pr.$$.fragment,ne),_k=h(ne),Ft=s(ne,"P",{});var Mi=r(Ft);bk=i(Mi,"BigBird Model with two heads on top as done during the pretraining: a "),Ed=s(Mi,"CODE",{});var oT=r(Ed);kk=i(oT,"masked language modeling"),oT.forEach(t),Bk=i(Mi," head and a "),jd=s(Mi,"CODE",{});var nT=r(jd);vk=i(nT,"next sentence prediction (classification)"),nT.forEach(t),yk=i(Mi," head."),Mi.forEach(t),wk=h(ne),hr=s(ne,"P",{});var Kh=r(hr);$k=i(Kh,"This model inherits from "),ni=s(Kh,"A",{href:!0});var sT=r(ni);Tk=i(sT,"FlaxPreTrainedModel"),sT.forEach(t),xk=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kh.forEach(t),Fk=h(ne),mr=s(ne,"P",{});var Xh=r(mr);qk=i(Xh,"This model is also a Flax Linen "),gr=s(Xh,"A",{href:!0,rel:!0});var rT=r(gr);zk=i(rT,"flax.linen.Module"),rT.forEach(t),Mk=i(Xh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xh.forEach(t),Ek=h(ne),Cd=s(ne,"P",{});var aT=r(Cd);jk=i(aT,"Finally, this model supports inherent JAX features such as:"),aT.forEach(t),Ck=h(ne),Ce=s(ne,"UL",{});var kn=r(Ce);Pd=s(kn,"LI",{});var iT=r(Pd);fr=s(iT,"A",{href:!0,rel:!0});var lT=r(fr);Pk=i(lT,"Just-In-Time (JIT) compilation"),lT.forEach(t),iT.forEach(t),Lk=h(kn),Ld=s(kn,"LI",{});var dT=r(Ld);ur=s(dT,"A",{href:!0,rel:!0});var cT=r(ur);Ak=i(cT,"Automatic Differentiation"),cT.forEach(t),dT.forEach(t),Ok=h(kn),Ad=s(kn,"LI",{});var pT=r(Ad);_r=s(pT,"A",{href:!0,rel:!0});var hT=r(_r);Ik=i(hT,"Vectorization"),hT.forEach(t),pT.forEach(t),Nk=h(kn),Od=s(kn,"LI",{});var mT=r(Od);br=s(mT,"A",{href:!0,rel:!0});var gT=r(br);Sk=i(gT,"Parallelization"),gT.forEach(t),mT.forEach(t),kn.forEach(t),Dk=h(ne),ye=s(ne,"DIV",{class:!0});var Bn=r(ye);v(kr.$$.fragment,Bn),Wk=h(Bn),qt=s(Bn,"P",{});var Ei=r(qt);Uk=i(Ei,"The "),Id=s(Ei,"CODE",{});var fT=r(Id);Qk=i(fT,"FlaxBigBirdPreTrainedModel"),fT.forEach(t),Rk=i(Ei," forward method, overrides the "),Nd=s(Ei,"CODE",{});var uT=r(Nd);Vk=i(uT,"__call__"),uT.forEach(t),Gk=i(Ei," special method."),Ei.forEach(t),Hk=h(Bn),v(So.$$.fragment,Bn),Jk=h(Bn),v(Do.$$.fragment,Bn),Bn.forEach(t),ne.forEach(t),Zp=h(o),zt=s(o,"H2",{class:!0});var Yh=r(zt);Wo=s(Yh,"A",{id:!0,class:!0,href:!0});var _T=r(Wo);Sd=s(_T,"SPAN",{});var bT=r(Sd);v(Br.$$.fragment,bT),bT.forEach(t),_T.forEach(t),Kk=h(Yh),Dd=s(Yh,"SPAN",{});var kT=r(Dd);Xk=i(kT,"FlaxBigBirdForCausalLM"),kT.forEach(t),Yh.forEach(t),eh=h(o),O=s(o,"DIV",{class:!0});var se=r(O);v(vr.$$.fragment,se),Yk=h(se),Wd=s(se,"P",{});var BT=r(Wd);Zk=i(BT,`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),BT.forEach(t),eB=h(se),yr=s(se,"P",{});var Zh=r(yr);tB=i(Zh,"This model inherits from "),si=s(Zh,"A",{href:!0});var vT=r(si);oB=i(vT,"FlaxPreTrainedModel"),vT.forEach(t),nB=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zh.forEach(t),sB=h(se),wr=s(se,"P",{});var em=r(wr);rB=i(em,"This model is also a Flax Linen "),$r=s(em,"A",{href:!0,rel:!0});var yT=r($r);aB=i(yT,"flax.linen.Module"),yT.forEach(t),iB=i(em,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),em.forEach(t),lB=h(se),Ud=s(se,"P",{});var wT=r(Ud);dB=i(wT,"Finally, this model supports inherent JAX features such as:"),wT.forEach(t),cB=h(se),Pe=s(se,"UL",{});var vn=r(Pe);Qd=s(vn,"LI",{});var $T=r(Qd);Tr=s($T,"A",{href:!0,rel:!0});var TT=r(Tr);pB=i(TT,"Just-In-Time (JIT) compilation"),TT.forEach(t),$T.forEach(t),hB=h(vn),Rd=s(vn,"LI",{});var xT=r(Rd);xr=s(xT,"A",{href:!0,rel:!0});var FT=r(xr);mB=i(FT,"Automatic Differentiation"),FT.forEach(t),xT.forEach(t),gB=h(vn),Vd=s(vn,"LI",{});var qT=r(Vd);Fr=s(qT,"A",{href:!0,rel:!0});var zT=r(Fr);fB=i(zT,"Vectorization"),zT.forEach(t),qT.forEach(t),uB=h(vn),Gd=s(vn,"LI",{});var MT=r(Gd);qr=s(MT,"A",{href:!0,rel:!0});var ET=r(qr);_B=i(ET,"Parallelization"),ET.forEach(t),MT.forEach(t),vn.forEach(t),bB=h(se),we=s(se,"DIV",{class:!0});var yn=r(we);v(zr.$$.fragment,yn),kB=h(yn),Mt=s(yn,"P",{});var ji=r(Mt);BB=i(ji,"The "),Hd=s(ji,"CODE",{});var jT=r(Hd);vB=i(jT,"FlaxBigBirdPreTrainedModel"),jT.forEach(t),yB=i(ji," forward method, overrides the "),Jd=s(ji,"CODE",{});var CT=r(Jd);wB=i(CT,"__call__"),CT.forEach(t),$B=i(ji," special method."),ji.forEach(t),TB=h(yn),v(Uo.$$.fragment,yn),xB=h(yn),v(Qo.$$.fragment,yn),yn.forEach(t),se.forEach(t),th=h(o),Et=s(o,"H2",{class:!0});var tm=r(Et);Ro=s(tm,"A",{id:!0,class:!0,href:!0});var PT=r(Ro);Kd=s(PT,"SPAN",{});var LT=r(Kd);v(Mr.$$.fragment,LT),LT.forEach(t),PT.forEach(t),FB=h(tm),Xd=s(tm,"SPAN",{});var AT=r(Xd);qB=i(AT,"FlaxBigBirdForMaskedLM"),AT.forEach(t),tm.forEach(t),oh=h(o),I=s(o,"DIV",{class:!0});var re=r(I);v(Er.$$.fragment,re),zB=h(re),jr=s(re,"P",{});var om=r(jr);MB=i(om,"BigBird Model with a "),Yd=s(om,"CODE",{});var OT=r(Yd);EB=i(OT,"language modeling"),OT.forEach(t),jB=i(om," head on top."),om.forEach(t),CB=h(re),Cr=s(re,"P",{});var nm=r(Cr);PB=i(nm,"This model inherits from "),ri=s(nm,"A",{href:!0});var IT=r(ri);LB=i(IT,"FlaxPreTrainedModel"),IT.forEach(t),AB=i(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nm.forEach(t),OB=h(re),Pr=s(re,"P",{});var sm=r(Pr);IB=i(sm,"This model is also a Flax Linen "),Lr=s(sm,"A",{href:!0,rel:!0});var NT=r(Lr);NB=i(NT,"flax.linen.Module"),NT.forEach(t),SB=i(sm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sm.forEach(t),DB=h(re),Zd=s(re,"P",{});var ST=r(Zd);WB=i(ST,"Finally, this model supports inherent JAX features such as:"),ST.forEach(t),UB=h(re),Le=s(re,"UL",{});var wn=r(Le);ec=s(wn,"LI",{});var DT=r(ec);Ar=s(DT,"A",{href:!0,rel:!0});var WT=r(Ar);QB=i(WT,"Just-In-Time (JIT) compilation"),WT.forEach(t),DT.forEach(t),RB=h(wn),tc=s(wn,"LI",{});var UT=r(tc);Or=s(UT,"A",{href:!0,rel:!0});var QT=r(Or);VB=i(QT,"Automatic Differentiation"),QT.forEach(t),UT.forEach(t),GB=h(wn),oc=s(wn,"LI",{});var RT=r(oc);Ir=s(RT,"A",{href:!0,rel:!0});var VT=r(Ir);HB=i(VT,"Vectorization"),VT.forEach(t),RT.forEach(t),JB=h(wn),nc=s(wn,"LI",{});var GT=r(nc);Nr=s(GT,"A",{href:!0,rel:!0});var HT=r(Nr);KB=i(HT,"Parallelization"),HT.forEach(t),GT.forEach(t),wn.forEach(t),XB=h(re),$e=s(re,"DIV",{class:!0});var $n=r($e);v(Sr.$$.fragment,$n),YB=h($n),jt=s($n,"P",{});var Ci=r(jt);ZB=i(Ci,"The "),sc=s(Ci,"CODE",{});var JT=r(sc);ev=i(JT,"FlaxBigBirdPreTrainedModel"),JT.forEach(t),tv=i(Ci," forward method, overrides the "),rc=s(Ci,"CODE",{});var KT=r(rc);ov=i(KT,"__call__"),KT.forEach(t),nv=i(Ci," special method."),Ci.forEach(t),sv=h($n),v(Vo.$$.fragment,$n),rv=h($n),v(Go.$$.fragment,$n),$n.forEach(t),re.forEach(t),nh=h(o),Ct=s(o,"H2",{class:!0});var rm=r(Ct);Ho=s(rm,"A",{id:!0,class:!0,href:!0});var XT=r(Ho);ac=s(XT,"SPAN",{});var YT=r(ac);v(Dr.$$.fragment,YT),YT.forEach(t),XT.forEach(t),av=h(rm),ic=s(rm,"SPAN",{});var ZT=r(ic);iv=i(ZT,"FlaxBigBirdForSequenceClassification"),ZT.forEach(t),rm.forEach(t),sh=h(o),N=s(o,"DIV",{class:!0});var ae=r(N);v(Wr.$$.fragment,ae),lv=h(ae),lc=s(ae,"P",{});var e2=r(lc);dv=i(e2,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),e2.forEach(t),cv=h(ae),Ur=s(ae,"P",{});var am=r(Ur);pv=i(am,"This model inherits from "),ai=s(am,"A",{href:!0});var t2=r(ai);hv=i(t2,"FlaxPreTrainedModel"),t2.forEach(t),mv=i(am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),am.forEach(t),gv=h(ae),Qr=s(ae,"P",{});var im=r(Qr);fv=i(im,"This model is also a Flax Linen "),Rr=s(im,"A",{href:!0,rel:!0});var o2=r(Rr);uv=i(o2,"flax.linen.Module"),o2.forEach(t),_v=i(im,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),im.forEach(t),bv=h(ae),dc=s(ae,"P",{});var n2=r(dc);kv=i(n2,"Finally, this model supports inherent JAX features such as:"),n2.forEach(t),Bv=h(ae),Ae=s(ae,"UL",{});var Tn=r(Ae);cc=s(Tn,"LI",{});var s2=r(cc);Vr=s(s2,"A",{href:!0,rel:!0});var r2=r(Vr);vv=i(r2,"Just-In-Time (JIT) compilation"),r2.forEach(t),s2.forEach(t),yv=h(Tn),pc=s(Tn,"LI",{});var a2=r(pc);Gr=s(a2,"A",{href:!0,rel:!0});var i2=r(Gr);wv=i(i2,"Automatic Differentiation"),i2.forEach(t),a2.forEach(t),$v=h(Tn),hc=s(Tn,"LI",{});var l2=r(hc);Hr=s(l2,"A",{href:!0,rel:!0});var d2=r(Hr);Tv=i(d2,"Vectorization"),d2.forEach(t),l2.forEach(t),xv=h(Tn),mc=s(Tn,"LI",{});var c2=r(mc);Jr=s(c2,"A",{href:!0,rel:!0});var p2=r(Jr);Fv=i(p2,"Parallelization"),p2.forEach(t),c2.forEach(t),Tn.forEach(t),qv=h(ae),Te=s(ae,"DIV",{class:!0});var xn=r(Te);v(Kr.$$.fragment,xn),zv=h(xn),Pt=s(xn,"P",{});var Pi=r(Pt);Mv=i(Pi,"The "),gc=s(Pi,"CODE",{});var h2=r(gc);Ev=i(h2,"FlaxBigBirdPreTrainedModel"),h2.forEach(t),jv=i(Pi," forward method, overrides the "),fc=s(Pi,"CODE",{});var m2=r(fc);Cv=i(m2,"__call__"),m2.forEach(t),Pv=i(Pi," special method."),Pi.forEach(t),Lv=h(xn),v(Jo.$$.fragment,xn),Av=h(xn),v(Ko.$$.fragment,xn),xn.forEach(t),ae.forEach(t),rh=h(o),Lt=s(o,"H2",{class:!0});var lm=r(Lt);Xo=s(lm,"A",{id:!0,class:!0,href:!0});var g2=r(Xo);uc=s(g2,"SPAN",{});var f2=r(uc);v(Xr.$$.fragment,f2),f2.forEach(t),g2.forEach(t),Ov=h(lm),_c=s(lm,"SPAN",{});var u2=r(_c);Iv=i(u2,"FlaxBigBirdForMultipleChoice"),u2.forEach(t),lm.forEach(t),ah=h(o),S=s(o,"DIV",{class:!0});var ie=r(S);v(Yr.$$.fragment,ie),Nv=h(ie),bc=s(ie,"P",{});var _2=r(bc);Sv=i(_2,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_2.forEach(t),Dv=h(ie),Zr=s(ie,"P",{});var dm=r(Zr);Wv=i(dm,"This model inherits from "),ii=s(dm,"A",{href:!0});var b2=r(ii);Uv=i(b2,"FlaxPreTrainedModel"),b2.forEach(t),Qv=i(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dm.forEach(t),Rv=h(ie),ea=s(ie,"P",{});var cm=r(ea);Vv=i(cm,"This model is also a Flax Linen "),ta=s(cm,"A",{href:!0,rel:!0});var k2=r(ta);Gv=i(k2,"flax.linen.Module"),k2.forEach(t),Hv=i(cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cm.forEach(t),Jv=h(ie),kc=s(ie,"P",{});var B2=r(kc);Kv=i(B2,"Finally, this model supports inherent JAX features such as:"),B2.forEach(t),Xv=h(ie),Oe=s(ie,"UL",{});var Fn=r(Oe);Bc=s(Fn,"LI",{});var v2=r(Bc);oa=s(v2,"A",{href:!0,rel:!0});var y2=r(oa);Yv=i(y2,"Just-In-Time (JIT) compilation"),y2.forEach(t),v2.forEach(t),Zv=h(Fn),vc=s(Fn,"LI",{});var w2=r(vc);na=s(w2,"A",{href:!0,rel:!0});var $2=r(na);ey=i($2,"Automatic Differentiation"),$2.forEach(t),w2.forEach(t),ty=h(Fn),yc=s(Fn,"LI",{});var T2=r(yc);sa=s(T2,"A",{href:!0,rel:!0});var x2=r(sa);oy=i(x2,"Vectorization"),x2.forEach(t),T2.forEach(t),ny=h(Fn),wc=s(Fn,"LI",{});var F2=r(wc);ra=s(F2,"A",{href:!0,rel:!0});var q2=r(ra);sy=i(q2,"Parallelization"),q2.forEach(t),F2.forEach(t),Fn.forEach(t),ry=h(ie),xe=s(ie,"DIV",{class:!0});var qn=r(xe);v(aa.$$.fragment,qn),ay=h(qn),At=s(qn,"P",{});var Li=r(At);iy=i(Li,"The "),$c=s(Li,"CODE",{});var z2=r($c);ly=i(z2,"FlaxBigBirdPreTrainedModel"),z2.forEach(t),dy=i(Li," forward method, overrides the "),Tc=s(Li,"CODE",{});var M2=r(Tc);cy=i(M2,"__call__"),M2.forEach(t),py=i(Li," special method."),Li.forEach(t),hy=h(qn),v(Yo.$$.fragment,qn),my=h(qn),v(Zo.$$.fragment,qn),qn.forEach(t),ie.forEach(t),ih=h(o),Ot=s(o,"H2",{class:!0});var pm=r(Ot);en=s(pm,"A",{id:!0,class:!0,href:!0});var E2=r(en);xc=s(E2,"SPAN",{});var j2=r(xc);v(ia.$$.fragment,j2),j2.forEach(t),E2.forEach(t),gy=h(pm),Fc=s(pm,"SPAN",{});var C2=r(Fc);fy=i(C2,"FlaxBigBirdForTokenClassification"),C2.forEach(t),pm.forEach(t),lh=h(o),D=s(o,"DIV",{class:!0});var le=r(D);v(la.$$.fragment,le),uy=h(le),qc=s(le,"P",{});var P2=r(qc);_y=i(P2,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),P2.forEach(t),by=h(le),da=s(le,"P",{});var hm=r(da);ky=i(hm,"This model inherits from "),li=s(hm,"A",{href:!0});var L2=r(li);By=i(L2,"FlaxPreTrainedModel"),L2.forEach(t),vy=i(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hm.forEach(t),yy=h(le),ca=s(le,"P",{});var mm=r(ca);wy=i(mm,"This model is also a Flax Linen "),pa=s(mm,"A",{href:!0,rel:!0});var A2=r(pa);$y=i(A2,"flax.linen.Module"),A2.forEach(t),Ty=i(mm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mm.forEach(t),xy=h(le),zc=s(le,"P",{});var O2=r(zc);Fy=i(O2,"Finally, this model supports inherent JAX features such as:"),O2.forEach(t),qy=h(le),Ie=s(le,"UL",{});var zn=r(Ie);Mc=s(zn,"LI",{});var I2=r(Mc);ha=s(I2,"A",{href:!0,rel:!0});var N2=r(ha);zy=i(N2,"Just-In-Time (JIT) compilation"),N2.forEach(t),I2.forEach(t),My=h(zn),Ec=s(zn,"LI",{});var S2=r(Ec);ma=s(S2,"A",{href:!0,rel:!0});var D2=r(ma);Ey=i(D2,"Automatic Differentiation"),D2.forEach(t),S2.forEach(t),jy=h(zn),jc=s(zn,"LI",{});var W2=r(jc);ga=s(W2,"A",{href:!0,rel:!0});var U2=r(ga);Cy=i(U2,"Vectorization"),U2.forEach(t),W2.forEach(t),Py=h(zn),Cc=s(zn,"LI",{});var Q2=r(Cc);fa=s(Q2,"A",{href:!0,rel:!0});var R2=r(fa);Ly=i(R2,"Parallelization"),R2.forEach(t),Q2.forEach(t),zn.forEach(t),Ay=h(le),Fe=s(le,"DIV",{class:!0});var Mn=r(Fe);v(ua.$$.fragment,Mn),Oy=h(Mn),It=s(Mn,"P",{});var Ai=r(It);Iy=i(Ai,"The "),Pc=s(Ai,"CODE",{});var V2=r(Pc);Ny=i(V2,"FlaxBigBirdPreTrainedModel"),V2.forEach(t),Sy=i(Ai," forward method, overrides the "),Lc=s(Ai,"CODE",{});var G2=r(Lc);Dy=i(G2,"__call__"),G2.forEach(t),Wy=i(Ai," special method."),Ai.forEach(t),Uy=h(Mn),v(tn.$$.fragment,Mn),Qy=h(Mn),v(on.$$.fragment,Mn),Mn.forEach(t),le.forEach(t),dh=h(o),Nt=s(o,"H2",{class:!0});var gm=r(Nt);nn=s(gm,"A",{id:!0,class:!0,href:!0});var H2=r(nn);Ac=s(H2,"SPAN",{});var J2=r(Ac);v(_a.$$.fragment,J2),J2.forEach(t),H2.forEach(t),Ry=h(gm),Oc=s(gm,"SPAN",{});var K2=r(Oc);Vy=i(K2,"FlaxBigBirdForQuestionAnswering"),K2.forEach(t),gm.forEach(t),ch=h(o),W=s(o,"DIV",{class:!0});var de=r(W);v(ba.$$.fragment,de),Gy=h(de),St=s(de,"P",{});var Oi=r(St);Hy=i(Oi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ic=s(Oi,"CODE",{});var X2=r(Ic);Jy=i(X2,"span start logits"),X2.forEach(t),Ky=i(Oi," and "),Nc=s(Oi,"CODE",{});var Y2=r(Nc);Xy=i(Y2,"span end logits"),Y2.forEach(t),Yy=i(Oi,")."),Oi.forEach(t),Zy=h(de),ka=s(de,"P",{});var fm=r(ka);e1=i(fm,"This model inherits from "),di=s(fm,"A",{href:!0});var Z2=r(di);t1=i(Z2,"FlaxPreTrainedModel"),Z2.forEach(t),o1=i(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),n1=h(de),Ba=s(de,"P",{});var um=r(Ba);s1=i(um,"This model is also a Flax Linen "),va=s(um,"A",{href:!0,rel:!0});var ex=r(va);r1=i(ex,"flax.linen.Module"),ex.forEach(t),a1=i(um,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),um.forEach(t),i1=h(de),Sc=s(de,"P",{});var tx=r(Sc);l1=i(tx,"Finally, this model supports inherent JAX features such as:"),tx.forEach(t),d1=h(de),Ne=s(de,"UL",{});var En=r(Ne);Dc=s(En,"LI",{});var ox=r(Dc);ya=s(ox,"A",{href:!0,rel:!0});var nx=r(ya);c1=i(nx,"Just-In-Time (JIT) compilation"),nx.forEach(t),ox.forEach(t),p1=h(En),Wc=s(En,"LI",{});var sx=r(Wc);wa=s(sx,"A",{href:!0,rel:!0});var rx=r(wa);h1=i(rx,"Automatic Differentiation"),rx.forEach(t),sx.forEach(t),m1=h(En),Uc=s(En,"LI",{});var ax=r(Uc);$a=s(ax,"A",{href:!0,rel:!0});var ix=r($a);g1=i(ix,"Vectorization"),ix.forEach(t),ax.forEach(t),f1=h(En),Qc=s(En,"LI",{});var lx=r(Qc);Ta=s(lx,"A",{href:!0,rel:!0});var dx=r(Ta);u1=i(dx,"Parallelization"),dx.forEach(t),lx.forEach(t),En.forEach(t),_1=h(de),qe=s(de,"DIV",{class:!0});var jn=r(qe);v(xa.$$.fragment,jn),b1=h(jn),Dt=s(jn,"P",{});var Ii=r(Dt);k1=i(Ii,"The "),ci=s(Ii,"A",{href:!0});var cx=r(ci);B1=i(cx,"FlaxBigBirdForQuestionAnswering"),cx.forEach(t),v1=i(Ii," forward method, overrides the "),Rc=s(Ii,"CODE",{});var px=r(Rc);y1=i(px,"__call__"),px.forEach(t),w1=i(Ii," special method."),Ii.forEach(t),$1=h(jn),v(sn.$$.fragment,jn),T1=h(jn),v(rn.$$.fragment,jn),jn.forEach(t),de.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(oF)),c(f,"id","bigbird"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#bigbird"),c(g,"class","relative group"),c(Qt,"id","overview"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#overview"),c(Je,"class","relative group"),c(Pn,"href","https://arxiv.org/abs/2007.14062"),c(Pn,"rel","nofollow"),c(An,"href","https://huggingface.co/blog/big-bird"),c(An,"rel","nofollow"),c(In,"href","https://huggingface.co/vasudevgupta"),c(In,"rel","nofollow"),c(Nn,"href","https://github.com/google-research/bigbird"),c(Nn,"rel","nofollow"),c(Vt,"id","transformers.BigBirdConfig"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.BigBirdConfig"),c(Ke,"class","relative group"),c(Oa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(Wn,"href","https://huggingface.co/google/bigbird-roberta-base"),c(Wn,"rel","nofollow"),c(Ia,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Na,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jt,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Ht,"class","relative group"),c(Xt,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Kt,"class","relative group"),c(Zt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Yt,"class","relative group"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.BigBirdTokenizer"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.BigBirdTokenizer"),c(Ze,"class","relative group"),c(Xn,"href","https://github.com/google/sentencepiece"),c(Xn,"rel","nofollow"),c(Sa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ua,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.BigBirdTokenizerFast"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.BigBirdTokenizerFast"),c(tt,"class","relative group"),c(is,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(is,"rel","nofollow"),c(Qa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ot,"class","relative group"),c(Ga,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdModel"),c(st,"class","relative group"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(vs,"href","https://arxiv.org/abs/1706.03762"),c(vs,"rel","nofollow"),c(Ha,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForPreTraining"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForPreTraining"),c(at,"class","relative group"),c(Ja,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.BigBirdForCausalLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.BigBirdForCausalLM"),c(dt,"class","relative group"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(Ka,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_o,"id","transformers.BigBirdForMaskedLM"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.BigBirdForMaskedLM"),c(ht,"class","relative group"),c(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(js,"rel","nofollow"),c(Xa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.BigBirdForSequenceClassification"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.BigBirdForSequenceClassification"),c(ft,"class","relative group"),c(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Os,"rel","nofollow"),c(Ya,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(To,"id","transformers.BigBirdForMultipleChoice"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.BigBirdForMultipleChoice"),c(_t,"class","relative group"),c(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ws,"rel","nofollow"),c(Za,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"id","transformers.BigBirdForTokenClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BigBirdForTokenClassification"),c(kt,"class","relative group"),c(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gs,"rel","nofollow"),c(ei,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jo,"id","transformers.BigBirdForQuestionAnswering"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BigBirdForQuestionAnswering"),c(vt,"class","relative group"),c(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ys,"rel","nofollow"),c(ti,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdModel"),c($t,"class","relative group"),c(oi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(sr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ir,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(lr,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(No,"id","transformers.FlaxBigBirdForPreTraining"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxBigBirdForPreTraining"),c(xt,"class","relative group"),c(ni,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(gr,"rel","nofollow"),c(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(fr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_r,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(br,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"id","transformers.FlaxBigBirdForCausalLM"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxBigBirdForCausalLM"),c(zt,"class","relative group"),c(si,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($r,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c($r,"rel","nofollow"),c(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Tr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(qr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ro,"id","transformers.FlaxBigBirdForMaskedLM"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Et,"class","relative group"),c(ri,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Lr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Lr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ar,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Or,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Nr,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ho,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Ct,"class","relative group"),c(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Rr,"rel","nofollow"),c(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Vr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Gr,"rel","nofollow"),c(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Hr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(Lt,"class","relative group"),c(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ra,"rel","nofollow"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(en,"id","transformers.FlaxBigBirdForTokenClassification"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Ot,"class","relative group"),c(li,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(pa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ha,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ga,"rel","nofollow"),c(fa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(fa,"rel","nofollow"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nn,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Nt,"class","relative group"),c(di,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(va,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(va,"rel","nofollow"),c(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ya,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(wa,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c($a,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ta,"rel","nofollow"),c(ci,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,g,u),e(g,f),e(f,b),y(l,b,null),e(g,m),e(g,F),e(F,_m),k(o,bp,u),k(o,Je,u),e(Je,Qt),e(Qt,Ni),y(Cn,Ni,null),e(Je,bm),e(Je,Si),e(Si,km),k(o,kp,u),k(o,Rt,u),e(Rt,Bm),e(Rt,Pn),e(Pn,vm),e(Rt,ym),k(o,Bp,u),k(o,Ca,u),e(Ca,wm),k(o,vp,u),k(o,Pa,u),e(Pa,Di),e(Di,$m),k(o,yp,u),k(o,La,u),e(La,Tm),k(o,wp,u),k(o,R,u),e(R,Ln),e(Ln,xm),e(Ln,An),e(An,Fm),e(Ln,qm),e(R,zm),e(R,ce),e(ce,Mm),e(ce,Wi),e(Wi,Em),e(ce,jm),e(ce,Ui),e(Ui,Cm),e(ce,Pm),e(ce,Qi),e(Qi,Lm),e(ce,Am),e(ce,Ri),e(Ri,Om),e(ce,Im),e(R,Nm),e(R,Vi),e(Vi,Sm),e(R,Dm),e(R,Gi),e(Gi,Wm),e(R,Um),e(R,On),e(On,Qm),e(On,Hi),e(Hi,Rm),e(On,Vm),e(R,Gm),e(R,Aa),e(Aa,Hm),e(Aa,Ji),e(Ji,Jm),k(o,$p,u),k(o,Se,u),e(Se,Km),e(Se,In),e(In,Xm),e(Se,Ym),e(Se,Nn),e(Nn,Zm),e(Se,eg),k(o,Tp,u),k(o,Ke,u),e(Ke,Vt),e(Vt,Ki),y(Sn,Ki,null),e(Ke,tg),e(Ke,Xi),e(Xi,og),k(o,xp,u),k(o,C,u),y(Dn,C,null),e(C,ng),e(C,Xe),e(Xe,sg),e(Xe,Oa),e(Oa,rg),e(Xe,ag),e(Xe,Wn),e(Wn,ig),e(Xe,lg),e(C,dg),e(C,Ye),e(Ye,cg),e(Ye,Ia),e(Ia,pg),e(Ye,hg),e(Ye,Na),e(Na,mg),e(Ye,gg),e(C,fg),y(Gt,C,null),e(C,ug),e(C,Yi),e(Yi,Zi),e(Zi,el),e(el,tl),e(tl,_g),e(C,bg),e(C,ol),e(ol,nl),e(nl,Un),e(Un,Ht),e(Ht,Jt),e(Jt,sl),y(Qn,sl,null),e(Ht,kg),e(Ht,rl),e(rl,Bg),e(Un,vg),e(Un,al),e(al,yg),e(C,wg),e(C,il),e(il,ll),e(ll,Rn),e(Rn,Kt),e(Kt,Xt),e(Xt,dl),y(Vn,dl,null),e(Kt,$g),e(Kt,cl),e(cl,Tg),e(Rn,xg),e(Rn,pl),e(pl,Fg),e(C,qg),e(C,hl),e(hl,ml),e(ml,gl),e(gl,Yt),e(Yt,Zt),e(Zt,fl),y(Gn,fl,null),e(Yt,zg),e(Yt,ul),e(ul,Mg),k(o,Fp,u),k(o,Ze,u),e(Ze,eo),e(eo,_l),y(Hn,_l,null),e(Ze,Eg),e(Ze,bl),e(bl,jg),k(o,qp,u),k(o,P,u),y(Jn,P,null),e(P,Cg),e(P,Kn),e(Kn,Pg),e(Kn,Xn),e(Xn,Lg),e(Kn,Ag),e(P,Og),e(P,Yn),e(Yn,Ig),e(Yn,Sa),e(Sa,Ng),e(Yn,Sg),e(P,Dg),e(P,De),y(Zn,De,null),e(De,Wg),e(De,kl),e(kl,Ug),e(De,Qg),e(De,es),e(es,Da),e(Da,Rg),e(Da,Bl),e(Bl,Vg),e(es,Gg),e(es,Wa),e(Wa,Hg),e(Wa,vl),e(vl,Jg),e(P,Kg),e(P,to),y(ts,to,null),e(to,Xg),e(to,os),e(os,Yg),e(os,yl),e(yl,Zg),e(os,ef),e(P,tf),e(P,oo),y(ns,oo,null),e(oo,of),e(oo,et),e(et,nf),e(et,wl),e(wl,sf),e(et,rf),e(et,$l),e($l,af),e(et,lf),e(P,df),e(P,Ua),y(ss,Ua,null),k(o,zp,u),k(o,tt,u),e(tt,no),e(no,Tl),y(rs,Tl,null),e(tt,cf),e(tt,xl),e(xl,pf),k(o,Mp,u),k(o,G,u),y(as,G,null),e(G,hf),e(G,ze),e(ze,mf),e(ze,Fl),e(Fl,gf),e(ze,ff),e(ze,is),e(is,uf),e(ze,_f),e(ze,Qa),e(Qa,bf),e(ze,kf),e(G,Bf),e(G,We),y(ls,We,null),e(We,vf),e(We,ql),e(ql,yf),e(We,wf),e(We,ds),e(ds,Ra),e(Ra,$f),e(Ra,zl),e(zl,Tf),e(ds,xf),e(ds,Va),e(Va,Ff),e(Va,Ml),e(Ml,qf),e(G,zf),e(G,ue),y(cs,ue,null),e(ue,Mf),e(ue,El),e(El,Ef),e(ue,jf),y(so,ue,null),e(ue,Cf),e(ue,jl),e(jl,Pf),e(G,Lf),e(G,ro),y(ps,ro,null),e(ro,Af),e(ro,hs),e(hs,Of),e(hs,Cl),e(Cl,If),e(hs,Nf),k(o,Ep,u),k(o,ot,u),e(ot,ao),e(ao,Pl),y(ms,Pl,null),e(ot,Sf),e(ot,Ll),e(Ll,Df),k(o,jp,u),k(o,nt,u),y(gs,nt,null),e(nt,Wf),e(nt,fs),e(fs,Uf),e(fs,Ga),e(Ga,Qf),e(fs,Rf),k(o,Cp,u),k(o,st,u),e(st,io),e(io,Al),y(us,Al,null),e(st,Vf),e(st,Ol),e(Ol,Gf),k(o,Pp,u),k(o,H,u),y(_s,H,null),e(H,Hf),e(H,bs),e(bs,Jf),e(bs,ks),e(ks,Kf),e(bs,Xf),e(H,Yf),e(H,Bs),e(Bs,Zf),e(Bs,vs),e(vs,eu),e(Bs,tu),e(H,ou),e(H,Q),e(Q,nu),e(Q,Il),e(Il,su),e(Q,ru),e(Q,Nl),e(Nl,au),e(Q,iu),e(Q,Sl),e(Sl,lu),e(Q,du),e(Q,Dl),e(Dl,cu),e(Q,pu),e(Q,Wl),e(Wl,hu),e(Q,mu),e(Q,Ul),e(Ul,gu),e(Q,fu),e(H,uu),e(H,_e),y(ys,_e,null),e(_e,_u),e(_e,rt),e(rt,bu),e(rt,Ha),e(Ha,ku),e(rt,Bu),e(rt,Ql),e(Ql,vu),e(rt,yu),e(_e,wu),y(lo,_e,null),e(_e,$u),y(co,_e,null),k(o,Lp,u),k(o,at,u),e(at,po),e(po,Rl),y(ws,Rl,null),e(at,Tu),e(at,Vl),e(Vl,xu),k(o,Ap,u),k(o,it,u),y($s,it,null),e(it,Fu),e(it,be),y(Ts,be,null),e(be,qu),e(be,lt),e(lt,zu),e(lt,Ja),e(Ja,Mu),e(lt,Eu),e(lt,Gl),e(Gl,ju),e(lt,Cu),e(be,Pu),y(ho,be,null),e(be,Lu),y(mo,be,null),k(o,Op,u),k(o,dt,u),e(dt,go),e(go,Hl),y(xs,Hl,null),e(dt,Au),e(dt,Jl),e(Jl,Ou),k(o,Ip,u),k(o,Me,u),y(Fs,Me,null),e(Me,Iu),e(Me,ct),e(ct,Nu),e(ct,Kl),e(Kl,Su),e(ct,Du),e(ct,qs),e(qs,Wu),e(ct,Uu),e(Me,Qu),e(Me,ke),y(zs,ke,null),e(ke,Ru),e(ke,pt),e(pt,Vu),e(pt,Ka),e(Ka,Gu),e(pt,Hu),e(pt,Xl),e(Xl,Ju),e(pt,Ku),e(ke,Xu),y(fo,ke,null),e(ke,Yu),y(uo,ke,null),k(o,Np,u),k(o,ht,u),e(ht,_o),e(_o,Yl),y(Ms,Yl,null),e(ht,Zu),e(ht,Zl),e(Zl,e_),k(o,Sp,u),k(o,Ee,u),y(Es,Ee,null),e(Ee,t_),e(Ee,mt),e(mt,o_),e(mt,ed),e(ed,n_),e(mt,s_),e(mt,js),e(js,r_),e(mt,a_),e(Ee,i_),e(Ee,K),y(Cs,K,null),e(K,l_),e(K,gt),e(gt,d_),e(gt,Xa),e(Xa,c_),e(gt,p_),e(gt,td),e(td,h_),e(gt,m_),e(K,g_),y(bo,K,null),e(K,f_),y(ko,K,null),e(K,u_),y(Bo,K,null),k(o,Dp,u),k(o,ft,u),e(ft,vo),e(vo,od),y(Ps,od,null),e(ft,__),e(ft,nd),e(nd,b_),k(o,Wp,u),k(o,pe,u),y(Ls,pe,null),e(pe,k_),e(pe,sd),e(sd,B_),e(pe,v_),e(pe,As),e(As,y_),e(As,Os),e(Os,w_),e(As,$_),e(pe,T_),e(pe,X),y(Is,X,null),e(X,x_),e(X,ut),e(ut,F_),e(ut,Ya),e(Ya,q_),e(ut,z_),e(ut,rd),e(rd,M_),e(ut,E_),e(X,j_),y(yo,X,null),e(X,C_),y(wo,X,null),e(X,P_),y($o,X,null),k(o,Up,u),k(o,_t,u),e(_t,To),e(To,ad),y(Ns,ad,null),e(_t,L_),e(_t,id),e(id,A_),k(o,Qp,u),k(o,he,u),y(Ss,he,null),e(he,O_),e(he,ld),e(ld,I_),e(he,N_),e(he,Ds),e(Ds,S_),e(Ds,Ws),e(Ws,D_),e(Ds,W_),e(he,U_),e(he,Be),y(Us,Be,null),e(Be,Q_),e(Be,bt),e(bt,R_),e(bt,Za),e(Za,V_),e(bt,G_),e(bt,dd),e(dd,H_),e(bt,J_),e(Be,K_),y(xo,Be,null),e(Be,X_),y(Fo,Be,null),k(o,Rp,u),k(o,kt,u),e(kt,qo),e(qo,cd),y(Qs,cd,null),e(kt,Y_),e(kt,pd),e(pd,Z_),k(o,Vp,u),k(o,me,u),y(Rs,me,null),e(me,eb),e(me,hd),e(hd,tb),e(me,ob),e(me,Vs),e(Vs,nb),e(Vs,Gs),e(Gs,sb),e(Vs,rb),e(me,ab),e(me,Y),y(Hs,Y,null),e(Y,ib),e(Y,Bt),e(Bt,lb),e(Bt,ei),e(ei,db),e(Bt,cb),e(Bt,md),e(md,pb),e(Bt,hb),e(Y,mb),y(zo,Y,null),e(Y,gb),y(Mo,Y,null),e(Y,fb),y(Eo,Y,null),k(o,Gp,u),k(o,vt,u),e(vt,jo),e(jo,gd),y(Js,gd,null),e(vt,ub),e(vt,fd),e(fd,_b),k(o,Hp,u),k(o,ge,u),y(Ks,ge,null),e(ge,bb),e(ge,yt),e(yt,kb),e(yt,ud),e(ud,Bb),e(yt,vb),e(yt,_d),e(_d,yb),e(yt,wb),e(ge,$b),e(ge,Xs),e(Xs,Tb),e(Xs,Ys),e(Ys,xb),e(Xs,Fb),e(ge,qb),e(ge,Z),y(Zs,Z,null),e(Z,zb),e(Z,wt),e(wt,Mb),e(wt,ti),e(ti,Eb),e(wt,jb),e(wt,bd),e(bd,Cb),e(wt,Pb),e(Z,Lb),y(Co,Z,null),e(Z,Ab),y(Po,Z,null),e(Z,Ob),y(Lo,Z,null),k(o,Jp,u),k(o,$t,u),e($t,Ao),e(Ao,kd),y(er,kd,null),e($t,Ib),e($t,Bd),e(Bd,Nb),k(o,Kp,u),k(o,L,u),y(tr,L,null),e(L,Sb),e(L,vd),e(vd,Db),e(L,Wb),e(L,or),e(or,Ub),e(or,oi),e(oi,Qb),e(or,Rb),e(L,Vb),e(L,nr),e(nr,Gb),e(nr,sr),e(sr,Hb),e(nr,Jb),e(L,Kb),e(L,yd),e(yd,Xb),e(L,Yb),e(L,je),e(je,wd),e(wd,rr),e(rr,Zb),e(je,ek),e(je,$d),e($d,ar),e(ar,tk),e(je,ok),e(je,Td),e(Td,ir),e(ir,nk),e(je,sk),e(je,xd),e(xd,lr),e(lr,rk),e(L,ak),e(L,ve),y(dr,ve,null),e(ve,ik),e(ve,Tt),e(Tt,lk),e(Tt,Fd),e(Fd,dk),e(Tt,ck),e(Tt,qd),e(qd,pk),e(Tt,hk),e(ve,mk),y(Oo,ve,null),e(ve,gk),y(Io,ve,null),k(o,Xp,u),k(o,xt,u),e(xt,No),e(No,zd),y(cr,zd,null),e(xt,fk),e(xt,Md),e(Md,uk),k(o,Yp,u),k(o,A,u),y(pr,A,null),e(A,_k),e(A,Ft),e(Ft,bk),e(Ft,Ed),e(Ed,kk),e(Ft,Bk),e(Ft,jd),e(jd,vk),e(Ft,yk),e(A,wk),e(A,hr),e(hr,$k),e(hr,ni),e(ni,Tk),e(hr,xk),e(A,Fk),e(A,mr),e(mr,qk),e(mr,gr),e(gr,zk),e(mr,Mk),e(A,Ek),e(A,Cd),e(Cd,jk),e(A,Ck),e(A,Ce),e(Ce,Pd),e(Pd,fr),e(fr,Pk),e(Ce,Lk),e(Ce,Ld),e(Ld,ur),e(ur,Ak),e(Ce,Ok),e(Ce,Ad),e(Ad,_r),e(_r,Ik),e(Ce,Nk),e(Ce,Od),e(Od,br),e(br,Sk),e(A,Dk),e(A,ye),y(kr,ye,null),e(ye,Wk),e(ye,qt),e(qt,Uk),e(qt,Id),e(Id,Qk),e(qt,Rk),e(qt,Nd),e(Nd,Vk),e(qt,Gk),e(ye,Hk),y(So,ye,null),e(ye,Jk),y(Do,ye,null),k(o,Zp,u),k(o,zt,u),e(zt,Wo),e(Wo,Sd),y(Br,Sd,null),e(zt,Kk),e(zt,Dd),e(Dd,Xk),k(o,eh,u),k(o,O,u),y(vr,O,null),e(O,Yk),e(O,Wd),e(Wd,Zk),e(O,eB),e(O,yr),e(yr,tB),e(yr,si),e(si,oB),e(yr,nB),e(O,sB),e(O,wr),e(wr,rB),e(wr,$r),e($r,aB),e(wr,iB),e(O,lB),e(O,Ud),e(Ud,dB),e(O,cB),e(O,Pe),e(Pe,Qd),e(Qd,Tr),e(Tr,pB),e(Pe,hB),e(Pe,Rd),e(Rd,xr),e(xr,mB),e(Pe,gB),e(Pe,Vd),e(Vd,Fr),e(Fr,fB),e(Pe,uB),e(Pe,Gd),e(Gd,qr),e(qr,_B),e(O,bB),e(O,we),y(zr,we,null),e(we,kB),e(we,Mt),e(Mt,BB),e(Mt,Hd),e(Hd,vB),e(Mt,yB),e(Mt,Jd),e(Jd,wB),e(Mt,$B),e(we,TB),y(Uo,we,null),e(we,xB),y(Qo,we,null),k(o,th,u),k(o,Et,u),e(Et,Ro),e(Ro,Kd),y(Mr,Kd,null),e(Et,FB),e(Et,Xd),e(Xd,qB),k(o,oh,u),k(o,I,u),y(Er,I,null),e(I,zB),e(I,jr),e(jr,MB),e(jr,Yd),e(Yd,EB),e(jr,jB),e(I,CB),e(I,Cr),e(Cr,PB),e(Cr,ri),e(ri,LB),e(Cr,AB),e(I,OB),e(I,Pr),e(Pr,IB),e(Pr,Lr),e(Lr,NB),e(Pr,SB),e(I,DB),e(I,Zd),e(Zd,WB),e(I,UB),e(I,Le),e(Le,ec),e(ec,Ar),e(Ar,QB),e(Le,RB),e(Le,tc),e(tc,Or),e(Or,VB),e(Le,GB),e(Le,oc),e(oc,Ir),e(Ir,HB),e(Le,JB),e(Le,nc),e(nc,Nr),e(Nr,KB),e(I,XB),e(I,$e),y(Sr,$e,null),e($e,YB),e($e,jt),e(jt,ZB),e(jt,sc),e(sc,ev),e(jt,tv),e(jt,rc),e(rc,ov),e(jt,nv),e($e,sv),y(Vo,$e,null),e($e,rv),y(Go,$e,null),k(o,nh,u),k(o,Ct,u),e(Ct,Ho),e(Ho,ac),y(Dr,ac,null),e(Ct,av),e(Ct,ic),e(ic,iv),k(o,sh,u),k(o,N,u),y(Wr,N,null),e(N,lv),e(N,lc),e(lc,dv),e(N,cv),e(N,Ur),e(Ur,pv),e(Ur,ai),e(ai,hv),e(Ur,mv),e(N,gv),e(N,Qr),e(Qr,fv),e(Qr,Rr),e(Rr,uv),e(Qr,_v),e(N,bv),e(N,dc),e(dc,kv),e(N,Bv),e(N,Ae),e(Ae,cc),e(cc,Vr),e(Vr,vv),e(Ae,yv),e(Ae,pc),e(pc,Gr),e(Gr,wv),e(Ae,$v),e(Ae,hc),e(hc,Hr),e(Hr,Tv),e(Ae,xv),e(Ae,mc),e(mc,Jr),e(Jr,Fv),e(N,qv),e(N,Te),y(Kr,Te,null),e(Te,zv),e(Te,Pt),e(Pt,Mv),e(Pt,gc),e(gc,Ev),e(Pt,jv),e(Pt,fc),e(fc,Cv),e(Pt,Pv),e(Te,Lv),y(Jo,Te,null),e(Te,Av),y(Ko,Te,null),k(o,rh,u),k(o,Lt,u),e(Lt,Xo),e(Xo,uc),y(Xr,uc,null),e(Lt,Ov),e(Lt,_c),e(_c,Iv),k(o,ah,u),k(o,S,u),y(Yr,S,null),e(S,Nv),e(S,bc),e(bc,Sv),e(S,Dv),e(S,Zr),e(Zr,Wv),e(Zr,ii),e(ii,Uv),e(Zr,Qv),e(S,Rv),e(S,ea),e(ea,Vv),e(ea,ta),e(ta,Gv),e(ea,Hv),e(S,Jv),e(S,kc),e(kc,Kv),e(S,Xv),e(S,Oe),e(Oe,Bc),e(Bc,oa),e(oa,Yv),e(Oe,Zv),e(Oe,vc),e(vc,na),e(na,ey),e(Oe,ty),e(Oe,yc),e(yc,sa),e(sa,oy),e(Oe,ny),e(Oe,wc),e(wc,ra),e(ra,sy),e(S,ry),e(S,xe),y(aa,xe,null),e(xe,ay),e(xe,At),e(At,iy),e(At,$c),e($c,ly),e(At,dy),e(At,Tc),e(Tc,cy),e(At,py),e(xe,hy),y(Yo,xe,null),e(xe,my),y(Zo,xe,null),k(o,ih,u),k(o,Ot,u),e(Ot,en),e(en,xc),y(ia,xc,null),e(Ot,gy),e(Ot,Fc),e(Fc,fy),k(o,lh,u),k(o,D,u),y(la,D,null),e(D,uy),e(D,qc),e(qc,_y),e(D,by),e(D,da),e(da,ky),e(da,li),e(li,By),e(da,vy),e(D,yy),e(D,ca),e(ca,wy),e(ca,pa),e(pa,$y),e(ca,Ty),e(D,xy),e(D,zc),e(zc,Fy),e(D,qy),e(D,Ie),e(Ie,Mc),e(Mc,ha),e(ha,zy),e(Ie,My),e(Ie,Ec),e(Ec,ma),e(ma,Ey),e(Ie,jy),e(Ie,jc),e(jc,ga),e(ga,Cy),e(Ie,Py),e(Ie,Cc),e(Cc,fa),e(fa,Ly),e(D,Ay),e(D,Fe),y(ua,Fe,null),e(Fe,Oy),e(Fe,It),e(It,Iy),e(It,Pc),e(Pc,Ny),e(It,Sy),e(It,Lc),e(Lc,Dy),e(It,Wy),e(Fe,Uy),y(tn,Fe,null),e(Fe,Qy),y(on,Fe,null),k(o,dh,u),k(o,Nt,u),e(Nt,nn),e(nn,Ac),y(_a,Ac,null),e(Nt,Ry),e(Nt,Oc),e(Oc,Vy),k(o,ch,u),k(o,W,u),y(ba,W,null),e(W,Gy),e(W,St),e(St,Hy),e(St,Ic),e(Ic,Jy),e(St,Ky),e(St,Nc),e(Nc,Xy),e(St,Yy),e(W,Zy),e(W,ka),e(ka,e1),e(ka,di),e(di,t1),e(ka,o1),e(W,n1),e(W,Ba),e(Ba,s1),e(Ba,va),e(va,r1),e(Ba,a1),e(W,i1),e(W,Sc),e(Sc,l1),e(W,d1),e(W,Ne),e(Ne,Dc),e(Dc,ya),e(ya,c1),e(Ne,p1),e(Ne,Wc),e(Wc,wa),e(wa,h1),e(Ne,m1),e(Ne,Uc),e(Uc,$a),e($a,g1),e(Ne,f1),e(Ne,Qc),e(Qc,Ta),e(Ta,u1),e(W,_1),e(W,qe),y(xa,qe,null),e(qe,b1),e(qe,Dt),e(Dt,k1),e(Dt,ci),e(ci,B1),e(Dt,v1),e(Dt,Rc),e(Rc,y1),e(Dt,w1),e(qe,$1),y(sn,qe,null),e(qe,T1),y(rn,qe,null),ph=!0},p(o,[u]){const Fa={};u&2&&(Fa.$$scope={dirty:u,ctx:o}),Gt.$set(Fa);const Vc={};u&2&&(Vc.$$scope={dirty:u,ctx:o}),so.$set(Vc);const Gc={};u&2&&(Gc.$$scope={dirty:u,ctx:o}),lo.$set(Gc);const Hc={};u&2&&(Hc.$$scope={dirty:u,ctx:o}),co.$set(Hc);const qa={};u&2&&(qa.$$scope={dirty:u,ctx:o}),ho.$set(qa);const Jc={};u&2&&(Jc.$$scope={dirty:u,ctx:o}),mo.$set(Jc);const Kc={};u&2&&(Kc.$$scope={dirty:u,ctx:o}),fo.$set(Kc);const Xc={};u&2&&(Xc.$$scope={dirty:u,ctx:o}),uo.$set(Xc);const za={};u&2&&(za.$$scope={dirty:u,ctx:o}),bo.$set(za);const Yc={};u&2&&(Yc.$$scope={dirty:u,ctx:o}),ko.$set(Yc);const Zc={};u&2&&(Zc.$$scope={dirty:u,ctx:o}),Bo.$set(Zc);const ep={};u&2&&(ep.$$scope={dirty:u,ctx:o}),yo.$set(ep);const tp={};u&2&&(tp.$$scope={dirty:u,ctx:o}),wo.$set(tp);const op={};u&2&&(op.$$scope={dirty:u,ctx:o}),$o.$set(op);const J={};u&2&&(J.$$scope={dirty:u,ctx:o}),xo.$set(J);const Ma={};u&2&&(Ma.$$scope={dirty:u,ctx:o}),Fo.$set(Ma);const np={};u&2&&(np.$$scope={dirty:u,ctx:o}),zo.$set(np);const fe={};u&2&&(fe.$$scope={dirty:u,ctx:o}),Mo.$set(fe);const sp={};u&2&&(sp.$$scope={dirty:u,ctx:o}),Eo.$set(sp);const rp={};u&2&&(rp.$$scope={dirty:u,ctx:o}),Co.$set(rp);const ap={};u&2&&(ap.$$scope={dirty:u,ctx:o}),Po.$set(ap);const ip={};u&2&&(ip.$$scope={dirty:u,ctx:o}),Lo.$set(ip);const lp={};u&2&&(lp.$$scope={dirty:u,ctx:o}),Oo.$set(lp);const dp={};u&2&&(dp.$$scope={dirty:u,ctx:o}),Io.$set(dp);const Ea={};u&2&&(Ea.$$scope={dirty:u,ctx:o}),So.$set(Ea);const cp={};u&2&&(cp.$$scope={dirty:u,ctx:o}),Do.$set(cp);const pi={};u&2&&(pi.$$scope={dirty:u,ctx:o}),Uo.$set(pi);const pp={};u&2&&(pp.$$scope={dirty:u,ctx:o}),Qo.$set(pp);const Wt={};u&2&&(Wt.$$scope={dirty:u,ctx:o}),Vo.$set(Wt);const hp={};u&2&&(hp.$$scope={dirty:u,ctx:o}),Go.$set(hp);const mp={};u&2&&(mp.$$scope={dirty:u,ctx:o}),Jo.$set(mp);const ja={};u&2&&(ja.$$scope={dirty:u,ctx:o}),Ko.$set(ja);const gp={};u&2&&(gp.$$scope={dirty:u,ctx:o}),Yo.$set(gp);const fp={};u&2&&(fp.$$scope={dirty:u,ctx:o}),Zo.$set(fp);const up={};u&2&&(up.$$scope={dirty:u,ctx:o}),tn.$set(up);const U={};u&2&&(U.$$scope={dirty:u,ctx:o}),on.$set(U);const Ut={};u&2&&(Ut.$$scope={dirty:u,ctx:o}),sn.$set(Ut);const _p={};u&2&&(_p.$$scope={dirty:u,ctx:o}),rn.$set(_p)},i(o){ph||(w(l.$$.fragment,o),w(Cn.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(Gt.$$.fragment,o),w(Qn.$$.fragment,o),w(Vn.$$.fragment,o),w(Gn.$$.fragment,o),w(Hn.$$.fragment,o),w(Jn.$$.fragment,o),w(Zn.$$.fragment,o),w(ts.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(as.$$.fragment,o),w(ls.$$.fragment,o),w(cs.$$.fragment,o),w(so.$$.fragment,o),w(ps.$$.fragment,o),w(ms.$$.fragment,o),w(gs.$$.fragment,o),w(us.$$.fragment,o),w(_s.$$.fragment,o),w(ys.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(Ts.$$.fragment,o),w(ho.$$.fragment,o),w(mo.$$.fragment,o),w(xs.$$.fragment,o),w(Fs.$$.fragment,o),w(zs.$$.fragment,o),w(fo.$$.fragment,o),w(uo.$$.fragment,o),w(Ms.$$.fragment,o),w(Es.$$.fragment,o),w(Cs.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(Bo.$$.fragment,o),w(Ps.$$.fragment,o),w(Ls.$$.fragment,o),w(Is.$$.fragment,o),w(yo.$$.fragment,o),w(wo.$$.fragment,o),w($o.$$.fragment,o),w(Ns.$$.fragment,o),w(Ss.$$.fragment,o),w(Us.$$.fragment,o),w(xo.$$.fragment,o),w(Fo.$$.fragment,o),w(Qs.$$.fragment,o),w(Rs.$$.fragment,o),w(Hs.$$.fragment,o),w(zo.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(Js.$$.fragment,o),w(Ks.$$.fragment,o),w(Zs.$$.fragment,o),w(Co.$$.fragment,o),w(Po.$$.fragment,o),w(Lo.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(dr.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(cr.$$.fragment,o),w(pr.$$.fragment,o),w(kr.$$.fragment,o),w(So.$$.fragment,o),w(Do.$$.fragment,o),w(Br.$$.fragment,o),w(vr.$$.fragment,o),w(zr.$$.fragment,o),w(Uo.$$.fragment,o),w(Qo.$$.fragment,o),w(Mr.$$.fragment,o),w(Er.$$.fragment,o),w(Sr.$$.fragment,o),w(Vo.$$.fragment,o),w(Go.$$.fragment,o),w(Dr.$$.fragment,o),w(Wr.$$.fragment,o),w(Kr.$$.fragment,o),w(Jo.$$.fragment,o),w(Ko.$$.fragment,o),w(Xr.$$.fragment,o),w(Yr.$$.fragment,o),w(aa.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(ia.$$.fragment,o),w(la.$$.fragment,o),w(ua.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(_a.$$.fragment,o),w(ba.$$.fragment,o),w(xa.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),ph=!0)},o(o){$(l.$$.fragment,o),$(Cn.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Gt.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Gn.$$.fragment,o),$(Hn.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(ls.$$.fragment,o),$(cs.$$.fragment,o),$(so.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(Ts.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(zs.$$.fragment,o),$(fo.$$.fragment,o),$(uo.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Cs.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(Bo.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(Is.$$.fragment,o),$(yo.$$.fragment,o),$(wo.$$.fragment,o),$($o.$$.fragment,o),$(Ns.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(xo.$$.fragment,o),$(Fo.$$.fragment,o),$(Qs.$$.fragment,o),$(Rs.$$.fragment,o),$(Hs.$$.fragment,o),$(zo.$$.fragment,o),$(Mo.$$.fragment,o),$(Eo.$$.fragment,o),$(Js.$$.fragment,o),$(Ks.$$.fragment,o),$(Zs.$$.fragment,o),$(Co.$$.fragment,o),$(Po.$$.fragment,o),$(Lo.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(dr.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(kr.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(Br.$$.fragment,o),$(vr.$$.fragment,o),$(zr.$$.fragment,o),$(Uo.$$.fragment,o),$(Qo.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(Sr.$$.fragment,o),$(Vo.$$.fragment,o),$(Go.$$.fragment,o),$(Dr.$$.fragment,o),$(Wr.$$.fragment,o),$(Kr.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(aa.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(ua.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(xa.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),ph=!1},d(o){t(d),o&&t(_),o&&t(g),T(l),o&&t(bp),o&&t(Je),T(Cn),o&&t(kp),o&&t(Rt),o&&t(Bp),o&&t(Ca),o&&t(vp),o&&t(Pa),o&&t(yp),o&&t(La),o&&t(wp),o&&t(R),o&&t($p),o&&t(Se),o&&t(Tp),o&&t(Ke),T(Sn),o&&t(xp),o&&t(C),T(Dn),T(Gt),T(Qn),T(Vn),T(Gn),o&&t(Fp),o&&t(Ze),T(Hn),o&&t(qp),o&&t(P),T(Jn),T(Zn),T(ts),T(ns),T(ss),o&&t(zp),o&&t(tt),T(rs),o&&t(Mp),o&&t(G),T(as),T(ls),T(cs),T(so),T(ps),o&&t(Ep),o&&t(ot),T(ms),o&&t(jp),o&&t(nt),T(gs),o&&t(Cp),o&&t(st),T(us),o&&t(Pp),o&&t(H),T(_s),T(ys),T(lo),T(co),o&&t(Lp),o&&t(at),T(ws),o&&t(Ap),o&&t(it),T($s),T(Ts),T(ho),T(mo),o&&t(Op),o&&t(dt),T(xs),o&&t(Ip),o&&t(Me),T(Fs),T(zs),T(fo),T(uo),o&&t(Np),o&&t(ht),T(Ms),o&&t(Sp),o&&t(Ee),T(Es),T(Cs),T(bo),T(ko),T(Bo),o&&t(Dp),o&&t(ft),T(Ps),o&&t(Wp),o&&t(pe),T(Ls),T(Is),T(yo),T(wo),T($o),o&&t(Up),o&&t(_t),T(Ns),o&&t(Qp),o&&t(he),T(Ss),T(Us),T(xo),T(Fo),o&&t(Rp),o&&t(kt),T(Qs),o&&t(Vp),o&&t(me),T(Rs),T(Hs),T(zo),T(Mo),T(Eo),o&&t(Gp),o&&t(vt),T(Js),o&&t(Hp),o&&t(ge),T(Ks),T(Zs),T(Co),T(Po),T(Lo),o&&t(Jp),o&&t($t),T(er),o&&t(Kp),o&&t(L),T(tr),T(dr),T(Oo),T(Io),o&&t(Xp),o&&t(xt),T(cr),o&&t(Yp),o&&t(A),T(pr),T(kr),T(So),T(Do),o&&t(Zp),o&&t(zt),T(Br),o&&t(eh),o&&t(O),T(vr),T(zr),T(Uo),T(Qo),o&&t(th),o&&t(Et),T(Mr),o&&t(oh),o&&t(I),T(Er),T(Sr),T(Vo),T(Go),o&&t(nh),o&&t(Ct),T(Dr),o&&t(sh),o&&t(N),T(Wr),T(Kr),T(Jo),T(Ko),o&&t(rh),o&&t(Lt),T(Xr),o&&t(ah),o&&t(S),T(Yr),T(aa),T(Yo),T(Zo),o&&t(ih),o&&t(Ot),T(ia),o&&t(lh),o&&t(D),T(la),T(ua),T(tn),T(on),o&&t(dh),o&&t(Nt),T(_a),o&&t(ch),o&&t(W),T(ba),T(xa),T(sn),T(rn)}}}const oF={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForCausalLM",title:"FlaxBigBirdForCausalLM"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function nF(x){return ux(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cF extends hx{constructor(d){super();mx(this,d,nF,tF,gx,{})}}export{cF as default,oF as metadata};
