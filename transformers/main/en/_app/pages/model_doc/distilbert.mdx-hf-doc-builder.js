import{S as Z2,i as eD,s as tD,e as o,k as p,w as T,t as a,M as sD,c as n,d as t,m as h,a as r,x as $,h as i,b as f,G as e,g as b,y as w,q as y,o as D,B as F,v as oD,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as be}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=o("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Examples:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function rD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function aD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function iD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function lD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function dD(B){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function pD(B){let d,g,c,m,_;return m=new ie({props:{code:`import torch
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
`}}),{c(){d=o("p"),g=a("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example of single-label classification:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function hD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function mD(B){let d,g,c,m,_;return m=new ie({props:{code:`import torch
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
`}}),{c(){d=o("p"),g=a("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function uD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function fD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function gD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Examples:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function _D(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function bD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function vD(B){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function kD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function TD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function $D(B){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);se=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);oe=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function yD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function DD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function FD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);se=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);oe=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function BD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function xD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function MD(B){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ED(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);se=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);oe=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function zD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function jD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function CD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function qD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);se=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);oe=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function PD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function AD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function OD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);se=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);oe=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function ND(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function LD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function SD(B){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ID(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);se=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);oe=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function WD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function QD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function RD(B){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function UD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function HD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function VD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function KD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function JD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function GD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function XD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function YD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function ZD(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function eF(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function tF(B){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function sF(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function oF(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe,k,M,J,ve,$e,O,ke,we,ye,C,U,De,Fe,Z,Be,ne,xe,wm,xp,pt,ym,jn,Dm,Fm,Cn,Bm,xm,qn,Mm,Em,Mp,es,Rs,Cl,Pn,zm,ql,jm,Ep,lt,An,Cm,xt,qm,Fi,Pm,Am,Bi,Om,Nm,On,Lm,Sm,Im,ts,Wm,xi,Qm,Rm,Mi,Um,Hm,Vm,Us,zp,ss,Hs,Pl,Nn,Km,Al,Jm,jp,dt,Ln,Gm,Ol,Xm,Ym,Vs,Ei,Zm,eu,zi,tu,su,ou,Sn,nu,ji,ru,au,Cp,os,Ks,Nl,In,iu,Ll,lu,qp,ct,Wn,du,Qn,cu,Sl,pu,hu,mu,Js,Ci,uu,fu,qi,gu,_u,bu,Rn,vu,Pi,ku,Tu,Pp,ns,Gs,Il,Un,$u,Wl,wu,Ap,We,Hn,yu,Ql,Du,Fu,Vn,Bu,Ai,xu,Mu,Eu,Kn,zu,Jn,ju,Cu,qu,ht,Gn,Pu,rs,Au,Oi,Ou,Nu,Rl,Lu,Su,Iu,Xs,Wu,Ys,Op,as,Zs,Ul,Xn,Qu,Hl,Ru,Np,Qe,Yn,Uu,Zn,Hu,Vl,Vu,Ku,Ju,er,Gu,Ni,Xu,Yu,Zu,tr,ef,sr,tf,sf,of,Ke,or,nf,is,rf,Li,af,lf,Kl,df,cf,pf,eo,hf,to,mf,so,Lp,ls,oo,Jl,nr,uf,Gl,ff,Sp,Re,rr,gf,Xl,_f,bf,ar,vf,Si,kf,Tf,$f,ir,wf,lr,yf,Df,Ff,Pe,dr,Bf,ds,xf,Ii,Mf,Ef,Yl,zf,jf,Cf,no,qf,ro,Pf,ao,Af,io,Of,lo,Ip,cs,co,Zl,cr,Nf,ed,Lf,Wp,Ue,pr,Sf,td,If,Wf,hr,Qf,Wi,Rf,Uf,Hf,mr,Vf,ur,Kf,Jf,Gf,mt,fr,Xf,ps,Yf,Qi,Zf,eg,sd,tg,sg,og,po,ng,ho,Qp,hs,mo,od,gr,rg,nd,ag,Rp,He,_r,ig,rd,lg,dg,br,cg,Ri,pg,hg,mg,vr,ug,kr,fg,gg,_g,Je,Tr,bg,ms,vg,Ui,kg,Tg,ad,$g,wg,yg,uo,Dg,fo,Fg,go,Up,us,_o,id,$r,Bg,ld,xg,Hp,Ve,wr,Mg,fs,Eg,dd,zg,jg,cd,Cg,qg,Pg,yr,Ag,Hi,Og,Ng,Lg,Dr,Sg,Fr,Ig,Wg,Qg,Ge,Br,Rg,gs,Ug,Vi,Hg,Vg,pd,Kg,Jg,Gg,bo,Xg,vo,Yg,ko,Vp,_s,To,hd,xr,Zg,md,e_,Kp,Ae,Mr,t_,ud,s_,o_,Er,n_,Ki,r_,a_,i_,zr,l_,jr,d_,c_,p_,$o,h_,ut,Cr,m_,bs,u_,Ji,f_,g_,fd,__,b_,v_,wo,k_,yo,Jp,vs,Do,gd,qr,T_,_d,$_,Gp,Oe,Pr,w_,Ar,y_,bd,D_,F_,B_,Or,x_,Gi,M_,E_,z_,Nr,j_,Lr,C_,q_,P_,Fo,A_,Xe,Sr,O_,ks,N_,Xi,L_,S_,vd,I_,W_,Q_,Bo,R_,xo,U_,Mo,Xp,Ts,Eo,kd,Ir,H_,Td,V_,Yp,Ne,Wr,K_,$d,J_,G_,Qr,X_,Yi,Y_,Z_,eb,Rr,tb,Ur,sb,ob,nb,zo,rb,Ye,Hr,ab,$s,ib,Zi,lb,db,wd,cb,pb,hb,jo,mb,Co,ub,qo,Zp,ws,Po,yd,Vr,fb,Dd,gb,eh,Le,Kr,_b,Fd,bb,vb,Jr,kb,el,Tb,$b,wb,Gr,yb,Xr,Db,Fb,Bb,Ao,xb,ft,Yr,Mb,ys,Eb,tl,zb,jb,Bd,Cb,qb,Pb,Oo,Ab,No,th,Ds,Lo,xd,Zr,Ob,Md,Nb,sh,Se,ea,Lb,Ed,Sb,Ib,ta,Wb,sl,Qb,Rb,Ub,sa,Hb,oa,Vb,Kb,Jb,So,Gb,Ze,na,Xb,Fs,Yb,ol,Zb,ev,zd,tv,sv,ov,Io,nv,Wo,rv,Qo,oh,Bs,Ro,jd,ra,av,Cd,iv,nh,Ie,aa,lv,xs,dv,qd,cv,pv,Pd,hv,mv,uv,ia,fv,nl,gv,_v,bv,la,vv,da,kv,Tv,$v,Uo,wv,et,ca,yv,Ms,Dv,rl,Fv,Bv,Ad,xv,Mv,Ev,Ho,zv,Vo,jv,Ko,rh,Es,Jo,Od,pa,Cv,Nd,qv,ah,Me,ha,Pv,Ld,Av,Ov,ma,Nv,al,Lv,Sv,Iv,ua,Wv,fa,Qv,Rv,Uv,Sd,Hv,Vv,Mt,Id,ga,Kv,Jv,Wd,_a,Gv,Xv,Qd,ba,Yv,Zv,Rd,va,ek,tk,gt,ka,sk,zs,ok,Ud,nk,rk,Hd,ak,ik,lk,Go,dk,Xo,ih,js,Yo,Vd,Ta,ck,Kd,pk,lh,Ee,$a,hk,wa,mk,Jd,uk,fk,gk,ya,_k,il,bk,vk,kk,Da,Tk,Fa,$k,wk,yk,Gd,Dk,Fk,Et,Xd,Ba,Bk,xk,Yd,xa,Mk,Ek,Zd,Ma,zk,jk,ec,Ea,Ck,qk,_t,za,Pk,Cs,Ak,tc,Ok,Nk,sc,Lk,Sk,Ik,Zo,Wk,en,dh,qs,tn,oc,ja,Qk,nc,Rk,ch,ze,Ca,Uk,rc,Hk,Vk,qa,Kk,ll,Jk,Gk,Xk,Pa,Yk,Aa,Zk,eT,tT,ac,sT,oT,zt,ic,Oa,nT,rT,lc,Na,aT,iT,dc,La,lT,dT,cc,Sa,cT,pT,bt,Ia,hT,Ps,mT,pc,uT,fT,hc,gT,_T,bT,sn,vT,on,ph,As,nn,mc,Wa,kT,uc,TT,hh,je,Qa,$T,fc,wT,yT,Ra,DT,dl,FT,BT,xT,Ua,MT,Ha,ET,zT,jT,gc,CT,qT,jt,_c,Va,PT,AT,bc,Ka,OT,NT,vc,Ja,LT,ST,kc,Ga,IT,WT,vt,Xa,QT,Os,RT,Tc,UT,HT,$c,VT,KT,JT,rn,GT,an,mh,Ns,ln,wc,Ya,XT,yc,YT,uh,Ce,Za,ZT,Dc,e$,t$,ei,s$,cl,o$,n$,r$,ti,a$,si,i$,l$,d$,Fc,c$,p$,Ct,Bc,oi,h$,m$,xc,ni,u$,f$,Mc,ri,g$,_$,Ec,ai,b$,v$,kt,ii,k$,Ls,T$,zc,$$,w$,jc,y$,D$,F$,dn,B$,cn,fh,Ss,pn,Cc,li,x$,qc,M$,gh,qe,di,E$,Is,z$,Pc,j$,C$,Ac,q$,P$,A$,ci,O$,pl,N$,L$,S$,pi,I$,hi,W$,Q$,R$,Oc,U$,H$,qt,Nc,mi,V$,K$,Lc,ui,J$,G$,Sc,fi,X$,Y$,Ic,gi,Z$,ew,Tt,_i,tw,Ws,sw,Wc,ow,nw,Qc,rw,aw,iw,hn,lw,mn,_h;return l=new Te({}),X=new Te({}),Pn=new Te({}),An=new H({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L45"}}),Us=new re({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nD]},$$scope:{ctx:B}}}),Nn=new Te({}),Ln=new H({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L62"}}),In=new Te({}),Wn=new H({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L79"}}),Un=new Te({}),Hn=new H({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L453"}}),Gn=new H({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Xs=new be({props:{$$slots:{default:[rD]},$$scope:{ctx:B}}}),Ys=new re({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aD]},$$scope:{ctx:B}}}),Xn=new Te({}),Yn=new H({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L581"}}),or=new H({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),eo=new be({props:{$$slots:{default:[iD]},$$scope:{ctx:B}}}),to=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lD]},$$scope:{ctx:B}}}),so=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dD]},$$scope:{ctx:B}}}),nr=new Te({}),rr=new H({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L687"}}),dr=new H({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),no=new be({props:{$$slots:{default:[cD]},$$scope:{ctx:B}}}),ro=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pD]},$$scope:{ctx:B}}}),ao=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hD]},$$scope:{ctx:B}}}),io=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[mD]},$$scope:{ctx:B}}}),lo=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[uD]},$$scope:{ctx:B}}}),cr=new Te({}),pr=new H({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1017"}}),fr=new H({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),po=new be({props:{$$slots:{default:[fD]},$$scope:{ctx:B}}}),ho=new re({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gD]},$$scope:{ctx:B}}}),gr=new Te({}),_r=new H({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L922"}}),Tr=new H({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),uo=new be({props:{$$slots:{default:[_D]},$$scope:{ctx:B}}}),fo=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[bD]},$$scope:{ctx:B}}}),go=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[vD]},$$scope:{ctx:B}}}),$r=new Te({}),wr=new H({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L805"}}),Br=new H({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),bo=new be({props:{$$slots:{default:[kD]},$$scope:{ctx:B}}}),vo=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[TD]},$$scope:{ctx:B}}}),ko=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[$D]},$$scope:{ctx:B}}}),xr=new Te({}),Mr=new H({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L522"}}),$o=new be({props:{$$slots:{default:[wD]},$$scope:{ctx:B}}}),Cr=new H({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527",returnDescription:`
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
`}}),wo=new be({props:{$$slots:{default:[yD]},$$scope:{ctx:B}}}),yo=new re({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[DD]},$$scope:{ctx:B}}}),qr=new Te({}),Pr=new H({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L609"}}),Fo=new be({props:{$$slots:{default:[FD]},$$scope:{ctx:B}}}),Sr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L629",returnDescription:`
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
`}}),Bo=new be({props:{$$slots:{default:[BD]},$$scope:{ctx:B}}}),xo=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[xD]},$$scope:{ctx:B}}}),Mo=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[MD]},$$scope:{ctx:B}}}),Ir=new Te({}),Wr=new H({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L699"}}),zo=new be({props:{$$slots:{default:[ED]},$$scope:{ctx:B}}}),Hr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L716",returnDescription:`
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
`}}),jo=new be({props:{$$slots:{default:[zD]},$$scope:{ctx:B}}}),Co=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[jD]},$$scope:{ctx:B}}}),qo=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[CD]},$$scope:{ctx:B}}}),Vr=new Te({}),Kr=new H({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L862"}}),Ao=new be({props:{$$slots:{default:[qD]},$$scope:{ctx:B}}}),Yr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L888",returnDescription:`
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
`}}),Oo=new be({props:{$$slots:{default:[PD]},$$scope:{ctx:B}}}),No=new re({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AD]},$$scope:{ctx:B}}}),Zr=new Te({}),ea=new H({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L786"}}),So=new be({props:{$$slots:{default:[OD]},$$scope:{ctx:B}}}),na=new H({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L797",returnDescription:`
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
`}}),Io=new be({props:{$$slots:{default:[ND]},$$scope:{ctx:B}}}),Wo=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[LD]},$$scope:{ctx:B}}}),Qo=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[SD]},$$scope:{ctx:B}}}),ra=new Te({}),aa=new H({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L987"}}),Uo=new be({props:{$$slots:{default:[ID]},$$scope:{ctx:B}}}),ca=new H({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L998",returnDescription:`
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
`}}),Ho=new be({props:{$$slots:{default:[WD]},$$scope:{ctx:B}}}),Vo=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QD]},$$scope:{ctx:B}}}),Ko=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RD]},$$scope:{ctx:B}}}),pa=new Te({}),ha=new H({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),ka=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),Go=new be({props:{$$slots:{default:[UD]},$$scope:{ctx:B}}}),Xo=new re({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[HD]},$$scope:{ctx:B}}}),Ta=new Te({}),$a=new H({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),za=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Zo=new be({props:{$$slots:{default:[VD]},$$scope:{ctx:B}}}),en=new re({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[KD]},$$scope:{ctx:B}}}),ja=new Te({}),Ca=new H({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),Ia=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),sn=new be({props:{$$slots:{default:[JD]},$$scope:{ctx:B}}}),on=new re({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GD]},$$scope:{ctx:B}}}),Wa=new Te({}),Qa=new H({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),Xa=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),rn=new be({props:{$$slots:{default:[XD]},$$scope:{ctx:B}}}),an=new re({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YD]},$$scope:{ctx:B}}}),Ya=new Te({}),Za=new H({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),ii=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),dn=new be({props:{$$slots:{default:[ZD]},$$scope:{ctx:B}}}),cn=new re({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:B}}}),li=new Te({}),di=new H({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),_i=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),hn=new be({props:{$$slots:{default:[tF]},$$scope:{ctx:B}}}),mn=new re({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[sF]},$$scope:{ctx:B}}}),{c(){d=o("meta"),g=p(),c=o("h1"),m=o("a"),_=o("span"),T(l.$$.fragment),u=p(),x=o("span"),he=a("DistilBERT"),V=p(),E=o("h2"),G=o("a"),S=o("span"),T(X.$$.fragment),me=p(),I=o("span"),ue=a("Overview"),le=p(),N=o("p"),P=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),K=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),z=a(", and the paper "),j=o("a"),fe=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),ge=a("bert-base-uncased"),Q=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),de=p(),ee=o("p"),A=a("The abstract from the paper is the following:"),ce=p(),L=o("p"),oe=o("em"),_e=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),q=p(),te=o("p"),R=a("Tips:"),pe=p(),k=o("ul"),M=o("li"),J=a("DistilBERT doesn\u2019t have "),ve=o("code"),$e=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ke=o("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=o("code"),U=a("[SEP]"),De=a(")."),Fe=p(),Z=o("li"),Be=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),xe=a("position_ids"),wm=a(` input). This could be added if
necessary though, just let us know if you need this option.`),xp=p(),pt=o("p"),ym=a("This model was contributed by "),jn=o("a"),Dm=a("victorsanh"),Fm=a(`. This model jax version was
contributed by `),Cn=o("a"),Bm=a("kamalkraj"),xm=a(". The original code can be found "),qn=o("a"),Mm=a("here"),Em=a("."),Mp=p(),es=o("h2"),Rs=o("a"),Cl=o("span"),T(Pn.$$.fragment),zm=p(),ql=o("span"),jm=a("DistilBertConfig"),Ep=p(),lt=o("div"),T(An.$$.fragment),Cm=p(),xt=o("p"),qm=a("This is the configuration class to store the configuration of a "),Fi=o("a"),Pm=a("DistilBertModel"),Am=a(" or a "),Bi=o("a"),Om=a("TFDistilBertModel"),Nm=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=o("a"),Lm=a("distilbert-base-uncased"),Sm=a(" architecture."),Im=p(),ts=o("p"),Wm=a("Configuration objects inherit from "),xi=o("a"),Qm=a("PretrainedConfig"),Rm=a(` and can be used to control the model outputs. Read the
documentation from `),Mi=o("a"),Um=a("PretrainedConfig"),Hm=a(" for more information."),Vm=p(),T(Us.$$.fragment),zp=p(),ss=o("h2"),Hs=o("a"),Pl=o("span"),T(Nn.$$.fragment),Km=p(),Al=o("span"),Jm=a("DistilBertTokenizer"),jp=p(),dt=o("div"),T(Ln.$$.fragment),Gm=p(),Ol=o("p"),Xm=a("Construct a DistilBERT tokenizer."),Ym=p(),Vs=o("p"),Ei=o("a"),Zm=a("DistilBertTokenizer"),eu=a(" is identical to "),zi=o("a"),tu=a("BertTokenizer"),su=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),ou=p(),Sn=o("p"),nu=a("Refer to superclass "),ji=o("a"),ru=a("BertTokenizer"),au=a(" for usage examples and documentation concerning parameters."),Cp=p(),os=o("h2"),Ks=o("a"),Nl=o("span"),T(In.$$.fragment),iu=p(),Ll=o("span"),lu=a("DistilBertTokenizerFast"),qp=p(),ct=o("div"),T(Wn.$$.fragment),du=p(),Qn=o("p"),cu=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=o("em"),pu=a("tokenizers"),hu=a(" library)."),mu=p(),Js=o("p"),Ci=o("a"),uu=a("DistilBertTokenizerFast"),fu=a(" is identical to "),qi=o("a"),gu=a("BertTokenizerFast"),_u=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bu=p(),Rn=o("p"),vu=a("Refer to superclass "),Pi=o("a"),ku=a("BertTokenizerFast"),Tu=a(" for usage examples and documentation concerning parameters."),Pp=p(),ns=o("h2"),Gs=o("a"),Il=o("span"),T(Un.$$.fragment),$u=p(),Wl=o("span"),wu=a("DistilBertModel"),Ap=p(),We=o("div"),T(Hn.$$.fragment),yu=p(),Ql=o("p"),Du=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Fu=p(),Vn=o("p"),Bu=a("This model inherits from "),Ai=o("a"),xu=a("PreTrainedModel"),Mu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=p(),Kn=o("p"),zu=a("This model is also a PyTorch "),Jn=o("a"),ju=a("torch.nn.Module"),Cu=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qu=p(),ht=o("div"),T(Gn.$$.fragment),Pu=p(),rs=o("p"),Au=a("The "),Oi=o("a"),Ou=a("DistilBertModel"),Nu=a(" forward method, overrides the "),Rl=o("code"),Lu=a("__call__"),Su=a(" special method."),Iu=p(),T(Xs.$$.fragment),Wu=p(),T(Ys.$$.fragment),Op=p(),as=o("h2"),Zs=o("a"),Ul=o("span"),T(Xn.$$.fragment),Qu=p(),Hl=o("span"),Ru=a("DistilBertForMaskedLM"),Np=p(),Qe=o("div"),T(Yn.$$.fragment),Uu=p(),Zn=o("p"),Hu=a("DistilBert Model with a "),Vl=o("code"),Vu=a("masked language modeling"),Ku=a(" head on top."),Ju=p(),er=o("p"),Gu=a("This model inherits from "),Ni=o("a"),Xu=a("PreTrainedModel"),Yu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu=p(),tr=o("p"),ef=a("This model is also a PyTorch "),sr=o("a"),tf=a("torch.nn.Module"),sf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of=p(),Ke=o("div"),T(or.$$.fragment),nf=p(),is=o("p"),rf=a("The "),Li=o("a"),af=a("DistilBertForMaskedLM"),lf=a(" forward method, overrides the "),Kl=o("code"),df=a("__call__"),cf=a(" special method."),pf=p(),T(eo.$$.fragment),hf=p(),T(to.$$.fragment),mf=p(),T(so.$$.fragment),Lp=p(),ls=o("h2"),oo=o("a"),Jl=o("span"),T(nr.$$.fragment),uf=p(),Gl=o("span"),ff=a("DistilBertForSequenceClassification"),Sp=p(),Re=o("div"),T(rr.$$.fragment),gf=p(),Xl=o("p"),_f=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=p(),ar=o("p"),vf=a("This model inherits from "),Si=o("a"),kf=a("PreTrainedModel"),Tf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=p(),ir=o("p"),wf=a("This model is also a PyTorch "),lr=o("a"),yf=a("torch.nn.Module"),Df=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff=p(),Pe=o("div"),T(dr.$$.fragment),Bf=p(),ds=o("p"),xf=a("The "),Ii=o("a"),Mf=a("DistilBertForSequenceClassification"),Ef=a(" forward method, overrides the "),Yl=o("code"),zf=a("__call__"),jf=a(" special method."),Cf=p(),T(no.$$.fragment),qf=p(),T(ro.$$.fragment),Pf=p(),T(ao.$$.fragment),Af=p(),T(io.$$.fragment),Of=p(),T(lo.$$.fragment),Ip=p(),cs=o("h2"),co=o("a"),Zl=o("span"),T(cr.$$.fragment),Nf=p(),ed=o("span"),Lf=a("DistilBertForMultipleChoice"),Wp=p(),Ue=o("div"),T(pr.$$.fragment),Sf=p(),td=o("p"),If=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wf=p(),hr=o("p"),Qf=a("This model inherits from "),Wi=o("a"),Rf=a("PreTrainedModel"),Uf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf=p(),mr=o("p"),Vf=a("This model is also a PyTorch "),ur=o("a"),Kf=a("torch.nn.Module"),Jf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=p(),mt=o("div"),T(fr.$$.fragment),Xf=p(),ps=o("p"),Yf=a("The "),Qi=o("a"),Zf=a("DistilBertForMultipleChoice"),eg=a(" forward method, overrides the "),sd=o("code"),tg=a("__call__"),sg=a(" special method."),og=p(),T(po.$$.fragment),ng=p(),T(ho.$$.fragment),Qp=p(),hs=o("h2"),mo=o("a"),od=o("span"),T(gr.$$.fragment),rg=p(),nd=o("span"),ag=a("DistilBertForTokenClassification"),Rp=p(),He=o("div"),T(_r.$$.fragment),ig=p(),rd=o("p"),lg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=p(),br=o("p"),cg=a("This model inherits from "),Ri=o("a"),pg=a("PreTrainedModel"),hg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg=p(),vr=o("p"),ug=a("This model is also a PyTorch "),kr=o("a"),fg=a("torch.nn.Module"),gg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=p(),Je=o("div"),T(Tr.$$.fragment),bg=p(),ms=o("p"),vg=a("The "),Ui=o("a"),kg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),ad=o("code"),$g=a("__call__"),wg=a(" special method."),yg=p(),T(uo.$$.fragment),Dg=p(),T(fo.$$.fragment),Fg=p(),T(go.$$.fragment),Up=p(),us=o("h2"),_o=o("a"),id=o("span"),T($r.$$.fragment),Bg=p(),ld=o("span"),xg=a("DistilBertForQuestionAnswering"),Hp=p(),Ve=o("div"),T(wr.$$.fragment),Mg=p(),fs=o("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=o("code"),zg=a("span start logits"),jg=a(" and "),cd=o("code"),Cg=a("span end logits"),qg=a(")."),Pg=p(),yr=o("p"),Ag=a("This model inherits from "),Hi=o("a"),Og=a("PreTrainedModel"),Ng=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=p(),Dr=o("p"),Sg=a("This model is also a PyTorch "),Fr=o("a"),Ig=a("torch.nn.Module"),Wg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=p(),Ge=o("div"),T(Br.$$.fragment),Rg=p(),gs=o("p"),Ug=a("The "),Vi=o("a"),Hg=a("DistilBertForQuestionAnswering"),Vg=a(" forward method, overrides the "),pd=o("code"),Kg=a("__call__"),Jg=a(" special method."),Gg=p(),T(bo.$$.fragment),Xg=p(),T(vo.$$.fragment),Yg=p(),T(ko.$$.fragment),Vp=p(),_s=o("h2"),To=o("a"),hd=o("span"),T(xr.$$.fragment),Zg=p(),md=o("span"),e_=a("TFDistilBertModel"),Kp=p(),Ae=o("div"),T(Mr.$$.fragment),t_=p(),ud=o("p"),s_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),o_=p(),Er=o("p"),n_=a("This model inherits from "),Ki=o("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=p(),zr=o("p"),l_=a("This model is also a "),jr=o("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=p(),T($o.$$.fragment),h_=p(),ut=o("div"),T(Cr.$$.fragment),m_=p(),bs=o("p"),u_=a("The "),Ji=o("a"),f_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),fd=o("code"),__=a("__call__"),b_=a(" special method."),v_=p(),T(wo.$$.fragment),k_=p(),T(yo.$$.fragment),Jp=p(),vs=o("h2"),Do=o("a"),gd=o("span"),T(qr.$$.fragment),T_=p(),_d=o("span"),$_=a("TFDistilBertForMaskedLM"),Gp=p(),Oe=o("div"),T(Pr.$$.fragment),w_=p(),Ar=o("p"),y_=a("DistilBert Model with a "),bd=o("code"),D_=a("masked language modeling"),F_=a(" head on top."),B_=p(),Or=o("p"),x_=a("This model inherits from "),Gi=o("a"),M_=a("TFPreTrainedModel"),E_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=p(),Nr=o("p"),j_=a("This model is also a "),Lr=o("a"),C_=a("tf.keras.Model"),q_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),P_=p(),T(Fo.$$.fragment),A_=p(),Xe=o("div"),T(Sr.$$.fragment),O_=p(),ks=o("p"),N_=a("The "),Xi=o("a"),L_=a("TFDistilBertForMaskedLM"),S_=a(" forward method, overrides the "),vd=o("code"),I_=a("__call__"),W_=a(" special method."),Q_=p(),T(Bo.$$.fragment),R_=p(),T(xo.$$.fragment),U_=p(),T(Mo.$$.fragment),Xp=p(),Ts=o("h2"),Eo=o("a"),kd=o("span"),T(Ir.$$.fragment),H_=p(),Td=o("span"),V_=a("TFDistilBertForSequenceClassification"),Yp=p(),Ne=o("div"),T(Wr.$$.fragment),K_=p(),$d=o("p"),J_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=p(),Qr=o("p"),X_=a("This model inherits from "),Yi=o("a"),Y_=a("TFPreTrainedModel"),Z_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=p(),Rr=o("p"),tb=a("This model is also a "),Ur=o("a"),sb=a("tf.keras.Model"),ob=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb=p(),T(zo.$$.fragment),rb=p(),Ye=o("div"),T(Hr.$$.fragment),ab=p(),$s=o("p"),ib=a("The "),Zi=o("a"),lb=a("TFDistilBertForSequenceClassification"),db=a(" forward method, overrides the "),wd=o("code"),cb=a("__call__"),pb=a(" special method."),hb=p(),T(jo.$$.fragment),mb=p(),T(Co.$$.fragment),ub=p(),T(qo.$$.fragment),Zp=p(),ws=o("h2"),Po=o("a"),yd=o("span"),T(Vr.$$.fragment),fb=p(),Dd=o("span"),gb=a("TFDistilBertForMultipleChoice"),eh=p(),Le=o("div"),T(Kr.$$.fragment),_b=p(),Fd=o("p"),bb=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),vb=p(),Jr=o("p"),kb=a("This model inherits from "),el=o("a"),Tb=a("TFPreTrainedModel"),$b=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wb=p(),Gr=o("p"),yb=a("This model is also a "),Xr=o("a"),Db=a("tf.keras.Model"),Fb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=p(),T(Ao.$$.fragment),xb=p(),ft=o("div"),T(Yr.$$.fragment),Mb=p(),ys=o("p"),Eb=a("The "),tl=o("a"),zb=a("TFDistilBertForMultipleChoice"),jb=a(" forward method, overrides the "),Bd=o("code"),Cb=a("__call__"),qb=a(" special method."),Pb=p(),T(Oo.$$.fragment),Ab=p(),T(No.$$.fragment),th=p(),Ds=o("h2"),Lo=o("a"),xd=o("span"),T(Zr.$$.fragment),Ob=p(),Md=o("span"),Nb=a("TFDistilBertForTokenClassification"),sh=p(),Se=o("div"),T(ea.$$.fragment),Lb=p(),Ed=o("p"),Sb=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ib=p(),ta=o("p"),Wb=a("This model inherits from "),sl=o("a"),Qb=a("TFPreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub=p(),sa=o("p"),Hb=a("This model is also a "),oa=o("a"),Vb=a("tf.keras.Model"),Kb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jb=p(),T(So.$$.fragment),Gb=p(),Ze=o("div"),T(na.$$.fragment),Xb=p(),Fs=o("p"),Yb=a("The "),ol=o("a"),Zb=a("TFDistilBertForTokenClassification"),ev=a(" forward method, overrides the "),zd=o("code"),tv=a("__call__"),sv=a(" special method."),ov=p(),T(Io.$$.fragment),nv=p(),T(Wo.$$.fragment),rv=p(),T(Qo.$$.fragment),oh=p(),Bs=o("h2"),Ro=o("a"),jd=o("span"),T(ra.$$.fragment),av=p(),Cd=o("span"),iv=a("TFDistilBertForQuestionAnswering"),nh=p(),Ie=o("div"),T(aa.$$.fragment),lv=p(),xs=o("p"),dv=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=o("code"),cv=a("span start logits"),pv=a(" and "),Pd=o("code"),hv=a("span end logits"),mv=a(")."),uv=p(),ia=o("p"),fv=a("This model inherits from "),nl=o("a"),gv=a("TFPreTrainedModel"),_v=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bv=p(),la=o("p"),vv=a("This model is also a "),da=o("a"),kv=a("tf.keras.Model"),Tv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$v=p(),T(Uo.$$.fragment),wv=p(),et=o("div"),T(ca.$$.fragment),yv=p(),Ms=o("p"),Dv=a("The "),rl=o("a"),Fv=a("TFDistilBertForQuestionAnswering"),Bv=a(" forward method, overrides the "),Ad=o("code"),xv=a("__call__"),Mv=a(" special method."),Ev=p(),T(Ho.$$.fragment),zv=p(),T(Vo.$$.fragment),jv=p(),T(Ko.$$.fragment),rh=p(),Es=o("h2"),Jo=o("a"),Od=o("span"),T(pa.$$.fragment),Cv=p(),Nd=o("span"),qv=a("FlaxDistilBertModel"),ah=p(),Me=o("div"),T(ha.$$.fragment),Pv=p(),Ld=o("p"),Av=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ov=p(),ma=o("p"),Nv=a("This model inherits from "),al=o("a"),Lv=a("FlaxPreTrainedModel"),Sv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iv=p(),ua=o("p"),Wv=a("This model is also a Flax Linen "),fa=o("a"),Qv=a("flax.linen.Module"),Rv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uv=p(),Sd=o("p"),Hv=a("Finally, this model supports inherent JAX features such as:"),Vv=p(),Mt=o("ul"),Id=o("li"),ga=o("a"),Kv=a("Just-In-Time (JIT) compilation"),Jv=p(),Wd=o("li"),_a=o("a"),Gv=a("Automatic Differentiation"),Xv=p(),Qd=o("li"),ba=o("a"),Yv=a("Vectorization"),Zv=p(),Rd=o("li"),va=o("a"),ek=a("Parallelization"),tk=p(),gt=o("div"),T(ka.$$.fragment),sk=p(),zs=o("p"),ok=a("The "),Ud=o("code"),nk=a("FlaxDistilBertPreTrainedModel"),rk=a(" forward method, overrides the "),Hd=o("code"),ak=a("__call__"),ik=a(" special method."),lk=p(),T(Go.$$.fragment),dk=p(),T(Xo.$$.fragment),ih=p(),js=o("h2"),Yo=o("a"),Vd=o("span"),T(Ta.$$.fragment),ck=p(),Kd=o("span"),pk=a("FlaxDistilBertForMaskedLM"),lh=p(),Ee=o("div"),T($a.$$.fragment),hk=p(),wa=o("p"),mk=a("DistilBert Model with a "),Jd=o("code"),uk=a("language modeling"),fk=a(" head on top."),gk=p(),ya=o("p"),_k=a("This model inherits from "),il=o("a"),bk=a("FlaxPreTrainedModel"),vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kk=p(),Da=o("p"),Tk=a("This model is also a Flax Linen "),Fa=o("a"),$k=a("flax.linen.Module"),wk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yk=p(),Gd=o("p"),Dk=a("Finally, this model supports inherent JAX features such as:"),Fk=p(),Et=o("ul"),Xd=o("li"),Ba=o("a"),Bk=a("Just-In-Time (JIT) compilation"),xk=p(),Yd=o("li"),xa=o("a"),Mk=a("Automatic Differentiation"),Ek=p(),Zd=o("li"),Ma=o("a"),zk=a("Vectorization"),jk=p(),ec=o("li"),Ea=o("a"),Ck=a("Parallelization"),qk=p(),_t=o("div"),T(za.$$.fragment),Pk=p(),Cs=o("p"),Ak=a("The "),tc=o("code"),Ok=a("FlaxDistilBertPreTrainedModel"),Nk=a(" forward method, overrides the "),sc=o("code"),Lk=a("__call__"),Sk=a(" special method."),Ik=p(),T(Zo.$$.fragment),Wk=p(),T(en.$$.fragment),dh=p(),qs=o("h2"),tn=o("a"),oc=o("span"),T(ja.$$.fragment),Qk=p(),nc=o("span"),Rk=a("FlaxDistilBertForSequenceClassification"),ch=p(),ze=o("div"),T(Ca.$$.fragment),Uk=p(),rc=o("p"),Hk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vk=p(),qa=o("p"),Kk=a("This model inherits from "),ll=o("a"),Jk=a("FlaxPreTrainedModel"),Gk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xk=p(),Pa=o("p"),Yk=a("This model is also a Flax Linen "),Aa=o("a"),Zk=a("flax.linen.Module"),eT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tT=p(),ac=o("p"),sT=a("Finally, this model supports inherent JAX features such as:"),oT=p(),zt=o("ul"),ic=o("li"),Oa=o("a"),nT=a("Just-In-Time (JIT) compilation"),rT=p(),lc=o("li"),Na=o("a"),aT=a("Automatic Differentiation"),iT=p(),dc=o("li"),La=o("a"),lT=a("Vectorization"),dT=p(),cc=o("li"),Sa=o("a"),cT=a("Parallelization"),pT=p(),bt=o("div"),T(Ia.$$.fragment),hT=p(),Ps=o("p"),mT=a("The "),pc=o("code"),uT=a("FlaxDistilBertPreTrainedModel"),fT=a(" forward method, overrides the "),hc=o("code"),gT=a("__call__"),_T=a(" special method."),bT=p(),T(sn.$$.fragment),vT=p(),T(on.$$.fragment),ph=p(),As=o("h2"),nn=o("a"),mc=o("span"),T(Wa.$$.fragment),kT=p(),uc=o("span"),TT=a("FlaxDistilBertForMultipleChoice"),hh=p(),je=o("div"),T(Qa.$$.fragment),$T=p(),fc=o("p"),wT=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yT=p(),Ra=o("p"),DT=a("This model inherits from "),dl=o("a"),FT=a("FlaxPreTrainedModel"),BT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xT=p(),Ua=o("p"),MT=a("This model is also a Flax Linen "),Ha=o("a"),ET=a("flax.linen.Module"),zT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jT=p(),gc=o("p"),CT=a("Finally, this model supports inherent JAX features such as:"),qT=p(),jt=o("ul"),_c=o("li"),Va=o("a"),PT=a("Just-In-Time (JIT) compilation"),AT=p(),bc=o("li"),Ka=o("a"),OT=a("Automatic Differentiation"),NT=p(),vc=o("li"),Ja=o("a"),LT=a("Vectorization"),ST=p(),kc=o("li"),Ga=o("a"),IT=a("Parallelization"),WT=p(),vt=o("div"),T(Xa.$$.fragment),QT=p(),Os=o("p"),RT=a("The "),Tc=o("code"),UT=a("FlaxDistilBertPreTrainedModel"),HT=a(" forward method, overrides the "),$c=o("code"),VT=a("__call__"),KT=a(" special method."),JT=p(),T(rn.$$.fragment),GT=p(),T(an.$$.fragment),mh=p(),Ns=o("h2"),ln=o("a"),wc=o("span"),T(Ya.$$.fragment),XT=p(),yc=o("span"),YT=a("FlaxDistilBertForTokenClassification"),uh=p(),Ce=o("div"),T(Za.$$.fragment),ZT=p(),Dc=o("p"),e$=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),t$=p(),ei=o("p"),s$=a("This model inherits from "),cl=o("a"),o$=a("FlaxPreTrainedModel"),n$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r$=p(),ti=o("p"),a$=a("This model is also a Flax Linen "),si=o("a"),i$=a("flax.linen.Module"),l$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),d$=p(),Fc=o("p"),c$=a("Finally, this model supports inherent JAX features such as:"),p$=p(),Ct=o("ul"),Bc=o("li"),oi=o("a"),h$=a("Just-In-Time (JIT) compilation"),m$=p(),xc=o("li"),ni=o("a"),u$=a("Automatic Differentiation"),f$=p(),Mc=o("li"),ri=o("a"),g$=a("Vectorization"),_$=p(),Ec=o("li"),ai=o("a"),b$=a("Parallelization"),v$=p(),kt=o("div"),T(ii.$$.fragment),k$=p(),Ls=o("p"),T$=a("The "),zc=o("code"),$$=a("FlaxDistilBertPreTrainedModel"),w$=a(" forward method, overrides the "),jc=o("code"),y$=a("__call__"),D$=a(" special method."),F$=p(),T(dn.$$.fragment),B$=p(),T(cn.$$.fragment),fh=p(),Ss=o("h2"),pn=o("a"),Cc=o("span"),T(li.$$.fragment),x$=p(),qc=o("span"),M$=a("FlaxDistilBertForQuestionAnswering"),gh=p(),qe=o("div"),T(di.$$.fragment),E$=p(),Is=o("p"),z$=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=o("code"),j$=a("span start logits"),C$=a(" and "),Ac=o("code"),q$=a("span end logits"),P$=a(")."),A$=p(),ci=o("p"),O$=a("This model inherits from "),pl=o("a"),N$=a("FlaxPreTrainedModel"),L$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),S$=p(),pi=o("p"),I$=a("This model is also a Flax Linen "),hi=o("a"),W$=a("flax.linen.Module"),Q$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),R$=p(),Oc=o("p"),U$=a("Finally, this model supports inherent JAX features such as:"),H$=p(),qt=o("ul"),Nc=o("li"),mi=o("a"),V$=a("Just-In-Time (JIT) compilation"),K$=p(),Lc=o("li"),ui=o("a"),J$=a("Automatic Differentiation"),G$=p(),Sc=o("li"),fi=o("a"),X$=a("Vectorization"),Y$=p(),Ic=o("li"),gi=o("a"),Z$=a("Parallelization"),ew=p(),Tt=o("div"),T(_i.$$.fragment),tw=p(),Ws=o("p"),sw=a("The "),Wc=o("code"),ow=a("FlaxDistilBertPreTrainedModel"),nw=a(" forward method, overrides the "),Qc=o("code"),rw=a("__call__"),aw=a(" special method."),iw=p(),T(hn.$$.fragment),lw=p(),T(mn.$$.fragment),this.h()},l(s){const v=sD('[data-svelte="svelte-1phssyn"]',document.head);d=n(v,"META",{name:!0,content:!0}),v.forEach(t),g=h(s),c=n(s,"H1",{class:!0});var bi=r(c);m=n(bi,"A",{id:!0,class:!0,href:!0});var Rc=r(m);_=n(Rc,"SPAN",{});var Uc=r(_);$(l.$$.fragment,Uc),Uc.forEach(t),Rc.forEach(t),u=h(bi),x=n(bi,"SPAN",{});var Hc=r(x);he=i(Hc,"DistilBERT"),Hc.forEach(t),bi.forEach(t),V=h(s),E=n(s,"H2",{class:!0});var vi=r(E);G=n(vi,"A",{id:!0,class:!0,href:!0});var Vc=r(G);S=n(Vc,"SPAN",{});var Kc=r(S);$(X.$$.fragment,Kc),Kc.forEach(t),Vc.forEach(t),me=h(vi),I=n(vi,"SPAN",{});var Jc=r(I);ue=i(Jc,"Overview"),Jc.forEach(t),vi.forEach(t),le=h(s),N=n(s,"P",{});var Pt=r(N);P=i(Pt,"The DistilBERT model was proposed in the blog post "),Y=n(Pt,"A",{href:!0,rel:!0});var Gc=r(Y);K=i(Gc,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),Gc.forEach(t),z=i(Pt,", and the paper "),j=n(Pt,"A",{href:!0,rel:!0});var Xc=r(j);fe=i(Xc,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),Xc.forEach(t),W=i(Pt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(Pt,"EM",{});var Yc=r(se);ge=i(Yc,"bert-base-uncased"),Yc.forEach(t),Q=i(Pt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),Pt.forEach(t),de=h(s),ee=n(s,"P",{});var Zc=r(ee);A=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),ce=h(s),L=n(s,"P",{});var ep=r(L);oe=n(ep,"EM",{});var tp=r(oe);_e=i(tp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),tp.forEach(t),ep.forEach(t),q=h(s),te=n(s,"P",{});var sp=r(te);R=i(sp,"Tips:"),sp.forEach(t),pe=h(s),k=n(s,"UL",{});var ki=r(k);M=n(ki,"LI",{});var At=r(M);J=i(At,"DistilBERT doesn\u2019t have "),ve=n(At,"CODE",{});var op=r(ve);$e=i(op,"token_type_ids"),op.forEach(t),O=i(At,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ke=n(At,"CODE",{});var np=r(ke);we=i(np,"tokenizer.sep_token"),np.forEach(t),ye=i(At," (or "),C=n(At,"CODE",{});var rp=r(C);U=i(rp,"[SEP]"),rp.forEach(t),De=i(At,")."),At.forEach(t),Fe=h(ki),Z=n(ki,"LI",{});var Ti=r(Z);Be=i(Ti,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(Ti,"CODE",{});var ap=r(ne);xe=i(ap,"position_ids"),ap.forEach(t),wm=i(Ti,` input). This could be added if
necessary though, just let us know if you need this option.`),Ti.forEach(t),ki.forEach(t),xp=h(s),pt=n(s,"P",{});var Ot=r(pt);ym=i(Ot,"This model was contributed by "),jn=n(Ot,"A",{href:!0,rel:!0});var ip=r(jn);Dm=i(ip,"victorsanh"),ip.forEach(t),Fm=i(Ot,`. This model jax version was
contributed by `),Cn=n(Ot,"A",{href:!0,rel:!0});var lp=r(Cn);Bm=i(lp,"kamalkraj"),lp.forEach(t),xm=i(Ot,". The original code can be found "),qn=n(Ot,"A",{href:!0,rel:!0});var dp=r(qn);Mm=i(dp,"here"),dp.forEach(t),Em=i(Ot,"."),Ot.forEach(t),Mp=h(s),es=n(s,"H2",{class:!0});var $i=r(es);Rs=n($i,"A",{id:!0,class:!0,href:!0});var cp=r(Rs);Cl=n(cp,"SPAN",{});var pp=r(Cl);$(Pn.$$.fragment,pp),pp.forEach(t),cp.forEach(t),zm=h($i),ql=n($i,"SPAN",{});var hp=r(ql);jm=i(hp,"DistilBertConfig"),hp.forEach(t),$i.forEach(t),Ep=h(s),lt=n(s,"DIV",{class:!0});var Nt=r(lt);$(An.$$.fragment,Nt),Cm=h(Nt),xt=n(Nt,"P",{});var Lt=r(xt);qm=i(Lt,"This is the configuration class to store the configuration of a "),Fi=n(Lt,"A",{href:!0});var mp=r(Fi);Pm=i(mp,"DistilBertModel"),mp.forEach(t),Am=i(Lt," or a "),Bi=n(Lt,"A",{href:!0});var up=r(Bi);Om=i(up,"TFDistilBertModel"),up.forEach(t),Nm=i(Lt,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=n(Lt,"A",{href:!0,rel:!0});var fp=r(On);Lm=i(fp,"distilbert-base-uncased"),fp.forEach(t),Sm=i(Lt," architecture."),Lt.forEach(t),Im=h(Nt),ts=n(Nt,"P",{});var Qs=r(ts);Wm=i(Qs,"Configuration objects inherit from "),xi=n(Qs,"A",{href:!0});var gp=r(xi);Qm=i(gp,"PretrainedConfig"),gp.forEach(t),Rm=i(Qs,` and can be used to control the model outputs. Read the
documentation from `),Mi=n(Qs,"A",{href:!0});var _p=r(Mi);Um=i(_p,"PretrainedConfig"),_p.forEach(t),Hm=i(Qs," for more information."),Qs.forEach(t),Vm=h(Nt),$(Us.$$.fragment,Nt),Nt.forEach(t),zp=h(s),ss=n(s,"H2",{class:!0});var wi=r(ss);Hs=n(wi,"A",{id:!0,class:!0,href:!0});var bp=r(Hs);Pl=n(bp,"SPAN",{});var vp=r(Pl);$(Nn.$$.fragment,vp),vp.forEach(t),bp.forEach(t),Km=h(wi),Al=n(wi,"SPAN",{});var kp=r(Al);Jm=i(kp,"DistilBertTokenizer"),kp.forEach(t),wi.forEach(t),jp=h(s),dt=n(s,"DIV",{class:!0});var St=r(dt);$(Ln.$$.fragment,St),Gm=h(St),Ol=n(St,"P",{});var Tp=r(Ol);Xm=i(Tp,"Construct a DistilBERT tokenizer."),Tp.forEach(t),Ym=h(St),Vs=n(St,"P",{});var un=r(Vs);Ei=n(un,"A",{href:!0});var $p=r(Ei);Zm=i($p,"DistilBertTokenizer"),$p.forEach(t),eu=i(un," is identical to "),zi=n(un,"A",{href:!0});var wp=r(zi);tu=i(wp,"BertTokenizer"),wp.forEach(t),su=i(un,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),un.forEach(t),ou=h(St),Sn=n(St,"P",{});var yi=r(Sn);nu=i(yi,"Refer to superclass "),ji=n(yi,"A",{href:!0});var yp=r(ji);ru=i(yp,"BertTokenizer"),yp.forEach(t),au=i(yi," for usage examples and documentation concerning parameters."),yi.forEach(t),St.forEach(t),Cp=h(s),os=n(s,"H2",{class:!0});var Di=r(os);Ks=n(Di,"A",{id:!0,class:!0,href:!0});var Dp=r(Ks);Nl=n(Dp,"SPAN",{});var Fp=r(Nl);$(In.$$.fragment,Fp),Fp.forEach(t),Dp.forEach(t),iu=h(Di),Ll=n(Di,"SPAN",{});var dw=r(Ll);lu=i(dw,"DistilBertTokenizerFast"),dw.forEach(t),Di.forEach(t),qp=h(s),ct=n(s,"DIV",{class:!0});var fn=r(ct);$(Wn.$$.fragment,fn),du=h(fn),Qn=n(fn,"P",{});var bh=r(Qn);cu=i(bh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=n(bh,"EM",{});var cw=r(Sl);pu=i(cw,"tokenizers"),cw.forEach(t),hu=i(bh," library)."),bh.forEach(t),mu=h(fn),Js=n(fn,"P",{});var Bp=r(Js);Ci=n(Bp,"A",{href:!0});var pw=r(Ci);uu=i(pw,"DistilBertTokenizerFast"),pw.forEach(t),fu=i(Bp," is identical to "),qi=n(Bp,"A",{href:!0});var hw=r(qi);gu=i(hw,"BertTokenizerFast"),hw.forEach(t),_u=i(Bp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Bp.forEach(t),bu=h(fn),Rn=n(fn,"P",{});var vh=r(Rn);vu=i(vh,"Refer to superclass "),Pi=n(vh,"A",{href:!0});var mw=r(Pi);ku=i(mw,"BertTokenizerFast"),mw.forEach(t),Tu=i(vh," for usage examples and documentation concerning parameters."),vh.forEach(t),fn.forEach(t),Pp=h(s),ns=n(s,"H2",{class:!0});var kh=r(ns);Gs=n(kh,"A",{id:!0,class:!0,href:!0});var uw=r(Gs);Il=n(uw,"SPAN",{});var fw=r(Il);$(Un.$$.fragment,fw),fw.forEach(t),uw.forEach(t),$u=h(kh),Wl=n(kh,"SPAN",{});var gw=r(Wl);wu=i(gw,"DistilBertModel"),gw.forEach(t),kh.forEach(t),Ap=h(s),We=n(s,"DIV",{class:!0});var It=r(We);$(Hn.$$.fragment,It),yu=h(It),Ql=n(It,"P",{});var _w=r(Ql);Du=i(_w,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_w.forEach(t),Fu=h(It),Vn=n(It,"P",{});var Th=r(Vn);Bu=i(Th,"This model inherits from "),Ai=n(Th,"A",{href:!0});var bw=r(Ai);xu=i(bw,"PreTrainedModel"),bw.forEach(t),Mu=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Eu=h(It),Kn=n(It,"P",{});var $h=r(Kn);zu=i($h,"This model is also a PyTorch "),Jn=n($h,"A",{href:!0,rel:!0});var vw=r(Jn);ju=i(vw,"torch.nn.Module"),vw.forEach(t),Cu=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),qu=h(It),ht=n(It,"DIV",{class:!0});var gn=r(ht);$(Gn.$$.fragment,gn),Pu=h(gn),rs=n(gn,"P",{});var hl=r(rs);Au=i(hl,"The "),Oi=n(hl,"A",{href:!0});var kw=r(Oi);Ou=i(kw,"DistilBertModel"),kw.forEach(t),Nu=i(hl," forward method, overrides the "),Rl=n(hl,"CODE",{});var Tw=r(Rl);Lu=i(Tw,"__call__"),Tw.forEach(t),Su=i(hl," special method."),hl.forEach(t),Iu=h(gn),$(Xs.$$.fragment,gn),Wu=h(gn),$(Ys.$$.fragment,gn),gn.forEach(t),It.forEach(t),Op=h(s),as=n(s,"H2",{class:!0});var wh=r(as);Zs=n(wh,"A",{id:!0,class:!0,href:!0});var $w=r(Zs);Ul=n($w,"SPAN",{});var ww=r(Ul);$(Xn.$$.fragment,ww),ww.forEach(t),$w.forEach(t),Qu=h(wh),Hl=n(wh,"SPAN",{});var yw=r(Hl);Ru=i(yw,"DistilBertForMaskedLM"),yw.forEach(t),wh.forEach(t),Np=h(s),Qe=n(s,"DIV",{class:!0});var Wt=r(Qe);$(Yn.$$.fragment,Wt),Uu=h(Wt),Zn=n(Wt,"P",{});var yh=r(Zn);Hu=i(yh,"DistilBert Model with a "),Vl=n(yh,"CODE",{});var Dw=r(Vl);Vu=i(Dw,"masked language modeling"),Dw.forEach(t),Ku=i(yh," head on top."),yh.forEach(t),Ju=h(Wt),er=n(Wt,"P",{});var Dh=r(er);Gu=i(Dh,"This model inherits from "),Ni=n(Dh,"A",{href:!0});var Fw=r(Ni);Xu=i(Fw,"PreTrainedModel"),Fw.forEach(t),Yu=i(Dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh.forEach(t),Zu=h(Wt),tr=n(Wt,"P",{});var Fh=r(tr);ef=i(Fh,"This model is also a PyTorch "),sr=n(Fh,"A",{href:!0,rel:!0});var Bw=r(sr);tf=i(Bw,"torch.nn.Module"),Bw.forEach(t),sf=i(Fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh.forEach(t),of=h(Wt),Ke=n(Wt,"DIV",{class:!0});var Qt=r(Ke);$(or.$$.fragment,Qt),nf=h(Qt),is=n(Qt,"P",{});var ml=r(is);rf=i(ml,"The "),Li=n(ml,"A",{href:!0});var xw=r(Li);af=i(xw,"DistilBertForMaskedLM"),xw.forEach(t),lf=i(ml," forward method, overrides the "),Kl=n(ml,"CODE",{});var Mw=r(Kl);df=i(Mw,"__call__"),Mw.forEach(t),cf=i(ml," special method."),ml.forEach(t),pf=h(Qt),$(eo.$$.fragment,Qt),hf=h(Qt),$(to.$$.fragment,Qt),mf=h(Qt),$(so.$$.fragment,Qt),Qt.forEach(t),Wt.forEach(t),Lp=h(s),ls=n(s,"H2",{class:!0});var Bh=r(ls);oo=n(Bh,"A",{id:!0,class:!0,href:!0});var Ew=r(oo);Jl=n(Ew,"SPAN",{});var zw=r(Jl);$(nr.$$.fragment,zw),zw.forEach(t),Ew.forEach(t),uf=h(Bh),Gl=n(Bh,"SPAN",{});var jw=r(Gl);ff=i(jw,"DistilBertForSequenceClassification"),jw.forEach(t),Bh.forEach(t),Sp=h(s),Re=n(s,"DIV",{class:!0});var Rt=r(Re);$(rr.$$.fragment,Rt),gf=h(Rt),Xl=n(Rt,"P",{});var Cw=r(Xl);_f=i(Cw,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cw.forEach(t),bf=h(Rt),ar=n(Rt,"P",{});var xh=r(ar);vf=i(xh,"This model inherits from "),Si=n(xh,"A",{href:!0});var qw=r(Si);kf=i(qw,"PreTrainedModel"),qw.forEach(t),Tf=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),$f=h(Rt),ir=n(Rt,"P",{});var Mh=r(ir);wf=i(Mh,"This model is also a PyTorch "),lr=n(Mh,"A",{href:!0,rel:!0});var Pw=r(lr);yf=i(Pw,"torch.nn.Module"),Pw.forEach(t),Df=i(Mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh.forEach(t),Ff=h(Rt),Pe=n(Rt,"DIV",{class:!0});var tt=r(Pe);$(dr.$$.fragment,tt),Bf=h(tt),ds=n(tt,"P",{});var ul=r(ds);xf=i(ul,"The "),Ii=n(ul,"A",{href:!0});var Aw=r(Ii);Mf=i(Aw,"DistilBertForSequenceClassification"),Aw.forEach(t),Ef=i(ul," forward method, overrides the "),Yl=n(ul,"CODE",{});var Ow=r(Yl);zf=i(Ow,"__call__"),Ow.forEach(t),jf=i(ul," special method."),ul.forEach(t),Cf=h(tt),$(no.$$.fragment,tt),qf=h(tt),$(ro.$$.fragment,tt),Pf=h(tt),$(ao.$$.fragment,tt),Af=h(tt),$(io.$$.fragment,tt),Of=h(tt),$(lo.$$.fragment,tt),tt.forEach(t),Rt.forEach(t),Ip=h(s),cs=n(s,"H2",{class:!0});var Eh=r(cs);co=n(Eh,"A",{id:!0,class:!0,href:!0});var Nw=r(co);Zl=n(Nw,"SPAN",{});var Lw=r(Zl);$(cr.$$.fragment,Lw),Lw.forEach(t),Nw.forEach(t),Nf=h(Eh),ed=n(Eh,"SPAN",{});var Sw=r(ed);Lf=i(Sw,"DistilBertForMultipleChoice"),Sw.forEach(t),Eh.forEach(t),Wp=h(s),Ue=n(s,"DIV",{class:!0});var Ut=r(Ue);$(pr.$$.fragment,Ut),Sf=h(Ut),td=n(Ut,"P",{});var Iw=r(td);If=i(Iw,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iw.forEach(t),Wf=h(Ut),hr=n(Ut,"P",{});var zh=r(hr);Qf=i(zh,"This model inherits from "),Wi=n(zh,"A",{href:!0});var Ww=r(Wi);Rf=i(Ww,"PreTrainedModel"),Ww.forEach(t),Uf=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Hf=h(Ut),mr=n(Ut,"P",{});var jh=r(mr);Vf=i(jh,"This model is also a PyTorch "),ur=n(jh,"A",{href:!0,rel:!0});var Qw=r(ur);Kf=i(Qw,"torch.nn.Module"),Qw.forEach(t),Jf=i(jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh.forEach(t),Gf=h(Ut),mt=n(Ut,"DIV",{class:!0});var _n=r(mt);$(fr.$$.fragment,_n),Xf=h(_n),ps=n(_n,"P",{});var fl=r(ps);Yf=i(fl,"The "),Qi=n(fl,"A",{href:!0});var Rw=r(Qi);Zf=i(Rw,"DistilBertForMultipleChoice"),Rw.forEach(t),eg=i(fl," forward method, overrides the "),sd=n(fl,"CODE",{});var Uw=r(sd);tg=i(Uw,"__call__"),Uw.forEach(t),sg=i(fl," special method."),fl.forEach(t),og=h(_n),$(po.$$.fragment,_n),ng=h(_n),$(ho.$$.fragment,_n),_n.forEach(t),Ut.forEach(t),Qp=h(s),hs=n(s,"H2",{class:!0});var Ch=r(hs);mo=n(Ch,"A",{id:!0,class:!0,href:!0});var Hw=r(mo);od=n(Hw,"SPAN",{});var Vw=r(od);$(gr.$$.fragment,Vw),Vw.forEach(t),Hw.forEach(t),rg=h(Ch),nd=n(Ch,"SPAN",{});var Kw=r(nd);ag=i(Kw,"DistilBertForTokenClassification"),Kw.forEach(t),Ch.forEach(t),Rp=h(s),He=n(s,"DIV",{class:!0});var Ht=r(He);$(_r.$$.fragment,Ht),ig=h(Ht),rd=n(Ht,"P",{});var Jw=r(rd);lg=i(Jw,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Jw.forEach(t),dg=h(Ht),br=n(Ht,"P",{});var qh=r(br);cg=i(qh,"This model inherits from "),Ri=n(qh,"A",{href:!0});var Gw=r(Ri);pg=i(Gw,"PreTrainedModel"),Gw.forEach(t),hg=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),mg=h(Ht),vr=n(Ht,"P",{});var Ph=r(vr);ug=i(Ph,"This model is also a PyTorch "),kr=n(Ph,"A",{href:!0,rel:!0});var Xw=r(kr);fg=i(Xw,"torch.nn.Module"),Xw.forEach(t),gg=i(Ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ph.forEach(t),_g=h(Ht),Je=n(Ht,"DIV",{class:!0});var Vt=r(Je);$(Tr.$$.fragment,Vt),bg=h(Vt),ms=n(Vt,"P",{});var gl=r(ms);vg=i(gl,"The "),Ui=n(gl,"A",{href:!0});var Yw=r(Ui);kg=i(Yw,"DistilBertForTokenClassification"),Yw.forEach(t),Tg=i(gl," forward method, overrides the "),ad=n(gl,"CODE",{});var Zw=r(ad);$g=i(Zw,"__call__"),Zw.forEach(t),wg=i(gl," special method."),gl.forEach(t),yg=h(Vt),$(uo.$$.fragment,Vt),Dg=h(Vt),$(fo.$$.fragment,Vt),Fg=h(Vt),$(go.$$.fragment,Vt),Vt.forEach(t),Ht.forEach(t),Up=h(s),us=n(s,"H2",{class:!0});var Ah=r(us);_o=n(Ah,"A",{id:!0,class:!0,href:!0});var ey=r(_o);id=n(ey,"SPAN",{});var ty=r(id);$($r.$$.fragment,ty),ty.forEach(t),ey.forEach(t),Bg=h(Ah),ld=n(Ah,"SPAN",{});var sy=r(ld);xg=i(sy,"DistilBertForQuestionAnswering"),sy.forEach(t),Ah.forEach(t),Hp=h(s),Ve=n(s,"DIV",{class:!0});var Kt=r(Ve);$(wr.$$.fragment,Kt),Mg=h(Kt),fs=n(Kt,"P",{});var _l=r(fs);Eg=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(_l,"CODE",{});var oy=r(dd);zg=i(oy,"span start logits"),oy.forEach(t),jg=i(_l," and "),cd=n(_l,"CODE",{});var ny=r(cd);Cg=i(ny,"span end logits"),ny.forEach(t),qg=i(_l,")."),_l.forEach(t),Pg=h(Kt),yr=n(Kt,"P",{});var Oh=r(yr);Ag=i(Oh,"This model inherits from "),Hi=n(Oh,"A",{href:!0});var ry=r(Hi);Og=i(ry,"PreTrainedModel"),ry.forEach(t),Ng=i(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),Lg=h(Kt),Dr=n(Kt,"P",{});var Nh=r(Dr);Sg=i(Nh,"This model is also a PyTorch "),Fr=n(Nh,"A",{href:!0,rel:!0});var ay=r(Fr);Ig=i(ay,"torch.nn.Module"),ay.forEach(t),Wg=i(Nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nh.forEach(t),Qg=h(Kt),Ge=n(Kt,"DIV",{class:!0});var Jt=r(Ge);$(Br.$$.fragment,Jt),Rg=h(Jt),gs=n(Jt,"P",{});var bl=r(gs);Ug=i(bl,"The "),Vi=n(bl,"A",{href:!0});var iy=r(Vi);Hg=i(iy,"DistilBertForQuestionAnswering"),iy.forEach(t),Vg=i(bl," forward method, overrides the "),pd=n(bl,"CODE",{});var ly=r(pd);Kg=i(ly,"__call__"),ly.forEach(t),Jg=i(bl," special method."),bl.forEach(t),Gg=h(Jt),$(bo.$$.fragment,Jt),Xg=h(Jt),$(vo.$$.fragment,Jt),Yg=h(Jt),$(ko.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),Vp=h(s),_s=n(s,"H2",{class:!0});var Lh=r(_s);To=n(Lh,"A",{id:!0,class:!0,href:!0});var dy=r(To);hd=n(dy,"SPAN",{});var cy=r(hd);$(xr.$$.fragment,cy),cy.forEach(t),dy.forEach(t),Zg=h(Lh),md=n(Lh,"SPAN",{});var py=r(md);e_=i(py,"TFDistilBertModel"),py.forEach(t),Lh.forEach(t),Kp=h(s),Ae=n(s,"DIV",{class:!0});var $t=r(Ae);$(Mr.$$.fragment,$t),t_=h($t),ud=n($t,"P",{});var hy=r(ud);s_=i(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),o_=h($t),Er=n($t,"P",{});var Sh=r(Er);n_=i(Sh,"This model inherits from "),Ki=n(Sh,"A",{href:!0});var my=r(Ki);r_=i(my,"TFPreTrainedModel"),my.forEach(t),a_=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),i_=h($t),zr=n($t,"P",{});var Ih=r(zr);l_=i(Ih,"This model is also a "),jr=n(Ih,"A",{href:!0,rel:!0});var uy=r(jr);d_=i(uy,"tf.keras.Model"),uy.forEach(t),c_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),p_=h($t),$($o.$$.fragment,$t),h_=h($t),ut=n($t,"DIV",{class:!0});var bn=r(ut);$(Cr.$$.fragment,bn),m_=h(bn),bs=n(bn,"P",{});var vl=r(bs);u_=i(vl,"The "),Ji=n(vl,"A",{href:!0});var fy=r(Ji);f_=i(fy,"TFDistilBertModel"),fy.forEach(t),g_=i(vl," forward method, overrides the "),fd=n(vl,"CODE",{});var gy=r(fd);__=i(gy,"__call__"),gy.forEach(t),b_=i(vl," special method."),vl.forEach(t),v_=h(bn),$(wo.$$.fragment,bn),k_=h(bn),$(yo.$$.fragment,bn),bn.forEach(t),$t.forEach(t),Jp=h(s),vs=n(s,"H2",{class:!0});var Wh=r(vs);Do=n(Wh,"A",{id:!0,class:!0,href:!0});var _y=r(Do);gd=n(_y,"SPAN",{});var by=r(gd);$(qr.$$.fragment,by),by.forEach(t),_y.forEach(t),T_=h(Wh),_d=n(Wh,"SPAN",{});var vy=r(_d);$_=i(vy,"TFDistilBertForMaskedLM"),vy.forEach(t),Wh.forEach(t),Gp=h(s),Oe=n(s,"DIV",{class:!0});var wt=r(Oe);$(Pr.$$.fragment,wt),w_=h(wt),Ar=n(wt,"P",{});var Qh=r(Ar);y_=i(Qh,"DistilBert Model with a "),bd=n(Qh,"CODE",{});var ky=r(bd);D_=i(ky,"masked language modeling"),ky.forEach(t),F_=i(Qh," head on top."),Qh.forEach(t),B_=h(wt),Or=n(wt,"P",{});var Rh=r(Or);x_=i(Rh,"This model inherits from "),Gi=n(Rh,"A",{href:!0});var Ty=r(Gi);M_=i(Ty,"TFPreTrainedModel"),Ty.forEach(t),E_=i(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),z_=h(wt),Nr=n(wt,"P",{});var Uh=r(Nr);j_=i(Uh,"This model is also a "),Lr=n(Uh,"A",{href:!0,rel:!0});var $y=r(Lr);C_=i($y,"tf.keras.Model"),$y.forEach(t),q_=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),P_=h(wt),$(Fo.$$.fragment,wt),A_=h(wt),Xe=n(wt,"DIV",{class:!0});var Gt=r(Xe);$(Sr.$$.fragment,Gt),O_=h(Gt),ks=n(Gt,"P",{});var kl=r(ks);N_=i(kl,"The "),Xi=n(kl,"A",{href:!0});var wy=r(Xi);L_=i(wy,"TFDistilBertForMaskedLM"),wy.forEach(t),S_=i(kl," forward method, overrides the "),vd=n(kl,"CODE",{});var yy=r(vd);I_=i(yy,"__call__"),yy.forEach(t),W_=i(kl," special method."),kl.forEach(t),Q_=h(Gt),$(Bo.$$.fragment,Gt),R_=h(Gt),$(xo.$$.fragment,Gt),U_=h(Gt),$(Mo.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Xp=h(s),Ts=n(s,"H2",{class:!0});var Hh=r(Ts);Eo=n(Hh,"A",{id:!0,class:!0,href:!0});var Dy=r(Eo);kd=n(Dy,"SPAN",{});var Fy=r(kd);$(Ir.$$.fragment,Fy),Fy.forEach(t),Dy.forEach(t),H_=h(Hh),Td=n(Hh,"SPAN",{});var By=r(Td);V_=i(By,"TFDistilBertForSequenceClassification"),By.forEach(t),Hh.forEach(t),Yp=h(s),Ne=n(s,"DIV",{class:!0});var yt=r(Ne);$(Wr.$$.fragment,yt),K_=h(yt),$d=n(yt,"P",{});var xy=r($d);J_=i(xy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xy.forEach(t),G_=h(yt),Qr=n(yt,"P",{});var Vh=r(Qr);X_=i(Vh,"This model inherits from "),Yi=n(Vh,"A",{href:!0});var My=r(Yi);Y_=i(My,"TFPreTrainedModel"),My.forEach(t),Z_=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),eb=h(yt),Rr=n(yt,"P",{});var Kh=r(Rr);tb=i(Kh,"This model is also a "),Ur=n(Kh,"A",{href:!0,rel:!0});var Ey=r(Ur);sb=i(Ey,"tf.keras.Model"),Ey.forEach(t),ob=i(Kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kh.forEach(t),nb=h(yt),$(zo.$$.fragment,yt),rb=h(yt),Ye=n(yt,"DIV",{class:!0});var Xt=r(Ye);$(Hr.$$.fragment,Xt),ab=h(Xt),$s=n(Xt,"P",{});var Tl=r($s);ib=i(Tl,"The "),Zi=n(Tl,"A",{href:!0});var zy=r(Zi);lb=i(zy,"TFDistilBertForSequenceClassification"),zy.forEach(t),db=i(Tl," forward method, overrides the "),wd=n(Tl,"CODE",{});var jy=r(wd);cb=i(jy,"__call__"),jy.forEach(t),pb=i(Tl," special method."),Tl.forEach(t),hb=h(Xt),$(jo.$$.fragment,Xt),mb=h(Xt),$(Co.$$.fragment,Xt),ub=h(Xt),$(qo.$$.fragment,Xt),Xt.forEach(t),yt.forEach(t),Zp=h(s),ws=n(s,"H2",{class:!0});var Jh=r(ws);Po=n(Jh,"A",{id:!0,class:!0,href:!0});var Cy=r(Po);yd=n(Cy,"SPAN",{});var qy=r(yd);$(Vr.$$.fragment,qy),qy.forEach(t),Cy.forEach(t),fb=h(Jh),Dd=n(Jh,"SPAN",{});var Py=r(Dd);gb=i(Py,"TFDistilBertForMultipleChoice"),Py.forEach(t),Jh.forEach(t),eh=h(s),Le=n(s,"DIV",{class:!0});var Dt=r(Le);$(Kr.$$.fragment,Dt),_b=h(Dt),Fd=n(Dt,"P",{});var Ay=r(Fd);bb=i(Ay,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ay.forEach(t),vb=h(Dt),Jr=n(Dt,"P",{});var Gh=r(Jr);kb=i(Gh,"This model inherits from "),el=n(Gh,"A",{href:!0});var Oy=r(el);Tb=i(Oy,"TFPreTrainedModel"),Oy.forEach(t),$b=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),wb=h(Dt),Gr=n(Dt,"P",{});var Xh=r(Gr);yb=i(Xh,"This model is also a "),Xr=n(Xh,"A",{href:!0,rel:!0});var Ny=r(Xr);Db=i(Ny,"tf.keras.Model"),Ny.forEach(t),Fb=i(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),Bb=h(Dt),$(Ao.$$.fragment,Dt),xb=h(Dt),ft=n(Dt,"DIV",{class:!0});var vn=r(ft);$(Yr.$$.fragment,vn),Mb=h(vn),ys=n(vn,"P",{});var $l=r(ys);Eb=i($l,"The "),tl=n($l,"A",{href:!0});var Ly=r(tl);zb=i(Ly,"TFDistilBertForMultipleChoice"),Ly.forEach(t),jb=i($l," forward method, overrides the "),Bd=n($l,"CODE",{});var Sy=r(Bd);Cb=i(Sy,"__call__"),Sy.forEach(t),qb=i($l," special method."),$l.forEach(t),Pb=h(vn),$(Oo.$$.fragment,vn),Ab=h(vn),$(No.$$.fragment,vn),vn.forEach(t),Dt.forEach(t),th=h(s),Ds=n(s,"H2",{class:!0});var Yh=r(Ds);Lo=n(Yh,"A",{id:!0,class:!0,href:!0});var Iy=r(Lo);xd=n(Iy,"SPAN",{});var Wy=r(xd);$(Zr.$$.fragment,Wy),Wy.forEach(t),Iy.forEach(t),Ob=h(Yh),Md=n(Yh,"SPAN",{});var Qy=r(Md);Nb=i(Qy,"TFDistilBertForTokenClassification"),Qy.forEach(t),Yh.forEach(t),sh=h(s),Se=n(s,"DIV",{class:!0});var Ft=r(Se);$(ea.$$.fragment,Ft),Lb=h(Ft),Ed=n(Ft,"P",{});var Ry=r(Ed);Sb=i(Ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ry.forEach(t),Ib=h(Ft),ta=n(Ft,"P",{});var Zh=r(ta);Wb=i(Zh,"This model inherits from "),sl=n(Zh,"A",{href:!0});var Uy=r(sl);Qb=i(Uy,"TFPreTrainedModel"),Uy.forEach(t),Rb=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zh.forEach(t),Ub=h(Ft),sa=n(Ft,"P",{});var em=r(sa);Hb=i(em,"This model is also a "),oa=n(em,"A",{href:!0,rel:!0});var Hy=r(oa);Vb=i(Hy,"tf.keras.Model"),Hy.forEach(t),Kb=i(em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),em.forEach(t),Jb=h(Ft),$(So.$$.fragment,Ft),Gb=h(Ft),Ze=n(Ft,"DIV",{class:!0});var Yt=r(Ze);$(na.$$.fragment,Yt),Xb=h(Yt),Fs=n(Yt,"P",{});var wl=r(Fs);Yb=i(wl,"The "),ol=n(wl,"A",{href:!0});var Vy=r(ol);Zb=i(Vy,"TFDistilBertForTokenClassification"),Vy.forEach(t),ev=i(wl," forward method, overrides the "),zd=n(wl,"CODE",{});var Ky=r(zd);tv=i(Ky,"__call__"),Ky.forEach(t),sv=i(wl," special method."),wl.forEach(t),ov=h(Yt),$(Io.$$.fragment,Yt),nv=h(Yt),$(Wo.$$.fragment,Yt),rv=h(Yt),$(Qo.$$.fragment,Yt),Yt.forEach(t),Ft.forEach(t),oh=h(s),Bs=n(s,"H2",{class:!0});var tm=r(Bs);Ro=n(tm,"A",{id:!0,class:!0,href:!0});var Jy=r(Ro);jd=n(Jy,"SPAN",{});var Gy=r(jd);$(ra.$$.fragment,Gy),Gy.forEach(t),Jy.forEach(t),av=h(tm),Cd=n(tm,"SPAN",{});var Xy=r(Cd);iv=i(Xy,"TFDistilBertForQuestionAnswering"),Xy.forEach(t),tm.forEach(t),nh=h(s),Ie=n(s,"DIV",{class:!0});var Bt=r(Ie);$(aa.$$.fragment,Bt),lv=h(Bt),xs=n(Bt,"P",{});var yl=r(xs);dv=i(yl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=n(yl,"CODE",{});var Yy=r(qd);cv=i(Yy,"span start logits"),Yy.forEach(t),pv=i(yl," and "),Pd=n(yl,"CODE",{});var Zy=r(Pd);hv=i(Zy,"span end logits"),Zy.forEach(t),mv=i(yl,")."),yl.forEach(t),uv=h(Bt),ia=n(Bt,"P",{});var sm=r(ia);fv=i(sm,"This model inherits from "),nl=n(sm,"A",{href:!0});var e1=r(nl);gv=i(e1,"TFPreTrainedModel"),e1.forEach(t),_v=i(sm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm.forEach(t),bv=h(Bt),la=n(Bt,"P",{});var om=r(la);vv=i(om,"This model is also a "),da=n(om,"A",{href:!0,rel:!0});var t1=r(da);kv=i(t1,"tf.keras.Model"),t1.forEach(t),Tv=i(om,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),om.forEach(t),$v=h(Bt),$(Uo.$$.fragment,Bt),wv=h(Bt),et=n(Bt,"DIV",{class:!0});var Zt=r(et);$(ca.$$.fragment,Zt),yv=h(Zt),Ms=n(Zt,"P",{});var Dl=r(Ms);Dv=i(Dl,"The "),rl=n(Dl,"A",{href:!0});var s1=r(rl);Fv=i(s1,"TFDistilBertForQuestionAnswering"),s1.forEach(t),Bv=i(Dl," forward method, overrides the "),Ad=n(Dl,"CODE",{});var o1=r(Ad);xv=i(o1,"__call__"),o1.forEach(t),Mv=i(Dl," special method."),Dl.forEach(t),Ev=h(Zt),$(Ho.$$.fragment,Zt),zv=h(Zt),$(Vo.$$.fragment,Zt),jv=h(Zt),$(Ko.$$.fragment,Zt),Zt.forEach(t),Bt.forEach(t),rh=h(s),Es=n(s,"H2",{class:!0});var nm=r(Es);Jo=n(nm,"A",{id:!0,class:!0,href:!0});var n1=r(Jo);Od=n(n1,"SPAN",{});var r1=r(Od);$(pa.$$.fragment,r1),r1.forEach(t),n1.forEach(t),Cv=h(nm),Nd=n(nm,"SPAN",{});var a1=r(Nd);qv=i(a1,"FlaxDistilBertModel"),a1.forEach(t),nm.forEach(t),ah=h(s),Me=n(s,"DIV",{class:!0});var st=r(Me);$(ha.$$.fragment,st),Pv=h(st),Ld=n(st,"P",{});var i1=r(Ld);Av=i(i1,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),i1.forEach(t),Ov=h(st),ma=n(st,"P",{});var rm=r(ma);Nv=i(rm,"This model inherits from "),al=n(rm,"A",{href:!0});var l1=r(al);Lv=i(l1,"FlaxPreTrainedModel"),l1.forEach(t),Sv=i(rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rm.forEach(t),Iv=h(st),ua=n(st,"P",{});var am=r(ua);Wv=i(am,"This model is also a Flax Linen "),fa=n(am,"A",{href:!0,rel:!0});var d1=r(fa);Qv=i(d1,"flax.linen.Module"),d1.forEach(t),Rv=i(am,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),am.forEach(t),Uv=h(st),Sd=n(st,"P",{});var c1=r(Sd);Hv=i(c1,"Finally, this model supports inherent JAX features such as:"),c1.forEach(t),Vv=h(st),Mt=n(st,"UL",{});var kn=r(Mt);Id=n(kn,"LI",{});var p1=r(Id);ga=n(p1,"A",{href:!0,rel:!0});var h1=r(ga);Kv=i(h1,"Just-In-Time (JIT) compilation"),h1.forEach(t),p1.forEach(t),Jv=h(kn),Wd=n(kn,"LI",{});var m1=r(Wd);_a=n(m1,"A",{href:!0,rel:!0});var u1=r(_a);Gv=i(u1,"Automatic Differentiation"),u1.forEach(t),m1.forEach(t),Xv=h(kn),Qd=n(kn,"LI",{});var f1=r(Qd);ba=n(f1,"A",{href:!0,rel:!0});var g1=r(ba);Yv=i(g1,"Vectorization"),g1.forEach(t),f1.forEach(t),Zv=h(kn),Rd=n(kn,"LI",{});var _1=r(Rd);va=n(_1,"A",{href:!0,rel:!0});var b1=r(va);ek=i(b1,"Parallelization"),b1.forEach(t),_1.forEach(t),kn.forEach(t),tk=h(st),gt=n(st,"DIV",{class:!0});var Tn=r(gt);$(ka.$$.fragment,Tn),sk=h(Tn),zs=n(Tn,"P",{});var Fl=r(zs);ok=i(Fl,"The "),Ud=n(Fl,"CODE",{});var v1=r(Ud);nk=i(v1,"FlaxDistilBertPreTrainedModel"),v1.forEach(t),rk=i(Fl," forward method, overrides the "),Hd=n(Fl,"CODE",{});var k1=r(Hd);ak=i(k1,"__call__"),k1.forEach(t),ik=i(Fl," special method."),Fl.forEach(t),lk=h(Tn),$(Go.$$.fragment,Tn),dk=h(Tn),$(Xo.$$.fragment,Tn),Tn.forEach(t),st.forEach(t),ih=h(s),js=n(s,"H2",{class:!0});var im=r(js);Yo=n(im,"A",{id:!0,class:!0,href:!0});var T1=r(Yo);Vd=n(T1,"SPAN",{});var $1=r(Vd);$(Ta.$$.fragment,$1),$1.forEach(t),T1.forEach(t),ck=h(im),Kd=n(im,"SPAN",{});var w1=r(Kd);pk=i(w1,"FlaxDistilBertForMaskedLM"),w1.forEach(t),im.forEach(t),lh=h(s),Ee=n(s,"DIV",{class:!0});var ot=r(Ee);$($a.$$.fragment,ot),hk=h(ot),wa=n(ot,"P",{});var lm=r(wa);mk=i(lm,"DistilBert Model with a "),Jd=n(lm,"CODE",{});var y1=r(Jd);uk=i(y1,"language modeling"),y1.forEach(t),fk=i(lm," head on top."),lm.forEach(t),gk=h(ot),ya=n(ot,"P",{});var dm=r(ya);_k=i(dm,"This model inherits from "),il=n(dm,"A",{href:!0});var D1=r(il);bk=i(D1,"FlaxPreTrainedModel"),D1.forEach(t),vk=i(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dm.forEach(t),kk=h(ot),Da=n(ot,"P",{});var cm=r(Da);Tk=i(cm,"This model is also a Flax Linen "),Fa=n(cm,"A",{href:!0,rel:!0});var F1=r(Fa);$k=i(F1,"flax.linen.Module"),F1.forEach(t),wk=i(cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cm.forEach(t),yk=h(ot),Gd=n(ot,"P",{});var B1=r(Gd);Dk=i(B1,"Finally, this model supports inherent JAX features such as:"),B1.forEach(t),Fk=h(ot),Et=n(ot,"UL",{});var $n=r(Et);Xd=n($n,"LI",{});var x1=r(Xd);Ba=n(x1,"A",{href:!0,rel:!0});var M1=r(Ba);Bk=i(M1,"Just-In-Time (JIT) compilation"),M1.forEach(t),x1.forEach(t),xk=h($n),Yd=n($n,"LI",{});var E1=r(Yd);xa=n(E1,"A",{href:!0,rel:!0});var z1=r(xa);Mk=i(z1,"Automatic Differentiation"),z1.forEach(t),E1.forEach(t),Ek=h($n),Zd=n($n,"LI",{});var j1=r(Zd);Ma=n(j1,"A",{href:!0,rel:!0});var C1=r(Ma);zk=i(C1,"Vectorization"),C1.forEach(t),j1.forEach(t),jk=h($n),ec=n($n,"LI",{});var q1=r(ec);Ea=n(q1,"A",{href:!0,rel:!0});var P1=r(Ea);Ck=i(P1,"Parallelization"),P1.forEach(t),q1.forEach(t),$n.forEach(t),qk=h(ot),_t=n(ot,"DIV",{class:!0});var wn=r(_t);$(za.$$.fragment,wn),Pk=h(wn),Cs=n(wn,"P",{});var Bl=r(Cs);Ak=i(Bl,"The "),tc=n(Bl,"CODE",{});var A1=r(tc);Ok=i(A1,"FlaxDistilBertPreTrainedModel"),A1.forEach(t),Nk=i(Bl," forward method, overrides the "),sc=n(Bl,"CODE",{});var O1=r(sc);Lk=i(O1,"__call__"),O1.forEach(t),Sk=i(Bl," special method."),Bl.forEach(t),Ik=h(wn),$(Zo.$$.fragment,wn),Wk=h(wn),$(en.$$.fragment,wn),wn.forEach(t),ot.forEach(t),dh=h(s),qs=n(s,"H2",{class:!0});var pm=r(qs);tn=n(pm,"A",{id:!0,class:!0,href:!0});var N1=r(tn);oc=n(N1,"SPAN",{});var L1=r(oc);$(ja.$$.fragment,L1),L1.forEach(t),N1.forEach(t),Qk=h(pm),nc=n(pm,"SPAN",{});var S1=r(nc);Rk=i(S1,"FlaxDistilBertForSequenceClassification"),S1.forEach(t),pm.forEach(t),ch=h(s),ze=n(s,"DIV",{class:!0});var nt=r(ze);$(Ca.$$.fragment,nt),Uk=h(nt),rc=n(nt,"P",{});var I1=r(rc);Hk=i(I1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),I1.forEach(t),Vk=h(nt),qa=n(nt,"P",{});var hm=r(qa);Kk=i(hm,"This model inherits from "),ll=n(hm,"A",{href:!0});var W1=r(ll);Jk=i(W1,"FlaxPreTrainedModel"),W1.forEach(t),Gk=i(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hm.forEach(t),Xk=h(nt),Pa=n(nt,"P",{});var mm=r(Pa);Yk=i(mm,"This model is also a Flax Linen "),Aa=n(mm,"A",{href:!0,rel:!0});var Q1=r(Aa);Zk=i(Q1,"flax.linen.Module"),Q1.forEach(t),eT=i(mm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mm.forEach(t),tT=h(nt),ac=n(nt,"P",{});var R1=r(ac);sT=i(R1,"Finally, this model supports inherent JAX features such as:"),R1.forEach(t),oT=h(nt),zt=n(nt,"UL",{});var yn=r(zt);ic=n(yn,"LI",{});var U1=r(ic);Oa=n(U1,"A",{href:!0,rel:!0});var H1=r(Oa);nT=i(H1,"Just-In-Time (JIT) compilation"),H1.forEach(t),U1.forEach(t),rT=h(yn),lc=n(yn,"LI",{});var V1=r(lc);Na=n(V1,"A",{href:!0,rel:!0});var K1=r(Na);aT=i(K1,"Automatic Differentiation"),K1.forEach(t),V1.forEach(t),iT=h(yn),dc=n(yn,"LI",{});var J1=r(dc);La=n(J1,"A",{href:!0,rel:!0});var G1=r(La);lT=i(G1,"Vectorization"),G1.forEach(t),J1.forEach(t),dT=h(yn),cc=n(yn,"LI",{});var X1=r(cc);Sa=n(X1,"A",{href:!0,rel:!0});var Y1=r(Sa);cT=i(Y1,"Parallelization"),Y1.forEach(t),X1.forEach(t),yn.forEach(t),pT=h(nt),bt=n(nt,"DIV",{class:!0});var Dn=r(bt);$(Ia.$$.fragment,Dn),hT=h(Dn),Ps=n(Dn,"P",{});var xl=r(Ps);mT=i(xl,"The "),pc=n(xl,"CODE",{});var Z1=r(pc);uT=i(Z1,"FlaxDistilBertPreTrainedModel"),Z1.forEach(t),fT=i(xl," forward method, overrides the "),hc=n(xl,"CODE",{});var e2=r(hc);gT=i(e2,"__call__"),e2.forEach(t),_T=i(xl," special method."),xl.forEach(t),bT=h(Dn),$(sn.$$.fragment,Dn),vT=h(Dn),$(on.$$.fragment,Dn),Dn.forEach(t),nt.forEach(t),ph=h(s),As=n(s,"H2",{class:!0});var um=r(As);nn=n(um,"A",{id:!0,class:!0,href:!0});var t2=r(nn);mc=n(t2,"SPAN",{});var s2=r(mc);$(Wa.$$.fragment,s2),s2.forEach(t),t2.forEach(t),kT=h(um),uc=n(um,"SPAN",{});var o2=r(uc);TT=i(o2,"FlaxDistilBertForMultipleChoice"),o2.forEach(t),um.forEach(t),hh=h(s),je=n(s,"DIV",{class:!0});var rt=r(je);$(Qa.$$.fragment,rt),$T=h(rt),fc=n(rt,"P",{});var n2=r(fc);wT=i(n2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n2.forEach(t),yT=h(rt),Ra=n(rt,"P",{});var fm=r(Ra);DT=i(fm,"This model inherits from "),dl=n(fm,"A",{href:!0});var r2=r(dl);FT=i(r2,"FlaxPreTrainedModel"),r2.forEach(t),BT=i(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),xT=h(rt),Ua=n(rt,"P",{});var gm=r(Ua);MT=i(gm,"This model is also a Flax Linen "),Ha=n(gm,"A",{href:!0,rel:!0});var a2=r(Ha);ET=i(a2,"flax.linen.Module"),a2.forEach(t),zT=i(gm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gm.forEach(t),jT=h(rt),gc=n(rt,"P",{});var i2=r(gc);CT=i(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),qT=h(rt),jt=n(rt,"UL",{});var Fn=r(jt);_c=n(Fn,"LI",{});var l2=r(_c);Va=n(l2,"A",{href:!0,rel:!0});var d2=r(Va);PT=i(d2,"Just-In-Time (JIT) compilation"),d2.forEach(t),l2.forEach(t),AT=h(Fn),bc=n(Fn,"LI",{});var c2=r(bc);Ka=n(c2,"A",{href:!0,rel:!0});var p2=r(Ka);OT=i(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),NT=h(Fn),vc=n(Fn,"LI",{});var h2=r(vc);Ja=n(h2,"A",{href:!0,rel:!0});var m2=r(Ja);LT=i(m2,"Vectorization"),m2.forEach(t),h2.forEach(t),ST=h(Fn),kc=n(Fn,"LI",{});var u2=r(kc);Ga=n(u2,"A",{href:!0,rel:!0});var f2=r(Ga);IT=i(f2,"Parallelization"),f2.forEach(t),u2.forEach(t),Fn.forEach(t),WT=h(rt),vt=n(rt,"DIV",{class:!0});var Bn=r(vt);$(Xa.$$.fragment,Bn),QT=h(Bn),Os=n(Bn,"P",{});var Ml=r(Os);RT=i(Ml,"The "),Tc=n(Ml,"CODE",{});var g2=r(Tc);UT=i(g2,"FlaxDistilBertPreTrainedModel"),g2.forEach(t),HT=i(Ml," forward method, overrides the "),$c=n(Ml,"CODE",{});var _2=r($c);VT=i(_2,"__call__"),_2.forEach(t),KT=i(Ml," special method."),Ml.forEach(t),JT=h(Bn),$(rn.$$.fragment,Bn),GT=h(Bn),$(an.$$.fragment,Bn),Bn.forEach(t),rt.forEach(t),mh=h(s),Ns=n(s,"H2",{class:!0});var _m=r(Ns);ln=n(_m,"A",{id:!0,class:!0,href:!0});var b2=r(ln);wc=n(b2,"SPAN",{});var v2=r(wc);$(Ya.$$.fragment,v2),v2.forEach(t),b2.forEach(t),XT=h(_m),yc=n(_m,"SPAN",{});var k2=r(yc);YT=i(k2,"FlaxDistilBertForTokenClassification"),k2.forEach(t),_m.forEach(t),uh=h(s),Ce=n(s,"DIV",{class:!0});var at=r(Ce);$(Za.$$.fragment,at),ZT=h(at),Dc=n(at,"P",{});var T2=r(Dc);e$=i(T2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),T2.forEach(t),t$=h(at),ei=n(at,"P",{});var bm=r(ei);s$=i(bm,"This model inherits from "),cl=n(bm,"A",{href:!0});var $2=r(cl);o$=i($2,"FlaxPreTrainedModel"),$2.forEach(t),n$=i(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bm.forEach(t),r$=h(at),ti=n(at,"P",{});var vm=r(ti);a$=i(vm,"This model is also a Flax Linen "),si=n(vm,"A",{href:!0,rel:!0});var w2=r(si);i$=i(w2,"flax.linen.Module"),w2.forEach(t),l$=i(vm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vm.forEach(t),d$=h(at),Fc=n(at,"P",{});var y2=r(Fc);c$=i(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),p$=h(at),Ct=n(at,"UL",{});var xn=r(Ct);Bc=n(xn,"LI",{});var D2=r(Bc);oi=n(D2,"A",{href:!0,rel:!0});var F2=r(oi);h$=i(F2,"Just-In-Time (JIT) compilation"),F2.forEach(t),D2.forEach(t),m$=h(xn),xc=n(xn,"LI",{});var B2=r(xc);ni=n(B2,"A",{href:!0,rel:!0});var x2=r(ni);u$=i(x2,"Automatic Differentiation"),x2.forEach(t),B2.forEach(t),f$=h(xn),Mc=n(xn,"LI",{});var M2=r(Mc);ri=n(M2,"A",{href:!0,rel:!0});var E2=r(ri);g$=i(E2,"Vectorization"),E2.forEach(t),M2.forEach(t),_$=h(xn),Ec=n(xn,"LI",{});var z2=r(Ec);ai=n(z2,"A",{href:!0,rel:!0});var j2=r(ai);b$=i(j2,"Parallelization"),j2.forEach(t),z2.forEach(t),xn.forEach(t),v$=h(at),kt=n(at,"DIV",{class:!0});var Mn=r(kt);$(ii.$$.fragment,Mn),k$=h(Mn),Ls=n(Mn,"P",{});var El=r(Ls);T$=i(El,"The "),zc=n(El,"CODE",{});var C2=r(zc);$$=i(C2,"FlaxDistilBertPreTrainedModel"),C2.forEach(t),w$=i(El," forward method, overrides the "),jc=n(El,"CODE",{});var q2=r(jc);y$=i(q2,"__call__"),q2.forEach(t),D$=i(El," special method."),El.forEach(t),F$=h(Mn),$(dn.$$.fragment,Mn),B$=h(Mn),$(cn.$$.fragment,Mn),Mn.forEach(t),at.forEach(t),fh=h(s),Ss=n(s,"H2",{class:!0});var km=r(Ss);pn=n(km,"A",{id:!0,class:!0,href:!0});var P2=r(pn);Cc=n(P2,"SPAN",{});var A2=r(Cc);$(li.$$.fragment,A2),A2.forEach(t),P2.forEach(t),x$=h(km),qc=n(km,"SPAN",{});var O2=r(qc);M$=i(O2,"FlaxDistilBertForQuestionAnswering"),O2.forEach(t),km.forEach(t),gh=h(s),qe=n(s,"DIV",{class:!0});var it=r(qe);$(di.$$.fragment,it),E$=h(it),Is=n(it,"P",{});var zl=r(Is);z$=i(zl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=n(zl,"CODE",{});var N2=r(Pc);j$=i(N2,"span start logits"),N2.forEach(t),C$=i(zl," and "),Ac=n(zl,"CODE",{});var L2=r(Ac);q$=i(L2,"span end logits"),L2.forEach(t),P$=i(zl,")."),zl.forEach(t),A$=h(it),ci=n(it,"P",{});var Tm=r(ci);O$=i(Tm,"This model inherits from "),pl=n(Tm,"A",{href:!0});var S2=r(pl);N$=i(S2,"FlaxPreTrainedModel"),S2.forEach(t),L$=i(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tm.forEach(t),S$=h(it),pi=n(it,"P",{});var $m=r(pi);I$=i($m,"This model is also a Flax Linen "),hi=n($m,"A",{href:!0,rel:!0});var I2=r(hi);W$=i(I2,"flax.linen.Module"),I2.forEach(t),Q$=i($m,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$m.forEach(t),R$=h(it),Oc=n(it,"P",{});var W2=r(Oc);U$=i(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),H$=h(it),qt=n(it,"UL",{});var En=r(qt);Nc=n(En,"LI",{});var Q2=r(Nc);mi=n(Q2,"A",{href:!0,rel:!0});var R2=r(mi);V$=i(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),Q2.forEach(t),K$=h(En),Lc=n(En,"LI",{});var U2=r(Lc);ui=n(U2,"A",{href:!0,rel:!0});var H2=r(ui);J$=i(H2,"Automatic Differentiation"),H2.forEach(t),U2.forEach(t),G$=h(En),Sc=n(En,"LI",{});var V2=r(Sc);fi=n(V2,"A",{href:!0,rel:!0});var K2=r(fi);X$=i(K2,"Vectorization"),K2.forEach(t),V2.forEach(t),Y$=h(En),Ic=n(En,"LI",{});var J2=r(Ic);gi=n(J2,"A",{href:!0,rel:!0});var G2=r(gi);Z$=i(G2,"Parallelization"),G2.forEach(t),J2.forEach(t),En.forEach(t),ew=h(it),Tt=n(it,"DIV",{class:!0});var zn=r(Tt);$(_i.$$.fragment,zn),tw=h(zn),Ws=n(zn,"P",{});var jl=r(Ws);sw=i(jl,"The "),Wc=n(jl,"CODE",{});var X2=r(Wc);ow=i(X2,"FlaxDistilBertPreTrainedModel"),X2.forEach(t),nw=i(jl," forward method, overrides the "),Qc=n(jl,"CODE",{});var Y2=r(Qc);rw=i(Y2,"__call__"),Y2.forEach(t),aw=i(jl," special method."),jl.forEach(t),iw=h(zn),$(hn.$$.fragment,zn),lw=h(zn),$(mn.$$.fragment,zn),zn.forEach(t),it.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(nF)),f(m,"id","distilbert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#distilbert"),f(c,"class","relative group"),f(G,"id","overview"),f(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(G,"href","#overview"),f(E,"class","relative group"),f(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),f(Y,"rel","nofollow"),f(j,"href","https://arxiv.org/abs/1910.01108"),f(j,"rel","nofollow"),f(jn,"href","https://huggingface.co/victorsanh"),f(jn,"rel","nofollow"),f(Cn,"href","https://huggingface.co/kamalkraj"),f(Cn,"rel","nofollow"),f(qn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),f(qn,"rel","nofollow"),f(Rs,"id","transformers.DistilBertConfig"),f(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rs,"href","#transformers.DistilBertConfig"),f(es,"class","relative group"),f(Fi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(Bi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(On,"href","https://huggingface.co/distilbert-base-uncased"),f(On,"rel","nofollow"),f(xi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Mi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.DistilBertTokenizer"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.DistilBertTokenizer"),f(ss,"class","relative group"),f(Ei,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),f(zi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ks,"id","transformers.DistilBertTokenizerFast"),f(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ks,"href","#transformers.DistilBertTokenizerFast"),f(os,"class","relative group"),f(Ci,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),f(qi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(Pi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.DistilBertModel"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.DistilBertModel"),f(ns,"class","relative group"),f(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Jn,"rel","nofollow"),f(Oi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.DistilBertForMaskedLM"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.DistilBertForMaskedLM"),f(as,"class","relative group"),f(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(sr,"rel","nofollow"),f(Li,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oo,"id","transformers.DistilBertForSequenceClassification"),f(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oo,"href","#transformers.DistilBertForSequenceClassification"),f(ls,"class","relative group"),f(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(lr,"rel","nofollow"),f(Ii,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(co,"id","transformers.DistilBertForMultipleChoice"),f(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(co,"href","#transformers.DistilBertForMultipleChoice"),f(cs,"class","relative group"),f(Wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ur,"rel","nofollow"),f(Qi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mo,"id","transformers.DistilBertForTokenClassification"),f(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mo,"href","#transformers.DistilBertForTokenClassification"),f(hs,"class","relative group"),f(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(kr,"rel","nofollow"),f(Ui,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.DistilBertForQuestionAnswering"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.DistilBertForQuestionAnswering"),f(us,"class","relative group"),f(Hi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fr,"rel","nofollow"),f(Vi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.TFDistilBertModel"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.TFDistilBertModel"),f(_s,"class","relative group"),f(Ki,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(jr,"rel","nofollow"),f(Ji,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"id","transformers.TFDistilBertForMaskedLM"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.TFDistilBertForMaskedLM"),f(vs,"class","relative group"),f(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Lr,"rel","nofollow"),f(Xi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"id","transformers.TFDistilBertForSequenceClassification"),f(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Eo,"href","#transformers.TFDistilBertForSequenceClassification"),f(Ts,"class","relative group"),f(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ur,"rel","nofollow"),f(Zi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.TFDistilBertForMultipleChoice"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.TFDistilBertForMultipleChoice"),f(ws,"class","relative group"),f(el,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xr,"rel","nofollow"),f(tl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.TFDistilBertForTokenClassification"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.TFDistilBertForTokenClassification"),f(Ds,"class","relative group"),f(sl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(ol,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.TFDistilBertForQuestionAnswering"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.TFDistilBertForQuestionAnswering"),f(Bs,"class","relative group"),f(nl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(da,"rel","nofollow"),f(rl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.FlaxDistilBertModel"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.FlaxDistilBertModel"),f(Es,"class","relative group"),f(al,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(fa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(fa,"rel","nofollow"),f(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ga,"rel","nofollow"),f(_a,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(_a,"rel","nofollow"),f(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ba,"rel","nofollow"),f(va,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(va,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yo,"id","transformers.FlaxDistilBertForMaskedLM"),f(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yo,"href","#transformers.FlaxDistilBertForMaskedLM"),f(js,"class","relative group"),f(il,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Fa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Fa,"rel","nofollow"),f(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ba,"rel","nofollow"),f(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xa,"rel","nofollow"),f(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ma,"rel","nofollow"),f(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ea,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.FlaxDistilBertForSequenceClassification"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),f(qs,"class","relative group"),f(ll,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Aa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Aa,"rel","nofollow"),f(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Oa,"rel","nofollow"),f(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Na,"rel","nofollow"),f(La,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(La,"rel","nofollow"),f(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Sa,"rel","nofollow"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.FlaxDistilBertForMultipleChoice"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.FlaxDistilBertForMultipleChoice"),f(As,"class","relative group"),f(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ha,"rel","nofollow"),f(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Va,"rel","nofollow"),f(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ka,"rel","nofollow"),f(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ja,"rel","nofollow"),f(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ga,"rel","nofollow"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.FlaxDistilBertForTokenClassification"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.FlaxDistilBertForTokenClassification"),f(Ns,"class","relative group"),f(cl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(si,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(si,"rel","nofollow"),f(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(oi,"rel","nofollow"),f(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ni,"rel","nofollow"),f(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ri,"rel","nofollow"),f(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ai,"rel","nofollow"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.FlaxDistilBertForQuestionAnswering"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),f(Ss,"class","relative group"),f(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(hi,"rel","nofollow"),f(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mi,"rel","nofollow"),f(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ui,"rel","nofollow"),f(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(fi,"rel","nofollow"),f(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gi,"rel","nofollow"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,d),b(s,g,v),b(s,c,v),e(c,m),e(m,_),w(l,_,null),e(c,u),e(c,x),e(x,he),b(s,V,v),b(s,E,v),e(E,G),e(G,S),w(X,S,null),e(E,me),e(E,I),e(I,ue),b(s,le,v),b(s,N,v),e(N,P),e(N,Y),e(Y,K),e(N,z),e(N,j),e(j,fe),e(N,W),e(N,se),e(se,ge),e(N,Q),b(s,de,v),b(s,ee,v),e(ee,A),b(s,ce,v),b(s,L,v),e(L,oe),e(oe,_e),b(s,q,v),b(s,te,v),e(te,R),b(s,pe,v),b(s,k,v),e(k,M),e(M,J),e(M,ve),e(ve,$e),e(M,O),e(M,ke),e(ke,we),e(M,ye),e(M,C),e(C,U),e(M,De),e(k,Fe),e(k,Z),e(Z,Be),e(Z,ne),e(ne,xe),e(Z,wm),b(s,xp,v),b(s,pt,v),e(pt,ym),e(pt,jn),e(jn,Dm),e(pt,Fm),e(pt,Cn),e(Cn,Bm),e(pt,xm),e(pt,qn),e(qn,Mm),e(pt,Em),b(s,Mp,v),b(s,es,v),e(es,Rs),e(Rs,Cl),w(Pn,Cl,null),e(es,zm),e(es,ql),e(ql,jm),b(s,Ep,v),b(s,lt,v),w(An,lt,null),e(lt,Cm),e(lt,xt),e(xt,qm),e(xt,Fi),e(Fi,Pm),e(xt,Am),e(xt,Bi),e(Bi,Om),e(xt,Nm),e(xt,On),e(On,Lm),e(xt,Sm),e(lt,Im),e(lt,ts),e(ts,Wm),e(ts,xi),e(xi,Qm),e(ts,Rm),e(ts,Mi),e(Mi,Um),e(ts,Hm),e(lt,Vm),w(Us,lt,null),b(s,zp,v),b(s,ss,v),e(ss,Hs),e(Hs,Pl),w(Nn,Pl,null),e(ss,Km),e(ss,Al),e(Al,Jm),b(s,jp,v),b(s,dt,v),w(Ln,dt,null),e(dt,Gm),e(dt,Ol),e(Ol,Xm),e(dt,Ym),e(dt,Vs),e(Vs,Ei),e(Ei,Zm),e(Vs,eu),e(Vs,zi),e(zi,tu),e(Vs,su),e(dt,ou),e(dt,Sn),e(Sn,nu),e(Sn,ji),e(ji,ru),e(Sn,au),b(s,Cp,v),b(s,os,v),e(os,Ks),e(Ks,Nl),w(In,Nl,null),e(os,iu),e(os,Ll),e(Ll,lu),b(s,qp,v),b(s,ct,v),w(Wn,ct,null),e(ct,du),e(ct,Qn),e(Qn,cu),e(Qn,Sl),e(Sl,pu),e(Qn,hu),e(ct,mu),e(ct,Js),e(Js,Ci),e(Ci,uu),e(Js,fu),e(Js,qi),e(qi,gu),e(Js,_u),e(ct,bu),e(ct,Rn),e(Rn,vu),e(Rn,Pi),e(Pi,ku),e(Rn,Tu),b(s,Pp,v),b(s,ns,v),e(ns,Gs),e(Gs,Il),w(Un,Il,null),e(ns,$u),e(ns,Wl),e(Wl,wu),b(s,Ap,v),b(s,We,v),w(Hn,We,null),e(We,yu),e(We,Ql),e(Ql,Du),e(We,Fu),e(We,Vn),e(Vn,Bu),e(Vn,Ai),e(Ai,xu),e(Vn,Mu),e(We,Eu),e(We,Kn),e(Kn,zu),e(Kn,Jn),e(Jn,ju),e(Kn,Cu),e(We,qu),e(We,ht),w(Gn,ht,null),e(ht,Pu),e(ht,rs),e(rs,Au),e(rs,Oi),e(Oi,Ou),e(rs,Nu),e(rs,Rl),e(Rl,Lu),e(rs,Su),e(ht,Iu),w(Xs,ht,null),e(ht,Wu),w(Ys,ht,null),b(s,Op,v),b(s,as,v),e(as,Zs),e(Zs,Ul),w(Xn,Ul,null),e(as,Qu),e(as,Hl),e(Hl,Ru),b(s,Np,v),b(s,Qe,v),w(Yn,Qe,null),e(Qe,Uu),e(Qe,Zn),e(Zn,Hu),e(Zn,Vl),e(Vl,Vu),e(Zn,Ku),e(Qe,Ju),e(Qe,er),e(er,Gu),e(er,Ni),e(Ni,Xu),e(er,Yu),e(Qe,Zu),e(Qe,tr),e(tr,ef),e(tr,sr),e(sr,tf),e(tr,sf),e(Qe,of),e(Qe,Ke),w(or,Ke,null),e(Ke,nf),e(Ke,is),e(is,rf),e(is,Li),e(Li,af),e(is,lf),e(is,Kl),e(Kl,df),e(is,cf),e(Ke,pf),w(eo,Ke,null),e(Ke,hf),w(to,Ke,null),e(Ke,mf),w(so,Ke,null),b(s,Lp,v),b(s,ls,v),e(ls,oo),e(oo,Jl),w(nr,Jl,null),e(ls,uf),e(ls,Gl),e(Gl,ff),b(s,Sp,v),b(s,Re,v),w(rr,Re,null),e(Re,gf),e(Re,Xl),e(Xl,_f),e(Re,bf),e(Re,ar),e(ar,vf),e(ar,Si),e(Si,kf),e(ar,Tf),e(Re,$f),e(Re,ir),e(ir,wf),e(ir,lr),e(lr,yf),e(ir,Df),e(Re,Ff),e(Re,Pe),w(dr,Pe,null),e(Pe,Bf),e(Pe,ds),e(ds,xf),e(ds,Ii),e(Ii,Mf),e(ds,Ef),e(ds,Yl),e(Yl,zf),e(ds,jf),e(Pe,Cf),w(no,Pe,null),e(Pe,qf),w(ro,Pe,null),e(Pe,Pf),w(ao,Pe,null),e(Pe,Af),w(io,Pe,null),e(Pe,Of),w(lo,Pe,null),b(s,Ip,v),b(s,cs,v),e(cs,co),e(co,Zl),w(cr,Zl,null),e(cs,Nf),e(cs,ed),e(ed,Lf),b(s,Wp,v),b(s,Ue,v),w(pr,Ue,null),e(Ue,Sf),e(Ue,td),e(td,If),e(Ue,Wf),e(Ue,hr),e(hr,Qf),e(hr,Wi),e(Wi,Rf),e(hr,Uf),e(Ue,Hf),e(Ue,mr),e(mr,Vf),e(mr,ur),e(ur,Kf),e(mr,Jf),e(Ue,Gf),e(Ue,mt),w(fr,mt,null),e(mt,Xf),e(mt,ps),e(ps,Yf),e(ps,Qi),e(Qi,Zf),e(ps,eg),e(ps,sd),e(sd,tg),e(ps,sg),e(mt,og),w(po,mt,null),e(mt,ng),w(ho,mt,null),b(s,Qp,v),b(s,hs,v),e(hs,mo),e(mo,od),w(gr,od,null),e(hs,rg),e(hs,nd),e(nd,ag),b(s,Rp,v),b(s,He,v),w(_r,He,null),e(He,ig),e(He,rd),e(rd,lg),e(He,dg),e(He,br),e(br,cg),e(br,Ri),e(Ri,pg),e(br,hg),e(He,mg),e(He,vr),e(vr,ug),e(vr,kr),e(kr,fg),e(vr,gg),e(He,_g),e(He,Je),w(Tr,Je,null),e(Je,bg),e(Je,ms),e(ms,vg),e(ms,Ui),e(Ui,kg),e(ms,Tg),e(ms,ad),e(ad,$g),e(ms,wg),e(Je,yg),w(uo,Je,null),e(Je,Dg),w(fo,Je,null),e(Je,Fg),w(go,Je,null),b(s,Up,v),b(s,us,v),e(us,_o),e(_o,id),w($r,id,null),e(us,Bg),e(us,ld),e(ld,xg),b(s,Hp,v),b(s,Ve,v),w(wr,Ve,null),e(Ve,Mg),e(Ve,fs),e(fs,Eg),e(fs,dd),e(dd,zg),e(fs,jg),e(fs,cd),e(cd,Cg),e(fs,qg),e(Ve,Pg),e(Ve,yr),e(yr,Ag),e(yr,Hi),e(Hi,Og),e(yr,Ng),e(Ve,Lg),e(Ve,Dr),e(Dr,Sg),e(Dr,Fr),e(Fr,Ig),e(Dr,Wg),e(Ve,Qg),e(Ve,Ge),w(Br,Ge,null),e(Ge,Rg),e(Ge,gs),e(gs,Ug),e(gs,Vi),e(Vi,Hg),e(gs,Vg),e(gs,pd),e(pd,Kg),e(gs,Jg),e(Ge,Gg),w(bo,Ge,null),e(Ge,Xg),w(vo,Ge,null),e(Ge,Yg),w(ko,Ge,null),b(s,Vp,v),b(s,_s,v),e(_s,To),e(To,hd),w(xr,hd,null),e(_s,Zg),e(_s,md),e(md,e_),b(s,Kp,v),b(s,Ae,v),w(Mr,Ae,null),e(Ae,t_),e(Ae,ud),e(ud,s_),e(Ae,o_),e(Ae,Er),e(Er,n_),e(Er,Ki),e(Ki,r_),e(Er,a_),e(Ae,i_),e(Ae,zr),e(zr,l_),e(zr,jr),e(jr,d_),e(zr,c_),e(Ae,p_),w($o,Ae,null),e(Ae,h_),e(Ae,ut),w(Cr,ut,null),e(ut,m_),e(ut,bs),e(bs,u_),e(bs,Ji),e(Ji,f_),e(bs,g_),e(bs,fd),e(fd,__),e(bs,b_),e(ut,v_),w(wo,ut,null),e(ut,k_),w(yo,ut,null),b(s,Jp,v),b(s,vs,v),e(vs,Do),e(Do,gd),w(qr,gd,null),e(vs,T_),e(vs,_d),e(_d,$_),b(s,Gp,v),b(s,Oe,v),w(Pr,Oe,null),e(Oe,w_),e(Oe,Ar),e(Ar,y_),e(Ar,bd),e(bd,D_),e(Ar,F_),e(Oe,B_),e(Oe,Or),e(Or,x_),e(Or,Gi),e(Gi,M_),e(Or,E_),e(Oe,z_),e(Oe,Nr),e(Nr,j_),e(Nr,Lr),e(Lr,C_),e(Nr,q_),e(Oe,P_),w(Fo,Oe,null),e(Oe,A_),e(Oe,Xe),w(Sr,Xe,null),e(Xe,O_),e(Xe,ks),e(ks,N_),e(ks,Xi),e(Xi,L_),e(ks,S_),e(ks,vd),e(vd,I_),e(ks,W_),e(Xe,Q_),w(Bo,Xe,null),e(Xe,R_),w(xo,Xe,null),e(Xe,U_),w(Mo,Xe,null),b(s,Xp,v),b(s,Ts,v),e(Ts,Eo),e(Eo,kd),w(Ir,kd,null),e(Ts,H_),e(Ts,Td),e(Td,V_),b(s,Yp,v),b(s,Ne,v),w(Wr,Ne,null),e(Ne,K_),e(Ne,$d),e($d,J_),e(Ne,G_),e(Ne,Qr),e(Qr,X_),e(Qr,Yi),e(Yi,Y_),e(Qr,Z_),e(Ne,eb),e(Ne,Rr),e(Rr,tb),e(Rr,Ur),e(Ur,sb),e(Rr,ob),e(Ne,nb),w(zo,Ne,null),e(Ne,rb),e(Ne,Ye),w(Hr,Ye,null),e(Ye,ab),e(Ye,$s),e($s,ib),e($s,Zi),e(Zi,lb),e($s,db),e($s,wd),e(wd,cb),e($s,pb),e(Ye,hb),w(jo,Ye,null),e(Ye,mb),w(Co,Ye,null),e(Ye,ub),w(qo,Ye,null),b(s,Zp,v),b(s,ws,v),e(ws,Po),e(Po,yd),w(Vr,yd,null),e(ws,fb),e(ws,Dd),e(Dd,gb),b(s,eh,v),b(s,Le,v),w(Kr,Le,null),e(Le,_b),e(Le,Fd),e(Fd,bb),e(Le,vb),e(Le,Jr),e(Jr,kb),e(Jr,el),e(el,Tb),e(Jr,$b),e(Le,wb),e(Le,Gr),e(Gr,yb),e(Gr,Xr),e(Xr,Db),e(Gr,Fb),e(Le,Bb),w(Ao,Le,null),e(Le,xb),e(Le,ft),w(Yr,ft,null),e(ft,Mb),e(ft,ys),e(ys,Eb),e(ys,tl),e(tl,zb),e(ys,jb),e(ys,Bd),e(Bd,Cb),e(ys,qb),e(ft,Pb),w(Oo,ft,null),e(ft,Ab),w(No,ft,null),b(s,th,v),b(s,Ds,v),e(Ds,Lo),e(Lo,xd),w(Zr,xd,null),e(Ds,Ob),e(Ds,Md),e(Md,Nb),b(s,sh,v),b(s,Se,v),w(ea,Se,null),e(Se,Lb),e(Se,Ed),e(Ed,Sb),e(Se,Ib),e(Se,ta),e(ta,Wb),e(ta,sl),e(sl,Qb),e(ta,Rb),e(Se,Ub),e(Se,sa),e(sa,Hb),e(sa,oa),e(oa,Vb),e(sa,Kb),e(Se,Jb),w(So,Se,null),e(Se,Gb),e(Se,Ze),w(na,Ze,null),e(Ze,Xb),e(Ze,Fs),e(Fs,Yb),e(Fs,ol),e(ol,Zb),e(Fs,ev),e(Fs,zd),e(zd,tv),e(Fs,sv),e(Ze,ov),w(Io,Ze,null),e(Ze,nv),w(Wo,Ze,null),e(Ze,rv),w(Qo,Ze,null),b(s,oh,v),b(s,Bs,v),e(Bs,Ro),e(Ro,jd),w(ra,jd,null),e(Bs,av),e(Bs,Cd),e(Cd,iv),b(s,nh,v),b(s,Ie,v),w(aa,Ie,null),e(Ie,lv),e(Ie,xs),e(xs,dv),e(xs,qd),e(qd,cv),e(xs,pv),e(xs,Pd),e(Pd,hv),e(xs,mv),e(Ie,uv),e(Ie,ia),e(ia,fv),e(ia,nl),e(nl,gv),e(ia,_v),e(Ie,bv),e(Ie,la),e(la,vv),e(la,da),e(da,kv),e(la,Tv),e(Ie,$v),w(Uo,Ie,null),e(Ie,wv),e(Ie,et),w(ca,et,null),e(et,yv),e(et,Ms),e(Ms,Dv),e(Ms,rl),e(rl,Fv),e(Ms,Bv),e(Ms,Ad),e(Ad,xv),e(Ms,Mv),e(et,Ev),w(Ho,et,null),e(et,zv),w(Vo,et,null),e(et,jv),w(Ko,et,null),b(s,rh,v),b(s,Es,v),e(Es,Jo),e(Jo,Od),w(pa,Od,null),e(Es,Cv),e(Es,Nd),e(Nd,qv),b(s,ah,v),b(s,Me,v),w(ha,Me,null),e(Me,Pv),e(Me,Ld),e(Ld,Av),e(Me,Ov),e(Me,ma),e(ma,Nv),e(ma,al),e(al,Lv),e(ma,Sv),e(Me,Iv),e(Me,ua),e(ua,Wv),e(ua,fa),e(fa,Qv),e(ua,Rv),e(Me,Uv),e(Me,Sd),e(Sd,Hv),e(Me,Vv),e(Me,Mt),e(Mt,Id),e(Id,ga),e(ga,Kv),e(Mt,Jv),e(Mt,Wd),e(Wd,_a),e(_a,Gv),e(Mt,Xv),e(Mt,Qd),e(Qd,ba),e(ba,Yv),e(Mt,Zv),e(Mt,Rd),e(Rd,va),e(va,ek),e(Me,tk),e(Me,gt),w(ka,gt,null),e(gt,sk),e(gt,zs),e(zs,ok),e(zs,Ud),e(Ud,nk),e(zs,rk),e(zs,Hd),e(Hd,ak),e(zs,ik),e(gt,lk),w(Go,gt,null),e(gt,dk),w(Xo,gt,null),b(s,ih,v),b(s,js,v),e(js,Yo),e(Yo,Vd),w(Ta,Vd,null),e(js,ck),e(js,Kd),e(Kd,pk),b(s,lh,v),b(s,Ee,v),w($a,Ee,null),e(Ee,hk),e(Ee,wa),e(wa,mk),e(wa,Jd),e(Jd,uk),e(wa,fk),e(Ee,gk),e(Ee,ya),e(ya,_k),e(ya,il),e(il,bk),e(ya,vk),e(Ee,kk),e(Ee,Da),e(Da,Tk),e(Da,Fa),e(Fa,$k),e(Da,wk),e(Ee,yk),e(Ee,Gd),e(Gd,Dk),e(Ee,Fk),e(Ee,Et),e(Et,Xd),e(Xd,Ba),e(Ba,Bk),e(Et,xk),e(Et,Yd),e(Yd,xa),e(xa,Mk),e(Et,Ek),e(Et,Zd),e(Zd,Ma),e(Ma,zk),e(Et,jk),e(Et,ec),e(ec,Ea),e(Ea,Ck),e(Ee,qk),e(Ee,_t),w(za,_t,null),e(_t,Pk),e(_t,Cs),e(Cs,Ak),e(Cs,tc),e(tc,Ok),e(Cs,Nk),e(Cs,sc),e(sc,Lk),e(Cs,Sk),e(_t,Ik),w(Zo,_t,null),e(_t,Wk),w(en,_t,null),b(s,dh,v),b(s,qs,v),e(qs,tn),e(tn,oc),w(ja,oc,null),e(qs,Qk),e(qs,nc),e(nc,Rk),b(s,ch,v),b(s,ze,v),w(Ca,ze,null),e(ze,Uk),e(ze,rc),e(rc,Hk),e(ze,Vk),e(ze,qa),e(qa,Kk),e(qa,ll),e(ll,Jk),e(qa,Gk),e(ze,Xk),e(ze,Pa),e(Pa,Yk),e(Pa,Aa),e(Aa,Zk),e(Pa,eT),e(ze,tT),e(ze,ac),e(ac,sT),e(ze,oT),e(ze,zt),e(zt,ic),e(ic,Oa),e(Oa,nT),e(zt,rT),e(zt,lc),e(lc,Na),e(Na,aT),e(zt,iT),e(zt,dc),e(dc,La),e(La,lT),e(zt,dT),e(zt,cc),e(cc,Sa),e(Sa,cT),e(ze,pT),e(ze,bt),w(Ia,bt,null),e(bt,hT),e(bt,Ps),e(Ps,mT),e(Ps,pc),e(pc,uT),e(Ps,fT),e(Ps,hc),e(hc,gT),e(Ps,_T),e(bt,bT),w(sn,bt,null),e(bt,vT),w(on,bt,null),b(s,ph,v),b(s,As,v),e(As,nn),e(nn,mc),w(Wa,mc,null),e(As,kT),e(As,uc),e(uc,TT),b(s,hh,v),b(s,je,v),w(Qa,je,null),e(je,$T),e(je,fc),e(fc,wT),e(je,yT),e(je,Ra),e(Ra,DT),e(Ra,dl),e(dl,FT),e(Ra,BT),e(je,xT),e(je,Ua),e(Ua,MT),e(Ua,Ha),e(Ha,ET),e(Ua,zT),e(je,jT),e(je,gc),e(gc,CT),e(je,qT),e(je,jt),e(jt,_c),e(_c,Va),e(Va,PT),e(jt,AT),e(jt,bc),e(bc,Ka),e(Ka,OT),e(jt,NT),e(jt,vc),e(vc,Ja),e(Ja,LT),e(jt,ST),e(jt,kc),e(kc,Ga),e(Ga,IT),e(je,WT),e(je,vt),w(Xa,vt,null),e(vt,QT),e(vt,Os),e(Os,RT),e(Os,Tc),e(Tc,UT),e(Os,HT),e(Os,$c),e($c,VT),e(Os,KT),e(vt,JT),w(rn,vt,null),e(vt,GT),w(an,vt,null),b(s,mh,v),b(s,Ns,v),e(Ns,ln),e(ln,wc),w(Ya,wc,null),e(Ns,XT),e(Ns,yc),e(yc,YT),b(s,uh,v),b(s,Ce,v),w(Za,Ce,null),e(Ce,ZT),e(Ce,Dc),e(Dc,e$),e(Ce,t$),e(Ce,ei),e(ei,s$),e(ei,cl),e(cl,o$),e(ei,n$),e(Ce,r$),e(Ce,ti),e(ti,a$),e(ti,si),e(si,i$),e(ti,l$),e(Ce,d$),e(Ce,Fc),e(Fc,c$),e(Ce,p$),e(Ce,Ct),e(Ct,Bc),e(Bc,oi),e(oi,h$),e(Ct,m$),e(Ct,xc),e(xc,ni),e(ni,u$),e(Ct,f$),e(Ct,Mc),e(Mc,ri),e(ri,g$),e(Ct,_$),e(Ct,Ec),e(Ec,ai),e(ai,b$),e(Ce,v$),e(Ce,kt),w(ii,kt,null),e(kt,k$),e(kt,Ls),e(Ls,T$),e(Ls,zc),e(zc,$$),e(Ls,w$),e(Ls,jc),e(jc,y$),e(Ls,D$),e(kt,F$),w(dn,kt,null),e(kt,B$),w(cn,kt,null),b(s,fh,v),b(s,Ss,v),e(Ss,pn),e(pn,Cc),w(li,Cc,null),e(Ss,x$),e(Ss,qc),e(qc,M$),b(s,gh,v),b(s,qe,v),w(di,qe,null),e(qe,E$),e(qe,Is),e(Is,z$),e(Is,Pc),e(Pc,j$),e(Is,C$),e(Is,Ac),e(Ac,q$),e(Is,P$),e(qe,A$),e(qe,ci),e(ci,O$),e(ci,pl),e(pl,N$),e(ci,L$),e(qe,S$),e(qe,pi),e(pi,I$),e(pi,hi),e(hi,W$),e(pi,Q$),e(qe,R$),e(qe,Oc),e(Oc,U$),e(qe,H$),e(qe,qt),e(qt,Nc),e(Nc,mi),e(mi,V$),e(qt,K$),e(qt,Lc),e(Lc,ui),e(ui,J$),e(qt,G$),e(qt,Sc),e(Sc,fi),e(fi,X$),e(qt,Y$),e(qt,Ic),e(Ic,gi),e(gi,Z$),e(qe,ew),e(qe,Tt),w(_i,Tt,null),e(Tt,tw),e(Tt,Ws),e(Ws,sw),e(Ws,Wc),e(Wc,ow),e(Ws,nw),e(Ws,Qc),e(Qc,rw),e(Ws,aw),e(Tt,iw),w(hn,Tt,null),e(Tt,lw),w(mn,Tt,null),_h=!0},p(s,[v]){const bi={};v&2&&(bi.$$scope={dirty:v,ctx:s}),Us.$set(bi);const Rc={};v&2&&(Rc.$$scope={dirty:v,ctx:s}),Xs.$set(Rc);const Uc={};v&2&&(Uc.$$scope={dirty:v,ctx:s}),Ys.$set(Uc);const Hc={};v&2&&(Hc.$$scope={dirty:v,ctx:s}),eo.$set(Hc);const vi={};v&2&&(vi.$$scope={dirty:v,ctx:s}),to.$set(vi);const Vc={};v&2&&(Vc.$$scope={dirty:v,ctx:s}),so.$set(Vc);const Kc={};v&2&&(Kc.$$scope={dirty:v,ctx:s}),no.$set(Kc);const Jc={};v&2&&(Jc.$$scope={dirty:v,ctx:s}),ro.$set(Jc);const Pt={};v&2&&(Pt.$$scope={dirty:v,ctx:s}),ao.$set(Pt);const Gc={};v&2&&(Gc.$$scope={dirty:v,ctx:s}),io.$set(Gc);const Xc={};v&2&&(Xc.$$scope={dirty:v,ctx:s}),lo.$set(Xc);const Yc={};v&2&&(Yc.$$scope={dirty:v,ctx:s}),po.$set(Yc);const Zc={};v&2&&(Zc.$$scope={dirty:v,ctx:s}),ho.$set(Zc);const ep={};v&2&&(ep.$$scope={dirty:v,ctx:s}),uo.$set(ep);const tp={};v&2&&(tp.$$scope={dirty:v,ctx:s}),fo.$set(tp);const sp={};v&2&&(sp.$$scope={dirty:v,ctx:s}),go.$set(sp);const ki={};v&2&&(ki.$$scope={dirty:v,ctx:s}),bo.$set(ki);const At={};v&2&&(At.$$scope={dirty:v,ctx:s}),vo.$set(At);const op={};v&2&&(op.$$scope={dirty:v,ctx:s}),ko.$set(op);const np={};v&2&&(np.$$scope={dirty:v,ctx:s}),$o.$set(np);const rp={};v&2&&(rp.$$scope={dirty:v,ctx:s}),wo.$set(rp);const Ti={};v&2&&(Ti.$$scope={dirty:v,ctx:s}),yo.$set(Ti);const ap={};v&2&&(ap.$$scope={dirty:v,ctx:s}),Fo.$set(ap);const Ot={};v&2&&(Ot.$$scope={dirty:v,ctx:s}),Bo.$set(Ot);const ip={};v&2&&(ip.$$scope={dirty:v,ctx:s}),xo.$set(ip);const lp={};v&2&&(lp.$$scope={dirty:v,ctx:s}),Mo.$set(lp);const dp={};v&2&&(dp.$$scope={dirty:v,ctx:s}),zo.$set(dp);const $i={};v&2&&($i.$$scope={dirty:v,ctx:s}),jo.$set($i);const cp={};v&2&&(cp.$$scope={dirty:v,ctx:s}),Co.$set(cp);const pp={};v&2&&(pp.$$scope={dirty:v,ctx:s}),qo.$set(pp);const hp={};v&2&&(hp.$$scope={dirty:v,ctx:s}),Ao.$set(hp);const Nt={};v&2&&(Nt.$$scope={dirty:v,ctx:s}),Oo.$set(Nt);const Lt={};v&2&&(Lt.$$scope={dirty:v,ctx:s}),No.$set(Lt);const mp={};v&2&&(mp.$$scope={dirty:v,ctx:s}),So.$set(mp);const up={};v&2&&(up.$$scope={dirty:v,ctx:s}),Io.$set(up);const fp={};v&2&&(fp.$$scope={dirty:v,ctx:s}),Wo.$set(fp);const Qs={};v&2&&(Qs.$$scope={dirty:v,ctx:s}),Qo.$set(Qs);const gp={};v&2&&(gp.$$scope={dirty:v,ctx:s}),Uo.$set(gp);const _p={};v&2&&(_p.$$scope={dirty:v,ctx:s}),Ho.$set(_p);const wi={};v&2&&(wi.$$scope={dirty:v,ctx:s}),Vo.$set(wi);const bp={};v&2&&(bp.$$scope={dirty:v,ctx:s}),Ko.$set(bp);const vp={};v&2&&(vp.$$scope={dirty:v,ctx:s}),Go.$set(vp);const kp={};v&2&&(kp.$$scope={dirty:v,ctx:s}),Xo.$set(kp);const St={};v&2&&(St.$$scope={dirty:v,ctx:s}),Zo.$set(St);const Tp={};v&2&&(Tp.$$scope={dirty:v,ctx:s}),en.$set(Tp);const un={};v&2&&(un.$$scope={dirty:v,ctx:s}),sn.$set(un);const $p={};v&2&&($p.$$scope={dirty:v,ctx:s}),on.$set($p);const wp={};v&2&&(wp.$$scope={dirty:v,ctx:s}),rn.$set(wp);const yi={};v&2&&(yi.$$scope={dirty:v,ctx:s}),an.$set(yi);const yp={};v&2&&(yp.$$scope={dirty:v,ctx:s}),dn.$set(yp);const Di={};v&2&&(Di.$$scope={dirty:v,ctx:s}),cn.$set(Di);const Dp={};v&2&&(Dp.$$scope={dirty:v,ctx:s}),hn.$set(Dp);const Fp={};v&2&&(Fp.$$scope={dirty:v,ctx:s}),mn.$set(Fp)},i(s){_h||(y(l.$$.fragment,s),y(X.$$.fragment,s),y(Pn.$$.fragment,s),y(An.$$.fragment,s),y(Us.$$.fragment,s),y(Nn.$$.fragment,s),y(Ln.$$.fragment,s),y(In.$$.fragment,s),y(Wn.$$.fragment,s),y(Un.$$.fragment,s),y(Hn.$$.fragment,s),y(Gn.$$.fragment,s),y(Xs.$$.fragment,s),y(Ys.$$.fragment,s),y(Xn.$$.fragment,s),y(Yn.$$.fragment,s),y(or.$$.fragment,s),y(eo.$$.fragment,s),y(to.$$.fragment,s),y(so.$$.fragment,s),y(nr.$$.fragment,s),y(rr.$$.fragment,s),y(dr.$$.fragment,s),y(no.$$.fragment,s),y(ro.$$.fragment,s),y(ao.$$.fragment,s),y(io.$$.fragment,s),y(lo.$$.fragment,s),y(cr.$$.fragment,s),y(pr.$$.fragment,s),y(fr.$$.fragment,s),y(po.$$.fragment,s),y(ho.$$.fragment,s),y(gr.$$.fragment,s),y(_r.$$.fragment,s),y(Tr.$$.fragment,s),y(uo.$$.fragment,s),y(fo.$$.fragment,s),y(go.$$.fragment,s),y($r.$$.fragment,s),y(wr.$$.fragment,s),y(Br.$$.fragment,s),y(bo.$$.fragment,s),y(vo.$$.fragment,s),y(ko.$$.fragment,s),y(xr.$$.fragment,s),y(Mr.$$.fragment,s),y($o.$$.fragment,s),y(Cr.$$.fragment,s),y(wo.$$.fragment,s),y(yo.$$.fragment,s),y(qr.$$.fragment,s),y(Pr.$$.fragment,s),y(Fo.$$.fragment,s),y(Sr.$$.fragment,s),y(Bo.$$.fragment,s),y(xo.$$.fragment,s),y(Mo.$$.fragment,s),y(Ir.$$.fragment,s),y(Wr.$$.fragment,s),y(zo.$$.fragment,s),y(Hr.$$.fragment,s),y(jo.$$.fragment,s),y(Co.$$.fragment,s),y(qo.$$.fragment,s),y(Vr.$$.fragment,s),y(Kr.$$.fragment,s),y(Ao.$$.fragment,s),y(Yr.$$.fragment,s),y(Oo.$$.fragment,s),y(No.$$.fragment,s),y(Zr.$$.fragment,s),y(ea.$$.fragment,s),y(So.$$.fragment,s),y(na.$$.fragment,s),y(Io.$$.fragment,s),y(Wo.$$.fragment,s),y(Qo.$$.fragment,s),y(ra.$$.fragment,s),y(aa.$$.fragment,s),y(Uo.$$.fragment,s),y(ca.$$.fragment,s),y(Ho.$$.fragment,s),y(Vo.$$.fragment,s),y(Ko.$$.fragment,s),y(pa.$$.fragment,s),y(ha.$$.fragment,s),y(ka.$$.fragment,s),y(Go.$$.fragment,s),y(Xo.$$.fragment,s),y(Ta.$$.fragment,s),y($a.$$.fragment,s),y(za.$$.fragment,s),y(Zo.$$.fragment,s),y(en.$$.fragment,s),y(ja.$$.fragment,s),y(Ca.$$.fragment,s),y(Ia.$$.fragment,s),y(sn.$$.fragment,s),y(on.$$.fragment,s),y(Wa.$$.fragment,s),y(Qa.$$.fragment,s),y(Xa.$$.fragment,s),y(rn.$$.fragment,s),y(an.$$.fragment,s),y(Ya.$$.fragment,s),y(Za.$$.fragment,s),y(ii.$$.fragment,s),y(dn.$$.fragment,s),y(cn.$$.fragment,s),y(li.$$.fragment,s),y(di.$$.fragment,s),y(_i.$$.fragment,s),y(hn.$$.fragment,s),y(mn.$$.fragment,s),_h=!0)},o(s){D(l.$$.fragment,s),D(X.$$.fragment,s),D(Pn.$$.fragment,s),D(An.$$.fragment,s),D(Us.$$.fragment,s),D(Nn.$$.fragment,s),D(Ln.$$.fragment,s),D(In.$$.fragment,s),D(Wn.$$.fragment,s),D(Un.$$.fragment,s),D(Hn.$$.fragment,s),D(Gn.$$.fragment,s),D(Xs.$$.fragment,s),D(Ys.$$.fragment,s),D(Xn.$$.fragment,s),D(Yn.$$.fragment,s),D(or.$$.fragment,s),D(eo.$$.fragment,s),D(to.$$.fragment,s),D(so.$$.fragment,s),D(nr.$$.fragment,s),D(rr.$$.fragment,s),D(dr.$$.fragment,s),D(no.$$.fragment,s),D(ro.$$.fragment,s),D(ao.$$.fragment,s),D(io.$$.fragment,s),D(lo.$$.fragment,s),D(cr.$$.fragment,s),D(pr.$$.fragment,s),D(fr.$$.fragment,s),D(po.$$.fragment,s),D(ho.$$.fragment,s),D(gr.$$.fragment,s),D(_r.$$.fragment,s),D(Tr.$$.fragment,s),D(uo.$$.fragment,s),D(fo.$$.fragment,s),D(go.$$.fragment,s),D($r.$$.fragment,s),D(wr.$$.fragment,s),D(Br.$$.fragment,s),D(bo.$$.fragment,s),D(vo.$$.fragment,s),D(ko.$$.fragment,s),D(xr.$$.fragment,s),D(Mr.$$.fragment,s),D($o.$$.fragment,s),D(Cr.$$.fragment,s),D(wo.$$.fragment,s),D(yo.$$.fragment,s),D(qr.$$.fragment,s),D(Pr.$$.fragment,s),D(Fo.$$.fragment,s),D(Sr.$$.fragment,s),D(Bo.$$.fragment,s),D(xo.$$.fragment,s),D(Mo.$$.fragment,s),D(Ir.$$.fragment,s),D(Wr.$$.fragment,s),D(zo.$$.fragment,s),D(Hr.$$.fragment,s),D(jo.$$.fragment,s),D(Co.$$.fragment,s),D(qo.$$.fragment,s),D(Vr.$$.fragment,s),D(Kr.$$.fragment,s),D(Ao.$$.fragment,s),D(Yr.$$.fragment,s),D(Oo.$$.fragment,s),D(No.$$.fragment,s),D(Zr.$$.fragment,s),D(ea.$$.fragment,s),D(So.$$.fragment,s),D(na.$$.fragment,s),D(Io.$$.fragment,s),D(Wo.$$.fragment,s),D(Qo.$$.fragment,s),D(ra.$$.fragment,s),D(aa.$$.fragment,s),D(Uo.$$.fragment,s),D(ca.$$.fragment,s),D(Ho.$$.fragment,s),D(Vo.$$.fragment,s),D(Ko.$$.fragment,s),D(pa.$$.fragment,s),D(ha.$$.fragment,s),D(ka.$$.fragment,s),D(Go.$$.fragment,s),D(Xo.$$.fragment,s),D(Ta.$$.fragment,s),D($a.$$.fragment,s),D(za.$$.fragment,s),D(Zo.$$.fragment,s),D(en.$$.fragment,s),D(ja.$$.fragment,s),D(Ca.$$.fragment,s),D(Ia.$$.fragment,s),D(sn.$$.fragment,s),D(on.$$.fragment,s),D(Wa.$$.fragment,s),D(Qa.$$.fragment,s),D(Xa.$$.fragment,s),D(rn.$$.fragment,s),D(an.$$.fragment,s),D(Ya.$$.fragment,s),D(Za.$$.fragment,s),D(ii.$$.fragment,s),D(dn.$$.fragment,s),D(cn.$$.fragment,s),D(li.$$.fragment,s),D(di.$$.fragment,s),D(_i.$$.fragment,s),D(hn.$$.fragment,s),D(mn.$$.fragment,s),_h=!1},d(s){t(d),s&&t(g),s&&t(c),F(l),s&&t(V),s&&t(E),F(X),s&&t(le),s&&t(N),s&&t(de),s&&t(ee),s&&t(ce),s&&t(L),s&&t(q),s&&t(te),s&&t(pe),s&&t(k),s&&t(xp),s&&t(pt),s&&t(Mp),s&&t(es),F(Pn),s&&t(Ep),s&&t(lt),F(An),F(Us),s&&t(zp),s&&t(ss),F(Nn),s&&t(jp),s&&t(dt),F(Ln),s&&t(Cp),s&&t(os),F(In),s&&t(qp),s&&t(ct),F(Wn),s&&t(Pp),s&&t(ns),F(Un),s&&t(Ap),s&&t(We),F(Hn),F(Gn),F(Xs),F(Ys),s&&t(Op),s&&t(as),F(Xn),s&&t(Np),s&&t(Qe),F(Yn),F(or),F(eo),F(to),F(so),s&&t(Lp),s&&t(ls),F(nr),s&&t(Sp),s&&t(Re),F(rr),F(dr),F(no),F(ro),F(ao),F(io),F(lo),s&&t(Ip),s&&t(cs),F(cr),s&&t(Wp),s&&t(Ue),F(pr),F(fr),F(po),F(ho),s&&t(Qp),s&&t(hs),F(gr),s&&t(Rp),s&&t(He),F(_r),F(Tr),F(uo),F(fo),F(go),s&&t(Up),s&&t(us),F($r),s&&t(Hp),s&&t(Ve),F(wr),F(Br),F(bo),F(vo),F(ko),s&&t(Vp),s&&t(_s),F(xr),s&&t(Kp),s&&t(Ae),F(Mr),F($o),F(Cr),F(wo),F(yo),s&&t(Jp),s&&t(vs),F(qr),s&&t(Gp),s&&t(Oe),F(Pr),F(Fo),F(Sr),F(Bo),F(xo),F(Mo),s&&t(Xp),s&&t(Ts),F(Ir),s&&t(Yp),s&&t(Ne),F(Wr),F(zo),F(Hr),F(jo),F(Co),F(qo),s&&t(Zp),s&&t(ws),F(Vr),s&&t(eh),s&&t(Le),F(Kr),F(Ao),F(Yr),F(Oo),F(No),s&&t(th),s&&t(Ds),F(Zr),s&&t(sh),s&&t(Se),F(ea),F(So),F(na),F(Io),F(Wo),F(Qo),s&&t(oh),s&&t(Bs),F(ra),s&&t(nh),s&&t(Ie),F(aa),F(Uo),F(ca),F(Ho),F(Vo),F(Ko),s&&t(rh),s&&t(Es),F(pa),s&&t(ah),s&&t(Me),F(ha),F(ka),F(Go),F(Xo),s&&t(ih),s&&t(js),F(Ta),s&&t(lh),s&&t(Ee),F($a),F(za),F(Zo),F(en),s&&t(dh),s&&t(qs),F(ja),s&&t(ch),s&&t(ze),F(Ca),F(Ia),F(sn),F(on),s&&t(ph),s&&t(As),F(Wa),s&&t(hh),s&&t(je),F(Qa),F(Xa),F(rn),F(an),s&&t(mh),s&&t(Ns),F(Ya),s&&t(uh),s&&t(Ce),F(Za),F(ii),F(dn),F(cn),s&&t(fh),s&&t(Ss),F(li),s&&t(gh),s&&t(qe),F(di),F(_i),F(hn),F(mn)}}}const nF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rF(B){return oD(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hF extends Z2{constructor(d){super();eD(this,d,rF,oF,tD,{})}}export{hF as default,nF as metadata};
