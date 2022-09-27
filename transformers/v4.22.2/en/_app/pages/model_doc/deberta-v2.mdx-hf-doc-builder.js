import{S as ab,i as rb,s as ib,e as a,k as p,w,t as n,M as lb,c as r,d as t,m as h,a as i,x as T,h as s,b as u,G as e,g as _,y,q as $,o as D,B as E,v as db,L as Pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as nt}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function cb(V){let l,g,c,m,v;return m=new Be({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function pb(V){let l,g,c,m,v;return m=new Be({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function hb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function fb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function mb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),m=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function ub(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function gb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
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
<span class="hljs-string">&#x27;enberry&#x27;</span>`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function _b(V){let l,g;return l=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">11.85</span>`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function bb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function kb(V){let l,g,c,m,v;return m=new Be({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function vb(V){let l,g;return l=new Be({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaV2ForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta-v2", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta-v2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function wb(V){let l,g,c,m,v;return m=new Be({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Tb(V){let l,g;return l=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function yb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function $b(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Db(V){let l,g;return l=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.61</span>`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Eb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function Fb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;was Jim Henson? Jim Henson was&#x27;</span>`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Vb(V){let l,g;return l=new Be({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.47</span>`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function xb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function qb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function zb(V){let l,g,c,m,v,d,f,q,ke,pe,A,ne,oe,F,ve,U,we,he,I,Te,ie,G,ye,fe,N,$e,me,W,De,ue,te,j,P,le,J,Ee,ge,L,Fe,de,B,Ve,O,xe,_e,H,qe,be,C,se,K,ze,ae,M,je,R,Me,ce;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),d=p(),f=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),we=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Te=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),ye=n("fit()"),fe=n(" and "),N=a("code"),$e=n("predict()"),me=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),De=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),Ee=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),Fe=n("model(input_ids)"),de=p(),B=a("li"),Ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),xe=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),be=p(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=p(),M=a("p"),je=n(`Note that when creating models and layers with
`),R=a("a"),Me=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){l=r(k,"P",{});var x=i(l);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);m=s(We,"transformers"),We.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),d=h(k),f=r(k,"UL",{});var re=i(f);q=r(re,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=h(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=h(k),F=r(k,"P",{});var z=i(F);ve=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);we=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);Te=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);ye=s(Ae,"fit()"),Ae.forEach(t),fe=s(z," and "),N=r(z,"CODE",{});var Se=i(N);$e=s(Se,"predict()"),Se.forEach(t),me=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);De=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);Ee=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);Fe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=h(S),B=r(S,"LI",{});var Y=i(B);Ve=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);xe=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);qe=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=h(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);ze=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=h(k),M=r(k,"P",{});var ee=i(M);je=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Me=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,l,x),e(l,g),e(l,c),e(c,m),e(l,v),_(k,d,x),_(k,f,x),e(f,q),e(q,ke),e(f,pe),e(f,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ve),e(F,U),e(U,we),e(F,he),e(F,I),e(I,Te),e(F,ie),e(F,G),e(G,ye),e(F,fe),e(F,N),e(N,$e),e(F,me),e(F,W),e(W,De),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,Ee),e(P,ge),e(P,L),e(L,Fe),e(j,de),e(j,B),e(B,Ve),e(B,O),e(O,xe),e(B,_e),e(B,H),e(H,qe),e(j,be),e(j,C),e(C,se),e(C,K),e(K,ze),_(k,ae,x),_(k,M,x),e(M,je),e(M,R),e(R,Me),e(M,ce)},d(k){k&&t(l),k&&t(d),k&&t(f),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function jb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function Mb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Cb(V){let l,g,c,m,v,d,f,q,ke,pe,A,ne,oe,F,ve,U,we,he,I,Te,ie,G,ye,fe,N,$e,me,W,De,ue,te,j,P,le,J,Ee,ge,L,Fe,de,B,Ve,O,xe,_e,H,qe,be,C,se,K,ze,ae,M,je,R,Me,ce;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),d=p(),f=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),we=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Te=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),ye=n("fit()"),fe=n(" and "),N=a("code"),$e=n("predict()"),me=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),De=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),Ee=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),Fe=n("model(input_ids)"),de=p(),B=a("li"),Ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),xe=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),be=p(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=p(),M=a("p"),je=n(`Note that when creating models and layers with
`),R=a("a"),Me=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){l=r(k,"P",{});var x=i(l);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);m=s(We,"transformers"),We.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),d=h(k),f=r(k,"UL",{});var re=i(f);q=r(re,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=h(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=h(k),F=r(k,"P",{});var z=i(F);ve=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);we=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);Te=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);ye=s(Ae,"fit()"),Ae.forEach(t),fe=s(z," and "),N=r(z,"CODE",{});var Se=i(N);$e=s(Se,"predict()"),Se.forEach(t),me=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);De=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);Ee=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);Fe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=h(S),B=r(S,"LI",{});var Y=i(B);Ve=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);xe=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);qe=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=h(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);ze=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=h(k),M=r(k,"P",{});var ee=i(M);je=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Me=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,l,x),e(l,g),e(l,c),e(c,m),e(l,v),_(k,d,x),_(k,f,x),e(f,q),e(q,ke),e(f,pe),e(f,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ve),e(F,U),e(U,we),e(F,he),e(F,I),e(I,Te),e(F,ie),e(F,G),e(G,ye),e(F,fe),e(F,N),e(N,$e),e(F,me),e(F,W),e(W,De),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,Ee),e(P,ge),e(P,L),e(L,Fe),e(j,de),e(j,B),e(B,Ve),e(B,O),e(O,xe),e(B,_e),e(B,H),e(H,qe),e(j,be),e(j,C),e(C,se),e(C,K),e(K,ze),_(k,ae,x),_(k,M,x),e(M,je),e(M,R),e(R,Me),e(M,ce)},d(k){k&&t(l),k&&t(d),k&&t(f),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function Pb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function Bb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Rb(V){let l,g;return l=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Ab(V){let l,g,c,m,v,d,f,q,ke,pe,A,ne,oe,F,ve,U,we,he,I,Te,ie,G,ye,fe,N,$e,me,W,De,ue,te,j,P,le,J,Ee,ge,L,Fe,de,B,Ve,O,xe,_e,H,qe,be,C,se,K,ze,ae,M,je,R,Me,ce;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),d=p(),f=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),we=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Te=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),ye=n("fit()"),fe=n(" and "),N=a("code"),$e=n("predict()"),me=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),De=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),Ee=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),Fe=n("model(input_ids)"),de=p(),B=a("li"),Ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),xe=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),be=p(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=p(),M=a("p"),je=n(`Note that when creating models and layers with
`),R=a("a"),Me=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){l=r(k,"P",{});var x=i(l);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);m=s(We,"transformers"),We.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),d=h(k),f=r(k,"UL",{});var re=i(f);q=r(re,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=h(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=h(k),F=r(k,"P",{});var z=i(F);ve=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);we=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);Te=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);ye=s(Ae,"fit()"),Ae.forEach(t),fe=s(z," and "),N=r(z,"CODE",{});var Se=i(N);$e=s(Se,"predict()"),Se.forEach(t),me=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);De=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);Ee=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);Fe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=h(S),B=r(S,"LI",{});var Y=i(B);Ve=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);xe=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);qe=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=h(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);ze=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=h(k),M=r(k,"P",{});var ee=i(M);je=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Me=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,l,x),e(l,g),e(l,c),e(c,m),e(l,v),_(k,d,x),_(k,f,x),e(f,q),e(q,ke),e(f,pe),e(f,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ve),e(F,U),e(U,we),e(F,he),e(F,I),e(I,Te),e(F,ie),e(F,G),e(G,ye),e(F,fe),e(F,N),e(N,$e),e(F,me),e(F,W),e(W,De),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,Ee),e(P,ge),e(P,L),e(L,Fe),e(j,de),e(j,B),e(B,Ve),e(B,O),e(O,xe),e(B,_e),e(B,H),e(H,qe),e(j,be),e(j,C),e(C,se),e(C,K),e(K,ze),_(k,ae,x),_(k,M,x),e(M,je),e(M,R),e(R,Me),e(M,ce)},d(k){k&&t(l),k&&t(d),k&&t(f),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function Lb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function Ib(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Sb(V){let l,g;return l=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Ob(V){let l,g,c,m,v,d,f,q,ke,pe,A,ne,oe,F,ve,U,we,he,I,Te,ie,G,ye,fe,N,$e,me,W,De,ue,te,j,P,le,J,Ee,ge,L,Fe,de,B,Ve,O,xe,_e,H,qe,be,C,se,K,ze,ae,M,je,R,Me,ce;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),d=p(),f=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),we=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Te=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),ye=n("fit()"),fe=n(" and "),N=a("code"),$e=n("predict()"),me=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),De=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),Ee=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),Fe=n("model(input_ids)"),de=p(),B=a("li"),Ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),xe=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),be=p(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=p(),M=a("p"),je=n(`Note that when creating models and layers with
`),R=a("a"),Me=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){l=r(k,"P",{});var x=i(l);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);m=s(We,"transformers"),We.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),d=h(k),f=r(k,"UL",{});var re=i(f);q=r(re,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=h(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=h(k),F=r(k,"P",{});var z=i(F);ve=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);we=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);Te=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);ye=s(Ae,"fit()"),Ae.forEach(t),fe=s(z," and "),N=r(z,"CODE",{});var Se=i(N);$e=s(Se,"predict()"),Se.forEach(t),me=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);De=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);Ee=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);Fe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=h(S),B=r(S,"LI",{});var Y=i(B);Ve=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);xe=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);qe=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=h(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);ze=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=h(k),M=r(k,"P",{});var ee=i(M);je=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Me=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,l,x),e(l,g),e(l,c),e(c,m),e(l,v),_(k,d,x),_(k,f,x),e(f,q),e(q,ke),e(f,pe),e(f,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ve),e(F,U),e(U,we),e(F,he),e(F,I),e(I,Te),e(F,ie),e(F,G),e(G,ye),e(F,fe),e(F,N),e(N,$e),e(F,me),e(F,W),e(W,De),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,Ee),e(P,ge),e(P,L),e(L,Fe),e(j,de),e(j,B),e(B,Ve),e(B,O),e(O,xe),e(B,_e),e(B,H),e(H,qe),e(j,be),e(j,C),e(C,se),e(C,K),e(K,ze),_(k,ae,x),_(k,M,x),e(M,je),e(M,R),e(R,Me),e(M,ce)},d(k){k&&t(l),k&&t(d),k&&t(f),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function Nb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function Wb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Hb(V){let l,g;return l=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Ub(V){let l,g,c,m,v,d,f,q,ke,pe,A,ne,oe,F,ve,U,we,he,I,Te,ie,G,ye,fe,N,$e,me,W,De,ue,te,j,P,le,J,Ee,ge,L,Fe,de,B,Ve,O,xe,_e,H,qe,be,C,se,K,ze,ae,M,je,R,Me,ce;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),v=n(" accept two formats as input:"),d=p(),f=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),A=a("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),we=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Te=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),ye=n("fit()"),fe=n(" and "),N=a("code"),$e=n("predict()"),me=n(`, such as when creating your own layers or models with
the Keras `),W=a("code"),De=n("Functional"),ue=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),P=a("li"),le=n("a single Tensor with "),J=a("code"),Ee=n("input_ids"),ge=n(" only and nothing else: "),L=a("code"),Fe=n("model(input_ids)"),de=p(),B=a("li"),Ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),xe=n("model([input_ids, attention_mask])"),_e=n(" or "),H=a("code"),qe=n("model([input_ids, attention_mask, token_type_ids])"),be=p(),C=a("li"),se=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ae=p(),M=a("p"),je=n(`Note that when creating models and layers with
`),R=a("a"),Me=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){l=r(k,"P",{});var x=i(l);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var We=i(c);m=s(We,"transformers"),We.forEach(t),v=s(x," accept two formats as input:"),x.forEach(t),d=h(k),f=r(k,"UL",{});var re=i(f);q=r(re,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=h(re),A=r(re,"LI",{});var Ie=i(A);ne=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),re.forEach(t),oe=h(k),F=r(k,"P",{});var z=i(F);ve=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var He=i(U);we=s(He,"model.fit()"),He.forEach(t),he=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Ue=i(I);Te=s(Ue,"model.fit()"),Ue.forEach(t),ie=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(z,"CODE",{});var Ae=i(G);ye=s(Ae,"fit()"),Ae.forEach(t),fe=s(z," and "),N=r(z,"CODE",{});var Se=i(N);$e=s(Se,"predict()"),Se.forEach(t),me=s(z,`, such as when creating your own layers or models with
the Keras `),W=r(z,"CODE",{});var Ke=i(W);De=s(Ke,"Functional"),Ke.forEach(t),ue=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(k),j=r(k,"UL",{});var S=i(j);P=r(S,"LI",{});var X=i(P);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Le=i(J);Ee=s(Le,"input_ids"),Le.forEach(t),ge=s(X," only and nothing else: "),L=r(X,"CODE",{});var Oe=i(L);Fe=s(Oe,"model(input_ids)"),Oe.forEach(t),X.forEach(t),de=h(S),B=r(S,"LI",{});var Y=i(B);Ve=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(Y,"CODE",{});var Qe=i(O);xe=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),_e=s(Y," or "),H=r(Y,"CODE",{});var Ne=i(H);qe=s(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Y.forEach(t),be=h(S),C=r(S,"LI",{});var Z=i(C);se=s(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(Z,"CODE",{});var Ge=i(K);ze=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Z.forEach(t),S.forEach(t),ae=h(k),M=r(k,"P",{});var ee=i(M);je=s(ee,`Note that when creating models and layers with
`),R=r(ee,"A",{href:!0,rel:!0});var Je=i(R);Me=s(Je,"subclassing"),Je.forEach(t),ce=s(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(R,"rel","nofollow")},m(k,x){_(k,l,x),e(l,g),e(l,c),e(c,m),e(l,v),_(k,d,x),_(k,f,x),e(f,q),e(q,ke),e(f,pe),e(f,A),e(A,ne),_(k,oe,x),_(k,F,x),e(F,ve),e(F,U),e(U,we),e(F,he),e(F,I),e(I,Te),e(F,ie),e(F,G),e(G,ye),e(F,fe),e(F,N),e(N,$e),e(F,me),e(F,W),e(W,De),e(F,ue),_(k,te,x),_(k,j,x),e(j,P),e(P,le),e(P,J),e(J,Ee),e(P,ge),e(P,L),e(L,Fe),e(j,de),e(j,B),e(B,Ve),e(B,O),e(O,xe),e(B,_e),e(B,H),e(H,qe),e(j,be),e(j,C),e(C,se),e(C,K),e(K,ze),_(k,ae,x),_(k,M,x),e(M,je),e(M,R),e(R,Me),e(M,ce)},d(k){k&&t(l),k&&t(d),k&&t(f),k&&t(oe),k&&t(F),k&&t(te),k&&t(j),k&&t(ae),k&&t(M)}}}function Kb(V){let l,g,c,m,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);m=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,m),e(l,v)},d(d){d&&t(l)}}}function Qb(V){let l,g,c,m,v;return m=new Be({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),w(m.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=h(d),T(m.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),y(m,d,f),v=!0},p:Pe,i(d){v||($(m.$$.fragment,d),v=!0)},o(d){D(m.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(m,d)}}}function Gb(V){let l,g;return l=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){y(l,c,m),g=!0},p:Pe,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Jb(V){let l,g,c,m,v,d,f,q,ke,pe,A,ne,oe,F,ve,U,we,he,I,Te,ie,G,ye,fe,N,$e,me,W,De,ue,te,j,P,le,J,Ee,ge,L,Fe,de,B,Ve,O,xe,_e,H,qe,be,C,se,K,ze,ae,M,je,R,Me,ce,k,x,We,re,Re,Ie,z,He,Ue,Ae,Se,Ke,S,X,Le,Oe,Y,Qe,Ne,Z,Ge,ee,Je,ac,es,rc,ic,ts,lc,dc,Ll,eo,Ao,Nr,os,cc,Wr,pc,Il,Ct,ns,hc,to,fc,er,mc,uc,ss,gc,_c,bc,oo,kc,tr,vc,wc,or,Tc,yc,Sl,no,Lo,Hr,as,$c,Ur,Dc,Ol,Ze,rs,Ec,is,Fc,ls,Vc,xc,qc,At,ds,zc,Kr,jc,Mc,cs,Qr,Cc,Pc,Gr,Bc,Rc,Io,ps,Ac,so,Lc,Jr,Ic,Sc,Xr,Oc,Nc,Wc,yt,hs,Hc,Yr,Uc,Kc,So,Qc,ao,Gc,Zr,Jc,Xc,ei,Yc,Zc,ep,nr,fs,Nl,ro,Oo,ti,ms,tp,oi,op,Wl,bt,us,np,gs,sp,_s,ap,rp,ip,Lt,bs,lp,ni,dp,cp,ks,si,pp,hp,ai,fp,mp,$t,vs,up,ri,gp,_p,No,bp,io,kp,ii,vp,wp,li,Tp,yp,Hl,lo,Wo,di,ws,$p,ci,Dp,Ul,kt,Ts,Ep,ys,Fp,$s,Vp,xp,qp,Ds,zp,Es,jp,Mp,Cp,Dt,Fs,Pp,co,Bp,sr,Rp,Ap,pi,Lp,Ip,Sp,Ho,Op,Uo,Kl,po,Ko,hi,Vs,Np,fi,Wp,Ql,Pt,xs,Hp,mi,Up,Kp,Et,qs,Qp,ui,Gp,Jp,gi,Xp,Yp,Qo,Gl,ho,Go,_i,zs,Zp,bi,eh,Jl,vt,js,th,fo,oh,ki,nh,sh,Ms,ah,rh,ih,Cs,lh,Ps,dh,ch,ph,ct,Bs,hh,mo,fh,ar,mh,uh,vi,gh,_h,bh,Jo,kh,Xo,vh,Yo,Xl,uo,Zo,wi,Rs,wh,Ti,Th,Yl,st,As,yh,yi,$h,Dh,Ls,Eh,Is,Fh,Vh,xh,Ss,qh,Os,zh,jh,Mh,Xe,Ns,Ch,go,Ph,rr,Bh,Rh,$i,Ah,Lh,Ih,en,Sh,tn,Oh,on,Nh,nn,Wh,sn,Zl,_o,an,Di,Ws,Hh,Ei,Uh,ed,at,Hs,Kh,Fi,Qh,Gh,Us,Jh,Ks,Xh,Yh,Zh,Qs,ef,Gs,tf,of,nf,pt,Js,sf,bo,af,ir,rf,lf,Vi,df,cf,pf,rn,hf,ln,ff,dn,td,ko,cn,xi,Xs,mf,qi,uf,od,rt,Ys,gf,vo,_f,zi,bf,kf,ji,vf,wf,Tf,Zs,yf,ea,$f,Df,Ef,ta,Ff,oa,Vf,xf,qf,ht,na,zf,wo,jf,lr,Mf,Cf,Mi,Pf,Bf,Rf,pn,Af,hn,Lf,fn,nd,To,mn,Ci,sa,If,Pi,Sf,sd,it,aa,Of,Bi,Nf,Wf,ra,Hf,ia,Uf,Kf,Qf,la,Gf,da,Jf,Xf,Yf,Ft,ca,Zf,yo,em,dr,tm,om,Ri,nm,sm,am,un,rm,gn,ad,$o,_n,Ai,pa,im,Li,lm,rd,lt,ha,dm,fa,cm,ma,pm,hm,fm,ua,mm,ga,um,gm,_m,bn,bm,Vt,_a,km,Do,vm,cr,wm,Tm,Ii,ym,$m,Dm,kn,Em,vn,id,Eo,wn,Si,ba,Fm,Oi,Vm,ld,Bt,ka,xm,Ni,qm,zm,xt,va,jm,Wi,Mm,Cm,wa,Pm,Hi,Bm,Rm,Am,wt,Lm,Ui,Im,Sm,Ki,Om,Nm,Qi,Wm,Hm,Gi,Um,Km,dd,Fo,Tn,Ji,Ta,Qm,Xi,Gm,cd,dt,ya,Jm,Vo,Xm,Yi,Ym,Zm,$a,eu,tu,ou,Da,nu,Ea,su,au,ru,yn,iu,ft,Fa,lu,xo,du,pr,cu,pu,Zi,hu,fu,mu,$n,uu,Dn,gu,En,pd,qo,Fn,el,Va,_u,tl,bu,hd,et,xa,ku,ol,vu,wu,qa,Tu,za,yu,$u,Du,ja,Eu,Ma,Fu,Vu,xu,Vn,qu,mt,Ca,zu,zo,ju,hr,Mu,Cu,nl,Pu,Bu,Ru,xn,Au,qn,Lu,zn,fd,jo,jn,sl,Pa,Iu,al,Su,md,tt,Ba,Ou,rl,Nu,Wu,Ra,Hu,Aa,Uu,Ku,Qu,La,Gu,Ia,Ju,Xu,Yu,Mn,Zu,ut,Sa,eg,Mo,tg,fr,og,ng,il,sg,ag,rg,Cn,ig,Pn,lg,Bn,ud,Co,Rn,ll,Oa,dg,dl,cg,gd,ot,Na,pg,Po,hg,cl,fg,mg,pl,ug,gg,_g,Wa,bg,Ha,kg,vg,wg,Ua,Tg,Ka,yg,$g,Dg,An,Eg,gt,Qa,Fg,Bo,Vg,mr,xg,qg,hl,zg,jg,Mg,Ln,Cg,In,Pg,Sn,_d;return d=new Ye({}),F=new Ye({}),os=new Ye({}),ns=new Q({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L42"}}),as=new Ye({}),rs=new Q({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L56"}}),ds=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L182",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new Q({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L206",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L232",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),So=new Ce({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[cb]},$$scope:{ctx:V}}}),fs=new Q({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L265"}}),ms=new Ye({}),us=new Q({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L63"}}),bs=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L153",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L203",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new Ce({props:{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[pb]},$$scope:{ctx:V}}}),ws=new Ye({}),Ts=new Q({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1029"}}),Fs=new Q({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1053",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new nt({props:{$$slots:{default:[hb]},$$scope:{ctx:V}}}),Uo=new Ce({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[fb]},$$scope:{ctx:V}}}),Vs=new Ye({}),xs=new Q({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L933"}}),qs=new Q({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/torch/nn/modules/module.py#L190"}}),Qo=new nt({props:{$$slots:{default:[mb]},$$scope:{ctx:V}}}),zs=new Ye({}),js=new Q({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1142"}}),Bs=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new nt({props:{$$slots:{default:[ub]},$$scope:{ctx:V}}}),Xo=new Ce({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[gb]},$$scope:{ctx:V}}}),Yo=new Ce({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[_b]},$$scope:{ctx:V}}}),Rs=new Ye({}),As=new Q({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1281"}}),Ns=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1306",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new nt({props:{$$slots:{default:[bb]},$$scope:{ctx:V}}}),tn=new Ce({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[kb]},$$scope:{ctx:V}}}),on=new Ce({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[vb]},$$scope:{ctx:V}}}),nn=new Ce({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[wb]},$$scope:{ctx:V}}}),sn=new Ce({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[Tb]},$$scope:{ctx:V}}}),Ws=new Ye({}),Hs=new Q({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1403"}}),Js=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1417",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new nt({props:{$$slots:{default:[yb]},$$scope:{ctx:V}}}),ln=new Ce({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[$b]},$$scope:{ctx:V}}}),dn=new Ce({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[Db]},$$scope:{ctx:V}}}),Xs=new Ye({}),Ys=new Q({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1482"}}),na=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1495",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new nt({props:{$$slots:{default:[Eb]},$$scope:{ctx:V}}}),hn=new Ce({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[Fb]},$$scope:{ctx:V}}}),fn=new Ce({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[Vb]},$$scope:{ctx:V}}}),sa=new Ye({}),aa=new Q({props:{name:"class transformers.DebertaV2ForMultipleChoice",anchor:"transformers.DebertaV2ForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1586"}}),ca=new Q({props:{name:"forward",anchor:"transformers.DebertaV2ForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1610",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),un=new nt({props:{$$slots:{default:[xb]},$$scope:{ctx:V}}}),gn=new Ce({props:{anchor:"transformers.DebertaV2ForMultipleChoice.forward.example",$$slots:{default:[qb]},$$scope:{ctx:V}}}),pa=new Ye({}),ha=new Q({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1179"}}),bn=new nt({props:{$$slots:{default:[zb]},$$scope:{ctx:V}}}),_a=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1185",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new nt({props:{$$slots:{default:[jb]},$$scope:{ctx:V}}}),vn=new Ce({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[Mb]},$$scope:{ctx:V}}}),ba=new Ye({}),ka=new Q({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1078"}}),va=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/keras/engine/training.py#L559",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Ta=new Ye({}),ya=new Q({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1228"}}),yn=new nt({props:{$$slots:{default:[Cb]},$$scope:{ctx:V}}}),Fa=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1244",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new nt({props:{$$slots:{default:[Pb]},$$scope:{ctx:V}}}),Dn=new Ce({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[Bb]},$$scope:{ctx:V}}}),En=new Ce({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[Rb]},$$scope:{ctx:V}}}),Va=new Ye({}),xa=new Q({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1312"}}),Vn=new nt({props:{$$slots:{default:[Ab]},$$scope:{ctx:V}}}),Ca=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1330",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xn=new nt({props:{$$slots:{default:[Lb]},$$scope:{ctx:V}}}),qn=new Ce({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[Ib]},$$scope:{ctx:V}}}),zn=new Ce({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[Sb]},$$scope:{ctx:V}}}),Pa=new Ye({}),Ba=new Q({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1401"}}),Mn=new nt({props:{$$slots:{default:[Ob]},$$scope:{ctx:V}}}),Sa=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1413",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cn=new nt({props:{$$slots:{default:[Nb]},$$scope:{ctx:V}}}),Pn=new Ce({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[Wb]},$$scope:{ctx:V}}}),Bn=new Ce({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[Hb]},$$scope:{ctx:V}}}),Oa=new Ye({}),Na=new Q({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1480"}}),An=new nt({props:{$$slots:{default:[Ub]},$$scope:{ctx:V}}}),Qa=new Q({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1491",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new nt({props:{$$slots:{default:[Kb]},$$scope:{ctx:V}}}),In=new Ce({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[Qb]},$$scope:{ctx:V}}}),Sn=new Ce({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[Gb]},$$scope:{ctx:V}}}),{c(){l=a("meta"),g=p(),c=a("h1"),m=a("a"),v=a("span"),w(d.$$.fragment),f=p(),q=a("span"),ke=n("DeBERTa-v2"),pe=p(),A=a("h2"),ne=a("a"),oe=a("span"),w(F.$$.fragment),ve=p(),U=a("span"),we=n("Overview"),he=p(),I=a("p"),Te=n("The DeBERTa model was proposed in "),ie=a("a"),G=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ye=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),fe=p(),N=a("p"),$e=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),me=p(),W=a("p"),De=n("The abstract from the paper is the following:"),ue=p(),te=a("p"),j=a("em"),P=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),le=a("a"),J=n("https://github.com/microsoft/DeBERTa"),Ee=n("."),ge=p(),L=a("p"),Fe=n("The following information is visible directly on the "),de=a("a"),B=n(`original implementation
repository`),Ve=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),O=a("a"),xe=n("blog"),_e=p(),H=a("p"),qe=n("New in v2:"),be=p(),C=a("ul"),se=a("li"),K=a("strong"),ze=n("Vocabulary"),ae=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),M=a("a"),je=n("sentencepiece-based"),R=n(" tokenizer."),Me=p(),ce=a("li"),k=a("strong"),x=n("nGiE(nGram Induced Input Encoding)"),We=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),re=p(),Re=a("li"),Ie=a("strong"),z=n("Sharing position projection matrix with content projection matrix in attention layer"),He=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Ue=p(),Ae=a("li"),Se=a("strong"),Ke=n("Apply bucket to encode relative positions"),S=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),X=p(),Le=a("li"),Oe=a("strong"),Y=n("900M model & 1.5B model"),Qe=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Ne=p(),Z=a("p"),Ge=n("This model was contributed by "),ee=a("a"),Je=n("DeBERTa"),ac=n(`. This model TF 2.0 implementation was
contributed by `),es=a("a"),rc=n("kamalkraj"),ic=n(". The original code can be found "),ts=a("a"),lc=n("here"),dc=n("."),Ll=p(),eo=a("h2"),Ao=a("a"),Nr=a("span"),w(os.$$.fragment),cc=p(),Wr=a("span"),pc=n("DebertaV2Config"),Il=p(),Ct=a("div"),w(ns.$$.fragment),hc=p(),to=a("p"),fc=n("This is the configuration class to store the configuration of a "),er=a("a"),mc=n("DebertaV2Model"),uc=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),ss=a("a"),gc=n("microsoft/deberta-v2-xlarge"),_c=n(" architecture."),bc=p(),oo=a("p"),kc=n("Configuration objects inherit from "),tr=a("a"),vc=n("PretrainedConfig"),wc=n(` and can be used to control the model outputs. Read the
documentation from `),or=a("a"),Tc=n("PretrainedConfig"),yc=n(" for more information."),Sl=p(),no=a("h2"),Lo=a("a"),Hr=a("span"),w(as.$$.fragment),$c=p(),Ur=a("span"),Dc=n("DebertaV2Tokenizer"),Ol=p(),Ze=a("div"),w(rs.$$.fragment),Ec=p(),is=a("p"),Fc=n("Constructs a DeBERTa-v2 tokenizer. Based on "),ls=a("a"),Vc=n("SentencePiece"),xc=n("."),qc=p(),At=a("div"),w(ds.$$.fragment),zc=p(),Kr=a("p"),jc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Mc=p(),cs=a("ul"),Qr=a("li"),Cc=n("single sequence: [CLS] X [SEP]"),Pc=p(),Gr=a("li"),Bc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Rc=p(),Io=a("div"),w(ps.$$.fragment),Ac=p(),so=a("p"),Lc=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jr=a("code"),Ic=n("prepare_for_model"),Sc=n(" or "),Xr=a("code"),Oc=n("encode_plus"),Nc=n(" methods."),Wc=p(),yt=a("div"),w(hs.$$.fragment),Hc=p(),Yr=a("p"),Uc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Kc=p(),w(So.$$.fragment),Qc=p(),ao=a("p"),Gc=n("If "),Zr=a("code"),Jc=n("token_ids_1"),Xc=n(" is "),ei=a("code"),Yc=n("None"),Zc=n(", this method only returns the first portion of the mask (0s)."),ep=p(),nr=a("div"),w(fs.$$.fragment),Nl=p(),ro=a("h2"),Oo=a("a"),ti=a("span"),w(ms.$$.fragment),tp=p(),oi=a("span"),op=n("DebertaV2TokenizerFast"),Wl=p(),bt=a("div"),w(us.$$.fragment),np=p(),gs=a("p"),sp=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),_s=a("a"),ap=n("SentencePiece"),rp=n("."),ip=p(),Lt=a("div"),w(bs.$$.fragment),lp=p(),ni=a("p"),dp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),cp=p(),ks=a("ul"),si=a("li"),pp=n("single sequence: [CLS] X [SEP]"),hp=p(),ai=a("li"),fp=n("pair of sequences: [CLS] A [SEP] B [SEP]"),mp=p(),$t=a("div"),w(vs.$$.fragment),up=p(),ri=a("p"),gp=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),_p=p(),w(No.$$.fragment),bp=p(),io=a("p"),kp=n("If "),ii=a("code"),vp=n("token_ids_1"),wp=n(" is "),li=a("code"),Tp=n("None"),yp=n(", this method only returns the first portion of the mask (0s)."),Hl=p(),lo=a("h2"),Wo=a("a"),di=a("span"),w(ws.$$.fragment),$p=p(),ci=a("span"),Dp=n("DebertaV2Model"),Ul=p(),kt=a("div"),w(Ts.$$.fragment),Ep=p(),ys=a("p"),Fp=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),$s=a("a"),Vp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qp=p(),Ds=a("p"),zp=n("This model is also a PyTorch "),Es=a("a"),jp=n("torch.nn.Module"),Mp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp=p(),Dt=a("div"),w(Fs.$$.fragment),Pp=p(),co=a("p"),Bp=n("The "),sr=a("a"),Rp=n("DebertaV2Model"),Ap=n(" forward method, overrides the "),pi=a("code"),Lp=n("__call__"),Ip=n(" special method."),Sp=p(),w(Ho.$$.fragment),Op=p(),w(Uo.$$.fragment),Kl=p(),po=a("h2"),Ko=a("a"),hi=a("span"),w(Vs.$$.fragment),Np=p(),fi=a("span"),Wp=n("DebertaV2PreTrainedModel"),Ql=p(),Pt=a("div"),w(xs.$$.fragment),Hp=p(),mi=a("p"),Up=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Kp=p(),Et=a("div"),w(qs.$$.fragment),Qp=p(),ui=a("p"),Gp=n("Defines the computation performed at every call."),Jp=p(),gi=a("p"),Xp=n("Should be overridden by all subclasses."),Yp=p(),w(Qo.$$.fragment),Gl=p(),ho=a("h2"),Go=a("a"),_i=a("span"),w(zs.$$.fragment),Zp=p(),bi=a("span"),eh=n("DebertaV2ForMaskedLM"),Jl=p(),vt=a("div"),w(js.$$.fragment),th=p(),fo=a("p"),oh=n("DeBERTa Model with a "),ki=a("code"),nh=n("language modeling"),sh=n(` head on top.
The DeBERTa model was proposed in `),Ms=a("a"),ah=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ih=p(),Cs=a("p"),lh=n("This model is also a PyTorch "),Ps=a("a"),dh=n("torch.nn.Module"),ch=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph=p(),ct=a("div"),w(Bs.$$.fragment),hh=p(),mo=a("p"),fh=n("The "),ar=a("a"),mh=n("DebertaV2ForMaskedLM"),uh=n(" forward method, overrides the "),vi=a("code"),gh=n("__call__"),_h=n(" special method."),bh=p(),w(Jo.$$.fragment),kh=p(),w(Xo.$$.fragment),vh=p(),w(Yo.$$.fragment),Xl=p(),uo=a("h2"),Zo=a("a"),wi=a("span"),w(Rs.$$.fragment),wh=p(),Ti=a("span"),Th=n("DebertaV2ForSequenceClassification"),Yl=p(),st=a("div"),w(As.$$.fragment),yh=p(),yi=a("p"),$h=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dh=p(),Ls=a("p"),Eh=n("The DeBERTa model was proposed in "),Is=a("a"),Fh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xh=p(),Ss=a("p"),qh=n("This model is also a PyTorch "),Os=a("a"),zh=n("torch.nn.Module"),jh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh=p(),Xe=a("div"),w(Ns.$$.fragment),Ch=p(),go=a("p"),Ph=n("The "),rr=a("a"),Bh=n("DebertaV2ForSequenceClassification"),Rh=n(" forward method, overrides the "),$i=a("code"),Ah=n("__call__"),Lh=n(" special method."),Ih=p(),w(en.$$.fragment),Sh=p(),w(tn.$$.fragment),Oh=p(),w(on.$$.fragment),Nh=p(),w(nn.$$.fragment),Wh=p(),w(sn.$$.fragment),Zl=p(),_o=a("h2"),an=a("a"),Di=a("span"),w(Ws.$$.fragment),Hh=p(),Ei=a("span"),Uh=n("DebertaV2ForTokenClassification"),ed=p(),at=a("div"),w(Hs.$$.fragment),Kh=p(),Fi=a("p"),Qh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Gh=p(),Us=a("p"),Jh=n("The DeBERTa model was proposed in "),Ks=a("a"),Xh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Yh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zh=p(),Qs=a("p"),ef=n("This model is also a PyTorch "),Gs=a("a"),tf=n("torch.nn.Module"),of=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nf=p(),pt=a("div"),w(Js.$$.fragment),sf=p(),bo=a("p"),af=n("The "),ir=a("a"),rf=n("DebertaV2ForTokenClassification"),lf=n(" forward method, overrides the "),Vi=a("code"),df=n("__call__"),cf=n(" special method."),pf=p(),w(rn.$$.fragment),hf=p(),w(ln.$$.fragment),ff=p(),w(dn.$$.fragment),td=p(),ko=a("h2"),cn=a("a"),xi=a("span"),w(Xs.$$.fragment),mf=p(),qi=a("span"),uf=n("DebertaV2ForQuestionAnswering"),od=p(),rt=a("div"),w(Ys.$$.fragment),gf=p(),vo=a("p"),_f=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zi=a("code"),bf=n("span start logits"),kf=n(" and "),ji=a("code"),vf=n("span end logits"),wf=n(")."),Tf=p(),Zs=a("p"),yf=n("The DeBERTa model was proposed in "),ea=a("a"),$f=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Df=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ef=p(),ta=a("p"),Ff=n("This model is also a PyTorch "),oa=a("a"),Vf=n("torch.nn.Module"),xf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=p(),ht=a("div"),w(na.$$.fragment),zf=p(),wo=a("p"),jf=n("The "),lr=a("a"),Mf=n("DebertaV2ForQuestionAnswering"),Cf=n(" forward method, overrides the "),Mi=a("code"),Pf=n("__call__"),Bf=n(" special method."),Rf=p(),w(pn.$$.fragment),Af=p(),w(hn.$$.fragment),Lf=p(),w(fn.$$.fragment),nd=p(),To=a("h2"),mn=a("a"),Ci=a("span"),w(sa.$$.fragment),If=p(),Pi=a("span"),Sf=n("DebertaV2ForMultipleChoice"),sd=p(),it=a("div"),w(aa.$$.fragment),Of=p(),Bi=a("p"),Nf=n(`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Wf=p(),ra=a("p"),Hf=n("The DeBERTa model was proposed in "),ia=a("a"),Uf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qf=p(),la=a("p"),Gf=n("This model is also a PyTorch "),da=a("a"),Jf=n("torch.nn.Module"),Xf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yf=p(),Ft=a("div"),w(ca.$$.fragment),Zf=p(),yo=a("p"),em=n("The "),dr=a("a"),tm=n("DebertaV2ForMultipleChoice"),om=n(" forward method, overrides the "),Ri=a("code"),nm=n("__call__"),sm=n(" special method."),am=p(),w(un.$$.fragment),rm=p(),w(gn.$$.fragment),ad=p(),$o=a("h2"),_n=a("a"),Ai=a("span"),w(pa.$$.fragment),im=p(),Li=a("span"),lm=n("TFDebertaV2Model"),rd=p(),lt=a("div"),w(ha.$$.fragment),dm=p(),fa=a("p"),cm=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ma=a("a"),pm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fm=p(),ua=a("p"),mm=n("This model is also a "),ga=a("a"),um=n("tf.keras.Model"),gm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_m=p(),w(bn.$$.fragment),bm=p(),Vt=a("div"),w(_a.$$.fragment),km=p(),Do=a("p"),vm=n("The "),cr=a("a"),wm=n("TFDebertaV2Model"),Tm=n(" forward method, overrides the "),Ii=a("code"),ym=n("__call__"),$m=n(" special method."),Dm=p(),w(kn.$$.fragment),Em=p(),w(vn.$$.fragment),id=p(),Eo=a("h2"),wn=a("a"),Si=a("span"),w(ba.$$.fragment),Fm=p(),Oi=a("span"),Vm=n("TFDebertaV2PreTrainedModel"),ld=p(),Bt=a("div"),w(ka.$$.fragment),xm=p(),Ni=a("p"),qm=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),zm=p(),xt=a("div"),w(va.$$.fragment),jm=p(),Wi=a("p"),Mm=n("Calls the model on new inputs and returns the outputs as tensors."),Cm=p(),wa=a("p"),Pm=n("In this case "),Hi=a("code"),Bm=n("call()"),Rm=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Am=p(),wt=a("p"),Lm=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Ui=a("code"),Im=n("tf.keras.Model"),Sm=n(`.
To call a model on an input, always use the `),Ki=a("code"),Om=n("__call__()"),Nm=n(` method,
i.e. `),Qi=a("code"),Wm=n("model(inputs)"),Hm=n(", which relies on the underlying "),Gi=a("code"),Um=n("call()"),Km=n(" method."),dd=p(),Fo=a("h2"),Tn=a("a"),Ji=a("span"),w(Ta.$$.fragment),Qm=p(),Xi=a("span"),Gm=n("TFDebertaV2ForMaskedLM"),cd=p(),dt=a("div"),w(ya.$$.fragment),Jm=p(),Vo=a("p"),Xm=n("DeBERTa Model with a "),Yi=a("code"),Ym=n("language modeling"),Zm=n(` head on top.
The DeBERTa model was proposed in `),$a=a("a"),eu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ou=p(),Da=a("p"),nu=n("This model is also a "),Ea=a("a"),su=n("tf.keras.Model"),au=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ru=p(),w(yn.$$.fragment),iu=p(),ft=a("div"),w(Fa.$$.fragment),lu=p(),xo=a("p"),du=n("The "),pr=a("a"),cu=n("TFDebertaV2ForMaskedLM"),pu=n(" forward method, overrides the "),Zi=a("code"),hu=n("__call__"),fu=n(" special method."),mu=p(),w($n.$$.fragment),uu=p(),w(Dn.$$.fragment),gu=p(),w(En.$$.fragment),pd=p(),qo=a("h2"),Fn=a("a"),el=a("span"),w(Va.$$.fragment),_u=p(),tl=a("span"),bu=n("TFDebertaV2ForSequenceClassification"),hd=p(),et=a("div"),w(xa.$$.fragment),ku=p(),ol=a("p"),vu=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wu=p(),qa=a("p"),Tu=n("The DeBERTa model was proposed in "),za=a("a"),yu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$u=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Du=p(),ja=a("p"),Eu=n("This model is also a "),Ma=a("a"),Fu=n("tf.keras.Model"),Vu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xu=p(),w(Vn.$$.fragment),qu=p(),mt=a("div"),w(Ca.$$.fragment),zu=p(),zo=a("p"),ju=n("The "),hr=a("a"),Mu=n("TFDebertaV2ForSequenceClassification"),Cu=n(" forward method, overrides the "),nl=a("code"),Pu=n("__call__"),Bu=n(" special method."),Ru=p(),w(xn.$$.fragment),Au=p(),w(qn.$$.fragment),Lu=p(),w(zn.$$.fragment),fd=p(),jo=a("h2"),jn=a("a"),sl=a("span"),w(Pa.$$.fragment),Iu=p(),al=a("span"),Su=n("TFDebertaV2ForTokenClassification"),md=p(),tt=a("div"),w(Ba.$$.fragment),Ou=p(),rl=a("p"),Nu=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Wu=p(),Ra=a("p"),Hu=n("The DeBERTa model was proposed in "),Aa=a("a"),Uu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ku=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qu=p(),La=a("p"),Gu=n("This model is also a "),Ia=a("a"),Ju=n("tf.keras.Model"),Xu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu=p(),w(Mn.$$.fragment),Zu=p(),ut=a("div"),w(Sa.$$.fragment),eg=p(),Mo=a("p"),tg=n("The "),fr=a("a"),og=n("TFDebertaV2ForTokenClassification"),ng=n(" forward method, overrides the "),il=a("code"),sg=n("__call__"),ag=n(" special method."),rg=p(),w(Cn.$$.fragment),ig=p(),w(Pn.$$.fragment),lg=p(),w(Bn.$$.fragment),ud=p(),Co=a("h2"),Rn=a("a"),ll=a("span"),w(Oa.$$.fragment),dg=p(),dl=a("span"),cg=n("TFDebertaV2ForQuestionAnswering"),gd=p(),ot=a("div"),w(Na.$$.fragment),pg=p(),Po=a("p"),hg=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),cl=a("code"),fg=n("span start logits"),mg=n(" and "),pl=a("code"),ug=n("span end logits"),gg=n(")."),_g=p(),Wa=a("p"),bg=n("The DeBERTa model was proposed in "),Ha=a("a"),kg=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vg=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wg=p(),Ua=a("p"),Tg=n("This model is also a "),Ka=a("a"),yg=n("tf.keras.Model"),$g=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dg=p(),w(An.$$.fragment),Eg=p(),gt=a("div"),w(Qa.$$.fragment),Fg=p(),Bo=a("p"),Vg=n("The "),mr=a("a"),xg=n("TFDebertaV2ForQuestionAnswering"),qg=n(" forward method, overrides the "),hl=a("code"),zg=n("__call__"),jg=n(" special method."),Mg=p(),w(Ln.$$.fragment),Cg=p(),w(In.$$.fragment),Pg=p(),w(Sn.$$.fragment),this.h()},l(o){const b=lb('[data-svelte="svelte-1phssyn"]',document.head);l=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var Ga=i(c);m=r(Ga,"A",{id:!0,class:!0,href:!0});var fl=i(m);v=r(fl,"SPAN",{});var ml=i(v);T(d.$$.fragment,ml),ml.forEach(t),fl.forEach(t),f=h(Ga),q=r(Ga,"SPAN",{});var ul=i(q);ke=s(ul,"DeBERTa-v2"),ul.forEach(t),Ga.forEach(t),pe=h(o),A=r(o,"H2",{class:!0});var Ja=i(A);ne=r(Ja,"A",{id:!0,class:!0,href:!0});var gl=i(ne);oe=r(gl,"SPAN",{});var _l=i(oe);T(F.$$.fragment,_l),_l.forEach(t),gl.forEach(t),ve=h(Ja),U=r(Ja,"SPAN",{});var bl=i(U);we=s(bl,"Overview"),bl.forEach(t),Ja.forEach(t),he=h(o),I=r(o,"P",{});var Xa=i(I);Te=s(Xa,"The DeBERTa model was proposed in "),ie=r(Xa,"A",{href:!0,rel:!0});var kl=i(ie);G=s(kl,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),kl.forEach(t),ye=s(Xa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Xa.forEach(t),fe=h(o),N=r(o,"P",{});var vl=i(N);$e=s(vl,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),vl.forEach(t),me=h(o),W=r(o,"P",{});var wl=i(W);De=s(wl,"The abstract from the paper is the following:"),wl.forEach(t),ue=h(o),te=r(o,"P",{});var Tl=i(te);j=r(Tl,"EM",{});var Ya=i(j);P=s(Ya,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),le=r(Ya,"A",{href:!0,rel:!0});var yl=i(le);J=s(yl,"https://github.com/microsoft/DeBERTa"),yl.forEach(t),Ee=s(Ya,"."),Ya.forEach(t),Tl.forEach(t),ge=h(o),L=r(o,"P",{});var On=i(L);Fe=s(On,"The following information is visible directly on the "),de=r(On,"A",{href:!0,rel:!0});var $l=i(de);B=s($l,`original implementation
repository`),$l.forEach(t),Ve=s(On,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),O=r(On,"A",{href:!0,rel:!0});var Dl=i(O);xe=s(Dl,"blog"),Dl.forEach(t),On.forEach(t),_e=h(o),H=r(o,"P",{});var El=i(H);qe=s(El,"New in v2:"),El.forEach(t),be=h(o),C=r(o,"UL",{});var Tt=i(C);se=r(Tt,"LI",{});var Nn=i(se);K=r(Nn,"STRONG",{});var Fl=i(K);ze=s(Fl,"Vocabulary"),Fl.forEach(t),ae=s(Nn,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),M=r(Nn,"A",{href:!0,rel:!0});var Vl=i(M);je=s(Vl,"sentencepiece-based"),Vl.forEach(t),R=s(Nn," tokenizer."),Nn.forEach(t),Me=h(Tt),ce=r(Tt,"LI",{});var ur=i(ce);k=r(ur,"STRONG",{});var xl=i(k);x=s(xl,"nGiE(nGram Induced Input Encoding)"),xl.forEach(t),We=s(ur,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),ur.forEach(t),re=h(Tt),Re=r(Tt,"LI",{});var gr=i(Re);Ie=r(gr,"STRONG",{});var ql=i(Ie);z=s(ql,"Sharing position projection matrix with content projection matrix in attention layer"),ql.forEach(t),He=s(gr,` Based on previous
experiments, this can save parameters without affecting the performance.`),gr.forEach(t),Ue=h(Tt),Ae=r(Tt,"LI",{});var _r=i(Ae);Se=r(_r,"STRONG",{});var zl=i(Se);Ke=s(zl,"Apply bucket to encode relative positions"),zl.forEach(t),S=s(_r,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),_r.forEach(t),X=h(Tt),Le=r(Tt,"LI",{});var br=i(Le);Oe=r(br,"STRONG",{});var jl=i(Oe);Y=s(jl,"900M model & 1.5B model"),jl.forEach(t),Qe=s(br,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),br.forEach(t),Tt.forEach(t),Ne=h(o),Z=r(o,"P",{});var Rt=i(Z);Ge=s(Rt,"This model was contributed by "),ee=r(Rt,"A",{href:!0,rel:!0});var Ml=i(ee);Je=s(Ml,"DeBERTa"),Ml.forEach(t),ac=s(Rt,`. This model TF 2.0 implementation was
contributed by `),es=r(Rt,"A",{href:!0,rel:!0});var Cl=i(es);rc=s(Cl,"kamalkraj"),Cl.forEach(t),ic=s(Rt,". The original code can be found "),ts=r(Rt,"A",{href:!0,rel:!0});var Pl=i(ts);lc=s(Pl,"here"),Pl.forEach(t),dc=s(Rt,"."),Rt.forEach(t),Ll=h(o),eo=r(o,"H2",{class:!0});var Za=i(eo);Ao=r(Za,"A",{id:!0,class:!0,href:!0});var Bl=i(Ao);Nr=r(Bl,"SPAN",{});var Rl=i(Nr);T(os.$$.fragment,Rl),Rl.forEach(t),Bl.forEach(t),cc=h(Za),Wr=r(Za,"SPAN",{});var Al=i(Wr);pc=s(Al,"DebertaV2Config"),Al.forEach(t),Za.forEach(t),Il=h(o),Ct=r(o,"DIV",{class:!0});var Ro=i(Ct);T(ns.$$.fragment,Ro),hc=h(Ro),to=r(Ro,"P",{});var kr=i(to);fc=s(kr,"This is the configuration class to store the configuration of a "),er=r(kr,"A",{href:!0});var Bg=i(er);mc=s(Bg,"DebertaV2Model"),Bg.forEach(t),uc=s(kr,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),ss=r(kr,"A",{href:!0,rel:!0});var Rg=i(ss);gc=s(Rg,"microsoft/deberta-v2-xlarge"),Rg.forEach(t),_c=s(kr," architecture."),kr.forEach(t),bc=h(Ro),oo=r(Ro,"P",{});var vr=i(oo);kc=s(vr,"Configuration objects inherit from "),tr=r(vr,"A",{href:!0});var Ag=i(tr);vc=s(Ag,"PretrainedConfig"),Ag.forEach(t),wc=s(vr,` and can be used to control the model outputs. Read the
documentation from `),or=r(vr,"A",{href:!0});var Lg=i(or);Tc=s(Lg,"PretrainedConfig"),Lg.forEach(t),yc=s(vr," for more information."),vr.forEach(t),Ro.forEach(t),Sl=h(o),no=r(o,"H2",{class:!0});var bd=i(no);Lo=r(bd,"A",{id:!0,class:!0,href:!0});var Ig=i(Lo);Hr=r(Ig,"SPAN",{});var Sg=i(Hr);T(as.$$.fragment,Sg),Sg.forEach(t),Ig.forEach(t),$c=h(bd),Ur=r(bd,"SPAN",{});var Og=i(Ur);Dc=s(Og,"DebertaV2Tokenizer"),Og.forEach(t),bd.forEach(t),Ol=h(o),Ze=r(o,"DIV",{class:!0});var qt=i(Ze);T(rs.$$.fragment,qt),Ec=h(qt),is=r(qt,"P",{});var kd=i(is);Fc=s(kd,"Constructs a DeBERTa-v2 tokenizer. Based on "),ls=r(kd,"A",{href:!0,rel:!0});var Ng=i(ls);Vc=s(Ng,"SentencePiece"),Ng.forEach(t),xc=s(kd,"."),kd.forEach(t),qc=h(qt),At=r(qt,"DIV",{class:!0});var wr=i(At);T(ds.$$.fragment,wr),zc=h(wr),Kr=r(wr,"P",{});var Wg=i(Kr);jc=s(Wg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Wg.forEach(t),Mc=h(wr),cs=r(wr,"UL",{});var vd=i(cs);Qr=r(vd,"LI",{});var Hg=i(Qr);Cc=s(Hg,"single sequence: [CLS] X [SEP]"),Hg.forEach(t),Pc=h(vd),Gr=r(vd,"LI",{});var Ug=i(Gr);Bc=s(Ug,"pair of sequences: [CLS] A [SEP] B [SEP]"),Ug.forEach(t),vd.forEach(t),wr.forEach(t),Rc=h(qt),Io=r(qt,"DIV",{class:!0});var wd=i(Io);T(ps.$$.fragment,wd),Ac=h(wd),so=r(wd,"P",{});var Tr=i(so);Lc=s(Tr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jr=r(Tr,"CODE",{});var Kg=i(Jr);Ic=s(Kg,"prepare_for_model"),Kg.forEach(t),Sc=s(Tr," or "),Xr=r(Tr,"CODE",{});var Qg=i(Xr);Oc=s(Qg,"encode_plus"),Qg.forEach(t),Nc=s(Tr," methods."),Tr.forEach(t),wd.forEach(t),Wc=h(qt),yt=r(qt,"DIV",{class:!0});var Wn=i(yt);T(hs.$$.fragment,Wn),Hc=h(Wn),Yr=r(Wn,"P",{});var Gg=i(Yr);Uc=s(Gg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Gg.forEach(t),Kc=h(Wn),T(So.$$.fragment,Wn),Qc=h(Wn),ao=r(Wn,"P",{});var yr=i(ao);Gc=s(yr,"If "),Zr=r(yr,"CODE",{});var Jg=i(Zr);Jc=s(Jg,"token_ids_1"),Jg.forEach(t),Xc=s(yr," is "),ei=r(yr,"CODE",{});var Xg=i(ei);Yc=s(Xg,"None"),Xg.forEach(t),Zc=s(yr,", this method only returns the first portion of the mask (0s)."),yr.forEach(t),Wn.forEach(t),ep=h(qt),nr=r(qt,"DIV",{class:!0});var Yg=i(nr);T(fs.$$.fragment,Yg),Yg.forEach(t),qt.forEach(t),Nl=h(o),ro=r(o,"H2",{class:!0});var Td=i(ro);Oo=r(Td,"A",{id:!0,class:!0,href:!0});var Zg=i(Oo);ti=r(Zg,"SPAN",{});var e_=i(ti);T(ms.$$.fragment,e_),e_.forEach(t),Zg.forEach(t),tp=h(Td),oi=r(Td,"SPAN",{});var t_=i(oi);op=s(t_,"DebertaV2TokenizerFast"),t_.forEach(t),Td.forEach(t),Wl=h(o),bt=r(o,"DIV",{class:!0});var Hn=i(bt);T(us.$$.fragment,Hn),np=h(Hn),gs=r(Hn,"P",{});var yd=i(gs);sp=s(yd,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),_s=r(yd,"A",{href:!0,rel:!0});var o_=i(_s);ap=s(o_,"SentencePiece"),o_.forEach(t),rp=s(yd,"."),yd.forEach(t),ip=h(Hn),Lt=r(Hn,"DIV",{class:!0});var $r=i(Lt);T(bs.$$.fragment,$r),lp=h($r),ni=r($r,"P",{});var n_=i(ni);dp=s(n_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),n_.forEach(t),cp=h($r),ks=r($r,"UL",{});var $d=i(ks);si=r($d,"LI",{});var s_=i(si);pp=s(s_,"single sequence: [CLS] X [SEP]"),s_.forEach(t),hp=h($d),ai=r($d,"LI",{});var a_=i(ai);fp=s(a_,"pair of sequences: [CLS] A [SEP] B [SEP]"),a_.forEach(t),$d.forEach(t),$r.forEach(t),mp=h(Hn),$t=r(Hn,"DIV",{class:!0});var Un=i($t);T(vs.$$.fragment,Un),up=h(Un),ri=r(Un,"P",{});var r_=i(ri);gp=s(r_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),r_.forEach(t),_p=h(Un),T(No.$$.fragment,Un),bp=h(Un),io=r(Un,"P",{});var Dr=i(io);kp=s(Dr,"If "),ii=r(Dr,"CODE",{});var i_=i(ii);vp=s(i_,"token_ids_1"),i_.forEach(t),wp=s(Dr," is "),li=r(Dr,"CODE",{});var l_=i(li);Tp=s(l_,"None"),l_.forEach(t),yp=s(Dr,", this method only returns the first portion of the mask (0s)."),Dr.forEach(t),Un.forEach(t),Hn.forEach(t),Hl=h(o),lo=r(o,"H2",{class:!0});var Dd=i(lo);Wo=r(Dd,"A",{id:!0,class:!0,href:!0});var d_=i(Wo);di=r(d_,"SPAN",{});var c_=i(di);T(ws.$$.fragment,c_),c_.forEach(t),d_.forEach(t),$p=h(Dd),ci=r(Dd,"SPAN",{});var p_=i(ci);Dp=s(p_,"DebertaV2Model"),p_.forEach(t),Dd.forEach(t),Ul=h(o),kt=r(o,"DIV",{class:!0});var Kn=i(kt);T(Ts.$$.fragment,Kn),Ep=h(Kn),ys=r(Kn,"P",{});var Ed=i(ys);Fp=s(Ed,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),$s=r(Ed,"A",{href:!0,rel:!0});var h_=i($s);Vp=s(h_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),h_.forEach(t),xp=s(Ed,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ed.forEach(t),qp=h(Kn),Ds=r(Kn,"P",{});var Fd=i(Ds);zp=s(Fd,"This model is also a PyTorch "),Es=r(Fd,"A",{href:!0,rel:!0});var f_=i(Es);jp=s(f_,"torch.nn.Module"),f_.forEach(t),Mp=s(Fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fd.forEach(t),Cp=h(Kn),Dt=r(Kn,"DIV",{class:!0});var Qn=i(Dt);T(Fs.$$.fragment,Qn),Pp=h(Qn),co=r(Qn,"P",{});var Er=i(co);Bp=s(Er,"The "),sr=r(Er,"A",{href:!0});var m_=i(sr);Rp=s(m_,"DebertaV2Model"),m_.forEach(t),Ap=s(Er," forward method, overrides the "),pi=r(Er,"CODE",{});var u_=i(pi);Lp=s(u_,"__call__"),u_.forEach(t),Ip=s(Er," special method."),Er.forEach(t),Sp=h(Qn),T(Ho.$$.fragment,Qn),Op=h(Qn),T(Uo.$$.fragment,Qn),Qn.forEach(t),Kn.forEach(t),Kl=h(o),po=r(o,"H2",{class:!0});var Vd=i(po);Ko=r(Vd,"A",{id:!0,class:!0,href:!0});var g_=i(Ko);hi=r(g_,"SPAN",{});var __=i(hi);T(Vs.$$.fragment,__),__.forEach(t),g_.forEach(t),Np=h(Vd),fi=r(Vd,"SPAN",{});var b_=i(fi);Wp=s(b_,"DebertaV2PreTrainedModel"),b_.forEach(t),Vd.forEach(t),Ql=h(o),Pt=r(o,"DIV",{class:!0});var Fr=i(Pt);T(xs.$$.fragment,Fr),Hp=h(Fr),mi=r(Fr,"P",{});var k_=i(mi);Up=s(k_,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),k_.forEach(t),Kp=h(Fr),Et=r(Fr,"DIV",{class:!0});var Gn=i(Et);T(qs.$$.fragment,Gn),Qp=h(Gn),ui=r(Gn,"P",{});var v_=i(ui);Gp=s(v_,"Defines the computation performed at every call."),v_.forEach(t),Jp=h(Gn),gi=r(Gn,"P",{});var w_=i(gi);Xp=s(w_,"Should be overridden by all subclasses."),w_.forEach(t),Yp=h(Gn),T(Qo.$$.fragment,Gn),Gn.forEach(t),Fr.forEach(t),Gl=h(o),ho=r(o,"H2",{class:!0});var xd=i(ho);Go=r(xd,"A",{id:!0,class:!0,href:!0});var T_=i(Go);_i=r(T_,"SPAN",{});var y_=i(_i);T(zs.$$.fragment,y_),y_.forEach(t),T_.forEach(t),Zp=h(xd),bi=r(xd,"SPAN",{});var $_=i(bi);eh=s($_,"DebertaV2ForMaskedLM"),$_.forEach(t),xd.forEach(t),Jl=h(o),vt=r(o,"DIV",{class:!0});var Jn=i(vt);T(js.$$.fragment,Jn),th=h(Jn),fo=r(Jn,"P",{});var Vr=i(fo);oh=s(Vr,"DeBERTa Model with a "),ki=r(Vr,"CODE",{});var D_=i(ki);nh=s(D_,"language modeling"),D_.forEach(t),sh=s(Vr,` head on top.
The DeBERTa model was proposed in `),Ms=r(Vr,"A",{href:!0,rel:!0});var E_=i(Ms);ah=s(E_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),E_.forEach(t),rh=s(Vr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vr.forEach(t),ih=h(Jn),Cs=r(Jn,"P",{});var qd=i(Cs);lh=s(qd,"This model is also a PyTorch "),Ps=r(qd,"A",{href:!0,rel:!0});var F_=i(Ps);dh=s(F_,"torch.nn.Module"),F_.forEach(t),ch=s(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),ph=h(Jn),ct=r(Jn,"DIV",{class:!0});var It=i(ct);T(Bs.$$.fragment,It),hh=h(It),mo=r(It,"P",{});var xr=i(mo);fh=s(xr,"The "),ar=r(xr,"A",{href:!0});var V_=i(ar);mh=s(V_,"DebertaV2ForMaskedLM"),V_.forEach(t),uh=s(xr," forward method, overrides the "),vi=r(xr,"CODE",{});var x_=i(vi);gh=s(x_,"__call__"),x_.forEach(t),_h=s(xr," special method."),xr.forEach(t),bh=h(It),T(Jo.$$.fragment,It),kh=h(It),T(Xo.$$.fragment,It),vh=h(It),T(Yo.$$.fragment,It),It.forEach(t),Jn.forEach(t),Xl=h(o),uo=r(o,"H2",{class:!0});var zd=i(uo);Zo=r(zd,"A",{id:!0,class:!0,href:!0});var q_=i(Zo);wi=r(q_,"SPAN",{});var z_=i(wi);T(Rs.$$.fragment,z_),z_.forEach(t),q_.forEach(t),wh=h(zd),Ti=r(zd,"SPAN",{});var j_=i(Ti);Th=s(j_,"DebertaV2ForSequenceClassification"),j_.forEach(t),zd.forEach(t),Yl=h(o),st=r(o,"DIV",{class:!0});var St=i(st);T(As.$$.fragment,St),yh=h(St),yi=r(St,"P",{});var M_=i(yi);$h=s(M_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),M_.forEach(t),Dh=h(St),Ls=r(St,"P",{});var jd=i(Ls);Eh=s(jd,"The DeBERTa model was proposed in "),Is=r(jd,"A",{href:!0,rel:!0});var C_=i(Is);Fh=s(C_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),C_.forEach(t),Vh=s(jd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),jd.forEach(t),xh=h(St),Ss=r(St,"P",{});var Md=i(Ss);qh=s(Md,"This model is also a PyTorch "),Os=r(Md,"A",{href:!0,rel:!0});var P_=i(Os);zh=s(P_,"torch.nn.Module"),P_.forEach(t),jh=s(Md,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Md.forEach(t),Mh=h(St),Xe=r(St,"DIV",{class:!0});var _t=i(Xe);T(Ns.$$.fragment,_t),Ch=h(_t),go=r(_t,"P",{});var qr=i(go);Ph=s(qr,"The "),rr=r(qr,"A",{href:!0});var B_=i(rr);Bh=s(B_,"DebertaV2ForSequenceClassification"),B_.forEach(t),Rh=s(qr," forward method, overrides the "),$i=r(qr,"CODE",{});var R_=i($i);Ah=s(R_,"__call__"),R_.forEach(t),Lh=s(qr," special method."),qr.forEach(t),Ih=h(_t),T(en.$$.fragment,_t),Sh=h(_t),T(tn.$$.fragment,_t),Oh=h(_t),T(on.$$.fragment,_t),Nh=h(_t),T(nn.$$.fragment,_t),Wh=h(_t),T(sn.$$.fragment,_t),_t.forEach(t),St.forEach(t),Zl=h(o),_o=r(o,"H2",{class:!0});var Cd=i(_o);an=r(Cd,"A",{id:!0,class:!0,href:!0});var A_=i(an);Di=r(A_,"SPAN",{});var L_=i(Di);T(Ws.$$.fragment,L_),L_.forEach(t),A_.forEach(t),Hh=h(Cd),Ei=r(Cd,"SPAN",{});var I_=i(Ei);Uh=s(I_,"DebertaV2ForTokenClassification"),I_.forEach(t),Cd.forEach(t),ed=h(o),at=r(o,"DIV",{class:!0});var Ot=i(at);T(Hs.$$.fragment,Ot),Kh=h(Ot),Fi=r(Ot,"P",{});var S_=i(Fi);Qh=s(S_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),S_.forEach(t),Gh=h(Ot),Us=r(Ot,"P",{});var Pd=i(Us);Jh=s(Pd,"The DeBERTa model was proposed in "),Ks=r(Pd,"A",{href:!0,rel:!0});var O_=i(Ks);Xh=s(O_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),O_.forEach(t),Yh=s(Pd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Pd.forEach(t),Zh=h(Ot),Qs=r(Ot,"P",{});var Bd=i(Qs);ef=s(Bd,"This model is also a PyTorch "),Gs=r(Bd,"A",{href:!0,rel:!0});var N_=i(Gs);tf=s(N_,"torch.nn.Module"),N_.forEach(t),of=s(Bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bd.forEach(t),nf=h(Ot),pt=r(Ot,"DIV",{class:!0});var Nt=i(pt);T(Js.$$.fragment,Nt),sf=h(Nt),bo=r(Nt,"P",{});var zr=i(bo);af=s(zr,"The "),ir=r(zr,"A",{href:!0});var W_=i(ir);rf=s(W_,"DebertaV2ForTokenClassification"),W_.forEach(t),lf=s(zr," forward method, overrides the "),Vi=r(zr,"CODE",{});var H_=i(Vi);df=s(H_,"__call__"),H_.forEach(t),cf=s(zr," special method."),zr.forEach(t),pf=h(Nt),T(rn.$$.fragment,Nt),hf=h(Nt),T(ln.$$.fragment,Nt),ff=h(Nt),T(dn.$$.fragment,Nt),Nt.forEach(t),Ot.forEach(t),td=h(o),ko=r(o,"H2",{class:!0});var Rd=i(ko);cn=r(Rd,"A",{id:!0,class:!0,href:!0});var U_=i(cn);xi=r(U_,"SPAN",{});var K_=i(xi);T(Xs.$$.fragment,K_),K_.forEach(t),U_.forEach(t),mf=h(Rd),qi=r(Rd,"SPAN",{});var Q_=i(qi);uf=s(Q_,"DebertaV2ForQuestionAnswering"),Q_.forEach(t),Rd.forEach(t),od=h(o),rt=r(o,"DIV",{class:!0});var Wt=i(rt);T(Ys.$$.fragment,Wt),gf=h(Wt),vo=r(Wt,"P",{});var jr=i(vo);_f=s(jr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zi=r(jr,"CODE",{});var G_=i(zi);bf=s(G_,"span start logits"),G_.forEach(t),kf=s(jr," and "),ji=r(jr,"CODE",{});var J_=i(ji);vf=s(J_,"span end logits"),J_.forEach(t),wf=s(jr,")."),jr.forEach(t),Tf=h(Wt),Zs=r(Wt,"P",{});var Ad=i(Zs);yf=s(Ad,"The DeBERTa model was proposed in "),ea=r(Ad,"A",{href:!0,rel:!0});var X_=i(ea);$f=s(X_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),X_.forEach(t),Df=s(Ad,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ad.forEach(t),Ef=h(Wt),ta=r(Wt,"P",{});var Ld=i(ta);Ff=s(Ld,"This model is also a PyTorch "),oa=r(Ld,"A",{href:!0,rel:!0});var Y_=i(oa);Vf=s(Y_,"torch.nn.Module"),Y_.forEach(t),xf=s(Ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld.forEach(t),qf=h(Wt),ht=r(Wt,"DIV",{class:!0});var Ht=i(ht);T(na.$$.fragment,Ht),zf=h(Ht),wo=r(Ht,"P",{});var Mr=i(wo);jf=s(Mr,"The "),lr=r(Mr,"A",{href:!0});var Z_=i(lr);Mf=s(Z_,"DebertaV2ForQuestionAnswering"),Z_.forEach(t),Cf=s(Mr," forward method, overrides the "),Mi=r(Mr,"CODE",{});var e2=i(Mi);Pf=s(e2,"__call__"),e2.forEach(t),Bf=s(Mr," special method."),Mr.forEach(t),Rf=h(Ht),T(pn.$$.fragment,Ht),Af=h(Ht),T(hn.$$.fragment,Ht),Lf=h(Ht),T(fn.$$.fragment,Ht),Ht.forEach(t),Wt.forEach(t),nd=h(o),To=r(o,"H2",{class:!0});var Id=i(To);mn=r(Id,"A",{id:!0,class:!0,href:!0});var t2=i(mn);Ci=r(t2,"SPAN",{});var o2=i(Ci);T(sa.$$.fragment,o2),o2.forEach(t),t2.forEach(t),If=h(Id),Pi=r(Id,"SPAN",{});var n2=i(Pi);Sf=s(n2,"DebertaV2ForMultipleChoice"),n2.forEach(t),Id.forEach(t),sd=h(o),it=r(o,"DIV",{class:!0});var Ut=i(it);T(aa.$$.fragment,Ut),Of=h(Ut),Bi=r(Ut,"P",{});var s2=i(Bi);Nf=s(s2,`DeBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s2.forEach(t),Wf=h(Ut),ra=r(Ut,"P",{});var Sd=i(ra);Hf=s(Sd,"The DeBERTa model was proposed in "),ia=r(Sd,"A",{href:!0,rel:!0});var a2=i(ia);Uf=s(a2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),a2.forEach(t),Kf=s(Sd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sd.forEach(t),Qf=h(Ut),la=r(Ut,"P",{});var Od=i(la);Gf=s(Od,"This model is also a PyTorch "),da=r(Od,"A",{href:!0,rel:!0});var r2=i(da);Jf=s(r2,"torch.nn.Module"),r2.forEach(t),Xf=s(Od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Od.forEach(t),Yf=h(Ut),Ft=r(Ut,"DIV",{class:!0});var Xn=i(Ft);T(ca.$$.fragment,Xn),Zf=h(Xn),yo=r(Xn,"P",{});var Cr=i(yo);em=s(Cr,"The "),dr=r(Cr,"A",{href:!0});var i2=i(dr);tm=s(i2,"DebertaV2ForMultipleChoice"),i2.forEach(t),om=s(Cr," forward method, overrides the "),Ri=r(Cr,"CODE",{});var l2=i(Ri);nm=s(l2,"__call__"),l2.forEach(t),sm=s(Cr," special method."),Cr.forEach(t),am=h(Xn),T(un.$$.fragment,Xn),rm=h(Xn),T(gn.$$.fragment,Xn),Xn.forEach(t),Ut.forEach(t),ad=h(o),$o=r(o,"H2",{class:!0});var Nd=i($o);_n=r(Nd,"A",{id:!0,class:!0,href:!0});var d2=i(_n);Ai=r(d2,"SPAN",{});var c2=i(Ai);T(pa.$$.fragment,c2),c2.forEach(t),d2.forEach(t),im=h(Nd),Li=r(Nd,"SPAN",{});var p2=i(Li);lm=s(p2,"TFDebertaV2Model"),p2.forEach(t),Nd.forEach(t),rd=h(o),lt=r(o,"DIV",{class:!0});var Kt=i(lt);T(ha.$$.fragment,Kt),dm=h(Kt),fa=r(Kt,"P",{});var Wd=i(fa);cm=s(Wd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ma=r(Wd,"A",{href:!0,rel:!0});var h2=i(ma);pm=s(h2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),h2.forEach(t),hm=s(Wd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wd.forEach(t),fm=h(Kt),ua=r(Kt,"P",{});var Hd=i(ua);mm=s(Hd,"This model is also a "),ga=r(Hd,"A",{href:!0,rel:!0});var f2=i(ga);um=s(f2,"tf.keras.Model"),f2.forEach(t),gm=s(Hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hd.forEach(t),_m=h(Kt),T(bn.$$.fragment,Kt),bm=h(Kt),Vt=r(Kt,"DIV",{class:!0});var Yn=i(Vt);T(_a.$$.fragment,Yn),km=h(Yn),Do=r(Yn,"P",{});var Pr=i(Do);vm=s(Pr,"The "),cr=r(Pr,"A",{href:!0});var m2=i(cr);wm=s(m2,"TFDebertaV2Model"),m2.forEach(t),Tm=s(Pr," forward method, overrides the "),Ii=r(Pr,"CODE",{});var u2=i(Ii);ym=s(u2,"__call__"),u2.forEach(t),$m=s(Pr," special method."),Pr.forEach(t),Dm=h(Yn),T(kn.$$.fragment,Yn),Em=h(Yn),T(vn.$$.fragment,Yn),Yn.forEach(t),Kt.forEach(t),id=h(o),Eo=r(o,"H2",{class:!0});var Ud=i(Eo);wn=r(Ud,"A",{id:!0,class:!0,href:!0});var g2=i(wn);Si=r(g2,"SPAN",{});var _2=i(Si);T(ba.$$.fragment,_2),_2.forEach(t),g2.forEach(t),Fm=h(Ud),Oi=r(Ud,"SPAN",{});var b2=i(Oi);Vm=s(b2,"TFDebertaV2PreTrainedModel"),b2.forEach(t),Ud.forEach(t),ld=h(o),Bt=r(o,"DIV",{class:!0});var Br=i(Bt);T(ka.$$.fragment,Br),xm=h(Br),Ni=r(Br,"P",{});var k2=i(Ni);qm=s(k2,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),k2.forEach(t),zm=h(Br),xt=r(Br,"DIV",{class:!0});var Zn=i(xt);T(va.$$.fragment,Zn),jm=h(Zn),Wi=r(Zn,"P",{});var v2=i(Wi);Mm=s(v2,"Calls the model on new inputs and returns the outputs as tensors."),v2.forEach(t),Cm=h(Zn),wa=r(Zn,"P",{});var Kd=i(wa);Pm=s(Kd,"In this case "),Hi=r(Kd,"CODE",{});var w2=i(Hi);Bm=s(w2,"call()"),w2.forEach(t),Rm=s(Kd,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Kd.forEach(t),Am=h(Zn),wt=r(Zn,"P",{});var Qt=i(wt);Lm=s(Qt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Ui=r(Qt,"CODE",{});var T2=i(Ui);Im=s(T2,"tf.keras.Model"),T2.forEach(t),Sm=s(Qt,`.
To call a model on an input, always use the `),Ki=r(Qt,"CODE",{});var y2=i(Ki);Om=s(y2,"__call__()"),y2.forEach(t),Nm=s(Qt,` method,
i.e. `),Qi=r(Qt,"CODE",{});var $2=i(Qi);Wm=s($2,"model(inputs)"),$2.forEach(t),Hm=s(Qt,", which relies on the underlying "),Gi=r(Qt,"CODE",{});var D2=i(Gi);Um=s(D2,"call()"),D2.forEach(t),Km=s(Qt," method."),Qt.forEach(t),Zn.forEach(t),Br.forEach(t),dd=h(o),Fo=r(o,"H2",{class:!0});var Qd=i(Fo);Tn=r(Qd,"A",{id:!0,class:!0,href:!0});var E2=i(Tn);Ji=r(E2,"SPAN",{});var F2=i(Ji);T(Ta.$$.fragment,F2),F2.forEach(t),E2.forEach(t),Qm=h(Qd),Xi=r(Qd,"SPAN",{});var V2=i(Xi);Gm=s(V2,"TFDebertaV2ForMaskedLM"),V2.forEach(t),Qd.forEach(t),cd=h(o),dt=r(o,"DIV",{class:!0});var Gt=i(dt);T(ya.$$.fragment,Gt),Jm=h(Gt),Vo=r(Gt,"P",{});var Rr=i(Vo);Xm=s(Rr,"DeBERTa Model with a "),Yi=r(Rr,"CODE",{});var x2=i(Yi);Ym=s(x2,"language modeling"),x2.forEach(t),Zm=s(Rr,` head on top.
The DeBERTa model was proposed in `),$a=r(Rr,"A",{href:!0,rel:!0});var q2=i($a);eu=s(q2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),q2.forEach(t),tu=s(Rr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rr.forEach(t),ou=h(Gt),Da=r(Gt,"P",{});var Gd=i(Da);nu=s(Gd,"This model is also a "),Ea=r(Gd,"A",{href:!0,rel:!0});var z2=i(Ea);su=s(z2,"tf.keras.Model"),z2.forEach(t),au=s(Gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gd.forEach(t),ru=h(Gt),T(yn.$$.fragment,Gt),iu=h(Gt),ft=r(Gt,"DIV",{class:!0});var Jt=i(ft);T(Fa.$$.fragment,Jt),lu=h(Jt),xo=r(Jt,"P",{});var Ar=i(xo);du=s(Ar,"The "),pr=r(Ar,"A",{href:!0});var j2=i(pr);cu=s(j2,"TFDebertaV2ForMaskedLM"),j2.forEach(t),pu=s(Ar," forward method, overrides the "),Zi=r(Ar,"CODE",{});var M2=i(Zi);hu=s(M2,"__call__"),M2.forEach(t),fu=s(Ar," special method."),Ar.forEach(t),mu=h(Jt),T($n.$$.fragment,Jt),uu=h(Jt),T(Dn.$$.fragment,Jt),gu=h(Jt),T(En.$$.fragment,Jt),Jt.forEach(t),Gt.forEach(t),pd=h(o),qo=r(o,"H2",{class:!0});var Jd=i(qo);Fn=r(Jd,"A",{id:!0,class:!0,href:!0});var C2=i(Fn);el=r(C2,"SPAN",{});var P2=i(el);T(Va.$$.fragment,P2),P2.forEach(t),C2.forEach(t),_u=h(Jd),tl=r(Jd,"SPAN",{});var B2=i(tl);bu=s(B2,"TFDebertaV2ForSequenceClassification"),B2.forEach(t),Jd.forEach(t),hd=h(o),et=r(o,"DIV",{class:!0});var zt=i(et);T(xa.$$.fragment,zt),ku=h(zt),ol=r(zt,"P",{});var R2=i(ol);vu=s(R2,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),R2.forEach(t),wu=h(zt),qa=r(zt,"P",{});var Xd=i(qa);Tu=s(Xd,"The DeBERTa model was proposed in "),za=r(Xd,"A",{href:!0,rel:!0});var A2=i(za);yu=s(A2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),A2.forEach(t),$u=s(Xd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xd.forEach(t),Du=h(zt),ja=r(zt,"P",{});var Yd=i(ja);Eu=s(Yd,"This model is also a "),Ma=r(Yd,"A",{href:!0,rel:!0});var L2=i(Ma);Fu=s(L2,"tf.keras.Model"),L2.forEach(t),Vu=s(Yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yd.forEach(t),xu=h(zt),T(Vn.$$.fragment,zt),qu=h(zt),mt=r(zt,"DIV",{class:!0});var Xt=i(mt);T(Ca.$$.fragment,Xt),zu=h(Xt),zo=r(Xt,"P",{});var Lr=i(zo);ju=s(Lr,"The "),hr=r(Lr,"A",{href:!0});var I2=i(hr);Mu=s(I2,"TFDebertaV2ForSequenceClassification"),I2.forEach(t),Cu=s(Lr," forward method, overrides the "),nl=r(Lr,"CODE",{});var S2=i(nl);Pu=s(S2,"__call__"),S2.forEach(t),Bu=s(Lr," special method."),Lr.forEach(t),Ru=h(Xt),T(xn.$$.fragment,Xt),Au=h(Xt),T(qn.$$.fragment,Xt),Lu=h(Xt),T(zn.$$.fragment,Xt),Xt.forEach(t),zt.forEach(t),fd=h(o),jo=r(o,"H2",{class:!0});var Zd=i(jo);jn=r(Zd,"A",{id:!0,class:!0,href:!0});var O2=i(jn);sl=r(O2,"SPAN",{});var N2=i(sl);T(Pa.$$.fragment,N2),N2.forEach(t),O2.forEach(t),Iu=h(Zd),al=r(Zd,"SPAN",{});var W2=i(al);Su=s(W2,"TFDebertaV2ForTokenClassification"),W2.forEach(t),Zd.forEach(t),md=h(o),tt=r(o,"DIV",{class:!0});var jt=i(tt);T(Ba.$$.fragment,jt),Ou=h(jt),rl=r(jt,"P",{});var H2=i(rl);Nu=s(H2,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),H2.forEach(t),Wu=h(jt),Ra=r(jt,"P",{});var ec=i(Ra);Hu=s(ec,"The DeBERTa model was proposed in "),Aa=r(ec,"A",{href:!0,rel:!0});var U2=i(Aa);Uu=s(U2,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),U2.forEach(t),Ku=s(ec,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ec.forEach(t),Qu=h(jt),La=r(jt,"P",{});var tc=i(La);Gu=s(tc,"This model is also a "),Ia=r(tc,"A",{href:!0,rel:!0});var K2=i(Ia);Ju=s(K2,"tf.keras.Model"),K2.forEach(t),Xu=s(tc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc.forEach(t),Yu=h(jt),T(Mn.$$.fragment,jt),Zu=h(jt),ut=r(jt,"DIV",{class:!0});var Yt=i(ut);T(Sa.$$.fragment,Yt),eg=h(Yt),Mo=r(Yt,"P",{});var Ir=i(Mo);tg=s(Ir,"The "),fr=r(Ir,"A",{href:!0});var Q2=i(fr);og=s(Q2,"TFDebertaV2ForTokenClassification"),Q2.forEach(t),ng=s(Ir," forward method, overrides the "),il=r(Ir,"CODE",{});var G2=i(il);sg=s(G2,"__call__"),G2.forEach(t),ag=s(Ir," special method."),Ir.forEach(t),rg=h(Yt),T(Cn.$$.fragment,Yt),ig=h(Yt),T(Pn.$$.fragment,Yt),lg=h(Yt),T(Bn.$$.fragment,Yt),Yt.forEach(t),jt.forEach(t),ud=h(o),Co=r(o,"H2",{class:!0});var oc=i(Co);Rn=r(oc,"A",{id:!0,class:!0,href:!0});var J2=i(Rn);ll=r(J2,"SPAN",{});var X2=i(ll);T(Oa.$$.fragment,X2),X2.forEach(t),J2.forEach(t),dg=h(oc),dl=r(oc,"SPAN",{});var Y2=i(dl);cg=s(Y2,"TFDebertaV2ForQuestionAnswering"),Y2.forEach(t),oc.forEach(t),gd=h(o),ot=r(o,"DIV",{class:!0});var Mt=i(ot);T(Na.$$.fragment,Mt),pg=h(Mt),Po=r(Mt,"P",{});var Sr=i(Po);hg=s(Sr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),cl=r(Sr,"CODE",{});var Z2=i(cl);fg=s(Z2,"span start logits"),Z2.forEach(t),mg=s(Sr," and "),pl=r(Sr,"CODE",{});var eb=i(pl);ug=s(eb,"span end logits"),eb.forEach(t),gg=s(Sr,")."),Sr.forEach(t),_g=h(Mt),Wa=r(Mt,"P",{});var nc=i(Wa);bg=s(nc,"The DeBERTa model was proposed in "),Ha=r(nc,"A",{href:!0,rel:!0});var tb=i(Ha);kg=s(tb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tb.forEach(t),vg=s(nc,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nc.forEach(t),wg=h(Mt),Ua=r(Mt,"P",{});var sc=i(Ua);Tg=s(sc,"This model is also a "),Ka=r(sc,"A",{href:!0,rel:!0});var ob=i(Ka);yg=s(ob,"tf.keras.Model"),ob.forEach(t),$g=s(sc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sc.forEach(t),Dg=h(Mt),T(An.$$.fragment,Mt),Eg=h(Mt),gt=r(Mt,"DIV",{class:!0});var Zt=i(gt);T(Qa.$$.fragment,Zt),Fg=h(Zt),Bo=r(Zt,"P",{});var Or=i(Bo);Vg=s(Or,"The "),mr=r(Or,"A",{href:!0});var nb=i(mr);xg=s(nb,"TFDebertaV2ForQuestionAnswering"),nb.forEach(t),qg=s(Or," forward method, overrides the "),hl=r(Or,"CODE",{});var sb=i(hl);zg=s(sb,"__call__"),sb.forEach(t),jg=s(Or," special method."),Or.forEach(t),Mg=h(Zt),T(Ln.$$.fragment,Zt),Cg=h(Zt),T(In.$$.fragment,Zt),Pg=h(Zt),T(Sn.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(Xb)),u(m,"id","debertav2"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#debertav2"),u(c,"class","relative group"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(A,"class","relative group"),u(ie,"href","https://arxiv.org/abs/2006.03654"),u(ie,"rel","nofollow"),u(le,"href","https://github.com/microsoft/DeBERTa"),u(le,"rel","nofollow"),u(de,"href","https://github.com/microsoft/DeBERTa"),u(de,"rel","nofollow"),u(O,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(O,"rel","nofollow"),u(M,"href","https://github.com/google/sentencepiece"),u(M,"rel","nofollow"),u(ee,"href","https://huggingface.co/DeBERTa"),u(ee,"rel","nofollow"),u(es,"href","https://huggingface.co/kamalkraj"),u(es,"rel","nofollow"),u(ts,"href","https://github.com/microsoft/DeBERTa"),u(ts,"rel","nofollow"),u(Ao,"id","transformers.DebertaV2Config"),u(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ao,"href","#transformers.DebertaV2Config"),u(eo,"class","relative group"),u(er,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(ss,"href","https://huggingface.co/microsoft/deberta-v2-xlarge"),u(ss,"rel","nofollow"),u(tr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(or,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"id","transformers.DebertaV2Tokenizer"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.DebertaV2Tokenizer"),u(no,"class","relative group"),u(ls,"href","https://github.com/google/sentencepiece"),u(ls,"rel","nofollow"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"id","transformers.DebertaV2TokenizerFast"),u(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oo,"href","#transformers.DebertaV2TokenizerFast"),u(ro,"class","relative group"),u(_s,"href","https://github.com/google/sentencepiece"),u(_s,"rel","nofollow"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wo,"id","transformers.DebertaV2Model"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#transformers.DebertaV2Model"),u(lo,"class","relative group"),u($s,"href","https://arxiv.org/abs/2006.03654"),u($s,"rel","nofollow"),u(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Es,"rel","nofollow"),u(sr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ko,"id","transformers.DebertaV2PreTrainedModel"),u(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ko,"href","#transformers.DebertaV2PreTrainedModel"),u(po,"class","relative group"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.DebertaV2ForMaskedLM"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.DebertaV2ForMaskedLM"),u(ho,"class","relative group"),u(Ms,"href","https://arxiv.org/abs/2006.03654"),u(Ms,"rel","nofollow"),u(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ps,"rel","nofollow"),u(ar,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zo,"id","transformers.DebertaV2ForSequenceClassification"),u(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zo,"href","#transformers.DebertaV2ForSequenceClassification"),u(uo,"class","relative group"),u(Is,"href","https://arxiv.org/abs/2006.03654"),u(Is,"rel","nofollow"),u(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Os,"rel","nofollow"),u(rr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(an,"id","transformers.DebertaV2ForTokenClassification"),u(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(an,"href","#transformers.DebertaV2ForTokenClassification"),u(_o,"class","relative group"),u(Ks,"href","https://arxiv.org/abs/2006.03654"),u(Ks,"rel","nofollow"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(ir,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"id","transformers.DebertaV2ForQuestionAnswering"),u(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cn,"href","#transformers.DebertaV2ForQuestionAnswering"),u(ko,"class","relative group"),u(ea,"href","https://arxiv.org/abs/2006.03654"),u(ea,"rel","nofollow"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(lr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.DebertaV2ForMultipleChoice"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.DebertaV2ForMultipleChoice"),u(To,"class","relative group"),u(ia,"href","https://arxiv.org/abs/2006.03654"),u(ia,"rel","nofollow"),u(da,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(da,"rel","nofollow"),u(dr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.DebertaV2ForMultipleChoice"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_n,"id","transformers.TFDebertaV2Model"),u(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_n,"href","#transformers.TFDebertaV2Model"),u($o,"class","relative group"),u(ma,"href","https://arxiv.org/abs/2006.03654"),u(ma,"rel","nofollow"),u(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ga,"rel","nofollow"),u(cr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.TFDebertaV2PreTrainedModel"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.TFDebertaV2PreTrainedModel"),u(Eo,"class","relative group"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"id","transformers.TFDebertaV2ForMaskedLM"),u(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tn,"href","#transformers.TFDebertaV2ForMaskedLM"),u(Fo,"class","relative group"),u($a,"href","https://arxiv.org/abs/2006.03654"),u($a,"rel","nofollow"),u(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ea,"rel","nofollow"),u(pr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"id","transformers.TFDebertaV2ForSequenceClassification"),u(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fn,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(qo,"class","relative group"),u(za,"href","https://arxiv.org/abs/2006.03654"),u(za,"rel","nofollow"),u(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ma,"rel","nofollow"),u(hr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.TFDebertaV2ForTokenClassification"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.TFDebertaV2ForTokenClassification"),u(jo,"class","relative group"),u(Aa,"href","https://arxiv.org/abs/2006.03654"),u(Aa,"rel","nofollow"),u(Ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ia,"rel","nofollow"),u(fr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(Co,"class","relative group"),u(Ha,"href","https://arxiv.org/abs/2006.03654"),u(Ha,"rel","nofollow"),u(Ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ka,"rel","nofollow"),u(mr,"href","/docs/transformers/v4.22.2/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,m),e(m,v),y(d,v,null),e(c,f),e(c,q),e(q,ke),_(o,pe,b),_(o,A,b),e(A,ne),e(ne,oe),y(F,oe,null),e(A,ve),e(A,U),e(U,we),_(o,he,b),_(o,I,b),e(I,Te),e(I,ie),e(ie,G),e(I,ye),_(o,fe,b),_(o,N,b),e(N,$e),_(o,me,b),_(o,W,b),e(W,De),_(o,ue,b),_(o,te,b),e(te,j),e(j,P),e(j,le),e(le,J),e(j,Ee),_(o,ge,b),_(o,L,b),e(L,Fe),e(L,de),e(de,B),e(L,Ve),e(L,O),e(O,xe),_(o,_e,b),_(o,H,b),e(H,qe),_(o,be,b),_(o,C,b),e(C,se),e(se,K),e(K,ze),e(se,ae),e(se,M),e(M,je),e(se,R),e(C,Me),e(C,ce),e(ce,k),e(k,x),e(ce,We),e(C,re),e(C,Re),e(Re,Ie),e(Ie,z),e(Re,He),e(C,Ue),e(C,Ae),e(Ae,Se),e(Se,Ke),e(Ae,S),e(C,X),e(C,Le),e(Le,Oe),e(Oe,Y),e(Le,Qe),_(o,Ne,b),_(o,Z,b),e(Z,Ge),e(Z,ee),e(ee,Je),e(Z,ac),e(Z,es),e(es,rc),e(Z,ic),e(Z,ts),e(ts,lc),e(Z,dc),_(o,Ll,b),_(o,eo,b),e(eo,Ao),e(Ao,Nr),y(os,Nr,null),e(eo,cc),e(eo,Wr),e(Wr,pc),_(o,Il,b),_(o,Ct,b),y(ns,Ct,null),e(Ct,hc),e(Ct,to),e(to,fc),e(to,er),e(er,mc),e(to,uc),e(to,ss),e(ss,gc),e(to,_c),e(Ct,bc),e(Ct,oo),e(oo,kc),e(oo,tr),e(tr,vc),e(oo,wc),e(oo,or),e(or,Tc),e(oo,yc),_(o,Sl,b),_(o,no,b),e(no,Lo),e(Lo,Hr),y(as,Hr,null),e(no,$c),e(no,Ur),e(Ur,Dc),_(o,Ol,b),_(o,Ze,b),y(rs,Ze,null),e(Ze,Ec),e(Ze,is),e(is,Fc),e(is,ls),e(ls,Vc),e(is,xc),e(Ze,qc),e(Ze,At),y(ds,At,null),e(At,zc),e(At,Kr),e(Kr,jc),e(At,Mc),e(At,cs),e(cs,Qr),e(Qr,Cc),e(cs,Pc),e(cs,Gr),e(Gr,Bc),e(Ze,Rc),e(Ze,Io),y(ps,Io,null),e(Io,Ac),e(Io,so),e(so,Lc),e(so,Jr),e(Jr,Ic),e(so,Sc),e(so,Xr),e(Xr,Oc),e(so,Nc),e(Ze,Wc),e(Ze,yt),y(hs,yt,null),e(yt,Hc),e(yt,Yr),e(Yr,Uc),e(yt,Kc),y(So,yt,null),e(yt,Qc),e(yt,ao),e(ao,Gc),e(ao,Zr),e(Zr,Jc),e(ao,Xc),e(ao,ei),e(ei,Yc),e(ao,Zc),e(Ze,ep),e(Ze,nr),y(fs,nr,null),_(o,Nl,b),_(o,ro,b),e(ro,Oo),e(Oo,ti),y(ms,ti,null),e(ro,tp),e(ro,oi),e(oi,op),_(o,Wl,b),_(o,bt,b),y(us,bt,null),e(bt,np),e(bt,gs),e(gs,sp),e(gs,_s),e(_s,ap),e(gs,rp),e(bt,ip),e(bt,Lt),y(bs,Lt,null),e(Lt,lp),e(Lt,ni),e(ni,dp),e(Lt,cp),e(Lt,ks),e(ks,si),e(si,pp),e(ks,hp),e(ks,ai),e(ai,fp),e(bt,mp),e(bt,$t),y(vs,$t,null),e($t,up),e($t,ri),e(ri,gp),e($t,_p),y(No,$t,null),e($t,bp),e($t,io),e(io,kp),e(io,ii),e(ii,vp),e(io,wp),e(io,li),e(li,Tp),e(io,yp),_(o,Hl,b),_(o,lo,b),e(lo,Wo),e(Wo,di),y(ws,di,null),e(lo,$p),e(lo,ci),e(ci,Dp),_(o,Ul,b),_(o,kt,b),y(Ts,kt,null),e(kt,Ep),e(kt,ys),e(ys,Fp),e(ys,$s),e($s,Vp),e(ys,xp),e(kt,qp),e(kt,Ds),e(Ds,zp),e(Ds,Es),e(Es,jp),e(Ds,Mp),e(kt,Cp),e(kt,Dt),y(Fs,Dt,null),e(Dt,Pp),e(Dt,co),e(co,Bp),e(co,sr),e(sr,Rp),e(co,Ap),e(co,pi),e(pi,Lp),e(co,Ip),e(Dt,Sp),y(Ho,Dt,null),e(Dt,Op),y(Uo,Dt,null),_(o,Kl,b),_(o,po,b),e(po,Ko),e(Ko,hi),y(Vs,hi,null),e(po,Np),e(po,fi),e(fi,Wp),_(o,Ql,b),_(o,Pt,b),y(xs,Pt,null),e(Pt,Hp),e(Pt,mi),e(mi,Up),e(Pt,Kp),e(Pt,Et),y(qs,Et,null),e(Et,Qp),e(Et,ui),e(ui,Gp),e(Et,Jp),e(Et,gi),e(gi,Xp),e(Et,Yp),y(Qo,Et,null),_(o,Gl,b),_(o,ho,b),e(ho,Go),e(Go,_i),y(zs,_i,null),e(ho,Zp),e(ho,bi),e(bi,eh),_(o,Jl,b),_(o,vt,b),y(js,vt,null),e(vt,th),e(vt,fo),e(fo,oh),e(fo,ki),e(ki,nh),e(fo,sh),e(fo,Ms),e(Ms,ah),e(fo,rh),e(vt,ih),e(vt,Cs),e(Cs,lh),e(Cs,Ps),e(Ps,dh),e(Cs,ch),e(vt,ph),e(vt,ct),y(Bs,ct,null),e(ct,hh),e(ct,mo),e(mo,fh),e(mo,ar),e(ar,mh),e(mo,uh),e(mo,vi),e(vi,gh),e(mo,_h),e(ct,bh),y(Jo,ct,null),e(ct,kh),y(Xo,ct,null),e(ct,vh),y(Yo,ct,null),_(o,Xl,b),_(o,uo,b),e(uo,Zo),e(Zo,wi),y(Rs,wi,null),e(uo,wh),e(uo,Ti),e(Ti,Th),_(o,Yl,b),_(o,st,b),y(As,st,null),e(st,yh),e(st,yi),e(yi,$h),e(st,Dh),e(st,Ls),e(Ls,Eh),e(Ls,Is),e(Is,Fh),e(Ls,Vh),e(st,xh),e(st,Ss),e(Ss,qh),e(Ss,Os),e(Os,zh),e(Ss,jh),e(st,Mh),e(st,Xe),y(Ns,Xe,null),e(Xe,Ch),e(Xe,go),e(go,Ph),e(go,rr),e(rr,Bh),e(go,Rh),e(go,$i),e($i,Ah),e(go,Lh),e(Xe,Ih),y(en,Xe,null),e(Xe,Sh),y(tn,Xe,null),e(Xe,Oh),y(on,Xe,null),e(Xe,Nh),y(nn,Xe,null),e(Xe,Wh),y(sn,Xe,null),_(o,Zl,b),_(o,_o,b),e(_o,an),e(an,Di),y(Ws,Di,null),e(_o,Hh),e(_o,Ei),e(Ei,Uh),_(o,ed,b),_(o,at,b),y(Hs,at,null),e(at,Kh),e(at,Fi),e(Fi,Qh),e(at,Gh),e(at,Us),e(Us,Jh),e(Us,Ks),e(Ks,Xh),e(Us,Yh),e(at,Zh),e(at,Qs),e(Qs,ef),e(Qs,Gs),e(Gs,tf),e(Qs,of),e(at,nf),e(at,pt),y(Js,pt,null),e(pt,sf),e(pt,bo),e(bo,af),e(bo,ir),e(ir,rf),e(bo,lf),e(bo,Vi),e(Vi,df),e(bo,cf),e(pt,pf),y(rn,pt,null),e(pt,hf),y(ln,pt,null),e(pt,ff),y(dn,pt,null),_(o,td,b),_(o,ko,b),e(ko,cn),e(cn,xi),y(Xs,xi,null),e(ko,mf),e(ko,qi),e(qi,uf),_(o,od,b),_(o,rt,b),y(Ys,rt,null),e(rt,gf),e(rt,vo),e(vo,_f),e(vo,zi),e(zi,bf),e(vo,kf),e(vo,ji),e(ji,vf),e(vo,wf),e(rt,Tf),e(rt,Zs),e(Zs,yf),e(Zs,ea),e(ea,$f),e(Zs,Df),e(rt,Ef),e(rt,ta),e(ta,Ff),e(ta,oa),e(oa,Vf),e(ta,xf),e(rt,qf),e(rt,ht),y(na,ht,null),e(ht,zf),e(ht,wo),e(wo,jf),e(wo,lr),e(lr,Mf),e(wo,Cf),e(wo,Mi),e(Mi,Pf),e(wo,Bf),e(ht,Rf),y(pn,ht,null),e(ht,Af),y(hn,ht,null),e(ht,Lf),y(fn,ht,null),_(o,nd,b),_(o,To,b),e(To,mn),e(mn,Ci),y(sa,Ci,null),e(To,If),e(To,Pi),e(Pi,Sf),_(o,sd,b),_(o,it,b),y(aa,it,null),e(it,Of),e(it,Bi),e(Bi,Nf),e(it,Wf),e(it,ra),e(ra,Hf),e(ra,ia),e(ia,Uf),e(ra,Kf),e(it,Qf),e(it,la),e(la,Gf),e(la,da),e(da,Jf),e(la,Xf),e(it,Yf),e(it,Ft),y(ca,Ft,null),e(Ft,Zf),e(Ft,yo),e(yo,em),e(yo,dr),e(dr,tm),e(yo,om),e(yo,Ri),e(Ri,nm),e(yo,sm),e(Ft,am),y(un,Ft,null),e(Ft,rm),y(gn,Ft,null),_(o,ad,b),_(o,$o,b),e($o,_n),e(_n,Ai),y(pa,Ai,null),e($o,im),e($o,Li),e(Li,lm),_(o,rd,b),_(o,lt,b),y(ha,lt,null),e(lt,dm),e(lt,fa),e(fa,cm),e(fa,ma),e(ma,pm),e(fa,hm),e(lt,fm),e(lt,ua),e(ua,mm),e(ua,ga),e(ga,um),e(ua,gm),e(lt,_m),y(bn,lt,null),e(lt,bm),e(lt,Vt),y(_a,Vt,null),e(Vt,km),e(Vt,Do),e(Do,vm),e(Do,cr),e(cr,wm),e(Do,Tm),e(Do,Ii),e(Ii,ym),e(Do,$m),e(Vt,Dm),y(kn,Vt,null),e(Vt,Em),y(vn,Vt,null),_(o,id,b),_(o,Eo,b),e(Eo,wn),e(wn,Si),y(ba,Si,null),e(Eo,Fm),e(Eo,Oi),e(Oi,Vm),_(o,ld,b),_(o,Bt,b),y(ka,Bt,null),e(Bt,xm),e(Bt,Ni),e(Ni,qm),e(Bt,zm),e(Bt,xt),y(va,xt,null),e(xt,jm),e(xt,Wi),e(Wi,Mm),e(xt,Cm),e(xt,wa),e(wa,Pm),e(wa,Hi),e(Hi,Bm),e(wa,Rm),e(xt,Am),e(xt,wt),e(wt,Lm),e(wt,Ui),e(Ui,Im),e(wt,Sm),e(wt,Ki),e(Ki,Om),e(wt,Nm),e(wt,Qi),e(Qi,Wm),e(wt,Hm),e(wt,Gi),e(Gi,Um),e(wt,Km),_(o,dd,b),_(o,Fo,b),e(Fo,Tn),e(Tn,Ji),y(Ta,Ji,null),e(Fo,Qm),e(Fo,Xi),e(Xi,Gm),_(o,cd,b),_(o,dt,b),y(ya,dt,null),e(dt,Jm),e(dt,Vo),e(Vo,Xm),e(Vo,Yi),e(Yi,Ym),e(Vo,Zm),e(Vo,$a),e($a,eu),e(Vo,tu),e(dt,ou),e(dt,Da),e(Da,nu),e(Da,Ea),e(Ea,su),e(Da,au),e(dt,ru),y(yn,dt,null),e(dt,iu),e(dt,ft),y(Fa,ft,null),e(ft,lu),e(ft,xo),e(xo,du),e(xo,pr),e(pr,cu),e(xo,pu),e(xo,Zi),e(Zi,hu),e(xo,fu),e(ft,mu),y($n,ft,null),e(ft,uu),y(Dn,ft,null),e(ft,gu),y(En,ft,null),_(o,pd,b),_(o,qo,b),e(qo,Fn),e(Fn,el),y(Va,el,null),e(qo,_u),e(qo,tl),e(tl,bu),_(o,hd,b),_(o,et,b),y(xa,et,null),e(et,ku),e(et,ol),e(ol,vu),e(et,wu),e(et,qa),e(qa,Tu),e(qa,za),e(za,yu),e(qa,$u),e(et,Du),e(et,ja),e(ja,Eu),e(ja,Ma),e(Ma,Fu),e(ja,Vu),e(et,xu),y(Vn,et,null),e(et,qu),e(et,mt),y(Ca,mt,null),e(mt,zu),e(mt,zo),e(zo,ju),e(zo,hr),e(hr,Mu),e(zo,Cu),e(zo,nl),e(nl,Pu),e(zo,Bu),e(mt,Ru),y(xn,mt,null),e(mt,Au),y(qn,mt,null),e(mt,Lu),y(zn,mt,null),_(o,fd,b),_(o,jo,b),e(jo,jn),e(jn,sl),y(Pa,sl,null),e(jo,Iu),e(jo,al),e(al,Su),_(o,md,b),_(o,tt,b),y(Ba,tt,null),e(tt,Ou),e(tt,rl),e(rl,Nu),e(tt,Wu),e(tt,Ra),e(Ra,Hu),e(Ra,Aa),e(Aa,Uu),e(Ra,Ku),e(tt,Qu),e(tt,La),e(La,Gu),e(La,Ia),e(Ia,Ju),e(La,Xu),e(tt,Yu),y(Mn,tt,null),e(tt,Zu),e(tt,ut),y(Sa,ut,null),e(ut,eg),e(ut,Mo),e(Mo,tg),e(Mo,fr),e(fr,og),e(Mo,ng),e(Mo,il),e(il,sg),e(Mo,ag),e(ut,rg),y(Cn,ut,null),e(ut,ig),y(Pn,ut,null),e(ut,lg),y(Bn,ut,null),_(o,ud,b),_(o,Co,b),e(Co,Rn),e(Rn,ll),y(Oa,ll,null),e(Co,dg),e(Co,dl),e(dl,cg),_(o,gd,b),_(o,ot,b),y(Na,ot,null),e(ot,pg),e(ot,Po),e(Po,hg),e(Po,cl),e(cl,fg),e(Po,mg),e(Po,pl),e(pl,ug),e(Po,gg),e(ot,_g),e(ot,Wa),e(Wa,bg),e(Wa,Ha),e(Ha,kg),e(Wa,vg),e(ot,wg),e(ot,Ua),e(Ua,Tg),e(Ua,Ka),e(Ka,yg),e(Ua,$g),e(ot,Dg),y(An,ot,null),e(ot,Eg),e(ot,gt),y(Qa,gt,null),e(gt,Fg),e(gt,Bo),e(Bo,Vg),e(Bo,mr),e(mr,xg),e(Bo,qg),e(Bo,hl),e(hl,zg),e(Bo,jg),e(gt,Mg),y(Ln,gt,null),e(gt,Cg),y(In,gt,null),e(gt,Pg),y(Sn,gt,null),_d=!0},p(o,[b]){const Ga={};b&2&&(Ga.$$scope={dirty:b,ctx:o}),So.$set(Ga);const fl={};b&2&&(fl.$$scope={dirty:b,ctx:o}),No.$set(fl);const ml={};b&2&&(ml.$$scope={dirty:b,ctx:o}),Ho.$set(ml);const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),Uo.$set(ul);const Ja={};b&2&&(Ja.$$scope={dirty:b,ctx:o}),Qo.$set(Ja);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Jo.$set(gl);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),Xo.$set(_l);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),Yo.$set(bl);const Xa={};b&2&&(Xa.$$scope={dirty:b,ctx:o}),en.$set(Xa);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),tn.$set(kl);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),on.$set(vl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),nn.$set(wl);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),sn.$set(Tl);const Ya={};b&2&&(Ya.$$scope={dirty:b,ctx:o}),rn.$set(Ya);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),ln.$set(yl);const On={};b&2&&(On.$$scope={dirty:b,ctx:o}),dn.$set(On);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),pn.$set($l);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),hn.$set(Dl);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),fn.$set(El);const Tt={};b&2&&(Tt.$$scope={dirty:b,ctx:o}),un.$set(Tt);const Nn={};b&2&&(Nn.$$scope={dirty:b,ctx:o}),gn.$set(Nn);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),bn.$set(Fl);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),kn.$set(Vl);const ur={};b&2&&(ur.$$scope={dirty:b,ctx:o}),vn.$set(ur);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),yn.$set(xl);const gr={};b&2&&(gr.$$scope={dirty:b,ctx:o}),$n.$set(gr);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),Dn.$set(ql);const _r={};b&2&&(_r.$$scope={dirty:b,ctx:o}),En.$set(_r);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),Vn.$set(zl);const br={};b&2&&(br.$$scope={dirty:b,ctx:o}),xn.$set(br);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),qn.$set(jl);const Rt={};b&2&&(Rt.$$scope={dirty:b,ctx:o}),zn.$set(Rt);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),Mn.$set(Ml);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),Cn.$set(Cl);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),Pn.$set(Pl);const Za={};b&2&&(Za.$$scope={dirty:b,ctx:o}),Bn.$set(Za);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),An.$set(Bl);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:o}),Ln.$set(Rl);const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),In.$set(Al);const Ro={};b&2&&(Ro.$$scope={dirty:b,ctx:o}),Sn.$set(Ro)},i(o){_d||($(d.$$.fragment,o),$(F.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(ds.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(So.$$.fragment,o),$(fs.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(No.$$.fragment,o),$(ws.$$.fragment,o),$(Ts.$$.fragment,o),$(Fs.$$.fragment,o),$(Ho.$$.fragment,o),$(Uo.$$.fragment,o),$(Vs.$$.fragment,o),$(xs.$$.fragment,o),$(qs.$$.fragment,o),$(Qo.$$.fragment,o),$(zs.$$.fragment,o),$(js.$$.fragment,o),$(Bs.$$.fragment,o),$(Jo.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Rs.$$.fragment,o),$(As.$$.fragment,o),$(Ns.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(Ws.$$.fragment,o),$(Hs.$$.fragment,o),$(Js.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(na.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(fn.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(ca.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(bn.$$.fragment,o),$(_a.$$.fragment,o),$(kn.$$.fragment,o),$(vn.$$.fragment,o),$(ba.$$.fragment,o),$(ka.$$.fragment,o),$(va.$$.fragment,o),$(Ta.$$.fragment,o),$(ya.$$.fragment,o),$(yn.$$.fragment,o),$(Fa.$$.fragment,o),$($n.$$.fragment,o),$(Dn.$$.fragment,o),$(En.$$.fragment,o),$(Va.$$.fragment,o),$(xa.$$.fragment,o),$(Vn.$$.fragment,o),$(Ca.$$.fragment,o),$(xn.$$.fragment,o),$(qn.$$.fragment,o),$(zn.$$.fragment,o),$(Pa.$$.fragment,o),$(Ba.$$.fragment,o),$(Mn.$$.fragment,o),$(Sa.$$.fragment,o),$(Cn.$$.fragment,o),$(Pn.$$.fragment,o),$(Bn.$$.fragment,o),$(Oa.$$.fragment,o),$(Na.$$.fragment,o),$(An.$$.fragment,o),$(Qa.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),_d=!0)},o(o){D(d.$$.fragment,o),D(F.$$.fragment,o),D(os.$$.fragment,o),D(ns.$$.fragment,o),D(as.$$.fragment,o),D(rs.$$.fragment,o),D(ds.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(So.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(us.$$.fragment,o),D(bs.$$.fragment,o),D(vs.$$.fragment,o),D(No.$$.fragment,o),D(ws.$$.fragment,o),D(Ts.$$.fragment,o),D(Fs.$$.fragment,o),D(Ho.$$.fragment,o),D(Uo.$$.fragment,o),D(Vs.$$.fragment,o),D(xs.$$.fragment,o),D(qs.$$.fragment,o),D(Qo.$$.fragment,o),D(zs.$$.fragment,o),D(js.$$.fragment,o),D(Bs.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(Rs.$$.fragment,o),D(As.$$.fragment,o),D(Ns.$$.fragment,o),D(en.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(Ws.$$.fragment,o),D(Hs.$$.fragment,o),D(Js.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(dn.$$.fragment,o),D(Xs.$$.fragment,o),D(Ys.$$.fragment,o),D(na.$$.fragment,o),D(pn.$$.fragment,o),D(hn.$$.fragment,o),D(fn.$$.fragment,o),D(sa.$$.fragment,o),D(aa.$$.fragment,o),D(ca.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(pa.$$.fragment,o),D(ha.$$.fragment,o),D(bn.$$.fragment,o),D(_a.$$.fragment,o),D(kn.$$.fragment,o),D(vn.$$.fragment,o),D(ba.$$.fragment,o),D(ka.$$.fragment,o),D(va.$$.fragment,o),D(Ta.$$.fragment,o),D(ya.$$.fragment,o),D(yn.$$.fragment,o),D(Fa.$$.fragment,o),D($n.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D(Va.$$.fragment,o),D(xa.$$.fragment,o),D(Vn.$$.fragment,o),D(Ca.$$.fragment,o),D(xn.$$.fragment,o),D(qn.$$.fragment,o),D(zn.$$.fragment,o),D(Pa.$$.fragment,o),D(Ba.$$.fragment,o),D(Mn.$$.fragment,o),D(Sa.$$.fragment,o),D(Cn.$$.fragment,o),D(Pn.$$.fragment,o),D(Bn.$$.fragment,o),D(Oa.$$.fragment,o),D(Na.$$.fragment,o),D(An.$$.fragment,o),D(Qa.$$.fragment,o),D(Ln.$$.fragment,o),D(In.$$.fragment,o),D(Sn.$$.fragment,o),_d=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(pe),o&&t(A),E(F),o&&t(he),o&&t(I),o&&t(fe),o&&t(N),o&&t(me),o&&t(W),o&&t(ue),o&&t(te),o&&t(ge),o&&t(L),o&&t(_e),o&&t(H),o&&t(be),o&&t(C),o&&t(Ne),o&&t(Z),o&&t(Ll),o&&t(eo),E(os),o&&t(Il),o&&t(Ct),E(ns),o&&t(Sl),o&&t(no),E(as),o&&t(Ol),o&&t(Ze),E(rs),E(ds),E(ps),E(hs),E(So),E(fs),o&&t(Nl),o&&t(ro),E(ms),o&&t(Wl),o&&t(bt),E(us),E(bs),E(vs),E(No),o&&t(Hl),o&&t(lo),E(ws),o&&t(Ul),o&&t(kt),E(Ts),E(Fs),E(Ho),E(Uo),o&&t(Kl),o&&t(po),E(Vs),o&&t(Ql),o&&t(Pt),E(xs),E(qs),E(Qo),o&&t(Gl),o&&t(ho),E(zs),o&&t(Jl),o&&t(vt),E(js),E(Bs),E(Jo),E(Xo),E(Yo),o&&t(Xl),o&&t(uo),E(Rs),o&&t(Yl),o&&t(st),E(As),E(Ns),E(en),E(tn),E(on),E(nn),E(sn),o&&t(Zl),o&&t(_o),E(Ws),o&&t(ed),o&&t(at),E(Hs),E(Js),E(rn),E(ln),E(dn),o&&t(td),o&&t(ko),E(Xs),o&&t(od),o&&t(rt),E(Ys),E(na),E(pn),E(hn),E(fn),o&&t(nd),o&&t(To),E(sa),o&&t(sd),o&&t(it),E(aa),E(ca),E(un),E(gn),o&&t(ad),o&&t($o),E(pa),o&&t(rd),o&&t(lt),E(ha),E(bn),E(_a),E(kn),E(vn),o&&t(id),o&&t(Eo),E(ba),o&&t(ld),o&&t(Bt),E(ka),E(va),o&&t(dd),o&&t(Fo),E(Ta),o&&t(cd),o&&t(dt),E(ya),E(yn),E(Fa),E($n),E(Dn),E(En),o&&t(pd),o&&t(qo),E(Va),o&&t(hd),o&&t(et),E(xa),E(Vn),E(Ca),E(xn),E(qn),E(zn),o&&t(fd),o&&t(jo),E(Pa),o&&t(md),o&&t(tt),E(Ba),E(Mn),E(Sa),E(Cn),E(Pn),E(Bn),o&&t(ud),o&&t(Co),E(Oa),o&&t(gd),o&&t(ot),E(Na),E(An),E(Qa),E(Ln),E(In),E(Sn)}}}const Xb={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.DebertaV2ForMultipleChoice",title:"DebertaV2ForMultipleChoice"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function Yb(V){return db(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ak extends ab{constructor(l){super();rb(this,l,Yb,Jb,ib,{})}}export{ak as default,Xb as metadata};
