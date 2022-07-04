import{S as nz,i as sz,s as rz,e as n,k as c,w as v,t as a,M as az,c as s,d as t,m as p,a as r,x as y,h as i,b as u,G as e,g as b,y as w,q as $,o as A,B as F,v as iz,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as L}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function lz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertConfig, AlbertModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function dz(x){let d,g,h,m,_;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cz(x){let d,g,h,m,_;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function pz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function hz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function mz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function fz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function uz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function gz(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function _z(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function bz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function kz(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Tz(x){let d,g;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function vz(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function yz(x){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function wz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function $z(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Az(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Fz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function xz(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Ez(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Mz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function zz(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function qz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function jz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Pz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Cz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function Lz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Iz(x){let d,g,h,m,_;return m=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Oz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function Nz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Dz(x){let d,g,h,m,_;return m=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Sz(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Bz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function Wz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Uz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Rz(x){let d,g;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Hz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function Qz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Vz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Kz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function Jz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Gz(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Xz(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Yz(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),W=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),Te=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),O=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(T),m=s(T,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(T),z=s(T,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),W=s(C,"CODE",{});var xe=r(W);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(C,"CODE",{});var ye=r(U);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(T),I=s(T,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(T),q=s(T,"UL",{});var N=r(q);P=s(N,"LI",{});var S=r(P);Z=i(S,"a single Tensor with "),R=s(S,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(S," only and nothing else: "),H=s(S,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),S.forEach(t),ce=p(N),j=s(N,"LI",{});var B=r(j);Te=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(B,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),V=s(B,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),B.forEach(t),ne=p(N),O=s(N,"LI",{});var me=r(O);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),D=s(me,"CODE",{});var ve=r(D);le=i(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),me.forEach(t),N.forEach(t)},m(T,M){b(T,d,M),e(d,g),b(T,h,M),b(T,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(T,G,M),b(T,z,M),e(z,Y),e(z,W),e(W,ee),e(z,ue),e(z,U),e(U,ge),e(z,de),b(T,K,M),b(T,I,M),e(I,te),b(T,X,M),b(T,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,Te),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,O),e(O,he),e(O,D),e(D,le)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(G),T&&t(z),T&&t(K),T&&t(I),T&&t(X),T&&t(q)}}}function Zz(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function e4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function t4(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function o4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function n4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function s4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function r4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function a4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function i4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function l4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function d4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function c4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function p4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function h4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function m4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function f4(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function u4(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),v(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function g4(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,W,ee,ue,U,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,Te,Q,oe,ie,V,pe,ne,O,he,D,le,T,M,J,Fe,Ae,C,xe,ye,Ee,N,S,Me,ze,B,qe,je,me,ve,wn,Mc,Fr,vg,zc,yg,rf,bt,xr,wg,Wt,$g,rd,Ag,Fg,ad,xg,Eg,Er,Mg,zg,qg,bo,jg,id,Pg,Cg,ld,Lg,Ig,Og,$n,af,ko,An,qc,Mr,Ng,jc,Dg,lf,Pe,zr,Sg,qr,Bg,jr,Wg,Ug,Rg,Pr,Hg,dd,Qg,Vg,Kg,to,Cr,Jg,Pc,Gg,Xg,Lr,cd,Yg,Cc,Zg,e_,pd,t_,Lc,o_,n_,Fn,Ir,s_,Or,r_,Ic,a_,i_,l_,Tt,Nr,d_,Oc,c_,p_,xn,h_,To,m_,Nc,f_,u_,Dc,g_,__,b_,hd,Dr,df,vo,En,Sc,Sr,k_,Bc,T_,cf,kt,Br,v_,Ut,y_,Wc,w_,$_,Wr,A_,F_,md,x_,E_,M_,oo,Ur,z_,Uc,q_,j_,Rr,fd,P_,Rc,C_,L_,ud,I_,Hc,O_,N_,vt,Hr,D_,Qc,S_,B_,Mn,W_,Vc,U_,pf,yo,zn,Kc,Qr,R_,Jc,H_,hf,wo,Vr,Q_,Kr,V_,gd,K_,J_,mf,$o,Jr,G_,Gr,X_,_d,Y_,Z_,ff,Ao,qn,Gc,Xr,eb,Xc,tb,uf,Ge,Yr,ob,Yc,nb,sb,Zr,rb,bd,ab,ib,lb,ea,db,ta,cb,pb,hb,yt,oa,mb,Fo,fb,kd,ub,gb,Zc,_b,bb,kb,jn,Tb,Pn,gf,xo,Cn,ep,na,vb,tp,yb,_f,Xe,sa,wb,Eo,$b,op,Ab,Fb,np,xb,Eb,Mb,ra,zb,Td,qb,jb,Pb,aa,Cb,ia,Lb,Ib,Ob,wt,la,Nb,Mo,Db,vd,Sb,Bb,sp,Wb,Ub,Rb,Ln,Hb,In,bf,zo,On,rp,da,Qb,ap,Vb,kf,Ye,ca,Kb,pa,Jb,ip,Gb,Xb,Yb,ha,Zb,yd,ek,tk,ok,ma,nk,fa,sk,rk,ak,nt,ua,ik,qo,lk,wd,dk,ck,lp,pk,hk,mk,Nn,fk,Dn,uk,Sn,Tf,jo,Bn,dp,ga,gk,cp,_k,vf,Ze,_a,bk,pp,kk,Tk,ba,vk,$d,yk,wk,$k,ka,Ak,Ta,Fk,xk,Ek,Be,va,Mk,Po,zk,Ad,qk,jk,hp,Pk,Ck,Lk,Wn,Ik,Un,Ok,Rn,Nk,Hn,Dk,Qn,yf,Co,Vn,mp,ya,Sk,fp,Bk,wf,et,wa,Wk,up,Uk,Rk,$a,Hk,Fd,Qk,Vk,Kk,Aa,Jk,Fa,Gk,Xk,Yk,$t,xa,Zk,Lo,eT,xd,tT,oT,gp,nT,sT,rT,Kn,aT,Jn,$f,Io,Gn,_p,Ea,iT,bp,lT,Af,tt,Ma,dT,kp,cT,pT,za,hT,Ed,mT,fT,uT,qa,gT,ja,_T,bT,kT,st,Pa,TT,Oo,vT,Md,yT,wT,Tp,$T,AT,FT,Xn,xT,Yn,ET,Zn,Ff,No,es,vp,Ca,MT,yp,zT,xf,ot,La,qT,Do,jT,wp,PT,CT,$p,LT,IT,OT,Ia,NT,zd,DT,ST,BT,Oa,WT,Na,UT,RT,HT,rt,Da,QT,So,VT,qd,KT,JT,Ap,GT,XT,YT,ts,ZT,os,ev,ns,Ef,Bo,ss,Fp,Sa,tv,xp,ov,Mf,We,Ba,nv,Ep,sv,rv,Wa,av,jd,iv,lv,dv,Ua,cv,Ra,pv,hv,mv,rs,fv,At,Ha,uv,Wo,gv,Pd,_v,bv,Mp,kv,Tv,vv,as,yv,is,zf,Uo,ls,zp,Qa,wv,qp,$v,qf,Ue,Va,Av,Ro,Fv,jp,xv,Ev,Pp,Mv,zv,qv,Ka,jv,Cd,Pv,Cv,Lv,Ja,Iv,Ga,Ov,Nv,Dv,ds,Sv,Ft,Xa,Bv,Ho,Wv,Ld,Uv,Rv,Cp,Hv,Qv,Vv,cs,Kv,ps,jf,Qo,hs,Lp,Ya,Jv,Ip,Gv,Pf,Re,Za,Xv,ei,Yv,Op,Zv,ey,ty,ti,oy,Id,ny,sy,ry,oi,ay,ni,iy,ly,dy,ms,cy,at,si,py,Vo,hy,Od,my,fy,Np,uy,gy,_y,fs,by,us,ky,gs,Cf,Ko,_s,Dp,ri,Ty,Sp,vy,Lf,He,ai,yy,Bp,wy,$y,ii,Ay,Nd,Fy,xy,Ey,li,My,di,zy,qy,jy,bs,Py,it,ci,Cy,Jo,Ly,Dd,Iy,Oy,Wp,Ny,Dy,Sy,ks,By,Ts,Wy,vs,If,Go,ys,Up,pi,Uy,Rp,Ry,Of,Qe,hi,Hy,Hp,Qy,Vy,mi,Ky,Sd,Jy,Gy,Xy,fi,Yy,ui,Zy,ew,tw,ws,ow,xt,gi,nw,Xo,sw,Bd,rw,aw,Qp,iw,lw,dw,$s,cw,As,Nf,Yo,Fs,Vp,_i,pw,Kp,hw,Df,Ve,bi,mw,Jp,fw,uw,ki,gw,Wd,_w,bw,kw,Ti,Tw,vi,vw,yw,ww,xs,$w,lt,yi,Aw,Zo,Fw,Ud,xw,Ew,Gp,Mw,zw,qw,Es,jw,Ms,Pw,zs,Sf,en,qs,Xp,wi,Cw,Yp,Lw,Bf,Ke,$i,Iw,tn,Ow,Zp,Nw,Dw,eh,Sw,Bw,Ww,Ai,Uw,Rd,Rw,Hw,Qw,Fi,Vw,xi,Kw,Jw,Gw,js,Xw,dt,Ei,Yw,on,Zw,Hd,e$,t$,th,o$,n$,s$,Ps,r$,Cs,a$,Ls,Wf,nn,Is,oh,Mi,i$,nh,l$,Uf,Ce,zi,d$,sh,c$,p$,qi,h$,Qd,m$,f$,u$,ji,g$,Pi,_$,b$,k$,rh,T$,v$,Rt,ah,Ci,y$,w$,ih,Li,$$,A$,lh,Ii,F$,x$,dh,Oi,E$,M$,Et,Ni,z$,sn,q$,ch,j$,P$,ph,C$,L$,I$,Os,O$,Ns,Rf,rn,Ds,hh,Di,N$,mh,D$,Hf,Le,Si,S$,an,B$,fh,W$,U$,uh,R$,H$,Q$,Bi,V$,Vd,K$,J$,G$,Wi,X$,Ui,Y$,Z$,e1,gh,t1,o1,Ht,_h,Ri,n1,s1,bh,Hi,r1,a1,kh,Qi,i1,l1,Th,Vi,d1,c1,Mt,Ki,p1,ln,h1,vh,m1,f1,yh,u1,g1,_1,Ss,b1,Bs,Qf,dn,Ws,wh,Ji,k1,$h,T1,Vf,Ie,Gi,v1,Xi,y1,Ah,w1,$1,A1,Yi,F1,Kd,x1,E1,M1,Zi,z1,el,q1,j1,P1,Fh,C1,L1,Qt,xh,tl,I1,O1,Eh,ol,N1,D1,Mh,nl,S1,B1,zh,sl,W1,U1,zt,rl,R1,cn,H1,qh,Q1,V1,jh,K1,J1,G1,Us,X1,Rs,Kf,pn,Hs,Ph,al,Y1,Ch,Z1,Jf,Oe,il,e2,Lh,t2,o2,ll,n2,Jd,s2,r2,a2,dl,i2,cl,l2,d2,c2,Ih,p2,h2,Vt,Oh,pl,m2,f2,Nh,hl,u2,g2,Dh,ml,_2,b2,Sh,fl,k2,T2,qt,ul,v2,hn,y2,Bh,w2,$2,Wh,A2,F2,x2,Qs,E2,Vs,Gf,mn,Ks,Uh,gl,M2,Rh,z2,Xf,Ne,_l,q2,Hh,j2,P2,bl,C2,Gd,L2,I2,O2,kl,N2,Tl,D2,S2,B2,Qh,W2,U2,Kt,Vh,vl,R2,H2,Kh,yl,Q2,V2,Jh,wl,K2,J2,Gh,$l,G2,X2,jt,Al,Y2,fn,Z2,Xh,eA,tA,Yh,oA,nA,sA,Js,rA,Gs,Yf,un,Xs,Zh,Fl,aA,em,iA,Zf,De,xl,lA,tm,dA,cA,El,pA,Xd,hA,mA,fA,Ml,uA,zl,gA,_A,bA,om,kA,TA,Jt,nm,ql,vA,yA,sm,jl,wA,$A,rm,Pl,AA,FA,am,Cl,xA,EA,Pt,Ll,MA,gn,zA,im,qA,jA,lm,PA,CA,LA,Ys,IA,Zs,eu,_n,er,dm,Il,OA,cm,NA,tu,Se,Ol,DA,bn,SA,pm,BA,WA,hm,UA,RA,HA,Nl,QA,Yd,VA,KA,JA,Dl,GA,Sl,XA,YA,ZA,mm,eF,tF,Gt,fm,Bl,oF,nF,um,Wl,sF,rF,gm,Ul,aF,iF,_m,Rl,lF,dF,Ct,Hl,cF,kn,pF,bm,hF,mF,km,fF,uF,gF,tr,_F,or,ou;return l=new $e({}),ee=new $e({}),Fr=new $e({}),xr=new L({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/configuration_albert.py#L36"}}),$n=new se({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[lz]},$$scope:{ctx:x}}}),Mr=new $e({}),zr=new L({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L59"}}),Cr=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ir=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Nr=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new se({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[dz]},$$scope:{ctx:x}}}),Dr=new L({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L338"}}),Sr=new $e({}),Br=new L({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Ur=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hr=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mn=new se({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[cz]},$$scope:{ctx:x}}}),Qr=new $e({}),Vr=new L({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L535"}}),Jr=new L({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L655"}}),Xr=new $e({}),Yr=new L({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L638"}}),oa=new L({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L682",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new we({props:{$$slots:{default:[pz]},$$scope:{ctx:x}}}),Pn=new se({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[hz]},$$scope:{ctx:x}}}),na=new $e({}),sa=new L({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L768"}}),la=new L({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new we({props:{$$slots:{default:[mz]},$$scope:{ctx:x}}}),In=new se({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[fz]},$$scope:{ctx:x}}}),da=new $e({}),ca=new L({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L914"}}),ua=new L({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L936",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new we({props:{$$slots:{default:[uz]},$$scope:{ctx:x}}}),Dn=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[gz]},$$scope:{ctx:x}}}),Sn=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_z]},$$scope:{ctx:x}}}),ga=new $e({}),_a=new L({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1029"}}),va=new L({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1042",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new we({props:{$$slots:{default:[bz]},$$scope:{ctx:x}}}),Un=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[kz]},$$scope:{ctx:x}}}),Rn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[Tz]},$$scope:{ctx:x}}}),Hn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[vz]},$$scope:{ctx:x}}}),Qn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[yz]},$$scope:{ctx:x}}}),ya=new $e({}),wa=new L({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1330"}}),xa=new L({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1341",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new we({props:{$$slots:{default:[wz]},$$scope:{ctx:x}}}),Jn=new se({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$z]},$$scope:{ctx:x}}}),Ea=new $e({}),Ma=new L({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1131"}}),Pa=new L({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new we({props:{$$slots:{default:[Az]},$$scope:{ctx:x}}}),Yn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[Fz]},$$scope:{ctx:x}}}),Zn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[xz]},$$scope:{ctx:x}}}),Ca=new $e({}),La=new L({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1223"}}),Da=new L({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1237",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new we({props:{$$slots:{default:[Ez]},$$scope:{ctx:x}}}),os=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[Mz]},$$scope:{ctx:x}}}),ns=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[zz]},$$scope:{ctx:x}}}),Sa=new $e({}),Ba=new L({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L782"}}),rs=new we({props:{$$slots:{default:[qz]},$$scope:{ctx:x}}}),Ha=new L({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new we({props:{$$slots:{default:[jz]},$$scope:{ctx:x}}}),is=new se({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[Pz]},$$scope:{ctx:x}}}),Qa=new $e({}),Va=new L({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L843"}}),ds=new we({props:{$$slots:{default:[Cz]},$$scope:{ctx:x}}}),Xa=new L({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L859",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new we({props:{$$slots:{default:[Lz]},$$scope:{ctx:x}}}),ps=new se({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[Iz]},$$scope:{ctx:x}}}),Ya=new $e({}),Za=new L({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L962"}}),ms=new we({props:{$$slots:{default:[Oz]},$$scope:{ctx:x}}}),si=new L({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L975",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fs=new we({props:{$$slots:{default:[Nz]},$$scope:{ctx:x}}}),us=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[Dz]},$$scope:{ctx:x}}}),gs=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[Sz]},$$scope:{ctx:x}}}),ri=new $e({}),ai=new L({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1071"}}),bs=new we({props:{$$slots:{default:[Bz]},$$scope:{ctx:x}}}),ci=new L({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1087",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new we({props:{$$slots:{default:[Wz]},$$scope:{ctx:x}}}),Ts=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[Uz]},$$scope:{ctx:x}}}),vs=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[Rz]},$$scope:{ctx:x}}}),pi=new $e({}),hi=new L({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1362"}}),ws=new we({props:{$$slots:{default:[Hz]},$$scope:{ctx:x}}}),gi=new L({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1386",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[Qz]},$$scope:{ctx:x}}}),As=new se({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[Vz]},$$scope:{ctx:x}}}),_i=new $e({}),bi=new L({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1161"}}),xs=new we({props:{$$slots:{default:[Kz]},$$scope:{ctx:x}}}),yi=new L({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1182",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new we({props:{$$slots:{default:[Jz]},$$scope:{ctx:x}}}),Ms=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[Gz]},$$scope:{ctx:x}}}),zs=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[Xz]},$$scope:{ctx:x}}}),wi=new $e({}),$i=new L({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1257"}}),js=new we({props:{$$slots:{default:[Yz]},$$scope:{ctx:x}}}),Ei=new L({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[Zz]},$$scope:{ctx:x}}}),Cs=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[e4]},$$scope:{ctx:x}}}),Ls=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[t4]},$$scope:{ctx:x}}}),Mi=new $e({}),zi=new L({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Ni=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new we({props:{$$slots:{default:[o4]},$$scope:{ctx:x}}}),Ns=new se({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[n4]},$$scope:{ctx:x}}}),Di=new $e({}),Si=new L({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),Ki=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
`}}),Ss=new we({props:{$$slots:{default:[s4]},$$scope:{ctx:x}}}),Bs=new se({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[r4]},$$scope:{ctx:x}}}),Ji=new $e({}),Gi=new L({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),rl=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new we({props:{$$slots:{default:[a4]},$$scope:{ctx:x}}}),Rs=new se({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[i4]},$$scope:{ctx:x}}}),al=new $e({}),il=new L({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),ul=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new we({props:{$$slots:{default:[l4]},$$scope:{ctx:x}}}),Vs=new se({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[d4]},$$scope:{ctx:x}}}),gl=new $e({}),_l=new L({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Al=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new we({props:{$$slots:{default:[c4]},$$scope:{ctx:x}}}),Gs=new se({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[p4]},$$scope:{ctx:x}}}),Fl=new $e({}),xl=new L({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Ll=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[h4]},$$scope:{ctx:x}}}),Zs=new se({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[m4]},$$scope:{ctx:x}}}),Il=new $e({}),Ol=new L({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),Hl=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new we({props:{$$slots:{default:[f4]},$$scope:{ctx:x}}}),or=new se({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[u4]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),v(l.$$.fragment),f=c(),E=n("span"),fe=a("ALBERT"),G=c(),z=n("h2"),Y=n("a"),W=n("span"),v(ee.$$.fragment),ue=c(),U=n("span"),ge=a("Overview"),de=c(),K=n("p"),I=a("The ALBERT model was proposed in "),te=n("a"),X=a("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),q=a(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),P=c(),Z=n("ul"),R=n("li"),_e=a("Splitting the embedding matrix into two smaller matrices."),be=c(),H=n("li"),ke=a("Using repeating layers split among groups."),ce=c(),j=n("p"),Te=a("The abstract from the paper is the following:"),Q=c(),oe=n("p"),ie=n("em"),V=a(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),pe=c(),ne=n("p"),O=a("Tips:"),he=c(),D=n("ul"),le=n("li"),T=a(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),M=c(),J=n("li"),Fe=a(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Ae=c(),C=n("p"),xe=a("This model was contributed by "),ye=n("a"),Ee=a("lysandre"),N=a(`. This model jax version was contributed by
`),S=n("a"),Me=a("kamalkraj"),ze=a(". The original code can be found "),B=n("a"),qe=a("here"),je=a("."),me=c(),ve=n("h2"),wn=n("a"),Mc=n("span"),v(Fr.$$.fragment),vg=c(),zc=n("span"),yg=a("AlbertConfig"),rf=c(),bt=n("div"),v(xr.$$.fragment),wg=c(),Wt=n("p"),$g=a("This is the configuration class to store the configuration of a "),rd=n("a"),Ag=a("AlbertModel"),Fg=a(" or a "),ad=n("a"),xg=a("TFAlbertModel"),Eg=a(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=n("a"),Mg=a("albert-xxlarge-v2"),zg=a(" architecture."),qg=c(),bo=n("p"),jg=a("Configuration objects inherit from "),id=n("a"),Pg=a("PretrainedConfig"),Cg=a(` and can be used to control the model outputs. Read the
documentation from `),ld=n("a"),Lg=a("PretrainedConfig"),Ig=a(" for more information."),Og=c(),v($n.$$.fragment),af=c(),ko=n("h2"),An=n("a"),qc=n("span"),v(Mr.$$.fragment),Ng=c(),jc=n("span"),Dg=a("AlbertTokenizer"),lf=c(),Pe=n("div"),v(zr.$$.fragment),Sg=c(),qr=n("p"),Bg=a("Construct an ALBERT tokenizer. Based on "),jr=n("a"),Wg=a("SentencePiece"),Ug=a("."),Rg=c(),Pr=n("p"),Hg=a("This tokenizer inherits from "),dd=n("a"),Qg=a("PreTrainedTokenizer"),Vg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kg=c(),to=n("div"),v(Cr.$$.fragment),Jg=c(),Pc=n("p"),Gg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=c(),Lr=n("ul"),cd=n("li"),Yg=a("single sequence: "),Cc=n("code"),Zg=a("[CLS] X [SEP]"),e_=c(),pd=n("li"),t_=a("pair of sequences: "),Lc=n("code"),o_=a("[CLS] A [SEP] B [SEP]"),n_=c(),Fn=n("div"),v(Ir.$$.fragment),s_=c(),Or=n("p"),r_=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ic=n("code"),a_=a("prepare_for_model"),i_=a(" method."),l_=c(),Tt=n("div"),v(Nr.$$.fragment),d_=c(),Oc=n("p"),c_=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),p_=c(),v(xn.$$.fragment),h_=c(),To=n("p"),m_=a("If "),Nc=n("code"),f_=a("token_ids_1"),u_=a(" is "),Dc=n("code"),g_=a("None"),__=a(", this method only returns the first portion of the mask (0s)."),b_=c(),hd=n("div"),v(Dr.$$.fragment),df=c(),vo=n("h2"),En=n("a"),Sc=n("span"),v(Sr.$$.fragment),k_=c(),Bc=n("span"),T_=a("AlbertTokenizerFast"),cf=c(),kt=n("div"),v(Br.$$.fragment),v_=c(),Ut=n("p"),y_=a("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Wc=n("em"),w_=a("tokenizers"),$_=a(` library). Based on
`),Wr=n("a"),A_=a("Unigram"),F_=a(`. This
tokenizer inherits from `),md=n("a"),x_=a("PreTrainedTokenizerFast"),E_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=c(),oo=n("div"),v(Ur.$$.fragment),z_=c(),Uc=n("p"),q_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),j_=c(),Rr=n("ul"),fd=n("li"),P_=a("single sequence: "),Rc=n("code"),C_=a("[CLS] X [SEP]"),L_=c(),ud=n("li"),I_=a("pair of sequences: "),Hc=n("code"),O_=a("[CLS] A [SEP] B [SEP]"),N_=c(),vt=n("div"),v(Hr.$$.fragment),D_=c(),Qc=n("p"),S_=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),B_=c(),v(Mn.$$.fragment),W_=c(),Vc=n("p"),U_=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),pf=c(),yo=n("h2"),zn=n("a"),Kc=n("span"),v(Qr.$$.fragment),R_=c(),Jc=n("span"),H_=a("Albert specific outputs"),hf=c(),wo=n("div"),v(Vr.$$.fragment),Q_=c(),Kr=n("p"),V_=a("Output type of "),gd=n("a"),K_=a("AlbertForPreTraining"),J_=a("."),mf=c(),$o=n("div"),v(Jr.$$.fragment),G_=c(),Gr=n("p"),X_=a("Output type of "),_d=n("a"),Y_=a("TFAlbertForPreTraining"),Z_=a("."),ff=c(),Ao=n("h2"),qn=n("a"),Gc=n("span"),v(Xr.$$.fragment),eb=c(),Xc=n("span"),tb=a("AlbertModel"),uf=c(),Ge=n("div"),v(Yr.$$.fragment),ob=c(),Yc=n("p"),nb=a("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=c(),Zr=n("p"),rb=a("This model inherits from "),bd=n("a"),ab=a("PreTrainedModel"),ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=c(),ea=n("p"),db=a("This model is also a PyTorch "),ta=n("a"),cb=a("torch.nn.Module"),pb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=c(),yt=n("div"),v(oa.$$.fragment),mb=c(),Fo=n("p"),fb=a("The "),kd=n("a"),ub=a("AlbertModel"),gb=a(" forward method, overrides the "),Zc=n("code"),_b=a("__call__"),bb=a(" special method."),kb=c(),v(jn.$$.fragment),Tb=c(),v(Pn.$$.fragment),gf=c(),xo=n("h2"),Cn=n("a"),ep=n("span"),v(na.$$.fragment),vb=c(),tp=n("span"),yb=a("AlbertForPreTraining"),_f=c(),Xe=n("div"),v(sa.$$.fragment),wb=c(),Eo=n("p"),$b=a("Albert Model with two heads on top as done during the pretraining: a "),op=n("code"),Ab=a("masked language modeling"),Fb=a(` head and a
`),np=n("code"),xb=a("sentence order prediction (classification)"),Eb=a(" head."),Mb=c(),ra=n("p"),zb=a("This model inherits from "),Td=n("a"),qb=a("PreTrainedModel"),jb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=c(),aa=n("p"),Cb=a("This model is also a PyTorch "),ia=n("a"),Lb=a("torch.nn.Module"),Ib=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ob=c(),wt=n("div"),v(la.$$.fragment),Nb=c(),Mo=n("p"),Db=a("The "),vd=n("a"),Sb=a("AlbertForPreTraining"),Bb=a(" forward method, overrides the "),sp=n("code"),Wb=a("__call__"),Ub=a(" special method."),Rb=c(),v(Ln.$$.fragment),Hb=c(),v(In.$$.fragment),bf=c(),zo=n("h2"),On=n("a"),rp=n("span"),v(da.$$.fragment),Qb=c(),ap=n("span"),Vb=a("AlbertForMaskedLM"),kf=c(),Ye=n("div"),v(ca.$$.fragment),Kb=c(),pa=n("p"),Jb=a("Albert Model with a "),ip=n("code"),Gb=a("language modeling"),Xb=a(" head on top."),Yb=c(),ha=n("p"),Zb=a("This model inherits from "),yd=n("a"),ek=a("PreTrainedModel"),tk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=c(),ma=n("p"),nk=a("This model is also a PyTorch "),fa=n("a"),sk=a("torch.nn.Module"),rk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak=c(),nt=n("div"),v(ua.$$.fragment),ik=c(),qo=n("p"),lk=a("The "),wd=n("a"),dk=a("AlbertForMaskedLM"),ck=a(" forward method, overrides the "),lp=n("code"),pk=a("__call__"),hk=a(" special method."),mk=c(),v(Nn.$$.fragment),fk=c(),v(Dn.$$.fragment),uk=c(),v(Sn.$$.fragment),Tf=c(),jo=n("h2"),Bn=n("a"),dp=n("span"),v(ga.$$.fragment),gk=c(),cp=n("span"),_k=a("AlbertForSequenceClassification"),vf=c(),Ze=n("div"),v(_a.$$.fragment),bk=c(),pp=n("p"),kk=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Tk=c(),ba=n("p"),vk=a("This model inherits from "),$d=n("a"),yk=a("PreTrainedModel"),wk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=c(),ka=n("p"),Ak=a("This model is also a PyTorch "),Ta=n("a"),Fk=a("torch.nn.Module"),xk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=c(),Be=n("div"),v(va.$$.fragment),Mk=c(),Po=n("p"),zk=a("The "),Ad=n("a"),qk=a("AlbertForSequenceClassification"),jk=a(" forward method, overrides the "),hp=n("code"),Pk=a("__call__"),Ck=a(" special method."),Lk=c(),v(Wn.$$.fragment),Ik=c(),v(Un.$$.fragment),Ok=c(),v(Rn.$$.fragment),Nk=c(),v(Hn.$$.fragment),Dk=c(),v(Qn.$$.fragment),yf=c(),Co=n("h2"),Vn=n("a"),mp=n("span"),v(ya.$$.fragment),Sk=c(),fp=n("span"),Bk=a("AlbertForMultipleChoice"),wf=c(),et=n("div"),v(wa.$$.fragment),Wk=c(),up=n("p"),Uk=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rk=c(),$a=n("p"),Hk=a("This model inherits from "),Fd=n("a"),Qk=a("PreTrainedModel"),Vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk=c(),Aa=n("p"),Jk=a("This model is also a PyTorch "),Fa=n("a"),Gk=a("torch.nn.Module"),Xk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk=c(),$t=n("div"),v(xa.$$.fragment),Zk=c(),Lo=n("p"),eT=a("The "),xd=n("a"),tT=a("AlbertForMultipleChoice"),oT=a(" forward method, overrides the "),gp=n("code"),nT=a("__call__"),sT=a(" special method."),rT=c(),v(Kn.$$.fragment),aT=c(),v(Jn.$$.fragment),$f=c(),Io=n("h2"),Gn=n("a"),_p=n("span"),v(Ea.$$.fragment),iT=c(),bp=n("span"),lT=a("AlbertForTokenClassification"),Af=c(),tt=n("div"),v(Ma.$$.fragment),dT=c(),kp=n("p"),cT=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pT=c(),za=n("p"),hT=a("This model inherits from "),Ed=n("a"),mT=a("PreTrainedModel"),fT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uT=c(),qa=n("p"),gT=a("This model is also a PyTorch "),ja=n("a"),_T=a("torch.nn.Module"),bT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kT=c(),st=n("div"),v(Pa.$$.fragment),TT=c(),Oo=n("p"),vT=a("The "),Md=n("a"),yT=a("AlbertForTokenClassification"),wT=a(" forward method, overrides the "),Tp=n("code"),$T=a("__call__"),AT=a(" special method."),FT=c(),v(Xn.$$.fragment),xT=c(),v(Yn.$$.fragment),ET=c(),v(Zn.$$.fragment),Ff=c(),No=n("h2"),es=n("a"),vp=n("span"),v(Ca.$$.fragment),MT=c(),yp=n("span"),zT=a("AlbertForQuestionAnswering"),xf=c(),ot=n("div"),v(La.$$.fragment),qT=c(),Do=n("p"),jT=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=n("code"),PT=a("span start logits"),CT=a(" and "),$p=n("code"),LT=a("span end logits"),IT=a(")."),OT=c(),Ia=n("p"),NT=a("This model inherits from "),zd=n("a"),DT=a("PreTrainedModel"),ST=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),BT=c(),Oa=n("p"),WT=a("This model is also a PyTorch "),Na=n("a"),UT=a("torch.nn.Module"),RT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),HT=c(),rt=n("div"),v(Da.$$.fragment),QT=c(),So=n("p"),VT=a("The "),qd=n("a"),KT=a("AlbertForQuestionAnswering"),JT=a(" forward method, overrides the "),Ap=n("code"),GT=a("__call__"),XT=a(" special method."),YT=c(),v(ts.$$.fragment),ZT=c(),v(os.$$.fragment),ev=c(),v(ns.$$.fragment),Ef=c(),Bo=n("h2"),ss=n("a"),Fp=n("span"),v(Sa.$$.fragment),tv=c(),xp=n("span"),ov=a("TFAlbertModel"),Mf=c(),We=n("div"),v(Ba.$$.fragment),nv=c(),Ep=n("p"),sv=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),rv=c(),Wa=n("p"),av=a("This model inherits from "),jd=n("a"),iv=a("TFPreTrainedModel"),lv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dv=c(),Ua=n("p"),cv=a("This model is also a "),Ra=n("a"),pv=a("tf.keras.Model"),hv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=c(),v(rs.$$.fragment),fv=c(),At=n("div"),v(Ha.$$.fragment),uv=c(),Wo=n("p"),gv=a("The "),Pd=n("a"),_v=a("TFAlbertModel"),bv=a(" forward method, overrides the "),Mp=n("code"),kv=a("__call__"),Tv=a(" special method."),vv=c(),v(as.$$.fragment),yv=c(),v(is.$$.fragment),zf=c(),Uo=n("h2"),ls=n("a"),zp=n("span"),v(Qa.$$.fragment),wv=c(),qp=n("span"),$v=a("TFAlbertForPreTraining"),qf=c(),Ue=n("div"),v(Va.$$.fragment),Av=c(),Ro=n("p"),Fv=a("Albert Model with two heads on top for pretraining: a "),jp=n("code"),xv=a("masked language modeling"),Ev=a(" head and a "),Pp=n("code"),Mv=a("sentence order prediction"),zv=a(" (classification) head."),qv=c(),Ka=n("p"),jv=a("This model inherits from "),Cd=n("a"),Pv=a("TFPreTrainedModel"),Cv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lv=c(),Ja=n("p"),Iv=a("This model is also a "),Ga=n("a"),Ov=a("tf.keras.Model"),Nv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv=c(),v(ds.$$.fragment),Sv=c(),Ft=n("div"),v(Xa.$$.fragment),Bv=c(),Ho=n("p"),Wv=a("The "),Ld=n("a"),Uv=a("TFAlbertForPreTraining"),Rv=a(" forward method, overrides the "),Cp=n("code"),Hv=a("__call__"),Qv=a(" special method."),Vv=c(),v(cs.$$.fragment),Kv=c(),v(ps.$$.fragment),jf=c(),Qo=n("h2"),hs=n("a"),Lp=n("span"),v(Ya.$$.fragment),Jv=c(),Ip=n("span"),Gv=a("TFAlbertForMaskedLM"),Pf=c(),Re=n("div"),v(Za.$$.fragment),Xv=c(),ei=n("p"),Yv=a("Albert Model with a "),Op=n("code"),Zv=a("language modeling"),ey=a(" head on top."),ty=c(),ti=n("p"),oy=a("This model inherits from "),Id=n("a"),ny=a("TFPreTrainedModel"),sy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ry=c(),oi=n("p"),ay=a("This model is also a "),ni=n("a"),iy=a("tf.keras.Model"),ly=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=c(),v(ms.$$.fragment),cy=c(),at=n("div"),v(si.$$.fragment),py=c(),Vo=n("p"),hy=a("The "),Od=n("a"),my=a("TFAlbertForMaskedLM"),fy=a(" forward method, overrides the "),Np=n("code"),uy=a("__call__"),gy=a(" special method."),_y=c(),v(fs.$$.fragment),by=c(),v(us.$$.fragment),ky=c(),v(gs.$$.fragment),Cf=c(),Ko=n("h2"),_s=n("a"),Dp=n("span"),v(ri.$$.fragment),Ty=c(),Sp=n("span"),vy=a("TFAlbertForSequenceClassification"),Lf=c(),He=n("div"),v(ai.$$.fragment),yy=c(),Bp=n("p"),wy=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$y=c(),ii=n("p"),Ay=a("This model inherits from "),Nd=n("a"),Fy=a("TFPreTrainedModel"),xy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ey=c(),li=n("p"),My=a("This model is also a "),di=n("a"),zy=a("tf.keras.Model"),qy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jy=c(),v(bs.$$.fragment),Py=c(),it=n("div"),v(ci.$$.fragment),Cy=c(),Jo=n("p"),Ly=a("The "),Dd=n("a"),Iy=a("TFAlbertForSequenceClassification"),Oy=a(" forward method, overrides the "),Wp=n("code"),Ny=a("__call__"),Dy=a(" special method."),Sy=c(),v(ks.$$.fragment),By=c(),v(Ts.$$.fragment),Wy=c(),v(vs.$$.fragment),If=c(),Go=n("h2"),ys=n("a"),Up=n("span"),v(pi.$$.fragment),Uy=c(),Rp=n("span"),Ry=a("TFAlbertForMultipleChoice"),Of=c(),Qe=n("div"),v(hi.$$.fragment),Hy=c(),Hp=n("p"),Qy=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Vy=c(),mi=n("p"),Ky=a("This model inherits from "),Sd=n("a"),Jy=a("TFPreTrainedModel"),Gy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xy=c(),fi=n("p"),Yy=a("This model is also a "),ui=n("a"),Zy=a("tf.keras.Model"),ew=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tw=c(),v(ws.$$.fragment),ow=c(),xt=n("div"),v(gi.$$.fragment),nw=c(),Xo=n("p"),sw=a("The "),Bd=n("a"),rw=a("TFAlbertForMultipleChoice"),aw=a(" forward method, overrides the "),Qp=n("code"),iw=a("__call__"),lw=a(" special method."),dw=c(),v($s.$$.fragment),cw=c(),v(As.$$.fragment),Nf=c(),Yo=n("h2"),Fs=n("a"),Vp=n("span"),v(_i.$$.fragment),pw=c(),Kp=n("span"),hw=a("TFAlbertForTokenClassification"),Df=c(),Ve=n("div"),v(bi.$$.fragment),mw=c(),Jp=n("p"),fw=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uw=c(),ki=n("p"),gw=a("This model inherits from "),Wd=n("a"),_w=a("TFPreTrainedModel"),bw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kw=c(),Ti=n("p"),Tw=a("This model is also a "),vi=n("a"),vw=a("tf.keras.Model"),yw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ww=c(),v(xs.$$.fragment),$w=c(),lt=n("div"),v(yi.$$.fragment),Aw=c(),Zo=n("p"),Fw=a("The "),Ud=n("a"),xw=a("TFAlbertForTokenClassification"),Ew=a(" forward method, overrides the "),Gp=n("code"),Mw=a("__call__"),zw=a(" special method."),qw=c(),v(Es.$$.fragment),jw=c(),v(Ms.$$.fragment),Pw=c(),v(zs.$$.fragment),Sf=c(),en=n("h2"),qs=n("a"),Xp=n("span"),v(wi.$$.fragment),Cw=c(),Yp=n("span"),Lw=a("TFAlbertForQuestionAnswering"),Bf=c(),Ke=n("div"),v($i.$$.fragment),Iw=c(),tn=n("p"),Ow=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=n("code"),Nw=a("span start logits"),Dw=a(" and "),eh=n("code"),Sw=a("span end logits"),Bw=a(")."),Ww=c(),Ai=n("p"),Uw=a("This model inherits from "),Rd=n("a"),Rw=a("TFPreTrainedModel"),Hw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qw=c(),Fi=n("p"),Vw=a("This model is also a "),xi=n("a"),Kw=a("tf.keras.Model"),Jw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gw=c(),v(js.$$.fragment),Xw=c(),dt=n("div"),v(Ei.$$.fragment),Yw=c(),on=n("p"),Zw=a("The "),Hd=n("a"),e$=a("TFAlbertForQuestionAnswering"),t$=a(" forward method, overrides the "),th=n("code"),o$=a("__call__"),n$=a(" special method."),s$=c(),v(Ps.$$.fragment),r$=c(),v(Cs.$$.fragment),a$=c(),v(Ls.$$.fragment),Wf=c(),nn=n("h2"),Is=n("a"),oh=n("span"),v(Mi.$$.fragment),i$=c(),nh=n("span"),l$=a("FlaxAlbertModel"),Uf=c(),Ce=n("div"),v(zi.$$.fragment),d$=c(),sh=n("p"),c$=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),p$=c(),qi=n("p"),h$=a("This model inherits from "),Qd=n("a"),m$=a("FlaxPreTrainedModel"),f$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),u$=c(),ji=n("p"),g$=a("This model is also a Flax Linen "),Pi=n("a"),_$=a("flax.linen.Module"),b$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),k$=c(),rh=n("p"),T$=a("Finally, this model supports inherent JAX features such as:"),v$=c(),Rt=n("ul"),ah=n("li"),Ci=n("a"),y$=a("Just-In-Time (JIT) compilation"),w$=c(),ih=n("li"),Li=n("a"),$$=a("Automatic Differentiation"),A$=c(),lh=n("li"),Ii=n("a"),F$=a("Vectorization"),x$=c(),dh=n("li"),Oi=n("a"),E$=a("Parallelization"),M$=c(),Et=n("div"),v(Ni.$$.fragment),z$=c(),sn=n("p"),q$=a("The "),ch=n("code"),j$=a("FlaxAlbertPreTrainedModel"),P$=a(" forward method, overrides the "),ph=n("code"),C$=a("__call__"),L$=a(" special method."),I$=c(),v(Os.$$.fragment),O$=c(),v(Ns.$$.fragment),Rf=c(),rn=n("h2"),Ds=n("a"),hh=n("span"),v(Di.$$.fragment),N$=c(),mh=n("span"),D$=a("FlaxAlbertForPreTraining"),Hf=c(),Le=n("div"),v(Si.$$.fragment),S$=c(),an=n("p"),B$=a("Albert Model with two heads on top as done during the pretraining: a "),fh=n("code"),W$=a("masked language modeling"),U$=a(` head and a
`),uh=n("code"),R$=a("sentence order prediction (classification)"),H$=a(" head."),Q$=c(),Bi=n("p"),V$=a("This model inherits from "),Vd=n("a"),K$=a("FlaxPreTrainedModel"),J$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G$=c(),Wi=n("p"),X$=a("This model is also a Flax Linen "),Ui=n("a"),Y$=a("flax.linen.Module"),Z$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e1=c(),gh=n("p"),t1=a("Finally, this model supports inherent JAX features such as:"),o1=c(),Ht=n("ul"),_h=n("li"),Ri=n("a"),n1=a("Just-In-Time (JIT) compilation"),s1=c(),bh=n("li"),Hi=n("a"),r1=a("Automatic Differentiation"),a1=c(),kh=n("li"),Qi=n("a"),i1=a("Vectorization"),l1=c(),Th=n("li"),Vi=n("a"),d1=a("Parallelization"),c1=c(),Mt=n("div"),v(Ki.$$.fragment),p1=c(),ln=n("p"),h1=a("The "),vh=n("code"),m1=a("FlaxAlbertPreTrainedModel"),f1=a(" forward method, overrides the "),yh=n("code"),u1=a("__call__"),g1=a(" special method."),_1=c(),v(Ss.$$.fragment),b1=c(),v(Bs.$$.fragment),Qf=c(),dn=n("h2"),Ws=n("a"),wh=n("span"),v(Ji.$$.fragment),k1=c(),$h=n("span"),T1=a("FlaxAlbertForMaskedLM"),Vf=c(),Ie=n("div"),v(Gi.$$.fragment),v1=c(),Xi=n("p"),y1=a("Albert Model with a "),Ah=n("code"),w1=a("language modeling"),$1=a(" head on top."),A1=c(),Yi=n("p"),F1=a("This model inherits from "),Kd=n("a"),x1=a("FlaxPreTrainedModel"),E1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M1=c(),Zi=n("p"),z1=a("This model is also a Flax Linen "),el=n("a"),q1=a("flax.linen.Module"),j1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),P1=c(),Fh=n("p"),C1=a("Finally, this model supports inherent JAX features such as:"),L1=c(),Qt=n("ul"),xh=n("li"),tl=n("a"),I1=a("Just-In-Time (JIT) compilation"),O1=c(),Eh=n("li"),ol=n("a"),N1=a("Automatic Differentiation"),D1=c(),Mh=n("li"),nl=n("a"),S1=a("Vectorization"),B1=c(),zh=n("li"),sl=n("a"),W1=a("Parallelization"),U1=c(),zt=n("div"),v(rl.$$.fragment),R1=c(),cn=n("p"),H1=a("The "),qh=n("code"),Q1=a("FlaxAlbertPreTrainedModel"),V1=a(" forward method, overrides the "),jh=n("code"),K1=a("__call__"),J1=a(" special method."),G1=c(),v(Us.$$.fragment),X1=c(),v(Rs.$$.fragment),Kf=c(),pn=n("h2"),Hs=n("a"),Ph=n("span"),v(al.$$.fragment),Y1=c(),Ch=n("span"),Z1=a("FlaxAlbertForSequenceClassification"),Jf=c(),Oe=n("div"),v(il.$$.fragment),e2=c(),Lh=n("p"),t2=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o2=c(),ll=n("p"),n2=a("This model inherits from "),Jd=n("a"),s2=a("FlaxPreTrainedModel"),r2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a2=c(),dl=n("p"),i2=a("This model is also a Flax Linen "),cl=n("a"),l2=a("flax.linen.Module"),d2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c2=c(),Ih=n("p"),p2=a("Finally, this model supports inherent JAX features such as:"),h2=c(),Vt=n("ul"),Oh=n("li"),pl=n("a"),m2=a("Just-In-Time (JIT) compilation"),f2=c(),Nh=n("li"),hl=n("a"),u2=a("Automatic Differentiation"),g2=c(),Dh=n("li"),ml=n("a"),_2=a("Vectorization"),b2=c(),Sh=n("li"),fl=n("a"),k2=a("Parallelization"),T2=c(),qt=n("div"),v(ul.$$.fragment),v2=c(),hn=n("p"),y2=a("The "),Bh=n("code"),w2=a("FlaxAlbertPreTrainedModel"),$2=a(" forward method, overrides the "),Wh=n("code"),A2=a("__call__"),F2=a(" special method."),x2=c(),v(Qs.$$.fragment),E2=c(),v(Vs.$$.fragment),Gf=c(),mn=n("h2"),Ks=n("a"),Uh=n("span"),v(gl.$$.fragment),M2=c(),Rh=n("span"),z2=a("FlaxAlbertForMultipleChoice"),Xf=c(),Ne=n("div"),v(_l.$$.fragment),q2=c(),Hh=n("p"),j2=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),P2=c(),bl=n("p"),C2=a("This model inherits from "),Gd=n("a"),L2=a("FlaxPreTrainedModel"),I2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O2=c(),kl=n("p"),N2=a("This model is also a Flax Linen "),Tl=n("a"),D2=a("flax.linen.Module"),S2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),B2=c(),Qh=n("p"),W2=a("Finally, this model supports inherent JAX features such as:"),U2=c(),Kt=n("ul"),Vh=n("li"),vl=n("a"),R2=a("Just-In-Time (JIT) compilation"),H2=c(),Kh=n("li"),yl=n("a"),Q2=a("Automatic Differentiation"),V2=c(),Jh=n("li"),wl=n("a"),K2=a("Vectorization"),J2=c(),Gh=n("li"),$l=n("a"),G2=a("Parallelization"),X2=c(),jt=n("div"),v(Al.$$.fragment),Y2=c(),fn=n("p"),Z2=a("The "),Xh=n("code"),eA=a("FlaxAlbertPreTrainedModel"),tA=a(" forward method, overrides the "),Yh=n("code"),oA=a("__call__"),nA=a(" special method."),sA=c(),v(Js.$$.fragment),rA=c(),v(Gs.$$.fragment),Yf=c(),un=n("h2"),Xs=n("a"),Zh=n("span"),v(Fl.$$.fragment),aA=c(),em=n("span"),iA=a("FlaxAlbertForTokenClassification"),Zf=c(),De=n("div"),v(xl.$$.fragment),lA=c(),tm=n("p"),dA=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cA=c(),El=n("p"),pA=a("This model inherits from "),Xd=n("a"),hA=a("FlaxPreTrainedModel"),mA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fA=c(),Ml=n("p"),uA=a("This model is also a Flax Linen "),zl=n("a"),gA=a("flax.linen.Module"),_A=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bA=c(),om=n("p"),kA=a("Finally, this model supports inherent JAX features such as:"),TA=c(),Jt=n("ul"),nm=n("li"),ql=n("a"),vA=a("Just-In-Time (JIT) compilation"),yA=c(),sm=n("li"),jl=n("a"),wA=a("Automatic Differentiation"),$A=c(),rm=n("li"),Pl=n("a"),AA=a("Vectorization"),FA=c(),am=n("li"),Cl=n("a"),xA=a("Parallelization"),EA=c(),Pt=n("div"),v(Ll.$$.fragment),MA=c(),gn=n("p"),zA=a("The "),im=n("code"),qA=a("FlaxAlbertPreTrainedModel"),jA=a(" forward method, overrides the "),lm=n("code"),PA=a("__call__"),CA=a(" special method."),LA=c(),v(Ys.$$.fragment),IA=c(),v(Zs.$$.fragment),eu=c(),_n=n("h2"),er=n("a"),dm=n("span"),v(Il.$$.fragment),OA=c(),cm=n("span"),NA=a("FlaxAlbertForQuestionAnswering"),tu=c(),Se=n("div"),v(Ol.$$.fragment),DA=c(),bn=n("p"),SA=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=n("code"),BA=a("span start logits"),WA=a(" and "),hm=n("code"),UA=a("span end logits"),RA=a(")."),HA=c(),Nl=n("p"),QA=a("This model inherits from "),Yd=n("a"),VA=a("FlaxPreTrainedModel"),KA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),JA=c(),Dl=n("p"),GA=a("This model is also a Flax Linen "),Sl=n("a"),XA=a("flax.linen.Module"),YA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZA=c(),mm=n("p"),eF=a("Finally, this model supports inherent JAX features such as:"),tF=c(),Gt=n("ul"),fm=n("li"),Bl=n("a"),oF=a("Just-In-Time (JIT) compilation"),nF=c(),um=n("li"),Wl=n("a"),sF=a("Automatic Differentiation"),rF=c(),gm=n("li"),Ul=n("a"),aF=a("Vectorization"),iF=c(),_m=n("li"),Rl=n("a"),lF=a("Parallelization"),dF=c(),Ct=n("div"),v(Hl.$$.fragment),cF=c(),kn=n("p"),pF=a("The "),bm=n("code"),hF=a("FlaxAlbertPreTrainedModel"),mF=a(" forward method, overrides the "),km=n("code"),fF=a("__call__"),uF=a(" special method."),gF=c(),v(tr.$$.fragment),_F=c(),v(or.$$.fragment),this.h()},l(o){const k=az('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Ql=r(h);m=s(Ql,"A",{id:!0,class:!0,href:!0});var Tm=r(m);_=s(Tm,"SPAN",{});var vm=r(_);y(l.$$.fragment,vm),vm.forEach(t),Tm.forEach(t),f=p(Ql),E=s(Ql,"SPAN",{});var ym=r(E);fe=i(ym,"ALBERT"),ym.forEach(t),Ql.forEach(t),G=p(o),z=s(o,"H2",{class:!0});var Vl=r(z);Y=s(Vl,"A",{id:!0,class:!0,href:!0});var wm=r(Y);W=s(wm,"SPAN",{});var $m=r(W);y(ee.$$.fragment,$m),$m.forEach(t),wm.forEach(t),ue=p(Vl),U=s(Vl,"SPAN",{});var Am=r(U);ge=i(Am,"Overview"),Am.forEach(t),Vl.forEach(t),de=p(o),K=s(o,"P",{});var Kl=r(K);I=i(Kl,"The ALBERT model was proposed in "),te=s(Kl,"A",{href:!0,rel:!0});var Fm=r(te);X=i(Fm,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Fm.forEach(t),q=i(Kl,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),Kl.forEach(t),P=p(o),Z=s(o,"UL",{});var Jl=r(Z);R=s(Jl,"LI",{});var xm=r(R);_e=i(xm,"Splitting the embedding matrix into two smaller matrices."),xm.forEach(t),be=p(Jl),H=s(Jl,"LI",{});var Em=r(H);ke=i(Em,"Using repeating layers split among groups."),Em.forEach(t),Jl.forEach(t),ce=p(o),j=s(o,"P",{});var Mm=r(j);Te=i(Mm,"The abstract from the paper is the following:"),Mm.forEach(t),Q=p(o),oe=s(o,"P",{});var zm=r(oe);ie=s(zm,"EM",{});var qm=r(ie);V=i(qm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),qm.forEach(t),zm.forEach(t),pe=p(o),ne=s(o,"P",{});var jm=r(ne);O=i(jm,"Tips:"),jm.forEach(t),he=p(o),D=s(o,"UL",{});var Gl=r(D);le=s(Gl,"LI",{});var Pm=r(le);T=i(Pm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Pm.forEach(t),M=p(Gl),J=s(Gl,"LI",{});var Cm=r(J);Fe=i(Cm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Cm.forEach(t),Gl.forEach(t),Ae=p(o),C=s(o,"P",{});var Xt=r(C);xe=i(Xt,"This model was contributed by "),ye=s(Xt,"A",{href:!0,rel:!0});var Lm=r(ye);Ee=i(Lm,"lysandre"),Lm.forEach(t),N=i(Xt,`. This model jax version was contributed by
`),S=s(Xt,"A",{href:!0,rel:!0});var Im=r(S);Me=i(Im,"kamalkraj"),Im.forEach(t),ze=i(Xt,". The original code can be found "),B=s(Xt,"A",{href:!0,rel:!0});var Om=r(B);qe=i(Om,"here"),Om.forEach(t),je=i(Xt,"."),Xt.forEach(t),me=p(o),ve=s(o,"H2",{class:!0});var Xl=r(ve);wn=s(Xl,"A",{id:!0,class:!0,href:!0});var Nm=r(wn);Mc=s(Nm,"SPAN",{});var Dm=r(Mc);y(Fr.$$.fragment,Dm),Dm.forEach(t),Nm.forEach(t),vg=p(Xl),zc=s(Xl,"SPAN",{});var Sm=r(zc);yg=i(Sm,"AlbertConfig"),Sm.forEach(t),Xl.forEach(t),rf=p(o),bt=s(o,"DIV",{class:!0});var Yt=r(bt);y(xr.$$.fragment,Yt),wg=p(Yt),Wt=s(Yt,"P",{});var Zt=r(Wt);$g=i(Zt,"This is the configuration class to store the configuration of a "),rd=s(Zt,"A",{href:!0});var Bm=r(rd);Ag=i(Bm,"AlbertModel"),Bm.forEach(t),Fg=i(Zt," or a "),ad=s(Zt,"A",{href:!0});var Wm=r(ad);xg=i(Wm,"TFAlbertModel"),Wm.forEach(t),Eg=i(Zt,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=s(Zt,"A",{href:!0,rel:!0});var Um=r(Er);Mg=i(Um,"albert-xxlarge-v2"),Um.forEach(t),zg=i(Zt," architecture."),Zt.forEach(t),qg=p(Yt),bo=s(Yt,"P",{});var Tn=r(bo);jg=i(Tn,"Configuration objects inherit from "),id=s(Tn,"A",{href:!0});var Rm=r(id);Pg=i(Rm,"PretrainedConfig"),Rm.forEach(t),Cg=i(Tn,` and can be used to control the model outputs. Read the
documentation from `),ld=s(Tn,"A",{href:!0});var Hm=r(ld);Lg=i(Hm,"PretrainedConfig"),Hm.forEach(t),Ig=i(Tn," for more information."),Tn.forEach(t),Og=p(Yt),y($n.$$.fragment,Yt),Yt.forEach(t),af=p(o),ko=s(o,"H2",{class:!0});var Yl=r(ko);An=s(Yl,"A",{id:!0,class:!0,href:!0});var Qm=r(An);qc=s(Qm,"SPAN",{});var Vm=r(qc);y(Mr.$$.fragment,Vm),Vm.forEach(t),Qm.forEach(t),Ng=p(Yl),jc=s(Yl,"SPAN",{});var Km=r(jc);Dg=i(Km,"AlbertTokenizer"),Km.forEach(t),Yl.forEach(t),lf=p(o),Pe=s(o,"DIV",{class:!0});var Je=r(Pe);y(zr.$$.fragment,Je),Sg=p(Je),qr=s(Je,"P",{});var Zl=r(qr);Bg=i(Zl,"Construct an ALBERT tokenizer. Based on "),jr=s(Zl,"A",{href:!0,rel:!0});var Jm=r(jr);Wg=i(Jm,"SentencePiece"),Jm.forEach(t),Ug=i(Zl,"."),Zl.forEach(t),Rg=p(Je),Pr=s(Je,"P",{});var ed=r(Pr);Hg=i(ed,"This tokenizer inherits from "),dd=s(ed,"A",{href:!0});var Gm=r(dd);Qg=i(Gm,"PreTrainedTokenizer"),Gm.forEach(t),Vg=i(ed,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ed.forEach(t),Kg=p(Je),to=s(Je,"DIV",{class:!0});var vn=r(to);y(Cr.$$.fragment,vn),Jg=p(vn),Pc=s(vn,"P",{});var Xm=r(Pc);Gg=i(Xm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xm.forEach(t),Xg=p(vn),Lr=s(vn,"UL",{});var td=r(Lr);cd=s(td,"LI",{});var Zd=r(cd);Yg=i(Zd,"single sequence: "),Cc=s(Zd,"CODE",{});var Ym=r(Cc);Zg=i(Ym,"[CLS] X [SEP]"),Ym.forEach(t),Zd.forEach(t),e_=p(td),pd=s(td,"LI",{});var ec=r(pd);t_=i(ec,"pair of sequences: "),Lc=s(ec,"CODE",{});var Zm=r(Lc);o_=i(Zm,"[CLS] A [SEP] B [SEP]"),Zm.forEach(t),ec.forEach(t),td.forEach(t),vn.forEach(t),n_=p(Je),Fn=s(Je,"DIV",{class:!0});var od=r(Fn);y(Ir.$$.fragment,od),s_=p(od),Or=s(od,"P",{});var nd=r(Or);r_=i(nd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ic=s(nd,"CODE",{});var ef=r(Ic);a_=i(ef,"prepare_for_model"),ef.forEach(t),i_=i(nd," method."),nd.forEach(t),od.forEach(t),l_=p(Je),Tt=s(Je,"DIV",{class:!0});var eo=r(Tt);y(Nr.$$.fragment,eo),d_=p(eo),Oc=s(eo,"P",{});var tf=r(Oc);c_=i(tf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),tf.forEach(t),p_=p(eo),y(xn.$$.fragment,eo),h_=p(eo),To=s(eo,"P",{});var yn=r(To);m_=i(yn,"If "),Nc=s(yn,"CODE",{});var of=r(Nc);f_=i(of,"token_ids_1"),of.forEach(t),u_=i(yn," is "),Dc=s(yn,"CODE",{});var nf=r(Dc);g_=i(nf,"None"),nf.forEach(t),__=i(yn,", this method only returns the first portion of the mask (0s)."),yn.forEach(t),eo.forEach(t),b_=p(Je),hd=s(Je,"DIV",{class:!0});var sf=r(hd);y(Dr.$$.fragment,sf),sf.forEach(t),Je.forEach(t),df=p(o),vo=s(o,"H2",{class:!0});var sd=r(vo);En=s(sd,"A",{id:!0,class:!0,href:!0});var TF=r(En);Sc=s(TF,"SPAN",{});var vF=r(Sc);y(Sr.$$.fragment,vF),vF.forEach(t),TF.forEach(t),k_=p(sd),Bc=s(sd,"SPAN",{});var yF=r(Bc);T_=i(yF,"AlbertTokenizerFast"),yF.forEach(t),sd.forEach(t),cf=p(o),kt=s(o,"DIV",{class:!0});var nr=r(kt);y(Br.$$.fragment,nr),v_=p(nr),Ut=s(nr,"P",{});var sr=r(Ut);y_=i(sr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Wc=s(sr,"EM",{});var wF=r(Wc);w_=i(wF,"tokenizers"),wF.forEach(t),$_=i(sr,` library). Based on
`),Wr=s(sr,"A",{href:!0,rel:!0});var $F=r(Wr);A_=i($F,"Unigram"),$F.forEach(t),F_=i(sr,`. This
tokenizer inherits from `),md=s(sr,"A",{href:!0});var AF=r(md);x_=i(AF,"PreTrainedTokenizerFast"),AF.forEach(t),E_=i(sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),sr.forEach(t),M_=p(nr),oo=s(nr,"DIV",{class:!0});var tc=r(oo);y(Ur.$$.fragment,tc),z_=p(tc),Uc=s(tc,"P",{});var FF=r(Uc);q_=i(FF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),FF.forEach(t),j_=p(tc),Rr=s(tc,"UL",{});var nu=r(Rr);fd=s(nu,"LI",{});var bF=r(fd);P_=i(bF,"single sequence: "),Rc=s(bF,"CODE",{});var xF=r(Rc);C_=i(xF,"[CLS] X [SEP]"),xF.forEach(t),bF.forEach(t),L_=p(nu),ud=s(nu,"LI",{});var kF=r(ud);I_=i(kF,"pair of sequences: "),Hc=s(kF,"CODE",{});var EF=r(Hc);O_=i(EF,"[CLS] A [SEP] B [SEP]"),EF.forEach(t),kF.forEach(t),nu.forEach(t),tc.forEach(t),N_=p(nr),vt=s(nr,"DIV",{class:!0});var rr=r(vt);y(Hr.$$.fragment,rr),D_=p(rr),Qc=s(rr,"P",{});var MF=r(Qc);S_=i(MF,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),MF.forEach(t),B_=p(rr),y(Mn.$$.fragment,rr),W_=p(rr),Vc=s(rr,"P",{});var zF=r(Vc);U_=i(zF,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),zF.forEach(t),rr.forEach(t),nr.forEach(t),pf=p(o),yo=s(o,"H2",{class:!0});var su=r(yo);zn=s(su,"A",{id:!0,class:!0,href:!0});var qF=r(zn);Kc=s(qF,"SPAN",{});var jF=r(Kc);y(Qr.$$.fragment,jF),jF.forEach(t),qF.forEach(t),R_=p(su),Jc=s(su,"SPAN",{});var PF=r(Jc);H_=i(PF,"Albert specific outputs"),PF.forEach(t),su.forEach(t),hf=p(o),wo=s(o,"DIV",{class:!0});var ru=r(wo);y(Vr.$$.fragment,ru),Q_=p(ru),Kr=s(ru,"P",{});var au=r(Kr);V_=i(au,"Output type of "),gd=s(au,"A",{href:!0});var CF=r(gd);K_=i(CF,"AlbertForPreTraining"),CF.forEach(t),J_=i(au,"."),au.forEach(t),ru.forEach(t),mf=p(o),$o=s(o,"DIV",{class:!0});var iu=r($o);y(Jr.$$.fragment,iu),G_=p(iu),Gr=s(iu,"P",{});var lu=r(Gr);X_=i(lu,"Output type of "),_d=s(lu,"A",{href:!0});var LF=r(_d);Y_=i(LF,"TFAlbertForPreTraining"),LF.forEach(t),Z_=i(lu,"."),lu.forEach(t),iu.forEach(t),ff=p(o),Ao=s(o,"H2",{class:!0});var du=r(Ao);qn=s(du,"A",{id:!0,class:!0,href:!0});var IF=r(qn);Gc=s(IF,"SPAN",{});var OF=r(Gc);y(Xr.$$.fragment,OF),OF.forEach(t),IF.forEach(t),eb=p(du),Xc=s(du,"SPAN",{});var NF=r(Xc);tb=i(NF,"AlbertModel"),NF.forEach(t),du.forEach(t),uf=p(o),Ge=s(o,"DIV",{class:!0});var no=r(Ge);y(Yr.$$.fragment,no),ob=p(no),Yc=s(no,"P",{});var DF=r(Yc);nb=i(DF,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),DF.forEach(t),sb=p(no),Zr=s(no,"P",{});var cu=r(Zr);rb=i(cu,"This model inherits from "),bd=s(cu,"A",{href:!0});var SF=r(bd);ab=i(SF,"PreTrainedModel"),SF.forEach(t),ib=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),lb=p(no),ea=s(no,"P",{});var pu=r(ea);db=i(pu,"This model is also a PyTorch "),ta=s(pu,"A",{href:!0,rel:!0});var BF=r(ta);cb=i(BF,"torch.nn.Module"),BF.forEach(t),pb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),hb=p(no),yt=s(no,"DIV",{class:!0});var ar=r(yt);y(oa.$$.fragment,ar),mb=p(ar),Fo=s(ar,"P",{});var oc=r(Fo);fb=i(oc,"The "),kd=s(oc,"A",{href:!0});var WF=r(kd);ub=i(WF,"AlbertModel"),WF.forEach(t),gb=i(oc," forward method, overrides the "),Zc=s(oc,"CODE",{});var UF=r(Zc);_b=i(UF,"__call__"),UF.forEach(t),bb=i(oc," special method."),oc.forEach(t),kb=p(ar),y(jn.$$.fragment,ar),Tb=p(ar),y(Pn.$$.fragment,ar),ar.forEach(t),no.forEach(t),gf=p(o),xo=s(o,"H2",{class:!0});var hu=r(xo);Cn=s(hu,"A",{id:!0,class:!0,href:!0});var RF=r(Cn);ep=s(RF,"SPAN",{});var HF=r(ep);y(na.$$.fragment,HF),HF.forEach(t),RF.forEach(t),vb=p(hu),tp=s(hu,"SPAN",{});var QF=r(tp);yb=i(QF,"AlbertForPreTraining"),QF.forEach(t),hu.forEach(t),_f=p(o),Xe=s(o,"DIV",{class:!0});var so=r(Xe);y(sa.$$.fragment,so),wb=p(so),Eo=s(so,"P",{});var nc=r(Eo);$b=i(nc,"Albert Model with two heads on top as done during the pretraining: a "),op=s(nc,"CODE",{});var VF=r(op);Ab=i(VF,"masked language modeling"),VF.forEach(t),Fb=i(nc,` head and a
`),np=s(nc,"CODE",{});var KF=r(np);xb=i(KF,"sentence order prediction (classification)"),KF.forEach(t),Eb=i(nc," head."),nc.forEach(t),Mb=p(so),ra=s(so,"P",{});var mu=r(ra);zb=i(mu,"This model inherits from "),Td=s(mu,"A",{href:!0});var JF=r(Td);qb=i(JF,"PreTrainedModel"),JF.forEach(t),jb=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mu.forEach(t),Pb=p(so),aa=s(so,"P",{});var fu=r(aa);Cb=i(fu,"This model is also a PyTorch "),ia=s(fu,"A",{href:!0,rel:!0});var GF=r(ia);Lb=i(GF,"torch.nn.Module"),GF.forEach(t),Ib=i(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),Ob=p(so),wt=s(so,"DIV",{class:!0});var ir=r(wt);y(la.$$.fragment,ir),Nb=p(ir),Mo=s(ir,"P",{});var sc=r(Mo);Db=i(sc,"The "),vd=s(sc,"A",{href:!0});var XF=r(vd);Sb=i(XF,"AlbertForPreTraining"),XF.forEach(t),Bb=i(sc," forward method, overrides the "),sp=s(sc,"CODE",{});var YF=r(sp);Wb=i(YF,"__call__"),YF.forEach(t),Ub=i(sc," special method."),sc.forEach(t),Rb=p(ir),y(Ln.$$.fragment,ir),Hb=p(ir),y(In.$$.fragment,ir),ir.forEach(t),so.forEach(t),bf=p(o),zo=s(o,"H2",{class:!0});var uu=r(zo);On=s(uu,"A",{id:!0,class:!0,href:!0});var ZF=r(On);rp=s(ZF,"SPAN",{});var e0=r(rp);y(da.$$.fragment,e0),e0.forEach(t),ZF.forEach(t),Qb=p(uu),ap=s(uu,"SPAN",{});var t0=r(ap);Vb=i(t0,"AlbertForMaskedLM"),t0.forEach(t),uu.forEach(t),kf=p(o),Ye=s(o,"DIV",{class:!0});var ro=r(Ye);y(ca.$$.fragment,ro),Kb=p(ro),pa=s(ro,"P",{});var gu=r(pa);Jb=i(gu,"Albert Model with a "),ip=s(gu,"CODE",{});var o0=r(ip);Gb=i(o0,"language modeling"),o0.forEach(t),Xb=i(gu," head on top."),gu.forEach(t),Yb=p(ro),ha=s(ro,"P",{});var _u=r(ha);Zb=i(_u,"This model inherits from "),yd=s(_u,"A",{href:!0});var n0=r(yd);ek=i(n0,"PreTrainedModel"),n0.forEach(t),tk=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),ok=p(ro),ma=s(ro,"P",{});var bu=r(ma);nk=i(bu,"This model is also a PyTorch "),fa=s(bu,"A",{href:!0,rel:!0});var s0=r(fa);sk=i(s0,"torch.nn.Module"),s0.forEach(t),rk=i(bu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bu.forEach(t),ak=p(ro),nt=s(ro,"DIV",{class:!0});var ao=r(nt);y(ua.$$.fragment,ao),ik=p(ao),qo=s(ao,"P",{});var rc=r(qo);lk=i(rc,"The "),wd=s(rc,"A",{href:!0});var r0=r(wd);dk=i(r0,"AlbertForMaskedLM"),r0.forEach(t),ck=i(rc," forward method, overrides the "),lp=s(rc,"CODE",{});var a0=r(lp);pk=i(a0,"__call__"),a0.forEach(t),hk=i(rc," special method."),rc.forEach(t),mk=p(ao),y(Nn.$$.fragment,ao),fk=p(ao),y(Dn.$$.fragment,ao),uk=p(ao),y(Sn.$$.fragment,ao),ao.forEach(t),ro.forEach(t),Tf=p(o),jo=s(o,"H2",{class:!0});var ku=r(jo);Bn=s(ku,"A",{id:!0,class:!0,href:!0});var i0=r(Bn);dp=s(i0,"SPAN",{});var l0=r(dp);y(ga.$$.fragment,l0),l0.forEach(t),i0.forEach(t),gk=p(ku),cp=s(ku,"SPAN",{});var d0=r(cp);_k=i(d0,"AlbertForSequenceClassification"),d0.forEach(t),ku.forEach(t),vf=p(o),Ze=s(o,"DIV",{class:!0});var io=r(Ze);y(_a.$$.fragment,io),bk=p(io),pp=s(io,"P",{});var c0=r(pp);kk=i(c0,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),c0.forEach(t),Tk=p(io),ba=s(io,"P",{});var Tu=r(ba);vk=i(Tu,"This model inherits from "),$d=s(Tu,"A",{href:!0});var p0=r($d);yk=i(p0,"PreTrainedModel"),p0.forEach(t),wk=i(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),$k=p(io),ka=s(io,"P",{});var vu=r(ka);Ak=i(vu,"This model is also a PyTorch "),Ta=s(vu,"A",{href:!0,rel:!0});var h0=r(Ta);Fk=i(h0,"torch.nn.Module"),h0.forEach(t),xk=i(vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu.forEach(t),Ek=p(io),Be=s(io,"DIV",{class:!0});var ct=r(Be);y(va.$$.fragment,ct),Mk=p(ct),Po=s(ct,"P",{});var ac=r(Po);zk=i(ac,"The "),Ad=s(ac,"A",{href:!0});var m0=r(Ad);qk=i(m0,"AlbertForSequenceClassification"),m0.forEach(t),jk=i(ac," forward method, overrides the "),hp=s(ac,"CODE",{});var f0=r(hp);Pk=i(f0,"__call__"),f0.forEach(t),Ck=i(ac," special method."),ac.forEach(t),Lk=p(ct),y(Wn.$$.fragment,ct),Ik=p(ct),y(Un.$$.fragment,ct),Ok=p(ct),y(Rn.$$.fragment,ct),Nk=p(ct),y(Hn.$$.fragment,ct),Dk=p(ct),y(Qn.$$.fragment,ct),ct.forEach(t),io.forEach(t),yf=p(o),Co=s(o,"H2",{class:!0});var yu=r(Co);Vn=s(yu,"A",{id:!0,class:!0,href:!0});var u0=r(Vn);mp=s(u0,"SPAN",{});var g0=r(mp);y(ya.$$.fragment,g0),g0.forEach(t),u0.forEach(t),Sk=p(yu),fp=s(yu,"SPAN",{});var _0=r(fp);Bk=i(_0,"AlbertForMultipleChoice"),_0.forEach(t),yu.forEach(t),wf=p(o),et=s(o,"DIV",{class:!0});var lo=r(et);y(wa.$$.fragment,lo),Wk=p(lo),up=s(lo,"P",{});var b0=r(up);Uk=i(b0,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b0.forEach(t),Rk=p(lo),$a=s(lo,"P",{});var wu=r($a);Hk=i(wu,"This model inherits from "),Fd=s(wu,"A",{href:!0});var k0=r(Fd);Qk=i(k0,"PreTrainedModel"),k0.forEach(t),Vk=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),Kk=p(lo),Aa=s(lo,"P",{});var $u=r(Aa);Jk=i($u,"This model is also a PyTorch "),Fa=s($u,"A",{href:!0,rel:!0});var T0=r(Fa);Gk=i(T0,"torch.nn.Module"),T0.forEach(t),Xk=i($u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u.forEach(t),Yk=p(lo),$t=s(lo,"DIV",{class:!0});var lr=r($t);y(xa.$$.fragment,lr),Zk=p(lr),Lo=s(lr,"P",{});var ic=r(Lo);eT=i(ic,"The "),xd=s(ic,"A",{href:!0});var v0=r(xd);tT=i(v0,"AlbertForMultipleChoice"),v0.forEach(t),oT=i(ic," forward method, overrides the "),gp=s(ic,"CODE",{});var y0=r(gp);nT=i(y0,"__call__"),y0.forEach(t),sT=i(ic," special method."),ic.forEach(t),rT=p(lr),y(Kn.$$.fragment,lr),aT=p(lr),y(Jn.$$.fragment,lr),lr.forEach(t),lo.forEach(t),$f=p(o),Io=s(o,"H2",{class:!0});var Au=r(Io);Gn=s(Au,"A",{id:!0,class:!0,href:!0});var w0=r(Gn);_p=s(w0,"SPAN",{});var $0=r(_p);y(Ea.$$.fragment,$0),$0.forEach(t),w0.forEach(t),iT=p(Au),bp=s(Au,"SPAN",{});var A0=r(bp);lT=i(A0,"AlbertForTokenClassification"),A0.forEach(t),Au.forEach(t),Af=p(o),tt=s(o,"DIV",{class:!0});var co=r(tt);y(Ma.$$.fragment,co),dT=p(co),kp=s(co,"P",{});var F0=r(kp);cT=i(F0,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),F0.forEach(t),pT=p(co),za=s(co,"P",{});var Fu=r(za);hT=i(Fu,"This model inherits from "),Ed=s(Fu,"A",{href:!0});var x0=r(Ed);mT=i(x0,"PreTrainedModel"),x0.forEach(t),fT=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),uT=p(co),qa=s(co,"P",{});var xu=r(qa);gT=i(xu,"This model is also a PyTorch "),ja=s(xu,"A",{href:!0,rel:!0});var E0=r(ja);_T=i(E0,"torch.nn.Module"),E0.forEach(t),bT=i(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),kT=p(co),st=s(co,"DIV",{class:!0});var po=r(st);y(Pa.$$.fragment,po),TT=p(po),Oo=s(po,"P",{});var lc=r(Oo);vT=i(lc,"The "),Md=s(lc,"A",{href:!0});var M0=r(Md);yT=i(M0,"AlbertForTokenClassification"),M0.forEach(t),wT=i(lc," forward method, overrides the "),Tp=s(lc,"CODE",{});var z0=r(Tp);$T=i(z0,"__call__"),z0.forEach(t),AT=i(lc," special method."),lc.forEach(t),FT=p(po),y(Xn.$$.fragment,po),xT=p(po),y(Yn.$$.fragment,po),ET=p(po),y(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),Ff=p(o),No=s(o,"H2",{class:!0});var Eu=r(No);es=s(Eu,"A",{id:!0,class:!0,href:!0});var q0=r(es);vp=s(q0,"SPAN",{});var j0=r(vp);y(Ca.$$.fragment,j0),j0.forEach(t),q0.forEach(t),MT=p(Eu),yp=s(Eu,"SPAN",{});var P0=r(yp);zT=i(P0,"AlbertForQuestionAnswering"),P0.forEach(t),Eu.forEach(t),xf=p(o),ot=s(o,"DIV",{class:!0});var ho=r(ot);y(La.$$.fragment,ho),qT=p(ho),Do=s(ho,"P",{});var dc=r(Do);jT=i(dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=s(dc,"CODE",{});var C0=r(wp);PT=i(C0,"span start logits"),C0.forEach(t),CT=i(dc," and "),$p=s(dc,"CODE",{});var L0=r($p);LT=i(L0,"span end logits"),L0.forEach(t),IT=i(dc,")."),dc.forEach(t),OT=p(ho),Ia=s(ho,"P",{});var Mu=r(Ia);NT=i(Mu,"This model inherits from "),zd=s(Mu,"A",{href:!0});var I0=r(zd);DT=i(I0,"PreTrainedModel"),I0.forEach(t),ST=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),BT=p(ho),Oa=s(ho,"P",{});var zu=r(Oa);WT=i(zu,"This model is also a PyTorch "),Na=s(zu,"A",{href:!0,rel:!0});var O0=r(Na);UT=i(O0,"torch.nn.Module"),O0.forEach(t),RT=i(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),HT=p(ho),rt=s(ho,"DIV",{class:!0});var mo=r(rt);y(Da.$$.fragment,mo),QT=p(mo),So=s(mo,"P",{});var cc=r(So);VT=i(cc,"The "),qd=s(cc,"A",{href:!0});var N0=r(qd);KT=i(N0,"AlbertForQuestionAnswering"),N0.forEach(t),JT=i(cc," forward method, overrides the "),Ap=s(cc,"CODE",{});var D0=r(Ap);GT=i(D0,"__call__"),D0.forEach(t),XT=i(cc," special method."),cc.forEach(t),YT=p(mo),y(ts.$$.fragment,mo),ZT=p(mo),y(os.$$.fragment,mo),ev=p(mo),y(ns.$$.fragment,mo),mo.forEach(t),ho.forEach(t),Ef=p(o),Bo=s(o,"H2",{class:!0});var qu=r(Bo);ss=s(qu,"A",{id:!0,class:!0,href:!0});var S0=r(ss);Fp=s(S0,"SPAN",{});var B0=r(Fp);y(Sa.$$.fragment,B0),B0.forEach(t),S0.forEach(t),tv=p(qu),xp=s(qu,"SPAN",{});var W0=r(xp);ov=i(W0,"TFAlbertModel"),W0.forEach(t),qu.forEach(t),Mf=p(o),We=s(o,"DIV",{class:!0});var Lt=r(We);y(Ba.$$.fragment,Lt),nv=p(Lt),Ep=s(Lt,"P",{});var U0=r(Ep);sv=i(U0,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),U0.forEach(t),rv=p(Lt),Wa=s(Lt,"P",{});var ju=r(Wa);av=i(ju,"This model inherits from "),jd=s(ju,"A",{href:!0});var R0=r(jd);iv=i(R0,"TFPreTrainedModel"),R0.forEach(t),lv=i(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),dv=p(Lt),Ua=s(Lt,"P",{});var Pu=r(Ua);cv=i(Pu,"This model is also a "),Ra=s(Pu,"A",{href:!0,rel:!0});var H0=r(Ra);pv=i(H0,"tf.keras.Model"),H0.forEach(t),hv=i(Pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu.forEach(t),mv=p(Lt),y(rs.$$.fragment,Lt),fv=p(Lt),At=s(Lt,"DIV",{class:!0});var dr=r(At);y(Ha.$$.fragment,dr),uv=p(dr),Wo=s(dr,"P",{});var pc=r(Wo);gv=i(pc,"The "),Pd=s(pc,"A",{href:!0});var Q0=r(Pd);_v=i(Q0,"TFAlbertModel"),Q0.forEach(t),bv=i(pc," forward method, overrides the "),Mp=s(pc,"CODE",{});var V0=r(Mp);kv=i(V0,"__call__"),V0.forEach(t),Tv=i(pc," special method."),pc.forEach(t),vv=p(dr),y(as.$$.fragment,dr),yv=p(dr),y(is.$$.fragment,dr),dr.forEach(t),Lt.forEach(t),zf=p(o),Uo=s(o,"H2",{class:!0});var Cu=r(Uo);ls=s(Cu,"A",{id:!0,class:!0,href:!0});var K0=r(ls);zp=s(K0,"SPAN",{});var J0=r(zp);y(Qa.$$.fragment,J0),J0.forEach(t),K0.forEach(t),wv=p(Cu),qp=s(Cu,"SPAN",{});var G0=r(qp);$v=i(G0,"TFAlbertForPreTraining"),G0.forEach(t),Cu.forEach(t),qf=p(o),Ue=s(o,"DIV",{class:!0});var It=r(Ue);y(Va.$$.fragment,It),Av=p(It),Ro=s(It,"P",{});var hc=r(Ro);Fv=i(hc,"Albert Model with two heads on top for pretraining: a "),jp=s(hc,"CODE",{});var X0=r(jp);xv=i(X0,"masked language modeling"),X0.forEach(t),Ev=i(hc," head and a "),Pp=s(hc,"CODE",{});var Y0=r(Pp);Mv=i(Y0,"sentence order prediction"),Y0.forEach(t),zv=i(hc," (classification) head."),hc.forEach(t),qv=p(It),Ka=s(It,"P",{});var Lu=r(Ka);jv=i(Lu,"This model inherits from "),Cd=s(Lu,"A",{href:!0});var Z0=r(Cd);Pv=i(Z0,"TFPreTrainedModel"),Z0.forEach(t),Cv=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Lv=p(It),Ja=s(It,"P",{});var Iu=r(Ja);Iv=i(Iu,"This model is also a "),Ga=s(Iu,"A",{href:!0,rel:!0});var ex=r(Ga);Ov=i(ex,"tf.keras.Model"),ex.forEach(t),Nv=i(Iu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu.forEach(t),Dv=p(It),y(ds.$$.fragment,It),Sv=p(It),Ft=s(It,"DIV",{class:!0});var cr=r(Ft);y(Xa.$$.fragment,cr),Bv=p(cr),Ho=s(cr,"P",{});var mc=r(Ho);Wv=i(mc,"The "),Ld=s(mc,"A",{href:!0});var tx=r(Ld);Uv=i(tx,"TFAlbertForPreTraining"),tx.forEach(t),Rv=i(mc," forward method, overrides the "),Cp=s(mc,"CODE",{});var ox=r(Cp);Hv=i(ox,"__call__"),ox.forEach(t),Qv=i(mc," special method."),mc.forEach(t),Vv=p(cr),y(cs.$$.fragment,cr),Kv=p(cr),y(ps.$$.fragment,cr),cr.forEach(t),It.forEach(t),jf=p(o),Qo=s(o,"H2",{class:!0});var Ou=r(Qo);hs=s(Ou,"A",{id:!0,class:!0,href:!0});var nx=r(hs);Lp=s(nx,"SPAN",{});var sx=r(Lp);y(Ya.$$.fragment,sx),sx.forEach(t),nx.forEach(t),Jv=p(Ou),Ip=s(Ou,"SPAN",{});var rx=r(Ip);Gv=i(rx,"TFAlbertForMaskedLM"),rx.forEach(t),Ou.forEach(t),Pf=p(o),Re=s(o,"DIV",{class:!0});var Ot=r(Re);y(Za.$$.fragment,Ot),Xv=p(Ot),ei=s(Ot,"P",{});var Nu=r(ei);Yv=i(Nu,"Albert Model with a "),Op=s(Nu,"CODE",{});var ax=r(Op);Zv=i(ax,"language modeling"),ax.forEach(t),ey=i(Nu," head on top."),Nu.forEach(t),ty=p(Ot),ti=s(Ot,"P",{});var Du=r(ti);oy=i(Du,"This model inherits from "),Id=s(Du,"A",{href:!0});var ix=r(Id);ny=i(ix,"TFPreTrainedModel"),ix.forEach(t),sy=i(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(t),ry=p(Ot),oi=s(Ot,"P",{});var Su=r(oi);ay=i(Su,"This model is also a "),ni=s(Su,"A",{href:!0,rel:!0});var lx=r(ni);iy=i(lx,"tf.keras.Model"),lx.forEach(t),ly=i(Su,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su.forEach(t),dy=p(Ot),y(ms.$$.fragment,Ot),cy=p(Ot),at=s(Ot,"DIV",{class:!0});var fo=r(at);y(si.$$.fragment,fo),py=p(fo),Vo=s(fo,"P",{});var fc=r(Vo);hy=i(fc,"The "),Od=s(fc,"A",{href:!0});var dx=r(Od);my=i(dx,"TFAlbertForMaskedLM"),dx.forEach(t),fy=i(fc," forward method, overrides the "),Np=s(fc,"CODE",{});var cx=r(Np);uy=i(cx,"__call__"),cx.forEach(t),gy=i(fc," special method."),fc.forEach(t),_y=p(fo),y(fs.$$.fragment,fo),by=p(fo),y(us.$$.fragment,fo),ky=p(fo),y(gs.$$.fragment,fo),fo.forEach(t),Ot.forEach(t),Cf=p(o),Ko=s(o,"H2",{class:!0});var Bu=r(Ko);_s=s(Bu,"A",{id:!0,class:!0,href:!0});var px=r(_s);Dp=s(px,"SPAN",{});var hx=r(Dp);y(ri.$$.fragment,hx),hx.forEach(t),px.forEach(t),Ty=p(Bu),Sp=s(Bu,"SPAN",{});var mx=r(Sp);vy=i(mx,"TFAlbertForSequenceClassification"),mx.forEach(t),Bu.forEach(t),Lf=p(o),He=s(o,"DIV",{class:!0});var Nt=r(He);y(ai.$$.fragment,Nt),yy=p(Nt),Bp=s(Nt,"P",{});var fx=r(Bp);wy=i(fx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fx.forEach(t),$y=p(Nt),ii=s(Nt,"P",{});var Wu=r(ii);Ay=i(Wu,"This model inherits from "),Nd=s(Wu,"A",{href:!0});var ux=r(Nd);Fy=i(ux,"TFPreTrainedModel"),ux.forEach(t),xy=i(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),Ey=p(Nt),li=s(Nt,"P",{});var Uu=r(li);My=i(Uu,"This model is also a "),di=s(Uu,"A",{href:!0,rel:!0});var gx=r(di);zy=i(gx,"tf.keras.Model"),gx.forEach(t),qy=i(Uu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uu.forEach(t),jy=p(Nt),y(bs.$$.fragment,Nt),Py=p(Nt),it=s(Nt,"DIV",{class:!0});var uo=r(it);y(ci.$$.fragment,uo),Cy=p(uo),Jo=s(uo,"P",{});var uc=r(Jo);Ly=i(uc,"The "),Dd=s(uc,"A",{href:!0});var _x=r(Dd);Iy=i(_x,"TFAlbertForSequenceClassification"),_x.forEach(t),Oy=i(uc," forward method, overrides the "),Wp=s(uc,"CODE",{});var bx=r(Wp);Ny=i(bx,"__call__"),bx.forEach(t),Dy=i(uc," special method."),uc.forEach(t),Sy=p(uo),y(ks.$$.fragment,uo),By=p(uo),y(Ts.$$.fragment,uo),Wy=p(uo),y(vs.$$.fragment,uo),uo.forEach(t),Nt.forEach(t),If=p(o),Go=s(o,"H2",{class:!0});var Ru=r(Go);ys=s(Ru,"A",{id:!0,class:!0,href:!0});var kx=r(ys);Up=s(kx,"SPAN",{});var Tx=r(Up);y(pi.$$.fragment,Tx),Tx.forEach(t),kx.forEach(t),Uy=p(Ru),Rp=s(Ru,"SPAN",{});var vx=r(Rp);Ry=i(vx,"TFAlbertForMultipleChoice"),vx.forEach(t),Ru.forEach(t),Of=p(o),Qe=s(o,"DIV",{class:!0});var Dt=r(Qe);y(hi.$$.fragment,Dt),Hy=p(Dt),Hp=s(Dt,"P",{});var yx=r(Hp);Qy=i(yx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yx.forEach(t),Vy=p(Dt),mi=s(Dt,"P",{});var Hu=r(mi);Ky=i(Hu,"This model inherits from "),Sd=s(Hu,"A",{href:!0});var wx=r(Sd);Jy=i(wx,"TFPreTrainedModel"),wx.forEach(t),Gy=i(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),Xy=p(Dt),fi=s(Dt,"P",{});var Qu=r(fi);Yy=i(Qu,"This model is also a "),ui=s(Qu,"A",{href:!0,rel:!0});var $x=r(ui);Zy=i($x,"tf.keras.Model"),$x.forEach(t),ew=i(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(t),tw=p(Dt),y(ws.$$.fragment,Dt),ow=p(Dt),xt=s(Dt,"DIV",{class:!0});var pr=r(xt);y(gi.$$.fragment,pr),nw=p(pr),Xo=s(pr,"P",{});var gc=r(Xo);sw=i(gc,"The "),Bd=s(gc,"A",{href:!0});var Ax=r(Bd);rw=i(Ax,"TFAlbertForMultipleChoice"),Ax.forEach(t),aw=i(gc," forward method, overrides the "),Qp=s(gc,"CODE",{});var Fx=r(Qp);iw=i(Fx,"__call__"),Fx.forEach(t),lw=i(gc," special method."),gc.forEach(t),dw=p(pr),y($s.$$.fragment,pr),cw=p(pr),y(As.$$.fragment,pr),pr.forEach(t),Dt.forEach(t),Nf=p(o),Yo=s(o,"H2",{class:!0});var Vu=r(Yo);Fs=s(Vu,"A",{id:!0,class:!0,href:!0});var xx=r(Fs);Vp=s(xx,"SPAN",{});var Ex=r(Vp);y(_i.$$.fragment,Ex),Ex.forEach(t),xx.forEach(t),pw=p(Vu),Kp=s(Vu,"SPAN",{});var Mx=r(Kp);hw=i(Mx,"TFAlbertForTokenClassification"),Mx.forEach(t),Vu.forEach(t),Df=p(o),Ve=s(o,"DIV",{class:!0});var St=r(Ve);y(bi.$$.fragment,St),mw=p(St),Jp=s(St,"P",{});var zx=r(Jp);fw=i(zx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zx.forEach(t),uw=p(St),ki=s(St,"P",{});var Ku=r(ki);gw=i(Ku,"This model inherits from "),Wd=s(Ku,"A",{href:!0});var qx=r(Wd);_w=i(qx,"TFPreTrainedModel"),qx.forEach(t),bw=i(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(t),kw=p(St),Ti=s(St,"P",{});var Ju=r(Ti);Tw=i(Ju,"This model is also a "),vi=s(Ju,"A",{href:!0,rel:!0});var jx=r(vi);vw=i(jx,"tf.keras.Model"),jx.forEach(t),yw=i(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),ww=p(St),y(xs.$$.fragment,St),$w=p(St),lt=s(St,"DIV",{class:!0});var go=r(lt);y(yi.$$.fragment,go),Aw=p(go),Zo=s(go,"P",{});var _c=r(Zo);Fw=i(_c,"The "),Ud=s(_c,"A",{href:!0});var Px=r(Ud);xw=i(Px,"TFAlbertForTokenClassification"),Px.forEach(t),Ew=i(_c," forward method, overrides the "),Gp=s(_c,"CODE",{});var Cx=r(Gp);Mw=i(Cx,"__call__"),Cx.forEach(t),zw=i(_c," special method."),_c.forEach(t),qw=p(go),y(Es.$$.fragment,go),jw=p(go),y(Ms.$$.fragment,go),Pw=p(go),y(zs.$$.fragment,go),go.forEach(t),St.forEach(t),Sf=p(o),en=s(o,"H2",{class:!0});var Gu=r(en);qs=s(Gu,"A",{id:!0,class:!0,href:!0});var Lx=r(qs);Xp=s(Lx,"SPAN",{});var Ix=r(Xp);y(wi.$$.fragment,Ix),Ix.forEach(t),Lx.forEach(t),Cw=p(Gu),Yp=s(Gu,"SPAN",{});var Ox=r(Yp);Lw=i(Ox,"TFAlbertForQuestionAnswering"),Ox.forEach(t),Gu.forEach(t),Bf=p(o),Ke=s(o,"DIV",{class:!0});var Bt=r(Ke);y($i.$$.fragment,Bt),Iw=p(Bt),tn=s(Bt,"P",{});var bc=r(tn);Ow=i(bc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=s(bc,"CODE",{});var Nx=r(Zp);Nw=i(Nx,"span start logits"),Nx.forEach(t),Dw=i(bc," and "),eh=s(bc,"CODE",{});var Dx=r(eh);Sw=i(Dx,"span end logits"),Dx.forEach(t),Bw=i(bc,")."),bc.forEach(t),Ww=p(Bt),Ai=s(Bt,"P",{});var Xu=r(Ai);Uw=i(Xu,"This model inherits from "),Rd=s(Xu,"A",{href:!0});var Sx=r(Rd);Rw=i(Sx,"TFPreTrainedModel"),Sx.forEach(t),Hw=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Qw=p(Bt),Fi=s(Bt,"P",{});var Yu=r(Fi);Vw=i(Yu,"This model is also a "),xi=s(Yu,"A",{href:!0,rel:!0});var Bx=r(xi);Kw=i(Bx,"tf.keras.Model"),Bx.forEach(t),Jw=i(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),Gw=p(Bt),y(js.$$.fragment,Bt),Xw=p(Bt),dt=s(Bt,"DIV",{class:!0});var _o=r(dt);y(Ei.$$.fragment,_o),Yw=p(_o),on=s(_o,"P",{});var kc=r(on);Zw=i(kc,"The "),Hd=s(kc,"A",{href:!0});var Wx=r(Hd);e$=i(Wx,"TFAlbertForQuestionAnswering"),Wx.forEach(t),t$=i(kc," forward method, overrides the "),th=s(kc,"CODE",{});var Ux=r(th);o$=i(Ux,"__call__"),Ux.forEach(t),n$=i(kc," special method."),kc.forEach(t),s$=p(_o),y(Ps.$$.fragment,_o),r$=p(_o),y(Cs.$$.fragment,_o),a$=p(_o),y(Ls.$$.fragment,_o),_o.forEach(t),Bt.forEach(t),Wf=p(o),nn=s(o,"H2",{class:!0});var Zu=r(nn);Is=s(Zu,"A",{id:!0,class:!0,href:!0});var Rx=r(Is);oh=s(Rx,"SPAN",{});var Hx=r(oh);y(Mi.$$.fragment,Hx),Hx.forEach(t),Rx.forEach(t),i$=p(Zu),nh=s(Zu,"SPAN",{});var Qx=r(nh);l$=i(Qx,"FlaxAlbertModel"),Qx.forEach(t),Zu.forEach(t),Uf=p(o),Ce=s(o,"DIV",{class:!0});var pt=r(Ce);y(zi.$$.fragment,pt),d$=p(pt),sh=s(pt,"P",{});var Vx=r(sh);c$=i(Vx,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Vx.forEach(t),p$=p(pt),qi=s(pt,"P",{});var eg=r(qi);h$=i(eg,"This model inherits from "),Qd=s(eg,"A",{href:!0});var Kx=r(Qd);m$=i(Kx,"FlaxPreTrainedModel"),Kx.forEach(t),f$=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),u$=p(pt),ji=s(pt,"P",{});var tg=r(ji);g$=i(tg,"This model is also a Flax Linen "),Pi=s(tg,"A",{href:!0,rel:!0});var Jx=r(Pi);_$=i(Jx,"flax.linen.Module"),Jx.forEach(t),b$=i(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),k$=p(pt),rh=s(pt,"P",{});var Gx=r(rh);T$=i(Gx,"Finally, this model supports inherent JAX features such as:"),Gx.forEach(t),v$=p(pt),Rt=s(pt,"UL",{});var hr=r(Rt);ah=s(hr,"LI",{});var Xx=r(ah);Ci=s(Xx,"A",{href:!0,rel:!0});var Yx=r(Ci);y$=i(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Xx.forEach(t),w$=p(hr),ih=s(hr,"LI",{});var Zx=r(ih);Li=s(Zx,"A",{href:!0,rel:!0});var eE=r(Li);$$=i(eE,"Automatic Differentiation"),eE.forEach(t),Zx.forEach(t),A$=p(hr),lh=s(hr,"LI",{});var tE=r(lh);Ii=s(tE,"A",{href:!0,rel:!0});var oE=r(Ii);F$=i(oE,"Vectorization"),oE.forEach(t),tE.forEach(t),x$=p(hr),dh=s(hr,"LI",{});var nE=r(dh);Oi=s(nE,"A",{href:!0,rel:!0});var sE=r(Oi);E$=i(sE,"Parallelization"),sE.forEach(t),nE.forEach(t),hr.forEach(t),M$=p(pt),Et=s(pt,"DIV",{class:!0});var mr=r(Et);y(Ni.$$.fragment,mr),z$=p(mr),sn=s(mr,"P",{});var Tc=r(sn);q$=i(Tc,"The "),ch=s(Tc,"CODE",{});var rE=r(ch);j$=i(rE,"FlaxAlbertPreTrainedModel"),rE.forEach(t),P$=i(Tc," forward method, overrides the "),ph=s(Tc,"CODE",{});var aE=r(ph);C$=i(aE,"__call__"),aE.forEach(t),L$=i(Tc," special method."),Tc.forEach(t),I$=p(mr),y(Os.$$.fragment,mr),O$=p(mr),y(Ns.$$.fragment,mr),mr.forEach(t),pt.forEach(t),Rf=p(o),rn=s(o,"H2",{class:!0});var og=r(rn);Ds=s(og,"A",{id:!0,class:!0,href:!0});var iE=r(Ds);hh=s(iE,"SPAN",{});var lE=r(hh);y(Di.$$.fragment,lE),lE.forEach(t),iE.forEach(t),N$=p(og),mh=s(og,"SPAN",{});var dE=r(mh);D$=i(dE,"FlaxAlbertForPreTraining"),dE.forEach(t),og.forEach(t),Hf=p(o),Le=s(o,"DIV",{class:!0});var ht=r(Le);y(Si.$$.fragment,ht),S$=p(ht),an=s(ht,"P",{});var vc=r(an);B$=i(vc,"Albert Model with two heads on top as done during the pretraining: a "),fh=s(vc,"CODE",{});var cE=r(fh);W$=i(cE,"masked language modeling"),cE.forEach(t),U$=i(vc,` head and a
`),uh=s(vc,"CODE",{});var pE=r(uh);R$=i(pE,"sentence order prediction (classification)"),pE.forEach(t),H$=i(vc," head."),vc.forEach(t),Q$=p(ht),Bi=s(ht,"P",{});var ng=r(Bi);V$=i(ng,"This model inherits from "),Vd=s(ng,"A",{href:!0});var hE=r(Vd);K$=i(hE,"FlaxPreTrainedModel"),hE.forEach(t),J$=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),G$=p(ht),Wi=s(ht,"P",{});var sg=r(Wi);X$=i(sg,"This model is also a Flax Linen "),Ui=s(sg,"A",{href:!0,rel:!0});var mE=r(Ui);Y$=i(mE,"flax.linen.Module"),mE.forEach(t),Z$=i(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),e1=p(ht),gh=s(ht,"P",{});var fE=r(gh);t1=i(fE,"Finally, this model supports inherent JAX features such as:"),fE.forEach(t),o1=p(ht),Ht=s(ht,"UL",{});var fr=r(Ht);_h=s(fr,"LI",{});var uE=r(_h);Ri=s(uE,"A",{href:!0,rel:!0});var gE=r(Ri);n1=i(gE,"Just-In-Time (JIT) compilation"),gE.forEach(t),uE.forEach(t),s1=p(fr),bh=s(fr,"LI",{});var _E=r(bh);Hi=s(_E,"A",{href:!0,rel:!0});var bE=r(Hi);r1=i(bE,"Automatic Differentiation"),bE.forEach(t),_E.forEach(t),a1=p(fr),kh=s(fr,"LI",{});var kE=r(kh);Qi=s(kE,"A",{href:!0,rel:!0});var TE=r(Qi);i1=i(TE,"Vectorization"),TE.forEach(t),kE.forEach(t),l1=p(fr),Th=s(fr,"LI",{});var vE=r(Th);Vi=s(vE,"A",{href:!0,rel:!0});var yE=r(Vi);d1=i(yE,"Parallelization"),yE.forEach(t),vE.forEach(t),fr.forEach(t),c1=p(ht),Mt=s(ht,"DIV",{class:!0});var ur=r(Mt);y(Ki.$$.fragment,ur),p1=p(ur),ln=s(ur,"P",{});var yc=r(ln);h1=i(yc,"The "),vh=s(yc,"CODE",{});var wE=r(vh);m1=i(wE,"FlaxAlbertPreTrainedModel"),wE.forEach(t),f1=i(yc," forward method, overrides the "),yh=s(yc,"CODE",{});var $E=r(yh);u1=i($E,"__call__"),$E.forEach(t),g1=i(yc," special method."),yc.forEach(t),_1=p(ur),y(Ss.$$.fragment,ur),b1=p(ur),y(Bs.$$.fragment,ur),ur.forEach(t),ht.forEach(t),Qf=p(o),dn=s(o,"H2",{class:!0});var rg=r(dn);Ws=s(rg,"A",{id:!0,class:!0,href:!0});var AE=r(Ws);wh=s(AE,"SPAN",{});var FE=r(wh);y(Ji.$$.fragment,FE),FE.forEach(t),AE.forEach(t),k1=p(rg),$h=s(rg,"SPAN",{});var xE=r($h);T1=i(xE,"FlaxAlbertForMaskedLM"),xE.forEach(t),rg.forEach(t),Vf=p(o),Ie=s(o,"DIV",{class:!0});var mt=r(Ie);y(Gi.$$.fragment,mt),v1=p(mt),Xi=s(mt,"P",{});var ag=r(Xi);y1=i(ag,"Albert Model with a "),Ah=s(ag,"CODE",{});var EE=r(Ah);w1=i(EE,"language modeling"),EE.forEach(t),$1=i(ag," head on top."),ag.forEach(t),A1=p(mt),Yi=s(mt,"P",{});var ig=r(Yi);F1=i(ig,"This model inherits from "),Kd=s(ig,"A",{href:!0});var ME=r(Kd);x1=i(ME,"FlaxPreTrainedModel"),ME.forEach(t),E1=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),M1=p(mt),Zi=s(mt,"P",{});var lg=r(Zi);z1=i(lg,"This model is also a Flax Linen "),el=s(lg,"A",{href:!0,rel:!0});var zE=r(el);q1=i(zE,"flax.linen.Module"),zE.forEach(t),j1=i(lg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lg.forEach(t),P1=p(mt),Fh=s(mt,"P",{});var qE=r(Fh);C1=i(qE,"Finally, this model supports inherent JAX features such as:"),qE.forEach(t),L1=p(mt),Qt=s(mt,"UL",{});var gr=r(Qt);xh=s(gr,"LI",{});var jE=r(xh);tl=s(jE,"A",{href:!0,rel:!0});var PE=r(tl);I1=i(PE,"Just-In-Time (JIT) compilation"),PE.forEach(t),jE.forEach(t),O1=p(gr),Eh=s(gr,"LI",{});var CE=r(Eh);ol=s(CE,"A",{href:!0,rel:!0});var LE=r(ol);N1=i(LE,"Automatic Differentiation"),LE.forEach(t),CE.forEach(t),D1=p(gr),Mh=s(gr,"LI",{});var IE=r(Mh);nl=s(IE,"A",{href:!0,rel:!0});var OE=r(nl);S1=i(OE,"Vectorization"),OE.forEach(t),IE.forEach(t),B1=p(gr),zh=s(gr,"LI",{});var NE=r(zh);sl=s(NE,"A",{href:!0,rel:!0});var DE=r(sl);W1=i(DE,"Parallelization"),DE.forEach(t),NE.forEach(t),gr.forEach(t),U1=p(mt),zt=s(mt,"DIV",{class:!0});var _r=r(zt);y(rl.$$.fragment,_r),R1=p(_r),cn=s(_r,"P",{});var wc=r(cn);H1=i(wc,"The "),qh=s(wc,"CODE",{});var SE=r(qh);Q1=i(SE,"FlaxAlbertPreTrainedModel"),SE.forEach(t),V1=i(wc," forward method, overrides the "),jh=s(wc,"CODE",{});var BE=r(jh);K1=i(BE,"__call__"),BE.forEach(t),J1=i(wc," special method."),wc.forEach(t),G1=p(_r),y(Us.$$.fragment,_r),X1=p(_r),y(Rs.$$.fragment,_r),_r.forEach(t),mt.forEach(t),Kf=p(o),pn=s(o,"H2",{class:!0});var dg=r(pn);Hs=s(dg,"A",{id:!0,class:!0,href:!0});var WE=r(Hs);Ph=s(WE,"SPAN",{});var UE=r(Ph);y(al.$$.fragment,UE),UE.forEach(t),WE.forEach(t),Y1=p(dg),Ch=s(dg,"SPAN",{});var RE=r(Ch);Z1=i(RE,"FlaxAlbertForSequenceClassification"),RE.forEach(t),dg.forEach(t),Jf=p(o),Oe=s(o,"DIV",{class:!0});var ft=r(Oe);y(il.$$.fragment,ft),e2=p(ft),Lh=s(ft,"P",{});var HE=r(Lh);t2=i(HE,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),HE.forEach(t),o2=p(ft),ll=s(ft,"P",{});var cg=r(ll);n2=i(cg,"This model inherits from "),Jd=s(cg,"A",{href:!0});var QE=r(Jd);s2=i(QE,"FlaxPreTrainedModel"),QE.forEach(t),r2=i(cg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cg.forEach(t),a2=p(ft),dl=s(ft,"P",{});var pg=r(dl);i2=i(pg,"This model is also a Flax Linen "),cl=s(pg,"A",{href:!0,rel:!0});var VE=r(cl);l2=i(VE,"flax.linen.Module"),VE.forEach(t),d2=i(pg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pg.forEach(t),c2=p(ft),Ih=s(ft,"P",{});var KE=r(Ih);p2=i(KE,"Finally, this model supports inherent JAX features such as:"),KE.forEach(t),h2=p(ft),Vt=s(ft,"UL",{});var br=r(Vt);Oh=s(br,"LI",{});var JE=r(Oh);pl=s(JE,"A",{href:!0,rel:!0});var GE=r(pl);m2=i(GE,"Just-In-Time (JIT) compilation"),GE.forEach(t),JE.forEach(t),f2=p(br),Nh=s(br,"LI",{});var XE=r(Nh);hl=s(XE,"A",{href:!0,rel:!0});var YE=r(hl);u2=i(YE,"Automatic Differentiation"),YE.forEach(t),XE.forEach(t),g2=p(br),Dh=s(br,"LI",{});var ZE=r(Dh);ml=s(ZE,"A",{href:!0,rel:!0});var eM=r(ml);_2=i(eM,"Vectorization"),eM.forEach(t),ZE.forEach(t),b2=p(br),Sh=s(br,"LI",{});var tM=r(Sh);fl=s(tM,"A",{href:!0,rel:!0});var oM=r(fl);k2=i(oM,"Parallelization"),oM.forEach(t),tM.forEach(t),br.forEach(t),T2=p(ft),qt=s(ft,"DIV",{class:!0});var kr=r(qt);y(ul.$$.fragment,kr),v2=p(kr),hn=s(kr,"P",{});var $c=r(hn);y2=i($c,"The "),Bh=s($c,"CODE",{});var nM=r(Bh);w2=i(nM,"FlaxAlbertPreTrainedModel"),nM.forEach(t),$2=i($c," forward method, overrides the "),Wh=s($c,"CODE",{});var sM=r(Wh);A2=i(sM,"__call__"),sM.forEach(t),F2=i($c," special method."),$c.forEach(t),x2=p(kr),y(Qs.$$.fragment,kr),E2=p(kr),y(Vs.$$.fragment,kr),kr.forEach(t),ft.forEach(t),Gf=p(o),mn=s(o,"H2",{class:!0});var hg=r(mn);Ks=s(hg,"A",{id:!0,class:!0,href:!0});var rM=r(Ks);Uh=s(rM,"SPAN",{});var aM=r(Uh);y(gl.$$.fragment,aM),aM.forEach(t),rM.forEach(t),M2=p(hg),Rh=s(hg,"SPAN",{});var iM=r(Rh);z2=i(iM,"FlaxAlbertForMultipleChoice"),iM.forEach(t),hg.forEach(t),Xf=p(o),Ne=s(o,"DIV",{class:!0});var ut=r(Ne);y(_l.$$.fragment,ut),q2=p(ut),Hh=s(ut,"P",{});var lM=r(Hh);j2=i(lM,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lM.forEach(t),P2=p(ut),bl=s(ut,"P",{});var mg=r(bl);C2=i(mg,"This model inherits from "),Gd=s(mg,"A",{href:!0});var dM=r(Gd);L2=i(dM,"FlaxPreTrainedModel"),dM.forEach(t),I2=i(mg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mg.forEach(t),O2=p(ut),kl=s(ut,"P",{});var fg=r(kl);N2=i(fg,"This model is also a Flax Linen "),Tl=s(fg,"A",{href:!0,rel:!0});var cM=r(Tl);D2=i(cM,"flax.linen.Module"),cM.forEach(t),S2=i(fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fg.forEach(t),B2=p(ut),Qh=s(ut,"P",{});var pM=r(Qh);W2=i(pM,"Finally, this model supports inherent JAX features such as:"),pM.forEach(t),U2=p(ut),Kt=s(ut,"UL",{});var Tr=r(Kt);Vh=s(Tr,"LI",{});var hM=r(Vh);vl=s(hM,"A",{href:!0,rel:!0});var mM=r(vl);R2=i(mM,"Just-In-Time (JIT) compilation"),mM.forEach(t),hM.forEach(t),H2=p(Tr),Kh=s(Tr,"LI",{});var fM=r(Kh);yl=s(fM,"A",{href:!0,rel:!0});var uM=r(yl);Q2=i(uM,"Automatic Differentiation"),uM.forEach(t),fM.forEach(t),V2=p(Tr),Jh=s(Tr,"LI",{});var gM=r(Jh);wl=s(gM,"A",{href:!0,rel:!0});var _M=r(wl);K2=i(_M,"Vectorization"),_M.forEach(t),gM.forEach(t),J2=p(Tr),Gh=s(Tr,"LI",{});var bM=r(Gh);$l=s(bM,"A",{href:!0,rel:!0});var kM=r($l);G2=i(kM,"Parallelization"),kM.forEach(t),bM.forEach(t),Tr.forEach(t),X2=p(ut),jt=s(ut,"DIV",{class:!0});var vr=r(jt);y(Al.$$.fragment,vr),Y2=p(vr),fn=s(vr,"P",{});var Ac=r(fn);Z2=i(Ac,"The "),Xh=s(Ac,"CODE",{});var TM=r(Xh);eA=i(TM,"FlaxAlbertPreTrainedModel"),TM.forEach(t),tA=i(Ac," forward method, overrides the "),Yh=s(Ac,"CODE",{});var vM=r(Yh);oA=i(vM,"__call__"),vM.forEach(t),nA=i(Ac," special method."),Ac.forEach(t),sA=p(vr),y(Js.$$.fragment,vr),rA=p(vr),y(Gs.$$.fragment,vr),vr.forEach(t),ut.forEach(t),Yf=p(o),un=s(o,"H2",{class:!0});var ug=r(un);Xs=s(ug,"A",{id:!0,class:!0,href:!0});var yM=r(Xs);Zh=s(yM,"SPAN",{});var wM=r(Zh);y(Fl.$$.fragment,wM),wM.forEach(t),yM.forEach(t),aA=p(ug),em=s(ug,"SPAN",{});var $M=r(em);iA=i($M,"FlaxAlbertForTokenClassification"),$M.forEach(t),ug.forEach(t),Zf=p(o),De=s(o,"DIV",{class:!0});var gt=r(De);y(xl.$$.fragment,gt),lA=p(gt),tm=s(gt,"P",{});var AM=r(tm);dA=i(AM,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),AM.forEach(t),cA=p(gt),El=s(gt,"P",{});var gg=r(El);pA=i(gg,"This model inherits from "),Xd=s(gg,"A",{href:!0});var FM=r(Xd);hA=i(FM,"FlaxPreTrainedModel"),FM.forEach(t),mA=i(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),fA=p(gt),Ml=s(gt,"P",{});var _g=r(Ml);uA=i(_g,"This model is also a Flax Linen "),zl=s(_g,"A",{href:!0,rel:!0});var xM=r(zl);gA=i(xM,"flax.linen.Module"),xM.forEach(t),_A=i(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),bA=p(gt),om=s(gt,"P",{});var EM=r(om);kA=i(EM,"Finally, this model supports inherent JAX features such as:"),EM.forEach(t),TA=p(gt),Jt=s(gt,"UL",{});var yr=r(Jt);nm=s(yr,"LI",{});var MM=r(nm);ql=s(MM,"A",{href:!0,rel:!0});var zM=r(ql);vA=i(zM,"Just-In-Time (JIT) compilation"),zM.forEach(t),MM.forEach(t),yA=p(yr),sm=s(yr,"LI",{});var qM=r(sm);jl=s(qM,"A",{href:!0,rel:!0});var jM=r(jl);wA=i(jM,"Automatic Differentiation"),jM.forEach(t),qM.forEach(t),$A=p(yr),rm=s(yr,"LI",{});var PM=r(rm);Pl=s(PM,"A",{href:!0,rel:!0});var CM=r(Pl);AA=i(CM,"Vectorization"),CM.forEach(t),PM.forEach(t),FA=p(yr),am=s(yr,"LI",{});var LM=r(am);Cl=s(LM,"A",{href:!0,rel:!0});var IM=r(Cl);xA=i(IM,"Parallelization"),IM.forEach(t),LM.forEach(t),yr.forEach(t),EA=p(gt),Pt=s(gt,"DIV",{class:!0});var wr=r(Pt);y(Ll.$$.fragment,wr),MA=p(wr),gn=s(wr,"P",{});var Fc=r(gn);zA=i(Fc,"The "),im=s(Fc,"CODE",{});var OM=r(im);qA=i(OM,"FlaxAlbertPreTrainedModel"),OM.forEach(t),jA=i(Fc," forward method, overrides the "),lm=s(Fc,"CODE",{});var NM=r(lm);PA=i(NM,"__call__"),NM.forEach(t),CA=i(Fc," special method."),Fc.forEach(t),LA=p(wr),y(Ys.$$.fragment,wr),IA=p(wr),y(Zs.$$.fragment,wr),wr.forEach(t),gt.forEach(t),eu=p(o),_n=s(o,"H2",{class:!0});var bg=r(_n);er=s(bg,"A",{id:!0,class:!0,href:!0});var DM=r(er);dm=s(DM,"SPAN",{});var SM=r(dm);y(Il.$$.fragment,SM),SM.forEach(t),DM.forEach(t),OA=p(bg),cm=s(bg,"SPAN",{});var BM=r(cm);NA=i(BM,"FlaxAlbertForQuestionAnswering"),BM.forEach(t),bg.forEach(t),tu=p(o),Se=s(o,"DIV",{class:!0});var _t=r(Se);y(Ol.$$.fragment,_t),DA=p(_t),bn=s(_t,"P",{});var xc=r(bn);SA=i(xc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=s(xc,"CODE",{});var WM=r(pm);BA=i(WM,"span start logits"),WM.forEach(t),WA=i(xc," and "),hm=s(xc,"CODE",{});var UM=r(hm);UA=i(UM,"span end logits"),UM.forEach(t),RA=i(xc,")."),xc.forEach(t),HA=p(_t),Nl=s(_t,"P",{});var kg=r(Nl);QA=i(kg,"This model inherits from "),Yd=s(kg,"A",{href:!0});var RM=r(Yd);VA=i(RM,"FlaxPreTrainedModel"),RM.forEach(t),KA=i(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kg.forEach(t),JA=p(_t),Dl=s(_t,"P",{});var Tg=r(Dl);GA=i(Tg,"This model is also a Flax Linen "),Sl=s(Tg,"A",{href:!0,rel:!0});var HM=r(Sl);XA=i(HM,"flax.linen.Module"),HM.forEach(t),YA=i(Tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tg.forEach(t),ZA=p(_t),mm=s(_t,"P",{});var QM=r(mm);eF=i(QM,"Finally, this model supports inherent JAX features such as:"),QM.forEach(t),tF=p(_t),Gt=s(_t,"UL",{});var $r=r(Gt);fm=s($r,"LI",{});var VM=r(fm);Bl=s(VM,"A",{href:!0,rel:!0});var KM=r(Bl);oF=i(KM,"Just-In-Time (JIT) compilation"),KM.forEach(t),VM.forEach(t),nF=p($r),um=s($r,"LI",{});var JM=r(um);Wl=s(JM,"A",{href:!0,rel:!0});var GM=r(Wl);sF=i(GM,"Automatic Differentiation"),GM.forEach(t),JM.forEach(t),rF=p($r),gm=s($r,"LI",{});var XM=r(gm);Ul=s(XM,"A",{href:!0,rel:!0});var YM=r(Ul);aF=i(YM,"Vectorization"),YM.forEach(t),XM.forEach(t),iF=p($r),_m=s($r,"LI",{});var ZM=r(_m);Rl=s(ZM,"A",{href:!0,rel:!0});var ez=r(Rl);lF=i(ez,"Parallelization"),ez.forEach(t),ZM.forEach(t),$r.forEach(t),dF=p(_t),Ct=s(_t,"DIV",{class:!0});var Ar=r(Ct);y(Hl.$$.fragment,Ar),cF=p(Ar),kn=s(Ar,"P",{});var Ec=r(kn);pF=i(Ec,"The "),bm=s(Ec,"CODE",{});var tz=r(bm);hF=i(tz,"FlaxAlbertPreTrainedModel"),tz.forEach(t),mF=i(Ec," forward method, overrides the "),km=s(Ec,"CODE",{});var oz=r(km);fF=i(oz,"__call__"),oz.forEach(t),uF=i(Ec," special method."),Ec.forEach(t),gF=p(Ar),y(tr.$$.fragment,Ar),_F=p(Ar),y(or.$$.fragment,Ar),Ar.forEach(t),_t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_4)),u(m,"id","albert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#albert"),u(h,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(z,"class","relative group"),u(te,"href","https://arxiv.org/abs/1909.11942"),u(te,"rel","nofollow"),u(ye,"href","https://huggingface.co/lysandre"),u(ye,"rel","nofollow"),u(S,"href","https://huggingface.co/kamalkraj"),u(S,"rel","nofollow"),u(B,"href","https://github.com/google-research/ALBERT"),u(B,"rel","nofollow"),u(wn,"id","transformers.AlbertConfig"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.AlbertConfig"),u(ve,"class","relative group"),u(rd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel"),u(ad,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel"),u(Er,"href","https://huggingface.co/albert-xxlarge-v2"),u(Er,"rel","nofollow"),u(id,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ld,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.AlbertTokenizer"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.AlbertTokenizer"),u(ko,"class","relative group"),u(jr,"href","https://github.com/google/sentencepiece"),u(jr,"rel","nofollow"),u(dd,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.AlbertTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.AlbertTokenizerFast"),u(vo,"class","relative group"),u(Wr,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(Wr,"rel","nofollow"),u(md,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(yo,"class","relative group"),u(gd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_d,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.AlbertModel"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.AlbertModel"),u(Ao,"class","relative group"),u(bd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ta,"rel","nofollow"),u(kd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.AlbertForPreTraining"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.AlbertForPreTraining"),u(xo,"class","relative group"),u(Td,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ia,"rel","nofollow"),u(vd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.AlbertForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.AlbertForMaskedLM"),u(zo,"class","relative group"),u(yd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fa,"rel","nofollow"),u(wd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.AlbertForSequenceClassification"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.AlbertForSequenceClassification"),u(jo,"class","relative group"),u($d,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ta,"rel","nofollow"),u(Ad,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertForMultipleChoice"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertForMultipleChoice"),u(Co,"class","relative group"),u(Fd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fa,"rel","nofollow"),u(xd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.AlbertForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.AlbertForTokenClassification"),u(Io,"class","relative group"),u(Ed,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(Md,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForTokenClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForQuestionAnswering"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForQuestionAnswering"),u(No,"class","relative group"),u(zd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Na,"rel","nofollow"),u(qd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFAlbertModel"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFAlbertModel"),u(Bo,"class","relative group"),u(jd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Pd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFAlbertForPreTraining"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFAlbertForPreTraining"),u(Uo,"class","relative group"),u(Cd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ga,"rel","nofollow"),u(Ld,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.TFAlbertForMaskedLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.TFAlbertForMaskedLM"),u(Qo,"class","relative group"),u(Id,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ni,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ni,"rel","nofollow"),u(Od,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.TFAlbertForSequenceClassification"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.TFAlbertForSequenceClassification"),u(Ko,"class","relative group"),u(Nd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(di,"rel","nofollow"),u(Dd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFAlbertForMultipleChoice"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFAlbertForMultipleChoice"),u(Go,"class","relative group"),u(Sd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ui,"rel","nofollow"),u(Bd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.TFAlbertForTokenClassification"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.TFAlbertForTokenClassification"),u(Yo,"class","relative group"),u(Wd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(vi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vi,"rel","nofollow"),u(Ud,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFAlbertForQuestionAnswering"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFAlbertForQuestionAnswering"),u(en,"class","relative group"),u(Rd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(xi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xi,"rel","nofollow"),u(Hd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxAlbertModel"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxAlbertModel"),u(nn,"class","relative group"),u(Qd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Pi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Pi,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ci,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ii,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.FlaxAlbertForPreTraining"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.FlaxAlbertForPreTraining"),u(rn,"class","relative group"),u(Vd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ui,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ri,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxAlbertForMaskedLM"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxAlbertForMaskedLM"),u(dn,"class","relative group"),u(Kd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(el,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sl,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxAlbertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxAlbertForSequenceClassification"),u(pn,"class","relative group"),u(Jd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(fl,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxAlbertForMultipleChoice"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxAlbertForMultipleChoice"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Tl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Tl,"rel","nofollow"),u(vl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(vl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yl,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxAlbertForTokenClassification"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxAlbertForTokenClassification"),u(un,"class","relative group"),u(Xd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(zl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(zl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ql,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(jl,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Cl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.FlaxAlbertForQuestionAnswering"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(_n,"class","relative group"),u(Yd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Sl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Sl,"rel","nofollow"),u(Bl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bl,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Wl,"rel","nofollow"),u(Ul,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ul,"rel","nofollow"),u(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Rl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,h,k),e(h,m),e(m,_),w(l,_,null),e(h,f),e(h,E),e(E,fe),b(o,G,k),b(o,z,k),e(z,Y),e(Y,W),w(ee,W,null),e(z,ue),e(z,U),e(U,ge),b(o,de,k),b(o,K,k),e(K,I),e(K,te),e(te,X),e(K,q),b(o,P,k),b(o,Z,k),e(Z,R),e(R,_e),e(Z,be),e(Z,H),e(H,ke),b(o,ce,k),b(o,j,k),e(j,Te),b(o,Q,k),b(o,oe,k),e(oe,ie),e(ie,V),b(o,pe,k),b(o,ne,k),e(ne,O),b(o,he,k),b(o,D,k),e(D,le),e(le,T),e(D,M),e(D,J),e(J,Fe),b(o,Ae,k),b(o,C,k),e(C,xe),e(C,ye),e(ye,Ee),e(C,N),e(C,S),e(S,Me),e(C,ze),e(C,B),e(B,qe),e(C,je),b(o,me,k),b(o,ve,k),e(ve,wn),e(wn,Mc),w(Fr,Mc,null),e(ve,vg),e(ve,zc),e(zc,yg),b(o,rf,k),b(o,bt,k),w(xr,bt,null),e(bt,wg),e(bt,Wt),e(Wt,$g),e(Wt,rd),e(rd,Ag),e(Wt,Fg),e(Wt,ad),e(ad,xg),e(Wt,Eg),e(Wt,Er),e(Er,Mg),e(Wt,zg),e(bt,qg),e(bt,bo),e(bo,jg),e(bo,id),e(id,Pg),e(bo,Cg),e(bo,ld),e(ld,Lg),e(bo,Ig),e(bt,Og),w($n,bt,null),b(o,af,k),b(o,ko,k),e(ko,An),e(An,qc),w(Mr,qc,null),e(ko,Ng),e(ko,jc),e(jc,Dg),b(o,lf,k),b(o,Pe,k),w(zr,Pe,null),e(Pe,Sg),e(Pe,qr),e(qr,Bg),e(qr,jr),e(jr,Wg),e(qr,Ug),e(Pe,Rg),e(Pe,Pr),e(Pr,Hg),e(Pr,dd),e(dd,Qg),e(Pr,Vg),e(Pe,Kg),e(Pe,to),w(Cr,to,null),e(to,Jg),e(to,Pc),e(Pc,Gg),e(to,Xg),e(to,Lr),e(Lr,cd),e(cd,Yg),e(cd,Cc),e(Cc,Zg),e(Lr,e_),e(Lr,pd),e(pd,t_),e(pd,Lc),e(Lc,o_),e(Pe,n_),e(Pe,Fn),w(Ir,Fn,null),e(Fn,s_),e(Fn,Or),e(Or,r_),e(Or,Ic),e(Ic,a_),e(Or,i_),e(Pe,l_),e(Pe,Tt),w(Nr,Tt,null),e(Tt,d_),e(Tt,Oc),e(Oc,c_),e(Tt,p_),w(xn,Tt,null),e(Tt,h_),e(Tt,To),e(To,m_),e(To,Nc),e(Nc,f_),e(To,u_),e(To,Dc),e(Dc,g_),e(To,__),e(Pe,b_),e(Pe,hd),w(Dr,hd,null),b(o,df,k),b(o,vo,k),e(vo,En),e(En,Sc),w(Sr,Sc,null),e(vo,k_),e(vo,Bc),e(Bc,T_),b(o,cf,k),b(o,kt,k),w(Br,kt,null),e(kt,v_),e(kt,Ut),e(Ut,y_),e(Ut,Wc),e(Wc,w_),e(Ut,$_),e(Ut,Wr),e(Wr,A_),e(Ut,F_),e(Ut,md),e(md,x_),e(Ut,E_),e(kt,M_),e(kt,oo),w(Ur,oo,null),e(oo,z_),e(oo,Uc),e(Uc,q_),e(oo,j_),e(oo,Rr),e(Rr,fd),e(fd,P_),e(fd,Rc),e(Rc,C_),e(Rr,L_),e(Rr,ud),e(ud,I_),e(ud,Hc),e(Hc,O_),e(kt,N_),e(kt,vt),w(Hr,vt,null),e(vt,D_),e(vt,Qc),e(Qc,S_),e(vt,B_),w(Mn,vt,null),e(vt,W_),e(vt,Vc),e(Vc,U_),b(o,pf,k),b(o,yo,k),e(yo,zn),e(zn,Kc),w(Qr,Kc,null),e(yo,R_),e(yo,Jc),e(Jc,H_),b(o,hf,k),b(o,wo,k),w(Vr,wo,null),e(wo,Q_),e(wo,Kr),e(Kr,V_),e(Kr,gd),e(gd,K_),e(Kr,J_),b(o,mf,k),b(o,$o,k),w(Jr,$o,null),e($o,G_),e($o,Gr),e(Gr,X_),e(Gr,_d),e(_d,Y_),e(Gr,Z_),b(o,ff,k),b(o,Ao,k),e(Ao,qn),e(qn,Gc),w(Xr,Gc,null),e(Ao,eb),e(Ao,Xc),e(Xc,tb),b(o,uf,k),b(o,Ge,k),w(Yr,Ge,null),e(Ge,ob),e(Ge,Yc),e(Yc,nb),e(Ge,sb),e(Ge,Zr),e(Zr,rb),e(Zr,bd),e(bd,ab),e(Zr,ib),e(Ge,lb),e(Ge,ea),e(ea,db),e(ea,ta),e(ta,cb),e(ea,pb),e(Ge,hb),e(Ge,yt),w(oa,yt,null),e(yt,mb),e(yt,Fo),e(Fo,fb),e(Fo,kd),e(kd,ub),e(Fo,gb),e(Fo,Zc),e(Zc,_b),e(Fo,bb),e(yt,kb),w(jn,yt,null),e(yt,Tb),w(Pn,yt,null),b(o,gf,k),b(o,xo,k),e(xo,Cn),e(Cn,ep),w(na,ep,null),e(xo,vb),e(xo,tp),e(tp,yb),b(o,_f,k),b(o,Xe,k),w(sa,Xe,null),e(Xe,wb),e(Xe,Eo),e(Eo,$b),e(Eo,op),e(op,Ab),e(Eo,Fb),e(Eo,np),e(np,xb),e(Eo,Eb),e(Xe,Mb),e(Xe,ra),e(ra,zb),e(ra,Td),e(Td,qb),e(ra,jb),e(Xe,Pb),e(Xe,aa),e(aa,Cb),e(aa,ia),e(ia,Lb),e(aa,Ib),e(Xe,Ob),e(Xe,wt),w(la,wt,null),e(wt,Nb),e(wt,Mo),e(Mo,Db),e(Mo,vd),e(vd,Sb),e(Mo,Bb),e(Mo,sp),e(sp,Wb),e(Mo,Ub),e(wt,Rb),w(Ln,wt,null),e(wt,Hb),w(In,wt,null),b(o,bf,k),b(o,zo,k),e(zo,On),e(On,rp),w(da,rp,null),e(zo,Qb),e(zo,ap),e(ap,Vb),b(o,kf,k),b(o,Ye,k),w(ca,Ye,null),e(Ye,Kb),e(Ye,pa),e(pa,Jb),e(pa,ip),e(ip,Gb),e(pa,Xb),e(Ye,Yb),e(Ye,ha),e(ha,Zb),e(ha,yd),e(yd,ek),e(ha,tk),e(Ye,ok),e(Ye,ma),e(ma,nk),e(ma,fa),e(fa,sk),e(ma,rk),e(Ye,ak),e(Ye,nt),w(ua,nt,null),e(nt,ik),e(nt,qo),e(qo,lk),e(qo,wd),e(wd,dk),e(qo,ck),e(qo,lp),e(lp,pk),e(qo,hk),e(nt,mk),w(Nn,nt,null),e(nt,fk),w(Dn,nt,null),e(nt,uk),w(Sn,nt,null),b(o,Tf,k),b(o,jo,k),e(jo,Bn),e(Bn,dp),w(ga,dp,null),e(jo,gk),e(jo,cp),e(cp,_k),b(o,vf,k),b(o,Ze,k),w(_a,Ze,null),e(Ze,bk),e(Ze,pp),e(pp,kk),e(Ze,Tk),e(Ze,ba),e(ba,vk),e(ba,$d),e($d,yk),e(ba,wk),e(Ze,$k),e(Ze,ka),e(ka,Ak),e(ka,Ta),e(Ta,Fk),e(ka,xk),e(Ze,Ek),e(Ze,Be),w(va,Be,null),e(Be,Mk),e(Be,Po),e(Po,zk),e(Po,Ad),e(Ad,qk),e(Po,jk),e(Po,hp),e(hp,Pk),e(Po,Ck),e(Be,Lk),w(Wn,Be,null),e(Be,Ik),w(Un,Be,null),e(Be,Ok),w(Rn,Be,null),e(Be,Nk),w(Hn,Be,null),e(Be,Dk),w(Qn,Be,null),b(o,yf,k),b(o,Co,k),e(Co,Vn),e(Vn,mp),w(ya,mp,null),e(Co,Sk),e(Co,fp),e(fp,Bk),b(o,wf,k),b(o,et,k),w(wa,et,null),e(et,Wk),e(et,up),e(up,Uk),e(et,Rk),e(et,$a),e($a,Hk),e($a,Fd),e(Fd,Qk),e($a,Vk),e(et,Kk),e(et,Aa),e(Aa,Jk),e(Aa,Fa),e(Fa,Gk),e(Aa,Xk),e(et,Yk),e(et,$t),w(xa,$t,null),e($t,Zk),e($t,Lo),e(Lo,eT),e(Lo,xd),e(xd,tT),e(Lo,oT),e(Lo,gp),e(gp,nT),e(Lo,sT),e($t,rT),w(Kn,$t,null),e($t,aT),w(Jn,$t,null),b(o,$f,k),b(o,Io,k),e(Io,Gn),e(Gn,_p),w(Ea,_p,null),e(Io,iT),e(Io,bp),e(bp,lT),b(o,Af,k),b(o,tt,k),w(Ma,tt,null),e(tt,dT),e(tt,kp),e(kp,cT),e(tt,pT),e(tt,za),e(za,hT),e(za,Ed),e(Ed,mT),e(za,fT),e(tt,uT),e(tt,qa),e(qa,gT),e(qa,ja),e(ja,_T),e(qa,bT),e(tt,kT),e(tt,st),w(Pa,st,null),e(st,TT),e(st,Oo),e(Oo,vT),e(Oo,Md),e(Md,yT),e(Oo,wT),e(Oo,Tp),e(Tp,$T),e(Oo,AT),e(st,FT),w(Xn,st,null),e(st,xT),w(Yn,st,null),e(st,ET),w(Zn,st,null),b(o,Ff,k),b(o,No,k),e(No,es),e(es,vp),w(Ca,vp,null),e(No,MT),e(No,yp),e(yp,zT),b(o,xf,k),b(o,ot,k),w(La,ot,null),e(ot,qT),e(ot,Do),e(Do,jT),e(Do,wp),e(wp,PT),e(Do,CT),e(Do,$p),e($p,LT),e(Do,IT),e(ot,OT),e(ot,Ia),e(Ia,NT),e(Ia,zd),e(zd,DT),e(Ia,ST),e(ot,BT),e(ot,Oa),e(Oa,WT),e(Oa,Na),e(Na,UT),e(Oa,RT),e(ot,HT),e(ot,rt),w(Da,rt,null),e(rt,QT),e(rt,So),e(So,VT),e(So,qd),e(qd,KT),e(So,JT),e(So,Ap),e(Ap,GT),e(So,XT),e(rt,YT),w(ts,rt,null),e(rt,ZT),w(os,rt,null),e(rt,ev),w(ns,rt,null),b(o,Ef,k),b(o,Bo,k),e(Bo,ss),e(ss,Fp),w(Sa,Fp,null),e(Bo,tv),e(Bo,xp),e(xp,ov),b(o,Mf,k),b(o,We,k),w(Ba,We,null),e(We,nv),e(We,Ep),e(Ep,sv),e(We,rv),e(We,Wa),e(Wa,av),e(Wa,jd),e(jd,iv),e(Wa,lv),e(We,dv),e(We,Ua),e(Ua,cv),e(Ua,Ra),e(Ra,pv),e(Ua,hv),e(We,mv),w(rs,We,null),e(We,fv),e(We,At),w(Ha,At,null),e(At,uv),e(At,Wo),e(Wo,gv),e(Wo,Pd),e(Pd,_v),e(Wo,bv),e(Wo,Mp),e(Mp,kv),e(Wo,Tv),e(At,vv),w(as,At,null),e(At,yv),w(is,At,null),b(o,zf,k),b(o,Uo,k),e(Uo,ls),e(ls,zp),w(Qa,zp,null),e(Uo,wv),e(Uo,qp),e(qp,$v),b(o,qf,k),b(o,Ue,k),w(Va,Ue,null),e(Ue,Av),e(Ue,Ro),e(Ro,Fv),e(Ro,jp),e(jp,xv),e(Ro,Ev),e(Ro,Pp),e(Pp,Mv),e(Ro,zv),e(Ue,qv),e(Ue,Ka),e(Ka,jv),e(Ka,Cd),e(Cd,Pv),e(Ka,Cv),e(Ue,Lv),e(Ue,Ja),e(Ja,Iv),e(Ja,Ga),e(Ga,Ov),e(Ja,Nv),e(Ue,Dv),w(ds,Ue,null),e(Ue,Sv),e(Ue,Ft),w(Xa,Ft,null),e(Ft,Bv),e(Ft,Ho),e(Ho,Wv),e(Ho,Ld),e(Ld,Uv),e(Ho,Rv),e(Ho,Cp),e(Cp,Hv),e(Ho,Qv),e(Ft,Vv),w(cs,Ft,null),e(Ft,Kv),w(ps,Ft,null),b(o,jf,k),b(o,Qo,k),e(Qo,hs),e(hs,Lp),w(Ya,Lp,null),e(Qo,Jv),e(Qo,Ip),e(Ip,Gv),b(o,Pf,k),b(o,Re,k),w(Za,Re,null),e(Re,Xv),e(Re,ei),e(ei,Yv),e(ei,Op),e(Op,Zv),e(ei,ey),e(Re,ty),e(Re,ti),e(ti,oy),e(ti,Id),e(Id,ny),e(ti,sy),e(Re,ry),e(Re,oi),e(oi,ay),e(oi,ni),e(ni,iy),e(oi,ly),e(Re,dy),w(ms,Re,null),e(Re,cy),e(Re,at),w(si,at,null),e(at,py),e(at,Vo),e(Vo,hy),e(Vo,Od),e(Od,my),e(Vo,fy),e(Vo,Np),e(Np,uy),e(Vo,gy),e(at,_y),w(fs,at,null),e(at,by),w(us,at,null),e(at,ky),w(gs,at,null),b(o,Cf,k),b(o,Ko,k),e(Ko,_s),e(_s,Dp),w(ri,Dp,null),e(Ko,Ty),e(Ko,Sp),e(Sp,vy),b(o,Lf,k),b(o,He,k),w(ai,He,null),e(He,yy),e(He,Bp),e(Bp,wy),e(He,$y),e(He,ii),e(ii,Ay),e(ii,Nd),e(Nd,Fy),e(ii,xy),e(He,Ey),e(He,li),e(li,My),e(li,di),e(di,zy),e(li,qy),e(He,jy),w(bs,He,null),e(He,Py),e(He,it),w(ci,it,null),e(it,Cy),e(it,Jo),e(Jo,Ly),e(Jo,Dd),e(Dd,Iy),e(Jo,Oy),e(Jo,Wp),e(Wp,Ny),e(Jo,Dy),e(it,Sy),w(ks,it,null),e(it,By),w(Ts,it,null),e(it,Wy),w(vs,it,null),b(o,If,k),b(o,Go,k),e(Go,ys),e(ys,Up),w(pi,Up,null),e(Go,Uy),e(Go,Rp),e(Rp,Ry),b(o,Of,k),b(o,Qe,k),w(hi,Qe,null),e(Qe,Hy),e(Qe,Hp),e(Hp,Qy),e(Qe,Vy),e(Qe,mi),e(mi,Ky),e(mi,Sd),e(Sd,Jy),e(mi,Gy),e(Qe,Xy),e(Qe,fi),e(fi,Yy),e(fi,ui),e(ui,Zy),e(fi,ew),e(Qe,tw),w(ws,Qe,null),e(Qe,ow),e(Qe,xt),w(gi,xt,null),e(xt,nw),e(xt,Xo),e(Xo,sw),e(Xo,Bd),e(Bd,rw),e(Xo,aw),e(Xo,Qp),e(Qp,iw),e(Xo,lw),e(xt,dw),w($s,xt,null),e(xt,cw),w(As,xt,null),b(o,Nf,k),b(o,Yo,k),e(Yo,Fs),e(Fs,Vp),w(_i,Vp,null),e(Yo,pw),e(Yo,Kp),e(Kp,hw),b(o,Df,k),b(o,Ve,k),w(bi,Ve,null),e(Ve,mw),e(Ve,Jp),e(Jp,fw),e(Ve,uw),e(Ve,ki),e(ki,gw),e(ki,Wd),e(Wd,_w),e(ki,bw),e(Ve,kw),e(Ve,Ti),e(Ti,Tw),e(Ti,vi),e(vi,vw),e(Ti,yw),e(Ve,ww),w(xs,Ve,null),e(Ve,$w),e(Ve,lt),w(yi,lt,null),e(lt,Aw),e(lt,Zo),e(Zo,Fw),e(Zo,Ud),e(Ud,xw),e(Zo,Ew),e(Zo,Gp),e(Gp,Mw),e(Zo,zw),e(lt,qw),w(Es,lt,null),e(lt,jw),w(Ms,lt,null),e(lt,Pw),w(zs,lt,null),b(o,Sf,k),b(o,en,k),e(en,qs),e(qs,Xp),w(wi,Xp,null),e(en,Cw),e(en,Yp),e(Yp,Lw),b(o,Bf,k),b(o,Ke,k),w($i,Ke,null),e(Ke,Iw),e(Ke,tn),e(tn,Ow),e(tn,Zp),e(Zp,Nw),e(tn,Dw),e(tn,eh),e(eh,Sw),e(tn,Bw),e(Ke,Ww),e(Ke,Ai),e(Ai,Uw),e(Ai,Rd),e(Rd,Rw),e(Ai,Hw),e(Ke,Qw),e(Ke,Fi),e(Fi,Vw),e(Fi,xi),e(xi,Kw),e(Fi,Jw),e(Ke,Gw),w(js,Ke,null),e(Ke,Xw),e(Ke,dt),w(Ei,dt,null),e(dt,Yw),e(dt,on),e(on,Zw),e(on,Hd),e(Hd,e$),e(on,t$),e(on,th),e(th,o$),e(on,n$),e(dt,s$),w(Ps,dt,null),e(dt,r$),w(Cs,dt,null),e(dt,a$),w(Ls,dt,null),b(o,Wf,k),b(o,nn,k),e(nn,Is),e(Is,oh),w(Mi,oh,null),e(nn,i$),e(nn,nh),e(nh,l$),b(o,Uf,k),b(o,Ce,k),w(zi,Ce,null),e(Ce,d$),e(Ce,sh),e(sh,c$),e(Ce,p$),e(Ce,qi),e(qi,h$),e(qi,Qd),e(Qd,m$),e(qi,f$),e(Ce,u$),e(Ce,ji),e(ji,g$),e(ji,Pi),e(Pi,_$),e(ji,b$),e(Ce,k$),e(Ce,rh),e(rh,T$),e(Ce,v$),e(Ce,Rt),e(Rt,ah),e(ah,Ci),e(Ci,y$),e(Rt,w$),e(Rt,ih),e(ih,Li),e(Li,$$),e(Rt,A$),e(Rt,lh),e(lh,Ii),e(Ii,F$),e(Rt,x$),e(Rt,dh),e(dh,Oi),e(Oi,E$),e(Ce,M$),e(Ce,Et),w(Ni,Et,null),e(Et,z$),e(Et,sn),e(sn,q$),e(sn,ch),e(ch,j$),e(sn,P$),e(sn,ph),e(ph,C$),e(sn,L$),e(Et,I$),w(Os,Et,null),e(Et,O$),w(Ns,Et,null),b(o,Rf,k),b(o,rn,k),e(rn,Ds),e(Ds,hh),w(Di,hh,null),e(rn,N$),e(rn,mh),e(mh,D$),b(o,Hf,k),b(o,Le,k),w(Si,Le,null),e(Le,S$),e(Le,an),e(an,B$),e(an,fh),e(fh,W$),e(an,U$),e(an,uh),e(uh,R$),e(an,H$),e(Le,Q$),e(Le,Bi),e(Bi,V$),e(Bi,Vd),e(Vd,K$),e(Bi,J$),e(Le,G$),e(Le,Wi),e(Wi,X$),e(Wi,Ui),e(Ui,Y$),e(Wi,Z$),e(Le,e1),e(Le,gh),e(gh,t1),e(Le,o1),e(Le,Ht),e(Ht,_h),e(_h,Ri),e(Ri,n1),e(Ht,s1),e(Ht,bh),e(bh,Hi),e(Hi,r1),e(Ht,a1),e(Ht,kh),e(kh,Qi),e(Qi,i1),e(Ht,l1),e(Ht,Th),e(Th,Vi),e(Vi,d1),e(Le,c1),e(Le,Mt),w(Ki,Mt,null),e(Mt,p1),e(Mt,ln),e(ln,h1),e(ln,vh),e(vh,m1),e(ln,f1),e(ln,yh),e(yh,u1),e(ln,g1),e(Mt,_1),w(Ss,Mt,null),e(Mt,b1),w(Bs,Mt,null),b(o,Qf,k),b(o,dn,k),e(dn,Ws),e(Ws,wh),w(Ji,wh,null),e(dn,k1),e(dn,$h),e($h,T1),b(o,Vf,k),b(o,Ie,k),w(Gi,Ie,null),e(Ie,v1),e(Ie,Xi),e(Xi,y1),e(Xi,Ah),e(Ah,w1),e(Xi,$1),e(Ie,A1),e(Ie,Yi),e(Yi,F1),e(Yi,Kd),e(Kd,x1),e(Yi,E1),e(Ie,M1),e(Ie,Zi),e(Zi,z1),e(Zi,el),e(el,q1),e(Zi,j1),e(Ie,P1),e(Ie,Fh),e(Fh,C1),e(Ie,L1),e(Ie,Qt),e(Qt,xh),e(xh,tl),e(tl,I1),e(Qt,O1),e(Qt,Eh),e(Eh,ol),e(ol,N1),e(Qt,D1),e(Qt,Mh),e(Mh,nl),e(nl,S1),e(Qt,B1),e(Qt,zh),e(zh,sl),e(sl,W1),e(Ie,U1),e(Ie,zt),w(rl,zt,null),e(zt,R1),e(zt,cn),e(cn,H1),e(cn,qh),e(qh,Q1),e(cn,V1),e(cn,jh),e(jh,K1),e(cn,J1),e(zt,G1),w(Us,zt,null),e(zt,X1),w(Rs,zt,null),b(o,Kf,k),b(o,pn,k),e(pn,Hs),e(Hs,Ph),w(al,Ph,null),e(pn,Y1),e(pn,Ch),e(Ch,Z1),b(o,Jf,k),b(o,Oe,k),w(il,Oe,null),e(Oe,e2),e(Oe,Lh),e(Lh,t2),e(Oe,o2),e(Oe,ll),e(ll,n2),e(ll,Jd),e(Jd,s2),e(ll,r2),e(Oe,a2),e(Oe,dl),e(dl,i2),e(dl,cl),e(cl,l2),e(dl,d2),e(Oe,c2),e(Oe,Ih),e(Ih,p2),e(Oe,h2),e(Oe,Vt),e(Vt,Oh),e(Oh,pl),e(pl,m2),e(Vt,f2),e(Vt,Nh),e(Nh,hl),e(hl,u2),e(Vt,g2),e(Vt,Dh),e(Dh,ml),e(ml,_2),e(Vt,b2),e(Vt,Sh),e(Sh,fl),e(fl,k2),e(Oe,T2),e(Oe,qt),w(ul,qt,null),e(qt,v2),e(qt,hn),e(hn,y2),e(hn,Bh),e(Bh,w2),e(hn,$2),e(hn,Wh),e(Wh,A2),e(hn,F2),e(qt,x2),w(Qs,qt,null),e(qt,E2),w(Vs,qt,null),b(o,Gf,k),b(o,mn,k),e(mn,Ks),e(Ks,Uh),w(gl,Uh,null),e(mn,M2),e(mn,Rh),e(Rh,z2),b(o,Xf,k),b(o,Ne,k),w(_l,Ne,null),e(Ne,q2),e(Ne,Hh),e(Hh,j2),e(Ne,P2),e(Ne,bl),e(bl,C2),e(bl,Gd),e(Gd,L2),e(bl,I2),e(Ne,O2),e(Ne,kl),e(kl,N2),e(kl,Tl),e(Tl,D2),e(kl,S2),e(Ne,B2),e(Ne,Qh),e(Qh,W2),e(Ne,U2),e(Ne,Kt),e(Kt,Vh),e(Vh,vl),e(vl,R2),e(Kt,H2),e(Kt,Kh),e(Kh,yl),e(yl,Q2),e(Kt,V2),e(Kt,Jh),e(Jh,wl),e(wl,K2),e(Kt,J2),e(Kt,Gh),e(Gh,$l),e($l,G2),e(Ne,X2),e(Ne,jt),w(Al,jt,null),e(jt,Y2),e(jt,fn),e(fn,Z2),e(fn,Xh),e(Xh,eA),e(fn,tA),e(fn,Yh),e(Yh,oA),e(fn,nA),e(jt,sA),w(Js,jt,null),e(jt,rA),w(Gs,jt,null),b(o,Yf,k),b(o,un,k),e(un,Xs),e(Xs,Zh),w(Fl,Zh,null),e(un,aA),e(un,em),e(em,iA),b(o,Zf,k),b(o,De,k),w(xl,De,null),e(De,lA),e(De,tm),e(tm,dA),e(De,cA),e(De,El),e(El,pA),e(El,Xd),e(Xd,hA),e(El,mA),e(De,fA),e(De,Ml),e(Ml,uA),e(Ml,zl),e(zl,gA),e(Ml,_A),e(De,bA),e(De,om),e(om,kA),e(De,TA),e(De,Jt),e(Jt,nm),e(nm,ql),e(ql,vA),e(Jt,yA),e(Jt,sm),e(sm,jl),e(jl,wA),e(Jt,$A),e(Jt,rm),e(rm,Pl),e(Pl,AA),e(Jt,FA),e(Jt,am),e(am,Cl),e(Cl,xA),e(De,EA),e(De,Pt),w(Ll,Pt,null),e(Pt,MA),e(Pt,gn),e(gn,zA),e(gn,im),e(im,qA),e(gn,jA),e(gn,lm),e(lm,PA),e(gn,CA),e(Pt,LA),w(Ys,Pt,null),e(Pt,IA),w(Zs,Pt,null),b(o,eu,k),b(o,_n,k),e(_n,er),e(er,dm),w(Il,dm,null),e(_n,OA),e(_n,cm),e(cm,NA),b(o,tu,k),b(o,Se,k),w(Ol,Se,null),e(Se,DA),e(Se,bn),e(bn,SA),e(bn,pm),e(pm,BA),e(bn,WA),e(bn,hm),e(hm,UA),e(bn,RA),e(Se,HA),e(Se,Nl),e(Nl,QA),e(Nl,Yd),e(Yd,VA),e(Nl,KA),e(Se,JA),e(Se,Dl),e(Dl,GA),e(Dl,Sl),e(Sl,XA),e(Dl,YA),e(Se,ZA),e(Se,mm),e(mm,eF),e(Se,tF),e(Se,Gt),e(Gt,fm),e(fm,Bl),e(Bl,oF),e(Gt,nF),e(Gt,um),e(um,Wl),e(Wl,sF),e(Gt,rF),e(Gt,gm),e(gm,Ul),e(Ul,aF),e(Gt,iF),e(Gt,_m),e(_m,Rl),e(Rl,lF),e(Se,dF),e(Se,Ct),w(Hl,Ct,null),e(Ct,cF),e(Ct,kn),e(kn,pF),e(kn,bm),e(bm,hF),e(kn,mF),e(kn,km),e(km,fF),e(kn,uF),e(Ct,gF),w(tr,Ct,null),e(Ct,_F),w(or,Ct,null),ou=!0},p(o,[k]){const Ql={};k&2&&(Ql.$$scope={dirty:k,ctx:o}),$n.$set(Ql);const Tm={};k&2&&(Tm.$$scope={dirty:k,ctx:o}),xn.$set(Tm);const vm={};k&2&&(vm.$$scope={dirty:k,ctx:o}),Mn.$set(vm);const ym={};k&2&&(ym.$$scope={dirty:k,ctx:o}),jn.$set(ym);const Vl={};k&2&&(Vl.$$scope={dirty:k,ctx:o}),Pn.$set(Vl);const wm={};k&2&&(wm.$$scope={dirty:k,ctx:o}),Ln.$set(wm);const $m={};k&2&&($m.$$scope={dirty:k,ctx:o}),In.$set($m);const Am={};k&2&&(Am.$$scope={dirty:k,ctx:o}),Nn.$set(Am);const Kl={};k&2&&(Kl.$$scope={dirty:k,ctx:o}),Dn.$set(Kl);const Fm={};k&2&&(Fm.$$scope={dirty:k,ctx:o}),Sn.$set(Fm);const Jl={};k&2&&(Jl.$$scope={dirty:k,ctx:o}),Wn.$set(Jl);const xm={};k&2&&(xm.$$scope={dirty:k,ctx:o}),Un.$set(xm);const Em={};k&2&&(Em.$$scope={dirty:k,ctx:o}),Rn.$set(Em);const Mm={};k&2&&(Mm.$$scope={dirty:k,ctx:o}),Hn.$set(Mm);const zm={};k&2&&(zm.$$scope={dirty:k,ctx:o}),Qn.$set(zm);const qm={};k&2&&(qm.$$scope={dirty:k,ctx:o}),Kn.$set(qm);const jm={};k&2&&(jm.$$scope={dirty:k,ctx:o}),Jn.$set(jm);const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:o}),Xn.$set(Gl);const Pm={};k&2&&(Pm.$$scope={dirty:k,ctx:o}),Yn.$set(Pm);const Cm={};k&2&&(Cm.$$scope={dirty:k,ctx:o}),Zn.$set(Cm);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:o}),ts.$set(Xt);const Lm={};k&2&&(Lm.$$scope={dirty:k,ctx:o}),os.$set(Lm);const Im={};k&2&&(Im.$$scope={dirty:k,ctx:o}),ns.$set(Im);const Om={};k&2&&(Om.$$scope={dirty:k,ctx:o}),rs.$set(Om);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:o}),as.$set(Xl);const Nm={};k&2&&(Nm.$$scope={dirty:k,ctx:o}),is.$set(Nm);const Dm={};k&2&&(Dm.$$scope={dirty:k,ctx:o}),ds.$set(Dm);const Sm={};k&2&&(Sm.$$scope={dirty:k,ctx:o}),cs.$set(Sm);const Yt={};k&2&&(Yt.$$scope={dirty:k,ctx:o}),ps.$set(Yt);const Zt={};k&2&&(Zt.$$scope={dirty:k,ctx:o}),ms.$set(Zt);const Bm={};k&2&&(Bm.$$scope={dirty:k,ctx:o}),fs.$set(Bm);const Wm={};k&2&&(Wm.$$scope={dirty:k,ctx:o}),us.$set(Wm);const Um={};k&2&&(Um.$$scope={dirty:k,ctx:o}),gs.$set(Um);const Tn={};k&2&&(Tn.$$scope={dirty:k,ctx:o}),bs.$set(Tn);const Rm={};k&2&&(Rm.$$scope={dirty:k,ctx:o}),ks.$set(Rm);const Hm={};k&2&&(Hm.$$scope={dirty:k,ctx:o}),Ts.$set(Hm);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:o}),vs.$set(Yl);const Qm={};k&2&&(Qm.$$scope={dirty:k,ctx:o}),ws.$set(Qm);const Vm={};k&2&&(Vm.$$scope={dirty:k,ctx:o}),$s.$set(Vm);const Km={};k&2&&(Km.$$scope={dirty:k,ctx:o}),As.$set(Km);const Je={};k&2&&(Je.$$scope={dirty:k,ctx:o}),xs.$set(Je);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:o}),Es.$set(Zl);const Jm={};k&2&&(Jm.$$scope={dirty:k,ctx:o}),Ms.$set(Jm);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:o}),zs.$set(ed);const Gm={};k&2&&(Gm.$$scope={dirty:k,ctx:o}),js.$set(Gm);const vn={};k&2&&(vn.$$scope={dirty:k,ctx:o}),Ps.$set(vn);const Xm={};k&2&&(Xm.$$scope={dirty:k,ctx:o}),Cs.$set(Xm);const td={};k&2&&(td.$$scope={dirty:k,ctx:o}),Ls.$set(td);const Zd={};k&2&&(Zd.$$scope={dirty:k,ctx:o}),Os.$set(Zd);const Ym={};k&2&&(Ym.$$scope={dirty:k,ctx:o}),Ns.$set(Ym);const ec={};k&2&&(ec.$$scope={dirty:k,ctx:o}),Ss.$set(ec);const Zm={};k&2&&(Zm.$$scope={dirty:k,ctx:o}),Bs.$set(Zm);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),Us.$set(od);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),Rs.$set(nd);const ef={};k&2&&(ef.$$scope={dirty:k,ctx:o}),Qs.$set(ef);const eo={};k&2&&(eo.$$scope={dirty:k,ctx:o}),Vs.$set(eo);const tf={};k&2&&(tf.$$scope={dirty:k,ctx:o}),Js.$set(tf);const yn={};k&2&&(yn.$$scope={dirty:k,ctx:o}),Gs.$set(yn);const of={};k&2&&(of.$$scope={dirty:k,ctx:o}),Ys.$set(of);const nf={};k&2&&(nf.$$scope={dirty:k,ctx:o}),Zs.$set(nf);const sf={};k&2&&(sf.$$scope={dirty:k,ctx:o}),tr.$set(sf);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),or.$set(sd)},i(o){ou||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$($n.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Cr.$$.fragment,o),$(Ir.$$.fragment,o),$(Nr.$$.fragment,o),$(xn.$$.fragment,o),$(Dr.$$.fragment,o),$(Sr.$$.fragment,o),$(Br.$$.fragment,o),$(Ur.$$.fragment,o),$(Hr.$$.fragment,o),$(Mn.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Jr.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(oa.$$.fragment,o),$(jn.$$.fragment,o),$(Pn.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(la.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(Nn.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(va.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(Rn.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(xa.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ma.$$.fragment,o),$(Pa.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Ca.$$.fragment,o),$(La.$$.fragment,o),$(Da.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Sa.$$.fragment,o),$(Ba.$$.fragment,o),$(rs.$$.fragment,o),$(Ha.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(Qa.$$.fragment,o),$(Va.$$.fragment,o),$(ds.$$.fragment,o),$(Xa.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ri.$$.fragment,o),$(ai.$$.fragment,o),$(bs.$$.fragment,o),$(ci.$$.fragment,o),$(ks.$$.fragment,o),$(Ts.$$.fragment,o),$(vs.$$.fragment,o),$(pi.$$.fragment,o),$(hi.$$.fragment,o),$(ws.$$.fragment,o),$(gi.$$.fragment,o),$($s.$$.fragment,o),$(As.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(xs.$$.fragment,o),$(yi.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(js.$$.fragment,o),$(Ei.$$.fragment,o),$(Ps.$$.fragment,o),$(Cs.$$.fragment,o),$(Ls.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Ni.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Di.$$.fragment,o),$(Si.$$.fragment,o),$(Ki.$$.fragment,o),$(Ss.$$.fragment,o),$(Bs.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(rl.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(ul.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Al.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Fl.$$.fragment,o),$(xl.$$.fragment,o),$(Ll.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(Il.$$.fragment,o),$(Ol.$$.fragment,o),$(Hl.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),ou=!0)},o(o){A(l.$$.fragment,o),A(ee.$$.fragment,o),A(Fr.$$.fragment,o),A(xr.$$.fragment,o),A($n.$$.fragment,o),A(Mr.$$.fragment,o),A(zr.$$.fragment,o),A(Cr.$$.fragment,o),A(Ir.$$.fragment,o),A(Nr.$$.fragment,o),A(xn.$$.fragment,o),A(Dr.$$.fragment,o),A(Sr.$$.fragment,o),A(Br.$$.fragment,o),A(Ur.$$.fragment,o),A(Hr.$$.fragment,o),A(Mn.$$.fragment,o),A(Qr.$$.fragment,o),A(Vr.$$.fragment,o),A(Jr.$$.fragment,o),A(Xr.$$.fragment,o),A(Yr.$$.fragment,o),A(oa.$$.fragment,o),A(jn.$$.fragment,o),A(Pn.$$.fragment,o),A(na.$$.fragment,o),A(sa.$$.fragment,o),A(la.$$.fragment,o),A(Ln.$$.fragment,o),A(In.$$.fragment,o),A(da.$$.fragment,o),A(ca.$$.fragment,o),A(ua.$$.fragment,o),A(Nn.$$.fragment,o),A(Dn.$$.fragment,o),A(Sn.$$.fragment,o),A(ga.$$.fragment,o),A(_a.$$.fragment,o),A(va.$$.fragment,o),A(Wn.$$.fragment,o),A(Un.$$.fragment,o),A(Rn.$$.fragment,o),A(Hn.$$.fragment,o),A(Qn.$$.fragment,o),A(ya.$$.fragment,o),A(wa.$$.fragment,o),A(xa.$$.fragment,o),A(Kn.$$.fragment,o),A(Jn.$$.fragment,o),A(Ea.$$.fragment,o),A(Ma.$$.fragment,o),A(Pa.$$.fragment,o),A(Xn.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(Ca.$$.fragment,o),A(La.$$.fragment,o),A(Da.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(Sa.$$.fragment,o),A(Ba.$$.fragment,o),A(rs.$$.fragment,o),A(Ha.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(Qa.$$.fragment,o),A(Va.$$.fragment,o),A(ds.$$.fragment,o),A(Xa.$$.fragment,o),A(cs.$$.fragment,o),A(ps.$$.fragment,o),A(Ya.$$.fragment,o),A(Za.$$.fragment,o),A(ms.$$.fragment,o),A(si.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(ri.$$.fragment,o),A(ai.$$.fragment,o),A(bs.$$.fragment,o),A(ci.$$.fragment,o),A(ks.$$.fragment,o),A(Ts.$$.fragment,o),A(vs.$$.fragment,o),A(pi.$$.fragment,o),A(hi.$$.fragment,o),A(ws.$$.fragment,o),A(gi.$$.fragment,o),A($s.$$.fragment,o),A(As.$$.fragment,o),A(_i.$$.fragment,o),A(bi.$$.fragment,o),A(xs.$$.fragment,o),A(yi.$$.fragment,o),A(Es.$$.fragment,o),A(Ms.$$.fragment,o),A(zs.$$.fragment,o),A(wi.$$.fragment,o),A($i.$$.fragment,o),A(js.$$.fragment,o),A(Ei.$$.fragment,o),A(Ps.$$.fragment,o),A(Cs.$$.fragment,o),A(Ls.$$.fragment,o),A(Mi.$$.fragment,o),A(zi.$$.fragment,o),A(Ni.$$.fragment,o),A(Os.$$.fragment,o),A(Ns.$$.fragment,o),A(Di.$$.fragment,o),A(Si.$$.fragment,o),A(Ki.$$.fragment,o),A(Ss.$$.fragment,o),A(Bs.$$.fragment,o),A(Ji.$$.fragment,o),A(Gi.$$.fragment,o),A(rl.$$.fragment,o),A(Us.$$.fragment,o),A(Rs.$$.fragment,o),A(al.$$.fragment,o),A(il.$$.fragment,o),A(ul.$$.fragment,o),A(Qs.$$.fragment,o),A(Vs.$$.fragment,o),A(gl.$$.fragment,o),A(_l.$$.fragment,o),A(Al.$$.fragment,o),A(Js.$$.fragment,o),A(Gs.$$.fragment,o),A(Fl.$$.fragment,o),A(xl.$$.fragment,o),A(Ll.$$.fragment,o),A(Ys.$$.fragment,o),A(Zs.$$.fragment,o),A(Il.$$.fragment,o),A(Ol.$$.fragment,o),A(Hl.$$.fragment,o),A(tr.$$.fragment,o),A(or.$$.fragment,o),ou=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(G),o&&t(z),F(ee),o&&t(de),o&&t(K),o&&t(P),o&&t(Z),o&&t(ce),o&&t(j),o&&t(Q),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(he),o&&t(D),o&&t(Ae),o&&t(C),o&&t(me),o&&t(ve),F(Fr),o&&t(rf),o&&t(bt),F(xr),F($n),o&&t(af),o&&t(ko),F(Mr),o&&t(lf),o&&t(Pe),F(zr),F(Cr),F(Ir),F(Nr),F(xn),F(Dr),o&&t(df),o&&t(vo),F(Sr),o&&t(cf),o&&t(kt),F(Br),F(Ur),F(Hr),F(Mn),o&&t(pf),o&&t(yo),F(Qr),o&&t(hf),o&&t(wo),F(Vr),o&&t(mf),o&&t($o),F(Jr),o&&t(ff),o&&t(Ao),F(Xr),o&&t(uf),o&&t(Ge),F(Yr),F(oa),F(jn),F(Pn),o&&t(gf),o&&t(xo),F(na),o&&t(_f),o&&t(Xe),F(sa),F(la),F(Ln),F(In),o&&t(bf),o&&t(zo),F(da),o&&t(kf),o&&t(Ye),F(ca),F(ua),F(Nn),F(Dn),F(Sn),o&&t(Tf),o&&t(jo),F(ga),o&&t(vf),o&&t(Ze),F(_a),F(va),F(Wn),F(Un),F(Rn),F(Hn),F(Qn),o&&t(yf),o&&t(Co),F(ya),o&&t(wf),o&&t(et),F(wa),F(xa),F(Kn),F(Jn),o&&t($f),o&&t(Io),F(Ea),o&&t(Af),o&&t(tt),F(Ma),F(Pa),F(Xn),F(Yn),F(Zn),o&&t(Ff),o&&t(No),F(Ca),o&&t(xf),o&&t(ot),F(La),F(Da),F(ts),F(os),F(ns),o&&t(Ef),o&&t(Bo),F(Sa),o&&t(Mf),o&&t(We),F(Ba),F(rs),F(Ha),F(as),F(is),o&&t(zf),o&&t(Uo),F(Qa),o&&t(qf),o&&t(Ue),F(Va),F(ds),F(Xa),F(cs),F(ps),o&&t(jf),o&&t(Qo),F(Ya),o&&t(Pf),o&&t(Re),F(Za),F(ms),F(si),F(fs),F(us),F(gs),o&&t(Cf),o&&t(Ko),F(ri),o&&t(Lf),o&&t(He),F(ai),F(bs),F(ci),F(ks),F(Ts),F(vs),o&&t(If),o&&t(Go),F(pi),o&&t(Of),o&&t(Qe),F(hi),F(ws),F(gi),F($s),F(As),o&&t(Nf),o&&t(Yo),F(_i),o&&t(Df),o&&t(Ve),F(bi),F(xs),F(yi),F(Es),F(Ms),F(zs),o&&t(Sf),o&&t(en),F(wi),o&&t(Bf),o&&t(Ke),F($i),F(js),F(Ei),F(Ps),F(Cs),F(Ls),o&&t(Wf),o&&t(nn),F(Mi),o&&t(Uf),o&&t(Ce),F(zi),F(Ni),F(Os),F(Ns),o&&t(Rf),o&&t(rn),F(Di),o&&t(Hf),o&&t(Le),F(Si),F(Ki),F(Ss),F(Bs),o&&t(Qf),o&&t(dn),F(Ji),o&&t(Vf),o&&t(Ie),F(Gi),F(rl),F(Us),F(Rs),o&&t(Kf),o&&t(pn),F(al),o&&t(Jf),o&&t(Oe),F(il),F(ul),F(Qs),F(Vs),o&&t(Gf),o&&t(mn),F(gl),o&&t(Xf),o&&t(Ne),F(_l),F(Al),F(Js),F(Gs),o&&t(Yf),o&&t(un),F(Fl),o&&t(Zf),o&&t(De),F(xl),F(Ll),F(Ys),F(Zs),o&&t(eu),o&&t(_n),F(Il),o&&t(tu),o&&t(Se),F(Ol),F(Hl),F(tr),F(or)}}}const _4={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function b4(x){return iz(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class A4 extends nz{constructor(d){super();sz(this,d,b4,g4,rz,{})}}export{A4 as default,_4 as metadata};
