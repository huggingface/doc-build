import{S as i2,i as l2,s as d2,e as a,k as h,w as v,t as n,M as c2,c as r,d as t,m,a as i,x as T,h as s,b as u,G as e,g as _,y,q as $,o as D,B as E,v as p2,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as nt}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ke}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function h2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Config, DebertaV2Model

# Initializing a DeBERTa-v2 microsoft/deberta-v2-xlarge style configuration
configuration = DebertaV2Config()

# Initializing a model (with random weights) from the microsoft/deberta-v2-xlarge style configuration
model = DebertaV2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Config, DebertaV2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeBERTa-v2 microsoft/deberta-v2-xlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DebertaV2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/deberta-v2-xlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function m2(V){let d,g,c,f,w;return f=new ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function f2(V){let d,g,c,f,w;return f=new ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function u2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function g2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function _2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),f=n("Module"),w=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function b2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function k2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")
model = DebertaV2ForMaskedLM.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;enberry&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function w2(V){let d,g;return d=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">11.85</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function v2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function T2(V){let d,g,c,f,w;return f=new ve({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")
model = DebertaV2ForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function y2(V){let d,g;return d=new ve({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaV2ForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta-v2", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function $2(V){let d,g,c,f,w;return f=new ve({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")
model = DebertaV2ForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta-v2", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function D2(V){let d,g;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-deberta-v2", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function E2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function F2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")
model = DebertaV2ForTokenClassification.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function V2(V){let d,g;return d=new ve({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.61</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function x2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function q2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")
model = DebertaV2ForQuestionAnswering.from_pretrained("hf-internal-testing/tiny-random-deberta-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27;was Jim Henson? Jim Henson was&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function z2(V){let d,g;return d=new ve({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([2])
target_end_index = torch.tensor([9])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">2</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">9</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.47</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function j2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function M2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMultipleChoice
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMultipleChoice.from_pretrained("microsoft/deberta-v2-xlarge")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function C2(V){let d,g,c,f,w,l,p,q,Te,pe,A,ne,oe,F,ye,U,$e,he,I,De,ie,G,Ee,me,N,Fe,fe,W,Ve,ue,te,j,P,le,J,xe,ge,L,qe,de,B,ze,O,je,_e,H,Me,be,C,se,K,Ce,ae,M,Pe,R,Be,ce;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=h(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),F=a("p"),ye=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),$e=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Ee=n("fit()"),me=n(" and "),N=a("code"),Fe=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),Ve=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),qe=n("model(input_ids)"),de=h(),B=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),je=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=h(),M=a("p"),Pe=n(`Note that when creating models and layers with
`),R=a("a"),Be=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);f=s(We,"transformers"),We.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var re=i(p);q=r(re,"LI",{});var Re=i(q);Te=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=m(k),F=r(k,"P",{});var z=i(F);ye=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);$e=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);De=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);Ee=s(Ae,"fit()"),Ae.forEach(t),me=s(z," and "),N=r(z,"CODE",{});var Se=i(N);Fe=s(Se,"predict()"),Se.forEach(t),fe=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);Ve=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);xe=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);qe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=m(S),B=r(S,"LI",{});var Y=i(B);ze=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);Me=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=m(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);Ce=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=m(k),M=r(k,"P",{});var ee=i(M);Pe=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Be=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,q),e(q,Te),e(p,pe),e(p,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ye),e(F,U),e(U,$e),e(F,he),e(F,I),e(I,De),e(F,ie),e(F,G),e(G,Ee),e(F,me),e(F,N),e(N,Fe),e(F,fe),e(F,W),e(W,Ve),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,xe),e(P,ge),e(P,L),e(L,qe),e(j,de),e(j,B),e(B,ze),e(B,O),e(O,je),e(B,_e),e(B,H),e(H,Me),e(j,be),e(j,C),e(C,se),e(C,K),e(K,Ce),_(k,ae,x),_(k,M,x),e(M,Pe),e(M,R),e(R,Be),e(M,ce)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function P2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function B2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function R2(V){let d,g,c,f,w,l,p,q,Te,pe,A,ne,oe,F,ye,U,$e,he,I,De,ie,G,Ee,me,N,Fe,fe,W,Ve,ue,te,j,P,le,J,xe,ge,L,qe,de,B,ze,O,je,_e,H,Me,be,C,se,K,Ce,ae,M,Pe,R,Be,ce;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=h(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),F=a("p"),ye=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),$e=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Ee=n("fit()"),me=n(" and "),N=a("code"),Fe=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),Ve=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),qe=n("model(input_ids)"),de=h(),B=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),je=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=h(),M=a("p"),Pe=n(`Note that when creating models and layers with
`),R=a("a"),Be=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);f=s(We,"transformers"),We.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var re=i(p);q=r(re,"LI",{});var Re=i(q);Te=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=m(k),F=r(k,"P",{});var z=i(F);ye=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);$e=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);De=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);Ee=s(Ae,"fit()"),Ae.forEach(t),me=s(z," and "),N=r(z,"CODE",{});var Se=i(N);Fe=s(Se,"predict()"),Se.forEach(t),fe=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);Ve=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);xe=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);qe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=m(S),B=r(S,"LI",{});var Y=i(B);ze=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);Me=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=m(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);Ce=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=m(k),M=r(k,"P",{});var ee=i(M);Pe=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Be=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,q),e(q,Te),e(p,pe),e(p,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ye),e(F,U),e(U,$e),e(F,he),e(F,I),e(I,De),e(F,ie),e(F,G),e(G,Ee),e(F,me),e(F,N),e(N,Fe),e(F,fe),e(F,W),e(W,Ve),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,xe),e(P,ge),e(P,L),e(L,qe),e(j,de),e(j,B),e(B,ze),e(B,O),e(O,je),e(B,_e),e(B,H),e(H,Me),e(j,be),e(j,C),e(C,se),e(C,K),e(K,Ce),_(k,ae,x),_(k,M,x),e(M,Pe),e(M,R),e(R,Be),e(M,ce)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function A2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function L2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function I2(V){let d,g;return d=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function S2(V){let d,g,c,f,w,l,p,q,Te,pe,A,ne,oe,F,ye,U,$e,he,I,De,ie,G,Ee,me,N,Fe,fe,W,Ve,ue,te,j,P,le,J,xe,ge,L,qe,de,B,ze,O,je,_e,H,Me,be,C,se,K,Ce,ae,M,Pe,R,Be,ce;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=h(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),F=a("p"),ye=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),$e=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Ee=n("fit()"),me=n(" and "),N=a("code"),Fe=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),Ve=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),qe=n("model(input_ids)"),de=h(),B=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),je=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=h(),M=a("p"),Pe=n(`Note that when creating models and layers with
`),R=a("a"),Be=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);f=s(We,"transformers"),We.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var re=i(p);q=r(re,"LI",{});var Re=i(q);Te=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=m(k),F=r(k,"P",{});var z=i(F);ye=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);$e=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);De=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);Ee=s(Ae,"fit()"),Ae.forEach(t),me=s(z," and "),N=r(z,"CODE",{});var Se=i(N);Fe=s(Se,"predict()"),Se.forEach(t),fe=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);Ve=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);xe=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);qe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=m(S),B=r(S,"LI",{});var Y=i(B);ze=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);Me=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=m(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);Ce=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=m(k),M=r(k,"P",{});var ee=i(M);Pe=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Be=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,q),e(q,Te),e(p,pe),e(p,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ye),e(F,U),e(U,$e),e(F,he),e(F,I),e(I,De),e(F,ie),e(F,G),e(G,Ee),e(F,me),e(F,N),e(N,Fe),e(F,fe),e(F,W),e(W,Ve),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,xe),e(P,ge),e(P,L),e(L,qe),e(j,de),e(j,B),e(B,ze),e(B,O),e(O,je),e(B,_e),e(B,H),e(H,Me),e(j,be),e(j,C),e(C,se),e(C,K),e(K,Ce),_(k,ae,x),_(k,M,x),e(M,Pe),e(M,R),e(R,Be),e(M,ce)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function O2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function N2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function W2(V){let d,g;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function H2(V){let d,g,c,f,w,l,p,q,Te,pe,A,ne,oe,F,ye,U,$e,he,I,De,ie,G,Ee,me,N,Fe,fe,W,Ve,ue,te,j,P,le,J,xe,ge,L,qe,de,B,ze,O,je,_e,H,Me,be,C,se,K,Ce,ae,M,Pe,R,Be,ce;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=h(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),F=a("p"),ye=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),$e=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Ee=n("fit()"),me=n(" and "),N=a("code"),Fe=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),Ve=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),qe=n("model(input_ids)"),de=h(),B=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),je=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=h(),M=a("p"),Pe=n(`Note that when creating models and layers with
`),R=a("a"),Be=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);f=s(We,"transformers"),We.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var re=i(p);q=r(re,"LI",{});var Re=i(q);Te=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=m(k),F=r(k,"P",{});var z=i(F);ye=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);$e=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);De=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);Ee=s(Ae,"fit()"),Ae.forEach(t),me=s(z," and "),N=r(z,"CODE",{});var Se=i(N);Fe=s(Se,"predict()"),Se.forEach(t),fe=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);Ve=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);xe=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);qe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=m(S),B=r(S,"LI",{});var Y=i(B);ze=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);Me=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=m(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);Ce=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=m(k),M=r(k,"P",{});var ee=i(M);Pe=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Be=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,q),e(q,Te),e(p,pe),e(p,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ye),e(F,U),e(U,$e),e(F,he),e(F,I),e(I,De),e(F,ie),e(F,G),e(G,Ee),e(F,me),e(F,N),e(N,Fe),e(F,fe),e(F,W),e(W,Ve),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,xe),e(P,ge),e(P,L),e(L,qe),e(j,de),e(j,B),e(B,ze),e(B,O),e(O,je),e(B,_e),e(B,H),e(H,Me),e(j,be),e(j,C),e(C,se),e(C,K),e(K,Ce),_(k,ae,x),_(k,M,x),e(M,Pe),e(M,R),e(R,Be),e(M,ce)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function U2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function K2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Q2(V){let d,g;return d=new ve({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function G2(V){let d,g,c,f,w,l,p,q,Te,pe,A,ne,oe,F,ye,U,$e,he,I,De,ie,G,Ee,me,N,Fe,fe,W,Ve,ue,te,j,P,le,J,xe,ge,L,qe,de,B,ze,O,je,_e,H,Me,be,C,se,K,Ce,ae,M,Pe,R,Be,ce;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),q=a("li"),Te=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=h(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),F=a("p"),ye=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),$e=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Ee=n("fit()"),me=n(" and "),N=a("code"),Fe=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),Ve=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),qe=n("model(input_ids)"),de=h(),B=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),je=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=h(),M=a("p"),Pe=n(`Note that when creating models and layers with
`),R=a("a"),Be=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);f=s(We,"transformers"),We.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var re=i(p);q=r(re,"LI",{});var Re=i(q);Te=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=m(k),F=r(k,"P",{});var z=i(F);ye=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);$e=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);De=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);Ee=s(Ae,"fit()"),Ae.forEach(t),me=s(z," and "),N=r(z,"CODE",{});var Se=i(N);Fe=s(Se,"predict()"),Se.forEach(t),fe=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);Ve=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);xe=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);qe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=m(S),B=r(S,"LI",{});var Y=i(B);ze=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);Me=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=m(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);Ce=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=m(k),M=r(k,"P",{});var ee=i(M);Pe=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Be=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,q),e(q,Te),e(p,pe),e(p,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ye),e(F,U),e(U,$e),e(F,he),e(F,I),e(I,De),e(F,ie),e(F,G),e(G,Ee),e(F,me),e(F,N),e(N,Fe),e(F,fe),e(F,W),e(W,Ve),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,xe),e(P,ge),e(P,L),e(L,qe),e(j,de),e(j,B),e(B,ze),e(B,O),e(O,je),e(B,_e),e(B,H),e(H,Me),e(j,be),e(j,C),e(C,se),e(C,K),e(K,Ce),_(k,ae,x),_(k,M,x),e(M,Pe),e(M,R),e(R,Be),e(M,ce)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function J2(V){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function X2(V){let d,g,c,f,w;return f=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(f,l,p),w=!0},p:we,i(l){w||($(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Y2(V){let d,g;return d=new ve({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){y(d,c,f),g=!0},p:we,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function Z2(V){let d,g,c,f,w,l,p,q,Te,pe,A,ne,oe,F,ye,U,$e,he,I,De,ie,G,Ee,me,N,Fe,fe,W,Ve,ue,te,j,P,le,J,xe,ge,L,qe,de,B,ze,O,je,_e,H,Me,be,C,se,K,Ce,ae,M,Pe,R,Be,ce,k,x,We,re,Re,Ie,z,He,Ue,Ae,Se,Ke,S,X,Le,Oe,Y,Qe,Ne,Z,Ge,ee,Je,rc,os,ic,lc,ns,dc,cc,Il,to,Lo,Wr,ss,pc,Hr,hc,Sl,bt,as,mc,oo,fc,or,uc,gc,rs,_c,bc,kc,no,wc,nr,vc,Tc,sr,yc,$c,Dc,Io,Ol,so,So,Ur,is,Ec,Kr,Fc,Nl,Ze,ls,Vc,ds,xc,cs,qc,zc,jc,Lt,ps,Mc,Qr,Cc,Pc,hs,Gr,Bc,Rc,Jr,Ac,Lc,Oo,ms,Ic,ao,Sc,Xr,Oc,Nc,Yr,Wc,Hc,Uc,$t,fs,Kc,Zr,Qc,Gc,No,Jc,ro,Xc,ei,Yc,Zc,ti,ep,tp,op,ar,us,Wl,io,Wo,oi,gs,np,ni,sp,Hl,kt,_s,ap,bs,rp,ks,ip,lp,dp,It,ws,cp,si,pp,hp,vs,ai,mp,fp,ri,up,gp,Dt,Ts,_p,ii,bp,kp,Ho,wp,lo,vp,li,Tp,yp,di,$p,Dp,Ul,co,Uo,ci,ys,Ep,pi,Fp,Kl,wt,$s,Vp,Ds,xp,Es,qp,zp,jp,Fs,Mp,Vs,Cp,Pp,Bp,Et,xs,Rp,po,Ap,rr,Lp,Ip,hi,Sp,Op,Np,Ko,Wp,Qo,Ql,ho,Go,mi,qs,Hp,fi,Up,Gl,Pt,zs,Kp,ui,Qp,Gp,Ft,js,Jp,gi,Xp,Yp,_i,Zp,eh,Jo,Jl,mo,Xo,bi,Ms,th,ki,oh,Xl,vt,Cs,nh,fo,sh,wi,ah,rh,Ps,ih,lh,dh,Bs,ch,Rs,ph,hh,mh,ct,As,fh,uo,uh,ir,gh,_h,vi,bh,kh,wh,Yo,vh,Zo,Th,en,Yl,go,tn,Ti,Ls,yh,yi,$h,Zl,st,Is,Dh,$i,Eh,Fh,Ss,Vh,Os,xh,qh,zh,Ns,jh,Ws,Mh,Ch,Ph,Xe,Hs,Bh,_o,Rh,lr,Ah,Lh,Di,Ih,Sh,Oh,on,Nh,nn,Wh,sn,Hh,an,Uh,rn,ed,bo,ln,Ei,Us,Kh,Fi,Qh,td,at,Ks,Gh,Vi,Jh,Xh,Qs,Yh,Gs,Zh,em,tm,Js,om,Xs,nm,sm,am,pt,Ys,rm,ko,im,dr,lm,dm,xi,cm,pm,hm,dn,mm,cn,fm,pn,od,wo,hn,qi,Zs,um,zi,gm,nd,rt,ea,_m,vo,bm,ji,km,wm,Mi,vm,Tm,ym,ta,$m,oa,Dm,Em,Fm,na,Vm,sa,xm,qm,zm,ht,aa,jm,To,Mm,cr,Cm,Pm,Ci,Bm,Rm,Am,mn,Lm,fn,Im,un,sd,yo,gn,Pi,ra,Sm,Bi,Om,ad,it,ia,Nm,Ri,Wm,Hm,la,Um,da,Km,Qm,Gm,ca,Jm,pa,Xm,Ym,Zm,Vt,ha,ef,$o,tf,pr,of,nf,Ai,sf,af,rf,_n,lf,bn,rd,Do,kn,Li,ma,df,Ii,cf,id,lt,fa,pf,ua,hf,ga,mf,ff,uf,_a,gf,ba,_f,bf,kf,wn,wf,xt,ka,vf,Eo,Tf,hr,yf,$f,Si,Df,Ef,Ff,vn,Vf,Tn,ld,Fo,yn,Oi,wa,xf,Ni,qf,dd,Bt,va,zf,Wi,jf,Mf,qt,Ta,Cf,Hi,Pf,Bf,ya,Rf,Ui,Af,Lf,If,Tt,Sf,Ki,Of,Nf,Qi,Wf,Hf,Gi,Uf,Kf,Ji,Qf,Gf,cd,Vo,$n,Xi,$a,Jf,Yi,Xf,pd,dt,Da,Yf,xo,Zf,Zi,eu,tu,Ea,ou,nu,su,Fa,au,Va,ru,iu,lu,Dn,du,mt,xa,cu,qo,pu,mr,hu,mu,el,fu,uu,gu,En,_u,Fn,bu,Vn,hd,zo,xn,tl,qa,ku,ol,wu,md,et,za,vu,nl,Tu,yu,ja,$u,Ma,Du,Eu,Fu,Ca,Vu,Pa,xu,qu,zu,qn,ju,ft,Ba,Mu,jo,Cu,fr,Pu,Bu,sl,Ru,Au,Lu,zn,Iu,jn,Su,Mn,fd,Mo,Cn,al,Ra,Ou,rl,Nu,ud,tt,Aa,Wu,il,Hu,Uu,La,Ku,Ia,Qu,Gu,Ju,Sa,Xu,Oa,Yu,Zu,eg,Pn,tg,ut,Na,og,Co,ng,ur,sg,ag,ll,rg,ig,lg,Bn,dg,Rn,cg,An,gd,Po,Ln,dl,Wa,pg,cl,hg,_d,ot,Ha,mg,Bo,fg,pl,ug,gg,hl,_g,bg,kg,Ua,wg,Ka,vg,Tg,yg,Qa,$g,Ga,Dg,Eg,Fg,In,Vg,gt,Ja,xg,Ro,qg,gr,zg,jg,ml,Mg,Cg,Pg,Sn,Bg,On,Rg,Nn,bd;return l=new Ye({}),F=new Ye({}),ss=new Ye({}),as=new Q({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L42"}}),Io=new ke({props:{anchor:"transformers.DebertaV2Config.example",$$slots:{default:[h2]},$$scope:{ctx:V}}}),is=new Ye({}),ls=new Q({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L56"}}),ps=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L184",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new Q({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L208",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L234",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new ke({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[m2]},$$scope:{ctx:V}}}),us=new Q({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L267"}}),gs=new Ye({}),_s=new Q({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2TokenizerFast.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L63"}}),ws=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L153",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L203",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ho=new ke({props:{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[f2]},$$scope:{ctx:V}}}),ys=new Ye({}),$s=new Q({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1027"}}),xs=new Q({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1051",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new nt({props:{$$slots:{default:[u2]},$$scope:{ctx:V}}}),Qo=new ke({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[g2]},$$scope:{ctx:V}}}),qs=new Ye({}),zs=new Q({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L931"}}),js=new Q({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/main/src/torch/nn/modules/module.py#L233"}}),Jo=new nt({props:{$$slots:{default:[_2]},$$scope:{ctx:V}}}),Ms=new Ye({}),Cs=new Q({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1140"}}),As=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Yo=new nt({props:{$$slots:{default:[b2]},$$scope:{ctx:V}}}),Zo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[k2]},$$scope:{ctx:V}}}),en=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[w2]},$$scope:{ctx:V}}}),Ls=new Ye({}),Is=new Q({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1279"}}),Hs=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1304",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),on=new nt({props:{$$slots:{default:[v2]},$$scope:{ctx:V}}}),nn=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[T2]},$$scope:{ctx:V}}}),sn=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[y2]},$$scope:{ctx:V}}}),an=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[$2]},$$scope:{ctx:V}}}),rn=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[D2]},$$scope:{ctx:V}}}),Us=new Ye({}),Ks=new Q({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1401"}}),Ys=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),dn=new nt({props:{$$slots:{default:[E2]},$$scope:{ctx:V}}}),cn=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[F2]},$$scope:{ctx:V}}}),pn=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[V2]},$$scope:{ctx:V}}}),Zs=new Ye({}),ea=new Q({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1480"}}),aa=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1493",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),mn=new nt({props:{$$slots:{default:[x2]},$$scope:{ctx:V}}}),fn=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[q2]},$$scope:{ctx:V}}}),un=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[z2]},$$scope:{ctx:V}}}),ra=new Ye({}),ia=new Q({props:{name:"class transformers.DebertaV2ForMultipleChoice",anchor:"transformers.DebertaV2ForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1584"}}),ha=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1608",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),_n=new nt({props:{$$slots:{default:[j2]},$$scope:{ctx:V}}}),bn=new ke({props:{anchor:"transformers.DebertaV2ForMultipleChoice.forward.example",$$slots:{default:[M2]},$$scope:{ctx:V}}}),ma=new Ye({}),fa=new Q({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1189"}}),wn=new nt({props:{$$slots:{default:[C2]},$$scope:{ctx:V}}}),ka=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1195",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new nt({props:{$$slots:{default:[P2]},$$scope:{ctx:V}}}),Tn=new ke({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[B2]},$$scope:{ctx:V}}}),wa=new Ye({}),va=new Q({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1088"}}),Ta=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L559",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),$a=new Ye({}),Da=new Q({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1238"}}),Dn=new nt({props:{$$slots:{default:[R2]},$$scope:{ctx:V}}}),xa=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1254",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),En=new nt({props:{$$slots:{default:[A2]},$$scope:{ctx:V}}}),Fn=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[L2]},$$scope:{ctx:V}}}),Vn=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[I2]},$$scope:{ctx:V}}}),qa=new Ye({}),za=new Q({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1322"}}),qn=new nt({props:{$$slots:{default:[S2]},$$scope:{ctx:V}}}),Ba=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1340",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),zn=new nt({props:{$$slots:{default:[O2]},$$scope:{ctx:V}}}),jn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[N2]},$$scope:{ctx:V}}}),Mn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[W2]},$$scope:{ctx:V}}}),Ra=new Ye({}),Aa=new Q({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1411"}}),Pn=new nt({props:{$$slots:{default:[H2]},$$scope:{ctx:V}}}),Na=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1423",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Bn=new nt({props:{$$slots:{default:[U2]},$$scope:{ctx:V}}}),Rn=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[K2]},$$scope:{ctx:V}}}),An=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[Q2]},$$scope:{ctx:V}}}),Wa=new Ye({}),Ha=new Q({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1490"}}),In=new nt({props:{$$slots:{default:[G2]},$$scope:{ctx:V}}}),Ja=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1501",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Sn=new nt({props:{$$slots:{default:[J2]},$$scope:{ctx:V}}}),On=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[X2]},$$scope:{ctx:V}}}),Nn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[Y2]},$$scope:{ctx:V}}}),{c(){d=a("meta"),g=h(),c=a("h1"),f=a("a"),w=a("span"),v(l.$$.fragment),p=h(),q=a("span"),Te=n("DeBERTa-v2"),pe=h(),A=a("h2"),ne=a("a"),oe=a("span"),v(F.$$.fragment),ye=h(),U=a("span"),$e=n("Overview"),he=h(),I=a("p"),De=n("The DeBERTa model was proposed in "),ie=a("a"),G=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Ee=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),me=h(),N=a("p"),Fe=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),fe=h(),W=a("p"),Ve=n("The abstract from the paper is the following:"),ue=h(),te=a("p"),j=a("em"),P=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),le=a("a"),J=n("https://github.com/microsoft/DeBERTa"),xe=n("."),ge=h(),L=a("p"),qe=n("The following information is visible directly on the "),de=a("a"),B=n(`original implementation
repository`),ze=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),O=a("a"),je=n("blog"),_e=h(),H=a("p"),Me=n("New in v2:"),be=h(),C=a("ul"),se=a("li"),K=a("strong"),Ce=n("Vocabulary"),ae=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),M=a("a"),Pe=n("sentencepiece-based"),R=n(" tokenizer."),Be=h(),ce=a("li"),k=a("strong"),x=n("nGiE(nGram Induced Input Encoding)"),We=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),re=h(),Re=a("li"),Ie=a("strong"),z=n("Sharing position projection matrix with content projection matrix in attention layer"),He=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Ue=h(),Ae=a("li"),Se=a("strong"),Ke=n("Apply bucket to encode relative positions"),S=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),X=h(),Le=a("li"),Oe=a("strong"),Y=n("900M model & 1.5B model"),Qe=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Ne=h(),Z=a("p"),Ge=n("This model was contributed by "),ee=a("a"),Je=n("DeBERTa"),rc=n(`. This model TF 2.0 implementation was
contributed by `),os=a("a"),ic=n("kamalkraj"),lc=n(". The original code can be found "),ns=a("a"),dc=n("here"),cc=n("."),Il=h(),to=a("h2"),Lo=a("a"),Wr=a("span"),v(ss.$$.fragment),pc=h(),Hr=a("span"),hc=n("DebertaV2Config"),Sl=h(),bt=a("div"),v(as.$$.fragment),mc=h(),oo=a("p"),fc=n("This is the configuration class to store the configuration of a "),or=a("a"),uc=n("DebertaV2Model"),gc=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),rs=a("a"),_c=n("microsoft/deberta-v2-xlarge"),bc=n(" architecture."),kc=h(),no=a("p"),wc=n("Configuration objects inherit from "),nr=a("a"),vc=n("PretrainedConfig"),Tc=n(` and can be used to control the model outputs. Read the
documentation from `),sr=a("a"),yc=n("PretrainedConfig"),$c=n(" for more information."),Dc=h(),v(Io.$$.fragment),Ol=h(),so=a("h2"),So=a("a"),Ur=a("span"),v(is.$$.fragment),Ec=h(),Kr=a("span"),Fc=n("DebertaV2Tokenizer"),Nl=h(),Ze=a("div"),v(ls.$$.fragment),Vc=h(),ds=a("p"),xc=n("Constructs a DeBERTa-v2 tokenizer. Based on "),cs=a("a"),qc=n("SentencePiece"),zc=n("."),jc=h(),Lt=a("div"),v(ps.$$.fragment),Mc=h(),Qr=a("p"),Cc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Pc=h(),hs=a("ul"),Gr=a("li"),Bc=n("single sequence: [CLS] X [SEP]"),Rc=h(),Jr=a("li"),Ac=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Lc=h(),Oo=a("div"),v(ms.$$.fragment),Ic=h(),ao=a("p"),Sc=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Xr=a("code"),Oc=n("prepare_for_model"),Nc=n(" or "),Yr=a("code"),Wc=n("encode_plus"),Hc=n(" methods."),Uc=h(),$t=a("div"),v(fs.$$.fragment),Kc=h(),Zr=a("p"),Qc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Gc=h(),v(No.$$.fragment),Jc=h(),ro=a("p"),Xc=n("If "),ei=a("code"),Yc=n("token_ids_1"),Zc=n(" is "),ti=a("code"),ep=n("None"),tp=n(", this method only returns the first portion of the mask (0s)."),op=h(),ar=a("div"),v(us.$$.fragment),Wl=h(),io=a("h2"),Wo=a("a"),oi=a("span"),v(gs.$$.fragment),np=h(),ni=a("span"),sp=n("DebertaV2TokenizerFast"),Hl=h(),kt=a("div"),v(_s.$$.fragment),ap=h(),bs=a("p"),rp=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),ks=a("a"),ip=n("SentencePiece"),lp=n("."),dp=h(),It=a("div"),v(ws.$$.fragment),cp=h(),si=a("p"),pp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),hp=h(),vs=a("ul"),ai=a("li"),mp=n("single sequence: [CLS] X [SEP]"),fp=h(),ri=a("li"),up=n("pair of sequences: [CLS] A [SEP] B [SEP]"),gp=h(),Dt=a("div"),v(Ts.$$.fragment),_p=h(),ii=a("p"),bp=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),kp=h(),v(Ho.$$.fragment),wp=h(),lo=a("p"),vp=n("If "),li=a("code"),Tp=n("token_ids_1"),yp=n(" is "),di=a("code"),$p=n("None"),Dp=n(", this method only returns the first portion of the mask (0s)."),Ul=h(),co=a("h2"),Uo=a("a"),ci=a("span"),v(ys.$$.fragment),Ep=h(),pi=a("span"),Fp=n("DebertaV2Model"),Kl=h(),wt=a("div"),v($s.$$.fragment),Vp=h(),Ds=a("p"),xp=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Es=a("a"),qp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),zp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),jp=h(),Fs=a("p"),Mp=n("This model is also a PyTorch "),Vs=a("a"),Cp=n("torch.nn.Module"),Pp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bp=h(),Et=a("div"),v(xs.$$.fragment),Rp=h(),po=a("p"),Ap=n("The "),rr=a("a"),Lp=n("DebertaV2Model"),Ip=n(" forward method, overrides the "),hi=a("code"),Sp=n("__call__"),Op=n(" special method."),Np=h(),v(Ko.$$.fragment),Wp=h(),v(Qo.$$.fragment),Ql=h(),ho=a("h2"),Go=a("a"),mi=a("span"),v(qs.$$.fragment),Hp=h(),fi=a("span"),Up=n("DebertaV2PreTrainedModel"),Gl=h(),Pt=a("div"),v(zs.$$.fragment),Kp=h(),ui=a("p"),Qp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Gp=h(),Ft=a("div"),v(js.$$.fragment),Jp=h(),gi=a("p"),Xp=n("Defines the computation performed at every call."),Yp=h(),_i=a("p"),Zp=n("Should be overridden by all subclasses."),eh=h(),v(Jo.$$.fragment),Jl=h(),mo=a("h2"),Xo=a("a"),bi=a("span"),v(Ms.$$.fragment),th=h(),ki=a("span"),oh=n("DebertaV2ForMaskedLM"),Xl=h(),vt=a("div"),v(Cs.$$.fragment),nh=h(),fo=a("p"),sh=n("DeBERTa Model with a "),wi=a("code"),ah=n("language modeling"),rh=n(` head on top.
The DeBERTa model was proposed in `),Ps=a("a"),ih=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dh=h(),Bs=a("p"),ch=n("This model is also a PyTorch "),Rs=a("a"),ph=n("torch.nn.Module"),hh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh=h(),ct=a("div"),v(As.$$.fragment),fh=h(),uo=a("p"),uh=n("The "),ir=a("a"),gh=n("DebertaV2ForMaskedLM"),_h=n(" forward method, overrides the "),vi=a("code"),bh=n("__call__"),kh=n(" special method."),wh=h(),v(Yo.$$.fragment),vh=h(),v(Zo.$$.fragment),Th=h(),v(en.$$.fragment),Yl=h(),go=a("h2"),tn=a("a"),Ti=a("span"),v(Ls.$$.fragment),yh=h(),yi=a("span"),$h=n("DebertaV2ForSequenceClassification"),Zl=h(),st=a("div"),v(Is.$$.fragment),Dh=h(),$i=a("p"),Eh=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Fh=h(),Ss=a("p"),Vh=n("The DeBERTa model was proposed in "),Os=a("a"),xh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zh=h(),Ns=a("p"),jh=n("This model is also a PyTorch "),Ws=a("a"),Mh=n("torch.nn.Module"),Ch=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ph=h(),Xe=a("div"),v(Hs.$$.fragment),Bh=h(),_o=a("p"),Rh=n("The "),lr=a("a"),Ah=n("DebertaV2ForSequenceClassification"),Lh=n(" forward method, overrides the "),Di=a("code"),Ih=n("__call__"),Sh=n(" special method."),Oh=h(),v(on.$$.fragment),Nh=h(),v(nn.$$.fragment),Wh=h(),v(sn.$$.fragment),Hh=h(),v(an.$$.fragment),Uh=h(),v(rn.$$.fragment),ed=h(),bo=a("h2"),ln=a("a"),Ei=a("span"),v(Us.$$.fragment),Kh=h(),Fi=a("span"),Qh=n("DebertaV2ForTokenClassification"),td=h(),at=a("div"),v(Ks.$$.fragment),Gh=h(),Vi=a("p"),Jh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Xh=h(),Qs=a("p"),Yh=n("The DeBERTa model was proposed in "),Gs=a("a"),Zh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),em=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tm=h(),Js=a("p"),om=n("This model is also a PyTorch "),Xs=a("a"),nm=n("torch.nn.Module"),sm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=h(),pt=a("div"),v(Ys.$$.fragment),rm=h(),ko=a("p"),im=n("The "),dr=a("a"),lm=n("DebertaV2ForTokenClassification"),dm=n(" forward method, overrides the "),xi=a("code"),cm=n("__call__"),pm=n(" special method."),hm=h(),v(dn.$$.fragment),mm=h(),v(cn.$$.fragment),fm=h(),v(pn.$$.fragment),od=h(),wo=a("h2"),hn=a("a"),qi=a("span"),v(Zs.$$.fragment),um=h(),zi=a("span"),gm=n("DebertaV2ForQuestionAnswering"),nd=h(),rt=a("div"),v(ea.$$.fragment),_m=h(),vo=a("p"),bm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ji=a("code"),km=n("span start logits"),wm=n(" and "),Mi=a("code"),vm=n("span end logits"),Tm=n(")."),ym=h(),ta=a("p"),$m=n("The DeBERTa model was proposed in "),oa=a("a"),Dm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Em=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fm=h(),na=a("p"),Vm=n("This model is also a PyTorch "),sa=a("a"),xm=n("torch.nn.Module"),qm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zm=h(),ht=a("div"),v(aa.$$.fragment),jm=h(),To=a("p"),Mm=n("The "),cr=a("a"),Cm=n("DebertaV2ForQuestionAnswering"),Pm=n(" forward method, overrides the "),Ci=a("code"),Bm=n("__call__"),Rm=n(" special method."),Am=h(),v(mn.$$.fragment),Lm=h(),v(fn.$$.fragment),Im=h(),v(un.$$.fragment),sd=h(),yo=a("h2"),gn=a("a"),Pi=a("span"),v(ra.$$.fragment),Sm=h(),Bi=a("span"),Om=n("DebertaV2ForMultipleChoice"),ad=h(),it=a("div"),v(ia.$$.fragment),Nm=h(),Ri=a("p"),Wm=n(`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hm=h(),la=a("p"),Um=n("The DeBERTa model was proposed in "),da=a("a"),Km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gm=h(),ca=a("p"),Jm=n("This model is also a PyTorch "),pa=a("a"),Xm=n("torch.nn.Module"),Ym=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zm=h(),Vt=a("div"),v(ha.$$.fragment),ef=h(),$o=a("p"),tf=n("The "),pr=a("a"),of=n("DebertaV2ForMultipleChoice"),nf=n(" forward method, overrides the "),Ai=a("code"),sf=n("__call__"),af=n(" special method."),rf=h(),v(_n.$$.fragment),lf=h(),v(bn.$$.fragment),rd=h(),Do=a("h2"),kn=a("a"),Li=a("span"),v(ma.$$.fragment),df=h(),Ii=a("span"),cf=n("TFDebertaV2Model"),id=h(),lt=a("div"),v(fa.$$.fragment),pf=h(),ua=a("p"),hf=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ga=a("a"),mf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ff=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),uf=h(),_a=a("p"),gf=n("This model is also a "),ba=a("a"),_f=n("tf.keras.Model"),bf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=h(),v(wn.$$.fragment),wf=h(),xt=a("div"),v(ka.$$.fragment),vf=h(),Eo=a("p"),Tf=n("The "),hr=a("a"),yf=n("TFDebertaV2Model"),$f=n(" forward method, overrides the "),Si=a("code"),Df=n("__call__"),Ef=n(" special method."),Ff=h(),v(vn.$$.fragment),Vf=h(),v(Tn.$$.fragment),ld=h(),Fo=a("h2"),yn=a("a"),Oi=a("span"),v(wa.$$.fragment),xf=h(),Ni=a("span"),qf=n("TFDebertaV2PreTrainedModel"),dd=h(),Bt=a("div"),v(va.$$.fragment),zf=h(),Wi=a("p"),jf=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Mf=h(),qt=a("div"),v(Ta.$$.fragment),Cf=h(),Hi=a("p"),Pf=n("Calls the model on new inputs and returns the outputs as tensors."),Bf=h(),ya=a("p"),Rf=n("In this case "),Ui=a("code"),Af=n("call()"),Lf=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),If=h(),Tt=a("p"),Sf=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Ki=a("code"),Of=n("tf.keras.Model"),Nf=n(`.
To call a model on an input, always use the `),Qi=a("code"),Wf=n("__call__()"),Hf=n(` method,
i.e. `),Gi=a("code"),Uf=n("model(inputs)"),Kf=n(", which relies on the underlying "),Ji=a("code"),Qf=n("call()"),Gf=n(" method."),cd=h(),Vo=a("h2"),$n=a("a"),Xi=a("span"),v($a.$$.fragment),Jf=h(),Yi=a("span"),Xf=n("TFDebertaV2ForMaskedLM"),pd=h(),dt=a("div"),v(Da.$$.fragment),Yf=h(),xo=a("p"),Zf=n("DeBERTa Model with a "),Zi=a("code"),eu=n("language modeling"),tu=n(` head on top.
The DeBERTa model was proposed in `),Ea=a("a"),ou=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),nu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),su=h(),Fa=a("p"),au=n("This model is also a "),Va=a("a"),ru=n("tf.keras.Model"),iu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lu=h(),v(Dn.$$.fragment),du=h(),mt=a("div"),v(xa.$$.fragment),cu=h(),qo=a("p"),pu=n("The "),mr=a("a"),hu=n("TFDebertaV2ForMaskedLM"),mu=n(" forward method, overrides the "),el=a("code"),fu=n("__call__"),uu=n(" special method."),gu=h(),v(En.$$.fragment),_u=h(),v(Fn.$$.fragment),bu=h(),v(Vn.$$.fragment),hd=h(),zo=a("h2"),xn=a("a"),tl=a("span"),v(qa.$$.fragment),ku=h(),ol=a("span"),wu=n("TFDebertaV2ForSequenceClassification"),md=h(),et=a("div"),v(za.$$.fragment),vu=h(),nl=a("p"),Tu=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yu=h(),ja=a("p"),$u=n("The DeBERTa model was proposed in "),Ma=a("a"),Du=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Eu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fu=h(),Ca=a("p"),Vu=n("This model is also a "),Pa=a("a"),xu=n("tf.keras.Model"),qu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zu=h(),v(qn.$$.fragment),ju=h(),ft=a("div"),v(Ba.$$.fragment),Mu=h(),jo=a("p"),Cu=n("The "),fr=a("a"),Pu=n("TFDebertaV2ForSequenceClassification"),Bu=n(" forward method, overrides the "),sl=a("code"),Ru=n("__call__"),Au=n(" special method."),Lu=h(),v(zn.$$.fragment),Iu=h(),v(jn.$$.fragment),Su=h(),v(Mn.$$.fragment),fd=h(),Mo=a("h2"),Cn=a("a"),al=a("span"),v(Ra.$$.fragment),Ou=h(),rl=a("span"),Nu=n("TFDebertaV2ForTokenClassification"),ud=h(),tt=a("div"),v(Aa.$$.fragment),Wu=h(),il=a("p"),Hu=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Uu=h(),La=a("p"),Ku=n("The DeBERTa model was proposed in "),Ia=a("a"),Qu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ju=h(),Sa=a("p"),Xu=n("This model is also a "),Oa=a("a"),Yu=n("tf.keras.Model"),Zu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eg=h(),v(Pn.$$.fragment),tg=h(),ut=a("div"),v(Na.$$.fragment),og=h(),Co=a("p"),ng=n("The "),ur=a("a"),sg=n("TFDebertaV2ForTokenClassification"),ag=n(" forward method, overrides the "),ll=a("code"),rg=n("__call__"),ig=n(" special method."),lg=h(),v(Bn.$$.fragment),dg=h(),v(Rn.$$.fragment),cg=h(),v(An.$$.fragment),gd=h(),Po=a("h2"),Ln=a("a"),dl=a("span"),v(Wa.$$.fragment),pg=h(),cl=a("span"),hg=n("TFDebertaV2ForQuestionAnswering"),_d=h(),ot=a("div"),v(Ha.$$.fragment),mg=h(),Bo=a("p"),fg=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pl=a("code"),ug=n("span start logits"),gg=n(" and "),hl=a("code"),_g=n("span end logits"),bg=n(")."),kg=h(),Ua=a("p"),wg=n("The DeBERTa model was proposed in "),Ka=a("a"),vg=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tg=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yg=h(),Qa=a("p"),$g=n("This model is also a "),Ga=a("a"),Dg=n("tf.keras.Model"),Eg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fg=h(),v(In.$$.fragment),Vg=h(),gt=a("div"),v(Ja.$$.fragment),xg=h(),Ro=a("p"),qg=n("The "),gr=a("a"),zg=n("TFDebertaV2ForQuestionAnswering"),jg=n(" forward method, overrides the "),ml=a("code"),Mg=n("__call__"),Cg=n(" special method."),Pg=h(),v(Sn.$$.fragment),Bg=h(),v(On.$$.fragment),Rg=h(),v(Nn.$$.fragment),this.h()},l(o){const b=c2('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var Xa=i(c);f=r(Xa,"A",{id:!0,class:!0,href:!0});var fl=i(f);w=r(fl,"SPAN",{});var ul=i(w);T(l.$$.fragment,ul),ul.forEach(t),fl.forEach(t),p=m(Xa),q=r(Xa,"SPAN",{});var gl=i(q);Te=s(gl,"DeBERTa-v2"),gl.forEach(t),Xa.forEach(t),pe=m(o),A=r(o,"H2",{class:!0});var Ya=i(A);ne=r(Ya,"A",{id:!0,class:!0,href:!0});var _l=i(ne);oe=r(_l,"SPAN",{});var bl=i(oe);T(F.$$.fragment,bl),bl.forEach(t),_l.forEach(t),ye=m(Ya),U=r(Ya,"SPAN",{});var kl=i(U);$e=s(kl,"Overview"),kl.forEach(t),Ya.forEach(t),he=m(o),I=r(o,"P",{});var Za=i(I);De=s(Za,"The DeBERTa model was proposed in "),ie=r(Za,"A",{href:!0,rel:!0});var wl=i(ie);G=s(wl,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),wl.forEach(t),Ee=s(Za,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Za.forEach(t),me=m(o),N=r(o,"P",{});var vl=i(N);Fe=s(vl,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),vl.forEach(t),fe=m(o),W=r(o,"P",{});var Tl=i(W);Ve=s(Tl,"The abstract from the paper is the following:"),Tl.forEach(t),ue=m(o),te=r(o,"P",{});var yl=i(te);j=r(yl,"EM",{});var er=i(j);P=s(er,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),le=r(er,"A",{href:!0,rel:!0});var $l=i(le);J=s($l,"https://github.com/microsoft/DeBERTa"),$l.forEach(t),xe=s(er,"."),er.forEach(t),yl.forEach(t),ge=m(o),L=r(o,"P",{});var Wn=i(L);qe=s(Wn,"The following information is visible directly on the "),de=r(Wn,"A",{href:!0,rel:!0});var Dl=i(de);B=s(Dl,`original implementation
repository`),Dl.forEach(t),ze=s(Wn,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),O=r(Wn,"A",{href:!0,rel:!0});var El=i(O);je=s(El,"blog"),El.forEach(t),Wn.forEach(t),_e=m(o),H=r(o,"P",{});var Fl=i(H);Me=s(Fl,"New in v2:"),Fl.forEach(t),be=m(o),C=r(o,"UL",{});var yt=i(C);se=r(yt,"LI",{});var Hn=i(se);K=r(Hn,"STRONG",{});var Vl=i(K);Ce=s(Vl,"Vocabulary"),Vl.forEach(t),ae=s(Hn,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),M=r(Hn,"A",{href:!0,rel:!0});var xl=i(M);Pe=s(xl,"sentencepiece-based"),xl.forEach(t),R=s(Hn," tokenizer."),Hn.forEach(t),Be=m(yt),ce=r(yt,"LI",{});var _r=i(ce);k=r(_r,"STRONG",{});var ql=i(k);x=s(ql,"nGiE(nGram Induced Input Encoding)"),ql.forEach(t),We=s(_r,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),_r.forEach(t),re=m(yt),Re=r(yt,"LI",{});var br=i(Re);Ie=r(br,"STRONG",{});var zl=i(Ie);z=s(zl,"Sharing position projection matrix with content projection matrix in attention layer"),zl.forEach(t),He=s(br,` Based on previous
experiments, this can save parameters without affecting the performance.`),br.forEach(t),Ue=m(yt),Ae=r(yt,"LI",{});var kr=i(Ae);Se=r(kr,"STRONG",{});var jl=i(Se);Ke=s(jl,"Apply bucket to encode relative positions"),jl.forEach(t),S=s(kr,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),kr.forEach(t),X=m(yt),Le=r(yt,"LI",{});var wr=i(Le);Oe=r(wr,"STRONG",{});var Ml=i(Oe);Y=s(Ml,"900M model & 1.5B model"),Ml.forEach(t),Qe=s(wr,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),wr.forEach(t),yt.forEach(t),Ne=m(o),Z=r(o,"P",{});var Rt=i(Z);Ge=s(Rt,"This model was contributed by "),ee=r(Rt,"A",{href:!0,rel:!0});var Cl=i(ee);Je=s(Cl,"DeBERTa"),Cl.forEach(t),rc=s(Rt,`. This model TF 2.0 implementation was
contributed by `),os=r(Rt,"A",{href:!0,rel:!0});var Pl=i(os);ic=s(Pl,"kamalkraj"),Pl.forEach(t),lc=s(Rt,". The original code can be found "),ns=r(Rt,"A",{href:!0,rel:!0});var Bl=i(ns);dc=s(Bl,"here"),Bl.forEach(t),cc=s(Rt,"."),Rt.forEach(t),Il=m(o),to=r(o,"H2",{class:!0});var tr=i(to);Lo=r(tr,"A",{id:!0,class:!0,href:!0});var Rl=i(Lo);Wr=r(Rl,"SPAN",{});var Al=i(Wr);T(ss.$$.fragment,Al),Al.forEach(t),Rl.forEach(t),pc=m(tr),Hr=r(tr,"SPAN",{});var Ll=i(Hr);hc=s(Ll,"DebertaV2Config"),Ll.forEach(t),tr.forEach(t),Sl=m(o),bt=r(o,"DIV",{class:!0});var At=i(bt);T(as.$$.fragment,At),mc=m(At),oo=r(At,"P",{});var Ao=i(oo);fc=s(Ao,"This is the configuration class to store the configuration of a "),or=r(Ao,"A",{href:!0});var Ag=i(or);uc=s(Ag,"DebertaV2Model"),Ag.forEach(t),gc=s(Ao,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),rs=r(Ao,"A",{href:!0,rel:!0});var Lg=i(rs);_c=s(Lg,"microsoft/deberta-v2-xlarge"),Lg.forEach(t),bc=s(Ao," architecture."),Ao.forEach(t),kc=m(At),no=r(At,"P",{});var vr=i(no);wc=s(vr,"Configuration objects inherit from "),nr=r(vr,"A",{href:!0});var Ig=i(nr);vc=s(Ig,"PretrainedConfig"),Ig.forEach(t),Tc=s(vr,` and can be used to control the model outputs. Read the
documentation from `),sr=r(vr,"A",{href:!0});var Sg=i(sr);yc=s(Sg,"PretrainedConfig"),Sg.forEach(t),$c=s(vr," for more information."),vr.forEach(t),Dc=m(At),T(Io.$$.fragment,At),At.forEach(t),Ol=m(o),so=r(o,"H2",{class:!0});var kd=i(so);So=r(kd,"A",{id:!0,class:!0,href:!0});var Og=i(So);Ur=r(Og,"SPAN",{});var Ng=i(Ur);T(is.$$.fragment,Ng),Ng.forEach(t),Og.forEach(t),Ec=m(kd),Kr=r(kd,"SPAN",{});var Wg=i(Kr);Fc=s(Wg,"DebertaV2Tokenizer"),Wg.forEach(t),kd.forEach(t),Nl=m(o),Ze=r(o,"DIV",{class:!0});var zt=i(Ze);T(ls.$$.fragment,zt),Vc=m(zt),ds=r(zt,"P",{});var wd=i(ds);xc=s(wd,"Constructs a DeBERTa-v2 tokenizer. Based on "),cs=r(wd,"A",{href:!0,rel:!0});var Hg=i(cs);qc=s(Hg,"SentencePiece"),Hg.forEach(t),zc=s(wd,"."),wd.forEach(t),jc=m(zt),Lt=r(zt,"DIV",{class:!0});var Tr=i(Lt);T(ps.$$.fragment,Tr),Mc=m(Tr),Qr=r(Tr,"P",{});var Ug=i(Qr);Cc=s(Ug,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ug.forEach(t),Pc=m(Tr),hs=r(Tr,"UL",{});var vd=i(hs);Gr=r(vd,"LI",{});var Kg=i(Gr);Bc=s(Kg,"single sequence: [CLS] X [SEP]"),Kg.forEach(t),Rc=m(vd),Jr=r(vd,"LI",{});var Qg=i(Jr);Ac=s(Qg,"pair of sequences: [CLS] A [SEP] B [SEP]"),Qg.forEach(t),vd.forEach(t),Tr.forEach(t),Lc=m(zt),Oo=r(zt,"DIV",{class:!0});var Td=i(Oo);T(ms.$$.fragment,Td),Ic=m(Td),ao=r(Td,"P",{});var yr=i(ao);Sc=s(yr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Xr=r(yr,"CODE",{});var Gg=i(Xr);Oc=s(Gg,"prepare_for_model"),Gg.forEach(t),Nc=s(yr," or "),Yr=r(yr,"CODE",{});var Jg=i(Yr);Wc=s(Jg,"encode_plus"),Jg.forEach(t),Hc=s(yr," methods."),yr.forEach(t),Td.forEach(t),Uc=m(zt),$t=r(zt,"DIV",{class:!0});var Un=i($t);T(fs.$$.fragment,Un),Kc=m(Un),Zr=r(Un,"P",{});var Xg=i(Zr);Qc=s(Xg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Xg.forEach(t),Gc=m(Un),T(No.$$.fragment,Un),Jc=m(Un),ro=r(Un,"P",{});var $r=i(ro);Xc=s($r,"If "),ei=r($r,"CODE",{});var Yg=i(ei);Yc=s(Yg,"token_ids_1"),Yg.forEach(t),Zc=s($r," is "),ti=r($r,"CODE",{});var Zg=i(ti);ep=s(Zg,"None"),Zg.forEach(t),tp=s($r,", this method only returns the first portion of the mask (0s)."),$r.forEach(t),Un.forEach(t),op=m(zt),ar=r(zt,"DIV",{class:!0});var e_=i(ar);T(us.$$.fragment,e_),e_.forEach(t),zt.forEach(t),Wl=m(o),io=r(o,"H2",{class:!0});var yd=i(io);Wo=r(yd,"A",{id:!0,class:!0,href:!0});var t_=i(Wo);oi=r(t_,"SPAN",{});var o_=i(oi);T(gs.$$.fragment,o_),o_.forEach(t),t_.forEach(t),np=m(yd),ni=r(yd,"SPAN",{});var n_=i(ni);sp=s(n_,"DebertaV2TokenizerFast"),n_.forEach(t),yd.forEach(t),Hl=m(o),kt=r(o,"DIV",{class:!0});var Kn=i(kt);T(_s.$$.fragment,Kn),ap=m(Kn),bs=r(Kn,"P",{});var $d=i(bs);rp=s($d,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),ks=r($d,"A",{href:!0,rel:!0});var s_=i(ks);ip=s(s_,"SentencePiece"),s_.forEach(t),lp=s($d,"."),$d.forEach(t),dp=m(Kn),It=r(Kn,"DIV",{class:!0});var Dr=i(It);T(ws.$$.fragment,Dr),cp=m(Dr),si=r(Dr,"P",{});var a_=i(si);pp=s(a_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),a_.forEach(t),hp=m(Dr),vs=r(Dr,"UL",{});var Dd=i(vs);ai=r(Dd,"LI",{});var r_=i(ai);mp=s(r_,"single sequence: [CLS] X [SEP]"),r_.forEach(t),fp=m(Dd),ri=r(Dd,"LI",{});var i_=i(ri);up=s(i_,"pair of sequences: [CLS] A [SEP] B [SEP]"),i_.forEach(t),Dd.forEach(t),Dr.forEach(t),gp=m(Kn),Dt=r(Kn,"DIV",{class:!0});var Qn=i(Dt);T(Ts.$$.fragment,Qn),_p=m(Qn),ii=r(Qn,"P",{});var l_=i(ii);bp=s(l_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),l_.forEach(t),kp=m(Qn),T(Ho.$$.fragment,Qn),wp=m(Qn),lo=r(Qn,"P",{});var Er=i(lo);vp=s(Er,"If "),li=r(Er,"CODE",{});var d_=i(li);Tp=s(d_,"token_ids_1"),d_.forEach(t),yp=s(Er," is "),di=r(Er,"CODE",{});var c_=i(di);$p=s(c_,"None"),c_.forEach(t),Dp=s(Er,", this method only returns the first portion of the mask (0s)."),Er.forEach(t),Qn.forEach(t),Kn.forEach(t),Ul=m(o),co=r(o,"H2",{class:!0});var Ed=i(co);Uo=r(Ed,"A",{id:!0,class:!0,href:!0});var p_=i(Uo);ci=r(p_,"SPAN",{});var h_=i(ci);T(ys.$$.fragment,h_),h_.forEach(t),p_.forEach(t),Ep=m(Ed),pi=r(Ed,"SPAN",{});var m_=i(pi);Fp=s(m_,"DebertaV2Model"),m_.forEach(t),Ed.forEach(t),Kl=m(o),wt=r(o,"DIV",{class:!0});var Gn=i(wt);T($s.$$.fragment,Gn),Vp=m(Gn),Ds=r(Gn,"P",{});var Fd=i(Ds);xp=s(Fd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Es=r(Fd,"A",{href:!0,rel:!0});var f_=i(Es);qp=s(f_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),f_.forEach(t),zp=s(Fd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fd.forEach(t),jp=m(Gn),Fs=r(Gn,"P",{});var Vd=i(Fs);Mp=s(Vd,"This model is also a PyTorch "),Vs=r(Vd,"A",{href:!0,rel:!0});var u_=i(Vs);Cp=s(u_,"torch.nn.Module"),u_.forEach(t),Pp=s(Vd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vd.forEach(t),Bp=m(Gn),Et=r(Gn,"DIV",{class:!0});var Jn=i(Et);T(xs.$$.fragment,Jn),Rp=m(Jn),po=r(Jn,"P",{});var Fr=i(po);Ap=s(Fr,"The "),rr=r(Fr,"A",{href:!0});var g_=i(rr);Lp=s(g_,"DebertaV2Model"),g_.forEach(t),Ip=s(Fr," forward method, overrides the "),hi=r(Fr,"CODE",{});var __=i(hi);Sp=s(__,"__call__"),__.forEach(t),Op=s(Fr," special method."),Fr.forEach(t),Np=m(Jn),T(Ko.$$.fragment,Jn),Wp=m(Jn),T(Qo.$$.fragment,Jn),Jn.forEach(t),Gn.forEach(t),Ql=m(o),ho=r(o,"H2",{class:!0});var xd=i(ho);Go=r(xd,"A",{id:!0,class:!0,href:!0});var b_=i(Go);mi=r(b_,"SPAN",{});var k_=i(mi);T(qs.$$.fragment,k_),k_.forEach(t),b_.forEach(t),Hp=m(xd),fi=r(xd,"SPAN",{});var w_=i(fi);Up=s(w_,"DebertaV2PreTrainedModel"),w_.forEach(t),xd.forEach(t),Gl=m(o),Pt=r(o,"DIV",{class:!0});var Vr=i(Pt);T(zs.$$.fragment,Vr),Kp=m(Vr),ui=r(Vr,"P",{});var v_=i(ui);Qp=s(v_,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),v_.forEach(t),Gp=m(Vr),Ft=r(Vr,"DIV",{class:!0});var Xn=i(Ft);T(js.$$.fragment,Xn),Jp=m(Xn),gi=r(Xn,"P",{});var T_=i(gi);Xp=s(T_,"Defines the computation performed at every call."),T_.forEach(t),Yp=m(Xn),_i=r(Xn,"P",{});var y_=i(_i);Zp=s(y_,"Should be overridden by all subclasses."),y_.forEach(t),eh=m(Xn),T(Jo.$$.fragment,Xn),Xn.forEach(t),Vr.forEach(t),Jl=m(o),mo=r(o,"H2",{class:!0});var qd=i(mo);Xo=r(qd,"A",{id:!0,class:!0,href:!0});var $_=i(Xo);bi=r($_,"SPAN",{});var D_=i(bi);T(Ms.$$.fragment,D_),D_.forEach(t),$_.forEach(t),th=m(qd),ki=r(qd,"SPAN",{});var E_=i(ki);oh=s(E_,"DebertaV2ForMaskedLM"),E_.forEach(t),qd.forEach(t),Xl=m(o),vt=r(o,"DIV",{class:!0});var Yn=i(vt);T(Cs.$$.fragment,Yn),nh=m(Yn),fo=r(Yn,"P",{});var xr=i(fo);sh=s(xr,"DeBERTa Model with a "),wi=r(xr,"CODE",{});var F_=i(wi);ah=s(F_,"language modeling"),F_.forEach(t),rh=s(xr,` head on top.
The DeBERTa model was proposed in `),Ps=r(xr,"A",{href:!0,rel:!0});var V_=i(Ps);ih=s(V_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),V_.forEach(t),lh=s(xr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xr.forEach(t),dh=m(Yn),Bs=r(Yn,"P",{});var zd=i(Bs);ch=s(zd,"This model is also a PyTorch "),Rs=r(zd,"A",{href:!0,rel:!0});var x_=i(Rs);ph=s(x_,"torch.nn.Module"),x_.forEach(t),hh=s(zd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zd.forEach(t),mh=m(Yn),ct=r(Yn,"DIV",{class:!0});var St=i(ct);T(As.$$.fragment,St),fh=m(St),uo=r(St,"P",{});var qr=i(uo);uh=s(qr,"The "),ir=r(qr,"A",{href:!0});var q_=i(ir);gh=s(q_,"DebertaV2ForMaskedLM"),q_.forEach(t),_h=s(qr," forward method, overrides the "),vi=r(qr,"CODE",{});var z_=i(vi);bh=s(z_,"__call__"),z_.forEach(t),kh=s(qr," special method."),qr.forEach(t),wh=m(St),T(Yo.$$.fragment,St),vh=m(St),T(Zo.$$.fragment,St),Th=m(St),T(en.$$.fragment,St),St.forEach(t),Yn.forEach(t),Yl=m(o),go=r(o,"H2",{class:!0});var jd=i(go);tn=r(jd,"A",{id:!0,class:!0,href:!0});var j_=i(tn);Ti=r(j_,"SPAN",{});var M_=i(Ti);T(Ls.$$.fragment,M_),M_.forEach(t),j_.forEach(t),yh=m(jd),yi=r(jd,"SPAN",{});var C_=i(yi);$h=s(C_,"DebertaV2ForSequenceClassification"),C_.forEach(t),jd.forEach(t),Zl=m(o),st=r(o,"DIV",{class:!0});var Ot=i(st);T(Is.$$.fragment,Ot),Dh=m(Ot),$i=r(Ot,"P",{});var P_=i($i);Eh=s(P_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),P_.forEach(t),Fh=m(Ot),Ss=r(Ot,"P",{});var Md=i(Ss);Vh=s(Md,"The DeBERTa model was proposed in "),Os=r(Md,"A",{href:!0,rel:!0});var B_=i(Os);xh=s(B_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),B_.forEach(t),qh=s(Md,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Md.forEach(t),zh=m(Ot),Ns=r(Ot,"P",{});var Cd=i(Ns);jh=s(Cd,"This model is also a PyTorch "),Ws=r(Cd,"A",{href:!0,rel:!0});var R_=i(Ws);Mh=s(R_,"torch.nn.Module"),R_.forEach(t),Ch=s(Cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cd.forEach(t),Ph=m(Ot),Xe=r(Ot,"DIV",{class:!0});var _t=i(Xe);T(Hs.$$.fragment,_t),Bh=m(_t),_o=r(_t,"P",{});var zr=i(_o);Rh=s(zr,"The "),lr=r(zr,"A",{href:!0});var A_=i(lr);Ah=s(A_,"DebertaV2ForSequenceClassification"),A_.forEach(t),Lh=s(zr," forward method, overrides the "),Di=r(zr,"CODE",{});var L_=i(Di);Ih=s(L_,"__call__"),L_.forEach(t),Sh=s(zr," special method."),zr.forEach(t),Oh=m(_t),T(on.$$.fragment,_t),Nh=m(_t),T(nn.$$.fragment,_t),Wh=m(_t),T(sn.$$.fragment,_t),Hh=m(_t),T(an.$$.fragment,_t),Uh=m(_t),T(rn.$$.fragment,_t),_t.forEach(t),Ot.forEach(t),ed=m(o),bo=r(o,"H2",{class:!0});var Pd=i(bo);ln=r(Pd,"A",{id:!0,class:!0,href:!0});var I_=i(ln);Ei=r(I_,"SPAN",{});var S_=i(Ei);T(Us.$$.fragment,S_),S_.forEach(t),I_.forEach(t),Kh=m(Pd),Fi=r(Pd,"SPAN",{});var O_=i(Fi);Qh=s(O_,"DebertaV2ForTokenClassification"),O_.forEach(t),Pd.forEach(t),td=m(o),at=r(o,"DIV",{class:!0});var Nt=i(at);T(Ks.$$.fragment,Nt),Gh=m(Nt),Vi=r(Nt,"P",{});var N_=i(Vi);Jh=s(N_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),N_.forEach(t),Xh=m(Nt),Qs=r(Nt,"P",{});var Bd=i(Qs);Yh=s(Bd,"The DeBERTa model was proposed in "),Gs=r(Bd,"A",{href:!0,rel:!0});var W_=i(Gs);Zh=s(W_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),W_.forEach(t),em=s(Bd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bd.forEach(t),tm=m(Nt),Js=r(Nt,"P",{});var Rd=i(Js);om=s(Rd,"This model is also a PyTorch "),Xs=r(Rd,"A",{href:!0,rel:!0});var H_=i(Xs);nm=s(H_,"torch.nn.Module"),H_.forEach(t),sm=s(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),am=m(Nt),pt=r(Nt,"DIV",{class:!0});var Wt=i(pt);T(Ys.$$.fragment,Wt),rm=m(Wt),ko=r(Wt,"P",{});var jr=i(ko);im=s(jr,"The "),dr=r(jr,"A",{href:!0});var U_=i(dr);lm=s(U_,"DebertaV2ForTokenClassification"),U_.forEach(t),dm=s(jr," forward method, overrides the "),xi=r(jr,"CODE",{});var K_=i(xi);cm=s(K_,"__call__"),K_.forEach(t),pm=s(jr," special method."),jr.forEach(t),hm=m(Wt),T(dn.$$.fragment,Wt),mm=m(Wt),T(cn.$$.fragment,Wt),fm=m(Wt),T(pn.$$.fragment,Wt),Wt.forEach(t),Nt.forEach(t),od=m(o),wo=r(o,"H2",{class:!0});var Ad=i(wo);hn=r(Ad,"A",{id:!0,class:!0,href:!0});var Q_=i(hn);qi=r(Q_,"SPAN",{});var G_=i(qi);T(Zs.$$.fragment,G_),G_.forEach(t),Q_.forEach(t),um=m(Ad),zi=r(Ad,"SPAN",{});var J_=i(zi);gm=s(J_,"DebertaV2ForQuestionAnswering"),J_.forEach(t),Ad.forEach(t),nd=m(o),rt=r(o,"DIV",{class:!0});var Ht=i(rt);T(ea.$$.fragment,Ht),_m=m(Ht),vo=r(Ht,"P",{});var Mr=i(vo);bm=s(Mr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ji=r(Mr,"CODE",{});var X_=i(ji);km=s(X_,"span start logits"),X_.forEach(t),wm=s(Mr," and "),Mi=r(Mr,"CODE",{});var Y_=i(Mi);vm=s(Y_,"span end logits"),Y_.forEach(t),Tm=s(Mr,")."),Mr.forEach(t),ym=m(Ht),ta=r(Ht,"P",{});var Ld=i(ta);$m=s(Ld,"The DeBERTa model was proposed in "),oa=r(Ld,"A",{href:!0,rel:!0});var Z_=i(oa);Dm=s(Z_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Z_.forEach(t),Em=s(Ld,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ld.forEach(t),Fm=m(Ht),na=r(Ht,"P",{});var Id=i(na);Vm=s(Id,"This model is also a PyTorch "),sa=r(Id,"A",{href:!0,rel:!0});var eb=i(sa);xm=s(eb,"torch.nn.Module"),eb.forEach(t),qm=s(Id,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Id.forEach(t),zm=m(Ht),ht=r(Ht,"DIV",{class:!0});var Ut=i(ht);T(aa.$$.fragment,Ut),jm=m(Ut),To=r(Ut,"P",{});var Cr=i(To);Mm=s(Cr,"The "),cr=r(Cr,"A",{href:!0});var tb=i(cr);Cm=s(tb,"DebertaV2ForQuestionAnswering"),tb.forEach(t),Pm=s(Cr," forward method, overrides the "),Ci=r(Cr,"CODE",{});var ob=i(Ci);Bm=s(ob,"__call__"),ob.forEach(t),Rm=s(Cr," special method."),Cr.forEach(t),Am=m(Ut),T(mn.$$.fragment,Ut),Lm=m(Ut),T(fn.$$.fragment,Ut),Im=m(Ut),T(un.$$.fragment,Ut),Ut.forEach(t),Ht.forEach(t),sd=m(o),yo=r(o,"H2",{class:!0});var Sd=i(yo);gn=r(Sd,"A",{id:!0,class:!0,href:!0});var nb=i(gn);Pi=r(nb,"SPAN",{});var sb=i(Pi);T(ra.$$.fragment,sb),sb.forEach(t),nb.forEach(t),Sm=m(Sd),Bi=r(Sd,"SPAN",{});var ab=i(Bi);Om=s(ab,"DebertaV2ForMultipleChoice"),ab.forEach(t),Sd.forEach(t),ad=m(o),it=r(o,"DIV",{class:!0});var Kt=i(it);T(ia.$$.fragment,Kt),Nm=m(Kt),Ri=r(Kt,"P",{});var rb=i(Ri);Wm=s(rb,`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),rb.forEach(t),Hm=m(Kt),la=r(Kt,"P",{});var Od=i(la);Um=s(Od,"The DeBERTa model was proposed in "),da=r(Od,"A",{href:!0,rel:!0});var ib=i(da);Km=s(ib,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ib.forEach(t),Qm=s(Od,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Od.forEach(t),Gm=m(Kt),ca=r(Kt,"P",{});var Nd=i(ca);Jm=s(Nd,"This model is also a PyTorch "),pa=r(Nd,"A",{href:!0,rel:!0});var lb=i(pa);Xm=s(lb,"torch.nn.Module"),lb.forEach(t),Ym=s(Nd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd.forEach(t),Zm=m(Kt),Vt=r(Kt,"DIV",{class:!0});var Zn=i(Vt);T(ha.$$.fragment,Zn),ef=m(Zn),$o=r(Zn,"P",{});var Pr=i($o);tf=s(Pr,"The "),pr=r(Pr,"A",{href:!0});var db=i(pr);of=s(db,"DebertaV2ForMultipleChoice"),db.forEach(t),nf=s(Pr," forward method, overrides the "),Ai=r(Pr,"CODE",{});var cb=i(Ai);sf=s(cb,"__call__"),cb.forEach(t),af=s(Pr," special method."),Pr.forEach(t),rf=m(Zn),T(_n.$$.fragment,Zn),lf=m(Zn),T(bn.$$.fragment,Zn),Zn.forEach(t),Kt.forEach(t),rd=m(o),Do=r(o,"H2",{class:!0});var Wd=i(Do);kn=r(Wd,"A",{id:!0,class:!0,href:!0});var pb=i(kn);Li=r(pb,"SPAN",{});var hb=i(Li);T(ma.$$.fragment,hb),hb.forEach(t),pb.forEach(t),df=m(Wd),Ii=r(Wd,"SPAN",{});var mb=i(Ii);cf=s(mb,"TFDebertaV2Model"),mb.forEach(t),Wd.forEach(t),id=m(o),lt=r(o,"DIV",{class:!0});var Qt=i(lt);T(fa.$$.fragment,Qt),pf=m(Qt),ua=r(Qt,"P",{});var Hd=i(ua);hf=s(Hd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ga=r(Hd,"A",{href:!0,rel:!0});var fb=i(ga);mf=s(fb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fb.forEach(t),ff=s(Hd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hd.forEach(t),uf=m(Qt),_a=r(Qt,"P",{});var Ud=i(_a);gf=s(Ud,"This model is also a "),ba=r(Ud,"A",{href:!0,rel:!0});var ub=i(ba);_f=s(ub,"tf.keras.Model"),ub.forEach(t),bf=s(Ud,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ud.forEach(t),kf=m(Qt),T(wn.$$.fragment,Qt),wf=m(Qt),xt=r(Qt,"DIV",{class:!0});var es=i(xt);T(ka.$$.fragment,es),vf=m(es),Eo=r(es,"P",{});var Br=i(Eo);Tf=s(Br,"The "),hr=r(Br,"A",{href:!0});var gb=i(hr);yf=s(gb,"TFDebertaV2Model"),gb.forEach(t),$f=s(Br," forward method, overrides the "),Si=r(Br,"CODE",{});var _b=i(Si);Df=s(_b,"__call__"),_b.forEach(t),Ef=s(Br," special method."),Br.forEach(t),Ff=m(es),T(vn.$$.fragment,es),Vf=m(es),T(Tn.$$.fragment,es),es.forEach(t),Qt.forEach(t),ld=m(o),Fo=r(o,"H2",{class:!0});var Kd=i(Fo);yn=r(Kd,"A",{id:!0,class:!0,href:!0});var bb=i(yn);Oi=r(bb,"SPAN",{});var kb=i(Oi);T(wa.$$.fragment,kb),kb.forEach(t),bb.forEach(t),xf=m(Kd),Ni=r(Kd,"SPAN",{});var wb=i(Ni);qf=s(wb,"TFDebertaV2PreTrainedModel"),wb.forEach(t),Kd.forEach(t),dd=m(o),Bt=r(o,"DIV",{class:!0});var Rr=i(Bt);T(va.$$.fragment,Rr),zf=m(Rr),Wi=r(Rr,"P",{});var vb=i(Wi);jf=s(vb,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),vb.forEach(t),Mf=m(Rr),qt=r(Rr,"DIV",{class:!0});var ts=i(qt);T(Ta.$$.fragment,ts),Cf=m(ts),Hi=r(ts,"P",{});var Tb=i(Hi);Pf=s(Tb,"Calls the model on new inputs and returns the outputs as tensors."),Tb.forEach(t),Bf=m(ts),ya=r(ts,"P",{});var Qd=i(ya);Rf=s(Qd,"In this case "),Ui=r(Qd,"CODE",{});var yb=i(Ui);Af=s(yb,"call()"),yb.forEach(t),Lf=s(Qd,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Qd.forEach(t),If=m(ts),Tt=r(ts,"P",{});var Gt=i(Tt);Sf=s(Gt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Ki=r(Gt,"CODE",{});var $b=i(Ki);Of=s($b,"tf.keras.Model"),$b.forEach(t),Nf=s(Gt,`.
To call a model on an input, always use the `),Qi=r(Gt,"CODE",{});var Db=i(Qi);Wf=s(Db,"__call__()"),Db.forEach(t),Hf=s(Gt,` method,
i.e. `),Gi=r(Gt,"CODE",{});var Eb=i(Gi);Uf=s(Eb,"model(inputs)"),Eb.forEach(t),Kf=s(Gt,", which relies on the underlying "),Ji=r(Gt,"CODE",{});var Fb=i(Ji);Qf=s(Fb,"call()"),Fb.forEach(t),Gf=s(Gt," method."),Gt.forEach(t),ts.forEach(t),Rr.forEach(t),cd=m(o),Vo=r(o,"H2",{class:!0});var Gd=i(Vo);$n=r(Gd,"A",{id:!0,class:!0,href:!0});var Vb=i($n);Xi=r(Vb,"SPAN",{});var xb=i(Xi);T($a.$$.fragment,xb),xb.forEach(t),Vb.forEach(t),Jf=m(Gd),Yi=r(Gd,"SPAN",{});var qb=i(Yi);Xf=s(qb,"TFDebertaV2ForMaskedLM"),qb.forEach(t),Gd.forEach(t),pd=m(o),dt=r(o,"DIV",{class:!0});var Jt=i(dt);T(Da.$$.fragment,Jt),Yf=m(Jt),xo=r(Jt,"P",{});var Ar=i(xo);Zf=s(Ar,"DeBERTa Model with a "),Zi=r(Ar,"CODE",{});var zb=i(Zi);eu=s(zb,"language modeling"),zb.forEach(t),tu=s(Ar,` head on top.
The DeBERTa model was proposed in `),Ea=r(Ar,"A",{href:!0,rel:!0});var jb=i(Ea);ou=s(jb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jb.forEach(t),nu=s(Ar,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ar.forEach(t),su=m(Jt),Fa=r(Jt,"P",{});var Jd=i(Fa);au=s(Jd,"This model is also a "),Va=r(Jd,"A",{href:!0,rel:!0});var Mb=i(Va);ru=s(Mb,"tf.keras.Model"),Mb.forEach(t),iu=s(Jd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jd.forEach(t),lu=m(Jt),T(Dn.$$.fragment,Jt),du=m(Jt),mt=r(Jt,"DIV",{class:!0});var Xt=i(mt);T(xa.$$.fragment,Xt),cu=m(Xt),qo=r(Xt,"P",{});var Lr=i(qo);pu=s(Lr,"The "),mr=r(Lr,"A",{href:!0});var Cb=i(mr);hu=s(Cb,"TFDebertaV2ForMaskedLM"),Cb.forEach(t),mu=s(Lr," forward method, overrides the "),el=r(Lr,"CODE",{});var Pb=i(el);fu=s(Pb,"__call__"),Pb.forEach(t),uu=s(Lr," special method."),Lr.forEach(t),gu=m(Xt),T(En.$$.fragment,Xt),_u=m(Xt),T(Fn.$$.fragment,Xt),bu=m(Xt),T(Vn.$$.fragment,Xt),Xt.forEach(t),Jt.forEach(t),hd=m(o),zo=r(o,"H2",{class:!0});var Xd=i(zo);xn=r(Xd,"A",{id:!0,class:!0,href:!0});var Bb=i(xn);tl=r(Bb,"SPAN",{});var Rb=i(tl);T(qa.$$.fragment,Rb),Rb.forEach(t),Bb.forEach(t),ku=m(Xd),ol=r(Xd,"SPAN",{});var Ab=i(ol);wu=s(Ab,"TFDebertaV2ForSequenceClassification"),Ab.forEach(t),Xd.forEach(t),md=m(o),et=r(o,"DIV",{class:!0});var jt=i(et);T(za.$$.fragment,jt),vu=m(jt),nl=r(jt,"P",{});var Lb=i(nl);Tu=s(Lb,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Lb.forEach(t),yu=m(jt),ja=r(jt,"P",{});var Yd=i(ja);$u=s(Yd,"The DeBERTa model was proposed in "),Ma=r(Yd,"A",{href:!0,rel:!0});var Ib=i(Ma);Du=s(Ib,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ib.forEach(t),Eu=s(Yd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yd.forEach(t),Fu=m(jt),Ca=r(jt,"P",{});var Zd=i(Ca);Vu=s(Zd,"This model is also a "),Pa=r(Zd,"A",{href:!0,rel:!0});var Sb=i(Pa);xu=s(Sb,"tf.keras.Model"),Sb.forEach(t),qu=s(Zd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zd.forEach(t),zu=m(jt),T(qn.$$.fragment,jt),ju=m(jt),ft=r(jt,"DIV",{class:!0});var Yt=i(ft);T(Ba.$$.fragment,Yt),Mu=m(Yt),jo=r(Yt,"P",{});var Ir=i(jo);Cu=s(Ir,"The "),fr=r(Ir,"A",{href:!0});var Ob=i(fr);Pu=s(Ob,"TFDebertaV2ForSequenceClassification"),Ob.forEach(t),Bu=s(Ir," forward method, overrides the "),sl=r(Ir,"CODE",{});var Nb=i(sl);Ru=s(Nb,"__call__"),Nb.forEach(t),Au=s(Ir," special method."),Ir.forEach(t),Lu=m(Yt),T(zn.$$.fragment,Yt),Iu=m(Yt),T(jn.$$.fragment,Yt),Su=m(Yt),T(Mn.$$.fragment,Yt),Yt.forEach(t),jt.forEach(t),fd=m(o),Mo=r(o,"H2",{class:!0});var ec=i(Mo);Cn=r(ec,"A",{id:!0,class:!0,href:!0});var Wb=i(Cn);al=r(Wb,"SPAN",{});var Hb=i(al);T(Ra.$$.fragment,Hb),Hb.forEach(t),Wb.forEach(t),Ou=m(ec),rl=r(ec,"SPAN",{});var Ub=i(rl);Nu=s(Ub,"TFDebertaV2ForTokenClassification"),Ub.forEach(t),ec.forEach(t),ud=m(o),tt=r(o,"DIV",{class:!0});var Mt=i(tt);T(Aa.$$.fragment,Mt),Wu=m(Mt),il=r(Mt,"P",{});var Kb=i(il);Hu=s(Kb,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kb.forEach(t),Uu=m(Mt),La=r(Mt,"P",{});var tc=i(La);Ku=s(tc,"The DeBERTa model was proposed in "),Ia=r(tc,"A",{href:!0,rel:!0});var Qb=i(Ia);Qu=s(Qb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qb.forEach(t),Gu=s(tc,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tc.forEach(t),Ju=m(Mt),Sa=r(Mt,"P",{});var oc=i(Sa);Xu=s(oc,"This model is also a "),Oa=r(oc,"A",{href:!0,rel:!0});var Gb=i(Oa);Yu=s(Gb,"tf.keras.Model"),Gb.forEach(t),Zu=s(oc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oc.forEach(t),eg=m(Mt),T(Pn.$$.fragment,Mt),tg=m(Mt),ut=r(Mt,"DIV",{class:!0});var Zt=i(ut);T(Na.$$.fragment,Zt),og=m(Zt),Co=r(Zt,"P",{});var Sr=i(Co);ng=s(Sr,"The "),ur=r(Sr,"A",{href:!0});var Jb=i(ur);sg=s(Jb,"TFDebertaV2ForTokenClassification"),Jb.forEach(t),ag=s(Sr," forward method, overrides the "),ll=r(Sr,"CODE",{});var Xb=i(ll);rg=s(Xb,"__call__"),Xb.forEach(t),ig=s(Sr," special method."),Sr.forEach(t),lg=m(Zt),T(Bn.$$.fragment,Zt),dg=m(Zt),T(Rn.$$.fragment,Zt),cg=m(Zt),T(An.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),gd=m(o),Po=r(o,"H2",{class:!0});var nc=i(Po);Ln=r(nc,"A",{id:!0,class:!0,href:!0});var Yb=i(Ln);dl=r(Yb,"SPAN",{});var Zb=i(dl);T(Wa.$$.fragment,Zb),Zb.forEach(t),Yb.forEach(t),pg=m(nc),cl=r(nc,"SPAN",{});var e2=i(cl);hg=s(e2,"TFDebertaV2ForQuestionAnswering"),e2.forEach(t),nc.forEach(t),_d=m(o),ot=r(o,"DIV",{class:!0});var Ct=i(ot);T(Ha.$$.fragment,Ct),mg=m(Ct),Bo=r(Ct,"P",{});var Or=i(Bo);fg=s(Or,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pl=r(Or,"CODE",{});var t2=i(pl);ug=s(t2,"span start logits"),t2.forEach(t),gg=s(Or," and "),hl=r(Or,"CODE",{});var o2=i(hl);_g=s(o2,"span end logits"),o2.forEach(t),bg=s(Or,")."),Or.forEach(t),kg=m(Ct),Ua=r(Ct,"P",{});var sc=i(Ua);wg=s(sc,"The DeBERTa model was proposed in "),Ka=r(sc,"A",{href:!0,rel:!0});var n2=i(Ka);vg=s(n2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),n2.forEach(t),Tg=s(sc,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sc.forEach(t),yg=m(Ct),Qa=r(Ct,"P",{});var ac=i(Qa);$g=s(ac,"This model is also a "),Ga=r(ac,"A",{href:!0,rel:!0});var s2=i(Ga);Dg=s(s2,"tf.keras.Model"),s2.forEach(t),Eg=s(ac,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ac.forEach(t),Fg=m(Ct),T(In.$$.fragment,Ct),Vg=m(Ct),gt=r(Ct,"DIV",{class:!0});var eo=i(gt);T(Ja.$$.fragment,eo),xg=m(eo),Ro=r(eo,"P",{});var Nr=i(Ro);qg=s(Nr,"The "),gr=r(Nr,"A",{href:!0});var a2=i(gr);zg=s(a2,"TFDebertaV2ForQuestionAnswering"),a2.forEach(t),jg=s(Nr," forward method, overrides the "),ml=r(Nr,"CODE",{});var r2=i(ml);Mg=s(r2,"__call__"),r2.forEach(t),Cg=s(Nr," special method."),Nr.forEach(t),Pg=m(eo),T(Sn.$$.fragment,eo),Bg=m(eo),T(On.$$.fragment,eo),Rg=m(eo),T(Nn.$$.fragment,eo),eo.forEach(t),Ct.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(ek)),u(f,"id","debertav2"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#debertav2"),u(c,"class","relative group"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(A,"class","relative group"),u(ie,"href","https://arxiv.org/abs/2006.03654"),u(ie,"rel","nofollow"),u(le,"href","https://github.com/microsoft/DeBERTa"),u(le,"rel","nofollow"),u(de,"href","https://github.com/microsoft/DeBERTa"),u(de,"rel","nofollow"),u(O,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(O,"rel","nofollow"),u(M,"href","https://github.com/google/sentencepiece"),u(M,"rel","nofollow"),u(ee,"href","https://huggingface.co/DeBERTa"),u(ee,"rel","nofollow"),u(os,"href","https://huggingface.co/kamalkraj"),u(os,"rel","nofollow"),u(ns,"href","https://github.com/microsoft/DeBERTa"),u(ns,"rel","nofollow"),u(Lo,"id","transformers.DebertaV2Config"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.DebertaV2Config"),u(to,"class","relative group"),u(or,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(rs,"href","https://huggingface.co/microsoft/deberta-v2-xlarge"),u(rs,"rel","nofollow"),u(nr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(sr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"id","transformers.DebertaV2Tokenizer"),u(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(So,"href","#transformers.DebertaV2Tokenizer"),u(so,"class","relative group"),u(cs,"href","https://github.com/google/sentencepiece"),u(cs,"rel","nofollow"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ar,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wo,"id","transformers.DebertaV2TokenizerFast"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#transformers.DebertaV2TokenizerFast"),u(io,"class","relative group"),u(ks,"href","https://github.com/google/sentencepiece"),u(ks,"rel","nofollow"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Uo,"id","transformers.DebertaV2Model"),u(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Uo,"href","#transformers.DebertaV2Model"),u(co,"class","relative group"),u(Es,"href","https://arxiv.org/abs/2006.03654"),u(Es,"rel","nofollow"),u(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vs,"rel","nofollow"),u(rr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.DebertaV2PreTrainedModel"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.DebertaV2PreTrainedModel"),u(ho,"class","relative group"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xo,"id","transformers.DebertaV2ForMaskedLM"),u(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xo,"href","#transformers.DebertaV2ForMaskedLM"),u(mo,"class","relative group"),u(Ps,"href","https://arxiv.org/abs/2006.03654"),u(Ps,"rel","nofollow"),u(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rs,"rel","nofollow"),u(ir,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tn,"id","transformers.DebertaV2ForSequenceClassification"),u(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tn,"href","#transformers.DebertaV2ForSequenceClassification"),u(go,"class","relative group"),u(Os,"href","https://arxiv.org/abs/2006.03654"),u(Os,"rel","nofollow"),u(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ws,"rel","nofollow"),u(lr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.DebertaV2ForTokenClassification"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.DebertaV2ForTokenClassification"),u(bo,"class","relative group"),u(Gs,"href","https://arxiv.org/abs/2006.03654"),u(Gs,"rel","nofollow"),u(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Xs,"rel","nofollow"),u(dr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hn,"id","transformers.DebertaV2ForQuestionAnswering"),u(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hn,"href","#transformers.DebertaV2ForQuestionAnswering"),u(wo,"class","relative group"),u(oa,"href","https://arxiv.org/abs/2006.03654"),u(oa,"rel","nofollow"),u(sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(sa,"rel","nofollow"),u(cr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gn,"id","transformers.DebertaV2ForMultipleChoice"),u(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gn,"href","#transformers.DebertaV2ForMultipleChoice"),u(yo,"class","relative group"),u(da,"href","https://arxiv.org/abs/2006.03654"),u(da,"rel","nofollow"),u(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pa,"rel","nofollow"),u(pr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMultipleChoice"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.TFDebertaV2Model"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.TFDebertaV2Model"),u(Do,"class","relative group"),u(ga,"href","https://arxiv.org/abs/2006.03654"),u(ga,"rel","nofollow"),u(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ba,"rel","nofollow"),u(hr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.TFDebertaV2PreTrainedModel"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.TFDebertaV2PreTrainedModel"),u(Fo,"class","relative group"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.TFDebertaV2ForMaskedLM"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.TFDebertaV2ForMaskedLM"),u(Vo,"class","relative group"),u(Ea,"href","https://arxiv.org/abs/2006.03654"),u(Ea,"rel","nofollow"),u(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Va,"rel","nofollow"),u(mr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.TFDebertaV2ForSequenceClassification"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(zo,"class","relative group"),u(Ma,"href","https://arxiv.org/abs/2006.03654"),u(Ma,"rel","nofollow"),u(Pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pa,"rel","nofollow"),u(fr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.TFDebertaV2ForTokenClassification"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.TFDebertaV2ForTokenClassification"),u(Mo,"class","relative group"),u(Ia,"href","https://arxiv.org/abs/2006.03654"),u(Ia,"rel","nofollow"),u(Oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Oa,"rel","nofollow"),u(ur,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ln,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ln,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(Po,"class","relative group"),u(Ka,"href","https://arxiv.org/abs/2006.03654"),u(Ka,"rel","nofollow"),u(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ga,"rel","nofollow"),u(gr,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,f),e(f,w),y(l,w,null),e(c,p),e(c,q),e(q,Te),_(o,pe,b),_(o,A,b),e(A,ne),e(ne,oe),y(F,oe,null),e(A,ye),e(A,U),e(U,$e),_(o,he,b),_(o,I,b),e(I,De),e(I,ie),e(ie,G),e(I,Ee),_(o,me,b),_(o,N,b),e(N,Fe),_(o,fe,b),_(o,W,b),e(W,Ve),_(o,ue,b),_(o,te,b),e(te,j),e(j,P),e(j,le),e(le,J),e(j,xe),_(o,ge,b),_(o,L,b),e(L,qe),e(L,de),e(de,B),e(L,ze),e(L,O),e(O,je),_(o,_e,b),_(o,H,b),e(H,Me),_(o,be,b),_(o,C,b),e(C,se),e(se,K),e(K,Ce),e(se,ae),e(se,M),e(M,Pe),e(se,R),e(C,Be),e(C,ce),e(ce,k),e(k,x),e(ce,We),e(C,re),e(C,Re),e(Re,Ie),e(Ie,z),e(Re,He),e(C,Ue),e(C,Ae),e(Ae,Se),e(Se,Ke),e(Ae,S),e(C,X),e(C,Le),e(Le,Oe),e(Oe,Y),e(Le,Qe),_(o,Ne,b),_(o,Z,b),e(Z,Ge),e(Z,ee),e(ee,Je),e(Z,rc),e(Z,os),e(os,ic),e(Z,lc),e(Z,ns),e(ns,dc),e(Z,cc),_(o,Il,b),_(o,to,b),e(to,Lo),e(Lo,Wr),y(ss,Wr,null),e(to,pc),e(to,Hr),e(Hr,hc),_(o,Sl,b),_(o,bt,b),y(as,bt,null),e(bt,mc),e(bt,oo),e(oo,fc),e(oo,or),e(or,uc),e(oo,gc),e(oo,rs),e(rs,_c),e(oo,bc),e(bt,kc),e(bt,no),e(no,wc),e(no,nr),e(nr,vc),e(no,Tc),e(no,sr),e(sr,yc),e(no,$c),e(bt,Dc),y(Io,bt,null),_(o,Ol,b),_(o,so,b),e(so,So),e(So,Ur),y(is,Ur,null),e(so,Ec),e(so,Kr),e(Kr,Fc),_(o,Nl,b),_(o,Ze,b),y(ls,Ze,null),e(Ze,Vc),e(Ze,ds),e(ds,xc),e(ds,cs),e(cs,qc),e(ds,zc),e(Ze,jc),e(Ze,Lt),y(ps,Lt,null),e(Lt,Mc),e(Lt,Qr),e(Qr,Cc),e(Lt,Pc),e(Lt,hs),e(hs,Gr),e(Gr,Bc),e(hs,Rc),e(hs,Jr),e(Jr,Ac),e(Ze,Lc),e(Ze,Oo),y(ms,Oo,null),e(Oo,Ic),e(Oo,ao),e(ao,Sc),e(ao,Xr),e(Xr,Oc),e(ao,Nc),e(ao,Yr),e(Yr,Wc),e(ao,Hc),e(Ze,Uc),e(Ze,$t),y(fs,$t,null),e($t,Kc),e($t,Zr),e(Zr,Qc),e($t,Gc),y(No,$t,null),e($t,Jc),e($t,ro),e(ro,Xc),e(ro,ei),e(ei,Yc),e(ro,Zc),e(ro,ti),e(ti,ep),e(ro,tp),e(Ze,op),e(Ze,ar),y(us,ar,null),_(o,Wl,b),_(o,io,b),e(io,Wo),e(Wo,oi),y(gs,oi,null),e(io,np),e(io,ni),e(ni,sp),_(o,Hl,b),_(o,kt,b),y(_s,kt,null),e(kt,ap),e(kt,bs),e(bs,rp),e(bs,ks),e(ks,ip),e(bs,lp),e(kt,dp),e(kt,It),y(ws,It,null),e(It,cp),e(It,si),e(si,pp),e(It,hp),e(It,vs),e(vs,ai),e(ai,mp),e(vs,fp),e(vs,ri),e(ri,up),e(kt,gp),e(kt,Dt),y(Ts,Dt,null),e(Dt,_p),e(Dt,ii),e(ii,bp),e(Dt,kp),y(Ho,Dt,null),e(Dt,wp),e(Dt,lo),e(lo,vp),e(lo,li),e(li,Tp),e(lo,yp),e(lo,di),e(di,$p),e(lo,Dp),_(o,Ul,b),_(o,co,b),e(co,Uo),e(Uo,ci),y(ys,ci,null),e(co,Ep),e(co,pi),e(pi,Fp),_(o,Kl,b),_(o,wt,b),y($s,wt,null),e(wt,Vp),e(wt,Ds),e(Ds,xp),e(Ds,Es),e(Es,qp),e(Ds,zp),e(wt,jp),e(wt,Fs),e(Fs,Mp),e(Fs,Vs),e(Vs,Cp),e(Fs,Pp),e(wt,Bp),e(wt,Et),y(xs,Et,null),e(Et,Rp),e(Et,po),e(po,Ap),e(po,rr),e(rr,Lp),e(po,Ip),e(po,hi),e(hi,Sp),e(po,Op),e(Et,Np),y(Ko,Et,null),e(Et,Wp),y(Qo,Et,null),_(o,Ql,b),_(o,ho,b),e(ho,Go),e(Go,mi),y(qs,mi,null),e(ho,Hp),e(ho,fi),e(fi,Up),_(o,Gl,b),_(o,Pt,b),y(zs,Pt,null),e(Pt,Kp),e(Pt,ui),e(ui,Qp),e(Pt,Gp),e(Pt,Ft),y(js,Ft,null),e(Ft,Jp),e(Ft,gi),e(gi,Xp),e(Ft,Yp),e(Ft,_i),e(_i,Zp),e(Ft,eh),y(Jo,Ft,null),_(o,Jl,b),_(o,mo,b),e(mo,Xo),e(Xo,bi),y(Ms,bi,null),e(mo,th),e(mo,ki),e(ki,oh),_(o,Xl,b),_(o,vt,b),y(Cs,vt,null),e(vt,nh),e(vt,fo),e(fo,sh),e(fo,wi),e(wi,ah),e(fo,rh),e(fo,Ps),e(Ps,ih),e(fo,lh),e(vt,dh),e(vt,Bs),e(Bs,ch),e(Bs,Rs),e(Rs,ph),e(Bs,hh),e(vt,mh),e(vt,ct),y(As,ct,null),e(ct,fh),e(ct,uo),e(uo,uh),e(uo,ir),e(ir,gh),e(uo,_h),e(uo,vi),e(vi,bh),e(uo,kh),e(ct,wh),y(Yo,ct,null),e(ct,vh),y(Zo,ct,null),e(ct,Th),y(en,ct,null),_(o,Yl,b),_(o,go,b),e(go,tn),e(tn,Ti),y(Ls,Ti,null),e(go,yh),e(go,yi),e(yi,$h),_(o,Zl,b),_(o,st,b),y(Is,st,null),e(st,Dh),e(st,$i),e($i,Eh),e(st,Fh),e(st,Ss),e(Ss,Vh),e(Ss,Os),e(Os,xh),e(Ss,qh),e(st,zh),e(st,Ns),e(Ns,jh),e(Ns,Ws),e(Ws,Mh),e(Ns,Ch),e(st,Ph),e(st,Xe),y(Hs,Xe,null),e(Xe,Bh),e(Xe,_o),e(_o,Rh),e(_o,lr),e(lr,Ah),e(_o,Lh),e(_o,Di),e(Di,Ih),e(_o,Sh),e(Xe,Oh),y(on,Xe,null),e(Xe,Nh),y(nn,Xe,null),e(Xe,Wh),y(sn,Xe,null),e(Xe,Hh),y(an,Xe,null),e(Xe,Uh),y(rn,Xe,null),_(o,ed,b),_(o,bo,b),e(bo,ln),e(ln,Ei),y(Us,Ei,null),e(bo,Kh),e(bo,Fi),e(Fi,Qh),_(o,td,b),_(o,at,b),y(Ks,at,null),e(at,Gh),e(at,Vi),e(Vi,Jh),e(at,Xh),e(at,Qs),e(Qs,Yh),e(Qs,Gs),e(Gs,Zh),e(Qs,em),e(at,tm),e(at,Js),e(Js,om),e(Js,Xs),e(Xs,nm),e(Js,sm),e(at,am),e(at,pt),y(Ys,pt,null),e(pt,rm),e(pt,ko),e(ko,im),e(ko,dr),e(dr,lm),e(ko,dm),e(ko,xi),e(xi,cm),e(ko,pm),e(pt,hm),y(dn,pt,null),e(pt,mm),y(cn,pt,null),e(pt,fm),y(pn,pt,null),_(o,od,b),_(o,wo,b),e(wo,hn),e(hn,qi),y(Zs,qi,null),e(wo,um),e(wo,zi),e(zi,gm),_(o,nd,b),_(o,rt,b),y(ea,rt,null),e(rt,_m),e(rt,vo),e(vo,bm),e(vo,ji),e(ji,km),e(vo,wm),e(vo,Mi),e(Mi,vm),e(vo,Tm),e(rt,ym),e(rt,ta),e(ta,$m),e(ta,oa),e(oa,Dm),e(ta,Em),e(rt,Fm),e(rt,na),e(na,Vm),e(na,sa),e(sa,xm),e(na,qm),e(rt,zm),e(rt,ht),y(aa,ht,null),e(ht,jm),e(ht,To),e(To,Mm),e(To,cr),e(cr,Cm),e(To,Pm),e(To,Ci),e(Ci,Bm),e(To,Rm),e(ht,Am),y(mn,ht,null),e(ht,Lm),y(fn,ht,null),e(ht,Im),y(un,ht,null),_(o,sd,b),_(o,yo,b),e(yo,gn),e(gn,Pi),y(ra,Pi,null),e(yo,Sm),e(yo,Bi),e(Bi,Om),_(o,ad,b),_(o,it,b),y(ia,it,null),e(it,Nm),e(it,Ri),e(Ri,Wm),e(it,Hm),e(it,la),e(la,Um),e(la,da),e(da,Km),e(la,Qm),e(it,Gm),e(it,ca),e(ca,Jm),e(ca,pa),e(pa,Xm),e(ca,Ym),e(it,Zm),e(it,Vt),y(ha,Vt,null),e(Vt,ef),e(Vt,$o),e($o,tf),e($o,pr),e(pr,of),e($o,nf),e($o,Ai),e(Ai,sf),e($o,af),e(Vt,rf),y(_n,Vt,null),e(Vt,lf),y(bn,Vt,null),_(o,rd,b),_(o,Do,b),e(Do,kn),e(kn,Li),y(ma,Li,null),e(Do,df),e(Do,Ii),e(Ii,cf),_(o,id,b),_(o,lt,b),y(fa,lt,null),e(lt,pf),e(lt,ua),e(ua,hf),e(ua,ga),e(ga,mf),e(ua,ff),e(lt,uf),e(lt,_a),e(_a,gf),e(_a,ba),e(ba,_f),e(_a,bf),e(lt,kf),y(wn,lt,null),e(lt,wf),e(lt,xt),y(ka,xt,null),e(xt,vf),e(xt,Eo),e(Eo,Tf),e(Eo,hr),e(hr,yf),e(Eo,$f),e(Eo,Si),e(Si,Df),e(Eo,Ef),e(xt,Ff),y(vn,xt,null),e(xt,Vf),y(Tn,xt,null),_(o,ld,b),_(o,Fo,b),e(Fo,yn),e(yn,Oi),y(wa,Oi,null),e(Fo,xf),e(Fo,Ni),e(Ni,qf),_(o,dd,b),_(o,Bt,b),y(va,Bt,null),e(Bt,zf),e(Bt,Wi),e(Wi,jf),e(Bt,Mf),e(Bt,qt),y(Ta,qt,null),e(qt,Cf),e(qt,Hi),e(Hi,Pf),e(qt,Bf),e(qt,ya),e(ya,Rf),e(ya,Ui),e(Ui,Af),e(ya,Lf),e(qt,If),e(qt,Tt),e(Tt,Sf),e(Tt,Ki),e(Ki,Of),e(Tt,Nf),e(Tt,Qi),e(Qi,Wf),e(Tt,Hf),e(Tt,Gi),e(Gi,Uf),e(Tt,Kf),e(Tt,Ji),e(Ji,Qf),e(Tt,Gf),_(o,cd,b),_(o,Vo,b),e(Vo,$n),e($n,Xi),y($a,Xi,null),e(Vo,Jf),e(Vo,Yi),e(Yi,Xf),_(o,pd,b),_(o,dt,b),y(Da,dt,null),e(dt,Yf),e(dt,xo),e(xo,Zf),e(xo,Zi),e(Zi,eu),e(xo,tu),e(xo,Ea),e(Ea,ou),e(xo,nu),e(dt,su),e(dt,Fa),e(Fa,au),e(Fa,Va),e(Va,ru),e(Fa,iu),e(dt,lu),y(Dn,dt,null),e(dt,du),e(dt,mt),y(xa,mt,null),e(mt,cu),e(mt,qo),e(qo,pu),e(qo,mr),e(mr,hu),e(qo,mu),e(qo,el),e(el,fu),e(qo,uu),e(mt,gu),y(En,mt,null),e(mt,_u),y(Fn,mt,null),e(mt,bu),y(Vn,mt,null),_(o,hd,b),_(o,zo,b),e(zo,xn),e(xn,tl),y(qa,tl,null),e(zo,ku),e(zo,ol),e(ol,wu),_(o,md,b),_(o,et,b),y(za,et,null),e(et,vu),e(et,nl),e(nl,Tu),e(et,yu),e(et,ja),e(ja,$u),e(ja,Ma),e(Ma,Du),e(ja,Eu),e(et,Fu),e(et,Ca),e(Ca,Vu),e(Ca,Pa),e(Pa,xu),e(Ca,qu),e(et,zu),y(qn,et,null),e(et,ju),e(et,ft),y(Ba,ft,null),e(ft,Mu),e(ft,jo),e(jo,Cu),e(jo,fr),e(fr,Pu),e(jo,Bu),e(jo,sl),e(sl,Ru),e(jo,Au),e(ft,Lu),y(zn,ft,null),e(ft,Iu),y(jn,ft,null),e(ft,Su),y(Mn,ft,null),_(o,fd,b),_(o,Mo,b),e(Mo,Cn),e(Cn,al),y(Ra,al,null),e(Mo,Ou),e(Mo,rl),e(rl,Nu),_(o,ud,b),_(o,tt,b),y(Aa,tt,null),e(tt,Wu),e(tt,il),e(il,Hu),e(tt,Uu),e(tt,La),e(La,Ku),e(La,Ia),e(Ia,Qu),e(La,Gu),e(tt,Ju),e(tt,Sa),e(Sa,Xu),e(Sa,Oa),e(Oa,Yu),e(Sa,Zu),e(tt,eg),y(Pn,tt,null),e(tt,tg),e(tt,ut),y(Na,ut,null),e(ut,og),e(ut,Co),e(Co,ng),e(Co,ur),e(ur,sg),e(Co,ag),e(Co,ll),e(ll,rg),e(Co,ig),e(ut,lg),y(Bn,ut,null),e(ut,dg),y(Rn,ut,null),e(ut,cg),y(An,ut,null),_(o,gd,b),_(o,Po,b),e(Po,Ln),e(Ln,dl),y(Wa,dl,null),e(Po,pg),e(Po,cl),e(cl,hg),_(o,_d,b),_(o,ot,b),y(Ha,ot,null),e(ot,mg),e(ot,Bo),e(Bo,fg),e(Bo,pl),e(pl,ug),e(Bo,gg),e(Bo,hl),e(hl,_g),e(Bo,bg),e(ot,kg),e(ot,Ua),e(Ua,wg),e(Ua,Ka),e(Ka,vg),e(Ua,Tg),e(ot,yg),e(ot,Qa),e(Qa,$g),e(Qa,Ga),e(Ga,Dg),e(Qa,Eg),e(ot,Fg),y(In,ot,null),e(ot,Vg),e(ot,gt),y(Ja,gt,null),e(gt,xg),e(gt,Ro),e(Ro,qg),e(Ro,gr),e(gr,zg),e(Ro,jg),e(Ro,ml),e(ml,Mg),e(Ro,Cg),e(gt,Pg),y(Sn,gt,null),e(gt,Bg),y(On,gt,null),e(gt,Rg),y(Nn,gt,null),bd=!0},p(o,[b]){const Xa={};b&2&&(Xa.$$scope={dirty:b,ctx:o}),Io.$set(Xa);const fl={};b&2&&(fl.$$scope={dirty:b,ctx:o}),No.$set(fl);const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),Ho.$set(ul);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Ko.$set(gl);const Ya={};b&2&&(Ya.$$scope={dirty:b,ctx:o}),Qo.$set(Ya);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),Jo.$set(_l);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),Yo.$set(bl);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),Zo.$set(kl);const Za={};b&2&&(Za.$$scope={dirty:b,ctx:o}),en.$set(Za);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),on.$set(wl);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),nn.$set(vl);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),sn.$set(Tl);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),an.$set(yl);const er={};b&2&&(er.$$scope={dirty:b,ctx:o}),rn.$set(er);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),dn.$set($l);const Wn={};b&2&&(Wn.$$scope={dirty:b,ctx:o}),cn.$set(Wn);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),pn.$set(Dl);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),mn.$set(El);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),fn.$set(Fl);const yt={};b&2&&(yt.$$scope={dirty:b,ctx:o}),un.$set(yt);const Hn={};b&2&&(Hn.$$scope={dirty:b,ctx:o}),_n.$set(Hn);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),bn.$set(Vl);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),wn.$set(xl);const _r={};b&2&&(_r.$$scope={dirty:b,ctx:o}),vn.$set(_r);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),Tn.$set(ql);const br={};b&2&&(br.$$scope={dirty:b,ctx:o}),Dn.$set(br);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),En.$set(zl);const kr={};b&2&&(kr.$$scope={dirty:b,ctx:o}),Fn.$set(kr);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),Vn.$set(jl);const wr={};b&2&&(wr.$$scope={dirty:b,ctx:o}),qn.$set(wr);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),zn.$set(Ml);const Rt={};b&2&&(Rt.$$scope={dirty:b,ctx:o}),jn.$set(Rt);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),Mn.$set(Cl);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),Pn.$set(Pl);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),Bn.$set(Bl);const tr={};b&2&&(tr.$$scope={dirty:b,ctx:o}),Rn.$set(tr);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:o}),An.$set(Rl);const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),In.$set(Al);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:o}),Sn.$set(Ll);const At={};b&2&&(At.$$scope={dirty:b,ctx:o}),On.$set(At);const Ao={};b&2&&(Ao.$$scope={dirty:b,ctx:o}),Nn.$set(Ao)},i(o){bd||($(l.$$.fragment,o),$(F.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(Io.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(fs.$$.fragment,o),$(No.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ws.$$.fragment,o),$(Ts.$$.fragment,o),$(Ho.$$.fragment,o),$(ys.$$.fragment,o),$($s.$$.fragment,o),$(xs.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(qs.$$.fragment,o),$(zs.$$.fragment,o),$(js.$$.fragment,o),$(Jo.$$.fragment,o),$(Ms.$$.fragment,o),$(Cs.$$.fragment,o),$(As.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(Ls.$$.fragment,o),$(Is.$$.fragment,o),$(Hs.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(Us.$$.fragment,o),$(Ks.$$.fragment,o),$(Ys.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(aa.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(un.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(ha.$$.fragment,o),$(_n.$$.fragment,o),$(bn.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(wn.$$.fragment,o),$(ka.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(wa.$$.fragment,o),$(va.$$.fragment,o),$(Ta.$$.fragment,o),$($a.$$.fragment,o),$(Da.$$.fragment,o),$(Dn.$$.fragment,o),$(xa.$$.fragment,o),$(En.$$.fragment,o),$(Fn.$$.fragment,o),$(Vn.$$.fragment,o),$(qa.$$.fragment,o),$(za.$$.fragment,o),$(qn.$$.fragment,o),$(Ba.$$.fragment,o),$(zn.$$.fragment,o),$(jn.$$.fragment,o),$(Mn.$$.fragment,o),$(Ra.$$.fragment,o),$(Aa.$$.fragment,o),$(Pn.$$.fragment,o),$(Na.$$.fragment,o),$(Bn.$$.fragment,o),$(Rn.$$.fragment,o),$(An.$$.fragment,o),$(Wa.$$.fragment,o),$(Ha.$$.fragment,o),$(In.$$.fragment,o),$(Ja.$$.fragment,o),$(Sn.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),bd=!0)},o(o){D(l.$$.fragment,o),D(F.$$.fragment,o),D(ss.$$.fragment,o),D(as.$$.fragment,o),D(Io.$$.fragment,o),D(is.$$.fragment,o),D(ls.$$.fragment,o),D(ps.$$.fragment,o),D(ms.$$.fragment,o),D(fs.$$.fragment,o),D(No.$$.fragment,o),D(us.$$.fragment,o),D(gs.$$.fragment,o),D(_s.$$.fragment,o),D(ws.$$.fragment,o),D(Ts.$$.fragment,o),D(Ho.$$.fragment,o),D(ys.$$.fragment,o),D($s.$$.fragment,o),D(xs.$$.fragment,o),D(Ko.$$.fragment,o),D(Qo.$$.fragment,o),D(qs.$$.fragment,o),D(zs.$$.fragment,o),D(js.$$.fragment,o),D(Jo.$$.fragment,o),D(Ms.$$.fragment,o),D(Cs.$$.fragment,o),D(As.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(en.$$.fragment,o),D(Ls.$$.fragment,o),D(Is.$$.fragment,o),D(Hs.$$.fragment,o),D(on.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(Us.$$.fragment,o),D(Ks.$$.fragment,o),D(Ys.$$.fragment,o),D(dn.$$.fragment,o),D(cn.$$.fragment,o),D(pn.$$.fragment,o),D(Zs.$$.fragment,o),D(ea.$$.fragment,o),D(aa.$$.fragment,o),D(mn.$$.fragment,o),D(fn.$$.fragment,o),D(un.$$.fragment,o),D(ra.$$.fragment,o),D(ia.$$.fragment,o),D(ha.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(ma.$$.fragment,o),D(fa.$$.fragment,o),D(wn.$$.fragment,o),D(ka.$$.fragment,o),D(vn.$$.fragment,o),D(Tn.$$.fragment,o),D(wa.$$.fragment,o),D(va.$$.fragment,o),D(Ta.$$.fragment,o),D($a.$$.fragment,o),D(Da.$$.fragment,o),D(Dn.$$.fragment,o),D(xa.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),D(Vn.$$.fragment,o),D(qa.$$.fragment,o),D(za.$$.fragment,o),D(qn.$$.fragment,o),D(Ba.$$.fragment,o),D(zn.$$.fragment,o),D(jn.$$.fragment,o),D(Mn.$$.fragment,o),D(Ra.$$.fragment,o),D(Aa.$$.fragment,o),D(Pn.$$.fragment,o),D(Na.$$.fragment,o),D(Bn.$$.fragment,o),D(Rn.$$.fragment,o),D(An.$$.fragment,o),D(Wa.$$.fragment,o),D(Ha.$$.fragment,o),D(In.$$.fragment,o),D(Ja.$$.fragment,o),D(Sn.$$.fragment,o),D(On.$$.fragment,o),D(Nn.$$.fragment,o),bd=!1},d(o){t(d),o&&t(g),o&&t(c),E(l),o&&t(pe),o&&t(A),E(F),o&&t(he),o&&t(I),o&&t(me),o&&t(N),o&&t(fe),o&&t(W),o&&t(ue),o&&t(te),o&&t(ge),o&&t(L),o&&t(_e),o&&t(H),o&&t(be),o&&t(C),o&&t(Ne),o&&t(Z),o&&t(Il),o&&t(to),E(ss),o&&t(Sl),o&&t(bt),E(as),E(Io),o&&t(Ol),o&&t(so),E(is),o&&t(Nl),o&&t(Ze),E(ls),E(ps),E(ms),E(fs),E(No),E(us),o&&t(Wl),o&&t(io),E(gs),o&&t(Hl),o&&t(kt),E(_s),E(ws),E(Ts),E(Ho),o&&t(Ul),o&&t(co),E(ys),o&&t(Kl),o&&t(wt),E($s),E(xs),E(Ko),E(Qo),o&&t(Ql),o&&t(ho),E(qs),o&&t(Gl),o&&t(Pt),E(zs),E(js),E(Jo),o&&t(Jl),o&&t(mo),E(Ms),o&&t(Xl),o&&t(vt),E(Cs),E(As),E(Yo),E(Zo),E(en),o&&t(Yl),o&&t(go),E(Ls),o&&t(Zl),o&&t(st),E(Is),E(Hs),E(on),E(nn),E(sn),E(an),E(rn),o&&t(ed),o&&t(bo),E(Us),o&&t(td),o&&t(at),E(Ks),E(Ys),E(dn),E(cn),E(pn),o&&t(od),o&&t(wo),E(Zs),o&&t(nd),o&&t(rt),E(ea),E(aa),E(mn),E(fn),E(un),o&&t(sd),o&&t(yo),E(ra),o&&t(ad),o&&t(it),E(ia),E(ha),E(_n),E(bn),o&&t(rd),o&&t(Do),E(ma),o&&t(id),o&&t(lt),E(fa),E(wn),E(ka),E(vn),E(Tn),o&&t(ld),o&&t(Fo),E(wa),o&&t(dd),o&&t(Bt),E(va),E(Ta),o&&t(cd),o&&t(Vo),E($a),o&&t(pd),o&&t(dt),E(Da),E(Dn),E(xa),E(En),E(Fn),E(Vn),o&&t(hd),o&&t(zo),E(qa),o&&t(md),o&&t(et),E(za),E(qn),E(Ba),E(zn),E(jn),E(Mn),o&&t(fd),o&&t(Mo),E(Ra),o&&t(ud),o&&t(tt),E(Aa),E(Pn),E(Na),E(Bn),E(Rn),E(An),o&&t(gd),o&&t(Po),E(Wa),o&&t(_d),o&&t(ot),E(Ha),E(In),E(Ja),E(Sn),E(On),E(Nn)}}}const ek={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.DebertaV2ForMultipleChoice",title:"DebertaV2ForMultipleChoice"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function tk(V){return p2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lk extends i2{constructor(d){super();l2(this,d,tk,Z2,d2,{})}}export{lk as default,ek as metadata};
