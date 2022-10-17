import{S as x$,i as C$,s as j$,e as r,k as p,w as b,t,M as O$,c as a,d as n,m as f,a as i,x as w,h as o,b as m,G as e,g as _,y,q as v,o as $,B as E,v as L$,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function D$(P){let d,k,c,h,F;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function A$(P){let d,k,c,h,F;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function N$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function I$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function S$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function B$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function W$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function Q$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function U$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function K$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function R$(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function H$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function V$(P){let d,k,c,h,F;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of single-label classification:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of single-label classification:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Y$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function G$(P){let d,k,c,h,F;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of multi-label classification:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of multi-label classification:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Z$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function X$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function J$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function e1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function n1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function t1(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function o1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function s1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function r1(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function a1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function i1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function l1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function d1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function c1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function u1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function p1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function f1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function h1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function m1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function g1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function _1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function k1(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function T1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function F1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function b1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function w1(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function y1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function v1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function $1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function E1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function M1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function z1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function q1(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function P1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),be=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),we=t("fit()"),me=t(" and "),Q=r("code"),ye=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),C=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),j=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),Ce=t("subclassing"),je=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ue=i(I);re=o(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(q,"CODE",{});var Oe=i(K);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ke=i(B);be=o(Ke,"model.fit()"),Ke.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);we=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);ye=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),U=a(q,"CODE",{});var He=i(U);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),C=a(g,"UL",{});var A=i(C);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),j=a(A,"LI",{});var S=i(j);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);Ce=o(Ge,"subclassing"),Ge.forEach(n),je=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,K),e(K,Fe),e(M,he),e(M,B),e(B,be),e(M,ae),e(M,H),e(H,we),e(M,me),e(M,Q),e(Q,ye),e(M,ge),e(M,U),e(U,ue),e(M,ve),_(g,oe,z),_(g,C,z),e(C,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(C,Ee),e(C,j),e(j,Me),e(j,Y),e(Y,le),e(j,ze),e(j,G),e(G,de),e(C,qe),e(C,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,Ce),e(L,je)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(C),g&&n(ne),g&&n(L)}}}function x1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function C1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),b(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),w(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),y(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function j1(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,h){y(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function O1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,K,Fe,he,B,be,ae,H,we,me,Q,ye,ge,U,ue,ve,oe,C,O,_e,W,pe,$e,V,R,Ee,j,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,Ce,je,g,z,We,J,Qe,Ue,q,Oe,Ke,De,Re,He,A,X,Ve,Ne,S,Le,Ae,ie,Ye,te,Ge,eu,Jn,Os,df,et,cf,zi,uf,pf,qi,ff,hf,Ls,mf,gf,_f,pt,kf,Pi,Tf,Ff,xi,bf,wf,nu,ft,ro,Sl,Ds,yf,Bl,vf,tu,en,As,$f,Wl,Ef,Mf,Ns,zf,Ci,qf,Pf,xf,tt,Is,Cf,Ql,jf,Of,Ss,ji,Lf,Ul,Df,Af,Oi,Nf,Kl,If,Sf,ao,Bs,Bf,Ws,Wf,Rl,Qf,Uf,Kf,Dn,Qs,Rf,Hl,Hf,Vf,io,Yf,ht,Gf,Vl,Zf,Xf,Yl,Jf,eh,nh,Li,Us,ou,mt,lo,Gl,Ks,th,Zl,oh,su,Tn,Rs,sh,Hs,rh,Xl,ah,ih,lh,Vs,dh,Di,ch,uh,ph,ot,Ys,fh,Jl,hh,mh,Gs,Ai,gh,ed,_h,kh,Ni,Th,nd,Fh,bh,An,Zs,wh,td,yh,vh,co,$h,gt,Eh,od,Mh,zh,sd,qh,Ph,ru,_t,uo,rd,Xs,xh,ad,Ch,au,kt,Js,jh,er,Oh,Ii,Lh,Dh,iu,Tt,nr,Ah,tr,Nh,Si,Ih,Sh,lu,Ft,po,id,or,Bh,ld,Wh,du,un,sr,Qh,dd,Uh,Kh,rr,Rh,ar,Hh,Vh,Yh,ir,Gh,Bi,Zh,Xh,Jh,lr,em,dr,nm,tm,om,Nn,cr,sm,bt,rm,Wi,am,im,cd,lm,dm,cm,fo,um,ho,cu,wt,mo,ud,ur,pm,pd,fm,uu,pn,pr,hm,fd,mm,gm,fr,_m,hr,km,Tm,Fm,mr,bm,Qi,wm,ym,vm,gr,$m,_r,Em,Mm,zm,In,kr,qm,yt,Pm,Ui,xm,Cm,hd,jm,Om,Lm,go,Dm,_o,pu,vt,ko,md,Tr,Am,gd,Nm,fu,$t,Fr,Im,Sn,br,Sm,Et,Bm,Ki,Wm,Qm,_d,Um,Km,Rm,To,Hm,Fo,hu,Mt,bo,kd,wr,Vm,Td,Ym,mu,fn,yr,Gm,vr,Zm,Fd,Xm,Jm,eg,$r,ng,Er,tg,og,sg,Mr,rg,Ri,ag,ig,lg,zr,dg,qr,cg,ug,pg,Fn,Pr,fg,zt,hg,Hi,mg,gg,bd,_g,kg,Tg,wo,Fg,yo,bg,vo,gu,qt,$o,wd,xr,wg,yd,yg,_u,hn,Cr,vg,vd,$g,Eg,jr,Mg,Or,zg,qg,Pg,Lr,xg,Vi,Cg,jg,Og,Dr,Lg,Ar,Dg,Ag,Ng,cn,Nr,Ig,Pt,Sg,Yi,Bg,Wg,$d,Qg,Ug,Kg,Eo,Rg,Mo,Hg,zo,Vg,qo,Yg,Po,ku,xt,xo,Ed,Ir,Gg,Md,Zg,Tu,mn,Sr,Xg,zd,Jg,e_,Br,n_,Wr,t_,o_,s_,Qr,r_,Gi,a_,i_,l_,Ur,d_,Kr,c_,u_,p_,Bn,Rr,f_,Ct,h_,Zi,m_,g_,qd,__,k_,T_,Co,F_,jo,Fu,jt,Oo,Pd,Hr,b_,xd,w_,bu,gn,Vr,y_,Cd,v_,$_,Yr,E_,Gr,M_,z_,q_,Zr,P_,Xi,x_,C_,j_,Xr,O_,Jr,L_,D_,A_,bn,ea,N_,Ot,I_,Ji,S_,B_,jd,W_,Q_,U_,Lo,K_,Do,R_,Ao,wu,Lt,No,Od,na,H_,Ld,V_,yu,_n,ta,Y_,Dt,G_,Dd,Z_,X_,Ad,J_,ek,nk,oa,tk,sa,ok,sk,rk,ra,ak,el,ik,lk,dk,aa,ck,ia,uk,pk,fk,wn,la,hk,At,mk,nl,gk,_k,Nd,kk,Tk,Fk,Io,bk,So,wk,Bo,vu,Nt,Wo,Id,da,yk,Sd,vk,$u,nn,ca,$k,Bd,Ek,Mk,ua,zk,pa,qk,Pk,xk,fa,Ck,tl,jk,Ok,Lk,ha,Dk,ma,Ak,Nk,Ik,Qo,Sk,Wn,ga,Bk,It,Wk,ol,Qk,Uk,Wd,Kk,Rk,Hk,Uo,Vk,Ko,Eu,St,Ro,Qd,_a,Yk,Ud,Gk,Mu,tn,ka,Zk,Kd,Xk,Jk,Ta,eT,Fa,nT,tT,oT,ba,sT,sl,rT,aT,iT,wa,lT,ya,dT,cT,uT,Ho,pT,Qn,va,fT,Bt,hT,rl,mT,gT,Rd,_T,kT,TT,Vo,FT,Yo,zu,Wt,Go,Hd,$a,bT,Vd,wT,qu,on,Ea,yT,Yd,vT,$T,Ma,ET,za,MT,zT,qT,qa,PT,al,xT,CT,jT,Pa,OT,xa,LT,DT,AT,Zo,NT,Un,Ca,IT,Qt,ST,il,BT,WT,Gd,QT,UT,KT,Xo,RT,Jo,Pu,Ut,es,Zd,ja,HT,Xd,VT,xu,sn,Oa,YT,La,GT,Jd,ZT,XT,JT,Da,eF,Aa,nF,tF,oF,Na,sF,ll,rF,aF,iF,Ia,lF,Sa,dF,cF,uF,ns,pF,yn,Ba,fF,Kt,hF,dl,mF,gF,ec,_F,kF,TF,ts,FF,os,bF,ss,Cu,Rt,rs,nc,Wa,wF,tc,yF,ju,rn,Qa,vF,oc,$F,EF,Ua,MF,Ka,zF,qF,PF,Ra,xF,cl,CF,jF,OF,Ha,LF,Va,DF,AF,NF,as,IF,vn,Ya,SF,Ht,BF,ul,WF,QF,sc,UF,KF,RF,is,HF,ls,VF,ds,Ou,Vt,cs,rc,Ga,YF,ac,GF,Lu,an,Za,ZF,ic,XF,JF,Xa,eb,Ja,nb,tb,ob,ei,sb,pl,rb,ab,ib,ni,lb,ti,db,cb,ub,us,pb,Kn,oi,fb,Yt,hb,fl,mb,gb,lc,_b,kb,Tb,ps,Fb,fs,Du,Gt,hs,dc,si,bb,cc,wb,Au,ln,ri,yb,uc,vb,$b,ai,Eb,ii,Mb,zb,qb,li,Pb,hl,xb,Cb,jb,di,Ob,ci,Lb,Db,Ab,ms,Nb,$n,ui,Ib,Zt,Sb,ml,Bb,Wb,pc,Qb,Ub,Kb,gs,Rb,_s,Hb,ks,Nu,Xt,Ts,fc,pi,Vb,hc,Yb,Iu,dn,fi,Gb,Jt,Zb,mc,Xb,Jb,gc,ew,nw,tw,hi,ow,mi,sw,rw,aw,gi,iw,gl,lw,dw,cw,_i,uw,ki,pw,fw,hw,Fs,mw,En,Ti,gw,eo,_w,_l,kw,Tw,_c,Fw,bw,ww,bs,yw,ws,vw,ys,Su;return l=new Xe({}),M=new Xe({}),ie=new Xe({}),Os=new se({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/configuration_funnel.py#L41"}}),Ds=new Xe({}),As=new se({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L91"}}),Is=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L239",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bs=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L265",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L293",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Ie({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[D$]},$$scope:{ctx:P}}}),Us=new se({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel.py#L323"}}),Ks=new Xe({}),Rs=new se({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L94"}}),Ys=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L196",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L220",returnDescription:`
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L834"}}),nr=new se({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L988"}}),or=new Xe({}),sr=new se({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L927"}}),cr=new se({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),fo=new Ze({props:{$$slots:{default:[N$]},$$scope:{ctx:P}}}),ho=new Ie({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[I$]},$$scope:{ctx:P}}}),ur=new Xe({}),pr=new se({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),kr=new se({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),go=new Ze({props:{$$slots:{default:[S$]},$$scope:{ctx:P}}}),_o=new Ie({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[B$]},$$scope:{ctx:P}}}),Tr=new Xe({}),Fr=new se({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),br=new se({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),To=new Ze({props:{$$slots:{default:[W$]},$$scope:{ctx:P}}}),Fo=new Ie({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[Q$]},$$scope:{ctx:P}}}),wr=new Xe({}),yr=new se({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),Pr=new se({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),wo=new Ze({props:{$$slots:{default:[U$]},$$scope:{ctx:P}}}),yo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[K$]},$$scope:{ctx:P}}}),vo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[R$]},$$scope:{ctx:P}}}),xr=new Xe({}),Cr=new se({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),Nr=new se({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Eo=new Ze({props:{$$slots:{default:[H$]},$$scope:{ctx:P}}}),Mo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[V$]},$$scope:{ctx:P}}}),zo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[Y$]},$$scope:{ctx:P}}}),qo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[G$]},$$scope:{ctx:P}}}),Po=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[Z$]},$$scope:{ctx:P}}}),Ir=new Xe({}),Sr=new se({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Rr=new se({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Co=new Ze({props:{$$slots:{default:[X$]},$$scope:{ctx:P}}}),jo=new Ie({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[J$]},$$scope:{ctx:P}}}),Hr=new Xe({}),Vr=new se({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),ea=new se({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Lo=new Ze({props:{$$slots:{default:[e1]},$$scope:{ctx:P}}}),Do=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[n1]},$$scope:{ctx:P}}}),Ao=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[t1]},$$scope:{ctx:P}}}),na=new Xe({}),ta=new se({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),la=new se({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Io=new Ze({props:{$$slots:{default:[o1]},$$scope:{ctx:P}}}),So=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[s1]},$$scope:{ctx:P}}}),Bo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[r1]},$$scope:{ctx:P}}}),da=new Xe({}),ca=new se({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1110"}}),Qo=new Ze({props:{$$slots:{default:[a1]},$$scope:{ctx:P}}}),ga=new se({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1115",returnDescription:`
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
`}}),Uo=new Ze({props:{$$slots:{default:[i1]},$$scope:{ctx:P}}}),Ko=new Ie({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[l1]},$$scope:{ctx:P}}}),_a=new Xe({}),ka=new se({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1159"}}),Ho=new Ze({props:{$$slots:{default:[d1]},$$scope:{ctx:P}}}),va=new se({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1164",returnDescription:`
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
`}}),Vo=new Ze({props:{$$slots:{default:[c1]},$$scope:{ctx:P}}}),Yo=new Ie({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[u1]},$$scope:{ctx:P}}}),$a=new Xe({}),Ea=new se({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1211"}}),Zo=new Ze({props:{$$slots:{default:[p1]},$$scope:{ctx:P}}}),Ca=new se({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1218",returnDescription:`
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
`}}),Xo=new Ze({props:{$$slots:{default:[f1]},$$scope:{ctx:P}}}),Jo=new Ie({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[h1]},$$scope:{ctx:P}}}),ja=new Xe({}),Oa=new se({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1279"}}),ns=new Ze({props:{$$slots:{default:[m1]},$$scope:{ctx:P}}}),Ba=new se({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1293",returnDescription:`
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
`}}),ts=new Ze({props:{$$slots:{default:[g1]},$$scope:{ctx:P}}}),os=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[_1]},$$scope:{ctx:P}}}),ss=new Ie({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[k1]},$$scope:{ctx:P}}}),Wa=new Xe({}),Qa=new se({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1358"}}),as=new Ze({props:{$$slots:{default:[T1]},$$scope:{ctx:P}}}),Ya=new se({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1366",returnDescription:`
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
`}}),is=new Ze({props:{$$slots:{default:[F1]},$$scope:{ctx:P}}}),ls=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[b1]},$$scope:{ctx:P}}}),ds=new Ie({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[w1]},$$scope:{ctx:P}}}),Ga=new Xe({}),Za=new se({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1434"}}),us=new Ze({props:{$$slots:{default:[y1]},$$scope:{ctx:P}}}),oi=new se({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1451",returnDescription:`
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
`}}),ps=new Ze({props:{$$slots:{default:[v1]},$$scope:{ctx:P}}}),fs=new Ie({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[$1]},$$scope:{ctx:P}}}),si=new Xe({}),ri=new se({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1550"}}),ms=new Ze({props:{$$slots:{default:[E1]},$$scope:{ctx:P}}}),ui=new se({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1561",returnDescription:`
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
`}}),gs=new Ze({props:{$$slots:{default:[M1]},$$scope:{ctx:P}}}),_s=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[z1]},$$scope:{ctx:P}}}),ks=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[q1]},$$scope:{ctx:P}}}),pi=new Xe({}),fi=new se({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1628"}}),Fs=new Ze({props:{$$slots:{default:[P1]},$$scope:{ctx:P}}}),Ti=new se({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1638",returnDescription:`
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
`}}),bs=new Ze({props:{$$slots:{default:[x1]},$$scope:{ctx:P}}}),ws=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[C1]},$$scope:{ctx:P}}}),ys=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[j1]},$$scope:{ctx:P}}}),{c(){d=r("meta"),k=p(),c=r("h1"),h=r("a"),F=r("span"),b(l.$$.fragment),u=p(),x=r("span"),ke=t("Funnel Transformer"),fe=p(),I=r("h2"),re=r("a"),ee=r("span"),b(M.$$.fragment),Te=p(),K=r("span"),Fe=t("Overview"),he=p(),B=r("p"),be=t("The Funnel Transformer model was proposed in the paper "),ae=r("a"),H=t(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),we=t(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),me=p(),Q=r("p"),ye=t("The abstract from the paper is the following:"),ge=p(),U=r("p"),ue=r("em"),ve=t(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
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
`),J=r("a"),Qe=t("FunnelForMultipleChoice"),Ue=t("."),q=p(),Oe=r("p"),Ke=t("This model was contributed by "),De=r("a"),Re=t("sgugger"),He=t(". The original code can be found "),A=r("a"),X=t("here"),Ve=t("."),Ne=p(),S=r("h2"),Le=r("a"),Ae=r("span"),b(ie.$$.fragment),Ye=p(),te=r("span"),Ge=t("FunnelConfig"),eu=p(),Jn=r("div"),b(Os.$$.fragment),df=p(),et=r("p"),cf=t("This is the configuration class to store the configuration of a "),zi=r("a"),uf=t("FunnelModel"),pf=t(" or a "),qi=r("a"),ff=t("TFBertModel"),hf=t(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),Ls=r("a"),mf=t("funnel-transformer/small"),gf=t(" architecture."),_f=p(),pt=r("p"),kf=t("Configuration objects inherit from "),Pi=r("a"),Tf=t("PretrainedConfig"),Ff=t(` and can be used to control the model outputs. Read the
documentation from `),xi=r("a"),bf=t("PretrainedConfig"),wf=t(" for more information."),nu=p(),ft=r("h2"),ro=r("a"),Sl=r("span"),b(Ds.$$.fragment),yf=p(),Bl=r("span"),vf=t("FunnelTokenizer"),tu=p(),en=r("div"),b(As.$$.fragment),$f=p(),Wl=r("p"),Ef=t("Construct a Funnel Transformer tokenizer. Based on WordPiece."),Mf=p(),Ns=r("p"),zf=t("This tokenizer inherits from "),Ci=r("a"),qf=t("PreTrainedTokenizer"),Pf=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xf=p(),tt=r("div"),b(Is.$$.fragment),Cf=p(),Ql=r("p"),jf=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Of=p(),Ss=r("ul"),ji=r("li"),Lf=t("single sequence: "),Ul=r("code"),Df=t("[CLS] X [SEP]"),Af=p(),Oi=r("li"),Nf=t("pair of sequences: "),Kl=r("code"),If=t("[CLS] A [SEP] B [SEP]"),Sf=p(),ao=r("div"),b(Bs.$$.fragment),Bf=p(),Ws=r("p"),Wf=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Rl=r("code"),Qf=t("prepare_for_model"),Uf=t(" method."),Kf=p(),Dn=r("div"),b(Qs.$$.fragment),Rf=p(),Hl=r("p"),Hf=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Vf=p(),b(io.$$.fragment),Yf=p(),ht=r("p"),Gf=t("If "),Vl=r("code"),Zf=t("token_ids_1"),Xf=t(" is "),Yl=r("code"),Jf=t("None"),eh=t(", this method only returns the first portion of the mask (0s)."),nh=p(),Li=r("div"),b(Us.$$.fragment),ou=p(),mt=r("h2"),lo=r("a"),Gl=r("span"),b(Ks.$$.fragment),th=p(),Zl=r("span"),oh=t("FunnelTokenizerFast"),su=p(),Tn=r("div"),b(Rs.$$.fragment),sh=p(),Hs=r("p"),rh=t("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Xl=r("em"),ah=t("tokenizers"),ih=t(" library). Based on WordPiece."),lh=p(),Vs=r("p"),dh=t("This tokenizer inherits from "),Di=r("a"),ch=t("PreTrainedTokenizerFast"),uh=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ph=p(),ot=r("div"),b(Ys.$$.fragment),fh=p(),Jl=r("p"),hh=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Funnel sequence has the following format:`),mh=p(),Gs=r("ul"),Ai=r("li"),gh=t("single sequence: "),ed=r("code"),_h=t("[CLS] X [SEP]"),kh=p(),Ni=r("li"),Th=t("pair of sequences: "),nd=r("code"),Fh=t("[CLS] A [SEP] B [SEP]"),bh=p(),An=r("div"),b(Zs.$$.fragment),wh=p(),td=r("p"),yh=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),vh=p(),b(co.$$.fragment),$h=p(),gt=r("p"),Eh=t("If "),od=r("code"),Mh=t("token_ids_1"),zh=t(" is "),sd=r("code"),qh=t("None"),Ph=t(", this method only returns the first portion of the mask (0s)."),ru=p(),_t=r("h2"),uo=r("a"),rd=r("span"),b(Xs.$$.fragment),xh=p(),ad=r("span"),Ch=t("Funnel specific outputs"),au=p(),kt=r("div"),b(Js.$$.fragment),jh=p(),er=r("p"),Oh=t("Output type of "),Ii=r("a"),Lh=t("FunnelForPreTraining"),Dh=t("."),iu=p(),Tt=r("div"),b(nr.$$.fragment),Ah=p(),tr=r("p"),Nh=t("Output type of "),Si=r("a"),Ih=t("FunnelForPreTraining"),Sh=t("."),lu=p(),Ft=r("h2"),po=r("a"),id=r("span"),b(or.$$.fragment),Bh=p(),ld=r("span"),Wh=t("FunnelBaseModel"),du=p(),un=r("div"),b(sr.$$.fragment),Qh=p(),dd=r("p"),Uh=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Kh=p(),rr=r("p"),Rh=t("The Funnel Transformer model was proposed in "),ar=r("a"),Hh=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Vh=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yh=p(),ir=r("p"),Gh=t("This model inherits from "),Bi=r("a"),Zh=t("PreTrainedModel"),Xh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jh=p(),lr=r("p"),em=t("This model is also a PyTorch "),dr=r("a"),nm=t("torch.nn.Module"),tm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),om=p(),Nn=r("div"),b(cr.$$.fragment),sm=p(),bt=r("p"),rm=t("The "),Wi=r("a"),am=t("FunnelBaseModel"),im=t(" forward method, overrides the "),cd=r("code"),lm=t("__call__"),dm=t(" special method."),cm=p(),b(fo.$$.fragment),um=p(),b(ho.$$.fragment),cu=p(),wt=r("h2"),mo=r("a"),ud=r("span"),b(ur.$$.fragment),pm=p(),pd=r("span"),fm=t("FunnelModel"),uu=p(),pn=r("div"),b(pr.$$.fragment),hm=p(),fd=r("p"),mm=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),gm=p(),fr=r("p"),_m=t("The Funnel Transformer model was proposed in "),hr=r("a"),km=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Tm=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Fm=p(),mr=r("p"),bm=t("This model inherits from "),Qi=r("a"),wm=t("PreTrainedModel"),ym=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vm=p(),gr=r("p"),$m=t("This model is also a PyTorch "),_r=r("a"),Em=t("torch.nn.Module"),Mm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zm=p(),In=r("div"),b(kr.$$.fragment),qm=p(),yt=r("p"),Pm=t("The "),Ui=r("a"),xm=t("FunnelModel"),Cm=t(" forward method, overrides the "),hd=r("code"),jm=t("__call__"),Om=t(" special method."),Lm=p(),b(go.$$.fragment),Dm=p(),b(_o.$$.fragment),pu=p(),vt=r("h2"),ko=r("a"),md=r("span"),b(Tr.$$.fragment),Am=p(),gd=r("span"),Nm=t("FunnelModelForPreTraining"),fu=p(),$t=r("div"),b(Fr.$$.fragment),Im=p(),Sn=r("div"),b(br.$$.fragment),Sm=p(),Et=r("p"),Bm=t("The "),Ki=r("a"),Wm=t("FunnelForPreTraining"),Qm=t(" forward method, overrides the "),_d=r("code"),Um=t("__call__"),Km=t(" special method."),Rm=p(),b(To.$$.fragment),Hm=p(),b(Fo.$$.fragment),hu=p(),Mt=r("h2"),bo=r("a"),kd=r("span"),b(wr.$$.fragment),Vm=p(),Td=r("span"),Ym=t("FunnelForMaskedLM"),mu=p(),fn=r("div"),b(yr.$$.fragment),Gm=p(),vr=r("p"),Zm=t("Funnel Transformer Model with a "),Fd=r("code"),Xm=t("language modeling"),Jm=t(" head on top."),eg=p(),$r=r("p"),ng=t("The Funnel Transformer model was proposed in "),Er=r("a"),tg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),og=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sg=p(),Mr=r("p"),rg=t("This model inherits from "),Ri=r("a"),ag=t("PreTrainedModel"),ig=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lg=p(),zr=r("p"),dg=t("This model is also a PyTorch "),qr=r("a"),cg=t("torch.nn.Module"),ug=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=p(),Fn=r("div"),b(Pr.$$.fragment),fg=p(),zt=r("p"),hg=t("The "),Hi=r("a"),mg=t("FunnelForMaskedLM"),gg=t(" forward method, overrides the "),bd=r("code"),_g=t("__call__"),kg=t(" special method."),Tg=p(),b(wo.$$.fragment),Fg=p(),b(yo.$$.fragment),bg=p(),b(vo.$$.fragment),gu=p(),qt=r("h2"),$o=r("a"),wd=r("span"),b(xr.$$.fragment),wg=p(),yd=r("span"),yg=t("FunnelForSequenceClassification"),_u=p(),hn=r("div"),b(Cr.$$.fragment),vg=p(),vd=r("p"),$g=t(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Eg=p(),jr=r("p"),Mg=t("The Funnel Transformer model was proposed in "),Or=r("a"),zg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pg=p(),Lr=r("p"),xg=t("This model inherits from "),Vi=r("a"),Cg=t("PreTrainedModel"),jg=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Og=p(),Dr=r("p"),Lg=t("This model is also a PyTorch "),Ar=r("a"),Dg=t("torch.nn.Module"),Ag=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ng=p(),cn=r("div"),b(Nr.$$.fragment),Ig=p(),Pt=r("p"),Sg=t("The "),Yi=r("a"),Bg=t("FunnelForSequenceClassification"),Wg=t(" forward method, overrides the "),$d=r("code"),Qg=t("__call__"),Ug=t(" special method."),Kg=p(),b(Eo.$$.fragment),Rg=p(),b(Mo.$$.fragment),Hg=p(),b(zo.$$.fragment),Vg=p(),b(qo.$$.fragment),Yg=p(),b(Po.$$.fragment),ku=p(),xt=r("h2"),xo=r("a"),Ed=r("span"),b(Ir.$$.fragment),Gg=p(),Md=r("span"),Zg=t("FunnelForMultipleChoice"),Tu=p(),mn=r("div"),b(Sr.$$.fragment),Xg=p(),zd=r("p"),Jg=t(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),e_=p(),Br=r("p"),n_=t("The Funnel Transformer model was proposed in "),Wr=r("a"),t_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),o_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),s_=p(),Qr=r("p"),r_=t("This model inherits from "),Gi=r("a"),a_=t("PreTrainedModel"),i_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_=p(),Ur=r("p"),d_=t("This model is also a PyTorch "),Kr=r("a"),c_=t("torch.nn.Module"),u_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=p(),Bn=r("div"),b(Rr.$$.fragment),f_=p(),Ct=r("p"),h_=t("The "),Zi=r("a"),m_=t("FunnelForMultipleChoice"),g_=t(" forward method, overrides the "),qd=r("code"),__=t("__call__"),k_=t(" special method."),T_=p(),b(Co.$$.fragment),F_=p(),b(jo.$$.fragment),Fu=p(),jt=r("h2"),Oo=r("a"),Pd=r("span"),b(Hr.$$.fragment),b_=p(),xd=r("span"),w_=t("FunnelForTokenClassification"),bu=p(),gn=r("div"),b(Vr.$$.fragment),y_=p(),Cd=r("p"),v_=t(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),$_=p(),Yr=r("p"),E_=t("The Funnel Transformer model was proposed in "),Gr=r("a"),M_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),z_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),q_=p(),Zr=r("p"),P_=t("This model inherits from "),Xi=r("a"),x_=t("PreTrainedModel"),C_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=p(),Xr=r("p"),O_=t("This model is also a PyTorch "),Jr=r("a"),L_=t("torch.nn.Module"),D_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A_=p(),bn=r("div"),b(ea.$$.fragment),N_=p(),Ot=r("p"),I_=t("The "),Ji=r("a"),S_=t("FunnelForTokenClassification"),B_=t(" forward method, overrides the "),jd=r("code"),W_=t("__call__"),Q_=t(" special method."),U_=p(),b(Lo.$$.fragment),K_=p(),b(Do.$$.fragment),R_=p(),b(Ao.$$.fragment),wu=p(),Lt=r("h2"),No=r("a"),Od=r("span"),b(na.$$.fragment),H_=p(),Ld=r("span"),V_=t("FunnelForQuestionAnswering"),yu=p(),_n=r("div"),b(ta.$$.fragment),Y_=p(),Dt=r("p"),G_=t(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),Dd=r("code"),Z_=t("span start logits"),X_=t(" and "),Ad=r("code"),J_=t("span end logits"),ek=t(")."),nk=p(),oa=r("p"),tk=t("The Funnel Transformer model was proposed in "),sa=r("a"),ok=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rk=p(),ra=r("p"),ak=t("This model inherits from "),el=r("a"),ik=t("PreTrainedModel"),lk=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dk=p(),aa=r("p"),ck=t("This model is also a PyTorch "),ia=r("a"),uk=t("torch.nn.Module"),pk=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fk=p(),wn=r("div"),b(la.$$.fragment),hk=p(),At=r("p"),mk=t("The "),nl=r("a"),gk=t("FunnelForQuestionAnswering"),_k=t(" forward method, overrides the "),Nd=r("code"),kk=t("__call__"),Tk=t(" special method."),Fk=p(),b(Io.$$.fragment),bk=p(),b(So.$$.fragment),wk=p(),b(Bo.$$.fragment),vu=p(),Nt=r("h2"),Wo=r("a"),Id=r("span"),b(da.$$.fragment),yk=p(),Sd=r("span"),vk=t("TFFunnelBaseModel"),$u=p(),nn=r("div"),b(ca.$$.fragment),$k=p(),Bd=r("p"),Ek=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Mk=p(),ua=r("p"),zk=t("The Funnel Transformer model was proposed in "),pa=r("a"),qk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Pk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),xk=p(),fa=r("p"),Ck=t("This model inherits from "),tl=r("a"),jk=t("TFPreTrainedModel"),Ok=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk=p(),ha=r("p"),Dk=t("This model is also a "),ma=r("a"),Ak=t("tf.keras.Model"),Nk=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ik=p(),b(Qo.$$.fragment),Sk=p(),Wn=r("div"),b(ga.$$.fragment),Bk=p(),It=r("p"),Wk=t("The "),ol=r("a"),Qk=t("TFFunnelBaseModel"),Uk=t(" forward method, overrides the "),Wd=r("code"),Kk=t("__call__"),Rk=t(" special method."),Hk=p(),b(Uo.$$.fragment),Vk=p(),b(Ko.$$.fragment),Eu=p(),St=r("h2"),Ro=r("a"),Qd=r("span"),b(_a.$$.fragment),Yk=p(),Ud=r("span"),Gk=t("TFFunnelModel"),Mu=p(),tn=r("div"),b(ka.$$.fragment),Zk=p(),Kd=r("p"),Xk=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Jk=p(),Ta=r("p"),eT=t("The Funnel Transformer model was proposed in "),Fa=r("a"),nT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),oT=p(),ba=r("p"),sT=t("This model inherits from "),sl=r("a"),rT=t("TFPreTrainedModel"),aT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT=p(),wa=r("p"),lT=t("This model is also a "),ya=r("a"),dT=t("tf.keras.Model"),cT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uT=p(),b(Ho.$$.fragment),pT=p(),Qn=r("div"),b(va.$$.fragment),fT=p(),Bt=r("p"),hT=t("The "),rl=r("a"),mT=t("TFFunnelModel"),gT=t(" forward method, overrides the "),Rd=r("code"),_T=t("__call__"),kT=t(" special method."),TT=p(),b(Vo.$$.fragment),FT=p(),b(Yo.$$.fragment),zu=p(),Wt=r("h2"),Go=r("a"),Hd=r("span"),b($a.$$.fragment),bT=p(),Vd=r("span"),wT=t("TFFunnelModelForPreTraining"),qu=p(),on=r("div"),b(Ea.$$.fragment),yT=p(),Yd=r("p"),vT=t("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),$T=p(),Ma=r("p"),ET=t("The Funnel Transformer model was proposed in "),za=r("a"),MT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qT=p(),qa=r("p"),PT=t("This model inherits from "),al=r("a"),xT=t("TFPreTrainedModel"),CT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jT=p(),Pa=r("p"),OT=t("This model is also a "),xa=r("a"),LT=t("tf.keras.Model"),DT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AT=p(),b(Zo.$$.fragment),NT=p(),Un=r("div"),b(Ca.$$.fragment),IT=p(),Qt=r("p"),ST=t("The "),il=r("a"),BT=t("TFFunnelForPreTraining"),WT=t(" forward method, overrides the "),Gd=r("code"),QT=t("__call__"),UT=t(" special method."),KT=p(),b(Xo.$$.fragment),RT=p(),b(Jo.$$.fragment),Pu=p(),Ut=r("h2"),es=r("a"),Zd=r("span"),b(ja.$$.fragment),HT=p(),Xd=r("span"),VT=t("TFFunnelForMaskedLM"),xu=p(),sn=r("div"),b(Oa.$$.fragment),YT=p(),La=r("p"),GT=t("Funnel Model with a "),Jd=r("code"),ZT=t("language modeling"),XT=t(" head on top."),JT=p(),Da=r("p"),eF=t("The Funnel Transformer model was proposed in "),Aa=r("a"),nF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),oF=p(),Na=r("p"),sF=t("This model inherits from "),ll=r("a"),rF=t("TFPreTrainedModel"),aF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iF=p(),Ia=r("p"),lF=t("This model is also a "),Sa=r("a"),dF=t("tf.keras.Model"),cF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uF=p(),b(ns.$$.fragment),pF=p(),yn=r("div"),b(Ba.$$.fragment),fF=p(),Kt=r("p"),hF=t("The "),dl=r("a"),mF=t("TFFunnelForMaskedLM"),gF=t(" forward method, overrides the "),ec=r("code"),_F=t("__call__"),kF=t(" special method."),TF=p(),b(ts.$$.fragment),FF=p(),b(os.$$.fragment),bF=p(),b(ss.$$.fragment),Cu=p(),Rt=r("h2"),rs=r("a"),nc=r("span"),b(Wa.$$.fragment),wF=p(),tc=r("span"),yF=t("TFFunnelForSequenceClassification"),ju=p(),rn=r("div"),b(Qa.$$.fragment),vF=p(),oc=r("p"),$F=t(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),EF=p(),Ua=r("p"),MF=t("The Funnel Transformer model was proposed in "),Ka=r("a"),zF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),PF=p(),Ra=r("p"),xF=t("This model inherits from "),cl=r("a"),CF=t("TFPreTrainedModel"),jF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OF=p(),Ha=r("p"),LF=t("This model is also a "),Va=r("a"),DF=t("tf.keras.Model"),AF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),NF=p(),b(as.$$.fragment),IF=p(),vn=r("div"),b(Ya.$$.fragment),SF=p(),Ht=r("p"),BF=t("The "),ul=r("a"),WF=t("TFFunnelForSequenceClassification"),QF=t(" forward method, overrides the "),sc=r("code"),UF=t("__call__"),KF=t(" special method."),RF=p(),b(is.$$.fragment),HF=p(),b(ls.$$.fragment),VF=p(),b(ds.$$.fragment),Ou=p(),Vt=r("h2"),cs=r("a"),rc=r("span"),b(Ga.$$.fragment),YF=p(),ac=r("span"),GF=t("TFFunnelForMultipleChoice"),Lu=p(),an=r("div"),b(Za.$$.fragment),ZF=p(),ic=r("p"),XF=t(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),JF=p(),Xa=r("p"),eb=t("The Funnel Transformer model was proposed in "),Ja=r("a"),nb=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tb=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ob=p(),ei=r("p"),sb=t("This model inherits from "),pl=r("a"),rb=t("TFPreTrainedModel"),ab=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ib=p(),ni=r("p"),lb=t("This model is also a "),ti=r("a"),db=t("tf.keras.Model"),cb=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ub=p(),b(us.$$.fragment),pb=p(),Kn=r("div"),b(oi.$$.fragment),fb=p(),Yt=r("p"),hb=t("The "),fl=r("a"),mb=t("TFFunnelForMultipleChoice"),gb=t(" forward method, overrides the "),lc=r("code"),_b=t("__call__"),kb=t(" special method."),Tb=p(),b(ps.$$.fragment),Fb=p(),b(fs.$$.fragment),Du=p(),Gt=r("h2"),hs=r("a"),dc=r("span"),b(si.$$.fragment),bb=p(),cc=r("span"),wb=t("TFFunnelForTokenClassification"),Au=p(),ln=r("div"),b(ri.$$.fragment),yb=p(),uc=r("p"),vb=t(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$b=p(),ai=r("p"),Eb=t("The Funnel Transformer model was proposed in "),ii=r("a"),Mb=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zb=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qb=p(),li=r("p"),Pb=t("This model inherits from "),hl=r("a"),xb=t("TFPreTrainedModel"),Cb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jb=p(),di=r("p"),Ob=t("This model is also a "),ci=r("a"),Lb=t("tf.keras.Model"),Db=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ab=p(),b(ms.$$.fragment),Nb=p(),$n=r("div"),b(ui.$$.fragment),Ib=p(),Zt=r("p"),Sb=t("The "),ml=r("a"),Bb=t("TFFunnelForTokenClassification"),Wb=t(" forward method, overrides the "),pc=r("code"),Qb=t("__call__"),Ub=t(" special method."),Kb=p(),b(gs.$$.fragment),Rb=p(),b(_s.$$.fragment),Hb=p(),b(ks.$$.fragment),Nu=p(),Xt=r("h2"),Ts=r("a"),fc=r("span"),b(pi.$$.fragment),Vb=p(),hc=r("span"),Yb=t("TFFunnelForQuestionAnswering"),Iu=p(),dn=r("div"),b(fi.$$.fragment),Gb=p(),Jt=r("p"),Zb=t(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mc=r("code"),Xb=t("span start logits"),Jb=t(" and "),gc=r("code"),ew=t("span end logits"),nw=t(")."),tw=p(),hi=r("p"),ow=t("The Funnel Transformer model was proposed in "),mi=r("a"),sw=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rw=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),aw=p(),gi=r("p"),iw=t("This model inherits from "),gl=r("a"),lw=t("TFPreTrainedModel"),dw=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cw=p(),_i=r("p"),uw=t("This model is also a "),ki=r("a"),pw=t("tf.keras.Model"),fw=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hw=p(),b(Fs.$$.fragment),mw=p(),En=r("div"),b(Ti.$$.fragment),gw=p(),eo=r("p"),_w=t("The "),_l=r("a"),kw=t("TFFunnelForQuestionAnswering"),Tw=t(" forward method, overrides the "),_c=r("code"),Fw=t("__call__"),bw=t(" special method."),ww=p(),b(bs.$$.fragment),yw=p(),b(ws.$$.fragment),vw=p(),b(ys.$$.fragment),this.h()},l(s){const T=O$('[data-svelte="svelte-1phssyn"]',document.head);d=a(T,"META",{name:!0,content:!0}),T.forEach(n),k=f(s),c=a(s,"H1",{class:!0});var Fi=i(c);h=a(Fi,"A",{id:!0,class:!0,href:!0});var kc=i(h);F=a(kc,"SPAN",{});var Tc=i(F);w(l.$$.fragment,Tc),Tc.forEach(n),kc.forEach(n),u=f(Fi),x=a(Fi,"SPAN",{});var Fc=i(x);ke=o(Fc,"Funnel Transformer"),Fc.forEach(n),Fi.forEach(n),fe=f(s),I=a(s,"H2",{class:!0});var bi=i(I);re=a(bi,"A",{id:!0,class:!0,href:!0});var bc=i(re);ee=a(bc,"SPAN",{});var wc=i(ee);w(M.$$.fragment,wc),wc.forEach(n),bc.forEach(n),Te=f(bi),K=a(bi,"SPAN",{});var yc=i(K);Fe=o(yc,"Overview"),yc.forEach(n),bi.forEach(n),he=f(s),B=a(s,"P",{});var wi=i(B);be=o(wi,"The Funnel Transformer model was proposed in the paper "),ae=a(wi,"A",{href:!0,rel:!0});var vc=i(ae);H=o(vc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),vc.forEach(n),we=o(wi,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),wi.forEach(n),me=f(s),Q=a(s,"P",{});var $c=i(Q);ye=o($c,"The abstract from the paper is the following:"),$c.forEach(n),ge=f(s),U=a(s,"P",{});var Ec=i(U);ue=a(Ec,"EM",{});var Mc=i(ue);ve=o(Mc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),Mc.forEach(n),Ec.forEach(n),oe=f(s),C=a(s,"P",{});var zc=i(C);O=o(zc,"Tips:"),zc.forEach(n),_e=f(s),W=a(s,"UL",{});var yi=i(W);pe=a(yi,"LI",{});var qc=i(pe);$e=o(qc,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),qc.forEach(n),V=f(yi),R=a(yi,"LI",{});var Je=i(R);Ee=o(Je,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),j=a(Je,"A",{href:!0});var Pc=i(j);Me=o(Pc,"FunnelModel"),Pc.forEach(n),Y=o(Je,", "),le=a(Je,"A",{href:!0});var xc=i(le);ze=o(xc,"FunnelForPreTraining"),xc.forEach(n),G=o(Je,`,
`),de=a(Je,"A",{href:!0});var Cc=i(de);qe=o(Cc,"FunnelForMaskedLM"),Cc.forEach(n),N=o(Je,", "),ce=a(Je,"A",{href:!0});var jc=i(ce);Z=o(jc,"FunnelForTokenClassification"),jc.forEach(n),Pe=o(Je,` and
class:`),ne=a(Je,"EM",{});var Oc=i(ne);L=o(Oc,"~transformers.FunnelForQuestionAnswering"),Oc.forEach(n),xe=o(Je,`. The second ones should be used for
`),D=a(Je,"A",{href:!0});var Lc=i(D);Ce=o(Lc,"FunnelBaseModel"),Lc.forEach(n),je=o(Je,", "),g=a(Je,"A",{href:!0});var Dc=i(g);z=o(Dc,"FunnelForSequenceClassification"),Dc.forEach(n),We=o(Je,` and
`),J=a(Je,"A",{href:!0});var Ac=i(J);Qe=o(Ac,"FunnelForMultipleChoice"),Ac.forEach(n),Ue=o(Je,"."),Je.forEach(n),yi.forEach(n),q=f(s),Oe=a(s,"P",{});var no=i(Oe);Ke=o(no,"This model was contributed by "),De=a(no,"A",{href:!0,rel:!0});var Nc=i(De);Re=o(Nc,"sgugger"),Nc.forEach(n),He=o(no,". The original code can be found "),A=a(no,"A",{href:!0,rel:!0});var Ic=i(A);X=o(Ic,"here"),Ic.forEach(n),Ve=o(no,"."),no.forEach(n),Ne=f(s),S=a(s,"H2",{class:!0});var vi=i(S);Le=a(vi,"A",{id:!0,class:!0,href:!0});var Sc=i(Le);Ae=a(Sc,"SPAN",{});var Bc=i(Ae);w(ie.$$.fragment,Bc),Bc.forEach(n),Sc.forEach(n),Ye=f(vi),te=a(vi,"SPAN",{});var Wc=i(te);Ge=o(Wc,"FunnelConfig"),Wc.forEach(n),vi.forEach(n),eu=f(s),Jn=a(s,"DIV",{class:!0});var to=i(Jn);w(Os.$$.fragment,to),df=f(to),et=a(to,"P",{});var nt=i(et);cf=o(nt,"This is the configuration class to store the configuration of a "),zi=a(nt,"A",{href:!0});var Qc=i(zi);uf=o(Qc,"FunnelModel"),Qc.forEach(n),pf=o(nt," or a "),qi=a(nt,"A",{href:!0});var Uc=i(qi);ff=o(Uc,"TFBertModel"),Uc.forEach(n),hf=o(nt,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),Ls=a(nt,"A",{href:!0,rel:!0});var Kc=i(Ls);mf=o(Kc,"funnel-transformer/small"),Kc.forEach(n),gf=o(nt," architecture."),nt.forEach(n),_f=f(to),pt=a(to,"P",{});var oo=i(pt);kf=o(oo,"Configuration objects inherit from "),Pi=a(oo,"A",{href:!0});var Rc=i(Pi);Tf=o(Rc,"PretrainedConfig"),Rc.forEach(n),Ff=o(oo,` and can be used to control the model outputs. Read the
documentation from `),xi=a(oo,"A",{href:!0});var Hc=i(xi);bf=o(Hc,"PretrainedConfig"),Hc.forEach(n),wf=o(oo," for more information."),oo.forEach(n),to.forEach(n),nu=f(s),ft=a(s,"H2",{class:!0});var $i=i(ft);ro=a($i,"A",{id:!0,class:!0,href:!0});var Vc=i(ro);Sl=a(Vc,"SPAN",{});var Yc=i(Sl);w(Ds.$$.fragment,Yc),Yc.forEach(n),Vc.forEach(n),yf=f($i),Bl=a($i,"SPAN",{});var Gc=i(Bl);vf=o(Gc,"FunnelTokenizer"),Gc.forEach(n),$i.forEach(n),tu=f(s),en=a(s,"DIV",{class:!0});var kn=i(en);w(As.$$.fragment,kn),$f=f(kn),Wl=a(kn,"P",{});var Zc=i(Wl);Ef=o(Zc,"Construct a Funnel Transformer tokenizer. Based on WordPiece."),Zc.forEach(n),Mf=f(kn),Ns=a(kn,"P",{});var Ei=i(Ns);zf=o(Ei,"This tokenizer inherits from "),Ci=a(Ei,"A",{href:!0});var Xc=i(Ci);qf=o(Xc,"PreTrainedTokenizer"),Xc.forEach(n),Pf=o(Ei,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ei.forEach(n),xf=f(kn),tt=a(kn,"DIV",{class:!0});var so=i(tt);w(Is.$$.fragment,so),Cf=f(so),Ql=a(so,"P",{});var Jc=i(Ql);jf=o(Jc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Jc.forEach(n),Of=f(so),Ss=a(so,"UL",{});var Mi=i(Ss);ji=a(Mi,"LI",{});var kl=i(ji);Lf=o(kl,"single sequence: "),Ul=a(kl,"CODE",{});var zw=i(Ul);Df=o(zw,"[CLS] X [SEP]"),zw.forEach(n),kl.forEach(n),Af=f(Mi),Oi=a(Mi,"LI",{});var $w=i(Oi);Nf=o($w,"pair of sequences: "),Kl=a($w,"CODE",{});var qw=i(Kl);If=o(qw,"[CLS] A [SEP] B [SEP]"),qw.forEach(n),$w.forEach(n),Mi.forEach(n),so.forEach(n),Sf=f(kn),ao=a(kn,"DIV",{class:!0});var Bu=i(ao);w(Bs.$$.fragment,Bu),Bf=f(Bu),Ws=a(Bu,"P",{});var Wu=i(Ws);Wf=o(Wu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Rl=a(Wu,"CODE",{});var Pw=i(Rl);Qf=o(Pw,"prepare_for_model"),Pw.forEach(n),Uf=o(Wu," method."),Wu.forEach(n),Bu.forEach(n),Kf=f(kn),Dn=a(kn,"DIV",{class:!0});var vs=i(Dn);w(Qs.$$.fragment,vs),Rf=f(vs),Hl=a(vs,"P",{});var xw=i(Hl);Hf=o(xw,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),xw.forEach(n),Vf=f(vs),w(io.$$.fragment,vs),Yf=f(vs),ht=a(vs,"P",{});var Tl=i(ht);Gf=o(Tl,"If "),Vl=a(Tl,"CODE",{});var Cw=i(Vl);Zf=o(Cw,"token_ids_1"),Cw.forEach(n),Xf=o(Tl," is "),Yl=a(Tl,"CODE",{});var jw=i(Yl);Jf=o(jw,"None"),jw.forEach(n),eh=o(Tl,", this method only returns the first portion of the mask (0s)."),Tl.forEach(n),vs.forEach(n),nh=f(kn),Li=a(kn,"DIV",{class:!0});var Ow=i(Li);w(Us.$$.fragment,Ow),Ow.forEach(n),kn.forEach(n),ou=f(s),mt=a(s,"H2",{class:!0});var Qu=i(mt);lo=a(Qu,"A",{id:!0,class:!0,href:!0});var Lw=i(lo);Gl=a(Lw,"SPAN",{});var Dw=i(Gl);w(Ks.$$.fragment,Dw),Dw.forEach(n),Lw.forEach(n),th=f(Qu),Zl=a(Qu,"SPAN",{});var Aw=i(Zl);oh=o(Aw,"FunnelTokenizerFast"),Aw.forEach(n),Qu.forEach(n),su=f(s),Tn=a(s,"DIV",{class:!0});var st=i(Tn);w(Rs.$$.fragment,st),sh=f(st),Hs=a(st,"P",{});var Uu=i(Hs);rh=o(Uu,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Xl=a(Uu,"EM",{});var Nw=i(Xl);ah=o(Nw,"tokenizers"),Nw.forEach(n),ih=o(Uu," library). Based on WordPiece."),Uu.forEach(n),lh=f(st),Vs=a(st,"P",{});var Ku=i(Vs);dh=o(Ku,"This tokenizer inherits from "),Di=a(Ku,"A",{href:!0});var Iw=i(Di);ch=o(Iw,"PreTrainedTokenizerFast"),Iw.forEach(n),uh=o(Ku,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ku.forEach(n),ph=f(st),ot=a(st,"DIV",{class:!0});var Fl=i(ot);w(Ys.$$.fragment,Fl),fh=f(Fl),Jl=a(Fl,"P",{});var Sw=i(Jl);hh=o(Sw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Funnel sequence has the following format:`),Sw.forEach(n),mh=f(Fl),Gs=a(Fl,"UL",{});var Ru=i(Gs);Ai=a(Ru,"LI",{});var Ew=i(Ai);gh=o(Ew,"single sequence: "),ed=a(Ew,"CODE",{});var Bw=i(ed);_h=o(Bw,"[CLS] X [SEP]"),Bw.forEach(n),Ew.forEach(n),kh=f(Ru),Ni=a(Ru,"LI",{});var Mw=i(Ni);Th=o(Mw,"pair of sequences: "),nd=a(Mw,"CODE",{});var Ww=i(nd);Fh=o(Ww,"[CLS] A [SEP] B [SEP]"),Ww.forEach(n),Mw.forEach(n),Ru.forEach(n),Fl.forEach(n),bh=f(st),An=a(st,"DIV",{class:!0});var $s=i(An);w(Zs.$$.fragment,$s),wh=f($s),td=a($s,"P",{});var Qw=i(td);yh=o(Qw,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Qw.forEach(n),vh=f($s),w(co.$$.fragment,$s),$h=f($s),gt=a($s,"P",{});var bl=i(gt);Eh=o(bl,"If "),od=a(bl,"CODE",{});var Uw=i(od);Mh=o(Uw,"token_ids_1"),Uw.forEach(n),zh=o(bl," is "),sd=a(bl,"CODE",{});var Kw=i(sd);qh=o(Kw,"None"),Kw.forEach(n),Ph=o(bl,", this method only returns the first portion of the mask (0s)."),bl.forEach(n),$s.forEach(n),st.forEach(n),ru=f(s),_t=a(s,"H2",{class:!0});var Hu=i(_t);uo=a(Hu,"A",{id:!0,class:!0,href:!0});var Rw=i(uo);rd=a(Rw,"SPAN",{});var Hw=i(rd);w(Xs.$$.fragment,Hw),Hw.forEach(n),Rw.forEach(n),xh=f(Hu),ad=a(Hu,"SPAN",{});var Vw=i(ad);Ch=o(Vw,"Funnel specific outputs"),Vw.forEach(n),Hu.forEach(n),au=f(s),kt=a(s,"DIV",{class:!0});var Vu=i(kt);w(Js.$$.fragment,Vu),jh=f(Vu),er=a(Vu,"P",{});var Yu=i(er);Oh=o(Yu,"Output type of "),Ii=a(Yu,"A",{href:!0});var Yw=i(Ii);Lh=o(Yw,"FunnelForPreTraining"),Yw.forEach(n),Dh=o(Yu,"."),Yu.forEach(n),Vu.forEach(n),iu=f(s),Tt=a(s,"DIV",{class:!0});var Gu=i(Tt);w(nr.$$.fragment,Gu),Ah=f(Gu),tr=a(Gu,"P",{});var Zu=i(tr);Nh=o(Zu,"Output type of "),Si=a(Zu,"A",{href:!0});var Gw=i(Si);Ih=o(Gw,"FunnelForPreTraining"),Gw.forEach(n),Sh=o(Zu,"."),Zu.forEach(n),Gu.forEach(n),lu=f(s),Ft=a(s,"H2",{class:!0});var Xu=i(Ft);po=a(Xu,"A",{id:!0,class:!0,href:!0});var Zw=i(po);id=a(Zw,"SPAN",{});var Xw=i(id);w(or.$$.fragment,Xw),Xw.forEach(n),Zw.forEach(n),Bh=f(Xu),ld=a(Xu,"SPAN",{});var Jw=i(ld);Wh=o(Jw,"FunnelBaseModel"),Jw.forEach(n),Xu.forEach(n),du=f(s),un=a(s,"DIV",{class:!0});var Rn=i(un);w(sr.$$.fragment,Rn),Qh=f(Rn),dd=a(Rn,"P",{});var ey=i(dd);Uh=o(ey,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),ey.forEach(n),Kh=f(Rn),rr=a(Rn,"P",{});var Ju=i(rr);Rh=o(Ju,"The Funnel Transformer model was proposed in "),ar=a(Ju,"A",{href:!0,rel:!0});var ny=i(ar);Hh=o(ny,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ny.forEach(n),Vh=o(Ju," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ju.forEach(n),Yh=f(Rn),ir=a(Rn,"P",{});var ep=i(ir);Gh=o(ep,"This model inherits from "),Bi=a(ep,"A",{href:!0});var ty=i(Bi);Zh=o(ty,"PreTrainedModel"),ty.forEach(n),Xh=o(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(n),Jh=f(Rn),lr=a(Rn,"P",{});var np=i(lr);em=o(np,"This model is also a PyTorch "),dr=a(np,"A",{href:!0,rel:!0});var oy=i(dr);nm=o(oy,"torch.nn.Module"),oy.forEach(n),tm=o(np,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),np.forEach(n),om=f(Rn),Nn=a(Rn,"DIV",{class:!0});var Es=i(Nn);w(cr.$$.fragment,Es),sm=f(Es),bt=a(Es,"P",{});var wl=i(bt);rm=o(wl,"The "),Wi=a(wl,"A",{href:!0});var sy=i(Wi);am=o(sy,"FunnelBaseModel"),sy.forEach(n),im=o(wl," forward method, overrides the "),cd=a(wl,"CODE",{});var ry=i(cd);lm=o(ry,"__call__"),ry.forEach(n),dm=o(wl," special method."),wl.forEach(n),cm=f(Es),w(fo.$$.fragment,Es),um=f(Es),w(ho.$$.fragment,Es),Es.forEach(n),Rn.forEach(n),cu=f(s),wt=a(s,"H2",{class:!0});var tp=i(wt);mo=a(tp,"A",{id:!0,class:!0,href:!0});var ay=i(mo);ud=a(ay,"SPAN",{});var iy=i(ud);w(ur.$$.fragment,iy),iy.forEach(n),ay.forEach(n),pm=f(tp),pd=a(tp,"SPAN",{});var ly=i(pd);fm=o(ly,"FunnelModel"),ly.forEach(n),tp.forEach(n),uu=f(s),pn=a(s,"DIV",{class:!0});var Hn=i(pn);w(pr.$$.fragment,Hn),hm=f(Hn),fd=a(Hn,"P",{});var dy=i(fd);mm=o(dy,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),dy.forEach(n),gm=f(Hn),fr=a(Hn,"P",{});var op=i(fr);_m=o(op,"The Funnel Transformer model was proposed in "),hr=a(op,"A",{href:!0,rel:!0});var cy=i(hr);km=o(cy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),cy.forEach(n),Tm=o(op," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),op.forEach(n),Fm=f(Hn),mr=a(Hn,"P",{});var sp=i(mr);bm=o(sp,"This model inherits from "),Qi=a(sp,"A",{href:!0});var uy=i(Qi);wm=o(uy,"PreTrainedModel"),uy.forEach(n),ym=o(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(n),vm=f(Hn),gr=a(Hn,"P",{});var rp=i(gr);$m=o(rp,"This model is also a PyTorch "),_r=a(rp,"A",{href:!0,rel:!0});var py=i(_r);Em=o(py,"torch.nn.Module"),py.forEach(n),Mm=o(rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp.forEach(n),zm=f(Hn),In=a(Hn,"DIV",{class:!0});var Ms=i(In);w(kr.$$.fragment,Ms),qm=f(Ms),yt=a(Ms,"P",{});var yl=i(yt);Pm=o(yl,"The "),Ui=a(yl,"A",{href:!0});var fy=i(Ui);xm=o(fy,"FunnelModel"),fy.forEach(n),Cm=o(yl," forward method, overrides the "),hd=a(yl,"CODE",{});var hy=i(hd);jm=o(hy,"__call__"),hy.forEach(n),Om=o(yl," special method."),yl.forEach(n),Lm=f(Ms),w(go.$$.fragment,Ms),Dm=f(Ms),w(_o.$$.fragment,Ms),Ms.forEach(n),Hn.forEach(n),pu=f(s),vt=a(s,"H2",{class:!0});var ap=i(vt);ko=a(ap,"A",{id:!0,class:!0,href:!0});var my=i(ko);md=a(my,"SPAN",{});var gy=i(md);w(Tr.$$.fragment,gy),gy.forEach(n),my.forEach(n),Am=f(ap),gd=a(ap,"SPAN",{});var _y=i(gd);Nm=o(_y,"FunnelModelForPreTraining"),_y.forEach(n),ap.forEach(n),fu=f(s),$t=a(s,"DIV",{class:!0});var ip=i($t);w(Fr.$$.fragment,ip),Im=f(ip),Sn=a(ip,"DIV",{class:!0});var zs=i(Sn);w(br.$$.fragment,zs),Sm=f(zs),Et=a(zs,"P",{});var vl=i(Et);Bm=o(vl,"The "),Ki=a(vl,"A",{href:!0});var ky=i(Ki);Wm=o(ky,"FunnelForPreTraining"),ky.forEach(n),Qm=o(vl," forward method, overrides the "),_d=a(vl,"CODE",{});var Ty=i(_d);Um=o(Ty,"__call__"),Ty.forEach(n),Km=o(vl," special method."),vl.forEach(n),Rm=f(zs),w(To.$$.fragment,zs),Hm=f(zs),w(Fo.$$.fragment,zs),zs.forEach(n),ip.forEach(n),hu=f(s),Mt=a(s,"H2",{class:!0});var lp=i(Mt);bo=a(lp,"A",{id:!0,class:!0,href:!0});var Fy=i(bo);kd=a(Fy,"SPAN",{});var by=i(kd);w(wr.$$.fragment,by),by.forEach(n),Fy.forEach(n),Vm=f(lp),Td=a(lp,"SPAN",{});var wy=i(Td);Ym=o(wy,"FunnelForMaskedLM"),wy.forEach(n),lp.forEach(n),mu=f(s),fn=a(s,"DIV",{class:!0});var Vn=i(fn);w(yr.$$.fragment,Vn),Gm=f(Vn),vr=a(Vn,"P",{});var dp=i(vr);Zm=o(dp,"Funnel Transformer Model with a "),Fd=a(dp,"CODE",{});var yy=i(Fd);Xm=o(yy,"language modeling"),yy.forEach(n),Jm=o(dp," head on top."),dp.forEach(n),eg=f(Vn),$r=a(Vn,"P",{});var cp=i($r);ng=o(cp,"The Funnel Transformer model was proposed in "),Er=a(cp,"A",{href:!0,rel:!0});var vy=i(Er);tg=o(vy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),vy.forEach(n),og=o(cp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),cp.forEach(n),sg=f(Vn),Mr=a(Vn,"P",{});var up=i(Mr);rg=o(up,"This model inherits from "),Ri=a(up,"A",{href:!0});var $y=i(Ri);ag=o($y,"PreTrainedModel"),$y.forEach(n),ig=o(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(n),lg=f(Vn),zr=a(Vn,"P",{});var pp=i(zr);dg=o(pp,"This model is also a PyTorch "),qr=a(pp,"A",{href:!0,rel:!0});var Ey=i(qr);cg=o(Ey,"torch.nn.Module"),Ey.forEach(n),ug=o(pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pp.forEach(n),pg=f(Vn),Fn=a(Vn,"DIV",{class:!0});var rt=i(Fn);w(Pr.$$.fragment,rt),fg=f(rt),zt=a(rt,"P",{});var $l=i(zt);hg=o($l,"The "),Hi=a($l,"A",{href:!0});var My=i(Hi);mg=o(My,"FunnelForMaskedLM"),My.forEach(n),gg=o($l," forward method, overrides the "),bd=a($l,"CODE",{});var zy=i(bd);_g=o(zy,"__call__"),zy.forEach(n),kg=o($l," special method."),$l.forEach(n),Tg=f(rt),w(wo.$$.fragment,rt),Fg=f(rt),w(yo.$$.fragment,rt),bg=f(rt),w(vo.$$.fragment,rt),rt.forEach(n),Vn.forEach(n),gu=f(s),qt=a(s,"H2",{class:!0});var fp=i(qt);$o=a(fp,"A",{id:!0,class:!0,href:!0});var qy=i($o);wd=a(qy,"SPAN",{});var Py=i(wd);w(xr.$$.fragment,Py),Py.forEach(n),qy.forEach(n),wg=f(fp),yd=a(fp,"SPAN",{});var xy=i(yd);yg=o(xy,"FunnelForSequenceClassification"),xy.forEach(n),fp.forEach(n),_u=f(s),hn=a(s,"DIV",{class:!0});var Yn=i(hn);w(Cr.$$.fragment,Yn),vg=f(Yn),vd=a(Yn,"P",{});var Cy=i(vd);$g=o(Cy,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Cy.forEach(n),Eg=f(Yn),jr=a(Yn,"P",{});var hp=i(jr);Mg=o(hp,"The Funnel Transformer model was proposed in "),Or=a(hp,"A",{href:!0,rel:!0});var jy=i(Or);zg=o(jy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),jy.forEach(n),qg=o(hp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),hp.forEach(n),Pg=f(Yn),Lr=a(Yn,"P",{});var mp=i(Lr);xg=o(mp,"This model inherits from "),Vi=a(mp,"A",{href:!0});var Oy=i(Vi);Cg=o(Oy,"PreTrainedModel"),Oy.forEach(n),jg=o(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(n),Og=f(Yn),Dr=a(Yn,"P",{});var gp=i(Dr);Lg=o(gp,"This model is also a PyTorch "),Ar=a(gp,"A",{href:!0,rel:!0});var Ly=i(Ar);Dg=o(Ly,"torch.nn.Module"),Ly.forEach(n),Ag=o(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(n),Ng=f(Yn),cn=a(Yn,"DIV",{class:!0});var Mn=i(cn);w(Nr.$$.fragment,Mn),Ig=f(Mn),Pt=a(Mn,"P",{});var El=i(Pt);Sg=o(El,"The "),Yi=a(El,"A",{href:!0});var Dy=i(Yi);Bg=o(Dy,"FunnelForSequenceClassification"),Dy.forEach(n),Wg=o(El," forward method, overrides the "),$d=a(El,"CODE",{});var Ay=i($d);Qg=o(Ay,"__call__"),Ay.forEach(n),Ug=o(El," special method."),El.forEach(n),Kg=f(Mn),w(Eo.$$.fragment,Mn),Rg=f(Mn),w(Mo.$$.fragment,Mn),Hg=f(Mn),w(zo.$$.fragment,Mn),Vg=f(Mn),w(qo.$$.fragment,Mn),Yg=f(Mn),w(Po.$$.fragment,Mn),Mn.forEach(n),Yn.forEach(n),ku=f(s),xt=a(s,"H2",{class:!0});var _p=i(xt);xo=a(_p,"A",{id:!0,class:!0,href:!0});var Ny=i(xo);Ed=a(Ny,"SPAN",{});var Iy=i(Ed);w(Ir.$$.fragment,Iy),Iy.forEach(n),Ny.forEach(n),Gg=f(_p),Md=a(_p,"SPAN",{});var Sy=i(Md);Zg=o(Sy,"FunnelForMultipleChoice"),Sy.forEach(n),_p.forEach(n),Tu=f(s),mn=a(s,"DIV",{class:!0});var Gn=i(mn);w(Sr.$$.fragment,Gn),Xg=f(Gn),zd=a(Gn,"P",{});var By=i(zd);Jg=o(By,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),By.forEach(n),e_=f(Gn),Br=a(Gn,"P",{});var kp=i(Br);n_=o(kp,"The Funnel Transformer model was proposed in "),Wr=a(kp,"A",{href:!0,rel:!0});var Wy=i(Wr);t_=o(Wy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Wy.forEach(n),o_=o(kp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),kp.forEach(n),s_=f(Gn),Qr=a(Gn,"P",{});var Tp=i(Qr);r_=o(Tp,"This model inherits from "),Gi=a(Tp,"A",{href:!0});var Qy=i(Gi);a_=o(Qy,"PreTrainedModel"),Qy.forEach(n),i_=o(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(n),l_=f(Gn),Ur=a(Gn,"P",{});var Fp=i(Ur);d_=o(Fp,"This model is also a PyTorch "),Kr=a(Fp,"A",{href:!0,rel:!0});var Uy=i(Kr);c_=o(Uy,"torch.nn.Module"),Uy.forEach(n),u_=o(Fp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fp.forEach(n),p_=f(Gn),Bn=a(Gn,"DIV",{class:!0});var qs=i(Bn);w(Rr.$$.fragment,qs),f_=f(qs),Ct=a(qs,"P",{});var Ml=i(Ct);h_=o(Ml,"The "),Zi=a(Ml,"A",{href:!0});var Ky=i(Zi);m_=o(Ky,"FunnelForMultipleChoice"),Ky.forEach(n),g_=o(Ml," forward method, overrides the "),qd=a(Ml,"CODE",{});var Ry=i(qd);__=o(Ry,"__call__"),Ry.forEach(n),k_=o(Ml," special method."),Ml.forEach(n),T_=f(qs),w(Co.$$.fragment,qs),F_=f(qs),w(jo.$$.fragment,qs),qs.forEach(n),Gn.forEach(n),Fu=f(s),jt=a(s,"H2",{class:!0});var bp=i(jt);Oo=a(bp,"A",{id:!0,class:!0,href:!0});var Hy=i(Oo);Pd=a(Hy,"SPAN",{});var Vy=i(Pd);w(Hr.$$.fragment,Vy),Vy.forEach(n),Hy.forEach(n),b_=f(bp),xd=a(bp,"SPAN",{});var Yy=i(xd);w_=o(Yy,"FunnelForTokenClassification"),Yy.forEach(n),bp.forEach(n),bu=f(s),gn=a(s,"DIV",{class:!0});var Zn=i(gn);w(Vr.$$.fragment,Zn),y_=f(Zn),Cd=a(Zn,"P",{});var Gy=i(Cd);v_=o(Gy,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Gy.forEach(n),$_=f(Zn),Yr=a(Zn,"P",{});var wp=i(Yr);E_=o(wp,"The Funnel Transformer model was proposed in "),Gr=a(wp,"A",{href:!0,rel:!0});var Zy=i(Gr);M_=o(Zy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Zy.forEach(n),z_=o(wp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),wp.forEach(n),q_=f(Zn),Zr=a(Zn,"P",{});var yp=i(Zr);P_=o(yp,"This model inherits from "),Xi=a(yp,"A",{href:!0});var Xy=i(Xi);x_=o(Xy,"PreTrainedModel"),Xy.forEach(n),C_=o(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(n),j_=f(Zn),Xr=a(Zn,"P",{});var vp=i(Xr);O_=o(vp,"This model is also a PyTorch "),Jr=a(vp,"A",{href:!0,rel:!0});var Jy=i(Jr);L_=o(Jy,"torch.nn.Module"),Jy.forEach(n),D_=o(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(n),A_=f(Zn),bn=a(Zn,"DIV",{class:!0});var at=i(bn);w(ea.$$.fragment,at),N_=f(at),Ot=a(at,"P",{});var zl=i(Ot);I_=o(zl,"The "),Ji=a(zl,"A",{href:!0});var ev=i(Ji);S_=o(ev,"FunnelForTokenClassification"),ev.forEach(n),B_=o(zl," forward method, overrides the "),jd=a(zl,"CODE",{});var nv=i(jd);W_=o(nv,"__call__"),nv.forEach(n),Q_=o(zl," special method."),zl.forEach(n),U_=f(at),w(Lo.$$.fragment,at),K_=f(at),w(Do.$$.fragment,at),R_=f(at),w(Ao.$$.fragment,at),at.forEach(n),Zn.forEach(n),wu=f(s),Lt=a(s,"H2",{class:!0});var $p=i(Lt);No=a($p,"A",{id:!0,class:!0,href:!0});var tv=i(No);Od=a(tv,"SPAN",{});var ov=i(Od);w(na.$$.fragment,ov),ov.forEach(n),tv.forEach(n),H_=f($p),Ld=a($p,"SPAN",{});var sv=i(Ld);V_=o(sv,"FunnelForQuestionAnswering"),sv.forEach(n),$p.forEach(n),yu=f(s),_n=a(s,"DIV",{class:!0});var Xn=i(_n);w(ta.$$.fragment,Xn),Y_=f(Xn),Dt=a(Xn,"P",{});var ql=i(Dt);G_=o(ql,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),Dd=a(ql,"CODE",{});var rv=i(Dd);Z_=o(rv,"span start logits"),rv.forEach(n),X_=o(ql," and "),Ad=a(ql,"CODE",{});var av=i(Ad);J_=o(av,"span end logits"),av.forEach(n),ek=o(ql,")."),ql.forEach(n),nk=f(Xn),oa=a(Xn,"P",{});var Ep=i(oa);tk=o(Ep,"The Funnel Transformer model was proposed in "),sa=a(Ep,"A",{href:!0,rel:!0});var iv=i(sa);ok=o(iv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),iv.forEach(n),sk=o(Ep," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Ep.forEach(n),rk=f(Xn),ra=a(Xn,"P",{});var Mp=i(ra);ak=o(Mp,"This model inherits from "),el=a(Mp,"A",{href:!0});var lv=i(el);ik=o(lv,"PreTrainedModel"),lv.forEach(n),lk=o(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(n),dk=f(Xn),aa=a(Xn,"P",{});var zp=i(aa);ck=o(zp,"This model is also a PyTorch "),ia=a(zp,"A",{href:!0,rel:!0});var dv=i(ia);uk=o(dv,"torch.nn.Module"),dv.forEach(n),pk=o(zp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zp.forEach(n),fk=f(Xn),wn=a(Xn,"DIV",{class:!0});var it=i(wn);w(la.$$.fragment,it),hk=f(it),At=a(it,"P",{});var Pl=i(At);mk=o(Pl,"The "),nl=a(Pl,"A",{href:!0});var cv=i(nl);gk=o(cv,"FunnelForQuestionAnswering"),cv.forEach(n),_k=o(Pl," forward method, overrides the "),Nd=a(Pl,"CODE",{});var uv=i(Nd);kk=o(uv,"__call__"),uv.forEach(n),Tk=o(Pl," special method."),Pl.forEach(n),Fk=f(it),w(Io.$$.fragment,it),bk=f(it),w(So.$$.fragment,it),wk=f(it),w(Bo.$$.fragment,it),it.forEach(n),Xn.forEach(n),vu=f(s),Nt=a(s,"H2",{class:!0});var qp=i(Nt);Wo=a(qp,"A",{id:!0,class:!0,href:!0});var pv=i(Wo);Id=a(pv,"SPAN",{});var fv=i(Id);w(da.$$.fragment,fv),fv.forEach(n),pv.forEach(n),yk=f(qp),Sd=a(qp,"SPAN",{});var hv=i(Sd);vk=o(hv,"TFFunnelBaseModel"),hv.forEach(n),qp.forEach(n),$u=f(s),nn=a(s,"DIV",{class:!0});var zn=i(nn);w(ca.$$.fragment,zn),$k=f(zn),Bd=a(zn,"P",{});var mv=i(Bd);Ek=o(mv,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),mv.forEach(n),Mk=f(zn),ua=a(zn,"P",{});var Pp=i(ua);zk=o(Pp,"The Funnel Transformer model was proposed in "),pa=a(Pp,"A",{href:!0,rel:!0});var gv=i(pa);qk=o(gv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),gv.forEach(n),Pk=o(Pp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pp.forEach(n),xk=f(zn),fa=a(zn,"P",{});var xp=i(fa);Ck=o(xp,"This model inherits from "),tl=a(xp,"A",{href:!0});var _v=i(tl);jk=o(_v,"TFPreTrainedModel"),_v.forEach(n),Ok=o(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(n),Lk=f(zn),ha=a(zn,"P",{});var Cp=i(ha);Dk=o(Cp,"This model is also a "),ma=a(Cp,"A",{href:!0,rel:!0});var kv=i(ma);Ak=o(kv,"tf.keras.Model"),kv.forEach(n),Nk=o(Cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cp.forEach(n),Ik=f(zn),w(Qo.$$.fragment,zn),Sk=f(zn),Wn=a(zn,"DIV",{class:!0});var Ps=i(Wn);w(ga.$$.fragment,Ps),Bk=f(Ps),It=a(Ps,"P",{});var xl=i(It);Wk=o(xl,"The "),ol=a(xl,"A",{href:!0});var Tv=i(ol);Qk=o(Tv,"TFFunnelBaseModel"),Tv.forEach(n),Uk=o(xl," forward method, overrides the "),Wd=a(xl,"CODE",{});var Fv=i(Wd);Kk=o(Fv,"__call__"),Fv.forEach(n),Rk=o(xl," special method."),xl.forEach(n),Hk=f(Ps),w(Uo.$$.fragment,Ps),Vk=f(Ps),w(Ko.$$.fragment,Ps),Ps.forEach(n),zn.forEach(n),Eu=f(s),St=a(s,"H2",{class:!0});var jp=i(St);Ro=a(jp,"A",{id:!0,class:!0,href:!0});var bv=i(Ro);Qd=a(bv,"SPAN",{});var wv=i(Qd);w(_a.$$.fragment,wv),wv.forEach(n),bv.forEach(n),Yk=f(jp),Ud=a(jp,"SPAN",{});var yv=i(Ud);Gk=o(yv,"TFFunnelModel"),yv.forEach(n),jp.forEach(n),Mu=f(s),tn=a(s,"DIV",{class:!0});var qn=i(tn);w(ka.$$.fragment,qn),Zk=f(qn),Kd=a(qn,"P",{});var vv=i(Kd);Xk=o(vv,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),vv.forEach(n),Jk=f(qn),Ta=a(qn,"P",{});var Op=i(Ta);eT=o(Op,"The Funnel Transformer model was proposed in "),Fa=a(Op,"A",{href:!0,rel:!0});var $v=i(Fa);nT=o($v,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),$v.forEach(n),tT=o(Op," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Op.forEach(n),oT=f(qn),ba=a(qn,"P",{});var Lp=i(ba);sT=o(Lp,"This model inherits from "),sl=a(Lp,"A",{href:!0});var Ev=i(sl);rT=o(Ev,"TFPreTrainedModel"),Ev.forEach(n),aT=o(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp.forEach(n),iT=f(qn),wa=a(qn,"P",{});var Dp=i(wa);lT=o(Dp,"This model is also a "),ya=a(Dp,"A",{href:!0,rel:!0});var Mv=i(ya);dT=o(Mv,"tf.keras.Model"),Mv.forEach(n),cT=o(Dp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dp.forEach(n),uT=f(qn),w(Ho.$$.fragment,qn),pT=f(qn),Qn=a(qn,"DIV",{class:!0});var xs=i(Qn);w(va.$$.fragment,xs),fT=f(xs),Bt=a(xs,"P",{});var Cl=i(Bt);hT=o(Cl,"The "),rl=a(Cl,"A",{href:!0});var zv=i(rl);mT=o(zv,"TFFunnelModel"),zv.forEach(n),gT=o(Cl," forward method, overrides the "),Rd=a(Cl,"CODE",{});var qv=i(Rd);_T=o(qv,"__call__"),qv.forEach(n),kT=o(Cl," special method."),Cl.forEach(n),TT=f(xs),w(Vo.$$.fragment,xs),FT=f(xs),w(Yo.$$.fragment,xs),xs.forEach(n),qn.forEach(n),zu=f(s),Wt=a(s,"H2",{class:!0});var Ap=i(Wt);Go=a(Ap,"A",{id:!0,class:!0,href:!0});var Pv=i(Go);Hd=a(Pv,"SPAN",{});var xv=i(Hd);w($a.$$.fragment,xv),xv.forEach(n),Pv.forEach(n),bT=f(Ap),Vd=a(Ap,"SPAN",{});var Cv=i(Vd);wT=o(Cv,"TFFunnelModelForPreTraining"),Cv.forEach(n),Ap.forEach(n),qu=f(s),on=a(s,"DIV",{class:!0});var Pn=i(on);w(Ea.$$.fragment,Pn),yT=f(Pn),Yd=a(Pn,"P",{});var jv=i(Yd);vT=o(jv,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),jv.forEach(n),$T=f(Pn),Ma=a(Pn,"P",{});var Np=i(Ma);ET=o(Np,"The Funnel Transformer model was proposed in "),za=a(Np,"A",{href:!0,rel:!0});var Ov=i(za);MT=o(Ov,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Ov.forEach(n),zT=o(Np," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Np.forEach(n),qT=f(Pn),qa=a(Pn,"P",{});var Ip=i(qa);PT=o(Ip,"This model inherits from "),al=a(Ip,"A",{href:!0});var Lv=i(al);xT=o(Lv,"TFPreTrainedModel"),Lv.forEach(n),CT=o(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ip.forEach(n),jT=f(Pn),Pa=a(Pn,"P",{});var Sp=i(Pa);OT=o(Sp,"This model is also a "),xa=a(Sp,"A",{href:!0,rel:!0});var Dv=i(xa);LT=o(Dv,"tf.keras.Model"),Dv.forEach(n),DT=o(Sp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sp.forEach(n),AT=f(Pn),w(Zo.$$.fragment,Pn),NT=f(Pn),Un=a(Pn,"DIV",{class:!0});var Cs=i(Un);w(Ca.$$.fragment,Cs),IT=f(Cs),Qt=a(Cs,"P",{});var jl=i(Qt);ST=o(jl,"The "),il=a(jl,"A",{href:!0});var Av=i(il);BT=o(Av,"TFFunnelForPreTraining"),Av.forEach(n),WT=o(jl," forward method, overrides the "),Gd=a(jl,"CODE",{});var Nv=i(Gd);QT=o(Nv,"__call__"),Nv.forEach(n),UT=o(jl," special method."),jl.forEach(n),KT=f(Cs),w(Xo.$$.fragment,Cs),RT=f(Cs),w(Jo.$$.fragment,Cs),Cs.forEach(n),Pn.forEach(n),Pu=f(s),Ut=a(s,"H2",{class:!0});var Bp=i(Ut);es=a(Bp,"A",{id:!0,class:!0,href:!0});var Iv=i(es);Zd=a(Iv,"SPAN",{});var Sv=i(Zd);w(ja.$$.fragment,Sv),Sv.forEach(n),Iv.forEach(n),HT=f(Bp),Xd=a(Bp,"SPAN",{});var Bv=i(Xd);VT=o(Bv,"TFFunnelForMaskedLM"),Bv.forEach(n),Bp.forEach(n),xu=f(s),sn=a(s,"DIV",{class:!0});var xn=i(sn);w(Oa.$$.fragment,xn),YT=f(xn),La=a(xn,"P",{});var Wp=i(La);GT=o(Wp,"Funnel Model with a "),Jd=a(Wp,"CODE",{});var Wv=i(Jd);ZT=o(Wv,"language modeling"),Wv.forEach(n),XT=o(Wp," head on top."),Wp.forEach(n),JT=f(xn),Da=a(xn,"P",{});var Qp=i(Da);eF=o(Qp,"The Funnel Transformer model was proposed in "),Aa=a(Qp,"A",{href:!0,rel:!0});var Qv=i(Aa);nF=o(Qv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Qv.forEach(n),tF=o(Qp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Qp.forEach(n),oF=f(xn),Na=a(xn,"P",{});var Up=i(Na);sF=o(Up,"This model inherits from "),ll=a(Up,"A",{href:!0});var Uv=i(ll);rF=o(Uv,"TFPreTrainedModel"),Uv.forEach(n),aF=o(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up.forEach(n),iF=f(xn),Ia=a(xn,"P",{});var Kp=i(Ia);lF=o(Kp,"This model is also a "),Sa=a(Kp,"A",{href:!0,rel:!0});var Kv=i(Sa);dF=o(Kv,"tf.keras.Model"),Kv.forEach(n),cF=o(Kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kp.forEach(n),uF=f(xn),w(ns.$$.fragment,xn),pF=f(xn),yn=a(xn,"DIV",{class:!0});var lt=i(yn);w(Ba.$$.fragment,lt),fF=f(lt),Kt=a(lt,"P",{});var Ol=i(Kt);hF=o(Ol,"The "),dl=a(Ol,"A",{href:!0});var Rv=i(dl);mF=o(Rv,"TFFunnelForMaskedLM"),Rv.forEach(n),gF=o(Ol," forward method, overrides the "),ec=a(Ol,"CODE",{});var Hv=i(ec);_F=o(Hv,"__call__"),Hv.forEach(n),kF=o(Ol," special method."),Ol.forEach(n),TF=f(lt),w(ts.$$.fragment,lt),FF=f(lt),w(os.$$.fragment,lt),bF=f(lt),w(ss.$$.fragment,lt),lt.forEach(n),xn.forEach(n),Cu=f(s),Rt=a(s,"H2",{class:!0});var Rp=i(Rt);rs=a(Rp,"A",{id:!0,class:!0,href:!0});var Vv=i(rs);nc=a(Vv,"SPAN",{});var Yv=i(nc);w(Wa.$$.fragment,Yv),Yv.forEach(n),Vv.forEach(n),wF=f(Rp),tc=a(Rp,"SPAN",{});var Gv=i(tc);yF=o(Gv,"TFFunnelForSequenceClassification"),Gv.forEach(n),Rp.forEach(n),ju=f(s),rn=a(s,"DIV",{class:!0});var Cn=i(rn);w(Qa.$$.fragment,Cn),vF=f(Cn),oc=a(Cn,"P",{});var Zv=i(oc);$F=o(Zv,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Zv.forEach(n),EF=f(Cn),Ua=a(Cn,"P",{});var Hp=i(Ua);MF=o(Hp,"The Funnel Transformer model was proposed in "),Ka=a(Hp,"A",{href:!0,rel:!0});var Xv=i(Ka);zF=o(Xv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Xv.forEach(n),qF=o(Hp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Hp.forEach(n),PF=f(Cn),Ra=a(Cn,"P",{});var Vp=i(Ra);xF=o(Vp,"This model inherits from "),cl=a(Vp,"A",{href:!0});var Jv=i(cl);CF=o(Jv,"TFPreTrainedModel"),Jv.forEach(n),jF=o(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp.forEach(n),OF=f(Cn),Ha=a(Cn,"P",{});var Yp=i(Ha);LF=o(Yp,"This model is also a "),Va=a(Yp,"A",{href:!0,rel:!0});var e$=i(Va);DF=o(e$,"tf.keras.Model"),e$.forEach(n),AF=o(Yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yp.forEach(n),NF=f(Cn),w(as.$$.fragment,Cn),IF=f(Cn),vn=a(Cn,"DIV",{class:!0});var dt=i(vn);w(Ya.$$.fragment,dt),SF=f(dt),Ht=a(dt,"P",{});var Ll=i(Ht);BF=o(Ll,"The "),ul=a(Ll,"A",{href:!0});var n$=i(ul);WF=o(n$,"TFFunnelForSequenceClassification"),n$.forEach(n),QF=o(Ll," forward method, overrides the "),sc=a(Ll,"CODE",{});var t$=i(sc);UF=o(t$,"__call__"),t$.forEach(n),KF=o(Ll," special method."),Ll.forEach(n),RF=f(dt),w(is.$$.fragment,dt),HF=f(dt),w(ls.$$.fragment,dt),VF=f(dt),w(ds.$$.fragment,dt),dt.forEach(n),Cn.forEach(n),Ou=f(s),Vt=a(s,"H2",{class:!0});var Gp=i(Vt);cs=a(Gp,"A",{id:!0,class:!0,href:!0});var o$=i(cs);rc=a(o$,"SPAN",{});var s$=i(rc);w(Ga.$$.fragment,s$),s$.forEach(n),o$.forEach(n),YF=f(Gp),ac=a(Gp,"SPAN",{});var r$=i(ac);GF=o(r$,"TFFunnelForMultipleChoice"),r$.forEach(n),Gp.forEach(n),Lu=f(s),an=a(s,"DIV",{class:!0});var jn=i(an);w(Za.$$.fragment,jn),ZF=f(jn),ic=a(jn,"P",{});var a$=i(ic);XF=o(a$,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a$.forEach(n),JF=f(jn),Xa=a(jn,"P",{});var Zp=i(Xa);eb=o(Zp,"The Funnel Transformer model was proposed in "),Ja=a(Zp,"A",{href:!0,rel:!0});var i$=i(Ja);nb=o(i$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),i$.forEach(n),tb=o(Zp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Zp.forEach(n),ob=f(jn),ei=a(jn,"P",{});var Xp=i(ei);sb=o(Xp,"This model inherits from "),pl=a(Xp,"A",{href:!0});var l$=i(pl);rb=o(l$,"TFPreTrainedModel"),l$.forEach(n),ab=o(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(n),ib=f(jn),ni=a(jn,"P",{});var Jp=i(ni);lb=o(Jp,"This model is also a "),ti=a(Jp,"A",{href:!0,rel:!0});var d$=i(ti);db=o(d$,"tf.keras.Model"),d$.forEach(n),cb=o(Jp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jp.forEach(n),ub=f(jn),w(us.$$.fragment,jn),pb=f(jn),Kn=a(jn,"DIV",{class:!0});var js=i(Kn);w(oi.$$.fragment,js),fb=f(js),Yt=a(js,"P",{});var Dl=i(Yt);hb=o(Dl,"The "),fl=a(Dl,"A",{href:!0});var c$=i(fl);mb=o(c$,"TFFunnelForMultipleChoice"),c$.forEach(n),gb=o(Dl," forward method, overrides the "),lc=a(Dl,"CODE",{});var u$=i(lc);_b=o(u$,"__call__"),u$.forEach(n),kb=o(Dl," special method."),Dl.forEach(n),Tb=f(js),w(ps.$$.fragment,js),Fb=f(js),w(fs.$$.fragment,js),js.forEach(n),jn.forEach(n),Du=f(s),Gt=a(s,"H2",{class:!0});var ef=i(Gt);hs=a(ef,"A",{id:!0,class:!0,href:!0});var p$=i(hs);dc=a(p$,"SPAN",{});var f$=i(dc);w(si.$$.fragment,f$),f$.forEach(n),p$.forEach(n),bb=f(ef),cc=a(ef,"SPAN",{});var h$=i(cc);wb=o(h$,"TFFunnelForTokenClassification"),h$.forEach(n),ef.forEach(n),Au=f(s),ln=a(s,"DIV",{class:!0});var On=i(ln);w(ri.$$.fragment,On),yb=f(On),uc=a(On,"P",{});var m$=i(uc);vb=o(m$,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),m$.forEach(n),$b=f(On),ai=a(On,"P",{});var nf=i(ai);Eb=o(nf,"The Funnel Transformer model was proposed in "),ii=a(nf,"A",{href:!0,rel:!0});var g$=i(ii);Mb=o(g$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),g$.forEach(n),zb=o(nf," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),nf.forEach(n),qb=f(On),li=a(On,"P",{});var tf=i(li);Pb=o(tf,"This model inherits from "),hl=a(tf,"A",{href:!0});var _$=i(hl);xb=o(_$,"TFPreTrainedModel"),_$.forEach(n),Cb=o(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(n),jb=f(On),di=a(On,"P",{});var of=i(di);Ob=o(of,"This model is also a "),ci=a(of,"A",{href:!0,rel:!0});var k$=i(ci);Lb=o(k$,"tf.keras.Model"),k$.forEach(n),Db=o(of,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),of.forEach(n),Ab=f(On),w(ms.$$.fragment,On),Nb=f(On),$n=a(On,"DIV",{class:!0});var ct=i($n);w(ui.$$.fragment,ct),Ib=f(ct),Zt=a(ct,"P",{});var Al=i(Zt);Sb=o(Al,"The "),ml=a(Al,"A",{href:!0});var T$=i(ml);Bb=o(T$,"TFFunnelForTokenClassification"),T$.forEach(n),Wb=o(Al," forward method, overrides the "),pc=a(Al,"CODE",{});var F$=i(pc);Qb=o(F$,"__call__"),F$.forEach(n),Ub=o(Al," special method."),Al.forEach(n),Kb=f(ct),w(gs.$$.fragment,ct),Rb=f(ct),w(_s.$$.fragment,ct),Hb=f(ct),w(ks.$$.fragment,ct),ct.forEach(n),On.forEach(n),Nu=f(s),Xt=a(s,"H2",{class:!0});var sf=i(Xt);Ts=a(sf,"A",{id:!0,class:!0,href:!0});var b$=i(Ts);fc=a(b$,"SPAN",{});var w$=i(fc);w(pi.$$.fragment,w$),w$.forEach(n),b$.forEach(n),Vb=f(sf),hc=a(sf,"SPAN",{});var y$=i(hc);Yb=o(y$,"TFFunnelForQuestionAnswering"),y$.forEach(n),sf.forEach(n),Iu=f(s),dn=a(s,"DIV",{class:!0});var Ln=i(dn);w(fi.$$.fragment,Ln),Gb=f(Ln),Jt=a(Ln,"P",{});var Nl=i(Jt);Zb=o(Nl,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mc=a(Nl,"CODE",{});var v$=i(mc);Xb=o(v$,"span start logits"),v$.forEach(n),Jb=o(Nl," and "),gc=a(Nl,"CODE",{});var $$=i(gc);ew=o($$,"span end logits"),$$.forEach(n),nw=o(Nl,")."),Nl.forEach(n),tw=f(Ln),hi=a(Ln,"P",{});var rf=i(hi);ow=o(rf,"The Funnel Transformer model was proposed in "),mi=a(rf,"A",{href:!0,rel:!0});var E$=i(mi);sw=o(E$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),E$.forEach(n),rw=o(rf," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rf.forEach(n),aw=f(Ln),gi=a(Ln,"P",{});var af=i(gi);iw=o(af,"This model inherits from "),gl=a(af,"A",{href:!0});var M$=i(gl);lw=o(M$,"TFPreTrainedModel"),M$.forEach(n),dw=o(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(n),cw=f(Ln),_i=a(Ln,"P",{});var lf=i(_i);uw=o(lf,"This model is also a "),ki=a(lf,"A",{href:!0,rel:!0});var z$=i(ki);pw=o(z$,"tf.keras.Model"),z$.forEach(n),fw=o(lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf.forEach(n),hw=f(Ln),w(Fs.$$.fragment,Ln),mw=f(Ln),En=a(Ln,"DIV",{class:!0});var ut=i(En);w(Ti.$$.fragment,ut),gw=f(ut),eo=a(ut,"P",{});var Il=i(eo);_w=o(Il,"The "),_l=a(Il,"A",{href:!0});var q$=i(_l);kw=o(q$,"TFFunnelForQuestionAnswering"),q$.forEach(n),Tw=o(Il," forward method, overrides the "),_c=a(Il,"CODE",{});var P$=i(_c);Fw=o(P$,"__call__"),P$.forEach(n),bw=o(Il," special method."),Il.forEach(n),ww=f(ut),w(bs.$$.fragment,ut),yw=f(ut),w(ws.$$.fragment,ut),vw=f(ut),w(ys.$$.fragment,ut),ut.forEach(n),Ln.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(L1)),m(h,"id","funnel-transformer"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#funnel-transformer"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://arxiv.org/abs/2006.03236"),m(ae,"rel","nofollow"),m(j,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(le,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(de,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(ce,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(D,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),m(g,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(J,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(De,"href","https://huggingface.co/sgugger"),m(De,"rel","nofollow"),m(A,"href","https://github.com/laiguokun/Funnel-Transformer"),m(A,"rel","nofollow"),m(Le,"id","transformers.FunnelConfig"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.FunnelConfig"),m(S,"class","relative group"),m(zi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(qi,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),m(Ls,"href","https://huggingface.co/funnel-transformer/small"),m(Ls,"rel","nofollow"),m(Pi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(xi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ro,"id","transformers.FunnelTokenizer"),m(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ro,"href","#transformers.FunnelTokenizer"),m(ft,"class","relative group"),m(Ci,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Li,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelTokenizerFast"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelTokenizerFast"),m(mt,"class","relative group"),m(Di,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(uo,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(_t,"class","relative group"),m(Ii,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Si,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"id","transformers.FunnelBaseModel"),m(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(po,"href","#transformers.FunnelBaseModel"),m(Ft,"class","relative group"),m(ar,"href","https://arxiv.org/abs/2006.03236"),m(ar,"rel","nofollow"),m(Bi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(Wi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"id","transformers.FunnelModel"),m(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mo,"href","#transformers.FunnelModel"),m(wt,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.03236"),m(hr,"rel","nofollow"),m(Qi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(Ui,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ko,"id","transformers.FunnelForPreTraining"),m(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ko,"href","#transformers.FunnelForPreTraining"),m(vt,"class","relative group"),m(Ki,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bo,"id","transformers.FunnelForMaskedLM"),m(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(bo,"href","#transformers.FunnelForMaskedLM"),m(Mt,"class","relative group"),m(Er,"href","https://arxiv.org/abs/2006.03236"),m(Er,"rel","nofollow"),m(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Hi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"id","transformers.FunnelForSequenceClassification"),m($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($o,"href","#transformers.FunnelForSequenceClassification"),m(qt,"class","relative group"),m(Or,"href","https://arxiv.org/abs/2006.03236"),m(Or,"rel","nofollow"),m(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ar,"rel","nofollow"),m(Yi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.FunnelForMultipleChoice"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.FunnelForMultipleChoice"),m(xt,"class","relative group"),m(Wr,"href","https://arxiv.org/abs/2006.03236"),m(Wr,"rel","nofollow"),m(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Kr,"rel","nofollow"),m(Zi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"id","transformers.FunnelForTokenClassification"),m(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oo,"href","#transformers.FunnelForTokenClassification"),m(jt,"class","relative group"),m(Gr,"href","https://arxiv.org/abs/2006.03236"),m(Gr,"rel","nofollow"),m(Xi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jr,"rel","nofollow"),m(Ji,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","transformers.FunnelForQuestionAnswering"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#transformers.FunnelForQuestionAnswering"),m(Lt,"class","relative group"),m(sa,"href","https://arxiv.org/abs/2006.03236"),m(sa,"rel","nofollow"),m(el,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ia,"rel","nofollow"),m(nl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","transformers.TFFunnelBaseModel"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#transformers.TFFunnelBaseModel"),m(Nt,"class","relative group"),m(pa,"href","https://arxiv.org/abs/2006.03236"),m(pa,"rel","nofollow"),m(tl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ma,"rel","nofollow"),m(ol,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"id","transformers.TFFunnelModel"),m(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ro,"href","#transformers.TFFunnelModel"),m(St,"class","relative group"),m(Fa,"href","https://arxiv.org/abs/2006.03236"),m(Fa,"rel","nofollow"),m(sl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ya,"rel","nofollow"),m(rl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelModel"),m(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","transformers.TFFunnelForPreTraining"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#transformers.TFFunnelForPreTraining"),m(Wt,"class","relative group"),m(za,"href","https://arxiv.org/abs/2006.03236"),m(za,"rel","nofollow"),m(al,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(xa,"rel","nofollow"),m(il,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(es,"id","transformers.TFFunnelForMaskedLM"),m(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(es,"href","#transformers.TFFunnelForMaskedLM"),m(Ut,"class","relative group"),m(Aa,"href","https://arxiv.org/abs/2006.03236"),m(Aa,"rel","nofollow"),m(ll,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sa,"rel","nofollow"),m(dl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rs,"id","transformers.TFFunnelForSequenceClassification"),m(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(rs,"href","#transformers.TFFunnelForSequenceClassification"),m(Rt,"class","relative group"),m(Ka,"href","https://arxiv.org/abs/2006.03236"),m(Ka,"rel","nofollow"),m(cl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Va,"rel","nofollow"),m(ul,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(cs,"id","transformers.TFFunnelForMultipleChoice"),m(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(cs,"href","#transformers.TFFunnelForMultipleChoice"),m(Vt,"class","relative group"),m(Ja,"href","https://arxiv.org/abs/2006.03236"),m(Ja,"rel","nofollow"),m(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ti,"rel","nofollow"),m(fl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hs,"id","transformers.TFFunnelForTokenClassification"),m(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(hs,"href","#transformers.TFFunnelForTokenClassification"),m(Gt,"class","relative group"),m(ii,"href","https://arxiv.org/abs/2006.03236"),m(ii,"rel","nofollow"),m(hl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ci,"rel","nofollow"),m(ml,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ts,"id","transformers.TFFunnelForQuestionAnswering"),m(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ts,"href","#transformers.TFFunnelForQuestionAnswering"),m(Xt,"class","relative group"),m(mi,"href","https://arxiv.org/abs/2006.03236"),m(mi,"rel","nofollow"),m(gl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ki,"rel","nofollow"),m(_l,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,T){e(document.head,d),_(s,k,T),_(s,c,T),e(c,h),e(h,F),y(l,F,null),e(c,u),e(c,x),e(x,ke),_(s,fe,T),_(s,I,T),e(I,re),e(re,ee),y(M,ee,null),e(I,Te),e(I,K),e(K,Fe),_(s,he,T),_(s,B,T),e(B,be),e(B,ae),e(ae,H),e(B,we),_(s,me,T),_(s,Q,T),e(Q,ye),_(s,ge,T),_(s,U,T),e(U,ue),e(ue,ve),_(s,oe,T),_(s,C,T),e(C,O),_(s,_e,T),_(s,W,T),e(W,pe),e(pe,$e),e(W,V),e(W,R),e(R,Ee),e(R,j),e(j,Me),e(R,Y),e(R,le),e(le,ze),e(R,G),e(R,de),e(de,qe),e(R,N),e(R,ce),e(ce,Z),e(R,Pe),e(R,ne),e(ne,L),e(R,xe),e(R,D),e(D,Ce),e(R,je),e(R,g),e(g,z),e(R,We),e(R,J),e(J,Qe),e(R,Ue),_(s,q,T),_(s,Oe,T),e(Oe,Ke),e(Oe,De),e(De,Re),e(Oe,He),e(Oe,A),e(A,X),e(Oe,Ve),_(s,Ne,T),_(s,S,T),e(S,Le),e(Le,Ae),y(ie,Ae,null),e(S,Ye),e(S,te),e(te,Ge),_(s,eu,T),_(s,Jn,T),y(Os,Jn,null),e(Jn,df),e(Jn,et),e(et,cf),e(et,zi),e(zi,uf),e(et,pf),e(et,qi),e(qi,ff),e(et,hf),e(et,Ls),e(Ls,mf),e(et,gf),e(Jn,_f),e(Jn,pt),e(pt,kf),e(pt,Pi),e(Pi,Tf),e(pt,Ff),e(pt,xi),e(xi,bf),e(pt,wf),_(s,nu,T),_(s,ft,T),e(ft,ro),e(ro,Sl),y(Ds,Sl,null),e(ft,yf),e(ft,Bl),e(Bl,vf),_(s,tu,T),_(s,en,T),y(As,en,null),e(en,$f),e(en,Wl),e(Wl,Ef),e(en,Mf),e(en,Ns),e(Ns,zf),e(Ns,Ci),e(Ci,qf),e(Ns,Pf),e(en,xf),e(en,tt),y(Is,tt,null),e(tt,Cf),e(tt,Ql),e(Ql,jf),e(tt,Of),e(tt,Ss),e(Ss,ji),e(ji,Lf),e(ji,Ul),e(Ul,Df),e(Ss,Af),e(Ss,Oi),e(Oi,Nf),e(Oi,Kl),e(Kl,If),e(en,Sf),e(en,ao),y(Bs,ao,null),e(ao,Bf),e(ao,Ws),e(Ws,Wf),e(Ws,Rl),e(Rl,Qf),e(Ws,Uf),e(en,Kf),e(en,Dn),y(Qs,Dn,null),e(Dn,Rf),e(Dn,Hl),e(Hl,Hf),e(Dn,Vf),y(io,Dn,null),e(Dn,Yf),e(Dn,ht),e(ht,Gf),e(ht,Vl),e(Vl,Zf),e(ht,Xf),e(ht,Yl),e(Yl,Jf),e(ht,eh),e(en,nh),e(en,Li),y(Us,Li,null),_(s,ou,T),_(s,mt,T),e(mt,lo),e(lo,Gl),y(Ks,Gl,null),e(mt,th),e(mt,Zl),e(Zl,oh),_(s,su,T),_(s,Tn,T),y(Rs,Tn,null),e(Tn,sh),e(Tn,Hs),e(Hs,rh),e(Hs,Xl),e(Xl,ah),e(Hs,ih),e(Tn,lh),e(Tn,Vs),e(Vs,dh),e(Vs,Di),e(Di,ch),e(Vs,uh),e(Tn,ph),e(Tn,ot),y(Ys,ot,null),e(ot,fh),e(ot,Jl),e(Jl,hh),e(ot,mh),e(ot,Gs),e(Gs,Ai),e(Ai,gh),e(Ai,ed),e(ed,_h),e(Gs,kh),e(Gs,Ni),e(Ni,Th),e(Ni,nd),e(nd,Fh),e(Tn,bh),e(Tn,An),y(Zs,An,null),e(An,wh),e(An,td),e(td,yh),e(An,vh),y(co,An,null),e(An,$h),e(An,gt),e(gt,Eh),e(gt,od),e(od,Mh),e(gt,zh),e(gt,sd),e(sd,qh),e(gt,Ph),_(s,ru,T),_(s,_t,T),e(_t,uo),e(uo,rd),y(Xs,rd,null),e(_t,xh),e(_t,ad),e(ad,Ch),_(s,au,T),_(s,kt,T),y(Js,kt,null),e(kt,jh),e(kt,er),e(er,Oh),e(er,Ii),e(Ii,Lh),e(er,Dh),_(s,iu,T),_(s,Tt,T),y(nr,Tt,null),e(Tt,Ah),e(Tt,tr),e(tr,Nh),e(tr,Si),e(Si,Ih),e(tr,Sh),_(s,lu,T),_(s,Ft,T),e(Ft,po),e(po,id),y(or,id,null),e(Ft,Bh),e(Ft,ld),e(ld,Wh),_(s,du,T),_(s,un,T),y(sr,un,null),e(un,Qh),e(un,dd),e(dd,Uh),e(un,Kh),e(un,rr),e(rr,Rh),e(rr,ar),e(ar,Hh),e(rr,Vh),e(un,Yh),e(un,ir),e(ir,Gh),e(ir,Bi),e(Bi,Zh),e(ir,Xh),e(un,Jh),e(un,lr),e(lr,em),e(lr,dr),e(dr,nm),e(lr,tm),e(un,om),e(un,Nn),y(cr,Nn,null),e(Nn,sm),e(Nn,bt),e(bt,rm),e(bt,Wi),e(Wi,am),e(bt,im),e(bt,cd),e(cd,lm),e(bt,dm),e(Nn,cm),y(fo,Nn,null),e(Nn,um),y(ho,Nn,null),_(s,cu,T),_(s,wt,T),e(wt,mo),e(mo,ud),y(ur,ud,null),e(wt,pm),e(wt,pd),e(pd,fm),_(s,uu,T),_(s,pn,T),y(pr,pn,null),e(pn,hm),e(pn,fd),e(fd,mm),e(pn,gm),e(pn,fr),e(fr,_m),e(fr,hr),e(hr,km),e(fr,Tm),e(pn,Fm),e(pn,mr),e(mr,bm),e(mr,Qi),e(Qi,wm),e(mr,ym),e(pn,vm),e(pn,gr),e(gr,$m),e(gr,_r),e(_r,Em),e(gr,Mm),e(pn,zm),e(pn,In),y(kr,In,null),e(In,qm),e(In,yt),e(yt,Pm),e(yt,Ui),e(Ui,xm),e(yt,Cm),e(yt,hd),e(hd,jm),e(yt,Om),e(In,Lm),y(go,In,null),e(In,Dm),y(_o,In,null),_(s,pu,T),_(s,vt,T),e(vt,ko),e(ko,md),y(Tr,md,null),e(vt,Am),e(vt,gd),e(gd,Nm),_(s,fu,T),_(s,$t,T),y(Fr,$t,null),e($t,Im),e($t,Sn),y(br,Sn,null),e(Sn,Sm),e(Sn,Et),e(Et,Bm),e(Et,Ki),e(Ki,Wm),e(Et,Qm),e(Et,_d),e(_d,Um),e(Et,Km),e(Sn,Rm),y(To,Sn,null),e(Sn,Hm),y(Fo,Sn,null),_(s,hu,T),_(s,Mt,T),e(Mt,bo),e(bo,kd),y(wr,kd,null),e(Mt,Vm),e(Mt,Td),e(Td,Ym),_(s,mu,T),_(s,fn,T),y(yr,fn,null),e(fn,Gm),e(fn,vr),e(vr,Zm),e(vr,Fd),e(Fd,Xm),e(vr,Jm),e(fn,eg),e(fn,$r),e($r,ng),e($r,Er),e(Er,tg),e($r,og),e(fn,sg),e(fn,Mr),e(Mr,rg),e(Mr,Ri),e(Ri,ag),e(Mr,ig),e(fn,lg),e(fn,zr),e(zr,dg),e(zr,qr),e(qr,cg),e(zr,ug),e(fn,pg),e(fn,Fn),y(Pr,Fn,null),e(Fn,fg),e(Fn,zt),e(zt,hg),e(zt,Hi),e(Hi,mg),e(zt,gg),e(zt,bd),e(bd,_g),e(zt,kg),e(Fn,Tg),y(wo,Fn,null),e(Fn,Fg),y(yo,Fn,null),e(Fn,bg),y(vo,Fn,null),_(s,gu,T),_(s,qt,T),e(qt,$o),e($o,wd),y(xr,wd,null),e(qt,wg),e(qt,yd),e(yd,yg),_(s,_u,T),_(s,hn,T),y(Cr,hn,null),e(hn,vg),e(hn,vd),e(vd,$g),e(hn,Eg),e(hn,jr),e(jr,Mg),e(jr,Or),e(Or,zg),e(jr,qg),e(hn,Pg),e(hn,Lr),e(Lr,xg),e(Lr,Vi),e(Vi,Cg),e(Lr,jg),e(hn,Og),e(hn,Dr),e(Dr,Lg),e(Dr,Ar),e(Ar,Dg),e(Dr,Ag),e(hn,Ng),e(hn,cn),y(Nr,cn,null),e(cn,Ig),e(cn,Pt),e(Pt,Sg),e(Pt,Yi),e(Yi,Bg),e(Pt,Wg),e(Pt,$d),e($d,Qg),e(Pt,Ug),e(cn,Kg),y(Eo,cn,null),e(cn,Rg),y(Mo,cn,null),e(cn,Hg),y(zo,cn,null),e(cn,Vg),y(qo,cn,null),e(cn,Yg),y(Po,cn,null),_(s,ku,T),_(s,xt,T),e(xt,xo),e(xo,Ed),y(Ir,Ed,null),e(xt,Gg),e(xt,Md),e(Md,Zg),_(s,Tu,T),_(s,mn,T),y(Sr,mn,null),e(mn,Xg),e(mn,zd),e(zd,Jg),e(mn,e_),e(mn,Br),e(Br,n_),e(Br,Wr),e(Wr,t_),e(Br,o_),e(mn,s_),e(mn,Qr),e(Qr,r_),e(Qr,Gi),e(Gi,a_),e(Qr,i_),e(mn,l_),e(mn,Ur),e(Ur,d_),e(Ur,Kr),e(Kr,c_),e(Ur,u_),e(mn,p_),e(mn,Bn),y(Rr,Bn,null),e(Bn,f_),e(Bn,Ct),e(Ct,h_),e(Ct,Zi),e(Zi,m_),e(Ct,g_),e(Ct,qd),e(qd,__),e(Ct,k_),e(Bn,T_),y(Co,Bn,null),e(Bn,F_),y(jo,Bn,null),_(s,Fu,T),_(s,jt,T),e(jt,Oo),e(Oo,Pd),y(Hr,Pd,null),e(jt,b_),e(jt,xd),e(xd,w_),_(s,bu,T),_(s,gn,T),y(Vr,gn,null),e(gn,y_),e(gn,Cd),e(Cd,v_),e(gn,$_),e(gn,Yr),e(Yr,E_),e(Yr,Gr),e(Gr,M_),e(Yr,z_),e(gn,q_),e(gn,Zr),e(Zr,P_),e(Zr,Xi),e(Xi,x_),e(Zr,C_),e(gn,j_),e(gn,Xr),e(Xr,O_),e(Xr,Jr),e(Jr,L_),e(Xr,D_),e(gn,A_),e(gn,bn),y(ea,bn,null),e(bn,N_),e(bn,Ot),e(Ot,I_),e(Ot,Ji),e(Ji,S_),e(Ot,B_),e(Ot,jd),e(jd,W_),e(Ot,Q_),e(bn,U_),y(Lo,bn,null),e(bn,K_),y(Do,bn,null),e(bn,R_),y(Ao,bn,null),_(s,wu,T),_(s,Lt,T),e(Lt,No),e(No,Od),y(na,Od,null),e(Lt,H_),e(Lt,Ld),e(Ld,V_),_(s,yu,T),_(s,_n,T),y(ta,_n,null),e(_n,Y_),e(_n,Dt),e(Dt,G_),e(Dt,Dd),e(Dd,Z_),e(Dt,X_),e(Dt,Ad),e(Ad,J_),e(Dt,ek),e(_n,nk),e(_n,oa),e(oa,tk),e(oa,sa),e(sa,ok),e(oa,sk),e(_n,rk),e(_n,ra),e(ra,ak),e(ra,el),e(el,ik),e(ra,lk),e(_n,dk),e(_n,aa),e(aa,ck),e(aa,ia),e(ia,uk),e(aa,pk),e(_n,fk),e(_n,wn),y(la,wn,null),e(wn,hk),e(wn,At),e(At,mk),e(At,nl),e(nl,gk),e(At,_k),e(At,Nd),e(Nd,kk),e(At,Tk),e(wn,Fk),y(Io,wn,null),e(wn,bk),y(So,wn,null),e(wn,wk),y(Bo,wn,null),_(s,vu,T),_(s,Nt,T),e(Nt,Wo),e(Wo,Id),y(da,Id,null),e(Nt,yk),e(Nt,Sd),e(Sd,vk),_(s,$u,T),_(s,nn,T),y(ca,nn,null),e(nn,$k),e(nn,Bd),e(Bd,Ek),e(nn,Mk),e(nn,ua),e(ua,zk),e(ua,pa),e(pa,qk),e(ua,Pk),e(nn,xk),e(nn,fa),e(fa,Ck),e(fa,tl),e(tl,jk),e(fa,Ok),e(nn,Lk),e(nn,ha),e(ha,Dk),e(ha,ma),e(ma,Ak),e(ha,Nk),e(nn,Ik),y(Qo,nn,null),e(nn,Sk),e(nn,Wn),y(ga,Wn,null),e(Wn,Bk),e(Wn,It),e(It,Wk),e(It,ol),e(ol,Qk),e(It,Uk),e(It,Wd),e(Wd,Kk),e(It,Rk),e(Wn,Hk),y(Uo,Wn,null),e(Wn,Vk),y(Ko,Wn,null),_(s,Eu,T),_(s,St,T),e(St,Ro),e(Ro,Qd),y(_a,Qd,null),e(St,Yk),e(St,Ud),e(Ud,Gk),_(s,Mu,T),_(s,tn,T),y(ka,tn,null),e(tn,Zk),e(tn,Kd),e(Kd,Xk),e(tn,Jk),e(tn,Ta),e(Ta,eT),e(Ta,Fa),e(Fa,nT),e(Ta,tT),e(tn,oT),e(tn,ba),e(ba,sT),e(ba,sl),e(sl,rT),e(ba,aT),e(tn,iT),e(tn,wa),e(wa,lT),e(wa,ya),e(ya,dT),e(wa,cT),e(tn,uT),y(Ho,tn,null),e(tn,pT),e(tn,Qn),y(va,Qn,null),e(Qn,fT),e(Qn,Bt),e(Bt,hT),e(Bt,rl),e(rl,mT),e(Bt,gT),e(Bt,Rd),e(Rd,_T),e(Bt,kT),e(Qn,TT),y(Vo,Qn,null),e(Qn,FT),y(Yo,Qn,null),_(s,zu,T),_(s,Wt,T),e(Wt,Go),e(Go,Hd),y($a,Hd,null),e(Wt,bT),e(Wt,Vd),e(Vd,wT),_(s,qu,T),_(s,on,T),y(Ea,on,null),e(on,yT),e(on,Yd),e(Yd,vT),e(on,$T),e(on,Ma),e(Ma,ET),e(Ma,za),e(za,MT),e(Ma,zT),e(on,qT),e(on,qa),e(qa,PT),e(qa,al),e(al,xT),e(qa,CT),e(on,jT),e(on,Pa),e(Pa,OT),e(Pa,xa),e(xa,LT),e(Pa,DT),e(on,AT),y(Zo,on,null),e(on,NT),e(on,Un),y(Ca,Un,null),e(Un,IT),e(Un,Qt),e(Qt,ST),e(Qt,il),e(il,BT),e(Qt,WT),e(Qt,Gd),e(Gd,QT),e(Qt,UT),e(Un,KT),y(Xo,Un,null),e(Un,RT),y(Jo,Un,null),_(s,Pu,T),_(s,Ut,T),e(Ut,es),e(es,Zd),y(ja,Zd,null),e(Ut,HT),e(Ut,Xd),e(Xd,VT),_(s,xu,T),_(s,sn,T),y(Oa,sn,null),e(sn,YT),e(sn,La),e(La,GT),e(La,Jd),e(Jd,ZT),e(La,XT),e(sn,JT),e(sn,Da),e(Da,eF),e(Da,Aa),e(Aa,nF),e(Da,tF),e(sn,oF),e(sn,Na),e(Na,sF),e(Na,ll),e(ll,rF),e(Na,aF),e(sn,iF),e(sn,Ia),e(Ia,lF),e(Ia,Sa),e(Sa,dF),e(Ia,cF),e(sn,uF),y(ns,sn,null),e(sn,pF),e(sn,yn),y(Ba,yn,null),e(yn,fF),e(yn,Kt),e(Kt,hF),e(Kt,dl),e(dl,mF),e(Kt,gF),e(Kt,ec),e(ec,_F),e(Kt,kF),e(yn,TF),y(ts,yn,null),e(yn,FF),y(os,yn,null),e(yn,bF),y(ss,yn,null),_(s,Cu,T),_(s,Rt,T),e(Rt,rs),e(rs,nc),y(Wa,nc,null),e(Rt,wF),e(Rt,tc),e(tc,yF),_(s,ju,T),_(s,rn,T),y(Qa,rn,null),e(rn,vF),e(rn,oc),e(oc,$F),e(rn,EF),e(rn,Ua),e(Ua,MF),e(Ua,Ka),e(Ka,zF),e(Ua,qF),e(rn,PF),e(rn,Ra),e(Ra,xF),e(Ra,cl),e(cl,CF),e(Ra,jF),e(rn,OF),e(rn,Ha),e(Ha,LF),e(Ha,Va),e(Va,DF),e(Ha,AF),e(rn,NF),y(as,rn,null),e(rn,IF),e(rn,vn),y(Ya,vn,null),e(vn,SF),e(vn,Ht),e(Ht,BF),e(Ht,ul),e(ul,WF),e(Ht,QF),e(Ht,sc),e(sc,UF),e(Ht,KF),e(vn,RF),y(is,vn,null),e(vn,HF),y(ls,vn,null),e(vn,VF),y(ds,vn,null),_(s,Ou,T),_(s,Vt,T),e(Vt,cs),e(cs,rc),y(Ga,rc,null),e(Vt,YF),e(Vt,ac),e(ac,GF),_(s,Lu,T),_(s,an,T),y(Za,an,null),e(an,ZF),e(an,ic),e(ic,XF),e(an,JF),e(an,Xa),e(Xa,eb),e(Xa,Ja),e(Ja,nb),e(Xa,tb),e(an,ob),e(an,ei),e(ei,sb),e(ei,pl),e(pl,rb),e(ei,ab),e(an,ib),e(an,ni),e(ni,lb),e(ni,ti),e(ti,db),e(ni,cb),e(an,ub),y(us,an,null),e(an,pb),e(an,Kn),y(oi,Kn,null),e(Kn,fb),e(Kn,Yt),e(Yt,hb),e(Yt,fl),e(fl,mb),e(Yt,gb),e(Yt,lc),e(lc,_b),e(Yt,kb),e(Kn,Tb),y(ps,Kn,null),e(Kn,Fb),y(fs,Kn,null),_(s,Du,T),_(s,Gt,T),e(Gt,hs),e(hs,dc),y(si,dc,null),e(Gt,bb),e(Gt,cc),e(cc,wb),_(s,Au,T),_(s,ln,T),y(ri,ln,null),e(ln,yb),e(ln,uc),e(uc,vb),e(ln,$b),e(ln,ai),e(ai,Eb),e(ai,ii),e(ii,Mb),e(ai,zb),e(ln,qb),e(ln,li),e(li,Pb),e(li,hl),e(hl,xb),e(li,Cb),e(ln,jb),e(ln,di),e(di,Ob),e(di,ci),e(ci,Lb),e(di,Db),e(ln,Ab),y(ms,ln,null),e(ln,Nb),e(ln,$n),y(ui,$n,null),e($n,Ib),e($n,Zt),e(Zt,Sb),e(Zt,ml),e(ml,Bb),e(Zt,Wb),e(Zt,pc),e(pc,Qb),e(Zt,Ub),e($n,Kb),y(gs,$n,null),e($n,Rb),y(_s,$n,null),e($n,Hb),y(ks,$n,null),_(s,Nu,T),_(s,Xt,T),e(Xt,Ts),e(Ts,fc),y(pi,fc,null),e(Xt,Vb),e(Xt,hc),e(hc,Yb),_(s,Iu,T),_(s,dn,T),y(fi,dn,null),e(dn,Gb),e(dn,Jt),e(Jt,Zb),e(Jt,mc),e(mc,Xb),e(Jt,Jb),e(Jt,gc),e(gc,ew),e(Jt,nw),e(dn,tw),e(dn,hi),e(hi,ow),e(hi,mi),e(mi,sw),e(hi,rw),e(dn,aw),e(dn,gi),e(gi,iw),e(gi,gl),e(gl,lw),e(gi,dw),e(dn,cw),e(dn,_i),e(_i,uw),e(_i,ki),e(ki,pw),e(_i,fw),e(dn,hw),y(Fs,dn,null),e(dn,mw),e(dn,En),y(Ti,En,null),e(En,gw),e(En,eo),e(eo,_w),e(eo,_l),e(_l,kw),e(eo,Tw),e(eo,_c),e(_c,Fw),e(eo,bw),e(En,ww),y(bs,En,null),e(En,yw),y(ws,En,null),e(En,vw),y(ys,En,null),Su=!0},p(s,[T]){const Fi={};T&2&&(Fi.$$scope={dirty:T,ctx:s}),io.$set(Fi);const kc={};T&2&&(kc.$$scope={dirty:T,ctx:s}),co.$set(kc);const Tc={};T&2&&(Tc.$$scope={dirty:T,ctx:s}),fo.$set(Tc);const Fc={};T&2&&(Fc.$$scope={dirty:T,ctx:s}),ho.$set(Fc);const bi={};T&2&&(bi.$$scope={dirty:T,ctx:s}),go.$set(bi);const bc={};T&2&&(bc.$$scope={dirty:T,ctx:s}),_o.$set(bc);const wc={};T&2&&(wc.$$scope={dirty:T,ctx:s}),To.$set(wc);const yc={};T&2&&(yc.$$scope={dirty:T,ctx:s}),Fo.$set(yc);const wi={};T&2&&(wi.$$scope={dirty:T,ctx:s}),wo.$set(wi);const vc={};T&2&&(vc.$$scope={dirty:T,ctx:s}),yo.$set(vc);const $c={};T&2&&($c.$$scope={dirty:T,ctx:s}),vo.$set($c);const Ec={};T&2&&(Ec.$$scope={dirty:T,ctx:s}),Eo.$set(Ec);const Mc={};T&2&&(Mc.$$scope={dirty:T,ctx:s}),Mo.$set(Mc);const zc={};T&2&&(zc.$$scope={dirty:T,ctx:s}),zo.$set(zc);const yi={};T&2&&(yi.$$scope={dirty:T,ctx:s}),qo.$set(yi);const qc={};T&2&&(qc.$$scope={dirty:T,ctx:s}),Po.$set(qc);const Je={};T&2&&(Je.$$scope={dirty:T,ctx:s}),Co.$set(Je);const Pc={};T&2&&(Pc.$$scope={dirty:T,ctx:s}),jo.$set(Pc);const xc={};T&2&&(xc.$$scope={dirty:T,ctx:s}),Lo.$set(xc);const Cc={};T&2&&(Cc.$$scope={dirty:T,ctx:s}),Do.$set(Cc);const jc={};T&2&&(jc.$$scope={dirty:T,ctx:s}),Ao.$set(jc);const Oc={};T&2&&(Oc.$$scope={dirty:T,ctx:s}),Io.$set(Oc);const Lc={};T&2&&(Lc.$$scope={dirty:T,ctx:s}),So.$set(Lc);const Dc={};T&2&&(Dc.$$scope={dirty:T,ctx:s}),Bo.$set(Dc);const Ac={};T&2&&(Ac.$$scope={dirty:T,ctx:s}),Qo.$set(Ac);const no={};T&2&&(no.$$scope={dirty:T,ctx:s}),Uo.$set(no);const Nc={};T&2&&(Nc.$$scope={dirty:T,ctx:s}),Ko.$set(Nc);const Ic={};T&2&&(Ic.$$scope={dirty:T,ctx:s}),Ho.$set(Ic);const vi={};T&2&&(vi.$$scope={dirty:T,ctx:s}),Vo.$set(vi);const Sc={};T&2&&(Sc.$$scope={dirty:T,ctx:s}),Yo.$set(Sc);const Bc={};T&2&&(Bc.$$scope={dirty:T,ctx:s}),Zo.$set(Bc);const Wc={};T&2&&(Wc.$$scope={dirty:T,ctx:s}),Xo.$set(Wc);const to={};T&2&&(to.$$scope={dirty:T,ctx:s}),Jo.$set(to);const nt={};T&2&&(nt.$$scope={dirty:T,ctx:s}),ns.$set(nt);const Qc={};T&2&&(Qc.$$scope={dirty:T,ctx:s}),ts.$set(Qc);const Uc={};T&2&&(Uc.$$scope={dirty:T,ctx:s}),os.$set(Uc);const Kc={};T&2&&(Kc.$$scope={dirty:T,ctx:s}),ss.$set(Kc);const oo={};T&2&&(oo.$$scope={dirty:T,ctx:s}),as.$set(oo);const Rc={};T&2&&(Rc.$$scope={dirty:T,ctx:s}),is.$set(Rc);const Hc={};T&2&&(Hc.$$scope={dirty:T,ctx:s}),ls.$set(Hc);const $i={};T&2&&($i.$$scope={dirty:T,ctx:s}),ds.$set($i);const Vc={};T&2&&(Vc.$$scope={dirty:T,ctx:s}),us.$set(Vc);const Yc={};T&2&&(Yc.$$scope={dirty:T,ctx:s}),ps.$set(Yc);const Gc={};T&2&&(Gc.$$scope={dirty:T,ctx:s}),fs.$set(Gc);const kn={};T&2&&(kn.$$scope={dirty:T,ctx:s}),ms.$set(kn);const Zc={};T&2&&(Zc.$$scope={dirty:T,ctx:s}),gs.$set(Zc);const Ei={};T&2&&(Ei.$$scope={dirty:T,ctx:s}),_s.$set(Ei);const Xc={};T&2&&(Xc.$$scope={dirty:T,ctx:s}),ks.$set(Xc);const so={};T&2&&(so.$$scope={dirty:T,ctx:s}),Fs.$set(so);const Jc={};T&2&&(Jc.$$scope={dirty:T,ctx:s}),bs.$set(Jc);const Mi={};T&2&&(Mi.$$scope={dirty:T,ctx:s}),ws.$set(Mi);const kl={};T&2&&(kl.$$scope={dirty:T,ctx:s}),ys.$set(kl)},i(s){Su||(v(l.$$.fragment,s),v(M.$$.fragment,s),v(ie.$$.fragment,s),v(Os.$$.fragment,s),v(Ds.$$.fragment,s),v(As.$$.fragment,s),v(Is.$$.fragment,s),v(Bs.$$.fragment,s),v(Qs.$$.fragment,s),v(io.$$.fragment,s),v(Us.$$.fragment,s),v(Ks.$$.fragment,s),v(Rs.$$.fragment,s),v(Ys.$$.fragment,s),v(Zs.$$.fragment,s),v(co.$$.fragment,s),v(Xs.$$.fragment,s),v(Js.$$.fragment,s),v(nr.$$.fragment,s),v(or.$$.fragment,s),v(sr.$$.fragment,s),v(cr.$$.fragment,s),v(fo.$$.fragment,s),v(ho.$$.fragment,s),v(ur.$$.fragment,s),v(pr.$$.fragment,s),v(kr.$$.fragment,s),v(go.$$.fragment,s),v(_o.$$.fragment,s),v(Tr.$$.fragment,s),v(Fr.$$.fragment,s),v(br.$$.fragment,s),v(To.$$.fragment,s),v(Fo.$$.fragment,s),v(wr.$$.fragment,s),v(yr.$$.fragment,s),v(Pr.$$.fragment,s),v(wo.$$.fragment,s),v(yo.$$.fragment,s),v(vo.$$.fragment,s),v(xr.$$.fragment,s),v(Cr.$$.fragment,s),v(Nr.$$.fragment,s),v(Eo.$$.fragment,s),v(Mo.$$.fragment,s),v(zo.$$.fragment,s),v(qo.$$.fragment,s),v(Po.$$.fragment,s),v(Ir.$$.fragment,s),v(Sr.$$.fragment,s),v(Rr.$$.fragment,s),v(Co.$$.fragment,s),v(jo.$$.fragment,s),v(Hr.$$.fragment,s),v(Vr.$$.fragment,s),v(ea.$$.fragment,s),v(Lo.$$.fragment,s),v(Do.$$.fragment,s),v(Ao.$$.fragment,s),v(na.$$.fragment,s),v(ta.$$.fragment,s),v(la.$$.fragment,s),v(Io.$$.fragment,s),v(So.$$.fragment,s),v(Bo.$$.fragment,s),v(da.$$.fragment,s),v(ca.$$.fragment,s),v(Qo.$$.fragment,s),v(ga.$$.fragment,s),v(Uo.$$.fragment,s),v(Ko.$$.fragment,s),v(_a.$$.fragment,s),v(ka.$$.fragment,s),v(Ho.$$.fragment,s),v(va.$$.fragment,s),v(Vo.$$.fragment,s),v(Yo.$$.fragment,s),v($a.$$.fragment,s),v(Ea.$$.fragment,s),v(Zo.$$.fragment,s),v(Ca.$$.fragment,s),v(Xo.$$.fragment,s),v(Jo.$$.fragment,s),v(ja.$$.fragment,s),v(Oa.$$.fragment,s),v(ns.$$.fragment,s),v(Ba.$$.fragment,s),v(ts.$$.fragment,s),v(os.$$.fragment,s),v(ss.$$.fragment,s),v(Wa.$$.fragment,s),v(Qa.$$.fragment,s),v(as.$$.fragment,s),v(Ya.$$.fragment,s),v(is.$$.fragment,s),v(ls.$$.fragment,s),v(ds.$$.fragment,s),v(Ga.$$.fragment,s),v(Za.$$.fragment,s),v(us.$$.fragment,s),v(oi.$$.fragment,s),v(ps.$$.fragment,s),v(fs.$$.fragment,s),v(si.$$.fragment,s),v(ri.$$.fragment,s),v(ms.$$.fragment,s),v(ui.$$.fragment,s),v(gs.$$.fragment,s),v(_s.$$.fragment,s),v(ks.$$.fragment,s),v(pi.$$.fragment,s),v(fi.$$.fragment,s),v(Fs.$$.fragment,s),v(Ti.$$.fragment,s),v(bs.$$.fragment,s),v(ws.$$.fragment,s),v(ys.$$.fragment,s),Su=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(ie.$$.fragment,s),$(Os.$$.fragment,s),$(Ds.$$.fragment,s),$(As.$$.fragment,s),$(Is.$$.fragment,s),$(Bs.$$.fragment,s),$(Qs.$$.fragment,s),$(io.$$.fragment,s),$(Us.$$.fragment,s),$(Ks.$$.fragment,s),$(Rs.$$.fragment,s),$(Ys.$$.fragment,s),$(Zs.$$.fragment,s),$(co.$$.fragment,s),$(Xs.$$.fragment,s),$(Js.$$.fragment,s),$(nr.$$.fragment,s),$(or.$$.fragment,s),$(sr.$$.fragment,s),$(cr.$$.fragment,s),$(fo.$$.fragment,s),$(ho.$$.fragment,s),$(ur.$$.fragment,s),$(pr.$$.fragment,s),$(kr.$$.fragment,s),$(go.$$.fragment,s),$(_o.$$.fragment,s),$(Tr.$$.fragment,s),$(Fr.$$.fragment,s),$(br.$$.fragment,s),$(To.$$.fragment,s),$(Fo.$$.fragment,s),$(wr.$$.fragment,s),$(yr.$$.fragment,s),$(Pr.$$.fragment,s),$(wo.$$.fragment,s),$(yo.$$.fragment,s),$(vo.$$.fragment,s),$(xr.$$.fragment,s),$(Cr.$$.fragment,s),$(Nr.$$.fragment,s),$(Eo.$$.fragment,s),$(Mo.$$.fragment,s),$(zo.$$.fragment,s),$(qo.$$.fragment,s),$(Po.$$.fragment,s),$(Ir.$$.fragment,s),$(Sr.$$.fragment,s),$(Rr.$$.fragment,s),$(Co.$$.fragment,s),$(jo.$$.fragment,s),$(Hr.$$.fragment,s),$(Vr.$$.fragment,s),$(ea.$$.fragment,s),$(Lo.$$.fragment,s),$(Do.$$.fragment,s),$(Ao.$$.fragment,s),$(na.$$.fragment,s),$(ta.$$.fragment,s),$(la.$$.fragment,s),$(Io.$$.fragment,s),$(So.$$.fragment,s),$(Bo.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Qo.$$.fragment,s),$(ga.$$.fragment,s),$(Uo.$$.fragment,s),$(Ko.$$.fragment,s),$(_a.$$.fragment,s),$(ka.$$.fragment,s),$(Ho.$$.fragment,s),$(va.$$.fragment,s),$(Vo.$$.fragment,s),$(Yo.$$.fragment,s),$($a.$$.fragment,s),$(Ea.$$.fragment,s),$(Zo.$$.fragment,s),$(Ca.$$.fragment,s),$(Xo.$$.fragment,s),$(Jo.$$.fragment,s),$(ja.$$.fragment,s),$(Oa.$$.fragment,s),$(ns.$$.fragment,s),$(Ba.$$.fragment,s),$(ts.$$.fragment,s),$(os.$$.fragment,s),$(ss.$$.fragment,s),$(Wa.$$.fragment,s),$(Qa.$$.fragment,s),$(as.$$.fragment,s),$(Ya.$$.fragment,s),$(is.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(Ga.$$.fragment,s),$(Za.$$.fragment,s),$(us.$$.fragment,s),$(oi.$$.fragment,s),$(ps.$$.fragment,s),$(fs.$$.fragment,s),$(si.$$.fragment,s),$(ri.$$.fragment,s),$(ms.$$.fragment,s),$(ui.$$.fragment,s),$(gs.$$.fragment,s),$(_s.$$.fragment,s),$(ks.$$.fragment,s),$(pi.$$.fragment,s),$(fi.$$.fragment,s),$(Fs.$$.fragment,s),$(Ti.$$.fragment,s),$(bs.$$.fragment,s),$(ws.$$.fragment,s),$(ys.$$.fragment,s),Su=!1},d(s){n(d),s&&n(k),s&&n(c),E(l),s&&n(fe),s&&n(I),E(M),s&&n(he),s&&n(B),s&&n(me),s&&n(Q),s&&n(ge),s&&n(U),s&&n(oe),s&&n(C),s&&n(_e),s&&n(W),s&&n(q),s&&n(Oe),s&&n(Ne),s&&n(S),E(ie),s&&n(eu),s&&n(Jn),E(Os),s&&n(nu),s&&n(ft),E(Ds),s&&n(tu),s&&n(en),E(As),E(Is),E(Bs),E(Qs),E(io),E(Us),s&&n(ou),s&&n(mt),E(Ks),s&&n(su),s&&n(Tn),E(Rs),E(Ys),E(Zs),E(co),s&&n(ru),s&&n(_t),E(Xs),s&&n(au),s&&n(kt),E(Js),s&&n(iu),s&&n(Tt),E(nr),s&&n(lu),s&&n(Ft),E(or),s&&n(du),s&&n(un),E(sr),E(cr),E(fo),E(ho),s&&n(cu),s&&n(wt),E(ur),s&&n(uu),s&&n(pn),E(pr),E(kr),E(go),E(_o),s&&n(pu),s&&n(vt),E(Tr),s&&n(fu),s&&n($t),E(Fr),E(br),E(To),E(Fo),s&&n(hu),s&&n(Mt),E(wr),s&&n(mu),s&&n(fn),E(yr),E(Pr),E(wo),E(yo),E(vo),s&&n(gu),s&&n(qt),E(xr),s&&n(_u),s&&n(hn),E(Cr),E(Nr),E(Eo),E(Mo),E(zo),E(qo),E(Po),s&&n(ku),s&&n(xt),E(Ir),s&&n(Tu),s&&n(mn),E(Sr),E(Rr),E(Co),E(jo),s&&n(Fu),s&&n(jt),E(Hr),s&&n(bu),s&&n(gn),E(Vr),E(ea),E(Lo),E(Do),E(Ao),s&&n(wu),s&&n(Lt),E(na),s&&n(yu),s&&n(_n),E(ta),E(la),E(Io),E(So),E(Bo),s&&n(vu),s&&n(Nt),E(da),s&&n($u),s&&n(nn),E(ca),E(Qo),E(ga),E(Uo),E(Ko),s&&n(Eu),s&&n(St),E(_a),s&&n(Mu),s&&n(tn),E(ka),E(Ho),E(va),E(Vo),E(Yo),s&&n(zu),s&&n(Wt),E($a),s&&n(qu),s&&n(on),E(Ea),E(Zo),E(Ca),E(Xo),E(Jo),s&&n(Pu),s&&n(Ut),E(ja),s&&n(xu),s&&n(sn),E(Oa),E(ns),E(Ba),E(ts),E(os),E(ss),s&&n(Cu),s&&n(Rt),E(Wa),s&&n(ju),s&&n(rn),E(Qa),E(as),E(Ya),E(is),E(ls),E(ds),s&&n(Ou),s&&n(Vt),E(Ga),s&&n(Lu),s&&n(an),E(Za),E(us),E(oi),E(ps),E(fs),s&&n(Du),s&&n(Gt),E(si),s&&n(Au),s&&n(ln),E(ri),E(ms),E(ui),E(gs),E(_s),E(ks),s&&n(Nu),s&&n(Xt),E(pi),s&&n(Iu),s&&n(dn),E(fi),E(Fs),E(Ti),E(bs),E(ws),E(ys)}}}const L1={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function D1(P){return L$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Q1 extends x${constructor(d){super();C$(this,d,D1,O1,j$,{})}}export{Q1 as default,L1 as metadata};
