import{S as V_,i as Y_,s as G_,e as a,k as h,w as y,t as o,M as J_,c as r,d as t,m as u,a as i,x as T,h as n,b as g,G as e,g as b,y as F,q as $,o as M,B as x,v as Z_,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as we}from"../../chunks/Docstring-hf-doc-builder.js";import{C as He}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as We}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function eb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function tb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function ob(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function nb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function sb(C){let l,_;return l=new He({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ab(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function rb(C){let l,_,c,m,k;return m=new He({props:{code:`import torch
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
`}}),{c(){l=a("p"),_=o("Example of single-label classification:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example of single-label classification:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function ib(C){let l,_;return l=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function lb(C){let l,_,c,m,k;return m=new He({props:{code:`import torch
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
`}}),{c(){l=a("p"),_=o("Example of multi-label classification:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example of multi-label classification:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function db(C){let l,_;return l=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function cb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function pb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function hb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function ub(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function mb(C){let l,_;return l=new He({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function fb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function gb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function _b(C){let l,_;return l=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function bb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function vb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function kb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ye=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),w=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),Ce=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ve=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),U=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),ke=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ue=i(q);ye=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),w=r(f,"P",{});var z=i(w);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),re=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);Ce=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);ze=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ve=u(D),L=r(D,"LI",{});var B=i(L);ae=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ke=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,k),b(f,d,E),b(f,p,E),e(p,q),e(q,ye),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,w,E),e(w,Te),e(w,H),e(H,Fe),e(w,ge),e(w,I),e(I,$e),e(w,re),e(w,K),e(K,Me),e(w,_e),e(w,W),e(W,xe),e(w,be),e(w,X),e(X,ue),e(w,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,Ce),e(A,le),e(A,Y),e(Y,ze),e(j,ve),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,U),e(U,je),e(j,ke),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(w),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function wb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function yb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Tb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ye=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),w=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),Ce=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ve=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),U=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),ke=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ue=i(q);ye=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),w=r(f,"P",{});var z=i(w);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),re=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);Ce=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);ze=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ve=u(D),L=r(D,"LI",{});var B=i(L);ae=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ke=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,k),b(f,d,E),b(f,p,E),e(p,q),e(q,ye),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,w,E),e(w,Te),e(w,H),e(H,Fe),e(w,ge),e(w,I),e(I,$e),e(w,re),e(w,K),e(K,Me),e(w,_e),e(w,W),e(W,xe),e(w,be),e(w,X),e(X,ue),e(w,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,Ce),e(A,le),e(A,Y),e(Y,ze),e(j,ve),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,U),e(U,je),e(j,ke),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(w),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function Fb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function $b(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Mb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ye=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),w=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),Ce=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ve=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),U=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),ke=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ue=i(q);ye=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),w=r(f,"P",{});var z=i(w);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),re=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);Ce=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);ze=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ve=u(D),L=r(D,"LI",{});var B=i(L);ae=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ke=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,k),b(f,d,E),b(f,p,E),e(p,q),e(q,ye),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,w,E),e(w,Te),e(w,H),e(H,Fe),e(w,ge),e(w,I),e(I,$e),e(w,re),e(w,K),e(K,Me),e(w,_e),e(w,W),e(W,xe),e(w,be),e(w,X),e(X,ue),e(w,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,Ce),e(A,le),e(A,Y),e(Y,ze),e(j,ve),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,U),e(U,je),e(j,ke),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(w),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function xb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function Eb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Cb(C){let l,_;return l=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function zb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ye=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),w=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),Ce=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ve=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),U=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),ke=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ue=i(q);ye=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),w=r(f,"P",{});var z=i(w);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),re=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);Ce=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);ze=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ve=u(D),L=r(D,"LI",{});var B=i(L);ae=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ke=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,k),b(f,d,E),b(f,p,E),e(p,q),e(q,ye),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,w,E),e(w,Te),e(w,H),e(H,Fe),e(w,ge),e(w,I),e(I,$e),e(w,re),e(w,K),e(K,Me),e(w,_e),e(w,W),e(W,xe),e(w,be),e(w,X),e(X,ue),e(w,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,Ce),e(A,le),e(A,Y),e(Y,ze),e(j,ve),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,U),e(U,je),e(j,ke),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(w),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function qb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function jb(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Lb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ye=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),w=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),Ce=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ve=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),U=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),ke=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ue=i(q);ye=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),w=r(f,"P",{});var z=i(w);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),re=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);Ce=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);ze=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ve=u(D),L=r(D,"LI",{});var B=i(L);ae=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ke=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,k),b(f,d,E),b(f,p,E),e(p,q),e(q,ye),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,w,E),e(w,Te),e(w,H),e(H,Fe),e(w,ge),e(w,I),e(I,$e),e(w,re),e(w,K),e(K,Me),e(w,_e),e(w,W),e(W,xe),e(w,be),e(w,X),e(X,ue),e(w,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,Ce),e(A,le),e(A,Y),e(Y,ze),e(j,ve),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,U),e(U,je),e(j,ke),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(w),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function Pb(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function Ab(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Nb(C){let l,_;return l=new He({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Sb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ye=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),w=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),Ce=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ve=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),U=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),ke=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ue=i(q);ye=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),w=r(f,"P",{});var z=i(w);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),re=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);Ce=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);ze=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ve=u(D),L=r(D,"LI",{});var B=i(L);ae=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ke=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,k),b(f,d,E),b(f,p,E),e(p,q),e(q,ye),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,w,E),e(w,Te),e(w,H),e(H,Fe),e(w,ge),e(w,I),e(I,$e),e(w,re),e(w,K),e(K,Me),e(w,_e),e(w,W),e(W,xe),e(w,be),e(w,X),e(X,ue),e(w,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,Ce),e(A,le),e(A,Y),e(Y,ze),e(j,ve),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,U),e(U,je),e(j,ke),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(w),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function Ob(C){let l,_,c,m,k;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,k)},d(d){d&&t(l)}}}function Db(C){let l,_,c,m,k;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),y(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),T(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),k=!0},p:Xe,i(d){k||($(m.$$.fragment,d),k=!0)},o(d){M(m.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Ib(C){let l,_;return l=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Wb(C){let l,_,c,m,k,d,p,q,ye,fe,O,se,J,w,Te,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,Ce,le,Y,ze,ve,L,ae,Q,de,qe,U,je,ke,N,ce,G,Z,oe,P,Le,S,he,Pe,f,E,Qe,ne,Ue,Ae,z,De,Be,Re,Ie,Ke,D,R,Ne,Se,B,Oe,Ve,me,Ye,te,pe,Sn,vd,gr,kd,wd,Ot,_r,yd,Td,br,Fd,$d,Dt,Md,vr,xd,Ed,kr,Cd,zd,wr,qd,jd,Ld,On,Pd,yr,Ad,Nd,Sd,Dn,Od,wa,Dd,Id,Zi,Gt,zo,Tr,In,Wd,Fr,Xd,el,ht,Wn,Hd,$r,Qd,Ud,Xn,Bd,ya,Rd,Kd,Vd,Hn,Yd,Qn,Gd,Jd,Zd,kt,Un,ec,Jt,tc,Ta,oc,nc,Mr,sc,ac,rc,qo,ic,jo,tl,Zt,Lo,xr,Bn,lc,Er,dc,ol,Ze,Rn,cc,Cr,pc,hc,Kn,uc,Fa,mc,fc,gc,Vn,_c,Yn,bc,vc,kc,Gn,wc,$a,yc,Tc,Fc,ut,Jn,$c,eo,Mc,Ma,xc,Ec,zr,Cc,zc,qc,Po,jc,Ao,Lc,No,nl,to,So,qr,Zn,Pc,jr,Ac,sl,et,es,Nc,Lr,Sc,Oc,ts,Dc,xa,Ic,Wc,Xc,os,Hc,ns,Qc,Uc,Bc,ss,Rc,Ea,Kc,Vc,Yc,Je,as,Gc,oo,Jc,Ca,Zc,ep,Pr,tp,op,np,Oo,sp,Do,ap,Io,rp,Wo,ip,Xo,al,no,Ho,Ar,rs,lp,Nr,dp,rl,tt,is,cp,Sr,pp,hp,ls,up,za,mp,fp,gp,ds,_p,cs,bp,vp,kp,ps,wp,qa,yp,Tp,Fp,wt,hs,$p,so,Mp,ja,xp,Ep,Or,Cp,zp,qp,Qo,jp,Uo,il,ao,Bo,Dr,us,Lp,Ir,Pp,ll,ot,ms,Ap,Wr,Np,Sp,fs,Op,La,Dp,Ip,Wp,gs,Xp,_s,Hp,Qp,Up,bs,Bp,Pa,Rp,Kp,Vp,mt,vs,Yp,ro,Gp,Aa,Jp,Zp,Xr,eh,th,oh,Ro,nh,Ko,sh,Vo,dl,io,Yo,Hr,ks,ah,Qr,rh,cl,nt,ws,ih,lo,lh,Ur,dh,ch,Br,ph,hh,uh,ys,mh,Na,fh,gh,_h,Ts,bh,Fs,vh,kh,wh,$s,yh,Sa,Th,Fh,$h,ft,Ms,Mh,co,xh,Oa,Eh,Ch,Rr,zh,qh,jh,Go,Lh,Jo,Ph,Zo,pl,po,en,Kr,xs,Ah,Vr,Nh,hl,st,Es,Sh,ho,Oh,Yr,Dh,Ih,Gr,Wh,Xh,Hh,Cs,Qh,Da,Uh,Bh,Rh,zs,Kh,qs,Vh,Yh,Gh,js,Jh,Ia,Zh,eu,tu,yt,Ls,ou,uo,nu,Wa,su,au,Jr,ru,iu,lu,tn,du,on,ul,mo,nn,Zr,Ps,cu,ei,pu,ml,at,As,hu,ti,uu,mu,Ns,fu,Xa,gu,_u,bu,Ss,vu,Os,ku,wu,yu,sn,Tu,Tt,Ds,Fu,fo,$u,Ha,Mu,xu,oi,Eu,Cu,zu,an,qu,rn,fl,go,ln,ni,Is,ju,si,Lu,gl,rt,Ws,Pu,ai,Au,Nu,Xs,Su,Qa,Ou,Du,Iu,Hs,Wu,Qs,Xu,Hu,Qu,dn,Uu,Ft,Us,Bu,_o,Ru,Ua,Ku,Vu,ri,Yu,Gu,Ju,cn,Zu,pn,_l,bo,hn,ii,Bs,em,li,tm,bl,it,Rs,om,di,nm,sm,Ks,am,Ba,rm,im,lm,Vs,dm,Ys,cm,pm,hm,un,um,gt,Gs,mm,vo,fm,Ra,gm,_m,ci,bm,vm,km,mn,wm,fn,ym,gn,vl,ko,_n,pi,Js,Tm,hi,Fm,kl,lt,Zs,$m,ui,Mm,xm,ea,Em,Ka,Cm,zm,qm,ta,jm,oa,Lm,Pm,Am,bn,Nm,$t,na,Sm,wo,Om,Va,Dm,Im,mi,Wm,Xm,Hm,vn,Qm,kn,wl,yo,wn,fi,sa,Um,gi,Bm,yl,dt,aa,Rm,_i,Km,Vm,ra,Ym,Ya,Gm,Jm,Zm,ia,ef,la,tf,of,nf,yn,sf,_t,da,af,To,rf,Ga,lf,df,bi,cf,pf,hf,Tn,uf,Fn,mf,$n,Tl,Fo,Mn,vi,ca,ff,ki,gf,Fl,ct,pa,_f,$o,bf,wi,vf,kf,yi,wf,yf,Tf,ha,Ff,Ja,$f,Mf,xf,ua,Ef,ma,Cf,zf,qf,xn,jf,bt,fa,Lf,Mo,Pf,Za,Af,Nf,Ti,Sf,Of,Df,En,If,Cn,Wf,zn,$l;return d=new pt({}),w=new pt({}),de=new pt({}),ce=new we({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"layerdrop",val:" = 0.0"},{name:"pre_norm",val:" = False"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/configuration_flaubert.py#L35"}}),Oe=new pt({}),Sn=new we({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"do_lowercase",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/tokenization_flaubert.py#L89"}}),In=new pt({}),Wn=new we({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L134"}}),Un=new we({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Ge({props:{$$slots:{default:[eb]},$$scope:{ctx:C}}}),jo=new We({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[tb]},$$scope:{ctx:C}}}),Bn=new pt({}),Rn=new we({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L326"}}),Jn=new we({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Ge({props:{$$slots:{default:[ob]},$$scope:{ctx:C}}}),Ao=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[nb]},$$scope:{ctx:C}}}),No=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[sb]},$$scope:{ctx:C}}}),Zn=new pt({}),es=new we({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L348"}}),as=new we({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Ge({props:{$$slots:{default:[ab]},$$scope:{ctx:C}}}),Do=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:C}}}),Io=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:C}}}),Wo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[lb]},$$scope:{ctx:C}}}),Xo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[db]},$$scope:{ctx:C}}}),rs=new pt({}),is=new we({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L436"}}),hs=new we({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new Ge({props:{$$slots:{default:[cb]},$$scope:{ctx:C}}}),Uo=new We({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[pb]},$$scope:{ctx:C}}}),us=new pt({}),ms=new we({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L370"}}),vs=new we({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Ge({props:{$$slots:{default:[hb]},$$scope:{ctx:C}}}),Ko=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[ub]},$$scope:{ctx:C}}}),Vo=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[mb]},$$scope:{ctx:C}}}),ks=new pt({}),ws=new we({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L392"}}),Ms=new we({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new Ge({props:{$$slots:{default:[fb]},$$scope:{ctx:C}}}),Jo=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[gb]},$$scope:{ctx:C}}}),Zo=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[_b]},$$scope:{ctx:C}}}),xs=new pt({}),Es=new we({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_flaubert.py#L414"}}),Ls=new we({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new Ge({props:{$$slots:{default:[bb]},$$scope:{ctx:C}}}),on=new We({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[vb]},$$scope:{ctx:C}}}),Ps=new pt({}),As=new we({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238"}}),sn=new Ge({props:{$$slots:{default:[kb]},$$scope:{ctx:C}}}),Ds=new we({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L243",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new Ge({props:{$$slots:{default:[wb]},$$scope:{ctx:C}}}),rn=new We({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[yb]},$$scope:{ctx:C}}}),Is=new pt({}),Ws=new we({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L764"}}),dn=new Ge({props:{$$slots:{default:[Tb]},$$scope:{ctx:C}}}),Us=new we({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L793",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig"
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
`}}),cn=new Ge({props:{$$slots:{default:[Fb]},$$scope:{ctx:C}}}),pn=new We({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[$b]},$$scope:{ctx:C}}}),Bs=new pt({}),Rs=new we({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L857"}}),un=new Ge({props:{$$slots:{default:[Mb]},$$scope:{ctx:C}}}),Gs=new we({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_tf_xlm.py#L901",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Ge({props:{$$slots:{default:[xb]},$$scope:{ctx:C}}}),fn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Eb]},$$scope:{ctx:C}}}),gn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[Cb]},$$scope:{ctx:C}}}),Js=new pt({}),Zs=new we({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L902"}}),bn=new Ge({props:{$$slots:{default:[zb]},$$scope:{ctx:C}}}),na=new we({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_tf_xlm.py#L1008",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new Ge({props:{$$slots:{default:[qb]},$$scope:{ctx:C}}}),kn=new We({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[jb]},$$scope:{ctx:C}}}),sa=new pt({}),aa=new we({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L887"}}),yn=new Ge({props:{$$slots:{default:[Lb]},$$scope:{ctx:C}}}),da=new we({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_tf_xlm.py#L1132",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ge({props:{$$slots:{default:[Pb]},$$scope:{ctx:C}}}),Fn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Ab]},$$scope:{ctx:C}}}),$n=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Nb]},$$scope:{ctx:C}}}),ca=new pt({}),pa=new we({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/flaubert/modeling_tf_flaubert.py#L872"}}),xn=new Ge({props:{$$slots:{default:[Sb]},$$scope:{ctx:C}}}),fa=new we({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/xlm/modeling_tf_xlm.py#L1217",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),En=new Ge({props:{$$slots:{default:[Ob]},$$scope:{ctx:C}}}),Cn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Db]},$$scope:{ctx:C}}}),zn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Ib]},$$scope:{ctx:C}}}),{c(){l=a("meta"),_=h(),c=a("h1"),m=a("a"),k=a("span"),y(d.$$.fragment),p=h(),q=a("span"),ye=o("FlauBERT"),fe=h(),O=a("h2"),se=a("a"),J=a("span"),y(w.$$.fragment),Te=h(),H=a("span"),Fe=o("Overview"),ge=h(),I=a("p"),$e=o("The FlauBERT model was proposed in the paper "),re=a("a"),K=o("FlauBERT: Unsupervised Language Model Pre-training for French"),Me=o(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),_e=h(),W=a("p"),xe=o("The abstract from the paper is the following:"),be=h(),X=a("p"),ue=a("em"),Ee=o(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),ee=h(),j=a("p"),A=o("This model was contributed by "),ie=a("a"),V=o("formiel"),Ce=o(". The original code can be found "),le=a("a"),Y=o("here"),ze=o("."),ve=h(),L=a("h2"),ae=a("a"),Q=a("span"),y(de.$$.fragment),qe=h(),U=a("span"),je=o("FlaubertConfig"),ke=h(),N=a("div"),y(ce.$$.fragment),G=h(),Z=a("p"),oe=o("This is the configuration class to store the configuration of a "),P=a("a"),Le=o("FlaubertModel"),S=o(" or a "),he=a("a"),Pe=o("TFFlaubertModel"),f=o(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=a("a"),Qe=o("flaubert/flaubert_base_uncased"),ne=o(" architecture."),Ue=h(),Ae=a("p"),z=o("Configuration objects inherit from "),De=a("a"),Be=o("PretrainedConfig"),Re=o(` and can be used to control the model outputs. Read the
documentation from `),Ie=a("a"),Ke=o("PretrainedConfig"),D=o(" for more information."),R=h(),Ne=a("h2"),Se=a("a"),B=a("span"),y(Oe.$$.fragment),Ve=h(),me=a("span"),Ye=o("FlaubertTokenizer"),te=h(),pe=a("div"),y(Sn.$$.fragment),vd=h(),gr=a("p"),kd=o("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),wd=h(),Ot=a("ul"),_r=a("li"),yd=o("Moses preprocessing and tokenization."),Td=h(),br=a("li"),Fd=o("Normalizing all inputs text."),$d=h(),Dt=a("li"),Md=o("The arguments "),vr=a("code"),xd=o("special_tokens"),Ed=o(" and the function "),kr=a("code"),Cd=o("set_special_tokens"),zd=o(`, can be used to add additional symbols (like
\u201D`),wr=a("strong"),qd=o("classify"),jd=o("\u201D) to a vocabulary."),Ld=h(),On=a("li"),Pd=o("The argument "),yr=a("code"),Ad=o("do_lowercase"),Nd=o(" controls lower casing (automatically set for pretrained vocabularies)."),Sd=h(),Dn=a("p"),Od=o("This tokenizer inherits from "),wa=a("a"),Dd=o("XLMTokenizer"),Id=o(`. Please check the superclass for usage examples and documentation
regarding arguments.`),Zi=h(),Gt=a("h2"),zo=a("a"),Tr=a("span"),y(In.$$.fragment),Wd=h(),Fr=a("span"),Xd=o("FlaubertModel"),el=h(),ht=a("div"),y(Wn.$$.fragment),Hd=h(),$r=a("p"),Qd=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Ud=h(),Xn=a("p"),Bd=o("This model inherits from "),ya=a("a"),Rd=o("PreTrainedModel"),Kd=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd=h(),Hn=a("p"),Yd=o("This model is also a PyTorch "),Qn=a("a"),Gd=o("torch.nn.Module"),Jd=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=h(),kt=a("div"),y(Un.$$.fragment),ec=h(),Jt=a("p"),tc=o("The "),Ta=a("a"),oc=o("FlaubertModel"),nc=o(" forward method, overrides the "),Mr=a("code"),sc=o("__call__"),ac=o(" special method."),rc=h(),y(qo.$$.fragment),ic=h(),y(jo.$$.fragment),tl=h(),Zt=a("h2"),Lo=a("a"),xr=a("span"),y(Bn.$$.fragment),lc=h(),Er=a("span"),dc=o("FlaubertWithLMHeadModel"),ol=h(),Ze=a("div"),y(Rn.$$.fragment),cc=h(),Cr=a("p"),pc=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),hc=h(),Kn=a("p"),uc=o("This model inherits from "),Fa=a("a"),mc=o("PreTrainedModel"),fc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=h(),Vn=a("p"),_c=o("This model is also a PyTorch "),Yn=a("a"),bc=o("torch.nn.Module"),vc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kc=h(),Gn=a("p"),wc=o("This class overrides "),$a=a("a"),yc=o("XLMWithLMHeadModel"),Tc=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fc=h(),ut=a("div"),y(Jn.$$.fragment),$c=h(),eo=a("p"),Mc=o("The "),Ma=a("a"),xc=o("XLMWithLMHeadModel"),Ec=o(" forward method, overrides the "),zr=a("code"),Cc=o("__call__"),zc=o(" special method."),qc=h(),y(Po.$$.fragment),jc=h(),y(Ao.$$.fragment),Lc=h(),y(No.$$.fragment),nl=h(),to=a("h2"),So=a("a"),qr=a("span"),y(Zn.$$.fragment),Pc=h(),jr=a("span"),Ac=o("FlaubertForSequenceClassification"),sl=h(),et=a("div"),y(es.$$.fragment),Nc=h(),Lr=a("p"),Sc=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Oc=h(),ts=a("p"),Dc=o("This model inherits from "),xa=a("a"),Ic=o("PreTrainedModel"),Wc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc=h(),os=a("p"),Hc=o("This model is also a PyTorch "),ns=a("a"),Qc=o("torch.nn.Module"),Uc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bc=h(),ss=a("p"),Rc=o("This class overrides "),Ea=a("a"),Kc=o("XLMForSequenceClassification"),Vc=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Yc=h(),Je=a("div"),y(as.$$.fragment),Gc=h(),oo=a("p"),Jc=o("The "),Ca=a("a"),Zc=o("XLMForSequenceClassification"),ep=o(" forward method, overrides the "),Pr=a("code"),tp=o("__call__"),op=o(" special method."),np=h(),y(Oo.$$.fragment),sp=h(),y(Do.$$.fragment),ap=h(),y(Io.$$.fragment),rp=h(),y(Wo.$$.fragment),ip=h(),y(Xo.$$.fragment),al=h(),no=a("h2"),Ho=a("a"),Ar=a("span"),y(rs.$$.fragment),lp=h(),Nr=a("span"),dp=o("FlaubertForMultipleChoice"),rl=h(),tt=a("div"),y(is.$$.fragment),cp=h(),Sr=a("p"),pp=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),hp=h(),ls=a("p"),up=o("This model inherits from "),za=a("a"),mp=o("PreTrainedModel"),fp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=h(),ds=a("p"),_p=o("This model is also a PyTorch "),cs=a("a"),bp=o("torch.nn.Module"),vp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp=h(),ps=a("p"),wp=o("This class overrides "),qa=a("a"),yp=o("XLMForMultipleChoice"),Tp=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fp=h(),wt=a("div"),y(hs.$$.fragment),$p=h(),so=a("p"),Mp=o("The "),ja=a("a"),xp=o("XLMForMultipleChoice"),Ep=o(" forward method, overrides the "),Or=a("code"),Cp=o("__call__"),zp=o(" special method."),qp=h(),y(Qo.$$.fragment),jp=h(),y(Uo.$$.fragment),il=h(),ao=a("h2"),Bo=a("a"),Dr=a("span"),y(us.$$.fragment),Lp=h(),Ir=a("span"),Pp=o("FlaubertForTokenClassification"),ll=h(),ot=a("div"),y(ms.$$.fragment),Ap=h(),Wr=a("p"),Np=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sp=h(),fs=a("p"),Op=o("This model inherits from "),La=a("a"),Dp=o("PreTrainedModel"),Ip=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp=h(),gs=a("p"),Xp=o("This model is also a PyTorch "),_s=a("a"),Hp=o("torch.nn.Module"),Qp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up=h(),bs=a("p"),Bp=o("This class overrides "),Pa=a("a"),Rp=o("XLMForTokenClassification"),Kp=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Vp=h(),mt=a("div"),y(vs.$$.fragment),Yp=h(),ro=a("p"),Gp=o("The "),Aa=a("a"),Jp=o("XLMForTokenClassification"),Zp=o(" forward method, overrides the "),Xr=a("code"),eh=o("__call__"),th=o(" special method."),oh=h(),y(Ro.$$.fragment),nh=h(),y(Ko.$$.fragment),sh=h(),y(Vo.$$.fragment),dl=h(),io=a("h2"),Yo=a("a"),Hr=a("span"),y(ks.$$.fragment),ah=h(),Qr=a("span"),rh=o("FlaubertForQuestionAnsweringSimple"),cl=h(),nt=a("div"),y(ws.$$.fragment),ih=h(),lo=a("p"),lh=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ur=a("code"),dh=o("span start logits"),ch=o(" and "),Br=a("code"),ph=o("span end logits"),hh=o(")."),uh=h(),ys=a("p"),mh=o("This model inherits from "),Na=a("a"),fh=o("PreTrainedModel"),gh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=h(),Ts=a("p"),bh=o("This model is also a PyTorch "),Fs=a("a"),vh=o("torch.nn.Module"),kh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh=h(),$s=a("p"),yh=o("This class overrides "),Sa=a("a"),Th=o("XLMForQuestionAnsweringSimple"),Fh=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$h=h(),ft=a("div"),y(Ms.$$.fragment),Mh=h(),co=a("p"),xh=o("The "),Oa=a("a"),Eh=o("XLMForQuestionAnsweringSimple"),Ch=o(" forward method, overrides the "),Rr=a("code"),zh=o("__call__"),qh=o(" special method."),jh=h(),y(Go.$$.fragment),Lh=h(),y(Jo.$$.fragment),Ph=h(),y(Zo.$$.fragment),pl=h(),po=a("h2"),en=a("a"),Kr=a("span"),y(xs.$$.fragment),Ah=h(),Vr=a("span"),Nh=o("FlaubertForQuestionAnswering"),hl=h(),st=a("div"),y(Es.$$.fragment),Sh=h(),ho=a("p"),Oh=o(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Yr=a("code"),Dh=o("span start logits"),Ih=o(" and "),Gr=a("code"),Wh=o("span end logits"),Xh=o(")."),Hh=h(),Cs=a("p"),Qh=o("This model inherits from "),Da=a("a"),Uh=o("PreTrainedModel"),Bh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh=h(),zs=a("p"),Kh=o("This model is also a PyTorch "),qs=a("a"),Vh=o("torch.nn.Module"),Yh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gh=h(),js=a("p"),Jh=o("This class overrides "),Ia=a("a"),Zh=o("XLMForQuestionAnswering"),eu=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),tu=h(),yt=a("div"),y(Ls.$$.fragment),ou=h(),uo=a("p"),nu=o("The "),Wa=a("a"),su=o("XLMForQuestionAnswering"),au=o(" forward method, overrides the "),Jr=a("code"),ru=o("__call__"),iu=o(" special method."),lu=h(),y(tn.$$.fragment),du=h(),y(on.$$.fragment),ul=h(),mo=a("h2"),nn=a("a"),Zr=a("span"),y(Ps.$$.fragment),cu=h(),ei=a("span"),pu=o("TFFlaubertModel"),ml=h(),at=a("div"),y(As.$$.fragment),hu=h(),ti=a("p"),uu=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),mu=h(),Ns=a("p"),fu=o("This model inherits from "),Xa=a("a"),gu=o("TFPreTrainedModel"),_u=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=h(),Ss=a("p"),vu=o("This model is also a "),Os=a("a"),ku=o("tf.keras.Model"),wu=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yu=h(),y(sn.$$.fragment),Tu=h(),Tt=a("div"),y(Ds.$$.fragment),Fu=h(),fo=a("p"),$u=o("The "),Ha=a("a"),Mu=o("TFFlaubertModel"),xu=o(" forward method, overrides the "),oi=a("code"),Eu=o("__call__"),Cu=o(" special method."),zu=h(),y(an.$$.fragment),qu=h(),y(rn.$$.fragment),fl=h(),go=a("h2"),ln=a("a"),ni=a("span"),y(Is.$$.fragment),ju=h(),si=a("span"),Lu=o("TFFlaubertWithLMHeadModel"),gl=h(),rt=a("div"),y(Ws.$$.fragment),Pu=h(),ai=a("p"),Au=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nu=h(),Xs=a("p"),Su=o("This model inherits from "),Qa=a("a"),Ou=o("TFPreTrainedModel"),Du=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu=h(),Hs=a("p"),Wu=o("This model is also a "),Qs=a("a"),Xu=o("tf.keras.Model"),Hu=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu=h(),y(dn.$$.fragment),Uu=h(),Ft=a("div"),y(Us.$$.fragment),Bu=h(),_o=a("p"),Ru=o("The "),Ua=a("a"),Ku=o("TFFlaubertWithLMHeadModel"),Vu=o(" forward method, overrides the "),ri=a("code"),Yu=o("__call__"),Gu=o(" special method."),Ju=h(),y(cn.$$.fragment),Zu=h(),y(pn.$$.fragment),_l=h(),bo=a("h2"),hn=a("a"),ii=a("span"),y(Bs.$$.fragment),em=h(),li=a("span"),tm=o("TFFlaubertForSequenceClassification"),bl=h(),it=a("div"),y(Rs.$$.fragment),om=h(),di=a("p"),nm=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),sm=h(),Ks=a("p"),am=o("This model inherits from "),Ba=a("a"),rm=o("TFPreTrainedModel"),im=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm=h(),Vs=a("p"),dm=o("This model is also a "),Ys=a("a"),cm=o("tf.keras.Model"),pm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hm=h(),y(un.$$.fragment),um=h(),gt=a("div"),y(Gs.$$.fragment),mm=h(),vo=a("p"),fm=o("The "),Ra=a("a"),gm=o("TFXLMForSequenceClassification"),_m=o(" forward method, overrides the "),ci=a("code"),bm=o("__call__"),vm=o(" special method."),km=h(),y(mn.$$.fragment),wm=h(),y(fn.$$.fragment),ym=h(),y(gn.$$.fragment),vl=h(),ko=a("h2"),_n=a("a"),pi=a("span"),y(Js.$$.fragment),Tm=h(),hi=a("span"),Fm=o("TFFlaubertForMultipleChoice"),kl=h(),lt=a("div"),y(Zs.$$.fragment),$m=h(),ui=a("p"),Mm=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xm=h(),ea=a("p"),Em=o("This model inherits from "),Ka=a("a"),Cm=o("TFPreTrainedModel"),zm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=h(),ta=a("p"),jm=o("This model is also a "),oa=a("a"),Lm=o("tf.keras.Model"),Pm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Am=h(),y(bn.$$.fragment),Nm=h(),$t=a("div"),y(na.$$.fragment),Sm=h(),wo=a("p"),Om=o("The "),Va=a("a"),Dm=o("TFXLMForMultipleChoice"),Im=o(" forward method, overrides the "),mi=a("code"),Wm=o("__call__"),Xm=o(" special method."),Hm=h(),y(vn.$$.fragment),Qm=h(),y(kn.$$.fragment),wl=h(),yo=a("h2"),wn=a("a"),fi=a("span"),y(sa.$$.fragment),Um=h(),gi=a("span"),Bm=o("TFFlaubertForTokenClassification"),yl=h(),dt=a("div"),y(aa.$$.fragment),Rm=h(),_i=a("p"),Km=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Vm=h(),ra=a("p"),Ym=o("This model inherits from "),Ya=a("a"),Gm=o("TFPreTrainedModel"),Jm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=h(),ia=a("p"),ef=o("This model is also a "),la=a("a"),tf=o("tf.keras.Model"),of=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=h(),y(yn.$$.fragment),sf=h(),_t=a("div"),y(da.$$.fragment),af=h(),To=a("p"),rf=o("The "),Ga=a("a"),lf=o("TFXLMForTokenClassification"),df=o(" forward method, overrides the "),bi=a("code"),cf=o("__call__"),pf=o(" special method."),hf=h(),y(Tn.$$.fragment),uf=h(),y(Fn.$$.fragment),mf=h(),y($n.$$.fragment),Tl=h(),Fo=a("h2"),Mn=a("a"),vi=a("span"),y(ca.$$.fragment),ff=h(),ki=a("span"),gf=o("TFFlaubertForQuestionAnsweringSimple"),Fl=h(),ct=a("div"),y(pa.$$.fragment),_f=h(),$o=a("p"),bf=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),wi=a("code"),vf=o("span start logits"),kf=o(" and "),yi=a("code"),wf=o("span end logits"),yf=o(")."),Tf=h(),ha=a("p"),Ff=o("This model inherits from "),Ja=a("a"),$f=o("TFPreTrainedModel"),Mf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=h(),ua=a("p"),Ef=o("This model is also a "),ma=a("a"),Cf=o("tf.keras.Model"),zf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=h(),y(xn.$$.fragment),jf=h(),bt=a("div"),y(fa.$$.fragment),Lf=h(),Mo=a("p"),Pf=o("The "),Za=a("a"),Af=o("TFXLMForQuestionAnsweringSimple"),Nf=o(" forward method, overrides the "),Ti=a("code"),Sf=o("__call__"),Of=o(" special method."),Df=h(),y(En.$$.fragment),If=h(),y(Cn.$$.fragment),Wf=h(),y(zn.$$.fragment),this.h()},l(s){const v=J_('[data-svelte="svelte-1phssyn"]',document.head);l=r(v,"META",{name:!0,content:!0}),v.forEach(t),_=u(s),c=r(s,"H1",{class:!0});var ga=i(c);m=r(ga,"A",{id:!0,class:!0,href:!0});var Fi=i(m);k=r(Fi,"SPAN",{});var $i=i(k);T(d.$$.fragment,$i),$i.forEach(t),Fi.forEach(t),p=u(ga),q=r(ga,"SPAN",{});var Mi=i(q);ye=n(Mi,"FlauBERT"),Mi.forEach(t),ga.forEach(t),fe=u(s),O=r(s,"H2",{class:!0});var _a=i(O);se=r(_a,"A",{id:!0,class:!0,href:!0});var xi=i(se);J=r(xi,"SPAN",{});var Ei=i(J);T(w.$$.fragment,Ei),Ei.forEach(t),xi.forEach(t),Te=u(_a),H=r(_a,"SPAN",{});var Ci=i(H);Fe=n(Ci,"Overview"),Ci.forEach(t),_a.forEach(t),ge=u(s),I=r(s,"P",{});var ba=i(I);$e=n(ba,"The FlauBERT model was proposed in the paper "),re=r(ba,"A",{href:!0,rel:!0});var zi=i(re);K=n(zi,"FlauBERT: Unsupervised Language Model Pre-training for French"),zi.forEach(t),Me=n(ba,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),ba.forEach(t),_e=u(s),W=r(s,"P",{});var qi=i(W);xe=n(qi,"The abstract from the paper is the following:"),qi.forEach(t),be=u(s),X=r(s,"P",{});var ji=i(X);ue=r(ji,"EM",{});var Li=i(ue);Ee=n(Li,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),Li.forEach(t),ji.forEach(t),ee=u(s),j=r(s,"P",{});var xo=i(j);A=n(xo,"This model was contributed by "),ie=r(xo,"A",{href:!0,rel:!0});var Pi=i(ie);V=n(Pi,"formiel"),Pi.forEach(t),Ce=n(xo,". The original code can be found "),le=r(xo,"A",{href:!0,rel:!0});var Ai=i(le);Y=n(Ai,"here"),Ai.forEach(t),ze=n(xo,"."),xo.forEach(t),ve=u(s),L=r(s,"H2",{class:!0});var va=i(L);ae=r(va,"A",{id:!0,class:!0,href:!0});var Ni=i(ae);Q=r(Ni,"SPAN",{});var Si=i(Q);T(de.$$.fragment,Si),Si.forEach(t),Ni.forEach(t),qe=u(va),U=r(va,"SPAN",{});var Oi=i(U);je=n(Oi,"FlaubertConfig"),Oi.forEach(t),va.forEach(t),ke=u(s),N=r(s,"DIV",{class:!0});var Eo=i(N);T(ce.$$.fragment,Eo),G=u(Eo),Z=r(Eo,"P",{});var It=i(Z);oe=n(It,"This is the configuration class to store the configuration of a "),P=r(It,"A",{href:!0});var Di=i(P);Le=n(Di,"FlaubertModel"),Di.forEach(t),S=n(It," or a "),he=r(It,"A",{href:!0});var Ii=i(he);Pe=n(Ii,"TFFlaubertModel"),Ii.forEach(t),f=n(It,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=r(It,"A",{href:!0,rel:!0});var Wi=i(E);Qe=n(Wi,"flaubert/flaubert_base_uncased"),Wi.forEach(t),ne=n(It," architecture."),It.forEach(t),Ue=u(Eo),Ae=r(Eo,"P",{});var Co=i(Ae);z=n(Co,"Configuration objects inherit from "),De=r(Co,"A",{href:!0});var Xi=i(De);Be=n(Xi,"PretrainedConfig"),Xi.forEach(t),Re=n(Co,` and can be used to control the model outputs. Read the
documentation from `),Ie=r(Co,"A",{href:!0});var Hi=i(Ie);Ke=n(Hi,"PretrainedConfig"),Hi.forEach(t),D=n(Co," for more information."),Co.forEach(t),Eo.forEach(t),R=u(s),Ne=r(s,"H2",{class:!0});var ka=i(Ne);Se=r(ka,"A",{id:!0,class:!0,href:!0});var Qi=i(Se);B=r(Qi,"SPAN",{});var Ui=i(B);T(Oe.$$.fragment,Ui),Ui.forEach(t),Qi.forEach(t),Ve=u(ka),me=r(ka,"SPAN",{});var Bi=i(me);Ye=n(Bi,"FlaubertTokenizer"),Bi.forEach(t),ka.forEach(t),te=u(s),pe=r(s,"DIV",{class:!0});var Wt=i(pe);T(Sn.$$.fragment,Wt),vd=u(Wt),gr=r(Wt,"P",{});var Ri=i(gr);kd=n(Ri,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Ri.forEach(t),wd=u(Wt),Ot=r(Wt,"UL",{});var Xt=i(Ot);_r=r(Xt,"LI",{});var Ki=i(_r);yd=n(Ki,"Moses preprocessing and tokenization."),Ki.forEach(t),Td=u(Xt),br=r(Xt,"LI",{});var Vi=i(br);Fd=n(Vi,"Normalizing all inputs text."),Vi.forEach(t),$d=u(Xt),Dt=r(Xt,"LI",{});var Ht=i(Dt);Md=n(Ht,"The arguments "),vr=r(Ht,"CODE",{});var Yi=i(vr);xd=n(Yi,"special_tokens"),Yi.forEach(t),Ed=n(Ht," and the function "),kr=r(Ht,"CODE",{});var Gi=i(kr);Cd=n(Gi,"set_special_tokens"),Gi.forEach(t),zd=n(Ht,`, can be used to add additional symbols (like
\u201D`),wr=r(Ht,"STRONG",{});var Ji=i(wr);qd=n(Ji,"classify"),Ji.forEach(t),jd=n(Ht,"\u201D) to a vocabulary."),Ht.forEach(t),Ld=u(Xt),On=r(Xt,"LI",{});var Ml=i(On);Pd=n(Ml,"The argument "),yr=r(Ml,"CODE",{});var Xf=i(yr);Ad=n(Xf,"do_lowercase"),Xf.forEach(t),Nd=n(Ml," controls lower casing (automatically set for pretrained vocabularies)."),Ml.forEach(t),Xt.forEach(t),Sd=u(Wt),Dn=r(Wt,"P",{});var xl=i(Dn);Od=n(xl,"This tokenizer inherits from "),wa=r(xl,"A",{href:!0});var Hf=i(wa);Dd=n(Hf,"XLMTokenizer"),Hf.forEach(t),Id=n(xl,`. Please check the superclass for usage examples and documentation
regarding arguments.`),xl.forEach(t),Wt.forEach(t),Zi=u(s),Gt=r(s,"H2",{class:!0});var El=i(Gt);zo=r(El,"A",{id:!0,class:!0,href:!0});var Qf=i(zo);Tr=r(Qf,"SPAN",{});var Uf=i(Tr);T(In.$$.fragment,Uf),Uf.forEach(t),Qf.forEach(t),Wd=u(El),Fr=r(El,"SPAN",{});var Bf=i(Fr);Xd=n(Bf,"FlaubertModel"),Bf.forEach(t),El.forEach(t),el=u(s),ht=r(s,"DIV",{class:!0});var Qt=i(ht);T(Wn.$$.fragment,Qt),Hd=u(Qt),$r=r(Qt,"P",{});var Rf=i($r);Qd=n(Rf,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Rf.forEach(t),Ud=u(Qt),Xn=r(Qt,"P",{});var Cl=i(Xn);Bd=n(Cl,"This model inherits from "),ya=r(Cl,"A",{href:!0});var Kf=i(ya);Rd=n(Kf,"PreTrainedModel"),Kf.forEach(t),Kd=n(Cl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl.forEach(t),Vd=u(Qt),Hn=r(Qt,"P",{});var zl=i(Hn);Yd=n(zl,"This model is also a PyTorch "),Qn=r(zl,"A",{href:!0,rel:!0});var Vf=i(Qn);Gd=n(Vf,"torch.nn.Module"),Vf.forEach(t),Jd=n(zl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zl.forEach(t),Zd=u(Qt),kt=r(Qt,"DIV",{class:!0});var qn=i(kt);T(Un.$$.fragment,qn),ec=u(qn),Jt=r(qn,"P",{});var er=i(Jt);tc=n(er,"The "),Ta=r(er,"A",{href:!0});var Yf=i(Ta);oc=n(Yf,"FlaubertModel"),Yf.forEach(t),nc=n(er," forward method, overrides the "),Mr=r(er,"CODE",{});var Gf=i(Mr);sc=n(Gf,"__call__"),Gf.forEach(t),ac=n(er," special method."),er.forEach(t),rc=u(qn),T(qo.$$.fragment,qn),ic=u(qn),T(jo.$$.fragment,qn),qn.forEach(t),Qt.forEach(t),tl=u(s),Zt=r(s,"H2",{class:!0});var ql=i(Zt);Lo=r(ql,"A",{id:!0,class:!0,href:!0});var Jf=i(Lo);xr=r(Jf,"SPAN",{});var Zf=i(xr);T(Bn.$$.fragment,Zf),Zf.forEach(t),Jf.forEach(t),lc=u(ql),Er=r(ql,"SPAN",{});var eg=i(Er);dc=n(eg,"FlaubertWithLMHeadModel"),eg.forEach(t),ql.forEach(t),ol=u(s),Ze=r(s,"DIV",{class:!0});var Mt=i(Ze);T(Rn.$$.fragment,Mt),cc=u(Mt),Cr=r(Mt,"P",{});var tg=i(Cr);pc=n(tg,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tg.forEach(t),hc=u(Mt),Kn=r(Mt,"P",{});var jl=i(Kn);uc=n(jl,"This model inherits from "),Fa=r(jl,"A",{href:!0});var og=i(Fa);mc=n(og,"PreTrainedModel"),og.forEach(t),fc=n(jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl.forEach(t),gc=u(Mt),Vn=r(Mt,"P",{});var Ll=i(Vn);_c=n(Ll,"This model is also a PyTorch "),Yn=r(Ll,"A",{href:!0,rel:!0});var ng=i(Yn);bc=n(ng,"torch.nn.Module"),ng.forEach(t),vc=n(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),kc=u(Mt),Gn=r(Mt,"P",{});var Pl=i(Gn);wc=n(Pl,"This class overrides "),$a=r(Pl,"A",{href:!0});var sg=i($a);yc=n(sg,"XLMWithLMHeadModel"),sg.forEach(t),Tc=n(Pl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Pl.forEach(t),Fc=u(Mt),ut=r(Mt,"DIV",{class:!0});var Ut=i(ut);T(Jn.$$.fragment,Ut),$c=u(Ut),eo=r(Ut,"P",{});var tr=i(eo);Mc=n(tr,"The "),Ma=r(tr,"A",{href:!0});var ag=i(Ma);xc=n(ag,"XLMWithLMHeadModel"),ag.forEach(t),Ec=n(tr," forward method, overrides the "),zr=r(tr,"CODE",{});var rg=i(zr);Cc=n(rg,"__call__"),rg.forEach(t),zc=n(tr," special method."),tr.forEach(t),qc=u(Ut),T(Po.$$.fragment,Ut),jc=u(Ut),T(Ao.$$.fragment,Ut),Lc=u(Ut),T(No.$$.fragment,Ut),Ut.forEach(t),Mt.forEach(t),nl=u(s),to=r(s,"H2",{class:!0});var Al=i(to);So=r(Al,"A",{id:!0,class:!0,href:!0});var ig=i(So);qr=r(ig,"SPAN",{});var lg=i(qr);T(Zn.$$.fragment,lg),lg.forEach(t),ig.forEach(t),Pc=u(Al),jr=r(Al,"SPAN",{});var dg=i(jr);Ac=n(dg,"FlaubertForSequenceClassification"),dg.forEach(t),Al.forEach(t),sl=u(s),et=r(s,"DIV",{class:!0});var xt=i(et);T(es.$$.fragment,xt),Nc=u(xt),Lr=r(xt,"P",{});var cg=i(Lr);Sc=n(cg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),cg.forEach(t),Oc=u(xt),ts=r(xt,"P",{});var Nl=i(ts);Dc=n(Nl,"This model inherits from "),xa=r(Nl,"A",{href:!0});var pg=i(xa);Ic=n(pg,"PreTrainedModel"),pg.forEach(t),Wc=n(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),Xc=u(xt),os=r(xt,"P",{});var Sl=i(os);Hc=n(Sl,"This model is also a PyTorch "),ns=r(Sl,"A",{href:!0,rel:!0});var hg=i(ns);Qc=n(hg,"torch.nn.Module"),hg.forEach(t),Uc=n(Sl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sl.forEach(t),Bc=u(xt),ss=r(xt,"P",{});var Ol=i(ss);Rc=n(Ol,"This class overrides "),Ea=r(Ol,"A",{href:!0});var ug=i(Ea);Kc=n(ug,"XLMForSequenceClassification"),ug.forEach(t),Vc=n(Ol,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Ol.forEach(t),Yc=u(xt),Je=r(xt,"DIV",{class:!0});var vt=i(Je);T(as.$$.fragment,vt),Gc=u(vt),oo=r(vt,"P",{});var or=i(oo);Jc=n(or,"The "),Ca=r(or,"A",{href:!0});var mg=i(Ca);Zc=n(mg,"XLMForSequenceClassification"),mg.forEach(t),ep=n(or," forward method, overrides the "),Pr=r(or,"CODE",{});var fg=i(Pr);tp=n(fg,"__call__"),fg.forEach(t),op=n(or," special method."),or.forEach(t),np=u(vt),T(Oo.$$.fragment,vt),sp=u(vt),T(Do.$$.fragment,vt),ap=u(vt),T(Io.$$.fragment,vt),rp=u(vt),T(Wo.$$.fragment,vt),ip=u(vt),T(Xo.$$.fragment,vt),vt.forEach(t),xt.forEach(t),al=u(s),no=r(s,"H2",{class:!0});var Dl=i(no);Ho=r(Dl,"A",{id:!0,class:!0,href:!0});var gg=i(Ho);Ar=r(gg,"SPAN",{});var _g=i(Ar);T(rs.$$.fragment,_g),_g.forEach(t),gg.forEach(t),lp=u(Dl),Nr=r(Dl,"SPAN",{});var bg=i(Nr);dp=n(bg,"FlaubertForMultipleChoice"),bg.forEach(t),Dl.forEach(t),rl=u(s),tt=r(s,"DIV",{class:!0});var Et=i(tt);T(is.$$.fragment,Et),cp=u(Et),Sr=r(Et,"P",{});var vg=i(Sr);pp=n(vg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),vg.forEach(t),hp=u(Et),ls=r(Et,"P",{});var Il=i(ls);up=n(Il,"This model inherits from "),za=r(Il,"A",{href:!0});var kg=i(za);mp=n(kg,"PreTrainedModel"),kg.forEach(t),fp=n(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),gp=u(Et),ds=r(Et,"P",{});var Wl=i(ds);_p=n(Wl,"This model is also a PyTorch "),cs=r(Wl,"A",{href:!0,rel:!0});var wg=i(cs);bp=n(wg,"torch.nn.Module"),wg.forEach(t),vp=n(Wl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wl.forEach(t),kp=u(Et),ps=r(Et,"P",{});var Xl=i(ps);wp=n(Xl,"This class overrides "),qa=r(Xl,"A",{href:!0});var yg=i(qa);yp=n(yg,"XLMForMultipleChoice"),yg.forEach(t),Tp=n(Xl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Xl.forEach(t),Fp=u(Et),wt=r(Et,"DIV",{class:!0});var jn=i(wt);T(hs.$$.fragment,jn),$p=u(jn),so=r(jn,"P",{});var nr=i(so);Mp=n(nr,"The "),ja=r(nr,"A",{href:!0});var Tg=i(ja);xp=n(Tg,"XLMForMultipleChoice"),Tg.forEach(t),Ep=n(nr," forward method, overrides the "),Or=r(nr,"CODE",{});var Fg=i(Or);Cp=n(Fg,"__call__"),Fg.forEach(t),zp=n(nr," special method."),nr.forEach(t),qp=u(jn),T(Qo.$$.fragment,jn),jp=u(jn),T(Uo.$$.fragment,jn),jn.forEach(t),Et.forEach(t),il=u(s),ao=r(s,"H2",{class:!0});var Hl=i(ao);Bo=r(Hl,"A",{id:!0,class:!0,href:!0});var $g=i(Bo);Dr=r($g,"SPAN",{});var Mg=i(Dr);T(us.$$.fragment,Mg),Mg.forEach(t),$g.forEach(t),Lp=u(Hl),Ir=r(Hl,"SPAN",{});var xg=i(Ir);Pp=n(xg,"FlaubertForTokenClassification"),xg.forEach(t),Hl.forEach(t),ll=u(s),ot=r(s,"DIV",{class:!0});var Ct=i(ot);T(ms.$$.fragment,Ct),Ap=u(Ct),Wr=r(Ct,"P",{});var Eg=i(Wr);Np=n(Eg,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Eg.forEach(t),Sp=u(Ct),fs=r(Ct,"P",{});var Ql=i(fs);Op=n(Ql,"This model inherits from "),La=r(Ql,"A",{href:!0});var Cg=i(La);Dp=n(Cg,"PreTrainedModel"),Cg.forEach(t),Ip=n(Ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql.forEach(t),Wp=u(Ct),gs=r(Ct,"P",{});var Ul=i(gs);Xp=n(Ul,"This model is also a PyTorch "),_s=r(Ul,"A",{href:!0,rel:!0});var zg=i(_s);Hp=n(zg,"torch.nn.Module"),zg.forEach(t),Qp=n(Ul,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ul.forEach(t),Up=u(Ct),bs=r(Ct,"P",{});var Bl=i(bs);Bp=n(Bl,"This class overrides "),Pa=r(Bl,"A",{href:!0});var qg=i(Pa);Rp=n(qg,"XLMForTokenClassification"),qg.forEach(t),Kp=n(Bl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Bl.forEach(t),Vp=u(Ct),mt=r(Ct,"DIV",{class:!0});var Bt=i(mt);T(vs.$$.fragment,Bt),Yp=u(Bt),ro=r(Bt,"P",{});var sr=i(ro);Gp=n(sr,"The "),Aa=r(sr,"A",{href:!0});var jg=i(Aa);Jp=n(jg,"XLMForTokenClassification"),jg.forEach(t),Zp=n(sr," forward method, overrides the "),Xr=r(sr,"CODE",{});var Lg=i(Xr);eh=n(Lg,"__call__"),Lg.forEach(t),th=n(sr," special method."),sr.forEach(t),oh=u(Bt),T(Ro.$$.fragment,Bt),nh=u(Bt),T(Ko.$$.fragment,Bt),sh=u(Bt),T(Vo.$$.fragment,Bt),Bt.forEach(t),Ct.forEach(t),dl=u(s),io=r(s,"H2",{class:!0});var Rl=i(io);Yo=r(Rl,"A",{id:!0,class:!0,href:!0});var Pg=i(Yo);Hr=r(Pg,"SPAN",{});var Ag=i(Hr);T(ks.$$.fragment,Ag),Ag.forEach(t),Pg.forEach(t),ah=u(Rl),Qr=r(Rl,"SPAN",{});var Ng=i(Qr);rh=n(Ng,"FlaubertForQuestionAnsweringSimple"),Ng.forEach(t),Rl.forEach(t),cl=u(s),nt=r(s,"DIV",{class:!0});var zt=i(nt);T(ws.$$.fragment,zt),ih=u(zt),lo=r(zt,"P",{});var ar=i(lo);lh=n(ar,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ur=r(ar,"CODE",{});var Sg=i(Ur);dh=n(Sg,"span start logits"),Sg.forEach(t),ch=n(ar," and "),Br=r(ar,"CODE",{});var Og=i(Br);ph=n(Og,"span end logits"),Og.forEach(t),hh=n(ar,")."),ar.forEach(t),uh=u(zt),ys=r(zt,"P",{});var Kl=i(ys);mh=n(Kl,"This model inherits from "),Na=r(Kl,"A",{href:!0});var Dg=i(Na);fh=n(Dg,"PreTrainedModel"),Dg.forEach(t),gh=n(Kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl.forEach(t),_h=u(zt),Ts=r(zt,"P",{});var Vl=i(Ts);bh=n(Vl,"This model is also a PyTorch "),Fs=r(Vl,"A",{href:!0,rel:!0});var Ig=i(Fs);vh=n(Ig,"torch.nn.Module"),Ig.forEach(t),kh=n(Vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vl.forEach(t),wh=u(zt),$s=r(zt,"P",{});var Yl=i($s);yh=n(Yl,"This class overrides "),Sa=r(Yl,"A",{href:!0});var Wg=i(Sa);Th=n(Wg,"XLMForQuestionAnsweringSimple"),Wg.forEach(t),Fh=n(Yl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Yl.forEach(t),$h=u(zt),ft=r(zt,"DIV",{class:!0});var Rt=i(ft);T(Ms.$$.fragment,Rt),Mh=u(Rt),co=r(Rt,"P",{});var rr=i(co);xh=n(rr,"The "),Oa=r(rr,"A",{href:!0});var Xg=i(Oa);Eh=n(Xg,"XLMForQuestionAnsweringSimple"),Xg.forEach(t),Ch=n(rr," forward method, overrides the "),Rr=r(rr,"CODE",{});var Hg=i(Rr);zh=n(Hg,"__call__"),Hg.forEach(t),qh=n(rr," special method."),rr.forEach(t),jh=u(Rt),T(Go.$$.fragment,Rt),Lh=u(Rt),T(Jo.$$.fragment,Rt),Ph=u(Rt),T(Zo.$$.fragment,Rt),Rt.forEach(t),zt.forEach(t),pl=u(s),po=r(s,"H2",{class:!0});var Gl=i(po);en=r(Gl,"A",{id:!0,class:!0,href:!0});var Qg=i(en);Kr=r(Qg,"SPAN",{});var Ug=i(Kr);T(xs.$$.fragment,Ug),Ug.forEach(t),Qg.forEach(t),Ah=u(Gl),Vr=r(Gl,"SPAN",{});var Bg=i(Vr);Nh=n(Bg,"FlaubertForQuestionAnswering"),Bg.forEach(t),Gl.forEach(t),hl=u(s),st=r(s,"DIV",{class:!0});var qt=i(st);T(Es.$$.fragment,qt),Sh=u(qt),ho=r(qt,"P",{});var ir=i(ho);Oh=n(ir,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Yr=r(ir,"CODE",{});var Rg=i(Yr);Dh=n(Rg,"span start logits"),Rg.forEach(t),Ih=n(ir," and "),Gr=r(ir,"CODE",{});var Kg=i(Gr);Wh=n(Kg,"span end logits"),Kg.forEach(t),Xh=n(ir,")."),ir.forEach(t),Hh=u(qt),Cs=r(qt,"P",{});var Jl=i(Cs);Qh=n(Jl,"This model inherits from "),Da=r(Jl,"A",{href:!0});var Vg=i(Da);Uh=n(Vg,"PreTrainedModel"),Vg.forEach(t),Bh=n(Jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jl.forEach(t),Rh=u(qt),zs=r(qt,"P",{});var Zl=i(zs);Kh=n(Zl,"This model is also a PyTorch "),qs=r(Zl,"A",{href:!0,rel:!0});var Yg=i(qs);Vh=n(Yg,"torch.nn.Module"),Yg.forEach(t),Yh=n(Zl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl.forEach(t),Gh=u(qt),js=r(qt,"P",{});var ed=i(js);Jh=n(ed,"This class overrides "),Ia=r(ed,"A",{href:!0});var Gg=i(Ia);Zh=n(Gg,"XLMForQuestionAnswering"),Gg.forEach(t),eu=n(ed,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ed.forEach(t),tu=u(qt),yt=r(qt,"DIV",{class:!0});var Ln=i(yt);T(Ls.$$.fragment,Ln),ou=u(Ln),uo=r(Ln,"P",{});var lr=i(uo);nu=n(lr,"The "),Wa=r(lr,"A",{href:!0});var Jg=i(Wa);su=n(Jg,"XLMForQuestionAnswering"),Jg.forEach(t),au=n(lr," forward method, overrides the "),Jr=r(lr,"CODE",{});var Zg=i(Jr);ru=n(Zg,"__call__"),Zg.forEach(t),iu=n(lr," special method."),lr.forEach(t),lu=u(Ln),T(tn.$$.fragment,Ln),du=u(Ln),T(on.$$.fragment,Ln),Ln.forEach(t),qt.forEach(t),ul=u(s),mo=r(s,"H2",{class:!0});var td=i(mo);nn=r(td,"A",{id:!0,class:!0,href:!0});var e_=i(nn);Zr=r(e_,"SPAN",{});var t_=i(Zr);T(Ps.$$.fragment,t_),t_.forEach(t),e_.forEach(t),cu=u(td),ei=r(td,"SPAN",{});var o_=i(ei);pu=n(o_,"TFFlaubertModel"),o_.forEach(t),td.forEach(t),ml=u(s),at=r(s,"DIV",{class:!0});var jt=i(at);T(As.$$.fragment,jt),hu=u(jt),ti=r(jt,"P",{});var n_=i(ti);uu=n(n_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),n_.forEach(t),mu=u(jt),Ns=r(jt,"P",{});var od=i(Ns);fu=n(od,"This model inherits from "),Xa=r(od,"A",{href:!0});var s_=i(Xa);gu=n(s_,"TFPreTrainedModel"),s_.forEach(t),_u=n(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(t),bu=u(jt),Ss=r(jt,"P",{});var nd=i(Ss);vu=n(nd,"This model is also a "),Os=r(nd,"A",{href:!0,rel:!0});var a_=i(Os);ku=n(a_,"tf.keras.Model"),a_.forEach(t),wu=n(nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nd.forEach(t),yu=u(jt),T(sn.$$.fragment,jt),Tu=u(jt),Tt=r(jt,"DIV",{class:!0});var Pn=i(Tt);T(Ds.$$.fragment,Pn),Fu=u(Pn),fo=r(Pn,"P",{});var dr=i(fo);$u=n(dr,"The "),Ha=r(dr,"A",{href:!0});var r_=i(Ha);Mu=n(r_,"TFFlaubertModel"),r_.forEach(t),xu=n(dr," forward method, overrides the "),oi=r(dr,"CODE",{});var i_=i(oi);Eu=n(i_,"__call__"),i_.forEach(t),Cu=n(dr," special method."),dr.forEach(t),zu=u(Pn),T(an.$$.fragment,Pn),qu=u(Pn),T(rn.$$.fragment,Pn),Pn.forEach(t),jt.forEach(t),fl=u(s),go=r(s,"H2",{class:!0});var sd=i(go);ln=r(sd,"A",{id:!0,class:!0,href:!0});var l_=i(ln);ni=r(l_,"SPAN",{});var d_=i(ni);T(Is.$$.fragment,d_),d_.forEach(t),l_.forEach(t),ju=u(sd),si=r(sd,"SPAN",{});var c_=i(si);Lu=n(c_,"TFFlaubertWithLMHeadModel"),c_.forEach(t),sd.forEach(t),gl=u(s),rt=r(s,"DIV",{class:!0});var Lt=i(rt);T(Ws.$$.fragment,Lt),Pu=u(Lt),ai=r(Lt,"P",{});var p_=i(ai);Au=n(p_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),p_.forEach(t),Nu=u(Lt),Xs=r(Lt,"P",{});var ad=i(Xs);Su=n(ad,"This model inherits from "),Qa=r(ad,"A",{href:!0});var h_=i(Qa);Ou=n(h_,"TFPreTrainedModel"),h_.forEach(t),Du=n(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Iu=u(Lt),Hs=r(Lt,"P",{});var rd=i(Hs);Wu=n(rd,"This model is also a "),Qs=r(rd,"A",{href:!0,rel:!0});var u_=i(Qs);Xu=n(u_,"tf.keras.Model"),u_.forEach(t),Hu=n(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),Qu=u(Lt),T(dn.$$.fragment,Lt),Uu=u(Lt),Ft=r(Lt,"DIV",{class:!0});var An=i(Ft);T(Us.$$.fragment,An),Bu=u(An),_o=r(An,"P",{});var cr=i(_o);Ru=n(cr,"The "),Ua=r(cr,"A",{href:!0});var m_=i(Ua);Ku=n(m_,"TFFlaubertWithLMHeadModel"),m_.forEach(t),Vu=n(cr," forward method, overrides the "),ri=r(cr,"CODE",{});var f_=i(ri);Yu=n(f_,"__call__"),f_.forEach(t),Gu=n(cr," special method."),cr.forEach(t),Ju=u(An),T(cn.$$.fragment,An),Zu=u(An),T(pn.$$.fragment,An),An.forEach(t),Lt.forEach(t),_l=u(s),bo=r(s,"H2",{class:!0});var id=i(bo);hn=r(id,"A",{id:!0,class:!0,href:!0});var g_=i(hn);ii=r(g_,"SPAN",{});var __=i(ii);T(Bs.$$.fragment,__),__.forEach(t),g_.forEach(t),em=u(id),li=r(id,"SPAN",{});var b_=i(li);tm=n(b_,"TFFlaubertForSequenceClassification"),b_.forEach(t),id.forEach(t),bl=u(s),it=r(s,"DIV",{class:!0});var Pt=i(it);T(Rs.$$.fragment,Pt),om=u(Pt),di=r(Pt,"P",{});var v_=i(di);nm=n(v_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),v_.forEach(t),sm=u(Pt),Ks=r(Pt,"P",{});var ld=i(Ks);am=n(ld,"This model inherits from "),Ba=r(ld,"A",{href:!0});var k_=i(Ba);rm=n(k_,"TFPreTrainedModel"),k_.forEach(t),im=n(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),lm=u(Pt),Vs=r(Pt,"P",{});var dd=i(Vs);dm=n(dd,"This model is also a "),Ys=r(dd,"A",{href:!0,rel:!0});var w_=i(Ys);cm=n(w_,"tf.keras.Model"),w_.forEach(t),pm=n(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),hm=u(Pt),T(un.$$.fragment,Pt),um=u(Pt),gt=r(Pt,"DIV",{class:!0});var Kt=i(gt);T(Gs.$$.fragment,Kt),mm=u(Kt),vo=r(Kt,"P",{});var pr=i(vo);fm=n(pr,"The "),Ra=r(pr,"A",{href:!0});var y_=i(Ra);gm=n(y_,"TFXLMForSequenceClassification"),y_.forEach(t),_m=n(pr," forward method, overrides the "),ci=r(pr,"CODE",{});var T_=i(ci);bm=n(T_,"__call__"),T_.forEach(t),vm=n(pr," special method."),pr.forEach(t),km=u(Kt),T(mn.$$.fragment,Kt),wm=u(Kt),T(fn.$$.fragment,Kt),ym=u(Kt),T(gn.$$.fragment,Kt),Kt.forEach(t),Pt.forEach(t),vl=u(s),ko=r(s,"H2",{class:!0});var cd=i(ko);_n=r(cd,"A",{id:!0,class:!0,href:!0});var F_=i(_n);pi=r(F_,"SPAN",{});var $_=i(pi);T(Js.$$.fragment,$_),$_.forEach(t),F_.forEach(t),Tm=u(cd),hi=r(cd,"SPAN",{});var M_=i(hi);Fm=n(M_,"TFFlaubertForMultipleChoice"),M_.forEach(t),cd.forEach(t),kl=u(s),lt=r(s,"DIV",{class:!0});var At=i(lt);T(Zs.$$.fragment,At),$m=u(At),ui=r(At,"P",{});var x_=i(ui);Mm=n(x_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x_.forEach(t),xm=u(At),ea=r(At,"P",{});var pd=i(ea);Em=n(pd,"This model inherits from "),Ka=r(pd,"A",{href:!0});var E_=i(Ka);Cm=n(E_,"TFPreTrainedModel"),E_.forEach(t),zm=n(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),qm=u(At),ta=r(At,"P",{});var hd=i(ta);jm=n(hd,"This model is also a "),oa=r(hd,"A",{href:!0,rel:!0});var C_=i(oa);Lm=n(C_,"tf.keras.Model"),C_.forEach(t),Pm=n(hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hd.forEach(t),Am=u(At),T(bn.$$.fragment,At),Nm=u(At),$t=r(At,"DIV",{class:!0});var Nn=i($t);T(na.$$.fragment,Nn),Sm=u(Nn),wo=r(Nn,"P",{});var hr=i(wo);Om=n(hr,"The "),Va=r(hr,"A",{href:!0});var z_=i(Va);Dm=n(z_,"TFXLMForMultipleChoice"),z_.forEach(t),Im=n(hr," forward method, overrides the "),mi=r(hr,"CODE",{});var q_=i(mi);Wm=n(q_,"__call__"),q_.forEach(t),Xm=n(hr," special method."),hr.forEach(t),Hm=u(Nn),T(vn.$$.fragment,Nn),Qm=u(Nn),T(kn.$$.fragment,Nn),Nn.forEach(t),At.forEach(t),wl=u(s),yo=r(s,"H2",{class:!0});var ud=i(yo);wn=r(ud,"A",{id:!0,class:!0,href:!0});var j_=i(wn);fi=r(j_,"SPAN",{});var L_=i(fi);T(sa.$$.fragment,L_),L_.forEach(t),j_.forEach(t),Um=u(ud),gi=r(ud,"SPAN",{});var P_=i(gi);Bm=n(P_,"TFFlaubertForTokenClassification"),P_.forEach(t),ud.forEach(t),yl=u(s),dt=r(s,"DIV",{class:!0});var Nt=i(dt);T(aa.$$.fragment,Nt),Rm=u(Nt),_i=r(Nt,"P",{});var A_=i(_i);Km=n(A_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A_.forEach(t),Vm=u(Nt),ra=r(Nt,"P",{});var md=i(ra);Ym=n(md,"This model inherits from "),Ya=r(md,"A",{href:!0});var N_=i(Ya);Gm=n(N_,"TFPreTrainedModel"),N_.forEach(t),Jm=n(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),Zm=u(Nt),ia=r(Nt,"P",{});var fd=i(ia);ef=n(fd,"This model is also a "),la=r(fd,"A",{href:!0,rel:!0});var S_=i(la);tf=n(S_,"tf.keras.Model"),S_.forEach(t),of=n(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),nf=u(Nt),T(yn.$$.fragment,Nt),sf=u(Nt),_t=r(Nt,"DIV",{class:!0});var Vt=i(_t);T(da.$$.fragment,Vt),af=u(Vt),To=r(Vt,"P",{});var ur=i(To);rf=n(ur,"The "),Ga=r(ur,"A",{href:!0});var O_=i(Ga);lf=n(O_,"TFXLMForTokenClassification"),O_.forEach(t),df=n(ur," forward method, overrides the "),bi=r(ur,"CODE",{});var D_=i(bi);cf=n(D_,"__call__"),D_.forEach(t),pf=n(ur," special method."),ur.forEach(t),hf=u(Vt),T(Tn.$$.fragment,Vt),uf=u(Vt),T(Fn.$$.fragment,Vt),mf=u(Vt),T($n.$$.fragment,Vt),Vt.forEach(t),Nt.forEach(t),Tl=u(s),Fo=r(s,"H2",{class:!0});var gd=i(Fo);Mn=r(gd,"A",{id:!0,class:!0,href:!0});var I_=i(Mn);vi=r(I_,"SPAN",{});var W_=i(vi);T(ca.$$.fragment,W_),W_.forEach(t),I_.forEach(t),ff=u(gd),ki=r(gd,"SPAN",{});var X_=i(ki);gf=n(X_,"TFFlaubertForQuestionAnsweringSimple"),X_.forEach(t),gd.forEach(t),Fl=u(s),ct=r(s,"DIV",{class:!0});var St=i(ct);T(pa.$$.fragment,St),_f=u(St),$o=r(St,"P",{});var mr=i($o);bf=n(mr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),wi=r(mr,"CODE",{});var H_=i(wi);vf=n(H_,"span start logits"),H_.forEach(t),kf=n(mr," and "),yi=r(mr,"CODE",{});var Q_=i(yi);wf=n(Q_,"span end logits"),Q_.forEach(t),yf=n(mr,")."),mr.forEach(t),Tf=u(St),ha=r(St,"P",{});var _d=i(ha);Ff=n(_d,"This model inherits from "),Ja=r(_d,"A",{href:!0});var U_=i(Ja);$f=n(U_,"TFPreTrainedModel"),U_.forEach(t),Mf=n(_d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d.forEach(t),xf=u(St),ua=r(St,"P",{});var bd=i(ua);Ef=n(bd,"This model is also a "),ma=r(bd,"A",{href:!0,rel:!0});var B_=i(ma);Cf=n(B_,"tf.keras.Model"),B_.forEach(t),zf=n(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),qf=u(St),T(xn.$$.fragment,St),jf=u(St),bt=r(St,"DIV",{class:!0});var Yt=i(bt);T(fa.$$.fragment,Yt),Lf=u(Yt),Mo=r(Yt,"P",{});var fr=i(Mo);Pf=n(fr,"The "),Za=r(fr,"A",{href:!0});var R_=i(Za);Af=n(R_,"TFXLMForQuestionAnsweringSimple"),R_.forEach(t),Nf=n(fr," forward method, overrides the "),Ti=r(fr,"CODE",{});var K_=i(Ti);Sf=n(K_,"__call__"),K_.forEach(t),Of=n(fr," special method."),fr.forEach(t),Df=u(Yt),T(En.$$.fragment,Yt),If=u(Yt),T(Cn.$$.fragment,Yt),Wf=u(Yt),T(zn.$$.fragment,Yt),Yt.forEach(t),St.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(Xb)),g(m,"id","flaubert"),g(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(m,"href","#flaubert"),g(c,"class","relative group"),g(se,"id","overview"),g(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(se,"href","#overview"),g(O,"class","relative group"),g(re,"href","https://arxiv.org/abs/1912.05372"),g(re,"rel","nofollow"),g(ie,"href","https://huggingface.co/formiel"),g(ie,"rel","nofollow"),g(le,"href","https://github.com/getalp/Flaubert"),g(le,"rel","nofollow"),g(ae,"id","transformers.FlaubertConfig"),g(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ae,"href","#transformers.FlaubertConfig"),g(L,"class","relative group"),g(P,"href","/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertModel"),g(he,"href","/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.TFFlaubertModel"),g(E,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),g(E,"rel","nofollow"),g(De,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),g(Ie,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"id","transformers.FlaubertTokenizer"),g(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Se,"href","#transformers.FlaubertTokenizer"),g(Ne,"class","relative group"),g(wa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMTokenizer"),g(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(zo,"id","transformers.FlaubertModel"),g(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(zo,"href","#transformers.FlaubertModel"),g(Gt,"class","relative group"),g(ya,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Qn,"rel","nofollow"),g(Ta,"href","/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.FlaubertModel"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Lo,"id","transformers.FlaubertWithLMHeadModel"),g(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Lo,"href","#transformers.FlaubertWithLMHeadModel"),g(Zt,"class","relative group"),g(Fa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Yn,"rel","nofollow"),g($a,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),g(Ma,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(So,"id","transformers.FlaubertForSequenceClassification"),g(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(So,"href","#transformers.FlaubertForSequenceClassification"),g(to,"class","relative group"),g(xa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ns,"rel","nofollow"),g(Ea,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForSequenceClassification"),g(Ca,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForSequenceClassification"),g(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ho,"id","transformers.FlaubertForMultipleChoice"),g(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ho,"href","#transformers.FlaubertForMultipleChoice"),g(no,"class","relative group"),g(za,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(cs,"rel","nofollow"),g(qa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForMultipleChoice"),g(ja,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForMultipleChoice"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Bo,"id","transformers.FlaubertForTokenClassification"),g(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Bo,"href","#transformers.FlaubertForTokenClassification"),g(ao,"class","relative group"),g(La,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_s,"rel","nofollow"),g(Pa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForTokenClassification"),g(Aa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForTokenClassification"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Yo,"id","transformers.FlaubertForQuestionAnsweringSimple"),g(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Yo,"href","#transformers.FlaubertForQuestionAnsweringSimple"),g(io,"class","relative group"),g(Na,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Fs,"rel","nofollow"),g(Sa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),g(Oa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.FlaubertForQuestionAnswering"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.FlaubertForQuestionAnswering"),g(po,"class","relative group"),g(Da,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(qs,"rel","nofollow"),g(Ia,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),g(Wa,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nn,"id","transformers.TFFlaubertModel"),g(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(nn,"href","#transformers.TFFlaubertModel"),g(mo,"class","relative group"),g(Xa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Os,"rel","nofollow"),g(Ha,"href","/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.TFFlaubertModel"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.TFFlaubertWithLMHeadModel"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.TFFlaubertWithLMHeadModel"),g(go,"class","relative group"),g(Qa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Qs,"rel","nofollow"),g(Ua,"href","/docs/transformers/v4.22.1/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),g(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(hn,"id","transformers.TFFlaubertForSequenceClassification"),g(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(hn,"href","#transformers.TFFlaubertForSequenceClassification"),g(bo,"class","relative group"),g(Ba,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ys,"rel","nofollow"),g(Ra,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_n,"id","transformers.TFFlaubertForMultipleChoice"),g(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_n,"href","#transformers.TFFlaubertForMultipleChoice"),g(ko,"class","relative group"),g(Ka,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(oa,"rel","nofollow"),g(Va,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wn,"id","transformers.TFFlaubertForTokenClassification"),g(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(wn,"href","#transformers.TFFlaubertForTokenClassification"),g(yo,"class","relative group"),g(Ya,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(la,"rel","nofollow"),g(Ga,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Mn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),g(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Mn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),g(Fo,"class","relative group"),g(Ja,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ma,"rel","nofollow"),g(Za,"href","/docs/transformers/v4.22.1/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,l),b(s,_,v),b(s,c,v),e(c,m),e(m,k),F(d,k,null),e(c,p),e(c,q),e(q,ye),b(s,fe,v),b(s,O,v),e(O,se),e(se,J),F(w,J,null),e(O,Te),e(O,H),e(H,Fe),b(s,ge,v),b(s,I,v),e(I,$e),e(I,re),e(re,K),e(I,Me),b(s,_e,v),b(s,W,v),e(W,xe),b(s,be,v),b(s,X,v),e(X,ue),e(ue,Ee),b(s,ee,v),b(s,j,v),e(j,A),e(j,ie),e(ie,V),e(j,Ce),e(j,le),e(le,Y),e(j,ze),b(s,ve,v),b(s,L,v),e(L,ae),e(ae,Q),F(de,Q,null),e(L,qe),e(L,U),e(U,je),b(s,ke,v),b(s,N,v),F(ce,N,null),e(N,G),e(N,Z),e(Z,oe),e(Z,P),e(P,Le),e(Z,S),e(Z,he),e(he,Pe),e(Z,f),e(Z,E),e(E,Qe),e(Z,ne),e(N,Ue),e(N,Ae),e(Ae,z),e(Ae,De),e(De,Be),e(Ae,Re),e(Ae,Ie),e(Ie,Ke),e(Ae,D),b(s,R,v),b(s,Ne,v),e(Ne,Se),e(Se,B),F(Oe,B,null),e(Ne,Ve),e(Ne,me),e(me,Ye),b(s,te,v),b(s,pe,v),F(Sn,pe,null),e(pe,vd),e(pe,gr),e(gr,kd),e(pe,wd),e(pe,Ot),e(Ot,_r),e(_r,yd),e(Ot,Td),e(Ot,br),e(br,Fd),e(Ot,$d),e(Ot,Dt),e(Dt,Md),e(Dt,vr),e(vr,xd),e(Dt,Ed),e(Dt,kr),e(kr,Cd),e(Dt,zd),e(Dt,wr),e(wr,qd),e(Dt,jd),e(Ot,Ld),e(Ot,On),e(On,Pd),e(On,yr),e(yr,Ad),e(On,Nd),e(pe,Sd),e(pe,Dn),e(Dn,Od),e(Dn,wa),e(wa,Dd),e(Dn,Id),b(s,Zi,v),b(s,Gt,v),e(Gt,zo),e(zo,Tr),F(In,Tr,null),e(Gt,Wd),e(Gt,Fr),e(Fr,Xd),b(s,el,v),b(s,ht,v),F(Wn,ht,null),e(ht,Hd),e(ht,$r),e($r,Qd),e(ht,Ud),e(ht,Xn),e(Xn,Bd),e(Xn,ya),e(ya,Rd),e(Xn,Kd),e(ht,Vd),e(ht,Hn),e(Hn,Yd),e(Hn,Qn),e(Qn,Gd),e(Hn,Jd),e(ht,Zd),e(ht,kt),F(Un,kt,null),e(kt,ec),e(kt,Jt),e(Jt,tc),e(Jt,Ta),e(Ta,oc),e(Jt,nc),e(Jt,Mr),e(Mr,sc),e(Jt,ac),e(kt,rc),F(qo,kt,null),e(kt,ic),F(jo,kt,null),b(s,tl,v),b(s,Zt,v),e(Zt,Lo),e(Lo,xr),F(Bn,xr,null),e(Zt,lc),e(Zt,Er),e(Er,dc),b(s,ol,v),b(s,Ze,v),F(Rn,Ze,null),e(Ze,cc),e(Ze,Cr),e(Cr,pc),e(Ze,hc),e(Ze,Kn),e(Kn,uc),e(Kn,Fa),e(Fa,mc),e(Kn,fc),e(Ze,gc),e(Ze,Vn),e(Vn,_c),e(Vn,Yn),e(Yn,bc),e(Vn,vc),e(Ze,kc),e(Ze,Gn),e(Gn,wc),e(Gn,$a),e($a,yc),e(Gn,Tc),e(Ze,Fc),e(Ze,ut),F(Jn,ut,null),e(ut,$c),e(ut,eo),e(eo,Mc),e(eo,Ma),e(Ma,xc),e(eo,Ec),e(eo,zr),e(zr,Cc),e(eo,zc),e(ut,qc),F(Po,ut,null),e(ut,jc),F(Ao,ut,null),e(ut,Lc),F(No,ut,null),b(s,nl,v),b(s,to,v),e(to,So),e(So,qr),F(Zn,qr,null),e(to,Pc),e(to,jr),e(jr,Ac),b(s,sl,v),b(s,et,v),F(es,et,null),e(et,Nc),e(et,Lr),e(Lr,Sc),e(et,Oc),e(et,ts),e(ts,Dc),e(ts,xa),e(xa,Ic),e(ts,Wc),e(et,Xc),e(et,os),e(os,Hc),e(os,ns),e(ns,Qc),e(os,Uc),e(et,Bc),e(et,ss),e(ss,Rc),e(ss,Ea),e(Ea,Kc),e(ss,Vc),e(et,Yc),e(et,Je),F(as,Je,null),e(Je,Gc),e(Je,oo),e(oo,Jc),e(oo,Ca),e(Ca,Zc),e(oo,ep),e(oo,Pr),e(Pr,tp),e(oo,op),e(Je,np),F(Oo,Je,null),e(Je,sp),F(Do,Je,null),e(Je,ap),F(Io,Je,null),e(Je,rp),F(Wo,Je,null),e(Je,ip),F(Xo,Je,null),b(s,al,v),b(s,no,v),e(no,Ho),e(Ho,Ar),F(rs,Ar,null),e(no,lp),e(no,Nr),e(Nr,dp),b(s,rl,v),b(s,tt,v),F(is,tt,null),e(tt,cp),e(tt,Sr),e(Sr,pp),e(tt,hp),e(tt,ls),e(ls,up),e(ls,za),e(za,mp),e(ls,fp),e(tt,gp),e(tt,ds),e(ds,_p),e(ds,cs),e(cs,bp),e(ds,vp),e(tt,kp),e(tt,ps),e(ps,wp),e(ps,qa),e(qa,yp),e(ps,Tp),e(tt,Fp),e(tt,wt),F(hs,wt,null),e(wt,$p),e(wt,so),e(so,Mp),e(so,ja),e(ja,xp),e(so,Ep),e(so,Or),e(Or,Cp),e(so,zp),e(wt,qp),F(Qo,wt,null),e(wt,jp),F(Uo,wt,null),b(s,il,v),b(s,ao,v),e(ao,Bo),e(Bo,Dr),F(us,Dr,null),e(ao,Lp),e(ao,Ir),e(Ir,Pp),b(s,ll,v),b(s,ot,v),F(ms,ot,null),e(ot,Ap),e(ot,Wr),e(Wr,Np),e(ot,Sp),e(ot,fs),e(fs,Op),e(fs,La),e(La,Dp),e(fs,Ip),e(ot,Wp),e(ot,gs),e(gs,Xp),e(gs,_s),e(_s,Hp),e(gs,Qp),e(ot,Up),e(ot,bs),e(bs,Bp),e(bs,Pa),e(Pa,Rp),e(bs,Kp),e(ot,Vp),e(ot,mt),F(vs,mt,null),e(mt,Yp),e(mt,ro),e(ro,Gp),e(ro,Aa),e(Aa,Jp),e(ro,Zp),e(ro,Xr),e(Xr,eh),e(ro,th),e(mt,oh),F(Ro,mt,null),e(mt,nh),F(Ko,mt,null),e(mt,sh),F(Vo,mt,null),b(s,dl,v),b(s,io,v),e(io,Yo),e(Yo,Hr),F(ks,Hr,null),e(io,ah),e(io,Qr),e(Qr,rh),b(s,cl,v),b(s,nt,v),F(ws,nt,null),e(nt,ih),e(nt,lo),e(lo,lh),e(lo,Ur),e(Ur,dh),e(lo,ch),e(lo,Br),e(Br,ph),e(lo,hh),e(nt,uh),e(nt,ys),e(ys,mh),e(ys,Na),e(Na,fh),e(ys,gh),e(nt,_h),e(nt,Ts),e(Ts,bh),e(Ts,Fs),e(Fs,vh),e(Ts,kh),e(nt,wh),e(nt,$s),e($s,yh),e($s,Sa),e(Sa,Th),e($s,Fh),e(nt,$h),e(nt,ft),F(Ms,ft,null),e(ft,Mh),e(ft,co),e(co,xh),e(co,Oa),e(Oa,Eh),e(co,Ch),e(co,Rr),e(Rr,zh),e(co,qh),e(ft,jh),F(Go,ft,null),e(ft,Lh),F(Jo,ft,null),e(ft,Ph),F(Zo,ft,null),b(s,pl,v),b(s,po,v),e(po,en),e(en,Kr),F(xs,Kr,null),e(po,Ah),e(po,Vr),e(Vr,Nh),b(s,hl,v),b(s,st,v),F(Es,st,null),e(st,Sh),e(st,ho),e(ho,Oh),e(ho,Yr),e(Yr,Dh),e(ho,Ih),e(ho,Gr),e(Gr,Wh),e(ho,Xh),e(st,Hh),e(st,Cs),e(Cs,Qh),e(Cs,Da),e(Da,Uh),e(Cs,Bh),e(st,Rh),e(st,zs),e(zs,Kh),e(zs,qs),e(qs,Vh),e(zs,Yh),e(st,Gh),e(st,js),e(js,Jh),e(js,Ia),e(Ia,Zh),e(js,eu),e(st,tu),e(st,yt),F(Ls,yt,null),e(yt,ou),e(yt,uo),e(uo,nu),e(uo,Wa),e(Wa,su),e(uo,au),e(uo,Jr),e(Jr,ru),e(uo,iu),e(yt,lu),F(tn,yt,null),e(yt,du),F(on,yt,null),b(s,ul,v),b(s,mo,v),e(mo,nn),e(nn,Zr),F(Ps,Zr,null),e(mo,cu),e(mo,ei),e(ei,pu),b(s,ml,v),b(s,at,v),F(As,at,null),e(at,hu),e(at,ti),e(ti,uu),e(at,mu),e(at,Ns),e(Ns,fu),e(Ns,Xa),e(Xa,gu),e(Ns,_u),e(at,bu),e(at,Ss),e(Ss,vu),e(Ss,Os),e(Os,ku),e(Ss,wu),e(at,yu),F(sn,at,null),e(at,Tu),e(at,Tt),F(Ds,Tt,null),e(Tt,Fu),e(Tt,fo),e(fo,$u),e(fo,Ha),e(Ha,Mu),e(fo,xu),e(fo,oi),e(oi,Eu),e(fo,Cu),e(Tt,zu),F(an,Tt,null),e(Tt,qu),F(rn,Tt,null),b(s,fl,v),b(s,go,v),e(go,ln),e(ln,ni),F(Is,ni,null),e(go,ju),e(go,si),e(si,Lu),b(s,gl,v),b(s,rt,v),F(Ws,rt,null),e(rt,Pu),e(rt,ai),e(ai,Au),e(rt,Nu),e(rt,Xs),e(Xs,Su),e(Xs,Qa),e(Qa,Ou),e(Xs,Du),e(rt,Iu),e(rt,Hs),e(Hs,Wu),e(Hs,Qs),e(Qs,Xu),e(Hs,Hu),e(rt,Qu),F(dn,rt,null),e(rt,Uu),e(rt,Ft),F(Us,Ft,null),e(Ft,Bu),e(Ft,_o),e(_o,Ru),e(_o,Ua),e(Ua,Ku),e(_o,Vu),e(_o,ri),e(ri,Yu),e(_o,Gu),e(Ft,Ju),F(cn,Ft,null),e(Ft,Zu),F(pn,Ft,null),b(s,_l,v),b(s,bo,v),e(bo,hn),e(hn,ii),F(Bs,ii,null),e(bo,em),e(bo,li),e(li,tm),b(s,bl,v),b(s,it,v),F(Rs,it,null),e(it,om),e(it,di),e(di,nm),e(it,sm),e(it,Ks),e(Ks,am),e(Ks,Ba),e(Ba,rm),e(Ks,im),e(it,lm),e(it,Vs),e(Vs,dm),e(Vs,Ys),e(Ys,cm),e(Vs,pm),e(it,hm),F(un,it,null),e(it,um),e(it,gt),F(Gs,gt,null),e(gt,mm),e(gt,vo),e(vo,fm),e(vo,Ra),e(Ra,gm),e(vo,_m),e(vo,ci),e(ci,bm),e(vo,vm),e(gt,km),F(mn,gt,null),e(gt,wm),F(fn,gt,null),e(gt,ym),F(gn,gt,null),b(s,vl,v),b(s,ko,v),e(ko,_n),e(_n,pi),F(Js,pi,null),e(ko,Tm),e(ko,hi),e(hi,Fm),b(s,kl,v),b(s,lt,v),F(Zs,lt,null),e(lt,$m),e(lt,ui),e(ui,Mm),e(lt,xm),e(lt,ea),e(ea,Em),e(ea,Ka),e(Ka,Cm),e(ea,zm),e(lt,qm),e(lt,ta),e(ta,jm),e(ta,oa),e(oa,Lm),e(ta,Pm),e(lt,Am),F(bn,lt,null),e(lt,Nm),e(lt,$t),F(na,$t,null),e($t,Sm),e($t,wo),e(wo,Om),e(wo,Va),e(Va,Dm),e(wo,Im),e(wo,mi),e(mi,Wm),e(wo,Xm),e($t,Hm),F(vn,$t,null),e($t,Qm),F(kn,$t,null),b(s,wl,v),b(s,yo,v),e(yo,wn),e(wn,fi),F(sa,fi,null),e(yo,Um),e(yo,gi),e(gi,Bm),b(s,yl,v),b(s,dt,v),F(aa,dt,null),e(dt,Rm),e(dt,_i),e(_i,Km),e(dt,Vm),e(dt,ra),e(ra,Ym),e(ra,Ya),e(Ya,Gm),e(ra,Jm),e(dt,Zm),e(dt,ia),e(ia,ef),e(ia,la),e(la,tf),e(ia,of),e(dt,nf),F(yn,dt,null),e(dt,sf),e(dt,_t),F(da,_t,null),e(_t,af),e(_t,To),e(To,rf),e(To,Ga),e(Ga,lf),e(To,df),e(To,bi),e(bi,cf),e(To,pf),e(_t,hf),F(Tn,_t,null),e(_t,uf),F(Fn,_t,null),e(_t,mf),F($n,_t,null),b(s,Tl,v),b(s,Fo,v),e(Fo,Mn),e(Mn,vi),F(ca,vi,null),e(Fo,ff),e(Fo,ki),e(ki,gf),b(s,Fl,v),b(s,ct,v),F(pa,ct,null),e(ct,_f),e(ct,$o),e($o,bf),e($o,wi),e(wi,vf),e($o,kf),e($o,yi),e(yi,wf),e($o,yf),e(ct,Tf),e(ct,ha),e(ha,Ff),e(ha,Ja),e(Ja,$f),e(ha,Mf),e(ct,xf),e(ct,ua),e(ua,Ef),e(ua,ma),e(ma,Cf),e(ua,zf),e(ct,qf),F(xn,ct,null),e(ct,jf),e(ct,bt),F(fa,bt,null),e(bt,Lf),e(bt,Mo),e(Mo,Pf),e(Mo,Za),e(Za,Af),e(Mo,Nf),e(Mo,Ti),e(Ti,Sf),e(Mo,Of),e(bt,Df),F(En,bt,null),e(bt,If),F(Cn,bt,null),e(bt,Wf),F(zn,bt,null),$l=!0},p(s,[v]){const ga={};v&2&&(ga.$$scope={dirty:v,ctx:s}),qo.$set(ga);const Fi={};v&2&&(Fi.$$scope={dirty:v,ctx:s}),jo.$set(Fi);const $i={};v&2&&($i.$$scope={dirty:v,ctx:s}),Po.$set($i);const Mi={};v&2&&(Mi.$$scope={dirty:v,ctx:s}),Ao.$set(Mi);const _a={};v&2&&(_a.$$scope={dirty:v,ctx:s}),No.$set(_a);const xi={};v&2&&(xi.$$scope={dirty:v,ctx:s}),Oo.$set(xi);const Ei={};v&2&&(Ei.$$scope={dirty:v,ctx:s}),Do.$set(Ei);const Ci={};v&2&&(Ci.$$scope={dirty:v,ctx:s}),Io.$set(Ci);const ba={};v&2&&(ba.$$scope={dirty:v,ctx:s}),Wo.$set(ba);const zi={};v&2&&(zi.$$scope={dirty:v,ctx:s}),Xo.$set(zi);const qi={};v&2&&(qi.$$scope={dirty:v,ctx:s}),Qo.$set(qi);const ji={};v&2&&(ji.$$scope={dirty:v,ctx:s}),Uo.$set(ji);const Li={};v&2&&(Li.$$scope={dirty:v,ctx:s}),Ro.$set(Li);const xo={};v&2&&(xo.$$scope={dirty:v,ctx:s}),Ko.$set(xo);const Pi={};v&2&&(Pi.$$scope={dirty:v,ctx:s}),Vo.$set(Pi);const Ai={};v&2&&(Ai.$$scope={dirty:v,ctx:s}),Go.$set(Ai);const va={};v&2&&(va.$$scope={dirty:v,ctx:s}),Jo.$set(va);const Ni={};v&2&&(Ni.$$scope={dirty:v,ctx:s}),Zo.$set(Ni);const Si={};v&2&&(Si.$$scope={dirty:v,ctx:s}),tn.$set(Si);const Oi={};v&2&&(Oi.$$scope={dirty:v,ctx:s}),on.$set(Oi);const Eo={};v&2&&(Eo.$$scope={dirty:v,ctx:s}),sn.$set(Eo);const It={};v&2&&(It.$$scope={dirty:v,ctx:s}),an.$set(It);const Di={};v&2&&(Di.$$scope={dirty:v,ctx:s}),rn.$set(Di);const Ii={};v&2&&(Ii.$$scope={dirty:v,ctx:s}),dn.$set(Ii);const Wi={};v&2&&(Wi.$$scope={dirty:v,ctx:s}),cn.$set(Wi);const Co={};v&2&&(Co.$$scope={dirty:v,ctx:s}),pn.$set(Co);const Xi={};v&2&&(Xi.$$scope={dirty:v,ctx:s}),un.$set(Xi);const Hi={};v&2&&(Hi.$$scope={dirty:v,ctx:s}),mn.$set(Hi);const ka={};v&2&&(ka.$$scope={dirty:v,ctx:s}),fn.$set(ka);const Qi={};v&2&&(Qi.$$scope={dirty:v,ctx:s}),gn.$set(Qi);const Ui={};v&2&&(Ui.$$scope={dirty:v,ctx:s}),bn.$set(Ui);const Bi={};v&2&&(Bi.$$scope={dirty:v,ctx:s}),vn.$set(Bi);const Wt={};v&2&&(Wt.$$scope={dirty:v,ctx:s}),kn.$set(Wt);const Ri={};v&2&&(Ri.$$scope={dirty:v,ctx:s}),yn.$set(Ri);const Xt={};v&2&&(Xt.$$scope={dirty:v,ctx:s}),Tn.$set(Xt);const Ki={};v&2&&(Ki.$$scope={dirty:v,ctx:s}),Fn.$set(Ki);const Vi={};v&2&&(Vi.$$scope={dirty:v,ctx:s}),$n.$set(Vi);const Ht={};v&2&&(Ht.$$scope={dirty:v,ctx:s}),xn.$set(Ht);const Yi={};v&2&&(Yi.$$scope={dirty:v,ctx:s}),En.$set(Yi);const Gi={};v&2&&(Gi.$$scope={dirty:v,ctx:s}),Cn.$set(Gi);const Ji={};v&2&&(Ji.$$scope={dirty:v,ctx:s}),zn.$set(Ji)},i(s){$l||($(d.$$.fragment,s),$(w.$$.fragment,s),$(de.$$.fragment,s),$(ce.$$.fragment,s),$(Oe.$$.fragment,s),$(Sn.$$.fragment,s),$(In.$$.fragment,s),$(Wn.$$.fragment,s),$(Un.$$.fragment,s),$(qo.$$.fragment,s),$(jo.$$.fragment,s),$(Bn.$$.fragment,s),$(Rn.$$.fragment,s),$(Jn.$$.fragment,s),$(Po.$$.fragment,s),$(Ao.$$.fragment,s),$(No.$$.fragment,s),$(Zn.$$.fragment,s),$(es.$$.fragment,s),$(as.$$.fragment,s),$(Oo.$$.fragment,s),$(Do.$$.fragment,s),$(Io.$$.fragment,s),$(Wo.$$.fragment,s),$(Xo.$$.fragment,s),$(rs.$$.fragment,s),$(is.$$.fragment,s),$(hs.$$.fragment,s),$(Qo.$$.fragment,s),$(Uo.$$.fragment,s),$(us.$$.fragment,s),$(ms.$$.fragment,s),$(vs.$$.fragment,s),$(Ro.$$.fragment,s),$(Ko.$$.fragment,s),$(Vo.$$.fragment,s),$(ks.$$.fragment,s),$(ws.$$.fragment,s),$(Ms.$$.fragment,s),$(Go.$$.fragment,s),$(Jo.$$.fragment,s),$(Zo.$$.fragment,s),$(xs.$$.fragment,s),$(Es.$$.fragment,s),$(Ls.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(Ps.$$.fragment,s),$(As.$$.fragment,s),$(sn.$$.fragment,s),$(Ds.$$.fragment,s),$(an.$$.fragment,s),$(rn.$$.fragment,s),$(Is.$$.fragment,s),$(Ws.$$.fragment,s),$(dn.$$.fragment,s),$(Us.$$.fragment,s),$(cn.$$.fragment,s),$(pn.$$.fragment,s),$(Bs.$$.fragment,s),$(Rs.$$.fragment,s),$(un.$$.fragment,s),$(Gs.$$.fragment,s),$(mn.$$.fragment,s),$(fn.$$.fragment,s),$(gn.$$.fragment,s),$(Js.$$.fragment,s),$(Zs.$$.fragment,s),$(bn.$$.fragment,s),$(na.$$.fragment,s),$(vn.$$.fragment,s),$(kn.$$.fragment,s),$(sa.$$.fragment,s),$(aa.$$.fragment,s),$(yn.$$.fragment,s),$(da.$$.fragment,s),$(Tn.$$.fragment,s),$(Fn.$$.fragment,s),$($n.$$.fragment,s),$(ca.$$.fragment,s),$(pa.$$.fragment,s),$(xn.$$.fragment,s),$(fa.$$.fragment,s),$(En.$$.fragment,s),$(Cn.$$.fragment,s),$(zn.$$.fragment,s),$l=!0)},o(s){M(d.$$.fragment,s),M(w.$$.fragment,s),M(de.$$.fragment,s),M(ce.$$.fragment,s),M(Oe.$$.fragment,s),M(Sn.$$.fragment,s),M(In.$$.fragment,s),M(Wn.$$.fragment,s),M(Un.$$.fragment,s),M(qo.$$.fragment,s),M(jo.$$.fragment,s),M(Bn.$$.fragment,s),M(Rn.$$.fragment,s),M(Jn.$$.fragment,s),M(Po.$$.fragment,s),M(Ao.$$.fragment,s),M(No.$$.fragment,s),M(Zn.$$.fragment,s),M(es.$$.fragment,s),M(as.$$.fragment,s),M(Oo.$$.fragment,s),M(Do.$$.fragment,s),M(Io.$$.fragment,s),M(Wo.$$.fragment,s),M(Xo.$$.fragment,s),M(rs.$$.fragment,s),M(is.$$.fragment,s),M(hs.$$.fragment,s),M(Qo.$$.fragment,s),M(Uo.$$.fragment,s),M(us.$$.fragment,s),M(ms.$$.fragment,s),M(vs.$$.fragment,s),M(Ro.$$.fragment,s),M(Ko.$$.fragment,s),M(Vo.$$.fragment,s),M(ks.$$.fragment,s),M(ws.$$.fragment,s),M(Ms.$$.fragment,s),M(Go.$$.fragment,s),M(Jo.$$.fragment,s),M(Zo.$$.fragment,s),M(xs.$$.fragment,s),M(Es.$$.fragment,s),M(Ls.$$.fragment,s),M(tn.$$.fragment,s),M(on.$$.fragment,s),M(Ps.$$.fragment,s),M(As.$$.fragment,s),M(sn.$$.fragment,s),M(Ds.$$.fragment,s),M(an.$$.fragment,s),M(rn.$$.fragment,s),M(Is.$$.fragment,s),M(Ws.$$.fragment,s),M(dn.$$.fragment,s),M(Us.$$.fragment,s),M(cn.$$.fragment,s),M(pn.$$.fragment,s),M(Bs.$$.fragment,s),M(Rs.$$.fragment,s),M(un.$$.fragment,s),M(Gs.$$.fragment,s),M(mn.$$.fragment,s),M(fn.$$.fragment,s),M(gn.$$.fragment,s),M(Js.$$.fragment,s),M(Zs.$$.fragment,s),M(bn.$$.fragment,s),M(na.$$.fragment,s),M(vn.$$.fragment,s),M(kn.$$.fragment,s),M(sa.$$.fragment,s),M(aa.$$.fragment,s),M(yn.$$.fragment,s),M(da.$$.fragment,s),M(Tn.$$.fragment,s),M(Fn.$$.fragment,s),M($n.$$.fragment,s),M(ca.$$.fragment,s),M(pa.$$.fragment,s),M(xn.$$.fragment,s),M(fa.$$.fragment,s),M(En.$$.fragment,s),M(Cn.$$.fragment,s),M(zn.$$.fragment,s),$l=!1},d(s){t(l),s&&t(_),s&&t(c),x(d),s&&t(fe),s&&t(O),x(w),s&&t(ge),s&&t(I),s&&t(_e),s&&t(W),s&&t(be),s&&t(X),s&&t(ee),s&&t(j),s&&t(ve),s&&t(L),x(de),s&&t(ke),s&&t(N),x(ce),s&&t(R),s&&t(Ne),x(Oe),s&&t(te),s&&t(pe),x(Sn),s&&t(Zi),s&&t(Gt),x(In),s&&t(el),s&&t(ht),x(Wn),x(Un),x(qo),x(jo),s&&t(tl),s&&t(Zt),x(Bn),s&&t(ol),s&&t(Ze),x(Rn),x(Jn),x(Po),x(Ao),x(No),s&&t(nl),s&&t(to),x(Zn),s&&t(sl),s&&t(et),x(es),x(as),x(Oo),x(Do),x(Io),x(Wo),x(Xo),s&&t(al),s&&t(no),x(rs),s&&t(rl),s&&t(tt),x(is),x(hs),x(Qo),x(Uo),s&&t(il),s&&t(ao),x(us),s&&t(ll),s&&t(ot),x(ms),x(vs),x(Ro),x(Ko),x(Vo),s&&t(dl),s&&t(io),x(ks),s&&t(cl),s&&t(nt),x(ws),x(Ms),x(Go),x(Jo),x(Zo),s&&t(pl),s&&t(po),x(xs),s&&t(hl),s&&t(st),x(Es),x(Ls),x(tn),x(on),s&&t(ul),s&&t(mo),x(Ps),s&&t(ml),s&&t(at),x(As),x(sn),x(Ds),x(an),x(rn),s&&t(fl),s&&t(go),x(Is),s&&t(gl),s&&t(rt),x(Ws),x(dn),x(Us),x(cn),x(pn),s&&t(_l),s&&t(bo),x(Bs),s&&t(bl),s&&t(it),x(Rs),x(un),x(Gs),x(mn),x(fn),x(gn),s&&t(vl),s&&t(ko),x(Js),s&&t(kl),s&&t(lt),x(Zs),x(bn),x(na),x(vn),x(kn),s&&t(wl),s&&t(yo),x(sa),s&&t(yl),s&&t(dt),x(aa),x(yn),x(da),x(Tn),x(Fn),x($n),s&&t(Tl),s&&t(Fo),x(ca),s&&t(Fl),s&&t(ct),x(pa),x(xn),x(fa),x(En),x(Cn),x(zn)}}}const Xb={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Hb(C){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yb extends V_{constructor(l){super();Y_(this,l,Hb,Wb,G_,{})}}export{Yb as default,Xb as metadata};
