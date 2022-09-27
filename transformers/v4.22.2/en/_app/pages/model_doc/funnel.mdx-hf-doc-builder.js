import{S as qw,i as Pw,s as xw,e as r,k as p,w as F,t,M as jw,c as a,d as n,m as f,a as i,x as y,h as o,b as m,G as e,g as _,y as b,q as w,o as $,B as E,v as Cw,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ow(P){let d,k,c,h,T;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Lw(P){let d,k,c,h,T;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Dw(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Aw(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Nw(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Iw(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Sw(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Bw(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Ww(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Qw(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Kw(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function Uw(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Rw(P){let d,k,c,h,T;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of single-label classification:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of single-label classification:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Hw(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function Vw(P){let d,k,c,h,T;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of multi-label classification:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of multi-label classification:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Yw(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function Gw(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Zw(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Xw(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function Jw(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function e$(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function n$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function t$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function o$(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function s$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function r$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function a$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function i$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function l$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function d$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function c$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function u$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function p$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function f$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function h$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function m$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function g$(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function _$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function k$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function v$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function T$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function F$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function y$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function b$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function w$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function $$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function E$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function M$(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function z$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),T=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),ve=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Te=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),Fe=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),ye=t("fit()"),me=t(" and "),Q=r("code"),be=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),we=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),T=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);ve=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Te=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);Fe=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);ye=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);be=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),we=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,T),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,ve),e(M,U),e(U,Te),e(M,he),e(M,B),e(B,Fe),e(M,ae),e(M,H),e(H,ye),e(M,me),e(M,Q),e(Q,be),e(M,ge),e(M,K),e(K,ue),e(M,we),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function q$(P){let d,k,c,h,T;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),T=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),T=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,T)},d(l){l&&n(d)}}}function P$(P){let d,k,c,h,T;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),F(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),y(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),b(h,l,u),T=!0},p:Se,i(l){T||(w(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function x$(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){F(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,h){b(d,c,h),k=!0},p:Se,i(c){k||(w(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function j$(P){let d,k,c,h,T,l,u,x,ke,fe,I,re,ee,M,ve,U,Te,he,B,Fe,ae,H,ye,me,Q,be,ge,K,ue,we,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce,g,z,We,J,Qe,Ke,q,Oe,Ue,De,Re,He,A,X,Ve,Ne,S,Le,Ae,ie,Ye,te,Ge,Xc,Jn,Ds,af,et,lf,Mi,df,cf,zi,uf,pf,As,ff,hf,mf,ut,gf,qi,_f,kf,Pi,vf,Tf,Jc,pt,so,Il,Ns,Ff,Sl,yf,eu,Je,Is,bf,Bl,wf,$f,ro,xi,Ef,Mf,ji,zf,qf,Pf,Ss,xf,Ci,jf,Cf,Of,tt,Bs,Lf,Wl,Df,Af,Ws,Oi,Nf,Ql,If,Sf,Li,Bf,Kl,Wf,Qf,ao,Qs,Kf,Ks,Uf,Ul,Rf,Hf,Vf,Dn,Us,Yf,Rl,Gf,Zf,io,Xf,ft,Jf,Hl,eh,nh,Vl,th,oh,sh,Di,Rs,nu,ht,lo,Yl,Hs,rh,Gl,ah,tu,vn,Vs,ih,Ys,lh,Zl,dh,ch,uh,co,Ai,ph,fh,Ni,hh,mh,gh,Gs,_h,Ii,kh,vh,Th,An,Zs,Fh,Xl,yh,bh,uo,wh,mt,$h,Jl,Eh,Mh,ed,zh,qh,ou,gt,po,nd,Xs,Ph,td,xh,su,_t,Js,jh,er,Ch,Si,Oh,Lh,ru,kt,nr,Dh,tr,Ah,Bi,Nh,Ih,au,vt,fo,od,or,Sh,sd,Bh,iu,pn,sr,Wh,rd,Qh,Kh,rr,Uh,ar,Rh,Hh,Vh,ir,Yh,Wi,Gh,Zh,Xh,lr,Jh,dr,em,nm,tm,Nn,cr,om,Tt,sm,Qi,rm,am,ad,im,lm,dm,ho,cm,mo,lu,Ft,go,id,ur,um,ld,pm,du,fn,pr,fm,dd,hm,mm,fr,gm,hr,_m,km,vm,mr,Tm,Ki,Fm,ym,bm,gr,wm,_r,$m,Em,Mm,In,kr,zm,yt,qm,Ui,Pm,xm,cd,jm,Cm,Om,_o,Lm,ko,cu,bt,vo,ud,vr,Dm,pd,Am,uu,wt,Tr,Nm,Sn,Fr,Im,$t,Sm,Ri,Bm,Wm,fd,Qm,Km,Um,To,Rm,Fo,pu,Et,yo,hd,yr,Hm,md,Vm,fu,hn,br,Ym,wr,Gm,gd,Zm,Xm,Jm,$r,eg,Er,ng,tg,og,Mr,sg,Hi,rg,ag,ig,zr,lg,qr,dg,cg,ug,Tn,Pr,pg,Mt,fg,Vi,hg,mg,_d,gg,_g,kg,bo,vg,wo,Tg,$o,hu,zt,Eo,kd,xr,Fg,vd,yg,mu,mn,jr,bg,Td,wg,$g,Cr,Eg,Or,Mg,zg,qg,Lr,Pg,Yi,xg,jg,Cg,Dr,Og,Ar,Lg,Dg,Ag,un,Nr,Ng,qt,Ig,Gi,Sg,Bg,Fd,Wg,Qg,Kg,Mo,Ug,zo,Rg,qo,Hg,Po,Vg,xo,gu,Pt,jo,yd,Ir,Yg,bd,Gg,_u,gn,Sr,Zg,wd,Xg,Jg,Br,e_,Wr,n_,t_,o_,Qr,s_,Zi,r_,a_,i_,Kr,l_,Ur,d_,c_,u_,Bn,Rr,p_,xt,f_,Xi,h_,m_,$d,g_,__,k_,Co,v_,Oo,ku,jt,Lo,Ed,Hr,T_,Md,F_,vu,_n,Vr,y_,zd,b_,w_,Yr,$_,Gr,E_,M_,z_,Zr,q_,Ji,P_,x_,j_,Xr,C_,Jr,O_,L_,D_,Fn,ea,A_,Ct,N_,el,I_,S_,qd,B_,W_,Q_,Do,K_,Ao,U_,No,Tu,Ot,Io,Pd,na,R_,xd,H_,Fu,kn,ta,V_,Lt,Y_,jd,G_,Z_,Cd,X_,J_,ek,oa,nk,sa,tk,ok,sk,ra,rk,nl,ak,ik,lk,aa,dk,ia,ck,uk,pk,yn,la,fk,Dt,hk,tl,mk,gk,Od,_k,kk,vk,So,Tk,Bo,Fk,Wo,yu,At,Qo,Ld,da,yk,Dd,bk,bu,nn,ca,wk,Ad,$k,Ek,ua,Mk,pa,zk,qk,Pk,fa,xk,ol,jk,Ck,Ok,ha,Lk,ma,Dk,Ak,Nk,Ko,Ik,Wn,ga,Sk,Nt,Bk,sl,Wk,Qk,Nd,Kk,Uk,Rk,Uo,Hk,Ro,wu,It,Ho,Id,_a,Vk,Sd,Yk,$u,tn,ka,Gk,Bd,Zk,Xk,va,Jk,Ta,ev,nv,tv,Fa,ov,rl,sv,rv,av,ya,iv,ba,lv,dv,cv,Vo,uv,Qn,wa,pv,St,fv,al,hv,mv,Wd,gv,_v,kv,Yo,vv,Go,Eu,Bt,Zo,Qd,$a,Tv,Kd,Fv,Mu,on,Ea,yv,Ud,bv,wv,Ma,$v,za,Ev,Mv,zv,qa,qv,il,Pv,xv,jv,Pa,Cv,xa,Ov,Lv,Dv,Xo,Av,Kn,ja,Nv,Wt,Iv,ll,Sv,Bv,Rd,Wv,Qv,Kv,Jo,Uv,es,zu,Qt,ns,Hd,Ca,Rv,Vd,Hv,qu,sn,Oa,Vv,La,Yv,Yd,Gv,Zv,Xv,Da,Jv,Aa,e2,n2,t2,Na,o2,dl,s2,r2,a2,Ia,i2,Sa,l2,d2,c2,ts,u2,bn,Ba,p2,Kt,f2,cl,h2,m2,Gd,g2,_2,k2,os,v2,ss,T2,rs,Pu,Ut,as,Zd,Wa,F2,Xd,y2,xu,rn,Qa,b2,Jd,w2,$2,Ka,E2,Ua,M2,z2,q2,Ra,P2,ul,x2,j2,C2,Ha,O2,Va,L2,D2,A2,is,N2,wn,Ya,I2,Rt,S2,pl,B2,W2,ec,Q2,K2,U2,ls,R2,ds,H2,cs,ju,Ht,us,nc,Ga,V2,tc,Y2,Cu,an,Za,G2,oc,Z2,X2,Xa,J2,Ja,eT,nT,tT,ei,oT,fl,sT,rT,aT,ni,iT,ti,lT,dT,cT,ps,uT,Un,oi,pT,Vt,fT,hl,hT,mT,sc,gT,_T,kT,fs,vT,hs,Ou,Yt,ms,rc,si,TT,ac,FT,Lu,ln,ri,yT,ic,bT,wT,ai,$T,ii,ET,MT,zT,li,qT,ml,PT,xT,jT,di,CT,ci,OT,LT,DT,gs,AT,$n,ui,NT,Gt,IT,gl,ST,BT,lc,WT,QT,KT,_s,UT,ks,RT,vs,Du,Zt,Ts,dc,pi,HT,cc,VT,Au,dn,fi,YT,Xt,GT,uc,ZT,XT,pc,JT,eF,nF,hi,tF,mi,oF,sF,rF,gi,aF,_l,iF,lF,dF,_i,cF,ki,uF,pF,fF,Fs,hF,En,vi,mF,Jt,gF,kl,_F,kF,fc,vF,TF,FF,ys,yF,bs,bF,ws,Nu;return l=new Xe({}),M=new Xe({}),ie=new Xe({}),Ds=new se({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Funnel transformer. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"vocab_size"},{anchor:"transformers.FunnelConfig.block_sizes",description:`<strong>block_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4]</code>) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.FunnelConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
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
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/configuration_funnel.py#L41"}}),Ns=new Xe({}),Is=new se({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/tokenization_funnel.py#L66"}}),Bs=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qs=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Us=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/tokenization_funnel.py#L116",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Ie({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ow]},$$scope:{ctx:P}}}),Rs=new se({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bert/tokenization_bert.py#L350"}}),Hs=new Xe({}),Vs=new se({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/tokenization_funnel_fast.py#L91"}}),Zs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/tokenization_funnel_fast.py#L144",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new Ie({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Lw]},$$scope:{ctx:P}}}),Xs=new Xe({}),Js=new se({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA-style objective.`,name:"loss"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L834"}}),nr=new se({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L978"}}),or=new Xe({}),sr=new se({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L927"}}),cr=new se({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L943",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new Ze({props:{$$slots:{default:[Dw]},$$scope:{ctx:P}}}),mo=new Ie({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[Aw]},$$scope:{ctx:P}}}),ur=new Xe({}),pr=new se({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),kr=new se({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1021",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ze({props:{$$slots:{default:[Nw]},$$scope:{ctx:P}}}),ko=new Ie({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[Iw]},$$scope:{ctx:P}}}),vr=new Xe({}),Tr=new se({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),Fr=new se({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA-style loss. Input should be a sequence of tokens (see <code>input_ids</code>
docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1121",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Ze({props:{$$slots:{default:[Sw]},$$scope:{ctx:P}}}),Fo=new Ie({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[Bw]},$$scope:{ctx:P}}}),yr=new Xe({}),br=new se({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),Pr=new se({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1211",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new Ze({props:{$$slots:{default:[Ww]},$$scope:{ctx:P}}}),wo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[Qw]},$$scope:{ctx:P}}}),$o=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[Kw]},$$scope:{ctx:P}}}),xr=new Xe({}),jr=new se({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),Nr=new se({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Ze({props:{$$slots:{default:[Uw]},$$scope:{ctx:P}}}),zo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[Rw]},$$scope:{ctx:P}}}),qo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[Hw]},$$scope:{ctx:P}}}),Po=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[Vw]},$$scope:{ctx:P}}}),xo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[Yw]},$$scope:{ctx:P}}}),Ir=new Xe({}),Sr=new se({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Rr=new se({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new Ze({props:{$$slots:{default:[Gw]},$$scope:{ctx:P}}}),Oo=new Ie({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[Zw]},$$scope:{ctx:P}}}),Hr=new Xe({}),Vr=new se({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),ea=new se({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1464",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new Ze({props:{$$slots:{default:[Xw]},$$scope:{ctx:P}}}),Ao=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[Jw]},$$scope:{ctx:P}}}),No=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[e$]},$$scope:{ctx:P}}}),na=new Xe({}),ta=new se({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),la=new se({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_funnel.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new Ze({props:{$$slots:{default:[n$]},$$scope:{ctx:P}}}),Bo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[t$]},$$scope:{ctx:P}}}),Wo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[o$]},$$scope:{ctx:P}}}),da=new Xe({}),ca=new se({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1100"}}),Ko=new Ze({props:{$$slots:{default:[s$]},$$scope:{ctx:P}}}),ga=new se({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelBaseModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1105",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Uo=new Ze({props:{$$slots:{default:[r$]},$$scope:{ctx:P}}}),Ro=new Ie({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[a$]},$$scope:{ctx:P}}}),_a=new Xe({}),ka=new se({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1149"}}),Vo=new Ze({props:{$$slots:{default:[i$]},$$scope:{ctx:P}}}),wa=new se({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new Ze({props:{$$slots:{default:[l$]},$$scope:{ctx:P}}}),Go=new Ie({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[d$]},$$scope:{ctx:P}}}),$a=new Xe({}),Ea=new se({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1201"}}),Xo=new Ze({props:{$$slots:{default:[c$]},$$scope:{ctx:P}}}),ja=new se({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1208",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jo=new Ze({props:{$$slots:{default:[u$]},$$scope:{ctx:P}}}),es=new Ie({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[p$]},$$scope:{ctx:P}}}),Ca=new Xe({}),Oa=new se({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1269"}}),ts=new Ze({props:{$$slots:{default:[f$]},$$scope:{ctx:P}}}),Ba=new se({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1283",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new Ze({props:{$$slots:{default:[h$]},$$scope:{ctx:P}}}),ss=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[m$]},$$scope:{ctx:P}}}),rs=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[g$]},$$scope:{ctx:P}}}),Wa=new Xe({}),Qa=new se({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1348"}}),is=new Ze({props:{$$slots:{default:[_$]},$$scope:{ctx:P}}}),Ya=new se({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ls=new Ze({props:{$$slots:{default:[k$]},$$scope:{ctx:P}}}),ds=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[v$]},$$scope:{ctx:P}}}),cs=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[T$]},$$scope:{ctx:P}}}),Ga=new Xe({}),Za=new se({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1424"}}),ps=new Ze({props:{$$slots:{default:[F$]},$$scope:{ctx:P}}}),oi=new se({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1441",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fs=new Ze({props:{$$slots:{default:[y$]},$$scope:{ctx:P}}}),hs=new Ie({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[b$]},$$scope:{ctx:P}}}),si=new Xe({}),ri=new se({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1540"}}),gs=new Ze({props:{$$slots:{default:[w$]},$$scope:{ctx:P}}}),ui=new se({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1551",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_s=new Ze({props:{$$slots:{default:[$$]},$$scope:{ctx:P}}}),ks=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[E$]},$$scope:{ctx:P}}}),vs=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[M$]},$$scope:{ctx:P}}}),pi=new Xe({}),fi=new se({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1618"}}),Fs=new Ze({props:{$$slots:{default:[z$]},$$scope:{ctx:P}}}),vi=new se({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/funnel/modeling_tf_funnel.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ys=new Ze({props:{$$slots:{default:[q$]},$$scope:{ctx:P}}}),bs=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[P$]},$$scope:{ctx:P}}}),ws=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[x$]},$$scope:{ctx:P}}}),{c(){d=r("meta"),k=p(),c=r("h1"),h=r("a"),T=r("span"),F(l.$$.fragment),u=p(),x=r("span"),ke=t("Funnel Transformer"),fe=p(),I=r("h2"),re=r("a"),ee=r("span"),F(M.$$.fragment),ve=p(),U=r("span"),Te=t("Overview"),he=p(),B=r("p"),Fe=t("The Funnel Transformer model was proposed in the paper "),ae=r("a"),H=t(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),ye=t(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),me=p(),Q=r("p"),be=t("The abstract from the paper is the following:"),ge=p(),K=r("p"),ue=r("em"),we=t(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),oe=p(),j=r("p"),O=t("Tips:"),_e=p(),W=r("ul"),pe=r("li"),$e=t(`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),V=p(),R=r("li"),Ee=t(`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),C=r("a"),Me=t("FunnelModel"),Y=t(", "),le=r("a"),ze=t("FunnelForPreTraining"),G=t(`,
`),de=r("a"),qe=t("FunnelForMaskedLM"),N=t(", "),ce=r("a"),Z=t("FunnelForTokenClassification"),Pe=t(` and
class:`),ne=r("em"),L=t("~transformers.FunnelForQuestionAnswering"),xe=t(`. The second ones should be used for
`),D=r("a"),je=t("FunnelBaseModel"),Ce=t(", "),g=r("a"),z=t("FunnelForSequenceClassification"),We=t(` and
`),J=r("a"),Qe=t("FunnelForMultipleChoice"),Ke=t("."),q=p(),Oe=r("p"),Ue=t("This model was contributed by "),De=r("a"),Re=t("sgugger"),He=t(". The original code can be found "),A=r("a"),X=t("here"),Ve=t("."),Ne=p(),S=r("h2"),Le=r("a"),Ae=r("span"),F(ie.$$.fragment),Ye=p(),te=r("span"),Ge=t("FunnelConfig"),Xc=p(),Jn=r("div"),F(Ds.$$.fragment),af=p(),et=r("p"),lf=t("This is the configuration class to store the configuration of a "),Mi=r("a"),df=t("FunnelModel"),cf=t(" or a "),zi=r("a"),uf=t("TFBertModel"),pf=t(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=r("a"),ff=t("funnel-transformer/small"),hf=t(" architecture."),mf=p(),ut=r("p"),gf=t("Configuration objects inherit from "),qi=r("a"),_f=t("PretrainedConfig"),kf=t(` and can be used to control the model outputs. Read the
documentation from `),Pi=r("a"),vf=t("PretrainedConfig"),Tf=t(" for more information."),Jc=p(),pt=r("h2"),so=r("a"),Il=r("span"),F(Ns.$$.fragment),Ff=p(),Sl=r("span"),yf=t("FunnelTokenizer"),eu=p(),Je=r("div"),F(Is.$$.fragment),bf=p(),Bl=r("p"),wf=t("Construct a Funnel Transformer tokenizer."),$f=p(),ro=r("p"),xi=r("a"),Ef=t("FunnelTokenizer"),Mf=t(" is identical to "),ji=r("a"),zf=t("BertTokenizer"),qf=t(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Pf=p(),Ss=r("p"),xf=t("Refer to superclass "),Ci=r("a"),jf=t("BertTokenizer"),Cf=t(" for usage examples and documentation concerning parameters."),Of=p(),tt=r("div"),F(Bs.$$.fragment),Lf=p(),Wl=r("p"),Df=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Af=p(),Ws=r("ul"),Oi=r("li"),Nf=t("single sequence: "),Ql=r("code"),If=t("[CLS] X [SEP]"),Sf=p(),Li=r("li"),Bf=t("pair of sequences: "),Kl=r("code"),Wf=t("[CLS] A [SEP] B [SEP]"),Qf=p(),ao=r("div"),F(Qs.$$.fragment),Kf=p(),Ks=r("p"),Uf=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=r("code"),Rf=t("prepare_for_model"),Hf=t(" method."),Vf=p(),Dn=r("div"),F(Us.$$.fragment),Yf=p(),Rl=r("p"),Gf=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Zf=p(),F(io.$$.fragment),Xf=p(),ft=r("p"),Jf=t("If "),Hl=r("code"),eh=t("token_ids_1"),nh=t(" is "),Vl=r("code"),th=t("None"),oh=t(", this method only returns the first portion of the mask (0s)."),sh=p(),Di=r("div"),F(Rs.$$.fragment),nu=p(),ht=r("h2"),lo=r("a"),Yl=r("span"),F(Hs.$$.fragment),rh=p(),Gl=r("span"),ah=t("FunnelTokenizerFast"),tu=p(),vn=r("div"),F(Vs.$$.fragment),ih=p(),Ys=r("p"),lh=t("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),dh=t("tokenizers"),ch=t(" library)."),uh=p(),co=r("p"),Ai=r("a"),ph=t("FunnelTokenizerFast"),fh=t(" is identical to "),Ni=r("a"),hh=t("BertTokenizerFast"),mh=t(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gh=p(),Gs=r("p"),_h=t("Refer to superclass "),Ii=r("a"),kh=t("BertTokenizerFast"),vh=t(" for usage examples and documentation concerning parameters."),Th=p(),An=r("div"),F(Zs.$$.fragment),Fh=p(),Xl=r("p"),yh=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),bh=p(),F(uo.$$.fragment),wh=p(),mt=r("p"),$h=t("If "),Jl=r("code"),Eh=t("token_ids_1"),Mh=t(" is "),ed=r("code"),zh=t("None"),qh=t(", this method only returns the first portion of the mask (0s)."),ou=p(),gt=r("h2"),po=r("a"),nd=r("span"),F(Xs.$$.fragment),Ph=p(),td=r("span"),xh=t("Funnel specific outputs"),su=p(),_t=r("div"),F(Js.$$.fragment),jh=p(),er=r("p"),Ch=t("Output type of "),Si=r("a"),Oh=t("FunnelForPreTraining"),Lh=t("."),ru=p(),kt=r("div"),F(nr.$$.fragment),Dh=p(),tr=r("p"),Ah=t("Output type of "),Bi=r("a"),Nh=t("FunnelForPreTraining"),Ih=t("."),au=p(),vt=r("h2"),fo=r("a"),od=r("span"),F(or.$$.fragment),Sh=p(),sd=r("span"),Bh=t("FunnelBaseModel"),iu=p(),pn=r("div"),F(sr.$$.fragment),Wh=p(),rd=r("p"),Qh=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Kh=p(),rr=r("p"),Uh=t("The Funnel Transformer model was proposed in "),ar=r("a"),Rh=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Hh=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Vh=p(),ir=r("p"),Yh=t("This model inherits from "),Wi=r("a"),Gh=t("PreTrainedModel"),Zh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=p(),lr=r("p"),Jh=t("This model is also a PyTorch "),dr=r("a"),em=t("torch.nn.Module"),nm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=p(),Nn=r("div"),F(cr.$$.fragment),om=p(),Tt=r("p"),sm=t("The "),Qi=r("a"),rm=t("FunnelBaseModel"),am=t(" forward method, overrides the "),ad=r("code"),im=t("__call__"),lm=t(" special method."),dm=p(),F(ho.$$.fragment),cm=p(),F(mo.$$.fragment),lu=p(),Ft=r("h2"),go=r("a"),id=r("span"),F(ur.$$.fragment),um=p(),ld=r("span"),pm=t("FunnelModel"),du=p(),fn=r("div"),F(pr.$$.fragment),fm=p(),dd=r("p"),hm=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),mm=p(),fr=r("p"),gm=t("The Funnel Transformer model was proposed in "),hr=r("a"),_m=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),km=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),vm=p(),mr=r("p"),Tm=t("This model inherits from "),Ki=r("a"),Fm=t("PreTrainedModel"),ym=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm=p(),gr=r("p"),wm=t("This model is also a PyTorch "),_r=r("a"),$m=t("torch.nn.Module"),Em=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mm=p(),In=r("div"),F(kr.$$.fragment),zm=p(),yt=r("p"),qm=t("The "),Ui=r("a"),Pm=t("FunnelModel"),xm=t(" forward method, overrides the "),cd=r("code"),jm=t("__call__"),Cm=t(" special method."),Om=p(),F(_o.$$.fragment),Lm=p(),F(ko.$$.fragment),cu=p(),bt=r("h2"),vo=r("a"),ud=r("span"),F(vr.$$.fragment),Dm=p(),pd=r("span"),Am=t("FunnelModelForPreTraining"),uu=p(),wt=r("div"),F(Tr.$$.fragment),Nm=p(),Sn=r("div"),F(Fr.$$.fragment),Im=p(),$t=r("p"),Sm=t("The "),Ri=r("a"),Bm=t("FunnelForPreTraining"),Wm=t(" forward method, overrides the "),fd=r("code"),Qm=t("__call__"),Km=t(" special method."),Um=p(),F(To.$$.fragment),Rm=p(),F(Fo.$$.fragment),pu=p(),Et=r("h2"),yo=r("a"),hd=r("span"),F(yr.$$.fragment),Hm=p(),md=r("span"),Vm=t("FunnelForMaskedLM"),fu=p(),hn=r("div"),F(br.$$.fragment),Ym=p(),wr=r("p"),Gm=t("Funnel Transformer Model with a "),gd=r("code"),Zm=t("language modeling"),Xm=t(" head on top."),Jm=p(),$r=r("p"),eg=t("The Funnel Transformer model was proposed in "),Er=r("a"),ng=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),og=p(),Mr=r("p"),sg=t("This model inherits from "),Hi=r("a"),rg=t("PreTrainedModel"),ag=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=p(),zr=r("p"),lg=t("This model is also a PyTorch "),qr=r("a"),dg=t("torch.nn.Module"),cg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ug=p(),Tn=r("div"),F(Pr.$$.fragment),pg=p(),Mt=r("p"),fg=t("The "),Vi=r("a"),hg=t("FunnelForMaskedLM"),mg=t(" forward method, overrides the "),_d=r("code"),gg=t("__call__"),_g=t(" special method."),kg=p(),F(bo.$$.fragment),vg=p(),F(wo.$$.fragment),Tg=p(),F($o.$$.fragment),hu=p(),zt=r("h2"),Eo=r("a"),kd=r("span"),F(xr.$$.fragment),Fg=p(),vd=r("span"),yg=t("FunnelForSequenceClassification"),mu=p(),mn=r("div"),F(jr.$$.fragment),bg=p(),Td=r("p"),wg=t(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),$g=p(),Cr=r("p"),Eg=t("The Funnel Transformer model was proposed in "),Or=r("a"),Mg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qg=p(),Lr=r("p"),Pg=t("This model inherits from "),Yi=r("a"),xg=t("PreTrainedModel"),jg=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cg=p(),Dr=r("p"),Og=t("This model is also a PyTorch "),Ar=r("a"),Lg=t("torch.nn.Module"),Dg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=p(),un=r("div"),F(Nr.$$.fragment),Ng=p(),qt=r("p"),Ig=t("The "),Gi=r("a"),Sg=t("FunnelForSequenceClassification"),Bg=t(" forward method, overrides the "),Fd=r("code"),Wg=t("__call__"),Qg=t(" special method."),Kg=p(),F(Mo.$$.fragment),Ug=p(),F(zo.$$.fragment),Rg=p(),F(qo.$$.fragment),Hg=p(),F(Po.$$.fragment),Vg=p(),F(xo.$$.fragment),gu=p(),Pt=r("h2"),jo=r("a"),yd=r("span"),F(Ir.$$.fragment),Yg=p(),bd=r("span"),Gg=t("FunnelForMultipleChoice"),_u=p(),gn=r("div"),F(Sr.$$.fragment),Zg=p(),wd=r("p"),Xg=t(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Jg=p(),Br=r("p"),e_=t("The Funnel Transformer model was proposed in "),Wr=r("a"),n_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),t_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),o_=p(),Qr=r("p"),s_=t("This model inherits from "),Zi=r("a"),r_=t("PreTrainedModel"),a_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=p(),Kr=r("p"),l_=t("This model is also a PyTorch "),Ur=r("a"),d_=t("torch.nn.Module"),c_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u_=p(),Bn=r("div"),F(Rr.$$.fragment),p_=p(),xt=r("p"),f_=t("The "),Xi=r("a"),h_=t("FunnelForMultipleChoice"),m_=t(" forward method, overrides the "),$d=r("code"),g_=t("__call__"),__=t(" special method."),k_=p(),F(Co.$$.fragment),v_=p(),F(Oo.$$.fragment),ku=p(),jt=r("h2"),Lo=r("a"),Ed=r("span"),F(Hr.$$.fragment),T_=p(),Md=r("span"),F_=t("FunnelForTokenClassification"),vu=p(),_n=r("div"),F(Vr.$$.fragment),y_=p(),zd=r("p"),b_=t(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),w_=p(),Yr=r("p"),$_=t("The Funnel Transformer model was proposed in "),Gr=r("a"),E_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),M_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),z_=p(),Zr=r("p"),q_=t("This model inherits from "),Ji=r("a"),P_=t("PreTrainedModel"),x_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=p(),Xr=r("p"),C_=t("This model is also a PyTorch "),Jr=r("a"),O_=t("torch.nn.Module"),L_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D_=p(),Fn=r("div"),F(ea.$$.fragment),A_=p(),Ct=r("p"),N_=t("The "),el=r("a"),I_=t("FunnelForTokenClassification"),S_=t(" forward method, overrides the "),qd=r("code"),B_=t("__call__"),W_=t(" special method."),Q_=p(),F(Do.$$.fragment),K_=p(),F(Ao.$$.fragment),U_=p(),F(No.$$.fragment),Tu=p(),Ot=r("h2"),Io=r("a"),Pd=r("span"),F(na.$$.fragment),R_=p(),xd=r("span"),H_=t("FunnelForQuestionAnswering"),Fu=p(),kn=r("div"),F(ta.$$.fragment),V_=p(),Lt=r("p"),Y_=t(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),jd=r("code"),G_=t("span start logits"),Z_=t(" and "),Cd=r("code"),X_=t("span end logits"),J_=t(")."),ek=p(),oa=r("p"),nk=t("The Funnel Transformer model was proposed in "),sa=r("a"),tk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ok=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sk=p(),ra=r("p"),rk=t("This model inherits from "),nl=r("a"),ak=t("PreTrainedModel"),ik=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk=p(),aa=r("p"),dk=t("This model is also a PyTorch "),ia=r("a"),ck=t("torch.nn.Module"),uk=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pk=p(),yn=r("div"),F(la.$$.fragment),fk=p(),Dt=r("p"),hk=t("The "),tl=r("a"),mk=t("FunnelForQuestionAnswering"),gk=t(" forward method, overrides the "),Od=r("code"),_k=t("__call__"),kk=t(" special method."),vk=p(),F(So.$$.fragment),Tk=p(),F(Bo.$$.fragment),Fk=p(),F(Wo.$$.fragment),yu=p(),At=r("h2"),Qo=r("a"),Ld=r("span"),F(da.$$.fragment),yk=p(),Dd=r("span"),bk=t("TFFunnelBaseModel"),bu=p(),nn=r("div"),F(ca.$$.fragment),wk=p(),Ad=r("p"),$k=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Ek=p(),ua=r("p"),Mk=t("The Funnel Transformer model was proposed in "),pa=r("a"),zk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pk=p(),fa=r("p"),xk=t("This model inherits from "),ol=r("a"),jk=t("TFPreTrainedModel"),Ck=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok=p(),ha=r("p"),Lk=t("This model is also a "),ma=r("a"),Dk=t("tf.keras.Model"),Ak=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nk=p(),F(Ko.$$.fragment),Ik=p(),Wn=r("div"),F(ga.$$.fragment),Sk=p(),Nt=r("p"),Bk=t("The "),sl=r("a"),Wk=t("TFFunnelBaseModel"),Qk=t(" forward method, overrides the "),Nd=r("code"),Kk=t("__call__"),Uk=t(" special method."),Rk=p(),F(Uo.$$.fragment),Hk=p(),F(Ro.$$.fragment),wu=p(),It=r("h2"),Ho=r("a"),Id=r("span"),F(_a.$$.fragment),Vk=p(),Sd=r("span"),Yk=t("TFFunnelModel"),$u=p(),tn=r("div"),F(ka.$$.fragment),Gk=p(),Bd=r("p"),Zk=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Xk=p(),va=r("p"),Jk=t("The Funnel Transformer model was proposed in "),Ta=r("a"),ev=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nv=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tv=p(),Fa=r("p"),ov=t("This model inherits from "),rl=r("a"),sv=t("TFPreTrainedModel"),rv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),av=p(),ya=r("p"),iv=t("This model is also a "),ba=r("a"),lv=t("tf.keras.Model"),dv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cv=p(),F(Vo.$$.fragment),uv=p(),Qn=r("div"),F(wa.$$.fragment),pv=p(),St=r("p"),fv=t("The "),al=r("a"),hv=t("TFFunnelModel"),mv=t(" forward method, overrides the "),Wd=r("code"),gv=t("__call__"),_v=t(" special method."),kv=p(),F(Yo.$$.fragment),vv=p(),F(Go.$$.fragment),Eu=p(),Bt=r("h2"),Zo=r("a"),Qd=r("span"),F($a.$$.fragment),Tv=p(),Kd=r("span"),Fv=t("TFFunnelModelForPreTraining"),Mu=p(),on=r("div"),F(Ea.$$.fragment),yv=p(),Ud=r("p"),bv=t("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),wv=p(),Ma=r("p"),$v=t("The Funnel Transformer model was proposed in "),za=r("a"),Ev=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Mv=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zv=p(),qa=r("p"),qv=t("This model inherits from "),il=r("a"),Pv=t("TFPreTrainedModel"),xv=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jv=p(),Pa=r("p"),Cv=t("This model is also a "),xa=r("a"),Ov=t("tf.keras.Model"),Lv=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv=p(),F(Xo.$$.fragment),Av=p(),Kn=r("div"),F(ja.$$.fragment),Nv=p(),Wt=r("p"),Iv=t("The "),ll=r("a"),Sv=t("TFFunnelForPreTraining"),Bv=t(" forward method, overrides the "),Rd=r("code"),Wv=t("__call__"),Qv=t(" special method."),Kv=p(),F(Jo.$$.fragment),Uv=p(),F(es.$$.fragment),zu=p(),Qt=r("h2"),ns=r("a"),Hd=r("span"),F(Ca.$$.fragment),Rv=p(),Vd=r("span"),Hv=t("TFFunnelForMaskedLM"),qu=p(),sn=r("div"),F(Oa.$$.fragment),Vv=p(),La=r("p"),Yv=t("Funnel Model with a "),Yd=r("code"),Gv=t("language modeling"),Zv=t(" head on top."),Xv=p(),Da=r("p"),Jv=t("The Funnel Transformer model was proposed in "),Aa=r("a"),e2=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),n2=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),t2=p(),Na=r("p"),o2=t("This model inherits from "),dl=r("a"),s2=t("TFPreTrainedModel"),r2=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a2=p(),Ia=r("p"),i2=t("This model is also a "),Sa=r("a"),l2=t("tf.keras.Model"),d2=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),c2=p(),F(ts.$$.fragment),u2=p(),bn=r("div"),F(Ba.$$.fragment),p2=p(),Kt=r("p"),f2=t("The "),cl=r("a"),h2=t("TFFunnelForMaskedLM"),m2=t(" forward method, overrides the "),Gd=r("code"),g2=t("__call__"),_2=t(" special method."),k2=p(),F(os.$$.fragment),v2=p(),F(ss.$$.fragment),T2=p(),F(rs.$$.fragment),Pu=p(),Ut=r("h2"),as=r("a"),Zd=r("span"),F(Wa.$$.fragment),F2=p(),Xd=r("span"),y2=t("TFFunnelForSequenceClassification"),xu=p(),rn=r("div"),F(Qa.$$.fragment),b2=p(),Jd=r("p"),w2=t(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$2=p(),Ka=r("p"),E2=t("The Funnel Transformer model was proposed in "),Ua=r("a"),M2=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),z2=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),q2=p(),Ra=r("p"),P2=t("This model inherits from "),ul=r("a"),x2=t("TFPreTrainedModel"),j2=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C2=p(),Ha=r("p"),O2=t("This model is also a "),Va=r("a"),L2=t("tf.keras.Model"),D2=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),A2=p(),F(is.$$.fragment),N2=p(),wn=r("div"),F(Ya.$$.fragment),I2=p(),Rt=r("p"),S2=t("The "),pl=r("a"),B2=t("TFFunnelForSequenceClassification"),W2=t(" forward method, overrides the "),ec=r("code"),Q2=t("__call__"),K2=t(" special method."),U2=p(),F(ls.$$.fragment),R2=p(),F(ds.$$.fragment),H2=p(),F(cs.$$.fragment),ju=p(),Ht=r("h2"),us=r("a"),nc=r("span"),F(Ga.$$.fragment),V2=p(),tc=r("span"),Y2=t("TFFunnelForMultipleChoice"),Cu=p(),an=r("div"),F(Za.$$.fragment),G2=p(),oc=r("p"),Z2=t(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),X2=p(),Xa=r("p"),J2=t("The Funnel Transformer model was proposed in "),Ja=r("a"),eT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tT=p(),ei=r("p"),oT=t("This model inherits from "),fl=r("a"),sT=t("TFPreTrainedModel"),rT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=p(),ni=r("p"),iT=t("This model is also a "),ti=r("a"),lT=t("tf.keras.Model"),dT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cT=p(),F(ps.$$.fragment),uT=p(),Un=r("div"),F(oi.$$.fragment),pT=p(),Vt=r("p"),fT=t("The "),hl=r("a"),hT=t("TFFunnelForMultipleChoice"),mT=t(" forward method, overrides the "),sc=r("code"),gT=t("__call__"),_T=t(" special method."),kT=p(),F(fs.$$.fragment),vT=p(),F(hs.$$.fragment),Ou=p(),Yt=r("h2"),ms=r("a"),rc=r("span"),F(si.$$.fragment),TT=p(),ac=r("span"),FT=t("TFFunnelForTokenClassification"),Lu=p(),ln=r("div"),F(ri.$$.fragment),yT=p(),ic=r("p"),bT=t(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),wT=p(),ai=r("p"),$T=t("The Funnel Transformer model was proposed in "),ii=r("a"),ET=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),MT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zT=p(),li=r("p"),qT=t("This model inherits from "),ml=r("a"),PT=t("TFPreTrainedModel"),xT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jT=p(),di=r("p"),CT=t("This model is also a "),ci=r("a"),OT=t("tf.keras.Model"),LT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DT=p(),F(gs.$$.fragment),AT=p(),$n=r("div"),F(ui.$$.fragment),NT=p(),Gt=r("p"),IT=t("The "),gl=r("a"),ST=t("TFFunnelForTokenClassification"),BT=t(" forward method, overrides the "),lc=r("code"),WT=t("__call__"),QT=t(" special method."),KT=p(),F(_s.$$.fragment),UT=p(),F(ks.$$.fragment),RT=p(),F(vs.$$.fragment),Du=p(),Zt=r("h2"),Ts=r("a"),dc=r("span"),F(pi.$$.fragment),HT=p(),cc=r("span"),VT=t("TFFunnelForQuestionAnswering"),Au=p(),dn=r("div"),F(fi.$$.fragment),YT=p(),Xt=r("p"),GT=t(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),uc=r("code"),ZT=t("span start logits"),XT=t(" and "),pc=r("code"),JT=t("span end logits"),eF=t(")."),nF=p(),hi=r("p"),tF=t("The Funnel Transformer model was proposed in "),mi=r("a"),oF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rF=p(),gi=r("p"),aF=t("This model inherits from "),_l=r("a"),iF=t("TFPreTrainedModel"),lF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dF=p(),_i=r("p"),cF=t("This model is also a "),ki=r("a"),uF=t("tf.keras.Model"),pF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fF=p(),F(Fs.$$.fragment),hF=p(),En=r("div"),F(vi.$$.fragment),mF=p(),Jt=r("p"),gF=t("The "),kl=r("a"),_F=t("TFFunnelForQuestionAnswering"),kF=t(" forward method, overrides the "),fc=r("code"),vF=t("__call__"),TF=t(" special method."),FF=p(),F(ys.$$.fragment),yF=p(),F(bs.$$.fragment),bF=p(),F(ws.$$.fragment),this.h()},l(s){const v=jw('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(n),k=f(s),c=a(s,"H1",{class:!0});var Ti=i(c);h=a(Ti,"A",{id:!0,class:!0,href:!0});var hc=i(h);T=a(hc,"SPAN",{});var mc=i(T);y(l.$$.fragment,mc),mc.forEach(n),hc.forEach(n),u=f(Ti),x=a(Ti,"SPAN",{});var gc=i(x);ke=o(gc,"Funnel Transformer"),gc.forEach(n),Ti.forEach(n),fe=f(s),I=a(s,"H2",{class:!0});var Fi=i(I);re=a(Fi,"A",{id:!0,class:!0,href:!0});var _c=i(re);ee=a(_c,"SPAN",{});var kc=i(ee);y(M.$$.fragment,kc),kc.forEach(n),_c.forEach(n),ve=f(Fi),U=a(Fi,"SPAN",{});var vc=i(U);Te=o(vc,"Overview"),vc.forEach(n),Fi.forEach(n),he=f(s),B=a(s,"P",{});var yi=i(B);Fe=o(yi,"The Funnel Transformer model was proposed in the paper "),ae=a(yi,"A",{href:!0,rel:!0});var Tc=i(ae);H=o(Tc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),Tc.forEach(n),ye=o(yi,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),yi.forEach(n),me=f(s),Q=a(s,"P",{});var Fc=i(Q);be=o(Fc,"The abstract from the paper is the following:"),Fc.forEach(n),ge=f(s),K=a(s,"P",{});var yc=i(K);ue=a(yc,"EM",{});var bc=i(ue);we=o(bc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),bc.forEach(n),yc.forEach(n),oe=f(s),j=a(s,"P",{});var wc=i(j);O=o(wc,"Tips:"),wc.forEach(n),_e=f(s),W=a(s,"UL",{});var bi=i(W);pe=a(bi,"LI",{});var $c=i(pe);$e=o($c,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),$c.forEach(n),V=f(bi),R=a(bi,"LI",{});var en=i(R);Ee=o(en,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),C=a(en,"A",{href:!0});var Ec=i(C);Me=o(Ec,"FunnelModel"),Ec.forEach(n),Y=o(en,", "),le=a(en,"A",{href:!0});var Mc=i(le);ze=o(Mc,"FunnelForPreTraining"),Mc.forEach(n),G=o(en,`,
`),de=a(en,"A",{href:!0});var zc=i(de);qe=o(zc,"FunnelForMaskedLM"),zc.forEach(n),N=o(en,", "),ce=a(en,"A",{href:!0});var qc=i(ce);Z=o(qc,"FunnelForTokenClassification"),qc.forEach(n),Pe=o(en,` and
class:`),ne=a(en,"EM",{});var Pc=i(ne);L=o(Pc,"~transformers.FunnelForQuestionAnswering"),Pc.forEach(n),xe=o(en,`. The second ones should be used for
`),D=a(en,"A",{href:!0});var xc=i(D);je=o(xc,"FunnelBaseModel"),xc.forEach(n),Ce=o(en,", "),g=a(en,"A",{href:!0});var jc=i(g);z=o(jc,"FunnelForSequenceClassification"),jc.forEach(n),We=o(en,` and
`),J=a(en,"A",{href:!0});var Cc=i(J);Qe=o(Cc,"FunnelForMultipleChoice"),Cc.forEach(n),Ke=o(en,"."),en.forEach(n),bi.forEach(n),q=f(s),Oe=a(s,"P",{});var eo=i(Oe);Ue=o(eo,"This model was contributed by "),De=a(eo,"A",{href:!0,rel:!0});var Oc=i(De);Re=o(Oc,"sgugger"),Oc.forEach(n),He=o(eo,". The original code can be found "),A=a(eo,"A",{href:!0,rel:!0});var Lc=i(A);X=o(Lc,"here"),Lc.forEach(n),Ve=o(eo,"."),eo.forEach(n),Ne=f(s),S=a(s,"H2",{class:!0});var wi=i(S);Le=a(wi,"A",{id:!0,class:!0,href:!0});var Dc=i(Le);Ae=a(Dc,"SPAN",{});var Ac=i(Ae);y(ie.$$.fragment,Ac),Ac.forEach(n),Dc.forEach(n),Ye=f(wi),te=a(wi,"SPAN",{});var Nc=i(te);Ge=o(Nc,"FunnelConfig"),Nc.forEach(n),wi.forEach(n),Xc=f(s),Jn=a(s,"DIV",{class:!0});var no=i(Jn);y(Ds.$$.fragment,no),af=f(no),et=a(no,"P",{});var nt=i(et);lf=o(nt,"This is the configuration class to store the configuration of a "),Mi=a(nt,"A",{href:!0});var Ic=i(Mi);df=o(Ic,"FunnelModel"),Ic.forEach(n),cf=o(nt," or a "),zi=a(nt,"A",{href:!0});var Sc=i(zi);uf=o(Sc,"TFBertModel"),Sc.forEach(n),pf=o(nt,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=a(nt,"A",{href:!0,rel:!0});var Bc=i(As);ff=o(Bc,"funnel-transformer/small"),Bc.forEach(n),hf=o(nt," architecture."),nt.forEach(n),mf=f(no),ut=a(no,"P",{});var to=i(ut);gf=o(to,"Configuration objects inherit from "),qi=a(to,"A",{href:!0});var Wc=i(qi);_f=o(Wc,"PretrainedConfig"),Wc.forEach(n),kf=o(to,` and can be used to control the model outputs. Read the
documentation from `),Pi=a(to,"A",{href:!0});var Qc=i(Pi);vf=o(Qc,"PretrainedConfig"),Qc.forEach(n),Tf=o(to," for more information."),to.forEach(n),no.forEach(n),Jc=f(s),pt=a(s,"H2",{class:!0});var $i=i(pt);so=a($i,"A",{id:!0,class:!0,href:!0});var Kc=i(so);Il=a(Kc,"SPAN",{});var Uc=i(Il);y(Ns.$$.fragment,Uc),Uc.forEach(n),Kc.forEach(n),Ff=f($i),Sl=a($i,"SPAN",{});var Rc=i(Sl);yf=o(Rc,"FunnelTokenizer"),Rc.forEach(n),$i.forEach(n),eu=f(s),Je=a(s,"DIV",{class:!0});var cn=i(Je);y(Is.$$.fragment,cn),bf=f(cn),Bl=a(cn,"P",{});var Hc=i(Bl);wf=o(Hc,"Construct a Funnel Transformer tokenizer."),Hc.forEach(n),$f=f(cn),ro=a(cn,"P",{});var $s=i(ro);xi=a($s,"A",{href:!0});var Vc=i(xi);Ef=o(Vc,"FunnelTokenizer"),Vc.forEach(n),Mf=o($s," is identical to "),ji=a($s,"A",{href:!0});var Yc=i(ji);zf=o(Yc,"BertTokenizer"),Yc.forEach(n),qf=o($s,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),$s.forEach(n),Pf=f(cn),Ss=a(cn,"P",{});var Ei=i(Ss);xf=o(Ei,"Refer to superclass "),Ci=a(Ei,"A",{href:!0});var Gc=i(Ci);jf=o(Gc,"BertTokenizer"),Gc.forEach(n),Cf=o(Ei," for usage examples and documentation concerning parameters."),Ei.forEach(n),Of=f(cn),tt=a(cn,"DIV",{class:!0});var oo=i(tt);y(Bs.$$.fragment,oo),Lf=f(oo),Wl=a(oo,"P",{});var EF=i(Wl);Df=o(EF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),EF.forEach(n),Af=f(oo),Ws=a(oo,"UL",{});var Iu=i(Ws);Oi=a(Iu,"LI",{});var wF=i(Oi);Nf=o(wF,"single sequence: "),Ql=a(wF,"CODE",{});var MF=i(Ql);If=o(MF,"[CLS] X [SEP]"),MF.forEach(n),wF.forEach(n),Sf=f(Iu),Li=a(Iu,"LI",{});var $F=i(Li);Bf=o($F,"pair of sequences: "),Kl=a($F,"CODE",{});var zF=i(Kl);Wf=o(zF,"[CLS] A [SEP] B [SEP]"),zF.forEach(n),$F.forEach(n),Iu.forEach(n),oo.forEach(n),Qf=f(cn),ao=a(cn,"DIV",{class:!0});var Su=i(ao);y(Qs.$$.fragment,Su),Kf=f(Su),Ks=a(Su,"P",{});var Bu=i(Ks);Uf=o(Bu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=a(Bu,"CODE",{});var qF=i(Ul);Rf=o(qF,"prepare_for_model"),qF.forEach(n),Hf=o(Bu," method."),Bu.forEach(n),Su.forEach(n),Vf=f(cn),Dn=a(cn,"DIV",{class:!0});var Es=i(Dn);y(Us.$$.fragment,Es),Yf=f(Es),Rl=a(Es,"P",{});var PF=i(Rl);Gf=o(PF,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),PF.forEach(n),Zf=f(Es),y(io.$$.fragment,Es),Xf=f(Es),ft=a(Es,"P",{});var vl=i(ft);Jf=o(vl,"If "),Hl=a(vl,"CODE",{});var xF=i(Hl);eh=o(xF,"token_ids_1"),xF.forEach(n),nh=o(vl," is "),Vl=a(vl,"CODE",{});var jF=i(Vl);th=o(jF,"None"),jF.forEach(n),oh=o(vl,", this method only returns the first portion of the mask (0s)."),vl.forEach(n),Es.forEach(n),sh=f(cn),Di=a(cn,"DIV",{class:!0});var CF=i(Di);y(Rs.$$.fragment,CF),CF.forEach(n),cn.forEach(n),nu=f(s),ht=a(s,"H2",{class:!0});var Wu=i(ht);lo=a(Wu,"A",{id:!0,class:!0,href:!0});var OF=i(lo);Yl=a(OF,"SPAN",{});var LF=i(Yl);y(Hs.$$.fragment,LF),LF.forEach(n),OF.forEach(n),rh=f(Wu),Gl=a(Wu,"SPAN",{});var DF=i(Gl);ah=o(DF,"FunnelTokenizerFast"),DF.forEach(n),Wu.forEach(n),tu=f(s),vn=a(s,"DIV",{class:!0});var ot=i(vn);y(Vs.$$.fragment,ot),ih=f(ot),Ys=a(ot,"P",{});var Qu=i(Ys);lh=o(Qu,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=a(Qu,"EM",{});var AF=i(Zl);dh=o(AF,"tokenizers"),AF.forEach(n),ch=o(Qu," library)."),Qu.forEach(n),uh=f(ot),co=a(ot,"P",{});var Zc=i(co);Ai=a(Zc,"A",{href:!0});var NF=i(Ai);ph=o(NF,"FunnelTokenizerFast"),NF.forEach(n),fh=o(Zc," is identical to "),Ni=a(Zc,"A",{href:!0});var IF=i(Ni);hh=o(IF,"BertTokenizerFast"),IF.forEach(n),mh=o(Zc,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Zc.forEach(n),gh=f(ot),Gs=a(ot,"P",{});var Ku=i(Gs);_h=o(Ku,"Refer to superclass "),Ii=a(Ku,"A",{href:!0});var SF=i(Ii);kh=o(SF,"BertTokenizerFast"),SF.forEach(n),vh=o(Ku," for usage examples and documentation concerning parameters."),Ku.forEach(n),Th=f(ot),An=a(ot,"DIV",{class:!0});var Ms=i(An);y(Zs.$$.fragment,Ms),Fh=f(Ms),Xl=a(Ms,"P",{});var BF=i(Xl);yh=o(BF,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),BF.forEach(n),bh=f(Ms),y(uo.$$.fragment,Ms),wh=f(Ms),mt=a(Ms,"P",{});var Tl=i(mt);$h=o(Tl,"If "),Jl=a(Tl,"CODE",{});var WF=i(Jl);Eh=o(WF,"token_ids_1"),WF.forEach(n),Mh=o(Tl," is "),ed=a(Tl,"CODE",{});var QF=i(ed);zh=o(QF,"None"),QF.forEach(n),qh=o(Tl,", this method only returns the first portion of the mask (0s)."),Tl.forEach(n),Ms.forEach(n),ot.forEach(n),ou=f(s),gt=a(s,"H2",{class:!0});var Uu=i(gt);po=a(Uu,"A",{id:!0,class:!0,href:!0});var KF=i(po);nd=a(KF,"SPAN",{});var UF=i(nd);y(Xs.$$.fragment,UF),UF.forEach(n),KF.forEach(n),Ph=f(Uu),td=a(Uu,"SPAN",{});var RF=i(td);xh=o(RF,"Funnel specific outputs"),RF.forEach(n),Uu.forEach(n),su=f(s),_t=a(s,"DIV",{class:!0});var Ru=i(_t);y(Js.$$.fragment,Ru),jh=f(Ru),er=a(Ru,"P",{});var Hu=i(er);Ch=o(Hu,"Output type of "),Si=a(Hu,"A",{href:!0});var HF=i(Si);Oh=o(HF,"FunnelForPreTraining"),HF.forEach(n),Lh=o(Hu,"."),Hu.forEach(n),Ru.forEach(n),ru=f(s),kt=a(s,"DIV",{class:!0});var Vu=i(kt);y(nr.$$.fragment,Vu),Dh=f(Vu),tr=a(Vu,"P",{});var Yu=i(tr);Ah=o(Yu,"Output type of "),Bi=a(Yu,"A",{href:!0});var VF=i(Bi);Nh=o(VF,"FunnelForPreTraining"),VF.forEach(n),Ih=o(Yu,"."),Yu.forEach(n),Vu.forEach(n),au=f(s),vt=a(s,"H2",{class:!0});var Gu=i(vt);fo=a(Gu,"A",{id:!0,class:!0,href:!0});var YF=i(fo);od=a(YF,"SPAN",{});var GF=i(od);y(or.$$.fragment,GF),GF.forEach(n),YF.forEach(n),Sh=f(Gu),sd=a(Gu,"SPAN",{});var ZF=i(sd);Bh=o(ZF,"FunnelBaseModel"),ZF.forEach(n),Gu.forEach(n),iu=f(s),pn=a(s,"DIV",{class:!0});var Rn=i(pn);y(sr.$$.fragment,Rn),Wh=f(Rn),rd=a(Rn,"P",{});var XF=i(rd);Qh=o(XF,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),XF.forEach(n),Kh=f(Rn),rr=a(Rn,"P",{});var Zu=i(rr);Uh=o(Zu,"The Funnel Transformer model was proposed in "),ar=a(Zu,"A",{href:!0,rel:!0});var JF=i(ar);Rh=o(JF,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),JF.forEach(n),Hh=o(Zu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Zu.forEach(n),Vh=f(Rn),ir=a(Rn,"P",{});var Xu=i(ir);Yh=o(Xu,"This model inherits from "),Wi=a(Xu,"A",{href:!0});var ey=i(Wi);Gh=o(ey,"PreTrainedModel"),ey.forEach(n),Zh=o(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(n),Xh=f(Rn),lr=a(Rn,"P",{});var Ju=i(lr);Jh=o(Ju,"This model is also a PyTorch "),dr=a(Ju,"A",{href:!0,rel:!0});var ny=i(dr);em=o(ny,"torch.nn.Module"),ny.forEach(n),nm=o(Ju,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju.forEach(n),tm=f(Rn),Nn=a(Rn,"DIV",{class:!0});var zs=i(Nn);y(cr.$$.fragment,zs),om=f(zs),Tt=a(zs,"P",{});var Fl=i(Tt);sm=o(Fl,"The "),Qi=a(Fl,"A",{href:!0});var ty=i(Qi);rm=o(ty,"FunnelBaseModel"),ty.forEach(n),am=o(Fl," forward method, overrides the "),ad=a(Fl,"CODE",{});var oy=i(ad);im=o(oy,"__call__"),oy.forEach(n),lm=o(Fl," special method."),Fl.forEach(n),dm=f(zs),y(ho.$$.fragment,zs),cm=f(zs),y(mo.$$.fragment,zs),zs.forEach(n),Rn.forEach(n),lu=f(s),Ft=a(s,"H2",{class:!0});var ep=i(Ft);go=a(ep,"A",{id:!0,class:!0,href:!0});var sy=i(go);id=a(sy,"SPAN",{});var ry=i(id);y(ur.$$.fragment,ry),ry.forEach(n),sy.forEach(n),um=f(ep),ld=a(ep,"SPAN",{});var ay=i(ld);pm=o(ay,"FunnelModel"),ay.forEach(n),ep.forEach(n),du=f(s),fn=a(s,"DIV",{class:!0});var Hn=i(fn);y(pr.$$.fragment,Hn),fm=f(Hn),dd=a(Hn,"P",{});var iy=i(dd);hm=o(iy,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),iy.forEach(n),mm=f(Hn),fr=a(Hn,"P",{});var np=i(fr);gm=o(np,"The Funnel Transformer model was proposed in "),hr=a(np,"A",{href:!0,rel:!0});var ly=i(hr);_m=o(ly,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ly.forEach(n),km=o(np," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),np.forEach(n),vm=f(Hn),mr=a(Hn,"P",{});var tp=i(mr);Tm=o(tp,"This model inherits from "),Ki=a(tp,"A",{href:!0});var dy=i(Ki);Fm=o(dy,"PreTrainedModel"),dy.forEach(n),ym=o(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(n),bm=f(Hn),gr=a(Hn,"P",{});var op=i(gr);wm=o(op,"This model is also a PyTorch "),_r=a(op,"A",{href:!0,rel:!0});var cy=i(_r);$m=o(cy,"torch.nn.Module"),cy.forEach(n),Em=o(op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op.forEach(n),Mm=f(Hn),In=a(Hn,"DIV",{class:!0});var qs=i(In);y(kr.$$.fragment,qs),zm=f(qs),yt=a(qs,"P",{});var yl=i(yt);qm=o(yl,"The "),Ui=a(yl,"A",{href:!0});var uy=i(Ui);Pm=o(uy,"FunnelModel"),uy.forEach(n),xm=o(yl," forward method, overrides the "),cd=a(yl,"CODE",{});var py=i(cd);jm=o(py,"__call__"),py.forEach(n),Cm=o(yl," special method."),yl.forEach(n),Om=f(qs),y(_o.$$.fragment,qs),Lm=f(qs),y(ko.$$.fragment,qs),qs.forEach(n),Hn.forEach(n),cu=f(s),bt=a(s,"H2",{class:!0});var sp=i(bt);vo=a(sp,"A",{id:!0,class:!0,href:!0});var fy=i(vo);ud=a(fy,"SPAN",{});var hy=i(ud);y(vr.$$.fragment,hy),hy.forEach(n),fy.forEach(n),Dm=f(sp),pd=a(sp,"SPAN",{});var my=i(pd);Am=o(my,"FunnelModelForPreTraining"),my.forEach(n),sp.forEach(n),uu=f(s),wt=a(s,"DIV",{class:!0});var rp=i(wt);y(Tr.$$.fragment,rp),Nm=f(rp),Sn=a(rp,"DIV",{class:!0});var Ps=i(Sn);y(Fr.$$.fragment,Ps),Im=f(Ps),$t=a(Ps,"P",{});var bl=i($t);Sm=o(bl,"The "),Ri=a(bl,"A",{href:!0});var gy=i(Ri);Bm=o(gy,"FunnelForPreTraining"),gy.forEach(n),Wm=o(bl," forward method, overrides the "),fd=a(bl,"CODE",{});var _y=i(fd);Qm=o(_y,"__call__"),_y.forEach(n),Km=o(bl," special method."),bl.forEach(n),Um=f(Ps),y(To.$$.fragment,Ps),Rm=f(Ps),y(Fo.$$.fragment,Ps),Ps.forEach(n),rp.forEach(n),pu=f(s),Et=a(s,"H2",{class:!0});var ap=i(Et);yo=a(ap,"A",{id:!0,class:!0,href:!0});var ky=i(yo);hd=a(ky,"SPAN",{});var vy=i(hd);y(yr.$$.fragment,vy),vy.forEach(n),ky.forEach(n),Hm=f(ap),md=a(ap,"SPAN",{});var Ty=i(md);Vm=o(Ty,"FunnelForMaskedLM"),Ty.forEach(n),ap.forEach(n),fu=f(s),hn=a(s,"DIV",{class:!0});var Vn=i(hn);y(br.$$.fragment,Vn),Ym=f(Vn),wr=a(Vn,"P",{});var ip=i(wr);Gm=o(ip,"Funnel Transformer Model with a "),gd=a(ip,"CODE",{});var Fy=i(gd);Zm=o(Fy,"language modeling"),Fy.forEach(n),Xm=o(ip," head on top."),ip.forEach(n),Jm=f(Vn),$r=a(Vn,"P",{});var lp=i($r);eg=o(lp,"The Funnel Transformer model was proposed in "),Er=a(lp,"A",{href:!0,rel:!0});var yy=i(Er);ng=o(yy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),yy.forEach(n),tg=o(lp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),lp.forEach(n),og=f(Vn),Mr=a(Vn,"P",{});var dp=i(Mr);sg=o(dp,"This model inherits from "),Hi=a(dp,"A",{href:!0});var by=i(Hi);rg=o(by,"PreTrainedModel"),by.forEach(n),ag=o(dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp.forEach(n),ig=f(Vn),zr=a(Vn,"P",{});var cp=i(zr);lg=o(cp,"This model is also a PyTorch "),qr=a(cp,"A",{href:!0,rel:!0});var wy=i(qr);dg=o(wy,"torch.nn.Module"),wy.forEach(n),cg=o(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(n),ug=f(Vn),Tn=a(Vn,"DIV",{class:!0});var st=i(Tn);y(Pr.$$.fragment,st),pg=f(st),Mt=a(st,"P",{});var wl=i(Mt);fg=o(wl,"The "),Vi=a(wl,"A",{href:!0});var $y=i(Vi);hg=o($y,"FunnelForMaskedLM"),$y.forEach(n),mg=o(wl," forward method, overrides the "),_d=a(wl,"CODE",{});var Ey=i(_d);gg=o(Ey,"__call__"),Ey.forEach(n),_g=o(wl," special method."),wl.forEach(n),kg=f(st),y(bo.$$.fragment,st),vg=f(st),y(wo.$$.fragment,st),Tg=f(st),y($o.$$.fragment,st),st.forEach(n),Vn.forEach(n),hu=f(s),zt=a(s,"H2",{class:!0});var up=i(zt);Eo=a(up,"A",{id:!0,class:!0,href:!0});var My=i(Eo);kd=a(My,"SPAN",{});var zy=i(kd);y(xr.$$.fragment,zy),zy.forEach(n),My.forEach(n),Fg=f(up),vd=a(up,"SPAN",{});var qy=i(vd);yg=o(qy,"FunnelForSequenceClassification"),qy.forEach(n),up.forEach(n),mu=f(s),mn=a(s,"DIV",{class:!0});var Yn=i(mn);y(jr.$$.fragment,Yn),bg=f(Yn),Td=a(Yn,"P",{});var Py=i(Td);wg=o(Py,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Py.forEach(n),$g=f(Yn),Cr=a(Yn,"P",{});var pp=i(Cr);Eg=o(pp,"The Funnel Transformer model was proposed in "),Or=a(pp,"A",{href:!0,rel:!0});var xy=i(Or);Mg=o(xy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),xy.forEach(n),zg=o(pp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),pp.forEach(n),qg=f(Yn),Lr=a(Yn,"P",{});var fp=i(Lr);Pg=o(fp,"This model inherits from "),Yi=a(fp,"A",{href:!0});var jy=i(Yi);xg=o(jy,"PreTrainedModel"),jy.forEach(n),jg=o(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(n),Cg=f(Yn),Dr=a(Yn,"P",{});var hp=i(Dr);Og=o(hp,"This model is also a PyTorch "),Ar=a(hp,"A",{href:!0,rel:!0});var Cy=i(Ar);Lg=o(Cy,"torch.nn.Module"),Cy.forEach(n),Dg=o(hp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hp.forEach(n),Ag=f(Yn),un=a(Yn,"DIV",{class:!0});var Mn=i(un);y(Nr.$$.fragment,Mn),Ng=f(Mn),qt=a(Mn,"P",{});var $l=i(qt);Ig=o($l,"The "),Gi=a($l,"A",{href:!0});var Oy=i(Gi);Sg=o(Oy,"FunnelForSequenceClassification"),Oy.forEach(n),Bg=o($l," forward method, overrides the "),Fd=a($l,"CODE",{});var Ly=i(Fd);Wg=o(Ly,"__call__"),Ly.forEach(n),Qg=o($l," special method."),$l.forEach(n),Kg=f(Mn),y(Mo.$$.fragment,Mn),Ug=f(Mn),y(zo.$$.fragment,Mn),Rg=f(Mn),y(qo.$$.fragment,Mn),Hg=f(Mn),y(Po.$$.fragment,Mn),Vg=f(Mn),y(xo.$$.fragment,Mn),Mn.forEach(n),Yn.forEach(n),gu=f(s),Pt=a(s,"H2",{class:!0});var mp=i(Pt);jo=a(mp,"A",{id:!0,class:!0,href:!0});var Dy=i(jo);yd=a(Dy,"SPAN",{});var Ay=i(yd);y(Ir.$$.fragment,Ay),Ay.forEach(n),Dy.forEach(n),Yg=f(mp),bd=a(mp,"SPAN",{});var Ny=i(bd);Gg=o(Ny,"FunnelForMultipleChoice"),Ny.forEach(n),mp.forEach(n),_u=f(s),gn=a(s,"DIV",{class:!0});var Gn=i(gn);y(Sr.$$.fragment,Gn),Zg=f(Gn),wd=a(Gn,"P",{});var Iy=i(wd);Xg=o(Iy,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Iy.forEach(n),Jg=f(Gn),Br=a(Gn,"P",{});var gp=i(Br);e_=o(gp,"The Funnel Transformer model was proposed in "),Wr=a(gp,"A",{href:!0,rel:!0});var Sy=i(Wr);n_=o(Sy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Sy.forEach(n),t_=o(gp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),gp.forEach(n),o_=f(Gn),Qr=a(Gn,"P",{});var _p=i(Qr);s_=o(_p,"This model inherits from "),Zi=a(_p,"A",{href:!0});var By=i(Zi);r_=o(By,"PreTrainedModel"),By.forEach(n),a_=o(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(n),i_=f(Gn),Kr=a(Gn,"P",{});var kp=i(Kr);l_=o(kp,"This model is also a PyTorch "),Ur=a(kp,"A",{href:!0,rel:!0});var Wy=i(Ur);d_=o(Wy,"torch.nn.Module"),Wy.forEach(n),c_=o(kp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp.forEach(n),u_=f(Gn),Bn=a(Gn,"DIV",{class:!0});var xs=i(Bn);y(Rr.$$.fragment,xs),p_=f(xs),xt=a(xs,"P",{});var El=i(xt);f_=o(El,"The "),Xi=a(El,"A",{href:!0});var Qy=i(Xi);h_=o(Qy,"FunnelForMultipleChoice"),Qy.forEach(n),m_=o(El," forward method, overrides the "),$d=a(El,"CODE",{});var Ky=i($d);g_=o(Ky,"__call__"),Ky.forEach(n),__=o(El," special method."),El.forEach(n),k_=f(xs),y(Co.$$.fragment,xs),v_=f(xs),y(Oo.$$.fragment,xs),xs.forEach(n),Gn.forEach(n),ku=f(s),jt=a(s,"H2",{class:!0});var vp=i(jt);Lo=a(vp,"A",{id:!0,class:!0,href:!0});var Uy=i(Lo);Ed=a(Uy,"SPAN",{});var Ry=i(Ed);y(Hr.$$.fragment,Ry),Ry.forEach(n),Uy.forEach(n),T_=f(vp),Md=a(vp,"SPAN",{});var Hy=i(Md);F_=o(Hy,"FunnelForTokenClassification"),Hy.forEach(n),vp.forEach(n),vu=f(s),_n=a(s,"DIV",{class:!0});var Zn=i(_n);y(Vr.$$.fragment,Zn),y_=f(Zn),zd=a(Zn,"P",{});var Vy=i(zd);b_=o(Vy,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Vy.forEach(n),w_=f(Zn),Yr=a(Zn,"P",{});var Tp=i(Yr);$_=o(Tp,"The Funnel Transformer model was proposed in "),Gr=a(Tp,"A",{href:!0,rel:!0});var Yy=i(Gr);E_=o(Yy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Yy.forEach(n),M_=o(Tp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tp.forEach(n),z_=f(Zn),Zr=a(Zn,"P",{});var Fp=i(Zr);q_=o(Fp,"This model inherits from "),Ji=a(Fp,"A",{href:!0});var Gy=i(Ji);P_=o(Gy,"PreTrainedModel"),Gy.forEach(n),x_=o(Fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp.forEach(n),j_=f(Zn),Xr=a(Zn,"P",{});var yp=i(Xr);C_=o(yp,"This model is also a PyTorch "),Jr=a(yp,"A",{href:!0,rel:!0});var Zy=i(Jr);O_=o(Zy,"torch.nn.Module"),Zy.forEach(n),L_=o(yp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yp.forEach(n),D_=f(Zn),Fn=a(Zn,"DIV",{class:!0});var rt=i(Fn);y(ea.$$.fragment,rt),A_=f(rt),Ct=a(rt,"P",{});var Ml=i(Ct);N_=o(Ml,"The "),el=a(Ml,"A",{href:!0});var Xy=i(el);I_=o(Xy,"FunnelForTokenClassification"),Xy.forEach(n),S_=o(Ml," forward method, overrides the "),qd=a(Ml,"CODE",{});var Jy=i(qd);B_=o(Jy,"__call__"),Jy.forEach(n),W_=o(Ml," special method."),Ml.forEach(n),Q_=f(rt),y(Do.$$.fragment,rt),K_=f(rt),y(Ao.$$.fragment,rt),U_=f(rt),y(No.$$.fragment,rt),rt.forEach(n),Zn.forEach(n),Tu=f(s),Ot=a(s,"H2",{class:!0});var bp=i(Ot);Io=a(bp,"A",{id:!0,class:!0,href:!0});var eb=i(Io);Pd=a(eb,"SPAN",{});var nb=i(Pd);y(na.$$.fragment,nb),nb.forEach(n),eb.forEach(n),R_=f(bp),xd=a(bp,"SPAN",{});var tb=i(xd);H_=o(tb,"FunnelForQuestionAnswering"),tb.forEach(n),bp.forEach(n),Fu=f(s),kn=a(s,"DIV",{class:!0});var Xn=i(kn);y(ta.$$.fragment,Xn),V_=f(Xn),Lt=a(Xn,"P",{});var zl=i(Lt);Y_=o(zl,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),jd=a(zl,"CODE",{});var ob=i(jd);G_=o(ob,"span start logits"),ob.forEach(n),Z_=o(zl," and "),Cd=a(zl,"CODE",{});var sb=i(Cd);X_=o(sb,"span end logits"),sb.forEach(n),J_=o(zl,")."),zl.forEach(n),ek=f(Xn),oa=a(Xn,"P",{});var wp=i(oa);nk=o(wp,"The Funnel Transformer model was proposed in "),sa=a(wp,"A",{href:!0,rel:!0});var rb=i(sa);tk=o(rb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rb.forEach(n),ok=o(wp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),wp.forEach(n),sk=f(Xn),ra=a(Xn,"P",{});var $p=i(ra);rk=o($p,"This model inherits from "),nl=a($p,"A",{href:!0});var ab=i(nl);ak=o(ab,"PreTrainedModel"),ab.forEach(n),ik=o($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(n),lk=f(Xn),aa=a(Xn,"P",{});var Ep=i(aa);dk=o(Ep,"This model is also a PyTorch "),ia=a(Ep,"A",{href:!0,rel:!0});var ib=i(ia);ck=o(ib,"torch.nn.Module"),ib.forEach(n),uk=o(Ep,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ep.forEach(n),pk=f(Xn),yn=a(Xn,"DIV",{class:!0});var at=i(yn);y(la.$$.fragment,at),fk=f(at),Dt=a(at,"P",{});var ql=i(Dt);hk=o(ql,"The "),tl=a(ql,"A",{href:!0});var lb=i(tl);mk=o(lb,"FunnelForQuestionAnswering"),lb.forEach(n),gk=o(ql," forward method, overrides the "),Od=a(ql,"CODE",{});var db=i(Od);_k=o(db,"__call__"),db.forEach(n),kk=o(ql," special method."),ql.forEach(n),vk=f(at),y(So.$$.fragment,at),Tk=f(at),y(Bo.$$.fragment,at),Fk=f(at),y(Wo.$$.fragment,at),at.forEach(n),Xn.forEach(n),yu=f(s),At=a(s,"H2",{class:!0});var Mp=i(At);Qo=a(Mp,"A",{id:!0,class:!0,href:!0});var cb=i(Qo);Ld=a(cb,"SPAN",{});var ub=i(Ld);y(da.$$.fragment,ub),ub.forEach(n),cb.forEach(n),yk=f(Mp),Dd=a(Mp,"SPAN",{});var pb=i(Dd);bk=o(pb,"TFFunnelBaseModel"),pb.forEach(n),Mp.forEach(n),bu=f(s),nn=a(s,"DIV",{class:!0});var zn=i(nn);y(ca.$$.fragment,zn),wk=f(zn),Ad=a(zn,"P",{});var fb=i(Ad);$k=o(fb,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),fb.forEach(n),Ek=f(zn),ua=a(zn,"P",{});var zp=i(ua);Mk=o(zp,"The Funnel Transformer model was proposed in "),pa=a(zp,"A",{href:!0,rel:!0});var hb=i(pa);zk=o(hb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),hb.forEach(n),qk=o(zp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zp.forEach(n),Pk=f(zn),fa=a(zn,"P",{});var qp=i(fa);xk=o(qp,"This model inherits from "),ol=a(qp,"A",{href:!0});var mb=i(ol);jk=o(mb,"TFPreTrainedModel"),mb.forEach(n),Ck=o(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(n),Ok=f(zn),ha=a(zn,"P",{});var Pp=i(ha);Lk=o(Pp,"This model is also a "),ma=a(Pp,"A",{href:!0,rel:!0});var gb=i(ma);Dk=o(gb,"tf.keras.Model"),gb.forEach(n),Ak=o(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(n),Nk=f(zn),y(Ko.$$.fragment,zn),Ik=f(zn),Wn=a(zn,"DIV",{class:!0});var js=i(Wn);y(ga.$$.fragment,js),Sk=f(js),Nt=a(js,"P",{});var Pl=i(Nt);Bk=o(Pl,"The "),sl=a(Pl,"A",{href:!0});var _b=i(sl);Wk=o(_b,"TFFunnelBaseModel"),_b.forEach(n),Qk=o(Pl," forward method, overrides the "),Nd=a(Pl,"CODE",{});var kb=i(Nd);Kk=o(kb,"__call__"),kb.forEach(n),Uk=o(Pl," special method."),Pl.forEach(n),Rk=f(js),y(Uo.$$.fragment,js),Hk=f(js),y(Ro.$$.fragment,js),js.forEach(n),zn.forEach(n),wu=f(s),It=a(s,"H2",{class:!0});var xp=i(It);Ho=a(xp,"A",{id:!0,class:!0,href:!0});var vb=i(Ho);Id=a(vb,"SPAN",{});var Tb=i(Id);y(_a.$$.fragment,Tb),Tb.forEach(n),vb.forEach(n),Vk=f(xp),Sd=a(xp,"SPAN",{});var Fb=i(Sd);Yk=o(Fb,"TFFunnelModel"),Fb.forEach(n),xp.forEach(n),$u=f(s),tn=a(s,"DIV",{class:!0});var qn=i(tn);y(ka.$$.fragment,qn),Gk=f(qn),Bd=a(qn,"P",{});var yb=i(Bd);Zk=o(yb,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),yb.forEach(n),Xk=f(qn),va=a(qn,"P",{});var jp=i(va);Jk=o(jp,"The Funnel Transformer model was proposed in "),Ta=a(jp,"A",{href:!0,rel:!0});var bb=i(Ta);ev=o(bb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),bb.forEach(n),nv=o(jp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),jp.forEach(n),tv=f(qn),Fa=a(qn,"P",{});var Cp=i(Fa);ov=o(Cp,"This model inherits from "),rl=a(Cp,"A",{href:!0});var wb=i(rl);sv=o(wb,"TFPreTrainedModel"),wb.forEach(n),rv=o(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp.forEach(n),av=f(qn),ya=a(qn,"P",{});var Op=i(ya);iv=o(Op,"This model is also a "),ba=a(Op,"A",{href:!0,rel:!0});var $b=i(ba);lv=o($b,"tf.keras.Model"),$b.forEach(n),dv=o(Op,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Op.forEach(n),cv=f(qn),y(Vo.$$.fragment,qn),uv=f(qn),Qn=a(qn,"DIV",{class:!0});var Cs=i(Qn);y(wa.$$.fragment,Cs),pv=f(Cs),St=a(Cs,"P",{});var xl=i(St);fv=o(xl,"The "),al=a(xl,"A",{href:!0});var Eb=i(al);hv=o(Eb,"TFFunnelModel"),Eb.forEach(n),mv=o(xl," forward method, overrides the "),Wd=a(xl,"CODE",{});var Mb=i(Wd);gv=o(Mb,"__call__"),Mb.forEach(n),_v=o(xl," special method."),xl.forEach(n),kv=f(Cs),y(Yo.$$.fragment,Cs),vv=f(Cs),y(Go.$$.fragment,Cs),Cs.forEach(n),qn.forEach(n),Eu=f(s),Bt=a(s,"H2",{class:!0});var Lp=i(Bt);Zo=a(Lp,"A",{id:!0,class:!0,href:!0});var zb=i(Zo);Qd=a(zb,"SPAN",{});var qb=i(Qd);y($a.$$.fragment,qb),qb.forEach(n),zb.forEach(n),Tv=f(Lp),Kd=a(Lp,"SPAN",{});var Pb=i(Kd);Fv=o(Pb,"TFFunnelModelForPreTraining"),Pb.forEach(n),Lp.forEach(n),Mu=f(s),on=a(s,"DIV",{class:!0});var Pn=i(on);y(Ea.$$.fragment,Pn),yv=f(Pn),Ud=a(Pn,"P",{});var xb=i(Ud);bv=o(xb,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),xb.forEach(n),wv=f(Pn),Ma=a(Pn,"P",{});var Dp=i(Ma);$v=o(Dp,"The Funnel Transformer model was proposed in "),za=a(Dp,"A",{href:!0,rel:!0});var jb=i(za);Ev=o(jb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),jb.forEach(n),Mv=o(Dp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Dp.forEach(n),zv=f(Pn),qa=a(Pn,"P",{});var Ap=i(qa);qv=o(Ap,"This model inherits from "),il=a(Ap,"A",{href:!0});var Cb=i(il);Pv=o(Cb,"TFPreTrainedModel"),Cb.forEach(n),xv=o(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(n),jv=f(Pn),Pa=a(Pn,"P",{});var Np=i(Pa);Cv=o(Np,"This model is also a "),xa=a(Np,"A",{href:!0,rel:!0});var Ob=i(xa);Ov=o(Ob,"tf.keras.Model"),Ob.forEach(n),Lv=o(Np,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Np.forEach(n),Dv=f(Pn),y(Xo.$$.fragment,Pn),Av=f(Pn),Kn=a(Pn,"DIV",{class:!0});var Os=i(Kn);y(ja.$$.fragment,Os),Nv=f(Os),Wt=a(Os,"P",{});var jl=i(Wt);Iv=o(jl,"The "),ll=a(jl,"A",{href:!0});var Lb=i(ll);Sv=o(Lb,"TFFunnelForPreTraining"),Lb.forEach(n),Bv=o(jl," forward method, overrides the "),Rd=a(jl,"CODE",{});var Db=i(Rd);Wv=o(Db,"__call__"),Db.forEach(n),Qv=o(jl," special method."),jl.forEach(n),Kv=f(Os),y(Jo.$$.fragment,Os),Uv=f(Os),y(es.$$.fragment,Os),Os.forEach(n),Pn.forEach(n),zu=f(s),Qt=a(s,"H2",{class:!0});var Ip=i(Qt);ns=a(Ip,"A",{id:!0,class:!0,href:!0});var Ab=i(ns);Hd=a(Ab,"SPAN",{});var Nb=i(Hd);y(Ca.$$.fragment,Nb),Nb.forEach(n),Ab.forEach(n),Rv=f(Ip),Vd=a(Ip,"SPAN",{});var Ib=i(Vd);Hv=o(Ib,"TFFunnelForMaskedLM"),Ib.forEach(n),Ip.forEach(n),qu=f(s),sn=a(s,"DIV",{class:!0});var xn=i(sn);y(Oa.$$.fragment,xn),Vv=f(xn),La=a(xn,"P",{});var Sp=i(La);Yv=o(Sp,"Funnel Model with a "),Yd=a(Sp,"CODE",{});var Sb=i(Yd);Gv=o(Sb,"language modeling"),Sb.forEach(n),Zv=o(Sp," head on top."),Sp.forEach(n),Xv=f(xn),Da=a(xn,"P",{});var Bp=i(Da);Jv=o(Bp,"The Funnel Transformer model was proposed in "),Aa=a(Bp,"A",{href:!0,rel:!0});var Bb=i(Aa);e2=o(Bb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Bb.forEach(n),n2=o(Bp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Bp.forEach(n),t2=f(xn),Na=a(xn,"P",{});var Wp=i(Na);o2=o(Wp,"This model inherits from "),dl=a(Wp,"A",{href:!0});var Wb=i(dl);s2=o(Wb,"TFPreTrainedModel"),Wb.forEach(n),r2=o(Wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp.forEach(n),a2=f(xn),Ia=a(xn,"P",{});var Qp=i(Ia);i2=o(Qp,"This model is also a "),Sa=a(Qp,"A",{href:!0,rel:!0});var Qb=i(Sa);l2=o(Qb,"tf.keras.Model"),Qb.forEach(n),d2=o(Qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qp.forEach(n),c2=f(xn),y(ts.$$.fragment,xn),u2=f(xn),bn=a(xn,"DIV",{class:!0});var it=i(bn);y(Ba.$$.fragment,it),p2=f(it),Kt=a(it,"P",{});var Cl=i(Kt);f2=o(Cl,"The "),cl=a(Cl,"A",{href:!0});var Kb=i(cl);h2=o(Kb,"TFFunnelForMaskedLM"),Kb.forEach(n),m2=o(Cl," forward method, overrides the "),Gd=a(Cl,"CODE",{});var Ub=i(Gd);g2=o(Ub,"__call__"),Ub.forEach(n),_2=o(Cl," special method."),Cl.forEach(n),k2=f(it),y(os.$$.fragment,it),v2=f(it),y(ss.$$.fragment,it),T2=f(it),y(rs.$$.fragment,it),it.forEach(n),xn.forEach(n),Pu=f(s),Ut=a(s,"H2",{class:!0});var Kp=i(Ut);as=a(Kp,"A",{id:!0,class:!0,href:!0});var Rb=i(as);Zd=a(Rb,"SPAN",{});var Hb=i(Zd);y(Wa.$$.fragment,Hb),Hb.forEach(n),Rb.forEach(n),F2=f(Kp),Xd=a(Kp,"SPAN",{});var Vb=i(Xd);y2=o(Vb,"TFFunnelForSequenceClassification"),Vb.forEach(n),Kp.forEach(n),xu=f(s),rn=a(s,"DIV",{class:!0});var jn=i(rn);y(Qa.$$.fragment,jn),b2=f(jn),Jd=a(jn,"P",{});var Yb=i(Jd);w2=o(Yb,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Yb.forEach(n),$2=f(jn),Ka=a(jn,"P",{});var Up=i(Ka);E2=o(Up,"The Funnel Transformer model was proposed in "),Ua=a(Up,"A",{href:!0,rel:!0});var Gb=i(Ua);M2=o(Gb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Gb.forEach(n),z2=o(Up," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Up.forEach(n),q2=f(jn),Ra=a(jn,"P",{});var Rp=i(Ra);P2=o(Rp,"This model inherits from "),ul=a(Rp,"A",{href:!0});var Zb=i(ul);x2=o(Zb,"TFPreTrainedModel"),Zb.forEach(n),j2=o(Rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rp.forEach(n),C2=f(jn),Ha=a(jn,"P",{});var Hp=i(Ha);O2=o(Hp,"This model is also a "),Va=a(Hp,"A",{href:!0,rel:!0});var Xb=i(Va);L2=o(Xb,"tf.keras.Model"),Xb.forEach(n),D2=o(Hp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp.forEach(n),A2=f(jn),y(is.$$.fragment,jn),N2=f(jn),wn=a(jn,"DIV",{class:!0});var lt=i(wn);y(Ya.$$.fragment,lt),I2=f(lt),Rt=a(lt,"P",{});var Ol=i(Rt);S2=o(Ol,"The "),pl=a(Ol,"A",{href:!0});var Jb=i(pl);B2=o(Jb,"TFFunnelForSequenceClassification"),Jb.forEach(n),W2=o(Ol," forward method, overrides the "),ec=a(Ol,"CODE",{});var ew=i(ec);Q2=o(ew,"__call__"),ew.forEach(n),K2=o(Ol," special method."),Ol.forEach(n),U2=f(lt),y(ls.$$.fragment,lt),R2=f(lt),y(ds.$$.fragment,lt),H2=f(lt),y(cs.$$.fragment,lt),lt.forEach(n),jn.forEach(n),ju=f(s),Ht=a(s,"H2",{class:!0});var Vp=i(Ht);us=a(Vp,"A",{id:!0,class:!0,href:!0});var nw=i(us);nc=a(nw,"SPAN",{});var tw=i(nc);y(Ga.$$.fragment,tw),tw.forEach(n),nw.forEach(n),V2=f(Vp),tc=a(Vp,"SPAN",{});var ow=i(tc);Y2=o(ow,"TFFunnelForMultipleChoice"),ow.forEach(n),Vp.forEach(n),Cu=f(s),an=a(s,"DIV",{class:!0});var Cn=i(an);y(Za.$$.fragment,Cn),G2=f(Cn),oc=a(Cn,"P",{});var sw=i(oc);Z2=o(sw,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sw.forEach(n),X2=f(Cn),Xa=a(Cn,"P",{});var Yp=i(Xa);J2=o(Yp,"The Funnel Transformer model was proposed in "),Ja=a(Yp,"A",{href:!0,rel:!0});var rw=i(Ja);eT=o(rw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rw.forEach(n),nT=o(Yp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yp.forEach(n),tT=f(Cn),ei=a(Cn,"P",{});var Gp=i(ei);oT=o(Gp,"This model inherits from "),fl=a(Gp,"A",{href:!0});var aw=i(fl);sT=o(aw,"TFPreTrainedModel"),aw.forEach(n),rT=o(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(n),aT=f(Cn),ni=a(Cn,"P",{});var Zp=i(ni);iT=o(Zp,"This model is also a "),ti=a(Zp,"A",{href:!0,rel:!0});var iw=i(ti);lT=o(iw,"tf.keras.Model"),iw.forEach(n),dT=o(Zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zp.forEach(n),cT=f(Cn),y(ps.$$.fragment,Cn),uT=f(Cn),Un=a(Cn,"DIV",{class:!0});var Ls=i(Un);y(oi.$$.fragment,Ls),pT=f(Ls),Vt=a(Ls,"P",{});var Ll=i(Vt);fT=o(Ll,"The "),hl=a(Ll,"A",{href:!0});var lw=i(hl);hT=o(lw,"TFFunnelForMultipleChoice"),lw.forEach(n),mT=o(Ll," forward method, overrides the "),sc=a(Ll,"CODE",{});var dw=i(sc);gT=o(dw,"__call__"),dw.forEach(n),_T=o(Ll," special method."),Ll.forEach(n),kT=f(Ls),y(fs.$$.fragment,Ls),vT=f(Ls),y(hs.$$.fragment,Ls),Ls.forEach(n),Cn.forEach(n),Ou=f(s),Yt=a(s,"H2",{class:!0});var Xp=i(Yt);ms=a(Xp,"A",{id:!0,class:!0,href:!0});var cw=i(ms);rc=a(cw,"SPAN",{});var uw=i(rc);y(si.$$.fragment,uw),uw.forEach(n),cw.forEach(n),TT=f(Xp),ac=a(Xp,"SPAN",{});var pw=i(ac);FT=o(pw,"TFFunnelForTokenClassification"),pw.forEach(n),Xp.forEach(n),Lu=f(s),ln=a(s,"DIV",{class:!0});var On=i(ln);y(ri.$$.fragment,On),yT=f(On),ic=a(On,"P",{});var fw=i(ic);bT=o(fw,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fw.forEach(n),wT=f(On),ai=a(On,"P",{});var Jp=i(ai);$T=o(Jp,"The Funnel Transformer model was proposed in "),ii=a(Jp,"A",{href:!0,rel:!0});var hw=i(ii);ET=o(hw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),hw.forEach(n),MT=o(Jp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Jp.forEach(n),zT=f(On),li=a(On,"P",{});var ef=i(li);qT=o(ef,"This model inherits from "),ml=a(ef,"A",{href:!0});var mw=i(ml);PT=o(mw,"TFPreTrainedModel"),mw.forEach(n),xT=o(ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef.forEach(n),jT=f(On),di=a(On,"P",{});var nf=i(di);CT=o(nf,"This model is also a "),ci=a(nf,"A",{href:!0,rel:!0});var gw=i(ci);OT=o(gw,"tf.keras.Model"),gw.forEach(n),LT=o(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(n),DT=f(On),y(gs.$$.fragment,On),AT=f(On),$n=a(On,"DIV",{class:!0});var dt=i($n);y(ui.$$.fragment,dt),NT=f(dt),Gt=a(dt,"P",{});var Dl=i(Gt);IT=o(Dl,"The "),gl=a(Dl,"A",{href:!0});var _w=i(gl);ST=o(_w,"TFFunnelForTokenClassification"),_w.forEach(n),BT=o(Dl," forward method, overrides the "),lc=a(Dl,"CODE",{});var kw=i(lc);WT=o(kw,"__call__"),kw.forEach(n),QT=o(Dl," special method."),Dl.forEach(n),KT=f(dt),y(_s.$$.fragment,dt),UT=f(dt),y(ks.$$.fragment,dt),RT=f(dt),y(vs.$$.fragment,dt),dt.forEach(n),On.forEach(n),Du=f(s),Zt=a(s,"H2",{class:!0});var tf=i(Zt);Ts=a(tf,"A",{id:!0,class:!0,href:!0});var vw=i(Ts);dc=a(vw,"SPAN",{});var Tw=i(dc);y(pi.$$.fragment,Tw),Tw.forEach(n),vw.forEach(n),HT=f(tf),cc=a(tf,"SPAN",{});var Fw=i(cc);VT=o(Fw,"TFFunnelForQuestionAnswering"),Fw.forEach(n),tf.forEach(n),Au=f(s),dn=a(s,"DIV",{class:!0});var Ln=i(dn);y(fi.$$.fragment,Ln),YT=f(Ln),Xt=a(Ln,"P",{});var Al=i(Xt);GT=o(Al,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),uc=a(Al,"CODE",{});var yw=i(uc);ZT=o(yw,"span start logits"),yw.forEach(n),XT=o(Al," and "),pc=a(Al,"CODE",{});var bw=i(pc);JT=o(bw,"span end logits"),bw.forEach(n),eF=o(Al,")."),Al.forEach(n),nF=f(Ln),hi=a(Ln,"P",{});var of=i(hi);tF=o(of,"The Funnel Transformer model was proposed in "),mi=a(of,"A",{href:!0,rel:!0});var ww=i(mi);oF=o(ww,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ww.forEach(n),sF=o(of," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),of.forEach(n),rF=f(Ln),gi=a(Ln,"P",{});var sf=i(gi);aF=o(sf,"This model inherits from "),_l=a(sf,"A",{href:!0});var $w=i(_l);iF=o($w,"TFPreTrainedModel"),$w.forEach(n),lF=o(sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf.forEach(n),dF=f(Ln),_i=a(Ln,"P",{});var rf=i(_i);cF=o(rf,"This model is also a "),ki=a(rf,"A",{href:!0,rel:!0});var Ew=i(ki);uF=o(Ew,"tf.keras.Model"),Ew.forEach(n),pF=o(rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf.forEach(n),fF=f(Ln),y(Fs.$$.fragment,Ln),hF=f(Ln),En=a(Ln,"DIV",{class:!0});var ct=i(En);y(vi.$$.fragment,ct),mF=f(ct),Jt=a(ct,"P",{});var Nl=i(Jt);gF=o(Nl,"The "),kl=a(Nl,"A",{href:!0});var Mw=i(kl);_F=o(Mw,"TFFunnelForQuestionAnswering"),Mw.forEach(n),kF=o(Nl," forward method, overrides the "),fc=a(Nl,"CODE",{});var zw=i(fc);vF=o(zw,"__call__"),zw.forEach(n),TF=o(Nl," special method."),Nl.forEach(n),FF=f(ct),y(ys.$$.fragment,ct),yF=f(ct),y(bs.$$.fragment,ct),bF=f(ct),y(ws.$$.fragment,ct),ct.forEach(n),Ln.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(C$)),m(h,"id","funnel-transformer"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#funnel-transformer"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://arxiv.org/abs/2006.03236"),m(ae,"rel","nofollow"),m(C,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelModel"),m(le,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(de,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(ce,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(D,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelBaseModel"),m(g,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(J,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(De,"href","https://huggingface.co/sgugger"),m(De,"rel","nofollow"),m(A,"href","https://github.com/laiguokun/Funnel-Transformer"),m(A,"rel","nofollow"),m(Le,"id","transformers.FunnelConfig"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.FunnelConfig"),m(S,"class","relative group"),m(Mi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelModel"),m(zi,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.TFBertModel"),m(As,"href","https://huggingface.co/funnel-transformer/small"),m(As,"rel","nofollow"),m(qi,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(Pi,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"id","transformers.FunnelTokenizer"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.FunnelTokenizer"),m(pt,"class","relative group"),m(xi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizer"),m(ji,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),m(Ci,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Di,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelTokenizerFast"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelTokenizerFast"),m(ht,"class","relative group"),m(Ai,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelTokenizerFast"),m(Ni,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),m(Ii,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),m(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(po,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(gt,"class","relative group"),m(Si,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"id","transformers.FunnelBaseModel"),m(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fo,"href","#transformers.FunnelBaseModel"),m(vt,"class","relative group"),m(ar,"href","https://arxiv.org/abs/2006.03236"),m(ar,"rel","nofollow"),m(Wi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(Qi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"id","transformers.FunnelModel"),m(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(go,"href","#transformers.FunnelModel"),m(Ft,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.03236"),m(hr,"rel","nofollow"),m(Ki,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(Ui,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelModel"),m(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"id","transformers.FunnelForPreTraining"),m(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(vo,"href","#transformers.FunnelForPreTraining"),m(bt,"class","relative group"),m(Ri,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yo,"id","transformers.FunnelForMaskedLM"),m(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(yo,"href","#transformers.FunnelForMaskedLM"),m(Et,"class","relative group"),m(Er,"href","https://arxiv.org/abs/2006.03236"),m(Er,"rel","nofollow"),m(Hi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Vi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.FunnelForSequenceClassification"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.FunnelForSequenceClassification"),m(zt,"class","relative group"),m(Or,"href","https://arxiv.org/abs/2006.03236"),m(Or,"rel","nofollow"),m(Yi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ar,"rel","nofollow"),m(Gi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.FunnelForMultipleChoice"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.FunnelForMultipleChoice"),m(Pt,"class","relative group"),m(Wr,"href","https://arxiv.org/abs/2006.03236"),m(Wr,"rel","nofollow"),m(Zi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ur,"rel","nofollow"),m(Xi,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.FunnelForTokenClassification"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.FunnelForTokenClassification"),m(jt,"class","relative group"),m(Gr,"href","https://arxiv.org/abs/2006.03236"),m(Gr,"rel","nofollow"),m(Ji,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jr,"rel","nofollow"),m(el,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","transformers.FunnelForQuestionAnswering"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#transformers.FunnelForQuestionAnswering"),m(Ot,"class","relative group"),m(sa,"href","https://arxiv.org/abs/2006.03236"),m(sa,"rel","nofollow"),m(nl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ia,"rel","nofollow"),m(tl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.TFFunnelBaseModel"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.TFFunnelBaseModel"),m(At,"class","relative group"),m(pa,"href","https://arxiv.org/abs/2006.03236"),m(pa,"rel","nofollow"),m(ol,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ma,"rel","nofollow"),m(sl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","transformers.TFFunnelModel"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#transformers.TFFunnelModel"),m(It,"class","relative group"),m(Ta,"href","https://arxiv.org/abs/2006.03236"),m(Ta,"rel","nofollow"),m(rl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ba,"rel","nofollow"),m(al,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelModel"),m(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zo,"id","transformers.TFFunnelForPreTraining"),m(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zo,"href","#transformers.TFFunnelForPreTraining"),m(Bt,"class","relative group"),m(za,"href","https://arxiv.org/abs/2006.03236"),m(za,"rel","nofollow"),m(il,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(xa,"rel","nofollow"),m(ll,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"id","transformers.TFFunnelForMaskedLM"),m(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ns,"href","#transformers.TFFunnelForMaskedLM"),m(Qt,"class","relative group"),m(Aa,"href","https://arxiv.org/abs/2006.03236"),m(Aa,"rel","nofollow"),m(dl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sa,"rel","nofollow"),m(cl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(as,"id","transformers.TFFunnelForSequenceClassification"),m(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(as,"href","#transformers.TFFunnelForSequenceClassification"),m(Ut,"class","relative group"),m(Ua,"href","https://arxiv.org/abs/2006.03236"),m(Ua,"rel","nofollow"),m(ul,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Va,"rel","nofollow"),m(pl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(us,"id","transformers.TFFunnelForMultipleChoice"),m(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(us,"href","#transformers.TFFunnelForMultipleChoice"),m(Ht,"class","relative group"),m(Ja,"href","https://arxiv.org/abs/2006.03236"),m(Ja,"rel","nofollow"),m(fl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ti,"rel","nofollow"),m(hl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ms,"id","transformers.TFFunnelForTokenClassification"),m(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ms,"href","#transformers.TFFunnelForTokenClassification"),m(Yt,"class","relative group"),m(ii,"href","https://arxiv.org/abs/2006.03236"),m(ii,"rel","nofollow"),m(ml,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ci,"rel","nofollow"),m(gl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ts,"id","transformers.TFFunnelForQuestionAnswering"),m(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ts,"href","#transformers.TFFunnelForQuestionAnswering"),m(Zt,"class","relative group"),m(mi,"href","https://arxiv.org/abs/2006.03236"),m(mi,"rel","nofollow"),m(_l,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ki,"rel","nofollow"),m(kl,"href","/docs/transformers/v4.22.2/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,d),_(s,k,v),_(s,c,v),e(c,h),e(h,T),b(l,T,null),e(c,u),e(c,x),e(x,ke),_(s,fe,v),_(s,I,v),e(I,re),e(re,ee),b(M,ee,null),e(I,ve),e(I,U),e(U,Te),_(s,he,v),_(s,B,v),e(B,Fe),e(B,ae),e(ae,H),e(B,ye),_(s,me,v),_(s,Q,v),e(Q,be),_(s,ge,v),_(s,K,v),e(K,ue),e(ue,we),_(s,oe,v),_(s,j,v),e(j,O),_(s,_e,v),_(s,W,v),e(W,pe),e(pe,$e),e(W,V),e(W,R),e(R,Ee),e(R,C),e(C,Me),e(R,Y),e(R,le),e(le,ze),e(R,G),e(R,de),e(de,qe),e(R,N),e(R,ce),e(ce,Z),e(R,Pe),e(R,ne),e(ne,L),e(R,xe),e(R,D),e(D,je),e(R,Ce),e(R,g),e(g,z),e(R,We),e(R,J),e(J,Qe),e(R,Ke),_(s,q,v),_(s,Oe,v),e(Oe,Ue),e(Oe,De),e(De,Re),e(Oe,He),e(Oe,A),e(A,X),e(Oe,Ve),_(s,Ne,v),_(s,S,v),e(S,Le),e(Le,Ae),b(ie,Ae,null),e(S,Ye),e(S,te),e(te,Ge),_(s,Xc,v),_(s,Jn,v),b(Ds,Jn,null),e(Jn,af),e(Jn,et),e(et,lf),e(et,Mi),e(Mi,df),e(et,cf),e(et,zi),e(zi,uf),e(et,pf),e(et,As),e(As,ff),e(et,hf),e(Jn,mf),e(Jn,ut),e(ut,gf),e(ut,qi),e(qi,_f),e(ut,kf),e(ut,Pi),e(Pi,vf),e(ut,Tf),_(s,Jc,v),_(s,pt,v),e(pt,so),e(so,Il),b(Ns,Il,null),e(pt,Ff),e(pt,Sl),e(Sl,yf),_(s,eu,v),_(s,Je,v),b(Is,Je,null),e(Je,bf),e(Je,Bl),e(Bl,wf),e(Je,$f),e(Je,ro),e(ro,xi),e(xi,Ef),e(ro,Mf),e(ro,ji),e(ji,zf),e(ro,qf),e(Je,Pf),e(Je,Ss),e(Ss,xf),e(Ss,Ci),e(Ci,jf),e(Ss,Cf),e(Je,Of),e(Je,tt),b(Bs,tt,null),e(tt,Lf),e(tt,Wl),e(Wl,Df),e(tt,Af),e(tt,Ws),e(Ws,Oi),e(Oi,Nf),e(Oi,Ql),e(Ql,If),e(Ws,Sf),e(Ws,Li),e(Li,Bf),e(Li,Kl),e(Kl,Wf),e(Je,Qf),e(Je,ao),b(Qs,ao,null),e(ao,Kf),e(ao,Ks),e(Ks,Uf),e(Ks,Ul),e(Ul,Rf),e(Ks,Hf),e(Je,Vf),e(Je,Dn),b(Us,Dn,null),e(Dn,Yf),e(Dn,Rl),e(Rl,Gf),e(Dn,Zf),b(io,Dn,null),e(Dn,Xf),e(Dn,ft),e(ft,Jf),e(ft,Hl),e(Hl,eh),e(ft,nh),e(ft,Vl),e(Vl,th),e(ft,oh),e(Je,sh),e(Je,Di),b(Rs,Di,null),_(s,nu,v),_(s,ht,v),e(ht,lo),e(lo,Yl),b(Hs,Yl,null),e(ht,rh),e(ht,Gl),e(Gl,ah),_(s,tu,v),_(s,vn,v),b(Vs,vn,null),e(vn,ih),e(vn,Ys),e(Ys,lh),e(Ys,Zl),e(Zl,dh),e(Ys,ch),e(vn,uh),e(vn,co),e(co,Ai),e(Ai,ph),e(co,fh),e(co,Ni),e(Ni,hh),e(co,mh),e(vn,gh),e(vn,Gs),e(Gs,_h),e(Gs,Ii),e(Ii,kh),e(Gs,vh),e(vn,Th),e(vn,An),b(Zs,An,null),e(An,Fh),e(An,Xl),e(Xl,yh),e(An,bh),b(uo,An,null),e(An,wh),e(An,mt),e(mt,$h),e(mt,Jl),e(Jl,Eh),e(mt,Mh),e(mt,ed),e(ed,zh),e(mt,qh),_(s,ou,v),_(s,gt,v),e(gt,po),e(po,nd),b(Xs,nd,null),e(gt,Ph),e(gt,td),e(td,xh),_(s,su,v),_(s,_t,v),b(Js,_t,null),e(_t,jh),e(_t,er),e(er,Ch),e(er,Si),e(Si,Oh),e(er,Lh),_(s,ru,v),_(s,kt,v),b(nr,kt,null),e(kt,Dh),e(kt,tr),e(tr,Ah),e(tr,Bi),e(Bi,Nh),e(tr,Ih),_(s,au,v),_(s,vt,v),e(vt,fo),e(fo,od),b(or,od,null),e(vt,Sh),e(vt,sd),e(sd,Bh),_(s,iu,v),_(s,pn,v),b(sr,pn,null),e(pn,Wh),e(pn,rd),e(rd,Qh),e(pn,Kh),e(pn,rr),e(rr,Uh),e(rr,ar),e(ar,Rh),e(rr,Hh),e(pn,Vh),e(pn,ir),e(ir,Yh),e(ir,Wi),e(Wi,Gh),e(ir,Zh),e(pn,Xh),e(pn,lr),e(lr,Jh),e(lr,dr),e(dr,em),e(lr,nm),e(pn,tm),e(pn,Nn),b(cr,Nn,null),e(Nn,om),e(Nn,Tt),e(Tt,sm),e(Tt,Qi),e(Qi,rm),e(Tt,am),e(Tt,ad),e(ad,im),e(Tt,lm),e(Nn,dm),b(ho,Nn,null),e(Nn,cm),b(mo,Nn,null),_(s,lu,v),_(s,Ft,v),e(Ft,go),e(go,id),b(ur,id,null),e(Ft,um),e(Ft,ld),e(ld,pm),_(s,du,v),_(s,fn,v),b(pr,fn,null),e(fn,fm),e(fn,dd),e(dd,hm),e(fn,mm),e(fn,fr),e(fr,gm),e(fr,hr),e(hr,_m),e(fr,km),e(fn,vm),e(fn,mr),e(mr,Tm),e(mr,Ki),e(Ki,Fm),e(mr,ym),e(fn,bm),e(fn,gr),e(gr,wm),e(gr,_r),e(_r,$m),e(gr,Em),e(fn,Mm),e(fn,In),b(kr,In,null),e(In,zm),e(In,yt),e(yt,qm),e(yt,Ui),e(Ui,Pm),e(yt,xm),e(yt,cd),e(cd,jm),e(yt,Cm),e(In,Om),b(_o,In,null),e(In,Lm),b(ko,In,null),_(s,cu,v),_(s,bt,v),e(bt,vo),e(vo,ud),b(vr,ud,null),e(bt,Dm),e(bt,pd),e(pd,Am),_(s,uu,v),_(s,wt,v),b(Tr,wt,null),e(wt,Nm),e(wt,Sn),b(Fr,Sn,null),e(Sn,Im),e(Sn,$t),e($t,Sm),e($t,Ri),e(Ri,Bm),e($t,Wm),e($t,fd),e(fd,Qm),e($t,Km),e(Sn,Um),b(To,Sn,null),e(Sn,Rm),b(Fo,Sn,null),_(s,pu,v),_(s,Et,v),e(Et,yo),e(yo,hd),b(yr,hd,null),e(Et,Hm),e(Et,md),e(md,Vm),_(s,fu,v),_(s,hn,v),b(br,hn,null),e(hn,Ym),e(hn,wr),e(wr,Gm),e(wr,gd),e(gd,Zm),e(wr,Xm),e(hn,Jm),e(hn,$r),e($r,eg),e($r,Er),e(Er,ng),e($r,tg),e(hn,og),e(hn,Mr),e(Mr,sg),e(Mr,Hi),e(Hi,rg),e(Mr,ag),e(hn,ig),e(hn,zr),e(zr,lg),e(zr,qr),e(qr,dg),e(zr,cg),e(hn,ug),e(hn,Tn),b(Pr,Tn,null),e(Tn,pg),e(Tn,Mt),e(Mt,fg),e(Mt,Vi),e(Vi,hg),e(Mt,mg),e(Mt,_d),e(_d,gg),e(Mt,_g),e(Tn,kg),b(bo,Tn,null),e(Tn,vg),b(wo,Tn,null),e(Tn,Tg),b($o,Tn,null),_(s,hu,v),_(s,zt,v),e(zt,Eo),e(Eo,kd),b(xr,kd,null),e(zt,Fg),e(zt,vd),e(vd,yg),_(s,mu,v),_(s,mn,v),b(jr,mn,null),e(mn,bg),e(mn,Td),e(Td,wg),e(mn,$g),e(mn,Cr),e(Cr,Eg),e(Cr,Or),e(Or,Mg),e(Cr,zg),e(mn,qg),e(mn,Lr),e(Lr,Pg),e(Lr,Yi),e(Yi,xg),e(Lr,jg),e(mn,Cg),e(mn,Dr),e(Dr,Og),e(Dr,Ar),e(Ar,Lg),e(Dr,Dg),e(mn,Ag),e(mn,un),b(Nr,un,null),e(un,Ng),e(un,qt),e(qt,Ig),e(qt,Gi),e(Gi,Sg),e(qt,Bg),e(qt,Fd),e(Fd,Wg),e(qt,Qg),e(un,Kg),b(Mo,un,null),e(un,Ug),b(zo,un,null),e(un,Rg),b(qo,un,null),e(un,Hg),b(Po,un,null),e(un,Vg),b(xo,un,null),_(s,gu,v),_(s,Pt,v),e(Pt,jo),e(jo,yd),b(Ir,yd,null),e(Pt,Yg),e(Pt,bd),e(bd,Gg),_(s,_u,v),_(s,gn,v),b(Sr,gn,null),e(gn,Zg),e(gn,wd),e(wd,Xg),e(gn,Jg),e(gn,Br),e(Br,e_),e(Br,Wr),e(Wr,n_),e(Br,t_),e(gn,o_),e(gn,Qr),e(Qr,s_),e(Qr,Zi),e(Zi,r_),e(Qr,a_),e(gn,i_),e(gn,Kr),e(Kr,l_),e(Kr,Ur),e(Ur,d_),e(Kr,c_),e(gn,u_),e(gn,Bn),b(Rr,Bn,null),e(Bn,p_),e(Bn,xt),e(xt,f_),e(xt,Xi),e(Xi,h_),e(xt,m_),e(xt,$d),e($d,g_),e(xt,__),e(Bn,k_),b(Co,Bn,null),e(Bn,v_),b(Oo,Bn,null),_(s,ku,v),_(s,jt,v),e(jt,Lo),e(Lo,Ed),b(Hr,Ed,null),e(jt,T_),e(jt,Md),e(Md,F_),_(s,vu,v),_(s,_n,v),b(Vr,_n,null),e(_n,y_),e(_n,zd),e(zd,b_),e(_n,w_),e(_n,Yr),e(Yr,$_),e(Yr,Gr),e(Gr,E_),e(Yr,M_),e(_n,z_),e(_n,Zr),e(Zr,q_),e(Zr,Ji),e(Ji,P_),e(Zr,x_),e(_n,j_),e(_n,Xr),e(Xr,C_),e(Xr,Jr),e(Jr,O_),e(Xr,L_),e(_n,D_),e(_n,Fn),b(ea,Fn,null),e(Fn,A_),e(Fn,Ct),e(Ct,N_),e(Ct,el),e(el,I_),e(Ct,S_),e(Ct,qd),e(qd,B_),e(Ct,W_),e(Fn,Q_),b(Do,Fn,null),e(Fn,K_),b(Ao,Fn,null),e(Fn,U_),b(No,Fn,null),_(s,Tu,v),_(s,Ot,v),e(Ot,Io),e(Io,Pd),b(na,Pd,null),e(Ot,R_),e(Ot,xd),e(xd,H_),_(s,Fu,v),_(s,kn,v),b(ta,kn,null),e(kn,V_),e(kn,Lt),e(Lt,Y_),e(Lt,jd),e(jd,G_),e(Lt,Z_),e(Lt,Cd),e(Cd,X_),e(Lt,J_),e(kn,ek),e(kn,oa),e(oa,nk),e(oa,sa),e(sa,tk),e(oa,ok),e(kn,sk),e(kn,ra),e(ra,rk),e(ra,nl),e(nl,ak),e(ra,ik),e(kn,lk),e(kn,aa),e(aa,dk),e(aa,ia),e(ia,ck),e(aa,uk),e(kn,pk),e(kn,yn),b(la,yn,null),e(yn,fk),e(yn,Dt),e(Dt,hk),e(Dt,tl),e(tl,mk),e(Dt,gk),e(Dt,Od),e(Od,_k),e(Dt,kk),e(yn,vk),b(So,yn,null),e(yn,Tk),b(Bo,yn,null),e(yn,Fk),b(Wo,yn,null),_(s,yu,v),_(s,At,v),e(At,Qo),e(Qo,Ld),b(da,Ld,null),e(At,yk),e(At,Dd),e(Dd,bk),_(s,bu,v),_(s,nn,v),b(ca,nn,null),e(nn,wk),e(nn,Ad),e(Ad,$k),e(nn,Ek),e(nn,ua),e(ua,Mk),e(ua,pa),e(pa,zk),e(ua,qk),e(nn,Pk),e(nn,fa),e(fa,xk),e(fa,ol),e(ol,jk),e(fa,Ck),e(nn,Ok),e(nn,ha),e(ha,Lk),e(ha,ma),e(ma,Dk),e(ha,Ak),e(nn,Nk),b(Ko,nn,null),e(nn,Ik),e(nn,Wn),b(ga,Wn,null),e(Wn,Sk),e(Wn,Nt),e(Nt,Bk),e(Nt,sl),e(sl,Wk),e(Nt,Qk),e(Nt,Nd),e(Nd,Kk),e(Nt,Uk),e(Wn,Rk),b(Uo,Wn,null),e(Wn,Hk),b(Ro,Wn,null),_(s,wu,v),_(s,It,v),e(It,Ho),e(Ho,Id),b(_a,Id,null),e(It,Vk),e(It,Sd),e(Sd,Yk),_(s,$u,v),_(s,tn,v),b(ka,tn,null),e(tn,Gk),e(tn,Bd),e(Bd,Zk),e(tn,Xk),e(tn,va),e(va,Jk),e(va,Ta),e(Ta,ev),e(va,nv),e(tn,tv),e(tn,Fa),e(Fa,ov),e(Fa,rl),e(rl,sv),e(Fa,rv),e(tn,av),e(tn,ya),e(ya,iv),e(ya,ba),e(ba,lv),e(ya,dv),e(tn,cv),b(Vo,tn,null),e(tn,uv),e(tn,Qn),b(wa,Qn,null),e(Qn,pv),e(Qn,St),e(St,fv),e(St,al),e(al,hv),e(St,mv),e(St,Wd),e(Wd,gv),e(St,_v),e(Qn,kv),b(Yo,Qn,null),e(Qn,vv),b(Go,Qn,null),_(s,Eu,v),_(s,Bt,v),e(Bt,Zo),e(Zo,Qd),b($a,Qd,null),e(Bt,Tv),e(Bt,Kd),e(Kd,Fv),_(s,Mu,v),_(s,on,v),b(Ea,on,null),e(on,yv),e(on,Ud),e(Ud,bv),e(on,wv),e(on,Ma),e(Ma,$v),e(Ma,za),e(za,Ev),e(Ma,Mv),e(on,zv),e(on,qa),e(qa,qv),e(qa,il),e(il,Pv),e(qa,xv),e(on,jv),e(on,Pa),e(Pa,Cv),e(Pa,xa),e(xa,Ov),e(Pa,Lv),e(on,Dv),b(Xo,on,null),e(on,Av),e(on,Kn),b(ja,Kn,null),e(Kn,Nv),e(Kn,Wt),e(Wt,Iv),e(Wt,ll),e(ll,Sv),e(Wt,Bv),e(Wt,Rd),e(Rd,Wv),e(Wt,Qv),e(Kn,Kv),b(Jo,Kn,null),e(Kn,Uv),b(es,Kn,null),_(s,zu,v),_(s,Qt,v),e(Qt,ns),e(ns,Hd),b(Ca,Hd,null),e(Qt,Rv),e(Qt,Vd),e(Vd,Hv),_(s,qu,v),_(s,sn,v),b(Oa,sn,null),e(sn,Vv),e(sn,La),e(La,Yv),e(La,Yd),e(Yd,Gv),e(La,Zv),e(sn,Xv),e(sn,Da),e(Da,Jv),e(Da,Aa),e(Aa,e2),e(Da,n2),e(sn,t2),e(sn,Na),e(Na,o2),e(Na,dl),e(dl,s2),e(Na,r2),e(sn,a2),e(sn,Ia),e(Ia,i2),e(Ia,Sa),e(Sa,l2),e(Ia,d2),e(sn,c2),b(ts,sn,null),e(sn,u2),e(sn,bn),b(Ba,bn,null),e(bn,p2),e(bn,Kt),e(Kt,f2),e(Kt,cl),e(cl,h2),e(Kt,m2),e(Kt,Gd),e(Gd,g2),e(Kt,_2),e(bn,k2),b(os,bn,null),e(bn,v2),b(ss,bn,null),e(bn,T2),b(rs,bn,null),_(s,Pu,v),_(s,Ut,v),e(Ut,as),e(as,Zd),b(Wa,Zd,null),e(Ut,F2),e(Ut,Xd),e(Xd,y2),_(s,xu,v),_(s,rn,v),b(Qa,rn,null),e(rn,b2),e(rn,Jd),e(Jd,w2),e(rn,$2),e(rn,Ka),e(Ka,E2),e(Ka,Ua),e(Ua,M2),e(Ka,z2),e(rn,q2),e(rn,Ra),e(Ra,P2),e(Ra,ul),e(ul,x2),e(Ra,j2),e(rn,C2),e(rn,Ha),e(Ha,O2),e(Ha,Va),e(Va,L2),e(Ha,D2),e(rn,A2),b(is,rn,null),e(rn,N2),e(rn,wn),b(Ya,wn,null),e(wn,I2),e(wn,Rt),e(Rt,S2),e(Rt,pl),e(pl,B2),e(Rt,W2),e(Rt,ec),e(ec,Q2),e(Rt,K2),e(wn,U2),b(ls,wn,null),e(wn,R2),b(ds,wn,null),e(wn,H2),b(cs,wn,null),_(s,ju,v),_(s,Ht,v),e(Ht,us),e(us,nc),b(Ga,nc,null),e(Ht,V2),e(Ht,tc),e(tc,Y2),_(s,Cu,v),_(s,an,v),b(Za,an,null),e(an,G2),e(an,oc),e(oc,Z2),e(an,X2),e(an,Xa),e(Xa,J2),e(Xa,Ja),e(Ja,eT),e(Xa,nT),e(an,tT),e(an,ei),e(ei,oT),e(ei,fl),e(fl,sT),e(ei,rT),e(an,aT),e(an,ni),e(ni,iT),e(ni,ti),e(ti,lT),e(ni,dT),e(an,cT),b(ps,an,null),e(an,uT),e(an,Un),b(oi,Un,null),e(Un,pT),e(Un,Vt),e(Vt,fT),e(Vt,hl),e(hl,hT),e(Vt,mT),e(Vt,sc),e(sc,gT),e(Vt,_T),e(Un,kT),b(fs,Un,null),e(Un,vT),b(hs,Un,null),_(s,Ou,v),_(s,Yt,v),e(Yt,ms),e(ms,rc),b(si,rc,null),e(Yt,TT),e(Yt,ac),e(ac,FT),_(s,Lu,v),_(s,ln,v),b(ri,ln,null),e(ln,yT),e(ln,ic),e(ic,bT),e(ln,wT),e(ln,ai),e(ai,$T),e(ai,ii),e(ii,ET),e(ai,MT),e(ln,zT),e(ln,li),e(li,qT),e(li,ml),e(ml,PT),e(li,xT),e(ln,jT),e(ln,di),e(di,CT),e(di,ci),e(ci,OT),e(di,LT),e(ln,DT),b(gs,ln,null),e(ln,AT),e(ln,$n),b(ui,$n,null),e($n,NT),e($n,Gt),e(Gt,IT),e(Gt,gl),e(gl,ST),e(Gt,BT),e(Gt,lc),e(lc,WT),e(Gt,QT),e($n,KT),b(_s,$n,null),e($n,UT),b(ks,$n,null),e($n,RT),b(vs,$n,null),_(s,Du,v),_(s,Zt,v),e(Zt,Ts),e(Ts,dc),b(pi,dc,null),e(Zt,HT),e(Zt,cc),e(cc,VT),_(s,Au,v),_(s,dn,v),b(fi,dn,null),e(dn,YT),e(dn,Xt),e(Xt,GT),e(Xt,uc),e(uc,ZT),e(Xt,XT),e(Xt,pc),e(pc,JT),e(Xt,eF),e(dn,nF),e(dn,hi),e(hi,tF),e(hi,mi),e(mi,oF),e(hi,sF),e(dn,rF),e(dn,gi),e(gi,aF),e(gi,_l),e(_l,iF),e(gi,lF),e(dn,dF),e(dn,_i),e(_i,cF),e(_i,ki),e(ki,uF),e(_i,pF),e(dn,fF),b(Fs,dn,null),e(dn,hF),e(dn,En),b(vi,En,null),e(En,mF),e(En,Jt),e(Jt,gF),e(Jt,kl),e(kl,_F),e(Jt,kF),e(Jt,fc),e(fc,vF),e(Jt,TF),e(En,FF),b(ys,En,null),e(En,yF),b(bs,En,null),e(En,bF),b(ws,En,null),Nu=!0},p(s,[v]){const Ti={};v&2&&(Ti.$$scope={dirty:v,ctx:s}),io.$set(Ti);const hc={};v&2&&(hc.$$scope={dirty:v,ctx:s}),uo.$set(hc);const mc={};v&2&&(mc.$$scope={dirty:v,ctx:s}),ho.$set(mc);const gc={};v&2&&(gc.$$scope={dirty:v,ctx:s}),mo.$set(gc);const Fi={};v&2&&(Fi.$$scope={dirty:v,ctx:s}),_o.$set(Fi);const _c={};v&2&&(_c.$$scope={dirty:v,ctx:s}),ko.$set(_c);const kc={};v&2&&(kc.$$scope={dirty:v,ctx:s}),To.$set(kc);const vc={};v&2&&(vc.$$scope={dirty:v,ctx:s}),Fo.$set(vc);const yi={};v&2&&(yi.$$scope={dirty:v,ctx:s}),bo.$set(yi);const Tc={};v&2&&(Tc.$$scope={dirty:v,ctx:s}),wo.$set(Tc);const Fc={};v&2&&(Fc.$$scope={dirty:v,ctx:s}),$o.$set(Fc);const yc={};v&2&&(yc.$$scope={dirty:v,ctx:s}),Mo.$set(yc);const bc={};v&2&&(bc.$$scope={dirty:v,ctx:s}),zo.$set(bc);const wc={};v&2&&(wc.$$scope={dirty:v,ctx:s}),qo.$set(wc);const bi={};v&2&&(bi.$$scope={dirty:v,ctx:s}),Po.$set(bi);const $c={};v&2&&($c.$$scope={dirty:v,ctx:s}),xo.$set($c);const en={};v&2&&(en.$$scope={dirty:v,ctx:s}),Co.$set(en);const Ec={};v&2&&(Ec.$$scope={dirty:v,ctx:s}),Oo.$set(Ec);const Mc={};v&2&&(Mc.$$scope={dirty:v,ctx:s}),Do.$set(Mc);const zc={};v&2&&(zc.$$scope={dirty:v,ctx:s}),Ao.$set(zc);const qc={};v&2&&(qc.$$scope={dirty:v,ctx:s}),No.$set(qc);const Pc={};v&2&&(Pc.$$scope={dirty:v,ctx:s}),So.$set(Pc);const xc={};v&2&&(xc.$$scope={dirty:v,ctx:s}),Bo.$set(xc);const jc={};v&2&&(jc.$$scope={dirty:v,ctx:s}),Wo.$set(jc);const Cc={};v&2&&(Cc.$$scope={dirty:v,ctx:s}),Ko.$set(Cc);const eo={};v&2&&(eo.$$scope={dirty:v,ctx:s}),Uo.$set(eo);const Oc={};v&2&&(Oc.$$scope={dirty:v,ctx:s}),Ro.$set(Oc);const Lc={};v&2&&(Lc.$$scope={dirty:v,ctx:s}),Vo.$set(Lc);const wi={};v&2&&(wi.$$scope={dirty:v,ctx:s}),Yo.$set(wi);const Dc={};v&2&&(Dc.$$scope={dirty:v,ctx:s}),Go.$set(Dc);const Ac={};v&2&&(Ac.$$scope={dirty:v,ctx:s}),Xo.$set(Ac);const Nc={};v&2&&(Nc.$$scope={dirty:v,ctx:s}),Jo.$set(Nc);const no={};v&2&&(no.$$scope={dirty:v,ctx:s}),es.$set(no);const nt={};v&2&&(nt.$$scope={dirty:v,ctx:s}),ts.$set(nt);const Ic={};v&2&&(Ic.$$scope={dirty:v,ctx:s}),os.$set(Ic);const Sc={};v&2&&(Sc.$$scope={dirty:v,ctx:s}),ss.$set(Sc);const Bc={};v&2&&(Bc.$$scope={dirty:v,ctx:s}),rs.$set(Bc);const to={};v&2&&(to.$$scope={dirty:v,ctx:s}),is.$set(to);const Wc={};v&2&&(Wc.$$scope={dirty:v,ctx:s}),ls.$set(Wc);const Qc={};v&2&&(Qc.$$scope={dirty:v,ctx:s}),ds.$set(Qc);const $i={};v&2&&($i.$$scope={dirty:v,ctx:s}),cs.$set($i);const Kc={};v&2&&(Kc.$$scope={dirty:v,ctx:s}),ps.$set(Kc);const Uc={};v&2&&(Uc.$$scope={dirty:v,ctx:s}),fs.$set(Uc);const Rc={};v&2&&(Rc.$$scope={dirty:v,ctx:s}),hs.$set(Rc);const cn={};v&2&&(cn.$$scope={dirty:v,ctx:s}),gs.$set(cn);const Hc={};v&2&&(Hc.$$scope={dirty:v,ctx:s}),_s.$set(Hc);const $s={};v&2&&($s.$$scope={dirty:v,ctx:s}),ks.$set($s);const Vc={};v&2&&(Vc.$$scope={dirty:v,ctx:s}),vs.$set(Vc);const Yc={};v&2&&(Yc.$$scope={dirty:v,ctx:s}),Fs.$set(Yc);const Ei={};v&2&&(Ei.$$scope={dirty:v,ctx:s}),ys.$set(Ei);const Gc={};v&2&&(Gc.$$scope={dirty:v,ctx:s}),bs.$set(Gc);const oo={};v&2&&(oo.$$scope={dirty:v,ctx:s}),ws.$set(oo)},i(s){Nu||(w(l.$$.fragment,s),w(M.$$.fragment,s),w(ie.$$.fragment,s),w(Ds.$$.fragment,s),w(Ns.$$.fragment,s),w(Is.$$.fragment,s),w(Bs.$$.fragment,s),w(Qs.$$.fragment,s),w(Us.$$.fragment,s),w(io.$$.fragment,s),w(Rs.$$.fragment,s),w(Hs.$$.fragment,s),w(Vs.$$.fragment,s),w(Zs.$$.fragment,s),w(uo.$$.fragment,s),w(Xs.$$.fragment,s),w(Js.$$.fragment,s),w(nr.$$.fragment,s),w(or.$$.fragment,s),w(sr.$$.fragment,s),w(cr.$$.fragment,s),w(ho.$$.fragment,s),w(mo.$$.fragment,s),w(ur.$$.fragment,s),w(pr.$$.fragment,s),w(kr.$$.fragment,s),w(_o.$$.fragment,s),w(ko.$$.fragment,s),w(vr.$$.fragment,s),w(Tr.$$.fragment,s),w(Fr.$$.fragment,s),w(To.$$.fragment,s),w(Fo.$$.fragment,s),w(yr.$$.fragment,s),w(br.$$.fragment,s),w(Pr.$$.fragment,s),w(bo.$$.fragment,s),w(wo.$$.fragment,s),w($o.$$.fragment,s),w(xr.$$.fragment,s),w(jr.$$.fragment,s),w(Nr.$$.fragment,s),w(Mo.$$.fragment,s),w(zo.$$.fragment,s),w(qo.$$.fragment,s),w(Po.$$.fragment,s),w(xo.$$.fragment,s),w(Ir.$$.fragment,s),w(Sr.$$.fragment,s),w(Rr.$$.fragment,s),w(Co.$$.fragment,s),w(Oo.$$.fragment,s),w(Hr.$$.fragment,s),w(Vr.$$.fragment,s),w(ea.$$.fragment,s),w(Do.$$.fragment,s),w(Ao.$$.fragment,s),w(No.$$.fragment,s),w(na.$$.fragment,s),w(ta.$$.fragment,s),w(la.$$.fragment,s),w(So.$$.fragment,s),w(Bo.$$.fragment,s),w(Wo.$$.fragment,s),w(da.$$.fragment,s),w(ca.$$.fragment,s),w(Ko.$$.fragment,s),w(ga.$$.fragment,s),w(Uo.$$.fragment,s),w(Ro.$$.fragment,s),w(_a.$$.fragment,s),w(ka.$$.fragment,s),w(Vo.$$.fragment,s),w(wa.$$.fragment,s),w(Yo.$$.fragment,s),w(Go.$$.fragment,s),w($a.$$.fragment,s),w(Ea.$$.fragment,s),w(Xo.$$.fragment,s),w(ja.$$.fragment,s),w(Jo.$$.fragment,s),w(es.$$.fragment,s),w(Ca.$$.fragment,s),w(Oa.$$.fragment,s),w(ts.$$.fragment,s),w(Ba.$$.fragment,s),w(os.$$.fragment,s),w(ss.$$.fragment,s),w(rs.$$.fragment,s),w(Wa.$$.fragment,s),w(Qa.$$.fragment,s),w(is.$$.fragment,s),w(Ya.$$.fragment,s),w(ls.$$.fragment,s),w(ds.$$.fragment,s),w(cs.$$.fragment,s),w(Ga.$$.fragment,s),w(Za.$$.fragment,s),w(ps.$$.fragment,s),w(oi.$$.fragment,s),w(fs.$$.fragment,s),w(hs.$$.fragment,s),w(si.$$.fragment,s),w(ri.$$.fragment,s),w(gs.$$.fragment,s),w(ui.$$.fragment,s),w(_s.$$.fragment,s),w(ks.$$.fragment,s),w(vs.$$.fragment,s),w(pi.$$.fragment,s),w(fi.$$.fragment,s),w(Fs.$$.fragment,s),w(vi.$$.fragment,s),w(ys.$$.fragment,s),w(bs.$$.fragment,s),w(ws.$$.fragment,s),Nu=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(ie.$$.fragment,s),$(Ds.$$.fragment,s),$(Ns.$$.fragment,s),$(Is.$$.fragment,s),$(Bs.$$.fragment,s),$(Qs.$$.fragment,s),$(Us.$$.fragment,s),$(io.$$.fragment,s),$(Rs.$$.fragment,s),$(Hs.$$.fragment,s),$(Vs.$$.fragment,s),$(Zs.$$.fragment,s),$(uo.$$.fragment,s),$(Xs.$$.fragment,s),$(Js.$$.fragment,s),$(nr.$$.fragment,s),$(or.$$.fragment,s),$(sr.$$.fragment,s),$(cr.$$.fragment,s),$(ho.$$.fragment,s),$(mo.$$.fragment,s),$(ur.$$.fragment,s),$(pr.$$.fragment,s),$(kr.$$.fragment,s),$(_o.$$.fragment,s),$(ko.$$.fragment,s),$(vr.$$.fragment,s),$(Tr.$$.fragment,s),$(Fr.$$.fragment,s),$(To.$$.fragment,s),$(Fo.$$.fragment,s),$(yr.$$.fragment,s),$(br.$$.fragment,s),$(Pr.$$.fragment,s),$(bo.$$.fragment,s),$(wo.$$.fragment,s),$($o.$$.fragment,s),$(xr.$$.fragment,s),$(jr.$$.fragment,s),$(Nr.$$.fragment,s),$(Mo.$$.fragment,s),$(zo.$$.fragment,s),$(qo.$$.fragment,s),$(Po.$$.fragment,s),$(xo.$$.fragment,s),$(Ir.$$.fragment,s),$(Sr.$$.fragment,s),$(Rr.$$.fragment,s),$(Co.$$.fragment,s),$(Oo.$$.fragment,s),$(Hr.$$.fragment,s),$(Vr.$$.fragment,s),$(ea.$$.fragment,s),$(Do.$$.fragment,s),$(Ao.$$.fragment,s),$(No.$$.fragment,s),$(na.$$.fragment,s),$(ta.$$.fragment,s),$(la.$$.fragment,s),$(So.$$.fragment,s),$(Bo.$$.fragment,s),$(Wo.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Ko.$$.fragment,s),$(ga.$$.fragment,s),$(Uo.$$.fragment,s),$(Ro.$$.fragment,s),$(_a.$$.fragment,s),$(ka.$$.fragment,s),$(Vo.$$.fragment,s),$(wa.$$.fragment,s),$(Yo.$$.fragment,s),$(Go.$$.fragment,s),$($a.$$.fragment,s),$(Ea.$$.fragment,s),$(Xo.$$.fragment,s),$(ja.$$.fragment,s),$(Jo.$$.fragment,s),$(es.$$.fragment,s),$(Ca.$$.fragment,s),$(Oa.$$.fragment,s),$(ts.$$.fragment,s),$(Ba.$$.fragment,s),$(os.$$.fragment,s),$(ss.$$.fragment,s),$(rs.$$.fragment,s),$(Wa.$$.fragment,s),$(Qa.$$.fragment,s),$(is.$$.fragment,s),$(Ya.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(Ga.$$.fragment,s),$(Za.$$.fragment,s),$(ps.$$.fragment,s),$(oi.$$.fragment,s),$(fs.$$.fragment,s),$(hs.$$.fragment,s),$(si.$$.fragment,s),$(ri.$$.fragment,s),$(gs.$$.fragment,s),$(ui.$$.fragment,s),$(_s.$$.fragment,s),$(ks.$$.fragment,s),$(vs.$$.fragment,s),$(pi.$$.fragment,s),$(fi.$$.fragment,s),$(Fs.$$.fragment,s),$(vi.$$.fragment,s),$(ys.$$.fragment,s),$(bs.$$.fragment,s),$(ws.$$.fragment,s),Nu=!1},d(s){n(d),s&&n(k),s&&n(c),E(l),s&&n(fe),s&&n(I),E(M),s&&n(he),s&&n(B),s&&n(me),s&&n(Q),s&&n(ge),s&&n(K),s&&n(oe),s&&n(j),s&&n(_e),s&&n(W),s&&n(q),s&&n(Oe),s&&n(Ne),s&&n(S),E(ie),s&&n(Xc),s&&n(Jn),E(Ds),s&&n(Jc),s&&n(pt),E(Ns),s&&n(eu),s&&n(Je),E(Is),E(Bs),E(Qs),E(Us),E(io),E(Rs),s&&n(nu),s&&n(ht),E(Hs),s&&n(tu),s&&n(vn),E(Vs),E(Zs),E(uo),s&&n(ou),s&&n(gt),E(Xs),s&&n(su),s&&n(_t),E(Js),s&&n(ru),s&&n(kt),E(nr),s&&n(au),s&&n(vt),E(or),s&&n(iu),s&&n(pn),E(sr),E(cr),E(ho),E(mo),s&&n(lu),s&&n(Ft),E(ur),s&&n(du),s&&n(fn),E(pr),E(kr),E(_o),E(ko),s&&n(cu),s&&n(bt),E(vr),s&&n(uu),s&&n(wt),E(Tr),E(Fr),E(To),E(Fo),s&&n(pu),s&&n(Et),E(yr),s&&n(fu),s&&n(hn),E(br),E(Pr),E(bo),E(wo),E($o),s&&n(hu),s&&n(zt),E(xr),s&&n(mu),s&&n(mn),E(jr),E(Nr),E(Mo),E(zo),E(qo),E(Po),E(xo),s&&n(gu),s&&n(Pt),E(Ir),s&&n(_u),s&&n(gn),E(Sr),E(Rr),E(Co),E(Oo),s&&n(ku),s&&n(jt),E(Hr),s&&n(vu),s&&n(_n),E(Vr),E(ea),E(Do),E(Ao),E(No),s&&n(Tu),s&&n(Ot),E(na),s&&n(Fu),s&&n(kn),E(ta),E(la),E(So),E(Bo),E(Wo),s&&n(yu),s&&n(At),E(da),s&&n(bu),s&&n(nn),E(ca),E(Ko),E(ga),E(Uo),E(Ro),s&&n(wu),s&&n(It),E(_a),s&&n($u),s&&n(tn),E(ka),E(Vo),E(wa),E(Yo),E(Go),s&&n(Eu),s&&n(Bt),E($a),s&&n(Mu),s&&n(on),E(Ea),E(Xo),E(ja),E(Jo),E(es),s&&n(zu),s&&n(Qt),E(Ca),s&&n(qu),s&&n(sn),E(Oa),E(ts),E(Ba),E(os),E(ss),E(rs),s&&n(Pu),s&&n(Ut),E(Wa),s&&n(xu),s&&n(rn),E(Qa),E(is),E(Ya),E(ls),E(ds),E(cs),s&&n(ju),s&&n(Ht),E(Ga),s&&n(Cu),s&&n(an),E(Za),E(ps),E(oi),E(fs),E(hs),s&&n(Ou),s&&n(Yt),E(si),s&&n(Lu),s&&n(ln),E(ri),E(gs),E(ui),E(_s),E(ks),E(vs),s&&n(Du),s&&n(Zt),E(pi),s&&n(Au),s&&n(dn),E(fi),E(Fs),E(vi),E(ys),E(bs),E(ws)}}}const C$={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function O$(P){return Cw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B$ extends qw{constructor(d){super();Pw(this,d,O$,j$,xw,{})}}export{B$ as default,C$ as metadata};
