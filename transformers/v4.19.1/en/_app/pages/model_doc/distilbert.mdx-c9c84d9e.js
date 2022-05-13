import{S as Z2,i as eD,s as tD,e as s,k as p,w as T,t as a,M as oD,c as n,d as t,m as h,a as r,x as $,h as i,b as m,F as e,g as v,y as w,q as y,o as D,B as F,v as sD,L as ae}from"../../chunks/vendor-6b77c823.js";import{T as ve}from"../../chunks/Tip-39098574.js";import{D as H}from"../../chunks/Docstring-1088f2fb.js";import{C as ie}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as re}from"../../chunks/ExampleCodeBlock-5212b321.js";function nD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=a("Examples:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function rD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function aD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function iD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function lD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function dD(B){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function pD(B){let d,g,c,u,_;return u=new ie({props:{code:`import torch
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
`}}),{c(){d=s("p"),g=a("Example of single-label classification:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function hD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function uD(B){let d,g,c,u,_;return u=new ie({props:{code:`import torch
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
`}}),{c(){d=s("p"),g=a("Example of multi-label classification:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function fD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function mD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function gD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Examples:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function _D(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function vD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function bD(B){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function kD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function TD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function $D(B){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wD(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),u=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),fe=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),me=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),u=n(k,"UL",{});var J=r(u);_=n(J,"LI",{});var be=r(_);l=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),f=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ue=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);fe=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);me=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){v(k,d,M),e(d,g),v(k,c,M),v(k,u,M),e(u,_),e(_,l),e(u,f),e(u,x),e(x,he),v(k,V,M),v(k,E,M),e(E,G),e(E,S),e(S,X),e(E,ue),e(E,I),e(I,fe),e(E,le),v(k,N,M),v(k,P,M),e(P,Y),v(k,K,M),v(k,z,M),e(z,j),e(j,me),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(u),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function yD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function DD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function FD(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),u=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),fe=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),me=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),u=n(k,"UL",{});var J=r(u);_=n(J,"LI",{});var be=r(_);l=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),f=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ue=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);fe=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);me=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){v(k,d,M),e(d,g),v(k,c,M),v(k,u,M),e(u,_),e(_,l),e(u,f),e(u,x),e(x,he),v(k,V,M),v(k,E,M),e(E,G),e(E,S),e(S,X),e(E,ue),e(E,I),e(I,fe),e(E,le),v(k,N,M),v(k,P,M),e(P,Y),v(k,K,M),v(k,z,M),e(z,j),e(j,me),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(u),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function BD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function xD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function MD(B){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ED(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),u=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),fe=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),me=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),u=n(k,"UL",{});var J=r(u);_=n(J,"LI",{});var be=r(_);l=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),f=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ue=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);fe=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);me=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){v(k,d,M),e(d,g),v(k,c,M),v(k,u,M),e(u,_),e(_,l),e(u,f),e(u,x),e(x,he),v(k,V,M),v(k,E,M),e(E,G),e(E,S),e(S,X),e(E,ue),e(E,I),e(I,fe),e(E,le),v(k,N,M),v(k,P,M),e(P,Y),v(k,K,M),v(k,z,M),e(z,j),e(j,me),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(u),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function zD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function jD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function CD(B){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function qD(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),u=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),fe=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),me=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),u=n(k,"UL",{});var J=r(u);_=n(J,"LI",{});var be=r(_);l=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),f=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ue=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);fe=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);me=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){v(k,d,M),e(d,g),v(k,c,M),v(k,u,M),e(u,_),e(_,l),e(u,f),e(u,x),e(x,he),v(k,V,M),v(k,E,M),e(E,G),e(E,S),e(S,X),e(E,ue),e(E,I),e(I,fe),e(E,le),v(k,N,M),v(k,P,M),e(P,Y),v(k,K,M),v(k,z,M),e(z,j),e(j,me),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(u),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function PD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function AD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function OD(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),u=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),fe=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),me=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),u=n(k,"UL",{});var J=r(u);_=n(J,"LI",{});var be=r(_);l=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),f=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ue=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);fe=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);me=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){v(k,d,M),e(d,g),v(k,c,M),v(k,u,M),e(u,_),e(_,l),e(u,f),e(u,x),e(x,he),v(k,V,M),v(k,E,M),e(E,G),e(E,S),e(S,X),e(E,ue),e(E,I),e(I,fe),e(E,le),v(k,N,M),v(k,P,M),e(P,Y),v(k,K,M),v(k,z,M),e(z,j),e(j,me),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(u),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function ND(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function LD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function SD(B){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ID(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe;return{c(){d=s("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),u=s("ul"),_=s("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),x=s("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=p(),E=s("p"),G=a("This second option is useful when using "),S=s("code"),X=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=s("code"),fe=a("model(inputs)"),le=a("."),N=p(),P=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=p(),z=s("ul"),j=s("li"),me=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ge=a(" only and nothing else: "),Q=s("code"),de=a("model(inputs_ids)"),ee=p(),A=s("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),_e=p(),q=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s("code"),pe=a('model({"input_ids": input_ids})')},l(k){d=n(k,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(k),u=n(k,"UL",{});var J=r(u);_=n(J,"LI",{});var be=r(_);l=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),f=h(J),x=n(J,"LI",{});var $e=r(x);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),V=h(k),E=n(k,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ke=r(S);X=i(ke,"tf.keras.Model.fit"),ke.forEach(t),ue=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);fe=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(k),P=n(k,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=h(k),z=n(k,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);me=i(U,"a single Tensor with "),W=n(U,"CODE",{});var De=r(W);oe=i(De,"input_ids"),De.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var Fe=r(Q);de=i(Fe,"model(inputs_ids)"),Fe.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Be=r(L);se=i(Be,"model([input_ids, attention_mask])"),Be.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var xe=r(R);pe=i(xe,'model({"input_ids": input_ids})'),xe.forEach(t),ne.forEach(t),C.forEach(t)},m(k,M){v(k,d,M),e(d,g),v(k,c,M),v(k,u,M),e(u,_),e(_,l),e(u,f),e(u,x),e(x,he),v(k,V,M),v(k,E,M),e(E,G),e(E,S),e(S,X),e(E,ue),e(E,I),e(I,fe),e(E,le),v(k,N,M),v(k,P,M),e(P,Y),v(k,K,M),v(k,z,M),e(z,j),e(j,me),e(j,W),e(W,oe),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,se),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(k){k&&t(d),k&&t(c),k&&t(u),k&&t(V),k&&t(E),k&&t(N),k&&t(P),k&&t(K),k&&t(z)}}}function WD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function QD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function RD(B){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function UD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function HD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function VD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function KD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function JD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function GD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function XD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function YD(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function ZD(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function eF(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function tF(B){let d,g,c,u,_;return{c(){d=s("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(f,"CODE",{});var x=r(c);u=i(x,"Module"),x.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){v(l,d,f),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function oF(B){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=a("Example:"),c=p(),T(u.$$.fragment)},l(l){d=n(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=h(l),$(u.$$.fragment,l)},m(l,f){v(l,d,f),e(d,g),v(l,c,f),w(u,l,f),_=!0},p:ae,i(l){_||(y(u.$$.fragment,l),_=!0)},o(l){D(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function sF(B){let d,g,c,u,_,l,f,x,he,V,E,G,S,X,ue,I,fe,le,N,P,Y,K,z,j,me,W,oe,ge,Q,de,ee,A,ce,L,se,_e,q,te,R,pe,k,M,J,be,$e,O,ke,we,ye,C,U,De,Fe,Z,Be,ne,xe,wu,xp,pt,yu,jn,Du,Fu,Cn,Bu,xu,qn,Mu,Eu,Mp,eo,Uo,Cl,Pn,zu,ql,ju,Ep,lt,An,Cu,xt,qu,Fi,Pu,Au,Bi,Ou,Nu,On,Lu,Su,Iu,to,Wu,xi,Qu,Ru,Mi,Uu,Hu,Vu,Ho,zp,oo,Vo,Pl,Nn,Ku,Al,Ju,jp,dt,Ln,Gu,Ol,Xu,Yu,Ko,Ei,Zu,ef,zi,tf,of,sf,Sn,nf,ji,rf,af,Cp,so,Jo,Nl,In,lf,Ll,df,qp,ct,Wn,cf,Qn,pf,Sl,hf,uf,ff,Go,Ci,mf,gf,qi,_f,vf,bf,Rn,kf,Pi,Tf,$f,Pp,no,Xo,Il,Un,wf,Wl,yf,Ap,We,Hn,Df,Ql,Ff,Bf,Vn,xf,Ai,Mf,Ef,zf,Kn,jf,Jn,Cf,qf,Pf,ht,Gn,Af,ro,Of,Oi,Nf,Lf,Rl,Sf,If,Wf,Yo,Qf,Zo,Op,ao,es,Ul,Xn,Rf,Hl,Uf,Np,Qe,Yn,Hf,Zn,Vf,Vl,Kf,Jf,Gf,er,Xf,Ni,Yf,Zf,em,tr,tm,or,om,sm,nm,Ke,sr,rm,io,am,Li,im,lm,Kl,dm,cm,pm,ts,hm,os,um,ss,Lp,lo,ns,Jl,nr,fm,Gl,mm,Sp,Re,rr,gm,Xl,_m,vm,ar,bm,Si,km,Tm,$m,ir,wm,lr,ym,Dm,Fm,Pe,dr,Bm,co,xm,Ii,Mm,Em,Yl,zm,jm,Cm,rs,qm,as,Pm,is,Am,ls,Om,ds,Ip,po,cs,Zl,cr,Nm,ed,Lm,Wp,Ue,pr,Sm,td,Im,Wm,hr,Qm,Wi,Rm,Um,Hm,ur,Vm,fr,Km,Jm,Gm,ut,mr,Xm,ho,Ym,Qi,Zm,eg,od,tg,og,sg,ps,ng,hs,Qp,uo,us,sd,gr,rg,nd,ag,Rp,He,_r,ig,rd,lg,dg,vr,cg,Ri,pg,hg,ug,br,fg,kr,mg,gg,_g,Je,Tr,vg,fo,bg,Ui,kg,Tg,ad,$g,wg,yg,fs,Dg,ms,Fg,gs,Up,mo,_s,id,$r,Bg,ld,xg,Hp,Ve,wr,Mg,go,Eg,dd,zg,jg,cd,Cg,qg,Pg,yr,Ag,Hi,Og,Ng,Lg,Dr,Sg,Fr,Ig,Wg,Qg,Ge,Br,Rg,_o,Ug,Vi,Hg,Vg,pd,Kg,Jg,Gg,vs,Xg,bs,Yg,ks,Vp,vo,Ts,hd,xr,Zg,ud,e_,Kp,Ae,Mr,t_,fd,o_,s_,Er,n_,Ki,r_,a_,i_,zr,l_,jr,d_,c_,p_,$s,h_,ft,Cr,u_,bo,f_,Ji,m_,g_,md,__,v_,b_,ws,k_,ys,Jp,ko,Ds,gd,qr,T_,_d,$_,Gp,Oe,Pr,w_,Ar,y_,vd,D_,F_,B_,Or,x_,Gi,M_,E_,z_,Nr,j_,Lr,C_,q_,P_,Fs,A_,Xe,Sr,O_,To,N_,Xi,L_,S_,bd,I_,W_,Q_,Bs,R_,xs,U_,Ms,Xp,$o,Es,kd,Ir,H_,Td,V_,Yp,Ne,Wr,K_,$d,J_,G_,Qr,X_,Yi,Y_,Z_,ev,Rr,tv,Ur,ov,sv,nv,zs,rv,Ye,Hr,av,wo,iv,Zi,lv,dv,wd,cv,pv,hv,js,uv,Cs,fv,qs,Zp,yo,Ps,yd,Vr,mv,Dd,gv,eh,Le,Kr,_v,Fd,vv,bv,Jr,kv,el,Tv,$v,wv,Gr,yv,Xr,Dv,Fv,Bv,As,xv,mt,Yr,Mv,Do,Ev,tl,zv,jv,Bd,Cv,qv,Pv,Os,Av,Ns,th,Fo,Ls,xd,Zr,Ov,Md,Nv,oh,Se,ea,Lv,Ed,Sv,Iv,ta,Wv,ol,Qv,Rv,Uv,oa,Hv,sa,Vv,Kv,Jv,Ss,Gv,Ze,na,Xv,Bo,Yv,sl,Zv,eb,zd,tb,ob,sb,Is,nb,Ws,rb,Qs,sh,xo,Rs,jd,ra,ab,Cd,ib,nh,Ie,aa,lb,Mo,db,qd,cb,pb,Pd,hb,ub,fb,ia,mb,nl,gb,_b,vb,la,bb,da,kb,Tb,$b,Us,wb,et,ca,yb,Eo,Db,rl,Fb,Bb,Ad,xb,Mb,Eb,Hs,zb,Vs,jb,Ks,rh,zo,Js,Od,pa,Cb,Nd,qb,ah,Me,ha,Pb,Ld,Ab,Ob,ua,Nb,al,Lb,Sb,Ib,fa,Wb,ma,Qb,Rb,Ub,Sd,Hb,Vb,Mt,Id,ga,Kb,Jb,Wd,_a,Gb,Xb,Qd,va,Yb,Zb,Rd,ba,e1,t1,gt,ka,o1,jo,s1,Ud,n1,r1,Hd,a1,i1,l1,Gs,d1,Xs,ih,Co,Ys,Vd,Ta,c1,Kd,p1,lh,Ee,$a,h1,wa,u1,Jd,f1,m1,g1,ya,_1,il,v1,b1,k1,Da,T1,Fa,$1,w1,y1,Gd,D1,F1,Et,Xd,Ba,B1,x1,Yd,xa,M1,E1,Zd,Ma,z1,j1,ec,Ea,C1,q1,_t,za,P1,qo,A1,tc,O1,N1,oc,L1,S1,I1,Zs,W1,en,dh,Po,tn,sc,ja,Q1,nc,R1,ch,ze,Ca,U1,rc,H1,V1,qa,K1,ll,J1,G1,X1,Pa,Y1,Aa,Z1,ek,tk,ac,ok,sk,zt,ic,Oa,nk,rk,lc,Na,ak,ik,dc,La,lk,dk,cc,Sa,ck,pk,vt,Ia,hk,Ao,uk,pc,fk,mk,hc,gk,_k,vk,on,bk,sn,ph,Oo,nn,uc,Wa,kk,fc,Tk,hh,je,Qa,$k,mc,wk,yk,Ra,Dk,dl,Fk,Bk,xk,Ua,Mk,Ha,Ek,zk,jk,gc,Ck,qk,jt,_c,Va,Pk,Ak,vc,Ka,Ok,Nk,bc,Ja,Lk,Sk,kc,Ga,Ik,Wk,bt,Xa,Qk,No,Rk,Tc,Uk,Hk,$c,Vk,Kk,Jk,rn,Gk,an,uh,Lo,ln,wc,Ya,Xk,yc,Yk,fh,Ce,Za,Zk,Dc,eT,tT,ei,oT,cl,sT,nT,rT,ti,aT,oi,iT,lT,dT,Fc,cT,pT,Ct,Bc,si,hT,uT,xc,ni,fT,mT,Mc,ri,gT,_T,Ec,ai,vT,bT,kt,ii,kT,So,TT,zc,$T,wT,jc,yT,DT,FT,dn,BT,cn,mh,Io,pn,Cc,li,xT,qc,MT,gh,qe,di,ET,Wo,zT,Pc,jT,CT,Ac,qT,PT,AT,ci,OT,pl,NT,LT,ST,pi,IT,hi,WT,QT,RT,Oc,UT,HT,qt,Nc,ui,VT,KT,Lc,fi,JT,GT,Sc,mi,XT,YT,Ic,gi,ZT,e$,Tt,_i,t$,Qo,o$,Wc,s$,n$,Qc,r$,a$,i$,hn,l$,un,_h;return l=new Te({}),X=new Te({}),Pn=new Te({}),An=new H({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/configuration_distilbert.py#L37"}}),Ho=new re({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nD]},$$scope:{ctx:B}}}),Nn=new Te({}),Ln=new H({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),In=new Te({}),Wn=new H({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),Un=new Te({}),Hn=new H({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L453"}}),Gn=new H({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L525",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new ve({props:{$$slots:{default:[rD]},$$scope:{ctx:B}}}),Zo=new re({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aD]},$$scope:{ctx:B}}}),Xn=new Te({}),Yn=new H({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L581"}}),sr=new H({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L623",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new ve({props:{$$slots:{default:[iD]},$$scope:{ctx:B}}}),os=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lD]},$$scope:{ctx:B}}}),ss=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dD]},$$scope:{ctx:B}}}),nr=new Te({}),rr=new H({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L687"}}),dr=new H({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L721",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new ve({props:{$$slots:{default:[cD]},$$scope:{ctx:B}}}),as=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pD]},$$scope:{ctx:B}}}),is=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hD]},$$scope:{ctx:B}}}),ls=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[uD]},$$scope:{ctx:B}}}),ds=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[fD]},$$scope:{ctx:B}}}),cr=new Te({}),pr=new H({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L1017"}}),mr=new H({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ps=new ve({props:{$$slots:{default:[mD]},$$scope:{ctx:B}}}),hs=new re({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gD]},$$scope:{ctx:B}}}),gr=new Te({}),_r=new H({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L922"}}),Tr=new H({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L954",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fs=new ve({props:{$$slots:{default:[_D]},$$scope:{ctx:B}}}),ms=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[vD]},$$scope:{ctx:B}}}),gs=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[bD]},$$scope:{ctx:B}}}),$r=new Te({}),wr=new H({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L805"}}),Br=new H({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_distilbert.py#L837",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vs=new ve({props:{$$slots:{default:[kD]},$$scope:{ctx:B}}}),bs=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[TD]},$$scope:{ctx:B}}}),ks=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[$D]},$$scope:{ctx:B}}}),xr=new Te({}),Mr=new H({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L522"}}),$s=new ve({props:{$$slots:{default:[wD]},$$scope:{ctx:B}}}),Cr=new H({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ws=new ve({props:{$$slots:{default:[yD]},$$scope:{ctx:B}}}),ys=new re({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[DD]},$$scope:{ctx:B}}}),qr=new Te({}),Pr=new H({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L609"}}),Fs=new ve({props:{$$slots:{default:[FD]},$$scope:{ctx:B}}}),Sr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bs=new ve({props:{$$slots:{default:[BD]},$$scope:{ctx:B}}}),xs=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[xD]},$$scope:{ctx:B}}}),Ms=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[MD]},$$scope:{ctx:B}}}),Ir=new Te({}),Wr=new H({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L699"}}),zs=new ve({props:{$$slots:{default:[ED]},$$scope:{ctx:B}}}),Hr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),js=new ve({props:{$$slots:{default:[zD]},$$scope:{ctx:B}}}),Cs=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[jD]},$$scope:{ctx:B}}}),qs=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[CD]},$$scope:{ctx:B}}}),Vr=new Te({}),Kr=new H({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L862"}}),As=new ve({props:{$$slots:{default:[qD]},$$scope:{ctx:B}}}),Yr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L888",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Os=new ve({props:{$$slots:{default:[PD]},$$scope:{ctx:B}}}),Ns=new re({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AD]},$$scope:{ctx:B}}}),Zr=new Te({}),ea=new H({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L786"}}),Ss=new ve({props:{$$slots:{default:[OD]},$$scope:{ctx:B}}}),na=new H({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L797",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Is=new ve({props:{$$slots:{default:[ND]},$$scope:{ctx:B}}}),Ws=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[LD]},$$scope:{ctx:B}}}),Qs=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[SD]},$$scope:{ctx:B}}}),ra=new Te({}),aa=new H({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L987"}}),Us=new ve({props:{$$slots:{default:[ID]},$$scope:{ctx:B}}}),ca=new H({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_tf_distilbert.py#L998",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Hs=new ve({props:{$$slots:{default:[WD]},$$scope:{ctx:B}}}),Vs=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QD]},$$scope:{ctx:B}}}),Ks=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RD]},$$scope:{ctx:B}}}),pa=new Te({}),ha=new H({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),ka=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),Gs=new ve({props:{$$slots:{default:[UD]},$$scope:{ctx:B}}}),Xs=new re({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[HD]},$$scope:{ctx:B}}}),Ta=new Te({}),$a=new H({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),za=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zs=new ve({props:{$$slots:{default:[VD]},$$scope:{ctx:B}}}),en=new re({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[KD]},$$scope:{ctx:B}}}),ja=new Te({}),Ca=new H({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),Ia=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new ve({props:{$$slots:{default:[JD]},$$scope:{ctx:B}}}),sn=new re({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GD]},$$scope:{ctx:B}}}),Wa=new Te({}),Qa=new H({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),Xa=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new ve({props:{$$slots:{default:[XD]},$$scope:{ctx:B}}}),an=new re({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YD]},$$scope:{ctx:B}}}),Ya=new Te({}),Za=new H({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),ii=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new ve({props:{$$slots:{default:[ZD]},$$scope:{ctx:B}}}),cn=new re({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:B}}}),li=new Te({}),di=new H({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),_i=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new ve({props:{$$slots:{default:[tF]},$$scope:{ctx:B}}}),un=new re({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[oF]},$$scope:{ctx:B}}}),{c(){d=s("meta"),g=p(),c=s("h1"),u=s("a"),_=s("span"),T(l.$$.fragment),f=p(),x=s("span"),he=a("DistilBERT"),V=p(),E=s("h2"),G=s("a"),S=s("span"),T(X.$$.fragment),ue=p(),I=s("span"),fe=a("Overview"),le=p(),N=s("p"),P=a("The DistilBERT model was proposed in the blog post "),Y=s("a"),K=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),z=a(", and the paper "),j=s("a"),me=a(`DistilBERT, a
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
study.`),q=p(),te=s("p"),R=a("Tips:"),pe=p(),k=s("ul"),M=s("li"),J=a("DistilBERT doesn\u2019t have "),be=s("code"),$e=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ke=s("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=s("code"),U=a("[SEP]"),De=a(")."),Fe=p(),Z=s("li"),Be=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=s("code"),xe=a("position_ids"),wu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),xp=p(),pt=s("p"),yu=a("This model was contributed by "),jn=s("a"),Du=a("victorsanh"),Fu=a(`. This model jax version was
contributed by `),Cn=s("a"),Bu=a("kamalkraj"),xu=a(". The original code can be found "),qn=s("a"),Mu=a("here"),Eu=a("."),Mp=p(),eo=s("h2"),Uo=s("a"),Cl=s("span"),T(Pn.$$.fragment),zu=p(),ql=s("span"),ju=a("DistilBertConfig"),Ep=p(),lt=s("div"),T(An.$$.fragment),Cu=p(),xt=s("p"),qu=a("This is the configuration class to store the configuration of a "),Fi=s("a"),Pu=a("DistilBertModel"),Au=a(" or a "),Bi=s("a"),Ou=a("TFDistilBertModel"),Nu=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=s("a"),Lu=a("distilbert-base-uncased"),Su=a(" architecture."),Iu=p(),to=s("p"),Wu=a("Configuration objects inherit from "),xi=s("a"),Qu=a("PretrainedConfig"),Ru=a(` and can be used to control the model outputs. Read the
documentation from `),Mi=s("a"),Uu=a("PretrainedConfig"),Hu=a(" for more information."),Vu=p(),T(Ho.$$.fragment),zp=p(),oo=s("h2"),Vo=s("a"),Pl=s("span"),T(Nn.$$.fragment),Ku=p(),Al=s("span"),Ju=a("DistilBertTokenizer"),jp=p(),dt=s("div"),T(Ln.$$.fragment),Gu=p(),Ol=s("p"),Xu=a("Construct a DistilBERT tokenizer."),Yu=p(),Ko=s("p"),Ei=s("a"),Zu=a("DistilBertTokenizer"),ef=a(" is identical to "),zi=s("a"),tf=a("BertTokenizer"),of=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),sf=p(),Sn=s("p"),nf=a("Refer to superclass "),ji=s("a"),rf=a("BertTokenizer"),af=a(" for usage examples and documentation concerning parameters."),Cp=p(),so=s("h2"),Jo=s("a"),Nl=s("span"),T(In.$$.fragment),lf=p(),Ll=s("span"),df=a("DistilBertTokenizerFast"),qp=p(),ct=s("div"),T(Wn.$$.fragment),cf=p(),Qn=s("p"),pf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=s("em"),hf=a("tokenizers"),uf=a(" library)."),ff=p(),Go=s("p"),Ci=s("a"),mf=a("DistilBertTokenizerFast"),gf=a(" is identical to "),qi=s("a"),_f=a("BertTokenizerFast"),vf=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bf=p(),Rn=s("p"),kf=a("Refer to superclass "),Pi=s("a"),Tf=a("BertTokenizerFast"),$f=a(" for usage examples and documentation concerning parameters."),Pp=p(),no=s("h2"),Xo=s("a"),Il=s("span"),T(Un.$$.fragment),wf=p(),Wl=s("span"),yf=a("DistilBertModel"),Ap=p(),We=s("div"),T(Hn.$$.fragment),Df=p(),Ql=s("p"),Ff=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Bf=p(),Vn=s("p"),xf=a("This model inherits from "),Ai=s("a"),Mf=a("PreTrainedModel"),Ef=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf=p(),Kn=s("p"),jf=a("This model is also a PyTorch "),Jn=s("a"),Cf=a("torch.nn.Module"),qf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pf=p(),ht=s("div"),T(Gn.$$.fragment),Af=p(),ro=s("p"),Of=a("The "),Oi=s("a"),Nf=a("DistilBertModel"),Lf=a(" forward method, overrides the "),Rl=s("code"),Sf=a("__call__"),If=a(" special method."),Wf=p(),T(Yo.$$.fragment),Qf=p(),T(Zo.$$.fragment),Op=p(),ao=s("h2"),es=s("a"),Ul=s("span"),T(Xn.$$.fragment),Rf=p(),Hl=s("span"),Uf=a("DistilBertForMaskedLM"),Np=p(),Qe=s("div"),T(Yn.$$.fragment),Hf=p(),Zn=s("p"),Vf=a("DistilBert Model with a "),Vl=s("code"),Kf=a("masked language modeling"),Jf=a(" head on top."),Gf=p(),er=s("p"),Xf=a("This model inherits from "),Ni=s("a"),Yf=a("PreTrainedModel"),Zf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em=p(),tr=s("p"),tm=a("This model is also a PyTorch "),or=s("a"),om=a("torch.nn.Module"),sm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nm=p(),Ke=s("div"),T(sr.$$.fragment),rm=p(),io=s("p"),am=a("The "),Li=s("a"),im=a("DistilBertForMaskedLM"),lm=a(" forward method, overrides the "),Kl=s("code"),dm=a("__call__"),cm=a(" special method."),pm=p(),T(ts.$$.fragment),hm=p(),T(os.$$.fragment),um=p(),T(ss.$$.fragment),Lp=p(),lo=s("h2"),ns=s("a"),Jl=s("span"),T(nr.$$.fragment),fm=p(),Gl=s("span"),mm=a("DistilBertForSequenceClassification"),Sp=p(),Re=s("div"),T(rr.$$.fragment),gm=p(),Xl=s("p"),_m=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vm=p(),ar=s("p"),bm=a("This model inherits from "),Si=s("a"),km=a("PreTrainedModel"),Tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=p(),ir=s("p"),wm=a("This model is also a PyTorch "),lr=s("a"),ym=a("torch.nn.Module"),Dm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fm=p(),Pe=s("div"),T(dr.$$.fragment),Bm=p(),co=s("p"),xm=a("The "),Ii=s("a"),Mm=a("DistilBertForSequenceClassification"),Em=a(" forward method, overrides the "),Yl=s("code"),zm=a("__call__"),jm=a(" special method."),Cm=p(),T(rs.$$.fragment),qm=p(),T(as.$$.fragment),Pm=p(),T(is.$$.fragment),Am=p(),T(ls.$$.fragment),Om=p(),T(ds.$$.fragment),Ip=p(),po=s("h2"),cs=s("a"),Zl=s("span"),T(cr.$$.fragment),Nm=p(),ed=s("span"),Lm=a("DistilBertForMultipleChoice"),Wp=p(),Ue=s("div"),T(pr.$$.fragment),Sm=p(),td=s("p"),Im=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wm=p(),hr=s("p"),Qm=a("This model inherits from "),Wi=s("a"),Rm=a("PreTrainedModel"),Um=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=p(),ur=s("p"),Vm=a("This model is also a PyTorch "),fr=s("a"),Km=a("torch.nn.Module"),Jm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gm=p(),ut=s("div"),T(mr.$$.fragment),Xm=p(),ho=s("p"),Ym=a("The "),Qi=s("a"),Zm=a("DistilBertForMultipleChoice"),eg=a(" forward method, overrides the "),od=s("code"),tg=a("__call__"),og=a(" special method."),sg=p(),T(ps.$$.fragment),ng=p(),T(hs.$$.fragment),Qp=p(),uo=s("h2"),us=s("a"),sd=s("span"),T(gr.$$.fragment),rg=p(),nd=s("span"),ag=a("DistilBertForTokenClassification"),Rp=p(),He=s("div"),T(_r.$$.fragment),ig=p(),rd=s("p"),lg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=p(),vr=s("p"),cg=a("This model inherits from "),Ri=s("a"),pg=a("PreTrainedModel"),hg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ug=p(),br=s("p"),fg=a("This model is also a PyTorch "),kr=s("a"),mg=a("torch.nn.Module"),gg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=p(),Je=s("div"),T(Tr.$$.fragment),vg=p(),fo=s("p"),bg=a("The "),Ui=s("a"),kg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),ad=s("code"),$g=a("__call__"),wg=a(" special method."),yg=p(),T(fs.$$.fragment),Dg=p(),T(ms.$$.fragment),Fg=p(),T(gs.$$.fragment),Up=p(),mo=s("h2"),_s=s("a"),id=s("span"),T($r.$$.fragment),Bg=p(),ld=s("span"),xg=a("DistilBertForQuestionAnswering"),Hp=p(),Ve=s("div"),T(wr.$$.fragment),Mg=p(),go=s("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=s("code"),zg=a("span start logits"),jg=a(" and "),cd=s("code"),Cg=a("span end logits"),qg=a(")."),Pg=p(),yr=s("p"),Ag=a("This model inherits from "),Hi=s("a"),Og=a("PreTrainedModel"),Ng=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=p(),Dr=s("p"),Sg=a("This model is also a PyTorch "),Fr=s("a"),Ig=a("torch.nn.Module"),Wg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=p(),Ge=s("div"),T(Br.$$.fragment),Rg=p(),_o=s("p"),Ug=a("The "),Vi=s("a"),Hg=a("DistilBertForQuestionAnswering"),Vg=a(" forward method, overrides the "),pd=s("code"),Kg=a("__call__"),Jg=a(" special method."),Gg=p(),T(vs.$$.fragment),Xg=p(),T(bs.$$.fragment),Yg=p(),T(ks.$$.fragment),Vp=p(),vo=s("h2"),Ts=s("a"),hd=s("span"),T(xr.$$.fragment),Zg=p(),ud=s("span"),e_=a("TFDistilBertModel"),Kp=p(),Ae=s("div"),T(Mr.$$.fragment),t_=p(),fd=s("p"),o_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),s_=p(),Er=s("p"),n_=a("This model inherits from "),Ki=s("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=p(),zr=s("p"),l_=a("This model is also a "),jr=s("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=p(),T($s.$$.fragment),h_=p(),ft=s("div"),T(Cr.$$.fragment),u_=p(),bo=s("p"),f_=a("The "),Ji=s("a"),m_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),md=s("code"),__=a("__call__"),v_=a(" special method."),b_=p(),T(ws.$$.fragment),k_=p(),T(ys.$$.fragment),Jp=p(),ko=s("h2"),Ds=s("a"),gd=s("span"),T(qr.$$.fragment),T_=p(),_d=s("span"),$_=a("TFDistilBertForMaskedLM"),Gp=p(),Oe=s("div"),T(Pr.$$.fragment),w_=p(),Ar=s("p"),y_=a("DistilBert Model with a "),vd=s("code"),D_=a("masked language modeling"),F_=a(" head on top."),B_=p(),Or=s("p"),x_=a("This model inherits from "),Gi=s("a"),M_=a("TFPreTrainedModel"),E_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=p(),Nr=s("p"),j_=a("This model is also a "),Lr=s("a"),C_=a("tf.keras.Model"),q_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),P_=p(),T(Fs.$$.fragment),A_=p(),Xe=s("div"),T(Sr.$$.fragment),O_=p(),To=s("p"),N_=a("The "),Xi=s("a"),L_=a("TFDistilBertForMaskedLM"),S_=a(" forward method, overrides the "),bd=s("code"),I_=a("__call__"),W_=a(" special method."),Q_=p(),T(Bs.$$.fragment),R_=p(),T(xs.$$.fragment),U_=p(),T(Ms.$$.fragment),Xp=p(),$o=s("h2"),Es=s("a"),kd=s("span"),T(Ir.$$.fragment),H_=p(),Td=s("span"),V_=a("TFDistilBertForSequenceClassification"),Yp=p(),Ne=s("div"),T(Wr.$$.fragment),K_=p(),$d=s("p"),J_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=p(),Qr=s("p"),X_=a("This model inherits from "),Yi=s("a"),Y_=a("TFPreTrainedModel"),Z_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ev=p(),Rr=s("p"),tv=a("This model is also a "),Ur=s("a"),ov=a("tf.keras.Model"),sv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nv=p(),T(zs.$$.fragment),rv=p(),Ye=s("div"),T(Hr.$$.fragment),av=p(),wo=s("p"),iv=a("The "),Zi=s("a"),lv=a("TFDistilBertForSequenceClassification"),dv=a(" forward method, overrides the "),wd=s("code"),cv=a("__call__"),pv=a(" special method."),hv=p(),T(js.$$.fragment),uv=p(),T(Cs.$$.fragment),fv=p(),T(qs.$$.fragment),Zp=p(),yo=s("h2"),Ps=s("a"),yd=s("span"),T(Vr.$$.fragment),mv=p(),Dd=s("span"),gv=a("TFDistilBertForMultipleChoice"),eh=p(),Le=s("div"),T(Kr.$$.fragment),_v=p(),Fd=s("p"),vv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),bv=p(),Jr=s("p"),kv=a("This model inherits from "),el=s("a"),Tv=a("TFPreTrainedModel"),$v=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wv=p(),Gr=s("p"),yv=a("This model is also a "),Xr=s("a"),Dv=a("tf.keras.Model"),Fv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bv=p(),T(As.$$.fragment),xv=p(),mt=s("div"),T(Yr.$$.fragment),Mv=p(),Do=s("p"),Ev=a("The "),tl=s("a"),zv=a("TFDistilBertForMultipleChoice"),jv=a(" forward method, overrides the "),Bd=s("code"),Cv=a("__call__"),qv=a(" special method."),Pv=p(),T(Os.$$.fragment),Av=p(),T(Ns.$$.fragment),th=p(),Fo=s("h2"),Ls=s("a"),xd=s("span"),T(Zr.$$.fragment),Ov=p(),Md=s("span"),Nv=a("TFDistilBertForTokenClassification"),oh=p(),Se=s("div"),T(ea.$$.fragment),Lv=p(),Ed=s("p"),Sv=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Iv=p(),ta=s("p"),Wv=a("This model inherits from "),ol=s("a"),Qv=a("TFPreTrainedModel"),Rv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=p(),oa=s("p"),Hv=a("This model is also a "),sa=s("a"),Vv=a("tf.keras.Model"),Kv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jv=p(),T(Ss.$$.fragment),Gv=p(),Ze=s("div"),T(na.$$.fragment),Xv=p(),Bo=s("p"),Yv=a("The "),sl=s("a"),Zv=a("TFDistilBertForTokenClassification"),eb=a(" forward method, overrides the "),zd=s("code"),tb=a("__call__"),ob=a(" special method."),sb=p(),T(Is.$$.fragment),nb=p(),T(Ws.$$.fragment),rb=p(),T(Qs.$$.fragment),sh=p(),xo=s("h2"),Rs=s("a"),jd=s("span"),T(ra.$$.fragment),ab=p(),Cd=s("span"),ib=a("TFDistilBertForQuestionAnswering"),nh=p(),Ie=s("div"),T(aa.$$.fragment),lb=p(),Mo=s("p"),db=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=s("code"),cb=a("span start logits"),pb=a(" and "),Pd=s("code"),hb=a("span end logits"),ub=a(")."),fb=p(),ia=s("p"),mb=a("This model inherits from "),nl=s("a"),gb=a("TFPreTrainedModel"),_b=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=p(),la=s("p"),bb=a("This model is also a "),da=s("a"),kb=a("tf.keras.Model"),Tb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$b=p(),T(Us.$$.fragment),wb=p(),et=s("div"),T(ca.$$.fragment),yb=p(),Eo=s("p"),Db=a("The "),rl=s("a"),Fb=a("TFDistilBertForQuestionAnswering"),Bb=a(" forward method, overrides the "),Ad=s("code"),xb=a("__call__"),Mb=a(" special method."),Eb=p(),T(Hs.$$.fragment),zb=p(),T(Vs.$$.fragment),jb=p(),T(Ks.$$.fragment),rh=p(),zo=s("h2"),Js=s("a"),Od=s("span"),T(pa.$$.fragment),Cb=p(),Nd=s("span"),qb=a("FlaxDistilBertModel"),ah=p(),Me=s("div"),T(ha.$$.fragment),Pb=p(),Ld=s("p"),Ab=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ob=p(),ua=s("p"),Nb=a("This model inherits from "),al=s("a"),Lb=a("FlaxPreTrainedModel"),Sb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ib=p(),fa=s("p"),Wb=a("This model is also a Flax Linen "),ma=s("a"),Qb=a("flax.linen.Module"),Rb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ub=p(),Sd=s("p"),Hb=a("Finally, this model supports inherent JAX features such as:"),Vb=p(),Mt=s("ul"),Id=s("li"),ga=s("a"),Kb=a("Just-In-Time (JIT) compilation"),Jb=p(),Wd=s("li"),_a=s("a"),Gb=a("Automatic Differentiation"),Xb=p(),Qd=s("li"),va=s("a"),Yb=a("Vectorization"),Zb=p(),Rd=s("li"),ba=s("a"),e1=a("Parallelization"),t1=p(),gt=s("div"),T(ka.$$.fragment),o1=p(),jo=s("p"),s1=a("The "),Ud=s("code"),n1=a("FlaxDistilBertPreTrainedModel"),r1=a(" forward method, overrides the "),Hd=s("code"),a1=a("__call__"),i1=a(" special method."),l1=p(),T(Gs.$$.fragment),d1=p(),T(Xs.$$.fragment),ih=p(),Co=s("h2"),Ys=s("a"),Vd=s("span"),T(Ta.$$.fragment),c1=p(),Kd=s("span"),p1=a("FlaxDistilBertForMaskedLM"),lh=p(),Ee=s("div"),T($a.$$.fragment),h1=p(),wa=s("p"),u1=a("DistilBert Model with a "),Jd=s("code"),f1=a("language modeling"),m1=a(" head on top."),g1=p(),ya=s("p"),_1=a("This model inherits from "),il=s("a"),v1=a("FlaxPreTrainedModel"),b1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k1=p(),Da=s("p"),T1=a("This model is also a Flax Linen "),Fa=s("a"),$1=a("flax.linen.Module"),w1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),y1=p(),Gd=s("p"),D1=a("Finally, this model supports inherent JAX features such as:"),F1=p(),Et=s("ul"),Xd=s("li"),Ba=s("a"),B1=a("Just-In-Time (JIT) compilation"),x1=p(),Yd=s("li"),xa=s("a"),M1=a("Automatic Differentiation"),E1=p(),Zd=s("li"),Ma=s("a"),z1=a("Vectorization"),j1=p(),ec=s("li"),Ea=s("a"),C1=a("Parallelization"),q1=p(),_t=s("div"),T(za.$$.fragment),P1=p(),qo=s("p"),A1=a("The "),tc=s("code"),O1=a("FlaxDistilBertPreTrainedModel"),N1=a(" forward method, overrides the "),oc=s("code"),L1=a("__call__"),S1=a(" special method."),I1=p(),T(Zs.$$.fragment),W1=p(),T(en.$$.fragment),dh=p(),Po=s("h2"),tn=s("a"),sc=s("span"),T(ja.$$.fragment),Q1=p(),nc=s("span"),R1=a("FlaxDistilBertForSequenceClassification"),ch=p(),ze=s("div"),T(Ca.$$.fragment),U1=p(),rc=s("p"),H1=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V1=p(),qa=s("p"),K1=a("This model inherits from "),ll=s("a"),J1=a("FlaxPreTrainedModel"),G1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),X1=p(),Pa=s("p"),Y1=a("This model is also a Flax Linen "),Aa=s("a"),Z1=a("flax.linen.Module"),ek=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tk=p(),ac=s("p"),ok=a("Finally, this model supports inherent JAX features such as:"),sk=p(),zt=s("ul"),ic=s("li"),Oa=s("a"),nk=a("Just-In-Time (JIT) compilation"),rk=p(),lc=s("li"),Na=s("a"),ak=a("Automatic Differentiation"),ik=p(),dc=s("li"),La=s("a"),lk=a("Vectorization"),dk=p(),cc=s("li"),Sa=s("a"),ck=a("Parallelization"),pk=p(),vt=s("div"),T(Ia.$$.fragment),hk=p(),Ao=s("p"),uk=a("The "),pc=s("code"),fk=a("FlaxDistilBertPreTrainedModel"),mk=a(" forward method, overrides the "),hc=s("code"),gk=a("__call__"),_k=a(" special method."),vk=p(),T(on.$$.fragment),bk=p(),T(sn.$$.fragment),ph=p(),Oo=s("h2"),nn=s("a"),uc=s("span"),T(Wa.$$.fragment),kk=p(),fc=s("span"),Tk=a("FlaxDistilBertForMultipleChoice"),hh=p(),je=s("div"),T(Qa.$$.fragment),$k=p(),mc=s("p"),wk=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yk=p(),Ra=s("p"),Dk=a("This model inherits from "),dl=s("a"),Fk=a("FlaxPreTrainedModel"),Bk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xk=p(),Ua=s("p"),Mk=a("This model is also a Flax Linen "),Ha=s("a"),Ek=a("flax.linen.Module"),zk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jk=p(),gc=s("p"),Ck=a("Finally, this model supports inherent JAX features such as:"),qk=p(),jt=s("ul"),_c=s("li"),Va=s("a"),Pk=a("Just-In-Time (JIT) compilation"),Ak=p(),vc=s("li"),Ka=s("a"),Ok=a("Automatic Differentiation"),Nk=p(),bc=s("li"),Ja=s("a"),Lk=a("Vectorization"),Sk=p(),kc=s("li"),Ga=s("a"),Ik=a("Parallelization"),Wk=p(),bt=s("div"),T(Xa.$$.fragment),Qk=p(),No=s("p"),Rk=a("The "),Tc=s("code"),Uk=a("FlaxDistilBertPreTrainedModel"),Hk=a(" forward method, overrides the "),$c=s("code"),Vk=a("__call__"),Kk=a(" special method."),Jk=p(),T(rn.$$.fragment),Gk=p(),T(an.$$.fragment),uh=p(),Lo=s("h2"),ln=s("a"),wc=s("span"),T(Ya.$$.fragment),Xk=p(),yc=s("span"),Yk=a("FlaxDistilBertForTokenClassification"),fh=p(),Ce=s("div"),T(Za.$$.fragment),Zk=p(),Dc=s("p"),eT=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),tT=p(),ei=s("p"),oT=a("This model inherits from "),cl=s("a"),sT=a("FlaxPreTrainedModel"),nT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rT=p(),ti=s("p"),aT=a("This model is also a Flax Linen "),oi=s("a"),iT=a("flax.linen.Module"),lT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dT=p(),Fc=s("p"),cT=a("Finally, this model supports inherent JAX features such as:"),pT=p(),Ct=s("ul"),Bc=s("li"),si=s("a"),hT=a("Just-In-Time (JIT) compilation"),uT=p(),xc=s("li"),ni=s("a"),fT=a("Automatic Differentiation"),mT=p(),Mc=s("li"),ri=s("a"),gT=a("Vectorization"),_T=p(),Ec=s("li"),ai=s("a"),vT=a("Parallelization"),bT=p(),kt=s("div"),T(ii.$$.fragment),kT=p(),So=s("p"),TT=a("The "),zc=s("code"),$T=a("FlaxDistilBertPreTrainedModel"),wT=a(" forward method, overrides the "),jc=s("code"),yT=a("__call__"),DT=a(" special method."),FT=p(),T(dn.$$.fragment),BT=p(),T(cn.$$.fragment),mh=p(),Io=s("h2"),pn=s("a"),Cc=s("span"),T(li.$$.fragment),xT=p(),qc=s("span"),MT=a("FlaxDistilBertForQuestionAnswering"),gh=p(),qe=s("div"),T(di.$$.fragment),ET=p(),Wo=s("p"),zT=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=s("code"),jT=a("span start logits"),CT=a(" and "),Ac=s("code"),qT=a("span end logits"),PT=a(")."),AT=p(),ci=s("p"),OT=a("This model inherits from "),pl=s("a"),NT=a("FlaxPreTrainedModel"),LT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ST=p(),pi=s("p"),IT=a("This model is also a Flax Linen "),hi=s("a"),WT=a("flax.linen.Module"),QT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RT=p(),Oc=s("p"),UT=a("Finally, this model supports inherent JAX features such as:"),HT=p(),qt=s("ul"),Nc=s("li"),ui=s("a"),VT=a("Just-In-Time (JIT) compilation"),KT=p(),Lc=s("li"),fi=s("a"),JT=a("Automatic Differentiation"),GT=p(),Sc=s("li"),mi=s("a"),XT=a("Vectorization"),YT=p(),Ic=s("li"),gi=s("a"),ZT=a("Parallelization"),e$=p(),Tt=s("div"),T(_i.$$.fragment),t$=p(),Qo=s("p"),o$=a("The "),Wc=s("code"),s$=a("FlaxDistilBertPreTrainedModel"),n$=a(" forward method, overrides the "),Qc=s("code"),r$=a("__call__"),a$=a(" special method."),i$=p(),T(hn.$$.fragment),l$=p(),T(un.$$.fragment),this.h()},l(o){const b=oD('[data-svelte="svelte-1phssyn"]',document.head);d=n(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=n(o,"H1",{class:!0});var vi=r(c);u=n(vi,"A",{id:!0,class:!0,href:!0});var Rc=r(u);_=n(Rc,"SPAN",{});var Uc=r(_);$(l.$$.fragment,Uc),Uc.forEach(t),Rc.forEach(t),f=h(vi),x=n(vi,"SPAN",{});var Hc=r(x);he=i(Hc,"DistilBERT"),Hc.forEach(t),vi.forEach(t),V=h(o),E=n(o,"H2",{class:!0});var bi=r(E);G=n(bi,"A",{id:!0,class:!0,href:!0});var Vc=r(G);S=n(Vc,"SPAN",{});var Kc=r(S);$(X.$$.fragment,Kc),Kc.forEach(t),Vc.forEach(t),ue=h(bi),I=n(bi,"SPAN",{});var Jc=r(I);fe=i(Jc,"Overview"),Jc.forEach(t),bi.forEach(t),le=h(o),N=n(o,"P",{});var Pt=r(N);P=i(Pt,"The DistilBERT model was proposed in the blog post "),Y=n(Pt,"A",{href:!0,rel:!0});var Gc=r(Y);K=i(Gc,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),Gc.forEach(t),z=i(Pt,", and the paper "),j=n(Pt,"A",{href:!0,rel:!0});var Xc=r(j);me=i(Xc,`DistilBERT, a
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
study.`),tp.forEach(t),ep.forEach(t),q=h(o),te=n(o,"P",{});var op=r(te);R=i(op,"Tips:"),op.forEach(t),pe=h(o),k=n(o,"UL",{});var ki=r(k);M=n(ki,"LI",{});var At=r(M);J=i(At,"DistilBERT doesn\u2019t have "),be=n(At,"CODE",{});var sp=r(be);$e=i(sp,"token_type_ids"),sp.forEach(t),O=i(At,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ke=n(At,"CODE",{});var np=r(ke);we=i(np,"tokenizer.sep_token"),np.forEach(t),ye=i(At," (or "),C=n(At,"CODE",{});var rp=r(C);U=i(rp,"[SEP]"),rp.forEach(t),De=i(At,")."),At.forEach(t),Fe=h(ki),Z=n(ki,"LI",{});var Ti=r(Z);Be=i(Ti,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(Ti,"CODE",{});var ap=r(ne);xe=i(ap,"position_ids"),ap.forEach(t),wu=i(Ti,` input). This could be added if
necessary though, just let us know if you need this option.`),Ti.forEach(t),ki.forEach(t),xp=h(o),pt=n(o,"P",{});var Ot=r(pt);yu=i(Ot,"This model was contributed by "),jn=n(Ot,"A",{href:!0,rel:!0});var ip=r(jn);Du=i(ip,"victorsanh"),ip.forEach(t),Fu=i(Ot,`. This model jax version was
contributed by `),Cn=n(Ot,"A",{href:!0,rel:!0});var lp=r(Cn);Bu=i(lp,"kamalkraj"),lp.forEach(t),xu=i(Ot,". The original code can be found "),qn=n(Ot,"A",{href:!0,rel:!0});var dp=r(qn);Mu=i(dp,"here"),dp.forEach(t),Eu=i(Ot,"."),Ot.forEach(t),Mp=h(o),eo=n(o,"H2",{class:!0});var $i=r(eo);Uo=n($i,"A",{id:!0,class:!0,href:!0});var cp=r(Uo);Cl=n(cp,"SPAN",{});var pp=r(Cl);$(Pn.$$.fragment,pp),pp.forEach(t),cp.forEach(t),zu=h($i),ql=n($i,"SPAN",{});var hp=r(ql);ju=i(hp,"DistilBertConfig"),hp.forEach(t),$i.forEach(t),Ep=h(o),lt=n(o,"DIV",{class:!0});var Nt=r(lt);$(An.$$.fragment,Nt),Cu=h(Nt),xt=n(Nt,"P",{});var Lt=r(xt);qu=i(Lt,"This is the configuration class to store the configuration of a "),Fi=n(Lt,"A",{href:!0});var up=r(Fi);Pu=i(up,"DistilBertModel"),up.forEach(t),Au=i(Lt," or a "),Bi=n(Lt,"A",{href:!0});var fp=r(Bi);Ou=i(fp,"TFDistilBertModel"),fp.forEach(t),Nu=i(Lt,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=n(Lt,"A",{href:!0,rel:!0});var mp=r(On);Lu=i(mp,"distilbert-base-uncased"),mp.forEach(t),Su=i(Lt," architecture."),Lt.forEach(t),Iu=h(Nt),to=n(Nt,"P",{});var Ro=r(to);Wu=i(Ro,"Configuration objects inherit from "),xi=n(Ro,"A",{href:!0});var gp=r(xi);Qu=i(gp,"PretrainedConfig"),gp.forEach(t),Ru=i(Ro,` and can be used to control the model outputs. Read the
documentation from `),Mi=n(Ro,"A",{href:!0});var _p=r(Mi);Uu=i(_p,"PretrainedConfig"),_p.forEach(t),Hu=i(Ro," for more information."),Ro.forEach(t),Vu=h(Nt),$(Ho.$$.fragment,Nt),Nt.forEach(t),zp=h(o),oo=n(o,"H2",{class:!0});var wi=r(oo);Vo=n(wi,"A",{id:!0,class:!0,href:!0});var vp=r(Vo);Pl=n(vp,"SPAN",{});var bp=r(Pl);$(Nn.$$.fragment,bp),bp.forEach(t),vp.forEach(t),Ku=h(wi),Al=n(wi,"SPAN",{});var kp=r(Al);Ju=i(kp,"DistilBertTokenizer"),kp.forEach(t),wi.forEach(t),jp=h(o),dt=n(o,"DIV",{class:!0});var St=r(dt);$(Ln.$$.fragment,St),Gu=h(St),Ol=n(St,"P",{});var Tp=r(Ol);Xu=i(Tp,"Construct a DistilBERT tokenizer."),Tp.forEach(t),Yu=h(St),Ko=n(St,"P",{});var fn=r(Ko);Ei=n(fn,"A",{href:!0});var $p=r(Ei);Zu=i($p,"DistilBertTokenizer"),$p.forEach(t),ef=i(fn," is identical to "),zi=n(fn,"A",{href:!0});var wp=r(zi);tf=i(wp,"BertTokenizer"),wp.forEach(t),of=i(fn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),fn.forEach(t),sf=h(St),Sn=n(St,"P",{});var yi=r(Sn);nf=i(yi,"Refer to superclass "),ji=n(yi,"A",{href:!0});var yp=r(ji);rf=i(yp,"BertTokenizer"),yp.forEach(t),af=i(yi," for usage examples and documentation concerning parameters."),yi.forEach(t),St.forEach(t),Cp=h(o),so=n(o,"H2",{class:!0});var Di=r(so);Jo=n(Di,"A",{id:!0,class:!0,href:!0});var Dp=r(Jo);Nl=n(Dp,"SPAN",{});var Fp=r(Nl);$(In.$$.fragment,Fp),Fp.forEach(t),Dp.forEach(t),lf=h(Di),Ll=n(Di,"SPAN",{});var d$=r(Ll);df=i(d$,"DistilBertTokenizerFast"),d$.forEach(t),Di.forEach(t),qp=h(o),ct=n(o,"DIV",{class:!0});var mn=r(ct);$(Wn.$$.fragment,mn),cf=h(mn),Qn=n(mn,"P",{});var vh=r(Qn);pf=i(vh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=n(vh,"EM",{});var c$=r(Sl);hf=i(c$,"tokenizers"),c$.forEach(t),uf=i(vh," library)."),vh.forEach(t),ff=h(mn),Go=n(mn,"P",{});var Bp=r(Go);Ci=n(Bp,"A",{href:!0});var p$=r(Ci);mf=i(p$,"DistilBertTokenizerFast"),p$.forEach(t),gf=i(Bp," is identical to "),qi=n(Bp,"A",{href:!0});var h$=r(qi);_f=i(h$,"BertTokenizerFast"),h$.forEach(t),vf=i(Bp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Bp.forEach(t),bf=h(mn),Rn=n(mn,"P",{});var bh=r(Rn);kf=i(bh,"Refer to superclass "),Pi=n(bh,"A",{href:!0});var u$=r(Pi);Tf=i(u$,"BertTokenizerFast"),u$.forEach(t),$f=i(bh," for usage examples and documentation concerning parameters."),bh.forEach(t),mn.forEach(t),Pp=h(o),no=n(o,"H2",{class:!0});var kh=r(no);Xo=n(kh,"A",{id:!0,class:!0,href:!0});var f$=r(Xo);Il=n(f$,"SPAN",{});var m$=r(Il);$(Un.$$.fragment,m$),m$.forEach(t),f$.forEach(t),wf=h(kh),Wl=n(kh,"SPAN",{});var g$=r(Wl);yf=i(g$,"DistilBertModel"),g$.forEach(t),kh.forEach(t),Ap=h(o),We=n(o,"DIV",{class:!0});var It=r(We);$(Hn.$$.fragment,It),Df=h(It),Ql=n(It,"P",{});var _$=r(Ql);Ff=i(_$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_$.forEach(t),Bf=h(It),Vn=n(It,"P",{});var Th=r(Vn);xf=i(Th,"This model inherits from "),Ai=n(Th,"A",{href:!0});var v$=r(Ai);Mf=i(v$,"PreTrainedModel"),v$.forEach(t),Ef=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),zf=h(It),Kn=n(It,"P",{});var $h=r(Kn);jf=i($h,"This model is also a PyTorch "),Jn=n($h,"A",{href:!0,rel:!0});var b$=r(Jn);Cf=i(b$,"torch.nn.Module"),b$.forEach(t),qf=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),Pf=h(It),ht=n(It,"DIV",{class:!0});var gn=r(ht);$(Gn.$$.fragment,gn),Af=h(gn),ro=n(gn,"P",{});var hl=r(ro);Of=i(hl,"The "),Oi=n(hl,"A",{href:!0});var k$=r(Oi);Nf=i(k$,"DistilBertModel"),k$.forEach(t),Lf=i(hl," forward method, overrides the "),Rl=n(hl,"CODE",{});var T$=r(Rl);Sf=i(T$,"__call__"),T$.forEach(t),If=i(hl," special method."),hl.forEach(t),Wf=h(gn),$(Yo.$$.fragment,gn),Qf=h(gn),$(Zo.$$.fragment,gn),gn.forEach(t),It.forEach(t),Op=h(o),ao=n(o,"H2",{class:!0});var wh=r(ao);es=n(wh,"A",{id:!0,class:!0,href:!0});var $$=r(es);Ul=n($$,"SPAN",{});var w$=r(Ul);$(Xn.$$.fragment,w$),w$.forEach(t),$$.forEach(t),Rf=h(wh),Hl=n(wh,"SPAN",{});var y$=r(Hl);Uf=i(y$,"DistilBertForMaskedLM"),y$.forEach(t),wh.forEach(t),Np=h(o),Qe=n(o,"DIV",{class:!0});var Wt=r(Qe);$(Yn.$$.fragment,Wt),Hf=h(Wt),Zn=n(Wt,"P",{});var yh=r(Zn);Vf=i(yh,"DistilBert Model with a "),Vl=n(yh,"CODE",{});var D$=r(Vl);Kf=i(D$,"masked language modeling"),D$.forEach(t),Jf=i(yh," head on top."),yh.forEach(t),Gf=h(Wt),er=n(Wt,"P",{});var Dh=r(er);Xf=i(Dh,"This model inherits from "),Ni=n(Dh,"A",{href:!0});var F$=r(Ni);Yf=i(F$,"PreTrainedModel"),F$.forEach(t),Zf=i(Dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh.forEach(t),em=h(Wt),tr=n(Wt,"P",{});var Fh=r(tr);tm=i(Fh,"This model is also a PyTorch "),or=n(Fh,"A",{href:!0,rel:!0});var B$=r(or);om=i(B$,"torch.nn.Module"),B$.forEach(t),sm=i(Fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh.forEach(t),nm=h(Wt),Ke=n(Wt,"DIV",{class:!0});var Qt=r(Ke);$(sr.$$.fragment,Qt),rm=h(Qt),io=n(Qt,"P",{});var ul=r(io);am=i(ul,"The "),Li=n(ul,"A",{href:!0});var x$=r(Li);im=i(x$,"DistilBertForMaskedLM"),x$.forEach(t),lm=i(ul," forward method, overrides the "),Kl=n(ul,"CODE",{});var M$=r(Kl);dm=i(M$,"__call__"),M$.forEach(t),cm=i(ul," special method."),ul.forEach(t),pm=h(Qt),$(ts.$$.fragment,Qt),hm=h(Qt),$(os.$$.fragment,Qt),um=h(Qt),$(ss.$$.fragment,Qt),Qt.forEach(t),Wt.forEach(t),Lp=h(o),lo=n(o,"H2",{class:!0});var Bh=r(lo);ns=n(Bh,"A",{id:!0,class:!0,href:!0});var E$=r(ns);Jl=n(E$,"SPAN",{});var z$=r(Jl);$(nr.$$.fragment,z$),z$.forEach(t),E$.forEach(t),fm=h(Bh),Gl=n(Bh,"SPAN",{});var j$=r(Gl);mm=i(j$,"DistilBertForSequenceClassification"),j$.forEach(t),Bh.forEach(t),Sp=h(o),Re=n(o,"DIV",{class:!0});var Rt=r(Re);$(rr.$$.fragment,Rt),gm=h(Rt),Xl=n(Rt,"P",{});var C$=r(Xl);_m=i(C$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),C$.forEach(t),vm=h(Rt),ar=n(Rt,"P",{});var xh=r(ar);bm=i(xh,"This model inherits from "),Si=n(xh,"A",{href:!0});var q$=r(Si);km=i(q$,"PreTrainedModel"),q$.forEach(t),Tm=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),$m=h(Rt),ir=n(Rt,"P",{});var Mh=r(ir);wm=i(Mh,"This model is also a PyTorch "),lr=n(Mh,"A",{href:!0,rel:!0});var P$=r(lr);ym=i(P$,"torch.nn.Module"),P$.forEach(t),Dm=i(Mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh.forEach(t),Fm=h(Rt),Pe=n(Rt,"DIV",{class:!0});var tt=r(Pe);$(dr.$$.fragment,tt),Bm=h(tt),co=n(tt,"P",{});var fl=r(co);xm=i(fl,"The "),Ii=n(fl,"A",{href:!0});var A$=r(Ii);Mm=i(A$,"DistilBertForSequenceClassification"),A$.forEach(t),Em=i(fl," forward method, overrides the "),Yl=n(fl,"CODE",{});var O$=r(Yl);zm=i(O$,"__call__"),O$.forEach(t),jm=i(fl," special method."),fl.forEach(t),Cm=h(tt),$(rs.$$.fragment,tt),qm=h(tt),$(as.$$.fragment,tt),Pm=h(tt),$(is.$$.fragment,tt),Am=h(tt),$(ls.$$.fragment,tt),Om=h(tt),$(ds.$$.fragment,tt),tt.forEach(t),Rt.forEach(t),Ip=h(o),po=n(o,"H2",{class:!0});var Eh=r(po);cs=n(Eh,"A",{id:!0,class:!0,href:!0});var N$=r(cs);Zl=n(N$,"SPAN",{});var L$=r(Zl);$(cr.$$.fragment,L$),L$.forEach(t),N$.forEach(t),Nm=h(Eh),ed=n(Eh,"SPAN",{});var S$=r(ed);Lm=i(S$,"DistilBertForMultipleChoice"),S$.forEach(t),Eh.forEach(t),Wp=h(o),Ue=n(o,"DIV",{class:!0});var Ut=r(Ue);$(pr.$$.fragment,Ut),Sm=h(Ut),td=n(Ut,"P",{});var I$=r(td);Im=i(I$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),I$.forEach(t),Wm=h(Ut),hr=n(Ut,"P",{});var zh=r(hr);Qm=i(zh,"This model inherits from "),Wi=n(zh,"A",{href:!0});var W$=r(Wi);Rm=i(W$,"PreTrainedModel"),W$.forEach(t),Um=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Hm=h(Ut),ur=n(Ut,"P",{});var jh=r(ur);Vm=i(jh,"This model is also a PyTorch "),fr=n(jh,"A",{href:!0,rel:!0});var Q$=r(fr);Km=i(Q$,"torch.nn.Module"),Q$.forEach(t),Jm=i(jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh.forEach(t),Gm=h(Ut),ut=n(Ut,"DIV",{class:!0});var _n=r(ut);$(mr.$$.fragment,_n),Xm=h(_n),ho=n(_n,"P",{});var ml=r(ho);Ym=i(ml,"The "),Qi=n(ml,"A",{href:!0});var R$=r(Qi);Zm=i(R$,"DistilBertForMultipleChoice"),R$.forEach(t),eg=i(ml," forward method, overrides the "),od=n(ml,"CODE",{});var U$=r(od);tg=i(U$,"__call__"),U$.forEach(t),og=i(ml," special method."),ml.forEach(t),sg=h(_n),$(ps.$$.fragment,_n),ng=h(_n),$(hs.$$.fragment,_n),_n.forEach(t),Ut.forEach(t),Qp=h(o),uo=n(o,"H2",{class:!0});var Ch=r(uo);us=n(Ch,"A",{id:!0,class:!0,href:!0});var H$=r(us);sd=n(H$,"SPAN",{});var V$=r(sd);$(gr.$$.fragment,V$),V$.forEach(t),H$.forEach(t),rg=h(Ch),nd=n(Ch,"SPAN",{});var K$=r(nd);ag=i(K$,"DistilBertForTokenClassification"),K$.forEach(t),Ch.forEach(t),Rp=h(o),He=n(o,"DIV",{class:!0});var Ht=r(He);$(_r.$$.fragment,Ht),ig=h(Ht),rd=n(Ht,"P",{});var J$=r(rd);lg=i(J$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),J$.forEach(t),dg=h(Ht),vr=n(Ht,"P",{});var qh=r(vr);cg=i(qh,"This model inherits from "),Ri=n(qh,"A",{href:!0});var G$=r(Ri);pg=i(G$,"PreTrainedModel"),G$.forEach(t),hg=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),ug=h(Ht),br=n(Ht,"P",{});var Ph=r(br);fg=i(Ph,"This model is also a PyTorch "),kr=n(Ph,"A",{href:!0,rel:!0});var X$=r(kr);mg=i(X$,"torch.nn.Module"),X$.forEach(t),gg=i(Ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ph.forEach(t),_g=h(Ht),Je=n(Ht,"DIV",{class:!0});var Vt=r(Je);$(Tr.$$.fragment,Vt),vg=h(Vt),fo=n(Vt,"P",{});var gl=r(fo);bg=i(gl,"The "),Ui=n(gl,"A",{href:!0});var Y$=r(Ui);kg=i(Y$,"DistilBertForTokenClassification"),Y$.forEach(t),Tg=i(gl," forward method, overrides the "),ad=n(gl,"CODE",{});var Z$=r(ad);$g=i(Z$,"__call__"),Z$.forEach(t),wg=i(gl," special method."),gl.forEach(t),yg=h(Vt),$(fs.$$.fragment,Vt),Dg=h(Vt),$(ms.$$.fragment,Vt),Fg=h(Vt),$(gs.$$.fragment,Vt),Vt.forEach(t),Ht.forEach(t),Up=h(o),mo=n(o,"H2",{class:!0});var Ah=r(mo);_s=n(Ah,"A",{id:!0,class:!0,href:!0});var ew=r(_s);id=n(ew,"SPAN",{});var tw=r(id);$($r.$$.fragment,tw),tw.forEach(t),ew.forEach(t),Bg=h(Ah),ld=n(Ah,"SPAN",{});var ow=r(ld);xg=i(ow,"DistilBertForQuestionAnswering"),ow.forEach(t),Ah.forEach(t),Hp=h(o),Ve=n(o,"DIV",{class:!0});var Kt=r(Ve);$(wr.$$.fragment,Kt),Mg=h(Kt),go=n(Kt,"P",{});var _l=r(go);Eg=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(_l,"CODE",{});var sw=r(dd);zg=i(sw,"span start logits"),sw.forEach(t),jg=i(_l," and "),cd=n(_l,"CODE",{});var nw=r(cd);Cg=i(nw,"span end logits"),nw.forEach(t),qg=i(_l,")."),_l.forEach(t),Pg=h(Kt),yr=n(Kt,"P",{});var Oh=r(yr);Ag=i(Oh,"This model inherits from "),Hi=n(Oh,"A",{href:!0});var rw=r(Hi);Og=i(rw,"PreTrainedModel"),rw.forEach(t),Ng=i(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),Lg=h(Kt),Dr=n(Kt,"P",{});var Nh=r(Dr);Sg=i(Nh,"This model is also a PyTorch "),Fr=n(Nh,"A",{href:!0,rel:!0});var aw=r(Fr);Ig=i(aw,"torch.nn.Module"),aw.forEach(t),Wg=i(Nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nh.forEach(t),Qg=h(Kt),Ge=n(Kt,"DIV",{class:!0});var Jt=r(Ge);$(Br.$$.fragment,Jt),Rg=h(Jt),_o=n(Jt,"P",{});var vl=r(_o);Ug=i(vl,"The "),Vi=n(vl,"A",{href:!0});var iw=r(Vi);Hg=i(iw,"DistilBertForQuestionAnswering"),iw.forEach(t),Vg=i(vl," forward method, overrides the "),pd=n(vl,"CODE",{});var lw=r(pd);Kg=i(lw,"__call__"),lw.forEach(t),Jg=i(vl," special method."),vl.forEach(t),Gg=h(Jt),$(vs.$$.fragment,Jt),Xg=h(Jt),$(bs.$$.fragment,Jt),Yg=h(Jt),$(ks.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),Vp=h(o),vo=n(o,"H2",{class:!0});var Lh=r(vo);Ts=n(Lh,"A",{id:!0,class:!0,href:!0});var dw=r(Ts);hd=n(dw,"SPAN",{});var cw=r(hd);$(xr.$$.fragment,cw),cw.forEach(t),dw.forEach(t),Zg=h(Lh),ud=n(Lh,"SPAN",{});var pw=r(ud);e_=i(pw,"TFDistilBertModel"),pw.forEach(t),Lh.forEach(t),Kp=h(o),Ae=n(o,"DIV",{class:!0});var $t=r(Ae);$(Mr.$$.fragment,$t),t_=h($t),fd=n($t,"P",{});var hw=r(fd);o_=i(hw,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hw.forEach(t),s_=h($t),Er=n($t,"P",{});var Sh=r(Er);n_=i(Sh,"This model inherits from "),Ki=n(Sh,"A",{href:!0});var uw=r(Ki);r_=i(uw,"TFPreTrainedModel"),uw.forEach(t),a_=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),i_=h($t),zr=n($t,"P",{});var Ih=r(zr);l_=i(Ih,"This model is also a "),jr=n(Ih,"A",{href:!0,rel:!0});var fw=r(jr);d_=i(fw,"tf.keras.Model"),fw.forEach(t),c_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),p_=h($t),$($s.$$.fragment,$t),h_=h($t),ft=n($t,"DIV",{class:!0});var vn=r(ft);$(Cr.$$.fragment,vn),u_=h(vn),bo=n(vn,"P",{});var bl=r(bo);f_=i(bl,"The "),Ji=n(bl,"A",{href:!0});var mw=r(Ji);m_=i(mw,"TFDistilBertModel"),mw.forEach(t),g_=i(bl," forward method, overrides the "),md=n(bl,"CODE",{});var gw=r(md);__=i(gw,"__call__"),gw.forEach(t),v_=i(bl," special method."),bl.forEach(t),b_=h(vn),$(ws.$$.fragment,vn),k_=h(vn),$(ys.$$.fragment,vn),vn.forEach(t),$t.forEach(t),Jp=h(o),ko=n(o,"H2",{class:!0});var Wh=r(ko);Ds=n(Wh,"A",{id:!0,class:!0,href:!0});var _w=r(Ds);gd=n(_w,"SPAN",{});var vw=r(gd);$(qr.$$.fragment,vw),vw.forEach(t),_w.forEach(t),T_=h(Wh),_d=n(Wh,"SPAN",{});var bw=r(_d);$_=i(bw,"TFDistilBertForMaskedLM"),bw.forEach(t),Wh.forEach(t),Gp=h(o),Oe=n(o,"DIV",{class:!0});var wt=r(Oe);$(Pr.$$.fragment,wt),w_=h(wt),Ar=n(wt,"P",{});var Qh=r(Ar);y_=i(Qh,"DistilBert Model with a "),vd=n(Qh,"CODE",{});var kw=r(vd);D_=i(kw,"masked language modeling"),kw.forEach(t),F_=i(Qh," head on top."),Qh.forEach(t),B_=h(wt),Or=n(wt,"P",{});var Rh=r(Or);x_=i(Rh,"This model inherits from "),Gi=n(Rh,"A",{href:!0});var Tw=r(Gi);M_=i(Tw,"TFPreTrainedModel"),Tw.forEach(t),E_=i(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),z_=h(wt),Nr=n(wt,"P",{});var Uh=r(Nr);j_=i(Uh,"This model is also a "),Lr=n(Uh,"A",{href:!0,rel:!0});var $w=r(Lr);C_=i($w,"tf.keras.Model"),$w.forEach(t),q_=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),P_=h(wt),$(Fs.$$.fragment,wt),A_=h(wt),Xe=n(wt,"DIV",{class:!0});var Gt=r(Xe);$(Sr.$$.fragment,Gt),O_=h(Gt),To=n(Gt,"P",{});var kl=r(To);N_=i(kl,"The "),Xi=n(kl,"A",{href:!0});var ww=r(Xi);L_=i(ww,"TFDistilBertForMaskedLM"),ww.forEach(t),S_=i(kl," forward method, overrides the "),bd=n(kl,"CODE",{});var yw=r(bd);I_=i(yw,"__call__"),yw.forEach(t),W_=i(kl," special method."),kl.forEach(t),Q_=h(Gt),$(Bs.$$.fragment,Gt),R_=h(Gt),$(xs.$$.fragment,Gt),U_=h(Gt),$(Ms.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Xp=h(o),$o=n(o,"H2",{class:!0});var Hh=r($o);Es=n(Hh,"A",{id:!0,class:!0,href:!0});var Dw=r(Es);kd=n(Dw,"SPAN",{});var Fw=r(kd);$(Ir.$$.fragment,Fw),Fw.forEach(t),Dw.forEach(t),H_=h(Hh),Td=n(Hh,"SPAN",{});var Bw=r(Td);V_=i(Bw,"TFDistilBertForSequenceClassification"),Bw.forEach(t),Hh.forEach(t),Yp=h(o),Ne=n(o,"DIV",{class:!0});var yt=r(Ne);$(Wr.$$.fragment,yt),K_=h(yt),$d=n(yt,"P",{});var xw=r($d);J_=i(xw,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xw.forEach(t),G_=h(yt),Qr=n(yt,"P",{});var Vh=r(Qr);X_=i(Vh,"This model inherits from "),Yi=n(Vh,"A",{href:!0});var Mw=r(Yi);Y_=i(Mw,"TFPreTrainedModel"),Mw.forEach(t),Z_=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),ev=h(yt),Rr=n(yt,"P",{});var Kh=r(Rr);tv=i(Kh,"This model is also a "),Ur=n(Kh,"A",{href:!0,rel:!0});var Ew=r(Ur);ov=i(Ew,"tf.keras.Model"),Ew.forEach(t),sv=i(Kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kh.forEach(t),nv=h(yt),$(zs.$$.fragment,yt),rv=h(yt),Ye=n(yt,"DIV",{class:!0});var Xt=r(Ye);$(Hr.$$.fragment,Xt),av=h(Xt),wo=n(Xt,"P",{});var Tl=r(wo);iv=i(Tl,"The "),Zi=n(Tl,"A",{href:!0});var zw=r(Zi);lv=i(zw,"TFDistilBertForSequenceClassification"),zw.forEach(t),dv=i(Tl," forward method, overrides the "),wd=n(Tl,"CODE",{});var jw=r(wd);cv=i(jw,"__call__"),jw.forEach(t),pv=i(Tl," special method."),Tl.forEach(t),hv=h(Xt),$(js.$$.fragment,Xt),uv=h(Xt),$(Cs.$$.fragment,Xt),fv=h(Xt),$(qs.$$.fragment,Xt),Xt.forEach(t),yt.forEach(t),Zp=h(o),yo=n(o,"H2",{class:!0});var Jh=r(yo);Ps=n(Jh,"A",{id:!0,class:!0,href:!0});var Cw=r(Ps);yd=n(Cw,"SPAN",{});var qw=r(yd);$(Vr.$$.fragment,qw),qw.forEach(t),Cw.forEach(t),mv=h(Jh),Dd=n(Jh,"SPAN",{});var Pw=r(Dd);gv=i(Pw,"TFDistilBertForMultipleChoice"),Pw.forEach(t),Jh.forEach(t),eh=h(o),Le=n(o,"DIV",{class:!0});var Dt=r(Le);$(Kr.$$.fragment,Dt),_v=h(Dt),Fd=n(Dt,"P",{});var Aw=r(Fd);vv=i(Aw,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Aw.forEach(t),bv=h(Dt),Jr=n(Dt,"P",{});var Gh=r(Jr);kv=i(Gh,"This model inherits from "),el=n(Gh,"A",{href:!0});var Ow=r(el);Tv=i(Ow,"TFPreTrainedModel"),Ow.forEach(t),$v=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),wv=h(Dt),Gr=n(Dt,"P",{});var Xh=r(Gr);yv=i(Xh,"This model is also a "),Xr=n(Xh,"A",{href:!0,rel:!0});var Nw=r(Xr);Dv=i(Nw,"tf.keras.Model"),Nw.forEach(t),Fv=i(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),Bv=h(Dt),$(As.$$.fragment,Dt),xv=h(Dt),mt=n(Dt,"DIV",{class:!0});var bn=r(mt);$(Yr.$$.fragment,bn),Mv=h(bn),Do=n(bn,"P",{});var $l=r(Do);Ev=i($l,"The "),tl=n($l,"A",{href:!0});var Lw=r(tl);zv=i(Lw,"TFDistilBertForMultipleChoice"),Lw.forEach(t),jv=i($l," forward method, overrides the "),Bd=n($l,"CODE",{});var Sw=r(Bd);Cv=i(Sw,"__call__"),Sw.forEach(t),qv=i($l," special method."),$l.forEach(t),Pv=h(bn),$(Os.$$.fragment,bn),Av=h(bn),$(Ns.$$.fragment,bn),bn.forEach(t),Dt.forEach(t),th=h(o),Fo=n(o,"H2",{class:!0});var Yh=r(Fo);Ls=n(Yh,"A",{id:!0,class:!0,href:!0});var Iw=r(Ls);xd=n(Iw,"SPAN",{});var Ww=r(xd);$(Zr.$$.fragment,Ww),Ww.forEach(t),Iw.forEach(t),Ov=h(Yh),Md=n(Yh,"SPAN",{});var Qw=r(Md);Nv=i(Qw,"TFDistilBertForTokenClassification"),Qw.forEach(t),Yh.forEach(t),oh=h(o),Se=n(o,"DIV",{class:!0});var Ft=r(Se);$(ea.$$.fragment,Ft),Lv=h(Ft),Ed=n(Ft,"P",{});var Rw=r(Ed);Sv=i(Rw,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Rw.forEach(t),Iv=h(Ft),ta=n(Ft,"P",{});var Zh=r(ta);Wv=i(Zh,"This model inherits from "),ol=n(Zh,"A",{href:!0});var Uw=r(ol);Qv=i(Uw,"TFPreTrainedModel"),Uw.forEach(t),Rv=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zh.forEach(t),Uv=h(Ft),oa=n(Ft,"P",{});var eu=r(oa);Hv=i(eu,"This model is also a "),sa=n(eu,"A",{href:!0,rel:!0});var Hw=r(sa);Vv=i(Hw,"tf.keras.Model"),Hw.forEach(t),Kv=i(eu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eu.forEach(t),Jv=h(Ft),$(Ss.$$.fragment,Ft),Gv=h(Ft),Ze=n(Ft,"DIV",{class:!0});var Yt=r(Ze);$(na.$$.fragment,Yt),Xv=h(Yt),Bo=n(Yt,"P",{});var wl=r(Bo);Yv=i(wl,"The "),sl=n(wl,"A",{href:!0});var Vw=r(sl);Zv=i(Vw,"TFDistilBertForTokenClassification"),Vw.forEach(t),eb=i(wl," forward method, overrides the "),zd=n(wl,"CODE",{});var Kw=r(zd);tb=i(Kw,"__call__"),Kw.forEach(t),ob=i(wl," special method."),wl.forEach(t),sb=h(Yt),$(Is.$$.fragment,Yt),nb=h(Yt),$(Ws.$$.fragment,Yt),rb=h(Yt),$(Qs.$$.fragment,Yt),Yt.forEach(t),Ft.forEach(t),sh=h(o),xo=n(o,"H2",{class:!0});var tu=r(xo);Rs=n(tu,"A",{id:!0,class:!0,href:!0});var Jw=r(Rs);jd=n(Jw,"SPAN",{});var Gw=r(jd);$(ra.$$.fragment,Gw),Gw.forEach(t),Jw.forEach(t),ab=h(tu),Cd=n(tu,"SPAN",{});var Xw=r(Cd);ib=i(Xw,"TFDistilBertForQuestionAnswering"),Xw.forEach(t),tu.forEach(t),nh=h(o),Ie=n(o,"DIV",{class:!0});var Bt=r(Ie);$(aa.$$.fragment,Bt),lb=h(Bt),Mo=n(Bt,"P",{});var yl=r(Mo);db=i(yl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=n(yl,"CODE",{});var Yw=r(qd);cb=i(Yw,"span start logits"),Yw.forEach(t),pb=i(yl," and "),Pd=n(yl,"CODE",{});var Zw=r(Pd);hb=i(Zw,"span end logits"),Zw.forEach(t),ub=i(yl,")."),yl.forEach(t),fb=h(Bt),ia=n(Bt,"P",{});var ou=r(ia);mb=i(ou,"This model inherits from "),nl=n(ou,"A",{href:!0});var ey=r(nl);gb=i(ey,"TFPreTrainedModel"),ey.forEach(t),_b=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ou.forEach(t),vb=h(Bt),la=n(Bt,"P",{});var su=r(la);bb=i(su,"This model is also a "),da=n(su,"A",{href:!0,rel:!0});var ty=r(da);kb=i(ty,"tf.keras.Model"),ty.forEach(t),Tb=i(su,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),su.forEach(t),$b=h(Bt),$(Us.$$.fragment,Bt),wb=h(Bt),et=n(Bt,"DIV",{class:!0});var Zt=r(et);$(ca.$$.fragment,Zt),yb=h(Zt),Eo=n(Zt,"P",{});var Dl=r(Eo);Db=i(Dl,"The "),rl=n(Dl,"A",{href:!0});var oy=r(rl);Fb=i(oy,"TFDistilBertForQuestionAnswering"),oy.forEach(t),Bb=i(Dl," forward method, overrides the "),Ad=n(Dl,"CODE",{});var sy=r(Ad);xb=i(sy,"__call__"),sy.forEach(t),Mb=i(Dl," special method."),Dl.forEach(t),Eb=h(Zt),$(Hs.$$.fragment,Zt),zb=h(Zt),$(Vs.$$.fragment,Zt),jb=h(Zt),$(Ks.$$.fragment,Zt),Zt.forEach(t),Bt.forEach(t),rh=h(o),zo=n(o,"H2",{class:!0});var nu=r(zo);Js=n(nu,"A",{id:!0,class:!0,href:!0});var ny=r(Js);Od=n(ny,"SPAN",{});var ry=r(Od);$(pa.$$.fragment,ry),ry.forEach(t),ny.forEach(t),Cb=h(nu),Nd=n(nu,"SPAN",{});var ay=r(Nd);qb=i(ay,"FlaxDistilBertModel"),ay.forEach(t),nu.forEach(t),ah=h(o),Me=n(o,"DIV",{class:!0});var ot=r(Me);$(ha.$$.fragment,ot),Pb=h(ot),Ld=n(ot,"P",{});var iy=r(Ld);Ab=i(iy,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),iy.forEach(t),Ob=h(ot),ua=n(ot,"P",{});var ru=r(ua);Nb=i(ru,"This model inherits from "),al=n(ru,"A",{href:!0});var ly=r(al);Lb=i(ly,"FlaxPreTrainedModel"),ly.forEach(t),Sb=i(ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ru.forEach(t),Ib=h(ot),fa=n(ot,"P",{});var au=r(fa);Wb=i(au,"This model is also a Flax Linen "),ma=n(au,"A",{href:!0,rel:!0});var dy=r(ma);Qb=i(dy,"flax.linen.Module"),dy.forEach(t),Rb=i(au,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),au.forEach(t),Ub=h(ot),Sd=n(ot,"P",{});var cy=r(Sd);Hb=i(cy,"Finally, this model supports inherent JAX features such as:"),cy.forEach(t),Vb=h(ot),Mt=n(ot,"UL",{});var kn=r(Mt);Id=n(kn,"LI",{});var py=r(Id);ga=n(py,"A",{href:!0,rel:!0});var hy=r(ga);Kb=i(hy,"Just-In-Time (JIT) compilation"),hy.forEach(t),py.forEach(t),Jb=h(kn),Wd=n(kn,"LI",{});var uy=r(Wd);_a=n(uy,"A",{href:!0,rel:!0});var fy=r(_a);Gb=i(fy,"Automatic Differentiation"),fy.forEach(t),uy.forEach(t),Xb=h(kn),Qd=n(kn,"LI",{});var my=r(Qd);va=n(my,"A",{href:!0,rel:!0});var gy=r(va);Yb=i(gy,"Vectorization"),gy.forEach(t),my.forEach(t),Zb=h(kn),Rd=n(kn,"LI",{});var _y=r(Rd);ba=n(_y,"A",{href:!0,rel:!0});var vy=r(ba);e1=i(vy,"Parallelization"),vy.forEach(t),_y.forEach(t),kn.forEach(t),t1=h(ot),gt=n(ot,"DIV",{class:!0});var Tn=r(gt);$(ka.$$.fragment,Tn),o1=h(Tn),jo=n(Tn,"P",{});var Fl=r(jo);s1=i(Fl,"The "),Ud=n(Fl,"CODE",{});var by=r(Ud);n1=i(by,"FlaxDistilBertPreTrainedModel"),by.forEach(t),r1=i(Fl," forward method, overrides the "),Hd=n(Fl,"CODE",{});var ky=r(Hd);a1=i(ky,"__call__"),ky.forEach(t),i1=i(Fl," special method."),Fl.forEach(t),l1=h(Tn),$(Gs.$$.fragment,Tn),d1=h(Tn),$(Xs.$$.fragment,Tn),Tn.forEach(t),ot.forEach(t),ih=h(o),Co=n(o,"H2",{class:!0});var iu=r(Co);Ys=n(iu,"A",{id:!0,class:!0,href:!0});var Ty=r(Ys);Vd=n(Ty,"SPAN",{});var $y=r(Vd);$(Ta.$$.fragment,$y),$y.forEach(t),Ty.forEach(t),c1=h(iu),Kd=n(iu,"SPAN",{});var wy=r(Kd);p1=i(wy,"FlaxDistilBertForMaskedLM"),wy.forEach(t),iu.forEach(t),lh=h(o),Ee=n(o,"DIV",{class:!0});var st=r(Ee);$($a.$$.fragment,st),h1=h(st),wa=n(st,"P",{});var lu=r(wa);u1=i(lu,"DistilBert Model with a "),Jd=n(lu,"CODE",{});var yy=r(Jd);f1=i(yy,"language modeling"),yy.forEach(t),m1=i(lu," head on top."),lu.forEach(t),g1=h(st),ya=n(st,"P",{});var du=r(ya);_1=i(du,"This model inherits from "),il=n(du,"A",{href:!0});var Dy=r(il);v1=i(Dy,"FlaxPreTrainedModel"),Dy.forEach(t),b1=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),du.forEach(t),k1=h(st),Da=n(st,"P",{});var cu=r(Da);T1=i(cu,"This model is also a Flax Linen "),Fa=n(cu,"A",{href:!0,rel:!0});var Fy=r(Fa);$1=i(Fy,"flax.linen.Module"),Fy.forEach(t),w1=i(cu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cu.forEach(t),y1=h(st),Gd=n(st,"P",{});var By=r(Gd);D1=i(By,"Finally, this model supports inherent JAX features such as:"),By.forEach(t),F1=h(st),Et=n(st,"UL",{});var $n=r(Et);Xd=n($n,"LI",{});var xy=r(Xd);Ba=n(xy,"A",{href:!0,rel:!0});var My=r(Ba);B1=i(My,"Just-In-Time (JIT) compilation"),My.forEach(t),xy.forEach(t),x1=h($n),Yd=n($n,"LI",{});var Ey=r(Yd);xa=n(Ey,"A",{href:!0,rel:!0});var zy=r(xa);M1=i(zy,"Automatic Differentiation"),zy.forEach(t),Ey.forEach(t),E1=h($n),Zd=n($n,"LI",{});var jy=r(Zd);Ma=n(jy,"A",{href:!0,rel:!0});var Cy=r(Ma);z1=i(Cy,"Vectorization"),Cy.forEach(t),jy.forEach(t),j1=h($n),ec=n($n,"LI",{});var qy=r(ec);Ea=n(qy,"A",{href:!0,rel:!0});var Py=r(Ea);C1=i(Py,"Parallelization"),Py.forEach(t),qy.forEach(t),$n.forEach(t),q1=h(st),_t=n(st,"DIV",{class:!0});var wn=r(_t);$(za.$$.fragment,wn),P1=h(wn),qo=n(wn,"P",{});var Bl=r(qo);A1=i(Bl,"The "),tc=n(Bl,"CODE",{});var Ay=r(tc);O1=i(Ay,"FlaxDistilBertPreTrainedModel"),Ay.forEach(t),N1=i(Bl," forward method, overrides the "),oc=n(Bl,"CODE",{});var Oy=r(oc);L1=i(Oy,"__call__"),Oy.forEach(t),S1=i(Bl," special method."),Bl.forEach(t),I1=h(wn),$(Zs.$$.fragment,wn),W1=h(wn),$(en.$$.fragment,wn),wn.forEach(t),st.forEach(t),dh=h(o),Po=n(o,"H2",{class:!0});var pu=r(Po);tn=n(pu,"A",{id:!0,class:!0,href:!0});var Ny=r(tn);sc=n(Ny,"SPAN",{});var Ly=r(sc);$(ja.$$.fragment,Ly),Ly.forEach(t),Ny.forEach(t),Q1=h(pu),nc=n(pu,"SPAN",{});var Sy=r(nc);R1=i(Sy,"FlaxDistilBertForSequenceClassification"),Sy.forEach(t),pu.forEach(t),ch=h(o),ze=n(o,"DIV",{class:!0});var nt=r(ze);$(Ca.$$.fragment,nt),U1=h(nt),rc=n(nt,"P",{});var Iy=r(rc);H1=i(Iy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Iy.forEach(t),V1=h(nt),qa=n(nt,"P",{});var hu=r(qa);K1=i(hu,"This model inherits from "),ll=n(hu,"A",{href:!0});var Wy=r(ll);J1=i(Wy,"FlaxPreTrainedModel"),Wy.forEach(t),G1=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hu.forEach(t),X1=h(nt),Pa=n(nt,"P",{});var uu=r(Pa);Y1=i(uu,"This model is also a Flax Linen "),Aa=n(uu,"A",{href:!0,rel:!0});var Qy=r(Aa);Z1=i(Qy,"flax.linen.Module"),Qy.forEach(t),ek=i(uu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uu.forEach(t),tk=h(nt),ac=n(nt,"P",{});var Ry=r(ac);ok=i(Ry,"Finally, this model supports inherent JAX features such as:"),Ry.forEach(t),sk=h(nt),zt=n(nt,"UL",{});var yn=r(zt);ic=n(yn,"LI",{});var Uy=r(ic);Oa=n(Uy,"A",{href:!0,rel:!0});var Hy=r(Oa);nk=i(Hy,"Just-In-Time (JIT) compilation"),Hy.forEach(t),Uy.forEach(t),rk=h(yn),lc=n(yn,"LI",{});var Vy=r(lc);Na=n(Vy,"A",{href:!0,rel:!0});var Ky=r(Na);ak=i(Ky,"Automatic Differentiation"),Ky.forEach(t),Vy.forEach(t),ik=h(yn),dc=n(yn,"LI",{});var Jy=r(dc);La=n(Jy,"A",{href:!0,rel:!0});var Gy=r(La);lk=i(Gy,"Vectorization"),Gy.forEach(t),Jy.forEach(t),dk=h(yn),cc=n(yn,"LI",{});var Xy=r(cc);Sa=n(Xy,"A",{href:!0,rel:!0});var Yy=r(Sa);ck=i(Yy,"Parallelization"),Yy.forEach(t),Xy.forEach(t),yn.forEach(t),pk=h(nt),vt=n(nt,"DIV",{class:!0});var Dn=r(vt);$(Ia.$$.fragment,Dn),hk=h(Dn),Ao=n(Dn,"P",{});var xl=r(Ao);uk=i(xl,"The "),pc=n(xl,"CODE",{});var Zy=r(pc);fk=i(Zy,"FlaxDistilBertPreTrainedModel"),Zy.forEach(t),mk=i(xl," forward method, overrides the "),hc=n(xl,"CODE",{});var e2=r(hc);gk=i(e2,"__call__"),e2.forEach(t),_k=i(xl," special method."),xl.forEach(t),vk=h(Dn),$(on.$$.fragment,Dn),bk=h(Dn),$(sn.$$.fragment,Dn),Dn.forEach(t),nt.forEach(t),ph=h(o),Oo=n(o,"H2",{class:!0});var fu=r(Oo);nn=n(fu,"A",{id:!0,class:!0,href:!0});var t2=r(nn);uc=n(t2,"SPAN",{});var o2=r(uc);$(Wa.$$.fragment,o2),o2.forEach(t),t2.forEach(t),kk=h(fu),fc=n(fu,"SPAN",{});var s2=r(fc);Tk=i(s2,"FlaxDistilBertForMultipleChoice"),s2.forEach(t),fu.forEach(t),hh=h(o),je=n(o,"DIV",{class:!0});var rt=r(je);$(Qa.$$.fragment,rt),$k=h(rt),mc=n(rt,"P",{});var n2=r(mc);wk=i(n2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n2.forEach(t),yk=h(rt),Ra=n(rt,"P",{});var mu=r(Ra);Dk=i(mu,"This model inherits from "),dl=n(mu,"A",{href:!0});var r2=r(dl);Fk=i(r2,"FlaxPreTrainedModel"),r2.forEach(t),Bk=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mu.forEach(t),xk=h(rt),Ua=n(rt,"P",{});var gu=r(Ua);Mk=i(gu,"This model is also a Flax Linen "),Ha=n(gu,"A",{href:!0,rel:!0});var a2=r(Ha);Ek=i(a2,"flax.linen.Module"),a2.forEach(t),zk=i(gu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gu.forEach(t),jk=h(rt),gc=n(rt,"P",{});var i2=r(gc);Ck=i(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),qk=h(rt),jt=n(rt,"UL",{});var Fn=r(jt);_c=n(Fn,"LI",{});var l2=r(_c);Va=n(l2,"A",{href:!0,rel:!0});var d2=r(Va);Pk=i(d2,"Just-In-Time (JIT) compilation"),d2.forEach(t),l2.forEach(t),Ak=h(Fn),vc=n(Fn,"LI",{});var c2=r(vc);Ka=n(c2,"A",{href:!0,rel:!0});var p2=r(Ka);Ok=i(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),Nk=h(Fn),bc=n(Fn,"LI",{});var h2=r(bc);Ja=n(h2,"A",{href:!0,rel:!0});var u2=r(Ja);Lk=i(u2,"Vectorization"),u2.forEach(t),h2.forEach(t),Sk=h(Fn),kc=n(Fn,"LI",{});var f2=r(kc);Ga=n(f2,"A",{href:!0,rel:!0});var m2=r(Ga);Ik=i(m2,"Parallelization"),m2.forEach(t),f2.forEach(t),Fn.forEach(t),Wk=h(rt),bt=n(rt,"DIV",{class:!0});var Bn=r(bt);$(Xa.$$.fragment,Bn),Qk=h(Bn),No=n(Bn,"P",{});var Ml=r(No);Rk=i(Ml,"The "),Tc=n(Ml,"CODE",{});var g2=r(Tc);Uk=i(g2,"FlaxDistilBertPreTrainedModel"),g2.forEach(t),Hk=i(Ml," forward method, overrides the "),$c=n(Ml,"CODE",{});var _2=r($c);Vk=i(_2,"__call__"),_2.forEach(t),Kk=i(Ml," special method."),Ml.forEach(t),Jk=h(Bn),$(rn.$$.fragment,Bn),Gk=h(Bn),$(an.$$.fragment,Bn),Bn.forEach(t),rt.forEach(t),uh=h(o),Lo=n(o,"H2",{class:!0});var _u=r(Lo);ln=n(_u,"A",{id:!0,class:!0,href:!0});var v2=r(ln);wc=n(v2,"SPAN",{});var b2=r(wc);$(Ya.$$.fragment,b2),b2.forEach(t),v2.forEach(t),Xk=h(_u),yc=n(_u,"SPAN",{});var k2=r(yc);Yk=i(k2,"FlaxDistilBertForTokenClassification"),k2.forEach(t),_u.forEach(t),fh=h(o),Ce=n(o,"DIV",{class:!0});var at=r(Ce);$(Za.$$.fragment,at),Zk=h(at),Dc=n(at,"P",{});var T2=r(Dc);eT=i(T2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),T2.forEach(t),tT=h(at),ei=n(at,"P",{});var vu=r(ei);oT=i(vu,"This model inherits from "),cl=n(vu,"A",{href:!0});var $2=r(cl);sT=i($2,"FlaxPreTrainedModel"),$2.forEach(t),nT=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vu.forEach(t),rT=h(at),ti=n(at,"P",{});var bu=r(ti);aT=i(bu,"This model is also a Flax Linen "),oi=n(bu,"A",{href:!0,rel:!0});var w2=r(oi);iT=i(w2,"flax.linen.Module"),w2.forEach(t),lT=i(bu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bu.forEach(t),dT=h(at),Fc=n(at,"P",{});var y2=r(Fc);cT=i(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),pT=h(at),Ct=n(at,"UL",{});var xn=r(Ct);Bc=n(xn,"LI",{});var D2=r(Bc);si=n(D2,"A",{href:!0,rel:!0});var F2=r(si);hT=i(F2,"Just-In-Time (JIT) compilation"),F2.forEach(t),D2.forEach(t),uT=h(xn),xc=n(xn,"LI",{});var B2=r(xc);ni=n(B2,"A",{href:!0,rel:!0});var x2=r(ni);fT=i(x2,"Automatic Differentiation"),x2.forEach(t),B2.forEach(t),mT=h(xn),Mc=n(xn,"LI",{});var M2=r(Mc);ri=n(M2,"A",{href:!0,rel:!0});var E2=r(ri);gT=i(E2,"Vectorization"),E2.forEach(t),M2.forEach(t),_T=h(xn),Ec=n(xn,"LI",{});var z2=r(Ec);ai=n(z2,"A",{href:!0,rel:!0});var j2=r(ai);vT=i(j2,"Parallelization"),j2.forEach(t),z2.forEach(t),xn.forEach(t),bT=h(at),kt=n(at,"DIV",{class:!0});var Mn=r(kt);$(ii.$$.fragment,Mn),kT=h(Mn),So=n(Mn,"P",{});var El=r(So);TT=i(El,"The "),zc=n(El,"CODE",{});var C2=r(zc);$T=i(C2,"FlaxDistilBertPreTrainedModel"),C2.forEach(t),wT=i(El," forward method, overrides the "),jc=n(El,"CODE",{});var q2=r(jc);yT=i(q2,"__call__"),q2.forEach(t),DT=i(El," special method."),El.forEach(t),FT=h(Mn),$(dn.$$.fragment,Mn),BT=h(Mn),$(cn.$$.fragment,Mn),Mn.forEach(t),at.forEach(t),mh=h(o),Io=n(o,"H2",{class:!0});var ku=r(Io);pn=n(ku,"A",{id:!0,class:!0,href:!0});var P2=r(pn);Cc=n(P2,"SPAN",{});var A2=r(Cc);$(li.$$.fragment,A2),A2.forEach(t),P2.forEach(t),xT=h(ku),qc=n(ku,"SPAN",{});var O2=r(qc);MT=i(O2,"FlaxDistilBertForQuestionAnswering"),O2.forEach(t),ku.forEach(t),gh=h(o),qe=n(o,"DIV",{class:!0});var it=r(qe);$(di.$$.fragment,it),ET=h(it),Wo=n(it,"P",{});var zl=r(Wo);zT=i(zl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=n(zl,"CODE",{});var N2=r(Pc);jT=i(N2,"span start logits"),N2.forEach(t),CT=i(zl," and "),Ac=n(zl,"CODE",{});var L2=r(Ac);qT=i(L2,"span end logits"),L2.forEach(t),PT=i(zl,")."),zl.forEach(t),AT=h(it),ci=n(it,"P",{});var Tu=r(ci);OT=i(Tu,"This model inherits from "),pl=n(Tu,"A",{href:!0});var S2=r(pl);NT=i(S2,"FlaxPreTrainedModel"),S2.forEach(t),LT=i(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tu.forEach(t),ST=h(it),pi=n(it,"P",{});var $u=r(pi);IT=i($u,"This model is also a Flax Linen "),hi=n($u,"A",{href:!0,rel:!0});var I2=r(hi);WT=i(I2,"flax.linen.Module"),I2.forEach(t),QT=i($u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$u.forEach(t),RT=h(it),Oc=n(it,"P",{});var W2=r(Oc);UT=i(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),HT=h(it),qt=n(it,"UL",{});var En=r(qt);Nc=n(En,"LI",{});var Q2=r(Nc);ui=n(Q2,"A",{href:!0,rel:!0});var R2=r(ui);VT=i(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),Q2.forEach(t),KT=h(En),Lc=n(En,"LI",{});var U2=r(Lc);fi=n(U2,"A",{href:!0,rel:!0});var H2=r(fi);JT=i(H2,"Automatic Differentiation"),H2.forEach(t),U2.forEach(t),GT=h(En),Sc=n(En,"LI",{});var V2=r(Sc);mi=n(V2,"A",{href:!0,rel:!0});var K2=r(mi);XT=i(K2,"Vectorization"),K2.forEach(t),V2.forEach(t),YT=h(En),Ic=n(En,"LI",{});var J2=r(Ic);gi=n(J2,"A",{href:!0,rel:!0});var G2=r(gi);ZT=i(G2,"Parallelization"),G2.forEach(t),J2.forEach(t),En.forEach(t),e$=h(it),Tt=n(it,"DIV",{class:!0});var zn=r(Tt);$(_i.$$.fragment,zn),t$=h(zn),Qo=n(zn,"P",{});var jl=r(Qo);o$=i(jl,"The "),Wc=n(jl,"CODE",{});var X2=r(Wc);s$=i(X2,"FlaxDistilBertPreTrainedModel"),X2.forEach(t),n$=i(jl," forward method, overrides the "),Qc=n(jl,"CODE",{});var Y2=r(Qc);r$=i(Y2,"__call__"),Y2.forEach(t),a$=i(jl," special method."),jl.forEach(t),i$=h(zn),$(hn.$$.fragment,zn),l$=h(zn),$(un.$$.fragment,zn),zn.forEach(t),it.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(nF)),m(u,"id","distilbert"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#distilbert"),m(c,"class","relative group"),m(G,"id","overview"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#overview"),m(E,"class","relative group"),m(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),m(Y,"rel","nofollow"),m(j,"href","https://arxiv.org/abs/1910.01108"),m(j,"rel","nofollow"),m(jn,"href","https://huggingface.co/victorsanh"),m(jn,"rel","nofollow"),m(Cn,"href","https://huggingface.co/kamalkraj"),m(Cn,"rel","nofollow"),m(qn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),m(qn,"rel","nofollow"),m(Uo,"id","transformers.DistilBertConfig"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#transformers.DistilBertConfig"),m(eo,"class","relative group"),m(Fi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertModel"),m(Bi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertModel"),m(On,"href","https://huggingface.co/distilbert-base-uncased"),m(On,"rel","nofollow"),m(xi,"href","/docs/transformers/v4.19.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(Mi,"href","/docs/transformers/v4.19.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","transformers.DistilBertTokenizer"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#transformers.DistilBertTokenizer"),m(oo,"class","relative group"),m(Ei,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizer"),m(zi,"href","/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer"),m(ji,"href","/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizer"),m(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jo,"id","transformers.DistilBertTokenizerFast"),m(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Jo,"href","#transformers.DistilBertTokenizerFast"),m(so,"class","relative group"),m(Ci,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),m(qi,"href","/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizerFast"),m(Pi,"href","/docs/transformers/v4.19.1/en/model_doc/bert#transformers.BertTokenizerFast"),m(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.DistilBertModel"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.DistilBertModel"),m(no,"class","relative group"),m(Ai,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),m(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jn,"rel","nofollow"),m(Oi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertModel"),m(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(es,"id","transformers.DistilBertForMaskedLM"),m(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(es,"href","#transformers.DistilBertForMaskedLM"),m(ao,"class","relative group"),m(Ni,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),m(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(or,"rel","nofollow"),m(Li,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ns,"id","transformers.DistilBertForSequenceClassification"),m(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ns,"href","#transformers.DistilBertForSequenceClassification"),m(lo,"class","relative group"),m(Si,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),m(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(lr,"rel","nofollow"),m(Ii,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(cs,"id","transformers.DistilBertForMultipleChoice"),m(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(cs,"href","#transformers.DistilBertForMultipleChoice"),m(po,"class","relative group"),m(Wi,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),m(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(fr,"rel","nofollow"),m(Qi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),m(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(us,"id","transformers.DistilBertForTokenClassification"),m(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(us,"href","#transformers.DistilBertForTokenClassification"),m(uo,"class","relative group"),m(Ri,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),m(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(kr,"rel","nofollow"),m(Ui,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_s,"id","transformers.DistilBertForQuestionAnswering"),m(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_s,"href","#transformers.DistilBertForQuestionAnswering"),m(mo,"class","relative group"),m(Hi,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),m(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Fr,"rel","nofollow"),m(Vi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ts,"id","transformers.TFDistilBertModel"),m(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ts,"href","#transformers.TFDistilBertModel"),m(vo,"class","relative group"),m(Ki,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(jr,"rel","nofollow"),m(Ji,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertModel"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ds,"id","transformers.TFDistilBertForMaskedLM"),m(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ds,"href","#transformers.TFDistilBertForMaskedLM"),m(ko,"class","relative group"),m(Gi,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Lr,"rel","nofollow"),m(Xi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Es,"id","transformers.TFDistilBertForSequenceClassification"),m(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Es,"href","#transformers.TFDistilBertForSequenceClassification"),m($o,"class","relative group"),m(Yi,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ur,"rel","nofollow"),m(Zi,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ps,"id","transformers.TFDistilBertForMultipleChoice"),m(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ps,"href","#transformers.TFDistilBertForMultipleChoice"),m(yo,"class","relative group"),m(el,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Xr,"rel","nofollow"),m(tl,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ls,"id","transformers.TFDistilBertForTokenClassification"),m(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ls,"href","#transformers.TFDistilBertForTokenClassification"),m(Fo,"class","relative group"),m(ol,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(sa,"rel","nofollow"),m(sl,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Rs,"id","transformers.TFDistilBertForQuestionAnswering"),m(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Rs,"href","#transformers.TFDistilBertForQuestionAnswering"),m(xo,"class","relative group"),m(nl,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(da,"rel","nofollow"),m(rl,"href","/docs/transformers/v4.19.1/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Js,"id","transformers.FlaxDistilBertModel"),m(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Js,"href","#transformers.FlaxDistilBertModel"),m(zo,"class","relative group"),m(al,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(ma,"rel","nofollow"),m(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(ga,"rel","nofollow"),m(_a,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(_a,"rel","nofollow"),m(va,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(va,"rel","nofollow"),m(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ba,"rel","nofollow"),m(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ys,"id","transformers.FlaxDistilBertForMaskedLM"),m(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ys,"href","#transformers.FlaxDistilBertForMaskedLM"),m(Co,"class","relative group"),m(il,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Fa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Fa,"rel","nofollow"),m(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Ba,"rel","nofollow"),m(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(xa,"rel","nofollow"),m(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Ma,"rel","nofollow"),m(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Ea,"rel","nofollow"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tn,"id","transformers.FlaxDistilBertForSequenceClassification"),m(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),m(Po,"class","relative group"),m(ll,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Aa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Aa,"rel","nofollow"),m(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Oa,"rel","nofollow"),m(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Na,"rel","nofollow"),m(La,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(La,"rel","nofollow"),m(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Sa,"rel","nofollow"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"id","transformers.FlaxDistilBertForMultipleChoice"),m(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(nn,"href","#transformers.FlaxDistilBertForMultipleChoice"),m(Oo,"class","relative group"),m(dl,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Ha,"rel","nofollow"),m(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Va,"rel","nofollow"),m(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Ka,"rel","nofollow"),m(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Ja,"rel","nofollow"),m(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Ga,"rel","nofollow"),m(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ln,"id","transformers.FlaxDistilBertForTokenClassification"),m(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ln,"href","#transformers.FlaxDistilBertForTokenClassification"),m(Lo,"class","relative group"),m(cl,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(oi,"rel","nofollow"),m(si,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(si,"rel","nofollow"),m(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(ni,"rel","nofollow"),m(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ri,"rel","nofollow"),m(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ai,"rel","nofollow"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pn,"id","transformers.FlaxDistilBertForQuestionAnswering"),m(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(pn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),m(Io,"class","relative group"),m(pl,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(hi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(hi,"rel","nofollow"),m(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(ui,"rel","nofollow"),m(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(fi,"rel","nofollow"),m(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(mi,"rel","nofollow"),m(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(gi,"rel","nofollow"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),v(o,g,b),v(o,c,b),e(c,u),e(u,_),w(l,_,null),e(c,f),e(c,x),e(x,he),v(o,V,b),v(o,E,b),e(E,G),e(G,S),w(X,S,null),e(E,ue),e(E,I),e(I,fe),v(o,le,b),v(o,N,b),e(N,P),e(N,Y),e(Y,K),e(N,z),e(N,j),e(j,me),e(N,W),e(N,oe),e(oe,ge),e(N,Q),v(o,de,b),v(o,ee,b),e(ee,A),v(o,ce,b),v(o,L,b),e(L,se),e(se,_e),v(o,q,b),v(o,te,b),e(te,R),v(o,pe,b),v(o,k,b),e(k,M),e(M,J),e(M,be),e(be,$e),e(M,O),e(M,ke),e(ke,we),e(M,ye),e(M,C),e(C,U),e(M,De),e(k,Fe),e(k,Z),e(Z,Be),e(Z,ne),e(ne,xe),e(Z,wu),v(o,xp,b),v(o,pt,b),e(pt,yu),e(pt,jn),e(jn,Du),e(pt,Fu),e(pt,Cn),e(Cn,Bu),e(pt,xu),e(pt,qn),e(qn,Mu),e(pt,Eu),v(o,Mp,b),v(o,eo,b),e(eo,Uo),e(Uo,Cl),w(Pn,Cl,null),e(eo,zu),e(eo,ql),e(ql,ju),v(o,Ep,b),v(o,lt,b),w(An,lt,null),e(lt,Cu),e(lt,xt),e(xt,qu),e(xt,Fi),e(Fi,Pu),e(xt,Au),e(xt,Bi),e(Bi,Ou),e(xt,Nu),e(xt,On),e(On,Lu),e(xt,Su),e(lt,Iu),e(lt,to),e(to,Wu),e(to,xi),e(xi,Qu),e(to,Ru),e(to,Mi),e(Mi,Uu),e(to,Hu),e(lt,Vu),w(Ho,lt,null),v(o,zp,b),v(o,oo,b),e(oo,Vo),e(Vo,Pl),w(Nn,Pl,null),e(oo,Ku),e(oo,Al),e(Al,Ju),v(o,jp,b),v(o,dt,b),w(Ln,dt,null),e(dt,Gu),e(dt,Ol),e(Ol,Xu),e(dt,Yu),e(dt,Ko),e(Ko,Ei),e(Ei,Zu),e(Ko,ef),e(Ko,zi),e(zi,tf),e(Ko,of),e(dt,sf),e(dt,Sn),e(Sn,nf),e(Sn,ji),e(ji,rf),e(Sn,af),v(o,Cp,b),v(o,so,b),e(so,Jo),e(Jo,Nl),w(In,Nl,null),e(so,lf),e(so,Ll),e(Ll,df),v(o,qp,b),v(o,ct,b),w(Wn,ct,null),e(ct,cf),e(ct,Qn),e(Qn,pf),e(Qn,Sl),e(Sl,hf),e(Qn,uf),e(ct,ff),e(ct,Go),e(Go,Ci),e(Ci,mf),e(Go,gf),e(Go,qi),e(qi,_f),e(Go,vf),e(ct,bf),e(ct,Rn),e(Rn,kf),e(Rn,Pi),e(Pi,Tf),e(Rn,$f),v(o,Pp,b),v(o,no,b),e(no,Xo),e(Xo,Il),w(Un,Il,null),e(no,wf),e(no,Wl),e(Wl,yf),v(o,Ap,b),v(o,We,b),w(Hn,We,null),e(We,Df),e(We,Ql),e(Ql,Ff),e(We,Bf),e(We,Vn),e(Vn,xf),e(Vn,Ai),e(Ai,Mf),e(Vn,Ef),e(We,zf),e(We,Kn),e(Kn,jf),e(Kn,Jn),e(Jn,Cf),e(Kn,qf),e(We,Pf),e(We,ht),w(Gn,ht,null),e(ht,Af),e(ht,ro),e(ro,Of),e(ro,Oi),e(Oi,Nf),e(ro,Lf),e(ro,Rl),e(Rl,Sf),e(ro,If),e(ht,Wf),w(Yo,ht,null),e(ht,Qf),w(Zo,ht,null),v(o,Op,b),v(o,ao,b),e(ao,es),e(es,Ul),w(Xn,Ul,null),e(ao,Rf),e(ao,Hl),e(Hl,Uf),v(o,Np,b),v(o,Qe,b),w(Yn,Qe,null),e(Qe,Hf),e(Qe,Zn),e(Zn,Vf),e(Zn,Vl),e(Vl,Kf),e(Zn,Jf),e(Qe,Gf),e(Qe,er),e(er,Xf),e(er,Ni),e(Ni,Yf),e(er,Zf),e(Qe,em),e(Qe,tr),e(tr,tm),e(tr,or),e(or,om),e(tr,sm),e(Qe,nm),e(Qe,Ke),w(sr,Ke,null),e(Ke,rm),e(Ke,io),e(io,am),e(io,Li),e(Li,im),e(io,lm),e(io,Kl),e(Kl,dm),e(io,cm),e(Ke,pm),w(ts,Ke,null),e(Ke,hm),w(os,Ke,null),e(Ke,um),w(ss,Ke,null),v(o,Lp,b),v(o,lo,b),e(lo,ns),e(ns,Jl),w(nr,Jl,null),e(lo,fm),e(lo,Gl),e(Gl,mm),v(o,Sp,b),v(o,Re,b),w(rr,Re,null),e(Re,gm),e(Re,Xl),e(Xl,_m),e(Re,vm),e(Re,ar),e(ar,bm),e(ar,Si),e(Si,km),e(ar,Tm),e(Re,$m),e(Re,ir),e(ir,wm),e(ir,lr),e(lr,ym),e(ir,Dm),e(Re,Fm),e(Re,Pe),w(dr,Pe,null),e(Pe,Bm),e(Pe,co),e(co,xm),e(co,Ii),e(Ii,Mm),e(co,Em),e(co,Yl),e(Yl,zm),e(co,jm),e(Pe,Cm),w(rs,Pe,null),e(Pe,qm),w(as,Pe,null),e(Pe,Pm),w(is,Pe,null),e(Pe,Am),w(ls,Pe,null),e(Pe,Om),w(ds,Pe,null),v(o,Ip,b),v(o,po,b),e(po,cs),e(cs,Zl),w(cr,Zl,null),e(po,Nm),e(po,ed),e(ed,Lm),v(o,Wp,b),v(o,Ue,b),w(pr,Ue,null),e(Ue,Sm),e(Ue,td),e(td,Im),e(Ue,Wm),e(Ue,hr),e(hr,Qm),e(hr,Wi),e(Wi,Rm),e(hr,Um),e(Ue,Hm),e(Ue,ur),e(ur,Vm),e(ur,fr),e(fr,Km),e(ur,Jm),e(Ue,Gm),e(Ue,ut),w(mr,ut,null),e(ut,Xm),e(ut,ho),e(ho,Ym),e(ho,Qi),e(Qi,Zm),e(ho,eg),e(ho,od),e(od,tg),e(ho,og),e(ut,sg),w(ps,ut,null),e(ut,ng),w(hs,ut,null),v(o,Qp,b),v(o,uo,b),e(uo,us),e(us,sd),w(gr,sd,null),e(uo,rg),e(uo,nd),e(nd,ag),v(o,Rp,b),v(o,He,b),w(_r,He,null),e(He,ig),e(He,rd),e(rd,lg),e(He,dg),e(He,vr),e(vr,cg),e(vr,Ri),e(Ri,pg),e(vr,hg),e(He,ug),e(He,br),e(br,fg),e(br,kr),e(kr,mg),e(br,gg),e(He,_g),e(He,Je),w(Tr,Je,null),e(Je,vg),e(Je,fo),e(fo,bg),e(fo,Ui),e(Ui,kg),e(fo,Tg),e(fo,ad),e(ad,$g),e(fo,wg),e(Je,yg),w(fs,Je,null),e(Je,Dg),w(ms,Je,null),e(Je,Fg),w(gs,Je,null),v(o,Up,b),v(o,mo,b),e(mo,_s),e(_s,id),w($r,id,null),e(mo,Bg),e(mo,ld),e(ld,xg),v(o,Hp,b),v(o,Ve,b),w(wr,Ve,null),e(Ve,Mg),e(Ve,go),e(go,Eg),e(go,dd),e(dd,zg),e(go,jg),e(go,cd),e(cd,Cg),e(go,qg),e(Ve,Pg),e(Ve,yr),e(yr,Ag),e(yr,Hi),e(Hi,Og),e(yr,Ng),e(Ve,Lg),e(Ve,Dr),e(Dr,Sg),e(Dr,Fr),e(Fr,Ig),e(Dr,Wg),e(Ve,Qg),e(Ve,Ge),w(Br,Ge,null),e(Ge,Rg),e(Ge,_o),e(_o,Ug),e(_o,Vi),e(Vi,Hg),e(_o,Vg),e(_o,pd),e(pd,Kg),e(_o,Jg),e(Ge,Gg),w(vs,Ge,null),e(Ge,Xg),w(bs,Ge,null),e(Ge,Yg),w(ks,Ge,null),v(o,Vp,b),v(o,vo,b),e(vo,Ts),e(Ts,hd),w(xr,hd,null),e(vo,Zg),e(vo,ud),e(ud,e_),v(o,Kp,b),v(o,Ae,b),w(Mr,Ae,null),e(Ae,t_),e(Ae,fd),e(fd,o_),e(Ae,s_),e(Ae,Er),e(Er,n_),e(Er,Ki),e(Ki,r_),e(Er,a_),e(Ae,i_),e(Ae,zr),e(zr,l_),e(zr,jr),e(jr,d_),e(zr,c_),e(Ae,p_),w($s,Ae,null),e(Ae,h_),e(Ae,ft),w(Cr,ft,null),e(ft,u_),e(ft,bo),e(bo,f_),e(bo,Ji),e(Ji,m_),e(bo,g_),e(bo,md),e(md,__),e(bo,v_),e(ft,b_),w(ws,ft,null),e(ft,k_),w(ys,ft,null),v(o,Jp,b),v(o,ko,b),e(ko,Ds),e(Ds,gd),w(qr,gd,null),e(ko,T_),e(ko,_d),e(_d,$_),v(o,Gp,b),v(o,Oe,b),w(Pr,Oe,null),e(Oe,w_),e(Oe,Ar),e(Ar,y_),e(Ar,vd),e(vd,D_),e(Ar,F_),e(Oe,B_),e(Oe,Or),e(Or,x_),e(Or,Gi),e(Gi,M_),e(Or,E_),e(Oe,z_),e(Oe,Nr),e(Nr,j_),e(Nr,Lr),e(Lr,C_),e(Nr,q_),e(Oe,P_),w(Fs,Oe,null),e(Oe,A_),e(Oe,Xe),w(Sr,Xe,null),e(Xe,O_),e(Xe,To),e(To,N_),e(To,Xi),e(Xi,L_),e(To,S_),e(To,bd),e(bd,I_),e(To,W_),e(Xe,Q_),w(Bs,Xe,null),e(Xe,R_),w(xs,Xe,null),e(Xe,U_),w(Ms,Xe,null),v(o,Xp,b),v(o,$o,b),e($o,Es),e(Es,kd),w(Ir,kd,null),e($o,H_),e($o,Td),e(Td,V_),v(o,Yp,b),v(o,Ne,b),w(Wr,Ne,null),e(Ne,K_),e(Ne,$d),e($d,J_),e(Ne,G_),e(Ne,Qr),e(Qr,X_),e(Qr,Yi),e(Yi,Y_),e(Qr,Z_),e(Ne,ev),e(Ne,Rr),e(Rr,tv),e(Rr,Ur),e(Ur,ov),e(Rr,sv),e(Ne,nv),w(zs,Ne,null),e(Ne,rv),e(Ne,Ye),w(Hr,Ye,null),e(Ye,av),e(Ye,wo),e(wo,iv),e(wo,Zi),e(Zi,lv),e(wo,dv),e(wo,wd),e(wd,cv),e(wo,pv),e(Ye,hv),w(js,Ye,null),e(Ye,uv),w(Cs,Ye,null),e(Ye,fv),w(qs,Ye,null),v(o,Zp,b),v(o,yo,b),e(yo,Ps),e(Ps,yd),w(Vr,yd,null),e(yo,mv),e(yo,Dd),e(Dd,gv),v(o,eh,b),v(o,Le,b),w(Kr,Le,null),e(Le,_v),e(Le,Fd),e(Fd,vv),e(Le,bv),e(Le,Jr),e(Jr,kv),e(Jr,el),e(el,Tv),e(Jr,$v),e(Le,wv),e(Le,Gr),e(Gr,yv),e(Gr,Xr),e(Xr,Dv),e(Gr,Fv),e(Le,Bv),w(As,Le,null),e(Le,xv),e(Le,mt),w(Yr,mt,null),e(mt,Mv),e(mt,Do),e(Do,Ev),e(Do,tl),e(tl,zv),e(Do,jv),e(Do,Bd),e(Bd,Cv),e(Do,qv),e(mt,Pv),w(Os,mt,null),e(mt,Av),w(Ns,mt,null),v(o,th,b),v(o,Fo,b),e(Fo,Ls),e(Ls,xd),w(Zr,xd,null),e(Fo,Ov),e(Fo,Md),e(Md,Nv),v(o,oh,b),v(o,Se,b),w(ea,Se,null),e(Se,Lv),e(Se,Ed),e(Ed,Sv),e(Se,Iv),e(Se,ta),e(ta,Wv),e(ta,ol),e(ol,Qv),e(ta,Rv),e(Se,Uv),e(Se,oa),e(oa,Hv),e(oa,sa),e(sa,Vv),e(oa,Kv),e(Se,Jv),w(Ss,Se,null),e(Se,Gv),e(Se,Ze),w(na,Ze,null),e(Ze,Xv),e(Ze,Bo),e(Bo,Yv),e(Bo,sl),e(sl,Zv),e(Bo,eb),e(Bo,zd),e(zd,tb),e(Bo,ob),e(Ze,sb),w(Is,Ze,null),e(Ze,nb),w(Ws,Ze,null),e(Ze,rb),w(Qs,Ze,null),v(o,sh,b),v(o,xo,b),e(xo,Rs),e(Rs,jd),w(ra,jd,null),e(xo,ab),e(xo,Cd),e(Cd,ib),v(o,nh,b),v(o,Ie,b),w(aa,Ie,null),e(Ie,lb),e(Ie,Mo),e(Mo,db),e(Mo,qd),e(qd,cb),e(Mo,pb),e(Mo,Pd),e(Pd,hb),e(Mo,ub),e(Ie,fb),e(Ie,ia),e(ia,mb),e(ia,nl),e(nl,gb),e(ia,_b),e(Ie,vb),e(Ie,la),e(la,bb),e(la,da),e(da,kb),e(la,Tb),e(Ie,$b),w(Us,Ie,null),e(Ie,wb),e(Ie,et),w(ca,et,null),e(et,yb),e(et,Eo),e(Eo,Db),e(Eo,rl),e(rl,Fb),e(Eo,Bb),e(Eo,Ad),e(Ad,xb),e(Eo,Mb),e(et,Eb),w(Hs,et,null),e(et,zb),w(Vs,et,null),e(et,jb),w(Ks,et,null),v(o,rh,b),v(o,zo,b),e(zo,Js),e(Js,Od),w(pa,Od,null),e(zo,Cb),e(zo,Nd),e(Nd,qb),v(o,ah,b),v(o,Me,b),w(ha,Me,null),e(Me,Pb),e(Me,Ld),e(Ld,Ab),e(Me,Ob),e(Me,ua),e(ua,Nb),e(ua,al),e(al,Lb),e(ua,Sb),e(Me,Ib),e(Me,fa),e(fa,Wb),e(fa,ma),e(ma,Qb),e(fa,Rb),e(Me,Ub),e(Me,Sd),e(Sd,Hb),e(Me,Vb),e(Me,Mt),e(Mt,Id),e(Id,ga),e(ga,Kb),e(Mt,Jb),e(Mt,Wd),e(Wd,_a),e(_a,Gb),e(Mt,Xb),e(Mt,Qd),e(Qd,va),e(va,Yb),e(Mt,Zb),e(Mt,Rd),e(Rd,ba),e(ba,e1),e(Me,t1),e(Me,gt),w(ka,gt,null),e(gt,o1),e(gt,jo),e(jo,s1),e(jo,Ud),e(Ud,n1),e(jo,r1),e(jo,Hd),e(Hd,a1),e(jo,i1),e(gt,l1),w(Gs,gt,null),e(gt,d1),w(Xs,gt,null),v(o,ih,b),v(o,Co,b),e(Co,Ys),e(Ys,Vd),w(Ta,Vd,null),e(Co,c1),e(Co,Kd),e(Kd,p1),v(o,lh,b),v(o,Ee,b),w($a,Ee,null),e(Ee,h1),e(Ee,wa),e(wa,u1),e(wa,Jd),e(Jd,f1),e(wa,m1),e(Ee,g1),e(Ee,ya),e(ya,_1),e(ya,il),e(il,v1),e(ya,b1),e(Ee,k1),e(Ee,Da),e(Da,T1),e(Da,Fa),e(Fa,$1),e(Da,w1),e(Ee,y1),e(Ee,Gd),e(Gd,D1),e(Ee,F1),e(Ee,Et),e(Et,Xd),e(Xd,Ba),e(Ba,B1),e(Et,x1),e(Et,Yd),e(Yd,xa),e(xa,M1),e(Et,E1),e(Et,Zd),e(Zd,Ma),e(Ma,z1),e(Et,j1),e(Et,ec),e(ec,Ea),e(Ea,C1),e(Ee,q1),e(Ee,_t),w(za,_t,null),e(_t,P1),e(_t,qo),e(qo,A1),e(qo,tc),e(tc,O1),e(qo,N1),e(qo,oc),e(oc,L1),e(qo,S1),e(_t,I1),w(Zs,_t,null),e(_t,W1),w(en,_t,null),v(o,dh,b),v(o,Po,b),e(Po,tn),e(tn,sc),w(ja,sc,null),e(Po,Q1),e(Po,nc),e(nc,R1),v(o,ch,b),v(o,ze,b),w(Ca,ze,null),e(ze,U1),e(ze,rc),e(rc,H1),e(ze,V1),e(ze,qa),e(qa,K1),e(qa,ll),e(ll,J1),e(qa,G1),e(ze,X1),e(ze,Pa),e(Pa,Y1),e(Pa,Aa),e(Aa,Z1),e(Pa,ek),e(ze,tk),e(ze,ac),e(ac,ok),e(ze,sk),e(ze,zt),e(zt,ic),e(ic,Oa),e(Oa,nk),e(zt,rk),e(zt,lc),e(lc,Na),e(Na,ak),e(zt,ik),e(zt,dc),e(dc,La),e(La,lk),e(zt,dk),e(zt,cc),e(cc,Sa),e(Sa,ck),e(ze,pk),e(ze,vt),w(Ia,vt,null),e(vt,hk),e(vt,Ao),e(Ao,uk),e(Ao,pc),e(pc,fk),e(Ao,mk),e(Ao,hc),e(hc,gk),e(Ao,_k),e(vt,vk),w(on,vt,null),e(vt,bk),w(sn,vt,null),v(o,ph,b),v(o,Oo,b),e(Oo,nn),e(nn,uc),w(Wa,uc,null),e(Oo,kk),e(Oo,fc),e(fc,Tk),v(o,hh,b),v(o,je,b),w(Qa,je,null),e(je,$k),e(je,mc),e(mc,wk),e(je,yk),e(je,Ra),e(Ra,Dk),e(Ra,dl),e(dl,Fk),e(Ra,Bk),e(je,xk),e(je,Ua),e(Ua,Mk),e(Ua,Ha),e(Ha,Ek),e(Ua,zk),e(je,jk),e(je,gc),e(gc,Ck),e(je,qk),e(je,jt),e(jt,_c),e(_c,Va),e(Va,Pk),e(jt,Ak),e(jt,vc),e(vc,Ka),e(Ka,Ok),e(jt,Nk),e(jt,bc),e(bc,Ja),e(Ja,Lk),e(jt,Sk),e(jt,kc),e(kc,Ga),e(Ga,Ik),e(je,Wk),e(je,bt),w(Xa,bt,null),e(bt,Qk),e(bt,No),e(No,Rk),e(No,Tc),e(Tc,Uk),e(No,Hk),e(No,$c),e($c,Vk),e(No,Kk),e(bt,Jk),w(rn,bt,null),e(bt,Gk),w(an,bt,null),v(o,uh,b),v(o,Lo,b),e(Lo,ln),e(ln,wc),w(Ya,wc,null),e(Lo,Xk),e(Lo,yc),e(yc,Yk),v(o,fh,b),v(o,Ce,b),w(Za,Ce,null),e(Ce,Zk),e(Ce,Dc),e(Dc,eT),e(Ce,tT),e(Ce,ei),e(ei,oT),e(ei,cl),e(cl,sT),e(ei,nT),e(Ce,rT),e(Ce,ti),e(ti,aT),e(ti,oi),e(oi,iT),e(ti,lT),e(Ce,dT),e(Ce,Fc),e(Fc,cT),e(Ce,pT),e(Ce,Ct),e(Ct,Bc),e(Bc,si),e(si,hT),e(Ct,uT),e(Ct,xc),e(xc,ni),e(ni,fT),e(Ct,mT),e(Ct,Mc),e(Mc,ri),e(ri,gT),e(Ct,_T),e(Ct,Ec),e(Ec,ai),e(ai,vT),e(Ce,bT),e(Ce,kt),w(ii,kt,null),e(kt,kT),e(kt,So),e(So,TT),e(So,zc),e(zc,$T),e(So,wT),e(So,jc),e(jc,yT),e(So,DT),e(kt,FT),w(dn,kt,null),e(kt,BT),w(cn,kt,null),v(o,mh,b),v(o,Io,b),e(Io,pn),e(pn,Cc),w(li,Cc,null),e(Io,xT),e(Io,qc),e(qc,MT),v(o,gh,b),v(o,qe,b),w(di,qe,null),e(qe,ET),e(qe,Wo),e(Wo,zT),e(Wo,Pc),e(Pc,jT),e(Wo,CT),e(Wo,Ac),e(Ac,qT),e(Wo,PT),e(qe,AT),e(qe,ci),e(ci,OT),e(ci,pl),e(pl,NT),e(ci,LT),e(qe,ST),e(qe,pi),e(pi,IT),e(pi,hi),e(hi,WT),e(pi,QT),e(qe,RT),e(qe,Oc),e(Oc,UT),e(qe,HT),e(qe,qt),e(qt,Nc),e(Nc,ui),e(ui,VT),e(qt,KT),e(qt,Lc),e(Lc,fi),e(fi,JT),e(qt,GT),e(qt,Sc),e(Sc,mi),e(mi,XT),e(qt,YT),e(qt,Ic),e(Ic,gi),e(gi,ZT),e(qe,e$),e(qe,Tt),w(_i,Tt,null),e(Tt,t$),e(Tt,Qo),e(Qo,o$),e(Qo,Wc),e(Wc,s$),e(Qo,n$),e(Qo,Qc),e(Qc,r$),e(Qo,a$),e(Tt,i$),w(hn,Tt,null),e(Tt,l$),w(un,Tt,null),_h=!0},p(o,[b]){const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),Ho.$set(vi);const Rc={};b&2&&(Rc.$$scope={dirty:b,ctx:o}),Yo.$set(Rc);const Uc={};b&2&&(Uc.$$scope={dirty:b,ctx:o}),Zo.$set(Uc);const Hc={};b&2&&(Hc.$$scope={dirty:b,ctx:o}),ts.$set(Hc);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),os.$set(bi);const Vc={};b&2&&(Vc.$$scope={dirty:b,ctx:o}),ss.$set(Vc);const Kc={};b&2&&(Kc.$$scope={dirty:b,ctx:o}),rs.$set(Kc);const Jc={};b&2&&(Jc.$$scope={dirty:b,ctx:o}),as.$set(Jc);const Pt={};b&2&&(Pt.$$scope={dirty:b,ctx:o}),is.$set(Pt);const Gc={};b&2&&(Gc.$$scope={dirty:b,ctx:o}),ls.$set(Gc);const Xc={};b&2&&(Xc.$$scope={dirty:b,ctx:o}),ds.$set(Xc);const Yc={};b&2&&(Yc.$$scope={dirty:b,ctx:o}),ps.$set(Yc);const Zc={};b&2&&(Zc.$$scope={dirty:b,ctx:o}),hs.$set(Zc);const ep={};b&2&&(ep.$$scope={dirty:b,ctx:o}),fs.$set(ep);const tp={};b&2&&(tp.$$scope={dirty:b,ctx:o}),ms.$set(tp);const op={};b&2&&(op.$$scope={dirty:b,ctx:o}),gs.$set(op);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),vs.$set(ki);const At={};b&2&&(At.$$scope={dirty:b,ctx:o}),bs.$set(At);const sp={};b&2&&(sp.$$scope={dirty:b,ctx:o}),ks.$set(sp);const np={};b&2&&(np.$$scope={dirty:b,ctx:o}),$s.$set(np);const rp={};b&2&&(rp.$$scope={dirty:b,ctx:o}),ws.$set(rp);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),ys.$set(Ti);const ap={};b&2&&(ap.$$scope={dirty:b,ctx:o}),Fs.$set(ap);const Ot={};b&2&&(Ot.$$scope={dirty:b,ctx:o}),Bs.$set(Ot);const ip={};b&2&&(ip.$$scope={dirty:b,ctx:o}),xs.$set(ip);const lp={};b&2&&(lp.$$scope={dirty:b,ctx:o}),Ms.$set(lp);const dp={};b&2&&(dp.$$scope={dirty:b,ctx:o}),zs.$set(dp);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),js.$set($i);const cp={};b&2&&(cp.$$scope={dirty:b,ctx:o}),Cs.$set(cp);const pp={};b&2&&(pp.$$scope={dirty:b,ctx:o}),qs.$set(pp);const hp={};b&2&&(hp.$$scope={dirty:b,ctx:o}),As.$set(hp);const Nt={};b&2&&(Nt.$$scope={dirty:b,ctx:o}),Os.$set(Nt);const Lt={};b&2&&(Lt.$$scope={dirty:b,ctx:o}),Ns.$set(Lt);const up={};b&2&&(up.$$scope={dirty:b,ctx:o}),Ss.$set(up);const fp={};b&2&&(fp.$$scope={dirty:b,ctx:o}),Is.$set(fp);const mp={};b&2&&(mp.$$scope={dirty:b,ctx:o}),Ws.$set(mp);const Ro={};b&2&&(Ro.$$scope={dirty:b,ctx:o}),Qs.$set(Ro);const gp={};b&2&&(gp.$$scope={dirty:b,ctx:o}),Us.$set(gp);const _p={};b&2&&(_p.$$scope={dirty:b,ctx:o}),Hs.$set(_p);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),Vs.$set(wi);const vp={};b&2&&(vp.$$scope={dirty:b,ctx:o}),Ks.$set(vp);const bp={};b&2&&(bp.$$scope={dirty:b,ctx:o}),Gs.$set(bp);const kp={};b&2&&(kp.$$scope={dirty:b,ctx:o}),Xs.$set(kp);const St={};b&2&&(St.$$scope={dirty:b,ctx:o}),Zs.$set(St);const Tp={};b&2&&(Tp.$$scope={dirty:b,ctx:o}),en.$set(Tp);const fn={};b&2&&(fn.$$scope={dirty:b,ctx:o}),on.$set(fn);const $p={};b&2&&($p.$$scope={dirty:b,ctx:o}),sn.$set($p);const wp={};b&2&&(wp.$$scope={dirty:b,ctx:o}),rn.$set(wp);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),an.$set(yi);const yp={};b&2&&(yp.$$scope={dirty:b,ctx:o}),dn.$set(yp);const Di={};b&2&&(Di.$$scope={dirty:b,ctx:o}),cn.$set(Di);const Dp={};b&2&&(Dp.$$scope={dirty:b,ctx:o}),hn.$set(Dp);const Fp={};b&2&&(Fp.$$scope={dirty:b,ctx:o}),un.$set(Fp)},i(o){_h||(y(l.$$.fragment,o),y(X.$$.fragment,o),y(Pn.$$.fragment,o),y(An.$$.fragment,o),y(Ho.$$.fragment,o),y(Nn.$$.fragment,o),y(Ln.$$.fragment,o),y(In.$$.fragment,o),y(Wn.$$.fragment,o),y(Un.$$.fragment,o),y(Hn.$$.fragment,o),y(Gn.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(sr.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ss.$$.fragment,o),y(nr.$$.fragment,o),y(rr.$$.fragment,o),y(dr.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(cr.$$.fragment,o),y(pr.$$.fragment,o),y(mr.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(gr.$$.fragment,o),y(_r.$$.fragment,o),y(Tr.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(gs.$$.fragment,o),y($r.$$.fragment,o),y(wr.$$.fragment,o),y(Br.$$.fragment,o),y(vs.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(xr.$$.fragment,o),y(Mr.$$.fragment,o),y($s.$$.fragment,o),y(Cr.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(qr.$$.fragment,o),y(Pr.$$.fragment,o),y(Fs.$$.fragment,o),y(Sr.$$.fragment,o),y(Bs.$$.fragment,o),y(xs.$$.fragment,o),y(Ms.$$.fragment,o),y(Ir.$$.fragment,o),y(Wr.$$.fragment,o),y(zs.$$.fragment,o),y(Hr.$$.fragment,o),y(js.$$.fragment,o),y(Cs.$$.fragment,o),y(qs.$$.fragment,o),y(Vr.$$.fragment,o),y(Kr.$$.fragment,o),y(As.$$.fragment,o),y(Yr.$$.fragment,o),y(Os.$$.fragment,o),y(Ns.$$.fragment,o),y(Zr.$$.fragment,o),y(ea.$$.fragment,o),y(Ss.$$.fragment,o),y(na.$$.fragment,o),y(Is.$$.fragment,o),y(Ws.$$.fragment,o),y(Qs.$$.fragment,o),y(ra.$$.fragment,o),y(aa.$$.fragment,o),y(Us.$$.fragment,o),y(ca.$$.fragment,o),y(Hs.$$.fragment,o),y(Vs.$$.fragment,o),y(Ks.$$.fragment,o),y(pa.$$.fragment,o),y(ha.$$.fragment,o),y(ka.$$.fragment,o),y(Gs.$$.fragment,o),y(Xs.$$.fragment,o),y(Ta.$$.fragment,o),y($a.$$.fragment,o),y(za.$$.fragment,o),y(Zs.$$.fragment,o),y(en.$$.fragment,o),y(ja.$$.fragment,o),y(Ca.$$.fragment,o),y(Ia.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(Wa.$$.fragment,o),y(Qa.$$.fragment,o),y(Xa.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(ii.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(li.$$.fragment,o),y(di.$$.fragment,o),y(_i.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),_h=!0)},o(o){D(l.$$.fragment,o),D(X.$$.fragment,o),D(Pn.$$.fragment,o),D(An.$$.fragment,o),D(Ho.$$.fragment,o),D(Nn.$$.fragment,o),D(Ln.$$.fragment,o),D(In.$$.fragment,o),D(Wn.$$.fragment,o),D(Un.$$.fragment,o),D(Hn.$$.fragment,o),D(Gn.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(Xn.$$.fragment,o),D(Yn.$$.fragment,o),D(sr.$$.fragment,o),D(ts.$$.fragment,o),D(os.$$.fragment,o),D(ss.$$.fragment,o),D(nr.$$.fragment,o),D(rr.$$.fragment,o),D(dr.$$.fragment,o),D(rs.$$.fragment,o),D(as.$$.fragment,o),D(is.$$.fragment,o),D(ls.$$.fragment,o),D(ds.$$.fragment,o),D(cr.$$.fragment,o),D(pr.$$.fragment,o),D(mr.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(gr.$$.fragment,o),D(_r.$$.fragment,o),D(Tr.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(gs.$$.fragment,o),D($r.$$.fragment,o),D(wr.$$.fragment,o),D(Br.$$.fragment,o),D(vs.$$.fragment,o),D(bs.$$.fragment,o),D(ks.$$.fragment,o),D(xr.$$.fragment,o),D(Mr.$$.fragment,o),D($s.$$.fragment,o),D(Cr.$$.fragment,o),D(ws.$$.fragment,o),D(ys.$$.fragment,o),D(qr.$$.fragment,o),D(Pr.$$.fragment,o),D(Fs.$$.fragment,o),D(Sr.$$.fragment,o),D(Bs.$$.fragment,o),D(xs.$$.fragment,o),D(Ms.$$.fragment,o),D(Ir.$$.fragment,o),D(Wr.$$.fragment,o),D(zs.$$.fragment,o),D(Hr.$$.fragment,o),D(js.$$.fragment,o),D(Cs.$$.fragment,o),D(qs.$$.fragment,o),D(Vr.$$.fragment,o),D(Kr.$$.fragment,o),D(As.$$.fragment,o),D(Yr.$$.fragment,o),D(Os.$$.fragment,o),D(Ns.$$.fragment,o),D(Zr.$$.fragment,o),D(ea.$$.fragment,o),D(Ss.$$.fragment,o),D(na.$$.fragment,o),D(Is.$$.fragment,o),D(Ws.$$.fragment,o),D(Qs.$$.fragment,o),D(ra.$$.fragment,o),D(aa.$$.fragment,o),D(Us.$$.fragment,o),D(ca.$$.fragment,o),D(Hs.$$.fragment,o),D(Vs.$$.fragment,o),D(Ks.$$.fragment,o),D(pa.$$.fragment,o),D(ha.$$.fragment,o),D(ka.$$.fragment,o),D(Gs.$$.fragment,o),D(Xs.$$.fragment,o),D(Ta.$$.fragment,o),D($a.$$.fragment,o),D(za.$$.fragment,o),D(Zs.$$.fragment,o),D(en.$$.fragment,o),D(ja.$$.fragment,o),D(Ca.$$.fragment,o),D(Ia.$$.fragment,o),D(on.$$.fragment,o),D(sn.$$.fragment,o),D(Wa.$$.fragment,o),D(Qa.$$.fragment,o),D(Xa.$$.fragment,o),D(rn.$$.fragment,o),D(an.$$.fragment,o),D(Ya.$$.fragment,o),D(Za.$$.fragment,o),D(ii.$$.fragment,o),D(dn.$$.fragment,o),D(cn.$$.fragment,o),D(li.$$.fragment,o),D(di.$$.fragment,o),D(_i.$$.fragment,o),D(hn.$$.fragment,o),D(un.$$.fragment,o),_h=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(V),o&&t(E),F(X),o&&t(le),o&&t(N),o&&t(de),o&&t(ee),o&&t(ce),o&&t(L),o&&t(q),o&&t(te),o&&t(pe),o&&t(k),o&&t(xp),o&&t(pt),o&&t(Mp),o&&t(eo),F(Pn),o&&t(Ep),o&&t(lt),F(An),F(Ho),o&&t(zp),o&&t(oo),F(Nn),o&&t(jp),o&&t(dt),F(Ln),o&&t(Cp),o&&t(so),F(In),o&&t(qp),o&&t(ct),F(Wn),o&&t(Pp),o&&t(no),F(Un),o&&t(Ap),o&&t(We),F(Hn),F(Gn),F(Yo),F(Zo),o&&t(Op),o&&t(ao),F(Xn),o&&t(Np),o&&t(Qe),F(Yn),F(sr),F(ts),F(os),F(ss),o&&t(Lp),o&&t(lo),F(nr),o&&t(Sp),o&&t(Re),F(rr),F(dr),F(rs),F(as),F(is),F(ls),F(ds),o&&t(Ip),o&&t(po),F(cr),o&&t(Wp),o&&t(Ue),F(pr),F(mr),F(ps),F(hs),o&&t(Qp),o&&t(uo),F(gr),o&&t(Rp),o&&t(He),F(_r),F(Tr),F(fs),F(ms),F(gs),o&&t(Up),o&&t(mo),F($r),o&&t(Hp),o&&t(Ve),F(wr),F(Br),F(vs),F(bs),F(ks),o&&t(Vp),o&&t(vo),F(xr),o&&t(Kp),o&&t(Ae),F(Mr),F($s),F(Cr),F(ws),F(ys),o&&t(Jp),o&&t(ko),F(qr),o&&t(Gp),o&&t(Oe),F(Pr),F(Fs),F(Sr),F(Bs),F(xs),F(Ms),o&&t(Xp),o&&t($o),F(Ir),o&&t(Yp),o&&t(Ne),F(Wr),F(zs),F(Hr),F(js),F(Cs),F(qs),o&&t(Zp),o&&t(yo),F(Vr),o&&t(eh),o&&t(Le),F(Kr),F(As),F(Yr),F(Os),F(Ns),o&&t(th),o&&t(Fo),F(Zr),o&&t(oh),o&&t(Se),F(ea),F(Ss),F(na),F(Is),F(Ws),F(Qs),o&&t(sh),o&&t(xo),F(ra),o&&t(nh),o&&t(Ie),F(aa),F(Us),F(ca),F(Hs),F(Vs),F(Ks),o&&t(rh),o&&t(zo),F(pa),o&&t(ah),o&&t(Me),F(ha),F(ka),F(Gs),F(Xs),o&&t(ih),o&&t(Co),F(Ta),o&&t(lh),o&&t(Ee),F($a),F(za),F(Zs),F(en),o&&t(dh),o&&t(Po),F(ja),o&&t(ch),o&&t(ze),F(Ca),F(Ia),F(on),F(sn),o&&t(ph),o&&t(Oo),F(Wa),o&&t(hh),o&&t(je),F(Qa),F(Xa),F(rn),F(an),o&&t(uh),o&&t(Lo),F(Ya),o&&t(fh),o&&t(Ce),F(Za),F(ii),F(dn),F(cn),o&&t(mh),o&&t(Io),F(li),o&&t(gh),o&&t(qe),F(di),F(_i),F(hn),F(un)}}}const nF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rF(B){return sD(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hF extends Z2{constructor(d){super();eD(this,d,rF,sF,tD,{})}}export{hF as default,nF as metadata};
