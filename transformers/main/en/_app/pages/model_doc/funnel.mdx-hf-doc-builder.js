import{S as q$,i as P$,s as x$,e as r,k as p,w as y,t,M as j$,c as a,d as n,m as f,a as i,x as b,h as o,b as m,G as e,g as _,y as w,q as v,o as $,B as E,v as C$,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function O$(P){let d,k,c,h,F;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function L$(P){let d,k,c,h,F;return h=new Be({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),k=t("Transformer sequence pair mask has the following format:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Transformer sequence pair mask has the following format:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function D$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function A$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function N$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function I$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function S$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function B$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function W$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function Q$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function K$(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function U$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function R$(P){let d,k,c,h,F;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of single-label classification:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of single-label classification:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function H$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function V$(P){let d,k,c,h,F;return h=new Be({props:{code:`import torch
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
`}}),{c(){d=r("p"),k=t("Example of multi-label classification:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example of multi-label classification:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function Y$(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function G$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function Z$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function X$(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function J$(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function e1(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function n1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function t1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function o1(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function s1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function r1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function a1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function i1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function l1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function d1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function c1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function u1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function p1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),k=t("Examples:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Examples:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function f1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function h1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function m1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function g1(P){let d,k;return d=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function _1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function k1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function T1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function F1(P){let d,k;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function y1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function b1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function w1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function v1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function $1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function E1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function M1(P){let d,k;return d=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function z1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce;return{c(){d=r("p"),k=t("TensorFlow models and layers in "),c=r("code"),h=t("transformers"),F=t(" accept two formats as input:"),l=p(),u=r("ul"),x=r("li"),ke=t("having all inputs as keyword arguments (like PyTorch models), or"),fe=p(),I=r("li"),re=t("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),M=r("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),Fe=t("model.fit()"),he=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r("code"),ye=t("model.fit()"),ae=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),be=t("fit()"),me=t(" and "),Q=r("code"),we=t("predict()"),ge=t(`, such as when creating your own layers or models with
the Keras `),K=r("code"),ue=t("Functional"),ve=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=r("ul"),O=r("li"),_e=t("a single Tensor with "),W=r("code"),pe=t("input_ids"),$e=t(" only and nothing else: "),V=r("code"),R=t("model(input_ids)"),Ee=p(),C=r("li"),Me=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r("code"),le=t("model([input_ids, attention_mask])"),ze=t(" or "),G=r("code"),de=t("model([input_ids, attention_mask, token_type_ids])"),qe=p(),N=r("li"),ce=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=p(),L=r("p"),xe=t(`Note that when creating models and layers with
`),D=r("a"),je=t("subclassing"),Ce=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=a(g,"P",{});var z=i(d);k=o(z,"TensorFlow models and layers in "),c=a(z,"CODE",{});var We=i(c);h=o(We,"transformers"),We.forEach(n),F=o(z," accept two formats as input:"),z.forEach(n),l=f(g),u=a(g,"UL",{});var J=i(u);x=a(J,"LI",{});var Qe=i(x);ke=o(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(n),fe=f(J),I=a(J,"LI",{});var Ke=i(I);re=o(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(n),J.forEach(n),ee=f(g),M=a(g,"P",{});var q=i(M);Te=o(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(q,"CODE",{});var Oe=i(U);Fe=o(Oe,"model.fit()"),Oe.forEach(n),he=o(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a(q,"CODE",{});var Ue=i(B);ye=o(Ue,"model.fit()"),Ue.forEach(n),ae=o(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(q,"CODE",{});var De=i(H);be=o(De,"fit()"),De.forEach(n),me=o(q," and "),Q=a(q,"CODE",{});var Re=i(Q);we=o(Re,"predict()"),Re.forEach(n),ge=o(q,`, such as when creating your own layers or models with
the Keras `),K=a(q,"CODE",{});var He=i(K);ue=o(He,"Functional"),He.forEach(n),ve=o(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(n),oe=f(g),j=a(g,"UL",{});var A=i(j);O=a(A,"LI",{});var X=i(O);_e=o(X,"a single Tensor with "),W=a(X,"CODE",{});var Ve=i(W);pe=o(Ve,"input_ids"),Ve.forEach(n),$e=o(X," only and nothing else: "),V=a(X,"CODE",{});var Ne=i(V);R=o(Ne,"model(input_ids)"),Ne.forEach(n),X.forEach(n),Ee=f(A),C=a(A,"LI",{});var S=i(C);Me=o(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(S,"CODE",{});var Le=i(Y);le=o(Le,"model([input_ids, attention_mask])"),Le.forEach(n),ze=o(S," or "),G=a(S,"CODE",{});var Ae=i(G);de=o(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(n),S.forEach(n),qe=f(A),N=a(A,"LI",{});var ie=i(N);ce=o(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(ie,"CODE",{});var Ye=i(Z);Pe=o(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(n),ie.forEach(n),A.forEach(n),ne=f(g),L=a(g,"P",{});var te=i(L);xe=o(te,`Note that when creating models and layers with
`),D=a(te,"A",{href:!0,rel:!0});var Ge=i(D);je=o(Ge,"subclassing"),Ge.forEach(n),Ce=o(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(n),this.h()},h(){m(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(D,"rel","nofollow")},m(g,z){_(g,d,z),e(d,k),e(d,c),e(c,h),e(d,F),_(g,l,z),_(g,u,z),e(u,x),e(x,ke),e(u,fe),e(u,I),e(I,re),_(g,ee,z),_(g,M,z),e(M,Te),e(M,U),e(U,Fe),e(M,he),e(M,B),e(B,ye),e(M,ae),e(M,H),e(H,be),e(M,me),e(M,Q),e(Q,we),e(M,ge),e(M,K),e(K,ue),e(M,ve),_(g,oe,z),_(g,j,z),e(j,O),e(O,_e),e(O,W),e(W,pe),e(O,$e),e(O,V),e(V,R),e(j,Ee),e(j,C),e(C,Me),e(C,Y),e(Y,le),e(C,ze),e(C,G),e(G,de),e(j,qe),e(j,N),e(N,ce),e(N,Z),e(Z,Pe),_(g,ne,z),_(g,L,z),e(L,xe),e(L,D),e(D,je),e(L,Ce)},d(g){g&&n(d),g&&n(l),g&&n(u),g&&n(ee),g&&n(M),g&&n(oe),g&&n(j),g&&n(ne),g&&n(L)}}}function q1(P){let d,k,c,h,F;return{c(){d=r("p"),k=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=t("Module"),F=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);h=o(x,"Module"),x.forEach(n),F=o(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(n)},m(l,u){_(l,d,u),e(d,k),e(d,c),e(c,h),e(d,F)},d(l){l&&n(d)}}}function P1(P){let d,k,c,h,F;return h=new Be({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
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
`}}),{c(){d=r("p"),k=t("Example:"),c=p(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=o(u,"Example:"),u.forEach(n),c=f(l),b(h.$$.fragment,l)},m(l,u){_(l,d,u),e(d,k),_(l,c,u),w(h,l,u),F=!0},p:Se,i(l){F||(v(h.$$.fragment,l),F=!0)},o(l){$(h.$$.fragment,l),F=!1},d(l){l&&n(d),l&&n(c),E(h,l)}}}function x1(P){let d,k;return d=new Be({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,h){w(d,c,h),k=!0},p:Se,i(c){k||(v(d.$$.fragment,c),k=!0)},o(c){$(d.$$.fragment,c),k=!1},d(c){E(d,c)}}}function j1(P){let d,k,c,h,F,l,u,x,ke,fe,I,re,ee,M,Te,U,Fe,he,B,ye,ae,H,be,me,Q,we,ge,K,ue,ve,oe,j,O,_e,W,pe,$e,V,R,Ee,C,Me,Y,le,ze,G,de,qe,N,ce,Z,Pe,ne,L,xe,D,je,Ce,g,z,We,J,Qe,Ke,q,Oe,Ue,De,Re,He,A,X,Ve,Ne,S,Le,Ae,ie,Ye,te,Ge,Xc,Jn,Ds,af,et,lf,Mi,df,cf,zi,uf,pf,As,ff,hf,mf,ut,gf,qi,_f,kf,Pi,Tf,Ff,Jc,pt,so,Il,Ns,yf,Sl,bf,eu,Je,Is,wf,Bl,vf,$f,ro,xi,Ef,Mf,ji,zf,qf,Pf,Ss,xf,Ci,jf,Cf,Of,tt,Bs,Lf,Wl,Df,Af,Ws,Oi,Nf,Ql,If,Sf,Li,Bf,Kl,Wf,Qf,ao,Qs,Kf,Ks,Uf,Ul,Rf,Hf,Vf,Dn,Us,Yf,Rl,Gf,Zf,io,Xf,ft,Jf,Hl,eh,nh,Vl,th,oh,sh,Di,Rs,nu,ht,lo,Yl,Hs,rh,Gl,ah,tu,Tn,Vs,ih,Ys,lh,Zl,dh,ch,uh,co,Ai,ph,fh,Ni,hh,mh,gh,Gs,_h,Ii,kh,Th,Fh,An,Zs,yh,Xl,bh,wh,uo,vh,mt,$h,Jl,Eh,Mh,ed,zh,qh,ou,gt,po,nd,Xs,Ph,td,xh,su,_t,Js,jh,er,Ch,Si,Oh,Lh,ru,kt,nr,Dh,tr,Ah,Bi,Nh,Ih,au,Tt,fo,od,or,Sh,sd,Bh,iu,pn,sr,Wh,rd,Qh,Kh,rr,Uh,ar,Rh,Hh,Vh,ir,Yh,Wi,Gh,Zh,Xh,lr,Jh,dr,em,nm,tm,Nn,cr,om,Ft,sm,Qi,rm,am,ad,im,lm,dm,ho,cm,mo,lu,yt,go,id,ur,um,ld,pm,du,fn,pr,fm,dd,hm,mm,fr,gm,hr,_m,km,Tm,mr,Fm,Ki,ym,bm,wm,gr,vm,_r,$m,Em,Mm,In,kr,zm,bt,qm,Ui,Pm,xm,cd,jm,Cm,Om,_o,Lm,ko,cu,wt,To,ud,Tr,Dm,pd,Am,uu,vt,Fr,Nm,Sn,yr,Im,$t,Sm,Ri,Bm,Wm,fd,Qm,Km,Um,Fo,Rm,yo,pu,Et,bo,hd,br,Hm,md,Vm,fu,hn,wr,Ym,vr,Gm,gd,Zm,Xm,Jm,$r,eg,Er,ng,tg,og,Mr,sg,Hi,rg,ag,ig,zr,lg,qr,dg,cg,ug,Fn,Pr,pg,Mt,fg,Vi,hg,mg,_d,gg,_g,kg,wo,Tg,vo,Fg,$o,hu,zt,Eo,kd,xr,yg,Td,bg,mu,mn,jr,wg,Fd,vg,$g,Cr,Eg,Or,Mg,zg,qg,Lr,Pg,Yi,xg,jg,Cg,Dr,Og,Ar,Lg,Dg,Ag,un,Nr,Ng,qt,Ig,Gi,Sg,Bg,yd,Wg,Qg,Kg,Mo,Ug,zo,Rg,qo,Hg,Po,Vg,xo,gu,Pt,jo,bd,Ir,Yg,wd,Gg,_u,gn,Sr,Zg,vd,Xg,Jg,Br,e_,Wr,n_,t_,o_,Qr,s_,Zi,r_,a_,i_,Kr,l_,Ur,d_,c_,u_,Bn,Rr,p_,xt,f_,Xi,h_,m_,$d,g_,__,k_,Co,T_,Oo,ku,jt,Lo,Ed,Hr,F_,Md,y_,Tu,_n,Vr,b_,zd,w_,v_,Yr,$_,Gr,E_,M_,z_,Zr,q_,Ji,P_,x_,j_,Xr,C_,Jr,O_,L_,D_,yn,ea,A_,Ct,N_,el,I_,S_,qd,B_,W_,Q_,Do,K_,Ao,U_,No,Fu,Ot,Io,Pd,na,R_,xd,H_,yu,kn,ta,V_,Lt,Y_,jd,G_,Z_,Cd,X_,J_,ek,oa,nk,sa,tk,ok,sk,ra,rk,nl,ak,ik,lk,aa,dk,ia,ck,uk,pk,bn,la,fk,Dt,hk,tl,mk,gk,Od,_k,kk,Tk,So,Fk,Bo,yk,Wo,bu,At,Qo,Ld,da,bk,Dd,wk,wu,nn,ca,vk,Ad,$k,Ek,ua,Mk,pa,zk,qk,Pk,fa,xk,ol,jk,Ck,Ok,ha,Lk,ma,Dk,Ak,Nk,Ko,Ik,Wn,ga,Sk,Nt,Bk,sl,Wk,Qk,Nd,Kk,Uk,Rk,Uo,Hk,Ro,vu,It,Ho,Id,_a,Vk,Sd,Yk,$u,tn,ka,Gk,Bd,Zk,Xk,Ta,Jk,Fa,eT,nT,tT,ya,oT,rl,sT,rT,aT,ba,iT,wa,lT,dT,cT,Vo,uT,Qn,va,pT,St,fT,al,hT,mT,Wd,gT,_T,kT,Yo,TT,Go,Eu,Bt,Zo,Qd,$a,FT,Kd,yT,Mu,on,Ea,bT,Ud,wT,vT,Ma,$T,za,ET,MT,zT,qa,qT,il,PT,xT,jT,Pa,CT,xa,OT,LT,DT,Xo,AT,Kn,ja,NT,Wt,IT,ll,ST,BT,Rd,WT,QT,KT,Jo,UT,es,zu,Qt,ns,Hd,Ca,RT,Vd,HT,qu,sn,Oa,VT,La,YT,Yd,GT,ZT,XT,Da,JT,Aa,eF,nF,tF,Na,oF,dl,sF,rF,aF,Ia,iF,Sa,lF,dF,cF,ts,uF,wn,Ba,pF,Kt,fF,cl,hF,mF,Gd,gF,_F,kF,os,TF,ss,FF,rs,Pu,Ut,as,Zd,Wa,yF,Xd,bF,xu,rn,Qa,wF,Jd,vF,$F,Ka,EF,Ua,MF,zF,qF,Ra,PF,ul,xF,jF,CF,Ha,OF,Va,LF,DF,AF,is,NF,vn,Ya,IF,Rt,SF,pl,BF,WF,ec,QF,KF,UF,ls,RF,ds,HF,cs,ju,Ht,us,nc,Ga,VF,tc,YF,Cu,an,Za,GF,oc,ZF,XF,Xa,JF,Ja,ey,ny,ty,ei,oy,fl,sy,ry,ay,ni,iy,ti,ly,dy,cy,ps,uy,Un,oi,py,Vt,fy,hl,hy,my,sc,gy,_y,ky,fs,Ty,hs,Ou,Yt,ms,rc,si,Fy,ac,yy,Lu,ln,ri,by,ic,wy,vy,ai,$y,ii,Ey,My,zy,li,qy,ml,Py,xy,jy,di,Cy,ci,Oy,Ly,Dy,gs,Ay,$n,ui,Ny,Gt,Iy,gl,Sy,By,lc,Wy,Qy,Ky,_s,Uy,ks,Ry,Ts,Du,Zt,Fs,dc,pi,Hy,cc,Vy,Au,dn,fi,Yy,Xt,Gy,uc,Zy,Xy,pc,Jy,eb,nb,hi,tb,mi,ob,sb,rb,gi,ab,_l,ib,lb,db,_i,cb,ki,ub,pb,fb,ys,hb,En,Ti,mb,Jt,gb,kl,_b,kb,fc,Tb,Fb,yb,bs,bb,ws,wb,vs,Nu;return l=new Xe({}),M=new Xe({}),ie=new Xe({}),Ds=new se({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
`}}),io=new Ie({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[O$]},$$scope:{ctx:P}}}),Rs=new se({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),Hs=new Xe({}),Vs=new se({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L91"}}),Zs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/tokenization_funnel_fast.py#L144",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new Ie({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[L$]},$$scope:{ctx:P}}}),Xs=new Xe({}),Js=new se({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
`}}),ho=new Ze({props:{$$slots:{default:[D$]},$$scope:{ctx:P}}}),mo=new Ie({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[A$]},$$scope:{ctx:P}}}),ur=new Xe({}),pr=new se({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),_o=new Ze({props:{$$slots:{default:[N$]},$$scope:{ctx:P}}}),ko=new Ie({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[I$]},$$scope:{ctx:P}}}),Tr=new Xe({}),Fr=new se({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),yr=new se({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Fo=new Ze({props:{$$slots:{default:[S$]},$$scope:{ctx:P}}}),yo=new Ie({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[B$]},$$scope:{ctx:P}}}),br=new Xe({}),wr=new se({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),wo=new Ze({props:{$$slots:{default:[W$]},$$scope:{ctx:P}}}),vo=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[Q$]},$$scope:{ctx:P}}}),$o=new Ie({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[K$]},$$scope:{ctx:P}}}),xr=new Xe({}),jr=new se({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Mo=new Ze({props:{$$slots:{default:[U$]},$$scope:{ctx:P}}}),zo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[R$]},$$scope:{ctx:P}}}),qo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[H$]},$$scope:{ctx:P}}}),Po=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[V$]},$$scope:{ctx:P}}}),xo=new Ie({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[Y$]},$$scope:{ctx:P}}}),Ir=new Xe({}),Sr=new se({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Co=new Ze({props:{$$slots:{default:[G$]},$$scope:{ctx:P}}}),Oo=new Ie({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[Z$]},$$scope:{ctx:P}}}),Hr=new Xe({}),Vr=new se({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Do=new Ze({props:{$$slots:{default:[X$]},$$scope:{ctx:P}}}),Ao=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[J$]},$$scope:{ctx:P}}}),No=new Ie({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[e1]},$$scope:{ctx:P}}}),na=new Xe({}),ta=new se({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),So=new Ze({props:{$$slots:{default:[n1]},$$scope:{ctx:P}}}),Bo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[t1]},$$scope:{ctx:P}}}),Wo=new Ie({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[o1]},$$scope:{ctx:P}}}),da=new Xe({}),ca=new se({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1100"}}),Ko=new Ze({props:{$$slots:{default:[s1]},$$scope:{ctx:P}}}),ga=new se({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1149"}}),Vo=new Ze({props:{$$slots:{default:[i1]},$$scope:{ctx:P}}}),va=new se({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1201"}}),Xo=new Ze({props:{$$slots:{default:[c1]},$$scope:{ctx:P}}}),ja=new se({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Jo=new Ze({props:{$$slots:{default:[u1]},$$scope:{ctx:P}}}),es=new Ie({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[p1]},$$scope:{ctx:P}}}),Ca=new Xe({}),Oa=new se({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1269"}}),ts=new Ze({props:{$$slots:{default:[f1]},$$scope:{ctx:P}}}),Ba=new se({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1424"}}),ps=new Ze({props:{$$slots:{default:[y1]},$$scope:{ctx:P}}}),oi=new se({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),fs=new Ze({props:{$$slots:{default:[b1]},$$scope:{ctx:P}}}),hs=new Ie({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[w1]},$$scope:{ctx:P}}}),si=new Xe({}),ri=new se({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1540"}}),gs=new Ze({props:{$$slots:{default:[v1]},$$scope:{ctx:P}}}),ui=new se({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_s=new Ze({props:{$$slots:{default:[$1]},$$scope:{ctx:P}}}),ks=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[E1]},$$scope:{ctx:P}}}),Ts=new Ie({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[M1]},$$scope:{ctx:P}}}),pi=new Xe({}),fi=new se({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/funnel/modeling_tf_funnel.py#L1618"}}),ys=new Ze({props:{$$slots:{default:[z1]},$$scope:{ctx:P}}}),Ti=new se({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bs=new Ze({props:{$$slots:{default:[q1]},$$scope:{ctx:P}}}),ws=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[P1]},$$scope:{ctx:P}}}),vs=new Ie({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[x1]},$$scope:{ctx:P}}}),{c(){d=r("meta"),k=p(),c=r("h1"),h=r("a"),F=r("span"),y(l.$$.fragment),u=p(),x=r("span"),ke=t("Funnel Transformer"),fe=p(),I=r("h2"),re=r("a"),ee=r("span"),y(M.$$.fragment),Te=p(),U=r("span"),Fe=t("Overview"),he=p(),B=r("p"),ye=t("The Funnel Transformer model was proposed in the paper "),ae=r("a"),H=t(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),be=t(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),me=p(),Q=r("p"),we=t("The abstract from the paper is the following:"),ge=p(),K=r("p"),ue=r("em"),ve=t(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
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
`),J=r("a"),Qe=t("FunnelForMultipleChoice"),Ke=t("."),q=p(),Oe=r("p"),Ue=t("This model was contributed by "),De=r("a"),Re=t("sgugger"),He=t(". The original code can be found "),A=r("a"),X=t("here"),Ve=t("."),Ne=p(),S=r("h2"),Le=r("a"),Ae=r("span"),y(ie.$$.fragment),Ye=p(),te=r("span"),Ge=t("FunnelConfig"),Xc=p(),Jn=r("div"),y(Ds.$$.fragment),af=p(),et=r("p"),lf=t("This is the configuration class to store the configuration of a "),Mi=r("a"),df=t("FunnelModel"),cf=t(" or a "),zi=r("a"),uf=t("TFBertModel"),pf=t(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=r("a"),ff=t("funnel-transformer/small"),hf=t(" architecture."),mf=p(),ut=r("p"),gf=t("Configuration objects inherit from "),qi=r("a"),_f=t("PretrainedConfig"),kf=t(` and can be used to control the model outputs. Read the
documentation from `),Pi=r("a"),Tf=t("PretrainedConfig"),Ff=t(" for more information."),Jc=p(),pt=r("h2"),so=r("a"),Il=r("span"),y(Ns.$$.fragment),yf=p(),Sl=r("span"),bf=t("FunnelTokenizer"),eu=p(),Je=r("div"),y(Is.$$.fragment),wf=p(),Bl=r("p"),vf=t("Construct a Funnel Transformer tokenizer."),$f=p(),ro=r("p"),xi=r("a"),Ef=t("FunnelTokenizer"),Mf=t(" is identical to "),ji=r("a"),zf=t("BertTokenizer"),qf=t(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Pf=p(),Ss=r("p"),xf=t("Refer to superclass "),Ci=r("a"),jf=t("BertTokenizer"),Cf=t(" for usage examples and documentation concerning parameters."),Of=p(),tt=r("div"),y(Bs.$$.fragment),Lf=p(),Wl=r("p"),Df=t(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Af=p(),Ws=r("ul"),Oi=r("li"),Nf=t("single sequence: "),Ql=r("code"),If=t("[CLS] X [SEP]"),Sf=p(),Li=r("li"),Bf=t("pair of sequences: "),Kl=r("code"),Wf=t("[CLS] A [SEP] B [SEP]"),Qf=p(),ao=r("div"),y(Qs.$$.fragment),Kf=p(),Ks=r("p"),Uf=t(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=r("code"),Rf=t("prepare_for_model"),Hf=t(" method."),Vf=p(),Dn=r("div"),y(Us.$$.fragment),Yf=p(),Rl=r("p"),Gf=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Zf=p(),y(io.$$.fragment),Xf=p(),ft=r("p"),Jf=t("If "),Hl=r("code"),eh=t("token_ids_1"),nh=t(" is "),Vl=r("code"),th=t("None"),oh=t(", this method only returns the first portion of the mask (0s)."),sh=p(),Di=r("div"),y(Rs.$$.fragment),nu=p(),ht=r("h2"),lo=r("a"),Yl=r("span"),y(Hs.$$.fragment),rh=p(),Gl=r("span"),ah=t("FunnelTokenizerFast"),tu=p(),Tn=r("div"),y(Vs.$$.fragment),ih=p(),Ys=r("p"),lh=t("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),dh=t("tokenizers"),ch=t(" library)."),uh=p(),co=r("p"),Ai=r("a"),ph=t("FunnelTokenizerFast"),fh=t(" is identical to "),Ni=r("a"),hh=t("BertTokenizerFast"),mh=t(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gh=p(),Gs=r("p"),_h=t("Refer to superclass "),Ii=r("a"),kh=t("BertTokenizerFast"),Th=t(" for usage examples and documentation concerning parameters."),Fh=p(),An=r("div"),y(Zs.$$.fragment),yh=p(),Xl=r("p"),bh=t("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),wh=p(),y(uo.$$.fragment),vh=p(),mt=r("p"),$h=t("If "),Jl=r("code"),Eh=t("token_ids_1"),Mh=t(" is "),ed=r("code"),zh=t("None"),qh=t(", this method only returns the first portion of the mask (0s)."),ou=p(),gt=r("h2"),po=r("a"),nd=r("span"),y(Xs.$$.fragment),Ph=p(),td=r("span"),xh=t("Funnel specific outputs"),su=p(),_t=r("div"),y(Js.$$.fragment),jh=p(),er=r("p"),Ch=t("Output type of "),Si=r("a"),Oh=t("FunnelForPreTraining"),Lh=t("."),ru=p(),kt=r("div"),y(nr.$$.fragment),Dh=p(),tr=r("p"),Ah=t("Output type of "),Bi=r("a"),Nh=t("FunnelForPreTraining"),Ih=t("."),au=p(),Tt=r("h2"),fo=r("a"),od=r("span"),y(or.$$.fragment),Sh=p(),sd=r("span"),Bh=t("FunnelBaseModel"),iu=p(),pn=r("div"),y(sr.$$.fragment),Wh=p(),rd=r("p"),Qh=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Kh=p(),rr=r("p"),Uh=t("The Funnel Transformer model was proposed in "),ar=r("a"),Rh=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Hh=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Vh=p(),ir=r("p"),Yh=t("This model inherits from "),Wi=r("a"),Gh=t("PreTrainedModel"),Zh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=p(),lr=r("p"),Jh=t("This model is also a PyTorch "),dr=r("a"),em=t("torch.nn.Module"),nm=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=p(),Nn=r("div"),y(cr.$$.fragment),om=p(),Ft=r("p"),sm=t("The "),Qi=r("a"),rm=t("FunnelBaseModel"),am=t(" forward method, overrides the "),ad=r("code"),im=t("__call__"),lm=t(" special method."),dm=p(),y(ho.$$.fragment),cm=p(),y(mo.$$.fragment),lu=p(),yt=r("h2"),go=r("a"),id=r("span"),y(ur.$$.fragment),um=p(),ld=r("span"),pm=t("FunnelModel"),du=p(),fn=r("div"),y(pr.$$.fragment),fm=p(),dd=r("p"),hm=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),mm=p(),fr=r("p"),gm=t("The Funnel Transformer model was proposed in "),hr=r("a"),_m=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),km=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tm=p(),mr=r("p"),Fm=t("This model inherits from "),Ki=r("a"),ym=t("PreTrainedModel"),bm=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wm=p(),gr=r("p"),vm=t("This model is also a PyTorch "),_r=r("a"),$m=t("torch.nn.Module"),Em=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mm=p(),In=r("div"),y(kr.$$.fragment),zm=p(),bt=r("p"),qm=t("The "),Ui=r("a"),Pm=t("FunnelModel"),xm=t(" forward method, overrides the "),cd=r("code"),jm=t("__call__"),Cm=t(" special method."),Om=p(),y(_o.$$.fragment),Lm=p(),y(ko.$$.fragment),cu=p(),wt=r("h2"),To=r("a"),ud=r("span"),y(Tr.$$.fragment),Dm=p(),pd=r("span"),Am=t("FunnelModelForPreTraining"),uu=p(),vt=r("div"),y(Fr.$$.fragment),Nm=p(),Sn=r("div"),y(yr.$$.fragment),Im=p(),$t=r("p"),Sm=t("The "),Ri=r("a"),Bm=t("FunnelForPreTraining"),Wm=t(" forward method, overrides the "),fd=r("code"),Qm=t("__call__"),Km=t(" special method."),Um=p(),y(Fo.$$.fragment),Rm=p(),y(yo.$$.fragment),pu=p(),Et=r("h2"),bo=r("a"),hd=r("span"),y(br.$$.fragment),Hm=p(),md=r("span"),Vm=t("FunnelForMaskedLM"),fu=p(),hn=r("div"),y(wr.$$.fragment),Ym=p(),vr=r("p"),Gm=t("Funnel Transformer Model with a "),gd=r("code"),Zm=t("language modeling"),Xm=t(" head on top."),Jm=p(),$r=r("p"),eg=t("The Funnel Transformer model was proposed in "),Er=r("a"),ng=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),og=p(),Mr=r("p"),sg=t("This model inherits from "),Hi=r("a"),rg=t("PreTrainedModel"),ag=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=p(),zr=r("p"),lg=t("This model is also a PyTorch "),qr=r("a"),dg=t("torch.nn.Module"),cg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ug=p(),Fn=r("div"),y(Pr.$$.fragment),pg=p(),Mt=r("p"),fg=t("The "),Vi=r("a"),hg=t("FunnelForMaskedLM"),mg=t(" forward method, overrides the "),_d=r("code"),gg=t("__call__"),_g=t(" special method."),kg=p(),y(wo.$$.fragment),Tg=p(),y(vo.$$.fragment),Fg=p(),y($o.$$.fragment),hu=p(),zt=r("h2"),Eo=r("a"),kd=r("span"),y(xr.$$.fragment),yg=p(),Td=r("span"),bg=t("FunnelForSequenceClassification"),mu=p(),mn=r("div"),y(jr.$$.fragment),wg=p(),Fd=r("p"),vg=t(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),$g=p(),Cr=r("p"),Eg=t("The Funnel Transformer model was proposed in "),Or=r("a"),Mg=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zg=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qg=p(),Lr=r("p"),Pg=t("This model inherits from "),Yi=r("a"),xg=t("PreTrainedModel"),jg=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cg=p(),Dr=r("p"),Og=t("This model is also a PyTorch "),Ar=r("a"),Lg=t("torch.nn.Module"),Dg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=p(),un=r("div"),y(Nr.$$.fragment),Ng=p(),qt=r("p"),Ig=t("The "),Gi=r("a"),Sg=t("FunnelForSequenceClassification"),Bg=t(" forward method, overrides the "),yd=r("code"),Wg=t("__call__"),Qg=t(" special method."),Kg=p(),y(Mo.$$.fragment),Ug=p(),y(zo.$$.fragment),Rg=p(),y(qo.$$.fragment),Hg=p(),y(Po.$$.fragment),Vg=p(),y(xo.$$.fragment),gu=p(),Pt=r("h2"),jo=r("a"),bd=r("span"),y(Ir.$$.fragment),Yg=p(),wd=r("span"),Gg=t("FunnelForMultipleChoice"),_u=p(),gn=r("div"),y(Sr.$$.fragment),Zg=p(),vd=r("p"),Xg=t(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Jg=p(),Br=r("p"),e_=t("The Funnel Transformer model was proposed in "),Wr=r("a"),n_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),t_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),o_=p(),Qr=r("p"),s_=t("This model inherits from "),Zi=r("a"),r_=t("PreTrainedModel"),a_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=p(),Kr=r("p"),l_=t("This model is also a PyTorch "),Ur=r("a"),d_=t("torch.nn.Module"),c_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u_=p(),Bn=r("div"),y(Rr.$$.fragment),p_=p(),xt=r("p"),f_=t("The "),Xi=r("a"),h_=t("FunnelForMultipleChoice"),m_=t(" forward method, overrides the "),$d=r("code"),g_=t("__call__"),__=t(" special method."),k_=p(),y(Co.$$.fragment),T_=p(),y(Oo.$$.fragment),ku=p(),jt=r("h2"),Lo=r("a"),Ed=r("span"),y(Hr.$$.fragment),F_=p(),Md=r("span"),y_=t("FunnelForTokenClassification"),Tu=p(),_n=r("div"),y(Vr.$$.fragment),b_=p(),zd=r("p"),w_=t(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),v_=p(),Yr=r("p"),$_=t("The Funnel Transformer model was proposed in "),Gr=r("a"),E_=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),M_=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),z_=p(),Zr=r("p"),q_=t("This model inherits from "),Ji=r("a"),P_=t("PreTrainedModel"),x_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=p(),Xr=r("p"),C_=t("This model is also a PyTorch "),Jr=r("a"),O_=t("torch.nn.Module"),L_=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D_=p(),yn=r("div"),y(ea.$$.fragment),A_=p(),Ct=r("p"),N_=t("The "),el=r("a"),I_=t("FunnelForTokenClassification"),S_=t(" forward method, overrides the "),qd=r("code"),B_=t("__call__"),W_=t(" special method."),Q_=p(),y(Do.$$.fragment),K_=p(),y(Ao.$$.fragment),U_=p(),y(No.$$.fragment),Fu=p(),Ot=r("h2"),Io=r("a"),Pd=r("span"),y(na.$$.fragment),R_=p(),xd=r("span"),H_=t("FunnelForQuestionAnswering"),yu=p(),kn=r("div"),y(ta.$$.fragment),V_=p(),Lt=r("p"),Y_=t(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),jd=r("code"),G_=t("span start logits"),Z_=t(" and "),Cd=r("code"),X_=t("span end logits"),J_=t(")."),ek=p(),oa=r("p"),nk=t("The Funnel Transformer model was proposed in "),sa=r("a"),tk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ok=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sk=p(),ra=r("p"),rk=t("This model inherits from "),nl=r("a"),ak=t("PreTrainedModel"),ik=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk=p(),aa=r("p"),dk=t("This model is also a PyTorch "),ia=r("a"),ck=t("torch.nn.Module"),uk=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pk=p(),bn=r("div"),y(la.$$.fragment),fk=p(),Dt=r("p"),hk=t("The "),tl=r("a"),mk=t("FunnelForQuestionAnswering"),gk=t(" forward method, overrides the "),Od=r("code"),_k=t("__call__"),kk=t(" special method."),Tk=p(),y(So.$$.fragment),Fk=p(),y(Bo.$$.fragment),yk=p(),y(Wo.$$.fragment),bu=p(),At=r("h2"),Qo=r("a"),Ld=r("span"),y(da.$$.fragment),bk=p(),Dd=r("span"),wk=t("TFFunnelBaseModel"),wu=p(),nn=r("div"),y(ca.$$.fragment),vk=p(),Ad=r("p"),$k=t(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Ek=p(),ua=r("p"),Mk=t("The Funnel Transformer model was proposed in "),pa=r("a"),zk=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qk=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Pk=p(),fa=r("p"),xk=t("This model inherits from "),ol=r("a"),jk=t("TFPreTrainedModel"),Ck=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok=p(),ha=r("p"),Lk=t("This model is also a "),ma=r("a"),Dk=t("tf.keras.Model"),Ak=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nk=p(),y(Ko.$$.fragment),Ik=p(),Wn=r("div"),y(ga.$$.fragment),Sk=p(),Nt=r("p"),Bk=t("The "),sl=r("a"),Wk=t("TFFunnelBaseModel"),Qk=t(" forward method, overrides the "),Nd=r("code"),Kk=t("__call__"),Uk=t(" special method."),Rk=p(),y(Uo.$$.fragment),Hk=p(),y(Ro.$$.fragment),vu=p(),It=r("h2"),Ho=r("a"),Id=r("span"),y(_a.$$.fragment),Vk=p(),Sd=r("span"),Yk=t("TFFunnelModel"),$u=p(),tn=r("div"),y(ka.$$.fragment),Gk=p(),Bd=r("p"),Zk=t("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Xk=p(),Ta=r("p"),Jk=t("The Funnel Transformer model was proposed in "),Fa=r("a"),eT=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tT=p(),ya=r("p"),oT=t("This model inherits from "),rl=r("a"),sT=t("TFPreTrainedModel"),rT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=p(),ba=r("p"),iT=t("This model is also a "),wa=r("a"),lT=t("tf.keras.Model"),dT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cT=p(),y(Vo.$$.fragment),uT=p(),Qn=r("div"),y(va.$$.fragment),pT=p(),St=r("p"),fT=t("The "),al=r("a"),hT=t("TFFunnelModel"),mT=t(" forward method, overrides the "),Wd=r("code"),gT=t("__call__"),_T=t(" special method."),kT=p(),y(Yo.$$.fragment),TT=p(),y(Go.$$.fragment),Eu=p(),Bt=r("h2"),Zo=r("a"),Qd=r("span"),y($a.$$.fragment),FT=p(),Kd=r("span"),yT=t("TFFunnelModelForPreTraining"),Mu=p(),on=r("div"),y(Ea.$$.fragment),bT=p(),Ud=r("p"),wT=t("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),vT=p(),Ma=r("p"),$T=t("The Funnel Transformer model was proposed in "),za=r("a"),ET=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),MT=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zT=p(),qa=r("p"),qT=t("This model inherits from "),il=r("a"),PT=t("TFPreTrainedModel"),xT=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jT=p(),Pa=r("p"),CT=t("This model is also a "),xa=r("a"),OT=t("tf.keras.Model"),LT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DT=p(),y(Xo.$$.fragment),AT=p(),Kn=r("div"),y(ja.$$.fragment),NT=p(),Wt=r("p"),IT=t("The "),ll=r("a"),ST=t("TFFunnelForPreTraining"),BT=t(" forward method, overrides the "),Rd=r("code"),WT=t("__call__"),QT=t(" special method."),KT=p(),y(Jo.$$.fragment),UT=p(),y(es.$$.fragment),zu=p(),Qt=r("h2"),ns=r("a"),Hd=r("span"),y(Ca.$$.fragment),RT=p(),Vd=r("span"),HT=t("TFFunnelForMaskedLM"),qu=p(),sn=r("div"),y(Oa.$$.fragment),VT=p(),La=r("p"),YT=t("Funnel Model with a "),Yd=r("code"),GT=t("language modeling"),ZT=t(" head on top."),XT=p(),Da=r("p"),JT=t("The Funnel Transformer model was proposed in "),Aa=r("a"),eF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tF=p(),Na=r("p"),oF=t("This model inherits from "),dl=r("a"),sF=t("TFPreTrainedModel"),rF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aF=p(),Ia=r("p"),iF=t("This model is also a "),Sa=r("a"),lF=t("tf.keras.Model"),dF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cF=p(),y(ts.$$.fragment),uF=p(),wn=r("div"),y(Ba.$$.fragment),pF=p(),Kt=r("p"),fF=t("The "),cl=r("a"),hF=t("TFFunnelForMaskedLM"),mF=t(" forward method, overrides the "),Gd=r("code"),gF=t("__call__"),_F=t(" special method."),kF=p(),y(os.$$.fragment),TF=p(),y(ss.$$.fragment),FF=p(),y(rs.$$.fragment),Pu=p(),Ut=r("h2"),as=r("a"),Zd=r("span"),y(Wa.$$.fragment),yF=p(),Xd=r("span"),bF=t("TFFunnelForSequenceClassification"),xu=p(),rn=r("div"),y(Qa.$$.fragment),wF=p(),Jd=r("p"),vF=t(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$F=p(),Ka=r("p"),EF=t("The Funnel Transformer model was proposed in "),Ua=r("a"),MF=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zF=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qF=p(),Ra=r("p"),PF=t("This model inherits from "),ul=r("a"),xF=t("TFPreTrainedModel"),jF=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),CF=p(),Ha=r("p"),OF=t("This model is also a "),Va=r("a"),LF=t("tf.keras.Model"),DF=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AF=p(),y(is.$$.fragment),NF=p(),vn=r("div"),y(Ya.$$.fragment),IF=p(),Rt=r("p"),SF=t("The "),pl=r("a"),BF=t("TFFunnelForSequenceClassification"),WF=t(" forward method, overrides the "),ec=r("code"),QF=t("__call__"),KF=t(" special method."),UF=p(),y(ls.$$.fragment),RF=p(),y(ds.$$.fragment),HF=p(),y(cs.$$.fragment),ju=p(),Ht=r("h2"),us=r("a"),nc=r("span"),y(Ga.$$.fragment),VF=p(),tc=r("span"),YF=t("TFFunnelForMultipleChoice"),Cu=p(),an=r("div"),y(Za.$$.fragment),GF=p(),oc=r("p"),ZF=t(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),XF=p(),Xa=r("p"),JF=t("The Funnel Transformer model was proposed in "),Ja=r("a"),ey=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ny=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ty=p(),ei=r("p"),oy=t("This model inherits from "),fl=r("a"),sy=t("TFPreTrainedModel"),ry=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay=p(),ni=r("p"),iy=t("This model is also a "),ti=r("a"),ly=t("tf.keras.Model"),dy=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cy=p(),y(ps.$$.fragment),uy=p(),Un=r("div"),y(oi.$$.fragment),py=p(),Vt=r("p"),fy=t("The "),hl=r("a"),hy=t("TFFunnelForMultipleChoice"),my=t(" forward method, overrides the "),sc=r("code"),gy=t("__call__"),_y=t(" special method."),ky=p(),y(fs.$$.fragment),Ty=p(),y(hs.$$.fragment),Ou=p(),Yt=r("h2"),ms=r("a"),rc=r("span"),y(si.$$.fragment),Fy=p(),ac=r("span"),yy=t("TFFunnelForTokenClassification"),Lu=p(),ln=r("div"),y(ri.$$.fragment),by=p(),ic=r("p"),wy=t(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vy=p(),ai=r("p"),$y=t("The Funnel Transformer model was proposed in "),ii=r("a"),Ey=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),My=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zy=p(),li=r("p"),qy=t("This model inherits from "),ml=r("a"),Py=t("TFPreTrainedModel"),xy=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jy=p(),di=r("p"),Cy=t("This model is also a "),ci=r("a"),Oy=t("tf.keras.Model"),Ly=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dy=p(),y(gs.$$.fragment),Ay=p(),$n=r("div"),y(ui.$$.fragment),Ny=p(),Gt=r("p"),Iy=t("The "),gl=r("a"),Sy=t("TFFunnelForTokenClassification"),By=t(" forward method, overrides the "),lc=r("code"),Wy=t("__call__"),Qy=t(" special method."),Ky=p(),y(_s.$$.fragment),Uy=p(),y(ks.$$.fragment),Ry=p(),y(Ts.$$.fragment),Du=p(),Zt=r("h2"),Fs=r("a"),dc=r("span"),y(pi.$$.fragment),Hy=p(),cc=r("span"),Vy=t("TFFunnelForQuestionAnswering"),Au=p(),dn=r("div"),y(fi.$$.fragment),Yy=p(),Xt=r("p"),Gy=t(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),uc=r("code"),Zy=t("span start logits"),Xy=t(" and "),pc=r("code"),Jy=t("span end logits"),eb=t(")."),nb=p(),hi=r("p"),tb=t("The Funnel Transformer model was proposed in "),mi=r("a"),ob=t(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sb=t(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rb=p(),gi=r("p"),ab=t("This model inherits from "),_l=r("a"),ib=t("TFPreTrainedModel"),lb=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),db=p(),_i=r("p"),cb=t("This model is also a "),ki=r("a"),ub=t("tf.keras.Model"),pb=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fb=p(),y(ys.$$.fragment),hb=p(),En=r("div"),y(Ti.$$.fragment),mb=p(),Jt=r("p"),gb=t("The "),kl=r("a"),_b=t("TFFunnelForQuestionAnswering"),kb=t(" forward method, overrides the "),fc=r("code"),Tb=t("__call__"),Fb=t(" special method."),yb=p(),y(bs.$$.fragment),bb=p(),y(ws.$$.fragment),wb=p(),y(vs.$$.fragment),this.h()},l(s){const T=j$('[data-svelte="svelte-1phssyn"]',document.head);d=a(T,"META",{name:!0,content:!0}),T.forEach(n),k=f(s),c=a(s,"H1",{class:!0});var Fi=i(c);h=a(Fi,"A",{id:!0,class:!0,href:!0});var hc=i(h);F=a(hc,"SPAN",{});var mc=i(F);b(l.$$.fragment,mc),mc.forEach(n),hc.forEach(n),u=f(Fi),x=a(Fi,"SPAN",{});var gc=i(x);ke=o(gc,"Funnel Transformer"),gc.forEach(n),Fi.forEach(n),fe=f(s),I=a(s,"H2",{class:!0});var yi=i(I);re=a(yi,"A",{id:!0,class:!0,href:!0});var _c=i(re);ee=a(_c,"SPAN",{});var kc=i(ee);b(M.$$.fragment,kc),kc.forEach(n),_c.forEach(n),Te=f(yi),U=a(yi,"SPAN",{});var Tc=i(U);Fe=o(Tc,"Overview"),Tc.forEach(n),yi.forEach(n),he=f(s),B=a(s,"P",{});var bi=i(B);ye=o(bi,"The Funnel Transformer model was proposed in the paper "),ae=a(bi,"A",{href:!0,rel:!0});var Fc=i(ae);H=o(Fc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),Fc.forEach(n),be=o(bi,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),bi.forEach(n),me=f(s),Q=a(s,"P",{});var yc=i(Q);we=o(yc,"The abstract from the paper is the following:"),yc.forEach(n),ge=f(s),K=a(s,"P",{});var bc=i(K);ue=a(bc,"EM",{});var wc=i(ue);ve=o(wc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),wc.forEach(n),bc.forEach(n),oe=f(s),j=a(s,"P",{});var vc=i(j);O=o(vc,"Tips:"),vc.forEach(n),_e=f(s),W=a(s,"UL",{});var wi=i(W);pe=a(wi,"LI",{});var $c=i(pe);$e=o($c,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),$c.forEach(n),V=f(wi),R=a(wi,"LI",{});var en=i(R);Ee=o(en,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),C=a(en,"A",{href:!0});var Ec=i(C);Me=o(Ec,"FunnelModel"),Ec.forEach(n),Y=o(en,", "),le=a(en,"A",{href:!0});var Mc=i(le);ze=o(Mc,"FunnelForPreTraining"),Mc.forEach(n),G=o(en,`,
`),de=a(en,"A",{href:!0});var zc=i(de);qe=o(zc,"FunnelForMaskedLM"),zc.forEach(n),N=o(en,", "),ce=a(en,"A",{href:!0});var qc=i(ce);Z=o(qc,"FunnelForTokenClassification"),qc.forEach(n),Pe=o(en,` and
class:`),ne=a(en,"EM",{});var Pc=i(ne);L=o(Pc,"~transformers.FunnelForQuestionAnswering"),Pc.forEach(n),xe=o(en,`. The second ones should be used for
`),D=a(en,"A",{href:!0});var xc=i(D);je=o(xc,"FunnelBaseModel"),xc.forEach(n),Ce=o(en,", "),g=a(en,"A",{href:!0});var jc=i(g);z=o(jc,"FunnelForSequenceClassification"),jc.forEach(n),We=o(en,` and
`),J=a(en,"A",{href:!0});var Cc=i(J);Qe=o(Cc,"FunnelForMultipleChoice"),Cc.forEach(n),Ke=o(en,"."),en.forEach(n),wi.forEach(n),q=f(s),Oe=a(s,"P",{});var eo=i(Oe);Ue=o(eo,"This model was contributed by "),De=a(eo,"A",{href:!0,rel:!0});var Oc=i(De);Re=o(Oc,"sgugger"),Oc.forEach(n),He=o(eo,". The original code can be found "),A=a(eo,"A",{href:!0,rel:!0});var Lc=i(A);X=o(Lc,"here"),Lc.forEach(n),Ve=o(eo,"."),eo.forEach(n),Ne=f(s),S=a(s,"H2",{class:!0});var vi=i(S);Le=a(vi,"A",{id:!0,class:!0,href:!0});var Dc=i(Le);Ae=a(Dc,"SPAN",{});var Ac=i(Ae);b(ie.$$.fragment,Ac),Ac.forEach(n),Dc.forEach(n),Ye=f(vi),te=a(vi,"SPAN",{});var Nc=i(te);Ge=o(Nc,"FunnelConfig"),Nc.forEach(n),vi.forEach(n),Xc=f(s),Jn=a(s,"DIV",{class:!0});var no=i(Jn);b(Ds.$$.fragment,no),af=f(no),et=a(no,"P",{});var nt=i(et);lf=o(nt,"This is the configuration class to store the configuration of a "),Mi=a(nt,"A",{href:!0});var Ic=i(Mi);df=o(Ic,"FunnelModel"),Ic.forEach(n),cf=o(nt," or a "),zi=a(nt,"A",{href:!0});var Sc=i(zi);uf=o(Sc,"TFBertModel"),Sc.forEach(n),pf=o(nt,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),As=a(nt,"A",{href:!0,rel:!0});var Bc=i(As);ff=o(Bc,"funnel-transformer/small"),Bc.forEach(n),hf=o(nt," architecture."),nt.forEach(n),mf=f(no),ut=a(no,"P",{});var to=i(ut);gf=o(to,"Configuration objects inherit from "),qi=a(to,"A",{href:!0});var Wc=i(qi);_f=o(Wc,"PretrainedConfig"),Wc.forEach(n),kf=o(to,` and can be used to control the model outputs. Read the
documentation from `),Pi=a(to,"A",{href:!0});var Qc=i(Pi);Tf=o(Qc,"PretrainedConfig"),Qc.forEach(n),Ff=o(to," for more information."),to.forEach(n),no.forEach(n),Jc=f(s),pt=a(s,"H2",{class:!0});var $i=i(pt);so=a($i,"A",{id:!0,class:!0,href:!0});var Kc=i(so);Il=a(Kc,"SPAN",{});var Uc=i(Il);b(Ns.$$.fragment,Uc),Uc.forEach(n),Kc.forEach(n),yf=f($i),Sl=a($i,"SPAN",{});var Rc=i(Sl);bf=o(Rc,"FunnelTokenizer"),Rc.forEach(n),$i.forEach(n),eu=f(s),Je=a(s,"DIV",{class:!0});var cn=i(Je);b(Is.$$.fragment,cn),wf=f(cn),Bl=a(cn,"P",{});var Hc=i(Bl);vf=o(Hc,"Construct a Funnel Transformer tokenizer."),Hc.forEach(n),$f=f(cn),ro=a(cn,"P",{});var $s=i(ro);xi=a($s,"A",{href:!0});var Vc=i(xi);Ef=o(Vc,"FunnelTokenizer"),Vc.forEach(n),Mf=o($s," is identical to "),ji=a($s,"A",{href:!0});var Yc=i(ji);zf=o(Yc,"BertTokenizer"),Yc.forEach(n),qf=o($s,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),$s.forEach(n),Pf=f(cn),Ss=a(cn,"P",{});var Ei=i(Ss);xf=o(Ei,"Refer to superclass "),Ci=a(Ei,"A",{href:!0});var Gc=i(Ci);jf=o(Gc,"BertTokenizer"),Gc.forEach(n),Cf=o(Ei," for usage examples and documentation concerning parameters."),Ei.forEach(n),Of=f(cn),tt=a(cn,"DIV",{class:!0});var oo=i(tt);b(Bs.$$.fragment,oo),Lf=f(oo),Wl=a(oo,"P",{});var Eb=i(Wl);Df=o(Eb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Eb.forEach(n),Af=f(oo),Ws=a(oo,"UL",{});var Iu=i(Ws);Oi=a(Iu,"LI",{});var vb=i(Oi);Nf=o(vb,"single sequence: "),Ql=a(vb,"CODE",{});var Mb=i(Ql);If=o(Mb,"[CLS] X [SEP]"),Mb.forEach(n),vb.forEach(n),Sf=f(Iu),Li=a(Iu,"LI",{});var $b=i(Li);Bf=o($b,"pair of sequences: "),Kl=a($b,"CODE",{});var zb=i(Kl);Wf=o(zb,"[CLS] A [SEP] B [SEP]"),zb.forEach(n),$b.forEach(n),Iu.forEach(n),oo.forEach(n),Qf=f(cn),ao=a(cn,"DIV",{class:!0});var Su=i(ao);b(Qs.$$.fragment,Su),Kf=f(Su),Ks=a(Su,"P",{});var Bu=i(Ks);Uf=o(Bu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ul=a(Bu,"CODE",{});var qb=i(Ul);Rf=o(qb,"prepare_for_model"),qb.forEach(n),Hf=o(Bu," method."),Bu.forEach(n),Su.forEach(n),Vf=f(cn),Dn=a(cn,"DIV",{class:!0});var Es=i(Dn);b(Us.$$.fragment,Es),Yf=f(Es),Rl=a(Es,"P",{});var Pb=i(Rl);Gf=o(Pb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Pb.forEach(n),Zf=f(Es),b(io.$$.fragment,Es),Xf=f(Es),ft=a(Es,"P",{});var Tl=i(ft);Jf=o(Tl,"If "),Hl=a(Tl,"CODE",{});var xb=i(Hl);eh=o(xb,"token_ids_1"),xb.forEach(n),nh=o(Tl," is "),Vl=a(Tl,"CODE",{});var jb=i(Vl);th=o(jb,"None"),jb.forEach(n),oh=o(Tl,", this method only returns the first portion of the mask (0s)."),Tl.forEach(n),Es.forEach(n),sh=f(cn),Di=a(cn,"DIV",{class:!0});var Cb=i(Di);b(Rs.$$.fragment,Cb),Cb.forEach(n),cn.forEach(n),nu=f(s),ht=a(s,"H2",{class:!0});var Wu=i(ht);lo=a(Wu,"A",{id:!0,class:!0,href:!0});var Ob=i(lo);Yl=a(Ob,"SPAN",{});var Lb=i(Yl);b(Hs.$$.fragment,Lb),Lb.forEach(n),Ob.forEach(n),rh=f(Wu),Gl=a(Wu,"SPAN",{});var Db=i(Gl);ah=o(Db,"FunnelTokenizerFast"),Db.forEach(n),Wu.forEach(n),tu=f(s),Tn=a(s,"DIV",{class:!0});var ot=i(Tn);b(Vs.$$.fragment,ot),ih=f(ot),Ys=a(ot,"P",{});var Qu=i(Ys);lh=o(Qu,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Zl=a(Qu,"EM",{});var Ab=i(Zl);dh=o(Ab,"tokenizers"),Ab.forEach(n),ch=o(Qu," library)."),Qu.forEach(n),uh=f(ot),co=a(ot,"P",{});var Zc=i(co);Ai=a(Zc,"A",{href:!0});var Nb=i(Ai);ph=o(Nb,"FunnelTokenizerFast"),Nb.forEach(n),fh=o(Zc," is identical to "),Ni=a(Zc,"A",{href:!0});var Ib=i(Ni);hh=o(Ib,"BertTokenizerFast"),Ib.forEach(n),mh=o(Zc,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Zc.forEach(n),gh=f(ot),Gs=a(ot,"P",{});var Ku=i(Gs);_h=o(Ku,"Refer to superclass "),Ii=a(Ku,"A",{href:!0});var Sb=i(Ii);kh=o(Sb,"BertTokenizerFast"),Sb.forEach(n),Th=o(Ku," for usage examples and documentation concerning parameters."),Ku.forEach(n),Fh=f(ot),An=a(ot,"DIV",{class:!0});var Ms=i(An);b(Zs.$$.fragment,Ms),yh=f(Ms),Xl=a(Ms,"P",{});var Bb=i(Xl);bh=o(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Bb.forEach(n),wh=f(Ms),b(uo.$$.fragment,Ms),vh=f(Ms),mt=a(Ms,"P",{});var Fl=i(mt);$h=o(Fl,"If "),Jl=a(Fl,"CODE",{});var Wb=i(Jl);Eh=o(Wb,"token_ids_1"),Wb.forEach(n),Mh=o(Fl," is "),ed=a(Fl,"CODE",{});var Qb=i(ed);zh=o(Qb,"None"),Qb.forEach(n),qh=o(Fl,", this method only returns the first portion of the mask (0s)."),Fl.forEach(n),Ms.forEach(n),ot.forEach(n),ou=f(s),gt=a(s,"H2",{class:!0});var Uu=i(gt);po=a(Uu,"A",{id:!0,class:!0,href:!0});var Kb=i(po);nd=a(Kb,"SPAN",{});var Ub=i(nd);b(Xs.$$.fragment,Ub),Ub.forEach(n),Kb.forEach(n),Ph=f(Uu),td=a(Uu,"SPAN",{});var Rb=i(td);xh=o(Rb,"Funnel specific outputs"),Rb.forEach(n),Uu.forEach(n),su=f(s),_t=a(s,"DIV",{class:!0});var Ru=i(_t);b(Js.$$.fragment,Ru),jh=f(Ru),er=a(Ru,"P",{});var Hu=i(er);Ch=o(Hu,"Output type of "),Si=a(Hu,"A",{href:!0});var Hb=i(Si);Oh=o(Hb,"FunnelForPreTraining"),Hb.forEach(n),Lh=o(Hu,"."),Hu.forEach(n),Ru.forEach(n),ru=f(s),kt=a(s,"DIV",{class:!0});var Vu=i(kt);b(nr.$$.fragment,Vu),Dh=f(Vu),tr=a(Vu,"P",{});var Yu=i(tr);Ah=o(Yu,"Output type of "),Bi=a(Yu,"A",{href:!0});var Vb=i(Bi);Nh=o(Vb,"FunnelForPreTraining"),Vb.forEach(n),Ih=o(Yu,"."),Yu.forEach(n),Vu.forEach(n),au=f(s),Tt=a(s,"H2",{class:!0});var Gu=i(Tt);fo=a(Gu,"A",{id:!0,class:!0,href:!0});var Yb=i(fo);od=a(Yb,"SPAN",{});var Gb=i(od);b(or.$$.fragment,Gb),Gb.forEach(n),Yb.forEach(n),Sh=f(Gu),sd=a(Gu,"SPAN",{});var Zb=i(sd);Bh=o(Zb,"FunnelBaseModel"),Zb.forEach(n),Gu.forEach(n),iu=f(s),pn=a(s,"DIV",{class:!0});var Rn=i(pn);b(sr.$$.fragment,Rn),Wh=f(Rn),rd=a(Rn,"P",{});var Xb=i(rd);Qh=o(Xb,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Xb.forEach(n),Kh=f(Rn),rr=a(Rn,"P",{});var Zu=i(rr);Uh=o(Zu,"The Funnel Transformer model was proposed in "),ar=a(Zu,"A",{href:!0,rel:!0});var Jb=i(ar);Rh=o(Jb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Jb.forEach(n),Hh=o(Zu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Zu.forEach(n),Vh=f(Rn),ir=a(Rn,"P",{});var Xu=i(ir);Yh=o(Xu,"This model inherits from "),Wi=a(Xu,"A",{href:!0});var ew=i(Wi);Gh=o(ew,"PreTrainedModel"),ew.forEach(n),Zh=o(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(n),Xh=f(Rn),lr=a(Rn,"P",{});var Ju=i(lr);Jh=o(Ju,"This model is also a PyTorch "),dr=a(Ju,"A",{href:!0,rel:!0});var nw=i(dr);em=o(nw,"torch.nn.Module"),nw.forEach(n),nm=o(Ju,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju.forEach(n),tm=f(Rn),Nn=a(Rn,"DIV",{class:!0});var zs=i(Nn);b(cr.$$.fragment,zs),om=f(zs),Ft=a(zs,"P",{});var yl=i(Ft);sm=o(yl,"The "),Qi=a(yl,"A",{href:!0});var tw=i(Qi);rm=o(tw,"FunnelBaseModel"),tw.forEach(n),am=o(yl," forward method, overrides the "),ad=a(yl,"CODE",{});var ow=i(ad);im=o(ow,"__call__"),ow.forEach(n),lm=o(yl," special method."),yl.forEach(n),dm=f(zs),b(ho.$$.fragment,zs),cm=f(zs),b(mo.$$.fragment,zs),zs.forEach(n),Rn.forEach(n),lu=f(s),yt=a(s,"H2",{class:!0});var ep=i(yt);go=a(ep,"A",{id:!0,class:!0,href:!0});var sw=i(go);id=a(sw,"SPAN",{});var rw=i(id);b(ur.$$.fragment,rw),rw.forEach(n),sw.forEach(n),um=f(ep),ld=a(ep,"SPAN",{});var aw=i(ld);pm=o(aw,"FunnelModel"),aw.forEach(n),ep.forEach(n),du=f(s),fn=a(s,"DIV",{class:!0});var Hn=i(fn);b(pr.$$.fragment,Hn),fm=f(Hn),dd=a(Hn,"P",{});var iw=i(dd);hm=o(iw,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),iw.forEach(n),mm=f(Hn),fr=a(Hn,"P",{});var np=i(fr);gm=o(np,"The Funnel Transformer model was proposed in "),hr=a(np,"A",{href:!0,rel:!0});var lw=i(hr);_m=o(lw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),lw.forEach(n),km=o(np," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),np.forEach(n),Tm=f(Hn),mr=a(Hn,"P",{});var tp=i(mr);Fm=o(tp,"This model inherits from "),Ki=a(tp,"A",{href:!0});var dw=i(Ki);ym=o(dw,"PreTrainedModel"),dw.forEach(n),bm=o(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(n),wm=f(Hn),gr=a(Hn,"P",{});var op=i(gr);vm=o(op,"This model is also a PyTorch "),_r=a(op,"A",{href:!0,rel:!0});var cw=i(_r);$m=o(cw,"torch.nn.Module"),cw.forEach(n),Em=o(op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op.forEach(n),Mm=f(Hn),In=a(Hn,"DIV",{class:!0});var qs=i(In);b(kr.$$.fragment,qs),zm=f(qs),bt=a(qs,"P",{});var bl=i(bt);qm=o(bl,"The "),Ui=a(bl,"A",{href:!0});var uw=i(Ui);Pm=o(uw,"FunnelModel"),uw.forEach(n),xm=o(bl," forward method, overrides the "),cd=a(bl,"CODE",{});var pw=i(cd);jm=o(pw,"__call__"),pw.forEach(n),Cm=o(bl," special method."),bl.forEach(n),Om=f(qs),b(_o.$$.fragment,qs),Lm=f(qs),b(ko.$$.fragment,qs),qs.forEach(n),Hn.forEach(n),cu=f(s),wt=a(s,"H2",{class:!0});var sp=i(wt);To=a(sp,"A",{id:!0,class:!0,href:!0});var fw=i(To);ud=a(fw,"SPAN",{});var hw=i(ud);b(Tr.$$.fragment,hw),hw.forEach(n),fw.forEach(n),Dm=f(sp),pd=a(sp,"SPAN",{});var mw=i(pd);Am=o(mw,"FunnelModelForPreTraining"),mw.forEach(n),sp.forEach(n),uu=f(s),vt=a(s,"DIV",{class:!0});var rp=i(vt);b(Fr.$$.fragment,rp),Nm=f(rp),Sn=a(rp,"DIV",{class:!0});var Ps=i(Sn);b(yr.$$.fragment,Ps),Im=f(Ps),$t=a(Ps,"P",{});var wl=i($t);Sm=o(wl,"The "),Ri=a(wl,"A",{href:!0});var gw=i(Ri);Bm=o(gw,"FunnelForPreTraining"),gw.forEach(n),Wm=o(wl," forward method, overrides the "),fd=a(wl,"CODE",{});var _w=i(fd);Qm=o(_w,"__call__"),_w.forEach(n),Km=o(wl," special method."),wl.forEach(n),Um=f(Ps),b(Fo.$$.fragment,Ps),Rm=f(Ps),b(yo.$$.fragment,Ps),Ps.forEach(n),rp.forEach(n),pu=f(s),Et=a(s,"H2",{class:!0});var ap=i(Et);bo=a(ap,"A",{id:!0,class:!0,href:!0});var kw=i(bo);hd=a(kw,"SPAN",{});var Tw=i(hd);b(br.$$.fragment,Tw),Tw.forEach(n),kw.forEach(n),Hm=f(ap),md=a(ap,"SPAN",{});var Fw=i(md);Vm=o(Fw,"FunnelForMaskedLM"),Fw.forEach(n),ap.forEach(n),fu=f(s),hn=a(s,"DIV",{class:!0});var Vn=i(hn);b(wr.$$.fragment,Vn),Ym=f(Vn),vr=a(Vn,"P",{});var ip=i(vr);Gm=o(ip,"Funnel Transformer Model with a "),gd=a(ip,"CODE",{});var yw=i(gd);Zm=o(yw,"language modeling"),yw.forEach(n),Xm=o(ip," head on top."),ip.forEach(n),Jm=f(Vn),$r=a(Vn,"P",{});var lp=i($r);eg=o(lp,"The Funnel Transformer model was proposed in "),Er=a(lp,"A",{href:!0,rel:!0});var bw=i(Er);ng=o(bw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),bw.forEach(n),tg=o(lp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),lp.forEach(n),og=f(Vn),Mr=a(Vn,"P",{});var dp=i(Mr);sg=o(dp,"This model inherits from "),Hi=a(dp,"A",{href:!0});var ww=i(Hi);rg=o(ww,"PreTrainedModel"),ww.forEach(n),ag=o(dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp.forEach(n),ig=f(Vn),zr=a(Vn,"P",{});var cp=i(zr);lg=o(cp,"This model is also a PyTorch "),qr=a(cp,"A",{href:!0,rel:!0});var vw=i(qr);dg=o(vw,"torch.nn.Module"),vw.forEach(n),cg=o(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(n),ug=f(Vn),Fn=a(Vn,"DIV",{class:!0});var st=i(Fn);b(Pr.$$.fragment,st),pg=f(st),Mt=a(st,"P",{});var vl=i(Mt);fg=o(vl,"The "),Vi=a(vl,"A",{href:!0});var $w=i(Vi);hg=o($w,"FunnelForMaskedLM"),$w.forEach(n),mg=o(vl," forward method, overrides the "),_d=a(vl,"CODE",{});var Ew=i(_d);gg=o(Ew,"__call__"),Ew.forEach(n),_g=o(vl," special method."),vl.forEach(n),kg=f(st),b(wo.$$.fragment,st),Tg=f(st),b(vo.$$.fragment,st),Fg=f(st),b($o.$$.fragment,st),st.forEach(n),Vn.forEach(n),hu=f(s),zt=a(s,"H2",{class:!0});var up=i(zt);Eo=a(up,"A",{id:!0,class:!0,href:!0});var Mw=i(Eo);kd=a(Mw,"SPAN",{});var zw=i(kd);b(xr.$$.fragment,zw),zw.forEach(n),Mw.forEach(n),yg=f(up),Td=a(up,"SPAN",{});var qw=i(Td);bg=o(qw,"FunnelForSequenceClassification"),qw.forEach(n),up.forEach(n),mu=f(s),mn=a(s,"DIV",{class:!0});var Yn=i(mn);b(jr.$$.fragment,Yn),wg=f(Yn),Fd=a(Yn,"P",{});var Pw=i(Fd);vg=o(Pw,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),Pw.forEach(n),$g=f(Yn),Cr=a(Yn,"P",{});var pp=i(Cr);Eg=o(pp,"The Funnel Transformer model was proposed in "),Or=a(pp,"A",{href:!0,rel:!0});var xw=i(Or);Mg=o(xw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),xw.forEach(n),zg=o(pp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),pp.forEach(n),qg=f(Yn),Lr=a(Yn,"P",{});var fp=i(Lr);Pg=o(fp,"This model inherits from "),Yi=a(fp,"A",{href:!0});var jw=i(Yi);xg=o(jw,"PreTrainedModel"),jw.forEach(n),jg=o(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(n),Cg=f(Yn),Dr=a(Yn,"P",{});var hp=i(Dr);Og=o(hp,"This model is also a PyTorch "),Ar=a(hp,"A",{href:!0,rel:!0});var Cw=i(Ar);Lg=o(Cw,"torch.nn.Module"),Cw.forEach(n),Dg=o(hp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hp.forEach(n),Ag=f(Yn),un=a(Yn,"DIV",{class:!0});var Mn=i(un);b(Nr.$$.fragment,Mn),Ng=f(Mn),qt=a(Mn,"P",{});var $l=i(qt);Ig=o($l,"The "),Gi=a($l,"A",{href:!0});var Ow=i(Gi);Sg=o(Ow,"FunnelForSequenceClassification"),Ow.forEach(n),Bg=o($l," forward method, overrides the "),yd=a($l,"CODE",{});var Lw=i(yd);Wg=o(Lw,"__call__"),Lw.forEach(n),Qg=o($l," special method."),$l.forEach(n),Kg=f(Mn),b(Mo.$$.fragment,Mn),Ug=f(Mn),b(zo.$$.fragment,Mn),Rg=f(Mn),b(qo.$$.fragment,Mn),Hg=f(Mn),b(Po.$$.fragment,Mn),Vg=f(Mn),b(xo.$$.fragment,Mn),Mn.forEach(n),Yn.forEach(n),gu=f(s),Pt=a(s,"H2",{class:!0});var mp=i(Pt);jo=a(mp,"A",{id:!0,class:!0,href:!0});var Dw=i(jo);bd=a(Dw,"SPAN",{});var Aw=i(bd);b(Ir.$$.fragment,Aw),Aw.forEach(n),Dw.forEach(n),Yg=f(mp),wd=a(mp,"SPAN",{});var Nw=i(wd);Gg=o(Nw,"FunnelForMultipleChoice"),Nw.forEach(n),mp.forEach(n),_u=f(s),gn=a(s,"DIV",{class:!0});var Gn=i(gn);b(Sr.$$.fragment,Gn),Zg=f(Gn),vd=a(Gn,"P",{});var Iw=i(vd);Xg=o(Iw,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Iw.forEach(n),Jg=f(Gn),Br=a(Gn,"P",{});var gp=i(Br);e_=o(gp,"The Funnel Transformer model was proposed in "),Wr=a(gp,"A",{href:!0,rel:!0});var Sw=i(Wr);n_=o(Sw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Sw.forEach(n),t_=o(gp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),gp.forEach(n),o_=f(Gn),Qr=a(Gn,"P",{});var _p=i(Qr);s_=o(_p,"This model inherits from "),Zi=a(_p,"A",{href:!0});var Bw=i(Zi);r_=o(Bw,"PreTrainedModel"),Bw.forEach(n),a_=o(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(n),i_=f(Gn),Kr=a(Gn,"P",{});var kp=i(Kr);l_=o(kp,"This model is also a PyTorch "),Ur=a(kp,"A",{href:!0,rel:!0});var Ww=i(Ur);d_=o(Ww,"torch.nn.Module"),Ww.forEach(n),c_=o(kp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp.forEach(n),u_=f(Gn),Bn=a(Gn,"DIV",{class:!0});var xs=i(Bn);b(Rr.$$.fragment,xs),p_=f(xs),xt=a(xs,"P",{});var El=i(xt);f_=o(El,"The "),Xi=a(El,"A",{href:!0});var Qw=i(Xi);h_=o(Qw,"FunnelForMultipleChoice"),Qw.forEach(n),m_=o(El," forward method, overrides the "),$d=a(El,"CODE",{});var Kw=i($d);g_=o(Kw,"__call__"),Kw.forEach(n),__=o(El," special method."),El.forEach(n),k_=f(xs),b(Co.$$.fragment,xs),T_=f(xs),b(Oo.$$.fragment,xs),xs.forEach(n),Gn.forEach(n),ku=f(s),jt=a(s,"H2",{class:!0});var Tp=i(jt);Lo=a(Tp,"A",{id:!0,class:!0,href:!0});var Uw=i(Lo);Ed=a(Uw,"SPAN",{});var Rw=i(Ed);b(Hr.$$.fragment,Rw),Rw.forEach(n),Uw.forEach(n),F_=f(Tp),Md=a(Tp,"SPAN",{});var Hw=i(Md);y_=o(Hw,"FunnelForTokenClassification"),Hw.forEach(n),Tp.forEach(n),Tu=f(s),_n=a(s,"DIV",{class:!0});var Zn=i(_n);b(Vr.$$.fragment,Zn),b_=f(Zn),zd=a(Zn,"P",{});var Vw=i(zd);w_=o(Vw,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Vw.forEach(n),v_=f(Zn),Yr=a(Zn,"P",{});var Fp=i(Yr);$_=o(Fp,"The Funnel Transformer model was proposed in "),Gr=a(Fp,"A",{href:!0,rel:!0});var Yw=i(Gr);E_=o(Yw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Yw.forEach(n),M_=o(Fp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Fp.forEach(n),z_=f(Zn),Zr=a(Zn,"P",{});var yp=i(Zr);q_=o(yp,"This model inherits from "),Ji=a(yp,"A",{href:!0});var Gw=i(Ji);P_=o(Gw,"PreTrainedModel"),Gw.forEach(n),x_=o(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(n),j_=f(Zn),Xr=a(Zn,"P",{});var bp=i(Xr);C_=o(bp,"This model is also a PyTorch "),Jr=a(bp,"A",{href:!0,rel:!0});var Zw=i(Jr);O_=o(Zw,"torch.nn.Module"),Zw.forEach(n),L_=o(bp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bp.forEach(n),D_=f(Zn),yn=a(Zn,"DIV",{class:!0});var rt=i(yn);b(ea.$$.fragment,rt),A_=f(rt),Ct=a(rt,"P",{});var Ml=i(Ct);N_=o(Ml,"The "),el=a(Ml,"A",{href:!0});var Xw=i(el);I_=o(Xw,"FunnelForTokenClassification"),Xw.forEach(n),S_=o(Ml," forward method, overrides the "),qd=a(Ml,"CODE",{});var Jw=i(qd);B_=o(Jw,"__call__"),Jw.forEach(n),W_=o(Ml," special method."),Ml.forEach(n),Q_=f(rt),b(Do.$$.fragment,rt),K_=f(rt),b(Ao.$$.fragment,rt),U_=f(rt),b(No.$$.fragment,rt),rt.forEach(n),Zn.forEach(n),Fu=f(s),Ot=a(s,"H2",{class:!0});var wp=i(Ot);Io=a(wp,"A",{id:!0,class:!0,href:!0});var ev=i(Io);Pd=a(ev,"SPAN",{});var nv=i(Pd);b(na.$$.fragment,nv),nv.forEach(n),ev.forEach(n),R_=f(wp),xd=a(wp,"SPAN",{});var tv=i(xd);H_=o(tv,"FunnelForQuestionAnswering"),tv.forEach(n),wp.forEach(n),yu=f(s),kn=a(s,"DIV",{class:!0});var Xn=i(kn);b(ta.$$.fragment,Xn),V_=f(Xn),Lt=a(Xn,"P",{});var zl=i(Lt);Y_=o(zl,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),jd=a(zl,"CODE",{});var ov=i(jd);G_=o(ov,"span start logits"),ov.forEach(n),Z_=o(zl," and "),Cd=a(zl,"CODE",{});var sv=i(Cd);X_=o(sv,"span end logits"),sv.forEach(n),J_=o(zl,")."),zl.forEach(n),ek=f(Xn),oa=a(Xn,"P",{});var vp=i(oa);nk=o(vp,"The Funnel Transformer model was proposed in "),sa=a(vp,"A",{href:!0,rel:!0});var rv=i(sa);tk=o(rv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),rv.forEach(n),ok=o(vp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),vp.forEach(n),sk=f(Xn),ra=a(Xn,"P",{});var $p=i(ra);rk=o($p,"This model inherits from "),nl=a($p,"A",{href:!0});var av=i(nl);ak=o(av,"PreTrainedModel"),av.forEach(n),ik=o($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(n),lk=f(Xn),aa=a(Xn,"P",{});var Ep=i(aa);dk=o(Ep,"This model is also a PyTorch "),ia=a(Ep,"A",{href:!0,rel:!0});var iv=i(ia);ck=o(iv,"torch.nn.Module"),iv.forEach(n),uk=o(Ep,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ep.forEach(n),pk=f(Xn),bn=a(Xn,"DIV",{class:!0});var at=i(bn);b(la.$$.fragment,at),fk=f(at),Dt=a(at,"P",{});var ql=i(Dt);hk=o(ql,"The "),tl=a(ql,"A",{href:!0});var lv=i(tl);mk=o(lv,"FunnelForQuestionAnswering"),lv.forEach(n),gk=o(ql," forward method, overrides the "),Od=a(ql,"CODE",{});var dv=i(Od);_k=o(dv,"__call__"),dv.forEach(n),kk=o(ql," special method."),ql.forEach(n),Tk=f(at),b(So.$$.fragment,at),Fk=f(at),b(Bo.$$.fragment,at),yk=f(at),b(Wo.$$.fragment,at),at.forEach(n),Xn.forEach(n),bu=f(s),At=a(s,"H2",{class:!0});var Mp=i(At);Qo=a(Mp,"A",{id:!0,class:!0,href:!0});var cv=i(Qo);Ld=a(cv,"SPAN",{});var uv=i(Ld);b(da.$$.fragment,uv),uv.forEach(n),cv.forEach(n),bk=f(Mp),Dd=a(Mp,"SPAN",{});var pv=i(Dd);wk=o(pv,"TFFunnelBaseModel"),pv.forEach(n),Mp.forEach(n),wu=f(s),nn=a(s,"DIV",{class:!0});var zn=i(nn);b(ca.$$.fragment,zn),vk=f(zn),Ad=a(zn,"P",{});var fv=i(Ad);$k=o(fv,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),fv.forEach(n),Ek=f(zn),ua=a(zn,"P",{});var zp=i(ua);Mk=o(zp,"The Funnel Transformer model was proposed in "),pa=a(zp,"A",{href:!0,rel:!0});var hv=i(pa);zk=o(hv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),hv.forEach(n),qk=o(zp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zp.forEach(n),Pk=f(zn),fa=a(zn,"P",{});var qp=i(fa);xk=o(qp,"This model inherits from "),ol=a(qp,"A",{href:!0});var mv=i(ol);jk=o(mv,"TFPreTrainedModel"),mv.forEach(n),Ck=o(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(n),Ok=f(zn),ha=a(zn,"P",{});var Pp=i(ha);Lk=o(Pp,"This model is also a "),ma=a(Pp,"A",{href:!0,rel:!0});var gv=i(ma);Dk=o(gv,"tf.keras.Model"),gv.forEach(n),Ak=o(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(n),Nk=f(zn),b(Ko.$$.fragment,zn),Ik=f(zn),Wn=a(zn,"DIV",{class:!0});var js=i(Wn);b(ga.$$.fragment,js),Sk=f(js),Nt=a(js,"P",{});var Pl=i(Nt);Bk=o(Pl,"The "),sl=a(Pl,"A",{href:!0});var _v=i(sl);Wk=o(_v,"TFFunnelBaseModel"),_v.forEach(n),Qk=o(Pl," forward method, overrides the "),Nd=a(Pl,"CODE",{});var kv=i(Nd);Kk=o(kv,"__call__"),kv.forEach(n),Uk=o(Pl," special method."),Pl.forEach(n),Rk=f(js),b(Uo.$$.fragment,js),Hk=f(js),b(Ro.$$.fragment,js),js.forEach(n),zn.forEach(n),vu=f(s),It=a(s,"H2",{class:!0});var xp=i(It);Ho=a(xp,"A",{id:!0,class:!0,href:!0});var Tv=i(Ho);Id=a(Tv,"SPAN",{});var Fv=i(Id);b(_a.$$.fragment,Fv),Fv.forEach(n),Tv.forEach(n),Vk=f(xp),Sd=a(xp,"SPAN",{});var yv=i(Sd);Yk=o(yv,"TFFunnelModel"),yv.forEach(n),xp.forEach(n),$u=f(s),tn=a(s,"DIV",{class:!0});var qn=i(tn);b(ka.$$.fragment,qn),Gk=f(qn),Bd=a(qn,"P",{});var bv=i(Bd);Zk=o(bv,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),bv.forEach(n),Xk=f(qn),Ta=a(qn,"P",{});var jp=i(Ta);Jk=o(jp,"The Funnel Transformer model was proposed in "),Fa=a(jp,"A",{href:!0,rel:!0});var wv=i(Fa);eT=o(wv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),wv.forEach(n),nT=o(jp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),jp.forEach(n),tT=f(qn),ya=a(qn,"P",{});var Cp=i(ya);oT=o(Cp,"This model inherits from "),rl=a(Cp,"A",{href:!0});var vv=i(rl);sT=o(vv,"TFPreTrainedModel"),vv.forEach(n),rT=o(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp.forEach(n),aT=f(qn),ba=a(qn,"P",{});var Op=i(ba);iT=o(Op,"This model is also a "),wa=a(Op,"A",{href:!0,rel:!0});var $v=i(wa);lT=o($v,"tf.keras.Model"),$v.forEach(n),dT=o(Op,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Op.forEach(n),cT=f(qn),b(Vo.$$.fragment,qn),uT=f(qn),Qn=a(qn,"DIV",{class:!0});var Cs=i(Qn);b(va.$$.fragment,Cs),pT=f(Cs),St=a(Cs,"P",{});var xl=i(St);fT=o(xl,"The "),al=a(xl,"A",{href:!0});var Ev=i(al);hT=o(Ev,"TFFunnelModel"),Ev.forEach(n),mT=o(xl," forward method, overrides the "),Wd=a(xl,"CODE",{});var Mv=i(Wd);gT=o(Mv,"__call__"),Mv.forEach(n),_T=o(xl," special method."),xl.forEach(n),kT=f(Cs),b(Yo.$$.fragment,Cs),TT=f(Cs),b(Go.$$.fragment,Cs),Cs.forEach(n),qn.forEach(n),Eu=f(s),Bt=a(s,"H2",{class:!0});var Lp=i(Bt);Zo=a(Lp,"A",{id:!0,class:!0,href:!0});var zv=i(Zo);Qd=a(zv,"SPAN",{});var qv=i(Qd);b($a.$$.fragment,qv),qv.forEach(n),zv.forEach(n),FT=f(Lp),Kd=a(Lp,"SPAN",{});var Pv=i(Kd);yT=o(Pv,"TFFunnelModelForPreTraining"),Pv.forEach(n),Lp.forEach(n),Mu=f(s),on=a(s,"DIV",{class:!0});var Pn=i(on);b(Ea.$$.fragment,Pn),bT=f(Pn),Ud=a(Pn,"P",{});var xv=i(Ud);wT=o(xv,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),xv.forEach(n),vT=f(Pn),Ma=a(Pn,"P",{});var Dp=i(Ma);$T=o(Dp,"The Funnel Transformer model was proposed in "),za=a(Dp,"A",{href:!0,rel:!0});var jv=i(za);ET=o(jv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),jv.forEach(n),MT=o(Dp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Dp.forEach(n),zT=f(Pn),qa=a(Pn,"P",{});var Ap=i(qa);qT=o(Ap,"This model inherits from "),il=a(Ap,"A",{href:!0});var Cv=i(il);PT=o(Cv,"TFPreTrainedModel"),Cv.forEach(n),xT=o(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(n),jT=f(Pn),Pa=a(Pn,"P",{});var Np=i(Pa);CT=o(Np,"This model is also a "),xa=a(Np,"A",{href:!0,rel:!0});var Ov=i(xa);OT=o(Ov,"tf.keras.Model"),Ov.forEach(n),LT=o(Np,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Np.forEach(n),DT=f(Pn),b(Xo.$$.fragment,Pn),AT=f(Pn),Kn=a(Pn,"DIV",{class:!0});var Os=i(Kn);b(ja.$$.fragment,Os),NT=f(Os),Wt=a(Os,"P",{});var jl=i(Wt);IT=o(jl,"The "),ll=a(jl,"A",{href:!0});var Lv=i(ll);ST=o(Lv,"TFFunnelForPreTraining"),Lv.forEach(n),BT=o(jl," forward method, overrides the "),Rd=a(jl,"CODE",{});var Dv=i(Rd);WT=o(Dv,"__call__"),Dv.forEach(n),QT=o(jl," special method."),jl.forEach(n),KT=f(Os),b(Jo.$$.fragment,Os),UT=f(Os),b(es.$$.fragment,Os),Os.forEach(n),Pn.forEach(n),zu=f(s),Qt=a(s,"H2",{class:!0});var Ip=i(Qt);ns=a(Ip,"A",{id:!0,class:!0,href:!0});var Av=i(ns);Hd=a(Av,"SPAN",{});var Nv=i(Hd);b(Ca.$$.fragment,Nv),Nv.forEach(n),Av.forEach(n),RT=f(Ip),Vd=a(Ip,"SPAN",{});var Iv=i(Vd);HT=o(Iv,"TFFunnelForMaskedLM"),Iv.forEach(n),Ip.forEach(n),qu=f(s),sn=a(s,"DIV",{class:!0});var xn=i(sn);b(Oa.$$.fragment,xn),VT=f(xn),La=a(xn,"P",{});var Sp=i(La);YT=o(Sp,"Funnel Model with a "),Yd=a(Sp,"CODE",{});var Sv=i(Yd);GT=o(Sv,"language modeling"),Sv.forEach(n),ZT=o(Sp," head on top."),Sp.forEach(n),XT=f(xn),Da=a(xn,"P",{});var Bp=i(Da);JT=o(Bp,"The Funnel Transformer model was proposed in "),Aa=a(Bp,"A",{href:!0,rel:!0});var Bv=i(Aa);eF=o(Bv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Bv.forEach(n),nF=o(Bp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Bp.forEach(n),tF=f(xn),Na=a(xn,"P",{});var Wp=i(Na);oF=o(Wp,"This model inherits from "),dl=a(Wp,"A",{href:!0});var Wv=i(dl);sF=o(Wv,"TFPreTrainedModel"),Wv.forEach(n),rF=o(Wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp.forEach(n),aF=f(xn),Ia=a(xn,"P",{});var Qp=i(Ia);iF=o(Qp,"This model is also a "),Sa=a(Qp,"A",{href:!0,rel:!0});var Qv=i(Sa);lF=o(Qv,"tf.keras.Model"),Qv.forEach(n),dF=o(Qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qp.forEach(n),cF=f(xn),b(ts.$$.fragment,xn),uF=f(xn),wn=a(xn,"DIV",{class:!0});var it=i(wn);b(Ba.$$.fragment,it),pF=f(it),Kt=a(it,"P",{});var Cl=i(Kt);fF=o(Cl,"The "),cl=a(Cl,"A",{href:!0});var Kv=i(cl);hF=o(Kv,"TFFunnelForMaskedLM"),Kv.forEach(n),mF=o(Cl," forward method, overrides the "),Gd=a(Cl,"CODE",{});var Uv=i(Gd);gF=o(Uv,"__call__"),Uv.forEach(n),_F=o(Cl," special method."),Cl.forEach(n),kF=f(it),b(os.$$.fragment,it),TF=f(it),b(ss.$$.fragment,it),FF=f(it),b(rs.$$.fragment,it),it.forEach(n),xn.forEach(n),Pu=f(s),Ut=a(s,"H2",{class:!0});var Kp=i(Ut);as=a(Kp,"A",{id:!0,class:!0,href:!0});var Rv=i(as);Zd=a(Rv,"SPAN",{});var Hv=i(Zd);b(Wa.$$.fragment,Hv),Hv.forEach(n),Rv.forEach(n),yF=f(Kp),Xd=a(Kp,"SPAN",{});var Vv=i(Xd);bF=o(Vv,"TFFunnelForSequenceClassification"),Vv.forEach(n),Kp.forEach(n),xu=f(s),rn=a(s,"DIV",{class:!0});var jn=i(rn);b(Qa.$$.fragment,jn),wF=f(jn),Jd=a(jn,"P",{});var Yv=i(Jd);vF=o(Yv,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Yv.forEach(n),$F=f(jn),Ka=a(jn,"P",{});var Up=i(Ka);EF=o(Up,"The Funnel Transformer model was proposed in "),Ua=a(Up,"A",{href:!0,rel:!0});var Gv=i(Ua);MF=o(Gv,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Gv.forEach(n),zF=o(Up," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Up.forEach(n),qF=f(jn),Ra=a(jn,"P",{});var Rp=i(Ra);PF=o(Rp,"This model inherits from "),ul=a(Rp,"A",{href:!0});var Zv=i(ul);xF=o(Zv,"TFPreTrainedModel"),Zv.forEach(n),jF=o(Rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rp.forEach(n),CF=f(jn),Ha=a(jn,"P",{});var Hp=i(Ha);OF=o(Hp,"This model is also a "),Va=a(Hp,"A",{href:!0,rel:!0});var Xv=i(Va);LF=o(Xv,"tf.keras.Model"),Xv.forEach(n),DF=o(Hp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp.forEach(n),AF=f(jn),b(is.$$.fragment,jn),NF=f(jn),vn=a(jn,"DIV",{class:!0});var lt=i(vn);b(Ya.$$.fragment,lt),IF=f(lt),Rt=a(lt,"P",{});var Ol=i(Rt);SF=o(Ol,"The "),pl=a(Ol,"A",{href:!0});var Jv=i(pl);BF=o(Jv,"TFFunnelForSequenceClassification"),Jv.forEach(n),WF=o(Ol," forward method, overrides the "),ec=a(Ol,"CODE",{});var e$=i(ec);QF=o(e$,"__call__"),e$.forEach(n),KF=o(Ol," special method."),Ol.forEach(n),UF=f(lt),b(ls.$$.fragment,lt),RF=f(lt),b(ds.$$.fragment,lt),HF=f(lt),b(cs.$$.fragment,lt),lt.forEach(n),jn.forEach(n),ju=f(s),Ht=a(s,"H2",{class:!0});var Vp=i(Ht);us=a(Vp,"A",{id:!0,class:!0,href:!0});var n$=i(us);nc=a(n$,"SPAN",{});var t$=i(nc);b(Ga.$$.fragment,t$),t$.forEach(n),n$.forEach(n),VF=f(Vp),tc=a(Vp,"SPAN",{});var o$=i(tc);YF=o(o$,"TFFunnelForMultipleChoice"),o$.forEach(n),Vp.forEach(n),Cu=f(s),an=a(s,"DIV",{class:!0});var Cn=i(an);b(Za.$$.fragment,Cn),GF=f(Cn),oc=a(Cn,"P",{});var s$=i(oc);ZF=o(s$,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s$.forEach(n),XF=f(Cn),Xa=a(Cn,"P",{});var Yp=i(Xa);JF=o(Yp,"The Funnel Transformer model was proposed in "),Ja=a(Yp,"A",{href:!0,rel:!0});var r$=i(Ja);ey=o(r$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),r$.forEach(n),ny=o(Yp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yp.forEach(n),ty=f(Cn),ei=a(Cn,"P",{});var Gp=i(ei);oy=o(Gp,"This model inherits from "),fl=a(Gp,"A",{href:!0});var a$=i(fl);sy=o(a$,"TFPreTrainedModel"),a$.forEach(n),ry=o(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(n),ay=f(Cn),ni=a(Cn,"P",{});var Zp=i(ni);iy=o(Zp,"This model is also a "),ti=a(Zp,"A",{href:!0,rel:!0});var i$=i(ti);ly=o(i$,"tf.keras.Model"),i$.forEach(n),dy=o(Zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zp.forEach(n),cy=f(Cn),b(ps.$$.fragment,Cn),uy=f(Cn),Un=a(Cn,"DIV",{class:!0});var Ls=i(Un);b(oi.$$.fragment,Ls),py=f(Ls),Vt=a(Ls,"P",{});var Ll=i(Vt);fy=o(Ll,"The "),hl=a(Ll,"A",{href:!0});var l$=i(hl);hy=o(l$,"TFFunnelForMultipleChoice"),l$.forEach(n),my=o(Ll," forward method, overrides the "),sc=a(Ll,"CODE",{});var d$=i(sc);gy=o(d$,"__call__"),d$.forEach(n),_y=o(Ll," special method."),Ll.forEach(n),ky=f(Ls),b(fs.$$.fragment,Ls),Ty=f(Ls),b(hs.$$.fragment,Ls),Ls.forEach(n),Cn.forEach(n),Ou=f(s),Yt=a(s,"H2",{class:!0});var Xp=i(Yt);ms=a(Xp,"A",{id:!0,class:!0,href:!0});var c$=i(ms);rc=a(c$,"SPAN",{});var u$=i(rc);b(si.$$.fragment,u$),u$.forEach(n),c$.forEach(n),Fy=f(Xp),ac=a(Xp,"SPAN",{});var p$=i(ac);yy=o(p$,"TFFunnelForTokenClassification"),p$.forEach(n),Xp.forEach(n),Lu=f(s),ln=a(s,"DIV",{class:!0});var On=i(ln);b(ri.$$.fragment,On),by=f(On),ic=a(On,"P",{});var f$=i(ic);wy=o(f$,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),f$.forEach(n),vy=f(On),ai=a(On,"P",{});var Jp=i(ai);$y=o(Jp,"The Funnel Transformer model was proposed in "),ii=a(Jp,"A",{href:!0,rel:!0});var h$=i(ii);Ey=o(h$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),h$.forEach(n),My=o(Jp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Jp.forEach(n),zy=f(On),li=a(On,"P",{});var ef=i(li);qy=o(ef,"This model inherits from "),ml=a(ef,"A",{href:!0});var m$=i(ml);Py=o(m$,"TFPreTrainedModel"),m$.forEach(n),xy=o(ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef.forEach(n),jy=f(On),di=a(On,"P",{});var nf=i(di);Cy=o(nf,"This model is also a "),ci=a(nf,"A",{href:!0,rel:!0});var g$=i(ci);Oy=o(g$,"tf.keras.Model"),g$.forEach(n),Ly=o(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(n),Dy=f(On),b(gs.$$.fragment,On),Ay=f(On),$n=a(On,"DIV",{class:!0});var dt=i($n);b(ui.$$.fragment,dt),Ny=f(dt),Gt=a(dt,"P",{});var Dl=i(Gt);Iy=o(Dl,"The "),gl=a(Dl,"A",{href:!0});var _$=i(gl);Sy=o(_$,"TFFunnelForTokenClassification"),_$.forEach(n),By=o(Dl," forward method, overrides the "),lc=a(Dl,"CODE",{});var k$=i(lc);Wy=o(k$,"__call__"),k$.forEach(n),Qy=o(Dl," special method."),Dl.forEach(n),Ky=f(dt),b(_s.$$.fragment,dt),Uy=f(dt),b(ks.$$.fragment,dt),Ry=f(dt),b(Ts.$$.fragment,dt),dt.forEach(n),On.forEach(n),Du=f(s),Zt=a(s,"H2",{class:!0});var tf=i(Zt);Fs=a(tf,"A",{id:!0,class:!0,href:!0});var T$=i(Fs);dc=a(T$,"SPAN",{});var F$=i(dc);b(pi.$$.fragment,F$),F$.forEach(n),T$.forEach(n),Hy=f(tf),cc=a(tf,"SPAN",{});var y$=i(cc);Vy=o(y$,"TFFunnelForQuestionAnswering"),y$.forEach(n),tf.forEach(n),Au=f(s),dn=a(s,"DIV",{class:!0});var Ln=i(dn);b(fi.$$.fragment,Ln),Yy=f(Ln),Xt=a(Ln,"P",{});var Al=i(Xt);Gy=o(Al,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),uc=a(Al,"CODE",{});var b$=i(uc);Zy=o(b$,"span start logits"),b$.forEach(n),Xy=o(Al," and "),pc=a(Al,"CODE",{});var w$=i(pc);Jy=o(w$,"span end logits"),w$.forEach(n),eb=o(Al,")."),Al.forEach(n),nb=f(Ln),hi=a(Ln,"P",{});var of=i(hi);tb=o(of,"The Funnel Transformer model was proposed in "),mi=a(of,"A",{href:!0,rel:!0});var v$=i(mi);ob=o(v$,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),v$.forEach(n),sb=o(of," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),of.forEach(n),rb=f(Ln),gi=a(Ln,"P",{});var sf=i(gi);ab=o(sf,"This model inherits from "),_l=a(sf,"A",{href:!0});var $$=i(_l);ib=o($$,"TFPreTrainedModel"),$$.forEach(n),lb=o(sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf.forEach(n),db=f(Ln),_i=a(Ln,"P",{});var rf=i(_i);cb=o(rf,"This model is also a "),ki=a(rf,"A",{href:!0,rel:!0});var E$=i(ki);ub=o(E$,"tf.keras.Model"),E$.forEach(n),pb=o(rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf.forEach(n),fb=f(Ln),b(ys.$$.fragment,Ln),hb=f(Ln),En=a(Ln,"DIV",{class:!0});var ct=i(En);b(Ti.$$.fragment,ct),mb=f(ct),Jt=a(ct,"P",{});var Nl=i(Jt);gb=o(Nl,"The "),kl=a(Nl,"A",{href:!0});var M$=i(kl);_b=o(M$,"TFFunnelForQuestionAnswering"),M$.forEach(n),kb=o(Nl," forward method, overrides the "),fc=a(Nl,"CODE",{});var z$=i(fc);Tb=o(z$,"__call__"),z$.forEach(n),Fb=o(Nl," special method."),Nl.forEach(n),yb=f(ct),b(bs.$$.fragment,ct),bb=f(ct),b(ws.$$.fragment,ct),wb=f(ct),b(vs.$$.fragment,ct),ct.forEach(n),Ln.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(C1)),m(h,"id","funnel-transformer"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#funnel-transformer"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://arxiv.org/abs/2006.03236"),m(ae,"rel","nofollow"),m(C,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(le,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(de,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(ce,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(D,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),m(g,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(J,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(De,"href","https://huggingface.co/sgugger"),m(De,"rel","nofollow"),m(A,"href","https://github.com/laiguokun/Funnel-Transformer"),m(A,"rel","nofollow"),m(Le,"id","transformers.FunnelConfig"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.FunnelConfig"),m(S,"class","relative group"),m(Mi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(zi,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),m(As,"href","https://huggingface.co/funnel-transformer/small"),m(As,"rel","nofollow"),m(qi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Pi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"id","transformers.FunnelTokenizer"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.FunnelTokenizer"),m(pt,"class","relative group"),m(xi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizer"),m(ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),m(Ci,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Di,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelTokenizerFast"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelTokenizerFast"),m(ht,"class","relative group"),m(Ai,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelTokenizerFast"),m(Ni,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),m(Ii,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),m(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(po,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(gt,"class","relative group"),m(Si,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"id","transformers.FunnelBaseModel"),m(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fo,"href","#transformers.FunnelBaseModel"),m(Tt,"class","relative group"),m(ar,"href","https://arxiv.org/abs/2006.03236"),m(ar,"rel","nofollow"),m(Wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(Qi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(go,"id","transformers.FunnelModel"),m(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(go,"href","#transformers.FunnelModel"),m(yt,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.03236"),m(hr,"rel","nofollow"),m(Ki,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(Ui,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelModel"),m(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","transformers.FunnelForPreTraining"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#transformers.FunnelForPreTraining"),m(wt,"class","relative group"),m(Ri,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bo,"id","transformers.FunnelForMaskedLM"),m(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(bo,"href","#transformers.FunnelForMaskedLM"),m(Et,"class","relative group"),m(Er,"href","https://arxiv.org/abs/2006.03236"),m(Er,"rel","nofollow"),m(Hi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Vi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.FunnelForSequenceClassification"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.FunnelForSequenceClassification"),m(zt,"class","relative group"),m(Or,"href","https://arxiv.org/abs/2006.03236"),m(Or,"rel","nofollow"),m(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ar,"rel","nofollow"),m(Gi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.FunnelForMultipleChoice"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.FunnelForMultipleChoice"),m(Pt,"class","relative group"),m(Wr,"href","https://arxiv.org/abs/2006.03236"),m(Wr,"rel","nofollow"),m(Zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ur,"rel","nofollow"),m(Xi,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.FunnelForTokenClassification"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.FunnelForTokenClassification"),m(jt,"class","relative group"),m(Gr,"href","https://arxiv.org/abs/2006.03236"),m(Gr,"rel","nofollow"),m(Ji,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jr,"rel","nofollow"),m(el,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","transformers.FunnelForQuestionAnswering"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#transformers.FunnelForQuestionAnswering"),m(Ot,"class","relative group"),m(sa,"href","https://arxiv.org/abs/2006.03236"),m(sa,"rel","nofollow"),m(nl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ia,"rel","nofollow"),m(tl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.TFFunnelBaseModel"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.TFFunnelBaseModel"),m(At,"class","relative group"),m(pa,"href","https://arxiv.org/abs/2006.03236"),m(pa,"rel","nofollow"),m(ol,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ma,"rel","nofollow"),m(sl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(Wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","transformers.TFFunnelModel"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#transformers.TFFunnelModel"),m(It,"class","relative group"),m(Fa,"href","https://arxiv.org/abs/2006.03236"),m(Fa,"rel","nofollow"),m(rl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(wa,"rel","nofollow"),m(al,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelModel"),m(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zo,"id","transformers.TFFunnelForPreTraining"),m(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zo,"href","#transformers.TFFunnelForPreTraining"),m(Bt,"class","relative group"),m(za,"href","https://arxiv.org/abs/2006.03236"),m(za,"rel","nofollow"),m(il,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(xa,"rel","nofollow"),m(ll,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"id","transformers.TFFunnelForMaskedLM"),m(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ns,"href","#transformers.TFFunnelForMaskedLM"),m(Qt,"class","relative group"),m(Aa,"href","https://arxiv.org/abs/2006.03236"),m(Aa,"rel","nofollow"),m(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Sa,"rel","nofollow"),m(cl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(as,"id","transformers.TFFunnelForSequenceClassification"),m(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(as,"href","#transformers.TFFunnelForSequenceClassification"),m(Ut,"class","relative group"),m(Ua,"href","https://arxiv.org/abs/2006.03236"),m(Ua,"rel","nofollow"),m(ul,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Va,"rel","nofollow"),m(pl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(us,"id","transformers.TFFunnelForMultipleChoice"),m(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(us,"href","#transformers.TFFunnelForMultipleChoice"),m(Ht,"class","relative group"),m(Ja,"href","https://arxiv.org/abs/2006.03236"),m(Ja,"rel","nofollow"),m(fl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ti,"rel","nofollow"),m(hl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(an,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ms,"id","transformers.TFFunnelForTokenClassification"),m(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ms,"href","#transformers.TFFunnelForTokenClassification"),m(Yt,"class","relative group"),m(ii,"href","https://arxiv.org/abs/2006.03236"),m(ii,"rel","nofollow"),m(ml,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ci,"rel","nofollow"),m(gl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fs,"id","transformers.TFFunnelForQuestionAnswering"),m(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fs,"href","#transformers.TFFunnelForQuestionAnswering"),m(Zt,"class","relative group"),m(mi,"href","https://arxiv.org/abs/2006.03236"),m(mi,"rel","nofollow"),m(_l,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ki,"rel","nofollow"),m(kl,"href","/docs/transformers/main/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,T){e(document.head,d),_(s,k,T),_(s,c,T),e(c,h),e(h,F),w(l,F,null),e(c,u),e(c,x),e(x,ke),_(s,fe,T),_(s,I,T),e(I,re),e(re,ee),w(M,ee,null),e(I,Te),e(I,U),e(U,Fe),_(s,he,T),_(s,B,T),e(B,ye),e(B,ae),e(ae,H),e(B,be),_(s,me,T),_(s,Q,T),e(Q,we),_(s,ge,T),_(s,K,T),e(K,ue),e(ue,ve),_(s,oe,T),_(s,j,T),e(j,O),_(s,_e,T),_(s,W,T),e(W,pe),e(pe,$e),e(W,V),e(W,R),e(R,Ee),e(R,C),e(C,Me),e(R,Y),e(R,le),e(le,ze),e(R,G),e(R,de),e(de,qe),e(R,N),e(R,ce),e(ce,Z),e(R,Pe),e(R,ne),e(ne,L),e(R,xe),e(R,D),e(D,je),e(R,Ce),e(R,g),e(g,z),e(R,We),e(R,J),e(J,Qe),e(R,Ke),_(s,q,T),_(s,Oe,T),e(Oe,Ue),e(Oe,De),e(De,Re),e(Oe,He),e(Oe,A),e(A,X),e(Oe,Ve),_(s,Ne,T),_(s,S,T),e(S,Le),e(Le,Ae),w(ie,Ae,null),e(S,Ye),e(S,te),e(te,Ge),_(s,Xc,T),_(s,Jn,T),w(Ds,Jn,null),e(Jn,af),e(Jn,et),e(et,lf),e(et,Mi),e(Mi,df),e(et,cf),e(et,zi),e(zi,uf),e(et,pf),e(et,As),e(As,ff),e(et,hf),e(Jn,mf),e(Jn,ut),e(ut,gf),e(ut,qi),e(qi,_f),e(ut,kf),e(ut,Pi),e(Pi,Tf),e(ut,Ff),_(s,Jc,T),_(s,pt,T),e(pt,so),e(so,Il),w(Ns,Il,null),e(pt,yf),e(pt,Sl),e(Sl,bf),_(s,eu,T),_(s,Je,T),w(Is,Je,null),e(Je,wf),e(Je,Bl),e(Bl,vf),e(Je,$f),e(Je,ro),e(ro,xi),e(xi,Ef),e(ro,Mf),e(ro,ji),e(ji,zf),e(ro,qf),e(Je,Pf),e(Je,Ss),e(Ss,xf),e(Ss,Ci),e(Ci,jf),e(Ss,Cf),e(Je,Of),e(Je,tt),w(Bs,tt,null),e(tt,Lf),e(tt,Wl),e(Wl,Df),e(tt,Af),e(tt,Ws),e(Ws,Oi),e(Oi,Nf),e(Oi,Ql),e(Ql,If),e(Ws,Sf),e(Ws,Li),e(Li,Bf),e(Li,Kl),e(Kl,Wf),e(Je,Qf),e(Je,ao),w(Qs,ao,null),e(ao,Kf),e(ao,Ks),e(Ks,Uf),e(Ks,Ul),e(Ul,Rf),e(Ks,Hf),e(Je,Vf),e(Je,Dn),w(Us,Dn,null),e(Dn,Yf),e(Dn,Rl),e(Rl,Gf),e(Dn,Zf),w(io,Dn,null),e(Dn,Xf),e(Dn,ft),e(ft,Jf),e(ft,Hl),e(Hl,eh),e(ft,nh),e(ft,Vl),e(Vl,th),e(ft,oh),e(Je,sh),e(Je,Di),w(Rs,Di,null),_(s,nu,T),_(s,ht,T),e(ht,lo),e(lo,Yl),w(Hs,Yl,null),e(ht,rh),e(ht,Gl),e(Gl,ah),_(s,tu,T),_(s,Tn,T),w(Vs,Tn,null),e(Tn,ih),e(Tn,Ys),e(Ys,lh),e(Ys,Zl),e(Zl,dh),e(Ys,ch),e(Tn,uh),e(Tn,co),e(co,Ai),e(Ai,ph),e(co,fh),e(co,Ni),e(Ni,hh),e(co,mh),e(Tn,gh),e(Tn,Gs),e(Gs,_h),e(Gs,Ii),e(Ii,kh),e(Gs,Th),e(Tn,Fh),e(Tn,An),w(Zs,An,null),e(An,yh),e(An,Xl),e(Xl,bh),e(An,wh),w(uo,An,null),e(An,vh),e(An,mt),e(mt,$h),e(mt,Jl),e(Jl,Eh),e(mt,Mh),e(mt,ed),e(ed,zh),e(mt,qh),_(s,ou,T),_(s,gt,T),e(gt,po),e(po,nd),w(Xs,nd,null),e(gt,Ph),e(gt,td),e(td,xh),_(s,su,T),_(s,_t,T),w(Js,_t,null),e(_t,jh),e(_t,er),e(er,Ch),e(er,Si),e(Si,Oh),e(er,Lh),_(s,ru,T),_(s,kt,T),w(nr,kt,null),e(kt,Dh),e(kt,tr),e(tr,Ah),e(tr,Bi),e(Bi,Nh),e(tr,Ih),_(s,au,T),_(s,Tt,T),e(Tt,fo),e(fo,od),w(or,od,null),e(Tt,Sh),e(Tt,sd),e(sd,Bh),_(s,iu,T),_(s,pn,T),w(sr,pn,null),e(pn,Wh),e(pn,rd),e(rd,Qh),e(pn,Kh),e(pn,rr),e(rr,Uh),e(rr,ar),e(ar,Rh),e(rr,Hh),e(pn,Vh),e(pn,ir),e(ir,Yh),e(ir,Wi),e(Wi,Gh),e(ir,Zh),e(pn,Xh),e(pn,lr),e(lr,Jh),e(lr,dr),e(dr,em),e(lr,nm),e(pn,tm),e(pn,Nn),w(cr,Nn,null),e(Nn,om),e(Nn,Ft),e(Ft,sm),e(Ft,Qi),e(Qi,rm),e(Ft,am),e(Ft,ad),e(ad,im),e(Ft,lm),e(Nn,dm),w(ho,Nn,null),e(Nn,cm),w(mo,Nn,null),_(s,lu,T),_(s,yt,T),e(yt,go),e(go,id),w(ur,id,null),e(yt,um),e(yt,ld),e(ld,pm),_(s,du,T),_(s,fn,T),w(pr,fn,null),e(fn,fm),e(fn,dd),e(dd,hm),e(fn,mm),e(fn,fr),e(fr,gm),e(fr,hr),e(hr,_m),e(fr,km),e(fn,Tm),e(fn,mr),e(mr,Fm),e(mr,Ki),e(Ki,ym),e(mr,bm),e(fn,wm),e(fn,gr),e(gr,vm),e(gr,_r),e(_r,$m),e(gr,Em),e(fn,Mm),e(fn,In),w(kr,In,null),e(In,zm),e(In,bt),e(bt,qm),e(bt,Ui),e(Ui,Pm),e(bt,xm),e(bt,cd),e(cd,jm),e(bt,Cm),e(In,Om),w(_o,In,null),e(In,Lm),w(ko,In,null),_(s,cu,T),_(s,wt,T),e(wt,To),e(To,ud),w(Tr,ud,null),e(wt,Dm),e(wt,pd),e(pd,Am),_(s,uu,T),_(s,vt,T),w(Fr,vt,null),e(vt,Nm),e(vt,Sn),w(yr,Sn,null),e(Sn,Im),e(Sn,$t),e($t,Sm),e($t,Ri),e(Ri,Bm),e($t,Wm),e($t,fd),e(fd,Qm),e($t,Km),e(Sn,Um),w(Fo,Sn,null),e(Sn,Rm),w(yo,Sn,null),_(s,pu,T),_(s,Et,T),e(Et,bo),e(bo,hd),w(br,hd,null),e(Et,Hm),e(Et,md),e(md,Vm),_(s,fu,T),_(s,hn,T),w(wr,hn,null),e(hn,Ym),e(hn,vr),e(vr,Gm),e(vr,gd),e(gd,Zm),e(vr,Xm),e(hn,Jm),e(hn,$r),e($r,eg),e($r,Er),e(Er,ng),e($r,tg),e(hn,og),e(hn,Mr),e(Mr,sg),e(Mr,Hi),e(Hi,rg),e(Mr,ag),e(hn,ig),e(hn,zr),e(zr,lg),e(zr,qr),e(qr,dg),e(zr,cg),e(hn,ug),e(hn,Fn),w(Pr,Fn,null),e(Fn,pg),e(Fn,Mt),e(Mt,fg),e(Mt,Vi),e(Vi,hg),e(Mt,mg),e(Mt,_d),e(_d,gg),e(Mt,_g),e(Fn,kg),w(wo,Fn,null),e(Fn,Tg),w(vo,Fn,null),e(Fn,Fg),w($o,Fn,null),_(s,hu,T),_(s,zt,T),e(zt,Eo),e(Eo,kd),w(xr,kd,null),e(zt,yg),e(zt,Td),e(Td,bg),_(s,mu,T),_(s,mn,T),w(jr,mn,null),e(mn,wg),e(mn,Fd),e(Fd,vg),e(mn,$g),e(mn,Cr),e(Cr,Eg),e(Cr,Or),e(Or,Mg),e(Cr,zg),e(mn,qg),e(mn,Lr),e(Lr,Pg),e(Lr,Yi),e(Yi,xg),e(Lr,jg),e(mn,Cg),e(mn,Dr),e(Dr,Og),e(Dr,Ar),e(Ar,Lg),e(Dr,Dg),e(mn,Ag),e(mn,un),w(Nr,un,null),e(un,Ng),e(un,qt),e(qt,Ig),e(qt,Gi),e(Gi,Sg),e(qt,Bg),e(qt,yd),e(yd,Wg),e(qt,Qg),e(un,Kg),w(Mo,un,null),e(un,Ug),w(zo,un,null),e(un,Rg),w(qo,un,null),e(un,Hg),w(Po,un,null),e(un,Vg),w(xo,un,null),_(s,gu,T),_(s,Pt,T),e(Pt,jo),e(jo,bd),w(Ir,bd,null),e(Pt,Yg),e(Pt,wd),e(wd,Gg),_(s,_u,T),_(s,gn,T),w(Sr,gn,null),e(gn,Zg),e(gn,vd),e(vd,Xg),e(gn,Jg),e(gn,Br),e(Br,e_),e(Br,Wr),e(Wr,n_),e(Br,t_),e(gn,o_),e(gn,Qr),e(Qr,s_),e(Qr,Zi),e(Zi,r_),e(Qr,a_),e(gn,i_),e(gn,Kr),e(Kr,l_),e(Kr,Ur),e(Ur,d_),e(Kr,c_),e(gn,u_),e(gn,Bn),w(Rr,Bn,null),e(Bn,p_),e(Bn,xt),e(xt,f_),e(xt,Xi),e(Xi,h_),e(xt,m_),e(xt,$d),e($d,g_),e(xt,__),e(Bn,k_),w(Co,Bn,null),e(Bn,T_),w(Oo,Bn,null),_(s,ku,T),_(s,jt,T),e(jt,Lo),e(Lo,Ed),w(Hr,Ed,null),e(jt,F_),e(jt,Md),e(Md,y_),_(s,Tu,T),_(s,_n,T),w(Vr,_n,null),e(_n,b_),e(_n,zd),e(zd,w_),e(_n,v_),e(_n,Yr),e(Yr,$_),e(Yr,Gr),e(Gr,E_),e(Yr,M_),e(_n,z_),e(_n,Zr),e(Zr,q_),e(Zr,Ji),e(Ji,P_),e(Zr,x_),e(_n,j_),e(_n,Xr),e(Xr,C_),e(Xr,Jr),e(Jr,O_),e(Xr,L_),e(_n,D_),e(_n,yn),w(ea,yn,null),e(yn,A_),e(yn,Ct),e(Ct,N_),e(Ct,el),e(el,I_),e(Ct,S_),e(Ct,qd),e(qd,B_),e(Ct,W_),e(yn,Q_),w(Do,yn,null),e(yn,K_),w(Ao,yn,null),e(yn,U_),w(No,yn,null),_(s,Fu,T),_(s,Ot,T),e(Ot,Io),e(Io,Pd),w(na,Pd,null),e(Ot,R_),e(Ot,xd),e(xd,H_),_(s,yu,T),_(s,kn,T),w(ta,kn,null),e(kn,V_),e(kn,Lt),e(Lt,Y_),e(Lt,jd),e(jd,G_),e(Lt,Z_),e(Lt,Cd),e(Cd,X_),e(Lt,J_),e(kn,ek),e(kn,oa),e(oa,nk),e(oa,sa),e(sa,tk),e(oa,ok),e(kn,sk),e(kn,ra),e(ra,rk),e(ra,nl),e(nl,ak),e(ra,ik),e(kn,lk),e(kn,aa),e(aa,dk),e(aa,ia),e(ia,ck),e(aa,uk),e(kn,pk),e(kn,bn),w(la,bn,null),e(bn,fk),e(bn,Dt),e(Dt,hk),e(Dt,tl),e(tl,mk),e(Dt,gk),e(Dt,Od),e(Od,_k),e(Dt,kk),e(bn,Tk),w(So,bn,null),e(bn,Fk),w(Bo,bn,null),e(bn,yk),w(Wo,bn,null),_(s,bu,T),_(s,At,T),e(At,Qo),e(Qo,Ld),w(da,Ld,null),e(At,bk),e(At,Dd),e(Dd,wk),_(s,wu,T),_(s,nn,T),w(ca,nn,null),e(nn,vk),e(nn,Ad),e(Ad,$k),e(nn,Ek),e(nn,ua),e(ua,Mk),e(ua,pa),e(pa,zk),e(ua,qk),e(nn,Pk),e(nn,fa),e(fa,xk),e(fa,ol),e(ol,jk),e(fa,Ck),e(nn,Ok),e(nn,ha),e(ha,Lk),e(ha,ma),e(ma,Dk),e(ha,Ak),e(nn,Nk),w(Ko,nn,null),e(nn,Ik),e(nn,Wn),w(ga,Wn,null),e(Wn,Sk),e(Wn,Nt),e(Nt,Bk),e(Nt,sl),e(sl,Wk),e(Nt,Qk),e(Nt,Nd),e(Nd,Kk),e(Nt,Uk),e(Wn,Rk),w(Uo,Wn,null),e(Wn,Hk),w(Ro,Wn,null),_(s,vu,T),_(s,It,T),e(It,Ho),e(Ho,Id),w(_a,Id,null),e(It,Vk),e(It,Sd),e(Sd,Yk),_(s,$u,T),_(s,tn,T),w(ka,tn,null),e(tn,Gk),e(tn,Bd),e(Bd,Zk),e(tn,Xk),e(tn,Ta),e(Ta,Jk),e(Ta,Fa),e(Fa,eT),e(Ta,nT),e(tn,tT),e(tn,ya),e(ya,oT),e(ya,rl),e(rl,sT),e(ya,rT),e(tn,aT),e(tn,ba),e(ba,iT),e(ba,wa),e(wa,lT),e(ba,dT),e(tn,cT),w(Vo,tn,null),e(tn,uT),e(tn,Qn),w(va,Qn,null),e(Qn,pT),e(Qn,St),e(St,fT),e(St,al),e(al,hT),e(St,mT),e(St,Wd),e(Wd,gT),e(St,_T),e(Qn,kT),w(Yo,Qn,null),e(Qn,TT),w(Go,Qn,null),_(s,Eu,T),_(s,Bt,T),e(Bt,Zo),e(Zo,Qd),w($a,Qd,null),e(Bt,FT),e(Bt,Kd),e(Kd,yT),_(s,Mu,T),_(s,on,T),w(Ea,on,null),e(on,bT),e(on,Ud),e(Ud,wT),e(on,vT),e(on,Ma),e(Ma,$T),e(Ma,za),e(za,ET),e(Ma,MT),e(on,zT),e(on,qa),e(qa,qT),e(qa,il),e(il,PT),e(qa,xT),e(on,jT),e(on,Pa),e(Pa,CT),e(Pa,xa),e(xa,OT),e(Pa,LT),e(on,DT),w(Xo,on,null),e(on,AT),e(on,Kn),w(ja,Kn,null),e(Kn,NT),e(Kn,Wt),e(Wt,IT),e(Wt,ll),e(ll,ST),e(Wt,BT),e(Wt,Rd),e(Rd,WT),e(Wt,QT),e(Kn,KT),w(Jo,Kn,null),e(Kn,UT),w(es,Kn,null),_(s,zu,T),_(s,Qt,T),e(Qt,ns),e(ns,Hd),w(Ca,Hd,null),e(Qt,RT),e(Qt,Vd),e(Vd,HT),_(s,qu,T),_(s,sn,T),w(Oa,sn,null),e(sn,VT),e(sn,La),e(La,YT),e(La,Yd),e(Yd,GT),e(La,ZT),e(sn,XT),e(sn,Da),e(Da,JT),e(Da,Aa),e(Aa,eF),e(Da,nF),e(sn,tF),e(sn,Na),e(Na,oF),e(Na,dl),e(dl,sF),e(Na,rF),e(sn,aF),e(sn,Ia),e(Ia,iF),e(Ia,Sa),e(Sa,lF),e(Ia,dF),e(sn,cF),w(ts,sn,null),e(sn,uF),e(sn,wn),w(Ba,wn,null),e(wn,pF),e(wn,Kt),e(Kt,fF),e(Kt,cl),e(cl,hF),e(Kt,mF),e(Kt,Gd),e(Gd,gF),e(Kt,_F),e(wn,kF),w(os,wn,null),e(wn,TF),w(ss,wn,null),e(wn,FF),w(rs,wn,null),_(s,Pu,T),_(s,Ut,T),e(Ut,as),e(as,Zd),w(Wa,Zd,null),e(Ut,yF),e(Ut,Xd),e(Xd,bF),_(s,xu,T),_(s,rn,T),w(Qa,rn,null),e(rn,wF),e(rn,Jd),e(Jd,vF),e(rn,$F),e(rn,Ka),e(Ka,EF),e(Ka,Ua),e(Ua,MF),e(Ka,zF),e(rn,qF),e(rn,Ra),e(Ra,PF),e(Ra,ul),e(ul,xF),e(Ra,jF),e(rn,CF),e(rn,Ha),e(Ha,OF),e(Ha,Va),e(Va,LF),e(Ha,DF),e(rn,AF),w(is,rn,null),e(rn,NF),e(rn,vn),w(Ya,vn,null),e(vn,IF),e(vn,Rt),e(Rt,SF),e(Rt,pl),e(pl,BF),e(Rt,WF),e(Rt,ec),e(ec,QF),e(Rt,KF),e(vn,UF),w(ls,vn,null),e(vn,RF),w(ds,vn,null),e(vn,HF),w(cs,vn,null),_(s,ju,T),_(s,Ht,T),e(Ht,us),e(us,nc),w(Ga,nc,null),e(Ht,VF),e(Ht,tc),e(tc,YF),_(s,Cu,T),_(s,an,T),w(Za,an,null),e(an,GF),e(an,oc),e(oc,ZF),e(an,XF),e(an,Xa),e(Xa,JF),e(Xa,Ja),e(Ja,ey),e(Xa,ny),e(an,ty),e(an,ei),e(ei,oy),e(ei,fl),e(fl,sy),e(ei,ry),e(an,ay),e(an,ni),e(ni,iy),e(ni,ti),e(ti,ly),e(ni,dy),e(an,cy),w(ps,an,null),e(an,uy),e(an,Un),w(oi,Un,null),e(Un,py),e(Un,Vt),e(Vt,fy),e(Vt,hl),e(hl,hy),e(Vt,my),e(Vt,sc),e(sc,gy),e(Vt,_y),e(Un,ky),w(fs,Un,null),e(Un,Ty),w(hs,Un,null),_(s,Ou,T),_(s,Yt,T),e(Yt,ms),e(ms,rc),w(si,rc,null),e(Yt,Fy),e(Yt,ac),e(ac,yy),_(s,Lu,T),_(s,ln,T),w(ri,ln,null),e(ln,by),e(ln,ic),e(ic,wy),e(ln,vy),e(ln,ai),e(ai,$y),e(ai,ii),e(ii,Ey),e(ai,My),e(ln,zy),e(ln,li),e(li,qy),e(li,ml),e(ml,Py),e(li,xy),e(ln,jy),e(ln,di),e(di,Cy),e(di,ci),e(ci,Oy),e(di,Ly),e(ln,Dy),w(gs,ln,null),e(ln,Ay),e(ln,$n),w(ui,$n,null),e($n,Ny),e($n,Gt),e(Gt,Iy),e(Gt,gl),e(gl,Sy),e(Gt,By),e(Gt,lc),e(lc,Wy),e(Gt,Qy),e($n,Ky),w(_s,$n,null),e($n,Uy),w(ks,$n,null),e($n,Ry),w(Ts,$n,null),_(s,Du,T),_(s,Zt,T),e(Zt,Fs),e(Fs,dc),w(pi,dc,null),e(Zt,Hy),e(Zt,cc),e(cc,Vy),_(s,Au,T),_(s,dn,T),w(fi,dn,null),e(dn,Yy),e(dn,Xt),e(Xt,Gy),e(Xt,uc),e(uc,Zy),e(Xt,Xy),e(Xt,pc),e(pc,Jy),e(Xt,eb),e(dn,nb),e(dn,hi),e(hi,tb),e(hi,mi),e(mi,ob),e(hi,sb),e(dn,rb),e(dn,gi),e(gi,ab),e(gi,_l),e(_l,ib),e(gi,lb),e(dn,db),e(dn,_i),e(_i,cb),e(_i,ki),e(ki,ub),e(_i,pb),e(dn,fb),w(ys,dn,null),e(dn,hb),e(dn,En),w(Ti,En,null),e(En,mb),e(En,Jt),e(Jt,gb),e(Jt,kl),e(kl,_b),e(Jt,kb),e(Jt,fc),e(fc,Tb),e(Jt,Fb),e(En,yb),w(bs,En,null),e(En,bb),w(ws,En,null),e(En,wb),w(vs,En,null),Nu=!0},p(s,[T]){const Fi={};T&2&&(Fi.$$scope={dirty:T,ctx:s}),io.$set(Fi);const hc={};T&2&&(hc.$$scope={dirty:T,ctx:s}),uo.$set(hc);const mc={};T&2&&(mc.$$scope={dirty:T,ctx:s}),ho.$set(mc);const gc={};T&2&&(gc.$$scope={dirty:T,ctx:s}),mo.$set(gc);const yi={};T&2&&(yi.$$scope={dirty:T,ctx:s}),_o.$set(yi);const _c={};T&2&&(_c.$$scope={dirty:T,ctx:s}),ko.$set(_c);const kc={};T&2&&(kc.$$scope={dirty:T,ctx:s}),Fo.$set(kc);const Tc={};T&2&&(Tc.$$scope={dirty:T,ctx:s}),yo.$set(Tc);const bi={};T&2&&(bi.$$scope={dirty:T,ctx:s}),wo.$set(bi);const Fc={};T&2&&(Fc.$$scope={dirty:T,ctx:s}),vo.$set(Fc);const yc={};T&2&&(yc.$$scope={dirty:T,ctx:s}),$o.$set(yc);const bc={};T&2&&(bc.$$scope={dirty:T,ctx:s}),Mo.$set(bc);const wc={};T&2&&(wc.$$scope={dirty:T,ctx:s}),zo.$set(wc);const vc={};T&2&&(vc.$$scope={dirty:T,ctx:s}),qo.$set(vc);const wi={};T&2&&(wi.$$scope={dirty:T,ctx:s}),Po.$set(wi);const $c={};T&2&&($c.$$scope={dirty:T,ctx:s}),xo.$set($c);const en={};T&2&&(en.$$scope={dirty:T,ctx:s}),Co.$set(en);const Ec={};T&2&&(Ec.$$scope={dirty:T,ctx:s}),Oo.$set(Ec);const Mc={};T&2&&(Mc.$$scope={dirty:T,ctx:s}),Do.$set(Mc);const zc={};T&2&&(zc.$$scope={dirty:T,ctx:s}),Ao.$set(zc);const qc={};T&2&&(qc.$$scope={dirty:T,ctx:s}),No.$set(qc);const Pc={};T&2&&(Pc.$$scope={dirty:T,ctx:s}),So.$set(Pc);const xc={};T&2&&(xc.$$scope={dirty:T,ctx:s}),Bo.$set(xc);const jc={};T&2&&(jc.$$scope={dirty:T,ctx:s}),Wo.$set(jc);const Cc={};T&2&&(Cc.$$scope={dirty:T,ctx:s}),Ko.$set(Cc);const eo={};T&2&&(eo.$$scope={dirty:T,ctx:s}),Uo.$set(eo);const Oc={};T&2&&(Oc.$$scope={dirty:T,ctx:s}),Ro.$set(Oc);const Lc={};T&2&&(Lc.$$scope={dirty:T,ctx:s}),Vo.$set(Lc);const vi={};T&2&&(vi.$$scope={dirty:T,ctx:s}),Yo.$set(vi);const Dc={};T&2&&(Dc.$$scope={dirty:T,ctx:s}),Go.$set(Dc);const Ac={};T&2&&(Ac.$$scope={dirty:T,ctx:s}),Xo.$set(Ac);const Nc={};T&2&&(Nc.$$scope={dirty:T,ctx:s}),Jo.$set(Nc);const no={};T&2&&(no.$$scope={dirty:T,ctx:s}),es.$set(no);const nt={};T&2&&(nt.$$scope={dirty:T,ctx:s}),ts.$set(nt);const Ic={};T&2&&(Ic.$$scope={dirty:T,ctx:s}),os.$set(Ic);const Sc={};T&2&&(Sc.$$scope={dirty:T,ctx:s}),ss.$set(Sc);const Bc={};T&2&&(Bc.$$scope={dirty:T,ctx:s}),rs.$set(Bc);const to={};T&2&&(to.$$scope={dirty:T,ctx:s}),is.$set(to);const Wc={};T&2&&(Wc.$$scope={dirty:T,ctx:s}),ls.$set(Wc);const Qc={};T&2&&(Qc.$$scope={dirty:T,ctx:s}),ds.$set(Qc);const $i={};T&2&&($i.$$scope={dirty:T,ctx:s}),cs.$set($i);const Kc={};T&2&&(Kc.$$scope={dirty:T,ctx:s}),ps.$set(Kc);const Uc={};T&2&&(Uc.$$scope={dirty:T,ctx:s}),fs.$set(Uc);const Rc={};T&2&&(Rc.$$scope={dirty:T,ctx:s}),hs.$set(Rc);const cn={};T&2&&(cn.$$scope={dirty:T,ctx:s}),gs.$set(cn);const Hc={};T&2&&(Hc.$$scope={dirty:T,ctx:s}),_s.$set(Hc);const $s={};T&2&&($s.$$scope={dirty:T,ctx:s}),ks.$set($s);const Vc={};T&2&&(Vc.$$scope={dirty:T,ctx:s}),Ts.$set(Vc);const Yc={};T&2&&(Yc.$$scope={dirty:T,ctx:s}),ys.$set(Yc);const Ei={};T&2&&(Ei.$$scope={dirty:T,ctx:s}),bs.$set(Ei);const Gc={};T&2&&(Gc.$$scope={dirty:T,ctx:s}),ws.$set(Gc);const oo={};T&2&&(oo.$$scope={dirty:T,ctx:s}),vs.$set(oo)},i(s){Nu||(v(l.$$.fragment,s),v(M.$$.fragment,s),v(ie.$$.fragment,s),v(Ds.$$.fragment,s),v(Ns.$$.fragment,s),v(Is.$$.fragment,s),v(Bs.$$.fragment,s),v(Qs.$$.fragment,s),v(Us.$$.fragment,s),v(io.$$.fragment,s),v(Rs.$$.fragment,s),v(Hs.$$.fragment,s),v(Vs.$$.fragment,s),v(Zs.$$.fragment,s),v(uo.$$.fragment,s),v(Xs.$$.fragment,s),v(Js.$$.fragment,s),v(nr.$$.fragment,s),v(or.$$.fragment,s),v(sr.$$.fragment,s),v(cr.$$.fragment,s),v(ho.$$.fragment,s),v(mo.$$.fragment,s),v(ur.$$.fragment,s),v(pr.$$.fragment,s),v(kr.$$.fragment,s),v(_o.$$.fragment,s),v(ko.$$.fragment,s),v(Tr.$$.fragment,s),v(Fr.$$.fragment,s),v(yr.$$.fragment,s),v(Fo.$$.fragment,s),v(yo.$$.fragment,s),v(br.$$.fragment,s),v(wr.$$.fragment,s),v(Pr.$$.fragment,s),v(wo.$$.fragment,s),v(vo.$$.fragment,s),v($o.$$.fragment,s),v(xr.$$.fragment,s),v(jr.$$.fragment,s),v(Nr.$$.fragment,s),v(Mo.$$.fragment,s),v(zo.$$.fragment,s),v(qo.$$.fragment,s),v(Po.$$.fragment,s),v(xo.$$.fragment,s),v(Ir.$$.fragment,s),v(Sr.$$.fragment,s),v(Rr.$$.fragment,s),v(Co.$$.fragment,s),v(Oo.$$.fragment,s),v(Hr.$$.fragment,s),v(Vr.$$.fragment,s),v(ea.$$.fragment,s),v(Do.$$.fragment,s),v(Ao.$$.fragment,s),v(No.$$.fragment,s),v(na.$$.fragment,s),v(ta.$$.fragment,s),v(la.$$.fragment,s),v(So.$$.fragment,s),v(Bo.$$.fragment,s),v(Wo.$$.fragment,s),v(da.$$.fragment,s),v(ca.$$.fragment,s),v(Ko.$$.fragment,s),v(ga.$$.fragment,s),v(Uo.$$.fragment,s),v(Ro.$$.fragment,s),v(_a.$$.fragment,s),v(ka.$$.fragment,s),v(Vo.$$.fragment,s),v(va.$$.fragment,s),v(Yo.$$.fragment,s),v(Go.$$.fragment,s),v($a.$$.fragment,s),v(Ea.$$.fragment,s),v(Xo.$$.fragment,s),v(ja.$$.fragment,s),v(Jo.$$.fragment,s),v(es.$$.fragment,s),v(Ca.$$.fragment,s),v(Oa.$$.fragment,s),v(ts.$$.fragment,s),v(Ba.$$.fragment,s),v(os.$$.fragment,s),v(ss.$$.fragment,s),v(rs.$$.fragment,s),v(Wa.$$.fragment,s),v(Qa.$$.fragment,s),v(is.$$.fragment,s),v(Ya.$$.fragment,s),v(ls.$$.fragment,s),v(ds.$$.fragment,s),v(cs.$$.fragment,s),v(Ga.$$.fragment,s),v(Za.$$.fragment,s),v(ps.$$.fragment,s),v(oi.$$.fragment,s),v(fs.$$.fragment,s),v(hs.$$.fragment,s),v(si.$$.fragment,s),v(ri.$$.fragment,s),v(gs.$$.fragment,s),v(ui.$$.fragment,s),v(_s.$$.fragment,s),v(ks.$$.fragment,s),v(Ts.$$.fragment,s),v(pi.$$.fragment,s),v(fi.$$.fragment,s),v(ys.$$.fragment,s),v(Ti.$$.fragment,s),v(bs.$$.fragment,s),v(ws.$$.fragment,s),v(vs.$$.fragment,s),Nu=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(ie.$$.fragment,s),$(Ds.$$.fragment,s),$(Ns.$$.fragment,s),$(Is.$$.fragment,s),$(Bs.$$.fragment,s),$(Qs.$$.fragment,s),$(Us.$$.fragment,s),$(io.$$.fragment,s),$(Rs.$$.fragment,s),$(Hs.$$.fragment,s),$(Vs.$$.fragment,s),$(Zs.$$.fragment,s),$(uo.$$.fragment,s),$(Xs.$$.fragment,s),$(Js.$$.fragment,s),$(nr.$$.fragment,s),$(or.$$.fragment,s),$(sr.$$.fragment,s),$(cr.$$.fragment,s),$(ho.$$.fragment,s),$(mo.$$.fragment,s),$(ur.$$.fragment,s),$(pr.$$.fragment,s),$(kr.$$.fragment,s),$(_o.$$.fragment,s),$(ko.$$.fragment,s),$(Tr.$$.fragment,s),$(Fr.$$.fragment,s),$(yr.$$.fragment,s),$(Fo.$$.fragment,s),$(yo.$$.fragment,s),$(br.$$.fragment,s),$(wr.$$.fragment,s),$(Pr.$$.fragment,s),$(wo.$$.fragment,s),$(vo.$$.fragment,s),$($o.$$.fragment,s),$(xr.$$.fragment,s),$(jr.$$.fragment,s),$(Nr.$$.fragment,s),$(Mo.$$.fragment,s),$(zo.$$.fragment,s),$(qo.$$.fragment,s),$(Po.$$.fragment,s),$(xo.$$.fragment,s),$(Ir.$$.fragment,s),$(Sr.$$.fragment,s),$(Rr.$$.fragment,s),$(Co.$$.fragment,s),$(Oo.$$.fragment,s),$(Hr.$$.fragment,s),$(Vr.$$.fragment,s),$(ea.$$.fragment,s),$(Do.$$.fragment,s),$(Ao.$$.fragment,s),$(No.$$.fragment,s),$(na.$$.fragment,s),$(ta.$$.fragment,s),$(la.$$.fragment,s),$(So.$$.fragment,s),$(Bo.$$.fragment,s),$(Wo.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Ko.$$.fragment,s),$(ga.$$.fragment,s),$(Uo.$$.fragment,s),$(Ro.$$.fragment,s),$(_a.$$.fragment,s),$(ka.$$.fragment,s),$(Vo.$$.fragment,s),$(va.$$.fragment,s),$(Yo.$$.fragment,s),$(Go.$$.fragment,s),$($a.$$.fragment,s),$(Ea.$$.fragment,s),$(Xo.$$.fragment,s),$(ja.$$.fragment,s),$(Jo.$$.fragment,s),$(es.$$.fragment,s),$(Ca.$$.fragment,s),$(Oa.$$.fragment,s),$(ts.$$.fragment,s),$(Ba.$$.fragment,s),$(os.$$.fragment,s),$(ss.$$.fragment,s),$(rs.$$.fragment,s),$(Wa.$$.fragment,s),$(Qa.$$.fragment,s),$(is.$$.fragment,s),$(Ya.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(Ga.$$.fragment,s),$(Za.$$.fragment,s),$(ps.$$.fragment,s),$(oi.$$.fragment,s),$(fs.$$.fragment,s),$(hs.$$.fragment,s),$(si.$$.fragment,s),$(ri.$$.fragment,s),$(gs.$$.fragment,s),$(ui.$$.fragment,s),$(_s.$$.fragment,s),$(ks.$$.fragment,s),$(Ts.$$.fragment,s),$(pi.$$.fragment,s),$(fi.$$.fragment,s),$(ys.$$.fragment,s),$(Ti.$$.fragment,s),$(bs.$$.fragment,s),$(ws.$$.fragment,s),$(vs.$$.fragment,s),Nu=!1},d(s){n(d),s&&n(k),s&&n(c),E(l),s&&n(fe),s&&n(I),E(M),s&&n(he),s&&n(B),s&&n(me),s&&n(Q),s&&n(ge),s&&n(K),s&&n(oe),s&&n(j),s&&n(_e),s&&n(W),s&&n(q),s&&n(Oe),s&&n(Ne),s&&n(S),E(ie),s&&n(Xc),s&&n(Jn),E(Ds),s&&n(Jc),s&&n(pt),E(Ns),s&&n(eu),s&&n(Je),E(Is),E(Bs),E(Qs),E(Us),E(io),E(Rs),s&&n(nu),s&&n(ht),E(Hs),s&&n(tu),s&&n(Tn),E(Vs),E(Zs),E(uo),s&&n(ou),s&&n(gt),E(Xs),s&&n(su),s&&n(_t),E(Js),s&&n(ru),s&&n(kt),E(nr),s&&n(au),s&&n(Tt),E(or),s&&n(iu),s&&n(pn),E(sr),E(cr),E(ho),E(mo),s&&n(lu),s&&n(yt),E(ur),s&&n(du),s&&n(fn),E(pr),E(kr),E(_o),E(ko),s&&n(cu),s&&n(wt),E(Tr),s&&n(uu),s&&n(vt),E(Fr),E(yr),E(Fo),E(yo),s&&n(pu),s&&n(Et),E(br),s&&n(fu),s&&n(hn),E(wr),E(Pr),E(wo),E(vo),E($o),s&&n(hu),s&&n(zt),E(xr),s&&n(mu),s&&n(mn),E(jr),E(Nr),E(Mo),E(zo),E(qo),E(Po),E(xo),s&&n(gu),s&&n(Pt),E(Ir),s&&n(_u),s&&n(gn),E(Sr),E(Rr),E(Co),E(Oo),s&&n(ku),s&&n(jt),E(Hr),s&&n(Tu),s&&n(_n),E(Vr),E(ea),E(Do),E(Ao),E(No),s&&n(Fu),s&&n(Ot),E(na),s&&n(yu),s&&n(kn),E(ta),E(la),E(So),E(Bo),E(Wo),s&&n(bu),s&&n(At),E(da),s&&n(wu),s&&n(nn),E(ca),E(Ko),E(ga),E(Uo),E(Ro),s&&n(vu),s&&n(It),E(_a),s&&n($u),s&&n(tn),E(ka),E(Vo),E(va),E(Yo),E(Go),s&&n(Eu),s&&n(Bt),E($a),s&&n(Mu),s&&n(on),E(Ea),E(Xo),E(ja),E(Jo),E(es),s&&n(zu),s&&n(Qt),E(Ca),s&&n(qu),s&&n(sn),E(Oa),E(ts),E(Ba),E(os),E(ss),E(rs),s&&n(Pu),s&&n(Ut),E(Wa),s&&n(xu),s&&n(rn),E(Qa),E(is),E(Ya),E(ls),E(ds),E(cs),s&&n(ju),s&&n(Ht),E(Ga),s&&n(Cu),s&&n(an),E(Za),E(ps),E(oi),E(fs),E(hs),s&&n(Ou),s&&n(Yt),E(si),s&&n(Lu),s&&n(ln),E(ri),E(gs),E(ui),E(_s),E(ks),E(Ts),s&&n(Du),s&&n(Zt),E(pi),s&&n(Au),s&&n(dn),E(fi),E(ys),E(Ti),E(bs),E(ws),E(vs)}}}const C1={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function O1(P){return C$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class B1 extends q${constructor(d){super();P$(this,d,O1,j1,x$,{})}}export{B1 as default,C1 as metadata};
