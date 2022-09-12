import{S as Z2,i as eD,s as tD,e as r,k as h,w,t as o,M as oD,c as a,d as t,m,a as i,x as T,h as s,b as f,G as e,g as _,y as $,q as y,o as D,B as F,v as sD,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as Le}from"../../chunks/Tip-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function rD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function aD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function iD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function lD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function dD(E){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function pD(E){let d,g,c,u,k;return u=new fe({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=o("Example of single-label classification:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function hD(E){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function mD(E){let d,g,c,u,k;return u=new fe({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=o("Example of multi-label classification:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function uD(E){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function fD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function gD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function _D(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function bD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function kD(E){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function vD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function wD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function TD(E){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function $D(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),C=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),ke=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ve=h(),z=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),ze=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=m(v),B=a(v,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),C=a(v,"UL",{});var N=i(C);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),ke=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),z=a(N,"LI",{});var W=i(z);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);Ce=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);ze=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,oe,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,C,x),e(C,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(C,ve),e(C,z),e(z,se),e(z,G),e(G,ce),e(z,Me),e(z,X),e(X,pe),e(C,je),e(C,L),e(L,he),e(L,Y),e(Y,Ce),_(v,ne,x),_(v,P,x),e(P,ze),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(B),v&&t(te),v&&t(C),v&&t(ne),v&&t(P)}}}function yD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function DD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function FD(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),C=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),ke=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ve=h(),z=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),ze=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=m(v),B=a(v,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),C=a(v,"UL",{});var N=i(C);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),ke=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),z=a(N,"LI",{});var W=i(z);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);Ce=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);ze=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,oe,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,C,x),e(C,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(C,ve),e(C,z),e(z,se),e(z,G),e(G,ce),e(z,Me),e(z,X),e(X,pe),e(C,je),e(C,L),e(L,he),e(L,Y),e(Y,Ce),_(v,ne,x),_(v,P,x),e(P,ze),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(B),v&&t(te),v&&t(C),v&&t(ne),v&&t(P)}}}function BD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function ED(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function xD(E){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function MD(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),C=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),ke=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ve=h(),z=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),ze=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=m(v),B=a(v,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),C=a(v,"UL",{});var N=i(C);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),ke=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),z=a(N,"LI",{});var W=i(z);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);Ce=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);ze=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,oe,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,C,x),e(C,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(C,ve),e(C,z),e(z,se),e(z,G),e(G,ce),e(z,Me),e(z,X),e(X,pe),e(C,je),e(C,L),e(L,he),e(L,Y),e(Y,Ce),_(v,ne,x),_(v,P,x),e(P,ze),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(B),v&&t(te),v&&t(C),v&&t(ne),v&&t(P)}}}function jD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function CD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function zD(E){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function PD(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),C=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),ke=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ve=h(),z=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),ze=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=m(v),B=a(v,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),C=a(v,"UL",{});var N=i(C);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),ke=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),z=a(N,"LI",{});var W=i(z);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);Ce=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);ze=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,oe,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,C,x),e(C,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(C,ve),e(C,z),e(z,se),e(z,G),e(G,ce),e(z,Me),e(z,X),e(X,pe),e(C,je),e(C,L),e(L,he),e(L,Y),e(Y,Ce),_(v,ne,x),_(v,P,x),e(P,ze),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(B),v&&t(te),v&&t(C),v&&t(ne),v&&t(P)}}}function qD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function AD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function OD(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),C=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),ke=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ve=h(),z=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),ze=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=m(v),B=a(v,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),C=a(v,"UL",{});var N=i(C);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),ke=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),z=a(N,"LI",{});var W=i(z);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);Ce=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);ze=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,oe,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,C,x),e(C,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(C,ve),e(C,z),e(z,se),e(z,G),e(G,ce),e(z,Me),e(z,X),e(X,pe),e(C,je),e(C,L),e(L,he),e(L,Y),e(Y,Ce),_(v,ne,x),_(v,P,x),e(P,ze),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(B),v&&t(te),v&&t(C),v&&t(ne),v&&t(P)}}}function ND(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function ID(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function LD(E){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function SD(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),B=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),De=o("fit()"),ie=o(" and "),V=r("code"),Fe=o("predict()"),de=o(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=o("Functional"),be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),C=r("ul"),q=r("li"),le=o("a single Tensor with "),K=r("code"),Ee=o("input_ids"),ke=o(" only and nothing else: "),R=r("code"),xe=o("model(input_ids)"),ve=h(),z=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=o("model([input_ids, attention_mask])"),Me=o(" or "),X=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),Ce=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),ze=o(`Note that when creating models and layers with
`),A=r("a"),Pe=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=s(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),oe=m(v),B=a(v,"P",{});var j=i(B);Te=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=s(Ve,"model.fit()"),Ve.forEach(t),_e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=s(Je,"model.fit()"),Je.forEach(t),ae=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);De=s(Ne,"fit()"),Ne.forEach(t),ie=s(j," and "),V=a(j,"CODE",{});var Ge=i(V);Fe=s(Ge,"predict()"),Ge.forEach(t),de=s(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=s(Xe,"Functional"),Xe.forEach(t),be=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),C=a(v,"UL",{});var N=i(C);q=a(N,"LI",{});var S=i(q);le=s(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=s(Oe,"input_ids"),Oe.forEach(t),ke=s(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=s(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),z=a(N,"LI",{});var W=i(z);se=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=s(W," or "),X=a(W,"CODE",{});var We=i(X);pe=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=s(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);Ce=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);ze=s(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=s(Ie,"subclassing"),Ie.forEach(t),qe=s(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,oe,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,De),e(B,ie),e(B,V),e(V,Fe),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,C,x),e(C,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(C,ve),e(C,z),e(z,se),e(z,G),e(G,ce),e(z,Me),e(z,X),e(X,pe),e(C,je),e(C,L),e(L,he),e(L,Y),e(Y,Ce),_(v,ne,x),_(v,P,x),e(P,ze),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(B),v&&t(te),v&&t(C),v&&t(ne),v&&t(P)}}}function WD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function QD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function RD(E){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function UD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function KD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function HD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function VD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function JD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function GD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function XD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function YD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function ZD(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function eF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function tF(E){let d,g,c,u,k;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=s(M,"Module"),M.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function oF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){D(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function sF(E){let d,g,c,u,k,l,p,M,we,ge,I,re,oe,B,Te,U,$e,_e,O,ye,ae,H,De,ie,V,Fe,de,J,Be,be,te,C,q,le,K,Ee,ke,R,xe,ve,z,se,G,ce,Me,X,pe,je,L,he,Y,Ce,ne,P,ze,A,Pe,qe,v,x,Ue,ee,Ke,He,j,Ve,Je,Ne,Ge,Xe,N,S,Oe,Se,W,Ye,We,Ae,Re,Q,Ie,zm,Gt,Pm,Si,qm,Am,Wi,Om,Nm,Yn,Im,Lm,Sm,$o,Wm,Qi,Qm,Rm,Ri,Um,Km,Hm,hs,Sp,yo,ms,Vl,Zn,Vm,Jl,Jm,Wp,Ct,er,Gm,Gl,Xm,Ym,us,Ui,Zm,eu,Ki,tu,ou,su,tr,nu,Hi,ru,au,Qp,Do,fs,Xl,or,iu,Yl,lu,Rp,zt,sr,du,nr,cu,Zl,pu,hu,mu,gs,Vi,uu,fu,Ji,gu,_u,bu,rr,ku,Gi,vu,wu,Up,Fo,_s,ed,ar,Tu,td,$u,Kp,ht,ir,yu,od,Du,Fu,lr,Bu,Xi,Eu,xu,Mu,dr,ju,cr,Cu,zu,Pu,Pt,pr,qu,Bo,Au,Yi,Ou,Nu,sd,Iu,Lu,Su,bs,Wu,ks,Hp,Eo,vs,nd,hr,Qu,rd,Ru,Vp,mt,mr,Uu,ur,Ku,ad,Hu,Vu,Ju,fr,Gu,Zi,Xu,Yu,Zu,gr,ef,_r,tf,of,sf,bt,br,nf,xo,rf,el,af,lf,id,df,cf,pf,ws,hf,Ts,mf,$s,Jp,Mo,ys,ld,kr,uf,dd,ff,Gp,ut,vr,gf,cd,_f,bf,wr,kf,tl,vf,wf,Tf,Tr,$f,$r,yf,Df,Ff,rt,yr,Bf,jo,Ef,ol,xf,Mf,pd,jf,Cf,zf,Ds,Pf,Fs,qf,Bs,Af,Es,Of,xs,Xp,Co,Ms,hd,Dr,Nf,md,If,Yp,ft,Fr,Lf,ud,Sf,Wf,Br,Qf,sl,Rf,Uf,Kf,Er,Hf,xr,Vf,Jf,Gf,qt,Mr,Xf,zo,Yf,nl,Zf,eg,fd,tg,og,sg,js,ng,Cs,Zp,Po,zs,gd,jr,rg,_d,ag,eh,gt,Cr,ig,bd,lg,dg,zr,cg,rl,pg,hg,mg,Pr,ug,qr,fg,gg,_g,kt,Ar,bg,qo,kg,al,vg,wg,kd,Tg,$g,yg,Ps,Dg,qs,Fg,As,th,Ao,Os,vd,Or,Bg,wd,Eg,oh,_t,Nr,xg,Oo,Mg,Td,jg,Cg,$d,zg,Pg,qg,Ir,Ag,il,Og,Ng,Ig,Lr,Lg,Sr,Sg,Wg,Qg,vt,Wr,Rg,No,Ug,ll,Kg,Hg,yd,Vg,Jg,Gg,Ns,Xg,Is,Yg,Ls,sh,Io,Ss,Dd,Qr,Zg,Fd,e_,nh,at,Rr,t_,Bd,o_,s_,Ur,n_,dl,r_,a_,i_,Kr,l_,Hr,d_,c_,p_,Ws,h_,At,Vr,m_,Lo,u_,cl,f_,g_,Ed,__,b_,k_,Qs,v_,Rs,rh,So,Us,xd,Jr,w_,Md,T_,ah,it,Gr,$_,Xr,y_,jd,D_,F_,B_,Yr,E_,pl,x_,M_,j_,Zr,C_,ea,z_,P_,q_,Ks,A_,wt,ta,O_,Wo,N_,hl,I_,L_,Cd,S_,W_,Q_,Hs,R_,Vs,U_,Js,ih,Qo,Gs,zd,oa,K_,Pd,H_,lh,lt,sa,V_,qd,J_,G_,na,X_,ml,Y_,Z_,eb,ra,tb,aa,ob,sb,nb,Xs,rb,Tt,ia,ab,Ro,ib,ul,lb,db,Ad,cb,pb,hb,Ys,mb,Zs,ub,en,dh,Uo,tn,Od,la,fb,Nd,gb,ch,dt,da,_b,Id,bb,kb,ca,vb,fl,wb,Tb,$b,pa,yb,ha,Db,Fb,Bb,on,Eb,Ot,ma,xb,Ko,Mb,gl,jb,Cb,Ld,zb,Pb,qb,sn,Ab,nn,ph,Ho,rn,Sd,ua,Ob,Wd,Nb,hh,ct,fa,Ib,Qd,Lb,Sb,ga,Wb,_l,Qb,Rb,Ub,_a,Kb,ba,Hb,Vb,Jb,an,Gb,$t,ka,Xb,Vo,Yb,bl,Zb,ek,Rd,tk,ok,sk,ln,nk,dn,rk,cn,mh,Jo,pn,Ud,va,ak,Kd,ik,uh,pt,wa,lk,Go,dk,Hd,ck,pk,Vd,hk,mk,uk,Ta,fk,kl,gk,_k,bk,$a,kk,ya,vk,wk,Tk,hn,$k,yt,Da,yk,Xo,Dk,vl,Fk,Bk,Jd,Ek,xk,Mk,mn,jk,un,Ck,fn,fh,Yo,gn,Gd,Fa,zk,Xd,Pk,gh,Ze,Ba,qk,Yd,Ak,Ok,Ea,Nk,wl,Ik,Lk,Sk,xa,Wk,Ma,Qk,Rk,Uk,Zd,Kk,Hk,Xt,ec,ja,Vk,Jk,tc,Ca,Gk,Xk,oc,za,Yk,Zk,sc,Pa,ev,tv,Nt,qa,ov,Zo,sv,nc,nv,rv,rc,av,iv,lv,_n,dv,bn,_h,es,kn,ac,Aa,cv,ic,pv,bh,et,Oa,hv,Na,mv,lc,uv,fv,gv,Ia,_v,Tl,bv,kv,vv,La,wv,Sa,Tv,$v,yv,dc,Dv,Fv,Yt,cc,Wa,Bv,Ev,pc,Qa,xv,Mv,hc,Ra,jv,Cv,mc,Ua,zv,Pv,It,Ka,qv,ts,Av,uc,Ov,Nv,fc,Iv,Lv,Sv,vn,Wv,wn,kh,os,Tn,gc,Ha,Qv,_c,Rv,vh,tt,Va,Uv,bc,Kv,Hv,Ja,Vv,$l,Jv,Gv,Xv,Ga,Yv,Xa,Zv,ew,tw,kc,ow,sw,Zt,vc,Ya,nw,rw,wc,Za,aw,iw,Tc,ei,lw,dw,$c,ti,cw,pw,Lt,oi,hw,ss,mw,yc,uw,fw,Dc,gw,_w,bw,$n,kw,yn,wh,ns,Dn,Fc,si,vw,Bc,ww,Th,ot,ni,Tw,Ec,$w,yw,ri,Dw,yl,Fw,Bw,Ew,ai,xw,ii,Mw,jw,Cw,xc,zw,Pw,eo,Mc,li,qw,Aw,jc,di,Ow,Nw,Cc,ci,Iw,Lw,zc,pi,Sw,Ww,St,hi,Qw,rs,Rw,Pc,Uw,Kw,qc,Hw,Vw,Jw,Fn,Gw,Bn,$h,as,En,Ac,mi,Xw,Oc,Yw,yh,st,ui,Zw,Nc,eT,tT,fi,oT,Dl,sT,nT,rT,gi,aT,_i,iT,lT,dT,Ic,cT,pT,to,Lc,bi,hT,mT,Sc,ki,uT,fT,Wc,vi,gT,_T,Qc,wi,bT,kT,Wt,Ti,vT,is,wT,Rc,TT,$T,Uc,yT,DT,FT,xn,BT,Mn,Dh,ls,jn,Kc,$i,ET,Hc,xT,Fh,nt,yi,MT,ds,jT,Vc,CT,zT,Jc,PT,qT,AT,Di,OT,Fl,NT,IT,LT,Fi,ST,Bi,WT,QT,RT,Gc,UT,KT,oo,Xc,Ei,HT,VT,Yc,xi,JT,GT,Zc,Mi,XT,YT,ep,ji,ZT,e$,Qt,Ci,t$,cs,o$,tp,s$,n$,op,r$,a$,i$,Cn,l$,zn,Bh;return l=new Qe({}),B=new Qe({}),W=new Qe({}),Ie=new Z({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L45"}}),hs=new me({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nD]},$$scope:{ctx:E}}}),Zn=new Qe({}),er=new Z({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L62"}}),or=new Qe({}),sr=new Z({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L79"}}),ar=new Qe({}),ir=new Z({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L459"}}),pr=new Z({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L531",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new Le({props:{$$slots:{default:[rD]},$$scope:{ctx:E}}}),ks=new me({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aD]},$$scope:{ctx:E}}}),hr=new Qe({}),mr=new Z({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L587"}}),br=new Z({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ws=new Le({props:{$$slots:{default:[iD]},$$scope:{ctx:E}}}),Ts=new me({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lD]},$$scope:{ctx:E}}}),$s=new me({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dD]},$$scope:{ctx:E}}}),kr=new Qe({}),vr=new Z({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L693"}}),yr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L727",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new Le({props:{$$slots:{default:[cD]},$$scope:{ctx:E}}}),Fs=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pD]},$$scope:{ctx:E}}}),Bs=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hD]},$$scope:{ctx:E}}}),Es=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[mD]},$$scope:{ctx:E}}}),xs=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[uD]},$$scope:{ctx:E}}}),Dr=new Qe({}),Fr=new Z({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1023"}}),Mr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1055",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),js=new Le({props:{$$slots:{default:[fD]},$$scope:{ctx:E}}}),Cs=new me({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gD]},$$scope:{ctx:E}}}),jr=new Qe({}),Cr=new Z({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L928"}}),Ar=new Z({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L960",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new Le({props:{$$slots:{default:[_D]},$$scope:{ctx:E}}}),qs=new me({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[bD]},$$scope:{ctx:E}}}),As=new me({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[kD]},$$scope:{ctx:E}}}),Or=new Qe({}),Nr=new Z({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L811"}}),Wr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L843",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new Le({props:{$$slots:{default:[vD]},$$scope:{ctx:E}}}),Is=new me({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[wD]},$$scope:{ctx:E}}}),Ls=new me({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[TD]},$$scope:{ctx:E}}}),Qr=new Qe({}),Rr=new Z({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527"}}),Ws=new Le({props:{$$slots:{default:[$D]},$$scope:{ctx:E}}}),Vr=new Z({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L532",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qs=new Le({props:{$$slots:{default:[yD]},$$scope:{ctx:E}}}),Rs=new me({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[DD]},$$scope:{ctx:E}}}),Jr=new Qe({}),Gr=new Z({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L614"}}),Ks=new Le({props:{$$slots:{default:[FD]},$$scope:{ctx:E}}}),ta=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L634",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Hs=new Le({props:{$$slots:{default:[BD]},$$scope:{ctx:E}}}),Vs=new me({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[ED]},$$scope:{ctx:E}}}),Js=new me({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[xD]},$$scope:{ctx:E}}}),oa=new Qe({}),sa=new Z({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L704"}}),Xs=new Le({props:{$$slots:{default:[MD]},$$scope:{ctx:E}}}),ia=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L721",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ys=new Le({props:{$$slots:{default:[jD]},$$scope:{ctx:E}}}),Zs=new me({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[CD]},$$scope:{ctx:E}}}),en=new me({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[zD]},$$scope:{ctx:E}}}),la=new Qe({}),da=new Z({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L867"}}),on=new Le({props:{$$slots:{default:[PD]},$$scope:{ctx:E}}}),ma=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L893",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),sn=new Le({props:{$$slots:{default:[qD]},$$scope:{ctx:E}}}),nn=new me({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AD]},$$scope:{ctx:E}}}),ua=new Qe({}),fa=new Z({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L791"}}),an=new Le({props:{$$slots:{default:[OD]},$$scope:{ctx:E}}}),ka=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L802",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Le({props:{$$slots:{default:[ND]},$$scope:{ctx:E}}}),dn=new me({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[ID]},$$scope:{ctx:E}}}),cn=new me({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[LD]},$$scope:{ctx:E}}}),va=new Qe({}),wa=new Z({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L992"}}),hn=new Le({props:{$$slots:{default:[SD]},$$scope:{ctx:E}}}),Da=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1003",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Le({props:{$$slots:{default:[WD]},$$scope:{ctx:E}}}),un=new me({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QD]},$$scope:{ctx:E}}}),fn=new me({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RD]},$$scope:{ctx:E}}}),Fa=new Qe({}),Ba=new Z({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),qa=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),_n=new Le({props:{$$slots:{default:[UD]},$$scope:{ctx:E}}}),bn=new me({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[KD]},$$scope:{ctx:E}}}),Aa=new Qe({}),Oa=new Z({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),Ka=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new Le({props:{$$slots:{default:[HD]},$$scope:{ctx:E}}}),wn=new me({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[VD]},$$scope:{ctx:E}}}),Ha=new Qe({}),Va=new Z({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),oi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new Le({props:{$$slots:{default:[JD]},$$scope:{ctx:E}}}),yn=new me({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GD]},$$scope:{ctx:E}}}),si=new Qe({}),ni=new Z({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),hi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new Le({props:{$$slots:{default:[XD]},$$scope:{ctx:E}}}),Bn=new me({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YD]},$$scope:{ctx:E}}}),mi=new Qe({}),ui=new Z({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),Ti=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xn=new Le({props:{$$slots:{default:[ZD]},$$scope:{ctx:E}}}),Mn=new me({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:E}}}),$i=new Qe({}),yi=new Z({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),Ci=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Le({props:{$$slots:{default:[tF]},$$scope:{ctx:E}}}),zn=new me({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[oF]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=h(),c=r("h1"),u=r("a"),k=r("span"),w(l.$$.fragment),p=h(),M=r("span"),we=o("DistilBERT"),ge=h(),I=r("h2"),re=r("a"),oe=r("span"),w(B.$$.fragment),Te=h(),U=r("span"),$e=o("Overview"),_e=h(),O=r("p"),ye=o("The DistilBERT model was proposed in the blog post "),ae=r("a"),H=o(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),De=o(", and the paper "),ie=r("a"),V=o(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),Fe=o(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),de=r("em"),J=o("bert-base-uncased"),Be=o(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),be=h(),te=r("p"),C=o("The abstract from the paper is the following:"),q=h(),le=r("p"),K=r("em"),Ee=o(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),ke=h(),R=r("p"),xe=o("Tips:"),ve=h(),z=r("ul"),se=r("li"),G=o("DistilBERT doesn\u2019t have "),ce=r("code"),Me=o("token_type_ids"),X=o(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),pe=r("code"),je=o("tokenizer.sep_token"),L=o(" (or "),he=r("code"),Y=o("[SEP]"),Ce=o(")."),ne=h(),P=r("li"),ze=o("DistilBERT doesn\u2019t have options to select the input positions ("),A=r("code"),Pe=o("position_ids"),qe=o(` input). This could be added if
necessary though, just let us know if you need this option.`),v=h(),x=r("p"),Ue=o("This model was contributed by "),ee=r("a"),Ke=o("victorsanh"),He=o(`. This model jax version was
contributed by `),j=r("a"),Ve=o("kamalkraj"),Je=o(". The original code can be found "),Ne=r("a"),Ge=o("here"),Xe=o("."),N=h(),S=r("h2"),Oe=r("a"),Se=r("span"),w(W.$$.fragment),Ye=h(),We=r("span"),Ae=o("DistilBertConfig"),Re=h(),Q=r("div"),w(Ie.$$.fragment),zm=h(),Gt=r("p"),Pm=o("This is the configuration class to store the configuration of a "),Si=r("a"),qm=o("DistilBertModel"),Am=o(" or a "),Wi=r("a"),Om=o("TFDistilBertModel"),Nm=o(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),Yn=r("a"),Im=o("distilbert-base-uncased"),Lm=o(" architecture."),Sm=h(),$o=r("p"),Wm=o("Configuration objects inherit from "),Qi=r("a"),Qm=o("PretrainedConfig"),Rm=o(` and can be used to control the model outputs. Read the
documentation from `),Ri=r("a"),Um=o("PretrainedConfig"),Km=o(" for more information."),Hm=h(),w(hs.$$.fragment),Sp=h(),yo=r("h2"),ms=r("a"),Vl=r("span"),w(Zn.$$.fragment),Vm=h(),Jl=r("span"),Jm=o("DistilBertTokenizer"),Wp=h(),Ct=r("div"),w(er.$$.fragment),Gm=h(),Gl=r("p"),Xm=o("Construct a DistilBERT tokenizer."),Ym=h(),us=r("p"),Ui=r("a"),Zm=o("DistilBertTokenizer"),eu=o(" is identical to "),Ki=r("a"),tu=o("BertTokenizer"),ou=o(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),su=h(),tr=r("p"),nu=o("Refer to superclass "),Hi=r("a"),ru=o("BertTokenizer"),au=o(" for usage examples and documentation concerning parameters."),Qp=h(),Do=r("h2"),fs=r("a"),Xl=r("span"),w(or.$$.fragment),iu=h(),Yl=r("span"),lu=o("DistilBertTokenizerFast"),Rp=h(),zt=r("div"),w(sr.$$.fragment),du=h(),nr=r("p"),cu=o("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),pu=o("tokenizers"),hu=o(" library)."),mu=h(),gs=r("p"),Vi=r("a"),uu=o("DistilBertTokenizerFast"),fu=o(" is identical to "),Ji=r("a"),gu=o("BertTokenizerFast"),_u=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bu=h(),rr=r("p"),ku=o("Refer to superclass "),Gi=r("a"),vu=o("BertTokenizerFast"),wu=o(" for usage examples and documentation concerning parameters."),Up=h(),Fo=r("h2"),_s=r("a"),ed=r("span"),w(ar.$$.fragment),Tu=h(),td=r("span"),$u=o("DistilBertModel"),Kp=h(),ht=r("div"),w(ir.$$.fragment),yu=h(),od=r("p"),Du=o("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Fu=h(),lr=r("p"),Bu=o("This model inherits from "),Xi=r("a"),Eu=o("PreTrainedModel"),xu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu=h(),dr=r("p"),ju=o("This model is also a PyTorch "),cr=r("a"),Cu=o("torch.nn.Module"),zu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu=h(),Pt=r("div"),w(pr.$$.fragment),qu=h(),Bo=r("p"),Au=o("The "),Yi=r("a"),Ou=o("DistilBertModel"),Nu=o(" forward method, overrides the "),sd=r("code"),Iu=o("__call__"),Lu=o(" special method."),Su=h(),w(bs.$$.fragment),Wu=h(),w(ks.$$.fragment),Hp=h(),Eo=r("h2"),vs=r("a"),nd=r("span"),w(hr.$$.fragment),Qu=h(),rd=r("span"),Ru=o("DistilBertForMaskedLM"),Vp=h(),mt=r("div"),w(mr.$$.fragment),Uu=h(),ur=r("p"),Ku=o("DistilBert Model with a "),ad=r("code"),Hu=o("masked language modeling"),Vu=o(" head on top."),Ju=h(),fr=r("p"),Gu=o("This model inherits from "),Zi=r("a"),Xu=o("PreTrainedModel"),Yu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu=h(),gr=r("p"),ef=o("This model is also a PyTorch "),_r=r("a"),tf=o("torch.nn.Module"),of=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sf=h(),bt=r("div"),w(br.$$.fragment),nf=h(),xo=r("p"),rf=o("The "),el=r("a"),af=o("DistilBertForMaskedLM"),lf=o(" forward method, overrides the "),id=r("code"),df=o("__call__"),cf=o(" special method."),pf=h(),w(ws.$$.fragment),hf=h(),w(Ts.$$.fragment),mf=h(),w($s.$$.fragment),Jp=h(),Mo=r("h2"),ys=r("a"),ld=r("span"),w(kr.$$.fragment),uf=h(),dd=r("span"),ff=o("DistilBertForSequenceClassification"),Gp=h(),ut=r("div"),w(vr.$$.fragment),gf=h(),cd=r("p"),_f=o(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=h(),wr=r("p"),kf=o("This model inherits from "),tl=r("a"),vf=o("PreTrainedModel"),wf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=h(),Tr=r("p"),$f=o("This model is also a PyTorch "),$r=r("a"),yf=o("torch.nn.Module"),Df=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff=h(),rt=r("div"),w(yr.$$.fragment),Bf=h(),jo=r("p"),Ef=o("The "),ol=r("a"),xf=o("DistilBertForSequenceClassification"),Mf=o(" forward method, overrides the "),pd=r("code"),jf=o("__call__"),Cf=o(" special method."),zf=h(),w(Ds.$$.fragment),Pf=h(),w(Fs.$$.fragment),qf=h(),w(Bs.$$.fragment),Af=h(),w(Es.$$.fragment),Of=h(),w(xs.$$.fragment),Xp=h(),Co=r("h2"),Ms=r("a"),hd=r("span"),w(Dr.$$.fragment),Nf=h(),md=r("span"),If=o("DistilBertForMultipleChoice"),Yp=h(),ft=r("div"),w(Fr.$$.fragment),Lf=h(),ud=r("p"),Sf=o(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wf=h(),Br=r("p"),Qf=o("This model inherits from "),sl=r("a"),Rf=o("PreTrainedModel"),Uf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kf=h(),Er=r("p"),Hf=o("This model is also a PyTorch "),xr=r("a"),Vf=o("torch.nn.Module"),Jf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=h(),qt=r("div"),w(Mr.$$.fragment),Xf=h(),zo=r("p"),Yf=o("The "),nl=r("a"),Zf=o("DistilBertForMultipleChoice"),eg=o(" forward method, overrides the "),fd=r("code"),tg=o("__call__"),og=o(" special method."),sg=h(),w(js.$$.fragment),ng=h(),w(Cs.$$.fragment),Zp=h(),Po=r("h2"),zs=r("a"),gd=r("span"),w(jr.$$.fragment),rg=h(),_d=r("span"),ag=o("DistilBertForTokenClassification"),eh=h(),gt=r("div"),w(Cr.$$.fragment),ig=h(),bd=r("p"),lg=o(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=h(),zr=r("p"),cg=o("This model inherits from "),rl=r("a"),pg=o("PreTrainedModel"),hg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg=h(),Pr=r("p"),ug=o("This model is also a PyTorch "),qr=r("a"),fg=o("torch.nn.Module"),gg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=h(),kt=r("div"),w(Ar.$$.fragment),bg=h(),qo=r("p"),kg=o("The "),al=r("a"),vg=o("DistilBertForTokenClassification"),wg=o(" forward method, overrides the "),kd=r("code"),Tg=o("__call__"),$g=o(" special method."),yg=h(),w(Ps.$$.fragment),Dg=h(),w(qs.$$.fragment),Fg=h(),w(As.$$.fragment),th=h(),Ao=r("h2"),Os=r("a"),vd=r("span"),w(Or.$$.fragment),Bg=h(),wd=r("span"),Eg=o("DistilBertForQuestionAnswering"),oh=h(),_t=r("div"),w(Nr.$$.fragment),xg=h(),Oo=r("p"),Mg=o(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Td=r("code"),jg=o("span start logits"),Cg=o(" and "),$d=r("code"),zg=o("span end logits"),Pg=o(")."),qg=h(),Ir=r("p"),Ag=o("This model inherits from "),il=r("a"),Og=o("PreTrainedModel"),Ng=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=h(),Lr=r("p"),Lg=o("This model is also a PyTorch "),Sr=r("a"),Sg=o("torch.nn.Module"),Wg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=h(),vt=r("div"),w(Wr.$$.fragment),Rg=h(),No=r("p"),Ug=o("The "),ll=r("a"),Kg=o("DistilBertForQuestionAnswering"),Hg=o(" forward method, overrides the "),yd=r("code"),Vg=o("__call__"),Jg=o(" special method."),Gg=h(),w(Ns.$$.fragment),Xg=h(),w(Is.$$.fragment),Yg=h(),w(Ls.$$.fragment),sh=h(),Io=r("h2"),Ss=r("a"),Dd=r("span"),w(Qr.$$.fragment),Zg=h(),Fd=r("span"),e_=o("TFDistilBertModel"),nh=h(),at=r("div"),w(Rr.$$.fragment),t_=h(),Bd=r("p"),o_=o("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),s_=h(),Ur=r("p"),n_=o("This model inherits from "),dl=r("a"),r_=o("TFPreTrainedModel"),a_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=h(),Kr=r("p"),l_=o("This model is also a "),Hr=r("a"),d_=o("tf.keras.Model"),c_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=h(),w(Ws.$$.fragment),h_=h(),At=r("div"),w(Vr.$$.fragment),m_=h(),Lo=r("p"),u_=o("The "),cl=r("a"),f_=o("TFDistilBertModel"),g_=o(" forward method, overrides the "),Ed=r("code"),__=o("__call__"),b_=o(" special method."),k_=h(),w(Qs.$$.fragment),v_=h(),w(Rs.$$.fragment),rh=h(),So=r("h2"),Us=r("a"),xd=r("span"),w(Jr.$$.fragment),w_=h(),Md=r("span"),T_=o("TFDistilBertForMaskedLM"),ah=h(),it=r("div"),w(Gr.$$.fragment),$_=h(),Xr=r("p"),y_=o("DistilBert Model with a "),jd=r("code"),D_=o("masked language modeling"),F_=o(" head on top."),B_=h(),Yr=r("p"),E_=o("This model inherits from "),pl=r("a"),x_=o("TFPreTrainedModel"),M_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=h(),Zr=r("p"),C_=o("This model is also a "),ea=r("a"),z_=o("tf.keras.Model"),P_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q_=h(),w(Ks.$$.fragment),A_=h(),wt=r("div"),w(ta.$$.fragment),O_=h(),Wo=r("p"),N_=o("The "),hl=r("a"),I_=o("TFDistilBertForMaskedLM"),L_=o(" forward method, overrides the "),Cd=r("code"),S_=o("__call__"),W_=o(" special method."),Q_=h(),w(Hs.$$.fragment),R_=h(),w(Vs.$$.fragment),U_=h(),w(Js.$$.fragment),ih=h(),Qo=r("h2"),Gs=r("a"),zd=r("span"),w(oa.$$.fragment),K_=h(),Pd=r("span"),H_=o("TFDistilBertForSequenceClassification"),lh=h(),lt=r("div"),w(sa.$$.fragment),V_=h(),qd=r("p"),J_=o(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=h(),na=r("p"),X_=o("This model inherits from "),ml=r("a"),Y_=o("TFPreTrainedModel"),Z_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=h(),ra=r("p"),tb=o("This model is also a "),aa=r("a"),ob=o("tf.keras.Model"),sb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb=h(),w(Xs.$$.fragment),rb=h(),Tt=r("div"),w(ia.$$.fragment),ab=h(),Ro=r("p"),ib=o("The "),ul=r("a"),lb=o("TFDistilBertForSequenceClassification"),db=o(" forward method, overrides the "),Ad=r("code"),cb=o("__call__"),pb=o(" special method."),hb=h(),w(Ys.$$.fragment),mb=h(),w(Zs.$$.fragment),ub=h(),w(en.$$.fragment),dh=h(),Uo=r("h2"),tn=r("a"),Od=r("span"),w(la.$$.fragment),fb=h(),Nd=r("span"),gb=o("TFDistilBertForMultipleChoice"),ch=h(),dt=r("div"),w(da.$$.fragment),_b=h(),Id=r("p"),bb=o(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),kb=h(),ca=r("p"),vb=o("This model inherits from "),fl=r("a"),wb=o("TFPreTrainedModel"),Tb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$b=h(),pa=r("p"),yb=o("This model is also a "),ha=r("a"),Db=o("tf.keras.Model"),Fb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=h(),w(on.$$.fragment),Eb=h(),Ot=r("div"),w(ma.$$.fragment),xb=h(),Ko=r("p"),Mb=o("The "),gl=r("a"),jb=o("TFDistilBertForMultipleChoice"),Cb=o(" forward method, overrides the "),Ld=r("code"),zb=o("__call__"),Pb=o(" special method."),qb=h(),w(sn.$$.fragment),Ab=h(),w(nn.$$.fragment),ph=h(),Ho=r("h2"),rn=r("a"),Sd=r("span"),w(ua.$$.fragment),Ob=h(),Wd=r("span"),Nb=o("TFDistilBertForTokenClassification"),hh=h(),ct=r("div"),w(fa.$$.fragment),Ib=h(),Qd=r("p"),Lb=o(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Sb=h(),ga=r("p"),Wb=o("This model inherits from "),_l=r("a"),Qb=o("TFPreTrainedModel"),Rb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub=h(),_a=r("p"),Kb=o("This model is also a "),ba=r("a"),Hb=o("tf.keras.Model"),Vb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jb=h(),w(an.$$.fragment),Gb=h(),$t=r("div"),w(ka.$$.fragment),Xb=h(),Vo=r("p"),Yb=o("The "),bl=r("a"),Zb=o("TFDistilBertForTokenClassification"),ek=o(" forward method, overrides the "),Rd=r("code"),tk=o("__call__"),ok=o(" special method."),sk=h(),w(ln.$$.fragment),nk=h(),w(dn.$$.fragment),rk=h(),w(cn.$$.fragment),mh=h(),Jo=r("h2"),pn=r("a"),Ud=r("span"),w(va.$$.fragment),ak=h(),Kd=r("span"),ik=o("TFDistilBertForQuestionAnswering"),uh=h(),pt=r("div"),w(wa.$$.fragment),lk=h(),Go=r("p"),dk=o(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Hd=r("code"),ck=o("span start logits"),pk=o(" and "),Vd=r("code"),hk=o("span end logits"),mk=o(")."),uk=h(),Ta=r("p"),fk=o("This model inherits from "),kl=r("a"),gk=o("TFPreTrainedModel"),_k=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bk=h(),$a=r("p"),kk=o("This model is also a "),ya=r("a"),vk=o("tf.keras.Model"),wk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tk=h(),w(hn.$$.fragment),$k=h(),yt=r("div"),w(Da.$$.fragment),yk=h(),Xo=r("p"),Dk=o("The "),vl=r("a"),Fk=o("TFDistilBertForQuestionAnswering"),Bk=o(" forward method, overrides the "),Jd=r("code"),Ek=o("__call__"),xk=o(" special method."),Mk=h(),w(mn.$$.fragment),jk=h(),w(un.$$.fragment),Ck=h(),w(fn.$$.fragment),fh=h(),Yo=r("h2"),gn=r("a"),Gd=r("span"),w(Fa.$$.fragment),zk=h(),Xd=r("span"),Pk=o("FlaxDistilBertModel"),gh=h(),Ze=r("div"),w(Ba.$$.fragment),qk=h(),Yd=r("p"),Ak=o("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ok=h(),Ea=r("p"),Nk=o("This model inherits from "),wl=r("a"),Ik=o("FlaxPreTrainedModel"),Lk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Sk=h(),xa=r("p"),Wk=o("This model is also a Flax Linen "),Ma=r("a"),Qk=o("flax.linen.Module"),Rk=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uk=h(),Zd=r("p"),Kk=o("Finally, this model supports inherent JAX features such as:"),Hk=h(),Xt=r("ul"),ec=r("li"),ja=r("a"),Vk=o("Just-In-Time (JIT) compilation"),Jk=h(),tc=r("li"),Ca=r("a"),Gk=o("Automatic Differentiation"),Xk=h(),oc=r("li"),za=r("a"),Yk=o("Vectorization"),Zk=h(),sc=r("li"),Pa=r("a"),ev=o("Parallelization"),tv=h(),Nt=r("div"),w(qa.$$.fragment),ov=h(),Zo=r("p"),sv=o("The "),nc=r("code"),nv=o("FlaxDistilBertPreTrainedModel"),rv=o(" forward method, overrides the "),rc=r("code"),av=o("__call__"),iv=o(" special method."),lv=h(),w(_n.$$.fragment),dv=h(),w(bn.$$.fragment),_h=h(),es=r("h2"),kn=r("a"),ac=r("span"),w(Aa.$$.fragment),cv=h(),ic=r("span"),pv=o("FlaxDistilBertForMaskedLM"),bh=h(),et=r("div"),w(Oa.$$.fragment),hv=h(),Na=r("p"),mv=o("DistilBert Model with a "),lc=r("code"),uv=o("language modeling"),fv=o(" head on top."),gv=h(),Ia=r("p"),_v=o("This model inherits from "),Tl=r("a"),bv=o("FlaxPreTrainedModel"),kv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vv=h(),La=r("p"),wv=o("This model is also a Flax Linen "),Sa=r("a"),Tv=o("flax.linen.Module"),$v=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yv=h(),dc=r("p"),Dv=o("Finally, this model supports inherent JAX features such as:"),Fv=h(),Yt=r("ul"),cc=r("li"),Wa=r("a"),Bv=o("Just-In-Time (JIT) compilation"),Ev=h(),pc=r("li"),Qa=r("a"),xv=o("Automatic Differentiation"),Mv=h(),hc=r("li"),Ra=r("a"),jv=o("Vectorization"),Cv=h(),mc=r("li"),Ua=r("a"),zv=o("Parallelization"),Pv=h(),It=r("div"),w(Ka.$$.fragment),qv=h(),ts=r("p"),Av=o("The "),uc=r("code"),Ov=o("FlaxDistilBertPreTrainedModel"),Nv=o(" forward method, overrides the "),fc=r("code"),Iv=o("__call__"),Lv=o(" special method."),Sv=h(),w(vn.$$.fragment),Wv=h(),w(wn.$$.fragment),kh=h(),os=r("h2"),Tn=r("a"),gc=r("span"),w(Ha.$$.fragment),Qv=h(),_c=r("span"),Rv=o("FlaxDistilBertForSequenceClassification"),vh=h(),tt=r("div"),w(Va.$$.fragment),Uv=h(),bc=r("p"),Kv=o(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Hv=h(),Ja=r("p"),Vv=o("This model inherits from "),$l=r("a"),Jv=o("FlaxPreTrainedModel"),Gv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xv=h(),Ga=r("p"),Yv=o("This model is also a Flax Linen "),Xa=r("a"),Zv=o("flax.linen.Module"),ew=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tw=h(),kc=r("p"),ow=o("Finally, this model supports inherent JAX features such as:"),sw=h(),Zt=r("ul"),vc=r("li"),Ya=r("a"),nw=o("Just-In-Time (JIT) compilation"),rw=h(),wc=r("li"),Za=r("a"),aw=o("Automatic Differentiation"),iw=h(),Tc=r("li"),ei=r("a"),lw=o("Vectorization"),dw=h(),$c=r("li"),ti=r("a"),cw=o("Parallelization"),pw=h(),Lt=r("div"),w(oi.$$.fragment),hw=h(),ss=r("p"),mw=o("The "),yc=r("code"),uw=o("FlaxDistilBertPreTrainedModel"),fw=o(" forward method, overrides the "),Dc=r("code"),gw=o("__call__"),_w=o(" special method."),bw=h(),w($n.$$.fragment),kw=h(),w(yn.$$.fragment),wh=h(),ns=r("h2"),Dn=r("a"),Fc=r("span"),w(si.$$.fragment),vw=h(),Bc=r("span"),ww=o("FlaxDistilBertForMultipleChoice"),Th=h(),ot=r("div"),w(ni.$$.fragment),Tw=h(),Ec=r("p"),$w=o(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yw=h(),ri=r("p"),Dw=o("This model inherits from "),yl=r("a"),Fw=o("FlaxPreTrainedModel"),Bw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ew=h(),ai=r("p"),xw=o("This model is also a Flax Linen "),ii=r("a"),Mw=o("flax.linen.Module"),jw=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cw=h(),xc=r("p"),zw=o("Finally, this model supports inherent JAX features such as:"),Pw=h(),eo=r("ul"),Mc=r("li"),li=r("a"),qw=o("Just-In-Time (JIT) compilation"),Aw=h(),jc=r("li"),di=r("a"),Ow=o("Automatic Differentiation"),Nw=h(),Cc=r("li"),ci=r("a"),Iw=o("Vectorization"),Lw=h(),zc=r("li"),pi=r("a"),Sw=o("Parallelization"),Ww=h(),St=r("div"),w(hi.$$.fragment),Qw=h(),rs=r("p"),Rw=o("The "),Pc=r("code"),Uw=o("FlaxDistilBertPreTrainedModel"),Kw=o(" forward method, overrides the "),qc=r("code"),Hw=o("__call__"),Vw=o(" special method."),Jw=h(),w(Fn.$$.fragment),Gw=h(),w(Bn.$$.fragment),$h=h(),as=r("h2"),En=r("a"),Ac=r("span"),w(mi.$$.fragment),Xw=h(),Oc=r("span"),Yw=o("FlaxDistilBertForTokenClassification"),yh=h(),st=r("div"),w(ui.$$.fragment),Zw=h(),Nc=r("p"),eT=o(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),tT=h(),fi=r("p"),oT=o("This model inherits from "),Dl=r("a"),sT=o("FlaxPreTrainedModel"),nT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rT=h(),gi=r("p"),aT=o("This model is also a Flax Linen "),_i=r("a"),iT=o("flax.linen.Module"),lT=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dT=h(),Ic=r("p"),cT=o("Finally, this model supports inherent JAX features such as:"),pT=h(),to=r("ul"),Lc=r("li"),bi=r("a"),hT=o("Just-In-Time (JIT) compilation"),mT=h(),Sc=r("li"),ki=r("a"),uT=o("Automatic Differentiation"),fT=h(),Wc=r("li"),vi=r("a"),gT=o("Vectorization"),_T=h(),Qc=r("li"),wi=r("a"),bT=o("Parallelization"),kT=h(),Wt=r("div"),w(Ti.$$.fragment),vT=h(),is=r("p"),wT=o("The "),Rc=r("code"),TT=o("FlaxDistilBertPreTrainedModel"),$T=o(" forward method, overrides the "),Uc=r("code"),yT=o("__call__"),DT=o(" special method."),FT=h(),w(xn.$$.fragment),BT=h(),w(Mn.$$.fragment),Dh=h(),ls=r("h2"),jn=r("a"),Kc=r("span"),w($i.$$.fragment),ET=h(),Hc=r("span"),xT=o("FlaxDistilBertForQuestionAnswering"),Fh=h(),nt=r("div"),w(yi.$$.fragment),MT=h(),ds=r("p"),jT=o(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=r("code"),CT=o("span start logits"),zT=o(" and "),Jc=r("code"),PT=o("span end logits"),qT=o(")."),AT=h(),Di=r("p"),OT=o("This model inherits from "),Fl=r("a"),NT=o("FlaxPreTrainedModel"),IT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),LT=h(),Fi=r("p"),ST=o("This model is also a Flax Linen "),Bi=r("a"),WT=o("flax.linen.Module"),QT=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RT=h(),Gc=r("p"),UT=o("Finally, this model supports inherent JAX features such as:"),KT=h(),oo=r("ul"),Xc=r("li"),Ei=r("a"),HT=o("Just-In-Time (JIT) compilation"),VT=h(),Yc=r("li"),xi=r("a"),JT=o("Automatic Differentiation"),GT=h(),Zc=r("li"),Mi=r("a"),XT=o("Vectorization"),YT=h(),ep=r("li"),ji=r("a"),ZT=o("Parallelization"),e$=h(),Qt=r("div"),w(Ci.$$.fragment),t$=h(),cs=r("p"),o$=o("The "),tp=r("code"),s$=o("FlaxDistilBertPreTrainedModel"),n$=o(" forward method, overrides the "),op=r("code"),r$=o("__call__"),a$=o(" special method."),i$=h(),w(Cn.$$.fragment),l$=h(),w(zn.$$.fragment),this.h()},l(n){const b=oD('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(n),c=a(n,"H1",{class:!0});var zi=i(c);u=a(zi,"A",{id:!0,class:!0,href:!0});var sp=i(u);k=a(sp,"SPAN",{});var np=i(k);T(l.$$.fragment,np),np.forEach(t),sp.forEach(t),p=m(zi),M=a(zi,"SPAN",{});var rp=i(M);we=s(rp,"DistilBERT"),rp.forEach(t),zi.forEach(t),ge=m(n),I=a(n,"H2",{class:!0});var Pi=i(I);re=a(Pi,"A",{id:!0,class:!0,href:!0});var ap=i(re);oe=a(ap,"SPAN",{});var ip=i(oe);T(B.$$.fragment,ip),ip.forEach(t),ap.forEach(t),Te=m(Pi),U=a(Pi,"SPAN",{});var lp=i(U);$e=s(lp,"Overview"),lp.forEach(t),Pi.forEach(t),_e=m(n),O=a(n,"P",{});var so=i(O);ye=s(so,"The DistilBERT model was proposed in the blog post "),ae=a(so,"A",{href:!0,rel:!0});var dp=i(ae);H=s(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),De=s(so,", and the paper "),ie=a(so,"A",{href:!0,rel:!0});var cp=i(ie);V=s(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),Fe=s(so,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),de=a(so,"EM",{});var pp=i(de);J=s(pp,"bert-base-uncased"),pp.forEach(t),Be=s(so,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),so.forEach(t),be=m(n),te=a(n,"P",{});var hp=i(te);C=s(hp,"The abstract from the paper is the following:"),hp.forEach(t),q=m(n),le=a(n,"P",{});var mp=i(le);K=a(mp,"EM",{});var up=i(K);Ee=s(up,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),up.forEach(t),mp.forEach(t),ke=m(n),R=a(n,"P",{});var fp=i(R);xe=s(fp,"Tips:"),fp.forEach(t),ve=m(n),z=a(n,"UL",{});var qi=i(z);se=a(qi,"LI",{});var no=i(se);G=s(no,"DistilBERT doesn\u2019t have "),ce=a(no,"CODE",{});var gp=i(ce);Me=s(gp,"token_type_ids"),gp.forEach(t),X=s(no,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),pe=a(no,"CODE",{});var _p=i(pe);je=s(_p,"tokenizer.sep_token"),_p.forEach(t),L=s(no," (or "),he=a(no,"CODE",{});var bp=i(he);Y=s(bp,"[SEP]"),bp.forEach(t),Ce=s(no,")."),no.forEach(t),ne=m(qi),P=a(qi,"LI",{});var Ai=i(P);ze=s(Ai,"DistilBERT doesn\u2019t have options to select the input positions ("),A=a(Ai,"CODE",{});var kp=i(A);Pe=s(kp,"position_ids"),kp.forEach(t),qe=s(Ai,` input). This could be added if
necessary though, just let us know if you need this option.`),Ai.forEach(t),qi.forEach(t),v=m(n),x=a(n,"P",{});var ro=i(x);Ue=s(ro,"This model was contributed by "),ee=a(ro,"A",{href:!0,rel:!0});var vp=i(ee);Ke=s(vp,"victorsanh"),vp.forEach(t),He=s(ro,`. This model jax version was
contributed by `),j=a(ro,"A",{href:!0,rel:!0});var wp=i(j);Ve=s(wp,"kamalkraj"),wp.forEach(t),Je=s(ro,". The original code can be found "),Ne=a(ro,"A",{href:!0,rel:!0});var Tp=i(Ne);Ge=s(Tp,"here"),Tp.forEach(t),Xe=s(ro,"."),ro.forEach(t),N=m(n),S=a(n,"H2",{class:!0});var Oi=i(S);Oe=a(Oi,"A",{id:!0,class:!0,href:!0});var $p=i(Oe);Se=a($p,"SPAN",{});var yp=i(Se);T(W.$$.fragment,yp),yp.forEach(t),$p.forEach(t),Ye=m(Oi),We=a(Oi,"SPAN",{});var Dp=i(We);Ae=s(Dp,"DistilBertConfig"),Dp.forEach(t),Oi.forEach(t),Re=m(n),Q=a(n,"DIV",{class:!0});var ao=i(Q);T(Ie.$$.fragment,ao),zm=m(ao),Gt=a(ao,"P",{});var io=i(Gt);Pm=s(io,"This is the configuration class to store the configuration of a "),Si=a(io,"A",{href:!0});var Fp=i(Si);qm=s(Fp,"DistilBertModel"),Fp.forEach(t),Am=s(io," or a "),Wi=a(io,"A",{href:!0});var Bp=i(Wi);Om=s(Bp,"TFDistilBertModel"),Bp.forEach(t),Nm=s(io,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),Yn=a(io,"A",{href:!0,rel:!0});var Ep=i(Yn);Im=s(Ep,"distilbert-base-uncased"),Ep.forEach(t),Lm=s(io," architecture."),io.forEach(t),Sm=m(ao),$o=a(ao,"P",{});var ps=i($o);Wm=s(ps,"Configuration objects inherit from "),Qi=a(ps,"A",{href:!0});var xp=i(Qi);Qm=s(xp,"PretrainedConfig"),xp.forEach(t),Rm=s(ps,` and can be used to control the model outputs. Read the
documentation from `),Ri=a(ps,"A",{href:!0});var Mp=i(Ri);Um=s(Mp,"PretrainedConfig"),Mp.forEach(t),Km=s(ps," for more information."),ps.forEach(t),Hm=m(ao),T(hs.$$.fragment,ao),ao.forEach(t),Sp=m(n),yo=a(n,"H2",{class:!0});var Ni=i(yo);ms=a(Ni,"A",{id:!0,class:!0,href:!0});var jp=i(ms);Vl=a(jp,"SPAN",{});var Cp=i(Vl);T(Zn.$$.fragment,Cp),Cp.forEach(t),jp.forEach(t),Vm=m(Ni),Jl=a(Ni,"SPAN",{});var zp=i(Jl);Jm=s(zp,"DistilBertTokenizer"),zp.forEach(t),Ni.forEach(t),Wp=m(n),Ct=a(n,"DIV",{class:!0});var lo=i(Ct);T(er.$$.fragment,lo),Gm=m(lo),Gl=a(lo,"P",{});var Pp=i(Gl);Xm=s(Pp,"Construct a DistilBERT tokenizer."),Pp.forEach(t),Ym=m(lo),us=a(lo,"P",{});var Pn=i(us);Ui=a(Pn,"A",{href:!0});var qp=i(Ui);Zm=s(qp,"DistilBertTokenizer"),qp.forEach(t),eu=s(Pn," is identical to "),Ki=a(Pn,"A",{href:!0});var Ap=i(Ki);tu=s(Ap,"BertTokenizer"),Ap.forEach(t),ou=s(Pn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Pn.forEach(t),su=m(lo),tr=a(lo,"P",{});var Ii=i(tr);nu=s(Ii,"Refer to superclass "),Hi=a(Ii,"A",{href:!0});var Op=i(Hi);ru=s(Op,"BertTokenizer"),Op.forEach(t),au=s(Ii," for usage examples and documentation concerning parameters."),Ii.forEach(t),lo.forEach(t),Qp=m(n),Do=a(n,"H2",{class:!0});var Li=i(Do);fs=a(Li,"A",{id:!0,class:!0,href:!0});var Np=i(fs);Xl=a(Np,"SPAN",{});var Ip=i(Xl);T(or.$$.fragment,Ip),Ip.forEach(t),Np.forEach(t),iu=m(Li),Yl=a(Li,"SPAN",{});var d$=i(Yl);lu=s(d$,"DistilBertTokenizerFast"),d$.forEach(t),Li.forEach(t),Rp=m(n),zt=a(n,"DIV",{class:!0});var qn=i(zt);T(sr.$$.fragment,qn),du=m(qn),nr=a(qn,"P",{});var Eh=i(nr);cu=s(Eh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Zl=a(Eh,"EM",{});var c$=i(Zl);pu=s(c$,"tokenizers"),c$.forEach(t),hu=s(Eh," library)."),Eh.forEach(t),mu=m(qn),gs=a(qn,"P",{});var Lp=i(gs);Vi=a(Lp,"A",{href:!0});var p$=i(Vi);uu=s(p$,"DistilBertTokenizerFast"),p$.forEach(t),fu=s(Lp," is identical to "),Ji=a(Lp,"A",{href:!0});var h$=i(Ji);gu=s(h$,"BertTokenizerFast"),h$.forEach(t),_u=s(Lp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Lp.forEach(t),bu=m(qn),rr=a(qn,"P",{});var xh=i(rr);ku=s(xh,"Refer to superclass "),Gi=a(xh,"A",{href:!0});var m$=i(Gi);vu=s(m$,"BertTokenizerFast"),m$.forEach(t),wu=s(xh," for usage examples and documentation concerning parameters."),xh.forEach(t),qn.forEach(t),Up=m(n),Fo=a(n,"H2",{class:!0});var Mh=i(Fo);_s=a(Mh,"A",{id:!0,class:!0,href:!0});var u$=i(_s);ed=a(u$,"SPAN",{});var f$=i(ed);T(ar.$$.fragment,f$),f$.forEach(t),u$.forEach(t),Tu=m(Mh),td=a(Mh,"SPAN",{});var g$=i(td);$u=s(g$,"DistilBertModel"),g$.forEach(t),Mh.forEach(t),Kp=m(n),ht=a(n,"DIV",{class:!0});var co=i(ht);T(ir.$$.fragment,co),yu=m(co),od=a(co,"P",{});var _$=i(od);Du=s(_$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_$.forEach(t),Fu=m(co),lr=a(co,"P",{});var jh=i(lr);Bu=s(jh,"This model inherits from "),Xi=a(jh,"A",{href:!0});var b$=i(Xi);Eu=s(b$,"PreTrainedModel"),b$.forEach(t),xu=s(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),Mu=m(co),dr=a(co,"P",{});var Ch=i(dr);ju=s(Ch,"This model is also a PyTorch "),cr=a(Ch,"A",{href:!0,rel:!0});var k$=i(cr);Cu=s(k$,"torch.nn.Module"),k$.forEach(t),zu=s(Ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ch.forEach(t),Pu=m(co),Pt=a(co,"DIV",{class:!0});var An=i(Pt);T(pr.$$.fragment,An),qu=m(An),Bo=a(An,"P",{});var Bl=i(Bo);Au=s(Bl,"The "),Yi=a(Bl,"A",{href:!0});var v$=i(Yi);Ou=s(v$,"DistilBertModel"),v$.forEach(t),Nu=s(Bl," forward method, overrides the "),sd=a(Bl,"CODE",{});var w$=i(sd);Iu=s(w$,"__call__"),w$.forEach(t),Lu=s(Bl," special method."),Bl.forEach(t),Su=m(An),T(bs.$$.fragment,An),Wu=m(An),T(ks.$$.fragment,An),An.forEach(t),co.forEach(t),Hp=m(n),Eo=a(n,"H2",{class:!0});var zh=i(Eo);vs=a(zh,"A",{id:!0,class:!0,href:!0});var T$=i(vs);nd=a(T$,"SPAN",{});var $$=i(nd);T(hr.$$.fragment,$$),$$.forEach(t),T$.forEach(t),Qu=m(zh),rd=a(zh,"SPAN",{});var y$=i(rd);Ru=s(y$,"DistilBertForMaskedLM"),y$.forEach(t),zh.forEach(t),Vp=m(n),mt=a(n,"DIV",{class:!0});var po=i(mt);T(mr.$$.fragment,po),Uu=m(po),ur=a(po,"P",{});var Ph=i(ur);Ku=s(Ph,"DistilBert Model with a "),ad=a(Ph,"CODE",{});var D$=i(ad);Hu=s(D$,"masked language modeling"),D$.forEach(t),Vu=s(Ph," head on top."),Ph.forEach(t),Ju=m(po),fr=a(po,"P",{});var qh=i(fr);Gu=s(qh,"This model inherits from "),Zi=a(qh,"A",{href:!0});var F$=i(Zi);Xu=s(F$,"PreTrainedModel"),F$.forEach(t),Yu=s(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),Zu=m(po),gr=a(po,"P",{});var Ah=i(gr);ef=s(Ah,"This model is also a PyTorch "),_r=a(Ah,"A",{href:!0,rel:!0});var B$=i(_r);tf=s(B$,"torch.nn.Module"),B$.forEach(t),of=s(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),sf=m(po),bt=a(po,"DIV",{class:!0});var ho=i(bt);T(br.$$.fragment,ho),nf=m(ho),xo=a(ho,"P",{});var El=i(xo);rf=s(El,"The "),el=a(El,"A",{href:!0});var E$=i(el);af=s(E$,"DistilBertForMaskedLM"),E$.forEach(t),lf=s(El," forward method, overrides the "),id=a(El,"CODE",{});var x$=i(id);df=s(x$,"__call__"),x$.forEach(t),cf=s(El," special method."),El.forEach(t),pf=m(ho),T(ws.$$.fragment,ho),hf=m(ho),T(Ts.$$.fragment,ho),mf=m(ho),T($s.$$.fragment,ho),ho.forEach(t),po.forEach(t),Jp=m(n),Mo=a(n,"H2",{class:!0});var Oh=i(Mo);ys=a(Oh,"A",{id:!0,class:!0,href:!0});var M$=i(ys);ld=a(M$,"SPAN",{});var j$=i(ld);T(kr.$$.fragment,j$),j$.forEach(t),M$.forEach(t),uf=m(Oh),dd=a(Oh,"SPAN",{});var C$=i(dd);ff=s(C$,"DistilBertForSequenceClassification"),C$.forEach(t),Oh.forEach(t),Gp=m(n),ut=a(n,"DIV",{class:!0});var mo=i(ut);T(vr.$$.fragment,mo),gf=m(mo),cd=a(mo,"P",{});var z$=i(cd);_f=s(z$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),z$.forEach(t),bf=m(mo),wr=a(mo,"P",{});var Nh=i(wr);kf=s(Nh,"This model inherits from "),tl=a(Nh,"A",{href:!0});var P$=i(tl);vf=s(P$,"PreTrainedModel"),P$.forEach(t),wf=s(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),Tf=m(mo),Tr=a(mo,"P",{});var Ih=i(Tr);$f=s(Ih,"This model is also a PyTorch "),$r=a(Ih,"A",{href:!0,rel:!0});var q$=i($r);yf=s(q$,"torch.nn.Module"),q$.forEach(t),Df=s(Ih,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ih.forEach(t),Ff=m(mo),rt=a(mo,"DIV",{class:!0});var Dt=i(rt);T(yr.$$.fragment,Dt),Bf=m(Dt),jo=a(Dt,"P",{});var xl=i(jo);Ef=s(xl,"The "),ol=a(xl,"A",{href:!0});var A$=i(ol);xf=s(A$,"DistilBertForSequenceClassification"),A$.forEach(t),Mf=s(xl," forward method, overrides the "),pd=a(xl,"CODE",{});var O$=i(pd);jf=s(O$,"__call__"),O$.forEach(t),Cf=s(xl," special method."),xl.forEach(t),zf=m(Dt),T(Ds.$$.fragment,Dt),Pf=m(Dt),T(Fs.$$.fragment,Dt),qf=m(Dt),T(Bs.$$.fragment,Dt),Af=m(Dt),T(Es.$$.fragment,Dt),Of=m(Dt),T(xs.$$.fragment,Dt),Dt.forEach(t),mo.forEach(t),Xp=m(n),Co=a(n,"H2",{class:!0});var Lh=i(Co);Ms=a(Lh,"A",{id:!0,class:!0,href:!0});var N$=i(Ms);hd=a(N$,"SPAN",{});var I$=i(hd);T(Dr.$$.fragment,I$),I$.forEach(t),N$.forEach(t),Nf=m(Lh),md=a(Lh,"SPAN",{});var L$=i(md);If=s(L$,"DistilBertForMultipleChoice"),L$.forEach(t),Lh.forEach(t),Yp=m(n),ft=a(n,"DIV",{class:!0});var uo=i(ft);T(Fr.$$.fragment,uo),Lf=m(uo),ud=a(uo,"P",{});var S$=i(ud);Sf=s(S$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),S$.forEach(t),Wf=m(uo),Br=a(uo,"P",{});var Sh=i(Br);Qf=s(Sh,"This model inherits from "),sl=a(Sh,"A",{href:!0});var W$=i(sl);Rf=s(W$,"PreTrainedModel"),W$.forEach(t),Uf=s(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),Kf=m(uo),Er=a(uo,"P",{});var Wh=i(Er);Hf=s(Wh,"This model is also a PyTorch "),xr=a(Wh,"A",{href:!0,rel:!0});var Q$=i(xr);Vf=s(Q$,"torch.nn.Module"),Q$.forEach(t),Jf=s(Wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wh.forEach(t),Gf=m(uo),qt=a(uo,"DIV",{class:!0});var On=i(qt);T(Mr.$$.fragment,On),Xf=m(On),zo=a(On,"P",{});var Ml=i(zo);Yf=s(Ml,"The "),nl=a(Ml,"A",{href:!0});var R$=i(nl);Zf=s(R$,"DistilBertForMultipleChoice"),R$.forEach(t),eg=s(Ml," forward method, overrides the "),fd=a(Ml,"CODE",{});var U$=i(fd);tg=s(U$,"__call__"),U$.forEach(t),og=s(Ml," special method."),Ml.forEach(t),sg=m(On),T(js.$$.fragment,On),ng=m(On),T(Cs.$$.fragment,On),On.forEach(t),uo.forEach(t),Zp=m(n),Po=a(n,"H2",{class:!0});var Qh=i(Po);zs=a(Qh,"A",{id:!0,class:!0,href:!0});var K$=i(zs);gd=a(K$,"SPAN",{});var H$=i(gd);T(jr.$$.fragment,H$),H$.forEach(t),K$.forEach(t),rg=m(Qh),_d=a(Qh,"SPAN",{});var V$=i(_d);ag=s(V$,"DistilBertForTokenClassification"),V$.forEach(t),Qh.forEach(t),eh=m(n),gt=a(n,"DIV",{class:!0});var fo=i(gt);T(Cr.$$.fragment,fo),ig=m(fo),bd=a(fo,"P",{});var J$=i(bd);lg=s(J$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),J$.forEach(t),dg=m(fo),zr=a(fo,"P",{});var Rh=i(zr);cg=s(Rh,"This model inherits from "),rl=a(Rh,"A",{href:!0});var G$=i(rl);pg=s(G$,"PreTrainedModel"),G$.forEach(t),hg=s(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),mg=m(fo),Pr=a(fo,"P",{});var Uh=i(Pr);ug=s(Uh,"This model is also a PyTorch "),qr=a(Uh,"A",{href:!0,rel:!0});var X$=i(qr);fg=s(X$,"torch.nn.Module"),X$.forEach(t),gg=s(Uh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uh.forEach(t),_g=m(fo),kt=a(fo,"DIV",{class:!0});var go=i(kt);T(Ar.$$.fragment,go),bg=m(go),qo=a(go,"P",{});var jl=i(qo);kg=s(jl,"The "),al=a(jl,"A",{href:!0});var Y$=i(al);vg=s(Y$,"DistilBertForTokenClassification"),Y$.forEach(t),wg=s(jl," forward method, overrides the "),kd=a(jl,"CODE",{});var Z$=i(kd);Tg=s(Z$,"__call__"),Z$.forEach(t),$g=s(jl," special method."),jl.forEach(t),yg=m(go),T(Ps.$$.fragment,go),Dg=m(go),T(qs.$$.fragment,go),Fg=m(go),T(As.$$.fragment,go),go.forEach(t),fo.forEach(t),th=m(n),Ao=a(n,"H2",{class:!0});var Kh=i(Ao);Os=a(Kh,"A",{id:!0,class:!0,href:!0});var ey=i(Os);vd=a(ey,"SPAN",{});var ty=i(vd);T(Or.$$.fragment,ty),ty.forEach(t),ey.forEach(t),Bg=m(Kh),wd=a(Kh,"SPAN",{});var oy=i(wd);Eg=s(oy,"DistilBertForQuestionAnswering"),oy.forEach(t),Kh.forEach(t),oh=m(n),_t=a(n,"DIV",{class:!0});var _o=i(_t);T(Nr.$$.fragment,_o),xg=m(_o),Oo=a(_o,"P",{});var Cl=i(Oo);Mg=s(Cl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Td=a(Cl,"CODE",{});var sy=i(Td);jg=s(sy,"span start logits"),sy.forEach(t),Cg=s(Cl," and "),$d=a(Cl,"CODE",{});var ny=i($d);zg=s(ny,"span end logits"),ny.forEach(t),Pg=s(Cl,")."),Cl.forEach(t),qg=m(_o),Ir=a(_o,"P",{});var Hh=i(Ir);Ag=s(Hh,"This model inherits from "),il=a(Hh,"A",{href:!0});var ry=i(il);Og=s(ry,"PreTrainedModel"),ry.forEach(t),Ng=s(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh.forEach(t),Ig=m(_o),Lr=a(_o,"P",{});var Vh=i(Lr);Lg=s(Vh,"This model is also a PyTorch "),Sr=a(Vh,"A",{href:!0,rel:!0});var ay=i(Sr);Sg=s(ay,"torch.nn.Module"),ay.forEach(t),Wg=s(Vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vh.forEach(t),Qg=m(_o),vt=a(_o,"DIV",{class:!0});var bo=i(vt);T(Wr.$$.fragment,bo),Rg=m(bo),No=a(bo,"P",{});var zl=i(No);Ug=s(zl,"The "),ll=a(zl,"A",{href:!0});var iy=i(ll);Kg=s(iy,"DistilBertForQuestionAnswering"),iy.forEach(t),Hg=s(zl," forward method, overrides the "),yd=a(zl,"CODE",{});var ly=i(yd);Vg=s(ly,"__call__"),ly.forEach(t),Jg=s(zl," special method."),zl.forEach(t),Gg=m(bo),T(Ns.$$.fragment,bo),Xg=m(bo),T(Is.$$.fragment,bo),Yg=m(bo),T(Ls.$$.fragment,bo),bo.forEach(t),_o.forEach(t),sh=m(n),Io=a(n,"H2",{class:!0});var Jh=i(Io);Ss=a(Jh,"A",{id:!0,class:!0,href:!0});var dy=i(Ss);Dd=a(dy,"SPAN",{});var cy=i(Dd);T(Qr.$$.fragment,cy),cy.forEach(t),dy.forEach(t),Zg=m(Jh),Fd=a(Jh,"SPAN",{});var py=i(Fd);e_=s(py,"TFDistilBertModel"),py.forEach(t),Jh.forEach(t),nh=m(n),at=a(n,"DIV",{class:!0});var Rt=i(at);T(Rr.$$.fragment,Rt),t_=m(Rt),Bd=a(Rt,"P",{});var hy=i(Bd);o_=s(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),s_=m(Rt),Ur=a(Rt,"P",{});var Gh=i(Ur);n_=s(Gh,"This model inherits from "),dl=a(Gh,"A",{href:!0});var my=i(dl);r_=s(my,"TFPreTrainedModel"),my.forEach(t),a_=s(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),i_=m(Rt),Kr=a(Rt,"P",{});var Xh=i(Kr);l_=s(Xh,"This model is also a "),Hr=a(Xh,"A",{href:!0,rel:!0});var uy=i(Hr);d_=s(uy,"tf.keras.Model"),uy.forEach(t),c_=s(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),p_=m(Rt),T(Ws.$$.fragment,Rt),h_=m(Rt),At=a(Rt,"DIV",{class:!0});var Nn=i(At);T(Vr.$$.fragment,Nn),m_=m(Nn),Lo=a(Nn,"P",{});var Pl=i(Lo);u_=s(Pl,"The "),cl=a(Pl,"A",{href:!0});var fy=i(cl);f_=s(fy,"TFDistilBertModel"),fy.forEach(t),g_=s(Pl," forward method, overrides the "),Ed=a(Pl,"CODE",{});var gy=i(Ed);__=s(gy,"__call__"),gy.forEach(t),b_=s(Pl," special method."),Pl.forEach(t),k_=m(Nn),T(Qs.$$.fragment,Nn),v_=m(Nn),T(Rs.$$.fragment,Nn),Nn.forEach(t),Rt.forEach(t),rh=m(n),So=a(n,"H2",{class:!0});var Yh=i(So);Us=a(Yh,"A",{id:!0,class:!0,href:!0});var _y=i(Us);xd=a(_y,"SPAN",{});var by=i(xd);T(Jr.$$.fragment,by),by.forEach(t),_y.forEach(t),w_=m(Yh),Md=a(Yh,"SPAN",{});var ky=i(Md);T_=s(ky,"TFDistilBertForMaskedLM"),ky.forEach(t),Yh.forEach(t),ah=m(n),it=a(n,"DIV",{class:!0});var Ut=i(it);T(Gr.$$.fragment,Ut),$_=m(Ut),Xr=a(Ut,"P",{});var Zh=i(Xr);y_=s(Zh,"DistilBert Model with a "),jd=a(Zh,"CODE",{});var vy=i(jd);D_=s(vy,"masked language modeling"),vy.forEach(t),F_=s(Zh," head on top."),Zh.forEach(t),B_=m(Ut),Yr=a(Ut,"P",{});var em=i(Yr);E_=s(em,"This model inherits from "),pl=a(em,"A",{href:!0});var wy=i(pl);x_=s(wy,"TFPreTrainedModel"),wy.forEach(t),M_=s(em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em.forEach(t),j_=m(Ut),Zr=a(Ut,"P",{});var tm=i(Zr);C_=s(tm,"This model is also a "),ea=a(tm,"A",{href:!0,rel:!0});var Ty=i(ea);z_=s(Ty,"tf.keras.Model"),Ty.forEach(t),P_=s(tm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm.forEach(t),q_=m(Ut),T(Ks.$$.fragment,Ut),A_=m(Ut),wt=a(Ut,"DIV",{class:!0});var ko=i(wt);T(ta.$$.fragment,ko),O_=m(ko),Wo=a(ko,"P",{});var ql=i(Wo);N_=s(ql,"The "),hl=a(ql,"A",{href:!0});var $y=i(hl);I_=s($y,"TFDistilBertForMaskedLM"),$y.forEach(t),L_=s(ql," forward method, overrides the "),Cd=a(ql,"CODE",{});var yy=i(Cd);S_=s(yy,"__call__"),yy.forEach(t),W_=s(ql," special method."),ql.forEach(t),Q_=m(ko),T(Hs.$$.fragment,ko),R_=m(ko),T(Vs.$$.fragment,ko),U_=m(ko),T(Js.$$.fragment,ko),ko.forEach(t),Ut.forEach(t),ih=m(n),Qo=a(n,"H2",{class:!0});var om=i(Qo);Gs=a(om,"A",{id:!0,class:!0,href:!0});var Dy=i(Gs);zd=a(Dy,"SPAN",{});var Fy=i(zd);T(oa.$$.fragment,Fy),Fy.forEach(t),Dy.forEach(t),K_=m(om),Pd=a(om,"SPAN",{});var By=i(Pd);H_=s(By,"TFDistilBertForSequenceClassification"),By.forEach(t),om.forEach(t),lh=m(n),lt=a(n,"DIV",{class:!0});var Kt=i(lt);T(sa.$$.fragment,Kt),V_=m(Kt),qd=a(Kt,"P",{});var Ey=i(qd);J_=s(Ey,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ey.forEach(t),G_=m(Kt),na=a(Kt,"P",{});var sm=i(na);X_=s(sm,"This model inherits from "),ml=a(sm,"A",{href:!0});var xy=i(ml);Y_=s(xy,"TFPreTrainedModel"),xy.forEach(t),Z_=s(sm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm.forEach(t),eb=m(Kt),ra=a(Kt,"P",{});var nm=i(ra);tb=s(nm,"This model is also a "),aa=a(nm,"A",{href:!0,rel:!0});var My=i(aa);ob=s(My,"tf.keras.Model"),My.forEach(t),sb=s(nm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nm.forEach(t),nb=m(Kt),T(Xs.$$.fragment,Kt),rb=m(Kt),Tt=a(Kt,"DIV",{class:!0});var vo=i(Tt);T(ia.$$.fragment,vo),ab=m(vo),Ro=a(vo,"P",{});var Al=i(Ro);ib=s(Al,"The "),ul=a(Al,"A",{href:!0});var jy=i(ul);lb=s(jy,"TFDistilBertForSequenceClassification"),jy.forEach(t),db=s(Al," forward method, overrides the "),Ad=a(Al,"CODE",{});var Cy=i(Ad);cb=s(Cy,"__call__"),Cy.forEach(t),pb=s(Al," special method."),Al.forEach(t),hb=m(vo),T(Ys.$$.fragment,vo),mb=m(vo),T(Zs.$$.fragment,vo),ub=m(vo),T(en.$$.fragment,vo),vo.forEach(t),Kt.forEach(t),dh=m(n),Uo=a(n,"H2",{class:!0});var rm=i(Uo);tn=a(rm,"A",{id:!0,class:!0,href:!0});var zy=i(tn);Od=a(zy,"SPAN",{});var Py=i(Od);T(la.$$.fragment,Py),Py.forEach(t),zy.forEach(t),fb=m(rm),Nd=a(rm,"SPAN",{});var qy=i(Nd);gb=s(qy,"TFDistilBertForMultipleChoice"),qy.forEach(t),rm.forEach(t),ch=m(n),dt=a(n,"DIV",{class:!0});var Ht=i(dt);T(da.$$.fragment,Ht),_b=m(Ht),Id=a(Ht,"P",{});var Ay=i(Id);bb=s(Ay,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ay.forEach(t),kb=m(Ht),ca=a(Ht,"P",{});var am=i(ca);vb=s(am,"This model inherits from "),fl=a(am,"A",{href:!0});var Oy=i(fl);wb=s(Oy,"TFPreTrainedModel"),Oy.forEach(t),Tb=s(am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),am.forEach(t),$b=m(Ht),pa=a(Ht,"P",{});var im=i(pa);yb=s(im,"This model is also a "),ha=a(im,"A",{href:!0,rel:!0});var Ny=i(ha);Db=s(Ny,"tf.keras.Model"),Ny.forEach(t),Fb=s(im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),im.forEach(t),Bb=m(Ht),T(on.$$.fragment,Ht),Eb=m(Ht),Ot=a(Ht,"DIV",{class:!0});var In=i(Ot);T(ma.$$.fragment,In),xb=m(In),Ko=a(In,"P",{});var Ol=i(Ko);Mb=s(Ol,"The "),gl=a(Ol,"A",{href:!0});var Iy=i(gl);jb=s(Iy,"TFDistilBertForMultipleChoice"),Iy.forEach(t),Cb=s(Ol," forward method, overrides the "),Ld=a(Ol,"CODE",{});var Ly=i(Ld);zb=s(Ly,"__call__"),Ly.forEach(t),Pb=s(Ol," special method."),Ol.forEach(t),qb=m(In),T(sn.$$.fragment,In),Ab=m(In),T(nn.$$.fragment,In),In.forEach(t),Ht.forEach(t),ph=m(n),Ho=a(n,"H2",{class:!0});var lm=i(Ho);rn=a(lm,"A",{id:!0,class:!0,href:!0});var Sy=i(rn);Sd=a(Sy,"SPAN",{});var Wy=i(Sd);T(ua.$$.fragment,Wy),Wy.forEach(t),Sy.forEach(t),Ob=m(lm),Wd=a(lm,"SPAN",{});var Qy=i(Wd);Nb=s(Qy,"TFDistilBertForTokenClassification"),Qy.forEach(t),lm.forEach(t),hh=m(n),ct=a(n,"DIV",{class:!0});var Vt=i(ct);T(fa.$$.fragment,Vt),Ib=m(Vt),Qd=a(Vt,"P",{});var Ry=i(Qd);Lb=s(Ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ry.forEach(t),Sb=m(Vt),ga=a(Vt,"P",{});var dm=i(ga);Wb=s(dm,"This model inherits from "),_l=a(dm,"A",{href:!0});var Uy=i(_l);Qb=s(Uy,"TFPreTrainedModel"),Uy.forEach(t),Rb=s(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm.forEach(t),Ub=m(Vt),_a=a(Vt,"P",{});var cm=i(_a);Kb=s(cm,"This model is also a "),ba=a(cm,"A",{href:!0,rel:!0});var Ky=i(ba);Hb=s(Ky,"tf.keras.Model"),Ky.forEach(t),Vb=s(cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cm.forEach(t),Jb=m(Vt),T(an.$$.fragment,Vt),Gb=m(Vt),$t=a(Vt,"DIV",{class:!0});var wo=i($t);T(ka.$$.fragment,wo),Xb=m(wo),Vo=a(wo,"P",{});var Nl=i(Vo);Yb=s(Nl,"The "),bl=a(Nl,"A",{href:!0});var Hy=i(bl);Zb=s(Hy,"TFDistilBertForTokenClassification"),Hy.forEach(t),ek=s(Nl," forward method, overrides the "),Rd=a(Nl,"CODE",{});var Vy=i(Rd);tk=s(Vy,"__call__"),Vy.forEach(t),ok=s(Nl," special method."),Nl.forEach(t),sk=m(wo),T(ln.$$.fragment,wo),nk=m(wo),T(dn.$$.fragment,wo),rk=m(wo),T(cn.$$.fragment,wo),wo.forEach(t),Vt.forEach(t),mh=m(n),Jo=a(n,"H2",{class:!0});var pm=i(Jo);pn=a(pm,"A",{id:!0,class:!0,href:!0});var Jy=i(pn);Ud=a(Jy,"SPAN",{});var Gy=i(Ud);T(va.$$.fragment,Gy),Gy.forEach(t),Jy.forEach(t),ak=m(pm),Kd=a(pm,"SPAN",{});var Xy=i(Kd);ik=s(Xy,"TFDistilBertForQuestionAnswering"),Xy.forEach(t),pm.forEach(t),uh=m(n),pt=a(n,"DIV",{class:!0});var Jt=i(pt);T(wa.$$.fragment,Jt),lk=m(Jt),Go=a(Jt,"P",{});var Il=i(Go);dk=s(Il,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Hd=a(Il,"CODE",{});var Yy=i(Hd);ck=s(Yy,"span start logits"),Yy.forEach(t),pk=s(Il," and "),Vd=a(Il,"CODE",{});var Zy=i(Vd);hk=s(Zy,"span end logits"),Zy.forEach(t),mk=s(Il,")."),Il.forEach(t),uk=m(Jt),Ta=a(Jt,"P",{});var hm=i(Ta);fk=s(hm,"This model inherits from "),kl=a(hm,"A",{href:!0});var e1=i(kl);gk=s(e1,"TFPreTrainedModel"),e1.forEach(t),_k=s(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hm.forEach(t),bk=m(Jt),$a=a(Jt,"P",{});var mm=i($a);kk=s(mm,"This model is also a "),ya=a(mm,"A",{href:!0,rel:!0});var t1=i(ya);vk=s(t1,"tf.keras.Model"),t1.forEach(t),wk=s(mm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mm.forEach(t),Tk=m(Jt),T(hn.$$.fragment,Jt),$k=m(Jt),yt=a(Jt,"DIV",{class:!0});var To=i(yt);T(Da.$$.fragment,To),yk=m(To),Xo=a(To,"P",{});var Ll=i(Xo);Dk=s(Ll,"The "),vl=a(Ll,"A",{href:!0});var o1=i(vl);Fk=s(o1,"TFDistilBertForQuestionAnswering"),o1.forEach(t),Bk=s(Ll," forward method, overrides the "),Jd=a(Ll,"CODE",{});var s1=i(Jd);Ek=s(s1,"__call__"),s1.forEach(t),xk=s(Ll," special method."),Ll.forEach(t),Mk=m(To),T(mn.$$.fragment,To),jk=m(To),T(un.$$.fragment,To),Ck=m(To),T(fn.$$.fragment,To),To.forEach(t),Jt.forEach(t),fh=m(n),Yo=a(n,"H2",{class:!0});var um=i(Yo);gn=a(um,"A",{id:!0,class:!0,href:!0});var n1=i(gn);Gd=a(n1,"SPAN",{});var r1=i(Gd);T(Fa.$$.fragment,r1),r1.forEach(t),n1.forEach(t),zk=m(um),Xd=a(um,"SPAN",{});var a1=i(Xd);Pk=s(a1,"FlaxDistilBertModel"),a1.forEach(t),um.forEach(t),gh=m(n),Ze=a(n,"DIV",{class:!0});var Ft=i(Ze);T(Ba.$$.fragment,Ft),qk=m(Ft),Yd=a(Ft,"P",{});var i1=i(Yd);Ak=s(i1,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),i1.forEach(t),Ok=m(Ft),Ea=a(Ft,"P",{});var fm=i(Ea);Nk=s(fm,"This model inherits from "),wl=a(fm,"A",{href:!0});var l1=i(wl);Ik=s(l1,"FlaxPreTrainedModel"),l1.forEach(t),Lk=s(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),Sk=m(Ft),xa=a(Ft,"P",{});var gm=i(xa);Wk=s(gm,"This model is also a Flax Linen "),Ma=a(gm,"A",{href:!0,rel:!0});var d1=i(Ma);Qk=s(d1,"flax.linen.Module"),d1.forEach(t),Rk=s(gm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gm.forEach(t),Uk=m(Ft),Zd=a(Ft,"P",{});var c1=i(Zd);Kk=s(c1,"Finally, this model supports inherent JAX features such as:"),c1.forEach(t),Hk=m(Ft),Xt=a(Ft,"UL",{});var Ln=i(Xt);ec=a(Ln,"LI",{});var p1=i(ec);ja=a(p1,"A",{href:!0,rel:!0});var h1=i(ja);Vk=s(h1,"Just-In-Time (JIT) compilation"),h1.forEach(t),p1.forEach(t),Jk=m(Ln),tc=a(Ln,"LI",{});var m1=i(tc);Ca=a(m1,"A",{href:!0,rel:!0});var u1=i(Ca);Gk=s(u1,"Automatic Differentiation"),u1.forEach(t),m1.forEach(t),Xk=m(Ln),oc=a(Ln,"LI",{});var f1=i(oc);za=a(f1,"A",{href:!0,rel:!0});var g1=i(za);Yk=s(g1,"Vectorization"),g1.forEach(t),f1.forEach(t),Zk=m(Ln),sc=a(Ln,"LI",{});var _1=i(sc);Pa=a(_1,"A",{href:!0,rel:!0});var b1=i(Pa);ev=s(b1,"Parallelization"),b1.forEach(t),_1.forEach(t),Ln.forEach(t),tv=m(Ft),Nt=a(Ft,"DIV",{class:!0});var Sn=i(Nt);T(qa.$$.fragment,Sn),ov=m(Sn),Zo=a(Sn,"P",{});var Sl=i(Zo);sv=s(Sl,"The "),nc=a(Sl,"CODE",{});var k1=i(nc);nv=s(k1,"FlaxDistilBertPreTrainedModel"),k1.forEach(t),rv=s(Sl," forward method, overrides the "),rc=a(Sl,"CODE",{});var v1=i(rc);av=s(v1,"__call__"),v1.forEach(t),iv=s(Sl," special method."),Sl.forEach(t),lv=m(Sn),T(_n.$$.fragment,Sn),dv=m(Sn),T(bn.$$.fragment,Sn),Sn.forEach(t),Ft.forEach(t),_h=m(n),es=a(n,"H2",{class:!0});var _m=i(es);kn=a(_m,"A",{id:!0,class:!0,href:!0});var w1=i(kn);ac=a(w1,"SPAN",{});var T1=i(ac);T(Aa.$$.fragment,T1),T1.forEach(t),w1.forEach(t),cv=m(_m),ic=a(_m,"SPAN",{});var $1=i(ic);pv=s($1,"FlaxDistilBertForMaskedLM"),$1.forEach(t),_m.forEach(t),bh=m(n),et=a(n,"DIV",{class:!0});var Bt=i(et);T(Oa.$$.fragment,Bt),hv=m(Bt),Na=a(Bt,"P",{});var bm=i(Na);mv=s(bm,"DistilBert Model with a "),lc=a(bm,"CODE",{});var y1=i(lc);uv=s(y1,"language modeling"),y1.forEach(t),fv=s(bm," head on top."),bm.forEach(t),gv=m(Bt),Ia=a(Bt,"P",{});var km=i(Ia);_v=s(km,"This model inherits from "),Tl=a(km,"A",{href:!0});var D1=i(Tl);bv=s(D1,"FlaxPreTrainedModel"),D1.forEach(t),kv=s(km,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),km.forEach(t),vv=m(Bt),La=a(Bt,"P",{});var vm=i(La);wv=s(vm,"This model is also a Flax Linen "),Sa=a(vm,"A",{href:!0,rel:!0});var F1=i(Sa);Tv=s(F1,"flax.linen.Module"),F1.forEach(t),$v=s(vm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vm.forEach(t),yv=m(Bt),dc=a(Bt,"P",{});var B1=i(dc);Dv=s(B1,"Finally, this model supports inherent JAX features such as:"),B1.forEach(t),Fv=m(Bt),Yt=a(Bt,"UL",{});var Wn=i(Yt);cc=a(Wn,"LI",{});var E1=i(cc);Wa=a(E1,"A",{href:!0,rel:!0});var x1=i(Wa);Bv=s(x1,"Just-In-Time (JIT) compilation"),x1.forEach(t),E1.forEach(t),Ev=m(Wn),pc=a(Wn,"LI",{});var M1=i(pc);Qa=a(M1,"A",{href:!0,rel:!0});var j1=i(Qa);xv=s(j1,"Automatic Differentiation"),j1.forEach(t),M1.forEach(t),Mv=m(Wn),hc=a(Wn,"LI",{});var C1=i(hc);Ra=a(C1,"A",{href:!0,rel:!0});var z1=i(Ra);jv=s(z1,"Vectorization"),z1.forEach(t),C1.forEach(t),Cv=m(Wn),mc=a(Wn,"LI",{});var P1=i(mc);Ua=a(P1,"A",{href:!0,rel:!0});var q1=i(Ua);zv=s(q1,"Parallelization"),q1.forEach(t),P1.forEach(t),Wn.forEach(t),Pv=m(Bt),It=a(Bt,"DIV",{class:!0});var Qn=i(It);T(Ka.$$.fragment,Qn),qv=m(Qn),ts=a(Qn,"P",{});var Wl=i(ts);Av=s(Wl,"The "),uc=a(Wl,"CODE",{});var A1=i(uc);Ov=s(A1,"FlaxDistilBertPreTrainedModel"),A1.forEach(t),Nv=s(Wl," forward method, overrides the "),fc=a(Wl,"CODE",{});var O1=i(fc);Iv=s(O1,"__call__"),O1.forEach(t),Lv=s(Wl," special method."),Wl.forEach(t),Sv=m(Qn),T(vn.$$.fragment,Qn),Wv=m(Qn),T(wn.$$.fragment,Qn),Qn.forEach(t),Bt.forEach(t),kh=m(n),os=a(n,"H2",{class:!0});var wm=i(os);Tn=a(wm,"A",{id:!0,class:!0,href:!0});var N1=i(Tn);gc=a(N1,"SPAN",{});var I1=i(gc);T(Ha.$$.fragment,I1),I1.forEach(t),N1.forEach(t),Qv=m(wm),_c=a(wm,"SPAN",{});var L1=i(_c);Rv=s(L1,"FlaxDistilBertForSequenceClassification"),L1.forEach(t),wm.forEach(t),vh=m(n),tt=a(n,"DIV",{class:!0});var Et=i(tt);T(Va.$$.fragment,Et),Uv=m(Et),bc=a(Et,"P",{});var S1=i(bc);Kv=s(S1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),S1.forEach(t),Hv=m(Et),Ja=a(Et,"P",{});var Tm=i(Ja);Vv=s(Tm,"This model inherits from "),$l=a(Tm,"A",{href:!0});var W1=i($l);Jv=s(W1,"FlaxPreTrainedModel"),W1.forEach(t),Gv=s(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tm.forEach(t),Xv=m(Et),Ga=a(Et,"P",{});var $m=i(Ga);Yv=s($m,"This model is also a Flax Linen "),Xa=a($m,"A",{href:!0,rel:!0});var Q1=i(Xa);Zv=s(Q1,"flax.linen.Module"),Q1.forEach(t),ew=s($m,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$m.forEach(t),tw=m(Et),kc=a(Et,"P",{});var R1=i(kc);ow=s(R1,"Finally, this model supports inherent JAX features such as:"),R1.forEach(t),sw=m(Et),Zt=a(Et,"UL",{});var Rn=i(Zt);vc=a(Rn,"LI",{});var U1=i(vc);Ya=a(U1,"A",{href:!0,rel:!0});var K1=i(Ya);nw=s(K1,"Just-In-Time (JIT) compilation"),K1.forEach(t),U1.forEach(t),rw=m(Rn),wc=a(Rn,"LI",{});var H1=i(wc);Za=a(H1,"A",{href:!0,rel:!0});var V1=i(Za);aw=s(V1,"Automatic Differentiation"),V1.forEach(t),H1.forEach(t),iw=m(Rn),Tc=a(Rn,"LI",{});var J1=i(Tc);ei=a(J1,"A",{href:!0,rel:!0});var G1=i(ei);lw=s(G1,"Vectorization"),G1.forEach(t),J1.forEach(t),dw=m(Rn),$c=a(Rn,"LI",{});var X1=i($c);ti=a(X1,"A",{href:!0,rel:!0});var Y1=i(ti);cw=s(Y1,"Parallelization"),Y1.forEach(t),X1.forEach(t),Rn.forEach(t),pw=m(Et),Lt=a(Et,"DIV",{class:!0});var Un=i(Lt);T(oi.$$.fragment,Un),hw=m(Un),ss=a(Un,"P",{});var Ql=i(ss);mw=s(Ql,"The "),yc=a(Ql,"CODE",{});var Z1=i(yc);uw=s(Z1,"FlaxDistilBertPreTrainedModel"),Z1.forEach(t),fw=s(Ql," forward method, overrides the "),Dc=a(Ql,"CODE",{});var e2=i(Dc);gw=s(e2,"__call__"),e2.forEach(t),_w=s(Ql," special method."),Ql.forEach(t),bw=m(Un),T($n.$$.fragment,Un),kw=m(Un),T(yn.$$.fragment,Un),Un.forEach(t),Et.forEach(t),wh=m(n),ns=a(n,"H2",{class:!0});var ym=i(ns);Dn=a(ym,"A",{id:!0,class:!0,href:!0});var t2=i(Dn);Fc=a(t2,"SPAN",{});var o2=i(Fc);T(si.$$.fragment,o2),o2.forEach(t),t2.forEach(t),vw=m(ym),Bc=a(ym,"SPAN",{});var s2=i(Bc);ww=s(s2,"FlaxDistilBertForMultipleChoice"),s2.forEach(t),ym.forEach(t),Th=m(n),ot=a(n,"DIV",{class:!0});var xt=i(ot);T(ni.$$.fragment,xt),Tw=m(xt),Ec=a(xt,"P",{});var n2=i(Ec);$w=s(n2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n2.forEach(t),yw=m(xt),ri=a(xt,"P",{});var Dm=i(ri);Dw=s(Dm,"This model inherits from "),yl=a(Dm,"A",{href:!0});var r2=i(yl);Fw=s(r2,"FlaxPreTrainedModel"),r2.forEach(t),Bw=s(Dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dm.forEach(t),Ew=m(xt),ai=a(xt,"P",{});var Fm=i(ai);xw=s(Fm,"This model is also a Flax Linen "),ii=a(Fm,"A",{href:!0,rel:!0});var a2=i(ii);Mw=s(a2,"flax.linen.Module"),a2.forEach(t),jw=s(Fm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fm.forEach(t),Cw=m(xt),xc=a(xt,"P",{});var i2=i(xc);zw=s(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),Pw=m(xt),eo=a(xt,"UL",{});var Kn=i(eo);Mc=a(Kn,"LI",{});var l2=i(Mc);li=a(l2,"A",{href:!0,rel:!0});var d2=i(li);qw=s(d2,"Just-In-Time (JIT) compilation"),d2.forEach(t),l2.forEach(t),Aw=m(Kn),jc=a(Kn,"LI",{});var c2=i(jc);di=a(c2,"A",{href:!0,rel:!0});var p2=i(di);Ow=s(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),Nw=m(Kn),Cc=a(Kn,"LI",{});var h2=i(Cc);ci=a(h2,"A",{href:!0,rel:!0});var m2=i(ci);Iw=s(m2,"Vectorization"),m2.forEach(t),h2.forEach(t),Lw=m(Kn),zc=a(Kn,"LI",{});var u2=i(zc);pi=a(u2,"A",{href:!0,rel:!0});var f2=i(pi);Sw=s(f2,"Parallelization"),f2.forEach(t),u2.forEach(t),Kn.forEach(t),Ww=m(xt),St=a(xt,"DIV",{class:!0});var Hn=i(St);T(hi.$$.fragment,Hn),Qw=m(Hn),rs=a(Hn,"P",{});var Rl=i(rs);Rw=s(Rl,"The "),Pc=a(Rl,"CODE",{});var g2=i(Pc);Uw=s(g2,"FlaxDistilBertPreTrainedModel"),g2.forEach(t),Kw=s(Rl," forward method, overrides the "),qc=a(Rl,"CODE",{});var _2=i(qc);Hw=s(_2,"__call__"),_2.forEach(t),Vw=s(Rl," special method."),Rl.forEach(t),Jw=m(Hn),T(Fn.$$.fragment,Hn),Gw=m(Hn),T(Bn.$$.fragment,Hn),Hn.forEach(t),xt.forEach(t),$h=m(n),as=a(n,"H2",{class:!0});var Bm=i(as);En=a(Bm,"A",{id:!0,class:!0,href:!0});var b2=i(En);Ac=a(b2,"SPAN",{});var k2=i(Ac);T(mi.$$.fragment,k2),k2.forEach(t),b2.forEach(t),Xw=m(Bm),Oc=a(Bm,"SPAN",{});var v2=i(Oc);Yw=s(v2,"FlaxDistilBertForTokenClassification"),v2.forEach(t),Bm.forEach(t),yh=m(n),st=a(n,"DIV",{class:!0});var Mt=i(st);T(ui.$$.fragment,Mt),Zw=m(Mt),Nc=a(Mt,"P",{});var w2=i(Nc);eT=s(w2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),w2.forEach(t),tT=m(Mt),fi=a(Mt,"P",{});var Em=i(fi);oT=s(Em,"This model inherits from "),Dl=a(Em,"A",{href:!0});var T2=i(Dl);sT=s(T2,"FlaxPreTrainedModel"),T2.forEach(t),nT=s(Em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Em.forEach(t),rT=m(Mt),gi=a(Mt,"P",{});var xm=i(gi);aT=s(xm,"This model is also a Flax Linen "),_i=a(xm,"A",{href:!0,rel:!0});var $2=i(_i);iT=s($2,"flax.linen.Module"),$2.forEach(t),lT=s(xm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xm.forEach(t),dT=m(Mt),Ic=a(Mt,"P",{});var y2=i(Ic);cT=s(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),pT=m(Mt),to=a(Mt,"UL",{});var Vn=i(to);Lc=a(Vn,"LI",{});var D2=i(Lc);bi=a(D2,"A",{href:!0,rel:!0});var F2=i(bi);hT=s(F2,"Just-In-Time (JIT) compilation"),F2.forEach(t),D2.forEach(t),mT=m(Vn),Sc=a(Vn,"LI",{});var B2=i(Sc);ki=a(B2,"A",{href:!0,rel:!0});var E2=i(ki);uT=s(E2,"Automatic Differentiation"),E2.forEach(t),B2.forEach(t),fT=m(Vn),Wc=a(Vn,"LI",{});var x2=i(Wc);vi=a(x2,"A",{href:!0,rel:!0});var M2=i(vi);gT=s(M2,"Vectorization"),M2.forEach(t),x2.forEach(t),_T=m(Vn),Qc=a(Vn,"LI",{});var j2=i(Qc);wi=a(j2,"A",{href:!0,rel:!0});var C2=i(wi);bT=s(C2,"Parallelization"),C2.forEach(t),j2.forEach(t),Vn.forEach(t),kT=m(Mt),Wt=a(Mt,"DIV",{class:!0});var Jn=i(Wt);T(Ti.$$.fragment,Jn),vT=m(Jn),is=a(Jn,"P",{});var Ul=i(is);wT=s(Ul,"The "),Rc=a(Ul,"CODE",{});var z2=i(Rc);TT=s(z2,"FlaxDistilBertPreTrainedModel"),z2.forEach(t),$T=s(Ul," forward method, overrides the "),Uc=a(Ul,"CODE",{});var P2=i(Uc);yT=s(P2,"__call__"),P2.forEach(t),DT=s(Ul," special method."),Ul.forEach(t),FT=m(Jn),T(xn.$$.fragment,Jn),BT=m(Jn),T(Mn.$$.fragment,Jn),Jn.forEach(t),Mt.forEach(t),Dh=m(n),ls=a(n,"H2",{class:!0});var Mm=i(ls);jn=a(Mm,"A",{id:!0,class:!0,href:!0});var q2=i(jn);Kc=a(q2,"SPAN",{});var A2=i(Kc);T($i.$$.fragment,A2),A2.forEach(t),q2.forEach(t),ET=m(Mm),Hc=a(Mm,"SPAN",{});var O2=i(Hc);xT=s(O2,"FlaxDistilBertForQuestionAnswering"),O2.forEach(t),Mm.forEach(t),Fh=m(n),nt=a(n,"DIV",{class:!0});var jt=i(nt);T(yi.$$.fragment,jt),MT=m(jt),ds=a(jt,"P",{});var Kl=i(ds);jT=s(Kl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=a(Kl,"CODE",{});var N2=i(Vc);CT=s(N2,"span start logits"),N2.forEach(t),zT=s(Kl," and "),Jc=a(Kl,"CODE",{});var I2=i(Jc);PT=s(I2,"span end logits"),I2.forEach(t),qT=s(Kl,")."),Kl.forEach(t),AT=m(jt),Di=a(jt,"P",{});var jm=i(Di);OT=s(jm,"This model inherits from "),Fl=a(jm,"A",{href:!0});var L2=i(Fl);NT=s(L2,"FlaxPreTrainedModel"),L2.forEach(t),IT=s(jm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jm.forEach(t),LT=m(jt),Fi=a(jt,"P",{});var Cm=i(Fi);ST=s(Cm,"This model is also a Flax Linen "),Bi=a(Cm,"A",{href:!0,rel:!0});var S2=i(Bi);WT=s(S2,"flax.linen.Module"),S2.forEach(t),QT=s(Cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cm.forEach(t),RT=m(jt),Gc=a(jt,"P",{});var W2=i(Gc);UT=s(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),KT=m(jt),oo=a(jt,"UL",{});var Gn=i(oo);Xc=a(Gn,"LI",{});var Q2=i(Xc);Ei=a(Q2,"A",{href:!0,rel:!0});var R2=i(Ei);HT=s(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),Q2.forEach(t),VT=m(Gn),Yc=a(Gn,"LI",{});var U2=i(Yc);xi=a(U2,"A",{href:!0,rel:!0});var K2=i(xi);JT=s(K2,"Automatic Differentiation"),K2.forEach(t),U2.forEach(t),GT=m(Gn),Zc=a(Gn,"LI",{});var H2=i(Zc);Mi=a(H2,"A",{href:!0,rel:!0});var V2=i(Mi);XT=s(V2,"Vectorization"),V2.forEach(t),H2.forEach(t),YT=m(Gn),ep=a(Gn,"LI",{});var J2=i(ep);ji=a(J2,"A",{href:!0,rel:!0});var G2=i(ji);ZT=s(G2,"Parallelization"),G2.forEach(t),J2.forEach(t),Gn.forEach(t),e$=m(jt),Qt=a(jt,"DIV",{class:!0});var Xn=i(Qt);T(Ci.$$.fragment,Xn),t$=m(Xn),cs=a(Xn,"P",{});var Hl=i(cs);o$=s(Hl,"The "),tp=a(Hl,"CODE",{});var X2=i(tp);s$=s(X2,"FlaxDistilBertPreTrainedModel"),X2.forEach(t),n$=s(Hl," forward method, overrides the "),op=a(Hl,"CODE",{});var Y2=i(op);r$=s(Y2,"__call__"),Y2.forEach(t),a$=s(Hl," special method."),Hl.forEach(t),i$=m(Xn),T(Cn.$$.fragment,Xn),l$=m(Xn),T(zn.$$.fragment,Xn),Xn.forEach(t),jt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(nF)),f(u,"id","distilbert"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#distilbert"),f(c,"class","relative group"),f(re,"id","overview"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#overview"),f(I,"class","relative group"),f(ae,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),f(ae,"rel","nofollow"),f(ie,"href","https://arxiv.org/abs/1910.01108"),f(ie,"rel","nofollow"),f(ee,"href","https://huggingface.co/victorsanh"),f(ee,"rel","nofollow"),f(j,"href","https://huggingface.co/kamalkraj"),f(j,"rel","nofollow"),f(Ne,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),f(Ne,"rel","nofollow"),f(Oe,"id","transformers.DistilBertConfig"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#transformers.DistilBertConfig"),f(S,"class","relative group"),f(Si,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(Wi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(Yn,"href","https://huggingface.co/distilbert-base-uncased"),f(Yn,"rel","nofollow"),f(Qi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ri,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ms,"id","transformers.DistilBertTokenizer"),f(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ms,"href","#transformers.DistilBertTokenizer"),f(yo,"class","relative group"),f(Ui,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),f(Ki,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(Hi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fs,"id","transformers.DistilBertTokenizerFast"),f(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fs,"href","#transformers.DistilBertTokenizerFast"),f(Do,"class","relative group"),f(Vi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),f(Ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(Gi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_s,"id","transformers.DistilBertModel"),f(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_s,"href","#transformers.DistilBertModel"),f(Fo,"class","relative group"),f(Xi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(cr,"rel","nofollow"),f(Yi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vs,"id","transformers.DistilBertForMaskedLM"),f(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vs,"href","#transformers.DistilBertForMaskedLM"),f(Eo,"class","relative group"),f(Zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(_r,"rel","nofollow"),f(el,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ys,"id","transformers.DistilBertForSequenceClassification"),f(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ys,"href","#transformers.DistilBertForSequenceClassification"),f(Mo,"class","relative group"),f(tl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f($r,"rel","nofollow"),f(ol,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ms,"id","transformers.DistilBertForMultipleChoice"),f(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ms,"href","#transformers.DistilBertForMultipleChoice"),f(Co,"class","relative group"),f(sl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(xr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xr,"rel","nofollow"),f(nl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zs,"id","transformers.DistilBertForTokenClassification"),f(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zs,"href","#transformers.DistilBertForTokenClassification"),f(Po,"class","relative group"),f(rl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qr,"rel","nofollow"),f(al,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Os,"id","transformers.DistilBertForQuestionAnswering"),f(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Os,"href","#transformers.DistilBertForQuestionAnswering"),f(Ao,"class","relative group"),f(il,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Sr,"rel","nofollow"),f(ll,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ss,"id","transformers.TFDistilBertModel"),f(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ss,"href","#transformers.TFDistilBertModel"),f(Io,"class","relative group"),f(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Hr,"rel","nofollow"),f(cl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Us,"id","transformers.TFDistilBertForMaskedLM"),f(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Us,"href","#transformers.TFDistilBertForMaskedLM"),f(So,"class","relative group"),f(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ea,"rel","nofollow"),f(hl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.TFDistilBertForSequenceClassification"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.TFDistilBertForSequenceClassification"),f(Qo,"class","relative group"),f(ml,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(aa,"rel","nofollow"),f(ul,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.TFDistilBertForMultipleChoice"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.TFDistilBertForMultipleChoice"),f(Uo,"class","relative group"),f(fl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ha,"rel","nofollow"),f(gl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFDistilBertForTokenClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFDistilBertForTokenClassification"),f(Ho,"class","relative group"),f(_l,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ba,"rel","nofollow"),f(bl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.TFDistilBertForQuestionAnswering"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.TFDistilBertForQuestionAnswering"),f(Jo,"class","relative group"),f(kl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ya,"rel","nofollow"),f(vl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.FlaxDistilBertModel"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.FlaxDistilBertModel"),f(Yo,"class","relative group"),f(wl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ma,"rel","nofollow"),f(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ja,"rel","nofollow"),f(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ca,"rel","nofollow"),f(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(za,"rel","nofollow"),f(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Pa,"rel","nofollow"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.FlaxDistilBertForMaskedLM"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.FlaxDistilBertForMaskedLM"),f(es,"class","relative group"),f(Tl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Sa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Sa,"rel","nofollow"),f(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Wa,"rel","nofollow"),f(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Qa,"rel","nofollow"),f(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ra,"rel","nofollow"),f(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ua,"rel","nofollow"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.FlaxDistilBertForSequenceClassification"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),f(os,"class","relative group"),f($l,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Xa,"rel","nofollow"),f(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ya,"rel","nofollow"),f(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Za,"rel","nofollow"),f(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ei,"rel","nofollow"),f(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ti,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.FlaxDistilBertForMultipleChoice"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.FlaxDistilBertForMultipleChoice"),f(ns,"class","relative group"),f(yl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(ii,"rel","nofollow"),f(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(li,"rel","nofollow"),f(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(di,"rel","nofollow"),f(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ci,"rel","nofollow"),f(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(pi,"rel","nofollow"),f(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.FlaxDistilBertForTokenClassification"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.FlaxDistilBertForTokenClassification"),f(as,"class","relative group"),f(Dl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(_i,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(_i,"rel","nofollow"),f(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(bi,"rel","nofollow"),f(ki,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ki,"rel","nofollow"),f(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(vi,"rel","nofollow"),f(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(wi,"rel","nofollow"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"id","transformers.FlaxDistilBertForQuestionAnswering"),f(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),f(ls,"class","relative group"),f(Fl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Bi,"rel","nofollow"),f(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ei,"rel","nofollow"),f(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xi,"rel","nofollow"),f(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Mi,"rel","nofollow"),f(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ji,"rel","nofollow"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,b){e(document.head,d),_(n,g,b),_(n,c,b),e(c,u),e(u,k),$(l,k,null),e(c,p),e(c,M),e(M,we),_(n,ge,b),_(n,I,b),e(I,re),e(re,oe),$(B,oe,null),e(I,Te),e(I,U),e(U,$e),_(n,_e,b),_(n,O,b),e(O,ye),e(O,ae),e(ae,H),e(O,De),e(O,ie),e(ie,V),e(O,Fe),e(O,de),e(de,J),e(O,Be),_(n,be,b),_(n,te,b),e(te,C),_(n,q,b),_(n,le,b),e(le,K),e(K,Ee),_(n,ke,b),_(n,R,b),e(R,xe),_(n,ve,b),_(n,z,b),e(z,se),e(se,G),e(se,ce),e(ce,Me),e(se,X),e(se,pe),e(pe,je),e(se,L),e(se,he),e(he,Y),e(se,Ce),e(z,ne),e(z,P),e(P,ze),e(P,A),e(A,Pe),e(P,qe),_(n,v,b),_(n,x,b),e(x,Ue),e(x,ee),e(ee,Ke),e(x,He),e(x,j),e(j,Ve),e(x,Je),e(x,Ne),e(Ne,Ge),e(x,Xe),_(n,N,b),_(n,S,b),e(S,Oe),e(Oe,Se),$(W,Se,null),e(S,Ye),e(S,We),e(We,Ae),_(n,Re,b),_(n,Q,b),$(Ie,Q,null),e(Q,zm),e(Q,Gt),e(Gt,Pm),e(Gt,Si),e(Si,qm),e(Gt,Am),e(Gt,Wi),e(Wi,Om),e(Gt,Nm),e(Gt,Yn),e(Yn,Im),e(Gt,Lm),e(Q,Sm),e(Q,$o),e($o,Wm),e($o,Qi),e(Qi,Qm),e($o,Rm),e($o,Ri),e(Ri,Um),e($o,Km),e(Q,Hm),$(hs,Q,null),_(n,Sp,b),_(n,yo,b),e(yo,ms),e(ms,Vl),$(Zn,Vl,null),e(yo,Vm),e(yo,Jl),e(Jl,Jm),_(n,Wp,b),_(n,Ct,b),$(er,Ct,null),e(Ct,Gm),e(Ct,Gl),e(Gl,Xm),e(Ct,Ym),e(Ct,us),e(us,Ui),e(Ui,Zm),e(us,eu),e(us,Ki),e(Ki,tu),e(us,ou),e(Ct,su),e(Ct,tr),e(tr,nu),e(tr,Hi),e(Hi,ru),e(tr,au),_(n,Qp,b),_(n,Do,b),e(Do,fs),e(fs,Xl),$(or,Xl,null),e(Do,iu),e(Do,Yl),e(Yl,lu),_(n,Rp,b),_(n,zt,b),$(sr,zt,null),e(zt,du),e(zt,nr),e(nr,cu),e(nr,Zl),e(Zl,pu),e(nr,hu),e(zt,mu),e(zt,gs),e(gs,Vi),e(Vi,uu),e(gs,fu),e(gs,Ji),e(Ji,gu),e(gs,_u),e(zt,bu),e(zt,rr),e(rr,ku),e(rr,Gi),e(Gi,vu),e(rr,wu),_(n,Up,b),_(n,Fo,b),e(Fo,_s),e(_s,ed),$(ar,ed,null),e(Fo,Tu),e(Fo,td),e(td,$u),_(n,Kp,b),_(n,ht,b),$(ir,ht,null),e(ht,yu),e(ht,od),e(od,Du),e(ht,Fu),e(ht,lr),e(lr,Bu),e(lr,Xi),e(Xi,Eu),e(lr,xu),e(ht,Mu),e(ht,dr),e(dr,ju),e(dr,cr),e(cr,Cu),e(dr,zu),e(ht,Pu),e(ht,Pt),$(pr,Pt,null),e(Pt,qu),e(Pt,Bo),e(Bo,Au),e(Bo,Yi),e(Yi,Ou),e(Bo,Nu),e(Bo,sd),e(sd,Iu),e(Bo,Lu),e(Pt,Su),$(bs,Pt,null),e(Pt,Wu),$(ks,Pt,null),_(n,Hp,b),_(n,Eo,b),e(Eo,vs),e(vs,nd),$(hr,nd,null),e(Eo,Qu),e(Eo,rd),e(rd,Ru),_(n,Vp,b),_(n,mt,b),$(mr,mt,null),e(mt,Uu),e(mt,ur),e(ur,Ku),e(ur,ad),e(ad,Hu),e(ur,Vu),e(mt,Ju),e(mt,fr),e(fr,Gu),e(fr,Zi),e(Zi,Xu),e(fr,Yu),e(mt,Zu),e(mt,gr),e(gr,ef),e(gr,_r),e(_r,tf),e(gr,of),e(mt,sf),e(mt,bt),$(br,bt,null),e(bt,nf),e(bt,xo),e(xo,rf),e(xo,el),e(el,af),e(xo,lf),e(xo,id),e(id,df),e(xo,cf),e(bt,pf),$(ws,bt,null),e(bt,hf),$(Ts,bt,null),e(bt,mf),$($s,bt,null),_(n,Jp,b),_(n,Mo,b),e(Mo,ys),e(ys,ld),$(kr,ld,null),e(Mo,uf),e(Mo,dd),e(dd,ff),_(n,Gp,b),_(n,ut,b),$(vr,ut,null),e(ut,gf),e(ut,cd),e(cd,_f),e(ut,bf),e(ut,wr),e(wr,kf),e(wr,tl),e(tl,vf),e(wr,wf),e(ut,Tf),e(ut,Tr),e(Tr,$f),e(Tr,$r),e($r,yf),e(Tr,Df),e(ut,Ff),e(ut,rt),$(yr,rt,null),e(rt,Bf),e(rt,jo),e(jo,Ef),e(jo,ol),e(ol,xf),e(jo,Mf),e(jo,pd),e(pd,jf),e(jo,Cf),e(rt,zf),$(Ds,rt,null),e(rt,Pf),$(Fs,rt,null),e(rt,qf),$(Bs,rt,null),e(rt,Af),$(Es,rt,null),e(rt,Of),$(xs,rt,null),_(n,Xp,b),_(n,Co,b),e(Co,Ms),e(Ms,hd),$(Dr,hd,null),e(Co,Nf),e(Co,md),e(md,If),_(n,Yp,b),_(n,ft,b),$(Fr,ft,null),e(ft,Lf),e(ft,ud),e(ud,Sf),e(ft,Wf),e(ft,Br),e(Br,Qf),e(Br,sl),e(sl,Rf),e(Br,Uf),e(ft,Kf),e(ft,Er),e(Er,Hf),e(Er,xr),e(xr,Vf),e(Er,Jf),e(ft,Gf),e(ft,qt),$(Mr,qt,null),e(qt,Xf),e(qt,zo),e(zo,Yf),e(zo,nl),e(nl,Zf),e(zo,eg),e(zo,fd),e(fd,tg),e(zo,og),e(qt,sg),$(js,qt,null),e(qt,ng),$(Cs,qt,null),_(n,Zp,b),_(n,Po,b),e(Po,zs),e(zs,gd),$(jr,gd,null),e(Po,rg),e(Po,_d),e(_d,ag),_(n,eh,b),_(n,gt,b),$(Cr,gt,null),e(gt,ig),e(gt,bd),e(bd,lg),e(gt,dg),e(gt,zr),e(zr,cg),e(zr,rl),e(rl,pg),e(zr,hg),e(gt,mg),e(gt,Pr),e(Pr,ug),e(Pr,qr),e(qr,fg),e(Pr,gg),e(gt,_g),e(gt,kt),$(Ar,kt,null),e(kt,bg),e(kt,qo),e(qo,kg),e(qo,al),e(al,vg),e(qo,wg),e(qo,kd),e(kd,Tg),e(qo,$g),e(kt,yg),$(Ps,kt,null),e(kt,Dg),$(qs,kt,null),e(kt,Fg),$(As,kt,null),_(n,th,b),_(n,Ao,b),e(Ao,Os),e(Os,vd),$(Or,vd,null),e(Ao,Bg),e(Ao,wd),e(wd,Eg),_(n,oh,b),_(n,_t,b),$(Nr,_t,null),e(_t,xg),e(_t,Oo),e(Oo,Mg),e(Oo,Td),e(Td,jg),e(Oo,Cg),e(Oo,$d),e($d,zg),e(Oo,Pg),e(_t,qg),e(_t,Ir),e(Ir,Ag),e(Ir,il),e(il,Og),e(Ir,Ng),e(_t,Ig),e(_t,Lr),e(Lr,Lg),e(Lr,Sr),e(Sr,Sg),e(Lr,Wg),e(_t,Qg),e(_t,vt),$(Wr,vt,null),e(vt,Rg),e(vt,No),e(No,Ug),e(No,ll),e(ll,Kg),e(No,Hg),e(No,yd),e(yd,Vg),e(No,Jg),e(vt,Gg),$(Ns,vt,null),e(vt,Xg),$(Is,vt,null),e(vt,Yg),$(Ls,vt,null),_(n,sh,b),_(n,Io,b),e(Io,Ss),e(Ss,Dd),$(Qr,Dd,null),e(Io,Zg),e(Io,Fd),e(Fd,e_),_(n,nh,b),_(n,at,b),$(Rr,at,null),e(at,t_),e(at,Bd),e(Bd,o_),e(at,s_),e(at,Ur),e(Ur,n_),e(Ur,dl),e(dl,r_),e(Ur,a_),e(at,i_),e(at,Kr),e(Kr,l_),e(Kr,Hr),e(Hr,d_),e(Kr,c_),e(at,p_),$(Ws,at,null),e(at,h_),e(at,At),$(Vr,At,null),e(At,m_),e(At,Lo),e(Lo,u_),e(Lo,cl),e(cl,f_),e(Lo,g_),e(Lo,Ed),e(Ed,__),e(Lo,b_),e(At,k_),$(Qs,At,null),e(At,v_),$(Rs,At,null),_(n,rh,b),_(n,So,b),e(So,Us),e(Us,xd),$(Jr,xd,null),e(So,w_),e(So,Md),e(Md,T_),_(n,ah,b),_(n,it,b),$(Gr,it,null),e(it,$_),e(it,Xr),e(Xr,y_),e(Xr,jd),e(jd,D_),e(Xr,F_),e(it,B_),e(it,Yr),e(Yr,E_),e(Yr,pl),e(pl,x_),e(Yr,M_),e(it,j_),e(it,Zr),e(Zr,C_),e(Zr,ea),e(ea,z_),e(Zr,P_),e(it,q_),$(Ks,it,null),e(it,A_),e(it,wt),$(ta,wt,null),e(wt,O_),e(wt,Wo),e(Wo,N_),e(Wo,hl),e(hl,I_),e(Wo,L_),e(Wo,Cd),e(Cd,S_),e(Wo,W_),e(wt,Q_),$(Hs,wt,null),e(wt,R_),$(Vs,wt,null),e(wt,U_),$(Js,wt,null),_(n,ih,b),_(n,Qo,b),e(Qo,Gs),e(Gs,zd),$(oa,zd,null),e(Qo,K_),e(Qo,Pd),e(Pd,H_),_(n,lh,b),_(n,lt,b),$(sa,lt,null),e(lt,V_),e(lt,qd),e(qd,J_),e(lt,G_),e(lt,na),e(na,X_),e(na,ml),e(ml,Y_),e(na,Z_),e(lt,eb),e(lt,ra),e(ra,tb),e(ra,aa),e(aa,ob),e(ra,sb),e(lt,nb),$(Xs,lt,null),e(lt,rb),e(lt,Tt),$(ia,Tt,null),e(Tt,ab),e(Tt,Ro),e(Ro,ib),e(Ro,ul),e(ul,lb),e(Ro,db),e(Ro,Ad),e(Ad,cb),e(Ro,pb),e(Tt,hb),$(Ys,Tt,null),e(Tt,mb),$(Zs,Tt,null),e(Tt,ub),$(en,Tt,null),_(n,dh,b),_(n,Uo,b),e(Uo,tn),e(tn,Od),$(la,Od,null),e(Uo,fb),e(Uo,Nd),e(Nd,gb),_(n,ch,b),_(n,dt,b),$(da,dt,null),e(dt,_b),e(dt,Id),e(Id,bb),e(dt,kb),e(dt,ca),e(ca,vb),e(ca,fl),e(fl,wb),e(ca,Tb),e(dt,$b),e(dt,pa),e(pa,yb),e(pa,ha),e(ha,Db),e(pa,Fb),e(dt,Bb),$(on,dt,null),e(dt,Eb),e(dt,Ot),$(ma,Ot,null),e(Ot,xb),e(Ot,Ko),e(Ko,Mb),e(Ko,gl),e(gl,jb),e(Ko,Cb),e(Ko,Ld),e(Ld,zb),e(Ko,Pb),e(Ot,qb),$(sn,Ot,null),e(Ot,Ab),$(nn,Ot,null),_(n,ph,b),_(n,Ho,b),e(Ho,rn),e(rn,Sd),$(ua,Sd,null),e(Ho,Ob),e(Ho,Wd),e(Wd,Nb),_(n,hh,b),_(n,ct,b),$(fa,ct,null),e(ct,Ib),e(ct,Qd),e(Qd,Lb),e(ct,Sb),e(ct,ga),e(ga,Wb),e(ga,_l),e(_l,Qb),e(ga,Rb),e(ct,Ub),e(ct,_a),e(_a,Kb),e(_a,ba),e(ba,Hb),e(_a,Vb),e(ct,Jb),$(an,ct,null),e(ct,Gb),e(ct,$t),$(ka,$t,null),e($t,Xb),e($t,Vo),e(Vo,Yb),e(Vo,bl),e(bl,Zb),e(Vo,ek),e(Vo,Rd),e(Rd,tk),e(Vo,ok),e($t,sk),$(ln,$t,null),e($t,nk),$(dn,$t,null),e($t,rk),$(cn,$t,null),_(n,mh,b),_(n,Jo,b),e(Jo,pn),e(pn,Ud),$(va,Ud,null),e(Jo,ak),e(Jo,Kd),e(Kd,ik),_(n,uh,b),_(n,pt,b),$(wa,pt,null),e(pt,lk),e(pt,Go),e(Go,dk),e(Go,Hd),e(Hd,ck),e(Go,pk),e(Go,Vd),e(Vd,hk),e(Go,mk),e(pt,uk),e(pt,Ta),e(Ta,fk),e(Ta,kl),e(kl,gk),e(Ta,_k),e(pt,bk),e(pt,$a),e($a,kk),e($a,ya),e(ya,vk),e($a,wk),e(pt,Tk),$(hn,pt,null),e(pt,$k),e(pt,yt),$(Da,yt,null),e(yt,yk),e(yt,Xo),e(Xo,Dk),e(Xo,vl),e(vl,Fk),e(Xo,Bk),e(Xo,Jd),e(Jd,Ek),e(Xo,xk),e(yt,Mk),$(mn,yt,null),e(yt,jk),$(un,yt,null),e(yt,Ck),$(fn,yt,null),_(n,fh,b),_(n,Yo,b),e(Yo,gn),e(gn,Gd),$(Fa,Gd,null),e(Yo,zk),e(Yo,Xd),e(Xd,Pk),_(n,gh,b),_(n,Ze,b),$(Ba,Ze,null),e(Ze,qk),e(Ze,Yd),e(Yd,Ak),e(Ze,Ok),e(Ze,Ea),e(Ea,Nk),e(Ea,wl),e(wl,Ik),e(Ea,Lk),e(Ze,Sk),e(Ze,xa),e(xa,Wk),e(xa,Ma),e(Ma,Qk),e(xa,Rk),e(Ze,Uk),e(Ze,Zd),e(Zd,Kk),e(Ze,Hk),e(Ze,Xt),e(Xt,ec),e(ec,ja),e(ja,Vk),e(Xt,Jk),e(Xt,tc),e(tc,Ca),e(Ca,Gk),e(Xt,Xk),e(Xt,oc),e(oc,za),e(za,Yk),e(Xt,Zk),e(Xt,sc),e(sc,Pa),e(Pa,ev),e(Ze,tv),e(Ze,Nt),$(qa,Nt,null),e(Nt,ov),e(Nt,Zo),e(Zo,sv),e(Zo,nc),e(nc,nv),e(Zo,rv),e(Zo,rc),e(rc,av),e(Zo,iv),e(Nt,lv),$(_n,Nt,null),e(Nt,dv),$(bn,Nt,null),_(n,_h,b),_(n,es,b),e(es,kn),e(kn,ac),$(Aa,ac,null),e(es,cv),e(es,ic),e(ic,pv),_(n,bh,b),_(n,et,b),$(Oa,et,null),e(et,hv),e(et,Na),e(Na,mv),e(Na,lc),e(lc,uv),e(Na,fv),e(et,gv),e(et,Ia),e(Ia,_v),e(Ia,Tl),e(Tl,bv),e(Ia,kv),e(et,vv),e(et,La),e(La,wv),e(La,Sa),e(Sa,Tv),e(La,$v),e(et,yv),e(et,dc),e(dc,Dv),e(et,Fv),e(et,Yt),e(Yt,cc),e(cc,Wa),e(Wa,Bv),e(Yt,Ev),e(Yt,pc),e(pc,Qa),e(Qa,xv),e(Yt,Mv),e(Yt,hc),e(hc,Ra),e(Ra,jv),e(Yt,Cv),e(Yt,mc),e(mc,Ua),e(Ua,zv),e(et,Pv),e(et,It),$(Ka,It,null),e(It,qv),e(It,ts),e(ts,Av),e(ts,uc),e(uc,Ov),e(ts,Nv),e(ts,fc),e(fc,Iv),e(ts,Lv),e(It,Sv),$(vn,It,null),e(It,Wv),$(wn,It,null),_(n,kh,b),_(n,os,b),e(os,Tn),e(Tn,gc),$(Ha,gc,null),e(os,Qv),e(os,_c),e(_c,Rv),_(n,vh,b),_(n,tt,b),$(Va,tt,null),e(tt,Uv),e(tt,bc),e(bc,Kv),e(tt,Hv),e(tt,Ja),e(Ja,Vv),e(Ja,$l),e($l,Jv),e(Ja,Gv),e(tt,Xv),e(tt,Ga),e(Ga,Yv),e(Ga,Xa),e(Xa,Zv),e(Ga,ew),e(tt,tw),e(tt,kc),e(kc,ow),e(tt,sw),e(tt,Zt),e(Zt,vc),e(vc,Ya),e(Ya,nw),e(Zt,rw),e(Zt,wc),e(wc,Za),e(Za,aw),e(Zt,iw),e(Zt,Tc),e(Tc,ei),e(ei,lw),e(Zt,dw),e(Zt,$c),e($c,ti),e(ti,cw),e(tt,pw),e(tt,Lt),$(oi,Lt,null),e(Lt,hw),e(Lt,ss),e(ss,mw),e(ss,yc),e(yc,uw),e(ss,fw),e(ss,Dc),e(Dc,gw),e(ss,_w),e(Lt,bw),$($n,Lt,null),e(Lt,kw),$(yn,Lt,null),_(n,wh,b),_(n,ns,b),e(ns,Dn),e(Dn,Fc),$(si,Fc,null),e(ns,vw),e(ns,Bc),e(Bc,ww),_(n,Th,b),_(n,ot,b),$(ni,ot,null),e(ot,Tw),e(ot,Ec),e(Ec,$w),e(ot,yw),e(ot,ri),e(ri,Dw),e(ri,yl),e(yl,Fw),e(ri,Bw),e(ot,Ew),e(ot,ai),e(ai,xw),e(ai,ii),e(ii,Mw),e(ai,jw),e(ot,Cw),e(ot,xc),e(xc,zw),e(ot,Pw),e(ot,eo),e(eo,Mc),e(Mc,li),e(li,qw),e(eo,Aw),e(eo,jc),e(jc,di),e(di,Ow),e(eo,Nw),e(eo,Cc),e(Cc,ci),e(ci,Iw),e(eo,Lw),e(eo,zc),e(zc,pi),e(pi,Sw),e(ot,Ww),e(ot,St),$(hi,St,null),e(St,Qw),e(St,rs),e(rs,Rw),e(rs,Pc),e(Pc,Uw),e(rs,Kw),e(rs,qc),e(qc,Hw),e(rs,Vw),e(St,Jw),$(Fn,St,null),e(St,Gw),$(Bn,St,null),_(n,$h,b),_(n,as,b),e(as,En),e(En,Ac),$(mi,Ac,null),e(as,Xw),e(as,Oc),e(Oc,Yw),_(n,yh,b),_(n,st,b),$(ui,st,null),e(st,Zw),e(st,Nc),e(Nc,eT),e(st,tT),e(st,fi),e(fi,oT),e(fi,Dl),e(Dl,sT),e(fi,nT),e(st,rT),e(st,gi),e(gi,aT),e(gi,_i),e(_i,iT),e(gi,lT),e(st,dT),e(st,Ic),e(Ic,cT),e(st,pT),e(st,to),e(to,Lc),e(Lc,bi),e(bi,hT),e(to,mT),e(to,Sc),e(Sc,ki),e(ki,uT),e(to,fT),e(to,Wc),e(Wc,vi),e(vi,gT),e(to,_T),e(to,Qc),e(Qc,wi),e(wi,bT),e(st,kT),e(st,Wt),$(Ti,Wt,null),e(Wt,vT),e(Wt,is),e(is,wT),e(is,Rc),e(Rc,TT),e(is,$T),e(is,Uc),e(Uc,yT),e(is,DT),e(Wt,FT),$(xn,Wt,null),e(Wt,BT),$(Mn,Wt,null),_(n,Dh,b),_(n,ls,b),e(ls,jn),e(jn,Kc),$($i,Kc,null),e(ls,ET),e(ls,Hc),e(Hc,xT),_(n,Fh,b),_(n,nt,b),$(yi,nt,null),e(nt,MT),e(nt,ds),e(ds,jT),e(ds,Vc),e(Vc,CT),e(ds,zT),e(ds,Jc),e(Jc,PT),e(ds,qT),e(nt,AT),e(nt,Di),e(Di,OT),e(Di,Fl),e(Fl,NT),e(Di,IT),e(nt,LT),e(nt,Fi),e(Fi,ST),e(Fi,Bi),e(Bi,WT),e(Fi,QT),e(nt,RT),e(nt,Gc),e(Gc,UT),e(nt,KT),e(nt,oo),e(oo,Xc),e(Xc,Ei),e(Ei,HT),e(oo,VT),e(oo,Yc),e(Yc,xi),e(xi,JT),e(oo,GT),e(oo,Zc),e(Zc,Mi),e(Mi,XT),e(oo,YT),e(oo,ep),e(ep,ji),e(ji,ZT),e(nt,e$),e(nt,Qt),$(Ci,Qt,null),e(Qt,t$),e(Qt,cs),e(cs,o$),e(cs,tp),e(tp,s$),e(cs,n$),e(cs,op),e(op,r$),e(cs,a$),e(Qt,i$),$(Cn,Qt,null),e(Qt,l$),$(zn,Qt,null),Bh=!0},p(n,[b]){const zi={};b&2&&(zi.$$scope={dirty:b,ctx:n}),hs.$set(zi);const sp={};b&2&&(sp.$$scope={dirty:b,ctx:n}),bs.$set(sp);const np={};b&2&&(np.$$scope={dirty:b,ctx:n}),ks.$set(np);const rp={};b&2&&(rp.$$scope={dirty:b,ctx:n}),ws.$set(rp);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:n}),Ts.$set(Pi);const ap={};b&2&&(ap.$$scope={dirty:b,ctx:n}),$s.$set(ap);const ip={};b&2&&(ip.$$scope={dirty:b,ctx:n}),Ds.$set(ip);const lp={};b&2&&(lp.$$scope={dirty:b,ctx:n}),Fs.$set(lp);const so={};b&2&&(so.$$scope={dirty:b,ctx:n}),Bs.$set(so);const dp={};b&2&&(dp.$$scope={dirty:b,ctx:n}),Es.$set(dp);const cp={};b&2&&(cp.$$scope={dirty:b,ctx:n}),xs.$set(cp);const pp={};b&2&&(pp.$$scope={dirty:b,ctx:n}),js.$set(pp);const hp={};b&2&&(hp.$$scope={dirty:b,ctx:n}),Cs.$set(hp);const mp={};b&2&&(mp.$$scope={dirty:b,ctx:n}),Ps.$set(mp);const up={};b&2&&(up.$$scope={dirty:b,ctx:n}),qs.$set(up);const fp={};b&2&&(fp.$$scope={dirty:b,ctx:n}),As.$set(fp);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:n}),Ns.$set(qi);const no={};b&2&&(no.$$scope={dirty:b,ctx:n}),Is.$set(no);const gp={};b&2&&(gp.$$scope={dirty:b,ctx:n}),Ls.$set(gp);const _p={};b&2&&(_p.$$scope={dirty:b,ctx:n}),Ws.$set(_p);const bp={};b&2&&(bp.$$scope={dirty:b,ctx:n}),Qs.$set(bp);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:n}),Rs.$set(Ai);const kp={};b&2&&(kp.$$scope={dirty:b,ctx:n}),Ks.$set(kp);const ro={};b&2&&(ro.$$scope={dirty:b,ctx:n}),Hs.$set(ro);const vp={};b&2&&(vp.$$scope={dirty:b,ctx:n}),Vs.$set(vp);const wp={};b&2&&(wp.$$scope={dirty:b,ctx:n}),Js.$set(wp);const Tp={};b&2&&(Tp.$$scope={dirty:b,ctx:n}),Xs.$set(Tp);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:n}),Ys.$set(Oi);const $p={};b&2&&($p.$$scope={dirty:b,ctx:n}),Zs.$set($p);const yp={};b&2&&(yp.$$scope={dirty:b,ctx:n}),en.$set(yp);const Dp={};b&2&&(Dp.$$scope={dirty:b,ctx:n}),on.$set(Dp);const ao={};b&2&&(ao.$$scope={dirty:b,ctx:n}),sn.$set(ao);const io={};b&2&&(io.$$scope={dirty:b,ctx:n}),nn.$set(io);const Fp={};b&2&&(Fp.$$scope={dirty:b,ctx:n}),an.$set(Fp);const Bp={};b&2&&(Bp.$$scope={dirty:b,ctx:n}),ln.$set(Bp);const Ep={};b&2&&(Ep.$$scope={dirty:b,ctx:n}),dn.$set(Ep);const ps={};b&2&&(ps.$$scope={dirty:b,ctx:n}),cn.$set(ps);const xp={};b&2&&(xp.$$scope={dirty:b,ctx:n}),hn.$set(xp);const Mp={};b&2&&(Mp.$$scope={dirty:b,ctx:n}),mn.$set(Mp);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:n}),un.$set(Ni);const jp={};b&2&&(jp.$$scope={dirty:b,ctx:n}),fn.$set(jp);const Cp={};b&2&&(Cp.$$scope={dirty:b,ctx:n}),_n.$set(Cp);const zp={};b&2&&(zp.$$scope={dirty:b,ctx:n}),bn.$set(zp);const lo={};b&2&&(lo.$$scope={dirty:b,ctx:n}),vn.$set(lo);const Pp={};b&2&&(Pp.$$scope={dirty:b,ctx:n}),wn.$set(Pp);const Pn={};b&2&&(Pn.$$scope={dirty:b,ctx:n}),$n.$set(Pn);const qp={};b&2&&(qp.$$scope={dirty:b,ctx:n}),yn.$set(qp);const Ap={};b&2&&(Ap.$$scope={dirty:b,ctx:n}),Fn.$set(Ap);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:n}),Bn.$set(Ii);const Op={};b&2&&(Op.$$scope={dirty:b,ctx:n}),xn.$set(Op);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:n}),Mn.$set(Li);const Np={};b&2&&(Np.$$scope={dirty:b,ctx:n}),Cn.$set(Np);const Ip={};b&2&&(Ip.$$scope={dirty:b,ctx:n}),zn.$set(Ip)},i(n){Bh||(y(l.$$.fragment,n),y(B.$$.fragment,n),y(W.$$.fragment,n),y(Ie.$$.fragment,n),y(hs.$$.fragment,n),y(Zn.$$.fragment,n),y(er.$$.fragment,n),y(or.$$.fragment,n),y(sr.$$.fragment,n),y(ar.$$.fragment,n),y(ir.$$.fragment,n),y(pr.$$.fragment,n),y(bs.$$.fragment,n),y(ks.$$.fragment,n),y(hr.$$.fragment,n),y(mr.$$.fragment,n),y(br.$$.fragment,n),y(ws.$$.fragment,n),y(Ts.$$.fragment,n),y($s.$$.fragment,n),y(kr.$$.fragment,n),y(vr.$$.fragment,n),y(yr.$$.fragment,n),y(Ds.$$.fragment,n),y(Fs.$$.fragment,n),y(Bs.$$.fragment,n),y(Es.$$.fragment,n),y(xs.$$.fragment,n),y(Dr.$$.fragment,n),y(Fr.$$.fragment,n),y(Mr.$$.fragment,n),y(js.$$.fragment,n),y(Cs.$$.fragment,n),y(jr.$$.fragment,n),y(Cr.$$.fragment,n),y(Ar.$$.fragment,n),y(Ps.$$.fragment,n),y(qs.$$.fragment,n),y(As.$$.fragment,n),y(Or.$$.fragment,n),y(Nr.$$.fragment,n),y(Wr.$$.fragment,n),y(Ns.$$.fragment,n),y(Is.$$.fragment,n),y(Ls.$$.fragment,n),y(Qr.$$.fragment,n),y(Rr.$$.fragment,n),y(Ws.$$.fragment,n),y(Vr.$$.fragment,n),y(Qs.$$.fragment,n),y(Rs.$$.fragment,n),y(Jr.$$.fragment,n),y(Gr.$$.fragment,n),y(Ks.$$.fragment,n),y(ta.$$.fragment,n),y(Hs.$$.fragment,n),y(Vs.$$.fragment,n),y(Js.$$.fragment,n),y(oa.$$.fragment,n),y(sa.$$.fragment,n),y(Xs.$$.fragment,n),y(ia.$$.fragment,n),y(Ys.$$.fragment,n),y(Zs.$$.fragment,n),y(en.$$.fragment,n),y(la.$$.fragment,n),y(da.$$.fragment,n),y(on.$$.fragment,n),y(ma.$$.fragment,n),y(sn.$$.fragment,n),y(nn.$$.fragment,n),y(ua.$$.fragment,n),y(fa.$$.fragment,n),y(an.$$.fragment,n),y(ka.$$.fragment,n),y(ln.$$.fragment,n),y(dn.$$.fragment,n),y(cn.$$.fragment,n),y(va.$$.fragment,n),y(wa.$$.fragment,n),y(hn.$$.fragment,n),y(Da.$$.fragment,n),y(mn.$$.fragment,n),y(un.$$.fragment,n),y(fn.$$.fragment,n),y(Fa.$$.fragment,n),y(Ba.$$.fragment,n),y(qa.$$.fragment,n),y(_n.$$.fragment,n),y(bn.$$.fragment,n),y(Aa.$$.fragment,n),y(Oa.$$.fragment,n),y(Ka.$$.fragment,n),y(vn.$$.fragment,n),y(wn.$$.fragment,n),y(Ha.$$.fragment,n),y(Va.$$.fragment,n),y(oi.$$.fragment,n),y($n.$$.fragment,n),y(yn.$$.fragment,n),y(si.$$.fragment,n),y(ni.$$.fragment,n),y(hi.$$.fragment,n),y(Fn.$$.fragment,n),y(Bn.$$.fragment,n),y(mi.$$.fragment,n),y(ui.$$.fragment,n),y(Ti.$$.fragment,n),y(xn.$$.fragment,n),y(Mn.$$.fragment,n),y($i.$$.fragment,n),y(yi.$$.fragment,n),y(Ci.$$.fragment,n),y(Cn.$$.fragment,n),y(zn.$$.fragment,n),Bh=!0)},o(n){D(l.$$.fragment,n),D(B.$$.fragment,n),D(W.$$.fragment,n),D(Ie.$$.fragment,n),D(hs.$$.fragment,n),D(Zn.$$.fragment,n),D(er.$$.fragment,n),D(or.$$.fragment,n),D(sr.$$.fragment,n),D(ar.$$.fragment,n),D(ir.$$.fragment,n),D(pr.$$.fragment,n),D(bs.$$.fragment,n),D(ks.$$.fragment,n),D(hr.$$.fragment,n),D(mr.$$.fragment,n),D(br.$$.fragment,n),D(ws.$$.fragment,n),D(Ts.$$.fragment,n),D($s.$$.fragment,n),D(kr.$$.fragment,n),D(vr.$$.fragment,n),D(yr.$$.fragment,n),D(Ds.$$.fragment,n),D(Fs.$$.fragment,n),D(Bs.$$.fragment,n),D(Es.$$.fragment,n),D(xs.$$.fragment,n),D(Dr.$$.fragment,n),D(Fr.$$.fragment,n),D(Mr.$$.fragment,n),D(js.$$.fragment,n),D(Cs.$$.fragment,n),D(jr.$$.fragment,n),D(Cr.$$.fragment,n),D(Ar.$$.fragment,n),D(Ps.$$.fragment,n),D(qs.$$.fragment,n),D(As.$$.fragment,n),D(Or.$$.fragment,n),D(Nr.$$.fragment,n),D(Wr.$$.fragment,n),D(Ns.$$.fragment,n),D(Is.$$.fragment,n),D(Ls.$$.fragment,n),D(Qr.$$.fragment,n),D(Rr.$$.fragment,n),D(Ws.$$.fragment,n),D(Vr.$$.fragment,n),D(Qs.$$.fragment,n),D(Rs.$$.fragment,n),D(Jr.$$.fragment,n),D(Gr.$$.fragment,n),D(Ks.$$.fragment,n),D(ta.$$.fragment,n),D(Hs.$$.fragment,n),D(Vs.$$.fragment,n),D(Js.$$.fragment,n),D(oa.$$.fragment,n),D(sa.$$.fragment,n),D(Xs.$$.fragment,n),D(ia.$$.fragment,n),D(Ys.$$.fragment,n),D(Zs.$$.fragment,n),D(en.$$.fragment,n),D(la.$$.fragment,n),D(da.$$.fragment,n),D(on.$$.fragment,n),D(ma.$$.fragment,n),D(sn.$$.fragment,n),D(nn.$$.fragment,n),D(ua.$$.fragment,n),D(fa.$$.fragment,n),D(an.$$.fragment,n),D(ka.$$.fragment,n),D(ln.$$.fragment,n),D(dn.$$.fragment,n),D(cn.$$.fragment,n),D(va.$$.fragment,n),D(wa.$$.fragment,n),D(hn.$$.fragment,n),D(Da.$$.fragment,n),D(mn.$$.fragment,n),D(un.$$.fragment,n),D(fn.$$.fragment,n),D(Fa.$$.fragment,n),D(Ba.$$.fragment,n),D(qa.$$.fragment,n),D(_n.$$.fragment,n),D(bn.$$.fragment,n),D(Aa.$$.fragment,n),D(Oa.$$.fragment,n),D(Ka.$$.fragment,n),D(vn.$$.fragment,n),D(wn.$$.fragment,n),D(Ha.$$.fragment,n),D(Va.$$.fragment,n),D(oi.$$.fragment,n),D($n.$$.fragment,n),D(yn.$$.fragment,n),D(si.$$.fragment,n),D(ni.$$.fragment,n),D(hi.$$.fragment,n),D(Fn.$$.fragment,n),D(Bn.$$.fragment,n),D(mi.$$.fragment,n),D(ui.$$.fragment,n),D(Ti.$$.fragment,n),D(xn.$$.fragment,n),D(Mn.$$.fragment,n),D($i.$$.fragment,n),D(yi.$$.fragment,n),D(Ci.$$.fragment,n),D(Cn.$$.fragment,n),D(zn.$$.fragment,n),Bh=!1},d(n){t(d),n&&t(g),n&&t(c),F(l),n&&t(ge),n&&t(I),F(B),n&&t(_e),n&&t(O),n&&t(be),n&&t(te),n&&t(q),n&&t(le),n&&t(ke),n&&t(R),n&&t(ve),n&&t(z),n&&t(v),n&&t(x),n&&t(N),n&&t(S),F(W),n&&t(Re),n&&t(Q),F(Ie),F(hs),n&&t(Sp),n&&t(yo),F(Zn),n&&t(Wp),n&&t(Ct),F(er),n&&t(Qp),n&&t(Do),F(or),n&&t(Rp),n&&t(zt),F(sr),n&&t(Up),n&&t(Fo),F(ar),n&&t(Kp),n&&t(ht),F(ir),F(pr),F(bs),F(ks),n&&t(Hp),n&&t(Eo),F(hr),n&&t(Vp),n&&t(mt),F(mr),F(br),F(ws),F(Ts),F($s),n&&t(Jp),n&&t(Mo),F(kr),n&&t(Gp),n&&t(ut),F(vr),F(yr),F(Ds),F(Fs),F(Bs),F(Es),F(xs),n&&t(Xp),n&&t(Co),F(Dr),n&&t(Yp),n&&t(ft),F(Fr),F(Mr),F(js),F(Cs),n&&t(Zp),n&&t(Po),F(jr),n&&t(eh),n&&t(gt),F(Cr),F(Ar),F(Ps),F(qs),F(As),n&&t(th),n&&t(Ao),F(Or),n&&t(oh),n&&t(_t),F(Nr),F(Wr),F(Ns),F(Is),F(Ls),n&&t(sh),n&&t(Io),F(Qr),n&&t(nh),n&&t(at),F(Rr),F(Ws),F(Vr),F(Qs),F(Rs),n&&t(rh),n&&t(So),F(Jr),n&&t(ah),n&&t(it),F(Gr),F(Ks),F(ta),F(Hs),F(Vs),F(Js),n&&t(ih),n&&t(Qo),F(oa),n&&t(lh),n&&t(lt),F(sa),F(Xs),F(ia),F(Ys),F(Zs),F(en),n&&t(dh),n&&t(Uo),F(la),n&&t(ch),n&&t(dt),F(da),F(on),F(ma),F(sn),F(nn),n&&t(ph),n&&t(Ho),F(ua),n&&t(hh),n&&t(ct),F(fa),F(an),F(ka),F(ln),F(dn),F(cn),n&&t(mh),n&&t(Jo),F(va),n&&t(uh),n&&t(pt),F(wa),F(hn),F(Da),F(mn),F(un),F(fn),n&&t(fh),n&&t(Yo),F(Fa),n&&t(gh),n&&t(Ze),F(Ba),F(qa),F(_n),F(bn),n&&t(_h),n&&t(es),F(Aa),n&&t(bh),n&&t(et),F(Oa),F(Ka),F(vn),F(wn),n&&t(kh),n&&t(os),F(Ha),n&&t(vh),n&&t(tt),F(Va),F(oi),F($n),F(yn),n&&t(wh),n&&t(ns),F(si),n&&t(Th),n&&t(ot),F(ni),F(hi),F(Fn),F(Bn),n&&t($h),n&&t(as),F(mi),n&&t(yh),n&&t(st),F(ui),F(Ti),F(xn),F(Mn),n&&t(Dh),n&&t(ls),F($i),n&&t(Fh),n&&t(nt),F(yi),F(Ci),F(Cn),F(zn)}}}const nF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rF(E){return sD(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hF extends Z2{constructor(d){super();eD(this,d,rF,sF,tD,{})}}export{hF as default,nF as metadata};
