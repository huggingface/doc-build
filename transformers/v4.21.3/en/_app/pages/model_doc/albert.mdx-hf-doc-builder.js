import{S as n3,i as s3,s as r3,e as n,k as c,w as T,t as a,M as a3,c as s,d as t,m as p,a as r,x as y,h as i,b as u,G as e,g as b,y as w,q as $,o as A,B as F,v as i3,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as L}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function l3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertConfig, AlbertModel

# Initializing an ALBERT-xxlarge style configuration
albert_xxlarge_configuration = AlbertConfig()

# Initializing an ALBERT-base style configuration
albert_base_configuration = AlbertConfig(
    hidden_size=768,
    num_attention_heads=12,
    intermediate_size=3072,
)

# Initializing a model from the ALBERT-base style configuration
model = AlbertModel(albert_xxlarge_configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertConfig, AlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-xxlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_xxlarge_configuration = AlbertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_base_configuration = AlbertConfig(
<span class="hljs-meta">... </span>    hidden_size=<span class="hljs-number">768</span>,
<span class="hljs-meta">... </span>    num_attention_heads=<span class="hljs-number">12</span>,
<span class="hljs-meta">... </span>    intermediate_size=<span class="hljs-number">3072</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel(albert_xxlarge_configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function d3(x){let d,g,h,m,_;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function c3(x){let d,g,h,m,_;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function p3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function h3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertModel
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function m3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function f3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(0)
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function u3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function g3(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMaskedLM.from_pretrained("albert-base-v2")

# add mask_token
inputs = tokenizer("The capital of [MASK] is Paris.", return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function _3(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function b3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function v3(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("textattack/albert-base-v2-imdb")
model = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function k3(x){let d,g;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function T3(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("textattack/albert-base-v2-imdb")
model = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function y3(x){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = AlbertForSequenceClassification.from_pretrained(
    "textattack/albert-base-v2-imdb", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function w3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function $3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function A3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function F3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
import torch

tokenizer = AlbertTokenizer.from_pretrained("vumichien/tiny-albert")
model = AlbertForTokenClassification.from_pretrained("vumichien/tiny-albert")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function x3(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function E3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function M3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
import torch

tokenizer = AlbertTokenizer.from_pretrained("twmkn9/albert-base-v2-squad2")
model = AlbertForQuestionAnswering.from_pretrained("twmkn9/albert-base-v2-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function z3(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function q3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function j3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function P3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function C3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function L3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function I3(x){let d,g,h,m,_;return m=new ae({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True))[None, :]
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[<span class="hljs-literal">None</span>, :]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function O3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function N3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function D3(x){let d,g,h,m,_;return m=new ae({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMaskedLM.from_pretrained("albert-base-v2")

# add mask_token
inputs = tokenizer(f"The capital of [MASK] is Paris.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]
predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">f&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function S3(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function W3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function U3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function B3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/albert-base-v2-imdb")
model = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function R3(x){let d,g;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function H3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function Q3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function V3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function K3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function J3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function G3(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/tiny-albert")
model = TFAlbertForTokenClassification.from_pretrained("vumichien/tiny-albert")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function X3(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Y3(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ve=a("model(inputs_ids)"),ce=c(),j=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=s(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(k),m=s(k,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(k),z=s(k,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(k),I=s(k,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(k),q=s(k,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ve=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var W=r(j);ke=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var Te=r(D);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),N.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,h,M),b(k,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(k,G,M),b(k,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(k,K,M),b(k,I,M),e(I,te),b(k,X,M),b(k,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ve),e(q,ce),e(q,j),e(j,ke),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(k){k&&t(d),k&&t(h),k&&t(m),k&&t(G),k&&t(z),k&&t(K),k&&t(I),k&&t(X),k&&t(q)}}}function Z3(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function eM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/albert-base-v2-squad2")
model = TFAlbertForQuestionAnswering.from_pretrained("vumichien/albert-base-v2-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function tM(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([12])
target_end_index = tf.constant([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function oM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function nM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function sM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function rM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForPreTraining.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function aM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function iM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function lM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function dM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function pM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function mM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function fM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function uM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForQuestionAnswering.from_pretrained("albert-base-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gM(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ve,ce,j,ke,Q,oe,ie,V,pe,ne,O,he,D,le,k,M,J,Fe,Ae,C,xe,ye,Ee,N,S,Me,ze,W,qe,je,me,Te,wn,Mc,Fr,Tg,zc,yg,rf,bt,xr,wg,Ut,$g,rd,Ag,Fg,ad,xg,Eg,Er,Mg,zg,qg,bo,jg,id,Pg,Cg,ld,Lg,Ig,Og,$n,af,vo,An,qc,Mr,Ng,jc,Dg,lf,Pe,zr,Sg,qr,Wg,jr,Ug,Bg,Rg,Pr,Hg,dd,Qg,Vg,Kg,to,Cr,Jg,Pc,Gg,Xg,Lr,cd,Yg,Cc,Zg,e_,pd,t_,Lc,o_,n_,Fn,Ir,s_,Or,r_,Ic,a_,i_,l_,kt,Nr,d_,Oc,c_,p_,xn,h_,ko,m_,Nc,f_,u_,Dc,g_,__,b_,hd,Dr,df,To,En,Sc,Sr,v_,Wc,k_,cf,vt,Wr,T_,Bt,y_,Uc,w_,$_,Ur,A_,F_,md,x_,E_,M_,oo,Br,z_,Bc,q_,j_,Rr,fd,P_,Rc,C_,L_,ud,I_,Hc,O_,N_,Tt,Hr,D_,Qc,S_,W_,Mn,U_,Vc,B_,pf,yo,zn,Kc,Qr,R_,Jc,H_,hf,wo,Vr,Q_,Kr,V_,gd,K_,J_,mf,$o,Jr,G_,Gr,X_,_d,Y_,Z_,ff,Ao,qn,Gc,Xr,eb,Xc,tb,uf,Ge,Yr,ob,Yc,nb,sb,Zr,rb,bd,ab,ib,lb,ea,db,ta,cb,pb,hb,yt,oa,mb,Fo,fb,vd,ub,gb,Zc,_b,bb,vb,jn,kb,Pn,gf,xo,Cn,ep,na,Tb,tp,yb,_f,Xe,sa,wb,Eo,$b,op,Ab,Fb,np,xb,Eb,Mb,ra,zb,kd,qb,jb,Pb,aa,Cb,ia,Lb,Ib,Ob,wt,la,Nb,Mo,Db,Td,Sb,Wb,sp,Ub,Bb,Rb,Ln,Hb,In,bf,zo,On,rp,da,Qb,ap,Vb,vf,Ye,ca,Kb,pa,Jb,ip,Gb,Xb,Yb,ha,Zb,yd,ev,tv,ov,ma,nv,fa,sv,rv,av,nt,ua,iv,qo,lv,wd,dv,cv,lp,pv,hv,mv,Nn,fv,Dn,uv,Sn,kf,jo,Wn,dp,ga,gv,cp,_v,Tf,Ze,_a,bv,pp,vv,kv,ba,Tv,$d,yv,wv,$v,va,Av,ka,Fv,xv,Ev,We,Ta,Mv,Po,zv,Ad,qv,jv,hp,Pv,Cv,Lv,Un,Iv,Bn,Ov,Rn,Nv,Hn,Dv,Qn,yf,Co,Vn,mp,ya,Sv,fp,Wv,wf,et,wa,Uv,up,Bv,Rv,$a,Hv,Fd,Qv,Vv,Kv,Aa,Jv,Fa,Gv,Xv,Yv,$t,xa,Zv,Lo,ek,xd,tk,ok,gp,nk,sk,rk,Kn,ak,Jn,$f,Io,Gn,_p,Ea,ik,bp,lk,Af,tt,Ma,dk,vp,ck,pk,za,hk,Ed,mk,fk,uk,qa,gk,ja,_k,bk,vk,st,Pa,kk,Oo,Tk,Md,yk,wk,kp,$k,Ak,Fk,Xn,xk,Yn,Ek,Zn,Ff,No,es,Tp,Ca,Mk,yp,zk,xf,ot,La,qk,Do,jk,wp,Pk,Ck,$p,Lk,Ik,Ok,Ia,Nk,zd,Dk,Sk,Wk,Oa,Uk,Na,Bk,Rk,Hk,rt,Da,Qk,So,Vk,qd,Kk,Jk,Ap,Gk,Xk,Yk,ts,Zk,os,eT,ns,Ef,Wo,ss,Fp,Sa,tT,xp,oT,Mf,Ue,Wa,nT,Ep,sT,rT,Ua,aT,jd,iT,lT,dT,Ba,cT,Ra,pT,hT,mT,rs,fT,At,Ha,uT,Uo,gT,Pd,_T,bT,Mp,vT,kT,TT,as,yT,is,zf,Bo,ls,zp,Qa,wT,qp,$T,qf,Be,Va,AT,Ro,FT,jp,xT,ET,Pp,MT,zT,qT,Ka,jT,Cd,PT,CT,LT,Ja,IT,Ga,OT,NT,DT,ds,ST,Ft,Xa,WT,Ho,UT,Ld,BT,RT,Cp,HT,QT,VT,cs,KT,ps,jf,Qo,hs,Lp,Ya,JT,Ip,GT,Pf,Re,Za,XT,ei,YT,Op,ZT,ey,ty,ti,oy,Id,ny,sy,ry,oi,ay,ni,iy,ly,dy,ms,cy,at,si,py,Vo,hy,Od,my,fy,Np,uy,gy,_y,fs,by,us,vy,gs,Cf,Ko,_s,Dp,ri,ky,Sp,Ty,Lf,He,ai,yy,Wp,wy,$y,ii,Ay,Nd,Fy,xy,Ey,li,My,di,zy,qy,jy,bs,Py,it,ci,Cy,Jo,Ly,Dd,Iy,Oy,Up,Ny,Dy,Sy,vs,Wy,ks,Uy,Ts,If,Go,ys,Bp,pi,By,Rp,Ry,Of,Qe,hi,Hy,Hp,Qy,Vy,mi,Ky,Sd,Jy,Gy,Xy,fi,Yy,ui,Zy,e1,t1,ws,o1,xt,gi,n1,Xo,s1,Wd,r1,a1,Qp,i1,l1,d1,$s,c1,As,Nf,Yo,Fs,Vp,_i,p1,Kp,h1,Df,Ve,bi,m1,Jp,f1,u1,vi,g1,Ud,_1,b1,v1,ki,k1,Ti,T1,y1,w1,xs,$1,lt,yi,A1,Zo,F1,Bd,x1,E1,Gp,M1,z1,q1,Es,j1,Ms,P1,zs,Sf,en,qs,Xp,wi,C1,Yp,L1,Wf,Ke,$i,I1,tn,O1,Zp,N1,D1,eh,S1,W1,U1,Ai,B1,Rd,R1,H1,Q1,Fi,V1,xi,K1,J1,G1,js,X1,dt,Ei,Y1,on,Z1,Hd,e2,t2,th,o2,n2,s2,Ps,r2,Cs,a2,Ls,Uf,nn,Is,oh,Mi,i2,nh,l2,Bf,Ce,zi,d2,sh,c2,p2,qi,h2,Qd,m2,f2,u2,ji,g2,Pi,_2,b2,v2,rh,k2,T2,Rt,ah,Ci,y2,w2,ih,Li,$2,A2,lh,Ii,F2,x2,dh,Oi,E2,M2,Et,Ni,z2,sn,q2,ch,j2,P2,ph,C2,L2,I2,Os,O2,Ns,Rf,rn,Ds,hh,Di,N2,mh,D2,Hf,Le,Si,S2,an,W2,fh,U2,B2,uh,R2,H2,Q2,Wi,V2,Vd,K2,J2,G2,Ui,X2,Bi,Y2,Z2,ew,gh,tw,ow,Ht,_h,Ri,nw,sw,bh,Hi,rw,aw,vh,Qi,iw,lw,kh,Vi,dw,cw,Mt,Ki,pw,ln,hw,Th,mw,fw,yh,uw,gw,_w,Ss,bw,Ws,Qf,dn,Us,wh,Ji,vw,$h,kw,Vf,Ie,Gi,Tw,Xi,yw,Ah,ww,$w,Aw,Yi,Fw,Kd,xw,Ew,Mw,Zi,zw,el,qw,jw,Pw,Fh,Cw,Lw,Qt,xh,tl,Iw,Ow,Eh,ol,Nw,Dw,Mh,nl,Sw,Ww,zh,sl,Uw,Bw,zt,rl,Rw,cn,Hw,qh,Qw,Vw,jh,Kw,Jw,Gw,Bs,Xw,Rs,Kf,pn,Hs,Ph,al,Yw,Ch,Zw,Jf,Oe,il,e$,Lh,t$,o$,ll,n$,Jd,s$,r$,a$,dl,i$,cl,l$,d$,c$,Ih,p$,h$,Vt,Oh,pl,m$,f$,Nh,hl,u$,g$,Dh,ml,_$,b$,Sh,fl,v$,k$,qt,ul,T$,hn,y$,Wh,w$,$$,Uh,A$,F$,x$,Qs,E$,Vs,Gf,mn,Ks,Bh,gl,M$,Rh,z$,Xf,Ne,_l,q$,Hh,j$,P$,bl,C$,Gd,L$,I$,O$,vl,N$,kl,D$,S$,W$,Qh,U$,B$,Kt,Vh,Tl,R$,H$,Kh,yl,Q$,V$,Jh,wl,K$,J$,Gh,$l,G$,X$,jt,Al,Y$,fn,Z$,Xh,eA,tA,Yh,oA,nA,sA,Js,rA,Gs,Yf,un,Xs,Zh,Fl,aA,em,iA,Zf,De,xl,lA,tm,dA,cA,El,pA,Xd,hA,mA,fA,Ml,uA,zl,gA,_A,bA,om,vA,kA,Jt,nm,ql,TA,yA,sm,jl,wA,$A,rm,Pl,AA,FA,am,Cl,xA,EA,Pt,Ll,MA,gn,zA,im,qA,jA,lm,PA,CA,LA,Ys,IA,Zs,eu,_n,er,dm,Il,OA,cm,NA,tu,Se,Ol,DA,bn,SA,pm,WA,UA,hm,BA,RA,HA,Nl,QA,Yd,VA,KA,JA,Dl,GA,Sl,XA,YA,ZA,mm,eF,tF,Gt,fm,Wl,oF,nF,um,Ul,sF,rF,gm,Bl,aF,iF,_m,Rl,lF,dF,Ct,Hl,cF,vn,pF,bm,hF,mF,vm,fF,uF,gF,tr,_F,or,ou;return l=new $e({}),ee=new $e({}),Fr=new $e({}),xr=new L({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.AlbertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.AlbertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.AlbertConfig.num_hidden_groups",description:`<strong>num_hidden_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups for the hidden layers, parameters in the same group are shared.`,name:"num_hidden_groups"},{anchor:"transformers.AlbertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.AlbertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.AlbertConfig.inner_group_num",description:`<strong>inner_group_num</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of inner repetition of attention and ffn.`,name:"inner_group_num"},{anchor:"transformers.AlbertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.AlbertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.AlbertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.AlbertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.AlbertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/configuration_albert.py#L36"}}),$n=new se({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[l3]},$$scope:{ctx:x}}}),Mr=new $e({}),zr=new L({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.AlbertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.AlbertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.AlbertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert.py#L59"}}),Cr=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ir=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Nr=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new se({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[d3]},$$scope:{ctx:x}}}),Dr=new L({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert.py#L338"}}),Sr=new $e({}),Wr=new L({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.AlbertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Br=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hr=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mn=new se({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[c3]},$$scope:{ctx:x}}}),Qr=new $e({}),Vr=new L({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L535"}}),Jr=new L({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L655"}}),Xr=new $e({}),Yr=new L({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L638"}}),oa=new L({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L682",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new we({props:{$$slots:{default:[p3]},$$scope:{ctx:x}}}),Pn=new se({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[h3]},$$scope:{ctx:x}}}),na=new $e({}),sa=new L({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L768"}}),la=new L({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new we({props:{$$slots:{default:[m3]},$$scope:{ctx:x}}}),In=new se({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[f3]},$$scope:{ctx:x}}}),da=new $e({}),ca=new L({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L914"}}),ua=new L({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L936",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new we({props:{$$slots:{default:[u3]},$$scope:{ctx:x}}}),Dn=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[g3]},$$scope:{ctx:x}}}),Sn=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_3]},$$scope:{ctx:x}}}),ga=new $e({}),_a=new L({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1029"}}),Ta=new L({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1042",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new we({props:{$$slots:{default:[b3]},$$scope:{ctx:x}}}),Bn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[v3]},$$scope:{ctx:x}}}),Rn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[k3]},$$scope:{ctx:x}}}),Hn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[T3]},$$scope:{ctx:x}}}),Qn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[y3]},$$scope:{ctx:x}}}),ya=new $e({}),wa=new L({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1330"}}),xa=new L({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1341",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new we({props:{$$slots:{default:[w3]},$$scope:{ctx:x}}}),Jn=new se({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$3]},$$scope:{ctx:x}}}),Ea=new $e({}),Ma=new L({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1131"}}),Pa=new L({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new we({props:{$$slots:{default:[A3]},$$scope:{ctx:x}}}),Yn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[F3]},$$scope:{ctx:x}}}),Zn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[x3]},$$scope:{ctx:x}}}),Ca=new $e({}),La=new L({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1223"}}),Da=new L({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_albert.py#L1237",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new we({props:{$$slots:{default:[E3]},$$scope:{ctx:x}}}),os=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[M3]},$$scope:{ctx:x}}}),ns=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[z3]},$$scope:{ctx:x}}}),Sa=new $e({}),Wa=new L({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L782"}}),rs=new we({props:{$$slots:{default:[q3]},$$scope:{ctx:x}}}),Ha=new L({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new we({props:{$$slots:{default:[j3]},$$scope:{ctx:x}}}),is=new se({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[P3]},$$scope:{ctx:x}}}),Qa=new $e({}),Va=new L({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L843"}}),ds=new we({props:{$$slots:{default:[C3]},$$scope:{ctx:x}}}),Xa=new L({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L859",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new we({props:{$$slots:{default:[L3]},$$scope:{ctx:x}}}),ps=new se({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[I3]},$$scope:{ctx:x}}}),Ya=new $e({}),Za=new L({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L962"}}),ms=new we({props:{$$slots:{default:[O3]},$$scope:{ctx:x}}}),si=new L({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L975",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fs=new we({props:{$$slots:{default:[N3]},$$scope:{ctx:x}}}),us=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[D3]},$$scope:{ctx:x}}}),gs=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[S3]},$$scope:{ctx:x}}}),ri=new $e({}),ai=new L({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1071"}}),bs=new we({props:{$$slots:{default:[W3]},$$scope:{ctx:x}}}),ci=new L({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1087",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vs=new we({props:{$$slots:{default:[U3]},$$scope:{ctx:x}}}),ks=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[B3]},$$scope:{ctx:x}}}),Ts=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[R3]},$$scope:{ctx:x}}}),pi=new $e({}),hi=new L({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1362"}}),ws=new we({props:{$$slots:{default:[H3]},$$scope:{ctx:x}}}),gi=new L({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1386",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[Q3]},$$scope:{ctx:x}}}),As=new se({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[V3]},$$scope:{ctx:x}}}),_i=new $e({}),bi=new L({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1161"}}),xs=new we({props:{$$slots:{default:[K3]},$$scope:{ctx:x}}}),yi=new L({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1182",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new we({props:{$$slots:{default:[J3]},$$scope:{ctx:x}}}),Ms=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[G3]},$$scope:{ctx:x}}}),zs=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[X3]},$$scope:{ctx:x}}}),wi=new $e({}),$i=new L({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1257"}}),js=new we({props:{$$slots:{default:[Y3]},$$scope:{ctx:x}}}),Ei=new L({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_tf_albert.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[Z3]},$$scope:{ctx:x}}}),Cs=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[eM]},$$scope:{ctx:x}}}),Ls=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[tM]},$$scope:{ctx:x}}}),Mi=new $e({}),zi=new L({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Ni=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new we({props:{$$slots:{default:[oM]},$$scope:{ctx:x}}}),Ns=new se({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[nM]},$$scope:{ctx:x}}}),Di=new $e({}),Si=new L({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),Ki=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
<p><code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new we({props:{$$slots:{default:[sM]},$$scope:{ctx:x}}}),Ws=new se({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[rM]},$$scope:{ctx:x}}}),Ji=new $e({}),Gi=new L({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),rl=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new we({props:{$$slots:{default:[aM]},$$scope:{ctx:x}}}),Rs=new se({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[iM]},$$scope:{ctx:x}}}),al=new $e({}),il=new L({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),ul=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new we({props:{$$slots:{default:[lM]},$$scope:{ctx:x}}}),Vs=new se({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[dM]},$$scope:{ctx:x}}}),gl=new $e({}),_l=new L({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Al=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new we({props:{$$slots:{default:[cM]},$$scope:{ctx:x}}}),Gs=new se({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[pM]},$$scope:{ctx:x}}}),Fl=new $e({}),xl=new L({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Ll=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[hM]},$$scope:{ctx:x}}}),Zs=new se({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[mM]},$$scope:{ctx:x}}}),Il=new $e({}),Ol=new L({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),Hl=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new we({props:{$$slots:{default:[fM]},$$scope:{ctx:x}}}),or=new se({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[uM]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),f=c(),E=n("span"),fe=a("ALBERT"),G=c(),z=n("h2"),Y=n("a"),U=n("span"),T(ee.$$.fragment),ue=c(),B=n("span"),ge=a("Overview"),de=c(),K=n("p"),I=a("The ALBERT model was proposed in "),te=n("a"),X=a("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),q=a(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),P=c(),Z=n("ul"),R=n("li"),_e=a("Splitting the embedding matrix into two smaller matrices."),be=c(),H=n("li"),ve=a("Using repeating layers split among groups."),ce=c(),j=n("p"),ke=a("The abstract from the paper is the following:"),Q=c(),oe=n("p"),ie=n("em"),V=a(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),pe=c(),ne=n("p"),O=a("Tips:"),he=c(),D=n("ul"),le=n("li"),k=a(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),M=c(),J=n("li"),Fe=a(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Ae=c(),C=n("p"),xe=a("This model was contributed by "),ye=n("a"),Ee=a("lysandre"),N=a(`. This model jax version was contributed by
`),S=n("a"),Me=a("kamalkraj"),ze=a(". The original code can be found "),W=n("a"),qe=a("here"),je=a("."),me=c(),Te=n("h2"),wn=n("a"),Mc=n("span"),T(Fr.$$.fragment),Tg=c(),zc=n("span"),yg=a("AlbertConfig"),rf=c(),bt=n("div"),T(xr.$$.fragment),wg=c(),Ut=n("p"),$g=a("This is the configuration class to store the configuration of a "),rd=n("a"),Ag=a("AlbertModel"),Fg=a(" or a "),ad=n("a"),xg=a("TFAlbertModel"),Eg=a(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=n("a"),Mg=a("albert-xxlarge-v2"),zg=a(" architecture."),qg=c(),bo=n("p"),jg=a("Configuration objects inherit from "),id=n("a"),Pg=a("PretrainedConfig"),Cg=a(` and can be used to control the model outputs. Read the
documentation from `),ld=n("a"),Lg=a("PretrainedConfig"),Ig=a(" for more information."),Og=c(),T($n.$$.fragment),af=c(),vo=n("h2"),An=n("a"),qc=n("span"),T(Mr.$$.fragment),Ng=c(),jc=n("span"),Dg=a("AlbertTokenizer"),lf=c(),Pe=n("div"),T(zr.$$.fragment),Sg=c(),qr=n("p"),Wg=a("Construct an ALBERT tokenizer. Based on "),jr=n("a"),Ug=a("SentencePiece"),Bg=a("."),Rg=c(),Pr=n("p"),Hg=a("This tokenizer inherits from "),dd=n("a"),Qg=a("PreTrainedTokenizer"),Vg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kg=c(),to=n("div"),T(Cr.$$.fragment),Jg=c(),Pc=n("p"),Gg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=c(),Lr=n("ul"),cd=n("li"),Yg=a("single sequence: "),Cc=n("code"),Zg=a("[CLS] X [SEP]"),e_=c(),pd=n("li"),t_=a("pair of sequences: "),Lc=n("code"),o_=a("[CLS] A [SEP] B [SEP]"),n_=c(),Fn=n("div"),T(Ir.$$.fragment),s_=c(),Or=n("p"),r_=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ic=n("code"),a_=a("prepare_for_model"),i_=a(" method."),l_=c(),kt=n("div"),T(Nr.$$.fragment),d_=c(),Oc=n("p"),c_=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),p_=c(),T(xn.$$.fragment),h_=c(),ko=n("p"),m_=a("If "),Nc=n("code"),f_=a("token_ids_1"),u_=a(" is "),Dc=n("code"),g_=a("None"),__=a(", this method only returns the first portion of the mask (0s)."),b_=c(),hd=n("div"),T(Dr.$$.fragment),df=c(),To=n("h2"),En=n("a"),Sc=n("span"),T(Sr.$$.fragment),v_=c(),Wc=n("span"),k_=a("AlbertTokenizerFast"),cf=c(),vt=n("div"),T(Wr.$$.fragment),T_=c(),Bt=n("p"),y_=a("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Uc=n("em"),w_=a("tokenizers"),$_=a(` library). Based on
`),Ur=n("a"),A_=a("Unigram"),F_=a(`. This
tokenizer inherits from `),md=n("a"),x_=a("PreTrainedTokenizerFast"),E_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=c(),oo=n("div"),T(Br.$$.fragment),z_=c(),Bc=n("p"),q_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),j_=c(),Rr=n("ul"),fd=n("li"),P_=a("single sequence: "),Rc=n("code"),C_=a("[CLS] X [SEP]"),L_=c(),ud=n("li"),I_=a("pair of sequences: "),Hc=n("code"),O_=a("[CLS] A [SEP] B [SEP]"),N_=c(),Tt=n("div"),T(Hr.$$.fragment),D_=c(),Qc=n("p"),S_=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),W_=c(),T(Mn.$$.fragment),U_=c(),Vc=n("p"),B_=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),pf=c(),yo=n("h2"),zn=n("a"),Kc=n("span"),T(Qr.$$.fragment),R_=c(),Jc=n("span"),H_=a("Albert specific outputs"),hf=c(),wo=n("div"),T(Vr.$$.fragment),Q_=c(),Kr=n("p"),V_=a("Output type of "),gd=n("a"),K_=a("AlbertForPreTraining"),J_=a("."),mf=c(),$o=n("div"),T(Jr.$$.fragment),G_=c(),Gr=n("p"),X_=a("Output type of "),_d=n("a"),Y_=a("TFAlbertForPreTraining"),Z_=a("."),ff=c(),Ao=n("h2"),qn=n("a"),Gc=n("span"),T(Xr.$$.fragment),eb=c(),Xc=n("span"),tb=a("AlbertModel"),uf=c(),Ge=n("div"),T(Yr.$$.fragment),ob=c(),Yc=n("p"),nb=a("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=c(),Zr=n("p"),rb=a("This model inherits from "),bd=n("a"),ab=a("PreTrainedModel"),ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=c(),ea=n("p"),db=a("This model is also a PyTorch "),ta=n("a"),cb=a("torch.nn.Module"),pb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=c(),yt=n("div"),T(oa.$$.fragment),mb=c(),Fo=n("p"),fb=a("The "),vd=n("a"),ub=a("AlbertModel"),gb=a(" forward method, overrides the "),Zc=n("code"),_b=a("__call__"),bb=a(" special method."),vb=c(),T(jn.$$.fragment),kb=c(),T(Pn.$$.fragment),gf=c(),xo=n("h2"),Cn=n("a"),ep=n("span"),T(na.$$.fragment),Tb=c(),tp=n("span"),yb=a("AlbertForPreTraining"),_f=c(),Xe=n("div"),T(sa.$$.fragment),wb=c(),Eo=n("p"),$b=a("Albert Model with two heads on top as done during the pretraining: a "),op=n("code"),Ab=a("masked language modeling"),Fb=a(` head and a
`),np=n("code"),xb=a("sentence order prediction (classification)"),Eb=a(" head."),Mb=c(),ra=n("p"),zb=a("This model inherits from "),kd=n("a"),qb=a("PreTrainedModel"),jb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=c(),aa=n("p"),Cb=a("This model is also a PyTorch "),ia=n("a"),Lb=a("torch.nn.Module"),Ib=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ob=c(),wt=n("div"),T(la.$$.fragment),Nb=c(),Mo=n("p"),Db=a("The "),Td=n("a"),Sb=a("AlbertForPreTraining"),Wb=a(" forward method, overrides the "),sp=n("code"),Ub=a("__call__"),Bb=a(" special method."),Rb=c(),T(Ln.$$.fragment),Hb=c(),T(In.$$.fragment),bf=c(),zo=n("h2"),On=n("a"),rp=n("span"),T(da.$$.fragment),Qb=c(),ap=n("span"),Vb=a("AlbertForMaskedLM"),vf=c(),Ye=n("div"),T(ca.$$.fragment),Kb=c(),pa=n("p"),Jb=a("Albert Model with a "),ip=n("code"),Gb=a("language modeling"),Xb=a(" head on top."),Yb=c(),ha=n("p"),Zb=a("This model inherits from "),yd=n("a"),ev=a("PreTrainedModel"),tv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ov=c(),ma=n("p"),nv=a("This model is also a PyTorch "),fa=n("a"),sv=a("torch.nn.Module"),rv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),av=c(),nt=n("div"),T(ua.$$.fragment),iv=c(),qo=n("p"),lv=a("The "),wd=n("a"),dv=a("AlbertForMaskedLM"),cv=a(" forward method, overrides the "),lp=n("code"),pv=a("__call__"),hv=a(" special method."),mv=c(),T(Nn.$$.fragment),fv=c(),T(Dn.$$.fragment),uv=c(),T(Sn.$$.fragment),kf=c(),jo=n("h2"),Wn=n("a"),dp=n("span"),T(ga.$$.fragment),gv=c(),cp=n("span"),_v=a("AlbertForSequenceClassification"),Tf=c(),Ze=n("div"),T(_a.$$.fragment),bv=c(),pp=n("p"),vv=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),kv=c(),ba=n("p"),Tv=a("This model inherits from "),$d=n("a"),yv=a("PreTrainedModel"),wv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=c(),va=n("p"),Av=a("This model is also a PyTorch "),ka=n("a"),Fv=a("torch.nn.Module"),xv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ev=c(),We=n("div"),T(Ta.$$.fragment),Mv=c(),Po=n("p"),zv=a("The "),Ad=n("a"),qv=a("AlbertForSequenceClassification"),jv=a(" forward method, overrides the "),hp=n("code"),Pv=a("__call__"),Cv=a(" special method."),Lv=c(),T(Un.$$.fragment),Iv=c(),T(Bn.$$.fragment),Ov=c(),T(Rn.$$.fragment),Nv=c(),T(Hn.$$.fragment),Dv=c(),T(Qn.$$.fragment),yf=c(),Co=n("h2"),Vn=n("a"),mp=n("span"),T(ya.$$.fragment),Sv=c(),fp=n("span"),Wv=a("AlbertForMultipleChoice"),wf=c(),et=n("div"),T(wa.$$.fragment),Uv=c(),up=n("p"),Bv=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rv=c(),$a=n("p"),Hv=a("This model inherits from "),Fd=n("a"),Qv=a("PreTrainedModel"),Vv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kv=c(),Aa=n("p"),Jv=a("This model is also a PyTorch "),Fa=n("a"),Gv=a("torch.nn.Module"),Xv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv=c(),$t=n("div"),T(xa.$$.fragment),Zv=c(),Lo=n("p"),ek=a("The "),xd=n("a"),tk=a("AlbertForMultipleChoice"),ok=a(" forward method, overrides the "),gp=n("code"),nk=a("__call__"),sk=a(" special method."),rk=c(),T(Kn.$$.fragment),ak=c(),T(Jn.$$.fragment),$f=c(),Io=n("h2"),Gn=n("a"),_p=n("span"),T(Ea.$$.fragment),ik=c(),bp=n("span"),lk=a("AlbertForTokenClassification"),Af=c(),tt=n("div"),T(Ma.$$.fragment),dk=c(),vp=n("p"),ck=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pk=c(),za=n("p"),hk=a("This model inherits from "),Ed=n("a"),mk=a("PreTrainedModel"),fk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uk=c(),qa=n("p"),gk=a("This model is also a PyTorch "),ja=n("a"),_k=a("torch.nn.Module"),bk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vk=c(),st=n("div"),T(Pa.$$.fragment),kk=c(),Oo=n("p"),Tk=a("The "),Md=n("a"),yk=a("AlbertForTokenClassification"),wk=a(" forward method, overrides the "),kp=n("code"),$k=a("__call__"),Ak=a(" special method."),Fk=c(),T(Xn.$$.fragment),xk=c(),T(Yn.$$.fragment),Ek=c(),T(Zn.$$.fragment),Ff=c(),No=n("h2"),es=n("a"),Tp=n("span"),T(Ca.$$.fragment),Mk=c(),yp=n("span"),zk=a("AlbertForQuestionAnswering"),xf=c(),ot=n("div"),T(La.$$.fragment),qk=c(),Do=n("p"),jk=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=n("code"),Pk=a("span start logits"),Ck=a(" and "),$p=n("code"),Lk=a("span end logits"),Ik=a(")."),Ok=c(),Ia=n("p"),Nk=a("This model inherits from "),zd=n("a"),Dk=a("PreTrainedModel"),Sk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wk=c(),Oa=n("p"),Uk=a("This model is also a PyTorch "),Na=n("a"),Bk=a("torch.nn.Module"),Rk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hk=c(),rt=n("div"),T(Da.$$.fragment),Qk=c(),So=n("p"),Vk=a("The "),qd=n("a"),Kk=a("AlbertForQuestionAnswering"),Jk=a(" forward method, overrides the "),Ap=n("code"),Gk=a("__call__"),Xk=a(" special method."),Yk=c(),T(ts.$$.fragment),Zk=c(),T(os.$$.fragment),eT=c(),T(ns.$$.fragment),Ef=c(),Wo=n("h2"),ss=n("a"),Fp=n("span"),T(Sa.$$.fragment),tT=c(),xp=n("span"),oT=a("TFAlbertModel"),Mf=c(),Ue=n("div"),T(Wa.$$.fragment),nT=c(),Ep=n("p"),sT=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),rT=c(),Ua=n("p"),aT=a("This model inherits from "),jd=n("a"),iT=a("TFPreTrainedModel"),lT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dT=c(),Ba=n("p"),cT=a("This model is also a "),Ra=n("a"),pT=a("tf.keras.Model"),hT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mT=c(),T(rs.$$.fragment),fT=c(),At=n("div"),T(Ha.$$.fragment),uT=c(),Uo=n("p"),gT=a("The "),Pd=n("a"),_T=a("TFAlbertModel"),bT=a(" forward method, overrides the "),Mp=n("code"),vT=a("__call__"),kT=a(" special method."),TT=c(),T(as.$$.fragment),yT=c(),T(is.$$.fragment),zf=c(),Bo=n("h2"),ls=n("a"),zp=n("span"),T(Qa.$$.fragment),wT=c(),qp=n("span"),$T=a("TFAlbertForPreTraining"),qf=c(),Be=n("div"),T(Va.$$.fragment),AT=c(),Ro=n("p"),FT=a("Albert Model with two heads on top for pretraining: a "),jp=n("code"),xT=a("masked language modeling"),ET=a(" head and a "),Pp=n("code"),MT=a("sentence order prediction"),zT=a(" (classification) head."),qT=c(),Ka=n("p"),jT=a("This model inherits from "),Cd=n("a"),PT=a("TFPreTrainedModel"),CT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LT=c(),Ja=n("p"),IT=a("This model is also a "),Ga=n("a"),OT=a("tf.keras.Model"),NT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DT=c(),T(ds.$$.fragment),ST=c(),Ft=n("div"),T(Xa.$$.fragment),WT=c(),Ho=n("p"),UT=a("The "),Ld=n("a"),BT=a("TFAlbertForPreTraining"),RT=a(" forward method, overrides the "),Cp=n("code"),HT=a("__call__"),QT=a(" special method."),VT=c(),T(cs.$$.fragment),KT=c(),T(ps.$$.fragment),jf=c(),Qo=n("h2"),hs=n("a"),Lp=n("span"),T(Ya.$$.fragment),JT=c(),Ip=n("span"),GT=a("TFAlbertForMaskedLM"),Pf=c(),Re=n("div"),T(Za.$$.fragment),XT=c(),ei=n("p"),YT=a("Albert Model with a "),Op=n("code"),ZT=a("language modeling"),ey=a(" head on top."),ty=c(),ti=n("p"),oy=a("This model inherits from "),Id=n("a"),ny=a("TFPreTrainedModel"),sy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ry=c(),oi=n("p"),ay=a("This model is also a "),ni=n("a"),iy=a("tf.keras.Model"),ly=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=c(),T(ms.$$.fragment),cy=c(),at=n("div"),T(si.$$.fragment),py=c(),Vo=n("p"),hy=a("The "),Od=n("a"),my=a("TFAlbertForMaskedLM"),fy=a(" forward method, overrides the "),Np=n("code"),uy=a("__call__"),gy=a(" special method."),_y=c(),T(fs.$$.fragment),by=c(),T(us.$$.fragment),vy=c(),T(gs.$$.fragment),Cf=c(),Ko=n("h2"),_s=n("a"),Dp=n("span"),T(ri.$$.fragment),ky=c(),Sp=n("span"),Ty=a("TFAlbertForSequenceClassification"),Lf=c(),He=n("div"),T(ai.$$.fragment),yy=c(),Wp=n("p"),wy=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$y=c(),ii=n("p"),Ay=a("This model inherits from "),Nd=n("a"),Fy=a("TFPreTrainedModel"),xy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ey=c(),li=n("p"),My=a("This model is also a "),di=n("a"),zy=a("tf.keras.Model"),qy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jy=c(),T(bs.$$.fragment),Py=c(),it=n("div"),T(ci.$$.fragment),Cy=c(),Jo=n("p"),Ly=a("The "),Dd=n("a"),Iy=a("TFAlbertForSequenceClassification"),Oy=a(" forward method, overrides the "),Up=n("code"),Ny=a("__call__"),Dy=a(" special method."),Sy=c(),T(vs.$$.fragment),Wy=c(),T(ks.$$.fragment),Uy=c(),T(Ts.$$.fragment),If=c(),Go=n("h2"),ys=n("a"),Bp=n("span"),T(pi.$$.fragment),By=c(),Rp=n("span"),Ry=a("TFAlbertForMultipleChoice"),Of=c(),Qe=n("div"),T(hi.$$.fragment),Hy=c(),Hp=n("p"),Qy=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Vy=c(),mi=n("p"),Ky=a("This model inherits from "),Sd=n("a"),Jy=a("TFPreTrainedModel"),Gy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xy=c(),fi=n("p"),Yy=a("This model is also a "),ui=n("a"),Zy=a("tf.keras.Model"),e1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),t1=c(),T(ws.$$.fragment),o1=c(),xt=n("div"),T(gi.$$.fragment),n1=c(),Xo=n("p"),s1=a("The "),Wd=n("a"),r1=a("TFAlbertForMultipleChoice"),a1=a(" forward method, overrides the "),Qp=n("code"),i1=a("__call__"),l1=a(" special method."),d1=c(),T($s.$$.fragment),c1=c(),T(As.$$.fragment),Nf=c(),Yo=n("h2"),Fs=n("a"),Vp=n("span"),T(_i.$$.fragment),p1=c(),Kp=n("span"),h1=a("TFAlbertForTokenClassification"),Df=c(),Ve=n("div"),T(bi.$$.fragment),m1=c(),Jp=n("p"),f1=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),u1=c(),vi=n("p"),g1=a("This model inherits from "),Ud=n("a"),_1=a("TFPreTrainedModel"),b1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v1=c(),ki=n("p"),k1=a("This model is also a "),Ti=n("a"),T1=a("tf.keras.Model"),y1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w1=c(),T(xs.$$.fragment),$1=c(),lt=n("div"),T(yi.$$.fragment),A1=c(),Zo=n("p"),F1=a("The "),Bd=n("a"),x1=a("TFAlbertForTokenClassification"),E1=a(" forward method, overrides the "),Gp=n("code"),M1=a("__call__"),z1=a(" special method."),q1=c(),T(Es.$$.fragment),j1=c(),T(Ms.$$.fragment),P1=c(),T(zs.$$.fragment),Sf=c(),en=n("h2"),qs=n("a"),Xp=n("span"),T(wi.$$.fragment),C1=c(),Yp=n("span"),L1=a("TFAlbertForQuestionAnswering"),Wf=c(),Ke=n("div"),T($i.$$.fragment),I1=c(),tn=n("p"),O1=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=n("code"),N1=a("span start logits"),D1=a(" and "),eh=n("code"),S1=a("span end logits"),W1=a(")."),U1=c(),Ai=n("p"),B1=a("This model inherits from "),Rd=n("a"),R1=a("TFPreTrainedModel"),H1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q1=c(),Fi=n("p"),V1=a("This model is also a "),xi=n("a"),K1=a("tf.keras.Model"),J1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),G1=c(),T(js.$$.fragment),X1=c(),dt=n("div"),T(Ei.$$.fragment),Y1=c(),on=n("p"),Z1=a("The "),Hd=n("a"),e2=a("TFAlbertForQuestionAnswering"),t2=a(" forward method, overrides the "),th=n("code"),o2=a("__call__"),n2=a(" special method."),s2=c(),T(Ps.$$.fragment),r2=c(),T(Cs.$$.fragment),a2=c(),T(Ls.$$.fragment),Uf=c(),nn=n("h2"),Is=n("a"),oh=n("span"),T(Mi.$$.fragment),i2=c(),nh=n("span"),l2=a("FlaxAlbertModel"),Bf=c(),Ce=n("div"),T(zi.$$.fragment),d2=c(),sh=n("p"),c2=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),p2=c(),qi=n("p"),h2=a("This model inherits from "),Qd=n("a"),m2=a("FlaxPreTrainedModel"),f2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),u2=c(),ji=n("p"),g2=a("This model is also a Flax Linen "),Pi=n("a"),_2=a("flax.linen.Module"),b2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),v2=c(),rh=n("p"),k2=a("Finally, this model supports inherent JAX features such as:"),T2=c(),Rt=n("ul"),ah=n("li"),Ci=n("a"),y2=a("Just-In-Time (JIT) compilation"),w2=c(),ih=n("li"),Li=n("a"),$2=a("Automatic Differentiation"),A2=c(),lh=n("li"),Ii=n("a"),F2=a("Vectorization"),x2=c(),dh=n("li"),Oi=n("a"),E2=a("Parallelization"),M2=c(),Et=n("div"),T(Ni.$$.fragment),z2=c(),sn=n("p"),q2=a("The "),ch=n("code"),j2=a("FlaxAlbertPreTrainedModel"),P2=a(" forward method, overrides the "),ph=n("code"),C2=a("__call__"),L2=a(" special method."),I2=c(),T(Os.$$.fragment),O2=c(),T(Ns.$$.fragment),Rf=c(),rn=n("h2"),Ds=n("a"),hh=n("span"),T(Di.$$.fragment),N2=c(),mh=n("span"),D2=a("FlaxAlbertForPreTraining"),Hf=c(),Le=n("div"),T(Si.$$.fragment),S2=c(),an=n("p"),W2=a("Albert Model with two heads on top as done during the pretraining: a "),fh=n("code"),U2=a("masked language modeling"),B2=a(` head and a
`),uh=n("code"),R2=a("sentence order prediction (classification)"),H2=a(" head."),Q2=c(),Wi=n("p"),V2=a("This model inherits from "),Vd=n("a"),K2=a("FlaxPreTrainedModel"),J2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G2=c(),Ui=n("p"),X2=a("This model is also a Flax Linen "),Bi=n("a"),Y2=a("flax.linen.Module"),Z2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ew=c(),gh=n("p"),tw=a("Finally, this model supports inherent JAX features such as:"),ow=c(),Ht=n("ul"),_h=n("li"),Ri=n("a"),nw=a("Just-In-Time (JIT) compilation"),sw=c(),bh=n("li"),Hi=n("a"),rw=a("Automatic Differentiation"),aw=c(),vh=n("li"),Qi=n("a"),iw=a("Vectorization"),lw=c(),kh=n("li"),Vi=n("a"),dw=a("Parallelization"),cw=c(),Mt=n("div"),T(Ki.$$.fragment),pw=c(),ln=n("p"),hw=a("The "),Th=n("code"),mw=a("FlaxAlbertPreTrainedModel"),fw=a(" forward method, overrides the "),yh=n("code"),uw=a("__call__"),gw=a(" special method."),_w=c(),T(Ss.$$.fragment),bw=c(),T(Ws.$$.fragment),Qf=c(),dn=n("h2"),Us=n("a"),wh=n("span"),T(Ji.$$.fragment),vw=c(),$h=n("span"),kw=a("FlaxAlbertForMaskedLM"),Vf=c(),Ie=n("div"),T(Gi.$$.fragment),Tw=c(),Xi=n("p"),yw=a("Albert Model with a "),Ah=n("code"),ww=a("language modeling"),$w=a(" head on top."),Aw=c(),Yi=n("p"),Fw=a("This model inherits from "),Kd=n("a"),xw=a("FlaxPreTrainedModel"),Ew=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mw=c(),Zi=n("p"),zw=a("This model is also a Flax Linen "),el=n("a"),qw=a("flax.linen.Module"),jw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pw=c(),Fh=n("p"),Cw=a("Finally, this model supports inherent JAX features such as:"),Lw=c(),Qt=n("ul"),xh=n("li"),tl=n("a"),Iw=a("Just-In-Time (JIT) compilation"),Ow=c(),Eh=n("li"),ol=n("a"),Nw=a("Automatic Differentiation"),Dw=c(),Mh=n("li"),nl=n("a"),Sw=a("Vectorization"),Ww=c(),zh=n("li"),sl=n("a"),Uw=a("Parallelization"),Bw=c(),zt=n("div"),T(rl.$$.fragment),Rw=c(),cn=n("p"),Hw=a("The "),qh=n("code"),Qw=a("FlaxAlbertPreTrainedModel"),Vw=a(" forward method, overrides the "),jh=n("code"),Kw=a("__call__"),Jw=a(" special method."),Gw=c(),T(Bs.$$.fragment),Xw=c(),T(Rs.$$.fragment),Kf=c(),pn=n("h2"),Hs=n("a"),Ph=n("span"),T(al.$$.fragment),Yw=c(),Ch=n("span"),Zw=a("FlaxAlbertForSequenceClassification"),Jf=c(),Oe=n("div"),T(il.$$.fragment),e$=c(),Lh=n("p"),t$=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o$=c(),ll=n("p"),n$=a("This model inherits from "),Jd=n("a"),s$=a("FlaxPreTrainedModel"),r$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a$=c(),dl=n("p"),i$=a("This model is also a Flax Linen "),cl=n("a"),l$=a("flax.linen.Module"),d$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c$=c(),Ih=n("p"),p$=a("Finally, this model supports inherent JAX features such as:"),h$=c(),Vt=n("ul"),Oh=n("li"),pl=n("a"),m$=a("Just-In-Time (JIT) compilation"),f$=c(),Nh=n("li"),hl=n("a"),u$=a("Automatic Differentiation"),g$=c(),Dh=n("li"),ml=n("a"),_$=a("Vectorization"),b$=c(),Sh=n("li"),fl=n("a"),v$=a("Parallelization"),k$=c(),qt=n("div"),T(ul.$$.fragment),T$=c(),hn=n("p"),y$=a("The "),Wh=n("code"),w$=a("FlaxAlbertPreTrainedModel"),$$=a(" forward method, overrides the "),Uh=n("code"),A$=a("__call__"),F$=a(" special method."),x$=c(),T(Qs.$$.fragment),E$=c(),T(Vs.$$.fragment),Gf=c(),mn=n("h2"),Ks=n("a"),Bh=n("span"),T(gl.$$.fragment),M$=c(),Rh=n("span"),z$=a("FlaxAlbertForMultipleChoice"),Xf=c(),Ne=n("div"),T(_l.$$.fragment),q$=c(),Hh=n("p"),j$=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),P$=c(),bl=n("p"),C$=a("This model inherits from "),Gd=n("a"),L$=a("FlaxPreTrainedModel"),I$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O$=c(),vl=n("p"),N$=a("This model is also a Flax Linen "),kl=n("a"),D$=a("flax.linen.Module"),S$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),W$=c(),Qh=n("p"),U$=a("Finally, this model supports inherent JAX features such as:"),B$=c(),Kt=n("ul"),Vh=n("li"),Tl=n("a"),R$=a("Just-In-Time (JIT) compilation"),H$=c(),Kh=n("li"),yl=n("a"),Q$=a("Automatic Differentiation"),V$=c(),Jh=n("li"),wl=n("a"),K$=a("Vectorization"),J$=c(),Gh=n("li"),$l=n("a"),G$=a("Parallelization"),X$=c(),jt=n("div"),T(Al.$$.fragment),Y$=c(),fn=n("p"),Z$=a("The "),Xh=n("code"),eA=a("FlaxAlbertPreTrainedModel"),tA=a(" forward method, overrides the "),Yh=n("code"),oA=a("__call__"),nA=a(" special method."),sA=c(),T(Js.$$.fragment),rA=c(),T(Gs.$$.fragment),Yf=c(),un=n("h2"),Xs=n("a"),Zh=n("span"),T(Fl.$$.fragment),aA=c(),em=n("span"),iA=a("FlaxAlbertForTokenClassification"),Zf=c(),De=n("div"),T(xl.$$.fragment),lA=c(),tm=n("p"),dA=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cA=c(),El=n("p"),pA=a("This model inherits from "),Xd=n("a"),hA=a("FlaxPreTrainedModel"),mA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fA=c(),Ml=n("p"),uA=a("This model is also a Flax Linen "),zl=n("a"),gA=a("flax.linen.Module"),_A=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bA=c(),om=n("p"),vA=a("Finally, this model supports inherent JAX features such as:"),kA=c(),Jt=n("ul"),nm=n("li"),ql=n("a"),TA=a("Just-In-Time (JIT) compilation"),yA=c(),sm=n("li"),jl=n("a"),wA=a("Automatic Differentiation"),$A=c(),rm=n("li"),Pl=n("a"),AA=a("Vectorization"),FA=c(),am=n("li"),Cl=n("a"),xA=a("Parallelization"),EA=c(),Pt=n("div"),T(Ll.$$.fragment),MA=c(),gn=n("p"),zA=a("The "),im=n("code"),qA=a("FlaxAlbertPreTrainedModel"),jA=a(" forward method, overrides the "),lm=n("code"),PA=a("__call__"),CA=a(" special method."),LA=c(),T(Ys.$$.fragment),IA=c(),T(Zs.$$.fragment),eu=c(),_n=n("h2"),er=n("a"),dm=n("span"),T(Il.$$.fragment),OA=c(),cm=n("span"),NA=a("FlaxAlbertForQuestionAnswering"),tu=c(),Se=n("div"),T(Ol.$$.fragment),DA=c(),bn=n("p"),SA=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=n("code"),WA=a("span start logits"),UA=a(" and "),hm=n("code"),BA=a("span end logits"),RA=a(")."),HA=c(),Nl=n("p"),QA=a("This model inherits from "),Yd=n("a"),VA=a("FlaxPreTrainedModel"),KA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),JA=c(),Dl=n("p"),GA=a("This model is also a Flax Linen "),Sl=n("a"),XA=a("flax.linen.Module"),YA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZA=c(),mm=n("p"),eF=a("Finally, this model supports inherent JAX features such as:"),tF=c(),Gt=n("ul"),fm=n("li"),Wl=n("a"),oF=a("Just-In-Time (JIT) compilation"),nF=c(),um=n("li"),Ul=n("a"),sF=a("Automatic Differentiation"),rF=c(),gm=n("li"),Bl=n("a"),aF=a("Vectorization"),iF=c(),_m=n("li"),Rl=n("a"),lF=a("Parallelization"),dF=c(),Ct=n("div"),T(Hl.$$.fragment),cF=c(),vn=n("p"),pF=a("The "),bm=n("code"),hF=a("FlaxAlbertPreTrainedModel"),mF=a(" forward method, overrides the "),vm=n("code"),fF=a("__call__"),uF=a(" special method."),gF=c(),T(tr.$$.fragment),_F=c(),T(or.$$.fragment),this.h()},l(o){const v=a3('[data-svelte="svelte-1phssyn"]',document.head);d=s(v,"META",{name:!0,content:!0}),v.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Ql=r(h);m=s(Ql,"A",{id:!0,class:!0,href:!0});var km=r(m);_=s(km,"SPAN",{});var Tm=r(_);y(l.$$.fragment,Tm),Tm.forEach(t),km.forEach(t),f=p(Ql),E=s(Ql,"SPAN",{});var ym=r(E);fe=i(ym,"ALBERT"),ym.forEach(t),Ql.forEach(t),G=p(o),z=s(o,"H2",{class:!0});var Vl=r(z);Y=s(Vl,"A",{id:!0,class:!0,href:!0});var wm=r(Y);U=s(wm,"SPAN",{});var $m=r(U);y(ee.$$.fragment,$m),$m.forEach(t),wm.forEach(t),ue=p(Vl),B=s(Vl,"SPAN",{});var Am=r(B);ge=i(Am,"Overview"),Am.forEach(t),Vl.forEach(t),de=p(o),K=s(o,"P",{});var Kl=r(K);I=i(Kl,"The ALBERT model was proposed in "),te=s(Kl,"A",{href:!0,rel:!0});var Fm=r(te);X=i(Fm,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Fm.forEach(t),q=i(Kl,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),Kl.forEach(t),P=p(o),Z=s(o,"UL",{});var Jl=r(Z);R=s(Jl,"LI",{});var xm=r(R);_e=i(xm,"Splitting the embedding matrix into two smaller matrices."),xm.forEach(t),be=p(Jl),H=s(Jl,"LI",{});var Em=r(H);ve=i(Em,"Using repeating layers split among groups."),Em.forEach(t),Jl.forEach(t),ce=p(o),j=s(o,"P",{});var Mm=r(j);ke=i(Mm,"The abstract from the paper is the following:"),Mm.forEach(t),Q=p(o),oe=s(o,"P",{});var zm=r(oe);ie=s(zm,"EM",{});var qm=r(ie);V=i(qm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),qm.forEach(t),zm.forEach(t),pe=p(o),ne=s(o,"P",{});var jm=r(ne);O=i(jm,"Tips:"),jm.forEach(t),he=p(o),D=s(o,"UL",{});var Gl=r(D);le=s(Gl,"LI",{});var Pm=r(le);k=i(Pm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Pm.forEach(t),M=p(Gl),J=s(Gl,"LI",{});var Cm=r(J);Fe=i(Cm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Cm.forEach(t),Gl.forEach(t),Ae=p(o),C=s(o,"P",{});var Xt=r(C);xe=i(Xt,"This model was contributed by "),ye=s(Xt,"A",{href:!0,rel:!0});var Lm=r(ye);Ee=i(Lm,"lysandre"),Lm.forEach(t),N=i(Xt,`. This model jax version was contributed by
`),S=s(Xt,"A",{href:!0,rel:!0});var Im=r(S);Me=i(Im,"kamalkraj"),Im.forEach(t),ze=i(Xt,". The original code can be found "),W=s(Xt,"A",{href:!0,rel:!0});var Om=r(W);qe=i(Om,"here"),Om.forEach(t),je=i(Xt,"."),Xt.forEach(t),me=p(o),Te=s(o,"H2",{class:!0});var Xl=r(Te);wn=s(Xl,"A",{id:!0,class:!0,href:!0});var Nm=r(wn);Mc=s(Nm,"SPAN",{});var Dm=r(Mc);y(Fr.$$.fragment,Dm),Dm.forEach(t),Nm.forEach(t),Tg=p(Xl),zc=s(Xl,"SPAN",{});var Sm=r(zc);yg=i(Sm,"AlbertConfig"),Sm.forEach(t),Xl.forEach(t),rf=p(o),bt=s(o,"DIV",{class:!0});var Yt=r(bt);y(xr.$$.fragment,Yt),wg=p(Yt),Ut=s(Yt,"P",{});var Zt=r(Ut);$g=i(Zt,"This is the configuration class to store the configuration of a "),rd=s(Zt,"A",{href:!0});var Wm=r(rd);Ag=i(Wm,"AlbertModel"),Wm.forEach(t),Fg=i(Zt," or a "),ad=s(Zt,"A",{href:!0});var Um=r(ad);xg=i(Um,"TFAlbertModel"),Um.forEach(t),Eg=i(Zt,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=s(Zt,"A",{href:!0,rel:!0});var Bm=r(Er);Mg=i(Bm,"albert-xxlarge-v2"),Bm.forEach(t),zg=i(Zt," architecture."),Zt.forEach(t),qg=p(Yt),bo=s(Yt,"P",{});var kn=r(bo);jg=i(kn,"Configuration objects inherit from "),id=s(kn,"A",{href:!0});var Rm=r(id);Pg=i(Rm,"PretrainedConfig"),Rm.forEach(t),Cg=i(kn,` and can be used to control the model outputs. Read the
documentation from `),ld=s(kn,"A",{href:!0});var Hm=r(ld);Lg=i(Hm,"PretrainedConfig"),Hm.forEach(t),Ig=i(kn," for more information."),kn.forEach(t),Og=p(Yt),y($n.$$.fragment,Yt),Yt.forEach(t),af=p(o),vo=s(o,"H2",{class:!0});var Yl=r(vo);An=s(Yl,"A",{id:!0,class:!0,href:!0});var Qm=r(An);qc=s(Qm,"SPAN",{});var Vm=r(qc);y(Mr.$$.fragment,Vm),Vm.forEach(t),Qm.forEach(t),Ng=p(Yl),jc=s(Yl,"SPAN",{});var Km=r(jc);Dg=i(Km,"AlbertTokenizer"),Km.forEach(t),Yl.forEach(t),lf=p(o),Pe=s(o,"DIV",{class:!0});var Je=r(Pe);y(zr.$$.fragment,Je),Sg=p(Je),qr=s(Je,"P",{});var Zl=r(qr);Wg=i(Zl,"Construct an ALBERT tokenizer. Based on "),jr=s(Zl,"A",{href:!0,rel:!0});var Jm=r(jr);Ug=i(Jm,"SentencePiece"),Jm.forEach(t),Bg=i(Zl,"."),Zl.forEach(t),Rg=p(Je),Pr=s(Je,"P",{});var ed=r(Pr);Hg=i(ed,"This tokenizer inherits from "),dd=s(ed,"A",{href:!0});var Gm=r(dd);Qg=i(Gm,"PreTrainedTokenizer"),Gm.forEach(t),Vg=i(ed,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ed.forEach(t),Kg=p(Je),to=s(Je,"DIV",{class:!0});var Tn=r(to);y(Cr.$$.fragment,Tn),Jg=p(Tn),Pc=s(Tn,"P",{});var Xm=r(Pc);Gg=i(Xm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xm.forEach(t),Xg=p(Tn),Lr=s(Tn,"UL",{});var td=r(Lr);cd=s(td,"LI",{});var Zd=r(cd);Yg=i(Zd,"single sequence: "),Cc=s(Zd,"CODE",{});var Ym=r(Cc);Zg=i(Ym,"[CLS] X [SEP]"),Ym.forEach(t),Zd.forEach(t),e_=p(td),pd=s(td,"LI",{});var ec=r(pd);t_=i(ec,"pair of sequences: "),Lc=s(ec,"CODE",{});var Zm=r(Lc);o_=i(Zm,"[CLS] A [SEP] B [SEP]"),Zm.forEach(t),ec.forEach(t),td.forEach(t),Tn.forEach(t),n_=p(Je),Fn=s(Je,"DIV",{class:!0});var od=r(Fn);y(Ir.$$.fragment,od),s_=p(od),Or=s(od,"P",{});var nd=r(Or);r_=i(nd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ic=s(nd,"CODE",{});var ef=r(Ic);a_=i(ef,"prepare_for_model"),ef.forEach(t),i_=i(nd," method."),nd.forEach(t),od.forEach(t),l_=p(Je),kt=s(Je,"DIV",{class:!0});var eo=r(kt);y(Nr.$$.fragment,eo),d_=p(eo),Oc=s(eo,"P",{});var tf=r(Oc);c_=i(tf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),tf.forEach(t),p_=p(eo),y(xn.$$.fragment,eo),h_=p(eo),ko=s(eo,"P",{});var yn=r(ko);m_=i(yn,"If "),Nc=s(yn,"CODE",{});var of=r(Nc);f_=i(of,"token_ids_1"),of.forEach(t),u_=i(yn," is "),Dc=s(yn,"CODE",{});var nf=r(Dc);g_=i(nf,"None"),nf.forEach(t),__=i(yn,", this method only returns the first portion of the mask (0s)."),yn.forEach(t),eo.forEach(t),b_=p(Je),hd=s(Je,"DIV",{class:!0});var sf=r(hd);y(Dr.$$.fragment,sf),sf.forEach(t),Je.forEach(t),df=p(o),To=s(o,"H2",{class:!0});var sd=r(To);En=s(sd,"A",{id:!0,class:!0,href:!0});var kF=r(En);Sc=s(kF,"SPAN",{});var TF=r(Sc);y(Sr.$$.fragment,TF),TF.forEach(t),kF.forEach(t),v_=p(sd),Wc=s(sd,"SPAN",{});var yF=r(Wc);k_=i(yF,"AlbertTokenizerFast"),yF.forEach(t),sd.forEach(t),cf=p(o),vt=s(o,"DIV",{class:!0});var nr=r(vt);y(Wr.$$.fragment,nr),T_=p(nr),Bt=s(nr,"P",{});var sr=r(Bt);y_=i(sr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Uc=s(sr,"EM",{});var wF=r(Uc);w_=i(wF,"tokenizers"),wF.forEach(t),$_=i(sr,` library). Based on
`),Ur=s(sr,"A",{href:!0,rel:!0});var $F=r(Ur);A_=i($F,"Unigram"),$F.forEach(t),F_=i(sr,`. This
tokenizer inherits from `),md=s(sr,"A",{href:!0});var AF=r(md);x_=i(AF,"PreTrainedTokenizerFast"),AF.forEach(t),E_=i(sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),sr.forEach(t),M_=p(nr),oo=s(nr,"DIV",{class:!0});var tc=r(oo);y(Br.$$.fragment,tc),z_=p(tc),Bc=s(tc,"P",{});var FF=r(Bc);q_=i(FF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),FF.forEach(t),j_=p(tc),Rr=s(tc,"UL",{});var nu=r(Rr);fd=s(nu,"LI",{});var bF=r(fd);P_=i(bF,"single sequence: "),Rc=s(bF,"CODE",{});var xF=r(Rc);C_=i(xF,"[CLS] X [SEP]"),xF.forEach(t),bF.forEach(t),L_=p(nu),ud=s(nu,"LI",{});var vF=r(ud);I_=i(vF,"pair of sequences: "),Hc=s(vF,"CODE",{});var EF=r(Hc);O_=i(EF,"[CLS] A [SEP] B [SEP]"),EF.forEach(t),vF.forEach(t),nu.forEach(t),tc.forEach(t),N_=p(nr),Tt=s(nr,"DIV",{class:!0});var rr=r(Tt);y(Hr.$$.fragment,rr),D_=p(rr),Qc=s(rr,"P",{});var MF=r(Qc);S_=i(MF,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),MF.forEach(t),W_=p(rr),y(Mn.$$.fragment,rr),U_=p(rr),Vc=s(rr,"P",{});var zF=r(Vc);B_=i(zF,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),zF.forEach(t),rr.forEach(t),nr.forEach(t),pf=p(o),yo=s(o,"H2",{class:!0});var su=r(yo);zn=s(su,"A",{id:!0,class:!0,href:!0});var qF=r(zn);Kc=s(qF,"SPAN",{});var jF=r(Kc);y(Qr.$$.fragment,jF),jF.forEach(t),qF.forEach(t),R_=p(su),Jc=s(su,"SPAN",{});var PF=r(Jc);H_=i(PF,"Albert specific outputs"),PF.forEach(t),su.forEach(t),hf=p(o),wo=s(o,"DIV",{class:!0});var ru=r(wo);y(Vr.$$.fragment,ru),Q_=p(ru),Kr=s(ru,"P",{});var au=r(Kr);V_=i(au,"Output type of "),gd=s(au,"A",{href:!0});var CF=r(gd);K_=i(CF,"AlbertForPreTraining"),CF.forEach(t),J_=i(au,"."),au.forEach(t),ru.forEach(t),mf=p(o),$o=s(o,"DIV",{class:!0});var iu=r($o);y(Jr.$$.fragment,iu),G_=p(iu),Gr=s(iu,"P",{});var lu=r(Gr);X_=i(lu,"Output type of "),_d=s(lu,"A",{href:!0});var LF=r(_d);Y_=i(LF,"TFAlbertForPreTraining"),LF.forEach(t),Z_=i(lu,"."),lu.forEach(t),iu.forEach(t),ff=p(o),Ao=s(o,"H2",{class:!0});var du=r(Ao);qn=s(du,"A",{id:!0,class:!0,href:!0});var IF=r(qn);Gc=s(IF,"SPAN",{});var OF=r(Gc);y(Xr.$$.fragment,OF),OF.forEach(t),IF.forEach(t),eb=p(du),Xc=s(du,"SPAN",{});var NF=r(Xc);tb=i(NF,"AlbertModel"),NF.forEach(t),du.forEach(t),uf=p(o),Ge=s(o,"DIV",{class:!0});var no=r(Ge);y(Yr.$$.fragment,no),ob=p(no),Yc=s(no,"P",{});var DF=r(Yc);nb=i(DF,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),DF.forEach(t),sb=p(no),Zr=s(no,"P",{});var cu=r(Zr);rb=i(cu,"This model inherits from "),bd=s(cu,"A",{href:!0});var SF=r(bd);ab=i(SF,"PreTrainedModel"),SF.forEach(t),ib=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),lb=p(no),ea=s(no,"P",{});var pu=r(ea);db=i(pu,"This model is also a PyTorch "),ta=s(pu,"A",{href:!0,rel:!0});var WF=r(ta);cb=i(WF,"torch.nn.Module"),WF.forEach(t),pb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),hb=p(no),yt=s(no,"DIV",{class:!0});var ar=r(yt);y(oa.$$.fragment,ar),mb=p(ar),Fo=s(ar,"P",{});var oc=r(Fo);fb=i(oc,"The "),vd=s(oc,"A",{href:!0});var UF=r(vd);ub=i(UF,"AlbertModel"),UF.forEach(t),gb=i(oc," forward method, overrides the "),Zc=s(oc,"CODE",{});var BF=r(Zc);_b=i(BF,"__call__"),BF.forEach(t),bb=i(oc," special method."),oc.forEach(t),vb=p(ar),y(jn.$$.fragment,ar),kb=p(ar),y(Pn.$$.fragment,ar),ar.forEach(t),no.forEach(t),gf=p(o),xo=s(o,"H2",{class:!0});var hu=r(xo);Cn=s(hu,"A",{id:!0,class:!0,href:!0});var RF=r(Cn);ep=s(RF,"SPAN",{});var HF=r(ep);y(na.$$.fragment,HF),HF.forEach(t),RF.forEach(t),Tb=p(hu),tp=s(hu,"SPAN",{});var QF=r(tp);yb=i(QF,"AlbertForPreTraining"),QF.forEach(t),hu.forEach(t),_f=p(o),Xe=s(o,"DIV",{class:!0});var so=r(Xe);y(sa.$$.fragment,so),wb=p(so),Eo=s(so,"P",{});var nc=r(Eo);$b=i(nc,"Albert Model with two heads on top as done during the pretraining: a "),op=s(nc,"CODE",{});var VF=r(op);Ab=i(VF,"masked language modeling"),VF.forEach(t),Fb=i(nc,` head and a
`),np=s(nc,"CODE",{});var KF=r(np);xb=i(KF,"sentence order prediction (classification)"),KF.forEach(t),Eb=i(nc," head."),nc.forEach(t),Mb=p(so),ra=s(so,"P",{});var mu=r(ra);zb=i(mu,"This model inherits from "),kd=s(mu,"A",{href:!0});var JF=r(kd);qb=i(JF,"PreTrainedModel"),JF.forEach(t),jb=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mu.forEach(t),Pb=p(so),aa=s(so,"P",{});var fu=r(aa);Cb=i(fu,"This model is also a PyTorch "),ia=s(fu,"A",{href:!0,rel:!0});var GF=r(ia);Lb=i(GF,"torch.nn.Module"),GF.forEach(t),Ib=i(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),Ob=p(so),wt=s(so,"DIV",{class:!0});var ir=r(wt);y(la.$$.fragment,ir),Nb=p(ir),Mo=s(ir,"P",{});var sc=r(Mo);Db=i(sc,"The "),Td=s(sc,"A",{href:!0});var XF=r(Td);Sb=i(XF,"AlbertForPreTraining"),XF.forEach(t),Wb=i(sc," forward method, overrides the "),sp=s(sc,"CODE",{});var YF=r(sp);Ub=i(YF,"__call__"),YF.forEach(t),Bb=i(sc," special method."),sc.forEach(t),Rb=p(ir),y(Ln.$$.fragment,ir),Hb=p(ir),y(In.$$.fragment,ir),ir.forEach(t),so.forEach(t),bf=p(o),zo=s(o,"H2",{class:!0});var uu=r(zo);On=s(uu,"A",{id:!0,class:!0,href:!0});var ZF=r(On);rp=s(ZF,"SPAN",{});var e0=r(rp);y(da.$$.fragment,e0),e0.forEach(t),ZF.forEach(t),Qb=p(uu),ap=s(uu,"SPAN",{});var t0=r(ap);Vb=i(t0,"AlbertForMaskedLM"),t0.forEach(t),uu.forEach(t),vf=p(o),Ye=s(o,"DIV",{class:!0});var ro=r(Ye);y(ca.$$.fragment,ro),Kb=p(ro),pa=s(ro,"P",{});var gu=r(pa);Jb=i(gu,"Albert Model with a "),ip=s(gu,"CODE",{});var o0=r(ip);Gb=i(o0,"language modeling"),o0.forEach(t),Xb=i(gu," head on top."),gu.forEach(t),Yb=p(ro),ha=s(ro,"P",{});var _u=r(ha);Zb=i(_u,"This model inherits from "),yd=s(_u,"A",{href:!0});var n0=r(yd);ev=i(n0,"PreTrainedModel"),n0.forEach(t),tv=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),ov=p(ro),ma=s(ro,"P",{});var bu=r(ma);nv=i(bu,"This model is also a PyTorch "),fa=s(bu,"A",{href:!0,rel:!0});var s0=r(fa);sv=i(s0,"torch.nn.Module"),s0.forEach(t),rv=i(bu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bu.forEach(t),av=p(ro),nt=s(ro,"DIV",{class:!0});var ao=r(nt);y(ua.$$.fragment,ao),iv=p(ao),qo=s(ao,"P",{});var rc=r(qo);lv=i(rc,"The "),wd=s(rc,"A",{href:!0});var r0=r(wd);dv=i(r0,"AlbertForMaskedLM"),r0.forEach(t),cv=i(rc," forward method, overrides the "),lp=s(rc,"CODE",{});var a0=r(lp);pv=i(a0,"__call__"),a0.forEach(t),hv=i(rc," special method."),rc.forEach(t),mv=p(ao),y(Nn.$$.fragment,ao),fv=p(ao),y(Dn.$$.fragment,ao),uv=p(ao),y(Sn.$$.fragment,ao),ao.forEach(t),ro.forEach(t),kf=p(o),jo=s(o,"H2",{class:!0});var vu=r(jo);Wn=s(vu,"A",{id:!0,class:!0,href:!0});var i0=r(Wn);dp=s(i0,"SPAN",{});var l0=r(dp);y(ga.$$.fragment,l0),l0.forEach(t),i0.forEach(t),gv=p(vu),cp=s(vu,"SPAN",{});var d0=r(cp);_v=i(d0,"AlbertForSequenceClassification"),d0.forEach(t),vu.forEach(t),Tf=p(o),Ze=s(o,"DIV",{class:!0});var io=r(Ze);y(_a.$$.fragment,io),bv=p(io),pp=s(io,"P",{});var c0=r(pp);vv=i(c0,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),c0.forEach(t),kv=p(io),ba=s(io,"P",{});var ku=r(ba);Tv=i(ku,"This model inherits from "),$d=s(ku,"A",{href:!0});var p0=r($d);yv=i(p0,"PreTrainedModel"),p0.forEach(t),wv=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),$v=p(io),va=s(io,"P",{});var Tu=r(va);Av=i(Tu,"This model is also a PyTorch "),ka=s(Tu,"A",{href:!0,rel:!0});var h0=r(ka);Fv=i(h0,"torch.nn.Module"),h0.forEach(t),xv=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),Ev=p(io),We=s(io,"DIV",{class:!0});var ct=r(We);y(Ta.$$.fragment,ct),Mv=p(ct),Po=s(ct,"P",{});var ac=r(Po);zv=i(ac,"The "),Ad=s(ac,"A",{href:!0});var m0=r(Ad);qv=i(m0,"AlbertForSequenceClassification"),m0.forEach(t),jv=i(ac," forward method, overrides the "),hp=s(ac,"CODE",{});var f0=r(hp);Pv=i(f0,"__call__"),f0.forEach(t),Cv=i(ac," special method."),ac.forEach(t),Lv=p(ct),y(Un.$$.fragment,ct),Iv=p(ct),y(Bn.$$.fragment,ct),Ov=p(ct),y(Rn.$$.fragment,ct),Nv=p(ct),y(Hn.$$.fragment,ct),Dv=p(ct),y(Qn.$$.fragment,ct),ct.forEach(t),io.forEach(t),yf=p(o),Co=s(o,"H2",{class:!0});var yu=r(Co);Vn=s(yu,"A",{id:!0,class:!0,href:!0});var u0=r(Vn);mp=s(u0,"SPAN",{});var g0=r(mp);y(ya.$$.fragment,g0),g0.forEach(t),u0.forEach(t),Sv=p(yu),fp=s(yu,"SPAN",{});var _0=r(fp);Wv=i(_0,"AlbertForMultipleChoice"),_0.forEach(t),yu.forEach(t),wf=p(o),et=s(o,"DIV",{class:!0});var lo=r(et);y(wa.$$.fragment,lo),Uv=p(lo),up=s(lo,"P",{});var b0=r(up);Bv=i(b0,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b0.forEach(t),Rv=p(lo),$a=s(lo,"P",{});var wu=r($a);Hv=i(wu,"This model inherits from "),Fd=s(wu,"A",{href:!0});var v0=r(Fd);Qv=i(v0,"PreTrainedModel"),v0.forEach(t),Vv=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),Kv=p(lo),Aa=s(lo,"P",{});var $u=r(Aa);Jv=i($u,"This model is also a PyTorch "),Fa=s($u,"A",{href:!0,rel:!0});var k0=r(Fa);Gv=i(k0,"torch.nn.Module"),k0.forEach(t),Xv=i($u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u.forEach(t),Yv=p(lo),$t=s(lo,"DIV",{class:!0});var lr=r($t);y(xa.$$.fragment,lr),Zv=p(lr),Lo=s(lr,"P",{});var ic=r(Lo);ek=i(ic,"The "),xd=s(ic,"A",{href:!0});var T0=r(xd);tk=i(T0,"AlbertForMultipleChoice"),T0.forEach(t),ok=i(ic," forward method, overrides the "),gp=s(ic,"CODE",{});var y0=r(gp);nk=i(y0,"__call__"),y0.forEach(t),sk=i(ic," special method."),ic.forEach(t),rk=p(lr),y(Kn.$$.fragment,lr),ak=p(lr),y(Jn.$$.fragment,lr),lr.forEach(t),lo.forEach(t),$f=p(o),Io=s(o,"H2",{class:!0});var Au=r(Io);Gn=s(Au,"A",{id:!0,class:!0,href:!0});var w0=r(Gn);_p=s(w0,"SPAN",{});var $0=r(_p);y(Ea.$$.fragment,$0),$0.forEach(t),w0.forEach(t),ik=p(Au),bp=s(Au,"SPAN",{});var A0=r(bp);lk=i(A0,"AlbertForTokenClassification"),A0.forEach(t),Au.forEach(t),Af=p(o),tt=s(o,"DIV",{class:!0});var co=r(tt);y(Ma.$$.fragment,co),dk=p(co),vp=s(co,"P",{});var F0=r(vp);ck=i(F0,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),F0.forEach(t),pk=p(co),za=s(co,"P",{});var Fu=r(za);hk=i(Fu,"This model inherits from "),Ed=s(Fu,"A",{href:!0});var x0=r(Ed);mk=i(x0,"PreTrainedModel"),x0.forEach(t),fk=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),uk=p(co),qa=s(co,"P",{});var xu=r(qa);gk=i(xu,"This model is also a PyTorch "),ja=s(xu,"A",{href:!0,rel:!0});var E0=r(ja);_k=i(E0,"torch.nn.Module"),E0.forEach(t),bk=i(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),vk=p(co),st=s(co,"DIV",{class:!0});var po=r(st);y(Pa.$$.fragment,po),kk=p(po),Oo=s(po,"P",{});var lc=r(Oo);Tk=i(lc,"The "),Md=s(lc,"A",{href:!0});var M0=r(Md);yk=i(M0,"AlbertForTokenClassification"),M0.forEach(t),wk=i(lc," forward method, overrides the "),kp=s(lc,"CODE",{});var z0=r(kp);$k=i(z0,"__call__"),z0.forEach(t),Ak=i(lc," special method."),lc.forEach(t),Fk=p(po),y(Xn.$$.fragment,po),xk=p(po),y(Yn.$$.fragment,po),Ek=p(po),y(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),Ff=p(o),No=s(o,"H2",{class:!0});var Eu=r(No);es=s(Eu,"A",{id:!0,class:!0,href:!0});var q0=r(es);Tp=s(q0,"SPAN",{});var j0=r(Tp);y(Ca.$$.fragment,j0),j0.forEach(t),q0.forEach(t),Mk=p(Eu),yp=s(Eu,"SPAN",{});var P0=r(yp);zk=i(P0,"AlbertForQuestionAnswering"),P0.forEach(t),Eu.forEach(t),xf=p(o),ot=s(o,"DIV",{class:!0});var ho=r(ot);y(La.$$.fragment,ho),qk=p(ho),Do=s(ho,"P",{});var dc=r(Do);jk=i(dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=s(dc,"CODE",{});var C0=r(wp);Pk=i(C0,"span start logits"),C0.forEach(t),Ck=i(dc," and "),$p=s(dc,"CODE",{});var L0=r($p);Lk=i(L0,"span end logits"),L0.forEach(t),Ik=i(dc,")."),dc.forEach(t),Ok=p(ho),Ia=s(ho,"P",{});var Mu=r(Ia);Nk=i(Mu,"This model inherits from "),zd=s(Mu,"A",{href:!0});var I0=r(zd);Dk=i(I0,"PreTrainedModel"),I0.forEach(t),Sk=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),Wk=p(ho),Oa=s(ho,"P",{});var zu=r(Oa);Uk=i(zu,"This model is also a PyTorch "),Na=s(zu,"A",{href:!0,rel:!0});var O0=r(Na);Bk=i(O0,"torch.nn.Module"),O0.forEach(t),Rk=i(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Hk=p(ho),rt=s(ho,"DIV",{class:!0});var mo=r(rt);y(Da.$$.fragment,mo),Qk=p(mo),So=s(mo,"P",{});var cc=r(So);Vk=i(cc,"The "),qd=s(cc,"A",{href:!0});var N0=r(qd);Kk=i(N0,"AlbertForQuestionAnswering"),N0.forEach(t),Jk=i(cc," forward method, overrides the "),Ap=s(cc,"CODE",{});var D0=r(Ap);Gk=i(D0,"__call__"),D0.forEach(t),Xk=i(cc," special method."),cc.forEach(t),Yk=p(mo),y(ts.$$.fragment,mo),Zk=p(mo),y(os.$$.fragment,mo),eT=p(mo),y(ns.$$.fragment,mo),mo.forEach(t),ho.forEach(t),Ef=p(o),Wo=s(o,"H2",{class:!0});var qu=r(Wo);ss=s(qu,"A",{id:!0,class:!0,href:!0});var S0=r(ss);Fp=s(S0,"SPAN",{});var W0=r(Fp);y(Sa.$$.fragment,W0),W0.forEach(t),S0.forEach(t),tT=p(qu),xp=s(qu,"SPAN",{});var U0=r(xp);oT=i(U0,"TFAlbertModel"),U0.forEach(t),qu.forEach(t),Mf=p(o),Ue=s(o,"DIV",{class:!0});var Lt=r(Ue);y(Wa.$$.fragment,Lt),nT=p(Lt),Ep=s(Lt,"P",{});var B0=r(Ep);sT=i(B0,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),B0.forEach(t),rT=p(Lt),Ua=s(Lt,"P",{});var ju=r(Ua);aT=i(ju,"This model inherits from "),jd=s(ju,"A",{href:!0});var R0=r(jd);iT=i(R0,"TFPreTrainedModel"),R0.forEach(t),lT=i(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),dT=p(Lt),Ba=s(Lt,"P",{});var Pu=r(Ba);cT=i(Pu,"This model is also a "),Ra=s(Pu,"A",{href:!0,rel:!0});var H0=r(Ra);pT=i(H0,"tf.keras.Model"),H0.forEach(t),hT=i(Pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu.forEach(t),mT=p(Lt),y(rs.$$.fragment,Lt),fT=p(Lt),At=s(Lt,"DIV",{class:!0});var dr=r(At);y(Ha.$$.fragment,dr),uT=p(dr),Uo=s(dr,"P",{});var pc=r(Uo);gT=i(pc,"The "),Pd=s(pc,"A",{href:!0});var Q0=r(Pd);_T=i(Q0,"TFAlbertModel"),Q0.forEach(t),bT=i(pc," forward method, overrides the "),Mp=s(pc,"CODE",{});var V0=r(Mp);vT=i(V0,"__call__"),V0.forEach(t),kT=i(pc," special method."),pc.forEach(t),TT=p(dr),y(as.$$.fragment,dr),yT=p(dr),y(is.$$.fragment,dr),dr.forEach(t),Lt.forEach(t),zf=p(o),Bo=s(o,"H2",{class:!0});var Cu=r(Bo);ls=s(Cu,"A",{id:!0,class:!0,href:!0});var K0=r(ls);zp=s(K0,"SPAN",{});var J0=r(zp);y(Qa.$$.fragment,J0),J0.forEach(t),K0.forEach(t),wT=p(Cu),qp=s(Cu,"SPAN",{});var G0=r(qp);$T=i(G0,"TFAlbertForPreTraining"),G0.forEach(t),Cu.forEach(t),qf=p(o),Be=s(o,"DIV",{class:!0});var It=r(Be);y(Va.$$.fragment,It),AT=p(It),Ro=s(It,"P",{});var hc=r(Ro);FT=i(hc,"Albert Model with two heads on top for pretraining: a "),jp=s(hc,"CODE",{});var X0=r(jp);xT=i(X0,"masked language modeling"),X0.forEach(t),ET=i(hc," head and a "),Pp=s(hc,"CODE",{});var Y0=r(Pp);MT=i(Y0,"sentence order prediction"),Y0.forEach(t),zT=i(hc," (classification) head."),hc.forEach(t),qT=p(It),Ka=s(It,"P",{});var Lu=r(Ka);jT=i(Lu,"This model inherits from "),Cd=s(Lu,"A",{href:!0});var Z0=r(Cd);PT=i(Z0,"TFPreTrainedModel"),Z0.forEach(t),CT=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),LT=p(It),Ja=s(It,"P",{});var Iu=r(Ja);IT=i(Iu,"This model is also a "),Ga=s(Iu,"A",{href:!0,rel:!0});var ex=r(Ga);OT=i(ex,"tf.keras.Model"),ex.forEach(t),NT=i(Iu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu.forEach(t),DT=p(It),y(ds.$$.fragment,It),ST=p(It),Ft=s(It,"DIV",{class:!0});var cr=r(Ft);y(Xa.$$.fragment,cr),WT=p(cr),Ho=s(cr,"P",{});var mc=r(Ho);UT=i(mc,"The "),Ld=s(mc,"A",{href:!0});var tx=r(Ld);BT=i(tx,"TFAlbertForPreTraining"),tx.forEach(t),RT=i(mc," forward method, overrides the "),Cp=s(mc,"CODE",{});var ox=r(Cp);HT=i(ox,"__call__"),ox.forEach(t),QT=i(mc," special method."),mc.forEach(t),VT=p(cr),y(cs.$$.fragment,cr),KT=p(cr),y(ps.$$.fragment,cr),cr.forEach(t),It.forEach(t),jf=p(o),Qo=s(o,"H2",{class:!0});var Ou=r(Qo);hs=s(Ou,"A",{id:!0,class:!0,href:!0});var nx=r(hs);Lp=s(nx,"SPAN",{});var sx=r(Lp);y(Ya.$$.fragment,sx),sx.forEach(t),nx.forEach(t),JT=p(Ou),Ip=s(Ou,"SPAN",{});var rx=r(Ip);GT=i(rx,"TFAlbertForMaskedLM"),rx.forEach(t),Ou.forEach(t),Pf=p(o),Re=s(o,"DIV",{class:!0});var Ot=r(Re);y(Za.$$.fragment,Ot),XT=p(Ot),ei=s(Ot,"P",{});var Nu=r(ei);YT=i(Nu,"Albert Model with a "),Op=s(Nu,"CODE",{});var ax=r(Op);ZT=i(ax,"language modeling"),ax.forEach(t),ey=i(Nu," head on top."),Nu.forEach(t),ty=p(Ot),ti=s(Ot,"P",{});var Du=r(ti);oy=i(Du,"This model inherits from "),Id=s(Du,"A",{href:!0});var ix=r(Id);ny=i(ix,"TFPreTrainedModel"),ix.forEach(t),sy=i(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(t),ry=p(Ot),oi=s(Ot,"P",{});var Su=r(oi);ay=i(Su,"This model is also a "),ni=s(Su,"A",{href:!0,rel:!0});var lx=r(ni);iy=i(lx,"tf.keras.Model"),lx.forEach(t),ly=i(Su,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su.forEach(t),dy=p(Ot),y(ms.$$.fragment,Ot),cy=p(Ot),at=s(Ot,"DIV",{class:!0});var fo=r(at);y(si.$$.fragment,fo),py=p(fo),Vo=s(fo,"P",{});var fc=r(Vo);hy=i(fc,"The "),Od=s(fc,"A",{href:!0});var dx=r(Od);my=i(dx,"TFAlbertForMaskedLM"),dx.forEach(t),fy=i(fc," forward method, overrides the "),Np=s(fc,"CODE",{});var cx=r(Np);uy=i(cx,"__call__"),cx.forEach(t),gy=i(fc," special method."),fc.forEach(t),_y=p(fo),y(fs.$$.fragment,fo),by=p(fo),y(us.$$.fragment,fo),vy=p(fo),y(gs.$$.fragment,fo),fo.forEach(t),Ot.forEach(t),Cf=p(o),Ko=s(o,"H2",{class:!0});var Wu=r(Ko);_s=s(Wu,"A",{id:!0,class:!0,href:!0});var px=r(_s);Dp=s(px,"SPAN",{});var hx=r(Dp);y(ri.$$.fragment,hx),hx.forEach(t),px.forEach(t),ky=p(Wu),Sp=s(Wu,"SPAN",{});var mx=r(Sp);Ty=i(mx,"TFAlbertForSequenceClassification"),mx.forEach(t),Wu.forEach(t),Lf=p(o),He=s(o,"DIV",{class:!0});var Nt=r(He);y(ai.$$.fragment,Nt),yy=p(Nt),Wp=s(Nt,"P",{});var fx=r(Wp);wy=i(fx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fx.forEach(t),$y=p(Nt),ii=s(Nt,"P",{});var Uu=r(ii);Ay=i(Uu,"This model inherits from "),Nd=s(Uu,"A",{href:!0});var ux=r(Nd);Fy=i(ux,"TFPreTrainedModel"),ux.forEach(t),xy=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),Ey=p(Nt),li=s(Nt,"P",{});var Bu=r(li);My=i(Bu,"This model is also a "),di=s(Bu,"A",{href:!0,rel:!0});var gx=r(di);zy=i(gx,"tf.keras.Model"),gx.forEach(t),qy=i(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(t),jy=p(Nt),y(bs.$$.fragment,Nt),Py=p(Nt),it=s(Nt,"DIV",{class:!0});var uo=r(it);y(ci.$$.fragment,uo),Cy=p(uo),Jo=s(uo,"P",{});var uc=r(Jo);Ly=i(uc,"The "),Dd=s(uc,"A",{href:!0});var _x=r(Dd);Iy=i(_x,"TFAlbertForSequenceClassification"),_x.forEach(t),Oy=i(uc," forward method, overrides the "),Up=s(uc,"CODE",{});var bx=r(Up);Ny=i(bx,"__call__"),bx.forEach(t),Dy=i(uc," special method."),uc.forEach(t),Sy=p(uo),y(vs.$$.fragment,uo),Wy=p(uo),y(ks.$$.fragment,uo),Uy=p(uo),y(Ts.$$.fragment,uo),uo.forEach(t),Nt.forEach(t),If=p(o),Go=s(o,"H2",{class:!0});var Ru=r(Go);ys=s(Ru,"A",{id:!0,class:!0,href:!0});var vx=r(ys);Bp=s(vx,"SPAN",{});var kx=r(Bp);y(pi.$$.fragment,kx),kx.forEach(t),vx.forEach(t),By=p(Ru),Rp=s(Ru,"SPAN",{});var Tx=r(Rp);Ry=i(Tx,"TFAlbertForMultipleChoice"),Tx.forEach(t),Ru.forEach(t),Of=p(o),Qe=s(o,"DIV",{class:!0});var Dt=r(Qe);y(hi.$$.fragment,Dt),Hy=p(Dt),Hp=s(Dt,"P",{});var yx=r(Hp);Qy=i(yx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yx.forEach(t),Vy=p(Dt),mi=s(Dt,"P",{});var Hu=r(mi);Ky=i(Hu,"This model inherits from "),Sd=s(Hu,"A",{href:!0});var wx=r(Sd);Jy=i(wx,"TFPreTrainedModel"),wx.forEach(t),Gy=i(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),Xy=p(Dt),fi=s(Dt,"P",{});var Qu=r(fi);Yy=i(Qu,"This model is also a "),ui=s(Qu,"A",{href:!0,rel:!0});var $x=r(ui);Zy=i($x,"tf.keras.Model"),$x.forEach(t),e1=i(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(t),t1=p(Dt),y(ws.$$.fragment,Dt),o1=p(Dt),xt=s(Dt,"DIV",{class:!0});var pr=r(xt);y(gi.$$.fragment,pr),n1=p(pr),Xo=s(pr,"P",{});var gc=r(Xo);s1=i(gc,"The "),Wd=s(gc,"A",{href:!0});var Ax=r(Wd);r1=i(Ax,"TFAlbertForMultipleChoice"),Ax.forEach(t),a1=i(gc," forward method, overrides the "),Qp=s(gc,"CODE",{});var Fx=r(Qp);i1=i(Fx,"__call__"),Fx.forEach(t),l1=i(gc," special method."),gc.forEach(t),d1=p(pr),y($s.$$.fragment,pr),c1=p(pr),y(As.$$.fragment,pr),pr.forEach(t),Dt.forEach(t),Nf=p(o),Yo=s(o,"H2",{class:!0});var Vu=r(Yo);Fs=s(Vu,"A",{id:!0,class:!0,href:!0});var xx=r(Fs);Vp=s(xx,"SPAN",{});var Ex=r(Vp);y(_i.$$.fragment,Ex),Ex.forEach(t),xx.forEach(t),p1=p(Vu),Kp=s(Vu,"SPAN",{});var Mx=r(Kp);h1=i(Mx,"TFAlbertForTokenClassification"),Mx.forEach(t),Vu.forEach(t),Df=p(o),Ve=s(o,"DIV",{class:!0});var St=r(Ve);y(bi.$$.fragment,St),m1=p(St),Jp=s(St,"P",{});var zx=r(Jp);f1=i(zx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zx.forEach(t),u1=p(St),vi=s(St,"P",{});var Ku=r(vi);g1=i(Ku,"This model inherits from "),Ud=s(Ku,"A",{href:!0});var qx=r(Ud);_1=i(qx,"TFPreTrainedModel"),qx.forEach(t),b1=i(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(t),v1=p(St),ki=s(St,"P",{});var Ju=r(ki);k1=i(Ju,"This model is also a "),Ti=s(Ju,"A",{href:!0,rel:!0});var jx=r(Ti);T1=i(jx,"tf.keras.Model"),jx.forEach(t),y1=i(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),w1=p(St),y(xs.$$.fragment,St),$1=p(St),lt=s(St,"DIV",{class:!0});var go=r(lt);y(yi.$$.fragment,go),A1=p(go),Zo=s(go,"P",{});var _c=r(Zo);F1=i(_c,"The "),Bd=s(_c,"A",{href:!0});var Px=r(Bd);x1=i(Px,"TFAlbertForTokenClassification"),Px.forEach(t),E1=i(_c," forward method, overrides the "),Gp=s(_c,"CODE",{});var Cx=r(Gp);M1=i(Cx,"__call__"),Cx.forEach(t),z1=i(_c," special method."),_c.forEach(t),q1=p(go),y(Es.$$.fragment,go),j1=p(go),y(Ms.$$.fragment,go),P1=p(go),y(zs.$$.fragment,go),go.forEach(t),St.forEach(t),Sf=p(o),en=s(o,"H2",{class:!0});var Gu=r(en);qs=s(Gu,"A",{id:!0,class:!0,href:!0});var Lx=r(qs);Xp=s(Lx,"SPAN",{});var Ix=r(Xp);y(wi.$$.fragment,Ix),Ix.forEach(t),Lx.forEach(t),C1=p(Gu),Yp=s(Gu,"SPAN",{});var Ox=r(Yp);L1=i(Ox,"TFAlbertForQuestionAnswering"),Ox.forEach(t),Gu.forEach(t),Wf=p(o),Ke=s(o,"DIV",{class:!0});var Wt=r(Ke);y($i.$$.fragment,Wt),I1=p(Wt),tn=s(Wt,"P",{});var bc=r(tn);O1=i(bc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=s(bc,"CODE",{});var Nx=r(Zp);N1=i(Nx,"span start logits"),Nx.forEach(t),D1=i(bc," and "),eh=s(bc,"CODE",{});var Dx=r(eh);S1=i(Dx,"span end logits"),Dx.forEach(t),W1=i(bc,")."),bc.forEach(t),U1=p(Wt),Ai=s(Wt,"P",{});var Xu=r(Ai);B1=i(Xu,"This model inherits from "),Rd=s(Xu,"A",{href:!0});var Sx=r(Rd);R1=i(Sx,"TFPreTrainedModel"),Sx.forEach(t),H1=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Q1=p(Wt),Fi=s(Wt,"P",{});var Yu=r(Fi);V1=i(Yu,"This model is also a "),xi=s(Yu,"A",{href:!0,rel:!0});var Wx=r(xi);K1=i(Wx,"tf.keras.Model"),Wx.forEach(t),J1=i(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),G1=p(Wt),y(js.$$.fragment,Wt),X1=p(Wt),dt=s(Wt,"DIV",{class:!0});var _o=r(dt);y(Ei.$$.fragment,_o),Y1=p(_o),on=s(_o,"P",{});var vc=r(on);Z1=i(vc,"The "),Hd=s(vc,"A",{href:!0});var Ux=r(Hd);e2=i(Ux,"TFAlbertForQuestionAnswering"),Ux.forEach(t),t2=i(vc," forward method, overrides the "),th=s(vc,"CODE",{});var Bx=r(th);o2=i(Bx,"__call__"),Bx.forEach(t),n2=i(vc," special method."),vc.forEach(t),s2=p(_o),y(Ps.$$.fragment,_o),r2=p(_o),y(Cs.$$.fragment,_o),a2=p(_o),y(Ls.$$.fragment,_o),_o.forEach(t),Wt.forEach(t),Uf=p(o),nn=s(o,"H2",{class:!0});var Zu=r(nn);Is=s(Zu,"A",{id:!0,class:!0,href:!0});var Rx=r(Is);oh=s(Rx,"SPAN",{});var Hx=r(oh);y(Mi.$$.fragment,Hx),Hx.forEach(t),Rx.forEach(t),i2=p(Zu),nh=s(Zu,"SPAN",{});var Qx=r(nh);l2=i(Qx,"FlaxAlbertModel"),Qx.forEach(t),Zu.forEach(t),Bf=p(o),Ce=s(o,"DIV",{class:!0});var pt=r(Ce);y(zi.$$.fragment,pt),d2=p(pt),sh=s(pt,"P",{});var Vx=r(sh);c2=i(Vx,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Vx.forEach(t),p2=p(pt),qi=s(pt,"P",{});var eg=r(qi);h2=i(eg,"This model inherits from "),Qd=s(eg,"A",{href:!0});var Kx=r(Qd);m2=i(Kx,"FlaxPreTrainedModel"),Kx.forEach(t),f2=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),u2=p(pt),ji=s(pt,"P",{});var tg=r(ji);g2=i(tg,"This model is also a Flax Linen "),Pi=s(tg,"A",{href:!0,rel:!0});var Jx=r(Pi);_2=i(Jx,"flax.linen.Module"),Jx.forEach(t),b2=i(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),v2=p(pt),rh=s(pt,"P",{});var Gx=r(rh);k2=i(Gx,"Finally, this model supports inherent JAX features such as:"),Gx.forEach(t),T2=p(pt),Rt=s(pt,"UL",{});var hr=r(Rt);ah=s(hr,"LI",{});var Xx=r(ah);Ci=s(Xx,"A",{href:!0,rel:!0});var Yx=r(Ci);y2=i(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Xx.forEach(t),w2=p(hr),ih=s(hr,"LI",{});var Zx=r(ih);Li=s(Zx,"A",{href:!0,rel:!0});var e4=r(Li);$2=i(e4,"Automatic Differentiation"),e4.forEach(t),Zx.forEach(t),A2=p(hr),lh=s(hr,"LI",{});var t4=r(lh);Ii=s(t4,"A",{href:!0,rel:!0});var o4=r(Ii);F2=i(o4,"Vectorization"),o4.forEach(t),t4.forEach(t),x2=p(hr),dh=s(hr,"LI",{});var n4=r(dh);Oi=s(n4,"A",{href:!0,rel:!0});var s4=r(Oi);E2=i(s4,"Parallelization"),s4.forEach(t),n4.forEach(t),hr.forEach(t),M2=p(pt),Et=s(pt,"DIV",{class:!0});var mr=r(Et);y(Ni.$$.fragment,mr),z2=p(mr),sn=s(mr,"P",{});var kc=r(sn);q2=i(kc,"The "),ch=s(kc,"CODE",{});var r4=r(ch);j2=i(r4,"FlaxAlbertPreTrainedModel"),r4.forEach(t),P2=i(kc," forward method, overrides the "),ph=s(kc,"CODE",{});var a4=r(ph);C2=i(a4,"__call__"),a4.forEach(t),L2=i(kc," special method."),kc.forEach(t),I2=p(mr),y(Os.$$.fragment,mr),O2=p(mr),y(Ns.$$.fragment,mr),mr.forEach(t),pt.forEach(t),Rf=p(o),rn=s(o,"H2",{class:!0});var og=r(rn);Ds=s(og,"A",{id:!0,class:!0,href:!0});var i4=r(Ds);hh=s(i4,"SPAN",{});var l4=r(hh);y(Di.$$.fragment,l4),l4.forEach(t),i4.forEach(t),N2=p(og),mh=s(og,"SPAN",{});var d4=r(mh);D2=i(d4,"FlaxAlbertForPreTraining"),d4.forEach(t),og.forEach(t),Hf=p(o),Le=s(o,"DIV",{class:!0});var ht=r(Le);y(Si.$$.fragment,ht),S2=p(ht),an=s(ht,"P",{});var Tc=r(an);W2=i(Tc,"Albert Model with two heads on top as done during the pretraining: a "),fh=s(Tc,"CODE",{});var c4=r(fh);U2=i(c4,"masked language modeling"),c4.forEach(t),B2=i(Tc,` head and a
`),uh=s(Tc,"CODE",{});var p4=r(uh);R2=i(p4,"sentence order prediction (classification)"),p4.forEach(t),H2=i(Tc," head."),Tc.forEach(t),Q2=p(ht),Wi=s(ht,"P",{});var ng=r(Wi);V2=i(ng,"This model inherits from "),Vd=s(ng,"A",{href:!0});var h4=r(Vd);K2=i(h4,"FlaxPreTrainedModel"),h4.forEach(t),J2=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),G2=p(ht),Ui=s(ht,"P",{});var sg=r(Ui);X2=i(sg,"This model is also a Flax Linen "),Bi=s(sg,"A",{href:!0,rel:!0});var m4=r(Bi);Y2=i(m4,"flax.linen.Module"),m4.forEach(t),Z2=i(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),ew=p(ht),gh=s(ht,"P",{});var f4=r(gh);tw=i(f4,"Finally, this model supports inherent JAX features such as:"),f4.forEach(t),ow=p(ht),Ht=s(ht,"UL",{});var fr=r(Ht);_h=s(fr,"LI",{});var u4=r(_h);Ri=s(u4,"A",{href:!0,rel:!0});var g4=r(Ri);nw=i(g4,"Just-In-Time (JIT) compilation"),g4.forEach(t),u4.forEach(t),sw=p(fr),bh=s(fr,"LI",{});var _4=r(bh);Hi=s(_4,"A",{href:!0,rel:!0});var b4=r(Hi);rw=i(b4,"Automatic Differentiation"),b4.forEach(t),_4.forEach(t),aw=p(fr),vh=s(fr,"LI",{});var v4=r(vh);Qi=s(v4,"A",{href:!0,rel:!0});var k4=r(Qi);iw=i(k4,"Vectorization"),k4.forEach(t),v4.forEach(t),lw=p(fr),kh=s(fr,"LI",{});var T4=r(kh);Vi=s(T4,"A",{href:!0,rel:!0});var y4=r(Vi);dw=i(y4,"Parallelization"),y4.forEach(t),T4.forEach(t),fr.forEach(t),cw=p(ht),Mt=s(ht,"DIV",{class:!0});var ur=r(Mt);y(Ki.$$.fragment,ur),pw=p(ur),ln=s(ur,"P",{});var yc=r(ln);hw=i(yc,"The "),Th=s(yc,"CODE",{});var w4=r(Th);mw=i(w4,"FlaxAlbertPreTrainedModel"),w4.forEach(t),fw=i(yc," forward method, overrides the "),yh=s(yc,"CODE",{});var $4=r(yh);uw=i($4,"__call__"),$4.forEach(t),gw=i(yc," special method."),yc.forEach(t),_w=p(ur),y(Ss.$$.fragment,ur),bw=p(ur),y(Ws.$$.fragment,ur),ur.forEach(t),ht.forEach(t),Qf=p(o),dn=s(o,"H2",{class:!0});var rg=r(dn);Us=s(rg,"A",{id:!0,class:!0,href:!0});var A4=r(Us);wh=s(A4,"SPAN",{});var F4=r(wh);y(Ji.$$.fragment,F4),F4.forEach(t),A4.forEach(t),vw=p(rg),$h=s(rg,"SPAN",{});var x4=r($h);kw=i(x4,"FlaxAlbertForMaskedLM"),x4.forEach(t),rg.forEach(t),Vf=p(o),Ie=s(o,"DIV",{class:!0});var mt=r(Ie);y(Gi.$$.fragment,mt),Tw=p(mt),Xi=s(mt,"P",{});var ag=r(Xi);yw=i(ag,"Albert Model with a "),Ah=s(ag,"CODE",{});var E4=r(Ah);ww=i(E4,"language modeling"),E4.forEach(t),$w=i(ag," head on top."),ag.forEach(t),Aw=p(mt),Yi=s(mt,"P",{});var ig=r(Yi);Fw=i(ig,"This model inherits from "),Kd=s(ig,"A",{href:!0});var M4=r(Kd);xw=i(M4,"FlaxPreTrainedModel"),M4.forEach(t),Ew=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),Mw=p(mt),Zi=s(mt,"P",{});var lg=r(Zi);zw=i(lg,"This model is also a Flax Linen "),el=s(lg,"A",{href:!0,rel:!0});var z4=r(el);qw=i(z4,"flax.linen.Module"),z4.forEach(t),jw=i(lg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lg.forEach(t),Pw=p(mt),Fh=s(mt,"P",{});var q4=r(Fh);Cw=i(q4,"Finally, this model supports inherent JAX features such as:"),q4.forEach(t),Lw=p(mt),Qt=s(mt,"UL",{});var gr=r(Qt);xh=s(gr,"LI",{});var j4=r(xh);tl=s(j4,"A",{href:!0,rel:!0});var P4=r(tl);Iw=i(P4,"Just-In-Time (JIT) compilation"),P4.forEach(t),j4.forEach(t),Ow=p(gr),Eh=s(gr,"LI",{});var C4=r(Eh);ol=s(C4,"A",{href:!0,rel:!0});var L4=r(ol);Nw=i(L4,"Automatic Differentiation"),L4.forEach(t),C4.forEach(t),Dw=p(gr),Mh=s(gr,"LI",{});var I4=r(Mh);nl=s(I4,"A",{href:!0,rel:!0});var O4=r(nl);Sw=i(O4,"Vectorization"),O4.forEach(t),I4.forEach(t),Ww=p(gr),zh=s(gr,"LI",{});var N4=r(zh);sl=s(N4,"A",{href:!0,rel:!0});var D4=r(sl);Uw=i(D4,"Parallelization"),D4.forEach(t),N4.forEach(t),gr.forEach(t),Bw=p(mt),zt=s(mt,"DIV",{class:!0});var _r=r(zt);y(rl.$$.fragment,_r),Rw=p(_r),cn=s(_r,"P",{});var wc=r(cn);Hw=i(wc,"The "),qh=s(wc,"CODE",{});var S4=r(qh);Qw=i(S4,"FlaxAlbertPreTrainedModel"),S4.forEach(t),Vw=i(wc," forward method, overrides the "),jh=s(wc,"CODE",{});var W4=r(jh);Kw=i(W4,"__call__"),W4.forEach(t),Jw=i(wc," special method."),wc.forEach(t),Gw=p(_r),y(Bs.$$.fragment,_r),Xw=p(_r),y(Rs.$$.fragment,_r),_r.forEach(t),mt.forEach(t),Kf=p(o),pn=s(o,"H2",{class:!0});var dg=r(pn);Hs=s(dg,"A",{id:!0,class:!0,href:!0});var U4=r(Hs);Ph=s(U4,"SPAN",{});var B4=r(Ph);y(al.$$.fragment,B4),B4.forEach(t),U4.forEach(t),Yw=p(dg),Ch=s(dg,"SPAN",{});var R4=r(Ch);Zw=i(R4,"FlaxAlbertForSequenceClassification"),R4.forEach(t),dg.forEach(t),Jf=p(o),Oe=s(o,"DIV",{class:!0});var ft=r(Oe);y(il.$$.fragment,ft),e$=p(ft),Lh=s(ft,"P",{});var H4=r(Lh);t$=i(H4,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),H4.forEach(t),o$=p(ft),ll=s(ft,"P",{});var cg=r(ll);n$=i(cg,"This model inherits from "),Jd=s(cg,"A",{href:!0});var Q4=r(Jd);s$=i(Q4,"FlaxPreTrainedModel"),Q4.forEach(t),r$=i(cg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cg.forEach(t),a$=p(ft),dl=s(ft,"P",{});var pg=r(dl);i$=i(pg,"This model is also a Flax Linen "),cl=s(pg,"A",{href:!0,rel:!0});var V4=r(cl);l$=i(V4,"flax.linen.Module"),V4.forEach(t),d$=i(pg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pg.forEach(t),c$=p(ft),Ih=s(ft,"P",{});var K4=r(Ih);p$=i(K4,"Finally, this model supports inherent JAX features such as:"),K4.forEach(t),h$=p(ft),Vt=s(ft,"UL",{});var br=r(Vt);Oh=s(br,"LI",{});var J4=r(Oh);pl=s(J4,"A",{href:!0,rel:!0});var G4=r(pl);m$=i(G4,"Just-In-Time (JIT) compilation"),G4.forEach(t),J4.forEach(t),f$=p(br),Nh=s(br,"LI",{});var X4=r(Nh);hl=s(X4,"A",{href:!0,rel:!0});var Y4=r(hl);u$=i(Y4,"Automatic Differentiation"),Y4.forEach(t),X4.forEach(t),g$=p(br),Dh=s(br,"LI",{});var Z4=r(Dh);ml=s(Z4,"A",{href:!0,rel:!0});var eE=r(ml);_$=i(eE,"Vectorization"),eE.forEach(t),Z4.forEach(t),b$=p(br),Sh=s(br,"LI",{});var tE=r(Sh);fl=s(tE,"A",{href:!0,rel:!0});var oE=r(fl);v$=i(oE,"Parallelization"),oE.forEach(t),tE.forEach(t),br.forEach(t),k$=p(ft),qt=s(ft,"DIV",{class:!0});var vr=r(qt);y(ul.$$.fragment,vr),T$=p(vr),hn=s(vr,"P",{});var $c=r(hn);y$=i($c,"The "),Wh=s($c,"CODE",{});var nE=r(Wh);w$=i(nE,"FlaxAlbertPreTrainedModel"),nE.forEach(t),$$=i($c," forward method, overrides the "),Uh=s($c,"CODE",{});var sE=r(Uh);A$=i(sE,"__call__"),sE.forEach(t),F$=i($c," special method."),$c.forEach(t),x$=p(vr),y(Qs.$$.fragment,vr),E$=p(vr),y(Vs.$$.fragment,vr),vr.forEach(t),ft.forEach(t),Gf=p(o),mn=s(o,"H2",{class:!0});var hg=r(mn);Ks=s(hg,"A",{id:!0,class:!0,href:!0});var rE=r(Ks);Bh=s(rE,"SPAN",{});var aE=r(Bh);y(gl.$$.fragment,aE),aE.forEach(t),rE.forEach(t),M$=p(hg),Rh=s(hg,"SPAN",{});var iE=r(Rh);z$=i(iE,"FlaxAlbertForMultipleChoice"),iE.forEach(t),hg.forEach(t),Xf=p(o),Ne=s(o,"DIV",{class:!0});var ut=r(Ne);y(_l.$$.fragment,ut),q$=p(ut),Hh=s(ut,"P",{});var lE=r(Hh);j$=i(lE,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lE.forEach(t),P$=p(ut),bl=s(ut,"P",{});var mg=r(bl);C$=i(mg,"This model inherits from "),Gd=s(mg,"A",{href:!0});var dE=r(Gd);L$=i(dE,"FlaxPreTrainedModel"),dE.forEach(t),I$=i(mg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mg.forEach(t),O$=p(ut),vl=s(ut,"P",{});var fg=r(vl);N$=i(fg,"This model is also a Flax Linen "),kl=s(fg,"A",{href:!0,rel:!0});var cE=r(kl);D$=i(cE,"flax.linen.Module"),cE.forEach(t),S$=i(fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fg.forEach(t),W$=p(ut),Qh=s(ut,"P",{});var pE=r(Qh);U$=i(pE,"Finally, this model supports inherent JAX features such as:"),pE.forEach(t),B$=p(ut),Kt=s(ut,"UL",{});var kr=r(Kt);Vh=s(kr,"LI",{});var hE=r(Vh);Tl=s(hE,"A",{href:!0,rel:!0});var mE=r(Tl);R$=i(mE,"Just-In-Time (JIT) compilation"),mE.forEach(t),hE.forEach(t),H$=p(kr),Kh=s(kr,"LI",{});var fE=r(Kh);yl=s(fE,"A",{href:!0,rel:!0});var uE=r(yl);Q$=i(uE,"Automatic Differentiation"),uE.forEach(t),fE.forEach(t),V$=p(kr),Jh=s(kr,"LI",{});var gE=r(Jh);wl=s(gE,"A",{href:!0,rel:!0});var _E=r(wl);K$=i(_E,"Vectorization"),_E.forEach(t),gE.forEach(t),J$=p(kr),Gh=s(kr,"LI",{});var bE=r(Gh);$l=s(bE,"A",{href:!0,rel:!0});var vE=r($l);G$=i(vE,"Parallelization"),vE.forEach(t),bE.forEach(t),kr.forEach(t),X$=p(ut),jt=s(ut,"DIV",{class:!0});var Tr=r(jt);y(Al.$$.fragment,Tr),Y$=p(Tr),fn=s(Tr,"P",{});var Ac=r(fn);Z$=i(Ac,"The "),Xh=s(Ac,"CODE",{});var kE=r(Xh);eA=i(kE,"FlaxAlbertPreTrainedModel"),kE.forEach(t),tA=i(Ac," forward method, overrides the "),Yh=s(Ac,"CODE",{});var TE=r(Yh);oA=i(TE,"__call__"),TE.forEach(t),nA=i(Ac," special method."),Ac.forEach(t),sA=p(Tr),y(Js.$$.fragment,Tr),rA=p(Tr),y(Gs.$$.fragment,Tr),Tr.forEach(t),ut.forEach(t),Yf=p(o),un=s(o,"H2",{class:!0});var ug=r(un);Xs=s(ug,"A",{id:!0,class:!0,href:!0});var yE=r(Xs);Zh=s(yE,"SPAN",{});var wE=r(Zh);y(Fl.$$.fragment,wE),wE.forEach(t),yE.forEach(t),aA=p(ug),em=s(ug,"SPAN",{});var $E=r(em);iA=i($E,"FlaxAlbertForTokenClassification"),$E.forEach(t),ug.forEach(t),Zf=p(o),De=s(o,"DIV",{class:!0});var gt=r(De);y(xl.$$.fragment,gt),lA=p(gt),tm=s(gt,"P",{});var AE=r(tm);dA=i(AE,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),AE.forEach(t),cA=p(gt),El=s(gt,"P",{});var gg=r(El);pA=i(gg,"This model inherits from "),Xd=s(gg,"A",{href:!0});var FE=r(Xd);hA=i(FE,"FlaxPreTrainedModel"),FE.forEach(t),mA=i(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),fA=p(gt),Ml=s(gt,"P",{});var _g=r(Ml);uA=i(_g,"This model is also a Flax Linen "),zl=s(_g,"A",{href:!0,rel:!0});var xE=r(zl);gA=i(xE,"flax.linen.Module"),xE.forEach(t),_A=i(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),bA=p(gt),om=s(gt,"P",{});var EE=r(om);vA=i(EE,"Finally, this model supports inherent JAX features such as:"),EE.forEach(t),kA=p(gt),Jt=s(gt,"UL",{});var yr=r(Jt);nm=s(yr,"LI",{});var ME=r(nm);ql=s(ME,"A",{href:!0,rel:!0});var zE=r(ql);TA=i(zE,"Just-In-Time (JIT) compilation"),zE.forEach(t),ME.forEach(t),yA=p(yr),sm=s(yr,"LI",{});var qE=r(sm);jl=s(qE,"A",{href:!0,rel:!0});var jE=r(jl);wA=i(jE,"Automatic Differentiation"),jE.forEach(t),qE.forEach(t),$A=p(yr),rm=s(yr,"LI",{});var PE=r(rm);Pl=s(PE,"A",{href:!0,rel:!0});var CE=r(Pl);AA=i(CE,"Vectorization"),CE.forEach(t),PE.forEach(t),FA=p(yr),am=s(yr,"LI",{});var LE=r(am);Cl=s(LE,"A",{href:!0,rel:!0});var IE=r(Cl);xA=i(IE,"Parallelization"),IE.forEach(t),LE.forEach(t),yr.forEach(t),EA=p(gt),Pt=s(gt,"DIV",{class:!0});var wr=r(Pt);y(Ll.$$.fragment,wr),MA=p(wr),gn=s(wr,"P",{});var Fc=r(gn);zA=i(Fc,"The "),im=s(Fc,"CODE",{});var OE=r(im);qA=i(OE,"FlaxAlbertPreTrainedModel"),OE.forEach(t),jA=i(Fc," forward method, overrides the "),lm=s(Fc,"CODE",{});var NE=r(lm);PA=i(NE,"__call__"),NE.forEach(t),CA=i(Fc," special method."),Fc.forEach(t),LA=p(wr),y(Ys.$$.fragment,wr),IA=p(wr),y(Zs.$$.fragment,wr),wr.forEach(t),gt.forEach(t),eu=p(o),_n=s(o,"H2",{class:!0});var bg=r(_n);er=s(bg,"A",{id:!0,class:!0,href:!0});var DE=r(er);dm=s(DE,"SPAN",{});var SE=r(dm);y(Il.$$.fragment,SE),SE.forEach(t),DE.forEach(t),OA=p(bg),cm=s(bg,"SPAN",{});var WE=r(cm);NA=i(WE,"FlaxAlbertForQuestionAnswering"),WE.forEach(t),bg.forEach(t),tu=p(o),Se=s(o,"DIV",{class:!0});var _t=r(Se);y(Ol.$$.fragment,_t),DA=p(_t),bn=s(_t,"P",{});var xc=r(bn);SA=i(xc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=s(xc,"CODE",{});var UE=r(pm);WA=i(UE,"span start logits"),UE.forEach(t),UA=i(xc," and "),hm=s(xc,"CODE",{});var BE=r(hm);BA=i(BE,"span end logits"),BE.forEach(t),RA=i(xc,")."),xc.forEach(t),HA=p(_t),Nl=s(_t,"P",{});var vg=r(Nl);QA=i(vg,"This model inherits from "),Yd=s(vg,"A",{href:!0});var RE=r(Yd);VA=i(RE,"FlaxPreTrainedModel"),RE.forEach(t),KA=i(vg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vg.forEach(t),JA=p(_t),Dl=s(_t,"P",{});var kg=r(Dl);GA=i(kg,"This model is also a Flax Linen "),Sl=s(kg,"A",{href:!0,rel:!0});var HE=r(Sl);XA=i(HE,"flax.linen.Module"),HE.forEach(t),YA=i(kg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kg.forEach(t),ZA=p(_t),mm=s(_t,"P",{});var QE=r(mm);eF=i(QE,"Finally, this model supports inherent JAX features such as:"),QE.forEach(t),tF=p(_t),Gt=s(_t,"UL",{});var $r=r(Gt);fm=s($r,"LI",{});var VE=r(fm);Wl=s(VE,"A",{href:!0,rel:!0});var KE=r(Wl);oF=i(KE,"Just-In-Time (JIT) compilation"),KE.forEach(t),VE.forEach(t),nF=p($r),um=s($r,"LI",{});var JE=r(um);Ul=s(JE,"A",{href:!0,rel:!0});var GE=r(Ul);sF=i(GE,"Automatic Differentiation"),GE.forEach(t),JE.forEach(t),rF=p($r),gm=s($r,"LI",{});var XE=r(gm);Bl=s(XE,"A",{href:!0,rel:!0});var YE=r(Bl);aF=i(YE,"Vectorization"),YE.forEach(t),XE.forEach(t),iF=p($r),_m=s($r,"LI",{});var ZE=r(_m);Rl=s(ZE,"A",{href:!0,rel:!0});var e3=r(Rl);lF=i(e3,"Parallelization"),e3.forEach(t),ZE.forEach(t),$r.forEach(t),dF=p(_t),Ct=s(_t,"DIV",{class:!0});var Ar=r(Ct);y(Hl.$$.fragment,Ar),cF=p(Ar),vn=s(Ar,"P",{});var Ec=r(vn);pF=i(Ec,"The "),bm=s(Ec,"CODE",{});var t3=r(bm);hF=i(t3,"FlaxAlbertPreTrainedModel"),t3.forEach(t),mF=i(Ec," forward method, overrides the "),vm=s(Ec,"CODE",{});var o3=r(vm);fF=i(o3,"__call__"),o3.forEach(t),uF=i(Ec," special method."),Ec.forEach(t),gF=p(Ar),y(tr.$$.fragment,Ar),_F=p(Ar),y(or.$$.fragment,Ar),Ar.forEach(t),_t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_M)),u(m,"id","albert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#albert"),u(h,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(z,"class","relative group"),u(te,"href","https://arxiv.org/abs/1909.11942"),u(te,"rel","nofollow"),u(ye,"href","https://huggingface.co/lysandre"),u(ye,"rel","nofollow"),u(S,"href","https://huggingface.co/kamalkraj"),u(S,"rel","nofollow"),u(W,"href","https://github.com/google-research/ALBERT"),u(W,"rel","nofollow"),u(wn,"id","transformers.AlbertConfig"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.AlbertConfig"),u(Te,"class","relative group"),u(rd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertModel"),u(ad,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertModel"),u(Er,"href","https://huggingface.co/albert-xxlarge-v2"),u(Er,"rel","nofollow"),u(id,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),u(ld,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.AlbertTokenizer"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.AlbertTokenizer"),u(vo,"class","relative group"),u(jr,"href","https://github.com/google/sentencepiece"),u(jr,"rel","nofollow"),u(dd,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.AlbertTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.AlbertTokenizerFast"),u(To,"class","relative group"),u(Ur,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(Ur,"rel","nofollow"),u(md,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(yo,"class","relative group"),u(gd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_d,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.AlbertModel"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.AlbertModel"),u(Ao,"class","relative group"),u(bd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ta,"rel","nofollow"),u(vd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.AlbertForPreTraining"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.AlbertForPreTraining"),u(xo,"class","relative group"),u(kd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ia,"rel","nofollow"),u(Td,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.AlbertForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.AlbertForMaskedLM"),u(zo,"class","relative group"),u(yd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fa,"rel","nofollow"),u(wd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.AlbertForSequenceClassification"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.AlbertForSequenceClassification"),u(jo,"class","relative group"),u($d,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ka,"rel","nofollow"),u(Ad,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertForMultipleChoice"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertForMultipleChoice"),u(Co,"class","relative group"),u(Fd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(Fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fa,"rel","nofollow"),u(xd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.AlbertForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.AlbertForTokenClassification"),u(Io,"class","relative group"),u(Ed,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(Md,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForTokenClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForQuestionAnswering"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForQuestionAnswering"),u(No,"class","relative group"),u(zd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(Na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Na,"rel","nofollow"),u(qd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFAlbertModel"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFAlbertModel"),u(Wo,"class","relative group"),u(jd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Pd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertModel"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFAlbertForPreTraining"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFAlbertForPreTraining"),u(Bo,"class","relative group"),u(Cd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ga,"rel","nofollow"),u(Ld,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.TFAlbertForMaskedLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.TFAlbertForMaskedLM"),u(Qo,"class","relative group"),u(Id,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(ni,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ni,"rel","nofollow"),u(Od,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.TFAlbertForSequenceClassification"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.TFAlbertForSequenceClassification"),u(Ko,"class","relative group"),u(Nd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(di,"rel","nofollow"),u(Dd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFAlbertForMultipleChoice"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFAlbertForMultipleChoice"),u(Go,"class","relative group"),u(Sd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ui,"rel","nofollow"),u(Wd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.TFAlbertForTokenClassification"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.TFAlbertForTokenClassification"),u(Yo,"class","relative group"),u(Ud,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ti,"rel","nofollow"),u(Bd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFAlbertForQuestionAnswering"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFAlbertForQuestionAnswering"),u(en,"class","relative group"),u(Rd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(xi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xi,"rel","nofollow"),u(Hd,"href","/docs/transformers/v4.21.3/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxAlbertModel"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxAlbertModel"),u(nn,"class","relative group"),u(Qd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Pi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Pi,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ci,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ii,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.FlaxAlbertForPreTraining"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.FlaxAlbertForPreTraining"),u(rn,"class","relative group"),u(Vd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Bi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ri,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxAlbertForMaskedLM"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxAlbertForMaskedLM"),u(dn,"class","relative group"),u(Kd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(el,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sl,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxAlbertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxAlbertForSequenceClassification"),u(pn,"class","relative group"),u(Jd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(fl,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxAlbertForMultipleChoice"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxAlbertForMultipleChoice"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(kl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(kl,"rel","nofollow"),u(Tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Tl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yl,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxAlbertForTokenClassification"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxAlbertForTokenClassification"),u(un,"class","relative group"),u(Xd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(zl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(zl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ql,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(jl,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Cl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.FlaxAlbertForQuestionAnswering"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(_n,"class","relative group"),u(Yd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Sl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Sl,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wl,"rel","nofollow"),u(Ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ul,"rel","nofollow"),u(Bl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Bl,"rel","nofollow"),u(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Rl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),b(o,g,v),b(o,h,v),e(h,m),e(m,_),w(l,_,null),e(h,f),e(h,E),e(E,fe),b(o,G,v),b(o,z,v),e(z,Y),e(Y,U),w(ee,U,null),e(z,ue),e(z,B),e(B,ge),b(o,de,v),b(o,K,v),e(K,I),e(K,te),e(te,X),e(K,q),b(o,P,v),b(o,Z,v),e(Z,R),e(R,_e),e(Z,be),e(Z,H),e(H,ve),b(o,ce,v),b(o,j,v),e(j,ke),b(o,Q,v),b(o,oe,v),e(oe,ie),e(ie,V),b(o,pe,v),b(o,ne,v),e(ne,O),b(o,he,v),b(o,D,v),e(D,le),e(le,k),e(D,M),e(D,J),e(J,Fe),b(o,Ae,v),b(o,C,v),e(C,xe),e(C,ye),e(ye,Ee),e(C,N),e(C,S),e(S,Me),e(C,ze),e(C,W),e(W,qe),e(C,je),b(o,me,v),b(o,Te,v),e(Te,wn),e(wn,Mc),w(Fr,Mc,null),e(Te,Tg),e(Te,zc),e(zc,yg),b(o,rf,v),b(o,bt,v),w(xr,bt,null),e(bt,wg),e(bt,Ut),e(Ut,$g),e(Ut,rd),e(rd,Ag),e(Ut,Fg),e(Ut,ad),e(ad,xg),e(Ut,Eg),e(Ut,Er),e(Er,Mg),e(Ut,zg),e(bt,qg),e(bt,bo),e(bo,jg),e(bo,id),e(id,Pg),e(bo,Cg),e(bo,ld),e(ld,Lg),e(bo,Ig),e(bt,Og),w($n,bt,null),b(o,af,v),b(o,vo,v),e(vo,An),e(An,qc),w(Mr,qc,null),e(vo,Ng),e(vo,jc),e(jc,Dg),b(o,lf,v),b(o,Pe,v),w(zr,Pe,null),e(Pe,Sg),e(Pe,qr),e(qr,Wg),e(qr,jr),e(jr,Ug),e(qr,Bg),e(Pe,Rg),e(Pe,Pr),e(Pr,Hg),e(Pr,dd),e(dd,Qg),e(Pr,Vg),e(Pe,Kg),e(Pe,to),w(Cr,to,null),e(to,Jg),e(to,Pc),e(Pc,Gg),e(to,Xg),e(to,Lr),e(Lr,cd),e(cd,Yg),e(cd,Cc),e(Cc,Zg),e(Lr,e_),e(Lr,pd),e(pd,t_),e(pd,Lc),e(Lc,o_),e(Pe,n_),e(Pe,Fn),w(Ir,Fn,null),e(Fn,s_),e(Fn,Or),e(Or,r_),e(Or,Ic),e(Ic,a_),e(Or,i_),e(Pe,l_),e(Pe,kt),w(Nr,kt,null),e(kt,d_),e(kt,Oc),e(Oc,c_),e(kt,p_),w(xn,kt,null),e(kt,h_),e(kt,ko),e(ko,m_),e(ko,Nc),e(Nc,f_),e(ko,u_),e(ko,Dc),e(Dc,g_),e(ko,__),e(Pe,b_),e(Pe,hd),w(Dr,hd,null),b(o,df,v),b(o,To,v),e(To,En),e(En,Sc),w(Sr,Sc,null),e(To,v_),e(To,Wc),e(Wc,k_),b(o,cf,v),b(o,vt,v),w(Wr,vt,null),e(vt,T_),e(vt,Bt),e(Bt,y_),e(Bt,Uc),e(Uc,w_),e(Bt,$_),e(Bt,Ur),e(Ur,A_),e(Bt,F_),e(Bt,md),e(md,x_),e(Bt,E_),e(vt,M_),e(vt,oo),w(Br,oo,null),e(oo,z_),e(oo,Bc),e(Bc,q_),e(oo,j_),e(oo,Rr),e(Rr,fd),e(fd,P_),e(fd,Rc),e(Rc,C_),e(Rr,L_),e(Rr,ud),e(ud,I_),e(ud,Hc),e(Hc,O_),e(vt,N_),e(vt,Tt),w(Hr,Tt,null),e(Tt,D_),e(Tt,Qc),e(Qc,S_),e(Tt,W_),w(Mn,Tt,null),e(Tt,U_),e(Tt,Vc),e(Vc,B_),b(o,pf,v),b(o,yo,v),e(yo,zn),e(zn,Kc),w(Qr,Kc,null),e(yo,R_),e(yo,Jc),e(Jc,H_),b(o,hf,v),b(o,wo,v),w(Vr,wo,null),e(wo,Q_),e(wo,Kr),e(Kr,V_),e(Kr,gd),e(gd,K_),e(Kr,J_),b(o,mf,v),b(o,$o,v),w(Jr,$o,null),e($o,G_),e($o,Gr),e(Gr,X_),e(Gr,_d),e(_d,Y_),e(Gr,Z_),b(o,ff,v),b(o,Ao,v),e(Ao,qn),e(qn,Gc),w(Xr,Gc,null),e(Ao,eb),e(Ao,Xc),e(Xc,tb),b(o,uf,v),b(o,Ge,v),w(Yr,Ge,null),e(Ge,ob),e(Ge,Yc),e(Yc,nb),e(Ge,sb),e(Ge,Zr),e(Zr,rb),e(Zr,bd),e(bd,ab),e(Zr,ib),e(Ge,lb),e(Ge,ea),e(ea,db),e(ea,ta),e(ta,cb),e(ea,pb),e(Ge,hb),e(Ge,yt),w(oa,yt,null),e(yt,mb),e(yt,Fo),e(Fo,fb),e(Fo,vd),e(vd,ub),e(Fo,gb),e(Fo,Zc),e(Zc,_b),e(Fo,bb),e(yt,vb),w(jn,yt,null),e(yt,kb),w(Pn,yt,null),b(o,gf,v),b(o,xo,v),e(xo,Cn),e(Cn,ep),w(na,ep,null),e(xo,Tb),e(xo,tp),e(tp,yb),b(o,_f,v),b(o,Xe,v),w(sa,Xe,null),e(Xe,wb),e(Xe,Eo),e(Eo,$b),e(Eo,op),e(op,Ab),e(Eo,Fb),e(Eo,np),e(np,xb),e(Eo,Eb),e(Xe,Mb),e(Xe,ra),e(ra,zb),e(ra,kd),e(kd,qb),e(ra,jb),e(Xe,Pb),e(Xe,aa),e(aa,Cb),e(aa,ia),e(ia,Lb),e(aa,Ib),e(Xe,Ob),e(Xe,wt),w(la,wt,null),e(wt,Nb),e(wt,Mo),e(Mo,Db),e(Mo,Td),e(Td,Sb),e(Mo,Wb),e(Mo,sp),e(sp,Ub),e(Mo,Bb),e(wt,Rb),w(Ln,wt,null),e(wt,Hb),w(In,wt,null),b(o,bf,v),b(o,zo,v),e(zo,On),e(On,rp),w(da,rp,null),e(zo,Qb),e(zo,ap),e(ap,Vb),b(o,vf,v),b(o,Ye,v),w(ca,Ye,null),e(Ye,Kb),e(Ye,pa),e(pa,Jb),e(pa,ip),e(ip,Gb),e(pa,Xb),e(Ye,Yb),e(Ye,ha),e(ha,Zb),e(ha,yd),e(yd,ev),e(ha,tv),e(Ye,ov),e(Ye,ma),e(ma,nv),e(ma,fa),e(fa,sv),e(ma,rv),e(Ye,av),e(Ye,nt),w(ua,nt,null),e(nt,iv),e(nt,qo),e(qo,lv),e(qo,wd),e(wd,dv),e(qo,cv),e(qo,lp),e(lp,pv),e(qo,hv),e(nt,mv),w(Nn,nt,null),e(nt,fv),w(Dn,nt,null),e(nt,uv),w(Sn,nt,null),b(o,kf,v),b(o,jo,v),e(jo,Wn),e(Wn,dp),w(ga,dp,null),e(jo,gv),e(jo,cp),e(cp,_v),b(o,Tf,v),b(o,Ze,v),w(_a,Ze,null),e(Ze,bv),e(Ze,pp),e(pp,vv),e(Ze,kv),e(Ze,ba),e(ba,Tv),e(ba,$d),e($d,yv),e(ba,wv),e(Ze,$v),e(Ze,va),e(va,Av),e(va,ka),e(ka,Fv),e(va,xv),e(Ze,Ev),e(Ze,We),w(Ta,We,null),e(We,Mv),e(We,Po),e(Po,zv),e(Po,Ad),e(Ad,qv),e(Po,jv),e(Po,hp),e(hp,Pv),e(Po,Cv),e(We,Lv),w(Un,We,null),e(We,Iv),w(Bn,We,null),e(We,Ov),w(Rn,We,null),e(We,Nv),w(Hn,We,null),e(We,Dv),w(Qn,We,null),b(o,yf,v),b(o,Co,v),e(Co,Vn),e(Vn,mp),w(ya,mp,null),e(Co,Sv),e(Co,fp),e(fp,Wv),b(o,wf,v),b(o,et,v),w(wa,et,null),e(et,Uv),e(et,up),e(up,Bv),e(et,Rv),e(et,$a),e($a,Hv),e($a,Fd),e(Fd,Qv),e($a,Vv),e(et,Kv),e(et,Aa),e(Aa,Jv),e(Aa,Fa),e(Fa,Gv),e(Aa,Xv),e(et,Yv),e(et,$t),w(xa,$t,null),e($t,Zv),e($t,Lo),e(Lo,ek),e(Lo,xd),e(xd,tk),e(Lo,ok),e(Lo,gp),e(gp,nk),e(Lo,sk),e($t,rk),w(Kn,$t,null),e($t,ak),w(Jn,$t,null),b(o,$f,v),b(o,Io,v),e(Io,Gn),e(Gn,_p),w(Ea,_p,null),e(Io,ik),e(Io,bp),e(bp,lk),b(o,Af,v),b(o,tt,v),w(Ma,tt,null),e(tt,dk),e(tt,vp),e(vp,ck),e(tt,pk),e(tt,za),e(za,hk),e(za,Ed),e(Ed,mk),e(za,fk),e(tt,uk),e(tt,qa),e(qa,gk),e(qa,ja),e(ja,_k),e(qa,bk),e(tt,vk),e(tt,st),w(Pa,st,null),e(st,kk),e(st,Oo),e(Oo,Tk),e(Oo,Md),e(Md,yk),e(Oo,wk),e(Oo,kp),e(kp,$k),e(Oo,Ak),e(st,Fk),w(Xn,st,null),e(st,xk),w(Yn,st,null),e(st,Ek),w(Zn,st,null),b(o,Ff,v),b(o,No,v),e(No,es),e(es,Tp),w(Ca,Tp,null),e(No,Mk),e(No,yp),e(yp,zk),b(o,xf,v),b(o,ot,v),w(La,ot,null),e(ot,qk),e(ot,Do),e(Do,jk),e(Do,wp),e(wp,Pk),e(Do,Ck),e(Do,$p),e($p,Lk),e(Do,Ik),e(ot,Ok),e(ot,Ia),e(Ia,Nk),e(Ia,zd),e(zd,Dk),e(Ia,Sk),e(ot,Wk),e(ot,Oa),e(Oa,Uk),e(Oa,Na),e(Na,Bk),e(Oa,Rk),e(ot,Hk),e(ot,rt),w(Da,rt,null),e(rt,Qk),e(rt,So),e(So,Vk),e(So,qd),e(qd,Kk),e(So,Jk),e(So,Ap),e(Ap,Gk),e(So,Xk),e(rt,Yk),w(ts,rt,null),e(rt,Zk),w(os,rt,null),e(rt,eT),w(ns,rt,null),b(o,Ef,v),b(o,Wo,v),e(Wo,ss),e(ss,Fp),w(Sa,Fp,null),e(Wo,tT),e(Wo,xp),e(xp,oT),b(o,Mf,v),b(o,Ue,v),w(Wa,Ue,null),e(Ue,nT),e(Ue,Ep),e(Ep,sT),e(Ue,rT),e(Ue,Ua),e(Ua,aT),e(Ua,jd),e(jd,iT),e(Ua,lT),e(Ue,dT),e(Ue,Ba),e(Ba,cT),e(Ba,Ra),e(Ra,pT),e(Ba,hT),e(Ue,mT),w(rs,Ue,null),e(Ue,fT),e(Ue,At),w(Ha,At,null),e(At,uT),e(At,Uo),e(Uo,gT),e(Uo,Pd),e(Pd,_T),e(Uo,bT),e(Uo,Mp),e(Mp,vT),e(Uo,kT),e(At,TT),w(as,At,null),e(At,yT),w(is,At,null),b(o,zf,v),b(o,Bo,v),e(Bo,ls),e(ls,zp),w(Qa,zp,null),e(Bo,wT),e(Bo,qp),e(qp,$T),b(o,qf,v),b(o,Be,v),w(Va,Be,null),e(Be,AT),e(Be,Ro),e(Ro,FT),e(Ro,jp),e(jp,xT),e(Ro,ET),e(Ro,Pp),e(Pp,MT),e(Ro,zT),e(Be,qT),e(Be,Ka),e(Ka,jT),e(Ka,Cd),e(Cd,PT),e(Ka,CT),e(Be,LT),e(Be,Ja),e(Ja,IT),e(Ja,Ga),e(Ga,OT),e(Ja,NT),e(Be,DT),w(ds,Be,null),e(Be,ST),e(Be,Ft),w(Xa,Ft,null),e(Ft,WT),e(Ft,Ho),e(Ho,UT),e(Ho,Ld),e(Ld,BT),e(Ho,RT),e(Ho,Cp),e(Cp,HT),e(Ho,QT),e(Ft,VT),w(cs,Ft,null),e(Ft,KT),w(ps,Ft,null),b(o,jf,v),b(o,Qo,v),e(Qo,hs),e(hs,Lp),w(Ya,Lp,null),e(Qo,JT),e(Qo,Ip),e(Ip,GT),b(o,Pf,v),b(o,Re,v),w(Za,Re,null),e(Re,XT),e(Re,ei),e(ei,YT),e(ei,Op),e(Op,ZT),e(ei,ey),e(Re,ty),e(Re,ti),e(ti,oy),e(ti,Id),e(Id,ny),e(ti,sy),e(Re,ry),e(Re,oi),e(oi,ay),e(oi,ni),e(ni,iy),e(oi,ly),e(Re,dy),w(ms,Re,null),e(Re,cy),e(Re,at),w(si,at,null),e(at,py),e(at,Vo),e(Vo,hy),e(Vo,Od),e(Od,my),e(Vo,fy),e(Vo,Np),e(Np,uy),e(Vo,gy),e(at,_y),w(fs,at,null),e(at,by),w(us,at,null),e(at,vy),w(gs,at,null),b(o,Cf,v),b(o,Ko,v),e(Ko,_s),e(_s,Dp),w(ri,Dp,null),e(Ko,ky),e(Ko,Sp),e(Sp,Ty),b(o,Lf,v),b(o,He,v),w(ai,He,null),e(He,yy),e(He,Wp),e(Wp,wy),e(He,$y),e(He,ii),e(ii,Ay),e(ii,Nd),e(Nd,Fy),e(ii,xy),e(He,Ey),e(He,li),e(li,My),e(li,di),e(di,zy),e(li,qy),e(He,jy),w(bs,He,null),e(He,Py),e(He,it),w(ci,it,null),e(it,Cy),e(it,Jo),e(Jo,Ly),e(Jo,Dd),e(Dd,Iy),e(Jo,Oy),e(Jo,Up),e(Up,Ny),e(Jo,Dy),e(it,Sy),w(vs,it,null),e(it,Wy),w(ks,it,null),e(it,Uy),w(Ts,it,null),b(o,If,v),b(o,Go,v),e(Go,ys),e(ys,Bp),w(pi,Bp,null),e(Go,By),e(Go,Rp),e(Rp,Ry),b(o,Of,v),b(o,Qe,v),w(hi,Qe,null),e(Qe,Hy),e(Qe,Hp),e(Hp,Qy),e(Qe,Vy),e(Qe,mi),e(mi,Ky),e(mi,Sd),e(Sd,Jy),e(mi,Gy),e(Qe,Xy),e(Qe,fi),e(fi,Yy),e(fi,ui),e(ui,Zy),e(fi,e1),e(Qe,t1),w(ws,Qe,null),e(Qe,o1),e(Qe,xt),w(gi,xt,null),e(xt,n1),e(xt,Xo),e(Xo,s1),e(Xo,Wd),e(Wd,r1),e(Xo,a1),e(Xo,Qp),e(Qp,i1),e(Xo,l1),e(xt,d1),w($s,xt,null),e(xt,c1),w(As,xt,null),b(o,Nf,v),b(o,Yo,v),e(Yo,Fs),e(Fs,Vp),w(_i,Vp,null),e(Yo,p1),e(Yo,Kp),e(Kp,h1),b(o,Df,v),b(o,Ve,v),w(bi,Ve,null),e(Ve,m1),e(Ve,Jp),e(Jp,f1),e(Ve,u1),e(Ve,vi),e(vi,g1),e(vi,Ud),e(Ud,_1),e(vi,b1),e(Ve,v1),e(Ve,ki),e(ki,k1),e(ki,Ti),e(Ti,T1),e(ki,y1),e(Ve,w1),w(xs,Ve,null),e(Ve,$1),e(Ve,lt),w(yi,lt,null),e(lt,A1),e(lt,Zo),e(Zo,F1),e(Zo,Bd),e(Bd,x1),e(Zo,E1),e(Zo,Gp),e(Gp,M1),e(Zo,z1),e(lt,q1),w(Es,lt,null),e(lt,j1),w(Ms,lt,null),e(lt,P1),w(zs,lt,null),b(o,Sf,v),b(o,en,v),e(en,qs),e(qs,Xp),w(wi,Xp,null),e(en,C1),e(en,Yp),e(Yp,L1),b(o,Wf,v),b(o,Ke,v),w($i,Ke,null),e(Ke,I1),e(Ke,tn),e(tn,O1),e(tn,Zp),e(Zp,N1),e(tn,D1),e(tn,eh),e(eh,S1),e(tn,W1),e(Ke,U1),e(Ke,Ai),e(Ai,B1),e(Ai,Rd),e(Rd,R1),e(Ai,H1),e(Ke,Q1),e(Ke,Fi),e(Fi,V1),e(Fi,xi),e(xi,K1),e(Fi,J1),e(Ke,G1),w(js,Ke,null),e(Ke,X1),e(Ke,dt),w(Ei,dt,null),e(dt,Y1),e(dt,on),e(on,Z1),e(on,Hd),e(Hd,e2),e(on,t2),e(on,th),e(th,o2),e(on,n2),e(dt,s2),w(Ps,dt,null),e(dt,r2),w(Cs,dt,null),e(dt,a2),w(Ls,dt,null),b(o,Uf,v),b(o,nn,v),e(nn,Is),e(Is,oh),w(Mi,oh,null),e(nn,i2),e(nn,nh),e(nh,l2),b(o,Bf,v),b(o,Ce,v),w(zi,Ce,null),e(Ce,d2),e(Ce,sh),e(sh,c2),e(Ce,p2),e(Ce,qi),e(qi,h2),e(qi,Qd),e(Qd,m2),e(qi,f2),e(Ce,u2),e(Ce,ji),e(ji,g2),e(ji,Pi),e(Pi,_2),e(ji,b2),e(Ce,v2),e(Ce,rh),e(rh,k2),e(Ce,T2),e(Ce,Rt),e(Rt,ah),e(ah,Ci),e(Ci,y2),e(Rt,w2),e(Rt,ih),e(ih,Li),e(Li,$2),e(Rt,A2),e(Rt,lh),e(lh,Ii),e(Ii,F2),e(Rt,x2),e(Rt,dh),e(dh,Oi),e(Oi,E2),e(Ce,M2),e(Ce,Et),w(Ni,Et,null),e(Et,z2),e(Et,sn),e(sn,q2),e(sn,ch),e(ch,j2),e(sn,P2),e(sn,ph),e(ph,C2),e(sn,L2),e(Et,I2),w(Os,Et,null),e(Et,O2),w(Ns,Et,null),b(o,Rf,v),b(o,rn,v),e(rn,Ds),e(Ds,hh),w(Di,hh,null),e(rn,N2),e(rn,mh),e(mh,D2),b(o,Hf,v),b(o,Le,v),w(Si,Le,null),e(Le,S2),e(Le,an),e(an,W2),e(an,fh),e(fh,U2),e(an,B2),e(an,uh),e(uh,R2),e(an,H2),e(Le,Q2),e(Le,Wi),e(Wi,V2),e(Wi,Vd),e(Vd,K2),e(Wi,J2),e(Le,G2),e(Le,Ui),e(Ui,X2),e(Ui,Bi),e(Bi,Y2),e(Ui,Z2),e(Le,ew),e(Le,gh),e(gh,tw),e(Le,ow),e(Le,Ht),e(Ht,_h),e(_h,Ri),e(Ri,nw),e(Ht,sw),e(Ht,bh),e(bh,Hi),e(Hi,rw),e(Ht,aw),e(Ht,vh),e(vh,Qi),e(Qi,iw),e(Ht,lw),e(Ht,kh),e(kh,Vi),e(Vi,dw),e(Le,cw),e(Le,Mt),w(Ki,Mt,null),e(Mt,pw),e(Mt,ln),e(ln,hw),e(ln,Th),e(Th,mw),e(ln,fw),e(ln,yh),e(yh,uw),e(ln,gw),e(Mt,_w),w(Ss,Mt,null),e(Mt,bw),w(Ws,Mt,null),b(o,Qf,v),b(o,dn,v),e(dn,Us),e(Us,wh),w(Ji,wh,null),e(dn,vw),e(dn,$h),e($h,kw),b(o,Vf,v),b(o,Ie,v),w(Gi,Ie,null),e(Ie,Tw),e(Ie,Xi),e(Xi,yw),e(Xi,Ah),e(Ah,ww),e(Xi,$w),e(Ie,Aw),e(Ie,Yi),e(Yi,Fw),e(Yi,Kd),e(Kd,xw),e(Yi,Ew),e(Ie,Mw),e(Ie,Zi),e(Zi,zw),e(Zi,el),e(el,qw),e(Zi,jw),e(Ie,Pw),e(Ie,Fh),e(Fh,Cw),e(Ie,Lw),e(Ie,Qt),e(Qt,xh),e(xh,tl),e(tl,Iw),e(Qt,Ow),e(Qt,Eh),e(Eh,ol),e(ol,Nw),e(Qt,Dw),e(Qt,Mh),e(Mh,nl),e(nl,Sw),e(Qt,Ww),e(Qt,zh),e(zh,sl),e(sl,Uw),e(Ie,Bw),e(Ie,zt),w(rl,zt,null),e(zt,Rw),e(zt,cn),e(cn,Hw),e(cn,qh),e(qh,Qw),e(cn,Vw),e(cn,jh),e(jh,Kw),e(cn,Jw),e(zt,Gw),w(Bs,zt,null),e(zt,Xw),w(Rs,zt,null),b(o,Kf,v),b(o,pn,v),e(pn,Hs),e(Hs,Ph),w(al,Ph,null),e(pn,Yw),e(pn,Ch),e(Ch,Zw),b(o,Jf,v),b(o,Oe,v),w(il,Oe,null),e(Oe,e$),e(Oe,Lh),e(Lh,t$),e(Oe,o$),e(Oe,ll),e(ll,n$),e(ll,Jd),e(Jd,s$),e(ll,r$),e(Oe,a$),e(Oe,dl),e(dl,i$),e(dl,cl),e(cl,l$),e(dl,d$),e(Oe,c$),e(Oe,Ih),e(Ih,p$),e(Oe,h$),e(Oe,Vt),e(Vt,Oh),e(Oh,pl),e(pl,m$),e(Vt,f$),e(Vt,Nh),e(Nh,hl),e(hl,u$),e(Vt,g$),e(Vt,Dh),e(Dh,ml),e(ml,_$),e(Vt,b$),e(Vt,Sh),e(Sh,fl),e(fl,v$),e(Oe,k$),e(Oe,qt),w(ul,qt,null),e(qt,T$),e(qt,hn),e(hn,y$),e(hn,Wh),e(Wh,w$),e(hn,$$),e(hn,Uh),e(Uh,A$),e(hn,F$),e(qt,x$),w(Qs,qt,null),e(qt,E$),w(Vs,qt,null),b(o,Gf,v),b(o,mn,v),e(mn,Ks),e(Ks,Bh),w(gl,Bh,null),e(mn,M$),e(mn,Rh),e(Rh,z$),b(o,Xf,v),b(o,Ne,v),w(_l,Ne,null),e(Ne,q$),e(Ne,Hh),e(Hh,j$),e(Ne,P$),e(Ne,bl),e(bl,C$),e(bl,Gd),e(Gd,L$),e(bl,I$),e(Ne,O$),e(Ne,vl),e(vl,N$),e(vl,kl),e(kl,D$),e(vl,S$),e(Ne,W$),e(Ne,Qh),e(Qh,U$),e(Ne,B$),e(Ne,Kt),e(Kt,Vh),e(Vh,Tl),e(Tl,R$),e(Kt,H$),e(Kt,Kh),e(Kh,yl),e(yl,Q$),e(Kt,V$),e(Kt,Jh),e(Jh,wl),e(wl,K$),e(Kt,J$),e(Kt,Gh),e(Gh,$l),e($l,G$),e(Ne,X$),e(Ne,jt),w(Al,jt,null),e(jt,Y$),e(jt,fn),e(fn,Z$),e(fn,Xh),e(Xh,eA),e(fn,tA),e(fn,Yh),e(Yh,oA),e(fn,nA),e(jt,sA),w(Js,jt,null),e(jt,rA),w(Gs,jt,null),b(o,Yf,v),b(o,un,v),e(un,Xs),e(Xs,Zh),w(Fl,Zh,null),e(un,aA),e(un,em),e(em,iA),b(o,Zf,v),b(o,De,v),w(xl,De,null),e(De,lA),e(De,tm),e(tm,dA),e(De,cA),e(De,El),e(El,pA),e(El,Xd),e(Xd,hA),e(El,mA),e(De,fA),e(De,Ml),e(Ml,uA),e(Ml,zl),e(zl,gA),e(Ml,_A),e(De,bA),e(De,om),e(om,vA),e(De,kA),e(De,Jt),e(Jt,nm),e(nm,ql),e(ql,TA),e(Jt,yA),e(Jt,sm),e(sm,jl),e(jl,wA),e(Jt,$A),e(Jt,rm),e(rm,Pl),e(Pl,AA),e(Jt,FA),e(Jt,am),e(am,Cl),e(Cl,xA),e(De,EA),e(De,Pt),w(Ll,Pt,null),e(Pt,MA),e(Pt,gn),e(gn,zA),e(gn,im),e(im,qA),e(gn,jA),e(gn,lm),e(lm,PA),e(gn,CA),e(Pt,LA),w(Ys,Pt,null),e(Pt,IA),w(Zs,Pt,null),b(o,eu,v),b(o,_n,v),e(_n,er),e(er,dm),w(Il,dm,null),e(_n,OA),e(_n,cm),e(cm,NA),b(o,tu,v),b(o,Se,v),w(Ol,Se,null),e(Se,DA),e(Se,bn),e(bn,SA),e(bn,pm),e(pm,WA),e(bn,UA),e(bn,hm),e(hm,BA),e(bn,RA),e(Se,HA),e(Se,Nl),e(Nl,QA),e(Nl,Yd),e(Yd,VA),e(Nl,KA),e(Se,JA),e(Se,Dl),e(Dl,GA),e(Dl,Sl),e(Sl,XA),e(Dl,YA),e(Se,ZA),e(Se,mm),e(mm,eF),e(Se,tF),e(Se,Gt),e(Gt,fm),e(fm,Wl),e(Wl,oF),e(Gt,nF),e(Gt,um),e(um,Ul),e(Ul,sF),e(Gt,rF),e(Gt,gm),e(gm,Bl),e(Bl,aF),e(Gt,iF),e(Gt,_m),e(_m,Rl),e(Rl,lF),e(Se,dF),e(Se,Ct),w(Hl,Ct,null),e(Ct,cF),e(Ct,vn),e(vn,pF),e(vn,bm),e(bm,hF),e(vn,mF),e(vn,vm),e(vm,fF),e(vn,uF),e(Ct,gF),w(tr,Ct,null),e(Ct,_F),w(or,Ct,null),ou=!0},p(o,[v]){const Ql={};v&2&&(Ql.$$scope={dirty:v,ctx:o}),$n.$set(Ql);const km={};v&2&&(km.$$scope={dirty:v,ctx:o}),xn.$set(km);const Tm={};v&2&&(Tm.$$scope={dirty:v,ctx:o}),Mn.$set(Tm);const ym={};v&2&&(ym.$$scope={dirty:v,ctx:o}),jn.$set(ym);const Vl={};v&2&&(Vl.$$scope={dirty:v,ctx:o}),Pn.$set(Vl);const wm={};v&2&&(wm.$$scope={dirty:v,ctx:o}),Ln.$set(wm);const $m={};v&2&&($m.$$scope={dirty:v,ctx:o}),In.$set($m);const Am={};v&2&&(Am.$$scope={dirty:v,ctx:o}),Nn.$set(Am);const Kl={};v&2&&(Kl.$$scope={dirty:v,ctx:o}),Dn.$set(Kl);const Fm={};v&2&&(Fm.$$scope={dirty:v,ctx:o}),Sn.$set(Fm);const Jl={};v&2&&(Jl.$$scope={dirty:v,ctx:o}),Un.$set(Jl);const xm={};v&2&&(xm.$$scope={dirty:v,ctx:o}),Bn.$set(xm);const Em={};v&2&&(Em.$$scope={dirty:v,ctx:o}),Rn.$set(Em);const Mm={};v&2&&(Mm.$$scope={dirty:v,ctx:o}),Hn.$set(Mm);const zm={};v&2&&(zm.$$scope={dirty:v,ctx:o}),Qn.$set(zm);const qm={};v&2&&(qm.$$scope={dirty:v,ctx:o}),Kn.$set(qm);const jm={};v&2&&(jm.$$scope={dirty:v,ctx:o}),Jn.$set(jm);const Gl={};v&2&&(Gl.$$scope={dirty:v,ctx:o}),Xn.$set(Gl);const Pm={};v&2&&(Pm.$$scope={dirty:v,ctx:o}),Yn.$set(Pm);const Cm={};v&2&&(Cm.$$scope={dirty:v,ctx:o}),Zn.$set(Cm);const Xt={};v&2&&(Xt.$$scope={dirty:v,ctx:o}),ts.$set(Xt);const Lm={};v&2&&(Lm.$$scope={dirty:v,ctx:o}),os.$set(Lm);const Im={};v&2&&(Im.$$scope={dirty:v,ctx:o}),ns.$set(Im);const Om={};v&2&&(Om.$$scope={dirty:v,ctx:o}),rs.$set(Om);const Xl={};v&2&&(Xl.$$scope={dirty:v,ctx:o}),as.$set(Xl);const Nm={};v&2&&(Nm.$$scope={dirty:v,ctx:o}),is.$set(Nm);const Dm={};v&2&&(Dm.$$scope={dirty:v,ctx:o}),ds.$set(Dm);const Sm={};v&2&&(Sm.$$scope={dirty:v,ctx:o}),cs.$set(Sm);const Yt={};v&2&&(Yt.$$scope={dirty:v,ctx:o}),ps.$set(Yt);const Zt={};v&2&&(Zt.$$scope={dirty:v,ctx:o}),ms.$set(Zt);const Wm={};v&2&&(Wm.$$scope={dirty:v,ctx:o}),fs.$set(Wm);const Um={};v&2&&(Um.$$scope={dirty:v,ctx:o}),us.$set(Um);const Bm={};v&2&&(Bm.$$scope={dirty:v,ctx:o}),gs.$set(Bm);const kn={};v&2&&(kn.$$scope={dirty:v,ctx:o}),bs.$set(kn);const Rm={};v&2&&(Rm.$$scope={dirty:v,ctx:o}),vs.$set(Rm);const Hm={};v&2&&(Hm.$$scope={dirty:v,ctx:o}),ks.$set(Hm);const Yl={};v&2&&(Yl.$$scope={dirty:v,ctx:o}),Ts.$set(Yl);const Qm={};v&2&&(Qm.$$scope={dirty:v,ctx:o}),ws.$set(Qm);const Vm={};v&2&&(Vm.$$scope={dirty:v,ctx:o}),$s.$set(Vm);const Km={};v&2&&(Km.$$scope={dirty:v,ctx:o}),As.$set(Km);const Je={};v&2&&(Je.$$scope={dirty:v,ctx:o}),xs.$set(Je);const Zl={};v&2&&(Zl.$$scope={dirty:v,ctx:o}),Es.$set(Zl);const Jm={};v&2&&(Jm.$$scope={dirty:v,ctx:o}),Ms.$set(Jm);const ed={};v&2&&(ed.$$scope={dirty:v,ctx:o}),zs.$set(ed);const Gm={};v&2&&(Gm.$$scope={dirty:v,ctx:o}),js.$set(Gm);const Tn={};v&2&&(Tn.$$scope={dirty:v,ctx:o}),Ps.$set(Tn);const Xm={};v&2&&(Xm.$$scope={dirty:v,ctx:o}),Cs.$set(Xm);const td={};v&2&&(td.$$scope={dirty:v,ctx:o}),Ls.$set(td);const Zd={};v&2&&(Zd.$$scope={dirty:v,ctx:o}),Os.$set(Zd);const Ym={};v&2&&(Ym.$$scope={dirty:v,ctx:o}),Ns.$set(Ym);const ec={};v&2&&(ec.$$scope={dirty:v,ctx:o}),Ss.$set(ec);const Zm={};v&2&&(Zm.$$scope={dirty:v,ctx:o}),Ws.$set(Zm);const od={};v&2&&(od.$$scope={dirty:v,ctx:o}),Bs.$set(od);const nd={};v&2&&(nd.$$scope={dirty:v,ctx:o}),Rs.$set(nd);const ef={};v&2&&(ef.$$scope={dirty:v,ctx:o}),Qs.$set(ef);const eo={};v&2&&(eo.$$scope={dirty:v,ctx:o}),Vs.$set(eo);const tf={};v&2&&(tf.$$scope={dirty:v,ctx:o}),Js.$set(tf);const yn={};v&2&&(yn.$$scope={dirty:v,ctx:o}),Gs.$set(yn);const of={};v&2&&(of.$$scope={dirty:v,ctx:o}),Ys.$set(of);const nf={};v&2&&(nf.$$scope={dirty:v,ctx:o}),Zs.$set(nf);const sf={};v&2&&(sf.$$scope={dirty:v,ctx:o}),tr.$set(sf);const sd={};v&2&&(sd.$$scope={dirty:v,ctx:o}),or.$set(sd)},i(o){ou||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$($n.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Cr.$$.fragment,o),$(Ir.$$.fragment,o),$(Nr.$$.fragment,o),$(xn.$$.fragment,o),$(Dr.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Br.$$.fragment,o),$(Hr.$$.fragment,o),$(Mn.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Jr.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(oa.$$.fragment,o),$(jn.$$.fragment,o),$(Pn.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(la.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(Nn.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Ta.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(Rn.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(xa.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ma.$$.fragment,o),$(Pa.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Ca.$$.fragment,o),$(La.$$.fragment,o),$(Da.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(rs.$$.fragment,o),$(Ha.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(Qa.$$.fragment,o),$(Va.$$.fragment,o),$(ds.$$.fragment,o),$(Xa.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ri.$$.fragment,o),$(ai.$$.fragment,o),$(bs.$$.fragment,o),$(ci.$$.fragment,o),$(vs.$$.fragment,o),$(ks.$$.fragment,o),$(Ts.$$.fragment,o),$(pi.$$.fragment,o),$(hi.$$.fragment,o),$(ws.$$.fragment,o),$(gi.$$.fragment,o),$($s.$$.fragment,o),$(As.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(xs.$$.fragment,o),$(yi.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(js.$$.fragment,o),$(Ei.$$.fragment,o),$(Ps.$$.fragment,o),$(Cs.$$.fragment,o),$(Ls.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Ni.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Di.$$.fragment,o),$(Si.$$.fragment,o),$(Ki.$$.fragment,o),$(Ss.$$.fragment,o),$(Ws.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(rl.$$.fragment,o),$(Bs.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(ul.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Al.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Fl.$$.fragment,o),$(xl.$$.fragment,o),$(Ll.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(Il.$$.fragment,o),$(Ol.$$.fragment,o),$(Hl.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),ou=!0)},o(o){A(l.$$.fragment,o),A(ee.$$.fragment,o),A(Fr.$$.fragment,o),A(xr.$$.fragment,o),A($n.$$.fragment,o),A(Mr.$$.fragment,o),A(zr.$$.fragment,o),A(Cr.$$.fragment,o),A(Ir.$$.fragment,o),A(Nr.$$.fragment,o),A(xn.$$.fragment,o),A(Dr.$$.fragment,o),A(Sr.$$.fragment,o),A(Wr.$$.fragment,o),A(Br.$$.fragment,o),A(Hr.$$.fragment,o),A(Mn.$$.fragment,o),A(Qr.$$.fragment,o),A(Vr.$$.fragment,o),A(Jr.$$.fragment,o),A(Xr.$$.fragment,o),A(Yr.$$.fragment,o),A(oa.$$.fragment,o),A(jn.$$.fragment,o),A(Pn.$$.fragment,o),A(na.$$.fragment,o),A(sa.$$.fragment,o),A(la.$$.fragment,o),A(Ln.$$.fragment,o),A(In.$$.fragment,o),A(da.$$.fragment,o),A(ca.$$.fragment,o),A(ua.$$.fragment,o),A(Nn.$$.fragment,o),A(Dn.$$.fragment,o),A(Sn.$$.fragment,o),A(ga.$$.fragment,o),A(_a.$$.fragment,o),A(Ta.$$.fragment,o),A(Un.$$.fragment,o),A(Bn.$$.fragment,o),A(Rn.$$.fragment,o),A(Hn.$$.fragment,o),A(Qn.$$.fragment,o),A(ya.$$.fragment,o),A(wa.$$.fragment,o),A(xa.$$.fragment,o),A(Kn.$$.fragment,o),A(Jn.$$.fragment,o),A(Ea.$$.fragment,o),A(Ma.$$.fragment,o),A(Pa.$$.fragment,o),A(Xn.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(Ca.$$.fragment,o),A(La.$$.fragment,o),A(Da.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(Sa.$$.fragment,o),A(Wa.$$.fragment,o),A(rs.$$.fragment,o),A(Ha.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(Qa.$$.fragment,o),A(Va.$$.fragment,o),A(ds.$$.fragment,o),A(Xa.$$.fragment,o),A(cs.$$.fragment,o),A(ps.$$.fragment,o),A(Ya.$$.fragment,o),A(Za.$$.fragment,o),A(ms.$$.fragment,o),A(si.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(ri.$$.fragment,o),A(ai.$$.fragment,o),A(bs.$$.fragment,o),A(ci.$$.fragment,o),A(vs.$$.fragment,o),A(ks.$$.fragment,o),A(Ts.$$.fragment,o),A(pi.$$.fragment,o),A(hi.$$.fragment,o),A(ws.$$.fragment,o),A(gi.$$.fragment,o),A($s.$$.fragment,o),A(As.$$.fragment,o),A(_i.$$.fragment,o),A(bi.$$.fragment,o),A(xs.$$.fragment,o),A(yi.$$.fragment,o),A(Es.$$.fragment,o),A(Ms.$$.fragment,o),A(zs.$$.fragment,o),A(wi.$$.fragment,o),A($i.$$.fragment,o),A(js.$$.fragment,o),A(Ei.$$.fragment,o),A(Ps.$$.fragment,o),A(Cs.$$.fragment,o),A(Ls.$$.fragment,o),A(Mi.$$.fragment,o),A(zi.$$.fragment,o),A(Ni.$$.fragment,o),A(Os.$$.fragment,o),A(Ns.$$.fragment,o),A(Di.$$.fragment,o),A(Si.$$.fragment,o),A(Ki.$$.fragment,o),A(Ss.$$.fragment,o),A(Ws.$$.fragment,o),A(Ji.$$.fragment,o),A(Gi.$$.fragment,o),A(rl.$$.fragment,o),A(Bs.$$.fragment,o),A(Rs.$$.fragment,o),A(al.$$.fragment,o),A(il.$$.fragment,o),A(ul.$$.fragment,o),A(Qs.$$.fragment,o),A(Vs.$$.fragment,o),A(gl.$$.fragment,o),A(_l.$$.fragment,o),A(Al.$$.fragment,o),A(Js.$$.fragment,o),A(Gs.$$.fragment,o),A(Fl.$$.fragment,o),A(xl.$$.fragment,o),A(Ll.$$.fragment,o),A(Ys.$$.fragment,o),A(Zs.$$.fragment,o),A(Il.$$.fragment,o),A(Ol.$$.fragment,o),A(Hl.$$.fragment,o),A(tr.$$.fragment,o),A(or.$$.fragment,o),ou=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(G),o&&t(z),F(ee),o&&t(de),o&&t(K),o&&t(P),o&&t(Z),o&&t(ce),o&&t(j),o&&t(Q),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(he),o&&t(D),o&&t(Ae),o&&t(C),o&&t(me),o&&t(Te),F(Fr),o&&t(rf),o&&t(bt),F(xr),F($n),o&&t(af),o&&t(vo),F(Mr),o&&t(lf),o&&t(Pe),F(zr),F(Cr),F(Ir),F(Nr),F(xn),F(Dr),o&&t(df),o&&t(To),F(Sr),o&&t(cf),o&&t(vt),F(Wr),F(Br),F(Hr),F(Mn),o&&t(pf),o&&t(yo),F(Qr),o&&t(hf),o&&t(wo),F(Vr),o&&t(mf),o&&t($o),F(Jr),o&&t(ff),o&&t(Ao),F(Xr),o&&t(uf),o&&t(Ge),F(Yr),F(oa),F(jn),F(Pn),o&&t(gf),o&&t(xo),F(na),o&&t(_f),o&&t(Xe),F(sa),F(la),F(Ln),F(In),o&&t(bf),o&&t(zo),F(da),o&&t(vf),o&&t(Ye),F(ca),F(ua),F(Nn),F(Dn),F(Sn),o&&t(kf),o&&t(jo),F(ga),o&&t(Tf),o&&t(Ze),F(_a),F(Ta),F(Un),F(Bn),F(Rn),F(Hn),F(Qn),o&&t(yf),o&&t(Co),F(ya),o&&t(wf),o&&t(et),F(wa),F(xa),F(Kn),F(Jn),o&&t($f),o&&t(Io),F(Ea),o&&t(Af),o&&t(tt),F(Ma),F(Pa),F(Xn),F(Yn),F(Zn),o&&t(Ff),o&&t(No),F(Ca),o&&t(xf),o&&t(ot),F(La),F(Da),F(ts),F(os),F(ns),o&&t(Ef),o&&t(Wo),F(Sa),o&&t(Mf),o&&t(Ue),F(Wa),F(rs),F(Ha),F(as),F(is),o&&t(zf),o&&t(Bo),F(Qa),o&&t(qf),o&&t(Be),F(Va),F(ds),F(Xa),F(cs),F(ps),o&&t(jf),o&&t(Qo),F(Ya),o&&t(Pf),o&&t(Re),F(Za),F(ms),F(si),F(fs),F(us),F(gs),o&&t(Cf),o&&t(Ko),F(ri),o&&t(Lf),o&&t(He),F(ai),F(bs),F(ci),F(vs),F(ks),F(Ts),o&&t(If),o&&t(Go),F(pi),o&&t(Of),o&&t(Qe),F(hi),F(ws),F(gi),F($s),F(As),o&&t(Nf),o&&t(Yo),F(_i),o&&t(Df),o&&t(Ve),F(bi),F(xs),F(yi),F(Es),F(Ms),F(zs),o&&t(Sf),o&&t(en),F(wi),o&&t(Wf),o&&t(Ke),F($i),F(js),F(Ei),F(Ps),F(Cs),F(Ls),o&&t(Uf),o&&t(nn),F(Mi),o&&t(Bf),o&&t(Ce),F(zi),F(Ni),F(Os),F(Ns),o&&t(Rf),o&&t(rn),F(Di),o&&t(Hf),o&&t(Le),F(Si),F(Ki),F(Ss),F(Ws),o&&t(Qf),o&&t(dn),F(Ji),o&&t(Vf),o&&t(Ie),F(Gi),F(rl),F(Bs),F(Rs),o&&t(Kf),o&&t(pn),F(al),o&&t(Jf),o&&t(Oe),F(il),F(ul),F(Qs),F(Vs),o&&t(Gf),o&&t(mn),F(gl),o&&t(Xf),o&&t(Ne),F(_l),F(Al),F(Js),F(Gs),o&&t(Yf),o&&t(un),F(Fl),o&&t(Zf),o&&t(De),F(xl),F(Ll),F(Ys),F(Zs),o&&t(eu),o&&t(_n),F(Il),o&&t(tu),o&&t(Se),F(Ol),F(Hl),F(tr),F(or)}}}const _M={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function bM(x){return i3(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class AM extends n3{constructor(d){super();s3(this,d,bM,gM,r3,{})}}export{AM as default,_M as metadata};
