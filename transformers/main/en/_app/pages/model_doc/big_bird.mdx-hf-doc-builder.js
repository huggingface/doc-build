import{S as Yw,i as Zw,s as ex,e as n,k as p,w as B,t as a,M as tx,c as s,d as t,m as h,a as r,x as v,h as i,b as c,G as e,g as k,y,q as T,o as $,B as w,v as ox,L as E}from"../../chunks/vendor-hf-doc-builder.js";import{T as G}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as M}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdConfig, BigBirdModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function sx(x){let d,_,g,u,b;return u=new j({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"sequence pair mask has the following format:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function rx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function ax(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function ix(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function lx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function dx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function cx(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function px(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function hx(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;maximum&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function mx(x){let d,_;return d=new j({props:{code:`labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.08</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function gx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function ux(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function fx(x){let d,_;return d=new j({props:{code:`num_labels = len(model.config.id2label)
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
<span class="hljs-number">1.13</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function _x(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function bx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function kx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Bx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function vx(x){let d,_;return d=new j({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function yx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Tx(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
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
<span class="hljs-string">&#x27;80 \xB0C (176 \xB0F) or more&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function $x(x){let d,_;return d=new j({props:{code:`target_start_index, target_end_index = torch.tensor([130]), torch.tensor([132])
outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">130</span>]), torch.tensor([<span class="hljs-number">132</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.63</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||(T(d.$$.fragment,g),_=!0)},o(g){$(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function wx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function xx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Fx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function zx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function qx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Mx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Ex(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function jx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Px(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Cx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Lx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Ax(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Ix(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Ox(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Nx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Sx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||(T(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Dx(x){let d,_,g,u,b,l,m,F,Ih,Uc,Je,Rt,zi,Fn,Oh,qi,Nh,Rc,Gt,Sh,zn,Dh,Wh,Gc,ya,Uh,Qc,Ta,Mi,Rh,Hc,$a,Gh,Vc,W,qn,Qh,Mn,Hh,Vh,Jh,le,Kh,Ei,Xh,Yh,ji,Zh,em,Pi,tm,om,Ci,nm,sm,rm,Li,am,im,Ai,lm,dm,En,cm,Ii,pm,hm,mm,wa,gm,Oi,um,fm,Ni,_m,Jc,Se,bm,jn,km,Bm,Pn,vm,ym,Kc,Ke,Qt,Si,Cn,Tm,Di,$m,Xc,de,Ln,wm,Xe,xm,xa,Fm,zm,An,qm,Mm,Em,Ye,jm,Fa,Pm,Cm,za,Lm,Am,Im,Ht,Yc,Ze,Vt,Wi,In,Om,Ui,Nm,Zc,P,On,Sm,Nn,Dm,Sn,Wm,Um,Rm,Dn,Gm,qa,Qm,Hm,Vm,De,Wn,Jm,Ri,Km,Xm,Un,Ma,Ym,Gi,Zm,eg,Ea,tg,Qi,og,ng,Jt,Rn,sg,Gn,rg,Hi,ag,ig,lg,Kt,Qn,dg,et,cg,Vi,pg,hg,Ji,mg,gg,ug,ja,Hn,ep,tt,Xt,Ki,Vn,fg,Xi,_g,tp,Q,Jn,bg,ze,kg,Yi,Bg,vg,Kn,yg,Tg,Pa,$g,wg,xg,We,Xn,Fg,Zi,zg,qg,Yn,Ca,Mg,el,Eg,jg,La,Pg,tl,Cg,Lg,ue,Zn,Ag,ol,Ig,Og,Yt,Ng,nl,Sg,Dg,Zt,es,Wg,ts,Ug,sl,Rg,Gg,op,ot,eo,rl,os,Qg,al,Hg,np,nt,ns,Vg,ss,Jg,Aa,Kg,Xg,sp,st,to,il,rs,Yg,ll,Zg,rp,H,as,eu,is,tu,ls,ou,nu,su,ds,ru,cs,au,iu,lu,U,du,dl,cu,pu,cl,hu,mu,pl,gu,uu,hl,fu,_u,ml,bu,ku,gl,Bu,vu,yu,fe,ps,Tu,rt,$u,Ia,wu,xu,ul,Fu,zu,qu,oo,Mu,no,ap,at,so,fl,hs,Eu,_l,ju,ip,it,ms,Pu,_e,gs,Cu,lt,Lu,Oa,Au,Iu,bl,Ou,Nu,Su,ro,Du,ao,lp,dt,io,kl,us,Wu,Bl,Uu,dp,qe,fs,Ru,ct,Gu,vl,Qu,Hu,_s,Vu,Ju,Ku,be,bs,Xu,pt,Yu,Na,Zu,ef,yl,tf,of,nf,lo,sf,co,cp,ht,po,Tl,ks,rf,$l,af,pp,Me,Bs,lf,mt,df,wl,cf,pf,vs,hf,mf,gf,V,ys,uf,gt,ff,Sa,_f,bf,xl,kf,Bf,vf,ho,yf,mo,Tf,go,hp,ut,uo,Fl,Ts,$f,zl,wf,mp,ce,$s,xf,ql,Ff,zf,ws,qf,xs,Mf,Ef,jf,J,Fs,Pf,ft,Cf,Da,Lf,Af,Ml,If,Of,Nf,fo,Sf,_o,Df,bo,gp,_t,ko,El,zs,Wf,jl,Uf,up,pe,qs,Rf,Pl,Gf,Qf,Ms,Hf,Es,Vf,Jf,Kf,ke,js,Xf,bt,Yf,Wa,Zf,e_,Cl,t_,o_,n_,Bo,s_,vo,fp,kt,yo,Ll,Ps,r_,Al,a_,_p,he,Cs,i_,Il,l_,d_,Ls,c_,As,p_,h_,m_,K,Is,g_,Bt,u_,Ua,f_,__,Ol,b_,k_,B_,To,v_,$o,y_,wo,bp,vt,xo,Nl,Os,T_,Sl,$_,kp,me,Ns,w_,yt,x_,Dl,F_,z_,Wl,q_,M_,E_,Ss,j_,Ds,P_,C_,L_,X,Ws,A_,Tt,I_,Ra,O_,N_,Ul,S_,D_,W_,Fo,U_,zo,R_,qo,Bp,$t,Mo,Rl,Us,G_,Gl,Q_,vp,C,Rs,H_,Ql,V_,J_,Gs,K_,Ga,X_,Y_,Z_,Qs,eb,Hs,tb,ob,nb,Hl,sb,rb,Ee,Vl,Vs,ab,ib,Jl,Js,lb,db,Kl,Ks,cb,pb,Xl,Xs,hb,mb,Be,Ys,gb,wt,ub,Yl,fb,_b,Zl,bb,kb,Bb,Eo,vb,jo,yp,xt,Po,ed,Zs,yb,td,Tb,Tp,L,er,$b,Ft,wb,od,xb,Fb,nd,zb,qb,Mb,tr,Eb,Qa,jb,Pb,Cb,or,Lb,nr,Ab,Ib,Ob,sd,Nb,Sb,je,rd,sr,Db,Wb,ad,rr,Ub,Rb,id,ar,Gb,Qb,ld,ir,Hb,Vb,ve,lr,Jb,zt,Kb,dd,Xb,Yb,cd,Zb,ek,tk,Co,ok,Lo,$p,qt,Ao,pd,dr,nk,hd,sk,wp,A,cr,rk,md,ak,ik,pr,lk,Ha,dk,ck,pk,hr,hk,mr,mk,gk,uk,gd,fk,_k,Pe,ud,gr,bk,kk,fd,ur,Bk,vk,_d,fr,yk,Tk,bd,_r,$k,wk,ye,br,xk,Mt,Fk,kd,zk,qk,Bd,Mk,Ek,jk,Io,Pk,Oo,xp,Et,No,vd,kr,Ck,yd,Lk,Fp,I,Br,Ak,vr,Ik,Td,Ok,Nk,Sk,yr,Dk,Va,Wk,Uk,Rk,Tr,Gk,$r,Qk,Hk,Vk,$d,Jk,Kk,Ce,wd,wr,Xk,Yk,xd,xr,Zk,eB,Fd,Fr,tB,oB,zd,zr,nB,sB,Te,qr,rB,jt,aB,qd,iB,lB,Md,dB,cB,pB,So,hB,Do,zp,Pt,Wo,Ed,Mr,mB,jd,gB,qp,O,Er,uB,Pd,fB,_B,jr,bB,Ja,kB,BB,vB,Pr,yB,Cr,TB,$B,wB,Cd,xB,FB,Le,Ld,Lr,zB,qB,Ad,Ar,MB,EB,Id,Ir,jB,PB,Od,Or,CB,LB,$e,Nr,AB,Ct,IB,Nd,OB,NB,Sd,SB,DB,WB,Uo,UB,Ro,Mp,Lt,Go,Dd,Sr,RB,Wd,GB,Ep,N,Dr,QB,Ud,HB,VB,Wr,JB,Ka,KB,XB,YB,Ur,ZB,Rr,ev,tv,ov,Rd,nv,sv,Ae,Gd,Gr,rv,av,Qd,Qr,iv,lv,Hd,Hr,dv,cv,Vd,Vr,pv,hv,we,Jr,mv,At,gv,Jd,uv,fv,Kd,_v,bv,kv,Qo,Bv,Ho,jp,It,Vo,Xd,Kr,vv,Yd,yv,Pp,S,Xr,Tv,Zd,$v,wv,Yr,xv,Xa,Fv,zv,qv,Zr,Mv,ea,Ev,jv,Pv,ec,Cv,Lv,Ie,tc,ta,Av,Iv,oc,oa,Ov,Nv,nc,na,Sv,Dv,sc,sa,Wv,Uv,xe,ra,Rv,Ot,Gv,rc,Qv,Hv,ac,Vv,Jv,Kv,Jo,Xv,Ko,Cp,Nt,Xo,ic,aa,Yv,lc,Zv,Lp,D,ia,ey,St,ty,dc,oy,ny,cc,sy,ry,ay,la,iy,Ya,ly,dy,cy,da,py,ca,hy,my,gy,pc,uy,fy,Oe,hc,pa,_y,by,mc,ha,ky,By,gc,ma,vy,yy,uc,ga,Ty,$y,Fe,ua,wy,Dt,xy,Za,Fy,zy,fc,qy,My,Ey,Yo,jy,Zo,Ap;return l=new q({}),Fn=new q({}),Cn=new q({}),Ln=new z({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/configuration_big_bird.py#L34"}}),Ht=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[nx]},$$scope:{ctx:x}}}),In=new q({}),On=new z({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L52"}}),Wn=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L263",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L288",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L315",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hn=new z({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/tokenization_big_bird.py#L246"}}),Vn=new q({}),Jn=new z({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),Yt=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[sx]},$$scope:{ctx:x}}}),es=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),oo=new G({props:{$$slots:{default:[rx]},$$scope:{ctx:x}}}),no=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[ax]},$$scope:{ctx:x}}}),hs=new q({}),ms=new z({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2264"}}),gs=new z({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2282",returnDescription:`
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
`}}),ro=new G({props:{$$slots:{default:[ix]},$$scope:{ctx:x}}}),ao=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[lx]},$$scope:{ctx:x}}}),us=new q({}),fs=new z({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2514"}}),bs=new z({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2540",returnDescription:`
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
`}}),lo=new G({props:{$$slots:{default:[dx]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[cx]},$$scope:{ctx:x}}}),ks=new q({}),Bs=new z({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2370"}}),ys=new z({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2394",returnDescription:`
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
`}}),ho=new G({props:{$$slots:{default:[px]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[hx]},$$scope:{ctx:x}}}),go=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[mx]},$$scope:{ctx:x}}}),Ts=new q({}),$s=new z({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2682"}}),Fs=new z({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2693",returnDescription:`
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
`}}),fo=new G({props:{$$slots:{default:[gx]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[ux]},$$scope:{ctx:x}}}),bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[fx]},$$scope:{ctx:x}}}),zs=new q({}),qs=new z({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2810"}}),js=new z({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2821",returnDescription:`
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
`}}),Bo=new G({props:{$$slots:{default:[_x]},$$scope:{ctx:x}}}),vo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[bx]},$$scope:{ctx:x}}}),Ps=new q({}),Cs=new z({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2904"}}),Is=new z({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L2919",returnDescription:`
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
`}}),To=new G({props:{$$slots:{default:[kx]},$$scope:{ctx:x}}}),$o=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[Bx]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[vx]},$$scope:{ctx:x}}}),Os=new q({}),Ns=new z({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L3009"}}),Ws=new z({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_big_bird.py#L3023",returnDescription:`
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
`}}),Fo=new G({props:{$$slots:{default:[yx]},$$scope:{ctx:x}}}),zo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[Tx]},$$scope:{ctx:x}}}),qo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[$x]},$$scope:{ctx:x}}}),Us=new q({}),Rs=new z({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Eo=new G({props:{$$slots:{default:[wx]},$$scope:{ctx:x}}}),jo=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),Zs=new q({}),er=new z({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Co=new G({props:{$$slots:{default:[Fx]},$$scope:{ctx:x}}}),Lo=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[zx]},$$scope:{ctx:x}}}),dr=new q({}),cr=new z({props:{name:"class transformers.FlaxBigBirdForCausalLM",anchor:"transformers.FlaxBigBirdForCausalLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Io=new G({props:{$$slots:{default:[qx]},$$scope:{ctx:x}}}),Oo=new M({props:{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.example",$$slots:{default:[Mx]},$$scope:{ctx:x}}}),kr=new q({}),Br=new z({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),So=new G({props:{$$slots:{default:[Ex]},$$scope:{ctx:x}}}),Do=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[jx]},$$scope:{ctx:x}}}),Mr=new q({}),Er=new z({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Uo=new G({props:{$$slots:{default:[Px]},$$scope:{ctx:x}}}),Ro=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[Cx]},$$scope:{ctx:x}}}),Sr=new q({}),Dr=new z({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qo=new G({props:{$$slots:{default:[Lx]},$$scope:{ctx:x}}}),Ho=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[Ax]},$$scope:{ctx:x}}}),Kr=new q({}),Xr=new z({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Jo=new G({props:{$$slots:{default:[Ix]},$$scope:{ctx:x}}}),Ko=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[Ox]},$$scope:{ctx:x}}}),aa=new q({}),ia=new z({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2381"}}),ua=new z({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Yo=new G({props:{$$slots:{default:[Nx]},$$scope:{ctx:x}}}),Zo=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[Sx]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),u=n("a"),b=n("span"),B(l.$$.fragment),m=p(),F=n("span"),Ih=a("BigBird"),Uc=p(),Je=n("h2"),Rt=n("a"),zi=n("span"),B(Fn.$$.fragment),Oh=p(),qi=n("span"),Nh=a("Overview"),Rc=p(),Gt=n("p"),Sh=a("The BigBird model was proposed in "),zn=n("a"),Dh=a("Big Bird: Transformers for Longer Sequences"),Wh=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Gc=p(),ya=n("p"),Uh=a("The abstract from the paper is the following:"),Qc=p(),Ta=n("p"),Mi=n("em"),Rh=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Hc=p(),$a=n("p"),Gh=a("Tips:"),Vc=p(),W=n("ul"),qn=n("li"),Qh=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),Mn=n("a"),Hh=a("this blog post"),Vh=a("."),Jh=p(),le=n("li"),Kh=a("BigBird comes with 2 implementations: "),Ei=n("strong"),Xh=a("original_full"),Yh=a(" & "),ji=n("strong"),Zh=a("block_sparse"),em=a(`. For the sequence length < 1024, using
`),Pi=n("strong"),tm=a("original_full"),om=a(" is advised as there is no benefit in using "),Ci=n("strong"),nm=a("block_sparse"),sm=a(" attention."),rm=p(),Li=n("li"),am=a("The code currently uses window size of 3 blocks and 2 global blocks."),im=p(),Ai=n("li"),lm=a("Sequence length must be divisible by block size."),dm=p(),En=n("li"),cm=a("Current implementation supports only "),Ii=n("strong"),pm=a("ITC"),hm=a("."),mm=p(),wa=n("li"),gm=a("Current implementation doesn\u2019t support "),Oi=n("strong"),um=a("num_random_blocks = 0"),fm=p(),Ni=n("li"),_m=a(`BigBird is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Jc=p(),Se=n("p"),bm=a("This model was contributed by "),jn=n("a"),km=a("vasudevgupta"),Bm=a(`. The original code can be found
`),Pn=n("a"),vm=a("here"),ym=a("."),Kc=p(),Ke=n("h2"),Qt=n("a"),Si=n("span"),B(Cn.$$.fragment),Tm=p(),Di=n("span"),$m=a("BigBirdConfig"),Xc=p(),de=n("div"),B(Ln.$$.fragment),wm=p(),Xe=n("p"),xm=a("This is the configuration class to store the configuration of a "),xa=n("a"),Fm=a("BigBirdModel"),zm=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),An=n("a"),qm=a("google/bigbird-roberta-base"),Mm=a(" architecture."),Em=p(),Ye=n("p"),jm=a("Configuration objects inherit from "),Fa=n("a"),Pm=a("PretrainedConfig"),Cm=a(` and can be used to control the model outputs. Read the
documentation from `),za=n("a"),Lm=a("PretrainedConfig"),Am=a(" for more information."),Im=p(),B(Ht.$$.fragment),Yc=p(),Ze=n("h2"),Vt=n("a"),Wi=n("span"),B(In.$$.fragment),Om=p(),Ui=n("span"),Nm=a("BigBirdTokenizer"),Zc=p(),P=n("div"),B(On.$$.fragment),Sm=p(),Nn=n("p"),Dm=a("Construct a BigBird tokenizer. Based on "),Sn=n("a"),Wm=a("SentencePiece"),Um=a("."),Rm=p(),Dn=n("p"),Gm=a("This tokenizer inherits from "),qa=n("a"),Qm=a("PreTrainedTokenizer"),Hm=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vm=p(),De=n("div"),B(Wn.$$.fragment),Jm=p(),Ri=n("p"),Km=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Xm=p(),Un=n("ul"),Ma=n("li"),Ym=a("single sequence: "),Gi=n("code"),Zm=a("[CLS] X [SEP]"),eg=p(),Ea=n("li"),tg=a("pair of sequences: "),Qi=n("code"),og=a("[CLS] A [SEP] B [SEP]"),ng=p(),Jt=n("div"),B(Rn.$$.fragment),sg=p(),Gn=n("p"),rg=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Hi=n("code"),ag=a("prepare_for_model"),ig=a(" method."),lg=p(),Kt=n("div"),B(Qn.$$.fragment),dg=p(),et=n("p"),cg=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),Vi=n("code"),pg=a("token_ids_1"),hg=a(" is "),Ji=n("code"),mg=a("None"),gg=a(", this method only returns the first portion of the mask (0s)."),ug=p(),ja=n("div"),B(Hn.$$.fragment),ep=p(),tt=n("h2"),Xt=n("a"),Ki=n("span"),B(Vn.$$.fragment),fg=p(),Xi=n("span"),_g=a("BigBirdTokenizerFast"),tp=p(),Q=n("div"),B(Jn.$$.fragment),bg=p(),ze=n("p"),kg=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Yi=n("em"),Bg=a("tokenizers"),vg=a(` library). Based on
`),Kn=n("a"),yg=a("Unigram"),Tg=a(`. This
tokenizer inherits from `),Pa=n("a"),$g=a("PreTrainedTokenizerFast"),wg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),xg=p(),We=n("div"),B(Xn.$$.fragment),Fg=p(),Zi=n("p"),zg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),qg=p(),Yn=n("ul"),Ca=n("li"),Mg=a("single sequence: "),el=n("code"),Eg=a("[CLS] X [SEP]"),jg=p(),La=n("li"),Pg=a("pair of sequences: "),tl=n("code"),Cg=a("[CLS] A [SEP] B [SEP]"),Lg=p(),ue=n("div"),B(Zn.$$.fragment),Ag=p(),ol=n("p"),Ig=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),Og=p(),B(Yt.$$.fragment),Ng=p(),nl=n("p"),Sg=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Dg=p(),Zt=n("div"),B(es.$$.fragment),Wg=p(),ts=n("p"),Ug=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),sl=n("code"),Rg=a("prepare_for_model"),Gg=a(" method."),op=p(),ot=n("h2"),eo=n("a"),rl=n("span"),B(os.$$.fragment),Qg=p(),al=n("span"),Hg=a("BigBird specific outputs"),np=p(),nt=n("div"),B(ns.$$.fragment),Vg=p(),ss=n("p"),Jg=a("Output type of "),Aa=n("a"),Kg=a("BigBirdForPreTraining"),Xg=a("."),sp=p(),st=n("h2"),to=n("a"),il=n("span"),B(rs.$$.fragment),Yg=p(),ll=n("span"),Zg=a("BigBirdModel"),rp=p(),H=n("div"),B(as.$$.fragment),eu=p(),is=n("p"),tu=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ls=n("a"),ou=a("torch.nn.Module"),nu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),su=p(),ds=n("p"),ru=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),cs=n("a"),au=a(`Attention is
all you need`),iu=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),lu=p(),U=n("p"),du=a("To behave as an decoder the model needs to be initialized with the "),dl=n("code"),cu=a("is_decoder"),pu=a(` argument of the configuration set
to `),cl=n("code"),hu=a("True"),mu=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),pl=n("code"),gu=a("is_decoder"),uu=a(` argument and
`),hl=n("code"),fu=a("add_cross_attention"),_u=a(" set to "),ml=n("code"),bu=a("True"),ku=a("; an "),gl=n("code"),Bu=a("encoder_hidden_states"),vu=a(" is then expected as an input to the forward pass."),yu=p(),fe=n("div"),B(ps.$$.fragment),Tu=p(),rt=n("p"),$u=a("The "),Ia=n("a"),wu=a("BigBirdModel"),xu=a(" forward method, overrides the "),ul=n("code"),Fu=a("__call__"),zu=a(" special method."),qu=p(),B(oo.$$.fragment),Mu=p(),B(no.$$.fragment),ap=p(),at=n("h2"),so=n("a"),fl=n("span"),B(hs.$$.fragment),Eu=p(),_l=n("span"),ju=a("BigBirdForPreTraining"),ip=p(),it=n("div"),B(ms.$$.fragment),Pu=p(),_e=n("div"),B(gs.$$.fragment),Cu=p(),lt=n("p"),Lu=a("The "),Oa=n("a"),Au=a("BigBirdForPreTraining"),Iu=a(" forward method, overrides the "),bl=n("code"),Ou=a("__call__"),Nu=a(" special method."),Su=p(),B(ro.$$.fragment),Du=p(),B(ao.$$.fragment),lp=p(),dt=n("h2"),io=n("a"),kl=n("span"),B(us.$$.fragment),Wu=p(),Bl=n("span"),Uu=a("BigBirdForCausalLM"),dp=p(),qe=n("div"),B(fs.$$.fragment),Ru=p(),ct=n("p"),Gu=a("BigBird Model with a "),vl=n("code"),Qu=a("language modeling"),Hu=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),_s=n("a"),Vu=a("torch.nn.Module"),Ju=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ku=p(),be=n("div"),B(bs.$$.fragment),Xu=p(),pt=n("p"),Yu=a("The "),Na=n("a"),Zu=a("BigBirdForCausalLM"),ef=a(" forward method, overrides the "),yl=n("code"),tf=a("__call__"),of=a(" special method."),nf=p(),B(lo.$$.fragment),sf=p(),B(co.$$.fragment),cp=p(),ht=n("h2"),po=n("a"),Tl=n("span"),B(ks.$$.fragment),rf=p(),$l=n("span"),af=a("BigBirdForMaskedLM"),pp=p(),Me=n("div"),B(Bs.$$.fragment),lf=p(),mt=n("p"),df=a("BigBird Model with a "),wl=n("code"),cf=a("language modeling"),pf=a(` head on top.
This model is a PyTorch `),vs=n("a"),hf=a("torch.nn.Module"),mf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gf=p(),V=n("div"),B(ys.$$.fragment),uf=p(),gt=n("p"),ff=a("The "),Sa=n("a"),_f=a("BigBirdForMaskedLM"),bf=a(" forward method, overrides the "),xl=n("code"),kf=a("__call__"),Bf=a(" special method."),vf=p(),B(ho.$$.fragment),yf=p(),B(mo.$$.fragment),Tf=p(),B(go.$$.fragment),hp=p(),ut=n("h2"),uo=n("a"),Fl=n("span"),B(Ts.$$.fragment),$f=p(),zl=n("span"),wf=a("BigBirdForSequenceClassification"),mp=p(),ce=n("div"),B($s.$$.fragment),xf=p(),ql=n("p"),Ff=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zf=p(),ws=n("p"),qf=a("This model is a PyTorch "),xs=n("a"),Mf=a("torch.nn.Module"),Ef=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jf=p(),J=n("div"),B(Fs.$$.fragment),Pf=p(),ft=n("p"),Cf=a("The "),Da=n("a"),Lf=a("BigBirdForSequenceClassification"),Af=a(" forward method, overrides the "),Ml=n("code"),If=a("__call__"),Of=a(" special method."),Nf=p(),B(fo.$$.fragment),Sf=p(),B(_o.$$.fragment),Df=p(),B(bo.$$.fragment),gp=p(),_t=n("h2"),ko=n("a"),El=n("span"),B(zs.$$.fragment),Wf=p(),jl=n("span"),Uf=a("BigBirdForMultipleChoice"),up=p(),pe=n("div"),B(qs.$$.fragment),Rf=p(),Pl=n("p"),Gf=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Qf=p(),Ms=n("p"),Hf=a("This model is a PyTorch "),Es=n("a"),Vf=a("torch.nn.Module"),Jf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kf=p(),ke=n("div"),B(js.$$.fragment),Xf=p(),bt=n("p"),Yf=a("The "),Wa=n("a"),Zf=a("BigBirdForMultipleChoice"),e_=a(" forward method, overrides the "),Cl=n("code"),t_=a("__call__"),o_=a(" special method."),n_=p(),B(Bo.$$.fragment),s_=p(),B(vo.$$.fragment),fp=p(),kt=n("h2"),yo=n("a"),Ll=n("span"),B(Ps.$$.fragment),r_=p(),Al=n("span"),a_=a("BigBirdForTokenClassification"),_p=p(),he=n("div"),B(Cs.$$.fragment),i_=p(),Il=n("p"),l_=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),d_=p(),Ls=n("p"),c_=a("This model is a PyTorch "),As=n("a"),p_=a("torch.nn.Module"),h_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),m_=p(),K=n("div"),B(Is.$$.fragment),g_=p(),Bt=n("p"),u_=a("The "),Ua=n("a"),f_=a("BigBirdForTokenClassification"),__=a(" forward method, overrides the "),Ol=n("code"),b_=a("__call__"),k_=a(" special method."),B_=p(),B(To.$$.fragment),v_=p(),B($o.$$.fragment),y_=p(),B(wo.$$.fragment),bp=p(),vt=n("h2"),xo=n("a"),Nl=n("span"),B(Os.$$.fragment),T_=p(),Sl=n("span"),$_=a("BigBirdForQuestionAnswering"),kp=p(),me=n("div"),B(Ns.$$.fragment),w_=p(),yt=n("p"),x_=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dl=n("code"),F_=a("span start logits"),z_=a(" and "),Wl=n("code"),q_=a("span end logits"),M_=a(")."),E_=p(),Ss=n("p"),j_=a("This model is a PyTorch "),Ds=n("a"),P_=a("torch.nn.Module"),C_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),L_=p(),X=n("div"),B(Ws.$$.fragment),A_=p(),Tt=n("p"),I_=a("The "),Ra=n("a"),O_=a("BigBirdForQuestionAnswering"),N_=a(" forward method, overrides the "),Ul=n("code"),S_=a("__call__"),D_=a(" special method."),W_=p(),B(Fo.$$.fragment),U_=p(),B(zo.$$.fragment),R_=p(),B(qo.$$.fragment),Bp=p(),$t=n("h2"),Mo=n("a"),Rl=n("span"),B(Us.$$.fragment),G_=p(),Gl=n("span"),Q_=a("FlaxBigBirdModel"),vp=p(),C=n("div"),B(Rs.$$.fragment),H_=p(),Ql=n("p"),V_=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),J_=p(),Gs=n("p"),K_=a("This model inherits from "),Ga=n("a"),X_=a("FlaxPreTrainedModel"),Y_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Z_=p(),Qs=n("p"),eb=a("This model is also a Flax Linen "),Hs=n("a"),tb=a("flax.linen.Module"),ob=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nb=p(),Hl=n("p"),sb=a("Finally, this model supports inherent JAX features such as:"),rb=p(),Ee=n("ul"),Vl=n("li"),Vs=n("a"),ab=a("Just-In-Time (JIT) compilation"),ib=p(),Jl=n("li"),Js=n("a"),lb=a("Automatic Differentiation"),db=p(),Kl=n("li"),Ks=n("a"),cb=a("Vectorization"),pb=p(),Xl=n("li"),Xs=n("a"),hb=a("Parallelization"),mb=p(),Be=n("div"),B(Ys.$$.fragment),gb=p(),wt=n("p"),ub=a("The "),Yl=n("code"),fb=a("FlaxBigBirdPreTrainedModel"),_b=a(" forward method, overrides the "),Zl=n("code"),bb=a("__call__"),kb=a(" special method."),Bb=p(),B(Eo.$$.fragment),vb=p(),B(jo.$$.fragment),yp=p(),xt=n("h2"),Po=n("a"),ed=n("span"),B(Zs.$$.fragment),yb=p(),td=n("span"),Tb=a("FlaxBigBirdForPreTraining"),Tp=p(),L=n("div"),B(er.$$.fragment),$b=p(),Ft=n("p"),wb=a("BigBird Model with two heads on top as done during the pretraining: a "),od=n("code"),xb=a("masked language modeling"),Fb=a(" head and a "),nd=n("code"),zb=a("next sentence prediction (classification)"),qb=a(" head."),Mb=p(),tr=n("p"),Eb=a("This model inherits from "),Qa=n("a"),jb=a("FlaxPreTrainedModel"),Pb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cb=p(),or=n("p"),Lb=a("This model is also a Flax Linen "),nr=n("a"),Ab=a("flax.linen.Module"),Ib=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ob=p(),sd=n("p"),Nb=a("Finally, this model supports inherent JAX features such as:"),Sb=p(),je=n("ul"),rd=n("li"),sr=n("a"),Db=a("Just-In-Time (JIT) compilation"),Wb=p(),ad=n("li"),rr=n("a"),Ub=a("Automatic Differentiation"),Rb=p(),id=n("li"),ar=n("a"),Gb=a("Vectorization"),Qb=p(),ld=n("li"),ir=n("a"),Hb=a("Parallelization"),Vb=p(),ve=n("div"),B(lr.$$.fragment),Jb=p(),zt=n("p"),Kb=a("The "),dd=n("code"),Xb=a("FlaxBigBirdPreTrainedModel"),Yb=a(" forward method, overrides the "),cd=n("code"),Zb=a("__call__"),ek=a(" special method."),tk=p(),B(Co.$$.fragment),ok=p(),B(Lo.$$.fragment),$p=p(),qt=n("h2"),Ao=n("a"),pd=n("span"),B(dr.$$.fragment),nk=p(),hd=n("span"),sk=a("FlaxBigBirdForCausalLM"),wp=p(),A=n("div"),B(cr.$$.fragment),rk=p(),md=n("p"),ak=a(`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),ik=p(),pr=n("p"),lk=a("This model inherits from "),Ha=n("a"),dk=a("FlaxPreTrainedModel"),ck=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pk=p(),hr=n("p"),hk=a("This model is also a Flax Linen "),mr=n("a"),mk=a("flax.linen.Module"),gk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uk=p(),gd=n("p"),fk=a("Finally, this model supports inherent JAX features such as:"),_k=p(),Pe=n("ul"),ud=n("li"),gr=n("a"),bk=a("Just-In-Time (JIT) compilation"),kk=p(),fd=n("li"),ur=n("a"),Bk=a("Automatic Differentiation"),vk=p(),_d=n("li"),fr=n("a"),yk=a("Vectorization"),Tk=p(),bd=n("li"),_r=n("a"),$k=a("Parallelization"),wk=p(),ye=n("div"),B(br.$$.fragment),xk=p(),Mt=n("p"),Fk=a("The "),kd=n("code"),zk=a("FlaxBigBirdPreTrainedModel"),qk=a(" forward method, overrides the "),Bd=n("code"),Mk=a("__call__"),Ek=a(" special method."),jk=p(),B(Io.$$.fragment),Pk=p(),B(Oo.$$.fragment),xp=p(),Et=n("h2"),No=n("a"),vd=n("span"),B(kr.$$.fragment),Ck=p(),yd=n("span"),Lk=a("FlaxBigBirdForMaskedLM"),Fp=p(),I=n("div"),B(Br.$$.fragment),Ak=p(),vr=n("p"),Ik=a("BigBird Model with a "),Td=n("code"),Ok=a("language modeling"),Nk=a(" head on top."),Sk=p(),yr=n("p"),Dk=a("This model inherits from "),Va=n("a"),Wk=a("FlaxPreTrainedModel"),Uk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rk=p(),Tr=n("p"),Gk=a("This model is also a Flax Linen "),$r=n("a"),Qk=a("flax.linen.Module"),Hk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vk=p(),$d=n("p"),Jk=a("Finally, this model supports inherent JAX features such as:"),Kk=p(),Ce=n("ul"),wd=n("li"),wr=n("a"),Xk=a("Just-In-Time (JIT) compilation"),Yk=p(),xd=n("li"),xr=n("a"),Zk=a("Automatic Differentiation"),eB=p(),Fd=n("li"),Fr=n("a"),tB=a("Vectorization"),oB=p(),zd=n("li"),zr=n("a"),nB=a("Parallelization"),sB=p(),Te=n("div"),B(qr.$$.fragment),rB=p(),jt=n("p"),aB=a("The "),qd=n("code"),iB=a("FlaxBigBirdPreTrainedModel"),lB=a(" forward method, overrides the "),Md=n("code"),dB=a("__call__"),cB=a(" special method."),pB=p(),B(So.$$.fragment),hB=p(),B(Do.$$.fragment),zp=p(),Pt=n("h2"),Wo=n("a"),Ed=n("span"),B(Mr.$$.fragment),mB=p(),jd=n("span"),gB=a("FlaxBigBirdForSequenceClassification"),qp=p(),O=n("div"),B(Er.$$.fragment),uB=p(),Pd=n("p"),fB=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_B=p(),jr=n("p"),bB=a("This model inherits from "),Ja=n("a"),kB=a("FlaxPreTrainedModel"),BB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vB=p(),Pr=n("p"),yB=a("This model is also a Flax Linen "),Cr=n("a"),TB=a("flax.linen.Module"),$B=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wB=p(),Cd=n("p"),xB=a("Finally, this model supports inherent JAX features such as:"),FB=p(),Le=n("ul"),Ld=n("li"),Lr=n("a"),zB=a("Just-In-Time (JIT) compilation"),qB=p(),Ad=n("li"),Ar=n("a"),MB=a("Automatic Differentiation"),EB=p(),Id=n("li"),Ir=n("a"),jB=a("Vectorization"),PB=p(),Od=n("li"),Or=n("a"),CB=a("Parallelization"),LB=p(),$e=n("div"),B(Nr.$$.fragment),AB=p(),Ct=n("p"),IB=a("The "),Nd=n("code"),OB=a("FlaxBigBirdPreTrainedModel"),NB=a(" forward method, overrides the "),Sd=n("code"),SB=a("__call__"),DB=a(" special method."),WB=p(),B(Uo.$$.fragment),UB=p(),B(Ro.$$.fragment),Mp=p(),Lt=n("h2"),Go=n("a"),Dd=n("span"),B(Sr.$$.fragment),RB=p(),Wd=n("span"),GB=a("FlaxBigBirdForMultipleChoice"),Ep=p(),N=n("div"),B(Dr.$$.fragment),QB=p(),Ud=n("p"),HB=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),VB=p(),Wr=n("p"),JB=a("This model inherits from "),Ka=n("a"),KB=a("FlaxPreTrainedModel"),XB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),YB=p(),Ur=n("p"),ZB=a("This model is also a Flax Linen "),Rr=n("a"),ev=a("flax.linen.Module"),tv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ov=p(),Rd=n("p"),nv=a("Finally, this model supports inherent JAX features such as:"),sv=p(),Ae=n("ul"),Gd=n("li"),Gr=n("a"),rv=a("Just-In-Time (JIT) compilation"),av=p(),Qd=n("li"),Qr=n("a"),iv=a("Automatic Differentiation"),lv=p(),Hd=n("li"),Hr=n("a"),dv=a("Vectorization"),cv=p(),Vd=n("li"),Vr=n("a"),pv=a("Parallelization"),hv=p(),we=n("div"),B(Jr.$$.fragment),mv=p(),At=n("p"),gv=a("The "),Jd=n("code"),uv=a("FlaxBigBirdPreTrainedModel"),fv=a(" forward method, overrides the "),Kd=n("code"),_v=a("__call__"),bv=a(" special method."),kv=p(),B(Qo.$$.fragment),Bv=p(),B(Ho.$$.fragment),jp=p(),It=n("h2"),Vo=n("a"),Xd=n("span"),B(Kr.$$.fragment),vv=p(),Yd=n("span"),yv=a("FlaxBigBirdForTokenClassification"),Pp=p(),S=n("div"),B(Xr.$$.fragment),Tv=p(),Zd=n("p"),$v=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),wv=p(),Yr=n("p"),xv=a("This model inherits from "),Xa=n("a"),Fv=a("FlaxPreTrainedModel"),zv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qv=p(),Zr=n("p"),Mv=a("This model is also a Flax Linen "),ea=n("a"),Ev=a("flax.linen.Module"),jv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pv=p(),ec=n("p"),Cv=a("Finally, this model supports inherent JAX features such as:"),Lv=p(),Ie=n("ul"),tc=n("li"),ta=n("a"),Av=a("Just-In-Time (JIT) compilation"),Iv=p(),oc=n("li"),oa=n("a"),Ov=a("Automatic Differentiation"),Nv=p(),nc=n("li"),na=n("a"),Sv=a("Vectorization"),Dv=p(),sc=n("li"),sa=n("a"),Wv=a("Parallelization"),Uv=p(),xe=n("div"),B(ra.$$.fragment),Rv=p(),Ot=n("p"),Gv=a("The "),rc=n("code"),Qv=a("FlaxBigBirdPreTrainedModel"),Hv=a(" forward method, overrides the "),ac=n("code"),Vv=a("__call__"),Jv=a(" special method."),Kv=p(),B(Jo.$$.fragment),Xv=p(),B(Ko.$$.fragment),Cp=p(),Nt=n("h2"),Xo=n("a"),ic=n("span"),B(aa.$$.fragment),Yv=p(),lc=n("span"),Zv=a("FlaxBigBirdForQuestionAnswering"),Lp=p(),D=n("div"),B(ia.$$.fragment),ey=p(),St=n("p"),ty=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dc=n("code"),oy=a("span start logits"),ny=a(" and "),cc=n("code"),sy=a("span end logits"),ry=a(")."),ay=p(),la=n("p"),iy=a("This model inherits from "),Ya=n("a"),ly=a("FlaxPreTrainedModel"),dy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cy=p(),da=n("p"),py=a("This model is also a Flax Linen "),ca=n("a"),hy=a("flax.linen.Module"),my=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gy=p(),pc=n("p"),uy=a("Finally, this model supports inherent JAX features such as:"),fy=p(),Oe=n("ul"),hc=n("li"),pa=n("a"),_y=a("Just-In-Time (JIT) compilation"),by=p(),mc=n("li"),ha=n("a"),ky=a("Automatic Differentiation"),By=p(),gc=n("li"),ma=n("a"),vy=a("Vectorization"),yy=p(),uc=n("li"),ga=n("a"),Ty=a("Parallelization"),$y=p(),Fe=n("div"),B(ua.$$.fragment),wy=p(),Dt=n("p"),xy=a("The "),Za=n("a"),Fy=a("FlaxBigBirdForQuestionAnswering"),zy=a(" forward method, overrides the "),fc=n("code"),qy=a("__call__"),My=a(" special method."),Ey=p(),B(Yo.$$.fragment),jy=p(),B(Zo.$$.fragment),this.h()},l(o){const f=tx('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var fa=r(g);u=s(fa,"A",{id:!0,class:!0,href:!0});var _c=r(u);b=s(_c,"SPAN",{});var bc=r(b);v(l.$$.fragment,bc),bc.forEach(t),_c.forEach(t),m=h(fa),F=s(fa,"SPAN",{});var kc=r(F);Ih=i(kc,"BigBird"),kc.forEach(t),fa.forEach(t),Uc=h(o),Je=s(o,"H2",{class:!0});var _a=r(Je);Rt=s(_a,"A",{id:!0,class:!0,href:!0});var Bc=r(Rt);zi=s(Bc,"SPAN",{});var vc=r(zi);v(Fn.$$.fragment,vc),vc.forEach(t),Bc.forEach(t),Oh=h(_a),qi=s(_a,"SPAN",{});var yc=r(qi);Nh=i(yc,"Overview"),yc.forEach(t),_a.forEach(t),Rc=h(o),Gt=s(o,"P",{});var ba=r(Gt);Sh=i(ba,"The BigBird model was proposed in "),zn=s(ba,"A",{href:!0,rel:!0});var Tc=r(zn);Dh=i(Tc,"Big Bird: Transformers for Longer Sequences"),Tc.forEach(t),Wh=i(ba,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ba.forEach(t),Gc=h(o),ya=s(o,"P",{});var $c=r(ya);Uh=i($c,"The abstract from the paper is the following:"),$c.forEach(t),Qc=h(o),Ta=s(o,"P",{});var wc=r(Ta);Mi=s(wc,"EM",{});var xc=r(Mi);Rh=i(xc,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),xc.forEach(t),wc.forEach(t),Hc=h(o),$a=s(o,"P",{});var Fc=r($a);Gh=i(Fc,"Tips:"),Fc.forEach(t),Vc=h(o),W=s(o,"UL",{});var R=r(W);qn=s(R,"LI",{});var ka=r(qn);Qh=i(ka,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Mn=s(ka,"A",{href:!0,rel:!0});var zc=r(Mn);Hh=i(zc,"this blog post"),zc.forEach(t),Vh=i(ka,"."),ka.forEach(t),Jh=h(R),le=s(R,"LI",{});var ge=r(le);Kh=i(ge,"BigBird comes with 2 implementations: "),Ei=s(ge,"STRONG",{});var qc=r(Ei);Xh=i(qc,"original_full"),qc.forEach(t),Yh=i(ge," & "),ji=s(ge,"STRONG",{});var Mc=r(ji);Zh=i(Mc,"block_sparse"),Mc.forEach(t),em=i(ge,`. For the sequence length < 1024, using
`),Pi=s(ge,"STRONG",{});var Ec=r(Pi);tm=i(Ec,"original_full"),Ec.forEach(t),om=i(ge," is advised as there is no benefit in using "),Ci=s(ge,"STRONG",{});var jc=r(Ci);nm=i(jc,"block_sparse"),jc.forEach(t),sm=i(ge," attention."),ge.forEach(t),rm=h(R),Li=s(R,"LI",{});var Pc=r(Li);am=i(Pc,"The code currently uses window size of 3 blocks and 2 global blocks."),Pc.forEach(t),im=h(R),Ai=s(R,"LI",{});var Cc=r(Ai);lm=i(Cc,"Sequence length must be divisible by block size."),Cc.forEach(t),dm=h(R),En=s(R,"LI",{});var Ba=r(En);cm=i(Ba,"Current implementation supports only "),Ii=s(Ba,"STRONG",{});var Lc=r(Ii);pm=i(Lc,"ITC"),Lc.forEach(t),hm=i(Ba,"."),Ba.forEach(t),mm=h(R),wa=s(R,"LI",{});var ei=r(wa);gm=i(ei,"Current implementation doesn\u2019t support "),Oi=s(ei,"STRONG",{});var Ac=r(Oi);um=i(Ac,"num_random_blocks = 0"),Ac.forEach(t),ei.forEach(t),fm=h(R),Ni=s(R,"LI",{});var Ic=r(Ni);_m=i(Ic,`BigBird is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ic.forEach(t),R.forEach(t),Jc=h(o),Se=s(o,"P",{});var Wt=r(Se);bm=i(Wt,"This model was contributed by "),jn=s(Wt,"A",{href:!0,rel:!0});var Oc=r(jn);km=i(Oc,"vasudevgupta"),Oc.forEach(t),Bm=i(Wt,`. The original code can be found
`),Pn=s(Wt,"A",{href:!0,rel:!0});var Nc=r(Pn);vm=i(Nc,"here"),Nc.forEach(t),ym=i(Wt,"."),Wt.forEach(t),Kc=h(o),Ke=s(o,"H2",{class:!0});var va=r(Ke);Qt=s(va,"A",{id:!0,class:!0,href:!0});var Sc=r(Qt);Si=s(Sc,"SPAN",{});var Dc=r(Si);v(Cn.$$.fragment,Dc),Dc.forEach(t),Sc.forEach(t),Tm=h(va),Di=s(va,"SPAN",{});var Wc=r(Di);$m=i(Wc,"BigBirdConfig"),Wc.forEach(t),va.forEach(t),Xc=h(o),de=s(o,"DIV",{class:!0});var Ne=r(de);v(Ln.$$.fragment,Ne),wm=h(Ne),Xe=s(Ne,"P",{});var Ut=r(Xe);xm=i(Ut,"This is the configuration class to store the configuration of a "),xa=s(Ut,"A",{href:!0});var Iy=r(xa);Fm=i(Iy,"BigBirdModel"),Iy.forEach(t),zm=i(Ut,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),An=s(Ut,"A",{href:!0,rel:!0});var Oy=r(An);qm=i(Oy,"google/bigbird-roberta-base"),Oy.forEach(t),Mm=i(Ut," architecture."),Ut.forEach(t),Em=h(Ne),Ye=s(Ne,"P",{});var ti=r(Ye);jm=i(ti,"Configuration objects inherit from "),Fa=s(ti,"A",{href:!0});var Ny=r(Fa);Pm=i(Ny,"PretrainedConfig"),Ny.forEach(t),Cm=i(ti,` and can be used to control the model outputs. Read the
documentation from `),za=s(ti,"A",{href:!0});var Sy=r(za);Lm=i(Sy,"PretrainedConfig"),Sy.forEach(t),Am=i(ti," for more information."),ti.forEach(t),Im=h(Ne),v(Ht.$$.fragment,Ne),Ne.forEach(t),Yc=h(o),Ze=s(o,"H2",{class:!0});var Ip=r(Ze);Vt=s(Ip,"A",{id:!0,class:!0,href:!0});var Dy=r(Vt);Wi=s(Dy,"SPAN",{});var Wy=r(Wi);v(In.$$.fragment,Wy),Wy.forEach(t),Dy.forEach(t),Om=h(Ip),Ui=s(Ip,"SPAN",{});var Uy=r(Ui);Nm=i(Uy,"BigBirdTokenizer"),Uy.forEach(t),Ip.forEach(t),Zc=h(o),P=s(o,"DIV",{class:!0});var Y=r(P);v(On.$$.fragment,Y),Sm=h(Y),Nn=s(Y,"P",{});var Op=r(Nn);Dm=i(Op,"Construct a BigBird tokenizer. Based on "),Sn=s(Op,"A",{href:!0,rel:!0});var Ry=r(Sn);Wm=i(Ry,"SentencePiece"),Ry.forEach(t),Um=i(Op,"."),Op.forEach(t),Rm=h(Y),Dn=s(Y,"P",{});var Np=r(Dn);Gm=i(Np,"This tokenizer inherits from "),qa=s(Np,"A",{href:!0});var Gy=r(qa);Qm=i(Gy,"PreTrainedTokenizer"),Gy.forEach(t),Hm=i(Np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np.forEach(t),Vm=h(Y),De=s(Y,"DIV",{class:!0});var oi=r(De);v(Wn.$$.fragment,oi),Jm=h(oi),Ri=s(oi,"P",{});var Qy=r(Ri);Km=i(Qy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Qy.forEach(t),Xm=h(oi),Un=s(oi,"UL",{});var Sp=r(Un);Ma=s(Sp,"LI",{});var Py=r(Ma);Ym=i(Py,"single sequence: "),Gi=s(Py,"CODE",{});var Hy=r(Gi);Zm=i(Hy,"[CLS] X [SEP]"),Hy.forEach(t),Py.forEach(t),eg=h(Sp),Ea=s(Sp,"LI",{});var Cy=r(Ea);tg=i(Cy,"pair of sequences: "),Qi=s(Cy,"CODE",{});var Vy=r(Qi);og=i(Vy,"[CLS] A [SEP] B [SEP]"),Vy.forEach(t),Cy.forEach(t),Sp.forEach(t),oi.forEach(t),ng=h(Y),Jt=s(Y,"DIV",{class:!0});var Dp=r(Jt);v(Rn.$$.fragment,Dp),sg=h(Dp),Gn=s(Dp,"P",{});var Wp=r(Gn);rg=i(Wp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Hi=s(Wp,"CODE",{});var Jy=r(Hi);ag=i(Jy,"prepare_for_model"),Jy.forEach(t),ig=i(Wp," method."),Wp.forEach(t),Dp.forEach(t),lg=h(Y),Kt=s(Y,"DIV",{class:!0});var Up=r(Kt);v(Qn.$$.fragment,Up),dg=h(Up),et=s(Up,"P",{});var ni=r(et);cg=i(ni,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),Vi=s(ni,"CODE",{});var Ky=r(Vi);pg=i(Ky,"token_ids_1"),Ky.forEach(t),hg=i(ni," is "),Ji=s(ni,"CODE",{});var Xy=r(Ji);mg=i(Xy,"None"),Xy.forEach(t),gg=i(ni,", this method only returns the first portion of the mask (0s)."),ni.forEach(t),Up.forEach(t),ug=h(Y),ja=s(Y,"DIV",{class:!0});var Yy=r(ja);v(Hn.$$.fragment,Yy),Yy.forEach(t),Y.forEach(t),ep=h(o),tt=s(o,"H2",{class:!0});var Rp=r(tt);Xt=s(Rp,"A",{id:!0,class:!0,href:!0});var Zy=r(Xt);Ki=s(Zy,"SPAN",{});var eT=r(Ki);v(Vn.$$.fragment,eT),eT.forEach(t),Zy.forEach(t),fg=h(Rp),Xi=s(Rp,"SPAN",{});var tT=r(Xi);_g=i(tT,"BigBirdTokenizerFast"),tT.forEach(t),Rp.forEach(t),tp=h(o),Q=s(o,"DIV",{class:!0});var Ue=r(Q);v(Jn.$$.fragment,Ue),bg=h(Ue),ze=s(Ue,"P",{});var en=r(ze);kg=i(en,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Yi=s(en,"EM",{});var oT=r(Yi);Bg=i(oT,"tokenizers"),oT.forEach(t),vg=i(en,` library). Based on
`),Kn=s(en,"A",{href:!0,rel:!0});var nT=r(Kn);yg=i(nT,"Unigram"),nT.forEach(t),Tg=i(en,`. This
tokenizer inherits from `),Pa=s(en,"A",{href:!0});var sT=r(Pa);$g=i(sT,"PreTrainedTokenizerFast"),sT.forEach(t),wg=i(en,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),en.forEach(t),xg=h(Ue),We=s(Ue,"DIV",{class:!0});var si=r(We);v(Xn.$$.fragment,si),Fg=h(si),Zi=s(si,"P",{});var rT=r(Zi);zg=i(rT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),rT.forEach(t),qg=h(si),Yn=s(si,"UL",{});var Gp=r(Yn);Ca=s(Gp,"LI",{});var Ly=r(Ca);Mg=i(Ly,"single sequence: "),el=s(Ly,"CODE",{});var aT=r(el);Eg=i(aT,"[CLS] X [SEP]"),aT.forEach(t),Ly.forEach(t),jg=h(Gp),La=s(Gp,"LI",{});var Ay=r(La);Pg=i(Ay,"pair of sequences: "),tl=s(Ay,"CODE",{});var iT=r(tl);Cg=i(iT,"[CLS] A [SEP] B [SEP]"),iT.forEach(t),Ay.forEach(t),Gp.forEach(t),si.forEach(t),Lg=h(Ue),ue=s(Ue,"DIV",{class:!0});var tn=r(ue);v(Zn.$$.fragment,tn),Ag=h(tn),ol=s(tn,"P",{});var lT=r(ol);Ig=i(lT,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),lT.forEach(t),Og=h(tn),v(Yt.$$.fragment,tn),Ng=h(tn),nl=s(tn,"P",{});var dT=r(nl);Sg=i(dT,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),dT.forEach(t),tn.forEach(t),Dg=h(Ue),Zt=s(Ue,"DIV",{class:!0});var Qp=r(Zt);v(es.$$.fragment,Qp),Wg=h(Qp),ts=s(Qp,"P",{});var Hp=r(ts);Ug=i(Hp,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),sl=s(Hp,"CODE",{});var cT=r(sl);Rg=i(cT,"prepare_for_model"),cT.forEach(t),Gg=i(Hp," method."),Hp.forEach(t),Qp.forEach(t),Ue.forEach(t),op=h(o),ot=s(o,"H2",{class:!0});var Vp=r(ot);eo=s(Vp,"A",{id:!0,class:!0,href:!0});var pT=r(eo);rl=s(pT,"SPAN",{});var hT=r(rl);v(os.$$.fragment,hT),hT.forEach(t),pT.forEach(t),Qg=h(Vp),al=s(Vp,"SPAN",{});var mT=r(al);Hg=i(mT,"BigBird specific outputs"),mT.forEach(t),Vp.forEach(t),np=h(o),nt=s(o,"DIV",{class:!0});var Jp=r(nt);v(ns.$$.fragment,Jp),Vg=h(Jp),ss=s(Jp,"P",{});var Kp=r(ss);Jg=i(Kp,"Output type of "),Aa=s(Kp,"A",{href:!0});var gT=r(Aa);Kg=i(gT,"BigBirdForPreTraining"),gT.forEach(t),Xg=i(Kp,"."),Kp.forEach(t),Jp.forEach(t),sp=h(o),st=s(o,"H2",{class:!0});var Xp=r(st);to=s(Xp,"A",{id:!0,class:!0,href:!0});var uT=r(to);il=s(uT,"SPAN",{});var fT=r(il);v(rs.$$.fragment,fT),fT.forEach(t),uT.forEach(t),Yg=h(Xp),ll=s(Xp,"SPAN",{});var _T=r(ll);Zg=i(_T,"BigBirdModel"),_T.forEach(t),Xp.forEach(t),rp=h(o),H=s(o,"DIV",{class:!0});var Re=r(H);v(as.$$.fragment,Re),eu=h(Re),is=s(Re,"P",{});var Yp=r(is);tu=i(Yp,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ls=s(Yp,"A",{href:!0,rel:!0});var bT=r(ls);ou=i(bT,"torch.nn.Module"),bT.forEach(t),nu=i(Yp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yp.forEach(t),su=h(Re),ds=s(Re,"P",{});var Zp=r(ds);ru=i(Zp,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),cs=s(Zp,"A",{href:!0,rel:!0});var kT=r(cs);au=i(kT,`Attention is
all you need`),kT.forEach(t),iu=i(Zp,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zp.forEach(t),lu=h(Re),U=s(Re,"P",{});var Z=r(U);du=i(Z,"To behave as an decoder the model needs to be initialized with the "),dl=s(Z,"CODE",{});var BT=r(dl);cu=i(BT,"is_decoder"),BT.forEach(t),pu=i(Z,` argument of the configuration set
to `),cl=s(Z,"CODE",{});var vT=r(cl);hu=i(vT,"True"),vT.forEach(t),mu=i(Z,". To be used in a Seq2Seq model, the model needs to initialized with both "),pl=s(Z,"CODE",{});var yT=r(pl);gu=i(yT,"is_decoder"),yT.forEach(t),uu=i(Z,` argument and
`),hl=s(Z,"CODE",{});var TT=r(hl);fu=i(TT,"add_cross_attention"),TT.forEach(t),_u=i(Z," set to "),ml=s(Z,"CODE",{});var $T=r(ml);bu=i($T,"True"),$T.forEach(t),ku=i(Z,"; an "),gl=s(Z,"CODE",{});var wT=r(gl);Bu=i(wT,"encoder_hidden_states"),wT.forEach(t),vu=i(Z," is then expected as an input to the forward pass."),Z.forEach(t),yu=h(Re),fe=s(Re,"DIV",{class:!0});var on=r(fe);v(ps.$$.fragment,on),Tu=h(on),rt=s(on,"P",{});var ri=r(rt);$u=i(ri,"The "),Ia=s(ri,"A",{href:!0});var xT=r(Ia);wu=i(xT,"BigBirdModel"),xT.forEach(t),xu=i(ri," forward method, overrides the "),ul=s(ri,"CODE",{});var FT=r(ul);Fu=i(FT,"__call__"),FT.forEach(t),zu=i(ri," special method."),ri.forEach(t),qu=h(on),v(oo.$$.fragment,on),Mu=h(on),v(no.$$.fragment,on),on.forEach(t),Re.forEach(t),ap=h(o),at=s(o,"H2",{class:!0});var eh=r(at);so=s(eh,"A",{id:!0,class:!0,href:!0});var zT=r(so);fl=s(zT,"SPAN",{});var qT=r(fl);v(hs.$$.fragment,qT),qT.forEach(t),zT.forEach(t),Eu=h(eh),_l=s(eh,"SPAN",{});var MT=r(_l);ju=i(MT,"BigBirdForPreTraining"),MT.forEach(t),eh.forEach(t),ip=h(o),it=s(o,"DIV",{class:!0});var th=r(it);v(ms.$$.fragment,th),Pu=h(th),_e=s(th,"DIV",{class:!0});var nn=r(_e);v(gs.$$.fragment,nn),Cu=h(nn),lt=s(nn,"P",{});var ai=r(lt);Lu=i(ai,"The "),Oa=s(ai,"A",{href:!0});var ET=r(Oa);Au=i(ET,"BigBirdForPreTraining"),ET.forEach(t),Iu=i(ai," forward method, overrides the "),bl=s(ai,"CODE",{});var jT=r(bl);Ou=i(jT,"__call__"),jT.forEach(t),Nu=i(ai," special method."),ai.forEach(t),Su=h(nn),v(ro.$$.fragment,nn),Du=h(nn),v(ao.$$.fragment,nn),nn.forEach(t),th.forEach(t),lp=h(o),dt=s(o,"H2",{class:!0});var oh=r(dt);io=s(oh,"A",{id:!0,class:!0,href:!0});var PT=r(io);kl=s(PT,"SPAN",{});var CT=r(kl);v(us.$$.fragment,CT),CT.forEach(t),PT.forEach(t),Wu=h(oh),Bl=s(oh,"SPAN",{});var LT=r(Bl);Uu=i(LT,"BigBirdForCausalLM"),LT.forEach(t),oh.forEach(t),dp=h(o),qe=s(o,"DIV",{class:!0});var ii=r(qe);v(fs.$$.fragment,ii),Ru=h(ii),ct=s(ii,"P",{});var li=r(ct);Gu=i(li,"BigBird Model with a "),vl=s(li,"CODE",{});var AT=r(vl);Qu=i(AT,"language modeling"),AT.forEach(t),Hu=i(li,` head on top for CLM fine-tuning.
This model is a PyTorch `),_s=s(li,"A",{href:!0,rel:!0});var IT=r(_s);Vu=i(IT,"torch.nn.Module"),IT.forEach(t),Ju=i(li,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),li.forEach(t),Ku=h(ii),be=s(ii,"DIV",{class:!0});var sn=r(be);v(bs.$$.fragment,sn),Xu=h(sn),pt=s(sn,"P",{});var di=r(pt);Yu=i(di,"The "),Na=s(di,"A",{href:!0});var OT=r(Na);Zu=i(OT,"BigBirdForCausalLM"),OT.forEach(t),ef=i(di," forward method, overrides the "),yl=s(di,"CODE",{});var NT=r(yl);tf=i(NT,"__call__"),NT.forEach(t),of=i(di," special method."),di.forEach(t),nf=h(sn),v(lo.$$.fragment,sn),sf=h(sn),v(co.$$.fragment,sn),sn.forEach(t),ii.forEach(t),cp=h(o),ht=s(o,"H2",{class:!0});var nh=r(ht);po=s(nh,"A",{id:!0,class:!0,href:!0});var ST=r(po);Tl=s(ST,"SPAN",{});var DT=r(Tl);v(ks.$$.fragment,DT),DT.forEach(t),ST.forEach(t),rf=h(nh),$l=s(nh,"SPAN",{});var WT=r($l);af=i(WT,"BigBirdForMaskedLM"),WT.forEach(t),nh.forEach(t),pp=h(o),Me=s(o,"DIV",{class:!0});var ci=r(Me);v(Bs.$$.fragment,ci),lf=h(ci),mt=s(ci,"P",{});var pi=r(mt);df=i(pi,"BigBird Model with a "),wl=s(pi,"CODE",{});var UT=r(wl);cf=i(UT,"language modeling"),UT.forEach(t),pf=i(pi,` head on top.
This model is a PyTorch `),vs=s(pi,"A",{href:!0,rel:!0});var RT=r(vs);hf=i(RT,"torch.nn.Module"),RT.forEach(t),mf=i(pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi.forEach(t),gf=h(ci),V=s(ci,"DIV",{class:!0});var Ge=r(V);v(ys.$$.fragment,Ge),uf=h(Ge),gt=s(Ge,"P",{});var hi=r(gt);ff=i(hi,"The "),Sa=s(hi,"A",{href:!0});var GT=r(Sa);_f=i(GT,"BigBirdForMaskedLM"),GT.forEach(t),bf=i(hi," forward method, overrides the "),xl=s(hi,"CODE",{});var QT=r(xl);kf=i(QT,"__call__"),QT.forEach(t),Bf=i(hi," special method."),hi.forEach(t),vf=h(Ge),v(ho.$$.fragment,Ge),yf=h(Ge),v(mo.$$.fragment,Ge),Tf=h(Ge),v(go.$$.fragment,Ge),Ge.forEach(t),ci.forEach(t),hp=h(o),ut=s(o,"H2",{class:!0});var sh=r(ut);uo=s(sh,"A",{id:!0,class:!0,href:!0});var HT=r(uo);Fl=s(HT,"SPAN",{});var VT=r(Fl);v(Ts.$$.fragment,VT),VT.forEach(t),HT.forEach(t),$f=h(sh),zl=s(sh,"SPAN",{});var JT=r(zl);wf=i(JT,"BigBirdForSequenceClassification"),JT.forEach(t),sh.forEach(t),mp=h(o),ce=s(o,"DIV",{class:!0});var rn=r(ce);v($s.$$.fragment,rn),xf=h(rn),ql=s(rn,"P",{});var KT=r(ql);Ff=i(KT,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),KT.forEach(t),zf=h(rn),ws=s(rn,"P",{});var rh=r(ws);qf=i(rh,"This model is a PyTorch "),xs=s(rh,"A",{href:!0,rel:!0});var XT=r(xs);Mf=i(XT,"torch.nn.Module"),XT.forEach(t),Ef=i(rh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rh.forEach(t),jf=h(rn),J=s(rn,"DIV",{class:!0});var Qe=r(J);v(Fs.$$.fragment,Qe),Pf=h(Qe),ft=s(Qe,"P",{});var mi=r(ft);Cf=i(mi,"The "),Da=s(mi,"A",{href:!0});var YT=r(Da);Lf=i(YT,"BigBirdForSequenceClassification"),YT.forEach(t),Af=i(mi," forward method, overrides the "),Ml=s(mi,"CODE",{});var ZT=r(Ml);If=i(ZT,"__call__"),ZT.forEach(t),Of=i(mi," special method."),mi.forEach(t),Nf=h(Qe),v(fo.$$.fragment,Qe),Sf=h(Qe),v(_o.$$.fragment,Qe),Df=h(Qe),v(bo.$$.fragment,Qe),Qe.forEach(t),rn.forEach(t),gp=h(o),_t=s(o,"H2",{class:!0});var ah=r(_t);ko=s(ah,"A",{id:!0,class:!0,href:!0});var e1=r(ko);El=s(e1,"SPAN",{});var t1=r(El);v(zs.$$.fragment,t1),t1.forEach(t),e1.forEach(t),Wf=h(ah),jl=s(ah,"SPAN",{});var o1=r(jl);Uf=i(o1,"BigBirdForMultipleChoice"),o1.forEach(t),ah.forEach(t),up=h(o),pe=s(o,"DIV",{class:!0});var an=r(pe);v(qs.$$.fragment,an),Rf=h(an),Pl=s(an,"P",{});var n1=r(Pl);Gf=i(n1,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),n1.forEach(t),Qf=h(an),Ms=s(an,"P",{});var ih=r(Ms);Hf=i(ih,"This model is a PyTorch "),Es=s(ih,"A",{href:!0,rel:!0});var s1=r(Es);Vf=i(s1,"torch.nn.Module"),s1.forEach(t),Jf=i(ih,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ih.forEach(t),Kf=h(an),ke=s(an,"DIV",{class:!0});var ln=r(ke);v(js.$$.fragment,ln),Xf=h(ln),bt=s(ln,"P",{});var gi=r(bt);Yf=i(gi,"The "),Wa=s(gi,"A",{href:!0});var r1=r(Wa);Zf=i(r1,"BigBirdForMultipleChoice"),r1.forEach(t),e_=i(gi," forward method, overrides the "),Cl=s(gi,"CODE",{});var a1=r(Cl);t_=i(a1,"__call__"),a1.forEach(t),o_=i(gi," special method."),gi.forEach(t),n_=h(ln),v(Bo.$$.fragment,ln),s_=h(ln),v(vo.$$.fragment,ln),ln.forEach(t),an.forEach(t),fp=h(o),kt=s(o,"H2",{class:!0});var lh=r(kt);yo=s(lh,"A",{id:!0,class:!0,href:!0});var i1=r(yo);Ll=s(i1,"SPAN",{});var l1=r(Ll);v(Ps.$$.fragment,l1),l1.forEach(t),i1.forEach(t),r_=h(lh),Al=s(lh,"SPAN",{});var d1=r(Al);a_=i(d1,"BigBirdForTokenClassification"),d1.forEach(t),lh.forEach(t),_p=h(o),he=s(o,"DIV",{class:!0});var dn=r(he);v(Cs.$$.fragment,dn),i_=h(dn),Il=s(dn,"P",{});var c1=r(Il);l_=i(c1,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),c1.forEach(t),d_=h(dn),Ls=s(dn,"P",{});var dh=r(Ls);c_=i(dh,"This model is a PyTorch "),As=s(dh,"A",{href:!0,rel:!0});var p1=r(As);p_=i(p1,"torch.nn.Module"),p1.forEach(t),h_=i(dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dh.forEach(t),m_=h(dn),K=s(dn,"DIV",{class:!0});var He=r(K);v(Is.$$.fragment,He),g_=h(He),Bt=s(He,"P",{});var ui=r(Bt);u_=i(ui,"The "),Ua=s(ui,"A",{href:!0});var h1=r(Ua);f_=i(h1,"BigBirdForTokenClassification"),h1.forEach(t),__=i(ui," forward method, overrides the "),Ol=s(ui,"CODE",{});var m1=r(Ol);b_=i(m1,"__call__"),m1.forEach(t),k_=i(ui," special method."),ui.forEach(t),B_=h(He),v(To.$$.fragment,He),v_=h(He),v($o.$$.fragment,He),y_=h(He),v(wo.$$.fragment,He),He.forEach(t),dn.forEach(t),bp=h(o),vt=s(o,"H2",{class:!0});var ch=r(vt);xo=s(ch,"A",{id:!0,class:!0,href:!0});var g1=r(xo);Nl=s(g1,"SPAN",{});var u1=r(Nl);v(Os.$$.fragment,u1),u1.forEach(t),g1.forEach(t),T_=h(ch),Sl=s(ch,"SPAN",{});var f1=r(Sl);$_=i(f1,"BigBirdForQuestionAnswering"),f1.forEach(t),ch.forEach(t),kp=h(o),me=s(o,"DIV",{class:!0});var cn=r(me);v(Ns.$$.fragment,cn),w_=h(cn),yt=s(cn,"P",{});var fi=r(yt);x_=i(fi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dl=s(fi,"CODE",{});var _1=r(Dl);F_=i(_1,"span start logits"),_1.forEach(t),z_=i(fi," and "),Wl=s(fi,"CODE",{});var b1=r(Wl);q_=i(b1,"span end logits"),b1.forEach(t),M_=i(fi,")."),fi.forEach(t),E_=h(cn),Ss=s(cn,"P",{});var ph=r(Ss);j_=i(ph,"This model is a PyTorch "),Ds=s(ph,"A",{href:!0,rel:!0});var k1=r(Ds);P_=i(k1,"torch.nn.Module"),k1.forEach(t),C_=i(ph,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ph.forEach(t),L_=h(cn),X=s(cn,"DIV",{class:!0});var Ve=r(X);v(Ws.$$.fragment,Ve),A_=h(Ve),Tt=s(Ve,"P",{});var _i=r(Tt);I_=i(_i,"The "),Ra=s(_i,"A",{href:!0});var B1=r(Ra);O_=i(B1,"BigBirdForQuestionAnswering"),B1.forEach(t),N_=i(_i," forward method, overrides the "),Ul=s(_i,"CODE",{});var v1=r(Ul);S_=i(v1,"__call__"),v1.forEach(t),D_=i(_i," special method."),_i.forEach(t),W_=h(Ve),v(Fo.$$.fragment,Ve),U_=h(Ve),v(zo.$$.fragment,Ve),R_=h(Ve),v(qo.$$.fragment,Ve),Ve.forEach(t),cn.forEach(t),Bp=h(o),$t=s(o,"H2",{class:!0});var hh=r($t);Mo=s(hh,"A",{id:!0,class:!0,href:!0});var y1=r(Mo);Rl=s(y1,"SPAN",{});var T1=r(Rl);v(Us.$$.fragment,T1),T1.forEach(t),y1.forEach(t),G_=h(hh),Gl=s(hh,"SPAN",{});var $1=r(Gl);Q_=i($1,"FlaxBigBirdModel"),$1.forEach(t),hh.forEach(t),vp=h(o),C=s(o,"DIV",{class:!0});var ee=r(C);v(Rs.$$.fragment,ee),H_=h(ee),Ql=s(ee,"P",{});var w1=r(Ql);V_=i(w1,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),w1.forEach(t),J_=h(ee),Gs=s(ee,"P",{});var mh=r(Gs);K_=i(mh,"This model inherits from "),Ga=s(mh,"A",{href:!0});var x1=r(Ga);X_=i(x1,"FlaxPreTrainedModel"),x1.forEach(t),Y_=i(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mh.forEach(t),Z_=h(ee),Qs=s(ee,"P",{});var gh=r(Qs);eb=i(gh,"This model is also a Flax Linen "),Hs=s(gh,"A",{href:!0,rel:!0});var F1=r(Hs);tb=i(F1,"flax.linen.Module"),F1.forEach(t),ob=i(gh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gh.forEach(t),nb=h(ee),Hl=s(ee,"P",{});var z1=r(Hl);sb=i(z1,"Finally, this model supports inherent JAX features such as:"),z1.forEach(t),rb=h(ee),Ee=s(ee,"UL",{});var pn=r(Ee);Vl=s(pn,"LI",{});var q1=r(Vl);Vs=s(q1,"A",{href:!0,rel:!0});var M1=r(Vs);ab=i(M1,"Just-In-Time (JIT) compilation"),M1.forEach(t),q1.forEach(t),ib=h(pn),Jl=s(pn,"LI",{});var E1=r(Jl);Js=s(E1,"A",{href:!0,rel:!0});var j1=r(Js);lb=i(j1,"Automatic Differentiation"),j1.forEach(t),E1.forEach(t),db=h(pn),Kl=s(pn,"LI",{});var P1=r(Kl);Ks=s(P1,"A",{href:!0,rel:!0});var C1=r(Ks);cb=i(C1,"Vectorization"),C1.forEach(t),P1.forEach(t),pb=h(pn),Xl=s(pn,"LI",{});var L1=r(Xl);Xs=s(L1,"A",{href:!0,rel:!0});var A1=r(Xs);hb=i(A1,"Parallelization"),A1.forEach(t),L1.forEach(t),pn.forEach(t),mb=h(ee),Be=s(ee,"DIV",{class:!0});var hn=r(Be);v(Ys.$$.fragment,hn),gb=h(hn),wt=s(hn,"P",{});var bi=r(wt);ub=i(bi,"The "),Yl=s(bi,"CODE",{});var I1=r(Yl);fb=i(I1,"FlaxBigBirdPreTrainedModel"),I1.forEach(t),_b=i(bi," forward method, overrides the "),Zl=s(bi,"CODE",{});var O1=r(Zl);bb=i(O1,"__call__"),O1.forEach(t),kb=i(bi," special method."),bi.forEach(t),Bb=h(hn),v(Eo.$$.fragment,hn),vb=h(hn),v(jo.$$.fragment,hn),hn.forEach(t),ee.forEach(t),yp=h(o),xt=s(o,"H2",{class:!0});var uh=r(xt);Po=s(uh,"A",{id:!0,class:!0,href:!0});var N1=r(Po);ed=s(N1,"SPAN",{});var S1=r(ed);v(Zs.$$.fragment,S1),S1.forEach(t),N1.forEach(t),yb=h(uh),td=s(uh,"SPAN",{});var D1=r(td);Tb=i(D1,"FlaxBigBirdForPreTraining"),D1.forEach(t),uh.forEach(t),Tp=h(o),L=s(o,"DIV",{class:!0});var te=r(L);v(er.$$.fragment,te),$b=h(te),Ft=s(te,"P",{});var ki=r(Ft);wb=i(ki,"BigBird Model with two heads on top as done during the pretraining: a "),od=s(ki,"CODE",{});var W1=r(od);xb=i(W1,"masked language modeling"),W1.forEach(t),Fb=i(ki," head and a "),nd=s(ki,"CODE",{});var U1=r(nd);zb=i(U1,"next sentence prediction (classification)"),U1.forEach(t),qb=i(ki," head."),ki.forEach(t),Mb=h(te),tr=s(te,"P",{});var fh=r(tr);Eb=i(fh,"This model inherits from "),Qa=s(fh,"A",{href:!0});var R1=r(Qa);jb=i(R1,"FlaxPreTrainedModel"),R1.forEach(t),Pb=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fh.forEach(t),Cb=h(te),or=s(te,"P",{});var _h=r(or);Lb=i(_h,"This model is also a Flax Linen "),nr=s(_h,"A",{href:!0,rel:!0});var G1=r(nr);Ab=i(G1,"flax.linen.Module"),G1.forEach(t),Ib=i(_h,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_h.forEach(t),Ob=h(te),sd=s(te,"P",{});var Q1=r(sd);Nb=i(Q1,"Finally, this model supports inherent JAX features such as:"),Q1.forEach(t),Sb=h(te),je=s(te,"UL",{});var mn=r(je);rd=s(mn,"LI",{});var H1=r(rd);sr=s(H1,"A",{href:!0,rel:!0});var V1=r(sr);Db=i(V1,"Just-In-Time (JIT) compilation"),V1.forEach(t),H1.forEach(t),Wb=h(mn),ad=s(mn,"LI",{});var J1=r(ad);rr=s(J1,"A",{href:!0,rel:!0});var K1=r(rr);Ub=i(K1,"Automatic Differentiation"),K1.forEach(t),J1.forEach(t),Rb=h(mn),id=s(mn,"LI",{});var X1=r(id);ar=s(X1,"A",{href:!0,rel:!0});var Y1=r(ar);Gb=i(Y1,"Vectorization"),Y1.forEach(t),X1.forEach(t),Qb=h(mn),ld=s(mn,"LI",{});var Z1=r(ld);ir=s(Z1,"A",{href:!0,rel:!0});var e$=r(ir);Hb=i(e$,"Parallelization"),e$.forEach(t),Z1.forEach(t),mn.forEach(t),Vb=h(te),ve=s(te,"DIV",{class:!0});var gn=r(ve);v(lr.$$.fragment,gn),Jb=h(gn),zt=s(gn,"P",{});var Bi=r(zt);Kb=i(Bi,"The "),dd=s(Bi,"CODE",{});var t$=r(dd);Xb=i(t$,"FlaxBigBirdPreTrainedModel"),t$.forEach(t),Yb=i(Bi," forward method, overrides the "),cd=s(Bi,"CODE",{});var o$=r(cd);Zb=i(o$,"__call__"),o$.forEach(t),ek=i(Bi," special method."),Bi.forEach(t),tk=h(gn),v(Co.$$.fragment,gn),ok=h(gn),v(Lo.$$.fragment,gn),gn.forEach(t),te.forEach(t),$p=h(o),qt=s(o,"H2",{class:!0});var bh=r(qt);Ao=s(bh,"A",{id:!0,class:!0,href:!0});var n$=r(Ao);pd=s(n$,"SPAN",{});var s$=r(pd);v(dr.$$.fragment,s$),s$.forEach(t),n$.forEach(t),nk=h(bh),hd=s(bh,"SPAN",{});var r$=r(hd);sk=i(r$,"FlaxBigBirdForCausalLM"),r$.forEach(t),bh.forEach(t),wp=h(o),A=s(o,"DIV",{class:!0});var oe=r(A);v(cr.$$.fragment,oe),rk=h(oe),md=s(oe,"P",{});var a$=r(md);ak=i(a$,`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),a$.forEach(t),ik=h(oe),pr=s(oe,"P",{});var kh=r(pr);lk=i(kh,"This model inherits from "),Ha=s(kh,"A",{href:!0});var i$=r(Ha);dk=i(i$,"FlaxPreTrainedModel"),i$.forEach(t),ck=i(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kh.forEach(t),pk=h(oe),hr=s(oe,"P",{});var Bh=r(hr);hk=i(Bh,"This model is also a Flax Linen "),mr=s(Bh,"A",{href:!0,rel:!0});var l$=r(mr);mk=i(l$,"flax.linen.Module"),l$.forEach(t),gk=i(Bh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Bh.forEach(t),uk=h(oe),gd=s(oe,"P",{});var d$=r(gd);fk=i(d$,"Finally, this model supports inherent JAX features such as:"),d$.forEach(t),_k=h(oe),Pe=s(oe,"UL",{});var un=r(Pe);ud=s(un,"LI",{});var c$=r(ud);gr=s(c$,"A",{href:!0,rel:!0});var p$=r(gr);bk=i(p$,"Just-In-Time (JIT) compilation"),p$.forEach(t),c$.forEach(t),kk=h(un),fd=s(un,"LI",{});var h$=r(fd);ur=s(h$,"A",{href:!0,rel:!0});var m$=r(ur);Bk=i(m$,"Automatic Differentiation"),m$.forEach(t),h$.forEach(t),vk=h(un),_d=s(un,"LI",{});var g$=r(_d);fr=s(g$,"A",{href:!0,rel:!0});var u$=r(fr);yk=i(u$,"Vectorization"),u$.forEach(t),g$.forEach(t),Tk=h(un),bd=s(un,"LI",{});var f$=r(bd);_r=s(f$,"A",{href:!0,rel:!0});var _$=r(_r);$k=i(_$,"Parallelization"),_$.forEach(t),f$.forEach(t),un.forEach(t),wk=h(oe),ye=s(oe,"DIV",{class:!0});var fn=r(ye);v(br.$$.fragment,fn),xk=h(fn),Mt=s(fn,"P",{});var vi=r(Mt);Fk=i(vi,"The "),kd=s(vi,"CODE",{});var b$=r(kd);zk=i(b$,"FlaxBigBirdPreTrainedModel"),b$.forEach(t),qk=i(vi," forward method, overrides the "),Bd=s(vi,"CODE",{});var k$=r(Bd);Mk=i(k$,"__call__"),k$.forEach(t),Ek=i(vi," special method."),vi.forEach(t),jk=h(fn),v(Io.$$.fragment,fn),Pk=h(fn),v(Oo.$$.fragment,fn),fn.forEach(t),oe.forEach(t),xp=h(o),Et=s(o,"H2",{class:!0});var vh=r(Et);No=s(vh,"A",{id:!0,class:!0,href:!0});var B$=r(No);vd=s(B$,"SPAN",{});var v$=r(vd);v(kr.$$.fragment,v$),v$.forEach(t),B$.forEach(t),Ck=h(vh),yd=s(vh,"SPAN",{});var y$=r(yd);Lk=i(y$,"FlaxBigBirdForMaskedLM"),y$.forEach(t),vh.forEach(t),Fp=h(o),I=s(o,"DIV",{class:!0});var ne=r(I);v(Br.$$.fragment,ne),Ak=h(ne),vr=s(ne,"P",{});var yh=r(vr);Ik=i(yh,"BigBird Model with a "),Td=s(yh,"CODE",{});var T$=r(Td);Ok=i(T$,"language modeling"),T$.forEach(t),Nk=i(yh," head on top."),yh.forEach(t),Sk=h(ne),yr=s(ne,"P",{});var Th=r(yr);Dk=i(Th,"This model inherits from "),Va=s(Th,"A",{href:!0});var $$=r(Va);Wk=i($$,"FlaxPreTrainedModel"),$$.forEach(t),Uk=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Th.forEach(t),Rk=h(ne),Tr=s(ne,"P",{});var $h=r(Tr);Gk=i($h,"This model is also a Flax Linen "),$r=s($h,"A",{href:!0,rel:!0});var w$=r($r);Qk=i(w$,"flax.linen.Module"),w$.forEach(t),Hk=i($h,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$h.forEach(t),Vk=h(ne),$d=s(ne,"P",{});var x$=r($d);Jk=i(x$,"Finally, this model supports inherent JAX features such as:"),x$.forEach(t),Kk=h(ne),Ce=s(ne,"UL",{});var _n=r(Ce);wd=s(_n,"LI",{});var F$=r(wd);wr=s(F$,"A",{href:!0,rel:!0});var z$=r(wr);Xk=i(z$,"Just-In-Time (JIT) compilation"),z$.forEach(t),F$.forEach(t),Yk=h(_n),xd=s(_n,"LI",{});var q$=r(xd);xr=s(q$,"A",{href:!0,rel:!0});var M$=r(xr);Zk=i(M$,"Automatic Differentiation"),M$.forEach(t),q$.forEach(t),eB=h(_n),Fd=s(_n,"LI",{});var E$=r(Fd);Fr=s(E$,"A",{href:!0,rel:!0});var j$=r(Fr);tB=i(j$,"Vectorization"),j$.forEach(t),E$.forEach(t),oB=h(_n),zd=s(_n,"LI",{});var P$=r(zd);zr=s(P$,"A",{href:!0,rel:!0});var C$=r(zr);nB=i(C$,"Parallelization"),C$.forEach(t),P$.forEach(t),_n.forEach(t),sB=h(ne),Te=s(ne,"DIV",{class:!0});var bn=r(Te);v(qr.$$.fragment,bn),rB=h(bn),jt=s(bn,"P",{});var yi=r(jt);aB=i(yi,"The "),qd=s(yi,"CODE",{});var L$=r(qd);iB=i(L$,"FlaxBigBirdPreTrainedModel"),L$.forEach(t),lB=i(yi," forward method, overrides the "),Md=s(yi,"CODE",{});var A$=r(Md);dB=i(A$,"__call__"),A$.forEach(t),cB=i(yi," special method."),yi.forEach(t),pB=h(bn),v(So.$$.fragment,bn),hB=h(bn),v(Do.$$.fragment,bn),bn.forEach(t),ne.forEach(t),zp=h(o),Pt=s(o,"H2",{class:!0});var wh=r(Pt);Wo=s(wh,"A",{id:!0,class:!0,href:!0});var I$=r(Wo);Ed=s(I$,"SPAN",{});var O$=r(Ed);v(Mr.$$.fragment,O$),O$.forEach(t),I$.forEach(t),mB=h(wh),jd=s(wh,"SPAN",{});var N$=r(jd);gB=i(N$,"FlaxBigBirdForSequenceClassification"),N$.forEach(t),wh.forEach(t),qp=h(o),O=s(o,"DIV",{class:!0});var se=r(O);v(Er.$$.fragment,se),uB=h(se),Pd=s(se,"P",{});var S$=r(Pd);fB=i(S$,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),S$.forEach(t),_B=h(se),jr=s(se,"P",{});var xh=r(jr);bB=i(xh,"This model inherits from "),Ja=s(xh,"A",{href:!0});var D$=r(Ja);kB=i(D$,"FlaxPreTrainedModel"),D$.forEach(t),BB=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xh.forEach(t),vB=h(se),Pr=s(se,"P",{});var Fh=r(Pr);yB=i(Fh,"This model is also a Flax Linen "),Cr=s(Fh,"A",{href:!0,rel:!0});var W$=r(Cr);TB=i(W$,"flax.linen.Module"),W$.forEach(t),$B=i(Fh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fh.forEach(t),wB=h(se),Cd=s(se,"P",{});var U$=r(Cd);xB=i(U$,"Finally, this model supports inherent JAX features such as:"),U$.forEach(t),FB=h(se),Le=s(se,"UL",{});var kn=r(Le);Ld=s(kn,"LI",{});var R$=r(Ld);Lr=s(R$,"A",{href:!0,rel:!0});var G$=r(Lr);zB=i(G$,"Just-In-Time (JIT) compilation"),G$.forEach(t),R$.forEach(t),qB=h(kn),Ad=s(kn,"LI",{});var Q$=r(Ad);Ar=s(Q$,"A",{href:!0,rel:!0});var H$=r(Ar);MB=i(H$,"Automatic Differentiation"),H$.forEach(t),Q$.forEach(t),EB=h(kn),Id=s(kn,"LI",{});var V$=r(Id);Ir=s(V$,"A",{href:!0,rel:!0});var J$=r(Ir);jB=i(J$,"Vectorization"),J$.forEach(t),V$.forEach(t),PB=h(kn),Od=s(kn,"LI",{});var K$=r(Od);Or=s(K$,"A",{href:!0,rel:!0});var X$=r(Or);CB=i(X$,"Parallelization"),X$.forEach(t),K$.forEach(t),kn.forEach(t),LB=h(se),$e=s(se,"DIV",{class:!0});var Bn=r($e);v(Nr.$$.fragment,Bn),AB=h(Bn),Ct=s(Bn,"P",{});var Ti=r(Ct);IB=i(Ti,"The "),Nd=s(Ti,"CODE",{});var Y$=r(Nd);OB=i(Y$,"FlaxBigBirdPreTrainedModel"),Y$.forEach(t),NB=i(Ti," forward method, overrides the "),Sd=s(Ti,"CODE",{});var Z$=r(Sd);SB=i(Z$,"__call__"),Z$.forEach(t),DB=i(Ti," special method."),Ti.forEach(t),WB=h(Bn),v(Uo.$$.fragment,Bn),UB=h(Bn),v(Ro.$$.fragment,Bn),Bn.forEach(t),se.forEach(t),Mp=h(o),Lt=s(o,"H2",{class:!0});var zh=r(Lt);Go=s(zh,"A",{id:!0,class:!0,href:!0});var ew=r(Go);Dd=s(ew,"SPAN",{});var tw=r(Dd);v(Sr.$$.fragment,tw),tw.forEach(t),ew.forEach(t),RB=h(zh),Wd=s(zh,"SPAN",{});var ow=r(Wd);GB=i(ow,"FlaxBigBirdForMultipleChoice"),ow.forEach(t),zh.forEach(t),Ep=h(o),N=s(o,"DIV",{class:!0});var re=r(N);v(Dr.$$.fragment,re),QB=h(re),Ud=s(re,"P",{});var nw=r(Ud);HB=i(nw,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nw.forEach(t),VB=h(re),Wr=s(re,"P",{});var qh=r(Wr);JB=i(qh,"This model inherits from "),Ka=s(qh,"A",{href:!0});var sw=r(Ka);KB=i(sw,"FlaxPreTrainedModel"),sw.forEach(t),XB=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qh.forEach(t),YB=h(re),Ur=s(re,"P",{});var Mh=r(Ur);ZB=i(Mh,"This model is also a Flax Linen "),Rr=s(Mh,"A",{href:!0,rel:!0});var rw=r(Rr);ev=i(rw,"flax.linen.Module"),rw.forEach(t),tv=i(Mh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mh.forEach(t),ov=h(re),Rd=s(re,"P",{});var aw=r(Rd);nv=i(aw,"Finally, this model supports inherent JAX features such as:"),aw.forEach(t),sv=h(re),Ae=s(re,"UL",{});var vn=r(Ae);Gd=s(vn,"LI",{});var iw=r(Gd);Gr=s(iw,"A",{href:!0,rel:!0});var lw=r(Gr);rv=i(lw,"Just-In-Time (JIT) compilation"),lw.forEach(t),iw.forEach(t),av=h(vn),Qd=s(vn,"LI",{});var dw=r(Qd);Qr=s(dw,"A",{href:!0,rel:!0});var cw=r(Qr);iv=i(cw,"Automatic Differentiation"),cw.forEach(t),dw.forEach(t),lv=h(vn),Hd=s(vn,"LI",{});var pw=r(Hd);Hr=s(pw,"A",{href:!0,rel:!0});var hw=r(Hr);dv=i(hw,"Vectorization"),hw.forEach(t),pw.forEach(t),cv=h(vn),Vd=s(vn,"LI",{});var mw=r(Vd);Vr=s(mw,"A",{href:!0,rel:!0});var gw=r(Vr);pv=i(gw,"Parallelization"),gw.forEach(t),mw.forEach(t),vn.forEach(t),hv=h(re),we=s(re,"DIV",{class:!0});var yn=r(we);v(Jr.$$.fragment,yn),mv=h(yn),At=s(yn,"P",{});var $i=r(At);gv=i($i,"The "),Jd=s($i,"CODE",{});var uw=r(Jd);uv=i(uw,"FlaxBigBirdPreTrainedModel"),uw.forEach(t),fv=i($i," forward method, overrides the "),Kd=s($i,"CODE",{});var fw=r(Kd);_v=i(fw,"__call__"),fw.forEach(t),bv=i($i," special method."),$i.forEach(t),kv=h(yn),v(Qo.$$.fragment,yn),Bv=h(yn),v(Ho.$$.fragment,yn),yn.forEach(t),re.forEach(t),jp=h(o),It=s(o,"H2",{class:!0});var Eh=r(It);Vo=s(Eh,"A",{id:!0,class:!0,href:!0});var _w=r(Vo);Xd=s(_w,"SPAN",{});var bw=r(Xd);v(Kr.$$.fragment,bw),bw.forEach(t),_w.forEach(t),vv=h(Eh),Yd=s(Eh,"SPAN",{});var kw=r(Yd);yv=i(kw,"FlaxBigBirdForTokenClassification"),kw.forEach(t),Eh.forEach(t),Pp=h(o),S=s(o,"DIV",{class:!0});var ae=r(S);v(Xr.$$.fragment,ae),Tv=h(ae),Zd=s(ae,"P",{});var Bw=r(Zd);$v=i(Bw,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Bw.forEach(t),wv=h(ae),Yr=s(ae,"P",{});var jh=r(Yr);xv=i(jh,"This model inherits from "),Xa=s(jh,"A",{href:!0});var vw=r(Xa);Fv=i(vw,"FlaxPreTrainedModel"),vw.forEach(t),zv=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jh.forEach(t),qv=h(ae),Zr=s(ae,"P",{});var Ph=r(Zr);Mv=i(Ph,"This model is also a Flax Linen "),ea=s(Ph,"A",{href:!0,rel:!0});var yw=r(ea);Ev=i(yw,"flax.linen.Module"),yw.forEach(t),jv=i(Ph,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ph.forEach(t),Pv=h(ae),ec=s(ae,"P",{});var Tw=r(ec);Cv=i(Tw,"Finally, this model supports inherent JAX features such as:"),Tw.forEach(t),Lv=h(ae),Ie=s(ae,"UL",{});var Tn=r(Ie);tc=s(Tn,"LI",{});var $w=r(tc);ta=s($w,"A",{href:!0,rel:!0});var ww=r(ta);Av=i(ww,"Just-In-Time (JIT) compilation"),ww.forEach(t),$w.forEach(t),Iv=h(Tn),oc=s(Tn,"LI",{});var xw=r(oc);oa=s(xw,"A",{href:!0,rel:!0});var Fw=r(oa);Ov=i(Fw,"Automatic Differentiation"),Fw.forEach(t),xw.forEach(t),Nv=h(Tn),nc=s(Tn,"LI",{});var zw=r(nc);na=s(zw,"A",{href:!0,rel:!0});var qw=r(na);Sv=i(qw,"Vectorization"),qw.forEach(t),zw.forEach(t),Dv=h(Tn),sc=s(Tn,"LI",{});var Mw=r(sc);sa=s(Mw,"A",{href:!0,rel:!0});var Ew=r(sa);Wv=i(Ew,"Parallelization"),Ew.forEach(t),Mw.forEach(t),Tn.forEach(t),Uv=h(ae),xe=s(ae,"DIV",{class:!0});var $n=r(xe);v(ra.$$.fragment,$n),Rv=h($n),Ot=s($n,"P",{});var wi=r(Ot);Gv=i(wi,"The "),rc=s(wi,"CODE",{});var jw=r(rc);Qv=i(jw,"FlaxBigBirdPreTrainedModel"),jw.forEach(t),Hv=i(wi," forward method, overrides the "),ac=s(wi,"CODE",{});var Pw=r(ac);Vv=i(Pw,"__call__"),Pw.forEach(t),Jv=i(wi," special method."),wi.forEach(t),Kv=h($n),v(Jo.$$.fragment,$n),Xv=h($n),v(Ko.$$.fragment,$n),$n.forEach(t),ae.forEach(t),Cp=h(o),Nt=s(o,"H2",{class:!0});var Ch=r(Nt);Xo=s(Ch,"A",{id:!0,class:!0,href:!0});var Cw=r(Xo);ic=s(Cw,"SPAN",{});var Lw=r(ic);v(aa.$$.fragment,Lw),Lw.forEach(t),Cw.forEach(t),Yv=h(Ch),lc=s(Ch,"SPAN",{});var Aw=r(lc);Zv=i(Aw,"FlaxBigBirdForQuestionAnswering"),Aw.forEach(t),Ch.forEach(t),Lp=h(o),D=s(o,"DIV",{class:!0});var ie=r(D);v(ia.$$.fragment,ie),ey=h(ie),St=s(ie,"P",{});var xi=r(St);ty=i(xi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dc=s(xi,"CODE",{});var Iw=r(dc);oy=i(Iw,"span start logits"),Iw.forEach(t),ny=i(xi," and "),cc=s(xi,"CODE",{});var Ow=r(cc);sy=i(Ow,"span end logits"),Ow.forEach(t),ry=i(xi,")."),xi.forEach(t),ay=h(ie),la=s(ie,"P",{});var Lh=r(la);iy=i(Lh,"This model inherits from "),Ya=s(Lh,"A",{href:!0});var Nw=r(Ya);ly=i(Nw,"FlaxPreTrainedModel"),Nw.forEach(t),dy=i(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lh.forEach(t),cy=h(ie),da=s(ie,"P",{});var Ah=r(da);py=i(Ah,"This model is also a Flax Linen "),ca=s(Ah,"A",{href:!0,rel:!0});var Sw=r(ca);hy=i(Sw,"flax.linen.Module"),Sw.forEach(t),my=i(Ah,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ah.forEach(t),gy=h(ie),pc=s(ie,"P",{});var Dw=r(pc);uy=i(Dw,"Finally, this model supports inherent JAX features such as:"),Dw.forEach(t),fy=h(ie),Oe=s(ie,"UL",{});var wn=r(Oe);hc=s(wn,"LI",{});var Ww=r(hc);pa=s(Ww,"A",{href:!0,rel:!0});var Uw=r(pa);_y=i(Uw,"Just-In-Time (JIT) compilation"),Uw.forEach(t),Ww.forEach(t),by=h(wn),mc=s(wn,"LI",{});var Rw=r(mc);ha=s(Rw,"A",{href:!0,rel:!0});var Gw=r(ha);ky=i(Gw,"Automatic Differentiation"),Gw.forEach(t),Rw.forEach(t),By=h(wn),gc=s(wn,"LI",{});var Qw=r(gc);ma=s(Qw,"A",{href:!0,rel:!0});var Hw=r(ma);vy=i(Hw,"Vectorization"),Hw.forEach(t),Qw.forEach(t),yy=h(wn),uc=s(wn,"LI",{});var Vw=r(uc);ga=s(Vw,"A",{href:!0,rel:!0});var Jw=r(ga);Ty=i(Jw,"Parallelization"),Jw.forEach(t),Vw.forEach(t),wn.forEach(t),$y=h(ie),Fe=s(ie,"DIV",{class:!0});var xn=r(Fe);v(ua.$$.fragment,xn),wy=h(xn),Dt=s(xn,"P",{});var Fi=r(Dt);xy=i(Fi,"The "),Za=s(Fi,"A",{href:!0});var Kw=r(Za);Fy=i(Kw,"FlaxBigBirdForQuestionAnswering"),Kw.forEach(t),zy=i(Fi," forward method, overrides the "),fc=s(Fi,"CODE",{});var Xw=r(fc);qy=i(Xw,"__call__"),Xw.forEach(t),My=i(Fi," special method."),Fi.forEach(t),Ey=h(xn),v(Yo.$$.fragment,xn),jy=h(xn),v(Zo.$$.fragment,xn),xn.forEach(t),ie.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Wx)),c(u,"id","bigbird"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#bigbird"),c(g,"class","relative group"),c(Rt,"id","overview"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#overview"),c(Je,"class","relative group"),c(zn,"href","https://arxiv.org/abs/2007.14062"),c(zn,"rel","nofollow"),c(Mn,"href","https://huggingface.co/blog/big-bird"),c(Mn,"rel","nofollow"),c(jn,"href","https://huggingface.co/vasudevgupta"),c(jn,"rel","nofollow"),c(Pn,"href","https://github.com/google-research/bigbird"),c(Pn,"rel","nofollow"),c(Qt,"id","transformers.BigBirdConfig"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.BigBirdConfig"),c(Ke,"class","relative group"),c(xa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(An,"href","https://huggingface.co/google/bigbird-roberta-base"),c(An,"rel","nofollow"),c(Fa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(za,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vt,"id","transformers.BigBirdTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.BigBirdTokenizer"),c(Ze,"class","relative group"),c(Sn,"href","https://github.com/google/sentencepiece"),c(Sn,"rel","nofollow"),c(qa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ja,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.BigBirdTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.BigBirdTokenizerFast"),c(tt,"class","relative group"),c(Kn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(Kn,"rel","nofollow"),c(Pa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ot,"class","relative group"),c(Aa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.BigBirdModel"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.BigBirdModel"),c(st,"class","relative group"),c(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ls,"rel","nofollow"),c(cs,"href","https://arxiv.org/abs/1706.03762"),c(cs,"rel","nofollow"),c(Ia,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdModel"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(so,"id","transformers.BigBirdForPreTraining"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.BigBirdForPreTraining"),c(at,"class","relative group"),c(Oa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdForCausalLM"),c(dt,"class","relative group"),c(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_s,"rel","nofollow"),c(Na,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForMaskedLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForMaskedLM"),c(ht,"class","relative group"),c(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vs,"rel","nofollow"),c(Sa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"id","transformers.BigBirdForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.BigBirdForSequenceClassification"),c(ut,"class","relative group"),c(xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xs,"rel","nofollow"),c(Da,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ko,"id","transformers.BigBirdForMultipleChoice"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.BigBirdForMultipleChoice"),c(_t,"class","relative group"),c(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Es,"rel","nofollow"),c(Wa,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"id","transformers.BigBirdForTokenClassification"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.BigBirdForTokenClassification"),c(kt,"class","relative group"),c(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(As,"rel","nofollow"),c(Ua,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xo,"id","transformers.BigBirdForQuestionAnswering"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.BigBirdForQuestionAnswering"),c(vt,"class","relative group"),c(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ds,"rel","nofollow"),c(Ra,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"id","transformers.FlaxBigBirdModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.FlaxBigBirdModel"),c($t,"class","relative group"),c(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Vs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Xs,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.FlaxBigBirdForPreTraining"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxBigBirdForPreTraining"),c(xt,"class","relative group"),c(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(nr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(nr,"rel","nofollow"),c(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ir,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdForCausalLM"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdForCausalLM"),c(qt,"class","relative group"),c(Ha,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(mr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(mr,"rel","nofollow"),c(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(gr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ur,"rel","nofollow"),c(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(fr,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_r,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(No,"id","transformers.FlaxBigBirdForMaskedLM"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Et,"class","relative group"),c(Va,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($r,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c($r,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(zr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Pt,"class","relative group"),c(Ja,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Cr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Cr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ar,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ir,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Or,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Go,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(Lt,"class","relative group"),c(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Gr,"rel","nofollow"),c(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Qr,"rel","nofollow"),c(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Hr,"rel","nofollow"),c(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Vr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.FlaxBigBirdForTokenClassification"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxBigBirdForTokenClassification"),c(It,"class","relative group"),c(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ea,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ea,"rel","nofollow"),c(ta,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(sa,"rel","nofollow"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Nt,"class","relative group"),c(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ca,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ca,"rel","nofollow"),c(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ha,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ga,"rel","nofollow"),c(Za,"href","/docs/transformers/main/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,d),k(o,_,f),k(o,g,f),e(g,u),e(u,b),y(l,b,null),e(g,m),e(g,F),e(F,Ih),k(o,Uc,f),k(o,Je,f),e(Je,Rt),e(Rt,zi),y(Fn,zi,null),e(Je,Oh),e(Je,qi),e(qi,Nh),k(o,Rc,f),k(o,Gt,f),e(Gt,Sh),e(Gt,zn),e(zn,Dh),e(Gt,Wh),k(o,Gc,f),k(o,ya,f),e(ya,Uh),k(o,Qc,f),k(o,Ta,f),e(Ta,Mi),e(Mi,Rh),k(o,Hc,f),k(o,$a,f),e($a,Gh),k(o,Vc,f),k(o,W,f),e(W,qn),e(qn,Qh),e(qn,Mn),e(Mn,Hh),e(qn,Vh),e(W,Jh),e(W,le),e(le,Kh),e(le,Ei),e(Ei,Xh),e(le,Yh),e(le,ji),e(ji,Zh),e(le,em),e(le,Pi),e(Pi,tm),e(le,om),e(le,Ci),e(Ci,nm),e(le,sm),e(W,rm),e(W,Li),e(Li,am),e(W,im),e(W,Ai),e(Ai,lm),e(W,dm),e(W,En),e(En,cm),e(En,Ii),e(Ii,pm),e(En,hm),e(W,mm),e(W,wa),e(wa,gm),e(wa,Oi),e(Oi,um),e(W,fm),e(W,Ni),e(Ni,_m),k(o,Jc,f),k(o,Se,f),e(Se,bm),e(Se,jn),e(jn,km),e(Se,Bm),e(Se,Pn),e(Pn,vm),e(Se,ym),k(o,Kc,f),k(o,Ke,f),e(Ke,Qt),e(Qt,Si),y(Cn,Si,null),e(Ke,Tm),e(Ke,Di),e(Di,$m),k(o,Xc,f),k(o,de,f),y(Ln,de,null),e(de,wm),e(de,Xe),e(Xe,xm),e(Xe,xa),e(xa,Fm),e(Xe,zm),e(Xe,An),e(An,qm),e(Xe,Mm),e(de,Em),e(de,Ye),e(Ye,jm),e(Ye,Fa),e(Fa,Pm),e(Ye,Cm),e(Ye,za),e(za,Lm),e(Ye,Am),e(de,Im),y(Ht,de,null),k(o,Yc,f),k(o,Ze,f),e(Ze,Vt),e(Vt,Wi),y(In,Wi,null),e(Ze,Om),e(Ze,Ui),e(Ui,Nm),k(o,Zc,f),k(o,P,f),y(On,P,null),e(P,Sm),e(P,Nn),e(Nn,Dm),e(Nn,Sn),e(Sn,Wm),e(Nn,Um),e(P,Rm),e(P,Dn),e(Dn,Gm),e(Dn,qa),e(qa,Qm),e(Dn,Hm),e(P,Vm),e(P,De),y(Wn,De,null),e(De,Jm),e(De,Ri),e(Ri,Km),e(De,Xm),e(De,Un),e(Un,Ma),e(Ma,Ym),e(Ma,Gi),e(Gi,Zm),e(Un,eg),e(Un,Ea),e(Ea,tg),e(Ea,Qi),e(Qi,og),e(P,ng),e(P,Jt),y(Rn,Jt,null),e(Jt,sg),e(Jt,Gn),e(Gn,rg),e(Gn,Hi),e(Hi,ag),e(Gn,ig),e(P,lg),e(P,Kt),y(Qn,Kt,null),e(Kt,dg),e(Kt,et),e(et,cg),e(et,Vi),e(Vi,pg),e(et,hg),e(et,Ji),e(Ji,mg),e(et,gg),e(P,ug),e(P,ja),y(Hn,ja,null),k(o,ep,f),k(o,tt,f),e(tt,Xt),e(Xt,Ki),y(Vn,Ki,null),e(tt,fg),e(tt,Xi),e(Xi,_g),k(o,tp,f),k(o,Q,f),y(Jn,Q,null),e(Q,bg),e(Q,ze),e(ze,kg),e(ze,Yi),e(Yi,Bg),e(ze,vg),e(ze,Kn),e(Kn,yg),e(ze,Tg),e(ze,Pa),e(Pa,$g),e(ze,wg),e(Q,xg),e(Q,We),y(Xn,We,null),e(We,Fg),e(We,Zi),e(Zi,zg),e(We,qg),e(We,Yn),e(Yn,Ca),e(Ca,Mg),e(Ca,el),e(el,Eg),e(Yn,jg),e(Yn,La),e(La,Pg),e(La,tl),e(tl,Cg),e(Q,Lg),e(Q,ue),y(Zn,ue,null),e(ue,Ag),e(ue,ol),e(ol,Ig),e(ue,Og),y(Yt,ue,null),e(ue,Ng),e(ue,nl),e(nl,Sg),e(Q,Dg),e(Q,Zt),y(es,Zt,null),e(Zt,Wg),e(Zt,ts),e(ts,Ug),e(ts,sl),e(sl,Rg),e(ts,Gg),k(o,op,f),k(o,ot,f),e(ot,eo),e(eo,rl),y(os,rl,null),e(ot,Qg),e(ot,al),e(al,Hg),k(o,np,f),k(o,nt,f),y(ns,nt,null),e(nt,Vg),e(nt,ss),e(ss,Jg),e(ss,Aa),e(Aa,Kg),e(ss,Xg),k(o,sp,f),k(o,st,f),e(st,to),e(to,il),y(rs,il,null),e(st,Yg),e(st,ll),e(ll,Zg),k(o,rp,f),k(o,H,f),y(as,H,null),e(H,eu),e(H,is),e(is,tu),e(is,ls),e(ls,ou),e(is,nu),e(H,su),e(H,ds),e(ds,ru),e(ds,cs),e(cs,au),e(ds,iu),e(H,lu),e(H,U),e(U,du),e(U,dl),e(dl,cu),e(U,pu),e(U,cl),e(cl,hu),e(U,mu),e(U,pl),e(pl,gu),e(U,uu),e(U,hl),e(hl,fu),e(U,_u),e(U,ml),e(ml,bu),e(U,ku),e(U,gl),e(gl,Bu),e(U,vu),e(H,yu),e(H,fe),y(ps,fe,null),e(fe,Tu),e(fe,rt),e(rt,$u),e(rt,Ia),e(Ia,wu),e(rt,xu),e(rt,ul),e(ul,Fu),e(rt,zu),e(fe,qu),y(oo,fe,null),e(fe,Mu),y(no,fe,null),k(o,ap,f),k(o,at,f),e(at,so),e(so,fl),y(hs,fl,null),e(at,Eu),e(at,_l),e(_l,ju),k(o,ip,f),k(o,it,f),y(ms,it,null),e(it,Pu),e(it,_e),y(gs,_e,null),e(_e,Cu),e(_e,lt),e(lt,Lu),e(lt,Oa),e(Oa,Au),e(lt,Iu),e(lt,bl),e(bl,Ou),e(lt,Nu),e(_e,Su),y(ro,_e,null),e(_e,Du),y(ao,_e,null),k(o,lp,f),k(o,dt,f),e(dt,io),e(io,kl),y(us,kl,null),e(dt,Wu),e(dt,Bl),e(Bl,Uu),k(o,dp,f),k(o,qe,f),y(fs,qe,null),e(qe,Ru),e(qe,ct),e(ct,Gu),e(ct,vl),e(vl,Qu),e(ct,Hu),e(ct,_s),e(_s,Vu),e(ct,Ju),e(qe,Ku),e(qe,be),y(bs,be,null),e(be,Xu),e(be,pt),e(pt,Yu),e(pt,Na),e(Na,Zu),e(pt,ef),e(pt,yl),e(yl,tf),e(pt,of),e(be,nf),y(lo,be,null),e(be,sf),y(co,be,null),k(o,cp,f),k(o,ht,f),e(ht,po),e(po,Tl),y(ks,Tl,null),e(ht,rf),e(ht,$l),e($l,af),k(o,pp,f),k(o,Me,f),y(Bs,Me,null),e(Me,lf),e(Me,mt),e(mt,df),e(mt,wl),e(wl,cf),e(mt,pf),e(mt,vs),e(vs,hf),e(mt,mf),e(Me,gf),e(Me,V),y(ys,V,null),e(V,uf),e(V,gt),e(gt,ff),e(gt,Sa),e(Sa,_f),e(gt,bf),e(gt,xl),e(xl,kf),e(gt,Bf),e(V,vf),y(ho,V,null),e(V,yf),y(mo,V,null),e(V,Tf),y(go,V,null),k(o,hp,f),k(o,ut,f),e(ut,uo),e(uo,Fl),y(Ts,Fl,null),e(ut,$f),e(ut,zl),e(zl,wf),k(o,mp,f),k(o,ce,f),y($s,ce,null),e(ce,xf),e(ce,ql),e(ql,Ff),e(ce,zf),e(ce,ws),e(ws,qf),e(ws,xs),e(xs,Mf),e(ws,Ef),e(ce,jf),e(ce,J),y(Fs,J,null),e(J,Pf),e(J,ft),e(ft,Cf),e(ft,Da),e(Da,Lf),e(ft,Af),e(ft,Ml),e(Ml,If),e(ft,Of),e(J,Nf),y(fo,J,null),e(J,Sf),y(_o,J,null),e(J,Df),y(bo,J,null),k(o,gp,f),k(o,_t,f),e(_t,ko),e(ko,El),y(zs,El,null),e(_t,Wf),e(_t,jl),e(jl,Uf),k(o,up,f),k(o,pe,f),y(qs,pe,null),e(pe,Rf),e(pe,Pl),e(Pl,Gf),e(pe,Qf),e(pe,Ms),e(Ms,Hf),e(Ms,Es),e(Es,Vf),e(Ms,Jf),e(pe,Kf),e(pe,ke),y(js,ke,null),e(ke,Xf),e(ke,bt),e(bt,Yf),e(bt,Wa),e(Wa,Zf),e(bt,e_),e(bt,Cl),e(Cl,t_),e(bt,o_),e(ke,n_),y(Bo,ke,null),e(ke,s_),y(vo,ke,null),k(o,fp,f),k(o,kt,f),e(kt,yo),e(yo,Ll),y(Ps,Ll,null),e(kt,r_),e(kt,Al),e(Al,a_),k(o,_p,f),k(o,he,f),y(Cs,he,null),e(he,i_),e(he,Il),e(Il,l_),e(he,d_),e(he,Ls),e(Ls,c_),e(Ls,As),e(As,p_),e(Ls,h_),e(he,m_),e(he,K),y(Is,K,null),e(K,g_),e(K,Bt),e(Bt,u_),e(Bt,Ua),e(Ua,f_),e(Bt,__),e(Bt,Ol),e(Ol,b_),e(Bt,k_),e(K,B_),y(To,K,null),e(K,v_),y($o,K,null),e(K,y_),y(wo,K,null),k(o,bp,f),k(o,vt,f),e(vt,xo),e(xo,Nl),y(Os,Nl,null),e(vt,T_),e(vt,Sl),e(Sl,$_),k(o,kp,f),k(o,me,f),y(Ns,me,null),e(me,w_),e(me,yt),e(yt,x_),e(yt,Dl),e(Dl,F_),e(yt,z_),e(yt,Wl),e(Wl,q_),e(yt,M_),e(me,E_),e(me,Ss),e(Ss,j_),e(Ss,Ds),e(Ds,P_),e(Ss,C_),e(me,L_),e(me,X),y(Ws,X,null),e(X,A_),e(X,Tt),e(Tt,I_),e(Tt,Ra),e(Ra,O_),e(Tt,N_),e(Tt,Ul),e(Ul,S_),e(Tt,D_),e(X,W_),y(Fo,X,null),e(X,U_),y(zo,X,null),e(X,R_),y(qo,X,null),k(o,Bp,f),k(o,$t,f),e($t,Mo),e(Mo,Rl),y(Us,Rl,null),e($t,G_),e($t,Gl),e(Gl,Q_),k(o,vp,f),k(o,C,f),y(Rs,C,null),e(C,H_),e(C,Ql),e(Ql,V_),e(C,J_),e(C,Gs),e(Gs,K_),e(Gs,Ga),e(Ga,X_),e(Gs,Y_),e(C,Z_),e(C,Qs),e(Qs,eb),e(Qs,Hs),e(Hs,tb),e(Qs,ob),e(C,nb),e(C,Hl),e(Hl,sb),e(C,rb),e(C,Ee),e(Ee,Vl),e(Vl,Vs),e(Vs,ab),e(Ee,ib),e(Ee,Jl),e(Jl,Js),e(Js,lb),e(Ee,db),e(Ee,Kl),e(Kl,Ks),e(Ks,cb),e(Ee,pb),e(Ee,Xl),e(Xl,Xs),e(Xs,hb),e(C,mb),e(C,Be),y(Ys,Be,null),e(Be,gb),e(Be,wt),e(wt,ub),e(wt,Yl),e(Yl,fb),e(wt,_b),e(wt,Zl),e(Zl,bb),e(wt,kb),e(Be,Bb),y(Eo,Be,null),e(Be,vb),y(jo,Be,null),k(o,yp,f),k(o,xt,f),e(xt,Po),e(Po,ed),y(Zs,ed,null),e(xt,yb),e(xt,td),e(td,Tb),k(o,Tp,f),k(o,L,f),y(er,L,null),e(L,$b),e(L,Ft),e(Ft,wb),e(Ft,od),e(od,xb),e(Ft,Fb),e(Ft,nd),e(nd,zb),e(Ft,qb),e(L,Mb),e(L,tr),e(tr,Eb),e(tr,Qa),e(Qa,jb),e(tr,Pb),e(L,Cb),e(L,or),e(or,Lb),e(or,nr),e(nr,Ab),e(or,Ib),e(L,Ob),e(L,sd),e(sd,Nb),e(L,Sb),e(L,je),e(je,rd),e(rd,sr),e(sr,Db),e(je,Wb),e(je,ad),e(ad,rr),e(rr,Ub),e(je,Rb),e(je,id),e(id,ar),e(ar,Gb),e(je,Qb),e(je,ld),e(ld,ir),e(ir,Hb),e(L,Vb),e(L,ve),y(lr,ve,null),e(ve,Jb),e(ve,zt),e(zt,Kb),e(zt,dd),e(dd,Xb),e(zt,Yb),e(zt,cd),e(cd,Zb),e(zt,ek),e(ve,tk),y(Co,ve,null),e(ve,ok),y(Lo,ve,null),k(o,$p,f),k(o,qt,f),e(qt,Ao),e(Ao,pd),y(dr,pd,null),e(qt,nk),e(qt,hd),e(hd,sk),k(o,wp,f),k(o,A,f),y(cr,A,null),e(A,rk),e(A,md),e(md,ak),e(A,ik),e(A,pr),e(pr,lk),e(pr,Ha),e(Ha,dk),e(pr,ck),e(A,pk),e(A,hr),e(hr,hk),e(hr,mr),e(mr,mk),e(hr,gk),e(A,uk),e(A,gd),e(gd,fk),e(A,_k),e(A,Pe),e(Pe,ud),e(ud,gr),e(gr,bk),e(Pe,kk),e(Pe,fd),e(fd,ur),e(ur,Bk),e(Pe,vk),e(Pe,_d),e(_d,fr),e(fr,yk),e(Pe,Tk),e(Pe,bd),e(bd,_r),e(_r,$k),e(A,wk),e(A,ye),y(br,ye,null),e(ye,xk),e(ye,Mt),e(Mt,Fk),e(Mt,kd),e(kd,zk),e(Mt,qk),e(Mt,Bd),e(Bd,Mk),e(Mt,Ek),e(ye,jk),y(Io,ye,null),e(ye,Pk),y(Oo,ye,null),k(o,xp,f),k(o,Et,f),e(Et,No),e(No,vd),y(kr,vd,null),e(Et,Ck),e(Et,yd),e(yd,Lk),k(o,Fp,f),k(o,I,f),y(Br,I,null),e(I,Ak),e(I,vr),e(vr,Ik),e(vr,Td),e(Td,Ok),e(vr,Nk),e(I,Sk),e(I,yr),e(yr,Dk),e(yr,Va),e(Va,Wk),e(yr,Uk),e(I,Rk),e(I,Tr),e(Tr,Gk),e(Tr,$r),e($r,Qk),e(Tr,Hk),e(I,Vk),e(I,$d),e($d,Jk),e(I,Kk),e(I,Ce),e(Ce,wd),e(wd,wr),e(wr,Xk),e(Ce,Yk),e(Ce,xd),e(xd,xr),e(xr,Zk),e(Ce,eB),e(Ce,Fd),e(Fd,Fr),e(Fr,tB),e(Ce,oB),e(Ce,zd),e(zd,zr),e(zr,nB),e(I,sB),e(I,Te),y(qr,Te,null),e(Te,rB),e(Te,jt),e(jt,aB),e(jt,qd),e(qd,iB),e(jt,lB),e(jt,Md),e(Md,dB),e(jt,cB),e(Te,pB),y(So,Te,null),e(Te,hB),y(Do,Te,null),k(o,zp,f),k(o,Pt,f),e(Pt,Wo),e(Wo,Ed),y(Mr,Ed,null),e(Pt,mB),e(Pt,jd),e(jd,gB),k(o,qp,f),k(o,O,f),y(Er,O,null),e(O,uB),e(O,Pd),e(Pd,fB),e(O,_B),e(O,jr),e(jr,bB),e(jr,Ja),e(Ja,kB),e(jr,BB),e(O,vB),e(O,Pr),e(Pr,yB),e(Pr,Cr),e(Cr,TB),e(Pr,$B),e(O,wB),e(O,Cd),e(Cd,xB),e(O,FB),e(O,Le),e(Le,Ld),e(Ld,Lr),e(Lr,zB),e(Le,qB),e(Le,Ad),e(Ad,Ar),e(Ar,MB),e(Le,EB),e(Le,Id),e(Id,Ir),e(Ir,jB),e(Le,PB),e(Le,Od),e(Od,Or),e(Or,CB),e(O,LB),e(O,$e),y(Nr,$e,null),e($e,AB),e($e,Ct),e(Ct,IB),e(Ct,Nd),e(Nd,OB),e(Ct,NB),e(Ct,Sd),e(Sd,SB),e(Ct,DB),e($e,WB),y(Uo,$e,null),e($e,UB),y(Ro,$e,null),k(o,Mp,f),k(o,Lt,f),e(Lt,Go),e(Go,Dd),y(Sr,Dd,null),e(Lt,RB),e(Lt,Wd),e(Wd,GB),k(o,Ep,f),k(o,N,f),y(Dr,N,null),e(N,QB),e(N,Ud),e(Ud,HB),e(N,VB),e(N,Wr),e(Wr,JB),e(Wr,Ka),e(Ka,KB),e(Wr,XB),e(N,YB),e(N,Ur),e(Ur,ZB),e(Ur,Rr),e(Rr,ev),e(Ur,tv),e(N,ov),e(N,Rd),e(Rd,nv),e(N,sv),e(N,Ae),e(Ae,Gd),e(Gd,Gr),e(Gr,rv),e(Ae,av),e(Ae,Qd),e(Qd,Qr),e(Qr,iv),e(Ae,lv),e(Ae,Hd),e(Hd,Hr),e(Hr,dv),e(Ae,cv),e(Ae,Vd),e(Vd,Vr),e(Vr,pv),e(N,hv),e(N,we),y(Jr,we,null),e(we,mv),e(we,At),e(At,gv),e(At,Jd),e(Jd,uv),e(At,fv),e(At,Kd),e(Kd,_v),e(At,bv),e(we,kv),y(Qo,we,null),e(we,Bv),y(Ho,we,null),k(o,jp,f),k(o,It,f),e(It,Vo),e(Vo,Xd),y(Kr,Xd,null),e(It,vv),e(It,Yd),e(Yd,yv),k(o,Pp,f),k(o,S,f),y(Xr,S,null),e(S,Tv),e(S,Zd),e(Zd,$v),e(S,wv),e(S,Yr),e(Yr,xv),e(Yr,Xa),e(Xa,Fv),e(Yr,zv),e(S,qv),e(S,Zr),e(Zr,Mv),e(Zr,ea),e(ea,Ev),e(Zr,jv),e(S,Pv),e(S,ec),e(ec,Cv),e(S,Lv),e(S,Ie),e(Ie,tc),e(tc,ta),e(ta,Av),e(Ie,Iv),e(Ie,oc),e(oc,oa),e(oa,Ov),e(Ie,Nv),e(Ie,nc),e(nc,na),e(na,Sv),e(Ie,Dv),e(Ie,sc),e(sc,sa),e(sa,Wv),e(S,Uv),e(S,xe),y(ra,xe,null),e(xe,Rv),e(xe,Ot),e(Ot,Gv),e(Ot,rc),e(rc,Qv),e(Ot,Hv),e(Ot,ac),e(ac,Vv),e(Ot,Jv),e(xe,Kv),y(Jo,xe,null),e(xe,Xv),y(Ko,xe,null),k(o,Cp,f),k(o,Nt,f),e(Nt,Xo),e(Xo,ic),y(aa,ic,null),e(Nt,Yv),e(Nt,lc),e(lc,Zv),k(o,Lp,f),k(o,D,f),y(ia,D,null),e(D,ey),e(D,St),e(St,ty),e(St,dc),e(dc,oy),e(St,ny),e(St,cc),e(cc,sy),e(St,ry),e(D,ay),e(D,la),e(la,iy),e(la,Ya),e(Ya,ly),e(la,dy),e(D,cy),e(D,da),e(da,py),e(da,ca),e(ca,hy),e(da,my),e(D,gy),e(D,pc),e(pc,uy),e(D,fy),e(D,Oe),e(Oe,hc),e(hc,pa),e(pa,_y),e(Oe,by),e(Oe,mc),e(mc,ha),e(ha,ky),e(Oe,By),e(Oe,gc),e(gc,ma),e(ma,vy),e(Oe,yy),e(Oe,uc),e(uc,ga),e(ga,Ty),e(D,$y),e(D,Fe),y(ua,Fe,null),e(Fe,wy),e(Fe,Dt),e(Dt,xy),e(Dt,Za),e(Za,Fy),e(Dt,zy),e(Dt,fc),e(fc,qy),e(Dt,My),e(Fe,Ey),y(Yo,Fe,null),e(Fe,jy),y(Zo,Fe,null),Ap=!0},p(o,[f]){const fa={};f&2&&(fa.$$scope={dirty:f,ctx:o}),Ht.$set(fa);const _c={};f&2&&(_c.$$scope={dirty:f,ctx:o}),Yt.$set(_c);const bc={};f&2&&(bc.$$scope={dirty:f,ctx:o}),oo.$set(bc);const kc={};f&2&&(kc.$$scope={dirty:f,ctx:o}),no.$set(kc);const _a={};f&2&&(_a.$$scope={dirty:f,ctx:o}),ro.$set(_a);const Bc={};f&2&&(Bc.$$scope={dirty:f,ctx:o}),ao.$set(Bc);const vc={};f&2&&(vc.$$scope={dirty:f,ctx:o}),lo.$set(vc);const yc={};f&2&&(yc.$$scope={dirty:f,ctx:o}),co.$set(yc);const ba={};f&2&&(ba.$$scope={dirty:f,ctx:o}),ho.$set(ba);const Tc={};f&2&&(Tc.$$scope={dirty:f,ctx:o}),mo.$set(Tc);const $c={};f&2&&($c.$$scope={dirty:f,ctx:o}),go.$set($c);const wc={};f&2&&(wc.$$scope={dirty:f,ctx:o}),fo.$set(wc);const xc={};f&2&&(xc.$$scope={dirty:f,ctx:o}),_o.$set(xc);const Fc={};f&2&&(Fc.$$scope={dirty:f,ctx:o}),bo.$set(Fc);const R={};f&2&&(R.$$scope={dirty:f,ctx:o}),Bo.$set(R);const ka={};f&2&&(ka.$$scope={dirty:f,ctx:o}),vo.$set(ka);const zc={};f&2&&(zc.$$scope={dirty:f,ctx:o}),To.$set(zc);const ge={};f&2&&(ge.$$scope={dirty:f,ctx:o}),$o.$set(ge);const qc={};f&2&&(qc.$$scope={dirty:f,ctx:o}),wo.$set(qc);const Mc={};f&2&&(Mc.$$scope={dirty:f,ctx:o}),Fo.$set(Mc);const Ec={};f&2&&(Ec.$$scope={dirty:f,ctx:o}),zo.$set(Ec);const jc={};f&2&&(jc.$$scope={dirty:f,ctx:o}),qo.$set(jc);const Pc={};f&2&&(Pc.$$scope={dirty:f,ctx:o}),Eo.$set(Pc);const Cc={};f&2&&(Cc.$$scope={dirty:f,ctx:o}),jo.$set(Cc);const Ba={};f&2&&(Ba.$$scope={dirty:f,ctx:o}),Co.$set(Ba);const Lc={};f&2&&(Lc.$$scope={dirty:f,ctx:o}),Lo.$set(Lc);const ei={};f&2&&(ei.$$scope={dirty:f,ctx:o}),Io.$set(ei);const Ac={};f&2&&(Ac.$$scope={dirty:f,ctx:o}),Oo.$set(Ac);const Ic={};f&2&&(Ic.$$scope={dirty:f,ctx:o}),So.$set(Ic);const Wt={};f&2&&(Wt.$$scope={dirty:f,ctx:o}),Do.$set(Wt);const Oc={};f&2&&(Oc.$$scope={dirty:f,ctx:o}),Uo.$set(Oc);const Nc={};f&2&&(Nc.$$scope={dirty:f,ctx:o}),Ro.$set(Nc);const va={};f&2&&(va.$$scope={dirty:f,ctx:o}),Qo.$set(va);const Sc={};f&2&&(Sc.$$scope={dirty:f,ctx:o}),Ho.$set(Sc);const Dc={};f&2&&(Dc.$$scope={dirty:f,ctx:o}),Jo.$set(Dc);const Wc={};f&2&&(Wc.$$scope={dirty:f,ctx:o}),Ko.$set(Wc);const Ne={};f&2&&(Ne.$$scope={dirty:f,ctx:o}),Yo.$set(Ne);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:o}),Zo.$set(Ut)},i(o){Ap||(T(l.$$.fragment,o),T(Fn.$$.fragment,o),T(Cn.$$.fragment,o),T(Ln.$$.fragment,o),T(Ht.$$.fragment,o),T(In.$$.fragment,o),T(On.$$.fragment,o),T(Wn.$$.fragment,o),T(Rn.$$.fragment,o),T(Qn.$$.fragment,o),T(Hn.$$.fragment,o),T(Vn.$$.fragment,o),T(Jn.$$.fragment,o),T(Xn.$$.fragment,o),T(Zn.$$.fragment,o),T(Yt.$$.fragment,o),T(es.$$.fragment,o),T(os.$$.fragment,o),T(ns.$$.fragment,o),T(rs.$$.fragment,o),T(as.$$.fragment,o),T(ps.$$.fragment,o),T(oo.$$.fragment,o),T(no.$$.fragment,o),T(hs.$$.fragment,o),T(ms.$$.fragment,o),T(gs.$$.fragment,o),T(ro.$$.fragment,o),T(ao.$$.fragment,o),T(us.$$.fragment,o),T(fs.$$.fragment,o),T(bs.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T(ks.$$.fragment,o),T(Bs.$$.fragment,o),T(ys.$$.fragment,o),T(ho.$$.fragment,o),T(mo.$$.fragment,o),T(go.$$.fragment,o),T(Ts.$$.fragment,o),T($s.$$.fragment,o),T(Fs.$$.fragment,o),T(fo.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(zs.$$.fragment,o),T(qs.$$.fragment,o),T(js.$$.fragment,o),T(Bo.$$.fragment,o),T(vo.$$.fragment,o),T(Ps.$$.fragment,o),T(Cs.$$.fragment,o),T(Is.$$.fragment,o),T(To.$$.fragment,o),T($o.$$.fragment,o),T(wo.$$.fragment,o),T(Os.$$.fragment,o),T(Ns.$$.fragment,o),T(Ws.$$.fragment,o),T(Fo.$$.fragment,o),T(zo.$$.fragment,o),T(qo.$$.fragment,o),T(Us.$$.fragment,o),T(Rs.$$.fragment,o),T(Ys.$$.fragment,o),T(Eo.$$.fragment,o),T(jo.$$.fragment,o),T(Zs.$$.fragment,o),T(er.$$.fragment,o),T(lr.$$.fragment,o),T(Co.$$.fragment,o),T(Lo.$$.fragment,o),T(dr.$$.fragment,o),T(cr.$$.fragment,o),T(br.$$.fragment,o),T(Io.$$.fragment,o),T(Oo.$$.fragment,o),T(kr.$$.fragment,o),T(Br.$$.fragment,o),T(qr.$$.fragment,o),T(So.$$.fragment,o),T(Do.$$.fragment,o),T(Mr.$$.fragment,o),T(Er.$$.fragment,o),T(Nr.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Sr.$$.fragment,o),T(Dr.$$.fragment,o),T(Jr.$$.fragment,o),T(Qo.$$.fragment,o),T(Ho.$$.fragment,o),T(Kr.$$.fragment,o),T(Xr.$$.fragment,o),T(ra.$$.fragment,o),T(Jo.$$.fragment,o),T(Ko.$$.fragment,o),T(aa.$$.fragment,o),T(ia.$$.fragment,o),T(ua.$$.fragment,o),T(Yo.$$.fragment,o),T(Zo.$$.fragment,o),Ap=!0)},o(o){$(l.$$.fragment,o),$(Fn.$$.fragment,o),$(Cn.$$.fragment,o),$(Ln.$$.fragment,o),$(Ht.$$.fragment,o),$(In.$$.fragment,o),$(On.$$.fragment,o),$(Wn.$$.fragment,o),$(Rn.$$.fragment,o),$(Qn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Zn.$$.fragment,o),$(Yt.$$.fragment,o),$(es.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(ps.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(gs.$$.fragment,o),$(ro.$$.fragment,o),$(ao.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(bs.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(ks.$$.fragment,o),$(Bs.$$.fragment,o),$(ys.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(go.$$.fragment,o),$(Ts.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(fo.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Bo.$$.fragment,o),$(vo.$$.fragment,o),$(Ps.$$.fragment,o),$(Cs.$$.fragment,o),$(Is.$$.fragment,o),$(To.$$.fragment,o),$($o.$$.fragment,o),$(wo.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Ws.$$.fragment,o),$(Fo.$$.fragment,o),$(zo.$$.fragment,o),$(qo.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(Ys.$$.fragment,o),$(Eo.$$.fragment,o),$(jo.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(lr.$$.fragment,o),$(Co.$$.fragment,o),$(Lo.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(br.$$.fragment,o),$(Io.$$.fragment,o),$(Oo.$$.fragment,o),$(kr.$$.fragment,o),$(Br.$$.fragment,o),$(qr.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(Nr.$$.fragment,o),$(Uo.$$.fragment,o),$(Ro.$$.fragment,o),$(Sr.$$.fragment,o),$(Dr.$$.fragment,o),$(Jr.$$.fragment,o),$(Qo.$$.fragment,o),$(Ho.$$.fragment,o),$(Kr.$$.fragment,o),$(Xr.$$.fragment,o),$(ra.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(ua.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),Ap=!1},d(o){t(d),o&&t(_),o&&t(g),w(l),o&&t(Uc),o&&t(Je),w(Fn),o&&t(Rc),o&&t(Gt),o&&t(Gc),o&&t(ya),o&&t(Qc),o&&t(Ta),o&&t(Hc),o&&t($a),o&&t(Vc),o&&t(W),o&&t(Jc),o&&t(Se),o&&t(Kc),o&&t(Ke),w(Cn),o&&t(Xc),o&&t(de),w(Ln),w(Ht),o&&t(Yc),o&&t(Ze),w(In),o&&t(Zc),o&&t(P),w(On),w(Wn),w(Rn),w(Qn),w(Hn),o&&t(ep),o&&t(tt),w(Vn),o&&t(tp),o&&t(Q),w(Jn),w(Xn),w(Zn),w(Yt),w(es),o&&t(op),o&&t(ot),w(os),o&&t(np),o&&t(nt),w(ns),o&&t(sp),o&&t(st),w(rs),o&&t(rp),o&&t(H),w(as),w(ps),w(oo),w(no),o&&t(ap),o&&t(at),w(hs),o&&t(ip),o&&t(it),w(ms),w(gs),w(ro),w(ao),o&&t(lp),o&&t(dt),w(us),o&&t(dp),o&&t(qe),w(fs),w(bs),w(lo),w(co),o&&t(cp),o&&t(ht),w(ks),o&&t(pp),o&&t(Me),w(Bs),w(ys),w(ho),w(mo),w(go),o&&t(hp),o&&t(ut),w(Ts),o&&t(mp),o&&t(ce),w($s),w(Fs),w(fo),w(_o),w(bo),o&&t(gp),o&&t(_t),w(zs),o&&t(up),o&&t(pe),w(qs),w(js),w(Bo),w(vo),o&&t(fp),o&&t(kt),w(Ps),o&&t(_p),o&&t(he),w(Cs),w(Is),w(To),w($o),w(wo),o&&t(bp),o&&t(vt),w(Os),o&&t(kp),o&&t(me),w(Ns),w(Ws),w(Fo),w(zo),w(qo),o&&t(Bp),o&&t($t),w(Us),o&&t(vp),o&&t(C),w(Rs),w(Ys),w(Eo),w(jo),o&&t(yp),o&&t(xt),w(Zs),o&&t(Tp),o&&t(L),w(er),w(lr),w(Co),w(Lo),o&&t($p),o&&t(qt),w(dr),o&&t(wp),o&&t(A),w(cr),w(br),w(Io),w(Oo),o&&t(xp),o&&t(Et),w(kr),o&&t(Fp),o&&t(I),w(Br),w(qr),w(So),w(Do),o&&t(zp),o&&t(Pt),w(Mr),o&&t(qp),o&&t(O),w(Er),w(Nr),w(Uo),w(Ro),o&&t(Mp),o&&t(Lt),w(Sr),o&&t(Ep),o&&t(N),w(Dr),w(Jr),w(Qo),w(Ho),o&&t(jp),o&&t(It),w(Kr),o&&t(Pp),o&&t(S),w(Xr),w(ra),w(Jo),w(Ko),o&&t(Cp),o&&t(Nt),w(aa),o&&t(Lp),o&&t(D),w(ia),w(ua),w(Yo),w(Zo)}}}const Wx={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForCausalLM",title:"FlaxBigBirdForCausalLM"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function Ux(x){return ox(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kx extends Yw{constructor(d){super();Zw(this,d,Ux,Dx,ex,{})}}export{Kx as default,Wx as metadata};
