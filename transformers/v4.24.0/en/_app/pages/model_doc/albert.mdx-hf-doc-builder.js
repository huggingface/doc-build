import{S as nM,i as sM,s as rM,e as r,k as p,w as y,t as n,M as aM,c as a,d as t,m as h,a as i,x as T,h as s,b as u,G as e,g as _,y as w,q as $,o as A,B as F,v as iM,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Be}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function lM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertConfig, AlbertModel

# Initializing an ALBERT-xxlarge style configuration
albert_xxlarge_configuration = AlbertConfig()

# Initializing an ALBERT-base style configuration
albert_base_configuration = AlbertConfig(
    hidden_size=768,
    num_attention_heads=12,
    intermediate_size=3072,
)

# Initializing a model (with random weights) from the ALBERT-base style configuration
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel(albert_xxlarge_configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function dM(x){let d,g,c,f,k;return f=new he({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function cM(x){let d,g,c,f,k;return f=new he({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function pM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function hM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function mM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function fM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function uM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function gM(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function _M(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function bM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function kM(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function vM(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function yM(x){let d,g,c,f,k;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function TM(x){let d,g;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function $M(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function AM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function FM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function xM(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function EM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function MM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function zM(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function jM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function qM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function PM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function CM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function LM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function OM(x){let d,g,c,f,k;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function IM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function NM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function DM(x){let d,g,c,f,k;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function SM(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function BM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function WM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function UM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function RM(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function HM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function QM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function KM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function VM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function JM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function GM(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function XM(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function YM(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),k=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),B=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),U=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ke=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ve=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),k=s(z," accept two formats as input:"),z.forEach(t),l=h(v),m=a(v,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),B=a(Z,"LI",{});var De=i(B);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(v),E=a(v,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(j,"CODE",{});var Ve=i(W);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),U=a(j,"CODE",{});var de=i(U);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(v),q=a(v,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ke=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var We=i(J);le=s(We,"model(input_ids)"),We.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Ue=i(V);qe=s(Ue,"model([input_ids, attention_mask, token_type_ids])"),Ue.forEach(t),Y.forEach(t),ve=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(v),P=a(v,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(v,z){_(v,d,z),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,z),_(v,m,z),e(m,M),e(M,ye),e(m,ge),e(m,B),e(B,se),_(v,te,z),_(v,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,W),e(W,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,U),e(U,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(v,oe,z),_(v,q,z),e(q,L),e(L,ke),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ve),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(v,ne,z),_(v,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(E),v&&t(oe),v&&t(q),v&&t(ne),v&&t(P)}}}function ZM(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function ez(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function tz(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function oz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function nz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function sz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function rz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function az(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function iz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function lz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function dz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function cz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function pz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function hz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function mz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function fz(x){let d,g,c,f,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function uz(x){let d,g,c,f,k;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:pe,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){A(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function gz(x){let d,g,c,f,k,l,m,M,ye,ge,B,se,te,E,Te,Q,we,_e,W,$e,ae,G,Ae,be,U,me,Fe,X,fe,xe,oe,q,L,ke,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ve,O,Pe,R,Ce,ne,P,Le,I,ie,Oe,v,z,Ne,Z,He,De,j,Qe,Ve,Ke,de,Se,S,N,Je,We,Y,Ge,Ue,Ie,Xe,ee,Ye,zg,jg,Oo,qg,kd,Pg,Cg,vd,Lg,Og,Ig,Bn,gf,Io,Wn,Bc,Ur,Ng,Wc,Dg,_f,Ze,Rr,Sg,Hr,Bg,Qr,Wg,Ug,Rg,Kr,Hg,yd,Qg,Kg,Vg,vo,Vr,Jg,Uc,Gg,Xg,Jr,Td,Yg,Rc,Zg,e_,wd,t_,Hc,o_,n_,Un,Gr,s_,Xr,r_,Qc,a_,i_,l_,Dt,Yr,d_,Kc,c_,p_,Rn,h_,No,m_,Vc,f_,u_,Jc,g_,__,b_,$d,Zr,bf,Do,Hn,Gc,ea,k_,Xc,v_,kf,Nt,ta,y_,io,T_,Yc,w_,$_,oa,A_,F_,Ad,x_,E_,M_,yo,na,z_,Zc,j_,q_,sa,Fd,P_,ep,C_,L_,xd,O_,tp,I_,N_,St,ra,D_,op,S_,B_,Qn,W_,np,U_,vf,So,Kn,sp,aa,R_,rp,H_,yf,Bo,ia,Q_,la,K_,Ed,V_,J_,Tf,Wo,da,G_,ca,X_,Md,Y_,Z_,wf,Uo,Vn,ap,pa,eb,ip,tb,$f,gt,ha,ob,lp,nb,sb,ma,rb,zd,ab,ib,lb,fa,db,ua,cb,pb,hb,Bt,ga,mb,Ro,fb,jd,ub,gb,dp,_b,bb,kb,Jn,vb,Gn,Af,Ho,Xn,cp,_a,yb,pp,Tb,Ff,_t,ba,wb,Qo,$b,hp,Ab,Fb,mp,xb,Eb,Mb,ka,zb,qd,jb,qb,Pb,va,Cb,ya,Lb,Ob,Ib,Wt,Ta,Nb,Ko,Db,Pd,Sb,Bb,fp,Wb,Ub,Rb,Yn,Hb,Zn,xf,Vo,es,up,wa,Qb,gp,Kb,Ef,bt,$a,Vb,Aa,Jb,_p,Gb,Xb,Yb,Fa,Zb,Cd,ek,tk,ok,xa,nk,Ea,sk,rk,ak,wt,Ma,ik,Jo,lk,Ld,dk,ck,bp,pk,hk,mk,ts,fk,os,uk,ns,Mf,Go,ss,kp,za,gk,vp,_k,zf,kt,ja,bk,yp,kk,vk,qa,yk,Od,Tk,wk,$k,Pa,Ak,Ca,Fk,xk,Ek,it,La,Mk,Xo,zk,Id,jk,qk,Tp,Pk,Ck,Lk,rs,Ok,as,Ik,is,Nk,ls,Dk,ds,jf,Yo,cs,wp,Oa,Sk,$p,Bk,qf,vt,Ia,Wk,Ap,Uk,Rk,Na,Hk,Nd,Qk,Kk,Vk,Da,Jk,Sa,Gk,Xk,Yk,Ut,Ba,Zk,Zo,ev,Dd,tv,ov,Fp,nv,sv,rv,ps,av,hs,Pf,en,ms,xp,Wa,iv,Ep,lv,Cf,yt,Ua,dv,Mp,cv,pv,Ra,hv,Sd,mv,fv,uv,Ha,gv,Qa,_v,bv,kv,$t,Ka,vv,tn,yv,Bd,Tv,wv,zp,$v,Av,Fv,fs,xv,us,Ev,gs,Lf,on,_s,jp,Va,Mv,qp,zv,Of,Tt,Ja,jv,nn,qv,Pp,Pv,Cv,Cp,Lv,Ov,Iv,Ga,Nv,Wd,Dv,Sv,Bv,Xa,Wv,Ya,Uv,Rv,Hv,At,Za,Qv,sn,Kv,Ud,Vv,Jv,Lp,Gv,Xv,Yv,bs,Zv,ks,ey,vs,If,rn,ys,Op,ei,ty,Ip,oy,Nf,lt,ti,ny,Np,sy,ry,oi,ay,Rd,iy,ly,dy,ni,cy,si,py,hy,my,Ts,fy,Rt,ri,uy,an,gy,Hd,_y,by,Dp,ky,vy,yy,ws,Ty,$s,Df,ln,As,Sp,ai,wy,Bp,$y,Sf,dt,ii,Ay,dn,Fy,Wp,xy,Ey,Up,My,zy,jy,li,qy,Qd,Py,Cy,Ly,di,Oy,ci,Iy,Ny,Dy,Fs,Sy,Ht,pi,By,cn,Wy,Kd,Uy,Ry,Rp,Hy,Qy,Ky,xs,Vy,Es,Bf,pn,Ms,Hp,hi,Jy,Qp,Gy,Wf,ct,mi,Xy,fi,Yy,Kp,Zy,eT,tT,ui,oT,Vd,nT,sT,rT,gi,aT,_i,iT,lT,dT,zs,cT,Ft,bi,pT,hn,hT,Jd,mT,fT,Vp,uT,gT,_T,js,bT,qs,kT,Ps,Uf,mn,Cs,Jp,ki,vT,Gp,yT,Rf,pt,vi,TT,Xp,wT,$T,yi,AT,Gd,FT,xT,ET,Ti,MT,wi,zT,jT,qT,Ls,PT,xt,$i,CT,fn,LT,Xd,OT,IT,Yp,NT,DT,ST,Os,BT,Is,WT,Ns,Hf,un,Ds,Zp,Ai,UT,eh,RT,Qf,ht,Fi,HT,th,QT,KT,xi,VT,Yd,JT,GT,XT,Ei,YT,Mi,ZT,ew,tw,Ss,ow,Qt,zi,nw,gn,sw,Zd,rw,aw,oh,iw,lw,dw,Bs,cw,Ws,Kf,_n,Us,nh,ji,pw,sh,hw,Vf,mt,qi,mw,rh,fw,uw,Pi,gw,ec,_w,bw,kw,Ci,vw,Li,yw,Tw,ww,Rs,$w,Et,Oi,Aw,bn,Fw,tc,xw,Ew,ah,Mw,zw,jw,Hs,qw,Qs,Pw,Ks,Jf,kn,Vs,ih,Ii,Cw,lh,Lw,Gf,ft,Ni,Ow,vn,Iw,dh,Nw,Dw,ch,Sw,Bw,Ww,Di,Uw,oc,Rw,Hw,Qw,Si,Kw,Bi,Vw,Jw,Gw,Js,Xw,Mt,Wi,Yw,yn,Zw,nc,e2,t2,ph,o2,n2,s2,Gs,r2,Xs,a2,Ys,Xf,Tn,Zs,hh,Ui,i2,mh,l2,Yf,et,Ri,d2,fh,c2,p2,Hi,h2,sc,m2,f2,u2,Qi,g2,Ki,_2,b2,k2,uh,v2,y2,lo,gh,Vi,T2,w2,_h,Ji,$2,A2,bh,Gi,F2,x2,kh,Xi,E2,M2,Kt,Yi,z2,wn,j2,vh,q2,P2,yh,C2,L2,O2,er,I2,tr,Zf,$n,or,Th,Zi,N2,wh,D2,eu,tt,el,S2,An,B2,$h,W2,U2,Ah,R2,H2,Q2,tl,K2,rc,V2,J2,G2,ol,X2,nl,Y2,Z2,e$,Fh,t$,o$,co,xh,sl,n$,s$,Eh,rl,r$,a$,Mh,al,i$,l$,zh,il,d$,c$,Vt,ll,p$,Fn,h$,jh,m$,f$,qh,u$,g$,_$,nr,b$,sr,tu,xn,rr,Ph,dl,k$,Ch,v$,ou,ot,cl,y$,pl,T$,Lh,w$,$$,A$,hl,F$,ac,x$,E$,M$,ml,z$,fl,j$,q$,P$,Oh,C$,L$,po,Ih,ul,O$,I$,Nh,gl,N$,D$,Dh,_l,S$,B$,Sh,bl,W$,U$,Jt,kl,R$,En,H$,Bh,Q$,K$,Wh,V$,J$,G$,ar,X$,ir,nu,Mn,lr,Uh,vl,Y$,Rh,Z$,su,nt,yl,e1,Hh,t1,o1,Tl,n1,ic,s1,r1,a1,wl,i1,$l,l1,d1,c1,Qh,p1,h1,ho,Kh,Al,m1,f1,Vh,Fl,u1,g1,Jh,xl,_1,b1,Gh,El,k1,v1,Gt,Ml,y1,zn,T1,Xh,w1,$1,Yh,A1,F1,x1,dr,E1,cr,ru,jn,pr,Zh,zl,M1,em,z1,au,st,jl,j1,tm,q1,P1,ql,C1,lc,L1,O1,I1,Pl,N1,Cl,D1,S1,B1,om,W1,U1,mo,nm,Ll,R1,H1,sm,Ol,Q1,K1,rm,Il,V1,J1,am,Nl,G1,X1,Xt,Dl,Y1,qn,Z1,im,e0,t0,lm,o0,n0,s0,hr,r0,mr,iu,Pn,fr,dm,Sl,a0,cm,i0,lu,rt,Bl,l0,pm,d0,c0,Wl,p0,dc,h0,m0,f0,Ul,u0,Rl,g0,_0,b0,hm,k0,v0,fo,mm,Hl,y0,T0,fm,Ql,w0,$0,um,Kl,A0,F0,gm,Vl,x0,E0,Yt,Jl,M0,Cn,z0,_m,j0,q0,bm,P0,C0,L0,ur,O0,gr,du,Ln,_r,km,Gl,I0,vm,N0,cu,at,Xl,D0,On,S0,ym,B0,W0,Tm,U0,R0,H0,Yl,Q0,cc,K0,V0,J0,Zl,G0,ed,X0,Y0,Z0,wm,eA,tA,uo,$m,td,oA,nA,Am,od,sA,rA,Fm,nd,aA,iA,xm,sd,lA,dA,Zt,rd,cA,In,pA,Em,hA,mA,Mm,fA,uA,gA,br,_A,kr,pu;return l=new Re({}),E=new Re({}),De=new Re({}),Se=new D({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/configuration_albert.py#L36"}}),Bn=new ce({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[lM]},$$scope:{ctx:x}}}),Ur=new Re({}),Rr=new D({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert.py#L59"}}),Vr=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gr=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yr=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[dM]},$$scope:{ctx:x}}}),Zr=new D({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert.py#L338"}}),ea=new Re({}),ta=new D({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),na=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ra=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new ce({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[cM]},$$scope:{ctx:x}}}),aa=new Re({}),ia=new D({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L531"}}),da=new D({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L665"}}),pa=new Re({}),ha=new D({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L634"}}),ga=new D({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L678",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jn=new Be({props:{$$slots:{default:[pM]},$$scope:{ctx:x}}}),Gn=new ce({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[hM]},$$scope:{ctx:x}}}),_a=new Re({}),ba=new D({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L764"}}),Ta=new D({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L784",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yn=new Be({props:{$$slots:{default:[mM]},$$scope:{ctx:x}}}),Zn=new ce({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[fM]},$$scope:{ctx:x}}}),wa=new Re({}),$a=new D({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L910"}}),Ma=new D({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L932",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new Be({props:{$$slots:{default:[uM]},$$scope:{ctx:x}}}),os=new ce({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[gM]},$$scope:{ctx:x}}}),ns=new ce({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_M]},$$scope:{ctx:x}}}),za=new Re({}),ja=new D({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1025"}}),La=new D({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1038",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new Be({props:{$$slots:{default:[bM]},$$scope:{ctx:x}}}),as=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[kM]},$$scope:{ctx:x}}}),is=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[vM]},$$scope:{ctx:x}}}),ls=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[yM]},$$scope:{ctx:x}}}),ds=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[TM]},$$scope:{ctx:x}}}),Oa=new Re({}),Ia=new D({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1326"}}),Ba=new D({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1337",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ps=new Be({props:{$$slots:{default:[wM]},$$scope:{ctx:x}}}),hs=new ce({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$M]},$$scope:{ctx:x}}}),Wa=new Re({}),Ua=new D({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1127"}}),Ka=new D({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1147",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fs=new Be({props:{$$slots:{default:[AM]},$$scope:{ctx:x}}}),us=new ce({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[FM]},$$scope:{ctx:x}}}),gs=new ce({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[xM]},$$scope:{ctx:x}}}),Va=new Re({}),Ja=new D({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1219"}}),Za=new D({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_albert.py#L1233",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new Be({props:{$$slots:{default:[EM]},$$scope:{ctx:x}}}),ks=new ce({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[MM]},$$scope:{ctx:x}}}),vs=new ce({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[zM]},$$scope:{ctx:x}}}),ei=new Re({}),ti=new D({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L797"}}),Ts=new Be({props:{$$slots:{default:[jM]},$$scope:{ctx:x}}}),ri=new D({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L803",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ws=new Be({props:{$$slots:{default:[qM]},$$scope:{ctx:x}}}),$s=new ce({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[PM]},$$scope:{ctx:x}}}),ai=new Re({}),ii=new D({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L858"}}),Fs=new Be({props:{$$slots:{default:[CM]},$$scope:{ctx:x}}}),pi=new D({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xs=new Be({props:{$$slots:{default:[LM]},$$scope:{ctx:x}}}),Es=new ce({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[OM]},$$scope:{ctx:x}}}),hi=new Re({}),mi=new D({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L977"}}),zs=new Be({props:{$$slots:{default:[IM]},$$scope:{ctx:x}}}),bi=new D({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L990",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),js=new Be({props:{$$slots:{default:[NM]},$$scope:{ctx:x}}}),qs=new ce({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[DM]},$$scope:{ctx:x}}}),Ps=new ce({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[SM]},$$scope:{ctx:x}}}),ki=new Re({}),vi=new D({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1086"}}),Ls=new Be({props:{$$slots:{default:[BM]},$$scope:{ctx:x}}}),$i=new D({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1102",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Os=new Be({props:{$$slots:{default:[WM]},$$scope:{ctx:x}}}),Is=new ce({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[UM]},$$scope:{ctx:x}}}),Ns=new ce({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[RM]},$$scope:{ctx:x}}}),Ai=new Re({}),Fi=new D({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1377"}}),Ss=new Be({props:{$$slots:{default:[HM]},$$scope:{ctx:x}}}),zi=new D({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bs=new Be({props:{$$slots:{default:[QM]},$$scope:{ctx:x}}}),Ws=new ce({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[KM]},$$scope:{ctx:x}}}),ji=new Re({}),qi=new D({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1176"}}),Rs=new Be({props:{$$slots:{default:[VM]},$$scope:{ctx:x}}}),Oi=new D({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1197",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Hs=new Be({props:{$$slots:{default:[JM]},$$scope:{ctx:x}}}),Qs=new ce({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[GM]},$$scope:{ctx:x}}}),Ks=new ce({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[XM]},$$scope:{ctx:x}}}),Ii=new Re({}),Ni=new D({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1272"}}),Js=new Be({props:{$$slots:{default:[YM]},$$scope:{ctx:x}}}),Wi=new D({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_tf_albert.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new Be({props:{$$slots:{default:[ZM]},$$scope:{ctx:x}}}),Xs=new ce({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[ez]},$$scope:{ctx:x}}}),Ys=new ce({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[tz]},$$scope:{ctx:x}}}),Ui=new Re({}),Ri=new D({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Yi=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new Be({props:{$$slots:{default:[oz]},$$scope:{ctx:x}}}),tr=new ce({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[nz]},$$scope:{ctx:x}}}),Zi=new Re({}),el=new D({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),ll=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
`}}),nr=new Be({props:{$$slots:{default:[sz]},$$scope:{ctx:x}}}),sr=new ce({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[rz]},$$scope:{ctx:x}}}),dl=new Re({}),cl=new D({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),kl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new Be({props:{$$slots:{default:[az]},$$scope:{ctx:x}}}),ir=new ce({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[iz]},$$scope:{ctx:x}}}),vl=new Re({}),yl=new D({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),Ml=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dr=new Be({props:{$$slots:{default:[lz]},$$scope:{ctx:x}}}),cr=new ce({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[dz]},$$scope:{ctx:x}}}),zl=new Re({}),jl=new D({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Dl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hr=new Be({props:{$$slots:{default:[cz]},$$scope:{ctx:x}}}),mr=new ce({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[pz]},$$scope:{ctx:x}}}),Sl=new Re({}),Bl=new D({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Jl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ur=new Be({props:{$$slots:{default:[hz]},$$scope:{ctx:x}}}),gr=new ce({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[mz]},$$scope:{ctx:x}}}),Gl=new Re({}),Xl=new D({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),rd=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),br=new Be({props:{$$slots:{default:[fz]},$$scope:{ctx:x}}}),kr=new ce({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[uz]},$$scope:{ctx:x}}}),{c(){d=r("meta"),g=p(),c=r("h1"),f=r("a"),k=r("span"),y(l.$$.fragment),m=p(),M=r("span"),ye=n("ALBERT"),ge=p(),B=r("h2"),se=r("a"),te=r("span"),y(E.$$.fragment),Te=p(),Q=r("span"),we=n("Overview"),_e=p(),W=r("p"),$e=n("The ALBERT model was proposed in "),ae=r("a"),G=n("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Ae=n(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),be=p(),U=r("ul"),me=r("li"),Fe=n("Splitting the embedding matrix into two smaller matrices."),X=p(),fe=r("li"),xe=n("Using repeating layers split among groups."),oe=p(),q=r("p"),L=n("The abstract from the paper is the following:"),ke=p(),H=r("p"),ue=r("em"),Ee=n(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),J=p(),le=r("p"),Me=n("Tips:"),C=p(),re=r("ul"),K=r("li"),ze=n(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),je=p(),V=r("li"),qe=n(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),ve=p(),O=r("p"),Pe=n("This model was contributed by "),R=r("a"),Ce=n("lysandre"),ne=n(`. This model jax version was contributed by
`),P=r("a"),Le=n("kamalkraj"),I=n(". The original code can be found "),ie=r("a"),Oe=n("here"),v=n("."),z=p(),Ne=r("h2"),Z=r("a"),He=r("span"),y(De.$$.fragment),j=p(),Qe=r("span"),Ve=n("AlbertConfig"),Ke=p(),de=r("div"),y(Se.$$.fragment),S=p(),N=r("p"),Je=n("This is the configuration class to store the configuration of a "),We=r("a"),Y=n("AlbertModel"),Ge=n(" or a "),Ue=r("a"),Ie=n("TFAlbertModel"),Xe=n(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),ee=r("a"),Ye=n("albert-xxlarge-v2"),zg=n(" architecture."),jg=p(),Oo=r("p"),qg=n("Configuration objects inherit from "),kd=r("a"),Pg=n("PretrainedConfig"),Cg=n(` and can be used to control the model outputs. Read the
documentation from `),vd=r("a"),Lg=n("PretrainedConfig"),Og=n(" for more information."),Ig=p(),y(Bn.$$.fragment),gf=p(),Io=r("h2"),Wn=r("a"),Bc=r("span"),y(Ur.$$.fragment),Ng=p(),Wc=r("span"),Dg=n("AlbertTokenizer"),_f=p(),Ze=r("div"),y(Rr.$$.fragment),Sg=p(),Hr=r("p"),Bg=n("Construct an ALBERT tokenizer. Based on "),Qr=r("a"),Wg=n("SentencePiece"),Ug=n("."),Rg=p(),Kr=r("p"),Hg=n("This tokenizer inherits from "),yd=r("a"),Qg=n("PreTrainedTokenizer"),Kg=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vg=p(),vo=r("div"),y(Vr.$$.fragment),Jg=p(),Uc=r("p"),Gg=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=p(),Jr=r("ul"),Td=r("li"),Yg=n("single sequence: "),Rc=r("code"),Zg=n("[CLS] X [SEP]"),e_=p(),wd=r("li"),t_=n("pair of sequences: "),Hc=r("code"),o_=n("[CLS] A [SEP] B [SEP]"),n_=p(),Un=r("div"),y(Gr.$$.fragment),s_=p(),Xr=r("p"),r_=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qc=r("code"),a_=n("prepare_for_model"),i_=n(" method."),l_=p(),Dt=r("div"),y(Yr.$$.fragment),d_=p(),Kc=r("p"),c_=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),p_=p(),y(Rn.$$.fragment),h_=p(),No=r("p"),m_=n("If "),Vc=r("code"),f_=n("token_ids_1"),u_=n(" is "),Jc=r("code"),g_=n("None"),__=n(", this method only returns the first portion of the mask (0s)."),b_=p(),$d=r("div"),y(Zr.$$.fragment),bf=p(),Do=r("h2"),Hn=r("a"),Gc=r("span"),y(ea.$$.fragment),k_=p(),Xc=r("span"),v_=n("AlbertTokenizerFast"),kf=p(),Nt=r("div"),y(ta.$$.fragment),y_=p(),io=r("p"),T_=n("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Yc=r("em"),w_=n("tokenizers"),$_=n(` library). Based on
`),oa=r("a"),A_=n("Unigram"),F_=n(`. This
tokenizer inherits from `),Ad=r("a"),x_=n("PreTrainedTokenizerFast"),E_=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=p(),yo=r("div"),y(na.$$.fragment),z_=p(),Zc=r("p"),j_=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),q_=p(),sa=r("ul"),Fd=r("li"),P_=n("single sequence: "),ep=r("code"),C_=n("[CLS] X [SEP]"),L_=p(),xd=r("li"),O_=n("pair of sequences: "),tp=r("code"),I_=n("[CLS] A [SEP] B [SEP]"),N_=p(),St=r("div"),y(ra.$$.fragment),D_=p(),op=r("p"),S_=n("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),B_=p(),y(Qn.$$.fragment),W_=p(),np=r("p"),U_=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),vf=p(),So=r("h2"),Kn=r("a"),sp=r("span"),y(aa.$$.fragment),R_=p(),rp=r("span"),H_=n("Albert specific outputs"),yf=p(),Bo=r("div"),y(ia.$$.fragment),Q_=p(),la=r("p"),K_=n("Output type of "),Ed=r("a"),V_=n("AlbertForPreTraining"),J_=n("."),Tf=p(),Wo=r("div"),y(da.$$.fragment),G_=p(),ca=r("p"),X_=n("Output type of "),Md=r("a"),Y_=n("TFAlbertForPreTraining"),Z_=n("."),wf=p(),Uo=r("h2"),Vn=r("a"),ap=r("span"),y(pa.$$.fragment),eb=p(),ip=r("span"),tb=n("AlbertModel"),$f=p(),gt=r("div"),y(ha.$$.fragment),ob=p(),lp=r("p"),nb=n("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=p(),ma=r("p"),rb=n("This model inherits from "),zd=r("a"),ab=n("PreTrainedModel"),ib=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=p(),fa=r("p"),db=n("This model is also a PyTorch "),ua=r("a"),cb=n("torch.nn.Module"),pb=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=p(),Bt=r("div"),y(ga.$$.fragment),mb=p(),Ro=r("p"),fb=n("The "),jd=r("a"),ub=n("AlbertModel"),gb=n(" forward method, overrides the "),dp=r("code"),_b=n("__call__"),bb=n(" special method."),kb=p(),y(Jn.$$.fragment),vb=p(),y(Gn.$$.fragment),Af=p(),Ho=r("h2"),Xn=r("a"),cp=r("span"),y(_a.$$.fragment),yb=p(),pp=r("span"),Tb=n("AlbertForPreTraining"),Ff=p(),_t=r("div"),y(ba.$$.fragment),wb=p(),Qo=r("p"),$b=n("Albert Model with two heads on top as done during the pretraining: a "),hp=r("code"),Ab=n("masked language modeling"),Fb=n(` head and a
`),mp=r("code"),xb=n("sentence order prediction (classification)"),Eb=n(" head."),Mb=p(),ka=r("p"),zb=n("This model inherits from "),qd=r("a"),jb=n("PreTrainedModel"),qb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=p(),va=r("p"),Cb=n("This model is also a PyTorch "),ya=r("a"),Lb=n("torch.nn.Module"),Ob=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ib=p(),Wt=r("div"),y(Ta.$$.fragment),Nb=p(),Ko=r("p"),Db=n("The "),Pd=r("a"),Sb=n("AlbertForPreTraining"),Bb=n(" forward method, overrides the "),fp=r("code"),Wb=n("__call__"),Ub=n(" special method."),Rb=p(),y(Yn.$$.fragment),Hb=p(),y(Zn.$$.fragment),xf=p(),Vo=r("h2"),es=r("a"),up=r("span"),y(wa.$$.fragment),Qb=p(),gp=r("span"),Kb=n("AlbertForMaskedLM"),Ef=p(),bt=r("div"),y($a.$$.fragment),Vb=p(),Aa=r("p"),Jb=n("Albert Model with a "),_p=r("code"),Gb=n("language modeling"),Xb=n(" head on top."),Yb=p(),Fa=r("p"),Zb=n("This model inherits from "),Cd=r("a"),ek=n("PreTrainedModel"),tk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=p(),xa=r("p"),nk=n("This model is also a PyTorch "),Ea=r("a"),sk=n("torch.nn.Module"),rk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak=p(),wt=r("div"),y(Ma.$$.fragment),ik=p(),Jo=r("p"),lk=n("The "),Ld=r("a"),dk=n("AlbertForMaskedLM"),ck=n(" forward method, overrides the "),bp=r("code"),pk=n("__call__"),hk=n(" special method."),mk=p(),y(ts.$$.fragment),fk=p(),y(os.$$.fragment),uk=p(),y(ns.$$.fragment),Mf=p(),Go=r("h2"),ss=r("a"),kp=r("span"),y(za.$$.fragment),gk=p(),vp=r("span"),_k=n("AlbertForSequenceClassification"),zf=p(),kt=r("div"),y(ja.$$.fragment),bk=p(),yp=r("p"),kk=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),vk=p(),qa=r("p"),yk=n("This model inherits from "),Od=r("a"),Tk=n("PreTrainedModel"),wk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=p(),Pa=r("p"),Ak=n("This model is also a PyTorch "),Ca=r("a"),Fk=n("torch.nn.Module"),xk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=p(),it=r("div"),y(La.$$.fragment),Mk=p(),Xo=r("p"),zk=n("The "),Id=r("a"),jk=n("AlbertForSequenceClassification"),qk=n(" forward method, overrides the "),Tp=r("code"),Pk=n("__call__"),Ck=n(" special method."),Lk=p(),y(rs.$$.fragment),Ok=p(),y(as.$$.fragment),Ik=p(),y(is.$$.fragment),Nk=p(),y(ls.$$.fragment),Dk=p(),y(ds.$$.fragment),jf=p(),Yo=r("h2"),cs=r("a"),wp=r("span"),y(Oa.$$.fragment),Sk=p(),$p=r("span"),Bk=n("AlbertForMultipleChoice"),qf=p(),vt=r("div"),y(Ia.$$.fragment),Wk=p(),Ap=r("p"),Uk=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rk=p(),Na=r("p"),Hk=n("This model inherits from "),Nd=r("a"),Qk=n("PreTrainedModel"),Kk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vk=p(),Da=r("p"),Jk=n("This model is also a PyTorch "),Sa=r("a"),Gk=n("torch.nn.Module"),Xk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk=p(),Ut=r("div"),y(Ba.$$.fragment),Zk=p(),Zo=r("p"),ev=n("The "),Dd=r("a"),tv=n("AlbertForMultipleChoice"),ov=n(" forward method, overrides the "),Fp=r("code"),nv=n("__call__"),sv=n(" special method."),rv=p(),y(ps.$$.fragment),av=p(),y(hs.$$.fragment),Pf=p(),en=r("h2"),ms=r("a"),xp=r("span"),y(Wa.$$.fragment),iv=p(),Ep=r("span"),lv=n("AlbertForTokenClassification"),Cf=p(),yt=r("div"),y(Ua.$$.fragment),dv=p(),Mp=r("p"),cv=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pv=p(),Ra=r("p"),hv=n("This model inherits from "),Sd=r("a"),mv=n("PreTrainedModel"),fv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=p(),Ha=r("p"),gv=n("This model is also a PyTorch "),Qa=r("a"),_v=n("torch.nn.Module"),bv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kv=p(),$t=r("div"),y(Ka.$$.fragment),vv=p(),tn=r("p"),yv=n("The "),Bd=r("a"),Tv=n("AlbertForTokenClassification"),wv=n(" forward method, overrides the "),zp=r("code"),$v=n("__call__"),Av=n(" special method."),Fv=p(),y(fs.$$.fragment),xv=p(),y(us.$$.fragment),Ev=p(),y(gs.$$.fragment),Lf=p(),on=r("h2"),_s=r("a"),jp=r("span"),y(Va.$$.fragment),Mv=p(),qp=r("span"),zv=n("AlbertForQuestionAnswering"),Of=p(),Tt=r("div"),y(Ja.$$.fragment),jv=p(),nn=r("p"),qv=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pp=r("code"),Pv=n("span start logits"),Cv=n(" and "),Cp=r("code"),Lv=n("span end logits"),Ov=n(")."),Iv=p(),Ga=r("p"),Nv=n("This model inherits from "),Wd=r("a"),Dv=n("PreTrainedModel"),Sv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bv=p(),Xa=r("p"),Wv=n("This model is also a PyTorch "),Ya=r("a"),Uv=n("torch.nn.Module"),Rv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hv=p(),At=r("div"),y(Za.$$.fragment),Qv=p(),sn=r("p"),Kv=n("The "),Ud=r("a"),Vv=n("AlbertForQuestionAnswering"),Jv=n(" forward method, overrides the "),Lp=r("code"),Gv=n("__call__"),Xv=n(" special method."),Yv=p(),y(bs.$$.fragment),Zv=p(),y(ks.$$.fragment),ey=p(),y(vs.$$.fragment),If=p(),rn=r("h2"),ys=r("a"),Op=r("span"),y(ei.$$.fragment),ty=p(),Ip=r("span"),oy=n("TFAlbertModel"),Nf=p(),lt=r("div"),y(ti.$$.fragment),ny=p(),Np=r("p"),sy=n("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),ry=p(),oi=r("p"),ay=n("This model inherits from "),Rd=r("a"),iy=n("TFPreTrainedModel"),ly=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dy=p(),ni=r("p"),cy=n("This model is also a "),si=r("a"),py=n("tf.keras.Model"),hy=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),my=p(),y(Ts.$$.fragment),fy=p(),Rt=r("div"),y(ri.$$.fragment),uy=p(),an=r("p"),gy=n("The "),Hd=r("a"),_y=n("TFAlbertModel"),by=n(" forward method, overrides the "),Dp=r("code"),ky=n("__call__"),vy=n(" special method."),yy=p(),y(ws.$$.fragment),Ty=p(),y($s.$$.fragment),Df=p(),ln=r("h2"),As=r("a"),Sp=r("span"),y(ai.$$.fragment),wy=p(),Bp=r("span"),$y=n("TFAlbertForPreTraining"),Sf=p(),dt=r("div"),y(ii.$$.fragment),Ay=p(),dn=r("p"),Fy=n("Albert Model with two heads on top for pretraining: a "),Wp=r("code"),xy=n("masked language modeling"),Ey=n(" head and a "),Up=r("code"),My=n("sentence order prediction"),zy=n(" (classification) head."),jy=p(),li=r("p"),qy=n("This model inherits from "),Qd=r("a"),Py=n("TFPreTrainedModel"),Cy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ly=p(),di=r("p"),Oy=n("This model is also a "),ci=r("a"),Iy=n("tf.keras.Model"),Ny=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dy=p(),y(Fs.$$.fragment),Sy=p(),Ht=r("div"),y(pi.$$.fragment),By=p(),cn=r("p"),Wy=n("The "),Kd=r("a"),Uy=n("TFAlbertForPreTraining"),Ry=n(" forward method, overrides the "),Rp=r("code"),Hy=n("__call__"),Qy=n(" special method."),Ky=p(),y(xs.$$.fragment),Vy=p(),y(Es.$$.fragment),Bf=p(),pn=r("h2"),Ms=r("a"),Hp=r("span"),y(hi.$$.fragment),Jy=p(),Qp=r("span"),Gy=n("TFAlbertForMaskedLM"),Wf=p(),ct=r("div"),y(mi.$$.fragment),Xy=p(),fi=r("p"),Yy=n("Albert Model with a "),Kp=r("code"),Zy=n("language modeling"),eT=n(" head on top."),tT=p(),ui=r("p"),oT=n("This model inherits from "),Vd=r("a"),nT=n("TFPreTrainedModel"),sT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT=p(),gi=r("p"),aT=n("This model is also a "),_i=r("a"),iT=n("tf.keras.Model"),lT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dT=p(),y(zs.$$.fragment),cT=p(),Ft=r("div"),y(bi.$$.fragment),pT=p(),hn=r("p"),hT=n("The "),Jd=r("a"),mT=n("TFAlbertForMaskedLM"),fT=n(" forward method, overrides the "),Vp=r("code"),uT=n("__call__"),gT=n(" special method."),_T=p(),y(js.$$.fragment),bT=p(),y(qs.$$.fragment),kT=p(),y(Ps.$$.fragment),Uf=p(),mn=r("h2"),Cs=r("a"),Jp=r("span"),y(ki.$$.fragment),vT=p(),Gp=r("span"),yT=n("TFAlbertForSequenceClassification"),Rf=p(),pt=r("div"),y(vi.$$.fragment),TT=p(),Xp=r("p"),wT=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$T=p(),yi=r("p"),AT=n("This model inherits from "),Gd=r("a"),FT=n("TFPreTrainedModel"),xT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=p(),Ti=r("p"),MT=n("This model is also a "),wi=r("a"),zT=n("tf.keras.Model"),jT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qT=p(),y(Ls.$$.fragment),PT=p(),xt=r("div"),y($i.$$.fragment),CT=p(),fn=r("p"),LT=n("The "),Xd=r("a"),OT=n("TFAlbertForSequenceClassification"),IT=n(" forward method, overrides the "),Yp=r("code"),NT=n("__call__"),DT=n(" special method."),ST=p(),y(Os.$$.fragment),BT=p(),y(Is.$$.fragment),WT=p(),y(Ns.$$.fragment),Hf=p(),un=r("h2"),Ds=r("a"),Zp=r("span"),y(Ai.$$.fragment),UT=p(),eh=r("span"),RT=n("TFAlbertForMultipleChoice"),Qf=p(),ht=r("div"),y(Fi.$$.fragment),HT=p(),th=r("p"),QT=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),KT=p(),xi=r("p"),VT=n("This model inherits from "),Yd=r("a"),JT=n("TFPreTrainedModel"),GT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),XT=p(),Ei=r("p"),YT=n("This model is also a "),Mi=r("a"),ZT=n("tf.keras.Model"),ew=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tw=p(),y(Ss.$$.fragment),ow=p(),Qt=r("div"),y(zi.$$.fragment),nw=p(),gn=r("p"),sw=n("The "),Zd=r("a"),rw=n("TFAlbertForMultipleChoice"),aw=n(" forward method, overrides the "),oh=r("code"),iw=n("__call__"),lw=n(" special method."),dw=p(),y(Bs.$$.fragment),cw=p(),y(Ws.$$.fragment),Kf=p(),_n=r("h2"),Us=r("a"),nh=r("span"),y(ji.$$.fragment),pw=p(),sh=r("span"),hw=n("TFAlbertForTokenClassification"),Vf=p(),mt=r("div"),y(qi.$$.fragment),mw=p(),rh=r("p"),fw=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uw=p(),Pi=r("p"),gw=n("This model inherits from "),ec=r("a"),_w=n("TFPreTrainedModel"),bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kw=p(),Ci=r("p"),vw=n("This model is also a "),Li=r("a"),yw=n("tf.keras.Model"),Tw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ww=p(),y(Rs.$$.fragment),$w=p(),Et=r("div"),y(Oi.$$.fragment),Aw=p(),bn=r("p"),Fw=n("The "),tc=r("a"),xw=n("TFAlbertForTokenClassification"),Ew=n(" forward method, overrides the "),ah=r("code"),Mw=n("__call__"),zw=n(" special method."),jw=p(),y(Hs.$$.fragment),qw=p(),y(Qs.$$.fragment),Pw=p(),y(Ks.$$.fragment),Jf=p(),kn=r("h2"),Vs=r("a"),ih=r("span"),y(Ii.$$.fragment),Cw=p(),lh=r("span"),Lw=n("TFAlbertForQuestionAnswering"),Gf=p(),ft=r("div"),y(Ni.$$.fragment),Ow=p(),vn=r("p"),Iw=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dh=r("code"),Nw=n("span start logits"),Dw=n(" and "),ch=r("code"),Sw=n("span end logits"),Bw=n(")."),Ww=p(),Di=r("p"),Uw=n("This model inherits from "),oc=r("a"),Rw=n("TFPreTrainedModel"),Hw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qw=p(),Si=r("p"),Kw=n("This model is also a "),Bi=r("a"),Vw=n("tf.keras.Model"),Jw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gw=p(),y(Js.$$.fragment),Xw=p(),Mt=r("div"),y(Wi.$$.fragment),Yw=p(),yn=r("p"),Zw=n("The "),nc=r("a"),e2=n("TFAlbertForQuestionAnswering"),t2=n(" forward method, overrides the "),ph=r("code"),o2=n("__call__"),n2=n(" special method."),s2=p(),y(Gs.$$.fragment),r2=p(),y(Xs.$$.fragment),a2=p(),y(Ys.$$.fragment),Xf=p(),Tn=r("h2"),Zs=r("a"),hh=r("span"),y(Ui.$$.fragment),i2=p(),mh=r("span"),l2=n("FlaxAlbertModel"),Yf=p(),et=r("div"),y(Ri.$$.fragment),d2=p(),fh=r("p"),c2=n("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),p2=p(),Hi=r("p"),h2=n("This model inherits from "),sc=r("a"),m2=n("FlaxPreTrainedModel"),f2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),u2=p(),Qi=r("p"),g2=n("This model is also a Flax Linen "),Ki=r("a"),_2=n("flax.linen.Module"),b2=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),k2=p(),uh=r("p"),v2=n("Finally, this model supports inherent JAX features such as:"),y2=p(),lo=r("ul"),gh=r("li"),Vi=r("a"),T2=n("Just-In-Time (JIT) compilation"),w2=p(),_h=r("li"),Ji=r("a"),$2=n("Automatic Differentiation"),A2=p(),bh=r("li"),Gi=r("a"),F2=n("Vectorization"),x2=p(),kh=r("li"),Xi=r("a"),E2=n("Parallelization"),M2=p(),Kt=r("div"),y(Yi.$$.fragment),z2=p(),wn=r("p"),j2=n("The "),vh=r("code"),q2=n("FlaxAlbertPreTrainedModel"),P2=n(" forward method, overrides the "),yh=r("code"),C2=n("__call__"),L2=n(" special method."),O2=p(),y(er.$$.fragment),I2=p(),y(tr.$$.fragment),Zf=p(),$n=r("h2"),or=r("a"),Th=r("span"),y(Zi.$$.fragment),N2=p(),wh=r("span"),D2=n("FlaxAlbertForPreTraining"),eu=p(),tt=r("div"),y(el.$$.fragment),S2=p(),An=r("p"),B2=n("Albert Model with two heads on top as done during the pretraining: a "),$h=r("code"),W2=n("masked language modeling"),U2=n(` head and a
`),Ah=r("code"),R2=n("sentence order prediction (classification)"),H2=n(" head."),Q2=p(),tl=r("p"),K2=n("This model inherits from "),rc=r("a"),V2=n("FlaxPreTrainedModel"),J2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G2=p(),ol=r("p"),X2=n("This model is also a Flax Linen "),nl=r("a"),Y2=n("flax.linen.Module"),Z2=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e$=p(),Fh=r("p"),t$=n("Finally, this model supports inherent JAX features such as:"),o$=p(),co=r("ul"),xh=r("li"),sl=r("a"),n$=n("Just-In-Time (JIT) compilation"),s$=p(),Eh=r("li"),rl=r("a"),r$=n("Automatic Differentiation"),a$=p(),Mh=r("li"),al=r("a"),i$=n("Vectorization"),l$=p(),zh=r("li"),il=r("a"),d$=n("Parallelization"),c$=p(),Vt=r("div"),y(ll.$$.fragment),p$=p(),Fn=r("p"),h$=n("The "),jh=r("code"),m$=n("FlaxAlbertPreTrainedModel"),f$=n(" forward method, overrides the "),qh=r("code"),u$=n("__call__"),g$=n(" special method."),_$=p(),y(nr.$$.fragment),b$=p(),y(sr.$$.fragment),tu=p(),xn=r("h2"),rr=r("a"),Ph=r("span"),y(dl.$$.fragment),k$=p(),Ch=r("span"),v$=n("FlaxAlbertForMaskedLM"),ou=p(),ot=r("div"),y(cl.$$.fragment),y$=p(),pl=r("p"),T$=n("Albert Model with a "),Lh=r("code"),w$=n("language modeling"),$$=n(" head on top."),A$=p(),hl=r("p"),F$=n("This model inherits from "),ac=r("a"),x$=n("FlaxPreTrainedModel"),E$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M$=p(),ml=r("p"),z$=n("This model is also a Flax Linen "),fl=r("a"),j$=n("flax.linen.Module"),q$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),P$=p(),Oh=r("p"),C$=n("Finally, this model supports inherent JAX features such as:"),L$=p(),po=r("ul"),Ih=r("li"),ul=r("a"),O$=n("Just-In-Time (JIT) compilation"),I$=p(),Nh=r("li"),gl=r("a"),N$=n("Automatic Differentiation"),D$=p(),Dh=r("li"),_l=r("a"),S$=n("Vectorization"),B$=p(),Sh=r("li"),bl=r("a"),W$=n("Parallelization"),U$=p(),Jt=r("div"),y(kl.$$.fragment),R$=p(),En=r("p"),H$=n("The "),Bh=r("code"),Q$=n("FlaxAlbertPreTrainedModel"),K$=n(" forward method, overrides the "),Wh=r("code"),V$=n("__call__"),J$=n(" special method."),G$=p(),y(ar.$$.fragment),X$=p(),y(ir.$$.fragment),nu=p(),Mn=r("h2"),lr=r("a"),Uh=r("span"),y(vl.$$.fragment),Y$=p(),Rh=r("span"),Z$=n("FlaxAlbertForSequenceClassification"),su=p(),nt=r("div"),y(yl.$$.fragment),e1=p(),Hh=r("p"),t1=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o1=p(),Tl=r("p"),n1=n("This model inherits from "),ic=r("a"),s1=n("FlaxPreTrainedModel"),r1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a1=p(),wl=r("p"),i1=n("This model is also a Flax Linen "),$l=r("a"),l1=n("flax.linen.Module"),d1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c1=p(),Qh=r("p"),p1=n("Finally, this model supports inherent JAX features such as:"),h1=p(),ho=r("ul"),Kh=r("li"),Al=r("a"),m1=n("Just-In-Time (JIT) compilation"),f1=p(),Vh=r("li"),Fl=r("a"),u1=n("Automatic Differentiation"),g1=p(),Jh=r("li"),xl=r("a"),_1=n("Vectorization"),b1=p(),Gh=r("li"),El=r("a"),k1=n("Parallelization"),v1=p(),Gt=r("div"),y(Ml.$$.fragment),y1=p(),zn=r("p"),T1=n("The "),Xh=r("code"),w1=n("FlaxAlbertPreTrainedModel"),$1=n(" forward method, overrides the "),Yh=r("code"),A1=n("__call__"),F1=n(" special method."),x1=p(),y(dr.$$.fragment),E1=p(),y(cr.$$.fragment),ru=p(),jn=r("h2"),pr=r("a"),Zh=r("span"),y(zl.$$.fragment),M1=p(),em=r("span"),z1=n("FlaxAlbertForMultipleChoice"),au=p(),st=r("div"),y(jl.$$.fragment),j1=p(),tm=r("p"),q1=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),P1=p(),ql=r("p"),C1=n("This model inherits from "),lc=r("a"),L1=n("FlaxPreTrainedModel"),O1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),I1=p(),Pl=r("p"),N1=n("This model is also a Flax Linen "),Cl=r("a"),D1=n("flax.linen.Module"),S1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),B1=p(),om=r("p"),W1=n("Finally, this model supports inherent JAX features such as:"),U1=p(),mo=r("ul"),nm=r("li"),Ll=r("a"),R1=n("Just-In-Time (JIT) compilation"),H1=p(),sm=r("li"),Ol=r("a"),Q1=n("Automatic Differentiation"),K1=p(),rm=r("li"),Il=r("a"),V1=n("Vectorization"),J1=p(),am=r("li"),Nl=r("a"),G1=n("Parallelization"),X1=p(),Xt=r("div"),y(Dl.$$.fragment),Y1=p(),qn=r("p"),Z1=n("The "),im=r("code"),e0=n("FlaxAlbertPreTrainedModel"),t0=n(" forward method, overrides the "),lm=r("code"),o0=n("__call__"),n0=n(" special method."),s0=p(),y(hr.$$.fragment),r0=p(),y(mr.$$.fragment),iu=p(),Pn=r("h2"),fr=r("a"),dm=r("span"),y(Sl.$$.fragment),a0=p(),cm=r("span"),i0=n("FlaxAlbertForTokenClassification"),lu=p(),rt=r("div"),y(Bl.$$.fragment),l0=p(),pm=r("p"),d0=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),c0=p(),Wl=r("p"),p0=n("This model inherits from "),dc=r("a"),h0=n("FlaxPreTrainedModel"),m0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f0=p(),Ul=r("p"),u0=n("This model is also a Flax Linen "),Rl=r("a"),g0=n("flax.linen.Module"),_0=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b0=p(),hm=r("p"),k0=n("Finally, this model supports inherent JAX features such as:"),v0=p(),fo=r("ul"),mm=r("li"),Hl=r("a"),y0=n("Just-In-Time (JIT) compilation"),T0=p(),fm=r("li"),Ql=r("a"),w0=n("Automatic Differentiation"),$0=p(),um=r("li"),Kl=r("a"),A0=n("Vectorization"),F0=p(),gm=r("li"),Vl=r("a"),x0=n("Parallelization"),E0=p(),Yt=r("div"),y(Jl.$$.fragment),M0=p(),Cn=r("p"),z0=n("The "),_m=r("code"),j0=n("FlaxAlbertPreTrainedModel"),q0=n(" forward method, overrides the "),bm=r("code"),P0=n("__call__"),C0=n(" special method."),L0=p(),y(ur.$$.fragment),O0=p(),y(gr.$$.fragment),du=p(),Ln=r("h2"),_r=r("a"),km=r("span"),y(Gl.$$.fragment),I0=p(),vm=r("span"),N0=n("FlaxAlbertForQuestionAnswering"),cu=p(),at=r("div"),y(Xl.$$.fragment),D0=p(),On=r("p"),S0=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ym=r("code"),B0=n("span start logits"),W0=n(" and "),Tm=r("code"),U0=n("span end logits"),R0=n(")."),H0=p(),Yl=r("p"),Q0=n("This model inherits from "),cc=r("a"),K0=n("FlaxPreTrainedModel"),V0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),J0=p(),Zl=r("p"),G0=n("This model is also a Flax Linen "),ed=r("a"),X0=n("flax.linen.Module"),Y0=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Z0=p(),wm=r("p"),eA=n("Finally, this model supports inherent JAX features such as:"),tA=p(),uo=r("ul"),$m=r("li"),td=r("a"),oA=n("Just-In-Time (JIT) compilation"),nA=p(),Am=r("li"),od=r("a"),sA=n("Automatic Differentiation"),rA=p(),Fm=r("li"),nd=r("a"),aA=n("Vectorization"),iA=p(),xm=r("li"),sd=r("a"),lA=n("Parallelization"),dA=p(),Zt=r("div"),y(rd.$$.fragment),cA=p(),In=r("p"),pA=n("The "),Em=r("code"),hA=n("FlaxAlbertPreTrainedModel"),mA=n(" forward method, overrides the "),Mm=r("code"),fA=n("__call__"),uA=n(" special method."),gA=p(),y(br.$$.fragment),_A=p(),y(kr.$$.fragment),this.h()},l(o){const b=aM('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var ad=i(c);f=a(ad,"A",{id:!0,class:!0,href:!0});var zm=i(f);k=a(zm,"SPAN",{});var jm=i(k);T(l.$$.fragment,jm),jm.forEach(t),zm.forEach(t),m=h(ad),M=a(ad,"SPAN",{});var qm=i(M);ye=s(qm,"ALBERT"),qm.forEach(t),ad.forEach(t),ge=h(o),B=a(o,"H2",{class:!0});var id=i(B);se=a(id,"A",{id:!0,class:!0,href:!0});var Pm=i(se);te=a(Pm,"SPAN",{});var Cm=i(te);T(E.$$.fragment,Cm),Cm.forEach(t),Pm.forEach(t),Te=h(id),Q=a(id,"SPAN",{});var Lm=i(Q);we=s(Lm,"Overview"),Lm.forEach(t),id.forEach(t),_e=h(o),W=a(o,"P",{});var ld=i(W);$e=s(ld,"The ALBERT model was proposed in "),ae=a(ld,"A",{href:!0,rel:!0});var Om=i(ae);G=s(Om,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Om.forEach(t),Ae=s(ld,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),ld.forEach(t),be=h(o),U=a(o,"UL",{});var dd=i(U);me=a(dd,"LI",{});var Im=i(me);Fe=s(Im,"Splitting the embedding matrix into two smaller matrices."),Im.forEach(t),X=h(dd),fe=a(dd,"LI",{});var Nm=i(fe);xe=s(Nm,"Using repeating layers split among groups."),Nm.forEach(t),dd.forEach(t),oe=h(o),q=a(o,"P",{});var Dm=i(q);L=s(Dm,"The abstract from the paper is the following:"),Dm.forEach(t),ke=h(o),H=a(o,"P",{});var Sm=i(H);ue=a(Sm,"EM",{});var Bm=i(ue);Ee=s(Bm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),Bm.forEach(t),Sm.forEach(t),J=h(o),le=a(o,"P",{});var Wm=i(le);Me=s(Wm,"Tips:"),Wm.forEach(t),C=h(o),re=a(o,"UL",{});var cd=i(re);K=a(cd,"LI",{});var Um=i(K);ze=s(Um,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Um.forEach(t),je=h(cd),V=a(cd,"LI",{});var Rm=i(V);qe=s(Rm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Rm.forEach(t),cd.forEach(t),ve=h(o),O=a(o,"P",{});var go=i(O);Pe=s(go,"This model was contributed by "),R=a(go,"A",{href:!0,rel:!0});var Hm=i(R);Ce=s(Hm,"lysandre"),Hm.forEach(t),ne=s(go,`. This model jax version was contributed by
`),P=a(go,"A",{href:!0,rel:!0});var Qm=i(P);Le=s(Qm,"kamalkraj"),Qm.forEach(t),I=s(go,". The original code can be found "),ie=a(go,"A",{href:!0,rel:!0});var Km=i(ie);Oe=s(Km,"here"),Km.forEach(t),v=s(go,"."),go.forEach(t),z=h(o),Ne=a(o,"H2",{class:!0});var pd=i(Ne);Z=a(pd,"A",{id:!0,class:!0,href:!0});var Vm=i(Z);He=a(Vm,"SPAN",{});var Jm=i(He);T(De.$$.fragment,Jm),Jm.forEach(t),Vm.forEach(t),j=h(pd),Qe=a(pd,"SPAN",{});var Gm=i(Qe);Ve=s(Gm,"AlbertConfig"),Gm.forEach(t),pd.forEach(t),Ke=h(o),de=a(o,"DIV",{class:!0});var _o=i(de);T(Se.$$.fragment,_o),S=h(_o),N=a(_o,"P",{});var bo=i(N);Je=s(bo,"This is the configuration class to store the configuration of a "),We=a(bo,"A",{href:!0});var Xm=i(We);Y=s(Xm,"AlbertModel"),Xm.forEach(t),Ge=s(bo," or a "),Ue=a(bo,"A",{href:!0});var Ym=i(Ue);Ie=s(Ym,"TFAlbertModel"),Ym.forEach(t),Xe=s(bo,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),ee=a(bo,"A",{href:!0,rel:!0});var Zm=i(ee);Ye=s(Zm,"albert-xxlarge-v2"),Zm.forEach(t),zg=s(bo," architecture."),bo.forEach(t),jg=h(_o),Oo=a(_o,"P",{});var Nn=i(Oo);qg=s(Nn,"Configuration objects inherit from "),kd=a(Nn,"A",{href:!0});var ef=i(kd);Pg=s(ef,"PretrainedConfig"),ef.forEach(t),Cg=s(Nn,` and can be used to control the model outputs. Read the
documentation from `),vd=a(Nn,"A",{href:!0});var tf=i(vd);Lg=s(tf,"PretrainedConfig"),tf.forEach(t),Og=s(Nn," for more information."),Nn.forEach(t),Ig=h(_o),T(Bn.$$.fragment,_o),_o.forEach(t),gf=h(o),Io=a(o,"H2",{class:!0});var hd=i(Io);Wn=a(hd,"A",{id:!0,class:!0,href:!0});var of=i(Wn);Bc=a(of,"SPAN",{});var nf=i(Bc);T(Ur.$$.fragment,nf),nf.forEach(t),of.forEach(t),Ng=h(hd),Wc=a(hd,"SPAN",{});var sf=i(Wc);Dg=s(sf,"AlbertTokenizer"),sf.forEach(t),hd.forEach(t),_f=h(o),Ze=a(o,"DIV",{class:!0});var ut=i(Ze);T(Rr.$$.fragment,ut),Sg=h(ut),Hr=a(ut,"P",{});var md=i(Hr);Bg=s(md,"Construct an ALBERT tokenizer. Based on "),Qr=a(md,"A",{href:!0,rel:!0});var rf=i(Qr);Wg=s(rf,"SentencePiece"),rf.forEach(t),Ug=s(md,"."),md.forEach(t),Rg=h(ut),Kr=a(ut,"P",{});var fd=i(Kr);Hg=s(fd,"This tokenizer inherits from "),yd=a(fd,"A",{href:!0});var af=i(yd);Qg=s(af,"PreTrainedTokenizer"),af.forEach(t),Kg=s(fd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fd.forEach(t),Vg=h(ut),vo=a(ut,"DIV",{class:!0});var Dn=i(vo);T(Vr.$$.fragment,Dn),Jg=h(Dn),Uc=a(Dn,"P",{});var lf=i(Uc);Gg=s(lf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),lf.forEach(t),Xg=h(Dn),Jr=a(Dn,"UL",{});var ud=i(Jr);Td=a(ud,"LI",{});var pc=i(Td);Yg=s(pc,"single sequence: "),Rc=a(pc,"CODE",{});var df=i(Rc);Zg=s(df,"[CLS] X [SEP]"),df.forEach(t),pc.forEach(t),e_=h(ud),wd=a(ud,"LI",{});var hc=i(wd);t_=s(hc,"pair of sequences: "),Hc=a(hc,"CODE",{});var cf=i(Hc);o_=s(cf,"[CLS] A [SEP] B [SEP]"),cf.forEach(t),hc.forEach(t),ud.forEach(t),Dn.forEach(t),n_=h(ut),Un=a(ut,"DIV",{class:!0});var gd=i(Un);T(Gr.$$.fragment,gd),s_=h(gd),Xr=a(gd,"P",{});var _d=i(Xr);r_=s(_d,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qc=a(_d,"CODE",{});var pf=i(Qc);a_=s(pf,"prepare_for_model"),pf.forEach(t),i_=s(_d," method."),_d.forEach(t),gd.forEach(t),l_=h(ut),Dt=a(ut,"DIV",{class:!0});var ko=i(Dt);T(Yr.$$.fragment,ko),d_=h(ko),Kc=a(ko,"P",{});var hf=i(Kc);c_=s(hf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),hf.forEach(t),p_=h(ko),T(Rn.$$.fragment,ko),h_=h(ko),No=a(ko,"P",{});var Sn=i(No);m_=s(Sn,"If "),Vc=a(Sn,"CODE",{});var mf=i(Vc);f_=s(mf,"token_ids_1"),mf.forEach(t),u_=s(Sn," is "),Jc=a(Sn,"CODE",{});var ff=i(Jc);g_=s(ff,"None"),ff.forEach(t),__=s(Sn,", this method only returns the first portion of the mask (0s)."),Sn.forEach(t),ko.forEach(t),b_=h(ut),$d=a(ut,"DIV",{class:!0});var uf=i($d);T(Zr.$$.fragment,uf),uf.forEach(t),ut.forEach(t),bf=h(o),Do=a(o,"H2",{class:!0});var bd=i(Do);Hn=a(bd,"A",{id:!0,class:!0,href:!0});var vA=i(Hn);Gc=a(vA,"SPAN",{});var yA=i(Gc);T(ea.$$.fragment,yA),yA.forEach(t),vA.forEach(t),k_=h(bd),Xc=a(bd,"SPAN",{});var TA=i(Xc);v_=s(TA,"AlbertTokenizerFast"),TA.forEach(t),bd.forEach(t),kf=h(o),Nt=a(o,"DIV",{class:!0});var vr=i(Nt);T(ta.$$.fragment,vr),y_=h(vr),io=a(vr,"P",{});var yr=i(io);T_=s(yr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Yc=a(yr,"EM",{});var wA=i(Yc);w_=s(wA,"tokenizers"),wA.forEach(t),$_=s(yr,` library). Based on
`),oa=a(yr,"A",{href:!0,rel:!0});var $A=i(oa);A_=s($A,"Unigram"),$A.forEach(t),F_=s(yr,`. This
tokenizer inherits from `),Ad=a(yr,"A",{href:!0});var AA=i(Ad);x_=s(AA,"PreTrainedTokenizerFast"),AA.forEach(t),E_=s(yr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),yr.forEach(t),M_=h(vr),yo=a(vr,"DIV",{class:!0});var mc=i(yo);T(na.$$.fragment,mc),z_=h(mc),Zc=a(mc,"P",{});var FA=i(Zc);j_=s(FA,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),FA.forEach(t),q_=h(mc),sa=a(mc,"UL",{});var hu=i(sa);Fd=a(hu,"LI",{});var bA=i(Fd);P_=s(bA,"single sequence: "),ep=a(bA,"CODE",{});var xA=i(ep);C_=s(xA,"[CLS] X [SEP]"),xA.forEach(t),bA.forEach(t),L_=h(hu),xd=a(hu,"LI",{});var kA=i(xd);O_=s(kA,"pair of sequences: "),tp=a(kA,"CODE",{});var EA=i(tp);I_=s(EA,"[CLS] A [SEP] B [SEP]"),EA.forEach(t),kA.forEach(t),hu.forEach(t),mc.forEach(t),N_=h(vr),St=a(vr,"DIV",{class:!0});var Tr=i(St);T(ra.$$.fragment,Tr),D_=h(Tr),op=a(Tr,"P",{});var MA=i(op);S_=s(MA,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),MA.forEach(t),B_=h(Tr),T(Qn.$$.fragment,Tr),W_=h(Tr),np=a(Tr,"P",{});var zA=i(np);U_=s(zA,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),zA.forEach(t),Tr.forEach(t),vr.forEach(t),vf=h(o),So=a(o,"H2",{class:!0});var mu=i(So);Kn=a(mu,"A",{id:!0,class:!0,href:!0});var jA=i(Kn);sp=a(jA,"SPAN",{});var qA=i(sp);T(aa.$$.fragment,qA),qA.forEach(t),jA.forEach(t),R_=h(mu),rp=a(mu,"SPAN",{});var PA=i(rp);H_=s(PA,"Albert specific outputs"),PA.forEach(t),mu.forEach(t),yf=h(o),Bo=a(o,"DIV",{class:!0});var fu=i(Bo);T(ia.$$.fragment,fu),Q_=h(fu),la=a(fu,"P",{});var uu=i(la);K_=s(uu,"Output type of "),Ed=a(uu,"A",{href:!0});var CA=i(Ed);V_=s(CA,"AlbertForPreTraining"),CA.forEach(t),J_=s(uu,"."),uu.forEach(t),fu.forEach(t),Tf=h(o),Wo=a(o,"DIV",{class:!0});var gu=i(Wo);T(da.$$.fragment,gu),G_=h(gu),ca=a(gu,"P",{});var _u=i(ca);X_=s(_u,"Output type of "),Md=a(_u,"A",{href:!0});var LA=i(Md);Y_=s(LA,"TFAlbertForPreTraining"),LA.forEach(t),Z_=s(_u,"."),_u.forEach(t),gu.forEach(t),wf=h(o),Uo=a(o,"H2",{class:!0});var bu=i(Uo);Vn=a(bu,"A",{id:!0,class:!0,href:!0});var OA=i(Vn);ap=a(OA,"SPAN",{});var IA=i(ap);T(pa.$$.fragment,IA),IA.forEach(t),OA.forEach(t),eb=h(bu),ip=a(bu,"SPAN",{});var NA=i(ip);tb=s(NA,"AlbertModel"),NA.forEach(t),bu.forEach(t),$f=h(o),gt=a(o,"DIV",{class:!0});var To=i(gt);T(ha.$$.fragment,To),ob=h(To),lp=a(To,"P",{});var DA=i(lp);nb=s(DA,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),DA.forEach(t),sb=h(To),ma=a(To,"P",{});var ku=i(ma);rb=s(ku,"This model inherits from "),zd=a(ku,"A",{href:!0});var SA=i(zd);ab=s(SA,"PreTrainedModel"),SA.forEach(t),ib=s(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),lb=h(To),fa=a(To,"P",{});var vu=i(fa);db=s(vu,"This model is also a PyTorch "),ua=a(vu,"A",{href:!0,rel:!0});var BA=i(ua);cb=s(BA,"torch.nn.Module"),BA.forEach(t),pb=s(vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu.forEach(t),hb=h(To),Bt=a(To,"DIV",{class:!0});var wr=i(Bt);T(ga.$$.fragment,wr),mb=h(wr),Ro=a(wr,"P",{});var fc=i(Ro);fb=s(fc,"The "),jd=a(fc,"A",{href:!0});var WA=i(jd);ub=s(WA,"AlbertModel"),WA.forEach(t),gb=s(fc," forward method, overrides the "),dp=a(fc,"CODE",{});var UA=i(dp);_b=s(UA,"__call__"),UA.forEach(t),bb=s(fc," special method."),fc.forEach(t),kb=h(wr),T(Jn.$$.fragment,wr),vb=h(wr),T(Gn.$$.fragment,wr),wr.forEach(t),To.forEach(t),Af=h(o),Ho=a(o,"H2",{class:!0});var yu=i(Ho);Xn=a(yu,"A",{id:!0,class:!0,href:!0});var RA=i(Xn);cp=a(RA,"SPAN",{});var HA=i(cp);T(_a.$$.fragment,HA),HA.forEach(t),RA.forEach(t),yb=h(yu),pp=a(yu,"SPAN",{});var QA=i(pp);Tb=s(QA,"AlbertForPreTraining"),QA.forEach(t),yu.forEach(t),Ff=h(o),_t=a(o,"DIV",{class:!0});var wo=i(_t);T(ba.$$.fragment,wo),wb=h(wo),Qo=a(wo,"P",{});var uc=i(Qo);$b=s(uc,"Albert Model with two heads on top as done during the pretraining: a "),hp=a(uc,"CODE",{});var KA=i(hp);Ab=s(KA,"masked language modeling"),KA.forEach(t),Fb=s(uc,` head and a
`),mp=a(uc,"CODE",{});var VA=i(mp);xb=s(VA,"sentence order prediction (classification)"),VA.forEach(t),Eb=s(uc," head."),uc.forEach(t),Mb=h(wo),ka=a(wo,"P",{});var Tu=i(ka);zb=s(Tu,"This model inherits from "),qd=a(Tu,"A",{href:!0});var JA=i(qd);jb=s(JA,"PreTrainedModel"),JA.forEach(t),qb=s(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),Pb=h(wo),va=a(wo,"P",{});var wu=i(va);Cb=s(wu,"This model is also a PyTorch "),ya=a(wu,"A",{href:!0,rel:!0});var GA=i(ya);Lb=s(GA,"torch.nn.Module"),GA.forEach(t),Ob=s(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(t),Ib=h(wo),Wt=a(wo,"DIV",{class:!0});var $r=i(Wt);T(Ta.$$.fragment,$r),Nb=h($r),Ko=a($r,"P",{});var gc=i(Ko);Db=s(gc,"The "),Pd=a(gc,"A",{href:!0});var XA=i(Pd);Sb=s(XA,"AlbertForPreTraining"),XA.forEach(t),Bb=s(gc," forward method, overrides the "),fp=a(gc,"CODE",{});var YA=i(fp);Wb=s(YA,"__call__"),YA.forEach(t),Ub=s(gc," special method."),gc.forEach(t),Rb=h($r),T(Yn.$$.fragment,$r),Hb=h($r),T(Zn.$$.fragment,$r),$r.forEach(t),wo.forEach(t),xf=h(o),Vo=a(o,"H2",{class:!0});var $u=i(Vo);es=a($u,"A",{id:!0,class:!0,href:!0});var ZA=i(es);up=a(ZA,"SPAN",{});var e4=i(up);T(wa.$$.fragment,e4),e4.forEach(t),ZA.forEach(t),Qb=h($u),gp=a($u,"SPAN",{});var t4=i(gp);Kb=s(t4,"AlbertForMaskedLM"),t4.forEach(t),$u.forEach(t),Ef=h(o),bt=a(o,"DIV",{class:!0});var $o=i(bt);T($a.$$.fragment,$o),Vb=h($o),Aa=a($o,"P",{});var Au=i(Aa);Jb=s(Au,"Albert Model with a "),_p=a(Au,"CODE",{});var o4=i(_p);Gb=s(o4,"language modeling"),o4.forEach(t),Xb=s(Au," head on top."),Au.forEach(t),Yb=h($o),Fa=a($o,"P",{});var Fu=i(Fa);Zb=s(Fu,"This model inherits from "),Cd=a(Fu,"A",{href:!0});var n4=i(Cd);ek=s(n4,"PreTrainedModel"),n4.forEach(t),tk=s(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),ok=h($o),xa=a($o,"P",{});var xu=i(xa);nk=s(xu,"This model is also a PyTorch "),Ea=a(xu,"A",{href:!0,rel:!0});var s4=i(Ea);sk=s(s4,"torch.nn.Module"),s4.forEach(t),rk=s(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),ak=h($o),wt=a($o,"DIV",{class:!0});var Ao=i(wt);T(Ma.$$.fragment,Ao),ik=h(Ao),Jo=a(Ao,"P",{});var _c=i(Jo);lk=s(_c,"The "),Ld=a(_c,"A",{href:!0});var r4=i(Ld);dk=s(r4,"AlbertForMaskedLM"),r4.forEach(t),ck=s(_c," forward method, overrides the "),bp=a(_c,"CODE",{});var a4=i(bp);pk=s(a4,"__call__"),a4.forEach(t),hk=s(_c," special method."),_c.forEach(t),mk=h(Ao),T(ts.$$.fragment,Ao),fk=h(Ao),T(os.$$.fragment,Ao),uk=h(Ao),T(ns.$$.fragment,Ao),Ao.forEach(t),$o.forEach(t),Mf=h(o),Go=a(o,"H2",{class:!0});var Eu=i(Go);ss=a(Eu,"A",{id:!0,class:!0,href:!0});var i4=i(ss);kp=a(i4,"SPAN",{});var l4=i(kp);T(za.$$.fragment,l4),l4.forEach(t),i4.forEach(t),gk=h(Eu),vp=a(Eu,"SPAN",{});var d4=i(vp);_k=s(d4,"AlbertForSequenceClassification"),d4.forEach(t),Eu.forEach(t),zf=h(o),kt=a(o,"DIV",{class:!0});var Fo=i(kt);T(ja.$$.fragment,Fo),bk=h(Fo),yp=a(Fo,"P",{});var c4=i(yp);kk=s(c4,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),c4.forEach(t),vk=h(Fo),qa=a(Fo,"P",{});var Mu=i(qa);yk=s(Mu,"This model inherits from "),Od=a(Mu,"A",{href:!0});var p4=i(Od);Tk=s(p4,"PreTrainedModel"),p4.forEach(t),wk=s(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),$k=h(Fo),Pa=a(Fo,"P",{});var zu=i(Pa);Ak=s(zu,"This model is also a PyTorch "),Ca=a(zu,"A",{href:!0,rel:!0});var h4=i(Ca);Fk=s(h4,"torch.nn.Module"),h4.forEach(t),xk=s(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Ek=h(Fo),it=a(Fo,"DIV",{class:!0});var zt=i(it);T(La.$$.fragment,zt),Mk=h(zt),Xo=a(zt,"P",{});var bc=i(Xo);zk=s(bc,"The "),Id=a(bc,"A",{href:!0});var m4=i(Id);jk=s(m4,"AlbertForSequenceClassification"),m4.forEach(t),qk=s(bc," forward method, overrides the "),Tp=a(bc,"CODE",{});var f4=i(Tp);Pk=s(f4,"__call__"),f4.forEach(t),Ck=s(bc," special method."),bc.forEach(t),Lk=h(zt),T(rs.$$.fragment,zt),Ok=h(zt),T(as.$$.fragment,zt),Ik=h(zt),T(is.$$.fragment,zt),Nk=h(zt),T(ls.$$.fragment,zt),Dk=h(zt),T(ds.$$.fragment,zt),zt.forEach(t),Fo.forEach(t),jf=h(o),Yo=a(o,"H2",{class:!0});var ju=i(Yo);cs=a(ju,"A",{id:!0,class:!0,href:!0});var u4=i(cs);wp=a(u4,"SPAN",{});var g4=i(wp);T(Oa.$$.fragment,g4),g4.forEach(t),u4.forEach(t),Sk=h(ju),$p=a(ju,"SPAN",{});var _4=i($p);Bk=s(_4,"AlbertForMultipleChoice"),_4.forEach(t),ju.forEach(t),qf=h(o),vt=a(o,"DIV",{class:!0});var xo=i(vt);T(Ia.$$.fragment,xo),Wk=h(xo),Ap=a(xo,"P",{});var b4=i(Ap);Uk=s(b4,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b4.forEach(t),Rk=h(xo),Na=a(xo,"P",{});var qu=i(Na);Hk=s(qu,"This model inherits from "),Nd=a(qu,"A",{href:!0});var k4=i(Nd);Qk=s(k4,"PreTrainedModel"),k4.forEach(t),Kk=s(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),Vk=h(xo),Da=a(xo,"P",{});var Pu=i(Da);Jk=s(Pu,"This model is also a PyTorch "),Sa=a(Pu,"A",{href:!0,rel:!0});var v4=i(Sa);Gk=s(v4,"torch.nn.Module"),v4.forEach(t),Xk=s(Pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu.forEach(t),Yk=h(xo),Ut=a(xo,"DIV",{class:!0});var Ar=i(Ut);T(Ba.$$.fragment,Ar),Zk=h(Ar),Zo=a(Ar,"P",{});var kc=i(Zo);ev=s(kc,"The "),Dd=a(kc,"A",{href:!0});var y4=i(Dd);tv=s(y4,"AlbertForMultipleChoice"),y4.forEach(t),ov=s(kc," forward method, overrides the "),Fp=a(kc,"CODE",{});var T4=i(Fp);nv=s(T4,"__call__"),T4.forEach(t),sv=s(kc," special method."),kc.forEach(t),rv=h(Ar),T(ps.$$.fragment,Ar),av=h(Ar),T(hs.$$.fragment,Ar),Ar.forEach(t),xo.forEach(t),Pf=h(o),en=a(o,"H2",{class:!0});var Cu=i(en);ms=a(Cu,"A",{id:!0,class:!0,href:!0});var w4=i(ms);xp=a(w4,"SPAN",{});var $4=i(xp);T(Wa.$$.fragment,$4),$4.forEach(t),w4.forEach(t),iv=h(Cu),Ep=a(Cu,"SPAN",{});var A4=i(Ep);lv=s(A4,"AlbertForTokenClassification"),A4.forEach(t),Cu.forEach(t),Cf=h(o),yt=a(o,"DIV",{class:!0});var Eo=i(yt);T(Ua.$$.fragment,Eo),dv=h(Eo),Mp=a(Eo,"P",{});var F4=i(Mp);cv=s(F4,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),F4.forEach(t),pv=h(Eo),Ra=a(Eo,"P",{});var Lu=i(Ra);hv=s(Lu,"This model inherits from "),Sd=a(Lu,"A",{href:!0});var x4=i(Sd);mv=s(x4,"PreTrainedModel"),x4.forEach(t),fv=s(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),uv=h(Eo),Ha=a(Eo,"P",{});var Ou=i(Ha);gv=s(Ou,"This model is also a PyTorch "),Qa=a(Ou,"A",{href:!0,rel:!0});var E4=i(Qa);_v=s(E4,"torch.nn.Module"),E4.forEach(t),bv=s(Ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ou.forEach(t),kv=h(Eo),$t=a(Eo,"DIV",{class:!0});var Mo=i($t);T(Ka.$$.fragment,Mo),vv=h(Mo),tn=a(Mo,"P",{});var vc=i(tn);yv=s(vc,"The "),Bd=a(vc,"A",{href:!0});var M4=i(Bd);Tv=s(M4,"AlbertForTokenClassification"),M4.forEach(t),wv=s(vc," forward method, overrides the "),zp=a(vc,"CODE",{});var z4=i(zp);$v=s(z4,"__call__"),z4.forEach(t),Av=s(vc," special method."),vc.forEach(t),Fv=h(Mo),T(fs.$$.fragment,Mo),xv=h(Mo),T(us.$$.fragment,Mo),Ev=h(Mo),T(gs.$$.fragment,Mo),Mo.forEach(t),Eo.forEach(t),Lf=h(o),on=a(o,"H2",{class:!0});var Iu=i(on);_s=a(Iu,"A",{id:!0,class:!0,href:!0});var j4=i(_s);jp=a(j4,"SPAN",{});var q4=i(jp);T(Va.$$.fragment,q4),q4.forEach(t),j4.forEach(t),Mv=h(Iu),qp=a(Iu,"SPAN",{});var P4=i(qp);zv=s(P4,"AlbertForQuestionAnswering"),P4.forEach(t),Iu.forEach(t),Of=h(o),Tt=a(o,"DIV",{class:!0});var zo=i(Tt);T(Ja.$$.fragment,zo),jv=h(zo),nn=a(zo,"P",{});var yc=i(nn);qv=s(yc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pp=a(yc,"CODE",{});var C4=i(Pp);Pv=s(C4,"span start logits"),C4.forEach(t),Cv=s(yc," and "),Cp=a(yc,"CODE",{});var L4=i(Cp);Lv=s(L4,"span end logits"),L4.forEach(t),Ov=s(yc,")."),yc.forEach(t),Iv=h(zo),Ga=a(zo,"P",{});var Nu=i(Ga);Nv=s(Nu,"This model inherits from "),Wd=a(Nu,"A",{href:!0});var O4=i(Wd);Dv=s(O4,"PreTrainedModel"),O4.forEach(t),Sv=s(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu.forEach(t),Bv=h(zo),Xa=a(zo,"P",{});var Du=i(Xa);Wv=s(Du,"This model is also a PyTorch "),Ya=a(Du,"A",{href:!0,rel:!0});var I4=i(Ya);Uv=s(I4,"torch.nn.Module"),I4.forEach(t),Rv=s(Du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Du.forEach(t),Hv=h(zo),At=a(zo,"DIV",{class:!0});var jo=i(At);T(Za.$$.fragment,jo),Qv=h(jo),sn=a(jo,"P",{});var Tc=i(sn);Kv=s(Tc,"The "),Ud=a(Tc,"A",{href:!0});var N4=i(Ud);Vv=s(N4,"AlbertForQuestionAnswering"),N4.forEach(t),Jv=s(Tc," forward method, overrides the "),Lp=a(Tc,"CODE",{});var D4=i(Lp);Gv=s(D4,"__call__"),D4.forEach(t),Xv=s(Tc," special method."),Tc.forEach(t),Yv=h(jo),T(bs.$$.fragment,jo),Zv=h(jo),T(ks.$$.fragment,jo),ey=h(jo),T(vs.$$.fragment,jo),jo.forEach(t),zo.forEach(t),If=h(o),rn=a(o,"H2",{class:!0});var Su=i(rn);ys=a(Su,"A",{id:!0,class:!0,href:!0});var S4=i(ys);Op=a(S4,"SPAN",{});var B4=i(Op);T(ei.$$.fragment,B4),B4.forEach(t),S4.forEach(t),ty=h(Su),Ip=a(Su,"SPAN",{});var W4=i(Ip);oy=s(W4,"TFAlbertModel"),W4.forEach(t),Su.forEach(t),Nf=h(o),lt=a(o,"DIV",{class:!0});var eo=i(lt);T(ti.$$.fragment,eo),ny=h(eo),Np=a(eo,"P",{});var U4=i(Np);sy=s(U4,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),U4.forEach(t),ry=h(eo),oi=a(eo,"P",{});var Bu=i(oi);ay=s(Bu,"This model inherits from "),Rd=a(Bu,"A",{href:!0});var R4=i(Rd);iy=s(R4,"TFPreTrainedModel"),R4.forEach(t),ly=s(Bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu.forEach(t),dy=h(eo),ni=a(eo,"P",{});var Wu=i(ni);cy=s(Wu,"This model is also a "),si=a(Wu,"A",{href:!0,rel:!0});var H4=i(si);py=s(H4,"tf.keras.Model"),H4.forEach(t),hy=s(Wu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wu.forEach(t),my=h(eo),T(Ts.$$.fragment,eo),fy=h(eo),Rt=a(eo,"DIV",{class:!0});var Fr=i(Rt);T(ri.$$.fragment,Fr),uy=h(Fr),an=a(Fr,"P",{});var wc=i(an);gy=s(wc,"The "),Hd=a(wc,"A",{href:!0});var Q4=i(Hd);_y=s(Q4,"TFAlbertModel"),Q4.forEach(t),by=s(wc," forward method, overrides the "),Dp=a(wc,"CODE",{});var K4=i(Dp);ky=s(K4,"__call__"),K4.forEach(t),vy=s(wc," special method."),wc.forEach(t),yy=h(Fr),T(ws.$$.fragment,Fr),Ty=h(Fr),T($s.$$.fragment,Fr),Fr.forEach(t),eo.forEach(t),Df=h(o),ln=a(o,"H2",{class:!0});var Uu=i(ln);As=a(Uu,"A",{id:!0,class:!0,href:!0});var V4=i(As);Sp=a(V4,"SPAN",{});var J4=i(Sp);T(ai.$$.fragment,J4),J4.forEach(t),V4.forEach(t),wy=h(Uu),Bp=a(Uu,"SPAN",{});var G4=i(Bp);$y=s(G4,"TFAlbertForPreTraining"),G4.forEach(t),Uu.forEach(t),Sf=h(o),dt=a(o,"DIV",{class:!0});var to=i(dt);T(ii.$$.fragment,to),Ay=h(to),dn=a(to,"P",{});var $c=i(dn);Fy=s($c,"Albert Model with two heads on top for pretraining: a "),Wp=a($c,"CODE",{});var X4=i(Wp);xy=s(X4,"masked language modeling"),X4.forEach(t),Ey=s($c," head and a "),Up=a($c,"CODE",{});var Y4=i(Up);My=s(Y4,"sentence order prediction"),Y4.forEach(t),zy=s($c," (classification) head."),$c.forEach(t),jy=h(to),li=a(to,"P",{});var Ru=i(li);qy=s(Ru,"This model inherits from "),Qd=a(Ru,"A",{href:!0});var Z4=i(Qd);Py=s(Z4,"TFPreTrainedModel"),Z4.forEach(t),Cy=s(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),Ly=h(to),di=a(to,"P",{});var Hu=i(di);Oy=s(Hu,"This model is also a "),ci=a(Hu,"A",{href:!0,rel:!0});var eF=i(ci);Iy=s(eF,"tf.keras.Model"),eF.forEach(t),Ny=s(Hu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hu.forEach(t),Dy=h(to),T(Fs.$$.fragment,to),Sy=h(to),Ht=a(to,"DIV",{class:!0});var xr=i(Ht);T(pi.$$.fragment,xr),By=h(xr),cn=a(xr,"P",{});var Ac=i(cn);Wy=s(Ac,"The "),Kd=a(Ac,"A",{href:!0});var tF=i(Kd);Uy=s(tF,"TFAlbertForPreTraining"),tF.forEach(t),Ry=s(Ac," forward method, overrides the "),Rp=a(Ac,"CODE",{});var oF=i(Rp);Hy=s(oF,"__call__"),oF.forEach(t),Qy=s(Ac," special method."),Ac.forEach(t),Ky=h(xr),T(xs.$$.fragment,xr),Vy=h(xr),T(Es.$$.fragment,xr),xr.forEach(t),to.forEach(t),Bf=h(o),pn=a(o,"H2",{class:!0});var Qu=i(pn);Ms=a(Qu,"A",{id:!0,class:!0,href:!0});var nF=i(Ms);Hp=a(nF,"SPAN",{});var sF=i(Hp);T(hi.$$.fragment,sF),sF.forEach(t),nF.forEach(t),Jy=h(Qu),Qp=a(Qu,"SPAN",{});var rF=i(Qp);Gy=s(rF,"TFAlbertForMaskedLM"),rF.forEach(t),Qu.forEach(t),Wf=h(o),ct=a(o,"DIV",{class:!0});var oo=i(ct);T(mi.$$.fragment,oo),Xy=h(oo),fi=a(oo,"P",{});var Ku=i(fi);Yy=s(Ku,"Albert Model with a "),Kp=a(Ku,"CODE",{});var aF=i(Kp);Zy=s(aF,"language modeling"),aF.forEach(t),eT=s(Ku," head on top."),Ku.forEach(t),tT=h(oo),ui=a(oo,"P",{});var Vu=i(ui);oT=s(Vu,"This model inherits from "),Vd=a(Vu,"A",{href:!0});var iF=i(Vd);nT=s(iF,"TFPreTrainedModel"),iF.forEach(t),sT=s(Vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu.forEach(t),rT=h(oo),gi=a(oo,"P",{});var Ju=i(gi);aT=s(Ju,"This model is also a "),_i=a(Ju,"A",{href:!0,rel:!0});var lF=i(_i);iT=s(lF,"tf.keras.Model"),lF.forEach(t),lT=s(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),dT=h(oo),T(zs.$$.fragment,oo),cT=h(oo),Ft=a(oo,"DIV",{class:!0});var qo=i(Ft);T(bi.$$.fragment,qo),pT=h(qo),hn=a(qo,"P",{});var Fc=i(hn);hT=s(Fc,"The "),Jd=a(Fc,"A",{href:!0});var dF=i(Jd);mT=s(dF,"TFAlbertForMaskedLM"),dF.forEach(t),fT=s(Fc," forward method, overrides the "),Vp=a(Fc,"CODE",{});var cF=i(Vp);uT=s(cF,"__call__"),cF.forEach(t),gT=s(Fc," special method."),Fc.forEach(t),_T=h(qo),T(js.$$.fragment,qo),bT=h(qo),T(qs.$$.fragment,qo),kT=h(qo),T(Ps.$$.fragment,qo),qo.forEach(t),oo.forEach(t),Uf=h(o),mn=a(o,"H2",{class:!0});var Gu=i(mn);Cs=a(Gu,"A",{id:!0,class:!0,href:!0});var pF=i(Cs);Jp=a(pF,"SPAN",{});var hF=i(Jp);T(ki.$$.fragment,hF),hF.forEach(t),pF.forEach(t),vT=h(Gu),Gp=a(Gu,"SPAN",{});var mF=i(Gp);yT=s(mF,"TFAlbertForSequenceClassification"),mF.forEach(t),Gu.forEach(t),Rf=h(o),pt=a(o,"DIV",{class:!0});var no=i(pt);T(vi.$$.fragment,no),TT=h(no),Xp=a(no,"P",{});var fF=i(Xp);wT=s(fF,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fF.forEach(t),$T=h(no),yi=a(no,"P",{});var Xu=i(yi);AT=s(Xu,"This model inherits from "),Gd=a(Xu,"A",{href:!0});var uF=i(Gd);FT=s(uF,"TFPreTrainedModel"),uF.forEach(t),xT=s(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),ET=h(no),Ti=a(no,"P",{});var Yu=i(Ti);MT=s(Yu,"This model is also a "),wi=a(Yu,"A",{href:!0,rel:!0});var gF=i(wi);zT=s(gF,"tf.keras.Model"),gF.forEach(t),jT=s(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),qT=h(no),T(Ls.$$.fragment,no),PT=h(no),xt=a(no,"DIV",{class:!0});var Po=i(xt);T($i.$$.fragment,Po),CT=h(Po),fn=a(Po,"P",{});var xc=i(fn);LT=s(xc,"The "),Xd=a(xc,"A",{href:!0});var _F=i(Xd);OT=s(_F,"TFAlbertForSequenceClassification"),_F.forEach(t),IT=s(xc," forward method, overrides the "),Yp=a(xc,"CODE",{});var bF=i(Yp);NT=s(bF,"__call__"),bF.forEach(t),DT=s(xc," special method."),xc.forEach(t),ST=h(Po),T(Os.$$.fragment,Po),BT=h(Po),T(Is.$$.fragment,Po),WT=h(Po),T(Ns.$$.fragment,Po),Po.forEach(t),no.forEach(t),Hf=h(o),un=a(o,"H2",{class:!0});var Zu=i(un);Ds=a(Zu,"A",{id:!0,class:!0,href:!0});var kF=i(Ds);Zp=a(kF,"SPAN",{});var vF=i(Zp);T(Ai.$$.fragment,vF),vF.forEach(t),kF.forEach(t),UT=h(Zu),eh=a(Zu,"SPAN",{});var yF=i(eh);RT=s(yF,"TFAlbertForMultipleChoice"),yF.forEach(t),Zu.forEach(t),Qf=h(o),ht=a(o,"DIV",{class:!0});var so=i(ht);T(Fi.$$.fragment,so),HT=h(so),th=a(so,"P",{});var TF=i(th);QT=s(TF,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),TF.forEach(t),KT=h(so),xi=a(so,"P",{});var eg=i(xi);VT=s(eg,"This model inherits from "),Yd=a(eg,"A",{href:!0});var wF=i(Yd);JT=s(wF,"TFPreTrainedModel"),wF.forEach(t),GT=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg.forEach(t),XT=h(so),Ei=a(so,"P",{});var tg=i(Ei);YT=s(tg,"This model is also a "),Mi=a(tg,"A",{href:!0,rel:!0});var $F=i(Mi);ZT=s($F,"tf.keras.Model"),$F.forEach(t),ew=s(tg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg.forEach(t),tw=h(so),T(Ss.$$.fragment,so),ow=h(so),Qt=a(so,"DIV",{class:!0});var Er=i(Qt);T(zi.$$.fragment,Er),nw=h(Er),gn=a(Er,"P",{});var Ec=i(gn);sw=s(Ec,"The "),Zd=a(Ec,"A",{href:!0});var AF=i(Zd);rw=s(AF,"TFAlbertForMultipleChoice"),AF.forEach(t),aw=s(Ec," forward method, overrides the "),oh=a(Ec,"CODE",{});var FF=i(oh);iw=s(FF,"__call__"),FF.forEach(t),lw=s(Ec," special method."),Ec.forEach(t),dw=h(Er),T(Bs.$$.fragment,Er),cw=h(Er),T(Ws.$$.fragment,Er),Er.forEach(t),so.forEach(t),Kf=h(o),_n=a(o,"H2",{class:!0});var og=i(_n);Us=a(og,"A",{id:!0,class:!0,href:!0});var xF=i(Us);nh=a(xF,"SPAN",{});var EF=i(nh);T(ji.$$.fragment,EF),EF.forEach(t),xF.forEach(t),pw=h(og),sh=a(og,"SPAN",{});var MF=i(sh);hw=s(MF,"TFAlbertForTokenClassification"),MF.forEach(t),og.forEach(t),Vf=h(o),mt=a(o,"DIV",{class:!0});var ro=i(mt);T(qi.$$.fragment,ro),mw=h(ro),rh=a(ro,"P",{});var zF=i(rh);fw=s(zF,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zF.forEach(t),uw=h(ro),Pi=a(ro,"P",{});var ng=i(Pi);gw=s(ng,"This model inherits from "),ec=a(ng,"A",{href:!0});var jF=i(ec);_w=s(jF,"TFPreTrainedModel"),jF.forEach(t),bw=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng.forEach(t),kw=h(ro),Ci=a(ro,"P",{});var sg=i(Ci);vw=s(sg,"This model is also a "),Li=a(sg,"A",{href:!0,rel:!0});var qF=i(Li);yw=s(qF,"tf.keras.Model"),qF.forEach(t),Tw=s(sg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sg.forEach(t),ww=h(ro),T(Rs.$$.fragment,ro),$w=h(ro),Et=a(ro,"DIV",{class:!0});var Co=i(Et);T(Oi.$$.fragment,Co),Aw=h(Co),bn=a(Co,"P",{});var Mc=i(bn);Fw=s(Mc,"The "),tc=a(Mc,"A",{href:!0});var PF=i(tc);xw=s(PF,"TFAlbertForTokenClassification"),PF.forEach(t),Ew=s(Mc," forward method, overrides the "),ah=a(Mc,"CODE",{});var CF=i(ah);Mw=s(CF,"__call__"),CF.forEach(t),zw=s(Mc," special method."),Mc.forEach(t),jw=h(Co),T(Hs.$$.fragment,Co),qw=h(Co),T(Qs.$$.fragment,Co),Pw=h(Co),T(Ks.$$.fragment,Co),Co.forEach(t),ro.forEach(t),Jf=h(o),kn=a(o,"H2",{class:!0});var rg=i(kn);Vs=a(rg,"A",{id:!0,class:!0,href:!0});var LF=i(Vs);ih=a(LF,"SPAN",{});var OF=i(ih);T(Ii.$$.fragment,OF),OF.forEach(t),LF.forEach(t),Cw=h(rg),lh=a(rg,"SPAN",{});var IF=i(lh);Lw=s(IF,"TFAlbertForQuestionAnswering"),IF.forEach(t),rg.forEach(t),Gf=h(o),ft=a(o,"DIV",{class:!0});var ao=i(ft);T(Ni.$$.fragment,ao),Ow=h(ao),vn=a(ao,"P",{});var zc=i(vn);Iw=s(zc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dh=a(zc,"CODE",{});var NF=i(dh);Nw=s(NF,"span start logits"),NF.forEach(t),Dw=s(zc," and "),ch=a(zc,"CODE",{});var DF=i(ch);Sw=s(DF,"span end logits"),DF.forEach(t),Bw=s(zc,")."),zc.forEach(t),Ww=h(ao),Di=a(ao,"P",{});var ag=i(Di);Uw=s(ag,"This model inherits from "),oc=a(ag,"A",{href:!0});var SF=i(oc);Rw=s(SF,"TFPreTrainedModel"),SF.forEach(t),Hw=s(ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag.forEach(t),Qw=h(ao),Si=a(ao,"P",{});var ig=i(Si);Kw=s(ig,"This model is also a "),Bi=a(ig,"A",{href:!0,rel:!0});var BF=i(Bi);Vw=s(BF,"tf.keras.Model"),BF.forEach(t),Jw=s(ig,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ig.forEach(t),Gw=h(ao),T(Js.$$.fragment,ao),Xw=h(ao),Mt=a(ao,"DIV",{class:!0});var Lo=i(Mt);T(Wi.$$.fragment,Lo),Yw=h(Lo),yn=a(Lo,"P",{});var jc=i(yn);Zw=s(jc,"The "),nc=a(jc,"A",{href:!0});var WF=i(nc);e2=s(WF,"TFAlbertForQuestionAnswering"),WF.forEach(t),t2=s(jc," forward method, overrides the "),ph=a(jc,"CODE",{});var UF=i(ph);o2=s(UF,"__call__"),UF.forEach(t),n2=s(jc," special method."),jc.forEach(t),s2=h(Lo),T(Gs.$$.fragment,Lo),r2=h(Lo),T(Xs.$$.fragment,Lo),a2=h(Lo),T(Ys.$$.fragment,Lo),Lo.forEach(t),ao.forEach(t),Xf=h(o),Tn=a(o,"H2",{class:!0});var lg=i(Tn);Zs=a(lg,"A",{id:!0,class:!0,href:!0});var RF=i(Zs);hh=a(RF,"SPAN",{});var HF=i(hh);T(Ui.$$.fragment,HF),HF.forEach(t),RF.forEach(t),i2=h(lg),mh=a(lg,"SPAN",{});var QF=i(mh);l2=s(QF,"FlaxAlbertModel"),QF.forEach(t),lg.forEach(t),Yf=h(o),et=a(o,"DIV",{class:!0});var jt=i(et);T(Ri.$$.fragment,jt),d2=h(jt),fh=a(jt,"P",{});var KF=i(fh);c2=s(KF,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),KF.forEach(t),p2=h(jt),Hi=a(jt,"P",{});var dg=i(Hi);h2=s(dg,"This model inherits from "),sc=a(dg,"A",{href:!0});var VF=i(sc);m2=s(VF,"FlaxPreTrainedModel"),VF.forEach(t),f2=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),u2=h(jt),Qi=a(jt,"P",{});var cg=i(Qi);g2=s(cg,"This model is also a Flax Linen "),Ki=a(cg,"A",{href:!0,rel:!0});var JF=i(Ki);_2=s(JF,"flax.linen.Module"),JF.forEach(t),b2=s(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),k2=h(jt),uh=a(jt,"P",{});var GF=i(uh);v2=s(GF,"Finally, this model supports inherent JAX features such as:"),GF.forEach(t),y2=h(jt),lo=a(jt,"UL",{});var Mr=i(lo);gh=a(Mr,"LI",{});var XF=i(gh);Vi=a(XF,"A",{href:!0,rel:!0});var YF=i(Vi);T2=s(YF,"Just-In-Time (JIT) compilation"),YF.forEach(t),XF.forEach(t),w2=h(Mr),_h=a(Mr,"LI",{});var ZF=i(_h);Ji=a(ZF,"A",{href:!0,rel:!0});var ex=i(Ji);$2=s(ex,"Automatic Differentiation"),ex.forEach(t),ZF.forEach(t),A2=h(Mr),bh=a(Mr,"LI",{});var tx=i(bh);Gi=a(tx,"A",{href:!0,rel:!0});var ox=i(Gi);F2=s(ox,"Vectorization"),ox.forEach(t),tx.forEach(t),x2=h(Mr),kh=a(Mr,"LI",{});var nx=i(kh);Xi=a(nx,"A",{href:!0,rel:!0});var sx=i(Xi);E2=s(sx,"Parallelization"),sx.forEach(t),nx.forEach(t),Mr.forEach(t),M2=h(jt),Kt=a(jt,"DIV",{class:!0});var zr=i(Kt);T(Yi.$$.fragment,zr),z2=h(zr),wn=a(zr,"P",{});var qc=i(wn);j2=s(qc,"The "),vh=a(qc,"CODE",{});var rx=i(vh);q2=s(rx,"FlaxAlbertPreTrainedModel"),rx.forEach(t),P2=s(qc," forward method, overrides the "),yh=a(qc,"CODE",{});var ax=i(yh);C2=s(ax,"__call__"),ax.forEach(t),L2=s(qc," special method."),qc.forEach(t),O2=h(zr),T(er.$$.fragment,zr),I2=h(zr),T(tr.$$.fragment,zr),zr.forEach(t),jt.forEach(t),Zf=h(o),$n=a(o,"H2",{class:!0});var pg=i($n);or=a(pg,"A",{id:!0,class:!0,href:!0});var ix=i(or);Th=a(ix,"SPAN",{});var lx=i(Th);T(Zi.$$.fragment,lx),lx.forEach(t),ix.forEach(t),N2=h(pg),wh=a(pg,"SPAN",{});var dx=i(wh);D2=s(dx,"FlaxAlbertForPreTraining"),dx.forEach(t),pg.forEach(t),eu=h(o),tt=a(o,"DIV",{class:!0});var qt=i(tt);T(el.$$.fragment,qt),S2=h(qt),An=a(qt,"P",{});var Pc=i(An);B2=s(Pc,"Albert Model with two heads on top as done during the pretraining: a "),$h=a(Pc,"CODE",{});var cx=i($h);W2=s(cx,"masked language modeling"),cx.forEach(t),U2=s(Pc,` head and a
`),Ah=a(Pc,"CODE",{});var px=i(Ah);R2=s(px,"sentence order prediction (classification)"),px.forEach(t),H2=s(Pc," head."),Pc.forEach(t),Q2=h(qt),tl=a(qt,"P",{});var hg=i(tl);K2=s(hg,"This model inherits from "),rc=a(hg,"A",{href:!0});var hx=i(rc);V2=s(hx,"FlaxPreTrainedModel"),hx.forEach(t),J2=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),G2=h(qt),ol=a(qt,"P",{});var mg=i(ol);X2=s(mg,"This model is also a Flax Linen "),nl=a(mg,"A",{href:!0,rel:!0});var mx=i(nl);Y2=s(mx,"flax.linen.Module"),mx.forEach(t),Z2=s(mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mg.forEach(t),e$=h(qt),Fh=a(qt,"P",{});var fx=i(Fh);t$=s(fx,"Finally, this model supports inherent JAX features such as:"),fx.forEach(t),o$=h(qt),co=a(qt,"UL",{});var jr=i(co);xh=a(jr,"LI",{});var ux=i(xh);sl=a(ux,"A",{href:!0,rel:!0});var gx=i(sl);n$=s(gx,"Just-In-Time (JIT) compilation"),gx.forEach(t),ux.forEach(t),s$=h(jr),Eh=a(jr,"LI",{});var _x=i(Eh);rl=a(_x,"A",{href:!0,rel:!0});var bx=i(rl);r$=s(bx,"Automatic Differentiation"),bx.forEach(t),_x.forEach(t),a$=h(jr),Mh=a(jr,"LI",{});var kx=i(Mh);al=a(kx,"A",{href:!0,rel:!0});var vx=i(al);i$=s(vx,"Vectorization"),vx.forEach(t),kx.forEach(t),l$=h(jr),zh=a(jr,"LI",{});var yx=i(zh);il=a(yx,"A",{href:!0,rel:!0});var Tx=i(il);d$=s(Tx,"Parallelization"),Tx.forEach(t),yx.forEach(t),jr.forEach(t),c$=h(qt),Vt=a(qt,"DIV",{class:!0});var qr=i(Vt);T(ll.$$.fragment,qr),p$=h(qr),Fn=a(qr,"P",{});var Cc=i(Fn);h$=s(Cc,"The "),jh=a(Cc,"CODE",{});var wx=i(jh);m$=s(wx,"FlaxAlbertPreTrainedModel"),wx.forEach(t),f$=s(Cc," forward method, overrides the "),qh=a(Cc,"CODE",{});var $x=i(qh);u$=s($x,"__call__"),$x.forEach(t),g$=s(Cc," special method."),Cc.forEach(t),_$=h(qr),T(nr.$$.fragment,qr),b$=h(qr),T(sr.$$.fragment,qr),qr.forEach(t),qt.forEach(t),tu=h(o),xn=a(o,"H2",{class:!0});var fg=i(xn);rr=a(fg,"A",{id:!0,class:!0,href:!0});var Ax=i(rr);Ph=a(Ax,"SPAN",{});var Fx=i(Ph);T(dl.$$.fragment,Fx),Fx.forEach(t),Ax.forEach(t),k$=h(fg),Ch=a(fg,"SPAN",{});var xx=i(Ch);v$=s(xx,"FlaxAlbertForMaskedLM"),xx.forEach(t),fg.forEach(t),ou=h(o),ot=a(o,"DIV",{class:!0});var Pt=i(ot);T(cl.$$.fragment,Pt),y$=h(Pt),pl=a(Pt,"P",{});var ug=i(pl);T$=s(ug,"Albert Model with a "),Lh=a(ug,"CODE",{});var Ex=i(Lh);w$=s(Ex,"language modeling"),Ex.forEach(t),$$=s(ug," head on top."),ug.forEach(t),A$=h(Pt),hl=a(Pt,"P",{});var gg=i(hl);F$=s(gg,"This model inherits from "),ac=a(gg,"A",{href:!0});var Mx=i(ac);x$=s(Mx,"FlaxPreTrainedModel"),Mx.forEach(t),E$=s(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),M$=h(Pt),ml=a(Pt,"P",{});var _g=i(ml);z$=s(_g,"This model is also a Flax Linen "),fl=a(_g,"A",{href:!0,rel:!0});var zx=i(fl);j$=s(zx,"flax.linen.Module"),zx.forEach(t),q$=s(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),P$=h(Pt),Oh=a(Pt,"P",{});var jx=i(Oh);C$=s(jx,"Finally, this model supports inherent JAX features such as:"),jx.forEach(t),L$=h(Pt),po=a(Pt,"UL",{});var Pr=i(po);Ih=a(Pr,"LI",{});var qx=i(Ih);ul=a(qx,"A",{href:!0,rel:!0});var Px=i(ul);O$=s(Px,"Just-In-Time (JIT) compilation"),Px.forEach(t),qx.forEach(t),I$=h(Pr),Nh=a(Pr,"LI",{});var Cx=i(Nh);gl=a(Cx,"A",{href:!0,rel:!0});var Lx=i(gl);N$=s(Lx,"Automatic Differentiation"),Lx.forEach(t),Cx.forEach(t),D$=h(Pr),Dh=a(Pr,"LI",{});var Ox=i(Dh);_l=a(Ox,"A",{href:!0,rel:!0});var Ix=i(_l);S$=s(Ix,"Vectorization"),Ix.forEach(t),Ox.forEach(t),B$=h(Pr),Sh=a(Pr,"LI",{});var Nx=i(Sh);bl=a(Nx,"A",{href:!0,rel:!0});var Dx=i(bl);W$=s(Dx,"Parallelization"),Dx.forEach(t),Nx.forEach(t),Pr.forEach(t),U$=h(Pt),Jt=a(Pt,"DIV",{class:!0});var Cr=i(Jt);T(kl.$$.fragment,Cr),R$=h(Cr),En=a(Cr,"P",{});var Lc=i(En);H$=s(Lc,"The "),Bh=a(Lc,"CODE",{});var Sx=i(Bh);Q$=s(Sx,"FlaxAlbertPreTrainedModel"),Sx.forEach(t),K$=s(Lc," forward method, overrides the "),Wh=a(Lc,"CODE",{});var Bx=i(Wh);V$=s(Bx,"__call__"),Bx.forEach(t),J$=s(Lc," special method."),Lc.forEach(t),G$=h(Cr),T(ar.$$.fragment,Cr),X$=h(Cr),T(ir.$$.fragment,Cr),Cr.forEach(t),Pt.forEach(t),nu=h(o),Mn=a(o,"H2",{class:!0});var bg=i(Mn);lr=a(bg,"A",{id:!0,class:!0,href:!0});var Wx=i(lr);Uh=a(Wx,"SPAN",{});var Ux=i(Uh);T(vl.$$.fragment,Ux),Ux.forEach(t),Wx.forEach(t),Y$=h(bg),Rh=a(bg,"SPAN",{});var Rx=i(Rh);Z$=s(Rx,"FlaxAlbertForSequenceClassification"),Rx.forEach(t),bg.forEach(t),su=h(o),nt=a(o,"DIV",{class:!0});var Ct=i(nt);T(yl.$$.fragment,Ct),e1=h(Ct),Hh=a(Ct,"P",{});var Hx=i(Hh);t1=s(Hx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Hx.forEach(t),o1=h(Ct),Tl=a(Ct,"P",{});var kg=i(Tl);n1=s(kg,"This model inherits from "),ic=a(kg,"A",{href:!0});var Qx=i(ic);s1=s(Qx,"FlaxPreTrainedModel"),Qx.forEach(t),r1=s(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kg.forEach(t),a1=h(Ct),wl=a(Ct,"P",{});var vg=i(wl);i1=s(vg,"This model is also a Flax Linen "),$l=a(vg,"A",{href:!0,rel:!0});var Kx=i($l);l1=s(Kx,"flax.linen.Module"),Kx.forEach(t),d1=s(vg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vg.forEach(t),c1=h(Ct),Qh=a(Ct,"P",{});var Vx=i(Qh);p1=s(Vx,"Finally, this model supports inherent JAX features such as:"),Vx.forEach(t),h1=h(Ct),ho=a(Ct,"UL",{});var Lr=i(ho);Kh=a(Lr,"LI",{});var Jx=i(Kh);Al=a(Jx,"A",{href:!0,rel:!0});var Gx=i(Al);m1=s(Gx,"Just-In-Time (JIT) compilation"),Gx.forEach(t),Jx.forEach(t),f1=h(Lr),Vh=a(Lr,"LI",{});var Xx=i(Vh);Fl=a(Xx,"A",{href:!0,rel:!0});var Yx=i(Fl);u1=s(Yx,"Automatic Differentiation"),Yx.forEach(t),Xx.forEach(t),g1=h(Lr),Jh=a(Lr,"LI",{});var Zx=i(Jh);xl=a(Zx,"A",{href:!0,rel:!0});var eE=i(xl);_1=s(eE,"Vectorization"),eE.forEach(t),Zx.forEach(t),b1=h(Lr),Gh=a(Lr,"LI",{});var tE=i(Gh);El=a(tE,"A",{href:!0,rel:!0});var oE=i(El);k1=s(oE,"Parallelization"),oE.forEach(t),tE.forEach(t),Lr.forEach(t),v1=h(Ct),Gt=a(Ct,"DIV",{class:!0});var Or=i(Gt);T(Ml.$$.fragment,Or),y1=h(Or),zn=a(Or,"P",{});var Oc=i(zn);T1=s(Oc,"The "),Xh=a(Oc,"CODE",{});var nE=i(Xh);w1=s(nE,"FlaxAlbertPreTrainedModel"),nE.forEach(t),$1=s(Oc," forward method, overrides the "),Yh=a(Oc,"CODE",{});var sE=i(Yh);A1=s(sE,"__call__"),sE.forEach(t),F1=s(Oc," special method."),Oc.forEach(t),x1=h(Or),T(dr.$$.fragment,Or),E1=h(Or),T(cr.$$.fragment,Or),Or.forEach(t),Ct.forEach(t),ru=h(o),jn=a(o,"H2",{class:!0});var yg=i(jn);pr=a(yg,"A",{id:!0,class:!0,href:!0});var rE=i(pr);Zh=a(rE,"SPAN",{});var aE=i(Zh);T(zl.$$.fragment,aE),aE.forEach(t),rE.forEach(t),M1=h(yg),em=a(yg,"SPAN",{});var iE=i(em);z1=s(iE,"FlaxAlbertForMultipleChoice"),iE.forEach(t),yg.forEach(t),au=h(o),st=a(o,"DIV",{class:!0});var Lt=i(st);T(jl.$$.fragment,Lt),j1=h(Lt),tm=a(Lt,"P",{});var lE=i(tm);q1=s(lE,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lE.forEach(t),P1=h(Lt),ql=a(Lt,"P",{});var Tg=i(ql);C1=s(Tg,"This model inherits from "),lc=a(Tg,"A",{href:!0});var dE=i(lc);L1=s(dE,"FlaxPreTrainedModel"),dE.forEach(t),O1=s(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tg.forEach(t),I1=h(Lt),Pl=a(Lt,"P",{});var wg=i(Pl);N1=s(wg,"This model is also a Flax Linen "),Cl=a(wg,"A",{href:!0,rel:!0});var cE=i(Cl);D1=s(cE,"flax.linen.Module"),cE.forEach(t),S1=s(wg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wg.forEach(t),B1=h(Lt),om=a(Lt,"P",{});var pE=i(om);W1=s(pE,"Finally, this model supports inherent JAX features such as:"),pE.forEach(t),U1=h(Lt),mo=a(Lt,"UL",{});var Ir=i(mo);nm=a(Ir,"LI",{});var hE=i(nm);Ll=a(hE,"A",{href:!0,rel:!0});var mE=i(Ll);R1=s(mE,"Just-In-Time (JIT) compilation"),mE.forEach(t),hE.forEach(t),H1=h(Ir),sm=a(Ir,"LI",{});var fE=i(sm);Ol=a(fE,"A",{href:!0,rel:!0});var uE=i(Ol);Q1=s(uE,"Automatic Differentiation"),uE.forEach(t),fE.forEach(t),K1=h(Ir),rm=a(Ir,"LI",{});var gE=i(rm);Il=a(gE,"A",{href:!0,rel:!0});var _E=i(Il);V1=s(_E,"Vectorization"),_E.forEach(t),gE.forEach(t),J1=h(Ir),am=a(Ir,"LI",{});var bE=i(am);Nl=a(bE,"A",{href:!0,rel:!0});var kE=i(Nl);G1=s(kE,"Parallelization"),kE.forEach(t),bE.forEach(t),Ir.forEach(t),X1=h(Lt),Xt=a(Lt,"DIV",{class:!0});var Nr=i(Xt);T(Dl.$$.fragment,Nr),Y1=h(Nr),qn=a(Nr,"P",{});var Ic=i(qn);Z1=s(Ic,"The "),im=a(Ic,"CODE",{});var vE=i(im);e0=s(vE,"FlaxAlbertPreTrainedModel"),vE.forEach(t),t0=s(Ic," forward method, overrides the "),lm=a(Ic,"CODE",{});var yE=i(lm);o0=s(yE,"__call__"),yE.forEach(t),n0=s(Ic," special method."),Ic.forEach(t),s0=h(Nr),T(hr.$$.fragment,Nr),r0=h(Nr),T(mr.$$.fragment,Nr),Nr.forEach(t),Lt.forEach(t),iu=h(o),Pn=a(o,"H2",{class:!0});var $g=i(Pn);fr=a($g,"A",{id:!0,class:!0,href:!0});var TE=i(fr);dm=a(TE,"SPAN",{});var wE=i(dm);T(Sl.$$.fragment,wE),wE.forEach(t),TE.forEach(t),a0=h($g),cm=a($g,"SPAN",{});var $E=i(cm);i0=s($E,"FlaxAlbertForTokenClassification"),$E.forEach(t),$g.forEach(t),lu=h(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);T(Bl.$$.fragment,Ot),l0=h(Ot),pm=a(Ot,"P",{});var AE=i(pm);d0=s(AE,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),AE.forEach(t),c0=h(Ot),Wl=a(Ot,"P",{});var Ag=i(Wl);p0=s(Ag,"This model inherits from "),dc=a(Ag,"A",{href:!0});var FE=i(dc);h0=s(FE,"FlaxPreTrainedModel"),FE.forEach(t),m0=s(Ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ag.forEach(t),f0=h(Ot),Ul=a(Ot,"P",{});var Fg=i(Ul);u0=s(Fg,"This model is also a Flax Linen "),Rl=a(Fg,"A",{href:!0,rel:!0});var xE=i(Rl);g0=s(xE,"flax.linen.Module"),xE.forEach(t),_0=s(Fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fg.forEach(t),b0=h(Ot),hm=a(Ot,"P",{});var EE=i(hm);k0=s(EE,"Finally, this model supports inherent JAX features such as:"),EE.forEach(t),v0=h(Ot),fo=a(Ot,"UL",{});var Dr=i(fo);mm=a(Dr,"LI",{});var ME=i(mm);Hl=a(ME,"A",{href:!0,rel:!0});var zE=i(Hl);y0=s(zE,"Just-In-Time (JIT) compilation"),zE.forEach(t),ME.forEach(t),T0=h(Dr),fm=a(Dr,"LI",{});var jE=i(fm);Ql=a(jE,"A",{href:!0,rel:!0});var qE=i(Ql);w0=s(qE,"Automatic Differentiation"),qE.forEach(t),jE.forEach(t),$0=h(Dr),um=a(Dr,"LI",{});var PE=i(um);Kl=a(PE,"A",{href:!0,rel:!0});var CE=i(Kl);A0=s(CE,"Vectorization"),CE.forEach(t),PE.forEach(t),F0=h(Dr),gm=a(Dr,"LI",{});var LE=i(gm);Vl=a(LE,"A",{href:!0,rel:!0});var OE=i(Vl);x0=s(OE,"Parallelization"),OE.forEach(t),LE.forEach(t),Dr.forEach(t),E0=h(Ot),Yt=a(Ot,"DIV",{class:!0});var Sr=i(Yt);T(Jl.$$.fragment,Sr),M0=h(Sr),Cn=a(Sr,"P",{});var Nc=i(Cn);z0=s(Nc,"The "),_m=a(Nc,"CODE",{});var IE=i(_m);j0=s(IE,"FlaxAlbertPreTrainedModel"),IE.forEach(t),q0=s(Nc," forward method, overrides the "),bm=a(Nc,"CODE",{});var NE=i(bm);P0=s(NE,"__call__"),NE.forEach(t),C0=s(Nc," special method."),Nc.forEach(t),L0=h(Sr),T(ur.$$.fragment,Sr),O0=h(Sr),T(gr.$$.fragment,Sr),Sr.forEach(t),Ot.forEach(t),du=h(o),Ln=a(o,"H2",{class:!0});var xg=i(Ln);_r=a(xg,"A",{id:!0,class:!0,href:!0});var DE=i(_r);km=a(DE,"SPAN",{});var SE=i(km);T(Gl.$$.fragment,SE),SE.forEach(t),DE.forEach(t),I0=h(xg),vm=a(xg,"SPAN",{});var BE=i(vm);N0=s(BE,"FlaxAlbertForQuestionAnswering"),BE.forEach(t),xg.forEach(t),cu=h(o),at=a(o,"DIV",{class:!0});var It=i(at);T(Xl.$$.fragment,It),D0=h(It),On=a(It,"P",{});var Dc=i(On);S0=s(Dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ym=a(Dc,"CODE",{});var WE=i(ym);B0=s(WE,"span start logits"),WE.forEach(t),W0=s(Dc," and "),Tm=a(Dc,"CODE",{});var UE=i(Tm);U0=s(UE,"span end logits"),UE.forEach(t),R0=s(Dc,")."),Dc.forEach(t),H0=h(It),Yl=a(It,"P",{});var Eg=i(Yl);Q0=s(Eg,"This model inherits from "),cc=a(Eg,"A",{href:!0});var RE=i(cc);K0=s(RE,"FlaxPreTrainedModel"),RE.forEach(t),V0=s(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eg.forEach(t),J0=h(It),Zl=a(It,"P",{});var Mg=i(Zl);G0=s(Mg,"This model is also a Flax Linen "),ed=a(Mg,"A",{href:!0,rel:!0});var HE=i(ed);X0=s(HE,"flax.linen.Module"),HE.forEach(t),Y0=s(Mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mg.forEach(t),Z0=h(It),wm=a(It,"P",{});var QE=i(wm);eA=s(QE,"Finally, this model supports inherent JAX features such as:"),QE.forEach(t),tA=h(It),uo=a(It,"UL",{});var Br=i(uo);$m=a(Br,"LI",{});var KE=i($m);td=a(KE,"A",{href:!0,rel:!0});var VE=i(td);oA=s(VE,"Just-In-Time (JIT) compilation"),VE.forEach(t),KE.forEach(t),nA=h(Br),Am=a(Br,"LI",{});var JE=i(Am);od=a(JE,"A",{href:!0,rel:!0});var GE=i(od);sA=s(GE,"Automatic Differentiation"),GE.forEach(t),JE.forEach(t),rA=h(Br),Fm=a(Br,"LI",{});var XE=i(Fm);nd=a(XE,"A",{href:!0,rel:!0});var YE=i(nd);aA=s(YE,"Vectorization"),YE.forEach(t),XE.forEach(t),iA=h(Br),xm=a(Br,"LI",{});var ZE=i(xm);sd=a(ZE,"A",{href:!0,rel:!0});var eM=i(sd);lA=s(eM,"Parallelization"),eM.forEach(t),ZE.forEach(t),Br.forEach(t),dA=h(It),Zt=a(It,"DIV",{class:!0});var Wr=i(Zt);T(rd.$$.fragment,Wr),cA=h(Wr),In=a(Wr,"P",{});var Sc=i(In);pA=s(Sc,"The "),Em=a(Sc,"CODE",{});var tM=i(Em);hA=s(tM,"FlaxAlbertPreTrainedModel"),tM.forEach(t),mA=s(Sc," forward method, overrides the "),Mm=a(Sc,"CODE",{});var oM=i(Mm);fA=s(oM,"__call__"),oM.forEach(t),uA=s(Sc," special method."),Sc.forEach(t),gA=h(Wr),T(br.$$.fragment,Wr),_A=h(Wr),T(kr.$$.fragment,Wr),Wr.forEach(t),It.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_z)),u(f,"id","albert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#albert"),u(c,"class","relative group"),u(se,"id","overview"),u(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(se,"href","#overview"),u(B,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1909.11942"),u(ae,"rel","nofollow"),u(R,"href","https://huggingface.co/lysandre"),u(R,"rel","nofollow"),u(P,"href","https://huggingface.co/kamalkraj"),u(P,"rel","nofollow"),u(ie,"href","https://github.com/google-research/ALBERT"),u(ie,"rel","nofollow"),u(Z,"id","transformers.AlbertConfig"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.AlbertConfig"),u(Ne,"class","relative group"),u(We,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertModel"),u(Ue,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertModel"),u(ee,"href","https://huggingface.co/albert-xxlarge-v2"),u(ee,"rel","nofollow"),u(kd,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(vd,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.AlbertTokenizer"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.AlbertTokenizer"),u(Io,"class","relative group"),u(Qr,"href","https://github.com/google/sentencepiece"),u(Qr,"rel","nofollow"),u(yd,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.AlbertTokenizerFast"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.AlbertTokenizerFast"),u(Do,"class","relative group"),u(oa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(oa,"rel","nofollow"),u(Ad,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(So,"class","relative group"),u(Ed,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForPreTraining"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Md,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertModel"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertModel"),u(Uo,"class","relative group"),u(zd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ua,"rel","nofollow"),u(jd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertModel"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.AlbertForPreTraining"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.AlbertForPreTraining"),u(Ho,"class","relative group"),u(qd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ya,"rel","nofollow"),u(Pd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForPreTraining"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForMaskedLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForMaskedLM"),u(Vo,"class","relative group"),u(Cd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ea,"rel","nofollow"),u(Ld,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.AlbertForSequenceClassification"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.AlbertForSequenceClassification"),u(Go,"class","relative group"),u(Od,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ca,"rel","nofollow"),u(Id,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cs,"id","transformers.AlbertForMultipleChoice"),u(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cs,"href","#transformers.AlbertForMultipleChoice"),u(Yo,"class","relative group"),u(Nd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sa,"rel","nofollow"),u(Dd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.AlbertForTokenClassification"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.AlbertForTokenClassification"),u(en,"class","relative group"),u(Sd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qa,"rel","nofollow"),u(Bd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForTokenClassification"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.AlbertForQuestionAnswering"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.AlbertForQuestionAnswering"),u(on,"class","relative group"),u(Wd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ya,"rel","nofollow"),u(Ud,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFAlbertModel"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFAlbertModel"),u(rn,"class","relative group"),u(Rd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(si,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(si,"rel","nofollow"),u(Hd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertModel"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.TFAlbertForPreTraining"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.TFAlbertForPreTraining"),u(ln,"class","relative group"),u(Qd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ci,"rel","nofollow"),u(Kd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFAlbertForMaskedLM"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFAlbertForMaskedLM"),u(pn,"class","relative group"),u(Vd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(_i,"rel","nofollow"),u(Jd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.TFAlbertForSequenceClassification"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.TFAlbertForSequenceClassification"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(wi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(wi,"rel","nofollow"),u(Xd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.TFAlbertForMultipleChoice"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.TFAlbertForMultipleChoice"),u(un,"class","relative group"),u(Yd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Mi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Mi,"rel","nofollow"),u(Zd,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.TFAlbertForTokenClassification"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.TFAlbertForTokenClassification"),u(_n,"class","relative group"),u(ec,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Li,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Li,"rel","nofollow"),u(tc,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.TFAlbertForQuestionAnswering"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.TFAlbertForQuestionAnswering"),u(kn,"class","relative group"),u(oc,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Bi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Bi,"rel","nofollow"),u(nc,"href","/docs/transformers/v4.24.0/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.FlaxAlbertModel"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.FlaxAlbertModel"),u(Tn,"class","relative group"),u(sc,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ki,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xi,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(or,"id","transformers.FlaxAlbertForPreTraining"),u(or,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(or,"href","#transformers.FlaxAlbertForPreTraining"),u($n,"class","relative group"),u(rc,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(nl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(al,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(il,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.FlaxAlbertForMaskedLM"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.FlaxAlbertForMaskedLM"),u(xn,"class","relative group"),u(ac,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(fl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ul,"rel","nofollow"),u(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(_l,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bl,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lr,"id","transformers.FlaxAlbertForSequenceClassification"),u(lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lr,"href","#transformers.FlaxAlbertForSequenceClassification"),u(Mn,"class","relative group"),u(ic,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u($l,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Al,"rel","nofollow"),u(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fl,"rel","nofollow"),u(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(El,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.FlaxAlbertForMultipleChoice"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.FlaxAlbertForMultipleChoice"),u(jn,"class","relative group"),u(lc,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cl,"rel","nofollow"),u(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ll,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ol,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Il,"rel","nofollow"),u(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Nl,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.FlaxAlbertForTokenClassification"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.FlaxAlbertForTokenClassification"),u(Pn,"class","relative group"),u(dc,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Rl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Rl,"rel","nofollow"),u(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Hl,"rel","nofollow"),u(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ql,"rel","nofollow"),u(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Kl,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vl,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.FlaxAlbertForQuestionAnswering"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(Ln,"class","relative group"),u(cc,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ed,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ed,"rel","nofollow"),u(td,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(td,"rel","nofollow"),u(od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(od,"rel","nofollow"),u(nd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nd,"rel","nofollow"),u(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sd,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,f),e(f,k),w(l,k,null),e(c,m),e(c,M),e(M,ye),_(o,ge,b),_(o,B,b),e(B,se),e(se,te),w(E,te,null),e(B,Te),e(B,Q),e(Q,we),_(o,_e,b),_(o,W,b),e(W,$e),e(W,ae),e(ae,G),e(W,Ae),_(o,be,b),_(o,U,b),e(U,me),e(me,Fe),e(U,X),e(U,fe),e(fe,xe),_(o,oe,b),_(o,q,b),e(q,L),_(o,ke,b),_(o,H,b),e(H,ue),e(ue,Ee),_(o,J,b),_(o,le,b),e(le,Me),_(o,C,b),_(o,re,b),e(re,K),e(K,ze),e(re,je),e(re,V),e(V,qe),_(o,ve,b),_(o,O,b),e(O,Pe),e(O,R),e(R,Ce),e(O,ne),e(O,P),e(P,Le),e(O,I),e(O,ie),e(ie,Oe),e(O,v),_(o,z,b),_(o,Ne,b),e(Ne,Z),e(Z,He),w(De,He,null),e(Ne,j),e(Ne,Qe),e(Qe,Ve),_(o,Ke,b),_(o,de,b),w(Se,de,null),e(de,S),e(de,N),e(N,Je),e(N,We),e(We,Y),e(N,Ge),e(N,Ue),e(Ue,Ie),e(N,Xe),e(N,ee),e(ee,Ye),e(N,zg),e(de,jg),e(de,Oo),e(Oo,qg),e(Oo,kd),e(kd,Pg),e(Oo,Cg),e(Oo,vd),e(vd,Lg),e(Oo,Og),e(de,Ig),w(Bn,de,null),_(o,gf,b),_(o,Io,b),e(Io,Wn),e(Wn,Bc),w(Ur,Bc,null),e(Io,Ng),e(Io,Wc),e(Wc,Dg),_(o,_f,b),_(o,Ze,b),w(Rr,Ze,null),e(Ze,Sg),e(Ze,Hr),e(Hr,Bg),e(Hr,Qr),e(Qr,Wg),e(Hr,Ug),e(Ze,Rg),e(Ze,Kr),e(Kr,Hg),e(Kr,yd),e(yd,Qg),e(Kr,Kg),e(Ze,Vg),e(Ze,vo),w(Vr,vo,null),e(vo,Jg),e(vo,Uc),e(Uc,Gg),e(vo,Xg),e(vo,Jr),e(Jr,Td),e(Td,Yg),e(Td,Rc),e(Rc,Zg),e(Jr,e_),e(Jr,wd),e(wd,t_),e(wd,Hc),e(Hc,o_),e(Ze,n_),e(Ze,Un),w(Gr,Un,null),e(Un,s_),e(Un,Xr),e(Xr,r_),e(Xr,Qc),e(Qc,a_),e(Xr,i_),e(Ze,l_),e(Ze,Dt),w(Yr,Dt,null),e(Dt,d_),e(Dt,Kc),e(Kc,c_),e(Dt,p_),w(Rn,Dt,null),e(Dt,h_),e(Dt,No),e(No,m_),e(No,Vc),e(Vc,f_),e(No,u_),e(No,Jc),e(Jc,g_),e(No,__),e(Ze,b_),e(Ze,$d),w(Zr,$d,null),_(o,bf,b),_(o,Do,b),e(Do,Hn),e(Hn,Gc),w(ea,Gc,null),e(Do,k_),e(Do,Xc),e(Xc,v_),_(o,kf,b),_(o,Nt,b),w(ta,Nt,null),e(Nt,y_),e(Nt,io),e(io,T_),e(io,Yc),e(Yc,w_),e(io,$_),e(io,oa),e(oa,A_),e(io,F_),e(io,Ad),e(Ad,x_),e(io,E_),e(Nt,M_),e(Nt,yo),w(na,yo,null),e(yo,z_),e(yo,Zc),e(Zc,j_),e(yo,q_),e(yo,sa),e(sa,Fd),e(Fd,P_),e(Fd,ep),e(ep,C_),e(sa,L_),e(sa,xd),e(xd,O_),e(xd,tp),e(tp,I_),e(Nt,N_),e(Nt,St),w(ra,St,null),e(St,D_),e(St,op),e(op,S_),e(St,B_),w(Qn,St,null),e(St,W_),e(St,np),e(np,U_),_(o,vf,b),_(o,So,b),e(So,Kn),e(Kn,sp),w(aa,sp,null),e(So,R_),e(So,rp),e(rp,H_),_(o,yf,b),_(o,Bo,b),w(ia,Bo,null),e(Bo,Q_),e(Bo,la),e(la,K_),e(la,Ed),e(Ed,V_),e(la,J_),_(o,Tf,b),_(o,Wo,b),w(da,Wo,null),e(Wo,G_),e(Wo,ca),e(ca,X_),e(ca,Md),e(Md,Y_),e(ca,Z_),_(o,wf,b),_(o,Uo,b),e(Uo,Vn),e(Vn,ap),w(pa,ap,null),e(Uo,eb),e(Uo,ip),e(ip,tb),_(o,$f,b),_(o,gt,b),w(ha,gt,null),e(gt,ob),e(gt,lp),e(lp,nb),e(gt,sb),e(gt,ma),e(ma,rb),e(ma,zd),e(zd,ab),e(ma,ib),e(gt,lb),e(gt,fa),e(fa,db),e(fa,ua),e(ua,cb),e(fa,pb),e(gt,hb),e(gt,Bt),w(ga,Bt,null),e(Bt,mb),e(Bt,Ro),e(Ro,fb),e(Ro,jd),e(jd,ub),e(Ro,gb),e(Ro,dp),e(dp,_b),e(Ro,bb),e(Bt,kb),w(Jn,Bt,null),e(Bt,vb),w(Gn,Bt,null),_(o,Af,b),_(o,Ho,b),e(Ho,Xn),e(Xn,cp),w(_a,cp,null),e(Ho,yb),e(Ho,pp),e(pp,Tb),_(o,Ff,b),_(o,_t,b),w(ba,_t,null),e(_t,wb),e(_t,Qo),e(Qo,$b),e(Qo,hp),e(hp,Ab),e(Qo,Fb),e(Qo,mp),e(mp,xb),e(Qo,Eb),e(_t,Mb),e(_t,ka),e(ka,zb),e(ka,qd),e(qd,jb),e(ka,qb),e(_t,Pb),e(_t,va),e(va,Cb),e(va,ya),e(ya,Lb),e(va,Ob),e(_t,Ib),e(_t,Wt),w(Ta,Wt,null),e(Wt,Nb),e(Wt,Ko),e(Ko,Db),e(Ko,Pd),e(Pd,Sb),e(Ko,Bb),e(Ko,fp),e(fp,Wb),e(Ko,Ub),e(Wt,Rb),w(Yn,Wt,null),e(Wt,Hb),w(Zn,Wt,null),_(o,xf,b),_(o,Vo,b),e(Vo,es),e(es,up),w(wa,up,null),e(Vo,Qb),e(Vo,gp),e(gp,Kb),_(o,Ef,b),_(o,bt,b),w($a,bt,null),e(bt,Vb),e(bt,Aa),e(Aa,Jb),e(Aa,_p),e(_p,Gb),e(Aa,Xb),e(bt,Yb),e(bt,Fa),e(Fa,Zb),e(Fa,Cd),e(Cd,ek),e(Fa,tk),e(bt,ok),e(bt,xa),e(xa,nk),e(xa,Ea),e(Ea,sk),e(xa,rk),e(bt,ak),e(bt,wt),w(Ma,wt,null),e(wt,ik),e(wt,Jo),e(Jo,lk),e(Jo,Ld),e(Ld,dk),e(Jo,ck),e(Jo,bp),e(bp,pk),e(Jo,hk),e(wt,mk),w(ts,wt,null),e(wt,fk),w(os,wt,null),e(wt,uk),w(ns,wt,null),_(o,Mf,b),_(o,Go,b),e(Go,ss),e(ss,kp),w(za,kp,null),e(Go,gk),e(Go,vp),e(vp,_k),_(o,zf,b),_(o,kt,b),w(ja,kt,null),e(kt,bk),e(kt,yp),e(yp,kk),e(kt,vk),e(kt,qa),e(qa,yk),e(qa,Od),e(Od,Tk),e(qa,wk),e(kt,$k),e(kt,Pa),e(Pa,Ak),e(Pa,Ca),e(Ca,Fk),e(Pa,xk),e(kt,Ek),e(kt,it),w(La,it,null),e(it,Mk),e(it,Xo),e(Xo,zk),e(Xo,Id),e(Id,jk),e(Xo,qk),e(Xo,Tp),e(Tp,Pk),e(Xo,Ck),e(it,Lk),w(rs,it,null),e(it,Ok),w(as,it,null),e(it,Ik),w(is,it,null),e(it,Nk),w(ls,it,null),e(it,Dk),w(ds,it,null),_(o,jf,b),_(o,Yo,b),e(Yo,cs),e(cs,wp),w(Oa,wp,null),e(Yo,Sk),e(Yo,$p),e($p,Bk),_(o,qf,b),_(o,vt,b),w(Ia,vt,null),e(vt,Wk),e(vt,Ap),e(Ap,Uk),e(vt,Rk),e(vt,Na),e(Na,Hk),e(Na,Nd),e(Nd,Qk),e(Na,Kk),e(vt,Vk),e(vt,Da),e(Da,Jk),e(Da,Sa),e(Sa,Gk),e(Da,Xk),e(vt,Yk),e(vt,Ut),w(Ba,Ut,null),e(Ut,Zk),e(Ut,Zo),e(Zo,ev),e(Zo,Dd),e(Dd,tv),e(Zo,ov),e(Zo,Fp),e(Fp,nv),e(Zo,sv),e(Ut,rv),w(ps,Ut,null),e(Ut,av),w(hs,Ut,null),_(o,Pf,b),_(o,en,b),e(en,ms),e(ms,xp),w(Wa,xp,null),e(en,iv),e(en,Ep),e(Ep,lv),_(o,Cf,b),_(o,yt,b),w(Ua,yt,null),e(yt,dv),e(yt,Mp),e(Mp,cv),e(yt,pv),e(yt,Ra),e(Ra,hv),e(Ra,Sd),e(Sd,mv),e(Ra,fv),e(yt,uv),e(yt,Ha),e(Ha,gv),e(Ha,Qa),e(Qa,_v),e(Ha,bv),e(yt,kv),e(yt,$t),w(Ka,$t,null),e($t,vv),e($t,tn),e(tn,yv),e(tn,Bd),e(Bd,Tv),e(tn,wv),e(tn,zp),e(zp,$v),e(tn,Av),e($t,Fv),w(fs,$t,null),e($t,xv),w(us,$t,null),e($t,Ev),w(gs,$t,null),_(o,Lf,b),_(o,on,b),e(on,_s),e(_s,jp),w(Va,jp,null),e(on,Mv),e(on,qp),e(qp,zv),_(o,Of,b),_(o,Tt,b),w(Ja,Tt,null),e(Tt,jv),e(Tt,nn),e(nn,qv),e(nn,Pp),e(Pp,Pv),e(nn,Cv),e(nn,Cp),e(Cp,Lv),e(nn,Ov),e(Tt,Iv),e(Tt,Ga),e(Ga,Nv),e(Ga,Wd),e(Wd,Dv),e(Ga,Sv),e(Tt,Bv),e(Tt,Xa),e(Xa,Wv),e(Xa,Ya),e(Ya,Uv),e(Xa,Rv),e(Tt,Hv),e(Tt,At),w(Za,At,null),e(At,Qv),e(At,sn),e(sn,Kv),e(sn,Ud),e(Ud,Vv),e(sn,Jv),e(sn,Lp),e(Lp,Gv),e(sn,Xv),e(At,Yv),w(bs,At,null),e(At,Zv),w(ks,At,null),e(At,ey),w(vs,At,null),_(o,If,b),_(o,rn,b),e(rn,ys),e(ys,Op),w(ei,Op,null),e(rn,ty),e(rn,Ip),e(Ip,oy),_(o,Nf,b),_(o,lt,b),w(ti,lt,null),e(lt,ny),e(lt,Np),e(Np,sy),e(lt,ry),e(lt,oi),e(oi,ay),e(oi,Rd),e(Rd,iy),e(oi,ly),e(lt,dy),e(lt,ni),e(ni,cy),e(ni,si),e(si,py),e(ni,hy),e(lt,my),w(Ts,lt,null),e(lt,fy),e(lt,Rt),w(ri,Rt,null),e(Rt,uy),e(Rt,an),e(an,gy),e(an,Hd),e(Hd,_y),e(an,by),e(an,Dp),e(Dp,ky),e(an,vy),e(Rt,yy),w(ws,Rt,null),e(Rt,Ty),w($s,Rt,null),_(o,Df,b),_(o,ln,b),e(ln,As),e(As,Sp),w(ai,Sp,null),e(ln,wy),e(ln,Bp),e(Bp,$y),_(o,Sf,b),_(o,dt,b),w(ii,dt,null),e(dt,Ay),e(dt,dn),e(dn,Fy),e(dn,Wp),e(Wp,xy),e(dn,Ey),e(dn,Up),e(Up,My),e(dn,zy),e(dt,jy),e(dt,li),e(li,qy),e(li,Qd),e(Qd,Py),e(li,Cy),e(dt,Ly),e(dt,di),e(di,Oy),e(di,ci),e(ci,Iy),e(di,Ny),e(dt,Dy),w(Fs,dt,null),e(dt,Sy),e(dt,Ht),w(pi,Ht,null),e(Ht,By),e(Ht,cn),e(cn,Wy),e(cn,Kd),e(Kd,Uy),e(cn,Ry),e(cn,Rp),e(Rp,Hy),e(cn,Qy),e(Ht,Ky),w(xs,Ht,null),e(Ht,Vy),w(Es,Ht,null),_(o,Bf,b),_(o,pn,b),e(pn,Ms),e(Ms,Hp),w(hi,Hp,null),e(pn,Jy),e(pn,Qp),e(Qp,Gy),_(o,Wf,b),_(o,ct,b),w(mi,ct,null),e(ct,Xy),e(ct,fi),e(fi,Yy),e(fi,Kp),e(Kp,Zy),e(fi,eT),e(ct,tT),e(ct,ui),e(ui,oT),e(ui,Vd),e(Vd,nT),e(ui,sT),e(ct,rT),e(ct,gi),e(gi,aT),e(gi,_i),e(_i,iT),e(gi,lT),e(ct,dT),w(zs,ct,null),e(ct,cT),e(ct,Ft),w(bi,Ft,null),e(Ft,pT),e(Ft,hn),e(hn,hT),e(hn,Jd),e(Jd,mT),e(hn,fT),e(hn,Vp),e(Vp,uT),e(hn,gT),e(Ft,_T),w(js,Ft,null),e(Ft,bT),w(qs,Ft,null),e(Ft,kT),w(Ps,Ft,null),_(o,Uf,b),_(o,mn,b),e(mn,Cs),e(Cs,Jp),w(ki,Jp,null),e(mn,vT),e(mn,Gp),e(Gp,yT),_(o,Rf,b),_(o,pt,b),w(vi,pt,null),e(pt,TT),e(pt,Xp),e(Xp,wT),e(pt,$T),e(pt,yi),e(yi,AT),e(yi,Gd),e(Gd,FT),e(yi,xT),e(pt,ET),e(pt,Ti),e(Ti,MT),e(Ti,wi),e(wi,zT),e(Ti,jT),e(pt,qT),w(Ls,pt,null),e(pt,PT),e(pt,xt),w($i,xt,null),e(xt,CT),e(xt,fn),e(fn,LT),e(fn,Xd),e(Xd,OT),e(fn,IT),e(fn,Yp),e(Yp,NT),e(fn,DT),e(xt,ST),w(Os,xt,null),e(xt,BT),w(Is,xt,null),e(xt,WT),w(Ns,xt,null),_(o,Hf,b),_(o,un,b),e(un,Ds),e(Ds,Zp),w(Ai,Zp,null),e(un,UT),e(un,eh),e(eh,RT),_(o,Qf,b),_(o,ht,b),w(Fi,ht,null),e(ht,HT),e(ht,th),e(th,QT),e(ht,KT),e(ht,xi),e(xi,VT),e(xi,Yd),e(Yd,JT),e(xi,GT),e(ht,XT),e(ht,Ei),e(Ei,YT),e(Ei,Mi),e(Mi,ZT),e(Ei,ew),e(ht,tw),w(Ss,ht,null),e(ht,ow),e(ht,Qt),w(zi,Qt,null),e(Qt,nw),e(Qt,gn),e(gn,sw),e(gn,Zd),e(Zd,rw),e(gn,aw),e(gn,oh),e(oh,iw),e(gn,lw),e(Qt,dw),w(Bs,Qt,null),e(Qt,cw),w(Ws,Qt,null),_(o,Kf,b),_(o,_n,b),e(_n,Us),e(Us,nh),w(ji,nh,null),e(_n,pw),e(_n,sh),e(sh,hw),_(o,Vf,b),_(o,mt,b),w(qi,mt,null),e(mt,mw),e(mt,rh),e(rh,fw),e(mt,uw),e(mt,Pi),e(Pi,gw),e(Pi,ec),e(ec,_w),e(Pi,bw),e(mt,kw),e(mt,Ci),e(Ci,vw),e(Ci,Li),e(Li,yw),e(Ci,Tw),e(mt,ww),w(Rs,mt,null),e(mt,$w),e(mt,Et),w(Oi,Et,null),e(Et,Aw),e(Et,bn),e(bn,Fw),e(bn,tc),e(tc,xw),e(bn,Ew),e(bn,ah),e(ah,Mw),e(bn,zw),e(Et,jw),w(Hs,Et,null),e(Et,qw),w(Qs,Et,null),e(Et,Pw),w(Ks,Et,null),_(o,Jf,b),_(o,kn,b),e(kn,Vs),e(Vs,ih),w(Ii,ih,null),e(kn,Cw),e(kn,lh),e(lh,Lw),_(o,Gf,b),_(o,ft,b),w(Ni,ft,null),e(ft,Ow),e(ft,vn),e(vn,Iw),e(vn,dh),e(dh,Nw),e(vn,Dw),e(vn,ch),e(ch,Sw),e(vn,Bw),e(ft,Ww),e(ft,Di),e(Di,Uw),e(Di,oc),e(oc,Rw),e(Di,Hw),e(ft,Qw),e(ft,Si),e(Si,Kw),e(Si,Bi),e(Bi,Vw),e(Si,Jw),e(ft,Gw),w(Js,ft,null),e(ft,Xw),e(ft,Mt),w(Wi,Mt,null),e(Mt,Yw),e(Mt,yn),e(yn,Zw),e(yn,nc),e(nc,e2),e(yn,t2),e(yn,ph),e(ph,o2),e(yn,n2),e(Mt,s2),w(Gs,Mt,null),e(Mt,r2),w(Xs,Mt,null),e(Mt,a2),w(Ys,Mt,null),_(o,Xf,b),_(o,Tn,b),e(Tn,Zs),e(Zs,hh),w(Ui,hh,null),e(Tn,i2),e(Tn,mh),e(mh,l2),_(o,Yf,b),_(o,et,b),w(Ri,et,null),e(et,d2),e(et,fh),e(fh,c2),e(et,p2),e(et,Hi),e(Hi,h2),e(Hi,sc),e(sc,m2),e(Hi,f2),e(et,u2),e(et,Qi),e(Qi,g2),e(Qi,Ki),e(Ki,_2),e(Qi,b2),e(et,k2),e(et,uh),e(uh,v2),e(et,y2),e(et,lo),e(lo,gh),e(gh,Vi),e(Vi,T2),e(lo,w2),e(lo,_h),e(_h,Ji),e(Ji,$2),e(lo,A2),e(lo,bh),e(bh,Gi),e(Gi,F2),e(lo,x2),e(lo,kh),e(kh,Xi),e(Xi,E2),e(et,M2),e(et,Kt),w(Yi,Kt,null),e(Kt,z2),e(Kt,wn),e(wn,j2),e(wn,vh),e(vh,q2),e(wn,P2),e(wn,yh),e(yh,C2),e(wn,L2),e(Kt,O2),w(er,Kt,null),e(Kt,I2),w(tr,Kt,null),_(o,Zf,b),_(o,$n,b),e($n,or),e(or,Th),w(Zi,Th,null),e($n,N2),e($n,wh),e(wh,D2),_(o,eu,b),_(o,tt,b),w(el,tt,null),e(tt,S2),e(tt,An),e(An,B2),e(An,$h),e($h,W2),e(An,U2),e(An,Ah),e(Ah,R2),e(An,H2),e(tt,Q2),e(tt,tl),e(tl,K2),e(tl,rc),e(rc,V2),e(tl,J2),e(tt,G2),e(tt,ol),e(ol,X2),e(ol,nl),e(nl,Y2),e(ol,Z2),e(tt,e$),e(tt,Fh),e(Fh,t$),e(tt,o$),e(tt,co),e(co,xh),e(xh,sl),e(sl,n$),e(co,s$),e(co,Eh),e(Eh,rl),e(rl,r$),e(co,a$),e(co,Mh),e(Mh,al),e(al,i$),e(co,l$),e(co,zh),e(zh,il),e(il,d$),e(tt,c$),e(tt,Vt),w(ll,Vt,null),e(Vt,p$),e(Vt,Fn),e(Fn,h$),e(Fn,jh),e(jh,m$),e(Fn,f$),e(Fn,qh),e(qh,u$),e(Fn,g$),e(Vt,_$),w(nr,Vt,null),e(Vt,b$),w(sr,Vt,null),_(o,tu,b),_(o,xn,b),e(xn,rr),e(rr,Ph),w(dl,Ph,null),e(xn,k$),e(xn,Ch),e(Ch,v$),_(o,ou,b),_(o,ot,b),w(cl,ot,null),e(ot,y$),e(ot,pl),e(pl,T$),e(pl,Lh),e(Lh,w$),e(pl,$$),e(ot,A$),e(ot,hl),e(hl,F$),e(hl,ac),e(ac,x$),e(hl,E$),e(ot,M$),e(ot,ml),e(ml,z$),e(ml,fl),e(fl,j$),e(ml,q$),e(ot,P$),e(ot,Oh),e(Oh,C$),e(ot,L$),e(ot,po),e(po,Ih),e(Ih,ul),e(ul,O$),e(po,I$),e(po,Nh),e(Nh,gl),e(gl,N$),e(po,D$),e(po,Dh),e(Dh,_l),e(_l,S$),e(po,B$),e(po,Sh),e(Sh,bl),e(bl,W$),e(ot,U$),e(ot,Jt),w(kl,Jt,null),e(Jt,R$),e(Jt,En),e(En,H$),e(En,Bh),e(Bh,Q$),e(En,K$),e(En,Wh),e(Wh,V$),e(En,J$),e(Jt,G$),w(ar,Jt,null),e(Jt,X$),w(ir,Jt,null),_(o,nu,b),_(o,Mn,b),e(Mn,lr),e(lr,Uh),w(vl,Uh,null),e(Mn,Y$),e(Mn,Rh),e(Rh,Z$),_(o,su,b),_(o,nt,b),w(yl,nt,null),e(nt,e1),e(nt,Hh),e(Hh,t1),e(nt,o1),e(nt,Tl),e(Tl,n1),e(Tl,ic),e(ic,s1),e(Tl,r1),e(nt,a1),e(nt,wl),e(wl,i1),e(wl,$l),e($l,l1),e(wl,d1),e(nt,c1),e(nt,Qh),e(Qh,p1),e(nt,h1),e(nt,ho),e(ho,Kh),e(Kh,Al),e(Al,m1),e(ho,f1),e(ho,Vh),e(Vh,Fl),e(Fl,u1),e(ho,g1),e(ho,Jh),e(Jh,xl),e(xl,_1),e(ho,b1),e(ho,Gh),e(Gh,El),e(El,k1),e(nt,v1),e(nt,Gt),w(Ml,Gt,null),e(Gt,y1),e(Gt,zn),e(zn,T1),e(zn,Xh),e(Xh,w1),e(zn,$1),e(zn,Yh),e(Yh,A1),e(zn,F1),e(Gt,x1),w(dr,Gt,null),e(Gt,E1),w(cr,Gt,null),_(o,ru,b),_(o,jn,b),e(jn,pr),e(pr,Zh),w(zl,Zh,null),e(jn,M1),e(jn,em),e(em,z1),_(o,au,b),_(o,st,b),w(jl,st,null),e(st,j1),e(st,tm),e(tm,q1),e(st,P1),e(st,ql),e(ql,C1),e(ql,lc),e(lc,L1),e(ql,O1),e(st,I1),e(st,Pl),e(Pl,N1),e(Pl,Cl),e(Cl,D1),e(Pl,S1),e(st,B1),e(st,om),e(om,W1),e(st,U1),e(st,mo),e(mo,nm),e(nm,Ll),e(Ll,R1),e(mo,H1),e(mo,sm),e(sm,Ol),e(Ol,Q1),e(mo,K1),e(mo,rm),e(rm,Il),e(Il,V1),e(mo,J1),e(mo,am),e(am,Nl),e(Nl,G1),e(st,X1),e(st,Xt),w(Dl,Xt,null),e(Xt,Y1),e(Xt,qn),e(qn,Z1),e(qn,im),e(im,e0),e(qn,t0),e(qn,lm),e(lm,o0),e(qn,n0),e(Xt,s0),w(hr,Xt,null),e(Xt,r0),w(mr,Xt,null),_(o,iu,b),_(o,Pn,b),e(Pn,fr),e(fr,dm),w(Sl,dm,null),e(Pn,a0),e(Pn,cm),e(cm,i0),_(o,lu,b),_(o,rt,b),w(Bl,rt,null),e(rt,l0),e(rt,pm),e(pm,d0),e(rt,c0),e(rt,Wl),e(Wl,p0),e(Wl,dc),e(dc,h0),e(Wl,m0),e(rt,f0),e(rt,Ul),e(Ul,u0),e(Ul,Rl),e(Rl,g0),e(Ul,_0),e(rt,b0),e(rt,hm),e(hm,k0),e(rt,v0),e(rt,fo),e(fo,mm),e(mm,Hl),e(Hl,y0),e(fo,T0),e(fo,fm),e(fm,Ql),e(Ql,w0),e(fo,$0),e(fo,um),e(um,Kl),e(Kl,A0),e(fo,F0),e(fo,gm),e(gm,Vl),e(Vl,x0),e(rt,E0),e(rt,Yt),w(Jl,Yt,null),e(Yt,M0),e(Yt,Cn),e(Cn,z0),e(Cn,_m),e(_m,j0),e(Cn,q0),e(Cn,bm),e(bm,P0),e(Cn,C0),e(Yt,L0),w(ur,Yt,null),e(Yt,O0),w(gr,Yt,null),_(o,du,b),_(o,Ln,b),e(Ln,_r),e(_r,km),w(Gl,km,null),e(Ln,I0),e(Ln,vm),e(vm,N0),_(o,cu,b),_(o,at,b),w(Xl,at,null),e(at,D0),e(at,On),e(On,S0),e(On,ym),e(ym,B0),e(On,W0),e(On,Tm),e(Tm,U0),e(On,R0),e(at,H0),e(at,Yl),e(Yl,Q0),e(Yl,cc),e(cc,K0),e(Yl,V0),e(at,J0),e(at,Zl),e(Zl,G0),e(Zl,ed),e(ed,X0),e(Zl,Y0),e(at,Z0),e(at,wm),e(wm,eA),e(at,tA),e(at,uo),e(uo,$m),e($m,td),e(td,oA),e(uo,nA),e(uo,Am),e(Am,od),e(od,sA),e(uo,rA),e(uo,Fm),e(Fm,nd),e(nd,aA),e(uo,iA),e(uo,xm),e(xm,sd),e(sd,lA),e(at,dA),e(at,Zt),w(rd,Zt,null),e(Zt,cA),e(Zt,In),e(In,pA),e(In,Em),e(Em,hA),e(In,mA),e(In,Mm),e(Mm,fA),e(In,uA),e(Zt,gA),w(br,Zt,null),e(Zt,_A),w(kr,Zt,null),pu=!0},p(o,[b]){const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),Bn.$set(ad);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),Rn.$set(zm);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),Qn.$set(jm);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),Jn.$set(qm);const id={};b&2&&(id.$$scope={dirty:b,ctx:o}),Gn.$set(id);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),Yn.$set(Pm);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),Zn.$set(Cm);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),ts.$set(Lm);const ld={};b&2&&(ld.$$scope={dirty:b,ctx:o}),os.$set(ld);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),ns.$set(Om);const dd={};b&2&&(dd.$$scope={dirty:b,ctx:o}),rs.$set(dd);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),as.$set(Im);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),is.$set(Nm);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),ls.$set(Dm);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),ds.$set(Sm);const Bm={};b&2&&(Bm.$$scope={dirty:b,ctx:o}),ps.$set(Bm);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),hs.$set(Wm);const cd={};b&2&&(cd.$$scope={dirty:b,ctx:o}),fs.$set(cd);const Um={};b&2&&(Um.$$scope={dirty:b,ctx:o}),us.$set(Um);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),gs.$set(Rm);const go={};b&2&&(go.$$scope={dirty:b,ctx:o}),bs.$set(go);const Hm={};b&2&&(Hm.$$scope={dirty:b,ctx:o}),ks.$set(Hm);const Qm={};b&2&&(Qm.$$scope={dirty:b,ctx:o}),vs.$set(Qm);const Km={};b&2&&(Km.$$scope={dirty:b,ctx:o}),Ts.$set(Km);const pd={};b&2&&(pd.$$scope={dirty:b,ctx:o}),ws.$set(pd);const Vm={};b&2&&(Vm.$$scope={dirty:b,ctx:o}),$s.$set(Vm);const Jm={};b&2&&(Jm.$$scope={dirty:b,ctx:o}),Fs.$set(Jm);const Gm={};b&2&&(Gm.$$scope={dirty:b,ctx:o}),xs.$set(Gm);const _o={};b&2&&(_o.$$scope={dirty:b,ctx:o}),Es.$set(_o);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),zs.$set(bo);const Xm={};b&2&&(Xm.$$scope={dirty:b,ctx:o}),js.$set(Xm);const Ym={};b&2&&(Ym.$$scope={dirty:b,ctx:o}),qs.$set(Ym);const Zm={};b&2&&(Zm.$$scope={dirty:b,ctx:o}),Ps.$set(Zm);const Nn={};b&2&&(Nn.$$scope={dirty:b,ctx:o}),Ls.$set(Nn);const ef={};b&2&&(ef.$$scope={dirty:b,ctx:o}),Os.$set(ef);const tf={};b&2&&(tf.$$scope={dirty:b,ctx:o}),Is.$set(tf);const hd={};b&2&&(hd.$$scope={dirty:b,ctx:o}),Ns.$set(hd);const of={};b&2&&(of.$$scope={dirty:b,ctx:o}),Ss.$set(of);const nf={};b&2&&(nf.$$scope={dirty:b,ctx:o}),Bs.$set(nf);const sf={};b&2&&(sf.$$scope={dirty:b,ctx:o}),Ws.$set(sf);const ut={};b&2&&(ut.$$scope={dirty:b,ctx:o}),Rs.$set(ut);const md={};b&2&&(md.$$scope={dirty:b,ctx:o}),Hs.$set(md);const rf={};b&2&&(rf.$$scope={dirty:b,ctx:o}),Qs.$set(rf);const fd={};b&2&&(fd.$$scope={dirty:b,ctx:o}),Ks.$set(fd);const af={};b&2&&(af.$$scope={dirty:b,ctx:o}),Js.$set(af);const Dn={};b&2&&(Dn.$$scope={dirty:b,ctx:o}),Gs.$set(Dn);const lf={};b&2&&(lf.$$scope={dirty:b,ctx:o}),Xs.$set(lf);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),Ys.$set(ud);const pc={};b&2&&(pc.$$scope={dirty:b,ctx:o}),er.$set(pc);const df={};b&2&&(df.$$scope={dirty:b,ctx:o}),tr.$set(df);const hc={};b&2&&(hc.$$scope={dirty:b,ctx:o}),nr.$set(hc);const cf={};b&2&&(cf.$$scope={dirty:b,ctx:o}),sr.$set(cf);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),ar.$set(gd);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),ir.$set(_d);const pf={};b&2&&(pf.$$scope={dirty:b,ctx:o}),dr.$set(pf);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),cr.$set(ko);const hf={};b&2&&(hf.$$scope={dirty:b,ctx:o}),hr.$set(hf);const Sn={};b&2&&(Sn.$$scope={dirty:b,ctx:o}),mr.$set(Sn);const mf={};b&2&&(mf.$$scope={dirty:b,ctx:o}),ur.$set(mf);const ff={};b&2&&(ff.$$scope={dirty:b,ctx:o}),gr.$set(ff);const uf={};b&2&&(uf.$$scope={dirty:b,ctx:o}),br.$set(uf);const bd={};b&2&&(bd.$$scope={dirty:b,ctx:o}),kr.$set(bd)},i(o){pu||($(l.$$.fragment,o),$(E.$$.fragment,o),$(De.$$.fragment,o),$(Se.$$.fragment,o),$(Bn.$$.fragment,o),$(Ur.$$.fragment,o),$(Rr.$$.fragment,o),$(Vr.$$.fragment,o),$(Gr.$$.fragment,o),$(Yr.$$.fragment,o),$(Rn.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(na.$$.fragment,o),$(ra.$$.fragment,o),$(Qn.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(da.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(ga.$$.fragment,o),$(Jn.$$.fragment,o),$(Gn.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(Ta.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(Ma.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(za.$$.fragment,o),$(ja.$$.fragment,o),$(La.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(Oa.$$.fragment,o),$(Ia.$$.fragment,o),$(Ba.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Wa.$$.fragment,o),$(Ua.$$.fragment,o),$(Ka.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$(Ts.$$.fragment,o),$(ri.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(Fs.$$.fragment,o),$(pi.$$.fragment,o),$(xs.$$.fragment,o),$(Es.$$.fragment,o),$(hi.$$.fragment,o),$(mi.$$.fragment,o),$(zs.$$.fragment,o),$(bi.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(ki.$$.fragment,o),$(vi.$$.fragment,o),$(Ls.$$.fragment,o),$($i.$$.fragment,o),$(Os.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ai.$$.fragment,o),$(Fi.$$.fragment,o),$(Ss.$$.fragment,o),$(zi.$$.fragment,o),$(Bs.$$.fragment,o),$(Ws.$$.fragment,o),$(ji.$$.fragment,o),$(qi.$$.fragment,o),$(Rs.$$.fragment,o),$(Oi.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ii.$$.fragment,o),$(Ni.$$.fragment,o),$(Js.$$.fragment,o),$(Wi.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Ui.$$.fragment,o),$(Ri.$$.fragment,o),$(Yi.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(ll.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(dl.$$.fragment,o),$(cl.$$.fragment,o),$(kl.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(vl.$$.fragment,o),$(yl.$$.fragment,o),$(Ml.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(zl.$$.fragment,o),$(jl.$$.fragment,o),$(Dl.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(Sl.$$.fragment,o),$(Bl.$$.fragment,o),$(Jl.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(rd.$$.fragment,o),$(br.$$.fragment,o),$(kr.$$.fragment,o),pu=!0)},o(o){A(l.$$.fragment,o),A(E.$$.fragment,o),A(De.$$.fragment,o),A(Se.$$.fragment,o),A(Bn.$$.fragment,o),A(Ur.$$.fragment,o),A(Rr.$$.fragment,o),A(Vr.$$.fragment,o),A(Gr.$$.fragment,o),A(Yr.$$.fragment,o),A(Rn.$$.fragment,o),A(Zr.$$.fragment,o),A(ea.$$.fragment,o),A(ta.$$.fragment,o),A(na.$$.fragment,o),A(ra.$$.fragment,o),A(Qn.$$.fragment,o),A(aa.$$.fragment,o),A(ia.$$.fragment,o),A(da.$$.fragment,o),A(pa.$$.fragment,o),A(ha.$$.fragment,o),A(ga.$$.fragment,o),A(Jn.$$.fragment,o),A(Gn.$$.fragment,o),A(_a.$$.fragment,o),A(ba.$$.fragment,o),A(Ta.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(wa.$$.fragment,o),A($a.$$.fragment,o),A(Ma.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(za.$$.fragment,o),A(ja.$$.fragment,o),A(La.$$.fragment,o),A(rs.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(ls.$$.fragment,o),A(ds.$$.fragment,o),A(Oa.$$.fragment,o),A(Ia.$$.fragment,o),A(Ba.$$.fragment,o),A(ps.$$.fragment,o),A(hs.$$.fragment,o),A(Wa.$$.fragment,o),A(Ua.$$.fragment,o),A(Ka.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(Va.$$.fragment,o),A(Ja.$$.fragment,o),A(Za.$$.fragment,o),A(bs.$$.fragment,o),A(ks.$$.fragment,o),A(vs.$$.fragment,o),A(ei.$$.fragment,o),A(ti.$$.fragment,o),A(Ts.$$.fragment,o),A(ri.$$.fragment,o),A(ws.$$.fragment,o),A($s.$$.fragment,o),A(ai.$$.fragment,o),A(ii.$$.fragment,o),A(Fs.$$.fragment,o),A(pi.$$.fragment,o),A(xs.$$.fragment,o),A(Es.$$.fragment,o),A(hi.$$.fragment,o),A(mi.$$.fragment,o),A(zs.$$.fragment,o),A(bi.$$.fragment,o),A(js.$$.fragment,o),A(qs.$$.fragment,o),A(Ps.$$.fragment,o),A(ki.$$.fragment,o),A(vi.$$.fragment,o),A(Ls.$$.fragment,o),A($i.$$.fragment,o),A(Os.$$.fragment,o),A(Is.$$.fragment,o),A(Ns.$$.fragment,o),A(Ai.$$.fragment,o),A(Fi.$$.fragment,o),A(Ss.$$.fragment,o),A(zi.$$.fragment,o),A(Bs.$$.fragment,o),A(Ws.$$.fragment,o),A(ji.$$.fragment,o),A(qi.$$.fragment,o),A(Rs.$$.fragment,o),A(Oi.$$.fragment,o),A(Hs.$$.fragment,o),A(Qs.$$.fragment,o),A(Ks.$$.fragment,o),A(Ii.$$.fragment,o),A(Ni.$$.fragment,o),A(Js.$$.fragment,o),A(Wi.$$.fragment,o),A(Gs.$$.fragment,o),A(Xs.$$.fragment,o),A(Ys.$$.fragment,o),A(Ui.$$.fragment,o),A(Ri.$$.fragment,o),A(Yi.$$.fragment,o),A(er.$$.fragment,o),A(tr.$$.fragment,o),A(Zi.$$.fragment,o),A(el.$$.fragment,o),A(ll.$$.fragment,o),A(nr.$$.fragment,o),A(sr.$$.fragment,o),A(dl.$$.fragment,o),A(cl.$$.fragment,o),A(kl.$$.fragment,o),A(ar.$$.fragment,o),A(ir.$$.fragment,o),A(vl.$$.fragment,o),A(yl.$$.fragment,o),A(Ml.$$.fragment,o),A(dr.$$.fragment,o),A(cr.$$.fragment,o),A(zl.$$.fragment,o),A(jl.$$.fragment,o),A(Dl.$$.fragment,o),A(hr.$$.fragment,o),A(mr.$$.fragment,o),A(Sl.$$.fragment,o),A(Bl.$$.fragment,o),A(Jl.$$.fragment,o),A(ur.$$.fragment,o),A(gr.$$.fragment,o),A(Gl.$$.fragment,o),A(Xl.$$.fragment,o),A(rd.$$.fragment,o),A(br.$$.fragment,o),A(kr.$$.fragment,o),pu=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(ge),o&&t(B),F(E),o&&t(_e),o&&t(W),o&&t(be),o&&t(U),o&&t(oe),o&&t(q),o&&t(ke),o&&t(H),o&&t(J),o&&t(le),o&&t(C),o&&t(re),o&&t(ve),o&&t(O),o&&t(z),o&&t(Ne),F(De),o&&t(Ke),o&&t(de),F(Se),F(Bn),o&&t(gf),o&&t(Io),F(Ur),o&&t(_f),o&&t(Ze),F(Rr),F(Vr),F(Gr),F(Yr),F(Rn),F(Zr),o&&t(bf),o&&t(Do),F(ea),o&&t(kf),o&&t(Nt),F(ta),F(na),F(ra),F(Qn),o&&t(vf),o&&t(So),F(aa),o&&t(yf),o&&t(Bo),F(ia),o&&t(Tf),o&&t(Wo),F(da),o&&t(wf),o&&t(Uo),F(pa),o&&t($f),o&&t(gt),F(ha),F(ga),F(Jn),F(Gn),o&&t(Af),o&&t(Ho),F(_a),o&&t(Ff),o&&t(_t),F(ba),F(Ta),F(Yn),F(Zn),o&&t(xf),o&&t(Vo),F(wa),o&&t(Ef),o&&t(bt),F($a),F(Ma),F(ts),F(os),F(ns),o&&t(Mf),o&&t(Go),F(za),o&&t(zf),o&&t(kt),F(ja),F(La),F(rs),F(as),F(is),F(ls),F(ds),o&&t(jf),o&&t(Yo),F(Oa),o&&t(qf),o&&t(vt),F(Ia),F(Ba),F(ps),F(hs),o&&t(Pf),o&&t(en),F(Wa),o&&t(Cf),o&&t(yt),F(Ua),F(Ka),F(fs),F(us),F(gs),o&&t(Lf),o&&t(on),F(Va),o&&t(Of),o&&t(Tt),F(Ja),F(Za),F(bs),F(ks),F(vs),o&&t(If),o&&t(rn),F(ei),o&&t(Nf),o&&t(lt),F(ti),F(Ts),F(ri),F(ws),F($s),o&&t(Df),o&&t(ln),F(ai),o&&t(Sf),o&&t(dt),F(ii),F(Fs),F(pi),F(xs),F(Es),o&&t(Bf),o&&t(pn),F(hi),o&&t(Wf),o&&t(ct),F(mi),F(zs),F(bi),F(js),F(qs),F(Ps),o&&t(Uf),o&&t(mn),F(ki),o&&t(Rf),o&&t(pt),F(vi),F(Ls),F($i),F(Os),F(Is),F(Ns),o&&t(Hf),o&&t(un),F(Ai),o&&t(Qf),o&&t(ht),F(Fi),F(Ss),F(zi),F(Bs),F(Ws),o&&t(Kf),o&&t(_n),F(ji),o&&t(Vf),o&&t(mt),F(qi),F(Rs),F(Oi),F(Hs),F(Qs),F(Ks),o&&t(Jf),o&&t(kn),F(Ii),o&&t(Gf),o&&t(ft),F(Ni),F(Js),F(Wi),F(Gs),F(Xs),F(Ys),o&&t(Xf),o&&t(Tn),F(Ui),o&&t(Yf),o&&t(et),F(Ri),F(Yi),F(er),F(tr),o&&t(Zf),o&&t($n),F(Zi),o&&t(eu),o&&t(tt),F(el),F(ll),F(nr),F(sr),o&&t(tu),o&&t(xn),F(dl),o&&t(ou),o&&t(ot),F(cl),F(kl),F(ar),F(ir),o&&t(nu),o&&t(Mn),F(vl),o&&t(su),o&&t(nt),F(yl),F(Ml),F(dr),F(cr),o&&t(ru),o&&t(jn),F(zl),o&&t(au),o&&t(st),F(jl),F(Dl),F(hr),F(mr),o&&t(iu),o&&t(Pn),F(Sl),o&&t(lu),o&&t(rt),F(Bl),F(Jl),F(ur),F(gr),o&&t(du),o&&t(Ln),F(Gl),o&&t(cu),o&&t(at),F(Xl),F(rd),F(br),F(kr)}}}const _z={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function bz(x){return iM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Az extends nM{constructor(d){super();sM(this,d,bz,gz,rM,{})}}export{Az as default,_z as metadata};
