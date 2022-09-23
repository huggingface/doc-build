import{S as V_,i as Y_,s as G_,e as a,k as h,w as T,t as o,M as J_,c as r,d as t,m as u,a as i,x as v,h as n,b as g,G as e,g as b,y as F,q as $,o as M,B as x,v as Z_,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as ye}from"../../chunks/Docstring-hf-doc-builder.js";import{C as He}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as We}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function eb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function tb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function ob(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function nb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function sb(z){let l,_;return l=new He({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ab(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function rb(z){let l,_,c,m,w;return m=new He({props:{code:`import torch
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
`}}),{c(){l=a("p"),_=o("Example of single-label classification:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example of single-label classification:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function ib(z){let l,_;return l=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function lb(z){let l,_,c,m,w;return m=new He({props:{code:`import torch
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
`}}),{c(){l=a("p"),_=o("Example of multi-label classification:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example of multi-label classification:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function db(z){let l,_;return l=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function cb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function pb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function hb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function ub(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function mb(z){let l,_;return l=new He({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function fb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function gb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function _b(z){let l,_;return l=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function bb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function kb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function wb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),w=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),y=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),ze=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),Ce=o("model(input_ids)"),ke=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),w=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Be=i(q);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),y=r(f,"P",{});var C=i(y);ve=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(C,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(C,"CODE",{});var Ue=i(I);$e=n(Ue,"model.fit()"),Ue.forEach(t),re=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(C," and "),W=r(C,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),X=r(C,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);ze=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);Ce=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ke=u(D),L=r(D,"LI",{});var U=i(L);ae=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(U,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(U," or "),B=r(U,"CODE",{});var Ve=i(B);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),we=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,w),b(f,d,E),b(f,p,E),e(p,q),e(q,Te),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,y,E),e(y,ve),e(y,H),e(H,Fe),e(y,ge),e(y,I),e(I,$e),e(y,re),e(y,K),e(K,Me),e(y,_e),e(y,W),e(W,xe),e(y,be),e(y,X),e(X,ue),e(y,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,ze),e(A,le),e(A,Y),e(Y,Ce),e(j,ke),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,B),e(B,je),e(j,we),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(y),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function yb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function Tb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function vb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),w=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),y=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),ze=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),Ce=o("model(input_ids)"),ke=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),w=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Be=i(q);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),y=r(f,"P",{});var C=i(y);ve=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(C,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(C,"CODE",{});var Ue=i(I);$e=n(Ue,"model.fit()"),Ue.forEach(t),re=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(C," and "),W=r(C,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),X=r(C,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);ze=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);Ce=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ke=u(D),L=r(D,"LI",{});var U=i(L);ae=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(U,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(U," or "),B=r(U,"CODE",{});var Ve=i(B);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),we=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,w),b(f,d,E),b(f,p,E),e(p,q),e(q,Te),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,y,E),e(y,ve),e(y,H),e(H,Fe),e(y,ge),e(y,I),e(I,$e),e(y,re),e(y,K),e(K,Me),e(y,_e),e(y,W),e(W,xe),e(y,be),e(y,X),e(X,ue),e(y,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,ze),e(A,le),e(A,Y),e(Y,Ce),e(j,ke),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,B),e(B,je),e(j,we),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(y),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function Fb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function $b(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Mb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),w=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),y=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),ze=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),Ce=o("model(input_ids)"),ke=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),w=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Be=i(q);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),y=r(f,"P",{});var C=i(y);ve=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(C,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(C,"CODE",{});var Ue=i(I);$e=n(Ue,"model.fit()"),Ue.forEach(t),re=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(C," and "),W=r(C,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),X=r(C,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);ze=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);Ce=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ke=u(D),L=r(D,"LI",{});var U=i(L);ae=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(U,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(U," or "),B=r(U,"CODE",{});var Ve=i(B);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),we=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,w),b(f,d,E),b(f,p,E),e(p,q),e(q,Te),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,y,E),e(y,ve),e(y,H),e(H,Fe),e(y,ge),e(y,I),e(I,$e),e(y,re),e(y,K),e(K,Me),e(y,_e),e(y,W),e(W,xe),e(y,be),e(y,X),e(X,ue),e(y,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,ze),e(A,le),e(A,Y),e(Y,Ce),e(j,ke),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,B),e(B,je),e(j,we),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(y),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function xb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function Eb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function zb(z){let l,_;return l=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Cb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),w=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),y=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),ze=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),Ce=o("model(input_ids)"),ke=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),w=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Be=i(q);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),y=r(f,"P",{});var C=i(y);ve=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(C,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(C,"CODE",{});var Ue=i(I);$e=n(Ue,"model.fit()"),Ue.forEach(t),re=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(C," and "),W=r(C,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),X=r(C,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);ze=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);Ce=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ke=u(D),L=r(D,"LI",{});var U=i(L);ae=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(U,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(U," or "),B=r(U,"CODE",{});var Ve=i(B);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),we=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,w),b(f,d,E),b(f,p,E),e(p,q),e(q,Te),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,y,E),e(y,ve),e(y,H),e(H,Fe),e(y,ge),e(y,I),e(I,$e),e(y,re),e(y,K),e(K,Me),e(y,_e),e(y,W),e(W,xe),e(y,be),e(y,X),e(X,ue),e(y,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,ze),e(A,le),e(A,Y),e(Y,Ce),e(j,ke),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,B),e(B,je),e(j,we),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(y),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function qb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function jb(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Lb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),w=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),y=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),ze=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),Ce=o("model(input_ids)"),ke=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),w=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Be=i(q);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),y=r(f,"P",{});var C=i(y);ve=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(C,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(C,"CODE",{});var Ue=i(I);$e=n(Ue,"model.fit()"),Ue.forEach(t),re=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(C," and "),W=r(C,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),X=r(C,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);ze=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);Ce=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ke=u(D),L=r(D,"LI",{});var U=i(L);ae=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(U,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(U," or "),B=r(U,"CODE",{});var Ve=i(B);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),we=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,w),b(f,d,E),b(f,p,E),e(p,q),e(q,Te),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,y,E),e(y,ve),e(y,H),e(H,Fe),e(y,ge),e(y,I),e(I,$e),e(y,re),e(y,K),e(K,Me),e(y,_e),e(y,W),e(W,xe),e(y,be),e(y,X),e(X,ue),e(y,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,ze),e(A,le),e(A,Y),e(Y,Ce),e(j,ke),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,B),e(B,je),e(j,we),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(y),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function Pb(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function Ab(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Nb(z){let l,_;return l=new He({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Sb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),w=o(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),O=a("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),J=h(),y=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),re=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),_e=o(" and "),W=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),A=a("li"),ie=o("a single Tensor with "),V=a("code"),ze=o("input_ids"),le=o(" only and nothing else: "),Y=a("code"),Ce=o("model(input_ids)"),ke=h(),L=a("li"),ae=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),de=o("model([input_ids, attention_mask])"),qe=o(" or "),B=a("code"),je=o("model([input_ids, attention_mask, token_type_ids])"),we=h(),N=a("li"),ce=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=h(),P=a("p"),Le=o(`Note that when creating models and layers with
`),S=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var E=i(l);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),w=n(E," accept two formats as input:"),E.forEach(t),d=u(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Be=i(q);Te=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),fe=u(ne),O=r(ne,"LI",{});var Ae=i(O);se=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),ne.forEach(t),J=u(f),y=r(f,"P",{});var C=i(y);ve=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(C,"CODE",{});var De=i(H);Fe=n(De,"model.fit()"),De.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(C,"CODE",{});var Ue=i(I);$e=n(Ue,"model.fit()"),Ue.forEach(t),re=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),_e=n(C," and "),W=r(C,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),X=r(C,"CODE",{});var Ke=i(X);ue=n(Ke,"Functional"),Ke.forEach(t),Ee=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=u(f),j=r(f,"UL",{});var D=i(j);A=r(D,"LI",{});var R=i(A);ie=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ne=i(V);ze=n(Ne,"input_ids"),Ne.forEach(t),le=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Se=i(Y);Ce=n(Se,"model(input_ids)"),Se.forEach(t),R.forEach(t),ke=u(D),L=r(D,"LI",{});var U=i(L);ae=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(U,"CODE",{});var Oe=i(Q);de=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),qe=n(U," or "),B=r(U,"CODE",{});var Ve=i(B);je=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),U.forEach(t),we=u(D),N=r(D,"LI",{});var me=i(N);ce=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(me,"CODE",{});var Ye=i(G);Z=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),D.forEach(t),oe=u(f),P=r(f,"P",{});var te=i(P);Le=n(te,`Note that when creating models and layers with
`),S=r(te,"A",{href:!0,rel:!0});var pe=i(S);he=n(pe,"subclassing"),pe.forEach(t),Pe=n(te,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),te.forEach(t),this.h()},h(){g(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(S,"rel","nofollow")},m(f,E){b(f,l,E),e(l,_),e(l,c),e(c,m),e(l,w),b(f,d,E),b(f,p,E),e(p,q),e(q,Te),e(p,fe),e(p,O),e(O,se),b(f,J,E),b(f,y,E),e(y,ve),e(y,H),e(H,Fe),e(y,ge),e(y,I),e(I,$e),e(y,re),e(y,K),e(K,Me),e(y,_e),e(y,W),e(W,xe),e(y,be),e(y,X),e(X,ue),e(y,Ee),b(f,ee,E),b(f,j,E),e(j,A),e(A,ie),e(A,V),e(V,ze),e(A,le),e(A,Y),e(Y,Ce),e(j,ke),e(j,L),e(L,ae),e(L,Q),e(Q,de),e(L,qe),e(L,B),e(B,je),e(j,we),e(j,N),e(N,ce),e(N,G),e(G,Z),b(f,oe,E),b(f,P,E),e(P,Le),e(P,S),e(S,he),e(P,Pe)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(J),f&&t(y),f&&t(ee),f&&t(j),f&&t(oe),f&&t(P)}}}function Ob(z){let l,_,c,m,w;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),w=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);m=n(q,"Module"),q.forEach(t),w=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){b(d,l,p),e(l,_),e(l,c),e(c,m),e(l,w)},d(d){d&&t(l)}}}function Db(z){let l,_,c,m,w;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){l=a("p"),_=o("Example:"),c=h(),T(m.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);_=n(p,"Example:"),p.forEach(t),c=u(d),v(m.$$.fragment,d)},m(d,p){b(d,l,p),e(l,_),b(d,c,p),F(m,d,p),w=!0},p:Xe,i(d){w||($(m.$$.fragment,d),w=!0)},o(d){M(m.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),x(m,d)}}}function Ib(z){let l,_;return l=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,m){F(l,c,m),_=!0},p:Xe,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){M(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Wb(z){let l,_,c,m,w,d,p,q,Te,fe,O,se,J,y,ve,H,Fe,ge,I,$e,re,K,Me,_e,W,xe,be,X,ue,Ee,ee,j,A,ie,V,ze,le,Y,Ce,ke,L,ae,Q,de,qe,B,je,we,N,ce,G,Z,oe,P,Le,S,he,Pe,f,E,Qe,ne,Be,Ae,C,De,Ue,Re,Ie,Ke,D,R,Ne,Se,U,Oe,Ve,me,Ye,te,pe,Sn,kd,gr,wd,yd,Ot,_r,Td,vd,br,Fd,$d,Dt,Md,kr,xd,Ed,wr,zd,Cd,yr,qd,jd,Ld,On,Pd,Tr,Ad,Nd,Sd,Dn,Od,ya,Dd,Id,Zi,Gt,Co,vr,In,Wd,Fr,Xd,el,ht,Wn,Hd,$r,Qd,Bd,Xn,Ud,Ta,Rd,Kd,Vd,Hn,Yd,Qn,Gd,Jd,Zd,wt,Bn,ec,Jt,tc,va,oc,nc,Mr,sc,ac,rc,qo,ic,jo,tl,Zt,Lo,xr,Un,lc,Er,dc,ol,Ze,Rn,cc,zr,pc,hc,Kn,uc,Fa,mc,fc,gc,Vn,_c,Yn,bc,kc,wc,Gn,yc,$a,Tc,vc,Fc,ut,Jn,$c,eo,Mc,Ma,xc,Ec,Cr,zc,Cc,qc,Po,jc,Ao,Lc,No,nl,to,So,qr,Zn,Pc,jr,Ac,sl,et,es,Nc,Lr,Sc,Oc,ts,Dc,xa,Ic,Wc,Xc,os,Hc,ns,Qc,Bc,Uc,ss,Rc,Ea,Kc,Vc,Yc,Je,as,Gc,oo,Jc,za,Zc,ep,Pr,tp,op,np,Oo,sp,Do,ap,Io,rp,Wo,ip,Xo,al,no,Ho,Ar,rs,lp,Nr,dp,rl,tt,is,cp,Sr,pp,hp,ls,up,Ca,mp,fp,gp,ds,_p,cs,bp,kp,wp,ps,yp,qa,Tp,vp,Fp,yt,hs,$p,so,Mp,ja,xp,Ep,Or,zp,Cp,qp,Qo,jp,Bo,il,ao,Uo,Dr,us,Lp,Ir,Pp,ll,ot,ms,Ap,Wr,Np,Sp,fs,Op,La,Dp,Ip,Wp,gs,Xp,_s,Hp,Qp,Bp,bs,Up,Pa,Rp,Kp,Vp,mt,ks,Yp,ro,Gp,Aa,Jp,Zp,Xr,eh,th,oh,Ro,nh,Ko,sh,Vo,dl,io,Yo,Hr,ws,ah,Qr,rh,cl,nt,ys,ih,lo,lh,Br,dh,ch,Ur,ph,hh,uh,Ts,mh,Na,fh,gh,_h,vs,bh,Fs,kh,wh,yh,$s,Th,Sa,vh,Fh,$h,ft,Ms,Mh,co,xh,Oa,Eh,zh,Rr,Ch,qh,jh,Go,Lh,Jo,Ph,Zo,pl,po,en,Kr,xs,Ah,Vr,Nh,hl,st,Es,Sh,ho,Oh,Yr,Dh,Ih,Gr,Wh,Xh,Hh,zs,Qh,Da,Bh,Uh,Rh,Cs,Kh,qs,Vh,Yh,Gh,js,Jh,Ia,Zh,eu,tu,Tt,Ls,ou,uo,nu,Wa,su,au,Jr,ru,iu,lu,tn,du,on,ul,mo,nn,Zr,Ps,cu,ei,pu,ml,at,As,hu,ti,uu,mu,Ns,fu,Xa,gu,_u,bu,Ss,ku,Os,wu,yu,Tu,sn,vu,vt,Ds,Fu,fo,$u,Ha,Mu,xu,oi,Eu,zu,Cu,an,qu,rn,fl,go,ln,ni,Is,ju,si,Lu,gl,rt,Ws,Pu,ai,Au,Nu,Xs,Su,Qa,Ou,Du,Iu,Hs,Wu,Qs,Xu,Hu,Qu,dn,Bu,Ft,Bs,Uu,_o,Ru,Ba,Ku,Vu,ri,Yu,Gu,Ju,cn,Zu,pn,_l,bo,hn,ii,Us,em,li,tm,bl,it,Rs,om,di,nm,sm,Ks,am,Ua,rm,im,lm,Vs,dm,Ys,cm,pm,hm,un,um,gt,Gs,mm,ko,fm,Ra,gm,_m,ci,bm,km,wm,mn,ym,fn,Tm,gn,kl,wo,_n,pi,Js,vm,hi,Fm,wl,lt,Zs,$m,ui,Mm,xm,ea,Em,Ka,zm,Cm,qm,ta,jm,oa,Lm,Pm,Am,bn,Nm,$t,na,Sm,yo,Om,Va,Dm,Im,mi,Wm,Xm,Hm,kn,Qm,wn,yl,To,yn,fi,sa,Bm,gi,Um,Tl,dt,aa,Rm,_i,Km,Vm,ra,Ym,Ya,Gm,Jm,Zm,ia,ef,la,tf,of,nf,Tn,sf,_t,da,af,vo,rf,Ga,lf,df,bi,cf,pf,hf,vn,uf,Fn,mf,$n,vl,Fo,Mn,ki,ca,ff,wi,gf,Fl,ct,pa,_f,$o,bf,yi,kf,wf,Ti,yf,Tf,vf,ha,Ff,Ja,$f,Mf,xf,ua,Ef,ma,zf,Cf,qf,xn,jf,bt,fa,Lf,Mo,Pf,Za,Af,Nf,vi,Sf,Of,Df,En,If,zn,Wf,Cn,$l;return d=new pt({}),y=new pt({}),de=new pt({}),ce=new ye({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"layerdrop",val:" = 0.0"},{name:"pre_norm",val:" = False"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/configuration_flaubert.py#L35"}}),Oe=new pt({}),Sn=new ye({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"do_lowercase",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L89"}}),In=new pt({}),Wn=new ye({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L133"}}),Bn=new ye({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L145",returnDescription:`
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
`}}),qo=new Ge({props:{$$slots:{default:[eb]},$$scope:{ctx:z}}}),jo=new We({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[tb]},$$scope:{ctx:z}}}),Un=new pt({}),Rn=new ye({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L324"}}),Jn=new ye({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Po=new Ge({props:{$$slots:{default:[ob]},$$scope:{ctx:z}}}),Ao=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[nb]},$$scope:{ctx:z}}}),No=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[sb]},$$scope:{ctx:z}}}),Zn=new pt({}),es=new ye({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L346"}}),as=new ye({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Oo=new Ge({props:{$$slots:{default:[ab]},$$scope:{ctx:z}}}),Do=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:z}}}),Io=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:z}}}),Wo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[lb]},$$scope:{ctx:z}}}),Xo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[db]},$$scope:{ctx:z}}}),rs=new pt({}),is=new ye({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L434"}}),hs=new ye({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qo=new Ge({props:{$$slots:{default:[cb]},$$scope:{ctx:z}}}),Bo=new We({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[pb]},$$scope:{ctx:z}}}),us=new pt({}),ms=new ye({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L368"}}),ks=new ye({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ro=new Ge({props:{$$slots:{default:[hb]},$$scope:{ctx:z}}}),Ko=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[ub]},$$scope:{ctx:z}}}),Vo=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[mb]},$$scope:{ctx:z}}}),ws=new pt({}),ys=new ye({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L390"}}),Ms=new ye({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Go=new Ge({props:{$$slots:{default:[fb]},$$scope:{ctx:z}}}),Jo=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[gb]},$$scope:{ctx:z}}}),Zo=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[_b]},$$scope:{ctx:z}}}),xs=new pt({}),Es=new ye({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L412"}}),Ls=new ye({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),tn=new Ge({props:{$$slots:{default:[bb]},$$scope:{ctx:z}}}),on=new We({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[kb]},$$scope:{ctx:z}}}),Ps=new pt({}),As=new ye({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238"}}),sn=new Ge({props:{$$slots:{default:[wb]},$$scope:{ctx:z}}}),Ds=new ye({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L243",returnDescription:`
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
`}}),an=new Ge({props:{$$slots:{default:[yb]},$$scope:{ctx:z}}}),rn=new We({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[Tb]},$$scope:{ctx:z}}}),Is=new pt({}),Ws=new ye({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L772"}}),dn=new Ge({props:{$$slots:{default:[vb]},$$scope:{ctx:z}}}),Bs=new ye({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L801",returnDescription:`
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
`}}),cn=new Ge({props:{$$slots:{default:[Fb]},$$scope:{ctx:z}}}),pn=new We({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[$b]},$$scope:{ctx:z}}}),Us=new pt({}),Rs=new ye({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L865"}}),un=new Ge({props:{$$slots:{default:[Mb]},$$scope:{ctx:z}}}),Gs=new ye({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L909",returnDescription:`
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
`}}),mn=new Ge({props:{$$slots:{default:[xb]},$$scope:{ctx:z}}}),fn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Eb]},$$scope:{ctx:z}}}),gn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[zb]},$$scope:{ctx:z}}}),Js=new pt({}),Zs=new ye({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L910"}}),bn=new Ge({props:{$$slots:{default:[Cb]},$$scope:{ctx:z}}}),na=new ye({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1016",returnDescription:`
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
`}}),kn=new Ge({props:{$$slots:{default:[qb]},$$scope:{ctx:z}}}),wn=new We({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[jb]},$$scope:{ctx:z}}}),sa=new pt({}),aa=new ye({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L895"}}),Tn=new Ge({props:{$$slots:{default:[Lb]},$$scope:{ctx:z}}}),da=new ye({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1140",returnDescription:`
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
`}}),vn=new Ge({props:{$$slots:{default:[Pb]},$$scope:{ctx:z}}}),Fn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Ab]},$$scope:{ctx:z}}}),$n=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Nb]},$$scope:{ctx:z}}}),ca=new pt({}),pa=new ye({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L880"}}),xn=new Ge({props:{$$slots:{default:[Sb]},$$scope:{ctx:z}}}),fa=new ye({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1225",returnDescription:`
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
`}}),En=new Ge({props:{$$slots:{default:[Ob]},$$scope:{ctx:z}}}),zn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Db]},$$scope:{ctx:z}}}),Cn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Ib]},$$scope:{ctx:z}}}),{c(){l=a("meta"),_=h(),c=a("h1"),m=a("a"),w=a("span"),T(d.$$.fragment),p=h(),q=a("span"),Te=o("FlauBERT"),fe=h(),O=a("h2"),se=a("a"),J=a("span"),T(y.$$.fragment),ve=h(),H=a("span"),Fe=o("Overview"),ge=h(),I=a("p"),$e=o("The FlauBERT model was proposed in the paper "),re=a("a"),K=o("FlauBERT: Unsupervised Language Model Pre-training for French"),Me=o(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
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
community for further reproducible experiments in French NLP.`),ee=h(),j=a("p"),A=o("This model was contributed by "),ie=a("a"),V=o("formiel"),ze=o(". The original code can be found "),le=a("a"),Y=o("here"),Ce=o("."),ke=h(),L=a("h2"),ae=a("a"),Q=a("span"),T(de.$$.fragment),qe=h(),B=a("span"),je=o("FlaubertConfig"),we=h(),N=a("div"),T(ce.$$.fragment),G=h(),Z=a("p"),oe=o("This is the configuration class to store the configuration of a "),P=a("a"),Le=o("FlaubertModel"),S=o(" or a "),he=a("a"),Pe=o("TFFlaubertModel"),f=o(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=a("a"),Qe=o("flaubert/flaubert_base_uncased"),ne=o(" architecture."),Be=h(),Ae=a("p"),C=o("Configuration objects inherit from "),De=a("a"),Ue=o("PretrainedConfig"),Re=o(` and can be used to control the model outputs. Read the
documentation from `),Ie=a("a"),Ke=o("PretrainedConfig"),D=o(" for more information."),R=h(),Ne=a("h2"),Se=a("a"),U=a("span"),T(Oe.$$.fragment),Ve=h(),me=a("span"),Ye=o("FlaubertTokenizer"),te=h(),pe=a("div"),T(Sn.$$.fragment),kd=h(),gr=a("p"),wd=o("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),yd=h(),Ot=a("ul"),_r=a("li"),Td=o("Moses preprocessing and tokenization."),vd=h(),br=a("li"),Fd=o("Normalizing all inputs text."),$d=h(),Dt=a("li"),Md=o("The arguments "),kr=a("code"),xd=o("special_tokens"),Ed=o(" and the function "),wr=a("code"),zd=o("set_special_tokens"),Cd=o(`, can be used to add additional symbols (like
\u201D`),yr=a("strong"),qd=o("classify"),jd=o("\u201D) to a vocabulary."),Ld=h(),On=a("li"),Pd=o("The argument "),Tr=a("code"),Ad=o("do_lowercase"),Nd=o(" controls lower casing (automatically set for pretrained vocabularies)."),Sd=h(),Dn=a("p"),Od=o("This tokenizer inherits from "),ya=a("a"),Dd=o("XLMTokenizer"),Id=o(`. Please check the superclass for usage examples and documentation
regarding arguments.`),Zi=h(),Gt=a("h2"),Co=a("a"),vr=a("span"),T(In.$$.fragment),Wd=h(),Fr=a("span"),Xd=o("FlaubertModel"),el=h(),ht=a("div"),T(Wn.$$.fragment),Hd=h(),$r=a("p"),Qd=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Bd=h(),Xn=a("p"),Ud=o("This model inherits from "),Ta=a("a"),Rd=o("PreTrainedModel"),Kd=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd=h(),Hn=a("p"),Yd=o("This model is also a PyTorch "),Qn=a("a"),Gd=o("torch.nn.Module"),Jd=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=h(),wt=a("div"),T(Bn.$$.fragment),ec=h(),Jt=a("p"),tc=o("The "),va=a("a"),oc=o("FlaubertModel"),nc=o(" forward method, overrides the "),Mr=a("code"),sc=o("__call__"),ac=o(" special method."),rc=h(),T(qo.$$.fragment),ic=h(),T(jo.$$.fragment),tl=h(),Zt=a("h2"),Lo=a("a"),xr=a("span"),T(Un.$$.fragment),lc=h(),Er=a("span"),dc=o("FlaubertWithLMHeadModel"),ol=h(),Ze=a("div"),T(Rn.$$.fragment),cc=h(),zr=a("p"),pc=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),hc=h(),Kn=a("p"),uc=o("This model inherits from "),Fa=a("a"),mc=o("PreTrainedModel"),fc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=h(),Vn=a("p"),_c=o("This model is also a PyTorch "),Yn=a("a"),bc=o("torch.nn.Module"),kc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wc=h(),Gn=a("p"),yc=o("This class overrides "),$a=a("a"),Tc=o("XLMWithLMHeadModel"),vc=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fc=h(),ut=a("div"),T(Jn.$$.fragment),$c=h(),eo=a("p"),Mc=o("The "),Ma=a("a"),xc=o("XLMWithLMHeadModel"),Ec=o(" forward method, overrides the "),Cr=a("code"),zc=o("__call__"),Cc=o(" special method."),qc=h(),T(Po.$$.fragment),jc=h(),T(Ao.$$.fragment),Lc=h(),T(No.$$.fragment),nl=h(),to=a("h2"),So=a("a"),qr=a("span"),T(Zn.$$.fragment),Pc=h(),jr=a("span"),Ac=o("FlaubertForSequenceClassification"),sl=h(),et=a("div"),T(es.$$.fragment),Nc=h(),Lr=a("p"),Sc=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Oc=h(),ts=a("p"),Dc=o("This model inherits from "),xa=a("a"),Ic=o("PreTrainedModel"),Wc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc=h(),os=a("p"),Hc=o("This model is also a PyTorch "),ns=a("a"),Qc=o("torch.nn.Module"),Bc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=h(),ss=a("p"),Rc=o("This class overrides "),Ea=a("a"),Kc=o("XLMForSequenceClassification"),Vc=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Yc=h(),Je=a("div"),T(as.$$.fragment),Gc=h(),oo=a("p"),Jc=o("The "),za=a("a"),Zc=o("XLMForSequenceClassification"),ep=o(" forward method, overrides the "),Pr=a("code"),tp=o("__call__"),op=o(" special method."),np=h(),T(Oo.$$.fragment),sp=h(),T(Do.$$.fragment),ap=h(),T(Io.$$.fragment),rp=h(),T(Wo.$$.fragment),ip=h(),T(Xo.$$.fragment),al=h(),no=a("h2"),Ho=a("a"),Ar=a("span"),T(rs.$$.fragment),lp=h(),Nr=a("span"),dp=o("FlaubertForMultipleChoice"),rl=h(),tt=a("div"),T(is.$$.fragment),cp=h(),Sr=a("p"),pp=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),hp=h(),ls=a("p"),up=o("This model inherits from "),Ca=a("a"),mp=o("PreTrainedModel"),fp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=h(),ds=a("p"),_p=o("This model is also a PyTorch "),cs=a("a"),bp=o("torch.nn.Module"),kp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp=h(),ps=a("p"),yp=o("This class overrides "),qa=a("a"),Tp=o("XLMForMultipleChoice"),vp=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Fp=h(),yt=a("div"),T(hs.$$.fragment),$p=h(),so=a("p"),Mp=o("The "),ja=a("a"),xp=o("XLMForMultipleChoice"),Ep=o(" forward method, overrides the "),Or=a("code"),zp=o("__call__"),Cp=o(" special method."),qp=h(),T(Qo.$$.fragment),jp=h(),T(Bo.$$.fragment),il=h(),ao=a("h2"),Uo=a("a"),Dr=a("span"),T(us.$$.fragment),Lp=h(),Ir=a("span"),Pp=o("FlaubertForTokenClassification"),ll=h(),ot=a("div"),T(ms.$$.fragment),Ap=h(),Wr=a("p"),Np=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sp=h(),fs=a("p"),Op=o("This model inherits from "),La=a("a"),Dp=o("PreTrainedModel"),Ip=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp=h(),gs=a("p"),Xp=o("This model is also a PyTorch "),_s=a("a"),Hp=o("torch.nn.Module"),Qp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bp=h(),bs=a("p"),Up=o("This class overrides "),Pa=a("a"),Rp=o("XLMForTokenClassification"),Kp=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Vp=h(),mt=a("div"),T(ks.$$.fragment),Yp=h(),ro=a("p"),Gp=o("The "),Aa=a("a"),Jp=o("XLMForTokenClassification"),Zp=o(" forward method, overrides the "),Xr=a("code"),eh=o("__call__"),th=o(" special method."),oh=h(),T(Ro.$$.fragment),nh=h(),T(Ko.$$.fragment),sh=h(),T(Vo.$$.fragment),dl=h(),io=a("h2"),Yo=a("a"),Hr=a("span"),T(ws.$$.fragment),ah=h(),Qr=a("span"),rh=o("FlaubertForQuestionAnsweringSimple"),cl=h(),nt=a("div"),T(ys.$$.fragment),ih=h(),lo=a("p"),lh=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Br=a("code"),dh=o("span start logits"),ch=o(" and "),Ur=a("code"),ph=o("span end logits"),hh=o(")."),uh=h(),Ts=a("p"),mh=o("This model inherits from "),Na=a("a"),fh=o("PreTrainedModel"),gh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=h(),vs=a("p"),bh=o("This model is also a PyTorch "),Fs=a("a"),kh=o("torch.nn.Module"),wh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yh=h(),$s=a("p"),Th=o("This class overrides "),Sa=a("a"),vh=o("XLMForQuestionAnsweringSimple"),Fh=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$h=h(),ft=a("div"),T(Ms.$$.fragment),Mh=h(),co=a("p"),xh=o("The "),Oa=a("a"),Eh=o("XLMForQuestionAnsweringSimple"),zh=o(" forward method, overrides the "),Rr=a("code"),Ch=o("__call__"),qh=o(" special method."),jh=h(),T(Go.$$.fragment),Lh=h(),T(Jo.$$.fragment),Ph=h(),T(Zo.$$.fragment),pl=h(),po=a("h2"),en=a("a"),Kr=a("span"),T(xs.$$.fragment),Ah=h(),Vr=a("span"),Nh=o("FlaubertForQuestionAnswering"),hl=h(),st=a("div"),T(Es.$$.fragment),Sh=h(),ho=a("p"),Oh=o(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Yr=a("code"),Dh=o("span start logits"),Ih=o(" and "),Gr=a("code"),Wh=o("span end logits"),Xh=o(")."),Hh=h(),zs=a("p"),Qh=o("This model inherits from "),Da=a("a"),Bh=o("PreTrainedModel"),Uh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh=h(),Cs=a("p"),Kh=o("This model is also a PyTorch "),qs=a("a"),Vh=o("torch.nn.Module"),Yh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gh=h(),js=a("p"),Jh=o("This class overrides "),Ia=a("a"),Zh=o("XLMForQuestionAnswering"),eu=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),tu=h(),Tt=a("div"),T(Ls.$$.fragment),ou=h(),uo=a("p"),nu=o("The "),Wa=a("a"),su=o("XLMForQuestionAnswering"),au=o(" forward method, overrides the "),Jr=a("code"),ru=o("__call__"),iu=o(" special method."),lu=h(),T(tn.$$.fragment),du=h(),T(on.$$.fragment),ul=h(),mo=a("h2"),nn=a("a"),Zr=a("span"),T(Ps.$$.fragment),cu=h(),ei=a("span"),pu=o("TFFlaubertModel"),ml=h(),at=a("div"),T(As.$$.fragment),hu=h(),ti=a("p"),uu=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),mu=h(),Ns=a("p"),fu=o("This model inherits from "),Xa=a("a"),gu=o("TFPreTrainedModel"),_u=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=h(),Ss=a("p"),ku=o("This model is also a "),Os=a("a"),wu=o("tf.keras.Model"),yu=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tu=h(),T(sn.$$.fragment),vu=h(),vt=a("div"),T(Ds.$$.fragment),Fu=h(),fo=a("p"),$u=o("The "),Ha=a("a"),Mu=o("TFFlaubertModel"),xu=o(" forward method, overrides the "),oi=a("code"),Eu=o("__call__"),zu=o(" special method."),Cu=h(),T(an.$$.fragment),qu=h(),T(rn.$$.fragment),fl=h(),go=a("h2"),ln=a("a"),ni=a("span"),T(Is.$$.fragment),ju=h(),si=a("span"),Lu=o("TFFlaubertWithLMHeadModel"),gl=h(),rt=a("div"),T(Ws.$$.fragment),Pu=h(),ai=a("p"),Au=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nu=h(),Xs=a("p"),Su=o("This model inherits from "),Qa=a("a"),Ou=o("TFPreTrainedModel"),Du=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu=h(),Hs=a("p"),Wu=o("This model is also a "),Qs=a("a"),Xu=o("tf.keras.Model"),Hu=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu=h(),T(dn.$$.fragment),Bu=h(),Ft=a("div"),T(Bs.$$.fragment),Uu=h(),_o=a("p"),Ru=o("The "),Ba=a("a"),Ku=o("TFFlaubertWithLMHeadModel"),Vu=o(" forward method, overrides the "),ri=a("code"),Yu=o("__call__"),Gu=o(" special method."),Ju=h(),T(cn.$$.fragment),Zu=h(),T(pn.$$.fragment),_l=h(),bo=a("h2"),hn=a("a"),ii=a("span"),T(Us.$$.fragment),em=h(),li=a("span"),tm=o("TFFlaubertForSequenceClassification"),bl=h(),it=a("div"),T(Rs.$$.fragment),om=h(),di=a("p"),nm=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),sm=h(),Ks=a("p"),am=o("This model inherits from "),Ua=a("a"),rm=o("TFPreTrainedModel"),im=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm=h(),Vs=a("p"),dm=o("This model is also a "),Ys=a("a"),cm=o("tf.keras.Model"),pm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hm=h(),T(un.$$.fragment),um=h(),gt=a("div"),T(Gs.$$.fragment),mm=h(),ko=a("p"),fm=o("The "),Ra=a("a"),gm=o("TFXLMForSequenceClassification"),_m=o(" forward method, overrides the "),ci=a("code"),bm=o("__call__"),km=o(" special method."),wm=h(),T(mn.$$.fragment),ym=h(),T(fn.$$.fragment),Tm=h(),T(gn.$$.fragment),kl=h(),wo=a("h2"),_n=a("a"),pi=a("span"),T(Js.$$.fragment),vm=h(),hi=a("span"),Fm=o("TFFlaubertForMultipleChoice"),wl=h(),lt=a("div"),T(Zs.$$.fragment),$m=h(),ui=a("p"),Mm=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xm=h(),ea=a("p"),Em=o("This model inherits from "),Ka=a("a"),zm=o("TFPreTrainedModel"),Cm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=h(),ta=a("p"),jm=o("This model is also a "),oa=a("a"),Lm=o("tf.keras.Model"),Pm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Am=h(),T(bn.$$.fragment),Nm=h(),$t=a("div"),T(na.$$.fragment),Sm=h(),yo=a("p"),Om=o("The "),Va=a("a"),Dm=o("TFXLMForMultipleChoice"),Im=o(" forward method, overrides the "),mi=a("code"),Wm=o("__call__"),Xm=o(" special method."),Hm=h(),T(kn.$$.fragment),Qm=h(),T(wn.$$.fragment),yl=h(),To=a("h2"),yn=a("a"),fi=a("span"),T(sa.$$.fragment),Bm=h(),gi=a("span"),Um=o("TFFlaubertForTokenClassification"),Tl=h(),dt=a("div"),T(aa.$$.fragment),Rm=h(),_i=a("p"),Km=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Vm=h(),ra=a("p"),Ym=o("This model inherits from "),Ya=a("a"),Gm=o("TFPreTrainedModel"),Jm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=h(),ia=a("p"),ef=o("This model is also a "),la=a("a"),tf=o("tf.keras.Model"),of=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=h(),T(Tn.$$.fragment),sf=h(),_t=a("div"),T(da.$$.fragment),af=h(),vo=a("p"),rf=o("The "),Ga=a("a"),lf=o("TFXLMForTokenClassification"),df=o(" forward method, overrides the "),bi=a("code"),cf=o("__call__"),pf=o(" special method."),hf=h(),T(vn.$$.fragment),uf=h(),T(Fn.$$.fragment),mf=h(),T($n.$$.fragment),vl=h(),Fo=a("h2"),Mn=a("a"),ki=a("span"),T(ca.$$.fragment),ff=h(),wi=a("span"),gf=o("TFFlaubertForQuestionAnsweringSimple"),Fl=h(),ct=a("div"),T(pa.$$.fragment),_f=h(),$o=a("p"),bf=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yi=a("code"),kf=o("span start logits"),wf=o(" and "),Ti=a("code"),yf=o("span end logits"),Tf=o(")."),vf=h(),ha=a("p"),Ff=o("This model inherits from "),Ja=a("a"),$f=o("TFPreTrainedModel"),Mf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=h(),ua=a("p"),Ef=o("This model is also a "),ma=a("a"),zf=o("tf.keras.Model"),Cf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=h(),T(xn.$$.fragment),jf=h(),bt=a("div"),T(fa.$$.fragment),Lf=h(),Mo=a("p"),Pf=o("The "),Za=a("a"),Af=o("TFXLMForQuestionAnsweringSimple"),Nf=o(" forward method, overrides the "),vi=a("code"),Sf=o("__call__"),Of=o(" special method."),Df=h(),T(En.$$.fragment),If=h(),T(zn.$$.fragment),Wf=h(),T(Cn.$$.fragment),this.h()},l(s){const k=J_('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),_=u(s),c=r(s,"H1",{class:!0});var ga=i(c);m=r(ga,"A",{id:!0,class:!0,href:!0});var Fi=i(m);w=r(Fi,"SPAN",{});var $i=i(w);v(d.$$.fragment,$i),$i.forEach(t),Fi.forEach(t),p=u(ga),q=r(ga,"SPAN",{});var Mi=i(q);Te=n(Mi,"FlauBERT"),Mi.forEach(t),ga.forEach(t),fe=u(s),O=r(s,"H2",{class:!0});var _a=i(O);se=r(_a,"A",{id:!0,class:!0,href:!0});var xi=i(se);J=r(xi,"SPAN",{});var Ei=i(J);v(y.$$.fragment,Ei),Ei.forEach(t),xi.forEach(t),ve=u(_a),H=r(_a,"SPAN",{});var zi=i(H);Fe=n(zi,"Overview"),zi.forEach(t),_a.forEach(t),ge=u(s),I=r(s,"P",{});var ba=i(I);$e=n(ba,"The FlauBERT model was proposed in the paper "),re=r(ba,"A",{href:!0,rel:!0});var Ci=i(re);K=n(Ci,"FlauBERT: Unsupervised Language Model Pre-training for French"),Ci.forEach(t),Me=n(ba,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
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
community for further reproducible experiments in French NLP.`),Li.forEach(t),ji.forEach(t),ee=u(s),j=r(s,"P",{});var xo=i(j);A=n(xo,"This model was contributed by "),ie=r(xo,"A",{href:!0,rel:!0});var Pi=i(ie);V=n(Pi,"formiel"),Pi.forEach(t),ze=n(xo,". The original code can be found "),le=r(xo,"A",{href:!0,rel:!0});var Ai=i(le);Y=n(Ai,"here"),Ai.forEach(t),Ce=n(xo,"."),xo.forEach(t),ke=u(s),L=r(s,"H2",{class:!0});var ka=i(L);ae=r(ka,"A",{id:!0,class:!0,href:!0});var Ni=i(ae);Q=r(Ni,"SPAN",{});var Si=i(Q);v(de.$$.fragment,Si),Si.forEach(t),Ni.forEach(t),qe=u(ka),B=r(ka,"SPAN",{});var Oi=i(B);je=n(Oi,"FlaubertConfig"),Oi.forEach(t),ka.forEach(t),we=u(s),N=r(s,"DIV",{class:!0});var Eo=i(N);v(ce.$$.fragment,Eo),G=u(Eo),Z=r(Eo,"P",{});var It=i(Z);oe=n(It,"This is the configuration class to store the configuration of a "),P=r(It,"A",{href:!0});var Di=i(P);Le=n(Di,"FlaubertModel"),Di.forEach(t),S=n(It," or a "),he=r(It,"A",{href:!0});var Ii=i(he);Pe=n(Ii,"TFFlaubertModel"),Ii.forEach(t),f=n(It,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=r(It,"A",{href:!0,rel:!0});var Wi=i(E);Qe=n(Wi,"flaubert/flaubert_base_uncased"),Wi.forEach(t),ne=n(It," architecture."),It.forEach(t),Be=u(Eo),Ae=r(Eo,"P",{});var zo=i(Ae);C=n(zo,"Configuration objects inherit from "),De=r(zo,"A",{href:!0});var Xi=i(De);Ue=n(Xi,"PretrainedConfig"),Xi.forEach(t),Re=n(zo,` and can be used to control the model outputs. Read the
documentation from `),Ie=r(zo,"A",{href:!0});var Hi=i(Ie);Ke=n(Hi,"PretrainedConfig"),Hi.forEach(t),D=n(zo," for more information."),zo.forEach(t),Eo.forEach(t),R=u(s),Ne=r(s,"H2",{class:!0});var wa=i(Ne);Se=r(wa,"A",{id:!0,class:!0,href:!0});var Qi=i(Se);U=r(Qi,"SPAN",{});var Bi=i(U);v(Oe.$$.fragment,Bi),Bi.forEach(t),Qi.forEach(t),Ve=u(wa),me=r(wa,"SPAN",{});var Ui=i(me);Ye=n(Ui,"FlaubertTokenizer"),Ui.forEach(t),wa.forEach(t),te=u(s),pe=r(s,"DIV",{class:!0});var Wt=i(pe);v(Sn.$$.fragment,Wt),kd=u(Wt),gr=r(Wt,"P",{});var Ri=i(gr);wd=n(Ri,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Ri.forEach(t),yd=u(Wt),Ot=r(Wt,"UL",{});var Xt=i(Ot);_r=r(Xt,"LI",{});var Ki=i(_r);Td=n(Ki,"Moses preprocessing and tokenization."),Ki.forEach(t),vd=u(Xt),br=r(Xt,"LI",{});var Vi=i(br);Fd=n(Vi,"Normalizing all inputs text."),Vi.forEach(t),$d=u(Xt),Dt=r(Xt,"LI",{});var Ht=i(Dt);Md=n(Ht,"The arguments "),kr=r(Ht,"CODE",{});var Yi=i(kr);xd=n(Yi,"special_tokens"),Yi.forEach(t),Ed=n(Ht," and the function "),wr=r(Ht,"CODE",{});var Gi=i(wr);zd=n(Gi,"set_special_tokens"),Gi.forEach(t),Cd=n(Ht,`, can be used to add additional symbols (like
\u201D`),yr=r(Ht,"STRONG",{});var Ji=i(yr);qd=n(Ji,"classify"),Ji.forEach(t),jd=n(Ht,"\u201D) to a vocabulary."),Ht.forEach(t),Ld=u(Xt),On=r(Xt,"LI",{});var Ml=i(On);Pd=n(Ml,"The argument "),Tr=r(Ml,"CODE",{});var Xf=i(Tr);Ad=n(Xf,"do_lowercase"),Xf.forEach(t),Nd=n(Ml," controls lower casing (automatically set for pretrained vocabularies)."),Ml.forEach(t),Xt.forEach(t),Sd=u(Wt),Dn=r(Wt,"P",{});var xl=i(Dn);Od=n(xl,"This tokenizer inherits from "),ya=r(xl,"A",{href:!0});var Hf=i(ya);Dd=n(Hf,"XLMTokenizer"),Hf.forEach(t),Id=n(xl,`. Please check the superclass for usage examples and documentation
regarding arguments.`),xl.forEach(t),Wt.forEach(t),Zi=u(s),Gt=r(s,"H2",{class:!0});var El=i(Gt);Co=r(El,"A",{id:!0,class:!0,href:!0});var Qf=i(Co);vr=r(Qf,"SPAN",{});var Bf=i(vr);v(In.$$.fragment,Bf),Bf.forEach(t),Qf.forEach(t),Wd=u(El),Fr=r(El,"SPAN",{});var Uf=i(Fr);Xd=n(Uf,"FlaubertModel"),Uf.forEach(t),El.forEach(t),el=u(s),ht=r(s,"DIV",{class:!0});var Qt=i(ht);v(Wn.$$.fragment,Qt),Hd=u(Qt),$r=r(Qt,"P",{});var Rf=i($r);Qd=n(Rf,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Rf.forEach(t),Bd=u(Qt),Xn=r(Qt,"P",{});var zl=i(Xn);Ud=n(zl,"This model inherits from "),Ta=r(zl,"A",{href:!0});var Kf=i(Ta);Rd=n(Kf,"PreTrainedModel"),Kf.forEach(t),Kd=n(zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl.forEach(t),Vd=u(Qt),Hn=r(Qt,"P",{});var Cl=i(Hn);Yd=n(Cl,"This model is also a PyTorch "),Qn=r(Cl,"A",{href:!0,rel:!0});var Vf=i(Qn);Gd=n(Vf,"torch.nn.Module"),Vf.forEach(t),Jd=n(Cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl.forEach(t),Zd=u(Qt),wt=r(Qt,"DIV",{class:!0});var qn=i(wt);v(Bn.$$.fragment,qn),ec=u(qn),Jt=r(qn,"P",{});var er=i(Jt);tc=n(er,"The "),va=r(er,"A",{href:!0});var Yf=i(va);oc=n(Yf,"FlaubertModel"),Yf.forEach(t),nc=n(er," forward method, overrides the "),Mr=r(er,"CODE",{});var Gf=i(Mr);sc=n(Gf,"__call__"),Gf.forEach(t),ac=n(er," special method."),er.forEach(t),rc=u(qn),v(qo.$$.fragment,qn),ic=u(qn),v(jo.$$.fragment,qn),qn.forEach(t),Qt.forEach(t),tl=u(s),Zt=r(s,"H2",{class:!0});var ql=i(Zt);Lo=r(ql,"A",{id:!0,class:!0,href:!0});var Jf=i(Lo);xr=r(Jf,"SPAN",{});var Zf=i(xr);v(Un.$$.fragment,Zf),Zf.forEach(t),Jf.forEach(t),lc=u(ql),Er=r(ql,"SPAN",{});var eg=i(Er);dc=n(eg,"FlaubertWithLMHeadModel"),eg.forEach(t),ql.forEach(t),ol=u(s),Ze=r(s,"DIV",{class:!0});var Mt=i(Ze);v(Rn.$$.fragment,Mt),cc=u(Mt),zr=r(Mt,"P",{});var tg=i(zr);pc=n(tg,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),tg.forEach(t),hc=u(Mt),Kn=r(Mt,"P",{});var jl=i(Kn);uc=n(jl,"This model inherits from "),Fa=r(jl,"A",{href:!0});var og=i(Fa);mc=n(og,"PreTrainedModel"),og.forEach(t),fc=n(jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl.forEach(t),gc=u(Mt),Vn=r(Mt,"P",{});var Ll=i(Vn);_c=n(Ll,"This model is also a PyTorch "),Yn=r(Ll,"A",{href:!0,rel:!0});var ng=i(Yn);bc=n(ng,"torch.nn.Module"),ng.forEach(t),kc=n(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),wc=u(Mt),Gn=r(Mt,"P",{});var Pl=i(Gn);yc=n(Pl,"This class overrides "),$a=r(Pl,"A",{href:!0});var sg=i($a);Tc=n(sg,"XLMWithLMHeadModel"),sg.forEach(t),vc=n(Pl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Pl.forEach(t),Fc=u(Mt),ut=r(Mt,"DIV",{class:!0});var Bt=i(ut);v(Jn.$$.fragment,Bt),$c=u(Bt),eo=r(Bt,"P",{});var tr=i(eo);Mc=n(tr,"The "),Ma=r(tr,"A",{href:!0});var ag=i(Ma);xc=n(ag,"XLMWithLMHeadModel"),ag.forEach(t),Ec=n(tr," forward method, overrides the "),Cr=r(tr,"CODE",{});var rg=i(Cr);zc=n(rg,"__call__"),rg.forEach(t),Cc=n(tr," special method."),tr.forEach(t),qc=u(Bt),v(Po.$$.fragment,Bt),jc=u(Bt),v(Ao.$$.fragment,Bt),Lc=u(Bt),v(No.$$.fragment,Bt),Bt.forEach(t),Mt.forEach(t),nl=u(s),to=r(s,"H2",{class:!0});var Al=i(to);So=r(Al,"A",{id:!0,class:!0,href:!0});var ig=i(So);qr=r(ig,"SPAN",{});var lg=i(qr);v(Zn.$$.fragment,lg),lg.forEach(t),ig.forEach(t),Pc=u(Al),jr=r(Al,"SPAN",{});var dg=i(jr);Ac=n(dg,"FlaubertForSequenceClassification"),dg.forEach(t),Al.forEach(t),sl=u(s),et=r(s,"DIV",{class:!0});var xt=i(et);v(es.$$.fragment,xt),Nc=u(xt),Lr=r(xt,"P",{});var cg=i(Lr);Sc=n(cg,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),cg.forEach(t),Oc=u(xt),ts=r(xt,"P",{});var Nl=i(ts);Dc=n(Nl,"This model inherits from "),xa=r(Nl,"A",{href:!0});var pg=i(xa);Ic=n(pg,"PreTrainedModel"),pg.forEach(t),Wc=n(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),Xc=u(xt),os=r(xt,"P",{});var Sl=i(os);Hc=n(Sl,"This model is also a PyTorch "),ns=r(Sl,"A",{href:!0,rel:!0});var hg=i(ns);Qc=n(hg,"torch.nn.Module"),hg.forEach(t),Bc=n(Sl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sl.forEach(t),Uc=u(xt),ss=r(xt,"P",{});var Ol=i(ss);Rc=n(Ol,"This class overrides "),Ea=r(Ol,"A",{href:!0});var ug=i(Ea);Kc=n(ug,"XLMForSequenceClassification"),ug.forEach(t),Vc=n(Ol,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Ol.forEach(t),Yc=u(xt),Je=r(xt,"DIV",{class:!0});var kt=i(Je);v(as.$$.fragment,kt),Gc=u(kt),oo=r(kt,"P",{});var or=i(oo);Jc=n(or,"The "),za=r(or,"A",{href:!0});var mg=i(za);Zc=n(mg,"XLMForSequenceClassification"),mg.forEach(t),ep=n(or," forward method, overrides the "),Pr=r(or,"CODE",{});var fg=i(Pr);tp=n(fg,"__call__"),fg.forEach(t),op=n(or," special method."),or.forEach(t),np=u(kt),v(Oo.$$.fragment,kt),sp=u(kt),v(Do.$$.fragment,kt),ap=u(kt),v(Io.$$.fragment,kt),rp=u(kt),v(Wo.$$.fragment,kt),ip=u(kt),v(Xo.$$.fragment,kt),kt.forEach(t),xt.forEach(t),al=u(s),no=r(s,"H2",{class:!0});var Dl=i(no);Ho=r(Dl,"A",{id:!0,class:!0,href:!0});var gg=i(Ho);Ar=r(gg,"SPAN",{});var _g=i(Ar);v(rs.$$.fragment,_g),_g.forEach(t),gg.forEach(t),lp=u(Dl),Nr=r(Dl,"SPAN",{});var bg=i(Nr);dp=n(bg,"FlaubertForMultipleChoice"),bg.forEach(t),Dl.forEach(t),rl=u(s),tt=r(s,"DIV",{class:!0});var Et=i(tt);v(is.$$.fragment,Et),cp=u(Et),Sr=r(Et,"P",{});var kg=i(Sr);pp=n(kg,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),kg.forEach(t),hp=u(Et),ls=r(Et,"P",{});var Il=i(ls);up=n(Il,"This model inherits from "),Ca=r(Il,"A",{href:!0});var wg=i(Ca);mp=n(wg,"PreTrainedModel"),wg.forEach(t),fp=n(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),gp=u(Et),ds=r(Et,"P",{});var Wl=i(ds);_p=n(Wl,"This model is also a PyTorch "),cs=r(Wl,"A",{href:!0,rel:!0});var yg=i(cs);bp=n(yg,"torch.nn.Module"),yg.forEach(t),kp=n(Wl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wl.forEach(t),wp=u(Et),ps=r(Et,"P",{});var Xl=i(ps);yp=n(Xl,"This class overrides "),qa=r(Xl,"A",{href:!0});var Tg=i(qa);Tp=n(Tg,"XLMForMultipleChoice"),Tg.forEach(t),vp=n(Xl,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Xl.forEach(t),Fp=u(Et),yt=r(Et,"DIV",{class:!0});var jn=i(yt);v(hs.$$.fragment,jn),$p=u(jn),so=r(jn,"P",{});var nr=i(so);Mp=n(nr,"The "),ja=r(nr,"A",{href:!0});var vg=i(ja);xp=n(vg,"XLMForMultipleChoice"),vg.forEach(t),Ep=n(nr," forward method, overrides the "),Or=r(nr,"CODE",{});var Fg=i(Or);zp=n(Fg,"__call__"),Fg.forEach(t),Cp=n(nr," special method."),nr.forEach(t),qp=u(jn),v(Qo.$$.fragment,jn),jp=u(jn),v(Bo.$$.fragment,jn),jn.forEach(t),Et.forEach(t),il=u(s),ao=r(s,"H2",{class:!0});var Hl=i(ao);Uo=r(Hl,"A",{id:!0,class:!0,href:!0});var $g=i(Uo);Dr=r($g,"SPAN",{});var Mg=i(Dr);v(us.$$.fragment,Mg),Mg.forEach(t),$g.forEach(t),Lp=u(Hl),Ir=r(Hl,"SPAN",{});var xg=i(Ir);Pp=n(xg,"FlaubertForTokenClassification"),xg.forEach(t),Hl.forEach(t),ll=u(s),ot=r(s,"DIV",{class:!0});var zt=i(ot);v(ms.$$.fragment,zt),Ap=u(zt),Wr=r(zt,"P",{});var Eg=i(Wr);Np=n(Eg,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Eg.forEach(t),Sp=u(zt),fs=r(zt,"P",{});var Ql=i(fs);Op=n(Ql,"This model inherits from "),La=r(Ql,"A",{href:!0});var zg=i(La);Dp=n(zg,"PreTrainedModel"),zg.forEach(t),Ip=n(Ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql.forEach(t),Wp=u(zt),gs=r(zt,"P",{});var Bl=i(gs);Xp=n(Bl,"This model is also a PyTorch "),_s=r(Bl,"A",{href:!0,rel:!0});var Cg=i(_s);Hp=n(Cg,"torch.nn.Module"),Cg.forEach(t),Qp=n(Bl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bl.forEach(t),Bp=u(zt),bs=r(zt,"P",{});var Ul=i(bs);Up=n(Ul,"This class overrides "),Pa=r(Ul,"A",{href:!0});var qg=i(Pa);Rp=n(qg,"XLMForTokenClassification"),qg.forEach(t),Kp=n(Ul,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Ul.forEach(t),Vp=u(zt),mt=r(zt,"DIV",{class:!0});var Ut=i(mt);v(ks.$$.fragment,Ut),Yp=u(Ut),ro=r(Ut,"P",{});var sr=i(ro);Gp=n(sr,"The "),Aa=r(sr,"A",{href:!0});var jg=i(Aa);Jp=n(jg,"XLMForTokenClassification"),jg.forEach(t),Zp=n(sr," forward method, overrides the "),Xr=r(sr,"CODE",{});var Lg=i(Xr);eh=n(Lg,"__call__"),Lg.forEach(t),th=n(sr," special method."),sr.forEach(t),oh=u(Ut),v(Ro.$$.fragment,Ut),nh=u(Ut),v(Ko.$$.fragment,Ut),sh=u(Ut),v(Vo.$$.fragment,Ut),Ut.forEach(t),zt.forEach(t),dl=u(s),io=r(s,"H2",{class:!0});var Rl=i(io);Yo=r(Rl,"A",{id:!0,class:!0,href:!0});var Pg=i(Yo);Hr=r(Pg,"SPAN",{});var Ag=i(Hr);v(ws.$$.fragment,Ag),Ag.forEach(t),Pg.forEach(t),ah=u(Rl),Qr=r(Rl,"SPAN",{});var Ng=i(Qr);rh=n(Ng,"FlaubertForQuestionAnsweringSimple"),Ng.forEach(t),Rl.forEach(t),cl=u(s),nt=r(s,"DIV",{class:!0});var Ct=i(nt);v(ys.$$.fragment,Ct),ih=u(Ct),lo=r(Ct,"P",{});var ar=i(lo);lh=n(ar,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Br=r(ar,"CODE",{});var Sg=i(Br);dh=n(Sg,"span start logits"),Sg.forEach(t),ch=n(ar," and "),Ur=r(ar,"CODE",{});var Og=i(Ur);ph=n(Og,"span end logits"),Og.forEach(t),hh=n(ar,")."),ar.forEach(t),uh=u(Ct),Ts=r(Ct,"P",{});var Kl=i(Ts);mh=n(Kl,"This model inherits from "),Na=r(Kl,"A",{href:!0});var Dg=i(Na);fh=n(Dg,"PreTrainedModel"),Dg.forEach(t),gh=n(Kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl.forEach(t),_h=u(Ct),vs=r(Ct,"P",{});var Vl=i(vs);bh=n(Vl,"This model is also a PyTorch "),Fs=r(Vl,"A",{href:!0,rel:!0});var Ig=i(Fs);kh=n(Ig,"torch.nn.Module"),Ig.forEach(t),wh=n(Vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vl.forEach(t),yh=u(Ct),$s=r(Ct,"P",{});var Yl=i($s);Th=n(Yl,"This class overrides "),Sa=r(Yl,"A",{href:!0});var Wg=i(Sa);vh=n(Wg,"XLMForQuestionAnsweringSimple"),Wg.forEach(t),Fh=n(Yl,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Yl.forEach(t),$h=u(Ct),ft=r(Ct,"DIV",{class:!0});var Rt=i(ft);v(Ms.$$.fragment,Rt),Mh=u(Rt),co=r(Rt,"P",{});var rr=i(co);xh=n(rr,"The "),Oa=r(rr,"A",{href:!0});var Xg=i(Oa);Eh=n(Xg,"XLMForQuestionAnsweringSimple"),Xg.forEach(t),zh=n(rr," forward method, overrides the "),Rr=r(rr,"CODE",{});var Hg=i(Rr);Ch=n(Hg,"__call__"),Hg.forEach(t),qh=n(rr," special method."),rr.forEach(t),jh=u(Rt),v(Go.$$.fragment,Rt),Lh=u(Rt),v(Jo.$$.fragment,Rt),Ph=u(Rt),v(Zo.$$.fragment,Rt),Rt.forEach(t),Ct.forEach(t),pl=u(s),po=r(s,"H2",{class:!0});var Gl=i(po);en=r(Gl,"A",{id:!0,class:!0,href:!0});var Qg=i(en);Kr=r(Qg,"SPAN",{});var Bg=i(Kr);v(xs.$$.fragment,Bg),Bg.forEach(t),Qg.forEach(t),Ah=u(Gl),Vr=r(Gl,"SPAN",{});var Ug=i(Vr);Nh=n(Ug,"FlaubertForQuestionAnswering"),Ug.forEach(t),Gl.forEach(t),hl=u(s),st=r(s,"DIV",{class:!0});var qt=i(st);v(Es.$$.fragment,qt),Sh=u(qt),ho=r(qt,"P",{});var ir=i(ho);Oh=n(ir,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Yr=r(ir,"CODE",{});var Rg=i(Yr);Dh=n(Rg,"span start logits"),Rg.forEach(t),Ih=n(ir," and "),Gr=r(ir,"CODE",{});var Kg=i(Gr);Wh=n(Kg,"span end logits"),Kg.forEach(t),Xh=n(ir,")."),ir.forEach(t),Hh=u(qt),zs=r(qt,"P",{});var Jl=i(zs);Qh=n(Jl,"This model inherits from "),Da=r(Jl,"A",{href:!0});var Vg=i(Da);Bh=n(Vg,"PreTrainedModel"),Vg.forEach(t),Uh=n(Jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jl.forEach(t),Rh=u(qt),Cs=r(qt,"P",{});var Zl=i(Cs);Kh=n(Zl,"This model is also a PyTorch "),qs=r(Zl,"A",{href:!0,rel:!0});var Yg=i(qs);Vh=n(Yg,"torch.nn.Module"),Yg.forEach(t),Yh=n(Zl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl.forEach(t),Gh=u(qt),js=r(qt,"P",{});var ed=i(js);Jh=n(ed,"This class overrides "),Ia=r(ed,"A",{href:!0});var Gg=i(Ia);Zh=n(Gg,"XLMForQuestionAnswering"),Gg.forEach(t),eu=n(ed,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ed.forEach(t),tu=u(qt),Tt=r(qt,"DIV",{class:!0});var Ln=i(Tt);v(Ls.$$.fragment,Ln),ou=u(Ln),uo=r(Ln,"P",{});var lr=i(uo);nu=n(lr,"The "),Wa=r(lr,"A",{href:!0});var Jg=i(Wa);su=n(Jg,"XLMForQuestionAnswering"),Jg.forEach(t),au=n(lr," forward method, overrides the "),Jr=r(lr,"CODE",{});var Zg=i(Jr);ru=n(Zg,"__call__"),Zg.forEach(t),iu=n(lr," special method."),lr.forEach(t),lu=u(Ln),v(tn.$$.fragment,Ln),du=u(Ln),v(on.$$.fragment,Ln),Ln.forEach(t),qt.forEach(t),ul=u(s),mo=r(s,"H2",{class:!0});var td=i(mo);nn=r(td,"A",{id:!0,class:!0,href:!0});var e_=i(nn);Zr=r(e_,"SPAN",{});var t_=i(Zr);v(Ps.$$.fragment,t_),t_.forEach(t),e_.forEach(t),cu=u(td),ei=r(td,"SPAN",{});var o_=i(ei);pu=n(o_,"TFFlaubertModel"),o_.forEach(t),td.forEach(t),ml=u(s),at=r(s,"DIV",{class:!0});var jt=i(at);v(As.$$.fragment,jt),hu=u(jt),ti=r(jt,"P",{});var n_=i(ti);uu=n(n_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),n_.forEach(t),mu=u(jt),Ns=r(jt,"P",{});var od=i(Ns);fu=n(od,"This model inherits from "),Xa=r(od,"A",{href:!0});var s_=i(Xa);gu=n(s_,"TFPreTrainedModel"),s_.forEach(t),_u=n(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(t),bu=u(jt),Ss=r(jt,"P",{});var nd=i(Ss);ku=n(nd,"This model is also a "),Os=r(nd,"A",{href:!0,rel:!0});var a_=i(Os);wu=n(a_,"tf.keras.Model"),a_.forEach(t),yu=n(nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nd.forEach(t),Tu=u(jt),v(sn.$$.fragment,jt),vu=u(jt),vt=r(jt,"DIV",{class:!0});var Pn=i(vt);v(Ds.$$.fragment,Pn),Fu=u(Pn),fo=r(Pn,"P",{});var dr=i(fo);$u=n(dr,"The "),Ha=r(dr,"A",{href:!0});var r_=i(Ha);Mu=n(r_,"TFFlaubertModel"),r_.forEach(t),xu=n(dr," forward method, overrides the "),oi=r(dr,"CODE",{});var i_=i(oi);Eu=n(i_,"__call__"),i_.forEach(t),zu=n(dr," special method."),dr.forEach(t),Cu=u(Pn),v(an.$$.fragment,Pn),qu=u(Pn),v(rn.$$.fragment,Pn),Pn.forEach(t),jt.forEach(t),fl=u(s),go=r(s,"H2",{class:!0});var sd=i(go);ln=r(sd,"A",{id:!0,class:!0,href:!0});var l_=i(ln);ni=r(l_,"SPAN",{});var d_=i(ni);v(Is.$$.fragment,d_),d_.forEach(t),l_.forEach(t),ju=u(sd),si=r(sd,"SPAN",{});var c_=i(si);Lu=n(c_,"TFFlaubertWithLMHeadModel"),c_.forEach(t),sd.forEach(t),gl=u(s),rt=r(s,"DIV",{class:!0});var Lt=i(rt);v(Ws.$$.fragment,Lt),Pu=u(Lt),ai=r(Lt,"P",{});var p_=i(ai);Au=n(p_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),p_.forEach(t),Nu=u(Lt),Xs=r(Lt,"P",{});var ad=i(Xs);Su=n(ad,"This model inherits from "),Qa=r(ad,"A",{href:!0});var h_=i(Qa);Ou=n(h_,"TFPreTrainedModel"),h_.forEach(t),Du=n(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Iu=u(Lt),Hs=r(Lt,"P",{});var rd=i(Hs);Wu=n(rd,"This model is also a "),Qs=r(rd,"A",{href:!0,rel:!0});var u_=i(Qs);Xu=n(u_,"tf.keras.Model"),u_.forEach(t),Hu=n(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),Qu=u(Lt),v(dn.$$.fragment,Lt),Bu=u(Lt),Ft=r(Lt,"DIV",{class:!0});var An=i(Ft);v(Bs.$$.fragment,An),Uu=u(An),_o=r(An,"P",{});var cr=i(_o);Ru=n(cr,"The "),Ba=r(cr,"A",{href:!0});var m_=i(Ba);Ku=n(m_,"TFFlaubertWithLMHeadModel"),m_.forEach(t),Vu=n(cr," forward method, overrides the "),ri=r(cr,"CODE",{});var f_=i(ri);Yu=n(f_,"__call__"),f_.forEach(t),Gu=n(cr," special method."),cr.forEach(t),Ju=u(An),v(cn.$$.fragment,An),Zu=u(An),v(pn.$$.fragment,An),An.forEach(t),Lt.forEach(t),_l=u(s),bo=r(s,"H2",{class:!0});var id=i(bo);hn=r(id,"A",{id:!0,class:!0,href:!0});var g_=i(hn);ii=r(g_,"SPAN",{});var __=i(ii);v(Us.$$.fragment,__),__.forEach(t),g_.forEach(t),em=u(id),li=r(id,"SPAN",{});var b_=i(li);tm=n(b_,"TFFlaubertForSequenceClassification"),b_.forEach(t),id.forEach(t),bl=u(s),it=r(s,"DIV",{class:!0});var Pt=i(it);v(Rs.$$.fragment,Pt),om=u(Pt),di=r(Pt,"P",{});var k_=i(di);nm=n(k_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),k_.forEach(t),sm=u(Pt),Ks=r(Pt,"P",{});var ld=i(Ks);am=n(ld,"This model inherits from "),Ua=r(ld,"A",{href:!0});var w_=i(Ua);rm=n(w_,"TFPreTrainedModel"),w_.forEach(t),im=n(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),lm=u(Pt),Vs=r(Pt,"P",{});var dd=i(Vs);dm=n(dd,"This model is also a "),Ys=r(dd,"A",{href:!0,rel:!0});var y_=i(Ys);cm=n(y_,"tf.keras.Model"),y_.forEach(t),pm=n(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),hm=u(Pt),v(un.$$.fragment,Pt),um=u(Pt),gt=r(Pt,"DIV",{class:!0});var Kt=i(gt);v(Gs.$$.fragment,Kt),mm=u(Kt),ko=r(Kt,"P",{});var pr=i(ko);fm=n(pr,"The "),Ra=r(pr,"A",{href:!0});var T_=i(Ra);gm=n(T_,"TFXLMForSequenceClassification"),T_.forEach(t),_m=n(pr," forward method, overrides the "),ci=r(pr,"CODE",{});var v_=i(ci);bm=n(v_,"__call__"),v_.forEach(t),km=n(pr," special method."),pr.forEach(t),wm=u(Kt),v(mn.$$.fragment,Kt),ym=u(Kt),v(fn.$$.fragment,Kt),Tm=u(Kt),v(gn.$$.fragment,Kt),Kt.forEach(t),Pt.forEach(t),kl=u(s),wo=r(s,"H2",{class:!0});var cd=i(wo);_n=r(cd,"A",{id:!0,class:!0,href:!0});var F_=i(_n);pi=r(F_,"SPAN",{});var $_=i(pi);v(Js.$$.fragment,$_),$_.forEach(t),F_.forEach(t),vm=u(cd),hi=r(cd,"SPAN",{});var M_=i(hi);Fm=n(M_,"TFFlaubertForMultipleChoice"),M_.forEach(t),cd.forEach(t),wl=u(s),lt=r(s,"DIV",{class:!0});var At=i(lt);v(Zs.$$.fragment,At),$m=u(At),ui=r(At,"P",{});var x_=i(ui);Mm=n(x_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x_.forEach(t),xm=u(At),ea=r(At,"P",{});var pd=i(ea);Em=n(pd,"This model inherits from "),Ka=r(pd,"A",{href:!0});var E_=i(Ka);zm=n(E_,"TFPreTrainedModel"),E_.forEach(t),Cm=n(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),qm=u(At),ta=r(At,"P",{});var hd=i(ta);jm=n(hd,"This model is also a "),oa=r(hd,"A",{href:!0,rel:!0});var z_=i(oa);Lm=n(z_,"tf.keras.Model"),z_.forEach(t),Pm=n(hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hd.forEach(t),Am=u(At),v(bn.$$.fragment,At),Nm=u(At),$t=r(At,"DIV",{class:!0});var Nn=i($t);v(na.$$.fragment,Nn),Sm=u(Nn),yo=r(Nn,"P",{});var hr=i(yo);Om=n(hr,"The "),Va=r(hr,"A",{href:!0});var C_=i(Va);Dm=n(C_,"TFXLMForMultipleChoice"),C_.forEach(t),Im=n(hr," forward method, overrides the "),mi=r(hr,"CODE",{});var q_=i(mi);Wm=n(q_,"__call__"),q_.forEach(t),Xm=n(hr," special method."),hr.forEach(t),Hm=u(Nn),v(kn.$$.fragment,Nn),Qm=u(Nn),v(wn.$$.fragment,Nn),Nn.forEach(t),At.forEach(t),yl=u(s),To=r(s,"H2",{class:!0});var ud=i(To);yn=r(ud,"A",{id:!0,class:!0,href:!0});var j_=i(yn);fi=r(j_,"SPAN",{});var L_=i(fi);v(sa.$$.fragment,L_),L_.forEach(t),j_.forEach(t),Bm=u(ud),gi=r(ud,"SPAN",{});var P_=i(gi);Um=n(P_,"TFFlaubertForTokenClassification"),P_.forEach(t),ud.forEach(t),Tl=u(s),dt=r(s,"DIV",{class:!0});var Nt=i(dt);v(aa.$$.fragment,Nt),Rm=u(Nt),_i=r(Nt,"P",{});var A_=i(_i);Km=n(A_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A_.forEach(t),Vm=u(Nt),ra=r(Nt,"P",{});var md=i(ra);Ym=n(md,"This model inherits from "),Ya=r(md,"A",{href:!0});var N_=i(Ya);Gm=n(N_,"TFPreTrainedModel"),N_.forEach(t),Jm=n(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),Zm=u(Nt),ia=r(Nt,"P",{});var fd=i(ia);ef=n(fd,"This model is also a "),la=r(fd,"A",{href:!0,rel:!0});var S_=i(la);tf=n(S_,"tf.keras.Model"),S_.forEach(t),of=n(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),nf=u(Nt),v(Tn.$$.fragment,Nt),sf=u(Nt),_t=r(Nt,"DIV",{class:!0});var Vt=i(_t);v(da.$$.fragment,Vt),af=u(Vt),vo=r(Vt,"P",{});var ur=i(vo);rf=n(ur,"The "),Ga=r(ur,"A",{href:!0});var O_=i(Ga);lf=n(O_,"TFXLMForTokenClassification"),O_.forEach(t),df=n(ur," forward method, overrides the "),bi=r(ur,"CODE",{});var D_=i(bi);cf=n(D_,"__call__"),D_.forEach(t),pf=n(ur," special method."),ur.forEach(t),hf=u(Vt),v(vn.$$.fragment,Vt),uf=u(Vt),v(Fn.$$.fragment,Vt),mf=u(Vt),v($n.$$.fragment,Vt),Vt.forEach(t),Nt.forEach(t),vl=u(s),Fo=r(s,"H2",{class:!0});var gd=i(Fo);Mn=r(gd,"A",{id:!0,class:!0,href:!0});var I_=i(Mn);ki=r(I_,"SPAN",{});var W_=i(ki);v(ca.$$.fragment,W_),W_.forEach(t),I_.forEach(t),ff=u(gd),wi=r(gd,"SPAN",{});var X_=i(wi);gf=n(X_,"TFFlaubertForQuestionAnsweringSimple"),X_.forEach(t),gd.forEach(t),Fl=u(s),ct=r(s,"DIV",{class:!0});var St=i(ct);v(pa.$$.fragment,St),_f=u(St),$o=r(St,"P",{});var mr=i($o);bf=n(mr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yi=r(mr,"CODE",{});var H_=i(yi);kf=n(H_,"span start logits"),H_.forEach(t),wf=n(mr," and "),Ti=r(mr,"CODE",{});var Q_=i(Ti);yf=n(Q_,"span end logits"),Q_.forEach(t),Tf=n(mr,")."),mr.forEach(t),vf=u(St),ha=r(St,"P",{});var _d=i(ha);Ff=n(_d,"This model inherits from "),Ja=r(_d,"A",{href:!0});var B_=i(Ja);$f=n(B_,"TFPreTrainedModel"),B_.forEach(t),Mf=n(_d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d.forEach(t),xf=u(St),ua=r(St,"P",{});var bd=i(ua);Ef=n(bd,"This model is also a "),ma=r(bd,"A",{href:!0,rel:!0});var U_=i(ma);zf=n(U_,"tf.keras.Model"),U_.forEach(t),Cf=n(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),qf=u(St),v(xn.$$.fragment,St),jf=u(St),bt=r(St,"DIV",{class:!0});var Yt=i(bt);v(fa.$$.fragment,Yt),Lf=u(Yt),Mo=r(Yt,"P",{});var fr=i(Mo);Pf=n(fr,"The "),Za=r(fr,"A",{href:!0});var R_=i(Za);Af=n(R_,"TFXLMForQuestionAnsweringSimple"),R_.forEach(t),Nf=n(fr," forward method, overrides the "),vi=r(fr,"CODE",{});var K_=i(vi);Sf=n(K_,"__call__"),K_.forEach(t),Of=n(fr," special method."),fr.forEach(t),Df=u(Yt),v(En.$$.fragment,Yt),If=u(Yt),v(zn.$$.fragment,Yt),Wf=u(Yt),v(Cn.$$.fragment,Yt),Yt.forEach(t),St.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(Xb)),g(m,"id","flaubert"),g(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(m,"href","#flaubert"),g(c,"class","relative group"),g(se,"id","overview"),g(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(se,"href","#overview"),g(O,"class","relative group"),g(re,"href","https://arxiv.org/abs/1912.05372"),g(re,"rel","nofollow"),g(ie,"href","https://huggingface.co/formiel"),g(ie,"rel","nofollow"),g(le,"href","https://github.com/getalp/Flaubert"),g(le,"rel","nofollow"),g(ae,"id","transformers.FlaubertConfig"),g(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ae,"href","#transformers.FlaubertConfig"),g(L,"class","relative group"),g(P,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),g(he,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),g(E,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),g(E,"rel","nofollow"),g(De,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(Ie,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"id","transformers.FlaubertTokenizer"),g(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Se,"href","#transformers.FlaubertTokenizer"),g(Ne,"class","relative group"),g(ya,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer"),g(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Co,"id","transformers.FlaubertModel"),g(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Co,"href","#transformers.FlaubertModel"),g(Gt,"class","relative group"),g(Ta,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Qn,"rel","nofollow"),g(va,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Lo,"id","transformers.FlaubertWithLMHeadModel"),g(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Lo,"href","#transformers.FlaubertWithLMHeadModel"),g(Zt,"class","relative group"),g(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Yn,"rel","nofollow"),g($a,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),g(Ma,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(So,"id","transformers.FlaubertForSequenceClassification"),g(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(So,"href","#transformers.FlaubertForSequenceClassification"),g(to,"class","relative group"),g(xa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ns,"rel","nofollow"),g(Ea,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),g(za,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),g(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ho,"id","transformers.FlaubertForMultipleChoice"),g(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ho,"href","#transformers.FlaubertForMultipleChoice"),g(no,"class","relative group"),g(Ca,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(cs,"rel","nofollow"),g(qa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),g(ja,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Uo,"id","transformers.FlaubertForTokenClassification"),g(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Uo,"href","#transformers.FlaubertForTokenClassification"),g(ao,"class","relative group"),g(La,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_s,"rel","nofollow"),g(Pa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),g(Aa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Yo,"id","transformers.FlaubertForQuestionAnsweringSimple"),g(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Yo,"href","#transformers.FlaubertForQuestionAnsweringSimple"),g(io,"class","relative group"),g(Na,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Fs,"rel","nofollow"),g(Sa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),g(Oa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.FlaubertForQuestionAnswering"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.FlaubertForQuestionAnswering"),g(po,"class","relative group"),g(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(qs,"rel","nofollow"),g(Ia,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),g(Wa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nn,"id","transformers.TFFlaubertModel"),g(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(nn,"href","#transformers.TFFlaubertModel"),g(mo,"class","relative group"),g(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Os,"rel","nofollow"),g(Ha,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.TFFlaubertWithLMHeadModel"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.TFFlaubertWithLMHeadModel"),g(go,"class","relative group"),g(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Qs,"rel","nofollow"),g(Ba,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),g(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(hn,"id","transformers.TFFlaubertForSequenceClassification"),g(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(hn,"href","#transformers.TFFlaubertForSequenceClassification"),g(bo,"class","relative group"),g(Ua,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ys,"rel","nofollow"),g(Ra,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_n,"id","transformers.TFFlaubertForMultipleChoice"),g(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_n,"href","#transformers.TFFlaubertForMultipleChoice"),g(wo,"class","relative group"),g(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(oa,"rel","nofollow"),g(Va,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yn,"id","transformers.TFFlaubertForTokenClassification"),g(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(yn,"href","#transformers.TFFlaubertForTokenClassification"),g(To,"class","relative group"),g(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(la,"rel","nofollow"),g(Ga,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Mn,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),g(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Mn,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),g(Fo,"class","relative group"),g(Ja,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ma,"rel","nofollow"),g(Za,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,l),b(s,_,k),b(s,c,k),e(c,m),e(m,w),F(d,w,null),e(c,p),e(c,q),e(q,Te),b(s,fe,k),b(s,O,k),e(O,se),e(se,J),F(y,J,null),e(O,ve),e(O,H),e(H,Fe),b(s,ge,k),b(s,I,k),e(I,$e),e(I,re),e(re,K),e(I,Me),b(s,_e,k),b(s,W,k),e(W,xe),b(s,be,k),b(s,X,k),e(X,ue),e(ue,Ee),b(s,ee,k),b(s,j,k),e(j,A),e(j,ie),e(ie,V),e(j,ze),e(j,le),e(le,Y),e(j,Ce),b(s,ke,k),b(s,L,k),e(L,ae),e(ae,Q),F(de,Q,null),e(L,qe),e(L,B),e(B,je),b(s,we,k),b(s,N,k),F(ce,N,null),e(N,G),e(N,Z),e(Z,oe),e(Z,P),e(P,Le),e(Z,S),e(Z,he),e(he,Pe),e(Z,f),e(Z,E),e(E,Qe),e(Z,ne),e(N,Be),e(N,Ae),e(Ae,C),e(Ae,De),e(De,Ue),e(Ae,Re),e(Ae,Ie),e(Ie,Ke),e(Ae,D),b(s,R,k),b(s,Ne,k),e(Ne,Se),e(Se,U),F(Oe,U,null),e(Ne,Ve),e(Ne,me),e(me,Ye),b(s,te,k),b(s,pe,k),F(Sn,pe,null),e(pe,kd),e(pe,gr),e(gr,wd),e(pe,yd),e(pe,Ot),e(Ot,_r),e(_r,Td),e(Ot,vd),e(Ot,br),e(br,Fd),e(Ot,$d),e(Ot,Dt),e(Dt,Md),e(Dt,kr),e(kr,xd),e(Dt,Ed),e(Dt,wr),e(wr,zd),e(Dt,Cd),e(Dt,yr),e(yr,qd),e(Dt,jd),e(Ot,Ld),e(Ot,On),e(On,Pd),e(On,Tr),e(Tr,Ad),e(On,Nd),e(pe,Sd),e(pe,Dn),e(Dn,Od),e(Dn,ya),e(ya,Dd),e(Dn,Id),b(s,Zi,k),b(s,Gt,k),e(Gt,Co),e(Co,vr),F(In,vr,null),e(Gt,Wd),e(Gt,Fr),e(Fr,Xd),b(s,el,k),b(s,ht,k),F(Wn,ht,null),e(ht,Hd),e(ht,$r),e($r,Qd),e(ht,Bd),e(ht,Xn),e(Xn,Ud),e(Xn,Ta),e(Ta,Rd),e(Xn,Kd),e(ht,Vd),e(ht,Hn),e(Hn,Yd),e(Hn,Qn),e(Qn,Gd),e(Hn,Jd),e(ht,Zd),e(ht,wt),F(Bn,wt,null),e(wt,ec),e(wt,Jt),e(Jt,tc),e(Jt,va),e(va,oc),e(Jt,nc),e(Jt,Mr),e(Mr,sc),e(Jt,ac),e(wt,rc),F(qo,wt,null),e(wt,ic),F(jo,wt,null),b(s,tl,k),b(s,Zt,k),e(Zt,Lo),e(Lo,xr),F(Un,xr,null),e(Zt,lc),e(Zt,Er),e(Er,dc),b(s,ol,k),b(s,Ze,k),F(Rn,Ze,null),e(Ze,cc),e(Ze,zr),e(zr,pc),e(Ze,hc),e(Ze,Kn),e(Kn,uc),e(Kn,Fa),e(Fa,mc),e(Kn,fc),e(Ze,gc),e(Ze,Vn),e(Vn,_c),e(Vn,Yn),e(Yn,bc),e(Vn,kc),e(Ze,wc),e(Ze,Gn),e(Gn,yc),e(Gn,$a),e($a,Tc),e(Gn,vc),e(Ze,Fc),e(Ze,ut),F(Jn,ut,null),e(ut,$c),e(ut,eo),e(eo,Mc),e(eo,Ma),e(Ma,xc),e(eo,Ec),e(eo,Cr),e(Cr,zc),e(eo,Cc),e(ut,qc),F(Po,ut,null),e(ut,jc),F(Ao,ut,null),e(ut,Lc),F(No,ut,null),b(s,nl,k),b(s,to,k),e(to,So),e(So,qr),F(Zn,qr,null),e(to,Pc),e(to,jr),e(jr,Ac),b(s,sl,k),b(s,et,k),F(es,et,null),e(et,Nc),e(et,Lr),e(Lr,Sc),e(et,Oc),e(et,ts),e(ts,Dc),e(ts,xa),e(xa,Ic),e(ts,Wc),e(et,Xc),e(et,os),e(os,Hc),e(os,ns),e(ns,Qc),e(os,Bc),e(et,Uc),e(et,ss),e(ss,Rc),e(ss,Ea),e(Ea,Kc),e(ss,Vc),e(et,Yc),e(et,Je),F(as,Je,null),e(Je,Gc),e(Je,oo),e(oo,Jc),e(oo,za),e(za,Zc),e(oo,ep),e(oo,Pr),e(Pr,tp),e(oo,op),e(Je,np),F(Oo,Je,null),e(Je,sp),F(Do,Je,null),e(Je,ap),F(Io,Je,null),e(Je,rp),F(Wo,Je,null),e(Je,ip),F(Xo,Je,null),b(s,al,k),b(s,no,k),e(no,Ho),e(Ho,Ar),F(rs,Ar,null),e(no,lp),e(no,Nr),e(Nr,dp),b(s,rl,k),b(s,tt,k),F(is,tt,null),e(tt,cp),e(tt,Sr),e(Sr,pp),e(tt,hp),e(tt,ls),e(ls,up),e(ls,Ca),e(Ca,mp),e(ls,fp),e(tt,gp),e(tt,ds),e(ds,_p),e(ds,cs),e(cs,bp),e(ds,kp),e(tt,wp),e(tt,ps),e(ps,yp),e(ps,qa),e(qa,Tp),e(ps,vp),e(tt,Fp),e(tt,yt),F(hs,yt,null),e(yt,$p),e(yt,so),e(so,Mp),e(so,ja),e(ja,xp),e(so,Ep),e(so,Or),e(Or,zp),e(so,Cp),e(yt,qp),F(Qo,yt,null),e(yt,jp),F(Bo,yt,null),b(s,il,k),b(s,ao,k),e(ao,Uo),e(Uo,Dr),F(us,Dr,null),e(ao,Lp),e(ao,Ir),e(Ir,Pp),b(s,ll,k),b(s,ot,k),F(ms,ot,null),e(ot,Ap),e(ot,Wr),e(Wr,Np),e(ot,Sp),e(ot,fs),e(fs,Op),e(fs,La),e(La,Dp),e(fs,Ip),e(ot,Wp),e(ot,gs),e(gs,Xp),e(gs,_s),e(_s,Hp),e(gs,Qp),e(ot,Bp),e(ot,bs),e(bs,Up),e(bs,Pa),e(Pa,Rp),e(bs,Kp),e(ot,Vp),e(ot,mt),F(ks,mt,null),e(mt,Yp),e(mt,ro),e(ro,Gp),e(ro,Aa),e(Aa,Jp),e(ro,Zp),e(ro,Xr),e(Xr,eh),e(ro,th),e(mt,oh),F(Ro,mt,null),e(mt,nh),F(Ko,mt,null),e(mt,sh),F(Vo,mt,null),b(s,dl,k),b(s,io,k),e(io,Yo),e(Yo,Hr),F(ws,Hr,null),e(io,ah),e(io,Qr),e(Qr,rh),b(s,cl,k),b(s,nt,k),F(ys,nt,null),e(nt,ih),e(nt,lo),e(lo,lh),e(lo,Br),e(Br,dh),e(lo,ch),e(lo,Ur),e(Ur,ph),e(lo,hh),e(nt,uh),e(nt,Ts),e(Ts,mh),e(Ts,Na),e(Na,fh),e(Ts,gh),e(nt,_h),e(nt,vs),e(vs,bh),e(vs,Fs),e(Fs,kh),e(vs,wh),e(nt,yh),e(nt,$s),e($s,Th),e($s,Sa),e(Sa,vh),e($s,Fh),e(nt,$h),e(nt,ft),F(Ms,ft,null),e(ft,Mh),e(ft,co),e(co,xh),e(co,Oa),e(Oa,Eh),e(co,zh),e(co,Rr),e(Rr,Ch),e(co,qh),e(ft,jh),F(Go,ft,null),e(ft,Lh),F(Jo,ft,null),e(ft,Ph),F(Zo,ft,null),b(s,pl,k),b(s,po,k),e(po,en),e(en,Kr),F(xs,Kr,null),e(po,Ah),e(po,Vr),e(Vr,Nh),b(s,hl,k),b(s,st,k),F(Es,st,null),e(st,Sh),e(st,ho),e(ho,Oh),e(ho,Yr),e(Yr,Dh),e(ho,Ih),e(ho,Gr),e(Gr,Wh),e(ho,Xh),e(st,Hh),e(st,zs),e(zs,Qh),e(zs,Da),e(Da,Bh),e(zs,Uh),e(st,Rh),e(st,Cs),e(Cs,Kh),e(Cs,qs),e(qs,Vh),e(Cs,Yh),e(st,Gh),e(st,js),e(js,Jh),e(js,Ia),e(Ia,Zh),e(js,eu),e(st,tu),e(st,Tt),F(Ls,Tt,null),e(Tt,ou),e(Tt,uo),e(uo,nu),e(uo,Wa),e(Wa,su),e(uo,au),e(uo,Jr),e(Jr,ru),e(uo,iu),e(Tt,lu),F(tn,Tt,null),e(Tt,du),F(on,Tt,null),b(s,ul,k),b(s,mo,k),e(mo,nn),e(nn,Zr),F(Ps,Zr,null),e(mo,cu),e(mo,ei),e(ei,pu),b(s,ml,k),b(s,at,k),F(As,at,null),e(at,hu),e(at,ti),e(ti,uu),e(at,mu),e(at,Ns),e(Ns,fu),e(Ns,Xa),e(Xa,gu),e(Ns,_u),e(at,bu),e(at,Ss),e(Ss,ku),e(Ss,Os),e(Os,wu),e(Ss,yu),e(at,Tu),F(sn,at,null),e(at,vu),e(at,vt),F(Ds,vt,null),e(vt,Fu),e(vt,fo),e(fo,$u),e(fo,Ha),e(Ha,Mu),e(fo,xu),e(fo,oi),e(oi,Eu),e(fo,zu),e(vt,Cu),F(an,vt,null),e(vt,qu),F(rn,vt,null),b(s,fl,k),b(s,go,k),e(go,ln),e(ln,ni),F(Is,ni,null),e(go,ju),e(go,si),e(si,Lu),b(s,gl,k),b(s,rt,k),F(Ws,rt,null),e(rt,Pu),e(rt,ai),e(ai,Au),e(rt,Nu),e(rt,Xs),e(Xs,Su),e(Xs,Qa),e(Qa,Ou),e(Xs,Du),e(rt,Iu),e(rt,Hs),e(Hs,Wu),e(Hs,Qs),e(Qs,Xu),e(Hs,Hu),e(rt,Qu),F(dn,rt,null),e(rt,Bu),e(rt,Ft),F(Bs,Ft,null),e(Ft,Uu),e(Ft,_o),e(_o,Ru),e(_o,Ba),e(Ba,Ku),e(_o,Vu),e(_o,ri),e(ri,Yu),e(_o,Gu),e(Ft,Ju),F(cn,Ft,null),e(Ft,Zu),F(pn,Ft,null),b(s,_l,k),b(s,bo,k),e(bo,hn),e(hn,ii),F(Us,ii,null),e(bo,em),e(bo,li),e(li,tm),b(s,bl,k),b(s,it,k),F(Rs,it,null),e(it,om),e(it,di),e(di,nm),e(it,sm),e(it,Ks),e(Ks,am),e(Ks,Ua),e(Ua,rm),e(Ks,im),e(it,lm),e(it,Vs),e(Vs,dm),e(Vs,Ys),e(Ys,cm),e(Vs,pm),e(it,hm),F(un,it,null),e(it,um),e(it,gt),F(Gs,gt,null),e(gt,mm),e(gt,ko),e(ko,fm),e(ko,Ra),e(Ra,gm),e(ko,_m),e(ko,ci),e(ci,bm),e(ko,km),e(gt,wm),F(mn,gt,null),e(gt,ym),F(fn,gt,null),e(gt,Tm),F(gn,gt,null),b(s,kl,k),b(s,wo,k),e(wo,_n),e(_n,pi),F(Js,pi,null),e(wo,vm),e(wo,hi),e(hi,Fm),b(s,wl,k),b(s,lt,k),F(Zs,lt,null),e(lt,$m),e(lt,ui),e(ui,Mm),e(lt,xm),e(lt,ea),e(ea,Em),e(ea,Ka),e(Ka,zm),e(ea,Cm),e(lt,qm),e(lt,ta),e(ta,jm),e(ta,oa),e(oa,Lm),e(ta,Pm),e(lt,Am),F(bn,lt,null),e(lt,Nm),e(lt,$t),F(na,$t,null),e($t,Sm),e($t,yo),e(yo,Om),e(yo,Va),e(Va,Dm),e(yo,Im),e(yo,mi),e(mi,Wm),e(yo,Xm),e($t,Hm),F(kn,$t,null),e($t,Qm),F(wn,$t,null),b(s,yl,k),b(s,To,k),e(To,yn),e(yn,fi),F(sa,fi,null),e(To,Bm),e(To,gi),e(gi,Um),b(s,Tl,k),b(s,dt,k),F(aa,dt,null),e(dt,Rm),e(dt,_i),e(_i,Km),e(dt,Vm),e(dt,ra),e(ra,Ym),e(ra,Ya),e(Ya,Gm),e(ra,Jm),e(dt,Zm),e(dt,ia),e(ia,ef),e(ia,la),e(la,tf),e(ia,of),e(dt,nf),F(Tn,dt,null),e(dt,sf),e(dt,_t),F(da,_t,null),e(_t,af),e(_t,vo),e(vo,rf),e(vo,Ga),e(Ga,lf),e(vo,df),e(vo,bi),e(bi,cf),e(vo,pf),e(_t,hf),F(vn,_t,null),e(_t,uf),F(Fn,_t,null),e(_t,mf),F($n,_t,null),b(s,vl,k),b(s,Fo,k),e(Fo,Mn),e(Mn,ki),F(ca,ki,null),e(Fo,ff),e(Fo,wi),e(wi,gf),b(s,Fl,k),b(s,ct,k),F(pa,ct,null),e(ct,_f),e(ct,$o),e($o,bf),e($o,yi),e(yi,kf),e($o,wf),e($o,Ti),e(Ti,yf),e($o,Tf),e(ct,vf),e(ct,ha),e(ha,Ff),e(ha,Ja),e(Ja,$f),e(ha,Mf),e(ct,xf),e(ct,ua),e(ua,Ef),e(ua,ma),e(ma,zf),e(ua,Cf),e(ct,qf),F(xn,ct,null),e(ct,jf),e(ct,bt),F(fa,bt,null),e(bt,Lf),e(bt,Mo),e(Mo,Pf),e(Mo,Za),e(Za,Af),e(Mo,Nf),e(Mo,vi),e(vi,Sf),e(Mo,Of),e(bt,Df),F(En,bt,null),e(bt,If),F(zn,bt,null),e(bt,Wf),F(Cn,bt,null),$l=!0},p(s,[k]){const ga={};k&2&&(ga.$$scope={dirty:k,ctx:s}),qo.$set(ga);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:s}),jo.$set(Fi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:s}),Po.$set($i);const Mi={};k&2&&(Mi.$$scope={dirty:k,ctx:s}),Ao.$set(Mi);const _a={};k&2&&(_a.$$scope={dirty:k,ctx:s}),No.$set(_a);const xi={};k&2&&(xi.$$scope={dirty:k,ctx:s}),Oo.$set(xi);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:s}),Do.$set(Ei);const zi={};k&2&&(zi.$$scope={dirty:k,ctx:s}),Io.$set(zi);const ba={};k&2&&(ba.$$scope={dirty:k,ctx:s}),Wo.$set(ba);const Ci={};k&2&&(Ci.$$scope={dirty:k,ctx:s}),Xo.$set(Ci);const qi={};k&2&&(qi.$$scope={dirty:k,ctx:s}),Qo.$set(qi);const ji={};k&2&&(ji.$$scope={dirty:k,ctx:s}),Bo.$set(ji);const Li={};k&2&&(Li.$$scope={dirty:k,ctx:s}),Ro.$set(Li);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:s}),Ko.$set(xo);const Pi={};k&2&&(Pi.$$scope={dirty:k,ctx:s}),Vo.$set(Pi);const Ai={};k&2&&(Ai.$$scope={dirty:k,ctx:s}),Go.$set(Ai);const ka={};k&2&&(ka.$$scope={dirty:k,ctx:s}),Jo.$set(ka);const Ni={};k&2&&(Ni.$$scope={dirty:k,ctx:s}),Zo.$set(Ni);const Si={};k&2&&(Si.$$scope={dirty:k,ctx:s}),tn.$set(Si);const Oi={};k&2&&(Oi.$$scope={dirty:k,ctx:s}),on.$set(Oi);const Eo={};k&2&&(Eo.$$scope={dirty:k,ctx:s}),sn.$set(Eo);const It={};k&2&&(It.$$scope={dirty:k,ctx:s}),an.$set(It);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:s}),rn.$set(Di);const Ii={};k&2&&(Ii.$$scope={dirty:k,ctx:s}),dn.$set(Ii);const Wi={};k&2&&(Wi.$$scope={dirty:k,ctx:s}),cn.$set(Wi);const zo={};k&2&&(zo.$$scope={dirty:k,ctx:s}),pn.$set(zo);const Xi={};k&2&&(Xi.$$scope={dirty:k,ctx:s}),un.$set(Xi);const Hi={};k&2&&(Hi.$$scope={dirty:k,ctx:s}),mn.$set(Hi);const wa={};k&2&&(wa.$$scope={dirty:k,ctx:s}),fn.$set(wa);const Qi={};k&2&&(Qi.$$scope={dirty:k,ctx:s}),gn.$set(Qi);const Bi={};k&2&&(Bi.$$scope={dirty:k,ctx:s}),bn.$set(Bi);const Ui={};k&2&&(Ui.$$scope={dirty:k,ctx:s}),kn.$set(Ui);const Wt={};k&2&&(Wt.$$scope={dirty:k,ctx:s}),wn.$set(Wt);const Ri={};k&2&&(Ri.$$scope={dirty:k,ctx:s}),Tn.$set(Ri);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:s}),vn.$set(Xt);const Ki={};k&2&&(Ki.$$scope={dirty:k,ctx:s}),Fn.$set(Ki);const Vi={};k&2&&(Vi.$$scope={dirty:k,ctx:s}),$n.$set(Vi);const Ht={};k&2&&(Ht.$$scope={dirty:k,ctx:s}),xn.$set(Ht);const Yi={};k&2&&(Yi.$$scope={dirty:k,ctx:s}),En.$set(Yi);const Gi={};k&2&&(Gi.$$scope={dirty:k,ctx:s}),zn.$set(Gi);const Ji={};k&2&&(Ji.$$scope={dirty:k,ctx:s}),Cn.$set(Ji)},i(s){$l||($(d.$$.fragment,s),$(y.$$.fragment,s),$(de.$$.fragment,s),$(ce.$$.fragment,s),$(Oe.$$.fragment,s),$(Sn.$$.fragment,s),$(In.$$.fragment,s),$(Wn.$$.fragment,s),$(Bn.$$.fragment,s),$(qo.$$.fragment,s),$(jo.$$.fragment,s),$(Un.$$.fragment,s),$(Rn.$$.fragment,s),$(Jn.$$.fragment,s),$(Po.$$.fragment,s),$(Ao.$$.fragment,s),$(No.$$.fragment,s),$(Zn.$$.fragment,s),$(es.$$.fragment,s),$(as.$$.fragment,s),$(Oo.$$.fragment,s),$(Do.$$.fragment,s),$(Io.$$.fragment,s),$(Wo.$$.fragment,s),$(Xo.$$.fragment,s),$(rs.$$.fragment,s),$(is.$$.fragment,s),$(hs.$$.fragment,s),$(Qo.$$.fragment,s),$(Bo.$$.fragment,s),$(us.$$.fragment,s),$(ms.$$.fragment,s),$(ks.$$.fragment,s),$(Ro.$$.fragment,s),$(Ko.$$.fragment,s),$(Vo.$$.fragment,s),$(ws.$$.fragment,s),$(ys.$$.fragment,s),$(Ms.$$.fragment,s),$(Go.$$.fragment,s),$(Jo.$$.fragment,s),$(Zo.$$.fragment,s),$(xs.$$.fragment,s),$(Es.$$.fragment,s),$(Ls.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(Ps.$$.fragment,s),$(As.$$.fragment,s),$(sn.$$.fragment,s),$(Ds.$$.fragment,s),$(an.$$.fragment,s),$(rn.$$.fragment,s),$(Is.$$.fragment,s),$(Ws.$$.fragment,s),$(dn.$$.fragment,s),$(Bs.$$.fragment,s),$(cn.$$.fragment,s),$(pn.$$.fragment,s),$(Us.$$.fragment,s),$(Rs.$$.fragment,s),$(un.$$.fragment,s),$(Gs.$$.fragment,s),$(mn.$$.fragment,s),$(fn.$$.fragment,s),$(gn.$$.fragment,s),$(Js.$$.fragment,s),$(Zs.$$.fragment,s),$(bn.$$.fragment,s),$(na.$$.fragment,s),$(kn.$$.fragment,s),$(wn.$$.fragment,s),$(sa.$$.fragment,s),$(aa.$$.fragment,s),$(Tn.$$.fragment,s),$(da.$$.fragment,s),$(vn.$$.fragment,s),$(Fn.$$.fragment,s),$($n.$$.fragment,s),$(ca.$$.fragment,s),$(pa.$$.fragment,s),$(xn.$$.fragment,s),$(fa.$$.fragment,s),$(En.$$.fragment,s),$(zn.$$.fragment,s),$(Cn.$$.fragment,s),$l=!0)},o(s){M(d.$$.fragment,s),M(y.$$.fragment,s),M(de.$$.fragment,s),M(ce.$$.fragment,s),M(Oe.$$.fragment,s),M(Sn.$$.fragment,s),M(In.$$.fragment,s),M(Wn.$$.fragment,s),M(Bn.$$.fragment,s),M(qo.$$.fragment,s),M(jo.$$.fragment,s),M(Un.$$.fragment,s),M(Rn.$$.fragment,s),M(Jn.$$.fragment,s),M(Po.$$.fragment,s),M(Ao.$$.fragment,s),M(No.$$.fragment,s),M(Zn.$$.fragment,s),M(es.$$.fragment,s),M(as.$$.fragment,s),M(Oo.$$.fragment,s),M(Do.$$.fragment,s),M(Io.$$.fragment,s),M(Wo.$$.fragment,s),M(Xo.$$.fragment,s),M(rs.$$.fragment,s),M(is.$$.fragment,s),M(hs.$$.fragment,s),M(Qo.$$.fragment,s),M(Bo.$$.fragment,s),M(us.$$.fragment,s),M(ms.$$.fragment,s),M(ks.$$.fragment,s),M(Ro.$$.fragment,s),M(Ko.$$.fragment,s),M(Vo.$$.fragment,s),M(ws.$$.fragment,s),M(ys.$$.fragment,s),M(Ms.$$.fragment,s),M(Go.$$.fragment,s),M(Jo.$$.fragment,s),M(Zo.$$.fragment,s),M(xs.$$.fragment,s),M(Es.$$.fragment,s),M(Ls.$$.fragment,s),M(tn.$$.fragment,s),M(on.$$.fragment,s),M(Ps.$$.fragment,s),M(As.$$.fragment,s),M(sn.$$.fragment,s),M(Ds.$$.fragment,s),M(an.$$.fragment,s),M(rn.$$.fragment,s),M(Is.$$.fragment,s),M(Ws.$$.fragment,s),M(dn.$$.fragment,s),M(Bs.$$.fragment,s),M(cn.$$.fragment,s),M(pn.$$.fragment,s),M(Us.$$.fragment,s),M(Rs.$$.fragment,s),M(un.$$.fragment,s),M(Gs.$$.fragment,s),M(mn.$$.fragment,s),M(fn.$$.fragment,s),M(gn.$$.fragment,s),M(Js.$$.fragment,s),M(Zs.$$.fragment,s),M(bn.$$.fragment,s),M(na.$$.fragment,s),M(kn.$$.fragment,s),M(wn.$$.fragment,s),M(sa.$$.fragment,s),M(aa.$$.fragment,s),M(Tn.$$.fragment,s),M(da.$$.fragment,s),M(vn.$$.fragment,s),M(Fn.$$.fragment,s),M($n.$$.fragment,s),M(ca.$$.fragment,s),M(pa.$$.fragment,s),M(xn.$$.fragment,s),M(fa.$$.fragment,s),M(En.$$.fragment,s),M(zn.$$.fragment,s),M(Cn.$$.fragment,s),$l=!1},d(s){t(l),s&&t(_),s&&t(c),x(d),s&&t(fe),s&&t(O),x(y),s&&t(ge),s&&t(I),s&&t(_e),s&&t(W),s&&t(be),s&&t(X),s&&t(ee),s&&t(j),s&&t(ke),s&&t(L),x(de),s&&t(we),s&&t(N),x(ce),s&&t(R),s&&t(Ne),x(Oe),s&&t(te),s&&t(pe),x(Sn),s&&t(Zi),s&&t(Gt),x(In),s&&t(el),s&&t(ht),x(Wn),x(Bn),x(qo),x(jo),s&&t(tl),s&&t(Zt),x(Un),s&&t(ol),s&&t(Ze),x(Rn),x(Jn),x(Po),x(Ao),x(No),s&&t(nl),s&&t(to),x(Zn),s&&t(sl),s&&t(et),x(es),x(as),x(Oo),x(Do),x(Io),x(Wo),x(Xo),s&&t(al),s&&t(no),x(rs),s&&t(rl),s&&t(tt),x(is),x(hs),x(Qo),x(Bo),s&&t(il),s&&t(ao),x(us),s&&t(ll),s&&t(ot),x(ms),x(ks),x(Ro),x(Ko),x(Vo),s&&t(dl),s&&t(io),x(ws),s&&t(cl),s&&t(nt),x(ys),x(Ms),x(Go),x(Jo),x(Zo),s&&t(pl),s&&t(po),x(xs),s&&t(hl),s&&t(st),x(Es),x(Ls),x(tn),x(on),s&&t(ul),s&&t(mo),x(Ps),s&&t(ml),s&&t(at),x(As),x(sn),x(Ds),x(an),x(rn),s&&t(fl),s&&t(go),x(Is),s&&t(gl),s&&t(rt),x(Ws),x(dn),x(Bs),x(cn),x(pn),s&&t(_l),s&&t(bo),x(Us),s&&t(bl),s&&t(it),x(Rs),x(un),x(Gs),x(mn),x(fn),x(gn),s&&t(kl),s&&t(wo),x(Js),s&&t(wl),s&&t(lt),x(Zs),x(bn),x(na),x(kn),x(wn),s&&t(yl),s&&t(To),x(sa),s&&t(Tl),s&&t(dt),x(aa),x(Tn),x(da),x(vn),x(Fn),x($n),s&&t(vl),s&&t(Fo),x(ca),s&&t(Fl),s&&t(ct),x(pa),x(xn),x(fa),x(En),x(zn),x(Cn)}}}const Xb={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function Hb(z){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yb extends V_{constructor(l){super();Y_(this,l,Hb,Wb,G_,{})}}export{Yb as default,Xb as metadata};
