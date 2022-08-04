import{S as Og,i as Ng,s as Wg,e as a,k as h,w as v,t as n,M as Hg,c as r,d as t,m as f,a as i,x as w,h as s,b as u,G as e,g as _,y as $,q as y,o as D,B as E,v as Qg,L as ye}from"../../chunks/vendor-hf-doc-builder.js";import{T as We}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as De}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ug(F){let l,g,c,p,T;return p=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Gg(F){let l,g,c,p,T;return p=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"sequence pair mask has the following format:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Kg(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Vg(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Jg(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Xg(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function Yg(F){let l,g;return l=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Zg(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function e_(F){let l,g,c,p,T;return p=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of single-label classification:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function t_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function o_(F){let l,g,c,p,T;return p=new De({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function n_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained(
    "microsoft/deberta-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function s_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function a_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function r_(F){let l,g;return l=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function i_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function l_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function d_(F){let l,g;return l=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function c_(F){let l,g,c,p,T,d,m,z,he,X,x,Y,S,ee,fe,I,me,le,W,L,te,Z,M,C,ne,H,de,se,Q,ce,ae,j,ue,B,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),L=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),z=r(V,"LI",{});var ze=i(z);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),X=f(b),x=r(b,"P",{});var A=i(x);Y=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(A,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(A,"."),A.forEach(t),W=f(b),L=r(b,"P",{});var Ee=i(L);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),M=r(b,"UL",{});var R=i(M);C=r(R,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var xe=i(Q);ce=s(xe,"model(inputs_ids)"),xe.forEach(t),G.forEach(t),ae=f(R),j=r(R,"LI",{});var N=i(j);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=f(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,z),e(z,he),_(b,X,q),_(b,x,q),e(x,Y),e(x,S),e(S,ee),e(x,fe),e(x,I),e(I,me),e(x,le),_(b,W,q),_(b,L,q),e(L,te),_(b,Z,q),_(b,M,q),e(M,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(M,ae),e(M,j),e(j,ue),e(j,B),e(B,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(x),b&&t(W),b&&t(L),b&&t(Z),b&&t(M)}}}function p_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function h_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function f_(F){let l,g,c,p,T,d,m,z,he,X,x,Y,S,ee,fe,I,me,le,W,L,te,Z,M,C,ne,H,de,se,Q,ce,ae,j,ue,B,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),L=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),z=r(V,"LI",{});var ze=i(z);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),X=f(b),x=r(b,"P",{});var A=i(x);Y=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(A,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(A,"."),A.forEach(t),W=f(b),L=r(b,"P",{});var Ee=i(L);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),M=r(b,"UL",{});var R=i(M);C=r(R,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var xe=i(Q);ce=s(xe,"model(inputs_ids)"),xe.forEach(t),G.forEach(t),ae=f(R),j=r(R,"LI",{});var N=i(j);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=f(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,z),e(z,he),_(b,X,q),_(b,x,q),e(x,Y),e(x,S),e(S,ee),e(x,fe),e(x,I),e(I,me),e(x,le),_(b,W,q),_(b,L,q),e(L,te),_(b,Z,q),_(b,M,q),e(M,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(M,ae),e(M,j),e(j,ue),e(j,B),e(B,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(x),b&&t(W),b&&t(L),b&&t(Z),b&&t(M)}}}function m_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function u_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function g_(F){let l,g;return l=new De({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function __(F){let l,g,c,p,T,d,m,z,he,X,x,Y,S,ee,fe,I,me,le,W,L,te,Z,M,C,ne,H,de,se,Q,ce,ae,j,ue,B,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),L=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),z=r(V,"LI",{});var ze=i(z);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),X=f(b),x=r(b,"P",{});var A=i(x);Y=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(A,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(A,"."),A.forEach(t),W=f(b),L=r(b,"P",{});var Ee=i(L);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),M=r(b,"UL",{});var R=i(M);C=r(R,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var xe=i(Q);ce=s(xe,"model(inputs_ids)"),xe.forEach(t),G.forEach(t),ae=f(R),j=r(R,"LI",{});var N=i(j);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=f(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,z),e(z,he),_(b,X,q),_(b,x,q),e(x,Y),e(x,S),e(S,ee),e(x,fe),e(x,I),e(I,me),e(x,le),_(b,W,q),_(b,L,q),e(L,te),_(b,Z,q),_(b,M,q),e(M,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(M,ae),e(M,j),e(j,ue),e(j,B),e(B,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(x),b&&t(W),b&&t(L),b&&t(Z),b&&t(M)}}}function b_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function k_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function T_(F){let l,g;return l=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function v_(F){let l,g,c,p,T,d,m,z,he,X,x,Y,S,ee,fe,I,me,le,W,L,te,Z,M,C,ne,H,de,se,Q,ce,ae,j,ue,B,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),L=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),z=r(V,"LI",{});var ze=i(z);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),X=f(b),x=r(b,"P",{});var A=i(x);Y=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(A,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(A,"."),A.forEach(t),W=f(b),L=r(b,"P",{});var Ee=i(L);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),M=r(b,"UL",{});var R=i(M);C=r(R,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var xe=i(Q);ce=s(xe,"model(inputs_ids)"),xe.forEach(t),G.forEach(t),ae=f(R),j=r(R,"LI",{});var N=i(j);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=f(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,z),e(z,he),_(b,X,q),_(b,x,q),e(x,Y),e(x,S),e(S,ee),e(x,fe),e(x,I),e(I,me),e(x,le),_(b,W,q),_(b,L,q),e(L,te),_(b,Z,q),_(b,M,q),e(M,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(M,ae),e(M,j),e(j,ue),e(j,B),e(B,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(x),b&&t(W),b&&t(L),b&&t(Z),b&&t(M)}}}function w_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function $_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function y_(F){let l,g;return l=new De({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function D_(F){let l,g,c,p,T,d,m,z,he,X,x,Y,S,ee,fe,I,me,le,W,L,te,Z,M,C,ne,H,de,se,Q,ce,ae,j,ue,B,ge,_e,O,K,be,P,ke,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),W=h(),L=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),Q=a("code"),ce=n("model(inputs_ids)"),ae=h(),j=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),P=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(b){l=r(b,"P",{});var q=i(l);g=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),c=f(b),p=r(b,"UL",{});var V=i(p);T=r(V,"LI",{});var qe=i(T);d=s(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),m=f(V),z=r(V,"LI",{});var ze=i(z);he=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),V.forEach(t),X=f(b),x=r(b,"P",{});var A=i(x);Y=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var pe=i(S);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(A,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(A,"."),A.forEach(t),W=f(b),L=r(b,"P",{});var Ee=i(L);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=f(b),M=r(b,"UL",{});var R=i(M);C=r(R,"LI",{});var G=i(C);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(G," only and nothing else: "),Q=r(G,"CODE",{});var xe=i(Q);ce=s(xe,"model(inputs_ids)"),xe.forEach(t),G.forEach(t),ae=f(R),j=r(R,"LI",{});var N=i(j);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(N,"CODE",{});var re=i(B);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),O=r(N,"CODE",{});var we=i(O);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=f(R),P=r(R,"LI",{});var ve=i(P);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ve,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),R.forEach(t)},m(b,q){_(b,l,q),e(l,g),_(b,c,q),_(b,p,q),e(p,T),e(T,d),e(p,m),e(p,z),e(z,he),_(b,X,q),_(b,x,q),e(x,Y),e(x,S),e(S,ee),e(x,fe),e(x,I),e(I,me),e(x,le),_(b,W,q),_(b,L,q),e(L,te),_(b,Z,q),_(b,M,q),e(M,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,Q),e(Q,ce),e(M,ae),e(M,j),e(j,ue),e(j,B),e(B,ge),e(j,_e),e(j,O),e(O,K),e(M,be),e(M,P),e(P,ke),e(P,U),e(U,oe)},d(b){b&&t(l),b&&t(c),b&&t(p),b&&t(X),b&&t(x),b&&t(W),b&&t(L),b&&t(Z),b&&t(M)}}}function E_(F){let l,g,c,p,T;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),T=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function F_(F){let l,g,c,p,T;return p=new De({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=f(d),w(p.$$.fragment,d)},m(d,m){_(d,l,m),e(l,g),_(d,c,m),$(p,d,m),T=!0},p:ye,i(d){T||(y(p.$$.fragment,d),T=!0)},o(d){D(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),E(p,d)}}}function q_(F){let l,g;return l=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:ye,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function z_(F){let l,g,c,p,T,d,m,z,he,X,x,Y,S,ee,fe,I,me,le,W,L,te,Z,M,C,ne,H,de,se,Q,ce,ae,j,ue,B,ge,_e,O,K,be,P,ke,U,oe,b,q,V,qe,ze,A,pe,Te,Ee,R,G,Fe,xe,N,re,we,ve,ie,Il,na,Ol,Nl,sa,Wl,Hl,_n,Ql,Ul,Gl,qt,Kl,aa,Vl,Jl,ra,Xl,Yl,qi,zt,co,Ba,bn,Zl,Sa,ed,zi,je,kn,td,Ia,od,nd,ft,Tn,sd,Oa,ad,rd,vn,Na,id,ld,Wa,dd,cd,po,wn,pd,xt,hd,Ha,fd,md,Qa,ud,gd,_d,ot,$n,bd,Ua,kd,Td,ho,vd,Mt,wd,Ga,$d,yd,Ka,Dd,Ed,Fd,ia,yn,xi,jt,fo,Va,Dn,qd,Ja,zd,Mi,Ye,En,xd,Fn,Md,Xa,jd,Cd,Pd,mt,qn,Rd,Ya,Ad,Ld,zn,Za,Bd,Sd,er,Id,Od,nt,xn,Nd,tr,Wd,Hd,mo,Qd,Ct,Ud,or,Gd,Kd,nr,Vd,Jd,ji,Pt,uo,sr,Mn,Xd,ar,Yd,Ci,Ze,jn,Zd,Cn,ec,Pn,tc,oc,nc,Rn,sc,An,ac,rc,ic,st,Ln,lc,Rt,dc,la,cc,pc,rr,hc,fc,mc,go,uc,_o,Pi,At,bo,ir,Bn,gc,lr,_c,Ri,Lt,Sn,bc,dr,kc,Ai,Bt,ko,cr,In,Tc,pr,vc,Li,et,On,wc,St,$c,hr,yc,Dc,Nn,Ec,Fc,qc,Wn,zc,Hn,xc,Mc,jc,He,Qn,Cc,It,Pc,da,Rc,Ac,fr,Lc,Bc,Sc,To,Ic,vo,Oc,wo,Bi,Ot,$o,mr,Un,Nc,ur,Wc,Si,Le,Gn,Hc,gr,Qc,Uc,Kn,Gc,Vn,Kc,Vc,Jc,Jn,Xc,Xn,Yc,Zc,ep,Me,Yn,tp,Nt,op,ca,np,sp,_r,ap,rp,ip,yo,lp,Do,dp,Eo,cp,Fo,pp,qo,Ii,Wt,zo,br,Zn,hp,kr,fp,Oi,Be,es,mp,Tr,up,gp,ts,_p,os,bp,kp,Tp,ns,vp,ss,wp,$p,yp,Qe,as,Dp,Ht,Ep,pa,Fp,qp,vr,zp,xp,Mp,xo,jp,Mo,Cp,jo,Ni,Qt,Co,wr,rs,Pp,$r,Rp,Wi,Se,is,Ap,Ut,Lp,yr,Bp,Sp,Dr,Ip,Op,Np,ls,Wp,ds,Hp,Qp,Up,cs,Gp,ps,Kp,Vp,Jp,Ue,hs,Xp,Gt,Yp,ha,Zp,eh,Er,th,oh,nh,Po,sh,Ro,ah,Ao,Hi,Kt,Lo,Fr,fs,rh,qr,ih,Qi,Ie,ms,lh,us,dh,gs,ch,ph,hh,_s,fh,bs,mh,uh,gh,Bo,_h,at,ks,bh,Vt,kh,fa,Th,vh,zr,wh,$h,yh,So,Dh,Io,Ui,Jt,Oo,xr,Ts,Eh,Mr,Fh,Gi,ct,vs,qh,jr,zh,xh,rt,ws,Mh,Cr,jh,Ch,$s,Ph,Pr,Rh,Ah,Lh,tt,Bh,Rr,Sh,Ih,Ar,Oh,Nh,Lr,Wh,Hh,Br,Qh,Uh,Ki,Xt,No,Sr,ys,Gh,Ir,Kh,Vi,Oe,Ds,Vh,Yt,Jh,Or,Xh,Yh,Es,Zh,ef,tf,Fs,of,qs,nf,sf,af,Wo,rf,Ge,zs,lf,Zt,df,ma,cf,pf,Nr,hf,ff,mf,Ho,uf,Qo,gf,Uo,Ji,eo,Go,Wr,xs,_f,Hr,bf,Xi,Ce,Ms,kf,Qr,Tf,vf,js,wf,Cs,$f,yf,Df,Ps,Ef,Rs,Ff,qf,zf,Ko,xf,Ke,As,Mf,to,jf,ua,Cf,Pf,Ur,Rf,Af,Lf,Vo,Bf,Jo,Sf,Xo,Yi,oo,Yo,Gr,Ls,If,Kr,Of,Zi,Pe,Bs,Nf,Vr,Wf,Hf,Ss,Qf,Is,Uf,Gf,Kf,Os,Vf,Ns,Jf,Xf,Yf,Zo,Zf,Ve,Ws,em,no,tm,ga,om,nm,Jr,sm,am,rm,en,im,tn,lm,on,el,so,nn,Xr,Hs,dm,Yr,cm,tl,Re,Qs,pm,ao,hm,Zr,fm,mm,ei,um,gm,_m,Us,bm,Gs,km,Tm,vm,Ks,wm,Vs,$m,ym,Dm,sn,Em,Je,Js,Fm,ro,qm,_a,zm,xm,ti,Mm,jm,Cm,an,Pm,rn,Rm,ln,ol;return d=new Ae({}),ee=new Ae({}),R=new Ae({}),we=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/configuration_deberta.py#L40"}}),bn=new Ae({}),kn=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta.py#L66"}}),Tn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta.py#L137",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wn=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta.py#L162",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$n=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta.py#L189",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ho=new $e({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ug]},$$scope:{ctx:F}}}),yn=new J({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt2/tokenization_gpt2.py#L288"}}),Dn=new Ae({}),En=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta_fast.py#L67"}}),qn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta_fast.py#L158",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/tokenization_deberta_fast.py#L183",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mo=new $e({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Gg]},$$scope:{ctx:F}}}),Mn=new Ae({}),jn=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L885"}}),Ln=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new We({props:{$$slots:{default:[Kg]},$$scope:{ctx:F}}}),_o=new $e({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[Vg]},$$scope:{ctx:F}}}),Bn=new Ae({}),Sn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L790"}}),In=new Ae({}),On=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L997"}}),Qn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1016",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new We({props:{$$slots:{default:[Jg]},$$scope:{ctx:F}}}),vo=new $e({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[Xg]},$$scope:{ctx:F}}}),wo=new $e({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[Yg]},$$scope:{ctx:F}}}),Un=new Ae({}),Gn=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1132"}}),Yn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1157",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new We({props:{$$slots:{default:[Zg]},$$scope:{ctx:F}}}),Do=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[e_]},$$scope:{ctx:F}}}),Eo=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[t_]},$$scope:{ctx:F}}}),Fo=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[o_]},$$scope:{ctx:F}}}),qo=new $e({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[n_]},$$scope:{ctx:F}}}),Zn=new Ae({}),es=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1251"}}),as=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1265",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new We({props:{$$slots:{default:[s_]},$$scope:{ctx:F}}}),Mo=new $e({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[a_]},$$scope:{ctx:F}}}),jo=new $e({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[r_]},$$scope:{ctx:F}}}),rs=new Ae({}),is=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1327"}}),hs=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_deberta.py#L1340",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new We({props:{$$slots:{default:[i_]},$$scope:{ctx:F}}}),Ro=new $e({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[l_]},$$scope:{ctx:F}}}),Ao=new $e({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[d_]},$$scope:{ctx:F}}}),fs=new Ae({}),ms=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1079"}}),Bo=new We({props:{$$slots:{default:[c_]},$$scope:{ctx:F}}}),ks=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1085",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),So=new We({props:{$$slots:{default:[p_]},$$scope:{ctx:F}}}),Io=new $e({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[h_]},$$scope:{ctx:F}}}),Ts=new Ae({}),vs=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L984"}}),ws=new J({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/keras/engine/training.py#L492",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ys=new Ae({}),Ds=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1127"}}),Wo=new We({props:{$$slots:{default:[f_]},$$scope:{ctx:F}}}),zs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1143",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ho=new We({props:{$$slots:{default:[m_]},$$scope:{ctx:F}}}),Qo=new $e({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[u_]},$$scope:{ctx:F}}}),Uo=new $e({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[g_]},$$scope:{ctx:F}}}),xs=new Ae({}),Ms=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1210"}}),Ko=new We({props:{$$slots:{default:[__]},$$scope:{ctx:F}}}),As=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1228",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new We({props:{$$slots:{default:[b_]},$$scope:{ctx:F}}}),Jo=new $e({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[k_]},$$scope:{ctx:F}}}),Xo=new $e({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[T_]},$$scope:{ctx:F}}}),Ls=new Ae({}),Bs=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1298"}}),Zo=new We({props:{$$slots:{default:[v_]},$$scope:{ctx:F}}}),Ws=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1310",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new We({props:{$$slots:{default:[w_]},$$scope:{ctx:F}}}),tn=new $e({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[$_]},$$scope:{ctx:F}}}),on=new $e({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[y_]},$$scope:{ctx:F}}}),Hs=new Ae({}),Qs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1376"}}),sn=new We({props:{$$slots:{default:[D_]},$$scope:{ctx:F}}}),Js=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/deberta/modeling_tf_deberta.py#L1387",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new We({props:{$$slots:{default:[E_]},$$scope:{ctx:F}}}),rn=new $e({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[F_]},$$scope:{ctx:F}}}),ln=new $e({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=h(),c=a("h1"),p=a("a"),T=a("span"),v(d.$$.fragment),m=h(),z=a("span"),he=n("DeBERTa"),X=h(),x=a("h2"),Y=a("a"),S=a("span"),v(ee.$$.fragment),fe=h(),I=a("span"),me=n("Overview"),le=h(),W=a("p"),L=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=h(),ne=a("p"),H=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=h(),se=a("p"),Q=n("The abstract from the paper is the following:"),ce=h(),ae=a("p"),j=a("em"),ue=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),O=h(),K=a("p"),be=n("This model was contributed by "),P=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),b=n("kamalkraj"),q=n(" . The original code can be found "),V=a("a"),qe=n("here"),ze=n("."),A=h(),pe=a("h2"),Te=a("a"),Ee=a("span"),v(R.$$.fragment),G=h(),Fe=a("span"),xe=n("DebertaConfig"),N=h(),re=a("div"),v(we.$$.fragment),ve=h(),ie=a("p"),Il=n("This is the configuration class to store the configuration of a "),na=a("a"),Ol=n("DebertaModel"),Nl=n(" or a "),sa=a("a"),Wl=n("TFDebertaModel"),Hl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),_n=a("a"),Ql=n("microsoft/deberta-base"),Ul=n(" architecture."),Gl=h(),qt=a("p"),Kl=n("Configuration objects inherit from "),aa=a("a"),Vl=n("PretrainedConfig"),Jl=n(` and can be used to control the model outputs. Read the
documentation from `),ra=a("a"),Xl=n("PretrainedConfig"),Yl=n(" for more information."),qi=h(),zt=a("h2"),co=a("a"),Ba=a("span"),v(bn.$$.fragment),Zl=h(),Sa=a("span"),ed=n("DebertaTokenizer"),zi=h(),je=a("div"),v(kn.$$.fragment),td=h(),Ia=a("p"),od=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),nd=h(),ft=a("div"),v(Tn.$$.fragment),sd=h(),Oa=a("p"),ad=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),rd=h(),vn=a("ul"),Na=a("li"),id=n("single sequence: [CLS] X [SEP]"),ld=h(),Wa=a("li"),dd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),cd=h(),po=a("div"),v(wn.$$.fragment),pd=h(),xt=a("p"),hd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ha=a("code"),fd=n("prepare_for_model"),md=n(" or "),Qa=a("code"),ud=n("encode_plus"),gd=n(" methods."),_d=h(),ot=a("div"),v($n.$$.fragment),bd=h(),Ua=a("p"),kd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Td=h(),v(ho.$$.fragment),vd=h(),Mt=a("p"),wd=n("If "),Ga=a("code"),$d=n("token_ids_1"),yd=n(" is "),Ka=a("code"),Dd=n("None"),Ed=n(", this method only returns the first portion of the mask (0s)."),Fd=h(),ia=a("div"),v(yn.$$.fragment),xi=h(),jt=a("h2"),fo=a("a"),Va=a("span"),v(Dn.$$.fragment),qd=h(),Ja=a("span"),zd=n("DebertaTokenizerFast"),Mi=h(),Ye=a("div"),v(En.$$.fragment),xd=h(),Fn=a("p"),Md=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Xa=a("em"),jd=n("tokenizers"),Cd=n(" library."),Pd=h(),mt=a("div"),v(qn.$$.fragment),Rd=h(),Ya=a("p"),Ad=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ld=h(),zn=a("ul"),Za=a("li"),Bd=n("single sequence: [CLS] X [SEP]"),Sd=h(),er=a("li"),Id=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Od=h(),nt=a("div"),v(xn.$$.fragment),Nd=h(),tr=a("p"),Wd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Hd=h(),v(mo.$$.fragment),Qd=h(),Ct=a("p"),Ud=n("If "),or=a("code"),Gd=n("token_ids_1"),Kd=n(" is "),nr=a("code"),Vd=n("None"),Jd=n(", this method only returns the first portion of the mask (0s)."),ji=h(),Pt=a("h2"),uo=a("a"),sr=a("span"),v(Mn.$$.fragment),Xd=h(),ar=a("span"),Yd=n("DebertaModel"),Ci=h(),Ze=a("div"),v(jn.$$.fragment),Zd=h(),Cn=a("p"),ec=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Pn=a("a"),tc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),oc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nc=h(),Rn=a("p"),sc=n("This model is also a PyTorch "),An=a("a"),ac=n("torch.nn.Module"),rc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ic=h(),st=a("div"),v(Ln.$$.fragment),lc=h(),Rt=a("p"),dc=n("The "),la=a("a"),cc=n("DebertaModel"),pc=n(" forward method, overrides the "),rr=a("code"),hc=n("__call__"),fc=n(" special method."),mc=h(),v(go.$$.fragment),uc=h(),v(_o.$$.fragment),Pi=h(),At=a("h2"),bo=a("a"),ir=a("span"),v(Bn.$$.fragment),gc=h(),lr=a("span"),_c=n("DebertaPreTrainedModel"),Ri=h(),Lt=a("div"),v(Sn.$$.fragment),bc=h(),dr=a("p"),kc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ai=h(),Bt=a("h2"),ko=a("a"),cr=a("span"),v(In.$$.fragment),Tc=h(),pr=a("span"),vc=n("DebertaForMaskedLM"),Li=h(),et=a("div"),v(On.$$.fragment),wc=h(),St=a("p"),$c=n("DeBERTa Model with a "),hr=a("code"),yc=n("language modeling"),Dc=n(` head on top.
The DeBERTa model was proposed in `),Nn=a("a"),Ec=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qc=h(),Wn=a("p"),zc=n("This model is also a PyTorch "),Hn=a("a"),xc=n("torch.nn.Module"),Mc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),jc=h(),He=a("div"),v(Qn.$$.fragment),Cc=h(),It=a("p"),Pc=n("The "),da=a("a"),Rc=n("DebertaForMaskedLM"),Ac=n(" forward method, overrides the "),fr=a("code"),Lc=n("__call__"),Bc=n(" special method."),Sc=h(),v(To.$$.fragment),Ic=h(),v(vo.$$.fragment),Oc=h(),v(wo.$$.fragment),Bi=h(),Ot=a("h2"),$o=a("a"),mr=a("span"),v(Un.$$.fragment),Nc=h(),ur=a("span"),Wc=n("DebertaForSequenceClassification"),Si=h(),Le=a("div"),v(Gn.$$.fragment),Hc=h(),gr=a("p"),Qc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uc=h(),Kn=a("p"),Gc=n("The DeBERTa model was proposed in "),Vn=a("a"),Kc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=h(),Jn=a("p"),Xc=n("This model is also a PyTorch "),Xn=a("a"),Yc=n("torch.nn.Module"),Zc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ep=h(),Me=a("div"),v(Yn.$$.fragment),tp=h(),Nt=a("p"),op=n("The "),ca=a("a"),np=n("DebertaForSequenceClassification"),sp=n(" forward method, overrides the "),_r=a("code"),ap=n("__call__"),rp=n(" special method."),ip=h(),v(yo.$$.fragment),lp=h(),v(Do.$$.fragment),dp=h(),v(Eo.$$.fragment),cp=h(),v(Fo.$$.fragment),pp=h(),v(qo.$$.fragment),Ii=h(),Wt=a("h2"),zo=a("a"),br=a("span"),v(Zn.$$.fragment),hp=h(),kr=a("span"),fp=n("DebertaForTokenClassification"),Oi=h(),Be=a("div"),v(es.$$.fragment),mp=h(),Tr=a("p"),up=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gp=h(),ts=a("p"),_p=n("The DeBERTa model was proposed in "),os=a("a"),bp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tp=h(),ns=a("p"),vp=n("This model is also a PyTorch "),ss=a("a"),wp=n("torch.nn.Module"),$p=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),yp=h(),Qe=a("div"),v(as.$$.fragment),Dp=h(),Ht=a("p"),Ep=n("The "),pa=a("a"),Fp=n("DebertaForTokenClassification"),qp=n(" forward method, overrides the "),vr=a("code"),zp=n("__call__"),xp=n(" special method."),Mp=h(),v(xo.$$.fragment),jp=h(),v(Mo.$$.fragment),Cp=h(),v(jo.$$.fragment),Ni=h(),Qt=a("h2"),Co=a("a"),wr=a("span"),v(rs.$$.fragment),Pp=h(),$r=a("span"),Rp=n("DebertaForQuestionAnswering"),Wi=h(),Se=a("div"),v(is.$$.fragment),Ap=h(),Ut=a("p"),Lp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yr=a("code"),Bp=n("span start logits"),Sp=n(" and "),Dr=a("code"),Ip=n("span end logits"),Op=n(")."),Np=h(),ls=a("p"),Wp=n("The DeBERTa model was proposed in "),ds=a("a"),Hp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Up=h(),cs=a("p"),Gp=n("This model is also a PyTorch "),ps=a("a"),Kp=n("torch.nn.Module"),Vp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jp=h(),Ue=a("div"),v(hs.$$.fragment),Xp=h(),Gt=a("p"),Yp=n("The "),ha=a("a"),Zp=n("DebertaForQuestionAnswering"),eh=n(" forward method, overrides the "),Er=a("code"),th=n("__call__"),oh=n(" special method."),nh=h(),v(Po.$$.fragment),sh=h(),v(Ro.$$.fragment),ah=h(),v(Ao.$$.fragment),Hi=h(),Kt=a("h2"),Lo=a("a"),Fr=a("span"),v(fs.$$.fragment),rh=h(),qr=a("span"),ih=n("TFDebertaModel"),Qi=h(),Ie=a("div"),v(ms.$$.fragment),lh=h(),us=a("p"),dh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=a("a"),ch=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ph=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hh=h(),_s=a("p"),fh=n("This model is also a "),bs=a("a"),mh=n("tf.keras.Model"),uh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh=h(),v(Bo.$$.fragment),_h=h(),at=a("div"),v(ks.$$.fragment),bh=h(),Vt=a("p"),kh=n("The "),fa=a("a"),Th=n("TFDebertaModel"),vh=n(" forward method, overrides the "),zr=a("code"),wh=n("__call__"),$h=n(" special method."),yh=h(),v(So.$$.fragment),Dh=h(),v(Io.$$.fragment),Ui=h(),Jt=a("h2"),Oo=a("a"),xr=a("span"),v(Ts.$$.fragment),Eh=h(),Mr=a("span"),Fh=n("TFDebertaPreTrainedModel"),Gi=h(),ct=a("div"),v(vs.$$.fragment),qh=h(),jr=a("p"),zh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),xh=h(),rt=a("div"),v(ws.$$.fragment),Mh=h(),Cr=a("p"),jh=n("Calls the model on new inputs and returns the outputs as tensors."),Ch=h(),$s=a("p"),Ph=n("In this case "),Pr=a("code"),Rh=n("call()"),Ah=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Lh=h(),tt=a("p"),Bh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Rr=a("code"),Sh=n("tf.keras.Model"),Ih=n(`.
To call a model on an input, always use the `),Ar=a("code"),Oh=n("__call__()"),Nh=n(` method,
i.e. `),Lr=a("code"),Wh=n("model(inputs)"),Hh=n(", which relies on the underlying "),Br=a("code"),Qh=n("call()"),Uh=n(" method."),Ki=h(),Xt=a("h2"),No=a("a"),Sr=a("span"),v(ys.$$.fragment),Gh=h(),Ir=a("span"),Kh=n("TFDebertaForMaskedLM"),Vi=h(),Oe=a("div"),v(Ds.$$.fragment),Vh=h(),Yt=a("p"),Jh=n("DeBERTa Model with a "),Or=a("code"),Xh=n("language modeling"),Yh=n(` head on top.
The DeBERTa model was proposed in `),Es=a("a"),Zh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ef=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tf=h(),Fs=a("p"),of=n("This model is also a "),qs=a("a"),nf=n("tf.keras.Model"),sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),af=h(),v(Wo.$$.fragment),rf=h(),Ge=a("div"),v(zs.$$.fragment),lf=h(),Zt=a("p"),df=n("The "),ma=a("a"),cf=n("TFDebertaForMaskedLM"),pf=n(" forward method, overrides the "),Nr=a("code"),hf=n("__call__"),ff=n(" special method."),mf=h(),v(Ho.$$.fragment),uf=h(),v(Qo.$$.fragment),gf=h(),v(Uo.$$.fragment),Ji=h(),eo=a("h2"),Go=a("a"),Wr=a("span"),v(xs.$$.fragment),_f=h(),Hr=a("span"),bf=n("TFDebertaForSequenceClassification"),Xi=h(),Ce=a("div"),v(Ms.$$.fragment),kf=h(),Qr=a("p"),Tf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vf=h(),js=a("p"),wf=n("The DeBERTa model was proposed in "),Cs=a("a"),$f=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Df=h(),Ps=a("p"),Ef=n("This model is also a "),Rs=a("a"),Ff=n("tf.keras.Model"),qf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf=h(),v(Ko.$$.fragment),xf=h(),Ke=a("div"),v(As.$$.fragment),Mf=h(),to=a("p"),jf=n("The "),ua=a("a"),Cf=n("TFDebertaForSequenceClassification"),Pf=n(" forward method, overrides the "),Ur=a("code"),Rf=n("__call__"),Af=n(" special method."),Lf=h(),v(Vo.$$.fragment),Bf=h(),v(Jo.$$.fragment),Sf=h(),v(Xo.$$.fragment),Yi=h(),oo=a("h2"),Yo=a("a"),Gr=a("span"),v(Ls.$$.fragment),If=h(),Kr=a("span"),Of=n("TFDebertaForTokenClassification"),Zi=h(),Pe=a("div"),v(Bs.$$.fragment),Nf=h(),Vr=a("p"),Wf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Hf=h(),Ss=a("p"),Qf=n("The DeBERTa model was proposed in "),Is=a("a"),Uf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kf=h(),Os=a("p"),Vf=n("This model is also a "),Ns=a("a"),Jf=n("tf.keras.Model"),Xf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yf=h(),v(Zo.$$.fragment),Zf=h(),Ve=a("div"),v(Ws.$$.fragment),em=h(),no=a("p"),tm=n("The "),ga=a("a"),om=n("TFDebertaForTokenClassification"),nm=n(" forward method, overrides the "),Jr=a("code"),sm=n("__call__"),am=n(" special method."),rm=h(),v(en.$$.fragment),im=h(),v(tn.$$.fragment),lm=h(),v(on.$$.fragment),el=h(),so=a("h2"),nn=a("a"),Xr=a("span"),v(Hs.$$.fragment),dm=h(),Yr=a("span"),cm=n("TFDebertaForQuestionAnswering"),tl=h(),Re=a("div"),v(Qs.$$.fragment),pm=h(),ao=a("p"),hm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=a("code"),fm=n("span start logits"),mm=n(" and "),ei=a("code"),um=n("span end logits"),gm=n(")."),_m=h(),Us=a("p"),bm=n("The DeBERTa model was proposed in "),Gs=a("a"),km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vm=h(),Ks=a("p"),wm=n("This model is also a "),Vs=a("a"),$m=n("tf.keras.Model"),ym=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dm=h(),v(sn.$$.fragment),Em=h(),Je=a("div"),v(Js.$$.fragment),Fm=h(),ro=a("p"),qm=n("The "),_a=a("a"),zm=n("TFDebertaForQuestionAnswering"),xm=n(" forward method, overrides the "),ti=a("code"),Mm=n("__call__"),jm=n(" special method."),Cm=h(),v(an.$$.fragment),Pm=h(),v(rn.$$.fragment),Rm=h(),v(ln.$$.fragment),this.h()},l(o){const k=Hg('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=f(o),c=r(o,"H1",{class:!0});var Xs=i(c);p=r(Xs,"A",{id:!0,class:!0,href:!0});var oi=i(p);T=r(oi,"SPAN",{});var ni=i(T);w(d.$$.fragment,ni),ni.forEach(t),oi.forEach(t),m=f(Xs),z=r(Xs,"SPAN",{});var si=i(z);he=s(si,"DeBERTa"),si.forEach(t),Xs.forEach(t),X=f(o),x=r(o,"H2",{class:!0});var Ys=i(x);Y=r(Ys,"A",{id:!0,class:!0,href:!0});var ai=i(Y);S=r(ai,"SPAN",{});var ri=i(S);w(ee.$$.fragment,ri),ri.forEach(t),ai.forEach(t),fe=f(Ys),I=r(Ys,"SPAN",{});var ii=i(I);me=s(ii,"Overview"),ii.forEach(t),Ys.forEach(t),le=f(o),W=r(o,"P",{});var Zs=i(W);L=s(Zs,"The DeBERTa model was proposed in "),te=r(Zs,"A",{href:!0,rel:!0});var li=i(te);Z=s(li,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),li.forEach(t),M=s(Zs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Zs.forEach(t),C=f(o),ne=r(o,"P",{});var di=i(ne);H=s(di,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),di.forEach(t),de=f(o),se=r(o,"P",{});var ci=i(se);Q=s(ci,"The abstract from the paper is the following:"),ci.forEach(t),ce=f(o),ae=r(o,"P",{});var pi=i(ae);j=r(pi,"EM",{});var ea=i(j);ue=s(ea,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(ea,"A",{href:!0,rel:!0});var hi=i(B);ge=s(hi,"https://github.com/microsoft/DeBERTa"),hi.forEach(t),_e=s(ea,"."),ea.forEach(t),pi.forEach(t),O=f(o),K=r(o,"P",{});var pt=i(K);be=s(pt,"This model was contributed by "),P=r(pt,"A",{href:!0,rel:!0});var fi=i(P);ke=s(fi,"DeBERTa"),fi.forEach(t),U=s(pt,`. This model TF 2.0 implementation was
contributed by `),oe=r(pt,"A",{href:!0,rel:!0});var mi=i(oe);b=s(mi,"kamalkraj"),mi.forEach(t),q=s(pt," . The original code can be found "),V=r(pt,"A",{href:!0,rel:!0});var ui=i(V);qe=s(ui,"here"),ui.forEach(t),ze=s(pt,"."),pt.forEach(t),A=f(o),pe=r(o,"H2",{class:!0});var ta=i(pe);Te=r(ta,"A",{id:!0,class:!0,href:!0});var gi=i(Te);Ee=r(gi,"SPAN",{});var _i=i(Ee);w(R.$$.fragment,_i),_i.forEach(t),gi.forEach(t),G=f(ta),Fe=r(ta,"SPAN",{});var bi=i(Fe);xe=s(bi,"DebertaConfig"),bi.forEach(t),ta.forEach(t),N=f(o),re=r(o,"DIV",{class:!0});var io=i(re);w(we.$$.fragment,io),ve=f(io),ie=r(io,"P",{});var ht=i(ie);Il=s(ht,"This is the configuration class to store the configuration of a "),na=r(ht,"A",{href:!0});var ki=i(na);Ol=s(ki,"DebertaModel"),ki.forEach(t),Nl=s(ht," or a "),sa=r(ht,"A",{href:!0});var Ti=i(sa);Wl=s(Ti,"TFDebertaModel"),Ti.forEach(t),Hl=s(ht,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),_n=r(ht,"A",{href:!0,rel:!0});var vi=i(_n);Ql=s(vi,"microsoft/deberta-base"),vi.forEach(t),Ul=s(ht," architecture."),ht.forEach(t),Gl=f(io),qt=r(io,"P",{});var lo=i(qt);Kl=s(lo,"Configuration objects inherit from "),aa=r(lo,"A",{href:!0});var wi=i(aa);Vl=s(wi,"PretrainedConfig"),wi.forEach(t),Jl=s(lo,` and can be used to control the model outputs. Read the
documentation from `),ra=r(lo,"A",{href:!0});var $i=i(ra);Xl=s($i,"PretrainedConfig"),$i.forEach(t),Yl=s(lo," for more information."),lo.forEach(t),io.forEach(t),qi=f(o),zt=r(o,"H2",{class:!0});var oa=i(zt);co=r(oa,"A",{id:!0,class:!0,href:!0});var yi=i(co);Ba=r(yi,"SPAN",{});var Di=i(Ba);w(bn.$$.fragment,Di),Di.forEach(t),yi.forEach(t),Zl=f(oa),Sa=r(oa,"SPAN",{});var Ei=i(Sa);ed=s(Ei,"DebertaTokenizer"),Ei.forEach(t),oa.forEach(t),zi=f(o),je=r(o,"DIV",{class:!0});var Ne=i(je);w(kn.$$.fragment,Ne),td=f(Ne),Ia=r(Ne,"P",{});var Fi=i(Ia);od=s(Fi,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Fi.forEach(t),nd=f(Ne),ft=r(Ne,"DIV",{class:!0});var ba=i(ft);w(Tn.$$.fragment,ba),sd=f(ba),Oa=r(ba,"P",{});var Am=i(Oa);ad=s(Am,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Am.forEach(t),rd=f(ba),vn=r(ba,"UL",{});var nl=i(vn);Na=r(nl,"LI",{});var Lm=i(Na);id=s(Lm,"single sequence: [CLS] X [SEP]"),Lm.forEach(t),ld=f(nl),Wa=r(nl,"LI",{});var Bm=i(Wa);dd=s(Bm,"pair of sequences: [CLS] A [SEP] B [SEP]"),Bm.forEach(t),nl.forEach(t),ba.forEach(t),cd=f(Ne),po=r(Ne,"DIV",{class:!0});var sl=i(po);w(wn.$$.fragment,sl),pd=f(sl),xt=r(sl,"P",{});var ka=i(xt);hd=s(ka,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ha=r(ka,"CODE",{});var Sm=i(Ha);fd=s(Sm,"prepare_for_model"),Sm.forEach(t),md=s(ka," or "),Qa=r(ka,"CODE",{});var Im=i(Qa);ud=s(Im,"encode_plus"),Im.forEach(t),gd=s(ka," methods."),ka.forEach(t),sl.forEach(t),_d=f(Ne),ot=r(Ne,"DIV",{class:!0});var dn=i(ot);w($n.$$.fragment,dn),bd=f(dn),Ua=r(dn,"P",{});var Om=i(Ua);kd=s(Om,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Om.forEach(t),Td=f(dn),w(ho.$$.fragment,dn),vd=f(dn),Mt=r(dn,"P",{});var Ta=i(Mt);wd=s(Ta,"If "),Ga=r(Ta,"CODE",{});var Nm=i(Ga);$d=s(Nm,"token_ids_1"),Nm.forEach(t),yd=s(Ta," is "),Ka=r(Ta,"CODE",{});var Wm=i(Ka);Dd=s(Wm,"None"),Wm.forEach(t),Ed=s(Ta,", this method only returns the first portion of the mask (0s)."),Ta.forEach(t),dn.forEach(t),Fd=f(Ne),ia=r(Ne,"DIV",{class:!0});var Hm=i(ia);w(yn.$$.fragment,Hm),Hm.forEach(t),Ne.forEach(t),xi=f(o),jt=r(o,"H2",{class:!0});var al=i(jt);fo=r(al,"A",{id:!0,class:!0,href:!0});var Qm=i(fo);Va=r(Qm,"SPAN",{});var Um=i(Va);w(Dn.$$.fragment,Um),Um.forEach(t),Qm.forEach(t),qd=f(al),Ja=r(al,"SPAN",{});var Gm=i(Ja);zd=s(Gm,"DebertaTokenizerFast"),Gm.forEach(t),al.forEach(t),Mi=f(o),Ye=r(o,"DIV",{class:!0});var cn=i(Ye);w(En.$$.fragment,cn),xd=f(cn),Fn=r(cn,"P",{});var rl=i(Fn);Md=s(rl,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Xa=r(rl,"EM",{});var Km=i(Xa);jd=s(Km,"tokenizers"),Km.forEach(t),Cd=s(rl," library."),rl.forEach(t),Pd=f(cn),mt=r(cn,"DIV",{class:!0});var va=i(mt);w(qn.$$.fragment,va),Rd=f(va),Ya=r(va,"P",{});var Vm=i(Ya);Ad=s(Vm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vm.forEach(t),Ld=f(va),zn=r(va,"UL",{});var il=i(zn);Za=r(il,"LI",{});var Jm=i(Za);Bd=s(Jm,"single sequence: [CLS] X [SEP]"),Jm.forEach(t),Sd=f(il),er=r(il,"LI",{});var Xm=i(er);Id=s(Xm,"pair of sequences: [CLS] A [SEP] B [SEP]"),Xm.forEach(t),il.forEach(t),va.forEach(t),Od=f(cn),nt=r(cn,"DIV",{class:!0});var pn=i(nt);w(xn.$$.fragment,pn),Nd=f(pn),tr=r(pn,"P",{});var Ym=i(tr);Wd=s(Ym,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Ym.forEach(t),Hd=f(pn),w(mo.$$.fragment,pn),Qd=f(pn),Ct=r(pn,"P",{});var wa=i(Ct);Ud=s(wa,"If "),or=r(wa,"CODE",{});var Zm=i(or);Gd=s(Zm,"token_ids_1"),Zm.forEach(t),Kd=s(wa," is "),nr=r(wa,"CODE",{});var eu=i(nr);Vd=s(eu,"None"),eu.forEach(t),Jd=s(wa,", this method only returns the first portion of the mask (0s)."),wa.forEach(t),pn.forEach(t),cn.forEach(t),ji=f(o),Pt=r(o,"H2",{class:!0});var ll=i(Pt);uo=r(ll,"A",{id:!0,class:!0,href:!0});var tu=i(uo);sr=r(tu,"SPAN",{});var ou=i(sr);w(Mn.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Xd=f(ll),ar=r(ll,"SPAN",{});var nu=i(ar);Yd=s(nu,"DebertaModel"),nu.forEach(t),ll.forEach(t),Ci=f(o),Ze=r(o,"DIV",{class:!0});var hn=i(Ze);w(jn.$$.fragment,hn),Zd=f(hn),Cn=r(hn,"P",{});var dl=i(Cn);ec=s(dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Pn=r(dl,"A",{href:!0,rel:!0});var su=i(Pn);tc=s(su,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),su.forEach(t),oc=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),nc=f(hn),Rn=r(hn,"P",{});var cl=i(Rn);sc=s(cl,"This model is also a PyTorch "),An=r(cl,"A",{href:!0,rel:!0});var au=i(An);ac=s(au,"torch.nn.Module"),au.forEach(t),rc=s(cl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),cl.forEach(t),ic=f(hn),st=r(hn,"DIV",{class:!0});var fn=i(st);w(Ln.$$.fragment,fn),lc=f(fn),Rt=r(fn,"P",{});var $a=i(Rt);dc=s($a,"The "),la=r($a,"A",{href:!0});var ru=i(la);cc=s(ru,"DebertaModel"),ru.forEach(t),pc=s($a," forward method, overrides the "),rr=r($a,"CODE",{});var iu=i(rr);hc=s(iu,"__call__"),iu.forEach(t),fc=s($a," special method."),$a.forEach(t),mc=f(fn),w(go.$$.fragment,fn),uc=f(fn),w(_o.$$.fragment,fn),fn.forEach(t),hn.forEach(t),Pi=f(o),At=r(o,"H2",{class:!0});var pl=i(At);bo=r(pl,"A",{id:!0,class:!0,href:!0});var lu=i(bo);ir=r(lu,"SPAN",{});var du=i(ir);w(Bn.$$.fragment,du),du.forEach(t),lu.forEach(t),gc=f(pl),lr=r(pl,"SPAN",{});var cu=i(lr);_c=s(cu,"DebertaPreTrainedModel"),cu.forEach(t),pl.forEach(t),Ri=f(o),Lt=r(o,"DIV",{class:!0});var hl=i(Lt);w(Sn.$$.fragment,hl),bc=f(hl),dr=r(hl,"P",{});var pu=i(dr);kc=s(pu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),pu.forEach(t),hl.forEach(t),Ai=f(o),Bt=r(o,"H2",{class:!0});var fl=i(Bt);ko=r(fl,"A",{id:!0,class:!0,href:!0});var hu=i(ko);cr=r(hu,"SPAN",{});var fu=i(cr);w(In.$$.fragment,fu),fu.forEach(t),hu.forEach(t),Tc=f(fl),pr=r(fl,"SPAN",{});var mu=i(pr);vc=s(mu,"DebertaForMaskedLM"),mu.forEach(t),fl.forEach(t),Li=f(o),et=r(o,"DIV",{class:!0});var mn=i(et);w(On.$$.fragment,mn),wc=f(mn),St=r(mn,"P",{});var ya=i(St);$c=s(ya,"DeBERTa Model with a "),hr=r(ya,"CODE",{});var uu=i(hr);yc=s(uu,"language modeling"),uu.forEach(t),Dc=s(ya,` head on top.
The DeBERTa model was proposed in `),Nn=r(ya,"A",{href:!0,rel:!0});var gu=i(Nn);Ec=s(gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gu.forEach(t),Fc=s(ya,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ya.forEach(t),qc=f(mn),Wn=r(mn,"P",{});var ml=i(Wn);zc=s(ml,"This model is also a PyTorch "),Hn=r(ml,"A",{href:!0,rel:!0});var _u=i(Hn);xc=s(_u,"torch.nn.Module"),_u.forEach(t),Mc=s(ml," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ml.forEach(t),jc=f(mn),He=r(mn,"DIV",{class:!0});var ut=i(He);w(Qn.$$.fragment,ut),Cc=f(ut),It=r(ut,"P",{});var Da=i(It);Pc=s(Da,"The "),da=r(Da,"A",{href:!0});var bu=i(da);Rc=s(bu,"DebertaForMaskedLM"),bu.forEach(t),Ac=s(Da," forward method, overrides the "),fr=r(Da,"CODE",{});var ku=i(fr);Lc=s(ku,"__call__"),ku.forEach(t),Bc=s(Da," special method."),Da.forEach(t),Sc=f(ut),w(To.$$.fragment,ut),Ic=f(ut),w(vo.$$.fragment,ut),Oc=f(ut),w(wo.$$.fragment,ut),ut.forEach(t),mn.forEach(t),Bi=f(o),Ot=r(o,"H2",{class:!0});var ul=i(Ot);$o=r(ul,"A",{id:!0,class:!0,href:!0});var Tu=i($o);mr=r(Tu,"SPAN",{});var vu=i(mr);w(Un.$$.fragment,vu),vu.forEach(t),Tu.forEach(t),Nc=f(ul),ur=r(ul,"SPAN",{});var wu=i(ur);Wc=s(wu,"DebertaForSequenceClassification"),wu.forEach(t),ul.forEach(t),Si=f(o),Le=r(o,"DIV",{class:!0});var gt=i(Le);w(Gn.$$.fragment,gt),Hc=f(gt),gr=r(gt,"P",{});var $u=i(gr);Qc=s($u,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$u.forEach(t),Uc=f(gt),Kn=r(gt,"P",{});var gl=i(Kn);Gc=s(gl,"The DeBERTa model was proposed in "),Vn=r(gl,"A",{href:!0,rel:!0});var yu=i(Vn);Kc=s(yu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yu.forEach(t),Vc=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Jc=f(gt),Jn=r(gt,"P",{});var _l=i(Jn);Xc=s(_l,"This model is also a PyTorch "),Xn=r(_l,"A",{href:!0,rel:!0});var Du=i(Xn);Yc=s(Du,"torch.nn.Module"),Du.forEach(t),Zc=s(_l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_l.forEach(t),ep=f(gt),Me=r(gt,"DIV",{class:!0});var Xe=i(Me);w(Yn.$$.fragment,Xe),tp=f(Xe),Nt=r(Xe,"P",{});var Ea=i(Nt);op=s(Ea,"The "),ca=r(Ea,"A",{href:!0});var Eu=i(ca);np=s(Eu,"DebertaForSequenceClassification"),Eu.forEach(t),sp=s(Ea," forward method, overrides the "),_r=r(Ea,"CODE",{});var Fu=i(_r);ap=s(Fu,"__call__"),Fu.forEach(t),rp=s(Ea," special method."),Ea.forEach(t),ip=f(Xe),w(yo.$$.fragment,Xe),lp=f(Xe),w(Do.$$.fragment,Xe),dp=f(Xe),w(Eo.$$.fragment,Xe),cp=f(Xe),w(Fo.$$.fragment,Xe),pp=f(Xe),w(qo.$$.fragment,Xe),Xe.forEach(t),gt.forEach(t),Ii=f(o),Wt=r(o,"H2",{class:!0});var bl=i(Wt);zo=r(bl,"A",{id:!0,class:!0,href:!0});var qu=i(zo);br=r(qu,"SPAN",{});var zu=i(br);w(Zn.$$.fragment,zu),zu.forEach(t),qu.forEach(t),hp=f(bl),kr=r(bl,"SPAN",{});var xu=i(kr);fp=s(xu,"DebertaForTokenClassification"),xu.forEach(t),bl.forEach(t),Oi=f(o),Be=r(o,"DIV",{class:!0});var _t=i(Be);w(es.$$.fragment,_t),mp=f(_t),Tr=r(_t,"P",{});var Mu=i(Tr);up=s(Mu,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Mu.forEach(t),gp=f(_t),ts=r(_t,"P",{});var kl=i(ts);_p=s(kl,"The DeBERTa model was proposed in "),os=r(kl,"A",{href:!0,rel:!0});var ju=i(os);bp=s(ju,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ju.forEach(t),kp=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Tp=f(_t),ns=r(_t,"P",{});var Tl=i(ns);vp=s(Tl,"This model is also a PyTorch "),ss=r(Tl,"A",{href:!0,rel:!0});var Cu=i(ss);wp=s(Cu,"torch.nn.Module"),Cu.forEach(t),$p=s(Tl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Tl.forEach(t),yp=f(_t),Qe=r(_t,"DIV",{class:!0});var bt=i(Qe);w(as.$$.fragment,bt),Dp=f(bt),Ht=r(bt,"P",{});var Fa=i(Ht);Ep=s(Fa,"The "),pa=r(Fa,"A",{href:!0});var Pu=i(pa);Fp=s(Pu,"DebertaForTokenClassification"),Pu.forEach(t),qp=s(Fa," forward method, overrides the "),vr=r(Fa,"CODE",{});var Ru=i(vr);zp=s(Ru,"__call__"),Ru.forEach(t),xp=s(Fa," special method."),Fa.forEach(t),Mp=f(bt),w(xo.$$.fragment,bt),jp=f(bt),w(Mo.$$.fragment,bt),Cp=f(bt),w(jo.$$.fragment,bt),bt.forEach(t),_t.forEach(t),Ni=f(o),Qt=r(o,"H2",{class:!0});var vl=i(Qt);Co=r(vl,"A",{id:!0,class:!0,href:!0});var Au=i(Co);wr=r(Au,"SPAN",{});var Lu=i(wr);w(rs.$$.fragment,Lu),Lu.forEach(t),Au.forEach(t),Pp=f(vl),$r=r(vl,"SPAN",{});var Bu=i($r);Rp=s(Bu,"DebertaForQuestionAnswering"),Bu.forEach(t),vl.forEach(t),Wi=f(o),Se=r(o,"DIV",{class:!0});var kt=i(Se);w(is.$$.fragment,kt),Ap=f(kt),Ut=r(kt,"P",{});var qa=i(Ut);Lp=s(qa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yr=r(qa,"CODE",{});var Su=i(yr);Bp=s(Su,"span start logits"),Su.forEach(t),Sp=s(qa," and "),Dr=r(qa,"CODE",{});var Iu=i(Dr);Ip=s(Iu,"span end logits"),Iu.forEach(t),Op=s(qa,")."),qa.forEach(t),Np=f(kt),ls=r(kt,"P",{});var wl=i(ls);Wp=s(wl,"The DeBERTa model was proposed in "),ds=r(wl,"A",{href:!0,rel:!0});var Ou=i(ds);Hp=s(Ou,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ou.forEach(t),Qp=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),Up=f(kt),cs=r(kt,"P",{});var $l=i(cs);Gp=s($l,"This model is also a PyTorch "),ps=r($l,"A",{href:!0,rel:!0});var Nu=i(ps);Kp=s(Nu,"torch.nn.Module"),Nu.forEach(t),Vp=s($l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),$l.forEach(t),Jp=f(kt),Ue=r(kt,"DIV",{class:!0});var Tt=i(Ue);w(hs.$$.fragment,Tt),Xp=f(Tt),Gt=r(Tt,"P",{});var za=i(Gt);Yp=s(za,"The "),ha=r(za,"A",{href:!0});var Wu=i(ha);Zp=s(Wu,"DebertaForQuestionAnswering"),Wu.forEach(t),eh=s(za," forward method, overrides the "),Er=r(za,"CODE",{});var Hu=i(Er);th=s(Hu,"__call__"),Hu.forEach(t),oh=s(za," special method."),za.forEach(t),nh=f(Tt),w(Po.$$.fragment,Tt),sh=f(Tt),w(Ro.$$.fragment,Tt),ah=f(Tt),w(Ao.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Hi=f(o),Kt=r(o,"H2",{class:!0});var yl=i(Kt);Lo=r(yl,"A",{id:!0,class:!0,href:!0});var Qu=i(Lo);Fr=r(Qu,"SPAN",{});var Uu=i(Fr);w(fs.$$.fragment,Uu),Uu.forEach(t),Qu.forEach(t),rh=f(yl),qr=r(yl,"SPAN",{});var Gu=i(qr);ih=s(Gu,"TFDebertaModel"),Gu.forEach(t),yl.forEach(t),Qi=f(o),Ie=r(o,"DIV",{class:!0});var vt=i(Ie);w(ms.$$.fragment,vt),lh=f(vt),us=r(vt,"P",{});var Dl=i(us);dh=s(Dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=r(Dl,"A",{href:!0,rel:!0});var Ku=i(gs);ch=s(Ku,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ku.forEach(t),ph=s(Dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dl.forEach(t),hh=f(vt),_s=r(vt,"P",{});var El=i(_s);fh=s(El,"This model is also a "),bs=r(El,"A",{href:!0,rel:!0});var Vu=i(bs);mh=s(Vu,"tf.keras.Model"),Vu.forEach(t),uh=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),gh=f(vt),w(Bo.$$.fragment,vt),_h=f(vt),at=r(vt,"DIV",{class:!0});var un=i(at);w(ks.$$.fragment,un),bh=f(un),Vt=r(un,"P",{});var xa=i(Vt);kh=s(xa,"The "),fa=r(xa,"A",{href:!0});var Ju=i(fa);Th=s(Ju,"TFDebertaModel"),Ju.forEach(t),vh=s(xa," forward method, overrides the "),zr=r(xa,"CODE",{});var Xu=i(zr);wh=s(Xu,"__call__"),Xu.forEach(t),$h=s(xa," special method."),xa.forEach(t),yh=f(un),w(So.$$.fragment,un),Dh=f(un),w(Io.$$.fragment,un),un.forEach(t),vt.forEach(t),Ui=f(o),Jt=r(o,"H2",{class:!0});var Fl=i(Jt);Oo=r(Fl,"A",{id:!0,class:!0,href:!0});var Yu=i(Oo);xr=r(Yu,"SPAN",{});var Zu=i(xr);w(Ts.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),Eh=f(Fl),Mr=r(Fl,"SPAN",{});var eg=i(Mr);Fh=s(eg,"TFDebertaPreTrainedModel"),eg.forEach(t),Fl.forEach(t),Gi=f(o),ct=r(o,"DIV",{class:!0});var Ma=i(ct);w(vs.$$.fragment,Ma),qh=f(Ma),jr=r(Ma,"P",{});var tg=i(jr);zh=s(tg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),tg.forEach(t),xh=f(Ma),rt=r(Ma,"DIV",{class:!0});var gn=i(rt);w(ws.$$.fragment,gn),Mh=f(gn),Cr=r(gn,"P",{});var og=i(Cr);jh=s(og,"Calls the model on new inputs and returns the outputs as tensors."),og.forEach(t),Ch=f(gn),$s=r(gn,"P",{});var ql=i($s);Ph=s(ql,"In this case "),Pr=r(ql,"CODE",{});var ng=i(Pr);Rh=s(ng,"call()"),ng.forEach(t),Ah=s(ql,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ql.forEach(t),Lh=f(gn),tt=r(gn,"P",{});var wt=i(tt);Bh=s(wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Rr=r(wt,"CODE",{});var sg=i(Rr);Sh=s(sg,"tf.keras.Model"),sg.forEach(t),Ih=s(wt,`.
To call a model on an input, always use the `),Ar=r(wt,"CODE",{});var ag=i(Ar);Oh=s(ag,"__call__()"),ag.forEach(t),Nh=s(wt,` method,
i.e. `),Lr=r(wt,"CODE",{});var rg=i(Lr);Wh=s(rg,"model(inputs)"),rg.forEach(t),Hh=s(wt,", which relies on the underlying "),Br=r(wt,"CODE",{});var ig=i(Br);Qh=s(ig,"call()"),ig.forEach(t),Uh=s(wt," method."),wt.forEach(t),gn.forEach(t),Ma.forEach(t),Ki=f(o),Xt=r(o,"H2",{class:!0});var zl=i(Xt);No=r(zl,"A",{id:!0,class:!0,href:!0});var lg=i(No);Sr=r(lg,"SPAN",{});var dg=i(Sr);w(ys.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Gh=f(zl),Ir=r(zl,"SPAN",{});var cg=i(Ir);Kh=s(cg,"TFDebertaForMaskedLM"),cg.forEach(t),zl.forEach(t),Vi=f(o),Oe=r(o,"DIV",{class:!0});var $t=i(Oe);w(Ds.$$.fragment,$t),Vh=f($t),Yt=r($t,"P",{});var ja=i(Yt);Jh=s(ja,"DeBERTa Model with a "),Or=r(ja,"CODE",{});var pg=i(Or);Xh=s(pg,"language modeling"),pg.forEach(t),Yh=s(ja,` head on top.
The DeBERTa model was proposed in `),Es=r(ja,"A",{href:!0,rel:!0});var hg=i(Es);Zh=s(hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hg.forEach(t),ef=s(ja,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ja.forEach(t),tf=f($t),Fs=r($t,"P",{});var xl=i(Fs);of=s(xl,"This model is also a "),qs=r(xl,"A",{href:!0,rel:!0});var fg=i(qs);nf=s(fg,"tf.keras.Model"),fg.forEach(t),sf=s(xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xl.forEach(t),af=f($t),w(Wo.$$.fragment,$t),rf=f($t),Ge=r($t,"DIV",{class:!0});var yt=i(Ge);w(zs.$$.fragment,yt),lf=f(yt),Zt=r(yt,"P",{});var Ca=i(Zt);df=s(Ca,"The "),ma=r(Ca,"A",{href:!0});var mg=i(ma);cf=s(mg,"TFDebertaForMaskedLM"),mg.forEach(t),pf=s(Ca," forward method, overrides the "),Nr=r(Ca,"CODE",{});var ug=i(Nr);hf=s(ug,"__call__"),ug.forEach(t),ff=s(Ca," special method."),Ca.forEach(t),mf=f(yt),w(Ho.$$.fragment,yt),uf=f(yt),w(Qo.$$.fragment,yt),gf=f(yt),w(Uo.$$.fragment,yt),yt.forEach(t),$t.forEach(t),Ji=f(o),eo=r(o,"H2",{class:!0});var Ml=i(eo);Go=r(Ml,"A",{id:!0,class:!0,href:!0});var gg=i(Go);Wr=r(gg,"SPAN",{});var _g=i(Wr);w(xs.$$.fragment,_g),_g.forEach(t),gg.forEach(t),_f=f(Ml),Hr=r(Ml,"SPAN",{});var bg=i(Hr);bf=s(bg,"TFDebertaForSequenceClassification"),bg.forEach(t),Ml.forEach(t),Xi=f(o),Ce=r(o,"DIV",{class:!0});var it=i(Ce);w(Ms.$$.fragment,it),kf=f(it),Qr=r(it,"P",{});var kg=i(Qr);Tf=s(kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kg.forEach(t),vf=f(it),js=r(it,"P",{});var jl=i(js);wf=s(jl,"The DeBERTa model was proposed in "),Cs=r(jl,"A",{href:!0,rel:!0});var Tg=i(Cs);$f=s(Tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tg.forEach(t),yf=s(jl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),jl.forEach(t),Df=f(it),Ps=r(it,"P",{});var Cl=i(Ps);Ef=s(Cl,"This model is also a "),Rs=r(Cl,"A",{href:!0,rel:!0});var vg=i(Rs);Ff=s(vg,"tf.keras.Model"),vg.forEach(t),qf=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),zf=f(it),w(Ko.$$.fragment,it),xf=f(it),Ke=r(it,"DIV",{class:!0});var Dt=i(Ke);w(As.$$.fragment,Dt),Mf=f(Dt),to=r(Dt,"P",{});var Pa=i(to);jf=s(Pa,"The "),ua=r(Pa,"A",{href:!0});var wg=i(ua);Cf=s(wg,"TFDebertaForSequenceClassification"),wg.forEach(t),Pf=s(Pa," forward method, overrides the "),Ur=r(Pa,"CODE",{});var $g=i(Ur);Rf=s($g,"__call__"),$g.forEach(t),Af=s(Pa," special method."),Pa.forEach(t),Lf=f(Dt),w(Vo.$$.fragment,Dt),Bf=f(Dt),w(Jo.$$.fragment,Dt),Sf=f(Dt),w(Xo.$$.fragment,Dt),Dt.forEach(t),it.forEach(t),Yi=f(o),oo=r(o,"H2",{class:!0});var Pl=i(oo);Yo=r(Pl,"A",{id:!0,class:!0,href:!0});var yg=i(Yo);Gr=r(yg,"SPAN",{});var Dg=i(Gr);w(Ls.$$.fragment,Dg),Dg.forEach(t),yg.forEach(t),If=f(Pl),Kr=r(Pl,"SPAN",{});var Eg=i(Kr);Of=s(Eg,"TFDebertaForTokenClassification"),Eg.forEach(t),Pl.forEach(t),Zi=f(o),Pe=r(o,"DIV",{class:!0});var lt=i(Pe);w(Bs.$$.fragment,lt),Nf=f(lt),Vr=r(lt,"P",{});var Fg=i(Vr);Wf=s(Fg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fg.forEach(t),Hf=f(lt),Ss=r(lt,"P",{});var Rl=i(Ss);Qf=s(Rl,"The DeBERTa model was proposed in "),Is=r(Rl,"A",{href:!0,rel:!0});var qg=i(Is);Uf=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),Gf=s(Rl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rl.forEach(t),Kf=f(lt),Os=r(lt,"P",{});var Al=i(Os);Vf=s(Al,"This model is also a "),Ns=r(Al,"A",{href:!0,rel:!0});var zg=i(Ns);Jf=s(zg,"tf.keras.Model"),zg.forEach(t),Xf=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),Yf=f(lt),w(Zo.$$.fragment,lt),Zf=f(lt),Ve=r(lt,"DIV",{class:!0});var Et=i(Ve);w(Ws.$$.fragment,Et),em=f(Et),no=r(Et,"P",{});var Ra=i(no);tm=s(Ra,"The "),ga=r(Ra,"A",{href:!0});var xg=i(ga);om=s(xg,"TFDebertaForTokenClassification"),xg.forEach(t),nm=s(Ra," forward method, overrides the "),Jr=r(Ra,"CODE",{});var Mg=i(Jr);sm=s(Mg,"__call__"),Mg.forEach(t),am=s(Ra," special method."),Ra.forEach(t),rm=f(Et),w(en.$$.fragment,Et),im=f(Et),w(tn.$$.fragment,Et),lm=f(Et),w(on.$$.fragment,Et),Et.forEach(t),lt.forEach(t),el=f(o),so=r(o,"H2",{class:!0});var Ll=i(so);nn=r(Ll,"A",{id:!0,class:!0,href:!0});var jg=i(nn);Xr=r(jg,"SPAN",{});var Cg=i(Xr);w(Hs.$$.fragment,Cg),Cg.forEach(t),jg.forEach(t),dm=f(Ll),Yr=r(Ll,"SPAN",{});var Pg=i(Yr);cm=s(Pg,"TFDebertaForQuestionAnswering"),Pg.forEach(t),Ll.forEach(t),tl=f(o),Re=r(o,"DIV",{class:!0});var dt=i(Re);w(Qs.$$.fragment,dt),pm=f(dt),ao=r(dt,"P",{});var Aa=i(ao);hm=s(Aa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=r(Aa,"CODE",{});var Rg=i(Zr);fm=s(Rg,"span start logits"),Rg.forEach(t),mm=s(Aa," and "),ei=r(Aa,"CODE",{});var Ag=i(ei);um=s(Ag,"span end logits"),Ag.forEach(t),gm=s(Aa,")."),Aa.forEach(t),_m=f(dt),Us=r(dt,"P",{});var Bl=i(Us);bm=s(Bl,"The DeBERTa model was proposed in "),Gs=r(Bl,"A",{href:!0,rel:!0});var Lg=i(Gs);km=s(Lg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lg.forEach(t),Tm=s(Bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bl.forEach(t),vm=f(dt),Ks=r(dt,"P",{});var Sl=i(Ks);wm=s(Sl,"This model is also a "),Vs=r(Sl,"A",{href:!0,rel:!0});var Bg=i(Vs);$m=s(Bg,"tf.keras.Model"),Bg.forEach(t),ym=s(Sl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sl.forEach(t),Dm=f(dt),w(sn.$$.fragment,dt),Em=f(dt),Je=r(dt,"DIV",{class:!0});var Ft=i(Je);w(Js.$$.fragment,Ft),Fm=f(Ft),ro=r(Ft,"P",{});var La=i(ro);qm=s(La,"The "),_a=r(La,"A",{href:!0});var Sg=i(_a);zm=s(Sg,"TFDebertaForQuestionAnswering"),Sg.forEach(t),xm=s(La," forward method, overrides the "),ti=r(La,"CODE",{});var Ig=i(ti);Mm=s(Ig,"__call__"),Ig.forEach(t),jm=s(La," special method."),La.forEach(t),Cm=f(Ft),w(an.$$.fragment,Ft),Pm=f(Ft),w(rn.$$.fragment,Ft),Rm=f(Ft),w(ln.$$.fragment,Ft),Ft.forEach(t),dt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(x_)),u(p,"id","deberta"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#deberta"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(x,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(B,"href","https://github.com/microsoft/DeBERTa"),u(B,"rel","nofollow"),u(P,"href","https://huggingface.co/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://huggingface.co/kamalkraj"),u(oe,"rel","nofollow"),u(V,"href","https://github.com/microsoft/DeBERTa"),u(V,"rel","nofollow"),u(Te,"id","transformers.DebertaConfig"),u(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Te,"href","#transformers.DebertaConfig"),u(pe,"class","relative group"),u(na,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaModel"),u(sa,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaModel"),u(_n,"href","https://huggingface.co/microsoft/deberta-base"),u(_n,"rel","nofollow"),u(aa,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(ra,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(co,"id","transformers.DebertaTokenizer"),u(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(co,"href","#transformers.DebertaTokenizer"),u(zt,"class","relative group"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"id","transformers.DebertaTokenizerFast"),u(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fo,"href","#transformers.DebertaTokenizerFast"),u(jt,"class","relative group"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"id","transformers.DebertaModel"),u(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(uo,"href","#transformers.DebertaModel"),u(Pt,"class","relative group"),u(Pn,"href","https://arxiv.org/abs/2006.03654"),u(Pn,"rel","nofollow"),u(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(An,"rel","nofollow"),u(la,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaModel"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bo,"id","transformers.DebertaPreTrainedModel"),u(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bo,"href","#transformers.DebertaPreTrainedModel"),u(At,"class","relative group"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"id","transformers.DebertaForMaskedLM"),u(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ko,"href","#transformers.DebertaForMaskedLM"),u(Bt,"class","relative group"),u(Nn,"href","https://arxiv.org/abs/2006.03654"),u(Nn,"rel","nofollow"),u(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hn,"rel","nofollow"),u(da,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaForMaskedLM"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"id","transformers.DebertaForSequenceClassification"),u($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($o,"href","#transformers.DebertaForSequenceClassification"),u(Ot,"class","relative group"),u(Vn,"href","https://arxiv.org/abs/2006.03654"),u(Vn,"rel","nofollow"),u(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Xn,"rel","nofollow"),u(ca,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zo,"id","transformers.DebertaForTokenClassification"),u(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zo,"href","#transformers.DebertaForTokenClassification"),u(Wt,"class","relative group"),u(os,"href","https://arxiv.org/abs/2006.03654"),u(os,"rel","nofollow"),u(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ss,"rel","nofollow"),u(pa,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaForTokenClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"id","transformers.DebertaForQuestionAnswering"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.DebertaForQuestionAnswering"),u(Qt,"class","relative group"),u(ds,"href","https://arxiv.org/abs/2006.03654"),u(ds,"rel","nofollow"),u(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ps,"rel","nofollow"),u(ha,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"id","transformers.TFDebertaModel"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.TFDebertaModel"),u(Kt,"class","relative group"),u(gs,"href","https://arxiv.org/abs/2006.03654"),u(gs,"rel","nofollow"),u(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(bs,"rel","nofollow"),u(fa,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaModel"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"id","transformers.TFDebertaPreTrainedModel"),u(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oo,"href","#transformers.TFDebertaPreTrainedModel"),u(Jt,"class","relative group"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.TFDebertaForMaskedLM"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.TFDebertaForMaskedLM"),u(Xt,"class","relative group"),u(Es,"href","https://arxiv.org/abs/2006.03654"),u(Es,"rel","nofollow"),u(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qs,"rel","nofollow"),u(ma,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.TFDebertaForSequenceClassification"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.TFDebertaForSequenceClassification"),u(eo,"class","relative group"),u(Cs,"href","https://arxiv.org/abs/2006.03654"),u(Cs,"rel","nofollow"),u(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Rs,"rel","nofollow"),u(ua,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yo,"id","transformers.TFDebertaForTokenClassification"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#transformers.TFDebertaForTokenClassification"),u(oo,"class","relative group"),u(Is,"href","https://arxiv.org/abs/2006.03654"),u(Is,"rel","nofollow"),u(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ns,"rel","nofollow"),u(ga,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nn,"id","transformers.TFDebertaForQuestionAnswering"),u(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nn,"href","#transformers.TFDebertaForQuestionAnswering"),u(so,"class","relative group"),u(Gs,"href","https://arxiv.org/abs/2006.03654"),u(Gs,"rel","nofollow"),u(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vs,"rel","nofollow"),u(_a,"href","/docs/transformers/v4.21.1/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,l),_(o,g,k),_(o,c,k),e(c,p),e(p,T),$(d,T,null),e(c,m),e(c,z),e(z,he),_(o,X,k),_(o,x,k),e(x,Y),e(Y,S),$(ee,S,null),e(x,fe),e(x,I),e(I,me),_(o,le,k),_(o,W,k),e(W,L),e(W,te),e(te,Z),e(W,M),_(o,C,k),_(o,ne,k),e(ne,H),_(o,de,k),_(o,se,k),e(se,Q),_(o,ce,k),_(o,ae,k),e(ae,j),e(j,ue),e(j,B),e(B,ge),e(j,_e),_(o,O,k),_(o,K,k),e(K,be),e(K,P),e(P,ke),e(K,U),e(K,oe),e(oe,b),e(K,q),e(K,V),e(V,qe),e(K,ze),_(o,A,k),_(o,pe,k),e(pe,Te),e(Te,Ee),$(R,Ee,null),e(pe,G),e(pe,Fe),e(Fe,xe),_(o,N,k),_(o,re,k),$(we,re,null),e(re,ve),e(re,ie),e(ie,Il),e(ie,na),e(na,Ol),e(ie,Nl),e(ie,sa),e(sa,Wl),e(ie,Hl),e(ie,_n),e(_n,Ql),e(ie,Ul),e(re,Gl),e(re,qt),e(qt,Kl),e(qt,aa),e(aa,Vl),e(qt,Jl),e(qt,ra),e(ra,Xl),e(qt,Yl),_(o,qi,k),_(o,zt,k),e(zt,co),e(co,Ba),$(bn,Ba,null),e(zt,Zl),e(zt,Sa),e(Sa,ed),_(o,zi,k),_(o,je,k),$(kn,je,null),e(je,td),e(je,Ia),e(Ia,od),e(je,nd),e(je,ft),$(Tn,ft,null),e(ft,sd),e(ft,Oa),e(Oa,ad),e(ft,rd),e(ft,vn),e(vn,Na),e(Na,id),e(vn,ld),e(vn,Wa),e(Wa,dd),e(je,cd),e(je,po),$(wn,po,null),e(po,pd),e(po,xt),e(xt,hd),e(xt,Ha),e(Ha,fd),e(xt,md),e(xt,Qa),e(Qa,ud),e(xt,gd),e(je,_d),e(je,ot),$($n,ot,null),e(ot,bd),e(ot,Ua),e(Ua,kd),e(ot,Td),$(ho,ot,null),e(ot,vd),e(ot,Mt),e(Mt,wd),e(Mt,Ga),e(Ga,$d),e(Mt,yd),e(Mt,Ka),e(Ka,Dd),e(Mt,Ed),e(je,Fd),e(je,ia),$(yn,ia,null),_(o,xi,k),_(o,jt,k),e(jt,fo),e(fo,Va),$(Dn,Va,null),e(jt,qd),e(jt,Ja),e(Ja,zd),_(o,Mi,k),_(o,Ye,k),$(En,Ye,null),e(Ye,xd),e(Ye,Fn),e(Fn,Md),e(Fn,Xa),e(Xa,jd),e(Fn,Cd),e(Ye,Pd),e(Ye,mt),$(qn,mt,null),e(mt,Rd),e(mt,Ya),e(Ya,Ad),e(mt,Ld),e(mt,zn),e(zn,Za),e(Za,Bd),e(zn,Sd),e(zn,er),e(er,Id),e(Ye,Od),e(Ye,nt),$(xn,nt,null),e(nt,Nd),e(nt,tr),e(tr,Wd),e(nt,Hd),$(mo,nt,null),e(nt,Qd),e(nt,Ct),e(Ct,Ud),e(Ct,or),e(or,Gd),e(Ct,Kd),e(Ct,nr),e(nr,Vd),e(Ct,Jd),_(o,ji,k),_(o,Pt,k),e(Pt,uo),e(uo,sr),$(Mn,sr,null),e(Pt,Xd),e(Pt,ar),e(ar,Yd),_(o,Ci,k),_(o,Ze,k),$(jn,Ze,null),e(Ze,Zd),e(Ze,Cn),e(Cn,ec),e(Cn,Pn),e(Pn,tc),e(Cn,oc),e(Ze,nc),e(Ze,Rn),e(Rn,sc),e(Rn,An),e(An,ac),e(Rn,rc),e(Ze,ic),e(Ze,st),$(Ln,st,null),e(st,lc),e(st,Rt),e(Rt,dc),e(Rt,la),e(la,cc),e(Rt,pc),e(Rt,rr),e(rr,hc),e(Rt,fc),e(st,mc),$(go,st,null),e(st,uc),$(_o,st,null),_(o,Pi,k),_(o,At,k),e(At,bo),e(bo,ir),$(Bn,ir,null),e(At,gc),e(At,lr),e(lr,_c),_(o,Ri,k),_(o,Lt,k),$(Sn,Lt,null),e(Lt,bc),e(Lt,dr),e(dr,kc),_(o,Ai,k),_(o,Bt,k),e(Bt,ko),e(ko,cr),$(In,cr,null),e(Bt,Tc),e(Bt,pr),e(pr,vc),_(o,Li,k),_(o,et,k),$(On,et,null),e(et,wc),e(et,St),e(St,$c),e(St,hr),e(hr,yc),e(St,Dc),e(St,Nn),e(Nn,Ec),e(St,Fc),e(et,qc),e(et,Wn),e(Wn,zc),e(Wn,Hn),e(Hn,xc),e(Wn,Mc),e(et,jc),e(et,He),$(Qn,He,null),e(He,Cc),e(He,It),e(It,Pc),e(It,da),e(da,Rc),e(It,Ac),e(It,fr),e(fr,Lc),e(It,Bc),e(He,Sc),$(To,He,null),e(He,Ic),$(vo,He,null),e(He,Oc),$(wo,He,null),_(o,Bi,k),_(o,Ot,k),e(Ot,$o),e($o,mr),$(Un,mr,null),e(Ot,Nc),e(Ot,ur),e(ur,Wc),_(o,Si,k),_(o,Le,k),$(Gn,Le,null),e(Le,Hc),e(Le,gr),e(gr,Qc),e(Le,Uc),e(Le,Kn),e(Kn,Gc),e(Kn,Vn),e(Vn,Kc),e(Kn,Vc),e(Le,Jc),e(Le,Jn),e(Jn,Xc),e(Jn,Xn),e(Xn,Yc),e(Jn,Zc),e(Le,ep),e(Le,Me),$(Yn,Me,null),e(Me,tp),e(Me,Nt),e(Nt,op),e(Nt,ca),e(ca,np),e(Nt,sp),e(Nt,_r),e(_r,ap),e(Nt,rp),e(Me,ip),$(yo,Me,null),e(Me,lp),$(Do,Me,null),e(Me,dp),$(Eo,Me,null),e(Me,cp),$(Fo,Me,null),e(Me,pp),$(qo,Me,null),_(o,Ii,k),_(o,Wt,k),e(Wt,zo),e(zo,br),$(Zn,br,null),e(Wt,hp),e(Wt,kr),e(kr,fp),_(o,Oi,k),_(o,Be,k),$(es,Be,null),e(Be,mp),e(Be,Tr),e(Tr,up),e(Be,gp),e(Be,ts),e(ts,_p),e(ts,os),e(os,bp),e(ts,kp),e(Be,Tp),e(Be,ns),e(ns,vp),e(ns,ss),e(ss,wp),e(ns,$p),e(Be,yp),e(Be,Qe),$(as,Qe,null),e(Qe,Dp),e(Qe,Ht),e(Ht,Ep),e(Ht,pa),e(pa,Fp),e(Ht,qp),e(Ht,vr),e(vr,zp),e(Ht,xp),e(Qe,Mp),$(xo,Qe,null),e(Qe,jp),$(Mo,Qe,null),e(Qe,Cp),$(jo,Qe,null),_(o,Ni,k),_(o,Qt,k),e(Qt,Co),e(Co,wr),$(rs,wr,null),e(Qt,Pp),e(Qt,$r),e($r,Rp),_(o,Wi,k),_(o,Se,k),$(is,Se,null),e(Se,Ap),e(Se,Ut),e(Ut,Lp),e(Ut,yr),e(yr,Bp),e(Ut,Sp),e(Ut,Dr),e(Dr,Ip),e(Ut,Op),e(Se,Np),e(Se,ls),e(ls,Wp),e(ls,ds),e(ds,Hp),e(ls,Qp),e(Se,Up),e(Se,cs),e(cs,Gp),e(cs,ps),e(ps,Kp),e(cs,Vp),e(Se,Jp),e(Se,Ue),$(hs,Ue,null),e(Ue,Xp),e(Ue,Gt),e(Gt,Yp),e(Gt,ha),e(ha,Zp),e(Gt,eh),e(Gt,Er),e(Er,th),e(Gt,oh),e(Ue,nh),$(Po,Ue,null),e(Ue,sh),$(Ro,Ue,null),e(Ue,ah),$(Ao,Ue,null),_(o,Hi,k),_(o,Kt,k),e(Kt,Lo),e(Lo,Fr),$(fs,Fr,null),e(Kt,rh),e(Kt,qr),e(qr,ih),_(o,Qi,k),_(o,Ie,k),$(ms,Ie,null),e(Ie,lh),e(Ie,us),e(us,dh),e(us,gs),e(gs,ch),e(us,ph),e(Ie,hh),e(Ie,_s),e(_s,fh),e(_s,bs),e(bs,mh),e(_s,uh),e(Ie,gh),$(Bo,Ie,null),e(Ie,_h),e(Ie,at),$(ks,at,null),e(at,bh),e(at,Vt),e(Vt,kh),e(Vt,fa),e(fa,Th),e(Vt,vh),e(Vt,zr),e(zr,wh),e(Vt,$h),e(at,yh),$(So,at,null),e(at,Dh),$(Io,at,null),_(o,Ui,k),_(o,Jt,k),e(Jt,Oo),e(Oo,xr),$(Ts,xr,null),e(Jt,Eh),e(Jt,Mr),e(Mr,Fh),_(o,Gi,k),_(o,ct,k),$(vs,ct,null),e(ct,qh),e(ct,jr),e(jr,zh),e(ct,xh),e(ct,rt),$(ws,rt,null),e(rt,Mh),e(rt,Cr),e(Cr,jh),e(rt,Ch),e(rt,$s),e($s,Ph),e($s,Pr),e(Pr,Rh),e($s,Ah),e(rt,Lh),e(rt,tt),e(tt,Bh),e(tt,Rr),e(Rr,Sh),e(tt,Ih),e(tt,Ar),e(Ar,Oh),e(tt,Nh),e(tt,Lr),e(Lr,Wh),e(tt,Hh),e(tt,Br),e(Br,Qh),e(tt,Uh),_(o,Ki,k),_(o,Xt,k),e(Xt,No),e(No,Sr),$(ys,Sr,null),e(Xt,Gh),e(Xt,Ir),e(Ir,Kh),_(o,Vi,k),_(o,Oe,k),$(Ds,Oe,null),e(Oe,Vh),e(Oe,Yt),e(Yt,Jh),e(Yt,Or),e(Or,Xh),e(Yt,Yh),e(Yt,Es),e(Es,Zh),e(Yt,ef),e(Oe,tf),e(Oe,Fs),e(Fs,of),e(Fs,qs),e(qs,nf),e(Fs,sf),e(Oe,af),$(Wo,Oe,null),e(Oe,rf),e(Oe,Ge),$(zs,Ge,null),e(Ge,lf),e(Ge,Zt),e(Zt,df),e(Zt,ma),e(ma,cf),e(Zt,pf),e(Zt,Nr),e(Nr,hf),e(Zt,ff),e(Ge,mf),$(Ho,Ge,null),e(Ge,uf),$(Qo,Ge,null),e(Ge,gf),$(Uo,Ge,null),_(o,Ji,k),_(o,eo,k),e(eo,Go),e(Go,Wr),$(xs,Wr,null),e(eo,_f),e(eo,Hr),e(Hr,bf),_(o,Xi,k),_(o,Ce,k),$(Ms,Ce,null),e(Ce,kf),e(Ce,Qr),e(Qr,Tf),e(Ce,vf),e(Ce,js),e(js,wf),e(js,Cs),e(Cs,$f),e(js,yf),e(Ce,Df),e(Ce,Ps),e(Ps,Ef),e(Ps,Rs),e(Rs,Ff),e(Ps,qf),e(Ce,zf),$(Ko,Ce,null),e(Ce,xf),e(Ce,Ke),$(As,Ke,null),e(Ke,Mf),e(Ke,to),e(to,jf),e(to,ua),e(ua,Cf),e(to,Pf),e(to,Ur),e(Ur,Rf),e(to,Af),e(Ke,Lf),$(Vo,Ke,null),e(Ke,Bf),$(Jo,Ke,null),e(Ke,Sf),$(Xo,Ke,null),_(o,Yi,k),_(o,oo,k),e(oo,Yo),e(Yo,Gr),$(Ls,Gr,null),e(oo,If),e(oo,Kr),e(Kr,Of),_(o,Zi,k),_(o,Pe,k),$(Bs,Pe,null),e(Pe,Nf),e(Pe,Vr),e(Vr,Wf),e(Pe,Hf),e(Pe,Ss),e(Ss,Qf),e(Ss,Is),e(Is,Uf),e(Ss,Gf),e(Pe,Kf),e(Pe,Os),e(Os,Vf),e(Os,Ns),e(Ns,Jf),e(Os,Xf),e(Pe,Yf),$(Zo,Pe,null),e(Pe,Zf),e(Pe,Ve),$(Ws,Ve,null),e(Ve,em),e(Ve,no),e(no,tm),e(no,ga),e(ga,om),e(no,nm),e(no,Jr),e(Jr,sm),e(no,am),e(Ve,rm),$(en,Ve,null),e(Ve,im),$(tn,Ve,null),e(Ve,lm),$(on,Ve,null),_(o,el,k),_(o,so,k),e(so,nn),e(nn,Xr),$(Hs,Xr,null),e(so,dm),e(so,Yr),e(Yr,cm),_(o,tl,k),_(o,Re,k),$(Qs,Re,null),e(Re,pm),e(Re,ao),e(ao,hm),e(ao,Zr),e(Zr,fm),e(ao,mm),e(ao,ei),e(ei,um),e(ao,gm),e(Re,_m),e(Re,Us),e(Us,bm),e(Us,Gs),e(Gs,km),e(Us,Tm),e(Re,vm),e(Re,Ks),e(Ks,wm),e(Ks,Vs),e(Vs,$m),e(Ks,ym),e(Re,Dm),$(sn,Re,null),e(Re,Em),e(Re,Je),$(Js,Je,null),e(Je,Fm),e(Je,ro),e(ro,qm),e(ro,_a),e(_a,zm),e(ro,xm),e(ro,ti),e(ti,Mm),e(ro,jm),e(Je,Cm),$(an,Je,null),e(Je,Pm),$(rn,Je,null),e(Je,Rm),$(ln,Je,null),ol=!0},p(o,[k]){const Xs={};k&2&&(Xs.$$scope={dirty:k,ctx:o}),ho.$set(Xs);const oi={};k&2&&(oi.$$scope={dirty:k,ctx:o}),mo.$set(oi);const ni={};k&2&&(ni.$$scope={dirty:k,ctx:o}),go.$set(ni);const si={};k&2&&(si.$$scope={dirty:k,ctx:o}),_o.$set(si);const Ys={};k&2&&(Ys.$$scope={dirty:k,ctx:o}),To.$set(Ys);const ai={};k&2&&(ai.$$scope={dirty:k,ctx:o}),vo.$set(ai);const ri={};k&2&&(ri.$$scope={dirty:k,ctx:o}),wo.$set(ri);const ii={};k&2&&(ii.$$scope={dirty:k,ctx:o}),yo.$set(ii);const Zs={};k&2&&(Zs.$$scope={dirty:k,ctx:o}),Do.$set(Zs);const li={};k&2&&(li.$$scope={dirty:k,ctx:o}),Eo.$set(li);const di={};k&2&&(di.$$scope={dirty:k,ctx:o}),Fo.$set(di);const ci={};k&2&&(ci.$$scope={dirty:k,ctx:o}),qo.$set(ci);const pi={};k&2&&(pi.$$scope={dirty:k,ctx:o}),xo.$set(pi);const ea={};k&2&&(ea.$$scope={dirty:k,ctx:o}),Mo.$set(ea);const hi={};k&2&&(hi.$$scope={dirty:k,ctx:o}),jo.$set(hi);const pt={};k&2&&(pt.$$scope={dirty:k,ctx:o}),Po.$set(pt);const fi={};k&2&&(fi.$$scope={dirty:k,ctx:o}),Ro.$set(fi);const mi={};k&2&&(mi.$$scope={dirty:k,ctx:o}),Ao.$set(mi);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:o}),Bo.$set(ui);const ta={};k&2&&(ta.$$scope={dirty:k,ctx:o}),So.$set(ta);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:o}),Io.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:o}),Wo.$set(_i);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:o}),Ho.$set(bi);const io={};k&2&&(io.$$scope={dirty:k,ctx:o}),Qo.$set(io);const ht={};k&2&&(ht.$$scope={dirty:k,ctx:o}),Uo.$set(ht);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:o}),Ko.$set(ki);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:o}),Vo.$set(Ti);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:o}),Jo.$set(vi);const lo={};k&2&&(lo.$$scope={dirty:k,ctx:o}),Xo.$set(lo);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:o}),Zo.$set(wi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:o}),en.$set($i);const oa={};k&2&&(oa.$$scope={dirty:k,ctx:o}),tn.$set(oa);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:o}),on.$set(yi);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:o}),sn.$set(Di);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),an.$set(Ei);const Ne={};k&2&&(Ne.$$scope={dirty:k,ctx:o}),rn.$set(Ne);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),ln.$set(Fi)},i(o){ol||(y(d.$$.fragment,o),y(ee.$$.fragment,o),y(R.$$.fragment,o),y(we.$$.fragment,o),y(bn.$$.fragment,o),y(kn.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(ho.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y(En.$$.fragment,o),y(qn.$$.fragment,o),y(xn.$$.fragment,o),y(mo.$$.fragment,o),y(Mn.$$.fragment,o),y(jn.$$.fragment,o),y(Ln.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(Bn.$$.fragment,o),y(Sn.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(Qn.$$.fragment,o),y(To.$$.fragment,o),y(vo.$$.fragment,o),y(wo.$$.fragment,o),y(Un.$$.fragment,o),y(Gn.$$.fragment,o),y(Yn.$$.fragment,o),y(yo.$$.fragment,o),y(Do.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(qo.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(as.$$.fragment,o),y(xo.$$.fragment,o),y(Mo.$$.fragment,o),y(jo.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(hs.$$.fragment,o),y(Po.$$.fragment,o),y(Ro.$$.fragment,o),y(Ao.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(Bo.$$.fragment,o),y(ks.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(Ts.$$.fragment,o),y(vs.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(Ds.$$.fragment,o),y(Wo.$$.fragment,o),y(zs.$$.fragment,o),y(Ho.$$.fragment,o),y(Qo.$$.fragment,o),y(Uo.$$.fragment,o),y(xs.$$.fragment,o),y(Ms.$$.fragment,o),y(Ko.$$.fragment,o),y(As.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Ls.$$.fragment,o),y(Bs.$$.fragment,o),y(Zo.$$.fragment,o),y(Ws.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(Hs.$$.fragment,o),y(Qs.$$.fragment,o),y(sn.$$.fragment,o),y(Js.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),ol=!0)},o(o){D(d.$$.fragment,o),D(ee.$$.fragment,o),D(R.$$.fragment,o),D(we.$$.fragment,o),D(bn.$$.fragment,o),D(kn.$$.fragment,o),D(Tn.$$.fragment,o),D(wn.$$.fragment,o),D($n.$$.fragment,o),D(ho.$$.fragment,o),D(yn.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D(qn.$$.fragment,o),D(xn.$$.fragment,o),D(mo.$$.fragment,o),D(Mn.$$.fragment,o),D(jn.$$.fragment,o),D(Ln.$$.fragment,o),D(go.$$.fragment,o),D(_o.$$.fragment,o),D(Bn.$$.fragment,o),D(Sn.$$.fragment,o),D(In.$$.fragment,o),D(On.$$.fragment,o),D(Qn.$$.fragment,o),D(To.$$.fragment,o),D(vo.$$.fragment,o),D(wo.$$.fragment,o),D(Un.$$.fragment,o),D(Gn.$$.fragment,o),D(Yn.$$.fragment,o),D(yo.$$.fragment,o),D(Do.$$.fragment,o),D(Eo.$$.fragment,o),D(Fo.$$.fragment,o),D(qo.$$.fragment,o),D(Zn.$$.fragment,o),D(es.$$.fragment,o),D(as.$$.fragment,o),D(xo.$$.fragment,o),D(Mo.$$.fragment,o),D(jo.$$.fragment,o),D(rs.$$.fragment,o),D(is.$$.fragment,o),D(hs.$$.fragment,o),D(Po.$$.fragment,o),D(Ro.$$.fragment,o),D(Ao.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(Bo.$$.fragment,o),D(ks.$$.fragment,o),D(So.$$.fragment,o),D(Io.$$.fragment,o),D(Ts.$$.fragment,o),D(vs.$$.fragment,o),D(ws.$$.fragment,o),D(ys.$$.fragment,o),D(Ds.$$.fragment,o),D(Wo.$$.fragment,o),D(zs.$$.fragment,o),D(Ho.$$.fragment,o),D(Qo.$$.fragment,o),D(Uo.$$.fragment,o),D(xs.$$.fragment,o),D(Ms.$$.fragment,o),D(Ko.$$.fragment,o),D(As.$$.fragment,o),D(Vo.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Ls.$$.fragment,o),D(Bs.$$.fragment,o),D(Zo.$$.fragment,o),D(Ws.$$.fragment,o),D(en.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(Hs.$$.fragment,o),D(Qs.$$.fragment,o),D(sn.$$.fragment,o),D(Js.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),ol=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(X),o&&t(x),E(ee),o&&t(le),o&&t(W),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(O),o&&t(K),o&&t(A),o&&t(pe),E(R),o&&t(N),o&&t(re),E(we),o&&t(qi),o&&t(zt),E(bn),o&&t(zi),o&&t(je),E(kn),E(Tn),E(wn),E($n),E(ho),E(yn),o&&t(xi),o&&t(jt),E(Dn),o&&t(Mi),o&&t(Ye),E(En),E(qn),E(xn),E(mo),o&&t(ji),o&&t(Pt),E(Mn),o&&t(Ci),o&&t(Ze),E(jn),E(Ln),E(go),E(_o),o&&t(Pi),o&&t(At),E(Bn),o&&t(Ri),o&&t(Lt),E(Sn),o&&t(Ai),o&&t(Bt),E(In),o&&t(Li),o&&t(et),E(On),E(Qn),E(To),E(vo),E(wo),o&&t(Bi),o&&t(Ot),E(Un),o&&t(Si),o&&t(Le),E(Gn),E(Yn),E(yo),E(Do),E(Eo),E(Fo),E(qo),o&&t(Ii),o&&t(Wt),E(Zn),o&&t(Oi),o&&t(Be),E(es),E(as),E(xo),E(Mo),E(jo),o&&t(Ni),o&&t(Qt),E(rs),o&&t(Wi),o&&t(Se),E(is),E(hs),E(Po),E(Ro),E(Ao),o&&t(Hi),o&&t(Kt),E(fs),o&&t(Qi),o&&t(Ie),E(ms),E(Bo),E(ks),E(So),E(Io),o&&t(Ui),o&&t(Jt),E(Ts),o&&t(Gi),o&&t(ct),E(vs),E(ws),o&&t(Ki),o&&t(Xt),E(ys),o&&t(Vi),o&&t(Oe),E(Ds),E(Wo),E(zs),E(Ho),E(Qo),E(Uo),o&&t(Ji),o&&t(eo),E(xs),o&&t(Xi),o&&t(Ce),E(Ms),E(Ko),E(As),E(Vo),E(Jo),E(Xo),o&&t(Yi),o&&t(oo),E(Ls),o&&t(Zi),o&&t(Pe),E(Bs),E(Zo),E(Ws),E(en),E(tn),E(on),o&&t(el),o&&t(so),E(Hs),o&&t(tl),o&&t(Re),E(Qs),E(sn),E(Js),E(an),E(rn),E(ln)}}}const x_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function M_(F){return Qg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B_ extends Og{constructor(l){super();Ng(this,l,M_,z_,Wg,{})}}export{B_ as default,x_ as metadata};
