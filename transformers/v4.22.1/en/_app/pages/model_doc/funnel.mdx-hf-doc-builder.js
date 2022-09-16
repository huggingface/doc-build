import{S as q2,i as P2,s as C2,e as r,k as u,w as F,t,M as x2,c as a,d as n,m as f,a as i,x as y,h as o,b as m,G as e,g as _,y as w,q as b,o as $,B as E,v as j2,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function O2(P){let d,v,c,h,T;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),v=t("Transformer sequence pair mask has the following format:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Transformer sequence pair mask has the following format:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function L2(P){let d,v,c,h,T;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),v=t("Transformer sequence pair mask has the following format:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Transformer sequence pair mask has the following format:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function D2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function A2(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function N2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function I2(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function S2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function B2(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),v=t("Examples:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Examples:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function W2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Q2(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function K2(P){let d,v;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function U2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function R2(P){let d,v,c,h,T;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),v=t("Example of single-label classification:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example of single-label classification:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function V2(P){let d,v;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function H2(P){let d,v,c,h,T;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),v=t("Example of multi-label classification:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example of multi-label classification:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Y2(P){let d,v;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function G2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Z2(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function X2(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function J2(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function e1(P){let d,v;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function n1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function t1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function o1(P){let d,v;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function s1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function r1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function a1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function i1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function l1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function d1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function c1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function p1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function u1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),v=t("Examples:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Examples:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function f1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function h1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function m1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function g1(P){let d,v;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function _1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function v1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function k1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function T1(P){let d,v;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function F1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function y1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function w1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function b1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function $1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function E1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function M1(P){let d,v;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function z1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),v=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ve=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),ke=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),be=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);v=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ve=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ke=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),be=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,v),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,p,z),e(p,C),e(C,ve),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ke),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,V),e(V,ye),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,pe),e(M,be),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function q1(P){let d,v,c,h,T;return{c(){d=r("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),T=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,v),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function P1(P){let d,v,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),v=t("Example:"),c=u(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=o(p,"Example:"),p.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,c,p),w(h,l,p),T=!0},p:Se,i(l){T||(b(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function C1(P){let d,v;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){w(d,c,h),v=!0},p:Se,i(c){v||(b(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function x1(P){let d,v,c,h,T,l,p,C,ve,fe,I,re,ee,M,ke,U,Te,he,B,Fe,ae,V,ye,me,Q,we,ge,K,pe,be,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je,g,z,We,J,Qe,Ke,q,Oe,Ue,De,Re,Ve,A,X,He,Ne,S,Le,Ae,ie,Ye,te,Ge,Xc,Jn,Ds,af,et,lf,Mi,df,cf,zi,pf,uf,As,ff,hf,mf,pt,gf,qi,_f,vf,Pi,kf,Tf,Jc,ut,so,Il,Ns,Ff,Sl,yf,ep,Je,Is,wf,Bl,bf,$f,ro,Ci,Ef,Mf,xi,zf,qf,Pf,Ss,Cf,ji,xf,jf,Of,tt,Bs,Lf,Wl,Df,Af,Ws,Oi,Nf,Ql,If,Sf,Li,Bf,Kl,Wf,Qf,ao,Qs,Kf,Ks,Uf,Ul,Rf,Vf,Hf,Dn,Us,Yf,Rl,Gf,Zf,io,Xf,ft,Jf,Vl,eh,nh,Hl,th,oh,sh,Di,Rs,np,ht,lo,Yl,Vs,rh,Gl,ah,tp,kn,Hs,ih,Ys,lh,Zl,dh,ch,ph,co,Ai,uh,fh,Ni,hh,mh,gh,Gs,_h,Ii,vh,kh,Th,An,Zs,Fh,Xl,yh,wh,po,bh,mt,$h,Jl,Eh,Mh,ed,zh,qh,op,gt,uo,nd,Xs,Ph,td,Ch,sp,_t,Js,xh,er,jh,Si,Oh,Lh,rp,vt,nr,Dh,tr,Ah,Bi,Nh,Ih,ap,kt,fo,od,or,Sh,sd,Bh,ip,un,sr,Wh,rd,Qh,Kh,rr,Uh,ar,Rh,Vh,Hh,ir,Yh,Wi,Gh,Zh,Xh,lr,Jh,dr,em,nm,tm,Nn,cr,om,Tt,sm,Qi,rm,am,ad,im,lm,dm,ho,cm,mo,lp,Ft,go,id,pr,pm,ld,um,dp,fn,ur,fm,dd,hm,mm,fr,gm,hr,_m,vm,km,mr,Tm,Ki,Fm,ym,wm,gr,bm,_r,$m,Em,Mm,In,vr,zm,yt,qm,Ui,Pm,Cm,cd,xm,jm,Om,_o,Lm,vo,cp,wt,ko,pd,kr,Dm,ud,Am,pp,bt,Tr,Nm,Sn,Fr,Im,$t,Sm,Ri,Bm,Wm,fd,Qm,Km,Um,To,Rm,Fo,up,Et,yo,hd,yr,Vm,md,Hm,fp,hn,wr,Ym,br,Gm,gd,Zm,Xm,Jm,$r,eg,Er,ng,tg,og,Mr,sg,Vi,rg,ag,ig,zr,lg,qr,dg,cg,pg,Tn,Pr,ug,Mt,fg,Hi,hg,mg,_d,gg,_g,vg,wo,kg,bo,Tg,$o,hp,zt,Eo,vd,Cr,Fg,kd,yg,mp,mn,xr,wg,Td,bg,$g,jr,Eg,Or,Mg,zg,qg,Lr,Pg,Yi,Cg,xg,jg,Dr,Og,Ar,Lg,Dg,Ag,pn,Nr,Ng,qt,Ig,Gi,Sg,Bg,Fd,Wg,Qg,Kg,Mo,Ug,zo,Rg,qo,Vg,Po,Hg,Co,gp,Pt,xo,yd,Ir,Yg,wd,Gg,_p,gn,Sr,Zg,bd,Xg,Jg,Br,e_,Wr,n_,t_,o_,Qr,s_,Zi,r_,a_,i_,Kr,l_,Ur,d_,c_,p_,Bn,Rr,u_,Ct,f_,Xi,h_,m_,$d,g_,__,v_,jo,k_,Oo,vp,xt,Lo,Ed,Vr,T_,Md,F_,kp,_n,Hr,y_,zd,w_,b_,Yr,$_,Gr,E_,M_,z_,Zr,q_,Ji,P_,C_,x_,Xr,j_,Jr,O_,L_,D_,Fn,ea,A_,jt,N_,el,I_,S_,qd,B_,W_,Q_,Do,K_,Ao,U_,No,Tp,Ot,Io,Pd,na,R_,Cd,V_,Fp,vn,ta,H_,Lt,Y_,xd,G_,Z_,jd,X_,J_,ev,oa,nv,sa,tv,ov,sv,ra,rv,nl,av,iv,lv,aa,dv,ia,cv,pv,uv,yn,la,fv,Dt,hv,tl,mv,gv,Od,_v,vv,kv,So,Tv,Bo,Fv,Wo,yp,At,Qo,Ld,da,yv,Dd,wv,wp,nn,ca,bv,Ad,$v,Ev,pa,Mv,ua,zv,qv,Pv,fa,Cv,ol,xv,jv,Ov,ha,Lv,ma,Dv,Av,Nv,Ko,Iv,Wn,ga,Sv,Nt,Bv,sl,Wv,Qv,Nd,Kv,Uv,Rv,Uo,Vv,Ro,bp,It,Vo,Id,_a,Hv,Sd,Yv,$p,tn,va,Gv,Bd,Zv,Xv,ka,Jv,Ta,ek,nk,tk,Fa,ok,rl,sk,rk,ak,ya,ik,wa,lk,dk,ck,Ho,pk,Qn,ba,uk,St,fk,al,hk,mk,Wd,gk,_k,vk,Yo,kk,Go,Ep,Bt,Zo,Qd,$a,Tk,Kd,Fk,Mp,on,Ea,yk,Ud,wk,bk,Ma,$k,za,Ek,Mk,zk,qa,qk,il,Pk,Ck,xk,Pa,jk,Ca,Ok,Lk,Dk,Xo,Ak,Kn,xa,Nk,Wt,Ik,ll,Sk,Bk,Rd,Wk,Qk,Kk,Jo,Uk,es,zp,Qt,ns,Vd,ja,Rk,Hd,Vk,qp,sn,Oa,Hk,La,Yk,Yd,Gk,Zk,Xk,Da,Jk,Aa,eT,nT,tT,Na,oT,dl,sT,rT,aT,Ia,iT,Sa,lT,dT,cT,ts,pT,wn,Ba,uT,Kt,fT,cl,hT,mT,Gd,gT,_T,vT,os,kT,ss,TT,rs,Pp,Ut,as,Zd,Wa,FT,Xd,yT,Cp,rn,Qa,wT,Jd,bT,$T,Ka,ET,Ua,MT,zT,qT,Ra,PT,pl,CT,xT,jT,Va,OT,Ha,LT,DT,AT,is,NT,bn,Ya,IT,Rt,ST,ul,BT,WT,ec,QT,KT,UT,ls,RT,ds,VT,cs,xp,Vt,ps,nc,Ga,HT,tc,YT,jp,an,Za,GT,oc,ZT,XT,Xa,JT,Ja,eF,nF,tF,ei,oF,fl,sF,rF,aF,ni,iF,ti,lF,dF,cF,us,pF,Un,oi,uF,Ht,fF,hl,hF,mF,sc,gF,_F,vF,fs,kF,hs,Op,Yt,ms,rc,si,TF,ac,FF,Lp,ln,ri,yF,ic,wF,bF,ai,$F,ii,EF,MF,zF,li,qF,ml,PF,CF,xF,di,jF,ci,OF,LF,DF,gs,AF,$n,pi,NF,Gt,IF,gl,SF,BF,lc,WF,QF,KF,_s,UF,vs,RF,ks,Dp,Zt,Ts,dc,ui,VF,cc,HF,Ap,dn,fi,YF,Xt,GF,pc,ZF,XF,uc,JF,ey,ny,hi,ty,mi,oy,sy,ry,gi,ay,_l,iy,ly,dy,_i,cy,vi,py,uy,fy,Fs,hy,En,ki,my,Jt,gy,vl,_y,vy,fc,ky,Ty,Fy,ys,yy,ws,wy,bs,Np;return l=new Xe({}),M=new Xe({}),ie=new Xe({}),Ds=new se({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Funnel transformer. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"vocab_size"},{anchor:"transformers.FunnelConfig.block_sizes",description:`<strong>block_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4]</code>) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.FunnelConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
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
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/configuration_funnel.py#L41"}}),Ns=new Xe({}),Is=new se({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/tokenization_funnel.py#L66"}}),Bs=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qs=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Us=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/tokenization_funnel.py#L116",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Ie({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[O2]},$$scope:{ctx:P}}}),Rs=new se({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert/tokenization_bert.py#L350"}}),Vs=new Xe({}),Hs=new se({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/tokenization_funnel_fast.py#L91"}}),Zs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/tokenization_funnel_fast.py#L144",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),po=new Ie({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[L2]},$$scope:{ctx:P}}}),Xs=new Xe({}),Js=new se({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA-style objective.`,name:"loss"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L834"}}),nr=new se({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L978"}}),or=new Xe({}),sr=new se({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L927"}}),cr=new se({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L943",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new Ze({props:{$$slots:{default:[D2]},$$scope:{ctx:P}}}),mo=new Ie({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[A2]},$$scope:{ctx:P}}}),pr=new Xe({}),ur=new se({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),vr=new se({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1021",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ze({props:{$$slots:{default:[N2]},$$scope:{ctx:P}}}),vo=new Ie({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[I2]},$$scope:{ctx:P}}}),kr=new Xe({}),Tr=new se({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),Fr=new se({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA-style loss. Input should be a sequence of tokens (see <code>input_ids</code>
docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1121",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Ze({props:{$$slots:{default:[S2]},$$scope:{ctx:P}}}),Fo=new Ie({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[B2]},$$scope:{ctx:P}}}),yr=new Xe({}),wr=new se({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),Pr=new se({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1211",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new Ze({props:{$$slots:{default:[W2]},$$scope:{ctx:P}}}),bo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[Q2]},$$scope:{ctx:P}}}),$o=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[K2]},$$scope:{ctx:P}}}),Cr=new Xe({}),xr=new se({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),Nr=new se({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Ze({props:{$$slots:{default:[U2]},$$scope:{ctx:P}}}),zo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[R2]},$$scope:{ctx:P}}}),qo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[V2]},$$scope:{ctx:P}}}),Po=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[H2]},$$scope:{ctx:P}}}),Co=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[Y2]},$$scope:{ctx:P}}}),Ir=new Xe({}),Sr=new se({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Rr=new se({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new Ze({props:{$$slots:{default:[G2]},$$scope:{ctx:P}}}),Oo=new Ie({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[Z2]},$$scope:{ctx:P}}}),Vr=new Xe({}),Hr=new se({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),ea=new se({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1464",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new Ze({props:{$$slots:{default:[X2]},$$scope:{ctx:P}}}),Ao=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[J2]},$$scope:{ctx:P}}}),No=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[e1]},$$scope:{ctx:P}}}),na=new Xe({}),ta=new se({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),la=new se({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_funnel.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new Ze({props:{$$slots:{default:[n1]},$$scope:{ctx:P}}}),Bo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[t1]},$$scope:{ctx:P}}}),Wo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[o1]},$$scope:{ctx:P}}}),da=new Xe({}),ca=new se({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1100"}}),Ko=new Ze({props:{$$slots:{default:[s1]},$$scope:{ctx:P}}}),ga=new se({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelBaseModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1105",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Uo=new Ze({props:{$$slots:{default:[r1]},$$scope:{ctx:P}}}),Ro=new Ie({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[a1]},$$scope:{ctx:P}}}),_a=new Xe({}),va=new se({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1149"}}),Ho=new Ze({props:{$$slots:{default:[i1]},$$scope:{ctx:P}}}),ba=new se({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new Ze({props:{$$slots:{default:[l1]},$$scope:{ctx:P}}}),Go=new Ie({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[d1]},$$scope:{ctx:P}}}),$a=new Xe({}),Ea=new se({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1201"}}),Xo=new Ze({props:{$$slots:{default:[c1]},$$scope:{ctx:P}}}),xa=new se({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1208",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jo=new Ze({props:{$$slots:{default:[p1]},$$scope:{ctx:P}}}),es=new Ie({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[u1]},$$scope:{ctx:P}}}),ja=new Xe({}),Oa=new se({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1269"}}),ts=new Ze({props:{$$slots:{default:[f1]},$$scope:{ctx:P}}}),Ba=new se({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1283",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new Ze({props:{$$slots:{default:[h1]},$$scope:{ctx:P}}}),ss=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[m1]},$$scope:{ctx:P}}}),rs=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[g1]},$$scope:{ctx:P}}}),Wa=new Xe({}),Qa=new se({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1348"}}),is=new Ze({props:{$$slots:{default:[_1]},$$scope:{ctx:P}}}),Ya=new se({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ls=new Ze({props:{$$slots:{default:[v1]},$$scope:{ctx:P}}}),ds=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[k1]},$$scope:{ctx:P}}}),cs=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[T1]},$$scope:{ctx:P}}}),Ga=new Xe({}),Za=new se({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1424"}}),us=new Ze({props:{$$slots:{default:[F1]},$$scope:{ctx:P}}}),oi=new se({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1441",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fs=new Ze({props:{$$slots:{default:[y1]},$$scope:{ctx:P}}}),hs=new Ie({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[w1]},$$scope:{ctx:P}}}),si=new Xe({}),ri=new se({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1540"}}),gs=new Ze({props:{$$slots:{default:[b1]},$$scope:{ctx:P}}}),pi=new se({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1551",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_s=new Ze({props:{$$slots:{default:[$1]},$$scope:{ctx:P}}}),vs=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[E1]},$$scope:{ctx:P}}}),ks=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[M1]},$$scope:{ctx:P}}}),ui=new Xe({}),fi=new se({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1618"}}),Fs=new Ze({props:{$$slots:{default:[z1]},$$scope:{ctx:P}}}),ki=new se({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/funnel/modeling_tf_funnel.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ys=new Ze({props:{$$slots:{default:[q1]},$$scope:{ctx:P}}}),ws=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[P1]},$$scope:{ctx:P}}}),bs=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[C1]},$$scope:{ctx:P}}}),{c(){d=r("meta"),v=u(),c=r("h1"),h=r("a"),T=r("span"),F(l.$$.fragment),p=u(),C=r("span"),ve=t("Funnel Transformer"),fe=u(),I=r("h2"),re=r("a"),ee=r("span"),F(M.$$.fragment),ke=u(),U=r("span"),Te=t("Overview"),he=u(),B=r("p"),Fe=t("The Funnel Transformer model was proposed in the paper "),ae=r("a"),V=t(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),ye=t(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),me=u(),Q=r("p"),we=t("The abstract from the paper is the following:"),ge=u(),K=r("p"),pe=r("em"),be=t(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),oe=u(),x=r("p"),O=t("Tips:"),_e=u(),W=r("ul"),ue=r("li"),$e=t(`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),H=u(),R=r("li"),Ee=t(`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),j=r("a"),Me=t("FunnelModel"),Y=t(", "),le=r("a"),ze=t("FunnelForPreTraining"),G=t(`,
`),de=r("a"),qe=t("FunnelForMaskedLM"),N=t(", "),ce=r("a"),Z=t("FunnelForTokenClassification"),Pe=t(` and
class:`),ne=r("em"),L=t("~transformers.FunnelForQuestionAnswering"),Ce=t(`. The second ones should be used for
`),D=r("a"),xe=t("FunnelBaseModel"),je=t(", "),g=r("a"),z=t("FunnelForSequenceClassification"),We=t(` and
`),J=r("a"),Qe=t("FunnelForMultipleChoice"),Ke=t("."),q=u(),Oe=r("p"),Ue=t("This model was contributed by "),De=r("a"),Re=t("sgugger"),Ve=t(". The original code can be found "),A=r("a"),X=t("here"),He=t("."),Ne=u(),S=r("h2"),Le=r("a"),Ae=r("span"),F(ie.$$.fragment),Ye=u(),te=r("span"),Ge=t("FunnelConfig"),Xc=u(),Jn=r("div"),F(Ds.$$.fragment),af=u(),et=r("p"),lf=t("This is the configuration class to store the configuration of a "),Mi=r("a"),df=t("FunnelModel"),cf=t(" or a "),zi=r("a"),pf=t("TFBertModel"),uf=t(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=r("a"),ff=t("funnel-transformer/small"),hf=t(" architecture."),mf=u(),pt=r("p"),gf=t("Configuration objects inherit from "),qi=r("a"),_f=t("PretrainedConfig"),vf=t(` and can be used to control the model outputs. Read the
documentation from `),Pi=r("a"),kf=t("PretrainedConfig"),Tf=t(" for more information."),Jc=u(),ut=r("h2"),so=r("a"),Il=r("span"),F(Ns.$$.fragment),Ff=u(),Sl=r("span"),yf=t("FunnelTokenizer"),ep=u(),Je=r("div"),F(Is.$$.fragment),wf=u(),Bl=r("p"),bf=t("Construct a Funnel Transformer tokenizer."),$f=u(),ro=r("p"),Ci=r("a"),Ef=t("FunnelTokenizer"),Mf=t(" is identical to "),xi=r("a"),zf=t("BertTokenizer"),qf=t(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Pf=u(),Ss=r("p"),Cf=t("Refer to superclass "),ji=r("a"),xf=t("BertTokenizer"),jf=t(" for usage examples and documentation concerning parameters."),Of=u(),tt=r("div"),F(Bs.$$.fragment),Lf=u(),Wl=r("p"),Df=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Af=u(),Ws=r("ul"),Oi=r("li"),Nf=t("single sequence: "),Ql=r("code"),If=t("[CLS] X [SEP]"),Sf=u(),Li=r("li"),Bf=t("pair of sequences: "),Kl=r("code"),Wf=t("[CLS] A [SEP] B [SEP]"),Qf=u(),ao=r("div"),F(Qs.$$.fragment),Kf=u(),Ks=r("p"),Uf=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=r("code"),Rf=t("prepare_for_model"),Vf=t(" method."),Hf=u(),Dn=r("div"),F(Us.$$.fragment),Yf=u(),Rl=r("p"),Gf=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Zf=u(),F(io.$$.fragment),Xf=u(),ft=r("p"),Jf=t("If "),Vl=r("code"),eh=t("token_ids_1"),nh=t(" is "),Hl=r("code"),th=t("None"),oh=t(", this method only returns the first portion of the mask (0s)."),sh=u(),Di=r("div"),F(Rs.$$.fragment),np=u(),ht=r("h2"),lo=r("a"),Yl=r("span"),F(Vs.$$.fragment),rh=u(),Gl=r("span"),ah=t("FunnelTokenizerFast"),tp=u(),kn=r("div"),F(Hs.$$.fragment),ih=u(),Ys=r("p"),lh=t("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),dh=t("tokenizers"),ch=t(" library)."),ph=u(),co=r("p"),Ai=r("a"),uh=t("FunnelTokenizerFast"),fh=t(" is identical to "),Ni=r("a"),hh=t("BertTokenizerFast"),mh=t(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gh=u(),Gs=r("p"),_h=t("Refer to superclass "),Ii=r("a"),vh=t("BertTokenizerFast"),kh=t(" for usage examples and documentation concerning parameters."),Th=u(),An=r("div"),F(Zs.$$.fragment),Fh=u(),Xl=r("p"),yh=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),wh=u(),F(po.$$.fragment),bh=u(),mt=r("p"),$h=t("If "),Jl=r("code"),Eh=t("token_ids_1"),Mh=t(" is "),ed=r("code"),zh=t("None"),qh=t(", this method only returns the first portion of the mask (0s)."),op=u(),gt=r("h2"),uo=r("a"),nd=r("span"),F(Xs.$$.fragment),Ph=u(),td=r("span"),Ch=t("Funnel specific outputs"),sp=u(),_t=r("div"),F(Js.$$.fragment),xh=u(),er=r("p"),jh=t("Output type of "),Si=r("a"),Oh=t("FunnelForPreTraining"),Lh=t("."),rp=u(),vt=r("div"),F(nr.$$.fragment),Dh=u(),tr=r("p"),Ah=t("Output type of "),Bi=r("a"),Nh=t("FunnelForPreTraining"),Ih=t("."),ap=u(),kt=r("h2"),fo=r("a"),od=r("span"),F(or.$$.fragment),Sh=u(),sd=r("span"),Bh=t("FunnelBaseModel"),ip=u(),un=r("div"),F(sr.$$.fragment),Wh=u(),rd=r("p"),Qh=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Kh=u(),rr=r("p"),Uh=t("The Funnel Transformer model was proposed in "),ar=r("a"),Rh=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Vh=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Hh=u(),ir=r("p"),Yh=t("This model inherits from "),Wi=r("a"),Gh=t("PreTrainedModel"),Zh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=u(),lr=r("p"),Jh=t("This model is also a PyTorch "),dr=r("a"),em=t("torch.nn.Module"),nm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=u(),Nn=r("div"),F(cr.$$.fragment),om=u(),Tt=r("p"),sm=t("The "),Qi=r("a"),rm=t("FunnelBaseModel"),am=t(" forward method, overrides the "),ad=r("code"),im=t("__call__"),lm=t(" special method."),dm=u(),F(ho.$$.fragment),cm=u(),F(mo.$$.fragment),lp=u(),Ft=r("h2"),go=r("a"),id=r("span"),F(pr.$$.fragment),pm=u(),ld=r("span"),um=t("FunnelModel"),dp=u(),fn=r("div"),F(ur.$$.fragment),fm=u(),dd=r("p"),hm=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),mm=u(),fr=r("p"),gm=t("The Funnel Transformer model was proposed in "),hr=r("a"),_m=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),vm=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),km=u(),mr=r("p"),Tm=t("This model inherits from "),Ki=r("a"),Fm=t("PreTrainedModel"),ym=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wm=u(),gr=r("p"),bm=t("This model is also a PyTorch "),_r=r("a"),$m=t("torch.nn.Module"),Em=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mm=u(),In=r("div"),F(vr.$$.fragment),zm=u(),yt=r("p"),qm=t("The "),Ui=r("a"),Pm=t("FunnelModel"),Cm=t(" forward method, overrides the "),cd=r("code"),xm=t("__call__"),jm=t(" special method."),Om=u(),F(_o.$$.fragment),Lm=u(),F(vo.$$.fragment),cp=u(),wt=r("h2"),ko=r("a"),pd=r("span"),F(kr.$$.fragment),Dm=u(),ud=r("span"),Am=t("FunnelModelForPreTraining"),pp=u(),bt=r("div"),F(Tr.$$.fragment),Nm=u(),Sn=r("div"),F(Fr.$$.fragment),Im=u(),$t=r("p"),Sm=t("The "),Ri=r("a"),Bm=t("FunnelForPreTraining"),Wm=t(" forward method, overrides the "),fd=r("code"),Qm=t("__call__"),Km=t(" special method."),Um=u(),F(To.$$.fragment),Rm=u(),F(Fo.$$.fragment),up=u(),Et=r("h2"),yo=r("a"),hd=r("span"),F(yr.$$.fragment),Vm=u(),md=r("span"),Hm=t("FunnelForMaskedLM"),fp=u(),hn=r("div"),F(wr.$$.fragment),Ym=u(),br=r("p"),Gm=t("Funnel Transformer Model with a "),gd=r("code"),Zm=t("language modeling"),Xm=t(" head on top."),Jm=u(),$r=r("p"),eg=t("The Funnel Transformer model was proposed in "),Er=r("a"),ng=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),og=u(),Mr=r("p"),sg=t("This model inherits from "),Vi=r("a"),rg=t("PreTrainedModel"),ag=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=u(),zr=r("p"),lg=t("This model is also a PyTorch "),qr=r("a"),dg=t("torch.nn.Module"),cg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=u(),Tn=r("div"),F(Pr.$$.fragment),ug=u(),Mt=r("p"),fg=t("The "),Hi=r("a"),hg=t("FunnelForMaskedLM"),mg=t(" forward method, overrides the "),_d=r("code"),gg=t("__call__"),_g=t(" special method."),vg=u(),F(wo.$$.fragment),kg=u(),F(bo.$$.fragment),Tg=u(),F($o.$$.fragment),hp=u(),zt=r("h2"),Eo=r("a"),vd=r("span"),F(Cr.$$.fragment),Fg=u(),kd=r("span"),yg=t("FunnelForSequenceClassification"),mp=u(),mn=r("div"),F(xr.$$.fragment),wg=u(),Td=r("p"),bg=t(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),$g=u(),jr=r("p"),Eg=t("The Funnel Transformer model was proposed in "),Or=r("a"),Mg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qg=u(),Lr=r("p"),Pg=t("This model inherits from "),Yi=r("a"),Cg=t("PreTrainedModel"),xg=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg=u(),Dr=r("p"),Og=t("This model is also a PyTorch "),Ar=r("a"),Lg=t("torch.nn.Module"),Dg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=u(),pn=r("div"),F(Nr.$$.fragment),Ng=u(),qt=r("p"),Ig=t("The "),Gi=r("a"),Sg=t("FunnelForSequenceClassification"),Bg=t(" forward method, overrides the "),Fd=r("code"),Wg=t("__call__"),Qg=t(" special method."),Kg=u(),F(Mo.$$.fragment),Ug=u(),F(zo.$$.fragment),Rg=u(),F(qo.$$.fragment),Vg=u(),F(Po.$$.fragment),Hg=u(),F(Co.$$.fragment),gp=u(),Pt=r("h2"),xo=r("a"),yd=r("span"),F(Ir.$$.fragment),Yg=u(),wd=r("span"),Gg=t("FunnelForMultipleChoice"),_p=u(),gn=r("div"),F(Sr.$$.fragment),Zg=u(),bd=r("p"),Xg=t(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Jg=u(),Br=r("p"),e_=t("The Funnel Transformer model was proposed in "),Wr=r("a"),n_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),t_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),o_=u(),Qr=r("p"),s_=t("This model inherits from "),Zi=r("a"),r_=t("PreTrainedModel"),a_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=u(),Kr=r("p"),l_=t("This model is also a PyTorch "),Ur=r("a"),d_=t("torch.nn.Module"),c_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=u(),Bn=r("div"),F(Rr.$$.fragment),u_=u(),Ct=r("p"),f_=t("The "),Xi=r("a"),h_=t("FunnelForMultipleChoice"),m_=t(" forward method, overrides the "),$d=r("code"),g_=t("__call__"),__=t(" special method."),v_=u(),F(jo.$$.fragment),k_=u(),F(Oo.$$.fragment),vp=u(),xt=r("h2"),Lo=r("a"),Ed=r("span"),F(Vr.$$.fragment),T_=u(),Md=r("span"),F_=t("FunnelForTokenClassification"),kp=u(),_n=r("div"),F(Hr.$$.fragment),y_=u(),zd=r("p"),w_=t(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),b_=u(),Yr=r("p"),$_=t("The Funnel Transformer model was proposed in "),Gr=r("a"),E_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),M_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),z_=u(),Zr=r("p"),q_=t("This model inherits from "),Ji=r("a"),P_=t("PreTrainedModel"),C_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x_=u(),Xr=r("p"),j_=t("This model is also a PyTorch "),Jr=r("a"),O_=t("torch.nn.Module"),L_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D_=u(),Fn=r("div"),F(ea.$$.fragment),A_=u(),jt=r("p"),N_=t("The "),el=r("a"),I_=t("FunnelForTokenClassification"),S_=t(" forward method, overrides the "),qd=r("code"),B_=t("__call__"),W_=t(" special method."),Q_=u(),F(Do.$$.fragment),K_=u(),F(Ao.$$.fragment),U_=u(),F(No.$$.fragment),Tp=u(),Ot=r("h2"),Io=r("a"),Pd=r("span"),F(na.$$.fragment),R_=u(),Cd=r("span"),V_=t("FunnelForQuestionAnswering"),Fp=u(),vn=r("div"),F(ta.$$.fragment),H_=u(),Lt=r("p"),Y_=t(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),xd=r("code"),G_=t("span start logits"),Z_=t(" and "),jd=r("code"),X_=t("span end logits"),J_=t(")."),ev=u(),oa=r("p"),nv=t("The Funnel Transformer model was proposed in "),sa=r("a"),tv=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ov=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sv=u(),ra=r("p"),rv=t("This model inherits from "),nl=r("a"),av=t("PreTrainedModel"),iv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv=u(),aa=r("p"),dv=t("This model is also a PyTorch "),ia=r("a"),cv=t("torch.nn.Module"),pv=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uv=u(),yn=r("div"),F(la.$$.fragment),fv=u(),Dt=r("p"),hv=t("The "),tl=r("a"),mv=t("FunnelForQuestionAnswering"),gv=t(" forward method, overrides the "),Od=r("code"),_v=t("__call__"),vv=t(" special method."),kv=u(),F(So.$$.fragment),Tv=u(),F(Bo.$$.fragment),Fv=u(),F(Wo.$$.fragment),yp=u(),At=r("h2"),Qo=r("a"),Ld=r("span"),F(da.$$.fragment),yv=u(),Dd=r("span"),wv=t("TFFunnelBaseModel"),wp=u(),nn=r("div"),F(ca.$$.fragment),bv=u(),Ad=r("p"),$v=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Ev=u(),pa=r("p"),Mv=t("The Funnel Transformer model was proposed in "),ua=r("a"),zv=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qv=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pv=u(),fa=r("p"),Cv=t("This model inherits from "),ol=r("a"),xv=t("TFPreTrainedModel"),jv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov=u(),ha=r("p"),Lv=t("This model is also a "),ma=r("a"),Dv=t("tf.keras.Model"),Av=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nv=u(),F(Ko.$$.fragment),Iv=u(),Wn=r("div"),F(ga.$$.fragment),Sv=u(),Nt=r("p"),Bv=t("The "),sl=r("a"),Wv=t("TFFunnelBaseModel"),Qv=t(" forward method, overrides the "),Nd=r("code"),Kv=t("__call__"),Uv=t(" special method."),Rv=u(),F(Uo.$$.fragment),Vv=u(),F(Ro.$$.fragment),bp=u(),It=r("h2"),Vo=r("a"),Id=r("span"),F(_a.$$.fragment),Hv=u(),Sd=r("span"),Yv=t("TFFunnelModel"),$p=u(),tn=r("div"),F(va.$$.fragment),Gv=u(),Bd=r("p"),Zv=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Xv=u(),ka=r("p"),Jv=t("The Funnel Transformer model was proposed in "),Ta=r("a"),ek=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tk=u(),Fa=r("p"),ok=t("This model inherits from "),rl=r("a"),sk=t("TFPreTrainedModel"),rk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=u(),ya=r("p"),ik=t("This model is also a "),wa=r("a"),lk=t("tf.keras.Model"),dk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ck=u(),F(Ho.$$.fragment),pk=u(),Qn=r("div"),F(ba.$$.fragment),uk=u(),St=r("p"),fk=t("The "),al=r("a"),hk=t("TFFunnelModel"),mk=t(" forward method, overrides the "),Wd=r("code"),gk=t("__call__"),_k=t(" special method."),vk=u(),F(Yo.$$.fragment),kk=u(),F(Go.$$.fragment),Ep=u(),Bt=r("h2"),Zo=r("a"),Qd=r("span"),F($a.$$.fragment),Tk=u(),Kd=r("span"),Fk=t("TFFunnelModelForPreTraining"),Mp=u(),on=r("div"),F(Ea.$$.fragment),yk=u(),Ud=r("p"),wk=t("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),bk=u(),Ma=r("p"),$k=t("The Funnel Transformer model was proposed in "),za=r("a"),Ek=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Mk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zk=u(),qa=r("p"),qk=t("This model inherits from "),il=r("a"),Pk=t("TFPreTrainedModel"),Ck=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xk=u(),Pa=r("p"),jk=t("This model is also a "),Ca=r("a"),Ok=t("tf.keras.Model"),Lk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk=u(),F(Xo.$$.fragment),Ak=u(),Kn=r("div"),F(xa.$$.fragment),Nk=u(),Wt=r("p"),Ik=t("The "),ll=r("a"),Sk=t("TFFunnelForPreTraining"),Bk=t(" forward method, overrides the "),Rd=r("code"),Wk=t("__call__"),Qk=t(" special method."),Kk=u(),F(Jo.$$.fragment),Uk=u(),F(es.$$.fragment),zp=u(),Qt=r("h2"),ns=r("a"),Vd=r("span"),F(ja.$$.fragment),Rk=u(),Hd=r("span"),Vk=t("TFFunnelForMaskedLM"),qp=u(),sn=r("div"),F(Oa.$$.fragment),Hk=u(),La=r("p"),Yk=t("Funnel Model with a "),Yd=r("code"),Gk=t("language modeling"),Zk=t(" head on top."),Xk=u(),Da=r("p"),Jk=t("The Funnel Transformer model was proposed in "),Aa=r("a"),eT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tT=u(),Na=r("p"),oT=t("This model inherits from "),dl=r("a"),sT=t("TFPreTrainedModel"),rT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=u(),Ia=r("p"),iT=t("This model is also a "),Sa=r("a"),lT=t("tf.keras.Model"),dT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cT=u(),F(ts.$$.fragment),pT=u(),wn=r("div"),F(Ba.$$.fragment),uT=u(),Kt=r("p"),fT=t("The "),cl=r("a"),hT=t("TFFunnelForMaskedLM"),mT=t(" forward method, overrides the "),Gd=r("code"),gT=t("__call__"),_T=t(" special method."),vT=u(),F(os.$$.fragment),kT=u(),F(ss.$$.fragment),TT=u(),F(rs.$$.fragment),Pp=u(),Ut=r("h2"),as=r("a"),Zd=r("span"),F(Wa.$$.fragment),FT=u(),Xd=r("span"),yT=t("TFFunnelForSequenceClassification"),Cp=u(),rn=r("div"),F(Qa.$$.fragment),wT=u(),Jd=r("p"),bT=t(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$T=u(),Ka=r("p"),ET=t("The Funnel Transformer model was proposed in "),Ua=r("a"),MT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qT=u(),Ra=r("p"),PT=t("This model inherits from "),pl=r("a"),CT=t("TFPreTrainedModel"),xT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jT=u(),Va=r("p"),OT=t("This model is also a "),Ha=r("a"),LT=t("tf.keras.Model"),DT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AT=u(),F(is.$$.fragment),NT=u(),bn=r("div"),F(Ya.$$.fragment),IT=u(),Rt=r("p"),ST=t("The "),ul=r("a"),BT=t("TFFunnelForSequenceClassification"),WT=t(" forward method, overrides the "),ec=r("code"),QT=t("__call__"),KT=t(" special method."),UT=u(),F(ls.$$.fragment),RT=u(),F(ds.$$.fragment),VT=u(),F(cs.$$.fragment),xp=u(),Vt=r("h2"),ps=r("a"),nc=r("span"),F(Ga.$$.fragment),HT=u(),tc=r("span"),YT=t("TFFunnelForMultipleChoice"),jp=u(),an=r("div"),F(Za.$$.fragment),GT=u(),oc=r("p"),ZT=t(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),XT=u(),Xa=r("p"),JT=t("The Funnel Transformer model was proposed in "),Ja=r("a"),eF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tF=u(),ei=r("p"),oF=t("This model inherits from "),fl=r("a"),sF=t("TFPreTrainedModel"),rF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aF=u(),ni=r("p"),iF=t("This model is also a "),ti=r("a"),lF=t("tf.keras.Model"),dF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cF=u(),F(us.$$.fragment),pF=u(),Un=r("div"),F(oi.$$.fragment),uF=u(),Ht=r("p"),fF=t("The "),hl=r("a"),hF=t("TFFunnelForMultipleChoice"),mF=t(" forward method, overrides the "),sc=r("code"),gF=t("__call__"),_F=t(" special method."),vF=u(),F(fs.$$.fragment),kF=u(),F(hs.$$.fragment),Op=u(),Yt=r("h2"),ms=r("a"),rc=r("span"),F(si.$$.fragment),TF=u(),ac=r("span"),FF=t("TFFunnelForTokenClassification"),Lp=u(),ln=r("div"),F(ri.$$.fragment),yF=u(),ic=r("p"),wF=t(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),bF=u(),ai=r("p"),$F=t("The Funnel Transformer model was proposed in "),ii=r("a"),EF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),MF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zF=u(),li=r("p"),qF=t("This model inherits from "),ml=r("a"),PF=t("TFPreTrainedModel"),CF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xF=u(),di=r("p"),jF=t("This model is also a "),ci=r("a"),OF=t("tf.keras.Model"),LF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=u(),F(gs.$$.fragment),AF=u(),$n=r("div"),F(pi.$$.fragment),NF=u(),Gt=r("p"),IF=t("The "),gl=r("a"),SF=t("TFFunnelForTokenClassification"),BF=t(" forward method, overrides the "),lc=r("code"),WF=t("__call__"),QF=t(" special method."),KF=u(),F(_s.$$.fragment),UF=u(),F(vs.$$.fragment),RF=u(),F(ks.$$.fragment),Dp=u(),Zt=r("h2"),Ts=r("a"),dc=r("span"),F(ui.$$.fragment),VF=u(),cc=r("span"),HF=t("TFFunnelForQuestionAnswering"),Ap=u(),dn=r("div"),F(fi.$$.fragment),YF=u(),Xt=r("p"),GF=t(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pc=r("code"),ZF=t("span start logits"),XF=t(" and "),uc=r("code"),JF=t("span end logits"),ey=t(")."),ny=u(),hi=r("p"),ty=t("The Funnel Transformer model was proposed in "),mi=r("a"),oy=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sy=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ry=u(),gi=r("p"),ay=t("This model inherits from "),_l=r("a"),iy=t("TFPreTrainedModel"),ly=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dy=u(),_i=r("p"),cy=t("This model is also a "),vi=r("a"),py=t("tf.keras.Model"),uy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fy=u(),F(Fs.$$.fragment),hy=u(),En=r("div"),F(ki.$$.fragment),my=u(),Jt=r("p"),gy=t("The "),vl=r("a"),_y=t("TFFunnelForQuestionAnswering"),vy=t(" forward method, overrides the "),fc=r("code"),ky=t("__call__"),Ty=t(" special method."),Fy=u(),F(ys.$$.fragment),yy=u(),F(ws.$$.fragment),wy=u(),F(bs.$$.fragment),this.h()},l(s){const k=x2('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(n),v=f(s),c=a(s,"H1",{class:!0});var Ti=i(c);h=a(Ti,"A",{id:!0,class:!0,href:!0});var hc=i(h);T=a(hc,"SPAN",{});var mc=i(T);y(l.$$.fragment,mc),mc.forEach(n),hc.forEach(n),p=f(Ti),C=a(Ti,"SPAN",{});var gc=i(C);ve=o(gc,"Funnel Transformer"),gc.forEach(n),Ti.forEach(n),fe=f(s),I=a(s,"H2",{class:!0});var Fi=i(I);re=a(Fi,"A",{id:!0,class:!0,href:!0});var _c=i(re);ee=a(_c,"SPAN",{});var vc=i(ee);y(M.$$.fragment,vc),vc.forEach(n),_c.forEach(n),ke=f(Fi),U=a(Fi,"SPAN",{});var kc=i(U);Te=o(kc,"Overview"),kc.forEach(n),Fi.forEach(n),he=f(s),B=a(s,"P",{});var yi=i(B);Fe=o(yi,"The Funnel Transformer model was proposed in the paper "),ae=a(yi,"A",{href:!0,rel:!0});var Tc=i(ae);V=o(Tc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),Tc.forEach(n),ye=o(yi,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),yi.forEach(n),me=f(s),Q=a(s,"P",{});var Fc=i(Q);we=o(Fc,"The abstract from the paper is the following:"),Fc.forEach(n),ge=f(s),K=a(s,"P",{});var yc=i(K);pe=a(yc,"EM",{});var wc=i(pe);be=o(wc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),wc.forEach(n),yc.forEach(n),oe=f(s),x=a(s,"P",{});var bc=i(x);O=o(bc,"Tips:"),bc.forEach(n),_e=f(s),W=a(s,"UL",{});var wi=i(W);ue=a(wi,"LI",{});var $c=i(ue);$e=o($c,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),$c.forEach(n),H=f(wi),R=a(wi,"LI",{});var en=i(R);Ee=o(en,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),j=a(en,"A",{href:!0});var Ec=i(j);Me=o(Ec,"FunnelModel"),Ec.forEach(n),Y=o(en,", "),le=a(en,"A",{href:!0});var Mc=i(le);ze=o(Mc,"FunnelForPreTraining"),Mc.forEach(n),G=o(en,`,
`),de=a(en,"A",{href:!0});var zc=i(de);qe=o(zc,"FunnelForMaskedLM"),zc.forEach(n),N=o(en,", "),ce=a(en,"A",{href:!0});var qc=i(ce);Z=o(qc,"FunnelForTokenClassification"),qc.forEach(n),Pe=o(en,` and
class:`),ne=a(en,"EM",{});var Pc=i(ne);L=o(Pc,"~transformers.FunnelForQuestionAnswering"),Pc.forEach(n),Ce=o(en,`. The second ones should be used for
`),D=a(en,"A",{href:!0});var Cc=i(D);xe=o(Cc,"FunnelBaseModel"),Cc.forEach(n),je=o(en,", "),g=a(en,"A",{href:!0});var xc=i(g);z=o(xc,"FunnelForSequenceClassification"),xc.forEach(n),We=o(en,` and
`),J=a(en,"A",{href:!0});var jc=i(J);Qe=o(jc,"FunnelForMultipleChoice"),jc.forEach(n),Ke=o(en,"."),en.forEach(n),wi.forEach(n),q=f(s),Oe=a(s,"P",{});var eo=i(Oe);Ue=o(eo,"This model was contributed by "),De=a(eo,"A",{href:!0,rel:!0});var Oc=i(De);Re=o(Oc,"sgugger"),Oc.forEach(n),Ve=o(eo,". The original code can be found "),A=a(eo,"A",{href:!0,rel:!0});var Lc=i(A);X=o(Lc,"here"),Lc.forEach(n),He=o(eo,"."),eo.forEach(n),Ne=f(s),S=a(s,"H2",{class:!0});var bi=i(S);Le=a(bi,"A",{id:!0,class:!0,href:!0});var Dc=i(Le);Ae=a(Dc,"SPAN",{});var Ac=i(Ae);y(ie.$$.fragment,Ac),Ac.forEach(n),Dc.forEach(n),Ye=f(bi),te=a(bi,"SPAN",{});var Nc=i(te);Ge=o(Nc,"FunnelConfig"),Nc.forEach(n),bi.forEach(n),Xc=f(s),Jn=a(s,"DIV",{class:!0});var no=i(Jn);y(Ds.$$.fragment,no),af=f(no),et=a(no,"P",{});var nt=i(et);lf=o(nt,"This is the configuration class to store the configuration of a "),Mi=a(nt,"A",{href:!0});var Ic=i(Mi);df=o(Ic,"FunnelModel"),Ic.forEach(n),cf=o(nt," or a "),zi=a(nt,"A",{href:!0});var Sc=i(zi);pf=o(Sc,"TFBertModel"),Sc.forEach(n),uf=o(nt,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=a(nt,"A",{href:!0,rel:!0});var Bc=i(As);ff=o(Bc,"funnel-transformer/small"),Bc.forEach(n),hf=o(nt," architecture."),nt.forEach(n),mf=f(no),pt=a(no,"P",{});var to=i(pt);gf=o(to,"Configuration objects inherit from "),qi=a(to,"A",{href:!0});var Wc=i(qi);_f=o(Wc,"PretrainedConfig"),Wc.forEach(n),vf=o(to,` and can be used to control the model outputs. Read the
documentation from `),Pi=a(to,"A",{href:!0});var Qc=i(Pi);kf=o(Qc,"PretrainedConfig"),Qc.forEach(n),Tf=o(to," for more information."),to.forEach(n),no.forEach(n),Jc=f(s),ut=a(s,"H2",{class:!0});var $i=i(ut);so=a($i,"A",{id:!0,class:!0,href:!0});var Kc=i(so);Il=a(Kc,"SPAN",{});var Uc=i(Il);y(Ns.$$.fragment,Uc),Uc.forEach(n),Kc.forEach(n),Ff=f($i),Sl=a($i,"SPAN",{});var Rc=i(Sl);yf=o(Rc,"FunnelTokenizer"),Rc.forEach(n),$i.forEach(n),ep=f(s),Je=a(s,"DIV",{class:!0});var cn=i(Je);y(Is.$$.fragment,cn),wf=f(cn),Bl=a(cn,"P",{});var Vc=i(Bl);bf=o(Vc,"Construct a Funnel Transformer tokenizer."),Vc.forEach(n),$f=f(cn),ro=a(cn,"P",{});var $s=i(ro);Ci=a($s,"A",{href:!0});var Hc=i(Ci);Ef=o(Hc,"FunnelTokenizer"),Hc.forEach(n),Mf=o($s," is identical to "),xi=a($s,"A",{href:!0});var Yc=i(xi);zf=o(Yc,"BertTokenizer"),Yc.forEach(n),qf=o($s,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),$s.forEach(n),Pf=f(cn),Ss=a(cn,"P",{});var Ei=i(Ss);Cf=o(Ei,"Refer to superclass "),ji=a(Ei,"A",{href:!0});var Gc=i(ji);xf=o(Gc,"BertTokenizer"),Gc.forEach(n),jf=o(Ei," for usage examples and documentation concerning parameters."),Ei.forEach(n),Of=f(cn),tt=a(cn,"DIV",{class:!0});var oo=i(tt);y(Bs.$$.fragment,oo),Lf=f(oo),Wl=a(oo,"P",{});var Ey=i(Wl);Df=o(Ey,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ey.forEach(n),Af=f(oo),Ws=a(oo,"UL",{});var Ip=i(Ws);Oi=a(Ip,"LI",{});var by=i(Oi);Nf=o(by,"single sequence: "),Ql=a(by,"CODE",{});var My=i(Ql);If=o(My,"[CLS] X [SEP]"),My.forEach(n),by.forEach(n),Sf=f(Ip),Li=a(Ip,"LI",{});var $y=i(Li);Bf=o($y,"pair of sequences: "),Kl=a($y,"CODE",{});var zy=i(Kl);Wf=o(zy,"[CLS] A [SEP] B [SEP]"),zy.forEach(n),$y.forEach(n),Ip.forEach(n),oo.forEach(n),Qf=f(cn),ao=a(cn,"DIV",{class:!0});var Sp=i(ao);y(Qs.$$.fragment,Sp),Kf=f(Sp),Ks=a(Sp,"P",{});var Bp=i(Ks);Uf=o(Bp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=a(Bp,"CODE",{});var qy=i(Ul);Rf=o(qy,"prepare_for_model"),qy.forEach(n),Vf=o(Bp," method."),Bp.forEach(n),Sp.forEach(n),Hf=f(cn),Dn=a(cn,"DIV",{class:!0});var Es=i(Dn);y(Us.$$.fragment,Es),Yf=f(Es),Rl=a(Es,"P",{});var Py=i(Rl);Gf=o(Py,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Py.forEach(n),Zf=f(Es),y(io.$$.fragment,Es),Xf=f(Es),ft=a(Es,"P",{});var kl=i(ft);Jf=o(kl,"If "),Vl=a(kl,"CODE",{});var Cy=i(Vl);eh=o(Cy,"token_ids_1"),Cy.forEach(n),nh=o(kl," is "),Hl=a(kl,"CODE",{});var xy=i(Hl);th=o(xy,"None"),xy.forEach(n),oh=o(kl,", this method only returns the first portion of the mask (0s)."),kl.forEach(n),Es.forEach(n),sh=f(cn),Di=a(cn,"DIV",{class:!0});var jy=i(Di);y(Rs.$$.fragment,jy),jy.forEach(n),cn.forEach(n),np=f(s),ht=a(s,"H2",{class:!0});var Wp=i(ht);lo=a(Wp,"A",{id:!0,class:!0,href:!0});var Oy=i(lo);Yl=a(Oy,"SPAN",{});var Ly=i(Yl);y(Vs.$$.fragment,Ly),Ly.forEach(n),Oy.forEach(n),rh=f(Wp),Gl=a(Wp,"SPAN",{});var Dy=i(Gl);ah=o(Dy,"FunnelTokenizerFast"),Dy.forEach(n),Wp.forEach(n),tp=f(s),kn=a(s,"DIV",{class:!0});var ot=i(kn);y(Hs.$$.fragment,ot),ih=f(ot),Ys=a(ot,"P",{});var Qp=i(Ys);lh=o(Qp,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=a(Qp,"EM",{});var Ay=i(Zl);dh=o(Ay,"tokenizers"),Ay.forEach(n),ch=o(Qp," library)."),Qp.forEach(n),ph=f(ot),co=a(ot,"P",{});var Zc=i(co);Ai=a(Zc,"A",{href:!0});var Ny=i(Ai);uh=o(Ny,"FunnelTokenizerFast"),Ny.forEach(n),fh=o(Zc," is identical to "),Ni=a(Zc,"A",{href:!0});var Iy=i(Ni);hh=o(Iy,"BertTokenizerFast"),Iy.forEach(n),mh=o(Zc,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Zc.forEach(n),gh=f(ot),Gs=a(ot,"P",{});var Kp=i(Gs);_h=o(Kp,"Refer to superclass "),Ii=a(Kp,"A",{href:!0});var Sy=i(Ii);vh=o(Sy,"BertTokenizerFast"),Sy.forEach(n),kh=o(Kp," for usage examples and documentation concerning parameters."),Kp.forEach(n),Th=f(ot),An=a(ot,"DIV",{class:!0});var Ms=i(An);y(Zs.$$.fragment,Ms),Fh=f(Ms),Xl=a(Ms,"P",{});var By=i(Xl);yh=o(By,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),By.forEach(n),wh=f(Ms),y(po.$$.fragment,Ms),bh=f(Ms),mt=a(Ms,"P",{});var Tl=i(mt);$h=o(Tl,"If "),Jl=a(Tl,"CODE",{});var Wy=i(Jl);Eh=o(Wy,"token_ids_1"),Wy.forEach(n),Mh=o(Tl," is "),ed=a(Tl,"CODE",{});var Qy=i(ed);zh=o(Qy,"None"),Qy.forEach(n),qh=o(Tl,", this method only returns the first portion of the mask (0s)."),Tl.forEach(n),Ms.forEach(n),ot.forEach(n),op=f(s),gt=a(s,"H2",{class:!0});var Up=i(gt);uo=a(Up,"A",{id:!0,class:!0,href:!0});var Ky=i(uo);nd=a(Ky,"SPAN",{});var Uy=i(nd);y(Xs.$$.fragment,Uy),Uy.forEach(n),Ky.forEach(n),Ph=f(Up),td=a(Up,"SPAN",{});var Ry=i(td);Ch=o(Ry,"Funnel specific outputs"),Ry.forEach(n),Up.forEach(n),sp=f(s),_t=a(s,"DIV",{class:!0});var Rp=i(_t);y(Js.$$.fragment,Rp),xh=f(Rp),er=a(Rp,"P",{});var Vp=i(er);jh=o(Vp,"Output type of "),Si=a(Vp,"A",{href:!0});var Vy=i(Si);Oh=o(Vy,"FunnelForPreTraining"),Vy.forEach(n),Lh=o(Vp,"."),Vp.forEach(n),Rp.forEach(n),rp=f(s),vt=a(s,"DIV",{class:!0});var Hp=i(vt);y(nr.$$.fragment,Hp),Dh=f(Hp),tr=a(Hp,"P",{});var Yp=i(tr);Ah=o(Yp,"Output type of "),Bi=a(Yp,"A",{href:!0});var Hy=i(Bi);Nh=o(Hy,"FunnelForPreTraining"),Hy.forEach(n),Ih=o(Yp,"."),Yp.forEach(n),Hp.forEach(n),ap=f(s),kt=a(s,"H2",{class:!0});var Gp=i(kt);fo=a(Gp,"A",{id:!0,class:!0,href:!0});var Yy=i(fo);od=a(Yy,"SPAN",{});var Gy=i(od);y(or.$$.fragment,Gy),Gy.forEach(n),Yy.forEach(n),Sh=f(Gp),sd=a(Gp,"SPAN",{});var Zy=i(sd);Bh=o(Zy,"FunnelBaseModel"),Zy.forEach(n),Gp.forEach(n),ip=f(s),un=a(s,"DIV",{class:!0});var Rn=i(un);y(sr.$$.fragment,Rn),Wh=f(Rn),rd=a(Rn,"P",{});var Xy=i(rd);Qh=o(Xy,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Xy.forEach(n),Kh=f(Rn),rr=a(Rn,"P",{});var Zp=i(rr);Uh=o(Zp,"The Funnel Transformer model was proposed in "),ar=a(Zp,"A",{href:!0,rel:!0});var Jy=i(ar);Rh=o(Jy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Jy.forEach(n),Vh=o(Zp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Zp.forEach(n),Hh=f(Rn),ir=a(Rn,"P",{});var Xp=i(ir);Yh=o(Xp,"This model inherits from "),Wi=a(Xp,"A",{href:!0});var ew=i(Wi);Gh=o(ew,"PreTrainedModel"),ew.forEach(n),Zh=o(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(n),Xh=f(Rn),lr=a(Rn,"P",{});var Jp=i(lr);Jh=o(Jp,"This model is also a PyTorch "),dr=a(Jp,"A",{href:!0,rel:!0});var nw=i(dr);em=o(nw,"torch.nn.Module"),nw.forEach(n),nm=o(Jp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jp.forEach(n),tm=f(Rn),Nn=a(Rn,"DIV",{class:!0});var zs=i(Nn);y(cr.$$.fragment,zs),om=f(zs),Tt=a(zs,"P",{});var Fl=i(Tt);sm=o(Fl,"The "),Qi=a(Fl,"A",{href:!0});var tw=i(Qi);rm=o(tw,"FunnelBaseModel"),tw.forEach(n),am=o(Fl," forward method, overrides the "),ad=a(Fl,"CODE",{});var ow=i(ad);im=o(ow,"__call__"),ow.forEach(n),lm=o(Fl," special method."),Fl.forEach(n),dm=f(zs),y(ho.$$.fragment,zs),cm=f(zs),y(mo.$$.fragment,zs),zs.forEach(n),Rn.forEach(n),lp=f(s),Ft=a(s,"H2",{class:!0});var eu=i(Ft);go=a(eu,"A",{id:!0,class:!0,href:!0});var sw=i(go);id=a(sw,"SPAN",{});var rw=i(id);y(pr.$$.fragment,rw),rw.forEach(n),sw.forEach(n),pm=f(eu),ld=a(eu,"SPAN",{});var aw=i(ld);um=o(aw,"FunnelModel"),aw.forEach(n),eu.forEach(n),dp=f(s),fn=a(s,"DIV",{class:!0});var Vn=i(fn);y(ur.$$.fragment,Vn),fm=f(Vn),dd=a(Vn,"P",{});var iw=i(dd);hm=o(iw,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),iw.forEach(n),mm=f(Vn),fr=a(Vn,"P",{});var nu=i(fr);gm=o(nu,"The Funnel Transformer model was proposed in "),hr=a(nu,"A",{href:!0,rel:!0});var lw=i(hr);_m=o(lw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),lw.forEach(n),vm=o(nu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),nu.forEach(n),km=f(Vn),mr=a(Vn,"P",{});var tu=i(mr);Tm=o(tu,"This model inherits from "),Ki=a(tu,"A",{href:!0});var dw=i(Ki);Fm=o(dw,"PreTrainedModel"),dw.forEach(n),ym=o(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu.forEach(n),wm=f(Vn),gr=a(Vn,"P",{});var ou=i(gr);bm=o(ou,"This model is also a PyTorch "),_r=a(ou,"A",{href:!0,rel:!0});var cw=i(_r);$m=o(cw,"torch.nn.Module"),cw.forEach(n),Em=o(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(n),Mm=f(Vn),In=a(Vn,"DIV",{class:!0});var qs=i(In);y(vr.$$.fragment,qs),zm=f(qs),yt=a(qs,"P",{});var yl=i(yt);qm=o(yl,"The "),Ui=a(yl,"A",{href:!0});var pw=i(Ui);Pm=o(pw,"FunnelModel"),pw.forEach(n),Cm=o(yl," forward method, overrides the "),cd=a(yl,"CODE",{});var uw=i(cd);xm=o(uw,"__call__"),uw.forEach(n),jm=o(yl," special method."),yl.forEach(n),Om=f(qs),y(_o.$$.fragment,qs),Lm=f(qs),y(vo.$$.fragment,qs),qs.forEach(n),Vn.forEach(n),cp=f(s),wt=a(s,"H2",{class:!0});var su=i(wt);ko=a(su,"A",{id:!0,class:!0,href:!0});var fw=i(ko);pd=a(fw,"SPAN",{});var hw=i(pd);y(kr.$$.fragment,hw),hw.forEach(n),fw.forEach(n),Dm=f(su),ud=a(su,"SPAN",{});var mw=i(ud);Am=o(mw,"FunnelModelForPreTraining"),mw.forEach(n),su.forEach(n),pp=f(s),bt=a(s,"DIV",{class:!0});var ru=i(bt);y(Tr.$$.fragment,ru),Nm=f(ru),Sn=a(ru,"DIV",{class:!0});var Ps=i(Sn);y(Fr.$$.fragment,Ps),Im=f(Ps),$t=a(Ps,"P",{});var wl=i($t);Sm=o(wl,"The "),Ri=a(wl,"A",{href:!0});var gw=i(Ri);Bm=o(gw,"FunnelForPreTraining"),gw.forEach(n),Wm=o(wl," forward method, overrides the "),fd=a(wl,"CODE",{});var _w=i(fd);Qm=o(_w,"__call__"),_w.forEach(n),Km=o(wl," special method."),wl.forEach(n),Um=f(Ps),y(To.$$.fragment,Ps),Rm=f(Ps),y(Fo.$$.fragment,Ps),Ps.forEach(n),ru.forEach(n),up=f(s),Et=a(s,"H2",{class:!0});var au=i(Et);yo=a(au,"A",{id:!0,class:!0,href:!0});var vw=i(yo);hd=a(vw,"SPAN",{});var kw=i(hd);y(yr.$$.fragment,kw),kw.forEach(n),vw.forEach(n),Vm=f(au),md=a(au,"SPAN",{});var Tw=i(md);Hm=o(Tw,"FunnelForMaskedLM"),Tw.forEach(n),au.forEach(n),fp=f(s),hn=a(s,"DIV",{class:!0});var Hn=i(hn);y(wr.$$.fragment,Hn),Ym=f(Hn),br=a(Hn,"P",{});var iu=i(br);Gm=o(iu,"Funnel Transformer Model with a "),gd=a(iu,"CODE",{});var Fw=i(gd);Zm=o(Fw,"language modeling"),Fw.forEach(n),Xm=o(iu," head on top."),iu.forEach(n),Jm=f(Hn),$r=a(Hn,"P",{});var lu=i($r);eg=o(lu,"The Funnel Transformer model was proposed in "),Er=a(lu,"A",{href:!0,rel:!0});var yw=i(Er);ng=o(yw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),yw.forEach(n),tg=o(lu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),lu.forEach(n),og=f(Hn),Mr=a(Hn,"P",{});var du=i(Mr);sg=o(du,"This model inherits from "),Vi=a(du,"A",{href:!0});var ww=i(Vi);rg=o(ww,"PreTrainedModel"),ww.forEach(n),ag=o(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(n),ig=f(Hn),zr=a(Hn,"P",{});var cu=i(zr);lg=o(cu,"This model is also a PyTorch "),qr=a(cu,"A",{href:!0,rel:!0});var bw=i(qr);dg=o(bw,"torch.nn.Module"),bw.forEach(n),cg=o(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(n),pg=f(Hn),Tn=a(Hn,"DIV",{class:!0});var st=i(Tn);y(Pr.$$.fragment,st),ug=f(st),Mt=a(st,"P",{});var bl=i(Mt);fg=o(bl,"The "),Hi=a(bl,"A",{href:!0});var $w=i(Hi);hg=o($w,"FunnelForMaskedLM"),$w.forEach(n),mg=o(bl," forward method, overrides the "),_d=a(bl,"CODE",{});var Ew=i(_d);gg=o(Ew,"__call__"),Ew.forEach(n),_g=o(bl," special method."),bl.forEach(n),vg=f(st),y(wo.$$.fragment,st),kg=f(st),y(bo.$$.fragment,st),Tg=f(st),y($o.$$.fragment,st),st.forEach(n),Hn.forEach(n),hp=f(s),zt=a(s,"H2",{class:!0});var pu=i(zt);Eo=a(pu,"A",{id:!0,class:!0,href:!0});var Mw=i(Eo);vd=a(Mw,"SPAN",{});var zw=i(vd);y(Cr.$$.fragment,zw),zw.forEach(n),Mw.forEach(n),Fg=f(pu),kd=a(pu,"SPAN",{});var qw=i(kd);yg=o(qw,"FunnelForSequenceClassification"),qw.forEach(n),pu.forEach(n),mp=f(s),mn=a(s,"DIV",{class:!0});var Yn=i(mn);y(xr.$$.fragment,Yn),wg=f(Yn),Td=a(Yn,"P",{});var Pw=i(Td);bg=o(Pw,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Pw.forEach(n),$g=f(Yn),jr=a(Yn,"P",{});var uu=i(jr);Eg=o(uu,"The Funnel Transformer model was proposed in "),Or=a(uu,"A",{href:!0,rel:!0});var Cw=i(Or);Mg=o(Cw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Cw.forEach(n),zg=o(uu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),uu.forEach(n),qg=f(Yn),Lr=a(Yn,"P",{});var fu=i(Lr);Pg=o(fu,"This model inherits from "),Yi=a(fu,"A",{href:!0});var xw=i(Yi);Cg=o(xw,"PreTrainedModel"),xw.forEach(n),xg=o(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu.forEach(n),jg=f(Yn),Dr=a(Yn,"P",{});var hu=i(Dr);Og=o(hu,"This model is also a PyTorch "),Ar=a(hu,"A",{href:!0,rel:!0});var jw=i(Ar);Lg=o(jw,"torch.nn.Module"),jw.forEach(n),Dg=o(hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu.forEach(n),Ag=f(Yn),pn=a(Yn,"DIV",{class:!0});var Mn=i(pn);y(Nr.$$.fragment,Mn),Ng=f(Mn),qt=a(Mn,"P",{});var $l=i(qt);Ig=o($l,"The "),Gi=a($l,"A",{href:!0});var Ow=i(Gi);Sg=o(Ow,"FunnelForSequenceClassification"),Ow.forEach(n),Bg=o($l," forward method, overrides the "),Fd=a($l,"CODE",{});var Lw=i(Fd);Wg=o(Lw,"__call__"),Lw.forEach(n),Qg=o($l," special method."),$l.forEach(n),Kg=f(Mn),y(Mo.$$.fragment,Mn),Ug=f(Mn),y(zo.$$.fragment,Mn),Rg=f(Mn),y(qo.$$.fragment,Mn),Vg=f(Mn),y(Po.$$.fragment,Mn),Hg=f(Mn),y(Co.$$.fragment,Mn),Mn.forEach(n),Yn.forEach(n),gp=f(s),Pt=a(s,"H2",{class:!0});var mu=i(Pt);xo=a(mu,"A",{id:!0,class:!0,href:!0});var Dw=i(xo);yd=a(Dw,"SPAN",{});var Aw=i(yd);y(Ir.$$.fragment,Aw),Aw.forEach(n),Dw.forEach(n),Yg=f(mu),wd=a(mu,"SPAN",{});var Nw=i(wd);Gg=o(Nw,"FunnelForMultipleChoice"),Nw.forEach(n),mu.forEach(n),_p=f(s),gn=a(s,"DIV",{class:!0});var Gn=i(gn);y(Sr.$$.fragment,Gn),Zg=f(Gn),bd=a(Gn,"P",{});var Iw=i(bd);Xg=o(Iw,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Iw.forEach(n),Jg=f(Gn),Br=a(Gn,"P",{});var gu=i(Br);e_=o(gu,"The Funnel Transformer model was proposed in "),Wr=a(gu,"A",{href:!0,rel:!0});var Sw=i(Wr);n_=o(Sw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Sw.forEach(n),t_=o(gu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),gu.forEach(n),o_=f(Gn),Qr=a(Gn,"P",{});var _u=i(Qr);s_=o(_u,"This model inherits from "),Zi=a(_u,"A",{href:!0});var Bw=i(Zi);r_=o(Bw,"PreTrainedModel"),Bw.forEach(n),a_=o(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(n),i_=f(Gn),Kr=a(Gn,"P",{});var vu=i(Kr);l_=o(vu,"This model is also a PyTorch "),Ur=a(vu,"A",{href:!0,rel:!0});var Ww=i(Ur);d_=o(Ww,"torch.nn.Module"),Ww.forEach(n),c_=o(vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu.forEach(n),p_=f(Gn),Bn=a(Gn,"DIV",{class:!0});var Cs=i(Bn);y(Rr.$$.fragment,Cs),u_=f(Cs),Ct=a(Cs,"P",{});var El=i(Ct);f_=o(El,"The "),Xi=a(El,"A",{href:!0});var Qw=i(Xi);h_=o(Qw,"FunnelForMultipleChoice"),Qw.forEach(n),m_=o(El," forward method, overrides the "),$d=a(El,"CODE",{});var Kw=i($d);g_=o(Kw,"__call__"),Kw.forEach(n),__=o(El," special method."),El.forEach(n),v_=f(Cs),y(jo.$$.fragment,Cs),k_=f(Cs),y(Oo.$$.fragment,Cs),Cs.forEach(n),Gn.forEach(n),vp=f(s),xt=a(s,"H2",{class:!0});var ku=i(xt);Lo=a(ku,"A",{id:!0,class:!0,href:!0});var Uw=i(Lo);Ed=a(Uw,"SPAN",{});var Rw=i(Ed);y(Vr.$$.fragment,Rw),Rw.forEach(n),Uw.forEach(n),T_=f(ku),Md=a(ku,"SPAN",{});var Vw=i(Md);F_=o(Vw,"FunnelForTokenClassification"),Vw.forEach(n),ku.forEach(n),kp=f(s),_n=a(s,"DIV",{class:!0});var Zn=i(_n);y(Hr.$$.fragment,Zn),y_=f(Zn),zd=a(Zn,"P",{});var Hw=i(zd);w_=o(Hw,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Hw.forEach(n),b_=f(Zn),Yr=a(Zn,"P",{});var Tu=i(Yr);$_=o(Tu,"The Funnel Transformer model was proposed in "),Gr=a(Tu,"A",{href:!0,rel:!0});var Yw=i(Gr);E_=o(Yw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Yw.forEach(n),M_=o(Tu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tu.forEach(n),z_=f(Zn),Zr=a(Zn,"P",{});var Fu=i(Zr);q_=o(Fu,"This model inherits from "),Ji=a(Fu,"A",{href:!0});var Gw=i(Ji);P_=o(Gw,"PreTrainedModel"),Gw.forEach(n),C_=o(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(n),x_=f(Zn),Xr=a(Zn,"P",{});var yu=i(Xr);j_=o(yu,"This model is also a PyTorch "),Jr=a(yu,"A",{href:!0,rel:!0});var Zw=i(Jr);O_=o(Zw,"torch.nn.Module"),Zw.forEach(n),L_=o(yu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yu.forEach(n),D_=f(Zn),Fn=a(Zn,"DIV",{class:!0});var rt=i(Fn);y(ea.$$.fragment,rt),A_=f(rt),jt=a(rt,"P",{});var Ml=i(jt);N_=o(Ml,"The "),el=a(Ml,"A",{href:!0});var Xw=i(el);I_=o(Xw,"FunnelForTokenClassification"),Xw.forEach(n),S_=o(Ml," forward method, overrides the "),qd=a(Ml,"CODE",{});var Jw=i(qd);B_=o(Jw,"__call__"),Jw.forEach(n),W_=o(Ml," special method."),Ml.forEach(n),Q_=f(rt),y(Do.$$.fragment,rt),K_=f(rt),y(Ao.$$.fragment,rt),U_=f(rt),y(No.$$.fragment,rt),rt.forEach(n),Zn.forEach(n),Tp=f(s),Ot=a(s,"H2",{class:!0});var wu=i(Ot);Io=a(wu,"A",{id:!0,class:!0,href:!0});var eb=i(Io);Pd=a(eb,"SPAN",{});var nb=i(Pd);y(na.$$.fragment,nb),nb.forEach(n),eb.forEach(n),R_=f(wu),Cd=a(wu,"SPAN",{});var tb=i(Cd);V_=o(tb,"FunnelForQuestionAnswering"),tb.forEach(n),wu.forEach(n),Fp=f(s),vn=a(s,"DIV",{class:!0});var Xn=i(vn);y(ta.$$.fragment,Xn),H_=f(Xn),Lt=a(Xn,"P",{});var zl=i(Lt);Y_=o(zl,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),xd=a(zl,"CODE",{});var ob=i(xd);G_=o(ob,"span start logits"),ob.forEach(n),Z_=o(zl," and "),jd=a(zl,"CODE",{});var sb=i(jd);X_=o(sb,"span end logits"),sb.forEach(n),J_=o(zl,")."),zl.forEach(n),ev=f(Xn),oa=a(Xn,"P",{});var bu=i(oa);nv=o(bu,"The Funnel Transformer model was proposed in "),sa=a(bu,"A",{href:!0,rel:!0});var rb=i(sa);tv=o(rb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rb.forEach(n),ov=o(bu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),bu.forEach(n),sv=f(Xn),ra=a(Xn,"P",{});var $u=i(ra);rv=o($u,"This model inherits from "),nl=a($u,"A",{href:!0});var ab=i(nl);av=o(ab,"PreTrainedModel"),ab.forEach(n),iv=o($u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$u.forEach(n),lv=f(Xn),aa=a(Xn,"P",{});var Eu=i(aa);dv=o(Eu,"This model is also a PyTorch "),ia=a(Eu,"A",{href:!0,rel:!0});var ib=i(ia);cv=o(ib,"torch.nn.Module"),ib.forEach(n),pv=o(Eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu.forEach(n),uv=f(Xn),yn=a(Xn,"DIV",{class:!0});var at=i(yn);y(la.$$.fragment,at),fv=f(at),Dt=a(at,"P",{});var ql=i(Dt);hv=o(ql,"The "),tl=a(ql,"A",{href:!0});var lb=i(tl);mv=o(lb,"FunnelForQuestionAnswering"),lb.forEach(n),gv=o(ql," forward method, overrides the "),Od=a(ql,"CODE",{});var db=i(Od);_v=o(db,"__call__"),db.forEach(n),vv=o(ql," special method."),ql.forEach(n),kv=f(at),y(So.$$.fragment,at),Tv=f(at),y(Bo.$$.fragment,at),Fv=f(at),y(Wo.$$.fragment,at),at.forEach(n),Xn.forEach(n),yp=f(s),At=a(s,"H2",{class:!0});var Mu=i(At);Qo=a(Mu,"A",{id:!0,class:!0,href:!0});var cb=i(Qo);Ld=a(cb,"SPAN",{});var pb=i(Ld);y(da.$$.fragment,pb),pb.forEach(n),cb.forEach(n),yv=f(Mu),Dd=a(Mu,"SPAN",{});var ub=i(Dd);wv=o(ub,"TFFunnelBaseModel"),ub.forEach(n),Mu.forEach(n),wp=f(s),nn=a(s,"DIV",{class:!0});var zn=i(nn);y(ca.$$.fragment,zn),bv=f(zn),Ad=a(zn,"P",{});var fb=i(Ad);$v=o(fb,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),fb.forEach(n),Ev=f(zn),pa=a(zn,"P",{});var zu=i(pa);Mv=o(zu,"The Funnel Transformer model was proposed in "),ua=a(zu,"A",{href:!0,rel:!0});var hb=i(ua);zv=o(hb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),hb.forEach(n),qv=o(zu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zu.forEach(n),Pv=f(zn),fa=a(zn,"P",{});var qu=i(fa);Cv=o(qu,"This model inherits from "),ol=a(qu,"A",{href:!0});var mb=i(ol);xv=o(mb,"TFPreTrainedModel"),mb.forEach(n),jv=o(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(n),Ov=f(zn),ha=a(zn,"P",{});var Pu=i(ha);Lv=o(Pu,"This model is also a "),ma=a(Pu,"A",{href:!0,rel:!0});var gb=i(ma);Dv=o(gb,"tf.keras.Model"),gb.forEach(n),Av=o(Pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu.forEach(n),Nv=f(zn),y(Ko.$$.fragment,zn),Iv=f(zn),Wn=a(zn,"DIV",{class:!0});var xs=i(Wn);y(ga.$$.fragment,xs),Sv=f(xs),Nt=a(xs,"P",{});var Pl=i(Nt);Bv=o(Pl,"The "),sl=a(Pl,"A",{href:!0});var _b=i(sl);Wv=o(_b,"TFFunnelBaseModel"),_b.forEach(n),Qv=o(Pl," forward method, overrides the "),Nd=a(Pl,"CODE",{});var vb=i(Nd);Kv=o(vb,"__call__"),vb.forEach(n),Uv=o(Pl," special method."),Pl.forEach(n),Rv=f(xs),y(Uo.$$.fragment,xs),Vv=f(xs),y(Ro.$$.fragment,xs),xs.forEach(n),zn.forEach(n),bp=f(s),It=a(s,"H2",{class:!0});var Cu=i(It);Vo=a(Cu,"A",{id:!0,class:!0,href:!0});var kb=i(Vo);Id=a(kb,"SPAN",{});var Tb=i(Id);y(_a.$$.fragment,Tb),Tb.forEach(n),kb.forEach(n),Hv=f(Cu),Sd=a(Cu,"SPAN",{});var Fb=i(Sd);Yv=o(Fb,"TFFunnelModel"),Fb.forEach(n),Cu.forEach(n),$p=f(s),tn=a(s,"DIV",{class:!0});var qn=i(tn);y(va.$$.fragment,qn),Gv=f(qn),Bd=a(qn,"P",{});var yb=i(Bd);Zv=o(yb,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),yb.forEach(n),Xv=f(qn),ka=a(qn,"P",{});var xu=i(ka);Jv=o(xu,"The Funnel Transformer model was proposed in "),Ta=a(xu,"A",{href:!0,rel:!0});var wb=i(Ta);ek=o(wb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),wb.forEach(n),nk=o(xu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),xu.forEach(n),tk=f(qn),Fa=a(qn,"P",{});var ju=i(Fa);ok=o(ju,"This model inherits from "),rl=a(ju,"A",{href:!0});var bb=i(rl);sk=o(bb,"TFPreTrainedModel"),bb.forEach(n),rk=o(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(n),ak=f(qn),ya=a(qn,"P",{});var Ou=i(ya);ik=o(Ou,"This model is also a "),wa=a(Ou,"A",{href:!0,rel:!0});var $b=i(wa);lk=o($b,"tf.keras.Model"),$b.forEach(n),dk=o(Ou,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou.forEach(n),ck=f(qn),y(Ho.$$.fragment,qn),pk=f(qn),Qn=a(qn,"DIV",{class:!0});var js=i(Qn);y(ba.$$.fragment,js),uk=f(js),St=a(js,"P",{});var Cl=i(St);fk=o(Cl,"The "),al=a(Cl,"A",{href:!0});var Eb=i(al);hk=o(Eb,"TFFunnelModel"),Eb.forEach(n),mk=o(Cl," forward method, overrides the "),Wd=a(Cl,"CODE",{});var Mb=i(Wd);gk=o(Mb,"__call__"),Mb.forEach(n),_k=o(Cl," special method."),Cl.forEach(n),vk=f(js),y(Yo.$$.fragment,js),kk=f(js),y(Go.$$.fragment,js),js.forEach(n),qn.forEach(n),Ep=f(s),Bt=a(s,"H2",{class:!0});var Lu=i(Bt);Zo=a(Lu,"A",{id:!0,class:!0,href:!0});var zb=i(Zo);Qd=a(zb,"SPAN",{});var qb=i(Qd);y($a.$$.fragment,qb),qb.forEach(n),zb.forEach(n),Tk=f(Lu),Kd=a(Lu,"SPAN",{});var Pb=i(Kd);Fk=o(Pb,"TFFunnelModelForPreTraining"),Pb.forEach(n),Lu.forEach(n),Mp=f(s),on=a(s,"DIV",{class:!0});var Pn=i(on);y(Ea.$$.fragment,Pn),yk=f(Pn),Ud=a(Pn,"P",{});var Cb=i(Ud);wk=o(Cb,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),Cb.forEach(n),bk=f(Pn),Ma=a(Pn,"P",{});var Du=i(Ma);$k=o(Du,"The Funnel Transformer model was proposed in "),za=a(Du,"A",{href:!0,rel:!0});var xb=i(za);Ek=o(xb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),xb.forEach(n),Mk=o(Du," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Du.forEach(n),zk=f(Pn),qa=a(Pn,"P",{});var Au=i(qa);qk=o(Au,"This model inherits from "),il=a(Au,"A",{href:!0});var jb=i(il);Pk=o(jb,"TFPreTrainedModel"),jb.forEach(n),Ck=o(Au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au.forEach(n),xk=f(Pn),Pa=a(Pn,"P",{});var Nu=i(Pa);jk=o(Nu,"This model is also a "),Ca=a(Nu,"A",{href:!0,rel:!0});var Ob=i(Ca);Ok=o(Ob,"tf.keras.Model"),Ob.forEach(n),Lk=o(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(n),Dk=f(Pn),y(Xo.$$.fragment,Pn),Ak=f(Pn),Kn=a(Pn,"DIV",{class:!0});var Os=i(Kn);y(xa.$$.fragment,Os),Nk=f(Os),Wt=a(Os,"P",{});var xl=i(Wt);Ik=o(xl,"The "),ll=a(xl,"A",{href:!0});var Lb=i(ll);Sk=o(Lb,"TFFunnelForPreTraining"),Lb.forEach(n),Bk=o(xl," forward method, overrides the "),Rd=a(xl,"CODE",{});var Db=i(Rd);Wk=o(Db,"__call__"),Db.forEach(n),Qk=o(xl," special method."),xl.forEach(n),Kk=f(Os),y(Jo.$$.fragment,Os),Uk=f(Os),y(es.$$.fragment,Os),Os.forEach(n),Pn.forEach(n),zp=f(s),Qt=a(s,"H2",{class:!0});var Iu=i(Qt);ns=a(Iu,"A",{id:!0,class:!0,href:!0});var Ab=i(ns);Vd=a(Ab,"SPAN",{});var Nb=i(Vd);y(ja.$$.fragment,Nb),Nb.forEach(n),Ab.forEach(n),Rk=f(Iu),Hd=a(Iu,"SPAN",{});var Ib=i(Hd);Vk=o(Ib,"TFFunnelForMaskedLM"),Ib.forEach(n),Iu.forEach(n),qp=f(s),sn=a(s,"DIV",{class:!0});var Cn=i(sn);y(Oa.$$.fragment,Cn),Hk=f(Cn),La=a(Cn,"P",{});var Su=i(La);Yk=o(Su,"Funnel Model with a "),Yd=a(Su,"CODE",{});var Sb=i(Yd);Gk=o(Sb,"language modeling"),Sb.forEach(n),Zk=o(Su," head on top."),Su.forEach(n),Xk=f(Cn),Da=a(Cn,"P",{});var Bu=i(Da);Jk=o(Bu,"The Funnel Transformer model was proposed in "),Aa=a(Bu,"A",{href:!0,rel:!0});var Bb=i(Aa);eT=o(Bb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Bb.forEach(n),nT=o(Bu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Bu.forEach(n),tT=f(Cn),Na=a(Cn,"P",{});var Wu=i(Na);oT=o(Wu,"This model inherits from "),dl=a(Wu,"A",{href:!0});var Wb=i(dl);sT=o(Wb,"TFPreTrainedModel"),Wb.forEach(n),rT=o(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(n),aT=f(Cn),Ia=a(Cn,"P",{});var Qu=i(Ia);iT=o(Qu,"This model is also a "),Sa=a(Qu,"A",{href:!0,rel:!0});var Qb=i(Sa);lT=o(Qb,"tf.keras.Model"),Qb.forEach(n),dT=o(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(n),cT=f(Cn),y(ts.$$.fragment,Cn),pT=f(Cn),wn=a(Cn,"DIV",{class:!0});var it=i(wn);y(Ba.$$.fragment,it),uT=f(it),Kt=a(it,"P",{});var jl=i(Kt);fT=o(jl,"The "),cl=a(jl,"A",{href:!0});var Kb=i(cl);hT=o(Kb,"TFFunnelForMaskedLM"),Kb.forEach(n),mT=o(jl," forward method, overrides the "),Gd=a(jl,"CODE",{});var Ub=i(Gd);gT=o(Ub,"__call__"),Ub.forEach(n),_T=o(jl," special method."),jl.forEach(n),vT=f(it),y(os.$$.fragment,it),kT=f(it),y(ss.$$.fragment,it),TT=f(it),y(rs.$$.fragment,it),it.forEach(n),Cn.forEach(n),Pp=f(s),Ut=a(s,"H2",{class:!0});var Ku=i(Ut);as=a(Ku,"A",{id:!0,class:!0,href:!0});var Rb=i(as);Zd=a(Rb,"SPAN",{});var Vb=i(Zd);y(Wa.$$.fragment,Vb),Vb.forEach(n),Rb.forEach(n),FT=f(Ku),Xd=a(Ku,"SPAN",{});var Hb=i(Xd);yT=o(Hb,"TFFunnelForSequenceClassification"),Hb.forEach(n),Ku.forEach(n),Cp=f(s),rn=a(s,"DIV",{class:!0});var xn=i(rn);y(Qa.$$.fragment,xn),wT=f(xn),Jd=a(xn,"P",{});var Yb=i(Jd);bT=o(Yb,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Yb.forEach(n),$T=f(xn),Ka=a(xn,"P",{});var Uu=i(Ka);ET=o(Uu,"The Funnel Transformer model was proposed in "),Ua=a(Uu,"A",{href:!0,rel:!0});var Gb=i(Ua);MT=o(Gb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Gb.forEach(n),zT=o(Uu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Uu.forEach(n),qT=f(xn),Ra=a(xn,"P",{});var Ru=i(Ra);PT=o(Ru,"This model inherits from "),pl=a(Ru,"A",{href:!0});var Zb=i(pl);CT=o(Zb,"TFPreTrainedModel"),Zb.forEach(n),xT=o(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(n),jT=f(xn),Va=a(xn,"P",{});var Vu=i(Va);OT=o(Vu,"This model is also a "),Ha=a(Vu,"A",{href:!0,rel:!0});var Xb=i(Ha);LT=o(Xb,"tf.keras.Model"),Xb.forEach(n),DT=o(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(n),AT=f(xn),y(is.$$.fragment,xn),NT=f(xn),bn=a(xn,"DIV",{class:!0});var lt=i(bn);y(Ya.$$.fragment,lt),IT=f(lt),Rt=a(lt,"P",{});var Ol=i(Rt);ST=o(Ol,"The "),ul=a(Ol,"A",{href:!0});var Jb=i(ul);BT=o(Jb,"TFFunnelForSequenceClassification"),Jb.forEach(n),WT=o(Ol," forward method, overrides the "),ec=a(Ol,"CODE",{});var e2=i(ec);QT=o(e2,"__call__"),e2.forEach(n),KT=o(Ol," special method."),Ol.forEach(n),UT=f(lt),y(ls.$$.fragment,lt),RT=f(lt),y(ds.$$.fragment,lt),VT=f(lt),y(cs.$$.fragment,lt),lt.forEach(n),xn.forEach(n),xp=f(s),Vt=a(s,"H2",{class:!0});var Hu=i(Vt);ps=a(Hu,"A",{id:!0,class:!0,href:!0});var n2=i(ps);nc=a(n2,"SPAN",{});var t2=i(nc);y(Ga.$$.fragment,t2),t2.forEach(n),n2.forEach(n),HT=f(Hu),tc=a(Hu,"SPAN",{});var o2=i(tc);YT=o(o2,"TFFunnelForMultipleChoice"),o2.forEach(n),Hu.forEach(n),jp=f(s),an=a(s,"DIV",{class:!0});var jn=i(an);y(Za.$$.fragment,jn),GT=f(jn),oc=a(jn,"P",{});var s2=i(oc);ZT=o(s2,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s2.forEach(n),XT=f(jn),Xa=a(jn,"P",{});var Yu=i(Xa);JT=o(Yu,"The Funnel Transformer model was proposed in "),Ja=a(Yu,"A",{href:!0,rel:!0});var r2=i(Ja);eF=o(r2,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),r2.forEach(n),nF=o(Yu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yu.forEach(n),tF=f(jn),ei=a(jn,"P",{});var Gu=i(ei);oF=o(Gu,"This model inherits from "),fl=a(Gu,"A",{href:!0});var a2=i(fl);sF=o(a2,"TFPreTrainedModel"),a2.forEach(n),rF=o(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu.forEach(n),aF=f(jn),ni=a(jn,"P",{});var Zu=i(ni);iF=o(Zu,"This model is also a "),ti=a(Zu,"A",{href:!0,rel:!0});var i2=i(ti);lF=o(i2,"tf.keras.Model"),i2.forEach(n),dF=o(Zu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu.forEach(n),cF=f(jn),y(us.$$.fragment,jn),pF=f(jn),Un=a(jn,"DIV",{class:!0});var Ls=i(Un);y(oi.$$.fragment,Ls),uF=f(Ls),Ht=a(Ls,"P",{});var Ll=i(Ht);fF=o(Ll,"The "),hl=a(Ll,"A",{href:!0});var l2=i(hl);hF=o(l2,"TFFunnelForMultipleChoice"),l2.forEach(n),mF=o(Ll," forward method, overrides the "),sc=a(Ll,"CODE",{});var d2=i(sc);gF=o(d2,"__call__"),d2.forEach(n),_F=o(Ll," special method."),Ll.forEach(n),vF=f(Ls),y(fs.$$.fragment,Ls),kF=f(Ls),y(hs.$$.fragment,Ls),Ls.forEach(n),jn.forEach(n),Op=f(s),Yt=a(s,"H2",{class:!0});var Xu=i(Yt);ms=a(Xu,"A",{id:!0,class:!0,href:!0});var c2=i(ms);rc=a(c2,"SPAN",{});var p2=i(rc);y(si.$$.fragment,p2),p2.forEach(n),c2.forEach(n),TF=f(Xu),ac=a(Xu,"SPAN",{});var u2=i(ac);FF=o(u2,"TFFunnelForTokenClassification"),u2.forEach(n),Xu.forEach(n),Lp=f(s),ln=a(s,"DIV",{class:!0});var On=i(ln);y(ri.$$.fragment,On),yF=f(On),ic=a(On,"P",{});var f2=i(ic);wF=o(f2,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),f2.forEach(n),bF=f(On),ai=a(On,"P",{});var Ju=i(ai);$F=o(Ju,"The Funnel Transformer model was proposed in "),ii=a(Ju,"A",{href:!0,rel:!0});var h2=i(ii);EF=o(h2,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),h2.forEach(n),MF=o(Ju," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ju.forEach(n),zF=f(On),li=a(On,"P",{});var ef=i(li);qF=o(ef,"This model inherits from "),ml=a(ef,"A",{href:!0});var m2=i(ml);PF=o(m2,"TFPreTrainedModel"),m2.forEach(n),CF=o(ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef.forEach(n),xF=f(On),di=a(On,"P",{});var nf=i(di);jF=o(nf,"This model is also a "),ci=a(nf,"A",{href:!0,rel:!0});var g2=i(ci);OF=o(g2,"tf.keras.Model"),g2.forEach(n),LF=o(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(n),DF=f(On),y(gs.$$.fragment,On),AF=f(On),$n=a(On,"DIV",{class:!0});var dt=i($n);y(pi.$$.fragment,dt),NF=f(dt),Gt=a(dt,"P",{});var Dl=i(Gt);IF=o(Dl,"The "),gl=a(Dl,"A",{href:!0});var _2=i(gl);SF=o(_2,"TFFunnelForTokenClassification"),_2.forEach(n),BF=o(Dl," forward method, overrides the "),lc=a(Dl,"CODE",{});var v2=i(lc);WF=o(v2,"__call__"),v2.forEach(n),QF=o(Dl," special method."),Dl.forEach(n),KF=f(dt),y(_s.$$.fragment,dt),UF=f(dt),y(vs.$$.fragment,dt),RF=f(dt),y(ks.$$.fragment,dt),dt.forEach(n),On.forEach(n),Dp=f(s),Zt=a(s,"H2",{class:!0});var tf=i(Zt);Ts=a(tf,"A",{id:!0,class:!0,href:!0});var k2=i(Ts);dc=a(k2,"SPAN",{});var T2=i(dc);y(ui.$$.fragment,T2),T2.forEach(n),k2.forEach(n),VF=f(tf),cc=a(tf,"SPAN",{});var F2=i(cc);HF=o(F2,"TFFunnelForQuestionAnswering"),F2.forEach(n),tf.forEach(n),Ap=f(s),dn=a(s,"DIV",{class:!0});var Ln=i(dn);y(fi.$$.fragment,Ln),YF=f(Ln),Xt=a(Ln,"P",{});var Al=i(Xt);GF=o(Al,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pc=a(Al,"CODE",{});var y2=i(pc);ZF=o(y2,"span start logits"),y2.forEach(n),XF=o(Al," and "),uc=a(Al,"CODE",{});var w2=i(uc);JF=o(w2,"span end logits"),w2.forEach(n),ey=o(Al,")."),Al.forEach(n),ny=f(Ln),hi=a(Ln,"P",{});var of=i(hi);ty=o(of,"The Funnel Transformer model was proposed in "),mi=a(of,"A",{href:!0,rel:!0});var b2=i(mi);oy=o(b2,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),b2.forEach(n),sy=o(of," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),of.forEach(n),ry=f(Ln),gi=a(Ln,"P",{});var sf=i(gi);ay=o(sf,"This model inherits from "),_l=a(sf,"A",{href:!0});var $2=i(_l);iy=o($2,"TFPreTrainedModel"),$2.forEach(n),ly=o(sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf.forEach(n),dy=f(Ln),_i=a(Ln,"P",{});var rf=i(_i);cy=o(rf,"This model is also a "),vi=a(rf,"A",{href:!0,rel:!0});var E2=i(vi);py=o(E2,"tf.keras.Model"),E2.forEach(n),uy=o(rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf.forEach(n),fy=f(Ln),y(Fs.$$.fragment,Ln),hy=f(Ln),En=a(Ln,"DIV",{class:!0});var ct=i(En);y(ki.$$.fragment,ct),my=f(ct),Jt=a(ct,"P",{});var Nl=i(Jt);gy=o(Nl,"The "),vl=a(Nl,"A",{href:!0});var M2=i(vl);_y=o(M2,"TFFunnelForQuestionAnswering"),M2.forEach(n),vy=o(Nl," forward method, overrides the "),fc=a(Nl,"CODE",{});var z2=i(fc);ky=o(z2,"__call__"),z2.forEach(n),Ty=o(Nl," special method."),Nl.forEach(n),Fy=f(ct),y(ys.$$.fragment,ct),yy=f(ct),y(ws.$$.fragment,ct),wy=f(ct),y(bs.$$.fragment,ct),ct.forEach(n),Ln.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(j1)),m(h,"id","funnel-transformer"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#funnel-transformer"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://arxiv.org/abs/2006.03236"),m(ae,"rel","nofollow"),m(j,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelModel"),m(le,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(de,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(ce,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(D,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelBaseModel"),m(g,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(J,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(De,"href","https://huggingface.co/sgugger"),m(De,"rel","nofollow"),m(A,"href","https://github.com/laiguokun/Funnel-Transformer"),m(A,"rel","nofollow"),m(Le,"id","transformers.FunnelConfig"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.FunnelConfig"),m(S,"class","relative group"),m(Mi,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelModel"),m(zi,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.TFBertModel"),m(As,"href","https://huggingface.co/funnel-transformer/small"),m(As,"rel","nofollow"),m(qi,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(Pi,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"id","transformers.FunnelTokenizer"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.FunnelTokenizer"),m(ut,"class","relative group"),m(Ci,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizer"),m(xi,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer"),m(ji,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Di,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelTokenizerFast"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelTokenizerFast"),m(ht,"class","relative group"),m(Ai,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelTokenizerFast"),m(Ni,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizerFast"),m(Ii,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizerFast"),m(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(uo,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(gt,"class","relative group"),m(Si,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bi,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"id","transformers.FunnelBaseModel"),m(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fo,"href","#transformers.FunnelBaseModel"),m(kt,"class","relative group"),m(ar,"href","https://arxiv.org/abs/2006.03236"),m(ar,"rel","nofollow"),m(Wi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(Qi,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"id","transformers.FunnelModel"),m(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(go,"href","#transformers.FunnelModel"),m(Ft,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.03236"),m(hr,"rel","nofollow"),m(Ki,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(Ui,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelModel"),m(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ko,"id","transformers.FunnelForPreTraining"),m(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ko,"href","#transformers.FunnelForPreTraining"),m(wt,"class","relative group"),m(Ri,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yo,"id","transformers.FunnelForMaskedLM"),m(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(yo,"href","#transformers.FunnelForMaskedLM"),m(Et,"class","relative group"),m(Er,"href","https://arxiv.org/abs/2006.03236"),m(Er,"rel","nofollow"),m(Vi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Hi,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.FunnelForSequenceClassification"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.FunnelForSequenceClassification"),m(zt,"class","relative group"),m(Or,"href","https://arxiv.org/abs/2006.03236"),m(Or,"rel","nofollow"),m(Yi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ar,"rel","nofollow"),m(Gi,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.FunnelForMultipleChoice"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.FunnelForMultipleChoice"),m(Pt,"class","relative group"),m(Wr,"href","https://arxiv.org/abs/2006.03236"),m(Wr,"rel","nofollow"),m(Zi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ur,"rel","nofollow"),m(Xi,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.FunnelForTokenClassification"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.FunnelForTokenClassification"),m(xt,"class","relative group"),m(Gr,"href","https://arxiv.org/abs/2006.03236"),m(Gr,"rel","nofollow"),m(Ji,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(Jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jr,"rel","nofollow"),m(el,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","transformers.FunnelForQuestionAnswering"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#transformers.FunnelForQuestionAnswering"),m(Ot,"class","relative group"),m(sa,"href","https://arxiv.org/abs/2006.03236"),m(sa,"rel","nofollow"),m(nl,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),m(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ia,"rel","nofollow"),m(tl,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.TFFunnelBaseModel"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.TFFunnelBaseModel"),m(At,"class","relative group"),m(ua,"href","https://arxiv.org/abs/2006.03236"),m(ua,"rel","nofollow"),m(ol,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ma,"rel","nofollow"),m(sl,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","transformers.TFFunnelModel"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#transformers.TFFunnelModel"),m(It,"class","relative group"),m(Ta,"href","https://arxiv.org/abs/2006.03236"),m(Ta,"rel","nofollow"),m(rl,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(wa,"rel","nofollow"),m(al,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelModel"),m(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zo,"id","transformers.TFFunnelForPreTraining"),m(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zo,"href","#transformers.TFFunnelForPreTraining"),m(Bt,"class","relative group"),m(za,"href","https://arxiv.org/abs/2006.03236"),m(za,"rel","nofollow"),m(il,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ca,"rel","nofollow"),m(ll,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"id","transformers.TFFunnelForMaskedLM"),m(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ns,"href","#transformers.TFFunnelForMaskedLM"),m(Qt,"class","relative group"),m(Aa,"href","https://arxiv.org/abs/2006.03236"),m(Aa,"rel","nofollow"),m(dl,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sa,"rel","nofollow"),m(cl,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(as,"id","transformers.TFFunnelForSequenceClassification"),m(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(as,"href","#transformers.TFFunnelForSequenceClassification"),m(Ut,"class","relative group"),m(Ua,"href","https://arxiv.org/abs/2006.03236"),m(Ua,"rel","nofollow"),m(pl,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ha,"rel","nofollow"),m(ul,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ps,"id","transformers.TFFunnelForMultipleChoice"),m(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ps,"href","#transformers.TFFunnelForMultipleChoice"),m(Vt,"class","relative group"),m(Ja,"href","https://arxiv.org/abs/2006.03236"),m(Ja,"rel","nofollow"),m(fl,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ti,"rel","nofollow"),m(hl,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ms,"id","transformers.TFFunnelForTokenClassification"),m(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ms,"href","#transformers.TFFunnelForTokenClassification"),m(Yt,"class","relative group"),m(ii,"href","https://arxiv.org/abs/2006.03236"),m(ii,"rel","nofollow"),m(ml,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ci,"rel","nofollow"),m(gl,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ts,"id","transformers.TFFunnelForQuestionAnswering"),m(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ts,"href","#transformers.TFFunnelForQuestionAnswering"),m(Zt,"class","relative group"),m(mi,"href","https://arxiv.org/abs/2006.03236"),m(mi,"rel","nofollow"),m(_l,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(vi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(vi,"rel","nofollow"),m(vl,"href","/docs/transformers/v4.22.1/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),_(s,v,k),_(s,c,k),e(c,h),e(h,T),w(l,T,null),e(c,p),e(c,C),e(C,ve),_(s,fe,k),_(s,I,k),e(I,re),e(re,ee),w(M,ee,null),e(I,ke),e(I,U),e(U,Te),_(s,he,k),_(s,B,k),e(B,Fe),e(B,ae),e(ae,V),e(B,ye),_(s,me,k),_(s,Q,k),e(Q,we),_(s,ge,k),_(s,K,k),e(K,pe),e(pe,be),_(s,oe,k),_(s,x,k),e(x,O),_(s,_e,k),_(s,W,k),e(W,ue),e(ue,$e),e(W,H),e(W,R),e(R,Ee),e(R,j),e(j,Me),e(R,Y),e(R,le),e(le,ze),e(R,G),e(R,de),e(de,qe),e(R,N),e(R,ce),e(ce,Z),e(R,Pe),e(R,ne),e(ne,L),e(R,Ce),e(R,D),e(D,xe),e(R,je),e(R,g),e(g,z),e(R,We),e(R,J),e(J,Qe),e(R,Ke),_(s,q,k),_(s,Oe,k),e(Oe,Ue),e(Oe,De),e(De,Re),e(Oe,Ve),e(Oe,A),e(A,X),e(Oe,He),_(s,Ne,k),_(s,S,k),e(S,Le),e(Le,Ae),w(ie,Ae,null),e(S,Ye),e(S,te),e(te,Ge),_(s,Xc,k),_(s,Jn,k),w(Ds,Jn,null),e(Jn,af),e(Jn,et),e(et,lf),e(et,Mi),e(Mi,df),e(et,cf),e(et,zi),e(zi,pf),e(et,uf),e(et,As),e(As,ff),e(et,hf),e(Jn,mf),e(Jn,pt),e(pt,gf),e(pt,qi),e(qi,_f),e(pt,vf),e(pt,Pi),e(Pi,kf),e(pt,Tf),_(s,Jc,k),_(s,ut,k),e(ut,so),e(so,Il),w(Ns,Il,null),e(ut,Ff),e(ut,Sl),e(Sl,yf),_(s,ep,k),_(s,Je,k),w(Is,Je,null),e(Je,wf),e(Je,Bl),e(Bl,bf),e(Je,$f),e(Je,ro),e(ro,Ci),e(Ci,Ef),e(ro,Mf),e(ro,xi),e(xi,zf),e(ro,qf),e(Je,Pf),e(Je,Ss),e(Ss,Cf),e(Ss,ji),e(ji,xf),e(Ss,jf),e(Je,Of),e(Je,tt),w(Bs,tt,null),e(tt,Lf),e(tt,Wl),e(Wl,Df),e(tt,Af),e(tt,Ws),e(Ws,Oi),e(Oi,Nf),e(Oi,Ql),e(Ql,If),e(Ws,Sf),e(Ws,Li),e(Li,Bf),e(Li,Kl),e(Kl,Wf),e(Je,Qf),e(Je,ao),w(Qs,ao,null),e(ao,Kf),e(ao,Ks),e(Ks,Uf),e(Ks,Ul),e(Ul,Rf),e(Ks,Vf),e(Je,Hf),e(Je,Dn),w(Us,Dn,null),e(Dn,Yf),e(Dn,Rl),e(Rl,Gf),e(Dn,Zf),w(io,Dn,null),e(Dn,Xf),e(Dn,ft),e(ft,Jf),e(ft,Vl),e(Vl,eh),e(ft,nh),e(ft,Hl),e(Hl,th),e(ft,oh),e(Je,sh),e(Je,Di),w(Rs,Di,null),_(s,np,k),_(s,ht,k),e(ht,lo),e(lo,Yl),w(Vs,Yl,null),e(ht,rh),e(ht,Gl),e(Gl,ah),_(s,tp,k),_(s,kn,k),w(Hs,kn,null),e(kn,ih),e(kn,Ys),e(Ys,lh),e(Ys,Zl),e(Zl,dh),e(Ys,ch),e(kn,ph),e(kn,co),e(co,Ai),e(Ai,uh),e(co,fh),e(co,Ni),e(Ni,hh),e(co,mh),e(kn,gh),e(kn,Gs),e(Gs,_h),e(Gs,Ii),e(Ii,vh),e(Gs,kh),e(kn,Th),e(kn,An),w(Zs,An,null),e(An,Fh),e(An,Xl),e(Xl,yh),e(An,wh),w(po,An,null),e(An,bh),e(An,mt),e(mt,$h),e(mt,Jl),e(Jl,Eh),e(mt,Mh),e(mt,ed),e(ed,zh),e(mt,qh),_(s,op,k),_(s,gt,k),e(gt,uo),e(uo,nd),w(Xs,nd,null),e(gt,Ph),e(gt,td),e(td,Ch),_(s,sp,k),_(s,_t,k),w(Js,_t,null),e(_t,xh),e(_t,er),e(er,jh),e(er,Si),e(Si,Oh),e(er,Lh),_(s,rp,k),_(s,vt,k),w(nr,vt,null),e(vt,Dh),e(vt,tr),e(tr,Ah),e(tr,Bi),e(Bi,Nh),e(tr,Ih),_(s,ap,k),_(s,kt,k),e(kt,fo),e(fo,od),w(or,od,null),e(kt,Sh),e(kt,sd),e(sd,Bh),_(s,ip,k),_(s,un,k),w(sr,un,null),e(un,Wh),e(un,rd),e(rd,Qh),e(un,Kh),e(un,rr),e(rr,Uh),e(rr,ar),e(ar,Rh),e(rr,Vh),e(un,Hh),e(un,ir),e(ir,Yh),e(ir,Wi),e(Wi,Gh),e(ir,Zh),e(un,Xh),e(un,lr),e(lr,Jh),e(lr,dr),e(dr,em),e(lr,nm),e(un,tm),e(un,Nn),w(cr,Nn,null),e(Nn,om),e(Nn,Tt),e(Tt,sm),e(Tt,Qi),e(Qi,rm),e(Tt,am),e(Tt,ad),e(ad,im),e(Tt,lm),e(Nn,dm),w(ho,Nn,null),e(Nn,cm),w(mo,Nn,null),_(s,lp,k),_(s,Ft,k),e(Ft,go),e(go,id),w(pr,id,null),e(Ft,pm),e(Ft,ld),e(ld,um),_(s,dp,k),_(s,fn,k),w(ur,fn,null),e(fn,fm),e(fn,dd),e(dd,hm),e(fn,mm),e(fn,fr),e(fr,gm),e(fr,hr),e(hr,_m),e(fr,vm),e(fn,km),e(fn,mr),e(mr,Tm),e(mr,Ki),e(Ki,Fm),e(mr,ym),e(fn,wm),e(fn,gr),e(gr,bm),e(gr,_r),e(_r,$m),e(gr,Em),e(fn,Mm),e(fn,In),w(vr,In,null),e(In,zm),e(In,yt),e(yt,qm),e(yt,Ui),e(Ui,Pm),e(yt,Cm),e(yt,cd),e(cd,xm),e(yt,jm),e(In,Om),w(_o,In,null),e(In,Lm),w(vo,In,null),_(s,cp,k),_(s,wt,k),e(wt,ko),e(ko,pd),w(kr,pd,null),e(wt,Dm),e(wt,ud),e(ud,Am),_(s,pp,k),_(s,bt,k),w(Tr,bt,null),e(bt,Nm),e(bt,Sn),w(Fr,Sn,null),e(Sn,Im),e(Sn,$t),e($t,Sm),e($t,Ri),e(Ri,Bm),e($t,Wm),e($t,fd),e(fd,Qm),e($t,Km),e(Sn,Um),w(To,Sn,null),e(Sn,Rm),w(Fo,Sn,null),_(s,up,k),_(s,Et,k),e(Et,yo),e(yo,hd),w(yr,hd,null),e(Et,Vm),e(Et,md),e(md,Hm),_(s,fp,k),_(s,hn,k),w(wr,hn,null),e(hn,Ym),e(hn,br),e(br,Gm),e(br,gd),e(gd,Zm),e(br,Xm),e(hn,Jm),e(hn,$r),e($r,eg),e($r,Er),e(Er,ng),e($r,tg),e(hn,og),e(hn,Mr),e(Mr,sg),e(Mr,Vi),e(Vi,rg),e(Mr,ag),e(hn,ig),e(hn,zr),e(zr,lg),e(zr,qr),e(qr,dg),e(zr,cg),e(hn,pg),e(hn,Tn),w(Pr,Tn,null),e(Tn,ug),e(Tn,Mt),e(Mt,fg),e(Mt,Hi),e(Hi,hg),e(Mt,mg),e(Mt,_d),e(_d,gg),e(Mt,_g),e(Tn,vg),w(wo,Tn,null),e(Tn,kg),w(bo,Tn,null),e(Tn,Tg),w($o,Tn,null),_(s,hp,k),_(s,zt,k),e(zt,Eo),e(Eo,vd),w(Cr,vd,null),e(zt,Fg),e(zt,kd),e(kd,yg),_(s,mp,k),_(s,mn,k),w(xr,mn,null),e(mn,wg),e(mn,Td),e(Td,bg),e(mn,$g),e(mn,jr),e(jr,Eg),e(jr,Or),e(Or,Mg),e(jr,zg),e(mn,qg),e(mn,Lr),e(Lr,Pg),e(Lr,Yi),e(Yi,Cg),e(Lr,xg),e(mn,jg),e(mn,Dr),e(Dr,Og),e(Dr,Ar),e(Ar,Lg),e(Dr,Dg),e(mn,Ag),e(mn,pn),w(Nr,pn,null),e(pn,Ng),e(pn,qt),e(qt,Ig),e(qt,Gi),e(Gi,Sg),e(qt,Bg),e(qt,Fd),e(Fd,Wg),e(qt,Qg),e(pn,Kg),w(Mo,pn,null),e(pn,Ug),w(zo,pn,null),e(pn,Rg),w(qo,pn,null),e(pn,Vg),w(Po,pn,null),e(pn,Hg),w(Co,pn,null),_(s,gp,k),_(s,Pt,k),e(Pt,xo),e(xo,yd),w(Ir,yd,null),e(Pt,Yg),e(Pt,wd),e(wd,Gg),_(s,_p,k),_(s,gn,k),w(Sr,gn,null),e(gn,Zg),e(gn,bd),e(bd,Xg),e(gn,Jg),e(gn,Br),e(Br,e_),e(Br,Wr),e(Wr,n_),e(Br,t_),e(gn,o_),e(gn,Qr),e(Qr,s_),e(Qr,Zi),e(Zi,r_),e(Qr,a_),e(gn,i_),e(gn,Kr),e(Kr,l_),e(Kr,Ur),e(Ur,d_),e(Kr,c_),e(gn,p_),e(gn,Bn),w(Rr,Bn,null),e(Bn,u_),e(Bn,Ct),e(Ct,f_),e(Ct,Xi),e(Xi,h_),e(Ct,m_),e(Ct,$d),e($d,g_),e(Ct,__),e(Bn,v_),w(jo,Bn,null),e(Bn,k_),w(Oo,Bn,null),_(s,vp,k),_(s,xt,k),e(xt,Lo),e(Lo,Ed),w(Vr,Ed,null),e(xt,T_),e(xt,Md),e(Md,F_),_(s,kp,k),_(s,_n,k),w(Hr,_n,null),e(_n,y_),e(_n,zd),e(zd,w_),e(_n,b_),e(_n,Yr),e(Yr,$_),e(Yr,Gr),e(Gr,E_),e(Yr,M_),e(_n,z_),e(_n,Zr),e(Zr,q_),e(Zr,Ji),e(Ji,P_),e(Zr,C_),e(_n,x_),e(_n,Xr),e(Xr,j_),e(Xr,Jr),e(Jr,O_),e(Xr,L_),e(_n,D_),e(_n,Fn),w(ea,Fn,null),e(Fn,A_),e(Fn,jt),e(jt,N_),e(jt,el),e(el,I_),e(jt,S_),e(jt,qd),e(qd,B_),e(jt,W_),e(Fn,Q_),w(Do,Fn,null),e(Fn,K_),w(Ao,Fn,null),e(Fn,U_),w(No,Fn,null),_(s,Tp,k),_(s,Ot,k),e(Ot,Io),e(Io,Pd),w(na,Pd,null),e(Ot,R_),e(Ot,Cd),e(Cd,V_),_(s,Fp,k),_(s,vn,k),w(ta,vn,null),e(vn,H_),e(vn,Lt),e(Lt,Y_),e(Lt,xd),e(xd,G_),e(Lt,Z_),e(Lt,jd),e(jd,X_),e(Lt,J_),e(vn,ev),e(vn,oa),e(oa,nv),e(oa,sa),e(sa,tv),e(oa,ov),e(vn,sv),e(vn,ra),e(ra,rv),e(ra,nl),e(nl,av),e(ra,iv),e(vn,lv),e(vn,aa),e(aa,dv),e(aa,ia),e(ia,cv),e(aa,pv),e(vn,uv),e(vn,yn),w(la,yn,null),e(yn,fv),e(yn,Dt),e(Dt,hv),e(Dt,tl),e(tl,mv),e(Dt,gv),e(Dt,Od),e(Od,_v),e(Dt,vv),e(yn,kv),w(So,yn,null),e(yn,Tv),w(Bo,yn,null),e(yn,Fv),w(Wo,yn,null),_(s,yp,k),_(s,At,k),e(At,Qo),e(Qo,Ld),w(da,Ld,null),e(At,yv),e(At,Dd),e(Dd,wv),_(s,wp,k),_(s,nn,k),w(ca,nn,null),e(nn,bv),e(nn,Ad),e(Ad,$v),e(nn,Ev),e(nn,pa),e(pa,Mv),e(pa,ua),e(ua,zv),e(pa,qv),e(nn,Pv),e(nn,fa),e(fa,Cv),e(fa,ol),e(ol,xv),e(fa,jv),e(nn,Ov),e(nn,ha),e(ha,Lv),e(ha,ma),e(ma,Dv),e(ha,Av),e(nn,Nv),w(Ko,nn,null),e(nn,Iv),e(nn,Wn),w(ga,Wn,null),e(Wn,Sv),e(Wn,Nt),e(Nt,Bv),e(Nt,sl),e(sl,Wv),e(Nt,Qv),e(Nt,Nd),e(Nd,Kv),e(Nt,Uv),e(Wn,Rv),w(Uo,Wn,null),e(Wn,Vv),w(Ro,Wn,null),_(s,bp,k),_(s,It,k),e(It,Vo),e(Vo,Id),w(_a,Id,null),e(It,Hv),e(It,Sd),e(Sd,Yv),_(s,$p,k),_(s,tn,k),w(va,tn,null),e(tn,Gv),e(tn,Bd),e(Bd,Zv),e(tn,Xv),e(tn,ka),e(ka,Jv),e(ka,Ta),e(Ta,ek),e(ka,nk),e(tn,tk),e(tn,Fa),e(Fa,ok),e(Fa,rl),e(rl,sk),e(Fa,rk),e(tn,ak),e(tn,ya),e(ya,ik),e(ya,wa),e(wa,lk),e(ya,dk),e(tn,ck),w(Ho,tn,null),e(tn,pk),e(tn,Qn),w(ba,Qn,null),e(Qn,uk),e(Qn,St),e(St,fk),e(St,al),e(al,hk),e(St,mk),e(St,Wd),e(Wd,gk),e(St,_k),e(Qn,vk),w(Yo,Qn,null),e(Qn,kk),w(Go,Qn,null),_(s,Ep,k),_(s,Bt,k),e(Bt,Zo),e(Zo,Qd),w($a,Qd,null),e(Bt,Tk),e(Bt,Kd),e(Kd,Fk),_(s,Mp,k),_(s,on,k),w(Ea,on,null),e(on,yk),e(on,Ud),e(Ud,wk),e(on,bk),e(on,Ma),e(Ma,$k),e(Ma,za),e(za,Ek),e(Ma,Mk),e(on,zk),e(on,qa),e(qa,qk),e(qa,il),e(il,Pk),e(qa,Ck),e(on,xk),e(on,Pa),e(Pa,jk),e(Pa,Ca),e(Ca,Ok),e(Pa,Lk),e(on,Dk),w(Xo,on,null),e(on,Ak),e(on,Kn),w(xa,Kn,null),e(Kn,Nk),e(Kn,Wt),e(Wt,Ik),e(Wt,ll),e(ll,Sk),e(Wt,Bk),e(Wt,Rd),e(Rd,Wk),e(Wt,Qk),e(Kn,Kk),w(Jo,Kn,null),e(Kn,Uk),w(es,Kn,null),_(s,zp,k),_(s,Qt,k),e(Qt,ns),e(ns,Vd),w(ja,Vd,null),e(Qt,Rk),e(Qt,Hd),e(Hd,Vk),_(s,qp,k),_(s,sn,k),w(Oa,sn,null),e(sn,Hk),e(sn,La),e(La,Yk),e(La,Yd),e(Yd,Gk),e(La,Zk),e(sn,Xk),e(sn,Da),e(Da,Jk),e(Da,Aa),e(Aa,eT),e(Da,nT),e(sn,tT),e(sn,Na),e(Na,oT),e(Na,dl),e(dl,sT),e(Na,rT),e(sn,aT),e(sn,Ia),e(Ia,iT),e(Ia,Sa),e(Sa,lT),e(Ia,dT),e(sn,cT),w(ts,sn,null),e(sn,pT),e(sn,wn),w(Ba,wn,null),e(wn,uT),e(wn,Kt),e(Kt,fT),e(Kt,cl),e(cl,hT),e(Kt,mT),e(Kt,Gd),e(Gd,gT),e(Kt,_T),e(wn,vT),w(os,wn,null),e(wn,kT),w(ss,wn,null),e(wn,TT),w(rs,wn,null),_(s,Pp,k),_(s,Ut,k),e(Ut,as),e(as,Zd),w(Wa,Zd,null),e(Ut,FT),e(Ut,Xd),e(Xd,yT),_(s,Cp,k),_(s,rn,k),w(Qa,rn,null),e(rn,wT),e(rn,Jd),e(Jd,bT),e(rn,$T),e(rn,Ka),e(Ka,ET),e(Ka,Ua),e(Ua,MT),e(Ka,zT),e(rn,qT),e(rn,Ra),e(Ra,PT),e(Ra,pl),e(pl,CT),e(Ra,xT),e(rn,jT),e(rn,Va),e(Va,OT),e(Va,Ha),e(Ha,LT),e(Va,DT),e(rn,AT),w(is,rn,null),e(rn,NT),e(rn,bn),w(Ya,bn,null),e(bn,IT),e(bn,Rt),e(Rt,ST),e(Rt,ul),e(ul,BT),e(Rt,WT),e(Rt,ec),e(ec,QT),e(Rt,KT),e(bn,UT),w(ls,bn,null),e(bn,RT),w(ds,bn,null),e(bn,VT),w(cs,bn,null),_(s,xp,k),_(s,Vt,k),e(Vt,ps),e(ps,nc),w(Ga,nc,null),e(Vt,HT),e(Vt,tc),e(tc,YT),_(s,jp,k),_(s,an,k),w(Za,an,null),e(an,GT),e(an,oc),e(oc,ZT),e(an,XT),e(an,Xa),e(Xa,JT),e(Xa,Ja),e(Ja,eF),e(Xa,nF),e(an,tF),e(an,ei),e(ei,oF),e(ei,fl),e(fl,sF),e(ei,rF),e(an,aF),e(an,ni),e(ni,iF),e(ni,ti),e(ti,lF),e(ni,dF),e(an,cF),w(us,an,null),e(an,pF),e(an,Un),w(oi,Un,null),e(Un,uF),e(Un,Ht),e(Ht,fF),e(Ht,hl),e(hl,hF),e(Ht,mF),e(Ht,sc),e(sc,gF),e(Ht,_F),e(Un,vF),w(fs,Un,null),e(Un,kF),w(hs,Un,null),_(s,Op,k),_(s,Yt,k),e(Yt,ms),e(ms,rc),w(si,rc,null),e(Yt,TF),e(Yt,ac),e(ac,FF),_(s,Lp,k),_(s,ln,k),w(ri,ln,null),e(ln,yF),e(ln,ic),e(ic,wF),e(ln,bF),e(ln,ai),e(ai,$F),e(ai,ii),e(ii,EF),e(ai,MF),e(ln,zF),e(ln,li),e(li,qF),e(li,ml),e(ml,PF),e(li,CF),e(ln,xF),e(ln,di),e(di,jF),e(di,ci),e(ci,OF),e(di,LF),e(ln,DF),w(gs,ln,null),e(ln,AF),e(ln,$n),w(pi,$n,null),e($n,NF),e($n,Gt),e(Gt,IF),e(Gt,gl),e(gl,SF),e(Gt,BF),e(Gt,lc),e(lc,WF),e(Gt,QF),e($n,KF),w(_s,$n,null),e($n,UF),w(vs,$n,null),e($n,RF),w(ks,$n,null),_(s,Dp,k),_(s,Zt,k),e(Zt,Ts),e(Ts,dc),w(ui,dc,null),e(Zt,VF),e(Zt,cc),e(cc,HF),_(s,Ap,k),_(s,dn,k),w(fi,dn,null),e(dn,YF),e(dn,Xt),e(Xt,GF),e(Xt,pc),e(pc,ZF),e(Xt,XF),e(Xt,uc),e(uc,JF),e(Xt,ey),e(dn,ny),e(dn,hi),e(hi,ty),e(hi,mi),e(mi,oy),e(hi,sy),e(dn,ry),e(dn,gi),e(gi,ay),e(gi,_l),e(_l,iy),e(gi,ly),e(dn,dy),e(dn,_i),e(_i,cy),e(_i,vi),e(vi,py),e(_i,uy),e(dn,fy),w(Fs,dn,null),e(dn,hy),e(dn,En),w(ki,En,null),e(En,my),e(En,Jt),e(Jt,gy),e(Jt,vl),e(vl,_y),e(Jt,vy),e(Jt,fc),e(fc,ky),e(Jt,Ty),e(En,Fy),w(ys,En,null),e(En,yy),w(ws,En,null),e(En,wy),w(bs,En,null),Np=!0},p(s,[k]){const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:s}),io.$set(Ti);const hc={};k&2&&(hc.$$scope={dirty:k,ctx:s}),po.$set(hc);const mc={};k&2&&(mc.$$scope={dirty:k,ctx:s}),ho.$set(mc);const gc={};k&2&&(gc.$$scope={dirty:k,ctx:s}),mo.$set(gc);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:s}),_o.$set(Fi);const _c={};k&2&&(_c.$$scope={dirty:k,ctx:s}),vo.$set(_c);const vc={};k&2&&(vc.$$scope={dirty:k,ctx:s}),To.$set(vc);const kc={};k&2&&(kc.$$scope={dirty:k,ctx:s}),Fo.$set(kc);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:s}),wo.$set(yi);const Tc={};k&2&&(Tc.$$scope={dirty:k,ctx:s}),bo.$set(Tc);const Fc={};k&2&&(Fc.$$scope={dirty:k,ctx:s}),$o.$set(Fc);const yc={};k&2&&(yc.$$scope={dirty:k,ctx:s}),Mo.$set(yc);const wc={};k&2&&(wc.$$scope={dirty:k,ctx:s}),zo.$set(wc);const bc={};k&2&&(bc.$$scope={dirty:k,ctx:s}),qo.$set(bc);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:s}),Po.$set(wi);const $c={};k&2&&($c.$$scope={dirty:k,ctx:s}),Co.$set($c);const en={};k&2&&(en.$$scope={dirty:k,ctx:s}),jo.$set(en);const Ec={};k&2&&(Ec.$$scope={dirty:k,ctx:s}),Oo.$set(Ec);const Mc={};k&2&&(Mc.$$scope={dirty:k,ctx:s}),Do.$set(Mc);const zc={};k&2&&(zc.$$scope={dirty:k,ctx:s}),Ao.$set(zc);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:s}),No.$set(qc);const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:s}),So.$set(Pc);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:s}),Bo.$set(Cc);const xc={};k&2&&(xc.$$scope={dirty:k,ctx:s}),Wo.$set(xc);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:s}),Ko.$set(jc);const eo={};k&2&&(eo.$$scope={dirty:k,ctx:s}),Uo.$set(eo);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:s}),Ro.$set(Oc);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:s}),Ho.$set(Lc);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:s}),Yo.$set(bi);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:s}),Go.$set(Dc);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:s}),Xo.$set(Ac);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:s}),Jo.$set(Nc);const no={};k&2&&(no.$$scope={dirty:k,ctx:s}),es.$set(no);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:s}),ts.$set(nt);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:s}),os.$set(Ic);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:s}),ss.$set(Sc);const Bc={};k&2&&(Bc.$$scope={dirty:k,ctx:s}),rs.$set(Bc);const to={};k&2&&(to.$$scope={dirty:k,ctx:s}),is.$set(to);const Wc={};k&2&&(Wc.$$scope={dirty:k,ctx:s}),ls.$set(Wc);const Qc={};k&2&&(Qc.$$scope={dirty:k,ctx:s}),ds.$set(Qc);const $i={};k&2&&($i.$$scope={dirty:k,ctx:s}),cs.$set($i);const Kc={};k&2&&(Kc.$$scope={dirty:k,ctx:s}),us.$set(Kc);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:s}),fs.$set(Uc);const Rc={};k&2&&(Rc.$$scope={dirty:k,ctx:s}),hs.$set(Rc);const cn={};k&2&&(cn.$$scope={dirty:k,ctx:s}),gs.$set(cn);const Vc={};k&2&&(Vc.$$scope={dirty:k,ctx:s}),_s.$set(Vc);const $s={};k&2&&($s.$$scope={dirty:k,ctx:s}),vs.$set($s);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:s}),ks.$set(Hc);const Yc={};k&2&&(Yc.$$scope={dirty:k,ctx:s}),Fs.$set(Yc);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:s}),ys.$set(Ei);const Gc={};k&2&&(Gc.$$scope={dirty:k,ctx:s}),ws.$set(Gc);const oo={};k&2&&(oo.$$scope={dirty:k,ctx:s}),bs.$set(oo)},i(s){Np||(b(l.$$.fragment,s),b(M.$$.fragment,s),b(ie.$$.fragment,s),b(Ds.$$.fragment,s),b(Ns.$$.fragment,s),b(Is.$$.fragment,s),b(Bs.$$.fragment,s),b(Qs.$$.fragment,s),b(Us.$$.fragment,s),b(io.$$.fragment,s),b(Rs.$$.fragment,s),b(Vs.$$.fragment,s),b(Hs.$$.fragment,s),b(Zs.$$.fragment,s),b(po.$$.fragment,s),b(Xs.$$.fragment,s),b(Js.$$.fragment,s),b(nr.$$.fragment,s),b(or.$$.fragment,s),b(sr.$$.fragment,s),b(cr.$$.fragment,s),b(ho.$$.fragment,s),b(mo.$$.fragment,s),b(pr.$$.fragment,s),b(ur.$$.fragment,s),b(vr.$$.fragment,s),b(_o.$$.fragment,s),b(vo.$$.fragment,s),b(kr.$$.fragment,s),b(Tr.$$.fragment,s),b(Fr.$$.fragment,s),b(To.$$.fragment,s),b(Fo.$$.fragment,s),b(yr.$$.fragment,s),b(wr.$$.fragment,s),b(Pr.$$.fragment,s),b(wo.$$.fragment,s),b(bo.$$.fragment,s),b($o.$$.fragment,s),b(Cr.$$.fragment,s),b(xr.$$.fragment,s),b(Nr.$$.fragment,s),b(Mo.$$.fragment,s),b(zo.$$.fragment,s),b(qo.$$.fragment,s),b(Po.$$.fragment,s),b(Co.$$.fragment,s),b(Ir.$$.fragment,s),b(Sr.$$.fragment,s),b(Rr.$$.fragment,s),b(jo.$$.fragment,s),b(Oo.$$.fragment,s),b(Vr.$$.fragment,s),b(Hr.$$.fragment,s),b(ea.$$.fragment,s),b(Do.$$.fragment,s),b(Ao.$$.fragment,s),b(No.$$.fragment,s),b(na.$$.fragment,s),b(ta.$$.fragment,s),b(la.$$.fragment,s),b(So.$$.fragment,s),b(Bo.$$.fragment,s),b(Wo.$$.fragment,s),b(da.$$.fragment,s),b(ca.$$.fragment,s),b(Ko.$$.fragment,s),b(ga.$$.fragment,s),b(Uo.$$.fragment,s),b(Ro.$$.fragment,s),b(_a.$$.fragment,s),b(va.$$.fragment,s),b(Ho.$$.fragment,s),b(ba.$$.fragment,s),b(Yo.$$.fragment,s),b(Go.$$.fragment,s),b($a.$$.fragment,s),b(Ea.$$.fragment,s),b(Xo.$$.fragment,s),b(xa.$$.fragment,s),b(Jo.$$.fragment,s),b(es.$$.fragment,s),b(ja.$$.fragment,s),b(Oa.$$.fragment,s),b(ts.$$.fragment,s),b(Ba.$$.fragment,s),b(os.$$.fragment,s),b(ss.$$.fragment,s),b(rs.$$.fragment,s),b(Wa.$$.fragment,s),b(Qa.$$.fragment,s),b(is.$$.fragment,s),b(Ya.$$.fragment,s),b(ls.$$.fragment,s),b(ds.$$.fragment,s),b(cs.$$.fragment,s),b(Ga.$$.fragment,s),b(Za.$$.fragment,s),b(us.$$.fragment,s),b(oi.$$.fragment,s),b(fs.$$.fragment,s),b(hs.$$.fragment,s),b(si.$$.fragment,s),b(ri.$$.fragment,s),b(gs.$$.fragment,s),b(pi.$$.fragment,s),b(_s.$$.fragment,s),b(vs.$$.fragment,s),b(ks.$$.fragment,s),b(ui.$$.fragment,s),b(fi.$$.fragment,s),b(Fs.$$.fragment,s),b(ki.$$.fragment,s),b(ys.$$.fragment,s),b(ws.$$.fragment,s),b(bs.$$.fragment,s),Np=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(ie.$$.fragment,s),$(Ds.$$.fragment,s),$(Ns.$$.fragment,s),$(Is.$$.fragment,s),$(Bs.$$.fragment,s),$(Qs.$$.fragment,s),$(Us.$$.fragment,s),$(io.$$.fragment,s),$(Rs.$$.fragment,s),$(Vs.$$.fragment,s),$(Hs.$$.fragment,s),$(Zs.$$.fragment,s),$(po.$$.fragment,s),$(Xs.$$.fragment,s),$(Js.$$.fragment,s),$(nr.$$.fragment,s),$(or.$$.fragment,s),$(sr.$$.fragment,s),$(cr.$$.fragment,s),$(ho.$$.fragment,s),$(mo.$$.fragment,s),$(pr.$$.fragment,s),$(ur.$$.fragment,s),$(vr.$$.fragment,s),$(_o.$$.fragment,s),$(vo.$$.fragment,s),$(kr.$$.fragment,s),$(Tr.$$.fragment,s),$(Fr.$$.fragment,s),$(To.$$.fragment,s),$(Fo.$$.fragment,s),$(yr.$$.fragment,s),$(wr.$$.fragment,s),$(Pr.$$.fragment,s),$(wo.$$.fragment,s),$(bo.$$.fragment,s),$($o.$$.fragment,s),$(Cr.$$.fragment,s),$(xr.$$.fragment,s),$(Nr.$$.fragment,s),$(Mo.$$.fragment,s),$(zo.$$.fragment,s),$(qo.$$.fragment,s),$(Po.$$.fragment,s),$(Co.$$.fragment,s),$(Ir.$$.fragment,s),$(Sr.$$.fragment,s),$(Rr.$$.fragment,s),$(jo.$$.fragment,s),$(Oo.$$.fragment,s),$(Vr.$$.fragment,s),$(Hr.$$.fragment,s),$(ea.$$.fragment,s),$(Do.$$.fragment,s),$(Ao.$$.fragment,s),$(No.$$.fragment,s),$(na.$$.fragment,s),$(ta.$$.fragment,s),$(la.$$.fragment,s),$(So.$$.fragment,s),$(Bo.$$.fragment,s),$(Wo.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Ko.$$.fragment,s),$(ga.$$.fragment,s),$(Uo.$$.fragment,s),$(Ro.$$.fragment,s),$(_a.$$.fragment,s),$(va.$$.fragment,s),$(Ho.$$.fragment,s),$(ba.$$.fragment,s),$(Yo.$$.fragment,s),$(Go.$$.fragment,s),$($a.$$.fragment,s),$(Ea.$$.fragment,s),$(Xo.$$.fragment,s),$(xa.$$.fragment,s),$(Jo.$$.fragment,s),$(es.$$.fragment,s),$(ja.$$.fragment,s),$(Oa.$$.fragment,s),$(ts.$$.fragment,s),$(Ba.$$.fragment,s),$(os.$$.fragment,s),$(ss.$$.fragment,s),$(rs.$$.fragment,s),$(Wa.$$.fragment,s),$(Qa.$$.fragment,s),$(is.$$.fragment,s),$(Ya.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(Ga.$$.fragment,s),$(Za.$$.fragment,s),$(us.$$.fragment,s),$(oi.$$.fragment,s),$(fs.$$.fragment,s),$(hs.$$.fragment,s),$(si.$$.fragment,s),$(ri.$$.fragment,s),$(gs.$$.fragment,s),$(pi.$$.fragment,s),$(_s.$$.fragment,s),$(vs.$$.fragment,s),$(ks.$$.fragment,s),$(ui.$$.fragment,s),$(fi.$$.fragment,s),$(Fs.$$.fragment,s),$(ki.$$.fragment,s),$(ys.$$.fragment,s),$(ws.$$.fragment,s),$(bs.$$.fragment,s),Np=!1},d(s){n(d),s&&n(v),s&&n(c),E(l),s&&n(fe),s&&n(I),E(M),s&&n(he),s&&n(B),s&&n(me),s&&n(Q),s&&n(ge),s&&n(K),s&&n(oe),s&&n(x),s&&n(_e),s&&n(W),s&&n(q),s&&n(Oe),s&&n(Ne),s&&n(S),E(ie),s&&n(Xc),s&&n(Jn),E(Ds),s&&n(Jc),s&&n(ut),E(Ns),s&&n(ep),s&&n(Je),E(Is),E(Bs),E(Qs),E(Us),E(io),E(Rs),s&&n(np),s&&n(ht),E(Vs),s&&n(tp),s&&n(kn),E(Hs),E(Zs),E(po),s&&n(op),s&&n(gt),E(Xs),s&&n(sp),s&&n(_t),E(Js),s&&n(rp),s&&n(vt),E(nr),s&&n(ap),s&&n(kt),E(or),s&&n(ip),s&&n(un),E(sr),E(cr),E(ho),E(mo),s&&n(lp),s&&n(Ft),E(pr),s&&n(dp),s&&n(fn),E(ur),E(vr),E(_o),E(vo),s&&n(cp),s&&n(wt),E(kr),s&&n(pp),s&&n(bt),E(Tr),E(Fr),E(To),E(Fo),s&&n(up),s&&n(Et),E(yr),s&&n(fp),s&&n(hn),E(wr),E(Pr),E(wo),E(bo),E($o),s&&n(hp),s&&n(zt),E(Cr),s&&n(mp),s&&n(mn),E(xr),E(Nr),E(Mo),E(zo),E(qo),E(Po),E(Co),s&&n(gp),s&&n(Pt),E(Ir),s&&n(_p),s&&n(gn),E(Sr),E(Rr),E(jo),E(Oo),s&&n(vp),s&&n(xt),E(Vr),s&&n(kp),s&&n(_n),E(Hr),E(ea),E(Do),E(Ao),E(No),s&&n(Tp),s&&n(Ot),E(na),s&&n(Fp),s&&n(vn),E(ta),E(la),E(So),E(Bo),E(Wo),s&&n(yp),s&&n(At),E(da),s&&n(wp),s&&n(nn),E(ca),E(Ko),E(ga),E(Uo),E(Ro),s&&n(bp),s&&n(It),E(_a),s&&n($p),s&&n(tn),E(va),E(Ho),E(ba),E(Yo),E(Go),s&&n(Ep),s&&n(Bt),E($a),s&&n(Mp),s&&n(on),E(Ea),E(Xo),E(xa),E(Jo),E(es),s&&n(zp),s&&n(Qt),E(ja),s&&n(qp),s&&n(sn),E(Oa),E(ts),E(Ba),E(os),E(ss),E(rs),s&&n(Pp),s&&n(Ut),E(Wa),s&&n(Cp),s&&n(rn),E(Qa),E(is),E(Ya),E(ls),E(ds),E(cs),s&&n(xp),s&&n(Vt),E(Ga),s&&n(jp),s&&n(an),E(Za),E(us),E(oi),E(fs),E(hs),s&&n(Op),s&&n(Yt),E(si),s&&n(Lp),s&&n(ln),E(ri),E(gs),E(pi),E(_s),E(vs),E(ks),s&&n(Dp),s&&n(Zt),E(ui),s&&n(Ap),s&&n(dn),E(fi),E(Fs),E(ki),E(ys),E(ws),E(bs)}}}const j1={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function O1(P){return j2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B1 extends q2{constructor(d){super();P2(this,d,O1,x1,C2,{})}}export{B1 as default,j1 as metadata};
