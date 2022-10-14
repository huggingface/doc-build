import{S as Vw,i as Jw,s as Kw,e as n,k as p,w as B,t as a,M as Xw,c as s,d as t,m as h,a as r,x as v,h as i,b as c,G as e,g as k,y,q as T,o as $,B as w,v as Yw,L as E}from"../../chunks/vendor-hf-doc-builder.js";import{T as R}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as M}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Zw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdConfig, BigBirdModel

# Initializing a BigBird google/bigbird-roberta-base style configuration
configuration = BigBirdConfig()

# Initializing a model (with random weights) from the google/bigbird-roberta-base style configuration
model = BigBirdModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdConfig, BigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BigBird google/bigbird-roberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BigBirdConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the google/bigbird-roberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function ex(x){let d,_,g,f,b;return f=new j({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"sequence pair mask has the following format:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function tx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function ox(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function nx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function sx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function rx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function ax(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function ix(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function lx(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;maximum&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function dx(x){let d,_;return d=new j({props:{code:`labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.08</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function cx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function px(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function hx(x){let d,_;return d=new j({props:{code:`num_labels = len(model.config.id2label)
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
<span class="hljs-number">1.13</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function mx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function gx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function fx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function ux(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function _x(x){let d,_;return d=new j({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function bx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function kx(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;80 \xB0C (176 \xB0F) or more&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Bx(x){let d,_;return d=new j({props:{code:`target_start_index, target_end_index = torch.tensor([130]), torch.tensor([132])
outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">130</span>]), torch.tensor([<span class="hljs-number">132</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.63</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function vx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function yx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Tx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function $x(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function wx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function xx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Fx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function zx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function qx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Mx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Ex(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function jx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Px(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Cx(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Lx(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Ax(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||(T(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Ox(x){let d,_,g,f,b,l,m,F,Ah,Wc,Je,Rt,zi,Fn,Oh,qi,Ih,Uc,Gt,Nh,zn,Sh,Dh,Rc,ya,Wh,Gc,Ta,Mi,Uh,Qc,$a,Rh,Hc,U,qn,Gh,Mn,Qh,Hh,Vh,le,Jh,Ei,Kh,Xh,ji,Yh,Zh,Pi,em,tm,Ci,om,nm,sm,Li,rm,am,Ai,im,lm,En,dm,Oi,cm,pm,hm,wa,mm,Ii,gm,Vc,Se,fm,jn,um,_m,Pn,bm,km,Jc,Ke,Qt,Ni,Cn,Bm,Si,vm,Kc,de,Ln,ym,Xe,Tm,xa,$m,wm,An,xm,Fm,zm,Ye,qm,Fa,Mm,Em,za,jm,Pm,Cm,Ht,Xc,Ze,Vt,Di,On,Lm,Wi,Am,Yc,P,In,Om,Nn,Im,Sn,Nm,Sm,Dm,Dn,Wm,qa,Um,Rm,Gm,De,Wn,Qm,Ui,Hm,Vm,Un,Ma,Jm,Ri,Km,Xm,Ea,Ym,Gi,Zm,eg,Jt,Rn,tg,Gn,og,Qi,ng,sg,rg,Kt,Qn,ag,et,ig,Hi,lg,dg,Vi,cg,pg,hg,ja,Hn,Zc,tt,Xt,Ji,Vn,mg,Ki,gg,ep,G,Jn,fg,ze,ug,Xi,_g,bg,Kn,kg,Bg,Pa,vg,yg,Tg,We,Xn,$g,Yi,wg,xg,Yn,Ca,Fg,Zi,zg,qg,La,Mg,el,Eg,jg,fe,Zn,Pg,tl,Cg,Lg,Yt,Ag,ol,Og,Ig,Zt,es,Ng,ts,Sg,nl,Dg,Wg,tp,ot,eo,sl,os,Ug,rl,Rg,op,nt,ns,Gg,ss,Qg,Aa,Hg,Vg,np,st,to,al,rs,Jg,il,Kg,sp,Q,as,Xg,is,Yg,ls,Zg,ef,tf,ds,of,cs,nf,sf,rf,W,af,ll,lf,df,dl,cf,pf,cl,hf,mf,pl,gf,ff,hl,uf,_f,ml,bf,kf,Bf,ue,ps,vf,rt,yf,Oa,Tf,$f,gl,wf,xf,Ff,oo,zf,no,rp,at,so,fl,hs,qf,ul,Mf,ap,it,ms,Ef,_e,gs,jf,lt,Pf,Ia,Cf,Lf,_l,Af,Of,If,ro,Nf,ao,ip,dt,io,bl,fs,Sf,kl,Df,lp,qe,us,Wf,ct,Uf,Bl,Rf,Gf,_s,Qf,Hf,Vf,be,bs,Jf,pt,Kf,Na,Xf,Yf,vl,Zf,eu,tu,lo,ou,co,dp,ht,po,yl,ks,nu,Tl,su,cp,Me,Bs,ru,mt,au,$l,iu,lu,vs,du,cu,pu,V,ys,hu,gt,mu,Sa,gu,fu,wl,uu,_u,bu,ho,ku,mo,Bu,go,pp,ft,fo,xl,Ts,vu,Fl,yu,hp,ce,$s,Tu,zl,$u,wu,ws,xu,xs,Fu,zu,qu,J,Fs,Mu,ut,Eu,Da,ju,Pu,ql,Cu,Lu,Au,uo,Ou,_o,Iu,bo,mp,_t,ko,Ml,zs,Nu,El,Su,gp,pe,qs,Du,jl,Wu,Uu,Ms,Ru,Es,Gu,Qu,Hu,ke,js,Vu,bt,Ju,Wa,Ku,Xu,Pl,Yu,Zu,e_,Bo,t_,vo,fp,kt,yo,Cl,Ps,o_,Ll,n_,up,he,Cs,s_,Al,r_,a_,Ls,i_,As,l_,d_,c_,K,Os,p_,Bt,h_,Ua,m_,g_,Ol,f_,u_,__,To,b_,$o,k_,wo,_p,vt,xo,Il,Is,B_,Nl,v_,bp,me,Ns,y_,yt,T_,Sl,$_,w_,Dl,x_,F_,z_,Ss,q_,Ds,M_,E_,j_,X,Ws,P_,Tt,C_,Ra,L_,A_,Wl,O_,I_,N_,Fo,S_,zo,D_,qo,kp,$t,Mo,Ul,Us,W_,Rl,U_,Bp,C,Rs,R_,Gl,G_,Q_,Gs,H_,Ga,V_,J_,K_,Qs,X_,Hs,Y_,Z_,eb,Ql,tb,ob,Ee,Hl,Vs,nb,sb,Vl,Js,rb,ab,Jl,Ks,ib,lb,Kl,Xs,db,cb,Be,Ys,pb,wt,hb,Xl,mb,gb,Yl,fb,ub,_b,Eo,bb,jo,vp,xt,Po,Zl,Zs,kb,ed,Bb,yp,L,er,vb,Ft,yb,td,Tb,$b,od,wb,xb,Fb,tr,zb,Qa,qb,Mb,Eb,or,jb,nr,Pb,Cb,Lb,nd,Ab,Ob,je,sd,sr,Ib,Nb,rd,rr,Sb,Db,ad,ar,Wb,Ub,id,ir,Rb,Gb,ve,lr,Qb,zt,Hb,ld,Vb,Jb,dd,Kb,Xb,Yb,Co,Zb,Lo,Tp,qt,Ao,cd,dr,ek,pd,tk,$p,A,cr,ok,hd,nk,sk,pr,rk,Ha,ak,ik,lk,hr,dk,mr,ck,pk,hk,md,mk,gk,Pe,gd,gr,fk,uk,fd,fr,_k,bk,ud,ur,kk,Bk,_d,_r,vk,yk,ye,br,Tk,Mt,$k,bd,wk,xk,kd,Fk,zk,qk,Oo,Mk,Io,wp,Et,No,Bd,kr,Ek,vd,jk,xp,O,Br,Pk,vr,Ck,yd,Lk,Ak,Ok,yr,Ik,Va,Nk,Sk,Dk,Tr,Wk,$r,Uk,Rk,Gk,Td,Qk,Hk,Ce,$d,wr,Vk,Jk,wd,xr,Kk,Xk,xd,Fr,Yk,Zk,Fd,zr,eB,tB,Te,qr,oB,jt,nB,zd,sB,rB,qd,aB,iB,lB,So,dB,Do,Fp,Pt,Wo,Md,Mr,cB,Ed,pB,zp,I,Er,hB,jd,mB,gB,jr,fB,Ja,uB,_B,bB,Pr,kB,Cr,BB,vB,yB,Pd,TB,$B,Le,Cd,Lr,wB,xB,Ld,Ar,FB,zB,Ad,Or,qB,MB,Od,Ir,EB,jB,$e,Nr,PB,Ct,CB,Id,LB,AB,Nd,OB,IB,NB,Uo,SB,Ro,qp,Lt,Go,Sd,Sr,DB,Dd,WB,Mp,N,Dr,UB,Wd,RB,GB,Wr,QB,Ka,HB,VB,JB,Ur,KB,Rr,XB,YB,ZB,Ud,ev,tv,Ae,Rd,Gr,ov,nv,Gd,Qr,sv,rv,Qd,Hr,av,iv,Hd,Vr,lv,dv,we,Jr,cv,At,pv,Vd,hv,mv,Jd,gv,fv,uv,Qo,_v,Ho,Ep,Ot,Vo,Kd,Kr,bv,Xd,kv,jp,S,Xr,Bv,Yd,vv,yv,Yr,Tv,Xa,$v,wv,xv,Zr,Fv,ea,zv,qv,Mv,Zd,Ev,jv,Oe,ec,ta,Pv,Cv,tc,oa,Lv,Av,oc,na,Ov,Iv,nc,sa,Nv,Sv,xe,ra,Dv,It,Wv,sc,Uv,Rv,rc,Gv,Qv,Hv,Jo,Vv,Ko,Pp,Nt,Xo,ac,aa,Jv,ic,Kv,Cp,D,ia,Xv,St,Yv,lc,Zv,ey,dc,ty,oy,ny,la,sy,Ya,ry,ay,iy,da,ly,ca,dy,cy,py,cc,hy,my,Ie,pc,pa,gy,fy,hc,ha,uy,_y,mc,ma,by,ky,gc,ga,By,vy,Fe,fa,yy,Dt,Ty,Za,$y,wy,fc,xy,Fy,zy,Yo,qy,Zo,Lp;return l=new q({}),Fn=new q({}),Cn=new q({}),Ln=new z({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/configuration_big_bird.py#L34"}}),Ht=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[Zw]},$$scope:{ctx:x}}}),On=new q({}),In=new z({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L51"}}),Wn=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L230",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L257",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hn=new z({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L188"}}),Vn=new q({}),Jn=new z({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L68"}}),Xn=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L155",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zn=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L211",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yt=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[ex]},$$scope:{ctx:x}}}),es=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L180",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new q({}),ns=new z({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L1852"}}),rs=new q({}),as=new z({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L1924"}}),ps=new z({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L1981",returnDescription:`
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
`}}),oo=new R({props:{$$slots:{default:[tx]},$$scope:{ctx:x}}}),no=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[ox]},$$scope:{ctx:x}}}),hs=new q({}),ms=new z({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2264"}}),gs=new z({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2280",returnDescription:`
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
`}}),ro=new R({props:{$$slots:{default:[nx]},$$scope:{ctx:x}}}),ao=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[sx]},$$scope:{ctx:x}}}),fs=new q({}),us=new z({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2510"}}),bs=new z({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2532",returnDescription:`
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
`}}),lo=new R({props:{$$slots:{default:[rx]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[ax]},$$scope:{ctx:x}}}),ks=new q({}),Bs=new z({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2368"}}),ys=new z({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2390",returnDescription:`
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
`}}),ho=new R({props:{$$slots:{default:[ix]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[lx]},$$scope:{ctx:x}}}),go=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[dx]},$$scope:{ctx:x}}}),Ts=new q({}),$s=new z({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2674"}}),Fs=new z({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2685",returnDescription:`
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
`}}),uo=new R({props:{$$slots:{default:[cx]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[px]},$$scope:{ctx:x}}}),bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[hx]},$$scope:{ctx:x}}}),zs=new q({}),qs=new z({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2802"}}),js=new z({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2813",returnDescription:`
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
`}}),Bo=new R({props:{$$slots:{default:[mx]},$$scope:{ctx:x}}}),vo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[gx]},$$scope:{ctx:x}}}),Ps=new q({}),Cs=new z({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2896"}}),Os=new z({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2911",returnDescription:`
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
`}}),To=new R({props:{$$slots:{default:[fx]},$$scope:{ctx:x}}}),$o=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[ux]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[_x]},$$scope:{ctx:x}}}),Is=new q({}),Ns=new z({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L3001"}}),Ws=new z({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L3015",returnDescription:`
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
`}}),Fo=new R({props:{$$slots:{default:[bx]},$$scope:{ctx:x}}}),zo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[kx]},$$scope:{ctx:x}}}),qo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[Bx]},$$scope:{ctx:x}}}),Us=new q({}),Rs=new z({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1830"}}),Ys=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Eo=new R({props:{$$slots:{default:[vx]},$$scope:{ctx:x}}}),jo=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[yx]},$$scope:{ctx:x}}}),Zs=new q({}),er=new z({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1910"}}),lr=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Co=new R({props:{$$slots:{default:[Tx]},$$scope:{ctx:x}}}),Lo=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[$x]},$$scope:{ctx:x}}}),dr=new q({}),cr=new z({props:{name:"class transformers.FlaxBigBirdForCausalLM",anchor:"transformers.FlaxBigBirdForCausalLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2546"}}),br=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Oo=new R({props:{$$slots:{default:[wx]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),kr=new q({}),Br=new z({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2003"}}),qr=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),So=new R({props:{$$slots:{default:[Fx]},$$scope:{ctx:x}}}),Do=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[zx]},$$scope:{ctx:x}}}),Mr=new q({}),Er=new z({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2095"}}),Nr=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Uo=new R({props:{$$slots:{default:[qx]},$$scope:{ctx:x}}}),Ro=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[Mx]},$$scope:{ctx:x}}}),Sr=new q({}),Dr=new z({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2177"}}),Jr=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qo=new R({props:{$$slots:{default:[Ex]},$$scope:{ctx:x}}}),Ho=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[jx]},$$scope:{ctx:x}}}),Kr=new q({}),Xr=new z({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2276"}}),ra=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Jo=new R({props:{$$slots:{default:[Px]},$$scope:{ctx:x}}}),Ko=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[Cx]},$$scope:{ctx:x}}}),aa=new q({}),ia=new z({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2381"}}),fa=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Yo=new R({props:{$$slots:{default:[Lx]},$$scope:{ctx:x}}}),Zo=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[Ax]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),f=n("a"),b=n("span"),B(l.$$.fragment),m=p(),F=n("span"),Ah=a("BigBird"),Wc=p(),Je=n("h2"),Rt=n("a"),zi=n("span"),B(Fn.$$.fragment),Oh=p(),qi=n("span"),Ih=a("Overview"),Uc=p(),Gt=n("p"),Nh=a("The BigBird model was proposed in "),zn=n("a"),Sh=a("Big Bird: Transformers for Longer Sequences"),Dh=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Rc=p(),ya=n("p"),Wh=a("The abstract from the paper is the following:"),Gc=p(),Ta=n("p"),Mi=n("em"),Uh=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Qc=p(),$a=n("p"),Rh=a("Tips:"),Hc=p(),U=n("ul"),qn=n("li"),Gh=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),Mn=n("a"),Qh=a("this blog post"),Hh=a("."),Vh=p(),le=n("li"),Jh=a("BigBird comes with 2 implementations: "),Ei=n("strong"),Kh=a("original_full"),Xh=a(" & "),ji=n("strong"),Yh=a("block_sparse"),Zh=a(`. For the sequence length < 1024, using
`),Pi=n("strong"),em=a("original_full"),tm=a(" is advised as there is no benefit in using "),Ci=n("strong"),om=a("block_sparse"),nm=a(" attention."),sm=p(),Li=n("li"),rm=a("The code currently uses window size of 3 blocks and 2 global blocks."),am=p(),Ai=n("li"),im=a("Sequence length must be divisible by block size."),lm=p(),En=n("li"),dm=a("Current implementation supports only "),Oi=n("strong"),cm=a("ITC"),pm=a("."),hm=p(),wa=n("li"),mm=a("Current implementation doesn\u2019t support "),Ii=n("strong"),gm=a("num_random_blocks = 0"),Vc=p(),Se=n("p"),fm=a("This model was contributed by "),jn=n("a"),um=a("vasudevgupta"),_m=a(`. The original code can be found
`),Pn=n("a"),bm=a("here"),km=a("."),Jc=p(),Ke=n("h2"),Qt=n("a"),Ni=n("span"),B(Cn.$$.fragment),Bm=p(),Si=n("span"),vm=a("BigBirdConfig"),Kc=p(),de=n("div"),B(Ln.$$.fragment),ym=p(),Xe=n("p"),Tm=a("This is the configuration class to store the configuration of a "),xa=n("a"),$m=a("BigBirdModel"),wm=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),An=n("a"),xm=a("google/bigbird-roberta-base"),Fm=a(" architecture."),zm=p(),Ye=n("p"),qm=a("Configuration objects inherit from "),Fa=n("a"),Mm=a("PretrainedConfig"),Em=a(` and can be used to control the model outputs. Read the
documentation from `),za=n("a"),jm=a("PretrainedConfig"),Pm=a(" for more information."),Cm=p(),B(Ht.$$.fragment),Xc=p(),Ze=n("h2"),Vt=n("a"),Di=n("span"),B(On.$$.fragment),Lm=p(),Wi=n("span"),Am=a("BigBirdTokenizer"),Yc=p(),P=n("div"),B(In.$$.fragment),Om=p(),Nn=n("p"),Im=a("Construct a BigBird tokenizer. Based on "),Sn=n("a"),Nm=a("SentencePiece"),Sm=a("."),Dm=p(),Dn=n("p"),Wm=a("This tokenizer inherits from "),qa=n("a"),Um=a("PreTrainedTokenizer"),Rm=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gm=p(),De=n("div"),B(Wn.$$.fragment),Qm=p(),Ui=n("p"),Hm=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Vm=p(),Un=n("ul"),Ma=n("li"),Jm=a("single sequence: "),Ri=n("code"),Km=a("[CLS] X [SEP]"),Xm=p(),Ea=n("li"),Ym=a("pair of sequences: "),Gi=n("code"),Zm=a("[CLS] A [SEP] B [SEP]"),eg=p(),Jt=n("div"),B(Rn.$$.fragment),tg=p(),Gn=n("p"),og=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qi=n("code"),ng=a("prepare_for_model"),sg=a(" method."),rg=p(),Kt=n("div"),B(Qn.$$.fragment),ag=p(),et=n("p"),ig=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),Hi=n("code"),lg=a("token_ids_1"),dg=a(" is "),Vi=n("code"),cg=a("None"),pg=a(", this method only returns the first portion of the mask (0s)."),hg=p(),ja=n("div"),B(Hn.$$.fragment),Zc=p(),tt=n("h2"),Xt=n("a"),Ji=n("span"),B(Vn.$$.fragment),mg=p(),Ki=n("span"),gg=a("BigBirdTokenizerFast"),ep=p(),G=n("div"),B(Jn.$$.fragment),fg=p(),ze=n("p"),ug=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Xi=n("em"),_g=a("tokenizers"),bg=a(` library). Based on
`),Kn=n("a"),kg=a("Unigram"),Bg=a(`. This
tokenizer inherits from `),Pa=n("a"),vg=a("PreTrainedTokenizerFast"),yg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Tg=p(),We=n("div"),B(Xn.$$.fragment),$g=p(),Yi=n("p"),wg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),xg=p(),Yn=n("ul"),Ca=n("li"),Fg=a("single sequence: "),Zi=n("code"),zg=a("[CLS] X [SEP]"),qg=p(),La=n("li"),Mg=a("pair of sequences: "),el=n("code"),Eg=a("[CLS] A [SEP] B [SEP]"),jg=p(),fe=n("div"),B(Zn.$$.fragment),Pg=p(),tl=n("p"),Cg=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),Lg=p(),B(Yt.$$.fragment),Ag=p(),ol=n("p"),Og=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Ig=p(),Zt=n("div"),B(es.$$.fragment),Ng=p(),ts=n("p"),Sg=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nl=n("code"),Dg=a("prepare_for_model"),Wg=a(" method."),tp=p(),ot=n("h2"),eo=n("a"),sl=n("span"),B(os.$$.fragment),Ug=p(),rl=n("span"),Rg=a("BigBird specific outputs"),op=p(),nt=n("div"),B(ns.$$.fragment),Gg=p(),ss=n("p"),Qg=a("Output type of "),Aa=n("a"),Hg=a("BigBirdForPreTraining"),Vg=a("."),np=p(),st=n("h2"),to=n("a"),al=n("span"),B(rs.$$.fragment),Jg=p(),il=n("span"),Kg=a("BigBirdModel"),sp=p(),Q=n("div"),B(as.$$.fragment),Xg=p(),is=n("p"),Yg=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ls=n("a"),Zg=a("torch.nn.Module"),ef=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tf=p(),ds=n("p"),of=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),cs=n("a"),nf=a(`Attention is
all you need`),sf=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),rf=p(),W=n("p"),af=a("To behave as an decoder the model needs to be initialized with the "),ll=n("code"),lf=a("is_decoder"),df=a(` argument of the configuration set
to `),dl=n("code"),cf=a("True"),pf=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),cl=n("code"),hf=a("is_decoder"),mf=a(` argument and
`),pl=n("code"),gf=a("add_cross_attention"),ff=a(" set to "),hl=n("code"),uf=a("True"),_f=a("; an "),ml=n("code"),bf=a("encoder_hidden_states"),kf=a(" is then expected as an input to the forward pass."),Bf=p(),ue=n("div"),B(ps.$$.fragment),vf=p(),rt=n("p"),yf=a("The "),Oa=n("a"),Tf=a("BigBirdModel"),$f=a(" forward method, overrides the "),gl=n("code"),wf=a("__call__"),xf=a(" special method."),Ff=p(),B(oo.$$.fragment),zf=p(),B(no.$$.fragment),rp=p(),at=n("h2"),so=n("a"),fl=n("span"),B(hs.$$.fragment),qf=p(),ul=n("span"),Mf=a("BigBirdForPreTraining"),ap=p(),it=n("div"),B(ms.$$.fragment),Ef=p(),_e=n("div"),B(gs.$$.fragment),jf=p(),lt=n("p"),Pf=a("The "),Ia=n("a"),Cf=a("BigBirdForPreTraining"),Lf=a(" forward method, overrides the "),_l=n("code"),Af=a("__call__"),Of=a(" special method."),If=p(),B(ro.$$.fragment),Nf=p(),B(ao.$$.fragment),ip=p(),dt=n("h2"),io=n("a"),bl=n("span"),B(fs.$$.fragment),Sf=p(),kl=n("span"),Df=a("BigBirdForCausalLM"),lp=p(),qe=n("div"),B(us.$$.fragment),Wf=p(),ct=n("p"),Uf=a("BigBird Model with a "),Bl=n("code"),Rf=a("language modeling"),Gf=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),_s=n("a"),Qf=a("torch.nn.Module"),Hf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vf=p(),be=n("div"),B(bs.$$.fragment),Jf=p(),pt=n("p"),Kf=a("The "),Na=n("a"),Xf=a("BigBirdForCausalLM"),Yf=a(" forward method, overrides the "),vl=n("code"),Zf=a("__call__"),eu=a(" special method."),tu=p(),B(lo.$$.fragment),ou=p(),B(co.$$.fragment),dp=p(),ht=n("h2"),po=n("a"),yl=n("span"),B(ks.$$.fragment),nu=p(),Tl=n("span"),su=a("BigBirdForMaskedLM"),cp=p(),Me=n("div"),B(Bs.$$.fragment),ru=p(),mt=n("p"),au=a("BigBird Model with a "),$l=n("code"),iu=a("language modeling"),lu=a(` head on top.
This model is a PyTorch `),vs=n("a"),du=a("torch.nn.Module"),cu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pu=p(),V=n("div"),B(ys.$$.fragment),hu=p(),gt=n("p"),mu=a("The "),Sa=n("a"),gu=a("BigBirdForMaskedLM"),fu=a(" forward method, overrides the "),wl=n("code"),uu=a("__call__"),_u=a(" special method."),bu=p(),B(ho.$$.fragment),ku=p(),B(mo.$$.fragment),Bu=p(),B(go.$$.fragment),pp=p(),ft=n("h2"),fo=n("a"),xl=n("span"),B(Ts.$$.fragment),vu=p(),Fl=n("span"),yu=a("BigBirdForSequenceClassification"),hp=p(),ce=n("div"),B($s.$$.fragment),Tu=p(),zl=n("p"),$u=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wu=p(),ws=n("p"),xu=a("This model is a PyTorch "),xs=n("a"),Fu=a("torch.nn.Module"),zu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qu=p(),J=n("div"),B(Fs.$$.fragment),Mu=p(),ut=n("p"),Eu=a("The "),Da=n("a"),ju=a("BigBirdForSequenceClassification"),Pu=a(" forward method, overrides the "),ql=n("code"),Cu=a("__call__"),Lu=a(" special method."),Au=p(),B(uo.$$.fragment),Ou=p(),B(_o.$$.fragment),Iu=p(),B(bo.$$.fragment),mp=p(),_t=n("h2"),ko=n("a"),Ml=n("span"),B(zs.$$.fragment),Nu=p(),El=n("span"),Su=a("BigBirdForMultipleChoice"),gp=p(),pe=n("div"),B(qs.$$.fragment),Du=p(),jl=n("p"),Wu=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uu=p(),Ms=n("p"),Ru=a("This model is a PyTorch "),Es=n("a"),Gu=a("torch.nn.Module"),Qu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hu=p(),ke=n("div"),B(js.$$.fragment),Vu=p(),bt=n("p"),Ju=a("The "),Wa=n("a"),Ku=a("BigBirdForMultipleChoice"),Xu=a(" forward method, overrides the "),Pl=n("code"),Yu=a("__call__"),Zu=a(" special method."),e_=p(),B(Bo.$$.fragment),t_=p(),B(vo.$$.fragment),fp=p(),kt=n("h2"),yo=n("a"),Cl=n("span"),B(Ps.$$.fragment),o_=p(),Ll=n("span"),n_=a("BigBirdForTokenClassification"),up=p(),he=n("div"),B(Cs.$$.fragment),s_=p(),Al=n("p"),r_=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a_=p(),Ls=n("p"),i_=a("This model is a PyTorch "),As=n("a"),l_=a("torch.nn.Module"),d_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),c_=p(),K=n("div"),B(Os.$$.fragment),p_=p(),Bt=n("p"),h_=a("The "),Ua=n("a"),m_=a("BigBirdForTokenClassification"),g_=a(" forward method, overrides the "),Ol=n("code"),f_=a("__call__"),u_=a(" special method."),__=p(),B(To.$$.fragment),b_=p(),B($o.$$.fragment),k_=p(),B(wo.$$.fragment),_p=p(),vt=n("h2"),xo=n("a"),Il=n("span"),B(Is.$$.fragment),B_=p(),Nl=n("span"),v_=a("BigBirdForQuestionAnswering"),bp=p(),me=n("div"),B(Ns.$$.fragment),y_=p(),yt=n("p"),T_=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sl=n("code"),$_=a("span start logits"),w_=a(" and "),Dl=n("code"),x_=a("span end logits"),F_=a(")."),z_=p(),Ss=n("p"),q_=a("This model is a PyTorch "),Ds=n("a"),M_=a("torch.nn.Module"),E_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),j_=p(),X=n("div"),B(Ws.$$.fragment),P_=p(),Tt=n("p"),C_=a("The "),Ra=n("a"),L_=a("BigBirdForQuestionAnswering"),A_=a(" forward method, overrides the "),Wl=n("code"),O_=a("__call__"),I_=a(" special method."),N_=p(),B(Fo.$$.fragment),S_=p(),B(zo.$$.fragment),D_=p(),B(qo.$$.fragment),kp=p(),$t=n("h2"),Mo=n("a"),Ul=n("span"),B(Us.$$.fragment),W_=p(),Rl=n("span"),U_=a("FlaxBigBirdModel"),Bp=p(),C=n("div"),B(Rs.$$.fragment),R_=p(),Gl=n("p"),G_=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),Q_=p(),Gs=n("p"),H_=a("This model inherits from "),Ga=n("a"),V_=a("FlaxPreTrainedModel"),J_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),K_=p(),Qs=n("p"),X_=a("This model is also a Flax Linen "),Hs=n("a"),Y_=a("flax.linen.Module"),Z_=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eb=p(),Ql=n("p"),tb=a("Finally, this model supports inherent JAX features such as:"),ob=p(),Ee=n("ul"),Hl=n("li"),Vs=n("a"),nb=a("Just-In-Time (JIT) compilation"),sb=p(),Vl=n("li"),Js=n("a"),rb=a("Automatic Differentiation"),ab=p(),Jl=n("li"),Ks=n("a"),ib=a("Vectorization"),lb=p(),Kl=n("li"),Xs=n("a"),db=a("Parallelization"),cb=p(),Be=n("div"),B(Ys.$$.fragment),pb=p(),wt=n("p"),hb=a("The "),Xl=n("code"),mb=a("FlaxBigBirdPreTrainedModel"),gb=a(" forward method, overrides the "),Yl=n("code"),fb=a("__call__"),ub=a(" special method."),_b=p(),B(Eo.$$.fragment),bb=p(),B(jo.$$.fragment),vp=p(),xt=n("h2"),Po=n("a"),Zl=n("span"),B(Zs.$$.fragment),kb=p(),ed=n("span"),Bb=a("FlaxBigBirdForPreTraining"),yp=p(),L=n("div"),B(er.$$.fragment),vb=p(),Ft=n("p"),yb=a("BigBird Model with two heads on top as done during the pretraining: a "),td=n("code"),Tb=a("masked language modeling"),$b=a(" head and a "),od=n("code"),wb=a("next sentence prediction (classification)"),xb=a(" head."),Fb=p(),tr=n("p"),zb=a("This model inherits from "),Qa=n("a"),qb=a("FlaxPreTrainedModel"),Mb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eb=p(),or=n("p"),jb=a("This model is also a Flax Linen "),nr=n("a"),Pb=a("flax.linen.Module"),Cb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lb=p(),nd=n("p"),Ab=a("Finally, this model supports inherent JAX features such as:"),Ob=p(),je=n("ul"),sd=n("li"),sr=n("a"),Ib=a("Just-In-Time (JIT) compilation"),Nb=p(),rd=n("li"),rr=n("a"),Sb=a("Automatic Differentiation"),Db=p(),ad=n("li"),ar=n("a"),Wb=a("Vectorization"),Ub=p(),id=n("li"),ir=n("a"),Rb=a("Parallelization"),Gb=p(),ve=n("div"),B(lr.$$.fragment),Qb=p(),zt=n("p"),Hb=a("The "),ld=n("code"),Vb=a("FlaxBigBirdPreTrainedModel"),Jb=a(" forward method, overrides the "),dd=n("code"),Kb=a("__call__"),Xb=a(" special method."),Yb=p(),B(Co.$$.fragment),Zb=p(),B(Lo.$$.fragment),Tp=p(),qt=n("h2"),Ao=n("a"),cd=n("span"),B(dr.$$.fragment),ek=p(),pd=n("span"),tk=a("FlaxBigBirdForCausalLM"),$p=p(),A=n("div"),B(cr.$$.fragment),ok=p(),hd=n("p"),nk=a(`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),sk=p(),pr=n("p"),rk=a("This model inherits from "),Ha=n("a"),ak=a("FlaxPreTrainedModel"),ik=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lk=p(),hr=n("p"),dk=a("This model is also a Flax Linen "),mr=n("a"),ck=a("flax.linen.Module"),pk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hk=p(),md=n("p"),mk=a("Finally, this model supports inherent JAX features such as:"),gk=p(),Pe=n("ul"),gd=n("li"),gr=n("a"),fk=a("Just-In-Time (JIT) compilation"),uk=p(),fd=n("li"),fr=n("a"),_k=a("Automatic Differentiation"),bk=p(),ud=n("li"),ur=n("a"),kk=a("Vectorization"),Bk=p(),_d=n("li"),_r=n("a"),vk=a("Parallelization"),yk=p(),ye=n("div"),B(br.$$.fragment),Tk=p(),Mt=n("p"),$k=a("The "),bd=n("code"),wk=a("FlaxBigBirdPreTrainedModel"),xk=a(" forward method, overrides the "),kd=n("code"),Fk=a("__call__"),zk=a(" special method."),qk=p(),B(Oo.$$.fragment),Mk=p(),B(Io.$$.fragment),wp=p(),Et=n("h2"),No=n("a"),Bd=n("span"),B(kr.$$.fragment),Ek=p(),vd=n("span"),jk=a("FlaxBigBirdForMaskedLM"),xp=p(),O=n("div"),B(Br.$$.fragment),Pk=p(),vr=n("p"),Ck=a("BigBird Model with a "),yd=n("code"),Lk=a("language modeling"),Ak=a(" head on top."),Ok=p(),yr=n("p"),Ik=a("This model inherits from "),Va=n("a"),Nk=a("FlaxPreTrainedModel"),Sk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dk=p(),Tr=n("p"),Wk=a("This model is also a Flax Linen "),$r=n("a"),Uk=a("flax.linen.Module"),Rk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gk=p(),Td=n("p"),Qk=a("Finally, this model supports inherent JAX features such as:"),Hk=p(),Ce=n("ul"),$d=n("li"),wr=n("a"),Vk=a("Just-In-Time (JIT) compilation"),Jk=p(),wd=n("li"),xr=n("a"),Kk=a("Automatic Differentiation"),Xk=p(),xd=n("li"),Fr=n("a"),Yk=a("Vectorization"),Zk=p(),Fd=n("li"),zr=n("a"),eB=a("Parallelization"),tB=p(),Te=n("div"),B(qr.$$.fragment),oB=p(),jt=n("p"),nB=a("The "),zd=n("code"),sB=a("FlaxBigBirdPreTrainedModel"),rB=a(" forward method, overrides the "),qd=n("code"),aB=a("__call__"),iB=a(" special method."),lB=p(),B(So.$$.fragment),dB=p(),B(Do.$$.fragment),Fp=p(),Pt=n("h2"),Wo=n("a"),Md=n("span"),B(Mr.$$.fragment),cB=p(),Ed=n("span"),pB=a("FlaxBigBirdForSequenceClassification"),zp=p(),I=n("div"),B(Er.$$.fragment),hB=p(),jd=n("p"),mB=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),gB=p(),jr=n("p"),fB=a("This model inherits from "),Ja=n("a"),uB=a("FlaxPreTrainedModel"),_B=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bB=p(),Pr=n("p"),kB=a("This model is also a Flax Linen "),Cr=n("a"),BB=a("flax.linen.Module"),vB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yB=p(),Pd=n("p"),TB=a("Finally, this model supports inherent JAX features such as:"),$B=p(),Le=n("ul"),Cd=n("li"),Lr=n("a"),wB=a("Just-In-Time (JIT) compilation"),xB=p(),Ld=n("li"),Ar=n("a"),FB=a("Automatic Differentiation"),zB=p(),Ad=n("li"),Or=n("a"),qB=a("Vectorization"),MB=p(),Od=n("li"),Ir=n("a"),EB=a("Parallelization"),jB=p(),$e=n("div"),B(Nr.$$.fragment),PB=p(),Ct=n("p"),CB=a("The "),Id=n("code"),LB=a("FlaxBigBirdPreTrainedModel"),AB=a(" forward method, overrides the "),Nd=n("code"),OB=a("__call__"),IB=a(" special method."),NB=p(),B(Uo.$$.fragment),SB=p(),B(Ro.$$.fragment),qp=p(),Lt=n("h2"),Go=n("a"),Sd=n("span"),B(Sr.$$.fragment),DB=p(),Dd=n("span"),WB=a("FlaxBigBirdForMultipleChoice"),Mp=p(),N=n("div"),B(Dr.$$.fragment),UB=p(),Wd=n("p"),RB=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),GB=p(),Wr=n("p"),QB=a("This model inherits from "),Ka=n("a"),HB=a("FlaxPreTrainedModel"),VB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),JB=p(),Ur=n("p"),KB=a("This model is also a Flax Linen "),Rr=n("a"),XB=a("flax.linen.Module"),YB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZB=p(),Ud=n("p"),ev=a("Finally, this model supports inherent JAX features such as:"),tv=p(),Ae=n("ul"),Rd=n("li"),Gr=n("a"),ov=a("Just-In-Time (JIT) compilation"),nv=p(),Gd=n("li"),Qr=n("a"),sv=a("Automatic Differentiation"),rv=p(),Qd=n("li"),Hr=n("a"),av=a("Vectorization"),iv=p(),Hd=n("li"),Vr=n("a"),lv=a("Parallelization"),dv=p(),we=n("div"),B(Jr.$$.fragment),cv=p(),At=n("p"),pv=a("The "),Vd=n("code"),hv=a("FlaxBigBirdPreTrainedModel"),mv=a(" forward method, overrides the "),Jd=n("code"),gv=a("__call__"),fv=a(" special method."),uv=p(),B(Qo.$$.fragment),_v=p(),B(Ho.$$.fragment),Ep=p(),Ot=n("h2"),Vo=n("a"),Kd=n("span"),B(Kr.$$.fragment),bv=p(),Xd=n("span"),kv=a("FlaxBigBirdForTokenClassification"),jp=p(),S=n("div"),B(Xr.$$.fragment),Bv=p(),Yd=n("p"),vv=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yv=p(),Yr=n("p"),Tv=a("This model inherits from "),Xa=n("a"),$v=a("FlaxPreTrainedModel"),wv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xv=p(),Zr=n("p"),Fv=a("This model is also a Flax Linen "),ea=n("a"),zv=a("flax.linen.Module"),qv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mv=p(),Zd=n("p"),Ev=a("Finally, this model supports inherent JAX features such as:"),jv=p(),Oe=n("ul"),ec=n("li"),ta=n("a"),Pv=a("Just-In-Time (JIT) compilation"),Cv=p(),tc=n("li"),oa=n("a"),Lv=a("Automatic Differentiation"),Av=p(),oc=n("li"),na=n("a"),Ov=a("Vectorization"),Iv=p(),nc=n("li"),sa=n("a"),Nv=a("Parallelization"),Sv=p(),xe=n("div"),B(ra.$$.fragment),Dv=p(),It=n("p"),Wv=a("The "),sc=n("code"),Uv=a("FlaxBigBirdPreTrainedModel"),Rv=a(" forward method, overrides the "),rc=n("code"),Gv=a("__call__"),Qv=a(" special method."),Hv=p(),B(Jo.$$.fragment),Vv=p(),B(Ko.$$.fragment),Pp=p(),Nt=n("h2"),Xo=n("a"),ac=n("span"),B(aa.$$.fragment),Jv=p(),ic=n("span"),Kv=a("FlaxBigBirdForQuestionAnswering"),Cp=p(),D=n("div"),B(ia.$$.fragment),Xv=p(),St=n("p"),Yv=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lc=n("code"),Zv=a("span start logits"),ey=a(" and "),dc=n("code"),ty=a("span end logits"),oy=a(")."),ny=p(),la=n("p"),sy=a("This model inherits from "),Ya=n("a"),ry=a("FlaxPreTrainedModel"),ay=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iy=p(),da=n("p"),ly=a("This model is also a Flax Linen "),ca=n("a"),dy=a("flax.linen.Module"),cy=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),py=p(),cc=n("p"),hy=a("Finally, this model supports inherent JAX features such as:"),my=p(),Ie=n("ul"),pc=n("li"),pa=n("a"),gy=a("Just-In-Time (JIT) compilation"),fy=p(),hc=n("li"),ha=n("a"),uy=a("Automatic Differentiation"),_y=p(),mc=n("li"),ma=n("a"),by=a("Vectorization"),ky=p(),gc=n("li"),ga=n("a"),By=a("Parallelization"),vy=p(),Fe=n("div"),B(fa.$$.fragment),yy=p(),Dt=n("p"),Ty=a("The "),Za=n("a"),$y=a("FlaxBigBirdForQuestionAnswering"),wy=a(" forward method, overrides the "),fc=n("code"),xy=a("__call__"),Fy=a(" special method."),zy=p(),B(Yo.$$.fragment),qy=p(),B(Zo.$$.fragment),this.h()},l(o){const u=Xw('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var ua=r(g);f=s(ua,"A",{id:!0,class:!0,href:!0});var uc=r(f);b=s(uc,"SPAN",{});var _c=r(b);v(l.$$.fragment,_c),_c.forEach(t),uc.forEach(t),m=h(ua),F=s(ua,"SPAN",{});var bc=r(F);Ah=i(bc,"BigBird"),bc.forEach(t),ua.forEach(t),Wc=h(o),Je=s(o,"H2",{class:!0});var _a=r(Je);Rt=s(_a,"A",{id:!0,class:!0,href:!0});var kc=r(Rt);zi=s(kc,"SPAN",{});var Bc=r(zi);v(Fn.$$.fragment,Bc),Bc.forEach(t),kc.forEach(t),Oh=h(_a),qi=s(_a,"SPAN",{});var vc=r(qi);Ih=i(vc,"Overview"),vc.forEach(t),_a.forEach(t),Uc=h(o),Gt=s(o,"P",{});var ba=r(Gt);Nh=i(ba,"The BigBird model was proposed in "),zn=s(ba,"A",{href:!0,rel:!0});var yc=r(zn);Sh=i(yc,"Big Bird: Transformers for Longer Sequences"),yc.forEach(t),Dh=i(ba,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ba.forEach(t),Rc=h(o),ya=s(o,"P",{});var Tc=r(ya);Wh=i(Tc,"The abstract from the paper is the following:"),Tc.forEach(t),Gc=h(o),Ta=s(o,"P",{});var $c=r(Ta);Mi=s($c,"EM",{});var wc=r(Mi);Uh=i(wc,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),wc.forEach(t),$c.forEach(t),Qc=h(o),$a=s(o,"P",{});var xc=r($a);Rh=i(xc,"Tips:"),xc.forEach(t),Hc=h(o),U=s(o,"UL",{});var H=r(U);qn=s(H,"LI",{});var ka=r(qn);Gh=i(ka,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Mn=s(ka,"A",{href:!0,rel:!0});var Fc=r(Mn);Qh=i(Fc,"this blog post"),Fc.forEach(t),Hh=i(ka,"."),ka.forEach(t),Vh=h(H),le=s(H,"LI",{});var ge=r(le);Jh=i(ge,"BigBird comes with 2 implementations: "),Ei=s(ge,"STRONG",{});var zc=r(Ei);Kh=i(zc,"original_full"),zc.forEach(t),Xh=i(ge," & "),ji=s(ge,"STRONG",{});var qc=r(ji);Yh=i(qc,"block_sparse"),qc.forEach(t),Zh=i(ge,`. For the sequence length < 1024, using
`),Pi=s(ge,"STRONG",{});var Mc=r(Pi);em=i(Mc,"original_full"),Mc.forEach(t),tm=i(ge," is advised as there is no benefit in using "),Ci=s(ge,"STRONG",{});var Ec=r(Ci);om=i(Ec,"block_sparse"),Ec.forEach(t),nm=i(ge," attention."),ge.forEach(t),sm=h(H),Li=s(H,"LI",{});var jc=r(Li);rm=i(jc,"The code currently uses window size of 3 blocks and 2 global blocks."),jc.forEach(t),am=h(H),Ai=s(H,"LI",{});var Pc=r(Ai);im=i(Pc,"Sequence length must be divisible by block size."),Pc.forEach(t),lm=h(H),En=s(H,"LI",{});var Ba=r(En);dm=i(Ba,"Current implementation supports only "),Oi=s(Ba,"STRONG",{});var Cc=r(Oi);cm=i(Cc,"ITC"),Cc.forEach(t),pm=i(Ba,"."),Ba.forEach(t),hm=h(H),wa=s(H,"LI",{});var ei=r(wa);mm=i(ei,"Current implementation doesn\u2019t support "),Ii=s(ei,"STRONG",{});var Lc=r(Ii);gm=i(Lc,"num_random_blocks = 0"),Lc.forEach(t),ei.forEach(t),H.forEach(t),Vc=h(o),Se=s(o,"P",{});var Wt=r(Se);fm=i(Wt,"This model was contributed by "),jn=s(Wt,"A",{href:!0,rel:!0});var Ac=r(jn);um=i(Ac,"vasudevgupta"),Ac.forEach(t),_m=i(Wt,`. The original code can be found
`),Pn=s(Wt,"A",{href:!0,rel:!0});var Oc=r(Pn);bm=i(Oc,"here"),Oc.forEach(t),km=i(Wt,"."),Wt.forEach(t),Jc=h(o),Ke=s(o,"H2",{class:!0});var va=r(Ke);Qt=s(va,"A",{id:!0,class:!0,href:!0});var Ic=r(Qt);Ni=s(Ic,"SPAN",{});var Nc=r(Ni);v(Cn.$$.fragment,Nc),Nc.forEach(t),Ic.forEach(t),Bm=h(va),Si=s(va,"SPAN",{});var Sc=r(Si);vm=i(Sc,"BigBirdConfig"),Sc.forEach(t),va.forEach(t),Kc=h(o),de=s(o,"DIV",{class:!0});var Ne=r(de);v(Ln.$$.fragment,Ne),ym=h(Ne),Xe=s(Ne,"P",{});var Ut=r(Xe);Tm=i(Ut,"This is the configuration class to store the configuration of a "),xa=s(Ut,"A",{href:!0});var Dc=r(xa);$m=i(Dc,"BigBirdModel"),Dc.forEach(t),wm=i(Ut,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),An=s(Ut,"A",{href:!0,rel:!0});var Cy=r(An);xm=i(Cy,"google/bigbird-roberta-base"),Cy.forEach(t),Fm=i(Ut," architecture."),Ut.forEach(t),zm=h(Ne),Ye=s(Ne,"P",{});var ti=r(Ye);qm=i(ti,"Configuration objects inherit from "),Fa=s(ti,"A",{href:!0});var Ly=r(Fa);Mm=i(Ly,"PretrainedConfig"),Ly.forEach(t),Em=i(ti,` and can be used to control the model outputs. Read the
documentation from `),za=s(ti,"A",{href:!0});var Ay=r(za);jm=i(Ay,"PretrainedConfig"),Ay.forEach(t),Pm=i(ti," for more information."),ti.forEach(t),Cm=h(Ne),v(Ht.$$.fragment,Ne),Ne.forEach(t),Xc=h(o),Ze=s(o,"H2",{class:!0});var Ap=r(Ze);Vt=s(Ap,"A",{id:!0,class:!0,href:!0});var Oy=r(Vt);Di=s(Oy,"SPAN",{});var Iy=r(Di);v(On.$$.fragment,Iy),Iy.forEach(t),Oy.forEach(t),Lm=h(Ap),Wi=s(Ap,"SPAN",{});var Ny=r(Wi);Am=i(Ny,"BigBirdTokenizer"),Ny.forEach(t),Ap.forEach(t),Yc=h(o),P=s(o,"DIV",{class:!0});var Y=r(P);v(In.$$.fragment,Y),Om=h(Y),Nn=s(Y,"P",{});var Op=r(Nn);Im=i(Op,"Construct a BigBird tokenizer. Based on "),Sn=s(Op,"A",{href:!0,rel:!0});var Sy=r(Sn);Nm=i(Sy,"SentencePiece"),Sy.forEach(t),Sm=i(Op,"."),Op.forEach(t),Dm=h(Y),Dn=s(Y,"P",{});var Ip=r(Dn);Wm=i(Ip,"This tokenizer inherits from "),qa=s(Ip,"A",{href:!0});var Dy=r(qa);Um=i(Dy,"PreTrainedTokenizer"),Dy.forEach(t),Rm=i(Ip,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ip.forEach(t),Gm=h(Y),De=s(Y,"DIV",{class:!0});var oi=r(De);v(Wn.$$.fragment,oi),Qm=h(oi),Ui=s(oi,"P",{});var Wy=r(Ui);Hm=i(Wy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Wy.forEach(t),Vm=h(oi),Un=s(oi,"UL",{});var Np=r(Un);Ma=s(Np,"LI",{});var My=r(Ma);Jm=i(My,"single sequence: "),Ri=s(My,"CODE",{});var Uy=r(Ri);Km=i(Uy,"[CLS] X [SEP]"),Uy.forEach(t),My.forEach(t),Xm=h(Np),Ea=s(Np,"LI",{});var Ey=r(Ea);Ym=i(Ey,"pair of sequences: "),Gi=s(Ey,"CODE",{});var Ry=r(Gi);Zm=i(Ry,"[CLS] A [SEP] B [SEP]"),Ry.forEach(t),Ey.forEach(t),Np.forEach(t),oi.forEach(t),eg=h(Y),Jt=s(Y,"DIV",{class:!0});var Sp=r(Jt);v(Rn.$$.fragment,Sp),tg=h(Sp),Gn=s(Sp,"P",{});var Dp=r(Gn);og=i(Dp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qi=s(Dp,"CODE",{});var Gy=r(Qi);ng=i(Gy,"prepare_for_model"),Gy.forEach(t),sg=i(Dp," method."),Dp.forEach(t),Sp.forEach(t),rg=h(Y),Kt=s(Y,"DIV",{class:!0});var Wp=r(Kt);v(Qn.$$.fragment,Wp),ag=h(Wp),et=s(Wp,"P",{});var ni=r(et);ig=i(ni,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),Hi=s(ni,"CODE",{});var Qy=r(Hi);lg=i(Qy,"token_ids_1"),Qy.forEach(t),dg=i(ni," is "),Vi=s(ni,"CODE",{});var Hy=r(Vi);cg=i(Hy,"None"),Hy.forEach(t),pg=i(ni,", this method only returns the first portion of the mask (0s)."),ni.forEach(t),Wp.forEach(t),hg=h(Y),ja=s(Y,"DIV",{class:!0});var Vy=r(ja);v(Hn.$$.fragment,Vy),Vy.forEach(t),Y.forEach(t),Zc=h(o),tt=s(o,"H2",{class:!0});var Up=r(tt);Xt=s(Up,"A",{id:!0,class:!0,href:!0});var Jy=r(Xt);Ji=s(Jy,"SPAN",{});var Ky=r(Ji);v(Vn.$$.fragment,Ky),Ky.forEach(t),Jy.forEach(t),mg=h(Up),Ki=s(Up,"SPAN",{});var Xy=r(Ki);gg=i(Xy,"BigBirdTokenizerFast"),Xy.forEach(t),Up.forEach(t),ep=h(o),G=s(o,"DIV",{class:!0});var Ue=r(G);v(Jn.$$.fragment,Ue),fg=h(Ue),ze=s(Ue,"P",{});var en=r(ze);ug=i(en,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Xi=s(en,"EM",{});var Yy=r(Xi);_g=i(Yy,"tokenizers"),Yy.forEach(t),bg=i(en,` library). Based on
`),Kn=s(en,"A",{href:!0,rel:!0});var Zy=r(Kn);kg=i(Zy,"Unigram"),Zy.forEach(t),Bg=i(en,`. This
tokenizer inherits from `),Pa=s(en,"A",{href:!0});var e1=r(Pa);vg=i(e1,"PreTrainedTokenizerFast"),e1.forEach(t),yg=i(en,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),en.forEach(t),Tg=h(Ue),We=s(Ue,"DIV",{class:!0});var si=r(We);v(Xn.$$.fragment,si),$g=h(si),Yi=s(si,"P",{});var t1=r(Yi);wg=i(t1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),t1.forEach(t),xg=h(si),Yn=s(si,"UL",{});var Rp=r(Yn);Ca=s(Rp,"LI",{});var jy=r(Ca);Fg=i(jy,"single sequence: "),Zi=s(jy,"CODE",{});var o1=r(Zi);zg=i(o1,"[CLS] X [SEP]"),o1.forEach(t),jy.forEach(t),qg=h(Rp),La=s(Rp,"LI",{});var Py=r(La);Mg=i(Py,"pair of sequences: "),el=s(Py,"CODE",{});var n1=r(el);Eg=i(n1,"[CLS] A [SEP] B [SEP]"),n1.forEach(t),Py.forEach(t),Rp.forEach(t),si.forEach(t),jg=h(Ue),fe=s(Ue,"DIV",{class:!0});var tn=r(fe);v(Zn.$$.fragment,tn),Pg=h(tn),tl=s(tn,"P",{});var s1=r(tl);Cg=i(s1,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),s1.forEach(t),Lg=h(tn),v(Yt.$$.fragment,tn),Ag=h(tn),ol=s(tn,"P",{});var r1=r(ol);Og=i(r1,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),r1.forEach(t),tn.forEach(t),Ig=h(Ue),Zt=s(Ue,"DIV",{class:!0});var Gp=r(Zt);v(es.$$.fragment,Gp),Ng=h(Gp),ts=s(Gp,"P",{});var Qp=r(ts);Sg=i(Qp,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nl=s(Qp,"CODE",{});var a1=r(nl);Dg=i(a1,"prepare_for_model"),a1.forEach(t),Wg=i(Qp," method."),Qp.forEach(t),Gp.forEach(t),Ue.forEach(t),tp=h(o),ot=s(o,"H2",{class:!0});var Hp=r(ot);eo=s(Hp,"A",{id:!0,class:!0,href:!0});var i1=r(eo);sl=s(i1,"SPAN",{});var l1=r(sl);v(os.$$.fragment,l1),l1.forEach(t),i1.forEach(t),Ug=h(Hp),rl=s(Hp,"SPAN",{});var d1=r(rl);Rg=i(d1,"BigBird specific outputs"),d1.forEach(t),Hp.forEach(t),op=h(o),nt=s(o,"DIV",{class:!0});var Vp=r(nt);v(ns.$$.fragment,Vp),Gg=h(Vp),ss=s(Vp,"P",{});var Jp=r(ss);Qg=i(Jp,"Output type of "),Aa=s(Jp,"A",{href:!0});var c1=r(Aa);Hg=i(c1,"BigBirdForPreTraining"),c1.forEach(t),Vg=i(Jp,"."),Jp.forEach(t),Vp.forEach(t),np=h(o),st=s(o,"H2",{class:!0});var Kp=r(st);to=s(Kp,"A",{id:!0,class:!0,href:!0});var p1=r(to);al=s(p1,"SPAN",{});var h1=r(al);v(rs.$$.fragment,h1),h1.forEach(t),p1.forEach(t),Jg=h(Kp),il=s(Kp,"SPAN",{});var m1=r(il);Kg=i(m1,"BigBirdModel"),m1.forEach(t),Kp.forEach(t),sp=h(o),Q=s(o,"DIV",{class:!0});var Re=r(Q);v(as.$$.fragment,Re),Xg=h(Re),is=s(Re,"P",{});var Xp=r(is);Yg=i(Xp,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ls=s(Xp,"A",{href:!0,rel:!0});var g1=r(ls);Zg=i(g1,"torch.nn.Module"),g1.forEach(t),ef=i(Xp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xp.forEach(t),tf=h(Re),ds=s(Re,"P",{});var Yp=r(ds);of=i(Yp,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),cs=s(Yp,"A",{href:!0,rel:!0});var f1=r(cs);nf=i(f1,`Attention is
all you need`),f1.forEach(t),sf=i(Yp,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Yp.forEach(t),rf=h(Re),W=s(Re,"P",{});var Z=r(W);af=i(Z,"To behave as an decoder the model needs to be initialized with the "),ll=s(Z,"CODE",{});var u1=r(ll);lf=i(u1,"is_decoder"),u1.forEach(t),df=i(Z,` argument of the configuration set
to `),dl=s(Z,"CODE",{});var _1=r(dl);cf=i(_1,"True"),_1.forEach(t),pf=i(Z,". To be used in a Seq2Seq model, the model needs to initialized with both "),cl=s(Z,"CODE",{});var b1=r(cl);hf=i(b1,"is_decoder"),b1.forEach(t),mf=i(Z,` argument and
`),pl=s(Z,"CODE",{});var k1=r(pl);gf=i(k1,"add_cross_attention"),k1.forEach(t),ff=i(Z," set to "),hl=s(Z,"CODE",{});var B1=r(hl);uf=i(B1,"True"),B1.forEach(t),_f=i(Z,"; an "),ml=s(Z,"CODE",{});var v1=r(ml);bf=i(v1,"encoder_hidden_states"),v1.forEach(t),kf=i(Z," is then expected as an input to the forward pass."),Z.forEach(t),Bf=h(Re),ue=s(Re,"DIV",{class:!0});var on=r(ue);v(ps.$$.fragment,on),vf=h(on),rt=s(on,"P",{});var ri=r(rt);yf=i(ri,"The "),Oa=s(ri,"A",{href:!0});var y1=r(Oa);Tf=i(y1,"BigBirdModel"),y1.forEach(t),$f=i(ri," forward method, overrides the "),gl=s(ri,"CODE",{});var T1=r(gl);wf=i(T1,"__call__"),T1.forEach(t),xf=i(ri," special method."),ri.forEach(t),Ff=h(on),v(oo.$$.fragment,on),zf=h(on),v(no.$$.fragment,on),on.forEach(t),Re.forEach(t),rp=h(o),at=s(o,"H2",{class:!0});var Zp=r(at);so=s(Zp,"A",{id:!0,class:!0,href:!0});var $1=r(so);fl=s($1,"SPAN",{});var w1=r(fl);v(hs.$$.fragment,w1),w1.forEach(t),$1.forEach(t),qf=h(Zp),ul=s(Zp,"SPAN",{});var x1=r(ul);Mf=i(x1,"BigBirdForPreTraining"),x1.forEach(t),Zp.forEach(t),ap=h(o),it=s(o,"DIV",{class:!0});var eh=r(it);v(ms.$$.fragment,eh),Ef=h(eh),_e=s(eh,"DIV",{class:!0});var nn=r(_e);v(gs.$$.fragment,nn),jf=h(nn),lt=s(nn,"P",{});var ai=r(lt);Pf=i(ai,"The "),Ia=s(ai,"A",{href:!0});var F1=r(Ia);Cf=i(F1,"BigBirdForPreTraining"),F1.forEach(t),Lf=i(ai," forward method, overrides the "),_l=s(ai,"CODE",{});var z1=r(_l);Af=i(z1,"__call__"),z1.forEach(t),Of=i(ai," special method."),ai.forEach(t),If=h(nn),v(ro.$$.fragment,nn),Nf=h(nn),v(ao.$$.fragment,nn),nn.forEach(t),eh.forEach(t),ip=h(o),dt=s(o,"H2",{class:!0});var th=r(dt);io=s(th,"A",{id:!0,class:!0,href:!0});var q1=r(io);bl=s(q1,"SPAN",{});var M1=r(bl);v(fs.$$.fragment,M1),M1.forEach(t),q1.forEach(t),Sf=h(th),kl=s(th,"SPAN",{});var E1=r(kl);Df=i(E1,"BigBirdForCausalLM"),E1.forEach(t),th.forEach(t),lp=h(o),qe=s(o,"DIV",{class:!0});var ii=r(qe);v(us.$$.fragment,ii),Wf=h(ii),ct=s(ii,"P",{});var li=r(ct);Uf=i(li,"BigBird Model with a "),Bl=s(li,"CODE",{});var j1=r(Bl);Rf=i(j1,"language modeling"),j1.forEach(t),Gf=i(li,` head on top for CLM fine-tuning.
This model is a PyTorch `),_s=s(li,"A",{href:!0,rel:!0});var P1=r(_s);Qf=i(P1,"torch.nn.Module"),P1.forEach(t),Hf=i(li,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),li.forEach(t),Vf=h(ii),be=s(ii,"DIV",{class:!0});var sn=r(be);v(bs.$$.fragment,sn),Jf=h(sn),pt=s(sn,"P",{});var di=r(pt);Kf=i(di,"The "),Na=s(di,"A",{href:!0});var C1=r(Na);Xf=i(C1,"BigBirdForCausalLM"),C1.forEach(t),Yf=i(di," forward method, overrides the "),vl=s(di,"CODE",{});var L1=r(vl);Zf=i(L1,"__call__"),L1.forEach(t),eu=i(di," special method."),di.forEach(t),tu=h(sn),v(lo.$$.fragment,sn),ou=h(sn),v(co.$$.fragment,sn),sn.forEach(t),ii.forEach(t),dp=h(o),ht=s(o,"H2",{class:!0});var oh=r(ht);po=s(oh,"A",{id:!0,class:!0,href:!0});var A1=r(po);yl=s(A1,"SPAN",{});var O1=r(yl);v(ks.$$.fragment,O1),O1.forEach(t),A1.forEach(t),nu=h(oh),Tl=s(oh,"SPAN",{});var I1=r(Tl);su=i(I1,"BigBirdForMaskedLM"),I1.forEach(t),oh.forEach(t),cp=h(o),Me=s(o,"DIV",{class:!0});var ci=r(Me);v(Bs.$$.fragment,ci),ru=h(ci),mt=s(ci,"P",{});var pi=r(mt);au=i(pi,"BigBird Model with a "),$l=s(pi,"CODE",{});var N1=r($l);iu=i(N1,"language modeling"),N1.forEach(t),lu=i(pi,` head on top.
This model is a PyTorch `),vs=s(pi,"A",{href:!0,rel:!0});var S1=r(vs);du=i(S1,"torch.nn.Module"),S1.forEach(t),cu=i(pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi.forEach(t),pu=h(ci),V=s(ci,"DIV",{class:!0});var Ge=r(V);v(ys.$$.fragment,Ge),hu=h(Ge),gt=s(Ge,"P",{});var hi=r(gt);mu=i(hi,"The "),Sa=s(hi,"A",{href:!0});var D1=r(Sa);gu=i(D1,"BigBirdForMaskedLM"),D1.forEach(t),fu=i(hi," forward method, overrides the "),wl=s(hi,"CODE",{});var W1=r(wl);uu=i(W1,"__call__"),W1.forEach(t),_u=i(hi," special method."),hi.forEach(t),bu=h(Ge),v(ho.$$.fragment,Ge),ku=h(Ge),v(mo.$$.fragment,Ge),Bu=h(Ge),v(go.$$.fragment,Ge),Ge.forEach(t),ci.forEach(t),pp=h(o),ft=s(o,"H2",{class:!0});var nh=r(ft);fo=s(nh,"A",{id:!0,class:!0,href:!0});var U1=r(fo);xl=s(U1,"SPAN",{});var R1=r(xl);v(Ts.$$.fragment,R1),R1.forEach(t),U1.forEach(t),vu=h(nh),Fl=s(nh,"SPAN",{});var G1=r(Fl);yu=i(G1,"BigBirdForSequenceClassification"),G1.forEach(t),nh.forEach(t),hp=h(o),ce=s(o,"DIV",{class:!0});var rn=r(ce);v($s.$$.fragment,rn),Tu=h(rn),zl=s(rn,"P",{});var Q1=r(zl);$u=i(Q1,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Q1.forEach(t),wu=h(rn),ws=s(rn,"P",{});var sh=r(ws);xu=i(sh,"This model is a PyTorch "),xs=s(sh,"A",{href:!0,rel:!0});var H1=r(xs);Fu=i(H1,"torch.nn.Module"),H1.forEach(t),zu=i(sh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sh.forEach(t),qu=h(rn),J=s(rn,"DIV",{class:!0});var Qe=r(J);v(Fs.$$.fragment,Qe),Mu=h(Qe),ut=s(Qe,"P",{});var mi=r(ut);Eu=i(mi,"The "),Da=s(mi,"A",{href:!0});var V1=r(Da);ju=i(V1,"BigBirdForSequenceClassification"),V1.forEach(t),Pu=i(mi," forward method, overrides the "),ql=s(mi,"CODE",{});var J1=r(ql);Cu=i(J1,"__call__"),J1.forEach(t),Lu=i(mi," special method."),mi.forEach(t),Au=h(Qe),v(uo.$$.fragment,Qe),Ou=h(Qe),v(_o.$$.fragment,Qe),Iu=h(Qe),v(bo.$$.fragment,Qe),Qe.forEach(t),rn.forEach(t),mp=h(o),_t=s(o,"H2",{class:!0});var rh=r(_t);ko=s(rh,"A",{id:!0,class:!0,href:!0});var K1=r(ko);Ml=s(K1,"SPAN",{});var X1=r(Ml);v(zs.$$.fragment,X1),X1.forEach(t),K1.forEach(t),Nu=h(rh),El=s(rh,"SPAN",{});var Y1=r(El);Su=i(Y1,"BigBirdForMultipleChoice"),Y1.forEach(t),rh.forEach(t),gp=h(o),pe=s(o,"DIV",{class:!0});var an=r(pe);v(qs.$$.fragment,an),Du=h(an),jl=s(an,"P",{});var Z1=r(jl);Wu=i(Z1,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Z1.forEach(t),Uu=h(an),Ms=s(an,"P",{});var ah=r(Ms);Ru=i(ah,"This model is a PyTorch "),Es=s(ah,"A",{href:!0,rel:!0});var eT=r(Es);Gu=i(eT,"torch.nn.Module"),eT.forEach(t),Qu=i(ah,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ah.forEach(t),Hu=h(an),ke=s(an,"DIV",{class:!0});var ln=r(ke);v(js.$$.fragment,ln),Vu=h(ln),bt=s(ln,"P",{});var gi=r(bt);Ju=i(gi,"The "),Wa=s(gi,"A",{href:!0});var tT=r(Wa);Ku=i(tT,"BigBirdForMultipleChoice"),tT.forEach(t),Xu=i(gi," forward method, overrides the "),Pl=s(gi,"CODE",{});var oT=r(Pl);Yu=i(oT,"__call__"),oT.forEach(t),Zu=i(gi," special method."),gi.forEach(t),e_=h(ln),v(Bo.$$.fragment,ln),t_=h(ln),v(vo.$$.fragment,ln),ln.forEach(t),an.forEach(t),fp=h(o),kt=s(o,"H2",{class:!0});var ih=r(kt);yo=s(ih,"A",{id:!0,class:!0,href:!0});var nT=r(yo);Cl=s(nT,"SPAN",{});var sT=r(Cl);v(Ps.$$.fragment,sT),sT.forEach(t),nT.forEach(t),o_=h(ih),Ll=s(ih,"SPAN",{});var rT=r(Ll);n_=i(rT,"BigBirdForTokenClassification"),rT.forEach(t),ih.forEach(t),up=h(o),he=s(o,"DIV",{class:!0});var dn=r(he);v(Cs.$$.fragment,dn),s_=h(dn),Al=s(dn,"P",{});var aT=r(Al);r_=i(aT,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),aT.forEach(t),a_=h(dn),Ls=s(dn,"P",{});var lh=r(Ls);i_=i(lh,"This model is a PyTorch "),As=s(lh,"A",{href:!0,rel:!0});var iT=r(As);l_=i(iT,"torch.nn.Module"),iT.forEach(t),d_=i(lh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lh.forEach(t),c_=h(dn),K=s(dn,"DIV",{class:!0});var He=r(K);v(Os.$$.fragment,He),p_=h(He),Bt=s(He,"P",{});var fi=r(Bt);h_=i(fi,"The "),Ua=s(fi,"A",{href:!0});var lT=r(Ua);m_=i(lT,"BigBirdForTokenClassification"),lT.forEach(t),g_=i(fi," forward method, overrides the "),Ol=s(fi,"CODE",{});var dT=r(Ol);f_=i(dT,"__call__"),dT.forEach(t),u_=i(fi," special method."),fi.forEach(t),__=h(He),v(To.$$.fragment,He),b_=h(He),v($o.$$.fragment,He),k_=h(He),v(wo.$$.fragment,He),He.forEach(t),dn.forEach(t),_p=h(o),vt=s(o,"H2",{class:!0});var dh=r(vt);xo=s(dh,"A",{id:!0,class:!0,href:!0});var cT=r(xo);Il=s(cT,"SPAN",{});var pT=r(Il);v(Is.$$.fragment,pT),pT.forEach(t),cT.forEach(t),B_=h(dh),Nl=s(dh,"SPAN",{});var hT=r(Nl);v_=i(hT,"BigBirdForQuestionAnswering"),hT.forEach(t),dh.forEach(t),bp=h(o),me=s(o,"DIV",{class:!0});var cn=r(me);v(Ns.$$.fragment,cn),y_=h(cn),yt=s(cn,"P",{});var ui=r(yt);T_=i(ui,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sl=s(ui,"CODE",{});var mT=r(Sl);$_=i(mT,"span start logits"),mT.forEach(t),w_=i(ui," and "),Dl=s(ui,"CODE",{});var gT=r(Dl);x_=i(gT,"span end logits"),gT.forEach(t),F_=i(ui,")."),ui.forEach(t),z_=h(cn),Ss=s(cn,"P",{});var ch=r(Ss);q_=i(ch,"This model is a PyTorch "),Ds=s(ch,"A",{href:!0,rel:!0});var fT=r(Ds);M_=i(fT,"torch.nn.Module"),fT.forEach(t),E_=i(ch,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ch.forEach(t),j_=h(cn),X=s(cn,"DIV",{class:!0});var Ve=r(X);v(Ws.$$.fragment,Ve),P_=h(Ve),Tt=s(Ve,"P",{});var _i=r(Tt);C_=i(_i,"The "),Ra=s(_i,"A",{href:!0});var uT=r(Ra);L_=i(uT,"BigBirdForQuestionAnswering"),uT.forEach(t),A_=i(_i," forward method, overrides the "),Wl=s(_i,"CODE",{});var _T=r(Wl);O_=i(_T,"__call__"),_T.forEach(t),I_=i(_i," special method."),_i.forEach(t),N_=h(Ve),v(Fo.$$.fragment,Ve),S_=h(Ve),v(zo.$$.fragment,Ve),D_=h(Ve),v(qo.$$.fragment,Ve),Ve.forEach(t),cn.forEach(t),kp=h(o),$t=s(o,"H2",{class:!0});var ph=r($t);Mo=s(ph,"A",{id:!0,class:!0,href:!0});var bT=r(Mo);Ul=s(bT,"SPAN",{});var kT=r(Ul);v(Us.$$.fragment,kT),kT.forEach(t),bT.forEach(t),W_=h(ph),Rl=s(ph,"SPAN",{});var BT=r(Rl);U_=i(BT,"FlaxBigBirdModel"),BT.forEach(t),ph.forEach(t),Bp=h(o),C=s(o,"DIV",{class:!0});var ee=r(C);v(Rs.$$.fragment,ee),R_=h(ee),Gl=s(ee,"P",{});var vT=r(Gl);G_=i(vT,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),vT.forEach(t),Q_=h(ee),Gs=s(ee,"P",{});var hh=r(Gs);H_=i(hh,"This model inherits from "),Ga=s(hh,"A",{href:!0});var yT=r(Ga);V_=i(yT,"FlaxPreTrainedModel"),yT.forEach(t),J_=i(hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hh.forEach(t),K_=h(ee),Qs=s(ee,"P",{});var mh=r(Qs);X_=i(mh,"This model is also a Flax Linen "),Hs=s(mh,"A",{href:!0,rel:!0});var TT=r(Hs);Y_=i(TT,"flax.linen.Module"),TT.forEach(t),Z_=i(mh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mh.forEach(t),eb=h(ee),Ql=s(ee,"P",{});var $T=r(Ql);tb=i($T,"Finally, this model supports inherent JAX features such as:"),$T.forEach(t),ob=h(ee),Ee=s(ee,"UL",{});var pn=r(Ee);Hl=s(pn,"LI",{});var wT=r(Hl);Vs=s(wT,"A",{href:!0,rel:!0});var xT=r(Vs);nb=i(xT,"Just-In-Time (JIT) compilation"),xT.forEach(t),wT.forEach(t),sb=h(pn),Vl=s(pn,"LI",{});var FT=r(Vl);Js=s(FT,"A",{href:!0,rel:!0});var zT=r(Js);rb=i(zT,"Automatic Differentiation"),zT.forEach(t),FT.forEach(t),ab=h(pn),Jl=s(pn,"LI",{});var qT=r(Jl);Ks=s(qT,"A",{href:!0,rel:!0});var MT=r(Ks);ib=i(MT,"Vectorization"),MT.forEach(t),qT.forEach(t),lb=h(pn),Kl=s(pn,"LI",{});var ET=r(Kl);Xs=s(ET,"A",{href:!0,rel:!0});var jT=r(Xs);db=i(jT,"Parallelization"),jT.forEach(t),ET.forEach(t),pn.forEach(t),cb=h(ee),Be=s(ee,"DIV",{class:!0});var hn=r(Be);v(Ys.$$.fragment,hn),pb=h(hn),wt=s(hn,"P",{});var bi=r(wt);hb=i(bi,"The "),Xl=s(bi,"CODE",{});var PT=r(Xl);mb=i(PT,"FlaxBigBirdPreTrainedModel"),PT.forEach(t),gb=i(bi," forward method, overrides the "),Yl=s(bi,"CODE",{});var CT=r(Yl);fb=i(CT,"__call__"),CT.forEach(t),ub=i(bi," special method."),bi.forEach(t),_b=h(hn),v(Eo.$$.fragment,hn),bb=h(hn),v(jo.$$.fragment,hn),hn.forEach(t),ee.forEach(t),vp=h(o),xt=s(o,"H2",{class:!0});var gh=r(xt);Po=s(gh,"A",{id:!0,class:!0,href:!0});var LT=r(Po);Zl=s(LT,"SPAN",{});var AT=r(Zl);v(Zs.$$.fragment,AT),AT.forEach(t),LT.forEach(t),kb=h(gh),ed=s(gh,"SPAN",{});var OT=r(ed);Bb=i(OT,"FlaxBigBirdForPreTraining"),OT.forEach(t),gh.forEach(t),yp=h(o),L=s(o,"DIV",{class:!0});var te=r(L);v(er.$$.fragment,te),vb=h(te),Ft=s(te,"P",{});var ki=r(Ft);yb=i(ki,"BigBird Model with two heads on top as done during the pretraining: a "),td=s(ki,"CODE",{});var IT=r(td);Tb=i(IT,"masked language modeling"),IT.forEach(t),$b=i(ki," head and a "),od=s(ki,"CODE",{});var NT=r(od);wb=i(NT,"next sentence prediction (classification)"),NT.forEach(t),xb=i(ki," head."),ki.forEach(t),Fb=h(te),tr=s(te,"P",{});var fh=r(tr);zb=i(fh,"This model inherits from "),Qa=s(fh,"A",{href:!0});var ST=r(Qa);qb=i(ST,"FlaxPreTrainedModel"),ST.forEach(t),Mb=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fh.forEach(t),Eb=h(te),or=s(te,"P",{});var uh=r(or);jb=i(uh,"This model is also a Flax Linen "),nr=s(uh,"A",{href:!0,rel:!0});var DT=r(nr);Pb=i(DT,"flax.linen.Module"),DT.forEach(t),Cb=i(uh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uh.forEach(t),Lb=h(te),nd=s(te,"P",{});var WT=r(nd);Ab=i(WT,"Finally, this model supports inherent JAX features such as:"),WT.forEach(t),Ob=h(te),je=s(te,"UL",{});var mn=r(je);sd=s(mn,"LI",{});var UT=r(sd);sr=s(UT,"A",{href:!0,rel:!0});var RT=r(sr);Ib=i(RT,"Just-In-Time (JIT) compilation"),RT.forEach(t),UT.forEach(t),Nb=h(mn),rd=s(mn,"LI",{});var GT=r(rd);rr=s(GT,"A",{href:!0,rel:!0});var QT=r(rr);Sb=i(QT,"Automatic Differentiation"),QT.forEach(t),GT.forEach(t),Db=h(mn),ad=s(mn,"LI",{});var HT=r(ad);ar=s(HT,"A",{href:!0,rel:!0});var VT=r(ar);Wb=i(VT,"Vectorization"),VT.forEach(t),HT.forEach(t),Ub=h(mn),id=s(mn,"LI",{});var JT=r(id);ir=s(JT,"A",{href:!0,rel:!0});var KT=r(ir);Rb=i(KT,"Parallelization"),KT.forEach(t),JT.forEach(t),mn.forEach(t),Gb=h(te),ve=s(te,"DIV",{class:!0});var gn=r(ve);v(lr.$$.fragment,gn),Qb=h(gn),zt=s(gn,"P",{});var Bi=r(zt);Hb=i(Bi,"The "),ld=s(Bi,"CODE",{});var XT=r(ld);Vb=i(XT,"FlaxBigBirdPreTrainedModel"),XT.forEach(t),Jb=i(Bi," forward method, overrides the "),dd=s(Bi,"CODE",{});var YT=r(dd);Kb=i(YT,"__call__"),YT.forEach(t),Xb=i(Bi," special method."),Bi.forEach(t),Yb=h(gn),v(Co.$$.fragment,gn),Zb=h(gn),v(Lo.$$.fragment,gn),gn.forEach(t),te.forEach(t),Tp=h(o),qt=s(o,"H2",{class:!0});var _h=r(qt);Ao=s(_h,"A",{id:!0,class:!0,href:!0});var ZT=r(Ao);cd=s(ZT,"SPAN",{});var e$=r(cd);v(dr.$$.fragment,e$),e$.forEach(t),ZT.forEach(t),ek=h(_h),pd=s(_h,"SPAN",{});var t$=r(pd);tk=i(t$,"FlaxBigBirdForCausalLM"),t$.forEach(t),_h.forEach(t),$p=h(o),A=s(o,"DIV",{class:!0});var oe=r(A);v(cr.$$.fragment,oe),ok=h(oe),hd=s(oe,"P",{});var o$=r(hd);nk=i(o$,`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),o$.forEach(t),sk=h(oe),pr=s(oe,"P",{});var bh=r(pr);rk=i(bh,"This model inherits from "),Ha=s(bh,"A",{href:!0});var n$=r(Ha);ak=i(n$,"FlaxPreTrainedModel"),n$.forEach(t),ik=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bh.forEach(t),lk=h(oe),hr=s(oe,"P",{});var kh=r(hr);dk=i(kh,"This model is also a Flax Linen "),mr=s(kh,"A",{href:!0,rel:!0});var s$=r(mr);ck=i(s$,"flax.linen.Module"),s$.forEach(t),pk=i(kh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kh.forEach(t),hk=h(oe),md=s(oe,"P",{});var r$=r(md);mk=i(r$,"Finally, this model supports inherent JAX features such as:"),r$.forEach(t),gk=h(oe),Pe=s(oe,"UL",{});var fn=r(Pe);gd=s(fn,"LI",{});var a$=r(gd);gr=s(a$,"A",{href:!0,rel:!0});var i$=r(gr);fk=i(i$,"Just-In-Time (JIT) compilation"),i$.forEach(t),a$.forEach(t),uk=h(fn),fd=s(fn,"LI",{});var l$=r(fd);fr=s(l$,"A",{href:!0,rel:!0});var d$=r(fr);_k=i(d$,"Automatic Differentiation"),d$.forEach(t),l$.forEach(t),bk=h(fn),ud=s(fn,"LI",{});var c$=r(ud);ur=s(c$,"A",{href:!0,rel:!0});var p$=r(ur);kk=i(p$,"Vectorization"),p$.forEach(t),c$.forEach(t),Bk=h(fn),_d=s(fn,"LI",{});var h$=r(_d);_r=s(h$,"A",{href:!0,rel:!0});var m$=r(_r);vk=i(m$,"Parallelization"),m$.forEach(t),h$.forEach(t),fn.forEach(t),yk=h(oe),ye=s(oe,"DIV",{class:!0});var un=r(ye);v(br.$$.fragment,un),Tk=h(un),Mt=s(un,"P",{});var vi=r(Mt);$k=i(vi,"The "),bd=s(vi,"CODE",{});var g$=r(bd);wk=i(g$,"FlaxBigBirdPreTrainedModel"),g$.forEach(t),xk=i(vi," forward method, overrides the "),kd=s(vi,"CODE",{});var f$=r(kd);Fk=i(f$,"__call__"),f$.forEach(t),zk=i(vi," special method."),vi.forEach(t),qk=h(un),v(Oo.$$.fragment,un),Mk=h(un),v(Io.$$.fragment,un),un.forEach(t),oe.forEach(t),wp=h(o),Et=s(o,"H2",{class:!0});var Bh=r(Et);No=s(Bh,"A",{id:!0,class:!0,href:!0});var u$=r(No);Bd=s(u$,"SPAN",{});var _$=r(Bd);v(kr.$$.fragment,_$),_$.forEach(t),u$.forEach(t),Ek=h(Bh),vd=s(Bh,"SPAN",{});var b$=r(vd);jk=i(b$,"FlaxBigBirdForMaskedLM"),b$.forEach(t),Bh.forEach(t),xp=h(o),O=s(o,"DIV",{class:!0});var ne=r(O);v(Br.$$.fragment,ne),Pk=h(ne),vr=s(ne,"P",{});var vh=r(vr);Ck=i(vh,"BigBird Model with a "),yd=s(vh,"CODE",{});var k$=r(yd);Lk=i(k$,"language modeling"),k$.forEach(t),Ak=i(vh," head on top."),vh.forEach(t),Ok=h(ne),yr=s(ne,"P",{});var yh=r(yr);Ik=i(yh,"This model inherits from "),Va=s(yh,"A",{href:!0});var B$=r(Va);Nk=i(B$,"FlaxPreTrainedModel"),B$.forEach(t),Sk=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yh.forEach(t),Dk=h(ne),Tr=s(ne,"P",{});var Th=r(Tr);Wk=i(Th,"This model is also a Flax Linen "),$r=s(Th,"A",{href:!0,rel:!0});var v$=r($r);Uk=i(v$,"flax.linen.Module"),v$.forEach(t),Rk=i(Th,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Th.forEach(t),Gk=h(ne),Td=s(ne,"P",{});var y$=r(Td);Qk=i(y$,"Finally, this model supports inherent JAX features such as:"),y$.forEach(t),Hk=h(ne),Ce=s(ne,"UL",{});var _n=r(Ce);$d=s(_n,"LI",{});var T$=r($d);wr=s(T$,"A",{href:!0,rel:!0});var $$=r(wr);Vk=i($$,"Just-In-Time (JIT) compilation"),$$.forEach(t),T$.forEach(t),Jk=h(_n),wd=s(_n,"LI",{});var w$=r(wd);xr=s(w$,"A",{href:!0,rel:!0});var x$=r(xr);Kk=i(x$,"Automatic Differentiation"),x$.forEach(t),w$.forEach(t),Xk=h(_n),xd=s(_n,"LI",{});var F$=r(xd);Fr=s(F$,"A",{href:!0,rel:!0});var z$=r(Fr);Yk=i(z$,"Vectorization"),z$.forEach(t),F$.forEach(t),Zk=h(_n),Fd=s(_n,"LI",{});var q$=r(Fd);zr=s(q$,"A",{href:!0,rel:!0});var M$=r(zr);eB=i(M$,"Parallelization"),M$.forEach(t),q$.forEach(t),_n.forEach(t),tB=h(ne),Te=s(ne,"DIV",{class:!0});var bn=r(Te);v(qr.$$.fragment,bn),oB=h(bn),jt=s(bn,"P",{});var yi=r(jt);nB=i(yi,"The "),zd=s(yi,"CODE",{});var E$=r(zd);sB=i(E$,"FlaxBigBirdPreTrainedModel"),E$.forEach(t),rB=i(yi," forward method, overrides the "),qd=s(yi,"CODE",{});var j$=r(qd);aB=i(j$,"__call__"),j$.forEach(t),iB=i(yi," special method."),yi.forEach(t),lB=h(bn),v(So.$$.fragment,bn),dB=h(bn),v(Do.$$.fragment,bn),bn.forEach(t),ne.forEach(t),Fp=h(o),Pt=s(o,"H2",{class:!0});var $h=r(Pt);Wo=s($h,"A",{id:!0,class:!0,href:!0});var P$=r(Wo);Md=s(P$,"SPAN",{});var C$=r(Md);v(Mr.$$.fragment,C$),C$.forEach(t),P$.forEach(t),cB=h($h),Ed=s($h,"SPAN",{});var L$=r(Ed);pB=i(L$,"FlaxBigBirdForSequenceClassification"),L$.forEach(t),$h.forEach(t),zp=h(o),I=s(o,"DIV",{class:!0});var se=r(I);v(Er.$$.fragment,se),hB=h(se),jd=s(se,"P",{});var A$=r(jd);mB=i(A$,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),A$.forEach(t),gB=h(se),jr=s(se,"P",{});var wh=r(jr);fB=i(wh,"This model inherits from "),Ja=s(wh,"A",{href:!0});var O$=r(Ja);uB=i(O$,"FlaxPreTrainedModel"),O$.forEach(t),_B=i(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wh.forEach(t),bB=h(se),Pr=s(se,"P",{});var xh=r(Pr);kB=i(xh,"This model is also a Flax Linen "),Cr=s(xh,"A",{href:!0,rel:!0});var I$=r(Cr);BB=i(I$,"flax.linen.Module"),I$.forEach(t),vB=i(xh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xh.forEach(t),yB=h(se),Pd=s(se,"P",{});var N$=r(Pd);TB=i(N$,"Finally, this model supports inherent JAX features such as:"),N$.forEach(t),$B=h(se),Le=s(se,"UL",{});var kn=r(Le);Cd=s(kn,"LI",{});var S$=r(Cd);Lr=s(S$,"A",{href:!0,rel:!0});var D$=r(Lr);wB=i(D$,"Just-In-Time (JIT) compilation"),D$.forEach(t),S$.forEach(t),xB=h(kn),Ld=s(kn,"LI",{});var W$=r(Ld);Ar=s(W$,"A",{href:!0,rel:!0});var U$=r(Ar);FB=i(U$,"Automatic Differentiation"),U$.forEach(t),W$.forEach(t),zB=h(kn),Ad=s(kn,"LI",{});var R$=r(Ad);Or=s(R$,"A",{href:!0,rel:!0});var G$=r(Or);qB=i(G$,"Vectorization"),G$.forEach(t),R$.forEach(t),MB=h(kn),Od=s(kn,"LI",{});var Q$=r(Od);Ir=s(Q$,"A",{href:!0,rel:!0});var H$=r(Ir);EB=i(H$,"Parallelization"),H$.forEach(t),Q$.forEach(t),kn.forEach(t),jB=h(se),$e=s(se,"DIV",{class:!0});var Bn=r($e);v(Nr.$$.fragment,Bn),PB=h(Bn),Ct=s(Bn,"P",{});var Ti=r(Ct);CB=i(Ti,"The "),Id=s(Ti,"CODE",{});var V$=r(Id);LB=i(V$,"FlaxBigBirdPreTrainedModel"),V$.forEach(t),AB=i(Ti," forward method, overrides the "),Nd=s(Ti,"CODE",{});var J$=r(Nd);OB=i(J$,"__call__"),J$.forEach(t),IB=i(Ti," special method."),Ti.forEach(t),NB=h(Bn),v(Uo.$$.fragment,Bn),SB=h(Bn),v(Ro.$$.fragment,Bn),Bn.forEach(t),se.forEach(t),qp=h(o),Lt=s(o,"H2",{class:!0});var Fh=r(Lt);Go=s(Fh,"A",{id:!0,class:!0,href:!0});var K$=r(Go);Sd=s(K$,"SPAN",{});var X$=r(Sd);v(Sr.$$.fragment,X$),X$.forEach(t),K$.forEach(t),DB=h(Fh),Dd=s(Fh,"SPAN",{});var Y$=r(Dd);WB=i(Y$,"FlaxBigBirdForMultipleChoice"),Y$.forEach(t),Fh.forEach(t),Mp=h(o),N=s(o,"DIV",{class:!0});var re=r(N);v(Dr.$$.fragment,re),UB=h(re),Wd=s(re,"P",{});var Z$=r(Wd);RB=i(Z$,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Z$.forEach(t),GB=h(re),Wr=s(re,"P",{});var zh=r(Wr);QB=i(zh,"This model inherits from "),Ka=s(zh,"A",{href:!0});var ew=r(Ka);HB=i(ew,"FlaxPreTrainedModel"),ew.forEach(t),VB=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zh.forEach(t),JB=h(re),Ur=s(re,"P",{});var qh=r(Ur);KB=i(qh,"This model is also a Flax Linen "),Rr=s(qh,"A",{href:!0,rel:!0});var tw=r(Rr);XB=i(tw,"flax.linen.Module"),tw.forEach(t),YB=i(qh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qh.forEach(t),ZB=h(re),Ud=s(re,"P",{});var ow=r(Ud);ev=i(ow,"Finally, this model supports inherent JAX features such as:"),ow.forEach(t),tv=h(re),Ae=s(re,"UL",{});var vn=r(Ae);Rd=s(vn,"LI",{});var nw=r(Rd);Gr=s(nw,"A",{href:!0,rel:!0});var sw=r(Gr);ov=i(sw,"Just-In-Time (JIT) compilation"),sw.forEach(t),nw.forEach(t),nv=h(vn),Gd=s(vn,"LI",{});var rw=r(Gd);Qr=s(rw,"A",{href:!0,rel:!0});var aw=r(Qr);sv=i(aw,"Automatic Differentiation"),aw.forEach(t),rw.forEach(t),rv=h(vn),Qd=s(vn,"LI",{});var iw=r(Qd);Hr=s(iw,"A",{href:!0,rel:!0});var lw=r(Hr);av=i(lw,"Vectorization"),lw.forEach(t),iw.forEach(t),iv=h(vn),Hd=s(vn,"LI",{});var dw=r(Hd);Vr=s(dw,"A",{href:!0,rel:!0});var cw=r(Vr);lv=i(cw,"Parallelization"),cw.forEach(t),dw.forEach(t),vn.forEach(t),dv=h(re),we=s(re,"DIV",{class:!0});var yn=r(we);v(Jr.$$.fragment,yn),cv=h(yn),At=s(yn,"P",{});var $i=r(At);pv=i($i,"The "),Vd=s($i,"CODE",{});var pw=r(Vd);hv=i(pw,"FlaxBigBirdPreTrainedModel"),pw.forEach(t),mv=i($i," forward method, overrides the "),Jd=s($i,"CODE",{});var hw=r(Jd);gv=i(hw,"__call__"),hw.forEach(t),fv=i($i," special method."),$i.forEach(t),uv=h(yn),v(Qo.$$.fragment,yn),_v=h(yn),v(Ho.$$.fragment,yn),yn.forEach(t),re.forEach(t),Ep=h(o),Ot=s(o,"H2",{class:!0});var Mh=r(Ot);Vo=s(Mh,"A",{id:!0,class:!0,href:!0});var mw=r(Vo);Kd=s(mw,"SPAN",{});var gw=r(Kd);v(Kr.$$.fragment,gw),gw.forEach(t),mw.forEach(t),bv=h(Mh),Xd=s(Mh,"SPAN",{});var fw=r(Xd);kv=i(fw,"FlaxBigBirdForTokenClassification"),fw.forEach(t),Mh.forEach(t),jp=h(o),S=s(o,"DIV",{class:!0});var ae=r(S);v(Xr.$$.fragment,ae),Bv=h(ae),Yd=s(ae,"P",{});var uw=r(Yd);vv=i(uw,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uw.forEach(t),yv=h(ae),Yr=s(ae,"P",{});var Eh=r(Yr);Tv=i(Eh,"This model inherits from "),Xa=s(Eh,"A",{href:!0});var _w=r(Xa);$v=i(_w,"FlaxPreTrainedModel"),_w.forEach(t),wv=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eh.forEach(t),xv=h(ae),Zr=s(ae,"P",{});var jh=r(Zr);Fv=i(jh,"This model is also a Flax Linen "),ea=s(jh,"A",{href:!0,rel:!0});var bw=r(ea);zv=i(bw,"flax.linen.Module"),bw.forEach(t),qv=i(jh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jh.forEach(t),Mv=h(ae),Zd=s(ae,"P",{});var kw=r(Zd);Ev=i(kw,"Finally, this model supports inherent JAX features such as:"),kw.forEach(t),jv=h(ae),Oe=s(ae,"UL",{});var Tn=r(Oe);ec=s(Tn,"LI",{});var Bw=r(ec);ta=s(Bw,"A",{href:!0,rel:!0});var vw=r(ta);Pv=i(vw,"Just-In-Time (JIT) compilation"),vw.forEach(t),Bw.forEach(t),Cv=h(Tn),tc=s(Tn,"LI",{});var yw=r(tc);oa=s(yw,"A",{href:!0,rel:!0});var Tw=r(oa);Lv=i(Tw,"Automatic Differentiation"),Tw.forEach(t),yw.forEach(t),Av=h(Tn),oc=s(Tn,"LI",{});var $w=r(oc);na=s($w,"A",{href:!0,rel:!0});var ww=r(na);Ov=i(ww,"Vectorization"),ww.forEach(t),$w.forEach(t),Iv=h(Tn),nc=s(Tn,"LI",{});var xw=r(nc);sa=s(xw,"A",{href:!0,rel:!0});var Fw=r(sa);Nv=i(Fw,"Parallelization"),Fw.forEach(t),xw.forEach(t),Tn.forEach(t),Sv=h(ae),xe=s(ae,"DIV",{class:!0});var $n=r(xe);v(ra.$$.fragment,$n),Dv=h($n),It=s($n,"P",{});var wi=r(It);Wv=i(wi,"The "),sc=s(wi,"CODE",{});var zw=r(sc);Uv=i(zw,"FlaxBigBirdPreTrainedModel"),zw.forEach(t),Rv=i(wi," forward method, overrides the "),rc=s(wi,"CODE",{});var qw=r(rc);Gv=i(qw,"__call__"),qw.forEach(t),Qv=i(wi," special method."),wi.forEach(t),Hv=h($n),v(Jo.$$.fragment,$n),Vv=h($n),v(Ko.$$.fragment,$n),$n.forEach(t),ae.forEach(t),Pp=h(o),Nt=s(o,"H2",{class:!0});var Ph=r(Nt);Xo=s(Ph,"A",{id:!0,class:!0,href:!0});var Mw=r(Xo);ac=s(Mw,"SPAN",{});var Ew=r(ac);v(aa.$$.fragment,Ew),Ew.forEach(t),Mw.forEach(t),Jv=h(Ph),ic=s(Ph,"SPAN",{});var jw=r(ic);Kv=i(jw,"FlaxBigBirdForQuestionAnswering"),jw.forEach(t),Ph.forEach(t),Cp=h(o),D=s(o,"DIV",{class:!0});var ie=r(D);v(ia.$$.fragment,ie),Xv=h(ie),St=s(ie,"P",{});var xi=r(St);Yv=i(xi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),lc=s(xi,"CODE",{});var Pw=r(lc);Zv=i(Pw,"span start logits"),Pw.forEach(t),ey=i(xi," and "),dc=s(xi,"CODE",{});var Cw=r(dc);ty=i(Cw,"span end logits"),Cw.forEach(t),oy=i(xi,")."),xi.forEach(t),ny=h(ie),la=s(ie,"P",{});var Ch=r(la);sy=i(Ch,"This model inherits from "),Ya=s(Ch,"A",{href:!0});var Lw=r(Ya);ry=i(Lw,"FlaxPreTrainedModel"),Lw.forEach(t),ay=i(Ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ch.forEach(t),iy=h(ie),da=s(ie,"P",{});var Lh=r(da);ly=i(Lh,"This model is also a Flax Linen "),ca=s(Lh,"A",{href:!0,rel:!0});var Aw=r(ca);dy=i(Aw,"flax.linen.Module"),Aw.forEach(t),cy=i(Lh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lh.forEach(t),py=h(ie),cc=s(ie,"P",{});var Ow=r(cc);hy=i(Ow,"Finally, this model supports inherent JAX features such as:"),Ow.forEach(t),my=h(ie),Ie=s(ie,"UL",{});var wn=r(Ie);pc=s(wn,"LI",{});var Iw=r(pc);pa=s(Iw,"A",{href:!0,rel:!0});var Nw=r(pa);gy=i(Nw,"Just-In-Time (JIT) compilation"),Nw.forEach(t),Iw.forEach(t),fy=h(wn),hc=s(wn,"LI",{});var Sw=r(hc);ha=s(Sw,"A",{href:!0,rel:!0});var Dw=r(ha);uy=i(Dw,"Automatic Differentiation"),Dw.forEach(t),Sw.forEach(t),_y=h(wn),mc=s(wn,"LI",{});var Ww=r(mc);ma=s(Ww,"A",{href:!0,rel:!0});var Uw=r(ma);by=i(Uw,"Vectorization"),Uw.forEach(t),Ww.forEach(t),ky=h(wn),gc=s(wn,"LI",{});var Rw=r(gc);ga=s(Rw,"A",{href:!0,rel:!0});var Gw=r(ga);By=i(Gw,"Parallelization"),Gw.forEach(t),Rw.forEach(t),wn.forEach(t),vy=h(ie),Fe=s(ie,"DIV",{class:!0});var xn=r(Fe);v(fa.$$.fragment,xn),yy=h(xn),Dt=s(xn,"P",{});var Fi=r(Dt);Ty=i(Fi,"The "),Za=s(Fi,"A",{href:!0});var Qw=r(Za);$y=i(Qw,"FlaxBigBirdForQuestionAnswering"),Qw.forEach(t),wy=i(Fi," forward method, overrides the "),fc=s(Fi,"CODE",{});var Hw=r(fc);xy=i(Hw,"__call__"),Hw.forEach(t),Fy=i(Fi," special method."),Fi.forEach(t),zy=h(xn),v(Yo.$$.fragment,xn),qy=h(xn),v(Zo.$$.fragment,xn),xn.forEach(t),ie.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Ix)),c(f,"id","bigbird"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#bigbird"),c(g,"class","relative group"),c(Rt,"id","overview"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#overview"),c(Je,"class","relative group"),c(zn,"href","https://arxiv.org/abs/2007.14062"),c(zn,"rel","nofollow"),c(Mn,"href","https://huggingface.co/blog/big-bird"),c(Mn,"rel","nofollow"),c(jn,"href","https://huggingface.co/vasudevgupta"),c(jn,"rel","nofollow"),c(Pn,"href","https://github.com/google-research/bigbird"),c(Pn,"rel","nofollow"),c(Qt,"id","transformers.BigBirdConfig"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.BigBirdConfig"),c(Ke,"class","relative group"),c(xa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(An,"href","https://huggingface.co/google/bigbird-roberta-base"),c(An,"rel","nofollow"),c(Fa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(za,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vt,"id","transformers.BigBirdTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.BigBirdTokenizer"),c(Ze,"class","relative group"),c(Sn,"href","https://github.com/google/sentencepiece"),c(Sn,"rel","nofollow"),c(qa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ja,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.BigBirdTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.BigBirdTokenizerFast"),c(tt,"class","relative group"),c(Kn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(Kn,"rel","nofollow"),c(Pa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ot,"class","relative group"),c(Aa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.BigBirdModel"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.BigBirdModel"),c(st,"class","relative group"),c(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ls,"rel","nofollow"),c(cs,"href","https://arxiv.org/abs/1706.03762"),c(cs,"rel","nofollow"),c(Oa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(so,"id","transformers.BigBirdForPreTraining"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.BigBirdForPreTraining"),c(at,"class","relative group"),c(Ia,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdForCausalLM"),c(dt,"class","relative group"),c(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_s,"rel","nofollow"),c(Na,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForMaskedLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForMaskedLM"),c(ht,"class","relative group"),c(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vs,"rel","nofollow"),c(Sa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fo,"id","transformers.BigBirdForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.BigBirdForSequenceClassification"),c(ft,"class","relative group"),c(xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xs,"rel","nofollow"),c(Da,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ko,"id","transformers.BigBirdForMultipleChoice"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.BigBirdForMultipleChoice"),c(_t,"class","relative group"),c(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Es,"rel","nofollow"),c(Wa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"id","transformers.BigBirdForTokenClassification"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.BigBirdForTokenClassification"),c(kt,"class","relative group"),c(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(As,"rel","nofollow"),c(Ua,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xo,"id","transformers.BigBirdForQuestionAnswering"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.BigBirdForQuestionAnswering"),c(vt,"class","relative group"),c(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ds,"rel","nofollow"),c(Ra,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"id","transformers.FlaxBigBirdModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.FlaxBigBirdModel"),c($t,"class","relative group"),c(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Vs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Xs,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.FlaxBigBirdForPreTraining"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxBigBirdForPreTraining"),c(xt,"class","relative group"),c(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(nr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(nr,"rel","nofollow"),c(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ir,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdForCausalLM"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdForCausalLM"),c(qt,"class","relative group"),c(Ha,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(mr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(mr,"rel","nofollow"),c(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(gr,"rel","nofollow"),c(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_r,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(No,"id","transformers.FlaxBigBirdForMaskedLM"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Et,"class","relative group"),c(Va,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($r,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c($r,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(zr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Pt,"class","relative group"),c(Ja,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Cr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Cr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ar,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Or,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ir,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Go,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(Lt,"class","relative group"),c(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Gr,"rel","nofollow"),c(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Qr,"rel","nofollow"),c(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Hr,"rel","nofollow"),c(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Vr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.FlaxBigBirdForTokenClassification"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Ot,"class","relative group"),c(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ea,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ea,"rel","nofollow"),c(ta,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(sa,"rel","nofollow"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Nt,"class","relative group"),c(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ca,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ca,"rel","nofollow"),c(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ha,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ga,"rel","nofollow"),c(Za,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,g,u),e(g,f),e(f,b),y(l,b,null),e(g,m),e(g,F),e(F,Ah),k(o,Wc,u),k(o,Je,u),e(Je,Rt),e(Rt,zi),y(Fn,zi,null),e(Je,Oh),e(Je,qi),e(qi,Ih),k(o,Uc,u),k(o,Gt,u),e(Gt,Nh),e(Gt,zn),e(zn,Sh),e(Gt,Dh),k(o,Rc,u),k(o,ya,u),e(ya,Wh),k(o,Gc,u),k(o,Ta,u),e(Ta,Mi),e(Mi,Uh),k(o,Qc,u),k(o,$a,u),e($a,Rh),k(o,Hc,u),k(o,U,u),e(U,qn),e(qn,Gh),e(qn,Mn),e(Mn,Qh),e(qn,Hh),e(U,Vh),e(U,le),e(le,Jh),e(le,Ei),e(Ei,Kh),e(le,Xh),e(le,ji),e(ji,Yh),e(le,Zh),e(le,Pi),e(Pi,em),e(le,tm),e(le,Ci),e(Ci,om),e(le,nm),e(U,sm),e(U,Li),e(Li,rm),e(U,am),e(U,Ai),e(Ai,im),e(U,lm),e(U,En),e(En,dm),e(En,Oi),e(Oi,cm),e(En,pm),e(U,hm),e(U,wa),e(wa,mm),e(wa,Ii),e(Ii,gm),k(o,Vc,u),k(o,Se,u),e(Se,fm),e(Se,jn),e(jn,um),e(Se,_m),e(Se,Pn),e(Pn,bm),e(Se,km),k(o,Jc,u),k(o,Ke,u),e(Ke,Qt),e(Qt,Ni),y(Cn,Ni,null),e(Ke,Bm),e(Ke,Si),e(Si,vm),k(o,Kc,u),k(o,de,u),y(Ln,de,null),e(de,ym),e(de,Xe),e(Xe,Tm),e(Xe,xa),e(xa,$m),e(Xe,wm),e(Xe,An),e(An,xm),e(Xe,Fm),e(de,zm),e(de,Ye),e(Ye,qm),e(Ye,Fa),e(Fa,Mm),e(Ye,Em),e(Ye,za),e(za,jm),e(Ye,Pm),e(de,Cm),y(Ht,de,null),k(o,Xc,u),k(o,Ze,u),e(Ze,Vt),e(Vt,Di),y(On,Di,null),e(Ze,Lm),e(Ze,Wi),e(Wi,Am),k(o,Yc,u),k(o,P,u),y(In,P,null),e(P,Om),e(P,Nn),e(Nn,Im),e(Nn,Sn),e(Sn,Nm),e(Nn,Sm),e(P,Dm),e(P,Dn),e(Dn,Wm),e(Dn,qa),e(qa,Um),e(Dn,Rm),e(P,Gm),e(P,De),y(Wn,De,null),e(De,Qm),e(De,Ui),e(Ui,Hm),e(De,Vm),e(De,Un),e(Un,Ma),e(Ma,Jm),e(Ma,Ri),e(Ri,Km),e(Un,Xm),e(Un,Ea),e(Ea,Ym),e(Ea,Gi),e(Gi,Zm),e(P,eg),e(P,Jt),y(Rn,Jt,null),e(Jt,tg),e(Jt,Gn),e(Gn,og),e(Gn,Qi),e(Qi,ng),e(Gn,sg),e(P,rg),e(P,Kt),y(Qn,Kt,null),e(Kt,ag),e(Kt,et),e(et,ig),e(et,Hi),e(Hi,lg),e(et,dg),e(et,Vi),e(Vi,cg),e(et,pg),e(P,hg),e(P,ja),y(Hn,ja,null),k(o,Zc,u),k(o,tt,u),e(tt,Xt),e(Xt,Ji),y(Vn,Ji,null),e(tt,mg),e(tt,Ki),e(Ki,gg),k(o,ep,u),k(o,G,u),y(Jn,G,null),e(G,fg),e(G,ze),e(ze,ug),e(ze,Xi),e(Xi,_g),e(ze,bg),e(ze,Kn),e(Kn,kg),e(ze,Bg),e(ze,Pa),e(Pa,vg),e(ze,yg),e(G,Tg),e(G,We),y(Xn,We,null),e(We,$g),e(We,Yi),e(Yi,wg),e(We,xg),e(We,Yn),e(Yn,Ca),e(Ca,Fg),e(Ca,Zi),e(Zi,zg),e(Yn,qg),e(Yn,La),e(La,Mg),e(La,el),e(el,Eg),e(G,jg),e(G,fe),y(Zn,fe,null),e(fe,Pg),e(fe,tl),e(tl,Cg),e(fe,Lg),y(Yt,fe,null),e(fe,Ag),e(fe,ol),e(ol,Og),e(G,Ig),e(G,Zt),y(es,Zt,null),e(Zt,Ng),e(Zt,ts),e(ts,Sg),e(ts,nl),e(nl,Dg),e(ts,Wg),k(o,tp,u),k(o,ot,u),e(ot,eo),e(eo,sl),y(os,sl,null),e(ot,Ug),e(ot,rl),e(rl,Rg),k(o,op,u),k(o,nt,u),y(ns,nt,null),e(nt,Gg),e(nt,ss),e(ss,Qg),e(ss,Aa),e(Aa,Hg),e(ss,Vg),k(o,np,u),k(o,st,u),e(st,to),e(to,al),y(rs,al,null),e(st,Jg),e(st,il),e(il,Kg),k(o,sp,u),k(o,Q,u),y(as,Q,null),e(Q,Xg),e(Q,is),e(is,Yg),e(is,ls),e(ls,Zg),e(is,ef),e(Q,tf),e(Q,ds),e(ds,of),e(ds,cs),e(cs,nf),e(ds,sf),e(Q,rf),e(Q,W),e(W,af),e(W,ll),e(ll,lf),e(W,df),e(W,dl),e(dl,cf),e(W,pf),e(W,cl),e(cl,hf),e(W,mf),e(W,pl),e(pl,gf),e(W,ff),e(W,hl),e(hl,uf),e(W,_f),e(W,ml),e(ml,bf),e(W,kf),e(Q,Bf),e(Q,ue),y(ps,ue,null),e(ue,vf),e(ue,rt),e(rt,yf),e(rt,Oa),e(Oa,Tf),e(rt,$f),e(rt,gl),e(gl,wf),e(rt,xf),e(ue,Ff),y(oo,ue,null),e(ue,zf),y(no,ue,null),k(o,rp,u),k(o,at,u),e(at,so),e(so,fl),y(hs,fl,null),e(at,qf),e(at,ul),e(ul,Mf),k(o,ap,u),k(o,it,u),y(ms,it,null),e(it,Ef),e(it,_e),y(gs,_e,null),e(_e,jf),e(_e,lt),e(lt,Pf),e(lt,Ia),e(Ia,Cf),e(lt,Lf),e(lt,_l),e(_l,Af),e(lt,Of),e(_e,If),y(ro,_e,null),e(_e,Nf),y(ao,_e,null),k(o,ip,u),k(o,dt,u),e(dt,io),e(io,bl),y(fs,bl,null),e(dt,Sf),e(dt,kl),e(kl,Df),k(o,lp,u),k(o,qe,u),y(us,qe,null),e(qe,Wf),e(qe,ct),e(ct,Uf),e(ct,Bl),e(Bl,Rf),e(ct,Gf),e(ct,_s),e(_s,Qf),e(ct,Hf),e(qe,Vf),e(qe,be),y(bs,be,null),e(be,Jf),e(be,pt),e(pt,Kf),e(pt,Na),e(Na,Xf),e(pt,Yf),e(pt,vl),e(vl,Zf),e(pt,eu),e(be,tu),y(lo,be,null),e(be,ou),y(co,be,null),k(o,dp,u),k(o,ht,u),e(ht,po),e(po,yl),y(ks,yl,null),e(ht,nu),e(ht,Tl),e(Tl,su),k(o,cp,u),k(o,Me,u),y(Bs,Me,null),e(Me,ru),e(Me,mt),e(mt,au),e(mt,$l),e($l,iu),e(mt,lu),e(mt,vs),e(vs,du),e(mt,cu),e(Me,pu),e(Me,V),y(ys,V,null),e(V,hu),e(V,gt),e(gt,mu),e(gt,Sa),e(Sa,gu),e(gt,fu),e(gt,wl),e(wl,uu),e(gt,_u),e(V,bu),y(ho,V,null),e(V,ku),y(mo,V,null),e(V,Bu),y(go,V,null),k(o,pp,u),k(o,ft,u),e(ft,fo),e(fo,xl),y(Ts,xl,null),e(ft,vu),e(ft,Fl),e(Fl,yu),k(o,hp,u),k(o,ce,u),y($s,ce,null),e(ce,Tu),e(ce,zl),e(zl,$u),e(ce,wu),e(ce,ws),e(ws,xu),e(ws,xs),e(xs,Fu),e(ws,zu),e(ce,qu),e(ce,J),y(Fs,J,null),e(J,Mu),e(J,ut),e(ut,Eu),e(ut,Da),e(Da,ju),e(ut,Pu),e(ut,ql),e(ql,Cu),e(ut,Lu),e(J,Au),y(uo,J,null),e(J,Ou),y(_o,J,null),e(J,Iu),y(bo,J,null),k(o,mp,u),k(o,_t,u),e(_t,ko),e(ko,Ml),y(zs,Ml,null),e(_t,Nu),e(_t,El),e(El,Su),k(o,gp,u),k(o,pe,u),y(qs,pe,null),e(pe,Du),e(pe,jl),e(jl,Wu),e(pe,Uu),e(pe,Ms),e(Ms,Ru),e(Ms,Es),e(Es,Gu),e(Ms,Qu),e(pe,Hu),e(pe,ke),y(js,ke,null),e(ke,Vu),e(ke,bt),e(bt,Ju),e(bt,Wa),e(Wa,Ku),e(bt,Xu),e(bt,Pl),e(Pl,Yu),e(bt,Zu),e(ke,e_),y(Bo,ke,null),e(ke,t_),y(vo,ke,null),k(o,fp,u),k(o,kt,u),e(kt,yo),e(yo,Cl),y(Ps,Cl,null),e(kt,o_),e(kt,Ll),e(Ll,n_),k(o,up,u),k(o,he,u),y(Cs,he,null),e(he,s_),e(he,Al),e(Al,r_),e(he,a_),e(he,Ls),e(Ls,i_),e(Ls,As),e(As,l_),e(Ls,d_),e(he,c_),e(he,K),y(Os,K,null),e(K,p_),e(K,Bt),e(Bt,h_),e(Bt,Ua),e(Ua,m_),e(Bt,g_),e(Bt,Ol),e(Ol,f_),e(Bt,u_),e(K,__),y(To,K,null),e(K,b_),y($o,K,null),e(K,k_),y(wo,K,null),k(o,_p,u),k(o,vt,u),e(vt,xo),e(xo,Il),y(Is,Il,null),e(vt,B_),e(vt,Nl),e(Nl,v_),k(o,bp,u),k(o,me,u),y(Ns,me,null),e(me,y_),e(me,yt),e(yt,T_),e(yt,Sl),e(Sl,$_),e(yt,w_),e(yt,Dl),e(Dl,x_),e(yt,F_),e(me,z_),e(me,Ss),e(Ss,q_),e(Ss,Ds),e(Ds,M_),e(Ss,E_),e(me,j_),e(me,X),y(Ws,X,null),e(X,P_),e(X,Tt),e(Tt,C_),e(Tt,Ra),e(Ra,L_),e(Tt,A_),e(Tt,Wl),e(Wl,O_),e(Tt,I_),e(X,N_),y(Fo,X,null),e(X,S_),y(zo,X,null),e(X,D_),y(qo,X,null),k(o,kp,u),k(o,$t,u),e($t,Mo),e(Mo,Ul),y(Us,Ul,null),e($t,W_),e($t,Rl),e(Rl,U_),k(o,Bp,u),k(o,C,u),y(Rs,C,null),e(C,R_),e(C,Gl),e(Gl,G_),e(C,Q_),e(C,Gs),e(Gs,H_),e(Gs,Ga),e(Ga,V_),e(Gs,J_),e(C,K_),e(C,Qs),e(Qs,X_),e(Qs,Hs),e(Hs,Y_),e(Qs,Z_),e(C,eb),e(C,Ql),e(Ql,tb),e(C,ob),e(C,Ee),e(Ee,Hl),e(Hl,Vs),e(Vs,nb),e(Ee,sb),e(Ee,Vl),e(Vl,Js),e(Js,rb),e(Ee,ab),e(Ee,Jl),e(Jl,Ks),e(Ks,ib),e(Ee,lb),e(Ee,Kl),e(Kl,Xs),e(Xs,db),e(C,cb),e(C,Be),y(Ys,Be,null),e(Be,pb),e(Be,wt),e(wt,hb),e(wt,Xl),e(Xl,mb),e(wt,gb),e(wt,Yl),e(Yl,fb),e(wt,ub),e(Be,_b),y(Eo,Be,null),e(Be,bb),y(jo,Be,null),k(o,vp,u),k(o,xt,u),e(xt,Po),e(Po,Zl),y(Zs,Zl,null),e(xt,kb),e(xt,ed),e(ed,Bb),k(o,yp,u),k(o,L,u),y(er,L,null),e(L,vb),e(L,Ft),e(Ft,yb),e(Ft,td),e(td,Tb),e(Ft,$b),e(Ft,od),e(od,wb),e(Ft,xb),e(L,Fb),e(L,tr),e(tr,zb),e(tr,Qa),e(Qa,qb),e(tr,Mb),e(L,Eb),e(L,or),e(or,jb),e(or,nr),e(nr,Pb),e(or,Cb),e(L,Lb),e(L,nd),e(nd,Ab),e(L,Ob),e(L,je),e(je,sd),e(sd,sr),e(sr,Ib),e(je,Nb),e(je,rd),e(rd,rr),e(rr,Sb),e(je,Db),e(je,ad),e(ad,ar),e(ar,Wb),e(je,Ub),e(je,id),e(id,ir),e(ir,Rb),e(L,Gb),e(L,ve),y(lr,ve,null),e(ve,Qb),e(ve,zt),e(zt,Hb),e(zt,ld),e(ld,Vb),e(zt,Jb),e(zt,dd),e(dd,Kb),e(zt,Xb),e(ve,Yb),y(Co,ve,null),e(ve,Zb),y(Lo,ve,null),k(o,Tp,u),k(o,qt,u),e(qt,Ao),e(Ao,cd),y(dr,cd,null),e(qt,ek),e(qt,pd),e(pd,tk),k(o,$p,u),k(o,A,u),y(cr,A,null),e(A,ok),e(A,hd),e(hd,nk),e(A,sk),e(A,pr),e(pr,rk),e(pr,Ha),e(Ha,ak),e(pr,ik),e(A,lk),e(A,hr),e(hr,dk),e(hr,mr),e(mr,ck),e(hr,pk),e(A,hk),e(A,md),e(md,mk),e(A,gk),e(A,Pe),e(Pe,gd),e(gd,gr),e(gr,fk),e(Pe,uk),e(Pe,fd),e(fd,fr),e(fr,_k),e(Pe,bk),e(Pe,ud),e(ud,ur),e(ur,kk),e(Pe,Bk),e(Pe,_d),e(_d,_r),e(_r,vk),e(A,yk),e(A,ye),y(br,ye,null),e(ye,Tk),e(ye,Mt),e(Mt,$k),e(Mt,bd),e(bd,wk),e(Mt,xk),e(Mt,kd),e(kd,Fk),e(Mt,zk),e(ye,qk),y(Oo,ye,null),e(ye,Mk),y(Io,ye,null),k(o,wp,u),k(o,Et,u),e(Et,No),e(No,Bd),y(kr,Bd,null),e(Et,Ek),e(Et,vd),e(vd,jk),k(o,xp,u),k(o,O,u),y(Br,O,null),e(O,Pk),e(O,vr),e(vr,Ck),e(vr,yd),e(yd,Lk),e(vr,Ak),e(O,Ok),e(O,yr),e(yr,Ik),e(yr,Va),e(Va,Nk),e(yr,Sk),e(O,Dk),e(O,Tr),e(Tr,Wk),e(Tr,$r),e($r,Uk),e(Tr,Rk),e(O,Gk),e(O,Td),e(Td,Qk),e(O,Hk),e(O,Ce),e(Ce,$d),e($d,wr),e(wr,Vk),e(Ce,Jk),e(Ce,wd),e(wd,xr),e(xr,Kk),e(Ce,Xk),e(Ce,xd),e(xd,Fr),e(Fr,Yk),e(Ce,Zk),e(Ce,Fd),e(Fd,zr),e(zr,eB),e(O,tB),e(O,Te),y(qr,Te,null),e(Te,oB),e(Te,jt),e(jt,nB),e(jt,zd),e(zd,sB),e(jt,rB),e(jt,qd),e(qd,aB),e(jt,iB),e(Te,lB),y(So,Te,null),e(Te,dB),y(Do,Te,null),k(o,Fp,u),k(o,Pt,u),e(Pt,Wo),e(Wo,Md),y(Mr,Md,null),e(Pt,cB),e(Pt,Ed),e(Ed,pB),k(o,zp,u),k(o,I,u),y(Er,I,null),e(I,hB),e(I,jd),e(jd,mB),e(I,gB),e(I,jr),e(jr,fB),e(jr,Ja),e(Ja,uB),e(jr,_B),e(I,bB),e(I,Pr),e(Pr,kB),e(Pr,Cr),e(Cr,BB),e(Pr,vB),e(I,yB),e(I,Pd),e(Pd,TB),e(I,$B),e(I,Le),e(Le,Cd),e(Cd,Lr),e(Lr,wB),e(Le,xB),e(Le,Ld),e(Ld,Ar),e(Ar,FB),e(Le,zB),e(Le,Ad),e(Ad,Or),e(Or,qB),e(Le,MB),e(Le,Od),e(Od,Ir),e(Ir,EB),e(I,jB),e(I,$e),y(Nr,$e,null),e($e,PB),e($e,Ct),e(Ct,CB),e(Ct,Id),e(Id,LB),e(Ct,AB),e(Ct,Nd),e(Nd,OB),e(Ct,IB),e($e,NB),y(Uo,$e,null),e($e,SB),y(Ro,$e,null),k(o,qp,u),k(o,Lt,u),e(Lt,Go),e(Go,Sd),y(Sr,Sd,null),e(Lt,DB),e(Lt,Dd),e(Dd,WB),k(o,Mp,u),k(o,N,u),y(Dr,N,null),e(N,UB),e(N,Wd),e(Wd,RB),e(N,GB),e(N,Wr),e(Wr,QB),e(Wr,Ka),e(Ka,HB),e(Wr,VB),e(N,JB),e(N,Ur),e(Ur,KB),e(Ur,Rr),e(Rr,XB),e(Ur,YB),e(N,ZB),e(N,Ud),e(Ud,ev),e(N,tv),e(N,Ae),e(Ae,Rd),e(Rd,Gr),e(Gr,ov),e(Ae,nv),e(Ae,Gd),e(Gd,Qr),e(Qr,sv),e(Ae,rv),e(Ae,Qd),e(Qd,Hr),e(Hr,av),e(Ae,iv),e(Ae,Hd),e(Hd,Vr),e(Vr,lv),e(N,dv),e(N,we),y(Jr,we,null),e(we,cv),e(we,At),e(At,pv),e(At,Vd),e(Vd,hv),e(At,mv),e(At,Jd),e(Jd,gv),e(At,fv),e(we,uv),y(Qo,we,null),e(we,_v),y(Ho,we,null),k(o,Ep,u),k(o,Ot,u),e(Ot,Vo),e(Vo,Kd),y(Kr,Kd,null),e(Ot,bv),e(Ot,Xd),e(Xd,kv),k(o,jp,u),k(o,S,u),y(Xr,S,null),e(S,Bv),e(S,Yd),e(Yd,vv),e(S,yv),e(S,Yr),e(Yr,Tv),e(Yr,Xa),e(Xa,$v),e(Yr,wv),e(S,xv),e(S,Zr),e(Zr,Fv),e(Zr,ea),e(ea,zv),e(Zr,qv),e(S,Mv),e(S,Zd),e(Zd,Ev),e(S,jv),e(S,Oe),e(Oe,ec),e(ec,ta),e(ta,Pv),e(Oe,Cv),e(Oe,tc),e(tc,oa),e(oa,Lv),e(Oe,Av),e(Oe,oc),e(oc,na),e(na,Ov),e(Oe,Iv),e(Oe,nc),e(nc,sa),e(sa,Nv),e(S,Sv),e(S,xe),y(ra,xe,null),e(xe,Dv),e(xe,It),e(It,Wv),e(It,sc),e(sc,Uv),e(It,Rv),e(It,rc),e(rc,Gv),e(It,Qv),e(xe,Hv),y(Jo,xe,null),e(xe,Vv),y(Ko,xe,null),k(o,Pp,u),k(o,Nt,u),e(Nt,Xo),e(Xo,ac),y(aa,ac,null),e(Nt,Jv),e(Nt,ic),e(ic,Kv),k(o,Cp,u),k(o,D,u),y(ia,D,null),e(D,Xv),e(D,St),e(St,Yv),e(St,lc),e(lc,Zv),e(St,ey),e(St,dc),e(dc,ty),e(St,oy),e(D,ny),e(D,la),e(la,sy),e(la,Ya),e(Ya,ry),e(la,ay),e(D,iy),e(D,da),e(da,ly),e(da,ca),e(ca,dy),e(da,cy),e(D,py),e(D,cc),e(cc,hy),e(D,my),e(D,Ie),e(Ie,pc),e(pc,pa),e(pa,gy),e(Ie,fy),e(Ie,hc),e(hc,ha),e(ha,uy),e(Ie,_y),e(Ie,mc),e(mc,ma),e(ma,by),e(Ie,ky),e(Ie,gc),e(gc,ga),e(ga,By),e(D,vy),e(D,Fe),y(fa,Fe,null),e(Fe,yy),e(Fe,Dt),e(Dt,Ty),e(Dt,Za),e(Za,$y),e(Dt,wy),e(Dt,fc),e(fc,xy),e(Dt,Fy),e(Fe,zy),y(Yo,Fe,null),e(Fe,qy),y(Zo,Fe,null),Lp=!0},p(o,[u]){const ua={};u&2&&(ua.$$scope={dirty:u,ctx:o}),Ht.$set(ua);const uc={};u&2&&(uc.$$scope={dirty:u,ctx:o}),Yt.$set(uc);const _c={};u&2&&(_c.$$scope={dirty:u,ctx:o}),oo.$set(_c);const bc={};u&2&&(bc.$$scope={dirty:u,ctx:o}),no.$set(bc);const _a={};u&2&&(_a.$$scope={dirty:u,ctx:o}),ro.$set(_a);const kc={};u&2&&(kc.$$scope={dirty:u,ctx:o}),ao.$set(kc);const Bc={};u&2&&(Bc.$$scope={dirty:u,ctx:o}),lo.$set(Bc);const vc={};u&2&&(vc.$$scope={dirty:u,ctx:o}),co.$set(vc);const ba={};u&2&&(ba.$$scope={dirty:u,ctx:o}),ho.$set(ba);const yc={};u&2&&(yc.$$scope={dirty:u,ctx:o}),mo.$set(yc);const Tc={};u&2&&(Tc.$$scope={dirty:u,ctx:o}),go.$set(Tc);const $c={};u&2&&($c.$$scope={dirty:u,ctx:o}),uo.$set($c);const wc={};u&2&&(wc.$$scope={dirty:u,ctx:o}),_o.$set(wc);const xc={};u&2&&(xc.$$scope={dirty:u,ctx:o}),bo.$set(xc);const H={};u&2&&(H.$$scope={dirty:u,ctx:o}),Bo.$set(H);const ka={};u&2&&(ka.$$scope={dirty:u,ctx:o}),vo.$set(ka);const Fc={};u&2&&(Fc.$$scope={dirty:u,ctx:o}),To.$set(Fc);const ge={};u&2&&(ge.$$scope={dirty:u,ctx:o}),$o.$set(ge);const zc={};u&2&&(zc.$$scope={dirty:u,ctx:o}),wo.$set(zc);const qc={};u&2&&(qc.$$scope={dirty:u,ctx:o}),Fo.$set(qc);const Mc={};u&2&&(Mc.$$scope={dirty:u,ctx:o}),zo.$set(Mc);const Ec={};u&2&&(Ec.$$scope={dirty:u,ctx:o}),qo.$set(Ec);const jc={};u&2&&(jc.$$scope={dirty:u,ctx:o}),Eo.$set(jc);const Pc={};u&2&&(Pc.$$scope={dirty:u,ctx:o}),jo.$set(Pc);const Ba={};u&2&&(Ba.$$scope={dirty:u,ctx:o}),Co.$set(Ba);const Cc={};u&2&&(Cc.$$scope={dirty:u,ctx:o}),Lo.$set(Cc);const ei={};u&2&&(ei.$$scope={dirty:u,ctx:o}),Oo.$set(ei);const Lc={};u&2&&(Lc.$$scope={dirty:u,ctx:o}),Io.$set(Lc);const Wt={};u&2&&(Wt.$$scope={dirty:u,ctx:o}),So.$set(Wt);const Ac={};u&2&&(Ac.$$scope={dirty:u,ctx:o}),Do.$set(Ac);const Oc={};u&2&&(Oc.$$scope={dirty:u,ctx:o}),Uo.$set(Oc);const va={};u&2&&(va.$$scope={dirty:u,ctx:o}),Ro.$set(va);const Ic={};u&2&&(Ic.$$scope={dirty:u,ctx:o}),Qo.$set(Ic);const Nc={};u&2&&(Nc.$$scope={dirty:u,ctx:o}),Ho.$set(Nc);const Sc={};u&2&&(Sc.$$scope={dirty:u,ctx:o}),Jo.$set(Sc);const Ne={};u&2&&(Ne.$$scope={dirty:u,ctx:o}),Ko.$set(Ne);const Ut={};u&2&&(Ut.$$scope={dirty:u,ctx:o}),Yo.$set(Ut);const Dc={};u&2&&(Dc.$$scope={dirty:u,ctx:o}),Zo.$set(Dc)},i(o){Lp||(T(l.$$.fragment,o),T(Fn.$$.fragment,o),T(Cn.$$.fragment,o),T(Ln.$$.fragment,o),T(Ht.$$.fragment,o),T(On.$$.fragment,o),T(In.$$.fragment,o),T(Wn.$$.fragment,o),T(Rn.$$.fragment,o),T(Qn.$$.fragment,o),T(Hn.$$.fragment,o),T(Vn.$$.fragment,o),T(Jn.$$.fragment,o),T(Xn.$$.fragment,o),T(Zn.$$.fragment,o),T(Yt.$$.fragment,o),T(es.$$.fragment,o),T(os.$$.fragment,o),T(ns.$$.fragment,o),T(rs.$$.fragment,o),T(as.$$.fragment,o),T(ps.$$.fragment,o),T(oo.$$.fragment,o),T(no.$$.fragment,o),T(hs.$$.fragment,o),T(ms.$$.fragment,o),T(gs.$$.fragment,o),T(ro.$$.fragment,o),T(ao.$$.fragment,o),T(fs.$$.fragment,o),T(us.$$.fragment,o),T(bs.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T(ks.$$.fragment,o),T(Bs.$$.fragment,o),T(ys.$$.fragment,o),T(ho.$$.fragment,o),T(mo.$$.fragment,o),T(go.$$.fragment,o),T(Ts.$$.fragment,o),T($s.$$.fragment,o),T(Fs.$$.fragment,o),T(uo.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(zs.$$.fragment,o),T(qs.$$.fragment,o),T(js.$$.fragment,o),T(Bo.$$.fragment,o),T(vo.$$.fragment,o),T(Ps.$$.fragment,o),T(Cs.$$.fragment,o),T(Os.$$.fragment,o),T(To.$$.fragment,o),T($o.$$.fragment,o),T(wo.$$.fragment,o),T(Is.$$.fragment,o),T(Ns.$$.fragment,o),T(Ws.$$.fragment,o),T(Fo.$$.fragment,o),T(zo.$$.fragment,o),T(qo.$$.fragment,o),T(Us.$$.fragment,o),T(Rs.$$.fragment,o),T(Ys.$$.fragment,o),T(Eo.$$.fragment,o),T(jo.$$.fragment,o),T(Zs.$$.fragment,o),T(er.$$.fragment,o),T(lr.$$.fragment,o),T(Co.$$.fragment,o),T(Lo.$$.fragment,o),T(dr.$$.fragment,o),T(cr.$$.fragment,o),T(br.$$.fragment,o),T(Oo.$$.fragment,o),T(Io.$$.fragment,o),T(kr.$$.fragment,o),T(Br.$$.fragment,o),T(qr.$$.fragment,o),T(So.$$.fragment,o),T(Do.$$.fragment,o),T(Mr.$$.fragment,o),T(Er.$$.fragment,o),T(Nr.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Sr.$$.fragment,o),T(Dr.$$.fragment,o),T(Jr.$$.fragment,o),T(Qo.$$.fragment,o),T(Ho.$$.fragment,o),T(Kr.$$.fragment,o),T(Xr.$$.fragment,o),T(ra.$$.fragment,o),T(Jo.$$.fragment,o),T(Ko.$$.fragment,o),T(aa.$$.fragment,o),T(ia.$$.fragment,o),T(fa.$$.fragment,o),T(Yo.$$.fragment,o),T(Zo.$$.fragment,o),Lp=!0)},o(o){$(l.$$.fragment,o),$(Fn.$$.fragment,o),$(Cn.$$.fragment,o),$(Ln.$$.fragment,o),$(Ht.$$.fragment,o),$(On.$$.fragment,o),$(In.$$.fragment,o),$(Wn.$$.fragment,o),$(Rn.$$.fragment,o),$(Qn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Zn.$$.fragment,o),$(Yt.$$.fragment,o),$(es.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(ps.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(gs.$$.fragment,o),$(ro.$$.fragment,o),$(ao.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(bs.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(ks.$$.fragment,o),$(Bs.$$.fragment,o),$(ys.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(go.$$.fragment,o),$(Ts.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(uo.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Bo.$$.fragment,o),$(vo.$$.fragment,o),$(Ps.$$.fragment,o),$(Cs.$$.fragment,o),$(Os.$$.fragment,o),$(To.$$.fragment,o),$($o.$$.fragment,o),$(wo.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ws.$$.fragment,o),$(Fo.$$.fragment,o),$(zo.$$.fragment,o),$(qo.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(Ys.$$.fragment,o),$(Eo.$$.fragment,o),$(jo.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(lr.$$.fragment,o),$(Co.$$.fragment,o),$(Lo.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(br.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(kr.$$.fragment,o),$(Br.$$.fragment,o),$(qr.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(Nr.$$.fragment,o),$(Uo.$$.fragment,o),$(Ro.$$.fragment,o),$(Sr.$$.fragment,o),$(Dr.$$.fragment,o),$(Jr.$$.fragment,o),$(Qo.$$.fragment,o),$(Ho.$$.fragment,o),$(Kr.$$.fragment,o),$(Xr.$$.fragment,o),$(ra.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(fa.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),Lp=!1},d(o){t(d),o&&t(_),o&&t(g),w(l),o&&t(Wc),o&&t(Je),w(Fn),o&&t(Uc),o&&t(Gt),o&&t(Rc),o&&t(ya),o&&t(Gc),o&&t(Ta),o&&t(Qc),o&&t($a),o&&t(Hc),o&&t(U),o&&t(Vc),o&&t(Se),o&&t(Jc),o&&t(Ke),w(Cn),o&&t(Kc),o&&t(de),w(Ln),w(Ht),o&&t(Xc),o&&t(Ze),w(On),o&&t(Yc),o&&t(P),w(In),w(Wn),w(Rn),w(Qn),w(Hn),o&&t(Zc),o&&t(tt),w(Vn),o&&t(ep),o&&t(G),w(Jn),w(Xn),w(Zn),w(Yt),w(es),o&&t(tp),o&&t(ot),w(os),o&&t(op),o&&t(nt),w(ns),o&&t(np),o&&t(st),w(rs),o&&t(sp),o&&t(Q),w(as),w(ps),w(oo),w(no),o&&t(rp),o&&t(at),w(hs),o&&t(ap),o&&t(it),w(ms),w(gs),w(ro),w(ao),o&&t(ip),o&&t(dt),w(fs),o&&t(lp),o&&t(qe),w(us),w(bs),w(lo),w(co),o&&t(dp),o&&t(ht),w(ks),o&&t(cp),o&&t(Me),w(Bs),w(ys),w(ho),w(mo),w(go),o&&t(pp),o&&t(ft),w(Ts),o&&t(hp),o&&t(ce),w($s),w(Fs),w(uo),w(_o),w(bo),o&&t(mp),o&&t(_t),w(zs),o&&t(gp),o&&t(pe),w(qs),w(js),w(Bo),w(vo),o&&t(fp),o&&t(kt),w(Ps),o&&t(up),o&&t(he),w(Cs),w(Os),w(To),w($o),w(wo),o&&t(_p),o&&t(vt),w(Is),o&&t(bp),o&&t(me),w(Ns),w(Ws),w(Fo),w(zo),w(qo),o&&t(kp),o&&t($t),w(Us),o&&t(Bp),o&&t(C),w(Rs),w(Ys),w(Eo),w(jo),o&&t(vp),o&&t(xt),w(Zs),o&&t(yp),o&&t(L),w(er),w(lr),w(Co),w(Lo),o&&t(Tp),o&&t(qt),w(dr),o&&t($p),o&&t(A),w(cr),w(br),w(Oo),w(Io),o&&t(wp),o&&t(Et),w(kr),o&&t(xp),o&&t(O),w(Br),w(qr),w(So),w(Do),o&&t(Fp),o&&t(Pt),w(Mr),o&&t(zp),o&&t(I),w(Er),w(Nr),w(Uo),w(Ro),o&&t(qp),o&&t(Lt),w(Sr),o&&t(Mp),o&&t(N),w(Dr),w(Jr),w(Qo),w(Ho),o&&t(Ep),o&&t(Ot),w(Kr),o&&t(jp),o&&t(S),w(Xr),w(ra),w(Jo),w(Ko),o&&t(Pp),o&&t(Nt),w(aa),o&&t(Cp),o&&t(D),w(ia),w(fa),w(Yo),w(Zo)}}}const Ix={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForCausalLM",title:"FlaxBigBirdForCausalLM"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function Nx(x){return Yw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qx extends Vw{constructor(d){super();Jw(this,d,Nx,Ox,Kw,{})}}export{Qx as default,Ix as metadata};
