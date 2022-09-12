import{S as Sg,i as Ng,s as Wg,e as a,k as p,w as T,t as n,M as Hg,c as r,d as t,m as h,a as i,x as y,h as s,b as u,G as e,g as b,y as v,q as $,o as D,B as E,v as Kg,L as Be}from"../../chunks/vendor-hf-doc-builder.js";import{T as dt}from"../../chunks/Tip-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ot}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Qg(x){let l,g,c,f,w;return f=new Oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function Ug(x){let l,g,c,f,w;return f=new Oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function Gg(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function Vg(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function Jg(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function Xg(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function Yg(x){let l,g;return l=new Oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Zg(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function e_(x){let l,g,c,f,w;return f=new Oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function t_(x){let l,g;return l=new Oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function o_(x){let l,g,c,f,w;return f=new Oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function n_(x){let l,g;return l=new Oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function s_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function a_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function r_(x){let l,g;return l=new Oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.04</span>`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function i_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function l_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
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
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function d_(x){let l,g;return l=new Oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.14</span>`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function c_(x){let l,g,c,f,w,d,m,z,ye,fe,B,se,oe,F,ve,G,$e,ue,I,De,ie,V,Ee,ge,K,Fe,_e,Q,qe,be,ee,M,C,le,J,xe,ke,R,je,de,P,ze,W,Me,Ce,H,Pe,Ae,O,ne,S,he,Y,A,me,L,we,te;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=p(),m=a("ul"),z=a("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),B=a("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),$e=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=n("fit()"),ge=n(" and "),K=a("code"),Fe=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=a("code"),qe=n("Functional"),be=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),M=a("ul"),C=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),je=n("model(input_ids)"),de=p(),P=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Me=n("model([input_ids, attention_mask])"),Ce=n(" or "),H=a("code"),Pe=n("model([input_ids, attention_mask, token_type_ids])"),Ae=p(),O=a("li"),ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),he=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=p(),A=a("p"),me=n(`Note that when creating models and layers with
`),L=a("a"),we=n("subclassing"),te=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){l=r(_,"P",{});var q=i(l);g=s(q,"TensorFlow models and layers in "),c=r(q,"CODE",{});var ce=i(c);f=s(ce,"transformers"),ce.forEach(t),w=s(q," accept two formats as input:"),q.forEach(t),d=h(_),m=r(_,"UL",{});var ae=i(m);z=r(ae,"LI",{});var Ie=i(z);ye=s(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),fe=h(ae),B=r(ae,"LI",{});var We=i(B);se=s(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ae.forEach(t),oe=h(_),F=r(_,"P",{});var j=i(F);ve=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var Se=i(G);$e=s(Se,"model.fit()"),Se.forEach(t),ue=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var He=i(I);De=s(He,"model.fit()"),He.forEach(t),ie=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(j,"CODE",{});var Ke=i(V);Ee=s(Ke,"fit()"),Ke.forEach(t),ge=s(j," and "),K=r(j,"CODE",{});var Le=i(K);Fe=s(Le,"predict()"),Le.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var Qe=i(Q);qe=s(Qe,"Functional"),Qe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=h(_),M=r(_,"UL",{});var N=i(M);C=r(N,"LI",{});var X=i(C);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Te=i(J);xe=s(Te,"input_ids"),Te.forEach(t),ke=s(X," only and nothing else: "),R=r(X,"CODE",{});var Ue=i(R);je=s(Ue,"model(input_ids)"),Ue.forEach(t),X.forEach(t),de=h(N),P=r(N,"LI",{});var U=i(P);ze=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(U,"CODE",{});var Ge=i(W);Me=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),Ce=s(U," or "),H=r(U,"CODE",{});var Ve=i(H);Pe=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),Ae=h(N),O=r(N,"LI",{});var pe=i(O);ne=s(pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(pe,"CODE",{});var Je=i(S);he=s(Je,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Je.forEach(t),pe.forEach(t),N.forEach(t),Y=h(_),A=r(_,"P",{});var re=i(A);me=s(re,`Note that when creating models and layers with
`),L=r(re,"A",{href:!0,rel:!0});var Ne=i(L);we=s(Ne,"subclassing"),Ne.forEach(t),te=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(_,q){b(_,l,q),e(l,g),e(l,c),e(c,f),e(l,w),b(_,d,q),b(_,m,q),e(m,z),e(z,ye),e(m,fe),e(m,B),e(B,se),b(_,oe,q),b(_,F,q),e(F,ve),e(F,G),e(G,$e),e(F,ue),e(F,I),e(I,De),e(F,ie),e(F,V),e(V,Ee),e(F,ge),e(F,K),e(K,Fe),e(F,_e),e(F,Q),e(Q,qe),e(F,be),b(_,ee,q),b(_,M,q),e(M,C),e(C,le),e(C,J),e(J,xe),e(C,ke),e(C,R),e(R,je),e(M,de),e(M,P),e(P,ze),e(P,W),e(W,Me),e(P,Ce),e(P,H),e(H,Pe),e(M,Ae),e(M,O),e(O,ne),e(O,S),e(S,he),b(_,Y,q),b(_,A,q),e(A,me),e(A,L),e(L,we),e(A,te)},d(_){_&&t(l),_&&t(d),_&&t(m),_&&t(oe),_&&t(F),_&&t(ee),_&&t(M),_&&t(Y),_&&t(A)}}}function p_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function h_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function m_(x){let l,g,c,f,w,d,m,z,ye,fe,B,se,oe,F,ve,G,$e,ue,I,De,ie,V,Ee,ge,K,Fe,_e,Q,qe,be,ee,M,C,le,J,xe,ke,R,je,de,P,ze,W,Me,Ce,H,Pe,Ae,O,ne,S,he,Y,A,me,L,we,te;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=p(),m=a("ul"),z=a("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),B=a("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),$e=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=n("fit()"),ge=n(" and "),K=a("code"),Fe=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=a("code"),qe=n("Functional"),be=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),M=a("ul"),C=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),je=n("model(input_ids)"),de=p(),P=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Me=n("model([input_ids, attention_mask])"),Ce=n(" or "),H=a("code"),Pe=n("model([input_ids, attention_mask, token_type_ids])"),Ae=p(),O=a("li"),ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),he=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=p(),A=a("p"),me=n(`Note that when creating models and layers with
`),L=a("a"),we=n("subclassing"),te=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){l=r(_,"P",{});var q=i(l);g=s(q,"TensorFlow models and layers in "),c=r(q,"CODE",{});var ce=i(c);f=s(ce,"transformers"),ce.forEach(t),w=s(q," accept two formats as input:"),q.forEach(t),d=h(_),m=r(_,"UL",{});var ae=i(m);z=r(ae,"LI",{});var Ie=i(z);ye=s(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),fe=h(ae),B=r(ae,"LI",{});var We=i(B);se=s(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ae.forEach(t),oe=h(_),F=r(_,"P",{});var j=i(F);ve=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var Se=i(G);$e=s(Se,"model.fit()"),Se.forEach(t),ue=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var He=i(I);De=s(He,"model.fit()"),He.forEach(t),ie=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(j,"CODE",{});var Ke=i(V);Ee=s(Ke,"fit()"),Ke.forEach(t),ge=s(j," and "),K=r(j,"CODE",{});var Le=i(K);Fe=s(Le,"predict()"),Le.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var Qe=i(Q);qe=s(Qe,"Functional"),Qe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=h(_),M=r(_,"UL",{});var N=i(M);C=r(N,"LI",{});var X=i(C);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Te=i(J);xe=s(Te,"input_ids"),Te.forEach(t),ke=s(X," only and nothing else: "),R=r(X,"CODE",{});var Ue=i(R);je=s(Ue,"model(input_ids)"),Ue.forEach(t),X.forEach(t),de=h(N),P=r(N,"LI",{});var U=i(P);ze=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(U,"CODE",{});var Ge=i(W);Me=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),Ce=s(U," or "),H=r(U,"CODE",{});var Ve=i(H);Pe=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),Ae=h(N),O=r(N,"LI",{});var pe=i(O);ne=s(pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(pe,"CODE",{});var Je=i(S);he=s(Je,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Je.forEach(t),pe.forEach(t),N.forEach(t),Y=h(_),A=r(_,"P",{});var re=i(A);me=s(re,`Note that when creating models and layers with
`),L=r(re,"A",{href:!0,rel:!0});var Ne=i(L);we=s(Ne,"subclassing"),Ne.forEach(t),te=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(_,q){b(_,l,q),e(l,g),e(l,c),e(c,f),e(l,w),b(_,d,q),b(_,m,q),e(m,z),e(z,ye),e(m,fe),e(m,B),e(B,se),b(_,oe,q),b(_,F,q),e(F,ve),e(F,G),e(G,$e),e(F,ue),e(F,I),e(I,De),e(F,ie),e(F,V),e(V,Ee),e(F,ge),e(F,K),e(K,Fe),e(F,_e),e(F,Q),e(Q,qe),e(F,be),b(_,ee,q),b(_,M,q),e(M,C),e(C,le),e(C,J),e(J,xe),e(C,ke),e(C,R),e(R,je),e(M,de),e(M,P),e(P,ze),e(P,W),e(W,Me),e(P,Ce),e(P,H),e(H,Pe),e(M,Ae),e(M,O),e(O,ne),e(O,S),e(S,he),b(_,Y,q),b(_,A,q),e(A,me),e(A,L),e(L,we),e(A,te)},d(_){_&&t(l),_&&t(d),_&&t(m),_&&t(oe),_&&t(F),_&&t(ee),_&&t(M),_&&t(Y),_&&t(A)}}}function f_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function u_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function g_(x){let l,g;return l=new Oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function __(x){let l,g,c,f,w,d,m,z,ye,fe,B,se,oe,F,ve,G,$e,ue,I,De,ie,V,Ee,ge,K,Fe,_e,Q,qe,be,ee,M,C,le,J,xe,ke,R,je,de,P,ze,W,Me,Ce,H,Pe,Ae,O,ne,S,he,Y,A,me,L,we,te;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=p(),m=a("ul"),z=a("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),B=a("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),$e=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=n("fit()"),ge=n(" and "),K=a("code"),Fe=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=a("code"),qe=n("Functional"),be=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),M=a("ul"),C=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),je=n("model(input_ids)"),de=p(),P=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Me=n("model([input_ids, attention_mask])"),Ce=n(" or "),H=a("code"),Pe=n("model([input_ids, attention_mask, token_type_ids])"),Ae=p(),O=a("li"),ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),he=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=p(),A=a("p"),me=n(`Note that when creating models and layers with
`),L=a("a"),we=n("subclassing"),te=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){l=r(_,"P",{});var q=i(l);g=s(q,"TensorFlow models and layers in "),c=r(q,"CODE",{});var ce=i(c);f=s(ce,"transformers"),ce.forEach(t),w=s(q," accept two formats as input:"),q.forEach(t),d=h(_),m=r(_,"UL",{});var ae=i(m);z=r(ae,"LI",{});var Ie=i(z);ye=s(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),fe=h(ae),B=r(ae,"LI",{});var We=i(B);se=s(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ae.forEach(t),oe=h(_),F=r(_,"P",{});var j=i(F);ve=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var Se=i(G);$e=s(Se,"model.fit()"),Se.forEach(t),ue=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var He=i(I);De=s(He,"model.fit()"),He.forEach(t),ie=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(j,"CODE",{});var Ke=i(V);Ee=s(Ke,"fit()"),Ke.forEach(t),ge=s(j," and "),K=r(j,"CODE",{});var Le=i(K);Fe=s(Le,"predict()"),Le.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var Qe=i(Q);qe=s(Qe,"Functional"),Qe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=h(_),M=r(_,"UL",{});var N=i(M);C=r(N,"LI",{});var X=i(C);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Te=i(J);xe=s(Te,"input_ids"),Te.forEach(t),ke=s(X," only and nothing else: "),R=r(X,"CODE",{});var Ue=i(R);je=s(Ue,"model(input_ids)"),Ue.forEach(t),X.forEach(t),de=h(N),P=r(N,"LI",{});var U=i(P);ze=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(U,"CODE",{});var Ge=i(W);Me=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),Ce=s(U," or "),H=r(U,"CODE",{});var Ve=i(H);Pe=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),Ae=h(N),O=r(N,"LI",{});var pe=i(O);ne=s(pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(pe,"CODE",{});var Je=i(S);he=s(Je,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Je.forEach(t),pe.forEach(t),N.forEach(t),Y=h(_),A=r(_,"P",{});var re=i(A);me=s(re,`Note that when creating models and layers with
`),L=r(re,"A",{href:!0,rel:!0});var Ne=i(L);we=s(Ne,"subclassing"),Ne.forEach(t),te=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(_,q){b(_,l,q),e(l,g),e(l,c),e(c,f),e(l,w),b(_,d,q),b(_,m,q),e(m,z),e(z,ye),e(m,fe),e(m,B),e(B,se),b(_,oe,q),b(_,F,q),e(F,ve),e(F,G),e(G,$e),e(F,ue),e(F,I),e(I,De),e(F,ie),e(F,V),e(V,Ee),e(F,ge),e(F,K),e(K,Fe),e(F,_e),e(F,Q),e(Q,qe),e(F,be),b(_,ee,q),b(_,M,q),e(M,C),e(C,le),e(C,J),e(J,xe),e(C,ke),e(C,R),e(R,je),e(M,de),e(M,P),e(P,ze),e(P,W),e(W,Me),e(P,Ce),e(P,H),e(H,Pe),e(M,Ae),e(M,O),e(O,ne),e(O,S),e(S,he),b(_,Y,q),b(_,A,q),e(A,me),e(A,L),e(L,we),e(A,te)},d(_){_&&t(l),_&&t(d),_&&t(m),_&&t(oe),_&&t(F),_&&t(ee),_&&t(M),_&&t(Y),_&&t(A)}}}function b_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function k_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function w_(x){let l,g;return l=new Oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function T_(x){let l,g,c,f,w,d,m,z,ye,fe,B,se,oe,F,ve,G,$e,ue,I,De,ie,V,Ee,ge,K,Fe,_e,Q,qe,be,ee,M,C,le,J,xe,ke,R,je,de,P,ze,W,Me,Ce,H,Pe,Ae,O,ne,S,he,Y,A,me,L,we,te;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=p(),m=a("ul"),z=a("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),B=a("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),$e=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=n("fit()"),ge=n(" and "),K=a("code"),Fe=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=a("code"),qe=n("Functional"),be=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),M=a("ul"),C=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),je=n("model(input_ids)"),de=p(),P=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Me=n("model([input_ids, attention_mask])"),Ce=n(" or "),H=a("code"),Pe=n("model([input_ids, attention_mask, token_type_ids])"),Ae=p(),O=a("li"),ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),he=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=p(),A=a("p"),me=n(`Note that when creating models and layers with
`),L=a("a"),we=n("subclassing"),te=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){l=r(_,"P",{});var q=i(l);g=s(q,"TensorFlow models and layers in "),c=r(q,"CODE",{});var ce=i(c);f=s(ce,"transformers"),ce.forEach(t),w=s(q," accept two formats as input:"),q.forEach(t),d=h(_),m=r(_,"UL",{});var ae=i(m);z=r(ae,"LI",{});var Ie=i(z);ye=s(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),fe=h(ae),B=r(ae,"LI",{});var We=i(B);se=s(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ae.forEach(t),oe=h(_),F=r(_,"P",{});var j=i(F);ve=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var Se=i(G);$e=s(Se,"model.fit()"),Se.forEach(t),ue=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var He=i(I);De=s(He,"model.fit()"),He.forEach(t),ie=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(j,"CODE",{});var Ke=i(V);Ee=s(Ke,"fit()"),Ke.forEach(t),ge=s(j," and "),K=r(j,"CODE",{});var Le=i(K);Fe=s(Le,"predict()"),Le.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var Qe=i(Q);qe=s(Qe,"Functional"),Qe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=h(_),M=r(_,"UL",{});var N=i(M);C=r(N,"LI",{});var X=i(C);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Te=i(J);xe=s(Te,"input_ids"),Te.forEach(t),ke=s(X," only and nothing else: "),R=r(X,"CODE",{});var Ue=i(R);je=s(Ue,"model(input_ids)"),Ue.forEach(t),X.forEach(t),de=h(N),P=r(N,"LI",{});var U=i(P);ze=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(U,"CODE",{});var Ge=i(W);Me=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),Ce=s(U," or "),H=r(U,"CODE",{});var Ve=i(H);Pe=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),Ae=h(N),O=r(N,"LI",{});var pe=i(O);ne=s(pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(pe,"CODE",{});var Je=i(S);he=s(Je,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Je.forEach(t),pe.forEach(t),N.forEach(t),Y=h(_),A=r(_,"P",{});var re=i(A);me=s(re,`Note that when creating models and layers with
`),L=r(re,"A",{href:!0,rel:!0});var Ne=i(L);we=s(Ne,"subclassing"),Ne.forEach(t),te=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(_,q){b(_,l,q),e(l,g),e(l,c),e(c,f),e(l,w),b(_,d,q),b(_,m,q),e(m,z),e(z,ye),e(m,fe),e(m,B),e(B,se),b(_,oe,q),b(_,F,q),e(F,ve),e(F,G),e(G,$e),e(F,ue),e(F,I),e(I,De),e(F,ie),e(F,V),e(V,Ee),e(F,ge),e(F,K),e(K,Fe),e(F,_e),e(F,Q),e(Q,qe),e(F,be),b(_,ee,q),b(_,M,q),e(M,C),e(C,le),e(C,J),e(J,xe),e(C,ke),e(C,R),e(R,je),e(M,de),e(M,P),e(P,ze),e(P,W),e(W,Me),e(P,Ce),e(P,H),e(H,Pe),e(M,Ae),e(M,O),e(O,ne),e(O,S),e(S,he),b(_,Y,q),b(_,A,q),e(A,me),e(A,L),e(L,we),e(A,te)},d(_){_&&t(l),_&&t(d),_&&t(m),_&&t(oe),_&&t(F),_&&t(ee),_&&t(M),_&&t(Y),_&&t(A)}}}function y_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function v_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function $_(x){let l,g;return l=new Oe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function D_(x){let l,g,c,f,w,d,m,z,ye,fe,B,se,oe,F,ve,G,$e,ue,I,De,ie,V,Ee,ge,K,Fe,_e,Q,qe,be,ee,M,C,le,J,xe,ke,R,je,de,P,ze,W,Me,Ce,H,Pe,Ae,O,ne,S,he,Y,A,me,L,we,te;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=p(),m=a("ul"),z=a("li"),ye=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),B=a("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=p(),F=a("p"),ve=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),$e=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),De=n("model.fit()"),ie=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=n("fit()"),ge=n(" and "),K=a("code"),Fe=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=a("code"),qe=n("Functional"),be=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),M=a("ul"),C=a("li"),le=n("a single Tensor with "),J=a("code"),xe=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),je=n("model(input_ids)"),de=p(),P=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Me=n("model([input_ids, attention_mask])"),Ce=n(" or "),H=a("code"),Pe=n("model([input_ids, attention_mask, token_type_ids])"),Ae=p(),O=a("li"),ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),he=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=p(),A=a("p"),me=n(`Note that when creating models and layers with
`),L=a("a"),we=n("subclassing"),te=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){l=r(_,"P",{});var q=i(l);g=s(q,"TensorFlow models and layers in "),c=r(q,"CODE",{});var ce=i(c);f=s(ce,"transformers"),ce.forEach(t),w=s(q," accept two formats as input:"),q.forEach(t),d=h(_),m=r(_,"UL",{});var ae=i(m);z=r(ae,"LI",{});var Ie=i(z);ye=s(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),fe=h(ae),B=r(ae,"LI",{});var We=i(B);se=s(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ae.forEach(t),oe=h(_),F=r(_,"P",{});var j=i(F);ve=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var Se=i(G);$e=s(Se,"model.fit()"),Se.forEach(t),ue=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var He=i(I);De=s(He,"model.fit()"),He.forEach(t),ie=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(j,"CODE",{});var Ke=i(V);Ee=s(Ke,"fit()"),Ke.forEach(t),ge=s(j," and "),K=r(j,"CODE",{});var Le=i(K);Fe=s(Le,"predict()"),Le.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var Qe=i(Q);qe=s(Qe,"Functional"),Qe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=h(_),M=r(_,"UL",{});var N=i(M);C=r(N,"LI",{});var X=i(C);le=s(X,"a single Tensor with "),J=r(X,"CODE",{});var Te=i(J);xe=s(Te,"input_ids"),Te.forEach(t),ke=s(X," only and nothing else: "),R=r(X,"CODE",{});var Ue=i(R);je=s(Ue,"model(input_ids)"),Ue.forEach(t),X.forEach(t),de=h(N),P=r(N,"LI",{});var U=i(P);ze=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(U,"CODE",{});var Ge=i(W);Me=s(Ge,"model([input_ids, attention_mask])"),Ge.forEach(t),Ce=s(U," or "),H=r(U,"CODE",{});var Ve=i(H);Pe=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),Ae=h(N),O=r(N,"LI",{});var pe=i(O);ne=s(pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(pe,"CODE",{});var Je=i(S);he=s(Je,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Je.forEach(t),pe.forEach(t),N.forEach(t),Y=h(_),A=r(_,"P",{});var re=i(A);me=s(re,`Note that when creating models and layers with
`),L=r(re,"A",{href:!0,rel:!0});var Ne=i(L);we=s(Ne,"subclassing"),Ne.forEach(t),te=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(_,q){b(_,l,q),e(l,g),e(l,c),e(c,f),e(l,w),b(_,d,q),b(_,m,q),e(m,z),e(z,ye),e(m,fe),e(m,B),e(B,se),b(_,oe,q),b(_,F,q),e(F,ve),e(F,G),e(G,$e),e(F,ue),e(F,I),e(I,De),e(F,ie),e(F,V),e(V,Ee),e(F,ge),e(F,K),e(K,Fe),e(F,_e),e(F,Q),e(Q,qe),e(F,be),b(_,ee,q),b(_,M,q),e(M,C),e(C,le),e(C,J),e(J,xe),e(C,ke),e(C,R),e(R,je),e(M,de),e(M,P),e(P,ze),e(P,W),e(W,Me),e(P,Ce),e(P,H),e(H,Pe),e(M,Ae),e(M,O),e(O,ne),e(O,S),e(S,he),b(_,Y,q),b(_,A,q),e(A,me),e(A,L),e(L,we),e(A,te)},d(_){_&&t(l),_&&t(d),_&&t(m),_&&t(oe),_&&t(F),_&&t(ee),_&&t(M),_&&t(Y),_&&t(A)}}}function E_(x){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function F_(x){let l,g,c,f,w;return f=new Oe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),y(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),v(f,d,m),w=!0},p:Be,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){D(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function q_(x){let l,g;return l=new Oe({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,f){v(l,c,f),g=!0},p:Be,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function x_(x){let l,g,c,f,w,d,m,z,ye,fe,B,se,oe,F,ve,G,$e,ue,I,De,ie,V,Ee,ge,K,Fe,_e,Q,qe,be,ee,M,C,le,J,xe,ke,R,je,de,P,ze,W,Me,Ce,H,Pe,Ae,O,ne,S,he,Y,A,me,L,we,te,_,q,ce,ae,Ie,We,j,Se,He,Ke,Le,Qe,N,X,Te,Ue,U,Ge,Ve,pe,Je,re,Ne,Gt,xo,Ya,Ln,Zl,Za,ed,Ni,Ye,Rn,td,er,od,nd,Ct,Bn,sd,tr,ad,rd,On,or,id,ld,nr,dd,cd,jo,In,pd,Vt,hd,sr,md,fd,ar,ud,gd,_d,yt,Sn,bd,rr,kd,wd,zo,Td,Jt,yd,ir,vd,$d,lr,Dd,Ed,Fd,Ta,Nn,Wi,Xt,Mo,dr,Wn,qd,cr,xd,Hi,bt,Hn,jd,Kn,zd,pr,Md,Cd,Pd,Pt,Qn,Ad,hr,Ld,Rd,Un,mr,Bd,Od,fr,Id,Sd,vt,Gn,Nd,ur,Wd,Hd,Co,Kd,Yt,Qd,gr,Ud,Gd,_r,Vd,Jd,Ki,Zt,Po,br,Vn,Xd,kr,Yd,Qi,kt,Jn,Zd,Xn,ec,Yn,tc,oc,nc,Zn,sc,es,ac,rc,ic,$t,ts,lc,eo,dc,ya,cc,pc,wr,hc,mc,fc,Ao,uc,Lo,Ui,to,Ro,Tr,os,gc,yr,_c,Gi,oo,ns,bc,vr,kc,Vi,no,Bo,$r,ss,wc,Dr,Tc,Ji,wt,as,yc,so,vc,Er,$c,Dc,rs,Ec,Fc,qc,is,xc,ls,jc,zc,Mc,ct,ds,Cc,ao,Pc,va,Ac,Lc,Fr,Rc,Bc,Oc,Oo,Ic,Io,Sc,So,Xi,ro,No,qr,cs,Nc,xr,Wc,Yi,nt,ps,Hc,jr,Kc,Qc,hs,Uc,ms,Gc,Vc,Jc,fs,Xc,us,Yc,Zc,ep,Xe,gs,tp,io,op,$a,np,sp,zr,ap,rp,ip,Wo,lp,Ho,dp,Ko,cp,Qo,pp,Uo,Zi,lo,Go,Mr,_s,hp,Cr,mp,el,st,bs,fp,Pr,up,gp,ks,_p,ws,bp,kp,wp,Ts,Tp,ys,yp,vp,$p,pt,vs,Dp,co,Ep,Da,Fp,qp,Ar,xp,jp,zp,Vo,Mp,Jo,Cp,Xo,tl,po,Yo,Lr,$s,Pp,Rr,Ap,ol,at,Ds,Lp,ho,Rp,Br,Bp,Op,Or,Ip,Sp,Np,Es,Wp,Fs,Hp,Kp,Qp,qs,Up,xs,Gp,Vp,Jp,ht,js,Xp,mo,Yp,Ea,Zp,eh,Ir,th,oh,nh,Zo,sh,en,ah,tn,nl,fo,on,Sr,zs,rh,Nr,ih,sl,rt,Ms,lh,Cs,dh,Ps,ch,ph,hh,As,mh,Ls,fh,uh,gh,nn,_h,Dt,Rs,bh,uo,kh,Fa,wh,Th,Wr,yh,vh,$h,sn,Dh,an,al,go,rn,Hr,Bs,Eh,Kr,Fh,rl,jt,Os,qh,Qr,xh,jh,Et,Is,zh,Ur,Mh,Ch,Ss,Ph,Gr,Ah,Lh,Rh,Tt,Bh,Vr,Oh,Ih,Jr,Sh,Nh,Xr,Wh,Hh,Yr,Kh,Qh,il,_o,ln,Zr,Ns,Uh,ei,Gh,ll,it,Ws,Vh,bo,Jh,ti,Xh,Yh,Hs,Zh,em,tm,Ks,om,Qs,nm,sm,am,dn,rm,mt,Us,im,ko,lm,qa,dm,cm,oi,pm,hm,mm,cn,fm,pn,um,hn,dl,wo,mn,ni,Gs,gm,si,_m,cl,Ze,Vs,bm,ai,km,wm,Js,Tm,Xs,ym,vm,$m,Ys,Dm,Zs,Em,Fm,qm,fn,xm,ft,ea,jm,To,zm,xa,Mm,Cm,ri,Pm,Am,Lm,un,Rm,gn,Bm,_n,pl,yo,bn,ii,ta,Om,li,Im,hl,et,oa,Sm,di,Nm,Wm,na,Hm,sa,Km,Qm,Um,aa,Gm,ra,Vm,Jm,Xm,kn,Ym,ut,ia,Zm,vo,ef,ja,tf,of,ci,nf,sf,af,wn,rf,Tn,lf,yn,ml,$o,vn,pi,la,df,hi,cf,fl,tt,da,pf,Do,hf,mi,mf,ff,fi,uf,gf,_f,ca,bf,pa,kf,wf,Tf,ha,yf,ma,vf,$f,Df,$n,Ef,gt,fa,Ff,Eo,qf,za,xf,jf,ui,zf,Mf,Cf,Dn,Pf,En,Af,Fn,ul;return d=new ot({}),F=new ot({}),Y=new ot({}),_=new Z({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L40"}}),Ln=new ot({}),Rn=new Z({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L66"}}),Bn=new Z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L137",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),In=new Z({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L162",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new Z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L189",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new Re({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Qg]},$$scope:{ctx:x}}}),Nn=new Z({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L288"}}),Wn=new ot({}),Hn=new Z({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L67"}}),Qn=new Z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L158",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new Z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L183",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Co=new Re({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Ug]},$$scope:{ctx:x}}}),Vn=new ot({}),Jn=new Z({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L927"}}),ts=new Z({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ao=new dt({props:{$$slots:{default:[Gg]},$$scope:{ctx:x}}}),Lo=new Re({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[Vg]},$$scope:{ctx:x}}}),os=new ot({}),ns=new Z({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L832"}}),ss=new ot({}),as=new Z({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1039"}}),ds=new Z({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Oo=new dt({props:{$$slots:{default:[Jg]},$$scope:{ctx:x}}}),Io=new Re({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[Xg]},$$scope:{ctx:x}}}),So=new Re({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[Yg]},$$scope:{ctx:x}}}),cs=new ot({}),ps=new Z({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1177"}}),gs=new Z({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Wo=new dt({props:{$$slots:{default:[Zg]},$$scope:{ctx:x}}}),Ho=new Re({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[e_]},$$scope:{ctx:x}}}),Ko=new Re({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[t_]},$$scope:{ctx:x}}}),Qo=new Re({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[o_]},$$scope:{ctx:x}}}),Uo=new Re({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[n_]},$$scope:{ctx:x}}}),_s=new ot({}),bs=new Z({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1298"}}),vs=new Z({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vo=new dt({props:{$$slots:{default:[s_]},$$scope:{ctx:x}}}),Jo=new Re({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[a_]},$$scope:{ctx:x}}}),Xo=new Re({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[r_]},$$scope:{ctx:x}}}),$s=new ot({}),Ds=new Z({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1376"}}),js=new Z({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Zo=new dt({props:{$$slots:{default:[i_]},$$scope:{ctx:x}}}),en=new Re({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[l_]},$$scope:{ctx:x}}}),tn=new Re({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[d_]},$$scope:{ctx:x}}}),zs=new ot({}),Ms=new Z({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1085"}}),nn=new dt({props:{$$slots:{default:[c_]},$$scope:{ctx:x}}}),Rs=new Z({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1091",returnDescription:`
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
`}}),sn=new dt({props:{$$slots:{default:[p_]},$$scope:{ctx:x}}}),an=new Re({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[h_]},$$scope:{ctx:x}}}),Bs=new ot({}),Os=new Z({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L985"}}),Is=new Z({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L559",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Ns=new ot({}),Ws=new Z({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1133"}}),dn=new dt({props:{$$slots:{default:[m_]},$$scope:{ctx:x}}}),Us=new Z({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1149",returnDescription:`
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
`}}),cn=new dt({props:{$$slots:{default:[f_]},$$scope:{ctx:x}}}),pn=new Re({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[u_]},$$scope:{ctx:x}}}),hn=new Re({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[g_]},$$scope:{ctx:x}}}),Gs=new ot({}),Vs=new Z({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1216"}}),fn=new dt({props:{$$slots:{default:[__]},$$scope:{ctx:x}}}),ea=new Z({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1234",returnDescription:`
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
`}}),un=new dt({props:{$$slots:{default:[b_]},$$scope:{ctx:x}}}),gn=new Re({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[k_]},$$scope:{ctx:x}}}),_n=new Re({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[w_]},$$scope:{ctx:x}}}),ta=new ot({}),oa=new Z({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1304"}}),kn=new dt({props:{$$slots:{default:[T_]},$$scope:{ctx:x}}}),ia=new Z({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1316",returnDescription:`
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
`}}),wn=new dt({props:{$$slots:{default:[y_]},$$scope:{ctx:x}}}),Tn=new Re({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[v_]},$$scope:{ctx:x}}}),yn=new Re({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[$_]},$$scope:{ctx:x}}}),la=new ot({}),da=new Z({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1382"}}),$n=new dt({props:{$$slots:{default:[D_]},$$scope:{ctx:x}}}),fa=new Z({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1393",returnDescription:`
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
`}}),Dn=new dt({props:{$$slots:{default:[E_]},$$scope:{ctx:x}}}),En=new Re({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[F_]},$$scope:{ctx:x}}}),Fn=new Re({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:x}}}),{c(){l=a("meta"),g=p(),c=a("h1"),f=a("a"),w=a("span"),T(d.$$.fragment),m=p(),z=a("span"),ye=n("DeBERTa"),fe=p(),B=a("h2"),se=a("a"),oe=a("span"),T(F.$$.fragment),ve=p(),G=a("span"),$e=n("Overview"),ue=p(),I=a("p"),De=n("The DeBERTa model was proposed in "),ie=a("a"),V=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Ee=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ge=p(),K=a("p"),Fe=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),_e=p(),Q=a("p"),qe=n("The abstract from the paper is the following:"),be=p(),ee=a("p"),M=a("em"),C=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),le=a("a"),J=n("https://github.com/microsoft/DeBERTa"),xe=n("."),ke=p(),R=a("p"),je=n("This model was contributed by "),de=a("a"),P=n("DeBERTa"),ze=n(`. This model TF 2.0 implementation was
contributed by `),W=a("a"),Me=n("kamalkraj"),Ce=n(" . The original code can be found "),H=a("a"),Pe=n("here"),Ae=n("."),O=p(),ne=a("h2"),S=a("a"),he=a("span"),T(Y.$$.fragment),A=p(),me=a("span"),L=n("DebertaConfig"),we=p(),te=a("div"),T(_.$$.fragment),q=p(),ce=a("p"),ae=n("This is the configuration class to store the configuration of a "),Ie=a("a"),We=n("DebertaModel"),j=n(" or a "),Se=a("a"),He=n("TFDebertaModel"),Ke=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Le=a("a"),Qe=n("microsoft/deberta-base"),N=n(" architecture."),X=p(),Te=a("p"),Ue=n("Configuration objects inherit from "),U=a("a"),Ge=n("PretrainedConfig"),Ve=n(` and can be used to control the model outputs. Read the
documentation from `),pe=a("a"),Je=n("PretrainedConfig"),re=n(" for more information."),Ne=p(),Gt=a("h2"),xo=a("a"),Ya=a("span"),T(Ln.$$.fragment),Zl=p(),Za=a("span"),ed=n("DebertaTokenizer"),Ni=p(),Ye=a("div"),T(Rn.$$.fragment),td=p(),er=a("p"),od=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),nd=p(),Ct=a("div"),T(Bn.$$.fragment),sd=p(),tr=a("p"),ad=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),rd=p(),On=a("ul"),or=a("li"),id=n("single sequence: [CLS] X [SEP]"),ld=p(),nr=a("li"),dd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),cd=p(),jo=a("div"),T(In.$$.fragment),pd=p(),Vt=a("p"),hd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),sr=a("code"),md=n("prepare_for_model"),fd=n(" or "),ar=a("code"),ud=n("encode_plus"),gd=n(" methods."),_d=p(),yt=a("div"),T(Sn.$$.fragment),bd=p(),rr=a("p"),kd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),wd=p(),T(zo.$$.fragment),Td=p(),Jt=a("p"),yd=n("If "),ir=a("code"),vd=n("token_ids_1"),$d=n(" is "),lr=a("code"),Dd=n("None"),Ed=n(", this method only returns the first portion of the mask (0s)."),Fd=p(),Ta=a("div"),T(Nn.$$.fragment),Wi=p(),Xt=a("h2"),Mo=a("a"),dr=a("span"),T(Wn.$$.fragment),qd=p(),cr=a("span"),xd=n("DebertaTokenizerFast"),Hi=p(),bt=a("div"),T(Hn.$$.fragment),jd=p(),Kn=a("p"),zd=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),pr=a("em"),Md=n("tokenizers"),Cd=n(" library."),Pd=p(),Pt=a("div"),T(Qn.$$.fragment),Ad=p(),hr=a("p"),Ld=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Rd=p(),Un=a("ul"),mr=a("li"),Bd=n("single sequence: [CLS] X [SEP]"),Od=p(),fr=a("li"),Id=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Sd=p(),vt=a("div"),T(Gn.$$.fragment),Nd=p(),ur=a("p"),Wd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Hd=p(),T(Co.$$.fragment),Kd=p(),Yt=a("p"),Qd=n("If "),gr=a("code"),Ud=n("token_ids_1"),Gd=n(" is "),_r=a("code"),Vd=n("None"),Jd=n(", this method only returns the first portion of the mask (0s)."),Ki=p(),Zt=a("h2"),Po=a("a"),br=a("span"),T(Vn.$$.fragment),Xd=p(),kr=a("span"),Yd=n("DebertaModel"),Qi=p(),kt=a("div"),T(Jn.$$.fragment),Zd=p(),Xn=a("p"),ec=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=a("a"),tc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),oc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nc=p(),Zn=a("p"),sc=n("This model is also a PyTorch "),es=a("a"),ac=n("torch.nn.Module"),rc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ic=p(),$t=a("div"),T(ts.$$.fragment),lc=p(),eo=a("p"),dc=n("The "),ya=a("a"),cc=n("DebertaModel"),pc=n(" forward method, overrides the "),wr=a("code"),hc=n("__call__"),mc=n(" special method."),fc=p(),T(Ao.$$.fragment),uc=p(),T(Lo.$$.fragment),Ui=p(),to=a("h2"),Ro=a("a"),Tr=a("span"),T(os.$$.fragment),gc=p(),yr=a("span"),_c=n("DebertaPreTrainedModel"),Gi=p(),oo=a("div"),T(ns.$$.fragment),bc=p(),vr=a("p"),kc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Vi=p(),no=a("h2"),Bo=a("a"),$r=a("span"),T(ss.$$.fragment),wc=p(),Dr=a("span"),Tc=n("DebertaForMaskedLM"),Ji=p(),wt=a("div"),T(as.$$.fragment),yc=p(),so=a("p"),vc=n("DeBERTa Model with a "),Er=a("code"),$c=n("language modeling"),Dc=n(` head on top.
The DeBERTa model was proposed in `),rs=a("a"),Ec=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qc=p(),is=a("p"),xc=n("This model is also a PyTorch "),ls=a("a"),jc=n("torch.nn.Module"),zc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mc=p(),ct=a("div"),T(ds.$$.fragment),Cc=p(),ao=a("p"),Pc=n("The "),va=a("a"),Ac=n("DebertaForMaskedLM"),Lc=n(" forward method, overrides the "),Fr=a("code"),Rc=n("__call__"),Bc=n(" special method."),Oc=p(),T(Oo.$$.fragment),Ic=p(),T(Io.$$.fragment),Sc=p(),T(So.$$.fragment),Xi=p(),ro=a("h2"),No=a("a"),qr=a("span"),T(cs.$$.fragment),Nc=p(),xr=a("span"),Wc=n("DebertaForSequenceClassification"),Yi=p(),nt=a("div"),T(ps.$$.fragment),Hc=p(),jr=a("p"),Kc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qc=p(),hs=a("p"),Uc=n("The DeBERTa model was proposed in "),ms=a("a"),Gc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=p(),fs=a("p"),Xc=n("This model is also a PyTorch "),us=a("a"),Yc=n("torch.nn.Module"),Zc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ep=p(),Xe=a("div"),T(gs.$$.fragment),tp=p(),io=a("p"),op=n("The "),$a=a("a"),np=n("DebertaForSequenceClassification"),sp=n(" forward method, overrides the "),zr=a("code"),ap=n("__call__"),rp=n(" special method."),ip=p(),T(Wo.$$.fragment),lp=p(),T(Ho.$$.fragment),dp=p(),T(Ko.$$.fragment),cp=p(),T(Qo.$$.fragment),pp=p(),T(Uo.$$.fragment),Zi=p(),lo=a("h2"),Go=a("a"),Mr=a("span"),T(_s.$$.fragment),hp=p(),Cr=a("span"),mp=n("DebertaForTokenClassification"),el=p(),st=a("div"),T(bs.$$.fragment),fp=p(),Pr=a("p"),up=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gp=p(),ks=a("p"),_p=n("The DeBERTa model was proposed in "),ws=a("a"),bp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wp=p(),Ts=a("p"),Tp=n("This model is also a PyTorch "),ys=a("a"),yp=n("torch.nn.Module"),vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$p=p(),pt=a("div"),T(vs.$$.fragment),Dp=p(),co=a("p"),Ep=n("The "),Da=a("a"),Fp=n("DebertaForTokenClassification"),qp=n(" forward method, overrides the "),Ar=a("code"),xp=n("__call__"),jp=n(" special method."),zp=p(),T(Vo.$$.fragment),Mp=p(),T(Jo.$$.fragment),Cp=p(),T(Xo.$$.fragment),tl=p(),po=a("h2"),Yo=a("a"),Lr=a("span"),T($s.$$.fragment),Pp=p(),Rr=a("span"),Ap=n("DebertaForQuestionAnswering"),ol=p(),at=a("div"),T(Ds.$$.fragment),Lp=p(),ho=a("p"),Rp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Br=a("code"),Bp=n("span start logits"),Op=n(" and "),Or=a("code"),Ip=n("span end logits"),Sp=n(")."),Np=p(),Es=a("p"),Wp=n("The DeBERTa model was proposed in "),Fs=a("a"),Hp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qp=p(),qs=a("p"),Up=n("This model is also a PyTorch "),xs=a("a"),Gp=n("torch.nn.Module"),Vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jp=p(),ht=a("div"),T(js.$$.fragment),Xp=p(),mo=a("p"),Yp=n("The "),Ea=a("a"),Zp=n("DebertaForQuestionAnswering"),eh=n(" forward method, overrides the "),Ir=a("code"),th=n("__call__"),oh=n(" special method."),nh=p(),T(Zo.$$.fragment),sh=p(),T(en.$$.fragment),ah=p(),T(tn.$$.fragment),nl=p(),fo=a("h2"),on=a("a"),Sr=a("span"),T(zs.$$.fragment),rh=p(),Nr=a("span"),ih=n("TFDebertaModel"),sl=p(),rt=a("div"),T(Ms.$$.fragment),lh=p(),Cs=a("p"),dh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ps=a("a"),ch=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ph=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hh=p(),As=a("p"),mh=n("This model is also a "),Ls=a("a"),fh=n("tf.keras.Model"),uh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh=p(),T(nn.$$.fragment),_h=p(),Dt=a("div"),T(Rs.$$.fragment),bh=p(),uo=a("p"),kh=n("The "),Fa=a("a"),wh=n("TFDebertaModel"),Th=n(" forward method, overrides the "),Wr=a("code"),yh=n("__call__"),vh=n(" special method."),$h=p(),T(sn.$$.fragment),Dh=p(),T(an.$$.fragment),al=p(),go=a("h2"),rn=a("a"),Hr=a("span"),T(Bs.$$.fragment),Eh=p(),Kr=a("span"),Fh=n("TFDebertaPreTrainedModel"),rl=p(),jt=a("div"),T(Os.$$.fragment),qh=p(),Qr=a("p"),xh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),jh=p(),Et=a("div"),T(Is.$$.fragment),zh=p(),Ur=a("p"),Mh=n("Calls the model on new inputs and returns the outputs as tensors."),Ch=p(),Ss=a("p"),Ph=n("In this case "),Gr=a("code"),Ah=n("call()"),Lh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Rh=p(),Tt=a("p"),Bh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Vr=a("code"),Oh=n("tf.keras.Model"),Ih=n(`.
To call a model on an input, always use the `),Jr=a("code"),Sh=n("__call__()"),Nh=n(` method,
i.e. `),Xr=a("code"),Wh=n("model(inputs)"),Hh=n(", which relies on the underlying "),Yr=a("code"),Kh=n("call()"),Qh=n(" method."),il=p(),_o=a("h2"),ln=a("a"),Zr=a("span"),T(Ns.$$.fragment),Uh=p(),ei=a("span"),Gh=n("TFDebertaForMaskedLM"),ll=p(),it=a("div"),T(Ws.$$.fragment),Vh=p(),bo=a("p"),Jh=n("DeBERTa Model with a "),ti=a("code"),Xh=n("language modeling"),Yh=n(` head on top.
The DeBERTa model was proposed in `),Hs=a("a"),Zh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),em=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tm=p(),Ks=a("p"),om=n("This model is also a "),Qs=a("a"),nm=n("tf.keras.Model"),sm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),am=p(),T(dn.$$.fragment),rm=p(),mt=a("div"),T(Us.$$.fragment),im=p(),ko=a("p"),lm=n("The "),qa=a("a"),dm=n("TFDebertaForMaskedLM"),cm=n(" forward method, overrides the "),oi=a("code"),pm=n("__call__"),hm=n(" special method."),mm=p(),T(cn.$$.fragment),fm=p(),T(pn.$$.fragment),um=p(),T(hn.$$.fragment),dl=p(),wo=a("h2"),mn=a("a"),ni=a("span"),T(Gs.$$.fragment),gm=p(),si=a("span"),_m=n("TFDebertaForSequenceClassification"),cl=p(),Ze=a("div"),T(Vs.$$.fragment),bm=p(),ai=a("p"),km=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wm=p(),Js=a("p"),Tm=n("The DeBERTa model was proposed in "),Xs=a("a"),ym=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),$m=p(),Ys=a("p"),Dm=n("This model is also a "),Zs=a("a"),Em=n("tf.keras.Model"),Fm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qm=p(),T(fn.$$.fragment),xm=p(),ft=a("div"),T(ea.$$.fragment),jm=p(),To=a("p"),zm=n("The "),xa=a("a"),Mm=n("TFDebertaForSequenceClassification"),Cm=n(" forward method, overrides the "),ri=a("code"),Pm=n("__call__"),Am=n(" special method."),Lm=p(),T(un.$$.fragment),Rm=p(),T(gn.$$.fragment),Bm=p(),T(_n.$$.fragment),pl=p(),yo=a("h2"),bn=a("a"),ii=a("span"),T(ta.$$.fragment),Om=p(),li=a("span"),Im=n("TFDebertaForTokenClassification"),hl=p(),et=a("div"),T(oa.$$.fragment),Sm=p(),di=a("p"),Nm=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Wm=p(),na=a("p"),Hm=n("The DeBERTa model was proposed in "),sa=a("a"),Km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Um=p(),aa=a("p"),Gm=n("This model is also a "),ra=a("a"),Vm=n("tf.keras.Model"),Jm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xm=p(),T(kn.$$.fragment),Ym=p(),ut=a("div"),T(ia.$$.fragment),Zm=p(),vo=a("p"),ef=n("The "),ja=a("a"),tf=n("TFDebertaForTokenClassification"),of=n(" forward method, overrides the "),ci=a("code"),nf=n("__call__"),sf=n(" special method."),af=p(),T(wn.$$.fragment),rf=p(),T(Tn.$$.fragment),lf=p(),T(yn.$$.fragment),ml=p(),$o=a("h2"),vn=a("a"),pi=a("span"),T(la.$$.fragment),df=p(),hi=a("span"),cf=n("TFDebertaForQuestionAnswering"),fl=p(),tt=a("div"),T(da.$$.fragment),pf=p(),Do=a("p"),hf=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mi=a("code"),mf=n("span start logits"),ff=n(" and "),fi=a("code"),uf=n("span end logits"),gf=n(")."),_f=p(),ca=a("p"),bf=n("The DeBERTa model was proposed in "),pa=a("a"),kf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tf=p(),ha=a("p"),yf=n("This model is also a "),ma=a("a"),vf=n("tf.keras.Model"),$f=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df=p(),T($n.$$.fragment),Ef=p(),gt=a("div"),T(fa.$$.fragment),Ff=p(),Eo=a("p"),qf=n("The "),za=a("a"),xf=n("TFDebertaForQuestionAnswering"),jf=n(" forward method, overrides the "),ui=a("code"),zf=n("__call__"),Mf=n(" special method."),Cf=p(),T(Dn.$$.fragment),Pf=p(),T(En.$$.fragment),Af=p(),T(Fn.$$.fragment),this.h()},l(o){const k=Hg('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var ua=i(c);f=r(ua,"A",{id:!0,class:!0,href:!0});var gi=i(f);w=r(gi,"SPAN",{});var _i=i(w);y(d.$$.fragment,_i),_i.forEach(t),gi.forEach(t),m=h(ua),z=r(ua,"SPAN",{});var bi=i(z);ye=s(bi,"DeBERTa"),bi.forEach(t),ua.forEach(t),fe=h(o),B=r(o,"H2",{class:!0});var ga=i(B);se=r(ga,"A",{id:!0,class:!0,href:!0});var ki=i(se);oe=r(ki,"SPAN",{});var wi=i(oe);y(F.$$.fragment,wi),wi.forEach(t),ki.forEach(t),ve=h(ga),G=r(ga,"SPAN",{});var Ti=i(G);$e=s(Ti,"Overview"),Ti.forEach(t),ga.forEach(t),ue=h(o),I=r(o,"P",{});var _a=i(I);De=s(_a,"The DeBERTa model was proposed in "),ie=r(_a,"A",{href:!0,rel:!0});var yi=i(ie);V=s(yi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),yi.forEach(t),Ee=s(_a,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),_a.forEach(t),ge=h(o),K=r(o,"P",{});var vi=i(K);Fe=s(vi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),vi.forEach(t),_e=h(o),Q=r(o,"P",{});var $i=i(Q);qe=s($i,"The abstract from the paper is the following:"),$i.forEach(t),be=h(o),ee=r(o,"P",{});var Di=i(ee);M=r(Di,"EM",{});var ba=i(M);C=s(ba,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),le=r(ba,"A",{href:!0,rel:!0});var Ei=i(le);J=s(Ei,"https://github.com/microsoft/DeBERTa"),Ei.forEach(t),xe=s(ba,"."),ba.forEach(t),Di.forEach(t),ke=h(o),R=r(o,"P",{});var zt=i(R);je=s(zt,"This model was contributed by "),de=r(zt,"A",{href:!0,rel:!0});var Fi=i(de);P=s(Fi,"DeBERTa"),Fi.forEach(t),ze=s(zt,`. This model TF 2.0 implementation was
contributed by `),W=r(zt,"A",{href:!0,rel:!0});var qi=i(W);Me=s(qi,"kamalkraj"),qi.forEach(t),Ce=s(zt," . The original code can be found "),H=r(zt,"A",{href:!0,rel:!0});var xi=i(H);Pe=s(xi,"here"),xi.forEach(t),Ae=s(zt,"."),zt.forEach(t),O=h(o),ne=r(o,"H2",{class:!0});var ka=i(ne);S=r(ka,"A",{id:!0,class:!0,href:!0});var ji=i(S);he=r(ji,"SPAN",{});var zi=i(he);y(Y.$$.fragment,zi),zi.forEach(t),ji.forEach(t),A=h(ka),me=r(ka,"SPAN",{});var Mi=i(me);L=s(Mi,"DebertaConfig"),Mi.forEach(t),ka.forEach(t),we=h(o),te=r(o,"DIV",{class:!0});var Fo=i(te);y(_.$$.fragment,Fo),q=h(Fo),ce=r(Fo,"P",{});var Mt=i(ce);ae=s(Mt,"This is the configuration class to store the configuration of a "),Ie=r(Mt,"A",{href:!0});var Ci=i(Ie);We=s(Ci,"DebertaModel"),Ci.forEach(t),j=s(Mt," or a "),Se=r(Mt,"A",{href:!0});var Pi=i(Se);He=s(Pi,"TFDebertaModel"),Pi.forEach(t),Ke=s(Mt,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Le=r(Mt,"A",{href:!0,rel:!0});var Ai=i(Le);Qe=s(Ai,"microsoft/deberta-base"),Ai.forEach(t),N=s(Mt," architecture."),Mt.forEach(t),X=h(Fo),Te=r(Fo,"P",{});var qo=i(Te);Ue=s(qo,"Configuration objects inherit from "),U=r(qo,"A",{href:!0});var Li=i(U);Ge=s(Li,"PretrainedConfig"),Li.forEach(t),Ve=s(qo,` and can be used to control the model outputs. Read the
documentation from `),pe=r(qo,"A",{href:!0});var Ri=i(pe);Je=s(Ri,"PretrainedConfig"),Ri.forEach(t),re=s(qo," for more information."),qo.forEach(t),Fo.forEach(t),Ne=h(o),Gt=r(o,"H2",{class:!0});var wa=i(Gt);xo=r(wa,"A",{id:!0,class:!0,href:!0});var Bi=i(xo);Ya=r(Bi,"SPAN",{});var Oi=i(Ya);y(Ln.$$.fragment,Oi),Oi.forEach(t),Bi.forEach(t),Zl=h(wa),Za=r(wa,"SPAN",{});var Ii=i(Za);ed=s(Ii,"DebertaTokenizer"),Ii.forEach(t),wa.forEach(t),Ni=h(o),Ye=r(o,"DIV",{class:!0});var lt=i(Ye);y(Rn.$$.fragment,lt),td=h(lt),er=r(lt,"P",{});var Si=i(er);od=s(Si,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Si.forEach(t),nd=h(lt),Ct=r(lt,"DIV",{class:!0});var Ma=i(Ct);y(Bn.$$.fragment,Ma),sd=h(Ma),tr=r(Ma,"P",{});var Lf=i(tr);ad=s(Lf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Lf.forEach(t),rd=h(Ma),On=r(Ma,"UL",{});var gl=i(On);or=r(gl,"LI",{});var Rf=i(or);id=s(Rf,"single sequence: [CLS] X [SEP]"),Rf.forEach(t),ld=h(gl),nr=r(gl,"LI",{});var Bf=i(nr);dd=s(Bf,"pair of sequences: [CLS] A [SEP] B [SEP]"),Bf.forEach(t),gl.forEach(t),Ma.forEach(t),cd=h(lt),jo=r(lt,"DIV",{class:!0});var _l=i(jo);y(In.$$.fragment,_l),pd=h(_l),Vt=r(_l,"P",{});var Ca=i(Vt);hd=s(Ca,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),sr=r(Ca,"CODE",{});var Of=i(sr);md=s(Of,"prepare_for_model"),Of.forEach(t),fd=s(Ca," or "),ar=r(Ca,"CODE",{});var If=i(ar);ud=s(If,"encode_plus"),If.forEach(t),gd=s(Ca," methods."),Ca.forEach(t),_l.forEach(t),_d=h(lt),yt=r(lt,"DIV",{class:!0});var qn=i(yt);y(Sn.$$.fragment,qn),bd=h(qn),rr=r(qn,"P",{});var Sf=i(rr);kd=s(Sf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Sf.forEach(t),wd=h(qn),y(zo.$$.fragment,qn),Td=h(qn),Jt=r(qn,"P",{});var Pa=i(Jt);yd=s(Pa,"If "),ir=r(Pa,"CODE",{});var Nf=i(ir);vd=s(Nf,"token_ids_1"),Nf.forEach(t),$d=s(Pa," is "),lr=r(Pa,"CODE",{});var Wf=i(lr);Dd=s(Wf,"None"),Wf.forEach(t),Ed=s(Pa,", this method only returns the first portion of the mask (0s)."),Pa.forEach(t),qn.forEach(t),Fd=h(lt),Ta=r(lt,"DIV",{class:!0});var Hf=i(Ta);y(Nn.$$.fragment,Hf),Hf.forEach(t),lt.forEach(t),Wi=h(o),Xt=r(o,"H2",{class:!0});var bl=i(Xt);Mo=r(bl,"A",{id:!0,class:!0,href:!0});var Kf=i(Mo);dr=r(Kf,"SPAN",{});var Qf=i(dr);y(Wn.$$.fragment,Qf),Qf.forEach(t),Kf.forEach(t),qd=h(bl),cr=r(bl,"SPAN",{});var Uf=i(cr);xd=s(Uf,"DebertaTokenizerFast"),Uf.forEach(t),bl.forEach(t),Hi=h(o),bt=r(o,"DIV",{class:!0});var xn=i(bt);y(Hn.$$.fragment,xn),jd=h(xn),Kn=r(xn,"P",{});var kl=i(Kn);zd=s(kl,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),pr=r(kl,"EM",{});var Gf=i(pr);Md=s(Gf,"tokenizers"),Gf.forEach(t),Cd=s(kl," library."),kl.forEach(t),Pd=h(xn),Pt=r(xn,"DIV",{class:!0});var Aa=i(Pt);y(Qn.$$.fragment,Aa),Ad=h(Aa),hr=r(Aa,"P",{});var Vf=i(hr);Ld=s(Vf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vf.forEach(t),Rd=h(Aa),Un=r(Aa,"UL",{});var wl=i(Un);mr=r(wl,"LI",{});var Jf=i(mr);Bd=s(Jf,"single sequence: [CLS] X [SEP]"),Jf.forEach(t),Od=h(wl),fr=r(wl,"LI",{});var Xf=i(fr);Id=s(Xf,"pair of sequences: [CLS] A [SEP] B [SEP]"),Xf.forEach(t),wl.forEach(t),Aa.forEach(t),Sd=h(xn),vt=r(xn,"DIV",{class:!0});var jn=i(vt);y(Gn.$$.fragment,jn),Nd=h(jn),ur=r(jn,"P",{});var Yf=i(ur);Wd=s(Yf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Yf.forEach(t),Hd=h(jn),y(Co.$$.fragment,jn),Kd=h(jn),Yt=r(jn,"P",{});var La=i(Yt);Qd=s(La,"If "),gr=r(La,"CODE",{});var Zf=i(gr);Ud=s(Zf,"token_ids_1"),Zf.forEach(t),Gd=s(La," is "),_r=r(La,"CODE",{});var eu=i(_r);Vd=s(eu,"None"),eu.forEach(t),Jd=s(La,", this method only returns the first portion of the mask (0s)."),La.forEach(t),jn.forEach(t),xn.forEach(t),Ki=h(o),Zt=r(o,"H2",{class:!0});var Tl=i(Zt);Po=r(Tl,"A",{id:!0,class:!0,href:!0});var tu=i(Po);br=r(tu,"SPAN",{});var ou=i(br);y(Vn.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Xd=h(Tl),kr=r(Tl,"SPAN",{});var nu=i(kr);Yd=s(nu,"DebertaModel"),nu.forEach(t),Tl.forEach(t),Qi=h(o),kt=r(o,"DIV",{class:!0});var zn=i(kt);y(Jn.$$.fragment,zn),Zd=h(zn),Xn=r(zn,"P",{});var yl=i(Xn);ec=s(yl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=r(yl,"A",{href:!0,rel:!0});var su=i(Yn);tc=s(su,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),su.forEach(t),oc=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),nc=h(zn),Zn=r(zn,"P",{});var vl=i(Zn);sc=s(vl,"This model is also a PyTorch "),es=r(vl,"A",{href:!0,rel:!0});var au=i(es);ac=s(au,"torch.nn.Module"),au.forEach(t),rc=s(vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl.forEach(t),ic=h(zn),$t=r(zn,"DIV",{class:!0});var Mn=i($t);y(ts.$$.fragment,Mn),lc=h(Mn),eo=r(Mn,"P",{});var Ra=i(eo);dc=s(Ra,"The "),ya=r(Ra,"A",{href:!0});var ru=i(ya);cc=s(ru,"DebertaModel"),ru.forEach(t),pc=s(Ra," forward method, overrides the "),wr=r(Ra,"CODE",{});var iu=i(wr);hc=s(iu,"__call__"),iu.forEach(t),mc=s(Ra," special method."),Ra.forEach(t),fc=h(Mn),y(Ao.$$.fragment,Mn),uc=h(Mn),y(Lo.$$.fragment,Mn),Mn.forEach(t),zn.forEach(t),Ui=h(o),to=r(o,"H2",{class:!0});var $l=i(to);Ro=r($l,"A",{id:!0,class:!0,href:!0});var lu=i(Ro);Tr=r(lu,"SPAN",{});var du=i(Tr);y(os.$$.fragment,du),du.forEach(t),lu.forEach(t),gc=h($l),yr=r($l,"SPAN",{});var cu=i(yr);_c=s(cu,"DebertaPreTrainedModel"),cu.forEach(t),$l.forEach(t),Gi=h(o),oo=r(o,"DIV",{class:!0});var Dl=i(oo);y(ns.$$.fragment,Dl),bc=h(Dl),vr=r(Dl,"P",{});var pu=i(vr);kc=s(pu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),pu.forEach(t),Dl.forEach(t),Vi=h(o),no=r(o,"H2",{class:!0});var El=i(no);Bo=r(El,"A",{id:!0,class:!0,href:!0});var hu=i(Bo);$r=r(hu,"SPAN",{});var mu=i($r);y(ss.$$.fragment,mu),mu.forEach(t),hu.forEach(t),wc=h(El),Dr=r(El,"SPAN",{});var fu=i(Dr);Tc=s(fu,"DebertaForMaskedLM"),fu.forEach(t),El.forEach(t),Ji=h(o),wt=r(o,"DIV",{class:!0});var Cn=i(wt);y(as.$$.fragment,Cn),yc=h(Cn),so=r(Cn,"P",{});var Ba=i(so);vc=s(Ba,"DeBERTa Model with a "),Er=r(Ba,"CODE",{});var uu=i(Er);$c=s(uu,"language modeling"),uu.forEach(t),Dc=s(Ba,` head on top.
The DeBERTa model was proposed in `),rs=r(Ba,"A",{href:!0,rel:!0});var gu=i(rs);Ec=s(gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gu.forEach(t),Fc=s(Ba,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ba.forEach(t),qc=h(Cn),is=r(Cn,"P",{});var Fl=i(is);xc=s(Fl,"This model is also a PyTorch "),ls=r(Fl,"A",{href:!0,rel:!0});var _u=i(ls);jc=s(_u,"torch.nn.Module"),_u.forEach(t),zc=s(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),Mc=h(Cn),ct=r(Cn,"DIV",{class:!0});var At=i(ct);y(ds.$$.fragment,At),Cc=h(At),ao=r(At,"P",{});var Oa=i(ao);Pc=s(Oa,"The "),va=r(Oa,"A",{href:!0});var bu=i(va);Ac=s(bu,"DebertaForMaskedLM"),bu.forEach(t),Lc=s(Oa," forward method, overrides the "),Fr=r(Oa,"CODE",{});var ku=i(Fr);Rc=s(ku,"__call__"),ku.forEach(t),Bc=s(Oa," special method."),Oa.forEach(t),Oc=h(At),y(Oo.$$.fragment,At),Ic=h(At),y(Io.$$.fragment,At),Sc=h(At),y(So.$$.fragment,At),At.forEach(t),Cn.forEach(t),Xi=h(o),ro=r(o,"H2",{class:!0});var ql=i(ro);No=r(ql,"A",{id:!0,class:!0,href:!0});var wu=i(No);qr=r(wu,"SPAN",{});var Tu=i(qr);y(cs.$$.fragment,Tu),Tu.forEach(t),wu.forEach(t),Nc=h(ql),xr=r(ql,"SPAN",{});var yu=i(xr);Wc=s(yu,"DebertaForSequenceClassification"),yu.forEach(t),ql.forEach(t),Yi=h(o),nt=r(o,"DIV",{class:!0});var Lt=i(nt);y(ps.$$.fragment,Lt),Hc=h(Lt),jr=r(Lt,"P",{});var vu=i(jr);Kc=s(vu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vu.forEach(t),Qc=h(Lt),hs=r(Lt,"P",{});var xl=i(hs);Uc=s(xl,"The DeBERTa model was proposed in "),ms=r(xl,"A",{href:!0,rel:!0});var $u=i(ms);Gc=s($u,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$u.forEach(t),Vc=s(xl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xl.forEach(t),Jc=h(Lt),fs=r(Lt,"P",{});var jl=i(fs);Xc=s(jl,"This model is also a PyTorch "),us=r(jl,"A",{href:!0,rel:!0});var Du=i(us);Yc=s(Du,"torch.nn.Module"),Du.forEach(t),Zc=s(jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jl.forEach(t),ep=h(Lt),Xe=r(Lt,"DIV",{class:!0});var _t=i(Xe);y(gs.$$.fragment,_t),tp=h(_t),io=r(_t,"P",{});var Ia=i(io);op=s(Ia,"The "),$a=r(Ia,"A",{href:!0});var Eu=i($a);np=s(Eu,"DebertaForSequenceClassification"),Eu.forEach(t),sp=s(Ia," forward method, overrides the "),zr=r(Ia,"CODE",{});var Fu=i(zr);ap=s(Fu,"__call__"),Fu.forEach(t),rp=s(Ia," special method."),Ia.forEach(t),ip=h(_t),y(Wo.$$.fragment,_t),lp=h(_t),y(Ho.$$.fragment,_t),dp=h(_t),y(Ko.$$.fragment,_t),cp=h(_t),y(Qo.$$.fragment,_t),pp=h(_t),y(Uo.$$.fragment,_t),_t.forEach(t),Lt.forEach(t),Zi=h(o),lo=r(o,"H2",{class:!0});var zl=i(lo);Go=r(zl,"A",{id:!0,class:!0,href:!0});var qu=i(Go);Mr=r(qu,"SPAN",{});var xu=i(Mr);y(_s.$$.fragment,xu),xu.forEach(t),qu.forEach(t),hp=h(zl),Cr=r(zl,"SPAN",{});var ju=i(Cr);mp=s(ju,"DebertaForTokenClassification"),ju.forEach(t),zl.forEach(t),el=h(o),st=r(o,"DIV",{class:!0});var Rt=i(st);y(bs.$$.fragment,Rt),fp=h(Rt),Pr=r(Rt,"P",{});var zu=i(Pr);up=s(zu,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zu.forEach(t),gp=h(Rt),ks=r(Rt,"P",{});var Ml=i(ks);_p=s(Ml,"The DeBERTa model was proposed in "),ws=r(Ml,"A",{href:!0,rel:!0});var Mu=i(ws);bp=s(Mu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mu.forEach(t),kp=s(Ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ml.forEach(t),wp=h(Rt),Ts=r(Rt,"P",{});var Cl=i(Ts);Tp=s(Cl,"This model is also a PyTorch "),ys=r(Cl,"A",{href:!0,rel:!0});var Cu=i(ys);yp=s(Cu,"torch.nn.Module"),Cu.forEach(t),vp=s(Cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl.forEach(t),$p=h(Rt),pt=r(Rt,"DIV",{class:!0});var Bt=i(pt);y(vs.$$.fragment,Bt),Dp=h(Bt),co=r(Bt,"P",{});var Sa=i(co);Ep=s(Sa,"The "),Da=r(Sa,"A",{href:!0});var Pu=i(Da);Fp=s(Pu,"DebertaForTokenClassification"),Pu.forEach(t),qp=s(Sa," forward method, overrides the "),Ar=r(Sa,"CODE",{});var Au=i(Ar);xp=s(Au,"__call__"),Au.forEach(t),jp=s(Sa," special method."),Sa.forEach(t),zp=h(Bt),y(Vo.$$.fragment,Bt),Mp=h(Bt),y(Jo.$$.fragment,Bt),Cp=h(Bt),y(Xo.$$.fragment,Bt),Bt.forEach(t),Rt.forEach(t),tl=h(o),po=r(o,"H2",{class:!0});var Pl=i(po);Yo=r(Pl,"A",{id:!0,class:!0,href:!0});var Lu=i(Yo);Lr=r(Lu,"SPAN",{});var Ru=i(Lr);y($s.$$.fragment,Ru),Ru.forEach(t),Lu.forEach(t),Pp=h(Pl),Rr=r(Pl,"SPAN",{});var Bu=i(Rr);Ap=s(Bu,"DebertaForQuestionAnswering"),Bu.forEach(t),Pl.forEach(t),ol=h(o),at=r(o,"DIV",{class:!0});var Ot=i(at);y(Ds.$$.fragment,Ot),Lp=h(Ot),ho=r(Ot,"P",{});var Na=i(ho);Rp=s(Na,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Br=r(Na,"CODE",{});var Ou=i(Br);Bp=s(Ou,"span start logits"),Ou.forEach(t),Op=s(Na," and "),Or=r(Na,"CODE",{});var Iu=i(Or);Ip=s(Iu,"span end logits"),Iu.forEach(t),Sp=s(Na,")."),Na.forEach(t),Np=h(Ot),Es=r(Ot,"P",{});var Al=i(Es);Wp=s(Al,"The DeBERTa model was proposed in "),Fs=r(Al,"A",{href:!0,rel:!0});var Su=i(Fs);Hp=s(Su,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Su.forEach(t),Kp=s(Al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Al.forEach(t),Qp=h(Ot),qs=r(Ot,"P",{});var Ll=i(qs);Up=s(Ll,"This model is also a PyTorch "),xs=r(Ll,"A",{href:!0,rel:!0});var Nu=i(xs);Gp=s(Nu,"torch.nn.Module"),Nu.forEach(t),Vp=s(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),Jp=h(Ot),ht=r(Ot,"DIV",{class:!0});var It=i(ht);y(js.$$.fragment,It),Xp=h(It),mo=r(It,"P",{});var Wa=i(mo);Yp=s(Wa,"The "),Ea=r(Wa,"A",{href:!0});var Wu=i(Ea);Zp=s(Wu,"DebertaForQuestionAnswering"),Wu.forEach(t),eh=s(Wa," forward method, overrides the "),Ir=r(Wa,"CODE",{});var Hu=i(Ir);th=s(Hu,"__call__"),Hu.forEach(t),oh=s(Wa," special method."),Wa.forEach(t),nh=h(It),y(Zo.$$.fragment,It),sh=h(It),y(en.$$.fragment,It),ah=h(It),y(tn.$$.fragment,It),It.forEach(t),Ot.forEach(t),nl=h(o),fo=r(o,"H2",{class:!0});var Rl=i(fo);on=r(Rl,"A",{id:!0,class:!0,href:!0});var Ku=i(on);Sr=r(Ku,"SPAN",{});var Qu=i(Sr);y(zs.$$.fragment,Qu),Qu.forEach(t),Ku.forEach(t),rh=h(Rl),Nr=r(Rl,"SPAN",{});var Uu=i(Nr);ih=s(Uu,"TFDebertaModel"),Uu.forEach(t),Rl.forEach(t),sl=h(o),rt=r(o,"DIV",{class:!0});var St=i(rt);y(Ms.$$.fragment,St),lh=h(St),Cs=r(St,"P",{});var Bl=i(Cs);dh=s(Bl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ps=r(Bl,"A",{href:!0,rel:!0});var Gu=i(Ps);ch=s(Gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gu.forEach(t),ph=s(Bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bl.forEach(t),hh=h(St),As=r(St,"P",{});var Ol=i(As);mh=s(Ol,"This model is also a "),Ls=r(Ol,"A",{href:!0,rel:!0});var Vu=i(Ls);fh=s(Vu,"tf.keras.Model"),Vu.forEach(t),uh=s(Ol,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ol.forEach(t),gh=h(St),y(nn.$$.fragment,St),_h=h(St),Dt=r(St,"DIV",{class:!0});var Pn=i(Dt);y(Rs.$$.fragment,Pn),bh=h(Pn),uo=r(Pn,"P",{});var Ha=i(uo);kh=s(Ha,"The "),Fa=r(Ha,"A",{href:!0});var Ju=i(Fa);wh=s(Ju,"TFDebertaModel"),Ju.forEach(t),Th=s(Ha," forward method, overrides the "),Wr=r(Ha,"CODE",{});var Xu=i(Wr);yh=s(Xu,"__call__"),Xu.forEach(t),vh=s(Ha," special method."),Ha.forEach(t),$h=h(Pn),y(sn.$$.fragment,Pn),Dh=h(Pn),y(an.$$.fragment,Pn),Pn.forEach(t),St.forEach(t),al=h(o),go=r(o,"H2",{class:!0});var Il=i(go);rn=r(Il,"A",{id:!0,class:!0,href:!0});var Yu=i(rn);Hr=r(Yu,"SPAN",{});var Zu=i(Hr);y(Bs.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),Eh=h(Il),Kr=r(Il,"SPAN",{});var eg=i(Kr);Fh=s(eg,"TFDebertaPreTrainedModel"),eg.forEach(t),Il.forEach(t),rl=h(o),jt=r(o,"DIV",{class:!0});var Ka=i(jt);y(Os.$$.fragment,Ka),qh=h(Ka),Qr=r(Ka,"P",{});var tg=i(Qr);xh=s(tg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),tg.forEach(t),jh=h(Ka),Et=r(Ka,"DIV",{class:!0});var An=i(Et);y(Is.$$.fragment,An),zh=h(An),Ur=r(An,"P",{});var og=i(Ur);Mh=s(og,"Calls the model on new inputs and returns the outputs as tensors."),og.forEach(t),Ch=h(An),Ss=r(An,"P",{});var Sl=i(Ss);Ph=s(Sl,"In this case "),Gr=r(Sl,"CODE",{});var ng=i(Gr);Ah=s(ng,"call()"),ng.forEach(t),Lh=s(Sl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Sl.forEach(t),Rh=h(An),Tt=r(An,"P",{});var Nt=i(Tt);Bh=s(Nt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Vr=r(Nt,"CODE",{});var sg=i(Vr);Oh=s(sg,"tf.keras.Model"),sg.forEach(t),Ih=s(Nt,`.
To call a model on an input, always use the `),Jr=r(Nt,"CODE",{});var ag=i(Jr);Sh=s(ag,"__call__()"),ag.forEach(t),Nh=s(Nt,` method,
i.e. `),Xr=r(Nt,"CODE",{});var rg=i(Xr);Wh=s(rg,"model(inputs)"),rg.forEach(t),Hh=s(Nt,", which relies on the underlying "),Yr=r(Nt,"CODE",{});var ig=i(Yr);Kh=s(ig,"call()"),ig.forEach(t),Qh=s(Nt," method."),Nt.forEach(t),An.forEach(t),Ka.forEach(t),il=h(o),_o=r(o,"H2",{class:!0});var Nl=i(_o);ln=r(Nl,"A",{id:!0,class:!0,href:!0});var lg=i(ln);Zr=r(lg,"SPAN",{});var dg=i(Zr);y(Ns.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Uh=h(Nl),ei=r(Nl,"SPAN",{});var cg=i(ei);Gh=s(cg,"TFDebertaForMaskedLM"),cg.forEach(t),Nl.forEach(t),ll=h(o),it=r(o,"DIV",{class:!0});var Wt=i(it);y(Ws.$$.fragment,Wt),Vh=h(Wt),bo=r(Wt,"P",{});var Qa=i(bo);Jh=s(Qa,"DeBERTa Model with a "),ti=r(Qa,"CODE",{});var pg=i(ti);Xh=s(pg,"language modeling"),pg.forEach(t),Yh=s(Qa,` head on top.
The DeBERTa model was proposed in `),Hs=r(Qa,"A",{href:!0,rel:!0});var hg=i(Hs);Zh=s(hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hg.forEach(t),em=s(Qa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qa.forEach(t),tm=h(Wt),Ks=r(Wt,"P",{});var Wl=i(Ks);om=s(Wl,"This model is also a "),Qs=r(Wl,"A",{href:!0,rel:!0});var mg=i(Qs);nm=s(mg,"tf.keras.Model"),mg.forEach(t),sm=s(Wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl.forEach(t),am=h(Wt),y(dn.$$.fragment,Wt),rm=h(Wt),mt=r(Wt,"DIV",{class:!0});var Ht=i(mt);y(Us.$$.fragment,Ht),im=h(Ht),ko=r(Ht,"P",{});var Ua=i(ko);lm=s(Ua,"The "),qa=r(Ua,"A",{href:!0});var fg=i(qa);dm=s(fg,"TFDebertaForMaskedLM"),fg.forEach(t),cm=s(Ua," forward method, overrides the "),oi=r(Ua,"CODE",{});var ug=i(oi);pm=s(ug,"__call__"),ug.forEach(t),hm=s(Ua," special method."),Ua.forEach(t),mm=h(Ht),y(cn.$$.fragment,Ht),fm=h(Ht),y(pn.$$.fragment,Ht),um=h(Ht),y(hn.$$.fragment,Ht),Ht.forEach(t),Wt.forEach(t),dl=h(o),wo=r(o,"H2",{class:!0});var Hl=i(wo);mn=r(Hl,"A",{id:!0,class:!0,href:!0});var gg=i(mn);ni=r(gg,"SPAN",{});var _g=i(ni);y(Gs.$$.fragment,_g),_g.forEach(t),gg.forEach(t),gm=h(Hl),si=r(Hl,"SPAN",{});var bg=i(si);_m=s(bg,"TFDebertaForSequenceClassification"),bg.forEach(t),Hl.forEach(t),cl=h(o),Ze=r(o,"DIV",{class:!0});var Ft=i(Ze);y(Vs.$$.fragment,Ft),bm=h(Ft),ai=r(Ft,"P",{});var kg=i(ai);km=s(kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kg.forEach(t),wm=h(Ft),Js=r(Ft,"P",{});var Kl=i(Js);Tm=s(Kl,"The DeBERTa model was proposed in "),Xs=r(Kl,"A",{href:!0,rel:!0});var wg=i(Xs);ym=s(wg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wg.forEach(t),vm=s(Kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kl.forEach(t),$m=h(Ft),Ys=r(Ft,"P",{});var Ql=i(Ys);Dm=s(Ql,"This model is also a "),Zs=r(Ql,"A",{href:!0,rel:!0});var Tg=i(Zs);Em=s(Tg,"tf.keras.Model"),Tg.forEach(t),Fm=s(Ql,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ql.forEach(t),qm=h(Ft),y(fn.$$.fragment,Ft),xm=h(Ft),ft=r(Ft,"DIV",{class:!0});var Kt=i(ft);y(ea.$$.fragment,Kt),jm=h(Kt),To=r(Kt,"P",{});var Ga=i(To);zm=s(Ga,"The "),xa=r(Ga,"A",{href:!0});var yg=i(xa);Mm=s(yg,"TFDebertaForSequenceClassification"),yg.forEach(t),Cm=s(Ga," forward method, overrides the "),ri=r(Ga,"CODE",{});var vg=i(ri);Pm=s(vg,"__call__"),vg.forEach(t),Am=s(Ga," special method."),Ga.forEach(t),Lm=h(Kt),y(un.$$.fragment,Kt),Rm=h(Kt),y(gn.$$.fragment,Kt),Bm=h(Kt),y(_n.$$.fragment,Kt),Kt.forEach(t),Ft.forEach(t),pl=h(o),yo=r(o,"H2",{class:!0});var Ul=i(yo);bn=r(Ul,"A",{id:!0,class:!0,href:!0});var $g=i(bn);ii=r($g,"SPAN",{});var Dg=i(ii);y(ta.$$.fragment,Dg),Dg.forEach(t),$g.forEach(t),Om=h(Ul),li=r(Ul,"SPAN",{});var Eg=i(li);Im=s(Eg,"TFDebertaForTokenClassification"),Eg.forEach(t),Ul.forEach(t),hl=h(o),et=r(o,"DIV",{class:!0});var qt=i(et);y(oa.$$.fragment,qt),Sm=h(qt),di=r(qt,"P",{});var Fg=i(di);Nm=s(Fg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fg.forEach(t),Wm=h(qt),na=r(qt,"P",{});var Gl=i(na);Hm=s(Gl,"The DeBERTa model was proposed in "),sa=r(Gl,"A",{href:!0,rel:!0});var qg=i(sa);Km=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),Qm=s(Gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gl.forEach(t),Um=h(qt),aa=r(qt,"P",{});var Vl=i(aa);Gm=s(Vl,"This model is also a "),ra=r(Vl,"A",{href:!0,rel:!0});var xg=i(ra);Vm=s(xg,"tf.keras.Model"),xg.forEach(t),Jm=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),Xm=h(qt),y(kn.$$.fragment,qt),Ym=h(qt),ut=r(qt,"DIV",{class:!0});var Qt=i(ut);y(ia.$$.fragment,Qt),Zm=h(Qt),vo=r(Qt,"P",{});var Va=i(vo);ef=s(Va,"The "),ja=r(Va,"A",{href:!0});var jg=i(ja);tf=s(jg,"TFDebertaForTokenClassification"),jg.forEach(t),of=s(Va," forward method, overrides the "),ci=r(Va,"CODE",{});var zg=i(ci);nf=s(zg,"__call__"),zg.forEach(t),sf=s(Va," special method."),Va.forEach(t),af=h(Qt),y(wn.$$.fragment,Qt),rf=h(Qt),y(Tn.$$.fragment,Qt),lf=h(Qt),y(yn.$$.fragment,Qt),Qt.forEach(t),qt.forEach(t),ml=h(o),$o=r(o,"H2",{class:!0});var Jl=i($o);vn=r(Jl,"A",{id:!0,class:!0,href:!0});var Mg=i(vn);pi=r(Mg,"SPAN",{});var Cg=i(pi);y(la.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),df=h(Jl),hi=r(Jl,"SPAN",{});var Pg=i(hi);cf=s(Pg,"TFDebertaForQuestionAnswering"),Pg.forEach(t),Jl.forEach(t),fl=h(o),tt=r(o,"DIV",{class:!0});var xt=i(tt);y(da.$$.fragment,xt),pf=h(xt),Do=r(xt,"P",{});var Ja=i(Do);hf=s(Ja,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mi=r(Ja,"CODE",{});var Ag=i(mi);mf=s(Ag,"span start logits"),Ag.forEach(t),ff=s(Ja," and "),fi=r(Ja,"CODE",{});var Lg=i(fi);uf=s(Lg,"span end logits"),Lg.forEach(t),gf=s(Ja,")."),Ja.forEach(t),_f=h(xt),ca=r(xt,"P",{});var Xl=i(ca);bf=s(Xl,"The DeBERTa model was proposed in "),pa=r(Xl,"A",{href:!0,rel:!0});var Rg=i(pa);kf=s(Rg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Rg.forEach(t),wf=s(Xl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xl.forEach(t),Tf=h(xt),ha=r(xt,"P",{});var Yl=i(ha);yf=s(Yl,"This model is also a "),ma=r(Yl,"A",{href:!0,rel:!0});var Bg=i(ma);vf=s(Bg,"tf.keras.Model"),Bg.forEach(t),$f=s(Yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yl.forEach(t),Df=h(xt),y($n.$$.fragment,xt),Ef=h(xt),gt=r(xt,"DIV",{class:!0});var Ut=i(gt);y(fa.$$.fragment,Ut),Ff=h(Ut),Eo=r(Ut,"P",{});var Xa=i(Eo);qf=s(Xa,"The "),za=r(Xa,"A",{href:!0});var Og=i(za);xf=s(Og,"TFDebertaForQuestionAnswering"),Og.forEach(t),jf=s(Xa," forward method, overrides the "),ui=r(Xa,"CODE",{});var Ig=i(ui);zf=s(Ig,"__call__"),Ig.forEach(t),Mf=s(Xa," special method."),Xa.forEach(t),Cf=h(Ut),y(Dn.$$.fragment,Ut),Pf=h(Ut),y(En.$$.fragment,Ut),Af=h(Ut),y(Fn.$$.fragment,Ut),Ut.forEach(t),xt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(j_)),u(f,"id","deberta"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#deberta"),u(c,"class","relative group"),u(se,"id","overview"),u(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(se,"href","#overview"),u(B,"class","relative group"),u(ie,"href","https://arxiv.org/abs/2006.03654"),u(ie,"rel","nofollow"),u(le,"href","https://github.com/microsoft/DeBERTa"),u(le,"rel","nofollow"),u(de,"href","https://huggingface.co/DeBERTa"),u(de,"rel","nofollow"),u(W,"href","https://huggingface.co/kamalkraj"),u(W,"rel","nofollow"),u(H,"href","https://github.com/microsoft/DeBERTa"),u(H,"rel","nofollow"),u(S,"id","transformers.DebertaConfig"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#transformers.DebertaConfig"),u(ne,"class","relative group"),u(Ie,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),u(Se,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),u(Le,"href","https://huggingface.co/microsoft/deberta-base"),u(Le,"rel","nofollow"),u(U,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(pe,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xo,"id","transformers.DebertaTokenizer"),u(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xo,"href","#transformers.DebertaTokenizer"),u(Gt,"class","relative group"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mo,"id","transformers.DebertaTokenizerFast"),u(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mo,"href","#transformers.DebertaTokenizerFast"),u(Xt,"class","relative group"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"id","transformers.DebertaModel"),u(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Po,"href","#transformers.DebertaModel"),u(Zt,"class","relative group"),u(Yn,"href","https://arxiv.org/abs/2006.03654"),u(Yn,"rel","nofollow"),u(es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(es,"rel","nofollow"),u(ya,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ro,"id","transformers.DebertaPreTrainedModel"),u(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ro,"href","#transformers.DebertaPreTrainedModel"),u(to,"class","relative group"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"id","transformers.DebertaForMaskedLM"),u(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bo,"href","#transformers.DebertaForMaskedLM"),u(no,"class","relative group"),u(rs,"href","https://arxiv.org/abs/2006.03654"),u(rs,"rel","nofollow"),u(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ls,"rel","nofollow"),u(va,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.DebertaForSequenceClassification"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.DebertaForSequenceClassification"),u(ro,"class","relative group"),u(ms,"href","https://arxiv.org/abs/2006.03654"),u(ms,"rel","nofollow"),u(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(us,"rel","nofollow"),u($a,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.DebertaForTokenClassification"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.DebertaForTokenClassification"),u(lo,"class","relative group"),u(ws,"href","https://arxiv.org/abs/2006.03654"),u(ws,"rel","nofollow"),u(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ys,"rel","nofollow"),u(Da,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yo,"id","transformers.DebertaForQuestionAnswering"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#transformers.DebertaForQuestionAnswering"),u(po,"class","relative group"),u(Fs,"href","https://arxiv.org/abs/2006.03654"),u(Fs,"rel","nofollow"),u(xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(xs,"rel","nofollow"),u(Ea,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(on,"id","transformers.TFDebertaModel"),u(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(on,"href","#transformers.TFDebertaModel"),u(fo,"class","relative group"),u(Ps,"href","https://arxiv.org/abs/2006.03654"),u(Ps,"rel","nofollow"),u(Ls,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ls,"rel","nofollow"),u(Fa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rn,"id","transformers.TFDebertaPreTrainedModel"),u(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rn,"href","#transformers.TFDebertaPreTrainedModel"),u(go,"class","relative group"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.TFDebertaForMaskedLM"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.TFDebertaForMaskedLM"),u(_o,"class","relative group"),u(Hs,"href","https://arxiv.org/abs/2006.03654"),u(Hs,"rel","nofollow"),u(Qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Qs,"rel","nofollow"),u(qa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.TFDebertaForSequenceClassification"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.TFDebertaForSequenceClassification"),u(wo,"class","relative group"),u(Xs,"href","https://arxiv.org/abs/2006.03654"),u(Xs,"rel","nofollow"),u(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Zs,"rel","nofollow"),u(xa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.TFDebertaForTokenClassification"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.TFDebertaForTokenClassification"),u(yo,"class","relative group"),u(sa,"href","https://arxiv.org/abs/2006.03654"),u(sa,"rel","nofollow"),u(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ra,"rel","nofollow"),u(ja,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vn,"id","transformers.TFDebertaForQuestionAnswering"),u(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vn,"href","#transformers.TFDebertaForQuestionAnswering"),u($o,"class","relative group"),u(pa,"href","https://arxiv.org/abs/2006.03654"),u(pa,"rel","nofollow"),u(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ma,"rel","nofollow"),u(za,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,l),b(o,g,k),b(o,c,k),e(c,f),e(f,w),v(d,w,null),e(c,m),e(c,z),e(z,ye),b(o,fe,k),b(o,B,k),e(B,se),e(se,oe),v(F,oe,null),e(B,ve),e(B,G),e(G,$e),b(o,ue,k),b(o,I,k),e(I,De),e(I,ie),e(ie,V),e(I,Ee),b(o,ge,k),b(o,K,k),e(K,Fe),b(o,_e,k),b(o,Q,k),e(Q,qe),b(o,be,k),b(o,ee,k),e(ee,M),e(M,C),e(M,le),e(le,J),e(M,xe),b(o,ke,k),b(o,R,k),e(R,je),e(R,de),e(de,P),e(R,ze),e(R,W),e(W,Me),e(R,Ce),e(R,H),e(H,Pe),e(R,Ae),b(o,O,k),b(o,ne,k),e(ne,S),e(S,he),v(Y,he,null),e(ne,A),e(ne,me),e(me,L),b(o,we,k),b(o,te,k),v(_,te,null),e(te,q),e(te,ce),e(ce,ae),e(ce,Ie),e(Ie,We),e(ce,j),e(ce,Se),e(Se,He),e(ce,Ke),e(ce,Le),e(Le,Qe),e(ce,N),e(te,X),e(te,Te),e(Te,Ue),e(Te,U),e(U,Ge),e(Te,Ve),e(Te,pe),e(pe,Je),e(Te,re),b(o,Ne,k),b(o,Gt,k),e(Gt,xo),e(xo,Ya),v(Ln,Ya,null),e(Gt,Zl),e(Gt,Za),e(Za,ed),b(o,Ni,k),b(o,Ye,k),v(Rn,Ye,null),e(Ye,td),e(Ye,er),e(er,od),e(Ye,nd),e(Ye,Ct),v(Bn,Ct,null),e(Ct,sd),e(Ct,tr),e(tr,ad),e(Ct,rd),e(Ct,On),e(On,or),e(or,id),e(On,ld),e(On,nr),e(nr,dd),e(Ye,cd),e(Ye,jo),v(In,jo,null),e(jo,pd),e(jo,Vt),e(Vt,hd),e(Vt,sr),e(sr,md),e(Vt,fd),e(Vt,ar),e(ar,ud),e(Vt,gd),e(Ye,_d),e(Ye,yt),v(Sn,yt,null),e(yt,bd),e(yt,rr),e(rr,kd),e(yt,wd),v(zo,yt,null),e(yt,Td),e(yt,Jt),e(Jt,yd),e(Jt,ir),e(ir,vd),e(Jt,$d),e(Jt,lr),e(lr,Dd),e(Jt,Ed),e(Ye,Fd),e(Ye,Ta),v(Nn,Ta,null),b(o,Wi,k),b(o,Xt,k),e(Xt,Mo),e(Mo,dr),v(Wn,dr,null),e(Xt,qd),e(Xt,cr),e(cr,xd),b(o,Hi,k),b(o,bt,k),v(Hn,bt,null),e(bt,jd),e(bt,Kn),e(Kn,zd),e(Kn,pr),e(pr,Md),e(Kn,Cd),e(bt,Pd),e(bt,Pt),v(Qn,Pt,null),e(Pt,Ad),e(Pt,hr),e(hr,Ld),e(Pt,Rd),e(Pt,Un),e(Un,mr),e(mr,Bd),e(Un,Od),e(Un,fr),e(fr,Id),e(bt,Sd),e(bt,vt),v(Gn,vt,null),e(vt,Nd),e(vt,ur),e(ur,Wd),e(vt,Hd),v(Co,vt,null),e(vt,Kd),e(vt,Yt),e(Yt,Qd),e(Yt,gr),e(gr,Ud),e(Yt,Gd),e(Yt,_r),e(_r,Vd),e(Yt,Jd),b(o,Ki,k),b(o,Zt,k),e(Zt,Po),e(Po,br),v(Vn,br,null),e(Zt,Xd),e(Zt,kr),e(kr,Yd),b(o,Qi,k),b(o,kt,k),v(Jn,kt,null),e(kt,Zd),e(kt,Xn),e(Xn,ec),e(Xn,Yn),e(Yn,tc),e(Xn,oc),e(kt,nc),e(kt,Zn),e(Zn,sc),e(Zn,es),e(es,ac),e(Zn,rc),e(kt,ic),e(kt,$t),v(ts,$t,null),e($t,lc),e($t,eo),e(eo,dc),e(eo,ya),e(ya,cc),e(eo,pc),e(eo,wr),e(wr,hc),e(eo,mc),e($t,fc),v(Ao,$t,null),e($t,uc),v(Lo,$t,null),b(o,Ui,k),b(o,to,k),e(to,Ro),e(Ro,Tr),v(os,Tr,null),e(to,gc),e(to,yr),e(yr,_c),b(o,Gi,k),b(o,oo,k),v(ns,oo,null),e(oo,bc),e(oo,vr),e(vr,kc),b(o,Vi,k),b(o,no,k),e(no,Bo),e(Bo,$r),v(ss,$r,null),e(no,wc),e(no,Dr),e(Dr,Tc),b(o,Ji,k),b(o,wt,k),v(as,wt,null),e(wt,yc),e(wt,so),e(so,vc),e(so,Er),e(Er,$c),e(so,Dc),e(so,rs),e(rs,Ec),e(so,Fc),e(wt,qc),e(wt,is),e(is,xc),e(is,ls),e(ls,jc),e(is,zc),e(wt,Mc),e(wt,ct),v(ds,ct,null),e(ct,Cc),e(ct,ao),e(ao,Pc),e(ao,va),e(va,Ac),e(ao,Lc),e(ao,Fr),e(Fr,Rc),e(ao,Bc),e(ct,Oc),v(Oo,ct,null),e(ct,Ic),v(Io,ct,null),e(ct,Sc),v(So,ct,null),b(o,Xi,k),b(o,ro,k),e(ro,No),e(No,qr),v(cs,qr,null),e(ro,Nc),e(ro,xr),e(xr,Wc),b(o,Yi,k),b(o,nt,k),v(ps,nt,null),e(nt,Hc),e(nt,jr),e(jr,Kc),e(nt,Qc),e(nt,hs),e(hs,Uc),e(hs,ms),e(ms,Gc),e(hs,Vc),e(nt,Jc),e(nt,fs),e(fs,Xc),e(fs,us),e(us,Yc),e(fs,Zc),e(nt,ep),e(nt,Xe),v(gs,Xe,null),e(Xe,tp),e(Xe,io),e(io,op),e(io,$a),e($a,np),e(io,sp),e(io,zr),e(zr,ap),e(io,rp),e(Xe,ip),v(Wo,Xe,null),e(Xe,lp),v(Ho,Xe,null),e(Xe,dp),v(Ko,Xe,null),e(Xe,cp),v(Qo,Xe,null),e(Xe,pp),v(Uo,Xe,null),b(o,Zi,k),b(o,lo,k),e(lo,Go),e(Go,Mr),v(_s,Mr,null),e(lo,hp),e(lo,Cr),e(Cr,mp),b(o,el,k),b(o,st,k),v(bs,st,null),e(st,fp),e(st,Pr),e(Pr,up),e(st,gp),e(st,ks),e(ks,_p),e(ks,ws),e(ws,bp),e(ks,kp),e(st,wp),e(st,Ts),e(Ts,Tp),e(Ts,ys),e(ys,yp),e(Ts,vp),e(st,$p),e(st,pt),v(vs,pt,null),e(pt,Dp),e(pt,co),e(co,Ep),e(co,Da),e(Da,Fp),e(co,qp),e(co,Ar),e(Ar,xp),e(co,jp),e(pt,zp),v(Vo,pt,null),e(pt,Mp),v(Jo,pt,null),e(pt,Cp),v(Xo,pt,null),b(o,tl,k),b(o,po,k),e(po,Yo),e(Yo,Lr),v($s,Lr,null),e(po,Pp),e(po,Rr),e(Rr,Ap),b(o,ol,k),b(o,at,k),v(Ds,at,null),e(at,Lp),e(at,ho),e(ho,Rp),e(ho,Br),e(Br,Bp),e(ho,Op),e(ho,Or),e(Or,Ip),e(ho,Sp),e(at,Np),e(at,Es),e(Es,Wp),e(Es,Fs),e(Fs,Hp),e(Es,Kp),e(at,Qp),e(at,qs),e(qs,Up),e(qs,xs),e(xs,Gp),e(qs,Vp),e(at,Jp),e(at,ht),v(js,ht,null),e(ht,Xp),e(ht,mo),e(mo,Yp),e(mo,Ea),e(Ea,Zp),e(mo,eh),e(mo,Ir),e(Ir,th),e(mo,oh),e(ht,nh),v(Zo,ht,null),e(ht,sh),v(en,ht,null),e(ht,ah),v(tn,ht,null),b(o,nl,k),b(o,fo,k),e(fo,on),e(on,Sr),v(zs,Sr,null),e(fo,rh),e(fo,Nr),e(Nr,ih),b(o,sl,k),b(o,rt,k),v(Ms,rt,null),e(rt,lh),e(rt,Cs),e(Cs,dh),e(Cs,Ps),e(Ps,ch),e(Cs,ph),e(rt,hh),e(rt,As),e(As,mh),e(As,Ls),e(Ls,fh),e(As,uh),e(rt,gh),v(nn,rt,null),e(rt,_h),e(rt,Dt),v(Rs,Dt,null),e(Dt,bh),e(Dt,uo),e(uo,kh),e(uo,Fa),e(Fa,wh),e(uo,Th),e(uo,Wr),e(Wr,yh),e(uo,vh),e(Dt,$h),v(sn,Dt,null),e(Dt,Dh),v(an,Dt,null),b(o,al,k),b(o,go,k),e(go,rn),e(rn,Hr),v(Bs,Hr,null),e(go,Eh),e(go,Kr),e(Kr,Fh),b(o,rl,k),b(o,jt,k),v(Os,jt,null),e(jt,qh),e(jt,Qr),e(Qr,xh),e(jt,jh),e(jt,Et),v(Is,Et,null),e(Et,zh),e(Et,Ur),e(Ur,Mh),e(Et,Ch),e(Et,Ss),e(Ss,Ph),e(Ss,Gr),e(Gr,Ah),e(Ss,Lh),e(Et,Rh),e(Et,Tt),e(Tt,Bh),e(Tt,Vr),e(Vr,Oh),e(Tt,Ih),e(Tt,Jr),e(Jr,Sh),e(Tt,Nh),e(Tt,Xr),e(Xr,Wh),e(Tt,Hh),e(Tt,Yr),e(Yr,Kh),e(Tt,Qh),b(o,il,k),b(o,_o,k),e(_o,ln),e(ln,Zr),v(Ns,Zr,null),e(_o,Uh),e(_o,ei),e(ei,Gh),b(o,ll,k),b(o,it,k),v(Ws,it,null),e(it,Vh),e(it,bo),e(bo,Jh),e(bo,ti),e(ti,Xh),e(bo,Yh),e(bo,Hs),e(Hs,Zh),e(bo,em),e(it,tm),e(it,Ks),e(Ks,om),e(Ks,Qs),e(Qs,nm),e(Ks,sm),e(it,am),v(dn,it,null),e(it,rm),e(it,mt),v(Us,mt,null),e(mt,im),e(mt,ko),e(ko,lm),e(ko,qa),e(qa,dm),e(ko,cm),e(ko,oi),e(oi,pm),e(ko,hm),e(mt,mm),v(cn,mt,null),e(mt,fm),v(pn,mt,null),e(mt,um),v(hn,mt,null),b(o,dl,k),b(o,wo,k),e(wo,mn),e(mn,ni),v(Gs,ni,null),e(wo,gm),e(wo,si),e(si,_m),b(o,cl,k),b(o,Ze,k),v(Vs,Ze,null),e(Ze,bm),e(Ze,ai),e(ai,km),e(Ze,wm),e(Ze,Js),e(Js,Tm),e(Js,Xs),e(Xs,ym),e(Js,vm),e(Ze,$m),e(Ze,Ys),e(Ys,Dm),e(Ys,Zs),e(Zs,Em),e(Ys,Fm),e(Ze,qm),v(fn,Ze,null),e(Ze,xm),e(Ze,ft),v(ea,ft,null),e(ft,jm),e(ft,To),e(To,zm),e(To,xa),e(xa,Mm),e(To,Cm),e(To,ri),e(ri,Pm),e(To,Am),e(ft,Lm),v(un,ft,null),e(ft,Rm),v(gn,ft,null),e(ft,Bm),v(_n,ft,null),b(o,pl,k),b(o,yo,k),e(yo,bn),e(bn,ii),v(ta,ii,null),e(yo,Om),e(yo,li),e(li,Im),b(o,hl,k),b(o,et,k),v(oa,et,null),e(et,Sm),e(et,di),e(di,Nm),e(et,Wm),e(et,na),e(na,Hm),e(na,sa),e(sa,Km),e(na,Qm),e(et,Um),e(et,aa),e(aa,Gm),e(aa,ra),e(ra,Vm),e(aa,Jm),e(et,Xm),v(kn,et,null),e(et,Ym),e(et,ut),v(ia,ut,null),e(ut,Zm),e(ut,vo),e(vo,ef),e(vo,ja),e(ja,tf),e(vo,of),e(vo,ci),e(ci,nf),e(vo,sf),e(ut,af),v(wn,ut,null),e(ut,rf),v(Tn,ut,null),e(ut,lf),v(yn,ut,null),b(o,ml,k),b(o,$o,k),e($o,vn),e(vn,pi),v(la,pi,null),e($o,df),e($o,hi),e(hi,cf),b(o,fl,k),b(o,tt,k),v(da,tt,null),e(tt,pf),e(tt,Do),e(Do,hf),e(Do,mi),e(mi,mf),e(Do,ff),e(Do,fi),e(fi,uf),e(Do,gf),e(tt,_f),e(tt,ca),e(ca,bf),e(ca,pa),e(pa,kf),e(ca,wf),e(tt,Tf),e(tt,ha),e(ha,yf),e(ha,ma),e(ma,vf),e(ha,$f),e(tt,Df),v($n,tt,null),e(tt,Ef),e(tt,gt),v(fa,gt,null),e(gt,Ff),e(gt,Eo),e(Eo,qf),e(Eo,za),e(za,xf),e(Eo,jf),e(Eo,ui),e(ui,zf),e(Eo,Mf),e(gt,Cf),v(Dn,gt,null),e(gt,Pf),v(En,gt,null),e(gt,Af),v(Fn,gt,null),ul=!0},p(o,[k]){const ua={};k&2&&(ua.$$scope={dirty:k,ctx:o}),zo.$set(ua);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:o}),Co.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:o}),Ao.$set(_i);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:o}),Lo.$set(bi);const ga={};k&2&&(ga.$$scope={dirty:k,ctx:o}),Oo.$set(ga);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:o}),Io.$set(ki);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:o}),So.$set(wi);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:o}),Wo.$set(Ti);const _a={};k&2&&(_a.$$scope={dirty:k,ctx:o}),Ho.$set(_a);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:o}),Ko.$set(yi);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:o}),Qo.$set(vi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:o}),Uo.$set($i);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:o}),Vo.$set(Di);const ba={};k&2&&(ba.$$scope={dirty:k,ctx:o}),Jo.$set(ba);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),Xo.$set(Ei);const zt={};k&2&&(zt.$$scope={dirty:k,ctx:o}),Zo.$set(zt);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),en.$set(Fi);const qi={};k&2&&(qi.$$scope={dirty:k,ctx:o}),tn.$set(qi);const xi={};k&2&&(xi.$$scope={dirty:k,ctx:o}),nn.$set(xi);const ka={};k&2&&(ka.$$scope={dirty:k,ctx:o}),sn.$set(ka);const ji={};k&2&&(ji.$$scope={dirty:k,ctx:o}),an.$set(ji);const zi={};k&2&&(zi.$$scope={dirty:k,ctx:o}),dn.$set(zi);const Mi={};k&2&&(Mi.$$scope={dirty:k,ctx:o}),cn.$set(Mi);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),pn.$set(Fo);const Mt={};k&2&&(Mt.$$scope={dirty:k,ctx:o}),hn.$set(Mt);const Ci={};k&2&&(Ci.$$scope={dirty:k,ctx:o}),fn.$set(Ci);const Pi={};k&2&&(Pi.$$scope={dirty:k,ctx:o}),un.$set(Pi);const Ai={};k&2&&(Ai.$$scope={dirty:k,ctx:o}),gn.$set(Ai);const qo={};k&2&&(qo.$$scope={dirty:k,ctx:o}),_n.$set(qo);const Li={};k&2&&(Li.$$scope={dirty:k,ctx:o}),kn.$set(Li);const Ri={};k&2&&(Ri.$$scope={dirty:k,ctx:o}),wn.$set(Ri);const wa={};k&2&&(wa.$$scope={dirty:k,ctx:o}),Tn.$set(wa);const Bi={};k&2&&(Bi.$$scope={dirty:k,ctx:o}),yn.$set(Bi);const Oi={};k&2&&(Oi.$$scope={dirty:k,ctx:o}),$n.$set(Oi);const Ii={};k&2&&(Ii.$$scope={dirty:k,ctx:o}),Dn.$set(Ii);const lt={};k&2&&(lt.$$scope={dirty:k,ctx:o}),En.$set(lt);const Si={};k&2&&(Si.$$scope={dirty:k,ctx:o}),Fn.$set(Si)},i(o){ul||($(d.$$.fragment,o),$(F.$$.fragment,o),$(Y.$$.fragment,o),$(_.$$.fragment,o),$(Ln.$$.fragment,o),$(Rn.$$.fragment,o),$(Bn.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(zo.$$.fragment,o),$(Nn.$$.fragment,o),$(Wn.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Gn.$$.fragment,o),$(Co.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(ts.$$.fragment,o),$(Ao.$$.fragment,o),$(Lo.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(ds.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(gs.$$.fragment,o),$(Wo.$$.fragment,o),$(Ho.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(Uo.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Xo.$$.fragment,o),$($s.$$.fragment,o),$(Ds.$$.fragment,o),$(js.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(zs.$$.fragment,o),$(Ms.$$.fragment,o),$(nn.$$.fragment,o),$(Rs.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(Bs.$$.fragment,o),$(Os.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ws.$$.fragment,o),$(dn.$$.fragment,o),$(Us.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(Gs.$$.fragment,o),$(Vs.$$.fragment,o),$(fn.$$.fragment,o),$(ea.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(kn.$$.fragment,o),$(ia.$$.fragment,o),$(wn.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$($n.$$.fragment,o),$(fa.$$.fragment,o),$(Dn.$$.fragment,o),$(En.$$.fragment,o),$(Fn.$$.fragment,o),ul=!0)},o(o){D(d.$$.fragment,o),D(F.$$.fragment,o),D(Y.$$.fragment,o),D(_.$$.fragment,o),D(Ln.$$.fragment,o),D(Rn.$$.fragment,o),D(Bn.$$.fragment,o),D(In.$$.fragment,o),D(Sn.$$.fragment,o),D(zo.$$.fragment,o),D(Nn.$$.fragment,o),D(Wn.$$.fragment,o),D(Hn.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Co.$$.fragment,o),D(Vn.$$.fragment,o),D(Jn.$$.fragment,o),D(ts.$$.fragment,o),D(Ao.$$.fragment,o),D(Lo.$$.fragment,o),D(os.$$.fragment,o),D(ns.$$.fragment,o),D(ss.$$.fragment,o),D(as.$$.fragment,o),D(ds.$$.fragment,o),D(Oo.$$.fragment,o),D(Io.$$.fragment,o),D(So.$$.fragment,o),D(cs.$$.fragment,o),D(ps.$$.fragment,o),D(gs.$$.fragment,o),D(Wo.$$.fragment,o),D(Ho.$$.fragment,o),D(Ko.$$.fragment,o),D(Qo.$$.fragment,o),D(Uo.$$.fragment,o),D(_s.$$.fragment,o),D(bs.$$.fragment,o),D(vs.$$.fragment,o),D(Vo.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D($s.$$.fragment,o),D(Ds.$$.fragment,o),D(js.$$.fragment,o),D(Zo.$$.fragment,o),D(en.$$.fragment,o),D(tn.$$.fragment,o),D(zs.$$.fragment,o),D(Ms.$$.fragment,o),D(nn.$$.fragment,o),D(Rs.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(Bs.$$.fragment,o),D(Os.$$.fragment,o),D(Is.$$.fragment,o),D(Ns.$$.fragment,o),D(Ws.$$.fragment,o),D(dn.$$.fragment,o),D(Us.$$.fragment,o),D(cn.$$.fragment,o),D(pn.$$.fragment,o),D(hn.$$.fragment,o),D(Gs.$$.fragment,o),D(Vs.$$.fragment,o),D(fn.$$.fragment,o),D(ea.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(ta.$$.fragment,o),D(oa.$$.fragment,o),D(kn.$$.fragment,o),D(ia.$$.fragment,o),D(wn.$$.fragment,o),D(Tn.$$.fragment,o),D(yn.$$.fragment,o),D(la.$$.fragment,o),D(da.$$.fragment,o),D($n.$$.fragment,o),D(fa.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),ul=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(fe),o&&t(B),E(F),o&&t(ue),o&&t(I),o&&t(ge),o&&t(K),o&&t(_e),o&&t(Q),o&&t(be),o&&t(ee),o&&t(ke),o&&t(R),o&&t(O),o&&t(ne),E(Y),o&&t(we),o&&t(te),E(_),o&&t(Ne),o&&t(Gt),E(Ln),o&&t(Ni),o&&t(Ye),E(Rn),E(Bn),E(In),E(Sn),E(zo),E(Nn),o&&t(Wi),o&&t(Xt),E(Wn),o&&t(Hi),o&&t(bt),E(Hn),E(Qn),E(Gn),E(Co),o&&t(Ki),o&&t(Zt),E(Vn),o&&t(Qi),o&&t(kt),E(Jn),E(ts),E(Ao),E(Lo),o&&t(Ui),o&&t(to),E(os),o&&t(Gi),o&&t(oo),E(ns),o&&t(Vi),o&&t(no),E(ss),o&&t(Ji),o&&t(wt),E(as),E(ds),E(Oo),E(Io),E(So),o&&t(Xi),o&&t(ro),E(cs),o&&t(Yi),o&&t(nt),E(ps),E(gs),E(Wo),E(Ho),E(Ko),E(Qo),E(Uo),o&&t(Zi),o&&t(lo),E(_s),o&&t(el),o&&t(st),E(bs),E(vs),E(Vo),E(Jo),E(Xo),o&&t(tl),o&&t(po),E($s),o&&t(ol),o&&t(at),E(Ds),E(js),E(Zo),E(en),E(tn),o&&t(nl),o&&t(fo),E(zs),o&&t(sl),o&&t(rt),E(Ms),E(nn),E(Rs),E(sn),E(an),o&&t(al),o&&t(go),E(Bs),o&&t(rl),o&&t(jt),E(Os),E(Is),o&&t(il),o&&t(_o),E(Ns),o&&t(ll),o&&t(it),E(Ws),E(dn),E(Us),E(cn),E(pn),E(hn),o&&t(dl),o&&t(wo),E(Gs),o&&t(cl),o&&t(Ze),E(Vs),E(fn),E(ea),E(un),E(gn),E(_n),o&&t(pl),o&&t(yo),E(ta),o&&t(hl),o&&t(et),E(oa),E(kn),E(ia),E(wn),E(Tn),E(yn),o&&t(ml),o&&t($o),E(la),o&&t(fl),o&&t(tt),E(da),E($n),E(fa),E(Dn),E(En),E(Fn)}}}const j_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function z_(x){return Kg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B_ extends Sg{constructor(l){super();Ng(this,l,z_,x_,Wg,{})}}export{B_ as default,j_ as metadata};
