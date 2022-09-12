import{S as q$,i as P$,s as C$,e as r,k as u,w as y,t,M as x$,c as a,d as n,m as f,a as i,x as w,h as o,b as m,G as e,g as _,y as b,q as v,o as $,B as E,v as j$,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function O$(P){let d,k,c,h,F;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Transformer sequence pair mask has the following format:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function L$(P){let d,k,c,h,F;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Transformer sequence pair mask has the following format:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function D$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function A$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function N$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function I$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function S$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function B$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Examples:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function W$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function Q$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function K$(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function U$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function R$(P){let d,k,c,h,F;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of single-label classification:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example of single-label classification:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function V$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function H$(P){let d,k,c,h,F;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of multi-label classification:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example of multi-label classification:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Y$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function G$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function Z$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function X$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function J$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function e1(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function n1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function t1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function o1(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function s1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function r1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function a1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function i1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function l1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function d1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function c1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function p1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function u1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Examples:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function f1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function h1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function m1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function g1(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function _1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function k1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function T1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function F1(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function y1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function w1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function b1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function v1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function $1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function E1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function M1(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function z1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=u(),p=r("ul"),C=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=u(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),pe=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=u(),x=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),ue=t("input_ids"),$e=t(" only and nothing else: "),H=r("code"),R=t("model(input_ids)"),Ee=u(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=u(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),L=r("p"),Ce=t(`Note that when creating models and layers with
`),D=r("a"),xe=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),p=a(g,"UL",{});var J=i(p);C=a(J,"LI",{});var Qe=i(C);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a(q,"CODE",{});var De=i(V);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var Ve=i(K);pe=o(Ve,"Functional"),Ve.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),x=a(g,"UL",{});var A=i(x);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var He=i(W);ue=o(He,"input_ids"),He.forEach(n),$e=o(X," only and nothing else: "),H=a(X,"CODE",{});var Ne=i(H);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);Ce=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);xe=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,p,z),e(p,C),e(C,ke),e(p,fe),e(p,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,V),e(V,we),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,pe),e(M,ve),_(g,oe,z),_(g,x,z),e(x,O),e(O,_e),e(O,W),e(W,ue),e(O,$e),e(O,H),e(H,R),e(x,Ee),e(x,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(x,qe),e(x,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,Ce),e(L,D),e(D,xe),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(p),g&&n(ee),g&&n(M),g&&n(oe),g&&n(x),g&&n(ne),g&&n(L)}}}function q1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);h=o(C,"Module"),C.forEach(n),F=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(n)},m(l,p){_(l,d,p),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function P1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=u(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=o(p,"Example:"),p.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,k),_(l,c,p),b(h,l,p),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function C1(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function x1(P){let d,k,c,h,F,l,p,C,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,V,we,me,Q,be,ge,K,pe,ve,oe,x,O,_e,W,ue,$e,H,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,Ce,D,xe,je,g,z,We,J,Qe,Ke,q,Oe,Ue,De,Re,Ve,A,X,He,Ne,S,Le,Ae,ie,Ye,te,Ge,Xc,Jn,Ds,af,et,lf,Mi,df,cf,zi,pf,uf,As,ff,hf,mf,pt,gf,qi,_f,kf,Pi,Tf,Ff,Jc,ut,so,Il,Ns,yf,Sl,wf,ep,Je,Is,bf,Bl,vf,$f,ro,Ci,Ef,Mf,xi,zf,qf,Pf,Ss,Cf,ji,xf,jf,Of,tt,Bs,Lf,Wl,Df,Af,Ws,Oi,Nf,Ql,If,Sf,Li,Bf,Kl,Wf,Qf,ao,Qs,Kf,Ks,Uf,Ul,Rf,Vf,Hf,Dn,Us,Yf,Rl,Gf,Zf,io,Xf,ft,Jf,Vl,eh,nh,Hl,th,oh,sh,Di,Rs,np,ht,lo,Yl,Vs,rh,Gl,ah,tp,Tn,Hs,ih,Ys,lh,Zl,dh,ch,ph,co,Ai,uh,fh,Ni,hh,mh,gh,Gs,_h,Ii,kh,Th,Fh,An,Zs,yh,Xl,wh,bh,po,vh,mt,$h,Jl,Eh,Mh,ed,zh,qh,op,gt,uo,nd,Xs,Ph,td,Ch,sp,_t,Js,xh,er,jh,Si,Oh,Lh,rp,kt,nr,Dh,tr,Ah,Bi,Nh,Ih,ap,Tt,fo,od,or,Sh,sd,Bh,ip,un,sr,Wh,rd,Qh,Kh,rr,Uh,ar,Rh,Vh,Hh,ir,Yh,Wi,Gh,Zh,Xh,lr,Jh,dr,em,nm,tm,Nn,cr,om,Ft,sm,Qi,rm,am,ad,im,lm,dm,ho,cm,mo,lp,yt,go,id,pr,pm,ld,um,dp,fn,ur,fm,dd,hm,mm,fr,gm,hr,_m,km,Tm,mr,Fm,Ki,ym,wm,bm,gr,vm,_r,$m,Em,Mm,In,kr,zm,wt,qm,Ui,Pm,Cm,cd,xm,jm,Om,_o,Lm,ko,cp,bt,To,pd,Tr,Dm,ud,Am,pp,vt,Fr,Nm,Sn,yr,Im,$t,Sm,Ri,Bm,Wm,fd,Qm,Km,Um,Fo,Rm,yo,up,Et,wo,hd,wr,Vm,md,Hm,fp,hn,br,Ym,vr,Gm,gd,Zm,Xm,Jm,$r,eg,Er,ng,tg,og,Mr,sg,Vi,rg,ag,ig,zr,lg,qr,dg,cg,pg,Fn,Pr,ug,Mt,fg,Hi,hg,mg,_d,gg,_g,kg,bo,Tg,vo,Fg,$o,hp,zt,Eo,kd,Cr,yg,Td,wg,mp,mn,xr,bg,Fd,vg,$g,jr,Eg,Or,Mg,zg,qg,Lr,Pg,Yi,Cg,xg,jg,Dr,Og,Ar,Lg,Dg,Ag,pn,Nr,Ng,qt,Ig,Gi,Sg,Bg,yd,Wg,Qg,Kg,Mo,Ug,zo,Rg,qo,Vg,Po,Hg,Co,gp,Pt,xo,wd,Ir,Yg,bd,Gg,_p,gn,Sr,Zg,vd,Xg,Jg,Br,e_,Wr,n_,t_,o_,Qr,s_,Zi,r_,a_,i_,Kr,l_,Ur,d_,c_,p_,Bn,Rr,u_,Ct,f_,Xi,h_,m_,$d,g_,__,k_,jo,T_,Oo,kp,xt,Lo,Ed,Vr,F_,Md,y_,Tp,_n,Hr,w_,zd,b_,v_,Yr,$_,Gr,E_,M_,z_,Zr,q_,Ji,P_,C_,x_,Xr,j_,Jr,O_,L_,D_,yn,ea,A_,jt,N_,el,I_,S_,qd,B_,W_,Q_,Do,K_,Ao,U_,No,Fp,Ot,Io,Pd,na,R_,Cd,V_,yp,kn,ta,H_,Lt,Y_,xd,G_,Z_,jd,X_,J_,ek,oa,nk,sa,tk,ok,sk,ra,rk,nl,ak,ik,lk,aa,dk,ia,ck,pk,uk,wn,la,fk,Dt,hk,tl,mk,gk,Od,_k,kk,Tk,So,Fk,Bo,yk,Wo,wp,At,Qo,Ld,da,wk,Dd,bk,bp,nn,ca,vk,Ad,$k,Ek,pa,Mk,ua,zk,qk,Pk,fa,Ck,ol,xk,jk,Ok,ha,Lk,ma,Dk,Ak,Nk,Ko,Ik,Wn,ga,Sk,Nt,Bk,sl,Wk,Qk,Nd,Kk,Uk,Rk,Uo,Vk,Ro,vp,It,Vo,Id,_a,Hk,Sd,Yk,$p,tn,ka,Gk,Bd,Zk,Xk,Ta,Jk,Fa,eT,nT,tT,ya,oT,rl,sT,rT,aT,wa,iT,ba,lT,dT,cT,Ho,pT,Qn,va,uT,St,fT,al,hT,mT,Wd,gT,_T,kT,Yo,TT,Go,Ep,Bt,Zo,Qd,$a,FT,Kd,yT,Mp,on,Ea,wT,Ud,bT,vT,Ma,$T,za,ET,MT,zT,qa,qT,il,PT,CT,xT,Pa,jT,Ca,OT,LT,DT,Xo,AT,Kn,xa,NT,Wt,IT,ll,ST,BT,Rd,WT,QT,KT,Jo,UT,es,zp,Qt,ns,Vd,ja,RT,Hd,VT,qp,sn,Oa,HT,La,YT,Yd,GT,ZT,XT,Da,JT,Aa,eF,nF,tF,Na,oF,dl,sF,rF,aF,Ia,iF,Sa,lF,dF,cF,ts,pF,bn,Ba,uF,Kt,fF,cl,hF,mF,Gd,gF,_F,kF,os,TF,ss,FF,rs,Pp,Ut,as,Zd,Wa,yF,Xd,wF,Cp,rn,Qa,bF,Jd,vF,$F,Ka,EF,Ua,MF,zF,qF,Ra,PF,pl,CF,xF,jF,Va,OF,Ha,LF,DF,AF,is,NF,vn,Ya,IF,Rt,SF,ul,BF,WF,ec,QF,KF,UF,ls,RF,ds,VF,cs,xp,Vt,ps,nc,Ga,HF,tc,YF,jp,an,Za,GF,oc,ZF,XF,Xa,JF,Ja,ey,ny,ty,ei,oy,fl,sy,ry,ay,ni,iy,ti,ly,dy,cy,us,py,Un,oi,uy,Ht,fy,hl,hy,my,sc,gy,_y,ky,fs,Ty,hs,Op,Yt,ms,rc,si,Fy,ac,yy,Lp,ln,ri,wy,ic,by,vy,ai,$y,ii,Ey,My,zy,li,qy,ml,Py,Cy,xy,di,jy,ci,Oy,Ly,Dy,gs,Ay,$n,pi,Ny,Gt,Iy,gl,Sy,By,lc,Wy,Qy,Ky,_s,Uy,ks,Ry,Ts,Dp,Zt,Fs,dc,ui,Vy,cc,Hy,Ap,dn,fi,Yy,Xt,Gy,pc,Zy,Xy,uc,Jy,ew,nw,hi,tw,mi,ow,sw,rw,gi,aw,_l,iw,lw,dw,_i,cw,ki,pw,uw,fw,ys,hw,En,Ti,mw,Jt,gw,kl,_w,kw,fc,Tw,Fw,yw,ws,ww,bs,bw,vs,Np;return l=new Xe({}),M=new Xe({}),ie=new Xe({}),Ds=new se({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/configuration_funnel.py#L41"}}),Ns=new Xe({}),Is=new se({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L66"}}),Bs=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qs=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Us=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L116",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Ie({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[O$]},$$scope:{ctx:P}}}),Rs=new se({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),Vs=new Xe({}),Hs=new se({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L91"}}),Zs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L144",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),po=new Ie({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[L$]},$$scope:{ctx:P}}}),Xs=new Xe({}),Js=new se({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA-style objective.`,name:"loss"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L834"}}),nr=new se({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L978"}}),or=new Xe({}),sr=new se({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L927"}}),cr=new se({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ho=new Ze({props:{$$slots:{default:[D$]},$$scope:{ctx:P}}}),mo=new Ie({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[A$]},$$scope:{ctx:P}}}),pr=new Xe({}),ur=new se({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),kr=new se({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_o=new Ze({props:{$$slots:{default:[N$]},$$scope:{ctx:P}}}),ko=new Ie({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[I$]},$$scope:{ctx:P}}}),Tr=new Xe({}),Fr=new se({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),yr=new se({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Fo=new Ze({props:{$$slots:{default:[S$]},$$scope:{ctx:P}}}),yo=new Ie({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[B$]},$$scope:{ctx:P}}}),wr=new Xe({}),br=new se({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),Pr=new se({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bo=new Ze({props:{$$slots:{default:[W$]},$$scope:{ctx:P}}}),vo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[Q$]},$$scope:{ctx:P}}}),$o=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[K$]},$$scope:{ctx:P}}}),Cr=new Xe({}),xr=new se({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),Nr=new se({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Mo=new Ze({props:{$$slots:{default:[U$]},$$scope:{ctx:P}}}),zo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[R$]},$$scope:{ctx:P}}}),qo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[V$]},$$scope:{ctx:P}}}),Po=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[H$]},$$scope:{ctx:P}}}),Co=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[Y$]},$$scope:{ctx:P}}}),Ir=new Xe({}),Sr=new se({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Rr=new se({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),jo=new Ze({props:{$$slots:{default:[G$]},$$scope:{ctx:P}}}),Oo=new Ie({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[Z$]},$$scope:{ctx:P}}}),Vr=new Xe({}),Hr=new se({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),ea=new se({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Do=new Ze({props:{$$slots:{default:[X$]},$$scope:{ctx:P}}}),Ao=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[J$]},$$scope:{ctx:P}}}),No=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[e1]},$$scope:{ctx:P}}}),na=new Xe({}),ta=new se({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),la=new se({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),So=new Ze({props:{$$slots:{default:[n1]},$$scope:{ctx:P}}}),Bo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[t1]},$$scope:{ctx:P}}}),Wo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[o1]},$$scope:{ctx:P}}}),da=new Xe({}),ca=new se({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1100"}}),Ko=new Ze({props:{$$slots:{default:[s1]},$$scope:{ctx:P}}}),ga=new se({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1105",returnDescription:`
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
`}}),Uo=new Ze({props:{$$slots:{default:[r1]},$$scope:{ctx:P}}}),Ro=new Ie({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[a1]},$$scope:{ctx:P}}}),_a=new Xe({}),ka=new se({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1149"}}),Ho=new Ze({props:{$$slots:{default:[i1]},$$scope:{ctx:P}}}),va=new se({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1154",returnDescription:`
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
`}}),Yo=new Ze({props:{$$slots:{default:[l1]},$$scope:{ctx:P}}}),Go=new Ie({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[d1]},$$scope:{ctx:P}}}),$a=new Xe({}),Ea=new se({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1201"}}),Xo=new Ze({props:{$$slots:{default:[c1]},$$scope:{ctx:P}}}),xa=new se({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1208",returnDescription:`
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
`}}),Jo=new Ze({props:{$$slots:{default:[p1]},$$scope:{ctx:P}}}),es=new Ie({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[u1]},$$scope:{ctx:P}}}),ja=new Xe({}),Oa=new se({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1269"}}),ts=new Ze({props:{$$slots:{default:[f1]},$$scope:{ctx:P}}}),Ba=new se({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1283",returnDescription:`
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
`}}),os=new Ze({props:{$$slots:{default:[h1]},$$scope:{ctx:P}}}),ss=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[m1]},$$scope:{ctx:P}}}),rs=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[g1]},$$scope:{ctx:P}}}),Wa=new Xe({}),Qa=new se({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1348"}}),is=new Ze({props:{$$slots:{default:[_1]},$$scope:{ctx:P}}}),Ya=new se({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1356",returnDescription:`
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
`}}),ls=new Ze({props:{$$slots:{default:[k1]},$$scope:{ctx:P}}}),ds=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[T1]},$$scope:{ctx:P}}}),cs=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[F1]},$$scope:{ctx:P}}}),Ga=new Xe({}),Za=new se({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1424"}}),us=new Ze({props:{$$slots:{default:[y1]},$$scope:{ctx:P}}}),oi=new se({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1441",returnDescription:`
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
`}}),fs=new Ze({props:{$$slots:{default:[w1]},$$scope:{ctx:P}}}),hs=new Ie({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[b1]},$$scope:{ctx:P}}}),si=new Xe({}),ri=new se({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1540"}}),gs=new Ze({props:{$$slots:{default:[v1]},$$scope:{ctx:P}}}),pi=new se({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1551",returnDescription:`
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
`}}),_s=new Ze({props:{$$slots:{default:[$1]},$$scope:{ctx:P}}}),ks=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[E1]},$$scope:{ctx:P}}}),Ts=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[M1]},$$scope:{ctx:P}}}),ui=new Xe({}),fi=new se({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1618"}}),ys=new Ze({props:{$$slots:{default:[z1]},$$scope:{ctx:P}}}),Ti=new se({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1628",returnDescription:`
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
`}}),ws=new Ze({props:{$$slots:{default:[q1]},$$scope:{ctx:P}}}),bs=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[P1]},$$scope:{ctx:P}}}),vs=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[C1]},$$scope:{ctx:P}}}),{c(){d=r("meta"),k=u(),c=r("h1"),h=r("a"),F=r("span"),y(l.$$.fragment),p=u(),C=r("span"),ke=t("Funnel Transformer"),fe=u(),I=r("h2"),re=r("a"),ee=r("span"),y(M.$$.fragment),Te=u(),U=r("span"),Fe=t("Overview"),he=u(),B=r("p"),ye=t("The Funnel Transformer model was proposed in the paper "),ae=r("a"),V=t(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),we=t(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),me=u(),Q=r("p"),be=t("The abstract from the paper is the following:"),ge=u(),K=r("p"),pe=r("em"),ve=t(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
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
`),J=r("a"),Qe=t("FunnelForMultipleChoice"),Ke=t("."),q=u(),Oe=r("p"),Ue=t("This model was contributed by "),De=r("a"),Re=t("sgugger"),Ve=t(". The original code can be found "),A=r("a"),X=t("here"),He=t("."),Ne=u(),S=r("h2"),Le=r("a"),Ae=r("span"),y(ie.$$.fragment),Ye=u(),te=r("span"),Ge=t("FunnelConfig"),Xc=u(),Jn=r("div"),y(Ds.$$.fragment),af=u(),et=r("p"),lf=t("This is the configuration class to store the configuration of a "),Mi=r("a"),df=t("FunnelModel"),cf=t(" or a "),zi=r("a"),pf=t("TFBertModel"),uf=t(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=r("a"),ff=t("funnel-transformer/small"),hf=t(" architecture."),mf=u(),pt=r("p"),gf=t("Configuration objects inherit from "),qi=r("a"),_f=t("PretrainedConfig"),kf=t(` and can be used to control the model outputs. Read the
documentation from `),Pi=r("a"),Tf=t("PretrainedConfig"),Ff=t(" for more information."),Jc=u(),ut=r("h2"),so=r("a"),Il=r("span"),y(Ns.$$.fragment),yf=u(),Sl=r("span"),wf=t("FunnelTokenizer"),ep=u(),Je=r("div"),y(Is.$$.fragment),bf=u(),Bl=r("p"),vf=t("Construct a Funnel Transformer tokenizer."),$f=u(),ro=r("p"),Ci=r("a"),Ef=t("FunnelTokenizer"),Mf=t(" is identical to "),xi=r("a"),zf=t("BertTokenizer"),qf=t(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Pf=u(),Ss=r("p"),Cf=t("Refer to superclass "),ji=r("a"),xf=t("BertTokenizer"),jf=t(" for usage examples and documentation concerning parameters."),Of=u(),tt=r("div"),y(Bs.$$.fragment),Lf=u(),Wl=r("p"),Df=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Af=u(),Ws=r("ul"),Oi=r("li"),Nf=t("single sequence: "),Ql=r("code"),If=t("[CLS] X [SEP]"),Sf=u(),Li=r("li"),Bf=t("pair of sequences: "),Kl=r("code"),Wf=t("[CLS] A [SEP] B [SEP]"),Qf=u(),ao=r("div"),y(Qs.$$.fragment),Kf=u(),Ks=r("p"),Uf=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=r("code"),Rf=t("prepare_for_model"),Vf=t(" method."),Hf=u(),Dn=r("div"),y(Us.$$.fragment),Yf=u(),Rl=r("p"),Gf=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Zf=u(),y(io.$$.fragment),Xf=u(),ft=r("p"),Jf=t("If "),Vl=r("code"),eh=t("token_ids_1"),nh=t(" is "),Hl=r("code"),th=t("None"),oh=t(", this method only returns the first portion of the mask (0s)."),sh=u(),Di=r("div"),y(Rs.$$.fragment),np=u(),ht=r("h2"),lo=r("a"),Yl=r("span"),y(Vs.$$.fragment),rh=u(),Gl=r("span"),ah=t("FunnelTokenizerFast"),tp=u(),Tn=r("div"),y(Hs.$$.fragment),ih=u(),Ys=r("p"),lh=t("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),dh=t("tokenizers"),ch=t(" library)."),ph=u(),co=r("p"),Ai=r("a"),uh=t("FunnelTokenizerFast"),fh=t(" is identical to "),Ni=r("a"),hh=t("BertTokenizerFast"),mh=t(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gh=u(),Gs=r("p"),_h=t("Refer to superclass "),Ii=r("a"),kh=t("BertTokenizerFast"),Th=t(" for usage examples and documentation concerning parameters."),Fh=u(),An=r("div"),y(Zs.$$.fragment),yh=u(),Xl=r("p"),wh=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),bh=u(),y(po.$$.fragment),vh=u(),mt=r("p"),$h=t("If "),Jl=r("code"),Eh=t("token_ids_1"),Mh=t(" is "),ed=r("code"),zh=t("None"),qh=t(", this method only returns the first portion of the mask (0s)."),op=u(),gt=r("h2"),uo=r("a"),nd=r("span"),y(Xs.$$.fragment),Ph=u(),td=r("span"),Ch=t("Funnel specific outputs"),sp=u(),_t=r("div"),y(Js.$$.fragment),xh=u(),er=r("p"),jh=t("Output type of "),Si=r("a"),Oh=t("FunnelForPreTraining"),Lh=t("."),rp=u(),kt=r("div"),y(nr.$$.fragment),Dh=u(),tr=r("p"),Ah=t("Output type of "),Bi=r("a"),Nh=t("FunnelForPreTraining"),Ih=t("."),ap=u(),Tt=r("h2"),fo=r("a"),od=r("span"),y(or.$$.fragment),Sh=u(),sd=r("span"),Bh=t("FunnelBaseModel"),ip=u(),un=r("div"),y(sr.$$.fragment),Wh=u(),rd=r("p"),Qh=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Kh=u(),rr=r("p"),Uh=t("The Funnel Transformer model was proposed in "),ar=r("a"),Rh=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Vh=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Hh=u(),ir=r("p"),Yh=t("This model inherits from "),Wi=r("a"),Gh=t("PreTrainedModel"),Zh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=u(),lr=r("p"),Jh=t("This model is also a PyTorch "),dr=r("a"),em=t("torch.nn.Module"),nm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=u(),Nn=r("div"),y(cr.$$.fragment),om=u(),Ft=r("p"),sm=t("The "),Qi=r("a"),rm=t("FunnelBaseModel"),am=t(" forward method, overrides the "),ad=r("code"),im=t("__call__"),lm=t(" special method."),dm=u(),y(ho.$$.fragment),cm=u(),y(mo.$$.fragment),lp=u(),yt=r("h2"),go=r("a"),id=r("span"),y(pr.$$.fragment),pm=u(),ld=r("span"),um=t("FunnelModel"),dp=u(),fn=r("div"),y(ur.$$.fragment),fm=u(),dd=r("p"),hm=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),mm=u(),fr=r("p"),gm=t("The Funnel Transformer model was proposed in "),hr=r("a"),_m=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),km=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tm=u(),mr=r("p"),Fm=t("This model inherits from "),Ki=r("a"),ym=t("PreTrainedModel"),wm=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm=u(),gr=r("p"),vm=t("This model is also a PyTorch "),_r=r("a"),$m=t("torch.nn.Module"),Em=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mm=u(),In=r("div"),y(kr.$$.fragment),zm=u(),wt=r("p"),qm=t("The "),Ui=r("a"),Pm=t("FunnelModel"),Cm=t(" forward method, overrides the "),cd=r("code"),xm=t("__call__"),jm=t(" special method."),Om=u(),y(_o.$$.fragment),Lm=u(),y(ko.$$.fragment),cp=u(),bt=r("h2"),To=r("a"),pd=r("span"),y(Tr.$$.fragment),Dm=u(),ud=r("span"),Am=t("FunnelModelForPreTraining"),pp=u(),vt=r("div"),y(Fr.$$.fragment),Nm=u(),Sn=r("div"),y(yr.$$.fragment),Im=u(),$t=r("p"),Sm=t("The "),Ri=r("a"),Bm=t("FunnelForPreTraining"),Wm=t(" forward method, overrides the "),fd=r("code"),Qm=t("__call__"),Km=t(" special method."),Um=u(),y(Fo.$$.fragment),Rm=u(),y(yo.$$.fragment),up=u(),Et=r("h2"),wo=r("a"),hd=r("span"),y(wr.$$.fragment),Vm=u(),md=r("span"),Hm=t("FunnelForMaskedLM"),fp=u(),hn=r("div"),y(br.$$.fragment),Ym=u(),vr=r("p"),Gm=t("Funnel Transformer Model with a "),gd=r("code"),Zm=t("language modeling"),Xm=t(" head on top."),Jm=u(),$r=r("p"),eg=t("The Funnel Transformer model was proposed in "),Er=r("a"),ng=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),og=u(),Mr=r("p"),sg=t("This model inherits from "),Vi=r("a"),rg=t("PreTrainedModel"),ag=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=u(),zr=r("p"),lg=t("This model is also a PyTorch "),qr=r("a"),dg=t("torch.nn.Module"),cg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=u(),Fn=r("div"),y(Pr.$$.fragment),ug=u(),Mt=r("p"),fg=t("The "),Hi=r("a"),hg=t("FunnelForMaskedLM"),mg=t(" forward method, overrides the "),_d=r("code"),gg=t("__call__"),_g=t(" special method."),kg=u(),y(bo.$$.fragment),Tg=u(),y(vo.$$.fragment),Fg=u(),y($o.$$.fragment),hp=u(),zt=r("h2"),Eo=r("a"),kd=r("span"),y(Cr.$$.fragment),yg=u(),Td=r("span"),wg=t("FunnelForSequenceClassification"),mp=u(),mn=r("div"),y(xr.$$.fragment),bg=u(),Fd=r("p"),vg=t(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),$g=u(),jr=r("p"),Eg=t("The Funnel Transformer model was proposed in "),Or=r("a"),Mg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qg=u(),Lr=r("p"),Pg=t("This model inherits from "),Yi=r("a"),Cg=t("PreTrainedModel"),xg=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg=u(),Dr=r("p"),Og=t("This model is also a PyTorch "),Ar=r("a"),Lg=t("torch.nn.Module"),Dg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=u(),pn=r("div"),y(Nr.$$.fragment),Ng=u(),qt=r("p"),Ig=t("The "),Gi=r("a"),Sg=t("FunnelForSequenceClassification"),Bg=t(" forward method, overrides the "),yd=r("code"),Wg=t("__call__"),Qg=t(" special method."),Kg=u(),y(Mo.$$.fragment),Ug=u(),y(zo.$$.fragment),Rg=u(),y(qo.$$.fragment),Vg=u(),y(Po.$$.fragment),Hg=u(),y(Co.$$.fragment),gp=u(),Pt=r("h2"),xo=r("a"),wd=r("span"),y(Ir.$$.fragment),Yg=u(),bd=r("span"),Gg=t("FunnelForMultipleChoice"),_p=u(),gn=r("div"),y(Sr.$$.fragment),Zg=u(),vd=r("p"),Xg=t(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Jg=u(),Br=r("p"),e_=t("The Funnel Transformer model was proposed in "),Wr=r("a"),n_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),t_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),o_=u(),Qr=r("p"),s_=t("This model inherits from "),Zi=r("a"),r_=t("PreTrainedModel"),a_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=u(),Kr=r("p"),l_=t("This model is also a PyTorch "),Ur=r("a"),d_=t("torch.nn.Module"),c_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=u(),Bn=r("div"),y(Rr.$$.fragment),u_=u(),Ct=r("p"),f_=t("The "),Xi=r("a"),h_=t("FunnelForMultipleChoice"),m_=t(" forward method, overrides the "),$d=r("code"),g_=t("__call__"),__=t(" special method."),k_=u(),y(jo.$$.fragment),T_=u(),y(Oo.$$.fragment),kp=u(),xt=r("h2"),Lo=r("a"),Ed=r("span"),y(Vr.$$.fragment),F_=u(),Md=r("span"),y_=t("FunnelForTokenClassification"),Tp=u(),_n=r("div"),y(Hr.$$.fragment),w_=u(),zd=r("p"),b_=t(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),v_=u(),Yr=r("p"),$_=t("The Funnel Transformer model was proposed in "),Gr=r("a"),E_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),M_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),z_=u(),Zr=r("p"),q_=t("This model inherits from "),Ji=r("a"),P_=t("PreTrainedModel"),C_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x_=u(),Xr=r("p"),j_=t("This model is also a PyTorch "),Jr=r("a"),O_=t("torch.nn.Module"),L_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D_=u(),yn=r("div"),y(ea.$$.fragment),A_=u(),jt=r("p"),N_=t("The "),el=r("a"),I_=t("FunnelForTokenClassification"),S_=t(" forward method, overrides the "),qd=r("code"),B_=t("__call__"),W_=t(" special method."),Q_=u(),y(Do.$$.fragment),K_=u(),y(Ao.$$.fragment),U_=u(),y(No.$$.fragment),Fp=u(),Ot=r("h2"),Io=r("a"),Pd=r("span"),y(na.$$.fragment),R_=u(),Cd=r("span"),V_=t("FunnelForQuestionAnswering"),yp=u(),kn=r("div"),y(ta.$$.fragment),H_=u(),Lt=r("p"),Y_=t(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),xd=r("code"),G_=t("span start logits"),Z_=t(" and "),jd=r("code"),X_=t("span end logits"),J_=t(")."),ek=u(),oa=r("p"),nk=t("The Funnel Transformer model was proposed in "),sa=r("a"),tk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ok=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sk=u(),ra=r("p"),rk=t("This model inherits from "),nl=r("a"),ak=t("PreTrainedModel"),ik=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk=u(),aa=r("p"),dk=t("This model is also a PyTorch "),ia=r("a"),ck=t("torch.nn.Module"),pk=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uk=u(),wn=r("div"),y(la.$$.fragment),fk=u(),Dt=r("p"),hk=t("The "),tl=r("a"),mk=t("FunnelForQuestionAnswering"),gk=t(" forward method, overrides the "),Od=r("code"),_k=t("__call__"),kk=t(" special method."),Tk=u(),y(So.$$.fragment),Fk=u(),y(Bo.$$.fragment),yk=u(),y(Wo.$$.fragment),wp=u(),At=r("h2"),Qo=r("a"),Ld=r("span"),y(da.$$.fragment),wk=u(),Dd=r("span"),bk=t("TFFunnelBaseModel"),bp=u(),nn=r("div"),y(ca.$$.fragment),vk=u(),Ad=r("p"),$k=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Ek=u(),pa=r("p"),Mk=t("The Funnel Transformer model was proposed in "),ua=r("a"),zk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pk=u(),fa=r("p"),Ck=t("This model inherits from "),ol=r("a"),xk=t("TFPreTrainedModel"),jk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok=u(),ha=r("p"),Lk=t("This model is also a "),ma=r("a"),Dk=t("tf.keras.Model"),Ak=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nk=u(),y(Ko.$$.fragment),Ik=u(),Wn=r("div"),y(ga.$$.fragment),Sk=u(),Nt=r("p"),Bk=t("The "),sl=r("a"),Wk=t("TFFunnelBaseModel"),Qk=t(" forward method, overrides the "),Nd=r("code"),Kk=t("__call__"),Uk=t(" special method."),Rk=u(),y(Uo.$$.fragment),Vk=u(),y(Ro.$$.fragment),vp=u(),It=r("h2"),Vo=r("a"),Id=r("span"),y(_a.$$.fragment),Hk=u(),Sd=r("span"),Yk=t("TFFunnelModel"),$p=u(),tn=r("div"),y(ka.$$.fragment),Gk=u(),Bd=r("p"),Zk=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Xk=u(),Ta=r("p"),Jk=t("The Funnel Transformer model was proposed in "),Fa=r("a"),eT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tT=u(),ya=r("p"),oT=t("This model inherits from "),rl=r("a"),sT=t("TFPreTrainedModel"),rT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=u(),wa=r("p"),iT=t("This model is also a "),ba=r("a"),lT=t("tf.keras.Model"),dT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cT=u(),y(Ho.$$.fragment),pT=u(),Qn=r("div"),y(va.$$.fragment),uT=u(),St=r("p"),fT=t("The "),al=r("a"),hT=t("TFFunnelModel"),mT=t(" forward method, overrides the "),Wd=r("code"),gT=t("__call__"),_T=t(" special method."),kT=u(),y(Yo.$$.fragment),TT=u(),y(Go.$$.fragment),Ep=u(),Bt=r("h2"),Zo=r("a"),Qd=r("span"),y($a.$$.fragment),FT=u(),Kd=r("span"),yT=t("TFFunnelModelForPreTraining"),Mp=u(),on=r("div"),y(Ea.$$.fragment),wT=u(),Ud=r("p"),bT=t("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),vT=u(),Ma=r("p"),$T=t("The Funnel Transformer model was proposed in "),za=r("a"),ET=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),MT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zT=u(),qa=r("p"),qT=t("This model inherits from "),il=r("a"),PT=t("TFPreTrainedModel"),CT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT=u(),Pa=r("p"),jT=t("This model is also a "),Ca=r("a"),OT=t("tf.keras.Model"),LT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DT=u(),y(Xo.$$.fragment),AT=u(),Kn=r("div"),y(xa.$$.fragment),NT=u(),Wt=r("p"),IT=t("The "),ll=r("a"),ST=t("TFFunnelForPreTraining"),BT=t(" forward method, overrides the "),Rd=r("code"),WT=t("__call__"),QT=t(" special method."),KT=u(),y(Jo.$$.fragment),UT=u(),y(es.$$.fragment),zp=u(),Qt=r("h2"),ns=r("a"),Vd=r("span"),y(ja.$$.fragment),RT=u(),Hd=r("span"),VT=t("TFFunnelForMaskedLM"),qp=u(),sn=r("div"),y(Oa.$$.fragment),HT=u(),La=r("p"),YT=t("Funnel Model with a "),Yd=r("code"),GT=t("language modeling"),ZT=t(" head on top."),XT=u(),Da=r("p"),JT=t("The Funnel Transformer model was proposed in "),Aa=r("a"),eF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tF=u(),Na=r("p"),oF=t("This model inherits from "),dl=r("a"),sF=t("TFPreTrainedModel"),rF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aF=u(),Ia=r("p"),iF=t("This model is also a "),Sa=r("a"),lF=t("tf.keras.Model"),dF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cF=u(),y(ts.$$.fragment),pF=u(),bn=r("div"),y(Ba.$$.fragment),uF=u(),Kt=r("p"),fF=t("The "),cl=r("a"),hF=t("TFFunnelForMaskedLM"),mF=t(" forward method, overrides the "),Gd=r("code"),gF=t("__call__"),_F=t(" special method."),kF=u(),y(os.$$.fragment),TF=u(),y(ss.$$.fragment),FF=u(),y(rs.$$.fragment),Pp=u(),Ut=r("h2"),as=r("a"),Zd=r("span"),y(Wa.$$.fragment),yF=u(),Xd=r("span"),wF=t("TFFunnelForSequenceClassification"),Cp=u(),rn=r("div"),y(Qa.$$.fragment),bF=u(),Jd=r("p"),vF=t(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$F=u(),Ka=r("p"),EF=t("The Funnel Transformer model was proposed in "),Ua=r("a"),MF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qF=u(),Ra=r("p"),PF=t("This model inherits from "),pl=r("a"),CF=t("TFPreTrainedModel"),xF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jF=u(),Va=r("p"),OF=t("This model is also a "),Ha=r("a"),LF=t("tf.keras.Model"),DF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AF=u(),y(is.$$.fragment),NF=u(),vn=r("div"),y(Ya.$$.fragment),IF=u(),Rt=r("p"),SF=t("The "),ul=r("a"),BF=t("TFFunnelForSequenceClassification"),WF=t(" forward method, overrides the "),ec=r("code"),QF=t("__call__"),KF=t(" special method."),UF=u(),y(ls.$$.fragment),RF=u(),y(ds.$$.fragment),VF=u(),y(cs.$$.fragment),xp=u(),Vt=r("h2"),ps=r("a"),nc=r("span"),y(Ga.$$.fragment),HF=u(),tc=r("span"),YF=t("TFFunnelForMultipleChoice"),jp=u(),an=r("div"),y(Za.$$.fragment),GF=u(),oc=r("p"),ZF=t(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),XF=u(),Xa=r("p"),JF=t("The Funnel Transformer model was proposed in "),Ja=r("a"),ey=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ny=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ty=u(),ei=r("p"),oy=t("This model inherits from "),fl=r("a"),sy=t("TFPreTrainedModel"),ry=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay=u(),ni=r("p"),iy=t("This model is also a "),ti=r("a"),ly=t("tf.keras.Model"),dy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cy=u(),y(us.$$.fragment),py=u(),Un=r("div"),y(oi.$$.fragment),uy=u(),Ht=r("p"),fy=t("The "),hl=r("a"),hy=t("TFFunnelForMultipleChoice"),my=t(" forward method, overrides the "),sc=r("code"),gy=t("__call__"),_y=t(" special method."),ky=u(),y(fs.$$.fragment),Ty=u(),y(hs.$$.fragment),Op=u(),Yt=r("h2"),ms=r("a"),rc=r("span"),y(si.$$.fragment),Fy=u(),ac=r("span"),yy=t("TFFunnelForTokenClassification"),Lp=u(),ln=r("div"),y(ri.$$.fragment),wy=u(),ic=r("p"),by=t(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vy=u(),ai=r("p"),$y=t("The Funnel Transformer model was proposed in "),ii=r("a"),Ey=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),My=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zy=u(),li=r("p"),qy=t("This model inherits from "),ml=r("a"),Py=t("TFPreTrainedModel"),Cy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xy=u(),di=r("p"),jy=t("This model is also a "),ci=r("a"),Oy=t("tf.keras.Model"),Ly=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dy=u(),y(gs.$$.fragment),Ay=u(),$n=r("div"),y(pi.$$.fragment),Ny=u(),Gt=r("p"),Iy=t("The "),gl=r("a"),Sy=t("TFFunnelForTokenClassification"),By=t(" forward method, overrides the "),lc=r("code"),Wy=t("__call__"),Qy=t(" special method."),Ky=u(),y(_s.$$.fragment),Uy=u(),y(ks.$$.fragment),Ry=u(),y(Ts.$$.fragment),Dp=u(),Zt=r("h2"),Fs=r("a"),dc=r("span"),y(ui.$$.fragment),Vy=u(),cc=r("span"),Hy=t("TFFunnelForQuestionAnswering"),Ap=u(),dn=r("div"),y(fi.$$.fragment),Yy=u(),Xt=r("p"),Gy=t(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pc=r("code"),Zy=t("span start logits"),Xy=t(" and "),uc=r("code"),Jy=t("span end logits"),ew=t(")."),nw=u(),hi=r("p"),tw=t("The Funnel Transformer model was proposed in "),mi=r("a"),ow=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sw=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rw=u(),gi=r("p"),aw=t("This model inherits from "),_l=r("a"),iw=t("TFPreTrainedModel"),lw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dw=u(),_i=r("p"),cw=t("This model is also a "),ki=r("a"),pw=t("tf.keras.Model"),uw=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=u(),y(ys.$$.fragment),hw=u(),En=r("div"),y(Ti.$$.fragment),mw=u(),Jt=r("p"),gw=t("The "),kl=r("a"),_w=t("TFFunnelForQuestionAnswering"),kw=t(" forward method, overrides the "),fc=r("code"),Tw=t("__call__"),Fw=t(" special method."),yw=u(),y(ws.$$.fragment),ww=u(),y(bs.$$.fragment),bw=u(),y(vs.$$.fragment),this.h()},l(s){const T=x$('[data-svelte="svelte-1phssyn"]',document.head);d=a(T,"META",{name:!0,content:!0}),T.forEach(n),k=f(s),c=a(s,"H1",{class:!0});var Fi=i(c);h=a(Fi,"A",{id:!0,class:!0,href:!0});var hc=i(h);F=a(hc,"SPAN",{});var mc=i(F);w(l.$$.fragment,mc),mc.forEach(n),hc.forEach(n),p=f(Fi),C=a(Fi,"SPAN",{});var gc=i(C);ke=o(gc,"Funnel Transformer"),gc.forEach(n),Fi.forEach(n),fe=f(s),I=a(s,"H2",{class:!0});var yi=i(I);re=a(yi,"A",{id:!0,class:!0,href:!0});var _c=i(re);ee=a(_c,"SPAN",{});var kc=i(ee);w(M.$$.fragment,kc),kc.forEach(n),_c.forEach(n),Te=f(yi),U=a(yi,"SPAN",{});var Tc=i(U);Fe=o(Tc,"Overview"),Tc.forEach(n),yi.forEach(n),he=f(s),B=a(s,"P",{});var wi=i(B);ye=o(wi,"The Funnel Transformer model was proposed in the paper "),ae=a(wi,"A",{href:!0,rel:!0});var Fc=i(ae);V=o(Fc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),Fc.forEach(n),we=o(wi,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),wi.forEach(n),me=f(s),Q=a(s,"P",{});var yc=i(Q);be=o(yc,"The abstract from the paper is the following:"),yc.forEach(n),ge=f(s),K=a(s,"P",{});var wc=i(K);pe=a(wc,"EM",{});var bc=i(pe);ve=o(bc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),bc.forEach(n),wc.forEach(n),oe=f(s),x=a(s,"P",{});var vc=i(x);O=o(vc,"Tips:"),vc.forEach(n),_e=f(s),W=a(s,"UL",{});var bi=i(W);ue=a(bi,"LI",{});var $c=i(ue);$e=o($c,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),$c.forEach(n),H=f(bi),R=a(bi,"LI",{});var en=i(R);Ee=o(en,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),j=a(en,"A",{href:!0});var Ec=i(j);Me=o(Ec,"FunnelModel"),Ec.forEach(n),Y=o(en,", "),le=a(en,"A",{href:!0});var Mc=i(le);ze=o(Mc,"FunnelForPreTraining"),Mc.forEach(n),G=o(en,`,
`),de=a(en,"A",{href:!0});var zc=i(de);qe=o(zc,"FunnelForMaskedLM"),zc.forEach(n),N=o(en,", "),ce=a(en,"A",{href:!0});var qc=i(ce);Z=o(qc,"FunnelForTokenClassification"),qc.forEach(n),Pe=o(en,` and
class:`),ne=a(en,"EM",{});var Pc=i(ne);L=o(Pc,"~transformers.FunnelForQuestionAnswering"),Pc.forEach(n),Ce=o(en,`. The second ones should be used for
`),D=a(en,"A",{href:!0});var Cc=i(D);xe=o(Cc,"FunnelBaseModel"),Cc.forEach(n),je=o(en,", "),g=a(en,"A",{href:!0});var xc=i(g);z=o(xc,"FunnelForSequenceClassification"),xc.forEach(n),We=o(en,` and
`),J=a(en,"A",{href:!0});var jc=i(J);Qe=o(jc,"FunnelForMultipleChoice"),jc.forEach(n),Ke=o(en,"."),en.forEach(n),bi.forEach(n),q=f(s),Oe=a(s,"P",{});var eo=i(Oe);Ue=o(eo,"This model was contributed by "),De=a(eo,"A",{href:!0,rel:!0});var Oc=i(De);Re=o(Oc,"sgugger"),Oc.forEach(n),Ve=o(eo,". The original code can be found "),A=a(eo,"A",{href:!0,rel:!0});var Lc=i(A);X=o(Lc,"here"),Lc.forEach(n),He=o(eo,"."),eo.forEach(n),Ne=f(s),S=a(s,"H2",{class:!0});var vi=i(S);Le=a(vi,"A",{id:!0,class:!0,href:!0});var Dc=i(Le);Ae=a(Dc,"SPAN",{});var Ac=i(Ae);w(ie.$$.fragment,Ac),Ac.forEach(n),Dc.forEach(n),Ye=f(vi),te=a(vi,"SPAN",{});var Nc=i(te);Ge=o(Nc,"FunnelConfig"),Nc.forEach(n),vi.forEach(n),Xc=f(s),Jn=a(s,"DIV",{class:!0});var no=i(Jn);w(Ds.$$.fragment,no),af=f(no),et=a(no,"P",{});var nt=i(et);lf=o(nt,"This is the configuration class to store the configuration of a "),Mi=a(nt,"A",{href:!0});var Ic=i(Mi);df=o(Ic,"FunnelModel"),Ic.forEach(n),cf=o(nt," or a "),zi=a(nt,"A",{href:!0});var Sc=i(zi);pf=o(Sc,"TFBertModel"),Sc.forEach(n),uf=o(nt,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=a(nt,"A",{href:!0,rel:!0});var Bc=i(As);ff=o(Bc,"funnel-transformer/small"),Bc.forEach(n),hf=o(nt," architecture."),nt.forEach(n),mf=f(no),pt=a(no,"P",{});var to=i(pt);gf=o(to,"Configuration objects inherit from "),qi=a(to,"A",{href:!0});var Wc=i(qi);_f=o(Wc,"PretrainedConfig"),Wc.forEach(n),kf=o(to,` and can be used to control the model outputs. Read the
documentation from `),Pi=a(to,"A",{href:!0});var Qc=i(Pi);Tf=o(Qc,"PretrainedConfig"),Qc.forEach(n),Ff=o(to," for more information."),to.forEach(n),no.forEach(n),Jc=f(s),ut=a(s,"H2",{class:!0});var $i=i(ut);so=a($i,"A",{id:!0,class:!0,href:!0});var Kc=i(so);Il=a(Kc,"SPAN",{});var Uc=i(Il);w(Ns.$$.fragment,Uc),Uc.forEach(n),Kc.forEach(n),yf=f($i),Sl=a($i,"SPAN",{});var Rc=i(Sl);wf=o(Rc,"FunnelTokenizer"),Rc.forEach(n),$i.forEach(n),ep=f(s),Je=a(s,"DIV",{class:!0});var cn=i(Je);w(Is.$$.fragment,cn),bf=f(cn),Bl=a(cn,"P",{});var Vc=i(Bl);vf=o(Vc,"Construct a Funnel Transformer tokenizer."),Vc.forEach(n),$f=f(cn),ro=a(cn,"P",{});var $s=i(ro);Ci=a($s,"A",{href:!0});var Hc=i(Ci);Ef=o(Hc,"FunnelTokenizer"),Hc.forEach(n),Mf=o($s," is identical to "),xi=a($s,"A",{href:!0});var Yc=i(xi);zf=o(Yc,"BertTokenizer"),Yc.forEach(n),qf=o($s,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),$s.forEach(n),Pf=f(cn),Ss=a(cn,"P",{});var Ei=i(Ss);Cf=o(Ei,"Refer to superclass "),ji=a(Ei,"A",{href:!0});var Gc=i(ji);xf=o(Gc,"BertTokenizer"),Gc.forEach(n),jf=o(Ei," for usage examples and documentation concerning parameters."),Ei.forEach(n),Of=f(cn),tt=a(cn,"DIV",{class:!0});var oo=i(tt);w(Bs.$$.fragment,oo),Lf=f(oo),Wl=a(oo,"P",{});var Ew=i(Wl);Df=o(Ew,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ew.forEach(n),Af=f(oo),Ws=a(oo,"UL",{});var Ip=i(Ws);Oi=a(Ip,"LI",{});var vw=i(Oi);Nf=o(vw,"single sequence: "),Ql=a(vw,"CODE",{});var Mw=i(Ql);If=o(Mw,"[CLS] X [SEP]"),Mw.forEach(n),vw.forEach(n),Sf=f(Ip),Li=a(Ip,"LI",{});var $w=i(Li);Bf=o($w,"pair of sequences: "),Kl=a($w,"CODE",{});var zw=i(Kl);Wf=o(zw,"[CLS] A [SEP] B [SEP]"),zw.forEach(n),$w.forEach(n),Ip.forEach(n),oo.forEach(n),Qf=f(cn),ao=a(cn,"DIV",{class:!0});var Sp=i(ao);w(Qs.$$.fragment,Sp),Kf=f(Sp),Ks=a(Sp,"P",{});var Bp=i(Ks);Uf=o(Bp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=a(Bp,"CODE",{});var qw=i(Ul);Rf=o(qw,"prepare_for_model"),qw.forEach(n),Vf=o(Bp," method."),Bp.forEach(n),Sp.forEach(n),Hf=f(cn),Dn=a(cn,"DIV",{class:!0});var Es=i(Dn);w(Us.$$.fragment,Es),Yf=f(Es),Rl=a(Es,"P",{});var Pw=i(Rl);Gf=o(Pw,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Pw.forEach(n),Zf=f(Es),w(io.$$.fragment,Es),Xf=f(Es),ft=a(Es,"P",{});var Tl=i(ft);Jf=o(Tl,"If "),Vl=a(Tl,"CODE",{});var Cw=i(Vl);eh=o(Cw,"token_ids_1"),Cw.forEach(n),nh=o(Tl," is "),Hl=a(Tl,"CODE",{});var xw=i(Hl);th=o(xw,"None"),xw.forEach(n),oh=o(Tl,", this method only returns the first portion of the mask (0s)."),Tl.forEach(n),Es.forEach(n),sh=f(cn),Di=a(cn,"DIV",{class:!0});var jw=i(Di);w(Rs.$$.fragment,jw),jw.forEach(n),cn.forEach(n),np=f(s),ht=a(s,"H2",{class:!0});var Wp=i(ht);lo=a(Wp,"A",{id:!0,class:!0,href:!0});var Ow=i(lo);Yl=a(Ow,"SPAN",{});var Lw=i(Yl);w(Vs.$$.fragment,Lw),Lw.forEach(n),Ow.forEach(n),rh=f(Wp),Gl=a(Wp,"SPAN",{});var Dw=i(Gl);ah=o(Dw,"FunnelTokenizerFast"),Dw.forEach(n),Wp.forEach(n),tp=f(s),Tn=a(s,"DIV",{class:!0});var ot=i(Tn);w(Hs.$$.fragment,ot),ih=f(ot),Ys=a(ot,"P",{});var Qp=i(Ys);lh=o(Qp,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=a(Qp,"EM",{});var Aw=i(Zl);dh=o(Aw,"tokenizers"),Aw.forEach(n),ch=o(Qp," library)."),Qp.forEach(n),ph=f(ot),co=a(ot,"P",{});var Zc=i(co);Ai=a(Zc,"A",{href:!0});var Nw=i(Ai);uh=o(Nw,"FunnelTokenizerFast"),Nw.forEach(n),fh=o(Zc," is identical to "),Ni=a(Zc,"A",{href:!0});var Iw=i(Ni);hh=o(Iw,"BertTokenizerFast"),Iw.forEach(n),mh=o(Zc,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Zc.forEach(n),gh=f(ot),Gs=a(ot,"P",{});var Kp=i(Gs);_h=o(Kp,"Refer to superclass "),Ii=a(Kp,"A",{href:!0});var Sw=i(Ii);kh=o(Sw,"BertTokenizerFast"),Sw.forEach(n),Th=o(Kp," for usage examples and documentation concerning parameters."),Kp.forEach(n),Fh=f(ot),An=a(ot,"DIV",{class:!0});var Ms=i(An);w(Zs.$$.fragment,Ms),yh=f(Ms),Xl=a(Ms,"P",{});var Bw=i(Xl);wh=o(Bw,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Bw.forEach(n),bh=f(Ms),w(po.$$.fragment,Ms),vh=f(Ms),mt=a(Ms,"P",{});var Fl=i(mt);$h=o(Fl,"If "),Jl=a(Fl,"CODE",{});var Ww=i(Jl);Eh=o(Ww,"token_ids_1"),Ww.forEach(n),Mh=o(Fl," is "),ed=a(Fl,"CODE",{});var Qw=i(ed);zh=o(Qw,"None"),Qw.forEach(n),qh=o(Fl,", this method only returns the first portion of the mask (0s)."),Fl.forEach(n),Ms.forEach(n),ot.forEach(n),op=f(s),gt=a(s,"H2",{class:!0});var Up=i(gt);uo=a(Up,"A",{id:!0,class:!0,href:!0});var Kw=i(uo);nd=a(Kw,"SPAN",{});var Uw=i(nd);w(Xs.$$.fragment,Uw),Uw.forEach(n),Kw.forEach(n),Ph=f(Up),td=a(Up,"SPAN",{});var Rw=i(td);Ch=o(Rw,"Funnel specific outputs"),Rw.forEach(n),Up.forEach(n),sp=f(s),_t=a(s,"DIV",{class:!0});var Rp=i(_t);w(Js.$$.fragment,Rp),xh=f(Rp),er=a(Rp,"P",{});var Vp=i(er);jh=o(Vp,"Output type of "),Si=a(Vp,"A",{href:!0});var Vw=i(Si);Oh=o(Vw,"FunnelForPreTraining"),Vw.forEach(n),Lh=o(Vp,"."),Vp.forEach(n),Rp.forEach(n),rp=f(s),kt=a(s,"DIV",{class:!0});var Hp=i(kt);w(nr.$$.fragment,Hp),Dh=f(Hp),tr=a(Hp,"P",{});var Yp=i(tr);Ah=o(Yp,"Output type of "),Bi=a(Yp,"A",{href:!0});var Hw=i(Bi);Nh=o(Hw,"FunnelForPreTraining"),Hw.forEach(n),Ih=o(Yp,"."),Yp.forEach(n),Hp.forEach(n),ap=f(s),Tt=a(s,"H2",{class:!0});var Gp=i(Tt);fo=a(Gp,"A",{id:!0,class:!0,href:!0});var Yw=i(fo);od=a(Yw,"SPAN",{});var Gw=i(od);w(or.$$.fragment,Gw),Gw.forEach(n),Yw.forEach(n),Sh=f(Gp),sd=a(Gp,"SPAN",{});var Zw=i(sd);Bh=o(Zw,"FunnelBaseModel"),Zw.forEach(n),Gp.forEach(n),ip=f(s),un=a(s,"DIV",{class:!0});var Rn=i(un);w(sr.$$.fragment,Rn),Wh=f(Rn),rd=a(Rn,"P",{});var Xw=i(rd);Qh=o(Xw,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Xw.forEach(n),Kh=f(Rn),rr=a(Rn,"P",{});var Zp=i(rr);Uh=o(Zp,"The Funnel Transformer model was proposed in "),ar=a(Zp,"A",{href:!0,rel:!0});var Jw=i(ar);Rh=o(Jw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Jw.forEach(n),Vh=o(Zp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Zp.forEach(n),Hh=f(Rn),ir=a(Rn,"P",{});var Xp=i(ir);Yh=o(Xp,"This model inherits from "),Wi=a(Xp,"A",{href:!0});var eb=i(Wi);Gh=o(eb,"PreTrainedModel"),eb.forEach(n),Zh=o(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(n),Xh=f(Rn),lr=a(Rn,"P",{});var Jp=i(lr);Jh=o(Jp,"This model is also a PyTorch "),dr=a(Jp,"A",{href:!0,rel:!0});var nb=i(dr);em=o(nb,"torch.nn.Module"),nb.forEach(n),nm=o(Jp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jp.forEach(n),tm=f(Rn),Nn=a(Rn,"DIV",{class:!0});var zs=i(Nn);w(cr.$$.fragment,zs),om=f(zs),Ft=a(zs,"P",{});var yl=i(Ft);sm=o(yl,"The "),Qi=a(yl,"A",{href:!0});var tb=i(Qi);rm=o(tb,"FunnelBaseModel"),tb.forEach(n),am=o(yl," forward method, overrides the "),ad=a(yl,"CODE",{});var ob=i(ad);im=o(ob,"__call__"),ob.forEach(n),lm=o(yl," special method."),yl.forEach(n),dm=f(zs),w(ho.$$.fragment,zs),cm=f(zs),w(mo.$$.fragment,zs),zs.forEach(n),Rn.forEach(n),lp=f(s),yt=a(s,"H2",{class:!0});var eu=i(yt);go=a(eu,"A",{id:!0,class:!0,href:!0});var sb=i(go);id=a(sb,"SPAN",{});var rb=i(id);w(pr.$$.fragment,rb),rb.forEach(n),sb.forEach(n),pm=f(eu),ld=a(eu,"SPAN",{});var ab=i(ld);um=o(ab,"FunnelModel"),ab.forEach(n),eu.forEach(n),dp=f(s),fn=a(s,"DIV",{class:!0});var Vn=i(fn);w(ur.$$.fragment,Vn),fm=f(Vn),dd=a(Vn,"P",{});var ib=i(dd);hm=o(ib,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),ib.forEach(n),mm=f(Vn),fr=a(Vn,"P",{});var nu=i(fr);gm=o(nu,"The Funnel Transformer model was proposed in "),hr=a(nu,"A",{href:!0,rel:!0});var lb=i(hr);_m=o(lb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),lb.forEach(n),km=o(nu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),nu.forEach(n),Tm=f(Vn),mr=a(Vn,"P",{});var tu=i(mr);Fm=o(tu,"This model inherits from "),Ki=a(tu,"A",{href:!0});var db=i(Ki);ym=o(db,"PreTrainedModel"),db.forEach(n),wm=o(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu.forEach(n),bm=f(Vn),gr=a(Vn,"P",{});var ou=i(gr);vm=o(ou,"This model is also a PyTorch "),_r=a(ou,"A",{href:!0,rel:!0});var cb=i(_r);$m=o(cb,"torch.nn.Module"),cb.forEach(n),Em=o(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(n),Mm=f(Vn),In=a(Vn,"DIV",{class:!0});var qs=i(In);w(kr.$$.fragment,qs),zm=f(qs),wt=a(qs,"P",{});var wl=i(wt);qm=o(wl,"The "),Ui=a(wl,"A",{href:!0});var pb=i(Ui);Pm=o(pb,"FunnelModel"),pb.forEach(n),Cm=o(wl," forward method, overrides the "),cd=a(wl,"CODE",{});var ub=i(cd);xm=o(ub,"__call__"),ub.forEach(n),jm=o(wl," special method."),wl.forEach(n),Om=f(qs),w(_o.$$.fragment,qs),Lm=f(qs),w(ko.$$.fragment,qs),qs.forEach(n),Vn.forEach(n),cp=f(s),bt=a(s,"H2",{class:!0});var su=i(bt);To=a(su,"A",{id:!0,class:!0,href:!0});var fb=i(To);pd=a(fb,"SPAN",{});var hb=i(pd);w(Tr.$$.fragment,hb),hb.forEach(n),fb.forEach(n),Dm=f(su),ud=a(su,"SPAN",{});var mb=i(ud);Am=o(mb,"FunnelModelForPreTraining"),mb.forEach(n),su.forEach(n),pp=f(s),vt=a(s,"DIV",{class:!0});var ru=i(vt);w(Fr.$$.fragment,ru),Nm=f(ru),Sn=a(ru,"DIV",{class:!0});var Ps=i(Sn);w(yr.$$.fragment,Ps),Im=f(Ps),$t=a(Ps,"P",{});var bl=i($t);Sm=o(bl,"The "),Ri=a(bl,"A",{href:!0});var gb=i(Ri);Bm=o(gb,"FunnelForPreTraining"),gb.forEach(n),Wm=o(bl," forward method, overrides the "),fd=a(bl,"CODE",{});var _b=i(fd);Qm=o(_b,"__call__"),_b.forEach(n),Km=o(bl," special method."),bl.forEach(n),Um=f(Ps),w(Fo.$$.fragment,Ps),Rm=f(Ps),w(yo.$$.fragment,Ps),Ps.forEach(n),ru.forEach(n),up=f(s),Et=a(s,"H2",{class:!0});var au=i(Et);wo=a(au,"A",{id:!0,class:!0,href:!0});var kb=i(wo);hd=a(kb,"SPAN",{});var Tb=i(hd);w(wr.$$.fragment,Tb),Tb.forEach(n),kb.forEach(n),Vm=f(au),md=a(au,"SPAN",{});var Fb=i(md);Hm=o(Fb,"FunnelForMaskedLM"),Fb.forEach(n),au.forEach(n),fp=f(s),hn=a(s,"DIV",{class:!0});var Hn=i(hn);w(br.$$.fragment,Hn),Ym=f(Hn),vr=a(Hn,"P",{});var iu=i(vr);Gm=o(iu,"Funnel Transformer Model with a "),gd=a(iu,"CODE",{});var yb=i(gd);Zm=o(yb,"language modeling"),yb.forEach(n),Xm=o(iu," head on top."),iu.forEach(n),Jm=f(Hn),$r=a(Hn,"P",{});var lu=i($r);eg=o(lu,"The Funnel Transformer model was proposed in "),Er=a(lu,"A",{href:!0,rel:!0});var wb=i(Er);ng=o(wb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),wb.forEach(n),tg=o(lu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),lu.forEach(n),og=f(Hn),Mr=a(Hn,"P",{});var du=i(Mr);sg=o(du,"This model inherits from "),Vi=a(du,"A",{href:!0});var bb=i(Vi);rg=o(bb,"PreTrainedModel"),bb.forEach(n),ag=o(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(n),ig=f(Hn),zr=a(Hn,"P",{});var cu=i(zr);lg=o(cu,"This model is also a PyTorch "),qr=a(cu,"A",{href:!0,rel:!0});var vb=i(qr);dg=o(vb,"torch.nn.Module"),vb.forEach(n),cg=o(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(n),pg=f(Hn),Fn=a(Hn,"DIV",{class:!0});var st=i(Fn);w(Pr.$$.fragment,st),ug=f(st),Mt=a(st,"P",{});var vl=i(Mt);fg=o(vl,"The "),Hi=a(vl,"A",{href:!0});var $b=i(Hi);hg=o($b,"FunnelForMaskedLM"),$b.forEach(n),mg=o(vl," forward method, overrides the "),_d=a(vl,"CODE",{});var Eb=i(_d);gg=o(Eb,"__call__"),Eb.forEach(n),_g=o(vl," special method."),vl.forEach(n),kg=f(st),w(bo.$$.fragment,st),Tg=f(st),w(vo.$$.fragment,st),Fg=f(st),w($o.$$.fragment,st),st.forEach(n),Hn.forEach(n),hp=f(s),zt=a(s,"H2",{class:!0});var pu=i(zt);Eo=a(pu,"A",{id:!0,class:!0,href:!0});var Mb=i(Eo);kd=a(Mb,"SPAN",{});var zb=i(kd);w(Cr.$$.fragment,zb),zb.forEach(n),Mb.forEach(n),yg=f(pu),Td=a(pu,"SPAN",{});var qb=i(Td);wg=o(qb,"FunnelForSequenceClassification"),qb.forEach(n),pu.forEach(n),mp=f(s),mn=a(s,"DIV",{class:!0});var Yn=i(mn);w(xr.$$.fragment,Yn),bg=f(Yn),Fd=a(Yn,"P",{});var Pb=i(Fd);vg=o(Pb,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Pb.forEach(n),$g=f(Yn),jr=a(Yn,"P",{});var uu=i(jr);Eg=o(uu,"The Funnel Transformer model was proposed in "),Or=a(uu,"A",{href:!0,rel:!0});var Cb=i(Or);Mg=o(Cb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Cb.forEach(n),zg=o(uu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),uu.forEach(n),qg=f(Yn),Lr=a(Yn,"P",{});var fu=i(Lr);Pg=o(fu,"This model inherits from "),Yi=a(fu,"A",{href:!0});var xb=i(Yi);Cg=o(xb,"PreTrainedModel"),xb.forEach(n),xg=o(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu.forEach(n),jg=f(Yn),Dr=a(Yn,"P",{});var hu=i(Dr);Og=o(hu,"This model is also a PyTorch "),Ar=a(hu,"A",{href:!0,rel:!0});var jb=i(Ar);Lg=o(jb,"torch.nn.Module"),jb.forEach(n),Dg=o(hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu.forEach(n),Ag=f(Yn),pn=a(Yn,"DIV",{class:!0});var Mn=i(pn);w(Nr.$$.fragment,Mn),Ng=f(Mn),qt=a(Mn,"P",{});var $l=i(qt);Ig=o($l,"The "),Gi=a($l,"A",{href:!0});var Ob=i(Gi);Sg=o(Ob,"FunnelForSequenceClassification"),Ob.forEach(n),Bg=o($l," forward method, overrides the "),yd=a($l,"CODE",{});var Lb=i(yd);Wg=o(Lb,"__call__"),Lb.forEach(n),Qg=o($l," special method."),$l.forEach(n),Kg=f(Mn),w(Mo.$$.fragment,Mn),Ug=f(Mn),w(zo.$$.fragment,Mn),Rg=f(Mn),w(qo.$$.fragment,Mn),Vg=f(Mn),w(Po.$$.fragment,Mn),Hg=f(Mn),w(Co.$$.fragment,Mn),Mn.forEach(n),Yn.forEach(n),gp=f(s),Pt=a(s,"H2",{class:!0});var mu=i(Pt);xo=a(mu,"A",{id:!0,class:!0,href:!0});var Db=i(xo);wd=a(Db,"SPAN",{});var Ab=i(wd);w(Ir.$$.fragment,Ab),Ab.forEach(n),Db.forEach(n),Yg=f(mu),bd=a(mu,"SPAN",{});var Nb=i(bd);Gg=o(Nb,"FunnelForMultipleChoice"),Nb.forEach(n),mu.forEach(n),_p=f(s),gn=a(s,"DIV",{class:!0});var Gn=i(gn);w(Sr.$$.fragment,Gn),Zg=f(Gn),vd=a(Gn,"P",{});var Ib=i(vd);Xg=o(Ib,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Ib.forEach(n),Jg=f(Gn),Br=a(Gn,"P",{});var gu=i(Br);e_=o(gu,"The Funnel Transformer model was proposed in "),Wr=a(gu,"A",{href:!0,rel:!0});var Sb=i(Wr);n_=o(Sb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Sb.forEach(n),t_=o(gu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),gu.forEach(n),o_=f(Gn),Qr=a(Gn,"P",{});var _u=i(Qr);s_=o(_u,"This model inherits from "),Zi=a(_u,"A",{href:!0});var Bb=i(Zi);r_=o(Bb,"PreTrainedModel"),Bb.forEach(n),a_=o(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(n),i_=f(Gn),Kr=a(Gn,"P",{});var ku=i(Kr);l_=o(ku,"This model is also a PyTorch "),Ur=a(ku,"A",{href:!0,rel:!0});var Wb=i(Ur);d_=o(Wb,"torch.nn.Module"),Wb.forEach(n),c_=o(ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ku.forEach(n),p_=f(Gn),Bn=a(Gn,"DIV",{class:!0});var Cs=i(Bn);w(Rr.$$.fragment,Cs),u_=f(Cs),Ct=a(Cs,"P",{});var El=i(Ct);f_=o(El,"The "),Xi=a(El,"A",{href:!0});var Qb=i(Xi);h_=o(Qb,"FunnelForMultipleChoice"),Qb.forEach(n),m_=o(El," forward method, overrides the "),$d=a(El,"CODE",{});var Kb=i($d);g_=o(Kb,"__call__"),Kb.forEach(n),__=o(El," special method."),El.forEach(n),k_=f(Cs),w(jo.$$.fragment,Cs),T_=f(Cs),w(Oo.$$.fragment,Cs),Cs.forEach(n),Gn.forEach(n),kp=f(s),xt=a(s,"H2",{class:!0});var Tu=i(xt);Lo=a(Tu,"A",{id:!0,class:!0,href:!0});var Ub=i(Lo);Ed=a(Ub,"SPAN",{});var Rb=i(Ed);w(Vr.$$.fragment,Rb),Rb.forEach(n),Ub.forEach(n),F_=f(Tu),Md=a(Tu,"SPAN",{});var Vb=i(Md);y_=o(Vb,"FunnelForTokenClassification"),Vb.forEach(n),Tu.forEach(n),Tp=f(s),_n=a(s,"DIV",{class:!0});var Zn=i(_n);w(Hr.$$.fragment,Zn),w_=f(Zn),zd=a(Zn,"P",{});var Hb=i(zd);b_=o(Hb,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Hb.forEach(n),v_=f(Zn),Yr=a(Zn,"P",{});var Fu=i(Yr);$_=o(Fu,"The Funnel Transformer model was proposed in "),Gr=a(Fu,"A",{href:!0,rel:!0});var Yb=i(Gr);E_=o(Yb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Yb.forEach(n),M_=o(Fu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Fu.forEach(n),z_=f(Zn),Zr=a(Zn,"P",{});var yu=i(Zr);q_=o(yu,"This model inherits from "),Ji=a(yu,"A",{href:!0});var Gb=i(Ji);P_=o(Gb,"PreTrainedModel"),Gb.forEach(n),C_=o(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(n),x_=f(Zn),Xr=a(Zn,"P",{});var wu=i(Xr);j_=o(wu,"This model is also a PyTorch "),Jr=a(wu,"A",{href:!0,rel:!0});var Zb=i(Jr);O_=o(Zb,"torch.nn.Module"),Zb.forEach(n),L_=o(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(n),D_=f(Zn),yn=a(Zn,"DIV",{class:!0});var rt=i(yn);w(ea.$$.fragment,rt),A_=f(rt),jt=a(rt,"P",{});var Ml=i(jt);N_=o(Ml,"The "),el=a(Ml,"A",{href:!0});var Xb=i(el);I_=o(Xb,"FunnelForTokenClassification"),Xb.forEach(n),S_=o(Ml," forward method, overrides the "),qd=a(Ml,"CODE",{});var Jb=i(qd);B_=o(Jb,"__call__"),Jb.forEach(n),W_=o(Ml," special method."),Ml.forEach(n),Q_=f(rt),w(Do.$$.fragment,rt),K_=f(rt),w(Ao.$$.fragment,rt),U_=f(rt),w(No.$$.fragment,rt),rt.forEach(n),Zn.forEach(n),Fp=f(s),Ot=a(s,"H2",{class:!0});var bu=i(Ot);Io=a(bu,"A",{id:!0,class:!0,href:!0});var ev=i(Io);Pd=a(ev,"SPAN",{});var nv=i(Pd);w(na.$$.fragment,nv),nv.forEach(n),ev.forEach(n),R_=f(bu),Cd=a(bu,"SPAN",{});var tv=i(Cd);V_=o(tv,"FunnelForQuestionAnswering"),tv.forEach(n),bu.forEach(n),yp=f(s),kn=a(s,"DIV",{class:!0});var Xn=i(kn);w(ta.$$.fragment,Xn),H_=f(Xn),Lt=a(Xn,"P",{});var zl=i(Lt);Y_=o(zl,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),xd=a(zl,"CODE",{});var ov=i(xd);G_=o(ov,"span start logits"),ov.forEach(n),Z_=o(zl," and "),jd=a(zl,"CODE",{});var sv=i(jd);X_=o(sv,"span end logits"),sv.forEach(n),J_=o(zl,")."),zl.forEach(n),ek=f(Xn),oa=a(Xn,"P",{});var vu=i(oa);nk=o(vu,"The Funnel Transformer model was proposed in "),sa=a(vu,"A",{href:!0,rel:!0});var rv=i(sa);tk=o(rv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rv.forEach(n),ok=o(vu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),vu.forEach(n),sk=f(Xn),ra=a(Xn,"P",{});var $u=i(ra);rk=o($u,"This model inherits from "),nl=a($u,"A",{href:!0});var av=i(nl);ak=o(av,"PreTrainedModel"),av.forEach(n),ik=o($u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$u.forEach(n),lk=f(Xn),aa=a(Xn,"P",{});var Eu=i(aa);dk=o(Eu,"This model is also a PyTorch "),ia=a(Eu,"A",{href:!0,rel:!0});var iv=i(ia);ck=o(iv,"torch.nn.Module"),iv.forEach(n),pk=o(Eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu.forEach(n),uk=f(Xn),wn=a(Xn,"DIV",{class:!0});var at=i(wn);w(la.$$.fragment,at),fk=f(at),Dt=a(at,"P",{});var ql=i(Dt);hk=o(ql,"The "),tl=a(ql,"A",{href:!0});var lv=i(tl);mk=o(lv,"FunnelForQuestionAnswering"),lv.forEach(n),gk=o(ql," forward method, overrides the "),Od=a(ql,"CODE",{});var dv=i(Od);_k=o(dv,"__call__"),dv.forEach(n),kk=o(ql," special method."),ql.forEach(n),Tk=f(at),w(So.$$.fragment,at),Fk=f(at),w(Bo.$$.fragment,at),yk=f(at),w(Wo.$$.fragment,at),at.forEach(n),Xn.forEach(n),wp=f(s),At=a(s,"H2",{class:!0});var Mu=i(At);Qo=a(Mu,"A",{id:!0,class:!0,href:!0});var cv=i(Qo);Ld=a(cv,"SPAN",{});var pv=i(Ld);w(da.$$.fragment,pv),pv.forEach(n),cv.forEach(n),wk=f(Mu),Dd=a(Mu,"SPAN",{});var uv=i(Dd);bk=o(uv,"TFFunnelBaseModel"),uv.forEach(n),Mu.forEach(n),bp=f(s),nn=a(s,"DIV",{class:!0});var zn=i(nn);w(ca.$$.fragment,zn),vk=f(zn),Ad=a(zn,"P",{});var fv=i(Ad);$k=o(fv,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),fv.forEach(n),Ek=f(zn),pa=a(zn,"P",{});var zu=i(pa);Mk=o(zu,"The Funnel Transformer model was proposed in "),ua=a(zu,"A",{href:!0,rel:!0});var hv=i(ua);zk=o(hv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),hv.forEach(n),qk=o(zu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zu.forEach(n),Pk=f(zn),fa=a(zn,"P",{});var qu=i(fa);Ck=o(qu,"This model inherits from "),ol=a(qu,"A",{href:!0});var mv=i(ol);xk=o(mv,"TFPreTrainedModel"),mv.forEach(n),jk=o(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(n),Ok=f(zn),ha=a(zn,"P",{});var Pu=i(ha);Lk=o(Pu,"This model is also a "),ma=a(Pu,"A",{href:!0,rel:!0});var gv=i(ma);Dk=o(gv,"tf.keras.Model"),gv.forEach(n),Ak=o(Pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu.forEach(n),Nk=f(zn),w(Ko.$$.fragment,zn),Ik=f(zn),Wn=a(zn,"DIV",{class:!0});var xs=i(Wn);w(ga.$$.fragment,xs),Sk=f(xs),Nt=a(xs,"P",{});var Pl=i(Nt);Bk=o(Pl,"The "),sl=a(Pl,"A",{href:!0});var _v=i(sl);Wk=o(_v,"TFFunnelBaseModel"),_v.forEach(n),Qk=o(Pl," forward method, overrides the "),Nd=a(Pl,"CODE",{});var kv=i(Nd);Kk=o(kv,"__call__"),kv.forEach(n),Uk=o(Pl," special method."),Pl.forEach(n),Rk=f(xs),w(Uo.$$.fragment,xs),Vk=f(xs),w(Ro.$$.fragment,xs),xs.forEach(n),zn.forEach(n),vp=f(s),It=a(s,"H2",{class:!0});var Cu=i(It);Vo=a(Cu,"A",{id:!0,class:!0,href:!0});var Tv=i(Vo);Id=a(Tv,"SPAN",{});var Fv=i(Id);w(_a.$$.fragment,Fv),Fv.forEach(n),Tv.forEach(n),Hk=f(Cu),Sd=a(Cu,"SPAN",{});var yv=i(Sd);Yk=o(yv,"TFFunnelModel"),yv.forEach(n),Cu.forEach(n),$p=f(s),tn=a(s,"DIV",{class:!0});var qn=i(tn);w(ka.$$.fragment,qn),Gk=f(qn),Bd=a(qn,"P",{});var wv=i(Bd);Zk=o(wv,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),wv.forEach(n),Xk=f(qn),Ta=a(qn,"P",{});var xu=i(Ta);Jk=o(xu,"The Funnel Transformer model was proposed in "),Fa=a(xu,"A",{href:!0,rel:!0});var bv=i(Fa);eT=o(bv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),bv.forEach(n),nT=o(xu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),xu.forEach(n),tT=f(qn),ya=a(qn,"P",{});var ju=i(ya);oT=o(ju,"This model inherits from "),rl=a(ju,"A",{href:!0});var vv=i(rl);sT=o(vv,"TFPreTrainedModel"),vv.forEach(n),rT=o(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(n),aT=f(qn),wa=a(qn,"P",{});var Ou=i(wa);iT=o(Ou,"This model is also a "),ba=a(Ou,"A",{href:!0,rel:!0});var $v=i(ba);lT=o($v,"tf.keras.Model"),$v.forEach(n),dT=o(Ou,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou.forEach(n),cT=f(qn),w(Ho.$$.fragment,qn),pT=f(qn),Qn=a(qn,"DIV",{class:!0});var js=i(Qn);w(va.$$.fragment,js),uT=f(js),St=a(js,"P",{});var Cl=i(St);fT=o(Cl,"The "),al=a(Cl,"A",{href:!0});var Ev=i(al);hT=o(Ev,"TFFunnelModel"),Ev.forEach(n),mT=o(Cl," forward method, overrides the "),Wd=a(Cl,"CODE",{});var Mv=i(Wd);gT=o(Mv,"__call__"),Mv.forEach(n),_T=o(Cl," special method."),Cl.forEach(n),kT=f(js),w(Yo.$$.fragment,js),TT=f(js),w(Go.$$.fragment,js),js.forEach(n),qn.forEach(n),Ep=f(s),Bt=a(s,"H2",{class:!0});var Lu=i(Bt);Zo=a(Lu,"A",{id:!0,class:!0,href:!0});var zv=i(Zo);Qd=a(zv,"SPAN",{});var qv=i(Qd);w($a.$$.fragment,qv),qv.forEach(n),zv.forEach(n),FT=f(Lu),Kd=a(Lu,"SPAN",{});var Pv=i(Kd);yT=o(Pv,"TFFunnelModelForPreTraining"),Pv.forEach(n),Lu.forEach(n),Mp=f(s),on=a(s,"DIV",{class:!0});var Pn=i(on);w(Ea.$$.fragment,Pn),wT=f(Pn),Ud=a(Pn,"P",{});var Cv=i(Ud);bT=o(Cv,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),Cv.forEach(n),vT=f(Pn),Ma=a(Pn,"P",{});var Du=i(Ma);$T=o(Du,"The Funnel Transformer model was proposed in "),za=a(Du,"A",{href:!0,rel:!0});var xv=i(za);ET=o(xv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),xv.forEach(n),MT=o(Du," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Du.forEach(n),zT=f(Pn),qa=a(Pn,"P",{});var Au=i(qa);qT=o(Au,"This model inherits from "),il=a(Au,"A",{href:!0});var jv=i(il);PT=o(jv,"TFPreTrainedModel"),jv.forEach(n),CT=o(Au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au.forEach(n),xT=f(Pn),Pa=a(Pn,"P",{});var Nu=i(Pa);jT=o(Nu,"This model is also a "),Ca=a(Nu,"A",{href:!0,rel:!0});var Ov=i(Ca);OT=o(Ov,"tf.keras.Model"),Ov.forEach(n),LT=o(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(n),DT=f(Pn),w(Xo.$$.fragment,Pn),AT=f(Pn),Kn=a(Pn,"DIV",{class:!0});var Os=i(Kn);w(xa.$$.fragment,Os),NT=f(Os),Wt=a(Os,"P",{});var xl=i(Wt);IT=o(xl,"The "),ll=a(xl,"A",{href:!0});var Lv=i(ll);ST=o(Lv,"TFFunnelForPreTraining"),Lv.forEach(n),BT=o(xl," forward method, overrides the "),Rd=a(xl,"CODE",{});var Dv=i(Rd);WT=o(Dv,"__call__"),Dv.forEach(n),QT=o(xl," special method."),xl.forEach(n),KT=f(Os),w(Jo.$$.fragment,Os),UT=f(Os),w(es.$$.fragment,Os),Os.forEach(n),Pn.forEach(n),zp=f(s),Qt=a(s,"H2",{class:!0});var Iu=i(Qt);ns=a(Iu,"A",{id:!0,class:!0,href:!0});var Av=i(ns);Vd=a(Av,"SPAN",{});var Nv=i(Vd);w(ja.$$.fragment,Nv),Nv.forEach(n),Av.forEach(n),RT=f(Iu),Hd=a(Iu,"SPAN",{});var Iv=i(Hd);VT=o(Iv,"TFFunnelForMaskedLM"),Iv.forEach(n),Iu.forEach(n),qp=f(s),sn=a(s,"DIV",{class:!0});var Cn=i(sn);w(Oa.$$.fragment,Cn),HT=f(Cn),La=a(Cn,"P",{});var Su=i(La);YT=o(Su,"Funnel Model with a "),Yd=a(Su,"CODE",{});var Sv=i(Yd);GT=o(Sv,"language modeling"),Sv.forEach(n),ZT=o(Su," head on top."),Su.forEach(n),XT=f(Cn),Da=a(Cn,"P",{});var Bu=i(Da);JT=o(Bu,"The Funnel Transformer model was proposed in "),Aa=a(Bu,"A",{href:!0,rel:!0});var Bv=i(Aa);eF=o(Bv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Bv.forEach(n),nF=o(Bu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Bu.forEach(n),tF=f(Cn),Na=a(Cn,"P",{});var Wu=i(Na);oF=o(Wu,"This model inherits from "),dl=a(Wu,"A",{href:!0});var Wv=i(dl);sF=o(Wv,"TFPreTrainedModel"),Wv.forEach(n),rF=o(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(n),aF=f(Cn),Ia=a(Cn,"P",{});var Qu=i(Ia);iF=o(Qu,"This model is also a "),Sa=a(Qu,"A",{href:!0,rel:!0});var Qv=i(Sa);lF=o(Qv,"tf.keras.Model"),Qv.forEach(n),dF=o(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(n),cF=f(Cn),w(ts.$$.fragment,Cn),pF=f(Cn),bn=a(Cn,"DIV",{class:!0});var it=i(bn);w(Ba.$$.fragment,it),uF=f(it),Kt=a(it,"P",{});var jl=i(Kt);fF=o(jl,"The "),cl=a(jl,"A",{href:!0});var Kv=i(cl);hF=o(Kv,"TFFunnelForMaskedLM"),Kv.forEach(n),mF=o(jl," forward method, overrides the "),Gd=a(jl,"CODE",{});var Uv=i(Gd);gF=o(Uv,"__call__"),Uv.forEach(n),_F=o(jl," special method."),jl.forEach(n),kF=f(it),w(os.$$.fragment,it),TF=f(it),w(ss.$$.fragment,it),FF=f(it),w(rs.$$.fragment,it),it.forEach(n),Cn.forEach(n),Pp=f(s),Ut=a(s,"H2",{class:!0});var Ku=i(Ut);as=a(Ku,"A",{id:!0,class:!0,href:!0});var Rv=i(as);Zd=a(Rv,"SPAN",{});var Vv=i(Zd);w(Wa.$$.fragment,Vv),Vv.forEach(n),Rv.forEach(n),yF=f(Ku),Xd=a(Ku,"SPAN",{});var Hv=i(Xd);wF=o(Hv,"TFFunnelForSequenceClassification"),Hv.forEach(n),Ku.forEach(n),Cp=f(s),rn=a(s,"DIV",{class:!0});var xn=i(rn);w(Qa.$$.fragment,xn),bF=f(xn),Jd=a(xn,"P",{});var Yv=i(Jd);vF=o(Yv,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Yv.forEach(n),$F=f(xn),Ka=a(xn,"P",{});var Uu=i(Ka);EF=o(Uu,"The Funnel Transformer model was proposed in "),Ua=a(Uu,"A",{href:!0,rel:!0});var Gv=i(Ua);MF=o(Gv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Gv.forEach(n),zF=o(Uu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Uu.forEach(n),qF=f(xn),Ra=a(xn,"P",{});var Ru=i(Ra);PF=o(Ru,"This model inherits from "),pl=a(Ru,"A",{href:!0});var Zv=i(pl);CF=o(Zv,"TFPreTrainedModel"),Zv.forEach(n),xF=o(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(n),jF=f(xn),Va=a(xn,"P",{});var Vu=i(Va);OF=o(Vu,"This model is also a "),Ha=a(Vu,"A",{href:!0,rel:!0});var Xv=i(Ha);LF=o(Xv,"tf.keras.Model"),Xv.forEach(n),DF=o(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(n),AF=f(xn),w(is.$$.fragment,xn),NF=f(xn),vn=a(xn,"DIV",{class:!0});var lt=i(vn);w(Ya.$$.fragment,lt),IF=f(lt),Rt=a(lt,"P",{});var Ol=i(Rt);SF=o(Ol,"The "),ul=a(Ol,"A",{href:!0});var Jv=i(ul);BF=o(Jv,"TFFunnelForSequenceClassification"),Jv.forEach(n),WF=o(Ol," forward method, overrides the "),ec=a(Ol,"CODE",{});var e$=i(ec);QF=o(e$,"__call__"),e$.forEach(n),KF=o(Ol," special method."),Ol.forEach(n),UF=f(lt),w(ls.$$.fragment,lt),RF=f(lt),w(ds.$$.fragment,lt),VF=f(lt),w(cs.$$.fragment,lt),lt.forEach(n),xn.forEach(n),xp=f(s),Vt=a(s,"H2",{class:!0});var Hu=i(Vt);ps=a(Hu,"A",{id:!0,class:!0,href:!0});var n$=i(ps);nc=a(n$,"SPAN",{});var t$=i(nc);w(Ga.$$.fragment,t$),t$.forEach(n),n$.forEach(n),HF=f(Hu),tc=a(Hu,"SPAN",{});var o$=i(tc);YF=o(o$,"TFFunnelForMultipleChoice"),o$.forEach(n),Hu.forEach(n),jp=f(s),an=a(s,"DIV",{class:!0});var jn=i(an);w(Za.$$.fragment,jn),GF=f(jn),oc=a(jn,"P",{});var s$=i(oc);ZF=o(s$,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s$.forEach(n),XF=f(jn),Xa=a(jn,"P",{});var Yu=i(Xa);JF=o(Yu,"The Funnel Transformer model was proposed in "),Ja=a(Yu,"A",{href:!0,rel:!0});var r$=i(Ja);ey=o(r$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),r$.forEach(n),ny=o(Yu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yu.forEach(n),ty=f(jn),ei=a(jn,"P",{});var Gu=i(ei);oy=o(Gu,"This model inherits from "),fl=a(Gu,"A",{href:!0});var a$=i(fl);sy=o(a$,"TFPreTrainedModel"),a$.forEach(n),ry=o(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu.forEach(n),ay=f(jn),ni=a(jn,"P",{});var Zu=i(ni);iy=o(Zu,"This model is also a "),ti=a(Zu,"A",{href:!0,rel:!0});var i$=i(ti);ly=o(i$,"tf.keras.Model"),i$.forEach(n),dy=o(Zu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu.forEach(n),cy=f(jn),w(us.$$.fragment,jn),py=f(jn),Un=a(jn,"DIV",{class:!0});var Ls=i(Un);w(oi.$$.fragment,Ls),uy=f(Ls),Ht=a(Ls,"P",{});var Ll=i(Ht);fy=o(Ll,"The "),hl=a(Ll,"A",{href:!0});var l$=i(hl);hy=o(l$,"TFFunnelForMultipleChoice"),l$.forEach(n),my=o(Ll," forward method, overrides the "),sc=a(Ll,"CODE",{});var d$=i(sc);gy=o(d$,"__call__"),d$.forEach(n),_y=o(Ll," special method."),Ll.forEach(n),ky=f(Ls),w(fs.$$.fragment,Ls),Ty=f(Ls),w(hs.$$.fragment,Ls),Ls.forEach(n),jn.forEach(n),Op=f(s),Yt=a(s,"H2",{class:!0});var Xu=i(Yt);ms=a(Xu,"A",{id:!0,class:!0,href:!0});var c$=i(ms);rc=a(c$,"SPAN",{});var p$=i(rc);w(si.$$.fragment,p$),p$.forEach(n),c$.forEach(n),Fy=f(Xu),ac=a(Xu,"SPAN",{});var u$=i(ac);yy=o(u$,"TFFunnelForTokenClassification"),u$.forEach(n),Xu.forEach(n),Lp=f(s),ln=a(s,"DIV",{class:!0});var On=i(ln);w(ri.$$.fragment,On),wy=f(On),ic=a(On,"P",{});var f$=i(ic);by=o(f$,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),f$.forEach(n),vy=f(On),ai=a(On,"P",{});var Ju=i(ai);$y=o(Ju,"The Funnel Transformer model was proposed in "),ii=a(Ju,"A",{href:!0,rel:!0});var h$=i(ii);Ey=o(h$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),h$.forEach(n),My=o(Ju," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ju.forEach(n),zy=f(On),li=a(On,"P",{});var ef=i(li);qy=o(ef,"This model inherits from "),ml=a(ef,"A",{href:!0});var m$=i(ml);Py=o(m$,"TFPreTrainedModel"),m$.forEach(n),Cy=o(ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef.forEach(n),xy=f(On),di=a(On,"P",{});var nf=i(di);jy=o(nf,"This model is also a "),ci=a(nf,"A",{href:!0,rel:!0});var g$=i(ci);Oy=o(g$,"tf.keras.Model"),g$.forEach(n),Ly=o(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(n),Dy=f(On),w(gs.$$.fragment,On),Ay=f(On),$n=a(On,"DIV",{class:!0});var dt=i($n);w(pi.$$.fragment,dt),Ny=f(dt),Gt=a(dt,"P",{});var Dl=i(Gt);Iy=o(Dl,"The "),gl=a(Dl,"A",{href:!0});var _$=i(gl);Sy=o(_$,"TFFunnelForTokenClassification"),_$.forEach(n),By=o(Dl," forward method, overrides the "),lc=a(Dl,"CODE",{});var k$=i(lc);Wy=o(k$,"__call__"),k$.forEach(n),Qy=o(Dl," special method."),Dl.forEach(n),Ky=f(dt),w(_s.$$.fragment,dt),Uy=f(dt),w(ks.$$.fragment,dt),Ry=f(dt),w(Ts.$$.fragment,dt),dt.forEach(n),On.forEach(n),Dp=f(s),Zt=a(s,"H2",{class:!0});var tf=i(Zt);Fs=a(tf,"A",{id:!0,class:!0,href:!0});var T$=i(Fs);dc=a(T$,"SPAN",{});var F$=i(dc);w(ui.$$.fragment,F$),F$.forEach(n),T$.forEach(n),Vy=f(tf),cc=a(tf,"SPAN",{});var y$=i(cc);Hy=o(y$,"TFFunnelForQuestionAnswering"),y$.forEach(n),tf.forEach(n),Ap=f(s),dn=a(s,"DIV",{class:!0});var Ln=i(dn);w(fi.$$.fragment,Ln),Yy=f(Ln),Xt=a(Ln,"P",{});var Al=i(Xt);Gy=o(Al,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pc=a(Al,"CODE",{});var w$=i(pc);Zy=o(w$,"span start logits"),w$.forEach(n),Xy=o(Al," and "),uc=a(Al,"CODE",{});var b$=i(uc);Jy=o(b$,"span end logits"),b$.forEach(n),ew=o(Al,")."),Al.forEach(n),nw=f(Ln),hi=a(Ln,"P",{});var of=i(hi);tw=o(of,"The Funnel Transformer model was proposed in "),mi=a(of,"A",{href:!0,rel:!0});var v$=i(mi);ow=o(v$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),v$.forEach(n),sw=o(of," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),of.forEach(n),rw=f(Ln),gi=a(Ln,"P",{});var sf=i(gi);aw=o(sf,"This model inherits from "),_l=a(sf,"A",{href:!0});var $$=i(_l);iw=o($$,"TFPreTrainedModel"),$$.forEach(n),lw=o(sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf.forEach(n),dw=f(Ln),_i=a(Ln,"P",{});var rf=i(_i);cw=o(rf,"This model is also a "),ki=a(rf,"A",{href:!0,rel:!0});var E$=i(ki);pw=o(E$,"tf.keras.Model"),E$.forEach(n),uw=o(rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf.forEach(n),fw=f(Ln),w(ys.$$.fragment,Ln),hw=f(Ln),En=a(Ln,"DIV",{class:!0});var ct=i(En);w(Ti.$$.fragment,ct),mw=f(ct),Jt=a(ct,"P",{});var Nl=i(Jt);gw=o(Nl,"The "),kl=a(Nl,"A",{href:!0});var M$=i(kl);_w=o(M$,"TFFunnelForQuestionAnswering"),M$.forEach(n),kw=o(Nl," forward method, overrides the "),fc=a(Nl,"CODE",{});var z$=i(fc);Tw=o(z$,"__call__"),z$.forEach(n),Fw=o(Nl," special method."),Nl.forEach(n),yw=f(ct),w(ws.$$.fragment,ct),ww=f(ct),w(bs.$$.fragment,ct),bw=f(ct),w(vs.$$.fragment,ct),ct.forEach(n),Ln.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(j1)),m(h,"id","funnel-transformer"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#funnel-transformer"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://arxiv.org/abs/2006.03236"),m(ae,"rel","nofollow"),m(j,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(le,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(de,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(ce,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(D,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),m(g,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(J,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(De,"href","https://huggingface.co/sgugger"),m(De,"rel","nofollow"),m(A,"href","https://github.com/laiguokun/Funnel-Transformer"),m(A,"rel","nofollow"),m(Le,"id","transformers.FunnelConfig"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.FunnelConfig"),m(S,"class","relative group"),m(Mi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(zi,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),m(As,"href","https://huggingface.co/funnel-transformer/small"),m(As,"rel","nofollow"),m(qi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Pi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"id","transformers.FunnelTokenizer"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.FunnelTokenizer"),m(ut,"class","relative group"),m(Ci,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer"),m(xi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),m(ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Di,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelTokenizerFast"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelTokenizerFast"),m(ht,"class","relative group"),m(Ai,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizerFast"),m(Ni,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),m(Ii,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),m(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(uo,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(gt,"class","relative group"),m(Si,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"id","transformers.FunnelBaseModel"),m(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fo,"href","#transformers.FunnelBaseModel"),m(Tt,"class","relative group"),m(ar,"href","https://arxiv.org/abs/2006.03236"),m(ar,"rel","nofollow"),m(Wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(Qi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"id","transformers.FunnelModel"),m(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(go,"href","#transformers.FunnelModel"),m(yt,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.03236"),m(hr,"rel","nofollow"),m(Ki,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(Ui,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","transformers.FunnelForPreTraining"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#transformers.FunnelForPreTraining"),m(bt,"class","relative group"),m(Ri,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wo,"id","transformers.FunnelForMaskedLM"),m(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(wo,"href","#transformers.FunnelForMaskedLM"),m(Et,"class","relative group"),m(Er,"href","https://arxiv.org/abs/2006.03236"),m(Er,"rel","nofollow"),m(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Hi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.FunnelForSequenceClassification"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.FunnelForSequenceClassification"),m(zt,"class","relative group"),m(Or,"href","https://arxiv.org/abs/2006.03236"),m(Or,"rel","nofollow"),m(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ar,"rel","nofollow"),m(Gi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.FunnelForMultipleChoice"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.FunnelForMultipleChoice"),m(Pt,"class","relative group"),m(Wr,"href","https://arxiv.org/abs/2006.03236"),m(Wr,"rel","nofollow"),m(Zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ur,"rel","nofollow"),m(Xi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.FunnelForTokenClassification"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.FunnelForTokenClassification"),m(xt,"class","relative group"),m(Gr,"href","https://arxiv.org/abs/2006.03236"),m(Gr,"rel","nofollow"),m(Ji,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jr,"rel","nofollow"),m(el,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","transformers.FunnelForQuestionAnswering"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#transformers.FunnelForQuestionAnswering"),m(Ot,"class","relative group"),m(sa,"href","https://arxiv.org/abs/2006.03236"),m(sa,"rel","nofollow"),m(nl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ia,"rel","nofollow"),m(tl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.TFFunnelBaseModel"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.TFFunnelBaseModel"),m(At,"class","relative group"),m(ua,"href","https://arxiv.org/abs/2006.03236"),m(ua,"rel","nofollow"),m(ol,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ma,"rel","nofollow"),m(sl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","transformers.TFFunnelModel"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#transformers.TFFunnelModel"),m(It,"class","relative group"),m(Fa,"href","https://arxiv.org/abs/2006.03236"),m(Fa,"rel","nofollow"),m(rl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ba,"rel","nofollow"),m(al,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelModel"),m(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zo,"id","transformers.TFFunnelForPreTraining"),m(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zo,"href","#transformers.TFFunnelForPreTraining"),m(Bt,"class","relative group"),m(za,"href","https://arxiv.org/abs/2006.03236"),m(za,"rel","nofollow"),m(il,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ca,"rel","nofollow"),m(ll,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"id","transformers.TFFunnelForMaskedLM"),m(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ns,"href","#transformers.TFFunnelForMaskedLM"),m(Qt,"class","relative group"),m(Aa,"href","https://arxiv.org/abs/2006.03236"),m(Aa,"rel","nofollow"),m(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sa,"rel","nofollow"),m(cl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(as,"id","transformers.TFFunnelForSequenceClassification"),m(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(as,"href","#transformers.TFFunnelForSequenceClassification"),m(Ut,"class","relative group"),m(Ua,"href","https://arxiv.org/abs/2006.03236"),m(Ua,"rel","nofollow"),m(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ha,"rel","nofollow"),m(ul,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ps,"id","transformers.TFFunnelForMultipleChoice"),m(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ps,"href","#transformers.TFFunnelForMultipleChoice"),m(Vt,"class","relative group"),m(Ja,"href","https://arxiv.org/abs/2006.03236"),m(Ja,"rel","nofollow"),m(fl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ti,"rel","nofollow"),m(hl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ms,"id","transformers.TFFunnelForTokenClassification"),m(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ms,"href","#transformers.TFFunnelForTokenClassification"),m(Yt,"class","relative group"),m(ii,"href","https://arxiv.org/abs/2006.03236"),m(ii,"rel","nofollow"),m(ml,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ci,"rel","nofollow"),m(gl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fs,"id","transformers.TFFunnelForQuestionAnswering"),m(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fs,"href","#transformers.TFFunnelForQuestionAnswering"),m(Zt,"class","relative group"),m(mi,"href","https://arxiv.org/abs/2006.03236"),m(mi,"rel","nofollow"),m(_l,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ki,"rel","nofollow"),m(kl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,T){e(document.head,d),_(s,k,T),_(s,c,T),e(c,h),e(h,F),b(l,F,null),e(c,p),e(c,C),e(C,ke),_(s,fe,T),_(s,I,T),e(I,re),e(re,ee),b(M,ee,null),e(I,Te),e(I,U),e(U,Fe),_(s,he,T),_(s,B,T),e(B,ye),e(B,ae),e(ae,V),e(B,we),_(s,me,T),_(s,Q,T),e(Q,be),_(s,ge,T),_(s,K,T),e(K,pe),e(pe,ve),_(s,oe,T),_(s,x,T),e(x,O),_(s,_e,T),_(s,W,T),e(W,ue),e(ue,$e),e(W,H),e(W,R),e(R,Ee),e(R,j),e(j,Me),e(R,Y),e(R,le),e(le,ze),e(R,G),e(R,de),e(de,qe),e(R,N),e(R,ce),e(ce,Z),e(R,Pe),e(R,ne),e(ne,L),e(R,Ce),e(R,D),e(D,xe),e(R,je),e(R,g),e(g,z),e(R,We),e(R,J),e(J,Qe),e(R,Ke),_(s,q,T),_(s,Oe,T),e(Oe,Ue),e(Oe,De),e(De,Re),e(Oe,Ve),e(Oe,A),e(A,X),e(Oe,He),_(s,Ne,T),_(s,S,T),e(S,Le),e(Le,Ae),b(ie,Ae,null),e(S,Ye),e(S,te),e(te,Ge),_(s,Xc,T),_(s,Jn,T),b(Ds,Jn,null),e(Jn,af),e(Jn,et),e(et,lf),e(et,Mi),e(Mi,df),e(et,cf),e(et,zi),e(zi,pf),e(et,uf),e(et,As),e(As,ff),e(et,hf),e(Jn,mf),e(Jn,pt),e(pt,gf),e(pt,qi),e(qi,_f),e(pt,kf),e(pt,Pi),e(Pi,Tf),e(pt,Ff),_(s,Jc,T),_(s,ut,T),e(ut,so),e(so,Il),b(Ns,Il,null),e(ut,yf),e(ut,Sl),e(Sl,wf),_(s,ep,T),_(s,Je,T),b(Is,Je,null),e(Je,bf),e(Je,Bl),e(Bl,vf),e(Je,$f),e(Je,ro),e(ro,Ci),e(Ci,Ef),e(ro,Mf),e(ro,xi),e(xi,zf),e(ro,qf),e(Je,Pf),e(Je,Ss),e(Ss,Cf),e(Ss,ji),e(ji,xf),e(Ss,jf),e(Je,Of),e(Je,tt),b(Bs,tt,null),e(tt,Lf),e(tt,Wl),e(Wl,Df),e(tt,Af),e(tt,Ws),e(Ws,Oi),e(Oi,Nf),e(Oi,Ql),e(Ql,If),e(Ws,Sf),e(Ws,Li),e(Li,Bf),e(Li,Kl),e(Kl,Wf),e(Je,Qf),e(Je,ao),b(Qs,ao,null),e(ao,Kf),e(ao,Ks),e(Ks,Uf),e(Ks,Ul),e(Ul,Rf),e(Ks,Vf),e(Je,Hf),e(Je,Dn),b(Us,Dn,null),e(Dn,Yf),e(Dn,Rl),e(Rl,Gf),e(Dn,Zf),b(io,Dn,null),e(Dn,Xf),e(Dn,ft),e(ft,Jf),e(ft,Vl),e(Vl,eh),e(ft,nh),e(ft,Hl),e(Hl,th),e(ft,oh),e(Je,sh),e(Je,Di),b(Rs,Di,null),_(s,np,T),_(s,ht,T),e(ht,lo),e(lo,Yl),b(Vs,Yl,null),e(ht,rh),e(ht,Gl),e(Gl,ah),_(s,tp,T),_(s,Tn,T),b(Hs,Tn,null),e(Tn,ih),e(Tn,Ys),e(Ys,lh),e(Ys,Zl),e(Zl,dh),e(Ys,ch),e(Tn,ph),e(Tn,co),e(co,Ai),e(Ai,uh),e(co,fh),e(co,Ni),e(Ni,hh),e(co,mh),e(Tn,gh),e(Tn,Gs),e(Gs,_h),e(Gs,Ii),e(Ii,kh),e(Gs,Th),e(Tn,Fh),e(Tn,An),b(Zs,An,null),e(An,yh),e(An,Xl),e(Xl,wh),e(An,bh),b(po,An,null),e(An,vh),e(An,mt),e(mt,$h),e(mt,Jl),e(Jl,Eh),e(mt,Mh),e(mt,ed),e(ed,zh),e(mt,qh),_(s,op,T),_(s,gt,T),e(gt,uo),e(uo,nd),b(Xs,nd,null),e(gt,Ph),e(gt,td),e(td,Ch),_(s,sp,T),_(s,_t,T),b(Js,_t,null),e(_t,xh),e(_t,er),e(er,jh),e(er,Si),e(Si,Oh),e(er,Lh),_(s,rp,T),_(s,kt,T),b(nr,kt,null),e(kt,Dh),e(kt,tr),e(tr,Ah),e(tr,Bi),e(Bi,Nh),e(tr,Ih),_(s,ap,T),_(s,Tt,T),e(Tt,fo),e(fo,od),b(or,od,null),e(Tt,Sh),e(Tt,sd),e(sd,Bh),_(s,ip,T),_(s,un,T),b(sr,un,null),e(un,Wh),e(un,rd),e(rd,Qh),e(un,Kh),e(un,rr),e(rr,Uh),e(rr,ar),e(ar,Rh),e(rr,Vh),e(un,Hh),e(un,ir),e(ir,Yh),e(ir,Wi),e(Wi,Gh),e(ir,Zh),e(un,Xh),e(un,lr),e(lr,Jh),e(lr,dr),e(dr,em),e(lr,nm),e(un,tm),e(un,Nn),b(cr,Nn,null),e(Nn,om),e(Nn,Ft),e(Ft,sm),e(Ft,Qi),e(Qi,rm),e(Ft,am),e(Ft,ad),e(ad,im),e(Ft,lm),e(Nn,dm),b(ho,Nn,null),e(Nn,cm),b(mo,Nn,null),_(s,lp,T),_(s,yt,T),e(yt,go),e(go,id),b(pr,id,null),e(yt,pm),e(yt,ld),e(ld,um),_(s,dp,T),_(s,fn,T),b(ur,fn,null),e(fn,fm),e(fn,dd),e(dd,hm),e(fn,mm),e(fn,fr),e(fr,gm),e(fr,hr),e(hr,_m),e(fr,km),e(fn,Tm),e(fn,mr),e(mr,Fm),e(mr,Ki),e(Ki,ym),e(mr,wm),e(fn,bm),e(fn,gr),e(gr,vm),e(gr,_r),e(_r,$m),e(gr,Em),e(fn,Mm),e(fn,In),b(kr,In,null),e(In,zm),e(In,wt),e(wt,qm),e(wt,Ui),e(Ui,Pm),e(wt,Cm),e(wt,cd),e(cd,xm),e(wt,jm),e(In,Om),b(_o,In,null),e(In,Lm),b(ko,In,null),_(s,cp,T),_(s,bt,T),e(bt,To),e(To,pd),b(Tr,pd,null),e(bt,Dm),e(bt,ud),e(ud,Am),_(s,pp,T),_(s,vt,T),b(Fr,vt,null),e(vt,Nm),e(vt,Sn),b(yr,Sn,null),e(Sn,Im),e(Sn,$t),e($t,Sm),e($t,Ri),e(Ri,Bm),e($t,Wm),e($t,fd),e(fd,Qm),e($t,Km),e(Sn,Um),b(Fo,Sn,null),e(Sn,Rm),b(yo,Sn,null),_(s,up,T),_(s,Et,T),e(Et,wo),e(wo,hd),b(wr,hd,null),e(Et,Vm),e(Et,md),e(md,Hm),_(s,fp,T),_(s,hn,T),b(br,hn,null),e(hn,Ym),e(hn,vr),e(vr,Gm),e(vr,gd),e(gd,Zm),e(vr,Xm),e(hn,Jm),e(hn,$r),e($r,eg),e($r,Er),e(Er,ng),e($r,tg),e(hn,og),e(hn,Mr),e(Mr,sg),e(Mr,Vi),e(Vi,rg),e(Mr,ag),e(hn,ig),e(hn,zr),e(zr,lg),e(zr,qr),e(qr,dg),e(zr,cg),e(hn,pg),e(hn,Fn),b(Pr,Fn,null),e(Fn,ug),e(Fn,Mt),e(Mt,fg),e(Mt,Hi),e(Hi,hg),e(Mt,mg),e(Mt,_d),e(_d,gg),e(Mt,_g),e(Fn,kg),b(bo,Fn,null),e(Fn,Tg),b(vo,Fn,null),e(Fn,Fg),b($o,Fn,null),_(s,hp,T),_(s,zt,T),e(zt,Eo),e(Eo,kd),b(Cr,kd,null),e(zt,yg),e(zt,Td),e(Td,wg),_(s,mp,T),_(s,mn,T),b(xr,mn,null),e(mn,bg),e(mn,Fd),e(Fd,vg),e(mn,$g),e(mn,jr),e(jr,Eg),e(jr,Or),e(Or,Mg),e(jr,zg),e(mn,qg),e(mn,Lr),e(Lr,Pg),e(Lr,Yi),e(Yi,Cg),e(Lr,xg),e(mn,jg),e(mn,Dr),e(Dr,Og),e(Dr,Ar),e(Ar,Lg),e(Dr,Dg),e(mn,Ag),e(mn,pn),b(Nr,pn,null),e(pn,Ng),e(pn,qt),e(qt,Ig),e(qt,Gi),e(Gi,Sg),e(qt,Bg),e(qt,yd),e(yd,Wg),e(qt,Qg),e(pn,Kg),b(Mo,pn,null),e(pn,Ug),b(zo,pn,null),e(pn,Rg),b(qo,pn,null),e(pn,Vg),b(Po,pn,null),e(pn,Hg),b(Co,pn,null),_(s,gp,T),_(s,Pt,T),e(Pt,xo),e(xo,wd),b(Ir,wd,null),e(Pt,Yg),e(Pt,bd),e(bd,Gg),_(s,_p,T),_(s,gn,T),b(Sr,gn,null),e(gn,Zg),e(gn,vd),e(vd,Xg),e(gn,Jg),e(gn,Br),e(Br,e_),e(Br,Wr),e(Wr,n_),e(Br,t_),e(gn,o_),e(gn,Qr),e(Qr,s_),e(Qr,Zi),e(Zi,r_),e(Qr,a_),e(gn,i_),e(gn,Kr),e(Kr,l_),e(Kr,Ur),e(Ur,d_),e(Kr,c_),e(gn,p_),e(gn,Bn),b(Rr,Bn,null),e(Bn,u_),e(Bn,Ct),e(Ct,f_),e(Ct,Xi),e(Xi,h_),e(Ct,m_),e(Ct,$d),e($d,g_),e(Ct,__),e(Bn,k_),b(jo,Bn,null),e(Bn,T_),b(Oo,Bn,null),_(s,kp,T),_(s,xt,T),e(xt,Lo),e(Lo,Ed),b(Vr,Ed,null),e(xt,F_),e(xt,Md),e(Md,y_),_(s,Tp,T),_(s,_n,T),b(Hr,_n,null),e(_n,w_),e(_n,zd),e(zd,b_),e(_n,v_),e(_n,Yr),e(Yr,$_),e(Yr,Gr),e(Gr,E_),e(Yr,M_),e(_n,z_),e(_n,Zr),e(Zr,q_),e(Zr,Ji),e(Ji,P_),e(Zr,C_),e(_n,x_),e(_n,Xr),e(Xr,j_),e(Xr,Jr),e(Jr,O_),e(Xr,L_),e(_n,D_),e(_n,yn),b(ea,yn,null),e(yn,A_),e(yn,jt),e(jt,N_),e(jt,el),e(el,I_),e(jt,S_),e(jt,qd),e(qd,B_),e(jt,W_),e(yn,Q_),b(Do,yn,null),e(yn,K_),b(Ao,yn,null),e(yn,U_),b(No,yn,null),_(s,Fp,T),_(s,Ot,T),e(Ot,Io),e(Io,Pd),b(na,Pd,null),e(Ot,R_),e(Ot,Cd),e(Cd,V_),_(s,yp,T),_(s,kn,T),b(ta,kn,null),e(kn,H_),e(kn,Lt),e(Lt,Y_),e(Lt,xd),e(xd,G_),e(Lt,Z_),e(Lt,jd),e(jd,X_),e(Lt,J_),e(kn,ek),e(kn,oa),e(oa,nk),e(oa,sa),e(sa,tk),e(oa,ok),e(kn,sk),e(kn,ra),e(ra,rk),e(ra,nl),e(nl,ak),e(ra,ik),e(kn,lk),e(kn,aa),e(aa,dk),e(aa,ia),e(ia,ck),e(aa,pk),e(kn,uk),e(kn,wn),b(la,wn,null),e(wn,fk),e(wn,Dt),e(Dt,hk),e(Dt,tl),e(tl,mk),e(Dt,gk),e(Dt,Od),e(Od,_k),e(Dt,kk),e(wn,Tk),b(So,wn,null),e(wn,Fk),b(Bo,wn,null),e(wn,yk),b(Wo,wn,null),_(s,wp,T),_(s,At,T),e(At,Qo),e(Qo,Ld),b(da,Ld,null),e(At,wk),e(At,Dd),e(Dd,bk),_(s,bp,T),_(s,nn,T),b(ca,nn,null),e(nn,vk),e(nn,Ad),e(Ad,$k),e(nn,Ek),e(nn,pa),e(pa,Mk),e(pa,ua),e(ua,zk),e(pa,qk),e(nn,Pk),e(nn,fa),e(fa,Ck),e(fa,ol),e(ol,xk),e(fa,jk),e(nn,Ok),e(nn,ha),e(ha,Lk),e(ha,ma),e(ma,Dk),e(ha,Ak),e(nn,Nk),b(Ko,nn,null),e(nn,Ik),e(nn,Wn),b(ga,Wn,null),e(Wn,Sk),e(Wn,Nt),e(Nt,Bk),e(Nt,sl),e(sl,Wk),e(Nt,Qk),e(Nt,Nd),e(Nd,Kk),e(Nt,Uk),e(Wn,Rk),b(Uo,Wn,null),e(Wn,Vk),b(Ro,Wn,null),_(s,vp,T),_(s,It,T),e(It,Vo),e(Vo,Id),b(_a,Id,null),e(It,Hk),e(It,Sd),e(Sd,Yk),_(s,$p,T),_(s,tn,T),b(ka,tn,null),e(tn,Gk),e(tn,Bd),e(Bd,Zk),e(tn,Xk),e(tn,Ta),e(Ta,Jk),e(Ta,Fa),e(Fa,eT),e(Ta,nT),e(tn,tT),e(tn,ya),e(ya,oT),e(ya,rl),e(rl,sT),e(ya,rT),e(tn,aT),e(tn,wa),e(wa,iT),e(wa,ba),e(ba,lT),e(wa,dT),e(tn,cT),b(Ho,tn,null),e(tn,pT),e(tn,Qn),b(va,Qn,null),e(Qn,uT),e(Qn,St),e(St,fT),e(St,al),e(al,hT),e(St,mT),e(St,Wd),e(Wd,gT),e(St,_T),e(Qn,kT),b(Yo,Qn,null),e(Qn,TT),b(Go,Qn,null),_(s,Ep,T),_(s,Bt,T),e(Bt,Zo),e(Zo,Qd),b($a,Qd,null),e(Bt,FT),e(Bt,Kd),e(Kd,yT),_(s,Mp,T),_(s,on,T),b(Ea,on,null),e(on,wT),e(on,Ud),e(Ud,bT),e(on,vT),e(on,Ma),e(Ma,$T),e(Ma,za),e(za,ET),e(Ma,MT),e(on,zT),e(on,qa),e(qa,qT),e(qa,il),e(il,PT),e(qa,CT),e(on,xT),e(on,Pa),e(Pa,jT),e(Pa,Ca),e(Ca,OT),e(Pa,LT),e(on,DT),b(Xo,on,null),e(on,AT),e(on,Kn),b(xa,Kn,null),e(Kn,NT),e(Kn,Wt),e(Wt,IT),e(Wt,ll),e(ll,ST),e(Wt,BT),e(Wt,Rd),e(Rd,WT),e(Wt,QT),e(Kn,KT),b(Jo,Kn,null),e(Kn,UT),b(es,Kn,null),_(s,zp,T),_(s,Qt,T),e(Qt,ns),e(ns,Vd),b(ja,Vd,null),e(Qt,RT),e(Qt,Hd),e(Hd,VT),_(s,qp,T),_(s,sn,T),b(Oa,sn,null),e(sn,HT),e(sn,La),e(La,YT),e(La,Yd),e(Yd,GT),e(La,ZT),e(sn,XT),e(sn,Da),e(Da,JT),e(Da,Aa),e(Aa,eF),e(Da,nF),e(sn,tF),e(sn,Na),e(Na,oF),e(Na,dl),e(dl,sF),e(Na,rF),e(sn,aF),e(sn,Ia),e(Ia,iF),e(Ia,Sa),e(Sa,lF),e(Ia,dF),e(sn,cF),b(ts,sn,null),e(sn,pF),e(sn,bn),b(Ba,bn,null),e(bn,uF),e(bn,Kt),e(Kt,fF),e(Kt,cl),e(cl,hF),e(Kt,mF),e(Kt,Gd),e(Gd,gF),e(Kt,_F),e(bn,kF),b(os,bn,null),e(bn,TF),b(ss,bn,null),e(bn,FF),b(rs,bn,null),_(s,Pp,T),_(s,Ut,T),e(Ut,as),e(as,Zd),b(Wa,Zd,null),e(Ut,yF),e(Ut,Xd),e(Xd,wF),_(s,Cp,T),_(s,rn,T),b(Qa,rn,null),e(rn,bF),e(rn,Jd),e(Jd,vF),e(rn,$F),e(rn,Ka),e(Ka,EF),e(Ka,Ua),e(Ua,MF),e(Ka,zF),e(rn,qF),e(rn,Ra),e(Ra,PF),e(Ra,pl),e(pl,CF),e(Ra,xF),e(rn,jF),e(rn,Va),e(Va,OF),e(Va,Ha),e(Ha,LF),e(Va,DF),e(rn,AF),b(is,rn,null),e(rn,NF),e(rn,vn),b(Ya,vn,null),e(vn,IF),e(vn,Rt),e(Rt,SF),e(Rt,ul),e(ul,BF),e(Rt,WF),e(Rt,ec),e(ec,QF),e(Rt,KF),e(vn,UF),b(ls,vn,null),e(vn,RF),b(ds,vn,null),e(vn,VF),b(cs,vn,null),_(s,xp,T),_(s,Vt,T),e(Vt,ps),e(ps,nc),b(Ga,nc,null),e(Vt,HF),e(Vt,tc),e(tc,YF),_(s,jp,T),_(s,an,T),b(Za,an,null),e(an,GF),e(an,oc),e(oc,ZF),e(an,XF),e(an,Xa),e(Xa,JF),e(Xa,Ja),e(Ja,ey),e(Xa,ny),e(an,ty),e(an,ei),e(ei,oy),e(ei,fl),e(fl,sy),e(ei,ry),e(an,ay),e(an,ni),e(ni,iy),e(ni,ti),e(ti,ly),e(ni,dy),e(an,cy),b(us,an,null),e(an,py),e(an,Un),b(oi,Un,null),e(Un,uy),e(Un,Ht),e(Ht,fy),e(Ht,hl),e(hl,hy),e(Ht,my),e(Ht,sc),e(sc,gy),e(Ht,_y),e(Un,ky),b(fs,Un,null),e(Un,Ty),b(hs,Un,null),_(s,Op,T),_(s,Yt,T),e(Yt,ms),e(ms,rc),b(si,rc,null),e(Yt,Fy),e(Yt,ac),e(ac,yy),_(s,Lp,T),_(s,ln,T),b(ri,ln,null),e(ln,wy),e(ln,ic),e(ic,by),e(ln,vy),e(ln,ai),e(ai,$y),e(ai,ii),e(ii,Ey),e(ai,My),e(ln,zy),e(ln,li),e(li,qy),e(li,ml),e(ml,Py),e(li,Cy),e(ln,xy),e(ln,di),e(di,jy),e(di,ci),e(ci,Oy),e(di,Ly),e(ln,Dy),b(gs,ln,null),e(ln,Ay),e(ln,$n),b(pi,$n,null),e($n,Ny),e($n,Gt),e(Gt,Iy),e(Gt,gl),e(gl,Sy),e(Gt,By),e(Gt,lc),e(lc,Wy),e(Gt,Qy),e($n,Ky),b(_s,$n,null),e($n,Uy),b(ks,$n,null),e($n,Ry),b(Ts,$n,null),_(s,Dp,T),_(s,Zt,T),e(Zt,Fs),e(Fs,dc),b(ui,dc,null),e(Zt,Vy),e(Zt,cc),e(cc,Hy),_(s,Ap,T),_(s,dn,T),b(fi,dn,null),e(dn,Yy),e(dn,Xt),e(Xt,Gy),e(Xt,pc),e(pc,Zy),e(Xt,Xy),e(Xt,uc),e(uc,Jy),e(Xt,ew),e(dn,nw),e(dn,hi),e(hi,tw),e(hi,mi),e(mi,ow),e(hi,sw),e(dn,rw),e(dn,gi),e(gi,aw),e(gi,_l),e(_l,iw),e(gi,lw),e(dn,dw),e(dn,_i),e(_i,cw),e(_i,ki),e(ki,pw),e(_i,uw),e(dn,fw),b(ys,dn,null),e(dn,hw),e(dn,En),b(Ti,En,null),e(En,mw),e(En,Jt),e(Jt,gw),e(Jt,kl),e(kl,_w),e(Jt,kw),e(Jt,fc),e(fc,Tw),e(Jt,Fw),e(En,yw),b(ws,En,null),e(En,ww),b(bs,En,null),e(En,bw),b(vs,En,null),Np=!0},p(s,[T]){const Fi={};T&2&&(Fi.$$scope={dirty:T,ctx:s}),io.$set(Fi);const hc={};T&2&&(hc.$$scope={dirty:T,ctx:s}),po.$set(hc);const mc={};T&2&&(mc.$$scope={dirty:T,ctx:s}),ho.$set(mc);const gc={};T&2&&(gc.$$scope={dirty:T,ctx:s}),mo.$set(gc);const yi={};T&2&&(yi.$$scope={dirty:T,ctx:s}),_o.$set(yi);const _c={};T&2&&(_c.$$scope={dirty:T,ctx:s}),ko.$set(_c);const kc={};T&2&&(kc.$$scope={dirty:T,ctx:s}),Fo.$set(kc);const Tc={};T&2&&(Tc.$$scope={dirty:T,ctx:s}),yo.$set(Tc);const wi={};T&2&&(wi.$$scope={dirty:T,ctx:s}),bo.$set(wi);const Fc={};T&2&&(Fc.$$scope={dirty:T,ctx:s}),vo.$set(Fc);const yc={};T&2&&(yc.$$scope={dirty:T,ctx:s}),$o.$set(yc);const wc={};T&2&&(wc.$$scope={dirty:T,ctx:s}),Mo.$set(wc);const bc={};T&2&&(bc.$$scope={dirty:T,ctx:s}),zo.$set(bc);const vc={};T&2&&(vc.$$scope={dirty:T,ctx:s}),qo.$set(vc);const bi={};T&2&&(bi.$$scope={dirty:T,ctx:s}),Po.$set(bi);const $c={};T&2&&($c.$$scope={dirty:T,ctx:s}),Co.$set($c);const en={};T&2&&(en.$$scope={dirty:T,ctx:s}),jo.$set(en);const Ec={};T&2&&(Ec.$$scope={dirty:T,ctx:s}),Oo.$set(Ec);const Mc={};T&2&&(Mc.$$scope={dirty:T,ctx:s}),Do.$set(Mc);const zc={};T&2&&(zc.$$scope={dirty:T,ctx:s}),Ao.$set(zc);const qc={};T&2&&(qc.$$scope={dirty:T,ctx:s}),No.$set(qc);const Pc={};T&2&&(Pc.$$scope={dirty:T,ctx:s}),So.$set(Pc);const Cc={};T&2&&(Cc.$$scope={dirty:T,ctx:s}),Bo.$set(Cc);const xc={};T&2&&(xc.$$scope={dirty:T,ctx:s}),Wo.$set(xc);const jc={};T&2&&(jc.$$scope={dirty:T,ctx:s}),Ko.$set(jc);const eo={};T&2&&(eo.$$scope={dirty:T,ctx:s}),Uo.$set(eo);const Oc={};T&2&&(Oc.$$scope={dirty:T,ctx:s}),Ro.$set(Oc);const Lc={};T&2&&(Lc.$$scope={dirty:T,ctx:s}),Ho.$set(Lc);const vi={};T&2&&(vi.$$scope={dirty:T,ctx:s}),Yo.$set(vi);const Dc={};T&2&&(Dc.$$scope={dirty:T,ctx:s}),Go.$set(Dc);const Ac={};T&2&&(Ac.$$scope={dirty:T,ctx:s}),Xo.$set(Ac);const Nc={};T&2&&(Nc.$$scope={dirty:T,ctx:s}),Jo.$set(Nc);const no={};T&2&&(no.$$scope={dirty:T,ctx:s}),es.$set(no);const nt={};T&2&&(nt.$$scope={dirty:T,ctx:s}),ts.$set(nt);const Ic={};T&2&&(Ic.$$scope={dirty:T,ctx:s}),os.$set(Ic);const Sc={};T&2&&(Sc.$$scope={dirty:T,ctx:s}),ss.$set(Sc);const Bc={};T&2&&(Bc.$$scope={dirty:T,ctx:s}),rs.$set(Bc);const to={};T&2&&(to.$$scope={dirty:T,ctx:s}),is.$set(to);const Wc={};T&2&&(Wc.$$scope={dirty:T,ctx:s}),ls.$set(Wc);const Qc={};T&2&&(Qc.$$scope={dirty:T,ctx:s}),ds.$set(Qc);const $i={};T&2&&($i.$$scope={dirty:T,ctx:s}),cs.$set($i);const Kc={};T&2&&(Kc.$$scope={dirty:T,ctx:s}),us.$set(Kc);const Uc={};T&2&&(Uc.$$scope={dirty:T,ctx:s}),fs.$set(Uc);const Rc={};T&2&&(Rc.$$scope={dirty:T,ctx:s}),hs.$set(Rc);const cn={};T&2&&(cn.$$scope={dirty:T,ctx:s}),gs.$set(cn);const Vc={};T&2&&(Vc.$$scope={dirty:T,ctx:s}),_s.$set(Vc);const $s={};T&2&&($s.$$scope={dirty:T,ctx:s}),ks.$set($s);const Hc={};T&2&&(Hc.$$scope={dirty:T,ctx:s}),Ts.$set(Hc);const Yc={};T&2&&(Yc.$$scope={dirty:T,ctx:s}),ys.$set(Yc);const Ei={};T&2&&(Ei.$$scope={dirty:T,ctx:s}),ws.$set(Ei);const Gc={};T&2&&(Gc.$$scope={dirty:T,ctx:s}),bs.$set(Gc);const oo={};T&2&&(oo.$$scope={dirty:T,ctx:s}),vs.$set(oo)},i(s){Np||(v(l.$$.fragment,s),v(M.$$.fragment,s),v(ie.$$.fragment,s),v(Ds.$$.fragment,s),v(Ns.$$.fragment,s),v(Is.$$.fragment,s),v(Bs.$$.fragment,s),v(Qs.$$.fragment,s),v(Us.$$.fragment,s),v(io.$$.fragment,s),v(Rs.$$.fragment,s),v(Vs.$$.fragment,s),v(Hs.$$.fragment,s),v(Zs.$$.fragment,s),v(po.$$.fragment,s),v(Xs.$$.fragment,s),v(Js.$$.fragment,s),v(nr.$$.fragment,s),v(or.$$.fragment,s),v(sr.$$.fragment,s),v(cr.$$.fragment,s),v(ho.$$.fragment,s),v(mo.$$.fragment,s),v(pr.$$.fragment,s),v(ur.$$.fragment,s),v(kr.$$.fragment,s),v(_o.$$.fragment,s),v(ko.$$.fragment,s),v(Tr.$$.fragment,s),v(Fr.$$.fragment,s),v(yr.$$.fragment,s),v(Fo.$$.fragment,s),v(yo.$$.fragment,s),v(wr.$$.fragment,s),v(br.$$.fragment,s),v(Pr.$$.fragment,s),v(bo.$$.fragment,s),v(vo.$$.fragment,s),v($o.$$.fragment,s),v(Cr.$$.fragment,s),v(xr.$$.fragment,s),v(Nr.$$.fragment,s),v(Mo.$$.fragment,s),v(zo.$$.fragment,s),v(qo.$$.fragment,s),v(Po.$$.fragment,s),v(Co.$$.fragment,s),v(Ir.$$.fragment,s),v(Sr.$$.fragment,s),v(Rr.$$.fragment,s),v(jo.$$.fragment,s),v(Oo.$$.fragment,s),v(Vr.$$.fragment,s),v(Hr.$$.fragment,s),v(ea.$$.fragment,s),v(Do.$$.fragment,s),v(Ao.$$.fragment,s),v(No.$$.fragment,s),v(na.$$.fragment,s),v(ta.$$.fragment,s),v(la.$$.fragment,s),v(So.$$.fragment,s),v(Bo.$$.fragment,s),v(Wo.$$.fragment,s),v(da.$$.fragment,s),v(ca.$$.fragment,s),v(Ko.$$.fragment,s),v(ga.$$.fragment,s),v(Uo.$$.fragment,s),v(Ro.$$.fragment,s),v(_a.$$.fragment,s),v(ka.$$.fragment,s),v(Ho.$$.fragment,s),v(va.$$.fragment,s),v(Yo.$$.fragment,s),v(Go.$$.fragment,s),v($a.$$.fragment,s),v(Ea.$$.fragment,s),v(Xo.$$.fragment,s),v(xa.$$.fragment,s),v(Jo.$$.fragment,s),v(es.$$.fragment,s),v(ja.$$.fragment,s),v(Oa.$$.fragment,s),v(ts.$$.fragment,s),v(Ba.$$.fragment,s),v(os.$$.fragment,s),v(ss.$$.fragment,s),v(rs.$$.fragment,s),v(Wa.$$.fragment,s),v(Qa.$$.fragment,s),v(is.$$.fragment,s),v(Ya.$$.fragment,s),v(ls.$$.fragment,s),v(ds.$$.fragment,s),v(cs.$$.fragment,s),v(Ga.$$.fragment,s),v(Za.$$.fragment,s),v(us.$$.fragment,s),v(oi.$$.fragment,s),v(fs.$$.fragment,s),v(hs.$$.fragment,s),v(si.$$.fragment,s),v(ri.$$.fragment,s),v(gs.$$.fragment,s),v(pi.$$.fragment,s),v(_s.$$.fragment,s),v(ks.$$.fragment,s),v(Ts.$$.fragment,s),v(ui.$$.fragment,s),v(fi.$$.fragment,s),v(ys.$$.fragment,s),v(Ti.$$.fragment,s),v(ws.$$.fragment,s),v(bs.$$.fragment,s),v(vs.$$.fragment,s),Np=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(ie.$$.fragment,s),$(Ds.$$.fragment,s),$(Ns.$$.fragment,s),$(Is.$$.fragment,s),$(Bs.$$.fragment,s),$(Qs.$$.fragment,s),$(Us.$$.fragment,s),$(io.$$.fragment,s),$(Rs.$$.fragment,s),$(Vs.$$.fragment,s),$(Hs.$$.fragment,s),$(Zs.$$.fragment,s),$(po.$$.fragment,s),$(Xs.$$.fragment,s),$(Js.$$.fragment,s),$(nr.$$.fragment,s),$(or.$$.fragment,s),$(sr.$$.fragment,s),$(cr.$$.fragment,s),$(ho.$$.fragment,s),$(mo.$$.fragment,s),$(pr.$$.fragment,s),$(ur.$$.fragment,s),$(kr.$$.fragment,s),$(_o.$$.fragment,s),$(ko.$$.fragment,s),$(Tr.$$.fragment,s),$(Fr.$$.fragment,s),$(yr.$$.fragment,s),$(Fo.$$.fragment,s),$(yo.$$.fragment,s),$(wr.$$.fragment,s),$(br.$$.fragment,s),$(Pr.$$.fragment,s),$(bo.$$.fragment,s),$(vo.$$.fragment,s),$($o.$$.fragment,s),$(Cr.$$.fragment,s),$(xr.$$.fragment,s),$(Nr.$$.fragment,s),$(Mo.$$.fragment,s),$(zo.$$.fragment,s),$(qo.$$.fragment,s),$(Po.$$.fragment,s),$(Co.$$.fragment,s),$(Ir.$$.fragment,s),$(Sr.$$.fragment,s),$(Rr.$$.fragment,s),$(jo.$$.fragment,s),$(Oo.$$.fragment,s),$(Vr.$$.fragment,s),$(Hr.$$.fragment,s),$(ea.$$.fragment,s),$(Do.$$.fragment,s),$(Ao.$$.fragment,s),$(No.$$.fragment,s),$(na.$$.fragment,s),$(ta.$$.fragment,s),$(la.$$.fragment,s),$(So.$$.fragment,s),$(Bo.$$.fragment,s),$(Wo.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Ko.$$.fragment,s),$(ga.$$.fragment,s),$(Uo.$$.fragment,s),$(Ro.$$.fragment,s),$(_a.$$.fragment,s),$(ka.$$.fragment,s),$(Ho.$$.fragment,s),$(va.$$.fragment,s),$(Yo.$$.fragment,s),$(Go.$$.fragment,s),$($a.$$.fragment,s),$(Ea.$$.fragment,s),$(Xo.$$.fragment,s),$(xa.$$.fragment,s),$(Jo.$$.fragment,s),$(es.$$.fragment,s),$(ja.$$.fragment,s),$(Oa.$$.fragment,s),$(ts.$$.fragment,s),$(Ba.$$.fragment,s),$(os.$$.fragment,s),$(ss.$$.fragment,s),$(rs.$$.fragment,s),$(Wa.$$.fragment,s),$(Qa.$$.fragment,s),$(is.$$.fragment,s),$(Ya.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(Ga.$$.fragment,s),$(Za.$$.fragment,s),$(us.$$.fragment,s),$(oi.$$.fragment,s),$(fs.$$.fragment,s),$(hs.$$.fragment,s),$(si.$$.fragment,s),$(ri.$$.fragment,s),$(gs.$$.fragment,s),$(pi.$$.fragment,s),$(_s.$$.fragment,s),$(ks.$$.fragment,s),$(Ts.$$.fragment,s),$(ui.$$.fragment,s),$(fi.$$.fragment,s),$(ys.$$.fragment,s),$(Ti.$$.fragment,s),$(ws.$$.fragment,s),$(bs.$$.fragment,s),$(vs.$$.fragment,s),Np=!1},d(s){n(d),s&&n(k),s&&n(c),E(l),s&&n(fe),s&&n(I),E(M),s&&n(he),s&&n(B),s&&n(me),s&&n(Q),s&&n(ge),s&&n(K),s&&n(oe),s&&n(x),s&&n(_e),s&&n(W),s&&n(q),s&&n(Oe),s&&n(Ne),s&&n(S),E(ie),s&&n(Xc),s&&n(Jn),E(Ds),s&&n(Jc),s&&n(ut),E(Ns),s&&n(ep),s&&n(Je),E(Is),E(Bs),E(Qs),E(Us),E(io),E(Rs),s&&n(np),s&&n(ht),E(Vs),s&&n(tp),s&&n(Tn),E(Hs),E(Zs),E(po),s&&n(op),s&&n(gt),E(Xs),s&&n(sp),s&&n(_t),E(Js),s&&n(rp),s&&n(kt),E(nr),s&&n(ap),s&&n(Tt),E(or),s&&n(ip),s&&n(un),E(sr),E(cr),E(ho),E(mo),s&&n(lp),s&&n(yt),E(pr),s&&n(dp),s&&n(fn),E(ur),E(kr),E(_o),E(ko),s&&n(cp),s&&n(bt),E(Tr),s&&n(pp),s&&n(vt),E(Fr),E(yr),E(Fo),E(yo),s&&n(up),s&&n(Et),E(wr),s&&n(fp),s&&n(hn),E(br),E(Pr),E(bo),E(vo),E($o),s&&n(hp),s&&n(zt),E(Cr),s&&n(mp),s&&n(mn),E(xr),E(Nr),E(Mo),E(zo),E(qo),E(Po),E(Co),s&&n(gp),s&&n(Pt),E(Ir),s&&n(_p),s&&n(gn),E(Sr),E(Rr),E(jo),E(Oo),s&&n(kp),s&&n(xt),E(Vr),s&&n(Tp),s&&n(_n),E(Hr),E(ea),E(Do),E(Ao),E(No),s&&n(Fp),s&&n(Ot),E(na),s&&n(yp),s&&n(kn),E(ta),E(la),E(So),E(Bo),E(Wo),s&&n(wp),s&&n(At),E(da),s&&n(bp),s&&n(nn),E(ca),E(Ko),E(ga),E(Uo),E(Ro),s&&n(vp),s&&n(It),E(_a),s&&n($p),s&&n(tn),E(ka),E(Ho),E(va),E(Yo),E(Go),s&&n(Ep),s&&n(Bt),E($a),s&&n(Mp),s&&n(on),E(Ea),E(Xo),E(xa),E(Jo),E(es),s&&n(zp),s&&n(Qt),E(ja),s&&n(qp),s&&n(sn),E(Oa),E(ts),E(Ba),E(os),E(ss),E(rs),s&&n(Pp),s&&n(Ut),E(Wa),s&&n(Cp),s&&n(rn),E(Qa),E(is),E(Ya),E(ls),E(ds),E(cs),s&&n(xp),s&&n(Vt),E(Ga),s&&n(jp),s&&n(an),E(Za),E(us),E(oi),E(fs),E(hs),s&&n(Op),s&&n(Yt),E(si),s&&n(Lp),s&&n(ln),E(ri),E(gs),E(pi),E(_s),E(ks),E(Ts),s&&n(Dp),s&&n(Zt),E(ui),s&&n(Ap),s&&n(dn),E(fi),E(ys),E(Ti),E(ws),E(bs),E(vs)}}}const j1={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function O1(P){return j$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B1 extends q${constructor(d){super();P$(this,d,O1,x1,C$,{})}}export{B1 as default,j1 as metadata};
