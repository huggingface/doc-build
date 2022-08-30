import{S as q$,i as x$,s as P$,e as r,k as u,w as b,t as o,M as C$,c as a,d as n,m as f,a as i,x as v,h as s,b as h,G as e,g as _,y as w,q as y,o as $,B as E,v as j$,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as Pe}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function L$(z){let d,T,c,p,k;return p=new ye({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),T=o("Transformer sequence pair mask has the following format:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Transformer sequence pair mask has the following format:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function O$(z){let d,T,c,p,k;return p=new ye({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),T=o("Transformer sequence pair mask has the following format:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Transformer sequence pair mask has the following format:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function A$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function D$(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelBaseModel.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelBaseModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelBaseModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function N$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function S$(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelModel
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelModel.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function I$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function W$(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),T=o("Examples:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Examples:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function B$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function Q$(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForMaskedLM.from_pretrained("funnel-transformer/small")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function U$(z){let d,T;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function R$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function V$(z){let d,T,c,p,k;return p=new ye({props:{code:`import torch
from transformers import FunnelTokenizer, FunnelForSequenceClassification

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),T=o("Example of single-label classification:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example of single-label classification:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function H$(z){let d,T;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function Y$(z){let d,T,c,p,k;return p=new ye({props:{code:`import torch
from transformers import FunnelTokenizer, FunnelForSequenceClassification

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),T=o("Example of multi-label classification:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example of multi-label classification:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function K$(z){let d,T;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FunnelForSequenceClassification.from_pretrained(
    "funnel-transformer/small-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function G$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function Z$(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelForMultipleChoice.from_pretrained("funnel-transformer/small-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function X$(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function J$(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForTokenClassification.from_pretrained("funnel-transformer/small")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

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
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function e1(z){let d,T;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function n1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function t1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForQuestionAnswering.from_pretrained("funnel-transformer/small")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function o1(z){let d,T;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function s1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function r1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function a1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = TFFunnelBaseModel.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelBaseModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelBaseModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function i1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function l1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function d1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelModel.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function c1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function p1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function u1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),T=o("Examples:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Examples:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function f1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function m1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function h1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForMaskedLM.from_pretrained("funnel-transformer/small")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function g1(z){let d,T;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function _1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function T1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function k1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = TFFunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function F1(z){let d,T;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFFunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function b1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function v1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function w1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = TFFunnelForMultipleChoice.from_pretrained("funnel-transformer/small-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function y1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function $1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function E1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForTokenClassification.from_pretrained("funnel-transformer/small")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

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
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function M1(z){let d,T;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function z1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge;return{c(){d=r("p"),T=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),k=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),me=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),he=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);T=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);k=a(Z,"LI",{});var Te=i(k);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(n),m=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var ke=i(N);ne=s(ke,"tf.keras.Model.fit"),ke.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var Fe=i(I);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var be=i(U);he=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,T),_(g,c,M),_(g,p,M),e(p,k),e(k,l),e(p,m),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,me),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,he),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function q1(z){let d,T,c,p,k;return{c(){d=r("p"),T=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),k=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(n)},m(l,m){_(l,d,m),e(d,T),e(d,c),e(c,p),e(d,k)},d(l){l&&n(d)}}}function x1(z){let d,T,c,p,k;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForQuestionAnswering.from_pretrained("funnel-transformer/small")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),T=o("Example:"),c=u(),b(p.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(n),c=f(l),v(p.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,c,m),w(p,l,m),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function P1(z){let d,T;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),T=!0},p:we,i(c){T||(y(d.$$.fragment,c),T=!0)},o(c){$(d.$$.fragment,c),T=!1},d(c){E(d,c)}}}function C1(z){let d,T,c,p,k,l,m,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,me,B,ee,ae,U,he,W,A,re,R,ge,g,M,Z,Te,$e,D,ke,Ee,Me,L,V,ze,Fe,H,qe,be,_e,xe,fi,Zu,Xu,Wc,An,Ju,ks,ef,nf,Fs,tf,of,Bc,Vn,It,El,bs,sf,Ml,rf,Qc,jn,vs,af,Ln,lf,mi,df,cf,hi,pf,uf,ws,ff,mf,hf,Hn,gf,gi,_f,Tf,_i,kf,Ff,Uc,Yn,Wt,zl,ys,bf,ql,vf,Rc,je,$s,wf,xl,yf,$f,Bt,Ti,Ef,Mf,ki,zf,qf,xf,Es,Pf,Fi,Cf,jf,Lf,Dn,Ms,Of,Pl,Af,Df,zs,bi,Nf,Cl,Sf,If,vi,Wf,jl,Bf,Qf,Qt,qs,Uf,xs,Rf,Ll,Vf,Hf,Yf,gn,Ps,Kf,Ol,Gf,Zf,Ut,Xf,Kn,Jf,Al,em,nm,Dl,tm,om,sm,wi,Cs,Vc,Gn,Rt,Nl,js,rm,Sl,am,Hc,Xe,Ls,im,Os,lm,Il,dm,cm,pm,Vt,yi,um,fm,$i,mm,hm,gm,As,_m,Ei,Tm,km,Fm,_n,Ds,bm,Wl,vm,wm,Ht,ym,Zn,$m,Bl,Em,Mm,Ql,zm,qm,Yc,Xn,Yt,Ul,Ns,xm,Rl,Pm,Kc,Jn,Ss,Cm,Is,jm,Mi,Lm,Om,Gc,et,Ws,Am,Bs,Dm,zi,Nm,Sm,Zc,nt,Kt,Vl,Qs,Im,Hl,Wm,Xc,Re,Us,Bm,Yl,Qm,Um,Rs,Rm,Vs,Vm,Hm,Ym,Hs,Km,qi,Gm,Zm,Xm,Ys,Jm,Ks,eh,nh,th,Tn,Gs,oh,tt,sh,xi,rh,ah,Kl,ih,lh,dh,Gt,ch,Zt,Jc,ot,Xt,Gl,Zs,ph,Zl,uh,ep,Ve,Xs,fh,Xl,mh,hh,Js,gh,er,_h,Th,kh,nr,Fh,Pi,bh,vh,wh,tr,yh,or,$h,Eh,Mh,kn,sr,zh,st,qh,Ci,xh,Ph,Jl,Ch,jh,Lh,Jt,Oh,eo,np,rt,no,ed,rr,Ah,nd,Dh,tp,at,ar,Nh,Fn,ir,Sh,it,Ih,ji,Wh,Bh,td,Qh,Uh,Rh,to,Vh,oo,op,lt,so,od,lr,Hh,sd,Yh,sp,He,dr,Kh,cr,Gh,rd,Zh,Xh,Jh,pr,eg,ur,ng,tg,og,fr,sg,Li,rg,ag,ig,mr,lg,hr,dg,cg,pg,Je,gr,ug,dt,fg,Oi,mg,hg,ad,gg,_g,Tg,ro,kg,ao,Fg,io,rp,ct,lo,id,_r,bg,ld,vg,ap,Ye,Tr,wg,dd,yg,$g,kr,Eg,Fr,Mg,zg,qg,br,xg,Ai,Pg,Cg,jg,vr,Lg,wr,Og,Ag,Dg,Ue,yr,Ng,pt,Sg,Di,Ig,Wg,cd,Bg,Qg,Ug,co,Rg,po,Vg,uo,Hg,fo,Yg,mo,ip,ut,ho,pd,$r,Kg,ud,Gg,lp,Ke,Er,Zg,fd,Xg,Jg,Mr,e_,zr,n_,t_,o_,qr,s_,Ni,r_,a_,i_,xr,l_,Pr,d_,c_,p_,bn,Cr,u_,ft,f_,Si,m_,h_,md,g_,__,T_,go,k_,_o,dp,mt,To,hd,jr,F_,gd,b_,cp,Ge,Lr,v_,_d,w_,y_,Or,$_,Ar,E_,M_,z_,Dr,q_,Ii,x_,P_,C_,Nr,j_,Sr,L_,O_,A_,en,Ir,D_,ht,N_,Wi,S_,I_,Td,W_,B_,Q_,ko,U_,Fo,R_,bo,pp,gt,vo,kd,Wr,V_,Fd,H_,up,Ze,Br,Y_,_t,K_,bd,G_,Z_,vd,X_,J_,eT,Qr,nT,Ur,tT,oT,sT,Rr,rT,Bi,aT,iT,lT,Vr,dT,Hr,cT,pT,uT,nn,Yr,fT,Tt,mT,Qi,hT,gT,wd,_T,TT,kT,wo,FT,yo,bT,$o,fp,kt,Eo,yd,Kr,vT,$d,wT,mp,Oe,Gr,yT,Ed,$T,ET,Zr,MT,Xr,zT,qT,xT,Jr,PT,Ui,CT,jT,LT,ea,OT,na,AT,DT,NT,Mo,ST,vn,ta,IT,Ft,WT,Ri,BT,QT,Md,UT,RT,VT,zo,HT,qo,hp,bt,xo,zd,oa,YT,qd,KT,gp,Ae,sa,GT,xd,ZT,XT,ra,JT,aa,ek,nk,tk,ia,ok,Vi,sk,rk,ak,la,ik,da,lk,dk,ck,Po,pk,wn,ca,uk,vt,fk,Hi,mk,hk,Pd,gk,_k,Tk,Co,kk,jo,_p,wt,Lo,Cd,pa,Fk,jd,bk,Tp,De,ua,vk,Ld,wk,yk,fa,$k,ma,Ek,Mk,zk,ha,qk,Yi,xk,Pk,Ck,ga,jk,_a,Lk,Ok,Ak,Oo,Dk,yn,Ta,Nk,yt,Sk,Ki,Ik,Wk,Od,Bk,Qk,Uk,Ao,Rk,Do,kp,$t,No,Ad,ka,Vk,Dd,Hk,Fp,Ne,Fa,Yk,ba,Kk,Nd,Gk,Zk,Xk,va,Jk,wa,eF,nF,tF,ya,oF,Gi,sF,rF,aF,$a,iF,Ea,lF,dF,cF,So,pF,tn,Ma,uF,Et,fF,Zi,mF,hF,Sd,gF,_F,TF,Io,kF,Wo,FF,Bo,bp,Mt,Qo,Id,za,bF,Wd,vF,vp,Se,qa,wF,Bd,yF,$F,xa,EF,Pa,MF,zF,qF,Ca,xF,Xi,PF,CF,jF,ja,LF,La,OF,AF,DF,Uo,NF,on,Oa,SF,zt,IF,Ji,WF,BF,Qd,QF,UF,RF,Ro,VF,Vo,HF,Ho,wp,qt,Yo,Ud,Aa,YF,Rd,KF,yp,Ie,Da,GF,Vd,ZF,XF,Na,JF,Sa,eb,nb,tb,Ia,ob,el,sb,rb,ab,Wa,ib,Ba,lb,db,cb,Ko,pb,$n,Qa,ub,xt,fb,nl,mb,hb,Hd,gb,_b,Tb,Go,kb,Zo,$p,Pt,Xo,Yd,Ua,Fb,Kd,bb,Ep,We,Ra,vb,Gd,wb,yb,Va,$b,Ha,Eb,Mb,zb,Ya,qb,tl,xb,Pb,Cb,Ka,jb,Ga,Lb,Ob,Ab,Jo,Db,sn,Za,Nb,Ct,Sb,ol,Ib,Wb,Zd,Bb,Qb,Ub,es,Rb,ns,Vb,ts,Mp,jt,os,Xd,Xa,Hb,Jd,Yb,zp,Be,Ja,Kb,Lt,Gb,ec,Zb,Xb,nc,Jb,ev,nv,ei,tv,ni,ov,sv,rv,ti,av,sl,iv,lv,dv,oi,cv,si,pv,uv,fv,ss,mv,rn,ri,hv,Ot,gv,rl,_v,Tv,tc,kv,Fv,bv,rs,vv,as,wv,is,qp;return l=new Ce({}),ne=new Ce({}),bs=new Ce({}),vs=new X({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Funnel transformer. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"vocab_size"},{anchor:"transformers.FunnelConfig.block_sizes",description:`<strong>block_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4]</code>) &#x2014;
The sizes of the blocks used in the model.`,name:"block_sizes"},{anchor:"transformers.FunnelConfig.block_repeats",description:`<strong>block_repeats</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
If passed along, each layer of each block is repeated the number of times indicated.`,name:"block_repeats"},{anchor:"transformers.FunnelConfig.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The number of layers in the decoder (when not using the base model).`,name:"num_decoder_layers"},{anchor:"transformers.FunnelConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the model&#x2019;s hidden states.`,name:"d_model"},{anchor:"transformers.FunnelConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.FunnelConfig.d_head",description:`<strong>d_head</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the model&#x2019;s heads.`,name:"d_head"},{anchor:"transformers.FunnelConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Inner dimension in the feed-forward blocks.`,name:"d_inner"},{anchor:"transformers.FunnelConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.FunnelConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.FunnelConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.FunnelConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability used between the two layers of the feed-forward blocks.`,name:"activation_dropout"},{anchor:"transformers.FunnelConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FunnelConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.FunnelConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The upper bound of the <em>uniform initializer</em> for initializing all weight matrices in attention layers.`,name:"initializer_range"},{anchor:"transformers.FunnelConfig.initializer_std",description:`<strong>initializer_std</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The standard deviation of the <em>normal initializer</em> for initializing the embedding matrix and the weight of
linear layers. Will default to 1 for the embedding matrix and the value given by Xavier initialization for
linear layers.`,name:"initializer_std"},{anchor:"transformers.FunnelConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-9) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FunnelConfig.pooling_type",description:`<strong>pooling_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Possible values are <code>&quot;mean&quot;</code> or <code>&quot;max&quot;</code>. The way pooling is performed at the beginning of each block.`,name:"pooling_type"},{anchor:"transformers.FunnelConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relative_shift&quot;</code>) &#x2014;
Possible values are <code>&quot;relative_shift&quot;</code> or <code>&quot;factorized&quot;</code>. The former is faster on CPU/GPU while the latter
is faster on TPU.`,name:"attention_type"},{anchor:"transformers.FunnelConfig.separate_cls",description:`<strong>separate_cls</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to separate the cls token when applying pooling.`,name:"separate_cls"},{anchor:"transformers.FunnelConfig.truncate_seq",description:`<strong>truncate_seq</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
When using <code>separate_cls</code>, whether or not to truncate the last token when pooling, to avoid getting a
sequence length that is not a multiple of 2.`,name:"truncate_seq"},{anchor:"transformers.FunnelConfig.pool_q_only",description:`<strong>pool_q_only</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/configuration_funnel.py#L41"}}),ys=new Ce({}),$s=new X({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L66"}}),Ms=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qs=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ps=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L116",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ut=new ve({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[L$]},$$scope:{ctx:z}}}),Cs=new X({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),js=new Ce({}),Ls=new X({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L91"}}),Ds=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L144",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ht=new ve({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[O$]},$$scope:{ctx:z}}}),Ns=new Ce({}),Ss=new X({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA-style objective.`,name:"loss"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L834"}}),Ws=new X({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L978"}}),Qs=new Ce({}),Us=new X({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L927"}}),Gs=new X({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelBaseModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelBaseModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelBaseModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelBaseModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelBaseModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelBaseModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L943",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),Gt=new Pe({props:{$$slots:{default:[A$]},$$scope:{ctx:z}}}),Zt=new ve({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[D$]},$$scope:{ctx:z}}}),Zs=new Ce({}),Xs=new X({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),sr=new X({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1021",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),Jt=new Pe({props:{$$slots:{default:[N$]},$$scope:{ctx:z}}}),eo=new ve({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[S$]},$$scope:{ctx:z}}}),rr=new Ce({}),ar=new X({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),ir=new X({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA-style loss. Input should be a sequence of tokens (see <code>input_ids</code>
docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1121",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA-style objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new Pe({props:{$$slots:{default:[I$]},$$scope:{ctx:z}}}),oo=new ve({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[W$]},$$scope:{ctx:z}}}),lr=new Ce({}),dr=new X({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),gr=new X({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1211",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),ro=new Pe({props:{$$slots:{default:[B$]},$$scope:{ctx:z}}}),ao=new ve({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[Q$]},$$scope:{ctx:z}}}),io=new ve({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[U$]},$$scope:{ctx:z}}}),_r=new Ce({}),Tr=new X({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),yr=new X({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),co=new Pe({props:{$$slots:{default:[R$]},$$scope:{ctx:z}}}),po=new ve({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[V$]},$$scope:{ctx:z}}}),uo=new ve({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[H$]},$$scope:{ctx:z}}}),fo=new ve({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[Y$]},$$scope:{ctx:z}}}),mo=new ve({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[K$]},$$scope:{ctx:z}}}),$r=new Ce({}),Er=new X({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Cr=new X({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),go=new Pe({props:{$$slots:{default:[G$]},$$scope:{ctx:z}}}),_o=new ve({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[Z$]},$$scope:{ctx:z}}}),jr=new Ce({}),Lr=new X({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),Ir=new X({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1464",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),ko=new Pe({props:{$$slots:{default:[X$]},$$scope:{ctx:z}}}),Fo=new ve({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[J$]},$$scope:{ctx:z}}}),bo=new ve({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[e1]},$$scope:{ctx:z}}}),Wr=new Ce({}),Br=new X({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),Yr=new X({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),wo=new Pe({props:{$$slots:{default:[n1]},$$scope:{ctx:z}}}),yo=new ve({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[t1]},$$scope:{ctx:z}}}),$o=new ve({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[o1]},$$scope:{ctx:z}}}),Kr=new Ce({}),Gr=new X({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1095"}}),Mo=new Pe({props:{$$slots:{default:[s1]},$$scope:{ctx:z}}}),ta=new X({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelBaseModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelBaseModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelBaseModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelBaseModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelBaseModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelBaseModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelBaseModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1100",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),zo=new Pe({props:{$$slots:{default:[r1]},$$scope:{ctx:z}}}),qo=new ve({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[a1]},$$scope:{ctx:z}}}),oa=new Ce({}),sa=new X({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1144"}}),Po=new Pe({props:{$$slots:{default:[i1]},$$scope:{ctx:z}}}),ca=new X({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1149",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),Co=new Pe({props:{$$slots:{default:[l1]},$$scope:{ctx:z}}}),jo=new ve({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[d1]},$$scope:{ctx:z}}}),pa=new Ce({}),ua=new X({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1196"}}),Oo=new Pe({props:{$$slots:{default:[c1]},$$scope:{ctx:z}}}),Ta=new X({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1203",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ao=new Pe({props:{$$slots:{default:[p1]},$$scope:{ctx:z}}}),Do=new ve({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[u1]},$$scope:{ctx:z}}}),ka=new Ce({}),Fa=new X({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1264"}}),So=new Pe({props:{$$slots:{default:[f1]},$$scope:{ctx:z}}}),Ma=new X({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1278",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),Io=new Pe({props:{$$slots:{default:[m1]},$$scope:{ctx:z}}}),Wo=new ve({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[h1]},$$scope:{ctx:z}}}),Bo=new ve({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[g1]},$$scope:{ctx:z}}}),za=new Ce({}),qa=new X({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1343"}}),Uo=new Pe({props:{$$slots:{default:[_1]},$$scope:{ctx:z}}}),Oa=new X({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1351",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),Ro=new Pe({props:{$$slots:{default:[T1]},$$scope:{ctx:z}}}),Vo=new ve({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[k1]},$$scope:{ctx:z}}}),Ho=new ve({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[F1]},$$scope:{ctx:z}}}),Aa=new Ce({}),Da=new X({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1419"}}),Ko=new Pe({props:{$$slots:{default:[b1]},$$scope:{ctx:z}}}),Qa=new X({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1436",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),Go=new Pe({props:{$$slots:{default:[v1]},$$scope:{ctx:z}}}),Zo=new ve({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[w1]},$$scope:{ctx:z}}}),Ua=new Ce({}),Ra=new X({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1535"}}),Jo=new Pe({props:{$$slots:{default:[y1]},$$scope:{ctx:z}}}),Za=new X({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1546",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),es=new Pe({props:{$$slots:{default:[$1]},$$scope:{ctx:z}}}),ns=new ve({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[E1]},$$scope:{ctx:z}}}),ts=new ve({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[M1]},$$scope:{ctx:z}}}),Xa=new Ce({}),Ja=new X({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1613"}}),ss=new Pe({props:{$$slots:{default:[z1]},$$scope:{ctx:z}}}),ri=new X({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1623",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
`}}),rs=new Pe({props:{$$slots:{default:[q1]},$$scope:{ctx:z}}}),as=new ve({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[x1]},$$scope:{ctx:z}}}),is=new ve({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[P1]},$$scope:{ctx:z}}}),{c(){d=r("meta"),T=u(),c=r("h1"),p=r("a"),k=r("span"),b(l.$$.fragment),m=u(),q=r("span"),ce=o("Funnel Transformer"),K=u(),x=r("h2"),J=r("a"),N=r("span"),b(ne.$$.fragment),pe=u(),S=r("span"),ue=o("Overview"),ie=u(),Y=r("p"),O=o("The Funnel Transformer model was proposed in the paper "),te=r("a"),G=o(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),P=o(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),j=u(),oe=r("p"),Q=o("The abstract from the paper is the following:"),le=u(),se=r("p"),I=r("em"),fe=o(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),de=u(),C=r("p"),me=o("Tips:"),B=u(),ee=r("ul"),ae=r("li"),U=o(`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),he=u(),W=r("li"),A=o(`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),re=r("a"),R=o("FunnelModel"),ge=o(", "),g=r("a"),M=o("FunnelForPreTraining"),Z=o(`,
`),Te=r("a"),$e=o("FunnelForMaskedLM"),D=o(", "),ke=r("a"),Ee=o("FunnelForTokenClassification"),Me=o(` and
class:`),L=r("em"),V=o("~transformers.FunnelForQuestionAnswering"),ze=o(`. The second ones should be used for
`),Fe=r("a"),H=o("FunnelBaseModel"),qe=o(", "),be=r("a"),_e=o("FunnelForSequenceClassification"),xe=o(` and
`),fi=r("a"),Zu=o("FunnelForMultipleChoice"),Xu=o("."),Wc=u(),An=r("p"),Ju=o("This model was contributed by "),ks=r("a"),ef=o("sgugger"),nf=o(". The original code can be found "),Fs=r("a"),tf=o("here"),of=o("."),Bc=u(),Vn=r("h2"),It=r("a"),El=r("span"),b(bs.$$.fragment),sf=u(),Ml=r("span"),rf=o("FunnelConfig"),Qc=u(),jn=r("div"),b(vs.$$.fragment),af=u(),Ln=r("p"),lf=o("This is the configuration class to store the configuration of a "),mi=r("a"),df=o("FunnelModel"),cf=o(" or a "),hi=r("a"),pf=o("TFBertModel"),uf=o(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),ws=r("a"),ff=o("funnel-transformer/small"),mf=o(" architecture."),hf=u(),Hn=r("p"),gf=o("Configuration objects inherit from "),gi=r("a"),_f=o("PretrainedConfig"),Tf=o(` and can be used to control the model outputs. Read the
documentation from `),_i=r("a"),kf=o("PretrainedConfig"),Ff=o(" for more information."),Uc=u(),Yn=r("h2"),Wt=r("a"),zl=r("span"),b(ys.$$.fragment),bf=u(),ql=r("span"),vf=o("FunnelTokenizer"),Rc=u(),je=r("div"),b($s.$$.fragment),wf=u(),xl=r("p"),yf=o("Construct a Funnel Transformer tokenizer."),$f=u(),Bt=r("p"),Ti=r("a"),Ef=o("FunnelTokenizer"),Mf=o(" is identical to "),ki=r("a"),zf=o("BertTokenizer"),qf=o(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),xf=u(),Es=r("p"),Pf=o("Refer to superclass "),Fi=r("a"),Cf=o("BertTokenizer"),jf=o(" for usage examples and documentation concerning parameters."),Lf=u(),Dn=r("div"),b(Ms.$$.fragment),Of=u(),Pl=r("p"),Af=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Df=u(),zs=r("ul"),bi=r("li"),Nf=o("single sequence: "),Cl=r("code"),Sf=o("[CLS] X [SEP]"),If=u(),vi=r("li"),Wf=o("pair of sequences: "),jl=r("code"),Bf=o("[CLS] A [SEP] B [SEP]"),Qf=u(),Qt=r("div"),b(qs.$$.fragment),Uf=u(),xs=r("p"),Rf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ll=r("code"),Vf=o("prepare_for_model"),Hf=o(" method."),Yf=u(),gn=r("div"),b(Ps.$$.fragment),Kf=u(),Ol=r("p"),Gf=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Zf=u(),b(Ut.$$.fragment),Xf=u(),Kn=r("p"),Jf=o("If "),Al=r("code"),em=o("token_ids_1"),nm=o(" is "),Dl=r("code"),tm=o("None"),om=o(", this method only returns the first portion of the mask (0s)."),sm=u(),wi=r("div"),b(Cs.$$.fragment),Vc=u(),Gn=r("h2"),Rt=r("a"),Nl=r("span"),b(js.$$.fragment),rm=u(),Sl=r("span"),am=o("FunnelTokenizerFast"),Hc=u(),Xe=r("div"),b(Ls.$$.fragment),im=u(),Os=r("p"),lm=o("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Il=r("em"),dm=o("tokenizers"),cm=o(" library)."),pm=u(),Vt=r("p"),yi=r("a"),um=o("FunnelTokenizerFast"),fm=o(" is identical to "),$i=r("a"),mm=o("BertTokenizerFast"),hm=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gm=u(),As=r("p"),_m=o("Refer to superclass "),Ei=r("a"),Tm=o("BertTokenizerFast"),km=o(" for usage examples and documentation concerning parameters."),Fm=u(),_n=r("div"),b(Ds.$$.fragment),bm=u(),Wl=r("p"),vm=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),wm=u(),b(Ht.$$.fragment),ym=u(),Zn=r("p"),$m=o("If "),Bl=r("code"),Em=o("token_ids_1"),Mm=o(" is "),Ql=r("code"),zm=o("None"),qm=o(", this method only returns the first portion of the mask (0s)."),Yc=u(),Xn=r("h2"),Yt=r("a"),Ul=r("span"),b(Ns.$$.fragment),xm=u(),Rl=r("span"),Pm=o("Funnel specific outputs"),Kc=u(),Jn=r("div"),b(Ss.$$.fragment),Cm=u(),Is=r("p"),jm=o("Output type of "),Mi=r("a"),Lm=o("FunnelForPreTraining"),Om=o("."),Gc=u(),et=r("div"),b(Ws.$$.fragment),Am=u(),Bs=r("p"),Dm=o("Output type of "),zi=r("a"),Nm=o("FunnelForPreTraining"),Sm=o("."),Zc=u(),nt=r("h2"),Kt=r("a"),Vl=r("span"),b(Qs.$$.fragment),Im=u(),Hl=r("span"),Wm=o("FunnelBaseModel"),Xc=u(),Re=r("div"),b(Us.$$.fragment),Bm=u(),Yl=r("p"),Qm=o(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Um=u(),Rs=r("p"),Rm=o("The Funnel Transformer model was proposed in "),Vs=r("a"),Vm=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Hm=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ym=u(),Hs=r("p"),Km=o("This model inherits from "),qi=r("a"),Gm=o("PreTrainedModel"),Zm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xm=u(),Ys=r("p"),Jm=o("This model is also a PyTorch "),Ks=r("a"),eh=o("torch.nn.Module"),nh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th=u(),Tn=r("div"),b(Gs.$$.fragment),oh=u(),tt=r("p"),sh=o("The "),xi=r("a"),rh=o("FunnelBaseModel"),ah=o(" forward method, overrides the "),Kl=r("code"),ih=o("__call__"),lh=o(" special method."),dh=u(),b(Gt.$$.fragment),ch=u(),b(Zt.$$.fragment),Jc=u(),ot=r("h2"),Xt=r("a"),Gl=r("span"),b(Zs.$$.fragment),ph=u(),Zl=r("span"),uh=o("FunnelModel"),ep=u(),Ve=r("div"),b(Xs.$$.fragment),fh=u(),Xl=r("p"),mh=o("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),hh=u(),Js=r("p"),gh=o("The Funnel Transformer model was proposed in "),er=r("a"),_h=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Th=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),kh=u(),nr=r("p"),Fh=o("This model inherits from "),Pi=r("a"),bh=o("PreTrainedModel"),vh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh=u(),tr=r("p"),yh=o("This model is also a PyTorch "),or=r("a"),$h=o("torch.nn.Module"),Eh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh=u(),kn=r("div"),b(sr.$$.fragment),zh=u(),st=r("p"),qh=o("The "),Ci=r("a"),xh=o("FunnelModel"),Ph=o(" forward method, overrides the "),Jl=r("code"),Ch=o("__call__"),jh=o(" special method."),Lh=u(),b(Jt.$$.fragment),Oh=u(),b(eo.$$.fragment),np=u(),rt=r("h2"),no=r("a"),ed=r("span"),b(rr.$$.fragment),Ah=u(),nd=r("span"),Dh=o("FunnelModelForPreTraining"),tp=u(),at=r("div"),b(ar.$$.fragment),Nh=u(),Fn=r("div"),b(ir.$$.fragment),Sh=u(),it=r("p"),Ih=o("The "),ji=r("a"),Wh=o("FunnelForPreTraining"),Bh=o(" forward method, overrides the "),td=r("code"),Qh=o("__call__"),Uh=o(" special method."),Rh=u(),b(to.$$.fragment),Vh=u(),b(oo.$$.fragment),op=u(),lt=r("h2"),so=r("a"),od=r("span"),b(lr.$$.fragment),Hh=u(),sd=r("span"),Yh=o("FunnelForMaskedLM"),sp=u(),He=r("div"),b(dr.$$.fragment),Kh=u(),cr=r("p"),Gh=o("Funnel Transformer Model with a "),rd=r("code"),Zh=o("language modeling"),Xh=o(" head on top."),Jh=u(),pr=r("p"),eg=o("The Funnel Transformer model was proposed in "),ur=r("a"),ng=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tg=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),og=u(),fr=r("p"),sg=o("This model inherits from "),Li=r("a"),rg=o("PreTrainedModel"),ag=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=u(),mr=r("p"),lg=o("This model is also a PyTorch "),hr=r("a"),dg=o("torch.nn.Module"),cg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=u(),Je=r("div"),b(gr.$$.fragment),ug=u(),dt=r("p"),fg=o("The "),Oi=r("a"),mg=o("FunnelForMaskedLM"),hg=o(" forward method, overrides the "),ad=r("code"),gg=o("__call__"),_g=o(" special method."),Tg=u(),b(ro.$$.fragment),kg=u(),b(ao.$$.fragment),Fg=u(),b(io.$$.fragment),rp=u(),ct=r("h2"),lo=r("a"),id=r("span"),b(_r.$$.fragment),bg=u(),ld=r("span"),vg=o("FunnelForSequenceClassification"),ap=u(),Ye=r("div"),b(Tr.$$.fragment),wg=u(),dd=r("p"),yg=o(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),$g=u(),kr=r("p"),Eg=o("The Funnel Transformer model was proposed in "),Fr=r("a"),Mg=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zg=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qg=u(),br=r("p"),xg=o("This model inherits from "),Ai=r("a"),Pg=o("PreTrainedModel"),Cg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg=u(),vr=r("p"),Lg=o("This model is also a PyTorch "),wr=r("a"),Og=o("torch.nn.Module"),Ag=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=u(),Ue=r("div"),b(yr.$$.fragment),Ng=u(),pt=r("p"),Sg=o("The "),Di=r("a"),Ig=o("FunnelForSequenceClassification"),Wg=o(" forward method, overrides the "),cd=r("code"),Bg=o("__call__"),Qg=o(" special method."),Ug=u(),b(co.$$.fragment),Rg=u(),b(po.$$.fragment),Vg=u(),b(uo.$$.fragment),Hg=u(),b(fo.$$.fragment),Yg=u(),b(mo.$$.fragment),ip=u(),ut=r("h2"),ho=r("a"),pd=r("span"),b($r.$$.fragment),Kg=u(),ud=r("span"),Gg=o("FunnelForMultipleChoice"),lp=u(),Ke=r("div"),b(Er.$$.fragment),Zg=u(),fd=r("p"),Xg=o(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Jg=u(),Mr=r("p"),e_=o("The Funnel Transformer model was proposed in "),zr=r("a"),n_=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),t_=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),o_=u(),qr=r("p"),s_=o("This model inherits from "),Ni=r("a"),r_=o("PreTrainedModel"),a_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=u(),xr=r("p"),l_=o("This model is also a PyTorch "),Pr=r("a"),d_=o("torch.nn.Module"),c_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=u(),bn=r("div"),b(Cr.$$.fragment),u_=u(),ft=r("p"),f_=o("The "),Si=r("a"),m_=o("FunnelForMultipleChoice"),h_=o(" forward method, overrides the "),md=r("code"),g_=o("__call__"),__=o(" special method."),T_=u(),b(go.$$.fragment),k_=u(),b(_o.$$.fragment),dp=u(),mt=r("h2"),To=r("a"),hd=r("span"),b(jr.$$.fragment),F_=u(),gd=r("span"),b_=o("FunnelForTokenClassification"),cp=u(),Ge=r("div"),b(Lr.$$.fragment),v_=u(),_d=r("p"),w_=o(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),y_=u(),Or=r("p"),$_=o("The Funnel Transformer model was proposed in "),Ar=r("a"),E_=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),M_=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),z_=u(),Dr=r("p"),q_=o("This model inherits from "),Ii=r("a"),x_=o("PreTrainedModel"),P_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C_=u(),Nr=r("p"),j_=o("This model is also a PyTorch "),Sr=r("a"),L_=o("torch.nn.Module"),O_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A_=u(),en=r("div"),b(Ir.$$.fragment),D_=u(),ht=r("p"),N_=o("The "),Wi=r("a"),S_=o("FunnelForTokenClassification"),I_=o(" forward method, overrides the "),Td=r("code"),W_=o("__call__"),B_=o(" special method."),Q_=u(),b(ko.$$.fragment),U_=u(),b(Fo.$$.fragment),R_=u(),b(bo.$$.fragment),pp=u(),gt=r("h2"),vo=r("a"),kd=r("span"),b(Wr.$$.fragment),V_=u(),Fd=r("span"),H_=o("FunnelForQuestionAnswering"),up=u(),Ze=r("div"),b(Br.$$.fragment),Y_=u(),_t=r("p"),K_=o(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),bd=r("code"),G_=o("span start logits"),Z_=o(" and "),vd=r("code"),X_=o("span end logits"),J_=o(")."),eT=u(),Qr=r("p"),nT=o("The Funnel Transformer model was proposed in "),Ur=r("a"),tT=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),oT=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sT=u(),Rr=r("p"),rT=o("This model inherits from "),Bi=r("a"),aT=o("PreTrainedModel"),iT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lT=u(),Vr=r("p"),dT=o("This model is also a PyTorch "),Hr=r("a"),cT=o("torch.nn.Module"),pT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uT=u(),nn=r("div"),b(Yr.$$.fragment),fT=u(),Tt=r("p"),mT=o("The "),Qi=r("a"),hT=o("FunnelForQuestionAnswering"),gT=o(" forward method, overrides the "),wd=r("code"),_T=o("__call__"),TT=o(" special method."),kT=u(),b(wo.$$.fragment),FT=u(),b(yo.$$.fragment),bT=u(),b($o.$$.fragment),fp=u(),kt=r("h2"),Eo=r("a"),yd=r("span"),b(Kr.$$.fragment),vT=u(),$d=r("span"),wT=o("TFFunnelBaseModel"),mp=u(),Oe=r("div"),b(Gr.$$.fragment),yT=u(),Ed=r("p"),$T=o(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),ET=u(),Zr=r("p"),MT=o("The Funnel Transformer model was proposed in "),Xr=r("a"),zT=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qT=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),xT=u(),Jr=r("p"),PT=o("This model inherits from "),Ui=r("a"),CT=o("TFPreTrainedModel"),jT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LT=u(),ea=r("p"),OT=o("This model is also a "),na=r("a"),AT=o("tf.keras.Model"),DT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),NT=u(),b(Mo.$$.fragment),ST=u(),vn=r("div"),b(ta.$$.fragment),IT=u(),Ft=r("p"),WT=o("The "),Ri=r("a"),BT=o("TFFunnelBaseModel"),QT=o(" forward method, overrides the "),Md=r("code"),UT=o("__call__"),RT=o(" special method."),VT=u(),b(zo.$$.fragment),HT=u(),b(qo.$$.fragment),hp=u(),bt=r("h2"),xo=r("a"),zd=r("span"),b(oa.$$.fragment),YT=u(),qd=r("span"),KT=o("TFFunnelModel"),gp=u(),Ae=r("div"),b(sa.$$.fragment),GT=u(),xd=r("p"),ZT=o("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),XT=u(),ra=r("p"),JT=o("The Funnel Transformer model was proposed in "),aa=r("a"),ek=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nk=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tk=u(),ia=r("p"),ok=o("This model inherits from "),Vi=r("a"),sk=o("TFPreTrainedModel"),rk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=u(),la=r("p"),ik=o("This model is also a "),da=r("a"),lk=o("tf.keras.Model"),dk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ck=u(),b(Po.$$.fragment),pk=u(),wn=r("div"),b(ca.$$.fragment),uk=u(),vt=r("p"),fk=o("The "),Hi=r("a"),mk=o("TFFunnelModel"),hk=o(" forward method, overrides the "),Pd=r("code"),gk=o("__call__"),_k=o(" special method."),Tk=u(),b(Co.$$.fragment),kk=u(),b(jo.$$.fragment),_p=u(),wt=r("h2"),Lo=r("a"),Cd=r("span"),b(pa.$$.fragment),Fk=u(),jd=r("span"),bk=o("TFFunnelModelForPreTraining"),Tp=u(),De=r("div"),b(ua.$$.fragment),vk=u(),Ld=r("p"),wk=o("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),yk=u(),fa=r("p"),$k=o("The Funnel Transformer model was proposed in "),ma=r("a"),Ek=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Mk=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zk=u(),ha=r("p"),qk=o("This model inherits from "),Yi=r("a"),xk=o("TFPreTrainedModel"),Pk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ck=u(),ga=r("p"),jk=o("This model is also a "),_a=r("a"),Lk=o("tf.keras.Model"),Ok=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak=u(),b(Oo.$$.fragment),Dk=u(),yn=r("div"),b(Ta.$$.fragment),Nk=u(),yt=r("p"),Sk=o("The "),Ki=r("a"),Ik=o("TFFunnelForPreTraining"),Wk=o(" forward method, overrides the "),Od=r("code"),Bk=o("__call__"),Qk=o(" special method."),Uk=u(),b(Ao.$$.fragment),Rk=u(),b(Do.$$.fragment),kp=u(),$t=r("h2"),No=r("a"),Ad=r("span"),b(ka.$$.fragment),Vk=u(),Dd=r("span"),Hk=o("TFFunnelForMaskedLM"),Fp=u(),Ne=r("div"),b(Fa.$$.fragment),Yk=u(),ba=r("p"),Kk=o("Funnel Model with a "),Nd=r("code"),Gk=o("language modeling"),Zk=o(" head on top."),Xk=u(),va=r("p"),Jk=o("The Funnel Transformer model was proposed in "),wa=r("a"),eF=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nF=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tF=u(),ya=r("p"),oF=o("This model inherits from "),Gi=r("a"),sF=o("TFPreTrainedModel"),rF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aF=u(),$a=r("p"),iF=o("This model is also a "),Ea=r("a"),lF=o("tf.keras.Model"),dF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cF=u(),b(So.$$.fragment),pF=u(),tn=r("div"),b(Ma.$$.fragment),uF=u(),Et=r("p"),fF=o("The "),Zi=r("a"),mF=o("TFFunnelForMaskedLM"),hF=o(" forward method, overrides the "),Sd=r("code"),gF=o("__call__"),_F=o(" special method."),TF=u(),b(Io.$$.fragment),kF=u(),b(Wo.$$.fragment),FF=u(),b(Bo.$$.fragment),bp=u(),Mt=r("h2"),Qo=r("a"),Id=r("span"),b(za.$$.fragment),bF=u(),Wd=r("span"),vF=o("TFFunnelForSequenceClassification"),vp=u(),Se=r("div"),b(qa.$$.fragment),wF=u(),Bd=r("p"),yF=o(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$F=u(),xa=r("p"),EF=o("The Funnel Transformer model was proposed in "),Pa=r("a"),MF=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zF=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qF=u(),Ca=r("p"),xF=o("This model inherits from "),Xi=r("a"),PF=o("TFPreTrainedModel"),CF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jF=u(),ja=r("p"),LF=o("This model is also a "),La=r("a"),OF=o("tf.keras.Model"),AF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=u(),b(Uo.$$.fragment),NF=u(),on=r("div"),b(Oa.$$.fragment),SF=u(),zt=r("p"),IF=o("The "),Ji=r("a"),WF=o("TFFunnelForSequenceClassification"),BF=o(" forward method, overrides the "),Qd=r("code"),QF=o("__call__"),UF=o(" special method."),RF=u(),b(Ro.$$.fragment),VF=u(),b(Vo.$$.fragment),HF=u(),b(Ho.$$.fragment),wp=u(),qt=r("h2"),Yo=r("a"),Ud=r("span"),b(Aa.$$.fragment),YF=u(),Rd=r("span"),KF=o("TFFunnelForMultipleChoice"),yp=u(),Ie=r("div"),b(Da.$$.fragment),GF=u(),Vd=r("p"),ZF=o(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),XF=u(),Na=r("p"),JF=o("The Funnel Transformer model was proposed in "),Sa=r("a"),eb=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nb=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tb=u(),Ia=r("p"),ob=o("This model inherits from "),el=r("a"),sb=o("TFPreTrainedModel"),rb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ab=u(),Wa=r("p"),ib=o("This model is also a "),Ba=r("a"),lb=o("tf.keras.Model"),db=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cb=u(),b(Ko.$$.fragment),pb=u(),$n=r("div"),b(Qa.$$.fragment),ub=u(),xt=r("p"),fb=o("The "),nl=r("a"),mb=o("TFFunnelForMultipleChoice"),hb=o(" forward method, overrides the "),Hd=r("code"),gb=o("__call__"),_b=o(" special method."),Tb=u(),b(Go.$$.fragment),kb=u(),b(Zo.$$.fragment),$p=u(),Pt=r("h2"),Xo=r("a"),Yd=r("span"),b(Ua.$$.fragment),Fb=u(),Kd=r("span"),bb=o("TFFunnelForTokenClassification"),Ep=u(),We=r("div"),b(Ra.$$.fragment),vb=u(),Gd=r("p"),wb=o(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yb=u(),Va=r("p"),$b=o("The Funnel Transformer model was proposed in "),Ha=r("a"),Eb=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Mb=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zb=u(),Ya=r("p"),qb=o("This model inherits from "),tl=r("a"),xb=o("TFPreTrainedModel"),Pb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb=u(),Ka=r("p"),jb=o("This model is also a "),Ga=r("a"),Lb=o("tf.keras.Model"),Ob=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ab=u(),b(Jo.$$.fragment),Db=u(),sn=r("div"),b(Za.$$.fragment),Nb=u(),Ct=r("p"),Sb=o("The "),ol=r("a"),Ib=o("TFFunnelForTokenClassification"),Wb=o(" forward method, overrides the "),Zd=r("code"),Bb=o("__call__"),Qb=o(" special method."),Ub=u(),b(es.$$.fragment),Rb=u(),b(ns.$$.fragment),Vb=u(),b(ts.$$.fragment),Mp=u(),jt=r("h2"),os=r("a"),Xd=r("span"),b(Xa.$$.fragment),Hb=u(),Jd=r("span"),Yb=o("TFFunnelForQuestionAnswering"),zp=u(),Be=r("div"),b(Ja.$$.fragment),Kb=u(),Lt=r("p"),Gb=o(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ec=r("code"),Zb=o("span start logits"),Xb=o(" and "),nc=r("code"),Jb=o("span end logits"),ev=o(")."),nv=u(),ei=r("p"),tv=o("The Funnel Transformer model was proposed in "),ni=r("a"),ov=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sv=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rv=u(),ti=r("p"),av=o("This model inherits from "),sl=r("a"),iv=o("TFPreTrainedModel"),lv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dv=u(),oi=r("p"),cv=o("This model is also a "),si=r("a"),pv=o("tf.keras.Model"),uv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fv=u(),b(ss.$$.fragment),mv=u(),rn=r("div"),b(ri.$$.fragment),hv=u(),Ot=r("p"),gv=o("The "),rl=r("a"),_v=o("TFFunnelForQuestionAnswering"),Tv=o(" forward method, overrides the "),tc=r("code"),kv=o("__call__"),Fv=o(" special method."),bv=u(),b(rs.$$.fragment),vv=u(),b(as.$$.fragment),wv=u(),b(is.$$.fragment),this.h()},l(t){const F=C$('[data-svelte="svelte-1phssyn"]',document.head);d=a(F,"META",{name:!0,content:!0}),F.forEach(n),T=f(t),c=a(t,"H1",{class:!0});var ai=i(c);p=a(ai,"A",{id:!0,class:!0,href:!0});var oc=i(p);k=a(oc,"SPAN",{});var sc=i(k);v(l.$$.fragment,sc),sc.forEach(n),oc.forEach(n),m=f(ai),q=a(ai,"SPAN",{});var rc=i(q);ce=s(rc,"Funnel Transformer"),rc.forEach(n),ai.forEach(n),K=f(t),x=a(t,"H2",{class:!0});var ii=i(x);J=a(ii,"A",{id:!0,class:!0,href:!0});var ac=i(J);N=a(ac,"SPAN",{});var ic=i(N);v(ne.$$.fragment,ic),ic.forEach(n),ac.forEach(n),pe=f(ii),S=a(ii,"SPAN",{});var lc=i(S);ue=s(lc,"Overview"),lc.forEach(n),ii.forEach(n),ie=f(t),Y=a(t,"P",{});var li=i(Y);O=s(li,"The Funnel Transformer model was proposed in the paper "),te=a(li,"A",{href:!0,rel:!0});var dc=i(te);G=s(dc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),dc.forEach(n),P=s(li,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),li.forEach(n),j=f(t),oe=a(t,"P",{});var cc=i(oe);Q=s(cc,"The abstract from the paper is the following:"),cc.forEach(n),le=f(t),se=a(t,"P",{});var pc=i(se);I=a(pc,"EM",{});var uc=i(I);fe=s(uc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),uc.forEach(n),pc.forEach(n),de=f(t),C=a(t,"P",{});var fc=i(C);me=s(fc,"Tips:"),fc.forEach(n),B=f(t),ee=a(t,"UL",{});var di=i(ee);ae=a(di,"LI",{});var mc=i(ae);U=s(mc,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),mc.forEach(n),he=f(di),W=a(di,"LI",{});var Le=i(W);A=s(Le,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),re=a(Le,"A",{href:!0});var hc=i(re);R=s(hc,"FunnelModel"),hc.forEach(n),ge=s(Le,", "),g=a(Le,"A",{href:!0});var gc=i(g);M=s(gc,"FunnelForPreTraining"),gc.forEach(n),Z=s(Le,`,
`),Te=a(Le,"A",{href:!0});var _c=i(Te);$e=s(_c,"FunnelForMaskedLM"),_c.forEach(n),D=s(Le,", "),ke=a(Le,"A",{href:!0});var Tc=i(ke);Ee=s(Tc,"FunnelForTokenClassification"),Tc.forEach(n),Me=s(Le,` and
class:`),L=a(Le,"EM",{});var kc=i(L);V=s(kc,"~transformers.FunnelForQuestionAnswering"),kc.forEach(n),ze=s(Le,`. The second ones should be used for
`),Fe=a(Le,"A",{href:!0});var Fc=i(Fe);H=s(Fc,"FunnelBaseModel"),Fc.forEach(n),qe=s(Le,", "),be=a(Le,"A",{href:!0});var bc=i(be);_e=s(bc,"FunnelForSequenceClassification"),bc.forEach(n),xe=s(Le,` and
`),fi=a(Le,"A",{href:!0});var vc=i(fi);Zu=s(vc,"FunnelForMultipleChoice"),vc.forEach(n),Xu=s(Le,"."),Le.forEach(n),di.forEach(n),Wc=f(t),An=a(t,"P",{});var At=i(An);Ju=s(At,"This model was contributed by "),ks=a(At,"A",{href:!0,rel:!0});var wc=i(ks);ef=s(wc,"sgugger"),wc.forEach(n),nf=s(At,". The original code can be found "),Fs=a(At,"A",{href:!0,rel:!0});var yc=i(Fs);tf=s(yc,"here"),yc.forEach(n),of=s(At,"."),At.forEach(n),Bc=f(t),Vn=a(t,"H2",{class:!0});var ci=i(Vn);It=a(ci,"A",{id:!0,class:!0,href:!0});var $c=i(It);El=a($c,"SPAN",{});var Ec=i(El);v(bs.$$.fragment,Ec),Ec.forEach(n),$c.forEach(n),sf=f(ci),Ml=a(ci,"SPAN",{});var Mc=i(Ml);rf=s(Mc,"FunnelConfig"),Mc.forEach(n),ci.forEach(n),Qc=f(t),jn=a(t,"DIV",{class:!0});var Dt=i(jn);v(vs.$$.fragment,Dt),af=f(Dt),Ln=a(Dt,"P",{});var On=i(Ln);lf=s(On,"This is the configuration class to store the configuration of a "),mi=a(On,"A",{href:!0});var zc=i(mi);df=s(zc,"FunnelModel"),zc.forEach(n),cf=s(On," or a "),hi=a(On,"A",{href:!0});var qc=i(hi);pf=s(qc,"TFBertModel"),qc.forEach(n),uf=s(On,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),ws=a(On,"A",{href:!0,rel:!0});var xc=i(ws);ff=s(xc,"funnel-transformer/small"),xc.forEach(n),mf=s(On," architecture."),On.forEach(n),hf=f(Dt),Hn=a(Dt,"P",{});var Nt=i(Hn);gf=s(Nt,"Configuration objects inherit from "),gi=a(Nt,"A",{href:!0});var Pc=i(gi);_f=s(Pc,"PretrainedConfig"),Pc.forEach(n),Tf=s(Nt,` and can be used to control the model outputs. Read the
documentation from `),_i=a(Nt,"A",{href:!0});var Cc=i(_i);kf=s(Cc,"PretrainedConfig"),Cc.forEach(n),Ff=s(Nt," for more information."),Nt.forEach(n),Dt.forEach(n),Uc=f(t),Yn=a(t,"H2",{class:!0});var pi=i(Yn);Wt=a(pi,"A",{id:!0,class:!0,href:!0});var jc=i(Wt);zl=a(jc,"SPAN",{});var Lc=i(zl);v(ys.$$.fragment,Lc),Lc.forEach(n),jc.forEach(n),bf=f(pi),ql=a(pi,"SPAN",{});var Oc=i(ql);vf=s(Oc,"FunnelTokenizer"),Oc.forEach(n),pi.forEach(n),Rc=f(t),je=a(t,"DIV",{class:!0});var Qe=i(je);v($s.$$.fragment,Qe),wf=f(Qe),xl=a(Qe,"P",{});var Ac=i(xl);yf=s(Ac,"Construct a Funnel Transformer tokenizer."),Ac.forEach(n),$f=f(Qe),Bt=a(Qe,"P",{});var ls=i(Bt);Ti=a(ls,"A",{href:!0});var Dc=i(Ti);Ef=s(Dc,"FunnelTokenizer"),Dc.forEach(n),Mf=s(ls," is identical to "),ki=a(ls,"A",{href:!0});var Nc=i(ki);zf=s(Nc,"BertTokenizer"),Nc.forEach(n),qf=s(ls,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),ls.forEach(n),xf=f(Qe),Es=a(Qe,"P",{});var ui=i(Es);Pf=s(ui,"Refer to superclass "),Fi=a(ui,"A",{href:!0});var Sc=i(Fi);Cf=s(Sc,"BertTokenizer"),Sc.forEach(n),jf=s(ui," for usage examples and documentation concerning parameters."),ui.forEach(n),Lf=f(Qe),Dn=a(Qe,"DIV",{class:!0});var St=i(Dn);v(Ms.$$.fragment,St),Of=f(St),Pl=a(St,"P",{});var Ev=i(Pl);Af=s(Ev,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ev.forEach(n),Df=f(St),zs=a(St,"UL",{});var xp=i(zs);bi=a(xp,"LI",{});var yv=i(bi);Nf=s(yv,"single sequence: "),Cl=a(yv,"CODE",{});var Mv=i(Cl);Sf=s(Mv,"[CLS] X [SEP]"),Mv.forEach(n),yv.forEach(n),If=f(xp),vi=a(xp,"LI",{});var $v=i(vi);Wf=s($v,"pair of sequences: "),jl=a($v,"CODE",{});var zv=i(jl);Bf=s(zv,"[CLS] A [SEP] B [SEP]"),zv.forEach(n),$v.forEach(n),xp.forEach(n),St.forEach(n),Qf=f(Qe),Qt=a(Qe,"DIV",{class:!0});var Pp=i(Qt);v(qs.$$.fragment,Pp),Uf=f(Pp),xs=a(Pp,"P",{});var Cp=i(xs);Rf=s(Cp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ll=a(Cp,"CODE",{});var qv=i(Ll);Vf=s(qv,"prepare_for_model"),qv.forEach(n),Hf=s(Cp," method."),Cp.forEach(n),Pp.forEach(n),Yf=f(Qe),gn=a(Qe,"DIV",{class:!0});var ds=i(gn);v(Ps.$$.fragment,ds),Kf=f(ds),Ol=a(ds,"P",{});var xv=i(Ol);Gf=s(xv,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),xv.forEach(n),Zf=f(ds),v(Ut.$$.fragment,ds),Xf=f(ds),Kn=a(ds,"P",{});var al=i(Kn);Jf=s(al,"If "),Al=a(al,"CODE",{});var Pv=i(Al);em=s(Pv,"token_ids_1"),Pv.forEach(n),nm=s(al," is "),Dl=a(al,"CODE",{});var Cv=i(Dl);tm=s(Cv,"None"),Cv.forEach(n),om=s(al,", this method only returns the first portion of the mask (0s)."),al.forEach(n),ds.forEach(n),sm=f(Qe),wi=a(Qe,"DIV",{class:!0});var jv=i(wi);v(Cs.$$.fragment,jv),jv.forEach(n),Qe.forEach(n),Vc=f(t),Gn=a(t,"H2",{class:!0});var jp=i(Gn);Rt=a(jp,"A",{id:!0,class:!0,href:!0});var Lv=i(Rt);Nl=a(Lv,"SPAN",{});var Ov=i(Nl);v(js.$$.fragment,Ov),Ov.forEach(n),Lv.forEach(n),rm=f(jp),Sl=a(jp,"SPAN",{});var Av=i(Sl);am=s(Av,"FunnelTokenizerFast"),Av.forEach(n),jp.forEach(n),Hc=f(t),Xe=a(t,"DIV",{class:!0});var Nn=i(Xe);v(Ls.$$.fragment,Nn),im=f(Nn),Os=a(Nn,"P",{});var Lp=i(Os);lm=s(Lp,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Il=a(Lp,"EM",{});var Dv=i(Il);dm=s(Dv,"tokenizers"),Dv.forEach(n),cm=s(Lp," library)."),Lp.forEach(n),pm=f(Nn),Vt=a(Nn,"P",{});var Ic=i(Vt);yi=a(Ic,"A",{href:!0});var Nv=i(yi);um=s(Nv,"FunnelTokenizerFast"),Nv.forEach(n),fm=s(Ic," is identical to "),$i=a(Ic,"A",{href:!0});var Sv=i($i);mm=s(Sv,"BertTokenizerFast"),Sv.forEach(n),hm=s(Ic,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ic.forEach(n),gm=f(Nn),As=a(Nn,"P",{});var Op=i(As);_m=s(Op,"Refer to superclass "),Ei=a(Op,"A",{href:!0});var Iv=i(Ei);Tm=s(Iv,"BertTokenizerFast"),Iv.forEach(n),km=s(Op," for usage examples and documentation concerning parameters."),Op.forEach(n),Fm=f(Nn),_n=a(Nn,"DIV",{class:!0});var cs=i(_n);v(Ds.$$.fragment,cs),bm=f(cs),Wl=a(cs,"P",{});var Wv=i(Wl);vm=s(Wv,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Wv.forEach(n),wm=f(cs),v(Ht.$$.fragment,cs),ym=f(cs),Zn=a(cs,"P",{});var il=i(Zn);$m=s(il,"If "),Bl=a(il,"CODE",{});var Bv=i(Bl);Em=s(Bv,"token_ids_1"),Bv.forEach(n),Mm=s(il," is "),Ql=a(il,"CODE",{});var Qv=i(Ql);zm=s(Qv,"None"),Qv.forEach(n),qm=s(il,", this method only returns the first portion of the mask (0s)."),il.forEach(n),cs.forEach(n),Nn.forEach(n),Yc=f(t),Xn=a(t,"H2",{class:!0});var Ap=i(Xn);Yt=a(Ap,"A",{id:!0,class:!0,href:!0});var Uv=i(Yt);Ul=a(Uv,"SPAN",{});var Rv=i(Ul);v(Ns.$$.fragment,Rv),Rv.forEach(n),Uv.forEach(n),xm=f(Ap),Rl=a(Ap,"SPAN",{});var Vv=i(Rl);Pm=s(Vv,"Funnel specific outputs"),Vv.forEach(n),Ap.forEach(n),Kc=f(t),Jn=a(t,"DIV",{class:!0});var Dp=i(Jn);v(Ss.$$.fragment,Dp),Cm=f(Dp),Is=a(Dp,"P",{});var Np=i(Is);jm=s(Np,"Output type of "),Mi=a(Np,"A",{href:!0});var Hv=i(Mi);Lm=s(Hv,"FunnelForPreTraining"),Hv.forEach(n),Om=s(Np,"."),Np.forEach(n),Dp.forEach(n),Gc=f(t),et=a(t,"DIV",{class:!0});var Sp=i(et);v(Ws.$$.fragment,Sp),Am=f(Sp),Bs=a(Sp,"P",{});var Ip=i(Bs);Dm=s(Ip,"Output type of "),zi=a(Ip,"A",{href:!0});var Yv=i(zi);Nm=s(Yv,"FunnelForPreTraining"),Yv.forEach(n),Sm=s(Ip,"."),Ip.forEach(n),Sp.forEach(n),Zc=f(t),nt=a(t,"H2",{class:!0});var Wp=i(nt);Kt=a(Wp,"A",{id:!0,class:!0,href:!0});var Kv=i(Kt);Vl=a(Kv,"SPAN",{});var Gv=i(Vl);v(Qs.$$.fragment,Gv),Gv.forEach(n),Kv.forEach(n),Im=f(Wp),Hl=a(Wp,"SPAN",{});var Zv=i(Hl);Wm=s(Zv,"FunnelBaseModel"),Zv.forEach(n),Wp.forEach(n),Xc=f(t),Re=a(t,"DIV",{class:!0});var En=i(Re);v(Us.$$.fragment,En),Bm=f(En),Yl=a(En,"P",{});var Xv=i(Yl);Qm=s(Xv,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Xv.forEach(n),Um=f(En),Rs=a(En,"P",{});var Bp=i(Rs);Rm=s(Bp,"The Funnel Transformer model was proposed in "),Vs=a(Bp,"A",{href:!0,rel:!0});var Jv=i(Vs);Vm=s(Jv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Jv.forEach(n),Hm=s(Bp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Bp.forEach(n),Ym=f(En),Hs=a(En,"P",{});var Qp=i(Hs);Km=s(Qp,"This model inherits from "),qi=a(Qp,"A",{href:!0});var ew=i(qi);Gm=s(ew,"PreTrainedModel"),ew.forEach(n),Zm=s(Qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qp.forEach(n),Xm=f(En),Ys=a(En,"P",{});var Up=i(Ys);Jm=s(Up,"This model is also a PyTorch "),Ks=a(Up,"A",{href:!0,rel:!0});var nw=i(Ks);eh=s(nw,"torch.nn.Module"),nw.forEach(n),nh=s(Up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up.forEach(n),th=f(En),Tn=a(En,"DIV",{class:!0});var ps=i(Tn);v(Gs.$$.fragment,ps),oh=f(ps),tt=a(ps,"P",{});var ll=i(tt);sh=s(ll,"The "),xi=a(ll,"A",{href:!0});var tw=i(xi);rh=s(tw,"FunnelBaseModel"),tw.forEach(n),ah=s(ll," forward method, overrides the "),Kl=a(ll,"CODE",{});var ow=i(Kl);ih=s(ow,"__call__"),ow.forEach(n),lh=s(ll," special method."),ll.forEach(n),dh=f(ps),v(Gt.$$.fragment,ps),ch=f(ps),v(Zt.$$.fragment,ps),ps.forEach(n),En.forEach(n),Jc=f(t),ot=a(t,"H2",{class:!0});var Rp=i(ot);Xt=a(Rp,"A",{id:!0,class:!0,href:!0});var sw=i(Xt);Gl=a(sw,"SPAN",{});var rw=i(Gl);v(Zs.$$.fragment,rw),rw.forEach(n),sw.forEach(n),ph=f(Rp),Zl=a(Rp,"SPAN",{});var aw=i(Zl);uh=s(aw,"FunnelModel"),aw.forEach(n),Rp.forEach(n),ep=f(t),Ve=a(t,"DIV",{class:!0});var Mn=i(Ve);v(Xs.$$.fragment,Mn),fh=f(Mn),Xl=a(Mn,"P",{});var iw=i(Xl);mh=s(iw,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),iw.forEach(n),hh=f(Mn),Js=a(Mn,"P",{});var Vp=i(Js);gh=s(Vp,"The Funnel Transformer model was proposed in "),er=a(Vp,"A",{href:!0,rel:!0});var lw=i(er);_h=s(lw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),lw.forEach(n),Th=s(Vp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Vp.forEach(n),kh=f(Mn),nr=a(Mn,"P",{});var Hp=i(nr);Fh=s(Hp,"This model inherits from "),Pi=a(Hp,"A",{href:!0});var dw=i(Pi);bh=s(dw,"PreTrainedModel"),dw.forEach(n),vh=s(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(n),wh=f(Mn),tr=a(Mn,"P",{});var Yp=i(tr);yh=s(Yp,"This model is also a PyTorch "),or=a(Yp,"A",{href:!0,rel:!0});var cw=i(or);$h=s(cw,"torch.nn.Module"),cw.forEach(n),Eh=s(Yp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp.forEach(n),Mh=f(Mn),kn=a(Mn,"DIV",{class:!0});var us=i(kn);v(sr.$$.fragment,us),zh=f(us),st=a(us,"P",{});var dl=i(st);qh=s(dl,"The "),Ci=a(dl,"A",{href:!0});var pw=i(Ci);xh=s(pw,"FunnelModel"),pw.forEach(n),Ph=s(dl," forward method, overrides the "),Jl=a(dl,"CODE",{});var uw=i(Jl);Ch=s(uw,"__call__"),uw.forEach(n),jh=s(dl," special method."),dl.forEach(n),Lh=f(us),v(Jt.$$.fragment,us),Oh=f(us),v(eo.$$.fragment,us),us.forEach(n),Mn.forEach(n),np=f(t),rt=a(t,"H2",{class:!0});var Kp=i(rt);no=a(Kp,"A",{id:!0,class:!0,href:!0});var fw=i(no);ed=a(fw,"SPAN",{});var mw=i(ed);v(rr.$$.fragment,mw),mw.forEach(n),fw.forEach(n),Ah=f(Kp),nd=a(Kp,"SPAN",{});var hw=i(nd);Dh=s(hw,"FunnelModelForPreTraining"),hw.forEach(n),Kp.forEach(n),tp=f(t),at=a(t,"DIV",{class:!0});var Gp=i(at);v(ar.$$.fragment,Gp),Nh=f(Gp),Fn=a(Gp,"DIV",{class:!0});var fs=i(Fn);v(ir.$$.fragment,fs),Sh=f(fs),it=a(fs,"P",{});var cl=i(it);Ih=s(cl,"The "),ji=a(cl,"A",{href:!0});var gw=i(ji);Wh=s(gw,"FunnelForPreTraining"),gw.forEach(n),Bh=s(cl," forward method, overrides the "),td=a(cl,"CODE",{});var _w=i(td);Qh=s(_w,"__call__"),_w.forEach(n),Uh=s(cl," special method."),cl.forEach(n),Rh=f(fs),v(to.$$.fragment,fs),Vh=f(fs),v(oo.$$.fragment,fs),fs.forEach(n),Gp.forEach(n),op=f(t),lt=a(t,"H2",{class:!0});var Zp=i(lt);so=a(Zp,"A",{id:!0,class:!0,href:!0});var Tw=i(so);od=a(Tw,"SPAN",{});var kw=i(od);v(lr.$$.fragment,kw),kw.forEach(n),Tw.forEach(n),Hh=f(Zp),sd=a(Zp,"SPAN",{});var Fw=i(sd);Yh=s(Fw,"FunnelForMaskedLM"),Fw.forEach(n),Zp.forEach(n),sp=f(t),He=a(t,"DIV",{class:!0});var zn=i(He);v(dr.$$.fragment,zn),Kh=f(zn),cr=a(zn,"P",{});var Xp=i(cr);Gh=s(Xp,"Funnel Transformer Model with a "),rd=a(Xp,"CODE",{});var bw=i(rd);Zh=s(bw,"language modeling"),bw.forEach(n),Xh=s(Xp," head on top."),Xp.forEach(n),Jh=f(zn),pr=a(zn,"P",{});var Jp=i(pr);eg=s(Jp,"The Funnel Transformer model was proposed in "),ur=a(Jp,"A",{href:!0,rel:!0});var vw=i(ur);ng=s(vw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),vw.forEach(n),tg=s(Jp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Jp.forEach(n),og=f(zn),fr=a(zn,"P",{});var eu=i(fr);sg=s(eu,"This model inherits from "),Li=a(eu,"A",{href:!0});var ww=i(Li);rg=s(ww,"PreTrainedModel"),ww.forEach(n),ag=s(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(n),ig=f(zn),mr=a(zn,"P",{});var nu=i(mr);lg=s(nu,"This model is also a PyTorch "),hr=a(nu,"A",{href:!0,rel:!0});var yw=i(hr);dg=s(yw,"torch.nn.Module"),yw.forEach(n),cg=s(nu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nu.forEach(n),pg=f(zn),Je=a(zn,"DIV",{class:!0});var Sn=i(Je);v(gr.$$.fragment,Sn),ug=f(Sn),dt=a(Sn,"P",{});var pl=i(dt);fg=s(pl,"The "),Oi=a(pl,"A",{href:!0});var $w=i(Oi);mg=s($w,"FunnelForMaskedLM"),$w.forEach(n),hg=s(pl," forward method, overrides the "),ad=a(pl,"CODE",{});var Ew=i(ad);gg=s(Ew,"__call__"),Ew.forEach(n),_g=s(pl," special method."),pl.forEach(n),Tg=f(Sn),v(ro.$$.fragment,Sn),kg=f(Sn),v(ao.$$.fragment,Sn),Fg=f(Sn),v(io.$$.fragment,Sn),Sn.forEach(n),zn.forEach(n),rp=f(t),ct=a(t,"H2",{class:!0});var tu=i(ct);lo=a(tu,"A",{id:!0,class:!0,href:!0});var Mw=i(lo);id=a(Mw,"SPAN",{});var zw=i(id);v(_r.$$.fragment,zw),zw.forEach(n),Mw.forEach(n),bg=f(tu),ld=a(tu,"SPAN",{});var qw=i(ld);vg=s(qw,"FunnelForSequenceClassification"),qw.forEach(n),tu.forEach(n),ap=f(t),Ye=a(t,"DIV",{class:!0});var qn=i(Ye);v(Tr.$$.fragment,qn),wg=f(qn),dd=a(qn,"P",{});var xw=i(dd);yg=s(xw,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),xw.forEach(n),$g=f(qn),kr=a(qn,"P",{});var ou=i(kr);Eg=s(ou,"The Funnel Transformer model was proposed in "),Fr=a(ou,"A",{href:!0,rel:!0});var Pw=i(Fr);Mg=s(Pw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Pw.forEach(n),zg=s(ou," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ou.forEach(n),qg=f(qn),br=a(qn,"P",{});var su=i(br);xg=s(su,"This model inherits from "),Ai=a(su,"A",{href:!0});var Cw=i(Ai);Pg=s(Cw,"PreTrainedModel"),Cw.forEach(n),Cg=s(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(n),jg=f(qn),vr=a(qn,"P",{});var ru=i(vr);Lg=s(ru,"This model is also a PyTorch "),wr=a(ru,"A",{href:!0,rel:!0});var jw=i(wr);Og=s(jw,"torch.nn.Module"),jw.forEach(n),Ag=s(ru,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ru.forEach(n),Dg=f(qn),Ue=a(qn,"DIV",{class:!0});var an=i(Ue);v(yr.$$.fragment,an),Ng=f(an),pt=a(an,"P",{});var ul=i(pt);Sg=s(ul,"The "),Di=a(ul,"A",{href:!0});var Lw=i(Di);Ig=s(Lw,"FunnelForSequenceClassification"),Lw.forEach(n),Wg=s(ul," forward method, overrides the "),cd=a(ul,"CODE",{});var Ow=i(cd);Bg=s(Ow,"__call__"),Ow.forEach(n),Qg=s(ul," special method."),ul.forEach(n),Ug=f(an),v(co.$$.fragment,an),Rg=f(an),v(po.$$.fragment,an),Vg=f(an),v(uo.$$.fragment,an),Hg=f(an),v(fo.$$.fragment,an),Yg=f(an),v(mo.$$.fragment,an),an.forEach(n),qn.forEach(n),ip=f(t),ut=a(t,"H2",{class:!0});var au=i(ut);ho=a(au,"A",{id:!0,class:!0,href:!0});var Aw=i(ho);pd=a(Aw,"SPAN",{});var Dw=i(pd);v($r.$$.fragment,Dw),Dw.forEach(n),Aw.forEach(n),Kg=f(au),ud=a(au,"SPAN",{});var Nw=i(ud);Gg=s(Nw,"FunnelForMultipleChoice"),Nw.forEach(n),au.forEach(n),lp=f(t),Ke=a(t,"DIV",{class:!0});var xn=i(Ke);v(Er.$$.fragment,xn),Zg=f(xn),fd=a(xn,"P",{});var Sw=i(fd);Xg=s(Sw,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Sw.forEach(n),Jg=f(xn),Mr=a(xn,"P",{});var iu=i(Mr);e_=s(iu,"The Funnel Transformer model was proposed in "),zr=a(iu,"A",{href:!0,rel:!0});var Iw=i(zr);n_=s(Iw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Iw.forEach(n),t_=s(iu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),iu.forEach(n),o_=f(xn),qr=a(xn,"P",{});var lu=i(qr);s_=s(lu,"This model inherits from "),Ni=a(lu,"A",{href:!0});var Ww=i(Ni);r_=s(Ww,"PreTrainedModel"),Ww.forEach(n),a_=s(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu.forEach(n),i_=f(xn),xr=a(xn,"P",{});var du=i(xr);l_=s(du,"This model is also a PyTorch "),Pr=a(du,"A",{href:!0,rel:!0});var Bw=i(Pr);d_=s(Bw,"torch.nn.Module"),Bw.forEach(n),c_=s(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(n),p_=f(xn),bn=a(xn,"DIV",{class:!0});var ms=i(bn);v(Cr.$$.fragment,ms),u_=f(ms),ft=a(ms,"P",{});var fl=i(ft);f_=s(fl,"The "),Si=a(fl,"A",{href:!0});var Qw=i(Si);m_=s(Qw,"FunnelForMultipleChoice"),Qw.forEach(n),h_=s(fl," forward method, overrides the "),md=a(fl,"CODE",{});var Uw=i(md);g_=s(Uw,"__call__"),Uw.forEach(n),__=s(fl," special method."),fl.forEach(n),T_=f(ms),v(go.$$.fragment,ms),k_=f(ms),v(_o.$$.fragment,ms),ms.forEach(n),xn.forEach(n),dp=f(t),mt=a(t,"H2",{class:!0});var cu=i(mt);To=a(cu,"A",{id:!0,class:!0,href:!0});var Rw=i(To);hd=a(Rw,"SPAN",{});var Vw=i(hd);v(jr.$$.fragment,Vw),Vw.forEach(n),Rw.forEach(n),F_=f(cu),gd=a(cu,"SPAN",{});var Hw=i(gd);b_=s(Hw,"FunnelForTokenClassification"),Hw.forEach(n),cu.forEach(n),cp=f(t),Ge=a(t,"DIV",{class:!0});var Pn=i(Ge);v(Lr.$$.fragment,Pn),v_=f(Pn),_d=a(Pn,"P",{});var Yw=i(_d);w_=s(Yw,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Yw.forEach(n),y_=f(Pn),Or=a(Pn,"P",{});var pu=i(Or);$_=s(pu,"The Funnel Transformer model was proposed in "),Ar=a(pu,"A",{href:!0,rel:!0});var Kw=i(Ar);E_=s(Kw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Kw.forEach(n),M_=s(pu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),pu.forEach(n),z_=f(Pn),Dr=a(Pn,"P",{});var uu=i(Dr);q_=s(uu,"This model inherits from "),Ii=a(uu,"A",{href:!0});var Gw=i(Ii);x_=s(Gw,"PreTrainedModel"),Gw.forEach(n),P_=s(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(n),C_=f(Pn),Nr=a(Pn,"P",{});var fu=i(Nr);j_=s(fu,"This model is also a PyTorch "),Sr=a(fu,"A",{href:!0,rel:!0});var Zw=i(Sr);L_=s(Zw,"torch.nn.Module"),Zw.forEach(n),O_=s(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(n),A_=f(Pn),en=a(Pn,"DIV",{class:!0});var In=i(en);v(Ir.$$.fragment,In),D_=f(In),ht=a(In,"P",{});var ml=i(ht);N_=s(ml,"The "),Wi=a(ml,"A",{href:!0});var Xw=i(Wi);S_=s(Xw,"FunnelForTokenClassification"),Xw.forEach(n),I_=s(ml," forward method, overrides the "),Td=a(ml,"CODE",{});var Jw=i(Td);W_=s(Jw,"__call__"),Jw.forEach(n),B_=s(ml," special method."),ml.forEach(n),Q_=f(In),v(ko.$$.fragment,In),U_=f(In),v(Fo.$$.fragment,In),R_=f(In),v(bo.$$.fragment,In),In.forEach(n),Pn.forEach(n),pp=f(t),gt=a(t,"H2",{class:!0});var mu=i(gt);vo=a(mu,"A",{id:!0,class:!0,href:!0});var ey=i(vo);kd=a(ey,"SPAN",{});var ny=i(kd);v(Wr.$$.fragment,ny),ny.forEach(n),ey.forEach(n),V_=f(mu),Fd=a(mu,"SPAN",{});var ty=i(Fd);H_=s(ty,"FunnelForQuestionAnswering"),ty.forEach(n),mu.forEach(n),up=f(t),Ze=a(t,"DIV",{class:!0});var Cn=i(Ze);v(Br.$$.fragment,Cn),Y_=f(Cn),_t=a(Cn,"P",{});var hl=i(_t);K_=s(hl,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),bd=a(hl,"CODE",{});var oy=i(bd);G_=s(oy,"span start logits"),oy.forEach(n),Z_=s(hl," and "),vd=a(hl,"CODE",{});var sy=i(vd);X_=s(sy,"span end logits"),sy.forEach(n),J_=s(hl,")."),hl.forEach(n),eT=f(Cn),Qr=a(Cn,"P",{});var hu=i(Qr);nT=s(hu,"The Funnel Transformer model was proposed in "),Ur=a(hu,"A",{href:!0,rel:!0});var ry=i(Ur);tT=s(ry,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ry.forEach(n),oT=s(hu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),hu.forEach(n),sT=f(Cn),Rr=a(Cn,"P",{});var gu=i(Rr);rT=s(gu,"This model inherits from "),Bi=a(gu,"A",{href:!0});var ay=i(Bi);aT=s(ay,"PreTrainedModel"),ay.forEach(n),iT=s(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gu.forEach(n),lT=f(Cn),Vr=a(Cn,"P",{});var _u=i(Vr);dT=s(_u,"This model is also a PyTorch "),Hr=a(_u,"A",{href:!0,rel:!0});var iy=i(Hr);cT=s(iy,"torch.nn.Module"),iy.forEach(n),pT=s(_u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_u.forEach(n),uT=f(Cn),nn=a(Cn,"DIV",{class:!0});var Wn=i(nn);v(Yr.$$.fragment,Wn),fT=f(Wn),Tt=a(Wn,"P",{});var gl=i(Tt);mT=s(gl,"The "),Qi=a(gl,"A",{href:!0});var ly=i(Qi);hT=s(ly,"FunnelForQuestionAnswering"),ly.forEach(n),gT=s(gl," forward method, overrides the "),wd=a(gl,"CODE",{});var dy=i(wd);_T=s(dy,"__call__"),dy.forEach(n),TT=s(gl," special method."),gl.forEach(n),kT=f(Wn),v(wo.$$.fragment,Wn),FT=f(Wn),v(yo.$$.fragment,Wn),bT=f(Wn),v($o.$$.fragment,Wn),Wn.forEach(n),Cn.forEach(n),fp=f(t),kt=a(t,"H2",{class:!0});var Tu=i(kt);Eo=a(Tu,"A",{id:!0,class:!0,href:!0});var cy=i(Eo);yd=a(cy,"SPAN",{});var py=i(yd);v(Kr.$$.fragment,py),py.forEach(n),cy.forEach(n),vT=f(Tu),$d=a(Tu,"SPAN",{});var uy=i($d);wT=s(uy,"TFFunnelBaseModel"),uy.forEach(n),Tu.forEach(n),mp=f(t),Oe=a(t,"DIV",{class:!0});var ln=i(Oe);v(Gr.$$.fragment,ln),yT=f(ln),Ed=a(ln,"P",{});var fy=i(Ed);$T=s(fy,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),fy.forEach(n),ET=f(ln),Zr=a(ln,"P",{});var ku=i(Zr);MT=s(ku,"The Funnel Transformer model was proposed in "),Xr=a(ku,"A",{href:!0,rel:!0});var my=i(Xr);zT=s(my,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),my.forEach(n),qT=s(ku," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ku.forEach(n),xT=f(ln),Jr=a(ln,"P",{});var Fu=i(Jr);PT=s(Fu,"This model inherits from "),Ui=a(Fu,"A",{href:!0});var hy=i(Ui);CT=s(hy,"TFPreTrainedModel"),hy.forEach(n),jT=s(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(n),LT=f(ln),ea=a(ln,"P",{});var bu=i(ea);OT=s(bu,"This model is also a "),na=a(bu,"A",{href:!0,rel:!0});var gy=i(na);AT=s(gy,"tf.keras.Model"),gy.forEach(n),DT=s(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(n),NT=f(ln),v(Mo.$$.fragment,ln),ST=f(ln),vn=a(ln,"DIV",{class:!0});var hs=i(vn);v(ta.$$.fragment,hs),IT=f(hs),Ft=a(hs,"P",{});var _l=i(Ft);WT=s(_l,"The "),Ri=a(_l,"A",{href:!0});var _y=i(Ri);BT=s(_y,"TFFunnelBaseModel"),_y.forEach(n),QT=s(_l," forward method, overrides the "),Md=a(_l,"CODE",{});var Ty=i(Md);UT=s(Ty,"__call__"),Ty.forEach(n),RT=s(_l," special method."),_l.forEach(n),VT=f(hs),v(zo.$$.fragment,hs),HT=f(hs),v(qo.$$.fragment,hs),hs.forEach(n),ln.forEach(n),hp=f(t),bt=a(t,"H2",{class:!0});var vu=i(bt);xo=a(vu,"A",{id:!0,class:!0,href:!0});var ky=i(xo);zd=a(ky,"SPAN",{});var Fy=i(zd);v(oa.$$.fragment,Fy),Fy.forEach(n),ky.forEach(n),YT=f(vu),qd=a(vu,"SPAN",{});var by=i(qd);KT=s(by,"TFFunnelModel"),by.forEach(n),vu.forEach(n),gp=f(t),Ae=a(t,"DIV",{class:!0});var dn=i(Ae);v(sa.$$.fragment,dn),GT=f(dn),xd=a(dn,"P",{});var vy=i(xd);ZT=s(vy,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),vy.forEach(n),XT=f(dn),ra=a(dn,"P",{});var wu=i(ra);JT=s(wu,"The Funnel Transformer model was proposed in "),aa=a(wu,"A",{href:!0,rel:!0});var wy=i(aa);ek=s(wy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),wy.forEach(n),nk=s(wu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),wu.forEach(n),tk=f(dn),ia=a(dn,"P",{});var yu=i(ia);ok=s(yu,"This model inherits from "),Vi=a(yu,"A",{href:!0});var yy=i(Vi);sk=s(yy,"TFPreTrainedModel"),yy.forEach(n),rk=s(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(n),ak=f(dn),la=a(dn,"P",{});var $u=i(la);ik=s($u,"This model is also a "),da=a($u,"A",{href:!0,rel:!0});var $y=i(da);lk=s($y,"tf.keras.Model"),$y.forEach(n),dk=s($u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$u.forEach(n),ck=f(dn),v(Po.$$.fragment,dn),pk=f(dn),wn=a(dn,"DIV",{class:!0});var gs=i(wn);v(ca.$$.fragment,gs),uk=f(gs),vt=a(gs,"P",{});var Tl=i(vt);fk=s(Tl,"The "),Hi=a(Tl,"A",{href:!0});var Ey=i(Hi);mk=s(Ey,"TFFunnelModel"),Ey.forEach(n),hk=s(Tl," forward method, overrides the "),Pd=a(Tl,"CODE",{});var My=i(Pd);gk=s(My,"__call__"),My.forEach(n),_k=s(Tl," special method."),Tl.forEach(n),Tk=f(gs),v(Co.$$.fragment,gs),kk=f(gs),v(jo.$$.fragment,gs),gs.forEach(n),dn.forEach(n),_p=f(t),wt=a(t,"H2",{class:!0});var Eu=i(wt);Lo=a(Eu,"A",{id:!0,class:!0,href:!0});var zy=i(Lo);Cd=a(zy,"SPAN",{});var qy=i(Cd);v(pa.$$.fragment,qy),qy.forEach(n),zy.forEach(n),Fk=f(Eu),jd=a(Eu,"SPAN",{});var xy=i(jd);bk=s(xy,"TFFunnelModelForPreTraining"),xy.forEach(n),Eu.forEach(n),Tp=f(t),De=a(t,"DIV",{class:!0});var cn=i(De);v(ua.$$.fragment,cn),vk=f(cn),Ld=a(cn,"P",{});var Py=i(Ld);wk=s(Py,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),Py.forEach(n),yk=f(cn),fa=a(cn,"P",{});var Mu=i(fa);$k=s(Mu,"The Funnel Transformer model was proposed in "),ma=a(Mu,"A",{href:!0,rel:!0});var Cy=i(ma);Ek=s(Cy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Cy.forEach(n),Mk=s(Mu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Mu.forEach(n),zk=f(cn),ha=a(cn,"P",{});var zu=i(ha);qk=s(zu,"This model inherits from "),Yi=a(zu,"A",{href:!0});var jy=i(Yi);xk=s(jy,"TFPreTrainedModel"),jy.forEach(n),Pk=s(zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zu.forEach(n),Ck=f(cn),ga=a(cn,"P",{});var qu=i(ga);jk=s(qu,"This model is also a "),_a=a(qu,"A",{href:!0,rel:!0});var Ly=i(_a);Lk=s(Ly,"tf.keras.Model"),Ly.forEach(n),Ok=s(qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qu.forEach(n),Ak=f(cn),v(Oo.$$.fragment,cn),Dk=f(cn),yn=a(cn,"DIV",{class:!0});var _s=i(yn);v(Ta.$$.fragment,_s),Nk=f(_s),yt=a(_s,"P",{});var kl=i(yt);Sk=s(kl,"The "),Ki=a(kl,"A",{href:!0});var Oy=i(Ki);Ik=s(Oy,"TFFunnelForPreTraining"),Oy.forEach(n),Wk=s(kl," forward method, overrides the "),Od=a(kl,"CODE",{});var Ay=i(Od);Bk=s(Ay,"__call__"),Ay.forEach(n),Qk=s(kl," special method."),kl.forEach(n),Uk=f(_s),v(Ao.$$.fragment,_s),Rk=f(_s),v(Do.$$.fragment,_s),_s.forEach(n),cn.forEach(n),kp=f(t),$t=a(t,"H2",{class:!0});var xu=i($t);No=a(xu,"A",{id:!0,class:!0,href:!0});var Dy=i(No);Ad=a(Dy,"SPAN",{});var Ny=i(Ad);v(ka.$$.fragment,Ny),Ny.forEach(n),Dy.forEach(n),Vk=f(xu),Dd=a(xu,"SPAN",{});var Sy=i(Dd);Hk=s(Sy,"TFFunnelForMaskedLM"),Sy.forEach(n),xu.forEach(n),Fp=f(t),Ne=a(t,"DIV",{class:!0});var pn=i(Ne);v(Fa.$$.fragment,pn),Yk=f(pn),ba=a(pn,"P",{});var Pu=i(ba);Kk=s(Pu,"Funnel Model with a "),Nd=a(Pu,"CODE",{});var Iy=i(Nd);Gk=s(Iy,"language modeling"),Iy.forEach(n),Zk=s(Pu," head on top."),Pu.forEach(n),Xk=f(pn),va=a(pn,"P",{});var Cu=i(va);Jk=s(Cu,"The Funnel Transformer model was proposed in "),wa=a(Cu,"A",{href:!0,rel:!0});var Wy=i(wa);eF=s(Wy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Wy.forEach(n),nF=s(Cu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Cu.forEach(n),tF=f(pn),ya=a(pn,"P",{});var ju=i(ya);oF=s(ju,"This model inherits from "),Gi=a(ju,"A",{href:!0});var By=i(Gi);sF=s(By,"TFPreTrainedModel"),By.forEach(n),rF=s(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(n),aF=f(pn),$a=a(pn,"P",{});var Lu=i($a);iF=s(Lu,"This model is also a "),Ea=a(Lu,"A",{href:!0,rel:!0});var Qy=i(Ea);lF=s(Qy,"tf.keras.Model"),Qy.forEach(n),dF=s(Lu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lu.forEach(n),cF=f(pn),v(So.$$.fragment,pn),pF=f(pn),tn=a(pn,"DIV",{class:!0});var Bn=i(tn);v(Ma.$$.fragment,Bn),uF=f(Bn),Et=a(Bn,"P",{});var Fl=i(Et);fF=s(Fl,"The "),Zi=a(Fl,"A",{href:!0});var Uy=i(Zi);mF=s(Uy,"TFFunnelForMaskedLM"),Uy.forEach(n),hF=s(Fl," forward method, overrides the "),Sd=a(Fl,"CODE",{});var Ry=i(Sd);gF=s(Ry,"__call__"),Ry.forEach(n),_F=s(Fl," special method."),Fl.forEach(n),TF=f(Bn),v(Io.$$.fragment,Bn),kF=f(Bn),v(Wo.$$.fragment,Bn),FF=f(Bn),v(Bo.$$.fragment,Bn),Bn.forEach(n),pn.forEach(n),bp=f(t),Mt=a(t,"H2",{class:!0});var Ou=i(Mt);Qo=a(Ou,"A",{id:!0,class:!0,href:!0});var Vy=i(Qo);Id=a(Vy,"SPAN",{});var Hy=i(Id);v(za.$$.fragment,Hy),Hy.forEach(n),Vy.forEach(n),bF=f(Ou),Wd=a(Ou,"SPAN",{});var Yy=i(Wd);vF=s(Yy,"TFFunnelForSequenceClassification"),Yy.forEach(n),Ou.forEach(n),vp=f(t),Se=a(t,"DIV",{class:!0});var un=i(Se);v(qa.$$.fragment,un),wF=f(un),Bd=a(un,"P",{});var Ky=i(Bd);yF=s(Ky,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ky.forEach(n),$F=f(un),xa=a(un,"P",{});var Au=i(xa);EF=s(Au,"The Funnel Transformer model was proposed in "),Pa=a(Au,"A",{href:!0,rel:!0});var Gy=i(Pa);MF=s(Gy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Gy.forEach(n),zF=s(Au," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Au.forEach(n),qF=f(un),Ca=a(un,"P",{});var Du=i(Ca);xF=s(Du,"This model inherits from "),Xi=a(Du,"A",{href:!0});var Zy=i(Xi);PF=s(Zy,"TFPreTrainedModel"),Zy.forEach(n),CF=s(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(n),jF=f(un),ja=a(un,"P",{});var Nu=i(ja);LF=s(Nu,"This model is also a "),La=a(Nu,"A",{href:!0,rel:!0});var Xy=i(La);OF=s(Xy,"tf.keras.Model"),Xy.forEach(n),AF=s(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(n),DF=f(un),v(Uo.$$.fragment,un),NF=f(un),on=a(un,"DIV",{class:!0});var Qn=i(on);v(Oa.$$.fragment,Qn),SF=f(Qn),zt=a(Qn,"P",{});var bl=i(zt);IF=s(bl,"The "),Ji=a(bl,"A",{href:!0});var Jy=i(Ji);WF=s(Jy,"TFFunnelForSequenceClassification"),Jy.forEach(n),BF=s(bl," forward method, overrides the "),Qd=a(bl,"CODE",{});var e$=i(Qd);QF=s(e$,"__call__"),e$.forEach(n),UF=s(bl," special method."),bl.forEach(n),RF=f(Qn),v(Ro.$$.fragment,Qn),VF=f(Qn),v(Vo.$$.fragment,Qn),HF=f(Qn),v(Ho.$$.fragment,Qn),Qn.forEach(n),un.forEach(n),wp=f(t),qt=a(t,"H2",{class:!0});var Su=i(qt);Yo=a(Su,"A",{id:!0,class:!0,href:!0});var n$=i(Yo);Ud=a(n$,"SPAN",{});var t$=i(Ud);v(Aa.$$.fragment,t$),t$.forEach(n),n$.forEach(n),YF=f(Su),Rd=a(Su,"SPAN",{});var o$=i(Rd);KF=s(o$,"TFFunnelForMultipleChoice"),o$.forEach(n),Su.forEach(n),yp=f(t),Ie=a(t,"DIV",{class:!0});var fn=i(Ie);v(Da.$$.fragment,fn),GF=f(fn),Vd=a(fn,"P",{});var s$=i(Vd);ZF=s(s$,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s$.forEach(n),XF=f(fn),Na=a(fn,"P",{});var Iu=i(Na);JF=s(Iu,"The Funnel Transformer model was proposed in "),Sa=a(Iu,"A",{href:!0,rel:!0});var r$=i(Sa);eb=s(r$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),r$.forEach(n),nb=s(Iu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Iu.forEach(n),tb=f(fn),Ia=a(fn,"P",{});var Wu=i(Ia);ob=s(Wu,"This model inherits from "),el=a(Wu,"A",{href:!0});var a$=i(el);sb=s(a$,"TFPreTrainedModel"),a$.forEach(n),rb=s(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(n),ab=f(fn),Wa=a(fn,"P",{});var Bu=i(Wa);ib=s(Bu,"This model is also a "),Ba=a(Bu,"A",{href:!0,rel:!0});var i$=i(Ba);lb=s(i$,"tf.keras.Model"),i$.forEach(n),db=s(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(n),cb=f(fn),v(Ko.$$.fragment,fn),pb=f(fn),$n=a(fn,"DIV",{class:!0});var Ts=i($n);v(Qa.$$.fragment,Ts),ub=f(Ts),xt=a(Ts,"P",{});var vl=i(xt);fb=s(vl,"The "),nl=a(vl,"A",{href:!0});var l$=i(nl);mb=s(l$,"TFFunnelForMultipleChoice"),l$.forEach(n),hb=s(vl," forward method, overrides the "),Hd=a(vl,"CODE",{});var d$=i(Hd);gb=s(d$,"__call__"),d$.forEach(n),_b=s(vl," special method."),vl.forEach(n),Tb=f(Ts),v(Go.$$.fragment,Ts),kb=f(Ts),v(Zo.$$.fragment,Ts),Ts.forEach(n),fn.forEach(n),$p=f(t),Pt=a(t,"H2",{class:!0});var Qu=i(Pt);Xo=a(Qu,"A",{id:!0,class:!0,href:!0});var c$=i(Xo);Yd=a(c$,"SPAN",{});var p$=i(Yd);v(Ua.$$.fragment,p$),p$.forEach(n),c$.forEach(n),Fb=f(Qu),Kd=a(Qu,"SPAN",{});var u$=i(Kd);bb=s(u$,"TFFunnelForTokenClassification"),u$.forEach(n),Qu.forEach(n),Ep=f(t),We=a(t,"DIV",{class:!0});var mn=i(We);v(Ra.$$.fragment,mn),vb=f(mn),Gd=a(mn,"P",{});var f$=i(Gd);wb=s(f$,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),f$.forEach(n),yb=f(mn),Va=a(mn,"P",{});var Uu=i(Va);$b=s(Uu,"The Funnel Transformer model was proposed in "),Ha=a(Uu,"A",{href:!0,rel:!0});var m$=i(Ha);Eb=s(m$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),m$.forEach(n),Mb=s(Uu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Uu.forEach(n),zb=f(mn),Ya=a(mn,"P",{});var Ru=i(Ya);qb=s(Ru,"This model inherits from "),tl=a(Ru,"A",{href:!0});var h$=i(tl);xb=s(h$,"TFPreTrainedModel"),h$.forEach(n),Pb=s(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(n),Cb=f(mn),Ka=a(mn,"P",{});var Vu=i(Ka);jb=s(Vu,"This model is also a "),Ga=a(Vu,"A",{href:!0,rel:!0});var g$=i(Ga);Lb=s(g$,"tf.keras.Model"),g$.forEach(n),Ob=s(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(n),Ab=f(mn),v(Jo.$$.fragment,mn),Db=f(mn),sn=a(mn,"DIV",{class:!0});var Un=i(sn);v(Za.$$.fragment,Un),Nb=f(Un),Ct=a(Un,"P",{});var wl=i(Ct);Sb=s(wl,"The "),ol=a(wl,"A",{href:!0});var _$=i(ol);Ib=s(_$,"TFFunnelForTokenClassification"),_$.forEach(n),Wb=s(wl," forward method, overrides the "),Zd=a(wl,"CODE",{});var T$=i(Zd);Bb=s(T$,"__call__"),T$.forEach(n),Qb=s(wl," special method."),wl.forEach(n),Ub=f(Un),v(es.$$.fragment,Un),Rb=f(Un),v(ns.$$.fragment,Un),Vb=f(Un),v(ts.$$.fragment,Un),Un.forEach(n),mn.forEach(n),Mp=f(t),jt=a(t,"H2",{class:!0});var Hu=i(jt);os=a(Hu,"A",{id:!0,class:!0,href:!0});var k$=i(os);Xd=a(k$,"SPAN",{});var F$=i(Xd);v(Xa.$$.fragment,F$),F$.forEach(n),k$.forEach(n),Hb=f(Hu),Jd=a(Hu,"SPAN",{});var b$=i(Jd);Yb=s(b$,"TFFunnelForQuestionAnswering"),b$.forEach(n),Hu.forEach(n),zp=f(t),Be=a(t,"DIV",{class:!0});var hn=i(Be);v(Ja.$$.fragment,hn),Kb=f(hn),Lt=a(hn,"P",{});var yl=i(Lt);Gb=s(yl,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ec=a(yl,"CODE",{});var v$=i(ec);Zb=s(v$,"span start logits"),v$.forEach(n),Xb=s(yl," and "),nc=a(yl,"CODE",{});var w$=i(nc);Jb=s(w$,"span end logits"),w$.forEach(n),ev=s(yl,")."),yl.forEach(n),nv=f(hn),ei=a(hn,"P",{});var Yu=i(ei);tv=s(Yu,"The Funnel Transformer model was proposed in "),ni=a(Yu,"A",{href:!0,rel:!0});var y$=i(ni);ov=s(y$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),y$.forEach(n),sv=s(Yu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yu.forEach(n),rv=f(hn),ti=a(hn,"P",{});var Ku=i(ti);av=s(Ku,"This model inherits from "),sl=a(Ku,"A",{href:!0});var $$=i(sl);iv=s($$,"TFPreTrainedModel"),$$.forEach(n),lv=s(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(n),dv=f(hn),oi=a(hn,"P",{});var Gu=i(oi);cv=s(Gu,"This model is also a "),si=a(Gu,"A",{href:!0,rel:!0});var E$=i(si);pv=s(E$,"tf.keras.Model"),E$.forEach(n),uv=s(Gu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gu.forEach(n),fv=f(hn),v(ss.$$.fragment,hn),mv=f(hn),rn=a(hn,"DIV",{class:!0});var Rn=i(rn);v(ri.$$.fragment,Rn),hv=f(Rn),Ot=a(Rn,"P",{});var $l=i(Ot);gv=s($l,"The "),rl=a($l,"A",{href:!0});var M$=i(rl);_v=s(M$,"TFFunnelForQuestionAnswering"),M$.forEach(n),Tv=s($l," forward method, overrides the "),tc=a($l,"CODE",{});var z$=i(tc);kv=s(z$,"__call__"),z$.forEach(n),Fv=s($l," special method."),$l.forEach(n),bv=f(Rn),v(rs.$$.fragment,Rn),vv=f(Rn),v(as.$$.fragment,Rn),wv=f(Rn),v(is.$$.fragment,Rn),Rn.forEach(n),hn.forEach(n),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(j1)),h(p,"id","funnel-transformer"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#funnel-transformer"),h(c,"class","relative group"),h(J,"id","overview"),h(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(J,"href","#overview"),h(x,"class","relative group"),h(te,"href","https://arxiv.org/abs/2006.03236"),h(te,"rel","nofollow"),h(re,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),h(g,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),h(Te,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),h(ke,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),h(Fe,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),h(be,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),h(fi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),h(ks,"href","https://huggingface.co/sgugger"),h(ks,"rel","nofollow"),h(Fs,"href","https://github.com/laiguokun/Funnel-Transformer"),h(Fs,"rel","nofollow"),h(It,"id","transformers.FunnelConfig"),h(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(It,"href","#transformers.FunnelConfig"),h(Vn,"class","relative group"),h(mi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),h(hi,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),h(ws,"href","https://huggingface.co/funnel-transformer/small"),h(ws,"rel","nofollow"),h(gi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(_i,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wt,"id","transformers.FunnelTokenizer"),h(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wt,"href","#transformers.FunnelTokenizer"),h(Yn,"class","relative group"),h(Ti,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer"),h(ki,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),h(Fi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),h(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"id","transformers.FunnelTokenizerFast"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#transformers.FunnelTokenizerFast"),h(Gn,"class","relative group"),h(yi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizerFast"),h($i,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),h(Ei,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),h(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),h(Xn,"class","relative group"),h(Mi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),h(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),h(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kt,"id","transformers.FunnelBaseModel"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#transformers.FunnelBaseModel"),h(nt,"class","relative group"),h(Vs,"href","https://arxiv.org/abs/2006.03236"),h(Vs,"rel","nofollow"),h(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ks,"rel","nofollow"),h(xi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),h(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"id","transformers.FunnelModel"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#transformers.FunnelModel"),h(ot,"class","relative group"),h(er,"href","https://arxiv.org/abs/2006.03236"),h(er,"rel","nofollow"),h(Pi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(or,"rel","nofollow"),h(Ci,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),h(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"id","transformers.FunnelForPreTraining"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.FunnelForPreTraining"),h(rt,"class","relative group"),h(ji,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),h(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"id","transformers.FunnelForMaskedLM"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.FunnelForMaskedLM"),h(lt,"class","relative group"),h(ur,"href","https://arxiv.org/abs/2006.03236"),h(ur,"rel","nofollow"),h(Li,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(hr,"rel","nofollow"),h(Oi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),h(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"id","transformers.FunnelForSequenceClassification"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.FunnelForSequenceClassification"),h(ct,"class","relative group"),h(Fr,"href","https://arxiv.org/abs/2006.03236"),h(Fr,"rel","nofollow"),h(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(wr,"rel","nofollow"),h(Di,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),h(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"id","transformers.FunnelForMultipleChoice"),h(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ho,"href","#transformers.FunnelForMultipleChoice"),h(ut,"class","relative group"),h(zr,"href","https://arxiv.org/abs/2006.03236"),h(zr,"rel","nofollow"),h(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Pr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Pr,"rel","nofollow"),h(Si,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),h(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(To,"id","transformers.FunnelForTokenClassification"),h(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(To,"href","#transformers.FunnelForTokenClassification"),h(mt,"class","relative group"),h(Ar,"href","https://arxiv.org/abs/2006.03236"),h(Ar,"rel","nofollow"),h(Ii,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Sr,"rel","nofollow"),h(Wi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),h(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vo,"id","transformers.FunnelForQuestionAnswering"),h(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vo,"href","#transformers.FunnelForQuestionAnswering"),h(gt,"class","relative group"),h(Ur,"href","https://arxiv.org/abs/2006.03236"),h(Ur,"rel","nofollow"),h(Bi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Hr,"rel","nofollow"),h(Qi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),h(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"id","transformers.TFFunnelBaseModel"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.TFFunnelBaseModel"),h(kt,"class","relative group"),h(Xr,"href","https://arxiv.org/abs/2006.03236"),h(Xr,"rel","nofollow"),h(Ui,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(na,"rel","nofollow"),h(Ri,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelBaseModel"),h(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xo,"id","transformers.TFFunnelModel"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.TFFunnelModel"),h(bt,"class","relative group"),h(aa,"href","https://arxiv.org/abs/2006.03236"),h(aa,"rel","nofollow"),h(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(da,"rel","nofollow"),h(Hi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelModel"),h(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.TFFunnelForPreTraining"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.TFFunnelForPreTraining"),h(wt,"class","relative group"),h(ma,"href","https://arxiv.org/abs/2006.03236"),h(ma,"rel","nofollow"),h(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(_a,"rel","nofollow"),h(Ki,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),h(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"id","transformers.TFFunnelForMaskedLM"),h(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(No,"href","#transformers.TFFunnelForMaskedLM"),h($t,"class","relative group"),h(wa,"href","https://arxiv.org/abs/2006.03236"),h(wa,"rel","nofollow"),h(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ea,"rel","nofollow"),h(Zi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),h(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qo,"id","transformers.TFFunnelForSequenceClassification"),h(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qo,"href","#transformers.TFFunnelForSequenceClassification"),h(Mt,"class","relative group"),h(Pa,"href","https://arxiv.org/abs/2006.03236"),h(Pa,"rel","nofollow"),h(Xi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(La,"rel","nofollow"),h(Ji,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),h(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.TFFunnelForMultipleChoice"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.TFFunnelForMultipleChoice"),h(qt,"class","relative group"),h(Sa,"href","https://arxiv.org/abs/2006.03236"),h(Sa,"rel","nofollow"),h(el,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ba,"rel","nofollow"),h(nl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),h($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xo,"id","transformers.TFFunnelForTokenClassification"),h(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xo,"href","#transformers.TFFunnelForTokenClassification"),h(Pt,"class","relative group"),h(Ha,"href","https://arxiv.org/abs/2006.03236"),h(Ha,"rel","nofollow"),h(tl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ga,"rel","nofollow"),h(ol,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),h(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(os,"id","transformers.TFFunnelForQuestionAnswering"),h(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(os,"href","#transformers.TFFunnelForQuestionAnswering"),h(jt,"class","relative group"),h(ni,"href","https://arxiv.org/abs/2006.03236"),h(ni,"rel","nofollow"),h(sl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(si,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(si,"rel","nofollow"),h(rl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),h(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,F){e(document.head,d),_(t,T,F),_(t,c,F),e(c,p),e(p,k),w(l,k,null),e(c,m),e(c,q),e(q,ce),_(t,K,F),_(t,x,F),e(x,J),e(J,N),w(ne,N,null),e(x,pe),e(x,S),e(S,ue),_(t,ie,F),_(t,Y,F),e(Y,O),e(Y,te),e(te,G),e(Y,P),_(t,j,F),_(t,oe,F),e(oe,Q),_(t,le,F),_(t,se,F),e(se,I),e(I,fe),_(t,de,F),_(t,C,F),e(C,me),_(t,B,F),_(t,ee,F),e(ee,ae),e(ae,U),e(ee,he),e(ee,W),e(W,A),e(W,re),e(re,R),e(W,ge),e(W,g),e(g,M),e(W,Z),e(W,Te),e(Te,$e),e(W,D),e(W,ke),e(ke,Ee),e(W,Me),e(W,L),e(L,V),e(W,ze),e(W,Fe),e(Fe,H),e(W,qe),e(W,be),e(be,_e),e(W,xe),e(W,fi),e(fi,Zu),e(W,Xu),_(t,Wc,F),_(t,An,F),e(An,Ju),e(An,ks),e(ks,ef),e(An,nf),e(An,Fs),e(Fs,tf),e(An,of),_(t,Bc,F),_(t,Vn,F),e(Vn,It),e(It,El),w(bs,El,null),e(Vn,sf),e(Vn,Ml),e(Ml,rf),_(t,Qc,F),_(t,jn,F),w(vs,jn,null),e(jn,af),e(jn,Ln),e(Ln,lf),e(Ln,mi),e(mi,df),e(Ln,cf),e(Ln,hi),e(hi,pf),e(Ln,uf),e(Ln,ws),e(ws,ff),e(Ln,mf),e(jn,hf),e(jn,Hn),e(Hn,gf),e(Hn,gi),e(gi,_f),e(Hn,Tf),e(Hn,_i),e(_i,kf),e(Hn,Ff),_(t,Uc,F),_(t,Yn,F),e(Yn,Wt),e(Wt,zl),w(ys,zl,null),e(Yn,bf),e(Yn,ql),e(ql,vf),_(t,Rc,F),_(t,je,F),w($s,je,null),e(je,wf),e(je,xl),e(xl,yf),e(je,$f),e(je,Bt),e(Bt,Ti),e(Ti,Ef),e(Bt,Mf),e(Bt,ki),e(ki,zf),e(Bt,qf),e(je,xf),e(je,Es),e(Es,Pf),e(Es,Fi),e(Fi,Cf),e(Es,jf),e(je,Lf),e(je,Dn),w(Ms,Dn,null),e(Dn,Of),e(Dn,Pl),e(Pl,Af),e(Dn,Df),e(Dn,zs),e(zs,bi),e(bi,Nf),e(bi,Cl),e(Cl,Sf),e(zs,If),e(zs,vi),e(vi,Wf),e(vi,jl),e(jl,Bf),e(je,Qf),e(je,Qt),w(qs,Qt,null),e(Qt,Uf),e(Qt,xs),e(xs,Rf),e(xs,Ll),e(Ll,Vf),e(xs,Hf),e(je,Yf),e(je,gn),w(Ps,gn,null),e(gn,Kf),e(gn,Ol),e(Ol,Gf),e(gn,Zf),w(Ut,gn,null),e(gn,Xf),e(gn,Kn),e(Kn,Jf),e(Kn,Al),e(Al,em),e(Kn,nm),e(Kn,Dl),e(Dl,tm),e(Kn,om),e(je,sm),e(je,wi),w(Cs,wi,null),_(t,Vc,F),_(t,Gn,F),e(Gn,Rt),e(Rt,Nl),w(js,Nl,null),e(Gn,rm),e(Gn,Sl),e(Sl,am),_(t,Hc,F),_(t,Xe,F),w(Ls,Xe,null),e(Xe,im),e(Xe,Os),e(Os,lm),e(Os,Il),e(Il,dm),e(Os,cm),e(Xe,pm),e(Xe,Vt),e(Vt,yi),e(yi,um),e(Vt,fm),e(Vt,$i),e($i,mm),e(Vt,hm),e(Xe,gm),e(Xe,As),e(As,_m),e(As,Ei),e(Ei,Tm),e(As,km),e(Xe,Fm),e(Xe,_n),w(Ds,_n,null),e(_n,bm),e(_n,Wl),e(Wl,vm),e(_n,wm),w(Ht,_n,null),e(_n,ym),e(_n,Zn),e(Zn,$m),e(Zn,Bl),e(Bl,Em),e(Zn,Mm),e(Zn,Ql),e(Ql,zm),e(Zn,qm),_(t,Yc,F),_(t,Xn,F),e(Xn,Yt),e(Yt,Ul),w(Ns,Ul,null),e(Xn,xm),e(Xn,Rl),e(Rl,Pm),_(t,Kc,F),_(t,Jn,F),w(Ss,Jn,null),e(Jn,Cm),e(Jn,Is),e(Is,jm),e(Is,Mi),e(Mi,Lm),e(Is,Om),_(t,Gc,F),_(t,et,F),w(Ws,et,null),e(et,Am),e(et,Bs),e(Bs,Dm),e(Bs,zi),e(zi,Nm),e(Bs,Sm),_(t,Zc,F),_(t,nt,F),e(nt,Kt),e(Kt,Vl),w(Qs,Vl,null),e(nt,Im),e(nt,Hl),e(Hl,Wm),_(t,Xc,F),_(t,Re,F),w(Us,Re,null),e(Re,Bm),e(Re,Yl),e(Yl,Qm),e(Re,Um),e(Re,Rs),e(Rs,Rm),e(Rs,Vs),e(Vs,Vm),e(Rs,Hm),e(Re,Ym),e(Re,Hs),e(Hs,Km),e(Hs,qi),e(qi,Gm),e(Hs,Zm),e(Re,Xm),e(Re,Ys),e(Ys,Jm),e(Ys,Ks),e(Ks,eh),e(Ys,nh),e(Re,th),e(Re,Tn),w(Gs,Tn,null),e(Tn,oh),e(Tn,tt),e(tt,sh),e(tt,xi),e(xi,rh),e(tt,ah),e(tt,Kl),e(Kl,ih),e(tt,lh),e(Tn,dh),w(Gt,Tn,null),e(Tn,ch),w(Zt,Tn,null),_(t,Jc,F),_(t,ot,F),e(ot,Xt),e(Xt,Gl),w(Zs,Gl,null),e(ot,ph),e(ot,Zl),e(Zl,uh),_(t,ep,F),_(t,Ve,F),w(Xs,Ve,null),e(Ve,fh),e(Ve,Xl),e(Xl,mh),e(Ve,hh),e(Ve,Js),e(Js,gh),e(Js,er),e(er,_h),e(Js,Th),e(Ve,kh),e(Ve,nr),e(nr,Fh),e(nr,Pi),e(Pi,bh),e(nr,vh),e(Ve,wh),e(Ve,tr),e(tr,yh),e(tr,or),e(or,$h),e(tr,Eh),e(Ve,Mh),e(Ve,kn),w(sr,kn,null),e(kn,zh),e(kn,st),e(st,qh),e(st,Ci),e(Ci,xh),e(st,Ph),e(st,Jl),e(Jl,Ch),e(st,jh),e(kn,Lh),w(Jt,kn,null),e(kn,Oh),w(eo,kn,null),_(t,np,F),_(t,rt,F),e(rt,no),e(no,ed),w(rr,ed,null),e(rt,Ah),e(rt,nd),e(nd,Dh),_(t,tp,F),_(t,at,F),w(ar,at,null),e(at,Nh),e(at,Fn),w(ir,Fn,null),e(Fn,Sh),e(Fn,it),e(it,Ih),e(it,ji),e(ji,Wh),e(it,Bh),e(it,td),e(td,Qh),e(it,Uh),e(Fn,Rh),w(to,Fn,null),e(Fn,Vh),w(oo,Fn,null),_(t,op,F),_(t,lt,F),e(lt,so),e(so,od),w(lr,od,null),e(lt,Hh),e(lt,sd),e(sd,Yh),_(t,sp,F),_(t,He,F),w(dr,He,null),e(He,Kh),e(He,cr),e(cr,Gh),e(cr,rd),e(rd,Zh),e(cr,Xh),e(He,Jh),e(He,pr),e(pr,eg),e(pr,ur),e(ur,ng),e(pr,tg),e(He,og),e(He,fr),e(fr,sg),e(fr,Li),e(Li,rg),e(fr,ag),e(He,ig),e(He,mr),e(mr,lg),e(mr,hr),e(hr,dg),e(mr,cg),e(He,pg),e(He,Je),w(gr,Je,null),e(Je,ug),e(Je,dt),e(dt,fg),e(dt,Oi),e(Oi,mg),e(dt,hg),e(dt,ad),e(ad,gg),e(dt,_g),e(Je,Tg),w(ro,Je,null),e(Je,kg),w(ao,Je,null),e(Je,Fg),w(io,Je,null),_(t,rp,F),_(t,ct,F),e(ct,lo),e(lo,id),w(_r,id,null),e(ct,bg),e(ct,ld),e(ld,vg),_(t,ap,F),_(t,Ye,F),w(Tr,Ye,null),e(Ye,wg),e(Ye,dd),e(dd,yg),e(Ye,$g),e(Ye,kr),e(kr,Eg),e(kr,Fr),e(Fr,Mg),e(kr,zg),e(Ye,qg),e(Ye,br),e(br,xg),e(br,Ai),e(Ai,Pg),e(br,Cg),e(Ye,jg),e(Ye,vr),e(vr,Lg),e(vr,wr),e(wr,Og),e(vr,Ag),e(Ye,Dg),e(Ye,Ue),w(yr,Ue,null),e(Ue,Ng),e(Ue,pt),e(pt,Sg),e(pt,Di),e(Di,Ig),e(pt,Wg),e(pt,cd),e(cd,Bg),e(pt,Qg),e(Ue,Ug),w(co,Ue,null),e(Ue,Rg),w(po,Ue,null),e(Ue,Vg),w(uo,Ue,null),e(Ue,Hg),w(fo,Ue,null),e(Ue,Yg),w(mo,Ue,null),_(t,ip,F),_(t,ut,F),e(ut,ho),e(ho,pd),w($r,pd,null),e(ut,Kg),e(ut,ud),e(ud,Gg),_(t,lp,F),_(t,Ke,F),w(Er,Ke,null),e(Ke,Zg),e(Ke,fd),e(fd,Xg),e(Ke,Jg),e(Ke,Mr),e(Mr,e_),e(Mr,zr),e(zr,n_),e(Mr,t_),e(Ke,o_),e(Ke,qr),e(qr,s_),e(qr,Ni),e(Ni,r_),e(qr,a_),e(Ke,i_),e(Ke,xr),e(xr,l_),e(xr,Pr),e(Pr,d_),e(xr,c_),e(Ke,p_),e(Ke,bn),w(Cr,bn,null),e(bn,u_),e(bn,ft),e(ft,f_),e(ft,Si),e(Si,m_),e(ft,h_),e(ft,md),e(md,g_),e(ft,__),e(bn,T_),w(go,bn,null),e(bn,k_),w(_o,bn,null),_(t,dp,F),_(t,mt,F),e(mt,To),e(To,hd),w(jr,hd,null),e(mt,F_),e(mt,gd),e(gd,b_),_(t,cp,F),_(t,Ge,F),w(Lr,Ge,null),e(Ge,v_),e(Ge,_d),e(_d,w_),e(Ge,y_),e(Ge,Or),e(Or,$_),e(Or,Ar),e(Ar,E_),e(Or,M_),e(Ge,z_),e(Ge,Dr),e(Dr,q_),e(Dr,Ii),e(Ii,x_),e(Dr,P_),e(Ge,C_),e(Ge,Nr),e(Nr,j_),e(Nr,Sr),e(Sr,L_),e(Nr,O_),e(Ge,A_),e(Ge,en),w(Ir,en,null),e(en,D_),e(en,ht),e(ht,N_),e(ht,Wi),e(Wi,S_),e(ht,I_),e(ht,Td),e(Td,W_),e(ht,B_),e(en,Q_),w(ko,en,null),e(en,U_),w(Fo,en,null),e(en,R_),w(bo,en,null),_(t,pp,F),_(t,gt,F),e(gt,vo),e(vo,kd),w(Wr,kd,null),e(gt,V_),e(gt,Fd),e(Fd,H_),_(t,up,F),_(t,Ze,F),w(Br,Ze,null),e(Ze,Y_),e(Ze,_t),e(_t,K_),e(_t,bd),e(bd,G_),e(_t,Z_),e(_t,vd),e(vd,X_),e(_t,J_),e(Ze,eT),e(Ze,Qr),e(Qr,nT),e(Qr,Ur),e(Ur,tT),e(Qr,oT),e(Ze,sT),e(Ze,Rr),e(Rr,rT),e(Rr,Bi),e(Bi,aT),e(Rr,iT),e(Ze,lT),e(Ze,Vr),e(Vr,dT),e(Vr,Hr),e(Hr,cT),e(Vr,pT),e(Ze,uT),e(Ze,nn),w(Yr,nn,null),e(nn,fT),e(nn,Tt),e(Tt,mT),e(Tt,Qi),e(Qi,hT),e(Tt,gT),e(Tt,wd),e(wd,_T),e(Tt,TT),e(nn,kT),w(wo,nn,null),e(nn,FT),w(yo,nn,null),e(nn,bT),w($o,nn,null),_(t,fp,F),_(t,kt,F),e(kt,Eo),e(Eo,yd),w(Kr,yd,null),e(kt,vT),e(kt,$d),e($d,wT),_(t,mp,F),_(t,Oe,F),w(Gr,Oe,null),e(Oe,yT),e(Oe,Ed),e(Ed,$T),e(Oe,ET),e(Oe,Zr),e(Zr,MT),e(Zr,Xr),e(Xr,zT),e(Zr,qT),e(Oe,xT),e(Oe,Jr),e(Jr,PT),e(Jr,Ui),e(Ui,CT),e(Jr,jT),e(Oe,LT),e(Oe,ea),e(ea,OT),e(ea,na),e(na,AT),e(ea,DT),e(Oe,NT),w(Mo,Oe,null),e(Oe,ST),e(Oe,vn),w(ta,vn,null),e(vn,IT),e(vn,Ft),e(Ft,WT),e(Ft,Ri),e(Ri,BT),e(Ft,QT),e(Ft,Md),e(Md,UT),e(Ft,RT),e(vn,VT),w(zo,vn,null),e(vn,HT),w(qo,vn,null),_(t,hp,F),_(t,bt,F),e(bt,xo),e(xo,zd),w(oa,zd,null),e(bt,YT),e(bt,qd),e(qd,KT),_(t,gp,F),_(t,Ae,F),w(sa,Ae,null),e(Ae,GT),e(Ae,xd),e(xd,ZT),e(Ae,XT),e(Ae,ra),e(ra,JT),e(ra,aa),e(aa,ek),e(ra,nk),e(Ae,tk),e(Ae,ia),e(ia,ok),e(ia,Vi),e(Vi,sk),e(ia,rk),e(Ae,ak),e(Ae,la),e(la,ik),e(la,da),e(da,lk),e(la,dk),e(Ae,ck),w(Po,Ae,null),e(Ae,pk),e(Ae,wn),w(ca,wn,null),e(wn,uk),e(wn,vt),e(vt,fk),e(vt,Hi),e(Hi,mk),e(vt,hk),e(vt,Pd),e(Pd,gk),e(vt,_k),e(wn,Tk),w(Co,wn,null),e(wn,kk),w(jo,wn,null),_(t,_p,F),_(t,wt,F),e(wt,Lo),e(Lo,Cd),w(pa,Cd,null),e(wt,Fk),e(wt,jd),e(jd,bk),_(t,Tp,F),_(t,De,F),w(ua,De,null),e(De,vk),e(De,Ld),e(Ld,wk),e(De,yk),e(De,fa),e(fa,$k),e(fa,ma),e(ma,Ek),e(fa,Mk),e(De,zk),e(De,ha),e(ha,qk),e(ha,Yi),e(Yi,xk),e(ha,Pk),e(De,Ck),e(De,ga),e(ga,jk),e(ga,_a),e(_a,Lk),e(ga,Ok),e(De,Ak),w(Oo,De,null),e(De,Dk),e(De,yn),w(Ta,yn,null),e(yn,Nk),e(yn,yt),e(yt,Sk),e(yt,Ki),e(Ki,Ik),e(yt,Wk),e(yt,Od),e(Od,Bk),e(yt,Qk),e(yn,Uk),w(Ao,yn,null),e(yn,Rk),w(Do,yn,null),_(t,kp,F),_(t,$t,F),e($t,No),e(No,Ad),w(ka,Ad,null),e($t,Vk),e($t,Dd),e(Dd,Hk),_(t,Fp,F),_(t,Ne,F),w(Fa,Ne,null),e(Ne,Yk),e(Ne,ba),e(ba,Kk),e(ba,Nd),e(Nd,Gk),e(ba,Zk),e(Ne,Xk),e(Ne,va),e(va,Jk),e(va,wa),e(wa,eF),e(va,nF),e(Ne,tF),e(Ne,ya),e(ya,oF),e(ya,Gi),e(Gi,sF),e(ya,rF),e(Ne,aF),e(Ne,$a),e($a,iF),e($a,Ea),e(Ea,lF),e($a,dF),e(Ne,cF),w(So,Ne,null),e(Ne,pF),e(Ne,tn),w(Ma,tn,null),e(tn,uF),e(tn,Et),e(Et,fF),e(Et,Zi),e(Zi,mF),e(Et,hF),e(Et,Sd),e(Sd,gF),e(Et,_F),e(tn,TF),w(Io,tn,null),e(tn,kF),w(Wo,tn,null),e(tn,FF),w(Bo,tn,null),_(t,bp,F),_(t,Mt,F),e(Mt,Qo),e(Qo,Id),w(za,Id,null),e(Mt,bF),e(Mt,Wd),e(Wd,vF),_(t,vp,F),_(t,Se,F),w(qa,Se,null),e(Se,wF),e(Se,Bd),e(Bd,yF),e(Se,$F),e(Se,xa),e(xa,EF),e(xa,Pa),e(Pa,MF),e(xa,zF),e(Se,qF),e(Se,Ca),e(Ca,xF),e(Ca,Xi),e(Xi,PF),e(Ca,CF),e(Se,jF),e(Se,ja),e(ja,LF),e(ja,La),e(La,OF),e(ja,AF),e(Se,DF),w(Uo,Se,null),e(Se,NF),e(Se,on),w(Oa,on,null),e(on,SF),e(on,zt),e(zt,IF),e(zt,Ji),e(Ji,WF),e(zt,BF),e(zt,Qd),e(Qd,QF),e(zt,UF),e(on,RF),w(Ro,on,null),e(on,VF),w(Vo,on,null),e(on,HF),w(Ho,on,null),_(t,wp,F),_(t,qt,F),e(qt,Yo),e(Yo,Ud),w(Aa,Ud,null),e(qt,YF),e(qt,Rd),e(Rd,KF),_(t,yp,F),_(t,Ie,F),w(Da,Ie,null),e(Ie,GF),e(Ie,Vd),e(Vd,ZF),e(Ie,XF),e(Ie,Na),e(Na,JF),e(Na,Sa),e(Sa,eb),e(Na,nb),e(Ie,tb),e(Ie,Ia),e(Ia,ob),e(Ia,el),e(el,sb),e(Ia,rb),e(Ie,ab),e(Ie,Wa),e(Wa,ib),e(Wa,Ba),e(Ba,lb),e(Wa,db),e(Ie,cb),w(Ko,Ie,null),e(Ie,pb),e(Ie,$n),w(Qa,$n,null),e($n,ub),e($n,xt),e(xt,fb),e(xt,nl),e(nl,mb),e(xt,hb),e(xt,Hd),e(Hd,gb),e(xt,_b),e($n,Tb),w(Go,$n,null),e($n,kb),w(Zo,$n,null),_(t,$p,F),_(t,Pt,F),e(Pt,Xo),e(Xo,Yd),w(Ua,Yd,null),e(Pt,Fb),e(Pt,Kd),e(Kd,bb),_(t,Ep,F),_(t,We,F),w(Ra,We,null),e(We,vb),e(We,Gd),e(Gd,wb),e(We,yb),e(We,Va),e(Va,$b),e(Va,Ha),e(Ha,Eb),e(Va,Mb),e(We,zb),e(We,Ya),e(Ya,qb),e(Ya,tl),e(tl,xb),e(Ya,Pb),e(We,Cb),e(We,Ka),e(Ka,jb),e(Ka,Ga),e(Ga,Lb),e(Ka,Ob),e(We,Ab),w(Jo,We,null),e(We,Db),e(We,sn),w(Za,sn,null),e(sn,Nb),e(sn,Ct),e(Ct,Sb),e(Ct,ol),e(ol,Ib),e(Ct,Wb),e(Ct,Zd),e(Zd,Bb),e(Ct,Qb),e(sn,Ub),w(es,sn,null),e(sn,Rb),w(ns,sn,null),e(sn,Vb),w(ts,sn,null),_(t,Mp,F),_(t,jt,F),e(jt,os),e(os,Xd),w(Xa,Xd,null),e(jt,Hb),e(jt,Jd),e(Jd,Yb),_(t,zp,F),_(t,Be,F),w(Ja,Be,null),e(Be,Kb),e(Be,Lt),e(Lt,Gb),e(Lt,ec),e(ec,Zb),e(Lt,Xb),e(Lt,nc),e(nc,Jb),e(Lt,ev),e(Be,nv),e(Be,ei),e(ei,tv),e(ei,ni),e(ni,ov),e(ei,sv),e(Be,rv),e(Be,ti),e(ti,av),e(ti,sl),e(sl,iv),e(ti,lv),e(Be,dv),e(Be,oi),e(oi,cv),e(oi,si),e(si,pv),e(oi,uv),e(Be,fv),w(ss,Be,null),e(Be,mv),e(Be,rn),w(ri,rn,null),e(rn,hv),e(rn,Ot),e(Ot,gv),e(Ot,rl),e(rl,_v),e(Ot,Tv),e(Ot,tc),e(tc,kv),e(Ot,Fv),e(rn,bv),w(rs,rn,null),e(rn,vv),w(as,rn,null),e(rn,wv),w(is,rn,null),qp=!0},p(t,[F]){const ai={};F&2&&(ai.$$scope={dirty:F,ctx:t}),Ut.$set(ai);const oc={};F&2&&(oc.$$scope={dirty:F,ctx:t}),Ht.$set(oc);const sc={};F&2&&(sc.$$scope={dirty:F,ctx:t}),Gt.$set(sc);const rc={};F&2&&(rc.$$scope={dirty:F,ctx:t}),Zt.$set(rc);const ii={};F&2&&(ii.$$scope={dirty:F,ctx:t}),Jt.$set(ii);const ac={};F&2&&(ac.$$scope={dirty:F,ctx:t}),eo.$set(ac);const ic={};F&2&&(ic.$$scope={dirty:F,ctx:t}),to.$set(ic);const lc={};F&2&&(lc.$$scope={dirty:F,ctx:t}),oo.$set(lc);const li={};F&2&&(li.$$scope={dirty:F,ctx:t}),ro.$set(li);const dc={};F&2&&(dc.$$scope={dirty:F,ctx:t}),ao.$set(dc);const cc={};F&2&&(cc.$$scope={dirty:F,ctx:t}),io.$set(cc);const pc={};F&2&&(pc.$$scope={dirty:F,ctx:t}),co.$set(pc);const uc={};F&2&&(uc.$$scope={dirty:F,ctx:t}),po.$set(uc);const fc={};F&2&&(fc.$$scope={dirty:F,ctx:t}),uo.$set(fc);const di={};F&2&&(di.$$scope={dirty:F,ctx:t}),fo.$set(di);const mc={};F&2&&(mc.$$scope={dirty:F,ctx:t}),mo.$set(mc);const Le={};F&2&&(Le.$$scope={dirty:F,ctx:t}),go.$set(Le);const hc={};F&2&&(hc.$$scope={dirty:F,ctx:t}),_o.$set(hc);const gc={};F&2&&(gc.$$scope={dirty:F,ctx:t}),ko.$set(gc);const _c={};F&2&&(_c.$$scope={dirty:F,ctx:t}),Fo.$set(_c);const Tc={};F&2&&(Tc.$$scope={dirty:F,ctx:t}),bo.$set(Tc);const kc={};F&2&&(kc.$$scope={dirty:F,ctx:t}),wo.$set(kc);const Fc={};F&2&&(Fc.$$scope={dirty:F,ctx:t}),yo.$set(Fc);const bc={};F&2&&(bc.$$scope={dirty:F,ctx:t}),$o.$set(bc);const vc={};F&2&&(vc.$$scope={dirty:F,ctx:t}),Mo.$set(vc);const At={};F&2&&(At.$$scope={dirty:F,ctx:t}),zo.$set(At);const wc={};F&2&&(wc.$$scope={dirty:F,ctx:t}),qo.$set(wc);const yc={};F&2&&(yc.$$scope={dirty:F,ctx:t}),Po.$set(yc);const ci={};F&2&&(ci.$$scope={dirty:F,ctx:t}),Co.$set(ci);const $c={};F&2&&($c.$$scope={dirty:F,ctx:t}),jo.$set($c);const Ec={};F&2&&(Ec.$$scope={dirty:F,ctx:t}),Oo.$set(Ec);const Mc={};F&2&&(Mc.$$scope={dirty:F,ctx:t}),Ao.$set(Mc);const Dt={};F&2&&(Dt.$$scope={dirty:F,ctx:t}),Do.$set(Dt);const On={};F&2&&(On.$$scope={dirty:F,ctx:t}),So.$set(On);const zc={};F&2&&(zc.$$scope={dirty:F,ctx:t}),Io.$set(zc);const qc={};F&2&&(qc.$$scope={dirty:F,ctx:t}),Wo.$set(qc);const xc={};F&2&&(xc.$$scope={dirty:F,ctx:t}),Bo.$set(xc);const Nt={};F&2&&(Nt.$$scope={dirty:F,ctx:t}),Uo.$set(Nt);const Pc={};F&2&&(Pc.$$scope={dirty:F,ctx:t}),Ro.$set(Pc);const Cc={};F&2&&(Cc.$$scope={dirty:F,ctx:t}),Vo.$set(Cc);const pi={};F&2&&(pi.$$scope={dirty:F,ctx:t}),Ho.$set(pi);const jc={};F&2&&(jc.$$scope={dirty:F,ctx:t}),Ko.$set(jc);const Lc={};F&2&&(Lc.$$scope={dirty:F,ctx:t}),Go.$set(Lc);const Oc={};F&2&&(Oc.$$scope={dirty:F,ctx:t}),Zo.$set(Oc);const Qe={};F&2&&(Qe.$$scope={dirty:F,ctx:t}),Jo.$set(Qe);const Ac={};F&2&&(Ac.$$scope={dirty:F,ctx:t}),es.$set(Ac);const ls={};F&2&&(ls.$$scope={dirty:F,ctx:t}),ns.$set(ls);const Dc={};F&2&&(Dc.$$scope={dirty:F,ctx:t}),ts.$set(Dc);const Nc={};F&2&&(Nc.$$scope={dirty:F,ctx:t}),ss.$set(Nc);const ui={};F&2&&(ui.$$scope={dirty:F,ctx:t}),rs.$set(ui);const Sc={};F&2&&(Sc.$$scope={dirty:F,ctx:t}),as.$set(Sc);const St={};F&2&&(St.$$scope={dirty:F,ctx:t}),is.$set(St)},i(t){qp||(y(l.$$.fragment,t),y(ne.$$.fragment,t),y(bs.$$.fragment,t),y(vs.$$.fragment,t),y(ys.$$.fragment,t),y($s.$$.fragment,t),y(Ms.$$.fragment,t),y(qs.$$.fragment,t),y(Ps.$$.fragment,t),y(Ut.$$.fragment,t),y(Cs.$$.fragment,t),y(js.$$.fragment,t),y(Ls.$$.fragment,t),y(Ds.$$.fragment,t),y(Ht.$$.fragment,t),y(Ns.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(Qs.$$.fragment,t),y(Us.$$.fragment,t),y(Gs.$$.fragment,t),y(Gt.$$.fragment,t),y(Zt.$$.fragment,t),y(Zs.$$.fragment,t),y(Xs.$$.fragment,t),y(sr.$$.fragment,t),y(Jt.$$.fragment,t),y(eo.$$.fragment,t),y(rr.$$.fragment,t),y(ar.$$.fragment,t),y(ir.$$.fragment,t),y(to.$$.fragment,t),y(oo.$$.fragment,t),y(lr.$$.fragment,t),y(dr.$$.fragment,t),y(gr.$$.fragment,t),y(ro.$$.fragment,t),y(ao.$$.fragment,t),y(io.$$.fragment,t),y(_r.$$.fragment,t),y(Tr.$$.fragment,t),y(yr.$$.fragment,t),y(co.$$.fragment,t),y(po.$$.fragment,t),y(uo.$$.fragment,t),y(fo.$$.fragment,t),y(mo.$$.fragment,t),y($r.$$.fragment,t),y(Er.$$.fragment,t),y(Cr.$$.fragment,t),y(go.$$.fragment,t),y(_o.$$.fragment,t),y(jr.$$.fragment,t),y(Lr.$$.fragment,t),y(Ir.$$.fragment,t),y(ko.$$.fragment,t),y(Fo.$$.fragment,t),y(bo.$$.fragment,t),y(Wr.$$.fragment,t),y(Br.$$.fragment,t),y(Yr.$$.fragment,t),y(wo.$$.fragment,t),y(yo.$$.fragment,t),y($o.$$.fragment,t),y(Kr.$$.fragment,t),y(Gr.$$.fragment,t),y(Mo.$$.fragment,t),y(ta.$$.fragment,t),y(zo.$$.fragment,t),y(qo.$$.fragment,t),y(oa.$$.fragment,t),y(sa.$$.fragment,t),y(Po.$$.fragment,t),y(ca.$$.fragment,t),y(Co.$$.fragment,t),y(jo.$$.fragment,t),y(pa.$$.fragment,t),y(ua.$$.fragment,t),y(Oo.$$.fragment,t),y(Ta.$$.fragment,t),y(Ao.$$.fragment,t),y(Do.$$.fragment,t),y(ka.$$.fragment,t),y(Fa.$$.fragment,t),y(So.$$.fragment,t),y(Ma.$$.fragment,t),y(Io.$$.fragment,t),y(Wo.$$.fragment,t),y(Bo.$$.fragment,t),y(za.$$.fragment,t),y(qa.$$.fragment,t),y(Uo.$$.fragment,t),y(Oa.$$.fragment,t),y(Ro.$$.fragment,t),y(Vo.$$.fragment,t),y(Ho.$$.fragment,t),y(Aa.$$.fragment,t),y(Da.$$.fragment,t),y(Ko.$$.fragment,t),y(Qa.$$.fragment,t),y(Go.$$.fragment,t),y(Zo.$$.fragment,t),y(Ua.$$.fragment,t),y(Ra.$$.fragment,t),y(Jo.$$.fragment,t),y(Za.$$.fragment,t),y(es.$$.fragment,t),y(ns.$$.fragment,t),y(ts.$$.fragment,t),y(Xa.$$.fragment,t),y(Ja.$$.fragment,t),y(ss.$$.fragment,t),y(ri.$$.fragment,t),y(rs.$$.fragment,t),y(as.$$.fragment,t),y(is.$$.fragment,t),qp=!0)},o(t){$(l.$$.fragment,t),$(ne.$$.fragment,t),$(bs.$$.fragment,t),$(vs.$$.fragment,t),$(ys.$$.fragment,t),$($s.$$.fragment,t),$(Ms.$$.fragment,t),$(qs.$$.fragment,t),$(Ps.$$.fragment,t),$(Ut.$$.fragment,t),$(Cs.$$.fragment,t),$(js.$$.fragment,t),$(Ls.$$.fragment,t),$(Ds.$$.fragment,t),$(Ht.$$.fragment,t),$(Ns.$$.fragment,t),$(Ss.$$.fragment,t),$(Ws.$$.fragment,t),$(Qs.$$.fragment,t),$(Us.$$.fragment,t),$(Gs.$$.fragment,t),$(Gt.$$.fragment,t),$(Zt.$$.fragment,t),$(Zs.$$.fragment,t),$(Xs.$$.fragment,t),$(sr.$$.fragment,t),$(Jt.$$.fragment,t),$(eo.$$.fragment,t),$(rr.$$.fragment,t),$(ar.$$.fragment,t),$(ir.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(lr.$$.fragment,t),$(dr.$$.fragment,t),$(gr.$$.fragment,t),$(ro.$$.fragment,t),$(ao.$$.fragment,t),$(io.$$.fragment,t),$(_r.$$.fragment,t),$(Tr.$$.fragment,t),$(yr.$$.fragment,t),$(co.$$.fragment,t),$(po.$$.fragment,t),$(uo.$$.fragment,t),$(fo.$$.fragment,t),$(mo.$$.fragment,t),$($r.$$.fragment,t),$(Er.$$.fragment,t),$(Cr.$$.fragment,t),$(go.$$.fragment,t),$(_o.$$.fragment,t),$(jr.$$.fragment,t),$(Lr.$$.fragment,t),$(Ir.$$.fragment,t),$(ko.$$.fragment,t),$(Fo.$$.fragment,t),$(bo.$$.fragment,t),$(Wr.$$.fragment,t),$(Br.$$.fragment,t),$(Yr.$$.fragment,t),$(wo.$$.fragment,t),$(yo.$$.fragment,t),$($o.$$.fragment,t),$(Kr.$$.fragment,t),$(Gr.$$.fragment,t),$(Mo.$$.fragment,t),$(ta.$$.fragment,t),$(zo.$$.fragment,t),$(qo.$$.fragment,t),$(oa.$$.fragment,t),$(sa.$$.fragment,t),$(Po.$$.fragment,t),$(ca.$$.fragment,t),$(Co.$$.fragment,t),$(jo.$$.fragment,t),$(pa.$$.fragment,t),$(ua.$$.fragment,t),$(Oo.$$.fragment,t),$(Ta.$$.fragment,t),$(Ao.$$.fragment,t),$(Do.$$.fragment,t),$(ka.$$.fragment,t),$(Fa.$$.fragment,t),$(So.$$.fragment,t),$(Ma.$$.fragment,t),$(Io.$$.fragment,t),$(Wo.$$.fragment,t),$(Bo.$$.fragment,t),$(za.$$.fragment,t),$(qa.$$.fragment,t),$(Uo.$$.fragment,t),$(Oa.$$.fragment,t),$(Ro.$$.fragment,t),$(Vo.$$.fragment,t),$(Ho.$$.fragment,t),$(Aa.$$.fragment,t),$(Da.$$.fragment,t),$(Ko.$$.fragment,t),$(Qa.$$.fragment,t),$(Go.$$.fragment,t),$(Zo.$$.fragment,t),$(Ua.$$.fragment,t),$(Ra.$$.fragment,t),$(Jo.$$.fragment,t),$(Za.$$.fragment,t),$(es.$$.fragment,t),$(ns.$$.fragment,t),$(ts.$$.fragment,t),$(Xa.$$.fragment,t),$(Ja.$$.fragment,t),$(ss.$$.fragment,t),$(ri.$$.fragment,t),$(rs.$$.fragment,t),$(as.$$.fragment,t),$(is.$$.fragment,t),qp=!1},d(t){n(d),t&&n(T),t&&n(c),E(l),t&&n(K),t&&n(x),E(ne),t&&n(ie),t&&n(Y),t&&n(j),t&&n(oe),t&&n(le),t&&n(se),t&&n(de),t&&n(C),t&&n(B),t&&n(ee),t&&n(Wc),t&&n(An),t&&n(Bc),t&&n(Vn),E(bs),t&&n(Qc),t&&n(jn),E(vs),t&&n(Uc),t&&n(Yn),E(ys),t&&n(Rc),t&&n(je),E($s),E(Ms),E(qs),E(Ps),E(Ut),E(Cs),t&&n(Vc),t&&n(Gn),E(js),t&&n(Hc),t&&n(Xe),E(Ls),E(Ds),E(Ht),t&&n(Yc),t&&n(Xn),E(Ns),t&&n(Kc),t&&n(Jn),E(Ss),t&&n(Gc),t&&n(et),E(Ws),t&&n(Zc),t&&n(nt),E(Qs),t&&n(Xc),t&&n(Re),E(Us),E(Gs),E(Gt),E(Zt),t&&n(Jc),t&&n(ot),E(Zs),t&&n(ep),t&&n(Ve),E(Xs),E(sr),E(Jt),E(eo),t&&n(np),t&&n(rt),E(rr),t&&n(tp),t&&n(at),E(ar),E(ir),E(to),E(oo),t&&n(op),t&&n(lt),E(lr),t&&n(sp),t&&n(He),E(dr),E(gr),E(ro),E(ao),E(io),t&&n(rp),t&&n(ct),E(_r),t&&n(ap),t&&n(Ye),E(Tr),E(yr),E(co),E(po),E(uo),E(fo),E(mo),t&&n(ip),t&&n(ut),E($r),t&&n(lp),t&&n(Ke),E(Er),E(Cr),E(go),E(_o),t&&n(dp),t&&n(mt),E(jr),t&&n(cp),t&&n(Ge),E(Lr),E(Ir),E(ko),E(Fo),E(bo),t&&n(pp),t&&n(gt),E(Wr),t&&n(up),t&&n(Ze),E(Br),E(Yr),E(wo),E(yo),E($o),t&&n(fp),t&&n(kt),E(Kr),t&&n(mp),t&&n(Oe),E(Gr),E(Mo),E(ta),E(zo),E(qo),t&&n(hp),t&&n(bt),E(oa),t&&n(gp),t&&n(Ae),E(sa),E(Po),E(ca),E(Co),E(jo),t&&n(_p),t&&n(wt),E(pa),t&&n(Tp),t&&n(De),E(ua),E(Oo),E(Ta),E(Ao),E(Do),t&&n(kp),t&&n($t),E(ka),t&&n(Fp),t&&n(Ne),E(Fa),E(So),E(Ma),E(Io),E(Wo),E(Bo),t&&n(bp),t&&n(Mt),E(za),t&&n(vp),t&&n(Se),E(qa),E(Uo),E(Oa),E(Ro),E(Vo),E(Ho),t&&n(wp),t&&n(qt),E(Aa),t&&n(yp),t&&n(Ie),E(Da),E(Ko),E(Qa),E(Go),E(Zo),t&&n($p),t&&n(Pt),E(Ua),t&&n(Ep),t&&n(We),E(Ra),E(Jo),E(Za),E(es),E(ns),E(ts),t&&n(Mp),t&&n(jt),E(Xa),t&&n(zp),t&&n(Be),E(Ja),E(ss),E(ri),E(rs),E(as),E(is)}}}const j1={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function L1(z){return j$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W1 extends q${constructor(d){super();x$(this,d,L1,C1,P$,{})}}export{W1 as default,j1 as metadata};
