import{S as Y_,i as G_,s as K_,e as a,k as m,w as v,t as n,M as J_,c as r,d as t,m as h,a as i,x as w,h as s,b as _,G as e,g as b,y as F,q as y,o as $,B as M,v as Z_,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as de}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function eb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function tb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ob(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function nb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("The capital of France is <special1>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <special1>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;special1&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;special1&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function sb(x){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function ab(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function rb(x){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example of single-label classification:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ib(x){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function lb(x){let d,g,c,p,k;return p=new Fe({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function db(x){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained(
    "xlm-mlm-en-2048", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function cb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function pb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function mb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function hb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ub(x){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function fb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function gb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function _b(x){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function bb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function kb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Tb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),me=n("model(inputs)"),re=n("."),B=m(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),le=m(),L=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=m(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),Y=h(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);me=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=h(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=h(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);he=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=h(S),L=r(S,"LI",{});var X=i(L);ue=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=h(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var ze=i(O);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,u),e(p,C),e(C,ce),b(f,Y,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,me),e(z,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,he),e(q,le),e(q,L),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(z),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function vb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function wb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Fb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),me=n("model(inputs)"),re=n("."),B=m(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),le=m(),L=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=m(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),Y=h(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);me=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=h(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=h(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);he=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=h(S),L=r(S,"LI",{});var X=i(L);ue=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=h(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var ze=i(O);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,u),e(p,C),e(C,ce),b(f,Y,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,me),e(z,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,he),e(q,le),e(q,L),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(z),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function yb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function $b(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Mb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),me=n("model(inputs)"),re=n("."),B=m(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),le=m(),L=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=m(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),Y=h(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);me=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=h(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=h(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);he=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=h(S),L=r(S,"LI",{});var X=i(L);ue=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=h(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var ze=i(O);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,u),e(p,C),e(C,ce),b(f,Y,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,me),e(z,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,he),e(q,le),e(q,L),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(z),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function xb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Eb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Cb(x){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function zb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),me=n("model(inputs)"),re=n("."),B=m(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),le=m(),L=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=m(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),Y=h(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);me=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=h(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=h(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);he=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=h(S),L=r(S,"LI",{});var X=i(L);ue=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=h(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var ze=i(O);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,u),e(p,C),e(C,ce),b(f,Y,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,me),e(z,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,he),e(q,le),e(q,L),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(z),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function qb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Lb(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function jb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),me=n("model(inputs)"),re=n("."),B=m(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),le=m(),L=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=m(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),Y=h(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);me=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=h(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=h(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);he=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=h(S),L=r(S,"LI",{});var X=i(L);ue=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=h(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var ze=i(O);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,u),e(p,C),e(C,ce),b(f,Y,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,me),e(z,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,he),e(q,le),e(q,L),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(z),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function Pb(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Ab(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Nb(x){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Sb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),k=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),C=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),me=n("model(inputs)"),re=n("."),B=m(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),le=m(),L=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=m(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(f),p=r(f,"UL",{});var V=i(p);k=r(V,"LI",{});var ye=i(k);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),u=h(V),C=r(V,"LI",{});var Te=i(C);ce=s(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),V.forEach(t),Y=h(f),z=r(f,"P",{});var P=i(z);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ke=i(H);Z=s(ke,"tf.keras.Model.fit"),ke.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);me=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=h(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=h(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);he=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=h(S),L=r(S,"LI",{});var X=i(L);ue=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var Ce=i(I);_e=s(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),X.forEach(t),be=h(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var ze=i(O);se=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,k),e(k,l),e(p,u),e(p,C),e(C,ce),b(f,Y,E),b(f,z,E),e(z,J),e(z,H),e(H,Z),e(z,pe),e(z,Q),e(Q,me),e(z,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,he),e(q,le),e(q,L),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(z),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function Ob(x){let d,g,c,p,k;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var C=i(c);p=s(C,"Module"),C.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,p),e(d,k)},d(l){l&&t(d)}}}function Db(x){let d,g,c,p,k;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=m(),v(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);g=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),F(p,l,u),k=!0},p:we,i(l){k||(y(p.$$.fragment,l),k=!0)},o(l){$(p.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Ib(x){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Wb(x){let d,g,c,p,k,l,u,C,ce,Y,z,J,H,Z,pe,Q,me,re,B,N,ee,G,q,j,oe,R,ie,ne,U,he,le,L,ue,D,fe,ge,I,_e,be,A,K,O,se,f,E,V,ye,Te,P,ke,$e,ae,S,W,Me,xe,X,Ee,Ce,te,ze,cd,pd,Lt,md,ra,hd,ud,ia,fd,gd,Xi,jt,ho,nr,vn,_d,sr,bd,Hi,et,wn,kd,ar,Td,vd,kt,rr,wd,Fd,ir,yd,$d,Tt,Md,lr,xd,Ed,dr,Cd,zd,cr,qd,Ld,jd,Fn,Pd,pr,Ad,Nd,Sd,yn,Od,la,Dd,Id,Qi,Pt,uo,mr,$n,Wd,hr,Xd,Ui,Re,Mn,Hd,ur,Qd,Ud,xn,Rd,da,Bd,Vd,Yd,En,Gd,Cn,Kd,Jd,Zd,tt,zn,ec,At,tc,ca,oc,nc,fr,sc,ac,rc,fo,ic,go,Ri,Nt,_o,gr,qn,lc,_r,dc,Bi,je,Ln,cc,br,pc,mc,jn,hc,pa,uc,fc,gc,Pn,_c,An,bc,kc,Tc,Nn,vc,ma,wc,Fc,yc,Be,Sn,$c,St,Mc,ha,xc,Ec,kr,Cc,zc,qc,bo,Lc,ko,jc,To,Vi,Ot,vo,Tr,On,Pc,vr,Ac,Yi,Pe,Dn,Nc,wr,Sc,Oc,In,Dc,ua,Ic,Wc,Xc,Wn,Hc,Xn,Qc,Uc,Rc,Hn,Bc,fa,Vc,Yc,Gc,Le,Qn,Kc,Dt,Jc,ga,Zc,ep,Fr,tp,op,np,wo,sp,Fo,ap,yo,rp,$o,ip,Mo,Gi,It,xo,yr,Un,lp,$r,dp,Ki,Ae,Rn,cp,Mr,pp,mp,Bn,hp,_a,up,fp,gp,Vn,_p,Yn,bp,kp,Tp,Gn,vp,ba,wp,Fp,yp,ot,Kn,$p,Wt,Mp,ka,xp,Ep,xr,Cp,zp,qp,Eo,Lp,Co,Ji,Xt,zo,Er,Jn,jp,Cr,Pp,Zi,Ne,Zn,Ap,zr,Np,Sp,es,Op,Ta,Dp,Ip,Wp,ts,Xp,os,Hp,Qp,Up,ns,Rp,va,Bp,Vp,Yp,Ve,ss,Gp,Ht,Kp,wa,Jp,Zp,qr,em,tm,om,qo,nm,Lo,sm,jo,el,Qt,Po,Lr,as,am,jr,rm,tl,Se,rs,im,Ut,lm,Pr,dm,cm,Ar,pm,mm,hm,is,um,Fa,fm,gm,_m,ls,bm,ds,km,Tm,vm,cs,wm,ya,Fm,ym,$m,Ye,ps,Mm,Rt,xm,$a,Em,Cm,Nr,zm,qm,Lm,Ao,jm,No,Pm,So,ol,Bt,Oo,Sr,ms,Am,Or,Nm,nl,Oe,hs,Sm,Vt,Om,Dr,Dm,Im,Ir,Wm,Xm,Hm,us,Qm,Ma,Um,Rm,Bm,fs,Vm,gs,Ym,Gm,Km,_s,Jm,xa,Zm,eh,th,nt,bs,oh,Yt,nh,Ea,sh,ah,Wr,rh,ih,lh,Do,dh,Io,sl,Gt,Wo,Xr,ks,ch,Hr,ph,al,De,Ts,mh,Qr,hh,uh,vs,fh,Ca,gh,_h,bh,ws,kh,Fs,Th,vh,wh,Xo,Fh,st,ys,yh,Kt,$h,za,Mh,xh,Ur,Eh,Ch,zh,Ho,qh,Qo,rl,Jt,Uo,Rr,$s,Lh,Br,jh,il,Ie,Ms,Ph,Vr,Ah,Nh,xs,Sh,qa,Oh,Dh,Ih,Es,Wh,Cs,Xh,Hh,Qh,Ro,Uh,at,zs,Rh,Zt,Bh,La,Vh,Yh,Yr,Gh,Kh,Jh,Bo,Zh,Vo,ll,eo,Yo,Gr,qs,eu,Kr,tu,dl,We,Ls,ou,Jr,nu,su,js,au,ja,ru,iu,lu,Ps,du,As,cu,pu,mu,Go,hu,Ge,Ns,uu,to,fu,Pa,gu,_u,Zr,bu,ku,Tu,Ko,vu,Jo,wu,Zo,cl,oo,en,ei,Ss,Fu,ti,yu,pl,Xe,Os,$u,oi,Mu,xu,Ds,Eu,Aa,Cu,zu,qu,Is,Lu,Ws,ju,Pu,Au,tn,Nu,rt,Xs,Su,no,Ou,Na,Du,Iu,ni,Wu,Xu,Hu,on,Qu,nn,ml,so,sn,si,Hs,Uu,ai,Ru,hl,He,Qs,Bu,ri,Vu,Yu,Us,Gu,Sa,Ku,Ju,Zu,Rs,ef,Bs,tf,of,nf,an,sf,Ke,Vs,af,ao,rf,Oa,lf,df,ii,cf,pf,mf,rn,hf,ln,uf,dn,ul,ro,cn,li,Ys,ff,di,gf,fl,Qe,Gs,_f,io,bf,ci,kf,Tf,pi,vf,wf,Ff,Ks,yf,Da,$f,Mf,xf,Js,Ef,Zs,Cf,zf,qf,pn,Lf,Je,ea,jf,lo,Pf,Ia,Af,Nf,mi,Sf,Of,Df,mn,If,hn,Wf,un,gl;return l=new Ue({}),Z=new Ue({}),f=new Ue({}),ke=new de({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"layerdrop",val:" = 0.0"},{name:"pre_norm",val:" = False"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/configuration_flaubert.py#L35"}}),vn=new Ue({}),wn=new de({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"do_lowercase",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L89"}}),$n=new Ue({}),Mn=new de({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L134"}}),zn=new de({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L147",returnDescription:`
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
`}}),fo=new qe({props:{$$slots:{default:[eb]},$$scope:{ctx:x}}}),go=new ve({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[tb]},$$scope:{ctx:x}}}),qn=new Ue({}),Ln=new de({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L326"}}),Sn=new de({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
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
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),bo=new qe({props:{$$slots:{default:[ob]},$$scope:{ctx:x}}}),ko=new ve({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[nb]},$$scope:{ctx:x}}}),To=new ve({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[sb]},$$scope:{ctx:x}}}),On=new Ue({}),Dn=new de({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L348"}}),Qn=new de({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),wo=new qe({props:{$$slots:{default:[ab]},$$scope:{ctx:x}}}),Fo=new ve({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:x}}}),yo=new ve({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:x}}}),$o=new ve({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[lb]},$$scope:{ctx:x}}}),Mo=new ve({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[db]},$$scope:{ctx:x}}}),Un=new Ue({}),Rn=new de({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L436"}}),Kn=new de({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),Eo=new qe({props:{$$slots:{default:[cb]},$$scope:{ctx:x}}}),Co=new ve({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[pb]},$$scope:{ctx:x}}}),Jn=new Ue({}),Zn=new de({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L370"}}),ss=new de({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),qo=new qe({props:{$$slots:{default:[mb]},$$scope:{ctx:x}}}),Lo=new ve({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[hb]},$$scope:{ctx:x}}}),jo=new ve({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[ub]},$$scope:{ctx:x}}}),as=new Ue({}),rs=new de({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L392"}}),ps=new de({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),Ao=new qe({props:{$$slots:{default:[fb]},$$scope:{ctx:x}}}),No=new ve({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[gb]},$$scope:{ctx:x}}}),So=new ve({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[_b]},$$scope:{ctx:x}}}),ms=new Ue({}),hs=new de({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L414"}}),bs=new de({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.</p>
</li>
<li>
<p><strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).</p>
</li>
<li>
<p><strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).</p>
</li>
<li>
<p><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the <code>is_impossible</code> label of the answers.</p>
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
  href="/docs/transformers/main/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new qe({props:{$$slots:{default:[bb]},$$scope:{ctx:x}}}),Io=new ve({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[kb]},$$scope:{ctx:x}}}),ks=new Ue({}),Ts=new de({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L233"}}),Xo=new qe({props:{$$slots:{default:[Tb]},$$scope:{ctx:x}}}),ys=new de({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238",returnDescription:`
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
`}}),Ho=new qe({props:{$$slots:{default:[vb]},$$scope:{ctx:x}}}),Qo=new ve({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[wb]},$$scope:{ctx:x}}}),$s=new Ue({}),Ms=new de({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L759"}}),Ro=new qe({props:{$$slots:{default:[Fb]},$$scope:{ctx:x}}}),zs=new de({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L788",returnDescription:`
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
`}}),Bo=new qe({props:{$$slots:{default:[yb]},$$scope:{ctx:x}}}),Vo=new ve({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[$b]},$$scope:{ctx:x}}}),qs=new Ue({}),Ls=new de({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L852"}}),Go=new qe({props:{$$slots:{default:[Mb]},$$scope:{ctx:x}}}),Ns=new de({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L896",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),Ko=new qe({props:{$$slots:{default:[xb]},$$scope:{ctx:x}}}),Jo=new ve({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Eb]},$$scope:{ctx:x}}}),Zo=new ve({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[Cb]},$$scope:{ctx:x}}}),Ss=new Ue({}),Os=new de({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L897"}}),tn=new qe({props:{$$slots:{default:[zb]},$$scope:{ctx:x}}}),Xs=new de({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1003",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),on=new qe({props:{$$slots:{default:[qb]},$$scope:{ctx:x}}}),nn=new ve({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[Lb]},$$scope:{ctx:x}}}),Hs=new Ue({}),Qs=new de({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L882"}}),an=new qe({props:{$$slots:{default:[jb]},$$scope:{ctx:x}}}),Vs=new de({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1127",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),rn=new qe({props:{$$slots:{default:[Pb]},$$scope:{ctx:x}}}),ln=new ve({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Ab]},$$scope:{ctx:x}}}),dn=new ve({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Nb]},$$scope:{ctx:x}}}),Ys=new Ue({}),Gs=new de({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L867"}}),pn=new qe({props:{$$slots:{default:[Sb]},$$scope:{ctx:x}}}),ea=new de({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1212",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),mn=new qe({props:{$$slots:{default:[Ob]},$$scope:{ctx:x}}}),hn=new ve({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Db]},$$scope:{ctx:x}}}),un=new ve({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Ib]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=m(),c=a("h1"),p=a("a"),k=a("span"),v(l.$$.fragment),u=m(),C=a("span"),ce=n("FlauBERT"),Y=m(),z=a("h2"),J=a("a"),H=a("span"),v(Z.$$.fragment),pe=m(),Q=a("span"),me=n("Overview"),re=m(),B=a("p"),N=n("The FlauBERT model was proposed in the paper "),ee=a("a"),G=n("FlauBERT: Unsupervised Language Model Pre-training for French"),q=n(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),j=m(),oe=a("p"),R=n("The abstract from the paper is the following:"),ie=m(),ne=a("p"),U=a("em"),he=n(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),le=m(),L=a("p"),ue=n("This model was contributed by "),D=a("a"),fe=n("formiel"),ge=n(". The original code can be found "),I=a("a"),_e=n("here"),be=n("."),A=m(),K=a("h2"),O=a("a"),se=a("span"),v(f.$$.fragment),E=m(),V=a("span"),ye=n("FlaubertConfig"),Te=m(),P=a("div"),v(ke.$$.fragment),$e=m(),ae=a("p"),S=n("This is the configuration class to store the configuration of a "),W=a("a"),Me=n("FlaubertModel"),xe=n(" or a "),X=a("a"),Ee=n("TFFlaubertModel"),Ce=n(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),te=a("a"),ze=n("flaubert/flaubert_base_uncased"),cd=n(" architecture."),pd=m(),Lt=a("p"),md=n("Configuration objects inherit from "),ra=a("a"),hd=n("PretrainedConfig"),ud=n(` and can be used to control the model outputs. Read the
documentation from `),ia=a("a"),fd=n("PretrainedConfig"),gd=n(" for more information."),Xi=m(),jt=a("h2"),ho=a("a"),nr=a("span"),v(vn.$$.fragment),_d=m(),sr=a("span"),bd=n("FlaubertTokenizer"),Hi=m(),et=a("div"),v(wn.$$.fragment),kd=m(),ar=a("p"),Td=n("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),vd=m(),kt=a("ul"),rr=a("li"),wd=n("Moses preprocessing and tokenization."),Fd=m(),ir=a("li"),yd=n("Normalizing all inputs text."),$d=m(),Tt=a("li"),Md=n("The arguments "),lr=a("code"),xd=n("special_tokens"),Ed=n(" and the function "),dr=a("code"),Cd=n("set_special_tokens"),zd=n(`, can be used to add additional symbols (like
\u201D`),cr=a("strong"),qd=n("classify"),Ld=n("\u201D) to a vocabulary."),jd=m(),Fn=a("li"),Pd=n("The argument "),pr=a("code"),Ad=n("do_lowercase"),Nd=n(" controls lower casing (automatically set for pretrained vocabularies)."),Sd=m(),yn=a("p"),Od=n("This tokenizer inherits from "),la=a("a"),Dd=n("XLMTokenizer"),Id=n(`. Please check the superclass for usage examples and documentation
regarding arguments.`),Qi=m(),Pt=a("h2"),uo=a("a"),mr=a("span"),v($n.$$.fragment),Wd=m(),hr=a("span"),Xd=n("FlaubertModel"),Ui=m(),Re=a("div"),v(Mn.$$.fragment),Hd=m(),ur=a("p"),Qd=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Ud=m(),xn=a("p"),Rd=n("This model inherits from "),da=a("a"),Bd=n("PreTrainedModel"),Vd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=m(),En=a("p"),Gd=n("This model is also a PyTorch "),Cn=a("a"),Kd=n("torch.nn.Module"),Jd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=m(),tt=a("div"),v(zn.$$.fragment),ec=m(),At=a("p"),tc=n("The "),ca=a("a"),oc=n("FlaubertModel"),nc=n(" forward method, overrides the "),fr=a("code"),sc=n("__call__"),ac=n(" special method."),rc=m(),v(fo.$$.fragment),ic=m(),v(go.$$.fragment),Ri=m(),Nt=a("h2"),_o=a("a"),gr=a("span"),v(qn.$$.fragment),lc=m(),_r=a("span"),dc=n("FlaubertWithLMHeadModel"),Bi=m(),je=a("div"),v(Ln.$$.fragment),cc=m(),br=a("p"),pc=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),mc=m(),jn=a("p"),hc=n("This model inherits from "),pa=a("a"),uc=n("PreTrainedModel"),fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=m(),Pn=a("p"),_c=n("This model is also a PyTorch "),An=a("a"),bc=n("torch.nn.Module"),kc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=m(),Nn=a("p"),vc=n("This class overrides "),ma=a("a"),wc=n("XLMWithLMHeadModel"),Fc=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),yc=m(),Be=a("div"),v(Sn.$$.fragment),$c=m(),St=a("p"),Mc=n("The "),ha=a("a"),xc=n("XLMWithLMHeadModel"),Ec=n(" forward method, overrides the "),kr=a("code"),Cc=n("__call__"),zc=n(" special method."),qc=m(),v(bo.$$.fragment),Lc=m(),v(ko.$$.fragment),jc=m(),v(To.$$.fragment),Vi=m(),Ot=a("h2"),vo=a("a"),Tr=a("span"),v(On.$$.fragment),Pc=m(),vr=a("span"),Ac=n("FlaubertForSequenceClassification"),Yi=m(),Pe=a("div"),v(Dn.$$.fragment),Nc=m(),wr=a("p"),Sc=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Oc=m(),In=a("p"),Dc=n("This model inherits from "),ua=a("a"),Ic=n("PreTrainedModel"),Wc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc=m(),Wn=a("p"),Hc=n("This model is also a PyTorch "),Xn=a("a"),Qc=n("torch.nn.Module"),Uc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc=m(),Hn=a("p"),Bc=n("This class overrides "),fa=a("a"),Vc=n("XLMForSequenceClassification"),Yc=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Gc=m(),Le=a("div"),v(Qn.$$.fragment),Kc=m(),Dt=a("p"),Jc=n("The "),ga=a("a"),Zc=n("XLMForSequenceClassification"),ep=n(" forward method, overrides the "),Fr=a("code"),tp=n("__call__"),op=n(" special method."),np=m(),v(wo.$$.fragment),sp=m(),v(Fo.$$.fragment),ap=m(),v(yo.$$.fragment),rp=m(),v($o.$$.fragment),ip=m(),v(Mo.$$.fragment),Gi=m(),It=a("h2"),xo=a("a"),yr=a("span"),v(Un.$$.fragment),lp=m(),$r=a("span"),dp=n("FlaubertForMultipleChoice"),Ki=m(),Ae=a("div"),v(Rn.$$.fragment),cp=m(),Mr=a("p"),pp=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),mp=m(),Bn=a("p"),hp=n("This model inherits from "),_a=a("a"),up=n("PreTrainedModel"),fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=m(),Vn=a("p"),_p=n("This model is also a PyTorch "),Yn=a("a"),bp=n("torch.nn.Module"),kp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=m(),Gn=a("p"),vp=n("This class overrides "),ba=a("a"),wp=n("XLMForMultipleChoice"),Fp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),yp=m(),ot=a("div"),v(Kn.$$.fragment),$p=m(),Wt=a("p"),Mp=n("The "),ka=a("a"),xp=n("XLMForMultipleChoice"),Ep=n(" forward method, overrides the "),xr=a("code"),Cp=n("__call__"),zp=n(" special method."),qp=m(),v(Eo.$$.fragment),Lp=m(),v(Co.$$.fragment),Ji=m(),Xt=a("h2"),zo=a("a"),Er=a("span"),v(Jn.$$.fragment),jp=m(),Cr=a("span"),Pp=n("FlaubertForTokenClassification"),Zi=m(),Ne=a("div"),v(Zn.$$.fragment),Ap=m(),zr=a("p"),Np=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sp=m(),es=a("p"),Op=n("This model inherits from "),Ta=a("a"),Dp=n("PreTrainedModel"),Ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp=m(),ts=a("p"),Xp=n("This model is also a PyTorch "),os=a("a"),Hp=n("torch.nn.Module"),Qp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up=m(),ns=a("p"),Rp=n("This class overrides "),va=a("a"),Bp=n("XLMForTokenClassification"),Vp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Yp=m(),Ve=a("div"),v(ss.$$.fragment),Gp=m(),Ht=a("p"),Kp=n("The "),wa=a("a"),Jp=n("XLMForTokenClassification"),Zp=n(" forward method, overrides the "),qr=a("code"),em=n("__call__"),tm=n(" special method."),om=m(),v(qo.$$.fragment),nm=m(),v(Lo.$$.fragment),sm=m(),v(jo.$$.fragment),el=m(),Qt=a("h2"),Po=a("a"),Lr=a("span"),v(as.$$.fragment),am=m(),jr=a("span"),rm=n("FlaubertForQuestionAnsweringSimple"),tl=m(),Se=a("div"),v(rs.$$.fragment),im=m(),Ut=a("p"),lm=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=a("code"),dm=n("span start logits"),cm=n(" and "),Ar=a("code"),pm=n("span end logits"),mm=n(")."),hm=m(),is=a("p"),um=n("This model inherits from "),Fa=a("a"),fm=n("PreTrainedModel"),gm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m=m(),ls=a("p"),bm=n("This model is also a PyTorch "),ds=a("a"),km=n("torch.nn.Module"),Tm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vm=m(),cs=a("p"),wm=n("This class overrides "),ya=a("a"),Fm=n("XLMForQuestionAnsweringSimple"),ym=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$m=m(),Ye=a("div"),v(ps.$$.fragment),Mm=m(),Rt=a("p"),xm=n("The "),$a=a("a"),Em=n("XLMForQuestionAnsweringSimple"),Cm=n(" forward method, overrides the "),Nr=a("code"),zm=n("__call__"),qm=n(" special method."),Lm=m(),v(Ao.$$.fragment),jm=m(),v(No.$$.fragment),Pm=m(),v(So.$$.fragment),ol=m(),Bt=a("h2"),Oo=a("a"),Sr=a("span"),v(ms.$$.fragment),Am=m(),Or=a("span"),Nm=n("FlaubertForQuestionAnswering"),nl=m(),Oe=a("div"),v(hs.$$.fragment),Sm=m(),Vt=a("p"),Om=n(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=a("code"),Dm=n("span start logits"),Im=n(" and "),Ir=a("code"),Wm=n("span end logits"),Xm=n(")."),Hm=m(),us=a("p"),Qm=n("This model inherits from "),Ma=a("a"),Um=n("PreTrainedModel"),Rm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bm=m(),fs=a("p"),Vm=n("This model is also a PyTorch "),gs=a("a"),Ym=n("torch.nn.Module"),Gm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Km=m(),_s=a("p"),Jm=n("This class overrides "),xa=a("a"),Zm=n("XLMForQuestionAnswering"),eh=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),th=m(),nt=a("div"),v(bs.$$.fragment),oh=m(),Yt=a("p"),nh=n("The "),Ea=a("a"),sh=n("XLMForQuestionAnswering"),ah=n(" forward method, overrides the "),Wr=a("code"),rh=n("__call__"),ih=n(" special method."),lh=m(),v(Do.$$.fragment),dh=m(),v(Io.$$.fragment),sl=m(),Gt=a("h2"),Wo=a("a"),Xr=a("span"),v(ks.$$.fragment),ch=m(),Hr=a("span"),ph=n("TFFlaubertModel"),al=m(),De=a("div"),v(Ts.$$.fragment),mh=m(),Qr=a("p"),hh=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),uh=m(),vs=a("p"),fh=n("This model inherits from "),Ca=a("a"),gh=n("TFPreTrainedModel"),_h=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh=m(),ws=a("p"),kh=n("This model is also a "),Fs=a("a"),Th=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wh=m(),v(Xo.$$.fragment),Fh=m(),st=a("div"),v(ys.$$.fragment),yh=m(),Kt=a("p"),$h=n("The "),za=a("a"),Mh=n("TFFlaubertModel"),xh=n(" forward method, overrides the "),Ur=a("code"),Eh=n("__call__"),Ch=n(" special method."),zh=m(),v(Ho.$$.fragment),qh=m(),v(Qo.$$.fragment),rl=m(),Jt=a("h2"),Uo=a("a"),Rr=a("span"),v($s.$$.fragment),Lh=m(),Br=a("span"),jh=n("TFFlaubertWithLMHeadModel"),il=m(),Ie=a("div"),v(Ms.$$.fragment),Ph=m(),Vr=a("p"),Ah=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nh=m(),xs=a("p"),Sh=n("This model inherits from "),qa=a("a"),Oh=n("TFPreTrainedModel"),Dh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih=m(),Es=a("p"),Wh=n("This model is also a "),Cs=a("a"),Xh=n("tf.keras.Model"),Hh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qh=m(),v(Ro.$$.fragment),Uh=m(),at=a("div"),v(zs.$$.fragment),Rh=m(),Zt=a("p"),Bh=n("The "),La=a("a"),Vh=n("TFFlaubertWithLMHeadModel"),Yh=n(" forward method, overrides the "),Yr=a("code"),Gh=n("__call__"),Kh=n(" special method."),Jh=m(),v(Bo.$$.fragment),Zh=m(),v(Vo.$$.fragment),ll=m(),eo=a("h2"),Yo=a("a"),Gr=a("span"),v(qs.$$.fragment),eu=m(),Kr=a("span"),tu=n("TFFlaubertForSequenceClassification"),dl=m(),We=a("div"),v(Ls.$$.fragment),ou=m(),Jr=a("p"),nu=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),su=m(),js=a("p"),au=n("This model inherits from "),ja=a("a"),ru=n("TFPreTrainedModel"),iu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu=m(),Ps=a("p"),du=n("This model is also a "),As=a("a"),cu=n("tf.keras.Model"),pu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mu=m(),v(Go.$$.fragment),hu=m(),Ge=a("div"),v(Ns.$$.fragment),uu=m(),to=a("p"),fu=n("The "),Pa=a("a"),gu=n("TFXLMForSequenceClassification"),_u=n(" forward method, overrides the "),Zr=a("code"),bu=n("__call__"),ku=n(" special method."),Tu=m(),v(Ko.$$.fragment),vu=m(),v(Jo.$$.fragment),wu=m(),v(Zo.$$.fragment),cl=m(),oo=a("h2"),en=a("a"),ei=a("span"),v(Ss.$$.fragment),Fu=m(),ti=a("span"),yu=n("TFFlaubertForMultipleChoice"),pl=m(),Xe=a("div"),v(Os.$$.fragment),$u=m(),oi=a("p"),Mu=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xu=m(),Ds=a("p"),Eu=n("This model inherits from "),Aa=a("a"),Cu=n("TFPreTrainedModel"),zu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu=m(),Is=a("p"),Lu=n("This model is also a "),Ws=a("a"),ju=n("tf.keras.Model"),Pu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au=m(),v(tn.$$.fragment),Nu=m(),rt=a("div"),v(Xs.$$.fragment),Su=m(),no=a("p"),Ou=n("The "),Na=a("a"),Du=n("TFXLMForMultipleChoice"),Iu=n(" forward method, overrides the "),ni=a("code"),Wu=n("__call__"),Xu=n(" special method."),Hu=m(),v(on.$$.fragment),Qu=m(),v(nn.$$.fragment),ml=m(),so=a("h2"),sn=a("a"),si=a("span"),v(Hs.$$.fragment),Uu=m(),ai=a("span"),Ru=n("TFFlaubertForTokenClassification"),hl=m(),He=a("div"),v(Qs.$$.fragment),Bu=m(),ri=a("p"),Vu=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Yu=m(),Us=a("p"),Gu=n("This model inherits from "),Sa=a("a"),Ku=n("TFPreTrainedModel"),Ju=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu=m(),Rs=a("p"),ef=n("This model is also a "),Bs=a("a"),tf=n("tf.keras.Model"),of=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=m(),v(an.$$.fragment),sf=m(),Ke=a("div"),v(Vs.$$.fragment),af=m(),ao=a("p"),rf=n("The "),Oa=a("a"),lf=n("TFXLMForTokenClassification"),df=n(" forward method, overrides the "),ii=a("code"),cf=n("__call__"),pf=n(" special method."),mf=m(),v(rn.$$.fragment),hf=m(),v(ln.$$.fragment),uf=m(),v(dn.$$.fragment),ul=m(),ro=a("h2"),cn=a("a"),li=a("span"),v(Ys.$$.fragment),ff=m(),di=a("span"),gf=n("TFFlaubertForQuestionAnsweringSimple"),fl=m(),Qe=a("div"),v(Gs.$$.fragment),_f=m(),io=a("p"),bf=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=a("code"),kf=n("span start logits"),Tf=n(" and "),pi=a("code"),vf=n("span end logits"),wf=n(")."),Ff=m(),Ks=a("p"),yf=n("This model inherits from "),Da=a("a"),$f=n("TFPreTrainedModel"),Mf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=m(),Js=a("p"),Ef=n("This model is also a "),Zs=a("a"),Cf=n("tf.keras.Model"),zf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=m(),v(pn.$$.fragment),Lf=m(),Je=a("div"),v(ea.$$.fragment),jf=m(),lo=a("p"),Pf=n("The "),Ia=a("a"),Af=n("TFXLMForQuestionAnsweringSimple"),Nf=n(" forward method, overrides the "),mi=a("code"),Sf=n("__call__"),Of=n(" special method."),Df=m(),v(mn.$$.fragment),If=m(),v(hn.$$.fragment),Wf=m(),v(un.$$.fragment),this.h()},l(o){const T=J_('[data-svelte="svelte-1phssyn"]',document.head);d=r(T,"META",{name:!0,content:!0}),T.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var ta=i(c);p=r(ta,"A",{id:!0,class:!0,href:!0});var hi=i(p);k=r(hi,"SPAN",{});var ui=i(k);w(l.$$.fragment,ui),ui.forEach(t),hi.forEach(t),u=h(ta),C=r(ta,"SPAN",{});var fi=i(C);ce=s(fi,"FlauBERT"),fi.forEach(t),ta.forEach(t),Y=h(o),z=r(o,"H2",{class:!0});var oa=i(z);J=r(oa,"A",{id:!0,class:!0,href:!0});var gi=i(J);H=r(gi,"SPAN",{});var _i=i(H);w(Z.$$.fragment,_i),_i.forEach(t),gi.forEach(t),pe=h(oa),Q=r(oa,"SPAN",{});var bi=i(Q);me=s(bi,"Overview"),bi.forEach(t),oa.forEach(t),re=h(o),B=r(o,"P",{});var na=i(B);N=s(na,"The FlauBERT model was proposed in the paper "),ee=r(na,"A",{href:!0,rel:!0});var ki=i(ee);G=s(ki,"FlauBERT: Unsupervised Language Model Pre-training for French"),ki.forEach(t),q=s(na,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),na.forEach(t),j=h(o),oe=r(o,"P",{});var Ti=i(oe);R=s(Ti,"The abstract from the paper is the following:"),Ti.forEach(t),ie=h(o),ne=r(o,"P",{});var vi=i(ne);U=r(vi,"EM",{});var wi=i(U);he=s(wi,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),wi.forEach(t),vi.forEach(t),le=h(o),L=r(o,"P",{});var co=i(L);ue=s(co,"This model was contributed by "),D=r(co,"A",{href:!0,rel:!0});var Fi=i(D);fe=s(Fi,"formiel"),Fi.forEach(t),ge=s(co,". The original code can be found "),I=r(co,"A",{href:!0,rel:!0});var yi=i(I);_e=s(yi,"here"),yi.forEach(t),be=s(co,"."),co.forEach(t),A=h(o),K=r(o,"H2",{class:!0});var sa=i(K);O=r(sa,"A",{id:!0,class:!0,href:!0});var $i=i(O);se=r($i,"SPAN",{});var Mi=i(se);w(f.$$.fragment,Mi),Mi.forEach(t),$i.forEach(t),E=h(sa),V=r(sa,"SPAN",{});var xi=i(V);ye=s(xi,"FlaubertConfig"),xi.forEach(t),sa.forEach(t),Te=h(o),P=r(o,"DIV",{class:!0});var po=i(P);w(ke.$$.fragment,po),$e=h(po),ae=r(po,"P",{});var vt=i(ae);S=s(vt,"This is the configuration class to store the configuration of a "),W=r(vt,"A",{href:!0});var Ei=i(W);Me=s(Ei,"FlaubertModel"),Ei.forEach(t),xe=s(vt," or a "),X=r(vt,"A",{href:!0});var Ci=i(X);Ee=s(Ci,"TFFlaubertModel"),Ci.forEach(t),Ce=s(vt,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),te=r(vt,"A",{href:!0,rel:!0});var zi=i(te);ze=s(zi,"flaubert/flaubert_base_uncased"),zi.forEach(t),cd=s(vt," architecture."),vt.forEach(t),pd=h(po),Lt=r(po,"P",{});var mo=i(Lt);md=s(mo,"Configuration objects inherit from "),ra=r(mo,"A",{href:!0});var qi=i(ra);hd=s(qi,"PretrainedConfig"),qi.forEach(t),ud=s(mo,` and can be used to control the model outputs. Read the
documentation from `),ia=r(mo,"A",{href:!0});var Li=i(ia);fd=s(Li,"PretrainedConfig"),Li.forEach(t),gd=s(mo," for more information."),mo.forEach(t),po.forEach(t),Xi=h(o),jt=r(o,"H2",{class:!0});var aa=i(jt);ho=r(aa,"A",{id:!0,class:!0,href:!0});var ji=i(ho);nr=r(ji,"SPAN",{});var Pi=i(nr);w(vn.$$.fragment,Pi),Pi.forEach(t),ji.forEach(t),_d=h(aa),sr=r(aa,"SPAN",{});var Ai=i(sr);bd=s(Ai,"FlaubertTokenizer"),Ai.forEach(t),aa.forEach(t),Hi=h(o),et=r(o,"DIV",{class:!0});var wt=i(et);w(wn.$$.fragment,wt),kd=h(wt),ar=r(wt,"P",{});var Ni=i(ar);Td=s(Ni,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Ni.forEach(t),vd=h(wt),kt=r(wt,"UL",{});var Ft=i(kt);rr=r(Ft,"LI",{});var Si=i(rr);wd=s(Si,"Moses preprocessing and tokenization."),Si.forEach(t),Fd=h(Ft),ir=r(Ft,"LI",{});var Oi=i(ir);yd=s(Oi,"Normalizing all inputs text."),Oi.forEach(t),$d=h(Ft),Tt=r(Ft,"LI",{});var yt=i(Tt);Md=s(yt,"The arguments "),lr=r(yt,"CODE",{});var Di=i(lr);xd=s(Di,"special_tokens"),Di.forEach(t),Ed=s(yt," and the function "),dr=r(yt,"CODE",{});var Ii=i(dr);Cd=s(Ii,"set_special_tokens"),Ii.forEach(t),zd=s(yt,`, can be used to add additional symbols (like
\u201D`),cr=r(yt,"STRONG",{});var Wi=i(cr);qd=s(Wi,"classify"),Wi.forEach(t),Ld=s(yt,"\u201D) to a vocabulary."),yt.forEach(t),jd=h(Ft),Fn=r(Ft,"LI",{});var _l=i(Fn);Pd=s(_l,"The argument "),pr=r(_l,"CODE",{});var Xf=i(pr);Ad=s(Xf,"do_lowercase"),Xf.forEach(t),Nd=s(_l," controls lower casing (automatically set for pretrained vocabularies)."),_l.forEach(t),Ft.forEach(t),Sd=h(wt),yn=r(wt,"P",{});var bl=i(yn);Od=s(bl,"This tokenizer inherits from "),la=r(bl,"A",{href:!0});var Hf=i(la);Dd=s(Hf,"XLMTokenizer"),Hf.forEach(t),Id=s(bl,`. Please check the superclass for usage examples and documentation
regarding arguments.`),bl.forEach(t),wt.forEach(t),Qi=h(o),Pt=r(o,"H2",{class:!0});var kl=i(Pt);uo=r(kl,"A",{id:!0,class:!0,href:!0});var Qf=i(uo);mr=r(Qf,"SPAN",{});var Uf=i(mr);w($n.$$.fragment,Uf),Uf.forEach(t),Qf.forEach(t),Wd=h(kl),hr=r(kl,"SPAN",{});var Rf=i(hr);Xd=s(Rf,"FlaubertModel"),Rf.forEach(t),kl.forEach(t),Ui=h(o),Re=r(o,"DIV",{class:!0});var $t=i(Re);w(Mn.$$.fragment,$t),Hd=h($t),ur=r($t,"P",{});var Bf=i(ur);Qd=s(Bf,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Bf.forEach(t),Ud=h($t),xn=r($t,"P",{});var Tl=i(xn);Rd=s(Tl,"This model inherits from "),da=r(Tl,"A",{href:!0});var Vf=i(da);Bd=s(Vf,"PreTrainedModel"),Vf.forEach(t),Vd=s(Tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl.forEach(t),Yd=h($t),En=r($t,"P",{});var vl=i(En);Gd=s(vl,"This model is also a PyTorch "),Cn=r(vl,"A",{href:!0,rel:!0});var Yf=i(Cn);Kd=s(Yf,"torch.nn.Module"),Yf.forEach(t),Jd=s(vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl.forEach(t),Zd=h($t),tt=r($t,"DIV",{class:!0});var fn=i(tt);w(zn.$$.fragment,fn),ec=h(fn),At=r(fn,"P",{});var Wa=i(At);tc=s(Wa,"The "),ca=r(Wa,"A",{href:!0});var Gf=i(ca);oc=s(Gf,"FlaubertModel"),Gf.forEach(t),nc=s(Wa," forward method, overrides the "),fr=r(Wa,"CODE",{});var Kf=i(fr);sc=s(Kf,"__call__"),Kf.forEach(t),ac=s(Wa," special method."),Wa.forEach(t),rc=h(fn),w(fo.$$.fragment,fn),ic=h(fn),w(go.$$.fragment,fn),fn.forEach(t),$t.forEach(t),Ri=h(o),Nt=r(o,"H2",{class:!0});var wl=i(Nt);_o=r(wl,"A",{id:!0,class:!0,href:!0});var Jf=i(_o);gr=r(Jf,"SPAN",{});var Zf=i(gr);w(qn.$$.fragment,Zf),Zf.forEach(t),Jf.forEach(t),lc=h(wl),_r=r(wl,"SPAN",{});var eg=i(_r);dc=s(eg,"FlaubertWithLMHeadModel"),eg.forEach(t),wl.forEach(t),Bi=h(o),je=r(o,"DIV",{class:!0});var it=i(je);w(Ln.$$.fragment,it),cc=h(it),br=r(it,"P",{});var tg=i(br);pc=s(tg,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tg.forEach(t),mc=h(it),jn=r(it,"P",{});var Fl=i(jn);hc=s(Fl,"This model inherits from "),pa=r(Fl,"A",{href:!0});var og=i(pa);uc=s(og,"PreTrainedModel"),og.forEach(t),fc=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),gc=h(it),Pn=r(it,"P",{});var yl=i(Pn);_c=s(yl,"This model is also a PyTorch "),An=r(yl,"A",{href:!0,rel:!0});var ng=i(An);bc=s(ng,"torch.nn.Module"),ng.forEach(t),kc=s(yl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl.forEach(t),Tc=h(it),Nn=r(it,"P",{});var $l=i(Nn);vc=s($l,"This class overrides "),ma=r($l,"A",{href:!0});var sg=i(ma);wc=s(sg,"XLMWithLMHeadModel"),sg.forEach(t),Fc=s($l,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),$l.forEach(t),yc=h(it),Be=r(it,"DIV",{class:!0});var Mt=i(Be);w(Sn.$$.fragment,Mt),$c=h(Mt),St=r(Mt,"P",{});var Xa=i(St);Mc=s(Xa,"The "),ha=r(Xa,"A",{href:!0});var ag=i(ha);xc=s(ag,"XLMWithLMHeadModel"),ag.forEach(t),Ec=s(Xa," forward method, overrides the "),kr=r(Xa,"CODE",{});var rg=i(kr);Cc=s(rg,"__call__"),rg.forEach(t),zc=s(Xa," special method."),Xa.forEach(t),qc=h(Mt),w(bo.$$.fragment,Mt),Lc=h(Mt),w(ko.$$.fragment,Mt),jc=h(Mt),w(To.$$.fragment,Mt),Mt.forEach(t),it.forEach(t),Vi=h(o),Ot=r(o,"H2",{class:!0});var Ml=i(Ot);vo=r(Ml,"A",{id:!0,class:!0,href:!0});var ig=i(vo);Tr=r(ig,"SPAN",{});var lg=i(Tr);w(On.$$.fragment,lg),lg.forEach(t),ig.forEach(t),Pc=h(Ml),vr=r(Ml,"SPAN",{});var dg=i(vr);Ac=s(dg,"FlaubertForSequenceClassification"),dg.forEach(t),Ml.forEach(t),Yi=h(o),Pe=r(o,"DIV",{class:!0});var lt=i(Pe);w(Dn.$$.fragment,lt),Nc=h(lt),wr=r(lt,"P",{});var cg=i(wr);Sc=s(cg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),cg.forEach(t),Oc=h(lt),In=r(lt,"P",{});var xl=i(In);Dc=s(xl,"This model inherits from "),ua=r(xl,"A",{href:!0});var pg=i(ua);Ic=s(pg,"PreTrainedModel"),pg.forEach(t),Wc=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Xc=h(lt),Wn=r(lt,"P",{});var El=i(Wn);Hc=s(El,"This model is also a PyTorch "),Xn=r(El,"A",{href:!0,rel:!0});var mg=i(Xn);Qc=s(mg,"torch.nn.Module"),mg.forEach(t),Uc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),Rc=h(lt),Hn=r(lt,"P",{});var Cl=i(Hn);Bc=s(Cl,"This class overrides "),fa=r(Cl,"A",{href:!0});var hg=i(fa);Vc=s(hg,"XLMForSequenceClassification"),hg.forEach(t),Yc=s(Cl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Cl.forEach(t),Gc=h(lt),Le=r(lt,"DIV",{class:!0});var Ze=i(Le);w(Qn.$$.fragment,Ze),Kc=h(Ze),Dt=r(Ze,"P",{});var Ha=i(Dt);Jc=s(Ha,"The "),ga=r(Ha,"A",{href:!0});var ug=i(ga);Zc=s(ug,"XLMForSequenceClassification"),ug.forEach(t),ep=s(Ha," forward method, overrides the "),Fr=r(Ha,"CODE",{});var fg=i(Fr);tp=s(fg,"__call__"),fg.forEach(t),op=s(Ha," special method."),Ha.forEach(t),np=h(Ze),w(wo.$$.fragment,Ze),sp=h(Ze),w(Fo.$$.fragment,Ze),ap=h(Ze),w(yo.$$.fragment,Ze),rp=h(Ze),w($o.$$.fragment,Ze),ip=h(Ze),w(Mo.$$.fragment,Ze),Ze.forEach(t),lt.forEach(t),Gi=h(o),It=r(o,"H2",{class:!0});var zl=i(It);xo=r(zl,"A",{id:!0,class:!0,href:!0});var gg=i(xo);yr=r(gg,"SPAN",{});var _g=i(yr);w(Un.$$.fragment,_g),_g.forEach(t),gg.forEach(t),lp=h(zl),$r=r(zl,"SPAN",{});var bg=i($r);dp=s(bg,"FlaubertForMultipleChoice"),bg.forEach(t),zl.forEach(t),Ki=h(o),Ae=r(o,"DIV",{class:!0});var dt=i(Ae);w(Rn.$$.fragment,dt),cp=h(dt),Mr=r(dt,"P",{});var kg=i(Mr);pp=s(kg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),kg.forEach(t),mp=h(dt),Bn=r(dt,"P",{});var ql=i(Bn);hp=s(ql,"This model inherits from "),_a=r(ql,"A",{href:!0});var Tg=i(_a);up=s(Tg,"PreTrainedModel"),Tg.forEach(t),fp=s(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),gp=h(dt),Vn=r(dt,"P",{});var Ll=i(Vn);_p=s(Ll,"This model is also a PyTorch "),Yn=r(Ll,"A",{href:!0,rel:!0});var vg=i(Yn);bp=s(vg,"torch.nn.Module"),vg.forEach(t),kp=s(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),Tp=h(dt),Gn=r(dt,"P",{});var jl=i(Gn);vp=s(jl,"This class overrides "),ba=r(jl,"A",{href:!0});var wg=i(ba);wp=s(wg,"XLMForMultipleChoice"),wg.forEach(t),Fp=s(jl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),jl.forEach(t),yp=h(dt),ot=r(dt,"DIV",{class:!0});var gn=i(ot);w(Kn.$$.fragment,gn),$p=h(gn),Wt=r(gn,"P",{});var Qa=i(Wt);Mp=s(Qa,"The "),ka=r(Qa,"A",{href:!0});var Fg=i(ka);xp=s(Fg,"XLMForMultipleChoice"),Fg.forEach(t),Ep=s(Qa," forward method, overrides the "),xr=r(Qa,"CODE",{});var yg=i(xr);Cp=s(yg,"__call__"),yg.forEach(t),zp=s(Qa," special method."),Qa.forEach(t),qp=h(gn),w(Eo.$$.fragment,gn),Lp=h(gn),w(Co.$$.fragment,gn),gn.forEach(t),dt.forEach(t),Ji=h(o),Xt=r(o,"H2",{class:!0});var Pl=i(Xt);zo=r(Pl,"A",{id:!0,class:!0,href:!0});var $g=i(zo);Er=r($g,"SPAN",{});var Mg=i(Er);w(Jn.$$.fragment,Mg),Mg.forEach(t),$g.forEach(t),jp=h(Pl),Cr=r(Pl,"SPAN",{});var xg=i(Cr);Pp=s(xg,"FlaubertForTokenClassification"),xg.forEach(t),Pl.forEach(t),Zi=h(o),Ne=r(o,"DIV",{class:!0});var ct=i(Ne);w(Zn.$$.fragment,ct),Ap=h(ct),zr=r(ct,"P",{});var Eg=i(zr);Np=s(Eg,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Eg.forEach(t),Sp=h(ct),es=r(ct,"P",{});var Al=i(es);Op=s(Al,"This model inherits from "),Ta=r(Al,"A",{href:!0});var Cg=i(Ta);Dp=s(Cg,"PreTrainedModel"),Cg.forEach(t),Ip=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),Wp=h(ct),ts=r(ct,"P",{});var Nl=i(ts);Xp=s(Nl,"This model is also a PyTorch "),os=r(Nl,"A",{href:!0,rel:!0});var zg=i(os);Hp=s(zg,"torch.nn.Module"),zg.forEach(t),Qp=s(Nl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl.forEach(t),Up=h(ct),ns=r(ct,"P",{});var Sl=i(ns);Rp=s(Sl,"This class overrides "),va=r(Sl,"A",{href:!0});var qg=i(va);Bp=s(qg,"XLMForTokenClassification"),qg.forEach(t),Vp=s(Sl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Sl.forEach(t),Yp=h(ct),Ve=r(ct,"DIV",{class:!0});var xt=i(Ve);w(ss.$$.fragment,xt),Gp=h(xt),Ht=r(xt,"P",{});var Ua=i(Ht);Kp=s(Ua,"The "),wa=r(Ua,"A",{href:!0});var Lg=i(wa);Jp=s(Lg,"XLMForTokenClassification"),Lg.forEach(t),Zp=s(Ua," forward method, overrides the "),qr=r(Ua,"CODE",{});var jg=i(qr);em=s(jg,"__call__"),jg.forEach(t),tm=s(Ua," special method."),Ua.forEach(t),om=h(xt),w(qo.$$.fragment,xt),nm=h(xt),w(Lo.$$.fragment,xt),sm=h(xt),w(jo.$$.fragment,xt),xt.forEach(t),ct.forEach(t),el=h(o),Qt=r(o,"H2",{class:!0});var Ol=i(Qt);Po=r(Ol,"A",{id:!0,class:!0,href:!0});var Pg=i(Po);Lr=r(Pg,"SPAN",{});var Ag=i(Lr);w(as.$$.fragment,Ag),Ag.forEach(t),Pg.forEach(t),am=h(Ol),jr=r(Ol,"SPAN",{});var Ng=i(jr);rm=s(Ng,"FlaubertForQuestionAnsweringSimple"),Ng.forEach(t),Ol.forEach(t),tl=h(o),Se=r(o,"DIV",{class:!0});var pt=i(Se);w(rs.$$.fragment,pt),im=h(pt),Ut=r(pt,"P",{});var Ra=i(Ut);lm=s(Ra,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=r(Ra,"CODE",{});var Sg=i(Pr);dm=s(Sg,"span start logits"),Sg.forEach(t),cm=s(Ra," and "),Ar=r(Ra,"CODE",{});var Og=i(Ar);pm=s(Og,"span end logits"),Og.forEach(t),mm=s(Ra,")."),Ra.forEach(t),hm=h(pt),is=r(pt,"P",{});var Dl=i(is);um=s(Dl,"This model inherits from "),Fa=r(Dl,"A",{href:!0});var Dg=i(Fa);fm=s(Dg,"PreTrainedModel"),Dg.forEach(t),gm=s(Dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl.forEach(t),_m=h(pt),ls=r(pt,"P",{});var Il=i(ls);bm=s(Il,"This model is also a PyTorch "),ds=r(Il,"A",{href:!0,rel:!0});var Ig=i(ds);km=s(Ig,"torch.nn.Module"),Ig.forEach(t),Tm=s(Il,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il.forEach(t),vm=h(pt),cs=r(pt,"P",{});var Wl=i(cs);wm=s(Wl,"This class overrides "),ya=r(Wl,"A",{href:!0});var Wg=i(ya);Fm=s(Wg,"XLMForQuestionAnsweringSimple"),Wg.forEach(t),ym=s(Wl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Wl.forEach(t),$m=h(pt),Ye=r(pt,"DIV",{class:!0});var Et=i(Ye);w(ps.$$.fragment,Et),Mm=h(Et),Rt=r(Et,"P",{});var Ba=i(Rt);xm=s(Ba,"The "),$a=r(Ba,"A",{href:!0});var Xg=i($a);Em=s(Xg,"XLMForQuestionAnsweringSimple"),Xg.forEach(t),Cm=s(Ba," forward method, overrides the "),Nr=r(Ba,"CODE",{});var Hg=i(Nr);zm=s(Hg,"__call__"),Hg.forEach(t),qm=s(Ba," special method."),Ba.forEach(t),Lm=h(Et),w(Ao.$$.fragment,Et),jm=h(Et),w(No.$$.fragment,Et),Pm=h(Et),w(So.$$.fragment,Et),Et.forEach(t),pt.forEach(t),ol=h(o),Bt=r(o,"H2",{class:!0});var Xl=i(Bt);Oo=r(Xl,"A",{id:!0,class:!0,href:!0});var Qg=i(Oo);Sr=r(Qg,"SPAN",{});var Ug=i(Sr);w(ms.$$.fragment,Ug),Ug.forEach(t),Qg.forEach(t),Am=h(Xl),Or=r(Xl,"SPAN",{});var Rg=i(Or);Nm=s(Rg,"FlaubertForQuestionAnswering"),Rg.forEach(t),Xl.forEach(t),nl=h(o),Oe=r(o,"DIV",{class:!0});var mt=i(Oe);w(hs.$$.fragment,mt),Sm=h(mt),Vt=r(mt,"P",{});var Va=i(Vt);Om=s(Va,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=r(Va,"CODE",{});var Bg=i(Dr);Dm=s(Bg,"span start logits"),Bg.forEach(t),Im=s(Va," and "),Ir=r(Va,"CODE",{});var Vg=i(Ir);Wm=s(Vg,"span end logits"),Vg.forEach(t),Xm=s(Va,")."),Va.forEach(t),Hm=h(mt),us=r(mt,"P",{});var Hl=i(us);Qm=s(Hl,"This model inherits from "),Ma=r(Hl,"A",{href:!0});var Yg=i(Ma);Um=s(Yg,"PreTrainedModel"),Yg.forEach(t),Rm=s(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Bm=h(mt),fs=r(mt,"P",{});var Ql=i(fs);Vm=s(Ql,"This model is also a PyTorch "),gs=r(Ql,"A",{href:!0,rel:!0});var Gg=i(gs);Ym=s(Gg,"torch.nn.Module"),Gg.forEach(t),Gm=s(Ql,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql.forEach(t),Km=h(mt),_s=r(mt,"P",{});var Ul=i(_s);Jm=s(Ul,"This class overrides "),xa=r(Ul,"A",{href:!0});var Kg=i(xa);Zm=s(Kg,"XLMForQuestionAnswering"),Kg.forEach(t),eh=s(Ul,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Ul.forEach(t),th=h(mt),nt=r(mt,"DIV",{class:!0});var _n=i(nt);w(bs.$$.fragment,_n),oh=h(_n),Yt=r(_n,"P",{});var Ya=i(Yt);nh=s(Ya,"The "),Ea=r(Ya,"A",{href:!0});var Jg=i(Ea);sh=s(Jg,"XLMForQuestionAnswering"),Jg.forEach(t),ah=s(Ya," forward method, overrides the "),Wr=r(Ya,"CODE",{});var Zg=i(Wr);rh=s(Zg,"__call__"),Zg.forEach(t),ih=s(Ya," special method."),Ya.forEach(t),lh=h(_n),w(Do.$$.fragment,_n),dh=h(_n),w(Io.$$.fragment,_n),_n.forEach(t),mt.forEach(t),sl=h(o),Gt=r(o,"H2",{class:!0});var Rl=i(Gt);Wo=r(Rl,"A",{id:!0,class:!0,href:!0});var e_=i(Wo);Xr=r(e_,"SPAN",{});var t_=i(Xr);w(ks.$$.fragment,t_),t_.forEach(t),e_.forEach(t),ch=h(Rl),Hr=r(Rl,"SPAN",{});var o_=i(Hr);ph=s(o_,"TFFlaubertModel"),o_.forEach(t),Rl.forEach(t),al=h(o),De=r(o,"DIV",{class:!0});var ht=i(De);w(Ts.$$.fragment,ht),mh=h(ht),Qr=r(ht,"P",{});var n_=i(Qr);hh=s(n_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),n_.forEach(t),uh=h(ht),vs=r(ht,"P",{});var Bl=i(vs);fh=s(Bl,"This model inherits from "),Ca=r(Bl,"A",{href:!0});var s_=i(Ca);gh=s(s_,"TFPreTrainedModel"),s_.forEach(t),_h=s(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),bh=h(ht),ws=r(ht,"P",{});var Vl=i(ws);kh=s(Vl,"This model is also a "),Fs=r(Vl,"A",{href:!0,rel:!0});var a_=i(Fs);Th=s(a_,"tf.keras.Model"),a_.forEach(t),vh=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),wh=h(ht),w(Xo.$$.fragment,ht),Fh=h(ht),st=r(ht,"DIV",{class:!0});var bn=i(st);w(ys.$$.fragment,bn),yh=h(bn),Kt=r(bn,"P",{});var Ga=i(Kt);$h=s(Ga,"The "),za=r(Ga,"A",{href:!0});var r_=i(za);Mh=s(r_,"TFFlaubertModel"),r_.forEach(t),xh=s(Ga," forward method, overrides the "),Ur=r(Ga,"CODE",{});var i_=i(Ur);Eh=s(i_,"__call__"),i_.forEach(t),Ch=s(Ga," special method."),Ga.forEach(t),zh=h(bn),w(Ho.$$.fragment,bn),qh=h(bn),w(Qo.$$.fragment,bn),bn.forEach(t),ht.forEach(t),rl=h(o),Jt=r(o,"H2",{class:!0});var Yl=i(Jt);Uo=r(Yl,"A",{id:!0,class:!0,href:!0});var l_=i(Uo);Rr=r(l_,"SPAN",{});var d_=i(Rr);w($s.$$.fragment,d_),d_.forEach(t),l_.forEach(t),Lh=h(Yl),Br=r(Yl,"SPAN",{});var c_=i(Br);jh=s(c_,"TFFlaubertWithLMHeadModel"),c_.forEach(t),Yl.forEach(t),il=h(o),Ie=r(o,"DIV",{class:!0});var ut=i(Ie);w(Ms.$$.fragment,ut),Ph=h(ut),Vr=r(ut,"P",{});var p_=i(Vr);Ah=s(p_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),p_.forEach(t),Nh=h(ut),xs=r(ut,"P",{});var Gl=i(xs);Sh=s(Gl,"This model inherits from "),qa=r(Gl,"A",{href:!0});var m_=i(qa);Oh=s(m_,"TFPreTrainedModel"),m_.forEach(t),Dh=s(Gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl.forEach(t),Ih=h(ut),Es=r(ut,"P",{});var Kl=i(Es);Wh=s(Kl,"This model is also a "),Cs=r(Kl,"A",{href:!0,rel:!0});var h_=i(Cs);Xh=s(h_,"tf.keras.Model"),h_.forEach(t),Hh=s(Kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kl.forEach(t),Qh=h(ut),w(Ro.$$.fragment,ut),Uh=h(ut),at=r(ut,"DIV",{class:!0});var kn=i(at);w(zs.$$.fragment,kn),Rh=h(kn),Zt=r(kn,"P",{});var Ka=i(Zt);Bh=s(Ka,"The "),La=r(Ka,"A",{href:!0});var u_=i(La);Vh=s(u_,"TFFlaubertWithLMHeadModel"),u_.forEach(t),Yh=s(Ka," forward method, overrides the "),Yr=r(Ka,"CODE",{});var f_=i(Yr);Gh=s(f_,"__call__"),f_.forEach(t),Kh=s(Ka," special method."),Ka.forEach(t),Jh=h(kn),w(Bo.$$.fragment,kn),Zh=h(kn),w(Vo.$$.fragment,kn),kn.forEach(t),ut.forEach(t),ll=h(o),eo=r(o,"H2",{class:!0});var Jl=i(eo);Yo=r(Jl,"A",{id:!0,class:!0,href:!0});var g_=i(Yo);Gr=r(g_,"SPAN",{});var __=i(Gr);w(qs.$$.fragment,__),__.forEach(t),g_.forEach(t),eu=h(Jl),Kr=r(Jl,"SPAN",{});var b_=i(Kr);tu=s(b_,"TFFlaubertForSequenceClassification"),b_.forEach(t),Jl.forEach(t),dl=h(o),We=r(o,"DIV",{class:!0});var ft=i(We);w(Ls.$$.fragment,ft),ou=h(ft),Jr=r(ft,"P",{});var k_=i(Jr);nu=s(k_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),k_.forEach(t),su=h(ft),js=r(ft,"P",{});var Zl=i(js);au=s(Zl,"This model inherits from "),ja=r(Zl,"A",{href:!0});var T_=i(ja);ru=s(T_,"TFPreTrainedModel"),T_.forEach(t),iu=s(Zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zl.forEach(t),lu=h(ft),Ps=r(ft,"P",{});var ed=i(Ps);du=s(ed,"This model is also a "),As=r(ed,"A",{href:!0,rel:!0});var v_=i(As);cu=s(v_,"tf.keras.Model"),v_.forEach(t),pu=s(ed,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ed.forEach(t),mu=h(ft),w(Go.$$.fragment,ft),hu=h(ft),Ge=r(ft,"DIV",{class:!0});var Ct=i(Ge);w(Ns.$$.fragment,Ct),uu=h(Ct),to=r(Ct,"P",{});var Ja=i(to);fu=s(Ja,"The "),Pa=r(Ja,"A",{href:!0});var w_=i(Pa);gu=s(w_,"TFXLMForSequenceClassification"),w_.forEach(t),_u=s(Ja," forward method, overrides the "),Zr=r(Ja,"CODE",{});var F_=i(Zr);bu=s(F_,"__call__"),F_.forEach(t),ku=s(Ja," special method."),Ja.forEach(t),Tu=h(Ct),w(Ko.$$.fragment,Ct),vu=h(Ct),w(Jo.$$.fragment,Ct),wu=h(Ct),w(Zo.$$.fragment,Ct),Ct.forEach(t),ft.forEach(t),cl=h(o),oo=r(o,"H2",{class:!0});var td=i(oo);en=r(td,"A",{id:!0,class:!0,href:!0});var y_=i(en);ei=r(y_,"SPAN",{});var $_=i(ei);w(Ss.$$.fragment,$_),$_.forEach(t),y_.forEach(t),Fu=h(td),ti=r(td,"SPAN",{});var M_=i(ti);yu=s(M_,"TFFlaubertForMultipleChoice"),M_.forEach(t),td.forEach(t),pl=h(o),Xe=r(o,"DIV",{class:!0});var gt=i(Xe);w(Os.$$.fragment,gt),$u=h(gt),oi=r(gt,"P",{});var x_=i(oi);Mu=s(x_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x_.forEach(t),xu=h(gt),Ds=r(gt,"P",{});var od=i(Ds);Eu=s(od,"This model inherits from "),Aa=r(od,"A",{href:!0});var E_=i(Aa);Cu=s(E_,"TFPreTrainedModel"),E_.forEach(t),zu=s(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(t),qu=h(gt),Is=r(gt,"P",{});var nd=i(Is);Lu=s(nd,"This model is also a "),Ws=r(nd,"A",{href:!0,rel:!0});var C_=i(Ws);ju=s(C_,"tf.keras.Model"),C_.forEach(t),Pu=s(nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nd.forEach(t),Au=h(gt),w(tn.$$.fragment,gt),Nu=h(gt),rt=r(gt,"DIV",{class:!0});var Tn=i(rt);w(Xs.$$.fragment,Tn),Su=h(Tn),no=r(Tn,"P",{});var Za=i(no);Ou=s(Za,"The "),Na=r(Za,"A",{href:!0});var z_=i(Na);Du=s(z_,"TFXLMForMultipleChoice"),z_.forEach(t),Iu=s(Za," forward method, overrides the "),ni=r(Za,"CODE",{});var q_=i(ni);Wu=s(q_,"__call__"),q_.forEach(t),Xu=s(Za," special method."),Za.forEach(t),Hu=h(Tn),w(on.$$.fragment,Tn),Qu=h(Tn),w(nn.$$.fragment,Tn),Tn.forEach(t),gt.forEach(t),ml=h(o),so=r(o,"H2",{class:!0});var sd=i(so);sn=r(sd,"A",{id:!0,class:!0,href:!0});var L_=i(sn);si=r(L_,"SPAN",{});var j_=i(si);w(Hs.$$.fragment,j_),j_.forEach(t),L_.forEach(t),Uu=h(sd),ai=r(sd,"SPAN",{});var P_=i(ai);Ru=s(P_,"TFFlaubertForTokenClassification"),P_.forEach(t),sd.forEach(t),hl=h(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(Qs.$$.fragment,_t),Bu=h(_t),ri=r(_t,"P",{});var A_=i(ri);Vu=s(A_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A_.forEach(t),Yu=h(_t),Us=r(_t,"P",{});var ad=i(Us);Gu=s(ad,"This model inherits from "),Sa=r(ad,"A",{href:!0});var N_=i(Sa);Ku=s(N_,"TFPreTrainedModel"),N_.forEach(t),Ju=s(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Zu=h(_t),Rs=r(_t,"P",{});var rd=i(Rs);ef=s(rd,"This model is also a "),Bs=r(rd,"A",{href:!0,rel:!0});var S_=i(Bs);tf=s(S_,"tf.keras.Model"),S_.forEach(t),of=s(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),nf=h(_t),w(an.$$.fragment,_t),sf=h(_t),Ke=r(_t,"DIV",{class:!0});var zt=i(Ke);w(Vs.$$.fragment,zt),af=h(zt),ao=r(zt,"P",{});var er=i(ao);rf=s(er,"The "),Oa=r(er,"A",{href:!0});var O_=i(Oa);lf=s(O_,"TFXLMForTokenClassification"),O_.forEach(t),df=s(er," forward method, overrides the "),ii=r(er,"CODE",{});var D_=i(ii);cf=s(D_,"__call__"),D_.forEach(t),pf=s(er," special method."),er.forEach(t),mf=h(zt),w(rn.$$.fragment,zt),hf=h(zt),w(ln.$$.fragment,zt),uf=h(zt),w(dn.$$.fragment,zt),zt.forEach(t),_t.forEach(t),ul=h(o),ro=r(o,"H2",{class:!0});var id=i(ro);cn=r(id,"A",{id:!0,class:!0,href:!0});var I_=i(cn);li=r(I_,"SPAN",{});var W_=i(li);w(Ys.$$.fragment,W_),W_.forEach(t),I_.forEach(t),ff=h(id),di=r(id,"SPAN",{});var X_=i(di);gf=s(X_,"TFFlaubertForQuestionAnsweringSimple"),X_.forEach(t),id.forEach(t),fl=h(o),Qe=r(o,"DIV",{class:!0});var bt=i(Qe);w(Gs.$$.fragment,bt),_f=h(bt),io=r(bt,"P",{});var tr=i(io);bf=s(tr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=r(tr,"CODE",{});var H_=i(ci);kf=s(H_,"span start logits"),H_.forEach(t),Tf=s(tr," and "),pi=r(tr,"CODE",{});var Q_=i(pi);vf=s(Q_,"span end logits"),Q_.forEach(t),wf=s(tr,")."),tr.forEach(t),Ff=h(bt),Ks=r(bt,"P",{});var ld=i(Ks);yf=s(ld,"This model inherits from "),Da=r(ld,"A",{href:!0});var U_=i(Da);$f=s(U_,"TFPreTrainedModel"),U_.forEach(t),Mf=s(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),xf=h(bt),Js=r(bt,"P",{});var dd=i(Js);Ef=s(dd,"This model is also a "),Zs=r(dd,"A",{href:!0,rel:!0});var R_=i(Zs);Cf=s(R_,"tf.keras.Model"),R_.forEach(t),zf=s(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),qf=h(bt),w(pn.$$.fragment,bt),Lf=h(bt),Je=r(bt,"DIV",{class:!0});var qt=i(Je);w(ea.$$.fragment,qt),jf=h(qt),lo=r(qt,"P",{});var or=i(lo);Pf=s(or,"The "),Ia=r(or,"A",{href:!0});var B_=i(Ia);Af=s(B_,"TFXLMForQuestionAnsweringSimple"),B_.forEach(t),Nf=s(or," forward method, overrides the "),mi=r(or,"CODE",{});var V_=i(mi);Sf=s(V_,"__call__"),V_.forEach(t),Of=s(or," special method."),or.forEach(t),Df=h(qt),w(mn.$$.fragment,qt),If=h(qt),w(hn.$$.fragment,qt),Wf=h(qt),w(un.$$.fragment,qt),qt.forEach(t),bt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(Xb)),_(p,"id","flaubert"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#flaubert"),_(c,"class","relative group"),_(J,"id","overview"),_(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(J,"href","#overview"),_(z,"class","relative group"),_(ee,"href","https://arxiv.org/abs/1912.05372"),_(ee,"rel","nofollow"),_(D,"href","https://huggingface.co/formiel"),_(D,"rel","nofollow"),_(I,"href","https://github.com/getalp/Flaubert"),_(I,"rel","nofollow"),_(O,"id","transformers.FlaubertConfig"),_(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(O,"href","#transformers.FlaubertConfig"),_(K,"class","relative group"),_(W,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),_(X,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(te,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),_(te,"rel","nofollow"),_(ra,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),_(ia,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),_(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ho,"id","transformers.FlaubertTokenizer"),_(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ho,"href","#transformers.FlaubertTokenizer"),_(jt,"class","relative group"),_(la,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(uo,"id","transformers.FlaubertModel"),_(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(uo,"href","#transformers.FlaubertModel"),_(Pt,"class","relative group"),_(da,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Cn,"rel","nofollow"),_(ca,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_o,"id","transformers.FlaubertWithLMHeadModel"),_(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_o,"href","#transformers.FlaubertWithLMHeadModel"),_(Nt,"class","relative group"),_(pa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(An,"rel","nofollow"),_(ma,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(ha,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(vo,"id","transformers.FlaubertForSequenceClassification"),_(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(vo,"href","#transformers.FlaubertForSequenceClassification"),_(Ot,"class","relative group"),_(ua,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xn,"rel","nofollow"),_(fa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(ga,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(xo,"id","transformers.FlaubertForMultipleChoice"),_(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(xo,"href","#transformers.FlaubertForMultipleChoice"),_(It,"class","relative group"),_(_a,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Yn,"rel","nofollow"),_(ba,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ka,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zo,"id","transformers.FlaubertForTokenClassification"),_(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zo,"href","#transformers.FlaubertForTokenClassification"),_(Xt,"class","relative group"),_(Ta,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(os,"rel","nofollow"),_(va,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(wa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Po,"id","transformers.FlaubertForQuestionAnsweringSimple"),_(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Po,"href","#transformers.FlaubertForQuestionAnsweringSimple"),_(Qt,"class","relative group"),_(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ds,"rel","nofollow"),_(ya,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_($a,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oo,"id","transformers.FlaubertForQuestionAnswering"),_(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Oo,"href","#transformers.FlaubertForQuestionAnswering"),_(Bt,"class","relative group"),_(Ma,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(gs,"rel","nofollow"),_(xa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(Ea,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"id","transformers.TFFlaubertModel"),_(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wo,"href","#transformers.TFFlaubertModel"),_(Gt,"class","relative group"),_(Ca,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Fs,"rel","nofollow"),_(za,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.TFFlaubertWithLMHeadModel"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.TFFlaubertWithLMHeadModel"),_(Jt,"class","relative group"),_(qa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Cs,"rel","nofollow"),_(La,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yo,"id","transformers.TFFlaubertForSequenceClassification"),_(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Yo,"href","#transformers.TFFlaubertForSequenceClassification"),_(eo,"class","relative group"),_(ja,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(As,"rel","nofollow"),_(Pa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.TFFlaubertForMultipleChoice"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.TFFlaubertForMultipleChoice"),_(oo,"class","relative group"),_(Aa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ws,"rel","nofollow"),_(Na,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.TFFlaubertForTokenClassification"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.TFFlaubertForTokenClassification"),_(so,"class","relative group"),_(Sa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Bs,"rel","nofollow"),_(Oa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),_(ro,"class","relative group"),_(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Zs,"rel","nofollow"),_(Ia,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,T){e(document.head,d),b(o,g,T),b(o,c,T),e(c,p),e(p,k),F(l,k,null),e(c,u),e(c,C),e(C,ce),b(o,Y,T),b(o,z,T),e(z,J),e(J,H),F(Z,H,null),e(z,pe),e(z,Q),e(Q,me),b(o,re,T),b(o,B,T),e(B,N),e(B,ee),e(ee,G),e(B,q),b(o,j,T),b(o,oe,T),e(oe,R),b(o,ie,T),b(o,ne,T),e(ne,U),e(U,he),b(o,le,T),b(o,L,T),e(L,ue),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(L,be),b(o,A,T),b(o,K,T),e(K,O),e(O,se),F(f,se,null),e(K,E),e(K,V),e(V,ye),b(o,Te,T),b(o,P,T),F(ke,P,null),e(P,$e),e(P,ae),e(ae,S),e(ae,W),e(W,Me),e(ae,xe),e(ae,X),e(X,Ee),e(ae,Ce),e(ae,te),e(te,ze),e(ae,cd),e(P,pd),e(P,Lt),e(Lt,md),e(Lt,ra),e(ra,hd),e(Lt,ud),e(Lt,ia),e(ia,fd),e(Lt,gd),b(o,Xi,T),b(o,jt,T),e(jt,ho),e(ho,nr),F(vn,nr,null),e(jt,_d),e(jt,sr),e(sr,bd),b(o,Hi,T),b(o,et,T),F(wn,et,null),e(et,kd),e(et,ar),e(ar,Td),e(et,vd),e(et,kt),e(kt,rr),e(rr,wd),e(kt,Fd),e(kt,ir),e(ir,yd),e(kt,$d),e(kt,Tt),e(Tt,Md),e(Tt,lr),e(lr,xd),e(Tt,Ed),e(Tt,dr),e(dr,Cd),e(Tt,zd),e(Tt,cr),e(cr,qd),e(Tt,Ld),e(kt,jd),e(kt,Fn),e(Fn,Pd),e(Fn,pr),e(pr,Ad),e(Fn,Nd),e(et,Sd),e(et,yn),e(yn,Od),e(yn,la),e(la,Dd),e(yn,Id),b(o,Qi,T),b(o,Pt,T),e(Pt,uo),e(uo,mr),F($n,mr,null),e(Pt,Wd),e(Pt,hr),e(hr,Xd),b(o,Ui,T),b(o,Re,T),F(Mn,Re,null),e(Re,Hd),e(Re,ur),e(ur,Qd),e(Re,Ud),e(Re,xn),e(xn,Rd),e(xn,da),e(da,Bd),e(xn,Vd),e(Re,Yd),e(Re,En),e(En,Gd),e(En,Cn),e(Cn,Kd),e(En,Jd),e(Re,Zd),e(Re,tt),F(zn,tt,null),e(tt,ec),e(tt,At),e(At,tc),e(At,ca),e(ca,oc),e(At,nc),e(At,fr),e(fr,sc),e(At,ac),e(tt,rc),F(fo,tt,null),e(tt,ic),F(go,tt,null),b(o,Ri,T),b(o,Nt,T),e(Nt,_o),e(_o,gr),F(qn,gr,null),e(Nt,lc),e(Nt,_r),e(_r,dc),b(o,Bi,T),b(o,je,T),F(Ln,je,null),e(je,cc),e(je,br),e(br,pc),e(je,mc),e(je,jn),e(jn,hc),e(jn,pa),e(pa,uc),e(jn,fc),e(je,gc),e(je,Pn),e(Pn,_c),e(Pn,An),e(An,bc),e(Pn,kc),e(je,Tc),e(je,Nn),e(Nn,vc),e(Nn,ma),e(ma,wc),e(Nn,Fc),e(je,yc),e(je,Be),F(Sn,Be,null),e(Be,$c),e(Be,St),e(St,Mc),e(St,ha),e(ha,xc),e(St,Ec),e(St,kr),e(kr,Cc),e(St,zc),e(Be,qc),F(bo,Be,null),e(Be,Lc),F(ko,Be,null),e(Be,jc),F(To,Be,null),b(o,Vi,T),b(o,Ot,T),e(Ot,vo),e(vo,Tr),F(On,Tr,null),e(Ot,Pc),e(Ot,vr),e(vr,Ac),b(o,Yi,T),b(o,Pe,T),F(Dn,Pe,null),e(Pe,Nc),e(Pe,wr),e(wr,Sc),e(Pe,Oc),e(Pe,In),e(In,Dc),e(In,ua),e(ua,Ic),e(In,Wc),e(Pe,Xc),e(Pe,Wn),e(Wn,Hc),e(Wn,Xn),e(Xn,Qc),e(Wn,Uc),e(Pe,Rc),e(Pe,Hn),e(Hn,Bc),e(Hn,fa),e(fa,Vc),e(Hn,Yc),e(Pe,Gc),e(Pe,Le),F(Qn,Le,null),e(Le,Kc),e(Le,Dt),e(Dt,Jc),e(Dt,ga),e(ga,Zc),e(Dt,ep),e(Dt,Fr),e(Fr,tp),e(Dt,op),e(Le,np),F(wo,Le,null),e(Le,sp),F(Fo,Le,null),e(Le,ap),F(yo,Le,null),e(Le,rp),F($o,Le,null),e(Le,ip),F(Mo,Le,null),b(o,Gi,T),b(o,It,T),e(It,xo),e(xo,yr),F(Un,yr,null),e(It,lp),e(It,$r),e($r,dp),b(o,Ki,T),b(o,Ae,T),F(Rn,Ae,null),e(Ae,cp),e(Ae,Mr),e(Mr,pp),e(Ae,mp),e(Ae,Bn),e(Bn,hp),e(Bn,_a),e(_a,up),e(Bn,fp),e(Ae,gp),e(Ae,Vn),e(Vn,_p),e(Vn,Yn),e(Yn,bp),e(Vn,kp),e(Ae,Tp),e(Ae,Gn),e(Gn,vp),e(Gn,ba),e(ba,wp),e(Gn,Fp),e(Ae,yp),e(Ae,ot),F(Kn,ot,null),e(ot,$p),e(ot,Wt),e(Wt,Mp),e(Wt,ka),e(ka,xp),e(Wt,Ep),e(Wt,xr),e(xr,Cp),e(Wt,zp),e(ot,qp),F(Eo,ot,null),e(ot,Lp),F(Co,ot,null),b(o,Ji,T),b(o,Xt,T),e(Xt,zo),e(zo,Er),F(Jn,Er,null),e(Xt,jp),e(Xt,Cr),e(Cr,Pp),b(o,Zi,T),b(o,Ne,T),F(Zn,Ne,null),e(Ne,Ap),e(Ne,zr),e(zr,Np),e(Ne,Sp),e(Ne,es),e(es,Op),e(es,Ta),e(Ta,Dp),e(es,Ip),e(Ne,Wp),e(Ne,ts),e(ts,Xp),e(ts,os),e(os,Hp),e(ts,Qp),e(Ne,Up),e(Ne,ns),e(ns,Rp),e(ns,va),e(va,Bp),e(ns,Vp),e(Ne,Yp),e(Ne,Ve),F(ss,Ve,null),e(Ve,Gp),e(Ve,Ht),e(Ht,Kp),e(Ht,wa),e(wa,Jp),e(Ht,Zp),e(Ht,qr),e(qr,em),e(Ht,tm),e(Ve,om),F(qo,Ve,null),e(Ve,nm),F(Lo,Ve,null),e(Ve,sm),F(jo,Ve,null),b(o,el,T),b(o,Qt,T),e(Qt,Po),e(Po,Lr),F(as,Lr,null),e(Qt,am),e(Qt,jr),e(jr,rm),b(o,tl,T),b(o,Se,T),F(rs,Se,null),e(Se,im),e(Se,Ut),e(Ut,lm),e(Ut,Pr),e(Pr,dm),e(Ut,cm),e(Ut,Ar),e(Ar,pm),e(Ut,mm),e(Se,hm),e(Se,is),e(is,um),e(is,Fa),e(Fa,fm),e(is,gm),e(Se,_m),e(Se,ls),e(ls,bm),e(ls,ds),e(ds,km),e(ls,Tm),e(Se,vm),e(Se,cs),e(cs,wm),e(cs,ya),e(ya,Fm),e(cs,ym),e(Se,$m),e(Se,Ye),F(ps,Ye,null),e(Ye,Mm),e(Ye,Rt),e(Rt,xm),e(Rt,$a),e($a,Em),e(Rt,Cm),e(Rt,Nr),e(Nr,zm),e(Rt,qm),e(Ye,Lm),F(Ao,Ye,null),e(Ye,jm),F(No,Ye,null),e(Ye,Pm),F(So,Ye,null),b(o,ol,T),b(o,Bt,T),e(Bt,Oo),e(Oo,Sr),F(ms,Sr,null),e(Bt,Am),e(Bt,Or),e(Or,Nm),b(o,nl,T),b(o,Oe,T),F(hs,Oe,null),e(Oe,Sm),e(Oe,Vt),e(Vt,Om),e(Vt,Dr),e(Dr,Dm),e(Vt,Im),e(Vt,Ir),e(Ir,Wm),e(Vt,Xm),e(Oe,Hm),e(Oe,us),e(us,Qm),e(us,Ma),e(Ma,Um),e(us,Rm),e(Oe,Bm),e(Oe,fs),e(fs,Vm),e(fs,gs),e(gs,Ym),e(fs,Gm),e(Oe,Km),e(Oe,_s),e(_s,Jm),e(_s,xa),e(xa,Zm),e(_s,eh),e(Oe,th),e(Oe,nt),F(bs,nt,null),e(nt,oh),e(nt,Yt),e(Yt,nh),e(Yt,Ea),e(Ea,sh),e(Yt,ah),e(Yt,Wr),e(Wr,rh),e(Yt,ih),e(nt,lh),F(Do,nt,null),e(nt,dh),F(Io,nt,null),b(o,sl,T),b(o,Gt,T),e(Gt,Wo),e(Wo,Xr),F(ks,Xr,null),e(Gt,ch),e(Gt,Hr),e(Hr,ph),b(o,al,T),b(o,De,T),F(Ts,De,null),e(De,mh),e(De,Qr),e(Qr,hh),e(De,uh),e(De,vs),e(vs,fh),e(vs,Ca),e(Ca,gh),e(vs,_h),e(De,bh),e(De,ws),e(ws,kh),e(ws,Fs),e(Fs,Th),e(ws,vh),e(De,wh),F(Xo,De,null),e(De,Fh),e(De,st),F(ys,st,null),e(st,yh),e(st,Kt),e(Kt,$h),e(Kt,za),e(za,Mh),e(Kt,xh),e(Kt,Ur),e(Ur,Eh),e(Kt,Ch),e(st,zh),F(Ho,st,null),e(st,qh),F(Qo,st,null),b(o,rl,T),b(o,Jt,T),e(Jt,Uo),e(Uo,Rr),F($s,Rr,null),e(Jt,Lh),e(Jt,Br),e(Br,jh),b(o,il,T),b(o,Ie,T),F(Ms,Ie,null),e(Ie,Ph),e(Ie,Vr),e(Vr,Ah),e(Ie,Nh),e(Ie,xs),e(xs,Sh),e(xs,qa),e(qa,Oh),e(xs,Dh),e(Ie,Ih),e(Ie,Es),e(Es,Wh),e(Es,Cs),e(Cs,Xh),e(Es,Hh),e(Ie,Qh),F(Ro,Ie,null),e(Ie,Uh),e(Ie,at),F(zs,at,null),e(at,Rh),e(at,Zt),e(Zt,Bh),e(Zt,La),e(La,Vh),e(Zt,Yh),e(Zt,Yr),e(Yr,Gh),e(Zt,Kh),e(at,Jh),F(Bo,at,null),e(at,Zh),F(Vo,at,null),b(o,ll,T),b(o,eo,T),e(eo,Yo),e(Yo,Gr),F(qs,Gr,null),e(eo,eu),e(eo,Kr),e(Kr,tu),b(o,dl,T),b(o,We,T),F(Ls,We,null),e(We,ou),e(We,Jr),e(Jr,nu),e(We,su),e(We,js),e(js,au),e(js,ja),e(ja,ru),e(js,iu),e(We,lu),e(We,Ps),e(Ps,du),e(Ps,As),e(As,cu),e(Ps,pu),e(We,mu),F(Go,We,null),e(We,hu),e(We,Ge),F(Ns,Ge,null),e(Ge,uu),e(Ge,to),e(to,fu),e(to,Pa),e(Pa,gu),e(to,_u),e(to,Zr),e(Zr,bu),e(to,ku),e(Ge,Tu),F(Ko,Ge,null),e(Ge,vu),F(Jo,Ge,null),e(Ge,wu),F(Zo,Ge,null),b(o,cl,T),b(o,oo,T),e(oo,en),e(en,ei),F(Ss,ei,null),e(oo,Fu),e(oo,ti),e(ti,yu),b(o,pl,T),b(o,Xe,T),F(Os,Xe,null),e(Xe,$u),e(Xe,oi),e(oi,Mu),e(Xe,xu),e(Xe,Ds),e(Ds,Eu),e(Ds,Aa),e(Aa,Cu),e(Ds,zu),e(Xe,qu),e(Xe,Is),e(Is,Lu),e(Is,Ws),e(Ws,ju),e(Is,Pu),e(Xe,Au),F(tn,Xe,null),e(Xe,Nu),e(Xe,rt),F(Xs,rt,null),e(rt,Su),e(rt,no),e(no,Ou),e(no,Na),e(Na,Du),e(no,Iu),e(no,ni),e(ni,Wu),e(no,Xu),e(rt,Hu),F(on,rt,null),e(rt,Qu),F(nn,rt,null),b(o,ml,T),b(o,so,T),e(so,sn),e(sn,si),F(Hs,si,null),e(so,Uu),e(so,ai),e(ai,Ru),b(o,hl,T),b(o,He,T),F(Qs,He,null),e(He,Bu),e(He,ri),e(ri,Vu),e(He,Yu),e(He,Us),e(Us,Gu),e(Us,Sa),e(Sa,Ku),e(Us,Ju),e(He,Zu),e(He,Rs),e(Rs,ef),e(Rs,Bs),e(Bs,tf),e(Rs,of),e(He,nf),F(an,He,null),e(He,sf),e(He,Ke),F(Vs,Ke,null),e(Ke,af),e(Ke,ao),e(ao,rf),e(ao,Oa),e(Oa,lf),e(ao,df),e(ao,ii),e(ii,cf),e(ao,pf),e(Ke,mf),F(rn,Ke,null),e(Ke,hf),F(ln,Ke,null),e(Ke,uf),F(dn,Ke,null),b(o,ul,T),b(o,ro,T),e(ro,cn),e(cn,li),F(Ys,li,null),e(ro,ff),e(ro,di),e(di,gf),b(o,fl,T),b(o,Qe,T),F(Gs,Qe,null),e(Qe,_f),e(Qe,io),e(io,bf),e(io,ci),e(ci,kf),e(io,Tf),e(io,pi),e(pi,vf),e(io,wf),e(Qe,Ff),e(Qe,Ks),e(Ks,yf),e(Ks,Da),e(Da,$f),e(Ks,Mf),e(Qe,xf),e(Qe,Js),e(Js,Ef),e(Js,Zs),e(Zs,Cf),e(Js,zf),e(Qe,qf),F(pn,Qe,null),e(Qe,Lf),e(Qe,Je),F(ea,Je,null),e(Je,jf),e(Je,lo),e(lo,Pf),e(lo,Ia),e(Ia,Af),e(lo,Nf),e(lo,mi),e(mi,Sf),e(lo,Of),e(Je,Df),F(mn,Je,null),e(Je,If),F(hn,Je,null),e(Je,Wf),F(un,Je,null),gl=!0},p(o,[T]){const ta={};T&2&&(ta.$$scope={dirty:T,ctx:o}),fo.$set(ta);const hi={};T&2&&(hi.$$scope={dirty:T,ctx:o}),go.$set(hi);const ui={};T&2&&(ui.$$scope={dirty:T,ctx:o}),bo.$set(ui);const fi={};T&2&&(fi.$$scope={dirty:T,ctx:o}),ko.$set(fi);const oa={};T&2&&(oa.$$scope={dirty:T,ctx:o}),To.$set(oa);const gi={};T&2&&(gi.$$scope={dirty:T,ctx:o}),wo.$set(gi);const _i={};T&2&&(_i.$$scope={dirty:T,ctx:o}),Fo.$set(_i);const bi={};T&2&&(bi.$$scope={dirty:T,ctx:o}),yo.$set(bi);const na={};T&2&&(na.$$scope={dirty:T,ctx:o}),$o.$set(na);const ki={};T&2&&(ki.$$scope={dirty:T,ctx:o}),Mo.$set(ki);const Ti={};T&2&&(Ti.$$scope={dirty:T,ctx:o}),Eo.$set(Ti);const vi={};T&2&&(vi.$$scope={dirty:T,ctx:o}),Co.$set(vi);const wi={};T&2&&(wi.$$scope={dirty:T,ctx:o}),qo.$set(wi);const co={};T&2&&(co.$$scope={dirty:T,ctx:o}),Lo.$set(co);const Fi={};T&2&&(Fi.$$scope={dirty:T,ctx:o}),jo.$set(Fi);const yi={};T&2&&(yi.$$scope={dirty:T,ctx:o}),Ao.$set(yi);const sa={};T&2&&(sa.$$scope={dirty:T,ctx:o}),No.$set(sa);const $i={};T&2&&($i.$$scope={dirty:T,ctx:o}),So.$set($i);const Mi={};T&2&&(Mi.$$scope={dirty:T,ctx:o}),Do.$set(Mi);const xi={};T&2&&(xi.$$scope={dirty:T,ctx:o}),Io.$set(xi);const po={};T&2&&(po.$$scope={dirty:T,ctx:o}),Xo.$set(po);const vt={};T&2&&(vt.$$scope={dirty:T,ctx:o}),Ho.$set(vt);const Ei={};T&2&&(Ei.$$scope={dirty:T,ctx:o}),Qo.$set(Ei);const Ci={};T&2&&(Ci.$$scope={dirty:T,ctx:o}),Ro.$set(Ci);const zi={};T&2&&(zi.$$scope={dirty:T,ctx:o}),Bo.$set(zi);const mo={};T&2&&(mo.$$scope={dirty:T,ctx:o}),Vo.$set(mo);const qi={};T&2&&(qi.$$scope={dirty:T,ctx:o}),Go.$set(qi);const Li={};T&2&&(Li.$$scope={dirty:T,ctx:o}),Ko.$set(Li);const aa={};T&2&&(aa.$$scope={dirty:T,ctx:o}),Jo.$set(aa);const ji={};T&2&&(ji.$$scope={dirty:T,ctx:o}),Zo.$set(ji);const Pi={};T&2&&(Pi.$$scope={dirty:T,ctx:o}),tn.$set(Pi);const Ai={};T&2&&(Ai.$$scope={dirty:T,ctx:o}),on.$set(Ai);const wt={};T&2&&(wt.$$scope={dirty:T,ctx:o}),nn.$set(wt);const Ni={};T&2&&(Ni.$$scope={dirty:T,ctx:o}),an.$set(Ni);const Ft={};T&2&&(Ft.$$scope={dirty:T,ctx:o}),rn.$set(Ft);const Si={};T&2&&(Si.$$scope={dirty:T,ctx:o}),ln.$set(Si);const Oi={};T&2&&(Oi.$$scope={dirty:T,ctx:o}),dn.$set(Oi);const yt={};T&2&&(yt.$$scope={dirty:T,ctx:o}),pn.$set(yt);const Di={};T&2&&(Di.$$scope={dirty:T,ctx:o}),mn.$set(Di);const Ii={};T&2&&(Ii.$$scope={dirty:T,ctx:o}),hn.$set(Ii);const Wi={};T&2&&(Wi.$$scope={dirty:T,ctx:o}),un.$set(Wi)},i(o){gl||(y(l.$$.fragment,o),y(Z.$$.fragment,o),y(f.$$.fragment,o),y(ke.$$.fragment,o),y(vn.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(zn.$$.fragment,o),y(fo.$$.fragment,o),y(go.$$.fragment,o),y(qn.$$.fragment,o),y(Ln.$$.fragment,o),y(Sn.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(To.$$.fragment,o),y(On.$$.fragment,o),y(Dn.$$.fragment,o),y(Qn.$$.fragment,o),y(wo.$$.fragment,o),y(Fo.$$.fragment,o),y(yo.$$.fragment,o),y($o.$$.fragment,o),y(Mo.$$.fragment,o),y(Un.$$.fragment,o),y(Rn.$$.fragment,o),y(Kn.$$.fragment,o),y(Eo.$$.fragment,o),y(Co.$$.fragment,o),y(Jn.$$.fragment,o),y(Zn.$$.fragment,o),y(ss.$$.fragment,o),y(qo.$$.fragment,o),y(Lo.$$.fragment,o),y(jo.$$.fragment,o),y(as.$$.fragment,o),y(rs.$$.fragment,o),y(ps.$$.fragment,o),y(Ao.$$.fragment,o),y(No.$$.fragment,o),y(So.$$.fragment,o),y(ms.$$.fragment,o),y(hs.$$.fragment,o),y(bs.$$.fragment,o),y(Do.$$.fragment,o),y(Io.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(Xo.$$.fragment,o),y(ys.$$.fragment,o),y(Ho.$$.fragment,o),y(Qo.$$.fragment,o),y($s.$$.fragment,o),y(Ms.$$.fragment,o),y(Ro.$$.fragment,o),y(zs.$$.fragment,o),y(Bo.$$.fragment,o),y(Vo.$$.fragment,o),y(qs.$$.fragment,o),y(Ls.$$.fragment,o),y(Go.$$.fragment,o),y(Ns.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Zo.$$.fragment,o),y(Ss.$$.fragment,o),y(Os.$$.fragment,o),y(tn.$$.fragment,o),y(Xs.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(Hs.$$.fragment,o),y(Qs.$$.fragment,o),y(an.$$.fragment,o),y(Vs.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(Ys.$$.fragment,o),y(Gs.$$.fragment,o),y(pn.$$.fragment,o),y(ea.$$.fragment,o),y(mn.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),gl=!0)},o(o){$(l.$$.fragment,o),$(Z.$$.fragment,o),$(f.$$.fragment,o),$(ke.$$.fragment,o),$(vn.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(fo.$$.fragment,o),$(go.$$.fragment,o),$(qn.$$.fragment,o),$(Ln.$$.fragment,o),$(Sn.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(To.$$.fragment,o),$(On.$$.fragment,o),$(Dn.$$.fragment,o),$(Qn.$$.fragment,o),$(wo.$$.fragment,o),$(Fo.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(Mo.$$.fragment,o),$(Un.$$.fragment,o),$(Rn.$$.fragment,o),$(Kn.$$.fragment,o),$(Eo.$$.fragment,o),$(Co.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ss.$$.fragment,o),$(qo.$$.fragment,o),$(Lo.$$.fragment,o),$(jo.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(ps.$$.fragment,o),$(Ao.$$.fragment,o),$(No.$$.fragment,o),$(So.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(bs.$$.fragment,o),$(Do.$$.fragment,o),$(Io.$$.fragment,o),$(ks.$$.fragment,o),$(Ts.$$.fragment,o),$(Xo.$$.fragment,o),$(ys.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$($s.$$.fragment,o),$(Ms.$$.fragment,o),$(Ro.$$.fragment,o),$(zs.$$.fragment,o),$(Bo.$$.fragment,o),$(Vo.$$.fragment,o),$(qs.$$.fragment,o),$(Ls.$$.fragment,o),$(Go.$$.fragment,o),$(Ns.$$.fragment,o),$(Ko.$$.fragment,o),$(Jo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ss.$$.fragment,o),$(Os.$$.fragment,o),$(tn.$$.fragment,o),$(Xs.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(an.$$.fragment,o),$(Vs.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Ys.$$.fragment,o),$(Gs.$$.fragment,o),$(pn.$$.fragment,o),$(ea.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),gl=!1},d(o){t(d),o&&t(g),o&&t(c),M(l),o&&t(Y),o&&t(z),M(Z),o&&t(re),o&&t(B),o&&t(j),o&&t(oe),o&&t(ie),o&&t(ne),o&&t(le),o&&t(L),o&&t(A),o&&t(K),M(f),o&&t(Te),o&&t(P),M(ke),o&&t(Xi),o&&t(jt),M(vn),o&&t(Hi),o&&t(et),M(wn),o&&t(Qi),o&&t(Pt),M($n),o&&t(Ui),o&&t(Re),M(Mn),M(zn),M(fo),M(go),o&&t(Ri),o&&t(Nt),M(qn),o&&t(Bi),o&&t(je),M(Ln),M(Sn),M(bo),M(ko),M(To),o&&t(Vi),o&&t(Ot),M(On),o&&t(Yi),o&&t(Pe),M(Dn),M(Qn),M(wo),M(Fo),M(yo),M($o),M(Mo),o&&t(Gi),o&&t(It),M(Un),o&&t(Ki),o&&t(Ae),M(Rn),M(Kn),M(Eo),M(Co),o&&t(Ji),o&&t(Xt),M(Jn),o&&t(Zi),o&&t(Ne),M(Zn),M(ss),M(qo),M(Lo),M(jo),o&&t(el),o&&t(Qt),M(as),o&&t(tl),o&&t(Se),M(rs),M(ps),M(Ao),M(No),M(So),o&&t(ol),o&&t(Bt),M(ms),o&&t(nl),o&&t(Oe),M(hs),M(bs),M(Do),M(Io),o&&t(sl),o&&t(Gt),M(ks),o&&t(al),o&&t(De),M(Ts),M(Xo),M(ys),M(Ho),M(Qo),o&&t(rl),o&&t(Jt),M($s),o&&t(il),o&&t(Ie),M(Ms),M(Ro),M(zs),M(Bo),M(Vo),o&&t(ll),o&&t(eo),M(qs),o&&t(dl),o&&t(We),M(Ls),M(Go),M(Ns),M(Ko),M(Jo),M(Zo),o&&t(cl),o&&t(oo),M(Ss),o&&t(pl),o&&t(Xe),M(Os),M(tn),M(Xs),M(on),M(nn),o&&t(ml),o&&t(so),M(Hs),o&&t(hl),o&&t(He),M(Qs),M(an),M(Vs),M(rn),M(ln),M(dn),o&&t(ul),o&&t(ro),M(Ys),o&&t(fl),o&&t(Qe),M(Gs),M(pn),M(ea),M(mn),M(hn),M(un)}}}const Xb={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Hb(x){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gb extends Y_{constructor(d){super();G_(this,d,Hb,Wb,K_,{})}}export{Gb as default,Xb as metadata};
