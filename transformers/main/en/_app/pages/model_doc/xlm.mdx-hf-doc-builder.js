import{S as Xy,i as Ey,s as qy,e as a,k as m,w,t as o,M as zy,c as r,d as t,m as h,a as i,x as T,h as n,b as f,G as e,g as k,y as v,q as M,o as $,B as L,v as Cy,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as De}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function jy(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMConfig, XLMModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=o("Examples:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Examples:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Ny(X){let d,g,c,u,b;return u=new Ie({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=o("pair mask has the following format:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"pair mask has the following format:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Py(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function Ay(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Oy(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function Dy(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Sy(X){let d,g;return d=new Ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Iy(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function Wy(X){let d,g,c,u,b;return u=new Ie({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=o("Example of single-label classification:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Hy(X){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Qy(X){let d,g,c,u,b;return u=new Ie({props:{code:`import torch
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
`}}),{c(){d=a("p"),g=o("Example of multi-label classification:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Uy(X){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function By(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function Ky(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Ry(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function Vy(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Yy(X){let d,g;return d=new Ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function Gy(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function Jy(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Zy(X){let d,g;return d=new Ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function eb(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function tb(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function ob(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),b=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),be=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ve=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),D=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),z=a("ul"),N=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ke=o("model([input_ids, attention_mask])"),ie=o(" or "),B=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),P=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),C=a("p"),Ce=o(`Note that when creating models and layers with
`),A=a("a"),ye=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=n(Ue,"transformers"),Ue.forEach(t),b=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Pe=i(q);be=n(Pe,"having all inputs as keyword arguments (like PyTorch models), or"),Pe.forEach(t),he=h(se),S=r(se,"LI",{});var Be=i(S);re=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var He=i(U);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ve=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Ne=i(V);Me=n(Ne,"fit()"),Ne.forEach(t),fe=n(E," and "),D=r(E,"CODE",{});var We=i(D);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Ae=i(Y);pe=n(Ae,"Functional"),Ae.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),z=r(_,"UL",{});var I=i(z);N=r(I,"LI",{});var R=i(N);ge=n(R,"a single Tensor with "),H=r(R,"CODE",{});var Ke=i(H);xe=n(Ke,"input_ids"),Ke.forEach(t),_e=n(R," only and nothing else: "),Q=r(R,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),R.forEach(t),Fe=h(I),j=r(I,"LI",{});var O=i(j);de=n(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(O,"CODE",{});var Oe=i(G);ke=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ie=n(O," or "),B=r(O,"CODE",{});var Re=i(B);Xe=n(Re,"model([input_ids, attention_mask, token_type_ids])"),Re.forEach(t),O.forEach(t),Ee=h(I),P=r(I,"LI",{});var ee=i(P);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(ee,"CODE",{});var Ve=i(K);ze=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),C=r(_,"P",{});var J=i(C);Ce=n(J,`Note that when creating models and layers with
`),A=r(J,"A",{href:!0,rel:!0});var Ye=i(A);ye=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(_,F){k(_,d,F),e(d,g),e(d,c),e(c,u),e(d,b),k(_,l,F),k(_,p,F),e(p,q),e(q,be),e(p,he),e(p,S),e(S,re),k(_,Z,F),k(_,x,F),e(x,we),e(x,U),e(U,Te),e(x,ue),e(x,W),e(W,ve),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,D),e(D,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),k(_,oe,F),k(_,z,F),e(z,N),e(N,ge),e(N,H),e(H,xe),e(N,_e),e(N,Q),e(Q,me),e(z,Fe),e(z,j),e(j,de),e(j,G),e(G,ke),e(j,ie),e(j,B),e(B,Xe),e(z,Ee),e(z,P),e(P,qe),e(P,K),e(K,ze),k(_,ne,F),k(_,C,F),e(C,Ce),e(C,A),e(A,ye),e(C,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(z),_&&t(ne),_&&t(C)}}}function nb(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function sb(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function ab(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),b=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),be=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ve=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),D=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),z=a("ul"),N=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ke=o("model([input_ids, attention_mask])"),ie=o(" or "),B=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),P=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),C=a("p"),Ce=o(`Note that when creating models and layers with
`),A=a("a"),ye=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=n(Ue,"transformers"),Ue.forEach(t),b=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Pe=i(q);be=n(Pe,"having all inputs as keyword arguments (like PyTorch models), or"),Pe.forEach(t),he=h(se),S=r(se,"LI",{});var Be=i(S);re=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var He=i(U);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ve=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Ne=i(V);Me=n(Ne,"fit()"),Ne.forEach(t),fe=n(E," and "),D=r(E,"CODE",{});var We=i(D);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Ae=i(Y);pe=n(Ae,"Functional"),Ae.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),z=r(_,"UL",{});var I=i(z);N=r(I,"LI",{});var R=i(N);ge=n(R,"a single Tensor with "),H=r(R,"CODE",{});var Ke=i(H);xe=n(Ke,"input_ids"),Ke.forEach(t),_e=n(R," only and nothing else: "),Q=r(R,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),R.forEach(t),Fe=h(I),j=r(I,"LI",{});var O=i(j);de=n(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(O,"CODE",{});var Oe=i(G);ke=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ie=n(O," or "),B=r(O,"CODE",{});var Re=i(B);Xe=n(Re,"model([input_ids, attention_mask, token_type_ids])"),Re.forEach(t),O.forEach(t),Ee=h(I),P=r(I,"LI",{});var ee=i(P);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(ee,"CODE",{});var Ve=i(K);ze=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),C=r(_,"P",{});var J=i(C);Ce=n(J,`Note that when creating models and layers with
`),A=r(J,"A",{href:!0,rel:!0});var Ye=i(A);ye=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(_,F){k(_,d,F),e(d,g),e(d,c),e(c,u),e(d,b),k(_,l,F),k(_,p,F),e(p,q),e(q,be),e(p,he),e(p,S),e(S,re),k(_,Z,F),k(_,x,F),e(x,we),e(x,U),e(U,Te),e(x,ue),e(x,W),e(W,ve),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,D),e(D,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),k(_,oe,F),k(_,z,F),e(z,N),e(N,ge),e(N,H),e(H,xe),e(N,_e),e(N,Q),e(Q,me),e(z,Fe),e(z,j),e(j,de),e(j,G),e(G,ke),e(j,ie),e(j,B),e(B,Xe),e(z,Ee),e(z,P),e(P,qe),e(P,K),e(K,ze),k(_,ne,F),k(_,C,F),e(C,Ce),e(C,A),e(A,ye),e(C,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(z),_&&t(ne),_&&t(C)}}}function rb(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function ib(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function lb(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),b=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),be=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ve=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),D=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),z=a("ul"),N=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ke=o("model([input_ids, attention_mask])"),ie=o(" or "),B=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),P=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),C=a("p"),Ce=o(`Note that when creating models and layers with
`),A=a("a"),ye=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=n(Ue,"transformers"),Ue.forEach(t),b=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Pe=i(q);be=n(Pe,"having all inputs as keyword arguments (like PyTorch models), or"),Pe.forEach(t),he=h(se),S=r(se,"LI",{});var Be=i(S);re=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var He=i(U);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ve=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Ne=i(V);Me=n(Ne,"fit()"),Ne.forEach(t),fe=n(E," and "),D=r(E,"CODE",{});var We=i(D);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Ae=i(Y);pe=n(Ae,"Functional"),Ae.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),z=r(_,"UL",{});var I=i(z);N=r(I,"LI",{});var R=i(N);ge=n(R,"a single Tensor with "),H=r(R,"CODE",{});var Ke=i(H);xe=n(Ke,"input_ids"),Ke.forEach(t),_e=n(R," only and nothing else: "),Q=r(R,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),R.forEach(t),Fe=h(I),j=r(I,"LI",{});var O=i(j);de=n(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(O,"CODE",{});var Oe=i(G);ke=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ie=n(O," or "),B=r(O,"CODE",{});var Re=i(B);Xe=n(Re,"model([input_ids, attention_mask, token_type_ids])"),Re.forEach(t),O.forEach(t),Ee=h(I),P=r(I,"LI",{});var ee=i(P);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(ee,"CODE",{});var Ve=i(K);ze=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),C=r(_,"P",{});var J=i(C);Ce=n(J,`Note that when creating models and layers with
`),A=r(J,"A",{href:!0,rel:!0});var Ye=i(A);ye=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(_,F){k(_,d,F),e(d,g),e(d,c),e(c,u),e(d,b),k(_,l,F),k(_,p,F),e(p,q),e(q,be),e(p,he),e(p,S),e(S,re),k(_,Z,F),k(_,x,F),e(x,we),e(x,U),e(U,Te),e(x,ue),e(x,W),e(W,ve),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,D),e(D,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),k(_,oe,F),k(_,z,F),e(z,N),e(N,ge),e(N,H),e(H,xe),e(N,_e),e(N,Q),e(Q,me),e(z,Fe),e(z,j),e(j,de),e(j,G),e(G,ke),e(j,ie),e(j,B),e(B,Xe),e(z,Ee),e(z,P),e(P,qe),e(P,K),e(K,ze),k(_,ne,F),k(_,C,F),e(C,Ce),e(C,A),e(A,ye),e(C,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(z),_&&t(ne),_&&t(C)}}}function db(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function cb(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function pb(X){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function mb(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),b=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),be=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ve=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),D=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),z=a("ul"),N=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ke=o("model([input_ids, attention_mask])"),ie=o(" or "),B=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),P=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),C=a("p"),Ce=o(`Note that when creating models and layers with
`),A=a("a"),ye=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=n(Ue,"transformers"),Ue.forEach(t),b=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Pe=i(q);be=n(Pe,"having all inputs as keyword arguments (like PyTorch models), or"),Pe.forEach(t),he=h(se),S=r(se,"LI",{});var Be=i(S);re=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var He=i(U);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ve=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Ne=i(V);Me=n(Ne,"fit()"),Ne.forEach(t),fe=n(E," and "),D=r(E,"CODE",{});var We=i(D);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Ae=i(Y);pe=n(Ae,"Functional"),Ae.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),z=r(_,"UL",{});var I=i(z);N=r(I,"LI",{});var R=i(N);ge=n(R,"a single Tensor with "),H=r(R,"CODE",{});var Ke=i(H);xe=n(Ke,"input_ids"),Ke.forEach(t),_e=n(R," only and nothing else: "),Q=r(R,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),R.forEach(t),Fe=h(I),j=r(I,"LI",{});var O=i(j);de=n(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(O,"CODE",{});var Oe=i(G);ke=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ie=n(O," or "),B=r(O,"CODE",{});var Re=i(B);Xe=n(Re,"model([input_ids, attention_mask, token_type_ids])"),Re.forEach(t),O.forEach(t),Ee=h(I),P=r(I,"LI",{});var ee=i(P);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(ee,"CODE",{});var Ve=i(K);ze=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),C=r(_,"P",{});var J=i(C);Ce=n(J,`Note that when creating models and layers with
`),A=r(J,"A",{href:!0,rel:!0});var Ye=i(A);ye=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(_,F){k(_,d,F),e(d,g),e(d,c),e(c,u),e(d,b),k(_,l,F),k(_,p,F),e(p,q),e(q,be),e(p,he),e(p,S),e(S,re),k(_,Z,F),k(_,x,F),e(x,we),e(x,U),e(U,Te),e(x,ue),e(x,W),e(W,ve),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,D),e(D,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),k(_,oe,F),k(_,z,F),e(z,N),e(N,ge),e(N,H),e(H,xe),e(N,_e),e(N,Q),e(Q,me),e(z,Fe),e(z,j),e(j,de),e(j,G),e(G,ke),e(j,ie),e(j,B),e(B,Xe),e(z,Ee),e(z,P),e(P,qe),e(P,K),e(K,ze),k(_,ne,F),k(_,C,F),e(C,Ce),e(C,A),e(A,ye),e(C,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(z),_&&t(ne),_&&t(C)}}}function hb(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function ub(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function fb(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),b=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),be=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ve=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),D=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),z=a("ul"),N=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ke=o("model([input_ids, attention_mask])"),ie=o(" or "),B=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),P=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),C=a("p"),Ce=o(`Note that when creating models and layers with
`),A=a("a"),ye=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=n(Ue,"transformers"),Ue.forEach(t),b=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Pe=i(q);be=n(Pe,"having all inputs as keyword arguments (like PyTorch models), or"),Pe.forEach(t),he=h(se),S=r(se,"LI",{});var Be=i(S);re=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var He=i(U);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ve=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Ne=i(V);Me=n(Ne,"fit()"),Ne.forEach(t),fe=n(E," and "),D=r(E,"CODE",{});var We=i(D);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Ae=i(Y);pe=n(Ae,"Functional"),Ae.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),z=r(_,"UL",{});var I=i(z);N=r(I,"LI",{});var R=i(N);ge=n(R,"a single Tensor with "),H=r(R,"CODE",{});var Ke=i(H);xe=n(Ke,"input_ids"),Ke.forEach(t),_e=n(R," only and nothing else: "),Q=r(R,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),R.forEach(t),Fe=h(I),j=r(I,"LI",{});var O=i(j);de=n(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(O,"CODE",{});var Oe=i(G);ke=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ie=n(O," or "),B=r(O,"CODE",{});var Re=i(B);Xe=n(Re,"model([input_ids, attention_mask, token_type_ids])"),Re.forEach(t),O.forEach(t),Ee=h(I),P=r(I,"LI",{});var ee=i(P);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(ee,"CODE",{});var Ve=i(K);ze=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),C=r(_,"P",{});var J=i(C);Ce=n(J,`Note that when creating models and layers with
`),A=r(J,"A",{href:!0,rel:!0});var Ye=i(A);ye=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(_,F){k(_,d,F),e(d,g),e(d,c),e(c,u),e(d,b),k(_,l,F),k(_,p,F),e(p,q),e(q,be),e(p,he),e(p,S),e(S,re),k(_,Z,F),k(_,x,F),e(x,we),e(x,U),e(U,Te),e(x,ue),e(x,W),e(W,ve),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,D),e(D,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),k(_,oe,F),k(_,z,F),e(z,N),e(N,ge),e(N,H),e(H,xe),e(N,_e),e(N,Q),e(Q,me),e(z,Fe),e(z,j),e(j,de),e(j,G),e(G,ke),e(j,ie),e(j,B),e(B,Xe),e(z,Ee),e(z,P),e(P,qe),e(P,K),e(K,ze),k(_,ne,F),k(_,C,F),e(C,Ce),e(C,A),e(A,ye),e(C,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(z),_&&t(ne),_&&t(C)}}}function gb(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function _b(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function kb(X){let d,g;return d=new Ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function yb(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te;return{c(){d=a("p"),g=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),b=o(" accept two formats as input:"),l=m(),p=a("ul"),q=a("li"),be=o("having all inputs as keyword arguments (like PyTorch models), or"),he=m(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),ve=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Me=o("fit()"),fe=o(" and "),D=a("code"),ce=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),Y=a("code"),pe=o("Functional"),Le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=m(),z=a("ul"),N=a("li"),ge=o("a single Tensor with "),H=a("code"),xe=o("input_ids"),_e=o(" only and nothing else: "),Q=a("code"),me=o("model(input_ids)"),Fe=m(),j=a("li"),de=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ke=o("model([input_ids, attention_mask])"),ie=o(" or "),B=a("code"),Xe=o("model([input_ids, attention_mask, token_type_ids])"),Ee=m(),P=a("li"),qe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=a("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),C=a("p"),Ce=o(`Note that when creating models and layers with
`),A=a("a"),ye=o("subclassing"),te=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var F=i(d);g=n(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=n(Ue,"transformers"),Ue.forEach(t),b=n(F," accept two formats as input:"),F.forEach(t),l=h(_),p=r(_,"UL",{});var se=i(p);q=r(se,"LI",{});var Pe=i(q);be=n(Pe,"having all inputs as keyword arguments (like PyTorch models), or"),Pe.forEach(t),he=h(se),S=r(se,"LI",{});var Be=i(S);re=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),se.forEach(t),Z=h(_),x=r(_,"P",{});var E=i(x);we=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var He=i(U);Te=n(He,"model.fit()"),He.forEach(t),ue=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(E,"CODE",{});var je=i(W);ve=n(je,"model.fit()"),je.forEach(t),le=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(E,"CODE",{});var Ne=i(V);Me=n(Ne,"fit()"),Ne.forEach(t),fe=n(E," and "),D=r(E,"CODE",{});var We=i(D);ce=n(We,"predict()"),We.forEach(t),$e=n(E,`, such as when creating your own layers or models with
the Keras `),Y=r(E,"CODE",{});var Ae=i(Y);pe=n(Ae,"Functional"),Ae.forEach(t),Le=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),oe=h(_),z=r(_,"UL",{});var I=i(z);N=r(I,"LI",{});var R=i(N);ge=n(R,"a single Tensor with "),H=r(R,"CODE",{});var Ke=i(H);xe=n(Ke,"input_ids"),Ke.forEach(t),_e=n(R," only and nothing else: "),Q=r(R,"CODE",{});var Qe=i(Q);me=n(Qe,"model(input_ids)"),Qe.forEach(t),R.forEach(t),Fe=h(I),j=r(I,"LI",{});var O=i(j);de=n(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(O,"CODE",{});var Oe=i(G);ke=n(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ie=n(O," or "),B=r(O,"CODE",{});var Re=i(B);Xe=n(Re,"model([input_ids, attention_mask, token_type_ids])"),Re.forEach(t),O.forEach(t),Ee=h(I),P=r(I,"LI",{});var ee=i(P);qe=n(ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r(ee,"CODE",{});var Ve=i(K);ze=n(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),ee.forEach(t),I.forEach(t),ne=h(_),C=r(_,"P",{});var J=i(C);Ce=n(J,`Note that when creating models and layers with
`),A=r(J,"A",{href:!0,rel:!0});var Ye=i(A);ye=n(Ye,"subclassing"),Ye.forEach(t),te=n(J,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),J.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(_,F){k(_,d,F),e(d,g),e(d,c),e(c,u),e(d,b),k(_,l,F),k(_,p,F),e(p,q),e(q,be),e(p,he),e(p,S),e(S,re),k(_,Z,F),k(_,x,F),e(x,we),e(x,U),e(U,Te),e(x,ue),e(x,W),e(W,ve),e(x,le),e(x,V),e(V,Me),e(x,fe),e(x,D),e(D,ce),e(x,$e),e(x,Y),e(Y,pe),e(x,Le),k(_,oe,F),k(_,z,F),e(z,N),e(N,ge),e(N,H),e(H,xe),e(N,_e),e(N,Q),e(Q,me),e(z,Fe),e(z,j),e(j,de),e(j,G),e(G,ke),e(j,ie),e(j,B),e(B,Xe),e(z,Ee),e(z,P),e(P,qe),e(P,K),e(K,ze),k(_,ne,F),k(_,C,F),e(C,Ce),e(C,A),e(A,ye),e(C,te)},d(_){_&&t(d),_&&t(l),_&&t(p),_&&t(Z),_&&t(x),_&&t(oe),_&&t(z),_&&t(ne),_&&t(C)}}}function bb(X){let d,g,c,u,b;return{c(){d=a("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),b=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function wb(X){let d,g,c,u,b;return u=new Ie({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),g=o("Example:"),c=m(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),v(u,l,p),b=!0},p:Se,i(l){b||(M(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(u,l)}}}function Tb(X){let d,g;return d=new Ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){v(d,c,u),g=!0},p:Se,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){L(d,c)}}}function vb(X){let d,g,c,u,b,l,p,q,be,he,S,re,Z,x,we,U,Te,ue,W,ve,le,V,Me,fe,D,ce,$e,Y,pe,Le,oe,z,N,ge,H,xe,_e,Q,me,Fe,j,de,G,ke,ie,B,Xe,Ee,P,qe,K,ze,ne,C,Ce,A,ye,te,_,F,Ue,se,Pe,Be,E,He,je,Ne,We,Ae,I,R,Ke,Qe,O,Oe,Re,ee,Ve,J,Ye,cc,Qa,pc,mc,Zn,hc,uc,fc,eo,gc,Ua,_c,kc,Ba,yc,bc,wc,Do,Dl,to,So,Ir,es,Tc,Wr,vc,Sl,Ge,ts,Mc,Hr,$c,Lc,lt,Qr,xc,Fc,Ur,Xc,Ec,Br,qc,zc,At,Cc,Kr,jc,Nc,Rr,Pc,Ac,Vr,Oc,Dc,Sc,os,Ic,Yr,Wc,Hc,Qc,ns,Uc,Gr,Bc,Kc,Rc,ss,Vc,Ka,Yc,Gc,Jc,St,as,Zc,Jr,ep,tp,rs,Ra,op,Zr,np,sp,Va,ap,ei,rp,ip,Io,is,lp,ls,dp,ti,cp,pp,mp,vt,ds,hp,oi,up,fp,Wo,gp,oo,_p,ni,kp,yp,si,bp,wp,Tp,Ya,cs,Il,no,Ho,ai,ps,vp,ri,Mp,Wl,so,ms,$p,hs,Lp,ii,xp,Fp,Hl,ao,Qo,li,us,Xp,di,Ep,Ql,dt,fs,qp,ci,zp,Cp,gs,jp,Ga,Np,Pp,Ap,_s,Op,ks,Dp,Sp,Ip,Mt,ys,Wp,ro,Hp,Ja,Qp,Up,pi,Bp,Kp,Rp,Uo,Vp,Bo,Ul,io,Ko,mi,bs,Yp,hi,Gp,Bl,ct,ws,Jp,ui,Zp,em,Ts,tm,Za,om,nm,sm,vs,am,Ms,rm,im,lm,gt,$s,dm,lo,cm,er,pm,mm,fi,hm,um,fm,Ro,gm,Vo,_m,Yo,Kl,co,Go,gi,Ls,km,_i,ym,Rl,pt,xs,bm,ki,wm,Tm,Fs,vm,tr,Mm,$m,Lm,Xs,xm,Es,Fm,Xm,Em,et,qs,qm,po,zm,or,Cm,jm,yi,Nm,Pm,Am,Jo,Om,Zo,Dm,en,Sm,tn,Im,on,Vl,mo,nn,bi,zs,Wm,wi,Hm,Yl,mt,Cs,Qm,Ti,Um,Bm,js,Km,nr,Rm,Vm,Ym,Ns,Gm,Ps,Jm,Zm,eh,$t,As,th,ho,oh,sr,nh,sh,vi,ah,rh,ih,sn,lh,an,Gl,uo,rn,Mi,Os,dh,$i,ch,Jl,ht,Ds,ph,Li,mh,hh,Ss,uh,ar,fh,gh,_h,Is,kh,Ws,yh,bh,wh,_t,Hs,Th,fo,vh,rr,Mh,$h,xi,Lh,xh,Fh,ln,Xh,dn,Eh,cn,Zl,go,pn,Fi,Qs,qh,Xi,zh,ed,ut,Us,Ch,_o,jh,Ei,Nh,Ph,qi,Ah,Oh,Dh,Bs,Sh,ir,Ih,Wh,Hh,Ks,Qh,Rs,Uh,Bh,Kh,kt,Vs,Rh,ko,Vh,lr,Yh,Gh,zi,Jh,Zh,eu,mn,tu,hn,ou,un,td,yo,fn,Ci,Ys,nu,ji,su,od,ft,Gs,au,bo,ru,Ni,iu,lu,Pi,du,cu,pu,Js,mu,dr,hu,uu,fu,Zs,gu,ea,_u,ku,yu,Lt,ta,bu,wo,wu,cr,Tu,vu,Ai,Mu,$u,Lu,gn,xu,_n,nd,To,kn,Oi,oa,Fu,Di,Xu,sd,ot,na,Eu,Si,qu,zu,sa,Cu,pr,ju,Nu,Pu,aa,Au,ra,Ou,Du,Su,yn,Iu,xt,ia,Wu,vo,Hu,mr,Qu,Uu,Ii,Bu,Ku,Ru,bn,Vu,wn,ad,Mo,Tn,Wi,la,Yu,Hi,Gu,rd,nt,da,Ju,Qi,Zu,ef,ca,tf,hr,of,nf,sf,pa,af,ma,rf,lf,df,vn,cf,Ft,ha,pf,$o,mf,ur,hf,uf,Ui,ff,gf,_f,Mn,kf,$n,id,Lo,Ln,Bi,ua,yf,Ki,bf,ld,st,fa,wf,Ri,Tf,vf,ga,Mf,fr,$f,Lf,xf,_a,Ff,ka,Xf,Ef,qf,xn,zf,yt,ya,Cf,xo,jf,gr,Nf,Pf,Vi,Af,Of,Df,Fn,Sf,Xn,If,En,dd,Fo,qn,Yi,ba,Wf,Gi,Hf,cd,at,wa,Qf,Ji,Uf,Bf,Ta,Kf,_r,Rf,Vf,Yf,va,Gf,Ma,Jf,Zf,eg,zn,tg,Xt,$a,og,Xo,ng,kr,sg,ag,Zi,rg,ig,lg,Cn,dg,jn,pd,Eo,Nn,el,La,cg,tl,pg,md,rt,xa,mg,ol,hg,ug,Fa,fg,yr,gg,_g,kg,Xa,yg,Ea,bg,wg,Tg,Pn,vg,bt,qa,Mg,qo,$g,br,Lg,xg,nl,Fg,Xg,Eg,An,qg,On,zg,Dn,hd,zo,Sn,sl,za,Cg,al,jg,ud,it,Ca,Ng,Co,Pg,rl,Ag,Og,il,Dg,Sg,Ig,ja,Wg,wr,Hg,Qg,Ug,Na,Bg,Pa,Kg,Rg,Vg,In,Yg,wt,Aa,Gg,jo,Jg,Tr,Zg,e_,ll,t_,o_,n_,Wn,s_,Hn,a_,Qn,fd;return l=new tt({}),x=new tt({}),Ae=new tt({}),Oe=new ae({props:{name:"class transformers.XLMConfig",anchor:"transformers.XLMConfig",parameters:[{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/configuration_xlm.py#L40"}}),Do=new De({props:{anchor:"transformers.XLMConfig.example",$$slots:{default:[jy]},$$scope:{ctx:X}}}),es=new tt({}),ts=new ae({props:{name:"class transformers.XLMTokenizer",anchor:"transformers.XLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"do_lowercase_and_remove_accent",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),Wo=new De({props:{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ny]},$$scope:{ctx:X}}}),cs=new ae({props:{name:"save_vocabulary",anchor:"transformers.XLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/tokenization_xlm.py#L955"}}),ps=new tt({}),ms=new ae({props:{name:"class transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
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
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L395"}}),ys=new ae({props:{name:"forward",anchor:"transformers.XLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Uo=new Ze({props:{$$slots:{default:[Py]},$$scope:{ctx:X}}}),Bo=new De({props:{anchor:"transformers.XLMModel.forward.example",$$slots:{default:[Ay]},$$scope:{ctx:X}}}),bs=new tt({}),ws=new ae({props:{name:"class transformers.XLMWithLMHeadModel",anchor:"transformers.XLMWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L675"}}),$s=new ae({props:{name:"forward",anchor:"transformers.XLMWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ro=new Ze({props:{$$slots:{default:[Oy]},$$scope:{ctx:X}}}),Vo=new De({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example",$$slots:{default:[Dy]},$$scope:{ctx:X}}}),Yo=new De({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example-2",$$slots:{default:[Sy]},$$scope:{ctx:X}}}),Ls=new tt({}),xs=new ae({props:{name:"class transformers.XLMForSequenceClassification",anchor:"transformers.XLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L771"}}),qs=new ae({props:{name:"forward",anchor:"transformers.XLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Jo=new Ze({props:{$$slots:{default:[Iy]},$$scope:{ctx:X}}}),Zo=new De({props:{anchor:"transformers.XLMForSequenceClassification.forward.example",$$slots:{default:[Wy]},$$scope:{ctx:X}}}),en=new De({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-2",$$slots:{default:[Hy]},$$scope:{ctx:X}}}),tn=new De({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-3",$$slots:{default:[Qy]},$$scope:{ctx:X}}}),on=new De({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-4",$$slots:{default:[Uy]},$$scope:{ctx:X}}}),zs=new tt({}),Cs=new ae({props:{name:"class transformers.XLMForMultipleChoice",anchor:"transformers.XLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1185"}}),As=new ae({props:{name:"forward",anchor:"transformers.XLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),sn=new Ze({props:{$$slots:{default:[By]},$$scope:{ctx:X}}}),an=new De({props:{anchor:"transformers.XLMForMultipleChoice.forward.example",$$slots:{default:[Ky]},$$scope:{ctx:X}}}),Os=new tt({}),Ds=new ae({props:{name:"class transformers.XLMForTokenClassification",anchor:"transformers.XLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1100"}}),Hs=new ae({props:{name:"forward",anchor:"transformers.XLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ln=new Ze({props:{$$slots:{default:[Ry]},$$scope:{ctx:X}}}),dn=new De({props:{anchor:"transformers.XLMForTokenClassification.forward.example",$$slots:{default:[Vy]},$$scope:{ctx:X}}}),cn=new De({props:{anchor:"transformers.XLMForTokenClassification.forward.example-2",$$slots:{default:[Yy]},$$scope:{ctx:X}}}),Qs=new tt({}),Us=new ae({props:{name:"class transformers.XLMForQuestionAnsweringSimple",anchor:"transformers.XLMForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L874"}}),Vs=new ae({props:{name:"forward",anchor:"transformers.XLMForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),mn=new Ze({props:{$$slots:{default:[Gy]},$$scope:{ctx:X}}}),hn=new De({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example",$$slots:{default:[Jy]},$$scope:{ctx:X}}}),un=new De({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Zy]},$$scope:{ctx:X}}}),Ys=new tt({}),Gs=new ae({props:{name:"class transformers.XLMForQuestionAnswering",anchor:"transformers.XLMForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L979"}}),ta=new ae({props:{name:"forward",anchor:"transformers.XLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),gn=new Ze({props:{$$slots:{default:[eb]},$$scope:{ctx:X}}}),_n=new De({props:{anchor:"transformers.XLMForQuestionAnswering.forward.example",$$slots:{default:[tb]},$$scope:{ctx:X}}}),oa=new tt({}),na=new ae({props:{name:"class transformers.TFXLMModel",anchor:"transformers.TFXLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L696"}}),yn=new Ze({props:{$$slots:{default:[ob]},$$scope:{ctx:X}}}),ia=new ae({props:{name:"call",anchor:"transformers.TFXLMModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L701",returnDescription:`
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
`}}),bn=new Ze({props:{$$slots:{default:[nb]},$$scope:{ctx:X}}}),wn=new De({props:{anchor:"transformers.TFXLMModel.call.example",$$slots:{default:[sb]},$$scope:{ctx:X}}}),la=new tt({}),da=new ae({props:{name:"class transformers.TFXLMWithLMHeadModel",anchor:"transformers.TFXLMWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L809"}}),vn=new Ze({props:{$$slots:{default:[ab]},$$scope:{ctx:X}}}),ha=new ae({props:{name:"call",anchor:"transformers.TFXLMWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L838",returnDescription:`
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
`}}),Mn=new Ze({props:{$$slots:{default:[rb]},$$scope:{ctx:X}}}),$n=new De({props:{anchor:"transformers.TFXLMWithLMHeadModel.call.example",$$slots:{default:[ib]},$$scope:{ctx:X}}}),ua=new tt({}),fa=new ae({props:{name:"class transformers.TFXLMForSequenceClassification",anchor:"transformers.TFXLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L902"}}),xn=new Ze({props:{$$slots:{default:[lb]},$$scope:{ctx:X}}}),ya=new ae({props:{name:"call",anchor:"transformers.TFXLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L910",returnDescription:`
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
`}}),Fn=new Ze({props:{$$slots:{default:[db]},$$scope:{ctx:X}}}),Xn=new De({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example",$$slots:{default:[cb]},$$scope:{ctx:X}}}),En=new De({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example-2",$$slots:{default:[pb]},$$scope:{ctx:X}}}),ba=new tt({}),wa=new ae({props:{name:"class transformers.TFXLMForMultipleChoice",anchor:"transformers.TFXLMForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L988"}}),zn=new Ze({props:{$$slots:{default:[mb]},$$scope:{ctx:X}}}),$a=new ae({props:{name:"call",anchor:"transformers.TFXLMForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1017",returnDescription:`
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
`}}),Cn=new Ze({props:{$$slots:{default:[hb]},$$scope:{ctx:X}}}),jn=new De({props:{anchor:"transformers.TFXLMForMultipleChoice.call.example",$$slots:{default:[ub]},$$scope:{ctx:X}}}),La=new tt({}),xa=new ae({props:{name:"class transformers.TFXLMForTokenClassification",anchor:"transformers.TFXLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1130"}}),Pn=new Ze({props:{$$slots:{default:[fb]},$$scope:{ctx:X}}}),qa=new ae({props:{name:"call",anchor:"transformers.TFXLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1141",returnDescription:`
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
`}}),An=new Ze({props:{$$slots:{default:[gb]},$$scope:{ctx:X}}}),On=new De({props:{anchor:"transformers.TFXLMForTokenClassification.call.example",$$slots:{default:[_b]},$$scope:{ctx:X}}}),Dn=new De({props:{anchor:"transformers.TFXLMForTokenClassification.call.example-2",$$slots:{default:[kb]},$$scope:{ctx:X}}}),za=new tt({}),Ca=new ae({props:{name:"class transformers.TFXLMForQuestionAnsweringSimple",anchor:"transformers.TFXLMForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1218"}}),In=new Ze({props:{$$slots:{default:[yb]},$$scope:{ctx:X}}}),Aa=new ae({props:{name:"call",anchor:"transformers.TFXLMForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1226",returnDescription:`
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
`}}),Wn=new Ze({props:{$$slots:{default:[bb]},$$scope:{ctx:X}}}),Hn=new De({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example",$$slots:{default:[wb]},$$scope:{ctx:X}}}),Qn=new De({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Tb]},$$scope:{ctx:X}}}),{c(){d=a("meta"),g=m(),c=a("h1"),u=a("a"),b=a("span"),w(l.$$.fragment),p=m(),q=a("span"),be=o("XLM"),he=m(),S=a("h2"),re=a("a"),Z=a("span"),w(x.$$.fragment),we=m(),U=a("span"),Te=o("Overview"),ue=m(),W=a("p"),ve=o("The XLM model was proposed in "),le=a("a"),V=o("Cross-lingual Language Model Pretraining"),Me=o(` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),fe=m(),D=a("ul"),ce=a("li"),$e=o("a causal language modeling (CLM) objective (next token prediction),"),Y=m(),pe=a("li"),Le=o("a masked language modeling (MLM) objective (BERT-like), or"),oe=m(),z=a("li"),N=o("a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),ge=m(),H=a("p"),xe=o("The abstract from the paper is the following:"),_e=m(),Q=a("p"),me=a("em"),Fe=o(`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),j=m(),de=a("p"),G=o("Tips:"),ke=m(),ie=a("ul"),B=a("li"),Xe=o(`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),Ee=m(),P=a("li"),qe=o("XLM has multilingual checkpoints which leverage a specific "),K=a("code"),ze=o("lang"),ne=o(" parameter. Check out the "),C=a("a"),Ce=o("multi-lingual"),A=o(" page for more information."),ye=m(),te=a("p"),_=o("This model was contributed by "),F=a("a"),Ue=o("thomwolf"),se=o(". The original code can be found "),Pe=a("a"),Be=o("here"),E=o("."),He=m(),je=a("h2"),Ne=a("a"),We=a("span"),w(Ae.$$.fragment),I=m(),R=a("span"),Ke=o("XLMConfig"),Qe=m(),O=a("div"),w(Oe.$$.fragment),Re=m(),ee=a("p"),Ve=o("This is the configuration class to store the configuration of a "),J=a("a"),Ye=o("XLMModel"),cc=o(" or a "),Qa=a("a"),pc=o("TFXLMModel"),mc=o(`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Zn=a("a"),hc=o("xlm-mlm-en-2048"),uc=o(" architecture."),fc=m(),eo=a("p"),gc=o("Configuration objects inherit from "),Ua=a("a"),_c=o("PretrainedConfig"),kc=o(` and can be used to control the model outputs. Read the
documentation from `),Ba=a("a"),yc=o("PretrainedConfig"),bc=o(" for more information."),wc=m(),w(Do.$$.fragment),Dl=m(),to=a("h2"),So=a("a"),Ir=a("span"),w(es.$$.fragment),Tc=m(),Wr=a("span"),vc=o("XLMTokenizer"),Sl=m(),Ge=a("div"),w(ts.$$.fragment),Mc=m(),Hr=a("p"),$c=o("Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Lc=m(),lt=a("ul"),Qr=a("li"),xc=o("Moses preprocessing and tokenization for most supported languages."),Fc=m(),Ur=a("li"),Xc=o("Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),Ec=m(),Br=a("li"),qc=o("Optionally lowercases and normalizes all inputs text."),zc=m(),At=a("li"),Cc=o("The arguments "),Kr=a("code"),jc=o("special_tokens"),Nc=o(" and the function "),Rr=a("code"),Pc=o("set_special_tokens"),Ac=o(`, can be used to add additional symbols (like
\u201D`),Vr=a("strong"),Oc=o("classify"),Dc=o("\u201D) to a vocabulary."),Sc=m(),os=a("li"),Ic=o("The "),Yr=a("code"),Wc=o("lang2id"),Hc=o(` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),Qc=m(),ns=a("li"),Uc=o("The "),Gr=a("code"),Bc=o("id2lang"),Kc=o(" attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),Rc=m(),ss=a("p"),Vc=o("This tokenizer inherits from "),Ka=a("a"),Yc=o("PreTrainedTokenizer"),Gc=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jc=m(),St=a("div"),w(as.$$.fragment),Zc=m(),Jr=a("p"),ep=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),tp=m(),rs=a("ul"),Ra=a("li"),op=o("single sequence: "),Zr=a("code"),np=o("<s> X </s>"),sp=m(),Va=a("li"),ap=o("pair of sequences: "),ei=a("code"),rp=o("<s> A </s> B </s>"),ip=m(),Io=a("div"),w(is.$$.fragment),lp=m(),ls=a("p"),dp=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ti=a("code"),cp=o("prepare_for_model"),pp=o(" method."),mp=m(),vt=a("div"),w(ds.$$.fragment),hp=m(),oi=a("p"),up=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),fp=m(),w(Wo.$$.fragment),gp=m(),oo=a("p"),_p=o("If "),ni=a("code"),kp=o("token_ids_1"),yp=o(" is "),si=a("code"),bp=o("None"),wp=o(", this method only returns the first portion of the mask (0s)."),Tp=m(),Ya=a("div"),w(cs.$$.fragment),Il=m(),no=a("h2"),Ho=a("a"),ai=a("span"),w(ps.$$.fragment),vp=m(),ri=a("span"),Mp=o("XLM specific outputs"),Wl=m(),so=a("div"),w(ms.$$.fragment),$p=m(),hs=a("p"),Lp=o("Base class for outputs of question answering models using a "),ii=a("code"),xp=o("SquadHead"),Fp=o("."),Hl=m(),ao=a("h2"),Qo=a("a"),li=a("span"),w(us.$$.fragment),Xp=m(),di=a("span"),Ep=o("XLMModel"),Ql=m(),dt=a("div"),w(fs.$$.fragment),qp=m(),ci=a("p"),zp=o("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Cp=m(),gs=a("p"),jp=o("This model inherits from "),Ga=a("a"),Np=o("PreTrainedModel"),Pp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap=m(),_s=a("p"),Op=o("This model is also a PyTorch "),ks=a("a"),Dp=o("torch.nn.Module"),Sp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ip=m(),Mt=a("div"),w(ys.$$.fragment),Wp=m(),ro=a("p"),Hp=o("The "),Ja=a("a"),Qp=o("XLMModel"),Up=o(" forward method, overrides the "),pi=a("code"),Bp=o("__call__"),Kp=o(" special method."),Rp=m(),w(Uo.$$.fragment),Vp=m(),w(Bo.$$.fragment),Ul=m(),io=a("h2"),Ko=a("a"),mi=a("span"),w(bs.$$.fragment),Yp=m(),hi=a("span"),Gp=o("XLMWithLMHeadModel"),Bl=m(),ct=a("div"),w(ws.$$.fragment),Jp=m(),ui=a("p"),Zp=o(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),em=m(),Ts=a("p"),tm=o("This model inherits from "),Za=a("a"),om=o("PreTrainedModel"),nm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=m(),vs=a("p"),am=o("This model is also a PyTorch "),Ms=a("a"),rm=o("torch.nn.Module"),im=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lm=m(),gt=a("div"),w($s.$$.fragment),dm=m(),lo=a("p"),cm=o("The "),er=a("a"),pm=o("XLMWithLMHeadModel"),mm=o(" forward method, overrides the "),fi=a("code"),hm=o("__call__"),um=o(" special method."),fm=m(),w(Ro.$$.fragment),gm=m(),w(Vo.$$.fragment),_m=m(),w(Yo.$$.fragment),Kl=m(),co=a("h2"),Go=a("a"),gi=a("span"),w(Ls.$$.fragment),km=m(),_i=a("span"),ym=o("XLMForSequenceClassification"),Rl=m(),pt=a("div"),w(xs.$$.fragment),bm=m(),ki=a("p"),wm=o(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Tm=m(),Fs=a("p"),vm=o("This model inherits from "),tr=a("a"),Mm=o("PreTrainedModel"),$m=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm=m(),Xs=a("p"),xm=o("This model is also a PyTorch "),Es=a("a"),Fm=o("torch.nn.Module"),Xm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Em=m(),et=a("div"),w(qs.$$.fragment),qm=m(),po=a("p"),zm=o("The "),or=a("a"),Cm=o("XLMForSequenceClassification"),jm=o(" forward method, overrides the "),yi=a("code"),Nm=o("__call__"),Pm=o(" special method."),Am=m(),w(Jo.$$.fragment),Om=m(),w(Zo.$$.fragment),Dm=m(),w(en.$$.fragment),Sm=m(),w(tn.$$.fragment),Im=m(),w(on.$$.fragment),Vl=m(),mo=a("h2"),nn=a("a"),bi=a("span"),w(zs.$$.fragment),Wm=m(),wi=a("span"),Hm=o("XLMForMultipleChoice"),Yl=m(),mt=a("div"),w(Cs.$$.fragment),Qm=m(),Ti=a("p"),Um=o(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bm=m(),js=a("p"),Km=o("This model inherits from "),nr=a("a"),Rm=o("PreTrainedModel"),Vm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ym=m(),Ns=a("p"),Gm=o("This model is also a PyTorch "),Ps=a("a"),Jm=o("torch.nn.Module"),Zm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh=m(),$t=a("div"),w(As.$$.fragment),th=m(),ho=a("p"),oh=o("The "),sr=a("a"),nh=o("XLMForMultipleChoice"),sh=o(" forward method, overrides the "),vi=a("code"),ah=o("__call__"),rh=o(" special method."),ih=m(),w(sn.$$.fragment),lh=m(),w(an.$$.fragment),Gl=m(),uo=a("h2"),rn=a("a"),Mi=a("span"),w(Os.$$.fragment),dh=m(),$i=a("span"),ch=o("XLMForTokenClassification"),Jl=m(),ht=a("div"),w(Ds.$$.fragment),ph=m(),Li=a("p"),mh=o(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hh=m(),Ss=a("p"),uh=o("This model inherits from "),ar=a("a"),fh=o("PreTrainedModel"),gh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=m(),Is=a("p"),kh=o("This model is also a PyTorch "),Ws=a("a"),yh=o("torch.nn.Module"),bh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh=m(),_t=a("div"),w(Hs.$$.fragment),Th=m(),fo=a("p"),vh=o("The "),rr=a("a"),Mh=o("XLMForTokenClassification"),$h=o(" forward method, overrides the "),xi=a("code"),Lh=o("__call__"),xh=o(" special method."),Fh=m(),w(ln.$$.fragment),Xh=m(),w(dn.$$.fragment),Eh=m(),w(cn.$$.fragment),Zl=m(),go=a("h2"),pn=a("a"),Fi=a("span"),w(Qs.$$.fragment),qh=m(),Xi=a("span"),zh=o("XLMForQuestionAnsweringSimple"),ed=m(),ut=a("div"),w(Us.$$.fragment),Ch=m(),_o=a("p"),jh=o(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ei=a("code"),Nh=o("span start logits"),Ph=o(" and "),qi=a("code"),Ah=o("span end logits"),Oh=o(")."),Dh=m(),Bs=a("p"),Sh=o("This model inherits from "),ir=a("a"),Ih=o("PreTrainedModel"),Wh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=m(),Ks=a("p"),Qh=o("This model is also a PyTorch "),Rs=a("a"),Uh=o("torch.nn.Module"),Bh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kh=m(),kt=a("div"),w(Vs.$$.fragment),Rh=m(),ko=a("p"),Vh=o("The "),lr=a("a"),Yh=o("XLMForQuestionAnsweringSimple"),Gh=o(" forward method, overrides the "),zi=a("code"),Jh=o("__call__"),Zh=o(" special method."),eu=m(),w(mn.$$.fragment),tu=m(),w(hn.$$.fragment),ou=m(),w(un.$$.fragment),td=m(),yo=a("h2"),fn=a("a"),Ci=a("span"),w(Ys.$$.fragment),nu=m(),ji=a("span"),su=o("XLMForQuestionAnswering"),od=m(),ft=a("div"),w(Gs.$$.fragment),au=m(),bo=a("p"),ru=o(`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Ni=a("code"),iu=o("span start logits"),lu=o(" and "),Pi=a("code"),du=o("span end logits"),cu=o(")."),pu=m(),Js=a("p"),mu=o("This model inherits from "),dr=a("a"),hu=o("PreTrainedModel"),uu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=m(),Zs=a("p"),gu=o("This model is also a PyTorch "),ea=a("a"),_u=o("torch.nn.Module"),ku=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yu=m(),Lt=a("div"),w(ta.$$.fragment),bu=m(),wo=a("p"),wu=o("The "),cr=a("a"),Tu=o("XLMForQuestionAnswering"),vu=o(" forward method, overrides the "),Ai=a("code"),Mu=o("__call__"),$u=o(" special method."),Lu=m(),w(gn.$$.fragment),xu=m(),w(_n.$$.fragment),nd=m(),To=a("h2"),kn=a("a"),Oi=a("span"),w(oa.$$.fragment),Fu=m(),Di=a("span"),Xu=o("TFXLMModel"),sd=m(),ot=a("div"),w(na.$$.fragment),Eu=m(),Si=a("p"),qu=o("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),zu=m(),sa=a("p"),Cu=o("This model inherits from "),pr=a("a"),ju=o("TFPreTrainedModel"),Nu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=m(),aa=a("p"),Au=o("This model is also a "),ra=a("a"),Ou=o("tf.keras.Model"),Du=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su=m(),w(yn.$$.fragment),Iu=m(),xt=a("div"),w(ia.$$.fragment),Wu=m(),vo=a("p"),Hu=o("The "),mr=a("a"),Qu=o("TFXLMModel"),Uu=o(" forward method, overrides the "),Ii=a("code"),Bu=o("__call__"),Ku=o(" special method."),Ru=m(),w(bn.$$.fragment),Vu=m(),w(wn.$$.fragment),ad=m(),Mo=a("h2"),Tn=a("a"),Wi=a("span"),w(la.$$.fragment),Yu=m(),Hi=a("span"),Gu=o("TFXLMWithLMHeadModel"),rd=m(),nt=a("div"),w(da.$$.fragment),Ju=m(),Qi=a("p"),Zu=o(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ef=m(),ca=a("p"),tf=o("This model inherits from "),hr=a("a"),of=o("TFPreTrainedModel"),nf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf=m(),pa=a("p"),af=o("This model is also a "),ma=a("a"),rf=o("tf.keras.Model"),lf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),df=m(),w(vn.$$.fragment),cf=m(),Ft=a("div"),w(ha.$$.fragment),pf=m(),$o=a("p"),mf=o("The "),ur=a("a"),hf=o("TFXLMWithLMHeadModel"),uf=o(" forward method, overrides the "),Ui=a("code"),ff=o("__call__"),gf=o(" special method."),_f=m(),w(Mn.$$.fragment),kf=m(),w($n.$$.fragment),id=m(),Lo=a("h2"),Ln=a("a"),Bi=a("span"),w(ua.$$.fragment),yf=m(),Ki=a("span"),bf=o("TFXLMForSequenceClassification"),ld=m(),st=a("div"),w(fa.$$.fragment),wf=m(),Ri=a("p"),Tf=o(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),vf=m(),ga=a("p"),Mf=o("This model inherits from "),fr=a("a"),$f=o("TFPreTrainedModel"),Lf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=m(),_a=a("p"),Ff=o("This model is also a "),ka=a("a"),Xf=o("tf.keras.Model"),Ef=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=m(),w(xn.$$.fragment),zf=m(),yt=a("div"),w(ya.$$.fragment),Cf=m(),xo=a("p"),jf=o("The "),gr=a("a"),Nf=o("TFXLMForSequenceClassification"),Pf=o(" forward method, overrides the "),Vi=a("code"),Af=o("__call__"),Of=o(" special method."),Df=m(),w(Fn.$$.fragment),Sf=m(),w(Xn.$$.fragment),If=m(),w(En.$$.fragment),dd=m(),Fo=a("h2"),qn=a("a"),Yi=a("span"),w(ba.$$.fragment),Wf=m(),Gi=a("span"),Hf=o("TFXLMForMultipleChoice"),cd=m(),at=a("div"),w(wa.$$.fragment),Qf=m(),Ji=a("p"),Uf=o(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bf=m(),Ta=a("p"),Kf=o("This model inherits from "),_r=a("a"),Rf=o("TFPreTrainedModel"),Vf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yf=m(),va=a("p"),Gf=o("This model is also a "),Ma=a("a"),Jf=o("tf.keras.Model"),Zf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eg=m(),w(zn.$$.fragment),tg=m(),Xt=a("div"),w($a.$$.fragment),og=m(),Xo=a("p"),ng=o("The "),kr=a("a"),sg=o("TFXLMForMultipleChoice"),ag=o(" forward method, overrides the "),Zi=a("code"),rg=o("__call__"),ig=o(" special method."),lg=m(),w(Cn.$$.fragment),dg=m(),w(jn.$$.fragment),pd=m(),Eo=a("h2"),Nn=a("a"),el=a("span"),w(La.$$.fragment),cg=m(),tl=a("span"),pg=o("TFXLMForTokenClassification"),md=m(),rt=a("div"),w(xa.$$.fragment),mg=m(),ol=a("p"),hg=o(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ug=m(),Fa=a("p"),fg=o("This model inherits from "),yr=a("a"),gg=o("TFPreTrainedModel"),_g=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kg=m(),Xa=a("p"),yg=o("This model is also a "),Ea=a("a"),bg=o("tf.keras.Model"),wg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tg=m(),w(Pn.$$.fragment),vg=m(),bt=a("div"),w(qa.$$.fragment),Mg=m(),qo=a("p"),$g=o("The "),br=a("a"),Lg=o("TFXLMForTokenClassification"),xg=o(" forward method, overrides the "),nl=a("code"),Fg=o("__call__"),Xg=o(" special method."),Eg=m(),w(An.$$.fragment),qg=m(),w(On.$$.fragment),zg=m(),w(Dn.$$.fragment),hd=m(),zo=a("h2"),Sn=a("a"),sl=a("span"),w(za.$$.fragment),Cg=m(),al=a("span"),jg=o("TFXLMForQuestionAnsweringSimple"),ud=m(),it=a("div"),w(Ca.$$.fragment),Ng=m(),Co=a("p"),Pg=o(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),rl=a("code"),Ag=o("span start logits"),Og=o(" and "),il=a("code"),Dg=o("span end logits"),Sg=o(")."),Ig=m(),ja=a("p"),Wg=o("This model inherits from "),wr=a("a"),Hg=o("TFPreTrainedModel"),Qg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=m(),Na=a("p"),Bg=o("This model is also a "),Pa=a("a"),Kg=o("tf.keras.Model"),Rg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vg=m(),w(In.$$.fragment),Yg=m(),wt=a("div"),w(Aa.$$.fragment),Gg=m(),jo=a("p"),Jg=o("The "),Tr=a("a"),Zg=o("TFXLMForQuestionAnsweringSimple"),e_=o(" forward method, overrides the "),ll=a("code"),t_=o("__call__"),o_=o(" special method."),n_=m(),w(Wn.$$.fragment),s_=m(),w(Hn.$$.fragment),a_=m(),w(Qn.$$.fragment),this.h()},l(s){const y=zy('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(t),g=h(s),c=r(s,"H1",{class:!0});var Oa=i(c);u=r(Oa,"A",{id:!0,class:!0,href:!0});var dl=i(u);b=r(dl,"SPAN",{});var cl=i(b);T(l.$$.fragment,cl),cl.forEach(t),dl.forEach(t),p=h(Oa),q=r(Oa,"SPAN",{});var pl=i(q);be=n(pl,"XLM"),pl.forEach(t),Oa.forEach(t),he=h(s),S=r(s,"H2",{class:!0});var Da=i(S);re=r(Da,"A",{id:!0,class:!0,href:!0});var ml=i(re);Z=r(ml,"SPAN",{});var hl=i(Z);T(x.$$.fragment,hl),hl.forEach(t),ml.forEach(t),we=h(Da),U=r(Da,"SPAN",{});var ul=i(U);Te=n(ul,"Overview"),ul.forEach(t),Da.forEach(t),ue=h(s),W=r(s,"P",{});var Sa=i(W);ve=n(Sa,"The XLM model was proposed in "),le=r(Sa,"A",{href:!0,rel:!0});var fl=i(le);V=n(fl,"Cross-lingual Language Model Pretraining"),fl.forEach(t),Me=n(Sa,` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),Sa.forEach(t),fe=h(s),D=r(s,"UL",{});var No=i(D);ce=r(No,"LI",{});var gl=i(ce);$e=n(gl,"a causal language modeling (CLM) objective (next token prediction),"),gl.forEach(t),Y=h(No),pe=r(No,"LI",{});var _l=i(pe);Le=n(_l,"a masked language modeling (MLM) objective (BERT-like), or"),_l.forEach(t),oe=h(No),z=r(No,"LI",{});var kl=i(z);N=n(kl,"a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),kl.forEach(t),No.forEach(t),ge=h(s),H=r(s,"P",{});var yl=i(H);xe=n(yl,"The abstract from the paper is the following:"),yl.forEach(t),_e=h(s),Q=r(s,"P",{});var bl=i(Q);me=r(bl,"EM",{});var wl=i(me);Fe=n(wl,`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),wl.forEach(t),bl.forEach(t),j=h(s),de=r(s,"P",{});var Tl=i(de);G=n(Tl,"Tips:"),Tl.forEach(t),ke=h(s),ie=r(s,"UL",{});var Ia=i(ie);B=r(Ia,"LI",{});var vl=i(B);Xe=n(vl,`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),vl.forEach(t),Ee=h(Ia),P=r(Ia,"LI",{});var Po=i(P);qe=n(Po,"XLM has multilingual checkpoints which leverage a specific "),K=r(Po,"CODE",{});var Ml=i(K);ze=n(Ml,"lang"),Ml.forEach(t),ne=n(Po," parameter. Check out the "),C=r(Po,"A",{href:!0});var $l=i(C);Ce=n($l,"multi-lingual"),$l.forEach(t),A=n(Po," page for more information."),Po.forEach(t),Ia.forEach(t),ye=h(s),te=r(s,"P",{});var Ao=i(te);_=n(Ao,"This model was contributed by "),F=r(Ao,"A",{href:!0,rel:!0});var Ll=i(F);Ue=n(Ll,"thomwolf"),Ll.forEach(t),se=n(Ao,". The original code can be found "),Pe=r(Ao,"A",{href:!0,rel:!0});var xl=i(Pe);Be=n(xl,"here"),xl.forEach(t),E=n(Ao,"."),Ao.forEach(t),He=h(s),je=r(s,"H2",{class:!0});var Wa=i(je);Ne=r(Wa,"A",{id:!0,class:!0,href:!0});var Fl=i(Ne);We=r(Fl,"SPAN",{});var Xl=i(We);T(Ae.$$.fragment,Xl),Xl.forEach(t),Fl.forEach(t),I=h(Wa),R=r(Wa,"SPAN",{});var El=i(R);Ke=n(El,"XLMConfig"),El.forEach(t),Wa.forEach(t),Qe=h(s),O=r(s,"DIV",{class:!0});var Ot=i(O);T(Oe.$$.fragment,Ot),Re=h(Ot),ee=r(Ot,"P",{});var Dt=i(ee);Ve=n(Dt,"This is the configuration class to store the configuration of a "),J=r(Dt,"A",{href:!0});var ql=i(J);Ye=n(ql,"XLMModel"),ql.forEach(t),cc=n(Dt," or a "),Qa=r(Dt,"A",{href:!0});var zl=i(Qa);pc=n(zl,"TFXLMModel"),zl.forEach(t),mc=n(Dt,`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Zn=r(Dt,"A",{href:!0,rel:!0});var Cl=i(Zn);hc=n(Cl,"xlm-mlm-en-2048"),Cl.forEach(t),uc=n(Dt," architecture."),Dt.forEach(t),fc=h(Ot),eo=r(Ot,"P",{});var Oo=i(eo);gc=n(Oo,"Configuration objects inherit from "),Ua=r(Oo,"A",{href:!0});var jl=i(Ua);_c=n(jl,"PretrainedConfig"),jl.forEach(t),kc=n(Oo,` and can be used to control the model outputs. Read the
documentation from `),Ba=r(Oo,"A",{href:!0});var Nl=i(Ba);yc=n(Nl,"PretrainedConfig"),Nl.forEach(t),bc=n(Oo," for more information."),Oo.forEach(t),wc=h(Ot),T(Do.$$.fragment,Ot),Ot.forEach(t),Dl=h(s),to=r(s,"H2",{class:!0});var Ha=i(to);So=r(Ha,"A",{id:!0,class:!0,href:!0});var Pl=i(So);Ir=r(Pl,"SPAN",{});var Al=i(Ir);T(es.$$.fragment,Al),Al.forEach(t),Pl.forEach(t),Tc=h(Ha),Wr=r(Ha,"SPAN",{});var Ol=i(Wr);vc=n(Ol,"XLMTokenizer"),Ol.forEach(t),Ha.forEach(t),Sl=h(s),Ge=r(s,"DIV",{class:!0});var Je=i(Ge);T(ts.$$.fragment,Je),Mc=h(Je),Hr=r(Je,"P",{});var l_=i(Hr);$c=n(l_,"Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),l_.forEach(t),Lc=h(Je),lt=r(Je,"UL",{});var Et=i(lt);Qr=r(Et,"LI",{});var d_=i(Qr);xc=n(d_,"Moses preprocessing and tokenization for most supported languages."),d_.forEach(t),Fc=h(Et),Ur=r(Et,"LI",{});var c_=i(Ur);Xc=n(c_,"Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),c_.forEach(t),Ec=h(Et),Br=r(Et,"LI",{});var p_=i(Br);qc=n(p_,"Optionally lowercases and normalizes all inputs text."),p_.forEach(t),zc=h(Et),At=r(Et,"LI",{});var Un=i(At);Cc=n(Un,"The arguments "),Kr=r(Un,"CODE",{});var m_=i(Kr);jc=n(m_,"special_tokens"),m_.forEach(t),Nc=n(Un," and the function "),Rr=r(Un,"CODE",{});var h_=i(Rr);Pc=n(h_,"set_special_tokens"),h_.forEach(t),Ac=n(Un,`, can be used to add additional symbols (like
\u201D`),Vr=r(Un,"STRONG",{});var u_=i(Vr);Oc=n(u_,"classify"),u_.forEach(t),Dc=n(Un,"\u201D) to a vocabulary."),Un.forEach(t),Sc=h(Et),os=r(Et,"LI",{});var gd=i(os);Ic=n(gd,"The "),Yr=r(gd,"CODE",{});var f_=i(Yr);Wc=n(f_,"lang2id"),f_.forEach(t),Hc=n(gd,` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),gd.forEach(t),Qc=h(Et),ns=r(Et,"LI",{});var _d=i(ns);Uc=n(_d,"The "),Gr=r(_d,"CODE",{});var g_=i(Gr);Bc=n(g_,"id2lang"),g_.forEach(t),Kc=n(_d," attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),_d.forEach(t),Et.forEach(t),Rc=h(Je),ss=r(Je,"P",{});var kd=i(ss);Vc=n(kd,"This tokenizer inherits from "),Ka=r(kd,"A",{href:!0});var __=i(Ka);Yc=n(__,"PreTrainedTokenizer"),__.forEach(t),Gc=n(kd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kd.forEach(t),Jc=h(Je),St=r(Je,"DIV",{class:!0});var vr=i(St);T(as.$$.fragment,vr),Zc=h(vr),Jr=r(vr,"P",{});var k_=i(Jr);ep=n(k_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),k_.forEach(t),tp=h(vr),rs=r(vr,"UL",{});var yd=i(rs);Ra=r(yd,"LI",{});var r_=i(Ra);op=n(r_,"single sequence: "),Zr=r(r_,"CODE",{});var y_=i(Zr);np=n(y_,"<s> X </s>"),y_.forEach(t),r_.forEach(t),sp=h(yd),Va=r(yd,"LI",{});var i_=i(Va);ap=n(i_,"pair of sequences: "),ei=r(i_,"CODE",{});var b_=i(ei);rp=n(b_,"<s> A </s> B </s>"),b_.forEach(t),i_.forEach(t),yd.forEach(t),vr.forEach(t),ip=h(Je),Io=r(Je,"DIV",{class:!0});var bd=i(Io);T(is.$$.fragment,bd),lp=h(bd),ls=r(bd,"P",{});var wd=i(ls);dp=n(wd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ti=r(wd,"CODE",{});var w_=i(ti);cp=n(w_,"prepare_for_model"),w_.forEach(t),pp=n(wd," method."),wd.forEach(t),bd.forEach(t),mp=h(Je),vt=r(Je,"DIV",{class:!0});var Bn=i(vt);T(ds.$$.fragment,Bn),hp=h(Bn),oi=r(Bn,"P",{});var T_=i(oi);up=n(T_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),T_.forEach(t),fp=h(Bn),T(Wo.$$.fragment,Bn),gp=h(Bn),oo=r(Bn,"P",{});var Mr=i(oo);_p=n(Mr,"If "),ni=r(Mr,"CODE",{});var v_=i(ni);kp=n(v_,"token_ids_1"),v_.forEach(t),yp=n(Mr," is "),si=r(Mr,"CODE",{});var M_=i(si);bp=n(M_,"None"),M_.forEach(t),wp=n(Mr,", this method only returns the first portion of the mask (0s)."),Mr.forEach(t),Bn.forEach(t),Tp=h(Je),Ya=r(Je,"DIV",{class:!0});var $_=i(Ya);T(cs.$$.fragment,$_),$_.forEach(t),Je.forEach(t),Il=h(s),no=r(s,"H2",{class:!0});var Td=i(no);Ho=r(Td,"A",{id:!0,class:!0,href:!0});var L_=i(Ho);ai=r(L_,"SPAN",{});var x_=i(ai);T(ps.$$.fragment,x_),x_.forEach(t),L_.forEach(t),vp=h(Td),ri=r(Td,"SPAN",{});var F_=i(ri);Mp=n(F_,"XLM specific outputs"),F_.forEach(t),Td.forEach(t),Wl=h(s),so=r(s,"DIV",{class:!0});var vd=i(so);T(ms.$$.fragment,vd),$p=h(vd),hs=r(vd,"P",{});var Md=i(hs);Lp=n(Md,"Base class for outputs of question answering models using a "),ii=r(Md,"CODE",{});var X_=i(ii);xp=n(X_,"SquadHead"),X_.forEach(t),Fp=n(Md,"."),Md.forEach(t),vd.forEach(t),Hl=h(s),ao=r(s,"H2",{class:!0});var $d=i(ao);Qo=r($d,"A",{id:!0,class:!0,href:!0});var E_=i(Qo);li=r(E_,"SPAN",{});var q_=i(li);T(us.$$.fragment,q_),q_.forEach(t),E_.forEach(t),Xp=h($d),di=r($d,"SPAN",{});var z_=i(di);Ep=n(z_,"XLMModel"),z_.forEach(t),$d.forEach(t),Ql=h(s),dt=r(s,"DIV",{class:!0});var It=i(dt);T(fs.$$.fragment,It),qp=h(It),ci=r(It,"P",{});var C_=i(ci);zp=n(C_,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),C_.forEach(t),Cp=h(It),gs=r(It,"P",{});var Ld=i(gs);jp=n(Ld,"This model inherits from "),Ga=r(Ld,"A",{href:!0});var j_=i(Ga);Np=n(j_,"PreTrainedModel"),j_.forEach(t),Pp=n(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),Ap=h(It),_s=r(It,"P",{});var xd=i(_s);Op=n(xd,"This model is also a PyTorch "),ks=r(xd,"A",{href:!0,rel:!0});var N_=i(ks);Dp=n(N_,"torch.nn.Module"),N_.forEach(t),Sp=n(xd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd.forEach(t),Ip=h(It),Mt=r(It,"DIV",{class:!0});var Kn=i(Mt);T(ys.$$.fragment,Kn),Wp=h(Kn),ro=r(Kn,"P",{});var $r=i(ro);Hp=n($r,"The "),Ja=r($r,"A",{href:!0});var P_=i(Ja);Qp=n(P_,"XLMModel"),P_.forEach(t),Up=n($r," forward method, overrides the "),pi=r($r,"CODE",{});var A_=i(pi);Bp=n(A_,"__call__"),A_.forEach(t),Kp=n($r," special method."),$r.forEach(t),Rp=h(Kn),T(Uo.$$.fragment,Kn),Vp=h(Kn),T(Bo.$$.fragment,Kn),Kn.forEach(t),It.forEach(t),Ul=h(s),io=r(s,"H2",{class:!0});var Fd=i(io);Ko=r(Fd,"A",{id:!0,class:!0,href:!0});var O_=i(Ko);mi=r(O_,"SPAN",{});var D_=i(mi);T(bs.$$.fragment,D_),D_.forEach(t),O_.forEach(t),Yp=h(Fd),hi=r(Fd,"SPAN",{});var S_=i(hi);Gp=n(S_,"XLMWithLMHeadModel"),S_.forEach(t),Fd.forEach(t),Bl=h(s),ct=r(s,"DIV",{class:!0});var Wt=i(ct);T(ws.$$.fragment,Wt),Jp=h(Wt),ui=r(Wt,"P",{});var I_=i(ui);Zp=n(I_,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),I_.forEach(t),em=h(Wt),Ts=r(Wt,"P",{});var Xd=i(Ts);tm=n(Xd,"This model inherits from "),Za=r(Xd,"A",{href:!0});var W_=i(Za);om=n(W_,"PreTrainedModel"),W_.forEach(t),nm=n(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),sm=h(Wt),vs=r(Wt,"P",{});var Ed=i(vs);am=n(Ed,"This model is also a PyTorch "),Ms=r(Ed,"A",{href:!0,rel:!0});var H_=i(Ms);rm=n(H_,"torch.nn.Module"),H_.forEach(t),im=n(Ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed.forEach(t),lm=h(Wt),gt=r(Wt,"DIV",{class:!0});var Ht=i(gt);T($s.$$.fragment,Ht),dm=h(Ht),lo=r(Ht,"P",{});var Lr=i(lo);cm=n(Lr,"The "),er=r(Lr,"A",{href:!0});var Q_=i(er);pm=n(Q_,"XLMWithLMHeadModel"),Q_.forEach(t),mm=n(Lr," forward method, overrides the "),fi=r(Lr,"CODE",{});var U_=i(fi);hm=n(U_,"__call__"),U_.forEach(t),um=n(Lr," special method."),Lr.forEach(t),fm=h(Ht),T(Ro.$$.fragment,Ht),gm=h(Ht),T(Vo.$$.fragment,Ht),_m=h(Ht),T(Yo.$$.fragment,Ht),Ht.forEach(t),Wt.forEach(t),Kl=h(s),co=r(s,"H2",{class:!0});var qd=i(co);Go=r(qd,"A",{id:!0,class:!0,href:!0});var B_=i(Go);gi=r(B_,"SPAN",{});var K_=i(gi);T(Ls.$$.fragment,K_),K_.forEach(t),B_.forEach(t),km=h(qd),_i=r(qd,"SPAN",{});var R_=i(_i);ym=n(R_,"XLMForSequenceClassification"),R_.forEach(t),qd.forEach(t),Rl=h(s),pt=r(s,"DIV",{class:!0});var Qt=i(pt);T(xs.$$.fragment,Qt),bm=h(Qt),ki=r(Qt,"P",{});var V_=i(ki);wm=n(V_,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),V_.forEach(t),Tm=h(Qt),Fs=r(Qt,"P",{});var zd=i(Fs);vm=n(zd,"This model inherits from "),tr=r(zd,"A",{href:!0});var Y_=i(tr);Mm=n(Y_,"PreTrainedModel"),Y_.forEach(t),$m=n(zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd.forEach(t),Lm=h(Qt),Xs=r(Qt,"P",{});var Cd=i(Xs);xm=n(Cd,"This model is also a PyTorch "),Es=r(Cd,"A",{href:!0,rel:!0});var G_=i(Es);Fm=n(G_,"torch.nn.Module"),G_.forEach(t),Xm=n(Cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cd.forEach(t),Em=h(Qt),et=r(Qt,"DIV",{class:!0});var Tt=i(et);T(qs.$$.fragment,Tt),qm=h(Tt),po=r(Tt,"P",{});var xr=i(po);zm=n(xr,"The "),or=r(xr,"A",{href:!0});var J_=i(or);Cm=n(J_,"XLMForSequenceClassification"),J_.forEach(t),jm=n(xr," forward method, overrides the "),yi=r(xr,"CODE",{});var Z_=i(yi);Nm=n(Z_,"__call__"),Z_.forEach(t),Pm=n(xr," special method."),xr.forEach(t),Am=h(Tt),T(Jo.$$.fragment,Tt),Om=h(Tt),T(Zo.$$.fragment,Tt),Dm=h(Tt),T(en.$$.fragment,Tt),Sm=h(Tt),T(tn.$$.fragment,Tt),Im=h(Tt),T(on.$$.fragment,Tt),Tt.forEach(t),Qt.forEach(t),Vl=h(s),mo=r(s,"H2",{class:!0});var jd=i(mo);nn=r(jd,"A",{id:!0,class:!0,href:!0});var ek=i(nn);bi=r(ek,"SPAN",{});var tk=i(bi);T(zs.$$.fragment,tk),tk.forEach(t),ek.forEach(t),Wm=h(jd),wi=r(jd,"SPAN",{});var ok=i(wi);Hm=n(ok,"XLMForMultipleChoice"),ok.forEach(t),jd.forEach(t),Yl=h(s),mt=r(s,"DIV",{class:!0});var Ut=i(mt);T(Cs.$$.fragment,Ut),Qm=h(Ut),Ti=r(Ut,"P",{});var nk=i(Ti);Um=n(nk,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nk.forEach(t),Bm=h(Ut),js=r(Ut,"P",{});var Nd=i(js);Km=n(Nd,"This model inherits from "),nr=r(Nd,"A",{href:!0});var sk=i(nr);Rm=n(sk,"PreTrainedModel"),sk.forEach(t),Vm=n(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),Ym=h(Ut),Ns=r(Ut,"P",{});var Pd=i(Ns);Gm=n(Pd,"This model is also a PyTorch "),Ps=r(Pd,"A",{href:!0,rel:!0});var ak=i(Ps);Jm=n(ak,"torch.nn.Module"),ak.forEach(t),Zm=n(Pd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pd.forEach(t),eh=h(Ut),$t=r(Ut,"DIV",{class:!0});var Rn=i($t);T(As.$$.fragment,Rn),th=h(Rn),ho=r(Rn,"P",{});var Fr=i(ho);oh=n(Fr,"The "),sr=r(Fr,"A",{href:!0});var rk=i(sr);nh=n(rk,"XLMForMultipleChoice"),rk.forEach(t),sh=n(Fr," forward method, overrides the "),vi=r(Fr,"CODE",{});var ik=i(vi);ah=n(ik,"__call__"),ik.forEach(t),rh=n(Fr," special method."),Fr.forEach(t),ih=h(Rn),T(sn.$$.fragment,Rn),lh=h(Rn),T(an.$$.fragment,Rn),Rn.forEach(t),Ut.forEach(t),Gl=h(s),uo=r(s,"H2",{class:!0});var Ad=i(uo);rn=r(Ad,"A",{id:!0,class:!0,href:!0});var lk=i(rn);Mi=r(lk,"SPAN",{});var dk=i(Mi);T(Os.$$.fragment,dk),dk.forEach(t),lk.forEach(t),dh=h(Ad),$i=r(Ad,"SPAN",{});var ck=i($i);ch=n(ck,"XLMForTokenClassification"),ck.forEach(t),Ad.forEach(t),Jl=h(s),ht=r(s,"DIV",{class:!0});var Bt=i(ht);T(Ds.$$.fragment,Bt),ph=h(Bt),Li=r(Bt,"P",{});var pk=i(Li);mh=n(pk,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pk.forEach(t),hh=h(Bt),Ss=r(Bt,"P",{});var Od=i(Ss);uh=n(Od,"This model inherits from "),ar=r(Od,"A",{href:!0});var mk=i(ar);fh=n(mk,"PreTrainedModel"),mk.forEach(t),gh=n(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),_h=h(Bt),Is=r(Bt,"P",{});var Dd=i(Is);kh=n(Dd,"This model is also a PyTorch "),Ws=r(Dd,"A",{href:!0,rel:!0});var hk=i(Ws);yh=n(hk,"torch.nn.Module"),hk.forEach(t),bh=n(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),wh=h(Bt),_t=r(Bt,"DIV",{class:!0});var Kt=i(_t);T(Hs.$$.fragment,Kt),Th=h(Kt),fo=r(Kt,"P",{});var Xr=i(fo);vh=n(Xr,"The "),rr=r(Xr,"A",{href:!0});var uk=i(rr);Mh=n(uk,"XLMForTokenClassification"),uk.forEach(t),$h=n(Xr," forward method, overrides the "),xi=r(Xr,"CODE",{});var fk=i(xi);Lh=n(fk,"__call__"),fk.forEach(t),xh=n(Xr," special method."),Xr.forEach(t),Fh=h(Kt),T(ln.$$.fragment,Kt),Xh=h(Kt),T(dn.$$.fragment,Kt),Eh=h(Kt),T(cn.$$.fragment,Kt),Kt.forEach(t),Bt.forEach(t),Zl=h(s),go=r(s,"H2",{class:!0});var Sd=i(go);pn=r(Sd,"A",{id:!0,class:!0,href:!0});var gk=i(pn);Fi=r(gk,"SPAN",{});var _k=i(Fi);T(Qs.$$.fragment,_k),_k.forEach(t),gk.forEach(t),qh=h(Sd),Xi=r(Sd,"SPAN",{});var kk=i(Xi);zh=n(kk,"XLMForQuestionAnsweringSimple"),kk.forEach(t),Sd.forEach(t),ed=h(s),ut=r(s,"DIV",{class:!0});var Rt=i(ut);T(Us.$$.fragment,Rt),Ch=h(Rt),_o=r(Rt,"P",{});var Er=i(_o);jh=n(Er,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ei=r(Er,"CODE",{});var yk=i(Ei);Nh=n(yk,"span start logits"),yk.forEach(t),Ph=n(Er," and "),qi=r(Er,"CODE",{});var bk=i(qi);Ah=n(bk,"span end logits"),bk.forEach(t),Oh=n(Er,")."),Er.forEach(t),Dh=h(Rt),Bs=r(Rt,"P",{});var Id=i(Bs);Sh=n(Id,"This model inherits from "),ir=r(Id,"A",{href:!0});var wk=i(ir);Ih=n(wk,"PreTrainedModel"),wk.forEach(t),Wh=n(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Hh=h(Rt),Ks=r(Rt,"P",{});var Wd=i(Ks);Qh=n(Wd,"This model is also a PyTorch "),Rs=r(Wd,"A",{href:!0,rel:!0});var Tk=i(Rs);Uh=n(Tk,"torch.nn.Module"),Tk.forEach(t),Bh=n(Wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd.forEach(t),Kh=h(Rt),kt=r(Rt,"DIV",{class:!0});var Vt=i(kt);T(Vs.$$.fragment,Vt),Rh=h(Vt),ko=r(Vt,"P",{});var qr=i(ko);Vh=n(qr,"The "),lr=r(qr,"A",{href:!0});var vk=i(lr);Yh=n(vk,"XLMForQuestionAnsweringSimple"),vk.forEach(t),Gh=n(qr," forward method, overrides the "),zi=r(qr,"CODE",{});var Mk=i(zi);Jh=n(Mk,"__call__"),Mk.forEach(t),Zh=n(qr," special method."),qr.forEach(t),eu=h(Vt),T(mn.$$.fragment,Vt),tu=h(Vt),T(hn.$$.fragment,Vt),ou=h(Vt),T(un.$$.fragment,Vt),Vt.forEach(t),Rt.forEach(t),td=h(s),yo=r(s,"H2",{class:!0});var Hd=i(yo);fn=r(Hd,"A",{id:!0,class:!0,href:!0});var $k=i(fn);Ci=r($k,"SPAN",{});var Lk=i(Ci);T(Ys.$$.fragment,Lk),Lk.forEach(t),$k.forEach(t),nu=h(Hd),ji=r(Hd,"SPAN",{});var xk=i(ji);su=n(xk,"XLMForQuestionAnswering"),xk.forEach(t),Hd.forEach(t),od=h(s),ft=r(s,"DIV",{class:!0});var Yt=i(ft);T(Gs.$$.fragment,Yt),au=h(Yt),bo=r(Yt,"P",{});var zr=i(bo);ru=n(zr,`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Ni=r(zr,"CODE",{});var Fk=i(Ni);iu=n(Fk,"span start logits"),Fk.forEach(t),lu=n(zr," and "),Pi=r(zr,"CODE",{});var Xk=i(Pi);du=n(Xk,"span end logits"),Xk.forEach(t),cu=n(zr,")."),zr.forEach(t),pu=h(Yt),Js=r(Yt,"P",{});var Qd=i(Js);mu=n(Qd,"This model inherits from "),dr=r(Qd,"A",{href:!0});var Ek=i(dr);hu=n(Ek,"PreTrainedModel"),Ek.forEach(t),uu=n(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),fu=h(Yt),Zs=r(Yt,"P",{});var Ud=i(Zs);gu=n(Ud,"This model is also a PyTorch "),ea=r(Ud,"A",{href:!0,rel:!0});var qk=i(ea);_u=n(qk,"torch.nn.Module"),qk.forEach(t),ku=n(Ud,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ud.forEach(t),yu=h(Yt),Lt=r(Yt,"DIV",{class:!0});var Vn=i(Lt);T(ta.$$.fragment,Vn),bu=h(Vn),wo=r(Vn,"P",{});var Cr=i(wo);wu=n(Cr,"The "),cr=r(Cr,"A",{href:!0});var zk=i(cr);Tu=n(zk,"XLMForQuestionAnswering"),zk.forEach(t),vu=n(Cr," forward method, overrides the "),Ai=r(Cr,"CODE",{});var Ck=i(Ai);Mu=n(Ck,"__call__"),Ck.forEach(t),$u=n(Cr," special method."),Cr.forEach(t),Lu=h(Vn),T(gn.$$.fragment,Vn),xu=h(Vn),T(_n.$$.fragment,Vn),Vn.forEach(t),Yt.forEach(t),nd=h(s),To=r(s,"H2",{class:!0});var Bd=i(To);kn=r(Bd,"A",{id:!0,class:!0,href:!0});var jk=i(kn);Oi=r(jk,"SPAN",{});var Nk=i(Oi);T(oa.$$.fragment,Nk),Nk.forEach(t),jk.forEach(t),Fu=h(Bd),Di=r(Bd,"SPAN",{});var Pk=i(Di);Xu=n(Pk,"TFXLMModel"),Pk.forEach(t),Bd.forEach(t),sd=h(s),ot=r(s,"DIV",{class:!0});var qt=i(ot);T(na.$$.fragment,qt),Eu=h(qt),Si=r(qt,"P",{});var Ak=i(Si);qu=n(Ak,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Ak.forEach(t),zu=h(qt),sa=r(qt,"P",{});var Kd=i(sa);Cu=n(Kd,"This model inherits from "),pr=r(Kd,"A",{href:!0});var Ok=i(pr);ju=n(Ok,"TFPreTrainedModel"),Ok.forEach(t),Nu=n(Kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd.forEach(t),Pu=h(qt),aa=r(qt,"P",{});var Rd=i(aa);Au=n(Rd,"This model is also a "),ra=r(Rd,"A",{href:!0,rel:!0});var Dk=i(ra);Ou=n(Dk,"tf.keras.Model"),Dk.forEach(t),Du=n(Rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rd.forEach(t),Su=h(qt),T(yn.$$.fragment,qt),Iu=h(qt),xt=r(qt,"DIV",{class:!0});var Yn=i(xt);T(ia.$$.fragment,Yn),Wu=h(Yn),vo=r(Yn,"P",{});var jr=i(vo);Hu=n(jr,"The "),mr=r(jr,"A",{href:!0});var Sk=i(mr);Qu=n(Sk,"TFXLMModel"),Sk.forEach(t),Uu=n(jr," forward method, overrides the "),Ii=r(jr,"CODE",{});var Ik=i(Ii);Bu=n(Ik,"__call__"),Ik.forEach(t),Ku=n(jr," special method."),jr.forEach(t),Ru=h(Yn),T(bn.$$.fragment,Yn),Vu=h(Yn),T(wn.$$.fragment,Yn),Yn.forEach(t),qt.forEach(t),ad=h(s),Mo=r(s,"H2",{class:!0});var Vd=i(Mo);Tn=r(Vd,"A",{id:!0,class:!0,href:!0});var Wk=i(Tn);Wi=r(Wk,"SPAN",{});var Hk=i(Wi);T(la.$$.fragment,Hk),Hk.forEach(t),Wk.forEach(t),Yu=h(Vd),Hi=r(Vd,"SPAN",{});var Qk=i(Hi);Gu=n(Qk,"TFXLMWithLMHeadModel"),Qk.forEach(t),Vd.forEach(t),rd=h(s),nt=r(s,"DIV",{class:!0});var zt=i(nt);T(da.$$.fragment,zt),Ju=h(zt),Qi=r(zt,"P",{});var Uk=i(Qi);Zu=n(Uk,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Uk.forEach(t),ef=h(zt),ca=r(zt,"P",{});var Yd=i(ca);tf=n(Yd,"This model inherits from "),hr=r(Yd,"A",{href:!0});var Bk=i(hr);of=n(Bk,"TFPreTrainedModel"),Bk.forEach(t),nf=n(Yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd.forEach(t),sf=h(zt),pa=r(zt,"P",{});var Gd=i(pa);af=n(Gd,"This model is also a "),ma=r(Gd,"A",{href:!0,rel:!0});var Kk=i(ma);rf=n(Kk,"tf.keras.Model"),Kk.forEach(t),lf=n(Gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gd.forEach(t),df=h(zt),T(vn.$$.fragment,zt),cf=h(zt),Ft=r(zt,"DIV",{class:!0});var Gn=i(Ft);T(ha.$$.fragment,Gn),pf=h(Gn),$o=r(Gn,"P",{});var Nr=i($o);mf=n(Nr,"The "),ur=r(Nr,"A",{href:!0});var Rk=i(ur);hf=n(Rk,"TFXLMWithLMHeadModel"),Rk.forEach(t),uf=n(Nr," forward method, overrides the "),Ui=r(Nr,"CODE",{});var Vk=i(Ui);ff=n(Vk,"__call__"),Vk.forEach(t),gf=n(Nr," special method."),Nr.forEach(t),_f=h(Gn),T(Mn.$$.fragment,Gn),kf=h(Gn),T($n.$$.fragment,Gn),Gn.forEach(t),zt.forEach(t),id=h(s),Lo=r(s,"H2",{class:!0});var Jd=i(Lo);Ln=r(Jd,"A",{id:!0,class:!0,href:!0});var Yk=i(Ln);Bi=r(Yk,"SPAN",{});var Gk=i(Bi);T(ua.$$.fragment,Gk),Gk.forEach(t),Yk.forEach(t),yf=h(Jd),Ki=r(Jd,"SPAN",{});var Jk=i(Ki);bf=n(Jk,"TFXLMForSequenceClassification"),Jk.forEach(t),Jd.forEach(t),ld=h(s),st=r(s,"DIV",{class:!0});var Ct=i(st);T(fa.$$.fragment,Ct),wf=h(Ct),Ri=r(Ct,"P",{});var Zk=i(Ri);Tf=n(Zk,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Zk.forEach(t),vf=h(Ct),ga=r(Ct,"P",{});var Zd=i(ga);Mf=n(Zd,"This model inherits from "),fr=r(Zd,"A",{href:!0});var ey=i(fr);$f=n(ey,"TFPreTrainedModel"),ey.forEach(t),Lf=n(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),xf=h(Ct),_a=r(Ct,"P",{});var ec=i(_a);Ff=n(ec,"This model is also a "),ka=r(ec,"A",{href:!0,rel:!0});var ty=i(ka);Xf=n(ty,"tf.keras.Model"),ty.forEach(t),Ef=n(ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ec.forEach(t),qf=h(Ct),T(xn.$$.fragment,Ct),zf=h(Ct),yt=r(Ct,"DIV",{class:!0});var Gt=i(yt);T(ya.$$.fragment,Gt),Cf=h(Gt),xo=r(Gt,"P",{});var Pr=i(xo);jf=n(Pr,"The "),gr=r(Pr,"A",{href:!0});var oy=i(gr);Nf=n(oy,"TFXLMForSequenceClassification"),oy.forEach(t),Pf=n(Pr," forward method, overrides the "),Vi=r(Pr,"CODE",{});var ny=i(Vi);Af=n(ny,"__call__"),ny.forEach(t),Of=n(Pr," special method."),Pr.forEach(t),Df=h(Gt),T(Fn.$$.fragment,Gt),Sf=h(Gt),T(Xn.$$.fragment,Gt),If=h(Gt),T(En.$$.fragment,Gt),Gt.forEach(t),Ct.forEach(t),dd=h(s),Fo=r(s,"H2",{class:!0});var tc=i(Fo);qn=r(tc,"A",{id:!0,class:!0,href:!0});var sy=i(qn);Yi=r(sy,"SPAN",{});var ay=i(Yi);T(ba.$$.fragment,ay),ay.forEach(t),sy.forEach(t),Wf=h(tc),Gi=r(tc,"SPAN",{});var ry=i(Gi);Hf=n(ry,"TFXLMForMultipleChoice"),ry.forEach(t),tc.forEach(t),cd=h(s),at=r(s,"DIV",{class:!0});var jt=i(at);T(wa.$$.fragment,jt),Qf=h(jt),Ji=r(jt,"P",{});var iy=i(Ji);Uf=n(iy,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),iy.forEach(t),Bf=h(jt),Ta=r(jt,"P",{});var oc=i(Ta);Kf=n(oc,"This model inherits from "),_r=r(oc,"A",{href:!0});var ly=i(_r);Rf=n(ly,"TFPreTrainedModel"),ly.forEach(t),Vf=n(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc.forEach(t),Yf=h(jt),va=r(jt,"P",{});var nc=i(va);Gf=n(nc,"This model is also a "),Ma=r(nc,"A",{href:!0,rel:!0});var dy=i(Ma);Jf=n(dy,"tf.keras.Model"),dy.forEach(t),Zf=n(nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc.forEach(t),eg=h(jt),T(zn.$$.fragment,jt),tg=h(jt),Xt=r(jt,"DIV",{class:!0});var Jn=i(Xt);T($a.$$.fragment,Jn),og=h(Jn),Xo=r(Jn,"P",{});var Ar=i(Xo);ng=n(Ar,"The "),kr=r(Ar,"A",{href:!0});var cy=i(kr);sg=n(cy,"TFXLMForMultipleChoice"),cy.forEach(t),ag=n(Ar," forward method, overrides the "),Zi=r(Ar,"CODE",{});var py=i(Zi);rg=n(py,"__call__"),py.forEach(t),ig=n(Ar," special method."),Ar.forEach(t),lg=h(Jn),T(Cn.$$.fragment,Jn),dg=h(Jn),T(jn.$$.fragment,Jn),Jn.forEach(t),jt.forEach(t),pd=h(s),Eo=r(s,"H2",{class:!0});var sc=i(Eo);Nn=r(sc,"A",{id:!0,class:!0,href:!0});var my=i(Nn);el=r(my,"SPAN",{});var hy=i(el);T(La.$$.fragment,hy),hy.forEach(t),my.forEach(t),cg=h(sc),tl=r(sc,"SPAN",{});var uy=i(tl);pg=n(uy,"TFXLMForTokenClassification"),uy.forEach(t),sc.forEach(t),md=h(s),rt=r(s,"DIV",{class:!0});var Nt=i(rt);T(xa.$$.fragment,Nt),mg=h(Nt),ol=r(Nt,"P",{});var fy=i(ol);hg=n(fy,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fy.forEach(t),ug=h(Nt),Fa=r(Nt,"P",{});var ac=i(Fa);fg=n(ac,"This model inherits from "),yr=r(ac,"A",{href:!0});var gy=i(yr);gg=n(gy,"TFPreTrainedModel"),gy.forEach(t),_g=n(ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac.forEach(t),kg=h(Nt),Xa=r(Nt,"P",{});var rc=i(Xa);yg=n(rc,"This model is also a "),Ea=r(rc,"A",{href:!0,rel:!0});var _y=i(Ea);bg=n(_y,"tf.keras.Model"),_y.forEach(t),wg=n(rc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rc.forEach(t),Tg=h(Nt),T(Pn.$$.fragment,Nt),vg=h(Nt),bt=r(Nt,"DIV",{class:!0});var Jt=i(bt);T(qa.$$.fragment,Jt),Mg=h(Jt),qo=r(Jt,"P",{});var Or=i(qo);$g=n(Or,"The "),br=r(Or,"A",{href:!0});var ky=i(br);Lg=n(ky,"TFXLMForTokenClassification"),ky.forEach(t),xg=n(Or," forward method, overrides the "),nl=r(Or,"CODE",{});var yy=i(nl);Fg=n(yy,"__call__"),yy.forEach(t),Xg=n(Or," special method."),Or.forEach(t),Eg=h(Jt),T(An.$$.fragment,Jt),qg=h(Jt),T(On.$$.fragment,Jt),zg=h(Jt),T(Dn.$$.fragment,Jt),Jt.forEach(t),Nt.forEach(t),hd=h(s),zo=r(s,"H2",{class:!0});var ic=i(zo);Sn=r(ic,"A",{id:!0,class:!0,href:!0});var by=i(Sn);sl=r(by,"SPAN",{});var wy=i(sl);T(za.$$.fragment,wy),wy.forEach(t),by.forEach(t),Cg=h(ic),al=r(ic,"SPAN",{});var Ty=i(al);jg=n(Ty,"TFXLMForQuestionAnsweringSimple"),Ty.forEach(t),ic.forEach(t),ud=h(s),it=r(s,"DIV",{class:!0});var Pt=i(it);T(Ca.$$.fragment,Pt),Ng=h(Pt),Co=r(Pt,"P",{});var Dr=i(Co);Pg=n(Dr,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),rl=r(Dr,"CODE",{});var vy=i(rl);Ag=n(vy,"span start logits"),vy.forEach(t),Og=n(Dr," and "),il=r(Dr,"CODE",{});var My=i(il);Dg=n(My,"span end logits"),My.forEach(t),Sg=n(Dr,")."),Dr.forEach(t),Ig=h(Pt),ja=r(Pt,"P",{});var lc=i(ja);Wg=n(lc,"This model inherits from "),wr=r(lc,"A",{href:!0});var $y=i(wr);Hg=n($y,"TFPreTrainedModel"),$y.forEach(t),Qg=n(lc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lc.forEach(t),Ug=h(Pt),Na=r(Pt,"P",{});var dc=i(Na);Bg=n(dc,"This model is also a "),Pa=r(dc,"A",{href:!0,rel:!0});var Ly=i(Pa);Kg=n(Ly,"tf.keras.Model"),Ly.forEach(t),Rg=n(dc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dc.forEach(t),Vg=h(Pt),T(In.$$.fragment,Pt),Yg=h(Pt),wt=r(Pt,"DIV",{class:!0});var Zt=i(wt);T(Aa.$$.fragment,Zt),Gg=h(Zt),jo=r(Zt,"P",{});var Sr=i(jo);Jg=n(Sr,"The "),Tr=r(Sr,"A",{href:!0});var xy=i(Tr);Zg=n(xy,"TFXLMForQuestionAnsweringSimple"),xy.forEach(t),e_=n(Sr," forward method, overrides the "),ll=r(Sr,"CODE",{});var Fy=i(ll);t_=n(Fy,"__call__"),Fy.forEach(t),o_=n(Sr," special method."),Sr.forEach(t),n_=h(Zt),T(Wn.$$.fragment,Zt),s_=h(Zt),T(Hn.$$.fragment,Zt),a_=h(Zt),T(Qn.$$.fragment,Zt),Zt.forEach(t),Pt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Mb)),f(u,"id","xlm"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#xlm"),f(c,"class","relative group"),f(re,"id","overview"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#overview"),f(S,"class","relative group"),f(le,"href","https://arxiv.org/abs/1901.07291"),f(le,"rel","nofollow"),f(C,"href","../multilingual"),f(F,"href","https://huggingface.co/thomwolf"),f(F,"rel","nofollow"),f(Pe,"href","https://github.com/facebookresearch/XLM/"),f(Pe,"rel","nofollow"),f(Ne,"id","transformers.XLMConfig"),f(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ne,"href","#transformers.XLMConfig"),f(je,"class","relative group"),f(J,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMModel"),f(Qa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMModel"),f(Zn,"href","https://huggingface.co/xlm-mlm-en-2048"),f(Zn,"rel","nofollow"),f(Ua,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ba,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.XLMTokenizer"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.XLMTokenizer"),f(to,"class","relative group"),f(Ka,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ya,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),f(no,"class","relative group"),f(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.XLMModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.XLMModel"),f(ao,"class","relative group"),f(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ks,"rel","nofollow"),f(Ja,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMModel"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.XLMWithLMHeadModel"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.XLMWithLMHeadModel"),f(io,"class","relative group"),f(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ms,"rel","nofollow"),f(er,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"id","transformers.XLMForSequenceClassification"),f(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Go,"href","#transformers.XLMForSequenceClassification"),f(co,"class","relative group"),f(tr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Es,"rel","nofollow"),f(or,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.XLMForMultipleChoice"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.XLMForMultipleChoice"),f(mo,"class","relative group"),f(nr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ps,"rel","nofollow"),f(sr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.XLMForTokenClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.XLMForTokenClassification"),f(uo,"class","relative group"),f(ar,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ws,"rel","nofollow"),f(rr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.XLMForQuestionAnsweringSimple"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.XLMForQuestionAnsweringSimple"),f(go,"class","relative group"),f(ir,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Rs,"rel","nofollow"),f(lr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.XLMForQuestionAnswering"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.XLMForQuestionAnswering"),f(yo,"class","relative group"),f(dr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ea,"rel","nofollow"),f(cr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.TFXLMModel"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.TFXLMModel"),f(To,"class","relative group"),f(pr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ra,"rel","nofollow"),f(mr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMModel"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.TFXLMWithLMHeadModel"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.TFXLMWithLMHeadModel"),f(Mo,"class","relative group"),f(hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ma,"rel","nofollow"),f(ur,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMWithLMHeadModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.TFXLMForSequenceClassification"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.TFXLMForSequenceClassification"),f(Lo,"class","relative group"),f(fr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ka,"rel","nofollow"),f(gr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qn,"id","transformers.TFXLMForMultipleChoice"),f(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qn,"href","#transformers.TFXLMForMultipleChoice"),f(Fo,"class","relative group"),f(_r,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ma,"rel","nofollow"),f(kr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"id","transformers.TFXLMForTokenClassification"),f(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nn,"href","#transformers.TFXLMForTokenClassification"),f(Eo,"class","relative group"),f(yr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ea,"rel","nofollow"),f(br,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"id","transformers.TFXLMForQuestionAnsweringSimple"),f(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Sn,"href","#transformers.TFXLMForQuestionAnsweringSimple"),f(zo,"class","relative group"),f(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Pa,"rel","nofollow"),f(Tr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,y){e(document.head,d),k(s,g,y),k(s,c,y),e(c,u),e(u,b),v(l,b,null),e(c,p),e(c,q),e(q,be),k(s,he,y),k(s,S,y),e(S,re),e(re,Z),v(x,Z,null),e(S,we),e(S,U),e(U,Te),k(s,ue,y),k(s,W,y),e(W,ve),e(W,le),e(le,V),e(W,Me),k(s,fe,y),k(s,D,y),e(D,ce),e(ce,$e),e(D,Y),e(D,pe),e(pe,Le),e(D,oe),e(D,z),e(z,N),k(s,ge,y),k(s,H,y),e(H,xe),k(s,_e,y),k(s,Q,y),e(Q,me),e(me,Fe),k(s,j,y),k(s,de,y),e(de,G),k(s,ke,y),k(s,ie,y),e(ie,B),e(B,Xe),e(ie,Ee),e(ie,P),e(P,qe),e(P,K),e(K,ze),e(P,ne),e(P,C),e(C,Ce),e(P,A),k(s,ye,y),k(s,te,y),e(te,_),e(te,F),e(F,Ue),e(te,se),e(te,Pe),e(Pe,Be),e(te,E),k(s,He,y),k(s,je,y),e(je,Ne),e(Ne,We),v(Ae,We,null),e(je,I),e(je,R),e(R,Ke),k(s,Qe,y),k(s,O,y),v(Oe,O,null),e(O,Re),e(O,ee),e(ee,Ve),e(ee,J),e(J,Ye),e(ee,cc),e(ee,Qa),e(Qa,pc),e(ee,mc),e(ee,Zn),e(Zn,hc),e(ee,uc),e(O,fc),e(O,eo),e(eo,gc),e(eo,Ua),e(Ua,_c),e(eo,kc),e(eo,Ba),e(Ba,yc),e(eo,bc),e(O,wc),v(Do,O,null),k(s,Dl,y),k(s,to,y),e(to,So),e(So,Ir),v(es,Ir,null),e(to,Tc),e(to,Wr),e(Wr,vc),k(s,Sl,y),k(s,Ge,y),v(ts,Ge,null),e(Ge,Mc),e(Ge,Hr),e(Hr,$c),e(Ge,Lc),e(Ge,lt),e(lt,Qr),e(Qr,xc),e(lt,Fc),e(lt,Ur),e(Ur,Xc),e(lt,Ec),e(lt,Br),e(Br,qc),e(lt,zc),e(lt,At),e(At,Cc),e(At,Kr),e(Kr,jc),e(At,Nc),e(At,Rr),e(Rr,Pc),e(At,Ac),e(At,Vr),e(Vr,Oc),e(At,Dc),e(lt,Sc),e(lt,os),e(os,Ic),e(os,Yr),e(Yr,Wc),e(os,Hc),e(lt,Qc),e(lt,ns),e(ns,Uc),e(ns,Gr),e(Gr,Bc),e(ns,Kc),e(Ge,Rc),e(Ge,ss),e(ss,Vc),e(ss,Ka),e(Ka,Yc),e(ss,Gc),e(Ge,Jc),e(Ge,St),v(as,St,null),e(St,Zc),e(St,Jr),e(Jr,ep),e(St,tp),e(St,rs),e(rs,Ra),e(Ra,op),e(Ra,Zr),e(Zr,np),e(rs,sp),e(rs,Va),e(Va,ap),e(Va,ei),e(ei,rp),e(Ge,ip),e(Ge,Io),v(is,Io,null),e(Io,lp),e(Io,ls),e(ls,dp),e(ls,ti),e(ti,cp),e(ls,pp),e(Ge,mp),e(Ge,vt),v(ds,vt,null),e(vt,hp),e(vt,oi),e(oi,up),e(vt,fp),v(Wo,vt,null),e(vt,gp),e(vt,oo),e(oo,_p),e(oo,ni),e(ni,kp),e(oo,yp),e(oo,si),e(si,bp),e(oo,wp),e(Ge,Tp),e(Ge,Ya),v(cs,Ya,null),k(s,Il,y),k(s,no,y),e(no,Ho),e(Ho,ai),v(ps,ai,null),e(no,vp),e(no,ri),e(ri,Mp),k(s,Wl,y),k(s,so,y),v(ms,so,null),e(so,$p),e(so,hs),e(hs,Lp),e(hs,ii),e(ii,xp),e(hs,Fp),k(s,Hl,y),k(s,ao,y),e(ao,Qo),e(Qo,li),v(us,li,null),e(ao,Xp),e(ao,di),e(di,Ep),k(s,Ql,y),k(s,dt,y),v(fs,dt,null),e(dt,qp),e(dt,ci),e(ci,zp),e(dt,Cp),e(dt,gs),e(gs,jp),e(gs,Ga),e(Ga,Np),e(gs,Pp),e(dt,Ap),e(dt,_s),e(_s,Op),e(_s,ks),e(ks,Dp),e(_s,Sp),e(dt,Ip),e(dt,Mt),v(ys,Mt,null),e(Mt,Wp),e(Mt,ro),e(ro,Hp),e(ro,Ja),e(Ja,Qp),e(ro,Up),e(ro,pi),e(pi,Bp),e(ro,Kp),e(Mt,Rp),v(Uo,Mt,null),e(Mt,Vp),v(Bo,Mt,null),k(s,Ul,y),k(s,io,y),e(io,Ko),e(Ko,mi),v(bs,mi,null),e(io,Yp),e(io,hi),e(hi,Gp),k(s,Bl,y),k(s,ct,y),v(ws,ct,null),e(ct,Jp),e(ct,ui),e(ui,Zp),e(ct,em),e(ct,Ts),e(Ts,tm),e(Ts,Za),e(Za,om),e(Ts,nm),e(ct,sm),e(ct,vs),e(vs,am),e(vs,Ms),e(Ms,rm),e(vs,im),e(ct,lm),e(ct,gt),v($s,gt,null),e(gt,dm),e(gt,lo),e(lo,cm),e(lo,er),e(er,pm),e(lo,mm),e(lo,fi),e(fi,hm),e(lo,um),e(gt,fm),v(Ro,gt,null),e(gt,gm),v(Vo,gt,null),e(gt,_m),v(Yo,gt,null),k(s,Kl,y),k(s,co,y),e(co,Go),e(Go,gi),v(Ls,gi,null),e(co,km),e(co,_i),e(_i,ym),k(s,Rl,y),k(s,pt,y),v(xs,pt,null),e(pt,bm),e(pt,ki),e(ki,wm),e(pt,Tm),e(pt,Fs),e(Fs,vm),e(Fs,tr),e(tr,Mm),e(Fs,$m),e(pt,Lm),e(pt,Xs),e(Xs,xm),e(Xs,Es),e(Es,Fm),e(Xs,Xm),e(pt,Em),e(pt,et),v(qs,et,null),e(et,qm),e(et,po),e(po,zm),e(po,or),e(or,Cm),e(po,jm),e(po,yi),e(yi,Nm),e(po,Pm),e(et,Am),v(Jo,et,null),e(et,Om),v(Zo,et,null),e(et,Dm),v(en,et,null),e(et,Sm),v(tn,et,null),e(et,Im),v(on,et,null),k(s,Vl,y),k(s,mo,y),e(mo,nn),e(nn,bi),v(zs,bi,null),e(mo,Wm),e(mo,wi),e(wi,Hm),k(s,Yl,y),k(s,mt,y),v(Cs,mt,null),e(mt,Qm),e(mt,Ti),e(Ti,Um),e(mt,Bm),e(mt,js),e(js,Km),e(js,nr),e(nr,Rm),e(js,Vm),e(mt,Ym),e(mt,Ns),e(Ns,Gm),e(Ns,Ps),e(Ps,Jm),e(Ns,Zm),e(mt,eh),e(mt,$t),v(As,$t,null),e($t,th),e($t,ho),e(ho,oh),e(ho,sr),e(sr,nh),e(ho,sh),e(ho,vi),e(vi,ah),e(ho,rh),e($t,ih),v(sn,$t,null),e($t,lh),v(an,$t,null),k(s,Gl,y),k(s,uo,y),e(uo,rn),e(rn,Mi),v(Os,Mi,null),e(uo,dh),e(uo,$i),e($i,ch),k(s,Jl,y),k(s,ht,y),v(Ds,ht,null),e(ht,ph),e(ht,Li),e(Li,mh),e(ht,hh),e(ht,Ss),e(Ss,uh),e(Ss,ar),e(ar,fh),e(Ss,gh),e(ht,_h),e(ht,Is),e(Is,kh),e(Is,Ws),e(Ws,yh),e(Is,bh),e(ht,wh),e(ht,_t),v(Hs,_t,null),e(_t,Th),e(_t,fo),e(fo,vh),e(fo,rr),e(rr,Mh),e(fo,$h),e(fo,xi),e(xi,Lh),e(fo,xh),e(_t,Fh),v(ln,_t,null),e(_t,Xh),v(dn,_t,null),e(_t,Eh),v(cn,_t,null),k(s,Zl,y),k(s,go,y),e(go,pn),e(pn,Fi),v(Qs,Fi,null),e(go,qh),e(go,Xi),e(Xi,zh),k(s,ed,y),k(s,ut,y),v(Us,ut,null),e(ut,Ch),e(ut,_o),e(_o,jh),e(_o,Ei),e(Ei,Nh),e(_o,Ph),e(_o,qi),e(qi,Ah),e(_o,Oh),e(ut,Dh),e(ut,Bs),e(Bs,Sh),e(Bs,ir),e(ir,Ih),e(Bs,Wh),e(ut,Hh),e(ut,Ks),e(Ks,Qh),e(Ks,Rs),e(Rs,Uh),e(Ks,Bh),e(ut,Kh),e(ut,kt),v(Vs,kt,null),e(kt,Rh),e(kt,ko),e(ko,Vh),e(ko,lr),e(lr,Yh),e(ko,Gh),e(ko,zi),e(zi,Jh),e(ko,Zh),e(kt,eu),v(mn,kt,null),e(kt,tu),v(hn,kt,null),e(kt,ou),v(un,kt,null),k(s,td,y),k(s,yo,y),e(yo,fn),e(fn,Ci),v(Ys,Ci,null),e(yo,nu),e(yo,ji),e(ji,su),k(s,od,y),k(s,ft,y),v(Gs,ft,null),e(ft,au),e(ft,bo),e(bo,ru),e(bo,Ni),e(Ni,iu),e(bo,lu),e(bo,Pi),e(Pi,du),e(bo,cu),e(ft,pu),e(ft,Js),e(Js,mu),e(Js,dr),e(dr,hu),e(Js,uu),e(ft,fu),e(ft,Zs),e(Zs,gu),e(Zs,ea),e(ea,_u),e(Zs,ku),e(ft,yu),e(ft,Lt),v(ta,Lt,null),e(Lt,bu),e(Lt,wo),e(wo,wu),e(wo,cr),e(cr,Tu),e(wo,vu),e(wo,Ai),e(Ai,Mu),e(wo,$u),e(Lt,Lu),v(gn,Lt,null),e(Lt,xu),v(_n,Lt,null),k(s,nd,y),k(s,To,y),e(To,kn),e(kn,Oi),v(oa,Oi,null),e(To,Fu),e(To,Di),e(Di,Xu),k(s,sd,y),k(s,ot,y),v(na,ot,null),e(ot,Eu),e(ot,Si),e(Si,qu),e(ot,zu),e(ot,sa),e(sa,Cu),e(sa,pr),e(pr,ju),e(sa,Nu),e(ot,Pu),e(ot,aa),e(aa,Au),e(aa,ra),e(ra,Ou),e(aa,Du),e(ot,Su),v(yn,ot,null),e(ot,Iu),e(ot,xt),v(ia,xt,null),e(xt,Wu),e(xt,vo),e(vo,Hu),e(vo,mr),e(mr,Qu),e(vo,Uu),e(vo,Ii),e(Ii,Bu),e(vo,Ku),e(xt,Ru),v(bn,xt,null),e(xt,Vu),v(wn,xt,null),k(s,ad,y),k(s,Mo,y),e(Mo,Tn),e(Tn,Wi),v(la,Wi,null),e(Mo,Yu),e(Mo,Hi),e(Hi,Gu),k(s,rd,y),k(s,nt,y),v(da,nt,null),e(nt,Ju),e(nt,Qi),e(Qi,Zu),e(nt,ef),e(nt,ca),e(ca,tf),e(ca,hr),e(hr,of),e(ca,nf),e(nt,sf),e(nt,pa),e(pa,af),e(pa,ma),e(ma,rf),e(pa,lf),e(nt,df),v(vn,nt,null),e(nt,cf),e(nt,Ft),v(ha,Ft,null),e(Ft,pf),e(Ft,$o),e($o,mf),e($o,ur),e(ur,hf),e($o,uf),e($o,Ui),e(Ui,ff),e($o,gf),e(Ft,_f),v(Mn,Ft,null),e(Ft,kf),v($n,Ft,null),k(s,id,y),k(s,Lo,y),e(Lo,Ln),e(Ln,Bi),v(ua,Bi,null),e(Lo,yf),e(Lo,Ki),e(Ki,bf),k(s,ld,y),k(s,st,y),v(fa,st,null),e(st,wf),e(st,Ri),e(Ri,Tf),e(st,vf),e(st,ga),e(ga,Mf),e(ga,fr),e(fr,$f),e(ga,Lf),e(st,xf),e(st,_a),e(_a,Ff),e(_a,ka),e(ka,Xf),e(_a,Ef),e(st,qf),v(xn,st,null),e(st,zf),e(st,yt),v(ya,yt,null),e(yt,Cf),e(yt,xo),e(xo,jf),e(xo,gr),e(gr,Nf),e(xo,Pf),e(xo,Vi),e(Vi,Af),e(xo,Of),e(yt,Df),v(Fn,yt,null),e(yt,Sf),v(Xn,yt,null),e(yt,If),v(En,yt,null),k(s,dd,y),k(s,Fo,y),e(Fo,qn),e(qn,Yi),v(ba,Yi,null),e(Fo,Wf),e(Fo,Gi),e(Gi,Hf),k(s,cd,y),k(s,at,y),v(wa,at,null),e(at,Qf),e(at,Ji),e(Ji,Uf),e(at,Bf),e(at,Ta),e(Ta,Kf),e(Ta,_r),e(_r,Rf),e(Ta,Vf),e(at,Yf),e(at,va),e(va,Gf),e(va,Ma),e(Ma,Jf),e(va,Zf),e(at,eg),v(zn,at,null),e(at,tg),e(at,Xt),v($a,Xt,null),e(Xt,og),e(Xt,Xo),e(Xo,ng),e(Xo,kr),e(kr,sg),e(Xo,ag),e(Xo,Zi),e(Zi,rg),e(Xo,ig),e(Xt,lg),v(Cn,Xt,null),e(Xt,dg),v(jn,Xt,null),k(s,pd,y),k(s,Eo,y),e(Eo,Nn),e(Nn,el),v(La,el,null),e(Eo,cg),e(Eo,tl),e(tl,pg),k(s,md,y),k(s,rt,y),v(xa,rt,null),e(rt,mg),e(rt,ol),e(ol,hg),e(rt,ug),e(rt,Fa),e(Fa,fg),e(Fa,yr),e(yr,gg),e(Fa,_g),e(rt,kg),e(rt,Xa),e(Xa,yg),e(Xa,Ea),e(Ea,bg),e(Xa,wg),e(rt,Tg),v(Pn,rt,null),e(rt,vg),e(rt,bt),v(qa,bt,null),e(bt,Mg),e(bt,qo),e(qo,$g),e(qo,br),e(br,Lg),e(qo,xg),e(qo,nl),e(nl,Fg),e(qo,Xg),e(bt,Eg),v(An,bt,null),e(bt,qg),v(On,bt,null),e(bt,zg),v(Dn,bt,null),k(s,hd,y),k(s,zo,y),e(zo,Sn),e(Sn,sl),v(za,sl,null),e(zo,Cg),e(zo,al),e(al,jg),k(s,ud,y),k(s,it,y),v(Ca,it,null),e(it,Ng),e(it,Co),e(Co,Pg),e(Co,rl),e(rl,Ag),e(Co,Og),e(Co,il),e(il,Dg),e(Co,Sg),e(it,Ig),e(it,ja),e(ja,Wg),e(ja,wr),e(wr,Hg),e(ja,Qg),e(it,Ug),e(it,Na),e(Na,Bg),e(Na,Pa),e(Pa,Kg),e(Na,Rg),e(it,Vg),v(In,it,null),e(it,Yg),e(it,wt),v(Aa,wt,null),e(wt,Gg),e(wt,jo),e(jo,Jg),e(jo,Tr),e(Tr,Zg),e(jo,e_),e(jo,ll),e(ll,t_),e(jo,o_),e(wt,n_),v(Wn,wt,null),e(wt,s_),v(Hn,wt,null),e(wt,a_),v(Qn,wt,null),fd=!0},p(s,[y]){const Oa={};y&2&&(Oa.$$scope={dirty:y,ctx:s}),Do.$set(Oa);const dl={};y&2&&(dl.$$scope={dirty:y,ctx:s}),Wo.$set(dl);const cl={};y&2&&(cl.$$scope={dirty:y,ctx:s}),Uo.$set(cl);const pl={};y&2&&(pl.$$scope={dirty:y,ctx:s}),Bo.$set(pl);const Da={};y&2&&(Da.$$scope={dirty:y,ctx:s}),Ro.$set(Da);const ml={};y&2&&(ml.$$scope={dirty:y,ctx:s}),Vo.$set(ml);const hl={};y&2&&(hl.$$scope={dirty:y,ctx:s}),Yo.$set(hl);const ul={};y&2&&(ul.$$scope={dirty:y,ctx:s}),Jo.$set(ul);const Sa={};y&2&&(Sa.$$scope={dirty:y,ctx:s}),Zo.$set(Sa);const fl={};y&2&&(fl.$$scope={dirty:y,ctx:s}),en.$set(fl);const No={};y&2&&(No.$$scope={dirty:y,ctx:s}),tn.$set(No);const gl={};y&2&&(gl.$$scope={dirty:y,ctx:s}),on.$set(gl);const _l={};y&2&&(_l.$$scope={dirty:y,ctx:s}),sn.$set(_l);const kl={};y&2&&(kl.$$scope={dirty:y,ctx:s}),an.$set(kl);const yl={};y&2&&(yl.$$scope={dirty:y,ctx:s}),ln.$set(yl);const bl={};y&2&&(bl.$$scope={dirty:y,ctx:s}),dn.$set(bl);const wl={};y&2&&(wl.$$scope={dirty:y,ctx:s}),cn.$set(wl);const Tl={};y&2&&(Tl.$$scope={dirty:y,ctx:s}),mn.$set(Tl);const Ia={};y&2&&(Ia.$$scope={dirty:y,ctx:s}),hn.$set(Ia);const vl={};y&2&&(vl.$$scope={dirty:y,ctx:s}),un.$set(vl);const Po={};y&2&&(Po.$$scope={dirty:y,ctx:s}),gn.$set(Po);const Ml={};y&2&&(Ml.$$scope={dirty:y,ctx:s}),_n.$set(Ml);const $l={};y&2&&($l.$$scope={dirty:y,ctx:s}),yn.$set($l);const Ao={};y&2&&(Ao.$$scope={dirty:y,ctx:s}),bn.$set(Ao);const Ll={};y&2&&(Ll.$$scope={dirty:y,ctx:s}),wn.$set(Ll);const xl={};y&2&&(xl.$$scope={dirty:y,ctx:s}),vn.$set(xl);const Wa={};y&2&&(Wa.$$scope={dirty:y,ctx:s}),Mn.$set(Wa);const Fl={};y&2&&(Fl.$$scope={dirty:y,ctx:s}),$n.$set(Fl);const Xl={};y&2&&(Xl.$$scope={dirty:y,ctx:s}),xn.$set(Xl);const El={};y&2&&(El.$$scope={dirty:y,ctx:s}),Fn.$set(El);const Ot={};y&2&&(Ot.$$scope={dirty:y,ctx:s}),Xn.$set(Ot);const Dt={};y&2&&(Dt.$$scope={dirty:y,ctx:s}),En.$set(Dt);const ql={};y&2&&(ql.$$scope={dirty:y,ctx:s}),zn.$set(ql);const zl={};y&2&&(zl.$$scope={dirty:y,ctx:s}),Cn.$set(zl);const Cl={};y&2&&(Cl.$$scope={dirty:y,ctx:s}),jn.$set(Cl);const Oo={};y&2&&(Oo.$$scope={dirty:y,ctx:s}),Pn.$set(Oo);const jl={};y&2&&(jl.$$scope={dirty:y,ctx:s}),An.$set(jl);const Nl={};y&2&&(Nl.$$scope={dirty:y,ctx:s}),On.$set(Nl);const Ha={};y&2&&(Ha.$$scope={dirty:y,ctx:s}),Dn.$set(Ha);const Pl={};y&2&&(Pl.$$scope={dirty:y,ctx:s}),In.$set(Pl);const Al={};y&2&&(Al.$$scope={dirty:y,ctx:s}),Wn.$set(Al);const Ol={};y&2&&(Ol.$$scope={dirty:y,ctx:s}),Hn.$set(Ol);const Je={};y&2&&(Je.$$scope={dirty:y,ctx:s}),Qn.$set(Je)},i(s){fd||(M(l.$$.fragment,s),M(x.$$.fragment,s),M(Ae.$$.fragment,s),M(Oe.$$.fragment,s),M(Do.$$.fragment,s),M(es.$$.fragment,s),M(ts.$$.fragment,s),M(as.$$.fragment,s),M(is.$$.fragment,s),M(ds.$$.fragment,s),M(Wo.$$.fragment,s),M(cs.$$.fragment,s),M(ps.$$.fragment,s),M(ms.$$.fragment,s),M(us.$$.fragment,s),M(fs.$$.fragment,s),M(ys.$$.fragment,s),M(Uo.$$.fragment,s),M(Bo.$$.fragment,s),M(bs.$$.fragment,s),M(ws.$$.fragment,s),M($s.$$.fragment,s),M(Ro.$$.fragment,s),M(Vo.$$.fragment,s),M(Yo.$$.fragment,s),M(Ls.$$.fragment,s),M(xs.$$.fragment,s),M(qs.$$.fragment,s),M(Jo.$$.fragment,s),M(Zo.$$.fragment,s),M(en.$$.fragment,s),M(tn.$$.fragment,s),M(on.$$.fragment,s),M(zs.$$.fragment,s),M(Cs.$$.fragment,s),M(As.$$.fragment,s),M(sn.$$.fragment,s),M(an.$$.fragment,s),M(Os.$$.fragment,s),M(Ds.$$.fragment,s),M(Hs.$$.fragment,s),M(ln.$$.fragment,s),M(dn.$$.fragment,s),M(cn.$$.fragment,s),M(Qs.$$.fragment,s),M(Us.$$.fragment,s),M(Vs.$$.fragment,s),M(mn.$$.fragment,s),M(hn.$$.fragment,s),M(un.$$.fragment,s),M(Ys.$$.fragment,s),M(Gs.$$.fragment,s),M(ta.$$.fragment,s),M(gn.$$.fragment,s),M(_n.$$.fragment,s),M(oa.$$.fragment,s),M(na.$$.fragment,s),M(yn.$$.fragment,s),M(ia.$$.fragment,s),M(bn.$$.fragment,s),M(wn.$$.fragment,s),M(la.$$.fragment,s),M(da.$$.fragment,s),M(vn.$$.fragment,s),M(ha.$$.fragment,s),M(Mn.$$.fragment,s),M($n.$$.fragment,s),M(ua.$$.fragment,s),M(fa.$$.fragment,s),M(xn.$$.fragment,s),M(ya.$$.fragment,s),M(Fn.$$.fragment,s),M(Xn.$$.fragment,s),M(En.$$.fragment,s),M(ba.$$.fragment,s),M(wa.$$.fragment,s),M(zn.$$.fragment,s),M($a.$$.fragment,s),M(Cn.$$.fragment,s),M(jn.$$.fragment,s),M(La.$$.fragment,s),M(xa.$$.fragment,s),M(Pn.$$.fragment,s),M(qa.$$.fragment,s),M(An.$$.fragment,s),M(On.$$.fragment,s),M(Dn.$$.fragment,s),M(za.$$.fragment,s),M(Ca.$$.fragment,s),M(In.$$.fragment,s),M(Aa.$$.fragment,s),M(Wn.$$.fragment,s),M(Hn.$$.fragment,s),M(Qn.$$.fragment,s),fd=!0)},o(s){$(l.$$.fragment,s),$(x.$$.fragment,s),$(Ae.$$.fragment,s),$(Oe.$$.fragment,s),$(Do.$$.fragment,s),$(es.$$.fragment,s),$(ts.$$.fragment,s),$(as.$$.fragment,s),$(is.$$.fragment,s),$(ds.$$.fragment,s),$(Wo.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(fs.$$.fragment,s),$(ys.$$.fragment,s),$(Uo.$$.fragment,s),$(Bo.$$.fragment,s),$(bs.$$.fragment,s),$(ws.$$.fragment,s),$($s.$$.fragment,s),$(Ro.$$.fragment,s),$(Vo.$$.fragment,s),$(Yo.$$.fragment,s),$(Ls.$$.fragment,s),$(xs.$$.fragment,s),$(qs.$$.fragment,s),$(Jo.$$.fragment,s),$(Zo.$$.fragment,s),$(en.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(zs.$$.fragment,s),$(Cs.$$.fragment,s),$(As.$$.fragment,s),$(sn.$$.fragment,s),$(an.$$.fragment,s),$(Os.$$.fragment,s),$(Ds.$$.fragment,s),$(Hs.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(cn.$$.fragment,s),$(Qs.$$.fragment,s),$(Us.$$.fragment,s),$(Vs.$$.fragment,s),$(mn.$$.fragment,s),$(hn.$$.fragment,s),$(un.$$.fragment,s),$(Ys.$$.fragment,s),$(Gs.$$.fragment,s),$(ta.$$.fragment,s),$(gn.$$.fragment,s),$(_n.$$.fragment,s),$(oa.$$.fragment,s),$(na.$$.fragment,s),$(yn.$$.fragment,s),$(ia.$$.fragment,s),$(bn.$$.fragment,s),$(wn.$$.fragment,s),$(la.$$.fragment,s),$(da.$$.fragment,s),$(vn.$$.fragment,s),$(ha.$$.fragment,s),$(Mn.$$.fragment,s),$($n.$$.fragment,s),$(ua.$$.fragment,s),$(fa.$$.fragment,s),$(xn.$$.fragment,s),$(ya.$$.fragment,s),$(Fn.$$.fragment,s),$(Xn.$$.fragment,s),$(En.$$.fragment,s),$(ba.$$.fragment,s),$(wa.$$.fragment,s),$(zn.$$.fragment,s),$($a.$$.fragment,s),$(Cn.$$.fragment,s),$(jn.$$.fragment,s),$(La.$$.fragment,s),$(xa.$$.fragment,s),$(Pn.$$.fragment,s),$(qa.$$.fragment,s),$(An.$$.fragment,s),$(On.$$.fragment,s),$(Dn.$$.fragment,s),$(za.$$.fragment,s),$(Ca.$$.fragment,s),$(In.$$.fragment,s),$(Aa.$$.fragment,s),$(Wn.$$.fragment,s),$(Hn.$$.fragment,s),$(Qn.$$.fragment,s),fd=!1},d(s){t(d),s&&t(g),s&&t(c),L(l),s&&t(he),s&&t(S),L(x),s&&t(ue),s&&t(W),s&&t(fe),s&&t(D),s&&t(ge),s&&t(H),s&&t(_e),s&&t(Q),s&&t(j),s&&t(de),s&&t(ke),s&&t(ie),s&&t(ye),s&&t(te),s&&t(He),s&&t(je),L(Ae),s&&t(Qe),s&&t(O),L(Oe),L(Do),s&&t(Dl),s&&t(to),L(es),s&&t(Sl),s&&t(Ge),L(ts),L(as),L(is),L(ds),L(Wo),L(cs),s&&t(Il),s&&t(no),L(ps),s&&t(Wl),s&&t(so),L(ms),s&&t(Hl),s&&t(ao),L(us),s&&t(Ql),s&&t(dt),L(fs),L(ys),L(Uo),L(Bo),s&&t(Ul),s&&t(io),L(bs),s&&t(Bl),s&&t(ct),L(ws),L($s),L(Ro),L(Vo),L(Yo),s&&t(Kl),s&&t(co),L(Ls),s&&t(Rl),s&&t(pt),L(xs),L(qs),L(Jo),L(Zo),L(en),L(tn),L(on),s&&t(Vl),s&&t(mo),L(zs),s&&t(Yl),s&&t(mt),L(Cs),L(As),L(sn),L(an),s&&t(Gl),s&&t(uo),L(Os),s&&t(Jl),s&&t(ht),L(Ds),L(Hs),L(ln),L(dn),L(cn),s&&t(Zl),s&&t(go),L(Qs),s&&t(ed),s&&t(ut),L(Us),L(Vs),L(mn),L(hn),L(un),s&&t(td),s&&t(yo),L(Ys),s&&t(od),s&&t(ft),L(Gs),L(ta),L(gn),L(_n),s&&t(nd),s&&t(To),L(oa),s&&t(sd),s&&t(ot),L(na),L(yn),L(ia),L(bn),L(wn),s&&t(ad),s&&t(Mo),L(la),s&&t(rd),s&&t(nt),L(da),L(vn),L(ha),L(Mn),L($n),s&&t(id),s&&t(Lo),L(ua),s&&t(ld),s&&t(st),L(fa),L(xn),L(ya),L(Fn),L(Xn),L(En),s&&t(dd),s&&t(Fo),L(ba),s&&t(cd),s&&t(at),L(wa),L(zn),L($a),L(Cn),L(jn),s&&t(pd),s&&t(Eo),L(La),s&&t(md),s&&t(rt),L(xa),L(Pn),L(qa),L(An),L(On),L(Dn),s&&t(hd),s&&t(zo),L(za),s&&t(ud),s&&t(it),L(Ca),L(In),L(Aa),L(Wn),L(Hn),L(Qn)}}}const Mb={local:"xlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMConfig",title:"XLMConfig"},{local:"transformers.XLMTokenizer",title:"XLMTokenizer"},{local:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",title:"XLM specific outputs"},{local:"transformers.XLMModel",title:"XLMModel"},{local:"transformers.XLMWithLMHeadModel",title:"XLMWithLMHeadModel"},{local:"transformers.XLMForSequenceClassification",title:"XLMForSequenceClassification"},{local:"transformers.XLMForMultipleChoice",title:"XLMForMultipleChoice"},{local:"transformers.XLMForTokenClassification",title:"XLMForTokenClassification"},{local:"transformers.XLMForQuestionAnsweringSimple",title:"XLMForQuestionAnsweringSimple"},{local:"transformers.XLMForQuestionAnswering",title:"XLMForQuestionAnswering"},{local:"transformers.TFXLMModel",title:"TFXLMModel"},{local:"transformers.TFXLMWithLMHeadModel",title:"TFXLMWithLMHeadModel"},{local:"transformers.TFXLMForSequenceClassification",title:"TFXLMForSequenceClassification"},{local:"transformers.TFXLMForMultipleChoice",title:"TFXLMForMultipleChoice"},{local:"transformers.TFXLMForTokenClassification",title:"TFXLMForTokenClassification"},{local:"transformers.TFXLMForQuestionAnsweringSimple",title:"TFXLMForQuestionAnsweringSimple"}],title:"XLM"};function $b(X){return Cy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zb extends Xy{constructor(d){super();Ey(this,d,$b,vb,qy,{})}}export{zb as default,Mb as metadata};
