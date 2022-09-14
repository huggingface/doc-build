import{S as nM,i as sM,s as rM,e as r,k as p,w as y,t as n,M as aM,c as a,d as t,m as h,a as i,x as T,h as s,b as u,G as e,g as _,y as w,q as $,o as A,B as F,v as iM,L as pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as We}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function lM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertConfig, AlbertModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function dM(x){let d,g,c,f,v;return f=new he({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function cM(x){let d,g,c,f,v;return f=new he({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function pM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function hM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function mM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function fM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function uM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function gM(x){let d,g,c,f,v;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function _M(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function bM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function vM(x){let d,g,c,f,v;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function kM(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function yM(x){let d,g,c,f,v;return f=new he({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function TM(x){let d,g;return d=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function $M(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function AM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function FM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function xM(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function EM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function MM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function zM(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function jM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function qM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function PM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function CM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function LM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function OM(x){let d,g,c,f,v;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function IM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function NM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function DM(x){let d,g,c,f,v;return f=new he({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function SM(x){let d,g;return d=new he({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function WM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function UM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function BM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function RM(x){let d,g;return d=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function HM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function QM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function KM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function VM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function JM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function GM(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function XM(x){let d,g;return d=new he({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function YM(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),f=n("transformers"),v=n(" accept two formats as input:"),l=p(),m=r("ul"),M=r("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=p(),W=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r("code"),we=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r("code"),$e=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Ae=n("fit()"),be=n(" and "),B=r("code"),me=n("predict()"),Fe=n(`, such as when creating your own layers or models with
the Keras `),X=r("code"),fe=n("Functional"),xe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),q=r("ul"),L=r("li"),ve=n("a single Tensor with "),H=r("code"),ue=n("input_ids"),Ee=n(" only and nothing else: "),J=r("code"),le=n("model(input_ids)"),Me=p(),C=r("li"),re=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r("code"),ze=n("model([input_ids, attention_mask])"),je=n(" or "),V=r("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),ke=p(),O=r("li"),Pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),P=r("p"),Le=n(`Note that when creating models and layers with
`),I=r("a"),ie=n("subclassing"),Oe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var Ne=i(c);f=s(Ne,"transformers"),Ne.forEach(t),v=s(z," accept two formats as input:"),z.forEach(t),l=h(k),m=a(k,"UL",{});var Z=i(m);M=a(Z,"LI",{});var He=i(M);ye=s(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),ge=h(Z),W=a(Z,"LI",{});var De=i(W);se=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),Z.forEach(t),te=h(k),E=a(k,"P",{});var j=i(E);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a(j,"CODE",{});var Qe=i(Q);we=s(Qe,"model.fit()"),Qe.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(j,"CODE",{});var Ke=i(G);Ae=s(Ke,"fit()"),Ke.forEach(t),be=s(j," and "),B=a(j,"CODE",{});var de=i(B);me=s(de,"predict()"),de.forEach(t),Fe=s(j,`, such as when creating your own layers or models with
the Keras `),X=a(j,"CODE",{});var Se=i(X);fe=s(Se,"Functional"),Se.forEach(t),xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=h(k),q=a(k,"UL",{});var S=i(q);L=a(S,"LI",{});var N=i(L);ve=s(N,"a single Tensor with "),H=a(N,"CODE",{});var Je=i(H);ue=s(Je,"input_ids"),Je.forEach(t),Ee=s(N," only and nothing else: "),J=a(N,"CODE",{});var Ue=i(J);le=s(Ue,"model(input_ids)"),Ue.forEach(t),N.forEach(t),Me=h(S),C=a(S,"LI",{});var Y=i(C);re=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ge=i(K);ze=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),je=s(Y," or "),V=a(Y,"CODE",{});var Be=i(V);qe=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),Y.forEach(t),ke=h(S),O=a(S,"LI",{});var Ie=i(O);Pe=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(Ie,"CODE",{});var Xe=i(R);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ie.forEach(t),S.forEach(t),ne=h(k),P=a(k,"P",{});var ee=i(P);Le=s(ee,`Note that when creating models and layers with
`),I=a(ee,"A",{href:!0,rel:!0});var Ye=i(I);ie=s(Ye,"subclassing"),Ye.forEach(t),Oe=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(I,"rel","nofollow")},m(k,z){_(k,d,z),e(d,g),e(d,c),e(c,f),e(d,v),_(k,l,z),_(k,m,z),e(m,M),e(M,ye),e(m,ge),e(m,W),e(W,se),_(k,te,z),_(k,E,z),e(E,Te),e(E,Q),e(Q,we),e(E,_e),e(E,U),e(U,$e),e(E,ae),e(E,G),e(G,Ae),e(E,be),e(E,B),e(B,me),e(E,Fe),e(E,X),e(X,fe),e(E,xe),_(k,oe,z),_(k,q,z),e(q,L),e(L,ve),e(L,H),e(H,ue),e(L,Ee),e(L,J),e(J,le),e(q,Me),e(q,C),e(C,re),e(C,K),e(K,ze),e(C,je),e(C,V),e(V,qe),e(q,ke),e(q,O),e(O,Pe),e(O,R),e(R,Ce),_(k,ne,z),_(k,P,z),e(P,Le),e(P,I),e(I,ie),e(P,Oe)},d(k){k&&t(d),k&&t(l),k&&t(m),k&&t(te),k&&t(E),k&&t(oe),k&&t(q),k&&t(ne),k&&t(P)}}}function ZM(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function ez(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function tz(x){let d,g;return d=new he({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:pe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function oz(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function nz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function sz(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function rz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function az(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function iz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function lz(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function dz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function cz(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function pz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function hz(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function mz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function fz(x){let d,g,c,f,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,v)},d(l){l&&t(d)}}}function uz(x){let d,g,c,f,v;return f=new he({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=n("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),v=!0},p:pe,i(l){v||($(f.$$.fragment,l),v=!0)},o(l){A(f.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function gz(x){let d,g,c,f,v,l,m,M,ye,ge,W,se,te,E,Te,Q,we,_e,U,$e,ae,G,Ae,be,B,me,Fe,X,fe,xe,oe,q,L,ve,H,ue,Ee,J,le,Me,C,re,K,ze,je,V,qe,ke,O,Pe,R,Ce,ne,P,Le,I,ie,Oe,k,z,Ne,Z,He,De,j,Qe,Ve,Ke,de,Se,S,N,Je,Ue,Y,Ge,Be,Ie,Xe,ee,Ye,zg,jg,Oo,qg,vd,Pg,Cg,kd,Lg,Og,Ig,Wn,gf,Io,Un,Wc,Br,Ng,Uc,Dg,_f,Ze,Rr,Sg,Hr,Wg,Qr,Ug,Bg,Rg,Kr,Hg,yd,Qg,Kg,Vg,ko,Vr,Jg,Bc,Gg,Xg,Jr,Td,Yg,Rc,Zg,e_,wd,t_,Hc,o_,n_,Bn,Gr,s_,Xr,r_,Qc,a_,i_,l_,Dt,Yr,d_,Kc,c_,p_,Rn,h_,No,m_,Vc,f_,u_,Jc,g_,__,b_,$d,Zr,bf,Do,Hn,Gc,ea,v_,Xc,k_,vf,Nt,ta,y_,io,T_,Yc,w_,$_,oa,A_,F_,Ad,x_,E_,M_,yo,na,z_,Zc,j_,q_,sa,Fd,P_,ep,C_,L_,xd,O_,tp,I_,N_,St,ra,D_,op,S_,W_,Qn,U_,np,B_,kf,So,Kn,sp,aa,R_,rp,H_,yf,Wo,ia,Q_,la,K_,Ed,V_,J_,Tf,Uo,da,G_,ca,X_,Md,Y_,Z_,wf,Bo,Vn,ap,pa,eb,ip,tb,$f,gt,ha,ob,lp,nb,sb,ma,rb,zd,ab,ib,lb,fa,db,ua,cb,pb,hb,Wt,ga,mb,Ro,fb,jd,ub,gb,dp,_b,bb,vb,Jn,kb,Gn,Af,Ho,Xn,cp,_a,yb,pp,Tb,Ff,_t,ba,wb,Qo,$b,hp,Ab,Fb,mp,xb,Eb,Mb,va,zb,qd,jb,qb,Pb,ka,Cb,ya,Lb,Ob,Ib,Ut,Ta,Nb,Ko,Db,Pd,Sb,Wb,fp,Ub,Bb,Rb,Yn,Hb,Zn,xf,Vo,es,up,wa,Qb,gp,Kb,Ef,bt,$a,Vb,Aa,Jb,_p,Gb,Xb,Yb,Fa,Zb,Cd,ev,tv,ov,xa,nv,Ea,sv,rv,av,wt,Ma,iv,Jo,lv,Ld,dv,cv,bp,pv,hv,mv,ts,fv,os,uv,ns,Mf,Go,ss,vp,za,gv,kp,_v,zf,vt,ja,bv,yp,vv,kv,qa,yv,Od,Tv,wv,$v,Pa,Av,Ca,Fv,xv,Ev,it,La,Mv,Xo,zv,Id,jv,qv,Tp,Pv,Cv,Lv,rs,Ov,as,Iv,is,Nv,ls,Dv,ds,jf,Yo,cs,wp,Oa,Sv,$p,Wv,qf,kt,Ia,Uv,Ap,Bv,Rv,Na,Hv,Nd,Qv,Kv,Vv,Da,Jv,Sa,Gv,Xv,Yv,Bt,Wa,Zv,Zo,ek,Dd,tk,ok,Fp,nk,sk,rk,ps,ak,hs,Pf,en,ms,xp,Ua,ik,Ep,lk,Cf,yt,Ba,dk,Mp,ck,pk,Ra,hk,Sd,mk,fk,uk,Ha,gk,Qa,_k,bk,vk,$t,Ka,kk,tn,yk,Wd,Tk,wk,zp,$k,Ak,Fk,fs,xk,us,Ek,gs,Lf,on,_s,jp,Va,Mk,qp,zk,Of,Tt,Ja,jk,nn,qk,Pp,Pk,Ck,Cp,Lk,Ok,Ik,Ga,Nk,Ud,Dk,Sk,Wk,Xa,Uk,Ya,Bk,Rk,Hk,At,Za,Qk,sn,Kk,Bd,Vk,Jk,Lp,Gk,Xk,Yk,bs,Zk,vs,e2,ks,If,rn,ys,Op,ei,t2,Ip,o2,Nf,lt,ti,n2,Np,s2,r2,oi,a2,Rd,i2,l2,d2,ni,c2,si,p2,h2,m2,Ts,f2,Rt,ri,u2,an,g2,Hd,_2,b2,Dp,v2,k2,y2,ws,T2,$s,Df,ln,As,Sp,ai,w2,Wp,$2,Sf,dt,ii,A2,dn,F2,Up,x2,E2,Bp,M2,z2,j2,li,q2,Qd,P2,C2,L2,di,O2,ci,I2,N2,D2,Fs,S2,Ht,pi,W2,cn,U2,Kd,B2,R2,Rp,H2,Q2,K2,xs,V2,Es,Wf,pn,Ms,Hp,hi,J2,Qp,G2,Uf,ct,mi,X2,fi,Y2,Kp,Z2,ey,ty,ui,oy,Vd,ny,sy,ry,gi,ay,_i,iy,ly,dy,zs,cy,Ft,bi,py,hn,hy,Jd,my,fy,Vp,uy,gy,_y,js,by,qs,vy,Ps,Bf,mn,Cs,Jp,vi,ky,Gp,yy,Rf,pt,ki,Ty,Xp,wy,$y,yi,Ay,Gd,Fy,xy,Ey,Ti,My,wi,zy,jy,qy,Ls,Py,xt,$i,Cy,fn,Ly,Xd,Oy,Iy,Yp,Ny,Dy,Sy,Os,Wy,Is,Uy,Ns,Hf,un,Ds,Zp,Ai,By,eh,Ry,Qf,ht,Fi,Hy,th,Qy,Ky,xi,Vy,Yd,Jy,Gy,Xy,Ei,Yy,Mi,Zy,eT,tT,Ss,oT,Qt,zi,nT,gn,sT,Zd,rT,aT,oh,iT,lT,dT,Ws,cT,Us,Kf,_n,Bs,nh,ji,pT,sh,hT,Vf,mt,qi,mT,rh,fT,uT,Pi,gT,ec,_T,bT,vT,Ci,kT,Li,yT,TT,wT,Rs,$T,Et,Oi,AT,bn,FT,tc,xT,ET,ah,MT,zT,jT,Hs,qT,Qs,PT,Ks,Jf,vn,Vs,ih,Ii,CT,lh,LT,Gf,ft,Ni,OT,kn,IT,dh,NT,DT,ch,ST,WT,UT,Di,BT,oc,RT,HT,QT,Si,KT,Wi,VT,JT,GT,Js,XT,Mt,Ui,YT,yn,ZT,nc,ew,tw,ph,ow,nw,sw,Gs,rw,Xs,aw,Ys,Xf,Tn,Zs,hh,Bi,iw,mh,lw,Yf,et,Ri,dw,fh,cw,pw,Hi,hw,sc,mw,fw,uw,Qi,gw,Ki,_w,bw,vw,uh,kw,yw,lo,gh,Vi,Tw,ww,_h,Ji,$w,Aw,bh,Gi,Fw,xw,vh,Xi,Ew,Mw,Kt,Yi,zw,wn,jw,kh,qw,Pw,yh,Cw,Lw,Ow,er,Iw,tr,Zf,$n,or,Th,Zi,Nw,wh,Dw,eu,tt,el,Sw,An,Ww,$h,Uw,Bw,Ah,Rw,Hw,Qw,tl,Kw,rc,Vw,Jw,Gw,ol,Xw,nl,Yw,Zw,e$,Fh,t$,o$,co,xh,sl,n$,s$,Eh,rl,r$,a$,Mh,al,i$,l$,zh,il,d$,c$,Vt,ll,p$,Fn,h$,jh,m$,f$,qh,u$,g$,_$,nr,b$,sr,tu,xn,rr,Ph,dl,v$,Ch,k$,ou,ot,cl,y$,pl,T$,Lh,w$,$$,A$,hl,F$,ac,x$,E$,M$,ml,z$,fl,j$,q$,P$,Oh,C$,L$,po,Ih,ul,O$,I$,Nh,gl,N$,D$,Dh,_l,S$,W$,Sh,bl,U$,B$,Jt,vl,R$,En,H$,Wh,Q$,K$,Uh,V$,J$,G$,ar,X$,ir,nu,Mn,lr,Bh,kl,Y$,Rh,Z$,su,nt,yl,e1,Hh,t1,o1,Tl,n1,ic,s1,r1,a1,wl,i1,$l,l1,d1,c1,Qh,p1,h1,ho,Kh,Al,m1,f1,Vh,Fl,u1,g1,Jh,xl,_1,b1,Gh,El,v1,k1,Gt,Ml,y1,zn,T1,Xh,w1,$1,Yh,A1,F1,x1,dr,E1,cr,ru,jn,pr,Zh,zl,M1,em,z1,au,st,jl,j1,tm,q1,P1,ql,C1,lc,L1,O1,I1,Pl,N1,Cl,D1,S1,W1,om,U1,B1,mo,nm,Ll,R1,H1,sm,Ol,Q1,K1,rm,Il,V1,J1,am,Nl,G1,X1,Xt,Dl,Y1,qn,Z1,im,e0,t0,lm,o0,n0,s0,hr,r0,mr,iu,Pn,fr,dm,Sl,a0,cm,i0,lu,rt,Wl,l0,pm,d0,c0,Ul,p0,dc,h0,m0,f0,Bl,u0,Rl,g0,_0,b0,hm,v0,k0,fo,mm,Hl,y0,T0,fm,Ql,w0,$0,um,Kl,A0,F0,gm,Vl,x0,E0,Yt,Jl,M0,Cn,z0,_m,j0,q0,bm,P0,C0,L0,ur,O0,gr,du,Ln,_r,vm,Gl,I0,km,N0,cu,at,Xl,D0,On,S0,ym,W0,U0,Tm,B0,R0,H0,Yl,Q0,cc,K0,V0,J0,Zl,G0,ed,X0,Y0,Z0,wm,eA,tA,uo,$m,td,oA,nA,Am,od,sA,rA,Fm,nd,aA,iA,xm,sd,lA,dA,Zt,rd,cA,In,pA,Em,hA,mA,Mm,fA,uA,gA,br,_A,vr,pu;return l=new Re({}),E=new Re({}),De=new Re({}),Se=new D({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/configuration_albert.py#L36"}}),Wn=new ce({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[lM]},$$scope:{ctx:x}}}),Br=new Re({}),Rr=new D({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert.py#L59"}}),Vr=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gr=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yr=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ce({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[dM]},$$scope:{ctx:x}}}),Zr=new D({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert.py#L338"}}),ea=new Re({}),ta=new D({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),na=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ra=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L539"}}),da=new D({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L655"}}),pa=new Re({}),ha=new D({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L642"}}),ga=new D({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L686",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jn=new We({props:{$$slots:{default:[pM]},$$scope:{ctx:x}}}),Gn=new ce({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[hM]},$$scope:{ctx:x}}}),_a=new Re({}),ba=new D({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L772"}}),Ta=new D({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L792",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yn=new We({props:{$$slots:{default:[mM]},$$scope:{ctx:x}}}),Zn=new ce({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[fM]},$$scope:{ctx:x}}}),wa=new Re({}),$a=new D({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L918"}}),Ma=new D({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L940",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new We({props:{$$slots:{default:[uM]},$$scope:{ctx:x}}}),os=new ce({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[gM]},$$scope:{ctx:x}}}),ns=new ce({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_M]},$$scope:{ctx:x}}}),za=new Re({}),ja=new D({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1033"}}),La=new D({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1046",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new We({props:{$$slots:{default:[bM]},$$scope:{ctx:x}}}),as=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[vM]},$$scope:{ctx:x}}}),is=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[kM]},$$scope:{ctx:x}}}),ls=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[yM]},$$scope:{ctx:x}}}),ds=new ce({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[TM]},$$scope:{ctx:x}}}),Oa=new Re({}),Ia=new D({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1334"}}),Wa=new D({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1345",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ps=new We({props:{$$slots:{default:[wM]},$$scope:{ctx:x}}}),hs=new ce({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$M]},$$scope:{ctx:x}}}),Ua=new Re({}),Ba=new D({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1135"}}),Ka=new D({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1155",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fs=new We({props:{$$slots:{default:[AM]},$$scope:{ctx:x}}}),us=new ce({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[FM]},$$scope:{ctx:x}}}),gs=new ce({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[xM]},$$scope:{ctx:x}}}),Va=new Re({}),Ja=new D({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1227"}}),Za=new D({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_albert.py#L1241",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new We({props:{$$slots:{default:[EM]},$$scope:{ctx:x}}}),vs=new ce({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[MM]},$$scope:{ctx:x}}}),ks=new ce({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[zM]},$$scope:{ctx:x}}}),ei=new Re({}),ti=new D({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L787"}}),Ts=new We({props:{$$slots:{default:[jM]},$$scope:{ctx:x}}}),ri=new D({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ws=new We({props:{$$slots:{default:[qM]},$$scope:{ctx:x}}}),$s=new ce({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[PM]},$$scope:{ctx:x}}}),ai=new Re({}),ii=new D({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L848"}}),Fs=new We({props:{$$slots:{default:[CM]},$$scope:{ctx:x}}}),pi=new D({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L864",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xs=new We({props:{$$slots:{default:[LM]},$$scope:{ctx:x}}}),Es=new ce({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[OM]},$$scope:{ctx:x}}}),hi=new Re({}),mi=new D({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L967"}}),zs=new We({props:{$$slots:{default:[IM]},$$scope:{ctx:x}}}),bi=new D({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L980",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),js=new We({props:{$$slots:{default:[NM]},$$scope:{ctx:x}}}),qs=new ce({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[DM]},$$scope:{ctx:x}}}),Ps=new ce({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[SM]},$$scope:{ctx:x}}}),vi=new Re({}),ki=new D({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1076"}}),Ls=new We({props:{$$slots:{default:[WM]},$$scope:{ctx:x}}}),$i=new D({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1092",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Os=new We({props:{$$slots:{default:[UM]},$$scope:{ctx:x}}}),Is=new ce({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[BM]},$$scope:{ctx:x}}}),Ns=new ce({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[RM]},$$scope:{ctx:x}}}),Ai=new Re({}),Fi=new D({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1367"}}),Ss=new We({props:{$$slots:{default:[HM]},$$scope:{ctx:x}}}),zi=new D({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1391",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ws=new We({props:{$$slots:{default:[QM]},$$scope:{ctx:x}}}),Us=new ce({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[KM]},$$scope:{ctx:x}}}),ji=new Re({}),qi=new D({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1166"}}),Rs=new We({props:{$$slots:{default:[VM]},$$scope:{ctx:x}}}),Oi=new D({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Hs=new We({props:{$$slots:{default:[JM]},$$scope:{ctx:x}}}),Qs=new ce({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[GM]},$$scope:{ctx:x}}}),Ks=new ce({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[XM]},$$scope:{ctx:x}}}),Ii=new Re({}),Ni=new D({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1262"}}),Js=new We({props:{$$slots:{default:[YM]},$$scope:{ctx:x}}}),Ui=new D({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_tf_albert.py#L1276",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new We({props:{$$slots:{default:[ZM]},$$scope:{ctx:x}}}),Xs=new ce({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[ez]},$$scope:{ctx:x}}}),Ys=new ce({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[tz]},$$scope:{ctx:x}}}),Bi=new Re({}),Ri=new D({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Yi=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new We({props:{$$slots:{default:[oz]},$$scope:{ctx:x}}}),tr=new ce({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[nz]},$$scope:{ctx:x}}}),Zi=new Re({}),el=new D({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),ll=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
`}}),nr=new We({props:{$$slots:{default:[sz]},$$scope:{ctx:x}}}),sr=new ce({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[rz]},$$scope:{ctx:x}}}),dl=new Re({}),cl=new D({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),vl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new We({props:{$$slots:{default:[az]},$$scope:{ctx:x}}}),ir=new ce({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[iz]},$$scope:{ctx:x}}}),kl=new Re({}),yl=new D({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),Ml=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dr=new We({props:{$$slots:{default:[lz]},$$scope:{ctx:x}}}),cr=new ce({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[dz]},$$scope:{ctx:x}}}),zl=new Re({}),jl=new D({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Dl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hr=new We({props:{$$slots:{default:[cz]},$$scope:{ctx:x}}}),mr=new ce({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[pz]},$$scope:{ctx:x}}}),Sl=new Re({}),Wl=new D({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Jl=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ur=new We({props:{$$slots:{default:[hz]},$$scope:{ctx:x}}}),gr=new ce({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[mz]},$$scope:{ctx:x}}}),Gl=new Re({}),Xl=new D({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),rd=new D({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),br=new We({props:{$$slots:{default:[fz]},$$scope:{ctx:x}}}),vr=new ce({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[uz]},$$scope:{ctx:x}}}),{c(){d=r("meta"),g=p(),c=r("h1"),f=r("a"),v=r("span"),y(l.$$.fragment),m=p(),M=r("span"),ye=n("ALBERT"),ge=p(),W=r("h2"),se=r("a"),te=r("span"),y(E.$$.fragment),Te=p(),Q=r("span"),we=n("Overview"),_e=p(),U=r("p"),$e=n("The ALBERT model was proposed in "),ae=r("a"),G=n("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Ae=n(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),be=p(),B=r("ul"),me=r("li"),Fe=n("Splitting the embedding matrix into two smaller matrices."),X=p(),fe=r("li"),xe=n("Using repeating layers split among groups."),oe=p(),q=r("p"),L=n("The abstract from the paper is the following:"),ve=p(),H=r("p"),ue=r("em"),Ee=n(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),J=p(),le=r("p"),Me=n("Tips:"),C=p(),re=r("ul"),K=r("li"),ze=n(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),je=p(),V=r("li"),qe=n(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),ke=p(),O=r("p"),Pe=n("This model was contributed by "),R=r("a"),Ce=n("lysandre"),ne=n(`. This model jax version was contributed by
`),P=r("a"),Le=n("kamalkraj"),I=n(". The original code can be found "),ie=r("a"),Oe=n("here"),k=n("."),z=p(),Ne=r("h2"),Z=r("a"),He=r("span"),y(De.$$.fragment),j=p(),Qe=r("span"),Ve=n("AlbertConfig"),Ke=p(),de=r("div"),y(Se.$$.fragment),S=p(),N=r("p"),Je=n("This is the configuration class to store the configuration of a "),Ue=r("a"),Y=n("AlbertModel"),Ge=n(" or a "),Be=r("a"),Ie=n("TFAlbertModel"),Xe=n(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),ee=r("a"),Ye=n("albert-xxlarge-v2"),zg=n(" architecture."),jg=p(),Oo=r("p"),qg=n("Configuration objects inherit from "),vd=r("a"),Pg=n("PretrainedConfig"),Cg=n(` and can be used to control the model outputs. Read the
documentation from `),kd=r("a"),Lg=n("PretrainedConfig"),Og=n(" for more information."),Ig=p(),y(Wn.$$.fragment),gf=p(),Io=r("h2"),Un=r("a"),Wc=r("span"),y(Br.$$.fragment),Ng=p(),Uc=r("span"),Dg=n("AlbertTokenizer"),_f=p(),Ze=r("div"),y(Rr.$$.fragment),Sg=p(),Hr=r("p"),Wg=n("Construct an ALBERT tokenizer. Based on "),Qr=r("a"),Ug=n("SentencePiece"),Bg=n("."),Rg=p(),Kr=r("p"),Hg=n("This tokenizer inherits from "),yd=r("a"),Qg=n("PreTrainedTokenizer"),Kg=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vg=p(),ko=r("div"),y(Vr.$$.fragment),Jg=p(),Bc=r("p"),Gg=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=p(),Jr=r("ul"),Td=r("li"),Yg=n("single sequence: "),Rc=r("code"),Zg=n("[CLS] X [SEP]"),e_=p(),wd=r("li"),t_=n("pair of sequences: "),Hc=r("code"),o_=n("[CLS] A [SEP] B [SEP]"),n_=p(),Bn=r("div"),y(Gr.$$.fragment),s_=p(),Xr=r("p"),r_=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qc=r("code"),a_=n("prepare_for_model"),i_=n(" method."),l_=p(),Dt=r("div"),y(Yr.$$.fragment),d_=p(),Kc=r("p"),c_=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),p_=p(),y(Rn.$$.fragment),h_=p(),No=r("p"),m_=n("If "),Vc=r("code"),f_=n("token_ids_1"),u_=n(" is "),Jc=r("code"),g_=n("None"),__=n(", this method only returns the first portion of the mask (0s)."),b_=p(),$d=r("div"),y(Zr.$$.fragment),bf=p(),Do=r("h2"),Hn=r("a"),Gc=r("span"),y(ea.$$.fragment),v_=p(),Xc=r("span"),k_=n("AlbertTokenizerFast"),vf=p(),Nt=r("div"),y(ta.$$.fragment),y_=p(),io=r("p"),T_=n("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Yc=r("em"),w_=n("tokenizers"),$_=n(` library). Based on
`),oa=r("a"),A_=n("Unigram"),F_=n(`. This
tokenizer inherits from `),Ad=r("a"),x_=n("PreTrainedTokenizerFast"),E_=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=p(),yo=r("div"),y(na.$$.fragment),z_=p(),Zc=r("p"),j_=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),q_=p(),sa=r("ul"),Fd=r("li"),P_=n("single sequence: "),ep=r("code"),C_=n("[CLS] X [SEP]"),L_=p(),xd=r("li"),O_=n("pair of sequences: "),tp=r("code"),I_=n("[CLS] A [SEP] B [SEP]"),N_=p(),St=r("div"),y(ra.$$.fragment),D_=p(),op=r("p"),S_=n("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),W_=p(),y(Qn.$$.fragment),U_=p(),np=r("p"),B_=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),kf=p(),So=r("h2"),Kn=r("a"),sp=r("span"),y(aa.$$.fragment),R_=p(),rp=r("span"),H_=n("Albert specific outputs"),yf=p(),Wo=r("div"),y(ia.$$.fragment),Q_=p(),la=r("p"),K_=n("Output type of "),Ed=r("a"),V_=n("AlbertForPreTraining"),J_=n("."),Tf=p(),Uo=r("div"),y(da.$$.fragment),G_=p(),ca=r("p"),X_=n("Output type of "),Md=r("a"),Y_=n("TFAlbertForPreTraining"),Z_=n("."),wf=p(),Bo=r("h2"),Vn=r("a"),ap=r("span"),y(pa.$$.fragment),eb=p(),ip=r("span"),tb=n("AlbertModel"),$f=p(),gt=r("div"),y(ha.$$.fragment),ob=p(),lp=r("p"),nb=n("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=p(),ma=r("p"),rb=n("This model inherits from "),zd=r("a"),ab=n("PreTrainedModel"),ib=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=p(),fa=r("p"),db=n("This model is also a PyTorch "),ua=r("a"),cb=n("torch.nn.Module"),pb=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=p(),Wt=r("div"),y(ga.$$.fragment),mb=p(),Ro=r("p"),fb=n("The "),jd=r("a"),ub=n("AlbertModel"),gb=n(" forward method, overrides the "),dp=r("code"),_b=n("__call__"),bb=n(" special method."),vb=p(),y(Jn.$$.fragment),kb=p(),y(Gn.$$.fragment),Af=p(),Ho=r("h2"),Xn=r("a"),cp=r("span"),y(_a.$$.fragment),yb=p(),pp=r("span"),Tb=n("AlbertForPreTraining"),Ff=p(),_t=r("div"),y(ba.$$.fragment),wb=p(),Qo=r("p"),$b=n("Albert Model with two heads on top as done during the pretraining: a "),hp=r("code"),Ab=n("masked language modeling"),Fb=n(` head and a
`),mp=r("code"),xb=n("sentence order prediction (classification)"),Eb=n(" head."),Mb=p(),va=r("p"),zb=n("This model inherits from "),qd=r("a"),jb=n("PreTrainedModel"),qb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=p(),ka=r("p"),Cb=n("This model is also a PyTorch "),ya=r("a"),Lb=n("torch.nn.Module"),Ob=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ib=p(),Ut=r("div"),y(Ta.$$.fragment),Nb=p(),Ko=r("p"),Db=n("The "),Pd=r("a"),Sb=n("AlbertForPreTraining"),Wb=n(" forward method, overrides the "),fp=r("code"),Ub=n("__call__"),Bb=n(" special method."),Rb=p(),y(Yn.$$.fragment),Hb=p(),y(Zn.$$.fragment),xf=p(),Vo=r("h2"),es=r("a"),up=r("span"),y(wa.$$.fragment),Qb=p(),gp=r("span"),Kb=n("AlbertForMaskedLM"),Ef=p(),bt=r("div"),y($a.$$.fragment),Vb=p(),Aa=r("p"),Jb=n("Albert Model with a "),_p=r("code"),Gb=n("language modeling"),Xb=n(" head on top."),Yb=p(),Fa=r("p"),Zb=n("This model inherits from "),Cd=r("a"),ev=n("PreTrainedModel"),tv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ov=p(),xa=r("p"),nv=n("This model is also a PyTorch "),Ea=r("a"),sv=n("torch.nn.Module"),rv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),av=p(),wt=r("div"),y(Ma.$$.fragment),iv=p(),Jo=r("p"),lv=n("The "),Ld=r("a"),dv=n("AlbertForMaskedLM"),cv=n(" forward method, overrides the "),bp=r("code"),pv=n("__call__"),hv=n(" special method."),mv=p(),y(ts.$$.fragment),fv=p(),y(os.$$.fragment),uv=p(),y(ns.$$.fragment),Mf=p(),Go=r("h2"),ss=r("a"),vp=r("span"),y(za.$$.fragment),gv=p(),kp=r("span"),_v=n("AlbertForSequenceClassification"),zf=p(),vt=r("div"),y(ja.$$.fragment),bv=p(),yp=r("p"),vv=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),kv=p(),qa=r("p"),yv=n("This model inherits from "),Od=r("a"),Tv=n("PreTrainedModel"),wv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=p(),Pa=r("p"),Av=n("This model is also a PyTorch "),Ca=r("a"),Fv=n("torch.nn.Module"),xv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ev=p(),it=r("div"),y(La.$$.fragment),Mv=p(),Xo=r("p"),zv=n("The "),Id=r("a"),jv=n("AlbertForSequenceClassification"),qv=n(" forward method, overrides the "),Tp=r("code"),Pv=n("__call__"),Cv=n(" special method."),Lv=p(),y(rs.$$.fragment),Ov=p(),y(as.$$.fragment),Iv=p(),y(is.$$.fragment),Nv=p(),y(ls.$$.fragment),Dv=p(),y(ds.$$.fragment),jf=p(),Yo=r("h2"),cs=r("a"),wp=r("span"),y(Oa.$$.fragment),Sv=p(),$p=r("span"),Wv=n("AlbertForMultipleChoice"),qf=p(),kt=r("div"),y(Ia.$$.fragment),Uv=p(),Ap=r("p"),Bv=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rv=p(),Na=r("p"),Hv=n("This model inherits from "),Nd=r("a"),Qv=n("PreTrainedModel"),Kv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vv=p(),Da=r("p"),Jv=n("This model is also a PyTorch "),Sa=r("a"),Gv=n("torch.nn.Module"),Xv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv=p(),Bt=r("div"),y(Wa.$$.fragment),Zv=p(),Zo=r("p"),ek=n("The "),Dd=r("a"),tk=n("AlbertForMultipleChoice"),ok=n(" forward method, overrides the "),Fp=r("code"),nk=n("__call__"),sk=n(" special method."),rk=p(),y(ps.$$.fragment),ak=p(),y(hs.$$.fragment),Pf=p(),en=r("h2"),ms=r("a"),xp=r("span"),y(Ua.$$.fragment),ik=p(),Ep=r("span"),lk=n("AlbertForTokenClassification"),Cf=p(),yt=r("div"),y(Ba.$$.fragment),dk=p(),Mp=r("p"),ck=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pk=p(),Ra=r("p"),hk=n("This model inherits from "),Sd=r("a"),mk=n("PreTrainedModel"),fk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uk=p(),Ha=r("p"),gk=n("This model is also a PyTorch "),Qa=r("a"),_k=n("torch.nn.Module"),bk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vk=p(),$t=r("div"),y(Ka.$$.fragment),kk=p(),tn=r("p"),yk=n("The "),Wd=r("a"),Tk=n("AlbertForTokenClassification"),wk=n(" forward method, overrides the "),zp=r("code"),$k=n("__call__"),Ak=n(" special method."),Fk=p(),y(fs.$$.fragment),xk=p(),y(us.$$.fragment),Ek=p(),y(gs.$$.fragment),Lf=p(),on=r("h2"),_s=r("a"),jp=r("span"),y(Va.$$.fragment),Mk=p(),qp=r("span"),zk=n("AlbertForQuestionAnswering"),Of=p(),Tt=r("div"),y(Ja.$$.fragment),jk=p(),nn=r("p"),qk=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pp=r("code"),Pk=n("span start logits"),Ck=n(" and "),Cp=r("code"),Lk=n("span end logits"),Ok=n(")."),Ik=p(),Ga=r("p"),Nk=n("This model inherits from "),Ud=r("a"),Dk=n("PreTrainedModel"),Sk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wk=p(),Xa=r("p"),Uk=n("This model is also a PyTorch "),Ya=r("a"),Bk=n("torch.nn.Module"),Rk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hk=p(),At=r("div"),y(Za.$$.fragment),Qk=p(),sn=r("p"),Kk=n("The "),Bd=r("a"),Vk=n("AlbertForQuestionAnswering"),Jk=n(" forward method, overrides the "),Lp=r("code"),Gk=n("__call__"),Xk=n(" special method."),Yk=p(),y(bs.$$.fragment),Zk=p(),y(vs.$$.fragment),e2=p(),y(ks.$$.fragment),If=p(),rn=r("h2"),ys=r("a"),Op=r("span"),y(ei.$$.fragment),t2=p(),Ip=r("span"),o2=n("TFAlbertModel"),Nf=p(),lt=r("div"),y(ti.$$.fragment),n2=p(),Np=r("p"),s2=n("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),r2=p(),oi=r("p"),a2=n("This model inherits from "),Rd=r("a"),i2=n("TFPreTrainedModel"),l2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d2=p(),ni=r("p"),c2=n("This model is also a "),si=r("a"),p2=n("tf.keras.Model"),h2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),m2=p(),y(Ts.$$.fragment),f2=p(),Rt=r("div"),y(ri.$$.fragment),u2=p(),an=r("p"),g2=n("The "),Hd=r("a"),_2=n("TFAlbertModel"),b2=n(" forward method, overrides the "),Dp=r("code"),v2=n("__call__"),k2=n(" special method."),y2=p(),y(ws.$$.fragment),T2=p(),y($s.$$.fragment),Df=p(),ln=r("h2"),As=r("a"),Sp=r("span"),y(ai.$$.fragment),w2=p(),Wp=r("span"),$2=n("TFAlbertForPreTraining"),Sf=p(),dt=r("div"),y(ii.$$.fragment),A2=p(),dn=r("p"),F2=n("Albert Model with two heads on top for pretraining: a "),Up=r("code"),x2=n("masked language modeling"),E2=n(" head and a "),Bp=r("code"),M2=n("sentence order prediction"),z2=n(" (classification) head."),j2=p(),li=r("p"),q2=n("This model inherits from "),Qd=r("a"),P2=n("TFPreTrainedModel"),C2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),L2=p(),di=r("p"),O2=n("This model is also a "),ci=r("a"),I2=n("tf.keras.Model"),N2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),D2=p(),y(Fs.$$.fragment),S2=p(),Ht=r("div"),y(pi.$$.fragment),W2=p(),cn=r("p"),U2=n("The "),Kd=r("a"),B2=n("TFAlbertForPreTraining"),R2=n(" forward method, overrides the "),Rp=r("code"),H2=n("__call__"),Q2=n(" special method."),K2=p(),y(xs.$$.fragment),V2=p(),y(Es.$$.fragment),Wf=p(),pn=r("h2"),Ms=r("a"),Hp=r("span"),y(hi.$$.fragment),J2=p(),Qp=r("span"),G2=n("TFAlbertForMaskedLM"),Uf=p(),ct=r("div"),y(mi.$$.fragment),X2=p(),fi=r("p"),Y2=n("Albert Model with a "),Kp=r("code"),Z2=n("language modeling"),ey=n(" head on top."),ty=p(),ui=r("p"),oy=n("This model inherits from "),Vd=r("a"),ny=n("TFPreTrainedModel"),sy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ry=p(),gi=r("p"),ay=n("This model is also a "),_i=r("a"),iy=n("tf.keras.Model"),ly=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=p(),y(zs.$$.fragment),cy=p(),Ft=r("div"),y(bi.$$.fragment),py=p(),hn=r("p"),hy=n("The "),Jd=r("a"),my=n("TFAlbertForMaskedLM"),fy=n(" forward method, overrides the "),Vp=r("code"),uy=n("__call__"),gy=n(" special method."),_y=p(),y(js.$$.fragment),by=p(),y(qs.$$.fragment),vy=p(),y(Ps.$$.fragment),Bf=p(),mn=r("h2"),Cs=r("a"),Jp=r("span"),y(vi.$$.fragment),ky=p(),Gp=r("span"),yy=n("TFAlbertForSequenceClassification"),Rf=p(),pt=r("div"),y(ki.$$.fragment),Ty=p(),Xp=r("p"),wy=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$y=p(),yi=r("p"),Ay=n("This model inherits from "),Gd=r("a"),Fy=n("TFPreTrainedModel"),xy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ey=p(),Ti=r("p"),My=n("This model is also a "),wi=r("a"),zy=n("tf.keras.Model"),jy=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qy=p(),y(Ls.$$.fragment),Py=p(),xt=r("div"),y($i.$$.fragment),Cy=p(),fn=r("p"),Ly=n("The "),Xd=r("a"),Oy=n("TFAlbertForSequenceClassification"),Iy=n(" forward method, overrides the "),Yp=r("code"),Ny=n("__call__"),Dy=n(" special method."),Sy=p(),y(Os.$$.fragment),Wy=p(),y(Is.$$.fragment),Uy=p(),y(Ns.$$.fragment),Hf=p(),un=r("h2"),Ds=r("a"),Zp=r("span"),y(Ai.$$.fragment),By=p(),eh=r("span"),Ry=n("TFAlbertForMultipleChoice"),Qf=p(),ht=r("div"),y(Fi.$$.fragment),Hy=p(),th=r("p"),Qy=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ky=p(),xi=r("p"),Vy=n("This model inherits from "),Yd=r("a"),Jy=n("TFPreTrainedModel"),Gy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xy=p(),Ei=r("p"),Yy=n("This model is also a "),Mi=r("a"),Zy=n("tf.keras.Model"),eT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tT=p(),y(Ss.$$.fragment),oT=p(),Qt=r("div"),y(zi.$$.fragment),nT=p(),gn=r("p"),sT=n("The "),Zd=r("a"),rT=n("TFAlbertForMultipleChoice"),aT=n(" forward method, overrides the "),oh=r("code"),iT=n("__call__"),lT=n(" special method."),dT=p(),y(Ws.$$.fragment),cT=p(),y(Us.$$.fragment),Kf=p(),_n=r("h2"),Bs=r("a"),nh=r("span"),y(ji.$$.fragment),pT=p(),sh=r("span"),hT=n("TFAlbertForTokenClassification"),Vf=p(),mt=r("div"),y(qi.$$.fragment),mT=p(),rh=r("p"),fT=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uT=p(),Pi=r("p"),gT=n("This model inherits from "),ec=r("a"),_T=n("TFPreTrainedModel"),bT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vT=p(),Ci=r("p"),kT=n("This model is also a "),Li=r("a"),yT=n("tf.keras.Model"),TT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wT=p(),y(Rs.$$.fragment),$T=p(),Et=r("div"),y(Oi.$$.fragment),AT=p(),bn=r("p"),FT=n("The "),tc=r("a"),xT=n("TFAlbertForTokenClassification"),ET=n(" forward method, overrides the "),ah=r("code"),MT=n("__call__"),zT=n(" special method."),jT=p(),y(Hs.$$.fragment),qT=p(),y(Qs.$$.fragment),PT=p(),y(Ks.$$.fragment),Jf=p(),vn=r("h2"),Vs=r("a"),ih=r("span"),y(Ii.$$.fragment),CT=p(),lh=r("span"),LT=n("TFAlbertForQuestionAnswering"),Gf=p(),ft=r("div"),y(Ni.$$.fragment),OT=p(),kn=r("p"),IT=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dh=r("code"),NT=n("span start logits"),DT=n(" and "),ch=r("code"),ST=n("span end logits"),WT=n(")."),UT=p(),Di=r("p"),BT=n("This model inherits from "),oc=r("a"),RT=n("TFPreTrainedModel"),HT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QT=p(),Si=r("p"),KT=n("This model is also a "),Wi=r("a"),VT=n("tf.keras.Model"),JT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),GT=p(),y(Js.$$.fragment),XT=p(),Mt=r("div"),y(Ui.$$.fragment),YT=p(),yn=r("p"),ZT=n("The "),nc=r("a"),ew=n("TFAlbertForQuestionAnswering"),tw=n(" forward method, overrides the "),ph=r("code"),ow=n("__call__"),nw=n(" special method."),sw=p(),y(Gs.$$.fragment),rw=p(),y(Xs.$$.fragment),aw=p(),y(Ys.$$.fragment),Xf=p(),Tn=r("h2"),Zs=r("a"),hh=r("span"),y(Bi.$$.fragment),iw=p(),mh=r("span"),lw=n("FlaxAlbertModel"),Yf=p(),et=r("div"),y(Ri.$$.fragment),dw=p(),fh=r("p"),cw=n("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),pw=p(),Hi=r("p"),hw=n("This model inherits from "),sc=r("a"),mw=n("FlaxPreTrainedModel"),fw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uw=p(),Qi=r("p"),gw=n("This model is also a Flax Linen "),Ki=r("a"),_w=n("flax.linen.Module"),bw=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vw=p(),uh=r("p"),kw=n("Finally, this model supports inherent JAX features such as:"),yw=p(),lo=r("ul"),gh=r("li"),Vi=r("a"),Tw=n("Just-In-Time (JIT) compilation"),ww=p(),_h=r("li"),Ji=r("a"),$w=n("Automatic Differentiation"),Aw=p(),bh=r("li"),Gi=r("a"),Fw=n("Vectorization"),xw=p(),vh=r("li"),Xi=r("a"),Ew=n("Parallelization"),Mw=p(),Kt=r("div"),y(Yi.$$.fragment),zw=p(),wn=r("p"),jw=n("The "),kh=r("code"),qw=n("FlaxAlbertPreTrainedModel"),Pw=n(" forward method, overrides the "),yh=r("code"),Cw=n("__call__"),Lw=n(" special method."),Ow=p(),y(er.$$.fragment),Iw=p(),y(tr.$$.fragment),Zf=p(),$n=r("h2"),or=r("a"),Th=r("span"),y(Zi.$$.fragment),Nw=p(),wh=r("span"),Dw=n("FlaxAlbertForPreTraining"),eu=p(),tt=r("div"),y(el.$$.fragment),Sw=p(),An=r("p"),Ww=n("Albert Model with two heads on top as done during the pretraining: a "),$h=r("code"),Uw=n("masked language modeling"),Bw=n(` head and a
`),Ah=r("code"),Rw=n("sentence order prediction (classification)"),Hw=n(" head."),Qw=p(),tl=r("p"),Kw=n("This model inherits from "),rc=r("a"),Vw=n("FlaxPreTrainedModel"),Jw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gw=p(),ol=r("p"),Xw=n("This model is also a Flax Linen "),nl=r("a"),Yw=n("flax.linen.Module"),Zw=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e$=p(),Fh=r("p"),t$=n("Finally, this model supports inherent JAX features such as:"),o$=p(),co=r("ul"),xh=r("li"),sl=r("a"),n$=n("Just-In-Time (JIT) compilation"),s$=p(),Eh=r("li"),rl=r("a"),r$=n("Automatic Differentiation"),a$=p(),Mh=r("li"),al=r("a"),i$=n("Vectorization"),l$=p(),zh=r("li"),il=r("a"),d$=n("Parallelization"),c$=p(),Vt=r("div"),y(ll.$$.fragment),p$=p(),Fn=r("p"),h$=n("The "),jh=r("code"),m$=n("FlaxAlbertPreTrainedModel"),f$=n(" forward method, overrides the "),qh=r("code"),u$=n("__call__"),g$=n(" special method."),_$=p(),y(nr.$$.fragment),b$=p(),y(sr.$$.fragment),tu=p(),xn=r("h2"),rr=r("a"),Ph=r("span"),y(dl.$$.fragment),v$=p(),Ch=r("span"),k$=n("FlaxAlbertForMaskedLM"),ou=p(),ot=r("div"),y(cl.$$.fragment),y$=p(),pl=r("p"),T$=n("Albert Model with a "),Lh=r("code"),w$=n("language modeling"),$$=n(" head on top."),A$=p(),hl=r("p"),F$=n("This model inherits from "),ac=r("a"),x$=n("FlaxPreTrainedModel"),E$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M$=p(),ml=r("p"),z$=n("This model is also a Flax Linen "),fl=r("a"),j$=n("flax.linen.Module"),q$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),P$=p(),Oh=r("p"),C$=n("Finally, this model supports inherent JAX features such as:"),L$=p(),po=r("ul"),Ih=r("li"),ul=r("a"),O$=n("Just-In-Time (JIT) compilation"),I$=p(),Nh=r("li"),gl=r("a"),N$=n("Automatic Differentiation"),D$=p(),Dh=r("li"),_l=r("a"),S$=n("Vectorization"),W$=p(),Sh=r("li"),bl=r("a"),U$=n("Parallelization"),B$=p(),Jt=r("div"),y(vl.$$.fragment),R$=p(),En=r("p"),H$=n("The "),Wh=r("code"),Q$=n("FlaxAlbertPreTrainedModel"),K$=n(" forward method, overrides the "),Uh=r("code"),V$=n("__call__"),J$=n(" special method."),G$=p(),y(ar.$$.fragment),X$=p(),y(ir.$$.fragment),nu=p(),Mn=r("h2"),lr=r("a"),Bh=r("span"),y(kl.$$.fragment),Y$=p(),Rh=r("span"),Z$=n("FlaxAlbertForSequenceClassification"),su=p(),nt=r("div"),y(yl.$$.fragment),e1=p(),Hh=r("p"),t1=n(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o1=p(),Tl=r("p"),n1=n("This model inherits from "),ic=r("a"),s1=n("FlaxPreTrainedModel"),r1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a1=p(),wl=r("p"),i1=n("This model is also a Flax Linen "),$l=r("a"),l1=n("flax.linen.Module"),d1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c1=p(),Qh=r("p"),p1=n("Finally, this model supports inherent JAX features such as:"),h1=p(),ho=r("ul"),Kh=r("li"),Al=r("a"),m1=n("Just-In-Time (JIT) compilation"),f1=p(),Vh=r("li"),Fl=r("a"),u1=n("Automatic Differentiation"),g1=p(),Jh=r("li"),xl=r("a"),_1=n("Vectorization"),b1=p(),Gh=r("li"),El=r("a"),v1=n("Parallelization"),k1=p(),Gt=r("div"),y(Ml.$$.fragment),y1=p(),zn=r("p"),T1=n("The "),Xh=r("code"),w1=n("FlaxAlbertPreTrainedModel"),$1=n(" forward method, overrides the "),Yh=r("code"),A1=n("__call__"),F1=n(" special method."),x1=p(),y(dr.$$.fragment),E1=p(),y(cr.$$.fragment),ru=p(),jn=r("h2"),pr=r("a"),Zh=r("span"),y(zl.$$.fragment),M1=p(),em=r("span"),z1=n("FlaxAlbertForMultipleChoice"),au=p(),st=r("div"),y(jl.$$.fragment),j1=p(),tm=r("p"),q1=n(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),P1=p(),ql=r("p"),C1=n("This model inherits from "),lc=r("a"),L1=n("FlaxPreTrainedModel"),O1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),I1=p(),Pl=r("p"),N1=n("This model is also a Flax Linen "),Cl=r("a"),D1=n("flax.linen.Module"),S1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),W1=p(),om=r("p"),U1=n("Finally, this model supports inherent JAX features such as:"),B1=p(),mo=r("ul"),nm=r("li"),Ll=r("a"),R1=n("Just-In-Time (JIT) compilation"),H1=p(),sm=r("li"),Ol=r("a"),Q1=n("Automatic Differentiation"),K1=p(),rm=r("li"),Il=r("a"),V1=n("Vectorization"),J1=p(),am=r("li"),Nl=r("a"),G1=n("Parallelization"),X1=p(),Xt=r("div"),y(Dl.$$.fragment),Y1=p(),qn=r("p"),Z1=n("The "),im=r("code"),e0=n("FlaxAlbertPreTrainedModel"),t0=n(" forward method, overrides the "),lm=r("code"),o0=n("__call__"),n0=n(" special method."),s0=p(),y(hr.$$.fragment),r0=p(),y(mr.$$.fragment),iu=p(),Pn=r("h2"),fr=r("a"),dm=r("span"),y(Sl.$$.fragment),a0=p(),cm=r("span"),i0=n("FlaxAlbertForTokenClassification"),lu=p(),rt=r("div"),y(Wl.$$.fragment),l0=p(),pm=r("p"),d0=n(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),c0=p(),Ul=r("p"),p0=n("This model inherits from "),dc=r("a"),h0=n("FlaxPreTrainedModel"),m0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f0=p(),Bl=r("p"),u0=n("This model is also a Flax Linen "),Rl=r("a"),g0=n("flax.linen.Module"),_0=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b0=p(),hm=r("p"),v0=n("Finally, this model supports inherent JAX features such as:"),k0=p(),fo=r("ul"),mm=r("li"),Hl=r("a"),y0=n("Just-In-Time (JIT) compilation"),T0=p(),fm=r("li"),Ql=r("a"),w0=n("Automatic Differentiation"),$0=p(),um=r("li"),Kl=r("a"),A0=n("Vectorization"),F0=p(),gm=r("li"),Vl=r("a"),x0=n("Parallelization"),E0=p(),Yt=r("div"),y(Jl.$$.fragment),M0=p(),Cn=r("p"),z0=n("The "),_m=r("code"),j0=n("FlaxAlbertPreTrainedModel"),q0=n(" forward method, overrides the "),bm=r("code"),P0=n("__call__"),C0=n(" special method."),L0=p(),y(ur.$$.fragment),O0=p(),y(gr.$$.fragment),du=p(),Ln=r("h2"),_r=r("a"),vm=r("span"),y(Gl.$$.fragment),I0=p(),km=r("span"),N0=n("FlaxAlbertForQuestionAnswering"),cu=p(),at=r("div"),y(Xl.$$.fragment),D0=p(),On=r("p"),S0=n(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ym=r("code"),W0=n("span start logits"),U0=n(" and "),Tm=r("code"),B0=n("span end logits"),R0=n(")."),H0=p(),Yl=r("p"),Q0=n("This model inherits from "),cc=r("a"),K0=n("FlaxPreTrainedModel"),V0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),J0=p(),Zl=r("p"),G0=n("This model is also a Flax Linen "),ed=r("a"),X0=n("flax.linen.Module"),Y0=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Z0=p(),wm=r("p"),eA=n("Finally, this model supports inherent JAX features such as:"),tA=p(),uo=r("ul"),$m=r("li"),td=r("a"),oA=n("Just-In-Time (JIT) compilation"),nA=p(),Am=r("li"),od=r("a"),sA=n("Automatic Differentiation"),rA=p(),Fm=r("li"),nd=r("a"),aA=n("Vectorization"),iA=p(),xm=r("li"),sd=r("a"),lA=n("Parallelization"),dA=p(),Zt=r("div"),y(rd.$$.fragment),cA=p(),In=r("p"),pA=n("The "),Em=r("code"),hA=n("FlaxAlbertPreTrainedModel"),mA=n(" forward method, overrides the "),Mm=r("code"),fA=n("__call__"),uA=n(" special method."),gA=p(),y(br.$$.fragment),_A=p(),y(vr.$$.fragment),this.h()},l(o){const b=aM('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var ad=i(c);f=a(ad,"A",{id:!0,class:!0,href:!0});var zm=i(f);v=a(zm,"SPAN",{});var jm=i(v);T(l.$$.fragment,jm),jm.forEach(t),zm.forEach(t),m=h(ad),M=a(ad,"SPAN",{});var qm=i(M);ye=s(qm,"ALBERT"),qm.forEach(t),ad.forEach(t),ge=h(o),W=a(o,"H2",{class:!0});var id=i(W);se=a(id,"A",{id:!0,class:!0,href:!0});var Pm=i(se);te=a(Pm,"SPAN",{});var Cm=i(te);T(E.$$.fragment,Cm),Cm.forEach(t),Pm.forEach(t),Te=h(id),Q=a(id,"SPAN",{});var Lm=i(Q);we=s(Lm,"Overview"),Lm.forEach(t),id.forEach(t),_e=h(o),U=a(o,"P",{});var ld=i(U);$e=s(ld,"The ALBERT model was proposed in "),ae=a(ld,"A",{href:!0,rel:!0});var Om=i(ae);G=s(Om,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Om.forEach(t),Ae=s(ld,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),ld.forEach(t),be=h(o),B=a(o,"UL",{});var dd=i(B);me=a(dd,"LI",{});var Im=i(me);Fe=s(Im,"Splitting the embedding matrix into two smaller matrices."),Im.forEach(t),X=h(dd),fe=a(dd,"LI",{});var Nm=i(fe);xe=s(Nm,"Using repeating layers split among groups."),Nm.forEach(t),dd.forEach(t),oe=h(o),q=a(o,"P",{});var Dm=i(q);L=s(Dm,"The abstract from the paper is the following:"),Dm.forEach(t),ve=h(o),H=a(o,"P",{});var Sm=i(H);ue=a(Sm,"EM",{});var Wm=i(ue);Ee=s(Wm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),Wm.forEach(t),Sm.forEach(t),J=h(o),le=a(o,"P",{});var Um=i(le);Me=s(Um,"Tips:"),Um.forEach(t),C=h(o),re=a(o,"UL",{});var cd=i(re);K=a(cd,"LI",{});var Bm=i(K);ze=s(Bm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Bm.forEach(t),je=h(cd),V=a(cd,"LI",{});var Rm=i(V);qe=s(Rm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Rm.forEach(t),cd.forEach(t),ke=h(o),O=a(o,"P",{});var go=i(O);Pe=s(go,"This model was contributed by "),R=a(go,"A",{href:!0,rel:!0});var Hm=i(R);Ce=s(Hm,"lysandre"),Hm.forEach(t),ne=s(go,`. This model jax version was contributed by
`),P=a(go,"A",{href:!0,rel:!0});var Qm=i(P);Le=s(Qm,"kamalkraj"),Qm.forEach(t),I=s(go,". The original code can be found "),ie=a(go,"A",{href:!0,rel:!0});var Km=i(ie);Oe=s(Km,"here"),Km.forEach(t),k=s(go,"."),go.forEach(t),z=h(o),Ne=a(o,"H2",{class:!0});var pd=i(Ne);Z=a(pd,"A",{id:!0,class:!0,href:!0});var Vm=i(Z);He=a(Vm,"SPAN",{});var Jm=i(He);T(De.$$.fragment,Jm),Jm.forEach(t),Vm.forEach(t),j=h(pd),Qe=a(pd,"SPAN",{});var Gm=i(Qe);Ve=s(Gm,"AlbertConfig"),Gm.forEach(t),pd.forEach(t),Ke=h(o),de=a(o,"DIV",{class:!0});var _o=i(de);T(Se.$$.fragment,_o),S=h(_o),N=a(_o,"P",{});var bo=i(N);Je=s(bo,"This is the configuration class to store the configuration of a "),Ue=a(bo,"A",{href:!0});var Xm=i(Ue);Y=s(Xm,"AlbertModel"),Xm.forEach(t),Ge=s(bo," or a "),Be=a(bo,"A",{href:!0});var Ym=i(Be);Ie=s(Ym,"TFAlbertModel"),Ym.forEach(t),Xe=s(bo,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),ee=a(bo,"A",{href:!0,rel:!0});var Zm=i(ee);Ye=s(Zm,"albert-xxlarge-v2"),Zm.forEach(t),zg=s(bo," architecture."),bo.forEach(t),jg=h(_o),Oo=a(_o,"P",{});var Nn=i(Oo);qg=s(Nn,"Configuration objects inherit from "),vd=a(Nn,"A",{href:!0});var ef=i(vd);Pg=s(ef,"PretrainedConfig"),ef.forEach(t),Cg=s(Nn,` and can be used to control the model outputs. Read the
documentation from `),kd=a(Nn,"A",{href:!0});var tf=i(kd);Lg=s(tf,"PretrainedConfig"),tf.forEach(t),Og=s(Nn," for more information."),Nn.forEach(t),Ig=h(_o),T(Wn.$$.fragment,_o),_o.forEach(t),gf=h(o),Io=a(o,"H2",{class:!0});var hd=i(Io);Un=a(hd,"A",{id:!0,class:!0,href:!0});var of=i(Un);Wc=a(of,"SPAN",{});var nf=i(Wc);T(Br.$$.fragment,nf),nf.forEach(t),of.forEach(t),Ng=h(hd),Uc=a(hd,"SPAN",{});var sf=i(Uc);Dg=s(sf,"AlbertTokenizer"),sf.forEach(t),hd.forEach(t),_f=h(o),Ze=a(o,"DIV",{class:!0});var ut=i(Ze);T(Rr.$$.fragment,ut),Sg=h(ut),Hr=a(ut,"P",{});var md=i(Hr);Wg=s(md,"Construct an ALBERT tokenizer. Based on "),Qr=a(md,"A",{href:!0,rel:!0});var rf=i(Qr);Ug=s(rf,"SentencePiece"),rf.forEach(t),Bg=s(md,"."),md.forEach(t),Rg=h(ut),Kr=a(ut,"P",{});var fd=i(Kr);Hg=s(fd,"This tokenizer inherits from "),yd=a(fd,"A",{href:!0});var af=i(yd);Qg=s(af,"PreTrainedTokenizer"),af.forEach(t),Kg=s(fd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fd.forEach(t),Vg=h(ut),ko=a(ut,"DIV",{class:!0});var Dn=i(ko);T(Vr.$$.fragment,Dn),Jg=h(Dn),Bc=a(Dn,"P",{});var lf=i(Bc);Gg=s(lf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),lf.forEach(t),Xg=h(Dn),Jr=a(Dn,"UL",{});var ud=i(Jr);Td=a(ud,"LI",{});var pc=i(Td);Yg=s(pc,"single sequence: "),Rc=a(pc,"CODE",{});var df=i(Rc);Zg=s(df,"[CLS] X [SEP]"),df.forEach(t),pc.forEach(t),e_=h(ud),wd=a(ud,"LI",{});var hc=i(wd);t_=s(hc,"pair of sequences: "),Hc=a(hc,"CODE",{});var cf=i(Hc);o_=s(cf,"[CLS] A [SEP] B [SEP]"),cf.forEach(t),hc.forEach(t),ud.forEach(t),Dn.forEach(t),n_=h(ut),Bn=a(ut,"DIV",{class:!0});var gd=i(Bn);T(Gr.$$.fragment,gd),s_=h(gd),Xr=a(gd,"P",{});var _d=i(Xr);r_=s(_d,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qc=a(_d,"CODE",{});var pf=i(Qc);a_=s(pf,"prepare_for_model"),pf.forEach(t),i_=s(_d," method."),_d.forEach(t),gd.forEach(t),l_=h(ut),Dt=a(ut,"DIV",{class:!0});var vo=i(Dt);T(Yr.$$.fragment,vo),d_=h(vo),Kc=a(vo,"P",{});var hf=i(Kc);c_=s(hf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),hf.forEach(t),p_=h(vo),T(Rn.$$.fragment,vo),h_=h(vo),No=a(vo,"P",{});var Sn=i(No);m_=s(Sn,"If "),Vc=a(Sn,"CODE",{});var mf=i(Vc);f_=s(mf,"token_ids_1"),mf.forEach(t),u_=s(Sn," is "),Jc=a(Sn,"CODE",{});var ff=i(Jc);g_=s(ff,"None"),ff.forEach(t),__=s(Sn,", this method only returns the first portion of the mask (0s)."),Sn.forEach(t),vo.forEach(t),b_=h(ut),$d=a(ut,"DIV",{class:!0});var uf=i($d);T(Zr.$$.fragment,uf),uf.forEach(t),ut.forEach(t),bf=h(o),Do=a(o,"H2",{class:!0});var bd=i(Do);Hn=a(bd,"A",{id:!0,class:!0,href:!0});var kA=i(Hn);Gc=a(kA,"SPAN",{});var yA=i(Gc);T(ea.$$.fragment,yA),yA.forEach(t),kA.forEach(t),v_=h(bd),Xc=a(bd,"SPAN",{});var TA=i(Xc);k_=s(TA,"AlbertTokenizerFast"),TA.forEach(t),bd.forEach(t),vf=h(o),Nt=a(o,"DIV",{class:!0});var kr=i(Nt);T(ta.$$.fragment,kr),y_=h(kr),io=a(kr,"P",{});var yr=i(io);T_=s(yr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Yc=a(yr,"EM",{});var wA=i(Yc);w_=s(wA,"tokenizers"),wA.forEach(t),$_=s(yr,` library). Based on
`),oa=a(yr,"A",{href:!0,rel:!0});var $A=i(oa);A_=s($A,"Unigram"),$A.forEach(t),F_=s(yr,`. This
tokenizer inherits from `),Ad=a(yr,"A",{href:!0});var AA=i(Ad);x_=s(AA,"PreTrainedTokenizerFast"),AA.forEach(t),E_=s(yr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),yr.forEach(t),M_=h(kr),yo=a(kr,"DIV",{class:!0});var mc=i(yo);T(na.$$.fragment,mc),z_=h(mc),Zc=a(mc,"P",{});var FA=i(Zc);j_=s(FA,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),FA.forEach(t),q_=h(mc),sa=a(mc,"UL",{});var hu=i(sa);Fd=a(hu,"LI",{});var bA=i(Fd);P_=s(bA,"single sequence: "),ep=a(bA,"CODE",{});var xA=i(ep);C_=s(xA,"[CLS] X [SEP]"),xA.forEach(t),bA.forEach(t),L_=h(hu),xd=a(hu,"LI",{});var vA=i(xd);O_=s(vA,"pair of sequences: "),tp=a(vA,"CODE",{});var EA=i(tp);I_=s(EA,"[CLS] A [SEP] B [SEP]"),EA.forEach(t),vA.forEach(t),hu.forEach(t),mc.forEach(t),N_=h(kr),St=a(kr,"DIV",{class:!0});var Tr=i(St);T(ra.$$.fragment,Tr),D_=h(Tr),op=a(Tr,"P",{});var MA=i(op);S_=s(MA,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),MA.forEach(t),W_=h(Tr),T(Qn.$$.fragment,Tr),U_=h(Tr),np=a(Tr,"P",{});var zA=i(np);B_=s(zA,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),zA.forEach(t),Tr.forEach(t),kr.forEach(t),kf=h(o),So=a(o,"H2",{class:!0});var mu=i(So);Kn=a(mu,"A",{id:!0,class:!0,href:!0});var jA=i(Kn);sp=a(jA,"SPAN",{});var qA=i(sp);T(aa.$$.fragment,qA),qA.forEach(t),jA.forEach(t),R_=h(mu),rp=a(mu,"SPAN",{});var PA=i(rp);H_=s(PA,"Albert specific outputs"),PA.forEach(t),mu.forEach(t),yf=h(o),Wo=a(o,"DIV",{class:!0});var fu=i(Wo);T(ia.$$.fragment,fu),Q_=h(fu),la=a(fu,"P",{});var uu=i(la);K_=s(uu,"Output type of "),Ed=a(uu,"A",{href:!0});var CA=i(Ed);V_=s(CA,"AlbertForPreTraining"),CA.forEach(t),J_=s(uu,"."),uu.forEach(t),fu.forEach(t),Tf=h(o),Uo=a(o,"DIV",{class:!0});var gu=i(Uo);T(da.$$.fragment,gu),G_=h(gu),ca=a(gu,"P",{});var _u=i(ca);X_=s(_u,"Output type of "),Md=a(_u,"A",{href:!0});var LA=i(Md);Y_=s(LA,"TFAlbertForPreTraining"),LA.forEach(t),Z_=s(_u,"."),_u.forEach(t),gu.forEach(t),wf=h(o),Bo=a(o,"H2",{class:!0});var bu=i(Bo);Vn=a(bu,"A",{id:!0,class:!0,href:!0});var OA=i(Vn);ap=a(OA,"SPAN",{});var IA=i(ap);T(pa.$$.fragment,IA),IA.forEach(t),OA.forEach(t),eb=h(bu),ip=a(bu,"SPAN",{});var NA=i(ip);tb=s(NA,"AlbertModel"),NA.forEach(t),bu.forEach(t),$f=h(o),gt=a(o,"DIV",{class:!0});var To=i(gt);T(ha.$$.fragment,To),ob=h(To),lp=a(To,"P",{});var DA=i(lp);nb=s(DA,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),DA.forEach(t),sb=h(To),ma=a(To,"P",{});var vu=i(ma);rb=s(vu,"This model inherits from "),zd=a(vu,"A",{href:!0});var SA=i(zd);ab=s(SA,"PreTrainedModel"),SA.forEach(t),ib=s(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),lb=h(To),fa=a(To,"P",{});var ku=i(fa);db=s(ku,"This model is also a PyTorch "),ua=a(ku,"A",{href:!0,rel:!0});var WA=i(ua);cb=s(WA,"torch.nn.Module"),WA.forEach(t),pb=s(ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ku.forEach(t),hb=h(To),Wt=a(To,"DIV",{class:!0});var wr=i(Wt);T(ga.$$.fragment,wr),mb=h(wr),Ro=a(wr,"P",{});var fc=i(Ro);fb=s(fc,"The "),jd=a(fc,"A",{href:!0});var UA=i(jd);ub=s(UA,"AlbertModel"),UA.forEach(t),gb=s(fc," forward method, overrides the "),dp=a(fc,"CODE",{});var BA=i(dp);_b=s(BA,"__call__"),BA.forEach(t),bb=s(fc," special method."),fc.forEach(t),vb=h(wr),T(Jn.$$.fragment,wr),kb=h(wr),T(Gn.$$.fragment,wr),wr.forEach(t),To.forEach(t),Af=h(o),Ho=a(o,"H2",{class:!0});var yu=i(Ho);Xn=a(yu,"A",{id:!0,class:!0,href:!0});var RA=i(Xn);cp=a(RA,"SPAN",{});var HA=i(cp);T(_a.$$.fragment,HA),HA.forEach(t),RA.forEach(t),yb=h(yu),pp=a(yu,"SPAN",{});var QA=i(pp);Tb=s(QA,"AlbertForPreTraining"),QA.forEach(t),yu.forEach(t),Ff=h(o),_t=a(o,"DIV",{class:!0});var wo=i(_t);T(ba.$$.fragment,wo),wb=h(wo),Qo=a(wo,"P",{});var uc=i(Qo);$b=s(uc,"Albert Model with two heads on top as done during the pretraining: a "),hp=a(uc,"CODE",{});var KA=i(hp);Ab=s(KA,"masked language modeling"),KA.forEach(t),Fb=s(uc,` head and a
`),mp=a(uc,"CODE",{});var VA=i(mp);xb=s(VA,"sentence order prediction (classification)"),VA.forEach(t),Eb=s(uc," head."),uc.forEach(t),Mb=h(wo),va=a(wo,"P",{});var Tu=i(va);zb=s(Tu,"This model inherits from "),qd=a(Tu,"A",{href:!0});var JA=i(qd);jb=s(JA,"PreTrainedModel"),JA.forEach(t),qb=s(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),Pb=h(wo),ka=a(wo,"P",{});var wu=i(ka);Cb=s(wu,"This model is also a PyTorch "),ya=a(wu,"A",{href:!0,rel:!0});var GA=i(ya);Lb=s(GA,"torch.nn.Module"),GA.forEach(t),Ob=s(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(t),Ib=h(wo),Ut=a(wo,"DIV",{class:!0});var $r=i(Ut);T(Ta.$$.fragment,$r),Nb=h($r),Ko=a($r,"P",{});var gc=i(Ko);Db=s(gc,"The "),Pd=a(gc,"A",{href:!0});var XA=i(Pd);Sb=s(XA,"AlbertForPreTraining"),XA.forEach(t),Wb=s(gc," forward method, overrides the "),fp=a(gc,"CODE",{});var YA=i(fp);Ub=s(YA,"__call__"),YA.forEach(t),Bb=s(gc," special method."),gc.forEach(t),Rb=h($r),T(Yn.$$.fragment,$r),Hb=h($r),T(Zn.$$.fragment,$r),$r.forEach(t),wo.forEach(t),xf=h(o),Vo=a(o,"H2",{class:!0});var $u=i(Vo);es=a($u,"A",{id:!0,class:!0,href:!0});var ZA=i(es);up=a(ZA,"SPAN",{});var eF=i(up);T(wa.$$.fragment,eF),eF.forEach(t),ZA.forEach(t),Qb=h($u),gp=a($u,"SPAN",{});var tF=i(gp);Kb=s(tF,"AlbertForMaskedLM"),tF.forEach(t),$u.forEach(t),Ef=h(o),bt=a(o,"DIV",{class:!0});var $o=i(bt);T($a.$$.fragment,$o),Vb=h($o),Aa=a($o,"P",{});var Au=i(Aa);Jb=s(Au,"Albert Model with a "),_p=a(Au,"CODE",{});var oF=i(_p);Gb=s(oF,"language modeling"),oF.forEach(t),Xb=s(Au," head on top."),Au.forEach(t),Yb=h($o),Fa=a($o,"P",{});var Fu=i(Fa);Zb=s(Fu,"This model inherits from "),Cd=a(Fu,"A",{href:!0});var nF=i(Cd);ev=s(nF,"PreTrainedModel"),nF.forEach(t),tv=s(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),ov=h($o),xa=a($o,"P",{});var xu=i(xa);nv=s(xu,"This model is also a PyTorch "),Ea=a(xu,"A",{href:!0,rel:!0});var sF=i(Ea);sv=s(sF,"torch.nn.Module"),sF.forEach(t),rv=s(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),av=h($o),wt=a($o,"DIV",{class:!0});var Ao=i(wt);T(Ma.$$.fragment,Ao),iv=h(Ao),Jo=a(Ao,"P",{});var _c=i(Jo);lv=s(_c,"The "),Ld=a(_c,"A",{href:!0});var rF=i(Ld);dv=s(rF,"AlbertForMaskedLM"),rF.forEach(t),cv=s(_c," forward method, overrides the "),bp=a(_c,"CODE",{});var aF=i(bp);pv=s(aF,"__call__"),aF.forEach(t),hv=s(_c," special method."),_c.forEach(t),mv=h(Ao),T(ts.$$.fragment,Ao),fv=h(Ao),T(os.$$.fragment,Ao),uv=h(Ao),T(ns.$$.fragment,Ao),Ao.forEach(t),$o.forEach(t),Mf=h(o),Go=a(o,"H2",{class:!0});var Eu=i(Go);ss=a(Eu,"A",{id:!0,class:!0,href:!0});var iF=i(ss);vp=a(iF,"SPAN",{});var lF=i(vp);T(za.$$.fragment,lF),lF.forEach(t),iF.forEach(t),gv=h(Eu),kp=a(Eu,"SPAN",{});var dF=i(kp);_v=s(dF,"AlbertForSequenceClassification"),dF.forEach(t),Eu.forEach(t),zf=h(o),vt=a(o,"DIV",{class:!0});var Fo=i(vt);T(ja.$$.fragment,Fo),bv=h(Fo),yp=a(Fo,"P",{});var cF=i(yp);vv=s(cF,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),cF.forEach(t),kv=h(Fo),qa=a(Fo,"P",{});var Mu=i(qa);yv=s(Mu,"This model inherits from "),Od=a(Mu,"A",{href:!0});var pF=i(Od);Tv=s(pF,"PreTrainedModel"),pF.forEach(t),wv=s(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),$v=h(Fo),Pa=a(Fo,"P",{});var zu=i(Pa);Av=s(zu,"This model is also a PyTorch "),Ca=a(zu,"A",{href:!0,rel:!0});var hF=i(Ca);Fv=s(hF,"torch.nn.Module"),hF.forEach(t),xv=s(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Ev=h(Fo),it=a(Fo,"DIV",{class:!0});var zt=i(it);T(La.$$.fragment,zt),Mv=h(zt),Xo=a(zt,"P",{});var bc=i(Xo);zv=s(bc,"The "),Id=a(bc,"A",{href:!0});var mF=i(Id);jv=s(mF,"AlbertForSequenceClassification"),mF.forEach(t),qv=s(bc," forward method, overrides the "),Tp=a(bc,"CODE",{});var fF=i(Tp);Pv=s(fF,"__call__"),fF.forEach(t),Cv=s(bc," special method."),bc.forEach(t),Lv=h(zt),T(rs.$$.fragment,zt),Ov=h(zt),T(as.$$.fragment,zt),Iv=h(zt),T(is.$$.fragment,zt),Nv=h(zt),T(ls.$$.fragment,zt),Dv=h(zt),T(ds.$$.fragment,zt),zt.forEach(t),Fo.forEach(t),jf=h(o),Yo=a(o,"H2",{class:!0});var ju=i(Yo);cs=a(ju,"A",{id:!0,class:!0,href:!0});var uF=i(cs);wp=a(uF,"SPAN",{});var gF=i(wp);T(Oa.$$.fragment,gF),gF.forEach(t),uF.forEach(t),Sv=h(ju),$p=a(ju,"SPAN",{});var _F=i($p);Wv=s(_F,"AlbertForMultipleChoice"),_F.forEach(t),ju.forEach(t),qf=h(o),kt=a(o,"DIV",{class:!0});var xo=i(kt);T(Ia.$$.fragment,xo),Uv=h(xo),Ap=a(xo,"P",{});var bF=i(Ap);Bv=s(bF,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bF.forEach(t),Rv=h(xo),Na=a(xo,"P",{});var qu=i(Na);Hv=s(qu,"This model inherits from "),Nd=a(qu,"A",{href:!0});var vF=i(Nd);Qv=s(vF,"PreTrainedModel"),vF.forEach(t),Kv=s(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),Vv=h(xo),Da=a(xo,"P",{});var Pu=i(Da);Jv=s(Pu,"This model is also a PyTorch "),Sa=a(Pu,"A",{href:!0,rel:!0});var kF=i(Sa);Gv=s(kF,"torch.nn.Module"),kF.forEach(t),Xv=s(Pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu.forEach(t),Yv=h(xo),Bt=a(xo,"DIV",{class:!0});var Ar=i(Bt);T(Wa.$$.fragment,Ar),Zv=h(Ar),Zo=a(Ar,"P",{});var vc=i(Zo);ek=s(vc,"The "),Dd=a(vc,"A",{href:!0});var yF=i(Dd);tk=s(yF,"AlbertForMultipleChoice"),yF.forEach(t),ok=s(vc," forward method, overrides the "),Fp=a(vc,"CODE",{});var TF=i(Fp);nk=s(TF,"__call__"),TF.forEach(t),sk=s(vc," special method."),vc.forEach(t),rk=h(Ar),T(ps.$$.fragment,Ar),ak=h(Ar),T(hs.$$.fragment,Ar),Ar.forEach(t),xo.forEach(t),Pf=h(o),en=a(o,"H2",{class:!0});var Cu=i(en);ms=a(Cu,"A",{id:!0,class:!0,href:!0});var wF=i(ms);xp=a(wF,"SPAN",{});var $F=i(xp);T(Ua.$$.fragment,$F),$F.forEach(t),wF.forEach(t),ik=h(Cu),Ep=a(Cu,"SPAN",{});var AF=i(Ep);lk=s(AF,"AlbertForTokenClassification"),AF.forEach(t),Cu.forEach(t),Cf=h(o),yt=a(o,"DIV",{class:!0});var Eo=i(yt);T(Ba.$$.fragment,Eo),dk=h(Eo),Mp=a(Eo,"P",{});var FF=i(Mp);ck=s(FF,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),FF.forEach(t),pk=h(Eo),Ra=a(Eo,"P",{});var Lu=i(Ra);hk=s(Lu,"This model inherits from "),Sd=a(Lu,"A",{href:!0});var xF=i(Sd);mk=s(xF,"PreTrainedModel"),xF.forEach(t),fk=s(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),uk=h(Eo),Ha=a(Eo,"P",{});var Ou=i(Ha);gk=s(Ou,"This model is also a PyTorch "),Qa=a(Ou,"A",{href:!0,rel:!0});var EF=i(Qa);_k=s(EF,"torch.nn.Module"),EF.forEach(t),bk=s(Ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ou.forEach(t),vk=h(Eo),$t=a(Eo,"DIV",{class:!0});var Mo=i($t);T(Ka.$$.fragment,Mo),kk=h(Mo),tn=a(Mo,"P",{});var kc=i(tn);yk=s(kc,"The "),Wd=a(kc,"A",{href:!0});var MF=i(Wd);Tk=s(MF,"AlbertForTokenClassification"),MF.forEach(t),wk=s(kc," forward method, overrides the "),zp=a(kc,"CODE",{});var zF=i(zp);$k=s(zF,"__call__"),zF.forEach(t),Ak=s(kc," special method."),kc.forEach(t),Fk=h(Mo),T(fs.$$.fragment,Mo),xk=h(Mo),T(us.$$.fragment,Mo),Ek=h(Mo),T(gs.$$.fragment,Mo),Mo.forEach(t),Eo.forEach(t),Lf=h(o),on=a(o,"H2",{class:!0});var Iu=i(on);_s=a(Iu,"A",{id:!0,class:!0,href:!0});var jF=i(_s);jp=a(jF,"SPAN",{});var qF=i(jp);T(Va.$$.fragment,qF),qF.forEach(t),jF.forEach(t),Mk=h(Iu),qp=a(Iu,"SPAN",{});var PF=i(qp);zk=s(PF,"AlbertForQuestionAnswering"),PF.forEach(t),Iu.forEach(t),Of=h(o),Tt=a(o,"DIV",{class:!0});var zo=i(Tt);T(Ja.$$.fragment,zo),jk=h(zo),nn=a(zo,"P",{});var yc=i(nn);qk=s(yc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pp=a(yc,"CODE",{});var CF=i(Pp);Pk=s(CF,"span start logits"),CF.forEach(t),Ck=s(yc," and "),Cp=a(yc,"CODE",{});var LF=i(Cp);Lk=s(LF,"span end logits"),LF.forEach(t),Ok=s(yc,")."),yc.forEach(t),Ik=h(zo),Ga=a(zo,"P",{});var Nu=i(Ga);Nk=s(Nu,"This model inherits from "),Ud=a(Nu,"A",{href:!0});var OF=i(Ud);Dk=s(OF,"PreTrainedModel"),OF.forEach(t),Sk=s(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu.forEach(t),Wk=h(zo),Xa=a(zo,"P",{});var Du=i(Xa);Uk=s(Du,"This model is also a PyTorch "),Ya=a(Du,"A",{href:!0,rel:!0});var IF=i(Ya);Bk=s(IF,"torch.nn.Module"),IF.forEach(t),Rk=s(Du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Du.forEach(t),Hk=h(zo),At=a(zo,"DIV",{class:!0});var jo=i(At);T(Za.$$.fragment,jo),Qk=h(jo),sn=a(jo,"P",{});var Tc=i(sn);Kk=s(Tc,"The "),Bd=a(Tc,"A",{href:!0});var NF=i(Bd);Vk=s(NF,"AlbertForQuestionAnswering"),NF.forEach(t),Jk=s(Tc," forward method, overrides the "),Lp=a(Tc,"CODE",{});var DF=i(Lp);Gk=s(DF,"__call__"),DF.forEach(t),Xk=s(Tc," special method."),Tc.forEach(t),Yk=h(jo),T(bs.$$.fragment,jo),Zk=h(jo),T(vs.$$.fragment,jo),e2=h(jo),T(ks.$$.fragment,jo),jo.forEach(t),zo.forEach(t),If=h(o),rn=a(o,"H2",{class:!0});var Su=i(rn);ys=a(Su,"A",{id:!0,class:!0,href:!0});var SF=i(ys);Op=a(SF,"SPAN",{});var WF=i(Op);T(ei.$$.fragment,WF),WF.forEach(t),SF.forEach(t),t2=h(Su),Ip=a(Su,"SPAN",{});var UF=i(Ip);o2=s(UF,"TFAlbertModel"),UF.forEach(t),Su.forEach(t),Nf=h(o),lt=a(o,"DIV",{class:!0});var eo=i(lt);T(ti.$$.fragment,eo),n2=h(eo),Np=a(eo,"P",{});var BF=i(Np);s2=s(BF,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),BF.forEach(t),r2=h(eo),oi=a(eo,"P",{});var Wu=i(oi);a2=s(Wu,"This model inherits from "),Rd=a(Wu,"A",{href:!0});var RF=i(Rd);i2=s(RF,"TFPreTrainedModel"),RF.forEach(t),l2=s(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),d2=h(eo),ni=a(eo,"P",{});var Uu=i(ni);c2=s(Uu,"This model is also a "),si=a(Uu,"A",{href:!0,rel:!0});var HF=i(si);p2=s(HF,"tf.keras.Model"),HF.forEach(t),h2=s(Uu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uu.forEach(t),m2=h(eo),T(Ts.$$.fragment,eo),f2=h(eo),Rt=a(eo,"DIV",{class:!0});var Fr=i(Rt);T(ri.$$.fragment,Fr),u2=h(Fr),an=a(Fr,"P",{});var wc=i(an);g2=s(wc,"The "),Hd=a(wc,"A",{href:!0});var QF=i(Hd);_2=s(QF,"TFAlbertModel"),QF.forEach(t),b2=s(wc," forward method, overrides the "),Dp=a(wc,"CODE",{});var KF=i(Dp);v2=s(KF,"__call__"),KF.forEach(t),k2=s(wc," special method."),wc.forEach(t),y2=h(Fr),T(ws.$$.fragment,Fr),T2=h(Fr),T($s.$$.fragment,Fr),Fr.forEach(t),eo.forEach(t),Df=h(o),ln=a(o,"H2",{class:!0});var Bu=i(ln);As=a(Bu,"A",{id:!0,class:!0,href:!0});var VF=i(As);Sp=a(VF,"SPAN",{});var JF=i(Sp);T(ai.$$.fragment,JF),JF.forEach(t),VF.forEach(t),w2=h(Bu),Wp=a(Bu,"SPAN",{});var GF=i(Wp);$2=s(GF,"TFAlbertForPreTraining"),GF.forEach(t),Bu.forEach(t),Sf=h(o),dt=a(o,"DIV",{class:!0});var to=i(dt);T(ii.$$.fragment,to),A2=h(to),dn=a(to,"P",{});var $c=i(dn);F2=s($c,"Albert Model with two heads on top for pretraining: a "),Up=a($c,"CODE",{});var XF=i(Up);x2=s(XF,"masked language modeling"),XF.forEach(t),E2=s($c," head and a "),Bp=a($c,"CODE",{});var YF=i(Bp);M2=s(YF,"sentence order prediction"),YF.forEach(t),z2=s($c," (classification) head."),$c.forEach(t),j2=h(to),li=a(to,"P",{});var Ru=i(li);q2=s(Ru,"This model inherits from "),Qd=a(Ru,"A",{href:!0});var ZF=i(Qd);P2=s(ZF,"TFPreTrainedModel"),ZF.forEach(t),C2=s(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),L2=h(to),di=a(to,"P",{});var Hu=i(di);O2=s(Hu,"This model is also a "),ci=a(Hu,"A",{href:!0,rel:!0});var ex=i(ci);I2=s(ex,"tf.keras.Model"),ex.forEach(t),N2=s(Hu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hu.forEach(t),D2=h(to),T(Fs.$$.fragment,to),S2=h(to),Ht=a(to,"DIV",{class:!0});var xr=i(Ht);T(pi.$$.fragment,xr),W2=h(xr),cn=a(xr,"P",{});var Ac=i(cn);U2=s(Ac,"The "),Kd=a(Ac,"A",{href:!0});var tx=i(Kd);B2=s(tx,"TFAlbertForPreTraining"),tx.forEach(t),R2=s(Ac," forward method, overrides the "),Rp=a(Ac,"CODE",{});var ox=i(Rp);H2=s(ox,"__call__"),ox.forEach(t),Q2=s(Ac," special method."),Ac.forEach(t),K2=h(xr),T(xs.$$.fragment,xr),V2=h(xr),T(Es.$$.fragment,xr),xr.forEach(t),to.forEach(t),Wf=h(o),pn=a(o,"H2",{class:!0});var Qu=i(pn);Ms=a(Qu,"A",{id:!0,class:!0,href:!0});var nx=i(Ms);Hp=a(nx,"SPAN",{});var sx=i(Hp);T(hi.$$.fragment,sx),sx.forEach(t),nx.forEach(t),J2=h(Qu),Qp=a(Qu,"SPAN",{});var rx=i(Qp);G2=s(rx,"TFAlbertForMaskedLM"),rx.forEach(t),Qu.forEach(t),Uf=h(o),ct=a(o,"DIV",{class:!0});var oo=i(ct);T(mi.$$.fragment,oo),X2=h(oo),fi=a(oo,"P",{});var Ku=i(fi);Y2=s(Ku,"Albert Model with a "),Kp=a(Ku,"CODE",{});var ax=i(Kp);Z2=s(ax,"language modeling"),ax.forEach(t),ey=s(Ku," head on top."),Ku.forEach(t),ty=h(oo),ui=a(oo,"P",{});var Vu=i(ui);oy=s(Vu,"This model inherits from "),Vd=a(Vu,"A",{href:!0});var ix=i(Vd);ny=s(ix,"TFPreTrainedModel"),ix.forEach(t),sy=s(Vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu.forEach(t),ry=h(oo),gi=a(oo,"P",{});var Ju=i(gi);ay=s(Ju,"This model is also a "),_i=a(Ju,"A",{href:!0,rel:!0});var lx=i(_i);iy=s(lx,"tf.keras.Model"),lx.forEach(t),ly=s(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),dy=h(oo),T(zs.$$.fragment,oo),cy=h(oo),Ft=a(oo,"DIV",{class:!0});var qo=i(Ft);T(bi.$$.fragment,qo),py=h(qo),hn=a(qo,"P",{});var Fc=i(hn);hy=s(Fc,"The "),Jd=a(Fc,"A",{href:!0});var dx=i(Jd);my=s(dx,"TFAlbertForMaskedLM"),dx.forEach(t),fy=s(Fc," forward method, overrides the "),Vp=a(Fc,"CODE",{});var cx=i(Vp);uy=s(cx,"__call__"),cx.forEach(t),gy=s(Fc," special method."),Fc.forEach(t),_y=h(qo),T(js.$$.fragment,qo),by=h(qo),T(qs.$$.fragment,qo),vy=h(qo),T(Ps.$$.fragment,qo),qo.forEach(t),oo.forEach(t),Bf=h(o),mn=a(o,"H2",{class:!0});var Gu=i(mn);Cs=a(Gu,"A",{id:!0,class:!0,href:!0});var px=i(Cs);Jp=a(px,"SPAN",{});var hx=i(Jp);T(vi.$$.fragment,hx),hx.forEach(t),px.forEach(t),ky=h(Gu),Gp=a(Gu,"SPAN",{});var mx=i(Gp);yy=s(mx,"TFAlbertForSequenceClassification"),mx.forEach(t),Gu.forEach(t),Rf=h(o),pt=a(o,"DIV",{class:!0});var no=i(pt);T(ki.$$.fragment,no),Ty=h(no),Xp=a(no,"P",{});var fx=i(Xp);wy=s(fx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fx.forEach(t),$y=h(no),yi=a(no,"P",{});var Xu=i(yi);Ay=s(Xu,"This model inherits from "),Gd=a(Xu,"A",{href:!0});var ux=i(Gd);Fy=s(ux,"TFPreTrainedModel"),ux.forEach(t),xy=s(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Ey=h(no),Ti=a(no,"P",{});var Yu=i(Ti);My=s(Yu,"This model is also a "),wi=a(Yu,"A",{href:!0,rel:!0});var gx=i(wi);zy=s(gx,"tf.keras.Model"),gx.forEach(t),jy=s(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),qy=h(no),T(Ls.$$.fragment,no),Py=h(no),xt=a(no,"DIV",{class:!0});var Po=i(xt);T($i.$$.fragment,Po),Cy=h(Po),fn=a(Po,"P",{});var xc=i(fn);Ly=s(xc,"The "),Xd=a(xc,"A",{href:!0});var _x=i(Xd);Oy=s(_x,"TFAlbertForSequenceClassification"),_x.forEach(t),Iy=s(xc," forward method, overrides the "),Yp=a(xc,"CODE",{});var bx=i(Yp);Ny=s(bx,"__call__"),bx.forEach(t),Dy=s(xc," special method."),xc.forEach(t),Sy=h(Po),T(Os.$$.fragment,Po),Wy=h(Po),T(Is.$$.fragment,Po),Uy=h(Po),T(Ns.$$.fragment,Po),Po.forEach(t),no.forEach(t),Hf=h(o),un=a(o,"H2",{class:!0});var Zu=i(un);Ds=a(Zu,"A",{id:!0,class:!0,href:!0});var vx=i(Ds);Zp=a(vx,"SPAN",{});var kx=i(Zp);T(Ai.$$.fragment,kx),kx.forEach(t),vx.forEach(t),By=h(Zu),eh=a(Zu,"SPAN",{});var yx=i(eh);Ry=s(yx,"TFAlbertForMultipleChoice"),yx.forEach(t),Zu.forEach(t),Qf=h(o),ht=a(o,"DIV",{class:!0});var so=i(ht);T(Fi.$$.fragment,so),Hy=h(so),th=a(so,"P",{});var Tx=i(th);Qy=s(Tx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Tx.forEach(t),Ky=h(so),xi=a(so,"P",{});var eg=i(xi);Vy=s(eg,"This model inherits from "),Yd=a(eg,"A",{href:!0});var wx=i(Yd);Jy=s(wx,"TFPreTrainedModel"),wx.forEach(t),Gy=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg.forEach(t),Xy=h(so),Ei=a(so,"P",{});var tg=i(Ei);Yy=s(tg,"This model is also a "),Mi=a(tg,"A",{href:!0,rel:!0});var $x=i(Mi);Zy=s($x,"tf.keras.Model"),$x.forEach(t),eT=s(tg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg.forEach(t),tT=h(so),T(Ss.$$.fragment,so),oT=h(so),Qt=a(so,"DIV",{class:!0});var Er=i(Qt);T(zi.$$.fragment,Er),nT=h(Er),gn=a(Er,"P",{});var Ec=i(gn);sT=s(Ec,"The "),Zd=a(Ec,"A",{href:!0});var Ax=i(Zd);rT=s(Ax,"TFAlbertForMultipleChoice"),Ax.forEach(t),aT=s(Ec," forward method, overrides the "),oh=a(Ec,"CODE",{});var Fx=i(oh);iT=s(Fx,"__call__"),Fx.forEach(t),lT=s(Ec," special method."),Ec.forEach(t),dT=h(Er),T(Ws.$$.fragment,Er),cT=h(Er),T(Us.$$.fragment,Er),Er.forEach(t),so.forEach(t),Kf=h(o),_n=a(o,"H2",{class:!0});var og=i(_n);Bs=a(og,"A",{id:!0,class:!0,href:!0});var xx=i(Bs);nh=a(xx,"SPAN",{});var Ex=i(nh);T(ji.$$.fragment,Ex),Ex.forEach(t),xx.forEach(t),pT=h(og),sh=a(og,"SPAN",{});var Mx=i(sh);hT=s(Mx,"TFAlbertForTokenClassification"),Mx.forEach(t),og.forEach(t),Vf=h(o),mt=a(o,"DIV",{class:!0});var ro=i(mt);T(qi.$$.fragment,ro),mT=h(ro),rh=a(ro,"P",{});var zx=i(rh);fT=s(zx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zx.forEach(t),uT=h(ro),Pi=a(ro,"P",{});var ng=i(Pi);gT=s(ng,"This model inherits from "),ec=a(ng,"A",{href:!0});var jx=i(ec);_T=s(jx,"TFPreTrainedModel"),jx.forEach(t),bT=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng.forEach(t),vT=h(ro),Ci=a(ro,"P",{});var sg=i(Ci);kT=s(sg,"This model is also a "),Li=a(sg,"A",{href:!0,rel:!0});var qx=i(Li);yT=s(qx,"tf.keras.Model"),qx.forEach(t),TT=s(sg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sg.forEach(t),wT=h(ro),T(Rs.$$.fragment,ro),$T=h(ro),Et=a(ro,"DIV",{class:!0});var Co=i(Et);T(Oi.$$.fragment,Co),AT=h(Co),bn=a(Co,"P",{});var Mc=i(bn);FT=s(Mc,"The "),tc=a(Mc,"A",{href:!0});var Px=i(tc);xT=s(Px,"TFAlbertForTokenClassification"),Px.forEach(t),ET=s(Mc," forward method, overrides the "),ah=a(Mc,"CODE",{});var Cx=i(ah);MT=s(Cx,"__call__"),Cx.forEach(t),zT=s(Mc," special method."),Mc.forEach(t),jT=h(Co),T(Hs.$$.fragment,Co),qT=h(Co),T(Qs.$$.fragment,Co),PT=h(Co),T(Ks.$$.fragment,Co),Co.forEach(t),ro.forEach(t),Jf=h(o),vn=a(o,"H2",{class:!0});var rg=i(vn);Vs=a(rg,"A",{id:!0,class:!0,href:!0});var Lx=i(Vs);ih=a(Lx,"SPAN",{});var Ox=i(ih);T(Ii.$$.fragment,Ox),Ox.forEach(t),Lx.forEach(t),CT=h(rg),lh=a(rg,"SPAN",{});var Ix=i(lh);LT=s(Ix,"TFAlbertForQuestionAnswering"),Ix.forEach(t),rg.forEach(t),Gf=h(o),ft=a(o,"DIV",{class:!0});var ao=i(ft);T(Ni.$$.fragment,ao),OT=h(ao),kn=a(ao,"P",{});var zc=i(kn);IT=s(zc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),dh=a(zc,"CODE",{});var Nx=i(dh);NT=s(Nx,"span start logits"),Nx.forEach(t),DT=s(zc," and "),ch=a(zc,"CODE",{});var Dx=i(ch);ST=s(Dx,"span end logits"),Dx.forEach(t),WT=s(zc,")."),zc.forEach(t),UT=h(ao),Di=a(ao,"P",{});var ag=i(Di);BT=s(ag,"This model inherits from "),oc=a(ag,"A",{href:!0});var Sx=i(oc);RT=s(Sx,"TFPreTrainedModel"),Sx.forEach(t),HT=s(ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag.forEach(t),QT=h(ao),Si=a(ao,"P",{});var ig=i(Si);KT=s(ig,"This model is also a "),Wi=a(ig,"A",{href:!0,rel:!0});var Wx=i(Wi);VT=s(Wx,"tf.keras.Model"),Wx.forEach(t),JT=s(ig,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ig.forEach(t),GT=h(ao),T(Js.$$.fragment,ao),XT=h(ao),Mt=a(ao,"DIV",{class:!0});var Lo=i(Mt);T(Ui.$$.fragment,Lo),YT=h(Lo),yn=a(Lo,"P",{});var jc=i(yn);ZT=s(jc,"The "),nc=a(jc,"A",{href:!0});var Ux=i(nc);ew=s(Ux,"TFAlbertForQuestionAnswering"),Ux.forEach(t),tw=s(jc," forward method, overrides the "),ph=a(jc,"CODE",{});var Bx=i(ph);ow=s(Bx,"__call__"),Bx.forEach(t),nw=s(jc," special method."),jc.forEach(t),sw=h(Lo),T(Gs.$$.fragment,Lo),rw=h(Lo),T(Xs.$$.fragment,Lo),aw=h(Lo),T(Ys.$$.fragment,Lo),Lo.forEach(t),ao.forEach(t),Xf=h(o),Tn=a(o,"H2",{class:!0});var lg=i(Tn);Zs=a(lg,"A",{id:!0,class:!0,href:!0});var Rx=i(Zs);hh=a(Rx,"SPAN",{});var Hx=i(hh);T(Bi.$$.fragment,Hx),Hx.forEach(t),Rx.forEach(t),iw=h(lg),mh=a(lg,"SPAN",{});var Qx=i(mh);lw=s(Qx,"FlaxAlbertModel"),Qx.forEach(t),lg.forEach(t),Yf=h(o),et=a(o,"DIV",{class:!0});var jt=i(et);T(Ri.$$.fragment,jt),dw=h(jt),fh=a(jt,"P",{});var Kx=i(fh);cw=s(Kx,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Kx.forEach(t),pw=h(jt),Hi=a(jt,"P",{});var dg=i(Hi);hw=s(dg,"This model inherits from "),sc=a(dg,"A",{href:!0});var Vx=i(sc);mw=s(Vx,"FlaxPreTrainedModel"),Vx.forEach(t),fw=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),uw=h(jt),Qi=a(jt,"P",{});var cg=i(Qi);gw=s(cg,"This model is also a Flax Linen "),Ki=a(cg,"A",{href:!0,rel:!0});var Jx=i(Ki);_w=s(Jx,"flax.linen.Module"),Jx.forEach(t),bw=s(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),vw=h(jt),uh=a(jt,"P",{});var Gx=i(uh);kw=s(Gx,"Finally, this model supports inherent JAX features such as:"),Gx.forEach(t),yw=h(jt),lo=a(jt,"UL",{});var Mr=i(lo);gh=a(Mr,"LI",{});var Xx=i(gh);Vi=a(Xx,"A",{href:!0,rel:!0});var Yx=i(Vi);Tw=s(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Xx.forEach(t),ww=h(Mr),_h=a(Mr,"LI",{});var Zx=i(_h);Ji=a(Zx,"A",{href:!0,rel:!0});var e4=i(Ji);$w=s(e4,"Automatic Differentiation"),e4.forEach(t),Zx.forEach(t),Aw=h(Mr),bh=a(Mr,"LI",{});var t4=i(bh);Gi=a(t4,"A",{href:!0,rel:!0});var o4=i(Gi);Fw=s(o4,"Vectorization"),o4.forEach(t),t4.forEach(t),xw=h(Mr),vh=a(Mr,"LI",{});var n4=i(vh);Xi=a(n4,"A",{href:!0,rel:!0});var s4=i(Xi);Ew=s(s4,"Parallelization"),s4.forEach(t),n4.forEach(t),Mr.forEach(t),Mw=h(jt),Kt=a(jt,"DIV",{class:!0});var zr=i(Kt);T(Yi.$$.fragment,zr),zw=h(zr),wn=a(zr,"P",{});var qc=i(wn);jw=s(qc,"The "),kh=a(qc,"CODE",{});var r4=i(kh);qw=s(r4,"FlaxAlbertPreTrainedModel"),r4.forEach(t),Pw=s(qc," forward method, overrides the "),yh=a(qc,"CODE",{});var a4=i(yh);Cw=s(a4,"__call__"),a4.forEach(t),Lw=s(qc," special method."),qc.forEach(t),Ow=h(zr),T(er.$$.fragment,zr),Iw=h(zr),T(tr.$$.fragment,zr),zr.forEach(t),jt.forEach(t),Zf=h(o),$n=a(o,"H2",{class:!0});var pg=i($n);or=a(pg,"A",{id:!0,class:!0,href:!0});var i4=i(or);Th=a(i4,"SPAN",{});var l4=i(Th);T(Zi.$$.fragment,l4),l4.forEach(t),i4.forEach(t),Nw=h(pg),wh=a(pg,"SPAN",{});var d4=i(wh);Dw=s(d4,"FlaxAlbertForPreTraining"),d4.forEach(t),pg.forEach(t),eu=h(o),tt=a(o,"DIV",{class:!0});var qt=i(tt);T(el.$$.fragment,qt),Sw=h(qt),An=a(qt,"P",{});var Pc=i(An);Ww=s(Pc,"Albert Model with two heads on top as done during the pretraining: a "),$h=a(Pc,"CODE",{});var c4=i($h);Uw=s(c4,"masked language modeling"),c4.forEach(t),Bw=s(Pc,` head and a
`),Ah=a(Pc,"CODE",{});var p4=i(Ah);Rw=s(p4,"sentence order prediction (classification)"),p4.forEach(t),Hw=s(Pc," head."),Pc.forEach(t),Qw=h(qt),tl=a(qt,"P",{});var hg=i(tl);Kw=s(hg,"This model inherits from "),rc=a(hg,"A",{href:!0});var h4=i(rc);Vw=s(h4,"FlaxPreTrainedModel"),h4.forEach(t),Jw=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),Gw=h(qt),ol=a(qt,"P",{});var mg=i(ol);Xw=s(mg,"This model is also a Flax Linen "),nl=a(mg,"A",{href:!0,rel:!0});var m4=i(nl);Yw=s(m4,"flax.linen.Module"),m4.forEach(t),Zw=s(mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mg.forEach(t),e$=h(qt),Fh=a(qt,"P",{});var f4=i(Fh);t$=s(f4,"Finally, this model supports inherent JAX features such as:"),f4.forEach(t),o$=h(qt),co=a(qt,"UL",{});var jr=i(co);xh=a(jr,"LI",{});var u4=i(xh);sl=a(u4,"A",{href:!0,rel:!0});var g4=i(sl);n$=s(g4,"Just-In-Time (JIT) compilation"),g4.forEach(t),u4.forEach(t),s$=h(jr),Eh=a(jr,"LI",{});var _4=i(Eh);rl=a(_4,"A",{href:!0,rel:!0});var b4=i(rl);r$=s(b4,"Automatic Differentiation"),b4.forEach(t),_4.forEach(t),a$=h(jr),Mh=a(jr,"LI",{});var v4=i(Mh);al=a(v4,"A",{href:!0,rel:!0});var k4=i(al);i$=s(k4,"Vectorization"),k4.forEach(t),v4.forEach(t),l$=h(jr),zh=a(jr,"LI",{});var y4=i(zh);il=a(y4,"A",{href:!0,rel:!0});var T4=i(il);d$=s(T4,"Parallelization"),T4.forEach(t),y4.forEach(t),jr.forEach(t),c$=h(qt),Vt=a(qt,"DIV",{class:!0});var qr=i(Vt);T(ll.$$.fragment,qr),p$=h(qr),Fn=a(qr,"P",{});var Cc=i(Fn);h$=s(Cc,"The "),jh=a(Cc,"CODE",{});var w4=i(jh);m$=s(w4,"FlaxAlbertPreTrainedModel"),w4.forEach(t),f$=s(Cc," forward method, overrides the "),qh=a(Cc,"CODE",{});var $4=i(qh);u$=s($4,"__call__"),$4.forEach(t),g$=s(Cc," special method."),Cc.forEach(t),_$=h(qr),T(nr.$$.fragment,qr),b$=h(qr),T(sr.$$.fragment,qr),qr.forEach(t),qt.forEach(t),tu=h(o),xn=a(o,"H2",{class:!0});var fg=i(xn);rr=a(fg,"A",{id:!0,class:!0,href:!0});var A4=i(rr);Ph=a(A4,"SPAN",{});var F4=i(Ph);T(dl.$$.fragment,F4),F4.forEach(t),A4.forEach(t),v$=h(fg),Ch=a(fg,"SPAN",{});var x4=i(Ch);k$=s(x4,"FlaxAlbertForMaskedLM"),x4.forEach(t),fg.forEach(t),ou=h(o),ot=a(o,"DIV",{class:!0});var Pt=i(ot);T(cl.$$.fragment,Pt),y$=h(Pt),pl=a(Pt,"P",{});var ug=i(pl);T$=s(ug,"Albert Model with a "),Lh=a(ug,"CODE",{});var E4=i(Lh);w$=s(E4,"language modeling"),E4.forEach(t),$$=s(ug," head on top."),ug.forEach(t),A$=h(Pt),hl=a(Pt,"P",{});var gg=i(hl);F$=s(gg,"This model inherits from "),ac=a(gg,"A",{href:!0});var M4=i(ac);x$=s(M4,"FlaxPreTrainedModel"),M4.forEach(t),E$=s(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),M$=h(Pt),ml=a(Pt,"P",{});var _g=i(ml);z$=s(_g,"This model is also a Flax Linen "),fl=a(_g,"A",{href:!0,rel:!0});var z4=i(fl);j$=s(z4,"flax.linen.Module"),z4.forEach(t),q$=s(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),P$=h(Pt),Oh=a(Pt,"P",{});var j4=i(Oh);C$=s(j4,"Finally, this model supports inherent JAX features such as:"),j4.forEach(t),L$=h(Pt),po=a(Pt,"UL",{});var Pr=i(po);Ih=a(Pr,"LI",{});var q4=i(Ih);ul=a(q4,"A",{href:!0,rel:!0});var P4=i(ul);O$=s(P4,"Just-In-Time (JIT) compilation"),P4.forEach(t),q4.forEach(t),I$=h(Pr),Nh=a(Pr,"LI",{});var C4=i(Nh);gl=a(C4,"A",{href:!0,rel:!0});var L4=i(gl);N$=s(L4,"Automatic Differentiation"),L4.forEach(t),C4.forEach(t),D$=h(Pr),Dh=a(Pr,"LI",{});var O4=i(Dh);_l=a(O4,"A",{href:!0,rel:!0});var I4=i(_l);S$=s(I4,"Vectorization"),I4.forEach(t),O4.forEach(t),W$=h(Pr),Sh=a(Pr,"LI",{});var N4=i(Sh);bl=a(N4,"A",{href:!0,rel:!0});var D4=i(bl);U$=s(D4,"Parallelization"),D4.forEach(t),N4.forEach(t),Pr.forEach(t),B$=h(Pt),Jt=a(Pt,"DIV",{class:!0});var Cr=i(Jt);T(vl.$$.fragment,Cr),R$=h(Cr),En=a(Cr,"P",{});var Lc=i(En);H$=s(Lc,"The "),Wh=a(Lc,"CODE",{});var S4=i(Wh);Q$=s(S4,"FlaxAlbertPreTrainedModel"),S4.forEach(t),K$=s(Lc," forward method, overrides the "),Uh=a(Lc,"CODE",{});var W4=i(Uh);V$=s(W4,"__call__"),W4.forEach(t),J$=s(Lc," special method."),Lc.forEach(t),G$=h(Cr),T(ar.$$.fragment,Cr),X$=h(Cr),T(ir.$$.fragment,Cr),Cr.forEach(t),Pt.forEach(t),nu=h(o),Mn=a(o,"H2",{class:!0});var bg=i(Mn);lr=a(bg,"A",{id:!0,class:!0,href:!0});var U4=i(lr);Bh=a(U4,"SPAN",{});var B4=i(Bh);T(kl.$$.fragment,B4),B4.forEach(t),U4.forEach(t),Y$=h(bg),Rh=a(bg,"SPAN",{});var R4=i(Rh);Z$=s(R4,"FlaxAlbertForSequenceClassification"),R4.forEach(t),bg.forEach(t),su=h(o),nt=a(o,"DIV",{class:!0});var Ct=i(nt);T(yl.$$.fragment,Ct),e1=h(Ct),Hh=a(Ct,"P",{});var H4=i(Hh);t1=s(H4,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),H4.forEach(t),o1=h(Ct),Tl=a(Ct,"P",{});var vg=i(Tl);n1=s(vg,"This model inherits from "),ic=a(vg,"A",{href:!0});var Q4=i(ic);s1=s(Q4,"FlaxPreTrainedModel"),Q4.forEach(t),r1=s(vg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vg.forEach(t),a1=h(Ct),wl=a(Ct,"P",{});var kg=i(wl);i1=s(kg,"This model is also a Flax Linen "),$l=a(kg,"A",{href:!0,rel:!0});var K4=i($l);l1=s(K4,"flax.linen.Module"),K4.forEach(t),d1=s(kg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kg.forEach(t),c1=h(Ct),Qh=a(Ct,"P",{});var V4=i(Qh);p1=s(V4,"Finally, this model supports inherent JAX features such as:"),V4.forEach(t),h1=h(Ct),ho=a(Ct,"UL",{});var Lr=i(ho);Kh=a(Lr,"LI",{});var J4=i(Kh);Al=a(J4,"A",{href:!0,rel:!0});var G4=i(Al);m1=s(G4,"Just-In-Time (JIT) compilation"),G4.forEach(t),J4.forEach(t),f1=h(Lr),Vh=a(Lr,"LI",{});var X4=i(Vh);Fl=a(X4,"A",{href:!0,rel:!0});var Y4=i(Fl);u1=s(Y4,"Automatic Differentiation"),Y4.forEach(t),X4.forEach(t),g1=h(Lr),Jh=a(Lr,"LI",{});var Z4=i(Jh);xl=a(Z4,"A",{href:!0,rel:!0});var eE=i(xl);_1=s(eE,"Vectorization"),eE.forEach(t),Z4.forEach(t),b1=h(Lr),Gh=a(Lr,"LI",{});var tE=i(Gh);El=a(tE,"A",{href:!0,rel:!0});var oE=i(El);v1=s(oE,"Parallelization"),oE.forEach(t),tE.forEach(t),Lr.forEach(t),k1=h(Ct),Gt=a(Ct,"DIV",{class:!0});var Or=i(Gt);T(Ml.$$.fragment,Or),y1=h(Or),zn=a(Or,"P",{});var Oc=i(zn);T1=s(Oc,"The "),Xh=a(Oc,"CODE",{});var nE=i(Xh);w1=s(nE,"FlaxAlbertPreTrainedModel"),nE.forEach(t),$1=s(Oc," forward method, overrides the "),Yh=a(Oc,"CODE",{});var sE=i(Yh);A1=s(sE,"__call__"),sE.forEach(t),F1=s(Oc," special method."),Oc.forEach(t),x1=h(Or),T(dr.$$.fragment,Or),E1=h(Or),T(cr.$$.fragment,Or),Or.forEach(t),Ct.forEach(t),ru=h(o),jn=a(o,"H2",{class:!0});var yg=i(jn);pr=a(yg,"A",{id:!0,class:!0,href:!0});var rE=i(pr);Zh=a(rE,"SPAN",{});var aE=i(Zh);T(zl.$$.fragment,aE),aE.forEach(t),rE.forEach(t),M1=h(yg),em=a(yg,"SPAN",{});var iE=i(em);z1=s(iE,"FlaxAlbertForMultipleChoice"),iE.forEach(t),yg.forEach(t),au=h(o),st=a(o,"DIV",{class:!0});var Lt=i(st);T(jl.$$.fragment,Lt),j1=h(Lt),tm=a(Lt,"P",{});var lE=i(tm);q1=s(lE,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lE.forEach(t),P1=h(Lt),ql=a(Lt,"P",{});var Tg=i(ql);C1=s(Tg,"This model inherits from "),lc=a(Tg,"A",{href:!0});var dE=i(lc);L1=s(dE,"FlaxPreTrainedModel"),dE.forEach(t),O1=s(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tg.forEach(t),I1=h(Lt),Pl=a(Lt,"P",{});var wg=i(Pl);N1=s(wg,"This model is also a Flax Linen "),Cl=a(wg,"A",{href:!0,rel:!0});var cE=i(Cl);D1=s(cE,"flax.linen.Module"),cE.forEach(t),S1=s(wg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wg.forEach(t),W1=h(Lt),om=a(Lt,"P",{});var pE=i(om);U1=s(pE,"Finally, this model supports inherent JAX features such as:"),pE.forEach(t),B1=h(Lt),mo=a(Lt,"UL",{});var Ir=i(mo);nm=a(Ir,"LI",{});var hE=i(nm);Ll=a(hE,"A",{href:!0,rel:!0});var mE=i(Ll);R1=s(mE,"Just-In-Time (JIT) compilation"),mE.forEach(t),hE.forEach(t),H1=h(Ir),sm=a(Ir,"LI",{});var fE=i(sm);Ol=a(fE,"A",{href:!0,rel:!0});var uE=i(Ol);Q1=s(uE,"Automatic Differentiation"),uE.forEach(t),fE.forEach(t),K1=h(Ir),rm=a(Ir,"LI",{});var gE=i(rm);Il=a(gE,"A",{href:!0,rel:!0});var _E=i(Il);V1=s(_E,"Vectorization"),_E.forEach(t),gE.forEach(t),J1=h(Ir),am=a(Ir,"LI",{});var bE=i(am);Nl=a(bE,"A",{href:!0,rel:!0});var vE=i(Nl);G1=s(vE,"Parallelization"),vE.forEach(t),bE.forEach(t),Ir.forEach(t),X1=h(Lt),Xt=a(Lt,"DIV",{class:!0});var Nr=i(Xt);T(Dl.$$.fragment,Nr),Y1=h(Nr),qn=a(Nr,"P",{});var Ic=i(qn);Z1=s(Ic,"The "),im=a(Ic,"CODE",{});var kE=i(im);e0=s(kE,"FlaxAlbertPreTrainedModel"),kE.forEach(t),t0=s(Ic," forward method, overrides the "),lm=a(Ic,"CODE",{});var yE=i(lm);o0=s(yE,"__call__"),yE.forEach(t),n0=s(Ic," special method."),Ic.forEach(t),s0=h(Nr),T(hr.$$.fragment,Nr),r0=h(Nr),T(mr.$$.fragment,Nr),Nr.forEach(t),Lt.forEach(t),iu=h(o),Pn=a(o,"H2",{class:!0});var $g=i(Pn);fr=a($g,"A",{id:!0,class:!0,href:!0});var TE=i(fr);dm=a(TE,"SPAN",{});var wE=i(dm);T(Sl.$$.fragment,wE),wE.forEach(t),TE.forEach(t),a0=h($g),cm=a($g,"SPAN",{});var $E=i(cm);i0=s($E,"FlaxAlbertForTokenClassification"),$E.forEach(t),$g.forEach(t),lu=h(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);T(Wl.$$.fragment,Ot),l0=h(Ot),pm=a(Ot,"P",{});var AE=i(pm);d0=s(AE,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),AE.forEach(t),c0=h(Ot),Ul=a(Ot,"P",{});var Ag=i(Ul);p0=s(Ag,"This model inherits from "),dc=a(Ag,"A",{href:!0});var FE=i(dc);h0=s(FE,"FlaxPreTrainedModel"),FE.forEach(t),m0=s(Ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ag.forEach(t),f0=h(Ot),Bl=a(Ot,"P",{});var Fg=i(Bl);u0=s(Fg,"This model is also a Flax Linen "),Rl=a(Fg,"A",{href:!0,rel:!0});var xE=i(Rl);g0=s(xE,"flax.linen.Module"),xE.forEach(t),_0=s(Fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fg.forEach(t),b0=h(Ot),hm=a(Ot,"P",{});var EE=i(hm);v0=s(EE,"Finally, this model supports inherent JAX features such as:"),EE.forEach(t),k0=h(Ot),fo=a(Ot,"UL",{});var Dr=i(fo);mm=a(Dr,"LI",{});var ME=i(mm);Hl=a(ME,"A",{href:!0,rel:!0});var zE=i(Hl);y0=s(zE,"Just-In-Time (JIT) compilation"),zE.forEach(t),ME.forEach(t),T0=h(Dr),fm=a(Dr,"LI",{});var jE=i(fm);Ql=a(jE,"A",{href:!0,rel:!0});var qE=i(Ql);w0=s(qE,"Automatic Differentiation"),qE.forEach(t),jE.forEach(t),$0=h(Dr),um=a(Dr,"LI",{});var PE=i(um);Kl=a(PE,"A",{href:!0,rel:!0});var CE=i(Kl);A0=s(CE,"Vectorization"),CE.forEach(t),PE.forEach(t),F0=h(Dr),gm=a(Dr,"LI",{});var LE=i(gm);Vl=a(LE,"A",{href:!0,rel:!0});var OE=i(Vl);x0=s(OE,"Parallelization"),OE.forEach(t),LE.forEach(t),Dr.forEach(t),E0=h(Ot),Yt=a(Ot,"DIV",{class:!0});var Sr=i(Yt);T(Jl.$$.fragment,Sr),M0=h(Sr),Cn=a(Sr,"P",{});var Nc=i(Cn);z0=s(Nc,"The "),_m=a(Nc,"CODE",{});var IE=i(_m);j0=s(IE,"FlaxAlbertPreTrainedModel"),IE.forEach(t),q0=s(Nc," forward method, overrides the "),bm=a(Nc,"CODE",{});var NE=i(bm);P0=s(NE,"__call__"),NE.forEach(t),C0=s(Nc," special method."),Nc.forEach(t),L0=h(Sr),T(ur.$$.fragment,Sr),O0=h(Sr),T(gr.$$.fragment,Sr),Sr.forEach(t),Ot.forEach(t),du=h(o),Ln=a(o,"H2",{class:!0});var xg=i(Ln);_r=a(xg,"A",{id:!0,class:!0,href:!0});var DE=i(_r);vm=a(DE,"SPAN",{});var SE=i(vm);T(Gl.$$.fragment,SE),SE.forEach(t),DE.forEach(t),I0=h(xg),km=a(xg,"SPAN",{});var WE=i(km);N0=s(WE,"FlaxAlbertForQuestionAnswering"),WE.forEach(t),xg.forEach(t),cu=h(o),at=a(o,"DIV",{class:!0});var It=i(at);T(Xl.$$.fragment,It),D0=h(It),On=a(It,"P",{});var Dc=i(On);S0=s(Dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ym=a(Dc,"CODE",{});var UE=i(ym);W0=s(UE,"span start logits"),UE.forEach(t),U0=s(Dc," and "),Tm=a(Dc,"CODE",{});var BE=i(Tm);B0=s(BE,"span end logits"),BE.forEach(t),R0=s(Dc,")."),Dc.forEach(t),H0=h(It),Yl=a(It,"P",{});var Eg=i(Yl);Q0=s(Eg,"This model inherits from "),cc=a(Eg,"A",{href:!0});var RE=i(cc);K0=s(RE,"FlaxPreTrainedModel"),RE.forEach(t),V0=s(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eg.forEach(t),J0=h(It),Zl=a(It,"P",{});var Mg=i(Zl);G0=s(Mg,"This model is also a Flax Linen "),ed=a(Mg,"A",{href:!0,rel:!0});var HE=i(ed);X0=s(HE,"flax.linen.Module"),HE.forEach(t),Y0=s(Mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mg.forEach(t),Z0=h(It),wm=a(It,"P",{});var QE=i(wm);eA=s(QE,"Finally, this model supports inherent JAX features such as:"),QE.forEach(t),tA=h(It),uo=a(It,"UL",{});var Wr=i(uo);$m=a(Wr,"LI",{});var KE=i($m);td=a(KE,"A",{href:!0,rel:!0});var VE=i(td);oA=s(VE,"Just-In-Time (JIT) compilation"),VE.forEach(t),KE.forEach(t),nA=h(Wr),Am=a(Wr,"LI",{});var JE=i(Am);od=a(JE,"A",{href:!0,rel:!0});var GE=i(od);sA=s(GE,"Automatic Differentiation"),GE.forEach(t),JE.forEach(t),rA=h(Wr),Fm=a(Wr,"LI",{});var XE=i(Fm);nd=a(XE,"A",{href:!0,rel:!0});var YE=i(nd);aA=s(YE,"Vectorization"),YE.forEach(t),XE.forEach(t),iA=h(Wr),xm=a(Wr,"LI",{});var ZE=i(xm);sd=a(ZE,"A",{href:!0,rel:!0});var eM=i(sd);lA=s(eM,"Parallelization"),eM.forEach(t),ZE.forEach(t),Wr.forEach(t),dA=h(It),Zt=a(It,"DIV",{class:!0});var Ur=i(Zt);T(rd.$$.fragment,Ur),cA=h(Ur),In=a(Ur,"P",{});var Sc=i(In);pA=s(Sc,"The "),Em=a(Sc,"CODE",{});var tM=i(Em);hA=s(tM,"FlaxAlbertPreTrainedModel"),tM.forEach(t),mA=s(Sc," forward method, overrides the "),Mm=a(Sc,"CODE",{});var oM=i(Mm);fA=s(oM,"__call__"),oM.forEach(t),uA=s(Sc," special method."),Sc.forEach(t),gA=h(Ur),T(br.$$.fragment,Ur),_A=h(Ur),T(vr.$$.fragment,Ur),Ur.forEach(t),It.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_z)),u(f,"id","albert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#albert"),u(c,"class","relative group"),u(se,"id","overview"),u(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(se,"href","#overview"),u(W,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1909.11942"),u(ae,"rel","nofollow"),u(R,"href","https://huggingface.co/lysandre"),u(R,"rel","nofollow"),u(P,"href","https://huggingface.co/kamalkraj"),u(P,"rel","nofollow"),u(ie,"href","https://github.com/google-research/ALBERT"),u(ie,"rel","nofollow"),u(Z,"id","transformers.AlbertConfig"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#transformers.AlbertConfig"),u(Ne,"class","relative group"),u(Ue,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertModel"),u(Be,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertModel"),u(ee,"href","https://huggingface.co/albert-xxlarge-v2"),u(ee,"rel","nofollow"),u(vd,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(kd,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Un,"id","transformers.AlbertTokenizer"),u(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Un,"href","#transformers.AlbertTokenizer"),u(Io,"class","relative group"),u(Qr,"href","https://github.com/google/sentencepiece"),u(Qr,"rel","nofollow"),u(yd,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.AlbertTokenizerFast"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.AlbertTokenizerFast"),u(Do,"class","relative group"),u(oa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(oa,"rel","nofollow"),u(Ad,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(So,"class","relative group"),u(Ed,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForPreTraining"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Md,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertModel"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertModel"),u(Bo,"class","relative group"),u(zd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ua,"rel","nofollow"),u(jd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertModel"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.AlbertForPreTraining"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.AlbertForPreTraining"),u(Ho,"class","relative group"),u(qd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ya,"rel","nofollow"),u(Pd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForMaskedLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForMaskedLM"),u(Vo,"class","relative group"),u(Cd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ea,"rel","nofollow"),u(Ld,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.AlbertForSequenceClassification"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.AlbertForSequenceClassification"),u(Go,"class","relative group"),u(Od,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ca,"rel","nofollow"),u(Id,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cs,"id","transformers.AlbertForMultipleChoice"),u(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cs,"href","#transformers.AlbertForMultipleChoice"),u(Yo,"class","relative group"),u(Nd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sa,"rel","nofollow"),u(Dd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.AlbertForTokenClassification"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.AlbertForTokenClassification"),u(en,"class","relative group"),u(Sd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qa,"rel","nofollow"),u(Wd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForTokenClassification"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.AlbertForQuestionAnswering"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.AlbertForQuestionAnswering"),u(on,"class","relative group"),u(Ud,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ya,"rel","nofollow"),u(Bd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFAlbertModel"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFAlbertModel"),u(rn,"class","relative group"),u(Rd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(si,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(si,"rel","nofollow"),u(Hd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertModel"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.TFAlbertForPreTraining"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.TFAlbertForPreTraining"),u(ln,"class","relative group"),u(Qd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ci,"rel","nofollow"),u(Kd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFAlbertForMaskedLM"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFAlbertForMaskedLM"),u(pn,"class","relative group"),u(Vd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(_i,"rel","nofollow"),u(Jd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.TFAlbertForSequenceClassification"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.TFAlbertForSequenceClassification"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(wi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(wi,"rel","nofollow"),u(Xd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.TFAlbertForMultipleChoice"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.TFAlbertForMultipleChoice"),u(un,"class","relative group"),u(Yd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Mi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Mi,"rel","nofollow"),u(Zd,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.TFAlbertForTokenClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.TFAlbertForTokenClassification"),u(_n,"class","relative group"),u(ec,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Li,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Li,"rel","nofollow"),u(tc,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.TFAlbertForQuestionAnswering"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.TFAlbertForQuestionAnswering"),u(vn,"class","relative group"),u(oc,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wi,"rel","nofollow"),u(nc,"href","/docs/transformers/v4.22.0/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.FlaxAlbertModel"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.FlaxAlbertModel"),u(Tn,"class","relative group"),u(sc,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ki,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xi,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(or,"id","transformers.FlaxAlbertForPreTraining"),u(or,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(or,"href","#transformers.FlaxAlbertForPreTraining"),u($n,"class","relative group"),u(rc,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(nl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(al,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(il,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.FlaxAlbertForMaskedLM"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.FlaxAlbertForMaskedLM"),u(xn,"class","relative group"),u(ac,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(fl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ul,"rel","nofollow"),u(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(_l,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bl,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lr,"id","transformers.FlaxAlbertForSequenceClassification"),u(lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lr,"href","#transformers.FlaxAlbertForSequenceClassification"),u(Mn,"class","relative group"),u(ic,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u($l,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Al,"rel","nofollow"),u(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fl,"rel","nofollow"),u(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(El,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.FlaxAlbertForMultipleChoice"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.FlaxAlbertForMultipleChoice"),u(jn,"class","relative group"),u(lc,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cl,"rel","nofollow"),u(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ll,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ol,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Il,"rel","nofollow"),u(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Nl,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.FlaxAlbertForTokenClassification"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.FlaxAlbertForTokenClassification"),u(Pn,"class","relative group"),u(dc,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Rl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Rl,"rel","nofollow"),u(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Hl,"rel","nofollow"),u(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ql,"rel","nofollow"),u(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Kl,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vl,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.FlaxAlbertForQuestionAnswering"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(Ln,"class","relative group"),u(cc,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ed,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ed,"rel","nofollow"),u(td,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(td,"rel","nofollow"),u(od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(od,"rel","nofollow"),u(nd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nd,"rel","nofollow"),u(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sd,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,f),e(f,v),w(l,v,null),e(c,m),e(c,M),e(M,ye),_(o,ge,b),_(o,W,b),e(W,se),e(se,te),w(E,te,null),e(W,Te),e(W,Q),e(Q,we),_(o,_e,b),_(o,U,b),e(U,$e),e(U,ae),e(ae,G),e(U,Ae),_(o,be,b),_(o,B,b),e(B,me),e(me,Fe),e(B,X),e(B,fe),e(fe,xe),_(o,oe,b),_(o,q,b),e(q,L),_(o,ve,b),_(o,H,b),e(H,ue),e(ue,Ee),_(o,J,b),_(o,le,b),e(le,Me),_(o,C,b),_(o,re,b),e(re,K),e(K,ze),e(re,je),e(re,V),e(V,qe),_(o,ke,b),_(o,O,b),e(O,Pe),e(O,R),e(R,Ce),e(O,ne),e(O,P),e(P,Le),e(O,I),e(O,ie),e(ie,Oe),e(O,k),_(o,z,b),_(o,Ne,b),e(Ne,Z),e(Z,He),w(De,He,null),e(Ne,j),e(Ne,Qe),e(Qe,Ve),_(o,Ke,b),_(o,de,b),w(Se,de,null),e(de,S),e(de,N),e(N,Je),e(N,Ue),e(Ue,Y),e(N,Ge),e(N,Be),e(Be,Ie),e(N,Xe),e(N,ee),e(ee,Ye),e(N,zg),e(de,jg),e(de,Oo),e(Oo,qg),e(Oo,vd),e(vd,Pg),e(Oo,Cg),e(Oo,kd),e(kd,Lg),e(Oo,Og),e(de,Ig),w(Wn,de,null),_(o,gf,b),_(o,Io,b),e(Io,Un),e(Un,Wc),w(Br,Wc,null),e(Io,Ng),e(Io,Uc),e(Uc,Dg),_(o,_f,b),_(o,Ze,b),w(Rr,Ze,null),e(Ze,Sg),e(Ze,Hr),e(Hr,Wg),e(Hr,Qr),e(Qr,Ug),e(Hr,Bg),e(Ze,Rg),e(Ze,Kr),e(Kr,Hg),e(Kr,yd),e(yd,Qg),e(Kr,Kg),e(Ze,Vg),e(Ze,ko),w(Vr,ko,null),e(ko,Jg),e(ko,Bc),e(Bc,Gg),e(ko,Xg),e(ko,Jr),e(Jr,Td),e(Td,Yg),e(Td,Rc),e(Rc,Zg),e(Jr,e_),e(Jr,wd),e(wd,t_),e(wd,Hc),e(Hc,o_),e(Ze,n_),e(Ze,Bn),w(Gr,Bn,null),e(Bn,s_),e(Bn,Xr),e(Xr,r_),e(Xr,Qc),e(Qc,a_),e(Xr,i_),e(Ze,l_),e(Ze,Dt),w(Yr,Dt,null),e(Dt,d_),e(Dt,Kc),e(Kc,c_),e(Dt,p_),w(Rn,Dt,null),e(Dt,h_),e(Dt,No),e(No,m_),e(No,Vc),e(Vc,f_),e(No,u_),e(No,Jc),e(Jc,g_),e(No,__),e(Ze,b_),e(Ze,$d),w(Zr,$d,null),_(o,bf,b),_(o,Do,b),e(Do,Hn),e(Hn,Gc),w(ea,Gc,null),e(Do,v_),e(Do,Xc),e(Xc,k_),_(o,vf,b),_(o,Nt,b),w(ta,Nt,null),e(Nt,y_),e(Nt,io),e(io,T_),e(io,Yc),e(Yc,w_),e(io,$_),e(io,oa),e(oa,A_),e(io,F_),e(io,Ad),e(Ad,x_),e(io,E_),e(Nt,M_),e(Nt,yo),w(na,yo,null),e(yo,z_),e(yo,Zc),e(Zc,j_),e(yo,q_),e(yo,sa),e(sa,Fd),e(Fd,P_),e(Fd,ep),e(ep,C_),e(sa,L_),e(sa,xd),e(xd,O_),e(xd,tp),e(tp,I_),e(Nt,N_),e(Nt,St),w(ra,St,null),e(St,D_),e(St,op),e(op,S_),e(St,W_),w(Qn,St,null),e(St,U_),e(St,np),e(np,B_),_(o,kf,b),_(o,So,b),e(So,Kn),e(Kn,sp),w(aa,sp,null),e(So,R_),e(So,rp),e(rp,H_),_(o,yf,b),_(o,Wo,b),w(ia,Wo,null),e(Wo,Q_),e(Wo,la),e(la,K_),e(la,Ed),e(Ed,V_),e(la,J_),_(o,Tf,b),_(o,Uo,b),w(da,Uo,null),e(Uo,G_),e(Uo,ca),e(ca,X_),e(ca,Md),e(Md,Y_),e(ca,Z_),_(o,wf,b),_(o,Bo,b),e(Bo,Vn),e(Vn,ap),w(pa,ap,null),e(Bo,eb),e(Bo,ip),e(ip,tb),_(o,$f,b),_(o,gt,b),w(ha,gt,null),e(gt,ob),e(gt,lp),e(lp,nb),e(gt,sb),e(gt,ma),e(ma,rb),e(ma,zd),e(zd,ab),e(ma,ib),e(gt,lb),e(gt,fa),e(fa,db),e(fa,ua),e(ua,cb),e(fa,pb),e(gt,hb),e(gt,Wt),w(ga,Wt,null),e(Wt,mb),e(Wt,Ro),e(Ro,fb),e(Ro,jd),e(jd,ub),e(Ro,gb),e(Ro,dp),e(dp,_b),e(Ro,bb),e(Wt,vb),w(Jn,Wt,null),e(Wt,kb),w(Gn,Wt,null),_(o,Af,b),_(o,Ho,b),e(Ho,Xn),e(Xn,cp),w(_a,cp,null),e(Ho,yb),e(Ho,pp),e(pp,Tb),_(o,Ff,b),_(o,_t,b),w(ba,_t,null),e(_t,wb),e(_t,Qo),e(Qo,$b),e(Qo,hp),e(hp,Ab),e(Qo,Fb),e(Qo,mp),e(mp,xb),e(Qo,Eb),e(_t,Mb),e(_t,va),e(va,zb),e(va,qd),e(qd,jb),e(va,qb),e(_t,Pb),e(_t,ka),e(ka,Cb),e(ka,ya),e(ya,Lb),e(ka,Ob),e(_t,Ib),e(_t,Ut),w(Ta,Ut,null),e(Ut,Nb),e(Ut,Ko),e(Ko,Db),e(Ko,Pd),e(Pd,Sb),e(Ko,Wb),e(Ko,fp),e(fp,Ub),e(Ko,Bb),e(Ut,Rb),w(Yn,Ut,null),e(Ut,Hb),w(Zn,Ut,null),_(o,xf,b),_(o,Vo,b),e(Vo,es),e(es,up),w(wa,up,null),e(Vo,Qb),e(Vo,gp),e(gp,Kb),_(o,Ef,b),_(o,bt,b),w($a,bt,null),e(bt,Vb),e(bt,Aa),e(Aa,Jb),e(Aa,_p),e(_p,Gb),e(Aa,Xb),e(bt,Yb),e(bt,Fa),e(Fa,Zb),e(Fa,Cd),e(Cd,ev),e(Fa,tv),e(bt,ov),e(bt,xa),e(xa,nv),e(xa,Ea),e(Ea,sv),e(xa,rv),e(bt,av),e(bt,wt),w(Ma,wt,null),e(wt,iv),e(wt,Jo),e(Jo,lv),e(Jo,Ld),e(Ld,dv),e(Jo,cv),e(Jo,bp),e(bp,pv),e(Jo,hv),e(wt,mv),w(ts,wt,null),e(wt,fv),w(os,wt,null),e(wt,uv),w(ns,wt,null),_(o,Mf,b),_(o,Go,b),e(Go,ss),e(ss,vp),w(za,vp,null),e(Go,gv),e(Go,kp),e(kp,_v),_(o,zf,b),_(o,vt,b),w(ja,vt,null),e(vt,bv),e(vt,yp),e(yp,vv),e(vt,kv),e(vt,qa),e(qa,yv),e(qa,Od),e(Od,Tv),e(qa,wv),e(vt,$v),e(vt,Pa),e(Pa,Av),e(Pa,Ca),e(Ca,Fv),e(Pa,xv),e(vt,Ev),e(vt,it),w(La,it,null),e(it,Mv),e(it,Xo),e(Xo,zv),e(Xo,Id),e(Id,jv),e(Xo,qv),e(Xo,Tp),e(Tp,Pv),e(Xo,Cv),e(it,Lv),w(rs,it,null),e(it,Ov),w(as,it,null),e(it,Iv),w(is,it,null),e(it,Nv),w(ls,it,null),e(it,Dv),w(ds,it,null),_(o,jf,b),_(o,Yo,b),e(Yo,cs),e(cs,wp),w(Oa,wp,null),e(Yo,Sv),e(Yo,$p),e($p,Wv),_(o,qf,b),_(o,kt,b),w(Ia,kt,null),e(kt,Uv),e(kt,Ap),e(Ap,Bv),e(kt,Rv),e(kt,Na),e(Na,Hv),e(Na,Nd),e(Nd,Qv),e(Na,Kv),e(kt,Vv),e(kt,Da),e(Da,Jv),e(Da,Sa),e(Sa,Gv),e(Da,Xv),e(kt,Yv),e(kt,Bt),w(Wa,Bt,null),e(Bt,Zv),e(Bt,Zo),e(Zo,ek),e(Zo,Dd),e(Dd,tk),e(Zo,ok),e(Zo,Fp),e(Fp,nk),e(Zo,sk),e(Bt,rk),w(ps,Bt,null),e(Bt,ak),w(hs,Bt,null),_(o,Pf,b),_(o,en,b),e(en,ms),e(ms,xp),w(Ua,xp,null),e(en,ik),e(en,Ep),e(Ep,lk),_(o,Cf,b),_(o,yt,b),w(Ba,yt,null),e(yt,dk),e(yt,Mp),e(Mp,ck),e(yt,pk),e(yt,Ra),e(Ra,hk),e(Ra,Sd),e(Sd,mk),e(Ra,fk),e(yt,uk),e(yt,Ha),e(Ha,gk),e(Ha,Qa),e(Qa,_k),e(Ha,bk),e(yt,vk),e(yt,$t),w(Ka,$t,null),e($t,kk),e($t,tn),e(tn,yk),e(tn,Wd),e(Wd,Tk),e(tn,wk),e(tn,zp),e(zp,$k),e(tn,Ak),e($t,Fk),w(fs,$t,null),e($t,xk),w(us,$t,null),e($t,Ek),w(gs,$t,null),_(o,Lf,b),_(o,on,b),e(on,_s),e(_s,jp),w(Va,jp,null),e(on,Mk),e(on,qp),e(qp,zk),_(o,Of,b),_(o,Tt,b),w(Ja,Tt,null),e(Tt,jk),e(Tt,nn),e(nn,qk),e(nn,Pp),e(Pp,Pk),e(nn,Ck),e(nn,Cp),e(Cp,Lk),e(nn,Ok),e(Tt,Ik),e(Tt,Ga),e(Ga,Nk),e(Ga,Ud),e(Ud,Dk),e(Ga,Sk),e(Tt,Wk),e(Tt,Xa),e(Xa,Uk),e(Xa,Ya),e(Ya,Bk),e(Xa,Rk),e(Tt,Hk),e(Tt,At),w(Za,At,null),e(At,Qk),e(At,sn),e(sn,Kk),e(sn,Bd),e(Bd,Vk),e(sn,Jk),e(sn,Lp),e(Lp,Gk),e(sn,Xk),e(At,Yk),w(bs,At,null),e(At,Zk),w(vs,At,null),e(At,e2),w(ks,At,null),_(o,If,b),_(o,rn,b),e(rn,ys),e(ys,Op),w(ei,Op,null),e(rn,t2),e(rn,Ip),e(Ip,o2),_(o,Nf,b),_(o,lt,b),w(ti,lt,null),e(lt,n2),e(lt,Np),e(Np,s2),e(lt,r2),e(lt,oi),e(oi,a2),e(oi,Rd),e(Rd,i2),e(oi,l2),e(lt,d2),e(lt,ni),e(ni,c2),e(ni,si),e(si,p2),e(ni,h2),e(lt,m2),w(Ts,lt,null),e(lt,f2),e(lt,Rt),w(ri,Rt,null),e(Rt,u2),e(Rt,an),e(an,g2),e(an,Hd),e(Hd,_2),e(an,b2),e(an,Dp),e(Dp,v2),e(an,k2),e(Rt,y2),w(ws,Rt,null),e(Rt,T2),w($s,Rt,null),_(o,Df,b),_(o,ln,b),e(ln,As),e(As,Sp),w(ai,Sp,null),e(ln,w2),e(ln,Wp),e(Wp,$2),_(o,Sf,b),_(o,dt,b),w(ii,dt,null),e(dt,A2),e(dt,dn),e(dn,F2),e(dn,Up),e(Up,x2),e(dn,E2),e(dn,Bp),e(Bp,M2),e(dn,z2),e(dt,j2),e(dt,li),e(li,q2),e(li,Qd),e(Qd,P2),e(li,C2),e(dt,L2),e(dt,di),e(di,O2),e(di,ci),e(ci,I2),e(di,N2),e(dt,D2),w(Fs,dt,null),e(dt,S2),e(dt,Ht),w(pi,Ht,null),e(Ht,W2),e(Ht,cn),e(cn,U2),e(cn,Kd),e(Kd,B2),e(cn,R2),e(cn,Rp),e(Rp,H2),e(cn,Q2),e(Ht,K2),w(xs,Ht,null),e(Ht,V2),w(Es,Ht,null),_(o,Wf,b),_(o,pn,b),e(pn,Ms),e(Ms,Hp),w(hi,Hp,null),e(pn,J2),e(pn,Qp),e(Qp,G2),_(o,Uf,b),_(o,ct,b),w(mi,ct,null),e(ct,X2),e(ct,fi),e(fi,Y2),e(fi,Kp),e(Kp,Z2),e(fi,ey),e(ct,ty),e(ct,ui),e(ui,oy),e(ui,Vd),e(Vd,ny),e(ui,sy),e(ct,ry),e(ct,gi),e(gi,ay),e(gi,_i),e(_i,iy),e(gi,ly),e(ct,dy),w(zs,ct,null),e(ct,cy),e(ct,Ft),w(bi,Ft,null),e(Ft,py),e(Ft,hn),e(hn,hy),e(hn,Jd),e(Jd,my),e(hn,fy),e(hn,Vp),e(Vp,uy),e(hn,gy),e(Ft,_y),w(js,Ft,null),e(Ft,by),w(qs,Ft,null),e(Ft,vy),w(Ps,Ft,null),_(o,Bf,b),_(o,mn,b),e(mn,Cs),e(Cs,Jp),w(vi,Jp,null),e(mn,ky),e(mn,Gp),e(Gp,yy),_(o,Rf,b),_(o,pt,b),w(ki,pt,null),e(pt,Ty),e(pt,Xp),e(Xp,wy),e(pt,$y),e(pt,yi),e(yi,Ay),e(yi,Gd),e(Gd,Fy),e(yi,xy),e(pt,Ey),e(pt,Ti),e(Ti,My),e(Ti,wi),e(wi,zy),e(Ti,jy),e(pt,qy),w(Ls,pt,null),e(pt,Py),e(pt,xt),w($i,xt,null),e(xt,Cy),e(xt,fn),e(fn,Ly),e(fn,Xd),e(Xd,Oy),e(fn,Iy),e(fn,Yp),e(Yp,Ny),e(fn,Dy),e(xt,Sy),w(Os,xt,null),e(xt,Wy),w(Is,xt,null),e(xt,Uy),w(Ns,xt,null),_(o,Hf,b),_(o,un,b),e(un,Ds),e(Ds,Zp),w(Ai,Zp,null),e(un,By),e(un,eh),e(eh,Ry),_(o,Qf,b),_(o,ht,b),w(Fi,ht,null),e(ht,Hy),e(ht,th),e(th,Qy),e(ht,Ky),e(ht,xi),e(xi,Vy),e(xi,Yd),e(Yd,Jy),e(xi,Gy),e(ht,Xy),e(ht,Ei),e(Ei,Yy),e(Ei,Mi),e(Mi,Zy),e(Ei,eT),e(ht,tT),w(Ss,ht,null),e(ht,oT),e(ht,Qt),w(zi,Qt,null),e(Qt,nT),e(Qt,gn),e(gn,sT),e(gn,Zd),e(Zd,rT),e(gn,aT),e(gn,oh),e(oh,iT),e(gn,lT),e(Qt,dT),w(Ws,Qt,null),e(Qt,cT),w(Us,Qt,null),_(o,Kf,b),_(o,_n,b),e(_n,Bs),e(Bs,nh),w(ji,nh,null),e(_n,pT),e(_n,sh),e(sh,hT),_(o,Vf,b),_(o,mt,b),w(qi,mt,null),e(mt,mT),e(mt,rh),e(rh,fT),e(mt,uT),e(mt,Pi),e(Pi,gT),e(Pi,ec),e(ec,_T),e(Pi,bT),e(mt,vT),e(mt,Ci),e(Ci,kT),e(Ci,Li),e(Li,yT),e(Ci,TT),e(mt,wT),w(Rs,mt,null),e(mt,$T),e(mt,Et),w(Oi,Et,null),e(Et,AT),e(Et,bn),e(bn,FT),e(bn,tc),e(tc,xT),e(bn,ET),e(bn,ah),e(ah,MT),e(bn,zT),e(Et,jT),w(Hs,Et,null),e(Et,qT),w(Qs,Et,null),e(Et,PT),w(Ks,Et,null),_(o,Jf,b),_(o,vn,b),e(vn,Vs),e(Vs,ih),w(Ii,ih,null),e(vn,CT),e(vn,lh),e(lh,LT),_(o,Gf,b),_(o,ft,b),w(Ni,ft,null),e(ft,OT),e(ft,kn),e(kn,IT),e(kn,dh),e(dh,NT),e(kn,DT),e(kn,ch),e(ch,ST),e(kn,WT),e(ft,UT),e(ft,Di),e(Di,BT),e(Di,oc),e(oc,RT),e(Di,HT),e(ft,QT),e(ft,Si),e(Si,KT),e(Si,Wi),e(Wi,VT),e(Si,JT),e(ft,GT),w(Js,ft,null),e(ft,XT),e(ft,Mt),w(Ui,Mt,null),e(Mt,YT),e(Mt,yn),e(yn,ZT),e(yn,nc),e(nc,ew),e(yn,tw),e(yn,ph),e(ph,ow),e(yn,nw),e(Mt,sw),w(Gs,Mt,null),e(Mt,rw),w(Xs,Mt,null),e(Mt,aw),w(Ys,Mt,null),_(o,Xf,b),_(o,Tn,b),e(Tn,Zs),e(Zs,hh),w(Bi,hh,null),e(Tn,iw),e(Tn,mh),e(mh,lw),_(o,Yf,b),_(o,et,b),w(Ri,et,null),e(et,dw),e(et,fh),e(fh,cw),e(et,pw),e(et,Hi),e(Hi,hw),e(Hi,sc),e(sc,mw),e(Hi,fw),e(et,uw),e(et,Qi),e(Qi,gw),e(Qi,Ki),e(Ki,_w),e(Qi,bw),e(et,vw),e(et,uh),e(uh,kw),e(et,yw),e(et,lo),e(lo,gh),e(gh,Vi),e(Vi,Tw),e(lo,ww),e(lo,_h),e(_h,Ji),e(Ji,$w),e(lo,Aw),e(lo,bh),e(bh,Gi),e(Gi,Fw),e(lo,xw),e(lo,vh),e(vh,Xi),e(Xi,Ew),e(et,Mw),e(et,Kt),w(Yi,Kt,null),e(Kt,zw),e(Kt,wn),e(wn,jw),e(wn,kh),e(kh,qw),e(wn,Pw),e(wn,yh),e(yh,Cw),e(wn,Lw),e(Kt,Ow),w(er,Kt,null),e(Kt,Iw),w(tr,Kt,null),_(o,Zf,b),_(o,$n,b),e($n,or),e(or,Th),w(Zi,Th,null),e($n,Nw),e($n,wh),e(wh,Dw),_(o,eu,b),_(o,tt,b),w(el,tt,null),e(tt,Sw),e(tt,An),e(An,Ww),e(An,$h),e($h,Uw),e(An,Bw),e(An,Ah),e(Ah,Rw),e(An,Hw),e(tt,Qw),e(tt,tl),e(tl,Kw),e(tl,rc),e(rc,Vw),e(tl,Jw),e(tt,Gw),e(tt,ol),e(ol,Xw),e(ol,nl),e(nl,Yw),e(ol,Zw),e(tt,e$),e(tt,Fh),e(Fh,t$),e(tt,o$),e(tt,co),e(co,xh),e(xh,sl),e(sl,n$),e(co,s$),e(co,Eh),e(Eh,rl),e(rl,r$),e(co,a$),e(co,Mh),e(Mh,al),e(al,i$),e(co,l$),e(co,zh),e(zh,il),e(il,d$),e(tt,c$),e(tt,Vt),w(ll,Vt,null),e(Vt,p$),e(Vt,Fn),e(Fn,h$),e(Fn,jh),e(jh,m$),e(Fn,f$),e(Fn,qh),e(qh,u$),e(Fn,g$),e(Vt,_$),w(nr,Vt,null),e(Vt,b$),w(sr,Vt,null),_(o,tu,b),_(o,xn,b),e(xn,rr),e(rr,Ph),w(dl,Ph,null),e(xn,v$),e(xn,Ch),e(Ch,k$),_(o,ou,b),_(o,ot,b),w(cl,ot,null),e(ot,y$),e(ot,pl),e(pl,T$),e(pl,Lh),e(Lh,w$),e(pl,$$),e(ot,A$),e(ot,hl),e(hl,F$),e(hl,ac),e(ac,x$),e(hl,E$),e(ot,M$),e(ot,ml),e(ml,z$),e(ml,fl),e(fl,j$),e(ml,q$),e(ot,P$),e(ot,Oh),e(Oh,C$),e(ot,L$),e(ot,po),e(po,Ih),e(Ih,ul),e(ul,O$),e(po,I$),e(po,Nh),e(Nh,gl),e(gl,N$),e(po,D$),e(po,Dh),e(Dh,_l),e(_l,S$),e(po,W$),e(po,Sh),e(Sh,bl),e(bl,U$),e(ot,B$),e(ot,Jt),w(vl,Jt,null),e(Jt,R$),e(Jt,En),e(En,H$),e(En,Wh),e(Wh,Q$),e(En,K$),e(En,Uh),e(Uh,V$),e(En,J$),e(Jt,G$),w(ar,Jt,null),e(Jt,X$),w(ir,Jt,null),_(o,nu,b),_(o,Mn,b),e(Mn,lr),e(lr,Bh),w(kl,Bh,null),e(Mn,Y$),e(Mn,Rh),e(Rh,Z$),_(o,su,b),_(o,nt,b),w(yl,nt,null),e(nt,e1),e(nt,Hh),e(Hh,t1),e(nt,o1),e(nt,Tl),e(Tl,n1),e(Tl,ic),e(ic,s1),e(Tl,r1),e(nt,a1),e(nt,wl),e(wl,i1),e(wl,$l),e($l,l1),e(wl,d1),e(nt,c1),e(nt,Qh),e(Qh,p1),e(nt,h1),e(nt,ho),e(ho,Kh),e(Kh,Al),e(Al,m1),e(ho,f1),e(ho,Vh),e(Vh,Fl),e(Fl,u1),e(ho,g1),e(ho,Jh),e(Jh,xl),e(xl,_1),e(ho,b1),e(ho,Gh),e(Gh,El),e(El,v1),e(nt,k1),e(nt,Gt),w(Ml,Gt,null),e(Gt,y1),e(Gt,zn),e(zn,T1),e(zn,Xh),e(Xh,w1),e(zn,$1),e(zn,Yh),e(Yh,A1),e(zn,F1),e(Gt,x1),w(dr,Gt,null),e(Gt,E1),w(cr,Gt,null),_(o,ru,b),_(o,jn,b),e(jn,pr),e(pr,Zh),w(zl,Zh,null),e(jn,M1),e(jn,em),e(em,z1),_(o,au,b),_(o,st,b),w(jl,st,null),e(st,j1),e(st,tm),e(tm,q1),e(st,P1),e(st,ql),e(ql,C1),e(ql,lc),e(lc,L1),e(ql,O1),e(st,I1),e(st,Pl),e(Pl,N1),e(Pl,Cl),e(Cl,D1),e(Pl,S1),e(st,W1),e(st,om),e(om,U1),e(st,B1),e(st,mo),e(mo,nm),e(nm,Ll),e(Ll,R1),e(mo,H1),e(mo,sm),e(sm,Ol),e(Ol,Q1),e(mo,K1),e(mo,rm),e(rm,Il),e(Il,V1),e(mo,J1),e(mo,am),e(am,Nl),e(Nl,G1),e(st,X1),e(st,Xt),w(Dl,Xt,null),e(Xt,Y1),e(Xt,qn),e(qn,Z1),e(qn,im),e(im,e0),e(qn,t0),e(qn,lm),e(lm,o0),e(qn,n0),e(Xt,s0),w(hr,Xt,null),e(Xt,r0),w(mr,Xt,null),_(o,iu,b),_(o,Pn,b),e(Pn,fr),e(fr,dm),w(Sl,dm,null),e(Pn,a0),e(Pn,cm),e(cm,i0),_(o,lu,b),_(o,rt,b),w(Wl,rt,null),e(rt,l0),e(rt,pm),e(pm,d0),e(rt,c0),e(rt,Ul),e(Ul,p0),e(Ul,dc),e(dc,h0),e(Ul,m0),e(rt,f0),e(rt,Bl),e(Bl,u0),e(Bl,Rl),e(Rl,g0),e(Bl,_0),e(rt,b0),e(rt,hm),e(hm,v0),e(rt,k0),e(rt,fo),e(fo,mm),e(mm,Hl),e(Hl,y0),e(fo,T0),e(fo,fm),e(fm,Ql),e(Ql,w0),e(fo,$0),e(fo,um),e(um,Kl),e(Kl,A0),e(fo,F0),e(fo,gm),e(gm,Vl),e(Vl,x0),e(rt,E0),e(rt,Yt),w(Jl,Yt,null),e(Yt,M0),e(Yt,Cn),e(Cn,z0),e(Cn,_m),e(_m,j0),e(Cn,q0),e(Cn,bm),e(bm,P0),e(Cn,C0),e(Yt,L0),w(ur,Yt,null),e(Yt,O0),w(gr,Yt,null),_(o,du,b),_(o,Ln,b),e(Ln,_r),e(_r,vm),w(Gl,vm,null),e(Ln,I0),e(Ln,km),e(km,N0),_(o,cu,b),_(o,at,b),w(Xl,at,null),e(at,D0),e(at,On),e(On,S0),e(On,ym),e(ym,W0),e(On,U0),e(On,Tm),e(Tm,B0),e(On,R0),e(at,H0),e(at,Yl),e(Yl,Q0),e(Yl,cc),e(cc,K0),e(Yl,V0),e(at,J0),e(at,Zl),e(Zl,G0),e(Zl,ed),e(ed,X0),e(Zl,Y0),e(at,Z0),e(at,wm),e(wm,eA),e(at,tA),e(at,uo),e(uo,$m),e($m,td),e(td,oA),e(uo,nA),e(uo,Am),e(Am,od),e(od,sA),e(uo,rA),e(uo,Fm),e(Fm,nd),e(nd,aA),e(uo,iA),e(uo,xm),e(xm,sd),e(sd,lA),e(at,dA),e(at,Zt),w(rd,Zt,null),e(Zt,cA),e(Zt,In),e(In,pA),e(In,Em),e(Em,hA),e(In,mA),e(In,Mm),e(Mm,fA),e(In,uA),e(Zt,gA),w(br,Zt,null),e(Zt,_A),w(vr,Zt,null),pu=!0},p(o,[b]){const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),Wn.$set(ad);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),Rn.$set(zm);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),Qn.$set(jm);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),Jn.$set(qm);const id={};b&2&&(id.$$scope={dirty:b,ctx:o}),Gn.$set(id);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),Yn.$set(Pm);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),Zn.$set(Cm);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),ts.$set(Lm);const ld={};b&2&&(ld.$$scope={dirty:b,ctx:o}),os.$set(ld);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),ns.$set(Om);const dd={};b&2&&(dd.$$scope={dirty:b,ctx:o}),rs.$set(dd);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),as.$set(Im);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),is.$set(Nm);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),ls.$set(Dm);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),ds.$set(Sm);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),ps.$set(Wm);const Um={};b&2&&(Um.$$scope={dirty:b,ctx:o}),hs.$set(Um);const cd={};b&2&&(cd.$$scope={dirty:b,ctx:o}),fs.$set(cd);const Bm={};b&2&&(Bm.$$scope={dirty:b,ctx:o}),us.$set(Bm);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),gs.$set(Rm);const go={};b&2&&(go.$$scope={dirty:b,ctx:o}),bs.$set(go);const Hm={};b&2&&(Hm.$$scope={dirty:b,ctx:o}),vs.$set(Hm);const Qm={};b&2&&(Qm.$$scope={dirty:b,ctx:o}),ks.$set(Qm);const Km={};b&2&&(Km.$$scope={dirty:b,ctx:o}),Ts.$set(Km);const pd={};b&2&&(pd.$$scope={dirty:b,ctx:o}),ws.$set(pd);const Vm={};b&2&&(Vm.$$scope={dirty:b,ctx:o}),$s.$set(Vm);const Jm={};b&2&&(Jm.$$scope={dirty:b,ctx:o}),Fs.$set(Jm);const Gm={};b&2&&(Gm.$$scope={dirty:b,ctx:o}),xs.$set(Gm);const _o={};b&2&&(_o.$$scope={dirty:b,ctx:o}),Es.$set(_o);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),zs.$set(bo);const Xm={};b&2&&(Xm.$$scope={dirty:b,ctx:o}),js.$set(Xm);const Ym={};b&2&&(Ym.$$scope={dirty:b,ctx:o}),qs.$set(Ym);const Zm={};b&2&&(Zm.$$scope={dirty:b,ctx:o}),Ps.$set(Zm);const Nn={};b&2&&(Nn.$$scope={dirty:b,ctx:o}),Ls.$set(Nn);const ef={};b&2&&(ef.$$scope={dirty:b,ctx:o}),Os.$set(ef);const tf={};b&2&&(tf.$$scope={dirty:b,ctx:o}),Is.$set(tf);const hd={};b&2&&(hd.$$scope={dirty:b,ctx:o}),Ns.$set(hd);const of={};b&2&&(of.$$scope={dirty:b,ctx:o}),Ss.$set(of);const nf={};b&2&&(nf.$$scope={dirty:b,ctx:o}),Ws.$set(nf);const sf={};b&2&&(sf.$$scope={dirty:b,ctx:o}),Us.$set(sf);const ut={};b&2&&(ut.$$scope={dirty:b,ctx:o}),Rs.$set(ut);const md={};b&2&&(md.$$scope={dirty:b,ctx:o}),Hs.$set(md);const rf={};b&2&&(rf.$$scope={dirty:b,ctx:o}),Qs.$set(rf);const fd={};b&2&&(fd.$$scope={dirty:b,ctx:o}),Ks.$set(fd);const af={};b&2&&(af.$$scope={dirty:b,ctx:o}),Js.$set(af);const Dn={};b&2&&(Dn.$$scope={dirty:b,ctx:o}),Gs.$set(Dn);const lf={};b&2&&(lf.$$scope={dirty:b,ctx:o}),Xs.$set(lf);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),Ys.$set(ud);const pc={};b&2&&(pc.$$scope={dirty:b,ctx:o}),er.$set(pc);const df={};b&2&&(df.$$scope={dirty:b,ctx:o}),tr.$set(df);const hc={};b&2&&(hc.$$scope={dirty:b,ctx:o}),nr.$set(hc);const cf={};b&2&&(cf.$$scope={dirty:b,ctx:o}),sr.$set(cf);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),ar.$set(gd);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),ir.$set(_d);const pf={};b&2&&(pf.$$scope={dirty:b,ctx:o}),dr.$set(pf);const vo={};b&2&&(vo.$$scope={dirty:b,ctx:o}),cr.$set(vo);const hf={};b&2&&(hf.$$scope={dirty:b,ctx:o}),hr.$set(hf);const Sn={};b&2&&(Sn.$$scope={dirty:b,ctx:o}),mr.$set(Sn);const mf={};b&2&&(mf.$$scope={dirty:b,ctx:o}),ur.$set(mf);const ff={};b&2&&(ff.$$scope={dirty:b,ctx:o}),gr.$set(ff);const uf={};b&2&&(uf.$$scope={dirty:b,ctx:o}),br.$set(uf);const bd={};b&2&&(bd.$$scope={dirty:b,ctx:o}),vr.$set(bd)},i(o){pu||($(l.$$.fragment,o),$(E.$$.fragment,o),$(De.$$.fragment,o),$(Se.$$.fragment,o),$(Wn.$$.fragment,o),$(Br.$$.fragment,o),$(Rr.$$.fragment,o),$(Vr.$$.fragment,o),$(Gr.$$.fragment,o),$(Yr.$$.fragment,o),$(Rn.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(na.$$.fragment,o),$(ra.$$.fragment,o),$(Qn.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(da.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(ga.$$.fragment,o),$(Jn.$$.fragment,o),$(Gn.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(Ta.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(Ma.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(za.$$.fragment,o),$(ja.$$.fragment,o),$(La.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(Oa.$$.fragment,o),$(Ia.$$.fragment,o),$(Wa.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Ua.$$.fragment,o),$(Ba.$$.fragment,o),$(Ka.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(ks.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$(Ts.$$.fragment,o),$(ri.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(Fs.$$.fragment,o),$(pi.$$.fragment,o),$(xs.$$.fragment,o),$(Es.$$.fragment,o),$(hi.$$.fragment,o),$(mi.$$.fragment,o),$(zs.$$.fragment,o),$(bi.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(vi.$$.fragment,o),$(ki.$$.fragment,o),$(Ls.$$.fragment,o),$($i.$$.fragment,o),$(Os.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ai.$$.fragment,o),$(Fi.$$.fragment,o),$(Ss.$$.fragment,o),$(zi.$$.fragment,o),$(Ws.$$.fragment,o),$(Us.$$.fragment,o),$(ji.$$.fragment,o),$(qi.$$.fragment,o),$(Rs.$$.fragment,o),$(Oi.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ii.$$.fragment,o),$(Ni.$$.fragment,o),$(Js.$$.fragment,o),$(Ui.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Bi.$$.fragment,o),$(Ri.$$.fragment,o),$(Yi.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(ll.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(dl.$$.fragment,o),$(cl.$$.fragment,o),$(vl.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(kl.$$.fragment,o),$(yl.$$.fragment,o),$(Ml.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(zl.$$.fragment,o),$(jl.$$.fragment,o),$(Dl.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(Sl.$$.fragment,o),$(Wl.$$.fragment,o),$(Jl.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(rd.$$.fragment,o),$(br.$$.fragment,o),$(vr.$$.fragment,o),pu=!0)},o(o){A(l.$$.fragment,o),A(E.$$.fragment,o),A(De.$$.fragment,o),A(Se.$$.fragment,o),A(Wn.$$.fragment,o),A(Br.$$.fragment,o),A(Rr.$$.fragment,o),A(Vr.$$.fragment,o),A(Gr.$$.fragment,o),A(Yr.$$.fragment,o),A(Rn.$$.fragment,o),A(Zr.$$.fragment,o),A(ea.$$.fragment,o),A(ta.$$.fragment,o),A(na.$$.fragment,o),A(ra.$$.fragment,o),A(Qn.$$.fragment,o),A(aa.$$.fragment,o),A(ia.$$.fragment,o),A(da.$$.fragment,o),A(pa.$$.fragment,o),A(ha.$$.fragment,o),A(ga.$$.fragment,o),A(Jn.$$.fragment,o),A(Gn.$$.fragment,o),A(_a.$$.fragment,o),A(ba.$$.fragment,o),A(Ta.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(wa.$$.fragment,o),A($a.$$.fragment,o),A(Ma.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(za.$$.fragment,o),A(ja.$$.fragment,o),A(La.$$.fragment,o),A(rs.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(ls.$$.fragment,o),A(ds.$$.fragment,o),A(Oa.$$.fragment,o),A(Ia.$$.fragment,o),A(Wa.$$.fragment,o),A(ps.$$.fragment,o),A(hs.$$.fragment,o),A(Ua.$$.fragment,o),A(Ba.$$.fragment,o),A(Ka.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(Va.$$.fragment,o),A(Ja.$$.fragment,o),A(Za.$$.fragment,o),A(bs.$$.fragment,o),A(vs.$$.fragment,o),A(ks.$$.fragment,o),A(ei.$$.fragment,o),A(ti.$$.fragment,o),A(Ts.$$.fragment,o),A(ri.$$.fragment,o),A(ws.$$.fragment,o),A($s.$$.fragment,o),A(ai.$$.fragment,o),A(ii.$$.fragment,o),A(Fs.$$.fragment,o),A(pi.$$.fragment,o),A(xs.$$.fragment,o),A(Es.$$.fragment,o),A(hi.$$.fragment,o),A(mi.$$.fragment,o),A(zs.$$.fragment,o),A(bi.$$.fragment,o),A(js.$$.fragment,o),A(qs.$$.fragment,o),A(Ps.$$.fragment,o),A(vi.$$.fragment,o),A(ki.$$.fragment,o),A(Ls.$$.fragment,o),A($i.$$.fragment,o),A(Os.$$.fragment,o),A(Is.$$.fragment,o),A(Ns.$$.fragment,o),A(Ai.$$.fragment,o),A(Fi.$$.fragment,o),A(Ss.$$.fragment,o),A(zi.$$.fragment,o),A(Ws.$$.fragment,o),A(Us.$$.fragment,o),A(ji.$$.fragment,o),A(qi.$$.fragment,o),A(Rs.$$.fragment,o),A(Oi.$$.fragment,o),A(Hs.$$.fragment,o),A(Qs.$$.fragment,o),A(Ks.$$.fragment,o),A(Ii.$$.fragment,o),A(Ni.$$.fragment,o),A(Js.$$.fragment,o),A(Ui.$$.fragment,o),A(Gs.$$.fragment,o),A(Xs.$$.fragment,o),A(Ys.$$.fragment,o),A(Bi.$$.fragment,o),A(Ri.$$.fragment,o),A(Yi.$$.fragment,o),A(er.$$.fragment,o),A(tr.$$.fragment,o),A(Zi.$$.fragment,o),A(el.$$.fragment,o),A(ll.$$.fragment,o),A(nr.$$.fragment,o),A(sr.$$.fragment,o),A(dl.$$.fragment,o),A(cl.$$.fragment,o),A(vl.$$.fragment,o),A(ar.$$.fragment,o),A(ir.$$.fragment,o),A(kl.$$.fragment,o),A(yl.$$.fragment,o),A(Ml.$$.fragment,o),A(dr.$$.fragment,o),A(cr.$$.fragment,o),A(zl.$$.fragment,o),A(jl.$$.fragment,o),A(Dl.$$.fragment,o),A(hr.$$.fragment,o),A(mr.$$.fragment,o),A(Sl.$$.fragment,o),A(Wl.$$.fragment,o),A(Jl.$$.fragment,o),A(ur.$$.fragment,o),A(gr.$$.fragment,o),A(Gl.$$.fragment,o),A(Xl.$$.fragment,o),A(rd.$$.fragment,o),A(br.$$.fragment,o),A(vr.$$.fragment,o),pu=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(ge),o&&t(W),F(E),o&&t(_e),o&&t(U),o&&t(be),o&&t(B),o&&t(oe),o&&t(q),o&&t(ve),o&&t(H),o&&t(J),o&&t(le),o&&t(C),o&&t(re),o&&t(ke),o&&t(O),o&&t(z),o&&t(Ne),F(De),o&&t(Ke),o&&t(de),F(Se),F(Wn),o&&t(gf),o&&t(Io),F(Br),o&&t(_f),o&&t(Ze),F(Rr),F(Vr),F(Gr),F(Yr),F(Rn),F(Zr),o&&t(bf),o&&t(Do),F(ea),o&&t(vf),o&&t(Nt),F(ta),F(na),F(ra),F(Qn),o&&t(kf),o&&t(So),F(aa),o&&t(yf),o&&t(Wo),F(ia),o&&t(Tf),o&&t(Uo),F(da),o&&t(wf),o&&t(Bo),F(pa),o&&t($f),o&&t(gt),F(ha),F(ga),F(Jn),F(Gn),o&&t(Af),o&&t(Ho),F(_a),o&&t(Ff),o&&t(_t),F(ba),F(Ta),F(Yn),F(Zn),o&&t(xf),o&&t(Vo),F(wa),o&&t(Ef),o&&t(bt),F($a),F(Ma),F(ts),F(os),F(ns),o&&t(Mf),o&&t(Go),F(za),o&&t(zf),o&&t(vt),F(ja),F(La),F(rs),F(as),F(is),F(ls),F(ds),o&&t(jf),o&&t(Yo),F(Oa),o&&t(qf),o&&t(kt),F(Ia),F(Wa),F(ps),F(hs),o&&t(Pf),o&&t(en),F(Ua),o&&t(Cf),o&&t(yt),F(Ba),F(Ka),F(fs),F(us),F(gs),o&&t(Lf),o&&t(on),F(Va),o&&t(Of),o&&t(Tt),F(Ja),F(Za),F(bs),F(vs),F(ks),o&&t(If),o&&t(rn),F(ei),o&&t(Nf),o&&t(lt),F(ti),F(Ts),F(ri),F(ws),F($s),o&&t(Df),o&&t(ln),F(ai),o&&t(Sf),o&&t(dt),F(ii),F(Fs),F(pi),F(xs),F(Es),o&&t(Wf),o&&t(pn),F(hi),o&&t(Uf),o&&t(ct),F(mi),F(zs),F(bi),F(js),F(qs),F(Ps),o&&t(Bf),o&&t(mn),F(vi),o&&t(Rf),o&&t(pt),F(ki),F(Ls),F($i),F(Os),F(Is),F(Ns),o&&t(Hf),o&&t(un),F(Ai),o&&t(Qf),o&&t(ht),F(Fi),F(Ss),F(zi),F(Ws),F(Us),o&&t(Kf),o&&t(_n),F(ji),o&&t(Vf),o&&t(mt),F(qi),F(Rs),F(Oi),F(Hs),F(Qs),F(Ks),o&&t(Jf),o&&t(vn),F(Ii),o&&t(Gf),o&&t(ft),F(Ni),F(Js),F(Ui),F(Gs),F(Xs),F(Ys),o&&t(Xf),o&&t(Tn),F(Bi),o&&t(Yf),o&&t(et),F(Ri),F(Yi),F(er),F(tr),o&&t(Zf),o&&t($n),F(Zi),o&&t(eu),o&&t(tt),F(el),F(ll),F(nr),F(sr),o&&t(tu),o&&t(xn),F(dl),o&&t(ou),o&&t(ot),F(cl),F(vl),F(ar),F(ir),o&&t(nu),o&&t(Mn),F(kl),o&&t(su),o&&t(nt),F(yl),F(Ml),F(dr),F(cr),o&&t(ru),o&&t(jn),F(zl),o&&t(au),o&&t(st),F(jl),F(Dl),F(hr),F(mr),o&&t(iu),o&&t(Pn),F(Sl),o&&t(lu),o&&t(rt),F(Wl),F(Jl),F(ur),F(gr),o&&t(du),o&&t(Ln),F(Gl),o&&t(cu),o&&t(at),F(Xl),F(rd),F(br),F(vr)}}}const _z={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function bz(x){return iM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Az extends nM{constructor(d){super();sM(this,d,bz,gz,rM,{})}}export{Az as default,_z as metadata};
