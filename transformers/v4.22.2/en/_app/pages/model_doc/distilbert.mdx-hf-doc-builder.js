import{S as Z1,i as eD,s as tD,e as r,k as h,w,t as o,M as oD,c as a,d as t,m as u,a as i,x as T,h as s,b as m,G as e,g as _,y as $,q as y,o as D,B as F,v as sD,L as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Le}from"../../chunks/Tip-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as me}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ue}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=o("Examples:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function rD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function aD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function iD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function lD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function dD(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function pD(E){let d,g,c,f,b;return f=new me({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=o("Example of single-label classification:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function hD(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function uD(E){let d,g,c,f,b;return f=new me({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=o("Example of multi-label classification:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function fD(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained(
    "distilbert-base-uncased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function mD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function gD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-cased")
model = DistilBertForMultipleChoice.from_pretrained("distilbert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Examples:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function _D(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function vD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function bD(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function kD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function wD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function TD(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function $D(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ke=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),b=s(x," accept two formats as input:"),x.forEach(t),l=u(k),p=a(k,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=u(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=u(k),B=a(k,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=u(k),z=a(k,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),be=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ke=u(N),C=a(N,"LI",{});var W=i(C);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=u(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=u(k),P=a(k,"P",{});var Q=i(P);Ce=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,b),_(k,l,x),_(k,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(k,oe,x),_(k,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,ve),_(k,te,x),_(k,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,be),e(q,R),e(R,xe),e(z,ke),e(z,C),e(C,se),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(k,ne,x),_(k,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(B),k&&t(te),k&&t(z),k&&t(ne),k&&t(P)}}}function yD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function DD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function FD(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ke=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),b=s(x," accept two formats as input:"),x.forEach(t),l=u(k),p=a(k,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=u(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=u(k),B=a(k,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=u(k),z=a(k,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),be=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ke=u(N),C=a(N,"LI",{});var W=i(C);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=u(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=u(k),P=a(k,"P",{});var Q=i(P);Ce=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,b),_(k,l,x),_(k,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(k,oe,x),_(k,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,ve),_(k,te,x),_(k,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,be),e(q,R),e(R,xe),e(z,ke),e(z,C),e(C,se),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(k,ne,x),_(k,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(B),k&&t(te),k&&t(z),k&&t(ne),k&&t(P)}}}function BD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function ED(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function xD(E){let d,g;return d=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function MD(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ke=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),b=s(x," accept two formats as input:"),x.forEach(t),l=u(k),p=a(k,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=u(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=u(k),B=a(k,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=u(k),z=a(k,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),be=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ke=u(N),C=a(N,"LI",{});var W=i(C);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=u(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=u(k),P=a(k,"P",{});var Q=i(P);Ce=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,b),_(k,l,x),_(k,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(k,oe,x),_(k,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,ve),_(k,te,x),_(k,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,be),e(q,R),e(R,xe),e(z,ke),e(z,C),e(C,se),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(k,ne,x),_(k,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(B),k&&t(te),k&&t(z),k&&t(ne),k&&t(P)}}}function jD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function zD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function CD(E){let d,g;return d=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function PD(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ke=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),b=s(x," accept two formats as input:"),x.forEach(t),l=u(k),p=a(k,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=u(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=u(k),B=a(k,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=u(k),z=a(k,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),be=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ke=u(N),C=a(N,"LI",{});var W=i(C);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=u(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=u(k),P=a(k,"P",{});var Q=i(P);Ce=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,b),_(k,l,x),_(k,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(k,oe,x),_(k,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,ve),_(k,te,x),_(k,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,be),e(q,R),e(R,xe),e(z,ke),e(z,C),e(C,se),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(k,ne,x),_(k,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(B),k&&t(te),k&&t(z),k&&t(ne),k&&t(P)}}}function qD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function AD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function OD(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ke=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),b=s(x," accept two formats as input:"),x.forEach(t),l=u(k),p=a(k,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=u(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=u(k),B=a(k,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=u(k),z=a(k,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),be=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ke=u(N),C=a(N,"LI",{});var W=i(C);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=u(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=u(k),P=a(k,"P",{});var Q=i(P);Ce=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,b),_(k,l,x),_(k,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(k,oe,x),_(k,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,ve),_(k,te,x),_(k,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,be),e(q,R),e(R,xe),e(z,ke),e(z,C),e(C,se),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(k,ne,x),_(k,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(B),k&&t(te),k&&t(z),k&&t(ne),k&&t(P)}}}function ND(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function ID(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function LD(E){let d,g;return d=new me({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function SD(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ke=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),b=s(x," accept two formats as input:"),x.forEach(t),l=u(k),p=a(k,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=u(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=u(k),B=a(k,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=u(k),z=a(k,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),be=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ke=u(N),C=a(N,"LI",{});var W=i(C);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=u(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=u(k),P=a(k,"P",{});var Q=i(P);Ce=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,b),_(k,l,x),_(k,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(k,oe,x),_(k,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,ve),_(k,te,x),_(k,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,be),e(q,R),e(R,xe),e(z,ke),e(z,C),e(C,se),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(k,ne,x),_(k,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(oe),k&&t(B),k&&t(te),k&&t(z),k&&t(ne),k&&t(P)}}}function WD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function QD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function RD(E){let d,g;return d=new me({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:fe,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function UD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function KD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function HD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function VD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function JD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function GD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function XD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function YD(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function ZD(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function eF(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function tF(E){let d,g,c,f,b;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);f=s(M,"Module"),M.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,b)},d(l){l&&t(d)}}}function oF(E){let d,g,c,f,b;return f=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(f.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),b=!0},p:fe,i(l){b||(y(f.$$.fragment,l),b=!0)},o(l){D(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function sF(E){let d,g,c,f,b,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,ve,te,z,q,le,K,Ee,be,R,xe,ke,C,se,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe,k,x,Ue,ee,Ke,He,j,Ve,Je,Ne,Ge,Xe,N,S,Oe,Se,W,Ye,We,Ae,Re,Q,Ie,Cu,Gt,Pu,Si,qu,Au,Wi,Ou,Nu,Yn,Iu,Lu,Su,$o,Wu,Qi,Qu,Ru,Ri,Uu,Ku,Hu,hs,Sp,yo,us,Vl,Zn,Vu,Jl,Ju,Wp,zt,er,Gu,Gl,Xu,Yu,fs,Ui,Zu,ef,Ki,tf,of,sf,tr,nf,Hi,rf,af,Qp,Do,ms,Xl,or,lf,Yl,df,Rp,Ct,sr,cf,nr,pf,Zl,hf,uf,ff,gs,Vi,mf,gf,Ji,_f,vf,bf,rr,kf,Gi,wf,Tf,Up,Fo,_s,ed,ar,$f,td,yf,Kp,ht,ir,Df,od,Ff,Bf,lr,Ef,Xi,xf,Mf,jf,dr,zf,cr,Cf,Pf,qf,Pt,pr,Af,Bo,Of,Yi,Nf,If,sd,Lf,Sf,Wf,vs,Qf,bs,Hp,Eo,ks,nd,hr,Rf,rd,Uf,Vp,ut,ur,Kf,fr,Hf,ad,Vf,Jf,Gf,mr,Xf,Zi,Yf,Zf,em,gr,tm,_r,om,sm,nm,vt,vr,rm,xo,am,el,im,lm,id,dm,cm,pm,ws,hm,Ts,um,$s,Jp,Mo,ys,ld,br,fm,dd,mm,Gp,ft,kr,gm,cd,_m,vm,wr,bm,tl,km,wm,Tm,Tr,$m,$r,ym,Dm,Fm,rt,yr,Bm,jo,Em,ol,xm,Mm,pd,jm,zm,Cm,Ds,Pm,Fs,qm,Bs,Am,Es,Om,xs,Xp,zo,Ms,hd,Dr,Nm,ud,Im,Yp,mt,Fr,Lm,fd,Sm,Wm,Br,Qm,sl,Rm,Um,Km,Er,Hm,xr,Vm,Jm,Gm,qt,Mr,Xm,Co,Ym,nl,Zm,eg,md,tg,og,sg,js,ng,zs,Zp,Po,Cs,gd,jr,rg,_d,ag,eh,gt,zr,ig,vd,lg,dg,Cr,cg,rl,pg,hg,ug,Pr,fg,qr,mg,gg,_g,bt,Ar,vg,qo,bg,al,kg,wg,bd,Tg,$g,yg,Ps,Dg,qs,Fg,As,th,Ao,Os,kd,Or,Bg,wd,Eg,oh,_t,Nr,xg,Oo,Mg,Td,jg,zg,$d,Cg,Pg,qg,Ir,Ag,il,Og,Ng,Ig,Lr,Lg,Sr,Sg,Wg,Qg,kt,Wr,Rg,No,Ug,ll,Kg,Hg,yd,Vg,Jg,Gg,Ns,Xg,Is,Yg,Ls,sh,Io,Ss,Dd,Qr,Zg,Fd,e_,nh,at,Rr,t_,Bd,o_,s_,Ur,n_,dl,r_,a_,i_,Kr,l_,Hr,d_,c_,p_,Ws,h_,At,Vr,u_,Lo,f_,cl,m_,g_,Ed,__,v_,b_,Qs,k_,Rs,rh,So,Us,xd,Jr,w_,Md,T_,ah,it,Gr,$_,Xr,y_,jd,D_,F_,B_,Yr,E_,pl,x_,M_,j_,Zr,z_,ea,C_,P_,q_,Ks,A_,wt,ta,O_,Wo,N_,hl,I_,L_,zd,S_,W_,Q_,Hs,R_,Vs,U_,Js,ih,Qo,Gs,Cd,oa,K_,Pd,H_,lh,lt,sa,V_,qd,J_,G_,na,X_,ul,Y_,Z_,ev,ra,tv,aa,ov,sv,nv,Xs,rv,Tt,ia,av,Ro,iv,fl,lv,dv,Ad,cv,pv,hv,Ys,uv,Zs,fv,en,dh,Uo,tn,Od,la,mv,Nd,gv,ch,dt,da,_v,Id,vv,bv,ca,kv,ml,wv,Tv,$v,pa,yv,ha,Dv,Fv,Bv,on,Ev,Ot,ua,xv,Ko,Mv,gl,jv,zv,Ld,Cv,Pv,qv,sn,Av,nn,ph,Ho,rn,Sd,fa,Ov,Wd,Nv,hh,ct,ma,Iv,Qd,Lv,Sv,ga,Wv,_l,Qv,Rv,Uv,_a,Kv,va,Hv,Vv,Jv,an,Gv,$t,ba,Xv,Vo,Yv,vl,Zv,eb,Rd,tb,ob,sb,ln,nb,dn,rb,cn,uh,Jo,pn,Ud,ka,ab,Kd,ib,fh,pt,wa,lb,Go,db,Hd,cb,pb,Vd,hb,ub,fb,Ta,mb,bl,gb,_b,vb,$a,bb,ya,kb,wb,Tb,hn,$b,yt,Da,yb,Xo,Db,kl,Fb,Bb,Jd,Eb,xb,Mb,un,jb,fn,zb,mn,mh,Yo,gn,Gd,Fa,Cb,Xd,Pb,gh,Ze,Ba,qb,Yd,Ab,Ob,Ea,Nb,wl,Ib,Lb,Sb,xa,Wb,Ma,Qb,Rb,Ub,Zd,Kb,Hb,Xt,ec,ja,Vb,Jb,tc,za,Gb,Xb,oc,Ca,Yb,Zb,sc,Pa,e2,t2,Nt,qa,o2,Zo,s2,nc,n2,r2,rc,a2,i2,l2,_n,d2,vn,_h,es,bn,ac,Aa,c2,ic,p2,vh,et,Oa,h2,Na,u2,lc,f2,m2,g2,Ia,_2,Tl,v2,b2,k2,La,w2,Sa,T2,$2,y2,dc,D2,F2,Yt,cc,Wa,B2,E2,pc,Qa,x2,M2,hc,Ra,j2,z2,uc,Ua,C2,P2,It,Ka,q2,ts,A2,fc,O2,N2,mc,I2,L2,S2,kn,W2,wn,bh,os,Tn,gc,Ha,Q2,_c,R2,kh,tt,Va,U2,vc,K2,H2,Ja,V2,$l,J2,G2,X2,Ga,Y2,Xa,Z2,ek,tk,bc,ok,sk,Zt,kc,Ya,nk,rk,wc,Za,ak,ik,Tc,ei,lk,dk,$c,ti,ck,pk,Lt,oi,hk,ss,uk,yc,fk,mk,Dc,gk,_k,vk,$n,bk,yn,wh,ns,Dn,Fc,si,kk,Bc,wk,Th,ot,ni,Tk,Ec,$k,yk,ri,Dk,yl,Fk,Bk,Ek,ai,xk,ii,Mk,jk,zk,xc,Ck,Pk,eo,Mc,li,qk,Ak,jc,di,Ok,Nk,zc,ci,Ik,Lk,Cc,pi,Sk,Wk,St,hi,Qk,rs,Rk,Pc,Uk,Kk,qc,Hk,Vk,Jk,Fn,Gk,Bn,$h,as,En,Ac,ui,Xk,Oc,Yk,yh,st,fi,Zk,Nc,ew,tw,mi,ow,Dl,sw,nw,rw,gi,aw,_i,iw,lw,dw,Ic,cw,pw,to,Lc,vi,hw,uw,Sc,bi,fw,mw,Wc,ki,gw,_w,Qc,wi,vw,bw,Wt,Ti,kw,is,ww,Rc,Tw,$w,Uc,yw,Dw,Fw,xn,Bw,Mn,Dh,ls,jn,Kc,$i,Ew,Hc,xw,Fh,nt,yi,Mw,ds,jw,Vc,zw,Cw,Jc,Pw,qw,Aw,Di,Ow,Fl,Nw,Iw,Lw,Fi,Sw,Bi,Ww,Qw,Rw,Gc,Uw,Kw,oo,Xc,Ei,Hw,Vw,Yc,xi,Jw,Gw,Zc,Mi,Xw,Yw,ep,ji,Zw,eT,Qt,zi,tT,cs,oT,tp,sT,nT,op,rT,aT,iT,zn,lT,Cn,Bh;return l=new Qe({}),B=new Qe({}),W=new Qe({}),Ie=new Z({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DistilBertConfig.sinusoidal_pos_embds",description:`<strong>sinusoidal_pos_embds</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use sinusoidal positional embeddings.`,name:"sinusoidal_pos_embds"},{anchor:"transformers.DistilBertConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.DistilBertConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.DistilBertConfig.dim",description:`<strong>dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"dim"},{anchor:"transformers.DistilBertConfig.hidden_dim",description:`<strong>hidden_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
The size of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"hidden_dim"},{anchor:"transformers.DistilBertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.DistilBertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.DistilBertConfig.activation",description:`<strong>activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation"},{anchor:"transformers.DistilBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DistilBertConfig.qa_dropout",description:`<strong>qa_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilities used in the question answering model <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/configuration_distilbert.py#L45"}}),hs=new ue({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nD]},$$scope:{ctx:E}}}),Zn=new Qe({}),er=new Z({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/tokenization_distilbert.py#L62"}}),or=new Qe({}),sr=new Z({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L79"}}),ar=new Qe({}),ir=new Z({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L459"}}),pr=new Z({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L531",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),vs=new Le({props:{$$slots:{default:[rD]},$$scope:{ctx:E}}}),bs=new ue({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aD]},$$scope:{ctx:E}}}),hr=new Qe({}),ur=new Z({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L587"}}),vr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),ws=new Le({props:{$$slots:{default:[iD]},$$scope:{ctx:E}}}),Ts=new ue({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lD]},$$scope:{ctx:E}}}),$s=new ue({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dD]},$$scope:{ctx:E}}}),br=new Qe({}),kr=new Z({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L693"}}),yr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L727",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Ds=new Le({props:{$$slots:{default:[cD]},$$scope:{ctx:E}}}),Fs=new ue({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pD]},$$scope:{ctx:E}}}),Bs=new ue({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hD]},$$scope:{ctx:E}}}),Es=new ue({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[uD]},$$scope:{ctx:E}}}),xs=new ue({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[fD]},$$scope:{ctx:E}}}),Dr=new Qe({}),Fr=new Z({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L1023"}}),Mr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L1055",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),js=new Le({props:{$$slots:{default:[mD]},$$scope:{ctx:E}}}),zs=new ue({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gD]},$$scope:{ctx:E}}}),jr=new Qe({}),zr=new Z({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L928"}}),Ar=new Z({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L960",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Ps=new Le({props:{$$slots:{default:[_D]},$$scope:{ctx:E}}}),qs=new ue({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[vD]},$$scope:{ctx:E}}}),As=new ue({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[bD]},$$scope:{ctx:E}}}),Or=new Qe({}),Nr=new Z({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L811"}}),Wr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_distilbert.py#L843",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Ns=new Le({props:{$$slots:{default:[kD]},$$scope:{ctx:E}}}),Is=new ue({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[wD]},$$scope:{ctx:E}}}),Ls=new ue({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[TD]},$$scope:{ctx:E}}}),Qr=new Qe({}),Rr=new Z({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527"}}),Ws=new Le({props:{$$slots:{default:[$D]},$$scope:{ctx:E}}}),Vr=new Z({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L532",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Qs=new Le({props:{$$slots:{default:[yD]},$$scope:{ctx:E}}}),Rs=new ue({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[DD]},$$scope:{ctx:E}}}),Jr=new Qe({}),Gr=new Z({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L614"}}),Ks=new Le({props:{$$slots:{default:[FD]},$$scope:{ctx:E}}}),ta=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L634",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Hs=new Le({props:{$$slots:{default:[BD]},$$scope:{ctx:E}}}),Vs=new ue({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[ED]},$$scope:{ctx:E}}}),Js=new ue({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[xD]},$$scope:{ctx:E}}}),oa=new Qe({}),sa=new Z({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L704"}}),Xs=new Le({props:{$$slots:{default:[MD]},$$scope:{ctx:E}}}),ia=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L721",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Ys=new Le({props:{$$slots:{default:[jD]},$$scope:{ctx:E}}}),Zs=new ue({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[zD]},$$scope:{ctx:E}}}),en=new ue({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[CD]},$$scope:{ctx:E}}}),la=new Qe({}),da=new Z({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L867"}}),on=new Le({props:{$$slots:{default:[PD]},$$scope:{ctx:E}}}),ua=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L893",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),sn=new Le({props:{$$slots:{default:[qD]},$$scope:{ctx:E}}}),nn=new ue({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AD]},$$scope:{ctx:E}}}),fa=new Qe({}),ma=new Z({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L791"}}),an=new Le({props:{$$slots:{default:[OD]},$$scope:{ctx:E}}}),ba=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L802",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),ln=new Le({props:{$$slots:{default:[ND]},$$scope:{ctx:E}}}),dn=new ue({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[ID]},$$scope:{ctx:E}}}),cn=new ue({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[LD]},$$scope:{ctx:E}}}),ka=new Qe({}),wa=new Z({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L992"}}),hn=new Le({props:{$$slots:{default:[SD]},$$scope:{ctx:E}}}),Da=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1003",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),un=new Le({props:{$$slots:{default:[WD]},$$scope:{ctx:E}}}),fn=new ue({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QD]},$$scope:{ctx:E}}}),mn=new ue({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RD]},$$scope:{ctx:E}}}),Fa=new Qe({}),Ba=new Z({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),qa=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),_n=new Le({props:{$$slots:{default:[UD]},$$scope:{ctx:E}}}),vn=new ue({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[KD]},$$scope:{ctx:E}}}),Aa=new Qe({}),Oa=new Z({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),Ka=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new Le({props:{$$slots:{default:[HD]},$$scope:{ctx:E}}}),wn=new ue({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[VD]},$$scope:{ctx:E}}}),Ha=new Qe({}),Va=new Z({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),oi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new Le({props:{$$slots:{default:[JD]},$$scope:{ctx:E}}}),yn=new ue({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GD]},$$scope:{ctx:E}}}),si=new Qe({}),ni=new Z({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),hi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new Le({props:{$$slots:{default:[XD]},$$scope:{ctx:E}}}),Bn=new ue({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YD]},$$scope:{ctx:E}}}),ui=new Qe({}),fi=new Z({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),Ti=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xn=new Le({props:{$$slots:{default:[ZD]},$$scope:{ctx:E}}}),Mn=new ue({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:E}}}),$i=new Qe({}),yi=new Z({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),zi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new Le({props:{$$slots:{default:[tF]},$$scope:{ctx:E}}}),Cn=new ue({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[oF]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=h(),c=r("h1"),f=r("a"),b=r("span"),w(l.$$.fragment),p=h(),M=r("span"),we=o("DistilBERT"),ge=h(),I=r("h2"),re=r("a"),oe=r("span"),w(B.$$.fragment),Te=h(),U=r("span"),$e=o("Overview"),_e=h(),O=r("p"),ye=o("The DistilBERT model was proposed in the blog post "),ae=r("a"),H=o(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),De=o(", and the paper "),ie=r("a"),V=o(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),Fe=o(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),de=r("em"),J=o("bert-base-uncased"),Be=o(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ve=h(),te=r("p"),z=o("The abstract from the paper is the following:"),q=h(),le=r("p"),K=r("em"),Ee=o(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),be=h(),R=r("p"),xe=o("Tips:"),ke=h(),C=r("ul"),se=r("li"),G=o("DistilBERT doesn\u2019t have "),ce=r("code"),Me=o("token_type_ids"),X=o(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),pe=r("code"),je=o("tokenizer.sep_token"),L=o(" (or "),he=r("code"),Y=o("[SEP]"),ze=o(")."),ne=h(),P=r("li"),Ce=o("DistilBERT doesn\u2019t have options to select the input positions ("),A=r("code"),Pe=o("position_ids"),qe=o(` input). This could be added if
necessary though, just let us know if you need this option.`),k=h(),x=r("p"),Ue=o("This model was contributed by "),ee=r("a"),Ke=o("victorsanh"),He=o(`. This model jax version was
contributed by `),j=r("a"),Ve=o("kamalkraj"),Je=o(". The original code can be found "),Ne=r("a"),Ge=o("here"),Xe=o("."),N=h(),S=r("h2"),Oe=r("a"),Se=r("span"),w(W.$$.fragment),Ye=h(),We=r("span"),Ae=o("DistilBertConfig"),Re=h(),Q=r("div"),w(Ie.$$.fragment),Cu=h(),Gt=r("p"),Pu=o("This is the configuration class to store the configuration of a "),Si=r("a"),qu=o("DistilBertModel"),Au=o(" or a "),Wi=r("a"),Ou=o("TFDistilBertModel"),Nu=o(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),Yn=r("a"),Iu=o("distilbert-base-uncased"),Lu=o(" architecture."),Su=h(),$o=r("p"),Wu=o("Configuration objects inherit from "),Qi=r("a"),Qu=o("PretrainedConfig"),Ru=o(` and can be used to control the model outputs. Read the
documentation from `),Ri=r("a"),Uu=o("PretrainedConfig"),Ku=o(" for more information."),Hu=h(),w(hs.$$.fragment),Sp=h(),yo=r("h2"),us=r("a"),Vl=r("span"),w(Zn.$$.fragment),Vu=h(),Jl=r("span"),Ju=o("DistilBertTokenizer"),Wp=h(),zt=r("div"),w(er.$$.fragment),Gu=h(),Gl=r("p"),Xu=o("Construct a DistilBERT tokenizer."),Yu=h(),fs=r("p"),Ui=r("a"),Zu=o("DistilBertTokenizer"),ef=o(" is identical to "),Ki=r("a"),tf=o("BertTokenizer"),of=o(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),sf=h(),tr=r("p"),nf=o("Refer to superclass "),Hi=r("a"),rf=o("BertTokenizer"),af=o(" for usage examples and documentation concerning parameters."),Qp=h(),Do=r("h2"),ms=r("a"),Xl=r("span"),w(or.$$.fragment),lf=h(),Yl=r("span"),df=o("DistilBertTokenizerFast"),Rp=h(),Ct=r("div"),w(sr.$$.fragment),cf=h(),nr=r("p"),pf=o("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),hf=o("tokenizers"),uf=o(" library)."),ff=h(),gs=r("p"),Vi=r("a"),mf=o("DistilBertTokenizerFast"),gf=o(" is identical to "),Ji=r("a"),_f=o("BertTokenizerFast"),vf=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bf=h(),rr=r("p"),kf=o("Refer to superclass "),Gi=r("a"),wf=o("BertTokenizerFast"),Tf=o(" for usage examples and documentation concerning parameters."),Up=h(),Fo=r("h2"),_s=r("a"),ed=r("span"),w(ar.$$.fragment),$f=h(),td=r("span"),yf=o("DistilBertModel"),Kp=h(),ht=r("div"),w(ir.$$.fragment),Df=h(),od=r("p"),Ff=o("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Bf=h(),lr=r("p"),Ef=o("This model inherits from "),Xi=r("a"),xf=o("PreTrainedModel"),Mf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf=h(),dr=r("p"),zf=o("This model is also a PyTorch "),cr=r("a"),Cf=o("torch.nn.Module"),Pf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=h(),Pt=r("div"),w(pr.$$.fragment),Af=h(),Bo=r("p"),Of=o("The "),Yi=r("a"),Nf=o("DistilBertModel"),If=o(" forward method, overrides the "),sd=r("code"),Lf=o("__call__"),Sf=o(" special method."),Wf=h(),w(vs.$$.fragment),Qf=h(),w(bs.$$.fragment),Hp=h(),Eo=r("h2"),ks=r("a"),nd=r("span"),w(hr.$$.fragment),Rf=h(),rd=r("span"),Uf=o("DistilBertForMaskedLM"),Vp=h(),ut=r("div"),w(ur.$$.fragment),Kf=h(),fr=r("p"),Hf=o("DistilBert Model with a "),ad=r("code"),Vf=o("masked language modeling"),Jf=o(" head on top."),Gf=h(),mr=r("p"),Xf=o("This model inherits from "),Zi=r("a"),Yf=o("PreTrainedModel"),Zf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em=h(),gr=r("p"),tm=o("This model is also a PyTorch "),_r=r("a"),om=o("torch.nn.Module"),sm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nm=h(),vt=r("div"),w(vr.$$.fragment),rm=h(),xo=r("p"),am=o("The "),el=r("a"),im=o("DistilBertForMaskedLM"),lm=o(" forward method, overrides the "),id=r("code"),dm=o("__call__"),cm=o(" special method."),pm=h(),w(ws.$$.fragment),hm=h(),w(Ts.$$.fragment),um=h(),w($s.$$.fragment),Jp=h(),Mo=r("h2"),ys=r("a"),ld=r("span"),w(br.$$.fragment),fm=h(),dd=r("span"),mm=o("DistilBertForSequenceClassification"),Gp=h(),ft=r("div"),w(kr.$$.fragment),gm=h(),cd=r("p"),_m=o(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vm=h(),wr=r("p"),bm=o("This model inherits from "),tl=r("a"),km=o("PreTrainedModel"),wm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tm=h(),Tr=r("p"),$m=o("This model is also a PyTorch "),$r=r("a"),ym=o("torch.nn.Module"),Dm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fm=h(),rt=r("div"),w(yr.$$.fragment),Bm=h(),jo=r("p"),Em=o("The "),ol=r("a"),xm=o("DistilBertForSequenceClassification"),Mm=o(" forward method, overrides the "),pd=r("code"),jm=o("__call__"),zm=o(" special method."),Cm=h(),w(Ds.$$.fragment),Pm=h(),w(Fs.$$.fragment),qm=h(),w(Bs.$$.fragment),Am=h(),w(Es.$$.fragment),Om=h(),w(xs.$$.fragment),Xp=h(),zo=r("h2"),Ms=r("a"),hd=r("span"),w(Dr.$$.fragment),Nm=h(),ud=r("span"),Im=o("DistilBertForMultipleChoice"),Yp=h(),mt=r("div"),w(Fr.$$.fragment),Lm=h(),fd=r("p"),Sm=o(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wm=h(),Br=r("p"),Qm=o("This model inherits from "),sl=r("a"),Rm=o("PreTrainedModel"),Um=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Km=h(),Er=r("p"),Hm=o("This model is also a PyTorch "),xr=r("a"),Vm=o("torch.nn.Module"),Jm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gm=h(),qt=r("div"),w(Mr.$$.fragment),Xm=h(),Co=r("p"),Ym=o("The "),nl=r("a"),Zm=o("DistilBertForMultipleChoice"),eg=o(" forward method, overrides the "),md=r("code"),tg=o("__call__"),og=o(" special method."),sg=h(),w(js.$$.fragment),ng=h(),w(zs.$$.fragment),Zp=h(),Po=r("h2"),Cs=r("a"),gd=r("span"),w(jr.$$.fragment),rg=h(),_d=r("span"),ag=o("DistilBertForTokenClassification"),eh=h(),gt=r("div"),w(zr.$$.fragment),ig=h(),vd=r("p"),lg=o(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=h(),Cr=r("p"),cg=o("This model inherits from "),rl=r("a"),pg=o("PreTrainedModel"),hg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ug=h(),Pr=r("p"),fg=o("This model is also a PyTorch "),qr=r("a"),mg=o("torch.nn.Module"),gg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=h(),bt=r("div"),w(Ar.$$.fragment),vg=h(),qo=r("p"),bg=o("The "),al=r("a"),kg=o("DistilBertForTokenClassification"),wg=o(" forward method, overrides the "),bd=r("code"),Tg=o("__call__"),$g=o(" special method."),yg=h(),w(Ps.$$.fragment),Dg=h(),w(qs.$$.fragment),Fg=h(),w(As.$$.fragment),th=h(),Ao=r("h2"),Os=r("a"),kd=r("span"),w(Or.$$.fragment),Bg=h(),wd=r("span"),Eg=o("DistilBertForQuestionAnswering"),oh=h(),_t=r("div"),w(Nr.$$.fragment),xg=h(),Oo=r("p"),Mg=o(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Td=r("code"),jg=o("span start logits"),zg=o(" and "),$d=r("code"),Cg=o("span end logits"),Pg=o(")."),qg=h(),Ir=r("p"),Ag=o("This model inherits from "),il=r("a"),Og=o("PreTrainedModel"),Ng=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=h(),Lr=r("p"),Lg=o("This model is also a PyTorch "),Sr=r("a"),Sg=o("torch.nn.Module"),Wg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=h(),kt=r("div"),w(Wr.$$.fragment),Rg=h(),No=r("p"),Ug=o("The "),ll=r("a"),Kg=o("DistilBertForQuestionAnswering"),Hg=o(" forward method, overrides the "),yd=r("code"),Vg=o("__call__"),Jg=o(" special method."),Gg=h(),w(Ns.$$.fragment),Xg=h(),w(Is.$$.fragment),Yg=h(),w(Ls.$$.fragment),sh=h(),Io=r("h2"),Ss=r("a"),Dd=r("span"),w(Qr.$$.fragment),Zg=h(),Fd=r("span"),e_=o("TFDistilBertModel"),nh=h(),at=r("div"),w(Rr.$$.fragment),t_=h(),Bd=r("p"),o_=o("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),s_=h(),Ur=r("p"),n_=o("This model inherits from "),dl=r("a"),r_=o("TFPreTrainedModel"),a_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=h(),Kr=r("p"),l_=o("This model is also a "),Hr=r("a"),d_=o("tf.keras.Model"),c_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=h(),w(Ws.$$.fragment),h_=h(),At=r("div"),w(Vr.$$.fragment),u_=h(),Lo=r("p"),f_=o("The "),cl=r("a"),m_=o("TFDistilBertModel"),g_=o(" forward method, overrides the "),Ed=r("code"),__=o("__call__"),v_=o(" special method."),b_=h(),w(Qs.$$.fragment),k_=h(),w(Rs.$$.fragment),rh=h(),So=r("h2"),Us=r("a"),xd=r("span"),w(Jr.$$.fragment),w_=h(),Md=r("span"),T_=o("TFDistilBertForMaskedLM"),ah=h(),it=r("div"),w(Gr.$$.fragment),$_=h(),Xr=r("p"),y_=o("DistilBert Model with a "),jd=r("code"),D_=o("masked language modeling"),F_=o(" head on top."),B_=h(),Yr=r("p"),E_=o("This model inherits from "),pl=r("a"),x_=o("TFPreTrainedModel"),M_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=h(),Zr=r("p"),z_=o("This model is also a "),ea=r("a"),C_=o("tf.keras.Model"),P_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q_=h(),w(Ks.$$.fragment),A_=h(),wt=r("div"),w(ta.$$.fragment),O_=h(),Wo=r("p"),N_=o("The "),hl=r("a"),I_=o("TFDistilBertForMaskedLM"),L_=o(" forward method, overrides the "),zd=r("code"),S_=o("__call__"),W_=o(" special method."),Q_=h(),w(Hs.$$.fragment),R_=h(),w(Vs.$$.fragment),U_=h(),w(Js.$$.fragment),ih=h(),Qo=r("h2"),Gs=r("a"),Cd=r("span"),w(oa.$$.fragment),K_=h(),Pd=r("span"),H_=o("TFDistilBertForSequenceClassification"),lh=h(),lt=r("div"),w(sa.$$.fragment),V_=h(),qd=r("p"),J_=o(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=h(),na=r("p"),X_=o("This model inherits from "),ul=r("a"),Y_=o("TFPreTrainedModel"),Z_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ev=h(),ra=r("p"),tv=o("This model is also a "),aa=r("a"),ov=o("tf.keras.Model"),sv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nv=h(),w(Xs.$$.fragment),rv=h(),Tt=r("div"),w(ia.$$.fragment),av=h(),Ro=r("p"),iv=o("The "),fl=r("a"),lv=o("TFDistilBertForSequenceClassification"),dv=o(" forward method, overrides the "),Ad=r("code"),cv=o("__call__"),pv=o(" special method."),hv=h(),w(Ys.$$.fragment),uv=h(),w(Zs.$$.fragment),fv=h(),w(en.$$.fragment),dh=h(),Uo=r("h2"),tn=r("a"),Od=r("span"),w(la.$$.fragment),mv=h(),Nd=r("span"),gv=o("TFDistilBertForMultipleChoice"),ch=h(),dt=r("div"),w(da.$$.fragment),_v=h(),Id=r("p"),vv=o(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),bv=h(),ca=r("p"),kv=o("This model inherits from "),ml=r("a"),wv=o("TFPreTrainedModel"),Tv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=h(),pa=r("p"),yv=o("This model is also a "),ha=r("a"),Dv=o("tf.keras.Model"),Fv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bv=h(),w(on.$$.fragment),Ev=h(),Ot=r("div"),w(ua.$$.fragment),xv=h(),Ko=r("p"),Mv=o("The "),gl=r("a"),jv=o("TFDistilBertForMultipleChoice"),zv=o(" forward method, overrides the "),Ld=r("code"),Cv=o("__call__"),Pv=o(" special method."),qv=h(),w(sn.$$.fragment),Av=h(),w(nn.$$.fragment),ph=h(),Ho=r("h2"),rn=r("a"),Sd=r("span"),w(fa.$$.fragment),Ov=h(),Wd=r("span"),Nv=o("TFDistilBertForTokenClassification"),hh=h(),ct=r("div"),w(ma.$$.fragment),Iv=h(),Qd=r("p"),Lv=o(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Sv=h(),ga=r("p"),Wv=o("This model inherits from "),_l=r("a"),Qv=o("TFPreTrainedModel"),Rv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=h(),_a=r("p"),Kv=o("This model is also a "),va=r("a"),Hv=o("tf.keras.Model"),Vv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jv=h(),w(an.$$.fragment),Gv=h(),$t=r("div"),w(ba.$$.fragment),Xv=h(),Vo=r("p"),Yv=o("The "),vl=r("a"),Zv=o("TFDistilBertForTokenClassification"),eb=o(" forward method, overrides the "),Rd=r("code"),tb=o("__call__"),ob=o(" special method."),sb=h(),w(ln.$$.fragment),nb=h(),w(dn.$$.fragment),rb=h(),w(cn.$$.fragment),uh=h(),Jo=r("h2"),pn=r("a"),Ud=r("span"),w(ka.$$.fragment),ab=h(),Kd=r("span"),ib=o("TFDistilBertForQuestionAnswering"),fh=h(),pt=r("div"),w(wa.$$.fragment),lb=h(),Go=r("p"),db=o(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Hd=r("code"),cb=o("span start logits"),pb=o(" and "),Vd=r("code"),hb=o("span end logits"),ub=o(")."),fb=h(),Ta=r("p"),mb=o("This model inherits from "),bl=r("a"),gb=o("TFPreTrainedModel"),_b=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=h(),$a=r("p"),bb=o("This model is also a "),ya=r("a"),kb=o("tf.keras.Model"),wb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tb=h(),w(hn.$$.fragment),$b=h(),yt=r("div"),w(Da.$$.fragment),yb=h(),Xo=r("p"),Db=o("The "),kl=r("a"),Fb=o("TFDistilBertForQuestionAnswering"),Bb=o(" forward method, overrides the "),Jd=r("code"),Eb=o("__call__"),xb=o(" special method."),Mb=h(),w(un.$$.fragment),jb=h(),w(fn.$$.fragment),zb=h(),w(mn.$$.fragment),mh=h(),Yo=r("h2"),gn=r("a"),Gd=r("span"),w(Fa.$$.fragment),Cb=h(),Xd=r("span"),Pb=o("FlaxDistilBertModel"),gh=h(),Ze=r("div"),w(Ba.$$.fragment),qb=h(),Yd=r("p"),Ab=o("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ob=h(),Ea=r("p"),Nb=o("This model inherits from "),wl=r("a"),Ib=o("FlaxPreTrainedModel"),Lb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Sb=h(),xa=r("p"),Wb=o("This model is also a Flax Linen "),Ma=r("a"),Qb=o("flax.linen.Module"),Rb=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ub=h(),Zd=r("p"),Kb=o("Finally, this model supports inherent JAX features such as:"),Hb=h(),Xt=r("ul"),ec=r("li"),ja=r("a"),Vb=o("Just-In-Time (JIT) compilation"),Jb=h(),tc=r("li"),za=r("a"),Gb=o("Automatic Differentiation"),Xb=h(),oc=r("li"),Ca=r("a"),Yb=o("Vectorization"),Zb=h(),sc=r("li"),Pa=r("a"),e2=o("Parallelization"),t2=h(),Nt=r("div"),w(qa.$$.fragment),o2=h(),Zo=r("p"),s2=o("The "),nc=r("code"),n2=o("FlaxDistilBertPreTrainedModel"),r2=o(" forward method, overrides the "),rc=r("code"),a2=o("__call__"),i2=o(" special method."),l2=h(),w(_n.$$.fragment),d2=h(),w(vn.$$.fragment),_h=h(),es=r("h2"),bn=r("a"),ac=r("span"),w(Aa.$$.fragment),c2=h(),ic=r("span"),p2=o("FlaxDistilBertForMaskedLM"),vh=h(),et=r("div"),w(Oa.$$.fragment),h2=h(),Na=r("p"),u2=o("DistilBert Model with a "),lc=r("code"),f2=o("language modeling"),m2=o(" head on top."),g2=h(),Ia=r("p"),_2=o("This model inherits from "),Tl=r("a"),v2=o("FlaxPreTrainedModel"),b2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k2=h(),La=r("p"),w2=o("This model is also a Flax Linen "),Sa=r("a"),T2=o("flax.linen.Module"),$2=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),y2=h(),dc=r("p"),D2=o("Finally, this model supports inherent JAX features such as:"),F2=h(),Yt=r("ul"),cc=r("li"),Wa=r("a"),B2=o("Just-In-Time (JIT) compilation"),E2=h(),pc=r("li"),Qa=r("a"),x2=o("Automatic Differentiation"),M2=h(),hc=r("li"),Ra=r("a"),j2=o("Vectorization"),z2=h(),uc=r("li"),Ua=r("a"),C2=o("Parallelization"),P2=h(),It=r("div"),w(Ka.$$.fragment),q2=h(),ts=r("p"),A2=o("The "),fc=r("code"),O2=o("FlaxDistilBertPreTrainedModel"),N2=o(" forward method, overrides the "),mc=r("code"),I2=o("__call__"),L2=o(" special method."),S2=h(),w(kn.$$.fragment),W2=h(),w(wn.$$.fragment),bh=h(),os=r("h2"),Tn=r("a"),gc=r("span"),w(Ha.$$.fragment),Q2=h(),_c=r("span"),R2=o("FlaxDistilBertForSequenceClassification"),kh=h(),tt=r("div"),w(Va.$$.fragment),U2=h(),vc=r("p"),K2=o(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),H2=h(),Ja=r("p"),V2=o("This model inherits from "),$l=r("a"),J2=o("FlaxPreTrainedModel"),G2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),X2=h(),Ga=r("p"),Y2=o("This model is also a Flax Linen "),Xa=r("a"),Z2=o("flax.linen.Module"),ek=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tk=h(),bc=r("p"),ok=o("Finally, this model supports inherent JAX features such as:"),sk=h(),Zt=r("ul"),kc=r("li"),Ya=r("a"),nk=o("Just-In-Time (JIT) compilation"),rk=h(),wc=r("li"),Za=r("a"),ak=o("Automatic Differentiation"),ik=h(),Tc=r("li"),ei=r("a"),lk=o("Vectorization"),dk=h(),$c=r("li"),ti=r("a"),ck=o("Parallelization"),pk=h(),Lt=r("div"),w(oi.$$.fragment),hk=h(),ss=r("p"),uk=o("The "),yc=r("code"),fk=o("FlaxDistilBertPreTrainedModel"),mk=o(" forward method, overrides the "),Dc=r("code"),gk=o("__call__"),_k=o(" special method."),vk=h(),w($n.$$.fragment),bk=h(),w(yn.$$.fragment),wh=h(),ns=r("h2"),Dn=r("a"),Fc=r("span"),w(si.$$.fragment),kk=h(),Bc=r("span"),wk=o("FlaxDistilBertForMultipleChoice"),Th=h(),ot=r("div"),w(ni.$$.fragment),Tk=h(),Ec=r("p"),$k=o(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yk=h(),ri=r("p"),Dk=o("This model inherits from "),yl=r("a"),Fk=o("FlaxPreTrainedModel"),Bk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ek=h(),ai=r("p"),xk=o("This model is also a Flax Linen "),ii=r("a"),Mk=o("flax.linen.Module"),jk=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zk=h(),xc=r("p"),Ck=o("Finally, this model supports inherent JAX features such as:"),Pk=h(),eo=r("ul"),Mc=r("li"),li=r("a"),qk=o("Just-In-Time (JIT) compilation"),Ak=h(),jc=r("li"),di=r("a"),Ok=o("Automatic Differentiation"),Nk=h(),zc=r("li"),ci=r("a"),Ik=o("Vectorization"),Lk=h(),Cc=r("li"),pi=r("a"),Sk=o("Parallelization"),Wk=h(),St=r("div"),w(hi.$$.fragment),Qk=h(),rs=r("p"),Rk=o("The "),Pc=r("code"),Uk=o("FlaxDistilBertPreTrainedModel"),Kk=o(" forward method, overrides the "),qc=r("code"),Hk=o("__call__"),Vk=o(" special method."),Jk=h(),w(Fn.$$.fragment),Gk=h(),w(Bn.$$.fragment),$h=h(),as=r("h2"),En=r("a"),Ac=r("span"),w(ui.$$.fragment),Xk=h(),Oc=r("span"),Yk=o("FlaxDistilBertForTokenClassification"),yh=h(),st=r("div"),w(fi.$$.fragment),Zk=h(),Nc=r("p"),ew=o(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),tw=h(),mi=r("p"),ow=o("This model inherits from "),Dl=r("a"),sw=o("FlaxPreTrainedModel"),nw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rw=h(),gi=r("p"),aw=o("This model is also a Flax Linen "),_i=r("a"),iw=o("flax.linen.Module"),lw=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dw=h(),Ic=r("p"),cw=o("Finally, this model supports inherent JAX features such as:"),pw=h(),to=r("ul"),Lc=r("li"),vi=r("a"),hw=o("Just-In-Time (JIT) compilation"),uw=h(),Sc=r("li"),bi=r("a"),fw=o("Automatic Differentiation"),mw=h(),Wc=r("li"),ki=r("a"),gw=o("Vectorization"),_w=h(),Qc=r("li"),wi=r("a"),vw=o("Parallelization"),bw=h(),Wt=r("div"),w(Ti.$$.fragment),kw=h(),is=r("p"),ww=o("The "),Rc=r("code"),Tw=o("FlaxDistilBertPreTrainedModel"),$w=o(" forward method, overrides the "),Uc=r("code"),yw=o("__call__"),Dw=o(" special method."),Fw=h(),w(xn.$$.fragment),Bw=h(),w(Mn.$$.fragment),Dh=h(),ls=r("h2"),jn=r("a"),Kc=r("span"),w($i.$$.fragment),Ew=h(),Hc=r("span"),xw=o("FlaxDistilBertForQuestionAnswering"),Fh=h(),nt=r("div"),w(yi.$$.fragment),Mw=h(),ds=r("p"),jw=o(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=r("code"),zw=o("span start logits"),Cw=o(" and "),Jc=r("code"),Pw=o("span end logits"),qw=o(")."),Aw=h(),Di=r("p"),Ow=o("This model inherits from "),Fl=r("a"),Nw=o("FlaxPreTrainedModel"),Iw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lw=h(),Fi=r("p"),Sw=o("This model is also a Flax Linen "),Bi=r("a"),Ww=o("flax.linen.Module"),Qw=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rw=h(),Gc=r("p"),Uw=o("Finally, this model supports inherent JAX features such as:"),Kw=h(),oo=r("ul"),Xc=r("li"),Ei=r("a"),Hw=o("Just-In-Time (JIT) compilation"),Vw=h(),Yc=r("li"),xi=r("a"),Jw=o("Automatic Differentiation"),Gw=h(),Zc=r("li"),Mi=r("a"),Xw=o("Vectorization"),Yw=h(),ep=r("li"),ji=r("a"),Zw=o("Parallelization"),eT=h(),Qt=r("div"),w(zi.$$.fragment),tT=h(),cs=r("p"),oT=o("The "),tp=r("code"),sT=o("FlaxDistilBertPreTrainedModel"),nT=o(" forward method, overrides the "),op=r("code"),rT=o("__call__"),aT=o(" special method."),iT=h(),w(zn.$$.fragment),lT=h(),w(Cn.$$.fragment),this.h()},l(n){const v=oD('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(t),g=u(n),c=a(n,"H1",{class:!0});var Ci=i(c);f=a(Ci,"A",{id:!0,class:!0,href:!0});var sp=i(f);b=a(sp,"SPAN",{});var np=i(b);T(l.$$.fragment,np),np.forEach(t),sp.forEach(t),p=u(Ci),M=a(Ci,"SPAN",{});var rp=i(M);we=s(rp,"DistilBERT"),rp.forEach(t),Ci.forEach(t),ge=u(n),I=a(n,"H2",{class:!0});var Pi=i(I);re=a(Pi,"A",{id:!0,class:!0,href:!0});var ap=i(re);oe=a(ap,"SPAN",{});var ip=i(oe);T(B.$$.fragment,ip),ip.forEach(t),ap.forEach(t),Te=u(Pi),U=a(Pi,"SPAN",{});var lp=i(U);$e=s(lp,"Overview"),lp.forEach(t),Pi.forEach(t),_e=u(n),O=a(n,"P",{});var so=i(O);ye=s(so,"The DistilBERT model was proposed in the blog post "),ae=a(so,"A",{href:!0,rel:!0});var dp=i(ae);H=s(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),De=s(so,", and the paper "),ie=a(so,"A",{href:!0,rel:!0});var cp=i(ie);V=s(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),Fe=s(so,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),de=a(so,"EM",{});var pp=i(de);J=s(pp,"bert-base-uncased"),pp.forEach(t),Be=s(so,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),so.forEach(t),ve=u(n),te=a(n,"P",{});var hp=i(te);z=s(hp,"The abstract from the paper is the following:"),hp.forEach(t),q=u(n),le=a(n,"P",{});var up=i(le);K=a(up,"EM",{});var fp=i(K);Ee=s(fp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),fp.forEach(t),up.forEach(t),be=u(n),R=a(n,"P",{});var mp=i(R);xe=s(mp,"Tips:"),mp.forEach(t),ke=u(n),C=a(n,"UL",{});var qi=i(C);se=a(qi,"LI",{});var no=i(se);G=s(no,"DistilBERT doesn\u2019t have "),ce=a(no,"CODE",{});var gp=i(ce);Me=s(gp,"token_type_ids"),gp.forEach(t),X=s(no,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),pe=a(no,"CODE",{});var _p=i(pe);je=s(_p,"tokenizer.sep_token"),_p.forEach(t),L=s(no," (or "),he=a(no,"CODE",{});var vp=i(he);Y=s(vp,"[SEP]"),vp.forEach(t),ze=s(no,")."),no.forEach(t),ne=u(qi),P=a(qi,"LI",{});var Ai=i(P);Ce=s(Ai,"DistilBERT doesn\u2019t have options to select the input positions ("),A=a(Ai,"CODE",{});var bp=i(A);Pe=s(bp,"position_ids"),bp.forEach(t),qe=s(Ai,` input). This could be added if
necessary though, just let us know if you need this option.`),Ai.forEach(t),qi.forEach(t),k=u(n),x=a(n,"P",{});var ro=i(x);Ue=s(ro,"This model was contributed by "),ee=a(ro,"A",{href:!0,rel:!0});var kp=i(ee);Ke=s(kp,"victorsanh"),kp.forEach(t),He=s(ro,`. This model jax version was
contributed by `),j=a(ro,"A",{href:!0,rel:!0});var wp=i(j);Ve=s(wp,"kamalkraj"),wp.forEach(t),Je=s(ro,". The original code can be found "),Ne=a(ro,"A",{href:!0,rel:!0});var Tp=i(Ne);Ge=s(Tp,"here"),Tp.forEach(t),Xe=s(ro,"."),ro.forEach(t),N=u(n),S=a(n,"H2",{class:!0});var Oi=i(S);Oe=a(Oi,"A",{id:!0,class:!0,href:!0});var $p=i(Oe);Se=a($p,"SPAN",{});var yp=i(Se);T(W.$$.fragment,yp),yp.forEach(t),$p.forEach(t),Ye=u(Oi),We=a(Oi,"SPAN",{});var Dp=i(We);Ae=s(Dp,"DistilBertConfig"),Dp.forEach(t),Oi.forEach(t),Re=u(n),Q=a(n,"DIV",{class:!0});var ao=i(Q);T(Ie.$$.fragment,ao),Cu=u(ao),Gt=a(ao,"P",{});var io=i(Gt);Pu=s(io,"This is the configuration class to store the configuration of a "),Si=a(io,"A",{href:!0});var Fp=i(Si);qu=s(Fp,"DistilBertModel"),Fp.forEach(t),Au=s(io," or a "),Wi=a(io,"A",{href:!0});var Bp=i(Wi);Ou=s(Bp,"TFDistilBertModel"),Bp.forEach(t),Nu=s(io,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),Yn=a(io,"A",{href:!0,rel:!0});var Ep=i(Yn);Iu=s(Ep,"distilbert-base-uncased"),Ep.forEach(t),Lu=s(io," architecture."),io.forEach(t),Su=u(ao),$o=a(ao,"P",{});var ps=i($o);Wu=s(ps,"Configuration objects inherit from "),Qi=a(ps,"A",{href:!0});var xp=i(Qi);Qu=s(xp,"PretrainedConfig"),xp.forEach(t),Ru=s(ps,` and can be used to control the model outputs. Read the
documentation from `),Ri=a(ps,"A",{href:!0});var Mp=i(Ri);Uu=s(Mp,"PretrainedConfig"),Mp.forEach(t),Ku=s(ps," for more information."),ps.forEach(t),Hu=u(ao),T(hs.$$.fragment,ao),ao.forEach(t),Sp=u(n),yo=a(n,"H2",{class:!0});var Ni=i(yo);us=a(Ni,"A",{id:!0,class:!0,href:!0});var jp=i(us);Vl=a(jp,"SPAN",{});var zp=i(Vl);T(Zn.$$.fragment,zp),zp.forEach(t),jp.forEach(t),Vu=u(Ni),Jl=a(Ni,"SPAN",{});var Cp=i(Jl);Ju=s(Cp,"DistilBertTokenizer"),Cp.forEach(t),Ni.forEach(t),Wp=u(n),zt=a(n,"DIV",{class:!0});var lo=i(zt);T(er.$$.fragment,lo),Gu=u(lo),Gl=a(lo,"P",{});var Pp=i(Gl);Xu=s(Pp,"Construct a DistilBERT tokenizer."),Pp.forEach(t),Yu=u(lo),fs=a(lo,"P",{});var Pn=i(fs);Ui=a(Pn,"A",{href:!0});var qp=i(Ui);Zu=s(qp,"DistilBertTokenizer"),qp.forEach(t),ef=s(Pn," is identical to "),Ki=a(Pn,"A",{href:!0});var Ap=i(Ki);tf=s(Ap,"BertTokenizer"),Ap.forEach(t),of=s(Pn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Pn.forEach(t),sf=u(lo),tr=a(lo,"P",{});var Ii=i(tr);nf=s(Ii,"Refer to superclass "),Hi=a(Ii,"A",{href:!0});var Op=i(Hi);rf=s(Op,"BertTokenizer"),Op.forEach(t),af=s(Ii," for usage examples and documentation concerning parameters."),Ii.forEach(t),lo.forEach(t),Qp=u(n),Do=a(n,"H2",{class:!0});var Li=i(Do);ms=a(Li,"A",{id:!0,class:!0,href:!0});var Np=i(ms);Xl=a(Np,"SPAN",{});var Ip=i(Xl);T(or.$$.fragment,Ip),Ip.forEach(t),Np.forEach(t),lf=u(Li),Yl=a(Li,"SPAN",{});var dT=i(Yl);df=s(dT,"DistilBertTokenizerFast"),dT.forEach(t),Li.forEach(t),Rp=u(n),Ct=a(n,"DIV",{class:!0});var qn=i(Ct);T(sr.$$.fragment,qn),cf=u(qn),nr=a(qn,"P",{});var Eh=i(nr);pf=s(Eh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Zl=a(Eh,"EM",{});var cT=i(Zl);hf=s(cT,"tokenizers"),cT.forEach(t),uf=s(Eh," library)."),Eh.forEach(t),ff=u(qn),gs=a(qn,"P",{});var Lp=i(gs);Vi=a(Lp,"A",{href:!0});var pT=i(Vi);mf=s(pT,"DistilBertTokenizerFast"),pT.forEach(t),gf=s(Lp," is identical to "),Ji=a(Lp,"A",{href:!0});var hT=i(Ji);_f=s(hT,"BertTokenizerFast"),hT.forEach(t),vf=s(Lp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Lp.forEach(t),bf=u(qn),rr=a(qn,"P",{});var xh=i(rr);kf=s(xh,"Refer to superclass "),Gi=a(xh,"A",{href:!0});var uT=i(Gi);wf=s(uT,"BertTokenizerFast"),uT.forEach(t),Tf=s(xh," for usage examples and documentation concerning parameters."),xh.forEach(t),qn.forEach(t),Up=u(n),Fo=a(n,"H2",{class:!0});var Mh=i(Fo);_s=a(Mh,"A",{id:!0,class:!0,href:!0});var fT=i(_s);ed=a(fT,"SPAN",{});var mT=i(ed);T(ar.$$.fragment,mT),mT.forEach(t),fT.forEach(t),$f=u(Mh),td=a(Mh,"SPAN",{});var gT=i(td);yf=s(gT,"DistilBertModel"),gT.forEach(t),Mh.forEach(t),Kp=u(n),ht=a(n,"DIV",{class:!0});var co=i(ht);T(ir.$$.fragment,co),Df=u(co),od=a(co,"P",{});var _T=i(od);Ff=s(_T,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_T.forEach(t),Bf=u(co),lr=a(co,"P",{});var jh=i(lr);Ef=s(jh,"This model inherits from "),Xi=a(jh,"A",{href:!0});var vT=i(Xi);xf=s(vT,"PreTrainedModel"),vT.forEach(t),Mf=s(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),jf=u(co),dr=a(co,"P",{});var zh=i(dr);zf=s(zh,"This model is also a PyTorch "),cr=a(zh,"A",{href:!0,rel:!0});var bT=i(cr);Cf=s(bT,"torch.nn.Module"),bT.forEach(t),Pf=s(zh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zh.forEach(t),qf=u(co),Pt=a(co,"DIV",{class:!0});var An=i(Pt);T(pr.$$.fragment,An),Af=u(An),Bo=a(An,"P",{});var Bl=i(Bo);Of=s(Bl,"The "),Yi=a(Bl,"A",{href:!0});var kT=i(Yi);Nf=s(kT,"DistilBertModel"),kT.forEach(t),If=s(Bl," forward method, overrides the "),sd=a(Bl,"CODE",{});var wT=i(sd);Lf=s(wT,"__call__"),wT.forEach(t),Sf=s(Bl," special method."),Bl.forEach(t),Wf=u(An),T(vs.$$.fragment,An),Qf=u(An),T(bs.$$.fragment,An),An.forEach(t),co.forEach(t),Hp=u(n),Eo=a(n,"H2",{class:!0});var Ch=i(Eo);ks=a(Ch,"A",{id:!0,class:!0,href:!0});var TT=i(ks);nd=a(TT,"SPAN",{});var $T=i(nd);T(hr.$$.fragment,$T),$T.forEach(t),TT.forEach(t),Rf=u(Ch),rd=a(Ch,"SPAN",{});var yT=i(rd);Uf=s(yT,"DistilBertForMaskedLM"),yT.forEach(t),Ch.forEach(t),Vp=u(n),ut=a(n,"DIV",{class:!0});var po=i(ut);T(ur.$$.fragment,po),Kf=u(po),fr=a(po,"P",{});var Ph=i(fr);Hf=s(Ph,"DistilBert Model with a "),ad=a(Ph,"CODE",{});var DT=i(ad);Vf=s(DT,"masked language modeling"),DT.forEach(t),Jf=s(Ph," head on top."),Ph.forEach(t),Gf=u(po),mr=a(po,"P",{});var qh=i(mr);Xf=s(qh,"This model inherits from "),Zi=a(qh,"A",{href:!0});var FT=i(Zi);Yf=s(FT,"PreTrainedModel"),FT.forEach(t),Zf=s(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),em=u(po),gr=a(po,"P",{});var Ah=i(gr);tm=s(Ah,"This model is also a PyTorch "),_r=a(Ah,"A",{href:!0,rel:!0});var BT=i(_r);om=s(BT,"torch.nn.Module"),BT.forEach(t),sm=s(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),nm=u(po),vt=a(po,"DIV",{class:!0});var ho=i(vt);T(vr.$$.fragment,ho),rm=u(ho),xo=a(ho,"P",{});var El=i(xo);am=s(El,"The "),el=a(El,"A",{href:!0});var ET=i(el);im=s(ET,"DistilBertForMaskedLM"),ET.forEach(t),lm=s(El," forward method, overrides the "),id=a(El,"CODE",{});var xT=i(id);dm=s(xT,"__call__"),xT.forEach(t),cm=s(El," special method."),El.forEach(t),pm=u(ho),T(ws.$$.fragment,ho),hm=u(ho),T(Ts.$$.fragment,ho),um=u(ho),T($s.$$.fragment,ho),ho.forEach(t),po.forEach(t),Jp=u(n),Mo=a(n,"H2",{class:!0});var Oh=i(Mo);ys=a(Oh,"A",{id:!0,class:!0,href:!0});var MT=i(ys);ld=a(MT,"SPAN",{});var jT=i(ld);T(br.$$.fragment,jT),jT.forEach(t),MT.forEach(t),fm=u(Oh),dd=a(Oh,"SPAN",{});var zT=i(dd);mm=s(zT,"DistilBertForSequenceClassification"),zT.forEach(t),Oh.forEach(t),Gp=u(n),ft=a(n,"DIV",{class:!0});var uo=i(ft);T(kr.$$.fragment,uo),gm=u(uo),cd=a(uo,"P",{});var CT=i(cd);_m=s(CT,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),CT.forEach(t),vm=u(uo),wr=a(uo,"P",{});var Nh=i(wr);bm=s(Nh,"This model inherits from "),tl=a(Nh,"A",{href:!0});var PT=i(tl);km=s(PT,"PreTrainedModel"),PT.forEach(t),wm=s(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),Tm=u(uo),Tr=a(uo,"P",{});var Ih=i(Tr);$m=s(Ih,"This model is also a PyTorch "),$r=a(Ih,"A",{href:!0,rel:!0});var qT=i($r);ym=s(qT,"torch.nn.Module"),qT.forEach(t),Dm=s(Ih,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ih.forEach(t),Fm=u(uo),rt=a(uo,"DIV",{class:!0});var Dt=i(rt);T(yr.$$.fragment,Dt),Bm=u(Dt),jo=a(Dt,"P",{});var xl=i(jo);Em=s(xl,"The "),ol=a(xl,"A",{href:!0});var AT=i(ol);xm=s(AT,"DistilBertForSequenceClassification"),AT.forEach(t),Mm=s(xl," forward method, overrides the "),pd=a(xl,"CODE",{});var OT=i(pd);jm=s(OT,"__call__"),OT.forEach(t),zm=s(xl," special method."),xl.forEach(t),Cm=u(Dt),T(Ds.$$.fragment,Dt),Pm=u(Dt),T(Fs.$$.fragment,Dt),qm=u(Dt),T(Bs.$$.fragment,Dt),Am=u(Dt),T(Es.$$.fragment,Dt),Om=u(Dt),T(xs.$$.fragment,Dt),Dt.forEach(t),uo.forEach(t),Xp=u(n),zo=a(n,"H2",{class:!0});var Lh=i(zo);Ms=a(Lh,"A",{id:!0,class:!0,href:!0});var NT=i(Ms);hd=a(NT,"SPAN",{});var IT=i(hd);T(Dr.$$.fragment,IT),IT.forEach(t),NT.forEach(t),Nm=u(Lh),ud=a(Lh,"SPAN",{});var LT=i(ud);Im=s(LT,"DistilBertForMultipleChoice"),LT.forEach(t),Lh.forEach(t),Yp=u(n),mt=a(n,"DIV",{class:!0});var fo=i(mt);T(Fr.$$.fragment,fo),Lm=u(fo),fd=a(fo,"P",{});var ST=i(fd);Sm=s(ST,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),ST.forEach(t),Wm=u(fo),Br=a(fo,"P",{});var Sh=i(Br);Qm=s(Sh,"This model inherits from "),sl=a(Sh,"A",{href:!0});var WT=i(sl);Rm=s(WT,"PreTrainedModel"),WT.forEach(t),Um=s(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),Km=u(fo),Er=a(fo,"P",{});var Wh=i(Er);Hm=s(Wh,"This model is also a PyTorch "),xr=a(Wh,"A",{href:!0,rel:!0});var QT=i(xr);Vm=s(QT,"torch.nn.Module"),QT.forEach(t),Jm=s(Wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wh.forEach(t),Gm=u(fo),qt=a(fo,"DIV",{class:!0});var On=i(qt);T(Mr.$$.fragment,On),Xm=u(On),Co=a(On,"P",{});var Ml=i(Co);Ym=s(Ml,"The "),nl=a(Ml,"A",{href:!0});var RT=i(nl);Zm=s(RT,"DistilBertForMultipleChoice"),RT.forEach(t),eg=s(Ml," forward method, overrides the "),md=a(Ml,"CODE",{});var UT=i(md);tg=s(UT,"__call__"),UT.forEach(t),og=s(Ml," special method."),Ml.forEach(t),sg=u(On),T(js.$$.fragment,On),ng=u(On),T(zs.$$.fragment,On),On.forEach(t),fo.forEach(t),Zp=u(n),Po=a(n,"H2",{class:!0});var Qh=i(Po);Cs=a(Qh,"A",{id:!0,class:!0,href:!0});var KT=i(Cs);gd=a(KT,"SPAN",{});var HT=i(gd);T(jr.$$.fragment,HT),HT.forEach(t),KT.forEach(t),rg=u(Qh),_d=a(Qh,"SPAN",{});var VT=i(_d);ag=s(VT,"DistilBertForTokenClassification"),VT.forEach(t),Qh.forEach(t),eh=u(n),gt=a(n,"DIV",{class:!0});var mo=i(gt);T(zr.$$.fragment,mo),ig=u(mo),vd=a(mo,"P",{});var JT=i(vd);lg=s(JT,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),JT.forEach(t),dg=u(mo),Cr=a(mo,"P",{});var Rh=i(Cr);cg=s(Rh,"This model inherits from "),rl=a(Rh,"A",{href:!0});var GT=i(rl);pg=s(GT,"PreTrainedModel"),GT.forEach(t),hg=s(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),ug=u(mo),Pr=a(mo,"P",{});var Uh=i(Pr);fg=s(Uh,"This model is also a PyTorch "),qr=a(Uh,"A",{href:!0,rel:!0});var XT=i(qr);mg=s(XT,"torch.nn.Module"),XT.forEach(t),gg=s(Uh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uh.forEach(t),_g=u(mo),bt=a(mo,"DIV",{class:!0});var go=i(bt);T(Ar.$$.fragment,go),vg=u(go),qo=a(go,"P",{});var jl=i(qo);bg=s(jl,"The "),al=a(jl,"A",{href:!0});var YT=i(al);kg=s(YT,"DistilBertForTokenClassification"),YT.forEach(t),wg=s(jl," forward method, overrides the "),bd=a(jl,"CODE",{});var ZT=i(bd);Tg=s(ZT,"__call__"),ZT.forEach(t),$g=s(jl," special method."),jl.forEach(t),yg=u(go),T(Ps.$$.fragment,go),Dg=u(go),T(qs.$$.fragment,go),Fg=u(go),T(As.$$.fragment,go),go.forEach(t),mo.forEach(t),th=u(n),Ao=a(n,"H2",{class:!0});var Kh=i(Ao);Os=a(Kh,"A",{id:!0,class:!0,href:!0});var e$=i(Os);kd=a(e$,"SPAN",{});var t$=i(kd);T(Or.$$.fragment,t$),t$.forEach(t),e$.forEach(t),Bg=u(Kh),wd=a(Kh,"SPAN",{});var o$=i(wd);Eg=s(o$,"DistilBertForQuestionAnswering"),o$.forEach(t),Kh.forEach(t),oh=u(n),_t=a(n,"DIV",{class:!0});var _o=i(_t);T(Nr.$$.fragment,_o),xg=u(_o),Oo=a(_o,"P",{});var zl=i(Oo);Mg=s(zl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Td=a(zl,"CODE",{});var s$=i(Td);jg=s(s$,"span start logits"),s$.forEach(t),zg=s(zl," and "),$d=a(zl,"CODE",{});var n$=i($d);Cg=s(n$,"span end logits"),n$.forEach(t),Pg=s(zl,")."),zl.forEach(t),qg=u(_o),Ir=a(_o,"P",{});var Hh=i(Ir);Ag=s(Hh,"This model inherits from "),il=a(Hh,"A",{href:!0});var r$=i(il);Og=s(r$,"PreTrainedModel"),r$.forEach(t),Ng=s(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh.forEach(t),Ig=u(_o),Lr=a(_o,"P",{});var Vh=i(Lr);Lg=s(Vh,"This model is also a PyTorch "),Sr=a(Vh,"A",{href:!0,rel:!0});var a$=i(Sr);Sg=s(a$,"torch.nn.Module"),a$.forEach(t),Wg=s(Vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vh.forEach(t),Qg=u(_o),kt=a(_o,"DIV",{class:!0});var vo=i(kt);T(Wr.$$.fragment,vo),Rg=u(vo),No=a(vo,"P",{});var Cl=i(No);Ug=s(Cl,"The "),ll=a(Cl,"A",{href:!0});var i$=i(ll);Kg=s(i$,"DistilBertForQuestionAnswering"),i$.forEach(t),Hg=s(Cl," forward method, overrides the "),yd=a(Cl,"CODE",{});var l$=i(yd);Vg=s(l$,"__call__"),l$.forEach(t),Jg=s(Cl," special method."),Cl.forEach(t),Gg=u(vo),T(Ns.$$.fragment,vo),Xg=u(vo),T(Is.$$.fragment,vo),Yg=u(vo),T(Ls.$$.fragment,vo),vo.forEach(t),_o.forEach(t),sh=u(n),Io=a(n,"H2",{class:!0});var Jh=i(Io);Ss=a(Jh,"A",{id:!0,class:!0,href:!0});var d$=i(Ss);Dd=a(d$,"SPAN",{});var c$=i(Dd);T(Qr.$$.fragment,c$),c$.forEach(t),d$.forEach(t),Zg=u(Jh),Fd=a(Jh,"SPAN",{});var p$=i(Fd);e_=s(p$,"TFDistilBertModel"),p$.forEach(t),Jh.forEach(t),nh=u(n),at=a(n,"DIV",{class:!0});var Rt=i(at);T(Rr.$$.fragment,Rt),t_=u(Rt),Bd=a(Rt,"P",{});var h$=i(Bd);o_=s(h$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),h$.forEach(t),s_=u(Rt),Ur=a(Rt,"P",{});var Gh=i(Ur);n_=s(Gh,"This model inherits from "),dl=a(Gh,"A",{href:!0});var u$=i(dl);r_=s(u$,"TFPreTrainedModel"),u$.forEach(t),a_=s(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),i_=u(Rt),Kr=a(Rt,"P",{});var Xh=i(Kr);l_=s(Xh,"This model is also a "),Hr=a(Xh,"A",{href:!0,rel:!0});var f$=i(Hr);d_=s(f$,"tf.keras.Model"),f$.forEach(t),c_=s(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),p_=u(Rt),T(Ws.$$.fragment,Rt),h_=u(Rt),At=a(Rt,"DIV",{class:!0});var Nn=i(At);T(Vr.$$.fragment,Nn),u_=u(Nn),Lo=a(Nn,"P",{});var Pl=i(Lo);f_=s(Pl,"The "),cl=a(Pl,"A",{href:!0});var m$=i(cl);m_=s(m$,"TFDistilBertModel"),m$.forEach(t),g_=s(Pl," forward method, overrides the "),Ed=a(Pl,"CODE",{});var g$=i(Ed);__=s(g$,"__call__"),g$.forEach(t),v_=s(Pl," special method."),Pl.forEach(t),b_=u(Nn),T(Qs.$$.fragment,Nn),k_=u(Nn),T(Rs.$$.fragment,Nn),Nn.forEach(t),Rt.forEach(t),rh=u(n),So=a(n,"H2",{class:!0});var Yh=i(So);Us=a(Yh,"A",{id:!0,class:!0,href:!0});var _$=i(Us);xd=a(_$,"SPAN",{});var v$=i(xd);T(Jr.$$.fragment,v$),v$.forEach(t),_$.forEach(t),w_=u(Yh),Md=a(Yh,"SPAN",{});var b$=i(Md);T_=s(b$,"TFDistilBertForMaskedLM"),b$.forEach(t),Yh.forEach(t),ah=u(n),it=a(n,"DIV",{class:!0});var Ut=i(it);T(Gr.$$.fragment,Ut),$_=u(Ut),Xr=a(Ut,"P",{});var Zh=i(Xr);y_=s(Zh,"DistilBert Model with a "),jd=a(Zh,"CODE",{});var k$=i(jd);D_=s(k$,"masked language modeling"),k$.forEach(t),F_=s(Zh," head on top."),Zh.forEach(t),B_=u(Ut),Yr=a(Ut,"P",{});var eu=i(Yr);E_=s(eu,"This model inherits from "),pl=a(eu,"A",{href:!0});var w$=i(pl);x_=s(w$,"TFPreTrainedModel"),w$.forEach(t),M_=s(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),j_=u(Ut),Zr=a(Ut,"P",{});var tu=i(Zr);z_=s(tu,"This model is also a "),ea=a(tu,"A",{href:!0,rel:!0});var T$=i(ea);C_=s(T$,"tf.keras.Model"),T$.forEach(t),P_=s(tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tu.forEach(t),q_=u(Ut),T(Ks.$$.fragment,Ut),A_=u(Ut),wt=a(Ut,"DIV",{class:!0});var bo=i(wt);T(ta.$$.fragment,bo),O_=u(bo),Wo=a(bo,"P",{});var ql=i(Wo);N_=s(ql,"The "),hl=a(ql,"A",{href:!0});var $$=i(hl);I_=s($$,"TFDistilBertForMaskedLM"),$$.forEach(t),L_=s(ql," forward method, overrides the "),zd=a(ql,"CODE",{});var y$=i(zd);S_=s(y$,"__call__"),y$.forEach(t),W_=s(ql," special method."),ql.forEach(t),Q_=u(bo),T(Hs.$$.fragment,bo),R_=u(bo),T(Vs.$$.fragment,bo),U_=u(bo),T(Js.$$.fragment,bo),bo.forEach(t),Ut.forEach(t),ih=u(n),Qo=a(n,"H2",{class:!0});var ou=i(Qo);Gs=a(ou,"A",{id:!0,class:!0,href:!0});var D$=i(Gs);Cd=a(D$,"SPAN",{});var F$=i(Cd);T(oa.$$.fragment,F$),F$.forEach(t),D$.forEach(t),K_=u(ou),Pd=a(ou,"SPAN",{});var B$=i(Pd);H_=s(B$,"TFDistilBertForSequenceClassification"),B$.forEach(t),ou.forEach(t),lh=u(n),lt=a(n,"DIV",{class:!0});var Kt=i(lt);T(sa.$$.fragment,Kt),V_=u(Kt),qd=a(Kt,"P",{});var E$=i(qd);J_=s(E$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),E$.forEach(t),G_=u(Kt),na=a(Kt,"P",{});var su=i(na);X_=s(su,"This model inherits from "),ul=a(su,"A",{href:!0});var x$=i(ul);Y_=s(x$,"TFPreTrainedModel"),x$.forEach(t),Z_=s(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(t),ev=u(Kt),ra=a(Kt,"P",{});var nu=i(ra);tv=s(nu,"This model is also a "),aa=a(nu,"A",{href:!0,rel:!0});var M$=i(aa);ov=s(M$,"tf.keras.Model"),M$.forEach(t),sv=s(nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nu.forEach(t),nv=u(Kt),T(Xs.$$.fragment,Kt),rv=u(Kt),Tt=a(Kt,"DIV",{class:!0});var ko=i(Tt);T(ia.$$.fragment,ko),av=u(ko),Ro=a(ko,"P",{});var Al=i(Ro);iv=s(Al,"The "),fl=a(Al,"A",{href:!0});var j$=i(fl);lv=s(j$,"TFDistilBertForSequenceClassification"),j$.forEach(t),dv=s(Al," forward method, overrides the "),Ad=a(Al,"CODE",{});var z$=i(Ad);cv=s(z$,"__call__"),z$.forEach(t),pv=s(Al," special method."),Al.forEach(t),hv=u(ko),T(Ys.$$.fragment,ko),uv=u(ko),T(Zs.$$.fragment,ko),fv=u(ko),T(en.$$.fragment,ko),ko.forEach(t),Kt.forEach(t),dh=u(n),Uo=a(n,"H2",{class:!0});var ru=i(Uo);tn=a(ru,"A",{id:!0,class:!0,href:!0});var C$=i(tn);Od=a(C$,"SPAN",{});var P$=i(Od);T(la.$$.fragment,P$),P$.forEach(t),C$.forEach(t),mv=u(ru),Nd=a(ru,"SPAN",{});var q$=i(Nd);gv=s(q$,"TFDistilBertForMultipleChoice"),q$.forEach(t),ru.forEach(t),ch=u(n),dt=a(n,"DIV",{class:!0});var Ht=i(dt);T(da.$$.fragment,Ht),_v=u(Ht),Id=a(Ht,"P",{});var A$=i(Id);vv=s(A$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),A$.forEach(t),bv=u(Ht),ca=a(Ht,"P",{});var au=i(ca);kv=s(au,"This model inherits from "),ml=a(au,"A",{href:!0});var O$=i(ml);wv=s(O$,"TFPreTrainedModel"),O$.forEach(t),Tv=s(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),$v=u(Ht),pa=a(Ht,"P",{});var iu=i(pa);yv=s(iu,"This model is also a "),ha=a(iu,"A",{href:!0,rel:!0});var N$=i(ha);Dv=s(N$,"tf.keras.Model"),N$.forEach(t),Fv=s(iu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iu.forEach(t),Bv=u(Ht),T(on.$$.fragment,Ht),Ev=u(Ht),Ot=a(Ht,"DIV",{class:!0});var In=i(Ot);T(ua.$$.fragment,In),xv=u(In),Ko=a(In,"P",{});var Ol=i(Ko);Mv=s(Ol,"The "),gl=a(Ol,"A",{href:!0});var I$=i(gl);jv=s(I$,"TFDistilBertForMultipleChoice"),I$.forEach(t),zv=s(Ol," forward method, overrides the "),Ld=a(Ol,"CODE",{});var L$=i(Ld);Cv=s(L$,"__call__"),L$.forEach(t),Pv=s(Ol," special method."),Ol.forEach(t),qv=u(In),T(sn.$$.fragment,In),Av=u(In),T(nn.$$.fragment,In),In.forEach(t),Ht.forEach(t),ph=u(n),Ho=a(n,"H2",{class:!0});var lu=i(Ho);rn=a(lu,"A",{id:!0,class:!0,href:!0});var S$=i(rn);Sd=a(S$,"SPAN",{});var W$=i(Sd);T(fa.$$.fragment,W$),W$.forEach(t),S$.forEach(t),Ov=u(lu),Wd=a(lu,"SPAN",{});var Q$=i(Wd);Nv=s(Q$,"TFDistilBertForTokenClassification"),Q$.forEach(t),lu.forEach(t),hh=u(n),ct=a(n,"DIV",{class:!0});var Vt=i(ct);T(ma.$$.fragment,Vt),Iv=u(Vt),Qd=a(Vt,"P",{});var R$=i(Qd);Lv=s(R$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),R$.forEach(t),Sv=u(Vt),ga=a(Vt,"P",{});var du=i(ga);Wv=s(du,"This model inherits from "),_l=a(du,"A",{href:!0});var U$=i(_l);Qv=s(U$,"TFPreTrainedModel"),U$.forEach(t),Rv=s(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),Uv=u(Vt),_a=a(Vt,"P",{});var cu=i(_a);Kv=s(cu,"This model is also a "),va=a(cu,"A",{href:!0,rel:!0});var K$=i(va);Hv=s(K$,"tf.keras.Model"),K$.forEach(t),Vv=s(cu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cu.forEach(t),Jv=u(Vt),T(an.$$.fragment,Vt),Gv=u(Vt),$t=a(Vt,"DIV",{class:!0});var wo=i($t);T(ba.$$.fragment,wo),Xv=u(wo),Vo=a(wo,"P",{});var Nl=i(Vo);Yv=s(Nl,"The "),vl=a(Nl,"A",{href:!0});var H$=i(vl);Zv=s(H$,"TFDistilBertForTokenClassification"),H$.forEach(t),eb=s(Nl," forward method, overrides the "),Rd=a(Nl,"CODE",{});var V$=i(Rd);tb=s(V$,"__call__"),V$.forEach(t),ob=s(Nl," special method."),Nl.forEach(t),sb=u(wo),T(ln.$$.fragment,wo),nb=u(wo),T(dn.$$.fragment,wo),rb=u(wo),T(cn.$$.fragment,wo),wo.forEach(t),Vt.forEach(t),uh=u(n),Jo=a(n,"H2",{class:!0});var pu=i(Jo);pn=a(pu,"A",{id:!0,class:!0,href:!0});var J$=i(pn);Ud=a(J$,"SPAN",{});var G$=i(Ud);T(ka.$$.fragment,G$),G$.forEach(t),J$.forEach(t),ab=u(pu),Kd=a(pu,"SPAN",{});var X$=i(Kd);ib=s(X$,"TFDistilBertForQuestionAnswering"),X$.forEach(t),pu.forEach(t),fh=u(n),pt=a(n,"DIV",{class:!0});var Jt=i(pt);T(wa.$$.fragment,Jt),lb=u(Jt),Go=a(Jt,"P",{});var Il=i(Go);db=s(Il,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Hd=a(Il,"CODE",{});var Y$=i(Hd);cb=s(Y$,"span start logits"),Y$.forEach(t),pb=s(Il," and "),Vd=a(Il,"CODE",{});var Z$=i(Vd);hb=s(Z$,"span end logits"),Z$.forEach(t),ub=s(Il,")."),Il.forEach(t),fb=u(Jt),Ta=a(Jt,"P",{});var hu=i(Ta);mb=s(hu,"This model inherits from "),bl=a(hu,"A",{href:!0});var ey=i(bl);gb=s(ey,"TFPreTrainedModel"),ey.forEach(t),_b=s(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu.forEach(t),vb=u(Jt),$a=a(Jt,"P",{});var uu=i($a);bb=s(uu,"This model is also a "),ya=a(uu,"A",{href:!0,rel:!0});var ty=i(ya);kb=s(ty,"tf.keras.Model"),ty.forEach(t),wb=s(uu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uu.forEach(t),Tb=u(Jt),T(hn.$$.fragment,Jt),$b=u(Jt),yt=a(Jt,"DIV",{class:!0});var To=i(yt);T(Da.$$.fragment,To),yb=u(To),Xo=a(To,"P",{});var Ll=i(Xo);Db=s(Ll,"The "),kl=a(Ll,"A",{href:!0});var oy=i(kl);Fb=s(oy,"TFDistilBertForQuestionAnswering"),oy.forEach(t),Bb=s(Ll," forward method, overrides the "),Jd=a(Ll,"CODE",{});var sy=i(Jd);Eb=s(sy,"__call__"),sy.forEach(t),xb=s(Ll," special method."),Ll.forEach(t),Mb=u(To),T(un.$$.fragment,To),jb=u(To),T(fn.$$.fragment,To),zb=u(To),T(mn.$$.fragment,To),To.forEach(t),Jt.forEach(t),mh=u(n),Yo=a(n,"H2",{class:!0});var fu=i(Yo);gn=a(fu,"A",{id:!0,class:!0,href:!0});var ny=i(gn);Gd=a(ny,"SPAN",{});var ry=i(Gd);T(Fa.$$.fragment,ry),ry.forEach(t),ny.forEach(t),Cb=u(fu),Xd=a(fu,"SPAN",{});var ay=i(Xd);Pb=s(ay,"FlaxDistilBertModel"),ay.forEach(t),fu.forEach(t),gh=u(n),Ze=a(n,"DIV",{class:!0});var Ft=i(Ze);T(Ba.$$.fragment,Ft),qb=u(Ft),Yd=a(Ft,"P",{});var iy=i(Yd);Ab=s(iy,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),iy.forEach(t),Ob=u(Ft),Ea=a(Ft,"P",{});var mu=i(Ea);Nb=s(mu,"This model inherits from "),wl=a(mu,"A",{href:!0});var ly=i(wl);Ib=s(ly,"FlaxPreTrainedModel"),ly.forEach(t),Lb=s(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mu.forEach(t),Sb=u(Ft),xa=a(Ft,"P",{});var gu=i(xa);Wb=s(gu,"This model is also a Flax Linen "),Ma=a(gu,"A",{href:!0,rel:!0});var dy=i(Ma);Qb=s(dy,"flax.linen.Module"),dy.forEach(t),Rb=s(gu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gu.forEach(t),Ub=u(Ft),Zd=a(Ft,"P",{});var cy=i(Zd);Kb=s(cy,"Finally, this model supports inherent JAX features such as:"),cy.forEach(t),Hb=u(Ft),Xt=a(Ft,"UL",{});var Ln=i(Xt);ec=a(Ln,"LI",{});var py=i(ec);ja=a(py,"A",{href:!0,rel:!0});var hy=i(ja);Vb=s(hy,"Just-In-Time (JIT) compilation"),hy.forEach(t),py.forEach(t),Jb=u(Ln),tc=a(Ln,"LI",{});var uy=i(tc);za=a(uy,"A",{href:!0,rel:!0});var fy=i(za);Gb=s(fy,"Automatic Differentiation"),fy.forEach(t),uy.forEach(t),Xb=u(Ln),oc=a(Ln,"LI",{});var my=i(oc);Ca=a(my,"A",{href:!0,rel:!0});var gy=i(Ca);Yb=s(gy,"Vectorization"),gy.forEach(t),my.forEach(t),Zb=u(Ln),sc=a(Ln,"LI",{});var _y=i(sc);Pa=a(_y,"A",{href:!0,rel:!0});var vy=i(Pa);e2=s(vy,"Parallelization"),vy.forEach(t),_y.forEach(t),Ln.forEach(t),t2=u(Ft),Nt=a(Ft,"DIV",{class:!0});var Sn=i(Nt);T(qa.$$.fragment,Sn),o2=u(Sn),Zo=a(Sn,"P",{});var Sl=i(Zo);s2=s(Sl,"The "),nc=a(Sl,"CODE",{});var by=i(nc);n2=s(by,"FlaxDistilBertPreTrainedModel"),by.forEach(t),r2=s(Sl," forward method, overrides the "),rc=a(Sl,"CODE",{});var ky=i(rc);a2=s(ky,"__call__"),ky.forEach(t),i2=s(Sl," special method."),Sl.forEach(t),l2=u(Sn),T(_n.$$.fragment,Sn),d2=u(Sn),T(vn.$$.fragment,Sn),Sn.forEach(t),Ft.forEach(t),_h=u(n),es=a(n,"H2",{class:!0});var _u=i(es);bn=a(_u,"A",{id:!0,class:!0,href:!0});var wy=i(bn);ac=a(wy,"SPAN",{});var Ty=i(ac);T(Aa.$$.fragment,Ty),Ty.forEach(t),wy.forEach(t),c2=u(_u),ic=a(_u,"SPAN",{});var $y=i(ic);p2=s($y,"FlaxDistilBertForMaskedLM"),$y.forEach(t),_u.forEach(t),vh=u(n),et=a(n,"DIV",{class:!0});var Bt=i(et);T(Oa.$$.fragment,Bt),h2=u(Bt),Na=a(Bt,"P",{});var vu=i(Na);u2=s(vu,"DistilBert Model with a "),lc=a(vu,"CODE",{});var yy=i(lc);f2=s(yy,"language modeling"),yy.forEach(t),m2=s(vu," head on top."),vu.forEach(t),g2=u(Bt),Ia=a(Bt,"P",{});var bu=i(Ia);_2=s(bu,"This model inherits from "),Tl=a(bu,"A",{href:!0});var Dy=i(Tl);v2=s(Dy,"FlaxPreTrainedModel"),Dy.forEach(t),b2=s(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bu.forEach(t),k2=u(Bt),La=a(Bt,"P",{});var ku=i(La);w2=s(ku,"This model is also a Flax Linen "),Sa=a(ku,"A",{href:!0,rel:!0});var Fy=i(Sa);T2=s(Fy,"flax.linen.Module"),Fy.forEach(t),$2=s(ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ku.forEach(t),y2=u(Bt),dc=a(Bt,"P",{});var By=i(dc);D2=s(By,"Finally, this model supports inherent JAX features such as:"),By.forEach(t),F2=u(Bt),Yt=a(Bt,"UL",{});var Wn=i(Yt);cc=a(Wn,"LI",{});var Ey=i(cc);Wa=a(Ey,"A",{href:!0,rel:!0});var xy=i(Wa);B2=s(xy,"Just-In-Time (JIT) compilation"),xy.forEach(t),Ey.forEach(t),E2=u(Wn),pc=a(Wn,"LI",{});var My=i(pc);Qa=a(My,"A",{href:!0,rel:!0});var jy=i(Qa);x2=s(jy,"Automatic Differentiation"),jy.forEach(t),My.forEach(t),M2=u(Wn),hc=a(Wn,"LI",{});var zy=i(hc);Ra=a(zy,"A",{href:!0,rel:!0});var Cy=i(Ra);j2=s(Cy,"Vectorization"),Cy.forEach(t),zy.forEach(t),z2=u(Wn),uc=a(Wn,"LI",{});var Py=i(uc);Ua=a(Py,"A",{href:!0,rel:!0});var qy=i(Ua);C2=s(qy,"Parallelization"),qy.forEach(t),Py.forEach(t),Wn.forEach(t),P2=u(Bt),It=a(Bt,"DIV",{class:!0});var Qn=i(It);T(Ka.$$.fragment,Qn),q2=u(Qn),ts=a(Qn,"P",{});var Wl=i(ts);A2=s(Wl,"The "),fc=a(Wl,"CODE",{});var Ay=i(fc);O2=s(Ay,"FlaxDistilBertPreTrainedModel"),Ay.forEach(t),N2=s(Wl," forward method, overrides the "),mc=a(Wl,"CODE",{});var Oy=i(mc);I2=s(Oy,"__call__"),Oy.forEach(t),L2=s(Wl," special method."),Wl.forEach(t),S2=u(Qn),T(kn.$$.fragment,Qn),W2=u(Qn),T(wn.$$.fragment,Qn),Qn.forEach(t),Bt.forEach(t),bh=u(n),os=a(n,"H2",{class:!0});var wu=i(os);Tn=a(wu,"A",{id:!0,class:!0,href:!0});var Ny=i(Tn);gc=a(Ny,"SPAN",{});var Iy=i(gc);T(Ha.$$.fragment,Iy),Iy.forEach(t),Ny.forEach(t),Q2=u(wu),_c=a(wu,"SPAN",{});var Ly=i(_c);R2=s(Ly,"FlaxDistilBertForSequenceClassification"),Ly.forEach(t),wu.forEach(t),kh=u(n),tt=a(n,"DIV",{class:!0});var Et=i(tt);T(Va.$$.fragment,Et),U2=u(Et),vc=a(Et,"P",{});var Sy=i(vc);K2=s(Sy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Sy.forEach(t),H2=u(Et),Ja=a(Et,"P",{});var Tu=i(Ja);V2=s(Tu,"This model inherits from "),$l=a(Tu,"A",{href:!0});var Wy=i($l);J2=s(Wy,"FlaxPreTrainedModel"),Wy.forEach(t),G2=s(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tu.forEach(t),X2=u(Et),Ga=a(Et,"P",{});var $u=i(Ga);Y2=s($u,"This model is also a Flax Linen "),Xa=a($u,"A",{href:!0,rel:!0});var Qy=i(Xa);Z2=s(Qy,"flax.linen.Module"),Qy.forEach(t),ek=s($u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$u.forEach(t),tk=u(Et),bc=a(Et,"P",{});var Ry=i(bc);ok=s(Ry,"Finally, this model supports inherent JAX features such as:"),Ry.forEach(t),sk=u(Et),Zt=a(Et,"UL",{});var Rn=i(Zt);kc=a(Rn,"LI",{});var Uy=i(kc);Ya=a(Uy,"A",{href:!0,rel:!0});var Ky=i(Ya);nk=s(Ky,"Just-In-Time (JIT) compilation"),Ky.forEach(t),Uy.forEach(t),rk=u(Rn),wc=a(Rn,"LI",{});var Hy=i(wc);Za=a(Hy,"A",{href:!0,rel:!0});var Vy=i(Za);ak=s(Vy,"Automatic Differentiation"),Vy.forEach(t),Hy.forEach(t),ik=u(Rn),Tc=a(Rn,"LI",{});var Jy=i(Tc);ei=a(Jy,"A",{href:!0,rel:!0});var Gy=i(ei);lk=s(Gy,"Vectorization"),Gy.forEach(t),Jy.forEach(t),dk=u(Rn),$c=a(Rn,"LI",{});var Xy=i($c);ti=a(Xy,"A",{href:!0,rel:!0});var Yy=i(ti);ck=s(Yy,"Parallelization"),Yy.forEach(t),Xy.forEach(t),Rn.forEach(t),pk=u(Et),Lt=a(Et,"DIV",{class:!0});var Un=i(Lt);T(oi.$$.fragment,Un),hk=u(Un),ss=a(Un,"P",{});var Ql=i(ss);uk=s(Ql,"The "),yc=a(Ql,"CODE",{});var Zy=i(yc);fk=s(Zy,"FlaxDistilBertPreTrainedModel"),Zy.forEach(t),mk=s(Ql," forward method, overrides the "),Dc=a(Ql,"CODE",{});var e1=i(Dc);gk=s(e1,"__call__"),e1.forEach(t),_k=s(Ql," special method."),Ql.forEach(t),vk=u(Un),T($n.$$.fragment,Un),bk=u(Un),T(yn.$$.fragment,Un),Un.forEach(t),Et.forEach(t),wh=u(n),ns=a(n,"H2",{class:!0});var yu=i(ns);Dn=a(yu,"A",{id:!0,class:!0,href:!0});var t1=i(Dn);Fc=a(t1,"SPAN",{});var o1=i(Fc);T(si.$$.fragment,o1),o1.forEach(t),t1.forEach(t),kk=u(yu),Bc=a(yu,"SPAN",{});var s1=i(Bc);wk=s(s1,"FlaxDistilBertForMultipleChoice"),s1.forEach(t),yu.forEach(t),Th=u(n),ot=a(n,"DIV",{class:!0});var xt=i(ot);T(ni.$$.fragment,xt),Tk=u(xt),Ec=a(xt,"P",{});var n1=i(Ec);$k=s(n1,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n1.forEach(t),yk=u(xt),ri=a(xt,"P",{});var Du=i(ri);Dk=s(Du,"This model inherits from "),yl=a(Du,"A",{href:!0});var r1=i(yl);Fk=s(r1,"FlaxPreTrainedModel"),r1.forEach(t),Bk=s(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Du.forEach(t),Ek=u(xt),ai=a(xt,"P",{});var Fu=i(ai);xk=s(Fu,"This model is also a Flax Linen "),ii=a(Fu,"A",{href:!0,rel:!0});var a1=i(ii);Mk=s(a1,"flax.linen.Module"),a1.forEach(t),jk=s(Fu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fu.forEach(t),zk=u(xt),xc=a(xt,"P",{});var i1=i(xc);Ck=s(i1,"Finally, this model supports inherent JAX features such as:"),i1.forEach(t),Pk=u(xt),eo=a(xt,"UL",{});var Kn=i(eo);Mc=a(Kn,"LI",{});var l1=i(Mc);li=a(l1,"A",{href:!0,rel:!0});var d1=i(li);qk=s(d1,"Just-In-Time (JIT) compilation"),d1.forEach(t),l1.forEach(t),Ak=u(Kn),jc=a(Kn,"LI",{});var c1=i(jc);di=a(c1,"A",{href:!0,rel:!0});var p1=i(di);Ok=s(p1,"Automatic Differentiation"),p1.forEach(t),c1.forEach(t),Nk=u(Kn),zc=a(Kn,"LI",{});var h1=i(zc);ci=a(h1,"A",{href:!0,rel:!0});var u1=i(ci);Ik=s(u1,"Vectorization"),u1.forEach(t),h1.forEach(t),Lk=u(Kn),Cc=a(Kn,"LI",{});var f1=i(Cc);pi=a(f1,"A",{href:!0,rel:!0});var m1=i(pi);Sk=s(m1,"Parallelization"),m1.forEach(t),f1.forEach(t),Kn.forEach(t),Wk=u(xt),St=a(xt,"DIV",{class:!0});var Hn=i(St);T(hi.$$.fragment,Hn),Qk=u(Hn),rs=a(Hn,"P",{});var Rl=i(rs);Rk=s(Rl,"The "),Pc=a(Rl,"CODE",{});var g1=i(Pc);Uk=s(g1,"FlaxDistilBertPreTrainedModel"),g1.forEach(t),Kk=s(Rl," forward method, overrides the "),qc=a(Rl,"CODE",{});var _1=i(qc);Hk=s(_1,"__call__"),_1.forEach(t),Vk=s(Rl," special method."),Rl.forEach(t),Jk=u(Hn),T(Fn.$$.fragment,Hn),Gk=u(Hn),T(Bn.$$.fragment,Hn),Hn.forEach(t),xt.forEach(t),$h=u(n),as=a(n,"H2",{class:!0});var Bu=i(as);En=a(Bu,"A",{id:!0,class:!0,href:!0});var v1=i(En);Ac=a(v1,"SPAN",{});var b1=i(Ac);T(ui.$$.fragment,b1),b1.forEach(t),v1.forEach(t),Xk=u(Bu),Oc=a(Bu,"SPAN",{});var k1=i(Oc);Yk=s(k1,"FlaxDistilBertForTokenClassification"),k1.forEach(t),Bu.forEach(t),yh=u(n),st=a(n,"DIV",{class:!0});var Mt=i(st);T(fi.$$.fragment,Mt),Zk=u(Mt),Nc=a(Mt,"P",{});var w1=i(Nc);ew=s(w1,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),w1.forEach(t),tw=u(Mt),mi=a(Mt,"P",{});var Eu=i(mi);ow=s(Eu,"This model inherits from "),Dl=a(Eu,"A",{href:!0});var T1=i(Dl);sw=s(T1,"FlaxPreTrainedModel"),T1.forEach(t),nw=s(Eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eu.forEach(t),rw=u(Mt),gi=a(Mt,"P",{});var xu=i(gi);aw=s(xu,"This model is also a Flax Linen "),_i=a(xu,"A",{href:!0,rel:!0});var $1=i(_i);iw=s($1,"flax.linen.Module"),$1.forEach(t),lw=s(xu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xu.forEach(t),dw=u(Mt),Ic=a(Mt,"P",{});var y1=i(Ic);cw=s(y1,"Finally, this model supports inherent JAX features such as:"),y1.forEach(t),pw=u(Mt),to=a(Mt,"UL",{});var Vn=i(to);Lc=a(Vn,"LI",{});var D1=i(Lc);vi=a(D1,"A",{href:!0,rel:!0});var F1=i(vi);hw=s(F1,"Just-In-Time (JIT) compilation"),F1.forEach(t),D1.forEach(t),uw=u(Vn),Sc=a(Vn,"LI",{});var B1=i(Sc);bi=a(B1,"A",{href:!0,rel:!0});var E1=i(bi);fw=s(E1,"Automatic Differentiation"),E1.forEach(t),B1.forEach(t),mw=u(Vn),Wc=a(Vn,"LI",{});var x1=i(Wc);ki=a(x1,"A",{href:!0,rel:!0});var M1=i(ki);gw=s(M1,"Vectorization"),M1.forEach(t),x1.forEach(t),_w=u(Vn),Qc=a(Vn,"LI",{});var j1=i(Qc);wi=a(j1,"A",{href:!0,rel:!0});var z1=i(wi);vw=s(z1,"Parallelization"),z1.forEach(t),j1.forEach(t),Vn.forEach(t),bw=u(Mt),Wt=a(Mt,"DIV",{class:!0});var Jn=i(Wt);T(Ti.$$.fragment,Jn),kw=u(Jn),is=a(Jn,"P",{});var Ul=i(is);ww=s(Ul,"The "),Rc=a(Ul,"CODE",{});var C1=i(Rc);Tw=s(C1,"FlaxDistilBertPreTrainedModel"),C1.forEach(t),$w=s(Ul," forward method, overrides the "),Uc=a(Ul,"CODE",{});var P1=i(Uc);yw=s(P1,"__call__"),P1.forEach(t),Dw=s(Ul," special method."),Ul.forEach(t),Fw=u(Jn),T(xn.$$.fragment,Jn),Bw=u(Jn),T(Mn.$$.fragment,Jn),Jn.forEach(t),Mt.forEach(t),Dh=u(n),ls=a(n,"H2",{class:!0});var Mu=i(ls);jn=a(Mu,"A",{id:!0,class:!0,href:!0});var q1=i(jn);Kc=a(q1,"SPAN",{});var A1=i(Kc);T($i.$$.fragment,A1),A1.forEach(t),q1.forEach(t),Ew=u(Mu),Hc=a(Mu,"SPAN",{});var O1=i(Hc);xw=s(O1,"FlaxDistilBertForQuestionAnswering"),O1.forEach(t),Mu.forEach(t),Fh=u(n),nt=a(n,"DIV",{class:!0});var jt=i(nt);T(yi.$$.fragment,jt),Mw=u(jt),ds=a(jt,"P",{});var Kl=i(ds);jw=s(Kl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=a(Kl,"CODE",{});var N1=i(Vc);zw=s(N1,"span start logits"),N1.forEach(t),Cw=s(Kl," and "),Jc=a(Kl,"CODE",{});var I1=i(Jc);Pw=s(I1,"span end logits"),I1.forEach(t),qw=s(Kl,")."),Kl.forEach(t),Aw=u(jt),Di=a(jt,"P",{});var ju=i(Di);Ow=s(ju,"This model inherits from "),Fl=a(ju,"A",{href:!0});var L1=i(Fl);Nw=s(L1,"FlaxPreTrainedModel"),L1.forEach(t),Iw=s(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ju.forEach(t),Lw=u(jt),Fi=a(jt,"P",{});var zu=i(Fi);Sw=s(zu,"This model is also a Flax Linen "),Bi=a(zu,"A",{href:!0,rel:!0});var S1=i(Bi);Ww=s(S1,"flax.linen.Module"),S1.forEach(t),Qw=s(zu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zu.forEach(t),Rw=u(jt),Gc=a(jt,"P",{});var W1=i(Gc);Uw=s(W1,"Finally, this model supports inherent JAX features such as:"),W1.forEach(t),Kw=u(jt),oo=a(jt,"UL",{});var Gn=i(oo);Xc=a(Gn,"LI",{});var Q1=i(Xc);Ei=a(Q1,"A",{href:!0,rel:!0});var R1=i(Ei);Hw=s(R1,"Just-In-Time (JIT) compilation"),R1.forEach(t),Q1.forEach(t),Vw=u(Gn),Yc=a(Gn,"LI",{});var U1=i(Yc);xi=a(U1,"A",{href:!0,rel:!0});var K1=i(xi);Jw=s(K1,"Automatic Differentiation"),K1.forEach(t),U1.forEach(t),Gw=u(Gn),Zc=a(Gn,"LI",{});var H1=i(Zc);Mi=a(H1,"A",{href:!0,rel:!0});var V1=i(Mi);Xw=s(V1,"Vectorization"),V1.forEach(t),H1.forEach(t),Yw=u(Gn),ep=a(Gn,"LI",{});var J1=i(ep);ji=a(J1,"A",{href:!0,rel:!0});var G1=i(ji);Zw=s(G1,"Parallelization"),G1.forEach(t),J1.forEach(t),Gn.forEach(t),eT=u(jt),Qt=a(jt,"DIV",{class:!0});var Xn=i(Qt);T(zi.$$.fragment,Xn),tT=u(Xn),cs=a(Xn,"P",{});var Hl=i(cs);oT=s(Hl,"The "),tp=a(Hl,"CODE",{});var X1=i(tp);sT=s(X1,"FlaxDistilBertPreTrainedModel"),X1.forEach(t),nT=s(Hl," forward method, overrides the "),op=a(Hl,"CODE",{});var Y1=i(op);rT=s(Y1,"__call__"),Y1.forEach(t),aT=s(Hl," special method."),Hl.forEach(t),iT=u(Xn),T(zn.$$.fragment,Xn),lT=u(Xn),T(Cn.$$.fragment,Xn),Xn.forEach(t),jt.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(nF)),m(f,"id","distilbert"),m(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(f,"href","#distilbert"),m(c,"class","relative group"),m(re,"id","overview"),m(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(re,"href","#overview"),m(I,"class","relative group"),m(ae,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),m(ae,"rel","nofollow"),m(ie,"href","https://arxiv.org/abs/1910.01108"),m(ie,"rel","nofollow"),m(ee,"href","https://huggingface.co/victorsanh"),m(ee,"rel","nofollow"),m(j,"href","https://huggingface.co/kamalkraj"),m(j,"rel","nofollow"),m(Ne,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),m(Ne,"rel","nofollow"),m(Oe,"id","transformers.DistilBertConfig"),m(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oe,"href","#transformers.DistilBertConfig"),m(S,"class","relative group"),m(Si,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertModel"),m(Wi,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertModel"),m(Yn,"href","https://huggingface.co/distilbert-base-uncased"),m(Yn,"rel","nofollow"),m(Qi,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ri,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(us,"id","transformers.DistilBertTokenizer"),m(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(us,"href","#transformers.DistilBertTokenizer"),m(yo,"class","relative group"),m(Ui,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizer"),m(Ki,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),m(Hi,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ms,"id","transformers.DistilBertTokenizerFast"),m(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ms,"href","#transformers.DistilBertTokenizerFast"),m(Do,"class","relative group"),m(Vi,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),m(Ji,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),m(Gi,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),m(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_s,"id","transformers.DistilBertModel"),m(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_s,"href","#transformers.DistilBertModel"),m(Fo,"class","relative group"),m(Xi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(cr,"rel","nofollow"),m(Yi,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertModel"),m(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ks,"id","transformers.DistilBertForMaskedLM"),m(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ks,"href","#transformers.DistilBertForMaskedLM"),m(Eo,"class","relative group"),m(Zi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(_r,"rel","nofollow"),m(el,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ys,"id","transformers.DistilBertForSequenceClassification"),m(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ys,"href","#transformers.DistilBertForSequenceClassification"),m(Mo,"class","relative group"),m(tl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m($r,"rel","nofollow"),m(ol,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ms,"id","transformers.DistilBertForMultipleChoice"),m(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ms,"href","#transformers.DistilBertForMultipleChoice"),m(zo,"class","relative group"),m(sl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(xr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(xr,"rel","nofollow"),m(nl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),m(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Cs,"id","transformers.DistilBertForTokenClassification"),m(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Cs,"href","#transformers.DistilBertForTokenClassification"),m(Po,"class","relative group"),m(rl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(al,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Os,"id","transformers.DistilBertForQuestionAnswering"),m(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Os,"href","#transformers.DistilBertForQuestionAnswering"),m(Ao,"class","relative group"),m(il,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Sr,"rel","nofollow"),m(ll,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ss,"id","transformers.TFDistilBertModel"),m(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ss,"href","#transformers.TFDistilBertModel"),m(Io,"class","relative group"),m(dl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Hr,"rel","nofollow"),m(cl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertModel"),m(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Us,"id","transformers.TFDistilBertForMaskedLM"),m(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Us,"href","#transformers.TFDistilBertForMaskedLM"),m(So,"class","relative group"),m(pl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ea,"rel","nofollow"),m(hl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gs,"id","transformers.TFDistilBertForSequenceClassification"),m(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Gs,"href","#transformers.TFDistilBertForSequenceClassification"),m(Qo,"class","relative group"),m(ul,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(aa,"rel","nofollow"),m(fl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"id","transformers.TFDistilBertForMultipleChoice"),m(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(tn,"href","#transformers.TFDistilBertForMultipleChoice"),m(Uo,"class","relative group"),m(ml,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ha,"rel","nofollow"),m(gl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),m(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rn,"id","transformers.TFDistilBertForTokenClassification"),m(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(rn,"href","#transformers.TFDistilBertForTokenClassification"),m(Ho,"class","relative group"),m(_l,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(va,"rel","nofollow"),m(vl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pn,"id","transformers.TFDistilBertForQuestionAnswering"),m(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(pn,"href","#transformers.TFDistilBertForQuestionAnswering"),m(Jo,"class","relative group"),m(bl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ya,"rel","nofollow"),m(kl,"href","/docs/transformers/v4.22.2/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),m(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"id","transformers.FlaxDistilBertModel"),m(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(gn,"href","#transformers.FlaxDistilBertModel"),m(Yo,"class","relative group"),m(wl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Ma,"rel","nofollow"),m(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(ja,"rel","nofollow"),m(za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(za,"rel","nofollow"),m(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Ca,"rel","nofollow"),m(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Pa,"rel","nofollow"),m(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bn,"id","transformers.FlaxDistilBertForMaskedLM"),m(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(bn,"href","#transformers.FlaxDistilBertForMaskedLM"),m(es,"class","relative group"),m(Tl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Sa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Sa,"rel","nofollow"),m(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Wa,"rel","nofollow"),m(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Qa,"rel","nofollow"),m(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Ra,"rel","nofollow"),m(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Ua,"rel","nofollow"),m(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tn,"id","transformers.FlaxDistilBertForSequenceClassification"),m(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),m(os,"class","relative group"),m($l,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Xa,"rel","nofollow"),m(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Ya,"rel","nofollow"),m(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Za,"rel","nofollow"),m(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ei,"rel","nofollow"),m(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ti,"rel","nofollow"),m(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"id","transformers.FlaxDistilBertForMultipleChoice"),m(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Dn,"href","#transformers.FlaxDistilBertForMultipleChoice"),m(ns,"class","relative group"),m(yl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(ii,"rel","nofollow"),m(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(li,"rel","nofollow"),m(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(di,"rel","nofollow"),m(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ci,"rel","nofollow"),m(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(pi,"rel","nofollow"),m(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(En,"id","transformers.FlaxDistilBertForTokenClassification"),m(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(En,"href","#transformers.FlaxDistilBertForTokenClassification"),m(as,"class","relative group"),m(Dl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(_i,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(_i,"rel","nofollow"),m(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(vi,"rel","nofollow"),m(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(bi,"rel","nofollow"),m(ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ki,"rel","nofollow"),m(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(wi,"rel","nofollow"),m(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jn,"id","transformers.FlaxDistilBertForQuestionAnswering"),m(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),m(ls,"class","relative group"),m(Fl,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Bi,"rel","nofollow"),m(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Ei,"rel","nofollow"),m(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(xi,"rel","nofollow"),m(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Mi,"rel","nofollow"),m(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ji,"rel","nofollow"),m(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,v){e(document.head,d),_(n,g,v),_(n,c,v),e(c,f),e(f,b),$(l,b,null),e(c,p),e(c,M),e(M,we),_(n,ge,v),_(n,I,v),e(I,re),e(re,oe),$(B,oe,null),e(I,Te),e(I,U),e(U,$e),_(n,_e,v),_(n,O,v),e(O,ye),e(O,ae),e(ae,H),e(O,De),e(O,ie),e(ie,V),e(O,Fe),e(O,de),e(de,J),e(O,Be),_(n,ve,v),_(n,te,v),e(te,z),_(n,q,v),_(n,le,v),e(le,K),e(K,Ee),_(n,be,v),_(n,R,v),e(R,xe),_(n,ke,v),_(n,C,v),e(C,se),e(se,G),e(se,ce),e(ce,Me),e(se,X),e(se,pe),e(pe,je),e(se,L),e(se,he),e(he,Y),e(se,ze),e(C,ne),e(C,P),e(P,Ce),e(P,A),e(A,Pe),e(P,qe),_(n,k,v),_(n,x,v),e(x,Ue),e(x,ee),e(ee,Ke),e(x,He),e(x,j),e(j,Ve),e(x,Je),e(x,Ne),e(Ne,Ge),e(x,Xe),_(n,N,v),_(n,S,v),e(S,Oe),e(Oe,Se),$(W,Se,null),e(S,Ye),e(S,We),e(We,Ae),_(n,Re,v),_(n,Q,v),$(Ie,Q,null),e(Q,Cu),e(Q,Gt),e(Gt,Pu),e(Gt,Si),e(Si,qu),e(Gt,Au),e(Gt,Wi),e(Wi,Ou),e(Gt,Nu),e(Gt,Yn),e(Yn,Iu),e(Gt,Lu),e(Q,Su),e(Q,$o),e($o,Wu),e($o,Qi),e(Qi,Qu),e($o,Ru),e($o,Ri),e(Ri,Uu),e($o,Ku),e(Q,Hu),$(hs,Q,null),_(n,Sp,v),_(n,yo,v),e(yo,us),e(us,Vl),$(Zn,Vl,null),e(yo,Vu),e(yo,Jl),e(Jl,Ju),_(n,Wp,v),_(n,zt,v),$(er,zt,null),e(zt,Gu),e(zt,Gl),e(Gl,Xu),e(zt,Yu),e(zt,fs),e(fs,Ui),e(Ui,Zu),e(fs,ef),e(fs,Ki),e(Ki,tf),e(fs,of),e(zt,sf),e(zt,tr),e(tr,nf),e(tr,Hi),e(Hi,rf),e(tr,af),_(n,Qp,v),_(n,Do,v),e(Do,ms),e(ms,Xl),$(or,Xl,null),e(Do,lf),e(Do,Yl),e(Yl,df),_(n,Rp,v),_(n,Ct,v),$(sr,Ct,null),e(Ct,cf),e(Ct,nr),e(nr,pf),e(nr,Zl),e(Zl,hf),e(nr,uf),e(Ct,ff),e(Ct,gs),e(gs,Vi),e(Vi,mf),e(gs,gf),e(gs,Ji),e(Ji,_f),e(gs,vf),e(Ct,bf),e(Ct,rr),e(rr,kf),e(rr,Gi),e(Gi,wf),e(rr,Tf),_(n,Up,v),_(n,Fo,v),e(Fo,_s),e(_s,ed),$(ar,ed,null),e(Fo,$f),e(Fo,td),e(td,yf),_(n,Kp,v),_(n,ht,v),$(ir,ht,null),e(ht,Df),e(ht,od),e(od,Ff),e(ht,Bf),e(ht,lr),e(lr,Ef),e(lr,Xi),e(Xi,xf),e(lr,Mf),e(ht,jf),e(ht,dr),e(dr,zf),e(dr,cr),e(cr,Cf),e(dr,Pf),e(ht,qf),e(ht,Pt),$(pr,Pt,null),e(Pt,Af),e(Pt,Bo),e(Bo,Of),e(Bo,Yi),e(Yi,Nf),e(Bo,If),e(Bo,sd),e(sd,Lf),e(Bo,Sf),e(Pt,Wf),$(vs,Pt,null),e(Pt,Qf),$(bs,Pt,null),_(n,Hp,v),_(n,Eo,v),e(Eo,ks),e(ks,nd),$(hr,nd,null),e(Eo,Rf),e(Eo,rd),e(rd,Uf),_(n,Vp,v),_(n,ut,v),$(ur,ut,null),e(ut,Kf),e(ut,fr),e(fr,Hf),e(fr,ad),e(ad,Vf),e(fr,Jf),e(ut,Gf),e(ut,mr),e(mr,Xf),e(mr,Zi),e(Zi,Yf),e(mr,Zf),e(ut,em),e(ut,gr),e(gr,tm),e(gr,_r),e(_r,om),e(gr,sm),e(ut,nm),e(ut,vt),$(vr,vt,null),e(vt,rm),e(vt,xo),e(xo,am),e(xo,el),e(el,im),e(xo,lm),e(xo,id),e(id,dm),e(xo,cm),e(vt,pm),$(ws,vt,null),e(vt,hm),$(Ts,vt,null),e(vt,um),$($s,vt,null),_(n,Jp,v),_(n,Mo,v),e(Mo,ys),e(ys,ld),$(br,ld,null),e(Mo,fm),e(Mo,dd),e(dd,mm),_(n,Gp,v),_(n,ft,v),$(kr,ft,null),e(ft,gm),e(ft,cd),e(cd,_m),e(ft,vm),e(ft,wr),e(wr,bm),e(wr,tl),e(tl,km),e(wr,wm),e(ft,Tm),e(ft,Tr),e(Tr,$m),e(Tr,$r),e($r,ym),e(Tr,Dm),e(ft,Fm),e(ft,rt),$(yr,rt,null),e(rt,Bm),e(rt,jo),e(jo,Em),e(jo,ol),e(ol,xm),e(jo,Mm),e(jo,pd),e(pd,jm),e(jo,zm),e(rt,Cm),$(Ds,rt,null),e(rt,Pm),$(Fs,rt,null),e(rt,qm),$(Bs,rt,null),e(rt,Am),$(Es,rt,null),e(rt,Om),$(xs,rt,null),_(n,Xp,v),_(n,zo,v),e(zo,Ms),e(Ms,hd),$(Dr,hd,null),e(zo,Nm),e(zo,ud),e(ud,Im),_(n,Yp,v),_(n,mt,v),$(Fr,mt,null),e(mt,Lm),e(mt,fd),e(fd,Sm),e(mt,Wm),e(mt,Br),e(Br,Qm),e(Br,sl),e(sl,Rm),e(Br,Um),e(mt,Km),e(mt,Er),e(Er,Hm),e(Er,xr),e(xr,Vm),e(Er,Jm),e(mt,Gm),e(mt,qt),$(Mr,qt,null),e(qt,Xm),e(qt,Co),e(Co,Ym),e(Co,nl),e(nl,Zm),e(Co,eg),e(Co,md),e(md,tg),e(Co,og),e(qt,sg),$(js,qt,null),e(qt,ng),$(zs,qt,null),_(n,Zp,v),_(n,Po,v),e(Po,Cs),e(Cs,gd),$(jr,gd,null),e(Po,rg),e(Po,_d),e(_d,ag),_(n,eh,v),_(n,gt,v),$(zr,gt,null),e(gt,ig),e(gt,vd),e(vd,lg),e(gt,dg),e(gt,Cr),e(Cr,cg),e(Cr,rl),e(rl,pg),e(Cr,hg),e(gt,ug),e(gt,Pr),e(Pr,fg),e(Pr,qr),e(qr,mg),e(Pr,gg),e(gt,_g),e(gt,bt),$(Ar,bt,null),e(bt,vg),e(bt,qo),e(qo,bg),e(qo,al),e(al,kg),e(qo,wg),e(qo,bd),e(bd,Tg),e(qo,$g),e(bt,yg),$(Ps,bt,null),e(bt,Dg),$(qs,bt,null),e(bt,Fg),$(As,bt,null),_(n,th,v),_(n,Ao,v),e(Ao,Os),e(Os,kd),$(Or,kd,null),e(Ao,Bg),e(Ao,wd),e(wd,Eg),_(n,oh,v),_(n,_t,v),$(Nr,_t,null),e(_t,xg),e(_t,Oo),e(Oo,Mg),e(Oo,Td),e(Td,jg),e(Oo,zg),e(Oo,$d),e($d,Cg),e(Oo,Pg),e(_t,qg),e(_t,Ir),e(Ir,Ag),e(Ir,il),e(il,Og),e(Ir,Ng),e(_t,Ig),e(_t,Lr),e(Lr,Lg),e(Lr,Sr),e(Sr,Sg),e(Lr,Wg),e(_t,Qg),e(_t,kt),$(Wr,kt,null),e(kt,Rg),e(kt,No),e(No,Ug),e(No,ll),e(ll,Kg),e(No,Hg),e(No,yd),e(yd,Vg),e(No,Jg),e(kt,Gg),$(Ns,kt,null),e(kt,Xg),$(Is,kt,null),e(kt,Yg),$(Ls,kt,null),_(n,sh,v),_(n,Io,v),e(Io,Ss),e(Ss,Dd),$(Qr,Dd,null),e(Io,Zg),e(Io,Fd),e(Fd,e_),_(n,nh,v),_(n,at,v),$(Rr,at,null),e(at,t_),e(at,Bd),e(Bd,o_),e(at,s_),e(at,Ur),e(Ur,n_),e(Ur,dl),e(dl,r_),e(Ur,a_),e(at,i_),e(at,Kr),e(Kr,l_),e(Kr,Hr),e(Hr,d_),e(Kr,c_),e(at,p_),$(Ws,at,null),e(at,h_),e(at,At),$(Vr,At,null),e(At,u_),e(At,Lo),e(Lo,f_),e(Lo,cl),e(cl,m_),e(Lo,g_),e(Lo,Ed),e(Ed,__),e(Lo,v_),e(At,b_),$(Qs,At,null),e(At,k_),$(Rs,At,null),_(n,rh,v),_(n,So,v),e(So,Us),e(Us,xd),$(Jr,xd,null),e(So,w_),e(So,Md),e(Md,T_),_(n,ah,v),_(n,it,v),$(Gr,it,null),e(it,$_),e(it,Xr),e(Xr,y_),e(Xr,jd),e(jd,D_),e(Xr,F_),e(it,B_),e(it,Yr),e(Yr,E_),e(Yr,pl),e(pl,x_),e(Yr,M_),e(it,j_),e(it,Zr),e(Zr,z_),e(Zr,ea),e(ea,C_),e(Zr,P_),e(it,q_),$(Ks,it,null),e(it,A_),e(it,wt),$(ta,wt,null),e(wt,O_),e(wt,Wo),e(Wo,N_),e(Wo,hl),e(hl,I_),e(Wo,L_),e(Wo,zd),e(zd,S_),e(Wo,W_),e(wt,Q_),$(Hs,wt,null),e(wt,R_),$(Vs,wt,null),e(wt,U_),$(Js,wt,null),_(n,ih,v),_(n,Qo,v),e(Qo,Gs),e(Gs,Cd),$(oa,Cd,null),e(Qo,K_),e(Qo,Pd),e(Pd,H_),_(n,lh,v),_(n,lt,v),$(sa,lt,null),e(lt,V_),e(lt,qd),e(qd,J_),e(lt,G_),e(lt,na),e(na,X_),e(na,ul),e(ul,Y_),e(na,Z_),e(lt,ev),e(lt,ra),e(ra,tv),e(ra,aa),e(aa,ov),e(ra,sv),e(lt,nv),$(Xs,lt,null),e(lt,rv),e(lt,Tt),$(ia,Tt,null),e(Tt,av),e(Tt,Ro),e(Ro,iv),e(Ro,fl),e(fl,lv),e(Ro,dv),e(Ro,Ad),e(Ad,cv),e(Ro,pv),e(Tt,hv),$(Ys,Tt,null),e(Tt,uv),$(Zs,Tt,null),e(Tt,fv),$(en,Tt,null),_(n,dh,v),_(n,Uo,v),e(Uo,tn),e(tn,Od),$(la,Od,null),e(Uo,mv),e(Uo,Nd),e(Nd,gv),_(n,ch,v),_(n,dt,v),$(da,dt,null),e(dt,_v),e(dt,Id),e(Id,vv),e(dt,bv),e(dt,ca),e(ca,kv),e(ca,ml),e(ml,wv),e(ca,Tv),e(dt,$v),e(dt,pa),e(pa,yv),e(pa,ha),e(ha,Dv),e(pa,Fv),e(dt,Bv),$(on,dt,null),e(dt,Ev),e(dt,Ot),$(ua,Ot,null),e(Ot,xv),e(Ot,Ko),e(Ko,Mv),e(Ko,gl),e(gl,jv),e(Ko,zv),e(Ko,Ld),e(Ld,Cv),e(Ko,Pv),e(Ot,qv),$(sn,Ot,null),e(Ot,Av),$(nn,Ot,null),_(n,ph,v),_(n,Ho,v),e(Ho,rn),e(rn,Sd),$(fa,Sd,null),e(Ho,Ov),e(Ho,Wd),e(Wd,Nv),_(n,hh,v),_(n,ct,v),$(ma,ct,null),e(ct,Iv),e(ct,Qd),e(Qd,Lv),e(ct,Sv),e(ct,ga),e(ga,Wv),e(ga,_l),e(_l,Qv),e(ga,Rv),e(ct,Uv),e(ct,_a),e(_a,Kv),e(_a,va),e(va,Hv),e(_a,Vv),e(ct,Jv),$(an,ct,null),e(ct,Gv),e(ct,$t),$(ba,$t,null),e($t,Xv),e($t,Vo),e(Vo,Yv),e(Vo,vl),e(vl,Zv),e(Vo,eb),e(Vo,Rd),e(Rd,tb),e(Vo,ob),e($t,sb),$(ln,$t,null),e($t,nb),$(dn,$t,null),e($t,rb),$(cn,$t,null),_(n,uh,v),_(n,Jo,v),e(Jo,pn),e(pn,Ud),$(ka,Ud,null),e(Jo,ab),e(Jo,Kd),e(Kd,ib),_(n,fh,v),_(n,pt,v),$(wa,pt,null),e(pt,lb),e(pt,Go),e(Go,db),e(Go,Hd),e(Hd,cb),e(Go,pb),e(Go,Vd),e(Vd,hb),e(Go,ub),e(pt,fb),e(pt,Ta),e(Ta,mb),e(Ta,bl),e(bl,gb),e(Ta,_b),e(pt,vb),e(pt,$a),e($a,bb),e($a,ya),e(ya,kb),e($a,wb),e(pt,Tb),$(hn,pt,null),e(pt,$b),e(pt,yt),$(Da,yt,null),e(yt,yb),e(yt,Xo),e(Xo,Db),e(Xo,kl),e(kl,Fb),e(Xo,Bb),e(Xo,Jd),e(Jd,Eb),e(Xo,xb),e(yt,Mb),$(un,yt,null),e(yt,jb),$(fn,yt,null),e(yt,zb),$(mn,yt,null),_(n,mh,v),_(n,Yo,v),e(Yo,gn),e(gn,Gd),$(Fa,Gd,null),e(Yo,Cb),e(Yo,Xd),e(Xd,Pb),_(n,gh,v),_(n,Ze,v),$(Ba,Ze,null),e(Ze,qb),e(Ze,Yd),e(Yd,Ab),e(Ze,Ob),e(Ze,Ea),e(Ea,Nb),e(Ea,wl),e(wl,Ib),e(Ea,Lb),e(Ze,Sb),e(Ze,xa),e(xa,Wb),e(xa,Ma),e(Ma,Qb),e(xa,Rb),e(Ze,Ub),e(Ze,Zd),e(Zd,Kb),e(Ze,Hb),e(Ze,Xt),e(Xt,ec),e(ec,ja),e(ja,Vb),e(Xt,Jb),e(Xt,tc),e(tc,za),e(za,Gb),e(Xt,Xb),e(Xt,oc),e(oc,Ca),e(Ca,Yb),e(Xt,Zb),e(Xt,sc),e(sc,Pa),e(Pa,e2),e(Ze,t2),e(Ze,Nt),$(qa,Nt,null),e(Nt,o2),e(Nt,Zo),e(Zo,s2),e(Zo,nc),e(nc,n2),e(Zo,r2),e(Zo,rc),e(rc,a2),e(Zo,i2),e(Nt,l2),$(_n,Nt,null),e(Nt,d2),$(vn,Nt,null),_(n,_h,v),_(n,es,v),e(es,bn),e(bn,ac),$(Aa,ac,null),e(es,c2),e(es,ic),e(ic,p2),_(n,vh,v),_(n,et,v),$(Oa,et,null),e(et,h2),e(et,Na),e(Na,u2),e(Na,lc),e(lc,f2),e(Na,m2),e(et,g2),e(et,Ia),e(Ia,_2),e(Ia,Tl),e(Tl,v2),e(Ia,b2),e(et,k2),e(et,La),e(La,w2),e(La,Sa),e(Sa,T2),e(La,$2),e(et,y2),e(et,dc),e(dc,D2),e(et,F2),e(et,Yt),e(Yt,cc),e(cc,Wa),e(Wa,B2),e(Yt,E2),e(Yt,pc),e(pc,Qa),e(Qa,x2),e(Yt,M2),e(Yt,hc),e(hc,Ra),e(Ra,j2),e(Yt,z2),e(Yt,uc),e(uc,Ua),e(Ua,C2),e(et,P2),e(et,It),$(Ka,It,null),e(It,q2),e(It,ts),e(ts,A2),e(ts,fc),e(fc,O2),e(ts,N2),e(ts,mc),e(mc,I2),e(ts,L2),e(It,S2),$(kn,It,null),e(It,W2),$(wn,It,null),_(n,bh,v),_(n,os,v),e(os,Tn),e(Tn,gc),$(Ha,gc,null),e(os,Q2),e(os,_c),e(_c,R2),_(n,kh,v),_(n,tt,v),$(Va,tt,null),e(tt,U2),e(tt,vc),e(vc,K2),e(tt,H2),e(tt,Ja),e(Ja,V2),e(Ja,$l),e($l,J2),e(Ja,G2),e(tt,X2),e(tt,Ga),e(Ga,Y2),e(Ga,Xa),e(Xa,Z2),e(Ga,ek),e(tt,tk),e(tt,bc),e(bc,ok),e(tt,sk),e(tt,Zt),e(Zt,kc),e(kc,Ya),e(Ya,nk),e(Zt,rk),e(Zt,wc),e(wc,Za),e(Za,ak),e(Zt,ik),e(Zt,Tc),e(Tc,ei),e(ei,lk),e(Zt,dk),e(Zt,$c),e($c,ti),e(ti,ck),e(tt,pk),e(tt,Lt),$(oi,Lt,null),e(Lt,hk),e(Lt,ss),e(ss,uk),e(ss,yc),e(yc,fk),e(ss,mk),e(ss,Dc),e(Dc,gk),e(ss,_k),e(Lt,vk),$($n,Lt,null),e(Lt,bk),$(yn,Lt,null),_(n,wh,v),_(n,ns,v),e(ns,Dn),e(Dn,Fc),$(si,Fc,null),e(ns,kk),e(ns,Bc),e(Bc,wk),_(n,Th,v),_(n,ot,v),$(ni,ot,null),e(ot,Tk),e(ot,Ec),e(Ec,$k),e(ot,yk),e(ot,ri),e(ri,Dk),e(ri,yl),e(yl,Fk),e(ri,Bk),e(ot,Ek),e(ot,ai),e(ai,xk),e(ai,ii),e(ii,Mk),e(ai,jk),e(ot,zk),e(ot,xc),e(xc,Ck),e(ot,Pk),e(ot,eo),e(eo,Mc),e(Mc,li),e(li,qk),e(eo,Ak),e(eo,jc),e(jc,di),e(di,Ok),e(eo,Nk),e(eo,zc),e(zc,ci),e(ci,Ik),e(eo,Lk),e(eo,Cc),e(Cc,pi),e(pi,Sk),e(ot,Wk),e(ot,St),$(hi,St,null),e(St,Qk),e(St,rs),e(rs,Rk),e(rs,Pc),e(Pc,Uk),e(rs,Kk),e(rs,qc),e(qc,Hk),e(rs,Vk),e(St,Jk),$(Fn,St,null),e(St,Gk),$(Bn,St,null),_(n,$h,v),_(n,as,v),e(as,En),e(En,Ac),$(ui,Ac,null),e(as,Xk),e(as,Oc),e(Oc,Yk),_(n,yh,v),_(n,st,v),$(fi,st,null),e(st,Zk),e(st,Nc),e(Nc,ew),e(st,tw),e(st,mi),e(mi,ow),e(mi,Dl),e(Dl,sw),e(mi,nw),e(st,rw),e(st,gi),e(gi,aw),e(gi,_i),e(_i,iw),e(gi,lw),e(st,dw),e(st,Ic),e(Ic,cw),e(st,pw),e(st,to),e(to,Lc),e(Lc,vi),e(vi,hw),e(to,uw),e(to,Sc),e(Sc,bi),e(bi,fw),e(to,mw),e(to,Wc),e(Wc,ki),e(ki,gw),e(to,_w),e(to,Qc),e(Qc,wi),e(wi,vw),e(st,bw),e(st,Wt),$(Ti,Wt,null),e(Wt,kw),e(Wt,is),e(is,ww),e(is,Rc),e(Rc,Tw),e(is,$w),e(is,Uc),e(Uc,yw),e(is,Dw),e(Wt,Fw),$(xn,Wt,null),e(Wt,Bw),$(Mn,Wt,null),_(n,Dh,v),_(n,ls,v),e(ls,jn),e(jn,Kc),$($i,Kc,null),e(ls,Ew),e(ls,Hc),e(Hc,xw),_(n,Fh,v),_(n,nt,v),$(yi,nt,null),e(nt,Mw),e(nt,ds),e(ds,jw),e(ds,Vc),e(Vc,zw),e(ds,Cw),e(ds,Jc),e(Jc,Pw),e(ds,qw),e(nt,Aw),e(nt,Di),e(Di,Ow),e(Di,Fl),e(Fl,Nw),e(Di,Iw),e(nt,Lw),e(nt,Fi),e(Fi,Sw),e(Fi,Bi),e(Bi,Ww),e(Fi,Qw),e(nt,Rw),e(nt,Gc),e(Gc,Uw),e(nt,Kw),e(nt,oo),e(oo,Xc),e(Xc,Ei),e(Ei,Hw),e(oo,Vw),e(oo,Yc),e(Yc,xi),e(xi,Jw),e(oo,Gw),e(oo,Zc),e(Zc,Mi),e(Mi,Xw),e(oo,Yw),e(oo,ep),e(ep,ji),e(ji,Zw),e(nt,eT),e(nt,Qt),$(zi,Qt,null),e(Qt,tT),e(Qt,cs),e(cs,oT),e(cs,tp),e(tp,sT),e(cs,nT),e(cs,op),e(op,rT),e(cs,aT),e(Qt,iT),$(zn,Qt,null),e(Qt,lT),$(Cn,Qt,null),Bh=!0},p(n,[v]){const Ci={};v&2&&(Ci.$$scope={dirty:v,ctx:n}),hs.$set(Ci);const sp={};v&2&&(sp.$$scope={dirty:v,ctx:n}),vs.$set(sp);const np={};v&2&&(np.$$scope={dirty:v,ctx:n}),bs.$set(np);const rp={};v&2&&(rp.$$scope={dirty:v,ctx:n}),ws.$set(rp);const Pi={};v&2&&(Pi.$$scope={dirty:v,ctx:n}),Ts.$set(Pi);const ap={};v&2&&(ap.$$scope={dirty:v,ctx:n}),$s.$set(ap);const ip={};v&2&&(ip.$$scope={dirty:v,ctx:n}),Ds.$set(ip);const lp={};v&2&&(lp.$$scope={dirty:v,ctx:n}),Fs.$set(lp);const so={};v&2&&(so.$$scope={dirty:v,ctx:n}),Bs.$set(so);const dp={};v&2&&(dp.$$scope={dirty:v,ctx:n}),Es.$set(dp);const cp={};v&2&&(cp.$$scope={dirty:v,ctx:n}),xs.$set(cp);const pp={};v&2&&(pp.$$scope={dirty:v,ctx:n}),js.$set(pp);const hp={};v&2&&(hp.$$scope={dirty:v,ctx:n}),zs.$set(hp);const up={};v&2&&(up.$$scope={dirty:v,ctx:n}),Ps.$set(up);const fp={};v&2&&(fp.$$scope={dirty:v,ctx:n}),qs.$set(fp);const mp={};v&2&&(mp.$$scope={dirty:v,ctx:n}),As.$set(mp);const qi={};v&2&&(qi.$$scope={dirty:v,ctx:n}),Ns.$set(qi);const no={};v&2&&(no.$$scope={dirty:v,ctx:n}),Is.$set(no);const gp={};v&2&&(gp.$$scope={dirty:v,ctx:n}),Ls.$set(gp);const _p={};v&2&&(_p.$$scope={dirty:v,ctx:n}),Ws.$set(_p);const vp={};v&2&&(vp.$$scope={dirty:v,ctx:n}),Qs.$set(vp);const Ai={};v&2&&(Ai.$$scope={dirty:v,ctx:n}),Rs.$set(Ai);const bp={};v&2&&(bp.$$scope={dirty:v,ctx:n}),Ks.$set(bp);const ro={};v&2&&(ro.$$scope={dirty:v,ctx:n}),Hs.$set(ro);const kp={};v&2&&(kp.$$scope={dirty:v,ctx:n}),Vs.$set(kp);const wp={};v&2&&(wp.$$scope={dirty:v,ctx:n}),Js.$set(wp);const Tp={};v&2&&(Tp.$$scope={dirty:v,ctx:n}),Xs.$set(Tp);const Oi={};v&2&&(Oi.$$scope={dirty:v,ctx:n}),Ys.$set(Oi);const $p={};v&2&&($p.$$scope={dirty:v,ctx:n}),Zs.$set($p);const yp={};v&2&&(yp.$$scope={dirty:v,ctx:n}),en.$set(yp);const Dp={};v&2&&(Dp.$$scope={dirty:v,ctx:n}),on.$set(Dp);const ao={};v&2&&(ao.$$scope={dirty:v,ctx:n}),sn.$set(ao);const io={};v&2&&(io.$$scope={dirty:v,ctx:n}),nn.$set(io);const Fp={};v&2&&(Fp.$$scope={dirty:v,ctx:n}),an.$set(Fp);const Bp={};v&2&&(Bp.$$scope={dirty:v,ctx:n}),ln.$set(Bp);const Ep={};v&2&&(Ep.$$scope={dirty:v,ctx:n}),dn.$set(Ep);const ps={};v&2&&(ps.$$scope={dirty:v,ctx:n}),cn.$set(ps);const xp={};v&2&&(xp.$$scope={dirty:v,ctx:n}),hn.$set(xp);const Mp={};v&2&&(Mp.$$scope={dirty:v,ctx:n}),un.$set(Mp);const Ni={};v&2&&(Ni.$$scope={dirty:v,ctx:n}),fn.$set(Ni);const jp={};v&2&&(jp.$$scope={dirty:v,ctx:n}),mn.$set(jp);const zp={};v&2&&(zp.$$scope={dirty:v,ctx:n}),_n.$set(zp);const Cp={};v&2&&(Cp.$$scope={dirty:v,ctx:n}),vn.$set(Cp);const lo={};v&2&&(lo.$$scope={dirty:v,ctx:n}),kn.$set(lo);const Pp={};v&2&&(Pp.$$scope={dirty:v,ctx:n}),wn.$set(Pp);const Pn={};v&2&&(Pn.$$scope={dirty:v,ctx:n}),$n.$set(Pn);const qp={};v&2&&(qp.$$scope={dirty:v,ctx:n}),yn.$set(qp);const Ap={};v&2&&(Ap.$$scope={dirty:v,ctx:n}),Fn.$set(Ap);const Ii={};v&2&&(Ii.$$scope={dirty:v,ctx:n}),Bn.$set(Ii);const Op={};v&2&&(Op.$$scope={dirty:v,ctx:n}),xn.$set(Op);const Li={};v&2&&(Li.$$scope={dirty:v,ctx:n}),Mn.$set(Li);const Np={};v&2&&(Np.$$scope={dirty:v,ctx:n}),zn.$set(Np);const Ip={};v&2&&(Ip.$$scope={dirty:v,ctx:n}),Cn.$set(Ip)},i(n){Bh||(y(l.$$.fragment,n),y(B.$$.fragment,n),y(W.$$.fragment,n),y(Ie.$$.fragment,n),y(hs.$$.fragment,n),y(Zn.$$.fragment,n),y(er.$$.fragment,n),y(or.$$.fragment,n),y(sr.$$.fragment,n),y(ar.$$.fragment,n),y(ir.$$.fragment,n),y(pr.$$.fragment,n),y(vs.$$.fragment,n),y(bs.$$.fragment,n),y(hr.$$.fragment,n),y(ur.$$.fragment,n),y(vr.$$.fragment,n),y(ws.$$.fragment,n),y(Ts.$$.fragment,n),y($s.$$.fragment,n),y(br.$$.fragment,n),y(kr.$$.fragment,n),y(yr.$$.fragment,n),y(Ds.$$.fragment,n),y(Fs.$$.fragment,n),y(Bs.$$.fragment,n),y(Es.$$.fragment,n),y(xs.$$.fragment,n),y(Dr.$$.fragment,n),y(Fr.$$.fragment,n),y(Mr.$$.fragment,n),y(js.$$.fragment,n),y(zs.$$.fragment,n),y(jr.$$.fragment,n),y(zr.$$.fragment,n),y(Ar.$$.fragment,n),y(Ps.$$.fragment,n),y(qs.$$.fragment,n),y(As.$$.fragment,n),y(Or.$$.fragment,n),y(Nr.$$.fragment,n),y(Wr.$$.fragment,n),y(Ns.$$.fragment,n),y(Is.$$.fragment,n),y(Ls.$$.fragment,n),y(Qr.$$.fragment,n),y(Rr.$$.fragment,n),y(Ws.$$.fragment,n),y(Vr.$$.fragment,n),y(Qs.$$.fragment,n),y(Rs.$$.fragment,n),y(Jr.$$.fragment,n),y(Gr.$$.fragment,n),y(Ks.$$.fragment,n),y(ta.$$.fragment,n),y(Hs.$$.fragment,n),y(Vs.$$.fragment,n),y(Js.$$.fragment,n),y(oa.$$.fragment,n),y(sa.$$.fragment,n),y(Xs.$$.fragment,n),y(ia.$$.fragment,n),y(Ys.$$.fragment,n),y(Zs.$$.fragment,n),y(en.$$.fragment,n),y(la.$$.fragment,n),y(da.$$.fragment,n),y(on.$$.fragment,n),y(ua.$$.fragment,n),y(sn.$$.fragment,n),y(nn.$$.fragment,n),y(fa.$$.fragment,n),y(ma.$$.fragment,n),y(an.$$.fragment,n),y(ba.$$.fragment,n),y(ln.$$.fragment,n),y(dn.$$.fragment,n),y(cn.$$.fragment,n),y(ka.$$.fragment,n),y(wa.$$.fragment,n),y(hn.$$.fragment,n),y(Da.$$.fragment,n),y(un.$$.fragment,n),y(fn.$$.fragment,n),y(mn.$$.fragment,n),y(Fa.$$.fragment,n),y(Ba.$$.fragment,n),y(qa.$$.fragment,n),y(_n.$$.fragment,n),y(vn.$$.fragment,n),y(Aa.$$.fragment,n),y(Oa.$$.fragment,n),y(Ka.$$.fragment,n),y(kn.$$.fragment,n),y(wn.$$.fragment,n),y(Ha.$$.fragment,n),y(Va.$$.fragment,n),y(oi.$$.fragment,n),y($n.$$.fragment,n),y(yn.$$.fragment,n),y(si.$$.fragment,n),y(ni.$$.fragment,n),y(hi.$$.fragment,n),y(Fn.$$.fragment,n),y(Bn.$$.fragment,n),y(ui.$$.fragment,n),y(fi.$$.fragment,n),y(Ti.$$.fragment,n),y(xn.$$.fragment,n),y(Mn.$$.fragment,n),y($i.$$.fragment,n),y(yi.$$.fragment,n),y(zi.$$.fragment,n),y(zn.$$.fragment,n),y(Cn.$$.fragment,n),Bh=!0)},o(n){D(l.$$.fragment,n),D(B.$$.fragment,n),D(W.$$.fragment,n),D(Ie.$$.fragment,n),D(hs.$$.fragment,n),D(Zn.$$.fragment,n),D(er.$$.fragment,n),D(or.$$.fragment,n),D(sr.$$.fragment,n),D(ar.$$.fragment,n),D(ir.$$.fragment,n),D(pr.$$.fragment,n),D(vs.$$.fragment,n),D(bs.$$.fragment,n),D(hr.$$.fragment,n),D(ur.$$.fragment,n),D(vr.$$.fragment,n),D(ws.$$.fragment,n),D(Ts.$$.fragment,n),D($s.$$.fragment,n),D(br.$$.fragment,n),D(kr.$$.fragment,n),D(yr.$$.fragment,n),D(Ds.$$.fragment,n),D(Fs.$$.fragment,n),D(Bs.$$.fragment,n),D(Es.$$.fragment,n),D(xs.$$.fragment,n),D(Dr.$$.fragment,n),D(Fr.$$.fragment,n),D(Mr.$$.fragment,n),D(js.$$.fragment,n),D(zs.$$.fragment,n),D(jr.$$.fragment,n),D(zr.$$.fragment,n),D(Ar.$$.fragment,n),D(Ps.$$.fragment,n),D(qs.$$.fragment,n),D(As.$$.fragment,n),D(Or.$$.fragment,n),D(Nr.$$.fragment,n),D(Wr.$$.fragment,n),D(Ns.$$.fragment,n),D(Is.$$.fragment,n),D(Ls.$$.fragment,n),D(Qr.$$.fragment,n),D(Rr.$$.fragment,n),D(Ws.$$.fragment,n),D(Vr.$$.fragment,n),D(Qs.$$.fragment,n),D(Rs.$$.fragment,n),D(Jr.$$.fragment,n),D(Gr.$$.fragment,n),D(Ks.$$.fragment,n),D(ta.$$.fragment,n),D(Hs.$$.fragment,n),D(Vs.$$.fragment,n),D(Js.$$.fragment,n),D(oa.$$.fragment,n),D(sa.$$.fragment,n),D(Xs.$$.fragment,n),D(ia.$$.fragment,n),D(Ys.$$.fragment,n),D(Zs.$$.fragment,n),D(en.$$.fragment,n),D(la.$$.fragment,n),D(da.$$.fragment,n),D(on.$$.fragment,n),D(ua.$$.fragment,n),D(sn.$$.fragment,n),D(nn.$$.fragment,n),D(fa.$$.fragment,n),D(ma.$$.fragment,n),D(an.$$.fragment,n),D(ba.$$.fragment,n),D(ln.$$.fragment,n),D(dn.$$.fragment,n),D(cn.$$.fragment,n),D(ka.$$.fragment,n),D(wa.$$.fragment,n),D(hn.$$.fragment,n),D(Da.$$.fragment,n),D(un.$$.fragment,n),D(fn.$$.fragment,n),D(mn.$$.fragment,n),D(Fa.$$.fragment,n),D(Ba.$$.fragment,n),D(qa.$$.fragment,n),D(_n.$$.fragment,n),D(vn.$$.fragment,n),D(Aa.$$.fragment,n),D(Oa.$$.fragment,n),D(Ka.$$.fragment,n),D(kn.$$.fragment,n),D(wn.$$.fragment,n),D(Ha.$$.fragment,n),D(Va.$$.fragment,n),D(oi.$$.fragment,n),D($n.$$.fragment,n),D(yn.$$.fragment,n),D(si.$$.fragment,n),D(ni.$$.fragment,n),D(hi.$$.fragment,n),D(Fn.$$.fragment,n),D(Bn.$$.fragment,n),D(ui.$$.fragment,n),D(fi.$$.fragment,n),D(Ti.$$.fragment,n),D(xn.$$.fragment,n),D(Mn.$$.fragment,n),D($i.$$.fragment,n),D(yi.$$.fragment,n),D(zi.$$.fragment,n),D(zn.$$.fragment,n),D(Cn.$$.fragment,n),Bh=!1},d(n){t(d),n&&t(g),n&&t(c),F(l),n&&t(ge),n&&t(I),F(B),n&&t(_e),n&&t(O),n&&t(ve),n&&t(te),n&&t(q),n&&t(le),n&&t(be),n&&t(R),n&&t(ke),n&&t(C),n&&t(k),n&&t(x),n&&t(N),n&&t(S),F(W),n&&t(Re),n&&t(Q),F(Ie),F(hs),n&&t(Sp),n&&t(yo),F(Zn),n&&t(Wp),n&&t(zt),F(er),n&&t(Qp),n&&t(Do),F(or),n&&t(Rp),n&&t(Ct),F(sr),n&&t(Up),n&&t(Fo),F(ar),n&&t(Kp),n&&t(ht),F(ir),F(pr),F(vs),F(bs),n&&t(Hp),n&&t(Eo),F(hr),n&&t(Vp),n&&t(ut),F(ur),F(vr),F(ws),F(Ts),F($s),n&&t(Jp),n&&t(Mo),F(br),n&&t(Gp),n&&t(ft),F(kr),F(yr),F(Ds),F(Fs),F(Bs),F(Es),F(xs),n&&t(Xp),n&&t(zo),F(Dr),n&&t(Yp),n&&t(mt),F(Fr),F(Mr),F(js),F(zs),n&&t(Zp),n&&t(Po),F(jr),n&&t(eh),n&&t(gt),F(zr),F(Ar),F(Ps),F(qs),F(As),n&&t(th),n&&t(Ao),F(Or),n&&t(oh),n&&t(_t),F(Nr),F(Wr),F(Ns),F(Is),F(Ls),n&&t(sh),n&&t(Io),F(Qr),n&&t(nh),n&&t(at),F(Rr),F(Ws),F(Vr),F(Qs),F(Rs),n&&t(rh),n&&t(So),F(Jr),n&&t(ah),n&&t(it),F(Gr),F(Ks),F(ta),F(Hs),F(Vs),F(Js),n&&t(ih),n&&t(Qo),F(oa),n&&t(lh),n&&t(lt),F(sa),F(Xs),F(ia),F(Ys),F(Zs),F(en),n&&t(dh),n&&t(Uo),F(la),n&&t(ch),n&&t(dt),F(da),F(on),F(ua),F(sn),F(nn),n&&t(ph),n&&t(Ho),F(fa),n&&t(hh),n&&t(ct),F(ma),F(an),F(ba),F(ln),F(dn),F(cn),n&&t(uh),n&&t(Jo),F(ka),n&&t(fh),n&&t(pt),F(wa),F(hn),F(Da),F(un),F(fn),F(mn),n&&t(mh),n&&t(Yo),F(Fa),n&&t(gh),n&&t(Ze),F(Ba),F(qa),F(_n),F(vn),n&&t(_h),n&&t(es),F(Aa),n&&t(vh),n&&t(et),F(Oa),F(Ka),F(kn),F(wn),n&&t(bh),n&&t(os),F(Ha),n&&t(kh),n&&t(tt),F(Va),F(oi),F($n),F(yn),n&&t(wh),n&&t(ns),F(si),n&&t(Th),n&&t(ot),F(ni),F(hi),F(Fn),F(Bn),n&&t($h),n&&t(as),F(ui),n&&t(yh),n&&t(st),F(fi),F(Ti),F(xn),F(Mn),n&&t(Dh),n&&t(ls),F($i),n&&t(Fh),n&&t(nt),F(yi),F(zi),F(zn),F(Cn)}}}const nF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rF(E){return sD(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hF extends Z1{constructor(d){super();eD(this,d,rF,sF,tD,{})}}export{hF as default,nF as metadata};
