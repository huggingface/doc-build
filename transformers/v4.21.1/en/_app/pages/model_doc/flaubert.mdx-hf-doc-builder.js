import{S as Y_,i as G_,s as K_,e as a,k as h,w as T,t as n,M as J_,c as r,d as t,m as u,a as i,x as w,h as s,b as _,G as e,g as b,y as F,q as y,o as $,B as M,v as Z_,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as de}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Te}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function eb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function tb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ob(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function nb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function sb(x){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function ab(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function rb(x){let d,g,c,p,v;return p=new Fe({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function ib(x){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function lb(x){let d,g,c,p,v;return p=new Fe({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function db(x){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function cb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function pb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function hb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function ub(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function mb(x){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function fb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function gb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function _b(x){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function bb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function vb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function kb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),B=h(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);v=r(V,"LI",{});var ye=i(v);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),m=u(V),z=r(V,"LI",{});var ke=i(z);ce=s(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ve=i(H);Z=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=u(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=u(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(S),L=r(S,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var ze=i(I);_e=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),X.forEach(t),be=u(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var Ce=i(O);se=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,v),e(v,l),e(p,m),e(p,z),e(z,ce),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,pe),e(C,Q),e(Q,he),e(C,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function Tb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function wb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Fb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),B=h(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);v=r(V,"LI",{});var ye=i(v);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),m=u(V),z=r(V,"LI",{});var ke=i(z);ce=s(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ve=i(H);Z=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=u(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=u(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(S),L=r(S,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var ze=i(I);_e=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),X.forEach(t),be=u(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var Ce=i(O);se=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,v),e(v,l),e(p,m),e(p,z),e(z,ce),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,pe),e(C,Q),e(Q,he),e(C,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function yb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function $b(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Mb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),B=h(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);v=r(V,"LI",{});var ye=i(v);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),m=u(V),z=r(V,"LI",{});var ke=i(z);ce=s(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ve=i(H);Z=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=u(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=u(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(S),L=r(S,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var ze=i(I);_e=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),X.forEach(t),be=u(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var Ce=i(O);se=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,v),e(v,l),e(p,m),e(p,z),e(z,ce),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,pe),e(C,Q),e(Q,he),e(C,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function xb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Eb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function zb(x){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Cb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),B=h(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);v=r(V,"LI",{});var ye=i(v);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),m=u(V),z=r(V,"LI",{});var ke=i(z);ce=s(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ve=i(H);Z=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=u(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=u(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(S),L=r(S,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var ze=i(I);_e=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),X.forEach(t),be=u(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var Ce=i(O);se=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,v),e(v,l),e(p,m),e(p,z),e(z,ce),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,pe),e(C,Q),e(Q,he),e(C,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function qb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Lb(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function jb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),B=h(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);v=r(V,"LI",{});var ye=i(v);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),m=u(V),z=r(V,"LI",{});var ke=i(z);ce=s(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ve=i(H);Z=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=u(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=u(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(S),L=r(S,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var ze=i(I);_e=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),X.forEach(t),be=u(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var Ce=i(O);se=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,v),e(v,l),e(p,m),e(p,z),e(z,ce),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,pe),e(C,Q),e(Q,he),e(C,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function Pb(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ab(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Nb(x){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Sb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se;return{c(){d=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),z=a("li"),ce=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=h(),C=a("p"),J=n("This second option is useful when using "),H=a("code"),Z=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=a("code"),he=n("model(inputs)"),re=n("."),B=h(),N=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),q=a("ul"),j=a("li"),oe=n("a single Tensor with "),R=a("code"),ie=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),ue=n("model(inputs_ids)"),le=h(),L=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=a("code"),fe=n("model([input_ids, attention_mask])"),ge=n(" or "),I=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),be=h(),A=a("li"),K=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=r(f,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=u(f),p=r(f,"UL",{});var V=i(p);v=r(V,"LI",{});var ye=i(v);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),m=u(V),z=r(V,"LI",{});var ke=i(z);ce=s(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),V.forEach(t),Y=u(f),C=r(f,"P",{});var P=i(C);J=s(P,"This second option is useful when using "),H=r(P,"CODE",{});var ve=i(H);Z=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=r(P,"CODE",{});var $e=i(Q);he=s($e,"model(inputs)"),$e.forEach(t),re=s(P,"."),P.forEach(t),B=u(f),N=r(f,"P",{});var ae=i(N);ee=s(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),G=u(f),q=r(f,"UL",{});var S=i(q);j=r(S,"LI",{});var W=i(j);oe=s(W,"a single Tensor with "),R=r(W,"CODE",{});var Me=i(R);ie=s(Me,"input_ids"),Me.forEach(t),ne=s(W," only and nothing else: "),U=r(W,"CODE",{});var xe=i(U);ue=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),le=u(S),L=r(S,"LI",{});var X=i(L);me=s(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),D=r(X,"CODE",{});var Ee=i(D);fe=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),ge=s(X," or "),I=r(X,"CODE",{});var ze=i(I);_e=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),X.forEach(t),be=u(S),A=r(S,"LI",{});var te=i(A);K=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(te,"CODE",{});var Ce=i(O);se=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),te.forEach(t),S.forEach(t)},m(f,E){b(f,d,E),e(d,g),b(f,c,E),b(f,p,E),e(p,v),e(v,l),e(p,m),e(p,z),e(z,ce),b(f,Y,E),b(f,C,E),e(C,J),e(C,H),e(H,Z),e(C,pe),e(C,Q),e(Q,he),e(C,re),b(f,B,E),b(f,N,E),e(N,ee),b(f,G,E),b(f,q,E),e(q,j),e(j,oe),e(j,R),e(R,ie),e(j,ne),e(j,U),e(U,ue),e(q,le),e(q,L),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(q,be),e(q,A),e(A,K),e(A,O),e(O,se)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(Y),f&&t(C),f&&t(B),f&&t(N),f&&t(G),f&&t(q)}}}function Ob(x){let d,g,c,p,v;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var z=i(c);p=s(z,"Module"),z.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Db(x){let d,g,c,p,v;return p=new Fe({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),c=u(l),w(p.$$.fragment,l)},m(l,m){b(l,d,m),e(d,g),b(l,c,m),F(p,l,m),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){$(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Ib(x){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){F(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Wb(x){let d,g,c,p,v,l,m,z,ce,Y,C,J,H,Z,pe,Q,he,re,B,N,ee,G,q,j,oe,R,ie,ne,U,ue,le,L,me,D,fe,ge,I,_e,be,A,K,O,se,f,E,V,ye,ke,P,ve,$e,ae,S,W,Me,xe,X,Ee,ze,te,Ce,cd,pd,Lt,hd,ra,ud,md,ia,fd,gd,Xi,jt,uo,nr,Tn,_d,sr,bd,Hi,et,wn,vd,ar,kd,Td,vt,rr,wd,Fd,ir,yd,$d,kt,Md,lr,xd,Ed,dr,zd,Cd,cr,qd,Ld,jd,Fn,Pd,pr,Ad,Nd,Sd,yn,Od,la,Dd,Id,Qi,Pt,mo,hr,$n,Wd,ur,Xd,Ui,Re,Mn,Hd,mr,Qd,Ud,xn,Rd,da,Bd,Vd,Yd,En,Gd,zn,Kd,Jd,Zd,tt,Cn,ec,At,tc,ca,oc,nc,fr,sc,ac,rc,fo,ic,go,Ri,Nt,_o,gr,qn,lc,_r,dc,Bi,je,Ln,cc,br,pc,hc,jn,uc,pa,mc,fc,gc,Pn,_c,An,bc,vc,kc,Nn,Tc,ha,wc,Fc,yc,Be,Sn,$c,St,Mc,ua,xc,Ec,vr,zc,Cc,qc,bo,Lc,vo,jc,ko,Vi,Ot,To,kr,On,Pc,Tr,Ac,Yi,Pe,Dn,Nc,wr,Sc,Oc,In,Dc,ma,Ic,Wc,Xc,Wn,Hc,Xn,Qc,Uc,Rc,Hn,Bc,fa,Vc,Yc,Gc,Le,Qn,Kc,Dt,Jc,ga,Zc,ep,Fr,tp,op,np,wo,sp,Fo,ap,yo,rp,$o,ip,Mo,Gi,It,xo,yr,Un,lp,$r,dp,Ki,Ae,Rn,cp,Mr,pp,hp,Bn,up,_a,mp,fp,gp,Vn,_p,Yn,bp,vp,kp,Gn,Tp,ba,wp,Fp,yp,ot,Kn,$p,Wt,Mp,va,xp,Ep,xr,zp,Cp,qp,Eo,Lp,zo,Ji,Xt,Co,Er,Jn,jp,zr,Pp,Zi,Ne,Zn,Ap,Cr,Np,Sp,es,Op,ka,Dp,Ip,Wp,ts,Xp,os,Hp,Qp,Up,ns,Rp,Ta,Bp,Vp,Yp,Ve,ss,Gp,Ht,Kp,wa,Jp,Zp,qr,eh,th,oh,qo,nh,Lo,sh,jo,el,Qt,Po,Lr,as,ah,jr,rh,tl,Se,rs,ih,Ut,lh,Pr,dh,ch,Ar,ph,hh,uh,is,mh,Fa,fh,gh,_h,ls,bh,ds,vh,kh,Th,cs,wh,ya,Fh,yh,$h,Ye,ps,Mh,Rt,xh,$a,Eh,zh,Nr,Ch,qh,Lh,Ao,jh,No,Ph,So,ol,Bt,Oo,Sr,hs,Ah,Or,Nh,nl,Oe,us,Sh,Vt,Oh,Dr,Dh,Ih,Ir,Wh,Xh,Hh,ms,Qh,Ma,Uh,Rh,Bh,fs,Vh,gs,Yh,Gh,Kh,_s,Jh,xa,Zh,eu,tu,nt,bs,ou,Yt,nu,Ea,su,au,Wr,ru,iu,lu,Do,du,Io,sl,Gt,Wo,Xr,vs,cu,Hr,pu,al,De,ks,hu,Qr,uu,mu,Ts,fu,za,gu,_u,bu,ws,vu,Fs,ku,Tu,wu,Xo,Fu,st,ys,yu,Kt,$u,Ca,Mu,xu,Ur,Eu,zu,Cu,Ho,qu,Qo,rl,Jt,Uo,Rr,$s,Lu,Br,ju,il,Ie,Ms,Pu,Vr,Au,Nu,xs,Su,qa,Ou,Du,Iu,Es,Wu,zs,Xu,Hu,Qu,Ro,Uu,at,Cs,Ru,Zt,Bu,La,Vu,Yu,Yr,Gu,Ku,Ju,Bo,Zu,Vo,ll,eo,Yo,Gr,qs,em,Kr,tm,dl,We,Ls,om,Jr,nm,sm,js,am,ja,rm,im,lm,Ps,dm,As,cm,pm,hm,Go,um,Ge,Ns,mm,to,fm,Pa,gm,_m,Zr,bm,vm,km,Ko,Tm,Jo,wm,Zo,cl,oo,en,ei,Ss,Fm,ti,ym,pl,Xe,Os,$m,oi,Mm,xm,Ds,Em,Aa,zm,Cm,qm,Is,Lm,Ws,jm,Pm,Am,tn,Nm,rt,Xs,Sm,no,Om,Na,Dm,Im,ni,Wm,Xm,Hm,on,Qm,nn,hl,so,sn,si,Hs,Um,ai,Rm,ul,He,Qs,Bm,ri,Vm,Ym,Us,Gm,Sa,Km,Jm,Zm,Rs,ef,Bs,tf,of,nf,an,sf,Ke,Vs,af,ao,rf,Oa,lf,df,ii,cf,pf,hf,rn,uf,ln,mf,dn,ml,ro,cn,li,Ys,ff,di,gf,fl,Qe,Gs,_f,io,bf,ci,vf,kf,pi,Tf,wf,Ff,Ks,yf,Da,$f,Mf,xf,Js,Ef,Zs,zf,Cf,qf,pn,Lf,Je,ea,jf,lo,Pf,Ia,Af,Nf,hi,Sf,Of,Df,hn,If,un,Wf,mn,gl;return l=new Ue({}),Z=new Ue({}),f=new Ue({}),ve=new de({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"layerdrop",val:" = 0.0"},{name:"pre_norm",val:" = False"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/configuration_flaubert.py#L35"}}),Tn=new Ue({}),wn=new de({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"do_lowercase",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/tokenization_flaubert.py#L89"}}),$n=new Ue({}),Mn=new de({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L134"}}),Cn=new de({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new qe({props:{$$slots:{default:[eb]},$$scope:{ctx:x}}}),go=new Te({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[tb]},$$scope:{ctx:x}}}),qn=new Ue({}),Ln=new de({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L326"}}),Sn=new de({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new qe({props:{$$slots:{default:[ob]},$$scope:{ctx:x}}}),vo=new Te({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[nb]},$$scope:{ctx:x}}}),ko=new Te({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[sb]},$$scope:{ctx:x}}}),On=new Ue({}),Dn=new de({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L348"}}),Qn=new de({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new qe({props:{$$slots:{default:[ab]},$$scope:{ctx:x}}}),Fo=new Te({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:x}}}),yo=new Te({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:x}}}),$o=new Te({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[lb]},$$scope:{ctx:x}}}),Mo=new Te({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[db]},$$scope:{ctx:x}}}),Un=new Ue({}),Rn=new de({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L436"}}),Kn=new de({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new qe({props:{$$slots:{default:[cb]},$$scope:{ctx:x}}}),zo=new Te({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[pb]},$$scope:{ctx:x}}}),Jn=new Ue({}),Zn=new de({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L370"}}),ss=new de({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new qe({props:{$$slots:{default:[hb]},$$scope:{ctx:x}}}),Lo=new Te({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[ub]},$$scope:{ctx:x}}}),jo=new Te({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[mb]},$$scope:{ctx:x}}}),as=new Ue({}),rs=new de({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L392"}}),ps=new de({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new qe({props:{$$slots:{default:[fb]},$$scope:{ctx:x}}}),No=new Te({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[gb]},$$scope:{ctx:x}}}),So=new Te({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[_b]},$$scope:{ctx:x}}}),hs=new Ue({}),us=new de({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_flaubert.py#L414"}}),bs=new de({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new qe({props:{$$slots:{default:[bb]},$$scope:{ctx:x}}}),Io=new Te({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[vb]},$$scope:{ctx:x}}}),vs=new Ue({}),ks=new de({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L233"}}),Xo=new qe({props:{$$slots:{default:[kb]},$$scope:{ctx:x}}}),ys=new de({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ho=new qe({props:{$$slots:{default:[Tb]},$$scope:{ctx:x}}}),Qo=new Te({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[wb]},$$scope:{ctx:x}}}),$s=new Ue({}),Ms=new de({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L759"}}),Ro=new qe({props:{$$slots:{default:[Fb]},$$scope:{ctx:x}}}),Cs=new de({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L788",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig"
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
`}}),Bo=new qe({props:{$$slots:{default:[yb]},$$scope:{ctx:x}}}),Vo=new Te({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[$b]},$$scope:{ctx:x}}}),qs=new Ue({}),Ls=new de({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L852"}}),Go=new qe({props:{$$slots:{default:[Mb]},$$scope:{ctx:x}}}),Ns=new de({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_tf_xlm.py#L896",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new qe({props:{$$slots:{default:[xb]},$$scope:{ctx:x}}}),Jo=new Te({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Eb]},$$scope:{ctx:x}}}),Zo=new Te({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[zb]},$$scope:{ctx:x}}}),Ss=new Ue({}),Os=new de({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L897"}}),tn=new qe({props:{$$slots:{default:[Cb]},$$scope:{ctx:x}}}),Xs=new de({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_tf_xlm.py#L1003",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new qe({props:{$$slots:{default:[qb]},$$scope:{ctx:x}}}),nn=new Te({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[Lb]},$$scope:{ctx:x}}}),Hs=new Ue({}),Qs=new de({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L882"}}),an=new qe({props:{$$slots:{default:[jb]},$$scope:{ctx:x}}}),Vs=new de({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_tf_xlm.py#L1127",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rn=new qe({props:{$$slots:{default:[Pb]},$$scope:{ctx:x}}}),ln=new Te({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Ab]},$$scope:{ctx:x}}}),dn=new Te({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Nb]},$$scope:{ctx:x}}}),Ys=new Ue({}),Gs=new de({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L867"}}),pn=new qe({props:{$$slots:{default:[Sb]},$$scope:{ctx:x}}}),ea=new de({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm/modeling_tf_xlm.py#L1212",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new qe({props:{$$slots:{default:[Ob]},$$scope:{ctx:x}}}),un=new Te({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Db]},$$scope:{ctx:x}}}),mn=new Te({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Ib]},$$scope:{ctx:x}}}),{c(){d=a("meta"),g=h(),c=a("h1"),p=a("a"),v=a("span"),T(l.$$.fragment),m=h(),z=a("span"),ce=n("FlauBERT"),Y=h(),C=a("h2"),J=a("a"),H=a("span"),T(Z.$$.fragment),pe=h(),Q=a("span"),he=n("Overview"),re=h(),B=a("p"),N=n("The FlauBERT model was proposed in the paper "),ee=a("a"),G=n("FlauBERT: Unsupervised Language Model Pre-training for French"),q=n(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),j=h(),oe=a("p"),R=n("The abstract from the paper is the following:"),ie=h(),ne=a("p"),U=a("em"),ue=n(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),le=h(),L=a("p"),me=n("This model was contributed by "),D=a("a"),fe=n("formiel"),ge=n(". The original code can be found "),I=a("a"),_e=n("here"),be=n("."),A=h(),K=a("h2"),O=a("a"),se=a("span"),T(f.$$.fragment),E=h(),V=a("span"),ye=n("FlaubertConfig"),ke=h(),P=a("div"),T(ve.$$.fragment),$e=h(),ae=a("p"),S=n("This is the configuration class to store the configuration of a "),W=a("a"),Me=n("FlaubertModel"),xe=n(" or a "),X=a("a"),Ee=n("TFFlaubertModel"),ze=n(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),te=a("a"),Ce=n("flaubert/flaubert_base_uncased"),cd=n(" architecture."),pd=h(),Lt=a("p"),hd=n("Configuration objects inherit from "),ra=a("a"),ud=n("PretrainedConfig"),md=n(` and can be used to control the model outputs. Read the
documentation from `),ia=a("a"),fd=n("PretrainedConfig"),gd=n(" for more information."),Xi=h(),jt=a("h2"),uo=a("a"),nr=a("span"),T(Tn.$$.fragment),_d=h(),sr=a("span"),bd=n("FlaubertTokenizer"),Hi=h(),et=a("div"),T(wn.$$.fragment),vd=h(),ar=a("p"),kd=n("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Td=h(),vt=a("ul"),rr=a("li"),wd=n("Moses preprocessing and tokenization."),Fd=h(),ir=a("li"),yd=n("Normalizing all inputs text."),$d=h(),kt=a("li"),Md=n("The arguments "),lr=a("code"),xd=n("special_tokens"),Ed=n(" and the function "),dr=a("code"),zd=n("set_special_tokens"),Cd=n(`, can be used to add additional symbols (like
\u201D`),cr=a("strong"),qd=n("classify"),Ld=n("\u201D) to a vocabulary."),jd=h(),Fn=a("li"),Pd=n("The argument "),pr=a("code"),Ad=n("do_lowercase"),Nd=n(" controls lower casing (automatically set for pretrained vocabularies)."),Sd=h(),yn=a("p"),Od=n("This tokenizer inherits from "),la=a("a"),Dd=n("XLMTokenizer"),Id=n(`. Please check the superclass for usage examples and documentation
regarding arguments.`),Qi=h(),Pt=a("h2"),mo=a("a"),hr=a("span"),T($n.$$.fragment),Wd=h(),ur=a("span"),Xd=n("FlaubertModel"),Ui=h(),Re=a("div"),T(Mn.$$.fragment),Hd=h(),mr=a("p"),Qd=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Ud=h(),xn=a("p"),Rd=n("This model inherits from "),da=a("a"),Bd=n("PreTrainedModel"),Vd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=h(),En=a("p"),Gd=n("This model is also a PyTorch "),zn=a("a"),Kd=n("torch.nn.Module"),Jd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=h(),tt=a("div"),T(Cn.$$.fragment),ec=h(),At=a("p"),tc=n("The "),ca=a("a"),oc=n("FlaubertModel"),nc=n(" forward method, overrides the "),fr=a("code"),sc=n("__call__"),ac=n(" special method."),rc=h(),T(fo.$$.fragment),ic=h(),T(go.$$.fragment),Ri=h(),Nt=a("h2"),_o=a("a"),gr=a("span"),T(qn.$$.fragment),lc=h(),_r=a("span"),dc=n("FlaubertWithLMHeadModel"),Bi=h(),je=a("div"),T(Ln.$$.fragment),cc=h(),br=a("p"),pc=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),hc=h(),jn=a("p"),uc=n("This model inherits from "),pa=a("a"),mc=n("PreTrainedModel"),fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=h(),Pn=a("p"),_c=n("This model is also a PyTorch "),An=a("a"),bc=n("torch.nn.Module"),vc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kc=h(),Nn=a("p"),Tc=n("This class overrides "),ha=a("a"),wc=n("XLMWithLMHeadModel"),Fc=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),yc=h(),Be=a("div"),T(Sn.$$.fragment),$c=h(),St=a("p"),Mc=n("The "),ua=a("a"),xc=n("XLMWithLMHeadModel"),Ec=n(" forward method, overrides the "),vr=a("code"),zc=n("__call__"),Cc=n(" special method."),qc=h(),T(bo.$$.fragment),Lc=h(),T(vo.$$.fragment),jc=h(),T(ko.$$.fragment),Vi=h(),Ot=a("h2"),To=a("a"),kr=a("span"),T(On.$$.fragment),Pc=h(),Tr=a("span"),Ac=n("FlaubertForSequenceClassification"),Yi=h(),Pe=a("div"),T(Dn.$$.fragment),Nc=h(),wr=a("p"),Sc=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Oc=h(),In=a("p"),Dc=n("This model inherits from "),ma=a("a"),Ic=n("PreTrainedModel"),Wc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc=h(),Wn=a("p"),Hc=n("This model is also a PyTorch "),Xn=a("a"),Qc=n("torch.nn.Module"),Uc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc=h(),Hn=a("p"),Bc=n("This class overrides "),fa=a("a"),Vc=n("XLMForSequenceClassification"),Yc=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Gc=h(),Le=a("div"),T(Qn.$$.fragment),Kc=h(),Dt=a("p"),Jc=n("The "),ga=a("a"),Zc=n("XLMForSequenceClassification"),ep=n(" forward method, overrides the "),Fr=a("code"),tp=n("__call__"),op=n(" special method."),np=h(),T(wo.$$.fragment),sp=h(),T(Fo.$$.fragment),ap=h(),T(yo.$$.fragment),rp=h(),T($o.$$.fragment),ip=h(),T(Mo.$$.fragment),Gi=h(),It=a("h2"),xo=a("a"),yr=a("span"),T(Un.$$.fragment),lp=h(),$r=a("span"),dp=n("FlaubertForMultipleChoice"),Ki=h(),Ae=a("div"),T(Rn.$$.fragment),cp=h(),Mr=a("p"),pp=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),hp=h(),Bn=a("p"),up=n("This model inherits from "),_a=a("a"),mp=n("PreTrainedModel"),fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=h(),Vn=a("p"),_p=n("This model is also a PyTorch "),Yn=a("a"),bp=n("torch.nn.Module"),vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp=h(),Gn=a("p"),Tp=n("This class overrides "),ba=a("a"),wp=n("XLMForMultipleChoice"),Fp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),yp=h(),ot=a("div"),T(Kn.$$.fragment),$p=h(),Wt=a("p"),Mp=n("The "),va=a("a"),xp=n("XLMForMultipleChoice"),Ep=n(" forward method, overrides the "),xr=a("code"),zp=n("__call__"),Cp=n(" special method."),qp=h(),T(Eo.$$.fragment),Lp=h(),T(zo.$$.fragment),Ji=h(),Xt=a("h2"),Co=a("a"),Er=a("span"),T(Jn.$$.fragment),jp=h(),zr=a("span"),Pp=n("FlaubertForTokenClassification"),Zi=h(),Ne=a("div"),T(Zn.$$.fragment),Ap=h(),Cr=a("p"),Np=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sp=h(),es=a("p"),Op=n("This model inherits from "),ka=a("a"),Dp=n("PreTrainedModel"),Ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp=h(),ts=a("p"),Xp=n("This model is also a PyTorch "),os=a("a"),Hp=n("torch.nn.Module"),Qp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up=h(),ns=a("p"),Rp=n("This class overrides "),Ta=a("a"),Bp=n("XLMForTokenClassification"),Vp=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Yp=h(),Ve=a("div"),T(ss.$$.fragment),Gp=h(),Ht=a("p"),Kp=n("The "),wa=a("a"),Jp=n("XLMForTokenClassification"),Zp=n(" forward method, overrides the "),qr=a("code"),eh=n("__call__"),th=n(" special method."),oh=h(),T(qo.$$.fragment),nh=h(),T(Lo.$$.fragment),sh=h(),T(jo.$$.fragment),el=h(),Qt=a("h2"),Po=a("a"),Lr=a("span"),T(as.$$.fragment),ah=h(),jr=a("span"),rh=n("FlaubertForQuestionAnsweringSimple"),tl=h(),Se=a("div"),T(rs.$$.fragment),ih=h(),Ut=a("p"),lh=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=a("code"),dh=n("span start logits"),ch=n(" and "),Ar=a("code"),ph=n("span end logits"),hh=n(")."),uh=h(),is=a("p"),mh=n("This model inherits from "),Fa=a("a"),fh=n("PreTrainedModel"),gh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=h(),ls=a("p"),bh=n("This model is also a PyTorch "),ds=a("a"),vh=n("torch.nn.Module"),kh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Th=h(),cs=a("p"),wh=n("This class overrides "),ya=a("a"),Fh=n("XLMForQuestionAnsweringSimple"),yh=n(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$h=h(),Ye=a("div"),T(ps.$$.fragment),Mh=h(),Rt=a("p"),xh=n("The "),$a=a("a"),Eh=n("XLMForQuestionAnsweringSimple"),zh=n(" forward method, overrides the "),Nr=a("code"),Ch=n("__call__"),qh=n(" special method."),Lh=h(),T(Ao.$$.fragment),jh=h(),T(No.$$.fragment),Ph=h(),T(So.$$.fragment),ol=h(),Bt=a("h2"),Oo=a("a"),Sr=a("span"),T(hs.$$.fragment),Ah=h(),Or=a("span"),Nh=n("FlaubertForQuestionAnswering"),nl=h(),Oe=a("div"),T(us.$$.fragment),Sh=h(),Vt=a("p"),Oh=n(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=a("code"),Dh=n("span start logits"),Ih=n(" and "),Ir=a("code"),Wh=n("span end logits"),Xh=n(")."),Hh=h(),ms=a("p"),Qh=n("This model inherits from "),Ma=a("a"),Uh=n("PreTrainedModel"),Rh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh=h(),fs=a("p"),Vh=n("This model is also a PyTorch "),gs=a("a"),Yh=n("torch.nn.Module"),Gh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kh=h(),_s=a("p"),Jh=n("This class overrides "),xa=a("a"),Zh=n("XLMForQuestionAnswering"),eu=n(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),tu=h(),nt=a("div"),T(bs.$$.fragment),ou=h(),Yt=a("p"),nu=n("The "),Ea=a("a"),su=n("XLMForQuestionAnswering"),au=n(" forward method, overrides the "),Wr=a("code"),ru=n("__call__"),iu=n(" special method."),lu=h(),T(Do.$$.fragment),du=h(),T(Io.$$.fragment),sl=h(),Gt=a("h2"),Wo=a("a"),Xr=a("span"),T(vs.$$.fragment),cu=h(),Hr=a("span"),pu=n("TFFlaubertModel"),al=h(),De=a("div"),T(ks.$$.fragment),hu=h(),Qr=a("p"),uu=n("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),mu=h(),Ts=a("p"),fu=n("This model inherits from "),za=a("a"),gu=n("TFPreTrainedModel"),_u=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=h(),ws=a("p"),vu=n("This model is also a "),Fs=a("a"),ku=n("tf.keras.Model"),Tu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wu=h(),T(Xo.$$.fragment),Fu=h(),st=a("div"),T(ys.$$.fragment),yu=h(),Kt=a("p"),$u=n("The "),Ca=a("a"),Mu=n("TFFlaubertModel"),xu=n(" forward method, overrides the "),Ur=a("code"),Eu=n("__call__"),zu=n(" special method."),Cu=h(),T(Ho.$$.fragment),qu=h(),T(Qo.$$.fragment),rl=h(),Jt=a("h2"),Uo=a("a"),Rr=a("span"),T($s.$$.fragment),Lu=h(),Br=a("span"),ju=n("TFFlaubertWithLMHeadModel"),il=h(),Ie=a("div"),T(Ms.$$.fragment),Pu=h(),Vr=a("p"),Au=n(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nu=h(),xs=a("p"),Su=n("This model inherits from "),qa=a("a"),Ou=n("TFPreTrainedModel"),Du=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu=h(),Es=a("p"),Wu=n("This model is also a "),zs=a("a"),Xu=n("tf.keras.Model"),Hu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu=h(),T(Ro.$$.fragment),Uu=h(),at=a("div"),T(Cs.$$.fragment),Ru=h(),Zt=a("p"),Bu=n("The "),La=a("a"),Vu=n("TFFlaubertWithLMHeadModel"),Yu=n(" forward method, overrides the "),Yr=a("code"),Gu=n("__call__"),Ku=n(" special method."),Ju=h(),T(Bo.$$.fragment),Zu=h(),T(Vo.$$.fragment),ll=h(),eo=a("h2"),Yo=a("a"),Gr=a("span"),T(qs.$$.fragment),em=h(),Kr=a("span"),tm=n("TFFlaubertForSequenceClassification"),dl=h(),We=a("div"),T(Ls.$$.fragment),om=h(),Jr=a("p"),nm=n(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),sm=h(),js=a("p"),am=n("This model inherits from "),ja=a("a"),rm=n("TFPreTrainedModel"),im=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm=h(),Ps=a("p"),dm=n("This model is also a "),As=a("a"),cm=n("tf.keras.Model"),pm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hm=h(),T(Go.$$.fragment),um=h(),Ge=a("div"),T(Ns.$$.fragment),mm=h(),to=a("p"),fm=n("The "),Pa=a("a"),gm=n("TFXLMForSequenceClassification"),_m=n(" forward method, overrides the "),Zr=a("code"),bm=n("__call__"),vm=n(" special method."),km=h(),T(Ko.$$.fragment),Tm=h(),T(Jo.$$.fragment),wm=h(),T(Zo.$$.fragment),cl=h(),oo=a("h2"),en=a("a"),ei=a("span"),T(Ss.$$.fragment),Fm=h(),ti=a("span"),ym=n("TFFlaubertForMultipleChoice"),pl=h(),Xe=a("div"),T(Os.$$.fragment),$m=h(),oi=a("p"),Mm=n(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xm=h(),Ds=a("p"),Em=n("This model inherits from "),Aa=a("a"),zm=n("TFPreTrainedModel"),Cm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=h(),Is=a("p"),Lm=n("This model is also a "),Ws=a("a"),jm=n("tf.keras.Model"),Pm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Am=h(),T(tn.$$.fragment),Nm=h(),rt=a("div"),T(Xs.$$.fragment),Sm=h(),no=a("p"),Om=n("The "),Na=a("a"),Dm=n("TFXLMForMultipleChoice"),Im=n(" forward method, overrides the "),ni=a("code"),Wm=n("__call__"),Xm=n(" special method."),Hm=h(),T(on.$$.fragment),Qm=h(),T(nn.$$.fragment),hl=h(),so=a("h2"),sn=a("a"),si=a("span"),T(Hs.$$.fragment),Um=h(),ai=a("span"),Rm=n("TFFlaubertForTokenClassification"),ul=h(),He=a("div"),T(Qs.$$.fragment),Bm=h(),ri=a("p"),Vm=n(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ym=h(),Us=a("p"),Gm=n("This model inherits from "),Sa=a("a"),Km=n("TFPreTrainedModel"),Jm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=h(),Rs=a("p"),ef=n("This model is also a "),Bs=a("a"),tf=n("tf.keras.Model"),of=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=h(),T(an.$$.fragment),sf=h(),Ke=a("div"),T(Vs.$$.fragment),af=h(),ao=a("p"),rf=n("The "),Oa=a("a"),lf=n("TFXLMForTokenClassification"),df=n(" forward method, overrides the "),ii=a("code"),cf=n("__call__"),pf=n(" special method."),hf=h(),T(rn.$$.fragment),uf=h(),T(ln.$$.fragment),mf=h(),T(dn.$$.fragment),ml=h(),ro=a("h2"),cn=a("a"),li=a("span"),T(Ys.$$.fragment),ff=h(),di=a("span"),gf=n("TFFlaubertForQuestionAnsweringSimple"),fl=h(),Qe=a("div"),T(Gs.$$.fragment),_f=h(),io=a("p"),bf=n(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=a("code"),vf=n("span start logits"),kf=n(" and "),pi=a("code"),Tf=n("span end logits"),wf=n(")."),Ff=h(),Ks=a("p"),yf=n("This model inherits from "),Da=a("a"),$f=n("TFPreTrainedModel"),Mf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=h(),Js=a("p"),Ef=n("This model is also a "),Zs=a("a"),zf=n("tf.keras.Model"),Cf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=h(),T(pn.$$.fragment),Lf=h(),Je=a("div"),T(ea.$$.fragment),jf=h(),lo=a("p"),Pf=n("The "),Ia=a("a"),Af=n("TFXLMForQuestionAnsweringSimple"),Nf=n(" forward method, overrides the "),hi=a("code"),Sf=n("__call__"),Of=n(" special method."),Df=h(),T(hn.$$.fragment),If=h(),T(un.$$.fragment),Wf=h(),T(mn.$$.fragment),this.h()},l(o){const k=J_('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=u(o),c=r(o,"H1",{class:!0});var ta=i(c);p=r(ta,"A",{id:!0,class:!0,href:!0});var ui=i(p);v=r(ui,"SPAN",{});var mi=i(v);w(l.$$.fragment,mi),mi.forEach(t),ui.forEach(t),m=u(ta),z=r(ta,"SPAN",{});var fi=i(z);ce=s(fi,"FlauBERT"),fi.forEach(t),ta.forEach(t),Y=u(o),C=r(o,"H2",{class:!0});var oa=i(C);J=r(oa,"A",{id:!0,class:!0,href:!0});var gi=i(J);H=r(gi,"SPAN",{});var _i=i(H);w(Z.$$.fragment,_i),_i.forEach(t),gi.forEach(t),pe=u(oa),Q=r(oa,"SPAN",{});var bi=i(Q);he=s(bi,"Overview"),bi.forEach(t),oa.forEach(t),re=u(o),B=r(o,"P",{});var na=i(B);N=s(na,"The FlauBERT model was proposed in the paper "),ee=r(na,"A",{href:!0,rel:!0});var vi=i(ee);G=s(vi,"FlauBERT: Unsupervised Language Model Pre-training for French"),vi.forEach(t),q=s(na,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),na.forEach(t),j=u(o),oe=r(o,"P",{});var ki=i(oe);R=s(ki,"The abstract from the paper is the following:"),ki.forEach(t),ie=u(o),ne=r(o,"P",{});var Ti=i(ne);U=r(Ti,"EM",{});var wi=i(U);ue=s(wi,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),wi.forEach(t),Ti.forEach(t),le=u(o),L=r(o,"P",{});var co=i(L);me=s(co,"This model was contributed by "),D=r(co,"A",{href:!0,rel:!0});var Fi=i(D);fe=s(Fi,"formiel"),Fi.forEach(t),ge=s(co,". The original code can be found "),I=r(co,"A",{href:!0,rel:!0});var yi=i(I);_e=s(yi,"here"),yi.forEach(t),be=s(co,"."),co.forEach(t),A=u(o),K=r(o,"H2",{class:!0});var sa=i(K);O=r(sa,"A",{id:!0,class:!0,href:!0});var $i=i(O);se=r($i,"SPAN",{});var Mi=i(se);w(f.$$.fragment,Mi),Mi.forEach(t),$i.forEach(t),E=u(sa),V=r(sa,"SPAN",{});var xi=i(V);ye=s(xi,"FlaubertConfig"),xi.forEach(t),sa.forEach(t),ke=u(o),P=r(o,"DIV",{class:!0});var po=i(P);w(ve.$$.fragment,po),$e=u(po),ae=r(po,"P",{});var Tt=i(ae);S=s(Tt,"This is the configuration class to store the configuration of a "),W=r(Tt,"A",{href:!0});var Ei=i(W);Me=s(Ei,"FlaubertModel"),Ei.forEach(t),xe=s(Tt," or a "),X=r(Tt,"A",{href:!0});var zi=i(X);Ee=s(zi,"TFFlaubertModel"),zi.forEach(t),ze=s(Tt,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),te=r(Tt,"A",{href:!0,rel:!0});var Ci=i(te);Ce=s(Ci,"flaubert/flaubert_base_uncased"),Ci.forEach(t),cd=s(Tt," architecture."),Tt.forEach(t),pd=u(po),Lt=r(po,"P",{});var ho=i(Lt);hd=s(ho,"Configuration objects inherit from "),ra=r(ho,"A",{href:!0});var qi=i(ra);ud=s(qi,"PretrainedConfig"),qi.forEach(t),md=s(ho,` and can be used to control the model outputs. Read the
documentation from `),ia=r(ho,"A",{href:!0});var Li=i(ia);fd=s(Li,"PretrainedConfig"),Li.forEach(t),gd=s(ho," for more information."),ho.forEach(t),po.forEach(t),Xi=u(o),jt=r(o,"H2",{class:!0});var aa=i(jt);uo=r(aa,"A",{id:!0,class:!0,href:!0});var ji=i(uo);nr=r(ji,"SPAN",{});var Pi=i(nr);w(Tn.$$.fragment,Pi),Pi.forEach(t),ji.forEach(t),_d=u(aa),sr=r(aa,"SPAN",{});var Ai=i(sr);bd=s(Ai,"FlaubertTokenizer"),Ai.forEach(t),aa.forEach(t),Hi=u(o),et=r(o,"DIV",{class:!0});var wt=i(et);w(wn.$$.fragment,wt),vd=u(wt),ar=r(wt,"P",{});var Ni=i(ar);kd=s(Ni,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Ni.forEach(t),Td=u(wt),vt=r(wt,"UL",{});var Ft=i(vt);rr=r(Ft,"LI",{});var Si=i(rr);wd=s(Si,"Moses preprocessing and tokenization."),Si.forEach(t),Fd=u(Ft),ir=r(Ft,"LI",{});var Oi=i(ir);yd=s(Oi,"Normalizing all inputs text."),Oi.forEach(t),$d=u(Ft),kt=r(Ft,"LI",{});var yt=i(kt);Md=s(yt,"The arguments "),lr=r(yt,"CODE",{});var Di=i(lr);xd=s(Di,"special_tokens"),Di.forEach(t),Ed=s(yt," and the function "),dr=r(yt,"CODE",{});var Ii=i(dr);zd=s(Ii,"set_special_tokens"),Ii.forEach(t),Cd=s(yt,`, can be used to add additional symbols (like
\u201D`),cr=r(yt,"STRONG",{});var Wi=i(cr);qd=s(Wi,"classify"),Wi.forEach(t),Ld=s(yt,"\u201D) to a vocabulary."),yt.forEach(t),jd=u(Ft),Fn=r(Ft,"LI",{});var _l=i(Fn);Pd=s(_l,"The argument "),pr=r(_l,"CODE",{});var Xf=i(pr);Ad=s(Xf,"do_lowercase"),Xf.forEach(t),Nd=s(_l," controls lower casing (automatically set for pretrained vocabularies)."),_l.forEach(t),Ft.forEach(t),Sd=u(wt),yn=r(wt,"P",{});var bl=i(yn);Od=s(bl,"This tokenizer inherits from "),la=r(bl,"A",{href:!0});var Hf=i(la);Dd=s(Hf,"XLMTokenizer"),Hf.forEach(t),Id=s(bl,`. Please check the superclass for usage examples and documentation
regarding arguments.`),bl.forEach(t),wt.forEach(t),Qi=u(o),Pt=r(o,"H2",{class:!0});var vl=i(Pt);mo=r(vl,"A",{id:!0,class:!0,href:!0});var Qf=i(mo);hr=r(Qf,"SPAN",{});var Uf=i(hr);w($n.$$.fragment,Uf),Uf.forEach(t),Qf.forEach(t),Wd=u(vl),ur=r(vl,"SPAN",{});var Rf=i(ur);Xd=s(Rf,"FlaubertModel"),Rf.forEach(t),vl.forEach(t),Ui=u(o),Re=r(o,"DIV",{class:!0});var $t=i(Re);w(Mn.$$.fragment,$t),Hd=u($t),mr=r($t,"P",{});var Bf=i(mr);Qd=s(Bf,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Bf.forEach(t),Ud=u($t),xn=r($t,"P",{});var kl=i(xn);Rd=s(kl,"This model inherits from "),da=r(kl,"A",{href:!0});var Vf=i(da);Bd=s(Vf,"PreTrainedModel"),Vf.forEach(t),Vd=s(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(t),Yd=u($t),En=r($t,"P",{});var Tl=i(En);Gd=s(Tl,"This model is also a PyTorch "),zn=r(Tl,"A",{href:!0,rel:!0});var Yf=i(zn);Kd=s(Yf,"torch.nn.Module"),Yf.forEach(t),Jd=s(Tl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tl.forEach(t),Zd=u($t),tt=r($t,"DIV",{class:!0});var fn=i(tt);w(Cn.$$.fragment,fn),ec=u(fn),At=r(fn,"P",{});var Wa=i(At);tc=s(Wa,"The "),ca=r(Wa,"A",{href:!0});var Gf=i(ca);oc=s(Gf,"FlaubertModel"),Gf.forEach(t),nc=s(Wa," forward method, overrides the "),fr=r(Wa,"CODE",{});var Kf=i(fr);sc=s(Kf,"__call__"),Kf.forEach(t),ac=s(Wa," special method."),Wa.forEach(t),rc=u(fn),w(fo.$$.fragment,fn),ic=u(fn),w(go.$$.fragment,fn),fn.forEach(t),$t.forEach(t),Ri=u(o),Nt=r(o,"H2",{class:!0});var wl=i(Nt);_o=r(wl,"A",{id:!0,class:!0,href:!0});var Jf=i(_o);gr=r(Jf,"SPAN",{});var Zf=i(gr);w(qn.$$.fragment,Zf),Zf.forEach(t),Jf.forEach(t),lc=u(wl),_r=r(wl,"SPAN",{});var eg=i(_r);dc=s(eg,"FlaubertWithLMHeadModel"),eg.forEach(t),wl.forEach(t),Bi=u(o),je=r(o,"DIV",{class:!0});var it=i(je);w(Ln.$$.fragment,it),cc=u(it),br=r(it,"P",{});var tg=i(br);pc=s(tg,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tg.forEach(t),hc=u(it),jn=r(it,"P",{});var Fl=i(jn);uc=s(Fl,"This model inherits from "),pa=r(Fl,"A",{href:!0});var og=i(pa);mc=s(og,"PreTrainedModel"),og.forEach(t),fc=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),gc=u(it),Pn=r(it,"P",{});var yl=i(Pn);_c=s(yl,"This model is also a PyTorch "),An=r(yl,"A",{href:!0,rel:!0});var ng=i(An);bc=s(ng,"torch.nn.Module"),ng.forEach(t),vc=s(yl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl.forEach(t),kc=u(it),Nn=r(it,"P",{});var $l=i(Nn);Tc=s($l,"This class overrides "),ha=r($l,"A",{href:!0});var sg=i(ha);wc=s(sg,"XLMWithLMHeadModel"),sg.forEach(t),Fc=s($l,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),$l.forEach(t),yc=u(it),Be=r(it,"DIV",{class:!0});var Mt=i(Be);w(Sn.$$.fragment,Mt),$c=u(Mt),St=r(Mt,"P",{});var Xa=i(St);Mc=s(Xa,"The "),ua=r(Xa,"A",{href:!0});var ag=i(ua);xc=s(ag,"XLMWithLMHeadModel"),ag.forEach(t),Ec=s(Xa," forward method, overrides the "),vr=r(Xa,"CODE",{});var rg=i(vr);zc=s(rg,"__call__"),rg.forEach(t),Cc=s(Xa," special method."),Xa.forEach(t),qc=u(Mt),w(bo.$$.fragment,Mt),Lc=u(Mt),w(vo.$$.fragment,Mt),jc=u(Mt),w(ko.$$.fragment,Mt),Mt.forEach(t),it.forEach(t),Vi=u(o),Ot=r(o,"H2",{class:!0});var Ml=i(Ot);To=r(Ml,"A",{id:!0,class:!0,href:!0});var ig=i(To);kr=r(ig,"SPAN",{});var lg=i(kr);w(On.$$.fragment,lg),lg.forEach(t),ig.forEach(t),Pc=u(Ml),Tr=r(Ml,"SPAN",{});var dg=i(Tr);Ac=s(dg,"FlaubertForSequenceClassification"),dg.forEach(t),Ml.forEach(t),Yi=u(o),Pe=r(o,"DIV",{class:!0});var lt=i(Pe);w(Dn.$$.fragment,lt),Nc=u(lt),wr=r(lt,"P",{});var cg=i(wr);Sc=s(cg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),cg.forEach(t),Oc=u(lt),In=r(lt,"P",{});var xl=i(In);Dc=s(xl,"This model inherits from "),ma=r(xl,"A",{href:!0});var pg=i(ma);Ic=s(pg,"PreTrainedModel"),pg.forEach(t),Wc=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Xc=u(lt),Wn=r(lt,"P",{});var El=i(Wn);Hc=s(El,"This model is also a PyTorch "),Xn=r(El,"A",{href:!0,rel:!0});var hg=i(Xn);Qc=s(hg,"torch.nn.Module"),hg.forEach(t),Uc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),Rc=u(lt),Hn=r(lt,"P",{});var zl=i(Hn);Bc=s(zl,"This class overrides "),fa=r(zl,"A",{href:!0});var ug=i(fa);Vc=s(ug,"XLMForSequenceClassification"),ug.forEach(t),Yc=s(zl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),zl.forEach(t),Gc=u(lt),Le=r(lt,"DIV",{class:!0});var Ze=i(Le);w(Qn.$$.fragment,Ze),Kc=u(Ze),Dt=r(Ze,"P",{});var Ha=i(Dt);Jc=s(Ha,"The "),ga=r(Ha,"A",{href:!0});var mg=i(ga);Zc=s(mg,"XLMForSequenceClassification"),mg.forEach(t),ep=s(Ha," forward method, overrides the "),Fr=r(Ha,"CODE",{});var fg=i(Fr);tp=s(fg,"__call__"),fg.forEach(t),op=s(Ha," special method."),Ha.forEach(t),np=u(Ze),w(wo.$$.fragment,Ze),sp=u(Ze),w(Fo.$$.fragment,Ze),ap=u(Ze),w(yo.$$.fragment,Ze),rp=u(Ze),w($o.$$.fragment,Ze),ip=u(Ze),w(Mo.$$.fragment,Ze),Ze.forEach(t),lt.forEach(t),Gi=u(o),It=r(o,"H2",{class:!0});var Cl=i(It);xo=r(Cl,"A",{id:!0,class:!0,href:!0});var gg=i(xo);yr=r(gg,"SPAN",{});var _g=i(yr);w(Un.$$.fragment,_g),_g.forEach(t),gg.forEach(t),lp=u(Cl),$r=r(Cl,"SPAN",{});var bg=i($r);dp=s(bg,"FlaubertForMultipleChoice"),bg.forEach(t),Cl.forEach(t),Ki=u(o),Ae=r(o,"DIV",{class:!0});var dt=i(Ae);w(Rn.$$.fragment,dt),cp=u(dt),Mr=r(dt,"P",{});var vg=i(Mr);pp=s(vg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),vg.forEach(t),hp=u(dt),Bn=r(dt,"P",{});var ql=i(Bn);up=s(ql,"This model inherits from "),_a=r(ql,"A",{href:!0});var kg=i(_a);mp=s(kg,"PreTrainedModel"),kg.forEach(t),fp=s(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),gp=u(dt),Vn=r(dt,"P",{});var Ll=i(Vn);_p=s(Ll,"This model is also a PyTorch "),Yn=r(Ll,"A",{href:!0,rel:!0});var Tg=i(Yn);bp=s(Tg,"torch.nn.Module"),Tg.forEach(t),vp=s(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),kp=u(dt),Gn=r(dt,"P",{});var jl=i(Gn);Tp=s(jl,"This class overrides "),ba=r(jl,"A",{href:!0});var wg=i(ba);wp=s(wg,"XLMForMultipleChoice"),wg.forEach(t),Fp=s(jl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),jl.forEach(t),yp=u(dt),ot=r(dt,"DIV",{class:!0});var gn=i(ot);w(Kn.$$.fragment,gn),$p=u(gn),Wt=r(gn,"P",{});var Qa=i(Wt);Mp=s(Qa,"The "),va=r(Qa,"A",{href:!0});var Fg=i(va);xp=s(Fg,"XLMForMultipleChoice"),Fg.forEach(t),Ep=s(Qa," forward method, overrides the "),xr=r(Qa,"CODE",{});var yg=i(xr);zp=s(yg,"__call__"),yg.forEach(t),Cp=s(Qa," special method."),Qa.forEach(t),qp=u(gn),w(Eo.$$.fragment,gn),Lp=u(gn),w(zo.$$.fragment,gn),gn.forEach(t),dt.forEach(t),Ji=u(o),Xt=r(o,"H2",{class:!0});var Pl=i(Xt);Co=r(Pl,"A",{id:!0,class:!0,href:!0});var $g=i(Co);Er=r($g,"SPAN",{});var Mg=i(Er);w(Jn.$$.fragment,Mg),Mg.forEach(t),$g.forEach(t),jp=u(Pl),zr=r(Pl,"SPAN",{});var xg=i(zr);Pp=s(xg,"FlaubertForTokenClassification"),xg.forEach(t),Pl.forEach(t),Zi=u(o),Ne=r(o,"DIV",{class:!0});var ct=i(Ne);w(Zn.$$.fragment,ct),Ap=u(ct),Cr=r(ct,"P",{});var Eg=i(Cr);Np=s(Eg,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Eg.forEach(t),Sp=u(ct),es=r(ct,"P",{});var Al=i(es);Op=s(Al,"This model inherits from "),ka=r(Al,"A",{href:!0});var zg=i(ka);Dp=s(zg,"PreTrainedModel"),zg.forEach(t),Ip=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),Wp=u(ct),ts=r(ct,"P",{});var Nl=i(ts);Xp=s(Nl,"This model is also a PyTorch "),os=r(Nl,"A",{href:!0,rel:!0});var Cg=i(os);Hp=s(Cg,"torch.nn.Module"),Cg.forEach(t),Qp=s(Nl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl.forEach(t),Up=u(ct),ns=r(ct,"P",{});var Sl=i(ns);Rp=s(Sl,"This class overrides "),Ta=r(Sl,"A",{href:!0});var qg=i(Ta);Bp=s(qg,"XLMForTokenClassification"),qg.forEach(t),Vp=s(Sl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Sl.forEach(t),Yp=u(ct),Ve=r(ct,"DIV",{class:!0});var xt=i(Ve);w(ss.$$.fragment,xt),Gp=u(xt),Ht=r(xt,"P",{});var Ua=i(Ht);Kp=s(Ua,"The "),wa=r(Ua,"A",{href:!0});var Lg=i(wa);Jp=s(Lg,"XLMForTokenClassification"),Lg.forEach(t),Zp=s(Ua," forward method, overrides the "),qr=r(Ua,"CODE",{});var jg=i(qr);eh=s(jg,"__call__"),jg.forEach(t),th=s(Ua," special method."),Ua.forEach(t),oh=u(xt),w(qo.$$.fragment,xt),nh=u(xt),w(Lo.$$.fragment,xt),sh=u(xt),w(jo.$$.fragment,xt),xt.forEach(t),ct.forEach(t),el=u(o),Qt=r(o,"H2",{class:!0});var Ol=i(Qt);Po=r(Ol,"A",{id:!0,class:!0,href:!0});var Pg=i(Po);Lr=r(Pg,"SPAN",{});var Ag=i(Lr);w(as.$$.fragment,Ag),Ag.forEach(t),Pg.forEach(t),ah=u(Ol),jr=r(Ol,"SPAN",{});var Ng=i(jr);rh=s(Ng,"FlaubertForQuestionAnsweringSimple"),Ng.forEach(t),Ol.forEach(t),tl=u(o),Se=r(o,"DIV",{class:!0});var pt=i(Se);w(rs.$$.fragment,pt),ih=u(pt),Ut=r(pt,"P",{});var Ra=i(Ut);lh=s(Ra,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Pr=r(Ra,"CODE",{});var Sg=i(Pr);dh=s(Sg,"span start logits"),Sg.forEach(t),ch=s(Ra," and "),Ar=r(Ra,"CODE",{});var Og=i(Ar);ph=s(Og,"span end logits"),Og.forEach(t),hh=s(Ra,")."),Ra.forEach(t),uh=u(pt),is=r(pt,"P",{});var Dl=i(is);mh=s(Dl,"This model inherits from "),Fa=r(Dl,"A",{href:!0});var Dg=i(Fa);fh=s(Dg,"PreTrainedModel"),Dg.forEach(t),gh=s(Dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl.forEach(t),_h=u(pt),ls=r(pt,"P",{});var Il=i(ls);bh=s(Il,"This model is also a PyTorch "),ds=r(Il,"A",{href:!0,rel:!0});var Ig=i(ds);vh=s(Ig,"torch.nn.Module"),Ig.forEach(t),kh=s(Il,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il.forEach(t),Th=u(pt),cs=r(pt,"P",{});var Wl=i(cs);wh=s(Wl,"This class overrides "),ya=r(Wl,"A",{href:!0});var Wg=i(ya);Fh=s(Wg,"XLMForQuestionAnsweringSimple"),Wg.forEach(t),yh=s(Wl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Wl.forEach(t),$h=u(pt),Ye=r(pt,"DIV",{class:!0});var Et=i(Ye);w(ps.$$.fragment,Et),Mh=u(Et),Rt=r(Et,"P",{});var Ba=i(Rt);xh=s(Ba,"The "),$a=r(Ba,"A",{href:!0});var Xg=i($a);Eh=s(Xg,"XLMForQuestionAnsweringSimple"),Xg.forEach(t),zh=s(Ba," forward method, overrides the "),Nr=r(Ba,"CODE",{});var Hg=i(Nr);Ch=s(Hg,"__call__"),Hg.forEach(t),qh=s(Ba," special method."),Ba.forEach(t),Lh=u(Et),w(Ao.$$.fragment,Et),jh=u(Et),w(No.$$.fragment,Et),Ph=u(Et),w(So.$$.fragment,Et),Et.forEach(t),pt.forEach(t),ol=u(o),Bt=r(o,"H2",{class:!0});var Xl=i(Bt);Oo=r(Xl,"A",{id:!0,class:!0,href:!0});var Qg=i(Oo);Sr=r(Qg,"SPAN",{});var Ug=i(Sr);w(hs.$$.fragment,Ug),Ug.forEach(t),Qg.forEach(t),Ah=u(Xl),Or=r(Xl,"SPAN",{});var Rg=i(Or);Nh=s(Rg,"FlaubertForQuestionAnswering"),Rg.forEach(t),Xl.forEach(t),nl=u(o),Oe=r(o,"DIV",{class:!0});var ht=i(Oe);w(us.$$.fragment,ht),Sh=u(ht),Vt=r(ht,"P",{});var Va=i(Vt);Oh=s(Va,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Dr=r(Va,"CODE",{});var Bg=i(Dr);Dh=s(Bg,"span start logits"),Bg.forEach(t),Ih=s(Va," and "),Ir=r(Va,"CODE",{});var Vg=i(Ir);Wh=s(Vg,"span end logits"),Vg.forEach(t),Xh=s(Va,")."),Va.forEach(t),Hh=u(ht),ms=r(ht,"P",{});var Hl=i(ms);Qh=s(Hl,"This model inherits from "),Ma=r(Hl,"A",{href:!0});var Yg=i(Ma);Uh=s(Yg,"PreTrainedModel"),Yg.forEach(t),Rh=s(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Bh=u(ht),fs=r(ht,"P",{});var Ql=i(fs);Vh=s(Ql,"This model is also a PyTorch "),gs=r(Ql,"A",{href:!0,rel:!0});var Gg=i(gs);Yh=s(Gg,"torch.nn.Module"),Gg.forEach(t),Gh=s(Ql,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql.forEach(t),Kh=u(ht),_s=r(ht,"P",{});var Ul=i(_s);Jh=s(Ul,"This class overrides "),xa=r(Ul,"A",{href:!0});var Kg=i(xa);Zh=s(Kg,"XLMForQuestionAnswering"),Kg.forEach(t),eu=s(Ul,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Ul.forEach(t),tu=u(ht),nt=r(ht,"DIV",{class:!0});var _n=i(nt);w(bs.$$.fragment,_n),ou=u(_n),Yt=r(_n,"P",{});var Ya=i(Yt);nu=s(Ya,"The "),Ea=r(Ya,"A",{href:!0});var Jg=i(Ea);su=s(Jg,"XLMForQuestionAnswering"),Jg.forEach(t),au=s(Ya," forward method, overrides the "),Wr=r(Ya,"CODE",{});var Zg=i(Wr);ru=s(Zg,"__call__"),Zg.forEach(t),iu=s(Ya," special method."),Ya.forEach(t),lu=u(_n),w(Do.$$.fragment,_n),du=u(_n),w(Io.$$.fragment,_n),_n.forEach(t),ht.forEach(t),sl=u(o),Gt=r(o,"H2",{class:!0});var Rl=i(Gt);Wo=r(Rl,"A",{id:!0,class:!0,href:!0});var e_=i(Wo);Xr=r(e_,"SPAN",{});var t_=i(Xr);w(vs.$$.fragment,t_),t_.forEach(t),e_.forEach(t),cu=u(Rl),Hr=r(Rl,"SPAN",{});var o_=i(Hr);pu=s(o_,"TFFlaubertModel"),o_.forEach(t),Rl.forEach(t),al=u(o),De=r(o,"DIV",{class:!0});var ut=i(De);w(ks.$$.fragment,ut),hu=u(ut),Qr=r(ut,"P",{});var n_=i(Qr);uu=s(n_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),n_.forEach(t),mu=u(ut),Ts=r(ut,"P",{});var Bl=i(Ts);fu=s(Bl,"This model inherits from "),za=r(Bl,"A",{href:!0});var s_=i(za);gu=s(s_,"TFPreTrainedModel"),s_.forEach(t),_u=s(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),bu=u(ut),ws=r(ut,"P",{});var Vl=i(ws);vu=s(Vl,"This model is also a "),Fs=r(Vl,"A",{href:!0,rel:!0});var a_=i(Fs);ku=s(a_,"tf.keras.Model"),a_.forEach(t),Tu=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),wu=u(ut),w(Xo.$$.fragment,ut),Fu=u(ut),st=r(ut,"DIV",{class:!0});var bn=i(st);w(ys.$$.fragment,bn),yu=u(bn),Kt=r(bn,"P",{});var Ga=i(Kt);$u=s(Ga,"The "),Ca=r(Ga,"A",{href:!0});var r_=i(Ca);Mu=s(r_,"TFFlaubertModel"),r_.forEach(t),xu=s(Ga," forward method, overrides the "),Ur=r(Ga,"CODE",{});var i_=i(Ur);Eu=s(i_,"__call__"),i_.forEach(t),zu=s(Ga," special method."),Ga.forEach(t),Cu=u(bn),w(Ho.$$.fragment,bn),qu=u(bn),w(Qo.$$.fragment,bn),bn.forEach(t),ut.forEach(t),rl=u(o),Jt=r(o,"H2",{class:!0});var Yl=i(Jt);Uo=r(Yl,"A",{id:!0,class:!0,href:!0});var l_=i(Uo);Rr=r(l_,"SPAN",{});var d_=i(Rr);w($s.$$.fragment,d_),d_.forEach(t),l_.forEach(t),Lu=u(Yl),Br=r(Yl,"SPAN",{});var c_=i(Br);ju=s(c_,"TFFlaubertWithLMHeadModel"),c_.forEach(t),Yl.forEach(t),il=u(o),Ie=r(o,"DIV",{class:!0});var mt=i(Ie);w(Ms.$$.fragment,mt),Pu=u(mt),Vr=r(mt,"P",{});var p_=i(Vr);Au=s(p_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),p_.forEach(t),Nu=u(mt),xs=r(mt,"P",{});var Gl=i(xs);Su=s(Gl,"This model inherits from "),qa=r(Gl,"A",{href:!0});var h_=i(qa);Ou=s(h_,"TFPreTrainedModel"),h_.forEach(t),Du=s(Gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl.forEach(t),Iu=u(mt),Es=r(mt,"P",{});var Kl=i(Es);Wu=s(Kl,"This model is also a "),zs=r(Kl,"A",{href:!0,rel:!0});var u_=i(zs);Xu=s(u_,"tf.keras.Model"),u_.forEach(t),Hu=s(Kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kl.forEach(t),Qu=u(mt),w(Ro.$$.fragment,mt),Uu=u(mt),at=r(mt,"DIV",{class:!0});var vn=i(at);w(Cs.$$.fragment,vn),Ru=u(vn),Zt=r(vn,"P",{});var Ka=i(Zt);Bu=s(Ka,"The "),La=r(Ka,"A",{href:!0});var m_=i(La);Vu=s(m_,"TFFlaubertWithLMHeadModel"),m_.forEach(t),Yu=s(Ka," forward method, overrides the "),Yr=r(Ka,"CODE",{});var f_=i(Yr);Gu=s(f_,"__call__"),f_.forEach(t),Ku=s(Ka," special method."),Ka.forEach(t),Ju=u(vn),w(Bo.$$.fragment,vn),Zu=u(vn),w(Vo.$$.fragment,vn),vn.forEach(t),mt.forEach(t),ll=u(o),eo=r(o,"H2",{class:!0});var Jl=i(eo);Yo=r(Jl,"A",{id:!0,class:!0,href:!0});var g_=i(Yo);Gr=r(g_,"SPAN",{});var __=i(Gr);w(qs.$$.fragment,__),__.forEach(t),g_.forEach(t),em=u(Jl),Kr=r(Jl,"SPAN",{});var b_=i(Kr);tm=s(b_,"TFFlaubertForSequenceClassification"),b_.forEach(t),Jl.forEach(t),dl=u(o),We=r(o,"DIV",{class:!0});var ft=i(We);w(Ls.$$.fragment,ft),om=u(ft),Jr=r(ft,"P",{});var v_=i(Jr);nm=s(v_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),v_.forEach(t),sm=u(ft),js=r(ft,"P",{});var Zl=i(js);am=s(Zl,"This model inherits from "),ja=r(Zl,"A",{href:!0});var k_=i(ja);rm=s(k_,"TFPreTrainedModel"),k_.forEach(t),im=s(Zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zl.forEach(t),lm=u(ft),Ps=r(ft,"P",{});var ed=i(Ps);dm=s(ed,"This model is also a "),As=r(ed,"A",{href:!0,rel:!0});var T_=i(As);cm=s(T_,"tf.keras.Model"),T_.forEach(t),pm=s(ed,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ed.forEach(t),hm=u(ft),w(Go.$$.fragment,ft),um=u(ft),Ge=r(ft,"DIV",{class:!0});var zt=i(Ge);w(Ns.$$.fragment,zt),mm=u(zt),to=r(zt,"P",{});var Ja=i(to);fm=s(Ja,"The "),Pa=r(Ja,"A",{href:!0});var w_=i(Pa);gm=s(w_,"TFXLMForSequenceClassification"),w_.forEach(t),_m=s(Ja," forward method, overrides the "),Zr=r(Ja,"CODE",{});var F_=i(Zr);bm=s(F_,"__call__"),F_.forEach(t),vm=s(Ja," special method."),Ja.forEach(t),km=u(zt),w(Ko.$$.fragment,zt),Tm=u(zt),w(Jo.$$.fragment,zt),wm=u(zt),w(Zo.$$.fragment,zt),zt.forEach(t),ft.forEach(t),cl=u(o),oo=r(o,"H2",{class:!0});var td=i(oo);en=r(td,"A",{id:!0,class:!0,href:!0});var y_=i(en);ei=r(y_,"SPAN",{});var $_=i(ei);w(Ss.$$.fragment,$_),$_.forEach(t),y_.forEach(t),Fm=u(td),ti=r(td,"SPAN",{});var M_=i(ti);ym=s(M_,"TFFlaubertForMultipleChoice"),M_.forEach(t),td.forEach(t),pl=u(o),Xe=r(o,"DIV",{class:!0});var gt=i(Xe);w(Os.$$.fragment,gt),$m=u(gt),oi=r(gt,"P",{});var x_=i(oi);Mm=s(x_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x_.forEach(t),xm=u(gt),Ds=r(gt,"P",{});var od=i(Ds);Em=s(od,"This model inherits from "),Aa=r(od,"A",{href:!0});var E_=i(Aa);zm=s(E_,"TFPreTrainedModel"),E_.forEach(t),Cm=s(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(t),qm=u(gt),Is=r(gt,"P",{});var nd=i(Is);Lm=s(nd,"This model is also a "),Ws=r(nd,"A",{href:!0,rel:!0});var z_=i(Ws);jm=s(z_,"tf.keras.Model"),z_.forEach(t),Pm=s(nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nd.forEach(t),Am=u(gt),w(tn.$$.fragment,gt),Nm=u(gt),rt=r(gt,"DIV",{class:!0});var kn=i(rt);w(Xs.$$.fragment,kn),Sm=u(kn),no=r(kn,"P",{});var Za=i(no);Om=s(Za,"The "),Na=r(Za,"A",{href:!0});var C_=i(Na);Dm=s(C_,"TFXLMForMultipleChoice"),C_.forEach(t),Im=s(Za," forward method, overrides the "),ni=r(Za,"CODE",{});var q_=i(ni);Wm=s(q_,"__call__"),q_.forEach(t),Xm=s(Za," special method."),Za.forEach(t),Hm=u(kn),w(on.$$.fragment,kn),Qm=u(kn),w(nn.$$.fragment,kn),kn.forEach(t),gt.forEach(t),hl=u(o),so=r(o,"H2",{class:!0});var sd=i(so);sn=r(sd,"A",{id:!0,class:!0,href:!0});var L_=i(sn);si=r(L_,"SPAN",{});var j_=i(si);w(Hs.$$.fragment,j_),j_.forEach(t),L_.forEach(t),Um=u(sd),ai=r(sd,"SPAN",{});var P_=i(ai);Rm=s(P_,"TFFlaubertForTokenClassification"),P_.forEach(t),sd.forEach(t),ul=u(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(Qs.$$.fragment,_t),Bm=u(_t),ri=r(_t,"P",{});var A_=i(ri);Vm=s(A_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A_.forEach(t),Ym=u(_t),Us=r(_t,"P",{});var ad=i(Us);Gm=s(ad,"This model inherits from "),Sa=r(ad,"A",{href:!0});var N_=i(Sa);Km=s(N_,"TFPreTrainedModel"),N_.forEach(t),Jm=s(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Zm=u(_t),Rs=r(_t,"P",{});var rd=i(Rs);ef=s(rd,"This model is also a "),Bs=r(rd,"A",{href:!0,rel:!0});var S_=i(Bs);tf=s(S_,"tf.keras.Model"),S_.forEach(t),of=s(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),nf=u(_t),w(an.$$.fragment,_t),sf=u(_t),Ke=r(_t,"DIV",{class:!0});var Ct=i(Ke);w(Vs.$$.fragment,Ct),af=u(Ct),ao=r(Ct,"P",{});var er=i(ao);rf=s(er,"The "),Oa=r(er,"A",{href:!0});var O_=i(Oa);lf=s(O_,"TFXLMForTokenClassification"),O_.forEach(t),df=s(er," forward method, overrides the "),ii=r(er,"CODE",{});var D_=i(ii);cf=s(D_,"__call__"),D_.forEach(t),pf=s(er," special method."),er.forEach(t),hf=u(Ct),w(rn.$$.fragment,Ct),uf=u(Ct),w(ln.$$.fragment,Ct),mf=u(Ct),w(dn.$$.fragment,Ct),Ct.forEach(t),_t.forEach(t),ml=u(o),ro=r(o,"H2",{class:!0});var id=i(ro);cn=r(id,"A",{id:!0,class:!0,href:!0});var I_=i(cn);li=r(I_,"SPAN",{});var W_=i(li);w(Ys.$$.fragment,W_),W_.forEach(t),I_.forEach(t),ff=u(id),di=r(id,"SPAN",{});var X_=i(di);gf=s(X_,"TFFlaubertForQuestionAnsweringSimple"),X_.forEach(t),id.forEach(t),fl=u(o),Qe=r(o,"DIV",{class:!0});var bt=i(Qe);w(Gs.$$.fragment,bt),_f=u(bt),io=r(bt,"P",{});var tr=i(io);bf=s(tr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ci=r(tr,"CODE",{});var H_=i(ci);vf=s(H_,"span start logits"),H_.forEach(t),kf=s(tr," and "),pi=r(tr,"CODE",{});var Q_=i(pi);Tf=s(Q_,"span end logits"),Q_.forEach(t),wf=s(tr,")."),tr.forEach(t),Ff=u(bt),Ks=r(bt,"P",{});var ld=i(Ks);yf=s(ld,"This model inherits from "),Da=r(ld,"A",{href:!0});var U_=i(Da);$f=s(U_,"TFPreTrainedModel"),U_.forEach(t),Mf=s(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),xf=u(bt),Js=r(bt,"P",{});var dd=i(Js);Ef=s(dd,"This model is also a "),Zs=r(dd,"A",{href:!0,rel:!0});var R_=i(Zs);zf=s(R_,"tf.keras.Model"),R_.forEach(t),Cf=s(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),qf=u(bt),w(pn.$$.fragment,bt),Lf=u(bt),Je=r(bt,"DIV",{class:!0});var qt=i(Je);w(ea.$$.fragment,qt),jf=u(qt),lo=r(qt,"P",{});var or=i(lo);Pf=s(or,"The "),Ia=r(or,"A",{href:!0});var B_=i(Ia);Af=s(B_,"TFXLMForQuestionAnsweringSimple"),B_.forEach(t),Nf=s(or," forward method, overrides the "),hi=r(or,"CODE",{});var V_=i(hi);Sf=s(V_,"__call__"),V_.forEach(t),Of=s(or," special method."),or.forEach(t),Df=u(qt),w(hn.$$.fragment,qt),If=u(qt),w(un.$$.fragment,qt),Wf=u(qt),w(mn.$$.fragment,qt),qt.forEach(t),bt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(Xb)),_(p,"id","flaubert"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#flaubert"),_(c,"class","relative group"),_(J,"id","overview"),_(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(J,"href","#overview"),_(C,"class","relative group"),_(ee,"href","https://arxiv.org/abs/1912.05372"),_(ee,"rel","nofollow"),_(D,"href","https://huggingface.co/formiel"),_(D,"rel","nofollow"),_(I,"href","https://github.com/getalp/Flaubert"),_(I,"rel","nofollow"),_(O,"id","transformers.FlaubertConfig"),_(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(O,"href","#transformers.FlaubertConfig"),_(K,"class","relative group"),_(W,"href","/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertModel"),_(X,"href","/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(te,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),_(te,"rel","nofollow"),_(ra,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),_(ia,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),_(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(uo,"id","transformers.FlaubertTokenizer"),_(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(uo,"href","#transformers.FlaubertTokenizer"),_(jt,"class","relative group"),_(la,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMTokenizer"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(mo,"id","transformers.FlaubertModel"),_(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(mo,"href","#transformers.FlaubertModel"),_(Pt,"class","relative group"),_(da,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(zn,"rel","nofollow"),_(ca,"href","/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.FlaubertModel"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_o,"id","transformers.FlaubertWithLMHeadModel"),_(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_o,"href","#transformers.FlaubertWithLMHeadModel"),_(Nt,"class","relative group"),_(pa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(An,"rel","nofollow"),_(ha,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(ua,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(To,"id","transformers.FlaubertForSequenceClassification"),_(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(To,"href","#transformers.FlaubertForSequenceClassification"),_(Ot,"class","relative group"),_(ma,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xn,"rel","nofollow"),_(fa,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(ga,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForSequenceClassification"),_(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(xo,"id","transformers.FlaubertForMultipleChoice"),_(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(xo,"href","#transformers.FlaubertForMultipleChoice"),_(It,"class","relative group"),_(_a,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Yn,"rel","nofollow"),_(ba,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(va,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForMultipleChoice"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Co,"id","transformers.FlaubertForTokenClassification"),_(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Co,"href","#transformers.FlaubertForTokenClassification"),_(Xt,"class","relative group"),_(ka,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(os,"rel","nofollow"),_(Ta,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(wa,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForTokenClassification"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Po,"id","transformers.FlaubertForQuestionAnsweringSimple"),_(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Po,"href","#transformers.FlaubertForQuestionAnsweringSimple"),_(Qt,"class","relative group"),_(Fa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ds,"rel","nofollow"),_(ya,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_($a,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oo,"id","transformers.FlaubertForQuestionAnswering"),_(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Oo,"href","#transformers.FlaubertForQuestionAnswering"),_(Bt,"class","relative group"),_(Ma,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(gs,"rel","nofollow"),_(xa,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(Ea,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"id","transformers.TFFlaubertModel"),_(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wo,"href","#transformers.TFFlaubertModel"),_(Gt,"class","relative group"),_(za,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Fs,"rel","nofollow"),_(Ca,"href","/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.TFFlaubertModel"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.TFFlaubertWithLMHeadModel"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.TFFlaubertWithLMHeadModel"),_(Jt,"class","relative group"),_(qa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(zs,"rel","nofollow"),_(La,"href","/docs/transformers/v4.21.1/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yo,"id","transformers.TFFlaubertForSequenceClassification"),_(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Yo,"href","#transformers.TFFlaubertForSequenceClassification"),_(eo,"class","relative group"),_(ja,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(As,"rel","nofollow"),_(Pa,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.TFFlaubertForMultipleChoice"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.TFFlaubertForMultipleChoice"),_(oo,"class","relative group"),_(Aa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ws,"rel","nofollow"),_(Na,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.TFFlaubertForTokenClassification"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.TFFlaubertForTokenClassification"),_(so,"class","relative group"),_(Sa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Bs,"rel","nofollow"),_(Oa,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),_(ro,"class","relative group"),_(Da,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Zs,"rel","nofollow"),_(Ia,"href","/docs/transformers/v4.21.1/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,c,k),e(c,p),e(p,v),F(l,v,null),e(c,m),e(c,z),e(z,ce),b(o,Y,k),b(o,C,k),e(C,J),e(J,H),F(Z,H,null),e(C,pe),e(C,Q),e(Q,he),b(o,re,k),b(o,B,k),e(B,N),e(B,ee),e(ee,G),e(B,q),b(o,j,k),b(o,oe,k),e(oe,R),b(o,ie,k),b(o,ne,k),e(ne,U),e(U,ue),b(o,le,k),b(o,L,k),e(L,me),e(L,D),e(D,fe),e(L,ge),e(L,I),e(I,_e),e(L,be),b(o,A,k),b(o,K,k),e(K,O),e(O,se),F(f,se,null),e(K,E),e(K,V),e(V,ye),b(o,ke,k),b(o,P,k),F(ve,P,null),e(P,$e),e(P,ae),e(ae,S),e(ae,W),e(W,Me),e(ae,xe),e(ae,X),e(X,Ee),e(ae,ze),e(ae,te),e(te,Ce),e(ae,cd),e(P,pd),e(P,Lt),e(Lt,hd),e(Lt,ra),e(ra,ud),e(Lt,md),e(Lt,ia),e(ia,fd),e(Lt,gd),b(o,Xi,k),b(o,jt,k),e(jt,uo),e(uo,nr),F(Tn,nr,null),e(jt,_d),e(jt,sr),e(sr,bd),b(o,Hi,k),b(o,et,k),F(wn,et,null),e(et,vd),e(et,ar),e(ar,kd),e(et,Td),e(et,vt),e(vt,rr),e(rr,wd),e(vt,Fd),e(vt,ir),e(ir,yd),e(vt,$d),e(vt,kt),e(kt,Md),e(kt,lr),e(lr,xd),e(kt,Ed),e(kt,dr),e(dr,zd),e(kt,Cd),e(kt,cr),e(cr,qd),e(kt,Ld),e(vt,jd),e(vt,Fn),e(Fn,Pd),e(Fn,pr),e(pr,Ad),e(Fn,Nd),e(et,Sd),e(et,yn),e(yn,Od),e(yn,la),e(la,Dd),e(yn,Id),b(o,Qi,k),b(o,Pt,k),e(Pt,mo),e(mo,hr),F($n,hr,null),e(Pt,Wd),e(Pt,ur),e(ur,Xd),b(o,Ui,k),b(o,Re,k),F(Mn,Re,null),e(Re,Hd),e(Re,mr),e(mr,Qd),e(Re,Ud),e(Re,xn),e(xn,Rd),e(xn,da),e(da,Bd),e(xn,Vd),e(Re,Yd),e(Re,En),e(En,Gd),e(En,zn),e(zn,Kd),e(En,Jd),e(Re,Zd),e(Re,tt),F(Cn,tt,null),e(tt,ec),e(tt,At),e(At,tc),e(At,ca),e(ca,oc),e(At,nc),e(At,fr),e(fr,sc),e(At,ac),e(tt,rc),F(fo,tt,null),e(tt,ic),F(go,tt,null),b(o,Ri,k),b(o,Nt,k),e(Nt,_o),e(_o,gr),F(qn,gr,null),e(Nt,lc),e(Nt,_r),e(_r,dc),b(o,Bi,k),b(o,je,k),F(Ln,je,null),e(je,cc),e(je,br),e(br,pc),e(je,hc),e(je,jn),e(jn,uc),e(jn,pa),e(pa,mc),e(jn,fc),e(je,gc),e(je,Pn),e(Pn,_c),e(Pn,An),e(An,bc),e(Pn,vc),e(je,kc),e(je,Nn),e(Nn,Tc),e(Nn,ha),e(ha,wc),e(Nn,Fc),e(je,yc),e(je,Be),F(Sn,Be,null),e(Be,$c),e(Be,St),e(St,Mc),e(St,ua),e(ua,xc),e(St,Ec),e(St,vr),e(vr,zc),e(St,Cc),e(Be,qc),F(bo,Be,null),e(Be,Lc),F(vo,Be,null),e(Be,jc),F(ko,Be,null),b(o,Vi,k),b(o,Ot,k),e(Ot,To),e(To,kr),F(On,kr,null),e(Ot,Pc),e(Ot,Tr),e(Tr,Ac),b(o,Yi,k),b(o,Pe,k),F(Dn,Pe,null),e(Pe,Nc),e(Pe,wr),e(wr,Sc),e(Pe,Oc),e(Pe,In),e(In,Dc),e(In,ma),e(ma,Ic),e(In,Wc),e(Pe,Xc),e(Pe,Wn),e(Wn,Hc),e(Wn,Xn),e(Xn,Qc),e(Wn,Uc),e(Pe,Rc),e(Pe,Hn),e(Hn,Bc),e(Hn,fa),e(fa,Vc),e(Hn,Yc),e(Pe,Gc),e(Pe,Le),F(Qn,Le,null),e(Le,Kc),e(Le,Dt),e(Dt,Jc),e(Dt,ga),e(ga,Zc),e(Dt,ep),e(Dt,Fr),e(Fr,tp),e(Dt,op),e(Le,np),F(wo,Le,null),e(Le,sp),F(Fo,Le,null),e(Le,ap),F(yo,Le,null),e(Le,rp),F($o,Le,null),e(Le,ip),F(Mo,Le,null),b(o,Gi,k),b(o,It,k),e(It,xo),e(xo,yr),F(Un,yr,null),e(It,lp),e(It,$r),e($r,dp),b(o,Ki,k),b(o,Ae,k),F(Rn,Ae,null),e(Ae,cp),e(Ae,Mr),e(Mr,pp),e(Ae,hp),e(Ae,Bn),e(Bn,up),e(Bn,_a),e(_a,mp),e(Bn,fp),e(Ae,gp),e(Ae,Vn),e(Vn,_p),e(Vn,Yn),e(Yn,bp),e(Vn,vp),e(Ae,kp),e(Ae,Gn),e(Gn,Tp),e(Gn,ba),e(ba,wp),e(Gn,Fp),e(Ae,yp),e(Ae,ot),F(Kn,ot,null),e(ot,$p),e(ot,Wt),e(Wt,Mp),e(Wt,va),e(va,xp),e(Wt,Ep),e(Wt,xr),e(xr,zp),e(Wt,Cp),e(ot,qp),F(Eo,ot,null),e(ot,Lp),F(zo,ot,null),b(o,Ji,k),b(o,Xt,k),e(Xt,Co),e(Co,Er),F(Jn,Er,null),e(Xt,jp),e(Xt,zr),e(zr,Pp),b(o,Zi,k),b(o,Ne,k),F(Zn,Ne,null),e(Ne,Ap),e(Ne,Cr),e(Cr,Np),e(Ne,Sp),e(Ne,es),e(es,Op),e(es,ka),e(ka,Dp),e(es,Ip),e(Ne,Wp),e(Ne,ts),e(ts,Xp),e(ts,os),e(os,Hp),e(ts,Qp),e(Ne,Up),e(Ne,ns),e(ns,Rp),e(ns,Ta),e(Ta,Bp),e(ns,Vp),e(Ne,Yp),e(Ne,Ve),F(ss,Ve,null),e(Ve,Gp),e(Ve,Ht),e(Ht,Kp),e(Ht,wa),e(wa,Jp),e(Ht,Zp),e(Ht,qr),e(qr,eh),e(Ht,th),e(Ve,oh),F(qo,Ve,null),e(Ve,nh),F(Lo,Ve,null),e(Ve,sh),F(jo,Ve,null),b(o,el,k),b(o,Qt,k),e(Qt,Po),e(Po,Lr),F(as,Lr,null),e(Qt,ah),e(Qt,jr),e(jr,rh),b(o,tl,k),b(o,Se,k),F(rs,Se,null),e(Se,ih),e(Se,Ut),e(Ut,lh),e(Ut,Pr),e(Pr,dh),e(Ut,ch),e(Ut,Ar),e(Ar,ph),e(Ut,hh),e(Se,uh),e(Se,is),e(is,mh),e(is,Fa),e(Fa,fh),e(is,gh),e(Se,_h),e(Se,ls),e(ls,bh),e(ls,ds),e(ds,vh),e(ls,kh),e(Se,Th),e(Se,cs),e(cs,wh),e(cs,ya),e(ya,Fh),e(cs,yh),e(Se,$h),e(Se,Ye),F(ps,Ye,null),e(Ye,Mh),e(Ye,Rt),e(Rt,xh),e(Rt,$a),e($a,Eh),e(Rt,zh),e(Rt,Nr),e(Nr,Ch),e(Rt,qh),e(Ye,Lh),F(Ao,Ye,null),e(Ye,jh),F(No,Ye,null),e(Ye,Ph),F(So,Ye,null),b(o,ol,k),b(o,Bt,k),e(Bt,Oo),e(Oo,Sr),F(hs,Sr,null),e(Bt,Ah),e(Bt,Or),e(Or,Nh),b(o,nl,k),b(o,Oe,k),F(us,Oe,null),e(Oe,Sh),e(Oe,Vt),e(Vt,Oh),e(Vt,Dr),e(Dr,Dh),e(Vt,Ih),e(Vt,Ir),e(Ir,Wh),e(Vt,Xh),e(Oe,Hh),e(Oe,ms),e(ms,Qh),e(ms,Ma),e(Ma,Uh),e(ms,Rh),e(Oe,Bh),e(Oe,fs),e(fs,Vh),e(fs,gs),e(gs,Yh),e(fs,Gh),e(Oe,Kh),e(Oe,_s),e(_s,Jh),e(_s,xa),e(xa,Zh),e(_s,eu),e(Oe,tu),e(Oe,nt),F(bs,nt,null),e(nt,ou),e(nt,Yt),e(Yt,nu),e(Yt,Ea),e(Ea,su),e(Yt,au),e(Yt,Wr),e(Wr,ru),e(Yt,iu),e(nt,lu),F(Do,nt,null),e(nt,du),F(Io,nt,null),b(o,sl,k),b(o,Gt,k),e(Gt,Wo),e(Wo,Xr),F(vs,Xr,null),e(Gt,cu),e(Gt,Hr),e(Hr,pu),b(o,al,k),b(o,De,k),F(ks,De,null),e(De,hu),e(De,Qr),e(Qr,uu),e(De,mu),e(De,Ts),e(Ts,fu),e(Ts,za),e(za,gu),e(Ts,_u),e(De,bu),e(De,ws),e(ws,vu),e(ws,Fs),e(Fs,ku),e(ws,Tu),e(De,wu),F(Xo,De,null),e(De,Fu),e(De,st),F(ys,st,null),e(st,yu),e(st,Kt),e(Kt,$u),e(Kt,Ca),e(Ca,Mu),e(Kt,xu),e(Kt,Ur),e(Ur,Eu),e(Kt,zu),e(st,Cu),F(Ho,st,null),e(st,qu),F(Qo,st,null),b(o,rl,k),b(o,Jt,k),e(Jt,Uo),e(Uo,Rr),F($s,Rr,null),e(Jt,Lu),e(Jt,Br),e(Br,ju),b(o,il,k),b(o,Ie,k),F(Ms,Ie,null),e(Ie,Pu),e(Ie,Vr),e(Vr,Au),e(Ie,Nu),e(Ie,xs),e(xs,Su),e(xs,qa),e(qa,Ou),e(xs,Du),e(Ie,Iu),e(Ie,Es),e(Es,Wu),e(Es,zs),e(zs,Xu),e(Es,Hu),e(Ie,Qu),F(Ro,Ie,null),e(Ie,Uu),e(Ie,at),F(Cs,at,null),e(at,Ru),e(at,Zt),e(Zt,Bu),e(Zt,La),e(La,Vu),e(Zt,Yu),e(Zt,Yr),e(Yr,Gu),e(Zt,Ku),e(at,Ju),F(Bo,at,null),e(at,Zu),F(Vo,at,null),b(o,ll,k),b(o,eo,k),e(eo,Yo),e(Yo,Gr),F(qs,Gr,null),e(eo,em),e(eo,Kr),e(Kr,tm),b(o,dl,k),b(o,We,k),F(Ls,We,null),e(We,om),e(We,Jr),e(Jr,nm),e(We,sm),e(We,js),e(js,am),e(js,ja),e(ja,rm),e(js,im),e(We,lm),e(We,Ps),e(Ps,dm),e(Ps,As),e(As,cm),e(Ps,pm),e(We,hm),F(Go,We,null),e(We,um),e(We,Ge),F(Ns,Ge,null),e(Ge,mm),e(Ge,to),e(to,fm),e(to,Pa),e(Pa,gm),e(to,_m),e(to,Zr),e(Zr,bm),e(to,vm),e(Ge,km),F(Ko,Ge,null),e(Ge,Tm),F(Jo,Ge,null),e(Ge,wm),F(Zo,Ge,null),b(o,cl,k),b(o,oo,k),e(oo,en),e(en,ei),F(Ss,ei,null),e(oo,Fm),e(oo,ti),e(ti,ym),b(o,pl,k),b(o,Xe,k),F(Os,Xe,null),e(Xe,$m),e(Xe,oi),e(oi,Mm),e(Xe,xm),e(Xe,Ds),e(Ds,Em),e(Ds,Aa),e(Aa,zm),e(Ds,Cm),e(Xe,qm),e(Xe,Is),e(Is,Lm),e(Is,Ws),e(Ws,jm),e(Is,Pm),e(Xe,Am),F(tn,Xe,null),e(Xe,Nm),e(Xe,rt),F(Xs,rt,null),e(rt,Sm),e(rt,no),e(no,Om),e(no,Na),e(Na,Dm),e(no,Im),e(no,ni),e(ni,Wm),e(no,Xm),e(rt,Hm),F(on,rt,null),e(rt,Qm),F(nn,rt,null),b(o,hl,k),b(o,so,k),e(so,sn),e(sn,si),F(Hs,si,null),e(so,Um),e(so,ai),e(ai,Rm),b(o,ul,k),b(o,He,k),F(Qs,He,null),e(He,Bm),e(He,ri),e(ri,Vm),e(He,Ym),e(He,Us),e(Us,Gm),e(Us,Sa),e(Sa,Km),e(Us,Jm),e(He,Zm),e(He,Rs),e(Rs,ef),e(Rs,Bs),e(Bs,tf),e(Rs,of),e(He,nf),F(an,He,null),e(He,sf),e(He,Ke),F(Vs,Ke,null),e(Ke,af),e(Ke,ao),e(ao,rf),e(ao,Oa),e(Oa,lf),e(ao,df),e(ao,ii),e(ii,cf),e(ao,pf),e(Ke,hf),F(rn,Ke,null),e(Ke,uf),F(ln,Ke,null),e(Ke,mf),F(dn,Ke,null),b(o,ml,k),b(o,ro,k),e(ro,cn),e(cn,li),F(Ys,li,null),e(ro,ff),e(ro,di),e(di,gf),b(o,fl,k),b(o,Qe,k),F(Gs,Qe,null),e(Qe,_f),e(Qe,io),e(io,bf),e(io,ci),e(ci,vf),e(io,kf),e(io,pi),e(pi,Tf),e(io,wf),e(Qe,Ff),e(Qe,Ks),e(Ks,yf),e(Ks,Da),e(Da,$f),e(Ks,Mf),e(Qe,xf),e(Qe,Js),e(Js,Ef),e(Js,Zs),e(Zs,zf),e(Js,Cf),e(Qe,qf),F(pn,Qe,null),e(Qe,Lf),e(Qe,Je),F(ea,Je,null),e(Je,jf),e(Je,lo),e(lo,Pf),e(lo,Ia),e(Ia,Af),e(lo,Nf),e(lo,hi),e(hi,Sf),e(lo,Of),e(Je,Df),F(hn,Je,null),e(Je,If),F(un,Je,null),e(Je,Wf),F(mn,Je,null),gl=!0},p(o,[k]){const ta={};k&2&&(ta.$$scope={dirty:k,ctx:o}),fo.$set(ta);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:o}),go.$set(ui);const mi={};k&2&&(mi.$$scope={dirty:k,ctx:o}),bo.$set(mi);const fi={};k&2&&(fi.$$scope={dirty:k,ctx:o}),vo.$set(fi);const oa={};k&2&&(oa.$$scope={dirty:k,ctx:o}),ko.$set(oa);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:o}),wo.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:o}),Fo.$set(_i);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:o}),yo.$set(bi);const na={};k&2&&(na.$$scope={dirty:k,ctx:o}),$o.$set(na);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:o}),Mo.$set(vi);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:o}),Eo.$set(ki);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:o}),zo.$set(Ti);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:o}),qo.$set(wi);const co={};k&2&&(co.$$scope={dirty:k,ctx:o}),Lo.$set(co);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),jo.$set(Fi);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:o}),Ao.$set(yi);const sa={};k&2&&(sa.$$scope={dirty:k,ctx:o}),No.$set(sa);const $i={};k&2&&($i.$$scope={dirty:k,ctx:o}),So.$set($i);const Mi={};k&2&&(Mi.$$scope={dirty:k,ctx:o}),Do.$set(Mi);const xi={};k&2&&(xi.$$scope={dirty:k,ctx:o}),Io.$set(xi);const po={};k&2&&(po.$$scope={dirty:k,ctx:o}),Xo.$set(po);const Tt={};k&2&&(Tt.$$scope={dirty:k,ctx:o}),Ho.$set(Tt);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),Qo.$set(Ei);const zi={};k&2&&(zi.$$scope={dirty:k,ctx:o}),Ro.$set(zi);const Ci={};k&2&&(Ci.$$scope={dirty:k,ctx:o}),Bo.$set(Ci);const ho={};k&2&&(ho.$$scope={dirty:k,ctx:o}),Vo.$set(ho);const qi={};k&2&&(qi.$$scope={dirty:k,ctx:o}),Go.$set(qi);const Li={};k&2&&(Li.$$scope={dirty:k,ctx:o}),Ko.$set(Li);const aa={};k&2&&(aa.$$scope={dirty:k,ctx:o}),Jo.$set(aa);const ji={};k&2&&(ji.$$scope={dirty:k,ctx:o}),Zo.$set(ji);const Pi={};k&2&&(Pi.$$scope={dirty:k,ctx:o}),tn.$set(Pi);const Ai={};k&2&&(Ai.$$scope={dirty:k,ctx:o}),on.$set(Ai);const wt={};k&2&&(wt.$$scope={dirty:k,ctx:o}),nn.$set(wt);const Ni={};k&2&&(Ni.$$scope={dirty:k,ctx:o}),an.$set(Ni);const Ft={};k&2&&(Ft.$$scope={dirty:k,ctx:o}),rn.$set(Ft);const Si={};k&2&&(Si.$$scope={dirty:k,ctx:o}),ln.$set(Si);const Oi={};k&2&&(Oi.$$scope={dirty:k,ctx:o}),dn.$set(Oi);const yt={};k&2&&(yt.$$scope={dirty:k,ctx:o}),pn.$set(yt);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:o}),hn.$set(Di);const Ii={};k&2&&(Ii.$$scope={dirty:k,ctx:o}),un.$set(Ii);const Wi={};k&2&&(Wi.$$scope={dirty:k,ctx:o}),mn.$set(Wi)},i(o){gl||(y(l.$$.fragment,o),y(Z.$$.fragment,o),y(f.$$.fragment,o),y(ve.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(Cn.$$.fragment,o),y(fo.$$.fragment,o),y(go.$$.fragment,o),y(qn.$$.fragment,o),y(Ln.$$.fragment,o),y(Sn.$$.fragment,o),y(bo.$$.fragment,o),y(vo.$$.fragment,o),y(ko.$$.fragment,o),y(On.$$.fragment,o),y(Dn.$$.fragment,o),y(Qn.$$.fragment,o),y(wo.$$.fragment,o),y(Fo.$$.fragment,o),y(yo.$$.fragment,o),y($o.$$.fragment,o),y(Mo.$$.fragment,o),y(Un.$$.fragment,o),y(Rn.$$.fragment,o),y(Kn.$$.fragment,o),y(Eo.$$.fragment,o),y(zo.$$.fragment,o),y(Jn.$$.fragment,o),y(Zn.$$.fragment,o),y(ss.$$.fragment,o),y(qo.$$.fragment,o),y(Lo.$$.fragment,o),y(jo.$$.fragment,o),y(as.$$.fragment,o),y(rs.$$.fragment,o),y(ps.$$.fragment,o),y(Ao.$$.fragment,o),y(No.$$.fragment,o),y(So.$$.fragment,o),y(hs.$$.fragment,o),y(us.$$.fragment,o),y(bs.$$.fragment,o),y(Do.$$.fragment,o),y(Io.$$.fragment,o),y(vs.$$.fragment,o),y(ks.$$.fragment,o),y(Xo.$$.fragment,o),y(ys.$$.fragment,o),y(Ho.$$.fragment,o),y(Qo.$$.fragment,o),y($s.$$.fragment,o),y(Ms.$$.fragment,o),y(Ro.$$.fragment,o),y(Cs.$$.fragment,o),y(Bo.$$.fragment,o),y(Vo.$$.fragment,o),y(qs.$$.fragment,o),y(Ls.$$.fragment,o),y(Go.$$.fragment,o),y(Ns.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Zo.$$.fragment,o),y(Ss.$$.fragment,o),y(Os.$$.fragment,o),y(tn.$$.fragment,o),y(Xs.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(Hs.$$.fragment,o),y(Qs.$$.fragment,o),y(an.$$.fragment,o),y(Vs.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(Ys.$$.fragment,o),y(Gs.$$.fragment,o),y(pn.$$.fragment,o),y(ea.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),gl=!0)},o(o){$(l.$$.fragment,o),$(Z.$$.fragment,o),$(f.$$.fragment,o),$(ve.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(Mn.$$.fragment,o),$(Cn.$$.fragment,o),$(fo.$$.fragment,o),$(go.$$.fragment,o),$(qn.$$.fragment,o),$(Ln.$$.fragment,o),$(Sn.$$.fragment,o),$(bo.$$.fragment,o),$(vo.$$.fragment,o),$(ko.$$.fragment,o),$(On.$$.fragment,o),$(Dn.$$.fragment,o),$(Qn.$$.fragment,o),$(wo.$$.fragment,o),$(Fo.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(Mo.$$.fragment,o),$(Un.$$.fragment,o),$(Rn.$$.fragment,o),$(Kn.$$.fragment,o),$(Eo.$$.fragment,o),$(zo.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ss.$$.fragment,o),$(qo.$$.fragment,o),$(Lo.$$.fragment,o),$(jo.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(ps.$$.fragment,o),$(Ao.$$.fragment,o),$(No.$$.fragment,o),$(So.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(bs.$$.fragment,o),$(Do.$$.fragment,o),$(Io.$$.fragment,o),$(vs.$$.fragment,o),$(ks.$$.fragment,o),$(Xo.$$.fragment,o),$(ys.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$($s.$$.fragment,o),$(Ms.$$.fragment,o),$(Ro.$$.fragment,o),$(Cs.$$.fragment,o),$(Bo.$$.fragment,o),$(Vo.$$.fragment,o),$(qs.$$.fragment,o),$(Ls.$$.fragment,o),$(Go.$$.fragment,o),$(Ns.$$.fragment,o),$(Ko.$$.fragment,o),$(Jo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ss.$$.fragment,o),$(Os.$$.fragment,o),$(tn.$$.fragment,o),$(Xs.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(an.$$.fragment,o),$(Vs.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Ys.$$.fragment,o),$(Gs.$$.fragment,o),$(pn.$$.fragment,o),$(ea.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(mn.$$.fragment,o),gl=!1},d(o){t(d),o&&t(g),o&&t(c),M(l),o&&t(Y),o&&t(C),M(Z),o&&t(re),o&&t(B),o&&t(j),o&&t(oe),o&&t(ie),o&&t(ne),o&&t(le),o&&t(L),o&&t(A),o&&t(K),M(f),o&&t(ke),o&&t(P),M(ve),o&&t(Xi),o&&t(jt),M(Tn),o&&t(Hi),o&&t(et),M(wn),o&&t(Qi),o&&t(Pt),M($n),o&&t(Ui),o&&t(Re),M(Mn),M(Cn),M(fo),M(go),o&&t(Ri),o&&t(Nt),M(qn),o&&t(Bi),o&&t(je),M(Ln),M(Sn),M(bo),M(vo),M(ko),o&&t(Vi),o&&t(Ot),M(On),o&&t(Yi),o&&t(Pe),M(Dn),M(Qn),M(wo),M(Fo),M(yo),M($o),M(Mo),o&&t(Gi),o&&t(It),M(Un),o&&t(Ki),o&&t(Ae),M(Rn),M(Kn),M(Eo),M(zo),o&&t(Ji),o&&t(Xt),M(Jn),o&&t(Zi),o&&t(Ne),M(Zn),M(ss),M(qo),M(Lo),M(jo),o&&t(el),o&&t(Qt),M(as),o&&t(tl),o&&t(Se),M(rs),M(ps),M(Ao),M(No),M(So),o&&t(ol),o&&t(Bt),M(hs),o&&t(nl),o&&t(Oe),M(us),M(bs),M(Do),M(Io),o&&t(sl),o&&t(Gt),M(vs),o&&t(al),o&&t(De),M(ks),M(Xo),M(ys),M(Ho),M(Qo),o&&t(rl),o&&t(Jt),M($s),o&&t(il),o&&t(Ie),M(Ms),M(Ro),M(Cs),M(Bo),M(Vo),o&&t(ll),o&&t(eo),M(qs),o&&t(dl),o&&t(We),M(Ls),M(Go),M(Ns),M(Ko),M(Jo),M(Zo),o&&t(cl),o&&t(oo),M(Ss),o&&t(pl),o&&t(Xe),M(Os),M(tn),M(Xs),M(on),M(nn),o&&t(hl),o&&t(so),M(Hs),o&&t(ul),o&&t(He),M(Qs),M(an),M(Vs),M(rn),M(ln),M(dn),o&&t(ml),o&&t(ro),M(Ys),o&&t(fl),o&&t(Qe),M(Gs),M(pn),M(ea),M(hn),M(un),M(mn)}}}const Xb={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Hb(x){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gb extends Y_{constructor(d){super();G_(this,d,Hb,Wb,K_,{})}}export{Gb as default,Xb as metadata};
