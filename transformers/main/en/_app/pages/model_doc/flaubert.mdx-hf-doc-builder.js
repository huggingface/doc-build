import{S as M_,i as x_,s as q_,e as a,k as u,w,t as o,M as z_,c as r,d as t,m as h,a as i,x as T,h as n,b as _,G as e,g as b,y as v,q as F,o as $,B as E,v as C_,L as He}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as We}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function j_(q){let d,g,c,m,k;return m=new Ue({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=o("pair mask has the following format:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"pair mask has the following format:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function N_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function P_(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function O_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function D_(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, FlaubertWithLMHeadModel
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertWithLMHeadModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("The capital of France is <special1>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <special1>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;special1&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;special1&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function S_(q){let d,g;return d=new Ue({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function A_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function L_(q){let d,g,c,m,k;return m=new Ue({props:{code:`import torch
from transformers import FlaubertTokenizer, FlaubertForSequenceClassification

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertForSequenceClassification.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=o("Example of single-label classification:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function I_(q){let d,g;return d=new Ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FlaubertForSequenceClassification.from_pretrained("flaubert/flaubert_base_cased", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function W_(q){let d,g,c,m,k;return m=new Ue({props:{code:`import torch
from transformers import FlaubertTokenizer, FlaubertForSequenceClassification

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertForSequenceClassification.from_pretrained("flaubert/flaubert_base_cased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=o("Example of multi-label classification:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function H_(q){let d,g;return d=new Ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FlaubertForSequenceClassification.from_pretrained(
    "flaubert/flaubert_base_cased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function U_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function Q_(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, FlaubertForMultipleChoice
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertForMultipleChoice.from_pretrained("flaubert/flaubert_base_cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function B_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function R_(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, FlaubertForTokenClassification
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertForTokenClassification.from_pretrained("flaubert/flaubert_base_cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

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
`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function K_(q){let d,g;return d=new Ue({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function V_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function Y_(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, FlaubertForQuestionAnsweringSimple
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertForQuestionAnsweringSimple.from_pretrained("flaubert/flaubert_base_cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function X_(q){let d,g;return d=new Ue({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function G_(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function J_(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnswering.from_pretrained("xlm-mlm-en-2048")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function Z_(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),A=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),M=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=o("fit()"),be=o(" and "),W=a("code"),Me=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=o("Functional"),xe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),j=a("ul"),O=a("li"),de=o("a single Tensor with "),Y=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),X=a("code"),ze=o("model(input_ids)"),ke=u(),N=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=u(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),Ne=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=r(f,"P",{});var x=i(d);g=n(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(x," accept two formats as input:"),x.forEach(t),l=h(f),p=r(f,"UL",{});var se=i(p);C=r(se,"LI",{});var Be=i(C);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),ge=h(se),A=r(se,"LI",{});var Oe=i(A);ae=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),se.forEach(t),Z=h(f),M=r(f,"P",{});var z=i(M);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var Le=i(U);Fe=n(Le,"model.fit()"),Le.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Re=i(I);$e=n(Re,"model.fit()"),Re.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ke=i(V);Ee=n(Ke,"fit()"),Ke.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);Me=n(Ie,"predict()"),Ie.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),H=r(z,"CODE",{});var Ve=i(H);me=n(Ve,"Functional"),Ve.forEach(t),xe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(f),j=r(f,"UL",{});var L=i(j);O=r(L,"LI",{});var K=i(O);de=n(K,"a single Tensor with "),Y=r(K,"CODE",{});var De=i(Y);qe=n(De,"input_ids"),De.forEach(t),ce=n(K," only and nothing else: "),X=r(K,"CODE",{});var Se=i(X);ze=n(Se,"model(input_ids)"),Se.forEach(t),K.forEach(t),ke=h(L),N=r(L,"LI",{});var R=i(N);re=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ae=i(Q);pe=n(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),Ce=n(R," or "),B=r(R,"CODE",{});var Ye=i(B);je=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),we=h(L),D=r(L,"LI",{});var fe=i(D);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Xe=i(G);ee=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),fe.forEach(t),L.forEach(t),ne=h(f),P=r(f,"P",{});var oe=i(P);Ne=n(oe,`Note that when creating models and layers with
`),S=r(oe,"A",{href:!0,rel:!0});var J=i(S);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(S,"rel","nofollow")},m(f,x){b(f,d,x),e(d,g),e(d,c),e(c,m),e(d,k),b(f,l,x),b(f,p,x),e(p,C),e(C,Te),e(p,ge),e(p,A),e(A,ae),b(f,Z,x),b(f,M,x),e(M,ve),e(M,U),e(U,Fe),e(M,_e),e(M,I),e(I,$e),e(M,le),e(M,V),e(V,Ee),e(M,be),e(M,W),e(W,Me),e(M,ye),e(M,H),e(H,me),e(M,xe),b(f,te,x),b(f,j,x),e(j,O),e(O,de),e(O,Y),e(Y,qe),e(O,ce),e(O,X),e(X,ze),e(j,ke),e(j,N),e(N,re),e(N,Q),e(Q,pe),e(N,Ce),e(N,B),e(B,je),e(j,we),e(j,D),e(D,ue),e(D,G),e(G,ee),b(f,ne,x),b(f,P,x),e(P,Ne),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(M),f&&t(te),f&&t(j),f&&t(ne),f&&t(P)}}}function eb(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function tb(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function ob(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),A=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),M=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=o("fit()"),be=o(" and "),W=a("code"),Me=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=o("Functional"),xe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),j=a("ul"),O=a("li"),de=o("a single Tensor with "),Y=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),X=a("code"),ze=o("model(input_ids)"),ke=u(),N=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=u(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),Ne=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=r(f,"P",{});var x=i(d);g=n(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(x," accept two formats as input:"),x.forEach(t),l=h(f),p=r(f,"UL",{});var se=i(p);C=r(se,"LI",{});var Be=i(C);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),ge=h(se),A=r(se,"LI",{});var Oe=i(A);ae=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),se.forEach(t),Z=h(f),M=r(f,"P",{});var z=i(M);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var Le=i(U);Fe=n(Le,"model.fit()"),Le.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Re=i(I);$e=n(Re,"model.fit()"),Re.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ke=i(V);Ee=n(Ke,"fit()"),Ke.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);Me=n(Ie,"predict()"),Ie.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),H=r(z,"CODE",{});var Ve=i(H);me=n(Ve,"Functional"),Ve.forEach(t),xe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(f),j=r(f,"UL",{});var L=i(j);O=r(L,"LI",{});var K=i(O);de=n(K,"a single Tensor with "),Y=r(K,"CODE",{});var De=i(Y);qe=n(De,"input_ids"),De.forEach(t),ce=n(K," only and nothing else: "),X=r(K,"CODE",{});var Se=i(X);ze=n(Se,"model(input_ids)"),Se.forEach(t),K.forEach(t),ke=h(L),N=r(L,"LI",{});var R=i(N);re=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ae=i(Q);pe=n(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),Ce=n(R," or "),B=r(R,"CODE",{});var Ye=i(B);je=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),we=h(L),D=r(L,"LI",{});var fe=i(D);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Xe=i(G);ee=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),fe.forEach(t),L.forEach(t),ne=h(f),P=r(f,"P",{});var oe=i(P);Ne=n(oe,`Note that when creating models and layers with
`),S=r(oe,"A",{href:!0,rel:!0});var J=i(S);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(S,"rel","nofollow")},m(f,x){b(f,d,x),e(d,g),e(d,c),e(c,m),e(d,k),b(f,l,x),b(f,p,x),e(p,C),e(C,Te),e(p,ge),e(p,A),e(A,ae),b(f,Z,x),b(f,M,x),e(M,ve),e(M,U),e(U,Fe),e(M,_e),e(M,I),e(I,$e),e(M,le),e(M,V),e(V,Ee),e(M,be),e(M,W),e(W,Me),e(M,ye),e(M,H),e(H,me),e(M,xe),b(f,te,x),b(f,j,x),e(j,O),e(O,de),e(O,Y),e(Y,qe),e(O,ce),e(O,X),e(X,ze),e(j,ke),e(j,N),e(N,re),e(N,Q),e(Q,pe),e(N,Ce),e(N,B),e(B,je),e(j,we),e(j,D),e(D,ue),e(D,G),e(G,ee),b(f,ne,x),b(f,P,x),e(P,Ne),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(M),f&&t(te),f&&t(j),f&&t(ne),f&&t(P)}}}function nb(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function sb(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertWithLMHeadModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function ab(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),A=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),M=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=o("fit()"),be=o(" and "),W=a("code"),Me=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=o("Functional"),xe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),j=a("ul"),O=a("li"),de=o("a single Tensor with "),Y=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),X=a("code"),ze=o("model(input_ids)"),ke=u(),N=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=u(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),Ne=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=r(f,"P",{});var x=i(d);g=n(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(x," accept two formats as input:"),x.forEach(t),l=h(f),p=r(f,"UL",{});var se=i(p);C=r(se,"LI",{});var Be=i(C);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),ge=h(se),A=r(se,"LI",{});var Oe=i(A);ae=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),se.forEach(t),Z=h(f),M=r(f,"P",{});var z=i(M);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var Le=i(U);Fe=n(Le,"model.fit()"),Le.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Re=i(I);$e=n(Re,"model.fit()"),Re.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ke=i(V);Ee=n(Ke,"fit()"),Ke.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);Me=n(Ie,"predict()"),Ie.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),H=r(z,"CODE",{});var Ve=i(H);me=n(Ve,"Functional"),Ve.forEach(t),xe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(f),j=r(f,"UL",{});var L=i(j);O=r(L,"LI",{});var K=i(O);de=n(K,"a single Tensor with "),Y=r(K,"CODE",{});var De=i(Y);qe=n(De,"input_ids"),De.forEach(t),ce=n(K," only and nothing else: "),X=r(K,"CODE",{});var Se=i(X);ze=n(Se,"model(input_ids)"),Se.forEach(t),K.forEach(t),ke=h(L),N=r(L,"LI",{});var R=i(N);re=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ae=i(Q);pe=n(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),Ce=n(R," or "),B=r(R,"CODE",{});var Ye=i(B);je=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),we=h(L),D=r(L,"LI",{});var fe=i(D);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Xe=i(G);ee=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),fe.forEach(t),L.forEach(t),ne=h(f),P=r(f,"P",{});var oe=i(P);Ne=n(oe,`Note that when creating models and layers with
`),S=r(oe,"A",{href:!0,rel:!0});var J=i(S);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(S,"rel","nofollow")},m(f,x){b(f,d,x),e(d,g),e(d,c),e(c,m),e(d,k),b(f,l,x),b(f,p,x),e(p,C),e(C,Te),e(p,ge),e(p,A),e(A,ae),b(f,Z,x),b(f,M,x),e(M,ve),e(M,U),e(U,Fe),e(M,_e),e(M,I),e(I,$e),e(M,le),e(M,V),e(V,Ee),e(M,be),e(M,W),e(W,Me),e(M,ye),e(M,H),e(H,me),e(M,xe),b(f,te,x),b(f,j,x),e(j,O),e(O,de),e(O,Y),e(Y,qe),e(O,ce),e(O,X),e(X,ze),e(j,ke),e(j,N),e(N,re),e(N,Q),e(Q,pe),e(N,Ce),e(N,B),e(B,je),e(j,we),e(j,D),e(D,ue),e(D,G),e(G,ee),b(f,ne,x),b(f,P,x),e(P,Ne),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(M),f&&t(te),f&&t(j),f&&t(ne),f&&t(P)}}}function rb(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function ib(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertForSequenceClassification
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertForSequenceClassification.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function lb(q){let d,g;return d=new Ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFFlaubertForSequenceClassification.from_pretrained("flaubert/flaubert_base_cased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function db(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),A=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),M=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=o("fit()"),be=o(" and "),W=a("code"),Me=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=o("Functional"),xe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),j=a("ul"),O=a("li"),de=o("a single Tensor with "),Y=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),X=a("code"),ze=o("model(input_ids)"),ke=u(),N=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=u(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),Ne=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=r(f,"P",{});var x=i(d);g=n(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(x," accept two formats as input:"),x.forEach(t),l=h(f),p=r(f,"UL",{});var se=i(p);C=r(se,"LI",{});var Be=i(C);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),ge=h(se),A=r(se,"LI",{});var Oe=i(A);ae=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),se.forEach(t),Z=h(f),M=r(f,"P",{});var z=i(M);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var Le=i(U);Fe=n(Le,"model.fit()"),Le.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Re=i(I);$e=n(Re,"model.fit()"),Re.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ke=i(V);Ee=n(Ke,"fit()"),Ke.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);Me=n(Ie,"predict()"),Ie.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),H=r(z,"CODE",{});var Ve=i(H);me=n(Ve,"Functional"),Ve.forEach(t),xe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(f),j=r(f,"UL",{});var L=i(j);O=r(L,"LI",{});var K=i(O);de=n(K,"a single Tensor with "),Y=r(K,"CODE",{});var De=i(Y);qe=n(De,"input_ids"),De.forEach(t),ce=n(K," only and nothing else: "),X=r(K,"CODE",{});var Se=i(X);ze=n(Se,"model(input_ids)"),Se.forEach(t),K.forEach(t),ke=h(L),N=r(L,"LI",{});var R=i(N);re=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ae=i(Q);pe=n(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),Ce=n(R," or "),B=r(R,"CODE",{});var Ye=i(B);je=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),we=h(L),D=r(L,"LI",{});var fe=i(D);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Xe=i(G);ee=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),fe.forEach(t),L.forEach(t),ne=h(f),P=r(f,"P",{});var oe=i(P);Ne=n(oe,`Note that when creating models and layers with
`),S=r(oe,"A",{href:!0,rel:!0});var J=i(S);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(S,"rel","nofollow")},m(f,x){b(f,d,x),e(d,g),e(d,c),e(c,m),e(d,k),b(f,l,x),b(f,p,x),e(p,C),e(C,Te),e(p,ge),e(p,A),e(A,ae),b(f,Z,x),b(f,M,x),e(M,ve),e(M,U),e(U,Fe),e(M,_e),e(M,I),e(I,$e),e(M,le),e(M,V),e(V,Ee),e(M,be),e(M,W),e(W,Me),e(M,ye),e(M,H),e(H,me),e(M,xe),b(f,te,x),b(f,j,x),e(j,O),e(O,de),e(O,Y),e(Y,qe),e(O,ce),e(O,X),e(X,ze),e(j,ke),e(j,N),e(N,re),e(N,Q),e(Q,pe),e(N,Ce),e(N,B),e(B,je),e(j,we),e(j,D),e(D,ue),e(D,G),e(G,ee),b(f,ne,x),b(f,P,x),e(P,Ne),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(M),f&&t(te),f&&t(j),f&&t(ne),f&&t(P)}}}function cb(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function pb(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertForMultipleChoice
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertForMultipleChoice.from_pretrained("flaubert/flaubert_base_cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function ub(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),A=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),M=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=o("fit()"),be=o(" and "),W=a("code"),Me=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=o("Functional"),xe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),j=a("ul"),O=a("li"),de=o("a single Tensor with "),Y=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),X=a("code"),ze=o("model(input_ids)"),ke=u(),N=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=u(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),Ne=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=r(f,"P",{});var x=i(d);g=n(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(x," accept two formats as input:"),x.forEach(t),l=h(f),p=r(f,"UL",{});var se=i(p);C=r(se,"LI",{});var Be=i(C);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),ge=h(se),A=r(se,"LI",{});var Oe=i(A);ae=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),se.forEach(t),Z=h(f),M=r(f,"P",{});var z=i(M);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var Le=i(U);Fe=n(Le,"model.fit()"),Le.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Re=i(I);$e=n(Re,"model.fit()"),Re.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ke=i(V);Ee=n(Ke,"fit()"),Ke.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);Me=n(Ie,"predict()"),Ie.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),H=r(z,"CODE",{});var Ve=i(H);me=n(Ve,"Functional"),Ve.forEach(t),xe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(f),j=r(f,"UL",{});var L=i(j);O=r(L,"LI",{});var K=i(O);de=n(K,"a single Tensor with "),Y=r(K,"CODE",{});var De=i(Y);qe=n(De,"input_ids"),De.forEach(t),ce=n(K," only and nothing else: "),X=r(K,"CODE",{});var Se=i(X);ze=n(Se,"model(input_ids)"),Se.forEach(t),K.forEach(t),ke=h(L),N=r(L,"LI",{});var R=i(N);re=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ae=i(Q);pe=n(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),Ce=n(R," or "),B=r(R,"CODE",{});var Ye=i(B);je=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),we=h(L),D=r(L,"LI",{});var fe=i(D);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Xe=i(G);ee=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),fe.forEach(t),L.forEach(t),ne=h(f),P=r(f,"P",{});var oe=i(P);Ne=n(oe,`Note that when creating models and layers with
`),S=r(oe,"A",{href:!0,rel:!0});var J=i(S);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(S,"rel","nofollow")},m(f,x){b(f,d,x),e(d,g),e(d,c),e(c,m),e(d,k),b(f,l,x),b(f,p,x),e(p,C),e(C,Te),e(p,ge),e(p,A),e(A,ae),b(f,Z,x),b(f,M,x),e(M,ve),e(M,U),e(U,Fe),e(M,_e),e(M,I),e(I,$e),e(M,le),e(M,V),e(V,Ee),e(M,be),e(M,W),e(W,Me),e(M,ye),e(M,H),e(H,me),e(M,xe),b(f,te,x),b(f,j,x),e(j,O),e(O,de),e(O,Y),e(Y,qe),e(O,ce),e(O,X),e(X,ze),e(j,ke),e(j,N),e(N,re),e(N,Q),e(Q,pe),e(N,Ce),e(N,B),e(B,je),e(j,we),e(j,D),e(D,ue),e(D,G),e(G,ee),b(f,ne,x),b(f,P,x),e(P,Ne),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(M),f&&t(te),f&&t(j),f&&t(ne),f&&t(P)}}}function hb(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function mb(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertForTokenClassification
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertForTokenClassification.from_pretrained("flaubert/flaubert_base_cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

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
`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function fb(q){let d,g;return d=new Ue({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function gb(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),A=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),M=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ee=o("fit()"),be=o(" and "),W=a("code"),Me=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),me=o("Functional"),xe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),j=a("ul"),O=a("li"),de=o("a single Tensor with "),Y=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),X=a("code"),ze=o("model(input_ids)"),ke=u(),N=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=u(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),Ne=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=r(f,"P",{});var x=i(d);g=n(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(x," accept two formats as input:"),x.forEach(t),l=h(f),p=r(f,"UL",{});var se=i(p);C=r(se,"LI",{});var Be=i(C);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),ge=h(se),A=r(se,"LI",{});var Oe=i(A);ae=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),se.forEach(t),Z=h(f),M=r(f,"P",{});var z=i(M);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(z,"CODE",{});var Le=i(U);Fe=n(Le,"model.fit()"),Le.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Re=i(I);$e=n(Re,"model.fit()"),Re.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ke=i(V);Ee=n(Ke,"fit()"),Ke.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);Me=n(Ie,"predict()"),Ie.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),H=r(z,"CODE",{});var Ve=i(H);me=n(Ve,"Functional"),Ve.forEach(t),xe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(f),j=r(f,"UL",{});var L=i(j);O=r(L,"LI",{});var K=i(O);de=n(K,"a single Tensor with "),Y=r(K,"CODE",{});var De=i(Y);qe=n(De,"input_ids"),De.forEach(t),ce=n(K," only and nothing else: "),X=r(K,"CODE",{});var Se=i(X);ze=n(Se,"model(input_ids)"),Se.forEach(t),K.forEach(t),ke=h(L),N=r(L,"LI",{});var R=i(N);re=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ae=i(Q);pe=n(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),Ce=n(R," or "),B=r(R,"CODE",{});var Ye=i(B);je=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),we=h(L),D=r(L,"LI",{});var fe=i(D);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Xe=i(G);ee=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),fe.forEach(t),L.forEach(t),ne=h(f),P=r(f,"P",{});var oe=i(P);Ne=n(oe,`Note that when creating models and layers with
`),S=r(oe,"A",{href:!0,rel:!0});var J=i(S);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(S,"rel","nofollow")},m(f,x){b(f,d,x),e(d,g),e(d,c),e(c,m),e(d,k),b(f,l,x),b(f,p,x),e(p,C),e(C,Te),e(p,ge),e(p,A),e(A,ae),b(f,Z,x),b(f,M,x),e(M,ve),e(M,U),e(U,Fe),e(M,_e),e(M,I),e(I,$e),e(M,le),e(M,V),e(V,Ee),e(M,be),e(M,W),e(W,Me),e(M,ye),e(M,H),e(H,me),e(M,xe),b(f,te,x),b(f,j,x),e(j,O),e(O,de),e(O,Y),e(Y,qe),e(O,ce),e(O,X),e(X,ze),e(j,ke),e(j,N),e(N,re),e(N,Q),e(Q,pe),e(N,Ce),e(N,B),e(B,je),e(j,we),e(j,D),e(D,ue),e(D,G),e(G,ee),b(f,ne,x),b(f,P,x),e(P,Ne),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(M),f&&t(te),f&&t(j),f&&t(ne),f&&t(P)}}}function _b(q){let d,g,c,m,k;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,m),e(d,k)},d(l){l&&t(d)}}}function bb(q){let d,g,c,m,k;return m=new Ue({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertForQuestionAnsweringSimple.from_pretrained("flaubert/flaubert_base_cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=o("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),v(m,l,p),k=!0},p:He,i(l){k||(F(m.$$.fragment,l),k=!0)},o(l){$(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function yb(q){let d,g;return d=new Ue({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){v(d,c,m),g=!0},p:He,i(c){g||(F(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function kb(q){let d,g,c,m,k,l,p,C,Te,ge,A,ae,Z,M,ve,U,Fe,_e,I,$e,le,V,Ee,be,W,Me,ye,H,me,xe,te,j,O,de,Y,qe,ce,X,ze,ke,N,re,Q,pe,Ce,B,je,we,D,ue,G,ee,ne,P,Ne,S,he,Pe,f,x,Qe,se,Be,Oe,z,Le,Re,Ke,Ie,Ve,L,K,De,Se,R,Ae,Ye,fe,Xe,oe,J,Wn,gd,pr,_d,bd,jt,ur,yd,kd,hr,wd,Td,Nt,vd,mr,Fd,$d,fr,Ed,Md,gr,xd,qd,zd,Hn,Cd,_r,jd,Nd,Pd,Un,Od,wa,Dd,Sd,Ad,St,Qn,Ld,br,Id,Wd,Bn,Ta,Hd,yr,Ud,Qd,va,Bd,kr,Rd,Kd,Co,Rn,Vd,wr,Yd,Xd,kt,Kn,Gd,Tr,Jd,Zd,jo,ec,Xt,tc,vr,oc,nc,Fr,sc,ac,rc,No,Vn,ic,Yn,lc,$r,dc,cc,el,Gt,Po,Er,Xn,pc,Mr,uc,tl,Jt,Gn,hc,wt,Jn,mc,Zt,fc,Fa,gc,_c,xr,bc,yc,kc,Oo,wc,Do,ol,eo,So,qr,Zn,Tc,zr,vc,nl,it,es,Fc,Cr,$c,Ec,ts,Mc,$a,xc,qc,zc,os,Cc,ns,jc,Nc,Pc,ut,ss,Oc,to,Dc,Ea,Sc,Ac,jr,Lc,Ic,Wc,Ao,Hc,Lo,Uc,Io,sl,oo,Wo,Nr,as,Qc,Pr,Bc,al,lt,rs,Rc,Or,Kc,Vc,is,Yc,Ma,Xc,Gc,Jc,ls,Zc,ds,ep,tp,op,Ze,cs,np,no,sp,xa,ap,rp,Dr,ip,lp,dp,Ho,cp,Uo,pp,Qo,up,Bo,hp,Ro,rl,so,Ko,Sr,ps,mp,Ar,fp,il,dt,us,gp,Lr,_p,bp,hs,yp,qa,kp,wp,Tp,ms,vp,fs,Fp,$p,Ep,Tt,gs,Mp,ao,xp,za,qp,zp,Ir,Cp,jp,Np,Vo,Pp,Yo,ll,ro,Xo,Wr,_s,Op,Hr,Dp,dl,ct,bs,Sp,Ur,Ap,Lp,ys,Ip,Ca,Wp,Hp,Up,ks,Qp,ws,Bp,Rp,Kp,ht,Ts,Vp,io,Yp,ja,Xp,Gp,Qr,Jp,Zp,eu,Go,tu,Jo,ou,Zo,cl,lo,en,Br,vs,nu,Rr,su,pl,pt,Fs,au,co,ru,Kr,iu,lu,Vr,du,cu,pu,$s,uu,Na,hu,mu,fu,Es,gu,Ms,_u,bu,yu,mt,xs,ku,po,wu,Pa,Tu,vu,Yr,Fu,$u,Eu,tn,Mu,on,xu,nn,ul,uo,sn,Xr,qs,qu,Gr,zu,hl,ho,zs,Cu,ft,Cs,ju,mo,Nu,Oa,Pu,Ou,Jr,Du,Su,Au,an,Lu,js,Iu,Zr,Wu,Hu,Uu,rn,ml,fo,ln,ei,Ns,Qu,ti,Bu,fl,et,Ps,Ru,oi,Ku,Vu,Os,Yu,Da,Xu,Gu,Ju,Ds,Zu,Ss,eh,th,oh,dn,nh,vt,As,sh,go,ah,Sa,rh,ih,ni,lh,dh,ch,cn,ph,pn,gl,_o,un,si,Ls,uh,ai,hh,_l,tt,Is,mh,ri,fh,gh,Ws,_h,Aa,bh,yh,kh,Hs,wh,Us,Th,vh,Fh,hn,$h,Ft,Qs,Eh,bo,Mh,La,xh,qh,ii,zh,Ch,jh,mn,Nh,fn,bl,yo,gn,li,Bs,Ph,di,Oh,yl,ot,Rs,Dh,ci,Sh,Ah,Ks,Lh,Ia,Ih,Wh,Hh,Vs,Uh,Ys,Qh,Bh,Rh,_n,Kh,gt,Xs,Vh,ko,Yh,Wa,Xh,Gh,pi,Jh,Zh,em,bn,tm,yn,om,kn,kl,wo,wn,ui,Gs,nm,hi,sm,wl,nt,Js,am,mi,rm,im,Zs,lm,Ha,dm,cm,pm,ea,um,ta,hm,mm,fm,Tn,gm,$t,oa,_m,To,bm,Ua,ym,km,fi,wm,Tm,vm,vn,Fm,Fn,Tl,vo,$n,gi,na,$m,_i,Em,vl,st,sa,Mm,bi,xm,qm,aa,zm,Qa,Cm,jm,Nm,ra,Pm,ia,Om,Dm,Sm,En,Am,_t,la,Lm,Fo,Im,Ba,Wm,Hm,yi,Um,Qm,Bm,Mn,Rm,xn,Km,qn,Fl,$o,zn,ki,da,Vm,wi,Ym,$l,at,ca,Xm,Eo,Gm,Ti,Jm,Zm,vi,ef,tf,of,pa,nf,Ra,sf,af,rf,ua,lf,ha,df,cf,pf,Cn,uf,bt,ma,hf,Mo,mf,Ka,ff,gf,Fi,_f,bf,yf,jn,kf,Nn,wf,Pn,El;return l=new rt({}),M=new rt({}),pe=new rt({}),ue=new ie({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"pre_norm",val:" = False"},{name:"layerdrop",val:" = 0.0"},{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"emb_dim"},{anchor:"transformers.FlaubertConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.FlaubertConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.FlaubertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.FlaubertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention mechanism`,name:"attention_dropout"},{anchor:"transformers.FlaubertConfig.gelu_activation",description:`<strong>gelu_activation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a <em>gelu</em> activation instead of <em>relu</em>.`,name:"gelu_activation"},{anchor:"transformers.FlaubertConfig.sinusoidal_embeddings",description:`<strong>sinusoidal_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sinusoidal positional embeddings instead of absolute positional embeddings.`,name:"sinusoidal_embeddings"},{anchor:"transformers.FlaubertConfig.causal",description:`<strong>causal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should behave in a causal manner. Causal models use a triangular attention mask in
order to only attend to the left-side context instead if a bidirectional context.`,name:"causal"},{anchor:"transformers.FlaubertConfig.asm",description:`<strong>asm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use an adaptive log softmax projection layer instead of a linear layer for the prediction
layer.`,name:"asm"},{anchor:"transformers.FlaubertConfig.n_langs",description:`<strong>n_langs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of languages the model handles. Set to 1 for monolingual models.`,name:"n_langs"},{anchor:"transformers.FlaubertConfig.use_lang_emb",description:`<strong>use_lang_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use language embeddings. Some models use additional language embeddings, see <a href="http://huggingface.co/transformers/multilingual.html#xlm-language-embeddings" rel="nofollow">the multilingual
models page</a> for information
on how to use them.`,name:"use_lang_emb"},{anchor:"transformers.FlaubertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FlaubertConfig.embed_init_std",description:`<strong>embed_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 2048^-0.5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing the embedding matrices.`,name:"embed_init_std"},{anchor:"transformers.FlaubertConfig.init_std",description:`<strong>init_std</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices except the
embedding matrices.`,name:"init_std"},{anchor:"transformers.FlaubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FlaubertConfig.bos_index",description:`<strong>bos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the beginning of sentence token in the vocabulary.`,name:"bos_index"},{anchor:"transformers.FlaubertConfig.eos_index",description:`<strong>eos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The index of the end of sentence token in the vocabulary.`,name:"eos_index"},{anchor:"transformers.FlaubertConfig.pad_index",description:`<strong>pad_index</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The index of the padding token in the vocabulary.`,name:"pad_index"},{anchor:"transformers.FlaubertConfig.unk_index",description:`<strong>unk_index</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The index of the unknown token in the vocabulary.`,name:"unk_index"},{anchor:"transformers.FlaubertConfig.mask_index",description:`<strong>mask_index</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
The index of the masking token in the vocabulary.`,name:"mask_index"},{anchor:"transformers.FlaubertConfig.is_encoder(bool,",description:`<strong>is_encoder(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the initialized model should be a transformer encoder or decoder as seen in Vaswani et al.`,name:"is_encoder(bool,"},{anchor:"transformers.FlaubertConfig.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201C;first&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.FlaubertConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.FlaubertConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.FlaubertConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.FlaubertConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.FlaubertConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.FlaubertConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.FlaubertConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Model agnostic parameter to identify masked tokens when generating text in an MLM context.`,name:"mask_token_id"},{anchor:"transformers.FlaubertConfig.lang_id",description:`<strong>lang_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/configuration_flaubert.py#L34"}}),Ae=new rt({}),Wn=new ie({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"do_lowercase",val:" = False"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Vocabulary file.`,name:"vocab_file"},{anchor:"transformers.FlaubertTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Merges file.`,name:"merges_file"},{anchor:"transformers.FlaubertTokenizer.do_lowercase",description:`<strong>do_lowercase</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Controls lower casing.`,name:"do_lowercase"},{anchor:"transformers.FlaubertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FlaubertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.FlaubertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FlaubertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FlaubertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FlaubertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;special1&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.FlaubertTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;special0&gt;&quot;,&quot;&lt;special1&gt;&quot;,&quot;&lt;special2&gt;&quot;,&quot;&lt;special3&gt;&quot;,&quot;&lt;special4&gt;&quot;,&quot;&lt;special5&gt;&quot;,&quot;&lt;special6&gt;&quot;,&quot;&lt;special7&gt;&quot;,&quot;&lt;special8&gt;&quot;,&quot;&lt;special9&gt;&quot;]</code>) &#x2014;
List of additional special tokens.`,name:"additional_special_tokens"},{anchor:"transformers.FlaubertTokenizer.lang2id",description:`<strong>lang2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) &#x2014;
Dictionary mapping languages string identifiers to their IDs.`,name:"lang2id"},{anchor:"transformers.FlaubertTokenizer.id2lang",description:`<strong>id2lang</strong> (<code>Dict[int, str]</code>, <em>optional</em>) &#x2014;
Dictionary mapping language IDs to their string identifiers.`,name:"id2lang"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L165"}}),Qn=new ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L477",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new ie({props:{name:"convert_tokens_to_string",anchor:"transformers.FlaubertTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L471"}}),Kn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L534",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new We({props:{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[j_]},$$scope:{ctx:q}}}),Vn=new ie({props:{name:"get_special_tokens_mask",anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L505",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new rt({}),Gn=new ie({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L383"}}),Jn=new ie({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L479",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),Oo=new Je({props:{$$slots:{default:[N_]},$$scope:{ctx:q}}}),Do=new We({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[P_]},$$scope:{ctx:q}}}),Zn=new rt({}),es=new ie({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L659"}}),ss=new ie({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L689",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),Ao=new Je({props:{$$slots:{default:[O_]},$$scope:{ctx:q}}}),Lo=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[D_]},$$scope:{ctx:q}}}),Io=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[S_]},$$scope:{ctx:q}}}),as=new rt({}),rs=new ie({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L758"}}),cs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L770",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),Ho=new Je({props:{$$slots:{default:[A_]},$$scope:{ctx:q}}}),Uo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[L_]},$$scope:{ctx:q}}}),Qo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[I_]},$$scope:{ctx:q}}}),Bo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[W_]},$$scope:{ctx:q}}}),Ro=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[H_]},$$scope:{ctx:q}}}),ps=new rt({}),us=new ie({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L1220"}}),gs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L1231",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),Vo=new Je({props:{$$slots:{default:[U_]},$$scope:{ctx:q}}}),Yo=new We({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[Q_]},$$scope:{ctx:q}}}),_s=new rt({}),bs=new ie({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L862"}}),Ts=new ie({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),Go=new Je({props:{$$slots:{default:[B_]},$$scope:{ctx:q}}}),Jo=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[R_]},$$scope:{ctx:q}}}),Zo=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[K_]},$$scope:{ctx:q}}}),vs=new rt({}),Fs=new ie({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L948"}}),xs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L958",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),tn=new Je({props:{$$slots:{default:[V_]},$$scope:{ctx:q}}}),on=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[Y_]},$$scope:{ctx:q}}}),nn=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[X_]},$$scope:{ctx:q}}}),qs=new rt({}),zs=new ie({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L1098"}}),Cs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L1108",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_flaubert.FlaubertForQuestionAnsweringOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
<ul>
<li><strong>config</strong> (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a
  href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"
>from_pretrained()</a> method to load the model weights.</li>
</ul>
`,returnType:`
<p><code>transformers.models.flaubert.modeling_flaubert.FlaubertForQuestionAnsweringOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new Je({props:{$$slots:{default:[G_]},$$scope:{ctx:q}}}),rn=new We({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[J_]},$$scope:{ctx:q}}}),Ns=new rt({}),Ps=new ie({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L245"}}),dn=new Je({props:{$$slots:{default:[Z_]},$$scope:{ctx:q}}}),As=new ie({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L250",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),cn=new Je({props:{$$slots:{default:[eb]},$$scope:{ctx:q}}}),pn=new We({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[tb]},$$scope:{ctx:q}}}),Ls=new rt({}),Is=new ie({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L779"}}),hn=new Je({props:{$$slots:{default:[ob]},$$scope:{ctx:q}}}),Qs=new ie({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L808",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
<ul>
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
<p><code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Je({props:{$$slots:{default:[nb]},$$scope:{ctx:q}}}),fn=new We({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[sb]},$$scope:{ctx:q}}}),Bs=new rt({}),Rs=new ie({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L873"}}),_n=new Je({props:{$$slots:{default:[ab]},$$scope:{ctx:q}}}),Xs=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L881",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),bn=new Je({props:{$$slots:{default:[rb]},$$scope:{ctx:q}}}),yn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[ib]},$$scope:{ctx:q}}}),kn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[lb]},$$scope:{ctx:q}}}),Gs=new rt({}),Js=new ie({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L1151"}}),Tn=new Je({props:{$$slots:{default:[db]},$$scope:{ctx:q}}}),oa=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),vn=new Je({props:{$$slots:{default:[cb]},$$scope:{ctx:q}}}),Fn=new We({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[pb]},$$scope:{ctx:q}}}),na=new rt({}),sa=new ie({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L1062"}}),En=new Je({props:{$$slots:{default:[ub]},$$scope:{ctx:q}}}),la=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),Mn=new Je({props:{$$slots:{default:[hb]},$$scope:{ctx:q}}}),xn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[mb]},$$scope:{ctx:q}}}),qn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[fb]},$$scope:{ctx:q}}}),da=new rt({}),ca=new ie({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L960"}}),Cn=new Je({props:{$$slots:{default:[gb]},$$scope:{ctx:q}}}),ma=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L968",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
`}}),jn=new Je({props:{$$slots:{default:[_b]},$$scope:{ctx:q}}}),Nn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[bb]},$$scope:{ctx:q}}}),Pn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[yb]},$$scope:{ctx:q}}}),{c(){d=a("meta"),g=u(),c=a("h1"),m=a("a"),k=a("span"),w(l.$$.fragment),p=u(),C=a("span"),Te=o("FlauBERT"),ge=u(),A=a("h2"),ae=a("a"),Z=a("span"),w(M.$$.fragment),ve=u(),U=a("span"),Fe=o("Overview"),_e=u(),I=a("p"),$e=o("The FlauBERT model was proposed in the paper "),le=a("a"),V=o("FlauBERT: Unsupervised Language Model Pre-training for French"),Ee=o(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),be=u(),W=a("p"),Me=o("The abstract from the paper is the following:"),ye=u(),H=a("p"),me=a("em"),xe=o(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
Processing (NLP) tasks. Leveraging the huge amount of unlabeled texts nowadays available, they provide an efficient way
to pre-train continuous word representations that can be fine-tuned for a downstream task, along with their
contextualization at the sentence level. This has been widely demonstrated for English using contextualized
representations (Dai and Le, 2015; Peters et al., 2018; Howard and Ruder, 2018; Radford et al., 2018; Devlin et al.,
2019; Yang et al., 2019b). In this paper, we introduce and share FlauBERT, a model learned on a very large and
heterogeneous French corpus. Models of different sizes are trained using the new CNRS (French National Centre for
Scientific Research) Jean Zay supercomputer. We apply our French language models to diverse NLP tasks (text
classification, paraphrasing, natural language inference, parsing, word sense disambiguation) and show that most of the
time they outperform other pretraining approaches. Different versions of FlauBERT as well as a unified evaluation
protocol for the downstream tasks, called FLUE (French Language Understanding Evaluation), are shared to the research
community for further reproducible experiments in French NLP.`),te=u(),j=a("p"),O=o("This model was contributed by "),de=a("a"),Y=o("formiel"),qe=o(". The original code can be found "),ce=a("a"),X=o("here"),ze=o("."),ke=u(),N=a("h2"),re=a("a"),Q=a("span"),w(pe.$$.fragment),Ce=u(),B=a("span"),je=o("FlaubertConfig"),we=u(),D=a("div"),w(ue.$$.fragment),G=u(),ee=a("p"),ne=o("This is the configuration class to store the configuration of a "),P=a("a"),Ne=o("FlaubertModel"),S=o(" or a "),he=a("a"),Pe=o("TFFlaubertModel"),f=o(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),x=a("a"),Qe=o("flaubert/flaubert_base_uncased"),se=o(" architecture."),Be=u(),Oe=a("p"),z=o("Configuration objects inherit from "),Le=a("a"),Re=o("PretrainedConfig"),Ke=o(` and can be used to control the model outputs. Read the
documentation from `),Ie=a("a"),Ve=o("PretrainedConfig"),L=o(" for more information."),K=u(),De=a("h2"),Se=a("a"),R=a("span"),w(Ae.$$.fragment),Ye=u(),fe=a("span"),Xe=o("FlaubertTokenizer"),oe=u(),J=a("div"),w(Wn.$$.fragment),gd=u(),pr=a("p"),_d=o("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),bd=u(),jt=a("ul"),ur=a("li"),yd=o("Moses preprocessing and tokenization."),kd=u(),hr=a("li"),wd=o("Normalizing all inputs text."),Td=u(),Nt=a("li"),vd=o("The arguments "),mr=a("code"),Fd=o("special_tokens"),$d=o(" and the function "),fr=a("code"),Ed=o("set_special_tokens"),Md=o(`, can be used to add additional symbols (like
\u201D`),gr=a("strong"),xd=o("classify"),qd=o("\u201D) to a vocabulary."),zd=u(),Hn=a("li"),Cd=o("The argument "),_r=a("code"),jd=o("do_lowercase"),Nd=o(" controls lower casing (automatically set for pretrained vocabularies)."),Pd=u(),Un=a("p"),Od=o("This tokenizer inherits from "),wa=a("a"),Dd=o("PreTrainedTokenizer"),Sd=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ad=u(),St=a("div"),w(Qn.$$.fragment),Ld=u(),br=a("p"),Id=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),Wd=u(),Bn=a("ul"),Ta=a("li"),Hd=o("single sequence: "),yr=a("code"),Ud=o("<s> X </s>"),Qd=u(),va=a("li"),Bd=o("pair of sequences: "),kr=a("code"),Rd=o("<s> A </s> B </s>"),Kd=u(),Co=a("div"),w(Rn.$$.fragment),Vd=u(),wr=a("p"),Yd=o("Converts a sequence of tokens (string) in a single string."),Xd=u(),kt=a("div"),w(Kn.$$.fragment),Gd=u(),Tr=a("p"),Jd=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),Zd=u(),w(jo.$$.fragment),ec=u(),Xt=a("p"),tc=o("If "),vr=a("code"),oc=o("token_ids_1"),nc=o(" is "),Fr=a("code"),sc=o("None"),ac=o(", this method only returns the first portion of the mask (0s)."),rc=u(),No=a("div"),w(Vn.$$.fragment),ic=u(),Yn=a("p"),lc=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$r=a("code"),dc=o("prepare_for_model"),cc=o(" method."),el=u(),Gt=a("h2"),Po=a("a"),Er=a("span"),w(Xn.$$.fragment),pc=u(),Mr=a("span"),uc=o("FlaubertModel"),tl=u(),Jt=a("div"),w(Gn.$$.fragment),hc=u(),wt=a("div"),w(Jn.$$.fragment),mc=u(),Zt=a("p"),fc=o("The "),Fa=a("a"),gc=o("FlaubertModel"),_c=o(" forward method, overrides the "),xr=a("code"),bc=o("__call__"),yc=o(" special method."),kc=u(),w(Oo.$$.fragment),wc=u(),w(Do.$$.fragment),ol=u(),eo=a("h2"),So=a("a"),qr=a("span"),w(Zn.$$.fragment),Tc=u(),zr=a("span"),vc=o("FlaubertWithLMHeadModel"),nl=u(),it=a("div"),w(es.$$.fragment),Fc=u(),Cr=a("p"),$c=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ec=u(),ts=a("p"),Mc=o("This model inherits from "),$a=a("a"),xc=o("PreTrainedModel"),qc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=u(),os=a("p"),Cc=o("This model is also a PyTorch "),ns=a("a"),jc=o("torch.nn.Module"),Nc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pc=u(),ut=a("div"),w(ss.$$.fragment),Oc=u(),to=a("p"),Dc=o("The "),Ea=a("a"),Sc=o("FlaubertWithLMHeadModel"),Ac=o(" forward method, overrides the "),jr=a("code"),Lc=o("__call__"),Ic=o(" special method."),Wc=u(),w(Ao.$$.fragment),Hc=u(),w(Lo.$$.fragment),Uc=u(),w(Io.$$.fragment),sl=u(),oo=a("h2"),Wo=a("a"),Nr=a("span"),w(as.$$.fragment),Qc=u(),Pr=a("span"),Bc=o("FlaubertForSequenceClassification"),al=u(),lt=a("div"),w(rs.$$.fragment),Rc=u(),Or=a("p"),Kc=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Vc=u(),is=a("p"),Yc=o("This model inherits from "),Ma=a("a"),Xc=o("PreTrainedModel"),Gc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc=u(),ls=a("p"),Zc=o("This model is also a PyTorch "),ds=a("a"),ep=o("torch.nn.Module"),tp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op=u(),Ze=a("div"),w(cs.$$.fragment),np=u(),no=a("p"),sp=o("The "),xa=a("a"),ap=o("FlaubertForSequenceClassification"),rp=o(" forward method, overrides the "),Dr=a("code"),ip=o("__call__"),lp=o(" special method."),dp=u(),w(Ho.$$.fragment),cp=u(),w(Uo.$$.fragment),pp=u(),w(Qo.$$.fragment),up=u(),w(Bo.$$.fragment),hp=u(),w(Ro.$$.fragment),rl=u(),so=a("h2"),Ko=a("a"),Sr=a("span"),w(ps.$$.fragment),mp=u(),Ar=a("span"),fp=o("FlaubertForMultipleChoice"),il=u(),dt=a("div"),w(us.$$.fragment),gp=u(),Lr=a("p"),_p=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bp=u(),hs=a("p"),yp=o("This model inherits from "),qa=a("a"),kp=o("PreTrainedModel"),wp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp=u(),ms=a("p"),vp=o("This model is also a PyTorch "),fs=a("a"),Fp=o("torch.nn.Module"),$p=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ep=u(),Tt=a("div"),w(gs.$$.fragment),Mp=u(),ao=a("p"),xp=o("The "),za=a("a"),qp=o("FlaubertForMultipleChoice"),zp=o(" forward method, overrides the "),Ir=a("code"),Cp=o("__call__"),jp=o(" special method."),Np=u(),w(Vo.$$.fragment),Pp=u(),w(Yo.$$.fragment),ll=u(),ro=a("h2"),Xo=a("a"),Wr=a("span"),w(_s.$$.fragment),Op=u(),Hr=a("span"),Dp=o("FlaubertForTokenClassification"),dl=u(),ct=a("div"),w(bs.$$.fragment),Sp=u(),Ur=a("p"),Ap=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lp=u(),ys=a("p"),Ip=o("This model inherits from "),Ca=a("a"),Wp=o("PreTrainedModel"),Hp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up=u(),ks=a("p"),Qp=o("This model is also a PyTorch "),ws=a("a"),Bp=o("torch.nn.Module"),Rp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kp=u(),ht=a("div"),w(Ts.$$.fragment),Vp=u(),io=a("p"),Yp=o("The "),ja=a("a"),Xp=o("FlaubertForTokenClassification"),Gp=o(" forward method, overrides the "),Qr=a("code"),Jp=o("__call__"),Zp=o(" special method."),eu=u(),w(Go.$$.fragment),tu=u(),w(Jo.$$.fragment),ou=u(),w(Zo.$$.fragment),cl=u(),lo=a("h2"),en=a("a"),Br=a("span"),w(vs.$$.fragment),nu=u(),Rr=a("span"),su=o("FlaubertForQuestionAnsweringSimple"),pl=u(),pt=a("div"),w(Fs.$$.fragment),au=u(),co=a("p"),ru=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kr=a("code"),iu=o("span start logits"),lu=o(" and "),Vr=a("code"),du=o("span end logits"),cu=o(")."),pu=u(),$s=a("p"),uu=o("This model inherits from "),Na=a("a"),hu=o("PreTrainedModel"),mu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=u(),Es=a("p"),gu=o("This model is also a PyTorch "),Ms=a("a"),_u=o("torch.nn.Module"),bu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yu=u(),mt=a("div"),w(xs.$$.fragment),ku=u(),po=a("p"),wu=o("The "),Pa=a("a"),Tu=o("FlaubertForQuestionAnsweringSimple"),vu=o(" forward method, overrides the "),Yr=a("code"),Fu=o("__call__"),$u=o(" special method."),Eu=u(),w(tn.$$.fragment),Mu=u(),w(on.$$.fragment),xu=u(),w(nn.$$.fragment),ul=u(),uo=a("h2"),sn=a("a"),Xr=a("span"),w(qs.$$.fragment),qu=u(),Gr=a("span"),zu=o("FlaubertForQuestionAnswering"),hl=u(),ho=a("div"),w(zs.$$.fragment),Cu=u(),ft=a("div"),w(Cs.$$.fragment),ju=u(),mo=a("p"),Nu=o("The "),Oa=a("a"),Pu=o("FlaubertForQuestionAnswering"),Ou=o(" forward method, overrides the "),Jr=a("code"),Du=o("__call__"),Su=o(" special method."),Au=u(),w(an.$$.fragment),Lu=u(),js=a("p"),Iu=o("Base class for outputs of question answering models using a "),Zr=a("code"),Wu=o("SquadHead"),Hu=o("."),Uu=u(),w(rn.$$.fragment),ml=u(),fo=a("h2"),ln=a("a"),ei=a("span"),w(Ns.$$.fragment),Qu=u(),ti=a("span"),Bu=o("TFFlaubertModel"),fl=u(),et=a("div"),w(Ps.$$.fragment),Ru=u(),oi=a("p"),Ku=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Vu=u(),Os=a("p"),Yu=o("This model inherits from "),Da=a("a"),Xu=o("TFPreTrainedModel"),Gu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju=u(),Ds=a("p"),Zu=o("This model is also a "),Ss=a("a"),eh=o("tf.keras.Model"),th=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oh=u(),w(dn.$$.fragment),nh=u(),vt=a("div"),w(As.$$.fragment),sh=u(),go=a("p"),ah=o("The "),Sa=a("a"),rh=o("TFFlaubertModel"),ih=o(" forward method, overrides the "),ni=a("code"),lh=o("__call__"),dh=o(" special method."),ch=u(),w(cn.$$.fragment),ph=u(),w(pn.$$.fragment),gl=u(),_o=a("h2"),un=a("a"),si=a("span"),w(Ls.$$.fragment),uh=u(),ai=a("span"),hh=o("TFFlaubertWithLMHeadModel"),_l=u(),tt=a("div"),w(Is.$$.fragment),mh=u(),ri=a("p"),fh=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),gh=u(),Ws=a("p"),_h=o("This model inherits from "),Aa=a("a"),bh=o("TFPreTrainedModel"),yh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh=u(),Hs=a("p"),wh=o("This model is also a "),Us=a("a"),Th=o("tf.keras.Model"),vh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fh=u(),w(hn.$$.fragment),$h=u(),Ft=a("div"),w(Qs.$$.fragment),Eh=u(),bo=a("p"),Mh=o("The "),La=a("a"),xh=o("TFFlaubertWithLMHeadModel"),qh=o(" forward method, overrides the "),ii=a("code"),zh=o("__call__"),Ch=o(" special method."),jh=u(),w(mn.$$.fragment),Nh=u(),w(fn.$$.fragment),bl=u(),yo=a("h2"),gn=a("a"),li=a("span"),w(Bs.$$.fragment),Ph=u(),di=a("span"),Oh=o("TFFlaubertForSequenceClassification"),yl=u(),ot=a("div"),w(Rs.$$.fragment),Dh=u(),ci=a("p"),Sh=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Ah=u(),Ks=a("p"),Lh=o("This model inherits from "),Ia=a("a"),Ih=o("TFPreTrainedModel"),Wh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=u(),Vs=a("p"),Uh=o("This model is also a "),Ys=a("a"),Qh=o("tf.keras.Model"),Bh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh=u(),w(_n.$$.fragment),Kh=u(),gt=a("div"),w(Xs.$$.fragment),Vh=u(),ko=a("p"),Yh=o("The "),Wa=a("a"),Xh=o("TFFlaubertForSequenceClassification"),Gh=o(" forward method, overrides the "),pi=a("code"),Jh=o("__call__"),Zh=o(" special method."),em=u(),w(bn.$$.fragment),tm=u(),w(yn.$$.fragment),om=u(),w(kn.$$.fragment),kl=u(),wo=a("h2"),wn=a("a"),ui=a("span"),w(Gs.$$.fragment),nm=u(),hi=a("span"),sm=o("TFFlaubertForMultipleChoice"),wl=u(),nt=a("div"),w(Js.$$.fragment),am=u(),mi=a("p"),rm=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),im=u(),Zs=a("p"),lm=o("This model inherits from "),Ha=a("a"),dm=o("TFPreTrainedModel"),cm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pm=u(),ea=a("p"),um=o("This model is also a "),ta=a("a"),hm=o("tf.keras.Model"),mm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fm=u(),w(Tn.$$.fragment),gm=u(),$t=a("div"),w(oa.$$.fragment),_m=u(),To=a("p"),bm=o("The "),Ua=a("a"),ym=o("TFFlaubertForMultipleChoice"),km=o(" forward method, overrides the "),fi=a("code"),wm=o("__call__"),Tm=o(" special method."),vm=u(),w(vn.$$.fragment),Fm=u(),w(Fn.$$.fragment),Tl=u(),vo=a("h2"),$n=a("a"),gi=a("span"),w(na.$$.fragment),$m=u(),_i=a("span"),Em=o("TFFlaubertForTokenClassification"),vl=u(),st=a("div"),w(sa.$$.fragment),Mm=u(),bi=a("p"),xm=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qm=u(),aa=a("p"),zm=o("This model inherits from "),Qa=a("a"),Cm=o("TFPreTrainedModel"),jm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nm=u(),ra=a("p"),Pm=o("This model is also a "),ia=a("a"),Om=o("tf.keras.Model"),Dm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sm=u(),w(En.$$.fragment),Am=u(),_t=a("div"),w(la.$$.fragment),Lm=u(),Fo=a("p"),Im=o("The "),Ba=a("a"),Wm=o("TFFlaubertForTokenClassification"),Hm=o(" forward method, overrides the "),yi=a("code"),Um=o("__call__"),Qm=o(" special method."),Bm=u(),w(Mn.$$.fragment),Rm=u(),w(xn.$$.fragment),Km=u(),w(qn.$$.fragment),Fl=u(),$o=a("h2"),zn=a("a"),ki=a("span"),w(da.$$.fragment),Vm=u(),wi=a("span"),Ym=o("TFFlaubertForQuestionAnsweringSimple"),$l=u(),at=a("div"),w(ca.$$.fragment),Xm=u(),Eo=a("p"),Gm=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ti=a("code"),Jm=o("span start logits"),Zm=o(" and "),vi=a("code"),ef=o("span end logits"),tf=o(")."),of=u(),pa=a("p"),nf=o("This model inherits from "),Ra=a("a"),sf=o("TFPreTrainedModel"),af=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=u(),ua=a("p"),lf=o("This model is also a "),ha=a("a"),df=o("tf.keras.Model"),cf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf=u(),w(Cn.$$.fragment),uf=u(),bt=a("div"),w(ma.$$.fragment),hf=u(),Mo=a("p"),mf=o("The "),Ka=a("a"),ff=o("TFFlaubertForQuestionAnsweringSimple"),gf=o(" forward method, overrides the "),Fi=a("code"),_f=o("__call__"),bf=o(" special method."),yf=u(),w(jn.$$.fragment),kf=u(),w(Nn.$$.fragment),wf=u(),w(Pn.$$.fragment),this.h()},l(s){const y=z_('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(t),g=h(s),c=r(s,"H1",{class:!0});var fa=i(c);m=r(fa,"A",{id:!0,class:!0,href:!0});var $i=i(m);k=r($i,"SPAN",{});var Ei=i(k);T(l.$$.fragment,Ei),Ei.forEach(t),$i.forEach(t),p=h(fa),C=r(fa,"SPAN",{});var Mi=i(C);Te=n(Mi,"FlauBERT"),Mi.forEach(t),fa.forEach(t),ge=h(s),A=r(s,"H2",{class:!0});var ga=i(A);ae=r(ga,"A",{id:!0,class:!0,href:!0});var xi=i(ae);Z=r(xi,"SPAN",{});var qi=i(Z);T(M.$$.fragment,qi),qi.forEach(t),xi.forEach(t),ve=h(ga),U=r(ga,"SPAN",{});var zi=i(U);Fe=n(zi,"Overview"),zi.forEach(t),ga.forEach(t),_e=h(s),I=r(s,"P",{});var _a=i(I);$e=n(_a,"The FlauBERT model was proposed in the paper "),le=r(_a,"A",{href:!0,rel:!0});var Ci=i(le);V=n(Ci,"FlauBERT: Unsupervised Language Model Pre-training for French"),Ci.forEach(t),Ee=n(_a,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),_a.forEach(t),be=h(s),W=r(s,"P",{});var ji=i(W);Me=n(ji,"The abstract from the paper is the following:"),ji.forEach(t),ye=h(s),H=r(s,"P",{});var Ni=i(H);me=r(Ni,"EM",{});var Pi=i(me);xe=n(Pi,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
Processing (NLP) tasks. Leveraging the huge amount of unlabeled texts nowadays available, they provide an efficient way
to pre-train continuous word representations that can be fine-tuned for a downstream task, along with their
contextualization at the sentence level. This has been widely demonstrated for English using contextualized
representations (Dai and Le, 2015; Peters et al., 2018; Howard and Ruder, 2018; Radford et al., 2018; Devlin et al.,
2019; Yang et al., 2019b). In this paper, we introduce and share FlauBERT, a model learned on a very large and
heterogeneous French corpus. Models of different sizes are trained using the new CNRS (French National Centre for
Scientific Research) Jean Zay supercomputer. We apply our French language models to diverse NLP tasks (text
classification, paraphrasing, natural language inference, parsing, word sense disambiguation) and show that most of the
time they outperform other pretraining approaches. Different versions of FlauBERT as well as a unified evaluation
protocol for the downstream tasks, called FLUE (French Language Understanding Evaluation), are shared to the research
community for further reproducible experiments in French NLP.`),Pi.forEach(t),Ni.forEach(t),te=h(s),j=r(s,"P",{});var xo=i(j);O=n(xo,"This model was contributed by "),de=r(xo,"A",{href:!0,rel:!0});var Oi=i(de);Y=n(Oi,"formiel"),Oi.forEach(t),qe=n(xo,". The original code can be found "),ce=r(xo,"A",{href:!0,rel:!0});var Di=i(ce);X=n(Di,"here"),Di.forEach(t),ze=n(xo,"."),xo.forEach(t),ke=h(s),N=r(s,"H2",{class:!0});var ba=i(N);re=r(ba,"A",{id:!0,class:!0,href:!0});var Si=i(re);Q=r(Si,"SPAN",{});var Ai=i(Q);T(pe.$$.fragment,Ai),Ai.forEach(t),Si.forEach(t),Ce=h(ba),B=r(ba,"SPAN",{});var Li=i(B);je=n(Li,"FlaubertConfig"),Li.forEach(t),ba.forEach(t),we=h(s),D=r(s,"DIV",{class:!0});var qo=i(D);T(ue.$$.fragment,qo),G=h(qo),ee=r(qo,"P",{});var Pt=i(ee);ne=n(Pt,"This is the configuration class to store the configuration of a "),P=r(Pt,"A",{href:!0});var Ii=i(P);Ne=n(Ii,"FlaubertModel"),Ii.forEach(t),S=n(Pt," or a "),he=r(Pt,"A",{href:!0});var Wi=i(he);Pe=n(Wi,"TFFlaubertModel"),Wi.forEach(t),f=n(Pt,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),x=r(Pt,"A",{href:!0,rel:!0});var Hi=i(x);Qe=n(Hi,"flaubert/flaubert_base_uncased"),Hi.forEach(t),se=n(Pt," architecture."),Pt.forEach(t),Be=h(qo),Oe=r(qo,"P",{});var zo=i(Oe);z=n(zo,"Configuration objects inherit from "),Le=r(zo,"A",{href:!0});var Ui=i(Le);Re=n(Ui,"PretrainedConfig"),Ui.forEach(t),Ke=n(zo,` and can be used to control the model outputs. Read the
documentation from `),Ie=r(zo,"A",{href:!0});var Qi=i(Ie);Ve=n(Qi,"PretrainedConfig"),Qi.forEach(t),L=n(zo," for more information."),zo.forEach(t),qo.forEach(t),K=h(s),De=r(s,"H2",{class:!0});var ya=i(De);Se=r(ya,"A",{id:!0,class:!0,href:!0});var Bi=i(Se);R=r(Bi,"SPAN",{});var Ri=i(R);T(Ae.$$.fragment,Ri),Ri.forEach(t),Bi.forEach(t),Ye=h(ya),fe=r(ya,"SPAN",{});var Ki=i(fe);Xe=n(Ki,"FlaubertTokenizer"),Ki.forEach(t),ya.forEach(t),oe=h(s),J=r(s,"DIV",{class:!0});var Ge=i(J);T(Wn.$$.fragment,Ge),gd=h(Ge),pr=r(Ge,"P",{});var Vi=i(pr);_d=n(Vi,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Vi.forEach(t),bd=h(Ge),jt=r(Ge,"UL",{});var Ot=i(jt);ur=r(Ot,"LI",{});var Yi=i(ur);yd=n(Yi,"Moses preprocessing and tokenization."),Yi.forEach(t),kd=h(Ot),hr=r(Ot,"LI",{});var Xi=i(hr);wd=n(Xi,"Normalizing all inputs text."),Xi.forEach(t),Td=h(Ot),Nt=r(Ot,"LI",{});var Dt=i(Nt);vd=n(Dt,"The arguments "),mr=r(Dt,"CODE",{});var Gi=i(mr);Fd=n(Gi,"special_tokens"),Gi.forEach(t),$d=n(Dt," and the function "),fr=r(Dt,"CODE",{});var Ji=i(fr);Ed=n(Ji,"set_special_tokens"),Ji.forEach(t),Md=n(Dt,`, can be used to add additional symbols (like
\u201D`),gr=r(Dt,"STRONG",{});var Zi=i(gr);xd=n(Zi,"classify"),Zi.forEach(t),qd=n(Dt,"\u201D) to a vocabulary."),Dt.forEach(t),zd=h(Ot),Hn=r(Ot,"LI",{});var ka=i(Hn);Cd=n(ka,"The argument "),_r=r(ka,"CODE",{});var Ff=i(_r);jd=n(Ff,"do_lowercase"),Ff.forEach(t),Nd=n(ka," controls lower casing (automatically set for pretrained vocabularies)."),ka.forEach(t),Ot.forEach(t),Pd=h(Ge),Un=r(Ge,"P",{});var Ml=i(Un);Od=n(Ml,"This tokenizer inherits from "),wa=r(Ml,"A",{href:!0});var $f=i(wa);Dd=n($f,"PreTrainedTokenizer"),$f.forEach(t),Sd=n(Ml,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ml.forEach(t),Ad=h(Ge),St=r(Ge,"DIV",{class:!0});var Va=i(St);T(Qn.$$.fragment,Va),Ld=h(Va),br=r(Va,"P",{});var Ef=i(br);Id=n(Ef,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),Ef.forEach(t),Wd=h(Va),Bn=r(Va,"UL",{});var xl=i(Bn);Ta=r(xl,"LI",{});var Tf=i(Ta);Hd=n(Tf,"single sequence: "),yr=r(Tf,"CODE",{});var Mf=i(yr);Ud=n(Mf,"<s> X </s>"),Mf.forEach(t),Tf.forEach(t),Qd=h(xl),va=r(xl,"LI",{});var vf=i(va);Bd=n(vf,"pair of sequences: "),kr=r(vf,"CODE",{});var xf=i(kr);Rd=n(xf,"<s> A </s> B </s>"),xf.forEach(t),vf.forEach(t),xl.forEach(t),Va.forEach(t),Kd=h(Ge),Co=r(Ge,"DIV",{class:!0});var ql=i(Co);T(Rn.$$.fragment,ql),Vd=h(ql),wr=r(ql,"P",{});var qf=i(wr);Yd=n(qf,"Converts a sequence of tokens (string) in a single string."),qf.forEach(t),ql.forEach(t),Xd=h(Ge),kt=r(Ge,"DIV",{class:!0});var On=i(kt);T(Kn.$$.fragment,On),Gd=h(On),Tr=r(On,"P",{});var zf=i(Tr);Jd=n(zf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),zf.forEach(t),Zd=h(On),T(jo.$$.fragment,On),ec=h(On),Xt=r(On,"P",{});var Ya=i(Xt);tc=n(Ya,"If "),vr=r(Ya,"CODE",{});var Cf=i(vr);oc=n(Cf,"token_ids_1"),Cf.forEach(t),nc=n(Ya," is "),Fr=r(Ya,"CODE",{});var jf=i(Fr);sc=n(jf,"None"),jf.forEach(t),ac=n(Ya,", this method only returns the first portion of the mask (0s)."),Ya.forEach(t),On.forEach(t),rc=h(Ge),No=r(Ge,"DIV",{class:!0});var zl=i(No);T(Vn.$$.fragment,zl),ic=h(zl),Yn=r(zl,"P",{});var Cl=i(Yn);lc=n(Cl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$r=r(Cl,"CODE",{});var Nf=i($r);dc=n(Nf,"prepare_for_model"),Nf.forEach(t),cc=n(Cl," method."),Cl.forEach(t),zl.forEach(t),Ge.forEach(t),el=h(s),Gt=r(s,"H2",{class:!0});var jl=i(Gt);Po=r(jl,"A",{id:!0,class:!0,href:!0});var Pf=i(Po);Er=r(Pf,"SPAN",{});var Of=i(Er);T(Xn.$$.fragment,Of),Of.forEach(t),Pf.forEach(t),pc=h(jl),Mr=r(jl,"SPAN",{});var Df=i(Mr);uc=n(Df,"FlaubertModel"),Df.forEach(t),jl.forEach(t),tl=h(s),Jt=r(s,"DIV",{class:!0});var Nl=i(Jt);T(Gn.$$.fragment,Nl),hc=h(Nl),wt=r(Nl,"DIV",{class:!0});var Dn=i(wt);T(Jn.$$.fragment,Dn),mc=h(Dn),Zt=r(Dn,"P",{});var Xa=i(Zt);fc=n(Xa,"The "),Fa=r(Xa,"A",{href:!0});var Sf=i(Fa);gc=n(Sf,"FlaubertModel"),Sf.forEach(t),_c=n(Xa," forward method, overrides the "),xr=r(Xa,"CODE",{});var Af=i(xr);bc=n(Af,"__call__"),Af.forEach(t),yc=n(Xa," special method."),Xa.forEach(t),kc=h(Dn),T(Oo.$$.fragment,Dn),wc=h(Dn),T(Do.$$.fragment,Dn),Dn.forEach(t),Nl.forEach(t),ol=h(s),eo=r(s,"H2",{class:!0});var Pl=i(eo);So=r(Pl,"A",{id:!0,class:!0,href:!0});var Lf=i(So);qr=r(Lf,"SPAN",{});var If=i(qr);T(Zn.$$.fragment,If),If.forEach(t),Lf.forEach(t),Tc=h(Pl),zr=r(Pl,"SPAN",{});var Wf=i(zr);vc=n(Wf,"FlaubertWithLMHeadModel"),Wf.forEach(t),Pl.forEach(t),nl=h(s),it=r(s,"DIV",{class:!0});var At=i(it);T(es.$$.fragment,At),Fc=h(At),Cr=r(At,"P",{});var Hf=i(Cr);$c=n(Hf,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Hf.forEach(t),Ec=h(At),ts=r(At,"P",{});var Ol=i(ts);Mc=n(Ol,"This model inherits from "),$a=r(Ol,"A",{href:!0});var Uf=i($a);xc=n(Uf,"PreTrainedModel"),Uf.forEach(t),qc=n(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),zc=h(At),os=r(At,"P",{});var Dl=i(os);Cc=n(Dl,"This model is also a PyTorch "),ns=r(Dl,"A",{href:!0,rel:!0});var Qf=i(ns);jc=n(Qf,"torch.nn.Module"),Qf.forEach(t),Nc=n(Dl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dl.forEach(t),Pc=h(At),ut=r(At,"DIV",{class:!0});var Lt=i(ut);T(ss.$$.fragment,Lt),Oc=h(Lt),to=r(Lt,"P",{});var Ga=i(to);Dc=n(Ga,"The "),Ea=r(Ga,"A",{href:!0});var Bf=i(Ea);Sc=n(Bf,"FlaubertWithLMHeadModel"),Bf.forEach(t),Ac=n(Ga," forward method, overrides the "),jr=r(Ga,"CODE",{});var Rf=i(jr);Lc=n(Rf,"__call__"),Rf.forEach(t),Ic=n(Ga," special method."),Ga.forEach(t),Wc=h(Lt),T(Ao.$$.fragment,Lt),Hc=h(Lt),T(Lo.$$.fragment,Lt),Uc=h(Lt),T(Io.$$.fragment,Lt),Lt.forEach(t),At.forEach(t),sl=h(s),oo=r(s,"H2",{class:!0});var Sl=i(oo);Wo=r(Sl,"A",{id:!0,class:!0,href:!0});var Kf=i(Wo);Nr=r(Kf,"SPAN",{});var Vf=i(Nr);T(as.$$.fragment,Vf),Vf.forEach(t),Kf.forEach(t),Qc=h(Sl),Pr=r(Sl,"SPAN",{});var Yf=i(Pr);Bc=n(Yf,"FlaubertForSequenceClassification"),Yf.forEach(t),Sl.forEach(t),al=h(s),lt=r(s,"DIV",{class:!0});var It=i(lt);T(rs.$$.fragment,It),Rc=h(It),Or=r(It,"P",{});var Xf=i(Or);Kc=n(Xf,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Xf.forEach(t),Vc=h(It),is=r(It,"P",{});var Al=i(is);Yc=n(Al,"This model inherits from "),Ma=r(Al,"A",{href:!0});var Gf=i(Ma);Xc=n(Gf,"PreTrainedModel"),Gf.forEach(t),Gc=n(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),Jc=h(It),ls=r(It,"P",{});var Ll=i(ls);Zc=n(Ll,"This model is also a PyTorch "),ds=r(Ll,"A",{href:!0,rel:!0});var Jf=i(ds);ep=n(Jf,"torch.nn.Module"),Jf.forEach(t),tp=n(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),op=h(It),Ze=r(It,"DIV",{class:!0});var yt=i(Ze);T(cs.$$.fragment,yt),np=h(yt),no=r(yt,"P",{});var Ja=i(no);sp=n(Ja,"The "),xa=r(Ja,"A",{href:!0});var Zf=i(xa);ap=n(Zf,"FlaubertForSequenceClassification"),Zf.forEach(t),rp=n(Ja," forward method, overrides the "),Dr=r(Ja,"CODE",{});var eg=i(Dr);ip=n(eg,"__call__"),eg.forEach(t),lp=n(Ja," special method."),Ja.forEach(t),dp=h(yt),T(Ho.$$.fragment,yt),cp=h(yt),T(Uo.$$.fragment,yt),pp=h(yt),T(Qo.$$.fragment,yt),up=h(yt),T(Bo.$$.fragment,yt),hp=h(yt),T(Ro.$$.fragment,yt),yt.forEach(t),It.forEach(t),rl=h(s),so=r(s,"H2",{class:!0});var Il=i(so);Ko=r(Il,"A",{id:!0,class:!0,href:!0});var tg=i(Ko);Sr=r(tg,"SPAN",{});var og=i(Sr);T(ps.$$.fragment,og),og.forEach(t),tg.forEach(t),mp=h(Il),Ar=r(Il,"SPAN",{});var ng=i(Ar);fp=n(ng,"FlaubertForMultipleChoice"),ng.forEach(t),Il.forEach(t),il=h(s),dt=r(s,"DIV",{class:!0});var Wt=i(dt);T(us.$$.fragment,Wt),gp=h(Wt),Lr=r(Wt,"P",{});var sg=i(Lr);_p=n(sg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sg.forEach(t),bp=h(Wt),hs=r(Wt,"P",{});var Wl=i(hs);yp=n(Wl,"This model inherits from "),qa=r(Wl,"A",{href:!0});var ag=i(qa);kp=n(ag,"PreTrainedModel"),ag.forEach(t),wp=n(Wl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wl.forEach(t),Tp=h(Wt),ms=r(Wt,"P",{});var Hl=i(ms);vp=n(Hl,"This model is also a PyTorch "),fs=r(Hl,"A",{href:!0,rel:!0});var rg=i(fs);Fp=n(rg,"torch.nn.Module"),rg.forEach(t),$p=n(Hl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hl.forEach(t),Ep=h(Wt),Tt=r(Wt,"DIV",{class:!0});var Sn=i(Tt);T(gs.$$.fragment,Sn),Mp=h(Sn),ao=r(Sn,"P",{});var Za=i(ao);xp=n(Za,"The "),za=r(Za,"A",{href:!0});var ig=i(za);qp=n(ig,"FlaubertForMultipleChoice"),ig.forEach(t),zp=n(Za," forward method, overrides the "),Ir=r(Za,"CODE",{});var lg=i(Ir);Cp=n(lg,"__call__"),lg.forEach(t),jp=n(Za," special method."),Za.forEach(t),Np=h(Sn),T(Vo.$$.fragment,Sn),Pp=h(Sn),T(Yo.$$.fragment,Sn),Sn.forEach(t),Wt.forEach(t),ll=h(s),ro=r(s,"H2",{class:!0});var Ul=i(ro);Xo=r(Ul,"A",{id:!0,class:!0,href:!0});var dg=i(Xo);Wr=r(dg,"SPAN",{});var cg=i(Wr);T(_s.$$.fragment,cg),cg.forEach(t),dg.forEach(t),Op=h(Ul),Hr=r(Ul,"SPAN",{});var pg=i(Hr);Dp=n(pg,"FlaubertForTokenClassification"),pg.forEach(t),Ul.forEach(t),dl=h(s),ct=r(s,"DIV",{class:!0});var Ht=i(ct);T(bs.$$.fragment,Ht),Sp=h(Ht),Ur=r(Ht,"P",{});var ug=i(Ur);Ap=n(ug,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ug.forEach(t),Lp=h(Ht),ys=r(Ht,"P",{});var Ql=i(ys);Ip=n(Ql,"This model inherits from "),Ca=r(Ql,"A",{href:!0});var hg=i(Ca);Wp=n(hg,"PreTrainedModel"),hg.forEach(t),Hp=n(Ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql.forEach(t),Up=h(Ht),ks=r(Ht,"P",{});var Bl=i(ks);Qp=n(Bl,"This model is also a PyTorch "),ws=r(Bl,"A",{href:!0,rel:!0});var mg=i(ws);Bp=n(mg,"torch.nn.Module"),mg.forEach(t),Rp=n(Bl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bl.forEach(t),Kp=h(Ht),ht=r(Ht,"DIV",{class:!0});var Ut=i(ht);T(Ts.$$.fragment,Ut),Vp=h(Ut),io=r(Ut,"P",{});var er=i(io);Yp=n(er,"The "),ja=r(er,"A",{href:!0});var fg=i(ja);Xp=n(fg,"FlaubertForTokenClassification"),fg.forEach(t),Gp=n(er," forward method, overrides the "),Qr=r(er,"CODE",{});var gg=i(Qr);Jp=n(gg,"__call__"),gg.forEach(t),Zp=n(er," special method."),er.forEach(t),eu=h(Ut),T(Go.$$.fragment,Ut),tu=h(Ut),T(Jo.$$.fragment,Ut),ou=h(Ut),T(Zo.$$.fragment,Ut),Ut.forEach(t),Ht.forEach(t),cl=h(s),lo=r(s,"H2",{class:!0});var Rl=i(lo);en=r(Rl,"A",{id:!0,class:!0,href:!0});var _g=i(en);Br=r(_g,"SPAN",{});var bg=i(Br);T(vs.$$.fragment,bg),bg.forEach(t),_g.forEach(t),nu=h(Rl),Rr=r(Rl,"SPAN",{});var yg=i(Rr);su=n(yg,"FlaubertForQuestionAnsweringSimple"),yg.forEach(t),Rl.forEach(t),pl=h(s),pt=r(s,"DIV",{class:!0});var Qt=i(pt);T(Fs.$$.fragment,Qt),au=h(Qt),co=r(Qt,"P",{});var tr=i(co);ru=n(tr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kr=r(tr,"CODE",{});var kg=i(Kr);iu=n(kg,"span start logits"),kg.forEach(t),lu=n(tr," and "),Vr=r(tr,"CODE",{});var wg=i(Vr);du=n(wg,"span end logits"),wg.forEach(t),cu=n(tr,")."),tr.forEach(t),pu=h(Qt),$s=r(Qt,"P",{});var Kl=i($s);uu=n(Kl,"This model inherits from "),Na=r(Kl,"A",{href:!0});var Tg=i(Na);hu=n(Tg,"PreTrainedModel"),Tg.forEach(t),mu=n(Kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl.forEach(t),fu=h(Qt),Es=r(Qt,"P",{});var Vl=i(Es);gu=n(Vl,"This model is also a PyTorch "),Ms=r(Vl,"A",{href:!0,rel:!0});var vg=i(Ms);_u=n(vg,"torch.nn.Module"),vg.forEach(t),bu=n(Vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vl.forEach(t),yu=h(Qt),mt=r(Qt,"DIV",{class:!0});var Bt=i(mt);T(xs.$$.fragment,Bt),ku=h(Bt),po=r(Bt,"P",{});var or=i(po);wu=n(or,"The "),Pa=r(or,"A",{href:!0});var Fg=i(Pa);Tu=n(Fg,"FlaubertForQuestionAnsweringSimple"),Fg.forEach(t),vu=n(or," forward method, overrides the "),Yr=r(or,"CODE",{});var $g=i(Yr);Fu=n($g,"__call__"),$g.forEach(t),$u=n(or," special method."),or.forEach(t),Eu=h(Bt),T(tn.$$.fragment,Bt),Mu=h(Bt),T(on.$$.fragment,Bt),xu=h(Bt),T(nn.$$.fragment,Bt),Bt.forEach(t),Qt.forEach(t),ul=h(s),uo=r(s,"H2",{class:!0});var Yl=i(uo);sn=r(Yl,"A",{id:!0,class:!0,href:!0});var Eg=i(sn);Xr=r(Eg,"SPAN",{});var Mg=i(Xr);T(qs.$$.fragment,Mg),Mg.forEach(t),Eg.forEach(t),qu=h(Yl),Gr=r(Yl,"SPAN",{});var xg=i(Gr);zu=n(xg,"FlaubertForQuestionAnswering"),xg.forEach(t),Yl.forEach(t),hl=h(s),ho=r(s,"DIV",{class:!0});var Xl=i(ho);T(zs.$$.fragment,Xl),Cu=h(Xl),ft=r(Xl,"DIV",{class:!0});var Rt=i(ft);T(Cs.$$.fragment,Rt),ju=h(Rt),mo=r(Rt,"P",{});var nr=i(mo);Nu=n(nr,"The "),Oa=r(nr,"A",{href:!0});var qg=i(Oa);Pu=n(qg,"FlaubertForQuestionAnswering"),qg.forEach(t),Ou=n(nr," forward method, overrides the "),Jr=r(nr,"CODE",{});var zg=i(Jr);Du=n(zg,"__call__"),zg.forEach(t),Su=n(nr," special method."),nr.forEach(t),Au=h(Rt),T(an.$$.fragment,Rt),Lu=h(Rt),js=r(Rt,"P",{});var Gl=i(js);Iu=n(Gl,"Base class for outputs of question answering models using a "),Zr=r(Gl,"CODE",{});var Cg=i(Zr);Wu=n(Cg,"SquadHead"),Cg.forEach(t),Hu=n(Gl,"."),Gl.forEach(t),Uu=h(Rt),T(rn.$$.fragment,Rt),Rt.forEach(t),Xl.forEach(t),ml=h(s),fo=r(s,"H2",{class:!0});var Jl=i(fo);ln=r(Jl,"A",{id:!0,class:!0,href:!0});var jg=i(ln);ei=r(jg,"SPAN",{});var Ng=i(ei);T(Ns.$$.fragment,Ng),Ng.forEach(t),jg.forEach(t),Qu=h(Jl),ti=r(Jl,"SPAN",{});var Pg=i(ti);Bu=n(Pg,"TFFlaubertModel"),Pg.forEach(t),Jl.forEach(t),fl=h(s),et=r(s,"DIV",{class:!0});var Et=i(et);T(Ps.$$.fragment,Et),Ru=h(Et),oi=r(Et,"P",{});var Og=i(oi);Ku=n(Og,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Og.forEach(t),Vu=h(Et),Os=r(Et,"P",{});var Zl=i(Os);Yu=n(Zl,"This model inherits from "),Da=r(Zl,"A",{href:!0});var Dg=i(Da);Xu=n(Dg,"TFPreTrainedModel"),Dg.forEach(t),Gu=n(Zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zl.forEach(t),Ju=h(Et),Ds=r(Et,"P",{});var ed=i(Ds);Zu=n(ed,"This model is also a "),Ss=r(ed,"A",{href:!0,rel:!0});var Sg=i(Ss);eh=n(Sg,"tf.keras.Model"),Sg.forEach(t),th=n(ed,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ed.forEach(t),oh=h(Et),T(dn.$$.fragment,Et),nh=h(Et),vt=r(Et,"DIV",{class:!0});var An=i(vt);T(As.$$.fragment,An),sh=h(An),go=r(An,"P",{});var sr=i(go);ah=n(sr,"The "),Sa=r(sr,"A",{href:!0});var Ag=i(Sa);rh=n(Ag,"TFFlaubertModel"),Ag.forEach(t),ih=n(sr," forward method, overrides the "),ni=r(sr,"CODE",{});var Lg=i(ni);lh=n(Lg,"__call__"),Lg.forEach(t),dh=n(sr," special method."),sr.forEach(t),ch=h(An),T(cn.$$.fragment,An),ph=h(An),T(pn.$$.fragment,An),An.forEach(t),Et.forEach(t),gl=h(s),_o=r(s,"H2",{class:!0});var td=i(_o);un=r(td,"A",{id:!0,class:!0,href:!0});var Ig=i(un);si=r(Ig,"SPAN",{});var Wg=i(si);T(Ls.$$.fragment,Wg),Wg.forEach(t),Ig.forEach(t),uh=h(td),ai=r(td,"SPAN",{});var Hg=i(ai);hh=n(Hg,"TFFlaubertWithLMHeadModel"),Hg.forEach(t),td.forEach(t),_l=h(s),tt=r(s,"DIV",{class:!0});var Mt=i(tt);T(Is.$$.fragment,Mt),mh=h(Mt),ri=r(Mt,"P",{});var Ug=i(ri);fh=n(Ug,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ug.forEach(t),gh=h(Mt),Ws=r(Mt,"P",{});var od=i(Ws);_h=n(od,"This model inherits from "),Aa=r(od,"A",{href:!0});var Qg=i(Aa);bh=n(Qg,"TFPreTrainedModel"),Qg.forEach(t),yh=n(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(t),kh=h(Mt),Hs=r(Mt,"P",{});var nd=i(Hs);wh=n(nd,"This model is also a "),Us=r(nd,"A",{href:!0,rel:!0});var Bg=i(Us);Th=n(Bg,"tf.keras.Model"),Bg.forEach(t),vh=n(nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nd.forEach(t),Fh=h(Mt),T(hn.$$.fragment,Mt),$h=h(Mt),Ft=r(Mt,"DIV",{class:!0});var Ln=i(Ft);T(Qs.$$.fragment,Ln),Eh=h(Ln),bo=r(Ln,"P",{});var ar=i(bo);Mh=n(ar,"The "),La=r(ar,"A",{href:!0});var Rg=i(La);xh=n(Rg,"TFFlaubertWithLMHeadModel"),Rg.forEach(t),qh=n(ar," forward method, overrides the "),ii=r(ar,"CODE",{});var Kg=i(ii);zh=n(Kg,"__call__"),Kg.forEach(t),Ch=n(ar," special method."),ar.forEach(t),jh=h(Ln),T(mn.$$.fragment,Ln),Nh=h(Ln),T(fn.$$.fragment,Ln),Ln.forEach(t),Mt.forEach(t),bl=h(s),yo=r(s,"H2",{class:!0});var sd=i(yo);gn=r(sd,"A",{id:!0,class:!0,href:!0});var Vg=i(gn);li=r(Vg,"SPAN",{});var Yg=i(li);T(Bs.$$.fragment,Yg),Yg.forEach(t),Vg.forEach(t),Ph=h(sd),di=r(sd,"SPAN",{});var Xg=i(di);Oh=n(Xg,"TFFlaubertForSequenceClassification"),Xg.forEach(t),sd.forEach(t),yl=h(s),ot=r(s,"DIV",{class:!0});var xt=i(ot);T(Rs.$$.fragment,xt),Dh=h(xt),ci=r(xt,"P",{});var Gg=i(ci);Sh=n(Gg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Gg.forEach(t),Ah=h(xt),Ks=r(xt,"P",{});var ad=i(Ks);Lh=n(ad,"This model inherits from "),Ia=r(ad,"A",{href:!0});var Jg=i(Ia);Ih=n(Jg,"TFPreTrainedModel"),Jg.forEach(t),Wh=n(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Hh=h(xt),Vs=r(xt,"P",{});var rd=i(Vs);Uh=n(rd,"This model is also a "),Ys=r(rd,"A",{href:!0,rel:!0});var Zg=i(Ys);Qh=n(Zg,"tf.keras.Model"),Zg.forEach(t),Bh=n(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),Rh=h(xt),T(_n.$$.fragment,xt),Kh=h(xt),gt=r(xt,"DIV",{class:!0});var Kt=i(gt);T(Xs.$$.fragment,Kt),Vh=h(Kt),ko=r(Kt,"P",{});var rr=i(ko);Yh=n(rr,"The "),Wa=r(rr,"A",{href:!0});var e_=i(Wa);Xh=n(e_,"TFFlaubertForSequenceClassification"),e_.forEach(t),Gh=n(rr," forward method, overrides the "),pi=r(rr,"CODE",{});var t_=i(pi);Jh=n(t_,"__call__"),t_.forEach(t),Zh=n(rr," special method."),rr.forEach(t),em=h(Kt),T(bn.$$.fragment,Kt),tm=h(Kt),T(yn.$$.fragment,Kt),om=h(Kt),T(kn.$$.fragment,Kt),Kt.forEach(t),xt.forEach(t),kl=h(s),wo=r(s,"H2",{class:!0});var id=i(wo);wn=r(id,"A",{id:!0,class:!0,href:!0});var o_=i(wn);ui=r(o_,"SPAN",{});var n_=i(ui);T(Gs.$$.fragment,n_),n_.forEach(t),o_.forEach(t),nm=h(id),hi=r(id,"SPAN",{});var s_=i(hi);sm=n(s_,"TFFlaubertForMultipleChoice"),s_.forEach(t),id.forEach(t),wl=h(s),nt=r(s,"DIV",{class:!0});var qt=i(nt);T(Js.$$.fragment,qt),am=h(qt),mi=r(qt,"P",{});var a_=i(mi);rm=n(a_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a_.forEach(t),im=h(qt),Zs=r(qt,"P",{});var ld=i(Zs);lm=n(ld,"This model inherits from "),Ha=r(ld,"A",{href:!0});var r_=i(Ha);dm=n(r_,"TFPreTrainedModel"),r_.forEach(t),cm=n(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),pm=h(qt),ea=r(qt,"P",{});var dd=i(ea);um=n(dd,"This model is also a "),ta=r(dd,"A",{href:!0,rel:!0});var i_=i(ta);hm=n(i_,"tf.keras.Model"),i_.forEach(t),mm=n(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),fm=h(qt),T(Tn.$$.fragment,qt),gm=h(qt),$t=r(qt,"DIV",{class:!0});var In=i($t);T(oa.$$.fragment,In),_m=h(In),To=r(In,"P",{});var ir=i(To);bm=n(ir,"The "),Ua=r(ir,"A",{href:!0});var l_=i(Ua);ym=n(l_,"TFFlaubertForMultipleChoice"),l_.forEach(t),km=n(ir," forward method, overrides the "),fi=r(ir,"CODE",{});var d_=i(fi);wm=n(d_,"__call__"),d_.forEach(t),Tm=n(ir," special method."),ir.forEach(t),vm=h(In),T(vn.$$.fragment,In),Fm=h(In),T(Fn.$$.fragment,In),In.forEach(t),qt.forEach(t),Tl=h(s),vo=r(s,"H2",{class:!0});var cd=i(vo);$n=r(cd,"A",{id:!0,class:!0,href:!0});var c_=i($n);gi=r(c_,"SPAN",{});var p_=i(gi);T(na.$$.fragment,p_),p_.forEach(t),c_.forEach(t),$m=h(cd),_i=r(cd,"SPAN",{});var u_=i(_i);Em=n(u_,"TFFlaubertForTokenClassification"),u_.forEach(t),cd.forEach(t),vl=h(s),st=r(s,"DIV",{class:!0});var zt=i(st);T(sa.$$.fragment,zt),Mm=h(zt),bi=r(zt,"P",{});var h_=i(bi);xm=n(h_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),h_.forEach(t),qm=h(zt),aa=r(zt,"P",{});var pd=i(aa);zm=n(pd,"This model inherits from "),Qa=r(pd,"A",{href:!0});var m_=i(Qa);Cm=n(m_,"TFPreTrainedModel"),m_.forEach(t),jm=n(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),Nm=h(zt),ra=r(zt,"P",{});var ud=i(ra);Pm=n(ud,"This model is also a "),ia=r(ud,"A",{href:!0,rel:!0});var f_=i(ia);Om=n(f_,"tf.keras.Model"),f_.forEach(t),Dm=n(ud,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud.forEach(t),Sm=h(zt),T(En.$$.fragment,zt),Am=h(zt),_t=r(zt,"DIV",{class:!0});var Vt=i(_t);T(la.$$.fragment,Vt),Lm=h(Vt),Fo=r(Vt,"P",{});var lr=i(Fo);Im=n(lr,"The "),Ba=r(lr,"A",{href:!0});var g_=i(Ba);Wm=n(g_,"TFFlaubertForTokenClassification"),g_.forEach(t),Hm=n(lr," forward method, overrides the "),yi=r(lr,"CODE",{});var __=i(yi);Um=n(__,"__call__"),__.forEach(t),Qm=n(lr," special method."),lr.forEach(t),Bm=h(Vt),T(Mn.$$.fragment,Vt),Rm=h(Vt),T(xn.$$.fragment,Vt),Km=h(Vt),T(qn.$$.fragment,Vt),Vt.forEach(t),zt.forEach(t),Fl=h(s),$o=r(s,"H2",{class:!0});var hd=i($o);zn=r(hd,"A",{id:!0,class:!0,href:!0});var b_=i(zn);ki=r(b_,"SPAN",{});var y_=i(ki);T(da.$$.fragment,y_),y_.forEach(t),b_.forEach(t),Vm=h(hd),wi=r(hd,"SPAN",{});var k_=i(wi);Ym=n(k_,"TFFlaubertForQuestionAnsweringSimple"),k_.forEach(t),hd.forEach(t),$l=h(s),at=r(s,"DIV",{class:!0});var Ct=i(at);T(ca.$$.fragment,Ct),Xm=h(Ct),Eo=r(Ct,"P",{});var dr=i(Eo);Gm=n(dr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ti=r(dr,"CODE",{});var w_=i(Ti);Jm=n(w_,"span start logits"),w_.forEach(t),Zm=n(dr," and "),vi=r(dr,"CODE",{});var T_=i(vi);ef=n(T_,"span end logits"),T_.forEach(t),tf=n(dr,")."),dr.forEach(t),of=h(Ct),pa=r(Ct,"P",{});var md=i(pa);nf=n(md,"This model inherits from "),Ra=r(md,"A",{href:!0});var v_=i(Ra);sf=n(v_,"TFPreTrainedModel"),v_.forEach(t),af=n(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),rf=h(Ct),ua=r(Ct,"P",{});var fd=i(ua);lf=n(fd,"This model is also a "),ha=r(fd,"A",{href:!0,rel:!0});var F_=i(ha);df=n(F_,"tf.keras.Model"),F_.forEach(t),cf=n(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),pf=h(Ct),T(Cn.$$.fragment,Ct),uf=h(Ct),bt=r(Ct,"DIV",{class:!0});var Yt=i(bt);T(ma.$$.fragment,Yt),hf=h(Yt),Mo=r(Yt,"P",{});var cr=i(Mo);mf=n(cr,"The "),Ka=r(cr,"A",{href:!0});var $_=i(Ka);ff=n($_,"TFFlaubertForQuestionAnsweringSimple"),$_.forEach(t),gf=n(cr," forward method, overrides the "),Fi=r(cr,"CODE",{});var E_=i(Fi);_f=n(E_,"__call__"),E_.forEach(t),bf=n(cr," special method."),cr.forEach(t),yf=h(Yt),T(jn.$$.fragment,Yt),kf=h(Yt),T(Nn.$$.fragment,Yt),wf=h(Yt),T(Pn.$$.fragment,Yt),Yt.forEach(t),Ct.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(wb)),_(m,"id","flaubert"),_(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(m,"href","#flaubert"),_(c,"class","relative group"),_(ae,"id","overview"),_(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ae,"href","#overview"),_(A,"class","relative group"),_(le,"href","https://arxiv.org/abs/1912.05372"),_(le,"rel","nofollow"),_(de,"href","https://huggingface.co/formiel"),_(de,"rel","nofollow"),_(ce,"href","https://github.com/getalp/Flaubert"),_(ce,"rel","nofollow"),_(re,"id","transformers.FlaubertConfig"),_(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(re,"href","#transformers.FlaubertConfig"),_(N,"class","relative group"),_(P,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),_(he,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(x,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),_(x,"rel","nofollow"),_(Le,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),_(Ie,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),_(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"id","transformers.FlaubertTokenizer"),_(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Se,"href","#transformers.FlaubertTokenizer"),_(De,"class","relative group"),_(wa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),_(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Po,"id","transformers.FlaubertModel"),_(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Po,"href","#transformers.FlaubertModel"),_(Gt,"class","relative group"),_(Fa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),_(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(So,"id","transformers.FlaubertWithLMHeadModel"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#transformers.FlaubertWithLMHeadModel"),_(eo,"class","relative group"),_($a,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ns,"rel","nofollow"),_(Ea,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertWithLMHeadModel"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"id","transformers.FlaubertForSequenceClassification"),_(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wo,"href","#transformers.FlaubertForSequenceClassification"),_(oo,"class","relative group"),_(Ma,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ds,"rel","nofollow"),_(xa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertForSequenceClassification"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"id","transformers.FlaubertForMultipleChoice"),_(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ko,"href","#transformers.FlaubertForMultipleChoice"),_(so,"class","relative group"),_(qa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(fs,"rel","nofollow"),_(za,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertForMultipleChoice"),_(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xo,"id","transformers.FlaubertForTokenClassification"),_(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Xo,"href","#transformers.FlaubertForTokenClassification"),_(ro,"class","relative group"),_(Ca,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ws,"rel","nofollow"),_(ja,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertForTokenClassification"),_(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.FlaubertForQuestionAnsweringSimple"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.FlaubertForQuestionAnsweringSimple"),_(lo,"class","relative group"),_(Na,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ms,"rel","nofollow"),_(Pa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertForQuestionAnsweringSimple"),_(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.FlaubertForQuestionAnswering"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.FlaubertForQuestionAnswering"),_(uo,"class","relative group"),_(Oa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertForQuestionAnswering"),_(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ln,"id","transformers.TFFlaubertModel"),_(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ln,"href","#transformers.TFFlaubertModel"),_(fo,"class","relative group"),_(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ss,"rel","nofollow"),_(Sa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(un,"id","transformers.TFFlaubertWithLMHeadModel"),_(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(un,"href","#transformers.TFFlaubertWithLMHeadModel"),_(_o,"class","relative group"),_(Aa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Us,"rel","nofollow"),_(La,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),_(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(gn,"id","transformers.TFFlaubertForSequenceClassification"),_(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(gn,"href","#transformers.TFFlaubertForSequenceClassification"),_(yo,"class","relative group"),_(Ia,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ys,"rel","nofollow"),_(Wa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertForSequenceClassification"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wn,"id","transformers.TFFlaubertForMultipleChoice"),_(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(wn,"href","#transformers.TFFlaubertForMultipleChoice"),_(wo,"class","relative group"),_(Ha,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(ta,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(ta,"rel","nofollow"),_(Ua,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertForMultipleChoice"),_($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_($n,"id","transformers.TFFlaubertForTokenClassification"),_($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_($n,"href","#transformers.TFFlaubertForTokenClassification"),_(vo,"class","relative group"),_(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(ia,"rel","nofollow"),_(Ba,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertForTokenClassification"),_(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),_(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),_($o,"class","relative group"),_(Ra,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(ha,"rel","nofollow"),_(Ka,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertForQuestionAnsweringSimple"),_(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,y){e(document.head,d),b(s,g,y),b(s,c,y),e(c,m),e(m,k),v(l,k,null),e(c,p),e(c,C),e(C,Te),b(s,ge,y),b(s,A,y),e(A,ae),e(ae,Z),v(M,Z,null),e(A,ve),e(A,U),e(U,Fe),b(s,_e,y),b(s,I,y),e(I,$e),e(I,le),e(le,V),e(I,Ee),b(s,be,y),b(s,W,y),e(W,Me),b(s,ye,y),b(s,H,y),e(H,me),e(me,xe),b(s,te,y),b(s,j,y),e(j,O),e(j,de),e(de,Y),e(j,qe),e(j,ce),e(ce,X),e(j,ze),b(s,ke,y),b(s,N,y),e(N,re),e(re,Q),v(pe,Q,null),e(N,Ce),e(N,B),e(B,je),b(s,we,y),b(s,D,y),v(ue,D,null),e(D,G),e(D,ee),e(ee,ne),e(ee,P),e(P,Ne),e(ee,S),e(ee,he),e(he,Pe),e(ee,f),e(ee,x),e(x,Qe),e(ee,se),e(D,Be),e(D,Oe),e(Oe,z),e(Oe,Le),e(Le,Re),e(Oe,Ke),e(Oe,Ie),e(Ie,Ve),e(Oe,L),b(s,K,y),b(s,De,y),e(De,Se),e(Se,R),v(Ae,R,null),e(De,Ye),e(De,fe),e(fe,Xe),b(s,oe,y),b(s,J,y),v(Wn,J,null),e(J,gd),e(J,pr),e(pr,_d),e(J,bd),e(J,jt),e(jt,ur),e(ur,yd),e(jt,kd),e(jt,hr),e(hr,wd),e(jt,Td),e(jt,Nt),e(Nt,vd),e(Nt,mr),e(mr,Fd),e(Nt,$d),e(Nt,fr),e(fr,Ed),e(Nt,Md),e(Nt,gr),e(gr,xd),e(Nt,qd),e(jt,zd),e(jt,Hn),e(Hn,Cd),e(Hn,_r),e(_r,jd),e(Hn,Nd),e(J,Pd),e(J,Un),e(Un,Od),e(Un,wa),e(wa,Dd),e(Un,Sd),e(J,Ad),e(J,St),v(Qn,St,null),e(St,Ld),e(St,br),e(br,Id),e(St,Wd),e(St,Bn),e(Bn,Ta),e(Ta,Hd),e(Ta,yr),e(yr,Ud),e(Bn,Qd),e(Bn,va),e(va,Bd),e(va,kr),e(kr,Rd),e(J,Kd),e(J,Co),v(Rn,Co,null),e(Co,Vd),e(Co,wr),e(wr,Yd),e(J,Xd),e(J,kt),v(Kn,kt,null),e(kt,Gd),e(kt,Tr),e(Tr,Jd),e(kt,Zd),v(jo,kt,null),e(kt,ec),e(kt,Xt),e(Xt,tc),e(Xt,vr),e(vr,oc),e(Xt,nc),e(Xt,Fr),e(Fr,sc),e(Xt,ac),e(J,rc),e(J,No),v(Vn,No,null),e(No,ic),e(No,Yn),e(Yn,lc),e(Yn,$r),e($r,dc),e(Yn,cc),b(s,el,y),b(s,Gt,y),e(Gt,Po),e(Po,Er),v(Xn,Er,null),e(Gt,pc),e(Gt,Mr),e(Mr,uc),b(s,tl,y),b(s,Jt,y),v(Gn,Jt,null),e(Jt,hc),e(Jt,wt),v(Jn,wt,null),e(wt,mc),e(wt,Zt),e(Zt,fc),e(Zt,Fa),e(Fa,gc),e(Zt,_c),e(Zt,xr),e(xr,bc),e(Zt,yc),e(wt,kc),v(Oo,wt,null),e(wt,wc),v(Do,wt,null),b(s,ol,y),b(s,eo,y),e(eo,So),e(So,qr),v(Zn,qr,null),e(eo,Tc),e(eo,zr),e(zr,vc),b(s,nl,y),b(s,it,y),v(es,it,null),e(it,Fc),e(it,Cr),e(Cr,$c),e(it,Ec),e(it,ts),e(ts,Mc),e(ts,$a),e($a,xc),e(ts,qc),e(it,zc),e(it,os),e(os,Cc),e(os,ns),e(ns,jc),e(os,Nc),e(it,Pc),e(it,ut),v(ss,ut,null),e(ut,Oc),e(ut,to),e(to,Dc),e(to,Ea),e(Ea,Sc),e(to,Ac),e(to,jr),e(jr,Lc),e(to,Ic),e(ut,Wc),v(Ao,ut,null),e(ut,Hc),v(Lo,ut,null),e(ut,Uc),v(Io,ut,null),b(s,sl,y),b(s,oo,y),e(oo,Wo),e(Wo,Nr),v(as,Nr,null),e(oo,Qc),e(oo,Pr),e(Pr,Bc),b(s,al,y),b(s,lt,y),v(rs,lt,null),e(lt,Rc),e(lt,Or),e(Or,Kc),e(lt,Vc),e(lt,is),e(is,Yc),e(is,Ma),e(Ma,Xc),e(is,Gc),e(lt,Jc),e(lt,ls),e(ls,Zc),e(ls,ds),e(ds,ep),e(ls,tp),e(lt,op),e(lt,Ze),v(cs,Ze,null),e(Ze,np),e(Ze,no),e(no,sp),e(no,xa),e(xa,ap),e(no,rp),e(no,Dr),e(Dr,ip),e(no,lp),e(Ze,dp),v(Ho,Ze,null),e(Ze,cp),v(Uo,Ze,null),e(Ze,pp),v(Qo,Ze,null),e(Ze,up),v(Bo,Ze,null),e(Ze,hp),v(Ro,Ze,null),b(s,rl,y),b(s,so,y),e(so,Ko),e(Ko,Sr),v(ps,Sr,null),e(so,mp),e(so,Ar),e(Ar,fp),b(s,il,y),b(s,dt,y),v(us,dt,null),e(dt,gp),e(dt,Lr),e(Lr,_p),e(dt,bp),e(dt,hs),e(hs,yp),e(hs,qa),e(qa,kp),e(hs,wp),e(dt,Tp),e(dt,ms),e(ms,vp),e(ms,fs),e(fs,Fp),e(ms,$p),e(dt,Ep),e(dt,Tt),v(gs,Tt,null),e(Tt,Mp),e(Tt,ao),e(ao,xp),e(ao,za),e(za,qp),e(ao,zp),e(ao,Ir),e(Ir,Cp),e(ao,jp),e(Tt,Np),v(Vo,Tt,null),e(Tt,Pp),v(Yo,Tt,null),b(s,ll,y),b(s,ro,y),e(ro,Xo),e(Xo,Wr),v(_s,Wr,null),e(ro,Op),e(ro,Hr),e(Hr,Dp),b(s,dl,y),b(s,ct,y),v(bs,ct,null),e(ct,Sp),e(ct,Ur),e(Ur,Ap),e(ct,Lp),e(ct,ys),e(ys,Ip),e(ys,Ca),e(Ca,Wp),e(ys,Hp),e(ct,Up),e(ct,ks),e(ks,Qp),e(ks,ws),e(ws,Bp),e(ks,Rp),e(ct,Kp),e(ct,ht),v(Ts,ht,null),e(ht,Vp),e(ht,io),e(io,Yp),e(io,ja),e(ja,Xp),e(io,Gp),e(io,Qr),e(Qr,Jp),e(io,Zp),e(ht,eu),v(Go,ht,null),e(ht,tu),v(Jo,ht,null),e(ht,ou),v(Zo,ht,null),b(s,cl,y),b(s,lo,y),e(lo,en),e(en,Br),v(vs,Br,null),e(lo,nu),e(lo,Rr),e(Rr,su),b(s,pl,y),b(s,pt,y),v(Fs,pt,null),e(pt,au),e(pt,co),e(co,ru),e(co,Kr),e(Kr,iu),e(co,lu),e(co,Vr),e(Vr,du),e(co,cu),e(pt,pu),e(pt,$s),e($s,uu),e($s,Na),e(Na,hu),e($s,mu),e(pt,fu),e(pt,Es),e(Es,gu),e(Es,Ms),e(Ms,_u),e(Es,bu),e(pt,yu),e(pt,mt),v(xs,mt,null),e(mt,ku),e(mt,po),e(po,wu),e(po,Pa),e(Pa,Tu),e(po,vu),e(po,Yr),e(Yr,Fu),e(po,$u),e(mt,Eu),v(tn,mt,null),e(mt,Mu),v(on,mt,null),e(mt,xu),v(nn,mt,null),b(s,ul,y),b(s,uo,y),e(uo,sn),e(sn,Xr),v(qs,Xr,null),e(uo,qu),e(uo,Gr),e(Gr,zu),b(s,hl,y),b(s,ho,y),v(zs,ho,null),e(ho,Cu),e(ho,ft),v(Cs,ft,null),e(ft,ju),e(ft,mo),e(mo,Nu),e(mo,Oa),e(Oa,Pu),e(mo,Ou),e(mo,Jr),e(Jr,Du),e(mo,Su),e(ft,Au),v(an,ft,null),e(ft,Lu),e(ft,js),e(js,Iu),e(js,Zr),e(Zr,Wu),e(js,Hu),e(ft,Uu),v(rn,ft,null),b(s,ml,y),b(s,fo,y),e(fo,ln),e(ln,ei),v(Ns,ei,null),e(fo,Qu),e(fo,ti),e(ti,Bu),b(s,fl,y),b(s,et,y),v(Ps,et,null),e(et,Ru),e(et,oi),e(oi,Ku),e(et,Vu),e(et,Os),e(Os,Yu),e(Os,Da),e(Da,Xu),e(Os,Gu),e(et,Ju),e(et,Ds),e(Ds,Zu),e(Ds,Ss),e(Ss,eh),e(Ds,th),e(et,oh),v(dn,et,null),e(et,nh),e(et,vt),v(As,vt,null),e(vt,sh),e(vt,go),e(go,ah),e(go,Sa),e(Sa,rh),e(go,ih),e(go,ni),e(ni,lh),e(go,dh),e(vt,ch),v(cn,vt,null),e(vt,ph),v(pn,vt,null),b(s,gl,y),b(s,_o,y),e(_o,un),e(un,si),v(Ls,si,null),e(_o,uh),e(_o,ai),e(ai,hh),b(s,_l,y),b(s,tt,y),v(Is,tt,null),e(tt,mh),e(tt,ri),e(ri,fh),e(tt,gh),e(tt,Ws),e(Ws,_h),e(Ws,Aa),e(Aa,bh),e(Ws,yh),e(tt,kh),e(tt,Hs),e(Hs,wh),e(Hs,Us),e(Us,Th),e(Hs,vh),e(tt,Fh),v(hn,tt,null),e(tt,$h),e(tt,Ft),v(Qs,Ft,null),e(Ft,Eh),e(Ft,bo),e(bo,Mh),e(bo,La),e(La,xh),e(bo,qh),e(bo,ii),e(ii,zh),e(bo,Ch),e(Ft,jh),v(mn,Ft,null),e(Ft,Nh),v(fn,Ft,null),b(s,bl,y),b(s,yo,y),e(yo,gn),e(gn,li),v(Bs,li,null),e(yo,Ph),e(yo,di),e(di,Oh),b(s,yl,y),b(s,ot,y),v(Rs,ot,null),e(ot,Dh),e(ot,ci),e(ci,Sh),e(ot,Ah),e(ot,Ks),e(Ks,Lh),e(Ks,Ia),e(Ia,Ih),e(Ks,Wh),e(ot,Hh),e(ot,Vs),e(Vs,Uh),e(Vs,Ys),e(Ys,Qh),e(Vs,Bh),e(ot,Rh),v(_n,ot,null),e(ot,Kh),e(ot,gt),v(Xs,gt,null),e(gt,Vh),e(gt,ko),e(ko,Yh),e(ko,Wa),e(Wa,Xh),e(ko,Gh),e(ko,pi),e(pi,Jh),e(ko,Zh),e(gt,em),v(bn,gt,null),e(gt,tm),v(yn,gt,null),e(gt,om),v(kn,gt,null),b(s,kl,y),b(s,wo,y),e(wo,wn),e(wn,ui),v(Gs,ui,null),e(wo,nm),e(wo,hi),e(hi,sm),b(s,wl,y),b(s,nt,y),v(Js,nt,null),e(nt,am),e(nt,mi),e(mi,rm),e(nt,im),e(nt,Zs),e(Zs,lm),e(Zs,Ha),e(Ha,dm),e(Zs,cm),e(nt,pm),e(nt,ea),e(ea,um),e(ea,ta),e(ta,hm),e(ea,mm),e(nt,fm),v(Tn,nt,null),e(nt,gm),e(nt,$t),v(oa,$t,null),e($t,_m),e($t,To),e(To,bm),e(To,Ua),e(Ua,ym),e(To,km),e(To,fi),e(fi,wm),e(To,Tm),e($t,vm),v(vn,$t,null),e($t,Fm),v(Fn,$t,null),b(s,Tl,y),b(s,vo,y),e(vo,$n),e($n,gi),v(na,gi,null),e(vo,$m),e(vo,_i),e(_i,Em),b(s,vl,y),b(s,st,y),v(sa,st,null),e(st,Mm),e(st,bi),e(bi,xm),e(st,qm),e(st,aa),e(aa,zm),e(aa,Qa),e(Qa,Cm),e(aa,jm),e(st,Nm),e(st,ra),e(ra,Pm),e(ra,ia),e(ia,Om),e(ra,Dm),e(st,Sm),v(En,st,null),e(st,Am),e(st,_t),v(la,_t,null),e(_t,Lm),e(_t,Fo),e(Fo,Im),e(Fo,Ba),e(Ba,Wm),e(Fo,Hm),e(Fo,yi),e(yi,Um),e(Fo,Qm),e(_t,Bm),v(Mn,_t,null),e(_t,Rm),v(xn,_t,null),e(_t,Km),v(qn,_t,null),b(s,Fl,y),b(s,$o,y),e($o,zn),e(zn,ki),v(da,ki,null),e($o,Vm),e($o,wi),e(wi,Ym),b(s,$l,y),b(s,at,y),v(ca,at,null),e(at,Xm),e(at,Eo),e(Eo,Gm),e(Eo,Ti),e(Ti,Jm),e(Eo,Zm),e(Eo,vi),e(vi,ef),e(Eo,tf),e(at,of),e(at,pa),e(pa,nf),e(pa,Ra),e(Ra,sf),e(pa,af),e(at,rf),e(at,ua),e(ua,lf),e(ua,ha),e(ha,df),e(ua,cf),e(at,pf),v(Cn,at,null),e(at,uf),e(at,bt),v(ma,bt,null),e(bt,hf),e(bt,Mo),e(Mo,mf),e(Mo,Ka),e(Ka,ff),e(Mo,gf),e(Mo,Fi),e(Fi,_f),e(Mo,bf),e(bt,yf),v(jn,bt,null),e(bt,kf),v(Nn,bt,null),e(bt,wf),v(Pn,bt,null),El=!0},p(s,[y]){const fa={};y&2&&(fa.$$scope={dirty:y,ctx:s}),jo.$set(fa);const $i={};y&2&&($i.$$scope={dirty:y,ctx:s}),Oo.$set($i);const Ei={};y&2&&(Ei.$$scope={dirty:y,ctx:s}),Do.$set(Ei);const Mi={};y&2&&(Mi.$$scope={dirty:y,ctx:s}),Ao.$set(Mi);const ga={};y&2&&(ga.$$scope={dirty:y,ctx:s}),Lo.$set(ga);const xi={};y&2&&(xi.$$scope={dirty:y,ctx:s}),Io.$set(xi);const qi={};y&2&&(qi.$$scope={dirty:y,ctx:s}),Ho.$set(qi);const zi={};y&2&&(zi.$$scope={dirty:y,ctx:s}),Uo.$set(zi);const _a={};y&2&&(_a.$$scope={dirty:y,ctx:s}),Qo.$set(_a);const Ci={};y&2&&(Ci.$$scope={dirty:y,ctx:s}),Bo.$set(Ci);const ji={};y&2&&(ji.$$scope={dirty:y,ctx:s}),Ro.$set(ji);const Ni={};y&2&&(Ni.$$scope={dirty:y,ctx:s}),Vo.$set(Ni);const Pi={};y&2&&(Pi.$$scope={dirty:y,ctx:s}),Yo.$set(Pi);const xo={};y&2&&(xo.$$scope={dirty:y,ctx:s}),Go.$set(xo);const Oi={};y&2&&(Oi.$$scope={dirty:y,ctx:s}),Jo.$set(Oi);const Di={};y&2&&(Di.$$scope={dirty:y,ctx:s}),Zo.$set(Di);const ba={};y&2&&(ba.$$scope={dirty:y,ctx:s}),tn.$set(ba);const Si={};y&2&&(Si.$$scope={dirty:y,ctx:s}),on.$set(Si);const Ai={};y&2&&(Ai.$$scope={dirty:y,ctx:s}),nn.$set(Ai);const Li={};y&2&&(Li.$$scope={dirty:y,ctx:s}),an.$set(Li);const qo={};y&2&&(qo.$$scope={dirty:y,ctx:s}),rn.$set(qo);const Pt={};y&2&&(Pt.$$scope={dirty:y,ctx:s}),dn.$set(Pt);const Ii={};y&2&&(Ii.$$scope={dirty:y,ctx:s}),cn.$set(Ii);const Wi={};y&2&&(Wi.$$scope={dirty:y,ctx:s}),pn.$set(Wi);const Hi={};y&2&&(Hi.$$scope={dirty:y,ctx:s}),hn.$set(Hi);const zo={};y&2&&(zo.$$scope={dirty:y,ctx:s}),mn.$set(zo);const Ui={};y&2&&(Ui.$$scope={dirty:y,ctx:s}),fn.$set(Ui);const Qi={};y&2&&(Qi.$$scope={dirty:y,ctx:s}),_n.$set(Qi);const ya={};y&2&&(ya.$$scope={dirty:y,ctx:s}),bn.$set(ya);const Bi={};y&2&&(Bi.$$scope={dirty:y,ctx:s}),yn.$set(Bi);const Ri={};y&2&&(Ri.$$scope={dirty:y,ctx:s}),kn.$set(Ri);const Ki={};y&2&&(Ki.$$scope={dirty:y,ctx:s}),Tn.$set(Ki);const Ge={};y&2&&(Ge.$$scope={dirty:y,ctx:s}),vn.$set(Ge);const Vi={};y&2&&(Vi.$$scope={dirty:y,ctx:s}),Fn.$set(Vi);const Ot={};y&2&&(Ot.$$scope={dirty:y,ctx:s}),En.$set(Ot);const Yi={};y&2&&(Yi.$$scope={dirty:y,ctx:s}),Mn.$set(Yi);const Xi={};y&2&&(Xi.$$scope={dirty:y,ctx:s}),xn.$set(Xi);const Dt={};y&2&&(Dt.$$scope={dirty:y,ctx:s}),qn.$set(Dt);const Gi={};y&2&&(Gi.$$scope={dirty:y,ctx:s}),Cn.$set(Gi);const Ji={};y&2&&(Ji.$$scope={dirty:y,ctx:s}),jn.$set(Ji);const Zi={};y&2&&(Zi.$$scope={dirty:y,ctx:s}),Nn.$set(Zi);const ka={};y&2&&(ka.$$scope={dirty:y,ctx:s}),Pn.$set(ka)},i(s){El||(F(l.$$.fragment,s),F(M.$$.fragment,s),F(pe.$$.fragment,s),F(ue.$$.fragment,s),F(Ae.$$.fragment,s),F(Wn.$$.fragment,s),F(Qn.$$.fragment,s),F(Rn.$$.fragment,s),F(Kn.$$.fragment,s),F(jo.$$.fragment,s),F(Vn.$$.fragment,s),F(Xn.$$.fragment,s),F(Gn.$$.fragment,s),F(Jn.$$.fragment,s),F(Oo.$$.fragment,s),F(Do.$$.fragment,s),F(Zn.$$.fragment,s),F(es.$$.fragment,s),F(ss.$$.fragment,s),F(Ao.$$.fragment,s),F(Lo.$$.fragment,s),F(Io.$$.fragment,s),F(as.$$.fragment,s),F(rs.$$.fragment,s),F(cs.$$.fragment,s),F(Ho.$$.fragment,s),F(Uo.$$.fragment,s),F(Qo.$$.fragment,s),F(Bo.$$.fragment,s),F(Ro.$$.fragment,s),F(ps.$$.fragment,s),F(us.$$.fragment,s),F(gs.$$.fragment,s),F(Vo.$$.fragment,s),F(Yo.$$.fragment,s),F(_s.$$.fragment,s),F(bs.$$.fragment,s),F(Ts.$$.fragment,s),F(Go.$$.fragment,s),F(Jo.$$.fragment,s),F(Zo.$$.fragment,s),F(vs.$$.fragment,s),F(Fs.$$.fragment,s),F(xs.$$.fragment,s),F(tn.$$.fragment,s),F(on.$$.fragment,s),F(nn.$$.fragment,s),F(qs.$$.fragment,s),F(zs.$$.fragment,s),F(Cs.$$.fragment,s),F(an.$$.fragment,s),F(rn.$$.fragment,s),F(Ns.$$.fragment,s),F(Ps.$$.fragment,s),F(dn.$$.fragment,s),F(As.$$.fragment,s),F(cn.$$.fragment,s),F(pn.$$.fragment,s),F(Ls.$$.fragment,s),F(Is.$$.fragment,s),F(hn.$$.fragment,s),F(Qs.$$.fragment,s),F(mn.$$.fragment,s),F(fn.$$.fragment,s),F(Bs.$$.fragment,s),F(Rs.$$.fragment,s),F(_n.$$.fragment,s),F(Xs.$$.fragment,s),F(bn.$$.fragment,s),F(yn.$$.fragment,s),F(kn.$$.fragment,s),F(Gs.$$.fragment,s),F(Js.$$.fragment,s),F(Tn.$$.fragment,s),F(oa.$$.fragment,s),F(vn.$$.fragment,s),F(Fn.$$.fragment,s),F(na.$$.fragment,s),F(sa.$$.fragment,s),F(En.$$.fragment,s),F(la.$$.fragment,s),F(Mn.$$.fragment,s),F(xn.$$.fragment,s),F(qn.$$.fragment,s),F(da.$$.fragment,s),F(ca.$$.fragment,s),F(Cn.$$.fragment,s),F(ma.$$.fragment,s),F(jn.$$.fragment,s),F(Nn.$$.fragment,s),F(Pn.$$.fragment,s),El=!0)},o(s){$(l.$$.fragment,s),$(M.$$.fragment,s),$(pe.$$.fragment,s),$(ue.$$.fragment,s),$(Ae.$$.fragment,s),$(Wn.$$.fragment,s),$(Qn.$$.fragment,s),$(Rn.$$.fragment,s),$(Kn.$$.fragment,s),$(jo.$$.fragment,s),$(Vn.$$.fragment,s),$(Xn.$$.fragment,s),$(Gn.$$.fragment,s),$(Jn.$$.fragment,s),$(Oo.$$.fragment,s),$(Do.$$.fragment,s),$(Zn.$$.fragment,s),$(es.$$.fragment,s),$(ss.$$.fragment,s),$(Ao.$$.fragment,s),$(Lo.$$.fragment,s),$(Io.$$.fragment,s),$(as.$$.fragment,s),$(rs.$$.fragment,s),$(cs.$$.fragment,s),$(Ho.$$.fragment,s),$(Uo.$$.fragment,s),$(Qo.$$.fragment,s),$(Bo.$$.fragment,s),$(Ro.$$.fragment,s),$(ps.$$.fragment,s),$(us.$$.fragment,s),$(gs.$$.fragment,s),$(Vo.$$.fragment,s),$(Yo.$$.fragment,s),$(_s.$$.fragment,s),$(bs.$$.fragment,s),$(Ts.$$.fragment,s),$(Go.$$.fragment,s),$(Jo.$$.fragment,s),$(Zo.$$.fragment,s),$(vs.$$.fragment,s),$(Fs.$$.fragment,s),$(xs.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(nn.$$.fragment,s),$(qs.$$.fragment,s),$(zs.$$.fragment,s),$(Cs.$$.fragment,s),$(an.$$.fragment,s),$(rn.$$.fragment,s),$(Ns.$$.fragment,s),$(Ps.$$.fragment,s),$(dn.$$.fragment,s),$(As.$$.fragment,s),$(cn.$$.fragment,s),$(pn.$$.fragment,s),$(Ls.$$.fragment,s),$(Is.$$.fragment,s),$(hn.$$.fragment,s),$(Qs.$$.fragment,s),$(mn.$$.fragment,s),$(fn.$$.fragment,s),$(Bs.$$.fragment,s),$(Rs.$$.fragment,s),$(_n.$$.fragment,s),$(Xs.$$.fragment,s),$(bn.$$.fragment,s),$(yn.$$.fragment,s),$(kn.$$.fragment,s),$(Gs.$$.fragment,s),$(Js.$$.fragment,s),$(Tn.$$.fragment,s),$(oa.$$.fragment,s),$(vn.$$.fragment,s),$(Fn.$$.fragment,s),$(na.$$.fragment,s),$(sa.$$.fragment,s),$(En.$$.fragment,s),$(la.$$.fragment,s),$(Mn.$$.fragment,s),$(xn.$$.fragment,s),$(qn.$$.fragment,s),$(da.$$.fragment,s),$(ca.$$.fragment,s),$(Cn.$$.fragment,s),$(ma.$$.fragment,s),$(jn.$$.fragment,s),$(Nn.$$.fragment,s),$(Pn.$$.fragment,s),El=!1},d(s){t(d),s&&t(g),s&&t(c),E(l),s&&t(ge),s&&t(A),E(M),s&&t(_e),s&&t(I),s&&t(be),s&&t(W),s&&t(ye),s&&t(H),s&&t(te),s&&t(j),s&&t(ke),s&&t(N),E(pe),s&&t(we),s&&t(D),E(ue),s&&t(K),s&&t(De),E(Ae),s&&t(oe),s&&t(J),E(Wn),E(Qn),E(Rn),E(Kn),E(jo),E(Vn),s&&t(el),s&&t(Gt),E(Xn),s&&t(tl),s&&t(Jt),E(Gn),E(Jn),E(Oo),E(Do),s&&t(ol),s&&t(eo),E(Zn),s&&t(nl),s&&t(it),E(es),E(ss),E(Ao),E(Lo),E(Io),s&&t(sl),s&&t(oo),E(as),s&&t(al),s&&t(lt),E(rs),E(cs),E(Ho),E(Uo),E(Qo),E(Bo),E(Ro),s&&t(rl),s&&t(so),E(ps),s&&t(il),s&&t(dt),E(us),E(gs),E(Vo),E(Yo),s&&t(ll),s&&t(ro),E(_s),s&&t(dl),s&&t(ct),E(bs),E(Ts),E(Go),E(Jo),E(Zo),s&&t(cl),s&&t(lo),E(vs),s&&t(pl),s&&t(pt),E(Fs),E(xs),E(tn),E(on),E(nn),s&&t(ul),s&&t(uo),E(qs),s&&t(hl),s&&t(ho),E(zs),E(Cs),E(an),E(rn),s&&t(ml),s&&t(fo),E(Ns),s&&t(fl),s&&t(et),E(Ps),E(dn),E(As),E(cn),E(pn),s&&t(gl),s&&t(_o),E(Ls),s&&t(_l),s&&t(tt),E(Is),E(hn),E(Qs),E(mn),E(fn),s&&t(bl),s&&t(yo),E(Bs),s&&t(yl),s&&t(ot),E(Rs),E(_n),E(Xs),E(bn),E(yn),E(kn),s&&t(kl),s&&t(wo),E(Gs),s&&t(wl),s&&t(nt),E(Js),E(Tn),E(oa),E(vn),E(Fn),s&&t(Tl),s&&t(vo),E(na),s&&t(vl),s&&t(st),E(sa),E(En),E(la),E(Mn),E(xn),E(qn),s&&t(Fl),s&&t($o),E(da),s&&t($l),s&&t(at),E(ca),E(Cn),E(ma),E(jn),E(Nn),E(Pn)}}}const wb={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Tb(q){return C_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qb extends M_{constructor(d){super();x_(this,d,Tb,kb,q_,{})}}export{qb as default,wb as metadata};
