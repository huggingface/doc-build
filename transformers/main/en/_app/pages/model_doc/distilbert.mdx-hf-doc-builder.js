import{S as Z2,i as eF,s as tF,e as r,k as h,w,t as s,M as sF,c as a,d as t,m,a as i,x as T,h as o,b as f,G as e,g as _,y as $,q as y,o as F,B as D,v as oF,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as Le}from"../../chunks/Tip-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=s("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Examples:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function rF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function aF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function iF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function lF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function dF(E){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function cF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function pF(E){let d,g,c,u,k;return u=new fe({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=s("Example of single-label classification:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example of single-label classification:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function hF(E){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function mF(E){let d,g,c,u,k;return u=new fe({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=s("Example of multi-label classification:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function uF(E){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function fF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function gF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=s("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Examples:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function _F(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function bF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function kF(E){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function vF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function wF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function TF(E){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function $F(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=s("TensorFlow models and layers in "),c=r("code"),u=s("transformers"),k=s(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=s("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=s("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),B=r("p"),Te=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=s("model.fit()"),_e=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=s("model.fit()"),ae=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Fe=s("fit()"),ie=s(" and "),V=r("code"),De=s("predict()"),de=s(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=s("Functional"),be=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=s("a single Tensor with "),K=r("code"),Ee=s("input_ids"),ke=s(" only and nothing else: "),R=r("code"),xe=s("model(input_ids)"),ve=h(),C=r("li"),oe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=s("model([input_ids, attention_mask])"),Me=s(" or "),X=r("code"),pe=s("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=s(`Note that when creating models and layers with
`),A=r("a"),Pe=s("subclassing"),qe=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=o(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=o(Ue,"transformers"),Ue.forEach(t),k=o(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=o(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=o(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),se=m(v),B=a(v,"P",{});var j=i(B);Te=o(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=o(Ve,"model.fit()"),Ve.forEach(t),_e=o(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=o(Je,"model.fit()"),Je.forEach(t),ae=o(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);Fe=o(Ne,"fit()"),Ne.forEach(t),ie=o(j," and "),V=a(j,"CODE",{});var Ge=i(V);De=o(Ge,"predict()"),Ge.forEach(t),de=o(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=o(Xe,"Functional"),Xe.forEach(t),be=o(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),z=a(v,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=o(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=o(Oe,"input_ids"),Oe.forEach(t),ke=o(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=o(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),C=a(N,"LI",{});var W=i(C);oe=o(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=o(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=o(W," or "),X=a(W,"CODE",{});var We=i(X);pe=o(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=o(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=o(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);Ce=o(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=o(Ie,"subclassing"),Ie.forEach(t),qe=o(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,se,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,Fe),e(B,ie),e(B,V),e(V,De),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(z,ve),e(z,C),e(C,oe),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(v,ne,x),_(v,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(se),v&&t(B),v&&t(te),v&&t(z),v&&t(ne),v&&t(P)}}}function yF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function FF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function DF(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=s("TensorFlow models and layers in "),c=r("code"),u=s("transformers"),k=s(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=s("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=s("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),B=r("p"),Te=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=s("model.fit()"),_e=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=s("model.fit()"),ae=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Fe=s("fit()"),ie=s(" and "),V=r("code"),De=s("predict()"),de=s(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=s("Functional"),be=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=s("a single Tensor with "),K=r("code"),Ee=s("input_ids"),ke=s(" only and nothing else: "),R=r("code"),xe=s("model(input_ids)"),ve=h(),C=r("li"),oe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=s("model([input_ids, attention_mask])"),Me=s(" or "),X=r("code"),pe=s("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=s(`Note that when creating models and layers with
`),A=r("a"),Pe=s("subclassing"),qe=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=o(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=o(Ue,"transformers"),Ue.forEach(t),k=o(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=o(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=o(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),se=m(v),B=a(v,"P",{});var j=i(B);Te=o(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=o(Ve,"model.fit()"),Ve.forEach(t),_e=o(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=o(Je,"model.fit()"),Je.forEach(t),ae=o(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);Fe=o(Ne,"fit()"),Ne.forEach(t),ie=o(j," and "),V=a(j,"CODE",{});var Ge=i(V);De=o(Ge,"predict()"),Ge.forEach(t),de=o(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=o(Xe,"Functional"),Xe.forEach(t),be=o(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),z=a(v,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=o(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=o(Oe,"input_ids"),Oe.forEach(t),ke=o(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=o(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),C=a(N,"LI",{});var W=i(C);oe=o(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=o(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=o(W," or "),X=a(W,"CODE",{});var We=i(X);pe=o(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=o(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=o(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);Ce=o(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=o(Ie,"subclassing"),Ie.forEach(t),qe=o(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,se,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,Fe),e(B,ie),e(B,V),e(V,De),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(z,ve),e(z,C),e(C,oe),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(v,ne,x),_(v,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(se),v&&t(B),v&&t(te),v&&t(z),v&&t(ne),v&&t(P)}}}function BF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function EF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function xF(E){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function MF(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=s("TensorFlow models and layers in "),c=r("code"),u=s("transformers"),k=s(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=s("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=s("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),B=r("p"),Te=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=s("model.fit()"),_e=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=s("model.fit()"),ae=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Fe=s("fit()"),ie=s(" and "),V=r("code"),De=s("predict()"),de=s(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=s("Functional"),be=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=s("a single Tensor with "),K=r("code"),Ee=s("input_ids"),ke=s(" only and nothing else: "),R=r("code"),xe=s("model(input_ids)"),ve=h(),C=r("li"),oe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=s("model([input_ids, attention_mask])"),Me=s(" or "),X=r("code"),pe=s("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=s(`Note that when creating models and layers with
`),A=r("a"),Pe=s("subclassing"),qe=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=o(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=o(Ue,"transformers"),Ue.forEach(t),k=o(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=o(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=o(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),se=m(v),B=a(v,"P",{});var j=i(B);Te=o(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=o(Ve,"model.fit()"),Ve.forEach(t),_e=o(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=o(Je,"model.fit()"),Je.forEach(t),ae=o(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);Fe=o(Ne,"fit()"),Ne.forEach(t),ie=o(j," and "),V=a(j,"CODE",{});var Ge=i(V);De=o(Ge,"predict()"),Ge.forEach(t),de=o(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=o(Xe,"Functional"),Xe.forEach(t),be=o(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),z=a(v,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=o(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=o(Oe,"input_ids"),Oe.forEach(t),ke=o(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=o(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),C=a(N,"LI",{});var W=i(C);oe=o(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=o(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=o(W," or "),X=a(W,"CODE",{});var We=i(X);pe=o(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=o(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=o(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);Ce=o(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=o(Ie,"subclassing"),Ie.forEach(t),qe=o(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,se,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,Fe),e(B,ie),e(B,V),e(V,De),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(z,ve),e(z,C),e(C,oe),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(v,ne,x),_(v,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(se),v&&t(B),v&&t(te),v&&t(z),v&&t(ne),v&&t(P)}}}function jF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function zF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function CF(E){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function PF(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=s("TensorFlow models and layers in "),c=r("code"),u=s("transformers"),k=s(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=s("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=s("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),B=r("p"),Te=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=s("model.fit()"),_e=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=s("model.fit()"),ae=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Fe=s("fit()"),ie=s(" and "),V=r("code"),De=s("predict()"),de=s(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=s("Functional"),be=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=s("a single Tensor with "),K=r("code"),Ee=s("input_ids"),ke=s(" only and nothing else: "),R=r("code"),xe=s("model(input_ids)"),ve=h(),C=r("li"),oe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=s("model([input_ids, attention_mask])"),Me=s(" or "),X=r("code"),pe=s("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=s(`Note that when creating models and layers with
`),A=r("a"),Pe=s("subclassing"),qe=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=o(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=o(Ue,"transformers"),Ue.forEach(t),k=o(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=o(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=o(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),se=m(v),B=a(v,"P",{});var j=i(B);Te=o(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=o(Ve,"model.fit()"),Ve.forEach(t),_e=o(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=o(Je,"model.fit()"),Je.forEach(t),ae=o(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);Fe=o(Ne,"fit()"),Ne.forEach(t),ie=o(j," and "),V=a(j,"CODE",{});var Ge=i(V);De=o(Ge,"predict()"),Ge.forEach(t),de=o(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=o(Xe,"Functional"),Xe.forEach(t),be=o(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),z=a(v,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=o(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=o(Oe,"input_ids"),Oe.forEach(t),ke=o(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=o(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),C=a(N,"LI",{});var W=i(C);oe=o(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=o(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=o(W," or "),X=a(W,"CODE",{});var We=i(X);pe=o(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=o(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=o(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);Ce=o(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=o(Ie,"subclassing"),Ie.forEach(t),qe=o(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,se,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,Fe),e(B,ie),e(B,V),e(V,De),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(z,ve),e(z,C),e(C,oe),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(v,ne,x),_(v,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(se),v&&t(B),v&&t(te),v&&t(z),v&&t(ne),v&&t(P)}}}function qF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function AF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function OF(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=s("TensorFlow models and layers in "),c=r("code"),u=s("transformers"),k=s(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=s("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=s("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),B=r("p"),Te=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=s("model.fit()"),_e=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=s("model.fit()"),ae=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Fe=s("fit()"),ie=s(" and "),V=r("code"),De=s("predict()"),de=s(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=s("Functional"),be=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=s("a single Tensor with "),K=r("code"),Ee=s("input_ids"),ke=s(" only and nothing else: "),R=r("code"),xe=s("model(input_ids)"),ve=h(),C=r("li"),oe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=s("model([input_ids, attention_mask])"),Me=s(" or "),X=r("code"),pe=s("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=s(`Note that when creating models and layers with
`),A=r("a"),Pe=s("subclassing"),qe=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=o(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=o(Ue,"transformers"),Ue.forEach(t),k=o(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=o(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=o(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),se=m(v),B=a(v,"P",{});var j=i(B);Te=o(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=o(Ve,"model.fit()"),Ve.forEach(t),_e=o(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=o(Je,"model.fit()"),Je.forEach(t),ae=o(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);Fe=o(Ne,"fit()"),Ne.forEach(t),ie=o(j," and "),V=a(j,"CODE",{});var Ge=i(V);De=o(Ge,"predict()"),Ge.forEach(t),de=o(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=o(Xe,"Functional"),Xe.forEach(t),be=o(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),z=a(v,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=o(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=o(Oe,"input_ids"),Oe.forEach(t),ke=o(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=o(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),C=a(N,"LI",{});var W=i(C);oe=o(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=o(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=o(W," or "),X=a(W,"CODE",{});var We=i(X);pe=o(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=o(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=o(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);Ce=o(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=o(Ie,"subclassing"),Ie.forEach(t),qe=o(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,se,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,Fe),e(B,ie),e(B,V),e(V,De),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(z,ve),e(z,C),e(C,oe),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(v,ne,x),_(v,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(se),v&&t(B),v&&t(te),v&&t(z),v&&t(ne),v&&t(P)}}}function NF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function IF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function LF(E){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function SF(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe;return{c(){d=r("p"),g=s("TensorFlow models and layers in "),c=r("code"),u=s("transformers"),k=s(" accept two formats as input:"),l=h(),p=r("ul"),M=r("li"),we=s("having all inputs as keyword arguments (like PyTorch models), or"),ge=h(),I=r("li"),re=s("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),B=r("p"),Te=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),$e=s("model.fit()"),_e=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r("code"),ye=s("model.fit()"),ae=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Fe=s("fit()"),ie=s(" and "),V=r("code"),De=s("predict()"),de=s(`, such as when creating your own layers or models with
the Keras `),J=r("code"),Be=s("Functional"),be=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),z=r("ul"),q=r("li"),le=s("a single Tensor with "),K=r("code"),Ee=s("input_ids"),ke=s(" only and nothing else: "),R=r("code"),xe=s("model(input_ids)"),ve=h(),C=r("li"),oe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r("code"),ce=s("model([input_ids, attention_mask])"),Me=s(" or "),X=r("code"),pe=s("model([input_ids, attention_mask, token_type_ids])"),je=h(),L=r("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=h(),P=r("p"),Ce=s(`Note that when creating models and layers with
`),A=r("a"),Pe=s("subclassing"),qe=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var x=i(d);g=o(x,"TensorFlow models and layers in "),c=a(x,"CODE",{});var Ue=i(c);u=o(Ue,"transformers"),Ue.forEach(t),k=o(x," accept two formats as input:"),x.forEach(t),l=m(v),p=a(v,"UL",{});var ee=i(p);M=a(ee,"LI",{});var Ke=i(M);we=o(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),ge=m(ee),I=a(ee,"LI",{});var He=i(I);re=o(He,"having all inputs as a list, tuple or dict in the first positional argument."),He.forEach(t),ee.forEach(t),se=m(v),B=a(v,"P",{});var j=i(B);Te=o(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(j,"CODE",{});var Ve=i(U);$e=o(Ve,"model.fit()"),Ve.forEach(t),_e=o(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a(j,"CODE",{});var Je=i(O);ye=o(Je,"model.fit()"),Je.forEach(t),ae=o(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(j,"CODE",{});var Ne=i(H);Fe=o(Ne,"fit()"),Ne.forEach(t),ie=o(j," and "),V=a(j,"CODE",{});var Ge=i(V);De=o(Ge,"predict()"),Ge.forEach(t),de=o(j,`, such as when creating your own layers or models with
the Keras `),J=a(j,"CODE",{});var Xe=i(J);Be=o(Xe,"Functional"),Xe.forEach(t),be=o(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),te=m(v),z=a(v,"UL",{});var N=i(z);q=a(N,"LI",{});var S=i(q);le=o(S,"a single Tensor with "),K=a(S,"CODE",{});var Oe=i(K);Ee=o(Oe,"input_ids"),Oe.forEach(t),ke=o(S," only and nothing else: "),R=a(S,"CODE",{});var Se=i(R);xe=o(Se,"model(input_ids)"),Se.forEach(t),S.forEach(t),ve=m(N),C=a(N,"LI",{});var W=i(C);oe=o(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a(W,"CODE",{});var Ye=i(G);ce=o(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Me=o(W," or "),X=a(W,"CODE",{});var We=i(X);pe=o(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),je=m(N),L=a(N,"LI",{});var Ae=i(L);he=o(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ae,"CODE",{});var Re=i(Y);ze=o(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ae.forEach(t),N.forEach(t),ne=m(v),P=a(v,"P",{});var Q=i(P);Ce=o(Q,`Note that when creating models and layers with
`),A=a(Q,"A",{href:!0,rel:!0});var Ie=i(A);Pe=o(Ie,"subclassing"),Ie.forEach(t),qe=o(Q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Q.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,x){_(v,d,x),e(d,g),e(d,c),e(c,u),e(d,k),_(v,l,x),_(v,p,x),e(p,M),e(M,we),e(p,ge),e(p,I),e(I,re),_(v,se,x),_(v,B,x),e(B,Te),e(B,U),e(U,$e),e(B,_e),e(B,O),e(O,ye),e(B,ae),e(B,H),e(H,Fe),e(B,ie),e(B,V),e(V,De),e(B,de),e(B,J),e(J,Be),e(B,be),_(v,te,x),_(v,z,x),e(z,q),e(q,le),e(q,K),e(K,Ee),e(q,ke),e(q,R),e(R,xe),e(z,ve),e(z,C),e(C,oe),e(C,G),e(G,ce),e(C,Me),e(C,X),e(X,pe),e(z,je),e(z,L),e(L,he),e(L,Y),e(Y,ze),_(v,ne,x),_(v,P,x),e(P,Ce),e(P,A),e(A,Pe),e(P,qe)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(se),v&&t(B),v&&t(te),v&&t(z),v&&t(ne),v&&t(P)}}}function WF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function QF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function RF(E){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){$(d,c,u),g=!0},p:ue,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function UF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function KF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function HF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function VF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function JF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function GF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function XF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function YF(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function ZF(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function eD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function tD(E){let d,g,c,u,k;return{c(){d=r("p"),g=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var M=i(c);u=o(M,"Module"),M.forEach(t),k=o(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function sD(E){let d,g,c,u,k;return u=new fe({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=s("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=o(p,"Example:"),p.forEach(t),c=m(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(u,l,p),k=!0},p:ue,i(l){k||(y(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),D(u,l)}}}function oD(E){let d,g,c,u,k,l,p,M,we,ge,I,re,se,B,Te,U,$e,_e,O,ye,ae,H,Fe,ie,V,De,de,J,Be,be,te,z,q,le,K,Ee,ke,R,xe,ve,C,oe,G,ce,Me,X,pe,je,L,he,Y,ze,ne,P,Ce,A,Pe,qe,v,x,Ue,ee,Ke,He,j,Ve,Je,Ne,Ge,Xe,N,S,Oe,Se,W,Ye,We,Ae,Re,Q,Ie,Cm,Gt,Pm,Si,qm,Am,Wi,Om,Nm,Yn,Im,Lm,Sm,Ts,Wm,Qi,Qm,Rm,Ri,Um,Km,Hm,ho,Sp,$s,mo,Vl,Zn,Vm,Jl,Jm,Wp,zt,er,Gm,Gl,Xm,Ym,uo,Ui,Zm,eu,Ki,tu,su,ou,tr,nu,Hi,ru,au,Qp,ys,fo,Xl,sr,iu,Yl,lu,Rp,Ct,or,du,nr,cu,Zl,pu,hu,mu,go,Vi,uu,fu,Ji,gu,_u,bu,rr,ku,Gi,vu,wu,Up,Fs,_o,ed,ar,Tu,td,$u,Kp,ht,ir,yu,sd,Fu,Du,lr,Bu,Xi,Eu,xu,Mu,dr,ju,cr,zu,Cu,Pu,Pt,pr,qu,Ds,Au,Yi,Ou,Nu,od,Iu,Lu,Su,bo,Wu,ko,Hp,Bs,vo,nd,hr,Qu,rd,Ru,Vp,mt,mr,Uu,ur,Ku,ad,Hu,Vu,Ju,fr,Gu,Zi,Xu,Yu,Zu,gr,ef,_r,tf,sf,of,bt,br,nf,Es,rf,el,af,lf,id,df,cf,pf,wo,hf,To,mf,$o,Jp,xs,yo,ld,kr,uf,dd,ff,Gp,ut,vr,gf,cd,_f,bf,wr,kf,tl,vf,wf,Tf,Tr,$f,$r,yf,Ff,Df,rt,yr,Bf,Ms,Ef,sl,xf,Mf,pd,jf,zf,Cf,Fo,Pf,Do,qf,Bo,Af,Eo,Of,xo,Xp,js,Mo,hd,Fr,Nf,md,If,Yp,ft,Dr,Lf,ud,Sf,Wf,Br,Qf,ol,Rf,Uf,Kf,Er,Hf,xr,Vf,Jf,Gf,qt,Mr,Xf,zs,Yf,nl,Zf,eg,fd,tg,sg,og,jo,ng,zo,Zp,Cs,Co,gd,jr,rg,_d,ag,eh,gt,zr,ig,bd,lg,dg,Cr,cg,rl,pg,hg,mg,Pr,ug,qr,fg,gg,_g,kt,Ar,bg,Ps,kg,al,vg,wg,kd,Tg,$g,yg,Po,Fg,qo,Dg,Ao,th,qs,Oo,vd,Or,Bg,wd,Eg,sh,_t,Nr,xg,As,Mg,Td,jg,zg,$d,Cg,Pg,qg,Ir,Ag,il,Og,Ng,Ig,Lr,Lg,Sr,Sg,Wg,Qg,vt,Wr,Rg,Os,Ug,ll,Kg,Hg,yd,Vg,Jg,Gg,No,Xg,Io,Yg,Lo,oh,Ns,So,Fd,Qr,Zg,Dd,e_,nh,at,Rr,t_,Bd,s_,o_,Ur,n_,dl,r_,a_,i_,Kr,l_,Hr,d_,c_,p_,Wo,h_,At,Vr,m_,Is,u_,cl,f_,g_,Ed,__,b_,k_,Qo,v_,Ro,rh,Ls,Uo,xd,Jr,w_,Md,T_,ah,it,Gr,$_,Xr,y_,jd,F_,D_,B_,Yr,E_,pl,x_,M_,j_,Zr,z_,ea,C_,P_,q_,Ko,A_,wt,ta,O_,Ss,N_,hl,I_,L_,zd,S_,W_,Q_,Ho,R_,Vo,U_,Jo,ih,Ws,Go,Cd,sa,K_,Pd,H_,lh,lt,oa,V_,qd,J_,G_,na,X_,ml,Y_,Z_,eb,ra,tb,aa,sb,ob,nb,Xo,rb,Tt,ia,ab,Qs,ib,ul,lb,db,Ad,cb,pb,hb,Yo,mb,Zo,ub,en,dh,Rs,tn,Od,la,fb,Nd,gb,ch,dt,da,_b,Id,bb,kb,ca,vb,fl,wb,Tb,$b,pa,yb,ha,Fb,Db,Bb,sn,Eb,Ot,ma,xb,Us,Mb,gl,jb,zb,Ld,Cb,Pb,qb,on,Ab,nn,ph,Ks,rn,Sd,ua,Ob,Wd,Nb,hh,ct,fa,Ib,Qd,Lb,Sb,ga,Wb,_l,Qb,Rb,Ub,_a,Kb,ba,Hb,Vb,Jb,an,Gb,$t,ka,Xb,Hs,Yb,bl,Zb,ek,Rd,tk,sk,ok,ln,nk,dn,rk,cn,mh,Vs,pn,Ud,va,ak,Kd,ik,uh,pt,wa,lk,Js,dk,Hd,ck,pk,Vd,hk,mk,uk,Ta,fk,kl,gk,_k,bk,$a,kk,ya,vk,wk,Tk,hn,$k,yt,Fa,yk,Gs,Fk,vl,Dk,Bk,Jd,Ek,xk,Mk,mn,jk,un,zk,fn,fh,Xs,gn,Gd,Da,Ck,Xd,Pk,gh,Ze,Ba,qk,Yd,Ak,Ok,Ea,Nk,wl,Ik,Lk,Sk,xa,Wk,Ma,Qk,Rk,Uk,Zd,Kk,Hk,Xt,ec,ja,Vk,Jk,tc,za,Gk,Xk,sc,Ca,Yk,Zk,oc,Pa,ev,tv,Nt,qa,sv,Ys,ov,nc,nv,rv,rc,av,iv,lv,_n,dv,bn,_h,Zs,kn,ac,Aa,cv,ic,pv,bh,et,Oa,hv,Na,mv,lc,uv,fv,gv,Ia,_v,Tl,bv,kv,vv,La,wv,Sa,Tv,$v,yv,dc,Fv,Dv,Yt,cc,Wa,Bv,Ev,pc,Qa,xv,Mv,hc,Ra,jv,zv,mc,Ua,Cv,Pv,It,Ka,qv,eo,Av,uc,Ov,Nv,fc,Iv,Lv,Sv,vn,Wv,wn,kh,to,Tn,gc,Ha,Qv,_c,Rv,vh,tt,Va,Uv,bc,Kv,Hv,Ja,Vv,$l,Jv,Gv,Xv,Ga,Yv,Xa,Zv,ew,tw,kc,sw,ow,Zt,vc,Ya,nw,rw,wc,Za,aw,iw,Tc,ei,lw,dw,$c,ti,cw,pw,Lt,si,hw,so,mw,yc,uw,fw,Fc,gw,_w,bw,$n,kw,yn,wh,oo,Fn,Dc,oi,vw,Bc,ww,Th,st,ni,Tw,Ec,$w,yw,ri,Fw,yl,Dw,Bw,Ew,ai,xw,ii,Mw,jw,zw,xc,Cw,Pw,es,Mc,li,qw,Aw,jc,di,Ow,Nw,zc,ci,Iw,Lw,Cc,pi,Sw,Ww,St,hi,Qw,no,Rw,Pc,Uw,Kw,qc,Hw,Vw,Jw,Dn,Gw,Bn,$h,ro,En,Ac,mi,Xw,Oc,Yw,yh,ot,ui,Zw,Nc,eT,tT,fi,sT,Fl,oT,nT,rT,gi,aT,_i,iT,lT,dT,Ic,cT,pT,ts,Lc,bi,hT,mT,Sc,ki,uT,fT,Wc,vi,gT,_T,Qc,wi,bT,kT,Wt,Ti,vT,ao,wT,Rc,TT,$T,Uc,yT,FT,DT,xn,BT,Mn,Fh,io,jn,Kc,$i,ET,Hc,xT,Dh,nt,yi,MT,lo,jT,Vc,zT,CT,Jc,PT,qT,AT,Fi,OT,Dl,NT,IT,LT,Di,ST,Bi,WT,QT,RT,Gc,UT,KT,ss,Xc,Ei,HT,VT,Yc,xi,JT,GT,Zc,Mi,XT,YT,ep,ji,ZT,e$,Qt,zi,t$,co,s$,tp,o$,n$,sp,r$,a$,i$,zn,l$,Cn,Bh;return l=new Qe({}),B=new Qe({}),W=new Qe({}),Ie=new Z({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L45"}}),ho=new me({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nF]},$$scope:{ctx:E}}}),Zn=new Qe({}),er=new Z({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L62"}}),sr=new Qe({}),or=new Z({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L79"}}),ar=new Qe({}),ir=new Z({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L453"}}),pr=new Z({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L525",returnDescription:`
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
`}}),bo=new Le({props:{$$slots:{default:[rF]},$$scope:{ctx:E}}}),ko=new me({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aF]},$$scope:{ctx:E}}}),hr=new Qe({}),mr=new Z({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L581"}}),br=new Z({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L623",returnDescription:`
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
`}}),wo=new Le({props:{$$slots:{default:[iF]},$$scope:{ctx:E}}}),To=new me({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lF]},$$scope:{ctx:E}}}),$o=new me({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dF]},$$scope:{ctx:E}}}),kr=new Qe({}),vr=new Z({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L687"}}),yr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L721",returnDescription:`
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
`}}),Fo=new Le({props:{$$slots:{default:[cF]},$$scope:{ctx:E}}}),Do=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pF]},$$scope:{ctx:E}}}),Bo=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hF]},$$scope:{ctx:E}}}),Eo=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[mF]},$$scope:{ctx:E}}}),xo=new me({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[uF]},$$scope:{ctx:E}}}),Fr=new Qe({}),Dr=new Z({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1017"}}),Mr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1049",returnDescription:`
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
`}}),jo=new Le({props:{$$slots:{default:[fF]},$$scope:{ctx:E}}}),zo=new me({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gF]},$$scope:{ctx:E}}}),jr=new Qe({}),zr=new Z({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L922"}}),Ar=new Z({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L954",returnDescription:`
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
`}}),Po=new Le({props:{$$slots:{default:[_F]},$$scope:{ctx:E}}}),qo=new me({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[bF]},$$scope:{ctx:E}}}),Ao=new me({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[kF]},$$scope:{ctx:E}}}),Or=new Qe({}),Nr=new Z({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L805"}}),Wr=new Z({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L837",returnDescription:`
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
`}}),No=new Le({props:{$$slots:{default:[vF]},$$scope:{ctx:E}}}),Io=new me({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[wF]},$$scope:{ctx:E}}}),Lo=new me({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[TF]},$$scope:{ctx:E}}}),Qr=new Qe({}),Rr=new Z({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527"}}),Wo=new Le({props:{$$slots:{default:[$F]},$$scope:{ctx:E}}}),Vr=new Z({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Qo=new Le({props:{$$slots:{default:[yF]},$$scope:{ctx:E}}}),Ro=new me({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[FF]},$$scope:{ctx:E}}}),Jr=new Qe({}),Gr=new Z({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L614"}}),Ko=new Le({props:{$$slots:{default:[DF]},$$scope:{ctx:E}}}),ta=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Ho=new Le({props:{$$slots:{default:[BF]},$$scope:{ctx:E}}}),Vo=new me({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[EF]},$$scope:{ctx:E}}}),Jo=new me({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[xF]},$$scope:{ctx:E}}}),sa=new Qe({}),oa=new Z({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L704"}}),Xo=new Le({props:{$$slots:{default:[MF]},$$scope:{ctx:E}}}),ia=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Yo=new Le({props:{$$slots:{default:[jF]},$$scope:{ctx:E}}}),Zo=new me({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[zF]},$$scope:{ctx:E}}}),en=new me({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[CF]},$$scope:{ctx:E}}}),la=new Qe({}),da=new Z({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L867"}}),sn=new Le({props:{$$slots:{default:[PF]},$$scope:{ctx:E}}}),ma=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),on=new Le({props:{$$slots:{default:[qF]},$$scope:{ctx:E}}}),nn=new me({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AF]},$$scope:{ctx:E}}}),ua=new Qe({}),fa=new Z({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L791"}}),an=new Le({props:{$$slots:{default:[OF]},$$scope:{ctx:E}}}),ka=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),ln=new Le({props:{$$slots:{default:[NF]},$$scope:{ctx:E}}}),dn=new me({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[IF]},$$scope:{ctx:E}}}),cn=new me({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[LF]},$$scope:{ctx:E}}}),va=new Qe({}),wa=new Z({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L992"}}),hn=new Le({props:{$$slots:{default:[SF]},$$scope:{ctx:E}}}),Fa=new Z({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),mn=new Le({props:{$$slots:{default:[WF]},$$scope:{ctx:E}}}),un=new me({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QF]},$$scope:{ctx:E}}}),fn=new me({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RF]},$$scope:{ctx:E}}}),Da=new Qe({}),Ba=new Z({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),qa=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),_n=new Le({props:{$$slots:{default:[UF]},$$scope:{ctx:E}}}),bn=new me({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[KF]},$$scope:{ctx:E}}}),Aa=new Qe({}),Oa=new Z({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),Ka=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),vn=new Le({props:{$$slots:{default:[HF]},$$scope:{ctx:E}}}),wn=new me({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[VF]},$$scope:{ctx:E}}}),Ha=new Qe({}),Va=new Z({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),si=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),$n=new Le({props:{$$slots:{default:[JF]},$$scope:{ctx:E}}}),yn=new me({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GF]},$$scope:{ctx:E}}}),oi=new Qe({}),ni=new Z({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),hi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Dn=new Le({props:{$$slots:{default:[XF]},$$scope:{ctx:E}}}),Bn=new me({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YF]},$$scope:{ctx:E}}}),mi=new Qe({}),ui=new Z({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),Ti=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),xn=new Le({props:{$$slots:{default:[ZF]},$$scope:{ctx:E}}}),Mn=new me({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eD]},$$scope:{ctx:E}}}),$i=new Qe({}),yi=new Z({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),zi=new Z({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),zn=new Le({props:{$$slots:{default:[tD]},$$scope:{ctx:E}}}),Cn=new me({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[sD]},$$scope:{ctx:E}}}),{c(){d=r("meta"),g=h(),c=r("h1"),u=r("a"),k=r("span"),w(l.$$.fragment),p=h(),M=r("span"),we=s("DistilBERT"),ge=h(),I=r("h2"),re=r("a"),se=r("span"),w(B.$$.fragment),Te=h(),U=r("span"),$e=s("Overview"),_e=h(),O=r("p"),ye=s("The DistilBERT model was proposed in the blog post "),ae=r("a"),H=s(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),Fe=s(", and the paper "),ie=r("a"),V=s(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),De=s(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),de=r("em"),J=s("bert-base-uncased"),Be=s(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),be=h(),te=r("p"),z=s("The abstract from the paper is the following:"),q=h(),le=r("p"),K=r("em"),Ee=s(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),ke=h(),R=r("p"),xe=s("Tips:"),ve=h(),C=r("ul"),oe=r("li"),G=s("DistilBERT doesn\u2019t have "),ce=r("code"),Me=s("token_type_ids"),X=s(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),pe=r("code"),je=s("tokenizer.sep_token"),L=s(" (or "),he=r("code"),Y=s("[SEP]"),ze=s(")."),ne=h(),P=r("li"),Ce=s("DistilBERT doesn\u2019t have options to select the input positions ("),A=r("code"),Pe=s("position_ids"),qe=s(` input). This could be added if
necessary though, just let us know if you need this option.`),v=h(),x=r("p"),Ue=s("This model was contributed by "),ee=r("a"),Ke=s("victorsanh"),He=s(`. This model jax version was
contributed by `),j=r("a"),Ve=s("kamalkraj"),Je=s(". The original code can be found "),Ne=r("a"),Ge=s("here"),Xe=s("."),N=h(),S=r("h2"),Oe=r("a"),Se=r("span"),w(W.$$.fragment),Ye=h(),We=r("span"),Ae=s("DistilBertConfig"),Re=h(),Q=r("div"),w(Ie.$$.fragment),Cm=h(),Gt=r("p"),Pm=s("This is the configuration class to store the configuration of a "),Si=r("a"),qm=s("DistilBertModel"),Am=s(" or a "),Wi=r("a"),Om=s("TFDistilBertModel"),Nm=s(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),Yn=r("a"),Im=s("distilbert-base-uncased"),Lm=s(" architecture."),Sm=h(),Ts=r("p"),Wm=s("Configuration objects inherit from "),Qi=r("a"),Qm=s("PretrainedConfig"),Rm=s(` and can be used to control the model outputs. Read the
documentation from `),Ri=r("a"),Um=s("PretrainedConfig"),Km=s(" for more information."),Hm=h(),w(ho.$$.fragment),Sp=h(),$s=r("h2"),mo=r("a"),Vl=r("span"),w(Zn.$$.fragment),Vm=h(),Jl=r("span"),Jm=s("DistilBertTokenizer"),Wp=h(),zt=r("div"),w(er.$$.fragment),Gm=h(),Gl=r("p"),Xm=s("Construct a DistilBERT tokenizer."),Ym=h(),uo=r("p"),Ui=r("a"),Zm=s("DistilBertTokenizer"),eu=s(" is identical to "),Ki=r("a"),tu=s("BertTokenizer"),su=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),ou=h(),tr=r("p"),nu=s("Refer to superclass "),Hi=r("a"),ru=s("BertTokenizer"),au=s(" for usage examples and documentation concerning parameters."),Qp=h(),ys=r("h2"),fo=r("a"),Xl=r("span"),w(sr.$$.fragment),iu=h(),Yl=r("span"),lu=s("DistilBertTokenizerFast"),Rp=h(),Ct=r("div"),w(or.$$.fragment),du=h(),nr=r("p"),cu=s("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Zl=r("em"),pu=s("tokenizers"),hu=s(" library)."),mu=h(),go=r("p"),Vi=r("a"),uu=s("DistilBertTokenizerFast"),fu=s(" is identical to "),Ji=r("a"),gu=s("BertTokenizerFast"),_u=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bu=h(),rr=r("p"),ku=s("Refer to superclass "),Gi=r("a"),vu=s("BertTokenizerFast"),wu=s(" for usage examples and documentation concerning parameters."),Up=h(),Fs=r("h2"),_o=r("a"),ed=r("span"),w(ar.$$.fragment),Tu=h(),td=r("span"),$u=s("DistilBertModel"),Kp=h(),ht=r("div"),w(ir.$$.fragment),yu=h(),sd=r("p"),Fu=s("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Du=h(),lr=r("p"),Bu=s("This model inherits from "),Xi=r("a"),Eu=s("PreTrainedModel"),xu=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu=h(),dr=r("p"),ju=s("This model is also a PyTorch "),cr=r("a"),zu=s("torch.nn.Module"),Cu=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu=h(),Pt=r("div"),w(pr.$$.fragment),qu=h(),Ds=r("p"),Au=s("The "),Yi=r("a"),Ou=s("DistilBertModel"),Nu=s(" forward method, overrides the "),od=r("code"),Iu=s("__call__"),Lu=s(" special method."),Su=h(),w(bo.$$.fragment),Wu=h(),w(ko.$$.fragment),Hp=h(),Bs=r("h2"),vo=r("a"),nd=r("span"),w(hr.$$.fragment),Qu=h(),rd=r("span"),Ru=s("DistilBertForMaskedLM"),Vp=h(),mt=r("div"),w(mr.$$.fragment),Uu=h(),ur=r("p"),Ku=s("DistilBert Model with a "),ad=r("code"),Hu=s("masked language modeling"),Vu=s(" head on top."),Ju=h(),fr=r("p"),Gu=s("This model inherits from "),Zi=r("a"),Xu=s("PreTrainedModel"),Yu=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu=h(),gr=r("p"),ef=s("This model is also a PyTorch "),_r=r("a"),tf=s("torch.nn.Module"),sf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of=h(),bt=r("div"),w(br.$$.fragment),nf=h(),Es=r("p"),rf=s("The "),el=r("a"),af=s("DistilBertForMaskedLM"),lf=s(" forward method, overrides the "),id=r("code"),df=s("__call__"),cf=s(" special method."),pf=h(),w(wo.$$.fragment),hf=h(),w(To.$$.fragment),mf=h(),w($o.$$.fragment),Jp=h(),xs=r("h2"),yo=r("a"),ld=r("span"),w(kr.$$.fragment),uf=h(),dd=r("span"),ff=s("DistilBertForSequenceClassification"),Gp=h(),ut=r("div"),w(vr.$$.fragment),gf=h(),cd=r("p"),_f=s(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=h(),wr=r("p"),kf=s("This model inherits from "),tl=r("a"),vf=s("PreTrainedModel"),wf=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=h(),Tr=r("p"),$f=s("This model is also a PyTorch "),$r=r("a"),yf=s("torch.nn.Module"),Ff=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Df=h(),rt=r("div"),w(yr.$$.fragment),Bf=h(),Ms=r("p"),Ef=s("The "),sl=r("a"),xf=s("DistilBertForSequenceClassification"),Mf=s(" forward method, overrides the "),pd=r("code"),jf=s("__call__"),zf=s(" special method."),Cf=h(),w(Fo.$$.fragment),Pf=h(),w(Do.$$.fragment),qf=h(),w(Bo.$$.fragment),Af=h(),w(Eo.$$.fragment),Of=h(),w(xo.$$.fragment),Xp=h(),js=r("h2"),Mo=r("a"),hd=r("span"),w(Fr.$$.fragment),Nf=h(),md=r("span"),If=s("DistilBertForMultipleChoice"),Yp=h(),ft=r("div"),w(Dr.$$.fragment),Lf=h(),ud=r("p"),Sf=s(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wf=h(),Br=r("p"),Qf=s("This model inherits from "),ol=r("a"),Rf=s("PreTrainedModel"),Uf=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kf=h(),Er=r("p"),Hf=s("This model is also a PyTorch "),xr=r("a"),Vf=s("torch.nn.Module"),Jf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=h(),qt=r("div"),w(Mr.$$.fragment),Xf=h(),zs=r("p"),Yf=s("The "),nl=r("a"),Zf=s("DistilBertForMultipleChoice"),eg=s(" forward method, overrides the "),fd=r("code"),tg=s("__call__"),sg=s(" special method."),og=h(),w(jo.$$.fragment),ng=h(),w(zo.$$.fragment),Zp=h(),Cs=r("h2"),Co=r("a"),gd=r("span"),w(jr.$$.fragment),rg=h(),_d=r("span"),ag=s("DistilBertForTokenClassification"),eh=h(),gt=r("div"),w(zr.$$.fragment),ig=h(),bd=r("p"),lg=s(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=h(),Cr=r("p"),cg=s("This model inherits from "),rl=r("a"),pg=s("PreTrainedModel"),hg=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg=h(),Pr=r("p"),ug=s("This model is also a PyTorch "),qr=r("a"),fg=s("torch.nn.Module"),gg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=h(),kt=r("div"),w(Ar.$$.fragment),bg=h(),Ps=r("p"),kg=s("The "),al=r("a"),vg=s("DistilBertForTokenClassification"),wg=s(" forward method, overrides the "),kd=r("code"),Tg=s("__call__"),$g=s(" special method."),yg=h(),w(Po.$$.fragment),Fg=h(),w(qo.$$.fragment),Dg=h(),w(Ao.$$.fragment),th=h(),qs=r("h2"),Oo=r("a"),vd=r("span"),w(Or.$$.fragment),Bg=h(),wd=r("span"),Eg=s("DistilBertForQuestionAnswering"),sh=h(),_t=r("div"),w(Nr.$$.fragment),xg=h(),As=r("p"),Mg=s(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Td=r("code"),jg=s("span start logits"),zg=s(" and "),$d=r("code"),Cg=s("span end logits"),Pg=s(")."),qg=h(),Ir=r("p"),Ag=s("This model inherits from "),il=r("a"),Og=s("PreTrainedModel"),Ng=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=h(),Lr=r("p"),Lg=s("This model is also a PyTorch "),Sr=r("a"),Sg=s("torch.nn.Module"),Wg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=h(),vt=r("div"),w(Wr.$$.fragment),Rg=h(),Os=r("p"),Ug=s("The "),ll=r("a"),Kg=s("DistilBertForQuestionAnswering"),Hg=s(" forward method, overrides the "),yd=r("code"),Vg=s("__call__"),Jg=s(" special method."),Gg=h(),w(No.$$.fragment),Xg=h(),w(Io.$$.fragment),Yg=h(),w(Lo.$$.fragment),oh=h(),Ns=r("h2"),So=r("a"),Fd=r("span"),w(Qr.$$.fragment),Zg=h(),Dd=r("span"),e_=s("TFDistilBertModel"),nh=h(),at=r("div"),w(Rr.$$.fragment),t_=h(),Bd=r("p"),s_=s("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),o_=h(),Ur=r("p"),n_=s("This model inherits from "),dl=r("a"),r_=s("TFPreTrainedModel"),a_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=h(),Kr=r("p"),l_=s("This model is also a "),Hr=r("a"),d_=s("tf.keras.Model"),c_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=h(),w(Wo.$$.fragment),h_=h(),At=r("div"),w(Vr.$$.fragment),m_=h(),Is=r("p"),u_=s("The "),cl=r("a"),f_=s("TFDistilBertModel"),g_=s(" forward method, overrides the "),Ed=r("code"),__=s("__call__"),b_=s(" special method."),k_=h(),w(Qo.$$.fragment),v_=h(),w(Ro.$$.fragment),rh=h(),Ls=r("h2"),Uo=r("a"),xd=r("span"),w(Jr.$$.fragment),w_=h(),Md=r("span"),T_=s("TFDistilBertForMaskedLM"),ah=h(),it=r("div"),w(Gr.$$.fragment),$_=h(),Xr=r("p"),y_=s("DistilBert Model with a "),jd=r("code"),F_=s("masked language modeling"),D_=s(" head on top."),B_=h(),Yr=r("p"),E_=s("This model inherits from "),pl=r("a"),x_=s("TFPreTrainedModel"),M_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=h(),Zr=r("p"),z_=s("This model is also a "),ea=r("a"),C_=s("tf.keras.Model"),P_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q_=h(),w(Ko.$$.fragment),A_=h(),wt=r("div"),w(ta.$$.fragment),O_=h(),Ss=r("p"),N_=s("The "),hl=r("a"),I_=s("TFDistilBertForMaskedLM"),L_=s(" forward method, overrides the "),zd=r("code"),S_=s("__call__"),W_=s(" special method."),Q_=h(),w(Ho.$$.fragment),R_=h(),w(Vo.$$.fragment),U_=h(),w(Jo.$$.fragment),ih=h(),Ws=r("h2"),Go=r("a"),Cd=r("span"),w(sa.$$.fragment),K_=h(),Pd=r("span"),H_=s("TFDistilBertForSequenceClassification"),lh=h(),lt=r("div"),w(oa.$$.fragment),V_=h(),qd=r("p"),J_=s(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=h(),na=r("p"),X_=s("This model inherits from "),ml=r("a"),Y_=s("TFPreTrainedModel"),Z_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=h(),ra=r("p"),tb=s("This model is also a "),aa=r("a"),sb=s("tf.keras.Model"),ob=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb=h(),w(Xo.$$.fragment),rb=h(),Tt=r("div"),w(ia.$$.fragment),ab=h(),Qs=r("p"),ib=s("The "),ul=r("a"),lb=s("TFDistilBertForSequenceClassification"),db=s(" forward method, overrides the "),Ad=r("code"),cb=s("__call__"),pb=s(" special method."),hb=h(),w(Yo.$$.fragment),mb=h(),w(Zo.$$.fragment),ub=h(),w(en.$$.fragment),dh=h(),Rs=r("h2"),tn=r("a"),Od=r("span"),w(la.$$.fragment),fb=h(),Nd=r("span"),gb=s("TFDistilBertForMultipleChoice"),ch=h(),dt=r("div"),w(da.$$.fragment),_b=h(),Id=r("p"),bb=s(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),kb=h(),ca=r("p"),vb=s("This model inherits from "),fl=r("a"),wb=s("TFPreTrainedModel"),Tb=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$b=h(),pa=r("p"),yb=s("This model is also a "),ha=r("a"),Fb=s("tf.keras.Model"),Db=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=h(),w(sn.$$.fragment),Eb=h(),Ot=r("div"),w(ma.$$.fragment),xb=h(),Us=r("p"),Mb=s("The "),gl=r("a"),jb=s("TFDistilBertForMultipleChoice"),zb=s(" forward method, overrides the "),Ld=r("code"),Cb=s("__call__"),Pb=s(" special method."),qb=h(),w(on.$$.fragment),Ab=h(),w(nn.$$.fragment),ph=h(),Ks=r("h2"),rn=r("a"),Sd=r("span"),w(ua.$$.fragment),Ob=h(),Wd=r("span"),Nb=s("TFDistilBertForTokenClassification"),hh=h(),ct=r("div"),w(fa.$$.fragment),Ib=h(),Qd=r("p"),Lb=s(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Sb=h(),ga=r("p"),Wb=s("This model inherits from "),_l=r("a"),Qb=s("TFPreTrainedModel"),Rb=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub=h(),_a=r("p"),Kb=s("This model is also a "),ba=r("a"),Hb=s("tf.keras.Model"),Vb=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jb=h(),w(an.$$.fragment),Gb=h(),$t=r("div"),w(ka.$$.fragment),Xb=h(),Hs=r("p"),Yb=s("The "),bl=r("a"),Zb=s("TFDistilBertForTokenClassification"),ek=s(" forward method, overrides the "),Rd=r("code"),tk=s("__call__"),sk=s(" special method."),ok=h(),w(ln.$$.fragment),nk=h(),w(dn.$$.fragment),rk=h(),w(cn.$$.fragment),mh=h(),Vs=r("h2"),pn=r("a"),Ud=r("span"),w(va.$$.fragment),ak=h(),Kd=r("span"),ik=s("TFDistilBertForQuestionAnswering"),uh=h(),pt=r("div"),w(wa.$$.fragment),lk=h(),Js=r("p"),dk=s(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Hd=r("code"),ck=s("span start logits"),pk=s(" and "),Vd=r("code"),hk=s("span end logits"),mk=s(")."),uk=h(),Ta=r("p"),fk=s("This model inherits from "),kl=r("a"),gk=s("TFPreTrainedModel"),_k=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bk=h(),$a=r("p"),kk=s("This model is also a "),ya=r("a"),vk=s("tf.keras.Model"),wk=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tk=h(),w(hn.$$.fragment),$k=h(),yt=r("div"),w(Fa.$$.fragment),yk=h(),Gs=r("p"),Fk=s("The "),vl=r("a"),Dk=s("TFDistilBertForQuestionAnswering"),Bk=s(" forward method, overrides the "),Jd=r("code"),Ek=s("__call__"),xk=s(" special method."),Mk=h(),w(mn.$$.fragment),jk=h(),w(un.$$.fragment),zk=h(),w(fn.$$.fragment),fh=h(),Xs=r("h2"),gn=r("a"),Gd=r("span"),w(Da.$$.fragment),Ck=h(),Xd=r("span"),Pk=s("FlaxDistilBertModel"),gh=h(),Ze=r("div"),w(Ba.$$.fragment),qk=h(),Yd=r("p"),Ak=s("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ok=h(),Ea=r("p"),Nk=s("This model inherits from "),wl=r("a"),Ik=s("FlaxPreTrainedModel"),Lk=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Sk=h(),xa=r("p"),Wk=s("This model is also a Flax Linen "),Ma=r("a"),Qk=s("flax.linen.Module"),Rk=s(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uk=h(),Zd=r("p"),Kk=s("Finally, this model supports inherent JAX features such as:"),Hk=h(),Xt=r("ul"),ec=r("li"),ja=r("a"),Vk=s("Just-In-Time (JIT) compilation"),Jk=h(),tc=r("li"),za=r("a"),Gk=s("Automatic Differentiation"),Xk=h(),sc=r("li"),Ca=r("a"),Yk=s("Vectorization"),Zk=h(),oc=r("li"),Pa=r("a"),ev=s("Parallelization"),tv=h(),Nt=r("div"),w(qa.$$.fragment),sv=h(),Ys=r("p"),ov=s("The "),nc=r("code"),nv=s("FlaxDistilBertPreTrainedModel"),rv=s(" forward method, overrides the "),rc=r("code"),av=s("__call__"),iv=s(" special method."),lv=h(),w(_n.$$.fragment),dv=h(),w(bn.$$.fragment),_h=h(),Zs=r("h2"),kn=r("a"),ac=r("span"),w(Aa.$$.fragment),cv=h(),ic=r("span"),pv=s("FlaxDistilBertForMaskedLM"),bh=h(),et=r("div"),w(Oa.$$.fragment),hv=h(),Na=r("p"),mv=s("DistilBert Model with a "),lc=r("code"),uv=s("language modeling"),fv=s(" head on top."),gv=h(),Ia=r("p"),_v=s("This model inherits from "),Tl=r("a"),bv=s("FlaxPreTrainedModel"),kv=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vv=h(),La=r("p"),wv=s("This model is also a Flax Linen "),Sa=r("a"),Tv=s("flax.linen.Module"),$v=s(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yv=h(),dc=r("p"),Fv=s("Finally, this model supports inherent JAX features such as:"),Dv=h(),Yt=r("ul"),cc=r("li"),Wa=r("a"),Bv=s("Just-In-Time (JIT) compilation"),Ev=h(),pc=r("li"),Qa=r("a"),xv=s("Automatic Differentiation"),Mv=h(),hc=r("li"),Ra=r("a"),jv=s("Vectorization"),zv=h(),mc=r("li"),Ua=r("a"),Cv=s("Parallelization"),Pv=h(),It=r("div"),w(Ka.$$.fragment),qv=h(),eo=r("p"),Av=s("The "),uc=r("code"),Ov=s("FlaxDistilBertPreTrainedModel"),Nv=s(" forward method, overrides the "),fc=r("code"),Iv=s("__call__"),Lv=s(" special method."),Sv=h(),w(vn.$$.fragment),Wv=h(),w(wn.$$.fragment),kh=h(),to=r("h2"),Tn=r("a"),gc=r("span"),w(Ha.$$.fragment),Qv=h(),_c=r("span"),Rv=s("FlaxDistilBertForSequenceClassification"),vh=h(),tt=r("div"),w(Va.$$.fragment),Uv=h(),bc=r("p"),Kv=s(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Hv=h(),Ja=r("p"),Vv=s("This model inherits from "),$l=r("a"),Jv=s("FlaxPreTrainedModel"),Gv=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xv=h(),Ga=r("p"),Yv=s("This model is also a Flax Linen "),Xa=r("a"),Zv=s("flax.linen.Module"),ew=s(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tw=h(),kc=r("p"),sw=s("Finally, this model supports inherent JAX features such as:"),ow=h(),Zt=r("ul"),vc=r("li"),Ya=r("a"),nw=s("Just-In-Time (JIT) compilation"),rw=h(),wc=r("li"),Za=r("a"),aw=s("Automatic Differentiation"),iw=h(),Tc=r("li"),ei=r("a"),lw=s("Vectorization"),dw=h(),$c=r("li"),ti=r("a"),cw=s("Parallelization"),pw=h(),Lt=r("div"),w(si.$$.fragment),hw=h(),so=r("p"),mw=s("The "),yc=r("code"),uw=s("FlaxDistilBertPreTrainedModel"),fw=s(" forward method, overrides the "),Fc=r("code"),gw=s("__call__"),_w=s(" special method."),bw=h(),w($n.$$.fragment),kw=h(),w(yn.$$.fragment),wh=h(),oo=r("h2"),Fn=r("a"),Dc=r("span"),w(oi.$$.fragment),vw=h(),Bc=r("span"),ww=s("FlaxDistilBertForMultipleChoice"),Th=h(),st=r("div"),w(ni.$$.fragment),Tw=h(),Ec=r("p"),$w=s(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yw=h(),ri=r("p"),Fw=s("This model inherits from "),yl=r("a"),Dw=s("FlaxPreTrainedModel"),Bw=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ew=h(),ai=r("p"),xw=s("This model is also a Flax Linen "),ii=r("a"),Mw=s("flax.linen.Module"),jw=s(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zw=h(),xc=r("p"),Cw=s("Finally, this model supports inherent JAX features such as:"),Pw=h(),es=r("ul"),Mc=r("li"),li=r("a"),qw=s("Just-In-Time (JIT) compilation"),Aw=h(),jc=r("li"),di=r("a"),Ow=s("Automatic Differentiation"),Nw=h(),zc=r("li"),ci=r("a"),Iw=s("Vectorization"),Lw=h(),Cc=r("li"),pi=r("a"),Sw=s("Parallelization"),Ww=h(),St=r("div"),w(hi.$$.fragment),Qw=h(),no=r("p"),Rw=s("The "),Pc=r("code"),Uw=s("FlaxDistilBertPreTrainedModel"),Kw=s(" forward method, overrides the "),qc=r("code"),Hw=s("__call__"),Vw=s(" special method."),Jw=h(),w(Dn.$$.fragment),Gw=h(),w(Bn.$$.fragment),$h=h(),ro=r("h2"),En=r("a"),Ac=r("span"),w(mi.$$.fragment),Xw=h(),Oc=r("span"),Yw=s("FlaxDistilBertForTokenClassification"),yh=h(),ot=r("div"),w(ui.$$.fragment),Zw=h(),Nc=r("p"),eT=s(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),tT=h(),fi=r("p"),sT=s("This model inherits from "),Fl=r("a"),oT=s("FlaxPreTrainedModel"),nT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rT=h(),gi=r("p"),aT=s("This model is also a Flax Linen "),_i=r("a"),iT=s("flax.linen.Module"),lT=s(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dT=h(),Ic=r("p"),cT=s("Finally, this model supports inherent JAX features such as:"),pT=h(),ts=r("ul"),Lc=r("li"),bi=r("a"),hT=s("Just-In-Time (JIT) compilation"),mT=h(),Sc=r("li"),ki=r("a"),uT=s("Automatic Differentiation"),fT=h(),Wc=r("li"),vi=r("a"),gT=s("Vectorization"),_T=h(),Qc=r("li"),wi=r("a"),bT=s("Parallelization"),kT=h(),Wt=r("div"),w(Ti.$$.fragment),vT=h(),ao=r("p"),wT=s("The "),Rc=r("code"),TT=s("FlaxDistilBertPreTrainedModel"),$T=s(" forward method, overrides the "),Uc=r("code"),yT=s("__call__"),FT=s(" special method."),DT=h(),w(xn.$$.fragment),BT=h(),w(Mn.$$.fragment),Fh=h(),io=r("h2"),jn=r("a"),Kc=r("span"),w($i.$$.fragment),ET=h(),Hc=r("span"),xT=s("FlaxDistilBertForQuestionAnswering"),Dh=h(),nt=r("div"),w(yi.$$.fragment),MT=h(),lo=r("p"),jT=s(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=r("code"),zT=s("span start logits"),CT=s(" and "),Jc=r("code"),PT=s("span end logits"),qT=s(")."),AT=h(),Fi=r("p"),OT=s("This model inherits from "),Dl=r("a"),NT=s("FlaxPreTrainedModel"),IT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),LT=h(),Di=r("p"),ST=s("This model is also a Flax Linen "),Bi=r("a"),WT=s("flax.linen.Module"),QT=s(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RT=h(),Gc=r("p"),UT=s("Finally, this model supports inherent JAX features such as:"),KT=h(),ss=r("ul"),Xc=r("li"),Ei=r("a"),HT=s("Just-In-Time (JIT) compilation"),VT=h(),Yc=r("li"),xi=r("a"),JT=s("Automatic Differentiation"),GT=h(),Zc=r("li"),Mi=r("a"),XT=s("Vectorization"),YT=h(),ep=r("li"),ji=r("a"),ZT=s("Parallelization"),e$=h(),Qt=r("div"),w(zi.$$.fragment),t$=h(),co=r("p"),s$=s("The "),tp=r("code"),o$=s("FlaxDistilBertPreTrainedModel"),n$=s(" forward method, overrides the "),sp=r("code"),r$=s("__call__"),a$=s(" special method."),i$=h(),w(zn.$$.fragment),l$=h(),w(Cn.$$.fragment),this.h()},l(n){const b=sF('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(n),c=a(n,"H1",{class:!0});var Ci=i(c);u=a(Ci,"A",{id:!0,class:!0,href:!0});var op=i(u);k=a(op,"SPAN",{});var np=i(k);T(l.$$.fragment,np),np.forEach(t),op.forEach(t),p=m(Ci),M=a(Ci,"SPAN",{});var rp=i(M);we=o(rp,"DistilBERT"),rp.forEach(t),Ci.forEach(t),ge=m(n),I=a(n,"H2",{class:!0});var Pi=i(I);re=a(Pi,"A",{id:!0,class:!0,href:!0});var ap=i(re);se=a(ap,"SPAN",{});var ip=i(se);T(B.$$.fragment,ip),ip.forEach(t),ap.forEach(t),Te=m(Pi),U=a(Pi,"SPAN",{});var lp=i(U);$e=o(lp,"Overview"),lp.forEach(t),Pi.forEach(t),_e=m(n),O=a(n,"P",{});var os=i(O);ye=o(os,"The DistilBERT model was proposed in the blog post "),ae=a(os,"A",{href:!0,rel:!0});var dp=i(ae);H=o(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),Fe=o(os,", and the paper "),ie=a(os,"A",{href:!0,rel:!0});var cp=i(ie);V=o(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),De=o(os,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),de=a(os,"EM",{});var pp=i(de);J=o(pp,"bert-base-uncased"),pp.forEach(t),Be=o(os,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),os.forEach(t),be=m(n),te=a(n,"P",{});var hp=i(te);z=o(hp,"The abstract from the paper is the following:"),hp.forEach(t),q=m(n),le=a(n,"P",{});var mp=i(le);K=a(mp,"EM",{});var up=i(K);Ee=o(up,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),up.forEach(t),mp.forEach(t),ke=m(n),R=a(n,"P",{});var fp=i(R);xe=o(fp,"Tips:"),fp.forEach(t),ve=m(n),C=a(n,"UL",{});var qi=i(C);oe=a(qi,"LI",{});var ns=i(oe);G=o(ns,"DistilBERT doesn\u2019t have "),ce=a(ns,"CODE",{});var gp=i(ce);Me=o(gp,"token_type_ids"),gp.forEach(t),X=o(ns,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),pe=a(ns,"CODE",{});var _p=i(pe);je=o(_p,"tokenizer.sep_token"),_p.forEach(t),L=o(ns," (or "),he=a(ns,"CODE",{});var bp=i(he);Y=o(bp,"[SEP]"),bp.forEach(t),ze=o(ns,")."),ns.forEach(t),ne=m(qi),P=a(qi,"LI",{});var Ai=i(P);Ce=o(Ai,"DistilBERT doesn\u2019t have options to select the input positions ("),A=a(Ai,"CODE",{});var kp=i(A);Pe=o(kp,"position_ids"),kp.forEach(t),qe=o(Ai,` input). This could be added if
necessary though, just let us know if you need this option.`),Ai.forEach(t),qi.forEach(t),v=m(n),x=a(n,"P",{});var rs=i(x);Ue=o(rs,"This model was contributed by "),ee=a(rs,"A",{href:!0,rel:!0});var vp=i(ee);Ke=o(vp,"victorsanh"),vp.forEach(t),He=o(rs,`. This model jax version was
contributed by `),j=a(rs,"A",{href:!0,rel:!0});var wp=i(j);Ve=o(wp,"kamalkraj"),wp.forEach(t),Je=o(rs,". The original code can be found "),Ne=a(rs,"A",{href:!0,rel:!0});var Tp=i(Ne);Ge=o(Tp,"here"),Tp.forEach(t),Xe=o(rs,"."),rs.forEach(t),N=m(n),S=a(n,"H2",{class:!0});var Oi=i(S);Oe=a(Oi,"A",{id:!0,class:!0,href:!0});var $p=i(Oe);Se=a($p,"SPAN",{});var yp=i(Se);T(W.$$.fragment,yp),yp.forEach(t),$p.forEach(t),Ye=m(Oi),We=a(Oi,"SPAN",{});var Fp=i(We);Ae=o(Fp,"DistilBertConfig"),Fp.forEach(t),Oi.forEach(t),Re=m(n),Q=a(n,"DIV",{class:!0});var as=i(Q);T(Ie.$$.fragment,as),Cm=m(as),Gt=a(as,"P",{});var is=i(Gt);Pm=o(is,"This is the configuration class to store the configuration of a "),Si=a(is,"A",{href:!0});var Dp=i(Si);qm=o(Dp,"DistilBertModel"),Dp.forEach(t),Am=o(is," or a "),Wi=a(is,"A",{href:!0});var Bp=i(Wi);Om=o(Bp,"TFDistilBertModel"),Bp.forEach(t),Nm=o(is,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),Yn=a(is,"A",{href:!0,rel:!0});var Ep=i(Yn);Im=o(Ep,"distilbert-base-uncased"),Ep.forEach(t),Lm=o(is," architecture."),is.forEach(t),Sm=m(as),Ts=a(as,"P",{});var po=i(Ts);Wm=o(po,"Configuration objects inherit from "),Qi=a(po,"A",{href:!0});var xp=i(Qi);Qm=o(xp,"PretrainedConfig"),xp.forEach(t),Rm=o(po,` and can be used to control the model outputs. Read the
documentation from `),Ri=a(po,"A",{href:!0});var Mp=i(Ri);Um=o(Mp,"PretrainedConfig"),Mp.forEach(t),Km=o(po," for more information."),po.forEach(t),Hm=m(as),T(ho.$$.fragment,as),as.forEach(t),Sp=m(n),$s=a(n,"H2",{class:!0});var Ni=i($s);mo=a(Ni,"A",{id:!0,class:!0,href:!0});var jp=i(mo);Vl=a(jp,"SPAN",{});var zp=i(Vl);T(Zn.$$.fragment,zp),zp.forEach(t),jp.forEach(t),Vm=m(Ni),Jl=a(Ni,"SPAN",{});var Cp=i(Jl);Jm=o(Cp,"DistilBertTokenizer"),Cp.forEach(t),Ni.forEach(t),Wp=m(n),zt=a(n,"DIV",{class:!0});var ls=i(zt);T(er.$$.fragment,ls),Gm=m(ls),Gl=a(ls,"P",{});var Pp=i(Gl);Xm=o(Pp,"Construct a DistilBERT tokenizer."),Pp.forEach(t),Ym=m(ls),uo=a(ls,"P",{});var Pn=i(uo);Ui=a(Pn,"A",{href:!0});var qp=i(Ui);Zm=o(qp,"DistilBertTokenizer"),qp.forEach(t),eu=o(Pn," is identical to "),Ki=a(Pn,"A",{href:!0});var Ap=i(Ki);tu=o(Ap,"BertTokenizer"),Ap.forEach(t),su=o(Pn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Pn.forEach(t),ou=m(ls),tr=a(ls,"P",{});var Ii=i(tr);nu=o(Ii,"Refer to superclass "),Hi=a(Ii,"A",{href:!0});var Op=i(Hi);ru=o(Op,"BertTokenizer"),Op.forEach(t),au=o(Ii," for usage examples and documentation concerning parameters."),Ii.forEach(t),ls.forEach(t),Qp=m(n),ys=a(n,"H2",{class:!0});var Li=i(ys);fo=a(Li,"A",{id:!0,class:!0,href:!0});var Np=i(fo);Xl=a(Np,"SPAN",{});var Ip=i(Xl);T(sr.$$.fragment,Ip),Ip.forEach(t),Np.forEach(t),iu=m(Li),Yl=a(Li,"SPAN",{});var d$=i(Yl);lu=o(d$,"DistilBertTokenizerFast"),d$.forEach(t),Li.forEach(t),Rp=m(n),Ct=a(n,"DIV",{class:!0});var qn=i(Ct);T(or.$$.fragment,qn),du=m(qn),nr=a(qn,"P",{});var Eh=i(nr);cu=o(Eh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Zl=a(Eh,"EM",{});var c$=i(Zl);pu=o(c$,"tokenizers"),c$.forEach(t),hu=o(Eh," library)."),Eh.forEach(t),mu=m(qn),go=a(qn,"P",{});var Lp=i(go);Vi=a(Lp,"A",{href:!0});var p$=i(Vi);uu=o(p$,"DistilBertTokenizerFast"),p$.forEach(t),fu=o(Lp," is identical to "),Ji=a(Lp,"A",{href:!0});var h$=i(Ji);gu=o(h$,"BertTokenizerFast"),h$.forEach(t),_u=o(Lp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Lp.forEach(t),bu=m(qn),rr=a(qn,"P",{});var xh=i(rr);ku=o(xh,"Refer to superclass "),Gi=a(xh,"A",{href:!0});var m$=i(Gi);vu=o(m$,"BertTokenizerFast"),m$.forEach(t),wu=o(xh," for usage examples and documentation concerning parameters."),xh.forEach(t),qn.forEach(t),Up=m(n),Fs=a(n,"H2",{class:!0});var Mh=i(Fs);_o=a(Mh,"A",{id:!0,class:!0,href:!0});var u$=i(_o);ed=a(u$,"SPAN",{});var f$=i(ed);T(ar.$$.fragment,f$),f$.forEach(t),u$.forEach(t),Tu=m(Mh),td=a(Mh,"SPAN",{});var g$=i(td);$u=o(g$,"DistilBertModel"),g$.forEach(t),Mh.forEach(t),Kp=m(n),ht=a(n,"DIV",{class:!0});var ds=i(ht);T(ir.$$.fragment,ds),yu=m(ds),sd=a(ds,"P",{});var _$=i(sd);Fu=o(_$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_$.forEach(t),Du=m(ds),lr=a(ds,"P",{});var jh=i(lr);Bu=o(jh,"This model inherits from "),Xi=a(jh,"A",{href:!0});var b$=i(Xi);Eu=o(b$,"PreTrainedModel"),b$.forEach(t),xu=o(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),Mu=m(ds),dr=a(ds,"P",{});var zh=i(dr);ju=o(zh,"This model is also a PyTorch "),cr=a(zh,"A",{href:!0,rel:!0});var k$=i(cr);zu=o(k$,"torch.nn.Module"),k$.forEach(t),Cu=o(zh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zh.forEach(t),Pu=m(ds),Pt=a(ds,"DIV",{class:!0});var An=i(Pt);T(pr.$$.fragment,An),qu=m(An),Ds=a(An,"P",{});var Bl=i(Ds);Au=o(Bl,"The "),Yi=a(Bl,"A",{href:!0});var v$=i(Yi);Ou=o(v$,"DistilBertModel"),v$.forEach(t),Nu=o(Bl," forward method, overrides the "),od=a(Bl,"CODE",{});var w$=i(od);Iu=o(w$,"__call__"),w$.forEach(t),Lu=o(Bl," special method."),Bl.forEach(t),Su=m(An),T(bo.$$.fragment,An),Wu=m(An),T(ko.$$.fragment,An),An.forEach(t),ds.forEach(t),Hp=m(n),Bs=a(n,"H2",{class:!0});var Ch=i(Bs);vo=a(Ch,"A",{id:!0,class:!0,href:!0});var T$=i(vo);nd=a(T$,"SPAN",{});var $$=i(nd);T(hr.$$.fragment,$$),$$.forEach(t),T$.forEach(t),Qu=m(Ch),rd=a(Ch,"SPAN",{});var y$=i(rd);Ru=o(y$,"DistilBertForMaskedLM"),y$.forEach(t),Ch.forEach(t),Vp=m(n),mt=a(n,"DIV",{class:!0});var cs=i(mt);T(mr.$$.fragment,cs),Uu=m(cs),ur=a(cs,"P",{});var Ph=i(ur);Ku=o(Ph,"DistilBert Model with a "),ad=a(Ph,"CODE",{});var F$=i(ad);Hu=o(F$,"masked language modeling"),F$.forEach(t),Vu=o(Ph," head on top."),Ph.forEach(t),Ju=m(cs),fr=a(cs,"P",{});var qh=i(fr);Gu=o(qh,"This model inherits from "),Zi=a(qh,"A",{href:!0});var D$=i(Zi);Xu=o(D$,"PreTrainedModel"),D$.forEach(t),Yu=o(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),Zu=m(cs),gr=a(cs,"P",{});var Ah=i(gr);ef=o(Ah,"This model is also a PyTorch "),_r=a(Ah,"A",{href:!0,rel:!0});var B$=i(_r);tf=o(B$,"torch.nn.Module"),B$.forEach(t),sf=o(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),of=m(cs),bt=a(cs,"DIV",{class:!0});var ps=i(bt);T(br.$$.fragment,ps),nf=m(ps),Es=a(ps,"P",{});var El=i(Es);rf=o(El,"The "),el=a(El,"A",{href:!0});var E$=i(el);af=o(E$,"DistilBertForMaskedLM"),E$.forEach(t),lf=o(El," forward method, overrides the "),id=a(El,"CODE",{});var x$=i(id);df=o(x$,"__call__"),x$.forEach(t),cf=o(El," special method."),El.forEach(t),pf=m(ps),T(wo.$$.fragment,ps),hf=m(ps),T(To.$$.fragment,ps),mf=m(ps),T($o.$$.fragment,ps),ps.forEach(t),cs.forEach(t),Jp=m(n),xs=a(n,"H2",{class:!0});var Oh=i(xs);yo=a(Oh,"A",{id:!0,class:!0,href:!0});var M$=i(yo);ld=a(M$,"SPAN",{});var j$=i(ld);T(kr.$$.fragment,j$),j$.forEach(t),M$.forEach(t),uf=m(Oh),dd=a(Oh,"SPAN",{});var z$=i(dd);ff=o(z$,"DistilBertForSequenceClassification"),z$.forEach(t),Oh.forEach(t),Gp=m(n),ut=a(n,"DIV",{class:!0});var hs=i(ut);T(vr.$$.fragment,hs),gf=m(hs),cd=a(hs,"P",{});var C$=i(cd);_f=o(C$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),C$.forEach(t),bf=m(hs),wr=a(hs,"P",{});var Nh=i(wr);kf=o(Nh,"This model inherits from "),tl=a(Nh,"A",{href:!0});var P$=i(tl);vf=o(P$,"PreTrainedModel"),P$.forEach(t),wf=o(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),Tf=m(hs),Tr=a(hs,"P",{});var Ih=i(Tr);$f=o(Ih,"This model is also a PyTorch "),$r=a(Ih,"A",{href:!0,rel:!0});var q$=i($r);yf=o(q$,"torch.nn.Module"),q$.forEach(t),Ff=o(Ih,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ih.forEach(t),Df=m(hs),rt=a(hs,"DIV",{class:!0});var Ft=i(rt);T(yr.$$.fragment,Ft),Bf=m(Ft),Ms=a(Ft,"P",{});var xl=i(Ms);Ef=o(xl,"The "),sl=a(xl,"A",{href:!0});var A$=i(sl);xf=o(A$,"DistilBertForSequenceClassification"),A$.forEach(t),Mf=o(xl," forward method, overrides the "),pd=a(xl,"CODE",{});var O$=i(pd);jf=o(O$,"__call__"),O$.forEach(t),zf=o(xl," special method."),xl.forEach(t),Cf=m(Ft),T(Fo.$$.fragment,Ft),Pf=m(Ft),T(Do.$$.fragment,Ft),qf=m(Ft),T(Bo.$$.fragment,Ft),Af=m(Ft),T(Eo.$$.fragment,Ft),Of=m(Ft),T(xo.$$.fragment,Ft),Ft.forEach(t),hs.forEach(t),Xp=m(n),js=a(n,"H2",{class:!0});var Lh=i(js);Mo=a(Lh,"A",{id:!0,class:!0,href:!0});var N$=i(Mo);hd=a(N$,"SPAN",{});var I$=i(hd);T(Fr.$$.fragment,I$),I$.forEach(t),N$.forEach(t),Nf=m(Lh),md=a(Lh,"SPAN",{});var L$=i(md);If=o(L$,"DistilBertForMultipleChoice"),L$.forEach(t),Lh.forEach(t),Yp=m(n),ft=a(n,"DIV",{class:!0});var ms=i(ft);T(Dr.$$.fragment,ms),Lf=m(ms),ud=a(ms,"P",{});var S$=i(ud);Sf=o(S$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),S$.forEach(t),Wf=m(ms),Br=a(ms,"P",{});var Sh=i(Br);Qf=o(Sh,"This model inherits from "),ol=a(Sh,"A",{href:!0});var W$=i(ol);Rf=o(W$,"PreTrainedModel"),W$.forEach(t),Uf=o(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),Kf=m(ms),Er=a(ms,"P",{});var Wh=i(Er);Hf=o(Wh,"This model is also a PyTorch "),xr=a(Wh,"A",{href:!0,rel:!0});var Q$=i(xr);Vf=o(Q$,"torch.nn.Module"),Q$.forEach(t),Jf=o(Wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wh.forEach(t),Gf=m(ms),qt=a(ms,"DIV",{class:!0});var On=i(qt);T(Mr.$$.fragment,On),Xf=m(On),zs=a(On,"P",{});var Ml=i(zs);Yf=o(Ml,"The "),nl=a(Ml,"A",{href:!0});var R$=i(nl);Zf=o(R$,"DistilBertForMultipleChoice"),R$.forEach(t),eg=o(Ml," forward method, overrides the "),fd=a(Ml,"CODE",{});var U$=i(fd);tg=o(U$,"__call__"),U$.forEach(t),sg=o(Ml," special method."),Ml.forEach(t),og=m(On),T(jo.$$.fragment,On),ng=m(On),T(zo.$$.fragment,On),On.forEach(t),ms.forEach(t),Zp=m(n),Cs=a(n,"H2",{class:!0});var Qh=i(Cs);Co=a(Qh,"A",{id:!0,class:!0,href:!0});var K$=i(Co);gd=a(K$,"SPAN",{});var H$=i(gd);T(jr.$$.fragment,H$),H$.forEach(t),K$.forEach(t),rg=m(Qh),_d=a(Qh,"SPAN",{});var V$=i(_d);ag=o(V$,"DistilBertForTokenClassification"),V$.forEach(t),Qh.forEach(t),eh=m(n),gt=a(n,"DIV",{class:!0});var us=i(gt);T(zr.$$.fragment,us),ig=m(us),bd=a(us,"P",{});var J$=i(bd);lg=o(J$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),J$.forEach(t),dg=m(us),Cr=a(us,"P",{});var Rh=i(Cr);cg=o(Rh,"This model inherits from "),rl=a(Rh,"A",{href:!0});var G$=i(rl);pg=o(G$,"PreTrainedModel"),G$.forEach(t),hg=o(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),mg=m(us),Pr=a(us,"P",{});var Uh=i(Pr);ug=o(Uh,"This model is also a PyTorch "),qr=a(Uh,"A",{href:!0,rel:!0});var X$=i(qr);fg=o(X$,"torch.nn.Module"),X$.forEach(t),gg=o(Uh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uh.forEach(t),_g=m(us),kt=a(us,"DIV",{class:!0});var fs=i(kt);T(Ar.$$.fragment,fs),bg=m(fs),Ps=a(fs,"P",{});var jl=i(Ps);kg=o(jl,"The "),al=a(jl,"A",{href:!0});var Y$=i(al);vg=o(Y$,"DistilBertForTokenClassification"),Y$.forEach(t),wg=o(jl," forward method, overrides the "),kd=a(jl,"CODE",{});var Z$=i(kd);Tg=o(Z$,"__call__"),Z$.forEach(t),$g=o(jl," special method."),jl.forEach(t),yg=m(fs),T(Po.$$.fragment,fs),Fg=m(fs),T(qo.$$.fragment,fs),Dg=m(fs),T(Ao.$$.fragment,fs),fs.forEach(t),us.forEach(t),th=m(n),qs=a(n,"H2",{class:!0});var Kh=i(qs);Oo=a(Kh,"A",{id:!0,class:!0,href:!0});var ey=i(Oo);vd=a(ey,"SPAN",{});var ty=i(vd);T(Or.$$.fragment,ty),ty.forEach(t),ey.forEach(t),Bg=m(Kh),wd=a(Kh,"SPAN",{});var sy=i(wd);Eg=o(sy,"DistilBertForQuestionAnswering"),sy.forEach(t),Kh.forEach(t),sh=m(n),_t=a(n,"DIV",{class:!0});var gs=i(_t);T(Nr.$$.fragment,gs),xg=m(gs),As=a(gs,"P",{});var zl=i(As);Mg=o(zl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Td=a(zl,"CODE",{});var oy=i(Td);jg=o(oy,"span start logits"),oy.forEach(t),zg=o(zl," and "),$d=a(zl,"CODE",{});var ny=i($d);Cg=o(ny,"span end logits"),ny.forEach(t),Pg=o(zl,")."),zl.forEach(t),qg=m(gs),Ir=a(gs,"P",{});var Hh=i(Ir);Ag=o(Hh,"This model inherits from "),il=a(Hh,"A",{href:!0});var ry=i(il);Og=o(ry,"PreTrainedModel"),ry.forEach(t),Ng=o(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh.forEach(t),Ig=m(gs),Lr=a(gs,"P",{});var Vh=i(Lr);Lg=o(Vh,"This model is also a PyTorch "),Sr=a(Vh,"A",{href:!0,rel:!0});var ay=i(Sr);Sg=o(ay,"torch.nn.Module"),ay.forEach(t),Wg=o(Vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vh.forEach(t),Qg=m(gs),vt=a(gs,"DIV",{class:!0});var _s=i(vt);T(Wr.$$.fragment,_s),Rg=m(_s),Os=a(_s,"P",{});var Cl=i(Os);Ug=o(Cl,"The "),ll=a(Cl,"A",{href:!0});var iy=i(ll);Kg=o(iy,"DistilBertForQuestionAnswering"),iy.forEach(t),Hg=o(Cl," forward method, overrides the "),yd=a(Cl,"CODE",{});var ly=i(yd);Vg=o(ly,"__call__"),ly.forEach(t),Jg=o(Cl," special method."),Cl.forEach(t),Gg=m(_s),T(No.$$.fragment,_s),Xg=m(_s),T(Io.$$.fragment,_s),Yg=m(_s),T(Lo.$$.fragment,_s),_s.forEach(t),gs.forEach(t),oh=m(n),Ns=a(n,"H2",{class:!0});var Jh=i(Ns);So=a(Jh,"A",{id:!0,class:!0,href:!0});var dy=i(So);Fd=a(dy,"SPAN",{});var cy=i(Fd);T(Qr.$$.fragment,cy),cy.forEach(t),dy.forEach(t),Zg=m(Jh),Dd=a(Jh,"SPAN",{});var py=i(Dd);e_=o(py,"TFDistilBertModel"),py.forEach(t),Jh.forEach(t),nh=m(n),at=a(n,"DIV",{class:!0});var Rt=i(at);T(Rr.$$.fragment,Rt),t_=m(Rt),Bd=a(Rt,"P",{});var hy=i(Bd);s_=o(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),o_=m(Rt),Ur=a(Rt,"P",{});var Gh=i(Ur);n_=o(Gh,"This model inherits from "),dl=a(Gh,"A",{href:!0});var my=i(dl);r_=o(my,"TFPreTrainedModel"),my.forEach(t),a_=o(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),i_=m(Rt),Kr=a(Rt,"P",{});var Xh=i(Kr);l_=o(Xh,"This model is also a "),Hr=a(Xh,"A",{href:!0,rel:!0});var uy=i(Hr);d_=o(uy,"tf.keras.Model"),uy.forEach(t),c_=o(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),p_=m(Rt),T(Wo.$$.fragment,Rt),h_=m(Rt),At=a(Rt,"DIV",{class:!0});var Nn=i(At);T(Vr.$$.fragment,Nn),m_=m(Nn),Is=a(Nn,"P",{});var Pl=i(Is);u_=o(Pl,"The "),cl=a(Pl,"A",{href:!0});var fy=i(cl);f_=o(fy,"TFDistilBertModel"),fy.forEach(t),g_=o(Pl," forward method, overrides the "),Ed=a(Pl,"CODE",{});var gy=i(Ed);__=o(gy,"__call__"),gy.forEach(t),b_=o(Pl," special method."),Pl.forEach(t),k_=m(Nn),T(Qo.$$.fragment,Nn),v_=m(Nn),T(Ro.$$.fragment,Nn),Nn.forEach(t),Rt.forEach(t),rh=m(n),Ls=a(n,"H2",{class:!0});var Yh=i(Ls);Uo=a(Yh,"A",{id:!0,class:!0,href:!0});var _y=i(Uo);xd=a(_y,"SPAN",{});var by=i(xd);T(Jr.$$.fragment,by),by.forEach(t),_y.forEach(t),w_=m(Yh),Md=a(Yh,"SPAN",{});var ky=i(Md);T_=o(ky,"TFDistilBertForMaskedLM"),ky.forEach(t),Yh.forEach(t),ah=m(n),it=a(n,"DIV",{class:!0});var Ut=i(it);T(Gr.$$.fragment,Ut),$_=m(Ut),Xr=a(Ut,"P",{});var Zh=i(Xr);y_=o(Zh,"DistilBert Model with a "),jd=a(Zh,"CODE",{});var vy=i(jd);F_=o(vy,"masked language modeling"),vy.forEach(t),D_=o(Zh," head on top."),Zh.forEach(t),B_=m(Ut),Yr=a(Ut,"P",{});var em=i(Yr);E_=o(em,"This model inherits from "),pl=a(em,"A",{href:!0});var wy=i(pl);x_=o(wy,"TFPreTrainedModel"),wy.forEach(t),M_=o(em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em.forEach(t),j_=m(Ut),Zr=a(Ut,"P",{});var tm=i(Zr);z_=o(tm,"This model is also a "),ea=a(tm,"A",{href:!0,rel:!0});var Ty=i(ea);C_=o(Ty,"tf.keras.Model"),Ty.forEach(t),P_=o(tm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm.forEach(t),q_=m(Ut),T(Ko.$$.fragment,Ut),A_=m(Ut),wt=a(Ut,"DIV",{class:!0});var bs=i(wt);T(ta.$$.fragment,bs),O_=m(bs),Ss=a(bs,"P",{});var ql=i(Ss);N_=o(ql,"The "),hl=a(ql,"A",{href:!0});var $y=i(hl);I_=o($y,"TFDistilBertForMaskedLM"),$y.forEach(t),L_=o(ql," forward method, overrides the "),zd=a(ql,"CODE",{});var yy=i(zd);S_=o(yy,"__call__"),yy.forEach(t),W_=o(ql," special method."),ql.forEach(t),Q_=m(bs),T(Ho.$$.fragment,bs),R_=m(bs),T(Vo.$$.fragment,bs),U_=m(bs),T(Jo.$$.fragment,bs),bs.forEach(t),Ut.forEach(t),ih=m(n),Ws=a(n,"H2",{class:!0});var sm=i(Ws);Go=a(sm,"A",{id:!0,class:!0,href:!0});var Fy=i(Go);Cd=a(Fy,"SPAN",{});var Dy=i(Cd);T(sa.$$.fragment,Dy),Dy.forEach(t),Fy.forEach(t),K_=m(sm),Pd=a(sm,"SPAN",{});var By=i(Pd);H_=o(By,"TFDistilBertForSequenceClassification"),By.forEach(t),sm.forEach(t),lh=m(n),lt=a(n,"DIV",{class:!0});var Kt=i(lt);T(oa.$$.fragment,Kt),V_=m(Kt),qd=a(Kt,"P",{});var Ey=i(qd);J_=o(Ey,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ey.forEach(t),G_=m(Kt),na=a(Kt,"P",{});var om=i(na);X_=o(om,"This model inherits from "),ml=a(om,"A",{href:!0});var xy=i(ml);Y_=o(xy,"TFPreTrainedModel"),xy.forEach(t),Z_=o(om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om.forEach(t),eb=m(Kt),ra=a(Kt,"P",{});var nm=i(ra);tb=o(nm,"This model is also a "),aa=a(nm,"A",{href:!0,rel:!0});var My=i(aa);sb=o(My,"tf.keras.Model"),My.forEach(t),ob=o(nm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nm.forEach(t),nb=m(Kt),T(Xo.$$.fragment,Kt),rb=m(Kt),Tt=a(Kt,"DIV",{class:!0});var ks=i(Tt);T(ia.$$.fragment,ks),ab=m(ks),Qs=a(ks,"P",{});var Al=i(Qs);ib=o(Al,"The "),ul=a(Al,"A",{href:!0});var jy=i(ul);lb=o(jy,"TFDistilBertForSequenceClassification"),jy.forEach(t),db=o(Al," forward method, overrides the "),Ad=a(Al,"CODE",{});var zy=i(Ad);cb=o(zy,"__call__"),zy.forEach(t),pb=o(Al," special method."),Al.forEach(t),hb=m(ks),T(Yo.$$.fragment,ks),mb=m(ks),T(Zo.$$.fragment,ks),ub=m(ks),T(en.$$.fragment,ks),ks.forEach(t),Kt.forEach(t),dh=m(n),Rs=a(n,"H2",{class:!0});var rm=i(Rs);tn=a(rm,"A",{id:!0,class:!0,href:!0});var Cy=i(tn);Od=a(Cy,"SPAN",{});var Py=i(Od);T(la.$$.fragment,Py),Py.forEach(t),Cy.forEach(t),fb=m(rm),Nd=a(rm,"SPAN",{});var qy=i(Nd);gb=o(qy,"TFDistilBertForMultipleChoice"),qy.forEach(t),rm.forEach(t),ch=m(n),dt=a(n,"DIV",{class:!0});var Ht=i(dt);T(da.$$.fragment,Ht),_b=m(Ht),Id=a(Ht,"P",{});var Ay=i(Id);bb=o(Ay,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ay.forEach(t),kb=m(Ht),ca=a(Ht,"P",{});var am=i(ca);vb=o(am,"This model inherits from "),fl=a(am,"A",{href:!0});var Oy=i(fl);wb=o(Oy,"TFPreTrainedModel"),Oy.forEach(t),Tb=o(am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),am.forEach(t),$b=m(Ht),pa=a(Ht,"P",{});var im=i(pa);yb=o(im,"This model is also a "),ha=a(im,"A",{href:!0,rel:!0});var Ny=i(ha);Fb=o(Ny,"tf.keras.Model"),Ny.forEach(t),Db=o(im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),im.forEach(t),Bb=m(Ht),T(sn.$$.fragment,Ht),Eb=m(Ht),Ot=a(Ht,"DIV",{class:!0});var In=i(Ot);T(ma.$$.fragment,In),xb=m(In),Us=a(In,"P",{});var Ol=i(Us);Mb=o(Ol,"The "),gl=a(Ol,"A",{href:!0});var Iy=i(gl);jb=o(Iy,"TFDistilBertForMultipleChoice"),Iy.forEach(t),zb=o(Ol," forward method, overrides the "),Ld=a(Ol,"CODE",{});var Ly=i(Ld);Cb=o(Ly,"__call__"),Ly.forEach(t),Pb=o(Ol," special method."),Ol.forEach(t),qb=m(In),T(on.$$.fragment,In),Ab=m(In),T(nn.$$.fragment,In),In.forEach(t),Ht.forEach(t),ph=m(n),Ks=a(n,"H2",{class:!0});var lm=i(Ks);rn=a(lm,"A",{id:!0,class:!0,href:!0});var Sy=i(rn);Sd=a(Sy,"SPAN",{});var Wy=i(Sd);T(ua.$$.fragment,Wy),Wy.forEach(t),Sy.forEach(t),Ob=m(lm),Wd=a(lm,"SPAN",{});var Qy=i(Wd);Nb=o(Qy,"TFDistilBertForTokenClassification"),Qy.forEach(t),lm.forEach(t),hh=m(n),ct=a(n,"DIV",{class:!0});var Vt=i(ct);T(fa.$$.fragment,Vt),Ib=m(Vt),Qd=a(Vt,"P",{});var Ry=i(Qd);Lb=o(Ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ry.forEach(t),Sb=m(Vt),ga=a(Vt,"P",{});var dm=i(ga);Wb=o(dm,"This model inherits from "),_l=a(dm,"A",{href:!0});var Uy=i(_l);Qb=o(Uy,"TFPreTrainedModel"),Uy.forEach(t),Rb=o(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm.forEach(t),Ub=m(Vt),_a=a(Vt,"P",{});var cm=i(_a);Kb=o(cm,"This model is also a "),ba=a(cm,"A",{href:!0,rel:!0});var Ky=i(ba);Hb=o(Ky,"tf.keras.Model"),Ky.forEach(t),Vb=o(cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cm.forEach(t),Jb=m(Vt),T(an.$$.fragment,Vt),Gb=m(Vt),$t=a(Vt,"DIV",{class:!0});var vs=i($t);T(ka.$$.fragment,vs),Xb=m(vs),Hs=a(vs,"P",{});var Nl=i(Hs);Yb=o(Nl,"The "),bl=a(Nl,"A",{href:!0});var Hy=i(bl);Zb=o(Hy,"TFDistilBertForTokenClassification"),Hy.forEach(t),ek=o(Nl," forward method, overrides the "),Rd=a(Nl,"CODE",{});var Vy=i(Rd);tk=o(Vy,"__call__"),Vy.forEach(t),sk=o(Nl," special method."),Nl.forEach(t),ok=m(vs),T(ln.$$.fragment,vs),nk=m(vs),T(dn.$$.fragment,vs),rk=m(vs),T(cn.$$.fragment,vs),vs.forEach(t),Vt.forEach(t),mh=m(n),Vs=a(n,"H2",{class:!0});var pm=i(Vs);pn=a(pm,"A",{id:!0,class:!0,href:!0});var Jy=i(pn);Ud=a(Jy,"SPAN",{});var Gy=i(Ud);T(va.$$.fragment,Gy),Gy.forEach(t),Jy.forEach(t),ak=m(pm),Kd=a(pm,"SPAN",{});var Xy=i(Kd);ik=o(Xy,"TFDistilBertForQuestionAnswering"),Xy.forEach(t),pm.forEach(t),uh=m(n),pt=a(n,"DIV",{class:!0});var Jt=i(pt);T(wa.$$.fragment,Jt),lk=m(Jt),Js=a(Jt,"P",{});var Il=i(Js);dk=o(Il,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Hd=a(Il,"CODE",{});var Yy=i(Hd);ck=o(Yy,"span start logits"),Yy.forEach(t),pk=o(Il," and "),Vd=a(Il,"CODE",{});var Zy=i(Vd);hk=o(Zy,"span end logits"),Zy.forEach(t),mk=o(Il,")."),Il.forEach(t),uk=m(Jt),Ta=a(Jt,"P",{});var hm=i(Ta);fk=o(hm,"This model inherits from "),kl=a(hm,"A",{href:!0});var e1=i(kl);gk=o(e1,"TFPreTrainedModel"),e1.forEach(t),_k=o(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hm.forEach(t),bk=m(Jt),$a=a(Jt,"P",{});var mm=i($a);kk=o(mm,"This model is also a "),ya=a(mm,"A",{href:!0,rel:!0});var t1=i(ya);vk=o(t1,"tf.keras.Model"),t1.forEach(t),wk=o(mm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mm.forEach(t),Tk=m(Jt),T(hn.$$.fragment,Jt),$k=m(Jt),yt=a(Jt,"DIV",{class:!0});var ws=i(yt);T(Fa.$$.fragment,ws),yk=m(ws),Gs=a(ws,"P",{});var Ll=i(Gs);Fk=o(Ll,"The "),vl=a(Ll,"A",{href:!0});var s1=i(vl);Dk=o(s1,"TFDistilBertForQuestionAnswering"),s1.forEach(t),Bk=o(Ll," forward method, overrides the "),Jd=a(Ll,"CODE",{});var o1=i(Jd);Ek=o(o1,"__call__"),o1.forEach(t),xk=o(Ll," special method."),Ll.forEach(t),Mk=m(ws),T(mn.$$.fragment,ws),jk=m(ws),T(un.$$.fragment,ws),zk=m(ws),T(fn.$$.fragment,ws),ws.forEach(t),Jt.forEach(t),fh=m(n),Xs=a(n,"H2",{class:!0});var um=i(Xs);gn=a(um,"A",{id:!0,class:!0,href:!0});var n1=i(gn);Gd=a(n1,"SPAN",{});var r1=i(Gd);T(Da.$$.fragment,r1),r1.forEach(t),n1.forEach(t),Ck=m(um),Xd=a(um,"SPAN",{});var a1=i(Xd);Pk=o(a1,"FlaxDistilBertModel"),a1.forEach(t),um.forEach(t),gh=m(n),Ze=a(n,"DIV",{class:!0});var Dt=i(Ze);T(Ba.$$.fragment,Dt),qk=m(Dt),Yd=a(Dt,"P",{});var i1=i(Yd);Ak=o(i1,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),i1.forEach(t),Ok=m(Dt),Ea=a(Dt,"P",{});var fm=i(Ea);Nk=o(fm,"This model inherits from "),wl=a(fm,"A",{href:!0});var l1=i(wl);Ik=o(l1,"FlaxPreTrainedModel"),l1.forEach(t),Lk=o(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),Sk=m(Dt),xa=a(Dt,"P",{});var gm=i(xa);Wk=o(gm,"This model is also a Flax Linen "),Ma=a(gm,"A",{href:!0,rel:!0});var d1=i(Ma);Qk=o(d1,"flax.linen.Module"),d1.forEach(t),Rk=o(gm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gm.forEach(t),Uk=m(Dt),Zd=a(Dt,"P",{});var c1=i(Zd);Kk=o(c1,"Finally, this model supports inherent JAX features such as:"),c1.forEach(t),Hk=m(Dt),Xt=a(Dt,"UL",{});var Ln=i(Xt);ec=a(Ln,"LI",{});var p1=i(ec);ja=a(p1,"A",{href:!0,rel:!0});var h1=i(ja);Vk=o(h1,"Just-In-Time (JIT) compilation"),h1.forEach(t),p1.forEach(t),Jk=m(Ln),tc=a(Ln,"LI",{});var m1=i(tc);za=a(m1,"A",{href:!0,rel:!0});var u1=i(za);Gk=o(u1,"Automatic Differentiation"),u1.forEach(t),m1.forEach(t),Xk=m(Ln),sc=a(Ln,"LI",{});var f1=i(sc);Ca=a(f1,"A",{href:!0,rel:!0});var g1=i(Ca);Yk=o(g1,"Vectorization"),g1.forEach(t),f1.forEach(t),Zk=m(Ln),oc=a(Ln,"LI",{});var _1=i(oc);Pa=a(_1,"A",{href:!0,rel:!0});var b1=i(Pa);ev=o(b1,"Parallelization"),b1.forEach(t),_1.forEach(t),Ln.forEach(t),tv=m(Dt),Nt=a(Dt,"DIV",{class:!0});var Sn=i(Nt);T(qa.$$.fragment,Sn),sv=m(Sn),Ys=a(Sn,"P",{});var Sl=i(Ys);ov=o(Sl,"The "),nc=a(Sl,"CODE",{});var k1=i(nc);nv=o(k1,"FlaxDistilBertPreTrainedModel"),k1.forEach(t),rv=o(Sl," forward method, overrides the "),rc=a(Sl,"CODE",{});var v1=i(rc);av=o(v1,"__call__"),v1.forEach(t),iv=o(Sl," special method."),Sl.forEach(t),lv=m(Sn),T(_n.$$.fragment,Sn),dv=m(Sn),T(bn.$$.fragment,Sn),Sn.forEach(t),Dt.forEach(t),_h=m(n),Zs=a(n,"H2",{class:!0});var _m=i(Zs);kn=a(_m,"A",{id:!0,class:!0,href:!0});var w1=i(kn);ac=a(w1,"SPAN",{});var T1=i(ac);T(Aa.$$.fragment,T1),T1.forEach(t),w1.forEach(t),cv=m(_m),ic=a(_m,"SPAN",{});var $1=i(ic);pv=o($1,"FlaxDistilBertForMaskedLM"),$1.forEach(t),_m.forEach(t),bh=m(n),et=a(n,"DIV",{class:!0});var Bt=i(et);T(Oa.$$.fragment,Bt),hv=m(Bt),Na=a(Bt,"P",{});var bm=i(Na);mv=o(bm,"DistilBert Model with a "),lc=a(bm,"CODE",{});var y1=i(lc);uv=o(y1,"language modeling"),y1.forEach(t),fv=o(bm," head on top."),bm.forEach(t),gv=m(Bt),Ia=a(Bt,"P",{});var km=i(Ia);_v=o(km,"This model inherits from "),Tl=a(km,"A",{href:!0});var F1=i(Tl);bv=o(F1,"FlaxPreTrainedModel"),F1.forEach(t),kv=o(km,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),km.forEach(t),vv=m(Bt),La=a(Bt,"P",{});var vm=i(La);wv=o(vm,"This model is also a Flax Linen "),Sa=a(vm,"A",{href:!0,rel:!0});var D1=i(Sa);Tv=o(D1,"flax.linen.Module"),D1.forEach(t),$v=o(vm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vm.forEach(t),yv=m(Bt),dc=a(Bt,"P",{});var B1=i(dc);Fv=o(B1,"Finally, this model supports inherent JAX features such as:"),B1.forEach(t),Dv=m(Bt),Yt=a(Bt,"UL",{});var Wn=i(Yt);cc=a(Wn,"LI",{});var E1=i(cc);Wa=a(E1,"A",{href:!0,rel:!0});var x1=i(Wa);Bv=o(x1,"Just-In-Time (JIT) compilation"),x1.forEach(t),E1.forEach(t),Ev=m(Wn),pc=a(Wn,"LI",{});var M1=i(pc);Qa=a(M1,"A",{href:!0,rel:!0});var j1=i(Qa);xv=o(j1,"Automatic Differentiation"),j1.forEach(t),M1.forEach(t),Mv=m(Wn),hc=a(Wn,"LI",{});var z1=i(hc);Ra=a(z1,"A",{href:!0,rel:!0});var C1=i(Ra);jv=o(C1,"Vectorization"),C1.forEach(t),z1.forEach(t),zv=m(Wn),mc=a(Wn,"LI",{});var P1=i(mc);Ua=a(P1,"A",{href:!0,rel:!0});var q1=i(Ua);Cv=o(q1,"Parallelization"),q1.forEach(t),P1.forEach(t),Wn.forEach(t),Pv=m(Bt),It=a(Bt,"DIV",{class:!0});var Qn=i(It);T(Ka.$$.fragment,Qn),qv=m(Qn),eo=a(Qn,"P",{});var Wl=i(eo);Av=o(Wl,"The "),uc=a(Wl,"CODE",{});var A1=i(uc);Ov=o(A1,"FlaxDistilBertPreTrainedModel"),A1.forEach(t),Nv=o(Wl," forward method, overrides the "),fc=a(Wl,"CODE",{});var O1=i(fc);Iv=o(O1,"__call__"),O1.forEach(t),Lv=o(Wl," special method."),Wl.forEach(t),Sv=m(Qn),T(vn.$$.fragment,Qn),Wv=m(Qn),T(wn.$$.fragment,Qn),Qn.forEach(t),Bt.forEach(t),kh=m(n),to=a(n,"H2",{class:!0});var wm=i(to);Tn=a(wm,"A",{id:!0,class:!0,href:!0});var N1=i(Tn);gc=a(N1,"SPAN",{});var I1=i(gc);T(Ha.$$.fragment,I1),I1.forEach(t),N1.forEach(t),Qv=m(wm),_c=a(wm,"SPAN",{});var L1=i(_c);Rv=o(L1,"FlaxDistilBertForSequenceClassification"),L1.forEach(t),wm.forEach(t),vh=m(n),tt=a(n,"DIV",{class:!0});var Et=i(tt);T(Va.$$.fragment,Et),Uv=m(Et),bc=a(Et,"P",{});var S1=i(bc);Kv=o(S1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),S1.forEach(t),Hv=m(Et),Ja=a(Et,"P",{});var Tm=i(Ja);Vv=o(Tm,"This model inherits from "),$l=a(Tm,"A",{href:!0});var W1=i($l);Jv=o(W1,"FlaxPreTrainedModel"),W1.forEach(t),Gv=o(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tm.forEach(t),Xv=m(Et),Ga=a(Et,"P",{});var $m=i(Ga);Yv=o($m,"This model is also a Flax Linen "),Xa=a($m,"A",{href:!0,rel:!0});var Q1=i(Xa);Zv=o(Q1,"flax.linen.Module"),Q1.forEach(t),ew=o($m,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$m.forEach(t),tw=m(Et),kc=a(Et,"P",{});var R1=i(kc);sw=o(R1,"Finally, this model supports inherent JAX features such as:"),R1.forEach(t),ow=m(Et),Zt=a(Et,"UL",{});var Rn=i(Zt);vc=a(Rn,"LI",{});var U1=i(vc);Ya=a(U1,"A",{href:!0,rel:!0});var K1=i(Ya);nw=o(K1,"Just-In-Time (JIT) compilation"),K1.forEach(t),U1.forEach(t),rw=m(Rn),wc=a(Rn,"LI",{});var H1=i(wc);Za=a(H1,"A",{href:!0,rel:!0});var V1=i(Za);aw=o(V1,"Automatic Differentiation"),V1.forEach(t),H1.forEach(t),iw=m(Rn),Tc=a(Rn,"LI",{});var J1=i(Tc);ei=a(J1,"A",{href:!0,rel:!0});var G1=i(ei);lw=o(G1,"Vectorization"),G1.forEach(t),J1.forEach(t),dw=m(Rn),$c=a(Rn,"LI",{});var X1=i($c);ti=a(X1,"A",{href:!0,rel:!0});var Y1=i(ti);cw=o(Y1,"Parallelization"),Y1.forEach(t),X1.forEach(t),Rn.forEach(t),pw=m(Et),Lt=a(Et,"DIV",{class:!0});var Un=i(Lt);T(si.$$.fragment,Un),hw=m(Un),so=a(Un,"P",{});var Ql=i(so);mw=o(Ql,"The "),yc=a(Ql,"CODE",{});var Z1=i(yc);uw=o(Z1,"FlaxDistilBertPreTrainedModel"),Z1.forEach(t),fw=o(Ql," forward method, overrides the "),Fc=a(Ql,"CODE",{});var e2=i(Fc);gw=o(e2,"__call__"),e2.forEach(t),_w=o(Ql," special method."),Ql.forEach(t),bw=m(Un),T($n.$$.fragment,Un),kw=m(Un),T(yn.$$.fragment,Un),Un.forEach(t),Et.forEach(t),wh=m(n),oo=a(n,"H2",{class:!0});var ym=i(oo);Fn=a(ym,"A",{id:!0,class:!0,href:!0});var t2=i(Fn);Dc=a(t2,"SPAN",{});var s2=i(Dc);T(oi.$$.fragment,s2),s2.forEach(t),t2.forEach(t),vw=m(ym),Bc=a(ym,"SPAN",{});var o2=i(Bc);ww=o(o2,"FlaxDistilBertForMultipleChoice"),o2.forEach(t),ym.forEach(t),Th=m(n),st=a(n,"DIV",{class:!0});var xt=i(st);T(ni.$$.fragment,xt),Tw=m(xt),Ec=a(xt,"P",{});var n2=i(Ec);$w=o(n2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n2.forEach(t),yw=m(xt),ri=a(xt,"P",{});var Fm=i(ri);Fw=o(Fm,"This model inherits from "),yl=a(Fm,"A",{href:!0});var r2=i(yl);Dw=o(r2,"FlaxPreTrainedModel"),r2.forEach(t),Bw=o(Fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fm.forEach(t),Ew=m(xt),ai=a(xt,"P",{});var Dm=i(ai);xw=o(Dm,"This model is also a Flax Linen "),ii=a(Dm,"A",{href:!0,rel:!0});var a2=i(ii);Mw=o(a2,"flax.linen.Module"),a2.forEach(t),jw=o(Dm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dm.forEach(t),zw=m(xt),xc=a(xt,"P",{});var i2=i(xc);Cw=o(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),Pw=m(xt),es=a(xt,"UL",{});var Kn=i(es);Mc=a(Kn,"LI",{});var l2=i(Mc);li=a(l2,"A",{href:!0,rel:!0});var d2=i(li);qw=o(d2,"Just-In-Time (JIT) compilation"),d2.forEach(t),l2.forEach(t),Aw=m(Kn),jc=a(Kn,"LI",{});var c2=i(jc);di=a(c2,"A",{href:!0,rel:!0});var p2=i(di);Ow=o(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),Nw=m(Kn),zc=a(Kn,"LI",{});var h2=i(zc);ci=a(h2,"A",{href:!0,rel:!0});var m2=i(ci);Iw=o(m2,"Vectorization"),m2.forEach(t),h2.forEach(t),Lw=m(Kn),Cc=a(Kn,"LI",{});var u2=i(Cc);pi=a(u2,"A",{href:!0,rel:!0});var f2=i(pi);Sw=o(f2,"Parallelization"),f2.forEach(t),u2.forEach(t),Kn.forEach(t),Ww=m(xt),St=a(xt,"DIV",{class:!0});var Hn=i(St);T(hi.$$.fragment,Hn),Qw=m(Hn),no=a(Hn,"P",{});var Rl=i(no);Rw=o(Rl,"The "),Pc=a(Rl,"CODE",{});var g2=i(Pc);Uw=o(g2,"FlaxDistilBertPreTrainedModel"),g2.forEach(t),Kw=o(Rl," forward method, overrides the "),qc=a(Rl,"CODE",{});var _2=i(qc);Hw=o(_2,"__call__"),_2.forEach(t),Vw=o(Rl," special method."),Rl.forEach(t),Jw=m(Hn),T(Dn.$$.fragment,Hn),Gw=m(Hn),T(Bn.$$.fragment,Hn),Hn.forEach(t),xt.forEach(t),$h=m(n),ro=a(n,"H2",{class:!0});var Bm=i(ro);En=a(Bm,"A",{id:!0,class:!0,href:!0});var b2=i(En);Ac=a(b2,"SPAN",{});var k2=i(Ac);T(mi.$$.fragment,k2),k2.forEach(t),b2.forEach(t),Xw=m(Bm),Oc=a(Bm,"SPAN",{});var v2=i(Oc);Yw=o(v2,"FlaxDistilBertForTokenClassification"),v2.forEach(t),Bm.forEach(t),yh=m(n),ot=a(n,"DIV",{class:!0});var Mt=i(ot);T(ui.$$.fragment,Mt),Zw=m(Mt),Nc=a(Mt,"P",{});var w2=i(Nc);eT=o(w2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),w2.forEach(t),tT=m(Mt),fi=a(Mt,"P",{});var Em=i(fi);sT=o(Em,"This model inherits from "),Fl=a(Em,"A",{href:!0});var T2=i(Fl);oT=o(T2,"FlaxPreTrainedModel"),T2.forEach(t),nT=o(Em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Em.forEach(t),rT=m(Mt),gi=a(Mt,"P",{});var xm=i(gi);aT=o(xm,"This model is also a Flax Linen "),_i=a(xm,"A",{href:!0,rel:!0});var $2=i(_i);iT=o($2,"flax.linen.Module"),$2.forEach(t),lT=o(xm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xm.forEach(t),dT=m(Mt),Ic=a(Mt,"P",{});var y2=i(Ic);cT=o(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),pT=m(Mt),ts=a(Mt,"UL",{});var Vn=i(ts);Lc=a(Vn,"LI",{});var F2=i(Lc);bi=a(F2,"A",{href:!0,rel:!0});var D2=i(bi);hT=o(D2,"Just-In-Time (JIT) compilation"),D2.forEach(t),F2.forEach(t),mT=m(Vn),Sc=a(Vn,"LI",{});var B2=i(Sc);ki=a(B2,"A",{href:!0,rel:!0});var E2=i(ki);uT=o(E2,"Automatic Differentiation"),E2.forEach(t),B2.forEach(t),fT=m(Vn),Wc=a(Vn,"LI",{});var x2=i(Wc);vi=a(x2,"A",{href:!0,rel:!0});var M2=i(vi);gT=o(M2,"Vectorization"),M2.forEach(t),x2.forEach(t),_T=m(Vn),Qc=a(Vn,"LI",{});var j2=i(Qc);wi=a(j2,"A",{href:!0,rel:!0});var z2=i(wi);bT=o(z2,"Parallelization"),z2.forEach(t),j2.forEach(t),Vn.forEach(t),kT=m(Mt),Wt=a(Mt,"DIV",{class:!0});var Jn=i(Wt);T(Ti.$$.fragment,Jn),vT=m(Jn),ao=a(Jn,"P",{});var Ul=i(ao);wT=o(Ul,"The "),Rc=a(Ul,"CODE",{});var C2=i(Rc);TT=o(C2,"FlaxDistilBertPreTrainedModel"),C2.forEach(t),$T=o(Ul," forward method, overrides the "),Uc=a(Ul,"CODE",{});var P2=i(Uc);yT=o(P2,"__call__"),P2.forEach(t),FT=o(Ul," special method."),Ul.forEach(t),DT=m(Jn),T(xn.$$.fragment,Jn),BT=m(Jn),T(Mn.$$.fragment,Jn),Jn.forEach(t),Mt.forEach(t),Fh=m(n),io=a(n,"H2",{class:!0});var Mm=i(io);jn=a(Mm,"A",{id:!0,class:!0,href:!0});var q2=i(jn);Kc=a(q2,"SPAN",{});var A2=i(Kc);T($i.$$.fragment,A2),A2.forEach(t),q2.forEach(t),ET=m(Mm),Hc=a(Mm,"SPAN",{});var O2=i(Hc);xT=o(O2,"FlaxDistilBertForQuestionAnswering"),O2.forEach(t),Mm.forEach(t),Dh=m(n),nt=a(n,"DIV",{class:!0});var jt=i(nt);T(yi.$$.fragment,jt),MT=m(jt),lo=a(jt,"P",{});var Kl=i(lo);jT=o(Kl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=a(Kl,"CODE",{});var N2=i(Vc);zT=o(N2,"span start logits"),N2.forEach(t),CT=o(Kl," and "),Jc=a(Kl,"CODE",{});var I2=i(Jc);PT=o(I2,"span end logits"),I2.forEach(t),qT=o(Kl,")."),Kl.forEach(t),AT=m(jt),Fi=a(jt,"P",{});var jm=i(Fi);OT=o(jm,"This model inherits from "),Dl=a(jm,"A",{href:!0});var L2=i(Dl);NT=o(L2,"FlaxPreTrainedModel"),L2.forEach(t),IT=o(jm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jm.forEach(t),LT=m(jt),Di=a(jt,"P",{});var zm=i(Di);ST=o(zm,"This model is also a Flax Linen "),Bi=a(zm,"A",{href:!0,rel:!0});var S2=i(Bi);WT=o(S2,"flax.linen.Module"),S2.forEach(t),QT=o(zm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zm.forEach(t),RT=m(jt),Gc=a(jt,"P",{});var W2=i(Gc);UT=o(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),KT=m(jt),ss=a(jt,"UL",{});var Gn=i(ss);Xc=a(Gn,"LI",{});var Q2=i(Xc);Ei=a(Q2,"A",{href:!0,rel:!0});var R2=i(Ei);HT=o(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),Q2.forEach(t),VT=m(Gn),Yc=a(Gn,"LI",{});var U2=i(Yc);xi=a(U2,"A",{href:!0,rel:!0});var K2=i(xi);JT=o(K2,"Automatic Differentiation"),K2.forEach(t),U2.forEach(t),GT=m(Gn),Zc=a(Gn,"LI",{});var H2=i(Zc);Mi=a(H2,"A",{href:!0,rel:!0});var V2=i(Mi);XT=o(V2,"Vectorization"),V2.forEach(t),H2.forEach(t),YT=m(Gn),ep=a(Gn,"LI",{});var J2=i(ep);ji=a(J2,"A",{href:!0,rel:!0});var G2=i(ji);ZT=o(G2,"Parallelization"),G2.forEach(t),J2.forEach(t),Gn.forEach(t),e$=m(jt),Qt=a(jt,"DIV",{class:!0});var Xn=i(Qt);T(zi.$$.fragment,Xn),t$=m(Xn),co=a(Xn,"P",{});var Hl=i(co);s$=o(Hl,"The "),tp=a(Hl,"CODE",{});var X2=i(tp);o$=o(X2,"FlaxDistilBertPreTrainedModel"),X2.forEach(t),n$=o(Hl," forward method, overrides the "),sp=a(Hl,"CODE",{});var Y2=i(sp);r$=o(Y2,"__call__"),Y2.forEach(t),a$=o(Hl," special method."),Hl.forEach(t),i$=m(Xn),T(zn.$$.fragment,Xn),l$=m(Xn),T(Cn.$$.fragment,Xn),Xn.forEach(t),jt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(nD)),f(u,"id","distilbert"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#distilbert"),f(c,"class","relative group"),f(re,"id","overview"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#overview"),f(I,"class","relative group"),f(ae,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),f(ae,"rel","nofollow"),f(ie,"href","https://arxiv.org/abs/1910.01108"),f(ie,"rel","nofollow"),f(ee,"href","https://huggingface.co/victorsanh"),f(ee,"rel","nofollow"),f(j,"href","https://huggingface.co/kamalkraj"),f(j,"rel","nofollow"),f(Ne,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),f(Ne,"rel","nofollow"),f(Oe,"id","transformers.DistilBertConfig"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#transformers.DistilBertConfig"),f(S,"class","relative group"),f(Si,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(Wi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(Yn,"href","https://huggingface.co/distilbert-base-uncased"),f(Yn,"rel","nofollow"),f(Qi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ri,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mo,"id","transformers.DistilBertTokenizer"),f(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mo,"href","#transformers.DistilBertTokenizer"),f($s,"class","relative group"),f(Ui,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),f(Ki,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(Hi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fo,"id","transformers.DistilBertTokenizerFast"),f(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fo,"href","#transformers.DistilBertTokenizerFast"),f(ys,"class","relative group"),f(Vi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),f(Ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(Gi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.DistilBertModel"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.DistilBertModel"),f(Fs,"class","relative group"),f(Xi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(cr,"rel","nofollow"),f(Yi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vo,"id","transformers.DistilBertForMaskedLM"),f(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vo,"href","#transformers.DistilBertForMaskedLM"),f(Bs,"class","relative group"),f(Zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(_r,"rel","nofollow"),f(el,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yo,"id","transformers.DistilBertForSequenceClassification"),f(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yo,"href","#transformers.DistilBertForSequenceClassification"),f(xs,"class","relative group"),f(tl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f($r,"rel","nofollow"),f(sl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mo,"id","transformers.DistilBertForMultipleChoice"),f(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mo,"href","#transformers.DistilBertForMultipleChoice"),f(js,"class","relative group"),f(ol,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(xr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xr,"rel","nofollow"),f(nl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.DistilBertForTokenClassification"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.DistilBertForTokenClassification"),f(Cs,"class","relative group"),f(rl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qr,"rel","nofollow"),f(al,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"id","transformers.DistilBertForQuestionAnswering"),f(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oo,"href","#transformers.DistilBertForQuestionAnswering"),f(qs,"class","relative group"),f(il,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Sr,"rel","nofollow"),f(ll,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.TFDistilBertModel"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.TFDistilBertModel"),f(Ns,"class","relative group"),f(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Hr,"rel","nofollow"),f(cl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.TFDistilBertForMaskedLM"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.TFDistilBertForMaskedLM"),f(Ls,"class","relative group"),f(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ea,"rel","nofollow"),f(hl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"id","transformers.TFDistilBertForSequenceClassification"),f(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Go,"href","#transformers.TFDistilBertForSequenceClassification"),f(Ws,"class","relative group"),f(ml,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(aa,"rel","nofollow"),f(ul,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.TFDistilBertForMultipleChoice"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.TFDistilBertForMultipleChoice"),f(Rs,"class","relative group"),f(fl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ha,"rel","nofollow"),f(gl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFDistilBertForTokenClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFDistilBertForTokenClassification"),f(Ks,"class","relative group"),f(_l,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ba,"rel","nofollow"),f(bl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.TFDistilBertForQuestionAnswering"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.TFDistilBertForQuestionAnswering"),f(Vs,"class","relative group"),f(kl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ya,"rel","nofollow"),f(vl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.FlaxDistilBertModel"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.FlaxDistilBertModel"),f(Xs,"class","relative group"),f(wl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ma,"rel","nofollow"),f(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ja,"rel","nofollow"),f(za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(za,"rel","nofollow"),f(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ca,"rel","nofollow"),f(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Pa,"rel","nofollow"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.FlaxDistilBertForMaskedLM"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.FlaxDistilBertForMaskedLM"),f(Zs,"class","relative group"),f(Tl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Sa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Sa,"rel","nofollow"),f(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Wa,"rel","nofollow"),f(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Qa,"rel","nofollow"),f(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ra,"rel","nofollow"),f(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ua,"rel","nofollow"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.FlaxDistilBertForSequenceClassification"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),f(to,"class","relative group"),f($l,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Xa,"rel","nofollow"),f(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ya,"rel","nofollow"),f(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Za,"rel","nofollow"),f(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ei,"rel","nofollow"),f(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ti,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.FlaxDistilBertForMultipleChoice"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.FlaxDistilBertForMultipleChoice"),f(oo,"class","relative group"),f(yl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(ii,"rel","nofollow"),f(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(li,"rel","nofollow"),f(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(di,"rel","nofollow"),f(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ci,"rel","nofollow"),f(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(pi,"rel","nofollow"),f(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"id","transformers.FlaxDistilBertForTokenClassification"),f(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(En,"href","#transformers.FlaxDistilBertForTokenClassification"),f(ro,"class","relative group"),f(Fl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(_i,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(_i,"rel","nofollow"),f(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(bi,"rel","nofollow"),f(ki,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ki,"rel","nofollow"),f(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(vi,"rel","nofollow"),f(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(wi,"rel","nofollow"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"id","transformers.FlaxDistilBertForQuestionAnswering"),f(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),f(io,"class","relative group"),f(Dl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Bi,"rel","nofollow"),f(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ei,"rel","nofollow"),f(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xi,"rel","nofollow"),f(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Mi,"rel","nofollow"),f(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ji,"rel","nofollow"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,b){e(document.head,d),_(n,g,b),_(n,c,b),e(c,u),e(u,k),$(l,k,null),e(c,p),e(c,M),e(M,we),_(n,ge,b),_(n,I,b),e(I,re),e(re,se),$(B,se,null),e(I,Te),e(I,U),e(U,$e),_(n,_e,b),_(n,O,b),e(O,ye),e(O,ae),e(ae,H),e(O,Fe),e(O,ie),e(ie,V),e(O,De),e(O,de),e(de,J),e(O,Be),_(n,be,b),_(n,te,b),e(te,z),_(n,q,b),_(n,le,b),e(le,K),e(K,Ee),_(n,ke,b),_(n,R,b),e(R,xe),_(n,ve,b),_(n,C,b),e(C,oe),e(oe,G),e(oe,ce),e(ce,Me),e(oe,X),e(oe,pe),e(pe,je),e(oe,L),e(oe,he),e(he,Y),e(oe,ze),e(C,ne),e(C,P),e(P,Ce),e(P,A),e(A,Pe),e(P,qe),_(n,v,b),_(n,x,b),e(x,Ue),e(x,ee),e(ee,Ke),e(x,He),e(x,j),e(j,Ve),e(x,Je),e(x,Ne),e(Ne,Ge),e(x,Xe),_(n,N,b),_(n,S,b),e(S,Oe),e(Oe,Se),$(W,Se,null),e(S,Ye),e(S,We),e(We,Ae),_(n,Re,b),_(n,Q,b),$(Ie,Q,null),e(Q,Cm),e(Q,Gt),e(Gt,Pm),e(Gt,Si),e(Si,qm),e(Gt,Am),e(Gt,Wi),e(Wi,Om),e(Gt,Nm),e(Gt,Yn),e(Yn,Im),e(Gt,Lm),e(Q,Sm),e(Q,Ts),e(Ts,Wm),e(Ts,Qi),e(Qi,Qm),e(Ts,Rm),e(Ts,Ri),e(Ri,Um),e(Ts,Km),e(Q,Hm),$(ho,Q,null),_(n,Sp,b),_(n,$s,b),e($s,mo),e(mo,Vl),$(Zn,Vl,null),e($s,Vm),e($s,Jl),e(Jl,Jm),_(n,Wp,b),_(n,zt,b),$(er,zt,null),e(zt,Gm),e(zt,Gl),e(Gl,Xm),e(zt,Ym),e(zt,uo),e(uo,Ui),e(Ui,Zm),e(uo,eu),e(uo,Ki),e(Ki,tu),e(uo,su),e(zt,ou),e(zt,tr),e(tr,nu),e(tr,Hi),e(Hi,ru),e(tr,au),_(n,Qp,b),_(n,ys,b),e(ys,fo),e(fo,Xl),$(sr,Xl,null),e(ys,iu),e(ys,Yl),e(Yl,lu),_(n,Rp,b),_(n,Ct,b),$(or,Ct,null),e(Ct,du),e(Ct,nr),e(nr,cu),e(nr,Zl),e(Zl,pu),e(nr,hu),e(Ct,mu),e(Ct,go),e(go,Vi),e(Vi,uu),e(go,fu),e(go,Ji),e(Ji,gu),e(go,_u),e(Ct,bu),e(Ct,rr),e(rr,ku),e(rr,Gi),e(Gi,vu),e(rr,wu),_(n,Up,b),_(n,Fs,b),e(Fs,_o),e(_o,ed),$(ar,ed,null),e(Fs,Tu),e(Fs,td),e(td,$u),_(n,Kp,b),_(n,ht,b),$(ir,ht,null),e(ht,yu),e(ht,sd),e(sd,Fu),e(ht,Du),e(ht,lr),e(lr,Bu),e(lr,Xi),e(Xi,Eu),e(lr,xu),e(ht,Mu),e(ht,dr),e(dr,ju),e(dr,cr),e(cr,zu),e(dr,Cu),e(ht,Pu),e(ht,Pt),$(pr,Pt,null),e(Pt,qu),e(Pt,Ds),e(Ds,Au),e(Ds,Yi),e(Yi,Ou),e(Ds,Nu),e(Ds,od),e(od,Iu),e(Ds,Lu),e(Pt,Su),$(bo,Pt,null),e(Pt,Wu),$(ko,Pt,null),_(n,Hp,b),_(n,Bs,b),e(Bs,vo),e(vo,nd),$(hr,nd,null),e(Bs,Qu),e(Bs,rd),e(rd,Ru),_(n,Vp,b),_(n,mt,b),$(mr,mt,null),e(mt,Uu),e(mt,ur),e(ur,Ku),e(ur,ad),e(ad,Hu),e(ur,Vu),e(mt,Ju),e(mt,fr),e(fr,Gu),e(fr,Zi),e(Zi,Xu),e(fr,Yu),e(mt,Zu),e(mt,gr),e(gr,ef),e(gr,_r),e(_r,tf),e(gr,sf),e(mt,of),e(mt,bt),$(br,bt,null),e(bt,nf),e(bt,Es),e(Es,rf),e(Es,el),e(el,af),e(Es,lf),e(Es,id),e(id,df),e(Es,cf),e(bt,pf),$(wo,bt,null),e(bt,hf),$(To,bt,null),e(bt,mf),$($o,bt,null),_(n,Jp,b),_(n,xs,b),e(xs,yo),e(yo,ld),$(kr,ld,null),e(xs,uf),e(xs,dd),e(dd,ff),_(n,Gp,b),_(n,ut,b),$(vr,ut,null),e(ut,gf),e(ut,cd),e(cd,_f),e(ut,bf),e(ut,wr),e(wr,kf),e(wr,tl),e(tl,vf),e(wr,wf),e(ut,Tf),e(ut,Tr),e(Tr,$f),e(Tr,$r),e($r,yf),e(Tr,Ff),e(ut,Df),e(ut,rt),$(yr,rt,null),e(rt,Bf),e(rt,Ms),e(Ms,Ef),e(Ms,sl),e(sl,xf),e(Ms,Mf),e(Ms,pd),e(pd,jf),e(Ms,zf),e(rt,Cf),$(Fo,rt,null),e(rt,Pf),$(Do,rt,null),e(rt,qf),$(Bo,rt,null),e(rt,Af),$(Eo,rt,null),e(rt,Of),$(xo,rt,null),_(n,Xp,b),_(n,js,b),e(js,Mo),e(Mo,hd),$(Fr,hd,null),e(js,Nf),e(js,md),e(md,If),_(n,Yp,b),_(n,ft,b),$(Dr,ft,null),e(ft,Lf),e(ft,ud),e(ud,Sf),e(ft,Wf),e(ft,Br),e(Br,Qf),e(Br,ol),e(ol,Rf),e(Br,Uf),e(ft,Kf),e(ft,Er),e(Er,Hf),e(Er,xr),e(xr,Vf),e(Er,Jf),e(ft,Gf),e(ft,qt),$(Mr,qt,null),e(qt,Xf),e(qt,zs),e(zs,Yf),e(zs,nl),e(nl,Zf),e(zs,eg),e(zs,fd),e(fd,tg),e(zs,sg),e(qt,og),$(jo,qt,null),e(qt,ng),$(zo,qt,null),_(n,Zp,b),_(n,Cs,b),e(Cs,Co),e(Co,gd),$(jr,gd,null),e(Cs,rg),e(Cs,_d),e(_d,ag),_(n,eh,b),_(n,gt,b),$(zr,gt,null),e(gt,ig),e(gt,bd),e(bd,lg),e(gt,dg),e(gt,Cr),e(Cr,cg),e(Cr,rl),e(rl,pg),e(Cr,hg),e(gt,mg),e(gt,Pr),e(Pr,ug),e(Pr,qr),e(qr,fg),e(Pr,gg),e(gt,_g),e(gt,kt),$(Ar,kt,null),e(kt,bg),e(kt,Ps),e(Ps,kg),e(Ps,al),e(al,vg),e(Ps,wg),e(Ps,kd),e(kd,Tg),e(Ps,$g),e(kt,yg),$(Po,kt,null),e(kt,Fg),$(qo,kt,null),e(kt,Dg),$(Ao,kt,null),_(n,th,b),_(n,qs,b),e(qs,Oo),e(Oo,vd),$(Or,vd,null),e(qs,Bg),e(qs,wd),e(wd,Eg),_(n,sh,b),_(n,_t,b),$(Nr,_t,null),e(_t,xg),e(_t,As),e(As,Mg),e(As,Td),e(Td,jg),e(As,zg),e(As,$d),e($d,Cg),e(As,Pg),e(_t,qg),e(_t,Ir),e(Ir,Ag),e(Ir,il),e(il,Og),e(Ir,Ng),e(_t,Ig),e(_t,Lr),e(Lr,Lg),e(Lr,Sr),e(Sr,Sg),e(Lr,Wg),e(_t,Qg),e(_t,vt),$(Wr,vt,null),e(vt,Rg),e(vt,Os),e(Os,Ug),e(Os,ll),e(ll,Kg),e(Os,Hg),e(Os,yd),e(yd,Vg),e(Os,Jg),e(vt,Gg),$(No,vt,null),e(vt,Xg),$(Io,vt,null),e(vt,Yg),$(Lo,vt,null),_(n,oh,b),_(n,Ns,b),e(Ns,So),e(So,Fd),$(Qr,Fd,null),e(Ns,Zg),e(Ns,Dd),e(Dd,e_),_(n,nh,b),_(n,at,b),$(Rr,at,null),e(at,t_),e(at,Bd),e(Bd,s_),e(at,o_),e(at,Ur),e(Ur,n_),e(Ur,dl),e(dl,r_),e(Ur,a_),e(at,i_),e(at,Kr),e(Kr,l_),e(Kr,Hr),e(Hr,d_),e(Kr,c_),e(at,p_),$(Wo,at,null),e(at,h_),e(at,At),$(Vr,At,null),e(At,m_),e(At,Is),e(Is,u_),e(Is,cl),e(cl,f_),e(Is,g_),e(Is,Ed),e(Ed,__),e(Is,b_),e(At,k_),$(Qo,At,null),e(At,v_),$(Ro,At,null),_(n,rh,b),_(n,Ls,b),e(Ls,Uo),e(Uo,xd),$(Jr,xd,null),e(Ls,w_),e(Ls,Md),e(Md,T_),_(n,ah,b),_(n,it,b),$(Gr,it,null),e(it,$_),e(it,Xr),e(Xr,y_),e(Xr,jd),e(jd,F_),e(Xr,D_),e(it,B_),e(it,Yr),e(Yr,E_),e(Yr,pl),e(pl,x_),e(Yr,M_),e(it,j_),e(it,Zr),e(Zr,z_),e(Zr,ea),e(ea,C_),e(Zr,P_),e(it,q_),$(Ko,it,null),e(it,A_),e(it,wt),$(ta,wt,null),e(wt,O_),e(wt,Ss),e(Ss,N_),e(Ss,hl),e(hl,I_),e(Ss,L_),e(Ss,zd),e(zd,S_),e(Ss,W_),e(wt,Q_),$(Ho,wt,null),e(wt,R_),$(Vo,wt,null),e(wt,U_),$(Jo,wt,null),_(n,ih,b),_(n,Ws,b),e(Ws,Go),e(Go,Cd),$(sa,Cd,null),e(Ws,K_),e(Ws,Pd),e(Pd,H_),_(n,lh,b),_(n,lt,b),$(oa,lt,null),e(lt,V_),e(lt,qd),e(qd,J_),e(lt,G_),e(lt,na),e(na,X_),e(na,ml),e(ml,Y_),e(na,Z_),e(lt,eb),e(lt,ra),e(ra,tb),e(ra,aa),e(aa,sb),e(ra,ob),e(lt,nb),$(Xo,lt,null),e(lt,rb),e(lt,Tt),$(ia,Tt,null),e(Tt,ab),e(Tt,Qs),e(Qs,ib),e(Qs,ul),e(ul,lb),e(Qs,db),e(Qs,Ad),e(Ad,cb),e(Qs,pb),e(Tt,hb),$(Yo,Tt,null),e(Tt,mb),$(Zo,Tt,null),e(Tt,ub),$(en,Tt,null),_(n,dh,b),_(n,Rs,b),e(Rs,tn),e(tn,Od),$(la,Od,null),e(Rs,fb),e(Rs,Nd),e(Nd,gb),_(n,ch,b),_(n,dt,b),$(da,dt,null),e(dt,_b),e(dt,Id),e(Id,bb),e(dt,kb),e(dt,ca),e(ca,vb),e(ca,fl),e(fl,wb),e(ca,Tb),e(dt,$b),e(dt,pa),e(pa,yb),e(pa,ha),e(ha,Fb),e(pa,Db),e(dt,Bb),$(sn,dt,null),e(dt,Eb),e(dt,Ot),$(ma,Ot,null),e(Ot,xb),e(Ot,Us),e(Us,Mb),e(Us,gl),e(gl,jb),e(Us,zb),e(Us,Ld),e(Ld,Cb),e(Us,Pb),e(Ot,qb),$(on,Ot,null),e(Ot,Ab),$(nn,Ot,null),_(n,ph,b),_(n,Ks,b),e(Ks,rn),e(rn,Sd),$(ua,Sd,null),e(Ks,Ob),e(Ks,Wd),e(Wd,Nb),_(n,hh,b),_(n,ct,b),$(fa,ct,null),e(ct,Ib),e(ct,Qd),e(Qd,Lb),e(ct,Sb),e(ct,ga),e(ga,Wb),e(ga,_l),e(_l,Qb),e(ga,Rb),e(ct,Ub),e(ct,_a),e(_a,Kb),e(_a,ba),e(ba,Hb),e(_a,Vb),e(ct,Jb),$(an,ct,null),e(ct,Gb),e(ct,$t),$(ka,$t,null),e($t,Xb),e($t,Hs),e(Hs,Yb),e(Hs,bl),e(bl,Zb),e(Hs,ek),e(Hs,Rd),e(Rd,tk),e(Hs,sk),e($t,ok),$(ln,$t,null),e($t,nk),$(dn,$t,null),e($t,rk),$(cn,$t,null),_(n,mh,b),_(n,Vs,b),e(Vs,pn),e(pn,Ud),$(va,Ud,null),e(Vs,ak),e(Vs,Kd),e(Kd,ik),_(n,uh,b),_(n,pt,b),$(wa,pt,null),e(pt,lk),e(pt,Js),e(Js,dk),e(Js,Hd),e(Hd,ck),e(Js,pk),e(Js,Vd),e(Vd,hk),e(Js,mk),e(pt,uk),e(pt,Ta),e(Ta,fk),e(Ta,kl),e(kl,gk),e(Ta,_k),e(pt,bk),e(pt,$a),e($a,kk),e($a,ya),e(ya,vk),e($a,wk),e(pt,Tk),$(hn,pt,null),e(pt,$k),e(pt,yt),$(Fa,yt,null),e(yt,yk),e(yt,Gs),e(Gs,Fk),e(Gs,vl),e(vl,Dk),e(Gs,Bk),e(Gs,Jd),e(Jd,Ek),e(Gs,xk),e(yt,Mk),$(mn,yt,null),e(yt,jk),$(un,yt,null),e(yt,zk),$(fn,yt,null),_(n,fh,b),_(n,Xs,b),e(Xs,gn),e(gn,Gd),$(Da,Gd,null),e(Xs,Ck),e(Xs,Xd),e(Xd,Pk),_(n,gh,b),_(n,Ze,b),$(Ba,Ze,null),e(Ze,qk),e(Ze,Yd),e(Yd,Ak),e(Ze,Ok),e(Ze,Ea),e(Ea,Nk),e(Ea,wl),e(wl,Ik),e(Ea,Lk),e(Ze,Sk),e(Ze,xa),e(xa,Wk),e(xa,Ma),e(Ma,Qk),e(xa,Rk),e(Ze,Uk),e(Ze,Zd),e(Zd,Kk),e(Ze,Hk),e(Ze,Xt),e(Xt,ec),e(ec,ja),e(ja,Vk),e(Xt,Jk),e(Xt,tc),e(tc,za),e(za,Gk),e(Xt,Xk),e(Xt,sc),e(sc,Ca),e(Ca,Yk),e(Xt,Zk),e(Xt,oc),e(oc,Pa),e(Pa,ev),e(Ze,tv),e(Ze,Nt),$(qa,Nt,null),e(Nt,sv),e(Nt,Ys),e(Ys,ov),e(Ys,nc),e(nc,nv),e(Ys,rv),e(Ys,rc),e(rc,av),e(Ys,iv),e(Nt,lv),$(_n,Nt,null),e(Nt,dv),$(bn,Nt,null),_(n,_h,b),_(n,Zs,b),e(Zs,kn),e(kn,ac),$(Aa,ac,null),e(Zs,cv),e(Zs,ic),e(ic,pv),_(n,bh,b),_(n,et,b),$(Oa,et,null),e(et,hv),e(et,Na),e(Na,mv),e(Na,lc),e(lc,uv),e(Na,fv),e(et,gv),e(et,Ia),e(Ia,_v),e(Ia,Tl),e(Tl,bv),e(Ia,kv),e(et,vv),e(et,La),e(La,wv),e(La,Sa),e(Sa,Tv),e(La,$v),e(et,yv),e(et,dc),e(dc,Fv),e(et,Dv),e(et,Yt),e(Yt,cc),e(cc,Wa),e(Wa,Bv),e(Yt,Ev),e(Yt,pc),e(pc,Qa),e(Qa,xv),e(Yt,Mv),e(Yt,hc),e(hc,Ra),e(Ra,jv),e(Yt,zv),e(Yt,mc),e(mc,Ua),e(Ua,Cv),e(et,Pv),e(et,It),$(Ka,It,null),e(It,qv),e(It,eo),e(eo,Av),e(eo,uc),e(uc,Ov),e(eo,Nv),e(eo,fc),e(fc,Iv),e(eo,Lv),e(It,Sv),$(vn,It,null),e(It,Wv),$(wn,It,null),_(n,kh,b),_(n,to,b),e(to,Tn),e(Tn,gc),$(Ha,gc,null),e(to,Qv),e(to,_c),e(_c,Rv),_(n,vh,b),_(n,tt,b),$(Va,tt,null),e(tt,Uv),e(tt,bc),e(bc,Kv),e(tt,Hv),e(tt,Ja),e(Ja,Vv),e(Ja,$l),e($l,Jv),e(Ja,Gv),e(tt,Xv),e(tt,Ga),e(Ga,Yv),e(Ga,Xa),e(Xa,Zv),e(Ga,ew),e(tt,tw),e(tt,kc),e(kc,sw),e(tt,ow),e(tt,Zt),e(Zt,vc),e(vc,Ya),e(Ya,nw),e(Zt,rw),e(Zt,wc),e(wc,Za),e(Za,aw),e(Zt,iw),e(Zt,Tc),e(Tc,ei),e(ei,lw),e(Zt,dw),e(Zt,$c),e($c,ti),e(ti,cw),e(tt,pw),e(tt,Lt),$(si,Lt,null),e(Lt,hw),e(Lt,so),e(so,mw),e(so,yc),e(yc,uw),e(so,fw),e(so,Fc),e(Fc,gw),e(so,_w),e(Lt,bw),$($n,Lt,null),e(Lt,kw),$(yn,Lt,null),_(n,wh,b),_(n,oo,b),e(oo,Fn),e(Fn,Dc),$(oi,Dc,null),e(oo,vw),e(oo,Bc),e(Bc,ww),_(n,Th,b),_(n,st,b),$(ni,st,null),e(st,Tw),e(st,Ec),e(Ec,$w),e(st,yw),e(st,ri),e(ri,Fw),e(ri,yl),e(yl,Dw),e(ri,Bw),e(st,Ew),e(st,ai),e(ai,xw),e(ai,ii),e(ii,Mw),e(ai,jw),e(st,zw),e(st,xc),e(xc,Cw),e(st,Pw),e(st,es),e(es,Mc),e(Mc,li),e(li,qw),e(es,Aw),e(es,jc),e(jc,di),e(di,Ow),e(es,Nw),e(es,zc),e(zc,ci),e(ci,Iw),e(es,Lw),e(es,Cc),e(Cc,pi),e(pi,Sw),e(st,Ww),e(st,St),$(hi,St,null),e(St,Qw),e(St,no),e(no,Rw),e(no,Pc),e(Pc,Uw),e(no,Kw),e(no,qc),e(qc,Hw),e(no,Vw),e(St,Jw),$(Dn,St,null),e(St,Gw),$(Bn,St,null),_(n,$h,b),_(n,ro,b),e(ro,En),e(En,Ac),$(mi,Ac,null),e(ro,Xw),e(ro,Oc),e(Oc,Yw),_(n,yh,b),_(n,ot,b),$(ui,ot,null),e(ot,Zw),e(ot,Nc),e(Nc,eT),e(ot,tT),e(ot,fi),e(fi,sT),e(fi,Fl),e(Fl,oT),e(fi,nT),e(ot,rT),e(ot,gi),e(gi,aT),e(gi,_i),e(_i,iT),e(gi,lT),e(ot,dT),e(ot,Ic),e(Ic,cT),e(ot,pT),e(ot,ts),e(ts,Lc),e(Lc,bi),e(bi,hT),e(ts,mT),e(ts,Sc),e(Sc,ki),e(ki,uT),e(ts,fT),e(ts,Wc),e(Wc,vi),e(vi,gT),e(ts,_T),e(ts,Qc),e(Qc,wi),e(wi,bT),e(ot,kT),e(ot,Wt),$(Ti,Wt,null),e(Wt,vT),e(Wt,ao),e(ao,wT),e(ao,Rc),e(Rc,TT),e(ao,$T),e(ao,Uc),e(Uc,yT),e(ao,FT),e(Wt,DT),$(xn,Wt,null),e(Wt,BT),$(Mn,Wt,null),_(n,Fh,b),_(n,io,b),e(io,jn),e(jn,Kc),$($i,Kc,null),e(io,ET),e(io,Hc),e(Hc,xT),_(n,Dh,b),_(n,nt,b),$(yi,nt,null),e(nt,MT),e(nt,lo),e(lo,jT),e(lo,Vc),e(Vc,zT),e(lo,CT),e(lo,Jc),e(Jc,PT),e(lo,qT),e(nt,AT),e(nt,Fi),e(Fi,OT),e(Fi,Dl),e(Dl,NT),e(Fi,IT),e(nt,LT),e(nt,Di),e(Di,ST),e(Di,Bi),e(Bi,WT),e(Di,QT),e(nt,RT),e(nt,Gc),e(Gc,UT),e(nt,KT),e(nt,ss),e(ss,Xc),e(Xc,Ei),e(Ei,HT),e(ss,VT),e(ss,Yc),e(Yc,xi),e(xi,JT),e(ss,GT),e(ss,Zc),e(Zc,Mi),e(Mi,XT),e(ss,YT),e(ss,ep),e(ep,ji),e(ji,ZT),e(nt,e$),e(nt,Qt),$(zi,Qt,null),e(Qt,t$),e(Qt,co),e(co,s$),e(co,tp),e(tp,o$),e(co,n$),e(co,sp),e(sp,r$),e(co,a$),e(Qt,i$),$(zn,Qt,null),e(Qt,l$),$(Cn,Qt,null),Bh=!0},p(n,[b]){const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:n}),ho.$set(Ci);const op={};b&2&&(op.$$scope={dirty:b,ctx:n}),bo.$set(op);const np={};b&2&&(np.$$scope={dirty:b,ctx:n}),ko.$set(np);const rp={};b&2&&(rp.$$scope={dirty:b,ctx:n}),wo.$set(rp);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:n}),To.$set(Pi);const ap={};b&2&&(ap.$$scope={dirty:b,ctx:n}),$o.$set(ap);const ip={};b&2&&(ip.$$scope={dirty:b,ctx:n}),Fo.$set(ip);const lp={};b&2&&(lp.$$scope={dirty:b,ctx:n}),Do.$set(lp);const os={};b&2&&(os.$$scope={dirty:b,ctx:n}),Bo.$set(os);const dp={};b&2&&(dp.$$scope={dirty:b,ctx:n}),Eo.$set(dp);const cp={};b&2&&(cp.$$scope={dirty:b,ctx:n}),xo.$set(cp);const pp={};b&2&&(pp.$$scope={dirty:b,ctx:n}),jo.$set(pp);const hp={};b&2&&(hp.$$scope={dirty:b,ctx:n}),zo.$set(hp);const mp={};b&2&&(mp.$$scope={dirty:b,ctx:n}),Po.$set(mp);const up={};b&2&&(up.$$scope={dirty:b,ctx:n}),qo.$set(up);const fp={};b&2&&(fp.$$scope={dirty:b,ctx:n}),Ao.$set(fp);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:n}),No.$set(qi);const ns={};b&2&&(ns.$$scope={dirty:b,ctx:n}),Io.$set(ns);const gp={};b&2&&(gp.$$scope={dirty:b,ctx:n}),Lo.$set(gp);const _p={};b&2&&(_p.$$scope={dirty:b,ctx:n}),Wo.$set(_p);const bp={};b&2&&(bp.$$scope={dirty:b,ctx:n}),Qo.$set(bp);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:n}),Ro.$set(Ai);const kp={};b&2&&(kp.$$scope={dirty:b,ctx:n}),Ko.$set(kp);const rs={};b&2&&(rs.$$scope={dirty:b,ctx:n}),Ho.$set(rs);const vp={};b&2&&(vp.$$scope={dirty:b,ctx:n}),Vo.$set(vp);const wp={};b&2&&(wp.$$scope={dirty:b,ctx:n}),Jo.$set(wp);const Tp={};b&2&&(Tp.$$scope={dirty:b,ctx:n}),Xo.$set(Tp);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:n}),Yo.$set(Oi);const $p={};b&2&&($p.$$scope={dirty:b,ctx:n}),Zo.$set($p);const yp={};b&2&&(yp.$$scope={dirty:b,ctx:n}),en.$set(yp);const Fp={};b&2&&(Fp.$$scope={dirty:b,ctx:n}),sn.$set(Fp);const as={};b&2&&(as.$$scope={dirty:b,ctx:n}),on.$set(as);const is={};b&2&&(is.$$scope={dirty:b,ctx:n}),nn.$set(is);const Dp={};b&2&&(Dp.$$scope={dirty:b,ctx:n}),an.$set(Dp);const Bp={};b&2&&(Bp.$$scope={dirty:b,ctx:n}),ln.$set(Bp);const Ep={};b&2&&(Ep.$$scope={dirty:b,ctx:n}),dn.$set(Ep);const po={};b&2&&(po.$$scope={dirty:b,ctx:n}),cn.$set(po);const xp={};b&2&&(xp.$$scope={dirty:b,ctx:n}),hn.$set(xp);const Mp={};b&2&&(Mp.$$scope={dirty:b,ctx:n}),mn.$set(Mp);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:n}),un.$set(Ni);const jp={};b&2&&(jp.$$scope={dirty:b,ctx:n}),fn.$set(jp);const zp={};b&2&&(zp.$$scope={dirty:b,ctx:n}),_n.$set(zp);const Cp={};b&2&&(Cp.$$scope={dirty:b,ctx:n}),bn.$set(Cp);const ls={};b&2&&(ls.$$scope={dirty:b,ctx:n}),vn.$set(ls);const Pp={};b&2&&(Pp.$$scope={dirty:b,ctx:n}),wn.$set(Pp);const Pn={};b&2&&(Pn.$$scope={dirty:b,ctx:n}),$n.$set(Pn);const qp={};b&2&&(qp.$$scope={dirty:b,ctx:n}),yn.$set(qp);const Ap={};b&2&&(Ap.$$scope={dirty:b,ctx:n}),Dn.$set(Ap);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:n}),Bn.$set(Ii);const Op={};b&2&&(Op.$$scope={dirty:b,ctx:n}),xn.$set(Op);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:n}),Mn.$set(Li);const Np={};b&2&&(Np.$$scope={dirty:b,ctx:n}),zn.$set(Np);const Ip={};b&2&&(Ip.$$scope={dirty:b,ctx:n}),Cn.$set(Ip)},i(n){Bh||(y(l.$$.fragment,n),y(B.$$.fragment,n),y(W.$$.fragment,n),y(Ie.$$.fragment,n),y(ho.$$.fragment,n),y(Zn.$$.fragment,n),y(er.$$.fragment,n),y(sr.$$.fragment,n),y(or.$$.fragment,n),y(ar.$$.fragment,n),y(ir.$$.fragment,n),y(pr.$$.fragment,n),y(bo.$$.fragment,n),y(ko.$$.fragment,n),y(hr.$$.fragment,n),y(mr.$$.fragment,n),y(br.$$.fragment,n),y(wo.$$.fragment,n),y(To.$$.fragment,n),y($o.$$.fragment,n),y(kr.$$.fragment,n),y(vr.$$.fragment,n),y(yr.$$.fragment,n),y(Fo.$$.fragment,n),y(Do.$$.fragment,n),y(Bo.$$.fragment,n),y(Eo.$$.fragment,n),y(xo.$$.fragment,n),y(Fr.$$.fragment,n),y(Dr.$$.fragment,n),y(Mr.$$.fragment,n),y(jo.$$.fragment,n),y(zo.$$.fragment,n),y(jr.$$.fragment,n),y(zr.$$.fragment,n),y(Ar.$$.fragment,n),y(Po.$$.fragment,n),y(qo.$$.fragment,n),y(Ao.$$.fragment,n),y(Or.$$.fragment,n),y(Nr.$$.fragment,n),y(Wr.$$.fragment,n),y(No.$$.fragment,n),y(Io.$$.fragment,n),y(Lo.$$.fragment,n),y(Qr.$$.fragment,n),y(Rr.$$.fragment,n),y(Wo.$$.fragment,n),y(Vr.$$.fragment,n),y(Qo.$$.fragment,n),y(Ro.$$.fragment,n),y(Jr.$$.fragment,n),y(Gr.$$.fragment,n),y(Ko.$$.fragment,n),y(ta.$$.fragment,n),y(Ho.$$.fragment,n),y(Vo.$$.fragment,n),y(Jo.$$.fragment,n),y(sa.$$.fragment,n),y(oa.$$.fragment,n),y(Xo.$$.fragment,n),y(ia.$$.fragment,n),y(Yo.$$.fragment,n),y(Zo.$$.fragment,n),y(en.$$.fragment,n),y(la.$$.fragment,n),y(da.$$.fragment,n),y(sn.$$.fragment,n),y(ma.$$.fragment,n),y(on.$$.fragment,n),y(nn.$$.fragment,n),y(ua.$$.fragment,n),y(fa.$$.fragment,n),y(an.$$.fragment,n),y(ka.$$.fragment,n),y(ln.$$.fragment,n),y(dn.$$.fragment,n),y(cn.$$.fragment,n),y(va.$$.fragment,n),y(wa.$$.fragment,n),y(hn.$$.fragment,n),y(Fa.$$.fragment,n),y(mn.$$.fragment,n),y(un.$$.fragment,n),y(fn.$$.fragment,n),y(Da.$$.fragment,n),y(Ba.$$.fragment,n),y(qa.$$.fragment,n),y(_n.$$.fragment,n),y(bn.$$.fragment,n),y(Aa.$$.fragment,n),y(Oa.$$.fragment,n),y(Ka.$$.fragment,n),y(vn.$$.fragment,n),y(wn.$$.fragment,n),y(Ha.$$.fragment,n),y(Va.$$.fragment,n),y(si.$$.fragment,n),y($n.$$.fragment,n),y(yn.$$.fragment,n),y(oi.$$.fragment,n),y(ni.$$.fragment,n),y(hi.$$.fragment,n),y(Dn.$$.fragment,n),y(Bn.$$.fragment,n),y(mi.$$.fragment,n),y(ui.$$.fragment,n),y(Ti.$$.fragment,n),y(xn.$$.fragment,n),y(Mn.$$.fragment,n),y($i.$$.fragment,n),y(yi.$$.fragment,n),y(zi.$$.fragment,n),y(zn.$$.fragment,n),y(Cn.$$.fragment,n),Bh=!0)},o(n){F(l.$$.fragment,n),F(B.$$.fragment,n),F(W.$$.fragment,n),F(Ie.$$.fragment,n),F(ho.$$.fragment,n),F(Zn.$$.fragment,n),F(er.$$.fragment,n),F(sr.$$.fragment,n),F(or.$$.fragment,n),F(ar.$$.fragment,n),F(ir.$$.fragment,n),F(pr.$$.fragment,n),F(bo.$$.fragment,n),F(ko.$$.fragment,n),F(hr.$$.fragment,n),F(mr.$$.fragment,n),F(br.$$.fragment,n),F(wo.$$.fragment,n),F(To.$$.fragment,n),F($o.$$.fragment,n),F(kr.$$.fragment,n),F(vr.$$.fragment,n),F(yr.$$.fragment,n),F(Fo.$$.fragment,n),F(Do.$$.fragment,n),F(Bo.$$.fragment,n),F(Eo.$$.fragment,n),F(xo.$$.fragment,n),F(Fr.$$.fragment,n),F(Dr.$$.fragment,n),F(Mr.$$.fragment,n),F(jo.$$.fragment,n),F(zo.$$.fragment,n),F(jr.$$.fragment,n),F(zr.$$.fragment,n),F(Ar.$$.fragment,n),F(Po.$$.fragment,n),F(qo.$$.fragment,n),F(Ao.$$.fragment,n),F(Or.$$.fragment,n),F(Nr.$$.fragment,n),F(Wr.$$.fragment,n),F(No.$$.fragment,n),F(Io.$$.fragment,n),F(Lo.$$.fragment,n),F(Qr.$$.fragment,n),F(Rr.$$.fragment,n),F(Wo.$$.fragment,n),F(Vr.$$.fragment,n),F(Qo.$$.fragment,n),F(Ro.$$.fragment,n),F(Jr.$$.fragment,n),F(Gr.$$.fragment,n),F(Ko.$$.fragment,n),F(ta.$$.fragment,n),F(Ho.$$.fragment,n),F(Vo.$$.fragment,n),F(Jo.$$.fragment,n),F(sa.$$.fragment,n),F(oa.$$.fragment,n),F(Xo.$$.fragment,n),F(ia.$$.fragment,n),F(Yo.$$.fragment,n),F(Zo.$$.fragment,n),F(en.$$.fragment,n),F(la.$$.fragment,n),F(da.$$.fragment,n),F(sn.$$.fragment,n),F(ma.$$.fragment,n),F(on.$$.fragment,n),F(nn.$$.fragment,n),F(ua.$$.fragment,n),F(fa.$$.fragment,n),F(an.$$.fragment,n),F(ka.$$.fragment,n),F(ln.$$.fragment,n),F(dn.$$.fragment,n),F(cn.$$.fragment,n),F(va.$$.fragment,n),F(wa.$$.fragment,n),F(hn.$$.fragment,n),F(Fa.$$.fragment,n),F(mn.$$.fragment,n),F(un.$$.fragment,n),F(fn.$$.fragment,n),F(Da.$$.fragment,n),F(Ba.$$.fragment,n),F(qa.$$.fragment,n),F(_n.$$.fragment,n),F(bn.$$.fragment,n),F(Aa.$$.fragment,n),F(Oa.$$.fragment,n),F(Ka.$$.fragment,n),F(vn.$$.fragment,n),F(wn.$$.fragment,n),F(Ha.$$.fragment,n),F(Va.$$.fragment,n),F(si.$$.fragment,n),F($n.$$.fragment,n),F(yn.$$.fragment,n),F(oi.$$.fragment,n),F(ni.$$.fragment,n),F(hi.$$.fragment,n),F(Dn.$$.fragment,n),F(Bn.$$.fragment,n),F(mi.$$.fragment,n),F(ui.$$.fragment,n),F(Ti.$$.fragment,n),F(xn.$$.fragment,n),F(Mn.$$.fragment,n),F($i.$$.fragment,n),F(yi.$$.fragment,n),F(zi.$$.fragment,n),F(zn.$$.fragment,n),F(Cn.$$.fragment,n),Bh=!1},d(n){t(d),n&&t(g),n&&t(c),D(l),n&&t(ge),n&&t(I),D(B),n&&t(_e),n&&t(O),n&&t(be),n&&t(te),n&&t(q),n&&t(le),n&&t(ke),n&&t(R),n&&t(ve),n&&t(C),n&&t(v),n&&t(x),n&&t(N),n&&t(S),D(W),n&&t(Re),n&&t(Q),D(Ie),D(ho),n&&t(Sp),n&&t($s),D(Zn),n&&t(Wp),n&&t(zt),D(er),n&&t(Qp),n&&t(ys),D(sr),n&&t(Rp),n&&t(Ct),D(or),n&&t(Up),n&&t(Fs),D(ar),n&&t(Kp),n&&t(ht),D(ir),D(pr),D(bo),D(ko),n&&t(Hp),n&&t(Bs),D(hr),n&&t(Vp),n&&t(mt),D(mr),D(br),D(wo),D(To),D($o),n&&t(Jp),n&&t(xs),D(kr),n&&t(Gp),n&&t(ut),D(vr),D(yr),D(Fo),D(Do),D(Bo),D(Eo),D(xo),n&&t(Xp),n&&t(js),D(Fr),n&&t(Yp),n&&t(ft),D(Dr),D(Mr),D(jo),D(zo),n&&t(Zp),n&&t(Cs),D(jr),n&&t(eh),n&&t(gt),D(zr),D(Ar),D(Po),D(qo),D(Ao),n&&t(th),n&&t(qs),D(Or),n&&t(sh),n&&t(_t),D(Nr),D(Wr),D(No),D(Io),D(Lo),n&&t(oh),n&&t(Ns),D(Qr),n&&t(nh),n&&t(at),D(Rr),D(Wo),D(Vr),D(Qo),D(Ro),n&&t(rh),n&&t(Ls),D(Jr),n&&t(ah),n&&t(it),D(Gr),D(Ko),D(ta),D(Ho),D(Vo),D(Jo),n&&t(ih),n&&t(Ws),D(sa),n&&t(lh),n&&t(lt),D(oa),D(Xo),D(ia),D(Yo),D(Zo),D(en),n&&t(dh),n&&t(Rs),D(la),n&&t(ch),n&&t(dt),D(da),D(sn),D(ma),D(on),D(nn),n&&t(ph),n&&t(Ks),D(ua),n&&t(hh),n&&t(ct),D(fa),D(an),D(ka),D(ln),D(dn),D(cn),n&&t(mh),n&&t(Vs),D(va),n&&t(uh),n&&t(pt),D(wa),D(hn),D(Fa),D(mn),D(un),D(fn),n&&t(fh),n&&t(Xs),D(Da),n&&t(gh),n&&t(Ze),D(Ba),D(qa),D(_n),D(bn),n&&t(_h),n&&t(Zs),D(Aa),n&&t(bh),n&&t(et),D(Oa),D(Ka),D(vn),D(wn),n&&t(kh),n&&t(to),D(Ha),n&&t(vh),n&&t(tt),D(Va),D(si),D($n),D(yn),n&&t(wh),n&&t(oo),D(oi),n&&t(Th),n&&t(st),D(ni),D(hi),D(Dn),D(Bn),n&&t($h),n&&t(ro),D(mi),n&&t(yh),n&&t(ot),D(ui),D(Ti),D(xn),D(Mn),n&&t(Fh),n&&t(io),D($i),n&&t(Dh),n&&t(nt),D(yi),D(zi),D(zn),D(Cn)}}}const nD={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rD(E){return oF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hD extends Z2{constructor(d){super();eF(this,d,rD,oD,tF,{})}}export{hD as default,nD as metadata};
