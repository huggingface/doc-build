import{S as Xk,i as Ek,s as qk,e as a,k as m,w,t as o,M as Ck,c as r,d as t,m as h,a as i,x as T,h as n,b as f,G as e,g as b,y,q as M,o as $,B as L,v as zk,L as De}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function jk(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMConfig, XLMModel

# Initializing a XLM configuration
configuration = XLMConfig()

# Initializing a model from the configuration
model = XLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMConfig, XLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=o("Examples:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Examples:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Pk(X){let d,g,c,u,v;return u=new Ie({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=o("pair mask has the following format:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"pair mask has the following format:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Ak(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function Ok(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Nk(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function Sk(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Dk(X){let d,g;return d=new Ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Ik(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function Wk(X){let d,g,c,u,v;return u=new Ie({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=o("Example of single-label classification:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Hk(X){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Qk(X){let d,g,c,u,v;return u=new Ie({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=o("Example of multi-label classification:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Bk(X){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Uk(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function Rk(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Kk(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function Vk(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Yk(X){let d,g;return d=new Ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Gk(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function Jk(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Zk(X){let d,g;return d=new Ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function ev(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function tv(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function ov(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),ve=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),D=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ye=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),S=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),C=a("ul"),P=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),be=o("model([input_ids, attention_mask])"),ie=o(" or "),U=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),A=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),z=a("p"),ze=o(`Note that when creating models and layers with
`),O=a("a"),ke=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),v=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Ae=i(q);ve=n(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),he=h(se),D=r(se,"LI",{});var Ue=i(D);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(E,"CODE",{});var He=i(B);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ye=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Pe=i(V);Me=n(Pe,"fit()"),Pe.forEach(t),fe=n(E," and "),S=r(E,"CODE",{});var We=i(S);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Oe=i(Y);pe=n(Oe,"Functional"),Oe.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),C=r(_,"UL",{});var I=i(C);P=r(I,"LI",{});var K=i(P);ge=n(K,"a single Tensor with "),H=r(K,"CODE",{});var Re=i(H);xe=n(Re,"input_ids"),Re.forEach(t),_e=n(K," only and nothing else: "),Q=r(K,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),K.forEach(t),Fe=h(I),j=r(I,"LI",{});var N=i(j);de=n(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(N,"CODE",{});var Ne=i(G);be=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ie=n(N," or "),U=r(N,"CODE",{});var Ke=i(U);Xe=n(Ke,"model([input_ids, attention_mask, token_type_ids])"),Ke.forEach(t),N.forEach(t),Ee=h(I),A=r(I,"LI",{});var ee=i(A);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ee,"CODE",{});var Ve=i(R);Ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),z=r(_,"P",{});var J=i(z);ze=n(J,`Note that when creating models and layers with
`),O=r(J,"A",{href:!0,rel:!0});var Ye=i(O);ke=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(_,F){b(_,d,F),e(d,g),e(d,c),e(c,u),e(d,v),b(_,l,F),b(_,p,F),e(p,q),e(q,ve),e(p,he),e(p,D),e(D,re),b(_,Z,F),b(_,x,F),e(x,we),e(x,B),e(B,Te),e(x,ue),e(x,W),e(W,ye),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,S),e(S,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),b(_,oe,F),b(_,C,F),e(C,P),e(P,ge),e(P,H),e(H,xe),e(P,_e),e(P,Q),e(Q,me),e(C,Fe),e(C,j),e(j,de),e(j,G),e(G,be),e(j,ie),e(j,U),e(U,Xe),e(C,Ee),e(C,A),e(A,qe),e(A,R),e(R,Ce),b(_,ne,F),b(_,z,F),e(z,ze),e(z,O),e(O,ke),e(z,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(C),_&&t(ne),_&&t(z)}}}function nv(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function sv(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMModel
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function av(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),ve=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),D=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ye=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),S=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),C=a("ul"),P=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),be=o("model([input_ids, attention_mask])"),ie=o(" or "),U=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),A=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),z=a("p"),ze=o(`Note that when creating models and layers with
`),O=a("a"),ke=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),v=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Ae=i(q);ve=n(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),he=h(se),D=r(se,"LI",{});var Ue=i(D);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(E,"CODE",{});var He=i(B);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ye=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Pe=i(V);Me=n(Pe,"fit()"),Pe.forEach(t),fe=n(E," and "),S=r(E,"CODE",{});var We=i(S);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Oe=i(Y);pe=n(Oe,"Functional"),Oe.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),C=r(_,"UL",{});var I=i(C);P=r(I,"LI",{});var K=i(P);ge=n(K,"a single Tensor with "),H=r(K,"CODE",{});var Re=i(H);xe=n(Re,"input_ids"),Re.forEach(t),_e=n(K," only and nothing else: "),Q=r(K,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),K.forEach(t),Fe=h(I),j=r(I,"LI",{});var N=i(j);de=n(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(N,"CODE",{});var Ne=i(G);be=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ie=n(N," or "),U=r(N,"CODE",{});var Ke=i(U);Xe=n(Ke,"model([input_ids, attention_mask, token_type_ids])"),Ke.forEach(t),N.forEach(t),Ee=h(I),A=r(I,"LI",{});var ee=i(A);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ee,"CODE",{});var Ve=i(R);Ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),z=r(_,"P",{});var J=i(z);ze=n(J,`Note that when creating models and layers with
`),O=r(J,"A",{href:!0,rel:!0});var Ye=i(O);ke=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(_,F){b(_,d,F),e(d,g),e(d,c),e(c,u),e(d,v),b(_,l,F),b(_,p,F),e(p,q),e(q,ve),e(p,he),e(p,D),e(D,re),b(_,Z,F),b(_,x,F),e(x,we),e(x,B),e(B,Te),e(x,ue),e(x,W),e(W,ye),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,S),e(S,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),b(_,oe,F),b(_,C,F),e(C,P),e(P,ge),e(P,H),e(H,xe),e(P,_e),e(P,Q),e(Q,me),e(C,Fe),e(C,j),e(j,de),e(j,G),e(G,be),e(j,ie),e(j,U),e(U,Xe),e(C,Ee),e(C,A),e(A,qe),e(A,R),e(R,Ce),b(_,ne,F),b(_,z,F),e(z,ze),e(z,O),e(O,ke),e(z,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(C),_&&t(ne),_&&t(z)}}}function rv(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function iv(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMWithLMHeadModel
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function lv(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),ve=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),D=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ye=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),S=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),C=a("ul"),P=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),be=o("model([input_ids, attention_mask])"),ie=o(" or "),U=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),A=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),z=a("p"),ze=o(`Note that when creating models and layers with
`),O=a("a"),ke=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),v=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Ae=i(q);ve=n(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),he=h(se),D=r(se,"LI",{});var Ue=i(D);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(E,"CODE",{});var He=i(B);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ye=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Pe=i(V);Me=n(Pe,"fit()"),Pe.forEach(t),fe=n(E," and "),S=r(E,"CODE",{});var We=i(S);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Oe=i(Y);pe=n(Oe,"Functional"),Oe.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),C=r(_,"UL",{});var I=i(C);P=r(I,"LI",{});var K=i(P);ge=n(K,"a single Tensor with "),H=r(K,"CODE",{});var Re=i(H);xe=n(Re,"input_ids"),Re.forEach(t),_e=n(K," only and nothing else: "),Q=r(K,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),K.forEach(t),Fe=h(I),j=r(I,"LI",{});var N=i(j);de=n(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(N,"CODE",{});var Ne=i(G);be=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ie=n(N," or "),U=r(N,"CODE",{});var Ke=i(U);Xe=n(Ke,"model([input_ids, attention_mask, token_type_ids])"),Ke.forEach(t),N.forEach(t),Ee=h(I),A=r(I,"LI",{});var ee=i(A);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ee,"CODE",{});var Ve=i(R);Ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),z=r(_,"P",{});var J=i(z);ze=n(J,`Note that when creating models and layers with
`),O=r(J,"A",{href:!0,rel:!0});var Ye=i(O);ke=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(_,F){b(_,d,F),e(d,g),e(d,c),e(c,u),e(d,v),b(_,l,F),b(_,p,F),e(p,q),e(q,ve),e(p,he),e(p,D),e(D,re),b(_,Z,F),b(_,x,F),e(x,we),e(x,B),e(B,Te),e(x,ue),e(x,W),e(W,ye),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,S),e(S,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),b(_,oe,F),b(_,C,F),e(C,P),e(P,ge),e(P,H),e(H,xe),e(P,_e),e(P,Q),e(Q,me),e(C,Fe),e(C,j),e(j,de),e(j,G),e(G,be),e(j,ie),e(j,U),e(U,Xe),e(C,Ee),e(C,A),e(A,qe),e(A,R),e(R,Ce),b(_,ne,F),b(_,z,F),e(z,ze),e(z,O),e(O,ke),e(z,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(C),_&&t(ne),_&&t(z)}}}function dv(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function cv(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function pv(X){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function mv(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),ve=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),D=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ye=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),S=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),C=a("ul"),P=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),be=o("model([input_ids, attention_mask])"),ie=o(" or "),U=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),A=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),z=a("p"),ze=o(`Note that when creating models and layers with
`),O=a("a"),ke=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),v=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Ae=i(q);ve=n(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),he=h(se),D=r(se,"LI",{});var Ue=i(D);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(E,"CODE",{});var He=i(B);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ye=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Pe=i(V);Me=n(Pe,"fit()"),Pe.forEach(t),fe=n(E," and "),S=r(E,"CODE",{});var We=i(S);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Oe=i(Y);pe=n(Oe,"Functional"),Oe.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),C=r(_,"UL",{});var I=i(C);P=r(I,"LI",{});var K=i(P);ge=n(K,"a single Tensor with "),H=r(K,"CODE",{});var Re=i(H);xe=n(Re,"input_ids"),Re.forEach(t),_e=n(K," only and nothing else: "),Q=r(K,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),K.forEach(t),Fe=h(I),j=r(I,"LI",{});var N=i(j);de=n(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(N,"CODE",{});var Ne=i(G);be=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ie=n(N," or "),U=r(N,"CODE",{});var Ke=i(U);Xe=n(Ke,"model([input_ids, attention_mask, token_type_ids])"),Ke.forEach(t),N.forEach(t),Ee=h(I),A=r(I,"LI",{});var ee=i(A);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ee,"CODE",{});var Ve=i(R);Ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),z=r(_,"P",{});var J=i(z);ze=n(J,`Note that when creating models and layers with
`),O=r(J,"A",{href:!0,rel:!0});var Ye=i(O);ke=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(_,F){b(_,d,F),e(d,g),e(d,c),e(c,u),e(d,v),b(_,l,F),b(_,p,F),e(p,q),e(q,ve),e(p,he),e(p,D),e(D,re),b(_,Z,F),b(_,x,F),e(x,we),e(x,B),e(B,Te),e(x,ue),e(x,W),e(W,ye),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,S),e(S,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),b(_,oe,F),b(_,C,F),e(C,P),e(P,ge),e(P,H),e(H,xe),e(P,_e),e(P,Q),e(Q,me),e(C,Fe),e(C,j),e(j,de),e(j,G),e(G,be),e(j,ie),e(j,U),e(U,Xe),e(C,Ee),e(C,A),e(A,qe),e(A,R),e(R,Ce),b(_,ne,F),b(_,z,F),e(z,ze),e(z,O),e(O,ke),e(z,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(C),_&&t(ne),_&&t(z)}}}function hv(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function uv(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function fv(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),ve=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),D=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ye=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),S=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),C=a("ul"),P=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),be=o("model([input_ids, attention_mask])"),ie=o(" or "),U=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),A=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),z=a("p"),ze=o(`Note that when creating models and layers with
`),O=a("a"),ke=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),v=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Ae=i(q);ve=n(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),he=h(se),D=r(se,"LI",{});var Ue=i(D);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(E,"CODE",{});var He=i(B);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ye=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Pe=i(V);Me=n(Pe,"fit()"),Pe.forEach(t),fe=n(E," and "),S=r(E,"CODE",{});var We=i(S);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Oe=i(Y);pe=n(Oe,"Functional"),Oe.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),C=r(_,"UL",{});var I=i(C);P=r(I,"LI",{});var K=i(P);ge=n(K,"a single Tensor with "),H=r(K,"CODE",{});var Re=i(H);xe=n(Re,"input_ids"),Re.forEach(t),_e=n(K," only and nothing else: "),Q=r(K,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),K.forEach(t),Fe=h(I),j=r(I,"LI",{});var N=i(j);de=n(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(N,"CODE",{});var Ne=i(G);be=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ie=n(N," or "),U=r(N,"CODE",{});var Ke=i(U);Xe=n(Ke,"model([input_ids, attention_mask, token_type_ids])"),Ke.forEach(t),N.forEach(t),Ee=h(I),A=r(I,"LI",{});var ee=i(A);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ee,"CODE",{});var Ve=i(R);Ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),z=r(_,"P",{});var J=i(z);ze=n(J,`Note that when creating models and layers with
`),O=r(J,"A",{href:!0,rel:!0});var Ye=i(O);ke=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(_,F){b(_,d,F),e(d,g),e(d,c),e(c,u),e(d,v),b(_,l,F),b(_,p,F),e(p,q),e(q,ve),e(p,he),e(p,D),e(D,re),b(_,Z,F),b(_,x,F),e(x,we),e(x,B),e(B,Te),e(x,ue),e(x,W),e(W,ye),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,S),e(S,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),b(_,oe,F),b(_,C,F),e(C,P),e(P,ge),e(P,H),e(H,xe),e(P,_e),e(P,Q),e(Q,me),e(C,Fe),e(C,j),e(j,de),e(j,G),e(G,be),e(j,ie),e(j,U),e(U,Xe),e(C,Ee),e(C,A),e(A,qe),e(A,R),e(R,Ce),b(_,ne,F),b(_,z,F),e(z,ze),e(z,O),e(O,ke),e(z,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(C),_&&t(ne),_&&t(z)}}}function gv(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function _v(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function bv(X){let d,g;return d=new Ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function kv(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),ve=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),D=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ye=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),S=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),C=a("ul"),P=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),be=o("model([input_ids, attention_mask])"),ie=o(" or "),U=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),A=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),z=a("p"),ze=o(`Note that when creating models and layers with
`),O=a("a"),ke=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),v=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Ae=i(q);ve=n(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),he=h(se),D=r(se,"LI",{});var Ue=i(D);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(E,"CODE",{});var He=i(B);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ye=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Pe=i(V);Me=n(Pe,"fit()"),Pe.forEach(t),fe=n(E," and "),S=r(E,"CODE",{});var We=i(S);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Oe=i(Y);pe=n(Oe,"Functional"),Oe.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),C=r(_,"UL",{});var I=i(C);P=r(I,"LI",{});var K=i(P);ge=n(K,"a single Tensor with "),H=r(K,"CODE",{});var Re=i(H);xe=n(Re,"input_ids"),Re.forEach(t),_e=n(K," only and nothing else: "),Q=r(K,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),K.forEach(t),Fe=h(I),j=r(I,"LI",{});var N=i(j);de=n(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(N,"CODE",{});var Ne=i(G);be=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ie=n(N," or "),U=r(N,"CODE",{});var Ke=i(U);Xe=n(Ke,"model([input_ids, attention_mask, token_type_ids])"),Ke.forEach(t),N.forEach(t),Ee=h(I),A=r(I,"LI",{});var ee=i(A);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ee,"CODE",{});var Ve=i(R);Ce=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),z=r(_,"P",{});var J=i(z);ze=n(J,`Note that when creating models and layers with
`),O=r(J,"A",{href:!0,rel:!0});var Ye=i(O);ke=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(_,F){b(_,d,F),e(d,g),e(d,c),e(c,u),e(d,v),b(_,l,F),b(_,p,F),e(p,q),e(q,ve),e(p,he),e(p,D),e(D,re),b(_,Z,F),b(_,x,F),e(x,we),e(x,B),e(B,Te),e(x,ue),e(x,W),e(W,ye),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,S),e(S,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),b(_,oe,F),b(_,C,F),e(C,P),e(P,ge),e(P,H),e(H,xe),e(P,_e),e(P,Q),e(Q,me),e(C,Fe),e(C,j),e(j,de),e(j,G),e(G,be),e(j,ie),e(j,U),e(U,Xe),e(C,Ee),e(C,A),e(A,qe),e(A,R),e(R,Ce),b(_,ne,F),b(_,z,F),e(z,ze),e(z,O),e(O,ke),e(z,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(C),_&&t(ne),_&&t(z)}}}function vv(X){let d,g,c,u,v;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function wv(X){let d,g,c,u,v;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){b(l,d,p),e(d,g),b(l,c,p),y(u,l,p),v=!0},p:De,i(l){v||(M(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Tv(X){let d,g;return d=new Ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function yv(X){let d,g,c,u,v,l,p,q,ve,he,D,re,Z,x,we,B,Te,ue,W,ye,le,V,Me,fe,S,ce,$e,Y,pe,Le,oe,C,P,ge,H,xe,_e,Q,me,Fe,j,de,G,be,ie,U,Xe,Ee,A,qe,R,Ce,ne,z,ze,O,ke,te,_,F,Be,se,Ae,Ue,E,He,je,Pe,We,Oe,I,K,Re,Qe,N,Ne,Ke,ee,Ve,J,Ye,cc,Qa,pc,mc,Zn,hc,uc,fc,eo,gc,Ba,_c,bc,Ua,kc,vc,wc,So,Sl,to,Do,Ir,es,Tc,Wr,yc,Dl,Ge,ts,Mc,Hr,$c,Lc,lt,Qr,xc,Fc,Br,Xc,Ec,Ur,qc,Cc,Ot,zc,Rr,jc,Pc,Kr,Ac,Oc,Vr,Nc,Sc,Dc,os,Ic,Yr,Wc,Hc,Qc,ns,Bc,Gr,Uc,Rc,Kc,ss,Vc,Ra,Yc,Gc,Jc,Dt,as,Zc,Jr,ep,tp,rs,Ka,op,Zr,np,sp,Va,ap,ei,rp,ip,Io,is,lp,ls,dp,ti,cp,pp,mp,yt,ds,hp,oi,up,fp,Wo,gp,oo,_p,ni,bp,kp,si,vp,wp,Tp,Ya,cs,Il,no,Ho,ai,ps,yp,ri,Mp,Wl,so,ms,$p,hs,Lp,ii,xp,Fp,Hl,ao,Qo,li,us,Xp,di,Ep,Ql,dt,fs,qp,ci,Cp,zp,gs,jp,Ga,Pp,Ap,Op,_s,Np,bs,Sp,Dp,Ip,Mt,ks,Wp,ro,Hp,Ja,Qp,Bp,pi,Up,Rp,Kp,Bo,Vp,Uo,Bl,io,Ro,mi,vs,Yp,hi,Gp,Ul,ct,ws,Jp,ui,Zp,em,Ts,tm,Za,om,nm,sm,ys,am,Ms,rm,im,lm,gt,$s,dm,lo,cm,er,pm,mm,fi,hm,um,fm,Ko,gm,Vo,_m,Yo,Rl,co,Go,gi,Ls,bm,_i,km,Kl,pt,xs,vm,bi,wm,Tm,Fs,ym,tr,Mm,$m,Lm,Xs,xm,Es,Fm,Xm,Em,et,qs,qm,po,Cm,or,zm,jm,ki,Pm,Am,Om,Jo,Nm,Zo,Sm,en,Dm,tn,Im,on,Vl,mo,nn,vi,Cs,Wm,wi,Hm,Yl,mt,zs,Qm,Ti,Bm,Um,js,Rm,nr,Km,Vm,Ym,Ps,Gm,As,Jm,Zm,eh,$t,Os,th,ho,oh,sr,nh,sh,yi,ah,rh,ih,sn,lh,an,Gl,uo,rn,Mi,Ns,dh,$i,ch,Jl,ht,Ss,ph,Li,mh,hh,Ds,uh,ar,fh,gh,_h,Is,bh,Ws,kh,vh,wh,_t,Hs,Th,fo,yh,rr,Mh,$h,xi,Lh,xh,Fh,ln,Xh,dn,Eh,cn,Zl,go,pn,Fi,Qs,qh,Xi,Ch,ed,ut,Bs,zh,_o,jh,Ei,Ph,Ah,qi,Oh,Nh,Sh,Us,Dh,ir,Ih,Wh,Hh,Rs,Qh,Ks,Bh,Uh,Rh,bt,Vs,Kh,bo,Vh,lr,Yh,Gh,Ci,Jh,Zh,eu,mn,tu,hn,ou,un,td,ko,fn,zi,Ys,nu,ji,su,od,ft,Gs,au,vo,ru,Pi,iu,lu,Ai,du,cu,pu,Js,mu,dr,hu,uu,fu,Zs,gu,ea,_u,bu,ku,Lt,ta,vu,wo,wu,cr,Tu,yu,Oi,Mu,$u,Lu,gn,xu,_n,nd,To,bn,Ni,oa,Fu,Si,Xu,sd,ot,na,Eu,Di,qu,Cu,sa,zu,pr,ju,Pu,Au,aa,Ou,ra,Nu,Su,Du,kn,Iu,xt,ia,Wu,yo,Hu,mr,Qu,Bu,Ii,Uu,Ru,Ku,vn,Vu,wn,ad,Mo,Tn,Wi,la,Yu,Hi,Gu,rd,nt,da,Ju,Qi,Zu,ef,ca,tf,hr,of,nf,sf,pa,af,ma,rf,lf,df,yn,cf,Ft,ha,pf,$o,mf,ur,hf,uf,Bi,ff,gf,_f,Mn,bf,$n,id,Lo,Ln,Ui,ua,kf,Ri,vf,ld,st,fa,wf,Ki,Tf,yf,ga,Mf,fr,$f,Lf,xf,_a,Ff,ba,Xf,Ef,qf,xn,Cf,kt,ka,zf,xo,jf,gr,Pf,Af,Vi,Of,Nf,Sf,Fn,Df,Xn,If,En,dd,Fo,qn,Yi,va,Wf,Gi,Hf,cd,at,wa,Qf,Ji,Bf,Uf,Ta,Rf,_r,Kf,Vf,Yf,ya,Gf,Ma,Jf,Zf,eg,Cn,tg,Xt,$a,og,Xo,ng,br,sg,ag,Zi,rg,ig,lg,zn,dg,jn,pd,Eo,Pn,el,La,cg,tl,pg,md,rt,xa,mg,ol,hg,ug,Fa,fg,kr,gg,_g,bg,Xa,kg,Ea,vg,wg,Tg,An,yg,vt,qa,Mg,qo,$g,vr,Lg,xg,nl,Fg,Xg,Eg,On,qg,Nn,Cg,Sn,hd,Co,Dn,sl,Ca,zg,al,jg,ud,it,za,Pg,zo,Ag,rl,Og,Ng,il,Sg,Dg,Ig,ja,Wg,wr,Hg,Qg,Bg,Pa,Ug,Aa,Rg,Kg,Vg,In,Yg,wt,Oa,Gg,jo,Jg,Tr,Zg,e_,ll,t_,o_,n_,Wn,s_,Hn,a_,Qn,fd;return l=new tt({}),x=new tt({}),Oe=new tt({}),Ne=new ae({props:{name:"class transformers.XLMConfig",anchor:"transformers.XLMConfig",parameters:[{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMModel">XLMModel</a> or <a href="/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMModel">TFXLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"emb_dim"},{anchor:"transformers.XLMConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.XLMConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.XLMConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention mechanism`,name:"attention_dropout"},{anchor:"transformers.XLMConfig.gelu_activation",description:`<strong>gelu_activation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use <em>gelu</em> for the activations instead of <em>relu</em>.`,name:"gelu_activation"},{anchor:"transformers.XLMConfig.sinusoidal_embeddings",description:`<strong>sinusoidal_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sinusoidal positional embeddings instead of absolute positional embeddings.`,name:"sinusoidal_embeddings"},{anchor:"transformers.XLMConfig.causal",description:`<strong>causal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should behave in a causal manner. Causal models use a triangular attention mask in
order to only attend to the left-side context instead if a bidirectional context.`,name:"causal"},{anchor:"transformers.XLMConfig.asm",description:`<strong>asm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use an adaptive log softmax projection layer instead of a linear layer for the prediction
layer.`,name:"asm"},{anchor:"transformers.XLMConfig.n_langs",description:`<strong>n_langs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of languages the model handles. Set to 1 for monolingual models.`,name:"n_langs"},{anchor:"transformers.XLMConfig.use_lang_emb",description:`<strong>use_lang_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use language embeddings. Some models use additional language embeddings, see <a href="http://huggingface.co/transformers/multilingual.html#xlm-language-embeddings" rel="nofollow">the multilingual
models page</a> for information
on how to use them.`,name:"use_lang_emb"},{anchor:"transformers.XLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMConfig.embed_init_std",description:`<strong>embed_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 2048^-0.5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing the embedding matrices.`,name:"embed_init_std"},{anchor:"transformers.XLMConfig.init_std",description:`<strong>init_std</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices except the
embedding matrices.`,name:"init_std"},{anchor:"transformers.XLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMConfig.bos_index",description:`<strong>bos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the beginning of sentence token in the vocabulary.`,name:"bos_index"},{anchor:"transformers.XLMConfig.eos_index",description:`<strong>eos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The index of the end of sentence token in the vocabulary.`,name:"eos_index"},{anchor:"transformers.XLMConfig.pad_index",description:`<strong>pad_index</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The index of the padding token in the vocabulary.`,name:"pad_index"},{anchor:"transformers.XLMConfig.unk_index",description:`<strong>unk_index</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The index of the unknown token in the vocabulary.`,name:"unk_index"},{anchor:"transformers.XLMConfig.mask_index",description:`<strong>mask_index</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
The index of the masking token in the vocabulary.`,name:"mask_index"},{anchor:"transformers.XLMConfig.is_encoder(bool,",description:`<strong>is_encoder(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the initialized model should be a transformer encoder or decoder as seen in Vaswani et al.`,name:"is_encoder(bool,"},{anchor:"transformers.XLMConfig.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201C;first&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.XLMConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.XLMConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.XLMConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.XLMConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.XLMConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.XLMConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.XLMConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Model agnostic parameter to identify masked tokens when generating text in an MLM context.`,name:"mask_token_id"},{anchor:"transformers.XLMConfig.lang_id",description:`<strong>lang_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/configuration_xlm.py#L40"}}),So=new Se({props:{anchor:"transformers.XLMConfig.example",$$slots:{default:[jk]},$$scope:{ctx:X}}}),es=new tt({}),ts=new ae({props:{name:"class transformers.XLMTokenizer",anchor:"transformers.XLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"do_lowercase_and_remove_accent",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Merges file.`,name:"merges_file"},{anchor:"transformers.XLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;special1&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;special0&gt;&quot;,&quot;&lt;special1&gt;&quot;,&quot;&lt;special2&gt;&quot;,&quot;&lt;special3&gt;&quot;,&quot;&lt;special4&gt;&quot;,&quot;&lt;special5&gt;&quot;,&quot;&lt;special6&gt;&quot;,&quot;&lt;special7&gt;&quot;,&quot;&lt;special8&gt;&quot;,&quot;&lt;special9&gt;&quot;]</code>) &#x2014;
List of additional special tokens.`,name:"additional_special_tokens"},{anchor:"transformers.XLMTokenizer.lang2id",description:`<strong>lang2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) &#x2014;
Dictionary mapping languages string identifiers to their IDs.`,name:"lang2id"},{anchor:"transformers.XLMTokenizer.id2lang",description:`<strong>id2lang</strong> (<code>Dict[int, str]</code>, <em>optional</em>) &#x2014;
Dictionary mapping language IDs to their string identifiers.`,name:"id2lang"},{anchor:"transformers.XLMTokenizer.do_lowercase_and_remove_accent",description:`<strong>do_lowercase_and_remove_accent</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase and remove accents when tokenizing.`,name:"do_lowercase_and_remove_accent"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/tokenization_xlm.py#L528"}}),as=new ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/tokenization_xlm.py#L871",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new ae({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/tokenization_xlm.py#L898",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/tokenization_xlm.py#L926",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wo=new Se({props:{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Pk]},$$scope:{ctx:X}}}),cs=new ae({props:{name:"save_vocabulary",anchor:"transformers.XLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/tokenization_xlm.py#L955"}}),ps=new tt({}),ms=new ae({props:{name:"class transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.`,name:"loss"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.start_top_log_probs",description:`<strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_log_probs"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.start_top_index",description:`<strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_index"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.end_top_log_probs",description:`<strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).`,name:"end_top_log_probs"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.end_top_index",description:`<strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).`,name:"end_top_index"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.cls_logits",description:`<strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the <code>is_impossible</code> label of the answers.`,name:"cls_logits"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L264"}}),us=new tt({}),fs=new ae({props:{name:"class transformers.XLMModel",anchor:"transformers.XLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L395"}}),ks=new ae({props:{name:"forward",anchor:"transformers.XLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L482",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),Bo=new Ze({props:{$$slots:{default:[Ak]},$$scope:{ctx:X}}}),Uo=new Se({props:{anchor:"transformers.XLMModel.forward.example",$$slots:{default:[Ok]},$$scope:{ctx:X}}}),vs=new tt({}),ws=new ae({props:{name:"class transformers.XLMWithLMHeadModel",anchor:"transformers.XLMWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L675"}}),$s=new ae({props:{name:"forward",anchor:"transformers.XLMWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMWithLMHeadModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMWithLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMWithLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMWithLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMWithLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMWithLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Ko=new Ze({props:{$$slots:{default:[Nk]},$$scope:{ctx:X}}}),Vo=new Se({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example",$$slots:{default:[Sk]},$$scope:{ctx:X}}}),Yo=new Se({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example-2",$$slots:{default:[Dk]},$$scope:{ctx:X}}}),Ls=new tt({}),xs=new ae({props:{name:"class transformers.XLMForSequenceClassification",anchor:"transformers.XLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L771"}}),qs=new ae({props:{name:"forward",anchor:"transformers.XLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForSequenceClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Jo=new Ze({props:{$$slots:{default:[Ik]},$$scope:{ctx:X}}}),Zo=new Se({props:{anchor:"transformers.XLMForSequenceClassification.forward.example",$$slots:{default:[Wk]},$$scope:{ctx:X}}}),en=new Se({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-2",$$slots:{default:[Hk]},$$scope:{ctx:X}}}),tn=new Se({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-3",$$slots:{default:[Qk]},$$scope:{ctx:X}}}),on=new Se({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-4",$$slots:{default:[Bk]},$$scope:{ctx:X}}}),Cs=new tt({}),zs=new ae({props:{name:"class transformers.XLMForMultipleChoice",anchor:"transformers.XLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1185"}}),Os=new ae({props:{name:"forward",anchor:"transformers.XLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForMultipleChoice.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),sn=new Ze({props:{$$slots:{default:[Uk]},$$scope:{ctx:X}}}),an=new Se({props:{anchor:"transformers.XLMForMultipleChoice.forward.example",$$slots:{default:[Rk]},$$scope:{ctx:X}}}),Ns=new tt({}),Ss=new ae({props:{name:"class transformers.XLMForTokenClassification",anchor:"transformers.XLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1100"}}),Hs=new ae({props:{name:"forward",anchor:"transformers.XLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForTokenClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),ln=new Ze({props:{$$slots:{default:[Kk]},$$scope:{ctx:X}}}),dn=new Se({props:{anchor:"transformers.XLMForTokenClassification.forward.example",$$slots:{default:[Vk]},$$scope:{ctx:X}}}),cn=new Se({props:{anchor:"transformers.XLMForTokenClassification.forward.example-2",$$slots:{default:[Yk]},$$scope:{ctx:X}}}),Qs=new tt({}),Bs=new ae({props:{name:"class transformers.XLMForQuestionAnsweringSimple",anchor:"transformers.XLMForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L874"}}),Vs=new ae({props:{name:"forward",anchor:"transformers.XLMForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),mn=new Ze({props:{$$slots:{default:[Gk]},$$scope:{ctx:X}}}),hn=new Se({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example",$$slots:{default:[Jk]},$$scope:{ctx:X}}}),un=new Se({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Zk]},$$scope:{ctx:X}}}),Ys=new tt({}),Gs=new ae({props:{name:"class transformers.XLMForQuestionAnswering",anchor:"transformers.XLMForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L979"}}),ta=new ae({props:{name:"forward",anchor:"transformers.XLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForQuestionAnswering.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForQuestionAnswering.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.XLMForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.XLMForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.XLMForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),gn=new Ze({props:{$$slots:{default:[ev]},$$scope:{ctx:X}}}),_n=new Se({props:{anchor:"transformers.XLMForQuestionAnswering.forward.example",$$slots:{default:[tv]},$$scope:{ctx:X}}}),oa=new tt({}),na=new ae({props:{name:"class transformers.TFXLMModel",anchor:"transformers.TFXLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L687"}}),kn=new Ze({props:{$$slots:{default:[ov]},$$scope:{ctx:X}}}),ia=new ae({props:{name:"call",anchor:"transformers.TFXLMModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L692",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
`}}),vn=new Ze({props:{$$slots:{default:[nv]},$$scope:{ctx:X}}}),wn=new Se({props:{anchor:"transformers.TFXLMModel.call.example",$$slots:{default:[sv]},$$scope:{ctx:X}}}),la=new tt({}),da=new ae({props:{name:"class transformers.TFXLMWithLMHeadModel",anchor:"transformers.TFXLMWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L800"}}),yn=new Ze({props:{$$slots:{default:[av]},$$scope:{ctx:X}}}),ha=new ae({props:{name:"call",anchor:"transformers.TFXLMWithLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMWithLMHeadModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMWithLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMWithLMHeadModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMWithLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMWithLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMWithLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMWithLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMWithLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L829",returnDescription:`
<p>A <code>transformers.models.xlm.modeling_tf_xlm.TFXLMWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
<p><code>transformers.models.xlm.modeling_tf_xlm.TFXLMWithLMHeadModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Mn=new Ze({props:{$$slots:{default:[rv]},$$scope:{ctx:X}}}),$n=new Se({props:{anchor:"transformers.TFXLMWithLMHeadModel.call.example",$$slots:{default:[iv]},$$scope:{ctx:X}}}),ua=new tt({}),fa=new ae({props:{name:"class transformers.TFXLMForSequenceClassification",anchor:"transformers.TFXLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L893"}}),xn=new Ze({props:{$$slots:{default:[lv]},$$scope:{ctx:X}}}),ka=new ae({props:{name:"call",anchor:"transformers.TFXLMForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L901",returnDescription:`
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
`}}),Fn=new Ze({props:{$$slots:{default:[dv]},$$scope:{ctx:X}}}),Xn=new Se({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example",$$slots:{default:[cv]},$$scope:{ctx:X}}}),En=new Se({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example-2",$$slots:{default:[pv]},$$scope:{ctx:X}}}),va=new tt({}),wa=new ae({props:{name:"class transformers.TFXLMForMultipleChoice",anchor:"transformers.TFXLMForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L979"}}),Cn=new Ze({props:{$$slots:{default:[mv]},$$scope:{ctx:X}}}),$a=new ae({props:{name:"call",anchor:"transformers.TFXLMForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1008",returnDescription:`
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
`}}),zn=new Ze({props:{$$slots:{default:[hv]},$$scope:{ctx:X}}}),jn=new Se({props:{anchor:"transformers.TFXLMForMultipleChoice.call.example",$$slots:{default:[uv]},$$scope:{ctx:X}}}),La=new tt({}),xa=new ae({props:{name:"class transformers.TFXLMForTokenClassification",anchor:"transformers.TFXLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1121"}}),An=new Ze({props:{$$slots:{default:[fv]},$$scope:{ctx:X}}}),qa=new ae({props:{name:"call",anchor:"transformers.TFXLMForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1132",returnDescription:`
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
`}}),On=new Ze({props:{$$slots:{default:[gv]},$$scope:{ctx:X}}}),Nn=new Se({props:{anchor:"transformers.TFXLMForTokenClassification.call.example",$$slots:{default:[_v]},$$scope:{ctx:X}}}),Sn=new Se({props:{anchor:"transformers.TFXLMForTokenClassification.call.example-2",$$slots:{default:[bv]},$$scope:{ctx:X}}}),Ca=new tt({}),za=new ae({props:{name:"class transformers.TFXLMForQuestionAnsweringSimple",anchor:"transformers.TFXLMForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1209"}}),In=new Ze({props:{$$slots:{default:[kv]},$$scope:{ctx:X}}}),Oa=new ae({props:{name:"call",anchor:"transformers.TFXLMForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1217",returnDescription:`
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
`}}),Wn=new Ze({props:{$$slots:{default:[vv]},$$scope:{ctx:X}}}),Hn=new Se({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example",$$slots:{default:[wv]},$$scope:{ctx:X}}}),Qn=new Se({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Tv]},$$scope:{ctx:X}}}),{c(){d=a("meta"),g=m(),c=a("h1"),u=a("a"),v=a("span"),w(l.$$.fragment),p=m(),q=a("span"),ve=o("XLM"),he=m(),D=a("h2"),re=a("a"),Z=a("span"),w(x.$$.fragment),we=m(),B=a("span"),Te=o("Overview"),ue=m(),W=a("p"),ye=o("The XLM model was proposed in "),le=a("a"),V=o("Cross-lingual Language Model Pretraining"),Me=o(` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),fe=m(),S=a("ul"),ce=a("li"),$e=o("a causal language modeling (CLM) objective (next token prediction),"),Y=m(),pe=a("li"),Le=o("a masked language modeling (MLM) objective (BERT-like), or"),oe=m(),C=a("li"),P=o("a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),ge=m(),H=a("p"),xe=o("The abstract from the paper is the following:"),_e=m(),Q=a("p"),me=a("em"),Fe=o(`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),j=m(),de=a("p"),G=o("Tips:"),be=m(),ie=a("ul"),U=a("li"),Xe=o(`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),Ee=m(),A=a("li"),qe=o("XLM has multilingual checkpoints which leverage a specific "),R=a("code"),Ce=o("lang"),ne=o(" parameter. Check out the "),z=a("a"),ze=o("multi-lingual"),O=o(" page for more information."),ke=m(),te=a("p"),_=o("This model was contributed by "),F=a("a"),Be=o("thomwolf"),se=o(". The original code can be found "),Ae=a("a"),Ue=o("here"),E=o("."),He=m(),je=a("h2"),Pe=a("a"),We=a("span"),w(Oe.$$.fragment),I=m(),K=a("span"),Re=o("XLMConfig"),Qe=m(),N=a("div"),w(Ne.$$.fragment),Ke=m(),ee=a("p"),Ve=o("This is the configuration class to store the configuration of a "),J=a("a"),Ye=o("XLMModel"),cc=o(" or a "),Qa=a("a"),pc=o("TFXLMModel"),mc=o(`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Zn=a("a"),hc=o("xlm-mlm-en-2048"),uc=o(" architecture."),fc=m(),eo=a("p"),gc=o("Configuration objects inherit from "),Ba=a("a"),_c=o("PretrainedConfig"),bc=o(` and can be used to control the model outputs. Read the
documentation from `),Ua=a("a"),kc=o("PretrainedConfig"),vc=o(" for more information."),wc=m(),w(So.$$.fragment),Sl=m(),to=a("h2"),Do=a("a"),Ir=a("span"),w(es.$$.fragment),Tc=m(),Wr=a("span"),yc=o("XLMTokenizer"),Dl=m(),Ge=a("div"),w(ts.$$.fragment),Mc=m(),Hr=a("p"),$c=o("Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Lc=m(),lt=a("ul"),Qr=a("li"),xc=o("Moses preprocessing and tokenization for most supported languages."),Fc=m(),Br=a("li"),Xc=o("Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),Ec=m(),Ur=a("li"),qc=o("Optionally lowercases and normalizes all inputs text."),Cc=m(),Ot=a("li"),zc=o("The arguments "),Rr=a("code"),jc=o("special_tokens"),Pc=o(" and the function "),Kr=a("code"),Ac=o("set_special_tokens"),Oc=o(`, can be used to add additional symbols (like
\u201D`),Vr=a("strong"),Nc=o("classify"),Sc=o("\u201D) to a vocabulary."),Dc=m(),os=a("li"),Ic=o("The "),Yr=a("code"),Wc=o("lang2id"),Hc=o(` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),Qc=m(),ns=a("li"),Bc=o("The "),Gr=a("code"),Uc=o("id2lang"),Rc=o(" attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),Kc=m(),ss=a("p"),Vc=o("This tokenizer inherits from "),Ra=a("a"),Yc=o("PreTrainedTokenizer"),Gc=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jc=m(),Dt=a("div"),w(as.$$.fragment),Zc=m(),Jr=a("p"),ep=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),tp=m(),rs=a("ul"),Ka=a("li"),op=o("single sequence: "),Zr=a("code"),np=o("<s> X </s>"),sp=m(),Va=a("li"),ap=o("pair of sequences: "),ei=a("code"),rp=o("<s> A </s> B </s>"),ip=m(),Io=a("div"),w(is.$$.fragment),lp=m(),ls=a("p"),dp=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ti=a("code"),cp=o("prepare_for_model"),pp=o(" method."),mp=m(),yt=a("div"),w(ds.$$.fragment),hp=m(),oi=a("p"),up=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),fp=m(),w(Wo.$$.fragment),gp=m(),oo=a("p"),_p=o("If "),ni=a("code"),bp=o("token_ids_1"),kp=o(" is "),si=a("code"),vp=o("None"),wp=o(", this method only returns the first portion of the mask (0s)."),Tp=m(),Ya=a("div"),w(cs.$$.fragment),Il=m(),no=a("h2"),Ho=a("a"),ai=a("span"),w(ps.$$.fragment),yp=m(),ri=a("span"),Mp=o("XLM specific outputs"),Wl=m(),so=a("div"),w(ms.$$.fragment),$p=m(),hs=a("p"),Lp=o("Base class for outputs of question answering models using a "),ii=a("code"),xp=o("SquadHead"),Fp=o("."),Hl=m(),ao=a("h2"),Qo=a("a"),li=a("span"),w(us.$$.fragment),Xp=m(),di=a("span"),Ep=o("XLMModel"),Ql=m(),dt=a("div"),w(fs.$$.fragment),qp=m(),ci=a("p"),Cp=o("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),zp=m(),gs=a("p"),jp=o("This model inherits from "),Ga=a("a"),Pp=o("PreTrainedModel"),Ap=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op=m(),_s=a("p"),Np=o("This model is also a PyTorch "),bs=a("a"),Sp=o("torch.nn.Module"),Dp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ip=m(),Mt=a("div"),w(ks.$$.fragment),Wp=m(),ro=a("p"),Hp=o("The "),Ja=a("a"),Qp=o("XLMModel"),Bp=o(" forward method, overrides the "),pi=a("code"),Up=o("__call__"),Rp=o(" special method."),Kp=m(),w(Bo.$$.fragment),Vp=m(),w(Uo.$$.fragment),Bl=m(),io=a("h2"),Ro=a("a"),mi=a("span"),w(vs.$$.fragment),Yp=m(),hi=a("span"),Gp=o("XLMWithLMHeadModel"),Ul=m(),ct=a("div"),w(ws.$$.fragment),Jp=m(),ui=a("p"),Zp=o(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),em=m(),Ts=a("p"),tm=o("This model inherits from "),Za=a("a"),om=o("PreTrainedModel"),nm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=m(),ys=a("p"),am=o("This model is also a PyTorch "),Ms=a("a"),rm=o("torch.nn.Module"),im=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lm=m(),gt=a("div"),w($s.$$.fragment),dm=m(),lo=a("p"),cm=o("The "),er=a("a"),pm=o("XLMWithLMHeadModel"),mm=o(" forward method, overrides the "),fi=a("code"),hm=o("__call__"),um=o(" special method."),fm=m(),w(Ko.$$.fragment),gm=m(),w(Vo.$$.fragment),_m=m(),w(Yo.$$.fragment),Rl=m(),co=a("h2"),Go=a("a"),gi=a("span"),w(Ls.$$.fragment),bm=m(),_i=a("span"),km=o("XLMForSequenceClassification"),Kl=m(),pt=a("div"),w(xs.$$.fragment),vm=m(),bi=a("p"),wm=o(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Tm=m(),Fs=a("p"),ym=o("This model inherits from "),tr=a("a"),Mm=o("PreTrainedModel"),$m=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm=m(),Xs=a("p"),xm=o("This model is also a PyTorch "),Es=a("a"),Fm=o("torch.nn.Module"),Xm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Em=m(),et=a("div"),w(qs.$$.fragment),qm=m(),po=a("p"),Cm=o("The "),or=a("a"),zm=o("XLMForSequenceClassification"),jm=o(" forward method, overrides the "),ki=a("code"),Pm=o("__call__"),Am=o(" special method."),Om=m(),w(Jo.$$.fragment),Nm=m(),w(Zo.$$.fragment),Sm=m(),w(en.$$.fragment),Dm=m(),w(tn.$$.fragment),Im=m(),w(on.$$.fragment),Vl=m(),mo=a("h2"),nn=a("a"),vi=a("span"),w(Cs.$$.fragment),Wm=m(),wi=a("span"),Hm=o("XLMForMultipleChoice"),Yl=m(),mt=a("div"),w(zs.$$.fragment),Qm=m(),Ti=a("p"),Bm=o(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Um=m(),js=a("p"),Rm=o("This model inherits from "),nr=a("a"),Km=o("PreTrainedModel"),Vm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ym=m(),Ps=a("p"),Gm=o("This model is also a PyTorch "),As=a("a"),Jm=o("torch.nn.Module"),Zm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh=m(),$t=a("div"),w(Os.$$.fragment),th=m(),ho=a("p"),oh=o("The "),sr=a("a"),nh=o("XLMForMultipleChoice"),sh=o(" forward method, overrides the "),yi=a("code"),ah=o("__call__"),rh=o(" special method."),ih=m(),w(sn.$$.fragment),lh=m(),w(an.$$.fragment),Gl=m(),uo=a("h2"),rn=a("a"),Mi=a("span"),w(Ns.$$.fragment),dh=m(),$i=a("span"),ch=o("XLMForTokenClassification"),Jl=m(),ht=a("div"),w(Ss.$$.fragment),ph=m(),Li=a("p"),mh=o(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hh=m(),Ds=a("p"),uh=o("This model inherits from "),ar=a("a"),fh=o("PreTrainedModel"),gh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=m(),Is=a("p"),bh=o("This model is also a PyTorch "),Ws=a("a"),kh=o("torch.nn.Module"),vh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh=m(),_t=a("div"),w(Hs.$$.fragment),Th=m(),fo=a("p"),yh=o("The "),rr=a("a"),Mh=o("XLMForTokenClassification"),$h=o(" forward method, overrides the "),xi=a("code"),Lh=o("__call__"),xh=o(" special method."),Fh=m(),w(ln.$$.fragment),Xh=m(),w(dn.$$.fragment),Eh=m(),w(cn.$$.fragment),Zl=m(),go=a("h2"),pn=a("a"),Fi=a("span"),w(Qs.$$.fragment),qh=m(),Xi=a("span"),Ch=o("XLMForQuestionAnsweringSimple"),ed=m(),ut=a("div"),w(Bs.$$.fragment),zh=m(),_o=a("p"),jh=o(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ei=a("code"),Ph=o("span start logits"),Ah=o(" and "),qi=a("code"),Oh=o("span end logits"),Nh=o(")."),Sh=m(),Us=a("p"),Dh=o("This model inherits from "),ir=a("a"),Ih=o("PreTrainedModel"),Wh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=m(),Rs=a("p"),Qh=o("This model is also a PyTorch "),Ks=a("a"),Bh=o("torch.nn.Module"),Uh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=m(),bt=a("div"),w(Vs.$$.fragment),Kh=m(),bo=a("p"),Vh=o("The "),lr=a("a"),Yh=o("XLMForQuestionAnsweringSimple"),Gh=o(" forward method, overrides the "),Ci=a("code"),Jh=o("__call__"),Zh=o(" special method."),eu=m(),w(mn.$$.fragment),tu=m(),w(hn.$$.fragment),ou=m(),w(un.$$.fragment),td=m(),ko=a("h2"),fn=a("a"),zi=a("span"),w(Ys.$$.fragment),nu=m(),ji=a("span"),su=o("XLMForQuestionAnswering"),od=m(),ft=a("div"),w(Gs.$$.fragment),au=m(),vo=a("p"),ru=o(`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pi=a("code"),iu=o("span start logits"),lu=o(" and "),Ai=a("code"),du=o("span end logits"),cu=o(")."),pu=m(),Js=a("p"),mu=o("This model inherits from "),dr=a("a"),hu=o("PreTrainedModel"),uu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=m(),Zs=a("p"),gu=o("This model is also a PyTorch "),ea=a("a"),_u=o("torch.nn.Module"),bu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ku=m(),Lt=a("div"),w(ta.$$.fragment),vu=m(),wo=a("p"),wu=o("The "),cr=a("a"),Tu=o("XLMForQuestionAnswering"),yu=o(" forward method, overrides the "),Oi=a("code"),Mu=o("__call__"),$u=o(" special method."),Lu=m(),w(gn.$$.fragment),xu=m(),w(_n.$$.fragment),nd=m(),To=a("h2"),bn=a("a"),Ni=a("span"),w(oa.$$.fragment),Fu=m(),Si=a("span"),Xu=o("TFXLMModel"),sd=m(),ot=a("div"),w(na.$$.fragment),Eu=m(),Di=a("p"),qu=o("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Cu=m(),sa=a("p"),zu=o("This model inherits from "),pr=a("a"),ju=o("TFPreTrainedModel"),Pu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au=m(),aa=a("p"),Ou=o("This model is also a "),ra=a("a"),Nu=o("tf.keras.Model"),Su=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du=m(),w(kn.$$.fragment),Iu=m(),xt=a("div"),w(ia.$$.fragment),Wu=m(),yo=a("p"),Hu=o("The "),mr=a("a"),Qu=o("TFXLMModel"),Bu=o(" forward method, overrides the "),Ii=a("code"),Uu=o("__call__"),Ru=o(" special method."),Ku=m(),w(vn.$$.fragment),Vu=m(),w(wn.$$.fragment),ad=m(),Mo=a("h2"),Tn=a("a"),Wi=a("span"),w(la.$$.fragment),Yu=m(),Hi=a("span"),Gu=o("TFXLMWithLMHeadModel"),rd=m(),nt=a("div"),w(da.$$.fragment),Ju=m(),Qi=a("p"),Zu=o(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ef=m(),ca=a("p"),tf=o("This model inherits from "),hr=a("a"),of=o("TFPreTrainedModel"),nf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf=m(),pa=a("p"),af=o("This model is also a "),ma=a("a"),rf=o("tf.keras.Model"),lf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),df=m(),w(yn.$$.fragment),cf=m(),Ft=a("div"),w(ha.$$.fragment),pf=m(),$o=a("p"),mf=o("The "),ur=a("a"),hf=o("TFXLMWithLMHeadModel"),uf=o(" forward method, overrides the "),Bi=a("code"),ff=o("__call__"),gf=o(" special method."),_f=m(),w(Mn.$$.fragment),bf=m(),w($n.$$.fragment),id=m(),Lo=a("h2"),Ln=a("a"),Ui=a("span"),w(ua.$$.fragment),kf=m(),Ri=a("span"),vf=o("TFXLMForSequenceClassification"),ld=m(),st=a("div"),w(fa.$$.fragment),wf=m(),Ki=a("p"),Tf=o(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),yf=m(),ga=a("p"),Mf=o("This model inherits from "),fr=a("a"),$f=o("TFPreTrainedModel"),Lf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=m(),_a=a("p"),Ff=o("This model is also a "),ba=a("a"),Xf=o("tf.keras.Model"),Ef=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=m(),w(xn.$$.fragment),Cf=m(),kt=a("div"),w(ka.$$.fragment),zf=m(),xo=a("p"),jf=o("The "),gr=a("a"),Pf=o("TFXLMForSequenceClassification"),Af=o(" forward method, overrides the "),Vi=a("code"),Of=o("__call__"),Nf=o(" special method."),Sf=m(),w(Fn.$$.fragment),Df=m(),w(Xn.$$.fragment),If=m(),w(En.$$.fragment),dd=m(),Fo=a("h2"),qn=a("a"),Yi=a("span"),w(va.$$.fragment),Wf=m(),Gi=a("span"),Hf=o("TFXLMForMultipleChoice"),cd=m(),at=a("div"),w(wa.$$.fragment),Qf=m(),Ji=a("p"),Bf=o(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uf=m(),Ta=a("p"),Rf=o("This model inherits from "),_r=a("a"),Kf=o("TFPreTrainedModel"),Vf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yf=m(),ya=a("p"),Gf=o("This model is also a "),Ma=a("a"),Jf=o("tf.keras.Model"),Zf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eg=m(),w(Cn.$$.fragment),tg=m(),Xt=a("div"),w($a.$$.fragment),og=m(),Xo=a("p"),ng=o("The "),br=a("a"),sg=o("TFXLMForMultipleChoice"),ag=o(" forward method, overrides the "),Zi=a("code"),rg=o("__call__"),ig=o(" special method."),lg=m(),w(zn.$$.fragment),dg=m(),w(jn.$$.fragment),pd=m(),Eo=a("h2"),Pn=a("a"),el=a("span"),w(La.$$.fragment),cg=m(),tl=a("span"),pg=o("TFXLMForTokenClassification"),md=m(),rt=a("div"),w(xa.$$.fragment),mg=m(),ol=a("p"),hg=o(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ug=m(),Fa=a("p"),fg=o("This model inherits from "),kr=a("a"),gg=o("TFPreTrainedModel"),_g=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bg=m(),Xa=a("p"),kg=o("This model is also a "),Ea=a("a"),vg=o("tf.keras.Model"),wg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tg=m(),w(An.$$.fragment),yg=m(),vt=a("div"),w(qa.$$.fragment),Mg=m(),qo=a("p"),$g=o("The "),vr=a("a"),Lg=o("TFXLMForTokenClassification"),xg=o(" forward method, overrides the "),nl=a("code"),Fg=o("__call__"),Xg=o(" special method."),Eg=m(),w(On.$$.fragment),qg=m(),w(Nn.$$.fragment),Cg=m(),w(Sn.$$.fragment),hd=m(),Co=a("h2"),Dn=a("a"),sl=a("span"),w(Ca.$$.fragment),zg=m(),al=a("span"),jg=o("TFXLMForQuestionAnsweringSimple"),ud=m(),it=a("div"),w(za.$$.fragment),Pg=m(),zo=a("p"),Ag=o(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),rl=a("code"),Og=o("span start logits"),Ng=o(" and "),il=a("code"),Sg=o("span end logits"),Dg=o(")."),Ig=m(),ja=a("p"),Wg=o("This model inherits from "),wr=a("a"),Hg=o("TFPreTrainedModel"),Qg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bg=m(),Pa=a("p"),Ug=o("This model is also a "),Aa=a("a"),Rg=o("tf.keras.Model"),Kg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vg=m(),w(In.$$.fragment),Yg=m(),wt=a("div"),w(Oa.$$.fragment),Gg=m(),jo=a("p"),Jg=o("The "),Tr=a("a"),Zg=o("TFXLMForQuestionAnsweringSimple"),e_=o(" forward method, overrides the "),ll=a("code"),t_=o("__call__"),o_=o(" special method."),n_=m(),w(Wn.$$.fragment),s_=m(),w(Hn.$$.fragment),a_=m(),w(Qn.$$.fragment),this.h()},l(s){const k=Ck('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(s),c=r(s,"H1",{class:!0});var Na=i(c);u=r(Na,"A",{id:!0,class:!0,href:!0});var dl=i(u);v=r(dl,"SPAN",{});var cl=i(v);T(l.$$.fragment,cl),cl.forEach(t),dl.forEach(t),p=h(Na),q=r(Na,"SPAN",{});var pl=i(q);ve=n(pl,"XLM"),pl.forEach(t),Na.forEach(t),he=h(s),D=r(s,"H2",{class:!0});var Sa=i(D);re=r(Sa,"A",{id:!0,class:!0,href:!0});var ml=i(re);Z=r(ml,"SPAN",{});var hl=i(Z);T(x.$$.fragment,hl),hl.forEach(t),ml.forEach(t),we=h(Sa),B=r(Sa,"SPAN",{});var ul=i(B);Te=n(ul,"Overview"),ul.forEach(t),Sa.forEach(t),ue=h(s),W=r(s,"P",{});var Da=i(W);ye=n(Da,"The XLM model was proposed in "),le=r(Da,"A",{href:!0,rel:!0});var fl=i(le);V=n(fl,"Cross-lingual Language Model Pretraining"),fl.forEach(t),Me=n(Da,` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),Da.forEach(t),fe=h(s),S=r(s,"UL",{});var Po=i(S);ce=r(Po,"LI",{});var gl=i(ce);$e=n(gl,"a causal language modeling (CLM) objective (next token prediction),"),gl.forEach(t),Y=h(Po),pe=r(Po,"LI",{});var _l=i(pe);Le=n(_l,"a masked language modeling (MLM) objective (BERT-like), or"),_l.forEach(t),oe=h(Po),C=r(Po,"LI",{});var bl=i(C);P=n(bl,"a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),bl.forEach(t),Po.forEach(t),ge=h(s),H=r(s,"P",{});var kl=i(H);xe=n(kl,"The abstract from the paper is the following:"),kl.forEach(t),_e=h(s),Q=r(s,"P",{});var vl=i(Q);me=r(vl,"EM",{});var wl=i(me);Fe=n(wl,`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),wl.forEach(t),vl.forEach(t),j=h(s),de=r(s,"P",{});var Tl=i(de);G=n(Tl,"Tips:"),Tl.forEach(t),be=h(s),ie=r(s,"UL",{});var Ia=i(ie);U=r(Ia,"LI",{});var yl=i(U);Xe=n(yl,`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),yl.forEach(t),Ee=h(Ia),A=r(Ia,"LI",{});var Ao=i(A);qe=n(Ao,"XLM has multilingual checkpoints which leverage a specific "),R=r(Ao,"CODE",{});var Ml=i(R);Ce=n(Ml,"lang"),Ml.forEach(t),ne=n(Ao," parameter. Check out the "),z=r(Ao,"A",{href:!0});var $l=i(z);ze=n($l,"multi-lingual"),$l.forEach(t),O=n(Ao," page for more information."),Ao.forEach(t),Ia.forEach(t),ke=h(s),te=r(s,"P",{});var Oo=i(te);_=n(Oo,"This model was contributed by "),F=r(Oo,"A",{href:!0,rel:!0});var Ll=i(F);Be=n(Ll,"thomwolf"),Ll.forEach(t),se=n(Oo,". The original code can be found "),Ae=r(Oo,"A",{href:!0,rel:!0});var xl=i(Ae);Ue=n(xl,"here"),xl.forEach(t),E=n(Oo,"."),Oo.forEach(t),He=h(s),je=r(s,"H2",{class:!0});var Wa=i(je);Pe=r(Wa,"A",{id:!0,class:!0,href:!0});var Fl=i(Pe);We=r(Fl,"SPAN",{});var Xl=i(We);T(Oe.$$.fragment,Xl),Xl.forEach(t),Fl.forEach(t),I=h(Wa),K=r(Wa,"SPAN",{});var El=i(K);Re=n(El,"XLMConfig"),El.forEach(t),Wa.forEach(t),Qe=h(s),N=r(s,"DIV",{class:!0});var Nt=i(N);T(Ne.$$.fragment,Nt),Ke=h(Nt),ee=r(Nt,"P",{});var St=i(ee);Ve=n(St,"This is the configuration class to store the configuration of a "),J=r(St,"A",{href:!0});var ql=i(J);Ye=n(ql,"XLMModel"),ql.forEach(t),cc=n(St," or a "),Qa=r(St,"A",{href:!0});var Cl=i(Qa);pc=n(Cl,"TFXLMModel"),Cl.forEach(t),mc=n(St,`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Zn=r(St,"A",{href:!0,rel:!0});var zl=i(Zn);hc=n(zl,"xlm-mlm-en-2048"),zl.forEach(t),uc=n(St," architecture."),St.forEach(t),fc=h(Nt),eo=r(Nt,"P",{});var No=i(eo);gc=n(No,"Configuration objects inherit from "),Ba=r(No,"A",{href:!0});var jl=i(Ba);_c=n(jl,"PretrainedConfig"),jl.forEach(t),bc=n(No,` and can be used to control the model outputs. Read the
documentation from `),Ua=r(No,"A",{href:!0});var Pl=i(Ua);kc=n(Pl,"PretrainedConfig"),Pl.forEach(t),vc=n(No," for more information."),No.forEach(t),wc=h(Nt),T(So.$$.fragment,Nt),Nt.forEach(t),Sl=h(s),to=r(s,"H2",{class:!0});var Ha=i(to);Do=r(Ha,"A",{id:!0,class:!0,href:!0});var Al=i(Do);Ir=r(Al,"SPAN",{});var Ol=i(Ir);T(es.$$.fragment,Ol),Ol.forEach(t),Al.forEach(t),Tc=h(Ha),Wr=r(Ha,"SPAN",{});var Nl=i(Wr);yc=n(Nl,"XLMTokenizer"),Nl.forEach(t),Ha.forEach(t),Dl=h(s),Ge=r(s,"DIV",{class:!0});var Je=i(Ge);T(ts.$$.fragment,Je),Mc=h(Je),Hr=r(Je,"P",{});var l_=i(Hr);$c=n(l_,"Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),l_.forEach(t),Lc=h(Je),lt=r(Je,"UL",{});var Et=i(lt);Qr=r(Et,"LI",{});var d_=i(Qr);xc=n(d_,"Moses preprocessing and tokenization for most supported languages."),d_.forEach(t),Fc=h(Et),Br=r(Et,"LI",{});var c_=i(Br);Xc=n(c_,"Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),c_.forEach(t),Ec=h(Et),Ur=r(Et,"LI",{});var p_=i(Ur);qc=n(p_,"Optionally lowercases and normalizes all inputs text."),p_.forEach(t),Cc=h(Et),Ot=r(Et,"LI",{});var Bn=i(Ot);zc=n(Bn,"The arguments "),Rr=r(Bn,"CODE",{});var m_=i(Rr);jc=n(m_,"special_tokens"),m_.forEach(t),Pc=n(Bn," and the function "),Kr=r(Bn,"CODE",{});var h_=i(Kr);Ac=n(h_,"set_special_tokens"),h_.forEach(t),Oc=n(Bn,`, can be used to add additional symbols (like
\u201D`),Vr=r(Bn,"STRONG",{});var u_=i(Vr);Nc=n(u_,"classify"),u_.forEach(t),Sc=n(Bn,"\u201D) to a vocabulary."),Bn.forEach(t),Dc=h(Et),os=r(Et,"LI",{});var gd=i(os);Ic=n(gd,"The "),Yr=r(gd,"CODE",{});var f_=i(Yr);Wc=n(f_,"lang2id"),f_.forEach(t),Hc=n(gd,` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),gd.forEach(t),Qc=h(Et),ns=r(Et,"LI",{});var _d=i(ns);Bc=n(_d,"The "),Gr=r(_d,"CODE",{});var g_=i(Gr);Uc=n(g_,"id2lang"),g_.forEach(t),Rc=n(_d," attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),_d.forEach(t),Et.forEach(t),Kc=h(Je),ss=r(Je,"P",{});var bd=i(ss);Vc=n(bd,"This tokenizer inherits from "),Ra=r(bd,"A",{href:!0});var __=i(Ra);Yc=n(__,"PreTrainedTokenizer"),__.forEach(t),Gc=n(bd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bd.forEach(t),Jc=h(Je),Dt=r(Je,"DIV",{class:!0});var yr=i(Dt);T(as.$$.fragment,yr),Zc=h(yr),Jr=r(yr,"P",{});var b_=i(Jr);ep=n(b_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),b_.forEach(t),tp=h(yr),rs=r(yr,"UL",{});var kd=i(rs);Ka=r(kd,"LI",{});var r_=i(Ka);op=n(r_,"single sequence: "),Zr=r(r_,"CODE",{});var k_=i(Zr);np=n(k_,"<s> X </s>"),k_.forEach(t),r_.forEach(t),sp=h(kd),Va=r(kd,"LI",{});var i_=i(Va);ap=n(i_,"pair of sequences: "),ei=r(i_,"CODE",{});var v_=i(ei);rp=n(v_,"<s> A </s> B </s>"),v_.forEach(t),i_.forEach(t),kd.forEach(t),yr.forEach(t),ip=h(Je),Io=r(Je,"DIV",{class:!0});var vd=i(Io);T(is.$$.fragment,vd),lp=h(vd),ls=r(vd,"P",{});var wd=i(ls);dp=n(wd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ti=r(wd,"CODE",{});var w_=i(ti);cp=n(w_,"prepare_for_model"),w_.forEach(t),pp=n(wd," method."),wd.forEach(t),vd.forEach(t),mp=h(Je),yt=r(Je,"DIV",{class:!0});var Un=i(yt);T(ds.$$.fragment,Un),hp=h(Un),oi=r(Un,"P",{});var T_=i(oi);up=n(T_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),T_.forEach(t),fp=h(Un),T(Wo.$$.fragment,Un),gp=h(Un),oo=r(Un,"P",{});var Mr=i(oo);_p=n(Mr,"If "),ni=r(Mr,"CODE",{});var y_=i(ni);bp=n(y_,"token_ids_1"),y_.forEach(t),kp=n(Mr," is "),si=r(Mr,"CODE",{});var M_=i(si);vp=n(M_,"None"),M_.forEach(t),wp=n(Mr,", this method only returns the first portion of the mask (0s)."),Mr.forEach(t),Un.forEach(t),Tp=h(Je),Ya=r(Je,"DIV",{class:!0});var $_=i(Ya);T(cs.$$.fragment,$_),$_.forEach(t),Je.forEach(t),Il=h(s),no=r(s,"H2",{class:!0});var Td=i(no);Ho=r(Td,"A",{id:!0,class:!0,href:!0});var L_=i(Ho);ai=r(L_,"SPAN",{});var x_=i(ai);T(ps.$$.fragment,x_),x_.forEach(t),L_.forEach(t),yp=h(Td),ri=r(Td,"SPAN",{});var F_=i(ri);Mp=n(F_,"XLM specific outputs"),F_.forEach(t),Td.forEach(t),Wl=h(s),so=r(s,"DIV",{class:!0});var yd=i(so);T(ms.$$.fragment,yd),$p=h(yd),hs=r(yd,"P",{});var Md=i(hs);Lp=n(Md,"Base class for outputs of question answering models using a "),ii=r(Md,"CODE",{});var X_=i(ii);xp=n(X_,"SquadHead"),X_.forEach(t),Fp=n(Md,"."),Md.forEach(t),yd.forEach(t),Hl=h(s),ao=r(s,"H2",{class:!0});var $d=i(ao);Qo=r($d,"A",{id:!0,class:!0,href:!0});var E_=i(Qo);li=r(E_,"SPAN",{});var q_=i(li);T(us.$$.fragment,q_),q_.forEach(t),E_.forEach(t),Xp=h($d),di=r($d,"SPAN",{});var C_=i(di);Ep=n(C_,"XLMModel"),C_.forEach(t),$d.forEach(t),Ql=h(s),dt=r(s,"DIV",{class:!0});var It=i(dt);T(fs.$$.fragment,It),qp=h(It),ci=r(It,"P",{});var z_=i(ci);Cp=n(z_,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),z_.forEach(t),zp=h(It),gs=r(It,"P",{});var Ld=i(gs);jp=n(Ld,"This model inherits from "),Ga=r(Ld,"A",{href:!0});var j_=i(Ga);Pp=n(j_,"PreTrainedModel"),j_.forEach(t),Ap=n(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),Op=h(It),_s=r(It,"P",{});var xd=i(_s);Np=n(xd,"This model is also a PyTorch "),bs=r(xd,"A",{href:!0,rel:!0});var P_=i(bs);Sp=n(P_,"torch.nn.Module"),P_.forEach(t),Dp=n(xd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd.forEach(t),Ip=h(It),Mt=r(It,"DIV",{class:!0});var Rn=i(Mt);T(ks.$$.fragment,Rn),Wp=h(Rn),ro=r(Rn,"P",{});var $r=i(ro);Hp=n($r,"The "),Ja=r($r,"A",{href:!0});var A_=i(Ja);Qp=n(A_,"XLMModel"),A_.forEach(t),Bp=n($r," forward method, overrides the "),pi=r($r,"CODE",{});var O_=i(pi);Up=n(O_,"__call__"),O_.forEach(t),Rp=n($r," special method."),$r.forEach(t),Kp=h(Rn),T(Bo.$$.fragment,Rn),Vp=h(Rn),T(Uo.$$.fragment,Rn),Rn.forEach(t),It.forEach(t),Bl=h(s),io=r(s,"H2",{class:!0});var Fd=i(io);Ro=r(Fd,"A",{id:!0,class:!0,href:!0});var N_=i(Ro);mi=r(N_,"SPAN",{});var S_=i(mi);T(vs.$$.fragment,S_),S_.forEach(t),N_.forEach(t),Yp=h(Fd),hi=r(Fd,"SPAN",{});var D_=i(hi);Gp=n(D_,"XLMWithLMHeadModel"),D_.forEach(t),Fd.forEach(t),Ul=h(s),ct=r(s,"DIV",{class:!0});var Wt=i(ct);T(ws.$$.fragment,Wt),Jp=h(Wt),ui=r(Wt,"P",{});var I_=i(ui);Zp=n(I_,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),I_.forEach(t),em=h(Wt),Ts=r(Wt,"P",{});var Xd=i(Ts);tm=n(Xd,"This model inherits from "),Za=r(Xd,"A",{href:!0});var W_=i(Za);om=n(W_,"PreTrainedModel"),W_.forEach(t),nm=n(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),sm=h(Wt),ys=r(Wt,"P",{});var Ed=i(ys);am=n(Ed,"This model is also a PyTorch "),Ms=r(Ed,"A",{href:!0,rel:!0});var H_=i(Ms);rm=n(H_,"torch.nn.Module"),H_.forEach(t),im=n(Ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed.forEach(t),lm=h(Wt),gt=r(Wt,"DIV",{class:!0});var Ht=i(gt);T($s.$$.fragment,Ht),dm=h(Ht),lo=r(Ht,"P",{});var Lr=i(lo);cm=n(Lr,"The "),er=r(Lr,"A",{href:!0});var Q_=i(er);pm=n(Q_,"XLMWithLMHeadModel"),Q_.forEach(t),mm=n(Lr," forward method, overrides the "),fi=r(Lr,"CODE",{});var B_=i(fi);hm=n(B_,"__call__"),B_.forEach(t),um=n(Lr," special method."),Lr.forEach(t),fm=h(Ht),T(Ko.$$.fragment,Ht),gm=h(Ht),T(Vo.$$.fragment,Ht),_m=h(Ht),T(Yo.$$.fragment,Ht),Ht.forEach(t),Wt.forEach(t),Rl=h(s),co=r(s,"H2",{class:!0});var qd=i(co);Go=r(qd,"A",{id:!0,class:!0,href:!0});var U_=i(Go);gi=r(U_,"SPAN",{});var R_=i(gi);T(Ls.$$.fragment,R_),R_.forEach(t),U_.forEach(t),bm=h(qd),_i=r(qd,"SPAN",{});var K_=i(_i);km=n(K_,"XLMForSequenceClassification"),K_.forEach(t),qd.forEach(t),Kl=h(s),pt=r(s,"DIV",{class:!0});var Qt=i(pt);T(xs.$$.fragment,Qt),vm=h(Qt),bi=r(Qt,"P",{});var V_=i(bi);wm=n(V_,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),V_.forEach(t),Tm=h(Qt),Fs=r(Qt,"P",{});var Cd=i(Fs);ym=n(Cd,"This model inherits from "),tr=r(Cd,"A",{href:!0});var Y_=i(tr);Mm=n(Y_,"PreTrainedModel"),Y_.forEach(t),$m=n(Cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd.forEach(t),Lm=h(Qt),Xs=r(Qt,"P",{});var zd=i(Xs);xm=n(zd,"This model is also a PyTorch "),Es=r(zd,"A",{href:!0,rel:!0});var G_=i(Es);Fm=n(G_,"torch.nn.Module"),G_.forEach(t),Xm=n(zd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zd.forEach(t),Em=h(Qt),et=r(Qt,"DIV",{class:!0});var Tt=i(et);T(qs.$$.fragment,Tt),qm=h(Tt),po=r(Tt,"P",{});var xr=i(po);Cm=n(xr,"The "),or=r(xr,"A",{href:!0});var J_=i(or);zm=n(J_,"XLMForSequenceClassification"),J_.forEach(t),jm=n(xr," forward method, overrides the "),ki=r(xr,"CODE",{});var Z_=i(ki);Pm=n(Z_,"__call__"),Z_.forEach(t),Am=n(xr," special method."),xr.forEach(t),Om=h(Tt),T(Jo.$$.fragment,Tt),Nm=h(Tt),T(Zo.$$.fragment,Tt),Sm=h(Tt),T(en.$$.fragment,Tt),Dm=h(Tt),T(tn.$$.fragment,Tt),Im=h(Tt),T(on.$$.fragment,Tt),Tt.forEach(t),Qt.forEach(t),Vl=h(s),mo=r(s,"H2",{class:!0});var jd=i(mo);nn=r(jd,"A",{id:!0,class:!0,href:!0});var eb=i(nn);vi=r(eb,"SPAN",{});var tb=i(vi);T(Cs.$$.fragment,tb),tb.forEach(t),eb.forEach(t),Wm=h(jd),wi=r(jd,"SPAN",{});var ob=i(wi);Hm=n(ob,"XLMForMultipleChoice"),ob.forEach(t),jd.forEach(t),Yl=h(s),mt=r(s,"DIV",{class:!0});var Bt=i(mt);T(zs.$$.fragment,Bt),Qm=h(Bt),Ti=r(Bt,"P",{});var nb=i(Ti);Bm=n(nb,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nb.forEach(t),Um=h(Bt),js=r(Bt,"P",{});var Pd=i(js);Rm=n(Pd,"This model inherits from "),nr=r(Pd,"A",{href:!0});var sb=i(nr);Km=n(sb,"PreTrainedModel"),sb.forEach(t),Vm=n(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),Ym=h(Bt),Ps=r(Bt,"P",{});var Ad=i(Ps);Gm=n(Ad,"This model is also a PyTorch "),As=r(Ad,"A",{href:!0,rel:!0});var ab=i(As);Jm=n(ab,"torch.nn.Module"),ab.forEach(t),Zm=n(Ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad.forEach(t),eh=h(Bt),$t=r(Bt,"DIV",{class:!0});var Kn=i($t);T(Os.$$.fragment,Kn),th=h(Kn),ho=r(Kn,"P",{});var Fr=i(ho);oh=n(Fr,"The "),sr=r(Fr,"A",{href:!0});var rb=i(sr);nh=n(rb,"XLMForMultipleChoice"),rb.forEach(t),sh=n(Fr," forward method, overrides the "),yi=r(Fr,"CODE",{});var ib=i(yi);ah=n(ib,"__call__"),ib.forEach(t),rh=n(Fr," special method."),Fr.forEach(t),ih=h(Kn),T(sn.$$.fragment,Kn),lh=h(Kn),T(an.$$.fragment,Kn),Kn.forEach(t),Bt.forEach(t),Gl=h(s),uo=r(s,"H2",{class:!0});var Od=i(uo);rn=r(Od,"A",{id:!0,class:!0,href:!0});var lb=i(rn);Mi=r(lb,"SPAN",{});var db=i(Mi);T(Ns.$$.fragment,db),db.forEach(t),lb.forEach(t),dh=h(Od),$i=r(Od,"SPAN",{});var cb=i($i);ch=n(cb,"XLMForTokenClassification"),cb.forEach(t),Od.forEach(t),Jl=h(s),ht=r(s,"DIV",{class:!0});var Ut=i(ht);T(Ss.$$.fragment,Ut),ph=h(Ut),Li=r(Ut,"P",{});var pb=i(Li);mh=n(pb,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pb.forEach(t),hh=h(Ut),Ds=r(Ut,"P",{});var Nd=i(Ds);uh=n(Nd,"This model inherits from "),ar=r(Nd,"A",{href:!0});var mb=i(ar);fh=n(mb,"PreTrainedModel"),mb.forEach(t),gh=n(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),_h=h(Ut),Is=r(Ut,"P",{});var Sd=i(Is);bh=n(Sd,"This model is also a PyTorch "),Ws=r(Sd,"A",{href:!0,rel:!0});var hb=i(Ws);kh=n(hb,"torch.nn.Module"),hb.forEach(t),vh=n(Sd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sd.forEach(t),wh=h(Ut),_t=r(Ut,"DIV",{class:!0});var Rt=i(_t);T(Hs.$$.fragment,Rt),Th=h(Rt),fo=r(Rt,"P",{});var Xr=i(fo);yh=n(Xr,"The "),rr=r(Xr,"A",{href:!0});var ub=i(rr);Mh=n(ub,"XLMForTokenClassification"),ub.forEach(t),$h=n(Xr," forward method, overrides the "),xi=r(Xr,"CODE",{});var fb=i(xi);Lh=n(fb,"__call__"),fb.forEach(t),xh=n(Xr," special method."),Xr.forEach(t),Fh=h(Rt),T(ln.$$.fragment,Rt),Xh=h(Rt),T(dn.$$.fragment,Rt),Eh=h(Rt),T(cn.$$.fragment,Rt),Rt.forEach(t),Ut.forEach(t),Zl=h(s),go=r(s,"H2",{class:!0});var Dd=i(go);pn=r(Dd,"A",{id:!0,class:!0,href:!0});var gb=i(pn);Fi=r(gb,"SPAN",{});var _b=i(Fi);T(Qs.$$.fragment,_b),_b.forEach(t),gb.forEach(t),qh=h(Dd),Xi=r(Dd,"SPAN",{});var bb=i(Xi);Ch=n(bb,"XLMForQuestionAnsweringSimple"),bb.forEach(t),Dd.forEach(t),ed=h(s),ut=r(s,"DIV",{class:!0});var Kt=i(ut);T(Bs.$$.fragment,Kt),zh=h(Kt),_o=r(Kt,"P",{});var Er=i(_o);jh=n(Er,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ei=r(Er,"CODE",{});var kb=i(Ei);Ph=n(kb,"span start logits"),kb.forEach(t),Ah=n(Er," and "),qi=r(Er,"CODE",{});var vb=i(qi);Oh=n(vb,"span end logits"),vb.forEach(t),Nh=n(Er,")."),Er.forEach(t),Sh=h(Kt),Us=r(Kt,"P",{});var Id=i(Us);Dh=n(Id,"This model inherits from "),ir=r(Id,"A",{href:!0});var wb=i(ir);Ih=n(wb,"PreTrainedModel"),wb.forEach(t),Wh=n(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Hh=h(Kt),Rs=r(Kt,"P",{});var Wd=i(Rs);Qh=n(Wd,"This model is also a PyTorch "),Ks=r(Wd,"A",{href:!0,rel:!0});var Tb=i(Ks);Bh=n(Tb,"torch.nn.Module"),Tb.forEach(t),Uh=n(Wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd.forEach(t),Rh=h(Kt),bt=r(Kt,"DIV",{class:!0});var Vt=i(bt);T(Vs.$$.fragment,Vt),Kh=h(Vt),bo=r(Vt,"P",{});var qr=i(bo);Vh=n(qr,"The "),lr=r(qr,"A",{href:!0});var yb=i(lr);Yh=n(yb,"XLMForQuestionAnsweringSimple"),yb.forEach(t),Gh=n(qr," forward method, overrides the "),Ci=r(qr,"CODE",{});var Mb=i(Ci);Jh=n(Mb,"__call__"),Mb.forEach(t),Zh=n(qr," special method."),qr.forEach(t),eu=h(Vt),T(mn.$$.fragment,Vt),tu=h(Vt),T(hn.$$.fragment,Vt),ou=h(Vt),T(un.$$.fragment,Vt),Vt.forEach(t),Kt.forEach(t),td=h(s),ko=r(s,"H2",{class:!0});var Hd=i(ko);fn=r(Hd,"A",{id:!0,class:!0,href:!0});var $b=i(fn);zi=r($b,"SPAN",{});var Lb=i(zi);T(Ys.$$.fragment,Lb),Lb.forEach(t),$b.forEach(t),nu=h(Hd),ji=r(Hd,"SPAN",{});var xb=i(ji);su=n(xb,"XLMForQuestionAnswering"),xb.forEach(t),Hd.forEach(t),od=h(s),ft=r(s,"DIV",{class:!0});var Yt=i(ft);T(Gs.$$.fragment,Yt),au=h(Yt),vo=r(Yt,"P",{});var Cr=i(vo);ru=n(Cr,`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pi=r(Cr,"CODE",{});var Fb=i(Pi);iu=n(Fb,"span start logits"),Fb.forEach(t),lu=n(Cr," and "),Ai=r(Cr,"CODE",{});var Xb=i(Ai);du=n(Xb,"span end logits"),Xb.forEach(t),cu=n(Cr,")."),Cr.forEach(t),pu=h(Yt),Js=r(Yt,"P",{});var Qd=i(Js);mu=n(Qd,"This model inherits from "),dr=r(Qd,"A",{href:!0});var Eb=i(dr);hu=n(Eb,"PreTrainedModel"),Eb.forEach(t),uu=n(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),fu=h(Yt),Zs=r(Yt,"P",{});var Bd=i(Zs);gu=n(Bd,"This model is also a PyTorch "),ea=r(Bd,"A",{href:!0,rel:!0});var qb=i(ea);_u=n(qb,"torch.nn.Module"),qb.forEach(t),bu=n(Bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bd.forEach(t),ku=h(Yt),Lt=r(Yt,"DIV",{class:!0});var Vn=i(Lt);T(ta.$$.fragment,Vn),vu=h(Vn),wo=r(Vn,"P",{});var zr=i(wo);wu=n(zr,"The "),cr=r(zr,"A",{href:!0});var Cb=i(cr);Tu=n(Cb,"XLMForQuestionAnswering"),Cb.forEach(t),yu=n(zr," forward method, overrides the "),Oi=r(zr,"CODE",{});var zb=i(Oi);Mu=n(zb,"__call__"),zb.forEach(t),$u=n(zr," special method."),zr.forEach(t),Lu=h(Vn),T(gn.$$.fragment,Vn),xu=h(Vn),T(_n.$$.fragment,Vn),Vn.forEach(t),Yt.forEach(t),nd=h(s),To=r(s,"H2",{class:!0});var Ud=i(To);bn=r(Ud,"A",{id:!0,class:!0,href:!0});var jb=i(bn);Ni=r(jb,"SPAN",{});var Pb=i(Ni);T(oa.$$.fragment,Pb),Pb.forEach(t),jb.forEach(t),Fu=h(Ud),Si=r(Ud,"SPAN",{});var Ab=i(Si);Xu=n(Ab,"TFXLMModel"),Ab.forEach(t),Ud.forEach(t),sd=h(s),ot=r(s,"DIV",{class:!0});var qt=i(ot);T(na.$$.fragment,qt),Eu=h(qt),Di=r(qt,"P",{});var Ob=i(Di);qu=n(Ob,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Ob.forEach(t),Cu=h(qt),sa=r(qt,"P",{});var Rd=i(sa);zu=n(Rd,"This model inherits from "),pr=r(Rd,"A",{href:!0});var Nb=i(pr);ju=n(Nb,"TFPreTrainedModel"),Nb.forEach(t),Pu=n(Rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rd.forEach(t),Au=h(qt),aa=r(qt,"P",{});var Kd=i(aa);Ou=n(Kd,"This model is also a "),ra=r(Kd,"A",{href:!0,rel:!0});var Sb=i(ra);Nu=n(Sb,"tf.keras.Model"),Sb.forEach(t),Su=n(Kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kd.forEach(t),Du=h(qt),T(kn.$$.fragment,qt),Iu=h(qt),xt=r(qt,"DIV",{class:!0});var Yn=i(xt);T(ia.$$.fragment,Yn),Wu=h(Yn),yo=r(Yn,"P",{});var jr=i(yo);Hu=n(jr,"The "),mr=r(jr,"A",{href:!0});var Db=i(mr);Qu=n(Db,"TFXLMModel"),Db.forEach(t),Bu=n(jr," forward method, overrides the "),Ii=r(jr,"CODE",{});var Ib=i(Ii);Uu=n(Ib,"__call__"),Ib.forEach(t),Ru=n(jr," special method."),jr.forEach(t),Ku=h(Yn),T(vn.$$.fragment,Yn),Vu=h(Yn),T(wn.$$.fragment,Yn),Yn.forEach(t),qt.forEach(t),ad=h(s),Mo=r(s,"H2",{class:!0});var Vd=i(Mo);Tn=r(Vd,"A",{id:!0,class:!0,href:!0});var Wb=i(Tn);Wi=r(Wb,"SPAN",{});var Hb=i(Wi);T(la.$$.fragment,Hb),Hb.forEach(t),Wb.forEach(t),Yu=h(Vd),Hi=r(Vd,"SPAN",{});var Qb=i(Hi);Gu=n(Qb,"TFXLMWithLMHeadModel"),Qb.forEach(t),Vd.forEach(t),rd=h(s),nt=r(s,"DIV",{class:!0});var Ct=i(nt);T(da.$$.fragment,Ct),Ju=h(Ct),Qi=r(Ct,"P",{});var Bb=i(Qi);Zu=n(Bb,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Bb.forEach(t),ef=h(Ct),ca=r(Ct,"P",{});var Yd=i(ca);tf=n(Yd,"This model inherits from "),hr=r(Yd,"A",{href:!0});var Ub=i(hr);of=n(Ub,"TFPreTrainedModel"),Ub.forEach(t),nf=n(Yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd.forEach(t),sf=h(Ct),pa=r(Ct,"P",{});var Gd=i(pa);af=n(Gd,"This model is also a "),ma=r(Gd,"A",{href:!0,rel:!0});var Rb=i(ma);rf=n(Rb,"tf.keras.Model"),Rb.forEach(t),lf=n(Gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gd.forEach(t),df=h(Ct),T(yn.$$.fragment,Ct),cf=h(Ct),Ft=r(Ct,"DIV",{class:!0});var Gn=i(Ft);T(ha.$$.fragment,Gn),pf=h(Gn),$o=r(Gn,"P",{});var Pr=i($o);mf=n(Pr,"The "),ur=r(Pr,"A",{href:!0});var Kb=i(ur);hf=n(Kb,"TFXLMWithLMHeadModel"),Kb.forEach(t),uf=n(Pr," forward method, overrides the "),Bi=r(Pr,"CODE",{});var Vb=i(Bi);ff=n(Vb,"__call__"),Vb.forEach(t),gf=n(Pr," special method."),Pr.forEach(t),_f=h(Gn),T(Mn.$$.fragment,Gn),bf=h(Gn),T($n.$$.fragment,Gn),Gn.forEach(t),Ct.forEach(t),id=h(s),Lo=r(s,"H2",{class:!0});var Jd=i(Lo);Ln=r(Jd,"A",{id:!0,class:!0,href:!0});var Yb=i(Ln);Ui=r(Yb,"SPAN",{});var Gb=i(Ui);T(ua.$$.fragment,Gb),Gb.forEach(t),Yb.forEach(t),kf=h(Jd),Ri=r(Jd,"SPAN",{});var Jb=i(Ri);vf=n(Jb,"TFXLMForSequenceClassification"),Jb.forEach(t),Jd.forEach(t),ld=h(s),st=r(s,"DIV",{class:!0});var zt=i(st);T(fa.$$.fragment,zt),wf=h(zt),Ki=r(zt,"P",{});var Zb=i(Ki);Tf=n(Zb,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Zb.forEach(t),yf=h(zt),ga=r(zt,"P",{});var Zd=i(ga);Mf=n(Zd,"This model inherits from "),fr=r(Zd,"A",{href:!0});var ek=i(fr);$f=n(ek,"TFPreTrainedModel"),ek.forEach(t),Lf=n(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),xf=h(zt),_a=r(zt,"P",{});var ec=i(_a);Ff=n(ec,"This model is also a "),ba=r(ec,"A",{href:!0,rel:!0});var tk=i(ba);Xf=n(tk,"tf.keras.Model"),tk.forEach(t),Ef=n(ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ec.forEach(t),qf=h(zt),T(xn.$$.fragment,zt),Cf=h(zt),kt=r(zt,"DIV",{class:!0});var Gt=i(kt);T(ka.$$.fragment,Gt),zf=h(Gt),xo=r(Gt,"P",{});var Ar=i(xo);jf=n(Ar,"The "),gr=r(Ar,"A",{href:!0});var ok=i(gr);Pf=n(ok,"TFXLMForSequenceClassification"),ok.forEach(t),Af=n(Ar," forward method, overrides the "),Vi=r(Ar,"CODE",{});var nk=i(Vi);Of=n(nk,"__call__"),nk.forEach(t),Nf=n(Ar," special method."),Ar.forEach(t),Sf=h(Gt),T(Fn.$$.fragment,Gt),Df=h(Gt),T(Xn.$$.fragment,Gt),If=h(Gt),T(En.$$.fragment,Gt),Gt.forEach(t),zt.forEach(t),dd=h(s),Fo=r(s,"H2",{class:!0});var tc=i(Fo);qn=r(tc,"A",{id:!0,class:!0,href:!0});var sk=i(qn);Yi=r(sk,"SPAN",{});var ak=i(Yi);T(va.$$.fragment,ak),ak.forEach(t),sk.forEach(t),Wf=h(tc),Gi=r(tc,"SPAN",{});var rk=i(Gi);Hf=n(rk,"TFXLMForMultipleChoice"),rk.forEach(t),tc.forEach(t),cd=h(s),at=r(s,"DIV",{class:!0});var jt=i(at);T(wa.$$.fragment,jt),Qf=h(jt),Ji=r(jt,"P",{});var ik=i(Ji);Bf=n(ik,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ik.forEach(t),Uf=h(jt),Ta=r(jt,"P",{});var oc=i(Ta);Rf=n(oc,"This model inherits from "),_r=r(oc,"A",{href:!0});var lk=i(_r);Kf=n(lk,"TFPreTrainedModel"),lk.forEach(t),Vf=n(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc.forEach(t),Yf=h(jt),ya=r(jt,"P",{});var nc=i(ya);Gf=n(nc,"This model is also a "),Ma=r(nc,"A",{href:!0,rel:!0});var dk=i(Ma);Jf=n(dk,"tf.keras.Model"),dk.forEach(t),Zf=n(nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc.forEach(t),eg=h(jt),T(Cn.$$.fragment,jt),tg=h(jt),Xt=r(jt,"DIV",{class:!0});var Jn=i(Xt);T($a.$$.fragment,Jn),og=h(Jn),Xo=r(Jn,"P",{});var Or=i(Xo);ng=n(Or,"The "),br=r(Or,"A",{href:!0});var ck=i(br);sg=n(ck,"TFXLMForMultipleChoice"),ck.forEach(t),ag=n(Or," forward method, overrides the "),Zi=r(Or,"CODE",{});var pk=i(Zi);rg=n(pk,"__call__"),pk.forEach(t),ig=n(Or," special method."),Or.forEach(t),lg=h(Jn),T(zn.$$.fragment,Jn),dg=h(Jn),T(jn.$$.fragment,Jn),Jn.forEach(t),jt.forEach(t),pd=h(s),Eo=r(s,"H2",{class:!0});var sc=i(Eo);Pn=r(sc,"A",{id:!0,class:!0,href:!0});var mk=i(Pn);el=r(mk,"SPAN",{});var hk=i(el);T(La.$$.fragment,hk),hk.forEach(t),mk.forEach(t),cg=h(sc),tl=r(sc,"SPAN",{});var uk=i(tl);pg=n(uk,"TFXLMForTokenClassification"),uk.forEach(t),sc.forEach(t),md=h(s),rt=r(s,"DIV",{class:!0});var Pt=i(rt);T(xa.$$.fragment,Pt),mg=h(Pt),ol=r(Pt,"P",{});var fk=i(ol);hg=n(fk,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fk.forEach(t),ug=h(Pt),Fa=r(Pt,"P",{});var ac=i(Fa);fg=n(ac,"This model inherits from "),kr=r(ac,"A",{href:!0});var gk=i(kr);gg=n(gk,"TFPreTrainedModel"),gk.forEach(t),_g=n(ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac.forEach(t),bg=h(Pt),Xa=r(Pt,"P",{});var rc=i(Xa);kg=n(rc,"This model is also a "),Ea=r(rc,"A",{href:!0,rel:!0});var _k=i(Ea);vg=n(_k,"tf.keras.Model"),_k.forEach(t),wg=n(rc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rc.forEach(t),Tg=h(Pt),T(An.$$.fragment,Pt),yg=h(Pt),vt=r(Pt,"DIV",{class:!0});var Jt=i(vt);T(qa.$$.fragment,Jt),Mg=h(Jt),qo=r(Jt,"P",{});var Nr=i(qo);$g=n(Nr,"The "),vr=r(Nr,"A",{href:!0});var bk=i(vr);Lg=n(bk,"TFXLMForTokenClassification"),bk.forEach(t),xg=n(Nr," forward method, overrides the "),nl=r(Nr,"CODE",{});var kk=i(nl);Fg=n(kk,"__call__"),kk.forEach(t),Xg=n(Nr," special method."),Nr.forEach(t),Eg=h(Jt),T(On.$$.fragment,Jt),qg=h(Jt),T(Nn.$$.fragment,Jt),Cg=h(Jt),T(Sn.$$.fragment,Jt),Jt.forEach(t),Pt.forEach(t),hd=h(s),Co=r(s,"H2",{class:!0});var ic=i(Co);Dn=r(ic,"A",{id:!0,class:!0,href:!0});var vk=i(Dn);sl=r(vk,"SPAN",{});var wk=i(sl);T(Ca.$$.fragment,wk),wk.forEach(t),vk.forEach(t),zg=h(ic),al=r(ic,"SPAN",{});var Tk=i(al);jg=n(Tk,"TFXLMForQuestionAnsweringSimple"),Tk.forEach(t),ic.forEach(t),ud=h(s),it=r(s,"DIV",{class:!0});var At=i(it);T(za.$$.fragment,At),Pg=h(At),zo=r(At,"P",{});var Sr=i(zo);Ag=n(Sr,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),rl=r(Sr,"CODE",{});var yk=i(rl);Og=n(yk,"span start logits"),yk.forEach(t),Ng=n(Sr," and "),il=r(Sr,"CODE",{});var Mk=i(il);Sg=n(Mk,"span end logits"),Mk.forEach(t),Dg=n(Sr,")."),Sr.forEach(t),Ig=h(At),ja=r(At,"P",{});var lc=i(ja);Wg=n(lc,"This model inherits from "),wr=r(lc,"A",{href:!0});var $k=i(wr);Hg=n($k,"TFPreTrainedModel"),$k.forEach(t),Qg=n(lc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lc.forEach(t),Bg=h(At),Pa=r(At,"P",{});var dc=i(Pa);Ug=n(dc,"This model is also a "),Aa=r(dc,"A",{href:!0,rel:!0});var Lk=i(Aa);Rg=n(Lk,"tf.keras.Model"),Lk.forEach(t),Kg=n(dc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dc.forEach(t),Vg=h(At),T(In.$$.fragment,At),Yg=h(At),wt=r(At,"DIV",{class:!0});var Zt=i(wt);T(Oa.$$.fragment,Zt),Gg=h(Zt),jo=r(Zt,"P",{});var Dr=i(jo);Jg=n(Dr,"The "),Tr=r(Dr,"A",{href:!0});var xk=i(Tr);Zg=n(xk,"TFXLMForQuestionAnsweringSimple"),xk.forEach(t),e_=n(Dr," forward method, overrides the "),ll=r(Dr,"CODE",{});var Fk=i(ll);t_=n(Fk,"__call__"),Fk.forEach(t),o_=n(Dr," special method."),Dr.forEach(t),n_=h(Zt),T(Wn.$$.fragment,Zt),s_=h(Zt),T(Hn.$$.fragment,Zt),a_=h(Zt),T(Qn.$$.fragment,Zt),Zt.forEach(t),At.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Mv)),f(u,"id","xlm"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#xlm"),f(c,"class","relative group"),f(re,"id","overview"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#overview"),f(D,"class","relative group"),f(le,"href","https://arxiv.org/abs/1901.07291"),f(le,"rel","nofollow"),f(z,"href","../multilingual"),f(F,"href","https://huggingface.co/thomwolf"),f(F,"rel","nofollow"),f(Ae,"href","https://github.com/facebookresearch/XLM/"),f(Ae,"rel","nofollow"),f(Pe,"id","transformers.XLMConfig"),f(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pe,"href","#transformers.XLMConfig"),f(je,"class","relative group"),f(J,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMModel"),f(Qa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMModel"),f(Zn,"href","https://huggingface.co/xlm-mlm-en-2048"),f(Zn,"rel","nofollow"),f(Ba,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ua,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"id","transformers.XLMTokenizer"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.XLMTokenizer"),f(to,"class","relative group"),f(Ra,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ya,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),f(no,"class","relative group"),f(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.XLMModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.XLMModel"),f(ao,"class","relative group"),f(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(bs,"rel","nofollow"),f(Ja,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMModel"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.XLMWithLMHeadModel"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.XLMWithLMHeadModel"),f(io,"class","relative group"),f(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ms,"rel","nofollow"),f(er,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"id","transformers.XLMForSequenceClassification"),f(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Go,"href","#transformers.XLMForSequenceClassification"),f(co,"class","relative group"),f(tr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Es,"rel","nofollow"),f(or,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.XLMForMultipleChoice"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.XLMForMultipleChoice"),f(mo,"class","relative group"),f(nr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(As,"rel","nofollow"),f(sr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.XLMForTokenClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.XLMForTokenClassification"),f(uo,"class","relative group"),f(ar,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ws,"rel","nofollow"),f(rr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.XLMForQuestionAnsweringSimple"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.XLMForQuestionAnsweringSimple"),f(go,"class","relative group"),f(ir,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ks,"rel","nofollow"),f(lr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.XLMForQuestionAnswering"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.XLMForQuestionAnswering"),f(ko,"class","relative group"),f(dr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ea,"rel","nofollow"),f(cr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"id","transformers.TFXLMModel"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.TFXLMModel"),f(To,"class","relative group"),f(pr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ra,"rel","nofollow"),f(mr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMModel"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.TFXLMWithLMHeadModel"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.TFXLMWithLMHeadModel"),f(Mo,"class","relative group"),f(hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ma,"rel","nofollow"),f(ur,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMWithLMHeadModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.TFXLMForSequenceClassification"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.TFXLMForSequenceClassification"),f(Lo,"class","relative group"),f(fr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ba,"rel","nofollow"),f(gr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qn,"id","transformers.TFXLMForMultipleChoice"),f(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qn,"href","#transformers.TFXLMForMultipleChoice"),f(Fo,"class","relative group"),f(_r,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ma,"rel","nofollow"),f(br,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"id","transformers.TFXLMForTokenClassification"),f(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pn,"href","#transformers.TFXLMForTokenClassification"),f(Eo,"class","relative group"),f(kr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ea,"rel","nofollow"),f(vr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.TFXLMForQuestionAnsweringSimple"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.TFXLMForQuestionAnsweringSimple"),f(Co,"class","relative group"),f(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Aa,"rel","nofollow"),f(Tr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),b(s,g,k),b(s,c,k),e(c,u),e(u,v),y(l,v,null),e(c,p),e(c,q),e(q,ve),b(s,he,k),b(s,D,k),e(D,re),e(re,Z),y(x,Z,null),e(D,we),e(D,B),e(B,Te),b(s,ue,k),b(s,W,k),e(W,ye),e(W,le),e(le,V),e(W,Me),b(s,fe,k),b(s,S,k),e(S,ce),e(ce,$e),e(S,Y),e(S,pe),e(pe,Le),e(S,oe),e(S,C),e(C,P),b(s,ge,k),b(s,H,k),e(H,xe),b(s,_e,k),b(s,Q,k),e(Q,me),e(me,Fe),b(s,j,k),b(s,de,k),e(de,G),b(s,be,k),b(s,ie,k),e(ie,U),e(U,Xe),e(ie,Ee),e(ie,A),e(A,qe),e(A,R),e(R,Ce),e(A,ne),e(A,z),e(z,ze),e(A,O),b(s,ke,k),b(s,te,k),e(te,_),e(te,F),e(F,Be),e(te,se),e(te,Ae),e(Ae,Ue),e(te,E),b(s,He,k),b(s,je,k),e(je,Pe),e(Pe,We),y(Oe,We,null),e(je,I),e(je,K),e(K,Re),b(s,Qe,k),b(s,N,k),y(Ne,N,null),e(N,Ke),e(N,ee),e(ee,Ve),e(ee,J),e(J,Ye),e(ee,cc),e(ee,Qa),e(Qa,pc),e(ee,mc),e(ee,Zn),e(Zn,hc),e(ee,uc),e(N,fc),e(N,eo),e(eo,gc),e(eo,Ba),e(Ba,_c),e(eo,bc),e(eo,Ua),e(Ua,kc),e(eo,vc),e(N,wc),y(So,N,null),b(s,Sl,k),b(s,to,k),e(to,Do),e(Do,Ir),y(es,Ir,null),e(to,Tc),e(to,Wr),e(Wr,yc),b(s,Dl,k),b(s,Ge,k),y(ts,Ge,null),e(Ge,Mc),e(Ge,Hr),e(Hr,$c),e(Ge,Lc),e(Ge,lt),e(lt,Qr),e(Qr,xc),e(lt,Fc),e(lt,Br),e(Br,Xc),e(lt,Ec),e(lt,Ur),e(Ur,qc),e(lt,Cc),e(lt,Ot),e(Ot,zc),e(Ot,Rr),e(Rr,jc),e(Ot,Pc),e(Ot,Kr),e(Kr,Ac),e(Ot,Oc),e(Ot,Vr),e(Vr,Nc),e(Ot,Sc),e(lt,Dc),e(lt,os),e(os,Ic),e(os,Yr),e(Yr,Wc),e(os,Hc),e(lt,Qc),e(lt,ns),e(ns,Bc),e(ns,Gr),e(Gr,Uc),e(ns,Rc),e(Ge,Kc),e(Ge,ss),e(ss,Vc),e(ss,Ra),e(Ra,Yc),e(ss,Gc),e(Ge,Jc),e(Ge,Dt),y(as,Dt,null),e(Dt,Zc),e(Dt,Jr),e(Jr,ep),e(Dt,tp),e(Dt,rs),e(rs,Ka),e(Ka,op),e(Ka,Zr),e(Zr,np),e(rs,sp),e(rs,Va),e(Va,ap),e(Va,ei),e(ei,rp),e(Ge,ip),e(Ge,Io),y(is,Io,null),e(Io,lp),e(Io,ls),e(ls,dp),e(ls,ti),e(ti,cp),e(ls,pp),e(Ge,mp),e(Ge,yt),y(ds,yt,null),e(yt,hp),e(yt,oi),e(oi,up),e(yt,fp),y(Wo,yt,null),e(yt,gp),e(yt,oo),e(oo,_p),e(oo,ni),e(ni,bp),e(oo,kp),e(oo,si),e(si,vp),e(oo,wp),e(Ge,Tp),e(Ge,Ya),y(cs,Ya,null),b(s,Il,k),b(s,no,k),e(no,Ho),e(Ho,ai),y(ps,ai,null),e(no,yp),e(no,ri),e(ri,Mp),b(s,Wl,k),b(s,so,k),y(ms,so,null),e(so,$p),e(so,hs),e(hs,Lp),e(hs,ii),e(ii,xp),e(hs,Fp),b(s,Hl,k),b(s,ao,k),e(ao,Qo),e(Qo,li),y(us,li,null),e(ao,Xp),e(ao,di),e(di,Ep),b(s,Ql,k),b(s,dt,k),y(fs,dt,null),e(dt,qp),e(dt,ci),e(ci,Cp),e(dt,zp),e(dt,gs),e(gs,jp),e(gs,Ga),e(Ga,Pp),e(gs,Ap),e(dt,Op),e(dt,_s),e(_s,Np),e(_s,bs),e(bs,Sp),e(_s,Dp),e(dt,Ip),e(dt,Mt),y(ks,Mt,null),e(Mt,Wp),e(Mt,ro),e(ro,Hp),e(ro,Ja),e(Ja,Qp),e(ro,Bp),e(ro,pi),e(pi,Up),e(ro,Rp),e(Mt,Kp),y(Bo,Mt,null),e(Mt,Vp),y(Uo,Mt,null),b(s,Bl,k),b(s,io,k),e(io,Ro),e(Ro,mi),y(vs,mi,null),e(io,Yp),e(io,hi),e(hi,Gp),b(s,Ul,k),b(s,ct,k),y(ws,ct,null),e(ct,Jp),e(ct,ui),e(ui,Zp),e(ct,em),e(ct,Ts),e(Ts,tm),e(Ts,Za),e(Za,om),e(Ts,nm),e(ct,sm),e(ct,ys),e(ys,am),e(ys,Ms),e(Ms,rm),e(ys,im),e(ct,lm),e(ct,gt),y($s,gt,null),e(gt,dm),e(gt,lo),e(lo,cm),e(lo,er),e(er,pm),e(lo,mm),e(lo,fi),e(fi,hm),e(lo,um),e(gt,fm),y(Ko,gt,null),e(gt,gm),y(Vo,gt,null),e(gt,_m),y(Yo,gt,null),b(s,Rl,k),b(s,co,k),e(co,Go),e(Go,gi),y(Ls,gi,null),e(co,bm),e(co,_i),e(_i,km),b(s,Kl,k),b(s,pt,k),y(xs,pt,null),e(pt,vm),e(pt,bi),e(bi,wm),e(pt,Tm),e(pt,Fs),e(Fs,ym),e(Fs,tr),e(tr,Mm),e(Fs,$m),e(pt,Lm),e(pt,Xs),e(Xs,xm),e(Xs,Es),e(Es,Fm),e(Xs,Xm),e(pt,Em),e(pt,et),y(qs,et,null),e(et,qm),e(et,po),e(po,Cm),e(po,or),e(or,zm),e(po,jm),e(po,ki),e(ki,Pm),e(po,Am),e(et,Om),y(Jo,et,null),e(et,Nm),y(Zo,et,null),e(et,Sm),y(en,et,null),e(et,Dm),y(tn,et,null),e(et,Im),y(on,et,null),b(s,Vl,k),b(s,mo,k),e(mo,nn),e(nn,vi),y(Cs,vi,null),e(mo,Wm),e(mo,wi),e(wi,Hm),b(s,Yl,k),b(s,mt,k),y(zs,mt,null),e(mt,Qm),e(mt,Ti),e(Ti,Bm),e(mt,Um),e(mt,js),e(js,Rm),e(js,nr),e(nr,Km),e(js,Vm),e(mt,Ym),e(mt,Ps),e(Ps,Gm),e(Ps,As),e(As,Jm),e(Ps,Zm),e(mt,eh),e(mt,$t),y(Os,$t,null),e($t,th),e($t,ho),e(ho,oh),e(ho,sr),e(sr,nh),e(ho,sh),e(ho,yi),e(yi,ah),e(ho,rh),e($t,ih),y(sn,$t,null),e($t,lh),y(an,$t,null),b(s,Gl,k),b(s,uo,k),e(uo,rn),e(rn,Mi),y(Ns,Mi,null),e(uo,dh),e(uo,$i),e($i,ch),b(s,Jl,k),b(s,ht,k),y(Ss,ht,null),e(ht,ph),e(ht,Li),e(Li,mh),e(ht,hh),e(ht,Ds),e(Ds,uh),e(Ds,ar),e(ar,fh),e(Ds,gh),e(ht,_h),e(ht,Is),e(Is,bh),e(Is,Ws),e(Ws,kh),e(Is,vh),e(ht,wh),e(ht,_t),y(Hs,_t,null),e(_t,Th),e(_t,fo),e(fo,yh),e(fo,rr),e(rr,Mh),e(fo,$h),e(fo,xi),e(xi,Lh),e(fo,xh),e(_t,Fh),y(ln,_t,null),e(_t,Xh),y(dn,_t,null),e(_t,Eh),y(cn,_t,null),b(s,Zl,k),b(s,go,k),e(go,pn),e(pn,Fi),y(Qs,Fi,null),e(go,qh),e(go,Xi),e(Xi,Ch),b(s,ed,k),b(s,ut,k),y(Bs,ut,null),e(ut,zh),e(ut,_o),e(_o,jh),e(_o,Ei),e(Ei,Ph),e(_o,Ah),e(_o,qi),e(qi,Oh),e(_o,Nh),e(ut,Sh),e(ut,Us),e(Us,Dh),e(Us,ir),e(ir,Ih),e(Us,Wh),e(ut,Hh),e(ut,Rs),e(Rs,Qh),e(Rs,Ks),e(Ks,Bh),e(Rs,Uh),e(ut,Rh),e(ut,bt),y(Vs,bt,null),e(bt,Kh),e(bt,bo),e(bo,Vh),e(bo,lr),e(lr,Yh),e(bo,Gh),e(bo,Ci),e(Ci,Jh),e(bo,Zh),e(bt,eu),y(mn,bt,null),e(bt,tu),y(hn,bt,null),e(bt,ou),y(un,bt,null),b(s,td,k),b(s,ko,k),e(ko,fn),e(fn,zi),y(Ys,zi,null),e(ko,nu),e(ko,ji),e(ji,su),b(s,od,k),b(s,ft,k),y(Gs,ft,null),e(ft,au),e(ft,vo),e(vo,ru),e(vo,Pi),e(Pi,iu),e(vo,lu),e(vo,Ai),e(Ai,du),e(vo,cu),e(ft,pu),e(ft,Js),e(Js,mu),e(Js,dr),e(dr,hu),e(Js,uu),e(ft,fu),e(ft,Zs),e(Zs,gu),e(Zs,ea),e(ea,_u),e(Zs,bu),e(ft,ku),e(ft,Lt),y(ta,Lt,null),e(Lt,vu),e(Lt,wo),e(wo,wu),e(wo,cr),e(cr,Tu),e(wo,yu),e(wo,Oi),e(Oi,Mu),e(wo,$u),e(Lt,Lu),y(gn,Lt,null),e(Lt,xu),y(_n,Lt,null),b(s,nd,k),b(s,To,k),e(To,bn),e(bn,Ni),y(oa,Ni,null),e(To,Fu),e(To,Si),e(Si,Xu),b(s,sd,k),b(s,ot,k),y(na,ot,null),e(ot,Eu),e(ot,Di),e(Di,qu),e(ot,Cu),e(ot,sa),e(sa,zu),e(sa,pr),e(pr,ju),e(sa,Pu),e(ot,Au),e(ot,aa),e(aa,Ou),e(aa,ra),e(ra,Nu),e(aa,Su),e(ot,Du),y(kn,ot,null),e(ot,Iu),e(ot,xt),y(ia,xt,null),e(xt,Wu),e(xt,yo),e(yo,Hu),e(yo,mr),e(mr,Qu),e(yo,Bu),e(yo,Ii),e(Ii,Uu),e(yo,Ru),e(xt,Ku),y(vn,xt,null),e(xt,Vu),y(wn,xt,null),b(s,ad,k),b(s,Mo,k),e(Mo,Tn),e(Tn,Wi),y(la,Wi,null),e(Mo,Yu),e(Mo,Hi),e(Hi,Gu),b(s,rd,k),b(s,nt,k),y(da,nt,null),e(nt,Ju),e(nt,Qi),e(Qi,Zu),e(nt,ef),e(nt,ca),e(ca,tf),e(ca,hr),e(hr,of),e(ca,nf),e(nt,sf),e(nt,pa),e(pa,af),e(pa,ma),e(ma,rf),e(pa,lf),e(nt,df),y(yn,nt,null),e(nt,cf),e(nt,Ft),y(ha,Ft,null),e(Ft,pf),e(Ft,$o),e($o,mf),e($o,ur),e(ur,hf),e($o,uf),e($o,Bi),e(Bi,ff),e($o,gf),e(Ft,_f),y(Mn,Ft,null),e(Ft,bf),y($n,Ft,null),b(s,id,k),b(s,Lo,k),e(Lo,Ln),e(Ln,Ui),y(ua,Ui,null),e(Lo,kf),e(Lo,Ri),e(Ri,vf),b(s,ld,k),b(s,st,k),y(fa,st,null),e(st,wf),e(st,Ki),e(Ki,Tf),e(st,yf),e(st,ga),e(ga,Mf),e(ga,fr),e(fr,$f),e(ga,Lf),e(st,xf),e(st,_a),e(_a,Ff),e(_a,ba),e(ba,Xf),e(_a,Ef),e(st,qf),y(xn,st,null),e(st,Cf),e(st,kt),y(ka,kt,null),e(kt,zf),e(kt,xo),e(xo,jf),e(xo,gr),e(gr,Pf),e(xo,Af),e(xo,Vi),e(Vi,Of),e(xo,Nf),e(kt,Sf),y(Fn,kt,null),e(kt,Df),y(Xn,kt,null),e(kt,If),y(En,kt,null),b(s,dd,k),b(s,Fo,k),e(Fo,qn),e(qn,Yi),y(va,Yi,null),e(Fo,Wf),e(Fo,Gi),e(Gi,Hf),b(s,cd,k),b(s,at,k),y(wa,at,null),e(at,Qf),e(at,Ji),e(Ji,Bf),e(at,Uf),e(at,Ta),e(Ta,Rf),e(Ta,_r),e(_r,Kf),e(Ta,Vf),e(at,Yf),e(at,ya),e(ya,Gf),e(ya,Ma),e(Ma,Jf),e(ya,Zf),e(at,eg),y(Cn,at,null),e(at,tg),e(at,Xt),y($a,Xt,null),e(Xt,og),e(Xt,Xo),e(Xo,ng),e(Xo,br),e(br,sg),e(Xo,ag),e(Xo,Zi),e(Zi,rg),e(Xo,ig),e(Xt,lg),y(zn,Xt,null),e(Xt,dg),y(jn,Xt,null),b(s,pd,k),b(s,Eo,k),e(Eo,Pn),e(Pn,el),y(La,el,null),e(Eo,cg),e(Eo,tl),e(tl,pg),b(s,md,k),b(s,rt,k),y(xa,rt,null),e(rt,mg),e(rt,ol),e(ol,hg),e(rt,ug),e(rt,Fa),e(Fa,fg),e(Fa,kr),e(kr,gg),e(Fa,_g),e(rt,bg),e(rt,Xa),e(Xa,kg),e(Xa,Ea),e(Ea,vg),e(Xa,wg),e(rt,Tg),y(An,rt,null),e(rt,yg),e(rt,vt),y(qa,vt,null),e(vt,Mg),e(vt,qo),e(qo,$g),e(qo,vr),e(vr,Lg),e(qo,xg),e(qo,nl),e(nl,Fg),e(qo,Xg),e(vt,Eg),y(On,vt,null),e(vt,qg),y(Nn,vt,null),e(vt,Cg),y(Sn,vt,null),b(s,hd,k),b(s,Co,k),e(Co,Dn),e(Dn,sl),y(Ca,sl,null),e(Co,zg),e(Co,al),e(al,jg),b(s,ud,k),b(s,it,k),y(za,it,null),e(it,Pg),e(it,zo),e(zo,Ag),e(zo,rl),e(rl,Og),e(zo,Ng),e(zo,il),e(il,Sg),e(zo,Dg),e(it,Ig),e(it,ja),e(ja,Wg),e(ja,wr),e(wr,Hg),e(ja,Qg),e(it,Bg),e(it,Pa),e(Pa,Ug),e(Pa,Aa),e(Aa,Rg),e(Pa,Kg),e(it,Vg),y(In,it,null),e(it,Yg),e(it,wt),y(Oa,wt,null),e(wt,Gg),e(wt,jo),e(jo,Jg),e(jo,Tr),e(Tr,Zg),e(jo,e_),e(jo,ll),e(ll,t_),e(jo,o_),e(wt,n_),y(Wn,wt,null),e(wt,s_),y(Hn,wt,null),e(wt,a_),y(Qn,wt,null),fd=!0},p(s,[k]){const Na={};k&2&&(Na.$$scope={dirty:k,ctx:s}),So.$set(Na);const dl={};k&2&&(dl.$$scope={dirty:k,ctx:s}),Wo.$set(dl);const cl={};k&2&&(cl.$$scope={dirty:k,ctx:s}),Bo.$set(cl);const pl={};k&2&&(pl.$$scope={dirty:k,ctx:s}),Uo.$set(pl);const Sa={};k&2&&(Sa.$$scope={dirty:k,ctx:s}),Ko.$set(Sa);const ml={};k&2&&(ml.$$scope={dirty:k,ctx:s}),Vo.$set(ml);const hl={};k&2&&(hl.$$scope={dirty:k,ctx:s}),Yo.$set(hl);const ul={};k&2&&(ul.$$scope={dirty:k,ctx:s}),Jo.$set(ul);const Da={};k&2&&(Da.$$scope={dirty:k,ctx:s}),Zo.$set(Da);const fl={};k&2&&(fl.$$scope={dirty:k,ctx:s}),en.$set(fl);const Po={};k&2&&(Po.$$scope={dirty:k,ctx:s}),tn.$set(Po);const gl={};k&2&&(gl.$$scope={dirty:k,ctx:s}),on.$set(gl);const _l={};k&2&&(_l.$$scope={dirty:k,ctx:s}),sn.$set(_l);const bl={};k&2&&(bl.$$scope={dirty:k,ctx:s}),an.$set(bl);const kl={};k&2&&(kl.$$scope={dirty:k,ctx:s}),ln.$set(kl);const vl={};k&2&&(vl.$$scope={dirty:k,ctx:s}),dn.$set(vl);const wl={};k&2&&(wl.$$scope={dirty:k,ctx:s}),cn.$set(wl);const Tl={};k&2&&(Tl.$$scope={dirty:k,ctx:s}),mn.$set(Tl);const Ia={};k&2&&(Ia.$$scope={dirty:k,ctx:s}),hn.$set(Ia);const yl={};k&2&&(yl.$$scope={dirty:k,ctx:s}),un.$set(yl);const Ao={};k&2&&(Ao.$$scope={dirty:k,ctx:s}),gn.$set(Ao);const Ml={};k&2&&(Ml.$$scope={dirty:k,ctx:s}),_n.$set(Ml);const $l={};k&2&&($l.$$scope={dirty:k,ctx:s}),kn.$set($l);const Oo={};k&2&&(Oo.$$scope={dirty:k,ctx:s}),vn.$set(Oo);const Ll={};k&2&&(Ll.$$scope={dirty:k,ctx:s}),wn.$set(Ll);const xl={};k&2&&(xl.$$scope={dirty:k,ctx:s}),yn.$set(xl);const Wa={};k&2&&(Wa.$$scope={dirty:k,ctx:s}),Mn.$set(Wa);const Fl={};k&2&&(Fl.$$scope={dirty:k,ctx:s}),$n.$set(Fl);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:s}),xn.$set(Xl);const El={};k&2&&(El.$$scope={dirty:k,ctx:s}),Fn.$set(El);const Nt={};k&2&&(Nt.$$scope={dirty:k,ctx:s}),Xn.$set(Nt);const St={};k&2&&(St.$$scope={dirty:k,ctx:s}),En.$set(St);const ql={};k&2&&(ql.$$scope={dirty:k,ctx:s}),Cn.$set(ql);const Cl={};k&2&&(Cl.$$scope={dirty:k,ctx:s}),zn.$set(Cl);const zl={};k&2&&(zl.$$scope={dirty:k,ctx:s}),jn.$set(zl);const No={};k&2&&(No.$$scope={dirty:k,ctx:s}),An.$set(No);const jl={};k&2&&(jl.$$scope={dirty:k,ctx:s}),On.$set(jl);const Pl={};k&2&&(Pl.$$scope={dirty:k,ctx:s}),Nn.$set(Pl);const Ha={};k&2&&(Ha.$$scope={dirty:k,ctx:s}),Sn.$set(Ha);const Al={};k&2&&(Al.$$scope={dirty:k,ctx:s}),In.$set(Al);const Ol={};k&2&&(Ol.$$scope={dirty:k,ctx:s}),Wn.$set(Ol);const Nl={};k&2&&(Nl.$$scope={dirty:k,ctx:s}),Hn.$set(Nl);const Je={};k&2&&(Je.$$scope={dirty:k,ctx:s}),Qn.$set(Je)},i(s){fd||(M(l.$$.fragment,s),M(x.$$.fragment,s),M(Oe.$$.fragment,s),M(Ne.$$.fragment,s),M(So.$$.fragment,s),M(es.$$.fragment,s),M(ts.$$.fragment,s),M(as.$$.fragment,s),M(is.$$.fragment,s),M(ds.$$.fragment,s),M(Wo.$$.fragment,s),M(cs.$$.fragment,s),M(ps.$$.fragment,s),M(ms.$$.fragment,s),M(us.$$.fragment,s),M(fs.$$.fragment,s),M(ks.$$.fragment,s),M(Bo.$$.fragment,s),M(Uo.$$.fragment,s),M(vs.$$.fragment,s),M(ws.$$.fragment,s),M($s.$$.fragment,s),M(Ko.$$.fragment,s),M(Vo.$$.fragment,s),M(Yo.$$.fragment,s),M(Ls.$$.fragment,s),M(xs.$$.fragment,s),M(qs.$$.fragment,s),M(Jo.$$.fragment,s),M(Zo.$$.fragment,s),M(en.$$.fragment,s),M(tn.$$.fragment,s),M(on.$$.fragment,s),M(Cs.$$.fragment,s),M(zs.$$.fragment,s),M(Os.$$.fragment,s),M(sn.$$.fragment,s),M(an.$$.fragment,s),M(Ns.$$.fragment,s),M(Ss.$$.fragment,s),M(Hs.$$.fragment,s),M(ln.$$.fragment,s),M(dn.$$.fragment,s),M(cn.$$.fragment,s),M(Qs.$$.fragment,s),M(Bs.$$.fragment,s),M(Vs.$$.fragment,s),M(mn.$$.fragment,s),M(hn.$$.fragment,s),M(un.$$.fragment,s),M(Ys.$$.fragment,s),M(Gs.$$.fragment,s),M(ta.$$.fragment,s),M(gn.$$.fragment,s),M(_n.$$.fragment,s),M(oa.$$.fragment,s),M(na.$$.fragment,s),M(kn.$$.fragment,s),M(ia.$$.fragment,s),M(vn.$$.fragment,s),M(wn.$$.fragment,s),M(la.$$.fragment,s),M(da.$$.fragment,s),M(yn.$$.fragment,s),M(ha.$$.fragment,s),M(Mn.$$.fragment,s),M($n.$$.fragment,s),M(ua.$$.fragment,s),M(fa.$$.fragment,s),M(xn.$$.fragment,s),M(ka.$$.fragment,s),M(Fn.$$.fragment,s),M(Xn.$$.fragment,s),M(En.$$.fragment,s),M(va.$$.fragment,s),M(wa.$$.fragment,s),M(Cn.$$.fragment,s),M($a.$$.fragment,s),M(zn.$$.fragment,s),M(jn.$$.fragment,s),M(La.$$.fragment,s),M(xa.$$.fragment,s),M(An.$$.fragment,s),M(qa.$$.fragment,s),M(On.$$.fragment,s),M(Nn.$$.fragment,s),M(Sn.$$.fragment,s),M(Ca.$$.fragment,s),M(za.$$.fragment,s),M(In.$$.fragment,s),M(Oa.$$.fragment,s),M(Wn.$$.fragment,s),M(Hn.$$.fragment,s),M(Qn.$$.fragment,s),fd=!0)},o(s){$(l.$$.fragment,s),$(x.$$.fragment,s),$(Oe.$$.fragment,s),$(Ne.$$.fragment,s),$(So.$$.fragment,s),$(es.$$.fragment,s),$(ts.$$.fragment,s),$(as.$$.fragment,s),$(is.$$.fragment,s),$(ds.$$.fragment,s),$(Wo.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(fs.$$.fragment,s),$(ks.$$.fragment,s),$(Bo.$$.fragment,s),$(Uo.$$.fragment,s),$(vs.$$.fragment,s),$(ws.$$.fragment,s),$($s.$$.fragment,s),$(Ko.$$.fragment,s),$(Vo.$$.fragment,s),$(Yo.$$.fragment,s),$(Ls.$$.fragment,s),$(xs.$$.fragment,s),$(qs.$$.fragment,s),$(Jo.$$.fragment,s),$(Zo.$$.fragment,s),$(en.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(Cs.$$.fragment,s),$(zs.$$.fragment,s),$(Os.$$.fragment,s),$(sn.$$.fragment,s),$(an.$$.fragment,s),$(Ns.$$.fragment,s),$(Ss.$$.fragment,s),$(Hs.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(cn.$$.fragment,s),$(Qs.$$.fragment,s),$(Bs.$$.fragment,s),$(Vs.$$.fragment,s),$(mn.$$.fragment,s),$(hn.$$.fragment,s),$(un.$$.fragment,s),$(Ys.$$.fragment,s),$(Gs.$$.fragment,s),$(ta.$$.fragment,s),$(gn.$$.fragment,s),$(_n.$$.fragment,s),$(oa.$$.fragment,s),$(na.$$.fragment,s),$(kn.$$.fragment,s),$(ia.$$.fragment,s),$(vn.$$.fragment,s),$(wn.$$.fragment,s),$(la.$$.fragment,s),$(da.$$.fragment,s),$(yn.$$.fragment,s),$(ha.$$.fragment,s),$(Mn.$$.fragment,s),$($n.$$.fragment,s),$(ua.$$.fragment,s),$(fa.$$.fragment,s),$(xn.$$.fragment,s),$(ka.$$.fragment,s),$(Fn.$$.fragment,s),$(Xn.$$.fragment,s),$(En.$$.fragment,s),$(va.$$.fragment,s),$(wa.$$.fragment,s),$(Cn.$$.fragment,s),$($a.$$.fragment,s),$(zn.$$.fragment,s),$(jn.$$.fragment,s),$(La.$$.fragment,s),$(xa.$$.fragment,s),$(An.$$.fragment,s),$(qa.$$.fragment,s),$(On.$$.fragment,s),$(Nn.$$.fragment,s),$(Sn.$$.fragment,s),$(Ca.$$.fragment,s),$(za.$$.fragment,s),$(In.$$.fragment,s),$(Oa.$$.fragment,s),$(Wn.$$.fragment,s),$(Hn.$$.fragment,s),$(Qn.$$.fragment,s),fd=!1},d(s){t(d),s&&t(g),s&&t(c),L(l),s&&t(he),s&&t(D),L(x),s&&t(ue),s&&t(W),s&&t(fe),s&&t(S),s&&t(ge),s&&t(H),s&&t(_e),s&&t(Q),s&&t(j),s&&t(de),s&&t(be),s&&t(ie),s&&t(ke),s&&t(te),s&&t(He),s&&t(je),L(Oe),s&&t(Qe),s&&t(N),L(Ne),L(So),s&&t(Sl),s&&t(to),L(es),s&&t(Dl),s&&t(Ge),L(ts),L(as),L(is),L(ds),L(Wo),L(cs),s&&t(Il),s&&t(no),L(ps),s&&t(Wl),s&&t(so),L(ms),s&&t(Hl),s&&t(ao),L(us),s&&t(Ql),s&&t(dt),L(fs),L(ks),L(Bo),L(Uo),s&&t(Bl),s&&t(io),L(vs),s&&t(Ul),s&&t(ct),L(ws),L($s),L(Ko),L(Vo),L(Yo),s&&t(Rl),s&&t(co),L(Ls),s&&t(Kl),s&&t(pt),L(xs),L(qs),L(Jo),L(Zo),L(en),L(tn),L(on),s&&t(Vl),s&&t(mo),L(Cs),s&&t(Yl),s&&t(mt),L(zs),L(Os),L(sn),L(an),s&&t(Gl),s&&t(uo),L(Ns),s&&t(Jl),s&&t(ht),L(Ss),L(Hs),L(ln),L(dn),L(cn),s&&t(Zl),s&&t(go),L(Qs),s&&t(ed),s&&t(ut),L(Bs),L(Vs),L(mn),L(hn),L(un),s&&t(td),s&&t(ko),L(Ys),s&&t(od),s&&t(ft),L(Gs),L(ta),L(gn),L(_n),s&&t(nd),s&&t(To),L(oa),s&&t(sd),s&&t(ot),L(na),L(kn),L(ia),L(vn),L(wn),s&&t(ad),s&&t(Mo),L(la),s&&t(rd),s&&t(nt),L(da),L(yn),L(ha),L(Mn),L($n),s&&t(id),s&&t(Lo),L(ua),s&&t(ld),s&&t(st),L(fa),L(xn),L(ka),L(Fn),L(Xn),L(En),s&&t(dd),s&&t(Fo),L(va),s&&t(cd),s&&t(at),L(wa),L(Cn),L($a),L(zn),L(jn),s&&t(pd),s&&t(Eo),L(La),s&&t(md),s&&t(rt),L(xa),L(An),L(qa),L(On),L(Nn),L(Sn),s&&t(hd),s&&t(Co),L(Ca),s&&t(ud),s&&t(it),L(za),L(In),L(Oa),L(Wn),L(Hn),L(Qn)}}}const Mv={local:"xlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMConfig",title:"XLMConfig"},{local:"transformers.XLMTokenizer",title:"XLMTokenizer"},{local:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",title:"XLM specific outputs"},{local:"transformers.XLMModel",title:"XLMModel"},{local:"transformers.XLMWithLMHeadModel",title:"XLMWithLMHeadModel"},{local:"transformers.XLMForSequenceClassification",title:"XLMForSequenceClassification"},{local:"transformers.XLMForMultipleChoice",title:"XLMForMultipleChoice"},{local:"transformers.XLMForTokenClassification",title:"XLMForTokenClassification"},{local:"transformers.XLMForQuestionAnsweringSimple",title:"XLMForQuestionAnsweringSimple"},{local:"transformers.XLMForQuestionAnswering",title:"XLMForQuestionAnswering"},{local:"transformers.TFXLMModel",title:"TFXLMModel"},{local:"transformers.TFXLMWithLMHeadModel",title:"TFXLMWithLMHeadModel"},{local:"transformers.TFXLMForSequenceClassification",title:"TFXLMForSequenceClassification"},{local:"transformers.TFXLMForMultipleChoice",title:"TFXLMForMultipleChoice"},{local:"transformers.TFXLMForTokenClassification",title:"TFXLMForTokenClassification"},{local:"transformers.TFXLMForQuestionAnsweringSimple",title:"TFXLMForQuestionAnsweringSimple"}],title:"XLM"};function $v(X){return zk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cv extends Xk{constructor(d){super();Ek(this,d,$v,yv,qk,{})}}export{Cv as default,Mv as metadata};
