import{S as Og,i as Ng,s as Wg,e as a,k as m,w,t as o,M as Hg,c as r,d as t,m as h,a as i,x as v,h as s,b as u,G as e,g as _,y as $,q as y,o as D,B as E,v as Qg,L as ye}from"../../chunks/vendor-hf-doc-builder.js";import{T as We}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as De}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ug(F){let l,g,c,p,T;return p=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=o("sequence pair mask has the following format:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Gg(F){let l,g,c,p,T;return p=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=o("sequence pair mask has the following format:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Kg(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Vg(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Jg(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Xg(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("lsanochkin/deberta-large-feedback")
model = DebertaForMaskedLM.from_pretrained("lsanochkin/deberta-large-feedback")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;lsanochkin/deberta-large-feedback&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;lsanochkin/deberta-large-feedback&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Yg(F){let l,g;return l=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Zg(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function e_(F){let l,g,c,p,T;return p=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta")
model = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){l=a("p"),g=o("Example of single-label classification:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function t_(F){let l,g;return l=new De({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function n_(F){let l,g,c,p,T;return p=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta")
model = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){l=a("p"),g=o("Example of multi-label classification:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function o_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-deberta", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function s_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function a_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("dbsamu/deberta-base-finetuned-ner")
model = DebertaForTokenClassification.from_pretrained("dbsamu/deberta-base-finetuned-ner")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;dbsamu/deberta-base-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbsamu/deberta-base-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function r_(F){let l,g;return l=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.04</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function i_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function l_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("Palak/microsoft_deberta-large_squad")
model = DebertaForQuestionAnswering.from_pretrained("Palak/microsoft_deberta-large_squad")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Palak/microsoft_deberta-large_squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;Palak/microsoft_deberta-large_squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function d_(F){let l,g;return l=new De({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([14])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">14</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.14</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function c_(F){let l,g,c,p,T,d,f,x,me,X,z,Y,S,ee,he,I,fe,le,W,A,te,Z,j,C,oe,H,de,se,Q,ce,ae,M,ue,B,ge,_e,O,K,be,P,ke,U,ne;return{c(){l=a("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),T=a("li"),d=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=a("li"),me=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=a("p"),Y=o("This second option is useful when using "),S=a("code"),ee=o("tf.keras.Model.fit"),he=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),W=m(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),j=a("ul"),C=a("li"),oe=o("a single Tensor with "),H=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),Q=a("code"),ce=o("model(inputs_ids)"),ae=m(),M=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),O=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=m(),P=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),f=h(V),x=r(V,"LI",{});var xe=i(x);me=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=h(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),he=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=h(b),A=r(b,"P",{});var Ee=i(A);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);oe=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=h(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=h(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,f),e(p,x),e(x,me),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,he),e(z,I),e(I,fe),e(z,le),_(b,W,q),_(b,A,q),e(A,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,oe),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,B),e(B,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,ne)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(A),b&&t(Z),b&&t(j)}}}function p_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function m_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function h_(F){let l,g,c,p,T,d,f,x,me,X,z,Y,S,ee,he,I,fe,le,W,A,te,Z,j,C,oe,H,de,se,Q,ce,ae,M,ue,B,ge,_e,O,K,be,P,ke,U,ne;return{c(){l=a("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),T=a("li"),d=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=a("li"),me=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=a("p"),Y=o("This second option is useful when using "),S=a("code"),ee=o("tf.keras.Model.fit"),he=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),W=m(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),j=a("ul"),C=a("li"),oe=o("a single Tensor with "),H=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),Q=a("code"),ce=o("model(inputs_ids)"),ae=m(),M=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),O=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=m(),P=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),f=h(V),x=r(V,"LI",{});var xe=i(x);me=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=h(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),he=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=h(b),A=r(b,"P",{});var Ee=i(A);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);oe=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=h(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=h(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,f),e(p,x),e(x,me),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,he),e(z,I),e(I,fe),e(z,le),_(b,W,q),_(b,A,q),e(A,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,oe),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,B),e(B,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,ne)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(A),b&&t(Z),b&&t(j)}}}function f_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function u_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function g_(F){let l,g;return l=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function __(F){let l,g,c,p,T,d,f,x,me,X,z,Y,S,ee,he,I,fe,le,W,A,te,Z,j,C,oe,H,de,se,Q,ce,ae,M,ue,B,ge,_e,O,K,be,P,ke,U,ne;return{c(){l=a("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),T=a("li"),d=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=a("li"),me=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=a("p"),Y=o("This second option is useful when using "),S=a("code"),ee=o("tf.keras.Model.fit"),he=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),W=m(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),j=a("ul"),C=a("li"),oe=o("a single Tensor with "),H=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),Q=a("code"),ce=o("model(inputs_ids)"),ae=m(),M=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),O=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=m(),P=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),f=h(V),x=r(V,"LI",{});var xe=i(x);me=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=h(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),he=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=h(b),A=r(b,"P",{});var Ee=i(A);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);oe=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=h(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=h(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,f),e(p,x),e(x,me),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,he),e(z,I),e(I,fe),e(z,le),_(b,W,q),_(b,A,q),e(A,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,oe),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,B),e(B,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,ne)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(A),b&&t(Z),b&&t(j)}}}function b_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function k_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function T_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function w_(F){let l,g,c,p,T,d,f,x,me,X,z,Y,S,ee,he,I,fe,le,W,A,te,Z,j,C,oe,H,de,se,Q,ce,ae,M,ue,B,ge,_e,O,K,be,P,ke,U,ne;return{c(){l=a("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),T=a("li"),d=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=a("li"),me=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=a("p"),Y=o("This second option is useful when using "),S=a("code"),ee=o("tf.keras.Model.fit"),he=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),W=m(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),j=a("ul"),C=a("li"),oe=o("a single Tensor with "),H=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),Q=a("code"),ce=o("model(inputs_ids)"),ae=m(),M=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),O=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=m(),P=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),f=h(V),x=r(V,"LI",{});var xe=i(x);me=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=h(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),he=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=h(b),A=r(b,"P",{});var Ee=i(A);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);oe=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=h(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=h(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,f),e(p,x),e(x,me),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,he),e(z,I),e(I,fe),e(z,le),_(b,W,q),_(b,A,q),e(A,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,oe),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,B),e(B,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,ne)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(A),b&&t(Z),b&&t(j)}}}function v_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function $_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

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
`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function y_(F){let l,g;return l=new De({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function D_(F){let l,g,c,p,T,d,f,x,me,X,z,Y,S,ee,he,I,fe,le,W,A,te,Z,j,C,oe,H,de,se,Q,ce,ae,M,ue,B,ge,_e,O,K,be,P,ke,U,ne;return{c(){l=a("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),T=a("li"),d=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=a("li"),me=o("having all inputs as a list, tuple or dict in the first positional arguments."),X=m(),z=a("p"),Y=o("This second option is useful when using "),S=a("code"),ee=o("tf.keras.Model.fit"),he=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),fe=o("model(inputs)"),le=o("."),W=m(),A=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=m(),j=a("ul"),C=a("li"),oe=o("a single Tensor with "),H=a("code"),de=o("input_ids"),se=o(" only and nothing else: "),Q=a("code"),ce=o("model(inputs_ids)"),ae=m(),M=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=o("model([input_ids, attention_mask])"),_e=o(" or "),O=a("code"),K=o("model([input_ids, attention_mask, token_type_ids])"),be=m(),P=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=h(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),f=h(V),x=r(V,"LI",{});var xe=i(x);me=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),X=h(b),z=r(b,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),S=r(R,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),he=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),W=h(b),A=r(b,"P",{});var Ee=i(A);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=h(b),j=r(b,"UL",{});var L=i(j);C=r(L,"LI",{});var G=i(C);oe=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var ze=i(Q);ce=s(ze,"model(inputs_ids)"),ze.forEach(t),G.forEach(t),ae=h(L),M=r(L,"LI",{});var N=i(M);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),N.forEach(t),be=h(L),P=r(L,"LI",{});var we=i(P);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);ne=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),L.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,f),e(p,x),e(x,me),_(b,X,q),_(b,z,q),e(z,Y),e(z,S),e(S,ee),e(z,he),e(z,I),e(I,fe),e(z,le),_(b,W,q),_(b,A,q),e(A,te),_(b,Z,q),_(b,j,q),e(j,C),e(C,oe),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(j,ae),e(j,M),e(M,ue),e(M,B),e(B,ge),e(M,_e),e(M,O),e(O,K),e(j,be),e(j,P),e(P,ke),e(P,U),e(U,ne)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(z),b&&t(W),b&&t(A),b&&t(Z),b&&t(j)}}}function E_(F){let l,g,c,p,T;return{c(){l=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function F_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=o("Example:"),c=m(),w(p.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),v(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function q_(F){let l,g;return l=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function x_(F){let l,g,c,p,T,d,f,x,me,X,z,Y,S,ee,he,I,fe,le,W,A,te,Z,j,C,oe,H,de,se,Q,ce,ae,M,ue,B,ge,_e,O,K,be,P,ke,U,ne,b,q,V,qe,xe,R,pe,Te,Ee,L,G,Fe,ze,N,re,ve,we,ie,Il,oa,Ol,Nl,sa,Wl,Hl,_o,Ql,Ul,Gl,qt,Kl,aa,Vl,Jl,ra,Xl,Yl,qi,xt,cn,Ba,bo,Zl,Sa,ed,xi,Me,ko,td,Ia,nd,od,ht,To,sd,Oa,ad,rd,wo,Na,id,ld,Wa,dd,cd,pn,vo,pd,zt,md,Ha,hd,fd,Qa,ud,gd,_d,nt,$o,bd,Ua,kd,Td,mn,wd,jt,vd,Ga,$d,yd,Ka,Dd,Ed,Fd,ia,yo,zi,Mt,hn,Va,Do,qd,Ja,xd,ji,Ye,Eo,zd,Fo,jd,Xa,Md,Cd,Pd,ft,qo,Ld,Ya,Rd,Ad,xo,Za,Bd,Sd,er,Id,Od,ot,zo,Nd,tr,Wd,Hd,fn,Qd,Ct,Ud,nr,Gd,Kd,or,Vd,Jd,Mi,Pt,un,sr,jo,Xd,ar,Yd,Ci,Ze,Mo,Zd,Co,ec,Po,tc,nc,oc,Lo,sc,Ro,ac,rc,ic,st,Ao,lc,Lt,dc,la,cc,pc,rr,mc,hc,fc,gn,uc,_n,Pi,Rt,bn,ir,Bo,gc,lr,_c,Li,At,So,bc,dr,kc,Ri,Bt,kn,cr,Io,Tc,pr,wc,Ai,et,Oo,vc,St,$c,mr,yc,Dc,No,Ec,Fc,qc,Wo,xc,Ho,zc,jc,Mc,He,Qo,Cc,It,Pc,da,Lc,Rc,hr,Ac,Bc,Sc,Tn,Ic,wn,Oc,vn,Bi,Ot,$n,fr,Uo,Nc,ur,Wc,Si,Ae,Go,Hc,gr,Qc,Uc,Ko,Gc,Vo,Kc,Vc,Jc,Jo,Xc,Xo,Yc,Zc,ep,je,Yo,tp,Nt,np,ca,op,sp,_r,ap,rp,ip,yn,lp,Dn,dp,En,cp,Fn,pp,qn,Ii,Wt,xn,br,Zo,mp,kr,hp,Oi,Be,es,fp,Tr,up,gp,ts,_p,ns,bp,kp,Tp,os,wp,ss,vp,$p,yp,Qe,as,Dp,Ht,Ep,pa,Fp,qp,wr,xp,zp,jp,zn,Mp,jn,Cp,Mn,Ni,Qt,Cn,vr,rs,Pp,$r,Lp,Wi,Se,is,Rp,Ut,Ap,yr,Bp,Sp,Dr,Ip,Op,Np,ls,Wp,ds,Hp,Qp,Up,cs,Gp,ps,Kp,Vp,Jp,Ue,ms,Xp,Gt,Yp,ma,Zp,em,Er,tm,nm,om,Pn,sm,Ln,am,Rn,Hi,Kt,An,Fr,hs,rm,qr,im,Qi,Ie,fs,lm,us,dm,gs,cm,pm,mm,_s,hm,bs,fm,um,gm,Bn,_m,at,ks,bm,Vt,km,ha,Tm,wm,xr,vm,$m,ym,Sn,Dm,In,Ui,Jt,On,zr,Ts,Em,jr,Fm,Gi,ct,ws,qm,Mr,xm,zm,rt,vs,jm,Cr,Mm,Cm,$s,Pm,Pr,Lm,Rm,Am,tt,Bm,Lr,Sm,Im,Rr,Om,Nm,Ar,Wm,Hm,Br,Qm,Um,Ki,Xt,Nn,Sr,ys,Gm,Ir,Km,Vi,Oe,Ds,Vm,Yt,Jm,Or,Xm,Ym,Es,Zm,eh,th,Fs,nh,qs,oh,sh,ah,Wn,rh,Ge,xs,ih,Zt,lh,fa,dh,ch,Nr,ph,mh,hh,Hn,fh,Qn,uh,Un,Ji,en,Gn,Wr,zs,gh,Hr,_h,Xi,Ce,js,bh,Qr,kh,Th,Ms,wh,Cs,vh,$h,yh,Ps,Dh,Ls,Eh,Fh,qh,Kn,xh,Ke,Rs,zh,tn,jh,ua,Mh,Ch,Ur,Ph,Lh,Rh,Vn,Ah,Jn,Bh,Xn,Yi,nn,Yn,Gr,As,Sh,Kr,Ih,Zi,Pe,Bs,Oh,Vr,Nh,Wh,Ss,Hh,Is,Qh,Uh,Gh,Os,Kh,Ns,Vh,Jh,Xh,Zn,Yh,Ve,Ws,Zh,on,ef,ga,tf,nf,Jr,of,sf,af,eo,rf,to,lf,no,el,sn,oo,Xr,Hs,df,Yr,cf,tl,Le,Qs,pf,an,mf,Zr,hf,ff,ei,uf,gf,_f,Us,bf,Gs,kf,Tf,wf,Ks,vf,Vs,$f,yf,Df,so,Ef,Je,Js,Ff,rn,qf,_a,xf,zf,ti,jf,Mf,Cf,ao,Pf,ro,Lf,io,nl;return d=new Re({}),ee=new Re({}),L=new Re({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L40"}}),bo=new Re({}),ko=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L66"}}),To=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L137",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L162",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$o=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L189",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mn=new $e({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ug]},$$scope:{ctx:F}}}),yo=new J({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L288"}}),Do=new Re({}),Eo=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L67"}}),qo=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L158",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L183",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fn=new $e({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Gg]},$$scope:{ctx:F}}}),jo=new Re({}),Mo=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L927"}}),Ao=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L951",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),gn=new We({props:{$$slots:{default:[Kg]},$$scope:{ctx:F}}}),_n=new $e({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[Vg]},$$scope:{ctx:F}}}),Bo=new Re({}),So=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L832"}}),Io=new Re({}),Oo=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1039"}}),Qo=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Tn=new We({props:{$$slots:{default:[Jg]},$$scope:{ctx:F}}}),wn=new $e({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[Xg]},$$scope:{ctx:F}}}),vn=new $e({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[Yg]},$$scope:{ctx:F}}}),Uo=new Re({}),Go=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1177"}}),Yo=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),yn=new We({props:{$$slots:{default:[Zg]},$$scope:{ctx:F}}}),Dn=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[e_]},$$scope:{ctx:F}}}),En=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[t_]},$$scope:{ctx:F}}}),Fn=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[n_]},$$scope:{ctx:F}}}),qn=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[o_]},$$scope:{ctx:F}}}),Zo=new Re({}),es=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1298"}}),as=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),zn=new We({props:{$$slots:{default:[s_]},$$scope:{ctx:F}}}),jn=new $e({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[a_]},$$scope:{ctx:F}}}),Mn=new $e({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[r_]},$$scope:{ctx:F}}}),rs=new Re({}),is=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1376"}}),ms=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1389",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Pn=new We({props:{$$slots:{default:[i_]},$$scope:{ctx:F}}}),Ln=new $e({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[l_]},$$scope:{ctx:F}}}),Rn=new $e({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[d_]},$$scope:{ctx:F}}}),hs=new Re({}),fs=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1080"}}),Bn=new We({props:{$$slots:{default:[c_]},$$scope:{ctx:F}}}),ks=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1086",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Sn=new We({props:{$$slots:{default:[p_]},$$scope:{ctx:F}}}),In=new $e({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[m_]},$$scope:{ctx:F}}}),Ts=new Re({}),ws=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L985"}}),vs=new J({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L492",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ys=new Re({}),Ds=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1128"}}),Wn=new We({props:{$$slots:{default:[h_]},$$scope:{ctx:F}}}),xs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1144",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Hn=new We({props:{$$slots:{default:[f_]},$$scope:{ctx:F}}}),Qn=new $e({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[u_]},$$scope:{ctx:F}}}),Un=new $e({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[g_]},$$scope:{ctx:F}}}),zs=new Re({}),js=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1211"}}),Kn=new We({props:{$$slots:{default:[__]},$$scope:{ctx:F}}}),Rs=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1229",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Vn=new We({props:{$$slots:{default:[b_]},$$scope:{ctx:F}}}),Jn=new $e({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[k_]},$$scope:{ctx:F}}}),Xn=new $e({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[T_]},$$scope:{ctx:F}}}),As=new Re({}),Bs=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1299"}}),Zn=new We({props:{$$slots:{default:[w_]},$$scope:{ctx:F}}}),Ws=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1311",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),eo=new We({props:{$$slots:{default:[v_]},$$scope:{ctx:F}}}),to=new $e({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[$_]},$$scope:{ctx:F}}}),no=new $e({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[y_]},$$scope:{ctx:F}}}),Hs=new Re({}),Qs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1377"}}),so=new We({props:{$$slots:{default:[D_]},$$scope:{ctx:F}}}),Js=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1388",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),ao=new We({props:{$$slots:{default:[E_]},$$scope:{ctx:F}}}),ro=new $e({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[F_]},$$scope:{ctx:F}}}),io=new $e({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=m(),c=a("h1"),p=a("a"),T=a("span"),w(d.$$.fragment),f=m(),x=a("span"),me=o("DeBERTa"),X=m(),z=a("h2"),Y=a("a"),S=a("span"),w(ee.$$.fragment),he=m(),I=a("span"),fe=o("Overview"),le=m(),W=a("p"),A=o("The DeBERTa model was proposed in "),te=a("a"),Z=o("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),j=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=m(),oe=a("p"),H=o(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=m(),se=a("p"),Q=o("The abstract from the paper is the following:"),ce=m(),ae=a("p"),M=a("em"),ue=o(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=a("a"),ge=o("https://github.com/microsoft/DeBERTa"),_e=o("."),O=m(),K=a("p"),be=o("This model was contributed by "),P=a("a"),ke=o("DeBERTa"),U=o(`. This model TF 2.0 implementation was
contributed by `),ne=a("a"),b=o("kamalkraj"),q=o(" . The original code can be found "),V=a("a"),qe=o("here"),xe=o("."),R=m(),pe=a("h2"),Te=a("a"),Ee=a("span"),w(L.$$.fragment),G=m(),Fe=a("span"),ze=o("DebertaConfig"),N=m(),re=a("div"),w(ve.$$.fragment),we=m(),ie=a("p"),Il=o("This is the configuration class to store the configuration of a "),oa=a("a"),Ol=o("DebertaModel"),Nl=o(" or a "),sa=a("a"),Wl=o("TFDebertaModel"),Hl=o(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),_o=a("a"),Ql=o("microsoft/deberta-base"),Ul=o(" architecture."),Gl=m(),qt=a("p"),Kl=o("Configuration objects inherit from "),aa=a("a"),Vl=o("PretrainedConfig"),Jl=o(` and can be used to control the model outputs. Read the
documentation from `),ra=a("a"),Xl=o("PretrainedConfig"),Yl=o(" for more information."),qi=m(),xt=a("h2"),cn=a("a"),Ba=a("span"),w(bo.$$.fragment),Zl=m(),Sa=a("span"),ed=o("DebertaTokenizer"),xi=m(),Me=a("div"),w(ko.$$.fragment),td=m(),Ia=a("p"),nd=o("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),od=m(),ht=a("div"),w(To.$$.fragment),sd=m(),Oa=a("p"),ad=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),rd=m(),wo=a("ul"),Na=a("li"),id=o("single sequence: [CLS] X [SEP]"),ld=m(),Wa=a("li"),dd=o("pair of sequences: [CLS] A [SEP] B [SEP]"),cd=m(),pn=a("div"),w(vo.$$.fragment),pd=m(),zt=a("p"),md=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ha=a("code"),hd=o("prepare_for_model"),fd=o(" or "),Qa=a("code"),ud=o("encode_plus"),gd=o(" methods."),_d=m(),nt=a("div"),w($o.$$.fragment),bd=m(),Ua=a("p"),kd=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Td=m(),w(mn.$$.fragment),wd=m(),jt=a("p"),vd=o("If "),Ga=a("code"),$d=o("token_ids_1"),yd=o(" is "),Ka=a("code"),Dd=o("None"),Ed=o(", this method only returns the first portion of the mask (0s)."),Fd=m(),ia=a("div"),w(yo.$$.fragment),zi=m(),Mt=a("h2"),hn=a("a"),Va=a("span"),w(Do.$$.fragment),qd=m(),Ja=a("span"),xd=o("DebertaTokenizerFast"),ji=m(),Ye=a("div"),w(Eo.$$.fragment),zd=m(),Fo=a("p"),jd=o(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Xa=a("em"),Md=o("tokenizers"),Cd=o(" library."),Pd=m(),ft=a("div"),w(qo.$$.fragment),Ld=m(),Ya=a("p"),Rd=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ad=m(),xo=a("ul"),Za=a("li"),Bd=o("single sequence: [CLS] X [SEP]"),Sd=m(),er=a("li"),Id=o("pair of sequences: [CLS] A [SEP] B [SEP]"),Od=m(),ot=a("div"),w(zo.$$.fragment),Nd=m(),tr=a("p"),Wd=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Hd=m(),w(fn.$$.fragment),Qd=m(),Ct=a("p"),Ud=o("If "),nr=a("code"),Gd=o("token_ids_1"),Kd=o(" is "),or=a("code"),Vd=o("None"),Jd=o(", this method only returns the first portion of the mask (0s)."),Mi=m(),Pt=a("h2"),un=a("a"),sr=a("span"),w(jo.$$.fragment),Xd=m(),ar=a("span"),Yd=o("DebertaModel"),Ci=m(),Ze=a("div"),w(Mo.$$.fragment),Zd=m(),Co=a("p"),ec=o(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Po=a("a"),tc=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),nc=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),oc=m(),Lo=a("p"),sc=o("This model is also a PyTorch "),Ro=a("a"),ac=o("torch.nn.Module"),rc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ic=m(),st=a("div"),w(Ao.$$.fragment),lc=m(),Lt=a("p"),dc=o("The "),la=a("a"),cc=o("DebertaModel"),pc=o(" forward method, overrides the "),rr=a("code"),mc=o("__call__"),hc=o(" special method."),fc=m(),w(gn.$$.fragment),uc=m(),w(_n.$$.fragment),Pi=m(),Rt=a("h2"),bn=a("a"),ir=a("span"),w(Bo.$$.fragment),gc=m(),lr=a("span"),_c=o("DebertaPreTrainedModel"),Li=m(),At=a("div"),w(So.$$.fragment),bc=m(),dr=a("p"),kc=o(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ri=m(),Bt=a("h2"),kn=a("a"),cr=a("span"),w(Io.$$.fragment),Tc=m(),pr=a("span"),wc=o("DebertaForMaskedLM"),Ai=m(),et=a("div"),w(Oo.$$.fragment),vc=m(),St=a("p"),$c=o("DeBERTa Model with a "),mr=a("code"),yc=o("language modeling"),Dc=o(` head on top.
The DeBERTa model was proposed in `),No=a("a"),Ec=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fc=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qc=m(),Wo=a("p"),xc=o("This model is also a PyTorch "),Ho=a("a"),zc=o("torch.nn.Module"),jc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mc=m(),He=a("div"),w(Qo.$$.fragment),Cc=m(),It=a("p"),Pc=o("The "),da=a("a"),Lc=o("DebertaForMaskedLM"),Rc=o(" forward method, overrides the "),hr=a("code"),Ac=o("__call__"),Bc=o(" special method."),Sc=m(),w(Tn.$$.fragment),Ic=m(),w(wn.$$.fragment),Oc=m(),w(vn.$$.fragment),Bi=m(),Ot=a("h2"),$n=a("a"),fr=a("span"),w(Uo.$$.fragment),Nc=m(),ur=a("span"),Wc=o("DebertaForSequenceClassification"),Si=m(),Ae=a("div"),w(Go.$$.fragment),Hc=m(),gr=a("p"),Qc=o(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uc=m(),Ko=a("p"),Gc=o("The DeBERTa model was proposed in "),Vo=a("a"),Kc=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vc=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=m(),Jo=a("p"),Xc=o("This model is also a PyTorch "),Xo=a("a"),Yc=o("torch.nn.Module"),Zc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ep=m(),je=a("div"),w(Yo.$$.fragment),tp=m(),Nt=a("p"),np=o("The "),ca=a("a"),op=o("DebertaForSequenceClassification"),sp=o(" forward method, overrides the "),_r=a("code"),ap=o("__call__"),rp=o(" special method."),ip=m(),w(yn.$$.fragment),lp=m(),w(Dn.$$.fragment),dp=m(),w(En.$$.fragment),cp=m(),w(Fn.$$.fragment),pp=m(),w(qn.$$.fragment),Ii=m(),Wt=a("h2"),xn=a("a"),br=a("span"),w(Zo.$$.fragment),mp=m(),kr=a("span"),hp=o("DebertaForTokenClassification"),Oi=m(),Be=a("div"),w(es.$$.fragment),fp=m(),Tr=a("p"),up=o(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gp=m(),ts=a("p"),_p=o("The DeBERTa model was proposed in "),ns=a("a"),bp=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kp=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tp=m(),os=a("p"),wp=o("This model is also a PyTorch "),ss=a("a"),vp=o("torch.nn.Module"),$p=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yp=m(),Qe=a("div"),w(as.$$.fragment),Dp=m(),Ht=a("p"),Ep=o("The "),pa=a("a"),Fp=o("DebertaForTokenClassification"),qp=o(" forward method, overrides the "),wr=a("code"),xp=o("__call__"),zp=o(" special method."),jp=m(),w(zn.$$.fragment),Mp=m(),w(jn.$$.fragment),Cp=m(),w(Mn.$$.fragment),Ni=m(),Qt=a("h2"),Cn=a("a"),vr=a("span"),w(rs.$$.fragment),Pp=m(),$r=a("span"),Lp=o("DebertaForQuestionAnswering"),Wi=m(),Se=a("div"),w(is.$$.fragment),Rp=m(),Ut=a("p"),Ap=o(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yr=a("code"),Bp=o("span start logits"),Sp=o(" and "),Dr=a("code"),Ip=o("span end logits"),Op=o(")."),Np=m(),ls=a("p"),Wp=o("The DeBERTa model was proposed in "),ds=a("a"),Hp=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qp=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Up=m(),cs=a("p"),Gp=o("This model is also a PyTorch "),ps=a("a"),Kp=o("torch.nn.Module"),Vp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jp=m(),Ue=a("div"),w(ms.$$.fragment),Xp=m(),Gt=a("p"),Yp=o("The "),ma=a("a"),Zp=o("DebertaForQuestionAnswering"),em=o(" forward method, overrides the "),Er=a("code"),tm=o("__call__"),nm=o(" special method."),om=m(),w(Pn.$$.fragment),sm=m(),w(Ln.$$.fragment),am=m(),w(Rn.$$.fragment),Hi=m(),Kt=a("h2"),An=a("a"),Fr=a("span"),w(hs.$$.fragment),rm=m(),qr=a("span"),im=o("TFDebertaModel"),Qi=m(),Ie=a("div"),w(fs.$$.fragment),lm=m(),us=a("p"),dm=o(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=a("a"),cm=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pm=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mm=m(),_s=a("p"),hm=o("This model is also a "),bs=a("a"),fm=o("tf.keras.Model"),um=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gm=m(),w(Bn.$$.fragment),_m=m(),at=a("div"),w(ks.$$.fragment),bm=m(),Vt=a("p"),km=o("The "),ha=a("a"),Tm=o("TFDebertaModel"),wm=o(" forward method, overrides the "),xr=a("code"),vm=o("__call__"),$m=o(" special method."),ym=m(),w(Sn.$$.fragment),Dm=m(),w(In.$$.fragment),Ui=m(),Jt=a("h2"),On=a("a"),zr=a("span"),w(Ts.$$.fragment),Em=m(),jr=a("span"),Fm=o("TFDebertaPreTrainedModel"),Gi=m(),ct=a("div"),w(ws.$$.fragment),qm=m(),Mr=a("p"),xm=o(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),zm=m(),rt=a("div"),w(vs.$$.fragment),jm=m(),Cr=a("p"),Mm=o("Calls the model on new inputs and returns the outputs as tensors."),Cm=m(),$s=a("p"),Pm=o("In this case "),Pr=a("code"),Lm=o("call()"),Rm=o(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Am=m(),tt=a("p"),Bm=o(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=a("code"),Sm=o("tf.keras.Model"),Im=o(`.
To call a model on an input, always use the `),Rr=a("code"),Om=o("__call__()"),Nm=o(` method,
i.e. `),Ar=a("code"),Wm=o("model(inputs)"),Hm=o(", which relies on the underlying "),Br=a("code"),Qm=o("call()"),Um=o(" method."),Ki=m(),Xt=a("h2"),Nn=a("a"),Sr=a("span"),w(ys.$$.fragment),Gm=m(),Ir=a("span"),Km=o("TFDebertaForMaskedLM"),Vi=m(),Oe=a("div"),w(Ds.$$.fragment),Vm=m(),Yt=a("p"),Jm=o("DeBERTa Model with a "),Or=a("code"),Xm=o("language modeling"),Ym=o(` head on top.
The DeBERTa model was proposed in `),Es=a("a"),Zm=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eh=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),th=m(),Fs=a("p"),nh=o("This model is also a "),qs=a("a"),oh=o("tf.keras.Model"),sh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ah=m(),w(Wn.$$.fragment),rh=m(),Ge=a("div"),w(xs.$$.fragment),ih=m(),Zt=a("p"),lh=o("The "),fa=a("a"),dh=o("TFDebertaForMaskedLM"),ch=o(" forward method, overrides the "),Nr=a("code"),ph=o("__call__"),mh=o(" special method."),hh=m(),w(Hn.$$.fragment),fh=m(),w(Qn.$$.fragment),uh=m(),w(Un.$$.fragment),Ji=m(),en=a("h2"),Gn=a("a"),Wr=a("span"),w(zs.$$.fragment),gh=m(),Hr=a("span"),_h=o("TFDebertaForSequenceClassification"),Xi=m(),Ce=a("div"),w(js.$$.fragment),bh=m(),Qr=a("p"),kh=o(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Th=m(),Ms=a("p"),wh=o("The DeBERTa model was proposed in "),Cs=a("a"),vh=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$h=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yh=m(),Ps=a("p"),Dh=o("This model is also a "),Ls=a("a"),Eh=o("tf.keras.Model"),Fh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qh=m(),w(Kn.$$.fragment),xh=m(),Ke=a("div"),w(Rs.$$.fragment),zh=m(),tn=a("p"),jh=o("The "),ua=a("a"),Mh=o("TFDebertaForSequenceClassification"),Ch=o(" forward method, overrides the "),Ur=a("code"),Ph=o("__call__"),Lh=o(" special method."),Rh=m(),w(Vn.$$.fragment),Ah=m(),w(Jn.$$.fragment),Bh=m(),w(Xn.$$.fragment),Yi=m(),nn=a("h2"),Yn=a("a"),Gr=a("span"),w(As.$$.fragment),Sh=m(),Kr=a("span"),Ih=o("TFDebertaForTokenClassification"),Zi=m(),Pe=a("div"),w(Bs.$$.fragment),Oh=m(),Vr=a("p"),Nh=o(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Wh=m(),Ss=a("p"),Hh=o("The DeBERTa model was proposed in "),Is=a("a"),Qh=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Uh=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gh=m(),Os=a("p"),Kh=o("This model is also a "),Ns=a("a"),Vh=o("tf.keras.Model"),Jh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh=m(),w(Zn.$$.fragment),Yh=m(),Ve=a("div"),w(Ws.$$.fragment),Zh=m(),on=a("p"),ef=o("The "),ga=a("a"),tf=o("TFDebertaForTokenClassification"),nf=o(" forward method, overrides the "),Jr=a("code"),of=o("__call__"),sf=o(" special method."),af=m(),w(eo.$$.fragment),rf=m(),w(to.$$.fragment),lf=m(),w(no.$$.fragment),el=m(),sn=a("h2"),oo=a("a"),Xr=a("span"),w(Hs.$$.fragment),df=m(),Yr=a("span"),cf=o("TFDebertaForQuestionAnswering"),tl=m(),Le=a("div"),w(Qs.$$.fragment),pf=m(),an=a("p"),mf=o(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=a("code"),hf=o("span start logits"),ff=o(" and "),ei=a("code"),uf=o("span end logits"),gf=o(")."),_f=m(),Us=a("p"),bf=o("The DeBERTa model was proposed in "),Gs=a("a"),kf=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tf=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wf=m(),Ks=a("p"),vf=o("This model is also a "),Vs=a("a"),$f=o("tf.keras.Model"),yf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df=m(),w(so.$$.fragment),Ef=m(),Je=a("div"),w(Js.$$.fragment),Ff=m(),rn=a("p"),qf=o("The "),_a=a("a"),xf=o("TFDebertaForQuestionAnswering"),zf=o(" forward method, overrides the "),ti=a("code"),jf=o("__call__"),Mf=o(" special method."),Cf=m(),w(ao.$$.fragment),Pf=m(),w(ro.$$.fragment),Lf=m(),w(io.$$.fragment),this.h()},l(n){const k=Hg('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(n),c=r(n,"H1",{class:!0});var Xs=i(c);p=r(Xs,"A",{id:!0,class:!0,href:!0});var ni=i(p);T=r(ni,"SPAN",{});var oi=i(T);v(d.$$.fragment,oi),oi.forEach(t),ni.forEach(t),f=h(Xs),x=r(Xs,"SPAN",{});var si=i(x);me=s(si,"DeBERTa"),si.forEach(t),Xs.forEach(t),X=h(n),z=r(n,"H2",{class:!0});var Ys=i(z);Y=r(Ys,"A",{id:!0,class:!0,href:!0});var ai=i(Y);S=r(ai,"SPAN",{});var ri=i(S);v(ee.$$.fragment,ri),ri.forEach(t),ai.forEach(t),he=h(Ys),I=r(Ys,"SPAN",{});var ii=i(I);fe=s(ii,"Overview"),ii.forEach(t),Ys.forEach(t),le=h(n),W=r(n,"P",{});var Zs=i(W);A=s(Zs,"The DeBERTa model was proposed in "),te=r(Zs,"A",{href:!0,rel:!0});var li=i(te);Z=s(li,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),li.forEach(t),j=s(Zs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Zs.forEach(t),C=h(n),oe=r(n,"P",{});var di=i(oe);H=s(di,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),di.forEach(t),de=h(n),se=r(n,"P",{});var ci=i(se);Q=s(ci,"The abstract from the paper is the following:"),ci.forEach(t),ce=h(n),ae=r(n,"P",{});var pi=i(ae);M=r(pi,"EM",{});var ea=i(M);ue=s(ea,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(ea,"A",{href:!0,rel:!0});var mi=i(B);ge=s(mi,"https://github.com/microsoft/DeBERTa"),mi.forEach(t),_e=s(ea,"."),ea.forEach(t),pi.forEach(t),O=h(n),K=r(n,"P",{});var pt=i(K);be=s(pt,"This model was contributed by "),P=r(pt,"A",{href:!0,rel:!0});var hi=i(P);ke=s(hi,"DeBERTa"),hi.forEach(t),U=s(pt,`. This model TF 2.0 implementation was
contributed by `),ne=r(pt,"A",{href:!0,rel:!0});var fi=i(ne);b=s(fi,"kamalkraj"),fi.forEach(t),q=s(pt," . The original code can be found "),V=r(pt,"A",{href:!0,rel:!0});var ui=i(V);qe=s(ui,"here"),ui.forEach(t),xe=s(pt,"."),pt.forEach(t),R=h(n),pe=r(n,"H2",{class:!0});var ta=i(pe);Te=r(ta,"A",{id:!0,class:!0,href:!0});var gi=i(Te);Ee=r(gi,"SPAN",{});var _i=i(Ee);v(L.$$.fragment,_i),_i.forEach(t),gi.forEach(t),G=h(ta),Fe=r(ta,"SPAN",{});var bi=i(Fe);ze=s(bi,"DebertaConfig"),bi.forEach(t),ta.forEach(t),N=h(n),re=r(n,"DIV",{class:!0});var ln=i(re);v(ve.$$.fragment,ln),we=h(ln),ie=r(ln,"P",{});var mt=i(ie);Il=s(mt,"This is the configuration class to store the configuration of a "),oa=r(mt,"A",{href:!0});var ki=i(oa);Ol=s(ki,"DebertaModel"),ki.forEach(t),Nl=s(mt," or a "),sa=r(mt,"A",{href:!0});var Ti=i(sa);Wl=s(Ti,"TFDebertaModel"),Ti.forEach(t),Hl=s(mt,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),_o=r(mt,"A",{href:!0,rel:!0});var wi=i(_o);Ql=s(wi,"microsoft/deberta-base"),wi.forEach(t),Ul=s(mt," architecture."),mt.forEach(t),Gl=h(ln),qt=r(ln,"P",{});var dn=i(qt);Kl=s(dn,"Configuration objects inherit from "),aa=r(dn,"A",{href:!0});var vi=i(aa);Vl=s(vi,"PretrainedConfig"),vi.forEach(t),Jl=s(dn,` and can be used to control the model outputs. Read the
documentation from `),ra=r(dn,"A",{href:!0});var $i=i(ra);Xl=s($i,"PretrainedConfig"),$i.forEach(t),Yl=s(dn," for more information."),dn.forEach(t),ln.forEach(t),qi=h(n),xt=r(n,"H2",{class:!0});var na=i(xt);cn=r(na,"A",{id:!0,class:!0,href:!0});var yi=i(cn);Ba=r(yi,"SPAN",{});var Di=i(Ba);v(bo.$$.fragment,Di),Di.forEach(t),yi.forEach(t),Zl=h(na),Sa=r(na,"SPAN",{});var Ei=i(Sa);ed=s(Ei,"DebertaTokenizer"),Ei.forEach(t),na.forEach(t),xi=h(n),Me=r(n,"DIV",{class:!0});var Ne=i(Me);v(ko.$$.fragment,Ne),td=h(Ne),Ia=r(Ne,"P",{});var Fi=i(Ia);nd=s(Fi,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Fi.forEach(t),od=h(Ne),ht=r(Ne,"DIV",{class:!0});var ba=i(ht);v(To.$$.fragment,ba),sd=h(ba),Oa=r(ba,"P",{});var Rf=i(Oa);ad=s(Rf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Rf.forEach(t),rd=h(ba),wo=r(ba,"UL",{});var ol=i(wo);Na=r(ol,"LI",{});var Af=i(Na);id=s(Af,"single sequence: [CLS] X [SEP]"),Af.forEach(t),ld=h(ol),Wa=r(ol,"LI",{});var Bf=i(Wa);dd=s(Bf,"pair of sequences: [CLS] A [SEP] B [SEP]"),Bf.forEach(t),ol.forEach(t),ba.forEach(t),cd=h(Ne),pn=r(Ne,"DIV",{class:!0});var sl=i(pn);v(vo.$$.fragment,sl),pd=h(sl),zt=r(sl,"P",{});var ka=i(zt);md=s(ka,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ha=r(ka,"CODE",{});var Sf=i(Ha);hd=s(Sf,"prepare_for_model"),Sf.forEach(t),fd=s(ka," or "),Qa=r(ka,"CODE",{});var If=i(Qa);ud=s(If,"encode_plus"),If.forEach(t),gd=s(ka," methods."),ka.forEach(t),sl.forEach(t),_d=h(Ne),nt=r(Ne,"DIV",{class:!0});var lo=i(nt);v($o.$$.fragment,lo),bd=h(lo),Ua=r(lo,"P",{});var Of=i(Ua);kd=s(Of,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Of.forEach(t),Td=h(lo),v(mn.$$.fragment,lo),wd=h(lo),jt=r(lo,"P",{});var Ta=i(jt);vd=s(Ta,"If "),Ga=r(Ta,"CODE",{});var Nf=i(Ga);$d=s(Nf,"token_ids_1"),Nf.forEach(t),yd=s(Ta," is "),Ka=r(Ta,"CODE",{});var Wf=i(Ka);Dd=s(Wf,"None"),Wf.forEach(t),Ed=s(Ta,", this method only returns the first portion of the mask (0s)."),Ta.forEach(t),lo.forEach(t),Fd=h(Ne),ia=r(Ne,"DIV",{class:!0});var Hf=i(ia);v(yo.$$.fragment,Hf),Hf.forEach(t),Ne.forEach(t),zi=h(n),Mt=r(n,"H2",{class:!0});var al=i(Mt);hn=r(al,"A",{id:!0,class:!0,href:!0});var Qf=i(hn);Va=r(Qf,"SPAN",{});var Uf=i(Va);v(Do.$$.fragment,Uf),Uf.forEach(t),Qf.forEach(t),qd=h(al),Ja=r(al,"SPAN",{});var Gf=i(Ja);xd=s(Gf,"DebertaTokenizerFast"),Gf.forEach(t),al.forEach(t),ji=h(n),Ye=r(n,"DIV",{class:!0});var co=i(Ye);v(Eo.$$.fragment,co),zd=h(co),Fo=r(co,"P",{});var rl=i(Fo);jd=s(rl,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Xa=r(rl,"EM",{});var Kf=i(Xa);Md=s(Kf,"tokenizers"),Kf.forEach(t),Cd=s(rl," library."),rl.forEach(t),Pd=h(co),ft=r(co,"DIV",{class:!0});var wa=i(ft);v(qo.$$.fragment,wa),Ld=h(wa),Ya=r(wa,"P",{});var Vf=i(Ya);Rd=s(Vf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vf.forEach(t),Ad=h(wa),xo=r(wa,"UL",{});var il=i(xo);Za=r(il,"LI",{});var Jf=i(Za);Bd=s(Jf,"single sequence: [CLS] X [SEP]"),Jf.forEach(t),Sd=h(il),er=r(il,"LI",{});var Xf=i(er);Id=s(Xf,"pair of sequences: [CLS] A [SEP] B [SEP]"),Xf.forEach(t),il.forEach(t),wa.forEach(t),Od=h(co),ot=r(co,"DIV",{class:!0});var po=i(ot);v(zo.$$.fragment,po),Nd=h(po),tr=r(po,"P",{});var Yf=i(tr);Wd=s(Yf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Yf.forEach(t),Hd=h(po),v(fn.$$.fragment,po),Qd=h(po),Ct=r(po,"P",{});var va=i(Ct);Ud=s(va,"If "),nr=r(va,"CODE",{});var Zf=i(nr);Gd=s(Zf,"token_ids_1"),Zf.forEach(t),Kd=s(va," is "),or=r(va,"CODE",{});var eu=i(or);Vd=s(eu,"None"),eu.forEach(t),Jd=s(va,", this method only returns the first portion of the mask (0s)."),va.forEach(t),po.forEach(t),co.forEach(t),Mi=h(n),Pt=r(n,"H2",{class:!0});var ll=i(Pt);un=r(ll,"A",{id:!0,class:!0,href:!0});var tu=i(un);sr=r(tu,"SPAN",{});var nu=i(sr);v(jo.$$.fragment,nu),nu.forEach(t),tu.forEach(t),Xd=h(ll),ar=r(ll,"SPAN",{});var ou=i(ar);Yd=s(ou,"DebertaModel"),ou.forEach(t),ll.forEach(t),Ci=h(n),Ze=r(n,"DIV",{class:!0});var mo=i(Ze);v(Mo.$$.fragment,mo),Zd=h(mo),Co=r(mo,"P",{});var dl=i(Co);ec=s(dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Po=r(dl,"A",{href:!0,rel:!0});var su=i(Po);tc=s(su,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),su.forEach(t),nc=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),oc=h(mo),Lo=r(mo,"P",{});var cl=i(Lo);sc=s(cl,"This model is also a PyTorch "),Ro=r(cl,"A",{href:!0,rel:!0});var au=i(Ro);ac=s(au,"torch.nn.Module"),au.forEach(t),rc=s(cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cl.forEach(t),ic=h(mo),st=r(mo,"DIV",{class:!0});var ho=i(st);v(Ao.$$.fragment,ho),lc=h(ho),Lt=r(ho,"P",{});var $a=i(Lt);dc=s($a,"The "),la=r($a,"A",{href:!0});var ru=i(la);cc=s(ru,"DebertaModel"),ru.forEach(t),pc=s($a," forward method, overrides the "),rr=r($a,"CODE",{});var iu=i(rr);mc=s(iu,"__call__"),iu.forEach(t),hc=s($a," special method."),$a.forEach(t),fc=h(ho),v(gn.$$.fragment,ho),uc=h(ho),v(_n.$$.fragment,ho),ho.forEach(t),mo.forEach(t),Pi=h(n),Rt=r(n,"H2",{class:!0});var pl=i(Rt);bn=r(pl,"A",{id:!0,class:!0,href:!0});var lu=i(bn);ir=r(lu,"SPAN",{});var du=i(ir);v(Bo.$$.fragment,du),du.forEach(t),lu.forEach(t),gc=h(pl),lr=r(pl,"SPAN",{});var cu=i(lr);_c=s(cu,"DebertaPreTrainedModel"),cu.forEach(t),pl.forEach(t),Li=h(n),At=r(n,"DIV",{class:!0});var ml=i(At);v(So.$$.fragment,ml),bc=h(ml),dr=r(ml,"P",{});var pu=i(dr);kc=s(pu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),pu.forEach(t),ml.forEach(t),Ri=h(n),Bt=r(n,"H2",{class:!0});var hl=i(Bt);kn=r(hl,"A",{id:!0,class:!0,href:!0});var mu=i(kn);cr=r(mu,"SPAN",{});var hu=i(cr);v(Io.$$.fragment,hu),hu.forEach(t),mu.forEach(t),Tc=h(hl),pr=r(hl,"SPAN",{});var fu=i(pr);wc=s(fu,"DebertaForMaskedLM"),fu.forEach(t),hl.forEach(t),Ai=h(n),et=r(n,"DIV",{class:!0});var fo=i(et);v(Oo.$$.fragment,fo),vc=h(fo),St=r(fo,"P",{});var ya=i(St);$c=s(ya,"DeBERTa Model with a "),mr=r(ya,"CODE",{});var uu=i(mr);yc=s(uu,"language modeling"),uu.forEach(t),Dc=s(ya,` head on top.
The DeBERTa model was proposed in `),No=r(ya,"A",{href:!0,rel:!0});var gu=i(No);Ec=s(gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gu.forEach(t),Fc=s(ya,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ya.forEach(t),qc=h(fo),Wo=r(fo,"P",{});var fl=i(Wo);xc=s(fl,"This model is also a PyTorch "),Ho=r(fl,"A",{href:!0,rel:!0});var _u=i(Ho);zc=s(_u,"torch.nn.Module"),_u.forEach(t),jc=s(fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fl.forEach(t),Mc=h(fo),He=r(fo,"DIV",{class:!0});var ut=i(He);v(Qo.$$.fragment,ut),Cc=h(ut),It=r(ut,"P",{});var Da=i(It);Pc=s(Da,"The "),da=r(Da,"A",{href:!0});var bu=i(da);Lc=s(bu,"DebertaForMaskedLM"),bu.forEach(t),Rc=s(Da," forward method, overrides the "),hr=r(Da,"CODE",{});var ku=i(hr);Ac=s(ku,"__call__"),ku.forEach(t),Bc=s(Da," special method."),Da.forEach(t),Sc=h(ut),v(Tn.$$.fragment,ut),Ic=h(ut),v(wn.$$.fragment,ut),Oc=h(ut),v(vn.$$.fragment,ut),ut.forEach(t),fo.forEach(t),Bi=h(n),Ot=r(n,"H2",{class:!0});var ul=i(Ot);$n=r(ul,"A",{id:!0,class:!0,href:!0});var Tu=i($n);fr=r(Tu,"SPAN",{});var wu=i(fr);v(Uo.$$.fragment,wu),wu.forEach(t),Tu.forEach(t),Nc=h(ul),ur=r(ul,"SPAN",{});var vu=i(ur);Wc=s(vu,"DebertaForSequenceClassification"),vu.forEach(t),ul.forEach(t),Si=h(n),Ae=r(n,"DIV",{class:!0});var gt=i(Ae);v(Go.$$.fragment,gt),Hc=h(gt),gr=r(gt,"P",{});var $u=i(gr);Qc=s($u,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$u.forEach(t),Uc=h(gt),Ko=r(gt,"P",{});var gl=i(Ko);Gc=s(gl,"The DeBERTa model was proposed in "),Vo=r(gl,"A",{href:!0,rel:!0});var yu=i(Vo);Kc=s(yu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yu.forEach(t),Vc=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Jc=h(gt),Jo=r(gt,"P",{});var _l=i(Jo);Xc=s(_l,"This model is also a PyTorch "),Xo=r(_l,"A",{href:!0,rel:!0});var Du=i(Xo);Yc=s(Du,"torch.nn.Module"),Du.forEach(t),Zc=s(_l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_l.forEach(t),ep=h(gt),je=r(gt,"DIV",{class:!0});var Xe=i(je);v(Yo.$$.fragment,Xe),tp=h(Xe),Nt=r(Xe,"P",{});var Ea=i(Nt);np=s(Ea,"The "),ca=r(Ea,"A",{href:!0});var Eu=i(ca);op=s(Eu,"DebertaForSequenceClassification"),Eu.forEach(t),sp=s(Ea," forward method, overrides the "),_r=r(Ea,"CODE",{});var Fu=i(_r);ap=s(Fu,"__call__"),Fu.forEach(t),rp=s(Ea," special method."),Ea.forEach(t),ip=h(Xe),v(yn.$$.fragment,Xe),lp=h(Xe),v(Dn.$$.fragment,Xe),dp=h(Xe),v(En.$$.fragment,Xe),cp=h(Xe),v(Fn.$$.fragment,Xe),pp=h(Xe),v(qn.$$.fragment,Xe),Xe.forEach(t),gt.forEach(t),Ii=h(n),Wt=r(n,"H2",{class:!0});var bl=i(Wt);xn=r(bl,"A",{id:!0,class:!0,href:!0});var qu=i(xn);br=r(qu,"SPAN",{});var xu=i(br);v(Zo.$$.fragment,xu),xu.forEach(t),qu.forEach(t),mp=h(bl),kr=r(bl,"SPAN",{});var zu=i(kr);hp=s(zu,"DebertaForTokenClassification"),zu.forEach(t),bl.forEach(t),Oi=h(n),Be=r(n,"DIV",{class:!0});var _t=i(Be);v(es.$$.fragment,_t),fp=h(_t),Tr=r(_t,"P",{});var ju=i(Tr);up=s(ju,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ju.forEach(t),gp=h(_t),ts=r(_t,"P",{});var kl=i(ts);_p=s(kl,"The DeBERTa model was proposed in "),ns=r(kl,"A",{href:!0,rel:!0});var Mu=i(ns);bp=s(Mu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mu.forEach(t),kp=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Tp=h(_t),os=r(_t,"P",{});var Tl=i(os);wp=s(Tl,"This model is also a PyTorch "),ss=r(Tl,"A",{href:!0,rel:!0});var Cu=i(ss);vp=s(Cu,"torch.nn.Module"),Cu.forEach(t),$p=s(Tl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tl.forEach(t),yp=h(_t),Qe=r(_t,"DIV",{class:!0});var bt=i(Qe);v(as.$$.fragment,bt),Dp=h(bt),Ht=r(bt,"P",{});var Fa=i(Ht);Ep=s(Fa,"The "),pa=r(Fa,"A",{href:!0});var Pu=i(pa);Fp=s(Pu,"DebertaForTokenClassification"),Pu.forEach(t),qp=s(Fa," forward method, overrides the "),wr=r(Fa,"CODE",{});var Lu=i(wr);xp=s(Lu,"__call__"),Lu.forEach(t),zp=s(Fa," special method."),Fa.forEach(t),jp=h(bt),v(zn.$$.fragment,bt),Mp=h(bt),v(jn.$$.fragment,bt),Cp=h(bt),v(Mn.$$.fragment,bt),bt.forEach(t),_t.forEach(t),Ni=h(n),Qt=r(n,"H2",{class:!0});var wl=i(Qt);Cn=r(wl,"A",{id:!0,class:!0,href:!0});var Ru=i(Cn);vr=r(Ru,"SPAN",{});var Au=i(vr);v(rs.$$.fragment,Au),Au.forEach(t),Ru.forEach(t),Pp=h(wl),$r=r(wl,"SPAN",{});var Bu=i($r);Lp=s(Bu,"DebertaForQuestionAnswering"),Bu.forEach(t),wl.forEach(t),Wi=h(n),Se=r(n,"DIV",{class:!0});var kt=i(Se);v(is.$$.fragment,kt),Rp=h(kt),Ut=r(kt,"P",{});var qa=i(Ut);Ap=s(qa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yr=r(qa,"CODE",{});var Su=i(yr);Bp=s(Su,"span start logits"),Su.forEach(t),Sp=s(qa," and "),Dr=r(qa,"CODE",{});var Iu=i(Dr);Ip=s(Iu,"span end logits"),Iu.forEach(t),Op=s(qa,")."),qa.forEach(t),Np=h(kt),ls=r(kt,"P",{});var vl=i(ls);Wp=s(vl,"The DeBERTa model was proposed in "),ds=r(vl,"A",{href:!0,rel:!0});var Ou=i(ds);Hp=s(Ou,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ou.forEach(t),Qp=s(vl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vl.forEach(t),Up=h(kt),cs=r(kt,"P",{});var $l=i(cs);Gp=s($l,"This model is also a PyTorch "),ps=r($l,"A",{href:!0,rel:!0});var Nu=i(ps);Kp=s(Nu,"torch.nn.Module"),Nu.forEach(t),Vp=s($l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$l.forEach(t),Jp=h(kt),Ue=r(kt,"DIV",{class:!0});var Tt=i(Ue);v(ms.$$.fragment,Tt),Xp=h(Tt),Gt=r(Tt,"P",{});var xa=i(Gt);Yp=s(xa,"The "),ma=r(xa,"A",{href:!0});var Wu=i(ma);Zp=s(Wu,"DebertaForQuestionAnswering"),Wu.forEach(t),em=s(xa," forward method, overrides the "),Er=r(xa,"CODE",{});var Hu=i(Er);tm=s(Hu,"__call__"),Hu.forEach(t),nm=s(xa," special method."),xa.forEach(t),om=h(Tt),v(Pn.$$.fragment,Tt),sm=h(Tt),v(Ln.$$.fragment,Tt),am=h(Tt),v(Rn.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Hi=h(n),Kt=r(n,"H2",{class:!0});var yl=i(Kt);An=r(yl,"A",{id:!0,class:!0,href:!0});var Qu=i(An);Fr=r(Qu,"SPAN",{});var Uu=i(Fr);v(hs.$$.fragment,Uu),Uu.forEach(t),Qu.forEach(t),rm=h(yl),qr=r(yl,"SPAN",{});var Gu=i(qr);im=s(Gu,"TFDebertaModel"),Gu.forEach(t),yl.forEach(t),Qi=h(n),Ie=r(n,"DIV",{class:!0});var wt=i(Ie);v(fs.$$.fragment,wt),lm=h(wt),us=r(wt,"P",{});var Dl=i(us);dm=s(Dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=r(Dl,"A",{href:!0,rel:!0});var Ku=i(gs);cm=s(Ku,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ku.forEach(t),pm=s(Dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dl.forEach(t),mm=h(wt),_s=r(wt,"P",{});var El=i(_s);hm=s(El,"This model is also a "),bs=r(El,"A",{href:!0,rel:!0});var Vu=i(bs);fm=s(Vu,"tf.keras.Model"),Vu.forEach(t),um=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),gm=h(wt),v(Bn.$$.fragment,wt),_m=h(wt),at=r(wt,"DIV",{class:!0});var uo=i(at);v(ks.$$.fragment,uo),bm=h(uo),Vt=r(uo,"P",{});var za=i(Vt);km=s(za,"The "),ha=r(za,"A",{href:!0});var Ju=i(ha);Tm=s(Ju,"TFDebertaModel"),Ju.forEach(t),wm=s(za," forward method, overrides the "),xr=r(za,"CODE",{});var Xu=i(xr);vm=s(Xu,"__call__"),Xu.forEach(t),$m=s(za," special method."),za.forEach(t),ym=h(uo),v(Sn.$$.fragment,uo),Dm=h(uo),v(In.$$.fragment,uo),uo.forEach(t),wt.forEach(t),Ui=h(n),Jt=r(n,"H2",{class:!0});var Fl=i(Jt);On=r(Fl,"A",{id:!0,class:!0,href:!0});var Yu=i(On);zr=r(Yu,"SPAN",{});var Zu=i(zr);v(Ts.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),Em=h(Fl),jr=r(Fl,"SPAN",{});var eg=i(jr);Fm=s(eg,"TFDebertaPreTrainedModel"),eg.forEach(t),Fl.forEach(t),Gi=h(n),ct=r(n,"DIV",{class:!0});var ja=i(ct);v(ws.$$.fragment,ja),qm=h(ja),Mr=r(ja,"P",{});var tg=i(Mr);xm=s(tg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),tg.forEach(t),zm=h(ja),rt=r(ja,"DIV",{class:!0});var go=i(rt);v(vs.$$.fragment,go),jm=h(go),Cr=r(go,"P",{});var ng=i(Cr);Mm=s(ng,"Calls the model on new inputs and returns the outputs as tensors."),ng.forEach(t),Cm=h(go),$s=r(go,"P",{});var ql=i($s);Pm=s(ql,"In this case "),Pr=r(ql,"CODE",{});var og=i(Pr);Lm=s(og,"call()"),og.forEach(t),Rm=s(ql,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ql.forEach(t),Am=h(go),tt=r(go,"P",{});var vt=i(tt);Bm=s(vt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=r(vt,"CODE",{});var sg=i(Lr);Sm=s(sg,"tf.keras.Model"),sg.forEach(t),Im=s(vt,`.
To call a model on an input, always use the `),Rr=r(vt,"CODE",{});var ag=i(Rr);Om=s(ag,"__call__()"),ag.forEach(t),Nm=s(vt,` method,
i.e. `),Ar=r(vt,"CODE",{});var rg=i(Ar);Wm=s(rg,"model(inputs)"),rg.forEach(t),Hm=s(vt,", which relies on the underlying "),Br=r(vt,"CODE",{});var ig=i(Br);Qm=s(ig,"call()"),ig.forEach(t),Um=s(vt," method."),vt.forEach(t),go.forEach(t),ja.forEach(t),Ki=h(n),Xt=r(n,"H2",{class:!0});var xl=i(Xt);Nn=r(xl,"A",{id:!0,class:!0,href:!0});var lg=i(Nn);Sr=r(lg,"SPAN",{});var dg=i(Sr);v(ys.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Gm=h(xl),Ir=r(xl,"SPAN",{});var cg=i(Ir);Km=s(cg,"TFDebertaForMaskedLM"),cg.forEach(t),xl.forEach(t),Vi=h(n),Oe=r(n,"DIV",{class:!0});var $t=i(Oe);v(Ds.$$.fragment,$t),Vm=h($t),Yt=r($t,"P",{});var Ma=i(Yt);Jm=s(Ma,"DeBERTa Model with a "),Or=r(Ma,"CODE",{});var pg=i(Or);Xm=s(pg,"language modeling"),pg.forEach(t),Ym=s(Ma,` head on top.
The DeBERTa model was proposed in `),Es=r(Ma,"A",{href:!0,rel:!0});var mg=i(Es);Zm=s(mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mg.forEach(t),eh=s(Ma,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ma.forEach(t),th=h($t),Fs=r($t,"P",{});var zl=i(Fs);nh=s(zl,"This model is also a "),qs=r(zl,"A",{href:!0,rel:!0});var hg=i(qs);oh=s(hg,"tf.keras.Model"),hg.forEach(t),sh=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),ah=h($t),v(Wn.$$.fragment,$t),rh=h($t),Ge=r($t,"DIV",{class:!0});var yt=i(Ge);v(xs.$$.fragment,yt),ih=h(yt),Zt=r(yt,"P",{});var Ca=i(Zt);lh=s(Ca,"The "),fa=r(Ca,"A",{href:!0});var fg=i(fa);dh=s(fg,"TFDebertaForMaskedLM"),fg.forEach(t),ch=s(Ca," forward method, overrides the "),Nr=r(Ca,"CODE",{});var ug=i(Nr);ph=s(ug,"__call__"),ug.forEach(t),mh=s(Ca," special method."),Ca.forEach(t),hh=h(yt),v(Hn.$$.fragment,yt),fh=h(yt),v(Qn.$$.fragment,yt),uh=h(yt),v(Un.$$.fragment,yt),yt.forEach(t),$t.forEach(t),Ji=h(n),en=r(n,"H2",{class:!0});var jl=i(en);Gn=r(jl,"A",{id:!0,class:!0,href:!0});var gg=i(Gn);Wr=r(gg,"SPAN",{});var _g=i(Wr);v(zs.$$.fragment,_g),_g.forEach(t),gg.forEach(t),gh=h(jl),Hr=r(jl,"SPAN",{});var bg=i(Hr);_h=s(bg,"TFDebertaForSequenceClassification"),bg.forEach(t),jl.forEach(t),Xi=h(n),Ce=r(n,"DIV",{class:!0});var it=i(Ce);v(js.$$.fragment,it),bh=h(it),Qr=r(it,"P",{});var kg=i(Qr);kh=s(kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kg.forEach(t),Th=h(it),Ms=r(it,"P",{});var Ml=i(Ms);wh=s(Ml,"The DeBERTa model was proposed in "),Cs=r(Ml,"A",{href:!0,rel:!0});var Tg=i(Cs);vh=s(Tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tg.forEach(t),$h=s(Ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ml.forEach(t),yh=h(it),Ps=r(it,"P",{});var Cl=i(Ps);Dh=s(Cl,"This model is also a "),Ls=r(Cl,"A",{href:!0,rel:!0});var wg=i(Ls);Eh=s(wg,"tf.keras.Model"),wg.forEach(t),Fh=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),qh=h(it),v(Kn.$$.fragment,it),xh=h(it),Ke=r(it,"DIV",{class:!0});var Dt=i(Ke);v(Rs.$$.fragment,Dt),zh=h(Dt),tn=r(Dt,"P",{});var Pa=i(tn);jh=s(Pa,"The "),ua=r(Pa,"A",{href:!0});var vg=i(ua);Mh=s(vg,"TFDebertaForSequenceClassification"),vg.forEach(t),Ch=s(Pa," forward method, overrides the "),Ur=r(Pa,"CODE",{});var $g=i(Ur);Ph=s($g,"__call__"),$g.forEach(t),Lh=s(Pa," special method."),Pa.forEach(t),Rh=h(Dt),v(Vn.$$.fragment,Dt),Ah=h(Dt),v(Jn.$$.fragment,Dt),Bh=h(Dt),v(Xn.$$.fragment,Dt),Dt.forEach(t),it.forEach(t),Yi=h(n),nn=r(n,"H2",{class:!0});var Pl=i(nn);Yn=r(Pl,"A",{id:!0,class:!0,href:!0});var yg=i(Yn);Gr=r(yg,"SPAN",{});var Dg=i(Gr);v(As.$$.fragment,Dg),Dg.forEach(t),yg.forEach(t),Sh=h(Pl),Kr=r(Pl,"SPAN",{});var Eg=i(Kr);Ih=s(Eg,"TFDebertaForTokenClassification"),Eg.forEach(t),Pl.forEach(t),Zi=h(n),Pe=r(n,"DIV",{class:!0});var lt=i(Pe);v(Bs.$$.fragment,lt),Oh=h(lt),Vr=r(lt,"P",{});var Fg=i(Vr);Nh=s(Fg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fg.forEach(t),Wh=h(lt),Ss=r(lt,"P",{});var Ll=i(Ss);Hh=s(Ll,"The DeBERTa model was proposed in "),Is=r(Ll,"A",{href:!0,rel:!0});var qg=i(Is);Qh=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),Uh=s(Ll,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ll.forEach(t),Gh=h(lt),Os=r(lt,"P",{});var Rl=i(Os);Kh=s(Rl,"This model is also a "),Ns=r(Rl,"A",{href:!0,rel:!0});var xg=i(Ns);Vh=s(xg,"tf.keras.Model"),xg.forEach(t),Jh=s(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),Xh=h(lt),v(Zn.$$.fragment,lt),Yh=h(lt),Ve=r(lt,"DIV",{class:!0});var Et=i(Ve);v(Ws.$$.fragment,Et),Zh=h(Et),on=r(Et,"P",{});var La=i(on);ef=s(La,"The "),ga=r(La,"A",{href:!0});var zg=i(ga);tf=s(zg,"TFDebertaForTokenClassification"),zg.forEach(t),nf=s(La," forward method, overrides the "),Jr=r(La,"CODE",{});var jg=i(Jr);of=s(jg,"__call__"),jg.forEach(t),sf=s(La," special method."),La.forEach(t),af=h(Et),v(eo.$$.fragment,Et),rf=h(Et),v(to.$$.fragment,Et),lf=h(Et),v(no.$$.fragment,Et),Et.forEach(t),lt.forEach(t),el=h(n),sn=r(n,"H2",{class:!0});var Al=i(sn);oo=r(Al,"A",{id:!0,class:!0,href:!0});var Mg=i(oo);Xr=r(Mg,"SPAN",{});var Cg=i(Xr);v(Hs.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),df=h(Al),Yr=r(Al,"SPAN",{});var Pg=i(Yr);cf=s(Pg,"TFDebertaForQuestionAnswering"),Pg.forEach(t),Al.forEach(t),tl=h(n),Le=r(n,"DIV",{class:!0});var dt=i(Le);v(Qs.$$.fragment,dt),pf=h(dt),an=r(dt,"P",{});var Ra=i(an);mf=s(Ra,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=r(Ra,"CODE",{});var Lg=i(Zr);hf=s(Lg,"span start logits"),Lg.forEach(t),ff=s(Ra," and "),ei=r(Ra,"CODE",{});var Rg=i(ei);uf=s(Rg,"span end logits"),Rg.forEach(t),gf=s(Ra,")."),Ra.forEach(t),_f=h(dt),Us=r(dt,"P",{});var Bl=i(Us);bf=s(Bl,"The DeBERTa model was proposed in "),Gs=r(Bl,"A",{href:!0,rel:!0});var Ag=i(Gs);kf=s(Ag,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ag.forEach(t),Tf=s(Bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bl.forEach(t),wf=h(dt),Ks=r(dt,"P",{});var Sl=i(Ks);vf=s(Sl,"This model is also a "),Vs=r(Sl,"A",{href:!0,rel:!0});var Bg=i(Vs);$f=s(Bg,"tf.keras.Model"),Bg.forEach(t),yf=s(Sl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sl.forEach(t),Df=h(dt),v(so.$$.fragment,dt),Ef=h(dt),Je=r(dt,"DIV",{class:!0});var Ft=i(Je);v(Js.$$.fragment,Ft),Ff=h(Ft),rn=r(Ft,"P",{});var Aa=i(rn);qf=s(Aa,"The "),_a=r(Aa,"A",{href:!0});var Sg=i(_a);xf=s(Sg,"TFDebertaForQuestionAnswering"),Sg.forEach(t),zf=s(Aa," forward method, overrides the "),ti=r(Aa,"CODE",{});var Ig=i(ti);jf=s(Ig,"__call__"),Ig.forEach(t),Mf=s(Aa," special method."),Aa.forEach(t),Cf=h(Ft),v(ao.$$.fragment,Ft),Pf=h(Ft),v(ro.$$.fragment,Ft),Lf=h(Ft),v(io.$$.fragment,Ft),Ft.forEach(t),dt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(z_)),u(p,"id","deberta"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#deberta"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(z,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(B,"href","https://github.com/microsoft/DeBERTa"),u(B,"rel","nofollow"),u(P,"href","https://huggingface.co/DeBERTa"),u(P,"rel","nofollow"),u(ne,"href","https://huggingface.co/kamalkraj"),u(ne,"rel","nofollow"),u(V,"href","https://github.com/microsoft/DeBERTa"),u(V,"rel","nofollow"),u(Te,"id","transformers.DebertaConfig"),u(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Te,"href","#transformers.DebertaConfig"),u(pe,"class","relative group"),u(oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),u(sa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),u(_o,"href","https://huggingface.co/microsoft/deberta-base"),u(_o,"rel","nofollow"),u(aa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ra,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"id","transformers.DebertaTokenizer"),u(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cn,"href","#transformers.DebertaTokenizer"),u(xt,"class","relative group"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hn,"id","transformers.DebertaTokenizerFast"),u(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hn,"href","#transformers.DebertaTokenizerFast"),u(Mt,"class","relative group"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.DebertaModel"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.DebertaModel"),u(Pt,"class","relative group"),u(Po,"href","https://arxiv.org/abs/2006.03654"),u(Po,"rel","nofollow"),u(Ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ro,"rel","nofollow"),u(la,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.DebertaPreTrainedModel"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.DebertaPreTrainedModel"),u(Rt,"class","relative group"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.DebertaForMaskedLM"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.DebertaForMaskedLM"),u(Bt,"class","relative group"),u(No,"href","https://arxiv.org/abs/2006.03654"),u(No,"rel","nofollow"),u(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ho,"rel","nofollow"),u(da,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.DebertaForSequenceClassification"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.DebertaForSequenceClassification"),u(Ot,"class","relative group"),u(Vo,"href","https://arxiv.org/abs/2006.03654"),u(Vo,"rel","nofollow"),u(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Xo,"rel","nofollow"),u(ca,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.DebertaForTokenClassification"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.DebertaForTokenClassification"),u(Wt,"class","relative group"),u(ns,"href","https://arxiv.org/abs/2006.03654"),u(ns,"rel","nofollow"),u(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ss,"rel","nofollow"),u(pa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.DebertaForQuestionAnswering"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.DebertaForQuestionAnswering"),u(Qt,"class","relative group"),u(ds,"href","https://arxiv.org/abs/2006.03654"),u(ds,"rel","nofollow"),u(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ps,"rel","nofollow"),u(ma,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.TFDebertaModel"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.TFDebertaModel"),u(Kt,"class","relative group"),u(gs,"href","https://arxiv.org/abs/2006.03654"),u(gs,"rel","nofollow"),u(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(bs,"rel","nofollow"),u(ha,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.TFDebertaPreTrainedModel"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.TFDebertaPreTrainedModel"),u(Jt,"class","relative group"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.TFDebertaForMaskedLM"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.TFDebertaForMaskedLM"),u(Xt,"class","relative group"),u(Es,"href","https://arxiv.org/abs/2006.03654"),u(Es,"rel","nofollow"),u(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qs,"rel","nofollow"),u(fa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.TFDebertaForSequenceClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.TFDebertaForSequenceClassification"),u(en,"class","relative group"),u(Cs,"href","https://arxiv.org/abs/2006.03654"),u(Cs,"rel","nofollow"),u(Ls,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ls,"rel","nofollow"),u(ua,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yn,"id","transformers.TFDebertaForTokenClassification"),u(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yn,"href","#transformers.TFDebertaForTokenClassification"),u(nn,"class","relative group"),u(Is,"href","https://arxiv.org/abs/2006.03654"),u(Is,"rel","nofollow"),u(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ns,"rel","nofollow"),u(ga,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"id","transformers.TFDebertaForQuestionAnswering"),u(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oo,"href","#transformers.TFDebertaForQuestionAnswering"),u(sn,"class","relative group"),u(Gs,"href","https://arxiv.org/abs/2006.03654"),u(Gs,"rel","nofollow"),u(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vs,"rel","nofollow"),u(_a,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,k){e(document.head,l),_(n,g,k),_(n,c,k),e(c,p),e(p,T),$(d,T,null),e(c,f),e(c,x),e(x,me),_(n,X,k),_(n,z,k),e(z,Y),e(Y,S),$(ee,S,null),e(z,he),e(z,I),e(I,fe),_(n,le,k),_(n,W,k),e(W,A),e(W,te),e(te,Z),e(W,j),_(n,C,k),_(n,oe,k),e(oe,H),_(n,de,k),_(n,se,k),e(se,Q),_(n,ce,k),_(n,ae,k),e(ae,M),e(M,ue),e(M,B),e(B,ge),e(M,_e),_(n,O,k),_(n,K,k),e(K,be),e(K,P),e(P,ke),e(K,U),e(K,ne),e(ne,b),e(K,q),e(K,V),e(V,qe),e(K,xe),_(n,R,k),_(n,pe,k),e(pe,Te),e(Te,Ee),$(L,Ee,null),e(pe,G),e(pe,Fe),e(Fe,ze),_(n,N,k),_(n,re,k),$(ve,re,null),e(re,we),e(re,ie),e(ie,Il),e(ie,oa),e(oa,Ol),e(ie,Nl),e(ie,sa),e(sa,Wl),e(ie,Hl),e(ie,_o),e(_o,Ql),e(ie,Ul),e(re,Gl),e(re,qt),e(qt,Kl),e(qt,aa),e(aa,Vl),e(qt,Jl),e(qt,ra),e(ra,Xl),e(qt,Yl),_(n,qi,k),_(n,xt,k),e(xt,cn),e(cn,Ba),$(bo,Ba,null),e(xt,Zl),e(xt,Sa),e(Sa,ed),_(n,xi,k),_(n,Me,k),$(ko,Me,null),e(Me,td),e(Me,Ia),e(Ia,nd),e(Me,od),e(Me,ht),$(To,ht,null),e(ht,sd),e(ht,Oa),e(Oa,ad),e(ht,rd),e(ht,wo),e(wo,Na),e(Na,id),e(wo,ld),e(wo,Wa),e(Wa,dd),e(Me,cd),e(Me,pn),$(vo,pn,null),e(pn,pd),e(pn,zt),e(zt,md),e(zt,Ha),e(Ha,hd),e(zt,fd),e(zt,Qa),e(Qa,ud),e(zt,gd),e(Me,_d),e(Me,nt),$($o,nt,null),e(nt,bd),e(nt,Ua),e(Ua,kd),e(nt,Td),$(mn,nt,null),e(nt,wd),e(nt,jt),e(jt,vd),e(jt,Ga),e(Ga,$d),e(jt,yd),e(jt,Ka),e(Ka,Dd),e(jt,Ed),e(Me,Fd),e(Me,ia),$(yo,ia,null),_(n,zi,k),_(n,Mt,k),e(Mt,hn),e(hn,Va),$(Do,Va,null),e(Mt,qd),e(Mt,Ja),e(Ja,xd),_(n,ji,k),_(n,Ye,k),$(Eo,Ye,null),e(Ye,zd),e(Ye,Fo),e(Fo,jd),e(Fo,Xa),e(Xa,Md),e(Fo,Cd),e(Ye,Pd),e(Ye,ft),$(qo,ft,null),e(ft,Ld),e(ft,Ya),e(Ya,Rd),e(ft,Ad),e(ft,xo),e(xo,Za),e(Za,Bd),e(xo,Sd),e(xo,er),e(er,Id),e(Ye,Od),e(Ye,ot),$(zo,ot,null),e(ot,Nd),e(ot,tr),e(tr,Wd),e(ot,Hd),$(fn,ot,null),e(ot,Qd),e(ot,Ct),e(Ct,Ud),e(Ct,nr),e(nr,Gd),e(Ct,Kd),e(Ct,or),e(or,Vd),e(Ct,Jd),_(n,Mi,k),_(n,Pt,k),e(Pt,un),e(un,sr),$(jo,sr,null),e(Pt,Xd),e(Pt,ar),e(ar,Yd),_(n,Ci,k),_(n,Ze,k),$(Mo,Ze,null),e(Ze,Zd),e(Ze,Co),e(Co,ec),e(Co,Po),e(Po,tc),e(Co,nc),e(Ze,oc),e(Ze,Lo),e(Lo,sc),e(Lo,Ro),e(Ro,ac),e(Lo,rc),e(Ze,ic),e(Ze,st),$(Ao,st,null),e(st,lc),e(st,Lt),e(Lt,dc),e(Lt,la),e(la,cc),e(Lt,pc),e(Lt,rr),e(rr,mc),e(Lt,hc),e(st,fc),$(gn,st,null),e(st,uc),$(_n,st,null),_(n,Pi,k),_(n,Rt,k),e(Rt,bn),e(bn,ir),$(Bo,ir,null),e(Rt,gc),e(Rt,lr),e(lr,_c),_(n,Li,k),_(n,At,k),$(So,At,null),e(At,bc),e(At,dr),e(dr,kc),_(n,Ri,k),_(n,Bt,k),e(Bt,kn),e(kn,cr),$(Io,cr,null),e(Bt,Tc),e(Bt,pr),e(pr,wc),_(n,Ai,k),_(n,et,k),$(Oo,et,null),e(et,vc),e(et,St),e(St,$c),e(St,mr),e(mr,yc),e(St,Dc),e(St,No),e(No,Ec),e(St,Fc),e(et,qc),e(et,Wo),e(Wo,xc),e(Wo,Ho),e(Ho,zc),e(Wo,jc),e(et,Mc),e(et,He),$(Qo,He,null),e(He,Cc),e(He,It),e(It,Pc),e(It,da),e(da,Lc),e(It,Rc),e(It,hr),e(hr,Ac),e(It,Bc),e(He,Sc),$(Tn,He,null),e(He,Ic),$(wn,He,null),e(He,Oc),$(vn,He,null),_(n,Bi,k),_(n,Ot,k),e(Ot,$n),e($n,fr),$(Uo,fr,null),e(Ot,Nc),e(Ot,ur),e(ur,Wc),_(n,Si,k),_(n,Ae,k),$(Go,Ae,null),e(Ae,Hc),e(Ae,gr),e(gr,Qc),e(Ae,Uc),e(Ae,Ko),e(Ko,Gc),e(Ko,Vo),e(Vo,Kc),e(Ko,Vc),e(Ae,Jc),e(Ae,Jo),e(Jo,Xc),e(Jo,Xo),e(Xo,Yc),e(Jo,Zc),e(Ae,ep),e(Ae,je),$(Yo,je,null),e(je,tp),e(je,Nt),e(Nt,np),e(Nt,ca),e(ca,op),e(Nt,sp),e(Nt,_r),e(_r,ap),e(Nt,rp),e(je,ip),$(yn,je,null),e(je,lp),$(Dn,je,null),e(je,dp),$(En,je,null),e(je,cp),$(Fn,je,null),e(je,pp),$(qn,je,null),_(n,Ii,k),_(n,Wt,k),e(Wt,xn),e(xn,br),$(Zo,br,null),e(Wt,mp),e(Wt,kr),e(kr,hp),_(n,Oi,k),_(n,Be,k),$(es,Be,null),e(Be,fp),e(Be,Tr),e(Tr,up),e(Be,gp),e(Be,ts),e(ts,_p),e(ts,ns),e(ns,bp),e(ts,kp),e(Be,Tp),e(Be,os),e(os,wp),e(os,ss),e(ss,vp),e(os,$p),e(Be,yp),e(Be,Qe),$(as,Qe,null),e(Qe,Dp),e(Qe,Ht),e(Ht,Ep),e(Ht,pa),e(pa,Fp),e(Ht,qp),e(Ht,wr),e(wr,xp),e(Ht,zp),e(Qe,jp),$(zn,Qe,null),e(Qe,Mp),$(jn,Qe,null),e(Qe,Cp),$(Mn,Qe,null),_(n,Ni,k),_(n,Qt,k),e(Qt,Cn),e(Cn,vr),$(rs,vr,null),e(Qt,Pp),e(Qt,$r),e($r,Lp),_(n,Wi,k),_(n,Se,k),$(is,Se,null),e(Se,Rp),e(Se,Ut),e(Ut,Ap),e(Ut,yr),e(yr,Bp),e(Ut,Sp),e(Ut,Dr),e(Dr,Ip),e(Ut,Op),e(Se,Np),e(Se,ls),e(ls,Wp),e(ls,ds),e(ds,Hp),e(ls,Qp),e(Se,Up),e(Se,cs),e(cs,Gp),e(cs,ps),e(ps,Kp),e(cs,Vp),e(Se,Jp),e(Se,Ue),$(ms,Ue,null),e(Ue,Xp),e(Ue,Gt),e(Gt,Yp),e(Gt,ma),e(ma,Zp),e(Gt,em),e(Gt,Er),e(Er,tm),e(Gt,nm),e(Ue,om),$(Pn,Ue,null),e(Ue,sm),$(Ln,Ue,null),e(Ue,am),$(Rn,Ue,null),_(n,Hi,k),_(n,Kt,k),e(Kt,An),e(An,Fr),$(hs,Fr,null),e(Kt,rm),e(Kt,qr),e(qr,im),_(n,Qi,k),_(n,Ie,k),$(fs,Ie,null),e(Ie,lm),e(Ie,us),e(us,dm),e(us,gs),e(gs,cm),e(us,pm),e(Ie,mm),e(Ie,_s),e(_s,hm),e(_s,bs),e(bs,fm),e(_s,um),e(Ie,gm),$(Bn,Ie,null),e(Ie,_m),e(Ie,at),$(ks,at,null),e(at,bm),e(at,Vt),e(Vt,km),e(Vt,ha),e(ha,Tm),e(Vt,wm),e(Vt,xr),e(xr,vm),e(Vt,$m),e(at,ym),$(Sn,at,null),e(at,Dm),$(In,at,null),_(n,Ui,k),_(n,Jt,k),e(Jt,On),e(On,zr),$(Ts,zr,null),e(Jt,Em),e(Jt,jr),e(jr,Fm),_(n,Gi,k),_(n,ct,k),$(ws,ct,null),e(ct,qm),e(ct,Mr),e(Mr,xm),e(ct,zm),e(ct,rt),$(vs,rt,null),e(rt,jm),e(rt,Cr),e(Cr,Mm),e(rt,Cm),e(rt,$s),e($s,Pm),e($s,Pr),e(Pr,Lm),e($s,Rm),e(rt,Am),e(rt,tt),e(tt,Bm),e(tt,Lr),e(Lr,Sm),e(tt,Im),e(tt,Rr),e(Rr,Om),e(tt,Nm),e(tt,Ar),e(Ar,Wm),e(tt,Hm),e(tt,Br),e(Br,Qm),e(tt,Um),_(n,Ki,k),_(n,Xt,k),e(Xt,Nn),e(Nn,Sr),$(ys,Sr,null),e(Xt,Gm),e(Xt,Ir),e(Ir,Km),_(n,Vi,k),_(n,Oe,k),$(Ds,Oe,null),e(Oe,Vm),e(Oe,Yt),e(Yt,Jm),e(Yt,Or),e(Or,Xm),e(Yt,Ym),e(Yt,Es),e(Es,Zm),e(Yt,eh),e(Oe,th),e(Oe,Fs),e(Fs,nh),e(Fs,qs),e(qs,oh),e(Fs,sh),e(Oe,ah),$(Wn,Oe,null),e(Oe,rh),e(Oe,Ge),$(xs,Ge,null),e(Ge,ih),e(Ge,Zt),e(Zt,lh),e(Zt,fa),e(fa,dh),e(Zt,ch),e(Zt,Nr),e(Nr,ph),e(Zt,mh),e(Ge,hh),$(Hn,Ge,null),e(Ge,fh),$(Qn,Ge,null),e(Ge,uh),$(Un,Ge,null),_(n,Ji,k),_(n,en,k),e(en,Gn),e(Gn,Wr),$(zs,Wr,null),e(en,gh),e(en,Hr),e(Hr,_h),_(n,Xi,k),_(n,Ce,k),$(js,Ce,null),e(Ce,bh),e(Ce,Qr),e(Qr,kh),e(Ce,Th),e(Ce,Ms),e(Ms,wh),e(Ms,Cs),e(Cs,vh),e(Ms,$h),e(Ce,yh),e(Ce,Ps),e(Ps,Dh),e(Ps,Ls),e(Ls,Eh),e(Ps,Fh),e(Ce,qh),$(Kn,Ce,null),e(Ce,xh),e(Ce,Ke),$(Rs,Ke,null),e(Ke,zh),e(Ke,tn),e(tn,jh),e(tn,ua),e(ua,Mh),e(tn,Ch),e(tn,Ur),e(Ur,Ph),e(tn,Lh),e(Ke,Rh),$(Vn,Ke,null),e(Ke,Ah),$(Jn,Ke,null),e(Ke,Bh),$(Xn,Ke,null),_(n,Yi,k),_(n,nn,k),e(nn,Yn),e(Yn,Gr),$(As,Gr,null),e(nn,Sh),e(nn,Kr),e(Kr,Ih),_(n,Zi,k),_(n,Pe,k),$(Bs,Pe,null),e(Pe,Oh),e(Pe,Vr),e(Vr,Nh),e(Pe,Wh),e(Pe,Ss),e(Ss,Hh),e(Ss,Is),e(Is,Qh),e(Ss,Uh),e(Pe,Gh),e(Pe,Os),e(Os,Kh),e(Os,Ns),e(Ns,Vh),e(Os,Jh),e(Pe,Xh),$(Zn,Pe,null),e(Pe,Yh),e(Pe,Ve),$(Ws,Ve,null),e(Ve,Zh),e(Ve,on),e(on,ef),e(on,ga),e(ga,tf),e(on,nf),e(on,Jr),e(Jr,of),e(on,sf),e(Ve,af),$(eo,Ve,null),e(Ve,rf),$(to,Ve,null),e(Ve,lf),$(no,Ve,null),_(n,el,k),_(n,sn,k),e(sn,oo),e(oo,Xr),$(Hs,Xr,null),e(sn,df),e(sn,Yr),e(Yr,cf),_(n,tl,k),_(n,Le,k),$(Qs,Le,null),e(Le,pf),e(Le,an),e(an,mf),e(an,Zr),e(Zr,hf),e(an,ff),e(an,ei),e(ei,uf),e(an,gf),e(Le,_f),e(Le,Us),e(Us,bf),e(Us,Gs),e(Gs,kf),e(Us,Tf),e(Le,wf),e(Le,Ks),e(Ks,vf),e(Ks,Vs),e(Vs,$f),e(Ks,yf),e(Le,Df),$(so,Le,null),e(Le,Ef),e(Le,Je),$(Js,Je,null),e(Je,Ff),e(Je,rn),e(rn,qf),e(rn,_a),e(_a,xf),e(rn,zf),e(rn,ti),e(ti,jf),e(rn,Mf),e(Je,Cf),$(ao,Je,null),e(Je,Pf),$(ro,Je,null),e(Je,Lf),$(io,Je,null),nl=!0},p(n,[k]){const Xs={};k&2&&(Xs.$$scope={dirty:k,ctx:n}),mn.$set(Xs);const ni={};k&2&&(ni.$$scope={dirty:k,ctx:n}),fn.$set(ni);const oi={};k&2&&(oi.$$scope={dirty:k,ctx:n}),gn.$set(oi);const si={};k&2&&(si.$$scope={dirty:k,ctx:n}),_n.$set(si);const Ys={};k&2&&(Ys.$$scope={dirty:k,ctx:n}),Tn.$set(Ys);const ai={};k&2&&(ai.$$scope={dirty:k,ctx:n}),wn.$set(ai);const ri={};k&2&&(ri.$$scope={dirty:k,ctx:n}),vn.$set(ri);const ii={};k&2&&(ii.$$scope={dirty:k,ctx:n}),yn.$set(ii);const Zs={};k&2&&(Zs.$$scope={dirty:k,ctx:n}),Dn.$set(Zs);const li={};k&2&&(li.$$scope={dirty:k,ctx:n}),En.$set(li);const di={};k&2&&(di.$$scope={dirty:k,ctx:n}),Fn.$set(di);const ci={};k&2&&(ci.$$scope={dirty:k,ctx:n}),qn.$set(ci);const pi={};k&2&&(pi.$$scope={dirty:k,ctx:n}),zn.$set(pi);const ea={};k&2&&(ea.$$scope={dirty:k,ctx:n}),jn.$set(ea);const mi={};k&2&&(mi.$$scope={dirty:k,ctx:n}),Mn.$set(mi);const pt={};k&2&&(pt.$$scope={dirty:k,ctx:n}),Pn.$set(pt);const hi={};k&2&&(hi.$$scope={dirty:k,ctx:n}),Ln.$set(hi);const fi={};k&2&&(fi.$$scope={dirty:k,ctx:n}),Rn.$set(fi);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:n}),Bn.$set(ui);const ta={};k&2&&(ta.$$scope={dirty:k,ctx:n}),Sn.$set(ta);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:n}),In.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:n}),Wn.$set(_i);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:n}),Hn.$set(bi);const ln={};k&2&&(ln.$$scope={dirty:k,ctx:n}),Qn.$set(ln);const mt={};k&2&&(mt.$$scope={dirty:k,ctx:n}),Un.$set(mt);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:n}),Kn.$set(ki);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:n}),Vn.$set(Ti);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:n}),Jn.$set(wi);const dn={};k&2&&(dn.$$scope={dirty:k,ctx:n}),Xn.$set(dn);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:n}),Zn.$set(vi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:n}),eo.$set($i);const na={};k&2&&(na.$$scope={dirty:k,ctx:n}),to.$set(na);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:n}),no.$set(yi);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:n}),so.$set(Di);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:n}),ao.$set(Ei);const Ne={};k&2&&(Ne.$$scope={dirty:k,ctx:n}),ro.$set(Ne);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:n}),io.$set(Fi)},i(n){nl||(y(d.$$.fragment,n),y(ee.$$.fragment,n),y(L.$$.fragment,n),y(ve.$$.fragment,n),y(bo.$$.fragment,n),y(ko.$$.fragment,n),y(To.$$.fragment,n),y(vo.$$.fragment,n),y($o.$$.fragment,n),y(mn.$$.fragment,n),y(yo.$$.fragment,n),y(Do.$$.fragment,n),y(Eo.$$.fragment,n),y(qo.$$.fragment,n),y(zo.$$.fragment,n),y(fn.$$.fragment,n),y(jo.$$.fragment,n),y(Mo.$$.fragment,n),y(Ao.$$.fragment,n),y(gn.$$.fragment,n),y(_n.$$.fragment,n),y(Bo.$$.fragment,n),y(So.$$.fragment,n),y(Io.$$.fragment,n),y(Oo.$$.fragment,n),y(Qo.$$.fragment,n),y(Tn.$$.fragment,n),y(wn.$$.fragment,n),y(vn.$$.fragment,n),y(Uo.$$.fragment,n),y(Go.$$.fragment,n),y(Yo.$$.fragment,n),y(yn.$$.fragment,n),y(Dn.$$.fragment,n),y(En.$$.fragment,n),y(Fn.$$.fragment,n),y(qn.$$.fragment,n),y(Zo.$$.fragment,n),y(es.$$.fragment,n),y(as.$$.fragment,n),y(zn.$$.fragment,n),y(jn.$$.fragment,n),y(Mn.$$.fragment,n),y(rs.$$.fragment,n),y(is.$$.fragment,n),y(ms.$$.fragment,n),y(Pn.$$.fragment,n),y(Ln.$$.fragment,n),y(Rn.$$.fragment,n),y(hs.$$.fragment,n),y(fs.$$.fragment,n),y(Bn.$$.fragment,n),y(ks.$$.fragment,n),y(Sn.$$.fragment,n),y(In.$$.fragment,n),y(Ts.$$.fragment,n),y(ws.$$.fragment,n),y(vs.$$.fragment,n),y(ys.$$.fragment,n),y(Ds.$$.fragment,n),y(Wn.$$.fragment,n),y(xs.$$.fragment,n),y(Hn.$$.fragment,n),y(Qn.$$.fragment,n),y(Un.$$.fragment,n),y(zs.$$.fragment,n),y(js.$$.fragment,n),y(Kn.$$.fragment,n),y(Rs.$$.fragment,n),y(Vn.$$.fragment,n),y(Jn.$$.fragment,n),y(Xn.$$.fragment,n),y(As.$$.fragment,n),y(Bs.$$.fragment,n),y(Zn.$$.fragment,n),y(Ws.$$.fragment,n),y(eo.$$.fragment,n),y(to.$$.fragment,n),y(no.$$.fragment,n),y(Hs.$$.fragment,n),y(Qs.$$.fragment,n),y(so.$$.fragment,n),y(Js.$$.fragment,n),y(ao.$$.fragment,n),y(ro.$$.fragment,n),y(io.$$.fragment,n),nl=!0)},o(n){D(d.$$.fragment,n),D(ee.$$.fragment,n),D(L.$$.fragment,n),D(ve.$$.fragment,n),D(bo.$$.fragment,n),D(ko.$$.fragment,n),D(To.$$.fragment,n),D(vo.$$.fragment,n),D($o.$$.fragment,n),D(mn.$$.fragment,n),D(yo.$$.fragment,n),D(Do.$$.fragment,n),D(Eo.$$.fragment,n),D(qo.$$.fragment,n),D(zo.$$.fragment,n),D(fn.$$.fragment,n),D(jo.$$.fragment,n),D(Mo.$$.fragment,n),D(Ao.$$.fragment,n),D(gn.$$.fragment,n),D(_n.$$.fragment,n),D(Bo.$$.fragment,n),D(So.$$.fragment,n),D(Io.$$.fragment,n),D(Oo.$$.fragment,n),D(Qo.$$.fragment,n),D(Tn.$$.fragment,n),D(wn.$$.fragment,n),D(vn.$$.fragment,n),D(Uo.$$.fragment,n),D(Go.$$.fragment,n),D(Yo.$$.fragment,n),D(yn.$$.fragment,n),D(Dn.$$.fragment,n),D(En.$$.fragment,n),D(Fn.$$.fragment,n),D(qn.$$.fragment,n),D(Zo.$$.fragment,n),D(es.$$.fragment,n),D(as.$$.fragment,n),D(zn.$$.fragment,n),D(jn.$$.fragment,n),D(Mn.$$.fragment,n),D(rs.$$.fragment,n),D(is.$$.fragment,n),D(ms.$$.fragment,n),D(Pn.$$.fragment,n),D(Ln.$$.fragment,n),D(Rn.$$.fragment,n),D(hs.$$.fragment,n),D(fs.$$.fragment,n),D(Bn.$$.fragment,n),D(ks.$$.fragment,n),D(Sn.$$.fragment,n),D(In.$$.fragment,n),D(Ts.$$.fragment,n),D(ws.$$.fragment,n),D(vs.$$.fragment,n),D(ys.$$.fragment,n),D(Ds.$$.fragment,n),D(Wn.$$.fragment,n),D(xs.$$.fragment,n),D(Hn.$$.fragment,n),D(Qn.$$.fragment,n),D(Un.$$.fragment,n),D(zs.$$.fragment,n),D(js.$$.fragment,n),D(Kn.$$.fragment,n),D(Rs.$$.fragment,n),D(Vn.$$.fragment,n),D(Jn.$$.fragment,n),D(Xn.$$.fragment,n),D(As.$$.fragment,n),D(Bs.$$.fragment,n),D(Zn.$$.fragment,n),D(Ws.$$.fragment,n),D(eo.$$.fragment,n),D(to.$$.fragment,n),D(no.$$.fragment,n),D(Hs.$$.fragment,n),D(Qs.$$.fragment,n),D(so.$$.fragment,n),D(Js.$$.fragment,n),D(ao.$$.fragment,n),D(ro.$$.fragment,n),D(io.$$.fragment,n),nl=!1},d(n){t(l),n&&t(g),n&&t(c),E(d),n&&t(X),n&&t(z),E(ee),n&&t(le),n&&t(W),n&&t(C),n&&t(oe),n&&t(de),n&&t(se),n&&t(ce),n&&t(ae),n&&t(O),n&&t(K),n&&t(R),n&&t(pe),E(L),n&&t(N),n&&t(re),E(ve),n&&t(qi),n&&t(xt),E(bo),n&&t(xi),n&&t(Me),E(ko),E(To),E(vo),E($o),E(mn),E(yo),n&&t(zi),n&&t(Mt),E(Do),n&&t(ji),n&&t(Ye),E(Eo),E(qo),E(zo),E(fn),n&&t(Mi),n&&t(Pt),E(jo),n&&t(Ci),n&&t(Ze),E(Mo),E(Ao),E(gn),E(_n),n&&t(Pi),n&&t(Rt),E(Bo),n&&t(Li),n&&t(At),E(So),n&&t(Ri),n&&t(Bt),E(Io),n&&t(Ai),n&&t(et),E(Oo),E(Qo),E(Tn),E(wn),E(vn),n&&t(Bi),n&&t(Ot),E(Uo),n&&t(Si),n&&t(Ae),E(Go),E(Yo),E(yn),E(Dn),E(En),E(Fn),E(qn),n&&t(Ii),n&&t(Wt),E(Zo),n&&t(Oi),n&&t(Be),E(es),E(as),E(zn),E(jn),E(Mn),n&&t(Ni),n&&t(Qt),E(rs),n&&t(Wi),n&&t(Se),E(is),E(ms),E(Pn),E(Ln),E(Rn),n&&t(Hi),n&&t(Kt),E(hs),n&&t(Qi),n&&t(Ie),E(fs),E(Bn),E(ks),E(Sn),E(In),n&&t(Ui),n&&t(Jt),E(Ts),n&&t(Gi),n&&t(ct),E(ws),E(vs),n&&t(Ki),n&&t(Xt),E(ys),n&&t(Vi),n&&t(Oe),E(Ds),E(Wn),E(xs),E(Hn),E(Qn),E(Un),n&&t(Ji),n&&t(en),E(zs),n&&t(Xi),n&&t(Ce),E(js),E(Kn),E(Rs),E(Vn),E(Jn),E(Xn),n&&t(Yi),n&&t(nn),E(As),n&&t(Zi),n&&t(Pe),E(Bs),E(Zn),E(Ws),E(eo),E(to),E(no),n&&t(el),n&&t(sn),E(Hs),n&&t(tl),n&&t(Le),E(Qs),E(so),E(Js),E(ao),E(ro),E(io)}}}const z_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function j_(F){return Qg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B_ extends Og{constructor(l){super();Ng(this,l,j_,x_,Wg,{})}}export{B_ as default,z_ as metadata};
