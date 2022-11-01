import{S as x$,i as C$,s as j$,e as r,k as p,w as F,t,M as O$,c as a,d as n,m as f,a as i,x as b,h as o,b as m,G as e,g as _,y as w,q as y,o as $,B as E,v as L$,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function D$(P){let d,k,c,h,T;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function A$(P){let d,k,c,h,T;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function N$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function I$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function S$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function B$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function W$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Q$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function U$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function K$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function R$(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function H$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function V$(P){let d,k,c,h,T;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of single-label classification:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of single-label classification:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Y$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function G$(P){let d,k,c,h,T;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of multi-label classification:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of multi-label classification:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Z$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function X$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function J$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function e2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function n2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function t2(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function o2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function s2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function r2(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function a2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function i2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function l2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function d2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function c2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function u2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function p2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function f2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function h2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function m2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function g2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function _2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function k2(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function v2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function T2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function F2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function b2(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function w2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function y2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function $2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function E2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function M2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function z2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function q2(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function P2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);Fe=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ye=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,K),e(K,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,U),e(U,ue),e(M,ye),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function x2(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function C2(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),T=!0},p:Se,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function j2(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(y(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function O2(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,K,Te,he,B,Fe,ae,H,be,me,Q,we,ge,U,ue,ye,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je,g,z,We,J,Qe,Ue,q,Oe,Ke,De,Re,He,A,X,Ve,Ne,S,Le,Ae,ie,Ye,te,Ge,eu,Jn,Os,df,et,cf,zi,uf,pf,qi,ff,hf,Ls,mf,gf,_f,pt,kf,Pi,vf,Tf,xi,Ff,bf,nu,ft,ro,Sl,Ds,wf,Bl,yf,tu,en,As,$f,Wl,Ef,Mf,Ns,zf,Ci,qf,Pf,xf,tt,Is,Cf,Ql,jf,Of,Ss,ji,Lf,Ul,Df,Af,Oi,Nf,Kl,If,Sf,ao,Bs,Bf,Ws,Wf,Rl,Qf,Uf,Kf,Dn,Qs,Rf,Hl,Hf,Vf,io,Yf,ht,Gf,Vl,Zf,Xf,Yl,Jf,eh,nh,Li,Us,ou,mt,lo,Gl,Ks,th,Zl,oh,su,vn,Rs,sh,Hs,rh,Xl,ah,ih,lh,Vs,dh,Di,ch,uh,ph,ot,Ys,fh,Jl,hh,mh,Gs,Ai,gh,ed,_h,kh,Ni,vh,nd,Th,Fh,An,Zs,bh,td,wh,yh,co,$h,gt,Eh,od,Mh,zh,sd,qh,Ph,ru,_t,uo,rd,Xs,xh,ad,Ch,au,kt,Js,jh,er,Oh,Ii,Lh,Dh,iu,vt,nr,Ah,tr,Nh,Si,Ih,Sh,lu,Tt,po,id,or,Bh,ld,Wh,du,un,sr,Qh,dd,Uh,Kh,rr,Rh,ar,Hh,Vh,Yh,ir,Gh,Bi,Zh,Xh,Jh,lr,em,dr,nm,tm,om,Nn,cr,sm,Ft,rm,Wi,am,im,cd,lm,dm,cm,fo,um,ho,cu,bt,mo,ud,ur,pm,pd,fm,uu,pn,pr,hm,fd,mm,gm,fr,_m,hr,km,vm,Tm,mr,Fm,Qi,bm,wm,ym,gr,$m,_r,Em,Mm,zm,In,kr,qm,wt,Pm,Ui,xm,Cm,hd,jm,Om,Lm,go,Dm,_o,pu,yt,ko,md,vr,Am,gd,Nm,fu,$t,Tr,Im,Sn,Fr,Sm,Et,Bm,Ki,Wm,Qm,_d,Um,Km,Rm,vo,Hm,To,hu,Mt,Fo,kd,br,Vm,vd,Ym,mu,fn,wr,Gm,yr,Zm,Td,Xm,Jm,eg,$r,ng,Er,tg,og,sg,Mr,rg,Ri,ag,ig,lg,zr,dg,qr,cg,ug,pg,Tn,Pr,fg,zt,hg,Hi,mg,gg,Fd,_g,kg,vg,bo,Tg,wo,Fg,yo,gu,qt,$o,bd,xr,bg,wd,wg,_u,hn,Cr,yg,yd,$g,Eg,jr,Mg,Or,zg,qg,Pg,Lr,xg,Vi,Cg,jg,Og,Dr,Lg,Ar,Dg,Ag,Ng,cn,Nr,Ig,Pt,Sg,Yi,Bg,Wg,$d,Qg,Ug,Kg,Eo,Rg,Mo,Hg,zo,Vg,qo,Yg,Po,ku,xt,xo,Ed,Ir,Gg,Md,Zg,vu,mn,Sr,Xg,zd,Jg,e_,Br,n_,Wr,t_,o_,s_,Qr,r_,Gi,a_,i_,l_,Ur,d_,Kr,c_,u_,p_,Bn,Rr,f_,Ct,h_,Zi,m_,g_,qd,__,k_,v_,Co,T_,jo,Tu,jt,Oo,Pd,Hr,F_,xd,b_,Fu,gn,Vr,w_,Cd,y_,$_,Yr,E_,Gr,M_,z_,q_,Zr,P_,Xi,x_,C_,j_,Xr,O_,Jr,L_,D_,A_,Fn,ea,N_,Ot,I_,Ji,S_,B_,jd,W_,Q_,U_,Lo,K_,Do,R_,Ao,bu,Lt,No,Od,na,H_,Ld,V_,wu,_n,ta,Y_,Dt,G_,Dd,Z_,X_,Ad,J_,ek,nk,oa,tk,sa,ok,sk,rk,ra,ak,el,ik,lk,dk,aa,ck,ia,uk,pk,fk,bn,la,hk,At,mk,nl,gk,_k,Nd,kk,vk,Tk,Io,Fk,So,bk,Bo,yu,Nt,Wo,Id,da,wk,Sd,yk,$u,nn,ca,$k,Bd,Ek,Mk,ua,zk,pa,qk,Pk,xk,fa,Ck,tl,jk,Ok,Lk,ha,Dk,ma,Ak,Nk,Ik,Qo,Sk,Wn,ga,Bk,It,Wk,ol,Qk,Uk,Wd,Kk,Rk,Hk,Uo,Vk,Ko,Eu,St,Ro,Qd,_a,Yk,Ud,Gk,Mu,tn,ka,Zk,Kd,Xk,Jk,va,ev,Ta,nv,tv,ov,Fa,sv,sl,rv,av,iv,ba,lv,wa,dv,cv,uv,Ho,pv,Qn,ya,fv,Bt,hv,rl,mv,gv,Rd,_v,kv,vv,Vo,Tv,Yo,zu,Wt,Go,Hd,$a,Fv,Vd,bv,qu,on,Ea,wv,Yd,yv,$v,Ma,Ev,za,Mv,zv,qv,qa,Pv,al,xv,Cv,jv,Pa,Ov,xa,Lv,Dv,Av,Zo,Nv,Un,Ca,Iv,Qt,Sv,il,Bv,Wv,Gd,Qv,Uv,Kv,Xo,Rv,Jo,Pu,Ut,es,Zd,ja,Hv,Xd,Vv,xu,sn,Oa,Yv,La,Gv,Jd,Zv,Xv,Jv,Da,eT,Aa,nT,tT,oT,Na,sT,ll,rT,aT,iT,Ia,lT,Sa,dT,cT,uT,ns,pT,wn,Ba,fT,Kt,hT,dl,mT,gT,ec,_T,kT,vT,ts,TT,os,FT,ss,Cu,Rt,rs,nc,Wa,bT,tc,wT,ju,rn,Qa,yT,oc,$T,ET,Ua,MT,Ka,zT,qT,PT,Ra,xT,cl,CT,jT,OT,Ha,LT,Va,DT,AT,NT,as,IT,yn,Ya,ST,Ht,BT,ul,WT,QT,sc,UT,KT,RT,is,HT,ls,VT,ds,Ou,Vt,cs,rc,Ga,YT,ac,GT,Lu,an,Za,ZT,ic,XT,JT,Xa,eF,Ja,nF,tF,oF,ei,sF,pl,rF,aF,iF,ni,lF,ti,dF,cF,uF,us,pF,Kn,oi,fF,Yt,hF,fl,mF,gF,lc,_F,kF,vF,ps,TF,fs,Du,Gt,hs,dc,si,FF,cc,bF,Au,ln,ri,wF,uc,yF,$F,ai,EF,ii,MF,zF,qF,li,PF,hl,xF,CF,jF,di,OF,ci,LF,DF,AF,ms,NF,$n,ui,IF,Zt,SF,ml,BF,WF,pc,QF,UF,KF,gs,RF,_s,HF,ks,Nu,Xt,vs,fc,pi,VF,hc,YF,Iu,dn,fi,GF,Jt,ZF,mc,XF,JF,gc,eb,nb,tb,hi,ob,mi,sb,rb,ab,gi,ib,gl,lb,db,cb,_i,ub,ki,pb,fb,hb,Ts,mb,En,vi,gb,eo,_b,_l,kb,vb,_c,Tb,Fb,bb,Fs,wb,bs,yb,ws,Su;return l=new Xe({}),M=new Xe({}),ie=new Xe({}),Os=new se({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Funnel transformer. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"vocab_size"},{anchor:"transformers.FunnelConfig.block_sizes",description:`<strong>block_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4]</code>) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.FunnelConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
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
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/configuration_funnel.py#L41"}}),Ds=new Xe({}),As=new se({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.FunnelTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FunnelTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.FunnelTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.FunnelTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FunnelTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FunnelTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FunnelTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FunnelTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.FunnelTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <code>optional</code>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.FunnelTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <code>optional</code>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.FunnelTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.FunnelTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel.py#L91"}}),Is=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel.py#L239",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bs=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel.py#L265",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel.py#L293",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Ie({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[D$]},$$scope:{ctx:P}}}),Us=new se({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel.py#L323"}}),Ks=new Xe({}),Rs=new se({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.FunnelTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FunnelTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FunnelTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FunnelTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FunnelTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FunnelTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.FunnelTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.FunnelTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.FunnelTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <code>optional</code>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.FunnelTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <code>optional</code>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.FunnelTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.FunnelTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel_fast.py#L94"}}),Ys=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel_fast.py#L196",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/tokenization_funnel_fast.py#L220",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),co=new Ie({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[A$]},$$scope:{ctx:P}}}),Xs=new Xe({}),Js=new se({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA-style objective.`,name:"loss"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L834"}}),nr=new se({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L988"}}),or=new Xe({}),sr=new se({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L927"}}),cr=new se({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L943",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Ze({props:{$$slots:{default:[N$]},$$scope:{ctx:P}}}),ho=new Ie({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[I$]},$$scope:{ctx:P}}}),ur=new Xe({}),pr=new se({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),kr=new se({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1021",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new Ze({props:{$$slots:{default:[S$]},$$scope:{ctx:P}}}),_o=new Ie({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[B$]},$$scope:{ctx:P}}}),vr=new Xe({}),Tr=new se({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),Fr=new se({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA-style loss. Input should be a sequence of tokens (see <code>input_ids</code>
docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1121",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Ze({props:{$$slots:{default:[W$]},$$scope:{ctx:P}}}),To=new Ie({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[Q$]},$$scope:{ctx:P}}}),br=new Xe({}),wr=new se({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),Pr=new se({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1211",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new Ze({props:{$$slots:{default:[U$]},$$scope:{ctx:P}}}),wo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[K$]},$$scope:{ctx:P}}}),yo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[R$]},$$scope:{ctx:P}}}),xr=new Xe({}),Cr=new se({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),Nr=new se({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new Ze({props:{$$slots:{default:[H$]},$$scope:{ctx:P}}}),Mo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[V$]},$$scope:{ctx:P}}}),zo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[Y$]},$$scope:{ctx:P}}}),qo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[G$]},$$scope:{ctx:P}}}),Po=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[Z$]},$$scope:{ctx:P}}}),Ir=new Xe({}),Sr=new se({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Rr=new se({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new Ze({props:{$$slots:{default:[X$]},$$scope:{ctx:P}}}),jo=new Ie({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[J$]},$$scope:{ctx:P}}}),Hr=new Xe({}),Vr=new se({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),ea=new se({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1464",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new Ze({props:{$$slots:{default:[e2]},$$scope:{ctx:P}}}),Do=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[n2]},$$scope:{ctx:P}}}),Ao=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[t2]},$$scope:{ctx:P}}}),na=new Xe({}),ta=new se({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),la=new se({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_funnel.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ze({props:{$$slots:{default:[o2]},$$scope:{ctx:P}}}),So=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[s2]},$$scope:{ctx:P}}}),Bo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[r2]},$$scope:{ctx:P}}}),da=new Xe({}),ca=new se({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1110"}}),Qo=new Ze({props:{$$slots:{default:[a2]},$$scope:{ctx:P}}}),ga=new se({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelBaseModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1115",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Uo=new Ze({props:{$$slots:{default:[i2]},$$scope:{ctx:P}}}),Ko=new Ie({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[l2]},$$scope:{ctx:P}}}),_a=new Xe({}),ka=new se({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1159"}}),Ho=new Ze({props:{$$slots:{default:[d2]},$$scope:{ctx:P}}}),ya=new se({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new Ze({props:{$$slots:{default:[c2]},$$scope:{ctx:P}}}),Yo=new Ie({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[u2]},$$scope:{ctx:P}}}),$a=new Xe({}),Ea=new se({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1211"}}),Zo=new Ze({props:{$$slots:{default:[p2]},$$scope:{ctx:P}}}),Ca=new se({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1218",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new Ze({props:{$$slots:{default:[f2]},$$scope:{ctx:P}}}),Jo=new Ie({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[h2]},$$scope:{ctx:P}}}),ja=new Xe({}),Oa=new se({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1279"}}),ns=new Ze({props:{$$slots:{default:[m2]},$$scope:{ctx:P}}}),Ba=new se({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1293",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ts=new Ze({props:{$$slots:{default:[g2]},$$scope:{ctx:P}}}),os=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[_2]},$$scope:{ctx:P}}}),ss=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[k2]},$$scope:{ctx:P}}}),Wa=new Xe({}),Qa=new se({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1358"}}),as=new Ze({props:{$$slots:{default:[v2]},$$scope:{ctx:P}}}),Ya=new se({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1366",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new Ze({props:{$$slots:{default:[T2]},$$scope:{ctx:P}}}),ls=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[F2]},$$scope:{ctx:P}}}),ds=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[b2]},$$scope:{ctx:P}}}),Ga=new Xe({}),Za=new se({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1434"}}),us=new Ze({props:{$$slots:{default:[w2]},$$scope:{ctx:P}}}),oi=new se({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1451",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ps=new Ze({props:{$$slots:{default:[y2]},$$scope:{ctx:P}}}),fs=new Ie({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[$2]},$$scope:{ctx:P}}}),si=new Xe({}),ri=new se({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1550"}}),ms=new Ze({props:{$$slots:{default:[E2]},$$scope:{ctx:P}}}),ui=new se({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1561",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gs=new Ze({props:{$$slots:{default:[M2]},$$scope:{ctx:P}}}),_s=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[z2]},$$scope:{ctx:P}}}),ks=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[q2]},$$scope:{ctx:P}}}),pi=new Xe({}),fi=new se({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1628"}}),Ts=new Ze({props:{$$slots:{default:[P2]},$$scope:{ctx:P}}}),vi=new se({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1638",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fs=new Ze({props:{$$slots:{default:[x2]},$$scope:{ctx:P}}}),bs=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[C2]},$$scope:{ctx:P}}}),ws=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[j2]},$$scope:{ctx:P}}}),{c(){d=r("meta"),k=p(),c=r("h1"),h=r("a"),T=r("span"),F(l.$$.fragment),u=p(),x=r("span"),ke=t("Funnel Transformer"),fe=p(),I=r("h2"),re=r("a"),ee=r("span"),F(M.$$.fragment),ve=p(),K=r("span"),Te=t("Overview"),he=p(),B=r("p"),Fe=t("The Funnel Transformer model was proposed in the paper "),ae=r("a"),H=t(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),be=t(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),me=p(),Q=r("p"),we=t("The abstract from the paper is the following:"),ge=p(),U=r("p"),ue=r("em"),ye=t(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),oe=p(),C=r("p"),O=t("Tips:"),_e=p(),W=r("ul"),pe=r("li"),$e=t(`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),V=p(),R=r("li"),Ee=t(`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),j=r("a"),Me=t("FunnelModel"),Y=t(", "),le=r("a"),ze=t("FunnelForPreTraining"),G=t(`,
`),de=r("a"),qe=t("FunnelForMaskedLM"),N=t(", "),ce=r("a"),Z=t("FunnelForTokenClassification"),Pe=t(` and
class:`),ne=r("em"),L=t("~transformers.FunnelForQuestionAnswering"),xe=t(`. The second ones should be used for
`),D=r("a"),Ce=t("FunnelBaseModel"),je=t(", "),g=r("a"),z=t("FunnelForSequenceClassification"),We=t(` and
`),J=r("a"),Qe=t("FunnelForMultipleChoice"),Ue=t("."),q=p(),Oe=r("p"),Ke=t("This model was contributed by "),De=r("a"),Re=t("sgugger"),He=t(". The original code can be found "),A=r("a"),X=t("here"),Ve=t("."),Ne=p(),S=r("h2"),Le=r("a"),Ae=r("span"),F(ie.$$.fragment),Ye=p(),te=r("span"),Ge=t("FunnelConfig"),eu=p(),Jn=r("div"),F(Os.$$.fragment),df=p(),et=r("p"),cf=t("This is the configuration class to store the configuration of a "),zi=r("a"),uf=t("FunnelModel"),pf=t(" or a "),qi=r("a"),ff=t("TFBertModel"),hf=t(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),Ls=r("a"),mf=t("funnel-transformer/small"),gf=t(" architecture."),_f=p(),pt=r("p"),kf=t("Configuration objects inherit from "),Pi=r("a"),vf=t("PretrainedConfig"),Tf=t(` and can be used to control the model outputs. Read the
documentation from `),xi=r("a"),Ff=t("PretrainedConfig"),bf=t(" for more information."),nu=p(),ft=r("h2"),ro=r("a"),Sl=r("span"),F(Ds.$$.fragment),wf=p(),Bl=r("span"),yf=t("FunnelTokenizer"),tu=p(),en=r("div"),F(As.$$.fragment),$f=p(),Wl=r("p"),Ef=t("Construct a Funnel Transformer tokenizer. Based on WordPiece."),Mf=p(),Ns=r("p"),zf=t("This tokenizer inherits from "),Ci=r("a"),qf=t("PreTrainedTokenizer"),Pf=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xf=p(),tt=r("div"),F(Is.$$.fragment),Cf=p(),Ql=r("p"),jf=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Of=p(),Ss=r("ul"),ji=r("li"),Lf=t("single sequence: "),Ul=r("code"),Df=t("[CLS] X [SEP]"),Af=p(),Oi=r("li"),Nf=t("pair of sequences: "),Kl=r("code"),If=t("[CLS] A [SEP] B [SEP]"),Sf=p(),ao=r("div"),F(Bs.$$.fragment),Bf=p(),Ws=r("p"),Wf=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Rl=r("code"),Qf=t("prepare_for_model"),Uf=t(" method."),Kf=p(),Dn=r("div"),F(Qs.$$.fragment),Rf=p(),Hl=r("p"),Hf=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Vf=p(),F(io.$$.fragment),Yf=p(),ht=r("p"),Gf=t("If "),Vl=r("code"),Zf=t("token_ids_1"),Xf=t(" is "),Yl=r("code"),Jf=t("None"),eh=t(", this method only returns the first portion of the mask (0s)."),nh=p(),Li=r("div"),F(Us.$$.fragment),ou=p(),mt=r("h2"),lo=r("a"),Gl=r("span"),F(Ks.$$.fragment),th=p(),Zl=r("span"),oh=t("FunnelTokenizerFast"),su=p(),vn=r("div"),F(Rs.$$.fragment),sh=p(),Hs=r("p"),rh=t("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Xl=r("em"),ah=t("tokenizers"),ih=t(" library). Based on WordPiece."),lh=p(),Vs=r("p"),dh=t("This tokenizer inherits from "),Di=r("a"),ch=t("PreTrainedTokenizerFast"),uh=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ph=p(),ot=r("div"),F(Ys.$$.fragment),fh=p(),Jl=r("p"),hh=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Funnel sequence has the following format:`),mh=p(),Gs=r("ul"),Ai=r("li"),gh=t("single sequence: "),ed=r("code"),_h=t("[CLS] X [SEP]"),kh=p(),Ni=r("li"),vh=t("pair of sequences: "),nd=r("code"),Th=t("[CLS] A [SEP] B [SEP]"),Fh=p(),An=r("div"),F(Zs.$$.fragment),bh=p(),td=r("p"),wh=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),yh=p(),F(co.$$.fragment),$h=p(),gt=r("p"),Eh=t("If "),od=r("code"),Mh=t("token_ids_1"),zh=t(" is "),sd=r("code"),qh=t("None"),Ph=t(", this method only returns the first portion of the mask (0s)."),ru=p(),_t=r("h2"),uo=r("a"),rd=r("span"),F(Xs.$$.fragment),xh=p(),ad=r("span"),Ch=t("Funnel specific outputs"),au=p(),kt=r("div"),F(Js.$$.fragment),jh=p(),er=r("p"),Oh=t("Output type of "),Ii=r("a"),Lh=t("FunnelForPreTraining"),Dh=t("."),iu=p(),vt=r("div"),F(nr.$$.fragment),Ah=p(),tr=r("p"),Nh=t("Output type of "),Si=r("a"),Ih=t("FunnelForPreTraining"),Sh=t("."),lu=p(),Tt=r("h2"),po=r("a"),id=r("span"),F(or.$$.fragment),Bh=p(),ld=r("span"),Wh=t("FunnelBaseModel"),du=p(),un=r("div"),F(sr.$$.fragment),Qh=p(),dd=r("p"),Uh=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Kh=p(),rr=r("p"),Rh=t("The Funnel Transformer model was proposed in "),ar=r("a"),Hh=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Vh=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yh=p(),ir=r("p"),Gh=t("This model inherits from "),Bi=r("a"),Zh=t("PreTrainedModel"),Xh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jh=p(),lr=r("p"),em=t("This model is also a PyTorch "),dr=r("a"),nm=t("torch.nn.Module"),tm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),om=p(),Nn=r("div"),F(cr.$$.fragment),sm=p(),Ft=r("p"),rm=t("The "),Wi=r("a"),am=t("FunnelBaseModel"),im=t(" forward method, overrides the "),cd=r("code"),lm=t("__call__"),dm=t(" special method."),cm=p(),F(fo.$$.fragment),um=p(),F(ho.$$.fragment),cu=p(),bt=r("h2"),mo=r("a"),ud=r("span"),F(ur.$$.fragment),pm=p(),pd=r("span"),fm=t("FunnelModel"),uu=p(),pn=r("div"),F(pr.$$.fragment),hm=p(),fd=r("p"),mm=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),gm=p(),fr=r("p"),_m=t("The Funnel Transformer model was proposed in "),hr=r("a"),km=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),vm=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tm=p(),mr=r("p"),Fm=t("This model inherits from "),Qi=r("a"),bm=t("PreTrainedModel"),wm=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym=p(),gr=r("p"),$m=t("This model is also a PyTorch "),_r=r("a"),Em=t("torch.nn.Module"),Mm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zm=p(),In=r("div"),F(kr.$$.fragment),qm=p(),wt=r("p"),Pm=t("The "),Ui=r("a"),xm=t("FunnelModel"),Cm=t(" forward method, overrides the "),hd=r("code"),jm=t("__call__"),Om=t(" special method."),Lm=p(),F(go.$$.fragment),Dm=p(),F(_o.$$.fragment),pu=p(),yt=r("h2"),ko=r("a"),md=r("span"),F(vr.$$.fragment),Am=p(),gd=r("span"),Nm=t("FunnelModelForPreTraining"),fu=p(),$t=r("div"),F(Tr.$$.fragment),Im=p(),Sn=r("div"),F(Fr.$$.fragment),Sm=p(),Et=r("p"),Bm=t("The "),Ki=r("a"),Wm=t("FunnelForPreTraining"),Qm=t(" forward method, overrides the "),_d=r("code"),Um=t("__call__"),Km=t(" special method."),Rm=p(),F(vo.$$.fragment),Hm=p(),F(To.$$.fragment),hu=p(),Mt=r("h2"),Fo=r("a"),kd=r("span"),F(br.$$.fragment),Vm=p(),vd=r("span"),Ym=t("FunnelForMaskedLM"),mu=p(),fn=r("div"),F(wr.$$.fragment),Gm=p(),yr=r("p"),Zm=t("Funnel Transformer Model with a "),Td=r("code"),Xm=t("language modeling"),Jm=t(" head on top."),eg=p(),$r=r("p"),ng=t("The Funnel Transformer model was proposed in "),Er=r("a"),tg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),og=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sg=p(),Mr=r("p"),rg=t("This model inherits from "),Ri=r("a"),ag=t("PreTrainedModel"),ig=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lg=p(),zr=r("p"),dg=t("This model is also a PyTorch "),qr=r("a"),cg=t("torch.nn.Module"),ug=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=p(),Tn=r("div"),F(Pr.$$.fragment),fg=p(),zt=r("p"),hg=t("The "),Hi=r("a"),mg=t("FunnelForMaskedLM"),gg=t(" forward method, overrides the "),Fd=r("code"),_g=t("__call__"),kg=t(" special method."),vg=p(),F(bo.$$.fragment),Tg=p(),F(wo.$$.fragment),Fg=p(),F(yo.$$.fragment),gu=p(),qt=r("h2"),$o=r("a"),bd=r("span"),F(xr.$$.fragment),bg=p(),wd=r("span"),wg=t("FunnelForSequenceClassification"),_u=p(),hn=r("div"),F(Cr.$$.fragment),yg=p(),yd=r("p"),$g=t(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Eg=p(),jr=r("p"),Mg=t("The Funnel Transformer model was proposed in "),Or=r("a"),zg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pg=p(),Lr=r("p"),xg=t("This model inherits from "),Vi=r("a"),Cg=t("PreTrainedModel"),jg=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Og=p(),Dr=r("p"),Lg=t("This model is also a PyTorch "),Ar=r("a"),Dg=t("torch.nn.Module"),Ag=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ng=p(),cn=r("div"),F(Nr.$$.fragment),Ig=p(),Pt=r("p"),Sg=t("The "),Yi=r("a"),Bg=t("FunnelForSequenceClassification"),Wg=t(" forward method, overrides the "),$d=r("code"),Qg=t("__call__"),Ug=t(" special method."),Kg=p(),F(Eo.$$.fragment),Rg=p(),F(Mo.$$.fragment),Hg=p(),F(zo.$$.fragment),Vg=p(),F(qo.$$.fragment),Yg=p(),F(Po.$$.fragment),ku=p(),xt=r("h2"),xo=r("a"),Ed=r("span"),F(Ir.$$.fragment),Gg=p(),Md=r("span"),Zg=t("FunnelForMultipleChoice"),vu=p(),mn=r("div"),F(Sr.$$.fragment),Xg=p(),zd=r("p"),Jg=t(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),e_=p(),Br=r("p"),n_=t("The Funnel Transformer model was proposed in "),Wr=r("a"),t_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),o_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),s_=p(),Qr=r("p"),r_=t("This model inherits from "),Gi=r("a"),a_=t("PreTrainedModel"),i_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_=p(),Ur=r("p"),d_=t("This model is also a PyTorch "),Kr=r("a"),c_=t("torch.nn.Module"),u_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=p(),Bn=r("div"),F(Rr.$$.fragment),f_=p(),Ct=r("p"),h_=t("The "),Zi=r("a"),m_=t("FunnelForMultipleChoice"),g_=t(" forward method, overrides the "),qd=r("code"),__=t("__call__"),k_=t(" special method."),v_=p(),F(Co.$$.fragment),T_=p(),F(jo.$$.fragment),Tu=p(),jt=r("h2"),Oo=r("a"),Pd=r("span"),F(Hr.$$.fragment),F_=p(),xd=r("span"),b_=t("FunnelForTokenClassification"),Fu=p(),gn=r("div"),F(Vr.$$.fragment),w_=p(),Cd=r("p"),y_=t(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),$_=p(),Yr=r("p"),E_=t("The Funnel Transformer model was proposed in "),Gr=r("a"),M_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),z_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),q_=p(),Zr=r("p"),P_=t("This model inherits from "),Xi=r("a"),x_=t("PreTrainedModel"),C_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=p(),Xr=r("p"),O_=t("This model is also a PyTorch "),Jr=r("a"),L_=t("torch.nn.Module"),D_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A_=p(),Fn=r("div"),F(ea.$$.fragment),N_=p(),Ot=r("p"),I_=t("The "),Ji=r("a"),S_=t("FunnelForTokenClassification"),B_=t(" forward method, overrides the "),jd=r("code"),W_=t("__call__"),Q_=t(" special method."),U_=p(),F(Lo.$$.fragment),K_=p(),F(Do.$$.fragment),R_=p(),F(Ao.$$.fragment),bu=p(),Lt=r("h2"),No=r("a"),Od=r("span"),F(na.$$.fragment),H_=p(),Ld=r("span"),V_=t("FunnelForQuestionAnswering"),wu=p(),_n=r("div"),F(ta.$$.fragment),Y_=p(),Dt=r("p"),G_=t(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),Dd=r("code"),Z_=t("span start logits"),X_=t(" and "),Ad=r("code"),J_=t("span end logits"),ek=t(")."),nk=p(),oa=r("p"),tk=t("The Funnel Transformer model was proposed in "),sa=r("a"),ok=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rk=p(),ra=r("p"),ak=t("This model inherits from "),el=r("a"),ik=t("PreTrainedModel"),lk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dk=p(),aa=r("p"),ck=t("This model is also a PyTorch "),ia=r("a"),uk=t("torch.nn.Module"),pk=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fk=p(),bn=r("div"),F(la.$$.fragment),hk=p(),At=r("p"),mk=t("The "),nl=r("a"),gk=t("FunnelForQuestionAnswering"),_k=t(" forward method, overrides the "),Nd=r("code"),kk=t("__call__"),vk=t(" special method."),Tk=p(),F(Io.$$.fragment),Fk=p(),F(So.$$.fragment),bk=p(),F(Bo.$$.fragment),yu=p(),Nt=r("h2"),Wo=r("a"),Id=r("span"),F(da.$$.fragment),wk=p(),Sd=r("span"),yk=t("TFFunnelBaseModel"),$u=p(),nn=r("div"),F(ca.$$.fragment),$k=p(),Bd=r("p"),Ek=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Mk=p(),ua=r("p"),zk=t("The Funnel Transformer model was proposed in "),pa=r("a"),qk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Pk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),xk=p(),fa=r("p"),Ck=t("This model inherits from "),tl=r("a"),jk=t("TFPreTrainedModel"),Ok=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk=p(),ha=r("p"),Dk=t("This model is also a "),ma=r("a"),Ak=t("tf.keras.Model"),Nk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ik=p(),F(Qo.$$.fragment),Sk=p(),Wn=r("div"),F(ga.$$.fragment),Bk=p(),It=r("p"),Wk=t("The "),ol=r("a"),Qk=t("TFFunnelBaseModel"),Uk=t(" forward method, overrides the "),Wd=r("code"),Kk=t("__call__"),Rk=t(" special method."),Hk=p(),F(Uo.$$.fragment),Vk=p(),F(Ko.$$.fragment),Eu=p(),St=r("h2"),Ro=r("a"),Qd=r("span"),F(_a.$$.fragment),Yk=p(),Ud=r("span"),Gk=t("TFFunnelModel"),Mu=p(),tn=r("div"),F(ka.$$.fragment),Zk=p(),Kd=r("p"),Xk=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Jk=p(),va=r("p"),ev=t("The Funnel Transformer model was proposed in "),Ta=r("a"),nv=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tv=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ov=p(),Fa=r("p"),sv=t("This model inherits from "),sl=r("a"),rv=t("TFPreTrainedModel"),av=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iv=p(),ba=r("p"),lv=t("This model is also a "),wa=r("a"),dv=t("tf.keras.Model"),cv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uv=p(),F(Ho.$$.fragment),pv=p(),Qn=r("div"),F(ya.$$.fragment),fv=p(),Bt=r("p"),hv=t("The "),rl=r("a"),mv=t("TFFunnelModel"),gv=t(" forward method, overrides the "),Rd=r("code"),_v=t("__call__"),kv=t(" special method."),vv=p(),F(Vo.$$.fragment),Tv=p(),F(Yo.$$.fragment),zu=p(),Wt=r("h2"),Go=r("a"),Hd=r("span"),F($a.$$.fragment),Fv=p(),Vd=r("span"),bv=t("TFFunnelModelForPreTraining"),qu=p(),on=r("div"),F(Ea.$$.fragment),wv=p(),Yd=r("p"),yv=t("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),$v=p(),Ma=r("p"),Ev=t("The Funnel Transformer model was proposed in "),za=r("a"),Mv=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zv=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qv=p(),qa=r("p"),Pv=t("This model inherits from "),al=r("a"),xv=t("TFPreTrainedModel"),Cv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jv=p(),Pa=r("p"),Ov=t("This model is also a "),xa=r("a"),Lv=t("tf.keras.Model"),Dv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Av=p(),F(Zo.$$.fragment),Nv=p(),Un=r("div"),F(Ca.$$.fragment),Iv=p(),Qt=r("p"),Sv=t("The "),il=r("a"),Bv=t("TFFunnelForPreTraining"),Wv=t(" forward method, overrides the "),Gd=r("code"),Qv=t("__call__"),Uv=t(" special method."),Kv=p(),F(Xo.$$.fragment),Rv=p(),F(Jo.$$.fragment),Pu=p(),Ut=r("h2"),es=r("a"),Zd=r("span"),F(ja.$$.fragment),Hv=p(),Xd=r("span"),Vv=t("TFFunnelForMaskedLM"),xu=p(),sn=r("div"),F(Oa.$$.fragment),Yv=p(),La=r("p"),Gv=t("Funnel Model with a "),Jd=r("code"),Zv=t("language modeling"),Xv=t(" head on top."),Jv=p(),Da=r("p"),eT=t("The Funnel Transformer model was proposed in "),Aa=r("a"),nT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),oT=p(),Na=r("p"),sT=t("This model inherits from "),ll=r("a"),rT=t("TFPreTrainedModel"),aT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT=p(),Ia=r("p"),lT=t("This model is also a "),Sa=r("a"),dT=t("tf.keras.Model"),cT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uT=p(),F(ns.$$.fragment),pT=p(),wn=r("div"),F(Ba.$$.fragment),fT=p(),Kt=r("p"),hT=t("The "),dl=r("a"),mT=t("TFFunnelForMaskedLM"),gT=t(" forward method, overrides the "),ec=r("code"),_T=t("__call__"),kT=t(" special method."),vT=p(),F(ts.$$.fragment),TT=p(),F(os.$$.fragment),FT=p(),F(ss.$$.fragment),Cu=p(),Rt=r("h2"),rs=r("a"),nc=r("span"),F(Wa.$$.fragment),bT=p(),tc=r("span"),wT=t("TFFunnelForSequenceClassification"),ju=p(),rn=r("div"),F(Qa.$$.fragment),yT=p(),oc=r("p"),$T=t(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ET=p(),Ua=r("p"),MT=t("The Funnel Transformer model was proposed in "),Ka=r("a"),zT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),PT=p(),Ra=r("p"),xT=t("This model inherits from "),cl=r("a"),CT=t("TFPreTrainedModel"),jT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OT=p(),Ha=r("p"),LT=t("This model is also a "),Va=r("a"),DT=t("tf.keras.Model"),AT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),NT=p(),F(as.$$.fragment),IT=p(),yn=r("div"),F(Ya.$$.fragment),ST=p(),Ht=r("p"),BT=t("The "),ul=r("a"),WT=t("TFFunnelForSequenceClassification"),QT=t(" forward method, overrides the "),sc=r("code"),UT=t("__call__"),KT=t(" special method."),RT=p(),F(is.$$.fragment),HT=p(),F(ls.$$.fragment),VT=p(),F(ds.$$.fragment),Ou=p(),Vt=r("h2"),cs=r("a"),rc=r("span"),F(Ga.$$.fragment),YT=p(),ac=r("span"),GT=t("TFFunnelForMultipleChoice"),Lu=p(),an=r("div"),F(Za.$$.fragment),ZT=p(),ic=r("p"),XT=t(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),JT=p(),Xa=r("p"),eF=t("The Funnel Transformer model was proposed in "),Ja=r("a"),nF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),oF=p(),ei=r("p"),sF=t("This model inherits from "),pl=r("a"),rF=t("TFPreTrainedModel"),aF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iF=p(),ni=r("p"),lF=t("This model is also a "),ti=r("a"),dF=t("tf.keras.Model"),cF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uF=p(),F(us.$$.fragment),pF=p(),Kn=r("div"),F(oi.$$.fragment),fF=p(),Yt=r("p"),hF=t("The "),fl=r("a"),mF=t("TFFunnelForMultipleChoice"),gF=t(" forward method, overrides the "),lc=r("code"),_F=t("__call__"),kF=t(" special method."),vF=p(),F(ps.$$.fragment),TF=p(),F(fs.$$.fragment),Du=p(),Gt=r("h2"),hs=r("a"),dc=r("span"),F(si.$$.fragment),FF=p(),cc=r("span"),bF=t("TFFunnelForTokenClassification"),Au=p(),ln=r("div"),F(ri.$$.fragment),wF=p(),uc=r("p"),yF=t(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$F=p(),ai=r("p"),EF=t("The Funnel Transformer model was proposed in "),ii=r("a"),MF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qF=p(),li=r("p"),PF=t("This model inherits from "),hl=r("a"),xF=t("TFPreTrainedModel"),CF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jF=p(),di=r("p"),OF=t("This model is also a "),ci=r("a"),LF=t("tf.keras.Model"),DF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AF=p(),F(ms.$$.fragment),NF=p(),$n=r("div"),F(ui.$$.fragment),IF=p(),Zt=r("p"),SF=t("The "),ml=r("a"),BF=t("TFFunnelForTokenClassification"),WF=t(" forward method, overrides the "),pc=r("code"),QF=t("__call__"),UF=t(" special method."),KF=p(),F(gs.$$.fragment),RF=p(),F(_s.$$.fragment),HF=p(),F(ks.$$.fragment),Nu=p(),Xt=r("h2"),vs=r("a"),fc=r("span"),F(pi.$$.fragment),VF=p(),hc=r("span"),YF=t("TFFunnelForQuestionAnswering"),Iu=p(),dn=r("div"),F(fi.$$.fragment),GF=p(),Jt=r("p"),ZF=t(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mc=r("code"),XF=t("span start logits"),JF=t(" and "),gc=r("code"),eb=t("span end logits"),nb=t(")."),tb=p(),hi=r("p"),ob=t("The Funnel Transformer model was proposed in "),mi=r("a"),sb=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rb=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ab=p(),gi=r("p"),ib=t("This model inherits from "),gl=r("a"),lb=t("TFPreTrainedModel"),db=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cb=p(),_i=r("p"),ub=t("This model is also a "),ki=r("a"),pb=t("tf.keras.Model"),fb=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hb=p(),F(Ts.$$.fragment),mb=p(),En=r("div"),F(vi.$$.fragment),gb=p(),eo=r("p"),_b=t("The "),_l=r("a"),kb=t("TFFunnelForQuestionAnswering"),vb=t(" forward method, overrides the "),_c=r("code"),Tb=t("__call__"),Fb=t(" special method."),bb=p(),F(Fs.$$.fragment),wb=p(),F(bs.$$.fragment),yb=p(),F(ws.$$.fragment),this.h()},l(s){const v=O$('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(n),k=f(s),c=a(s,"H1",{class:!0});var Ti=i(c);h=a(Ti,"A",{id:!0,class:!0,href:!0});var kc=i(h);T=a(kc,"SPAN",{});var vc=i(T);b(l.$$.fragment,vc),vc.forEach(n),kc.forEach(n),u=f(Ti),x=a(Ti,"SPAN",{});var Tc=i(x);ke=o(Tc,"Funnel Transformer"),Tc.forEach(n),Ti.forEach(n),fe=f(s),I=a(s,"H2",{class:!0});var Fi=i(I);re=a(Fi,"A",{id:!0,class:!0,href:!0});var Fc=i(re);ee=a(Fc,"SPAN",{});var bc=i(ee);b(M.$$.fragment,bc),bc.forEach(n),Fc.forEach(n),ve=f(Fi),K=a(Fi,"SPAN",{});var wc=i(K);Te=o(wc,"Overview"),wc.forEach(n),Fi.forEach(n),he=f(s),B=a(s,"P",{});var bi=i(B);Fe=o(bi,"The Funnel Transformer model was proposed in the paper "),ae=a(bi,"A",{href:!0,rel:!0});var yc=i(ae);H=o(yc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),yc.forEach(n),be=o(bi,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),bi.forEach(n),me=f(s),Q=a(s,"P",{});var $c=i(Q);we=o($c,"The abstract from the paper is the following:"),$c.forEach(n),ge=f(s),U=a(s,"P",{});var Ec=i(U);ue=a(Ec,"EM",{});var Mc=i(ue);ye=o(Mc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),Mc.forEach(n),Ec.forEach(n),oe=f(s),C=a(s,"P",{});var zc=i(C);O=o(zc,"Tips:"),zc.forEach(n),_e=f(s),W=a(s,"UL",{});var wi=i(W);pe=a(wi,"LI",{});var qc=i(pe);$e=o(qc,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),qc.forEach(n),V=f(wi),R=a(wi,"LI",{});var Je=i(R);Ee=o(Je,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),j=a(Je,"A",{href:!0});var Pc=i(j);Me=o(Pc,"FunnelModel"),Pc.forEach(n),Y=o(Je,", "),le=a(Je,"A",{href:!0});var xc=i(le);ze=o(xc,"FunnelForPreTraining"),xc.forEach(n),G=o(Je,`,
`),de=a(Je,"A",{href:!0});var Cc=i(de);qe=o(Cc,"FunnelForMaskedLM"),Cc.forEach(n),N=o(Je,", "),ce=a(Je,"A",{href:!0});var jc=i(ce);Z=o(jc,"FunnelForTokenClassification"),jc.forEach(n),Pe=o(Je,` and
class:`),ne=a(Je,"EM",{});var Oc=i(ne);L=o(Oc,"~transformers.FunnelForQuestionAnswering"),Oc.forEach(n),xe=o(Je,`. The second ones should be used for
`),D=a(Je,"A",{href:!0});var Lc=i(D);Ce=o(Lc,"FunnelBaseModel"),Lc.forEach(n),je=o(Je,", "),g=a(Je,"A",{href:!0});var Dc=i(g);z=o(Dc,"FunnelForSequenceClassification"),Dc.forEach(n),We=o(Je,` and
`),J=a(Je,"A",{href:!0});var Ac=i(J);Qe=o(Ac,"FunnelForMultipleChoice"),Ac.forEach(n),Ue=o(Je,"."),Je.forEach(n),wi.forEach(n),q=f(s),Oe=a(s,"P",{});var no=i(Oe);Ke=o(no,"This model was contributed by "),De=a(no,"A",{href:!0,rel:!0});var Nc=i(De);Re=o(Nc,"sgugger"),Nc.forEach(n),He=o(no,". The original code can be found "),A=a(no,"A",{href:!0,rel:!0});var Ic=i(A);X=o(Ic,"here"),Ic.forEach(n),Ve=o(no,"."),no.forEach(n),Ne=f(s),S=a(s,"H2",{class:!0});var yi=i(S);Le=a(yi,"A",{id:!0,class:!0,href:!0});var Sc=i(Le);Ae=a(Sc,"SPAN",{});var Bc=i(Ae);b(ie.$$.fragment,Bc),Bc.forEach(n),Sc.forEach(n),Ye=f(yi),te=a(yi,"SPAN",{});var Wc=i(te);Ge=o(Wc,"FunnelConfig"),Wc.forEach(n),yi.forEach(n),eu=f(s),Jn=a(s,"DIV",{class:!0});var to=i(Jn);b(Os.$$.fragment,to),df=f(to),et=a(to,"P",{});var nt=i(et);cf=o(nt,"This is the configuration class to store the configuration of a "),zi=a(nt,"A",{href:!0});var Qc=i(zi);uf=o(Qc,"FunnelModel"),Qc.forEach(n),pf=o(nt," or a "),qi=a(nt,"A",{href:!0});var Uc=i(qi);ff=o(Uc,"TFBertModel"),Uc.forEach(n),hf=o(nt,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),Ls=a(nt,"A",{href:!0,rel:!0});var Kc=i(Ls);mf=o(Kc,"funnel-transformer/small"),Kc.forEach(n),gf=o(nt," architecture."),nt.forEach(n),_f=f(to),pt=a(to,"P",{});var oo=i(pt);kf=o(oo,"Configuration objects inherit from "),Pi=a(oo,"A",{href:!0});var Rc=i(Pi);vf=o(Rc,"PretrainedConfig"),Rc.forEach(n),Tf=o(oo,` and can be used to control the model outputs. Read the
documentation from `),xi=a(oo,"A",{href:!0});var Hc=i(xi);Ff=o(Hc,"PretrainedConfig"),Hc.forEach(n),bf=o(oo," for more information."),oo.forEach(n),to.forEach(n),nu=f(s),ft=a(s,"H2",{class:!0});var $i=i(ft);ro=a($i,"A",{id:!0,class:!0,href:!0});var Vc=i(ro);Sl=a(Vc,"SPAN",{});var Yc=i(Sl);b(Ds.$$.fragment,Yc),Yc.forEach(n),Vc.forEach(n),wf=f($i),Bl=a($i,"SPAN",{});var Gc=i(Bl);yf=o(Gc,"FunnelTokenizer"),Gc.forEach(n),$i.forEach(n),tu=f(s),en=a(s,"DIV",{class:!0});var kn=i(en);b(As.$$.fragment,kn),$f=f(kn),Wl=a(kn,"P",{});var Zc=i(Wl);Ef=o(Zc,"Construct a Funnel Transformer tokenizer. Based on WordPiece."),Zc.forEach(n),Mf=f(kn),Ns=a(kn,"P",{});var Ei=i(Ns);zf=o(Ei,"This tokenizer inherits from "),Ci=a(Ei,"A",{href:!0});var Xc=i(Ci);qf=o(Xc,"PreTrainedTokenizer"),Xc.forEach(n),Pf=o(Ei,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ei.forEach(n),xf=f(kn),tt=a(kn,"DIV",{class:!0});var so=i(tt);b(Is.$$.fragment,so),Cf=f(so),Ql=a(so,"P",{});var Jc=i(Ql);jf=o(Jc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Jc.forEach(n),Of=f(so),Ss=a(so,"UL",{});var Mi=i(Ss);ji=a(Mi,"LI",{});var kl=i(ji);Lf=o(kl,"single sequence: "),Ul=a(kl,"CODE",{});var zb=i(Ul);Df=o(zb,"[CLS] X [SEP]"),zb.forEach(n),kl.forEach(n),Af=f(Mi),Oi=a(Mi,"LI",{});var $b=i(Oi);Nf=o($b,"pair of sequences: "),Kl=a($b,"CODE",{});var qb=i(Kl);If=o(qb,"[CLS] A [SEP] B [SEP]"),qb.forEach(n),$b.forEach(n),Mi.forEach(n),so.forEach(n),Sf=f(kn),ao=a(kn,"DIV",{class:!0});var Bu=i(ao);b(Bs.$$.fragment,Bu),Bf=f(Bu),Ws=a(Bu,"P",{});var Wu=i(Ws);Wf=o(Wu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Rl=a(Wu,"CODE",{});var Pb=i(Rl);Qf=o(Pb,"prepare_for_model"),Pb.forEach(n),Uf=o(Wu," method."),Wu.forEach(n),Bu.forEach(n),Kf=f(kn),Dn=a(kn,"DIV",{class:!0});var ys=i(Dn);b(Qs.$$.fragment,ys),Rf=f(ys),Hl=a(ys,"P",{});var xb=i(Hl);Hf=o(xb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),xb.forEach(n),Vf=f(ys),b(io.$$.fragment,ys),Yf=f(ys),ht=a(ys,"P",{});var vl=i(ht);Gf=o(vl,"If "),Vl=a(vl,"CODE",{});var Cb=i(Vl);Zf=o(Cb,"token_ids_1"),Cb.forEach(n),Xf=o(vl," is "),Yl=a(vl,"CODE",{});var jb=i(Yl);Jf=o(jb,"None"),jb.forEach(n),eh=o(vl,", this method only returns the first portion of the mask (0s)."),vl.forEach(n),ys.forEach(n),nh=f(kn),Li=a(kn,"DIV",{class:!0});var Ob=i(Li);b(Us.$$.fragment,Ob),Ob.forEach(n),kn.forEach(n),ou=f(s),mt=a(s,"H2",{class:!0});var Qu=i(mt);lo=a(Qu,"A",{id:!0,class:!0,href:!0});var Lb=i(lo);Gl=a(Lb,"SPAN",{});var Db=i(Gl);b(Ks.$$.fragment,Db),Db.forEach(n),Lb.forEach(n),th=f(Qu),Zl=a(Qu,"SPAN",{});var Ab=i(Zl);oh=o(Ab,"FunnelTokenizerFast"),Ab.forEach(n),Qu.forEach(n),su=f(s),vn=a(s,"DIV",{class:!0});var st=i(vn);b(Rs.$$.fragment,st),sh=f(st),Hs=a(st,"P",{});var Uu=i(Hs);rh=o(Uu,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Xl=a(Uu,"EM",{});var Nb=i(Xl);ah=o(Nb,"tokenizers"),Nb.forEach(n),ih=o(Uu," library). Based on WordPiece."),Uu.forEach(n),lh=f(st),Vs=a(st,"P",{});var Ku=i(Vs);dh=o(Ku,"This tokenizer inherits from "),Di=a(Ku,"A",{href:!0});var Ib=i(Di);ch=o(Ib,"PreTrainedTokenizerFast"),Ib.forEach(n),uh=o(Ku,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ku.forEach(n),ph=f(st),ot=a(st,"DIV",{class:!0});var Tl=i(ot);b(Ys.$$.fragment,Tl),fh=f(Tl),Jl=a(Tl,"P",{});var Sb=i(Jl);hh=o(Sb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Funnel sequence has the following format:`),Sb.forEach(n),mh=f(Tl),Gs=a(Tl,"UL",{});var Ru=i(Gs);Ai=a(Ru,"LI",{});var Eb=i(Ai);gh=o(Eb,"single sequence: "),ed=a(Eb,"CODE",{});var Bb=i(ed);_h=o(Bb,"[CLS] X [SEP]"),Bb.forEach(n),Eb.forEach(n),kh=f(Ru),Ni=a(Ru,"LI",{});var Mb=i(Ni);vh=o(Mb,"pair of sequences: "),nd=a(Mb,"CODE",{});var Wb=i(nd);Th=o(Wb,"[CLS] A [SEP] B [SEP]"),Wb.forEach(n),Mb.forEach(n),Ru.forEach(n),Tl.forEach(n),Fh=f(st),An=a(st,"DIV",{class:!0});var $s=i(An);b(Zs.$$.fragment,$s),bh=f($s),td=a($s,"P",{});var Qb=i(td);wh=o(Qb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Qb.forEach(n),yh=f($s),b(co.$$.fragment,$s),$h=f($s),gt=a($s,"P",{});var Fl=i(gt);Eh=o(Fl,"If "),od=a(Fl,"CODE",{});var Ub=i(od);Mh=o(Ub,"token_ids_1"),Ub.forEach(n),zh=o(Fl," is "),sd=a(Fl,"CODE",{});var Kb=i(sd);qh=o(Kb,"None"),Kb.forEach(n),Ph=o(Fl,", this method only returns the first portion of the mask (0s)."),Fl.forEach(n),$s.forEach(n),st.forEach(n),ru=f(s),_t=a(s,"H2",{class:!0});var Hu=i(_t);uo=a(Hu,"A",{id:!0,class:!0,href:!0});var Rb=i(uo);rd=a(Rb,"SPAN",{});var Hb=i(rd);b(Xs.$$.fragment,Hb),Hb.forEach(n),Rb.forEach(n),xh=f(Hu),ad=a(Hu,"SPAN",{});var Vb=i(ad);Ch=o(Vb,"Funnel specific outputs"),Vb.forEach(n),Hu.forEach(n),au=f(s),kt=a(s,"DIV",{class:!0});var Vu=i(kt);b(Js.$$.fragment,Vu),jh=f(Vu),er=a(Vu,"P",{});var Yu=i(er);Oh=o(Yu,"Output type of "),Ii=a(Yu,"A",{href:!0});var Yb=i(Ii);Lh=o(Yb,"FunnelForPreTraining"),Yb.forEach(n),Dh=o(Yu,"."),Yu.forEach(n),Vu.forEach(n),iu=f(s),vt=a(s,"DIV",{class:!0});var Gu=i(vt);b(nr.$$.fragment,Gu),Ah=f(Gu),tr=a(Gu,"P",{});var Zu=i(tr);Nh=o(Zu,"Output type of "),Si=a(Zu,"A",{href:!0});var Gb=i(Si);Ih=o(Gb,"FunnelForPreTraining"),Gb.forEach(n),Sh=o(Zu,"."),Zu.forEach(n),Gu.forEach(n),lu=f(s),Tt=a(s,"H2",{class:!0});var Xu=i(Tt);po=a(Xu,"A",{id:!0,class:!0,href:!0});var Zb=i(po);id=a(Zb,"SPAN",{});var Xb=i(id);b(or.$$.fragment,Xb),Xb.forEach(n),Zb.forEach(n),Bh=f(Xu),ld=a(Xu,"SPAN",{});var Jb=i(ld);Wh=o(Jb,"FunnelBaseModel"),Jb.forEach(n),Xu.forEach(n),du=f(s),un=a(s,"DIV",{class:!0});var Rn=i(un);b(sr.$$.fragment,Rn),Qh=f(Rn),dd=a(Rn,"P",{});var ew=i(dd);Uh=o(ew,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),ew.forEach(n),Kh=f(Rn),rr=a(Rn,"P",{});var Ju=i(rr);Rh=o(Ju,"The Funnel Transformer model was proposed in "),ar=a(Ju,"A",{href:!0,rel:!0});var nw=i(ar);Hh=o(nw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nw.forEach(n),Vh=o(Ju," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ju.forEach(n),Yh=f(Rn),ir=a(Rn,"P",{});var ep=i(ir);Gh=o(ep,"This model inherits from "),Bi=a(ep,"A",{href:!0});var tw=i(Bi);Zh=o(tw,"PreTrainedModel"),tw.forEach(n),Xh=o(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(n),Jh=f(Rn),lr=a(Rn,"P",{});var np=i(lr);em=o(np,"This model is also a PyTorch "),dr=a(np,"A",{href:!0,rel:!0});var ow=i(dr);nm=o(ow,"torch.nn.Module"),ow.forEach(n),tm=o(np,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),np.forEach(n),om=f(Rn),Nn=a(Rn,"DIV",{class:!0});var Es=i(Nn);b(cr.$$.fragment,Es),sm=f(Es),Ft=a(Es,"P",{});var bl=i(Ft);rm=o(bl,"The "),Wi=a(bl,"A",{href:!0});var sw=i(Wi);am=o(sw,"FunnelBaseModel"),sw.forEach(n),im=o(bl," forward method, overrides the "),cd=a(bl,"CODE",{});var rw=i(cd);lm=o(rw,"__call__"),rw.forEach(n),dm=o(bl," special method."),bl.forEach(n),cm=f(Es),b(fo.$$.fragment,Es),um=f(Es),b(ho.$$.fragment,Es),Es.forEach(n),Rn.forEach(n),cu=f(s),bt=a(s,"H2",{class:!0});var tp=i(bt);mo=a(tp,"A",{id:!0,class:!0,href:!0});var aw=i(mo);ud=a(aw,"SPAN",{});var iw=i(ud);b(ur.$$.fragment,iw),iw.forEach(n),aw.forEach(n),pm=f(tp),pd=a(tp,"SPAN",{});var lw=i(pd);fm=o(lw,"FunnelModel"),lw.forEach(n),tp.forEach(n),uu=f(s),pn=a(s,"DIV",{class:!0});var Hn=i(pn);b(pr.$$.fragment,Hn),hm=f(Hn),fd=a(Hn,"P",{});var dw=i(fd);mm=o(dw,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),dw.forEach(n),gm=f(Hn),fr=a(Hn,"P",{});var op=i(fr);_m=o(op,"The Funnel Transformer model was proposed in "),hr=a(op,"A",{href:!0,rel:!0});var cw=i(hr);km=o(cw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),cw.forEach(n),vm=o(op," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),op.forEach(n),Tm=f(Hn),mr=a(Hn,"P",{});var sp=i(mr);Fm=o(sp,"This model inherits from "),Qi=a(sp,"A",{href:!0});var uw=i(Qi);bm=o(uw,"PreTrainedModel"),uw.forEach(n),wm=o(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(n),ym=f(Hn),gr=a(Hn,"P",{});var rp=i(gr);$m=o(rp,"This model is also a PyTorch "),_r=a(rp,"A",{href:!0,rel:!0});var pw=i(_r);Em=o(pw,"torch.nn.Module"),pw.forEach(n),Mm=o(rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp.forEach(n),zm=f(Hn),In=a(Hn,"DIV",{class:!0});var Ms=i(In);b(kr.$$.fragment,Ms),qm=f(Ms),wt=a(Ms,"P",{});var wl=i(wt);Pm=o(wl,"The "),Ui=a(wl,"A",{href:!0});var fw=i(Ui);xm=o(fw,"FunnelModel"),fw.forEach(n),Cm=o(wl," forward method, overrides the "),hd=a(wl,"CODE",{});var hw=i(hd);jm=o(hw,"__call__"),hw.forEach(n),Om=o(wl," special method."),wl.forEach(n),Lm=f(Ms),b(go.$$.fragment,Ms),Dm=f(Ms),b(_o.$$.fragment,Ms),Ms.forEach(n),Hn.forEach(n),pu=f(s),yt=a(s,"H2",{class:!0});var ap=i(yt);ko=a(ap,"A",{id:!0,class:!0,href:!0});var mw=i(ko);md=a(mw,"SPAN",{});var gw=i(md);b(vr.$$.fragment,gw),gw.forEach(n),mw.forEach(n),Am=f(ap),gd=a(ap,"SPAN",{});var _w=i(gd);Nm=o(_w,"FunnelModelForPreTraining"),_w.forEach(n),ap.forEach(n),fu=f(s),$t=a(s,"DIV",{class:!0});var ip=i($t);b(Tr.$$.fragment,ip),Im=f(ip),Sn=a(ip,"DIV",{class:!0});var zs=i(Sn);b(Fr.$$.fragment,zs),Sm=f(zs),Et=a(zs,"P",{});var yl=i(Et);Bm=o(yl,"The "),Ki=a(yl,"A",{href:!0});var kw=i(Ki);Wm=o(kw,"FunnelForPreTraining"),kw.forEach(n),Qm=o(yl," forward method, overrides the "),_d=a(yl,"CODE",{});var vw=i(_d);Um=o(vw,"__call__"),vw.forEach(n),Km=o(yl," special method."),yl.forEach(n),Rm=f(zs),b(vo.$$.fragment,zs),Hm=f(zs),b(To.$$.fragment,zs),zs.forEach(n),ip.forEach(n),hu=f(s),Mt=a(s,"H2",{class:!0});var lp=i(Mt);Fo=a(lp,"A",{id:!0,class:!0,href:!0});var Tw=i(Fo);kd=a(Tw,"SPAN",{});var Fw=i(kd);b(br.$$.fragment,Fw),Fw.forEach(n),Tw.forEach(n),Vm=f(lp),vd=a(lp,"SPAN",{});var bw=i(vd);Ym=o(bw,"FunnelForMaskedLM"),bw.forEach(n),lp.forEach(n),mu=f(s),fn=a(s,"DIV",{class:!0});var Vn=i(fn);b(wr.$$.fragment,Vn),Gm=f(Vn),yr=a(Vn,"P",{});var dp=i(yr);Zm=o(dp,"Funnel Transformer Model with a "),Td=a(dp,"CODE",{});var ww=i(Td);Xm=o(ww,"language modeling"),ww.forEach(n),Jm=o(dp," head on top."),dp.forEach(n),eg=f(Vn),$r=a(Vn,"P",{});var cp=i($r);ng=o(cp,"The Funnel Transformer model was proposed in "),Er=a(cp,"A",{href:!0,rel:!0});var yw=i(Er);tg=o(yw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),yw.forEach(n),og=o(cp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),cp.forEach(n),sg=f(Vn),Mr=a(Vn,"P",{});var up=i(Mr);rg=o(up,"This model inherits from "),Ri=a(up,"A",{href:!0});var $w=i(Ri);ag=o($w,"PreTrainedModel"),$w.forEach(n),ig=o(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(n),lg=f(Vn),zr=a(Vn,"P",{});var pp=i(zr);dg=o(pp,"This model is also a PyTorch "),qr=a(pp,"A",{href:!0,rel:!0});var Ew=i(qr);cg=o(Ew,"torch.nn.Module"),Ew.forEach(n),ug=o(pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pp.forEach(n),pg=f(Vn),Tn=a(Vn,"DIV",{class:!0});var rt=i(Tn);b(Pr.$$.fragment,rt),fg=f(rt),zt=a(rt,"P",{});var $l=i(zt);hg=o($l,"The "),Hi=a($l,"A",{href:!0});var Mw=i(Hi);mg=o(Mw,"FunnelForMaskedLM"),Mw.forEach(n),gg=o($l," forward method, overrides the "),Fd=a($l,"CODE",{});var zw=i(Fd);_g=o(zw,"__call__"),zw.forEach(n),kg=o($l," special method."),$l.forEach(n),vg=f(rt),b(bo.$$.fragment,rt),Tg=f(rt),b(wo.$$.fragment,rt),Fg=f(rt),b(yo.$$.fragment,rt),rt.forEach(n),Vn.forEach(n),gu=f(s),qt=a(s,"H2",{class:!0});var fp=i(qt);$o=a(fp,"A",{id:!0,class:!0,href:!0});var qw=i($o);bd=a(qw,"SPAN",{});var Pw=i(bd);b(xr.$$.fragment,Pw),Pw.forEach(n),qw.forEach(n),bg=f(fp),wd=a(fp,"SPAN",{});var xw=i(wd);wg=o(xw,"FunnelForSequenceClassification"),xw.forEach(n),fp.forEach(n),_u=f(s),hn=a(s,"DIV",{class:!0});var Yn=i(hn);b(Cr.$$.fragment,Yn),yg=f(Yn),yd=a(Yn,"P",{});var Cw=i(yd);$g=o(Cw,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Cw.forEach(n),Eg=f(Yn),jr=a(Yn,"P",{});var hp=i(jr);Mg=o(hp,"The Funnel Transformer model was proposed in "),Or=a(hp,"A",{href:!0,rel:!0});var jw=i(Or);zg=o(jw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),jw.forEach(n),qg=o(hp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),hp.forEach(n),Pg=f(Yn),Lr=a(Yn,"P",{});var mp=i(Lr);xg=o(mp,"This model inherits from "),Vi=a(mp,"A",{href:!0});var Ow=i(Vi);Cg=o(Ow,"PreTrainedModel"),Ow.forEach(n),jg=o(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(n),Og=f(Yn),Dr=a(Yn,"P",{});var gp=i(Dr);Lg=o(gp,"This model is also a PyTorch "),Ar=a(gp,"A",{href:!0,rel:!0});var Lw=i(Ar);Dg=o(Lw,"torch.nn.Module"),Lw.forEach(n),Ag=o(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(n),Ng=f(Yn),cn=a(Yn,"DIV",{class:!0});var Mn=i(cn);b(Nr.$$.fragment,Mn),Ig=f(Mn),Pt=a(Mn,"P",{});var El=i(Pt);Sg=o(El,"The "),Yi=a(El,"A",{href:!0});var Dw=i(Yi);Bg=o(Dw,"FunnelForSequenceClassification"),Dw.forEach(n),Wg=o(El," forward method, overrides the "),$d=a(El,"CODE",{});var Aw=i($d);Qg=o(Aw,"__call__"),Aw.forEach(n),Ug=o(El," special method."),El.forEach(n),Kg=f(Mn),b(Eo.$$.fragment,Mn),Rg=f(Mn),b(Mo.$$.fragment,Mn),Hg=f(Mn),b(zo.$$.fragment,Mn),Vg=f(Mn),b(qo.$$.fragment,Mn),Yg=f(Mn),b(Po.$$.fragment,Mn),Mn.forEach(n),Yn.forEach(n),ku=f(s),xt=a(s,"H2",{class:!0});var _p=i(xt);xo=a(_p,"A",{id:!0,class:!0,href:!0});var Nw=i(xo);Ed=a(Nw,"SPAN",{});var Iw=i(Ed);b(Ir.$$.fragment,Iw),Iw.forEach(n),Nw.forEach(n),Gg=f(_p),Md=a(_p,"SPAN",{});var Sw=i(Md);Zg=o(Sw,"FunnelForMultipleChoice"),Sw.forEach(n),_p.forEach(n),vu=f(s),mn=a(s,"DIV",{class:!0});var Gn=i(mn);b(Sr.$$.fragment,Gn),Xg=f(Gn),zd=a(Gn,"P",{});var Bw=i(zd);Jg=o(Bw,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Bw.forEach(n),e_=f(Gn),Br=a(Gn,"P",{});var kp=i(Br);n_=o(kp,"The Funnel Transformer model was proposed in "),Wr=a(kp,"A",{href:!0,rel:!0});var Ww=i(Wr);t_=o(Ww,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Ww.forEach(n),o_=o(kp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),kp.forEach(n),s_=f(Gn),Qr=a(Gn,"P",{});var vp=i(Qr);r_=o(vp,"This model inherits from "),Gi=a(vp,"A",{href:!0});var Qw=i(Gi);a_=o(Qw,"PreTrainedModel"),Qw.forEach(n),i_=o(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(n),l_=f(Gn),Ur=a(Gn,"P",{});var Tp=i(Ur);d_=o(Tp,"This model is also a PyTorch "),Kr=a(Tp,"A",{href:!0,rel:!0});var Uw=i(Kr);c_=o(Uw,"torch.nn.Module"),Uw.forEach(n),u_=o(Tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp.forEach(n),p_=f(Gn),Bn=a(Gn,"DIV",{class:!0});var qs=i(Bn);b(Rr.$$.fragment,qs),f_=f(qs),Ct=a(qs,"P",{});var Ml=i(Ct);h_=o(Ml,"The "),Zi=a(Ml,"A",{href:!0});var Kw=i(Zi);m_=o(Kw,"FunnelForMultipleChoice"),Kw.forEach(n),g_=o(Ml," forward method, overrides the "),qd=a(Ml,"CODE",{});var Rw=i(qd);__=o(Rw,"__call__"),Rw.forEach(n),k_=o(Ml," special method."),Ml.forEach(n),v_=f(qs),b(Co.$$.fragment,qs),T_=f(qs),b(jo.$$.fragment,qs),qs.forEach(n),Gn.forEach(n),Tu=f(s),jt=a(s,"H2",{class:!0});var Fp=i(jt);Oo=a(Fp,"A",{id:!0,class:!0,href:!0});var Hw=i(Oo);Pd=a(Hw,"SPAN",{});var Vw=i(Pd);b(Hr.$$.fragment,Vw),Vw.forEach(n),Hw.forEach(n),F_=f(Fp),xd=a(Fp,"SPAN",{});var Yw=i(xd);b_=o(Yw,"FunnelForTokenClassification"),Yw.forEach(n),Fp.forEach(n),Fu=f(s),gn=a(s,"DIV",{class:!0});var Zn=i(gn);b(Vr.$$.fragment,Zn),w_=f(Zn),Cd=a(Zn,"P",{});var Gw=i(Cd);y_=o(Gw,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Gw.forEach(n),$_=f(Zn),Yr=a(Zn,"P",{});var bp=i(Yr);E_=o(bp,"The Funnel Transformer model was proposed in "),Gr=a(bp,"A",{href:!0,rel:!0});var Zw=i(Gr);M_=o(Zw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Zw.forEach(n),z_=o(bp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),bp.forEach(n),q_=f(Zn),Zr=a(Zn,"P",{});var wp=i(Zr);P_=o(wp,"This model inherits from "),Xi=a(wp,"A",{href:!0});var Xw=i(Xi);x_=o(Xw,"PreTrainedModel"),Xw.forEach(n),C_=o(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(n),j_=f(Zn),Xr=a(Zn,"P",{});var yp=i(Xr);O_=o(yp,"This model is also a PyTorch "),Jr=a(yp,"A",{href:!0,rel:!0});var Jw=i(Jr);L_=o(Jw,"torch.nn.Module"),Jw.forEach(n),D_=o(yp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yp.forEach(n),A_=f(Zn),Fn=a(Zn,"DIV",{class:!0});var at=i(Fn);b(ea.$$.fragment,at),N_=f(at),Ot=a(at,"P",{});var zl=i(Ot);I_=o(zl,"The "),Ji=a(zl,"A",{href:!0});var ey=i(Ji);S_=o(ey,"FunnelForTokenClassification"),ey.forEach(n),B_=o(zl," forward method, overrides the "),jd=a(zl,"CODE",{});var ny=i(jd);W_=o(ny,"__call__"),ny.forEach(n),Q_=o(zl," special method."),zl.forEach(n),U_=f(at),b(Lo.$$.fragment,at),K_=f(at),b(Do.$$.fragment,at),R_=f(at),b(Ao.$$.fragment,at),at.forEach(n),Zn.forEach(n),bu=f(s),Lt=a(s,"H2",{class:!0});var $p=i(Lt);No=a($p,"A",{id:!0,class:!0,href:!0});var ty=i(No);Od=a(ty,"SPAN",{});var oy=i(Od);b(na.$$.fragment,oy),oy.forEach(n),ty.forEach(n),H_=f($p),Ld=a($p,"SPAN",{});var sy=i(Ld);V_=o(sy,"FunnelForQuestionAnswering"),sy.forEach(n),$p.forEach(n),wu=f(s),_n=a(s,"DIV",{class:!0});var Xn=i(_n);b(ta.$$.fragment,Xn),Y_=f(Xn),Dt=a(Xn,"P",{});var ql=i(Dt);G_=o(ql,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),Dd=a(ql,"CODE",{});var ry=i(Dd);Z_=o(ry,"span start logits"),ry.forEach(n),X_=o(ql," and "),Ad=a(ql,"CODE",{});var ay=i(Ad);J_=o(ay,"span end logits"),ay.forEach(n),ek=o(ql,")."),ql.forEach(n),nk=f(Xn),oa=a(Xn,"P",{});var Ep=i(oa);tk=o(Ep,"The Funnel Transformer model was proposed in "),sa=a(Ep,"A",{href:!0,rel:!0});var iy=i(sa);ok=o(iy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),iy.forEach(n),sk=o(Ep," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ep.forEach(n),rk=f(Xn),ra=a(Xn,"P",{});var Mp=i(ra);ak=o(Mp,"This model inherits from "),el=a(Mp,"A",{href:!0});var ly=i(el);ik=o(ly,"PreTrainedModel"),ly.forEach(n),lk=o(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(n),dk=f(Xn),aa=a(Xn,"P",{});var zp=i(aa);ck=o(zp,"This model is also a PyTorch "),ia=a(zp,"A",{href:!0,rel:!0});var dy=i(ia);uk=o(dy,"torch.nn.Module"),dy.forEach(n),pk=o(zp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zp.forEach(n),fk=f(Xn),bn=a(Xn,"DIV",{class:!0});var it=i(bn);b(la.$$.fragment,it),hk=f(it),At=a(it,"P",{});var Pl=i(At);mk=o(Pl,"The "),nl=a(Pl,"A",{href:!0});var cy=i(nl);gk=o(cy,"FunnelForQuestionAnswering"),cy.forEach(n),_k=o(Pl," forward method, overrides the "),Nd=a(Pl,"CODE",{});var uy=i(Nd);kk=o(uy,"__call__"),uy.forEach(n),vk=o(Pl," special method."),Pl.forEach(n),Tk=f(it),b(Io.$$.fragment,it),Fk=f(it),b(So.$$.fragment,it),bk=f(it),b(Bo.$$.fragment,it),it.forEach(n),Xn.forEach(n),yu=f(s),Nt=a(s,"H2",{class:!0});var qp=i(Nt);Wo=a(qp,"A",{id:!0,class:!0,href:!0});var py=i(Wo);Id=a(py,"SPAN",{});var fy=i(Id);b(da.$$.fragment,fy),fy.forEach(n),py.forEach(n),wk=f(qp),Sd=a(qp,"SPAN",{});var hy=i(Sd);yk=o(hy,"TFFunnelBaseModel"),hy.forEach(n),qp.forEach(n),$u=f(s),nn=a(s,"DIV",{class:!0});var zn=i(nn);b(ca.$$.fragment,zn),$k=f(zn),Bd=a(zn,"P",{});var my=i(Bd);Ek=o(my,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),my.forEach(n),Mk=f(zn),ua=a(zn,"P",{});var Pp=i(ua);zk=o(Pp,"The Funnel Transformer model was proposed in "),pa=a(Pp,"A",{href:!0,rel:!0});var gy=i(pa);qk=o(gy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),gy.forEach(n),Pk=o(Pp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pp.forEach(n),xk=f(zn),fa=a(zn,"P",{});var xp=i(fa);Ck=o(xp,"This model inherits from "),tl=a(xp,"A",{href:!0});var _y=i(tl);jk=o(_y,"TFPreTrainedModel"),_y.forEach(n),Ok=o(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(n),Lk=f(zn),ha=a(zn,"P",{});var Cp=i(ha);Dk=o(Cp,"This model is also a "),ma=a(Cp,"A",{href:!0,rel:!0});var ky=i(ma);Ak=o(ky,"tf.keras.Model"),ky.forEach(n),Nk=o(Cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cp.forEach(n),Ik=f(zn),b(Qo.$$.fragment,zn),Sk=f(zn),Wn=a(zn,"DIV",{class:!0});var Ps=i(Wn);b(ga.$$.fragment,Ps),Bk=f(Ps),It=a(Ps,"P",{});var xl=i(It);Wk=o(xl,"The "),ol=a(xl,"A",{href:!0});var vy=i(ol);Qk=o(vy,"TFFunnelBaseModel"),vy.forEach(n),Uk=o(xl," forward method, overrides the "),Wd=a(xl,"CODE",{});var Ty=i(Wd);Kk=o(Ty,"__call__"),Ty.forEach(n),Rk=o(xl," special method."),xl.forEach(n),Hk=f(Ps),b(Uo.$$.fragment,Ps),Vk=f(Ps),b(Ko.$$.fragment,Ps),Ps.forEach(n),zn.forEach(n),Eu=f(s),St=a(s,"H2",{class:!0});var jp=i(St);Ro=a(jp,"A",{id:!0,class:!0,href:!0});var Fy=i(Ro);Qd=a(Fy,"SPAN",{});var by=i(Qd);b(_a.$$.fragment,by),by.forEach(n),Fy.forEach(n),Yk=f(jp),Ud=a(jp,"SPAN",{});var wy=i(Ud);Gk=o(wy,"TFFunnelModel"),wy.forEach(n),jp.forEach(n),Mu=f(s),tn=a(s,"DIV",{class:!0});var qn=i(tn);b(ka.$$.fragment,qn),Zk=f(qn),Kd=a(qn,"P",{});var yy=i(Kd);Xk=o(yy,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),yy.forEach(n),Jk=f(qn),va=a(qn,"P",{});var Op=i(va);ev=o(Op,"The Funnel Transformer model was proposed in "),Ta=a(Op,"A",{href:!0,rel:!0});var $y=i(Ta);nv=o($y,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),$y.forEach(n),tv=o(Op," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Op.forEach(n),ov=f(qn),Fa=a(qn,"P",{});var Lp=i(Fa);sv=o(Lp,"This model inherits from "),sl=a(Lp,"A",{href:!0});var Ey=i(sl);rv=o(Ey,"TFPreTrainedModel"),Ey.forEach(n),av=o(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp.forEach(n),iv=f(qn),ba=a(qn,"P",{});var Dp=i(ba);lv=o(Dp,"This model is also a "),wa=a(Dp,"A",{href:!0,rel:!0});var My=i(wa);dv=o(My,"tf.keras.Model"),My.forEach(n),cv=o(Dp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dp.forEach(n),uv=f(qn),b(Ho.$$.fragment,qn),pv=f(qn),Qn=a(qn,"DIV",{class:!0});var xs=i(Qn);b(ya.$$.fragment,xs),fv=f(xs),Bt=a(xs,"P",{});var Cl=i(Bt);hv=o(Cl,"The "),rl=a(Cl,"A",{href:!0});var zy=i(rl);mv=o(zy,"TFFunnelModel"),zy.forEach(n),gv=o(Cl," forward method, overrides the "),Rd=a(Cl,"CODE",{});var qy=i(Rd);_v=o(qy,"__call__"),qy.forEach(n),kv=o(Cl," special method."),Cl.forEach(n),vv=f(xs),b(Vo.$$.fragment,xs),Tv=f(xs),b(Yo.$$.fragment,xs),xs.forEach(n),qn.forEach(n),zu=f(s),Wt=a(s,"H2",{class:!0});var Ap=i(Wt);Go=a(Ap,"A",{id:!0,class:!0,href:!0});var Py=i(Go);Hd=a(Py,"SPAN",{});var xy=i(Hd);b($a.$$.fragment,xy),xy.forEach(n),Py.forEach(n),Fv=f(Ap),Vd=a(Ap,"SPAN",{});var Cy=i(Vd);bv=o(Cy,"TFFunnelModelForPreTraining"),Cy.forEach(n),Ap.forEach(n),qu=f(s),on=a(s,"DIV",{class:!0});var Pn=i(on);b(Ea.$$.fragment,Pn),wv=f(Pn),Yd=a(Pn,"P",{});var jy=i(Yd);yv=o(jy,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),jy.forEach(n),$v=f(Pn),Ma=a(Pn,"P",{});var Np=i(Ma);Ev=o(Np,"The Funnel Transformer model was proposed in "),za=a(Np,"A",{href:!0,rel:!0});var Oy=i(za);Mv=o(Oy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Oy.forEach(n),zv=o(Np," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Np.forEach(n),qv=f(Pn),qa=a(Pn,"P",{});var Ip=i(qa);Pv=o(Ip,"This model inherits from "),al=a(Ip,"A",{href:!0});var Ly=i(al);xv=o(Ly,"TFPreTrainedModel"),Ly.forEach(n),Cv=o(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ip.forEach(n),jv=f(Pn),Pa=a(Pn,"P",{});var Sp=i(Pa);Ov=o(Sp,"This model is also a "),xa=a(Sp,"A",{href:!0,rel:!0});var Dy=i(xa);Lv=o(Dy,"tf.keras.Model"),Dy.forEach(n),Dv=o(Sp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sp.forEach(n),Av=f(Pn),b(Zo.$$.fragment,Pn),Nv=f(Pn),Un=a(Pn,"DIV",{class:!0});var Cs=i(Un);b(Ca.$$.fragment,Cs),Iv=f(Cs),Qt=a(Cs,"P",{});var jl=i(Qt);Sv=o(jl,"The "),il=a(jl,"A",{href:!0});var Ay=i(il);Bv=o(Ay,"TFFunnelForPreTraining"),Ay.forEach(n),Wv=o(jl," forward method, overrides the "),Gd=a(jl,"CODE",{});var Ny=i(Gd);Qv=o(Ny,"__call__"),Ny.forEach(n),Uv=o(jl," special method."),jl.forEach(n),Kv=f(Cs),b(Xo.$$.fragment,Cs),Rv=f(Cs),b(Jo.$$.fragment,Cs),Cs.forEach(n),Pn.forEach(n),Pu=f(s),Ut=a(s,"H2",{class:!0});var Bp=i(Ut);es=a(Bp,"A",{id:!0,class:!0,href:!0});var Iy=i(es);Zd=a(Iy,"SPAN",{});var Sy=i(Zd);b(ja.$$.fragment,Sy),Sy.forEach(n),Iy.forEach(n),Hv=f(Bp),Xd=a(Bp,"SPAN",{});var By=i(Xd);Vv=o(By,"TFFunnelForMaskedLM"),By.forEach(n),Bp.forEach(n),xu=f(s),sn=a(s,"DIV",{class:!0});var xn=i(sn);b(Oa.$$.fragment,xn),Yv=f(xn),La=a(xn,"P",{});var Wp=i(La);Gv=o(Wp,"Funnel Model with a "),Jd=a(Wp,"CODE",{});var Wy=i(Jd);Zv=o(Wy,"language modeling"),Wy.forEach(n),Xv=o(Wp," head on top."),Wp.forEach(n),Jv=f(xn),Da=a(xn,"P",{});var Qp=i(Da);eT=o(Qp,"The Funnel Transformer model was proposed in "),Aa=a(Qp,"A",{href:!0,rel:!0});var Qy=i(Aa);nT=o(Qy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Qy.forEach(n),tT=o(Qp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Qp.forEach(n),oT=f(xn),Na=a(xn,"P",{});var Up=i(Na);sT=o(Up,"This model inherits from "),ll=a(Up,"A",{href:!0});var Uy=i(ll);rT=o(Uy,"TFPreTrainedModel"),Uy.forEach(n),aT=o(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up.forEach(n),iT=f(xn),Ia=a(xn,"P",{});var Kp=i(Ia);lT=o(Kp,"This model is also a "),Sa=a(Kp,"A",{href:!0,rel:!0});var Ky=i(Sa);dT=o(Ky,"tf.keras.Model"),Ky.forEach(n),cT=o(Kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kp.forEach(n),uT=f(xn),b(ns.$$.fragment,xn),pT=f(xn),wn=a(xn,"DIV",{class:!0});var lt=i(wn);b(Ba.$$.fragment,lt),fT=f(lt),Kt=a(lt,"P",{});var Ol=i(Kt);hT=o(Ol,"The "),dl=a(Ol,"A",{href:!0});var Ry=i(dl);mT=o(Ry,"TFFunnelForMaskedLM"),Ry.forEach(n),gT=o(Ol," forward method, overrides the "),ec=a(Ol,"CODE",{});var Hy=i(ec);_T=o(Hy,"__call__"),Hy.forEach(n),kT=o(Ol," special method."),Ol.forEach(n),vT=f(lt),b(ts.$$.fragment,lt),TT=f(lt),b(os.$$.fragment,lt),FT=f(lt),b(ss.$$.fragment,lt),lt.forEach(n),xn.forEach(n),Cu=f(s),Rt=a(s,"H2",{class:!0});var Rp=i(Rt);rs=a(Rp,"A",{id:!0,class:!0,href:!0});var Vy=i(rs);nc=a(Vy,"SPAN",{});var Yy=i(nc);b(Wa.$$.fragment,Yy),Yy.forEach(n),Vy.forEach(n),bT=f(Rp),tc=a(Rp,"SPAN",{});var Gy=i(tc);wT=o(Gy,"TFFunnelForSequenceClassification"),Gy.forEach(n),Rp.forEach(n),ju=f(s),rn=a(s,"DIV",{class:!0});var Cn=i(rn);b(Qa.$$.fragment,Cn),yT=f(Cn),oc=a(Cn,"P",{});var Zy=i(oc);$T=o(Zy,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Zy.forEach(n),ET=f(Cn),Ua=a(Cn,"P",{});var Hp=i(Ua);MT=o(Hp,"The Funnel Transformer model was proposed in "),Ka=a(Hp,"A",{href:!0,rel:!0});var Xy=i(Ka);zT=o(Xy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Xy.forEach(n),qT=o(Hp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Hp.forEach(n),PT=f(Cn),Ra=a(Cn,"P",{});var Vp=i(Ra);xT=o(Vp,"This model inherits from "),cl=a(Vp,"A",{href:!0});var Jy=i(cl);CT=o(Jy,"TFPreTrainedModel"),Jy.forEach(n),jT=o(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp.forEach(n),OT=f(Cn),Ha=a(Cn,"P",{});var Yp=i(Ha);LT=o(Yp,"This model is also a "),Va=a(Yp,"A",{href:!0,rel:!0});var e$=i(Va);DT=o(e$,"tf.keras.Model"),e$.forEach(n),AT=o(Yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yp.forEach(n),NT=f(Cn),b(as.$$.fragment,Cn),IT=f(Cn),yn=a(Cn,"DIV",{class:!0});var dt=i(yn);b(Ya.$$.fragment,dt),ST=f(dt),Ht=a(dt,"P",{});var Ll=i(Ht);BT=o(Ll,"The "),ul=a(Ll,"A",{href:!0});var n$=i(ul);WT=o(n$,"TFFunnelForSequenceClassification"),n$.forEach(n),QT=o(Ll," forward method, overrides the "),sc=a(Ll,"CODE",{});var t$=i(sc);UT=o(t$,"__call__"),t$.forEach(n),KT=o(Ll," special method."),Ll.forEach(n),RT=f(dt),b(is.$$.fragment,dt),HT=f(dt),b(ls.$$.fragment,dt),VT=f(dt),b(ds.$$.fragment,dt),dt.forEach(n),Cn.forEach(n),Ou=f(s),Vt=a(s,"H2",{class:!0});var Gp=i(Vt);cs=a(Gp,"A",{id:!0,class:!0,href:!0});var o$=i(cs);rc=a(o$,"SPAN",{});var s$=i(rc);b(Ga.$$.fragment,s$),s$.forEach(n),o$.forEach(n),YT=f(Gp),ac=a(Gp,"SPAN",{});var r$=i(ac);GT=o(r$,"TFFunnelForMultipleChoice"),r$.forEach(n),Gp.forEach(n),Lu=f(s),an=a(s,"DIV",{class:!0});var jn=i(an);b(Za.$$.fragment,jn),ZT=f(jn),ic=a(jn,"P",{});var a$=i(ic);XT=o(a$,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a$.forEach(n),JT=f(jn),Xa=a(jn,"P",{});var Zp=i(Xa);eF=o(Zp,"The Funnel Transformer model was proposed in "),Ja=a(Zp,"A",{href:!0,rel:!0});var i$=i(Ja);nF=o(i$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),i$.forEach(n),tF=o(Zp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Zp.forEach(n),oF=f(jn),ei=a(jn,"P",{});var Xp=i(ei);sF=o(Xp,"This model inherits from "),pl=a(Xp,"A",{href:!0});var l$=i(pl);rF=o(l$,"TFPreTrainedModel"),l$.forEach(n),aF=o(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(n),iF=f(jn),ni=a(jn,"P",{});var Jp=i(ni);lF=o(Jp,"This model is also a "),ti=a(Jp,"A",{href:!0,rel:!0});var d$=i(ti);dF=o(d$,"tf.keras.Model"),d$.forEach(n),cF=o(Jp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jp.forEach(n),uF=f(jn),b(us.$$.fragment,jn),pF=f(jn),Kn=a(jn,"DIV",{class:!0});var js=i(Kn);b(oi.$$.fragment,js),fF=f(js),Yt=a(js,"P",{});var Dl=i(Yt);hF=o(Dl,"The "),fl=a(Dl,"A",{href:!0});var c$=i(fl);mF=o(c$,"TFFunnelForMultipleChoice"),c$.forEach(n),gF=o(Dl," forward method, overrides the "),lc=a(Dl,"CODE",{});var u$=i(lc);_F=o(u$,"__call__"),u$.forEach(n),kF=o(Dl," special method."),Dl.forEach(n),vF=f(js),b(ps.$$.fragment,js),TF=f(js),b(fs.$$.fragment,js),js.forEach(n),jn.forEach(n),Du=f(s),Gt=a(s,"H2",{class:!0});var ef=i(Gt);hs=a(ef,"A",{id:!0,class:!0,href:!0});var p$=i(hs);dc=a(p$,"SPAN",{});var f$=i(dc);b(si.$$.fragment,f$),f$.forEach(n),p$.forEach(n),FF=f(ef),cc=a(ef,"SPAN",{});var h$=i(cc);bF=o(h$,"TFFunnelForTokenClassification"),h$.forEach(n),ef.forEach(n),Au=f(s),ln=a(s,"DIV",{class:!0});var On=i(ln);b(ri.$$.fragment,On),wF=f(On),uc=a(On,"P",{});var m$=i(uc);yF=o(m$,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),m$.forEach(n),$F=f(On),ai=a(On,"P",{});var nf=i(ai);EF=o(nf,"The Funnel Transformer model was proposed in "),ii=a(nf,"A",{href:!0,rel:!0});var g$=i(ii);MF=o(g$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),g$.forEach(n),zF=o(nf," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),nf.forEach(n),qF=f(On),li=a(On,"P",{});var tf=i(li);PF=o(tf,"This model inherits from "),hl=a(tf,"A",{href:!0});var _$=i(hl);xF=o(_$,"TFPreTrainedModel"),_$.forEach(n),CF=o(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(n),jF=f(On),di=a(On,"P",{});var of=i(di);OF=o(of,"This model is also a "),ci=a(of,"A",{href:!0,rel:!0});var k$=i(ci);LF=o(k$,"tf.keras.Model"),k$.forEach(n),DF=o(of,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),of.forEach(n),AF=f(On),b(ms.$$.fragment,On),NF=f(On),$n=a(On,"DIV",{class:!0});var ct=i($n);b(ui.$$.fragment,ct),IF=f(ct),Zt=a(ct,"P",{});var Al=i(Zt);SF=o(Al,"The "),ml=a(Al,"A",{href:!0});var v$=i(ml);BF=o(v$,"TFFunnelForTokenClassification"),v$.forEach(n),WF=o(Al," forward method, overrides the "),pc=a(Al,"CODE",{});var T$=i(pc);QF=o(T$,"__call__"),T$.forEach(n),UF=o(Al," special method."),Al.forEach(n),KF=f(ct),b(gs.$$.fragment,ct),RF=f(ct),b(_s.$$.fragment,ct),HF=f(ct),b(ks.$$.fragment,ct),ct.forEach(n),On.forEach(n),Nu=f(s),Xt=a(s,"H2",{class:!0});var sf=i(Xt);vs=a(sf,"A",{id:!0,class:!0,href:!0});var F$=i(vs);fc=a(F$,"SPAN",{});var b$=i(fc);b(pi.$$.fragment,b$),b$.forEach(n),F$.forEach(n),VF=f(sf),hc=a(sf,"SPAN",{});var w$=i(hc);YF=o(w$,"TFFunnelForQuestionAnswering"),w$.forEach(n),sf.forEach(n),Iu=f(s),dn=a(s,"DIV",{class:!0});var Ln=i(dn);b(fi.$$.fragment,Ln),GF=f(Ln),Jt=a(Ln,"P",{});var Nl=i(Jt);ZF=o(Nl,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mc=a(Nl,"CODE",{});var y$=i(mc);XF=o(y$,"span start logits"),y$.forEach(n),JF=o(Nl," and "),gc=a(Nl,"CODE",{});var $$=i(gc);eb=o($$,"span end logits"),$$.forEach(n),nb=o(Nl,")."),Nl.forEach(n),tb=f(Ln),hi=a(Ln,"P",{});var rf=i(hi);ob=o(rf,"The Funnel Transformer model was proposed in "),mi=a(rf,"A",{href:!0,rel:!0});var E$=i(mi);sb=o(E$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),E$.forEach(n),rb=o(rf," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rf.forEach(n),ab=f(Ln),gi=a(Ln,"P",{});var af=i(gi);ib=o(af,"This model inherits from "),gl=a(af,"A",{href:!0});var M$=i(gl);lb=o(M$,"TFPreTrainedModel"),M$.forEach(n),db=o(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(n),cb=f(Ln),_i=a(Ln,"P",{});var lf=i(_i);ub=o(lf,"This model is also a "),ki=a(lf,"A",{href:!0,rel:!0});var z$=i(ki);pb=o(z$,"tf.keras.Model"),z$.forEach(n),fb=o(lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf.forEach(n),hb=f(Ln),b(Ts.$$.fragment,Ln),mb=f(Ln),En=a(Ln,"DIV",{class:!0});var ut=i(En);b(vi.$$.fragment,ut),gb=f(ut),eo=a(ut,"P",{});var Il=i(eo);_b=o(Il,"The "),_l=a(Il,"A",{href:!0});var q$=i(_l);kb=o(q$,"TFFunnelForQuestionAnswering"),q$.forEach(n),vb=o(Il," forward method, overrides the "),_c=a(Il,"CODE",{});var P$=i(_c);Tb=o(P$,"__call__"),P$.forEach(n),Fb=o(Il," special method."),Il.forEach(n),bb=f(ut),b(Fs.$$.fragment,ut),wb=f(ut),b(bs.$$.fragment,ut),yb=f(ut),b(ws.$$.fragment,ut),ut.forEach(n),Ln.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(L2)),m(h,"id","funnel-transformer"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#funnel-transformer"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://arxiv.org/abs/2006.03236"),m(ae,"rel","nofollow"),m(j,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelModel"),m(le,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(de,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(ce,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(D,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelBaseModel"),m(g,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(J,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(De,"href","https://huggingface.co/sgugger"),m(De,"rel","nofollow"),m(A,"href","https://github.com/laiguokun/Funnel-Transformer"),m(A,"rel","nofollow"),m(Le,"id","transformers.FunnelConfig"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.FunnelConfig"),m(S,"class","relative group"),m(zi,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelModel"),m(qi,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertModel"),m(Ls,"href","https://huggingface.co/funnel-transformer/small"),m(Ls,"rel","nofollow"),m(Pi,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(xi,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"id","transformers.FunnelTokenizer"),m(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ro,"href","#transformers.FunnelTokenizer"),m(ft,"class","relative group"),m(Ci,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Li,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelTokenizerFast"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelTokenizerFast"),m(mt,"class","relative group"),m(Di,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(uo,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(_t,"class","relative group"),m(Ii,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Si,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"id","transformers.FunnelBaseModel"),m(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(po,"href","#transformers.FunnelBaseModel"),m(Tt,"class","relative group"),m(ar,"href","https://arxiv.org/abs/2006.03236"),m(ar,"rel","nofollow"),m(Bi,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(Wi,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"id","transformers.FunnelModel"),m(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mo,"href","#transformers.FunnelModel"),m(bt,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.03236"),m(hr,"rel","nofollow"),m(Qi,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(Ui,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelModel"),m(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ko,"id","transformers.FunnelForPreTraining"),m(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ko,"href","#transformers.FunnelForPreTraining"),m(yt,"class","relative group"),m(Ki,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","transformers.FunnelForMaskedLM"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#transformers.FunnelForMaskedLM"),m(Mt,"class","relative group"),m(Er,"href","https://arxiv.org/abs/2006.03236"),m(Er,"rel","nofollow"),m(Ri,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Hi,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"id","transformers.FunnelForSequenceClassification"),m($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($o,"href","#transformers.FunnelForSequenceClassification"),m(qt,"class","relative group"),m(Or,"href","https://arxiv.org/abs/2006.03236"),m(Or,"rel","nofollow"),m(Vi,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(Ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ar,"rel","nofollow"),m(Yi,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.FunnelForMultipleChoice"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.FunnelForMultipleChoice"),m(xt,"class","relative group"),m(Wr,"href","https://arxiv.org/abs/2006.03236"),m(Wr,"rel","nofollow"),m(Gi,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(Kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Kr,"rel","nofollow"),m(Zi,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"id","transformers.FunnelForTokenClassification"),m(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oo,"href","#transformers.FunnelForTokenClassification"),m(jt,"class","relative group"),m(Gr,"href","https://arxiv.org/abs/2006.03236"),m(Gr,"rel","nofollow"),m(Xi,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(Jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jr,"rel","nofollow"),m(Ji,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","transformers.FunnelForQuestionAnswering"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#transformers.FunnelForQuestionAnswering"),m(Lt,"class","relative group"),m(sa,"href","https://arxiv.org/abs/2006.03236"),m(sa,"rel","nofollow"),m(el,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),m(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ia,"rel","nofollow"),m(nl,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","transformers.TFFunnelBaseModel"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#transformers.TFFunnelBaseModel"),m(Nt,"class","relative group"),m(pa,"href","https://arxiv.org/abs/2006.03236"),m(pa,"rel","nofollow"),m(tl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ma,"rel","nofollow"),m(ol,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"id","transformers.TFFunnelModel"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#transformers.TFFunnelModel"),m(St,"class","relative group"),m(Ta,"href","https://arxiv.org/abs/2006.03236"),m(Ta,"rel","nofollow"),m(sl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(wa,"rel","nofollow"),m(rl,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelModel"),m(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","transformers.TFFunnelForPreTraining"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#transformers.TFFunnelForPreTraining"),m(Wt,"class","relative group"),m(za,"href","https://arxiv.org/abs/2006.03236"),m(za,"rel","nofollow"),m(al,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(xa,"rel","nofollow"),m(il,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(es,"id","transformers.TFFunnelForMaskedLM"),m(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(es,"href","#transformers.TFFunnelForMaskedLM"),m(Ut,"class","relative group"),m(Aa,"href","https://arxiv.org/abs/2006.03236"),m(Aa,"rel","nofollow"),m(ll,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sa,"rel","nofollow"),m(dl,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rs,"id","transformers.TFFunnelForSequenceClassification"),m(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(rs,"href","#transformers.TFFunnelForSequenceClassification"),m(Rt,"class","relative group"),m(Ka,"href","https://arxiv.org/abs/2006.03236"),m(Ka,"rel","nofollow"),m(cl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Va,"rel","nofollow"),m(ul,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(cs,"id","transformers.TFFunnelForMultipleChoice"),m(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(cs,"href","#transformers.TFFunnelForMultipleChoice"),m(Vt,"class","relative group"),m(Ja,"href","https://arxiv.org/abs/2006.03236"),m(Ja,"rel","nofollow"),m(pl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ti,"rel","nofollow"),m(fl,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hs,"id","transformers.TFFunnelForTokenClassification"),m(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(hs,"href","#transformers.TFFunnelForTokenClassification"),m(Gt,"class","relative group"),m(ii,"href","https://arxiv.org/abs/2006.03236"),m(ii,"rel","nofollow"),m(hl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ci,"rel","nofollow"),m(ml,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vs,"id","transformers.TFFunnelForQuestionAnswering"),m(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(vs,"href","#transformers.TFFunnelForQuestionAnswering"),m(Xt,"class","relative group"),m(mi,"href","https://arxiv.org/abs/2006.03236"),m(mi,"rel","nofollow"),m(gl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ki,"rel","nofollow"),m(_l,"href","/docs/transformers/v4.24.0/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,d),_(s,k,v),_(s,c,v),e(c,h),e(h,T),w(l,T,null),e(c,u),e(c,x),e(x,ke),_(s,fe,v),_(s,I,v),e(I,re),e(re,ee),w(M,ee,null),e(I,ve),e(I,K),e(K,Te),_(s,he,v),_(s,B,v),e(B,Fe),e(B,ae),e(ae,H),e(B,be),_(s,me,v),_(s,Q,v),e(Q,we),_(s,ge,v),_(s,U,v),e(U,ue),e(ue,ye),_(s,oe,v),_(s,C,v),e(C,O),_(s,_e,v),_(s,W,v),e(W,pe),e(pe,$e),e(W,V),e(W,R),e(R,Ee),e(R,j),e(j,Me),e(R,Y),e(R,le),e(le,ze),e(R,G),e(R,de),e(de,qe),e(R,N),e(R,ce),e(ce,Z),e(R,Pe),e(R,ne),e(ne,L),e(R,xe),e(R,D),e(D,Ce),e(R,je),e(R,g),e(g,z),e(R,We),e(R,J),e(J,Qe),e(R,Ue),_(s,q,v),_(s,Oe,v),e(Oe,Ke),e(Oe,De),e(De,Re),e(Oe,He),e(Oe,A),e(A,X),e(Oe,Ve),_(s,Ne,v),_(s,S,v),e(S,Le),e(Le,Ae),w(ie,Ae,null),e(S,Ye),e(S,te),e(te,Ge),_(s,eu,v),_(s,Jn,v),w(Os,Jn,null),e(Jn,df),e(Jn,et),e(et,cf),e(et,zi),e(zi,uf),e(et,pf),e(et,qi),e(qi,ff),e(et,hf),e(et,Ls),e(Ls,mf),e(et,gf),e(Jn,_f),e(Jn,pt),e(pt,kf),e(pt,Pi),e(Pi,vf),e(pt,Tf),e(pt,xi),e(xi,Ff),e(pt,bf),_(s,nu,v),_(s,ft,v),e(ft,ro),e(ro,Sl),w(Ds,Sl,null),e(ft,wf),e(ft,Bl),e(Bl,yf),_(s,tu,v),_(s,en,v),w(As,en,null),e(en,$f),e(en,Wl),e(Wl,Ef),e(en,Mf),e(en,Ns),e(Ns,zf),e(Ns,Ci),e(Ci,qf),e(Ns,Pf),e(en,xf),e(en,tt),w(Is,tt,null),e(tt,Cf),e(tt,Ql),e(Ql,jf),e(tt,Of),e(tt,Ss),e(Ss,ji),e(ji,Lf),e(ji,Ul),e(Ul,Df),e(Ss,Af),e(Ss,Oi),e(Oi,Nf),e(Oi,Kl),e(Kl,If),e(en,Sf),e(en,ao),w(Bs,ao,null),e(ao,Bf),e(ao,Ws),e(Ws,Wf),e(Ws,Rl),e(Rl,Qf),e(Ws,Uf),e(en,Kf),e(en,Dn),w(Qs,Dn,null),e(Dn,Rf),e(Dn,Hl),e(Hl,Hf),e(Dn,Vf),w(io,Dn,null),e(Dn,Yf),e(Dn,ht),e(ht,Gf),e(ht,Vl),e(Vl,Zf),e(ht,Xf),e(ht,Yl),e(Yl,Jf),e(ht,eh),e(en,nh),e(en,Li),w(Us,Li,null),_(s,ou,v),_(s,mt,v),e(mt,lo),e(lo,Gl),w(Ks,Gl,null),e(mt,th),e(mt,Zl),e(Zl,oh),_(s,su,v),_(s,vn,v),w(Rs,vn,null),e(vn,sh),e(vn,Hs),e(Hs,rh),e(Hs,Xl),e(Xl,ah),e(Hs,ih),e(vn,lh),e(vn,Vs),e(Vs,dh),e(Vs,Di),e(Di,ch),e(Vs,uh),e(vn,ph),e(vn,ot),w(Ys,ot,null),e(ot,fh),e(ot,Jl),e(Jl,hh),e(ot,mh),e(ot,Gs),e(Gs,Ai),e(Ai,gh),e(Ai,ed),e(ed,_h),e(Gs,kh),e(Gs,Ni),e(Ni,vh),e(Ni,nd),e(nd,Th),e(vn,Fh),e(vn,An),w(Zs,An,null),e(An,bh),e(An,td),e(td,wh),e(An,yh),w(co,An,null),e(An,$h),e(An,gt),e(gt,Eh),e(gt,od),e(od,Mh),e(gt,zh),e(gt,sd),e(sd,qh),e(gt,Ph),_(s,ru,v),_(s,_t,v),e(_t,uo),e(uo,rd),w(Xs,rd,null),e(_t,xh),e(_t,ad),e(ad,Ch),_(s,au,v),_(s,kt,v),w(Js,kt,null),e(kt,jh),e(kt,er),e(er,Oh),e(er,Ii),e(Ii,Lh),e(er,Dh),_(s,iu,v),_(s,vt,v),w(nr,vt,null),e(vt,Ah),e(vt,tr),e(tr,Nh),e(tr,Si),e(Si,Ih),e(tr,Sh),_(s,lu,v),_(s,Tt,v),e(Tt,po),e(po,id),w(or,id,null),e(Tt,Bh),e(Tt,ld),e(ld,Wh),_(s,du,v),_(s,un,v),w(sr,un,null),e(un,Qh),e(un,dd),e(dd,Uh),e(un,Kh),e(un,rr),e(rr,Rh),e(rr,ar),e(ar,Hh),e(rr,Vh),e(un,Yh),e(un,ir),e(ir,Gh),e(ir,Bi),e(Bi,Zh),e(ir,Xh),e(un,Jh),e(un,lr),e(lr,em),e(lr,dr),e(dr,nm),e(lr,tm),e(un,om),e(un,Nn),w(cr,Nn,null),e(Nn,sm),e(Nn,Ft),e(Ft,rm),e(Ft,Wi),e(Wi,am),e(Ft,im),e(Ft,cd),e(cd,lm),e(Ft,dm),e(Nn,cm),w(fo,Nn,null),e(Nn,um),w(ho,Nn,null),_(s,cu,v),_(s,bt,v),e(bt,mo),e(mo,ud),w(ur,ud,null),e(bt,pm),e(bt,pd),e(pd,fm),_(s,uu,v),_(s,pn,v),w(pr,pn,null),e(pn,hm),e(pn,fd),e(fd,mm),e(pn,gm),e(pn,fr),e(fr,_m),e(fr,hr),e(hr,km),e(fr,vm),e(pn,Tm),e(pn,mr),e(mr,Fm),e(mr,Qi),e(Qi,bm),e(mr,wm),e(pn,ym),e(pn,gr),e(gr,$m),e(gr,_r),e(_r,Em),e(gr,Mm),e(pn,zm),e(pn,In),w(kr,In,null),e(In,qm),e(In,wt),e(wt,Pm),e(wt,Ui),e(Ui,xm),e(wt,Cm),e(wt,hd),e(hd,jm),e(wt,Om),e(In,Lm),w(go,In,null),e(In,Dm),w(_o,In,null),_(s,pu,v),_(s,yt,v),e(yt,ko),e(ko,md),w(vr,md,null),e(yt,Am),e(yt,gd),e(gd,Nm),_(s,fu,v),_(s,$t,v),w(Tr,$t,null),e($t,Im),e($t,Sn),w(Fr,Sn,null),e(Sn,Sm),e(Sn,Et),e(Et,Bm),e(Et,Ki),e(Ki,Wm),e(Et,Qm),e(Et,_d),e(_d,Um),e(Et,Km),e(Sn,Rm),w(vo,Sn,null),e(Sn,Hm),w(To,Sn,null),_(s,hu,v),_(s,Mt,v),e(Mt,Fo),e(Fo,kd),w(br,kd,null),e(Mt,Vm),e(Mt,vd),e(vd,Ym),_(s,mu,v),_(s,fn,v),w(wr,fn,null),e(fn,Gm),e(fn,yr),e(yr,Zm),e(yr,Td),e(Td,Xm),e(yr,Jm),e(fn,eg),e(fn,$r),e($r,ng),e($r,Er),e(Er,tg),e($r,og),e(fn,sg),e(fn,Mr),e(Mr,rg),e(Mr,Ri),e(Ri,ag),e(Mr,ig),e(fn,lg),e(fn,zr),e(zr,dg),e(zr,qr),e(qr,cg),e(zr,ug),e(fn,pg),e(fn,Tn),w(Pr,Tn,null),e(Tn,fg),e(Tn,zt),e(zt,hg),e(zt,Hi),e(Hi,mg),e(zt,gg),e(zt,Fd),e(Fd,_g),e(zt,kg),e(Tn,vg),w(bo,Tn,null),e(Tn,Tg),w(wo,Tn,null),e(Tn,Fg),w(yo,Tn,null),_(s,gu,v),_(s,qt,v),e(qt,$o),e($o,bd),w(xr,bd,null),e(qt,bg),e(qt,wd),e(wd,wg),_(s,_u,v),_(s,hn,v),w(Cr,hn,null),e(hn,yg),e(hn,yd),e(yd,$g),e(hn,Eg),e(hn,jr),e(jr,Mg),e(jr,Or),e(Or,zg),e(jr,qg),e(hn,Pg),e(hn,Lr),e(Lr,xg),e(Lr,Vi),e(Vi,Cg),e(Lr,jg),e(hn,Og),e(hn,Dr),e(Dr,Lg),e(Dr,Ar),e(Ar,Dg),e(Dr,Ag),e(hn,Ng),e(hn,cn),w(Nr,cn,null),e(cn,Ig),e(cn,Pt),e(Pt,Sg),e(Pt,Yi),e(Yi,Bg),e(Pt,Wg),e(Pt,$d),e($d,Qg),e(Pt,Ug),e(cn,Kg),w(Eo,cn,null),e(cn,Rg),w(Mo,cn,null),e(cn,Hg),w(zo,cn,null),e(cn,Vg),w(qo,cn,null),e(cn,Yg),w(Po,cn,null),_(s,ku,v),_(s,xt,v),e(xt,xo),e(xo,Ed),w(Ir,Ed,null),e(xt,Gg),e(xt,Md),e(Md,Zg),_(s,vu,v),_(s,mn,v),w(Sr,mn,null),e(mn,Xg),e(mn,zd),e(zd,Jg),e(mn,e_),e(mn,Br),e(Br,n_),e(Br,Wr),e(Wr,t_),e(Br,o_),e(mn,s_),e(mn,Qr),e(Qr,r_),e(Qr,Gi),e(Gi,a_),e(Qr,i_),e(mn,l_),e(mn,Ur),e(Ur,d_),e(Ur,Kr),e(Kr,c_),e(Ur,u_),e(mn,p_),e(mn,Bn),w(Rr,Bn,null),e(Bn,f_),e(Bn,Ct),e(Ct,h_),e(Ct,Zi),e(Zi,m_),e(Ct,g_),e(Ct,qd),e(qd,__),e(Ct,k_),e(Bn,v_),w(Co,Bn,null),e(Bn,T_),w(jo,Bn,null),_(s,Tu,v),_(s,jt,v),e(jt,Oo),e(Oo,Pd),w(Hr,Pd,null),e(jt,F_),e(jt,xd),e(xd,b_),_(s,Fu,v),_(s,gn,v),w(Vr,gn,null),e(gn,w_),e(gn,Cd),e(Cd,y_),e(gn,$_),e(gn,Yr),e(Yr,E_),e(Yr,Gr),e(Gr,M_),e(Yr,z_),e(gn,q_),e(gn,Zr),e(Zr,P_),e(Zr,Xi),e(Xi,x_),e(Zr,C_),e(gn,j_),e(gn,Xr),e(Xr,O_),e(Xr,Jr),e(Jr,L_),e(Xr,D_),e(gn,A_),e(gn,Fn),w(ea,Fn,null),e(Fn,N_),e(Fn,Ot),e(Ot,I_),e(Ot,Ji),e(Ji,S_),e(Ot,B_),e(Ot,jd),e(jd,W_),e(Ot,Q_),e(Fn,U_),w(Lo,Fn,null),e(Fn,K_),w(Do,Fn,null),e(Fn,R_),w(Ao,Fn,null),_(s,bu,v),_(s,Lt,v),e(Lt,No),e(No,Od),w(na,Od,null),e(Lt,H_),e(Lt,Ld),e(Ld,V_),_(s,wu,v),_(s,_n,v),w(ta,_n,null),e(_n,Y_),e(_n,Dt),e(Dt,G_),e(Dt,Dd),e(Dd,Z_),e(Dt,X_),e(Dt,Ad),e(Ad,J_),e(Dt,ek),e(_n,nk),e(_n,oa),e(oa,tk),e(oa,sa),e(sa,ok),e(oa,sk),e(_n,rk),e(_n,ra),e(ra,ak),e(ra,el),e(el,ik),e(ra,lk),e(_n,dk),e(_n,aa),e(aa,ck),e(aa,ia),e(ia,uk),e(aa,pk),e(_n,fk),e(_n,bn),w(la,bn,null),e(bn,hk),e(bn,At),e(At,mk),e(At,nl),e(nl,gk),e(At,_k),e(At,Nd),e(Nd,kk),e(At,vk),e(bn,Tk),w(Io,bn,null),e(bn,Fk),w(So,bn,null),e(bn,bk),w(Bo,bn,null),_(s,yu,v),_(s,Nt,v),e(Nt,Wo),e(Wo,Id),w(da,Id,null),e(Nt,wk),e(Nt,Sd),e(Sd,yk),_(s,$u,v),_(s,nn,v),w(ca,nn,null),e(nn,$k),e(nn,Bd),e(Bd,Ek),e(nn,Mk),e(nn,ua),e(ua,zk),e(ua,pa),e(pa,qk),e(ua,Pk),e(nn,xk),e(nn,fa),e(fa,Ck),e(fa,tl),e(tl,jk),e(fa,Ok),e(nn,Lk),e(nn,ha),e(ha,Dk),e(ha,ma),e(ma,Ak),e(ha,Nk),e(nn,Ik),w(Qo,nn,null),e(nn,Sk),e(nn,Wn),w(ga,Wn,null),e(Wn,Bk),e(Wn,It),e(It,Wk),e(It,ol),e(ol,Qk),e(It,Uk),e(It,Wd),e(Wd,Kk),e(It,Rk),e(Wn,Hk),w(Uo,Wn,null),e(Wn,Vk),w(Ko,Wn,null),_(s,Eu,v),_(s,St,v),e(St,Ro),e(Ro,Qd),w(_a,Qd,null),e(St,Yk),e(St,Ud),e(Ud,Gk),_(s,Mu,v),_(s,tn,v),w(ka,tn,null),e(tn,Zk),e(tn,Kd),e(Kd,Xk),e(tn,Jk),e(tn,va),e(va,ev),e(va,Ta),e(Ta,nv),e(va,tv),e(tn,ov),e(tn,Fa),e(Fa,sv),e(Fa,sl),e(sl,rv),e(Fa,av),e(tn,iv),e(tn,ba),e(ba,lv),e(ba,wa),e(wa,dv),e(ba,cv),e(tn,uv),w(Ho,tn,null),e(tn,pv),e(tn,Qn),w(ya,Qn,null),e(Qn,fv),e(Qn,Bt),e(Bt,hv),e(Bt,rl),e(rl,mv),e(Bt,gv),e(Bt,Rd),e(Rd,_v),e(Bt,kv),e(Qn,vv),w(Vo,Qn,null),e(Qn,Tv),w(Yo,Qn,null),_(s,zu,v),_(s,Wt,v),e(Wt,Go),e(Go,Hd),w($a,Hd,null),e(Wt,Fv),e(Wt,Vd),e(Vd,bv),_(s,qu,v),_(s,on,v),w(Ea,on,null),e(on,wv),e(on,Yd),e(Yd,yv),e(on,$v),e(on,Ma),e(Ma,Ev),e(Ma,za),e(za,Mv),e(Ma,zv),e(on,qv),e(on,qa),e(qa,Pv),e(qa,al),e(al,xv),e(qa,Cv),e(on,jv),e(on,Pa),e(Pa,Ov),e(Pa,xa),e(xa,Lv),e(Pa,Dv),e(on,Av),w(Zo,on,null),e(on,Nv),e(on,Un),w(Ca,Un,null),e(Un,Iv),e(Un,Qt),e(Qt,Sv),e(Qt,il),e(il,Bv),e(Qt,Wv),e(Qt,Gd),e(Gd,Qv),e(Qt,Uv),e(Un,Kv),w(Xo,Un,null),e(Un,Rv),w(Jo,Un,null),_(s,Pu,v),_(s,Ut,v),e(Ut,es),e(es,Zd),w(ja,Zd,null),e(Ut,Hv),e(Ut,Xd),e(Xd,Vv),_(s,xu,v),_(s,sn,v),w(Oa,sn,null),e(sn,Yv),e(sn,La),e(La,Gv),e(La,Jd),e(Jd,Zv),e(La,Xv),e(sn,Jv),e(sn,Da),e(Da,eT),e(Da,Aa),e(Aa,nT),e(Da,tT),e(sn,oT),e(sn,Na),e(Na,sT),e(Na,ll),e(ll,rT),e(Na,aT),e(sn,iT),e(sn,Ia),e(Ia,lT),e(Ia,Sa),e(Sa,dT),e(Ia,cT),e(sn,uT),w(ns,sn,null),e(sn,pT),e(sn,wn),w(Ba,wn,null),e(wn,fT),e(wn,Kt),e(Kt,hT),e(Kt,dl),e(dl,mT),e(Kt,gT),e(Kt,ec),e(ec,_T),e(Kt,kT),e(wn,vT),w(ts,wn,null),e(wn,TT),w(os,wn,null),e(wn,FT),w(ss,wn,null),_(s,Cu,v),_(s,Rt,v),e(Rt,rs),e(rs,nc),w(Wa,nc,null),e(Rt,bT),e(Rt,tc),e(tc,wT),_(s,ju,v),_(s,rn,v),w(Qa,rn,null),e(rn,yT),e(rn,oc),e(oc,$T),e(rn,ET),e(rn,Ua),e(Ua,MT),e(Ua,Ka),e(Ka,zT),e(Ua,qT),e(rn,PT),e(rn,Ra),e(Ra,xT),e(Ra,cl),e(cl,CT),e(Ra,jT),e(rn,OT),e(rn,Ha),e(Ha,LT),e(Ha,Va),e(Va,DT),e(Ha,AT),e(rn,NT),w(as,rn,null),e(rn,IT),e(rn,yn),w(Ya,yn,null),e(yn,ST),e(yn,Ht),e(Ht,BT),e(Ht,ul),e(ul,WT),e(Ht,QT),e(Ht,sc),e(sc,UT),e(Ht,KT),e(yn,RT),w(is,yn,null),e(yn,HT),w(ls,yn,null),e(yn,VT),w(ds,yn,null),_(s,Ou,v),_(s,Vt,v),e(Vt,cs),e(cs,rc),w(Ga,rc,null),e(Vt,YT),e(Vt,ac),e(ac,GT),_(s,Lu,v),_(s,an,v),w(Za,an,null),e(an,ZT),e(an,ic),e(ic,XT),e(an,JT),e(an,Xa),e(Xa,eF),e(Xa,Ja),e(Ja,nF),e(Xa,tF),e(an,oF),e(an,ei),e(ei,sF),e(ei,pl),e(pl,rF),e(ei,aF),e(an,iF),e(an,ni),e(ni,lF),e(ni,ti),e(ti,dF),e(ni,cF),e(an,uF),w(us,an,null),e(an,pF),e(an,Kn),w(oi,Kn,null),e(Kn,fF),e(Kn,Yt),e(Yt,hF),e(Yt,fl),e(fl,mF),e(Yt,gF),e(Yt,lc),e(lc,_F),e(Yt,kF),e(Kn,vF),w(ps,Kn,null),e(Kn,TF),w(fs,Kn,null),_(s,Du,v),_(s,Gt,v),e(Gt,hs),e(hs,dc),w(si,dc,null),e(Gt,FF),e(Gt,cc),e(cc,bF),_(s,Au,v),_(s,ln,v),w(ri,ln,null),e(ln,wF),e(ln,uc),e(uc,yF),e(ln,$F),e(ln,ai),e(ai,EF),e(ai,ii),e(ii,MF),e(ai,zF),e(ln,qF),e(ln,li),e(li,PF),e(li,hl),e(hl,xF),e(li,CF),e(ln,jF),e(ln,di),e(di,OF),e(di,ci),e(ci,LF),e(di,DF),e(ln,AF),w(ms,ln,null),e(ln,NF),e(ln,$n),w(ui,$n,null),e($n,IF),e($n,Zt),e(Zt,SF),e(Zt,ml),e(ml,BF),e(Zt,WF),e(Zt,pc),e(pc,QF),e(Zt,UF),e($n,KF),w(gs,$n,null),e($n,RF),w(_s,$n,null),e($n,HF),w(ks,$n,null),_(s,Nu,v),_(s,Xt,v),e(Xt,vs),e(vs,fc),w(pi,fc,null),e(Xt,VF),e(Xt,hc),e(hc,YF),_(s,Iu,v),_(s,dn,v),w(fi,dn,null),e(dn,GF),e(dn,Jt),e(Jt,ZF),e(Jt,mc),e(mc,XF),e(Jt,JF),e(Jt,gc),e(gc,eb),e(Jt,nb),e(dn,tb),e(dn,hi),e(hi,ob),e(hi,mi),e(mi,sb),e(hi,rb),e(dn,ab),e(dn,gi),e(gi,ib),e(gi,gl),e(gl,lb),e(gi,db),e(dn,cb),e(dn,_i),e(_i,ub),e(_i,ki),e(ki,pb),e(_i,fb),e(dn,hb),w(Ts,dn,null),e(dn,mb),e(dn,En),w(vi,En,null),e(En,gb),e(En,eo),e(eo,_b),e(eo,_l),e(_l,kb),e(eo,vb),e(eo,_c),e(_c,Tb),e(eo,Fb),e(En,bb),w(Fs,En,null),e(En,wb),w(bs,En,null),e(En,yb),w(ws,En,null),Su=!0},p(s,[v]){const Ti={};v&2&&(Ti.$$scope={dirty:v,ctx:s}),io.$set(Ti);const kc={};v&2&&(kc.$$scope={dirty:v,ctx:s}),co.$set(kc);const vc={};v&2&&(vc.$$scope={dirty:v,ctx:s}),fo.$set(vc);const Tc={};v&2&&(Tc.$$scope={dirty:v,ctx:s}),ho.$set(Tc);const Fi={};v&2&&(Fi.$$scope={dirty:v,ctx:s}),go.$set(Fi);const Fc={};v&2&&(Fc.$$scope={dirty:v,ctx:s}),_o.$set(Fc);const bc={};v&2&&(bc.$$scope={dirty:v,ctx:s}),vo.$set(bc);const wc={};v&2&&(wc.$$scope={dirty:v,ctx:s}),To.$set(wc);const bi={};v&2&&(bi.$$scope={dirty:v,ctx:s}),bo.$set(bi);const yc={};v&2&&(yc.$$scope={dirty:v,ctx:s}),wo.$set(yc);const $c={};v&2&&($c.$$scope={dirty:v,ctx:s}),yo.$set($c);const Ec={};v&2&&(Ec.$$scope={dirty:v,ctx:s}),Eo.$set(Ec);const Mc={};v&2&&(Mc.$$scope={dirty:v,ctx:s}),Mo.$set(Mc);const zc={};v&2&&(zc.$$scope={dirty:v,ctx:s}),zo.$set(zc);const wi={};v&2&&(wi.$$scope={dirty:v,ctx:s}),qo.$set(wi);const qc={};v&2&&(qc.$$scope={dirty:v,ctx:s}),Po.$set(qc);const Je={};v&2&&(Je.$$scope={dirty:v,ctx:s}),Co.$set(Je);const Pc={};v&2&&(Pc.$$scope={dirty:v,ctx:s}),jo.$set(Pc);const xc={};v&2&&(xc.$$scope={dirty:v,ctx:s}),Lo.$set(xc);const Cc={};v&2&&(Cc.$$scope={dirty:v,ctx:s}),Do.$set(Cc);const jc={};v&2&&(jc.$$scope={dirty:v,ctx:s}),Ao.$set(jc);const Oc={};v&2&&(Oc.$$scope={dirty:v,ctx:s}),Io.$set(Oc);const Lc={};v&2&&(Lc.$$scope={dirty:v,ctx:s}),So.$set(Lc);const Dc={};v&2&&(Dc.$$scope={dirty:v,ctx:s}),Bo.$set(Dc);const Ac={};v&2&&(Ac.$$scope={dirty:v,ctx:s}),Qo.$set(Ac);const no={};v&2&&(no.$$scope={dirty:v,ctx:s}),Uo.$set(no);const Nc={};v&2&&(Nc.$$scope={dirty:v,ctx:s}),Ko.$set(Nc);const Ic={};v&2&&(Ic.$$scope={dirty:v,ctx:s}),Ho.$set(Ic);const yi={};v&2&&(yi.$$scope={dirty:v,ctx:s}),Vo.$set(yi);const Sc={};v&2&&(Sc.$$scope={dirty:v,ctx:s}),Yo.$set(Sc);const Bc={};v&2&&(Bc.$$scope={dirty:v,ctx:s}),Zo.$set(Bc);const Wc={};v&2&&(Wc.$$scope={dirty:v,ctx:s}),Xo.$set(Wc);const to={};v&2&&(to.$$scope={dirty:v,ctx:s}),Jo.$set(to);const nt={};v&2&&(nt.$$scope={dirty:v,ctx:s}),ns.$set(nt);const Qc={};v&2&&(Qc.$$scope={dirty:v,ctx:s}),ts.$set(Qc);const Uc={};v&2&&(Uc.$$scope={dirty:v,ctx:s}),os.$set(Uc);const Kc={};v&2&&(Kc.$$scope={dirty:v,ctx:s}),ss.$set(Kc);const oo={};v&2&&(oo.$$scope={dirty:v,ctx:s}),as.$set(oo);const Rc={};v&2&&(Rc.$$scope={dirty:v,ctx:s}),is.$set(Rc);const Hc={};v&2&&(Hc.$$scope={dirty:v,ctx:s}),ls.$set(Hc);const $i={};v&2&&($i.$$scope={dirty:v,ctx:s}),ds.$set($i);const Vc={};v&2&&(Vc.$$scope={dirty:v,ctx:s}),us.$set(Vc);const Yc={};v&2&&(Yc.$$scope={dirty:v,ctx:s}),ps.$set(Yc);const Gc={};v&2&&(Gc.$$scope={dirty:v,ctx:s}),fs.$set(Gc);const kn={};v&2&&(kn.$$scope={dirty:v,ctx:s}),ms.$set(kn);const Zc={};v&2&&(Zc.$$scope={dirty:v,ctx:s}),gs.$set(Zc);const Ei={};v&2&&(Ei.$$scope={dirty:v,ctx:s}),_s.$set(Ei);const Xc={};v&2&&(Xc.$$scope={dirty:v,ctx:s}),ks.$set(Xc);const so={};v&2&&(so.$$scope={dirty:v,ctx:s}),Ts.$set(so);const Jc={};v&2&&(Jc.$$scope={dirty:v,ctx:s}),Fs.$set(Jc);const Mi={};v&2&&(Mi.$$scope={dirty:v,ctx:s}),bs.$set(Mi);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:s}),ws.$set(kl)},i(s){Su||(y(l.$$.fragment,s),y(M.$$.fragment,s),y(ie.$$.fragment,s),y(Os.$$.fragment,s),y(Ds.$$.fragment,s),y(As.$$.fragment,s),y(Is.$$.fragment,s),y(Bs.$$.fragment,s),y(Qs.$$.fragment,s),y(io.$$.fragment,s),y(Us.$$.fragment,s),y(Ks.$$.fragment,s),y(Rs.$$.fragment,s),y(Ys.$$.fragment,s),y(Zs.$$.fragment,s),y(co.$$.fragment,s),y(Xs.$$.fragment,s),y(Js.$$.fragment,s),y(nr.$$.fragment,s),y(or.$$.fragment,s),y(sr.$$.fragment,s),y(cr.$$.fragment,s),y(fo.$$.fragment,s),y(ho.$$.fragment,s),y(ur.$$.fragment,s),y(pr.$$.fragment,s),y(kr.$$.fragment,s),y(go.$$.fragment,s),y(_o.$$.fragment,s),y(vr.$$.fragment,s),y(Tr.$$.fragment,s),y(Fr.$$.fragment,s),y(vo.$$.fragment,s),y(To.$$.fragment,s),y(br.$$.fragment,s),y(wr.$$.fragment,s),y(Pr.$$.fragment,s),y(bo.$$.fragment,s),y(wo.$$.fragment,s),y(yo.$$.fragment,s),y(xr.$$.fragment,s),y(Cr.$$.fragment,s),y(Nr.$$.fragment,s),y(Eo.$$.fragment,s),y(Mo.$$.fragment,s),y(zo.$$.fragment,s),y(qo.$$.fragment,s),y(Po.$$.fragment,s),y(Ir.$$.fragment,s),y(Sr.$$.fragment,s),y(Rr.$$.fragment,s),y(Co.$$.fragment,s),y(jo.$$.fragment,s),y(Hr.$$.fragment,s),y(Vr.$$.fragment,s),y(ea.$$.fragment,s),y(Lo.$$.fragment,s),y(Do.$$.fragment,s),y(Ao.$$.fragment,s),y(na.$$.fragment,s),y(ta.$$.fragment,s),y(la.$$.fragment,s),y(Io.$$.fragment,s),y(So.$$.fragment,s),y(Bo.$$.fragment,s),y(da.$$.fragment,s),y(ca.$$.fragment,s),y(Qo.$$.fragment,s),y(ga.$$.fragment,s),y(Uo.$$.fragment,s),y(Ko.$$.fragment,s),y(_a.$$.fragment,s),y(ka.$$.fragment,s),y(Ho.$$.fragment,s),y(ya.$$.fragment,s),y(Vo.$$.fragment,s),y(Yo.$$.fragment,s),y($a.$$.fragment,s),y(Ea.$$.fragment,s),y(Zo.$$.fragment,s),y(Ca.$$.fragment,s),y(Xo.$$.fragment,s),y(Jo.$$.fragment,s),y(ja.$$.fragment,s),y(Oa.$$.fragment,s),y(ns.$$.fragment,s),y(Ba.$$.fragment,s),y(ts.$$.fragment,s),y(os.$$.fragment,s),y(ss.$$.fragment,s),y(Wa.$$.fragment,s),y(Qa.$$.fragment,s),y(as.$$.fragment,s),y(Ya.$$.fragment,s),y(is.$$.fragment,s),y(ls.$$.fragment,s),y(ds.$$.fragment,s),y(Ga.$$.fragment,s),y(Za.$$.fragment,s),y(us.$$.fragment,s),y(oi.$$.fragment,s),y(ps.$$.fragment,s),y(fs.$$.fragment,s),y(si.$$.fragment,s),y(ri.$$.fragment,s),y(ms.$$.fragment,s),y(ui.$$.fragment,s),y(gs.$$.fragment,s),y(_s.$$.fragment,s),y(ks.$$.fragment,s),y(pi.$$.fragment,s),y(fi.$$.fragment,s),y(Ts.$$.fragment,s),y(vi.$$.fragment,s),y(Fs.$$.fragment,s),y(bs.$$.fragment,s),y(ws.$$.fragment,s),Su=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(ie.$$.fragment,s),$(Os.$$.fragment,s),$(Ds.$$.fragment,s),$(As.$$.fragment,s),$(Is.$$.fragment,s),$(Bs.$$.fragment,s),$(Qs.$$.fragment,s),$(io.$$.fragment,s),$(Us.$$.fragment,s),$(Ks.$$.fragment,s),$(Rs.$$.fragment,s),$(Ys.$$.fragment,s),$(Zs.$$.fragment,s),$(co.$$.fragment,s),$(Xs.$$.fragment,s),$(Js.$$.fragment,s),$(nr.$$.fragment,s),$(or.$$.fragment,s),$(sr.$$.fragment,s),$(cr.$$.fragment,s),$(fo.$$.fragment,s),$(ho.$$.fragment,s),$(ur.$$.fragment,s),$(pr.$$.fragment,s),$(kr.$$.fragment,s),$(go.$$.fragment,s),$(_o.$$.fragment,s),$(vr.$$.fragment,s),$(Tr.$$.fragment,s),$(Fr.$$.fragment,s),$(vo.$$.fragment,s),$(To.$$.fragment,s),$(br.$$.fragment,s),$(wr.$$.fragment,s),$(Pr.$$.fragment,s),$(bo.$$.fragment,s),$(wo.$$.fragment,s),$(yo.$$.fragment,s),$(xr.$$.fragment,s),$(Cr.$$.fragment,s),$(Nr.$$.fragment,s),$(Eo.$$.fragment,s),$(Mo.$$.fragment,s),$(zo.$$.fragment,s),$(qo.$$.fragment,s),$(Po.$$.fragment,s),$(Ir.$$.fragment,s),$(Sr.$$.fragment,s),$(Rr.$$.fragment,s),$(Co.$$.fragment,s),$(jo.$$.fragment,s),$(Hr.$$.fragment,s),$(Vr.$$.fragment,s),$(ea.$$.fragment,s),$(Lo.$$.fragment,s),$(Do.$$.fragment,s),$(Ao.$$.fragment,s),$(na.$$.fragment,s),$(ta.$$.fragment,s),$(la.$$.fragment,s),$(Io.$$.fragment,s),$(So.$$.fragment,s),$(Bo.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Qo.$$.fragment,s),$(ga.$$.fragment,s),$(Uo.$$.fragment,s),$(Ko.$$.fragment,s),$(_a.$$.fragment,s),$(ka.$$.fragment,s),$(Ho.$$.fragment,s),$(ya.$$.fragment,s),$(Vo.$$.fragment,s),$(Yo.$$.fragment,s),$($a.$$.fragment,s),$(Ea.$$.fragment,s),$(Zo.$$.fragment,s),$(Ca.$$.fragment,s),$(Xo.$$.fragment,s),$(Jo.$$.fragment,s),$(ja.$$.fragment,s),$(Oa.$$.fragment,s),$(ns.$$.fragment,s),$(Ba.$$.fragment,s),$(ts.$$.fragment,s),$(os.$$.fragment,s),$(ss.$$.fragment,s),$(Wa.$$.fragment,s),$(Qa.$$.fragment,s),$(as.$$.fragment,s),$(Ya.$$.fragment,s),$(is.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(Ga.$$.fragment,s),$(Za.$$.fragment,s),$(us.$$.fragment,s),$(oi.$$.fragment,s),$(ps.$$.fragment,s),$(fs.$$.fragment,s),$(si.$$.fragment,s),$(ri.$$.fragment,s),$(ms.$$.fragment,s),$(ui.$$.fragment,s),$(gs.$$.fragment,s),$(_s.$$.fragment,s),$(ks.$$.fragment,s),$(pi.$$.fragment,s),$(fi.$$.fragment,s),$(Ts.$$.fragment,s),$(vi.$$.fragment,s),$(Fs.$$.fragment,s),$(bs.$$.fragment,s),$(ws.$$.fragment,s),Su=!1},d(s){n(d),s&&n(k),s&&n(c),E(l),s&&n(fe),s&&n(I),E(M),s&&n(he),s&&n(B),s&&n(me),s&&n(Q),s&&n(ge),s&&n(U),s&&n(oe),s&&n(C),s&&n(_e),s&&n(W),s&&n(q),s&&n(Oe),s&&n(Ne),s&&n(S),E(ie),s&&n(eu),s&&n(Jn),E(Os),s&&n(nu),s&&n(ft),E(Ds),s&&n(tu),s&&n(en),E(As),E(Is),E(Bs),E(Qs),E(io),E(Us),s&&n(ou),s&&n(mt),E(Ks),s&&n(su),s&&n(vn),E(Rs),E(Ys),E(Zs),E(co),s&&n(ru),s&&n(_t),E(Xs),s&&n(au),s&&n(kt),E(Js),s&&n(iu),s&&n(vt),E(nr),s&&n(lu),s&&n(Tt),E(or),s&&n(du),s&&n(un),E(sr),E(cr),E(fo),E(ho),s&&n(cu),s&&n(bt),E(ur),s&&n(uu),s&&n(pn),E(pr),E(kr),E(go),E(_o),s&&n(pu),s&&n(yt),E(vr),s&&n(fu),s&&n($t),E(Tr),E(Fr),E(vo),E(To),s&&n(hu),s&&n(Mt),E(br),s&&n(mu),s&&n(fn),E(wr),E(Pr),E(bo),E(wo),E(yo),s&&n(gu),s&&n(qt),E(xr),s&&n(_u),s&&n(hn),E(Cr),E(Nr),E(Eo),E(Mo),E(zo),E(qo),E(Po),s&&n(ku),s&&n(xt),E(Ir),s&&n(vu),s&&n(mn),E(Sr),E(Rr),E(Co),E(jo),s&&n(Tu),s&&n(jt),E(Hr),s&&n(Fu),s&&n(gn),E(Vr),E(ea),E(Lo),E(Do),E(Ao),s&&n(bu),s&&n(Lt),E(na),s&&n(wu),s&&n(_n),E(ta),E(la),E(Io),E(So),E(Bo),s&&n(yu),s&&n(Nt),E(da),s&&n($u),s&&n(nn),E(ca),E(Qo),E(ga),E(Uo),E(Ko),s&&n(Eu),s&&n(St),E(_a),s&&n(Mu),s&&n(tn),E(ka),E(Ho),E(ya),E(Vo),E(Yo),s&&n(zu),s&&n(Wt),E($a),s&&n(qu),s&&n(on),E(Ea),E(Zo),E(Ca),E(Xo),E(Jo),s&&n(Pu),s&&n(Ut),E(ja),s&&n(xu),s&&n(sn),E(Oa),E(ns),E(Ba),E(ts),E(os),E(ss),s&&n(Cu),s&&n(Rt),E(Wa),s&&n(ju),s&&n(rn),E(Qa),E(as),E(Ya),E(is),E(ls),E(ds),s&&n(Ou),s&&n(Vt),E(Ga),s&&n(Lu),s&&n(an),E(Za),E(us),E(oi),E(ps),E(fs),s&&n(Du),s&&n(Gt),E(si),s&&n(Au),s&&n(ln),E(ri),E(ms),E(ui),E(gs),E(_s),E(ks),s&&n(Nu),s&&n(Xt),E(pi),s&&n(Iu),s&&n(dn),E(fi),E(Ts),E(vi),E(Fs),E(bs),E(ws)}}}const L2={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function D2(P){return L$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Q2 extends x${constructor(d){super();C$(this,d,D2,O2,j$,{})}}export{Q2 as default,L2 as metadata};
