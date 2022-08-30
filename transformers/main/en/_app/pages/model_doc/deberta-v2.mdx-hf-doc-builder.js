import{S as a2,i as r2,s as i2,e as a,k as p,w as T,t as n,M as l2,c as r,d as t,m as h,a as i,x as w,h as s,b as u,G as e,g as _,y as $,q as y,o as D,B as E,v as d2,L as ve}from"../../chunks/vendor-hf-doc-builder.js";import{T as Be}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Te}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ke}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function c2(F){let d,g,c,m,k;return m=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function p2(F){let d,g,c,m,k;return m=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function h2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function m2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function f2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),m=n("Module"),k=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function u2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function g2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function _2(F){let d,g;return d=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function b2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function k2(F){let d,g,c,m,k;return m=new Te({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function v2(F){let d,g;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function T2(F){let d,g,c,m,k;return m=new Te({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function w2(F){let d,g;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained(
    "microsoft/deberta-v2-xlarge", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function $2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function y2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

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
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function D2(F){let d,g;return d=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function E2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function F2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function V2(F){let d,g;return d=new Te({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function q2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function x2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function z2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,N,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),N=r(G,"CODE",{});var ye=i(N);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function M2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function j2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function C2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,N,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),N=r(G,"CODE",{});var ye=i(N);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function P2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function R2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
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
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function B2(F){let d,g;return d=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function A2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,N,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),N=r(G,"CODE",{});var ye=i(N);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function L2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function S2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function I2(F){let d,g;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function O2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,N,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),N=r(G,"CODE",{});var ye=i(N);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function N2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function W2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function H2(F){let d,g;return d=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function U2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,N,X,ue,P,ge,Q,oe;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),m=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),W=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),H=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),N=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var q=i(d);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(v),m=r(v,"UL",{});var K=i(m);k=r(K,"LI",{});var Ee=i(k);l=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=h(v),x=r(v,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),W=h(v),R=r(v,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(v),z=r(v,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),H=r(L,"CODE",{});var Ve=i(H);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),U=r(L,"CODE",{});var qe=i(U);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var G=i(M);he=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(G,"CODE",{});var we=i(A);me=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(G," or "),N=r(G,"CODE",{});var ye=i(N);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),G.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(be,"CODE",{});var xe=i(Q);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(v,q){_(v,d,q),e(d,g),_(v,c,q),_(v,m,q),e(m,k),e(k,l),e(m,f),e(m,V),e(V,de),_(v,J,q),_(v,x,q),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(v,W,q),_(v,R,q),e(R,te),_(v,Z,q),_(v,z,q),e(z,j),e(j,ne),e(j,H),e(H,ie),e(j,se),e(j,U),e(U,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,me),e(M,fe),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,Q),e(Q,oe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(J),v&&t(x),v&&t(W),v&&t(R),v&&t(Z),v&&t(z)}}}function Q2(F){let d,g,c,m,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var V=i(c);m=s(V,"Module"),V.forEach(t),k=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function G2(F){let d,g,c,m,k;return m=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
`}}),{c(){d=a("p"),g=n("Example:"),c=p(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),$(m,l,f),k=!0},p:ve,i(l){k||(y(m.$$.fragment,l),k=!0)},o(l){D(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function K2(F){let d,g;return d=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){$(d,c,m),g=!0},p:ve,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function J2(F){let d,g,c,m,k,l,f,V,de,J,x,Y,S,ee,ce,I,pe,re,W,R,te,Z,z,j,ne,H,ie,se,U,le,ae,M,he,A,me,fe,N,X,ue,P,ge,Q,oe,v,q,K,Ee,De,C,_e,$e,Fe,B,L,Ve,qe,G,we,ye,be,xe,Gd,Ra,Vr,Kd,Jd,Xd,Ba,qr,Yd,Zd,ec,Aa,xr,tc,oc,Fl,nt,nc,Pn,sc,ac,Rn,rc,ic,Bn,lc,dc,Vl,Pt,ko,zr,An,cc,Mr,pc,ql,ut,Ln,hc,Rt,mc,La,fc,uc,Sn,gc,_c,bc,Bt,kc,Sa,vc,Tc,Ia,wc,$c,xl,At,vo,jr,In,yc,Cr,Dc,zl,je,On,Ec,Nn,Fc,Wn,Vc,qc,xc,kt,Hn,zc,Pr,Mc,jc,Un,Rr,Cc,Pc,Br,Rc,Bc,To,Qn,Ac,Lt,Lc,Ar,Sc,Ic,Lr,Oc,Nc,Wc,st,Gn,Hc,Sr,Uc,Qc,wo,Gc,St,Kc,Ir,Jc,Xc,Or,Yc,Zc,ep,Oa,Kn,Ml,It,$o,Nr,Jn,tp,Wr,op,jl,Ye,Xn,np,Yn,sp,Zn,ap,rp,ip,vt,es,lp,Hr,dp,cp,ts,Ur,pp,hp,Qr,mp,fp,at,os,up,Gr,gp,_p,yo,bp,Ot,kp,Kr,vp,Tp,Jr,wp,$p,Cl,Nt,Do,Xr,ns,yp,Yr,Dp,Pl,Ze,ss,Ep,as,Fp,rs,Vp,qp,xp,is,zp,ls,Mp,jp,Cp,rt,ds,Pp,Wt,Rp,Na,Bp,Ap,Zr,Lp,Sp,Ip,Eo,Op,Fo,Rl,Ht,Vo,ei,cs,Np,ti,Wp,Bl,gt,ps,Hp,oi,Up,Qp,it,hs,Gp,ni,Kp,Jp,si,Xp,Yp,qo,Al,Ut,xo,ai,ms,Zp,ri,eh,Ll,et,fs,th,Qt,oh,ii,nh,sh,us,ah,rh,ih,gs,lh,_s,dh,ch,ph,We,bs,hh,Gt,mh,Wa,fh,uh,li,gh,_h,bh,zo,kh,Mo,vh,jo,Sl,Kt,Co,di,ks,Th,ci,wh,Il,Ae,vs,$h,pi,yh,Dh,Ts,Eh,ws,Fh,Vh,qh,$s,xh,ys,zh,Mh,jh,ze,Ds,Ch,Jt,Ph,Ha,Rh,Bh,hi,Ah,Lh,Sh,Po,Ih,Ro,Oh,Bo,Nh,Ao,Wh,Lo,Ol,Xt,So,mi,Es,Hh,fi,Uh,Nl,Le,Fs,Qh,ui,Gh,Kh,Vs,Jh,qs,Xh,Yh,Zh,xs,em,zs,tm,om,nm,He,Ms,sm,Yt,am,Ua,rm,im,gi,lm,dm,cm,Io,pm,Oo,hm,No,Wl,Zt,Wo,_i,js,mm,bi,fm,Hl,Se,Cs,um,eo,gm,ki,_m,bm,vi,km,vm,Tm,Ps,wm,Rs,$m,ym,Dm,Bs,Em,As,Fm,Vm,qm,Ue,Ls,xm,to,zm,Qa,Mm,jm,Ti,Cm,Pm,Rm,Ho,Bm,Uo,Am,Qo,Ul,oo,Go,wi,Ss,Lm,$i,Sm,Ql,Ie,Is,Im,yi,Om,Nm,Os,Wm,Ns,Hm,Um,Qm,Ws,Gm,Hs,Km,Jm,Xm,lt,Us,Ym,no,Zm,Ga,ef,tf,Di,of,nf,sf,Ko,af,Jo,Gl,so,Xo,Ei,Qs,rf,Fi,lf,Kl,Oe,Gs,df,Ks,cf,Js,pf,hf,mf,Xs,ff,Ys,uf,gf,_f,Yo,bf,dt,Zs,kf,ao,vf,Ka,Tf,wf,Vi,$f,yf,Df,Zo,Ef,en,Jl,ro,tn,qi,ea,Ff,xi,Vf,Xl,_t,ta,qf,zi,xf,zf,ct,oa,Mf,Mi,jf,Cf,na,Pf,ji,Rf,Bf,Af,tt,Lf,Ci,Sf,If,Pi,Of,Nf,Ri,Wf,Hf,Bi,Uf,Qf,Yl,io,on,Ai,sa,Gf,Li,Kf,Zl,Ne,aa,Jf,lo,Xf,Si,Yf,Zf,ra,eu,tu,ou,ia,nu,la,su,au,ru,nn,iu,Qe,da,lu,co,du,Ja,cu,pu,Ii,hu,mu,fu,sn,uu,an,gu,rn,ed,po,ln,Oi,ca,_u,Ni,bu,td,Ce,pa,ku,Wi,vu,Tu,ha,wu,ma,$u,yu,Du,fa,Eu,ua,Fu,Vu,qu,dn,xu,Ge,ga,zu,ho,Mu,Xa,ju,Cu,Hi,Pu,Ru,Bu,cn,Au,pn,Lu,hn,od,mo,mn,Ui,_a,Su,Qi,Iu,nd,Pe,ba,Ou,Gi,Nu,Wu,ka,Hu,va,Uu,Qu,Gu,Ta,Ku,wa,Ju,Xu,Yu,fn,Zu,Ke,$a,eg,fo,tg,Ya,og,ng,Ki,sg,ag,rg,un,ig,gn,lg,_n,sd,uo,bn,Ji,ya,dg,Xi,cg,ad,Re,Da,pg,go,hg,Yi,mg,fg,Zi,ug,gg,_g,Ea,bg,Fa,kg,vg,Tg,Va,wg,qa,$g,yg,Dg,kn,Eg,Je,xa,Fg,_o,Vg,Za,qg,xg,el,zg,Mg,jg,vn,Cg,Tn,Pg,wn,rd;return l=new Me({}),ee=new Me({}),An=new Me({}),Ln=new O({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L42"}}),In=new Me({}),On=new O({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L56"}}),Hn=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L182",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L206",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L232",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wo=new ke({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[c2]},$$scope:{ctx:F}}}),Kn=new O({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L265"}}),Jn=new Me({}),Xn=new O({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L63"}}),es=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L153",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L203",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yo=new ke({props:{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[p2]},$$scope:{ctx:F}}}),ns=new Me({}),ss=new O({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1004"}}),ds=new O({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1028",returnDescription:`
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
`}}),Eo=new Be({props:{$$slots:{default:[h2]},$$scope:{ctx:F}}}),Fo=new ke({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[m2]},$$scope:{ctx:F}}}),cs=new Me({}),ps=new O({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L908"}}),hs=new O({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/main/src/torch/nn/modules/module.py#L190"}}),qo=new Be({props:{$$slots:{default:[f2]},$$scope:{ctx:F}}}),ms=new Me({}),fs=new O({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1117"}}),bs=new O({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1136",returnDescription:`
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
`}}),zo=new Be({props:{$$slots:{default:[u2]},$$scope:{ctx:F}}}),Mo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[g2]},$$scope:{ctx:F}}}),jo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[_2]},$$scope:{ctx:F}}}),ks=new Me({}),vs=new O({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1253"}}),Ds=new O({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1278",returnDescription:`
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
`}}),Po=new Be({props:{$$slots:{default:[b2]},$$scope:{ctx:F}}}),Ro=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[k2]},$$scope:{ctx:F}}}),Bo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[v2]},$$scope:{ctx:F}}}),Ao=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[T2]},$$scope:{ctx:F}}}),Lo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[w2]},$$scope:{ctx:F}}}),Es=new Me({}),Fs=new O({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1373"}}),Ms=new O({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1387",returnDescription:`
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
`}}),Io=new Be({props:{$$slots:{default:[$2]},$$scope:{ctx:F}}}),Oo=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[y2]},$$scope:{ctx:F}}}),No=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[D2]},$$scope:{ctx:F}}}),js=new Me({}),Cs=new O({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1450"}}),Ls=new O({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1463",returnDescription:`
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
`}}),Ho=new Be({props:{$$slots:{default:[E2]},$$scope:{ctx:F}}}),Uo=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[F2]},$$scope:{ctx:F}}}),Qo=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[V2]},$$scope:{ctx:F}}}),Ss=new Me({}),Is=new O({props:{name:"class transformers.DebertaV2ForMultipleChoice",anchor:"transformers.DebertaV2ForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1550"}}),Us=new O({props:{name:"forward",anchor:"transformers.DebertaV2ForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1574",returnDescription:`
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
`}}),Ko=new Be({props:{$$slots:{default:[q2]},$$scope:{ctx:F}}}),Jo=new ke({props:{anchor:"transformers.DebertaV2ForMultipleChoice.forward.example",$$slots:{default:[x2]},$$scope:{ctx:F}}}),Qs=new Me({}),Gs=new O({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1174"}}),Yo=new Be({props:{$$slots:{default:[z2]},$$scope:{ctx:F}}}),Zs=new O({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1180",returnDescription:`
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
`}}),Zo=new Be({props:{$$slots:{default:[M2]},$$scope:{ctx:F}}}),en=new ke({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[j2]},$$scope:{ctx:F}}}),ea=new Me({}),ta=new O({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1078"}}),oa=new O({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L492",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),sa=new Me({}),aa=new O({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1223"}}),nn=new Be({props:{$$slots:{default:[C2]},$$scope:{ctx:F}}}),da=new O({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1239",returnDescription:`
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
`}}),sn=new Be({props:{$$slots:{default:[P2]},$$scope:{ctx:F}}}),an=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[R2]},$$scope:{ctx:F}}}),rn=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[B2]},$$scope:{ctx:F}}}),ca=new Me({}),pa=new O({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1307"}}),dn=new Be({props:{$$slots:{default:[A2]},$$scope:{ctx:F}}}),ga=new O({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1325",returnDescription:`
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
`}}),cn=new Be({props:{$$slots:{default:[L2]},$$scope:{ctx:F}}}),pn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[S2]},$$scope:{ctx:F}}}),hn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[I2]},$$scope:{ctx:F}}}),_a=new Me({}),ba=new O({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1396"}}),fn=new Be({props:{$$slots:{default:[O2]},$$scope:{ctx:F}}}),$a=new O({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1408",returnDescription:`
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
`}}),un=new Be({props:{$$slots:{default:[N2]},$$scope:{ctx:F}}}),gn=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[W2]},$$scope:{ctx:F}}}),_n=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[H2]},$$scope:{ctx:F}}}),ya=new Me({}),Da=new O({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1475"}}),kn=new Be({props:{$$slots:{default:[U2]},$$scope:{ctx:F}}}),xa=new O({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1486",returnDescription:`
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
`}}),vn=new Be({props:{$$slots:{default:[Q2]},$$scope:{ctx:F}}}),Tn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[G2]},$$scope:{ctx:F}}}),wn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[K2]},$$scope:{ctx:F}}}),{c(){d=a("meta"),g=p(),c=a("h1"),m=a("a"),k=a("span"),T(l.$$.fragment),f=p(),V=a("span"),de=n("DeBERTa-v2"),J=p(),x=a("h2"),Y=a("a"),S=a("span"),T(ee.$$.fragment),ce=p(),I=a("span"),pe=n("Overview"),re=p(),W=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=p(),ne=a("p"),H=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=p(),se=a("p"),U=n("The abstract from the paper is the following:"),le=p(),ae=a("p"),M=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=a("a"),me=n("https://github.com/microsoft/DeBERTa"),fe=n("."),N=p(),X=a("p"),ue=n("The following information is visible directly on the "),P=a("a"),ge=n(`original implementation
repository`),Q=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),v=n("blog"),q=p(),K=a("p"),Ee=n("New in v2:"),De=p(),C=a("ul"),_e=a("li"),$e=a("strong"),Fe=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=a("a"),Ve=n("sentencepiece-based"),qe=n(" tokenizer."),G=p(),we=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),xe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Gd=p(),Ra=a("li"),Vr=a("strong"),Kd=n("Sharing position projection matrix with content projection matrix in attention layer"),Jd=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Xd=p(),Ba=a("li"),qr=a("strong"),Yd=n("Apply bucket to encode relative positions"),Zd=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),ec=p(),Aa=a("li"),xr=a("strong"),tc=n("900M model & 1.5B model"),oc=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Fl=p(),nt=a("p"),nc=n("This model was contributed by "),Pn=a("a"),sc=n("DeBERTa"),ac=n(`. This model TF 2.0 implementation was
contributed by `),Rn=a("a"),rc=n("kamalkraj"),ic=n(". The original code can be found "),Bn=a("a"),lc=n("here"),dc=n("."),Vl=p(),Pt=a("h2"),ko=a("a"),zr=a("span"),T(An.$$.fragment),cc=p(),Mr=a("span"),pc=n("DebertaV2Config"),ql=p(),ut=a("div"),T(Ln.$$.fragment),hc=p(),Rt=a("p"),mc=n("This is the configuration class to store the configuration of a "),La=a("a"),fc=n("DebertaV2Model"),uc=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Sn=a("a"),gc=n("microsoft/deberta-v2-xlarge"),_c=n(" architecture."),bc=p(),Bt=a("p"),kc=n("Configuration objects inherit from "),Sa=a("a"),vc=n("PretrainedConfig"),Tc=n(` and can be used to control the model outputs. Read the
documentation from `),Ia=a("a"),wc=n("PretrainedConfig"),$c=n(" for more information."),xl=p(),At=a("h2"),vo=a("a"),jr=a("span"),T(In.$$.fragment),yc=p(),Cr=a("span"),Dc=n("DebertaV2Tokenizer"),zl=p(),je=a("div"),T(On.$$.fragment),Ec=p(),Nn=a("p"),Fc=n("Constructs a DeBERTa-v2 tokenizer. Based on "),Wn=a("a"),Vc=n("SentencePiece"),qc=n("."),xc=p(),kt=a("div"),T(Hn.$$.fragment),zc=p(),Pr=a("p"),Mc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),jc=p(),Un=a("ul"),Rr=a("li"),Cc=n("single sequence: [CLS] X [SEP]"),Pc=p(),Br=a("li"),Rc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Bc=p(),To=a("div"),T(Qn.$$.fragment),Ac=p(),Lt=a("p"),Lc=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ar=a("code"),Sc=n("prepare_for_model"),Ic=n(" or "),Lr=a("code"),Oc=n("encode_plus"),Nc=n(" methods."),Wc=p(),st=a("div"),T(Gn.$$.fragment),Hc=p(),Sr=a("p"),Uc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Qc=p(),T(wo.$$.fragment),Gc=p(),St=a("p"),Kc=n("If "),Ir=a("code"),Jc=n("token_ids_1"),Xc=n(" is "),Or=a("code"),Yc=n("None"),Zc=n(", this method only returns the first portion of the mask (0s)."),ep=p(),Oa=a("div"),T(Kn.$$.fragment),Ml=p(),It=a("h2"),$o=a("a"),Nr=a("span"),T(Jn.$$.fragment),tp=p(),Wr=a("span"),op=n("DebertaV2TokenizerFast"),jl=p(),Ye=a("div"),T(Xn.$$.fragment),np=p(),Yn=a("p"),sp=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),Zn=a("a"),ap=n("SentencePiece"),rp=n("."),ip=p(),vt=a("div"),T(es.$$.fragment),lp=p(),Hr=a("p"),dp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),cp=p(),ts=a("ul"),Ur=a("li"),pp=n("single sequence: [CLS] X [SEP]"),hp=p(),Qr=a("li"),mp=n("pair of sequences: [CLS] A [SEP] B [SEP]"),fp=p(),at=a("div"),T(os.$$.fragment),up=p(),Gr=a("p"),gp=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),_p=p(),T(yo.$$.fragment),bp=p(),Ot=a("p"),kp=n("If "),Kr=a("code"),vp=n("token_ids_1"),Tp=n(" is "),Jr=a("code"),wp=n("None"),$p=n(", this method only returns the first portion of the mask (0s)."),Cl=p(),Nt=a("h2"),Do=a("a"),Xr=a("span"),T(ns.$$.fragment),yp=p(),Yr=a("span"),Dp=n("DebertaV2Model"),Pl=p(),Ze=a("div"),T(ss.$$.fragment),Ep=p(),as=a("p"),Fp=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),rs=a("a"),Vp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xp=p(),is=a("p"),zp=n("This model is also a PyTorch "),ls=a("a"),Mp=n("torch.nn.Module"),jp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp=p(),rt=a("div"),T(ds.$$.fragment),Pp=p(),Wt=a("p"),Rp=n("The "),Na=a("a"),Bp=n("DebertaV2Model"),Ap=n(" forward method, overrides the "),Zr=a("code"),Lp=n("__call__"),Sp=n(" special method."),Ip=p(),T(Eo.$$.fragment),Op=p(),T(Fo.$$.fragment),Rl=p(),Ht=a("h2"),Vo=a("a"),ei=a("span"),T(cs.$$.fragment),Np=p(),ti=a("span"),Wp=n("DebertaV2PreTrainedModel"),Bl=p(),gt=a("div"),T(ps.$$.fragment),Hp=p(),oi=a("p"),Up=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Qp=p(),it=a("div"),T(hs.$$.fragment),Gp=p(),ni=a("p"),Kp=n("Defines the computation performed at every call."),Jp=p(),si=a("p"),Xp=n("Should be overridden by all subclasses."),Yp=p(),T(qo.$$.fragment),Al=p(),Ut=a("h2"),xo=a("a"),ai=a("span"),T(ms.$$.fragment),Zp=p(),ri=a("span"),eh=n("DebertaV2ForMaskedLM"),Ll=p(),et=a("div"),T(fs.$$.fragment),th=p(),Qt=a("p"),oh=n("DeBERTa Model with a "),ii=a("code"),nh=n("language modeling"),sh=n(` head on top.
The DeBERTa model was proposed in `),us=a("a"),ah=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ih=p(),gs=a("p"),lh=n("This model is also a PyTorch "),_s=a("a"),dh=n("torch.nn.Module"),ch=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph=p(),We=a("div"),T(bs.$$.fragment),hh=p(),Gt=a("p"),mh=n("The "),Wa=a("a"),fh=n("DebertaV2ForMaskedLM"),uh=n(" forward method, overrides the "),li=a("code"),gh=n("__call__"),_h=n(" special method."),bh=p(),T(zo.$$.fragment),kh=p(),T(Mo.$$.fragment),vh=p(),T(jo.$$.fragment),Sl=p(),Kt=a("h2"),Co=a("a"),di=a("span"),T(ks.$$.fragment),Th=p(),ci=a("span"),wh=n("DebertaV2ForSequenceClassification"),Il=p(),Ae=a("div"),T(vs.$$.fragment),$h=p(),pi=a("p"),yh=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dh=p(),Ts=a("p"),Eh=n("The DeBERTa model was proposed in "),ws=a("a"),Fh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qh=p(),$s=a("p"),xh=n("This model is also a PyTorch "),ys=a("a"),zh=n("torch.nn.Module"),Mh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh=p(),ze=a("div"),T(Ds.$$.fragment),Ch=p(),Jt=a("p"),Ph=n("The "),Ha=a("a"),Rh=n("DebertaV2ForSequenceClassification"),Bh=n(" forward method, overrides the "),hi=a("code"),Ah=n("__call__"),Lh=n(" special method."),Sh=p(),T(Po.$$.fragment),Ih=p(),T(Ro.$$.fragment),Oh=p(),T(Bo.$$.fragment),Nh=p(),T(Ao.$$.fragment),Wh=p(),T(Lo.$$.fragment),Ol=p(),Xt=a("h2"),So=a("a"),mi=a("span"),T(Es.$$.fragment),Hh=p(),fi=a("span"),Uh=n("DebertaV2ForTokenClassification"),Nl=p(),Le=a("div"),T(Fs.$$.fragment),Qh=p(),ui=a("p"),Gh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kh=p(),Vs=a("p"),Jh=n("The DeBERTa model was proposed in "),qs=a("a"),Xh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Yh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zh=p(),xs=a("p"),em=n("This model is also a PyTorch "),zs=a("a"),tm=n("torch.nn.Module"),om=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nm=p(),He=a("div"),T(Ms.$$.fragment),sm=p(),Yt=a("p"),am=n("The "),Ua=a("a"),rm=n("DebertaV2ForTokenClassification"),im=n(" forward method, overrides the "),gi=a("code"),lm=n("__call__"),dm=n(" special method."),cm=p(),T(Io.$$.fragment),pm=p(),T(Oo.$$.fragment),hm=p(),T(No.$$.fragment),Wl=p(),Zt=a("h2"),Wo=a("a"),_i=a("span"),T(js.$$.fragment),mm=p(),bi=a("span"),fm=n("DebertaV2ForQuestionAnswering"),Hl=p(),Se=a("div"),T(Cs.$$.fragment),um=p(),eo=a("p"),gm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ki=a("code"),_m=n("span start logits"),bm=n(" and "),vi=a("code"),km=n("span end logits"),vm=n(")."),Tm=p(),Ps=a("p"),wm=n("The DeBERTa model was proposed in "),Rs=a("a"),$m=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ym=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dm=p(),Bs=a("p"),Em=n("This model is also a PyTorch "),As=a("a"),Fm=n("torch.nn.Module"),Vm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qm=p(),Ue=a("div"),T(Ls.$$.fragment),xm=p(),to=a("p"),zm=n("The "),Qa=a("a"),Mm=n("DebertaV2ForQuestionAnswering"),jm=n(" forward method, overrides the "),Ti=a("code"),Cm=n("__call__"),Pm=n(" special method."),Rm=p(),T(Ho.$$.fragment),Bm=p(),T(Uo.$$.fragment),Am=p(),T(Qo.$$.fragment),Ul=p(),oo=a("h2"),Go=a("a"),wi=a("span"),T(Ss.$$.fragment),Lm=p(),$i=a("span"),Sm=n("DebertaV2ForMultipleChoice"),Ql=p(),Ie=a("div"),T(Is.$$.fragment),Im=p(),yi=a("p"),Om=n(`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Nm=p(),Os=a("p"),Wm=n("The DeBERTa model was proposed in "),Ns=a("a"),Hm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Um=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qm=p(),Ws=a("p"),Gm=n("This model is also a PyTorch "),Hs=a("a"),Km=n("torch.nn.Module"),Jm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xm=p(),lt=a("div"),T(Us.$$.fragment),Ym=p(),no=a("p"),Zm=n("The "),Ga=a("a"),ef=n("DebertaV2ForMultipleChoice"),tf=n(" forward method, overrides the "),Di=a("code"),of=n("__call__"),nf=n(" special method."),sf=p(),T(Ko.$$.fragment),af=p(),T(Jo.$$.fragment),Gl=p(),so=a("h2"),Xo=a("a"),Ei=a("span"),T(Qs.$$.fragment),rf=p(),Fi=a("span"),lf=n("TFDebertaV2Model"),Kl=p(),Oe=a("div"),T(Gs.$$.fragment),df=p(),Ks=a("p"),cf=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Js=a("a"),pf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mf=p(),Xs=a("p"),ff=n("This model is also a "),Ys=a("a"),uf=n("tf.keras.Model"),gf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_f=p(),T(Yo.$$.fragment),bf=p(),dt=a("div"),T(Zs.$$.fragment),kf=p(),ao=a("p"),vf=n("The "),Ka=a("a"),Tf=n("TFDebertaV2Model"),wf=n(" forward method, overrides the "),Vi=a("code"),$f=n("__call__"),yf=n(" special method."),Df=p(),T(Zo.$$.fragment),Ef=p(),T(en.$$.fragment),Jl=p(),ro=a("h2"),tn=a("a"),qi=a("span"),T(ea.$$.fragment),Ff=p(),xi=a("span"),Vf=n("TFDebertaV2PreTrainedModel"),Xl=p(),_t=a("div"),T(ta.$$.fragment),qf=p(),zi=a("p"),xf=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),zf=p(),ct=a("div"),T(oa.$$.fragment),Mf=p(),Mi=a("p"),jf=n("Calls the model on new inputs and returns the outputs as tensors."),Cf=p(),na=a("p"),Pf=n("In this case "),ji=a("code"),Rf=n("call()"),Bf=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Af=p(),tt=a("p"),Lf=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Ci=a("code"),Sf=n("tf.keras.Model"),If=n(`.
To call a model on an input, always use the `),Pi=a("code"),Of=n("__call__()"),Nf=n(` method,
i.e. `),Ri=a("code"),Wf=n("model(inputs)"),Hf=n(", which relies on the underlying "),Bi=a("code"),Uf=n("call()"),Qf=n(" method."),Yl=p(),io=a("h2"),on=a("a"),Ai=a("span"),T(sa.$$.fragment),Gf=p(),Li=a("span"),Kf=n("TFDebertaV2ForMaskedLM"),Zl=p(),Ne=a("div"),T(aa.$$.fragment),Jf=p(),lo=a("p"),Xf=n("DeBERTa Model with a "),Si=a("code"),Yf=n("language modeling"),Zf=n(` head on top.
The DeBERTa model was proposed in `),ra=a("a"),eu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ou=p(),ia=a("p"),nu=n("This model is also a "),la=a("a"),su=n("tf.keras.Model"),au=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ru=p(),T(nn.$$.fragment),iu=p(),Qe=a("div"),T(da.$$.fragment),lu=p(),co=a("p"),du=n("The "),Ja=a("a"),cu=n("TFDebertaV2ForMaskedLM"),pu=n(" forward method, overrides the "),Ii=a("code"),hu=n("__call__"),mu=n(" special method."),fu=p(),T(sn.$$.fragment),uu=p(),T(an.$$.fragment),gu=p(),T(rn.$$.fragment),ed=p(),po=a("h2"),ln=a("a"),Oi=a("span"),T(ca.$$.fragment),_u=p(),Ni=a("span"),bu=n("TFDebertaV2ForSequenceClassification"),td=p(),Ce=a("div"),T(pa.$$.fragment),ku=p(),Wi=a("p"),vu=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tu=p(),ha=a("p"),wu=n("The DeBERTa model was proposed in "),ma=a("a"),$u=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Du=p(),fa=a("p"),Eu=n("This model is also a "),ua=a("a"),Fu=n("tf.keras.Model"),Vu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qu=p(),T(dn.$$.fragment),xu=p(),Ge=a("div"),T(ga.$$.fragment),zu=p(),ho=a("p"),Mu=n("The "),Xa=a("a"),ju=n("TFDebertaV2ForSequenceClassification"),Cu=n(" forward method, overrides the "),Hi=a("code"),Pu=n("__call__"),Ru=n(" special method."),Bu=p(),T(cn.$$.fragment),Au=p(),T(pn.$$.fragment),Lu=p(),T(hn.$$.fragment),od=p(),mo=a("h2"),mn=a("a"),Ui=a("span"),T(_a.$$.fragment),Su=p(),Qi=a("span"),Iu=n("TFDebertaV2ForTokenClassification"),nd=p(),Pe=a("div"),T(ba.$$.fragment),Ou=p(),Gi=a("p"),Nu=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Wu=p(),ka=a("p"),Hu=n("The DeBERTa model was proposed in "),va=a("a"),Uu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gu=p(),Ta=a("p"),Ku=n("This model is also a "),wa=a("a"),Ju=n("tf.keras.Model"),Xu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu=p(),T(fn.$$.fragment),Zu=p(),Ke=a("div"),T($a.$$.fragment),eg=p(),fo=a("p"),tg=n("The "),Ya=a("a"),og=n("TFDebertaV2ForTokenClassification"),ng=n(" forward method, overrides the "),Ki=a("code"),sg=n("__call__"),ag=n(" special method."),rg=p(),T(un.$$.fragment),ig=p(),T(gn.$$.fragment),lg=p(),T(_n.$$.fragment),sd=p(),uo=a("h2"),bn=a("a"),Ji=a("span"),T(ya.$$.fragment),dg=p(),Xi=a("span"),cg=n("TFDebertaV2ForQuestionAnswering"),ad=p(),Re=a("div"),T(Da.$$.fragment),pg=p(),go=a("p"),hg=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yi=a("code"),mg=n("span start logits"),fg=n(" and "),Zi=a("code"),ug=n("span end logits"),gg=n(")."),_g=p(),Ea=a("p"),bg=n("The DeBERTa model was proposed in "),Fa=a("a"),kg=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vg=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tg=p(),Va=a("p"),wg=n("This model is also a "),qa=a("a"),$g=n("tf.keras.Model"),yg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dg=p(),T(kn.$$.fragment),Eg=p(),Je=a("div"),T(xa.$$.fragment),Fg=p(),_o=a("p"),Vg=n("The "),Za=a("a"),qg=n("TFDebertaV2ForQuestionAnswering"),xg=n(" forward method, overrides the "),el=a("code"),zg=n("__call__"),Mg=n(" special method."),jg=p(),T(vn.$$.fragment),Cg=p(),T(Tn.$$.fragment),Pg=p(),T(wn.$$.fragment),this.h()},l(o){const b=l2('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var za=i(c);m=r(za,"A",{id:!0,class:!0,href:!0});var tl=i(m);k=r(tl,"SPAN",{});var ol=i(k);w(l.$$.fragment,ol),ol.forEach(t),tl.forEach(t),f=h(za),V=r(za,"SPAN",{});var nl=i(V);de=s(nl,"DeBERTa-v2"),nl.forEach(t),za.forEach(t),J=h(o),x=r(o,"H2",{class:!0});var Ma=i(x);Y=r(Ma,"A",{id:!0,class:!0,href:!0});var sl=i(Y);S=r(sl,"SPAN",{});var al=i(S);w(ee.$$.fragment,al),al.forEach(t),sl.forEach(t),ce=h(Ma),I=r(Ma,"SPAN",{});var rl=i(I);pe=s(rl,"Overview"),rl.forEach(t),Ma.forEach(t),re=h(o),W=r(o,"P",{});var ja=i(W);R=s(ja,"The DeBERTa model was proposed in "),te=r(ja,"A",{href:!0,rel:!0});var il=i(te);Z=s(il,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),il.forEach(t),z=s(ja,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ja.forEach(t),j=h(o),ne=r(o,"P",{});var ll=i(ne);H=s(ll,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ll.forEach(t),ie=h(o),se=r(o,"P",{});var dl=i(se);U=s(dl,"The abstract from the paper is the following:"),dl.forEach(t),le=h(o),ae=r(o,"P",{});var cl=i(ae);M=r(cl,"EM",{});var Ca=i(M);he=s(Ca,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(Ca,"A",{href:!0,rel:!0});var pl=i(A);me=s(pl,"https://github.com/microsoft/DeBERTa"),pl.forEach(t),fe=s(Ca,"."),Ca.forEach(t),cl.forEach(t),N=h(o),X=r(o,"P",{});var $n=i(X);ue=s($n,"The following information is visible directly on the "),P=r($n,"A",{href:!0,rel:!0});var hl=i(P);ge=s(hl,`original implementation
repository`),hl.forEach(t),Q=s($n,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r($n,"A",{href:!0,rel:!0});var ml=i(oe);v=s(ml,"blog"),ml.forEach(t),$n.forEach(t),q=h(o),K=r(o,"P",{});var fl=i(K);Ee=s(fl,"New in v2:"),fl.forEach(t),De=h(o),C=r(o,"UL",{});var ot=i(C);_e=r(ot,"LI",{});var yn=i(_e);$e=r(yn,"STRONG",{});var ul=i($e);Fe=s(ul,"Vocabulary"),ul.forEach(t),B=s(yn,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=r(yn,"A",{href:!0,rel:!0});var gl=i(L);Ve=s(gl,"sentencepiece-based"),gl.forEach(t),qe=s(yn," tokenizer."),yn.forEach(t),G=h(ot),we=r(ot,"LI",{});var er=i(we);ye=r(er,"STRONG",{});var _l=i(ye);be=s(_l,"nGiE(nGram Induced Input Encoding)"),_l.forEach(t),xe=s(er,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),er.forEach(t),Gd=h(ot),Ra=r(ot,"LI",{});var tr=i(Ra);Vr=r(tr,"STRONG",{});var bl=i(Vr);Kd=s(bl,"Sharing position projection matrix with content projection matrix in attention layer"),bl.forEach(t),Jd=s(tr,` Based on previous
experiments, this can save parameters without affecting the performance.`),tr.forEach(t),Xd=h(ot),Ba=r(ot,"LI",{});var or=i(Ba);qr=r(or,"STRONG",{});var kl=i(qr);Yd=s(kl,"Apply bucket to encode relative positions"),kl.forEach(t),Zd=s(or,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),or.forEach(t),ec=h(ot),Aa=r(ot,"LI",{});var nr=i(Aa);xr=r(nr,"STRONG",{});var vl=i(xr);tc=s(vl,"900M model & 1.5B model"),vl.forEach(t),oc=s(nr,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),nr.forEach(t),ot.forEach(t),Fl=h(o),nt=r(o,"P",{});var bt=i(nt);nc=s(bt,"This model was contributed by "),Pn=r(bt,"A",{href:!0,rel:!0});var Tl=i(Pn);sc=s(Tl,"DeBERTa"),Tl.forEach(t),ac=s(bt,`. This model TF 2.0 implementation was
contributed by `),Rn=r(bt,"A",{href:!0,rel:!0});var wl=i(Rn);rc=s(wl,"kamalkraj"),wl.forEach(t),ic=s(bt,". The original code can be found "),Bn=r(bt,"A",{href:!0,rel:!0});var $l=i(Bn);lc=s($l,"here"),$l.forEach(t),dc=s(bt,"."),bt.forEach(t),Vl=h(o),Pt=r(o,"H2",{class:!0});var Pa=i(Pt);ko=r(Pa,"A",{id:!0,class:!0,href:!0});var yl=i(ko);zr=r(yl,"SPAN",{});var Dl=i(zr);w(An.$$.fragment,Dl),Dl.forEach(t),yl.forEach(t),cc=h(Pa),Mr=r(Pa,"SPAN",{});var El=i(Mr);pc=s(El,"DebertaV2Config"),El.forEach(t),Pa.forEach(t),ql=h(o),ut=r(o,"DIV",{class:!0});var bo=i(ut);w(Ln.$$.fragment,bo),hc=h(bo),Rt=r(bo,"P",{});var sr=i(Rt);mc=s(sr,"This is the configuration class to store the configuration of a "),La=r(sr,"A",{href:!0});var Rg=i(La);fc=s(Rg,"DebertaV2Model"),Rg.forEach(t),uc=s(sr,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Sn=r(sr,"A",{href:!0,rel:!0});var Bg=i(Sn);gc=s(Bg,"microsoft/deberta-v2-xlarge"),Bg.forEach(t),_c=s(sr," architecture."),sr.forEach(t),bc=h(bo),Bt=r(bo,"P",{});var ar=i(Bt);kc=s(ar,"Configuration objects inherit from "),Sa=r(ar,"A",{href:!0});var Ag=i(Sa);vc=s(Ag,"PretrainedConfig"),Ag.forEach(t),Tc=s(ar,` and can be used to control the model outputs. Read the
documentation from `),Ia=r(ar,"A",{href:!0});var Lg=i(Ia);wc=s(Lg,"PretrainedConfig"),Lg.forEach(t),$c=s(ar," for more information."),ar.forEach(t),bo.forEach(t),xl=h(o),At=r(o,"H2",{class:!0});var id=i(At);vo=r(id,"A",{id:!0,class:!0,href:!0});var Sg=i(vo);jr=r(Sg,"SPAN",{});var Ig=i(jr);w(In.$$.fragment,Ig),Ig.forEach(t),Sg.forEach(t),yc=h(id),Cr=r(id,"SPAN",{});var Og=i(Cr);Dc=s(Og,"DebertaV2Tokenizer"),Og.forEach(t),id.forEach(t),zl=h(o),je=r(o,"DIV",{class:!0});var pt=i(je);w(On.$$.fragment,pt),Ec=h(pt),Nn=r(pt,"P",{});var ld=i(Nn);Fc=s(ld,"Constructs a DeBERTa-v2 tokenizer. Based on "),Wn=r(ld,"A",{href:!0,rel:!0});var Ng=i(Wn);Vc=s(Ng,"SentencePiece"),Ng.forEach(t),qc=s(ld,"."),ld.forEach(t),xc=h(pt),kt=r(pt,"DIV",{class:!0});var rr=i(kt);w(Hn.$$.fragment,rr),zc=h(rr),Pr=r(rr,"P",{});var Wg=i(Pr);Mc=s(Wg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Wg.forEach(t),jc=h(rr),Un=r(rr,"UL",{});var dd=i(Un);Rr=r(dd,"LI",{});var Hg=i(Rr);Cc=s(Hg,"single sequence: [CLS] X [SEP]"),Hg.forEach(t),Pc=h(dd),Br=r(dd,"LI",{});var Ug=i(Br);Rc=s(Ug,"pair of sequences: [CLS] A [SEP] B [SEP]"),Ug.forEach(t),dd.forEach(t),rr.forEach(t),Bc=h(pt),To=r(pt,"DIV",{class:!0});var cd=i(To);w(Qn.$$.fragment,cd),Ac=h(cd),Lt=r(cd,"P",{});var ir=i(Lt);Lc=s(ir,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ar=r(ir,"CODE",{});var Qg=i(Ar);Sc=s(Qg,"prepare_for_model"),Qg.forEach(t),Ic=s(ir," or "),Lr=r(ir,"CODE",{});var Gg=i(Lr);Oc=s(Gg,"encode_plus"),Gg.forEach(t),Nc=s(ir," methods."),ir.forEach(t),cd.forEach(t),Wc=h(pt),st=r(pt,"DIV",{class:!0});var Dn=i(st);w(Gn.$$.fragment,Dn),Hc=h(Dn),Sr=r(Dn,"P",{});var Kg=i(Sr);Uc=s(Kg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Kg.forEach(t),Qc=h(Dn),w(wo.$$.fragment,Dn),Gc=h(Dn),St=r(Dn,"P",{});var lr=i(St);Kc=s(lr,"If "),Ir=r(lr,"CODE",{});var Jg=i(Ir);Jc=s(Jg,"token_ids_1"),Jg.forEach(t),Xc=s(lr," is "),Or=r(lr,"CODE",{});var Xg=i(Or);Yc=s(Xg,"None"),Xg.forEach(t),Zc=s(lr,", this method only returns the first portion of the mask (0s)."),lr.forEach(t),Dn.forEach(t),ep=h(pt),Oa=r(pt,"DIV",{class:!0});var Yg=i(Oa);w(Kn.$$.fragment,Yg),Yg.forEach(t),pt.forEach(t),Ml=h(o),It=r(o,"H2",{class:!0});var pd=i(It);$o=r(pd,"A",{id:!0,class:!0,href:!0});var Zg=i($o);Nr=r(Zg,"SPAN",{});var e_=i(Nr);w(Jn.$$.fragment,e_),e_.forEach(t),Zg.forEach(t),tp=h(pd),Wr=r(pd,"SPAN",{});var t_=i(Wr);op=s(t_,"DebertaV2TokenizerFast"),t_.forEach(t),pd.forEach(t),jl=h(o),Ye=r(o,"DIV",{class:!0});var En=i(Ye);w(Xn.$$.fragment,En),np=h(En),Yn=r(En,"P",{});var hd=i(Yn);sp=s(hd,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),Zn=r(hd,"A",{href:!0,rel:!0});var o_=i(Zn);ap=s(o_,"SentencePiece"),o_.forEach(t),rp=s(hd,"."),hd.forEach(t),ip=h(En),vt=r(En,"DIV",{class:!0});var dr=i(vt);w(es.$$.fragment,dr),lp=h(dr),Hr=r(dr,"P",{});var n_=i(Hr);dp=s(n_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),n_.forEach(t),cp=h(dr),ts=r(dr,"UL",{});var md=i(ts);Ur=r(md,"LI",{});var s_=i(Ur);pp=s(s_,"single sequence: [CLS] X [SEP]"),s_.forEach(t),hp=h(md),Qr=r(md,"LI",{});var a_=i(Qr);mp=s(a_,"pair of sequences: [CLS] A [SEP] B [SEP]"),a_.forEach(t),md.forEach(t),dr.forEach(t),fp=h(En),at=r(En,"DIV",{class:!0});var Fn=i(at);w(os.$$.fragment,Fn),up=h(Fn),Gr=r(Fn,"P",{});var r_=i(Gr);gp=s(r_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),r_.forEach(t),_p=h(Fn),w(yo.$$.fragment,Fn),bp=h(Fn),Ot=r(Fn,"P",{});var cr=i(Ot);kp=s(cr,"If "),Kr=r(cr,"CODE",{});var i_=i(Kr);vp=s(i_,"token_ids_1"),i_.forEach(t),Tp=s(cr," is "),Jr=r(cr,"CODE",{});var l_=i(Jr);wp=s(l_,"None"),l_.forEach(t),$p=s(cr,", this method only returns the first portion of the mask (0s)."),cr.forEach(t),Fn.forEach(t),En.forEach(t),Cl=h(o),Nt=r(o,"H2",{class:!0});var fd=i(Nt);Do=r(fd,"A",{id:!0,class:!0,href:!0});var d_=i(Do);Xr=r(d_,"SPAN",{});var c_=i(Xr);w(ns.$$.fragment,c_),c_.forEach(t),d_.forEach(t),yp=h(fd),Yr=r(fd,"SPAN",{});var p_=i(Yr);Dp=s(p_,"DebertaV2Model"),p_.forEach(t),fd.forEach(t),Pl=h(o),Ze=r(o,"DIV",{class:!0});var Vn=i(Ze);w(ss.$$.fragment,Vn),Ep=h(Vn),as=r(Vn,"P",{});var ud=i(as);Fp=s(ud,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),rs=r(ud,"A",{href:!0,rel:!0});var h_=i(rs);Vp=s(h_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),h_.forEach(t),qp=s(ud,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ud.forEach(t),xp=h(Vn),is=r(Vn,"P",{});var gd=i(is);zp=s(gd,"This model is also a PyTorch "),ls=r(gd,"A",{href:!0,rel:!0});var m_=i(ls);Mp=s(m_,"torch.nn.Module"),m_.forEach(t),jp=s(gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd.forEach(t),Cp=h(Vn),rt=r(Vn,"DIV",{class:!0});var qn=i(rt);w(ds.$$.fragment,qn),Pp=h(qn),Wt=r(qn,"P",{});var pr=i(Wt);Rp=s(pr,"The "),Na=r(pr,"A",{href:!0});var f_=i(Na);Bp=s(f_,"DebertaV2Model"),f_.forEach(t),Ap=s(pr," forward method, overrides the "),Zr=r(pr,"CODE",{});var u_=i(Zr);Lp=s(u_,"__call__"),u_.forEach(t),Sp=s(pr," special method."),pr.forEach(t),Ip=h(qn),w(Eo.$$.fragment,qn),Op=h(qn),w(Fo.$$.fragment,qn),qn.forEach(t),Vn.forEach(t),Rl=h(o),Ht=r(o,"H2",{class:!0});var _d=i(Ht);Vo=r(_d,"A",{id:!0,class:!0,href:!0});var g_=i(Vo);ei=r(g_,"SPAN",{});var __=i(ei);w(cs.$$.fragment,__),__.forEach(t),g_.forEach(t),Np=h(_d),ti=r(_d,"SPAN",{});var b_=i(ti);Wp=s(b_,"DebertaV2PreTrainedModel"),b_.forEach(t),_d.forEach(t),Bl=h(o),gt=r(o,"DIV",{class:!0});var hr=i(gt);w(ps.$$.fragment,hr),Hp=h(hr),oi=r(hr,"P",{});var k_=i(oi);Up=s(k_,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),k_.forEach(t),Qp=h(hr),it=r(hr,"DIV",{class:!0});var xn=i(it);w(hs.$$.fragment,xn),Gp=h(xn),ni=r(xn,"P",{});var v_=i(ni);Kp=s(v_,"Defines the computation performed at every call."),v_.forEach(t),Jp=h(xn),si=r(xn,"P",{});var T_=i(si);Xp=s(T_,"Should be overridden by all subclasses."),T_.forEach(t),Yp=h(xn),w(qo.$$.fragment,xn),xn.forEach(t),hr.forEach(t),Al=h(o),Ut=r(o,"H2",{class:!0});var bd=i(Ut);xo=r(bd,"A",{id:!0,class:!0,href:!0});var w_=i(xo);ai=r(w_,"SPAN",{});var $_=i(ai);w(ms.$$.fragment,$_),$_.forEach(t),w_.forEach(t),Zp=h(bd),ri=r(bd,"SPAN",{});var y_=i(ri);eh=s(y_,"DebertaV2ForMaskedLM"),y_.forEach(t),bd.forEach(t),Ll=h(o),et=r(o,"DIV",{class:!0});var zn=i(et);w(fs.$$.fragment,zn),th=h(zn),Qt=r(zn,"P",{});var mr=i(Qt);oh=s(mr,"DeBERTa Model with a "),ii=r(mr,"CODE",{});var D_=i(ii);nh=s(D_,"language modeling"),D_.forEach(t),sh=s(mr,` head on top.
The DeBERTa model was proposed in `),us=r(mr,"A",{href:!0,rel:!0});var E_=i(us);ah=s(E_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),E_.forEach(t),rh=s(mr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mr.forEach(t),ih=h(zn),gs=r(zn,"P",{});var kd=i(gs);lh=s(kd,"This model is also a PyTorch "),_s=r(kd,"A",{href:!0,rel:!0});var F_=i(_s);dh=s(F_,"torch.nn.Module"),F_.forEach(t),ch=s(kd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd.forEach(t),ph=h(zn),We=r(zn,"DIV",{class:!0});var Tt=i(We);w(bs.$$.fragment,Tt),hh=h(Tt),Gt=r(Tt,"P",{});var fr=i(Gt);mh=s(fr,"The "),Wa=r(fr,"A",{href:!0});var V_=i(Wa);fh=s(V_,"DebertaV2ForMaskedLM"),V_.forEach(t),uh=s(fr," forward method, overrides the "),li=r(fr,"CODE",{});var q_=i(li);gh=s(q_,"__call__"),q_.forEach(t),_h=s(fr," special method."),fr.forEach(t),bh=h(Tt),w(zo.$$.fragment,Tt),kh=h(Tt),w(Mo.$$.fragment,Tt),vh=h(Tt),w(jo.$$.fragment,Tt),Tt.forEach(t),zn.forEach(t),Sl=h(o),Kt=r(o,"H2",{class:!0});var vd=i(Kt);Co=r(vd,"A",{id:!0,class:!0,href:!0});var x_=i(Co);di=r(x_,"SPAN",{});var z_=i(di);w(ks.$$.fragment,z_),z_.forEach(t),x_.forEach(t),Th=h(vd),ci=r(vd,"SPAN",{});var M_=i(ci);wh=s(M_,"DebertaV2ForSequenceClassification"),M_.forEach(t),vd.forEach(t),Il=h(o),Ae=r(o,"DIV",{class:!0});var wt=i(Ae);w(vs.$$.fragment,wt),$h=h(wt),pi=r(wt,"P",{});var j_=i(pi);yh=s(j_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),j_.forEach(t),Dh=h(wt),Ts=r(wt,"P",{});var Td=i(Ts);Eh=s(Td,"The DeBERTa model was proposed in "),ws=r(Td,"A",{href:!0,rel:!0});var C_=i(ws);Fh=s(C_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),C_.forEach(t),Vh=s(Td,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Td.forEach(t),qh=h(wt),$s=r(wt,"P",{});var wd=i($s);xh=s(wd,"This model is also a PyTorch "),ys=r(wd,"A",{href:!0,rel:!0});var P_=i(ys);zh=s(P_,"torch.nn.Module"),P_.forEach(t),Mh=s(wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd.forEach(t),jh=h(wt),ze=r(wt,"DIV",{class:!0});var Xe=i(ze);w(Ds.$$.fragment,Xe),Ch=h(Xe),Jt=r(Xe,"P",{});var ur=i(Jt);Ph=s(ur,"The "),Ha=r(ur,"A",{href:!0});var R_=i(Ha);Rh=s(R_,"DebertaV2ForSequenceClassification"),R_.forEach(t),Bh=s(ur," forward method, overrides the "),hi=r(ur,"CODE",{});var B_=i(hi);Ah=s(B_,"__call__"),B_.forEach(t),Lh=s(ur," special method."),ur.forEach(t),Sh=h(Xe),w(Po.$$.fragment,Xe),Ih=h(Xe),w(Ro.$$.fragment,Xe),Oh=h(Xe),w(Bo.$$.fragment,Xe),Nh=h(Xe),w(Ao.$$.fragment,Xe),Wh=h(Xe),w(Lo.$$.fragment,Xe),Xe.forEach(t),wt.forEach(t),Ol=h(o),Xt=r(o,"H2",{class:!0});var $d=i(Xt);So=r($d,"A",{id:!0,class:!0,href:!0});var A_=i(So);mi=r(A_,"SPAN",{});var L_=i(mi);w(Es.$$.fragment,L_),L_.forEach(t),A_.forEach(t),Hh=h($d),fi=r($d,"SPAN",{});var S_=i(fi);Uh=s(S_,"DebertaV2ForTokenClassification"),S_.forEach(t),$d.forEach(t),Nl=h(o),Le=r(o,"DIV",{class:!0});var $t=i(Le);w(Fs.$$.fragment,$t),Qh=h($t),ui=r($t,"P",{});var I_=i(ui);Gh=s(I_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I_.forEach(t),Kh=h($t),Vs=r($t,"P",{});var yd=i(Vs);Jh=s(yd,"The DeBERTa model was proposed in "),qs=r(yd,"A",{href:!0,rel:!0});var O_=i(qs);Xh=s(O_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),O_.forEach(t),Yh=s(yd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yd.forEach(t),Zh=h($t),xs=r($t,"P",{});var Dd=i(xs);em=s(Dd,"This model is also a PyTorch "),zs=r(Dd,"A",{href:!0,rel:!0});var N_=i(zs);tm=s(N_,"torch.nn.Module"),N_.forEach(t),om=s(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),nm=h($t),He=r($t,"DIV",{class:!0});var yt=i(He);w(Ms.$$.fragment,yt),sm=h(yt),Yt=r(yt,"P",{});var gr=i(Yt);am=s(gr,"The "),Ua=r(gr,"A",{href:!0});var W_=i(Ua);rm=s(W_,"DebertaV2ForTokenClassification"),W_.forEach(t),im=s(gr," forward method, overrides the "),gi=r(gr,"CODE",{});var H_=i(gi);lm=s(H_,"__call__"),H_.forEach(t),dm=s(gr," special method."),gr.forEach(t),cm=h(yt),w(Io.$$.fragment,yt),pm=h(yt),w(Oo.$$.fragment,yt),hm=h(yt),w(No.$$.fragment,yt),yt.forEach(t),$t.forEach(t),Wl=h(o),Zt=r(o,"H2",{class:!0});var Ed=i(Zt);Wo=r(Ed,"A",{id:!0,class:!0,href:!0});var U_=i(Wo);_i=r(U_,"SPAN",{});var Q_=i(_i);w(js.$$.fragment,Q_),Q_.forEach(t),U_.forEach(t),mm=h(Ed),bi=r(Ed,"SPAN",{});var G_=i(bi);fm=s(G_,"DebertaV2ForQuestionAnswering"),G_.forEach(t),Ed.forEach(t),Hl=h(o),Se=r(o,"DIV",{class:!0});var Dt=i(Se);w(Cs.$$.fragment,Dt),um=h(Dt),eo=r(Dt,"P",{});var _r=i(eo);gm=s(_r,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ki=r(_r,"CODE",{});var K_=i(ki);_m=s(K_,"span start logits"),K_.forEach(t),bm=s(_r," and "),vi=r(_r,"CODE",{});var J_=i(vi);km=s(J_,"span end logits"),J_.forEach(t),vm=s(_r,")."),_r.forEach(t),Tm=h(Dt),Ps=r(Dt,"P",{});var Fd=i(Ps);wm=s(Fd,"The DeBERTa model was proposed in "),Rs=r(Fd,"A",{href:!0,rel:!0});var X_=i(Rs);$m=s(X_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),X_.forEach(t),ym=s(Fd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fd.forEach(t),Dm=h(Dt),Bs=r(Dt,"P",{});var Vd=i(Bs);Em=s(Vd,"This model is also a PyTorch "),As=r(Vd,"A",{href:!0,rel:!0});var Y_=i(As);Fm=s(Y_,"torch.nn.Module"),Y_.forEach(t),Vm=s(Vd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vd.forEach(t),qm=h(Dt),Ue=r(Dt,"DIV",{class:!0});var Et=i(Ue);w(Ls.$$.fragment,Et),xm=h(Et),to=r(Et,"P",{});var br=i(to);zm=s(br,"The "),Qa=r(br,"A",{href:!0});var Z_=i(Qa);Mm=s(Z_,"DebertaV2ForQuestionAnswering"),Z_.forEach(t),jm=s(br," forward method, overrides the "),Ti=r(br,"CODE",{});var eb=i(Ti);Cm=s(eb,"__call__"),eb.forEach(t),Pm=s(br," special method."),br.forEach(t),Rm=h(Et),w(Ho.$$.fragment,Et),Bm=h(Et),w(Uo.$$.fragment,Et),Am=h(Et),w(Qo.$$.fragment,Et),Et.forEach(t),Dt.forEach(t),Ul=h(o),oo=r(o,"H2",{class:!0});var qd=i(oo);Go=r(qd,"A",{id:!0,class:!0,href:!0});var tb=i(Go);wi=r(tb,"SPAN",{});var ob=i(wi);w(Ss.$$.fragment,ob),ob.forEach(t),tb.forEach(t),Lm=h(qd),$i=r(qd,"SPAN",{});var nb=i($i);Sm=s(nb,"DebertaV2ForMultipleChoice"),nb.forEach(t),qd.forEach(t),Ql=h(o),Ie=r(o,"DIV",{class:!0});var Ft=i(Ie);w(Is.$$.fragment,Ft),Im=h(Ft),yi=r(Ft,"P",{});var sb=i(yi);Om=s(sb,`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sb.forEach(t),Nm=h(Ft),Os=r(Ft,"P",{});var xd=i(Os);Wm=s(xd,"The DeBERTa model was proposed in "),Ns=r(xd,"A",{href:!0,rel:!0});var ab=i(Ns);Hm=s(ab,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ab.forEach(t),Um=s(xd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xd.forEach(t),Qm=h(Ft),Ws=r(Ft,"P",{});var zd=i(Ws);Gm=s(zd,"This model is also a PyTorch "),Hs=r(zd,"A",{href:!0,rel:!0});var rb=i(Hs);Km=s(rb,"torch.nn.Module"),rb.forEach(t),Jm=s(zd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zd.forEach(t),Xm=h(Ft),lt=r(Ft,"DIV",{class:!0});var Mn=i(lt);w(Us.$$.fragment,Mn),Ym=h(Mn),no=r(Mn,"P",{});var kr=i(no);Zm=s(kr,"The "),Ga=r(kr,"A",{href:!0});var ib=i(Ga);ef=s(ib,"DebertaV2ForMultipleChoice"),ib.forEach(t),tf=s(kr," forward method, overrides the "),Di=r(kr,"CODE",{});var lb=i(Di);of=s(lb,"__call__"),lb.forEach(t),nf=s(kr," special method."),kr.forEach(t),sf=h(Mn),w(Ko.$$.fragment,Mn),af=h(Mn),w(Jo.$$.fragment,Mn),Mn.forEach(t),Ft.forEach(t),Gl=h(o),so=r(o,"H2",{class:!0});var Md=i(so);Xo=r(Md,"A",{id:!0,class:!0,href:!0});var db=i(Xo);Ei=r(db,"SPAN",{});var cb=i(Ei);w(Qs.$$.fragment,cb),cb.forEach(t),db.forEach(t),rf=h(Md),Fi=r(Md,"SPAN",{});var pb=i(Fi);lf=s(pb,"TFDebertaV2Model"),pb.forEach(t),Md.forEach(t),Kl=h(o),Oe=r(o,"DIV",{class:!0});var Vt=i(Oe);w(Gs.$$.fragment,Vt),df=h(Vt),Ks=r(Vt,"P",{});var jd=i(Ks);cf=s(jd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Js=r(jd,"A",{href:!0,rel:!0});var hb=i(Js);pf=s(hb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hb.forEach(t),hf=s(jd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),jd.forEach(t),mf=h(Vt),Xs=r(Vt,"P",{});var Cd=i(Xs);ff=s(Cd,"This model is also a "),Ys=r(Cd,"A",{href:!0,rel:!0});var mb=i(Ys);uf=s(mb,"tf.keras.Model"),mb.forEach(t),gf=s(Cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cd.forEach(t),_f=h(Vt),w(Yo.$$.fragment,Vt),bf=h(Vt),dt=r(Vt,"DIV",{class:!0});var jn=i(dt);w(Zs.$$.fragment,jn),kf=h(jn),ao=r(jn,"P",{});var vr=i(ao);vf=s(vr,"The "),Ka=r(vr,"A",{href:!0});var fb=i(Ka);Tf=s(fb,"TFDebertaV2Model"),fb.forEach(t),wf=s(vr," forward method, overrides the "),Vi=r(vr,"CODE",{});var ub=i(Vi);$f=s(ub,"__call__"),ub.forEach(t),yf=s(vr," special method."),vr.forEach(t),Df=h(jn),w(Zo.$$.fragment,jn),Ef=h(jn),w(en.$$.fragment,jn),jn.forEach(t),Vt.forEach(t),Jl=h(o),ro=r(o,"H2",{class:!0});var Pd=i(ro);tn=r(Pd,"A",{id:!0,class:!0,href:!0});var gb=i(tn);qi=r(gb,"SPAN",{});var _b=i(qi);w(ea.$$.fragment,_b),_b.forEach(t),gb.forEach(t),Ff=h(Pd),xi=r(Pd,"SPAN",{});var bb=i(xi);Vf=s(bb,"TFDebertaV2PreTrainedModel"),bb.forEach(t),Pd.forEach(t),Xl=h(o),_t=r(o,"DIV",{class:!0});var Tr=i(_t);w(ta.$$.fragment,Tr),qf=h(Tr),zi=r(Tr,"P",{});var kb=i(zi);xf=s(kb,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),kb.forEach(t),zf=h(Tr),ct=r(Tr,"DIV",{class:!0});var Cn=i(ct);w(oa.$$.fragment,Cn),Mf=h(Cn),Mi=r(Cn,"P",{});var vb=i(Mi);jf=s(vb,"Calls the model on new inputs and returns the outputs as tensors."),vb.forEach(t),Cf=h(Cn),na=r(Cn,"P",{});var Rd=i(na);Pf=s(Rd,"In this case "),ji=r(Rd,"CODE",{});var Tb=i(ji);Rf=s(Tb,"call()"),Tb.forEach(t),Bf=s(Rd,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Rd.forEach(t),Af=h(Cn),tt=r(Cn,"P",{});var qt=i(tt);Lf=s(qt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Ci=r(qt,"CODE",{});var wb=i(Ci);Sf=s(wb,"tf.keras.Model"),wb.forEach(t),If=s(qt,`.
To call a model on an input, always use the `),Pi=r(qt,"CODE",{});var $b=i(Pi);Of=s($b,"__call__()"),$b.forEach(t),Nf=s(qt,` method,
i.e. `),Ri=r(qt,"CODE",{});var yb=i(Ri);Wf=s(yb,"model(inputs)"),yb.forEach(t),Hf=s(qt,", which relies on the underlying "),Bi=r(qt,"CODE",{});var Db=i(Bi);Uf=s(Db,"call()"),Db.forEach(t),Qf=s(qt," method."),qt.forEach(t),Cn.forEach(t),Tr.forEach(t),Yl=h(o),io=r(o,"H2",{class:!0});var Bd=i(io);on=r(Bd,"A",{id:!0,class:!0,href:!0});var Eb=i(on);Ai=r(Eb,"SPAN",{});var Fb=i(Ai);w(sa.$$.fragment,Fb),Fb.forEach(t),Eb.forEach(t),Gf=h(Bd),Li=r(Bd,"SPAN",{});var Vb=i(Li);Kf=s(Vb,"TFDebertaV2ForMaskedLM"),Vb.forEach(t),Bd.forEach(t),Zl=h(o),Ne=r(o,"DIV",{class:!0});var xt=i(Ne);w(aa.$$.fragment,xt),Jf=h(xt),lo=r(xt,"P",{});var wr=i(lo);Xf=s(wr,"DeBERTa Model with a "),Si=r(wr,"CODE",{});var qb=i(Si);Yf=s(qb,"language modeling"),qb.forEach(t),Zf=s(wr,` head on top.
The DeBERTa model was proposed in `),ra=r(wr,"A",{href:!0,rel:!0});var xb=i(ra);eu=s(xb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xb.forEach(t),tu=s(wr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wr.forEach(t),ou=h(xt),ia=r(xt,"P",{});var Ad=i(ia);nu=s(Ad,"This model is also a "),la=r(Ad,"A",{href:!0,rel:!0});var zb=i(la);su=s(zb,"tf.keras.Model"),zb.forEach(t),au=s(Ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ad.forEach(t),ru=h(xt),w(nn.$$.fragment,xt),iu=h(xt),Qe=r(xt,"DIV",{class:!0});var zt=i(Qe);w(da.$$.fragment,zt),lu=h(zt),co=r(zt,"P",{});var $r=i(co);du=s($r,"The "),Ja=r($r,"A",{href:!0});var Mb=i(Ja);cu=s(Mb,"TFDebertaV2ForMaskedLM"),Mb.forEach(t),pu=s($r," forward method, overrides the "),Ii=r($r,"CODE",{});var jb=i(Ii);hu=s(jb,"__call__"),jb.forEach(t),mu=s($r," special method."),$r.forEach(t),fu=h(zt),w(sn.$$.fragment,zt),uu=h(zt),w(an.$$.fragment,zt),gu=h(zt),w(rn.$$.fragment,zt),zt.forEach(t),xt.forEach(t),ed=h(o),po=r(o,"H2",{class:!0});var Ld=i(po);ln=r(Ld,"A",{id:!0,class:!0,href:!0});var Cb=i(ln);Oi=r(Cb,"SPAN",{});var Pb=i(Oi);w(ca.$$.fragment,Pb),Pb.forEach(t),Cb.forEach(t),_u=h(Ld),Ni=r(Ld,"SPAN",{});var Rb=i(Ni);bu=s(Rb,"TFDebertaV2ForSequenceClassification"),Rb.forEach(t),Ld.forEach(t),td=h(o),Ce=r(o,"DIV",{class:!0});var ht=i(Ce);w(pa.$$.fragment,ht),ku=h(ht),Wi=r(ht,"P",{});var Bb=i(Wi);vu=s(Bb,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bb.forEach(t),Tu=h(ht),ha=r(ht,"P",{});var Sd=i(ha);wu=s(Sd,"The DeBERTa model was proposed in "),ma=r(Sd,"A",{href:!0,rel:!0});var Ab=i(ma);$u=s(Ab,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ab.forEach(t),yu=s(Sd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sd.forEach(t),Du=h(ht),fa=r(ht,"P",{});var Id=i(fa);Eu=s(Id,"This model is also a "),ua=r(Id,"A",{href:!0,rel:!0});var Lb=i(ua);Fu=s(Lb,"tf.keras.Model"),Lb.forEach(t),Vu=s(Id,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Id.forEach(t),qu=h(ht),w(dn.$$.fragment,ht),xu=h(ht),Ge=r(ht,"DIV",{class:!0});var Mt=i(Ge);w(ga.$$.fragment,Mt),zu=h(Mt),ho=r(Mt,"P",{});var yr=i(ho);Mu=s(yr,"The "),Xa=r(yr,"A",{href:!0});var Sb=i(Xa);ju=s(Sb,"TFDebertaV2ForSequenceClassification"),Sb.forEach(t),Cu=s(yr," forward method, overrides the "),Hi=r(yr,"CODE",{});var Ib=i(Hi);Pu=s(Ib,"__call__"),Ib.forEach(t),Ru=s(yr," special method."),yr.forEach(t),Bu=h(Mt),w(cn.$$.fragment,Mt),Au=h(Mt),w(pn.$$.fragment,Mt),Lu=h(Mt),w(hn.$$.fragment,Mt),Mt.forEach(t),ht.forEach(t),od=h(o),mo=r(o,"H2",{class:!0});var Od=i(mo);mn=r(Od,"A",{id:!0,class:!0,href:!0});var Ob=i(mn);Ui=r(Ob,"SPAN",{});var Nb=i(Ui);w(_a.$$.fragment,Nb),Nb.forEach(t),Ob.forEach(t),Su=h(Od),Qi=r(Od,"SPAN",{});var Wb=i(Qi);Iu=s(Wb,"TFDebertaV2ForTokenClassification"),Wb.forEach(t),Od.forEach(t),nd=h(o),Pe=r(o,"DIV",{class:!0});var mt=i(Pe);w(ba.$$.fragment,mt),Ou=h(mt),Gi=r(mt,"P",{});var Hb=i(Gi);Nu=s(Hb,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Hb.forEach(t),Wu=h(mt),ka=r(mt,"P",{});var Nd=i(ka);Hu=s(Nd,"The DeBERTa model was proposed in "),va=r(Nd,"A",{href:!0,rel:!0});var Ub=i(va);Uu=s(Ub,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ub.forEach(t),Qu=s(Nd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nd.forEach(t),Gu=h(mt),Ta=r(mt,"P",{});var Wd=i(Ta);Ku=s(Wd,"This model is also a "),wa=r(Wd,"A",{href:!0,rel:!0});var Qb=i(wa);Ju=s(Qb,"tf.keras.Model"),Qb.forEach(t),Xu=s(Wd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wd.forEach(t),Yu=h(mt),w(fn.$$.fragment,mt),Zu=h(mt),Ke=r(mt,"DIV",{class:!0});var jt=i(Ke);w($a.$$.fragment,jt),eg=h(jt),fo=r(jt,"P",{});var Dr=i(fo);tg=s(Dr,"The "),Ya=r(Dr,"A",{href:!0});var Gb=i(Ya);og=s(Gb,"TFDebertaV2ForTokenClassification"),Gb.forEach(t),ng=s(Dr," forward method, overrides the "),Ki=r(Dr,"CODE",{});var Kb=i(Ki);sg=s(Kb,"__call__"),Kb.forEach(t),ag=s(Dr," special method."),Dr.forEach(t),rg=h(jt),w(un.$$.fragment,jt),ig=h(jt),w(gn.$$.fragment,jt),lg=h(jt),w(_n.$$.fragment,jt),jt.forEach(t),mt.forEach(t),sd=h(o),uo=r(o,"H2",{class:!0});var Hd=i(uo);bn=r(Hd,"A",{id:!0,class:!0,href:!0});var Jb=i(bn);Ji=r(Jb,"SPAN",{});var Xb=i(Ji);w(ya.$$.fragment,Xb),Xb.forEach(t),Jb.forEach(t),dg=h(Hd),Xi=r(Hd,"SPAN",{});var Yb=i(Xi);cg=s(Yb,"TFDebertaV2ForQuestionAnswering"),Yb.forEach(t),Hd.forEach(t),ad=h(o),Re=r(o,"DIV",{class:!0});var ft=i(Re);w(Da.$$.fragment,ft),pg=h(ft),go=r(ft,"P",{});var Er=i(go);hg=s(Er,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yi=r(Er,"CODE",{});var Zb=i(Yi);mg=s(Zb,"span start logits"),Zb.forEach(t),fg=s(Er," and "),Zi=r(Er,"CODE",{});var e2=i(Zi);ug=s(e2,"span end logits"),e2.forEach(t),gg=s(Er,")."),Er.forEach(t),_g=h(ft),Ea=r(ft,"P",{});var Ud=i(Ea);bg=s(Ud,"The DeBERTa model was proposed in "),Fa=r(Ud,"A",{href:!0,rel:!0});var t2=i(Fa);kg=s(t2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),t2.forEach(t),vg=s(Ud,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ud.forEach(t),Tg=h(ft),Va=r(ft,"P",{});var Qd=i(Va);wg=s(Qd,"This model is also a "),qa=r(Qd,"A",{href:!0,rel:!0});var o2=i(qa);$g=s(o2,"tf.keras.Model"),o2.forEach(t),yg=s(Qd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qd.forEach(t),Dg=h(ft),w(kn.$$.fragment,ft),Eg=h(ft),Je=r(ft,"DIV",{class:!0});var Ct=i(Je);w(xa.$$.fragment,Ct),Fg=h(Ct),_o=r(Ct,"P",{});var Fr=i(_o);Vg=s(Fr,"The "),Za=r(Fr,"A",{href:!0});var n2=i(Za);qg=s(n2,"TFDebertaV2ForQuestionAnswering"),n2.forEach(t),xg=s(Fr," forward method, overrides the "),el=r(Fr,"CODE",{});var s2=i(el);zg=s(s2,"__call__"),s2.forEach(t),Mg=s(Fr," special method."),Fr.forEach(t),jg=h(Ct),w(vn.$$.fragment,Ct),Cg=h(Ct),w(Tn.$$.fragment,Ct),Pg=h(Ct),w(wn.$$.fragment,Ct),Ct.forEach(t),ft.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(X2)),u(m,"id","debertav2"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#debertav2"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(x,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(A,"href","https://github.com/microsoft/DeBERTa"),u(A,"rel","nofollow"),u(P,"href","https://github.com/microsoft/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(oe,"rel","nofollow"),u(L,"href","https://github.com/google/sentencepiece"),u(L,"rel","nofollow"),u(Pn,"href","https://huggingface.co/DeBERTa"),u(Pn,"rel","nofollow"),u(Rn,"href","https://huggingface.co/kamalkraj"),u(Rn,"rel","nofollow"),u(Bn,"href","https://github.com/microsoft/DeBERTa"),u(Bn,"rel","nofollow"),u(ko,"id","transformers.DebertaV2Config"),u(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ko,"href","#transformers.DebertaV2Config"),u(Pt,"class","relative group"),u(La,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(Sn,"href","https://huggingface.co/microsoft/deberta-v2-xlarge"),u(Sn,"rel","nofollow"),u(Sa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ia,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"id","transformers.DebertaV2Tokenizer"),u(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vo,"href","#transformers.DebertaV2Tokenizer"),u(At,"class","relative group"),u(Wn,"href","https://github.com/google/sentencepiece"),u(Wn,"rel","nofollow"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"id","transformers.DebertaV2TokenizerFast"),u($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($o,"href","#transformers.DebertaV2TokenizerFast"),u(It,"class","relative group"),u(Zn,"href","https://github.com/google/sentencepiece"),u(Zn,"rel","nofollow"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"id","transformers.DebertaV2Model"),u(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Do,"href","#transformers.DebertaV2Model"),u(Nt,"class","relative group"),u(rs,"href","https://arxiv.org/abs/2006.03654"),u(rs,"rel","nofollow"),u(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ls,"rel","nofollow"),u(Na,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"id","transformers.DebertaV2PreTrainedModel"),u(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vo,"href","#transformers.DebertaV2PreTrainedModel"),u(Ht,"class","relative group"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xo,"id","transformers.DebertaV2ForMaskedLM"),u(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xo,"href","#transformers.DebertaV2ForMaskedLM"),u(Ut,"class","relative group"),u(us,"href","https://arxiv.org/abs/2006.03654"),u(us,"rel","nofollow"),u(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_s,"rel","nofollow"),u(Wa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"id","transformers.DebertaV2ForSequenceClassification"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.DebertaV2ForSequenceClassification"),u(Kt,"class","relative group"),u(ws,"href","https://arxiv.org/abs/2006.03654"),u(ws,"rel","nofollow"),u(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ys,"rel","nofollow"),u(Ha,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"id","transformers.DebertaV2ForTokenClassification"),u(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(So,"href","#transformers.DebertaV2ForTokenClassification"),u(Xt,"class","relative group"),u(qs,"href","https://arxiv.org/abs/2006.03654"),u(qs,"rel","nofollow"),u(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(zs,"rel","nofollow"),u(Ua,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wo,"id","transformers.DebertaV2ForQuestionAnswering"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#transformers.DebertaV2ForQuestionAnswering"),u(Zt,"class","relative group"),u(Rs,"href","https://arxiv.org/abs/2006.03654"),u(Rs,"rel","nofollow"),u(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(As,"rel","nofollow"),u(Qa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.DebertaV2ForMultipleChoice"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.DebertaV2ForMultipleChoice"),u(oo,"class","relative group"),u(Ns,"href","https://arxiv.org/abs/2006.03654"),u(Ns,"rel","nofollow"),u(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hs,"rel","nofollow"),u(Ga,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMultipleChoice"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xo,"id","transformers.TFDebertaV2Model"),u(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xo,"href","#transformers.TFDebertaV2Model"),u(so,"class","relative group"),u(Js,"href","https://arxiv.org/abs/2006.03654"),u(Js,"rel","nofollow"),u(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ys,"rel","nofollow"),u(Ka,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tn,"id","transformers.TFDebertaV2PreTrainedModel"),u(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tn,"href","#transformers.TFDebertaV2PreTrainedModel"),u(ro,"class","relative group"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(on,"id","transformers.TFDebertaV2ForMaskedLM"),u(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(on,"href","#transformers.TFDebertaV2ForMaskedLM"),u(io,"class","relative group"),u(ra,"href","https://arxiv.org/abs/2006.03654"),u(ra,"rel","nofollow"),u(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(la,"rel","nofollow"),u(Ja,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.TFDebertaV2ForSequenceClassification"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(po,"class","relative group"),u(ma,"href","https://arxiv.org/abs/2006.03654"),u(ma,"rel","nofollow"),u(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ua,"rel","nofollow"),u(Xa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.TFDebertaV2ForTokenClassification"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.TFDebertaV2ForTokenClassification"),u(mo,"class","relative group"),u(va,"href","https://arxiv.org/abs/2006.03654"),u(va,"rel","nofollow"),u(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(wa,"rel","nofollow"),u(Ya,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(uo,"class","relative group"),u(Fa,"href","https://arxiv.org/abs/2006.03654"),u(Fa,"rel","nofollow"),u(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qa,"rel","nofollow"),u(Za,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,m),e(m,k),$(l,k,null),e(c,f),e(c,V),e(V,de),_(o,J,b),_(o,x,b),e(x,Y),e(Y,S),$(ee,S,null),e(x,ce),e(x,I),e(I,pe),_(o,re,b),_(o,W,b),e(W,R),e(W,te),e(te,Z),e(W,z),_(o,j,b),_(o,ne,b),e(ne,H),_(o,ie,b),_(o,se,b),e(se,U),_(o,le,b),_(o,ae,b),e(ae,M),e(M,he),e(M,A),e(A,me),e(M,fe),_(o,N,b),_(o,X,b),e(X,ue),e(X,P),e(P,ge),e(X,Q),e(X,oe),e(oe,v),_(o,q,b),_(o,K,b),e(K,Ee),_(o,De,b),_(o,C,b),e(C,_e),e(_e,$e),e($e,Fe),e(_e,B),e(_e,L),e(L,Ve),e(_e,qe),e(C,G),e(C,we),e(we,ye),e(ye,be),e(we,xe),e(C,Gd),e(C,Ra),e(Ra,Vr),e(Vr,Kd),e(Ra,Jd),e(C,Xd),e(C,Ba),e(Ba,qr),e(qr,Yd),e(Ba,Zd),e(C,ec),e(C,Aa),e(Aa,xr),e(xr,tc),e(Aa,oc),_(o,Fl,b),_(o,nt,b),e(nt,nc),e(nt,Pn),e(Pn,sc),e(nt,ac),e(nt,Rn),e(Rn,rc),e(nt,ic),e(nt,Bn),e(Bn,lc),e(nt,dc),_(o,Vl,b),_(o,Pt,b),e(Pt,ko),e(ko,zr),$(An,zr,null),e(Pt,cc),e(Pt,Mr),e(Mr,pc),_(o,ql,b),_(o,ut,b),$(Ln,ut,null),e(ut,hc),e(ut,Rt),e(Rt,mc),e(Rt,La),e(La,fc),e(Rt,uc),e(Rt,Sn),e(Sn,gc),e(Rt,_c),e(ut,bc),e(ut,Bt),e(Bt,kc),e(Bt,Sa),e(Sa,vc),e(Bt,Tc),e(Bt,Ia),e(Ia,wc),e(Bt,$c),_(o,xl,b),_(o,At,b),e(At,vo),e(vo,jr),$(In,jr,null),e(At,yc),e(At,Cr),e(Cr,Dc),_(o,zl,b),_(o,je,b),$(On,je,null),e(je,Ec),e(je,Nn),e(Nn,Fc),e(Nn,Wn),e(Wn,Vc),e(Nn,qc),e(je,xc),e(je,kt),$(Hn,kt,null),e(kt,zc),e(kt,Pr),e(Pr,Mc),e(kt,jc),e(kt,Un),e(Un,Rr),e(Rr,Cc),e(Un,Pc),e(Un,Br),e(Br,Rc),e(je,Bc),e(je,To),$(Qn,To,null),e(To,Ac),e(To,Lt),e(Lt,Lc),e(Lt,Ar),e(Ar,Sc),e(Lt,Ic),e(Lt,Lr),e(Lr,Oc),e(Lt,Nc),e(je,Wc),e(je,st),$(Gn,st,null),e(st,Hc),e(st,Sr),e(Sr,Uc),e(st,Qc),$(wo,st,null),e(st,Gc),e(st,St),e(St,Kc),e(St,Ir),e(Ir,Jc),e(St,Xc),e(St,Or),e(Or,Yc),e(St,Zc),e(je,ep),e(je,Oa),$(Kn,Oa,null),_(o,Ml,b),_(o,It,b),e(It,$o),e($o,Nr),$(Jn,Nr,null),e(It,tp),e(It,Wr),e(Wr,op),_(o,jl,b),_(o,Ye,b),$(Xn,Ye,null),e(Ye,np),e(Ye,Yn),e(Yn,sp),e(Yn,Zn),e(Zn,ap),e(Yn,rp),e(Ye,ip),e(Ye,vt),$(es,vt,null),e(vt,lp),e(vt,Hr),e(Hr,dp),e(vt,cp),e(vt,ts),e(ts,Ur),e(Ur,pp),e(ts,hp),e(ts,Qr),e(Qr,mp),e(Ye,fp),e(Ye,at),$(os,at,null),e(at,up),e(at,Gr),e(Gr,gp),e(at,_p),$(yo,at,null),e(at,bp),e(at,Ot),e(Ot,kp),e(Ot,Kr),e(Kr,vp),e(Ot,Tp),e(Ot,Jr),e(Jr,wp),e(Ot,$p),_(o,Cl,b),_(o,Nt,b),e(Nt,Do),e(Do,Xr),$(ns,Xr,null),e(Nt,yp),e(Nt,Yr),e(Yr,Dp),_(o,Pl,b),_(o,Ze,b),$(ss,Ze,null),e(Ze,Ep),e(Ze,as),e(as,Fp),e(as,rs),e(rs,Vp),e(as,qp),e(Ze,xp),e(Ze,is),e(is,zp),e(is,ls),e(ls,Mp),e(is,jp),e(Ze,Cp),e(Ze,rt),$(ds,rt,null),e(rt,Pp),e(rt,Wt),e(Wt,Rp),e(Wt,Na),e(Na,Bp),e(Wt,Ap),e(Wt,Zr),e(Zr,Lp),e(Wt,Sp),e(rt,Ip),$(Eo,rt,null),e(rt,Op),$(Fo,rt,null),_(o,Rl,b),_(o,Ht,b),e(Ht,Vo),e(Vo,ei),$(cs,ei,null),e(Ht,Np),e(Ht,ti),e(ti,Wp),_(o,Bl,b),_(o,gt,b),$(ps,gt,null),e(gt,Hp),e(gt,oi),e(oi,Up),e(gt,Qp),e(gt,it),$(hs,it,null),e(it,Gp),e(it,ni),e(ni,Kp),e(it,Jp),e(it,si),e(si,Xp),e(it,Yp),$(qo,it,null),_(o,Al,b),_(o,Ut,b),e(Ut,xo),e(xo,ai),$(ms,ai,null),e(Ut,Zp),e(Ut,ri),e(ri,eh),_(o,Ll,b),_(o,et,b),$(fs,et,null),e(et,th),e(et,Qt),e(Qt,oh),e(Qt,ii),e(ii,nh),e(Qt,sh),e(Qt,us),e(us,ah),e(Qt,rh),e(et,ih),e(et,gs),e(gs,lh),e(gs,_s),e(_s,dh),e(gs,ch),e(et,ph),e(et,We),$(bs,We,null),e(We,hh),e(We,Gt),e(Gt,mh),e(Gt,Wa),e(Wa,fh),e(Gt,uh),e(Gt,li),e(li,gh),e(Gt,_h),e(We,bh),$(zo,We,null),e(We,kh),$(Mo,We,null),e(We,vh),$(jo,We,null),_(o,Sl,b),_(o,Kt,b),e(Kt,Co),e(Co,di),$(ks,di,null),e(Kt,Th),e(Kt,ci),e(ci,wh),_(o,Il,b),_(o,Ae,b),$(vs,Ae,null),e(Ae,$h),e(Ae,pi),e(pi,yh),e(Ae,Dh),e(Ae,Ts),e(Ts,Eh),e(Ts,ws),e(ws,Fh),e(Ts,Vh),e(Ae,qh),e(Ae,$s),e($s,xh),e($s,ys),e(ys,zh),e($s,Mh),e(Ae,jh),e(Ae,ze),$(Ds,ze,null),e(ze,Ch),e(ze,Jt),e(Jt,Ph),e(Jt,Ha),e(Ha,Rh),e(Jt,Bh),e(Jt,hi),e(hi,Ah),e(Jt,Lh),e(ze,Sh),$(Po,ze,null),e(ze,Ih),$(Ro,ze,null),e(ze,Oh),$(Bo,ze,null),e(ze,Nh),$(Ao,ze,null),e(ze,Wh),$(Lo,ze,null),_(o,Ol,b),_(o,Xt,b),e(Xt,So),e(So,mi),$(Es,mi,null),e(Xt,Hh),e(Xt,fi),e(fi,Uh),_(o,Nl,b),_(o,Le,b),$(Fs,Le,null),e(Le,Qh),e(Le,ui),e(ui,Gh),e(Le,Kh),e(Le,Vs),e(Vs,Jh),e(Vs,qs),e(qs,Xh),e(Vs,Yh),e(Le,Zh),e(Le,xs),e(xs,em),e(xs,zs),e(zs,tm),e(xs,om),e(Le,nm),e(Le,He),$(Ms,He,null),e(He,sm),e(He,Yt),e(Yt,am),e(Yt,Ua),e(Ua,rm),e(Yt,im),e(Yt,gi),e(gi,lm),e(Yt,dm),e(He,cm),$(Io,He,null),e(He,pm),$(Oo,He,null),e(He,hm),$(No,He,null),_(o,Wl,b),_(o,Zt,b),e(Zt,Wo),e(Wo,_i),$(js,_i,null),e(Zt,mm),e(Zt,bi),e(bi,fm),_(o,Hl,b),_(o,Se,b),$(Cs,Se,null),e(Se,um),e(Se,eo),e(eo,gm),e(eo,ki),e(ki,_m),e(eo,bm),e(eo,vi),e(vi,km),e(eo,vm),e(Se,Tm),e(Se,Ps),e(Ps,wm),e(Ps,Rs),e(Rs,$m),e(Ps,ym),e(Se,Dm),e(Se,Bs),e(Bs,Em),e(Bs,As),e(As,Fm),e(Bs,Vm),e(Se,qm),e(Se,Ue),$(Ls,Ue,null),e(Ue,xm),e(Ue,to),e(to,zm),e(to,Qa),e(Qa,Mm),e(to,jm),e(to,Ti),e(Ti,Cm),e(to,Pm),e(Ue,Rm),$(Ho,Ue,null),e(Ue,Bm),$(Uo,Ue,null),e(Ue,Am),$(Qo,Ue,null),_(o,Ul,b),_(o,oo,b),e(oo,Go),e(Go,wi),$(Ss,wi,null),e(oo,Lm),e(oo,$i),e($i,Sm),_(o,Ql,b),_(o,Ie,b),$(Is,Ie,null),e(Ie,Im),e(Ie,yi),e(yi,Om),e(Ie,Nm),e(Ie,Os),e(Os,Wm),e(Os,Ns),e(Ns,Hm),e(Os,Um),e(Ie,Qm),e(Ie,Ws),e(Ws,Gm),e(Ws,Hs),e(Hs,Km),e(Ws,Jm),e(Ie,Xm),e(Ie,lt),$(Us,lt,null),e(lt,Ym),e(lt,no),e(no,Zm),e(no,Ga),e(Ga,ef),e(no,tf),e(no,Di),e(Di,of),e(no,nf),e(lt,sf),$(Ko,lt,null),e(lt,af),$(Jo,lt,null),_(o,Gl,b),_(o,so,b),e(so,Xo),e(Xo,Ei),$(Qs,Ei,null),e(so,rf),e(so,Fi),e(Fi,lf),_(o,Kl,b),_(o,Oe,b),$(Gs,Oe,null),e(Oe,df),e(Oe,Ks),e(Ks,cf),e(Ks,Js),e(Js,pf),e(Ks,hf),e(Oe,mf),e(Oe,Xs),e(Xs,ff),e(Xs,Ys),e(Ys,uf),e(Xs,gf),e(Oe,_f),$(Yo,Oe,null),e(Oe,bf),e(Oe,dt),$(Zs,dt,null),e(dt,kf),e(dt,ao),e(ao,vf),e(ao,Ka),e(Ka,Tf),e(ao,wf),e(ao,Vi),e(Vi,$f),e(ao,yf),e(dt,Df),$(Zo,dt,null),e(dt,Ef),$(en,dt,null),_(o,Jl,b),_(o,ro,b),e(ro,tn),e(tn,qi),$(ea,qi,null),e(ro,Ff),e(ro,xi),e(xi,Vf),_(o,Xl,b),_(o,_t,b),$(ta,_t,null),e(_t,qf),e(_t,zi),e(zi,xf),e(_t,zf),e(_t,ct),$(oa,ct,null),e(ct,Mf),e(ct,Mi),e(Mi,jf),e(ct,Cf),e(ct,na),e(na,Pf),e(na,ji),e(ji,Rf),e(na,Bf),e(ct,Af),e(ct,tt),e(tt,Lf),e(tt,Ci),e(Ci,Sf),e(tt,If),e(tt,Pi),e(Pi,Of),e(tt,Nf),e(tt,Ri),e(Ri,Wf),e(tt,Hf),e(tt,Bi),e(Bi,Uf),e(tt,Qf),_(o,Yl,b),_(o,io,b),e(io,on),e(on,Ai),$(sa,Ai,null),e(io,Gf),e(io,Li),e(Li,Kf),_(o,Zl,b),_(o,Ne,b),$(aa,Ne,null),e(Ne,Jf),e(Ne,lo),e(lo,Xf),e(lo,Si),e(Si,Yf),e(lo,Zf),e(lo,ra),e(ra,eu),e(lo,tu),e(Ne,ou),e(Ne,ia),e(ia,nu),e(ia,la),e(la,su),e(ia,au),e(Ne,ru),$(nn,Ne,null),e(Ne,iu),e(Ne,Qe),$(da,Qe,null),e(Qe,lu),e(Qe,co),e(co,du),e(co,Ja),e(Ja,cu),e(co,pu),e(co,Ii),e(Ii,hu),e(co,mu),e(Qe,fu),$(sn,Qe,null),e(Qe,uu),$(an,Qe,null),e(Qe,gu),$(rn,Qe,null),_(o,ed,b),_(o,po,b),e(po,ln),e(ln,Oi),$(ca,Oi,null),e(po,_u),e(po,Ni),e(Ni,bu),_(o,td,b),_(o,Ce,b),$(pa,Ce,null),e(Ce,ku),e(Ce,Wi),e(Wi,vu),e(Ce,Tu),e(Ce,ha),e(ha,wu),e(ha,ma),e(ma,$u),e(ha,yu),e(Ce,Du),e(Ce,fa),e(fa,Eu),e(fa,ua),e(ua,Fu),e(fa,Vu),e(Ce,qu),$(dn,Ce,null),e(Ce,xu),e(Ce,Ge),$(ga,Ge,null),e(Ge,zu),e(Ge,ho),e(ho,Mu),e(ho,Xa),e(Xa,ju),e(ho,Cu),e(ho,Hi),e(Hi,Pu),e(ho,Ru),e(Ge,Bu),$(cn,Ge,null),e(Ge,Au),$(pn,Ge,null),e(Ge,Lu),$(hn,Ge,null),_(o,od,b),_(o,mo,b),e(mo,mn),e(mn,Ui),$(_a,Ui,null),e(mo,Su),e(mo,Qi),e(Qi,Iu),_(o,nd,b),_(o,Pe,b),$(ba,Pe,null),e(Pe,Ou),e(Pe,Gi),e(Gi,Nu),e(Pe,Wu),e(Pe,ka),e(ka,Hu),e(ka,va),e(va,Uu),e(ka,Qu),e(Pe,Gu),e(Pe,Ta),e(Ta,Ku),e(Ta,wa),e(wa,Ju),e(Ta,Xu),e(Pe,Yu),$(fn,Pe,null),e(Pe,Zu),e(Pe,Ke),$($a,Ke,null),e(Ke,eg),e(Ke,fo),e(fo,tg),e(fo,Ya),e(Ya,og),e(fo,ng),e(fo,Ki),e(Ki,sg),e(fo,ag),e(Ke,rg),$(un,Ke,null),e(Ke,ig),$(gn,Ke,null),e(Ke,lg),$(_n,Ke,null),_(o,sd,b),_(o,uo,b),e(uo,bn),e(bn,Ji),$(ya,Ji,null),e(uo,dg),e(uo,Xi),e(Xi,cg),_(o,ad,b),_(o,Re,b),$(Da,Re,null),e(Re,pg),e(Re,go),e(go,hg),e(go,Yi),e(Yi,mg),e(go,fg),e(go,Zi),e(Zi,ug),e(go,gg),e(Re,_g),e(Re,Ea),e(Ea,bg),e(Ea,Fa),e(Fa,kg),e(Ea,vg),e(Re,Tg),e(Re,Va),e(Va,wg),e(Va,qa),e(qa,$g),e(Va,yg),e(Re,Dg),$(kn,Re,null),e(Re,Eg),e(Re,Je),$(xa,Je,null),e(Je,Fg),e(Je,_o),e(_o,Vg),e(_o,Za),e(Za,qg),e(_o,xg),e(_o,el),e(el,zg),e(_o,Mg),e(Je,jg),$(vn,Je,null),e(Je,Cg),$(Tn,Je,null),e(Je,Pg),$(wn,Je,null),rd=!0},p(o,[b]){const za={};b&2&&(za.$$scope={dirty:b,ctx:o}),wo.$set(za);const tl={};b&2&&(tl.$$scope={dirty:b,ctx:o}),yo.$set(tl);const ol={};b&2&&(ol.$$scope={dirty:b,ctx:o}),Eo.$set(ol);const nl={};b&2&&(nl.$$scope={dirty:b,ctx:o}),Fo.$set(nl);const Ma={};b&2&&(Ma.$$scope={dirty:b,ctx:o}),qo.$set(Ma);const sl={};b&2&&(sl.$$scope={dirty:b,ctx:o}),zo.$set(sl);const al={};b&2&&(al.$$scope={dirty:b,ctx:o}),Mo.$set(al);const rl={};b&2&&(rl.$$scope={dirty:b,ctx:o}),jo.$set(rl);const ja={};b&2&&(ja.$$scope={dirty:b,ctx:o}),Po.$set(ja);const il={};b&2&&(il.$$scope={dirty:b,ctx:o}),Ro.$set(il);const ll={};b&2&&(ll.$$scope={dirty:b,ctx:o}),Bo.$set(ll);const dl={};b&2&&(dl.$$scope={dirty:b,ctx:o}),Ao.$set(dl);const cl={};b&2&&(cl.$$scope={dirty:b,ctx:o}),Lo.$set(cl);const Ca={};b&2&&(Ca.$$scope={dirty:b,ctx:o}),Io.$set(Ca);const pl={};b&2&&(pl.$$scope={dirty:b,ctx:o}),Oo.$set(pl);const $n={};b&2&&($n.$$scope={dirty:b,ctx:o}),No.$set($n);const hl={};b&2&&(hl.$$scope={dirty:b,ctx:o}),Ho.$set(hl);const ml={};b&2&&(ml.$$scope={dirty:b,ctx:o}),Uo.$set(ml);const fl={};b&2&&(fl.$$scope={dirty:b,ctx:o}),Qo.$set(fl);const ot={};b&2&&(ot.$$scope={dirty:b,ctx:o}),Ko.$set(ot);const yn={};b&2&&(yn.$$scope={dirty:b,ctx:o}),Jo.$set(yn);const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),Yo.$set(ul);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Zo.$set(gl);const er={};b&2&&(er.$$scope={dirty:b,ctx:o}),en.$set(er);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),nn.$set(_l);const tr={};b&2&&(tr.$$scope={dirty:b,ctx:o}),sn.$set(tr);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),an.$set(bl);const or={};b&2&&(or.$$scope={dirty:b,ctx:o}),rn.$set(or);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),dn.$set(kl);const nr={};b&2&&(nr.$$scope={dirty:b,ctx:o}),cn.$set(nr);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),pn.$set(vl);const bt={};b&2&&(bt.$$scope={dirty:b,ctx:o}),hn.$set(bt);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),fn.$set(Tl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),un.$set(wl);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),gn.$set($l);const Pa={};b&2&&(Pa.$$scope={dirty:b,ctx:o}),_n.$set(Pa);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),kn.$set(yl);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),vn.$set(Dl);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),Tn.$set(El);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),wn.$set(bo)},i(o){rd||(y(l.$$.fragment,o),y(ee.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(wo.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(es.$$.fragment,o),y(os.$$.fragment,o),y(yo.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(ds.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(qo.$$.fragment,o),y(ms.$$.fragment,o),y(fs.$$.fragment,o),y(bs.$$.fragment,o),y(zo.$$.fragment,o),y(Mo.$$.fragment,o),y(jo.$$.fragment,o),y(ks.$$.fragment,o),y(vs.$$.fragment,o),y(Ds.$$.fragment,o),y(Po.$$.fragment,o),y(Ro.$$.fragment,o),y(Bo.$$.fragment,o),y(Ao.$$.fragment,o),y(Lo.$$.fragment,o),y(Es.$$.fragment,o),y(Fs.$$.fragment,o),y(Ms.$$.fragment,o),y(Io.$$.fragment,o),y(Oo.$$.fragment,o),y(No.$$.fragment,o),y(js.$$.fragment,o),y(Cs.$$.fragment,o),y(Ls.$$.fragment,o),y(Ho.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ss.$$.fragment,o),y(Is.$$.fragment,o),y(Us.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Qs.$$.fragment,o),y(Gs.$$.fragment,o),y(Yo.$$.fragment,o),y(Zs.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(ea.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(sa.$$.fragment,o),y(aa.$$.fragment,o),y(nn.$$.fragment,o),y(da.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ca.$$.fragment,o),y(pa.$$.fragment,o),y(dn.$$.fragment,o),y(ga.$$.fragment,o),y(cn.$$.fragment,o),y(pn.$$.fragment,o),y(hn.$$.fragment,o),y(_a.$$.fragment,o),y(ba.$$.fragment,o),y(fn.$$.fragment,o),y($a.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(ya.$$.fragment,o),y(Da.$$.fragment,o),y(kn.$$.fragment,o),y(xa.$$.fragment,o),y(vn.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),rd=!0)},o(o){D(l.$$.fragment,o),D(ee.$$.fragment,o),D(An.$$.fragment,o),D(Ln.$$.fragment,o),D(In.$$.fragment,o),D(On.$$.fragment,o),D(Hn.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(wo.$$.fragment,o),D(Kn.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(es.$$.fragment,o),D(os.$$.fragment,o),D(yo.$$.fragment,o),D(ns.$$.fragment,o),D(ss.$$.fragment,o),D(ds.$$.fragment,o),D(Eo.$$.fragment,o),D(Fo.$$.fragment,o),D(cs.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(qo.$$.fragment,o),D(ms.$$.fragment,o),D(fs.$$.fragment,o),D(bs.$$.fragment,o),D(zo.$$.fragment,o),D(Mo.$$.fragment,o),D(jo.$$.fragment,o),D(ks.$$.fragment,o),D(vs.$$.fragment,o),D(Ds.$$.fragment,o),D(Po.$$.fragment,o),D(Ro.$$.fragment,o),D(Bo.$$.fragment,o),D(Ao.$$.fragment,o),D(Lo.$$.fragment,o),D(Es.$$.fragment,o),D(Fs.$$.fragment,o),D(Ms.$$.fragment,o),D(Io.$$.fragment,o),D(Oo.$$.fragment,o),D(No.$$.fragment,o),D(js.$$.fragment,o),D(Cs.$$.fragment,o),D(Ls.$$.fragment,o),D(Ho.$$.fragment,o),D(Uo.$$.fragment,o),D(Qo.$$.fragment,o),D(Ss.$$.fragment,o),D(Is.$$.fragment,o),D(Us.$$.fragment,o),D(Ko.$$.fragment,o),D(Jo.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Yo.$$.fragment,o),D(Zs.$$.fragment,o),D(Zo.$$.fragment,o),D(en.$$.fragment,o),D(ea.$$.fragment,o),D(ta.$$.fragment,o),D(oa.$$.fragment,o),D(sa.$$.fragment,o),D(aa.$$.fragment,o),D(nn.$$.fragment,o),D(da.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ca.$$.fragment,o),D(pa.$$.fragment,o),D(dn.$$.fragment,o),D(ga.$$.fragment,o),D(cn.$$.fragment,o),D(pn.$$.fragment,o),D(hn.$$.fragment,o),D(_a.$$.fragment,o),D(ba.$$.fragment,o),D(fn.$$.fragment,o),D($a.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(ya.$$.fragment,o),D(Da.$$.fragment,o),D(kn.$$.fragment,o),D(xa.$$.fragment,o),D(vn.$$.fragment,o),D(Tn.$$.fragment,o),D(wn.$$.fragment,o),rd=!1},d(o){t(d),o&&t(g),o&&t(c),E(l),o&&t(J),o&&t(x),E(ee),o&&t(re),o&&t(W),o&&t(j),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(N),o&&t(X),o&&t(q),o&&t(K),o&&t(De),o&&t(C),o&&t(Fl),o&&t(nt),o&&t(Vl),o&&t(Pt),E(An),o&&t(ql),o&&t(ut),E(Ln),o&&t(xl),o&&t(At),E(In),o&&t(zl),o&&t(je),E(On),E(Hn),E(Qn),E(Gn),E(wo),E(Kn),o&&t(Ml),o&&t(It),E(Jn),o&&t(jl),o&&t(Ye),E(Xn),E(es),E(os),E(yo),o&&t(Cl),o&&t(Nt),E(ns),o&&t(Pl),o&&t(Ze),E(ss),E(ds),E(Eo),E(Fo),o&&t(Rl),o&&t(Ht),E(cs),o&&t(Bl),o&&t(gt),E(ps),E(hs),E(qo),o&&t(Al),o&&t(Ut),E(ms),o&&t(Ll),o&&t(et),E(fs),E(bs),E(zo),E(Mo),E(jo),o&&t(Sl),o&&t(Kt),E(ks),o&&t(Il),o&&t(Ae),E(vs),E(Ds),E(Po),E(Ro),E(Bo),E(Ao),E(Lo),o&&t(Ol),o&&t(Xt),E(Es),o&&t(Nl),o&&t(Le),E(Fs),E(Ms),E(Io),E(Oo),E(No),o&&t(Wl),o&&t(Zt),E(js),o&&t(Hl),o&&t(Se),E(Cs),E(Ls),E(Ho),E(Uo),E(Qo),o&&t(Ul),o&&t(oo),E(Ss),o&&t(Ql),o&&t(Ie),E(Is),E(Us),E(Ko),E(Jo),o&&t(Gl),o&&t(so),E(Qs),o&&t(Kl),o&&t(Oe),E(Gs),E(Yo),E(Zs),E(Zo),E(en),o&&t(Jl),o&&t(ro),E(ea),o&&t(Xl),o&&t(_t),E(ta),E(oa),o&&t(Yl),o&&t(io),E(sa),o&&t(Zl),o&&t(Ne),E(aa),E(nn),E(da),E(sn),E(an),E(rn),o&&t(ed),o&&t(po),E(ca),o&&t(td),o&&t(Ce),E(pa),E(dn),E(ga),E(cn),E(pn),E(hn),o&&t(od),o&&t(mo),E(_a),o&&t(nd),o&&t(Pe),E(ba),E(fn),E($a),E(un),E(gn),E(_n),o&&t(sd),o&&t(uo),E(ya),o&&t(ad),o&&t(Re),E(Da),E(kn),E(xa),E(vn),E(Tn),E(wn)}}}const X2={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.DebertaV2ForMultipleChoice",title:"DebertaV2ForMultipleChoice"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function Y2(F){return d2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ak extends a2{constructor(d){super();r2(this,d,Y2,J2,i2,{})}}export{ak as default,X2 as metadata};
