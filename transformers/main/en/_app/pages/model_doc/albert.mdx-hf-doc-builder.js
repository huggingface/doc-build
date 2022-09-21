import{S as nz,i as sz,s as rz,e as r,k as p,w as v,t as n,M as az,c as a,d as t,m as h,a as i,x as T,h as s,b as u,G as e,g as _,y as w,q as $,o as A,B as F,v as iz,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as We}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function lz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertConfig, AlbertModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function dz(x){let d,g,c,f,k;return f=new he({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function cz(x){let d,g,c,f,k;return f=new he({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function pz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function hz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function mz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function fz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function uz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function gz(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function _z(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function bz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function kz(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function yz(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function vz(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Tz(x){let d,g;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function $z(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Az(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Fz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function xz(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Ez(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Mz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function zz(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function jz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function qz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Pz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Cz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function Lz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Oz(x){let d,g,c,f,k;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Iz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function Nz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Dz(x){let d,g,c,f,k;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Sz(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Wz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function Uz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Bz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Rz(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Hz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function Qz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Kz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Vz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function Jz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Gz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Xz(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Yz(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ye=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(y),m=a(y,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ve=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(y),E=a(y,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(y),q=a(y,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ye=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(y),P=a(y,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(y,z){_(y,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,z),_(y,m,z),e(m,M),e(M,ve),e(m,ge),e(m,W),e(W,se),_(y,te,z),_(y,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(y,oe,z),_(y,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ye),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(y,ne,z),_(y,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(E),y&&t(oe),y&&t(q),y&&t(ne),y&&t(P)}}}function Zz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function e4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function t4(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function o4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function n4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function s4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function r4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function a4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function i4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function l4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function d4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function c4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function p4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function h4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function m4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function f4(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function u4(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function g4(x){let d,g,c,f,k,l,m,M,ve,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ye,O,Pe,R,Ce,ne,P,Le,I,ie,Oe,y,z,Ne,Z,He,De,j,Qe,Ve,Ke,de,Se,S,N,Je,Ue,Y,Ge,Be,Ie,Xe,ee,Ye,zg,jg,Oo,qg,kd,Pg,Cg,yd,Lg,Og,Ig,Wn,gf,Io,Un,Wc,Br,Ng,Uc,Dg,_f,Ze,Rr,Sg,Hr,Wg,Qr,Ug,Bg,Rg,Kr,Hg,vd,Qg,Kg,Vg,yo,Vr,Jg,Bc,Gg,Xg,Jr,Td,Yg,Rc,Zg,e_,wd,t_,Hc,o_,n_,Bn,Gr,s_,Xr,r_,Qc,a_,i_,l_,Dt,Yr,d_,Kc,c_,p_,Rn,h_,No,m_,Vc,f_,u_,Jc,g_,__,b_,$d,Zr,bf,Do,Hn,Gc,ea,k_,Xc,y_,kf,Nt,ta,v_,io,T_,Yc,w_,$_,oa,A_,F_,Ad,x_,E_,M_,vo,na,z_,Zc,j_,q_,sa,Fd,P_,ep,C_,L_,xd,O_,tp,I_,N_,St,ra,D_,op,S_,W_,Qn,U_,np,B_,yf,So,Kn,sp,aa,R_,rp,H_,vf,Wo,ia,Q_,la,K_,Ed,V_,J_,Tf,Uo,da,G_,ca,X_,Md,Y_,Z_,wf,Bo,Vn,ap,pa,eb,ip,tb,$f,gt,ha,ob,lp,nb,sb,ma,rb,zd,ab,ib,lb,fa,db,ua,cb,pb,hb,Wt,ga,mb,Ro,fb,jd,ub,gb,dp,_b,bb,kb,Jn,yb,Gn,Af,Ho,Xn,cp,_a,vb,pp,Tb,Ff,_t,ba,wb,Qo,$b,hp,Ab,Fb,mp,xb,Eb,Mb,ka,zb,qd,jb,qb,Pb,ya,Cb,va,Lb,Ob,Ib,Ut,Ta,Nb,Ko,Db,Pd,Sb,Wb,fp,Ub,Bb,Rb,Yn,Hb,Zn,xf,Vo,es,up,wa,Qb,gp,Kb,Ef,bt,$a,Vb,Aa,Jb,_p,Gb,Xb,Yb,Fa,Zb,Cd,ek,tk,ok,xa,nk,Ea,sk,rk,ak,wt,Ma,ik,Jo,lk,Ld,dk,ck,bp,pk,hk,mk,ts,fk,os,uk,ns,Mf,Go,ss,kp,za,gk,yp,_k,zf,kt,ja,bk,vp,kk,yk,qa,vk,Od,Tk,wk,$k,Pa,Ak,Ca,Fk,xk,Ek,it,La,Mk,Xo,zk,Id,jk,qk,Tp,Pk,Ck,Lk,rs,Ok,as,Ik,is,Nk,ls,Dk,ds,jf,Yo,cs,wp,Oa,Sk,$p,Wk,qf,yt,Ia,Uk,Ap,Bk,Rk,Na,Hk,Nd,Qk,Kk,Vk,Da,Jk,Sa,Gk,Xk,Yk,Bt,Wa,Zk,Zo,ey,Dd,ty,oy,Fp,ny,sy,ry,ps,ay,hs,Pf,en,ms,xp,Ua,iy,Ep,ly,Cf,vt,Ba,dy,Mp,cy,py,Ra,hy,Sd,my,fy,uy,Ha,gy,Qa,_y,by,ky,$t,Ka,yy,tn,vy,Wd,Ty,wy,zp,$y,Ay,Fy,fs,xy,us,Ey,gs,Lf,on,_s,jp,Va,My,qp,zy,Of,Tt,Ja,jy,nn,qy,Pp,Py,Cy,Cp,Ly,Oy,Iy,Ga,Ny,Ud,Dy,Sy,Wy,Xa,Uy,Ya,By,Ry,Hy,At,Za,Qy,sn,Ky,Bd,Vy,Jy,Lp,Gy,Xy,Yy,bs,Zy,ks,ev,ys,If,rn,vs,Op,ei,tv,Ip,ov,Nf,lt,ti,nv,Np,sv,rv,oi,av,Rd,iv,lv,dv,ni,cv,si,pv,hv,mv,Ts,fv,Rt,ri,uv,an,gv,Hd,_v,bv,Dp,kv,yv,vv,ws,Tv,$s,Df,ln,As,Sp,ai,wv,Wp,$v,Sf,dt,ii,Av,dn,Fv,Up,xv,Ev,Bp,Mv,zv,jv,li,qv,Qd,Pv,Cv,Lv,di,Ov,ci,Iv,Nv,Dv,Fs,Sv,Ht,pi,Wv,cn,Uv,Kd,Bv,Rv,Rp,Hv,Qv,Kv,xs,Vv,Es,Wf,pn,Ms,Hp,hi,Jv,Qp,Gv,Uf,ct,mi,Xv,fi,Yv,Kp,Zv,eT,tT,ui,oT,Vd,nT,sT,rT,gi,aT,_i,iT,lT,dT,zs,cT,Ft,bi,pT,hn,hT,Jd,mT,fT,Vp,uT,gT,_T,js,bT,qs,kT,Ps,Bf,mn,Cs,Jp,ki,yT,Gp,vT,Rf,pt,yi,TT,Xp,wT,$T,vi,AT,Gd,FT,xT,ET,Ti,MT,wi,zT,jT,qT,Ls,PT,xt,$i,CT,fn,LT,Xd,OT,IT,Yp,NT,DT,ST,Os,WT,Is,UT,Ns,Hf,un,Ds,Zp,Ai,BT,eh,RT,Qf,ht,Fi,HT,th,QT,KT,xi,VT,Yd,JT,GT,XT,Ei,YT,Mi,ZT,ew,tw,Ss,ow,Qt,zi,nw,gn,sw,Zd,rw,aw,oh,iw,lw,dw,Ws,cw,Us,Kf,_n,Bs,nh,ji,pw,sh,hw,Vf,mt,qi,mw,rh,fw,uw,Pi,gw,ec,_w,bw,kw,Ci,yw,Li,vw,Tw,ww,Rs,$w,Et,Oi,Aw,bn,Fw,tc,xw,Ew,ah,Mw,zw,jw,Hs,qw,Qs,Pw,Ks,Jf,kn,Vs,ih,Ii,Cw,lh,Lw,Gf,ft,Ni,Ow,yn,Iw,dh,Nw,Dw,ch,Sw,Ww,Uw,Di,Bw,oc,Rw,Hw,Qw,Si,Kw,Wi,Vw,Jw,Gw,Js,Xw,Mt,Ui,Yw,vn,Zw,nc,e$,t$,ph,o$,n$,s$,Gs,r$,Xs,a$,Ys,Xf,Tn,Zs,hh,Bi,i$,mh,l$,Yf,et,Ri,d$,fh,c$,p$,Hi,h$,sc,m$,f$,u$,Qi,g$,Ki,_$,b$,k$,uh,y$,v$,lo,gh,Vi,T$,w$,_h,Ji,$$,A$,bh,Gi,F$,x$,kh,Xi,E$,M$,Kt,Yi,z$,wn,j$,yh,q$,P$,vh,C$,L$,O$,er,I$,tr,Zf,$n,or,Th,Zi,N$,wh,D$,eu,tt,el,S$,An,W$,$h,U$,B$,Ah,R$,H$,Q$,tl,K$,rc,V$,J$,G$,ol,X$,nl,Y$,Z$,e1,Fh,t1,o1,co,xh,sl,n1,s1,Eh,rl,r1,a1,Mh,al,i1,l1,zh,il,d1,c1,Vt,ll,p1,Fn,h1,jh,m1,f1,qh,u1,g1,_1,nr,b1,sr,tu,xn,rr,Ph,dl,k1,Ch,y1,ou,ot,cl,v1,pl,T1,Lh,w1,$1,A1,hl,F1,ac,x1,E1,M1,ml,z1,fl,j1,q1,P1,Oh,C1,L1,po,Ih,ul,O1,I1,Nh,gl,N1,D1,Dh,_l,S1,W1,Sh,bl,U1,B1,Jt,kl,R1,En,H1,Wh,Q1,K1,Uh,V1,J1,G1,ar,X1,ir,nu,Mn,lr,Bh,yl,Y1,Rh,Z1,su,nt,vl,e2,Hh,t2,o2,Tl,n2,ic,s2,r2,a2,wl,i2,$l,l2,d2,c2,Qh,p2,h2,ho,Kh,Al,m2,f2,Vh,Fl,u2,g2,Jh,xl,_2,b2,Gh,El,k2,y2,Gt,Ml,v2,zn,T2,Xh,w2,$2,Yh,A2,F2,x2,dr,E2,cr,ru,jn,pr,Zh,zl,M2,em,z2,au,st,jl,j2,tm,q2,P2,ql,C2,lc,L2,O2,I2,Pl,N2,Cl,D2,S2,W2,om,U2,B2,mo,nm,Ll,R2,H2,sm,Ol,Q2,K2,rm,Il,V2,J2,am,Nl,G2,X2,Xt,Dl,Y2,qn,Z2,im,eA,tA,lm,oA,nA,sA,hr,rA,mr,iu,Pn,fr,dm,Sl,aA,cm,iA,lu,rt,Wl,lA,pm,dA,cA,Ul,pA,dc,hA,mA,fA,Bl,uA,Rl,gA,_A,bA,hm,kA,yA,fo,mm,Hl,vA,TA,fm,Ql,wA,$A,um,Kl,AA,FA,gm,Vl,xA,EA,Yt,Jl,MA,Cn,zA,_m,jA,qA,bm,PA,CA,LA,ur,OA,gr,du,Ln,_r,km,Gl,IA,ym,NA,cu,at,Xl,DA,On,SA,vm,WA,UA,Tm,BA,RA,HA,Yl,QA,cc,KA,VA,JA,Zl,GA,ed,XA,YA,ZA,wm,eF,tF,uo,$m,td,oF,nF,Am,od,sF,rF,Fm,nd,aF,iF,xm,sd,lF,dF,Zt,rd,cF,In,pF,Em,hF,mF,Mm,fF,uF,gF,br,_F,kr,pu;return l=new Re({}),E=new Re({}),De=new Re({}),Se=new D({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
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
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/configuration_albert.py#L36"}}),Wn=new ce({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[lz]},$$scope:{ctx:x}}}),Br=new Re({}),Rr=new D({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L59"}}),Vr=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gr=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yr=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[dz]},$$scope:{ctx:x}}}),Zr=new D({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert.py#L338"}}),ea=new Re({}),ta=new D({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),na=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ra=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new ce({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[cz]},$$scope:{ctx:x}}}),aa=new Re({}),ia=new D({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L531"}}),da=new D({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L655"}}),pa=new Re({}),ha=new D({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L634"}}),ga=new D({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L678",returnDescription:`
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
`}}),Jn=new We({props:{$$slots:{default:[pz]},$$scope:{ctx:x}}}),Gn=new ce({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[hz]},$$scope:{ctx:x}}}),_a=new Re({}),ba=new D({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L764"}}),Ta=new D({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L784",returnDescription:`
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
`}}),Yn=new We({props:{$$slots:{default:[mz]},$$scope:{ctx:x}}}),Zn=new ce({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[fz]},$$scope:{ctx:x}}}),wa=new Re({}),$a=new D({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L910"}}),Ma=new D({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L932",returnDescription:`
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
`}}),ts=new We({props:{$$slots:{default:[uz]},$$scope:{ctx:x}}}),os=new ce({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[gz]},$$scope:{ctx:x}}}),ns=new ce({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_z]},$$scope:{ctx:x}}}),za=new Re({}),ja=new D({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1025"}}),La=new D({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1038",returnDescription:`
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
`}}),rs=new We({props:{$$slots:{default:[bz]},$$scope:{ctx:x}}}),as=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[kz]},$$scope:{ctx:x}}}),is=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[yz]},$$scope:{ctx:x}}}),ls=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[vz]},$$scope:{ctx:x}}}),ds=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[Tz]},$$scope:{ctx:x}}}),Oa=new Re({}),Ia=new D({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1326"}}),Wa=new D({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1337",returnDescription:`
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
`}}),ps=new We({props:{$$slots:{default:[wz]},$$scope:{ctx:x}}}),hs=new ce({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$z]},$$scope:{ctx:x}}}),Ua=new Re({}),Ba=new D({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1127"}}),Ka=new D({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1147",returnDescription:`
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
`}}),fs=new We({props:{$$slots:{default:[Az]},$$scope:{ctx:x}}}),us=new ce({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[Fz]},$$scope:{ctx:x}}}),gs=new ce({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[xz]},$$scope:{ctx:x}}}),Va=new Re({}),Ja=new D({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1219"}}),Za=new D({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_albert.py#L1233",returnDescription:`
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
`}}),bs=new We({props:{$$slots:{default:[Ez]},$$scope:{ctx:x}}}),ks=new ce({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[Mz]},$$scope:{ctx:x}}}),ys=new ce({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[zz]},$$scope:{ctx:x}}}),ei=new Re({}),ti=new D({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L787"}}),Ts=new We({props:{$$slots:{default:[jz]},$$scope:{ctx:x}}}),ri=new D({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L793",returnDescription:`
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
`}}),ws=new We({props:{$$slots:{default:[qz]},$$scope:{ctx:x}}}),$s=new ce({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[Pz]},$$scope:{ctx:x}}}),ai=new Re({}),ii=new D({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L848"}}),Fs=new We({props:{$$slots:{default:[Cz]},$$scope:{ctx:x}}}),pi=new D({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L864",returnDescription:`
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
`}}),xs=new We({props:{$$slots:{default:[Lz]},$$scope:{ctx:x}}}),Es=new ce({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[Oz]},$$scope:{ctx:x}}}),hi=new Re({}),mi=new D({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L967"}}),zs=new We({props:{$$slots:{default:[Iz]},$$scope:{ctx:x}}}),bi=new D({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L980",returnDescription:`
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
`}}),js=new We({props:{$$slots:{default:[Nz]},$$scope:{ctx:x}}}),qs=new ce({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[Dz]},$$scope:{ctx:x}}}),Ps=new ce({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[Sz]},$$scope:{ctx:x}}}),ki=new Re({}),yi=new D({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1076"}}),Ls=new We({props:{$$slots:{default:[Wz]},$$scope:{ctx:x}}}),$i=new D({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1092",returnDescription:`
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
`}}),Os=new We({props:{$$slots:{default:[Uz]},$$scope:{ctx:x}}}),Is=new ce({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[Bz]},$$scope:{ctx:x}}}),Ns=new ce({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[Rz]},$$scope:{ctx:x}}}),Ai=new Re({}),Fi=new D({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1367"}}),Ss=new We({props:{$$slots:{default:[Hz]},$$scope:{ctx:x}}}),zi=new D({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1391",returnDescription:`
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
`}}),Ws=new We({props:{$$slots:{default:[Qz]},$$scope:{ctx:x}}}),Us=new ce({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[Kz]},$$scope:{ctx:x}}}),ji=new Re({}),qi=new D({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1166"}}),Rs=new We({props:{$$slots:{default:[Vz]},$$scope:{ctx:x}}}),Oi=new D({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1187",returnDescription:`
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
`}}),Hs=new We({props:{$$slots:{default:[Jz]},$$scope:{ctx:x}}}),Qs=new ce({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[Gz]},$$scope:{ctx:x}}}),Ks=new ce({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[Xz]},$$scope:{ctx:x}}}),Ii=new Re({}),Ni=new D({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1262"}}),Js=new We({props:{$$slots:{default:[Yz]},$$scope:{ctx:x}}}),Ui=new D({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_tf_albert.py#L1276",returnDescription:`
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
`}}),Gs=new We({props:{$$slots:{default:[Zz]},$$scope:{ctx:x}}}),Xs=new ce({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[e4]},$$scope:{ctx:x}}}),Ys=new ce({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[t4]},$$scope:{ctx:x}}}),Bi=new Re({}),Ri=new D({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Yi=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),er=new We({props:{$$slots:{default:[o4]},$$scope:{ctx:x}}}),tr=new ce({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[n4]},$$scope:{ctx:x}}}),Zi=new Re({}),el=new D({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),ll=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),nr=new We({props:{$$slots:{default:[s4]},$$scope:{ctx:x}}}),sr=new ce({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[r4]},$$scope:{ctx:x}}}),dl=new Re({}),cl=new D({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),kl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ar=new We({props:{$$slots:{default:[a4]},$$scope:{ctx:x}}}),ir=new ce({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[i4]},$$scope:{ctx:x}}}),yl=new Re({}),vl=new D({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),Ml=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),dr=new We({props:{$$slots:{default:[l4]},$$scope:{ctx:x}}}),cr=new ce({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[d4]},$$scope:{ctx:x}}}),zl=new Re({}),jl=new D({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Dl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),hr=new We({props:{$$slots:{default:[c4]},$$scope:{ctx:x}}}),mr=new ce({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[p4]},$$scope:{ctx:x}}}),Sl=new Re({}),Wl=new D({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Jl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ur=new We({props:{$$slots:{default:[h4]},$$scope:{ctx:x}}}),gr=new ce({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[m4]},$$scope:{ctx:x}}}),Gl=new Re({}),Xl=new D({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),rd=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),br=new We({props:{$$slots:{default:[f4]},$$scope:{ctx:x}}}),kr=new ce({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[u4]},$$scope:{ctx:x}}}),{c(){d=r("meta"),g=p(),c=r("h1"),f=r("a"),k=r("span"),v(l.$$.fragment),m=p(),M=r("span"),ve=n("ALBERT"),ge=p(),W=r("h2"),se=r("a"),te=r("span"),v(E.$$.fragment),Te=p(),Q=r("span"),we=n("Overview"),_e=p(),U=r("p"),$e=n("The ALBERT model was proposed in "),ae=r("a"),G=n("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Ae=n(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),be=p(),B=r("ul"),me=r("li"),Fe=n("Splitting the embedding matrix into two smaller matrices."),X=p(),fe=r("li"),xe=n("Using repeating layers split among groups."),oe=p(),q=r("p"),L=n("The abstract from the paper is the following:"),ke=p(),H=r("p"),ue=r("em"),Ee=n(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),J=p(),le=r("p"),Me=n("Tips:"),C=p(),re=r("ul"),K=r("li"),ze=n(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),je=p(),V=r("li"),qe=n(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),ye=p(),O=r("p"),Pe=n("This model was contributed by "),R=r("a"),Ce=n("lysandre"),ne=n(`. This model jax version was contributed by
`),P=r("a"),Le=n("kamalkraj"),I=n(". The original code can be found "),ie=r("a"),Oe=n("here"),y=n("."),z=p(),Ne=r("h2"),Z=r("a"),He=r("span"),v(De.$$.fragment),j=p(),Qe=r("span"),Ve=n("AlbertConfig"),Ke=p(),de=r("div"),v(Se.$$.fragment),S=p(),N=r("p"),Je=n("This is the configuration class to store the configuration of a "),Ue=r("a"),Y=n("AlbertModel"),Ge=n(" or a "),Be=r("a"),Ie=n("TFAlbertModel"),Xe=n(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),ee=r("a"),Ye=n("albert-xxlarge-v2"),zg=n(" architecture."),jg=p(),Oo=r("p"),qg=n("Configuration objects inherit from "),kd=r("a"),Pg=n("PretrainedConfig"),Cg=n(` and can be used to control the model outputs. Read the
documentation from `),yd=r("a"),Lg=n("PretrainedConfig"),Og=n(" for more information."),Ig=p(),v(Wn.$$.fragment),gf=p(),Io=r("h2"),Un=r("a"),Wc=r("span"),v(Br.$$.fragment),Ng=p(),Uc=r("span"),Dg=n("AlbertTokenizer"),_f=p(),Ze=r("div"),v(Rr.$$.fragment),Sg=p(),Hr=r("p"),Wg=n("Construct an ALBERT tokenizer. Based on "),Qr=r("a"),Ug=n("SentencePiece"),Bg=n("."),Rg=p(),Kr=r("p"),Hg=n("This tokenizer inherits from "),vd=r("a"),Qg=n("PreTrainedTokenizer"),Kg=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vg=p(),yo=r("div"),v(Vr.$$.fragment),Jg=p(),Bc=r("p"),Gg=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=p(),Jr=r("ul"),Td=r("li"),Yg=n("single sequence: "),Rc=r("code"),Zg=n("[CLS] X [SEP]"),e_=p(),wd=r("li"),t_=n("pair of sequences: "),Hc=r("code"),o_=n("[CLS] A [SEP] B [SEP]"),n_=p(),Bn=r("div"),v(Gr.$$.fragment),s_=p(),Xr=r("p"),r_=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qc=r("code"),a_=n("prepare_for_model"),i_=n(" method."),l_=p(),Dt=r("div"),v(Yr.$$.fragment),d_=p(),Kc=r("p"),c_=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),p_=p(),v(Rn.$$.fragment),h_=p(),No=r("p"),m_=n("If "),Vc=r("code"),f_=n("token_ids_1"),u_=n(" is "),Jc=r("code"),g_=n("None"),__=n(", this method only returns the first portion of the mask (0s)."),b_=p(),$d=r("div"),v(Zr.$$.fragment),bf=p(),Do=r("h2"),Hn=r("a"),Gc=r("span"),v(ea.$$.fragment),k_=p(),Xc=r("span"),y_=n("AlbertTokenizerFast"),kf=p(),Nt=r("div"),v(ta.$$.fragment),v_=p(),io=r("p"),T_=n("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Yc=r("em"),w_=n("tokenizers"),$_=n(` library). Based on
`),oa=r("a"),A_=n("Unigram"),F_=n(`. This
tokenizer inherits from `),Ad=r("a"),x_=n("PreTrainedTokenizerFast"),E_=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=p(),vo=r("div"),v(na.$$.fragment),z_=p(),Zc=r("p"),j_=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),q_=p(),sa=r("ul"),Fd=r("li"),P_=n("single sequence: "),ep=r("code"),C_=n("[CLS] X [SEP]"),L_=p(),xd=r("li"),O_=n("pair of sequences: "),tp=r("code"),I_=n("[CLS] A [SEP] B [SEP]"),N_=p(),St=r("div"),v(ra.$$.fragment),D_=p(),op=r("p"),S_=n("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),W_=p(),v(Qn.$$.fragment),U_=p(),np=r("p"),B_=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),yf=p(),So=r("h2"),Kn=r("a"),sp=r("span"),v(aa.$$.fragment),R_=p(),rp=r("span"),H_=n("Albert specific outputs"),vf=p(),Wo=r("div"),v(ia.$$.fragment),Q_=p(),la=r("p"),K_=n("Output type of "),Ed=r("a"),V_=n("AlbertForPreTraining"),J_=n("."),Tf=p(),Uo=r("div"),v(da.$$.fragment),G_=p(),ca=r("p"),X_=n("Output type of "),Md=r("a"),Y_=n("TFAlbertForPreTraining"),Z_=n("."),wf=p(),Bo=r("h2"),Vn=r("a"),ap=r("span"),v(pa.$$.fragment),eb=p(),ip=r("span"),tb=n("AlbertModel"),$f=p(),gt=r("div"),v(ha.$$.fragment),ob=p(),lp=r("p"),nb=n("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=p(),ma=r("p"),rb=n("This model inherits from "),zd=r("a"),ab=n("PreTrainedModel"),ib=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=p(),fa=r("p"),db=n("This model is also a PyTorch "),ua=r("a"),cb=n("torch.nn.Module"),pb=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=p(),Wt=r("div"),v(ga.$$.fragment),mb=p(),Ro=r("p"),fb=n("The "),jd=r("a"),ub=n("AlbertModel"),gb=n(" forward method, overrides the "),dp=r("code"),_b=n("__call__"),bb=n(" special method."),kb=p(),v(Jn.$$.fragment),yb=p(),v(Gn.$$.fragment),Af=p(),Ho=r("h2"),Xn=r("a"),cp=r("span"),v(_a.$$.fragment),vb=p(),pp=r("span"),Tb=n("AlbertForPreTraining"),Ff=p(),_t=r("div"),v(ba.$$.fragment),wb=p(),Qo=r("p"),$b=n("Albert Model with two heads on top as done during the pretraining: a "),hp=r("code"),Ab=n("masked language modeling"),Fb=n(` head and a
`),mp=r("code"),xb=n("sentence order prediction (classification)"),Eb=n(" head."),Mb=p(),ka=r("p"),zb=n("This model inherits from "),qd=r("a"),jb=n("PreTrainedModel"),qb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=p(),ya=r("p"),Cb=n("This model is also a PyTorch "),va=r("a"),Lb=n("torch.nn.Module"),Ob=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ib=p(),Ut=r("div"),v(Ta.$$.fragment),Nb=p(),Ko=r("p"),Db=n("The "),Pd=r("a"),Sb=n("AlbertForPreTraining"),Wb=n(" forward method, overrides the "),fp=r("code"),Ub=n("__call__"),Bb=n(" special method."),Rb=p(),v(Yn.$$.fragment),Hb=p(),v(Zn.$$.fragment),xf=p(),Vo=r("h2"),es=r("a"),up=r("span"),v(wa.$$.fragment),Qb=p(),gp=r("span"),Kb=n("AlbertForMaskedLM"),Ef=p(),bt=r("div"),v($a.$$.fragment),Vb=p(),Aa=r("p"),Jb=n("Albert Model with a "),_p=r("code"),Gb=n("language modeling"),Xb=n(" head on top."),Yb=p(),Fa=r("p"),Zb=n("This model inherits from "),Cd=r("a"),ek=n("PreTrainedModel"),tk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=p(),xa=r("p"),nk=n("This model is also a PyTorch "),Ea=r("a"),sk=n("torch.nn.Module"),rk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak=p(),wt=r("div"),v(Ma.$$.fragment),ik=p(),Jo=r("p"),lk=n("The "),Ld=r("a"),dk=n("AlbertForMaskedLM"),ck=n(" forward method, overrides the "),bp=r("code"),pk=n("__call__"),hk=n(" special method."),mk=p(),v(ts.$$.fragment),fk=p(),v(os.$$.fragment),uk=p(),v(ns.$$.fragment),Mf=p(),Go=r("h2"),ss=r("a"),kp=r("span"),v(za.$$.fragment),gk=p(),yp=r("span"),_k=n("AlbertForSequenceClassification"),zf=p(),kt=r("div"),v(ja.$$.fragment),bk=p(),vp=r("p"),kk=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),yk=p(),qa=r("p"),vk=n("This model inherits from "),Od=r("a"),Tk=n("PreTrainedModel"),wk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=p(),Pa=r("p"),Ak=n("This model is also a PyTorch "),Ca=r("a"),Fk=n("torch.nn.Module"),xk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=p(),it=r("div"),v(La.$$.fragment),Mk=p(),Xo=r("p"),zk=n("The "),Id=r("a"),jk=n("AlbertForSequenceClassification"),qk=n(" forward method, overrides the "),Tp=r("code"),Pk=n("__call__"),Ck=n(" special method."),Lk=p(),v(rs.$$.fragment),Ok=p(),v(as.$$.fragment),Ik=p(),v(is.$$.fragment),Nk=p(),v(ls.$$.fragment),Dk=p(),v(ds.$$.fragment),jf=p(),Yo=r("h2"),cs=r("a"),wp=r("span"),v(Oa.$$.fragment),Sk=p(),$p=r("span"),Wk=n("AlbertForMultipleChoice"),qf=p(),yt=r("div"),v(Ia.$$.fragment),Uk=p(),Ap=r("p"),Bk=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rk=p(),Na=r("p"),Hk=n("This model inherits from "),Nd=r("a"),Qk=n("PreTrainedModel"),Kk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vk=p(),Da=r("p"),Jk=n("This model is also a PyTorch "),Sa=r("a"),Gk=n("torch.nn.Module"),Xk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk=p(),Bt=r("div"),v(Wa.$$.fragment),Zk=p(),Zo=r("p"),ey=n("The "),Dd=r("a"),ty=n("AlbertForMultipleChoice"),oy=n(" forward method, overrides the "),Fp=r("code"),ny=n("__call__"),sy=n(" special method."),ry=p(),v(ps.$$.fragment),ay=p(),v(hs.$$.fragment),Pf=p(),en=r("h2"),ms=r("a"),xp=r("span"),v(Ua.$$.fragment),iy=p(),Ep=r("span"),ly=n("AlbertForTokenClassification"),Cf=p(),vt=r("div"),v(Ba.$$.fragment),dy=p(),Mp=r("p"),cy=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),py=p(),Ra=r("p"),hy=n("This model inherits from "),Sd=r("a"),my=n("PreTrainedModel"),fy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uy=p(),Ha=r("p"),gy=n("This model is also a PyTorch "),Qa=r("a"),_y=n("torch.nn.Module"),by=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ky=p(),$t=r("div"),v(Ka.$$.fragment),yy=p(),tn=r("p"),vy=n("The "),Wd=r("a"),Ty=n("AlbertForTokenClassification"),wy=n(" forward method, overrides the "),zp=r("code"),$y=n("__call__"),Ay=n(" special method."),Fy=p(),v(fs.$$.fragment),xy=p(),v(us.$$.fragment),Ey=p(),v(gs.$$.fragment),Lf=p(),on=r("h2"),_s=r("a"),jp=r("span"),v(Va.$$.fragment),My=p(),qp=r("span"),zy=n("AlbertForQuestionAnswering"),Of=p(),Tt=r("div"),v(Ja.$$.fragment),jy=p(),nn=r("p"),qy=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pp=r("code"),Py=n("span start logits"),Cy=n(" and "),Cp=r("code"),Ly=n("span end logits"),Oy=n(")."),Iy=p(),Ga=r("p"),Ny=n("This model inherits from "),Ud=r("a"),Dy=n("PreTrainedModel"),Sy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wy=p(),Xa=r("p"),Uy=n("This model is also a PyTorch "),Ya=r("a"),By=n("torch.nn.Module"),Ry=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hy=p(),At=r("div"),v(Za.$$.fragment),Qy=p(),sn=r("p"),Ky=n("The "),Bd=r("a"),Vy=n("AlbertForQuestionAnswering"),Jy=n(" forward method, overrides the "),Lp=r("code"),Gy=n("__call__"),Xy=n(" special method."),Yy=p(),v(bs.$$.fragment),Zy=p(),v(ks.$$.fragment),ev=p(),v(ys.$$.fragment),If=p(),rn=r("h2"),vs=r("a"),Op=r("span"),v(ei.$$.fragment),tv=p(),Ip=r("span"),ov=n("TFAlbertModel"),Nf=p(),lt=r("div"),v(ti.$$.fragment),nv=p(),Np=r("p"),sv=n("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),rv=p(),oi=r("p"),av=n("This model inherits from "),Rd=r("a"),iv=n("TFPreTrainedModel"),lv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dv=p(),ni=r("p"),cv=n("This model is also a "),si=r("a"),pv=n("tf.keras.Model"),hv=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=p(),v(Ts.$$.fragment),fv=p(),Rt=r("div"),v(ri.$$.fragment),uv=p(),an=r("p"),gv=n("The "),Hd=r("a"),_v=n("TFAlbertModel"),bv=n(" forward method, overrides the "),Dp=r("code"),kv=n("__call__"),yv=n(" special method."),vv=p(),v(ws.$$.fragment),Tv=p(),v($s.$$.fragment),Df=p(),ln=r("h2"),As=r("a"),Sp=r("span"),v(ai.$$.fragment),wv=p(),Wp=r("span"),$v=n("TFAlbertForPreTraining"),Sf=p(),dt=r("div"),v(ii.$$.fragment),Av=p(),dn=r("p"),Fv=n("Albert Model with two heads on top for pretraining: a "),Up=r("code"),xv=n("masked language modeling"),Ev=n(" head and a "),Bp=r("code"),Mv=n("sentence order prediction"),zv=n(" (classification) head."),jv=p(),li=r("p"),qv=n("This model inherits from "),Qd=r("a"),Pv=n("TFPreTrainedModel"),Cv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lv=p(),di=r("p"),Ov=n("This model is also a "),ci=r("a"),Iv=n("tf.keras.Model"),Nv=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv=p(),v(Fs.$$.fragment),Sv=p(),Ht=r("div"),v(pi.$$.fragment),Wv=p(),cn=r("p"),Uv=n("The "),Kd=r("a"),Bv=n("TFAlbertForPreTraining"),Rv=n(" forward method, overrides the "),Rp=r("code"),Hv=n("__call__"),Qv=n(" special method."),Kv=p(),v(xs.$$.fragment),Vv=p(),v(Es.$$.fragment),Wf=p(),pn=r("h2"),Ms=r("a"),Hp=r("span"),v(hi.$$.fragment),Jv=p(),Qp=r("span"),Gv=n("TFAlbertForMaskedLM"),Uf=p(),ct=r("div"),v(mi.$$.fragment),Xv=p(),fi=r("p"),Yv=n("Albert Model with a "),Kp=r("code"),Zv=n("language modeling"),eT=n(" head on top."),tT=p(),ui=r("p"),oT=n("This model inherits from "),Vd=r("a"),nT=n("TFPreTrainedModel"),sT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT=p(),gi=r("p"),aT=n("This model is also a "),_i=r("a"),iT=n("tf.keras.Model"),lT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dT=p(),v(zs.$$.fragment),cT=p(),Ft=r("div"),v(bi.$$.fragment),pT=p(),hn=r("p"),hT=n("The "),Jd=r("a"),mT=n("TFAlbertForMaskedLM"),fT=n(" forward method, overrides the "),Vp=r("code"),uT=n("__call__"),gT=n(" special method."),_T=p(),v(js.$$.fragment),bT=p(),v(qs.$$.fragment),kT=p(),v(Ps.$$.fragment),Bf=p(),mn=r("h2"),Cs=r("a"),Jp=r("span"),v(ki.$$.fragment),yT=p(),Gp=r("span"),vT=n("TFAlbertForSequenceClassification"),Rf=p(),pt=r("div"),v(yi.$$.fragment),TT=p(),Xp=r("p"),wT=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$T=p(),vi=r("p"),AT=n("This model inherits from "),Gd=r("a"),FT=n("TFPreTrainedModel"),xT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=p(),Ti=r("p"),MT=n("This model is also a "),wi=r("a"),zT=n("tf.keras.Model"),jT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qT=p(),v(Ls.$$.fragment),PT=p(),xt=r("div"),v($i.$$.fragment),CT=p(),fn=r("p"),LT=n("The "),Xd=r("a"),OT=n("TFAlbertForSequenceClassification"),IT=n(" forward method, overrides the "),Yp=r("code"),NT=n("__call__"),DT=n(" special method."),ST=p(),v(Os.$$.fragment),WT=p(),v(Is.$$.fragment),UT=p(),v(Ns.$$.fragment),Hf=p(),un=r("h2"),Ds=r("a"),Zp=r("span"),v(Ai.$$.fragment),BT=p(),eh=r("span"),RT=n("TFAlbertForMultipleChoice"),Qf=p(),ht=r("div"),v(Fi.$$.fragment),HT=p(),th=r("p"),QT=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),KT=p(),xi=r("p"),VT=n("This model inherits from "),Yd=r("a"),JT=n("TFPreTrainedModel"),GT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),XT=p(),Ei=r("p"),YT=n("This model is also a "),Mi=r("a"),ZT=n("tf.keras.Model"),ew=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tw=p(),v(Ss.$$.fragment),ow=p(),Qt=r("div"),v(zi.$$.fragment),nw=p(),gn=r("p"),sw=n("The "),Zd=r("a"),rw=n("TFAlbertForMultipleChoice"),aw=n(" forward method, overrides the "),oh=r("code"),iw=n("__call__"),lw=n(" special method."),dw=p(),v(Ws.$$.fragment),cw=p(),v(Us.$$.fragment),Kf=p(),_n=r("h2"),Bs=r("a"),nh=r("span"),v(ji.$$.fragment),pw=p(),sh=r("span"),hw=n("TFAlbertForTokenClassification"),Vf=p(),mt=r("div"),v(qi.$$.fragment),mw=p(),rh=r("p"),fw=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uw=p(),Pi=r("p"),gw=n("This model inherits from "),ec=r("a"),_w=n("TFPreTrainedModel"),bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kw=p(),Ci=r("p"),yw=n("This model is also a "),Li=r("a"),vw=n("tf.keras.Model"),Tw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ww=p(),v(Rs.$$.fragment),$w=p(),Et=r("div"),v(Oi.$$.fragment),Aw=p(),bn=r("p"),Fw=n("The "),tc=r("a"),xw=n("TFAlbertForTokenClassification"),Ew=n(" forward method, overrides the "),ah=r("code"),Mw=n("__call__"),zw=n(" special method."),jw=p(),v(Hs.$$.fragment),qw=p(),v(Qs.$$.fragment),Pw=p(),v(Ks.$$.fragment),Jf=p(),kn=r("h2"),Vs=r("a"),ih=r("span"),v(Ii.$$.fragment),Cw=p(),lh=r("span"),Lw=n("TFAlbertForQuestionAnswering"),Gf=p(),ft=r("div"),v(Ni.$$.fragment),Ow=p(),yn=r("p"),Iw=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dh=r("code"),Nw=n("span start logits"),Dw=n(" and "),ch=r("code"),Sw=n("span end logits"),Ww=n(")."),Uw=p(),Di=r("p"),Bw=n("This model inherits from "),oc=r("a"),Rw=n("TFPreTrainedModel"),Hw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qw=p(),Si=r("p"),Kw=n("This model is also a "),Wi=r("a"),Vw=n("tf.keras.Model"),Jw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gw=p(),v(Js.$$.fragment),Xw=p(),Mt=r("div"),v(Ui.$$.fragment),Yw=p(),vn=r("p"),Zw=n("The "),nc=r("a"),e$=n("TFAlbertForQuestionAnswering"),t$=n(" forward method, overrides the "),ph=r("code"),o$=n("__call__"),n$=n(" special method."),s$=p(),v(Gs.$$.fragment),r$=p(),v(Xs.$$.fragment),a$=p(),v(Ys.$$.fragment),Xf=p(),Tn=r("h2"),Zs=r("a"),hh=r("span"),v(Bi.$$.fragment),i$=p(),mh=r("span"),l$=n("FlaxAlbertModel"),Yf=p(),et=r("div"),v(Ri.$$.fragment),d$=p(),fh=r("p"),c$=n("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),p$=p(),Hi=r("p"),h$=n("This model inherits from "),sc=r("a"),m$=n("FlaxPreTrainedModel"),f$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),u$=p(),Qi=r("p"),g$=n("This model is also a Flax Linen "),Ki=r("a"),_$=n("flax.linen.Module"),b$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),k$=p(),uh=r("p"),y$=n("Finally, this model supports inherent JAX features such as:"),v$=p(),lo=r("ul"),gh=r("li"),Vi=r("a"),T$=n("Just-In-Time (JIT) compilation"),w$=p(),_h=r("li"),Ji=r("a"),$$=n("Automatic Differentiation"),A$=p(),bh=r("li"),Gi=r("a"),F$=n("Vectorization"),x$=p(),kh=r("li"),Xi=r("a"),E$=n("Parallelization"),M$=p(),Kt=r("div"),v(Yi.$$.fragment),z$=p(),wn=r("p"),j$=n("The "),yh=r("code"),q$=n("FlaxAlbertPreTrainedModel"),P$=n(" forward method, overrides the "),vh=r("code"),C$=n("__call__"),L$=n(" special method."),O$=p(),v(er.$$.fragment),I$=p(),v(tr.$$.fragment),Zf=p(),$n=r("h2"),or=r("a"),Th=r("span"),v(Zi.$$.fragment),N$=p(),wh=r("span"),D$=n("FlaxAlbertForPreTraining"),eu=p(),tt=r("div"),v(el.$$.fragment),S$=p(),An=r("p"),W$=n("Albert Model with two heads on top as done during the pretraining: a "),$h=r("code"),U$=n("masked language modeling"),B$=n(` head and a
`),Ah=r("code"),R$=n("sentence order prediction (classification)"),H$=n(" head."),Q$=p(),tl=r("p"),K$=n("This model inherits from "),rc=r("a"),V$=n("FlaxPreTrainedModel"),J$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G$=p(),ol=r("p"),X$=n("This model is also a Flax Linen "),nl=r("a"),Y$=n("flax.linen.Module"),Z$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e1=p(),Fh=r("p"),t1=n("Finally, this model supports inherent JAX features such as:"),o1=p(),co=r("ul"),xh=r("li"),sl=r("a"),n1=n("Just-In-Time (JIT) compilation"),s1=p(),Eh=r("li"),rl=r("a"),r1=n("Automatic Differentiation"),a1=p(),Mh=r("li"),al=r("a"),i1=n("Vectorization"),l1=p(),zh=r("li"),il=r("a"),d1=n("Parallelization"),c1=p(),Vt=r("div"),v(ll.$$.fragment),p1=p(),Fn=r("p"),h1=n("The "),jh=r("code"),m1=n("FlaxAlbertPreTrainedModel"),f1=n(" forward method, overrides the "),qh=r("code"),u1=n("__call__"),g1=n(" special method."),_1=p(),v(nr.$$.fragment),b1=p(),v(sr.$$.fragment),tu=p(),xn=r("h2"),rr=r("a"),Ph=r("span"),v(dl.$$.fragment),k1=p(),Ch=r("span"),y1=n("FlaxAlbertForMaskedLM"),ou=p(),ot=r("div"),v(cl.$$.fragment),v1=p(),pl=r("p"),T1=n("Albert Model with a "),Lh=r("code"),w1=n("language modeling"),$1=n(" head on top."),A1=p(),hl=r("p"),F1=n("This model inherits from "),ac=r("a"),x1=n("FlaxPreTrainedModel"),E1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M1=p(),ml=r("p"),z1=n("This model is also a Flax Linen "),fl=r("a"),j1=n("flax.linen.Module"),q1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),P1=p(),Oh=r("p"),C1=n("Finally, this model supports inherent JAX features such as:"),L1=p(),po=r("ul"),Ih=r("li"),ul=r("a"),O1=n("Just-In-Time (JIT) compilation"),I1=p(),Nh=r("li"),gl=r("a"),N1=n("Automatic Differentiation"),D1=p(),Dh=r("li"),_l=r("a"),S1=n("Vectorization"),W1=p(),Sh=r("li"),bl=r("a"),U1=n("Parallelization"),B1=p(),Jt=r("div"),v(kl.$$.fragment),R1=p(),En=r("p"),H1=n("The "),Wh=r("code"),Q1=n("FlaxAlbertPreTrainedModel"),K1=n(" forward method, overrides the "),Uh=r("code"),V1=n("__call__"),J1=n(" special method."),G1=p(),v(ar.$$.fragment),X1=p(),v(ir.$$.fragment),nu=p(),Mn=r("h2"),lr=r("a"),Bh=r("span"),v(yl.$$.fragment),Y1=p(),Rh=r("span"),Z1=n("FlaxAlbertForSequenceClassification"),su=p(),nt=r("div"),v(vl.$$.fragment),e2=p(),Hh=r("p"),t2=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o2=p(),Tl=r("p"),n2=n("This model inherits from "),ic=r("a"),s2=n("FlaxPreTrainedModel"),r2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a2=p(),wl=r("p"),i2=n("This model is also a Flax Linen "),$l=r("a"),l2=n("flax.linen.Module"),d2=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c2=p(),Qh=r("p"),p2=n("Finally, this model supports inherent JAX features such as:"),h2=p(),ho=r("ul"),Kh=r("li"),Al=r("a"),m2=n("Just-In-Time (JIT) compilation"),f2=p(),Vh=r("li"),Fl=r("a"),u2=n("Automatic Differentiation"),g2=p(),Jh=r("li"),xl=r("a"),_2=n("Vectorization"),b2=p(),Gh=r("li"),El=r("a"),k2=n("Parallelization"),y2=p(),Gt=r("div"),v(Ml.$$.fragment),v2=p(),zn=r("p"),T2=n("The "),Xh=r("code"),w2=n("FlaxAlbertPreTrainedModel"),$2=n(" forward method, overrides the "),Yh=r("code"),A2=n("__call__"),F2=n(" special method."),x2=p(),v(dr.$$.fragment),E2=p(),v(cr.$$.fragment),ru=p(),jn=r("h2"),pr=r("a"),Zh=r("span"),v(zl.$$.fragment),M2=p(),em=r("span"),z2=n("FlaxAlbertForMultipleChoice"),au=p(),st=r("div"),v(jl.$$.fragment),j2=p(),tm=r("p"),q2=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),P2=p(),ql=r("p"),C2=n("This model inherits from "),lc=r("a"),L2=n("FlaxPreTrainedModel"),O2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),I2=p(),Pl=r("p"),N2=n("This model is also a Flax Linen "),Cl=r("a"),D2=n("flax.linen.Module"),S2=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),W2=p(),om=r("p"),U2=n("Finally, this model supports inherent JAX features such as:"),B2=p(),mo=r("ul"),nm=r("li"),Ll=r("a"),R2=n("Just-In-Time (JIT) compilation"),H2=p(),sm=r("li"),Ol=r("a"),Q2=n("Automatic Differentiation"),K2=p(),rm=r("li"),Il=r("a"),V2=n("Vectorization"),J2=p(),am=r("li"),Nl=r("a"),G2=n("Parallelization"),X2=p(),Xt=r("div"),v(Dl.$$.fragment),Y2=p(),qn=r("p"),Z2=n("The "),im=r("code"),eA=n("FlaxAlbertPreTrainedModel"),tA=n(" forward method, overrides the "),lm=r("code"),oA=n("__call__"),nA=n(" special method."),sA=p(),v(hr.$$.fragment),rA=p(),v(mr.$$.fragment),iu=p(),Pn=r("h2"),fr=r("a"),dm=r("span"),v(Sl.$$.fragment),aA=p(),cm=r("span"),iA=n("FlaxAlbertForTokenClassification"),lu=p(),rt=r("div"),v(Wl.$$.fragment),lA=p(),pm=r("p"),dA=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cA=p(),Ul=r("p"),pA=n("This model inherits from "),dc=r("a"),hA=n("FlaxPreTrainedModel"),mA=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fA=p(),Bl=r("p"),uA=n("This model is also a Flax Linen "),Rl=r("a"),gA=n("flax.linen.Module"),_A=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bA=p(),hm=r("p"),kA=n("Finally, this model supports inherent JAX features such as:"),yA=p(),fo=r("ul"),mm=r("li"),Hl=r("a"),vA=n("Just-In-Time (JIT) compilation"),TA=p(),fm=r("li"),Ql=r("a"),wA=n("Automatic Differentiation"),$A=p(),um=r("li"),Kl=r("a"),AA=n("Vectorization"),FA=p(),gm=r("li"),Vl=r("a"),xA=n("Parallelization"),EA=p(),Yt=r("div"),v(Jl.$$.fragment),MA=p(),Cn=r("p"),zA=n("The "),_m=r("code"),jA=n("FlaxAlbertPreTrainedModel"),qA=n(" forward method, overrides the "),bm=r("code"),PA=n("__call__"),CA=n(" special method."),LA=p(),v(ur.$$.fragment),OA=p(),v(gr.$$.fragment),du=p(),Ln=r("h2"),_r=r("a"),km=r("span"),v(Gl.$$.fragment),IA=p(),ym=r("span"),NA=n("FlaxAlbertForQuestionAnswering"),cu=p(),at=r("div"),v(Xl.$$.fragment),DA=p(),On=r("p"),SA=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vm=r("code"),WA=n("span start logits"),UA=n(" and "),Tm=r("code"),BA=n("span end logits"),RA=n(")."),HA=p(),Yl=r("p"),QA=n("This model inherits from "),cc=r("a"),KA=n("FlaxPreTrainedModel"),VA=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),JA=p(),Zl=r("p"),GA=n("This model is also a Flax Linen "),ed=r("a"),XA=n("flax.linen.Module"),YA=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZA=p(),wm=r("p"),eF=n("Finally, this model supports inherent JAX features such as:"),tF=p(),uo=r("ul"),$m=r("li"),td=r("a"),oF=n("Just-In-Time (JIT) compilation"),nF=p(),Am=r("li"),od=r("a"),sF=n("Automatic Differentiation"),rF=p(),Fm=r("li"),nd=r("a"),aF=n("Vectorization"),iF=p(),xm=r("li"),sd=r("a"),lF=n("Parallelization"),dF=p(),Zt=r("div"),v(rd.$$.fragment),cF=p(),In=r("p"),pF=n("The "),Em=r("code"),hF=n("FlaxAlbertPreTrainedModel"),mF=n(" forward method, overrides the "),Mm=r("code"),fF=n("__call__"),uF=n(" special method."),gF=p(),v(br.$$.fragment),_F=p(),v(kr.$$.fragment),this.h()},l(o){const b=az('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var ad=i(c);f=a(ad,"A",{id:!0,class:!0,href:!0});var zm=i(f);k=a(zm,"SPAN",{});var jm=i(k);T(l.$$.fragment,jm),jm.forEach(t),zm.forEach(t),m=h(ad),M=a(ad,"SPAN",{});var qm=i(M);ve=s(qm,"ALBERT"),qm.forEach(t),ad.forEach(t),ge=h(o),W=a(o,"H2",{class:!0});var id=i(W);se=a(id,"A",{id:!0,class:!0,href:!0});var Pm=i(se);te=a(Pm,"SPAN",{});var Cm=i(te);T(E.$$.fragment,Cm),Cm.forEach(t),Pm.forEach(t),Te=h(id),Q=a(id,"SPAN",{});var Lm=i(Q);we=s(Lm,"Overview"),Lm.forEach(t),id.forEach(t),_e=h(o),U=a(o,"P",{});var ld=i(U);$e=s(ld,"The ALBERT model was proposed in "),ae=a(ld,"A",{href:!0,rel:!0});var Om=i(ae);G=s(Om,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Om.forEach(t),Ae=s(ld,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),ld.forEach(t),be=h(o),B=a(o,"UL",{});var dd=i(B);me=a(dd,"LI",{});var Im=i(me);Fe=s(Im,"Splitting the embedding matrix into two smaller matrices."),Im.forEach(t),X=h(dd),fe=a(dd,"LI",{});var Nm=i(fe);xe=s(Nm,"Using repeating layers split among groups."),Nm.forEach(t),dd.forEach(t),oe=h(o),q=a(o,"P",{});var Dm=i(q);L=s(Dm,"The abstract from the paper is the following:"),Dm.forEach(t),ke=h(o),H=a(o,"P",{});var Sm=i(H);ue=a(Sm,"EM",{});var Wm=i(ue);Ee=s(Wm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),Wm.forEach(t),Sm.forEach(t),J=h(o),le=a(o,"P",{});var Um=i(le);Me=s(Um,"Tips:"),Um.forEach(t),C=h(o),re=a(o,"UL",{});var cd=i(re);K=a(cd,"LI",{});var Bm=i(K);ze=s(Bm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Bm.forEach(t),je=h(cd),V=a(cd,"LI",{});var Rm=i(V);qe=s(Rm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Rm.forEach(t),cd.forEach(t),ye=h(o),O=a(o,"P",{});var go=i(O);Pe=s(go,"This model was contributed by "),R=a(go,"A",{href:!0,rel:!0});var Hm=i(R);Ce=s(Hm,"lysandre"),Hm.forEach(t),ne=s(go,`. This model jax version was contributed by
`),P=a(go,"A",{href:!0,rel:!0});var Qm=i(P);Le=s(Qm,"kamalkraj"),Qm.forEach(t),I=s(go,". The original code can be found "),ie=a(go,"A",{href:!0,rel:!0});var Km=i(ie);Oe=s(Km,"here"),Km.forEach(t),y=s(go,"."),go.forEach(t),z=h(o),Ne=a(o,"H2",{class:!0});var pd=i(Ne);Z=a(pd,"A",{id:!0,class:!0,href:!0});var Vm=i(Z);He=a(Vm,"SPAN",{});var Jm=i(He);T(De.$$.fragment,Jm),Jm.forEach(t),Vm.forEach(t),j=h(pd),Qe=a(pd,"SPAN",{});var Gm=i(Qe);Ve=s(Gm,"AlbertConfig"),Gm.forEach(t),pd.forEach(t),Ke=h(o),de=a(o,"DIV",{class:!0});var _o=i(de);T(Se.$$.fragment,_o),S=h(_o),N=a(_o,"P",{});var bo=i(N);Je=s(bo,"This is the configuration class to store the configuration of a "),Ue=a(bo,"A",{href:!0});var Xm=i(Ue);Y=s(Xm,"AlbertModel"),Xm.forEach(t),Ge=s(bo," or a "),Be=a(bo,"A",{href:!0});var Ym=i(Be);Ie=s(Ym,"TFAlbertModel"),Ym.forEach(t),Xe=s(bo,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),ee=a(bo,"A",{href:!0,rel:!0});var Zm=i(ee);Ye=s(Zm,"albert-xxlarge-v2"),Zm.forEach(t),zg=s(bo," architecture."),bo.forEach(t),jg=h(_o),Oo=a(_o,"P",{});var Nn=i(Oo);qg=s(Nn,"Configuration objects inherit from "),kd=a(Nn,"A",{href:!0});var ef=i(kd);Pg=s(ef,"PretrainedConfig"),ef.forEach(t),Cg=s(Nn,` and can be used to control the model outputs. Read the
documentation from `),yd=a(Nn,"A",{href:!0});var tf=i(yd);Lg=s(tf,"PretrainedConfig"),tf.forEach(t),Og=s(Nn," for more information."),Nn.forEach(t),Ig=h(_o),T(Wn.$$.fragment,_o),_o.forEach(t),gf=h(o),Io=a(o,"H2",{class:!0});var hd=i(Io);Un=a(hd,"A",{id:!0,class:!0,href:!0});var of=i(Un);Wc=a(of,"SPAN",{});var nf=i(Wc);T(Br.$$.fragment,nf),nf.forEach(t),of.forEach(t),Ng=h(hd),Uc=a(hd,"SPAN",{});var sf=i(Uc);Dg=s(sf,"AlbertTokenizer"),sf.forEach(t),hd.forEach(t),_f=h(o),Ze=a(o,"DIV",{class:!0});var ut=i(Ze);T(Rr.$$.fragment,ut),Sg=h(ut),Hr=a(ut,"P",{});var md=i(Hr);Wg=s(md,"Construct an ALBERT tokenizer. Based on "),Qr=a(md,"A",{href:!0,rel:!0});var rf=i(Qr);Ug=s(rf,"SentencePiece"),rf.forEach(t),Bg=s(md,"."),md.forEach(t),Rg=h(ut),Kr=a(ut,"P",{});var fd=i(Kr);Hg=s(fd,"This tokenizer inherits from "),vd=a(fd,"A",{href:!0});var af=i(vd);Qg=s(af,"PreTrainedTokenizer"),af.forEach(t),Kg=s(fd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fd.forEach(t),Vg=h(ut),yo=a(ut,"DIV",{class:!0});var Dn=i(yo);T(Vr.$$.fragment,Dn),Jg=h(Dn),Bc=a(Dn,"P",{});var lf=i(Bc);Gg=s(lf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),lf.forEach(t),Xg=h(Dn),Jr=a(Dn,"UL",{});var ud=i(Jr);Td=a(ud,"LI",{});var pc=i(Td);Yg=s(pc,"single sequence: "),Rc=a(pc,"CODE",{});var df=i(Rc);Zg=s(df,"[CLS] X [SEP]"),df.forEach(t),pc.forEach(t),e_=h(ud),wd=a(ud,"LI",{});var hc=i(wd);t_=s(hc,"pair of sequences: "),Hc=a(hc,"CODE",{});var cf=i(Hc);o_=s(cf,"[CLS] A [SEP] B [SEP]"),cf.forEach(t),hc.forEach(t),ud.forEach(t),Dn.forEach(t),n_=h(ut),Bn=a(ut,"DIV",{class:!0});var gd=i(Bn);T(Gr.$$.fragment,gd),s_=h(gd),Xr=a(gd,"P",{});var _d=i(Xr);r_=s(_d,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qc=a(_d,"CODE",{});var pf=i(Qc);a_=s(pf,"prepare_for_model"),pf.forEach(t),i_=s(_d," method."),_d.forEach(t),gd.forEach(t),l_=h(ut),Dt=a(ut,"DIV",{class:!0});var ko=i(Dt);T(Yr.$$.fragment,ko),d_=h(ko),Kc=a(ko,"P",{});var hf=i(Kc);c_=s(hf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),hf.forEach(t),p_=h(ko),T(Rn.$$.fragment,ko),h_=h(ko),No=a(ko,"P",{});var Sn=i(No);m_=s(Sn,"If "),Vc=a(Sn,"CODE",{});var mf=i(Vc);f_=s(mf,"token_ids_1"),mf.forEach(t),u_=s(Sn," is "),Jc=a(Sn,"CODE",{});var ff=i(Jc);g_=s(ff,"None"),ff.forEach(t),__=s(Sn,", this method only returns the first portion of the mask (0s)."),Sn.forEach(t),ko.forEach(t),b_=h(ut),$d=a(ut,"DIV",{class:!0});var uf=i($d);T(Zr.$$.fragment,uf),uf.forEach(t),ut.forEach(t),bf=h(o),Do=a(o,"H2",{class:!0});var bd=i(Do);Hn=a(bd,"A",{id:!0,class:!0,href:!0});var yF=i(Hn);Gc=a(yF,"SPAN",{});var vF=i(Gc);T(ea.$$.fragment,vF),vF.forEach(t),yF.forEach(t),k_=h(bd),Xc=a(bd,"SPAN",{});var TF=i(Xc);y_=s(TF,"AlbertTokenizerFast"),TF.forEach(t),bd.forEach(t),kf=h(o),Nt=a(o,"DIV",{class:!0});var yr=i(Nt);T(ta.$$.fragment,yr),v_=h(yr),io=a(yr,"P",{});var vr=i(io);T_=s(vr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Yc=a(vr,"EM",{});var wF=i(Yc);w_=s(wF,"tokenizers"),wF.forEach(t),$_=s(vr,` library). Based on
`),oa=a(vr,"A",{href:!0,rel:!0});var $F=i(oa);A_=s($F,"Unigram"),$F.forEach(t),F_=s(vr,`. This
tokenizer inherits from `),Ad=a(vr,"A",{href:!0});var AF=i(Ad);x_=s(AF,"PreTrainedTokenizerFast"),AF.forEach(t),E_=s(vr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),vr.forEach(t),M_=h(yr),vo=a(yr,"DIV",{class:!0});var mc=i(vo);T(na.$$.fragment,mc),z_=h(mc),Zc=a(mc,"P",{});var FF=i(Zc);j_=s(FF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),FF.forEach(t),q_=h(mc),sa=a(mc,"UL",{});var hu=i(sa);Fd=a(hu,"LI",{});var bF=i(Fd);P_=s(bF,"single sequence: "),ep=a(bF,"CODE",{});var xF=i(ep);C_=s(xF,"[CLS] X [SEP]"),xF.forEach(t),bF.forEach(t),L_=h(hu),xd=a(hu,"LI",{});var kF=i(xd);O_=s(kF,"pair of sequences: "),tp=a(kF,"CODE",{});var EF=i(tp);I_=s(EF,"[CLS] A [SEP] B [SEP]"),EF.forEach(t),kF.forEach(t),hu.forEach(t),mc.forEach(t),N_=h(yr),St=a(yr,"DIV",{class:!0});var Tr=i(St);T(ra.$$.fragment,Tr),D_=h(Tr),op=a(Tr,"P",{});var MF=i(op);S_=s(MF,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),MF.forEach(t),W_=h(Tr),T(Qn.$$.fragment,Tr),U_=h(Tr),np=a(Tr,"P",{});var zF=i(np);B_=s(zF,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),zF.forEach(t),Tr.forEach(t),yr.forEach(t),yf=h(o),So=a(o,"H2",{class:!0});var mu=i(So);Kn=a(mu,"A",{id:!0,class:!0,href:!0});var jF=i(Kn);sp=a(jF,"SPAN",{});var qF=i(sp);T(aa.$$.fragment,qF),qF.forEach(t),jF.forEach(t),R_=h(mu),rp=a(mu,"SPAN",{});var PF=i(rp);H_=s(PF,"Albert specific outputs"),PF.forEach(t),mu.forEach(t),vf=h(o),Wo=a(o,"DIV",{class:!0});var fu=i(Wo);T(ia.$$.fragment,fu),Q_=h(fu),la=a(fu,"P",{});var uu=i(la);K_=s(uu,"Output type of "),Ed=a(uu,"A",{href:!0});var CF=i(Ed);V_=s(CF,"AlbertForPreTraining"),CF.forEach(t),J_=s(uu,"."),uu.forEach(t),fu.forEach(t),Tf=h(o),Uo=a(o,"DIV",{class:!0});var gu=i(Uo);T(da.$$.fragment,gu),G_=h(gu),ca=a(gu,"P",{});var _u=i(ca);X_=s(_u,"Output type of "),Md=a(_u,"A",{href:!0});var LF=i(Md);Y_=s(LF,"TFAlbertForPreTraining"),LF.forEach(t),Z_=s(_u,"."),_u.forEach(t),gu.forEach(t),wf=h(o),Bo=a(o,"H2",{class:!0});var bu=i(Bo);Vn=a(bu,"A",{id:!0,class:!0,href:!0});var OF=i(Vn);ap=a(OF,"SPAN",{});var IF=i(ap);T(pa.$$.fragment,IF),IF.forEach(t),OF.forEach(t),eb=h(bu),ip=a(bu,"SPAN",{});var NF=i(ip);tb=s(NF,"AlbertModel"),NF.forEach(t),bu.forEach(t),$f=h(o),gt=a(o,"DIV",{class:!0});var To=i(gt);T(ha.$$.fragment,To),ob=h(To),lp=a(To,"P",{});var DF=i(lp);nb=s(DF,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),DF.forEach(t),sb=h(To),ma=a(To,"P",{});var ku=i(ma);rb=s(ku,"This model inherits from "),zd=a(ku,"A",{href:!0});var SF=i(zd);ab=s(SF,"PreTrainedModel"),SF.forEach(t),ib=s(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),lb=h(To),fa=a(To,"P",{});var yu=i(fa);db=s(yu,"This model is also a PyTorch "),ua=a(yu,"A",{href:!0,rel:!0});var WF=i(ua);cb=s(WF,"torch.nn.Module"),WF.forEach(t),pb=s(yu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yu.forEach(t),hb=h(To),Wt=a(To,"DIV",{class:!0});var wr=i(Wt);T(ga.$$.fragment,wr),mb=h(wr),Ro=a(wr,"P",{});var fc=i(Ro);fb=s(fc,"The "),jd=a(fc,"A",{href:!0});var UF=i(jd);ub=s(UF,"AlbertModel"),UF.forEach(t),gb=s(fc," forward method, overrides the "),dp=a(fc,"CODE",{});var BF=i(dp);_b=s(BF,"__call__"),BF.forEach(t),bb=s(fc," special method."),fc.forEach(t),kb=h(wr),T(Jn.$$.fragment,wr),yb=h(wr),T(Gn.$$.fragment,wr),wr.forEach(t),To.forEach(t),Af=h(o),Ho=a(o,"H2",{class:!0});var vu=i(Ho);Xn=a(vu,"A",{id:!0,class:!0,href:!0});var RF=i(Xn);cp=a(RF,"SPAN",{});var HF=i(cp);T(_a.$$.fragment,HF),HF.forEach(t),RF.forEach(t),vb=h(vu),pp=a(vu,"SPAN",{});var QF=i(pp);Tb=s(QF,"AlbertForPreTraining"),QF.forEach(t),vu.forEach(t),Ff=h(o),_t=a(o,"DIV",{class:!0});var wo=i(_t);T(ba.$$.fragment,wo),wb=h(wo),Qo=a(wo,"P",{});var uc=i(Qo);$b=s(uc,"Albert Model with two heads on top as done during the pretraining: a "),hp=a(uc,"CODE",{});var KF=i(hp);Ab=s(KF,"masked language modeling"),KF.forEach(t),Fb=s(uc,` head and a
`),mp=a(uc,"CODE",{});var VF=i(mp);xb=s(VF,"sentence order prediction (classification)"),VF.forEach(t),Eb=s(uc," head."),uc.forEach(t),Mb=h(wo),ka=a(wo,"P",{});var Tu=i(ka);zb=s(Tu,"This model inherits from "),qd=a(Tu,"A",{href:!0});var JF=i(qd);jb=s(JF,"PreTrainedModel"),JF.forEach(t),qb=s(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),Pb=h(wo),ya=a(wo,"P",{});var wu=i(ya);Cb=s(wu,"This model is also a PyTorch "),va=a(wu,"A",{href:!0,rel:!0});var GF=i(va);Lb=s(GF,"torch.nn.Module"),GF.forEach(t),Ob=s(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(t),Ib=h(wo),Ut=a(wo,"DIV",{class:!0});var $r=i(Ut);T(Ta.$$.fragment,$r),Nb=h($r),Ko=a($r,"P",{});var gc=i(Ko);Db=s(gc,"The "),Pd=a(gc,"A",{href:!0});var XF=i(Pd);Sb=s(XF,"AlbertForPreTraining"),XF.forEach(t),Wb=s(gc," forward method, overrides the "),fp=a(gc,"CODE",{});var YF=i(fp);Ub=s(YF,"__call__"),YF.forEach(t),Bb=s(gc," special method."),gc.forEach(t),Rb=h($r),T(Yn.$$.fragment,$r),Hb=h($r),T(Zn.$$.fragment,$r),$r.forEach(t),wo.forEach(t),xf=h(o),Vo=a(o,"H2",{class:!0});var $u=i(Vo);es=a($u,"A",{id:!0,class:!0,href:!0});var ZF=i(es);up=a(ZF,"SPAN",{});var e0=i(up);T(wa.$$.fragment,e0),e0.forEach(t),ZF.forEach(t),Qb=h($u),gp=a($u,"SPAN",{});var t0=i(gp);Kb=s(t0,"AlbertForMaskedLM"),t0.forEach(t),$u.forEach(t),Ef=h(o),bt=a(o,"DIV",{class:!0});var $o=i(bt);T($a.$$.fragment,$o),Vb=h($o),Aa=a($o,"P",{});var Au=i(Aa);Jb=s(Au,"Albert Model with a "),_p=a(Au,"CODE",{});var o0=i(_p);Gb=s(o0,"language modeling"),o0.forEach(t),Xb=s(Au," head on top."),Au.forEach(t),Yb=h($o),Fa=a($o,"P",{});var Fu=i(Fa);Zb=s(Fu,"This model inherits from "),Cd=a(Fu,"A",{href:!0});var n0=i(Cd);ek=s(n0,"PreTrainedModel"),n0.forEach(t),tk=s(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),ok=h($o),xa=a($o,"P",{});var xu=i(xa);nk=s(xu,"This model is also a PyTorch "),Ea=a(xu,"A",{href:!0,rel:!0});var s0=i(Ea);sk=s(s0,"torch.nn.Module"),s0.forEach(t),rk=s(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),ak=h($o),wt=a($o,"DIV",{class:!0});var Ao=i(wt);T(Ma.$$.fragment,Ao),ik=h(Ao),Jo=a(Ao,"P",{});var _c=i(Jo);lk=s(_c,"The "),Ld=a(_c,"A",{href:!0});var r0=i(Ld);dk=s(r0,"AlbertForMaskedLM"),r0.forEach(t),ck=s(_c," forward method, overrides the "),bp=a(_c,"CODE",{});var a0=i(bp);pk=s(a0,"__call__"),a0.forEach(t),hk=s(_c," special method."),_c.forEach(t),mk=h(Ao),T(ts.$$.fragment,Ao),fk=h(Ao),T(os.$$.fragment,Ao),uk=h(Ao),T(ns.$$.fragment,Ao),Ao.forEach(t),$o.forEach(t),Mf=h(o),Go=a(o,"H2",{class:!0});var Eu=i(Go);ss=a(Eu,"A",{id:!0,class:!0,href:!0});var i0=i(ss);kp=a(i0,"SPAN",{});var l0=i(kp);T(za.$$.fragment,l0),l0.forEach(t),i0.forEach(t),gk=h(Eu),yp=a(Eu,"SPAN",{});var d0=i(yp);_k=s(d0,"AlbertForSequenceClassification"),d0.forEach(t),Eu.forEach(t),zf=h(o),kt=a(o,"DIV",{class:!0});var Fo=i(kt);T(ja.$$.fragment,Fo),bk=h(Fo),vp=a(Fo,"P",{});var c0=i(vp);kk=s(c0,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),c0.forEach(t),yk=h(Fo),qa=a(Fo,"P",{});var Mu=i(qa);vk=s(Mu,"This model inherits from "),Od=a(Mu,"A",{href:!0});var p0=i(Od);Tk=s(p0,"PreTrainedModel"),p0.forEach(t),wk=s(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),$k=h(Fo),Pa=a(Fo,"P",{});var zu=i(Pa);Ak=s(zu,"This model is also a PyTorch "),Ca=a(zu,"A",{href:!0,rel:!0});var h0=i(Ca);Fk=s(h0,"torch.nn.Module"),h0.forEach(t),xk=s(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Ek=h(Fo),it=a(Fo,"DIV",{class:!0});var zt=i(it);T(La.$$.fragment,zt),Mk=h(zt),Xo=a(zt,"P",{});var bc=i(Xo);zk=s(bc,"The "),Id=a(bc,"A",{href:!0});var m0=i(Id);jk=s(m0,"AlbertForSequenceClassification"),m0.forEach(t),qk=s(bc," forward method, overrides the "),Tp=a(bc,"CODE",{});var f0=i(Tp);Pk=s(f0,"__call__"),f0.forEach(t),Ck=s(bc," special method."),bc.forEach(t),Lk=h(zt),T(rs.$$.fragment,zt),Ok=h(zt),T(as.$$.fragment,zt),Ik=h(zt),T(is.$$.fragment,zt),Nk=h(zt),T(ls.$$.fragment,zt),Dk=h(zt),T(ds.$$.fragment,zt),zt.forEach(t),Fo.forEach(t),jf=h(o),Yo=a(o,"H2",{class:!0});var ju=i(Yo);cs=a(ju,"A",{id:!0,class:!0,href:!0});var u0=i(cs);wp=a(u0,"SPAN",{});var g0=i(wp);T(Oa.$$.fragment,g0),g0.forEach(t),u0.forEach(t),Sk=h(ju),$p=a(ju,"SPAN",{});var _0=i($p);Wk=s(_0,"AlbertForMultipleChoice"),_0.forEach(t),ju.forEach(t),qf=h(o),yt=a(o,"DIV",{class:!0});var xo=i(yt);T(Ia.$$.fragment,xo),Uk=h(xo),Ap=a(xo,"P",{});var b0=i(Ap);Bk=s(b0,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b0.forEach(t),Rk=h(xo),Na=a(xo,"P",{});var qu=i(Na);Hk=s(qu,"This model inherits from "),Nd=a(qu,"A",{href:!0});var k0=i(Nd);Qk=s(k0,"PreTrainedModel"),k0.forEach(t),Kk=s(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),Vk=h(xo),Da=a(xo,"P",{});var Pu=i(Da);Jk=s(Pu,"This model is also a PyTorch "),Sa=a(Pu,"A",{href:!0,rel:!0});var y0=i(Sa);Gk=s(y0,"torch.nn.Module"),y0.forEach(t),Xk=s(Pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu.forEach(t),Yk=h(xo),Bt=a(xo,"DIV",{class:!0});var Ar=i(Bt);T(Wa.$$.fragment,Ar),Zk=h(Ar),Zo=a(Ar,"P",{});var kc=i(Zo);ey=s(kc,"The "),Dd=a(kc,"A",{href:!0});var v0=i(Dd);ty=s(v0,"AlbertForMultipleChoice"),v0.forEach(t),oy=s(kc," forward method, overrides the "),Fp=a(kc,"CODE",{});var T0=i(Fp);ny=s(T0,"__call__"),T0.forEach(t),sy=s(kc," special method."),kc.forEach(t),ry=h(Ar),T(ps.$$.fragment,Ar),ay=h(Ar),T(hs.$$.fragment,Ar),Ar.forEach(t),xo.forEach(t),Pf=h(o),en=a(o,"H2",{class:!0});var Cu=i(en);ms=a(Cu,"A",{id:!0,class:!0,href:!0});var w0=i(ms);xp=a(w0,"SPAN",{});var $0=i(xp);T(Ua.$$.fragment,$0),$0.forEach(t),w0.forEach(t),iy=h(Cu),Ep=a(Cu,"SPAN",{});var A0=i(Ep);ly=s(A0,"AlbertForTokenClassification"),A0.forEach(t),Cu.forEach(t),Cf=h(o),vt=a(o,"DIV",{class:!0});var Eo=i(vt);T(Ba.$$.fragment,Eo),dy=h(Eo),Mp=a(Eo,"P",{});var F0=i(Mp);cy=s(F0,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),F0.forEach(t),py=h(Eo),Ra=a(Eo,"P",{});var Lu=i(Ra);hy=s(Lu,"This model inherits from "),Sd=a(Lu,"A",{href:!0});var x0=i(Sd);my=s(x0,"PreTrainedModel"),x0.forEach(t),fy=s(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),uy=h(Eo),Ha=a(Eo,"P",{});var Ou=i(Ha);gy=s(Ou,"This model is also a PyTorch "),Qa=a(Ou,"A",{href:!0,rel:!0});var E0=i(Qa);_y=s(E0,"torch.nn.Module"),E0.forEach(t),by=s(Ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ou.forEach(t),ky=h(Eo),$t=a(Eo,"DIV",{class:!0});var Mo=i($t);T(Ka.$$.fragment,Mo),yy=h(Mo),tn=a(Mo,"P",{});var yc=i(tn);vy=s(yc,"The "),Wd=a(yc,"A",{href:!0});var M0=i(Wd);Ty=s(M0,"AlbertForTokenClassification"),M0.forEach(t),wy=s(yc," forward method, overrides the "),zp=a(yc,"CODE",{});var z0=i(zp);$y=s(z0,"__call__"),z0.forEach(t),Ay=s(yc," special method."),yc.forEach(t),Fy=h(Mo),T(fs.$$.fragment,Mo),xy=h(Mo),T(us.$$.fragment,Mo),Ey=h(Mo),T(gs.$$.fragment,Mo),Mo.forEach(t),Eo.forEach(t),Lf=h(o),on=a(o,"H2",{class:!0});var Iu=i(on);_s=a(Iu,"A",{id:!0,class:!0,href:!0});var j0=i(_s);jp=a(j0,"SPAN",{});var q0=i(jp);T(Va.$$.fragment,q0),q0.forEach(t),j0.forEach(t),My=h(Iu),qp=a(Iu,"SPAN",{});var P0=i(qp);zy=s(P0,"AlbertForQuestionAnswering"),P0.forEach(t),Iu.forEach(t),Of=h(o),Tt=a(o,"DIV",{class:!0});var zo=i(Tt);T(Ja.$$.fragment,zo),jy=h(zo),nn=a(zo,"P",{});var vc=i(nn);qy=s(vc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pp=a(vc,"CODE",{});var C0=i(Pp);Py=s(C0,"span start logits"),C0.forEach(t),Cy=s(vc," and "),Cp=a(vc,"CODE",{});var L0=i(Cp);Ly=s(L0,"span end logits"),L0.forEach(t),Oy=s(vc,")."),vc.forEach(t),Iy=h(zo),Ga=a(zo,"P",{});var Nu=i(Ga);Ny=s(Nu,"This model inherits from "),Ud=a(Nu,"A",{href:!0});var O0=i(Ud);Dy=s(O0,"PreTrainedModel"),O0.forEach(t),Sy=s(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu.forEach(t),Wy=h(zo),Xa=a(zo,"P",{});var Du=i(Xa);Uy=s(Du,"This model is also a PyTorch "),Ya=a(Du,"A",{href:!0,rel:!0});var I0=i(Ya);By=s(I0,"torch.nn.Module"),I0.forEach(t),Ry=s(Du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Du.forEach(t),Hy=h(zo),At=a(zo,"DIV",{class:!0});var jo=i(At);T(Za.$$.fragment,jo),Qy=h(jo),sn=a(jo,"P",{});var Tc=i(sn);Ky=s(Tc,"The "),Bd=a(Tc,"A",{href:!0});var N0=i(Bd);Vy=s(N0,"AlbertForQuestionAnswering"),N0.forEach(t),Jy=s(Tc," forward method, overrides the "),Lp=a(Tc,"CODE",{});var D0=i(Lp);Gy=s(D0,"__call__"),D0.forEach(t),Xy=s(Tc," special method."),Tc.forEach(t),Yy=h(jo),T(bs.$$.fragment,jo),Zy=h(jo),T(ks.$$.fragment,jo),ev=h(jo),T(ys.$$.fragment,jo),jo.forEach(t),zo.forEach(t),If=h(o),rn=a(o,"H2",{class:!0});var Su=i(rn);vs=a(Su,"A",{id:!0,class:!0,href:!0});var S0=i(vs);Op=a(S0,"SPAN",{});var W0=i(Op);T(ei.$$.fragment,W0),W0.forEach(t),S0.forEach(t),tv=h(Su),Ip=a(Su,"SPAN",{});var U0=i(Ip);ov=s(U0,"TFAlbertModel"),U0.forEach(t),Su.forEach(t),Nf=h(o),lt=a(o,"DIV",{class:!0});var eo=i(lt);T(ti.$$.fragment,eo),nv=h(eo),Np=a(eo,"P",{});var B0=i(Np);sv=s(B0,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),B0.forEach(t),rv=h(eo),oi=a(eo,"P",{});var Wu=i(oi);av=s(Wu,"This model inherits from "),Rd=a(Wu,"A",{href:!0});var R0=i(Rd);iv=s(R0,"TFPreTrainedModel"),R0.forEach(t),lv=s(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),dv=h(eo),ni=a(eo,"P",{});var Uu=i(ni);cv=s(Uu,"This model is also a "),si=a(Uu,"A",{href:!0,rel:!0});var H0=i(si);pv=s(H0,"tf.keras.Model"),H0.forEach(t),hv=s(Uu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uu.forEach(t),mv=h(eo),T(Ts.$$.fragment,eo),fv=h(eo),Rt=a(eo,"DIV",{class:!0});var Fr=i(Rt);T(ri.$$.fragment,Fr),uv=h(Fr),an=a(Fr,"P",{});var wc=i(an);gv=s(wc,"The "),Hd=a(wc,"A",{href:!0});var Q0=i(Hd);_v=s(Q0,"TFAlbertModel"),Q0.forEach(t),bv=s(wc," forward method, overrides the "),Dp=a(wc,"CODE",{});var K0=i(Dp);kv=s(K0,"__call__"),K0.forEach(t),yv=s(wc," special method."),wc.forEach(t),vv=h(Fr),T(ws.$$.fragment,Fr),Tv=h(Fr),T($s.$$.fragment,Fr),Fr.forEach(t),eo.forEach(t),Df=h(o),ln=a(o,"H2",{class:!0});var Bu=i(ln);As=a(Bu,"A",{id:!0,class:!0,href:!0});var V0=i(As);Sp=a(V0,"SPAN",{});var J0=i(Sp);T(ai.$$.fragment,J0),J0.forEach(t),V0.forEach(t),wv=h(Bu),Wp=a(Bu,"SPAN",{});var G0=i(Wp);$v=s(G0,"TFAlbertForPreTraining"),G0.forEach(t),Bu.forEach(t),Sf=h(o),dt=a(o,"DIV",{class:!0});var to=i(dt);T(ii.$$.fragment,to),Av=h(to),dn=a(to,"P",{});var $c=i(dn);Fv=s($c,"Albert Model with two heads on top for pretraining: a "),Up=a($c,"CODE",{});var X0=i(Up);xv=s(X0,"masked language modeling"),X0.forEach(t),Ev=s($c," head and a "),Bp=a($c,"CODE",{});var Y0=i(Bp);Mv=s(Y0,"sentence order prediction"),Y0.forEach(t),zv=s($c," (classification) head."),$c.forEach(t),jv=h(to),li=a(to,"P",{});var Ru=i(li);qv=s(Ru,"This model inherits from "),Qd=a(Ru,"A",{href:!0});var Z0=i(Qd);Pv=s(Z0,"TFPreTrainedModel"),Z0.forEach(t),Cv=s(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),Lv=h(to),di=a(to,"P",{});var Hu=i(di);Ov=s(Hu,"This model is also a "),ci=a(Hu,"A",{href:!0,rel:!0});var ex=i(ci);Iv=s(ex,"tf.keras.Model"),ex.forEach(t),Nv=s(Hu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hu.forEach(t),Dv=h(to),T(Fs.$$.fragment,to),Sv=h(to),Ht=a(to,"DIV",{class:!0});var xr=i(Ht);T(pi.$$.fragment,xr),Wv=h(xr),cn=a(xr,"P",{});var Ac=i(cn);Uv=s(Ac,"The "),Kd=a(Ac,"A",{href:!0});var tx=i(Kd);Bv=s(tx,"TFAlbertForPreTraining"),tx.forEach(t),Rv=s(Ac," forward method, overrides the "),Rp=a(Ac,"CODE",{});var ox=i(Rp);Hv=s(ox,"__call__"),ox.forEach(t),Qv=s(Ac," special method."),Ac.forEach(t),Kv=h(xr),T(xs.$$.fragment,xr),Vv=h(xr),T(Es.$$.fragment,xr),xr.forEach(t),to.forEach(t),Wf=h(o),pn=a(o,"H2",{class:!0});var Qu=i(pn);Ms=a(Qu,"A",{id:!0,class:!0,href:!0});var nx=i(Ms);Hp=a(nx,"SPAN",{});var sx=i(Hp);T(hi.$$.fragment,sx),sx.forEach(t),nx.forEach(t),Jv=h(Qu),Qp=a(Qu,"SPAN",{});var rx=i(Qp);Gv=s(rx,"TFAlbertForMaskedLM"),rx.forEach(t),Qu.forEach(t),Uf=h(o),ct=a(o,"DIV",{class:!0});var oo=i(ct);T(mi.$$.fragment,oo),Xv=h(oo),fi=a(oo,"P",{});var Ku=i(fi);Yv=s(Ku,"Albert Model with a "),Kp=a(Ku,"CODE",{});var ax=i(Kp);Zv=s(ax,"language modeling"),ax.forEach(t),eT=s(Ku," head on top."),Ku.forEach(t),tT=h(oo),ui=a(oo,"P",{});var Vu=i(ui);oT=s(Vu,"This model inherits from "),Vd=a(Vu,"A",{href:!0});var ix=i(Vd);nT=s(ix,"TFPreTrainedModel"),ix.forEach(t),sT=s(Vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu.forEach(t),rT=h(oo),gi=a(oo,"P",{});var Ju=i(gi);aT=s(Ju,"This model is also a "),_i=a(Ju,"A",{href:!0,rel:!0});var lx=i(_i);iT=s(lx,"tf.keras.Model"),lx.forEach(t),lT=s(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),dT=h(oo),T(zs.$$.fragment,oo),cT=h(oo),Ft=a(oo,"DIV",{class:!0});var qo=i(Ft);T(bi.$$.fragment,qo),pT=h(qo),hn=a(qo,"P",{});var Fc=i(hn);hT=s(Fc,"The "),Jd=a(Fc,"A",{href:!0});var dx=i(Jd);mT=s(dx,"TFAlbertForMaskedLM"),dx.forEach(t),fT=s(Fc," forward method, overrides the "),Vp=a(Fc,"CODE",{});var cx=i(Vp);uT=s(cx,"__call__"),cx.forEach(t),gT=s(Fc," special method."),Fc.forEach(t),_T=h(qo),T(js.$$.fragment,qo),bT=h(qo),T(qs.$$.fragment,qo),kT=h(qo),T(Ps.$$.fragment,qo),qo.forEach(t),oo.forEach(t),Bf=h(o),mn=a(o,"H2",{class:!0});var Gu=i(mn);Cs=a(Gu,"A",{id:!0,class:!0,href:!0});var px=i(Cs);Jp=a(px,"SPAN",{});var hx=i(Jp);T(ki.$$.fragment,hx),hx.forEach(t),px.forEach(t),yT=h(Gu),Gp=a(Gu,"SPAN",{});var mx=i(Gp);vT=s(mx,"TFAlbertForSequenceClassification"),mx.forEach(t),Gu.forEach(t),Rf=h(o),pt=a(o,"DIV",{class:!0});var no=i(pt);T(yi.$$.fragment,no),TT=h(no),Xp=a(no,"P",{});var fx=i(Xp);wT=s(fx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fx.forEach(t),$T=h(no),vi=a(no,"P",{});var Xu=i(vi);AT=s(Xu,"This model inherits from "),Gd=a(Xu,"A",{href:!0});var ux=i(Gd);FT=s(ux,"TFPreTrainedModel"),ux.forEach(t),xT=s(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),ET=h(no),Ti=a(no,"P",{});var Yu=i(Ti);MT=s(Yu,"This model is also a "),wi=a(Yu,"A",{href:!0,rel:!0});var gx=i(wi);zT=s(gx,"tf.keras.Model"),gx.forEach(t),jT=s(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),qT=h(no),T(Ls.$$.fragment,no),PT=h(no),xt=a(no,"DIV",{class:!0});var Po=i(xt);T($i.$$.fragment,Po),CT=h(Po),fn=a(Po,"P",{});var xc=i(fn);LT=s(xc,"The "),Xd=a(xc,"A",{href:!0});var _x=i(Xd);OT=s(_x,"TFAlbertForSequenceClassification"),_x.forEach(t),IT=s(xc," forward method, overrides the "),Yp=a(xc,"CODE",{});var bx=i(Yp);NT=s(bx,"__call__"),bx.forEach(t),DT=s(xc," special method."),xc.forEach(t),ST=h(Po),T(Os.$$.fragment,Po),WT=h(Po),T(Is.$$.fragment,Po),UT=h(Po),T(Ns.$$.fragment,Po),Po.forEach(t),no.forEach(t),Hf=h(o),un=a(o,"H2",{class:!0});var Zu=i(un);Ds=a(Zu,"A",{id:!0,class:!0,href:!0});var kx=i(Ds);Zp=a(kx,"SPAN",{});var yx=i(Zp);T(Ai.$$.fragment,yx),yx.forEach(t),kx.forEach(t),BT=h(Zu),eh=a(Zu,"SPAN",{});var vx=i(eh);RT=s(vx,"TFAlbertForMultipleChoice"),vx.forEach(t),Zu.forEach(t),Qf=h(o),ht=a(o,"DIV",{class:!0});var so=i(ht);T(Fi.$$.fragment,so),HT=h(so),th=a(so,"P",{});var Tx=i(th);QT=s(Tx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Tx.forEach(t),KT=h(so),xi=a(so,"P",{});var eg=i(xi);VT=s(eg,"This model inherits from "),Yd=a(eg,"A",{href:!0});var wx=i(Yd);JT=s(wx,"TFPreTrainedModel"),wx.forEach(t),GT=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg.forEach(t),XT=h(so),Ei=a(so,"P",{});var tg=i(Ei);YT=s(tg,"This model is also a "),Mi=a(tg,"A",{href:!0,rel:!0});var $x=i(Mi);ZT=s($x,"tf.keras.Model"),$x.forEach(t),ew=s(tg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg.forEach(t),tw=h(so),T(Ss.$$.fragment,so),ow=h(so),Qt=a(so,"DIV",{class:!0});var Er=i(Qt);T(zi.$$.fragment,Er),nw=h(Er),gn=a(Er,"P",{});var Ec=i(gn);sw=s(Ec,"The "),Zd=a(Ec,"A",{href:!0});var Ax=i(Zd);rw=s(Ax,"TFAlbertForMultipleChoice"),Ax.forEach(t),aw=s(Ec," forward method, overrides the "),oh=a(Ec,"CODE",{});var Fx=i(oh);iw=s(Fx,"__call__"),Fx.forEach(t),lw=s(Ec," special method."),Ec.forEach(t),dw=h(Er),T(Ws.$$.fragment,Er),cw=h(Er),T(Us.$$.fragment,Er),Er.forEach(t),so.forEach(t),Kf=h(o),_n=a(o,"H2",{class:!0});var og=i(_n);Bs=a(og,"A",{id:!0,class:!0,href:!0});var xx=i(Bs);nh=a(xx,"SPAN",{});var Ex=i(nh);T(ji.$$.fragment,Ex),Ex.forEach(t),xx.forEach(t),pw=h(og),sh=a(og,"SPAN",{});var Mx=i(sh);hw=s(Mx,"TFAlbertForTokenClassification"),Mx.forEach(t),og.forEach(t),Vf=h(o),mt=a(o,"DIV",{class:!0});var ro=i(mt);T(qi.$$.fragment,ro),mw=h(ro),rh=a(ro,"P",{});var zx=i(rh);fw=s(zx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zx.forEach(t),uw=h(ro),Pi=a(ro,"P",{});var ng=i(Pi);gw=s(ng,"This model inherits from "),ec=a(ng,"A",{href:!0});var jx=i(ec);_w=s(jx,"TFPreTrainedModel"),jx.forEach(t),bw=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng.forEach(t),kw=h(ro),Ci=a(ro,"P",{});var sg=i(Ci);yw=s(sg,"This model is also a "),Li=a(sg,"A",{href:!0,rel:!0});var qx=i(Li);vw=s(qx,"tf.keras.Model"),qx.forEach(t),Tw=s(sg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sg.forEach(t),ww=h(ro),T(Rs.$$.fragment,ro),$w=h(ro),Et=a(ro,"DIV",{class:!0});var Co=i(Et);T(Oi.$$.fragment,Co),Aw=h(Co),bn=a(Co,"P",{});var Mc=i(bn);Fw=s(Mc,"The "),tc=a(Mc,"A",{href:!0});var Px=i(tc);xw=s(Px,"TFAlbertForTokenClassification"),Px.forEach(t),Ew=s(Mc," forward method, overrides the "),ah=a(Mc,"CODE",{});var Cx=i(ah);Mw=s(Cx,"__call__"),Cx.forEach(t),zw=s(Mc," special method."),Mc.forEach(t),jw=h(Co),T(Hs.$$.fragment,Co),qw=h(Co),T(Qs.$$.fragment,Co),Pw=h(Co),T(Ks.$$.fragment,Co),Co.forEach(t),ro.forEach(t),Jf=h(o),kn=a(o,"H2",{class:!0});var rg=i(kn);Vs=a(rg,"A",{id:!0,class:!0,href:!0});var Lx=i(Vs);ih=a(Lx,"SPAN",{});var Ox=i(ih);T(Ii.$$.fragment,Ox),Ox.forEach(t),Lx.forEach(t),Cw=h(rg),lh=a(rg,"SPAN",{});var Ix=i(lh);Lw=s(Ix,"TFAlbertForQuestionAnswering"),Ix.forEach(t),rg.forEach(t),Gf=h(o),ft=a(o,"DIV",{class:!0});var ao=i(ft);T(Ni.$$.fragment,ao),Ow=h(ao),yn=a(ao,"P",{});var zc=i(yn);Iw=s(zc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dh=a(zc,"CODE",{});var Nx=i(dh);Nw=s(Nx,"span start logits"),Nx.forEach(t),Dw=s(zc," and "),ch=a(zc,"CODE",{});var Dx=i(ch);Sw=s(Dx,"span end logits"),Dx.forEach(t),Ww=s(zc,")."),zc.forEach(t),Uw=h(ao),Di=a(ao,"P",{});var ag=i(Di);Bw=s(ag,"This model inherits from "),oc=a(ag,"A",{href:!0});var Sx=i(oc);Rw=s(Sx,"TFPreTrainedModel"),Sx.forEach(t),Hw=s(ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag.forEach(t),Qw=h(ao),Si=a(ao,"P",{});var ig=i(Si);Kw=s(ig,"This model is also a "),Wi=a(ig,"A",{href:!0,rel:!0});var Wx=i(Wi);Vw=s(Wx,"tf.keras.Model"),Wx.forEach(t),Jw=s(ig,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ig.forEach(t),Gw=h(ao),T(Js.$$.fragment,ao),Xw=h(ao),Mt=a(ao,"DIV",{class:!0});var Lo=i(Mt);T(Ui.$$.fragment,Lo),Yw=h(Lo),vn=a(Lo,"P",{});var jc=i(vn);Zw=s(jc,"The "),nc=a(jc,"A",{href:!0});var Ux=i(nc);e$=s(Ux,"TFAlbertForQuestionAnswering"),Ux.forEach(t),t$=s(jc," forward method, overrides the "),ph=a(jc,"CODE",{});var Bx=i(ph);o$=s(Bx,"__call__"),Bx.forEach(t),n$=s(jc," special method."),jc.forEach(t),s$=h(Lo),T(Gs.$$.fragment,Lo),r$=h(Lo),T(Xs.$$.fragment,Lo),a$=h(Lo),T(Ys.$$.fragment,Lo),Lo.forEach(t),ao.forEach(t),Xf=h(o),Tn=a(o,"H2",{class:!0});var lg=i(Tn);Zs=a(lg,"A",{id:!0,class:!0,href:!0});var Rx=i(Zs);hh=a(Rx,"SPAN",{});var Hx=i(hh);T(Bi.$$.fragment,Hx),Hx.forEach(t),Rx.forEach(t),i$=h(lg),mh=a(lg,"SPAN",{});var Qx=i(mh);l$=s(Qx,"FlaxAlbertModel"),Qx.forEach(t),lg.forEach(t),Yf=h(o),et=a(o,"DIV",{class:!0});var jt=i(et);T(Ri.$$.fragment,jt),d$=h(jt),fh=a(jt,"P",{});var Kx=i(fh);c$=s(Kx,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Kx.forEach(t),p$=h(jt),Hi=a(jt,"P",{});var dg=i(Hi);h$=s(dg,"This model inherits from "),sc=a(dg,"A",{href:!0});var Vx=i(sc);m$=s(Vx,"FlaxPreTrainedModel"),Vx.forEach(t),f$=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),u$=h(jt),Qi=a(jt,"P",{});var cg=i(Qi);g$=s(cg,"This model is also a Flax Linen "),Ki=a(cg,"A",{href:!0,rel:!0});var Jx=i(Ki);_$=s(Jx,"flax.linen.Module"),Jx.forEach(t),b$=s(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),k$=h(jt),uh=a(jt,"P",{});var Gx=i(uh);y$=s(Gx,"Finally, this model supports inherent JAX features such as:"),Gx.forEach(t),v$=h(jt),lo=a(jt,"UL",{});var Mr=i(lo);gh=a(Mr,"LI",{});var Xx=i(gh);Vi=a(Xx,"A",{href:!0,rel:!0});var Yx=i(Vi);T$=s(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Xx.forEach(t),w$=h(Mr),_h=a(Mr,"LI",{});var Zx=i(_h);Ji=a(Zx,"A",{href:!0,rel:!0});var eE=i(Ji);$$=s(eE,"Automatic Differentiation"),eE.forEach(t),Zx.forEach(t),A$=h(Mr),bh=a(Mr,"LI",{});var tE=i(bh);Gi=a(tE,"A",{href:!0,rel:!0});var oE=i(Gi);F$=s(oE,"Vectorization"),oE.forEach(t),tE.forEach(t),x$=h(Mr),kh=a(Mr,"LI",{});var nE=i(kh);Xi=a(nE,"A",{href:!0,rel:!0});var sE=i(Xi);E$=s(sE,"Parallelization"),sE.forEach(t),nE.forEach(t),Mr.forEach(t),M$=h(jt),Kt=a(jt,"DIV",{class:!0});var zr=i(Kt);T(Yi.$$.fragment,zr),z$=h(zr),wn=a(zr,"P",{});var qc=i(wn);j$=s(qc,"The "),yh=a(qc,"CODE",{});var rE=i(yh);q$=s(rE,"FlaxAlbertPreTrainedModel"),rE.forEach(t),P$=s(qc," forward method, overrides the "),vh=a(qc,"CODE",{});var aE=i(vh);C$=s(aE,"__call__"),aE.forEach(t),L$=s(qc," special method."),qc.forEach(t),O$=h(zr),T(er.$$.fragment,zr),I$=h(zr),T(tr.$$.fragment,zr),zr.forEach(t),jt.forEach(t),Zf=h(o),$n=a(o,"H2",{class:!0});var pg=i($n);or=a(pg,"A",{id:!0,class:!0,href:!0});var iE=i(or);Th=a(iE,"SPAN",{});var lE=i(Th);T(Zi.$$.fragment,lE),lE.forEach(t),iE.forEach(t),N$=h(pg),wh=a(pg,"SPAN",{});var dE=i(wh);D$=s(dE,"FlaxAlbertForPreTraining"),dE.forEach(t),pg.forEach(t),eu=h(o),tt=a(o,"DIV",{class:!0});var qt=i(tt);T(el.$$.fragment,qt),S$=h(qt),An=a(qt,"P",{});var Pc=i(An);W$=s(Pc,"Albert Model with two heads on top as done during the pretraining: a "),$h=a(Pc,"CODE",{});var cE=i($h);U$=s(cE,"masked language modeling"),cE.forEach(t),B$=s(Pc,` head and a
`),Ah=a(Pc,"CODE",{});var pE=i(Ah);R$=s(pE,"sentence order prediction (classification)"),pE.forEach(t),H$=s(Pc," head."),Pc.forEach(t),Q$=h(qt),tl=a(qt,"P",{});var hg=i(tl);K$=s(hg,"This model inherits from "),rc=a(hg,"A",{href:!0});var hE=i(rc);V$=s(hE,"FlaxPreTrainedModel"),hE.forEach(t),J$=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),G$=h(qt),ol=a(qt,"P",{});var mg=i(ol);X$=s(mg,"This model is also a Flax Linen "),nl=a(mg,"A",{href:!0,rel:!0});var mE=i(nl);Y$=s(mE,"flax.linen.Module"),mE.forEach(t),Z$=s(mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mg.forEach(t),e1=h(qt),Fh=a(qt,"P",{});var fE=i(Fh);t1=s(fE,"Finally, this model supports inherent JAX features such as:"),fE.forEach(t),o1=h(qt),co=a(qt,"UL",{});var jr=i(co);xh=a(jr,"LI",{});var uE=i(xh);sl=a(uE,"A",{href:!0,rel:!0});var gE=i(sl);n1=s(gE,"Just-In-Time (JIT) compilation"),gE.forEach(t),uE.forEach(t),s1=h(jr),Eh=a(jr,"LI",{});var _E=i(Eh);rl=a(_E,"A",{href:!0,rel:!0});var bE=i(rl);r1=s(bE,"Automatic Differentiation"),bE.forEach(t),_E.forEach(t),a1=h(jr),Mh=a(jr,"LI",{});var kE=i(Mh);al=a(kE,"A",{href:!0,rel:!0});var yE=i(al);i1=s(yE,"Vectorization"),yE.forEach(t),kE.forEach(t),l1=h(jr),zh=a(jr,"LI",{});var vE=i(zh);il=a(vE,"A",{href:!0,rel:!0});var TE=i(il);d1=s(TE,"Parallelization"),TE.forEach(t),vE.forEach(t),jr.forEach(t),c1=h(qt),Vt=a(qt,"DIV",{class:!0});var qr=i(Vt);T(ll.$$.fragment,qr),p1=h(qr),Fn=a(qr,"P",{});var Cc=i(Fn);h1=s(Cc,"The "),jh=a(Cc,"CODE",{});var wE=i(jh);m1=s(wE,"FlaxAlbertPreTrainedModel"),wE.forEach(t),f1=s(Cc," forward method, overrides the "),qh=a(Cc,"CODE",{});var $E=i(qh);u1=s($E,"__call__"),$E.forEach(t),g1=s(Cc," special method."),Cc.forEach(t),_1=h(qr),T(nr.$$.fragment,qr),b1=h(qr),T(sr.$$.fragment,qr),qr.forEach(t),qt.forEach(t),tu=h(o),xn=a(o,"H2",{class:!0});var fg=i(xn);rr=a(fg,"A",{id:!0,class:!0,href:!0});var AE=i(rr);Ph=a(AE,"SPAN",{});var FE=i(Ph);T(dl.$$.fragment,FE),FE.forEach(t),AE.forEach(t),k1=h(fg),Ch=a(fg,"SPAN",{});var xE=i(Ch);y1=s(xE,"FlaxAlbertForMaskedLM"),xE.forEach(t),fg.forEach(t),ou=h(o),ot=a(o,"DIV",{class:!0});var Pt=i(ot);T(cl.$$.fragment,Pt),v1=h(Pt),pl=a(Pt,"P",{});var ug=i(pl);T1=s(ug,"Albert Model with a "),Lh=a(ug,"CODE",{});var EE=i(Lh);w1=s(EE,"language modeling"),EE.forEach(t),$1=s(ug," head on top."),ug.forEach(t),A1=h(Pt),hl=a(Pt,"P",{});var gg=i(hl);F1=s(gg,"This model inherits from "),ac=a(gg,"A",{href:!0});var ME=i(ac);x1=s(ME,"FlaxPreTrainedModel"),ME.forEach(t),E1=s(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),M1=h(Pt),ml=a(Pt,"P",{});var _g=i(ml);z1=s(_g,"This model is also a Flax Linen "),fl=a(_g,"A",{href:!0,rel:!0});var zE=i(fl);j1=s(zE,"flax.linen.Module"),zE.forEach(t),q1=s(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),P1=h(Pt),Oh=a(Pt,"P",{});var jE=i(Oh);C1=s(jE,"Finally, this model supports inherent JAX features such as:"),jE.forEach(t),L1=h(Pt),po=a(Pt,"UL",{});var Pr=i(po);Ih=a(Pr,"LI",{});var qE=i(Ih);ul=a(qE,"A",{href:!0,rel:!0});var PE=i(ul);O1=s(PE,"Just-In-Time (JIT) compilation"),PE.forEach(t),qE.forEach(t),I1=h(Pr),Nh=a(Pr,"LI",{});var CE=i(Nh);gl=a(CE,"A",{href:!0,rel:!0});var LE=i(gl);N1=s(LE,"Automatic Differentiation"),LE.forEach(t),CE.forEach(t),D1=h(Pr),Dh=a(Pr,"LI",{});var OE=i(Dh);_l=a(OE,"A",{href:!0,rel:!0});var IE=i(_l);S1=s(IE,"Vectorization"),IE.forEach(t),OE.forEach(t),W1=h(Pr),Sh=a(Pr,"LI",{});var NE=i(Sh);bl=a(NE,"A",{href:!0,rel:!0});var DE=i(bl);U1=s(DE,"Parallelization"),DE.forEach(t),NE.forEach(t),Pr.forEach(t),B1=h(Pt),Jt=a(Pt,"DIV",{class:!0});var Cr=i(Jt);T(kl.$$.fragment,Cr),R1=h(Cr),En=a(Cr,"P",{});var Lc=i(En);H1=s(Lc,"The "),Wh=a(Lc,"CODE",{});var SE=i(Wh);Q1=s(SE,"FlaxAlbertPreTrainedModel"),SE.forEach(t),K1=s(Lc," forward method, overrides the "),Uh=a(Lc,"CODE",{});var WE=i(Uh);V1=s(WE,"__call__"),WE.forEach(t),J1=s(Lc," special method."),Lc.forEach(t),G1=h(Cr),T(ar.$$.fragment,Cr),X1=h(Cr),T(ir.$$.fragment,Cr),Cr.forEach(t),Pt.forEach(t),nu=h(o),Mn=a(o,"H2",{class:!0});var bg=i(Mn);lr=a(bg,"A",{id:!0,class:!0,href:!0});var UE=i(lr);Bh=a(UE,"SPAN",{});var BE=i(Bh);T(yl.$$.fragment,BE),BE.forEach(t),UE.forEach(t),Y1=h(bg),Rh=a(bg,"SPAN",{});var RE=i(Rh);Z1=s(RE,"FlaxAlbertForSequenceClassification"),RE.forEach(t),bg.forEach(t),su=h(o),nt=a(o,"DIV",{class:!0});var Ct=i(nt);T(vl.$$.fragment,Ct),e2=h(Ct),Hh=a(Ct,"P",{});var HE=i(Hh);t2=s(HE,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),HE.forEach(t),o2=h(Ct),Tl=a(Ct,"P",{});var kg=i(Tl);n2=s(kg,"This model inherits from "),ic=a(kg,"A",{href:!0});var QE=i(ic);s2=s(QE,"FlaxPreTrainedModel"),QE.forEach(t),r2=s(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kg.forEach(t),a2=h(Ct),wl=a(Ct,"P",{});var yg=i(wl);i2=s(yg,"This model is also a Flax Linen "),$l=a(yg,"A",{href:!0,rel:!0});var KE=i($l);l2=s(KE,"flax.linen.Module"),KE.forEach(t),d2=s(yg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yg.forEach(t),c2=h(Ct),Qh=a(Ct,"P",{});var VE=i(Qh);p2=s(VE,"Finally, this model supports inherent JAX features such as:"),VE.forEach(t),h2=h(Ct),ho=a(Ct,"UL",{});var Lr=i(ho);Kh=a(Lr,"LI",{});var JE=i(Kh);Al=a(JE,"A",{href:!0,rel:!0});var GE=i(Al);m2=s(GE,"Just-In-Time (JIT) compilation"),GE.forEach(t),JE.forEach(t),f2=h(Lr),Vh=a(Lr,"LI",{});var XE=i(Vh);Fl=a(XE,"A",{href:!0,rel:!0});var YE=i(Fl);u2=s(YE,"Automatic Differentiation"),YE.forEach(t),XE.forEach(t),g2=h(Lr),Jh=a(Lr,"LI",{});var ZE=i(Jh);xl=a(ZE,"A",{href:!0,rel:!0});var eM=i(xl);_2=s(eM,"Vectorization"),eM.forEach(t),ZE.forEach(t),b2=h(Lr),Gh=a(Lr,"LI",{});var tM=i(Gh);El=a(tM,"A",{href:!0,rel:!0});var oM=i(El);k2=s(oM,"Parallelization"),oM.forEach(t),tM.forEach(t),Lr.forEach(t),y2=h(Ct),Gt=a(Ct,"DIV",{class:!0});var Or=i(Gt);T(Ml.$$.fragment,Or),v2=h(Or),zn=a(Or,"P",{});var Oc=i(zn);T2=s(Oc,"The "),Xh=a(Oc,"CODE",{});var nM=i(Xh);w2=s(nM,"FlaxAlbertPreTrainedModel"),nM.forEach(t),$2=s(Oc," forward method, overrides the "),Yh=a(Oc,"CODE",{});var sM=i(Yh);A2=s(sM,"__call__"),sM.forEach(t),F2=s(Oc," special method."),Oc.forEach(t),x2=h(Or),T(dr.$$.fragment,Or),E2=h(Or),T(cr.$$.fragment,Or),Or.forEach(t),Ct.forEach(t),ru=h(o),jn=a(o,"H2",{class:!0});var vg=i(jn);pr=a(vg,"A",{id:!0,class:!0,href:!0});var rM=i(pr);Zh=a(rM,"SPAN",{});var aM=i(Zh);T(zl.$$.fragment,aM),aM.forEach(t),rM.forEach(t),M2=h(vg),em=a(vg,"SPAN",{});var iM=i(em);z2=s(iM,"FlaxAlbertForMultipleChoice"),iM.forEach(t),vg.forEach(t),au=h(o),st=a(o,"DIV",{class:!0});var Lt=i(st);T(jl.$$.fragment,Lt),j2=h(Lt),tm=a(Lt,"P",{});var lM=i(tm);q2=s(lM,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lM.forEach(t),P2=h(Lt),ql=a(Lt,"P",{});var Tg=i(ql);C2=s(Tg,"This model inherits from "),lc=a(Tg,"A",{href:!0});var dM=i(lc);L2=s(dM,"FlaxPreTrainedModel"),dM.forEach(t),O2=s(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tg.forEach(t),I2=h(Lt),Pl=a(Lt,"P",{});var wg=i(Pl);N2=s(wg,"This model is also a Flax Linen "),Cl=a(wg,"A",{href:!0,rel:!0});var cM=i(Cl);D2=s(cM,"flax.linen.Module"),cM.forEach(t),S2=s(wg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wg.forEach(t),W2=h(Lt),om=a(Lt,"P",{});var pM=i(om);U2=s(pM,"Finally, this model supports inherent JAX features such as:"),pM.forEach(t),B2=h(Lt),mo=a(Lt,"UL",{});var Ir=i(mo);nm=a(Ir,"LI",{});var hM=i(nm);Ll=a(hM,"A",{href:!0,rel:!0});var mM=i(Ll);R2=s(mM,"Just-In-Time (JIT) compilation"),mM.forEach(t),hM.forEach(t),H2=h(Ir),sm=a(Ir,"LI",{});var fM=i(sm);Ol=a(fM,"A",{href:!0,rel:!0});var uM=i(Ol);Q2=s(uM,"Automatic Differentiation"),uM.forEach(t),fM.forEach(t),K2=h(Ir),rm=a(Ir,"LI",{});var gM=i(rm);Il=a(gM,"A",{href:!0,rel:!0});var _M=i(Il);V2=s(_M,"Vectorization"),_M.forEach(t),gM.forEach(t),J2=h(Ir),am=a(Ir,"LI",{});var bM=i(am);Nl=a(bM,"A",{href:!0,rel:!0});var kM=i(Nl);G2=s(kM,"Parallelization"),kM.forEach(t),bM.forEach(t),Ir.forEach(t),X2=h(Lt),Xt=a(Lt,"DIV",{class:!0});var Nr=i(Xt);T(Dl.$$.fragment,Nr),Y2=h(Nr),qn=a(Nr,"P",{});var Ic=i(qn);Z2=s(Ic,"The "),im=a(Ic,"CODE",{});var yM=i(im);eA=s(yM,"FlaxAlbertPreTrainedModel"),yM.forEach(t),tA=s(Ic," forward method, overrides the "),lm=a(Ic,"CODE",{});var vM=i(lm);oA=s(vM,"__call__"),vM.forEach(t),nA=s(Ic," special method."),Ic.forEach(t),sA=h(Nr),T(hr.$$.fragment,Nr),rA=h(Nr),T(mr.$$.fragment,Nr),Nr.forEach(t),Lt.forEach(t),iu=h(o),Pn=a(o,"H2",{class:!0});var $g=i(Pn);fr=a($g,"A",{id:!0,class:!0,href:!0});var TM=i(fr);dm=a(TM,"SPAN",{});var wM=i(dm);T(Sl.$$.fragment,wM),wM.forEach(t),TM.forEach(t),aA=h($g),cm=a($g,"SPAN",{});var $M=i(cm);iA=s($M,"FlaxAlbertForTokenClassification"),$M.forEach(t),$g.forEach(t),lu=h(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);T(Wl.$$.fragment,Ot),lA=h(Ot),pm=a(Ot,"P",{});var AM=i(pm);dA=s(AM,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),AM.forEach(t),cA=h(Ot),Ul=a(Ot,"P",{});var Ag=i(Ul);pA=s(Ag,"This model inherits from "),dc=a(Ag,"A",{href:!0});var FM=i(dc);hA=s(FM,"FlaxPreTrainedModel"),FM.forEach(t),mA=s(Ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ag.forEach(t),fA=h(Ot),Bl=a(Ot,"P",{});var Fg=i(Bl);uA=s(Fg,"This model is also a Flax Linen "),Rl=a(Fg,"A",{href:!0,rel:!0});var xM=i(Rl);gA=s(xM,"flax.linen.Module"),xM.forEach(t),_A=s(Fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fg.forEach(t),bA=h(Ot),hm=a(Ot,"P",{});var EM=i(hm);kA=s(EM,"Finally, this model supports inherent JAX features such as:"),EM.forEach(t),yA=h(Ot),fo=a(Ot,"UL",{});var Dr=i(fo);mm=a(Dr,"LI",{});var MM=i(mm);Hl=a(MM,"A",{href:!0,rel:!0});var zM=i(Hl);vA=s(zM,"Just-In-Time (JIT) compilation"),zM.forEach(t),MM.forEach(t),TA=h(Dr),fm=a(Dr,"LI",{});var jM=i(fm);Ql=a(jM,"A",{href:!0,rel:!0});var qM=i(Ql);wA=s(qM,"Automatic Differentiation"),qM.forEach(t),jM.forEach(t),$A=h(Dr),um=a(Dr,"LI",{});var PM=i(um);Kl=a(PM,"A",{href:!0,rel:!0});var CM=i(Kl);AA=s(CM,"Vectorization"),CM.forEach(t),PM.forEach(t),FA=h(Dr),gm=a(Dr,"LI",{});var LM=i(gm);Vl=a(LM,"A",{href:!0,rel:!0});var OM=i(Vl);xA=s(OM,"Parallelization"),OM.forEach(t),LM.forEach(t),Dr.forEach(t),EA=h(Ot),Yt=a(Ot,"DIV",{class:!0});var Sr=i(Yt);T(Jl.$$.fragment,Sr),MA=h(Sr),Cn=a(Sr,"P",{});var Nc=i(Cn);zA=s(Nc,"The "),_m=a(Nc,"CODE",{});var IM=i(_m);jA=s(IM,"FlaxAlbertPreTrainedModel"),IM.forEach(t),qA=s(Nc," forward method, overrides the "),bm=a(Nc,"CODE",{});var NM=i(bm);PA=s(NM,"__call__"),NM.forEach(t),CA=s(Nc," special method."),Nc.forEach(t),LA=h(Sr),T(ur.$$.fragment,Sr),OA=h(Sr),T(gr.$$.fragment,Sr),Sr.forEach(t),Ot.forEach(t),du=h(o),Ln=a(o,"H2",{class:!0});var xg=i(Ln);_r=a(xg,"A",{id:!0,class:!0,href:!0});var DM=i(_r);km=a(DM,"SPAN",{});var SM=i(km);T(Gl.$$.fragment,SM),SM.forEach(t),DM.forEach(t),IA=h(xg),ym=a(xg,"SPAN",{});var WM=i(ym);NA=s(WM,"FlaxAlbertForQuestionAnswering"),WM.forEach(t),xg.forEach(t),cu=h(o),at=a(o,"DIV",{class:!0});var It=i(at);T(Xl.$$.fragment,It),DA=h(It),On=a(It,"P",{});var Dc=i(On);SA=s(Dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vm=a(Dc,"CODE",{});var UM=i(vm);WA=s(UM,"span start logits"),UM.forEach(t),UA=s(Dc," and "),Tm=a(Dc,"CODE",{});var BM=i(Tm);BA=s(BM,"span end logits"),BM.forEach(t),RA=s(Dc,")."),Dc.forEach(t),HA=h(It),Yl=a(It,"P",{});var Eg=i(Yl);QA=s(Eg,"This model inherits from "),cc=a(Eg,"A",{href:!0});var RM=i(cc);KA=s(RM,"FlaxPreTrainedModel"),RM.forEach(t),VA=s(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eg.forEach(t),JA=h(It),Zl=a(It,"P",{});var Mg=i(Zl);GA=s(Mg,"This model is also a Flax Linen "),ed=a(Mg,"A",{href:!0,rel:!0});var HM=i(ed);XA=s(HM,"flax.linen.Module"),HM.forEach(t),YA=s(Mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mg.forEach(t),ZA=h(It),wm=a(It,"P",{});var QM=i(wm);eF=s(QM,"Finally, this model supports inherent JAX features such as:"),QM.forEach(t),tF=h(It),uo=a(It,"UL",{});var Wr=i(uo);$m=a(Wr,"LI",{});var KM=i($m);td=a(KM,"A",{href:!0,rel:!0});var VM=i(td);oF=s(VM,"Just-In-Time (JIT) compilation"),VM.forEach(t),KM.forEach(t),nF=h(Wr),Am=a(Wr,"LI",{});var JM=i(Am);od=a(JM,"A",{href:!0,rel:!0});var GM=i(od);sF=s(GM,"Automatic Differentiation"),GM.forEach(t),JM.forEach(t),rF=h(Wr),Fm=a(Wr,"LI",{});var XM=i(Fm);nd=a(XM,"A",{href:!0,rel:!0});var YM=i(nd);aF=s(YM,"Vectorization"),YM.forEach(t),XM.forEach(t),iF=h(Wr),xm=a(Wr,"LI",{});var ZM=i(xm);sd=a(ZM,"A",{href:!0,rel:!0});var ez=i(sd);lF=s(ez,"Parallelization"),ez.forEach(t),ZM.forEach(t),Wr.forEach(t),dF=h(It),Zt=a(It,"DIV",{class:!0});var Ur=i(Zt);T(rd.$$.fragment,Ur),cF=h(Ur),In=a(Ur,"P",{});var Sc=i(In);pF=s(Sc,"The "),Em=a(Sc,"CODE",{});var tz=i(Em);hF=s(tz,"FlaxAlbertPreTrainedModel"),tz.forEach(t),mF=s(Sc," forward method, overrides the "),Mm=a(Sc,"CODE",{});var oz=i(Mm);fF=s(oz,"__call__"),oz.forEach(t),uF=s(Sc," special method."),Sc.forEach(t),gF=h(Ur),T(br.$$.fragment,Ur),_F=h(Ur),T(kr.$$.fragment,Ur),Ur.forEach(t),It.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_4)),u(f,"id","albert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#albert"),u(c,"class","relative group"),u(se,"id","overview"),u(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(se,"href","#overview"),u(W,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1909.11942"),u(ae,"rel","nofollow"),u(R,"href","https://huggingface.co/lysandre"),u(R,"rel","nofollow"),u(P,"href","https://huggingface.co/kamalkraj"),u(P,"rel","nofollow"),u(ie,"href","https://github.com/google-research/ALBERT"),u(ie,"rel","nofollow"),u(Z,"id","transformers.AlbertConfig"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.AlbertConfig"),u(Ne,"class","relative group"),u(Ue,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel"),u(Be,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel"),u(ee,"href","https://huggingface.co/albert-xxlarge-v2"),u(ee,"rel","nofollow"),u(kd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(yd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Un,"id","transformers.AlbertTokenizer"),u(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Un,"href","#transformers.AlbertTokenizer"),u(Io,"class","relative group"),u(Qr,"href","https://github.com/google/sentencepiece"),u(Qr,"rel","nofollow"),u(vd,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.AlbertTokenizerFast"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.AlbertTokenizerFast"),u(Do,"class","relative group"),u(oa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(oa,"rel","nofollow"),u(Ad,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(So,"class","relative group"),u(Ed,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForPreTraining"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Md,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertModel"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertModel"),u(Bo,"class","relative group"),u(zd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ua,"rel","nofollow"),u(jd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertModel"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.AlbertForPreTraining"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.AlbertForPreTraining"),u(Ho,"class","relative group"),u(qd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(va,"rel","nofollow"),u(Pd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForMaskedLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForMaskedLM"),u(Vo,"class","relative group"),u(Cd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ea,"rel","nofollow"),u(Ld,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.AlbertForSequenceClassification"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.AlbertForSequenceClassification"),u(Go,"class","relative group"),u(Od,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ca,"rel","nofollow"),u(Id,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cs,"id","transformers.AlbertForMultipleChoice"),u(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cs,"href","#transformers.AlbertForMultipleChoice"),u(Yo,"class","relative group"),u(Nd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sa,"rel","nofollow"),u(Dd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.AlbertForTokenClassification"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.AlbertForTokenClassification"),u(en,"class","relative group"),u(Sd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qa,"rel","nofollow"),u(Wd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForTokenClassification"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.AlbertForQuestionAnswering"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.AlbertForQuestionAnswering"),u(on,"class","relative group"),u(Ud,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ya,"rel","nofollow"),u(Bd,"href","/docs/transformers/main/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vs,"id","transformers.TFAlbertModel"),u(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vs,"href","#transformers.TFAlbertModel"),u(rn,"class","relative group"),u(Rd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(si,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(si,"rel","nofollow"),u(Hd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertModel"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.TFAlbertForPreTraining"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.TFAlbertForPreTraining"),u(ln,"class","relative group"),u(Qd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ci,"rel","nofollow"),u(Kd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFAlbertForMaskedLM"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFAlbertForMaskedLM"),u(pn,"class","relative group"),u(Vd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(_i,"rel","nofollow"),u(Jd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.TFAlbertForSequenceClassification"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.TFAlbertForSequenceClassification"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(wi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(wi,"rel","nofollow"),u(Xd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.TFAlbertForMultipleChoice"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.TFAlbertForMultipleChoice"),u(un,"class","relative group"),u(Yd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Mi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Mi,"rel","nofollow"),u(Zd,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.TFAlbertForTokenClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.TFAlbertForTokenClassification"),u(_n,"class","relative group"),u(ec,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Li,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Li,"rel","nofollow"),u(tc,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.TFAlbertForQuestionAnswering"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.TFAlbertForQuestionAnswering"),u(kn,"class","relative group"),u(oc,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wi,"rel","nofollow"),u(nc,"href","/docs/transformers/main/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.FlaxAlbertModel"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.FlaxAlbertModel"),u(Tn,"class","relative group"),u(sc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ki,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xi,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(or,"id","transformers.FlaxAlbertForPreTraining"),u(or,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(or,"href","#transformers.FlaxAlbertForPreTraining"),u($n,"class","relative group"),u(rc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(nl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(al,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(il,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.FlaxAlbertForMaskedLM"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.FlaxAlbertForMaskedLM"),u(xn,"class","relative group"),u(ac,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(fl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ul,"rel","nofollow"),u(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(_l,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bl,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lr,"id","transformers.FlaxAlbertForSequenceClassification"),u(lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lr,"href","#transformers.FlaxAlbertForSequenceClassification"),u(Mn,"class","relative group"),u(ic,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u($l,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Al,"rel","nofollow"),u(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fl,"rel","nofollow"),u(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(El,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.FlaxAlbertForMultipleChoice"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.FlaxAlbertForMultipleChoice"),u(jn,"class","relative group"),u(lc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cl,"rel","nofollow"),u(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ll,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ol,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Il,"rel","nofollow"),u(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Nl,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.FlaxAlbertForTokenClassification"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.FlaxAlbertForTokenClassification"),u(Pn,"class","relative group"),u(dc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Rl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Rl,"rel","nofollow"),u(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Hl,"rel","nofollow"),u(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ql,"rel","nofollow"),u(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Kl,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vl,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.FlaxAlbertForQuestionAnswering"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(Ln,"class","relative group"),u(cc,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ed,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ed,"rel","nofollow"),u(td,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(td,"rel","nofollow"),u(od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(od,"rel","nofollow"),u(nd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nd,"rel","nofollow"),u(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sd,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,f),e(f,k),w(l,k,null),e(c,m),e(c,M),e(M,ve),_(o,ge,b),_(o,W,b),e(W,se),e(se,te),w(E,te,null),e(W,Te),e(W,Q),e(Q,we),_(o,_e,b),_(o,U,b),e(U,$e),e(U,ae),e(ae,G),e(U,Ae),_(o,be,b),_(o,B,b),e(B,me),e(me,Fe),e(B,X),e(B,fe),e(fe,xe),_(o,oe,b),_(o,q,b),e(q,L),_(o,ke,b),_(o,H,b),e(H,ue),e(ue,Ee),_(o,J,b),_(o,le,b),e(le,Me),_(o,C,b),_(o,re,b),e(re,K),e(K,ze),e(re,je),e(re,V),e(V,qe),_(o,ye,b),_(o,O,b),e(O,Pe),e(O,R),e(R,Ce),e(O,ne),e(O,P),e(P,Le),e(O,I),e(O,ie),e(ie,Oe),e(O,y),_(o,z,b),_(o,Ne,b),e(Ne,Z),e(Z,He),w(De,He,null),e(Ne,j),e(Ne,Qe),e(Qe,Ve),_(o,Ke,b),_(o,de,b),w(Se,de,null),e(de,S),e(de,N),e(N,Je),e(N,Ue),e(Ue,Y),e(N,Ge),e(N,Be),e(Be,Ie),e(N,Xe),e(N,ee),e(ee,Ye),e(N,zg),e(de,jg),e(de,Oo),e(Oo,qg),e(Oo,kd),e(kd,Pg),e(Oo,Cg),e(Oo,yd),e(yd,Lg),e(Oo,Og),e(de,Ig),w(Wn,de,null),_(o,gf,b),_(o,Io,b),e(Io,Un),e(Un,Wc),w(Br,Wc,null),e(Io,Ng),e(Io,Uc),e(Uc,Dg),_(o,_f,b),_(o,Ze,b),w(Rr,Ze,null),e(Ze,Sg),e(Ze,Hr),e(Hr,Wg),e(Hr,Qr),e(Qr,Ug),e(Hr,Bg),e(Ze,Rg),e(Ze,Kr),e(Kr,Hg),e(Kr,vd),e(vd,Qg),e(Kr,Kg),e(Ze,Vg),e(Ze,yo),w(Vr,yo,null),e(yo,Jg),e(yo,Bc),e(Bc,Gg),e(yo,Xg),e(yo,Jr),e(Jr,Td),e(Td,Yg),e(Td,Rc),e(Rc,Zg),e(Jr,e_),e(Jr,wd),e(wd,t_),e(wd,Hc),e(Hc,o_),e(Ze,n_),e(Ze,Bn),w(Gr,Bn,null),e(Bn,s_),e(Bn,Xr),e(Xr,r_),e(Xr,Qc),e(Qc,a_),e(Xr,i_),e(Ze,l_),e(Ze,Dt),w(Yr,Dt,null),e(Dt,d_),e(Dt,Kc),e(Kc,c_),e(Dt,p_),w(Rn,Dt,null),e(Dt,h_),e(Dt,No),e(No,m_),e(No,Vc),e(Vc,f_),e(No,u_),e(No,Jc),e(Jc,g_),e(No,__),e(Ze,b_),e(Ze,$d),w(Zr,$d,null),_(o,bf,b),_(o,Do,b),e(Do,Hn),e(Hn,Gc),w(ea,Gc,null),e(Do,k_),e(Do,Xc),e(Xc,y_),_(o,kf,b),_(o,Nt,b),w(ta,Nt,null),e(Nt,v_),e(Nt,io),e(io,T_),e(io,Yc),e(Yc,w_),e(io,$_),e(io,oa),e(oa,A_),e(io,F_),e(io,Ad),e(Ad,x_),e(io,E_),e(Nt,M_),e(Nt,vo),w(na,vo,null),e(vo,z_),e(vo,Zc),e(Zc,j_),e(vo,q_),e(vo,sa),e(sa,Fd),e(Fd,P_),e(Fd,ep),e(ep,C_),e(sa,L_),e(sa,xd),e(xd,O_),e(xd,tp),e(tp,I_),e(Nt,N_),e(Nt,St),w(ra,St,null),e(St,D_),e(St,op),e(op,S_),e(St,W_),w(Qn,St,null),e(St,U_),e(St,np),e(np,B_),_(o,yf,b),_(o,So,b),e(So,Kn),e(Kn,sp),w(aa,sp,null),e(So,R_),e(So,rp),e(rp,H_),_(o,vf,b),_(o,Wo,b),w(ia,Wo,null),e(Wo,Q_),e(Wo,la),e(la,K_),e(la,Ed),e(Ed,V_),e(la,J_),_(o,Tf,b),_(o,Uo,b),w(da,Uo,null),e(Uo,G_),e(Uo,ca),e(ca,X_),e(ca,Md),e(Md,Y_),e(ca,Z_),_(o,wf,b),_(o,Bo,b),e(Bo,Vn),e(Vn,ap),w(pa,ap,null),e(Bo,eb),e(Bo,ip),e(ip,tb),_(o,$f,b),_(o,gt,b),w(ha,gt,null),e(gt,ob),e(gt,lp),e(lp,nb),e(gt,sb),e(gt,ma),e(ma,rb),e(ma,zd),e(zd,ab),e(ma,ib),e(gt,lb),e(gt,fa),e(fa,db),e(fa,ua),e(ua,cb),e(fa,pb),e(gt,hb),e(gt,Wt),w(ga,Wt,null),e(Wt,mb),e(Wt,Ro),e(Ro,fb),e(Ro,jd),e(jd,ub),e(Ro,gb),e(Ro,dp),e(dp,_b),e(Ro,bb),e(Wt,kb),w(Jn,Wt,null),e(Wt,yb),w(Gn,Wt,null),_(o,Af,b),_(o,Ho,b),e(Ho,Xn),e(Xn,cp),w(_a,cp,null),e(Ho,vb),e(Ho,pp),e(pp,Tb),_(o,Ff,b),_(o,_t,b),w(ba,_t,null),e(_t,wb),e(_t,Qo),e(Qo,$b),e(Qo,hp),e(hp,Ab),e(Qo,Fb),e(Qo,mp),e(mp,xb),e(Qo,Eb),e(_t,Mb),e(_t,ka),e(ka,zb),e(ka,qd),e(qd,jb),e(ka,qb),e(_t,Pb),e(_t,ya),e(ya,Cb),e(ya,va),e(va,Lb),e(ya,Ob),e(_t,Ib),e(_t,Ut),w(Ta,Ut,null),e(Ut,Nb),e(Ut,Ko),e(Ko,Db),e(Ko,Pd),e(Pd,Sb),e(Ko,Wb),e(Ko,fp),e(fp,Ub),e(Ko,Bb),e(Ut,Rb),w(Yn,Ut,null),e(Ut,Hb),w(Zn,Ut,null),_(o,xf,b),_(o,Vo,b),e(Vo,es),e(es,up),w(wa,up,null),e(Vo,Qb),e(Vo,gp),e(gp,Kb),_(o,Ef,b),_(o,bt,b),w($a,bt,null),e(bt,Vb),e(bt,Aa),e(Aa,Jb),e(Aa,_p),e(_p,Gb),e(Aa,Xb),e(bt,Yb),e(bt,Fa),e(Fa,Zb),e(Fa,Cd),e(Cd,ek),e(Fa,tk),e(bt,ok),e(bt,xa),e(xa,nk),e(xa,Ea),e(Ea,sk),e(xa,rk),e(bt,ak),e(bt,wt),w(Ma,wt,null),e(wt,ik),e(wt,Jo),e(Jo,lk),e(Jo,Ld),e(Ld,dk),e(Jo,ck),e(Jo,bp),e(bp,pk),e(Jo,hk),e(wt,mk),w(ts,wt,null),e(wt,fk),w(os,wt,null),e(wt,uk),w(ns,wt,null),_(o,Mf,b),_(o,Go,b),e(Go,ss),e(ss,kp),w(za,kp,null),e(Go,gk),e(Go,yp),e(yp,_k),_(o,zf,b),_(o,kt,b),w(ja,kt,null),e(kt,bk),e(kt,vp),e(vp,kk),e(kt,yk),e(kt,qa),e(qa,vk),e(qa,Od),e(Od,Tk),e(qa,wk),e(kt,$k),e(kt,Pa),e(Pa,Ak),e(Pa,Ca),e(Ca,Fk),e(Pa,xk),e(kt,Ek),e(kt,it),w(La,it,null),e(it,Mk),e(it,Xo),e(Xo,zk),e(Xo,Id),e(Id,jk),e(Xo,qk),e(Xo,Tp),e(Tp,Pk),e(Xo,Ck),e(it,Lk),w(rs,it,null),e(it,Ok),w(as,it,null),e(it,Ik),w(is,it,null),e(it,Nk),w(ls,it,null),e(it,Dk),w(ds,it,null),_(o,jf,b),_(o,Yo,b),e(Yo,cs),e(cs,wp),w(Oa,wp,null),e(Yo,Sk),e(Yo,$p),e($p,Wk),_(o,qf,b),_(o,yt,b),w(Ia,yt,null),e(yt,Uk),e(yt,Ap),e(Ap,Bk),e(yt,Rk),e(yt,Na),e(Na,Hk),e(Na,Nd),e(Nd,Qk),e(Na,Kk),e(yt,Vk),e(yt,Da),e(Da,Jk),e(Da,Sa),e(Sa,Gk),e(Da,Xk),e(yt,Yk),e(yt,Bt),w(Wa,Bt,null),e(Bt,Zk),e(Bt,Zo),e(Zo,ey),e(Zo,Dd),e(Dd,ty),e(Zo,oy),e(Zo,Fp),e(Fp,ny),e(Zo,sy),e(Bt,ry),w(ps,Bt,null),e(Bt,ay),w(hs,Bt,null),_(o,Pf,b),_(o,en,b),e(en,ms),e(ms,xp),w(Ua,xp,null),e(en,iy),e(en,Ep),e(Ep,ly),_(o,Cf,b),_(o,vt,b),w(Ba,vt,null),e(vt,dy),e(vt,Mp),e(Mp,cy),e(vt,py),e(vt,Ra),e(Ra,hy),e(Ra,Sd),e(Sd,my),e(Ra,fy),e(vt,uy),e(vt,Ha),e(Ha,gy),e(Ha,Qa),e(Qa,_y),e(Ha,by),e(vt,ky),e(vt,$t),w(Ka,$t,null),e($t,yy),e($t,tn),e(tn,vy),e(tn,Wd),e(Wd,Ty),e(tn,wy),e(tn,zp),e(zp,$y),e(tn,Ay),e($t,Fy),w(fs,$t,null),e($t,xy),w(us,$t,null),e($t,Ey),w(gs,$t,null),_(o,Lf,b),_(o,on,b),e(on,_s),e(_s,jp),w(Va,jp,null),e(on,My),e(on,qp),e(qp,zy),_(o,Of,b),_(o,Tt,b),w(Ja,Tt,null),e(Tt,jy),e(Tt,nn),e(nn,qy),e(nn,Pp),e(Pp,Py),e(nn,Cy),e(nn,Cp),e(Cp,Ly),e(nn,Oy),e(Tt,Iy),e(Tt,Ga),e(Ga,Ny),e(Ga,Ud),e(Ud,Dy),e(Ga,Sy),e(Tt,Wy),e(Tt,Xa),e(Xa,Uy),e(Xa,Ya),e(Ya,By),e(Xa,Ry),e(Tt,Hy),e(Tt,At),w(Za,At,null),e(At,Qy),e(At,sn),e(sn,Ky),e(sn,Bd),e(Bd,Vy),e(sn,Jy),e(sn,Lp),e(Lp,Gy),e(sn,Xy),e(At,Yy),w(bs,At,null),e(At,Zy),w(ks,At,null),e(At,ev),w(ys,At,null),_(o,If,b),_(o,rn,b),e(rn,vs),e(vs,Op),w(ei,Op,null),e(rn,tv),e(rn,Ip),e(Ip,ov),_(o,Nf,b),_(o,lt,b),w(ti,lt,null),e(lt,nv),e(lt,Np),e(Np,sv),e(lt,rv),e(lt,oi),e(oi,av),e(oi,Rd),e(Rd,iv),e(oi,lv),e(lt,dv),e(lt,ni),e(ni,cv),e(ni,si),e(si,pv),e(ni,hv),e(lt,mv),w(Ts,lt,null),e(lt,fv),e(lt,Rt),w(ri,Rt,null),e(Rt,uv),e(Rt,an),e(an,gv),e(an,Hd),e(Hd,_v),e(an,bv),e(an,Dp),e(Dp,kv),e(an,yv),e(Rt,vv),w(ws,Rt,null),e(Rt,Tv),w($s,Rt,null),_(o,Df,b),_(o,ln,b),e(ln,As),e(As,Sp),w(ai,Sp,null),e(ln,wv),e(ln,Wp),e(Wp,$v),_(o,Sf,b),_(o,dt,b),w(ii,dt,null),e(dt,Av),e(dt,dn),e(dn,Fv),e(dn,Up),e(Up,xv),e(dn,Ev),e(dn,Bp),e(Bp,Mv),e(dn,zv),e(dt,jv),e(dt,li),e(li,qv),e(li,Qd),e(Qd,Pv),e(li,Cv),e(dt,Lv),e(dt,di),e(di,Ov),e(di,ci),e(ci,Iv),e(di,Nv),e(dt,Dv),w(Fs,dt,null),e(dt,Sv),e(dt,Ht),w(pi,Ht,null),e(Ht,Wv),e(Ht,cn),e(cn,Uv),e(cn,Kd),e(Kd,Bv),e(cn,Rv),e(cn,Rp),e(Rp,Hv),e(cn,Qv),e(Ht,Kv),w(xs,Ht,null),e(Ht,Vv),w(Es,Ht,null),_(o,Wf,b),_(o,pn,b),e(pn,Ms),e(Ms,Hp),w(hi,Hp,null),e(pn,Jv),e(pn,Qp),e(Qp,Gv),_(o,Uf,b),_(o,ct,b),w(mi,ct,null),e(ct,Xv),e(ct,fi),e(fi,Yv),e(fi,Kp),e(Kp,Zv),e(fi,eT),e(ct,tT),e(ct,ui),e(ui,oT),e(ui,Vd),e(Vd,nT),e(ui,sT),e(ct,rT),e(ct,gi),e(gi,aT),e(gi,_i),e(_i,iT),e(gi,lT),e(ct,dT),w(zs,ct,null),e(ct,cT),e(ct,Ft),w(bi,Ft,null),e(Ft,pT),e(Ft,hn),e(hn,hT),e(hn,Jd),e(Jd,mT),e(hn,fT),e(hn,Vp),e(Vp,uT),e(hn,gT),e(Ft,_T),w(js,Ft,null),e(Ft,bT),w(qs,Ft,null),e(Ft,kT),w(Ps,Ft,null),_(o,Bf,b),_(o,mn,b),e(mn,Cs),e(Cs,Jp),w(ki,Jp,null),e(mn,yT),e(mn,Gp),e(Gp,vT),_(o,Rf,b),_(o,pt,b),w(yi,pt,null),e(pt,TT),e(pt,Xp),e(Xp,wT),e(pt,$T),e(pt,vi),e(vi,AT),e(vi,Gd),e(Gd,FT),e(vi,xT),e(pt,ET),e(pt,Ti),e(Ti,MT),e(Ti,wi),e(wi,zT),e(Ti,jT),e(pt,qT),w(Ls,pt,null),e(pt,PT),e(pt,xt),w($i,xt,null),e(xt,CT),e(xt,fn),e(fn,LT),e(fn,Xd),e(Xd,OT),e(fn,IT),e(fn,Yp),e(Yp,NT),e(fn,DT),e(xt,ST),w(Os,xt,null),e(xt,WT),w(Is,xt,null),e(xt,UT),w(Ns,xt,null),_(o,Hf,b),_(o,un,b),e(un,Ds),e(Ds,Zp),w(Ai,Zp,null),e(un,BT),e(un,eh),e(eh,RT),_(o,Qf,b),_(o,ht,b),w(Fi,ht,null),e(ht,HT),e(ht,th),e(th,QT),e(ht,KT),e(ht,xi),e(xi,VT),e(xi,Yd),e(Yd,JT),e(xi,GT),e(ht,XT),e(ht,Ei),e(Ei,YT),e(Ei,Mi),e(Mi,ZT),e(Ei,ew),e(ht,tw),w(Ss,ht,null),e(ht,ow),e(ht,Qt),w(zi,Qt,null),e(Qt,nw),e(Qt,gn),e(gn,sw),e(gn,Zd),e(Zd,rw),e(gn,aw),e(gn,oh),e(oh,iw),e(gn,lw),e(Qt,dw),w(Ws,Qt,null),e(Qt,cw),w(Us,Qt,null),_(o,Kf,b),_(o,_n,b),e(_n,Bs),e(Bs,nh),w(ji,nh,null),e(_n,pw),e(_n,sh),e(sh,hw),_(o,Vf,b),_(o,mt,b),w(qi,mt,null),e(mt,mw),e(mt,rh),e(rh,fw),e(mt,uw),e(mt,Pi),e(Pi,gw),e(Pi,ec),e(ec,_w),e(Pi,bw),e(mt,kw),e(mt,Ci),e(Ci,yw),e(Ci,Li),e(Li,vw),e(Ci,Tw),e(mt,ww),w(Rs,mt,null),e(mt,$w),e(mt,Et),w(Oi,Et,null),e(Et,Aw),e(Et,bn),e(bn,Fw),e(bn,tc),e(tc,xw),e(bn,Ew),e(bn,ah),e(ah,Mw),e(bn,zw),e(Et,jw),w(Hs,Et,null),e(Et,qw),w(Qs,Et,null),e(Et,Pw),w(Ks,Et,null),_(o,Jf,b),_(o,kn,b),e(kn,Vs),e(Vs,ih),w(Ii,ih,null),e(kn,Cw),e(kn,lh),e(lh,Lw),_(o,Gf,b),_(o,ft,b),w(Ni,ft,null),e(ft,Ow),e(ft,yn),e(yn,Iw),e(yn,dh),e(dh,Nw),e(yn,Dw),e(yn,ch),e(ch,Sw),e(yn,Ww),e(ft,Uw),e(ft,Di),e(Di,Bw),e(Di,oc),e(oc,Rw),e(Di,Hw),e(ft,Qw),e(ft,Si),e(Si,Kw),e(Si,Wi),e(Wi,Vw),e(Si,Jw),e(ft,Gw),w(Js,ft,null),e(ft,Xw),e(ft,Mt),w(Ui,Mt,null),e(Mt,Yw),e(Mt,vn),e(vn,Zw),e(vn,nc),e(nc,e$),e(vn,t$),e(vn,ph),e(ph,o$),e(vn,n$),e(Mt,s$),w(Gs,Mt,null),e(Mt,r$),w(Xs,Mt,null),e(Mt,a$),w(Ys,Mt,null),_(o,Xf,b),_(o,Tn,b),e(Tn,Zs),e(Zs,hh),w(Bi,hh,null),e(Tn,i$),e(Tn,mh),e(mh,l$),_(o,Yf,b),_(o,et,b),w(Ri,et,null),e(et,d$),e(et,fh),e(fh,c$),e(et,p$),e(et,Hi),e(Hi,h$),e(Hi,sc),e(sc,m$),e(Hi,f$),e(et,u$),e(et,Qi),e(Qi,g$),e(Qi,Ki),e(Ki,_$),e(Qi,b$),e(et,k$),e(et,uh),e(uh,y$),e(et,v$),e(et,lo),e(lo,gh),e(gh,Vi),e(Vi,T$),e(lo,w$),e(lo,_h),e(_h,Ji),e(Ji,$$),e(lo,A$),e(lo,bh),e(bh,Gi),e(Gi,F$),e(lo,x$),e(lo,kh),e(kh,Xi),e(Xi,E$),e(et,M$),e(et,Kt),w(Yi,Kt,null),e(Kt,z$),e(Kt,wn),e(wn,j$),e(wn,yh),e(yh,q$),e(wn,P$),e(wn,vh),e(vh,C$),e(wn,L$),e(Kt,O$),w(er,Kt,null),e(Kt,I$),w(tr,Kt,null),_(o,Zf,b),_(o,$n,b),e($n,or),e(or,Th),w(Zi,Th,null),e($n,N$),e($n,wh),e(wh,D$),_(o,eu,b),_(o,tt,b),w(el,tt,null),e(tt,S$),e(tt,An),e(An,W$),e(An,$h),e($h,U$),e(An,B$),e(An,Ah),e(Ah,R$),e(An,H$),e(tt,Q$),e(tt,tl),e(tl,K$),e(tl,rc),e(rc,V$),e(tl,J$),e(tt,G$),e(tt,ol),e(ol,X$),e(ol,nl),e(nl,Y$),e(ol,Z$),e(tt,e1),e(tt,Fh),e(Fh,t1),e(tt,o1),e(tt,co),e(co,xh),e(xh,sl),e(sl,n1),e(co,s1),e(co,Eh),e(Eh,rl),e(rl,r1),e(co,a1),e(co,Mh),e(Mh,al),e(al,i1),e(co,l1),e(co,zh),e(zh,il),e(il,d1),e(tt,c1),e(tt,Vt),w(ll,Vt,null),e(Vt,p1),e(Vt,Fn),e(Fn,h1),e(Fn,jh),e(jh,m1),e(Fn,f1),e(Fn,qh),e(qh,u1),e(Fn,g1),e(Vt,_1),w(nr,Vt,null),e(Vt,b1),w(sr,Vt,null),_(o,tu,b),_(o,xn,b),e(xn,rr),e(rr,Ph),w(dl,Ph,null),e(xn,k1),e(xn,Ch),e(Ch,y1),_(o,ou,b),_(o,ot,b),w(cl,ot,null),e(ot,v1),e(ot,pl),e(pl,T1),e(pl,Lh),e(Lh,w1),e(pl,$1),e(ot,A1),e(ot,hl),e(hl,F1),e(hl,ac),e(ac,x1),e(hl,E1),e(ot,M1),e(ot,ml),e(ml,z1),e(ml,fl),e(fl,j1),e(ml,q1),e(ot,P1),e(ot,Oh),e(Oh,C1),e(ot,L1),e(ot,po),e(po,Ih),e(Ih,ul),e(ul,O1),e(po,I1),e(po,Nh),e(Nh,gl),e(gl,N1),e(po,D1),e(po,Dh),e(Dh,_l),e(_l,S1),e(po,W1),e(po,Sh),e(Sh,bl),e(bl,U1),e(ot,B1),e(ot,Jt),w(kl,Jt,null),e(Jt,R1),e(Jt,En),e(En,H1),e(En,Wh),e(Wh,Q1),e(En,K1),e(En,Uh),e(Uh,V1),e(En,J1),e(Jt,G1),w(ar,Jt,null),e(Jt,X1),w(ir,Jt,null),_(o,nu,b),_(o,Mn,b),e(Mn,lr),e(lr,Bh),w(yl,Bh,null),e(Mn,Y1),e(Mn,Rh),e(Rh,Z1),_(o,su,b),_(o,nt,b),w(vl,nt,null),e(nt,e2),e(nt,Hh),e(Hh,t2),e(nt,o2),e(nt,Tl),e(Tl,n2),e(Tl,ic),e(ic,s2),e(Tl,r2),e(nt,a2),e(nt,wl),e(wl,i2),e(wl,$l),e($l,l2),e(wl,d2),e(nt,c2),e(nt,Qh),e(Qh,p2),e(nt,h2),e(nt,ho),e(ho,Kh),e(Kh,Al),e(Al,m2),e(ho,f2),e(ho,Vh),e(Vh,Fl),e(Fl,u2),e(ho,g2),e(ho,Jh),e(Jh,xl),e(xl,_2),e(ho,b2),e(ho,Gh),e(Gh,El),e(El,k2),e(nt,y2),e(nt,Gt),w(Ml,Gt,null),e(Gt,v2),e(Gt,zn),e(zn,T2),e(zn,Xh),e(Xh,w2),e(zn,$2),e(zn,Yh),e(Yh,A2),e(zn,F2),e(Gt,x2),w(dr,Gt,null),e(Gt,E2),w(cr,Gt,null),_(o,ru,b),_(o,jn,b),e(jn,pr),e(pr,Zh),w(zl,Zh,null),e(jn,M2),e(jn,em),e(em,z2),_(o,au,b),_(o,st,b),w(jl,st,null),e(st,j2),e(st,tm),e(tm,q2),e(st,P2),e(st,ql),e(ql,C2),e(ql,lc),e(lc,L2),e(ql,O2),e(st,I2),e(st,Pl),e(Pl,N2),e(Pl,Cl),e(Cl,D2),e(Pl,S2),e(st,W2),e(st,om),e(om,U2),e(st,B2),e(st,mo),e(mo,nm),e(nm,Ll),e(Ll,R2),e(mo,H2),e(mo,sm),e(sm,Ol),e(Ol,Q2),e(mo,K2),e(mo,rm),e(rm,Il),e(Il,V2),e(mo,J2),e(mo,am),e(am,Nl),e(Nl,G2),e(st,X2),e(st,Xt),w(Dl,Xt,null),e(Xt,Y2),e(Xt,qn),e(qn,Z2),e(qn,im),e(im,eA),e(qn,tA),e(qn,lm),e(lm,oA),e(qn,nA),e(Xt,sA),w(hr,Xt,null),e(Xt,rA),w(mr,Xt,null),_(o,iu,b),_(o,Pn,b),e(Pn,fr),e(fr,dm),w(Sl,dm,null),e(Pn,aA),e(Pn,cm),e(cm,iA),_(o,lu,b),_(o,rt,b),w(Wl,rt,null),e(rt,lA),e(rt,pm),e(pm,dA),e(rt,cA),e(rt,Ul),e(Ul,pA),e(Ul,dc),e(dc,hA),e(Ul,mA),e(rt,fA),e(rt,Bl),e(Bl,uA),e(Bl,Rl),e(Rl,gA),e(Bl,_A),e(rt,bA),e(rt,hm),e(hm,kA),e(rt,yA),e(rt,fo),e(fo,mm),e(mm,Hl),e(Hl,vA),e(fo,TA),e(fo,fm),e(fm,Ql),e(Ql,wA),e(fo,$A),e(fo,um),e(um,Kl),e(Kl,AA),e(fo,FA),e(fo,gm),e(gm,Vl),e(Vl,xA),e(rt,EA),e(rt,Yt),w(Jl,Yt,null),e(Yt,MA),e(Yt,Cn),e(Cn,zA),e(Cn,_m),e(_m,jA),e(Cn,qA),e(Cn,bm),e(bm,PA),e(Cn,CA),e(Yt,LA),w(ur,Yt,null),e(Yt,OA),w(gr,Yt,null),_(o,du,b),_(o,Ln,b),e(Ln,_r),e(_r,km),w(Gl,km,null),e(Ln,IA),e(Ln,ym),e(ym,NA),_(o,cu,b),_(o,at,b),w(Xl,at,null),e(at,DA),e(at,On),e(On,SA),e(On,vm),e(vm,WA),e(On,UA),e(On,Tm),e(Tm,BA),e(On,RA),e(at,HA),e(at,Yl),e(Yl,QA),e(Yl,cc),e(cc,KA),e(Yl,VA),e(at,JA),e(at,Zl),e(Zl,GA),e(Zl,ed),e(ed,XA),e(Zl,YA),e(at,ZA),e(at,wm),e(wm,eF),e(at,tF),e(at,uo),e(uo,$m),e($m,td),e(td,oF),e(uo,nF),e(uo,Am),e(Am,od),e(od,sF),e(uo,rF),e(uo,Fm),e(Fm,nd),e(nd,aF),e(uo,iF),e(uo,xm),e(xm,sd),e(sd,lF),e(at,dF),e(at,Zt),w(rd,Zt,null),e(Zt,cF),e(Zt,In),e(In,pF),e(In,Em),e(Em,hF),e(In,mF),e(In,Mm),e(Mm,fF),e(In,uF),e(Zt,gF),w(br,Zt,null),e(Zt,_F),w(kr,Zt,null),pu=!0},p(o,[b]){const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),Wn.$set(ad);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),Rn.$set(zm);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),Qn.$set(jm);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),Jn.$set(qm);const id={};b&2&&(id.$$scope={dirty:b,ctx:o}),Gn.$set(id);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),Yn.$set(Pm);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),Zn.$set(Cm);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),ts.$set(Lm);const ld={};b&2&&(ld.$$scope={dirty:b,ctx:o}),os.$set(ld);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),ns.$set(Om);const dd={};b&2&&(dd.$$scope={dirty:b,ctx:o}),rs.$set(dd);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),as.$set(Im);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),is.$set(Nm);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),ls.$set(Dm);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),ds.$set(Sm);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),ps.$set(Wm);const Um={};b&2&&(Um.$$scope={dirty:b,ctx:o}),hs.$set(Um);const cd={};b&2&&(cd.$$scope={dirty:b,ctx:o}),fs.$set(cd);const Bm={};b&2&&(Bm.$$scope={dirty:b,ctx:o}),us.$set(Bm);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),gs.$set(Rm);const go={};b&2&&(go.$$scope={dirty:b,ctx:o}),bs.$set(go);const Hm={};b&2&&(Hm.$$scope={dirty:b,ctx:o}),ks.$set(Hm);const Qm={};b&2&&(Qm.$$scope={dirty:b,ctx:o}),ys.$set(Qm);const Km={};b&2&&(Km.$$scope={dirty:b,ctx:o}),Ts.$set(Km);const pd={};b&2&&(pd.$$scope={dirty:b,ctx:o}),ws.$set(pd);const Vm={};b&2&&(Vm.$$scope={dirty:b,ctx:o}),$s.$set(Vm);const Jm={};b&2&&(Jm.$$scope={dirty:b,ctx:o}),Fs.$set(Jm);const Gm={};b&2&&(Gm.$$scope={dirty:b,ctx:o}),xs.$set(Gm);const _o={};b&2&&(_o.$$scope={dirty:b,ctx:o}),Es.$set(_o);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),zs.$set(bo);const Xm={};b&2&&(Xm.$$scope={dirty:b,ctx:o}),js.$set(Xm);const Ym={};b&2&&(Ym.$$scope={dirty:b,ctx:o}),qs.$set(Ym);const Zm={};b&2&&(Zm.$$scope={dirty:b,ctx:o}),Ps.$set(Zm);const Nn={};b&2&&(Nn.$$scope={dirty:b,ctx:o}),Ls.$set(Nn);const ef={};b&2&&(ef.$$scope={dirty:b,ctx:o}),Os.$set(ef);const tf={};b&2&&(tf.$$scope={dirty:b,ctx:o}),Is.$set(tf);const hd={};b&2&&(hd.$$scope={dirty:b,ctx:o}),Ns.$set(hd);const of={};b&2&&(of.$$scope={dirty:b,ctx:o}),Ss.$set(of);const nf={};b&2&&(nf.$$scope={dirty:b,ctx:o}),Ws.$set(nf);const sf={};b&2&&(sf.$$scope={dirty:b,ctx:o}),Us.$set(sf);const ut={};b&2&&(ut.$$scope={dirty:b,ctx:o}),Rs.$set(ut);const md={};b&2&&(md.$$scope={dirty:b,ctx:o}),Hs.$set(md);const rf={};b&2&&(rf.$$scope={dirty:b,ctx:o}),Qs.$set(rf);const fd={};b&2&&(fd.$$scope={dirty:b,ctx:o}),Ks.$set(fd);const af={};b&2&&(af.$$scope={dirty:b,ctx:o}),Js.$set(af);const Dn={};b&2&&(Dn.$$scope={dirty:b,ctx:o}),Gs.$set(Dn);const lf={};b&2&&(lf.$$scope={dirty:b,ctx:o}),Xs.$set(lf);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),Ys.$set(ud);const pc={};b&2&&(pc.$$scope={dirty:b,ctx:o}),er.$set(pc);const df={};b&2&&(df.$$scope={dirty:b,ctx:o}),tr.$set(df);const hc={};b&2&&(hc.$$scope={dirty:b,ctx:o}),nr.$set(hc);const cf={};b&2&&(cf.$$scope={dirty:b,ctx:o}),sr.$set(cf);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),ar.$set(gd);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),ir.$set(_d);const pf={};b&2&&(pf.$$scope={dirty:b,ctx:o}),dr.$set(pf);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),cr.$set(ko);const hf={};b&2&&(hf.$$scope={dirty:b,ctx:o}),hr.$set(hf);const Sn={};b&2&&(Sn.$$scope={dirty:b,ctx:o}),mr.$set(Sn);const mf={};b&2&&(mf.$$scope={dirty:b,ctx:o}),ur.$set(mf);const ff={};b&2&&(ff.$$scope={dirty:b,ctx:o}),gr.$set(ff);const uf={};b&2&&(uf.$$scope={dirty:b,ctx:o}),br.$set(uf);const bd={};b&2&&(bd.$$scope={dirty:b,ctx:o}),kr.$set(bd)},i(o){pu||($(l.$$.fragment,o),$(E.$$.fragment,o),$(De.$$.fragment,o),$(Se.$$.fragment,o),$(Wn.$$.fragment,o),$(Br.$$.fragment,o),$(Rr.$$.fragment,o),$(Vr.$$.fragment,o),$(Gr.$$.fragment,o),$(Yr.$$.fragment,o),$(Rn.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(na.$$.fragment,o),$(ra.$$.fragment,o),$(Qn.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(da.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(ga.$$.fragment,o),$(Jn.$$.fragment,o),$(Gn.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(Ta.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(Ma.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(za.$$.fragment,o),$(ja.$$.fragment,o),$(La.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(Oa.$$.fragment,o),$(Ia.$$.fragment,o),$(Wa.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Ua.$$.fragment,o),$(Ba.$$.fragment,o),$(Ka.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(ys.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$(Ts.$$.fragment,o),$(ri.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(Fs.$$.fragment,o),$(pi.$$.fragment,o),$(xs.$$.fragment,o),$(Es.$$.fragment,o),$(hi.$$.fragment,o),$(mi.$$.fragment,o),$(zs.$$.fragment,o),$(bi.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(ki.$$.fragment,o),$(yi.$$.fragment,o),$(Ls.$$.fragment,o),$($i.$$.fragment,o),$(Os.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ai.$$.fragment,o),$(Fi.$$.fragment,o),$(Ss.$$.fragment,o),$(zi.$$.fragment,o),$(Ws.$$.fragment,o),$(Us.$$.fragment,o),$(ji.$$.fragment,o),$(qi.$$.fragment,o),$(Rs.$$.fragment,o),$(Oi.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ii.$$.fragment,o),$(Ni.$$.fragment,o),$(Js.$$.fragment,o),$(Ui.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Bi.$$.fragment,o),$(Ri.$$.fragment,o),$(Yi.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(ll.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(dl.$$.fragment,o),$(cl.$$.fragment,o),$(kl.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(yl.$$.fragment,o),$(vl.$$.fragment,o),$(Ml.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(zl.$$.fragment,o),$(jl.$$.fragment,o),$(Dl.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(Sl.$$.fragment,o),$(Wl.$$.fragment,o),$(Jl.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(rd.$$.fragment,o),$(br.$$.fragment,o),$(kr.$$.fragment,o),pu=!0)},o(o){A(l.$$.fragment,o),A(E.$$.fragment,o),A(De.$$.fragment,o),A(Se.$$.fragment,o),A(Wn.$$.fragment,o),A(Br.$$.fragment,o),A(Rr.$$.fragment,o),A(Vr.$$.fragment,o),A(Gr.$$.fragment,o),A(Yr.$$.fragment,o),A(Rn.$$.fragment,o),A(Zr.$$.fragment,o),A(ea.$$.fragment,o),A(ta.$$.fragment,o),A(na.$$.fragment,o),A(ra.$$.fragment,o),A(Qn.$$.fragment,o),A(aa.$$.fragment,o),A(ia.$$.fragment,o),A(da.$$.fragment,o),A(pa.$$.fragment,o),A(ha.$$.fragment,o),A(ga.$$.fragment,o),A(Jn.$$.fragment,o),A(Gn.$$.fragment,o),A(_a.$$.fragment,o),A(ba.$$.fragment,o),A(Ta.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(wa.$$.fragment,o),A($a.$$.fragment,o),A(Ma.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(za.$$.fragment,o),A(ja.$$.fragment,o),A(La.$$.fragment,o),A(rs.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(ls.$$.fragment,o),A(ds.$$.fragment,o),A(Oa.$$.fragment,o),A(Ia.$$.fragment,o),A(Wa.$$.fragment,o),A(ps.$$.fragment,o),A(hs.$$.fragment,o),A(Ua.$$.fragment,o),A(Ba.$$.fragment,o),A(Ka.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(Va.$$.fragment,o),A(Ja.$$.fragment,o),A(Za.$$.fragment,o),A(bs.$$.fragment,o),A(ks.$$.fragment,o),A(ys.$$.fragment,o),A(ei.$$.fragment,o),A(ti.$$.fragment,o),A(Ts.$$.fragment,o),A(ri.$$.fragment,o),A(ws.$$.fragment,o),A($s.$$.fragment,o),A(ai.$$.fragment,o),A(ii.$$.fragment,o),A(Fs.$$.fragment,o),A(pi.$$.fragment,o),A(xs.$$.fragment,o),A(Es.$$.fragment,o),A(hi.$$.fragment,o),A(mi.$$.fragment,o),A(zs.$$.fragment,o),A(bi.$$.fragment,o),A(js.$$.fragment,o),A(qs.$$.fragment,o),A(Ps.$$.fragment,o),A(ki.$$.fragment,o),A(yi.$$.fragment,o),A(Ls.$$.fragment,o),A($i.$$.fragment,o),A(Os.$$.fragment,o),A(Is.$$.fragment,o),A(Ns.$$.fragment,o),A(Ai.$$.fragment,o),A(Fi.$$.fragment,o),A(Ss.$$.fragment,o),A(zi.$$.fragment,o),A(Ws.$$.fragment,o),A(Us.$$.fragment,o),A(ji.$$.fragment,o),A(qi.$$.fragment,o),A(Rs.$$.fragment,o),A(Oi.$$.fragment,o),A(Hs.$$.fragment,o),A(Qs.$$.fragment,o),A(Ks.$$.fragment,o),A(Ii.$$.fragment,o),A(Ni.$$.fragment,o),A(Js.$$.fragment,o),A(Ui.$$.fragment,o),A(Gs.$$.fragment,o),A(Xs.$$.fragment,o),A(Ys.$$.fragment,o),A(Bi.$$.fragment,o),A(Ri.$$.fragment,o),A(Yi.$$.fragment,o),A(er.$$.fragment,o),A(tr.$$.fragment,o),A(Zi.$$.fragment,o),A(el.$$.fragment,o),A(ll.$$.fragment,o),A(nr.$$.fragment,o),A(sr.$$.fragment,o),A(dl.$$.fragment,o),A(cl.$$.fragment,o),A(kl.$$.fragment,o),A(ar.$$.fragment,o),A(ir.$$.fragment,o),A(yl.$$.fragment,o),A(vl.$$.fragment,o),A(Ml.$$.fragment,o),A(dr.$$.fragment,o),A(cr.$$.fragment,o),A(zl.$$.fragment,o),A(jl.$$.fragment,o),A(Dl.$$.fragment,o),A(hr.$$.fragment,o),A(mr.$$.fragment,o),A(Sl.$$.fragment,o),A(Wl.$$.fragment,o),A(Jl.$$.fragment,o),A(ur.$$.fragment,o),A(gr.$$.fragment,o),A(Gl.$$.fragment,o),A(Xl.$$.fragment,o),A(rd.$$.fragment,o),A(br.$$.fragment,o),A(kr.$$.fragment,o),pu=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(ge),o&&t(W),F(E),o&&t(_e),o&&t(U),o&&t(be),o&&t(B),o&&t(oe),o&&t(q),o&&t(ke),o&&t(H),o&&t(J),o&&t(le),o&&t(C),o&&t(re),o&&t(ye),o&&t(O),o&&t(z),o&&t(Ne),F(De),o&&t(Ke),o&&t(de),F(Se),F(Wn),o&&t(gf),o&&t(Io),F(Br),o&&t(_f),o&&t(Ze),F(Rr),F(Vr),F(Gr),F(Yr),F(Rn),F(Zr),o&&t(bf),o&&t(Do),F(ea),o&&t(kf),o&&t(Nt),F(ta),F(na),F(ra),F(Qn),o&&t(yf),o&&t(So),F(aa),o&&t(vf),o&&t(Wo),F(ia),o&&t(Tf),o&&t(Uo),F(da),o&&t(wf),o&&t(Bo),F(pa),o&&t($f),o&&t(gt),F(ha),F(ga),F(Jn),F(Gn),o&&t(Af),o&&t(Ho),F(_a),o&&t(Ff),o&&t(_t),F(ba),F(Ta),F(Yn),F(Zn),o&&t(xf),o&&t(Vo),F(wa),o&&t(Ef),o&&t(bt),F($a),F(Ma),F(ts),F(os),F(ns),o&&t(Mf),o&&t(Go),F(za),o&&t(zf),o&&t(kt),F(ja),F(La),F(rs),F(as),F(is),F(ls),F(ds),o&&t(jf),o&&t(Yo),F(Oa),o&&t(qf),o&&t(yt),F(Ia),F(Wa),F(ps),F(hs),o&&t(Pf),o&&t(en),F(Ua),o&&t(Cf),o&&t(vt),F(Ba),F(Ka),F(fs),F(us),F(gs),o&&t(Lf),o&&t(on),F(Va),o&&t(Of),o&&t(Tt),F(Ja),F(Za),F(bs),F(ks),F(ys),o&&t(If),o&&t(rn),F(ei),o&&t(Nf),o&&t(lt),F(ti),F(Ts),F(ri),F(ws),F($s),o&&t(Df),o&&t(ln),F(ai),o&&t(Sf),o&&t(dt),F(ii),F(Fs),F(pi),F(xs),F(Es),o&&t(Wf),o&&t(pn),F(hi),o&&t(Uf),o&&t(ct),F(mi),F(zs),F(bi),F(js),F(qs),F(Ps),o&&t(Bf),o&&t(mn),F(ki),o&&t(Rf),o&&t(pt),F(yi),F(Ls),F($i),F(Os),F(Is),F(Ns),o&&t(Hf),o&&t(un),F(Ai),o&&t(Qf),o&&t(ht),F(Fi),F(Ss),F(zi),F(Ws),F(Us),o&&t(Kf),o&&t(_n),F(ji),o&&t(Vf),o&&t(mt),F(qi),F(Rs),F(Oi),F(Hs),F(Qs),F(Ks),o&&t(Jf),o&&t(kn),F(Ii),o&&t(Gf),o&&t(ft),F(Ni),F(Js),F(Ui),F(Gs),F(Xs),F(Ys),o&&t(Xf),o&&t(Tn),F(Bi),o&&t(Yf),o&&t(et),F(Ri),F(Yi),F(er),F(tr),o&&t(Zf),o&&t($n),F(Zi),o&&t(eu),o&&t(tt),F(el),F(ll),F(nr),F(sr),o&&t(tu),o&&t(xn),F(dl),o&&t(ou),o&&t(ot),F(cl),F(kl),F(ar),F(ir),o&&t(nu),o&&t(Mn),F(yl),o&&t(su),o&&t(nt),F(vl),F(Ml),F(dr),F(cr),o&&t(ru),o&&t(jn),F(zl),o&&t(au),o&&t(st),F(jl),F(Dl),F(hr),F(mr),o&&t(iu),o&&t(Pn),F(Sl),o&&t(lu),o&&t(rt),F(Wl),F(Jl),F(ur),F(gr),o&&t(du),o&&t(Ln),F(Gl),o&&t(cu),o&&t(at),F(Xl),F(rd),F(br),F(kr)}}}const _4={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function b4(x){return iz(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class A4 extends nz{constructor(d){super();sz(this,d,b4,g4,rz,{})}}export{A4 as default,_4 as metadata};
