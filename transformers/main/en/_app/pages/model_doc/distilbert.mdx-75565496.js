import{S as Z2,i as eD,s as tD,e as s,k as p,w as T,t as a,M as oD,c as n,d as t,m as h,a as r,x as $,h as i,b as f,F as e,g as b,y as w,q as y,o as D,B as F,v as sD,L as ae}from"../../chunks/vendor-6b77c823.js";import{T as be}from"../../chunks/Tip-39098574.js";import{D as H}from"../../chunks/Docstring-1088f2fb.js";import{C as ie}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as re}from"../../chunks/ExampleCodeBlock-5212b321.js";function nD(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Examples:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function rD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function iD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function dD(B){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example of single-label classification:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function hD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){d=s("p"),g=a("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function uD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function fD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Examples:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function _D(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function vD(B){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function kD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function $D(B){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),fe=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function yD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function FD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),fe=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function BD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function MD(B){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ED(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),fe=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function zD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function CD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function qD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),fe=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function PD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function OD(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),fe=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function ND(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function SD(B){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ID(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),fe=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),m=n(k,"UL",{});var J=r(m);_=n(J,"LI",{});var ve=r(_);l=i(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){b(k,d,M),e(d,g),b(k,c,M),b(k,m,M),e(m,_),e(_,l),e(m,u),e(m,x),e(x,he),b(k,V,M),b(k,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(k,N,M),b(k,P,M),e(P,Y),b(k,K,M),b(k,z,M),e(z,j),e(j,fe),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(m),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function WD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function RD(B){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function UD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function VD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function JD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function XD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function ZD(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function tF(B){let d,g,c,m,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var x=r(c);m=i(x,"Module"),x.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function oF(B){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){D(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(m,l)}}}function sF(B){let d,g,c,m,_,l,u,x,he,V,E,G,S,X,me,I,ue,le,N,P,Y,K,z,j,fe,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe,k,M,J,ve,$e,O,ke,we,ye,C,U,De,Fe,Z,Be,ne,xe,wm,xp,pt,ym,jn,Dm,Fm,Cn,Bm,xm,qn,Mm,Em,Mp,eo,Uo,Cl,Pn,zm,ql,jm,Ep,lt,An,Cm,xt,qm,Fi,Pm,Am,Bi,Om,Nm,On,Lm,Sm,Im,to,Wm,xi,Qm,Rm,Mi,Um,Hm,Vm,Ho,zp,oo,Vo,Pl,Nn,Km,Al,Jm,jp,dt,Ln,Gm,Ol,Xm,Ym,Ko,Ei,Zm,eu,zi,tu,ou,su,Sn,nu,ji,ru,au,Cp,so,Jo,Nl,In,iu,Ll,lu,qp,ct,Wn,du,Qn,cu,Sl,pu,hu,mu,Go,Ci,uu,fu,qi,gu,_u,bu,Rn,vu,Pi,ku,Tu,Pp,no,Xo,Il,Un,$u,Wl,wu,Ap,We,Hn,yu,Ql,Du,Fu,Vn,Bu,Ai,xu,Mu,Eu,Kn,zu,Jn,ju,Cu,qu,ht,Gn,Pu,ro,Au,Oi,Ou,Nu,Rl,Lu,Su,Iu,Yo,Wu,Zo,Op,ao,es,Ul,Xn,Qu,Hl,Ru,Np,Qe,Yn,Uu,Zn,Hu,Vl,Vu,Ku,Ju,er,Gu,Ni,Xu,Yu,Zu,tr,ef,or,tf,of,sf,Ke,sr,nf,io,rf,Li,af,lf,Kl,df,cf,pf,ts,hf,os,mf,ss,Lp,lo,ns,Jl,nr,uf,Gl,ff,Sp,Re,rr,gf,Xl,_f,bf,ar,vf,Si,kf,Tf,$f,ir,wf,lr,yf,Df,Ff,Pe,dr,Bf,co,xf,Ii,Mf,Ef,Yl,zf,jf,Cf,rs,qf,as,Pf,is,Af,ls,Of,ds,Ip,po,cs,Zl,cr,Nf,ed,Lf,Wp,Ue,pr,Sf,td,If,Wf,hr,Qf,Wi,Rf,Uf,Hf,mr,Vf,ur,Kf,Jf,Gf,mt,fr,Xf,ho,Yf,Qi,Zf,eg,od,tg,og,sg,ps,ng,hs,Qp,mo,ms,sd,gr,rg,nd,ag,Rp,He,_r,ig,rd,lg,dg,br,cg,Ri,pg,hg,mg,vr,ug,kr,fg,gg,_g,Je,Tr,bg,uo,vg,Ui,kg,Tg,ad,$g,wg,yg,us,Dg,fs,Fg,gs,Up,fo,_s,id,$r,Bg,ld,xg,Hp,Ve,wr,Mg,go,Eg,dd,zg,jg,cd,Cg,qg,Pg,yr,Ag,Hi,Og,Ng,Lg,Dr,Sg,Fr,Ig,Wg,Qg,Ge,Br,Rg,_o,Ug,Vi,Hg,Vg,pd,Kg,Jg,Gg,bs,Xg,vs,Yg,ks,Vp,bo,Ts,hd,xr,Zg,md,e_,Kp,Ae,Mr,t_,ud,o_,s_,Er,n_,Ki,r_,a_,i_,zr,l_,jr,d_,c_,p_,$s,h_,ut,Cr,m_,vo,u_,Ji,f_,g_,fd,__,b_,v_,ws,k_,ys,Jp,ko,Ds,gd,qr,T_,_d,$_,Gp,Oe,Pr,w_,Ar,y_,bd,D_,F_,B_,Or,x_,Gi,M_,E_,z_,Nr,j_,Lr,C_,q_,P_,Fs,A_,Xe,Sr,O_,To,N_,Xi,L_,S_,vd,I_,W_,Q_,Bs,R_,xs,U_,Ms,Xp,$o,Es,kd,Ir,H_,Td,V_,Yp,Ne,Wr,K_,$d,J_,G_,Qr,X_,Yi,Y_,Z_,eb,Rr,tb,Ur,ob,sb,nb,zs,rb,Ye,Hr,ab,wo,ib,Zi,lb,db,wd,cb,pb,hb,js,mb,Cs,ub,qs,Zp,yo,Ps,yd,Vr,fb,Dd,gb,eh,Le,Kr,_b,Fd,bb,vb,Jr,kb,el,Tb,$b,wb,Gr,yb,Xr,Db,Fb,Bb,As,xb,ft,Yr,Mb,Do,Eb,tl,zb,jb,Bd,Cb,qb,Pb,Os,Ab,Ns,th,Fo,Ls,xd,Zr,Ob,Md,Nb,oh,Se,ea,Lb,Ed,Sb,Ib,ta,Wb,ol,Qb,Rb,Ub,oa,Hb,sa,Vb,Kb,Jb,Ss,Gb,Ze,na,Xb,Bo,Yb,sl,Zb,ev,zd,tv,ov,sv,Is,nv,Ws,rv,Qs,sh,xo,Rs,jd,ra,av,Cd,iv,nh,Ie,aa,lv,Mo,dv,qd,cv,pv,Pd,hv,mv,uv,ia,fv,nl,gv,_v,bv,la,vv,da,kv,Tv,$v,Us,wv,et,ca,yv,Eo,Dv,rl,Fv,Bv,Ad,xv,Mv,Ev,Hs,zv,Vs,jv,Ks,rh,zo,Js,Od,pa,Cv,Nd,qv,ah,Me,ha,Pv,Ld,Av,Ov,ma,Nv,al,Lv,Sv,Iv,ua,Wv,fa,Qv,Rv,Uv,Sd,Hv,Vv,Mt,Id,ga,Kv,Jv,Wd,_a,Gv,Xv,Qd,ba,Yv,Zv,Rd,va,ek,tk,gt,ka,ok,jo,sk,Ud,nk,rk,Hd,ak,ik,lk,Gs,dk,Xs,ih,Co,Ys,Vd,Ta,ck,Kd,pk,lh,Ee,$a,hk,wa,mk,Jd,uk,fk,gk,ya,_k,il,bk,vk,kk,Da,Tk,Fa,$k,wk,yk,Gd,Dk,Fk,Et,Xd,Ba,Bk,xk,Yd,xa,Mk,Ek,Zd,Ma,zk,jk,ec,Ea,Ck,qk,_t,za,Pk,qo,Ak,tc,Ok,Nk,oc,Lk,Sk,Ik,Zs,Wk,en,dh,Po,tn,sc,ja,Qk,nc,Rk,ch,ze,Ca,Uk,rc,Hk,Vk,qa,Kk,ll,Jk,Gk,Xk,Pa,Yk,Aa,Zk,eT,tT,ac,oT,sT,zt,ic,Oa,nT,rT,lc,Na,aT,iT,dc,La,lT,dT,cc,Sa,cT,pT,bt,Ia,hT,Ao,mT,pc,uT,fT,hc,gT,_T,bT,on,vT,sn,ph,Oo,nn,mc,Wa,kT,uc,TT,hh,je,Qa,$T,fc,wT,yT,Ra,DT,dl,FT,BT,xT,Ua,MT,Ha,ET,zT,jT,gc,CT,qT,jt,_c,Va,PT,AT,bc,Ka,OT,NT,vc,Ja,LT,ST,kc,Ga,IT,WT,vt,Xa,QT,No,RT,Tc,UT,HT,$c,VT,KT,JT,rn,GT,an,mh,Lo,ln,wc,Ya,XT,yc,YT,uh,Ce,Za,ZT,Dc,e$,t$,ei,o$,cl,s$,n$,r$,ti,a$,oi,i$,l$,d$,Fc,c$,p$,Ct,Bc,si,h$,m$,xc,ni,u$,f$,Mc,ri,g$,_$,Ec,ai,b$,v$,kt,ii,k$,So,T$,zc,$$,w$,jc,y$,D$,F$,dn,B$,cn,fh,Io,pn,Cc,li,x$,qc,M$,gh,qe,di,E$,Wo,z$,Pc,j$,C$,Ac,q$,P$,A$,ci,O$,pl,N$,L$,S$,pi,I$,hi,W$,Q$,R$,Oc,U$,H$,qt,Nc,mi,V$,K$,Lc,ui,J$,G$,Sc,fi,X$,Y$,Ic,gi,Z$,ew,Tt,_i,tw,Qo,ow,Wc,sw,nw,Qc,rw,aw,iw,hn,lw,mn,_h;return l=new Te({}),X=new Te({}),Pn=new Te({}),An=new H({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L45"}}),Ho=new re({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nD]},$$scope:{ctx:B}}}),Nn=new Te({}),Ln=new H({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L62"}}),In=new Te({}),Wn=new H({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L79"}}),Un=new Te({}),Hn=new H({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L453"}}),Gn=new H({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),Yo=new be({props:{$$slots:{default:[rD]},$$scope:{ctx:B}}}),Zo=new re({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aD]},$$scope:{ctx:B}}}),Xn=new Te({}),Yn=new H({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L581"}}),sr=new H({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),ts=new be({props:{$$slots:{default:[iD]},$$scope:{ctx:B}}}),os=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lD]},$$scope:{ctx:B}}}),ss=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dD]},$$scope:{ctx:B}}}),nr=new Te({}),rr=new H({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L687"}}),dr=new H({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),rs=new be({props:{$$slots:{default:[cD]},$$scope:{ctx:B}}}),as=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pD]},$$scope:{ctx:B}}}),is=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hD]},$$scope:{ctx:B}}}),ls=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[mD]},$$scope:{ctx:B}}}),ds=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[uD]},$$scope:{ctx:B}}}),cr=new Te({}),pr=new H({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1017"}}),fr=new H({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),ps=new be({props:{$$slots:{default:[fD]},$$scope:{ctx:B}}}),hs=new re({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gD]},$$scope:{ctx:B}}}),gr=new Te({}),_r=new H({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L922"}}),Tr=new H({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),us=new be({props:{$$slots:{default:[_D]},$$scope:{ctx:B}}}),fs=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[bD]},$$scope:{ctx:B}}}),gs=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[vD]},$$scope:{ctx:B}}}),$r=new Te({}),wr=new H({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L805"}}),Br=new H({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),bs=new be({props:{$$slots:{default:[kD]},$$scope:{ctx:B}}}),vs=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[TD]},$$scope:{ctx:B}}}),ks=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[$D]},$$scope:{ctx:B}}}),xr=new Te({}),Mr=new H({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L522"}}),$s=new be({props:{$$slots:{default:[wD]},$$scope:{ctx:B}}}),Cr=new H({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),ws=new be({props:{$$slots:{default:[yD]},$$scope:{ctx:B}}}),ys=new re({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[DD]},$$scope:{ctx:B}}}),qr=new Te({}),Pr=new H({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L609"}}),Fs=new be({props:{$$slots:{default:[FD]},$$scope:{ctx:B}}}),Sr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Bs=new be({props:{$$slots:{default:[BD]},$$scope:{ctx:B}}}),xs=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[xD]},$$scope:{ctx:B}}}),Ms=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[MD]},$$scope:{ctx:B}}}),Ir=new Te({}),Wr=new H({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L699"}}),zs=new be({props:{$$slots:{default:[ED]},$$scope:{ctx:B}}}),Hr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),js=new be({props:{$$slots:{default:[zD]},$$scope:{ctx:B}}}),Cs=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[jD]},$$scope:{ctx:B}}}),qs=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[CD]},$$scope:{ctx:B}}}),Vr=new Te({}),Kr=new H({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L862"}}),As=new be({props:{$$slots:{default:[qD]},$$scope:{ctx:B}}}),Yr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Os=new be({props:{$$slots:{default:[PD]},$$scope:{ctx:B}}}),Ns=new re({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AD]},$$scope:{ctx:B}}}),Zr=new Te({}),ea=new H({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L786"}}),Ss=new be({props:{$$slots:{default:[OD]},$$scope:{ctx:B}}}),na=new H({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Is=new be({props:{$$slots:{default:[ND]},$$scope:{ctx:B}}}),Ws=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[LD]},$$scope:{ctx:B}}}),Qs=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[SD]},$$scope:{ctx:B}}}),ra=new Te({}),aa=new H({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L987"}}),Us=new be({props:{$$slots:{default:[ID]},$$scope:{ctx:B}}}),ca=new H({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Hs=new be({props:{$$slots:{default:[WD]},$$scope:{ctx:B}}}),Vs=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QD]},$$scope:{ctx:B}}}),Ks=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RD]},$$scope:{ctx:B}}}),pa=new Te({}),ha=new H({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),ka=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),Gs=new be({props:{$$slots:{default:[UD]},$$scope:{ctx:B}}}),Xs=new re({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[HD]},$$scope:{ctx:B}}}),Ta=new Te({}),$a=new H({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),za=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),Zs=new be({props:{$$slots:{default:[VD]},$$scope:{ctx:B}}}),en=new re({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[KD]},$$scope:{ctx:B}}}),ja=new Te({}),Ca=new H({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),Ia=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),on=new be({props:{$$slots:{default:[JD]},$$scope:{ctx:B}}}),sn=new re({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GD]},$$scope:{ctx:B}}}),Wa=new Te({}),Qa=new H({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),Xa=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),rn=new be({props:{$$slots:{default:[XD]},$$scope:{ctx:B}}}),an=new re({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YD]},$$scope:{ctx:B}}}),Ya=new Te({}),Za=new H({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),ii=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),dn=new be({props:{$$slots:{default:[ZD]},$$scope:{ctx:B}}}),cn=new re({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:B}}}),li=new Te({}),di=new H({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),_i=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
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
`}}),hn=new be({props:{$$slots:{default:[tF]},$$scope:{ctx:B}}}),mn=new re({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[oF]},$$scope:{ctx:B}}}),{c(){d=s("meta"),g=p(),c=s("h1"),m=s("a"),_=s("span"),T(l.$$.fragment),u=p(),x=s("span"),he=a("DistilBERT"),V=p(),E=s("h2"),G=s("a"),S=s("span"),T(X.$$.fragment),me=p(),I=s("span"),ue=a("Overview"),le=p(),N=s("p"),P=a("The DistilBERT model was proposed in the blog post "),Y=s("a"),K=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),z=a(", and the paper "),j=s("a"),fe=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=s("em"),ge=a("bert-base-uncased"),Q=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),de=p(),ee=s("p"),A=a("The abstract from the paper is the following:"),ce=p(),L=s("p"),se=s("em"),_e=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),q=p(),te=s("p"),R=a("Tips:"),pe=p(),k=s("ul"),M=s("li"),J=a("DistilBERT doesn\u2019t have "),ve=s("code"),$e=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ke=s("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=s("code"),U=a("[SEP]"),De=a(")."),Fe=p(),Z=s("li"),Be=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=s("code"),xe=a("position_ids"),wm=a(` input). This could be added if
necessary though, just let us know if you need this option.`),xp=p(),pt=s("p"),ym=a("This model was contributed by "),jn=s("a"),Dm=a("victorsanh"),Fm=a(`. This model jax version was
contributed by `),Cn=s("a"),Bm=a("kamalkraj"),xm=a(". The original code can be found "),qn=s("a"),Mm=a("here"),Em=a("."),Mp=p(),eo=s("h2"),Uo=s("a"),Cl=s("span"),T(Pn.$$.fragment),zm=p(),ql=s("span"),jm=a("DistilBertConfig"),Ep=p(),lt=s("div"),T(An.$$.fragment),Cm=p(),xt=s("p"),qm=a("This is the configuration class to store the configuration of a "),Fi=s("a"),Pm=a("DistilBertModel"),Am=a(" or a "),Bi=s("a"),Om=a("TFDistilBertModel"),Nm=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=s("a"),Lm=a("distilbert-base-uncased"),Sm=a(" architecture."),Im=p(),to=s("p"),Wm=a("Configuration objects inherit from "),xi=s("a"),Qm=a("PretrainedConfig"),Rm=a(` and can be used to control the model outputs. Read the
documentation from `),Mi=s("a"),Um=a("PretrainedConfig"),Hm=a(" for more information."),Vm=p(),T(Ho.$$.fragment),zp=p(),oo=s("h2"),Vo=s("a"),Pl=s("span"),T(Nn.$$.fragment),Km=p(),Al=s("span"),Jm=a("DistilBertTokenizer"),jp=p(),dt=s("div"),T(Ln.$$.fragment),Gm=p(),Ol=s("p"),Xm=a("Construct a DistilBERT tokenizer."),Ym=p(),Ko=s("p"),Ei=s("a"),Zm=a("DistilBertTokenizer"),eu=a(" is identical to "),zi=s("a"),tu=a("BertTokenizer"),ou=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),su=p(),Sn=s("p"),nu=a("Refer to superclass "),ji=s("a"),ru=a("BertTokenizer"),au=a(" for usage examples and documentation concerning parameters."),Cp=p(),so=s("h2"),Jo=s("a"),Nl=s("span"),T(In.$$.fragment),iu=p(),Ll=s("span"),lu=a("DistilBertTokenizerFast"),qp=p(),ct=s("div"),T(Wn.$$.fragment),du=p(),Qn=s("p"),cu=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=s("em"),pu=a("tokenizers"),hu=a(" library)."),mu=p(),Go=s("p"),Ci=s("a"),uu=a("DistilBertTokenizerFast"),fu=a(" is identical to "),qi=s("a"),gu=a("BertTokenizerFast"),_u=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bu=p(),Rn=s("p"),vu=a("Refer to superclass "),Pi=s("a"),ku=a("BertTokenizerFast"),Tu=a(" for usage examples and documentation concerning parameters."),Pp=p(),no=s("h2"),Xo=s("a"),Il=s("span"),T(Un.$$.fragment),$u=p(),Wl=s("span"),wu=a("DistilBertModel"),Ap=p(),We=s("div"),T(Hn.$$.fragment),yu=p(),Ql=s("p"),Du=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Fu=p(),Vn=s("p"),Bu=a("This model inherits from "),Ai=s("a"),xu=a("PreTrainedModel"),Mu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=p(),Kn=s("p"),zu=a("This model is also a PyTorch "),Jn=s("a"),ju=a("torch.nn.Module"),Cu=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qu=p(),ht=s("div"),T(Gn.$$.fragment),Pu=p(),ro=s("p"),Au=a("The "),Oi=s("a"),Ou=a("DistilBertModel"),Nu=a(" forward method, overrides the "),Rl=s("code"),Lu=a("__call__"),Su=a(" special method."),Iu=p(),T(Yo.$$.fragment),Wu=p(),T(Zo.$$.fragment),Op=p(),ao=s("h2"),es=s("a"),Ul=s("span"),T(Xn.$$.fragment),Qu=p(),Hl=s("span"),Ru=a("DistilBertForMaskedLM"),Np=p(),Qe=s("div"),T(Yn.$$.fragment),Uu=p(),Zn=s("p"),Hu=a("DistilBert Model with a "),Vl=s("code"),Vu=a("masked language modeling"),Ku=a(" head on top."),Ju=p(),er=s("p"),Gu=a("This model inherits from "),Ni=s("a"),Xu=a("PreTrainedModel"),Yu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu=p(),tr=s("p"),ef=a("This model is also a PyTorch "),or=s("a"),tf=a("torch.nn.Module"),of=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sf=p(),Ke=s("div"),T(sr.$$.fragment),nf=p(),io=s("p"),rf=a("The "),Li=s("a"),af=a("DistilBertForMaskedLM"),lf=a(" forward method, overrides the "),Kl=s("code"),df=a("__call__"),cf=a(" special method."),pf=p(),T(ts.$$.fragment),hf=p(),T(os.$$.fragment),mf=p(),T(ss.$$.fragment),Lp=p(),lo=s("h2"),ns=s("a"),Jl=s("span"),T(nr.$$.fragment),uf=p(),Gl=s("span"),ff=a("DistilBertForSequenceClassification"),Sp=p(),Re=s("div"),T(rr.$$.fragment),gf=p(),Xl=s("p"),_f=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=p(),ar=s("p"),vf=a("This model inherits from "),Si=s("a"),kf=a("PreTrainedModel"),Tf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=p(),ir=s("p"),wf=a("This model is also a PyTorch "),lr=s("a"),yf=a("torch.nn.Module"),Df=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff=p(),Pe=s("div"),T(dr.$$.fragment),Bf=p(),co=s("p"),xf=a("The "),Ii=s("a"),Mf=a("DistilBertForSequenceClassification"),Ef=a(" forward method, overrides the "),Yl=s("code"),zf=a("__call__"),jf=a(" special method."),Cf=p(),T(rs.$$.fragment),qf=p(),T(as.$$.fragment),Pf=p(),T(is.$$.fragment),Af=p(),T(ls.$$.fragment),Of=p(),T(ds.$$.fragment),Ip=p(),po=s("h2"),cs=s("a"),Zl=s("span"),T(cr.$$.fragment),Nf=p(),ed=s("span"),Lf=a("DistilBertForMultipleChoice"),Wp=p(),Ue=s("div"),T(pr.$$.fragment),Sf=p(),td=s("p"),If=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wf=p(),hr=s("p"),Qf=a("This model inherits from "),Wi=s("a"),Rf=a("PreTrainedModel"),Uf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf=p(),mr=s("p"),Vf=a("This model is also a PyTorch "),ur=s("a"),Kf=a("torch.nn.Module"),Jf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=p(),mt=s("div"),T(fr.$$.fragment),Xf=p(),ho=s("p"),Yf=a("The "),Qi=s("a"),Zf=a("DistilBertForMultipleChoice"),eg=a(" forward method, overrides the "),od=s("code"),tg=a("__call__"),og=a(" special method."),sg=p(),T(ps.$$.fragment),ng=p(),T(hs.$$.fragment),Qp=p(),mo=s("h2"),ms=s("a"),sd=s("span"),T(gr.$$.fragment),rg=p(),nd=s("span"),ag=a("DistilBertForTokenClassification"),Rp=p(),He=s("div"),T(_r.$$.fragment),ig=p(),rd=s("p"),lg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=p(),br=s("p"),cg=a("This model inherits from "),Ri=s("a"),pg=a("PreTrainedModel"),hg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg=p(),vr=s("p"),ug=a("This model is also a PyTorch "),kr=s("a"),fg=a("torch.nn.Module"),gg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=p(),Je=s("div"),T(Tr.$$.fragment),bg=p(),uo=s("p"),vg=a("The "),Ui=s("a"),kg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),ad=s("code"),$g=a("__call__"),wg=a(" special method."),yg=p(),T(us.$$.fragment),Dg=p(),T(fs.$$.fragment),Fg=p(),T(gs.$$.fragment),Up=p(),fo=s("h2"),_s=s("a"),id=s("span"),T($r.$$.fragment),Bg=p(),ld=s("span"),xg=a("DistilBertForQuestionAnswering"),Hp=p(),Ve=s("div"),T(wr.$$.fragment),Mg=p(),go=s("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=s("code"),zg=a("span start logits"),jg=a(" and "),cd=s("code"),Cg=a("span end logits"),qg=a(")."),Pg=p(),yr=s("p"),Ag=a("This model inherits from "),Hi=s("a"),Og=a("PreTrainedModel"),Ng=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=p(),Dr=s("p"),Sg=a("This model is also a PyTorch "),Fr=s("a"),Ig=a("torch.nn.Module"),Wg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=p(),Ge=s("div"),T(Br.$$.fragment),Rg=p(),_o=s("p"),Ug=a("The "),Vi=s("a"),Hg=a("DistilBertForQuestionAnswering"),Vg=a(" forward method, overrides the "),pd=s("code"),Kg=a("__call__"),Jg=a(" special method."),Gg=p(),T(bs.$$.fragment),Xg=p(),T(vs.$$.fragment),Yg=p(),T(ks.$$.fragment),Vp=p(),bo=s("h2"),Ts=s("a"),hd=s("span"),T(xr.$$.fragment),Zg=p(),md=s("span"),e_=a("TFDistilBertModel"),Kp=p(),Ae=s("div"),T(Mr.$$.fragment),t_=p(),ud=s("p"),o_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),s_=p(),Er=s("p"),n_=a("This model inherits from "),Ki=s("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=p(),zr=s("p"),l_=a("This model is also a "),jr=s("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=p(),T($s.$$.fragment),h_=p(),ut=s("div"),T(Cr.$$.fragment),m_=p(),vo=s("p"),u_=a("The "),Ji=s("a"),f_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),fd=s("code"),__=a("__call__"),b_=a(" special method."),v_=p(),T(ws.$$.fragment),k_=p(),T(ys.$$.fragment),Jp=p(),ko=s("h2"),Ds=s("a"),gd=s("span"),T(qr.$$.fragment),T_=p(),_d=s("span"),$_=a("TFDistilBertForMaskedLM"),Gp=p(),Oe=s("div"),T(Pr.$$.fragment),w_=p(),Ar=s("p"),y_=a("DistilBert Model with a "),bd=s("code"),D_=a("masked language modeling"),F_=a(" head on top."),B_=p(),Or=s("p"),x_=a("This model inherits from "),Gi=s("a"),M_=a("TFPreTrainedModel"),E_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=p(),Nr=s("p"),j_=a("This model is also a "),Lr=s("a"),C_=a("tf.keras.Model"),q_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),P_=p(),T(Fs.$$.fragment),A_=p(),Xe=s("div"),T(Sr.$$.fragment),O_=p(),To=s("p"),N_=a("The "),Xi=s("a"),L_=a("TFDistilBertForMaskedLM"),S_=a(" forward method, overrides the "),vd=s("code"),I_=a("__call__"),W_=a(" special method."),Q_=p(),T(Bs.$$.fragment),R_=p(),T(xs.$$.fragment),U_=p(),T(Ms.$$.fragment),Xp=p(),$o=s("h2"),Es=s("a"),kd=s("span"),T(Ir.$$.fragment),H_=p(),Td=s("span"),V_=a("TFDistilBertForSequenceClassification"),Yp=p(),Ne=s("div"),T(Wr.$$.fragment),K_=p(),$d=s("p"),J_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=p(),Qr=s("p"),X_=a("This model inherits from "),Yi=s("a"),Y_=a("TFPreTrainedModel"),Z_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=p(),Rr=s("p"),tb=a("This model is also a "),Ur=s("a"),ob=a("tf.keras.Model"),sb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb=p(),T(zs.$$.fragment),rb=p(),Ye=s("div"),T(Hr.$$.fragment),ab=p(),wo=s("p"),ib=a("The "),Zi=s("a"),lb=a("TFDistilBertForSequenceClassification"),db=a(" forward method, overrides the "),wd=s("code"),cb=a("__call__"),pb=a(" special method."),hb=p(),T(js.$$.fragment),mb=p(),T(Cs.$$.fragment),ub=p(),T(qs.$$.fragment),Zp=p(),yo=s("h2"),Ps=s("a"),yd=s("span"),T(Vr.$$.fragment),fb=p(),Dd=s("span"),gb=a("TFDistilBertForMultipleChoice"),eh=p(),Le=s("div"),T(Kr.$$.fragment),_b=p(),Fd=s("p"),bb=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),vb=p(),Jr=s("p"),kb=a("This model inherits from "),el=s("a"),Tb=a("TFPreTrainedModel"),$b=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wb=p(),Gr=s("p"),yb=a("This model is also a "),Xr=s("a"),Db=a("tf.keras.Model"),Fb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bb=p(),T(As.$$.fragment),xb=p(),ft=s("div"),T(Yr.$$.fragment),Mb=p(),Do=s("p"),Eb=a("The "),tl=s("a"),zb=a("TFDistilBertForMultipleChoice"),jb=a(" forward method, overrides the "),Bd=s("code"),Cb=a("__call__"),qb=a(" special method."),Pb=p(),T(Os.$$.fragment),Ab=p(),T(Ns.$$.fragment),th=p(),Fo=s("h2"),Ls=s("a"),xd=s("span"),T(Zr.$$.fragment),Ob=p(),Md=s("span"),Nb=a("TFDistilBertForTokenClassification"),oh=p(),Se=s("div"),T(ea.$$.fragment),Lb=p(),Ed=s("p"),Sb=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ib=p(),ta=s("p"),Wb=a("This model inherits from "),ol=s("a"),Qb=a("TFPreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub=p(),oa=s("p"),Hb=a("This model is also a "),sa=s("a"),Vb=a("tf.keras.Model"),Kb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jb=p(),T(Ss.$$.fragment),Gb=p(),Ze=s("div"),T(na.$$.fragment),Xb=p(),Bo=s("p"),Yb=a("The "),sl=s("a"),Zb=a("TFDistilBertForTokenClassification"),ev=a(" forward method, overrides the "),zd=s("code"),tv=a("__call__"),ov=a(" special method."),sv=p(),T(Is.$$.fragment),nv=p(),T(Ws.$$.fragment),rv=p(),T(Qs.$$.fragment),sh=p(),xo=s("h2"),Rs=s("a"),jd=s("span"),T(ra.$$.fragment),av=p(),Cd=s("span"),iv=a("TFDistilBertForQuestionAnswering"),nh=p(),Ie=s("div"),T(aa.$$.fragment),lv=p(),Mo=s("p"),dv=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=s("code"),cv=a("span start logits"),pv=a(" and "),Pd=s("code"),hv=a("span end logits"),mv=a(")."),uv=p(),ia=s("p"),fv=a("This model inherits from "),nl=s("a"),gv=a("TFPreTrainedModel"),_v=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bv=p(),la=s("p"),vv=a("This model is also a "),da=s("a"),kv=a("tf.keras.Model"),Tv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$v=p(),T(Us.$$.fragment),wv=p(),et=s("div"),T(ca.$$.fragment),yv=p(),Eo=s("p"),Dv=a("The "),rl=s("a"),Fv=a("TFDistilBertForQuestionAnswering"),Bv=a(" forward method, overrides the "),Ad=s("code"),xv=a("__call__"),Mv=a(" special method."),Ev=p(),T(Hs.$$.fragment),zv=p(),T(Vs.$$.fragment),jv=p(),T(Ks.$$.fragment),rh=p(),zo=s("h2"),Js=s("a"),Od=s("span"),T(pa.$$.fragment),Cv=p(),Nd=s("span"),qv=a("FlaxDistilBertModel"),ah=p(),Me=s("div"),T(ha.$$.fragment),Pv=p(),Ld=s("p"),Av=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ov=p(),ma=s("p"),Nv=a("This model inherits from "),al=s("a"),Lv=a("FlaxPreTrainedModel"),Sv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iv=p(),ua=s("p"),Wv=a("This model is also a Flax Linen "),fa=s("a"),Qv=a("flax.linen.Module"),Rv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uv=p(),Sd=s("p"),Hv=a("Finally, this model supports inherent JAX features such as:"),Vv=p(),Mt=s("ul"),Id=s("li"),ga=s("a"),Kv=a("Just-In-Time (JIT) compilation"),Jv=p(),Wd=s("li"),_a=s("a"),Gv=a("Automatic Differentiation"),Xv=p(),Qd=s("li"),ba=s("a"),Yv=a("Vectorization"),Zv=p(),Rd=s("li"),va=s("a"),ek=a("Parallelization"),tk=p(),gt=s("div"),T(ka.$$.fragment),ok=p(),jo=s("p"),sk=a("The "),Ud=s("code"),nk=a("FlaxDistilBertPreTrainedModel"),rk=a(" forward method, overrides the "),Hd=s("code"),ak=a("__call__"),ik=a(" special method."),lk=p(),T(Gs.$$.fragment),dk=p(),T(Xs.$$.fragment),ih=p(),Co=s("h2"),Ys=s("a"),Vd=s("span"),T(Ta.$$.fragment),ck=p(),Kd=s("span"),pk=a("FlaxDistilBertForMaskedLM"),lh=p(),Ee=s("div"),T($a.$$.fragment),hk=p(),wa=s("p"),mk=a("DistilBert Model with a "),Jd=s("code"),uk=a("language modeling"),fk=a(" head on top."),gk=p(),ya=s("p"),_k=a("This model inherits from "),il=s("a"),bk=a("FlaxPreTrainedModel"),vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kk=p(),Da=s("p"),Tk=a("This model is also a Flax Linen "),Fa=s("a"),$k=a("flax.linen.Module"),wk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yk=p(),Gd=s("p"),Dk=a("Finally, this model supports inherent JAX features such as:"),Fk=p(),Et=s("ul"),Xd=s("li"),Ba=s("a"),Bk=a("Just-In-Time (JIT) compilation"),xk=p(),Yd=s("li"),xa=s("a"),Mk=a("Automatic Differentiation"),Ek=p(),Zd=s("li"),Ma=s("a"),zk=a("Vectorization"),jk=p(),ec=s("li"),Ea=s("a"),Ck=a("Parallelization"),qk=p(),_t=s("div"),T(za.$$.fragment),Pk=p(),qo=s("p"),Ak=a("The "),tc=s("code"),Ok=a("FlaxDistilBertPreTrainedModel"),Nk=a(" forward method, overrides the "),oc=s("code"),Lk=a("__call__"),Sk=a(" special method."),Ik=p(),T(Zs.$$.fragment),Wk=p(),T(en.$$.fragment),dh=p(),Po=s("h2"),tn=s("a"),sc=s("span"),T(ja.$$.fragment),Qk=p(),nc=s("span"),Rk=a("FlaxDistilBertForSequenceClassification"),ch=p(),ze=s("div"),T(Ca.$$.fragment),Uk=p(),rc=s("p"),Hk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vk=p(),qa=s("p"),Kk=a("This model inherits from "),ll=s("a"),Jk=a("FlaxPreTrainedModel"),Gk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xk=p(),Pa=s("p"),Yk=a("This model is also a Flax Linen "),Aa=s("a"),Zk=a("flax.linen.Module"),eT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tT=p(),ac=s("p"),oT=a("Finally, this model supports inherent JAX features such as:"),sT=p(),zt=s("ul"),ic=s("li"),Oa=s("a"),nT=a("Just-In-Time (JIT) compilation"),rT=p(),lc=s("li"),Na=s("a"),aT=a("Automatic Differentiation"),iT=p(),dc=s("li"),La=s("a"),lT=a("Vectorization"),dT=p(),cc=s("li"),Sa=s("a"),cT=a("Parallelization"),pT=p(),bt=s("div"),T(Ia.$$.fragment),hT=p(),Ao=s("p"),mT=a("The "),pc=s("code"),uT=a("FlaxDistilBertPreTrainedModel"),fT=a(" forward method, overrides the "),hc=s("code"),gT=a("__call__"),_T=a(" special method."),bT=p(),T(on.$$.fragment),vT=p(),T(sn.$$.fragment),ph=p(),Oo=s("h2"),nn=s("a"),mc=s("span"),T(Wa.$$.fragment),kT=p(),uc=s("span"),TT=a("FlaxDistilBertForMultipleChoice"),hh=p(),je=s("div"),T(Qa.$$.fragment),$T=p(),fc=s("p"),wT=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yT=p(),Ra=s("p"),DT=a("This model inherits from "),dl=s("a"),FT=a("FlaxPreTrainedModel"),BT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xT=p(),Ua=s("p"),MT=a("This model is also a Flax Linen "),Ha=s("a"),ET=a("flax.linen.Module"),zT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jT=p(),gc=s("p"),CT=a("Finally, this model supports inherent JAX features such as:"),qT=p(),jt=s("ul"),_c=s("li"),Va=s("a"),PT=a("Just-In-Time (JIT) compilation"),AT=p(),bc=s("li"),Ka=s("a"),OT=a("Automatic Differentiation"),NT=p(),vc=s("li"),Ja=s("a"),LT=a("Vectorization"),ST=p(),kc=s("li"),Ga=s("a"),IT=a("Parallelization"),WT=p(),vt=s("div"),T(Xa.$$.fragment),QT=p(),No=s("p"),RT=a("The "),Tc=s("code"),UT=a("FlaxDistilBertPreTrainedModel"),HT=a(" forward method, overrides the "),$c=s("code"),VT=a("__call__"),KT=a(" special method."),JT=p(),T(rn.$$.fragment),GT=p(),T(an.$$.fragment),mh=p(),Lo=s("h2"),ln=s("a"),wc=s("span"),T(Ya.$$.fragment),XT=p(),yc=s("span"),YT=a("FlaxDistilBertForTokenClassification"),uh=p(),Ce=s("div"),T(Za.$$.fragment),ZT=p(),Dc=s("p"),e$=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),t$=p(),ei=s("p"),o$=a("This model inherits from "),cl=s("a"),s$=a("FlaxPreTrainedModel"),n$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r$=p(),ti=s("p"),a$=a("This model is also a Flax Linen "),oi=s("a"),i$=a("flax.linen.Module"),l$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),d$=p(),Fc=s("p"),c$=a("Finally, this model supports inherent JAX features such as:"),p$=p(),Ct=s("ul"),Bc=s("li"),si=s("a"),h$=a("Just-In-Time (JIT) compilation"),m$=p(),xc=s("li"),ni=s("a"),u$=a("Automatic Differentiation"),f$=p(),Mc=s("li"),ri=s("a"),g$=a("Vectorization"),_$=p(),Ec=s("li"),ai=s("a"),b$=a("Parallelization"),v$=p(),kt=s("div"),T(ii.$$.fragment),k$=p(),So=s("p"),T$=a("The "),zc=s("code"),$$=a("FlaxDistilBertPreTrainedModel"),w$=a(" forward method, overrides the "),jc=s("code"),y$=a("__call__"),D$=a(" special method."),F$=p(),T(dn.$$.fragment),B$=p(),T(cn.$$.fragment),fh=p(),Io=s("h2"),pn=s("a"),Cc=s("span"),T(li.$$.fragment),x$=p(),qc=s("span"),M$=a("FlaxDistilBertForQuestionAnswering"),gh=p(),qe=s("div"),T(di.$$.fragment),E$=p(),Wo=s("p"),z$=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=s("code"),j$=a("span start logits"),C$=a(" and "),Ac=s("code"),q$=a("span end logits"),P$=a(")."),A$=p(),ci=s("p"),O$=a("This model inherits from "),pl=s("a"),N$=a("FlaxPreTrainedModel"),L$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),S$=p(),pi=s("p"),I$=a("This model is also a Flax Linen "),hi=s("a"),W$=a("flax.linen.Module"),Q$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),R$=p(),Oc=s("p"),U$=a("Finally, this model supports inherent JAX features such as:"),H$=p(),qt=s("ul"),Nc=s("li"),mi=s("a"),V$=a("Just-In-Time (JIT) compilation"),K$=p(),Lc=s("li"),ui=s("a"),J$=a("Automatic Differentiation"),G$=p(),Sc=s("li"),fi=s("a"),X$=a("Vectorization"),Y$=p(),Ic=s("li"),gi=s("a"),Z$=a("Parallelization"),ew=p(),Tt=s("div"),T(_i.$$.fragment),tw=p(),Qo=s("p"),ow=a("The "),Wc=s("code"),sw=a("FlaxDistilBertPreTrainedModel"),nw=a(" forward method, overrides the "),Qc=s("code"),rw=a("__call__"),aw=a(" special method."),iw=p(),T(hn.$$.fragment),lw=p(),T(mn.$$.fragment),this.h()},l(o){const v=oD('[data-svelte="svelte-1phssyn"]',document.head);d=n(v,"META",{name:!0,content:!0}),v.forEach(t),g=h(o),c=n(o,"H1",{class:!0});var bi=r(c);m=n(bi,"A",{id:!0,class:!0,href:!0});var Rc=r(m);_=n(Rc,"SPAN",{});var Uc=r(_);$(l.$$.fragment,Uc),Uc.forEach(t),Rc.forEach(t),u=h(bi),x=n(bi,"SPAN",{});var Hc=r(x);he=i(Hc,"DistilBERT"),Hc.forEach(t),bi.forEach(t),V=h(o),E=n(o,"H2",{class:!0});var vi=r(E);G=n(vi,"A",{id:!0,class:!0,href:!0});var Vc=r(G);S=n(Vc,"SPAN",{});var Kc=r(S);$(X.$$.fragment,Kc),Kc.forEach(t),Vc.forEach(t),me=h(vi),I=n(vi,"SPAN",{});var Jc=r(I);ue=i(Jc,"Overview"),Jc.forEach(t),vi.forEach(t),le=h(o),N=n(o,"P",{});var Pt=r(N);P=i(Pt,"The DistilBERT model was proposed in the blog post "),Y=n(Pt,"A",{href:!0,rel:!0});var Gc=r(Y);K=i(Gc,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),Gc.forEach(t),z=i(Pt,", and the paper "),j=n(Pt,"A",{href:!0,rel:!0});var Xc=r(j);fe=i(Xc,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),Xc.forEach(t),W=i(Pt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n(Pt,"EM",{});var Yc=r(oe);ge=i(Yc,"bert-base-uncased"),Yc.forEach(t),Q=i(Pt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),Pt.forEach(t),de=h(o),ee=n(o,"P",{});var Zc=r(ee);A=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),ce=h(o),L=n(o,"P",{});var ep=r(L);se=n(ep,"EM",{});var tp=r(se);_e=i(tp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),tp.forEach(t),ep.forEach(t),q=h(o),te=n(o,"P",{});var op=r(te);R=i(op,"Tips:"),op.forEach(t),pe=h(o),k=n(o,"UL",{});var ki=r(k);M=n(ki,"LI",{});var At=r(M);J=i(At,"DistilBERT doesn\u2019t have "),ve=n(At,"CODE",{});var sp=r(ve);$e=i(sp,"token_type_ids"),sp.forEach(t),O=i(At,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ke=n(At,"CODE",{});var np=r(ke);we=i(np,"tokenizer.sep_token"),np.forEach(t),ye=i(At," (or "),C=n(At,"CODE",{});var rp=r(C);U=i(rp,"[SEP]"),rp.forEach(t),De=i(At,")."),At.forEach(t),Fe=h(ki),Z=n(ki,"LI",{});var Ti=r(Z);Be=i(Ti,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(Ti,"CODE",{});var ap=r(ne);xe=i(ap,"position_ids"),ap.forEach(t),wm=i(Ti,` input). This could be added if
necessary though, just let us know if you need this option.`),Ti.forEach(t),ki.forEach(t),xp=h(o),pt=n(o,"P",{});var Ot=r(pt);ym=i(Ot,"This model was contributed by "),jn=n(Ot,"A",{href:!0,rel:!0});var ip=r(jn);Dm=i(ip,"victorsanh"),ip.forEach(t),Fm=i(Ot,`. This model jax version was
contributed by `),Cn=n(Ot,"A",{href:!0,rel:!0});var lp=r(Cn);Bm=i(lp,"kamalkraj"),lp.forEach(t),xm=i(Ot,". The original code can be found "),qn=n(Ot,"A",{href:!0,rel:!0});var dp=r(qn);Mm=i(dp,"here"),dp.forEach(t),Em=i(Ot,"."),Ot.forEach(t),Mp=h(o),eo=n(o,"H2",{class:!0});var $i=r(eo);Uo=n($i,"A",{id:!0,class:!0,href:!0});var cp=r(Uo);Cl=n(cp,"SPAN",{});var pp=r(Cl);$(Pn.$$.fragment,pp),pp.forEach(t),cp.forEach(t),zm=h($i),ql=n($i,"SPAN",{});var hp=r(ql);jm=i(hp,"DistilBertConfig"),hp.forEach(t),$i.forEach(t),Ep=h(o),lt=n(o,"DIV",{class:!0});var Nt=r(lt);$(An.$$.fragment,Nt),Cm=h(Nt),xt=n(Nt,"P",{});var Lt=r(xt);qm=i(Lt,"This is the configuration class to store the configuration of a "),Fi=n(Lt,"A",{href:!0});var mp=r(Fi);Pm=i(mp,"DistilBertModel"),mp.forEach(t),Am=i(Lt," or a "),Bi=n(Lt,"A",{href:!0});var up=r(Bi);Om=i(up,"TFDistilBertModel"),up.forEach(t),Nm=i(Lt,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=n(Lt,"A",{href:!0,rel:!0});var fp=r(On);Lm=i(fp,"distilbert-base-uncased"),fp.forEach(t),Sm=i(Lt," architecture."),Lt.forEach(t),Im=h(Nt),to=n(Nt,"P",{});var Ro=r(to);Wm=i(Ro,"Configuration objects inherit from "),xi=n(Ro,"A",{href:!0});var gp=r(xi);Qm=i(gp,"PretrainedConfig"),gp.forEach(t),Rm=i(Ro,` and can be used to control the model outputs. Read the
documentation from `),Mi=n(Ro,"A",{href:!0});var _p=r(Mi);Um=i(_p,"PretrainedConfig"),_p.forEach(t),Hm=i(Ro," for more information."),Ro.forEach(t),Vm=h(Nt),$(Ho.$$.fragment,Nt),Nt.forEach(t),zp=h(o),oo=n(o,"H2",{class:!0});var wi=r(oo);Vo=n(wi,"A",{id:!0,class:!0,href:!0});var bp=r(Vo);Pl=n(bp,"SPAN",{});var vp=r(Pl);$(Nn.$$.fragment,vp),vp.forEach(t),bp.forEach(t),Km=h(wi),Al=n(wi,"SPAN",{});var kp=r(Al);Jm=i(kp,"DistilBertTokenizer"),kp.forEach(t),wi.forEach(t),jp=h(o),dt=n(o,"DIV",{class:!0});var St=r(dt);$(Ln.$$.fragment,St),Gm=h(St),Ol=n(St,"P",{});var Tp=r(Ol);Xm=i(Tp,"Construct a DistilBERT tokenizer."),Tp.forEach(t),Ym=h(St),Ko=n(St,"P",{});var un=r(Ko);Ei=n(un,"A",{href:!0});var $p=r(Ei);Zm=i($p,"DistilBertTokenizer"),$p.forEach(t),eu=i(un," is identical to "),zi=n(un,"A",{href:!0});var wp=r(zi);tu=i(wp,"BertTokenizer"),wp.forEach(t),ou=i(un,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),un.forEach(t),su=h(St),Sn=n(St,"P",{});var yi=r(Sn);nu=i(yi,"Refer to superclass "),ji=n(yi,"A",{href:!0});var yp=r(ji);ru=i(yp,"BertTokenizer"),yp.forEach(t),au=i(yi," for usage examples and documentation concerning parameters."),yi.forEach(t),St.forEach(t),Cp=h(o),so=n(o,"H2",{class:!0});var Di=r(so);Jo=n(Di,"A",{id:!0,class:!0,href:!0});var Dp=r(Jo);Nl=n(Dp,"SPAN",{});var Fp=r(Nl);$(In.$$.fragment,Fp),Fp.forEach(t),Dp.forEach(t),iu=h(Di),Ll=n(Di,"SPAN",{});var dw=r(Ll);lu=i(dw,"DistilBertTokenizerFast"),dw.forEach(t),Di.forEach(t),qp=h(o),ct=n(o,"DIV",{class:!0});var fn=r(ct);$(Wn.$$.fragment,fn),du=h(fn),Qn=n(fn,"P",{});var bh=r(Qn);cu=i(bh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=n(bh,"EM",{});var cw=r(Sl);pu=i(cw,"tokenizers"),cw.forEach(t),hu=i(bh," library)."),bh.forEach(t),mu=h(fn),Go=n(fn,"P",{});var Bp=r(Go);Ci=n(Bp,"A",{href:!0});var pw=r(Ci);uu=i(pw,"DistilBertTokenizerFast"),pw.forEach(t),fu=i(Bp," is identical to "),qi=n(Bp,"A",{href:!0});var hw=r(qi);gu=i(hw,"BertTokenizerFast"),hw.forEach(t),_u=i(Bp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Bp.forEach(t),bu=h(fn),Rn=n(fn,"P",{});var vh=r(Rn);vu=i(vh,"Refer to superclass "),Pi=n(vh,"A",{href:!0});var mw=r(Pi);ku=i(mw,"BertTokenizerFast"),mw.forEach(t),Tu=i(vh," for usage examples and documentation concerning parameters."),vh.forEach(t),fn.forEach(t),Pp=h(o),no=n(o,"H2",{class:!0});var kh=r(no);Xo=n(kh,"A",{id:!0,class:!0,href:!0});var uw=r(Xo);Il=n(uw,"SPAN",{});var fw=r(Il);$(Un.$$.fragment,fw),fw.forEach(t),uw.forEach(t),$u=h(kh),Wl=n(kh,"SPAN",{});var gw=r(Wl);wu=i(gw,"DistilBertModel"),gw.forEach(t),kh.forEach(t),Ap=h(o),We=n(o,"DIV",{class:!0});var It=r(We);$(Hn.$$.fragment,It),yu=h(It),Ql=n(It,"P",{});var _w=r(Ql);Du=i(_w,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_w.forEach(t),Fu=h(It),Vn=n(It,"P",{});var Th=r(Vn);Bu=i(Th,"This model inherits from "),Ai=n(Th,"A",{href:!0});var bw=r(Ai);xu=i(bw,"PreTrainedModel"),bw.forEach(t),Mu=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Eu=h(It),Kn=n(It,"P",{});var $h=r(Kn);zu=i($h,"This model is also a PyTorch "),Jn=n($h,"A",{href:!0,rel:!0});var vw=r(Jn);ju=i(vw,"torch.nn.Module"),vw.forEach(t),Cu=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),qu=h(It),ht=n(It,"DIV",{class:!0});var gn=r(ht);$(Gn.$$.fragment,gn),Pu=h(gn),ro=n(gn,"P",{});var hl=r(ro);Au=i(hl,"The "),Oi=n(hl,"A",{href:!0});var kw=r(Oi);Ou=i(kw,"DistilBertModel"),kw.forEach(t),Nu=i(hl," forward method, overrides the "),Rl=n(hl,"CODE",{});var Tw=r(Rl);Lu=i(Tw,"__call__"),Tw.forEach(t),Su=i(hl," special method."),hl.forEach(t),Iu=h(gn),$(Yo.$$.fragment,gn),Wu=h(gn),$(Zo.$$.fragment,gn),gn.forEach(t),It.forEach(t),Op=h(o),ao=n(o,"H2",{class:!0});var wh=r(ao);es=n(wh,"A",{id:!0,class:!0,href:!0});var $w=r(es);Ul=n($w,"SPAN",{});var ww=r(Ul);$(Xn.$$.fragment,ww),ww.forEach(t),$w.forEach(t),Qu=h(wh),Hl=n(wh,"SPAN",{});var yw=r(Hl);Ru=i(yw,"DistilBertForMaskedLM"),yw.forEach(t),wh.forEach(t),Np=h(o),Qe=n(o,"DIV",{class:!0});var Wt=r(Qe);$(Yn.$$.fragment,Wt),Uu=h(Wt),Zn=n(Wt,"P",{});var yh=r(Zn);Hu=i(yh,"DistilBert Model with a "),Vl=n(yh,"CODE",{});var Dw=r(Vl);Vu=i(Dw,"masked language modeling"),Dw.forEach(t),Ku=i(yh," head on top."),yh.forEach(t),Ju=h(Wt),er=n(Wt,"P",{});var Dh=r(er);Gu=i(Dh,"This model inherits from "),Ni=n(Dh,"A",{href:!0});var Fw=r(Ni);Xu=i(Fw,"PreTrainedModel"),Fw.forEach(t),Yu=i(Dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh.forEach(t),Zu=h(Wt),tr=n(Wt,"P",{});var Fh=r(tr);ef=i(Fh,"This model is also a PyTorch "),or=n(Fh,"A",{href:!0,rel:!0});var Bw=r(or);tf=i(Bw,"torch.nn.Module"),Bw.forEach(t),of=i(Fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh.forEach(t),sf=h(Wt),Ke=n(Wt,"DIV",{class:!0});var Qt=r(Ke);$(sr.$$.fragment,Qt),nf=h(Qt),io=n(Qt,"P",{});var ml=r(io);rf=i(ml,"The "),Li=n(ml,"A",{href:!0});var xw=r(Li);af=i(xw,"DistilBertForMaskedLM"),xw.forEach(t),lf=i(ml," forward method, overrides the "),Kl=n(ml,"CODE",{});var Mw=r(Kl);df=i(Mw,"__call__"),Mw.forEach(t),cf=i(ml," special method."),ml.forEach(t),pf=h(Qt),$(ts.$$.fragment,Qt),hf=h(Qt),$(os.$$.fragment,Qt),mf=h(Qt),$(ss.$$.fragment,Qt),Qt.forEach(t),Wt.forEach(t),Lp=h(o),lo=n(o,"H2",{class:!0});var Bh=r(lo);ns=n(Bh,"A",{id:!0,class:!0,href:!0});var Ew=r(ns);Jl=n(Ew,"SPAN",{});var zw=r(Jl);$(nr.$$.fragment,zw),zw.forEach(t),Ew.forEach(t),uf=h(Bh),Gl=n(Bh,"SPAN",{});var jw=r(Gl);ff=i(jw,"DistilBertForSequenceClassification"),jw.forEach(t),Bh.forEach(t),Sp=h(o),Re=n(o,"DIV",{class:!0});var Rt=r(Re);$(rr.$$.fragment,Rt),gf=h(Rt),Xl=n(Rt,"P",{});var Cw=r(Xl);_f=i(Cw,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cw.forEach(t),bf=h(Rt),ar=n(Rt,"P",{});var xh=r(ar);vf=i(xh,"This model inherits from "),Si=n(xh,"A",{href:!0});var qw=r(Si);kf=i(qw,"PreTrainedModel"),qw.forEach(t),Tf=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),$f=h(Rt),ir=n(Rt,"P",{});var Mh=r(ir);wf=i(Mh,"This model is also a PyTorch "),lr=n(Mh,"A",{href:!0,rel:!0});var Pw=r(lr);yf=i(Pw,"torch.nn.Module"),Pw.forEach(t),Df=i(Mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh.forEach(t),Ff=h(Rt),Pe=n(Rt,"DIV",{class:!0});var tt=r(Pe);$(dr.$$.fragment,tt),Bf=h(tt),co=n(tt,"P",{});var ul=r(co);xf=i(ul,"The "),Ii=n(ul,"A",{href:!0});var Aw=r(Ii);Mf=i(Aw,"DistilBertForSequenceClassification"),Aw.forEach(t),Ef=i(ul," forward method, overrides the "),Yl=n(ul,"CODE",{});var Ow=r(Yl);zf=i(Ow,"__call__"),Ow.forEach(t),jf=i(ul," special method."),ul.forEach(t),Cf=h(tt),$(rs.$$.fragment,tt),qf=h(tt),$(as.$$.fragment,tt),Pf=h(tt),$(is.$$.fragment,tt),Af=h(tt),$(ls.$$.fragment,tt),Of=h(tt),$(ds.$$.fragment,tt),tt.forEach(t),Rt.forEach(t),Ip=h(o),po=n(o,"H2",{class:!0});var Eh=r(po);cs=n(Eh,"A",{id:!0,class:!0,href:!0});var Nw=r(cs);Zl=n(Nw,"SPAN",{});var Lw=r(Zl);$(cr.$$.fragment,Lw),Lw.forEach(t),Nw.forEach(t),Nf=h(Eh),ed=n(Eh,"SPAN",{});var Sw=r(ed);Lf=i(Sw,"DistilBertForMultipleChoice"),Sw.forEach(t),Eh.forEach(t),Wp=h(o),Ue=n(o,"DIV",{class:!0});var Ut=r(Ue);$(pr.$$.fragment,Ut),Sf=h(Ut),td=n(Ut,"P",{});var Iw=r(td);If=i(Iw,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iw.forEach(t),Wf=h(Ut),hr=n(Ut,"P",{});var zh=r(hr);Qf=i(zh,"This model inherits from "),Wi=n(zh,"A",{href:!0});var Ww=r(Wi);Rf=i(Ww,"PreTrainedModel"),Ww.forEach(t),Uf=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Hf=h(Ut),mr=n(Ut,"P",{});var jh=r(mr);Vf=i(jh,"This model is also a PyTorch "),ur=n(jh,"A",{href:!0,rel:!0});var Qw=r(ur);Kf=i(Qw,"torch.nn.Module"),Qw.forEach(t),Jf=i(jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh.forEach(t),Gf=h(Ut),mt=n(Ut,"DIV",{class:!0});var _n=r(mt);$(fr.$$.fragment,_n),Xf=h(_n),ho=n(_n,"P",{});var fl=r(ho);Yf=i(fl,"The "),Qi=n(fl,"A",{href:!0});var Rw=r(Qi);Zf=i(Rw,"DistilBertForMultipleChoice"),Rw.forEach(t),eg=i(fl," forward method, overrides the "),od=n(fl,"CODE",{});var Uw=r(od);tg=i(Uw,"__call__"),Uw.forEach(t),og=i(fl," special method."),fl.forEach(t),sg=h(_n),$(ps.$$.fragment,_n),ng=h(_n),$(hs.$$.fragment,_n),_n.forEach(t),Ut.forEach(t),Qp=h(o),mo=n(o,"H2",{class:!0});var Ch=r(mo);ms=n(Ch,"A",{id:!0,class:!0,href:!0});var Hw=r(ms);sd=n(Hw,"SPAN",{});var Vw=r(sd);$(gr.$$.fragment,Vw),Vw.forEach(t),Hw.forEach(t),rg=h(Ch),nd=n(Ch,"SPAN",{});var Kw=r(nd);ag=i(Kw,"DistilBertForTokenClassification"),Kw.forEach(t),Ch.forEach(t),Rp=h(o),He=n(o,"DIV",{class:!0});var Ht=r(He);$(_r.$$.fragment,Ht),ig=h(Ht),rd=n(Ht,"P",{});var Jw=r(rd);lg=i(Jw,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Jw.forEach(t),dg=h(Ht),br=n(Ht,"P",{});var qh=r(br);cg=i(qh,"This model inherits from "),Ri=n(qh,"A",{href:!0});var Gw=r(Ri);pg=i(Gw,"PreTrainedModel"),Gw.forEach(t),hg=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),mg=h(Ht),vr=n(Ht,"P",{});var Ph=r(vr);ug=i(Ph,"This model is also a PyTorch "),kr=n(Ph,"A",{href:!0,rel:!0});var Xw=r(kr);fg=i(Xw,"torch.nn.Module"),Xw.forEach(t),gg=i(Ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ph.forEach(t),_g=h(Ht),Je=n(Ht,"DIV",{class:!0});var Vt=r(Je);$(Tr.$$.fragment,Vt),bg=h(Vt),uo=n(Vt,"P",{});var gl=r(uo);vg=i(gl,"The "),Ui=n(gl,"A",{href:!0});var Yw=r(Ui);kg=i(Yw,"DistilBertForTokenClassification"),Yw.forEach(t),Tg=i(gl," forward method, overrides the "),ad=n(gl,"CODE",{});var Zw=r(ad);$g=i(Zw,"__call__"),Zw.forEach(t),wg=i(gl," special method."),gl.forEach(t),yg=h(Vt),$(us.$$.fragment,Vt),Dg=h(Vt),$(fs.$$.fragment,Vt),Fg=h(Vt),$(gs.$$.fragment,Vt),Vt.forEach(t),Ht.forEach(t),Up=h(o),fo=n(o,"H2",{class:!0});var Ah=r(fo);_s=n(Ah,"A",{id:!0,class:!0,href:!0});var ey=r(_s);id=n(ey,"SPAN",{});var ty=r(id);$($r.$$.fragment,ty),ty.forEach(t),ey.forEach(t),Bg=h(Ah),ld=n(Ah,"SPAN",{});var oy=r(ld);xg=i(oy,"DistilBertForQuestionAnswering"),oy.forEach(t),Ah.forEach(t),Hp=h(o),Ve=n(o,"DIV",{class:!0});var Kt=r(Ve);$(wr.$$.fragment,Kt),Mg=h(Kt),go=n(Kt,"P",{});var _l=r(go);Eg=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(_l,"CODE",{});var sy=r(dd);zg=i(sy,"span start logits"),sy.forEach(t),jg=i(_l," and "),cd=n(_l,"CODE",{});var ny=r(cd);Cg=i(ny,"span end logits"),ny.forEach(t),qg=i(_l,")."),_l.forEach(t),Pg=h(Kt),yr=n(Kt,"P",{});var Oh=r(yr);Ag=i(Oh,"This model inherits from "),Hi=n(Oh,"A",{href:!0});var ry=r(Hi);Og=i(ry,"PreTrainedModel"),ry.forEach(t),Ng=i(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),Lg=h(Kt),Dr=n(Kt,"P",{});var Nh=r(Dr);Sg=i(Nh,"This model is also a PyTorch "),Fr=n(Nh,"A",{href:!0,rel:!0});var ay=r(Fr);Ig=i(ay,"torch.nn.Module"),ay.forEach(t),Wg=i(Nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nh.forEach(t),Qg=h(Kt),Ge=n(Kt,"DIV",{class:!0});var Jt=r(Ge);$(Br.$$.fragment,Jt),Rg=h(Jt),_o=n(Jt,"P",{});var bl=r(_o);Ug=i(bl,"The "),Vi=n(bl,"A",{href:!0});var iy=r(Vi);Hg=i(iy,"DistilBertForQuestionAnswering"),iy.forEach(t),Vg=i(bl," forward method, overrides the "),pd=n(bl,"CODE",{});var ly=r(pd);Kg=i(ly,"__call__"),ly.forEach(t),Jg=i(bl," special method."),bl.forEach(t),Gg=h(Jt),$(bs.$$.fragment,Jt),Xg=h(Jt),$(vs.$$.fragment,Jt),Yg=h(Jt),$(ks.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),Vp=h(o),bo=n(o,"H2",{class:!0});var Lh=r(bo);Ts=n(Lh,"A",{id:!0,class:!0,href:!0});var dy=r(Ts);hd=n(dy,"SPAN",{});var cy=r(hd);$(xr.$$.fragment,cy),cy.forEach(t),dy.forEach(t),Zg=h(Lh),md=n(Lh,"SPAN",{});var py=r(md);e_=i(py,"TFDistilBertModel"),py.forEach(t),Lh.forEach(t),Kp=h(o),Ae=n(o,"DIV",{class:!0});var $t=r(Ae);$(Mr.$$.fragment,$t),t_=h($t),ud=n($t,"P",{});var hy=r(ud);o_=i(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),s_=h($t),Er=n($t,"P",{});var Sh=r(Er);n_=i(Sh,"This model inherits from "),Ki=n(Sh,"A",{href:!0});var my=r(Ki);r_=i(my,"TFPreTrainedModel"),my.forEach(t),a_=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),i_=h($t),zr=n($t,"P",{});var Ih=r(zr);l_=i(Ih,"This model is also a "),jr=n(Ih,"A",{href:!0,rel:!0});var uy=r(jr);d_=i(uy,"tf.keras.Model"),uy.forEach(t),c_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),p_=h($t),$($s.$$.fragment,$t),h_=h($t),ut=n($t,"DIV",{class:!0});var bn=r(ut);$(Cr.$$.fragment,bn),m_=h(bn),vo=n(bn,"P",{});var vl=r(vo);u_=i(vl,"The "),Ji=n(vl,"A",{href:!0});var fy=r(Ji);f_=i(fy,"TFDistilBertModel"),fy.forEach(t),g_=i(vl," forward method, overrides the "),fd=n(vl,"CODE",{});var gy=r(fd);__=i(gy,"__call__"),gy.forEach(t),b_=i(vl," special method."),vl.forEach(t),v_=h(bn),$(ws.$$.fragment,bn),k_=h(bn),$(ys.$$.fragment,bn),bn.forEach(t),$t.forEach(t),Jp=h(o),ko=n(o,"H2",{class:!0});var Wh=r(ko);Ds=n(Wh,"A",{id:!0,class:!0,href:!0});var _y=r(Ds);gd=n(_y,"SPAN",{});var by=r(gd);$(qr.$$.fragment,by),by.forEach(t),_y.forEach(t),T_=h(Wh),_d=n(Wh,"SPAN",{});var vy=r(_d);$_=i(vy,"TFDistilBertForMaskedLM"),vy.forEach(t),Wh.forEach(t),Gp=h(o),Oe=n(o,"DIV",{class:!0});var wt=r(Oe);$(Pr.$$.fragment,wt),w_=h(wt),Ar=n(wt,"P",{});var Qh=r(Ar);y_=i(Qh,"DistilBert Model with a "),bd=n(Qh,"CODE",{});var ky=r(bd);D_=i(ky,"masked language modeling"),ky.forEach(t),F_=i(Qh," head on top."),Qh.forEach(t),B_=h(wt),Or=n(wt,"P",{});var Rh=r(Or);x_=i(Rh,"This model inherits from "),Gi=n(Rh,"A",{href:!0});var Ty=r(Gi);M_=i(Ty,"TFPreTrainedModel"),Ty.forEach(t),E_=i(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),z_=h(wt),Nr=n(wt,"P",{});var Uh=r(Nr);j_=i(Uh,"This model is also a "),Lr=n(Uh,"A",{href:!0,rel:!0});var $y=r(Lr);C_=i($y,"tf.keras.Model"),$y.forEach(t),q_=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),P_=h(wt),$(Fs.$$.fragment,wt),A_=h(wt),Xe=n(wt,"DIV",{class:!0});var Gt=r(Xe);$(Sr.$$.fragment,Gt),O_=h(Gt),To=n(Gt,"P",{});var kl=r(To);N_=i(kl,"The "),Xi=n(kl,"A",{href:!0});var wy=r(Xi);L_=i(wy,"TFDistilBertForMaskedLM"),wy.forEach(t),S_=i(kl," forward method, overrides the "),vd=n(kl,"CODE",{});var yy=r(vd);I_=i(yy,"__call__"),yy.forEach(t),W_=i(kl," special method."),kl.forEach(t),Q_=h(Gt),$(Bs.$$.fragment,Gt),R_=h(Gt),$(xs.$$.fragment,Gt),U_=h(Gt),$(Ms.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Xp=h(o),$o=n(o,"H2",{class:!0});var Hh=r($o);Es=n(Hh,"A",{id:!0,class:!0,href:!0});var Dy=r(Es);kd=n(Dy,"SPAN",{});var Fy=r(kd);$(Ir.$$.fragment,Fy),Fy.forEach(t),Dy.forEach(t),H_=h(Hh),Td=n(Hh,"SPAN",{});var By=r(Td);V_=i(By,"TFDistilBertForSequenceClassification"),By.forEach(t),Hh.forEach(t),Yp=h(o),Ne=n(o,"DIV",{class:!0});var yt=r(Ne);$(Wr.$$.fragment,yt),K_=h(yt),$d=n(yt,"P",{});var xy=r($d);J_=i(xy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xy.forEach(t),G_=h(yt),Qr=n(yt,"P",{});var Vh=r(Qr);X_=i(Vh,"This model inherits from "),Yi=n(Vh,"A",{href:!0});var My=r(Yi);Y_=i(My,"TFPreTrainedModel"),My.forEach(t),Z_=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),eb=h(yt),Rr=n(yt,"P",{});var Kh=r(Rr);tb=i(Kh,"This model is also a "),Ur=n(Kh,"A",{href:!0,rel:!0});var Ey=r(Ur);ob=i(Ey,"tf.keras.Model"),Ey.forEach(t),sb=i(Kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kh.forEach(t),nb=h(yt),$(zs.$$.fragment,yt),rb=h(yt),Ye=n(yt,"DIV",{class:!0});var Xt=r(Ye);$(Hr.$$.fragment,Xt),ab=h(Xt),wo=n(Xt,"P",{});var Tl=r(wo);ib=i(Tl,"The "),Zi=n(Tl,"A",{href:!0});var zy=r(Zi);lb=i(zy,"TFDistilBertForSequenceClassification"),zy.forEach(t),db=i(Tl," forward method, overrides the "),wd=n(Tl,"CODE",{});var jy=r(wd);cb=i(jy,"__call__"),jy.forEach(t),pb=i(Tl," special method."),Tl.forEach(t),hb=h(Xt),$(js.$$.fragment,Xt),mb=h(Xt),$(Cs.$$.fragment,Xt),ub=h(Xt),$(qs.$$.fragment,Xt),Xt.forEach(t),yt.forEach(t),Zp=h(o),yo=n(o,"H2",{class:!0});var Jh=r(yo);Ps=n(Jh,"A",{id:!0,class:!0,href:!0});var Cy=r(Ps);yd=n(Cy,"SPAN",{});var qy=r(yd);$(Vr.$$.fragment,qy),qy.forEach(t),Cy.forEach(t),fb=h(Jh),Dd=n(Jh,"SPAN",{});var Py=r(Dd);gb=i(Py,"TFDistilBertForMultipleChoice"),Py.forEach(t),Jh.forEach(t),eh=h(o),Le=n(o,"DIV",{class:!0});var Dt=r(Le);$(Kr.$$.fragment,Dt),_b=h(Dt),Fd=n(Dt,"P",{});var Ay=r(Fd);bb=i(Ay,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ay.forEach(t),vb=h(Dt),Jr=n(Dt,"P",{});var Gh=r(Jr);kb=i(Gh,"This model inherits from "),el=n(Gh,"A",{href:!0});var Oy=r(el);Tb=i(Oy,"TFPreTrainedModel"),Oy.forEach(t),$b=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),wb=h(Dt),Gr=n(Dt,"P",{});var Xh=r(Gr);yb=i(Xh,"This model is also a "),Xr=n(Xh,"A",{href:!0,rel:!0});var Ny=r(Xr);Db=i(Ny,"tf.keras.Model"),Ny.forEach(t),Fb=i(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),Bb=h(Dt),$(As.$$.fragment,Dt),xb=h(Dt),ft=n(Dt,"DIV",{class:!0});var vn=r(ft);$(Yr.$$.fragment,vn),Mb=h(vn),Do=n(vn,"P",{});var $l=r(Do);Eb=i($l,"The "),tl=n($l,"A",{href:!0});var Ly=r(tl);zb=i(Ly,"TFDistilBertForMultipleChoice"),Ly.forEach(t),jb=i($l," forward method, overrides the "),Bd=n($l,"CODE",{});var Sy=r(Bd);Cb=i(Sy,"__call__"),Sy.forEach(t),qb=i($l," special method."),$l.forEach(t),Pb=h(vn),$(Os.$$.fragment,vn),Ab=h(vn),$(Ns.$$.fragment,vn),vn.forEach(t),Dt.forEach(t),th=h(o),Fo=n(o,"H2",{class:!0});var Yh=r(Fo);Ls=n(Yh,"A",{id:!0,class:!0,href:!0});var Iy=r(Ls);xd=n(Iy,"SPAN",{});var Wy=r(xd);$(Zr.$$.fragment,Wy),Wy.forEach(t),Iy.forEach(t),Ob=h(Yh),Md=n(Yh,"SPAN",{});var Qy=r(Md);Nb=i(Qy,"TFDistilBertForTokenClassification"),Qy.forEach(t),Yh.forEach(t),oh=h(o),Se=n(o,"DIV",{class:!0});var Ft=r(Se);$(ea.$$.fragment,Ft),Lb=h(Ft),Ed=n(Ft,"P",{});var Ry=r(Ed);Sb=i(Ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ry.forEach(t),Ib=h(Ft),ta=n(Ft,"P",{});var Zh=r(ta);Wb=i(Zh,"This model inherits from "),ol=n(Zh,"A",{href:!0});var Uy=r(ol);Qb=i(Uy,"TFPreTrainedModel"),Uy.forEach(t),Rb=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zh.forEach(t),Ub=h(Ft),oa=n(Ft,"P",{});var em=r(oa);Hb=i(em,"This model is also a "),sa=n(em,"A",{href:!0,rel:!0});var Hy=r(sa);Vb=i(Hy,"tf.keras.Model"),Hy.forEach(t),Kb=i(em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),em.forEach(t),Jb=h(Ft),$(Ss.$$.fragment,Ft),Gb=h(Ft),Ze=n(Ft,"DIV",{class:!0});var Yt=r(Ze);$(na.$$.fragment,Yt),Xb=h(Yt),Bo=n(Yt,"P",{});var wl=r(Bo);Yb=i(wl,"The "),sl=n(wl,"A",{href:!0});var Vy=r(sl);Zb=i(Vy,"TFDistilBertForTokenClassification"),Vy.forEach(t),ev=i(wl," forward method, overrides the "),zd=n(wl,"CODE",{});var Ky=r(zd);tv=i(Ky,"__call__"),Ky.forEach(t),ov=i(wl," special method."),wl.forEach(t),sv=h(Yt),$(Is.$$.fragment,Yt),nv=h(Yt),$(Ws.$$.fragment,Yt),rv=h(Yt),$(Qs.$$.fragment,Yt),Yt.forEach(t),Ft.forEach(t),sh=h(o),xo=n(o,"H2",{class:!0});var tm=r(xo);Rs=n(tm,"A",{id:!0,class:!0,href:!0});var Jy=r(Rs);jd=n(Jy,"SPAN",{});var Gy=r(jd);$(ra.$$.fragment,Gy),Gy.forEach(t),Jy.forEach(t),av=h(tm),Cd=n(tm,"SPAN",{});var Xy=r(Cd);iv=i(Xy,"TFDistilBertForQuestionAnswering"),Xy.forEach(t),tm.forEach(t),nh=h(o),Ie=n(o,"DIV",{class:!0});var Bt=r(Ie);$(aa.$$.fragment,Bt),lv=h(Bt),Mo=n(Bt,"P",{});var yl=r(Mo);dv=i(yl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=n(yl,"CODE",{});var Yy=r(qd);cv=i(Yy,"span start logits"),Yy.forEach(t),pv=i(yl," and "),Pd=n(yl,"CODE",{});var Zy=r(Pd);hv=i(Zy,"span end logits"),Zy.forEach(t),mv=i(yl,")."),yl.forEach(t),uv=h(Bt),ia=n(Bt,"P",{});var om=r(ia);fv=i(om,"This model inherits from "),nl=n(om,"A",{href:!0});var e1=r(nl);gv=i(e1,"TFPreTrainedModel"),e1.forEach(t),_v=i(om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om.forEach(t),bv=h(Bt),la=n(Bt,"P",{});var sm=r(la);vv=i(sm,"This model is also a "),da=n(sm,"A",{href:!0,rel:!0});var t1=r(da);kv=i(t1,"tf.keras.Model"),t1.forEach(t),Tv=i(sm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sm.forEach(t),$v=h(Bt),$(Us.$$.fragment,Bt),wv=h(Bt),et=n(Bt,"DIV",{class:!0});var Zt=r(et);$(ca.$$.fragment,Zt),yv=h(Zt),Eo=n(Zt,"P",{});var Dl=r(Eo);Dv=i(Dl,"The "),rl=n(Dl,"A",{href:!0});var o1=r(rl);Fv=i(o1,"TFDistilBertForQuestionAnswering"),o1.forEach(t),Bv=i(Dl," forward method, overrides the "),Ad=n(Dl,"CODE",{});var s1=r(Ad);xv=i(s1,"__call__"),s1.forEach(t),Mv=i(Dl," special method."),Dl.forEach(t),Ev=h(Zt),$(Hs.$$.fragment,Zt),zv=h(Zt),$(Vs.$$.fragment,Zt),jv=h(Zt),$(Ks.$$.fragment,Zt),Zt.forEach(t),Bt.forEach(t),rh=h(o),zo=n(o,"H2",{class:!0});var nm=r(zo);Js=n(nm,"A",{id:!0,class:!0,href:!0});var n1=r(Js);Od=n(n1,"SPAN",{});var r1=r(Od);$(pa.$$.fragment,r1),r1.forEach(t),n1.forEach(t),Cv=h(nm),Nd=n(nm,"SPAN",{});var a1=r(Nd);qv=i(a1,"FlaxDistilBertModel"),a1.forEach(t),nm.forEach(t),ah=h(o),Me=n(o,"DIV",{class:!0});var ot=r(Me);$(ha.$$.fragment,ot),Pv=h(ot),Ld=n(ot,"P",{});var i1=r(Ld);Av=i(i1,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),i1.forEach(t),Ov=h(ot),ma=n(ot,"P",{});var rm=r(ma);Nv=i(rm,"This model inherits from "),al=n(rm,"A",{href:!0});var l1=r(al);Lv=i(l1,"FlaxPreTrainedModel"),l1.forEach(t),Sv=i(rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rm.forEach(t),Iv=h(ot),ua=n(ot,"P",{});var am=r(ua);Wv=i(am,"This model is also a Flax Linen "),fa=n(am,"A",{href:!0,rel:!0});var d1=r(fa);Qv=i(d1,"flax.linen.Module"),d1.forEach(t),Rv=i(am,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),am.forEach(t),Uv=h(ot),Sd=n(ot,"P",{});var c1=r(Sd);Hv=i(c1,"Finally, this model supports inherent JAX features such as:"),c1.forEach(t),Vv=h(ot),Mt=n(ot,"UL",{});var kn=r(Mt);Id=n(kn,"LI",{});var p1=r(Id);ga=n(p1,"A",{href:!0,rel:!0});var h1=r(ga);Kv=i(h1,"Just-In-Time (JIT) compilation"),h1.forEach(t),p1.forEach(t),Jv=h(kn),Wd=n(kn,"LI",{});var m1=r(Wd);_a=n(m1,"A",{href:!0,rel:!0});var u1=r(_a);Gv=i(u1,"Automatic Differentiation"),u1.forEach(t),m1.forEach(t),Xv=h(kn),Qd=n(kn,"LI",{});var f1=r(Qd);ba=n(f1,"A",{href:!0,rel:!0});var g1=r(ba);Yv=i(g1,"Vectorization"),g1.forEach(t),f1.forEach(t),Zv=h(kn),Rd=n(kn,"LI",{});var _1=r(Rd);va=n(_1,"A",{href:!0,rel:!0});var b1=r(va);ek=i(b1,"Parallelization"),b1.forEach(t),_1.forEach(t),kn.forEach(t),tk=h(ot),gt=n(ot,"DIV",{class:!0});var Tn=r(gt);$(ka.$$.fragment,Tn),ok=h(Tn),jo=n(Tn,"P",{});var Fl=r(jo);sk=i(Fl,"The "),Ud=n(Fl,"CODE",{});var v1=r(Ud);nk=i(v1,"FlaxDistilBertPreTrainedModel"),v1.forEach(t),rk=i(Fl," forward method, overrides the "),Hd=n(Fl,"CODE",{});var k1=r(Hd);ak=i(k1,"__call__"),k1.forEach(t),ik=i(Fl," special method."),Fl.forEach(t),lk=h(Tn),$(Gs.$$.fragment,Tn),dk=h(Tn),$(Xs.$$.fragment,Tn),Tn.forEach(t),ot.forEach(t),ih=h(o),Co=n(o,"H2",{class:!0});var im=r(Co);Ys=n(im,"A",{id:!0,class:!0,href:!0});var T1=r(Ys);Vd=n(T1,"SPAN",{});var $1=r(Vd);$(Ta.$$.fragment,$1),$1.forEach(t),T1.forEach(t),ck=h(im),Kd=n(im,"SPAN",{});var w1=r(Kd);pk=i(w1,"FlaxDistilBertForMaskedLM"),w1.forEach(t),im.forEach(t),lh=h(o),Ee=n(o,"DIV",{class:!0});var st=r(Ee);$($a.$$.fragment,st),hk=h(st),wa=n(st,"P",{});var lm=r(wa);mk=i(lm,"DistilBert Model with a "),Jd=n(lm,"CODE",{});var y1=r(Jd);uk=i(y1,"language modeling"),y1.forEach(t),fk=i(lm," head on top."),lm.forEach(t),gk=h(st),ya=n(st,"P",{});var dm=r(ya);_k=i(dm,"This model inherits from "),il=n(dm,"A",{href:!0});var D1=r(il);bk=i(D1,"FlaxPreTrainedModel"),D1.forEach(t),vk=i(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dm.forEach(t),kk=h(st),Da=n(st,"P",{});var cm=r(Da);Tk=i(cm,"This model is also a Flax Linen "),Fa=n(cm,"A",{href:!0,rel:!0});var F1=r(Fa);$k=i(F1,"flax.linen.Module"),F1.forEach(t),wk=i(cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cm.forEach(t),yk=h(st),Gd=n(st,"P",{});var B1=r(Gd);Dk=i(B1,"Finally, this model supports inherent JAX features such as:"),B1.forEach(t),Fk=h(st),Et=n(st,"UL",{});var $n=r(Et);Xd=n($n,"LI",{});var x1=r(Xd);Ba=n(x1,"A",{href:!0,rel:!0});var M1=r(Ba);Bk=i(M1,"Just-In-Time (JIT) compilation"),M1.forEach(t),x1.forEach(t),xk=h($n),Yd=n($n,"LI",{});var E1=r(Yd);xa=n(E1,"A",{href:!0,rel:!0});var z1=r(xa);Mk=i(z1,"Automatic Differentiation"),z1.forEach(t),E1.forEach(t),Ek=h($n),Zd=n($n,"LI",{});var j1=r(Zd);Ma=n(j1,"A",{href:!0,rel:!0});var C1=r(Ma);zk=i(C1,"Vectorization"),C1.forEach(t),j1.forEach(t),jk=h($n),ec=n($n,"LI",{});var q1=r(ec);Ea=n(q1,"A",{href:!0,rel:!0});var P1=r(Ea);Ck=i(P1,"Parallelization"),P1.forEach(t),q1.forEach(t),$n.forEach(t),qk=h(st),_t=n(st,"DIV",{class:!0});var wn=r(_t);$(za.$$.fragment,wn),Pk=h(wn),qo=n(wn,"P",{});var Bl=r(qo);Ak=i(Bl,"The "),tc=n(Bl,"CODE",{});var A1=r(tc);Ok=i(A1,"FlaxDistilBertPreTrainedModel"),A1.forEach(t),Nk=i(Bl," forward method, overrides the "),oc=n(Bl,"CODE",{});var O1=r(oc);Lk=i(O1,"__call__"),O1.forEach(t),Sk=i(Bl," special method."),Bl.forEach(t),Ik=h(wn),$(Zs.$$.fragment,wn),Wk=h(wn),$(en.$$.fragment,wn),wn.forEach(t),st.forEach(t),dh=h(o),Po=n(o,"H2",{class:!0});var pm=r(Po);tn=n(pm,"A",{id:!0,class:!0,href:!0});var N1=r(tn);sc=n(N1,"SPAN",{});var L1=r(sc);$(ja.$$.fragment,L1),L1.forEach(t),N1.forEach(t),Qk=h(pm),nc=n(pm,"SPAN",{});var S1=r(nc);Rk=i(S1,"FlaxDistilBertForSequenceClassification"),S1.forEach(t),pm.forEach(t),ch=h(o),ze=n(o,"DIV",{class:!0});var nt=r(ze);$(Ca.$$.fragment,nt),Uk=h(nt),rc=n(nt,"P",{});var I1=r(rc);Hk=i(I1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),I1.forEach(t),Vk=h(nt),qa=n(nt,"P",{});var hm=r(qa);Kk=i(hm,"This model inherits from "),ll=n(hm,"A",{href:!0});var W1=r(ll);Jk=i(W1,"FlaxPreTrainedModel"),W1.forEach(t),Gk=i(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hm.forEach(t),Xk=h(nt),Pa=n(nt,"P",{});var mm=r(Pa);Yk=i(mm,"This model is also a Flax Linen "),Aa=n(mm,"A",{href:!0,rel:!0});var Q1=r(Aa);Zk=i(Q1,"flax.linen.Module"),Q1.forEach(t),eT=i(mm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mm.forEach(t),tT=h(nt),ac=n(nt,"P",{});var R1=r(ac);oT=i(R1,"Finally, this model supports inherent JAX features such as:"),R1.forEach(t),sT=h(nt),zt=n(nt,"UL",{});var yn=r(zt);ic=n(yn,"LI",{});var U1=r(ic);Oa=n(U1,"A",{href:!0,rel:!0});var H1=r(Oa);nT=i(H1,"Just-In-Time (JIT) compilation"),H1.forEach(t),U1.forEach(t),rT=h(yn),lc=n(yn,"LI",{});var V1=r(lc);Na=n(V1,"A",{href:!0,rel:!0});var K1=r(Na);aT=i(K1,"Automatic Differentiation"),K1.forEach(t),V1.forEach(t),iT=h(yn),dc=n(yn,"LI",{});var J1=r(dc);La=n(J1,"A",{href:!0,rel:!0});var G1=r(La);lT=i(G1,"Vectorization"),G1.forEach(t),J1.forEach(t),dT=h(yn),cc=n(yn,"LI",{});var X1=r(cc);Sa=n(X1,"A",{href:!0,rel:!0});var Y1=r(Sa);cT=i(Y1,"Parallelization"),Y1.forEach(t),X1.forEach(t),yn.forEach(t),pT=h(nt),bt=n(nt,"DIV",{class:!0});var Dn=r(bt);$(Ia.$$.fragment,Dn),hT=h(Dn),Ao=n(Dn,"P",{});var xl=r(Ao);mT=i(xl,"The "),pc=n(xl,"CODE",{});var Z1=r(pc);uT=i(Z1,"FlaxDistilBertPreTrainedModel"),Z1.forEach(t),fT=i(xl," forward method, overrides the "),hc=n(xl,"CODE",{});var e2=r(hc);gT=i(e2,"__call__"),e2.forEach(t),_T=i(xl," special method."),xl.forEach(t),bT=h(Dn),$(on.$$.fragment,Dn),vT=h(Dn),$(sn.$$.fragment,Dn),Dn.forEach(t),nt.forEach(t),ph=h(o),Oo=n(o,"H2",{class:!0});var um=r(Oo);nn=n(um,"A",{id:!0,class:!0,href:!0});var t2=r(nn);mc=n(t2,"SPAN",{});var o2=r(mc);$(Wa.$$.fragment,o2),o2.forEach(t),t2.forEach(t),kT=h(um),uc=n(um,"SPAN",{});var s2=r(uc);TT=i(s2,"FlaxDistilBertForMultipleChoice"),s2.forEach(t),um.forEach(t),hh=h(o),je=n(o,"DIV",{class:!0});var rt=r(je);$(Qa.$$.fragment,rt),$T=h(rt),fc=n(rt,"P",{});var n2=r(fc);wT=i(n2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n2.forEach(t),yT=h(rt),Ra=n(rt,"P",{});var fm=r(Ra);DT=i(fm,"This model inherits from "),dl=n(fm,"A",{href:!0});var r2=r(dl);FT=i(r2,"FlaxPreTrainedModel"),r2.forEach(t),BT=i(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),xT=h(rt),Ua=n(rt,"P",{});var gm=r(Ua);MT=i(gm,"This model is also a Flax Linen "),Ha=n(gm,"A",{href:!0,rel:!0});var a2=r(Ha);ET=i(a2,"flax.linen.Module"),a2.forEach(t),zT=i(gm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gm.forEach(t),jT=h(rt),gc=n(rt,"P",{});var i2=r(gc);CT=i(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),qT=h(rt),jt=n(rt,"UL",{});var Fn=r(jt);_c=n(Fn,"LI",{});var l2=r(_c);Va=n(l2,"A",{href:!0,rel:!0});var d2=r(Va);PT=i(d2,"Just-In-Time (JIT) compilation"),d2.forEach(t),l2.forEach(t),AT=h(Fn),bc=n(Fn,"LI",{});var c2=r(bc);Ka=n(c2,"A",{href:!0,rel:!0});var p2=r(Ka);OT=i(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),NT=h(Fn),vc=n(Fn,"LI",{});var h2=r(vc);Ja=n(h2,"A",{href:!0,rel:!0});var m2=r(Ja);LT=i(m2,"Vectorization"),m2.forEach(t),h2.forEach(t),ST=h(Fn),kc=n(Fn,"LI",{});var u2=r(kc);Ga=n(u2,"A",{href:!0,rel:!0});var f2=r(Ga);IT=i(f2,"Parallelization"),f2.forEach(t),u2.forEach(t),Fn.forEach(t),WT=h(rt),vt=n(rt,"DIV",{class:!0});var Bn=r(vt);$(Xa.$$.fragment,Bn),QT=h(Bn),No=n(Bn,"P",{});var Ml=r(No);RT=i(Ml,"The "),Tc=n(Ml,"CODE",{});var g2=r(Tc);UT=i(g2,"FlaxDistilBertPreTrainedModel"),g2.forEach(t),HT=i(Ml," forward method, overrides the "),$c=n(Ml,"CODE",{});var _2=r($c);VT=i(_2,"__call__"),_2.forEach(t),KT=i(Ml," special method."),Ml.forEach(t),JT=h(Bn),$(rn.$$.fragment,Bn),GT=h(Bn),$(an.$$.fragment,Bn),Bn.forEach(t),rt.forEach(t),mh=h(o),Lo=n(o,"H2",{class:!0});var _m=r(Lo);ln=n(_m,"A",{id:!0,class:!0,href:!0});var b2=r(ln);wc=n(b2,"SPAN",{});var v2=r(wc);$(Ya.$$.fragment,v2),v2.forEach(t),b2.forEach(t),XT=h(_m),yc=n(_m,"SPAN",{});var k2=r(yc);YT=i(k2,"FlaxDistilBertForTokenClassification"),k2.forEach(t),_m.forEach(t),uh=h(o),Ce=n(o,"DIV",{class:!0});var at=r(Ce);$(Za.$$.fragment,at),ZT=h(at),Dc=n(at,"P",{});var T2=r(Dc);e$=i(T2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),T2.forEach(t),t$=h(at),ei=n(at,"P",{});var bm=r(ei);o$=i(bm,"This model inherits from "),cl=n(bm,"A",{href:!0});var $2=r(cl);s$=i($2,"FlaxPreTrainedModel"),$2.forEach(t),n$=i(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bm.forEach(t),r$=h(at),ti=n(at,"P",{});var vm=r(ti);a$=i(vm,"This model is also a Flax Linen "),oi=n(vm,"A",{href:!0,rel:!0});var w2=r(oi);i$=i(w2,"flax.linen.Module"),w2.forEach(t),l$=i(vm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vm.forEach(t),d$=h(at),Fc=n(at,"P",{});var y2=r(Fc);c$=i(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),p$=h(at),Ct=n(at,"UL",{});var xn=r(Ct);Bc=n(xn,"LI",{});var D2=r(Bc);si=n(D2,"A",{href:!0,rel:!0});var F2=r(si);h$=i(F2,"Just-In-Time (JIT) compilation"),F2.forEach(t),D2.forEach(t),m$=h(xn),xc=n(xn,"LI",{});var B2=r(xc);ni=n(B2,"A",{href:!0,rel:!0});var x2=r(ni);u$=i(x2,"Automatic Differentiation"),x2.forEach(t),B2.forEach(t),f$=h(xn),Mc=n(xn,"LI",{});var M2=r(Mc);ri=n(M2,"A",{href:!0,rel:!0});var E2=r(ri);g$=i(E2,"Vectorization"),E2.forEach(t),M2.forEach(t),_$=h(xn),Ec=n(xn,"LI",{});var z2=r(Ec);ai=n(z2,"A",{href:!0,rel:!0});var j2=r(ai);b$=i(j2,"Parallelization"),j2.forEach(t),z2.forEach(t),xn.forEach(t),v$=h(at),kt=n(at,"DIV",{class:!0});var Mn=r(kt);$(ii.$$.fragment,Mn),k$=h(Mn),So=n(Mn,"P",{});var El=r(So);T$=i(El,"The "),zc=n(El,"CODE",{});var C2=r(zc);$$=i(C2,"FlaxDistilBertPreTrainedModel"),C2.forEach(t),w$=i(El," forward method, overrides the "),jc=n(El,"CODE",{});var q2=r(jc);y$=i(q2,"__call__"),q2.forEach(t),D$=i(El," special method."),El.forEach(t),F$=h(Mn),$(dn.$$.fragment,Mn),B$=h(Mn),$(cn.$$.fragment,Mn),Mn.forEach(t),at.forEach(t),fh=h(o),Io=n(o,"H2",{class:!0});var km=r(Io);pn=n(km,"A",{id:!0,class:!0,href:!0});var P2=r(pn);Cc=n(P2,"SPAN",{});var A2=r(Cc);$(li.$$.fragment,A2),A2.forEach(t),P2.forEach(t),x$=h(km),qc=n(km,"SPAN",{});var O2=r(qc);M$=i(O2,"FlaxDistilBertForQuestionAnswering"),O2.forEach(t),km.forEach(t),gh=h(o),qe=n(o,"DIV",{class:!0});var it=r(qe);$(di.$$.fragment,it),E$=h(it),Wo=n(it,"P",{});var zl=r(Wo);z$=i(zl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=n(zl,"CODE",{});var N2=r(Pc);j$=i(N2,"span start logits"),N2.forEach(t),C$=i(zl," and "),Ac=n(zl,"CODE",{});var L2=r(Ac);q$=i(L2,"span end logits"),L2.forEach(t),P$=i(zl,")."),zl.forEach(t),A$=h(it),ci=n(it,"P",{});var Tm=r(ci);O$=i(Tm,"This model inherits from "),pl=n(Tm,"A",{href:!0});var S2=r(pl);N$=i(S2,"FlaxPreTrainedModel"),S2.forEach(t),L$=i(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tm.forEach(t),S$=h(it),pi=n(it,"P",{});var $m=r(pi);I$=i($m,"This model is also a Flax Linen "),hi=n($m,"A",{href:!0,rel:!0});var I2=r(hi);W$=i(I2,"flax.linen.Module"),I2.forEach(t),Q$=i($m,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$m.forEach(t),R$=h(it),Oc=n(it,"P",{});var W2=r(Oc);U$=i(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),H$=h(it),qt=n(it,"UL",{});var En=r(qt);Nc=n(En,"LI",{});var Q2=r(Nc);mi=n(Q2,"A",{href:!0,rel:!0});var R2=r(mi);V$=i(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),Q2.forEach(t),K$=h(En),Lc=n(En,"LI",{});var U2=r(Lc);ui=n(U2,"A",{href:!0,rel:!0});var H2=r(ui);J$=i(H2,"Automatic Differentiation"),H2.forEach(t),U2.forEach(t),G$=h(En),Sc=n(En,"LI",{});var V2=r(Sc);fi=n(V2,"A",{href:!0,rel:!0});var K2=r(fi);X$=i(K2,"Vectorization"),K2.forEach(t),V2.forEach(t),Y$=h(En),Ic=n(En,"LI",{});var J2=r(Ic);gi=n(J2,"A",{href:!0,rel:!0});var G2=r(gi);Z$=i(G2,"Parallelization"),G2.forEach(t),J2.forEach(t),En.forEach(t),ew=h(it),Tt=n(it,"DIV",{class:!0});var zn=r(Tt);$(_i.$$.fragment,zn),tw=h(zn),Qo=n(zn,"P",{});var jl=r(Qo);ow=i(jl,"The "),Wc=n(jl,"CODE",{});var X2=r(Wc);sw=i(X2,"FlaxDistilBertPreTrainedModel"),X2.forEach(t),nw=i(jl," forward method, overrides the "),Qc=n(jl,"CODE",{});var Y2=r(Qc);rw=i(Y2,"__call__"),Y2.forEach(t),aw=i(jl," special method."),jl.forEach(t),iw=h(zn),$(hn.$$.fragment,zn),lw=h(zn),$(mn.$$.fragment,zn),zn.forEach(t),it.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(nF)),f(m,"id","distilbert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#distilbert"),f(c,"class","relative group"),f(G,"id","overview"),f(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(G,"href","#overview"),f(E,"class","relative group"),f(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),f(Y,"rel","nofollow"),f(j,"href","https://arxiv.org/abs/1910.01108"),f(j,"rel","nofollow"),f(jn,"href","https://huggingface.co/victorsanh"),f(jn,"rel","nofollow"),f(Cn,"href","https://huggingface.co/kamalkraj"),f(Cn,"rel","nofollow"),f(qn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),f(qn,"rel","nofollow"),f(Uo,"id","transformers.DistilBertConfig"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.DistilBertConfig"),f(eo,"class","relative group"),f(Fi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(Bi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(On,"href","https://huggingface.co/distilbert-base-uncased"),f(On,"rel","nofollow"),f(xi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Mi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vo,"id","transformers.DistilBertTokenizer"),f(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vo,"href","#transformers.DistilBertTokenizer"),f(oo,"class","relative group"),f(Ei,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),f(zi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.DistilBertTokenizerFast"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.DistilBertTokenizerFast"),f(so,"class","relative group"),f(Ci,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),f(qi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(Pi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"id","transformers.DistilBertModel"),f(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xo,"href","#transformers.DistilBertModel"),f(no,"class","relative group"),f(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Jn,"rel","nofollow"),f(Oi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(es,"id","transformers.DistilBertForMaskedLM"),f(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(es,"href","#transformers.DistilBertForMaskedLM"),f(ao,"class","relative group"),f(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(or,"rel","nofollow"),f(Li,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ns,"id","transformers.DistilBertForSequenceClassification"),f(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ns,"href","#transformers.DistilBertForSequenceClassification"),f(lo,"class","relative group"),f(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(lr,"rel","nofollow"),f(Ii,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cs,"id","transformers.DistilBertForMultipleChoice"),f(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cs,"href","#transformers.DistilBertForMultipleChoice"),f(po,"class","relative group"),f(Wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ur,"rel","nofollow"),f(Qi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ms,"id","transformers.DistilBertForTokenClassification"),f(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ms,"href","#transformers.DistilBertForTokenClassification"),f(mo,"class","relative group"),f(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(kr,"rel","nofollow"),f(Ui,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_s,"id","transformers.DistilBertForQuestionAnswering"),f(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_s,"href","#transformers.DistilBertForQuestionAnswering"),f(fo,"class","relative group"),f(Hi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fr,"rel","nofollow"),f(Vi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ts,"id","transformers.TFDistilBertModel"),f(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ts,"href","#transformers.TFDistilBertModel"),f(bo,"class","relative group"),f(Ki,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(jr,"rel","nofollow"),f(Ji,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ds,"id","transformers.TFDistilBertForMaskedLM"),f(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ds,"href","#transformers.TFDistilBertForMaskedLM"),f(ko,"class","relative group"),f(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Lr,"rel","nofollow"),f(Xi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Es,"id","transformers.TFDistilBertForSequenceClassification"),f(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Es,"href","#transformers.TFDistilBertForSequenceClassification"),f($o,"class","relative group"),f(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ur,"rel","nofollow"),f(Zi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ps,"id","transformers.TFDistilBertForMultipleChoice"),f(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ps,"href","#transformers.TFDistilBertForMultipleChoice"),f(yo,"class","relative group"),f(el,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xr,"rel","nofollow"),f(tl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ls,"id","transformers.TFDistilBertForTokenClassification"),f(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ls,"href","#transformers.TFDistilBertForTokenClassification"),f(Fo,"class","relative group"),f(ol,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(sa,"rel","nofollow"),f(sl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rs,"id","transformers.TFDistilBertForQuestionAnswering"),f(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rs,"href","#transformers.TFDistilBertForQuestionAnswering"),f(xo,"class","relative group"),f(nl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(da,"rel","nofollow"),f(rl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Js,"id","transformers.FlaxDistilBertModel"),f(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Js,"href","#transformers.FlaxDistilBertModel"),f(zo,"class","relative group"),f(al,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(fa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(fa,"rel","nofollow"),f(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ga,"rel","nofollow"),f(_a,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(_a,"rel","nofollow"),f(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ba,"rel","nofollow"),f(va,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(va,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ys,"id","transformers.FlaxDistilBertForMaskedLM"),f(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ys,"href","#transformers.FlaxDistilBertForMaskedLM"),f(Co,"class","relative group"),f(il,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Fa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Fa,"rel","nofollow"),f(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ba,"rel","nofollow"),f(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xa,"rel","nofollow"),f(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ma,"rel","nofollow"),f(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ea,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.FlaxDistilBertForSequenceClassification"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),f(Po,"class","relative group"),f(ll,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Aa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Aa,"rel","nofollow"),f(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Oa,"rel","nofollow"),f(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Na,"rel","nofollow"),f(La,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(La,"rel","nofollow"),f(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Sa,"rel","nofollow"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.FlaxDistilBertForMultipleChoice"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.FlaxDistilBertForMultipleChoice"),f(Oo,"class","relative group"),f(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ha,"rel","nofollow"),f(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Va,"rel","nofollow"),f(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ka,"rel","nofollow"),f(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ja,"rel","nofollow"),f(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ga,"rel","nofollow"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.FlaxDistilBertForTokenClassification"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.FlaxDistilBertForTokenClassification"),f(Lo,"class","relative group"),f(cl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(oi,"rel","nofollow"),f(si,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(si,"rel","nofollow"),f(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ni,"rel","nofollow"),f(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ri,"rel","nofollow"),f(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ai,"rel","nofollow"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.FlaxDistilBertForQuestionAnswering"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),f(Io,"class","relative group"),f(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(hi,"rel","nofollow"),f(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mi,"rel","nofollow"),f(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ui,"rel","nofollow"),f(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(fi,"rel","nofollow"),f(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gi,"rel","nofollow"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),b(o,g,v),b(o,c,v),e(c,m),e(m,_),w(l,_,null),e(c,u),e(c,x),e(x,he),b(o,V,v),b(o,E,v),e(E,G),e(G,S),w(X,S,null),e(E,me),e(E,I),e(I,ue),b(o,le,v),b(o,N,v),e(N,P),e(N,Y),e(Y,K),e(N,z),e(N,j),e(j,fe),e(N,W),e(N,oe),e(oe,ge),e(N,Q),b(o,de,v),b(o,ee,v),e(ee,A),b(o,ce,v),b(o,L,v),e(L,se),e(se,_e),b(o,q,v),b(o,te,v),e(te,R),b(o,pe,v),b(o,k,v),e(k,M),e(M,J),e(M,ve),e(ve,$e),e(M,O),e(M,ke),e(ke,we),e(M,ye),e(M,C),e(C,U),e(M,De),e(k,Fe),e(k,Z),e(Z,Be),e(Z,ne),e(ne,xe),e(Z,wm),b(o,xp,v),b(o,pt,v),e(pt,ym),e(pt,jn),e(jn,Dm),e(pt,Fm),e(pt,Cn),e(Cn,Bm),e(pt,xm),e(pt,qn),e(qn,Mm),e(pt,Em),b(o,Mp,v),b(o,eo,v),e(eo,Uo),e(Uo,Cl),w(Pn,Cl,null),e(eo,zm),e(eo,ql),e(ql,jm),b(o,Ep,v),b(o,lt,v),w(An,lt,null),e(lt,Cm),e(lt,xt),e(xt,qm),e(xt,Fi),e(Fi,Pm),e(xt,Am),e(xt,Bi),e(Bi,Om),e(xt,Nm),e(xt,On),e(On,Lm),e(xt,Sm),e(lt,Im),e(lt,to),e(to,Wm),e(to,xi),e(xi,Qm),e(to,Rm),e(to,Mi),e(Mi,Um),e(to,Hm),e(lt,Vm),w(Ho,lt,null),b(o,zp,v),b(o,oo,v),e(oo,Vo),e(Vo,Pl),w(Nn,Pl,null),e(oo,Km),e(oo,Al),e(Al,Jm),b(o,jp,v),b(o,dt,v),w(Ln,dt,null),e(dt,Gm),e(dt,Ol),e(Ol,Xm),e(dt,Ym),e(dt,Ko),e(Ko,Ei),e(Ei,Zm),e(Ko,eu),e(Ko,zi),e(zi,tu),e(Ko,ou),e(dt,su),e(dt,Sn),e(Sn,nu),e(Sn,ji),e(ji,ru),e(Sn,au),b(o,Cp,v),b(o,so,v),e(so,Jo),e(Jo,Nl),w(In,Nl,null),e(so,iu),e(so,Ll),e(Ll,lu),b(o,qp,v),b(o,ct,v),w(Wn,ct,null),e(ct,du),e(ct,Qn),e(Qn,cu),e(Qn,Sl),e(Sl,pu),e(Qn,hu),e(ct,mu),e(ct,Go),e(Go,Ci),e(Ci,uu),e(Go,fu),e(Go,qi),e(qi,gu),e(Go,_u),e(ct,bu),e(ct,Rn),e(Rn,vu),e(Rn,Pi),e(Pi,ku),e(Rn,Tu),b(o,Pp,v),b(o,no,v),e(no,Xo),e(Xo,Il),w(Un,Il,null),e(no,$u),e(no,Wl),e(Wl,wu),b(o,Ap,v),b(o,We,v),w(Hn,We,null),e(We,yu),e(We,Ql),e(Ql,Du),e(We,Fu),e(We,Vn),e(Vn,Bu),e(Vn,Ai),e(Ai,xu),e(Vn,Mu),e(We,Eu),e(We,Kn),e(Kn,zu),e(Kn,Jn),e(Jn,ju),e(Kn,Cu),e(We,qu),e(We,ht),w(Gn,ht,null),e(ht,Pu),e(ht,ro),e(ro,Au),e(ro,Oi),e(Oi,Ou),e(ro,Nu),e(ro,Rl),e(Rl,Lu),e(ro,Su),e(ht,Iu),w(Yo,ht,null),e(ht,Wu),w(Zo,ht,null),b(o,Op,v),b(o,ao,v),e(ao,es),e(es,Ul),w(Xn,Ul,null),e(ao,Qu),e(ao,Hl),e(Hl,Ru),b(o,Np,v),b(o,Qe,v),w(Yn,Qe,null),e(Qe,Uu),e(Qe,Zn),e(Zn,Hu),e(Zn,Vl),e(Vl,Vu),e(Zn,Ku),e(Qe,Ju),e(Qe,er),e(er,Gu),e(er,Ni),e(Ni,Xu),e(er,Yu),e(Qe,Zu),e(Qe,tr),e(tr,ef),e(tr,or),e(or,tf),e(tr,of),e(Qe,sf),e(Qe,Ke),w(sr,Ke,null),e(Ke,nf),e(Ke,io),e(io,rf),e(io,Li),e(Li,af),e(io,lf),e(io,Kl),e(Kl,df),e(io,cf),e(Ke,pf),w(ts,Ke,null),e(Ke,hf),w(os,Ke,null),e(Ke,mf),w(ss,Ke,null),b(o,Lp,v),b(o,lo,v),e(lo,ns),e(ns,Jl),w(nr,Jl,null),e(lo,uf),e(lo,Gl),e(Gl,ff),b(o,Sp,v),b(o,Re,v),w(rr,Re,null),e(Re,gf),e(Re,Xl),e(Xl,_f),e(Re,bf),e(Re,ar),e(ar,vf),e(ar,Si),e(Si,kf),e(ar,Tf),e(Re,$f),e(Re,ir),e(ir,wf),e(ir,lr),e(lr,yf),e(ir,Df),e(Re,Ff),e(Re,Pe),w(dr,Pe,null),e(Pe,Bf),e(Pe,co),e(co,xf),e(co,Ii),e(Ii,Mf),e(co,Ef),e(co,Yl),e(Yl,zf),e(co,jf),e(Pe,Cf),w(rs,Pe,null),e(Pe,qf),w(as,Pe,null),e(Pe,Pf),w(is,Pe,null),e(Pe,Af),w(ls,Pe,null),e(Pe,Of),w(ds,Pe,null),b(o,Ip,v),b(o,po,v),e(po,cs),e(cs,Zl),w(cr,Zl,null),e(po,Nf),e(po,ed),e(ed,Lf),b(o,Wp,v),b(o,Ue,v),w(pr,Ue,null),e(Ue,Sf),e(Ue,td),e(td,If),e(Ue,Wf),e(Ue,hr),e(hr,Qf),e(hr,Wi),e(Wi,Rf),e(hr,Uf),e(Ue,Hf),e(Ue,mr),e(mr,Vf),e(mr,ur),e(ur,Kf),e(mr,Jf),e(Ue,Gf),e(Ue,mt),w(fr,mt,null),e(mt,Xf),e(mt,ho),e(ho,Yf),e(ho,Qi),e(Qi,Zf),e(ho,eg),e(ho,od),e(od,tg),e(ho,og),e(mt,sg),w(ps,mt,null),e(mt,ng),w(hs,mt,null),b(o,Qp,v),b(o,mo,v),e(mo,ms),e(ms,sd),w(gr,sd,null),e(mo,rg),e(mo,nd),e(nd,ag),b(o,Rp,v),b(o,He,v),w(_r,He,null),e(He,ig),e(He,rd),e(rd,lg),e(He,dg),e(He,br),e(br,cg),e(br,Ri),e(Ri,pg),e(br,hg),e(He,mg),e(He,vr),e(vr,ug),e(vr,kr),e(kr,fg),e(vr,gg),e(He,_g),e(He,Je),w(Tr,Je,null),e(Je,bg),e(Je,uo),e(uo,vg),e(uo,Ui),e(Ui,kg),e(uo,Tg),e(uo,ad),e(ad,$g),e(uo,wg),e(Je,yg),w(us,Je,null),e(Je,Dg),w(fs,Je,null),e(Je,Fg),w(gs,Je,null),b(o,Up,v),b(o,fo,v),e(fo,_s),e(_s,id),w($r,id,null),e(fo,Bg),e(fo,ld),e(ld,xg),b(o,Hp,v),b(o,Ve,v),w(wr,Ve,null),e(Ve,Mg),e(Ve,go),e(go,Eg),e(go,dd),e(dd,zg),e(go,jg),e(go,cd),e(cd,Cg),e(go,qg),e(Ve,Pg),e(Ve,yr),e(yr,Ag),e(yr,Hi),e(Hi,Og),e(yr,Ng),e(Ve,Lg),e(Ve,Dr),e(Dr,Sg),e(Dr,Fr),e(Fr,Ig),e(Dr,Wg),e(Ve,Qg),e(Ve,Ge),w(Br,Ge,null),e(Ge,Rg),e(Ge,_o),e(_o,Ug),e(_o,Vi),e(Vi,Hg),e(_o,Vg),e(_o,pd),e(pd,Kg),e(_o,Jg),e(Ge,Gg),w(bs,Ge,null),e(Ge,Xg),w(vs,Ge,null),e(Ge,Yg),w(ks,Ge,null),b(o,Vp,v),b(o,bo,v),e(bo,Ts),e(Ts,hd),w(xr,hd,null),e(bo,Zg),e(bo,md),e(md,e_),b(o,Kp,v),b(o,Ae,v),w(Mr,Ae,null),e(Ae,t_),e(Ae,ud),e(ud,o_),e(Ae,s_),e(Ae,Er),e(Er,n_),e(Er,Ki),e(Ki,r_),e(Er,a_),e(Ae,i_),e(Ae,zr),e(zr,l_),e(zr,jr),e(jr,d_),e(zr,c_),e(Ae,p_),w($s,Ae,null),e(Ae,h_),e(Ae,ut),w(Cr,ut,null),e(ut,m_),e(ut,vo),e(vo,u_),e(vo,Ji),e(Ji,f_),e(vo,g_),e(vo,fd),e(fd,__),e(vo,b_),e(ut,v_),w(ws,ut,null),e(ut,k_),w(ys,ut,null),b(o,Jp,v),b(o,ko,v),e(ko,Ds),e(Ds,gd),w(qr,gd,null),e(ko,T_),e(ko,_d),e(_d,$_),b(o,Gp,v),b(o,Oe,v),w(Pr,Oe,null),e(Oe,w_),e(Oe,Ar),e(Ar,y_),e(Ar,bd),e(bd,D_),e(Ar,F_),e(Oe,B_),e(Oe,Or),e(Or,x_),e(Or,Gi),e(Gi,M_),e(Or,E_),e(Oe,z_),e(Oe,Nr),e(Nr,j_),e(Nr,Lr),e(Lr,C_),e(Nr,q_),e(Oe,P_),w(Fs,Oe,null),e(Oe,A_),e(Oe,Xe),w(Sr,Xe,null),e(Xe,O_),e(Xe,To),e(To,N_),e(To,Xi),e(Xi,L_),e(To,S_),e(To,vd),e(vd,I_),e(To,W_),e(Xe,Q_),w(Bs,Xe,null),e(Xe,R_),w(xs,Xe,null),e(Xe,U_),w(Ms,Xe,null),b(o,Xp,v),b(o,$o,v),e($o,Es),e(Es,kd),w(Ir,kd,null),e($o,H_),e($o,Td),e(Td,V_),b(o,Yp,v),b(o,Ne,v),w(Wr,Ne,null),e(Ne,K_),e(Ne,$d),e($d,J_),e(Ne,G_),e(Ne,Qr),e(Qr,X_),e(Qr,Yi),e(Yi,Y_),e(Qr,Z_),e(Ne,eb),e(Ne,Rr),e(Rr,tb),e(Rr,Ur),e(Ur,ob),e(Rr,sb),e(Ne,nb),w(zs,Ne,null),e(Ne,rb),e(Ne,Ye),w(Hr,Ye,null),e(Ye,ab),e(Ye,wo),e(wo,ib),e(wo,Zi),e(Zi,lb),e(wo,db),e(wo,wd),e(wd,cb),e(wo,pb),e(Ye,hb),w(js,Ye,null),e(Ye,mb),w(Cs,Ye,null),e(Ye,ub),w(qs,Ye,null),b(o,Zp,v),b(o,yo,v),e(yo,Ps),e(Ps,yd),w(Vr,yd,null),e(yo,fb),e(yo,Dd),e(Dd,gb),b(o,eh,v),b(o,Le,v),w(Kr,Le,null),e(Le,_b),e(Le,Fd),e(Fd,bb),e(Le,vb),e(Le,Jr),e(Jr,kb),e(Jr,el),e(el,Tb),e(Jr,$b),e(Le,wb),e(Le,Gr),e(Gr,yb),e(Gr,Xr),e(Xr,Db),e(Gr,Fb),e(Le,Bb),w(As,Le,null),e(Le,xb),e(Le,ft),w(Yr,ft,null),e(ft,Mb),e(ft,Do),e(Do,Eb),e(Do,tl),e(tl,zb),e(Do,jb),e(Do,Bd),e(Bd,Cb),e(Do,qb),e(ft,Pb),w(Os,ft,null),e(ft,Ab),w(Ns,ft,null),b(o,th,v),b(o,Fo,v),e(Fo,Ls),e(Ls,xd),w(Zr,xd,null),e(Fo,Ob),e(Fo,Md),e(Md,Nb),b(o,oh,v),b(o,Se,v),w(ea,Se,null),e(Se,Lb),e(Se,Ed),e(Ed,Sb),e(Se,Ib),e(Se,ta),e(ta,Wb),e(ta,ol),e(ol,Qb),e(ta,Rb),e(Se,Ub),e(Se,oa),e(oa,Hb),e(oa,sa),e(sa,Vb),e(oa,Kb),e(Se,Jb),w(Ss,Se,null),e(Se,Gb),e(Se,Ze),w(na,Ze,null),e(Ze,Xb),e(Ze,Bo),e(Bo,Yb),e(Bo,sl),e(sl,Zb),e(Bo,ev),e(Bo,zd),e(zd,tv),e(Bo,ov),e(Ze,sv),w(Is,Ze,null),e(Ze,nv),w(Ws,Ze,null),e(Ze,rv),w(Qs,Ze,null),b(o,sh,v),b(o,xo,v),e(xo,Rs),e(Rs,jd),w(ra,jd,null),e(xo,av),e(xo,Cd),e(Cd,iv),b(o,nh,v),b(o,Ie,v),w(aa,Ie,null),e(Ie,lv),e(Ie,Mo),e(Mo,dv),e(Mo,qd),e(qd,cv),e(Mo,pv),e(Mo,Pd),e(Pd,hv),e(Mo,mv),e(Ie,uv),e(Ie,ia),e(ia,fv),e(ia,nl),e(nl,gv),e(ia,_v),e(Ie,bv),e(Ie,la),e(la,vv),e(la,da),e(da,kv),e(la,Tv),e(Ie,$v),w(Us,Ie,null),e(Ie,wv),e(Ie,et),w(ca,et,null),e(et,yv),e(et,Eo),e(Eo,Dv),e(Eo,rl),e(rl,Fv),e(Eo,Bv),e(Eo,Ad),e(Ad,xv),e(Eo,Mv),e(et,Ev),w(Hs,et,null),e(et,zv),w(Vs,et,null),e(et,jv),w(Ks,et,null),b(o,rh,v),b(o,zo,v),e(zo,Js),e(Js,Od),w(pa,Od,null),e(zo,Cv),e(zo,Nd),e(Nd,qv),b(o,ah,v),b(o,Me,v),w(ha,Me,null),e(Me,Pv),e(Me,Ld),e(Ld,Av),e(Me,Ov),e(Me,ma),e(ma,Nv),e(ma,al),e(al,Lv),e(ma,Sv),e(Me,Iv),e(Me,ua),e(ua,Wv),e(ua,fa),e(fa,Qv),e(ua,Rv),e(Me,Uv),e(Me,Sd),e(Sd,Hv),e(Me,Vv),e(Me,Mt),e(Mt,Id),e(Id,ga),e(ga,Kv),e(Mt,Jv),e(Mt,Wd),e(Wd,_a),e(_a,Gv),e(Mt,Xv),e(Mt,Qd),e(Qd,ba),e(ba,Yv),e(Mt,Zv),e(Mt,Rd),e(Rd,va),e(va,ek),e(Me,tk),e(Me,gt),w(ka,gt,null),e(gt,ok),e(gt,jo),e(jo,sk),e(jo,Ud),e(Ud,nk),e(jo,rk),e(jo,Hd),e(Hd,ak),e(jo,ik),e(gt,lk),w(Gs,gt,null),e(gt,dk),w(Xs,gt,null),b(o,ih,v),b(o,Co,v),e(Co,Ys),e(Ys,Vd),w(Ta,Vd,null),e(Co,ck),e(Co,Kd),e(Kd,pk),b(o,lh,v),b(o,Ee,v),w($a,Ee,null),e(Ee,hk),e(Ee,wa),e(wa,mk),e(wa,Jd),e(Jd,uk),e(wa,fk),e(Ee,gk),e(Ee,ya),e(ya,_k),e(ya,il),e(il,bk),e(ya,vk),e(Ee,kk),e(Ee,Da),e(Da,Tk),e(Da,Fa),e(Fa,$k),e(Da,wk),e(Ee,yk),e(Ee,Gd),e(Gd,Dk),e(Ee,Fk),e(Ee,Et),e(Et,Xd),e(Xd,Ba),e(Ba,Bk),e(Et,xk),e(Et,Yd),e(Yd,xa),e(xa,Mk),e(Et,Ek),e(Et,Zd),e(Zd,Ma),e(Ma,zk),e(Et,jk),e(Et,ec),e(ec,Ea),e(Ea,Ck),e(Ee,qk),e(Ee,_t),w(za,_t,null),e(_t,Pk),e(_t,qo),e(qo,Ak),e(qo,tc),e(tc,Ok),e(qo,Nk),e(qo,oc),e(oc,Lk),e(qo,Sk),e(_t,Ik),w(Zs,_t,null),e(_t,Wk),w(en,_t,null),b(o,dh,v),b(o,Po,v),e(Po,tn),e(tn,sc),w(ja,sc,null),e(Po,Qk),e(Po,nc),e(nc,Rk),b(o,ch,v),b(o,ze,v),w(Ca,ze,null),e(ze,Uk),e(ze,rc),e(rc,Hk),e(ze,Vk),e(ze,qa),e(qa,Kk),e(qa,ll),e(ll,Jk),e(qa,Gk),e(ze,Xk),e(ze,Pa),e(Pa,Yk),e(Pa,Aa),e(Aa,Zk),e(Pa,eT),e(ze,tT),e(ze,ac),e(ac,oT),e(ze,sT),e(ze,zt),e(zt,ic),e(ic,Oa),e(Oa,nT),e(zt,rT),e(zt,lc),e(lc,Na),e(Na,aT),e(zt,iT),e(zt,dc),e(dc,La),e(La,lT),e(zt,dT),e(zt,cc),e(cc,Sa),e(Sa,cT),e(ze,pT),e(ze,bt),w(Ia,bt,null),e(bt,hT),e(bt,Ao),e(Ao,mT),e(Ao,pc),e(pc,uT),e(Ao,fT),e(Ao,hc),e(hc,gT),e(Ao,_T),e(bt,bT),w(on,bt,null),e(bt,vT),w(sn,bt,null),b(o,ph,v),b(o,Oo,v),e(Oo,nn),e(nn,mc),w(Wa,mc,null),e(Oo,kT),e(Oo,uc),e(uc,TT),b(o,hh,v),b(o,je,v),w(Qa,je,null),e(je,$T),e(je,fc),e(fc,wT),e(je,yT),e(je,Ra),e(Ra,DT),e(Ra,dl),e(dl,FT),e(Ra,BT),e(je,xT),e(je,Ua),e(Ua,MT),e(Ua,Ha),e(Ha,ET),e(Ua,zT),e(je,jT),e(je,gc),e(gc,CT),e(je,qT),e(je,jt),e(jt,_c),e(_c,Va),e(Va,PT),e(jt,AT),e(jt,bc),e(bc,Ka),e(Ka,OT),e(jt,NT),e(jt,vc),e(vc,Ja),e(Ja,LT),e(jt,ST),e(jt,kc),e(kc,Ga),e(Ga,IT),e(je,WT),e(je,vt),w(Xa,vt,null),e(vt,QT),e(vt,No),e(No,RT),e(No,Tc),e(Tc,UT),e(No,HT),e(No,$c),e($c,VT),e(No,KT),e(vt,JT),w(rn,vt,null),e(vt,GT),w(an,vt,null),b(o,mh,v),b(o,Lo,v),e(Lo,ln),e(ln,wc),w(Ya,wc,null),e(Lo,XT),e(Lo,yc),e(yc,YT),b(o,uh,v),b(o,Ce,v),w(Za,Ce,null),e(Ce,ZT),e(Ce,Dc),e(Dc,e$),e(Ce,t$),e(Ce,ei),e(ei,o$),e(ei,cl),e(cl,s$),e(ei,n$),e(Ce,r$),e(Ce,ti),e(ti,a$),e(ti,oi),e(oi,i$),e(ti,l$),e(Ce,d$),e(Ce,Fc),e(Fc,c$),e(Ce,p$),e(Ce,Ct),e(Ct,Bc),e(Bc,si),e(si,h$),e(Ct,m$),e(Ct,xc),e(xc,ni),e(ni,u$),e(Ct,f$),e(Ct,Mc),e(Mc,ri),e(ri,g$),e(Ct,_$),e(Ct,Ec),e(Ec,ai),e(ai,b$),e(Ce,v$),e(Ce,kt),w(ii,kt,null),e(kt,k$),e(kt,So),e(So,T$),e(So,zc),e(zc,$$),e(So,w$),e(So,jc),e(jc,y$),e(So,D$),e(kt,F$),w(dn,kt,null),e(kt,B$),w(cn,kt,null),b(o,fh,v),b(o,Io,v),e(Io,pn),e(pn,Cc),w(li,Cc,null),e(Io,x$),e(Io,qc),e(qc,M$),b(o,gh,v),b(o,qe,v),w(di,qe,null),e(qe,E$),e(qe,Wo),e(Wo,z$),e(Wo,Pc),e(Pc,j$),e(Wo,C$),e(Wo,Ac),e(Ac,q$),e(Wo,P$),e(qe,A$),e(qe,ci),e(ci,O$),e(ci,pl),e(pl,N$),e(ci,L$),e(qe,S$),e(qe,pi),e(pi,I$),e(pi,hi),e(hi,W$),e(pi,Q$),e(qe,R$),e(qe,Oc),e(Oc,U$),e(qe,H$),e(qe,qt),e(qt,Nc),e(Nc,mi),e(mi,V$),e(qt,K$),e(qt,Lc),e(Lc,ui),e(ui,J$),e(qt,G$),e(qt,Sc),e(Sc,fi),e(fi,X$),e(qt,Y$),e(qt,Ic),e(Ic,gi),e(gi,Z$),e(qe,ew),e(qe,Tt),w(_i,Tt,null),e(Tt,tw),e(Tt,Qo),e(Qo,ow),e(Qo,Wc),e(Wc,sw),e(Qo,nw),e(Qo,Qc),e(Qc,rw),e(Qo,aw),e(Tt,iw),w(hn,Tt,null),e(Tt,lw),w(mn,Tt,null),_h=!0},p(o,[v]){const bi={};v&2&&(bi.$$scope={dirty:v,ctx:o}),Ho.$set(bi);const Rc={};v&2&&(Rc.$$scope={dirty:v,ctx:o}),Yo.$set(Rc);const Uc={};v&2&&(Uc.$$scope={dirty:v,ctx:o}),Zo.$set(Uc);const Hc={};v&2&&(Hc.$$scope={dirty:v,ctx:o}),ts.$set(Hc);const vi={};v&2&&(vi.$$scope={dirty:v,ctx:o}),os.$set(vi);const Vc={};v&2&&(Vc.$$scope={dirty:v,ctx:o}),ss.$set(Vc);const Kc={};v&2&&(Kc.$$scope={dirty:v,ctx:o}),rs.$set(Kc);const Jc={};v&2&&(Jc.$$scope={dirty:v,ctx:o}),as.$set(Jc);const Pt={};v&2&&(Pt.$$scope={dirty:v,ctx:o}),is.$set(Pt);const Gc={};v&2&&(Gc.$$scope={dirty:v,ctx:o}),ls.$set(Gc);const Xc={};v&2&&(Xc.$$scope={dirty:v,ctx:o}),ds.$set(Xc);const Yc={};v&2&&(Yc.$$scope={dirty:v,ctx:o}),ps.$set(Yc);const Zc={};v&2&&(Zc.$$scope={dirty:v,ctx:o}),hs.$set(Zc);const ep={};v&2&&(ep.$$scope={dirty:v,ctx:o}),us.$set(ep);const tp={};v&2&&(tp.$$scope={dirty:v,ctx:o}),fs.$set(tp);const op={};v&2&&(op.$$scope={dirty:v,ctx:o}),gs.$set(op);const ki={};v&2&&(ki.$$scope={dirty:v,ctx:o}),bs.$set(ki);const At={};v&2&&(At.$$scope={dirty:v,ctx:o}),vs.$set(At);const sp={};v&2&&(sp.$$scope={dirty:v,ctx:o}),ks.$set(sp);const np={};v&2&&(np.$$scope={dirty:v,ctx:o}),$s.$set(np);const rp={};v&2&&(rp.$$scope={dirty:v,ctx:o}),ws.$set(rp);const Ti={};v&2&&(Ti.$$scope={dirty:v,ctx:o}),ys.$set(Ti);const ap={};v&2&&(ap.$$scope={dirty:v,ctx:o}),Fs.$set(ap);const Ot={};v&2&&(Ot.$$scope={dirty:v,ctx:o}),Bs.$set(Ot);const ip={};v&2&&(ip.$$scope={dirty:v,ctx:o}),xs.$set(ip);const lp={};v&2&&(lp.$$scope={dirty:v,ctx:o}),Ms.$set(lp);const dp={};v&2&&(dp.$$scope={dirty:v,ctx:o}),zs.$set(dp);const $i={};v&2&&($i.$$scope={dirty:v,ctx:o}),js.$set($i);const cp={};v&2&&(cp.$$scope={dirty:v,ctx:o}),Cs.$set(cp);const pp={};v&2&&(pp.$$scope={dirty:v,ctx:o}),qs.$set(pp);const hp={};v&2&&(hp.$$scope={dirty:v,ctx:o}),As.$set(hp);const Nt={};v&2&&(Nt.$$scope={dirty:v,ctx:o}),Os.$set(Nt);const Lt={};v&2&&(Lt.$$scope={dirty:v,ctx:o}),Ns.$set(Lt);const mp={};v&2&&(mp.$$scope={dirty:v,ctx:o}),Ss.$set(mp);const up={};v&2&&(up.$$scope={dirty:v,ctx:o}),Is.$set(up);const fp={};v&2&&(fp.$$scope={dirty:v,ctx:o}),Ws.$set(fp);const Ro={};v&2&&(Ro.$$scope={dirty:v,ctx:o}),Qs.$set(Ro);const gp={};v&2&&(gp.$$scope={dirty:v,ctx:o}),Us.$set(gp);const _p={};v&2&&(_p.$$scope={dirty:v,ctx:o}),Hs.$set(_p);const wi={};v&2&&(wi.$$scope={dirty:v,ctx:o}),Vs.$set(wi);const bp={};v&2&&(bp.$$scope={dirty:v,ctx:o}),Ks.$set(bp);const vp={};v&2&&(vp.$$scope={dirty:v,ctx:o}),Gs.$set(vp);const kp={};v&2&&(kp.$$scope={dirty:v,ctx:o}),Xs.$set(kp);const St={};v&2&&(St.$$scope={dirty:v,ctx:o}),Zs.$set(St);const Tp={};v&2&&(Tp.$$scope={dirty:v,ctx:o}),en.$set(Tp);const un={};v&2&&(un.$$scope={dirty:v,ctx:o}),on.$set(un);const $p={};v&2&&($p.$$scope={dirty:v,ctx:o}),sn.$set($p);const wp={};v&2&&(wp.$$scope={dirty:v,ctx:o}),rn.$set(wp);const yi={};v&2&&(yi.$$scope={dirty:v,ctx:o}),an.$set(yi);const yp={};v&2&&(yp.$$scope={dirty:v,ctx:o}),dn.$set(yp);const Di={};v&2&&(Di.$$scope={dirty:v,ctx:o}),cn.$set(Di);const Dp={};v&2&&(Dp.$$scope={dirty:v,ctx:o}),hn.$set(Dp);const Fp={};v&2&&(Fp.$$scope={dirty:v,ctx:o}),mn.$set(Fp)},i(o){_h||(y(l.$$.fragment,o),y(X.$$.fragment,o),y(Pn.$$.fragment,o),y(An.$$.fragment,o),y(Ho.$$.fragment,o),y(Nn.$$.fragment,o),y(Ln.$$.fragment,o),y(In.$$.fragment,o),y(Wn.$$.fragment,o),y(Un.$$.fragment,o),y(Hn.$$.fragment,o),y(Gn.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(sr.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ss.$$.fragment,o),y(nr.$$.fragment,o),y(rr.$$.fragment,o),y(dr.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(cr.$$.fragment,o),y(pr.$$.fragment,o),y(fr.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(gr.$$.fragment,o),y(_r.$$.fragment,o),y(Tr.$$.fragment,o),y(us.$$.fragment,o),y(fs.$$.fragment,o),y(gs.$$.fragment,o),y($r.$$.fragment,o),y(wr.$$.fragment,o),y(Br.$$.fragment,o),y(bs.$$.fragment,o),y(vs.$$.fragment,o),y(ks.$$.fragment,o),y(xr.$$.fragment,o),y(Mr.$$.fragment,o),y($s.$$.fragment,o),y(Cr.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(qr.$$.fragment,o),y(Pr.$$.fragment,o),y(Fs.$$.fragment,o),y(Sr.$$.fragment,o),y(Bs.$$.fragment,o),y(xs.$$.fragment,o),y(Ms.$$.fragment,o),y(Ir.$$.fragment,o),y(Wr.$$.fragment,o),y(zs.$$.fragment,o),y(Hr.$$.fragment,o),y(js.$$.fragment,o),y(Cs.$$.fragment,o),y(qs.$$.fragment,o),y(Vr.$$.fragment,o),y(Kr.$$.fragment,o),y(As.$$.fragment,o),y(Yr.$$.fragment,o),y(Os.$$.fragment,o),y(Ns.$$.fragment,o),y(Zr.$$.fragment,o),y(ea.$$.fragment,o),y(Ss.$$.fragment,o),y(na.$$.fragment,o),y(Is.$$.fragment,o),y(Ws.$$.fragment,o),y(Qs.$$.fragment,o),y(ra.$$.fragment,o),y(aa.$$.fragment,o),y(Us.$$.fragment,o),y(ca.$$.fragment,o),y(Hs.$$.fragment,o),y(Vs.$$.fragment,o),y(Ks.$$.fragment,o),y(pa.$$.fragment,o),y(ha.$$.fragment,o),y(ka.$$.fragment,o),y(Gs.$$.fragment,o),y(Xs.$$.fragment,o),y(Ta.$$.fragment,o),y($a.$$.fragment,o),y(za.$$.fragment,o),y(Zs.$$.fragment,o),y(en.$$.fragment,o),y(ja.$$.fragment,o),y(Ca.$$.fragment,o),y(Ia.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(Wa.$$.fragment,o),y(Qa.$$.fragment,o),y(Xa.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(ii.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(li.$$.fragment,o),y(di.$$.fragment,o),y(_i.$$.fragment,o),y(hn.$$.fragment,o),y(mn.$$.fragment,o),_h=!0)},o(o){D(l.$$.fragment,o),D(X.$$.fragment,o),D(Pn.$$.fragment,o),D(An.$$.fragment,o),D(Ho.$$.fragment,o),D(Nn.$$.fragment,o),D(Ln.$$.fragment,o),D(In.$$.fragment,o),D(Wn.$$.fragment,o),D(Un.$$.fragment,o),D(Hn.$$.fragment,o),D(Gn.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(Xn.$$.fragment,o),D(Yn.$$.fragment,o),D(sr.$$.fragment,o),D(ts.$$.fragment,o),D(os.$$.fragment,o),D(ss.$$.fragment,o),D(nr.$$.fragment,o),D(rr.$$.fragment,o),D(dr.$$.fragment,o),D(rs.$$.fragment,o),D(as.$$.fragment,o),D(is.$$.fragment,o),D(ls.$$.fragment,o),D(ds.$$.fragment,o),D(cr.$$.fragment,o),D(pr.$$.fragment,o),D(fr.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(gr.$$.fragment,o),D(_r.$$.fragment,o),D(Tr.$$.fragment,o),D(us.$$.fragment,o),D(fs.$$.fragment,o),D(gs.$$.fragment,o),D($r.$$.fragment,o),D(wr.$$.fragment,o),D(Br.$$.fragment,o),D(bs.$$.fragment,o),D(vs.$$.fragment,o),D(ks.$$.fragment,o),D(xr.$$.fragment,o),D(Mr.$$.fragment,o),D($s.$$.fragment,o),D(Cr.$$.fragment,o),D(ws.$$.fragment,o),D(ys.$$.fragment,o),D(qr.$$.fragment,o),D(Pr.$$.fragment,o),D(Fs.$$.fragment,o),D(Sr.$$.fragment,o),D(Bs.$$.fragment,o),D(xs.$$.fragment,o),D(Ms.$$.fragment,o),D(Ir.$$.fragment,o),D(Wr.$$.fragment,o),D(zs.$$.fragment,o),D(Hr.$$.fragment,o),D(js.$$.fragment,o),D(Cs.$$.fragment,o),D(qs.$$.fragment,o),D(Vr.$$.fragment,o),D(Kr.$$.fragment,o),D(As.$$.fragment,o),D(Yr.$$.fragment,o),D(Os.$$.fragment,o),D(Ns.$$.fragment,o),D(Zr.$$.fragment,o),D(ea.$$.fragment,o),D(Ss.$$.fragment,o),D(na.$$.fragment,o),D(Is.$$.fragment,o),D(Ws.$$.fragment,o),D(Qs.$$.fragment,o),D(ra.$$.fragment,o),D(aa.$$.fragment,o),D(Us.$$.fragment,o),D(ca.$$.fragment,o),D(Hs.$$.fragment,o),D(Vs.$$.fragment,o),D(Ks.$$.fragment,o),D(pa.$$.fragment,o),D(ha.$$.fragment,o),D(ka.$$.fragment,o),D(Gs.$$.fragment,o),D(Xs.$$.fragment,o),D(Ta.$$.fragment,o),D($a.$$.fragment,o),D(za.$$.fragment,o),D(Zs.$$.fragment,o),D(en.$$.fragment,o),D(ja.$$.fragment,o),D(Ca.$$.fragment,o),D(Ia.$$.fragment,o),D(on.$$.fragment,o),D(sn.$$.fragment,o),D(Wa.$$.fragment,o),D(Qa.$$.fragment,o),D(Xa.$$.fragment,o),D(rn.$$.fragment,o),D(an.$$.fragment,o),D(Ya.$$.fragment,o),D(Za.$$.fragment,o),D(ii.$$.fragment,o),D(dn.$$.fragment,o),D(cn.$$.fragment,o),D(li.$$.fragment,o),D(di.$$.fragment,o),D(_i.$$.fragment,o),D(hn.$$.fragment,o),D(mn.$$.fragment,o),_h=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(V),o&&t(E),F(X),o&&t(le),o&&t(N),o&&t(de),o&&t(ee),o&&t(ce),o&&t(L),o&&t(q),o&&t(te),o&&t(pe),o&&t(k),o&&t(xp),o&&t(pt),o&&t(Mp),o&&t(eo),F(Pn),o&&t(Ep),o&&t(lt),F(An),F(Ho),o&&t(zp),o&&t(oo),F(Nn),o&&t(jp),o&&t(dt),F(Ln),o&&t(Cp),o&&t(so),F(In),o&&t(qp),o&&t(ct),F(Wn),o&&t(Pp),o&&t(no),F(Un),o&&t(Ap),o&&t(We),F(Hn),F(Gn),F(Yo),F(Zo),o&&t(Op),o&&t(ao),F(Xn),o&&t(Np),o&&t(Qe),F(Yn),F(sr),F(ts),F(os),F(ss),o&&t(Lp),o&&t(lo),F(nr),o&&t(Sp),o&&t(Re),F(rr),F(dr),F(rs),F(as),F(is),F(ls),F(ds),o&&t(Ip),o&&t(po),F(cr),o&&t(Wp),o&&t(Ue),F(pr),F(fr),F(ps),F(hs),o&&t(Qp),o&&t(mo),F(gr),o&&t(Rp),o&&t(He),F(_r),F(Tr),F(us),F(fs),F(gs),o&&t(Up),o&&t(fo),F($r),o&&t(Hp),o&&t(Ve),F(wr),F(Br),F(bs),F(vs),F(ks),o&&t(Vp),o&&t(bo),F(xr),o&&t(Kp),o&&t(Ae),F(Mr),F($s),F(Cr),F(ws),F(ys),o&&t(Jp),o&&t(ko),F(qr),o&&t(Gp),o&&t(Oe),F(Pr),F(Fs),F(Sr),F(Bs),F(xs),F(Ms),o&&t(Xp),o&&t($o),F(Ir),o&&t(Yp),o&&t(Ne),F(Wr),F(zs),F(Hr),F(js),F(Cs),F(qs),o&&t(Zp),o&&t(yo),F(Vr),o&&t(eh),o&&t(Le),F(Kr),F(As),F(Yr),F(Os),F(Ns),o&&t(th),o&&t(Fo),F(Zr),o&&t(oh),o&&t(Se),F(ea),F(Ss),F(na),F(Is),F(Ws),F(Qs),o&&t(sh),o&&t(xo),F(ra),o&&t(nh),o&&t(Ie),F(aa),F(Us),F(ca),F(Hs),F(Vs),F(Ks),o&&t(rh),o&&t(zo),F(pa),o&&t(ah),o&&t(Me),F(ha),F(ka),F(Gs),F(Xs),o&&t(ih),o&&t(Co),F(Ta),o&&t(lh),o&&t(Ee),F($a),F(za),F(Zs),F(en),o&&t(dh),o&&t(Po),F(ja),o&&t(ch),o&&t(ze),F(Ca),F(Ia),F(on),F(sn),o&&t(ph),o&&t(Oo),F(Wa),o&&t(hh),o&&t(je),F(Qa),F(Xa),F(rn),F(an),o&&t(mh),o&&t(Lo),F(Ya),o&&t(uh),o&&t(Ce),F(Za),F(ii),F(dn),F(cn),o&&t(fh),o&&t(Io),F(li),o&&t(gh),o&&t(qe),F(di),F(_i),F(hn),F(mn)}}}const nF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rF(B){return sD(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hF extends Z2{constructor(d){super();eD(this,d,rF,sF,tD,{})}}export{hF as default,nF as metadata};
